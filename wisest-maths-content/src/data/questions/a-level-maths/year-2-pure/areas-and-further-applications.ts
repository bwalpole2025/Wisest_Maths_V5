import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "questionDiagram": null,
    "id": "al.y2.pure.areas-applications.q001",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "areas",
      "area under curve"
    ],
    "questionText": "The region $R$ is bounded by the curve $y = x^{2}$, the $x$-axis, and the lines $x = 0$ and $x = 2$. Find the exact area of $R$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the area integral",
          "workingLatex": "A = \\int_{0}^{2} x^{2}\\,dx",
          "explanation": "Area under a curve above the $x$-axis is the definite integral of $y$ with respect to $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the antiderivative",
          "workingLatex": "\\int x^{2}\\,dx = \\dfrac{x^{3}}{3}",
          "explanation": "Integrate the function term by term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write with limit notation",
          "workingLatex": "A = \\left[ \\dfrac{x^{3}}{3} \\right]_{0}^{2}",
          "explanation": "Evaluate the antiderivative between the given limits.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the upper limit",
          "workingLatex": "F(2)",
          "explanation": "Replace $x$ with the upper limit.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the lower limit",
          "workingLatex": "F(0)",
          "explanation": "Replace $x$ with the lower limit.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Subtract",
          "workingLatex": "F(2) - F(0)",
          "explanation": "The definite integral is $F(b) - F(a)$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate",
          "workingLatex": "A = \\dfrac{8}{3}",
          "explanation": "Simplify to an exact value.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret",
          "workingLatex": "Area under a parabola on $[0,2]$.",
          "explanation": "The result is the area in square units.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= \\dfrac{8}{3}$ square units."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "questionDiagram": null,
    "id": "al.y2.pure.areas-applications.q002",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "areas",
      "area under curve"
    ],
    "questionText": "The region $R$ is bounded by the curve $y = 2x$, the $x$-axis, and the lines $x = 0$ and $x = 3$. Find the exact area of $R$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the area integral",
          "workingLatex": "A = \\int_{0}^{3} 2x\\,dx",
          "explanation": "Area under a curve above the $x$-axis is the definite integral of $y$ with respect to $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the antiderivative",
          "workingLatex": "\\int 2x\\,dx = x^{2}",
          "explanation": "Integrate the function term by term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write with limit notation",
          "workingLatex": "A = \\left[ x^{2} \\right]_{0}^{3}",
          "explanation": "Evaluate the antiderivative between the given limits.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the upper limit",
          "workingLatex": "F(3)",
          "explanation": "Replace $x$ with the upper limit.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the lower limit",
          "workingLatex": "F(0)",
          "explanation": "Replace $x$ with the lower limit.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Subtract",
          "workingLatex": "F(3) - F(0)",
          "explanation": "The definite integral is $F(b) - F(a)$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate",
          "workingLatex": "A = 9",
          "explanation": "Simplify to an exact value.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret",
          "workingLatex": "Area under a straight line.",
          "explanation": "The result is the area in square units.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= 9$ square units."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "questionDiagram": null,
    "id": "al.y2.pure.areas-applications.q003",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "areas",
      "area under curve"
    ],
    "questionText": "The region $R$ is bounded by the curve $y = x^{2} + 1$, the $x$-axis, and the lines $x = 0$ and $x = 1$. Find the exact area of $R$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the area integral",
          "workingLatex": "A = \\int_{0}^{1} x^{2} + 1\\,dx",
          "explanation": "Area under a curve above the $x$-axis is the definite integral of $y$ with respect to $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the antiderivative",
          "workingLatex": "\\int x^{2} + 1\\,dx = \\dfrac{x^{3}}{3} + x",
          "explanation": "Integrate the function term by term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write with limit notation",
          "workingLatex": "A = \\left[ \\dfrac{x^{3}}{3} + x \\right]_{0}^{1}",
          "explanation": "Evaluate the antiderivative between the given limits.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the upper limit",
          "workingLatex": "F(1)",
          "explanation": "Replace $x$ with the upper limit.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the lower limit",
          "workingLatex": "F(0)",
          "explanation": "Replace $x$ with the lower limit.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Subtract",
          "workingLatex": "F(1) - F(0)",
          "explanation": "The definite integral is $F(b) - F(a)$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate",
          "workingLatex": "A = \\dfrac{4}{3}",
          "explanation": "Simplify to an exact value.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret",
          "workingLatex": "Shifted parabola.",
          "explanation": "The result is the area in square units.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= \\dfrac{4}{3}$ square units."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "questionDiagram": null,
    "id": "al.y2.pure.areas-applications.q004",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "areas",
      "area under curve"
    ],
    "questionText": "The region $R$ is bounded by the curve $y = 3x^{2}$, the $x$-axis, and the lines $x = 1$ and $x = 2$. Find the exact area of $R$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the area integral",
          "workingLatex": "A = \\int_{1}^{2} 3x^{2}\\,dx",
          "explanation": "Area under a curve above the $x$-axis is the definite integral of $y$ with respect to $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the antiderivative",
          "workingLatex": "\\int 3x^{2}\\,dx = x^{3}",
          "explanation": "Integrate the function term by term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write with limit notation",
          "workingLatex": "A = \\left[ x^{3} \\right]_{1}^{2}",
          "explanation": "Evaluate the antiderivative between the given limits.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the upper limit",
          "workingLatex": "F(2)",
          "explanation": "Replace $x$ with the upper limit.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the lower limit",
          "workingLatex": "F(1)",
          "explanation": "Replace $x$ with the lower limit.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Subtract",
          "workingLatex": "F(2) - F(1)",
          "explanation": "The definite integral is $F(b) - F(a)$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate",
          "workingLatex": "A = 7",
          "explanation": "Simplify to an exact value.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret",
          "workingLatex": "Cubic antiderivative.",
          "explanation": "The result is the area in square units.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= 7$ square units."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "questionDiagram": null,
    "id": "al.y2.pure.areas-applications.q005",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "areas",
      "area under curve"
    ],
    "questionText": "The region $R$ is bounded by the curve $y = 4 - x^{2}$, the $x$-axis, and the lines $x = 0$ and $x = 2$. Find the exact area of $R$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the area integral",
          "workingLatex": "A = \\int_{0}^{2} 4 - x^{2}\\,dx",
          "explanation": "Area under a curve above the $x$-axis is the definite integral of $y$ with respect to $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the antiderivative",
          "workingLatex": "\\int 4 - x^{2}\\,dx = 4x - \\dfrac{x^{3}}{3}",
          "explanation": "Integrate the function term by term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write with limit notation",
          "workingLatex": "A = \\left[ 4x - \\dfrac{x^{3}}{3} \\right]_{0}^{2}",
          "explanation": "Evaluate the antiderivative between the given limits.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the upper limit",
          "workingLatex": "F(2)",
          "explanation": "Replace $x$ with the upper limit.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the lower limit",
          "workingLatex": "F(0)",
          "explanation": "Replace $x$ with the lower limit.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Subtract",
          "workingLatex": "F(2) - F(0)",
          "explanation": "The definite integral is $F(b) - F(a)$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate",
          "workingLatex": "A = \\dfrac{16}{3}",
          "explanation": "Simplify to an exact value.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret",
          "workingLatex": "Quadratic arch above the axis.",
          "explanation": "The result is the area in square units.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= \\dfrac{16}{3}$ square units."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "questionDiagram": null,
    "id": "al.y2.pure.areas-applications.q006",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "areas",
      "area under curve"
    ],
    "questionText": "The region $R$ is bounded by the curve $y = x^{3}$, the $x$-axis, and the lines $x = 0$ and $x = 2$. Find the exact area of $R$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the area integral",
          "workingLatex": "A = \\int_{0}^{2} x^{3}\\,dx",
          "explanation": "Area under a curve above the $x$-axis is the definite integral of $y$ with respect to $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the antiderivative",
          "workingLatex": "\\int x^{3}\\,dx = \\dfrac{x^{4}}{4}",
          "explanation": "Integrate the function term by term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write with limit notation",
          "workingLatex": "A = \\left[ \\dfrac{x^{4}}{4} \\right]_{0}^{2}",
          "explanation": "Evaluate the antiderivative between the given limits.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the upper limit",
          "workingLatex": "F(2)",
          "explanation": "Replace $x$ with the upper limit.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the lower limit",
          "workingLatex": "F(0)",
          "explanation": "Replace $x$ with the lower limit.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Subtract",
          "workingLatex": "F(2) - F(0)",
          "explanation": "The definite integral is $F(b) - F(a)$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate",
          "workingLatex": "A = 4",
          "explanation": "Simplify to an exact value.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret",
          "workingLatex": "Cubic curve.",
          "explanation": "The result is the area in square units.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= 4$ square units."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "questionDiagram": null,
    "id": "al.y2.pure.areas-applications.q007",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "areas",
      "area under curve"
    ],
    "questionText": "The region $R$ is bounded by the curve $y = 5$, the $x$-axis, and the lines $x = 0$ and $x = 4$. Find the exact area of $R$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the area integral",
          "workingLatex": "A = \\int_{0}^{4} 5\\,dx",
          "explanation": "Area under a curve above the $x$-axis is the definite integral of $y$ with respect to $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the antiderivative",
          "workingLatex": "\\int 5\\,dx = 5x",
          "explanation": "Integrate the function term by term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write with limit notation",
          "workingLatex": "A = \\left[ 5x \\right]_{0}^{4}",
          "explanation": "Evaluate the antiderivative between the given limits.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the upper limit",
          "workingLatex": "F(4)",
          "explanation": "Replace $x$ with the upper limit.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the lower limit",
          "workingLatex": "F(0)",
          "explanation": "Replace $x$ with the lower limit.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Subtract",
          "workingLatex": "F(4) - F(0)",
          "explanation": "The definite integral is $F(b) - F(a)$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate",
          "workingLatex": "A = 20",
          "explanation": "Simplify to an exact value.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret",
          "workingLatex": "Constant function — rectangle area.",
          "explanation": "The result is the area in square units.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= 20$ square units."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "questionDiagram": null,
    "id": "al.y2.pure.areas-applications.q008",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "areas",
      "area under curve"
    ],
    "questionText": "The region $R$ is bounded by the curve $y = x^{2} - 2x + 3$, the $x$-axis, and the lines $x = 0$ and $x = 1$. Find the exact area of $R$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the area integral",
          "workingLatex": "A = \\int_{0}^{1} x^{2} - 2x + 3\\,dx",
          "explanation": "Area under a curve above the $x$-axis is the definite integral of $y$ with respect to $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the antiderivative",
          "workingLatex": "\\int x^{2} - 2x + 3\\,dx = \\dfrac{x^{3}}{3} - x^{2} + 3x",
          "explanation": "Integrate the function term by term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write with limit notation",
          "workingLatex": "A = \\left[ \\dfrac{x^{3}}{3} - x^{2} + 3x \\right]_{0}^{1}",
          "explanation": "Evaluate the antiderivative between the given limits.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the upper limit",
          "workingLatex": "F(1)",
          "explanation": "Replace $x$ with the upper limit.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the lower limit",
          "workingLatex": "F(0)",
          "explanation": "Replace $x$ with the lower limit.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Subtract",
          "workingLatex": "F(1) - F(0)",
          "explanation": "The definite integral is $F(b) - F(a)$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate",
          "workingLatex": "A = \\dfrac{7}{3}",
          "explanation": "Simplify to an exact value.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret",
          "workingLatex": "Quadratic above axis on $[0,1]$.",
          "explanation": "The result is the area in square units.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= \\dfrac{7}{3}$ square units."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "questionDiagram": null,
    "id": "al.y2.pure.areas-applications.q009",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "areas",
      "area under curve"
    ],
    "questionText": "The region $R$ is bounded by the curve $y = 2x + 1$, the $x$-axis, and the lines $x = 0$ and $x = 2$. Find the exact area of $R$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the area integral",
          "workingLatex": "A = \\int_{0}^{2} 2x + 1\\,dx",
          "explanation": "Area under a curve above the $x$-axis is the definite integral of $y$ with respect to $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the antiderivative",
          "workingLatex": "\\int 2x + 1\\,dx = x^{2} + x",
          "explanation": "Integrate the function term by term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write with limit notation",
          "workingLatex": "A = \\left[ x^{2} + x \\right]_{0}^{2}",
          "explanation": "Evaluate the antiderivative between the given limits.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the upper limit",
          "workingLatex": "F(2)",
          "explanation": "Replace $x$ with the upper limit.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the lower limit",
          "workingLatex": "F(0)",
          "explanation": "Replace $x$ with the lower limit.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Subtract",
          "workingLatex": "F(2) - F(0)",
          "explanation": "The definite integral is $F(b) - F(a)$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate",
          "workingLatex": "A = 6",
          "explanation": "Simplify to an exact value.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret",
          "workingLatex": "Linear function.",
          "explanation": "The result is the area in square units.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= 6$ square units."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "questionDiagram": null,
    "id": "al.y2.pure.areas-applications.q010",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "areas",
      "area under curve"
    ],
    "questionText": "The region $R$ is bounded by the curve $y = x^{2} + 2x$, the $x$-axis, and the lines $x = 0$ and $x = 1$. Find the exact area of $R$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the area integral",
          "workingLatex": "A = \\int_{0}^{1} x^{2} + 2x\\,dx",
          "explanation": "Area under a curve above the $x$-axis is the definite integral of $y$ with respect to $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the antiderivative",
          "workingLatex": "\\int x^{2} + 2x\\,dx = \\dfrac{x^{3}}{3} + x^{2}",
          "explanation": "Integrate the function term by term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write with limit notation",
          "workingLatex": "A = \\left[ \\dfrac{x^{3}}{3} + x^{2} \\right]_{0}^{1}",
          "explanation": "Evaluate the antiderivative between the given limits.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the upper limit",
          "workingLatex": "F(1)",
          "explanation": "Replace $x$ with the upper limit.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the lower limit",
          "workingLatex": "F(0)",
          "explanation": "Replace $x$ with the lower limit.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Subtract",
          "workingLatex": "F(1) - F(0)",
          "explanation": "The definite integral is $F(b) - F(a)$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate",
          "workingLatex": "A = \\dfrac{4}{3}",
          "explanation": "Simplify to an exact value.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret",
          "workingLatex": "Combined powers.",
          "explanation": "The result is the area in square units.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= \\dfrac{4}{3}$ square units."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "questionDiagram": null,
    "id": "al.y2.pure.areas-applications.q011",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "areas",
      "area under curve"
    ],
    "questionText": "The region $R$ is bounded by the curve $y = 6x - x^{2}$, the $x$-axis, and the lines $x = 0$ and $x = 3$. Find the exact area of $R$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the area integral",
          "workingLatex": "A = \\int_{0}^{3} 6x - x^{2}\\,dx",
          "explanation": "Area under a curve above the $x$-axis is the definite integral of $y$ with respect to $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the antiderivative",
          "workingLatex": "\\int 6x - x^{2}\\,dx = 3x^{2} - \\dfrac{x^{3}}{3}",
          "explanation": "Integrate the function term by term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write with limit notation",
          "workingLatex": "A = \\left[ 3x^{2} - \\dfrac{x^{3}}{3} \\right]_{0}^{3}",
          "explanation": "Evaluate the antiderivative between the given limits.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the upper limit",
          "workingLatex": "F(3)",
          "explanation": "Replace $x$ with the upper limit.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the lower limit",
          "workingLatex": "F(0)",
          "explanation": "Replace $x$ with the lower limit.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Subtract",
          "workingLatex": "F(3) - F(0)",
          "explanation": "The definite integral is $F(b) - F(a)$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate",
          "workingLatex": "A = 9",
          "explanation": "Simplify to an exact value.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret",
          "workingLatex": "Inverted parabola segment.",
          "explanation": "The result is the area in square units.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= 9$ square units."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "questionDiagram": null,
    "id": "al.y2.pure.areas-applications.q012",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "areas",
      "area under curve"
    ],
    "questionText": "The region $R$ is bounded by the curve $y = x^{2}$, the $x$-axis, and the lines $x = 1$ and $x = 3$. Find the exact area of $R$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the area integral",
          "workingLatex": "A = \\int_{1}^{3} x^{2}\\,dx",
          "explanation": "Area under a curve above the $x$-axis is the definite integral of $y$ with respect to $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the antiderivative",
          "workingLatex": "\\int x^{2}\\,dx = \\dfrac{x^{3}}{3}",
          "explanation": "Integrate the function term by term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write with limit notation",
          "workingLatex": "A = \\left[ \\dfrac{x^{3}}{3} \\right]_{1}^{3}",
          "explanation": "Evaluate the antiderivative between the given limits.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the upper limit",
          "workingLatex": "F(3)",
          "explanation": "Replace $x$ with the upper limit.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the lower limit",
          "workingLatex": "F(1)",
          "explanation": "Replace $x$ with the lower limit.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Subtract",
          "workingLatex": "F(3) - F(1)",
          "explanation": "The definite integral is $F(b) - F(a)$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate",
          "workingLatex": "A = \\dfrac{26}{3}",
          "explanation": "Simplify to an exact value.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret",
          "workingLatex": "Shifted interval.",
          "explanation": "The result is the area in square units.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= \\dfrac{26}{3}$ square units."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "questionDiagram": null,
    "id": "al.y2.pure.areas-applications.q013",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "areas",
      "area under curve"
    ],
    "questionText": "The region $R$ is bounded by the curve $y = 4x^{3}$, the $x$-axis, and the lines $x = 0$ and $x = 1$. Find the exact area of $R$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the area integral",
          "workingLatex": "A = \\int_{0}^{1} 4x^{3}\\,dx",
          "explanation": "Area under a curve above the $x$-axis is the definite integral of $y$ with respect to $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the antiderivative",
          "workingLatex": "\\int 4x^{3}\\,dx = x^{4}",
          "explanation": "Integrate the function term by term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write with limit notation",
          "workingLatex": "A = \\left[ x^{4} \\right]_{0}^{1}",
          "explanation": "Evaluate the antiderivative between the given limits.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the upper limit",
          "workingLatex": "F(1)",
          "explanation": "Replace $x$ with the upper limit.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the lower limit",
          "workingLatex": "F(0)",
          "explanation": "Replace $x$ with the lower limit.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Subtract",
          "workingLatex": "F(1) - F(0)",
          "explanation": "The definite integral is $F(b) - F(a)$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate",
          "workingLatex": "A = 1",
          "explanation": "Simplify to an exact value.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret",
          "workingLatex": "Cubic power.",
          "explanation": "The result is the area in square units.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= 1$ square units."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "questionDiagram": null,
    "id": "al.y2.pure.areas-applications.q014",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "areas",
      "area under curve"
    ],
    "questionText": "The region $R$ is bounded by the curve $y = x^{2} + 4$, the $x$-axis, and the lines $x = 0$ and $x = 2$. Find the exact area of $R$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the area integral",
          "workingLatex": "A = \\int_{0}^{2} x^{2} + 4\\,dx",
          "explanation": "Area under a curve above the $x$-axis is the definite integral of $y$ with respect to $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the antiderivative",
          "workingLatex": "\\int x^{2} + 4\\,dx = \\dfrac{x^{3}}{3} + 4x",
          "explanation": "Integrate the function term by term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write with limit notation",
          "workingLatex": "A = \\left[ \\dfrac{x^{3}}{3} + 4x \\right]_{0}^{2}",
          "explanation": "Evaluate the antiderivative between the given limits.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the upper limit",
          "workingLatex": "F(2)",
          "explanation": "Replace $x$ with the upper limit.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the lower limit",
          "workingLatex": "F(0)",
          "explanation": "Replace $x$ with the lower limit.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Subtract",
          "workingLatex": "F(2) - F(0)",
          "explanation": "The definite integral is $F(b) - F(a)$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate",
          "workingLatex": "A = \\dfrac{32}{3}",
          "explanation": "Simplify to an exact value.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret",
          "workingLatex": "Parabola shifted up.",
          "explanation": "The result is the area in square units.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= \\dfrac{32}{3}$ square units."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "questionDiagram": null,
    "id": "al.y2.pure.areas-applications.q015",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "areas",
      "area under curve"
    ],
    "questionText": "The region $R$ is bounded by the curve $y = 3x^{2} + 2$, the $x$-axis, and the lines $x = 0$ and $x = 1$. Find the exact area of $R$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the area integral",
          "workingLatex": "A = \\int_{0}^{1} 3x^{2} + 2\\,dx",
          "explanation": "Area under a curve above the $x$-axis is the definite integral of $y$ with respect to $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the antiderivative",
          "workingLatex": "\\int 3x^{2} + 2\\,dx = x^{3} + 2x",
          "explanation": "Integrate the function term by term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write with limit notation",
          "workingLatex": "A = \\left[ x^{3} + 2x \\right]_{0}^{1}",
          "explanation": "Evaluate the antiderivative between the given limits.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the upper limit",
          "workingLatex": "F(1)",
          "explanation": "Replace $x$ with the upper limit.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the lower limit",
          "workingLatex": "F(0)",
          "explanation": "Replace $x$ with the lower limit.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Subtract",
          "workingLatex": "F(1) - F(0)",
          "explanation": "The definite integral is $F(b) - F(a)$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate",
          "workingLatex": "A = 3",
          "explanation": "Simplify to an exact value.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret",
          "workingLatex": "Polynomial.",
          "explanation": "The result is the area in square units.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= 3$ square units."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "questionDiagram": null,
    "id": "al.y2.pure.areas-applications.q016",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "areas",
      "area under curve"
    ],
    "questionText": "The region $R$ is bounded by the curve $y = x^{2} - 4x + 5$, the $x$-axis, and the lines $x = 0$ and $x = 2$. Find the exact area of $R$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the area integral",
          "workingLatex": "A = \\int_{0}^{2} x^{2} - 4x + 5\\,dx",
          "explanation": "Area under a curve above the $x$-axis is the definite integral of $y$ with respect to $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the antiderivative",
          "workingLatex": "\\int x^{2} - 4x + 5\\,dx = \\dfrac{x^{3}}{3} - 2x^{2} + 5x",
          "explanation": "Integrate the function term by term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write with limit notation",
          "workingLatex": "A = \\left[ \\dfrac{x^{3}}{3} - 2x^{2} + 5x \\right]_{0}^{2}",
          "explanation": "Evaluate the antiderivative between the given limits.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the upper limit",
          "workingLatex": "F(2)",
          "explanation": "Replace $x$ with the upper limit.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the lower limit",
          "workingLatex": "F(0)",
          "explanation": "Replace $x$ with the lower limit.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Subtract",
          "workingLatex": "F(2) - F(0)",
          "explanation": "The definite integral is $F(b) - F(a)$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate",
          "workingLatex": "A = \\dfrac{14}{3}",
          "explanation": "Simplify to an exact value.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret",
          "workingLatex": "Quadratic always positive on interval.",
          "explanation": "The result is the area in square units.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= \\dfrac{14}{3}$ square units."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "questionDiagram": null,
    "id": "al.y2.pure.areas-applications.q017",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "areas",
      "area under curve"
    ],
    "questionText": "The region $R$ is bounded by the curve $y = 2x^{2}$, the $x$-axis, and the lines $x = 0$ and $x = 3$. Find the exact area of $R$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the area integral",
          "workingLatex": "A = \\int_{0}^{3} 2x^{2}\\,dx",
          "explanation": "Area under a curve above the $x$-axis is the definite integral of $y$ with respect to $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the antiderivative",
          "workingLatex": "\\int 2x^{2}\\,dx = \\dfrac{2x^{3}}{3}",
          "explanation": "Integrate the function term by term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write with limit notation",
          "workingLatex": "A = \\left[ \\dfrac{2x^{3}}{3} \\right]_{0}^{3}",
          "explanation": "Evaluate the antiderivative between the given limits.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the upper limit",
          "workingLatex": "F(3)",
          "explanation": "Replace $x$ with the upper limit.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the lower limit",
          "workingLatex": "F(0)",
          "explanation": "Replace $x$ with the lower limit.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Subtract",
          "workingLatex": "F(3) - F(0)",
          "explanation": "The definite integral is $F(b) - F(a)$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate",
          "workingLatex": "A = 18",
          "explanation": "Simplify to an exact value.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret",
          "workingLatex": "Scaled parabola.",
          "explanation": "The result is the area in square units.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= 18$ square units."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "questionDiagram": null,
    "id": "al.y2.pure.areas-applications.q018",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "areas",
      "area under curve"
    ],
    "questionText": "The region $R$ is bounded by the curve $y = x^{2} + x$, the $x$-axis, and the lines $x = 0$ and $x = 2$. Find the exact area of $R$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the area integral",
          "workingLatex": "A = \\int_{0}^{2} x^{2} + x\\,dx",
          "explanation": "Area under a curve above the $x$-axis is the definite integral of $y$ with respect to $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the antiderivative",
          "workingLatex": "\\int x^{2} + x\\,dx = \\dfrac{x^{3}}{3} + \\dfrac{x^{2}}{2}",
          "explanation": "Integrate the function term by term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write with limit notation",
          "workingLatex": "A = \\left[ \\dfrac{x^{3}}{3} + \\dfrac{x^{2}}{2} \\right]_{0}^{2}",
          "explanation": "Evaluate the antiderivative between the given limits.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the upper limit",
          "workingLatex": "F(2)",
          "explanation": "Replace $x$ with the upper limit.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the lower limit",
          "workingLatex": "F(0)",
          "explanation": "Replace $x$ with the lower limit.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Subtract",
          "workingLatex": "F(2) - F(0)",
          "explanation": "The definite integral is $F(b) - F(a)$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate",
          "workingLatex": "A = \\dfrac{14}{3}",
          "explanation": "Simplify to an exact value.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret",
          "workingLatex": "Sum of powers.",
          "explanation": "The result is the area in square units.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= \\dfrac{14}{3}$ square units."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "questionDiagram": null,
    "id": "al.y2.pure.areas-applications.q019",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "areas",
      "area under curve"
    ],
    "questionText": "The region $R$ is bounded by the curve $y = 9 - x^{2}$, the $x$-axis, and the lines $x = 0$ and $x = 3$. Find the exact area of $R$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the area integral",
          "workingLatex": "A = \\int_{0}^{3} 9 - x^{2}\\,dx",
          "explanation": "Area under a curve above the $x$-axis is the definite integral of $y$ with respect to $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the antiderivative",
          "workingLatex": "\\int 9 - x^{2}\\,dx = 9x - \\dfrac{x^{3}}{3}",
          "explanation": "Integrate the function term by term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write with limit notation",
          "workingLatex": "A = \\left[ 9x - \\dfrac{x^{3}}{3} \\right]_{0}^{3}",
          "explanation": "Evaluate the antiderivative between the given limits.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the upper limit",
          "workingLatex": "F(3)",
          "explanation": "Replace $x$ with the upper limit.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the lower limit",
          "workingLatex": "F(0)",
          "explanation": "Replace $x$ with the lower limit.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Subtract",
          "workingLatex": "F(3) - F(0)",
          "explanation": "The definite integral is $F(b) - F(a)$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate",
          "workingLatex": "A = 18",
          "explanation": "Simplify to an exact value.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret",
          "workingLatex": "Semicircle-like arch.",
          "explanation": "The result is the area in square units.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= 18$ square units."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "questionDiagram": null,
    "id": "al.y2.pure.areas-applications.q020",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "areas",
      "area under curve"
    ],
    "questionText": "The region $R$ is bounded by the curve $y = x^{3} + 1$, the $x$-axis, and the lines $x = 0$ and $x = 1$. Find the exact area of $R$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the area integral",
          "workingLatex": "A = \\int_{0}^{1} x^{3} + 1\\,dx",
          "explanation": "Area under a curve above the $x$-axis is the definite integral of $y$ with respect to $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the antiderivative",
          "workingLatex": "\\int x^{3} + 1\\,dx = \\dfrac{x^{4}}{4} + x",
          "explanation": "Integrate the function term by term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write with limit notation",
          "workingLatex": "A = \\left[ \\dfrac{x^{4}}{4} + x \\right]_{0}^{1}",
          "explanation": "Evaluate the antiderivative between the given limits.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the upper limit",
          "workingLatex": "F(1)",
          "explanation": "Replace $x$ with the upper limit.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the lower limit",
          "workingLatex": "F(0)",
          "explanation": "Replace $x$ with the lower limit.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Subtract",
          "workingLatex": "F(1) - F(0)",
          "explanation": "The definite integral is $F(b) - F(a)$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate",
          "workingLatex": "A = \\dfrac{5}{4}",
          "explanation": "Simplify to an exact value.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret",
          "workingLatex": "Cubic plus constant.",
          "explanation": "The result is the area in square units.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= \\dfrac{5}{4}$ square units."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "questionDiagram": null,
    "id": "al.y2.pure.areas-applications.q021",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "areas",
      "area under curve"
    ],
    "questionText": "The region $R$ is bounded by the curve $y = e^{x}$, the $x$-axis, and the lines $x = 0$ and $x = 1$. Find the exact area of $R$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the area integral",
          "workingLatex": "A = \\int_{0}^{1} e^{x}\\,dx",
          "explanation": "Area under a curve above the $x$-axis is the definite integral of $y$ with respect to $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the antiderivative",
          "workingLatex": "\\int e^{x}\\,dx = e^{x}",
          "explanation": "Integrate the function term by term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write with limit notation",
          "workingLatex": "A = \\left[ e^{x} \\right]_{0}^{1}",
          "explanation": "Evaluate the antiderivative between the given limits.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the upper limit",
          "workingLatex": "F(1)",
          "explanation": "Replace $x$ with the upper limit.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the lower limit",
          "workingLatex": "F(0)",
          "explanation": "Replace $x$ with the lower limit.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Subtract",
          "workingLatex": "F(1) - F(0)",
          "explanation": "The definite integral is $F(b) - F(a)$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate",
          "workingLatex": "A = e - 1",
          "explanation": "Simplify to an exact value.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret",
          "workingLatex": "Exponential area.",
          "explanation": "The result is the area in square units.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= e - 1$ square units."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "questionDiagram": null,
    "id": "al.y2.pure.areas-applications.q022",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "areas",
      "area under curve"
    ],
    "questionText": "The region $R$ is bounded by the curve $y = \\dfrac{1}{x}$, the $x$-axis, and the lines $x = 1$ and $x = 2$. Find the exact area of $R$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the area integral",
          "workingLatex": "A = \\int_{1}^{2} \\dfrac{1}{x}\\,dx",
          "explanation": "Area under a curve above the $x$-axis is the definite integral of $y$ with respect to $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the antiderivative",
          "workingLatex": "\\int \\dfrac{1}{x}\\,dx = \\ln x",
          "explanation": "Integrate the function term by term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write with limit notation",
          "workingLatex": "A = \\left[ \\ln x \\right]_{1}^{2}",
          "explanation": "Evaluate the antiderivative between the given limits.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the upper limit",
          "workingLatex": "F(2)",
          "explanation": "Replace $x$ with the upper limit.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the lower limit",
          "workingLatex": "F(1)",
          "explanation": "Replace $x$ with the lower limit.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Subtract",
          "workingLatex": "F(2) - F(1)",
          "explanation": "The definite integral is $F(b) - F(a)$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate",
          "workingLatex": "A = \\ln 2",
          "explanation": "Simplify to an exact value.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret",
          "workingLatex": "Logarithmic area — natural log integral.",
          "explanation": "The result is the area in square units.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= \\ln 2$ square units."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "questionDiagram": null,
    "id": "al.y2.pure.areas-applications.q023",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "areas",
      "area under curve"
    ],
    "questionText": "The region $R$ is bounded by the curve $y = \\sin x$, the $x$-axis, and the lines $x = 0$ and $x = \\pi$. Find the exact area of $R$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the area integral",
          "workingLatex": "A = \\int_{0}^{\\pi} \\sin x\\,dx",
          "explanation": "Area under a curve above the $x$-axis is the definite integral of $y$ with respect to $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the antiderivative",
          "workingLatex": "\\int \\sin x\\,dx = -\\cos x",
          "explanation": "Integrate the function term by term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write with limit notation",
          "workingLatex": "A = \\left[ -\\cos x \\right]_{0}^{\\pi}",
          "explanation": "Evaluate the antiderivative between the given limits.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the upper limit",
          "workingLatex": "F(\\pi)",
          "explanation": "Replace $x$ with the upper limit.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the lower limit",
          "workingLatex": "F(0)",
          "explanation": "Replace $x$ with the lower limit.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Subtract",
          "workingLatex": "F(\\pi) - F(0)",
          "explanation": "The definite integral is $F(b) - F(a)$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate",
          "workingLatex": "A = 2",
          "explanation": "Simplify to an exact value.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret",
          "workingLatex": "Sine arch above axis.",
          "explanation": "The result is the area in square units.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= 2$ square units."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "questionDiagram": null,
    "id": "al.y2.pure.areas-applications.q024",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "areas",
      "area under curve"
    ],
    "questionText": "The region $R$ is bounded by the curve $y = \\cos x$, the $x$-axis, and the lines $x = 0$ and $x = \\dfrac{\\pi}{2}$. Find the exact area of $R$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the area integral",
          "workingLatex": "A = \\int_{0}^{\\dfrac{\\pi}{2}} \\cos x\\,dx",
          "explanation": "Area under a curve above the $x$-axis is the definite integral of $y$ with respect to $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the antiderivative",
          "workingLatex": "\\int \\cos x\\,dx = \\sin x",
          "explanation": "Integrate the function term by term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write with limit notation",
          "workingLatex": "A = \\left[ \\sin x \\right]_{0}^{\\dfrac{\\pi}{2}}",
          "explanation": "Evaluate the antiderivative between the given limits.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the upper limit",
          "workingLatex": "F(\\dfrac{\\pi}{2})",
          "explanation": "Replace $x$ with the upper limit.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the lower limit",
          "workingLatex": "F(0)",
          "explanation": "Replace $x$ with the lower limit.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Subtract",
          "workingLatex": "F(\\dfrac{\\pi}{2}) - F(0)",
          "explanation": "The definite integral is $F(b) - F(a)$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate",
          "workingLatex": "A = 1",
          "explanation": "Simplify to an exact value.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret",
          "workingLatex": "Cosine from 0 to $\\pi/2$.",
          "explanation": "The result is the area in square units.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= 1$ square units."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "questionDiagram": null,
    "id": "al.y2.pure.areas-applications.q025",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "areas",
      "area under curve"
    ],
    "questionText": "The region $R$ is bounded by the curve $y = 2e^{x}$, the $x$-axis, and the lines $x = 0$ and $x = 1$. Find the exact area of $R$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the area integral",
          "workingLatex": "A = \\int_{0}^{1} 2e^{x}\\,dx",
          "explanation": "Area under a curve above the $x$-axis is the definite integral of $y$ with respect to $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the antiderivative",
          "workingLatex": "\\int 2e^{x}\\,dx = 2e^{x}",
          "explanation": "Integrate the function term by term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write with limit notation",
          "workingLatex": "A = \\left[ 2e^{x} \\right]_{0}^{1}",
          "explanation": "Evaluate the antiderivative between the given limits.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the upper limit",
          "workingLatex": "F(1)",
          "explanation": "Replace $x$ with the upper limit.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the lower limit",
          "workingLatex": "F(0)",
          "explanation": "Replace $x$ with the lower limit.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Subtract",
          "workingLatex": "F(1) - F(0)",
          "explanation": "The definite integral is $F(b) - F(a)$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate",
          "workingLatex": "A = 2e - 2",
          "explanation": "Simplify to an exact value.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret",
          "workingLatex": "Scaled exponential.",
          "explanation": "The result is the area in square units.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= 2e - 2$ square units."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "questionDiagram": null,
    "id": "al.y2.pure.areas-applications.q026",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "areas",
      "area under curve"
    ],
    "questionText": "The region $R$ is bounded by the curve $y = x + e^{x}$, the $x$-axis, and the lines $x = 0$ and $x = 1$. Find the exact area of $R$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the area integral",
          "workingLatex": "A = \\int_{0}^{1} x + e^{x}\\,dx",
          "explanation": "Area under a curve above the $x$-axis is the definite integral of $y$ with respect to $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the antiderivative",
          "workingLatex": "\\int x + e^{x}\\,dx = \\dfrac{x^{2}}{2} + e^{x}",
          "explanation": "Integrate the function term by term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write with limit notation",
          "workingLatex": "A = \\left[ \\dfrac{x^{2}}{2} + e^{x} \\right]_{0}^{1}",
          "explanation": "Evaluate the antiderivative between the given limits.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the upper limit",
          "workingLatex": "F(1)",
          "explanation": "Replace $x$ with the upper limit.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the lower limit",
          "workingLatex": "F(0)",
          "explanation": "Replace $x$ with the lower limit.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Subtract",
          "workingLatex": "F(1) - F(0)",
          "explanation": "The definite integral is $F(b) - F(a)$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate",
          "workingLatex": "A = e - \\dfrac{1}{2}",
          "explanation": "Simplify to an exact value.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret",
          "workingLatex": "Combined polynomial and exponential.",
          "explanation": "The result is the area in square units.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= e - \\dfrac{1}{2}$ square units."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "questionDiagram": null,
    "id": "al.y2.pure.areas-applications.q027",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "areas",
      "area under curve"
    ],
    "questionText": "The region $R$ is bounded by the curve $y = \\dfrac{1}{x^{2}}$, the $x$-axis, and the lines $x = 1$ and $x = 2$. Find the exact area of $R$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the area integral",
          "workingLatex": "A = \\int_{1}^{2} \\dfrac{1}{x^{2}}\\,dx",
          "explanation": "Area under a curve above the $x$-axis is the definite integral of $y$ with respect to $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the antiderivative",
          "workingLatex": "\\int \\dfrac{1}{x^{2}}\\,dx = -\\dfrac{1}{x}",
          "explanation": "Integrate the function term by term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write with limit notation",
          "workingLatex": "A = \\left[ -\\dfrac{1}{x} \\right]_{1}^{2}",
          "explanation": "Evaluate the antiderivative between the given limits.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the upper limit",
          "workingLatex": "F(2)",
          "explanation": "Replace $x$ with the upper limit.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the lower limit",
          "workingLatex": "F(1)",
          "explanation": "Replace $x$ with the lower limit.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Subtract",
          "workingLatex": "F(2) - F(1)",
          "explanation": "The definite integral is $F(b) - F(a)$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate",
          "workingLatex": "A = \\dfrac{1}{2}",
          "explanation": "Simplify to an exact value.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret",
          "workingLatex": "Power $x^{-2}$ integral.",
          "explanation": "The result is the area in square units.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= \\dfrac{1}{2}$ square units."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "questionDiagram": null,
    "id": "al.y2.pure.areas-applications.q028",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "areas",
      "area under curve"
    ],
    "questionText": "The region $R$ is bounded by the curve $y = \\sqrt{x}$, the $x$-axis, and the lines $x = 0$ and $x = 4$. Find the exact area of $R$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the area integral",
          "workingLatex": "A = \\int_{0}^{4} \\sqrt{x}\\,dx",
          "explanation": "Area under a curve above the $x$-axis is the definite integral of $y$ with respect to $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the antiderivative",
          "workingLatex": "\\int \\sqrt{x}\\,dx = \\dfrac{2}{3}x^{3/2}",
          "explanation": "Integrate the function term by term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write with limit notation",
          "workingLatex": "A = \\left[ \\dfrac{2}{3}x^{3/2} \\right]_{0}^{4}",
          "explanation": "Evaluate the antiderivative between the given limits.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the upper limit",
          "workingLatex": "F(4)",
          "explanation": "Replace $x$ with the upper limit.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the lower limit",
          "workingLatex": "F(0)",
          "explanation": "Replace $x$ with the lower limit.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Subtract",
          "workingLatex": "F(4) - F(0)",
          "explanation": "The definite integral is $F(b) - F(a)$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate",
          "workingLatex": "A = \\dfrac{16}{3}",
          "explanation": "Simplify to an exact value.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret",
          "workingLatex": "Square root curve.",
          "explanation": "The result is the area in square units.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= \\dfrac{16}{3}$ square units."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "questionDiagram": null,
    "id": "al.y2.pure.areas-applications.q029",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "areas",
      "area between curves"
    ],
    "questionText": "Find the exact area enclosed between the curves $y = x$ and $y = x^{2}$ for $0 \\leq x \\leq 1$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify upper and lower curves",
          "workingLatex": "\\text{On } [0, 1]:\\; y_{\\text{top}} = x",
          "explanation": "The upper curve has greater $y$-values on the interval.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up the area integral",
          "workingLatex": "A = \\int_{0}^{1} \\left(x - (x^{2})\\right) dx",
          "explanation": "Area between curves is the integral of (upper minus lower).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify the integrand",
          "workingLatex": "A = \\int_{0}^{1} x - x^{2}\\,dx",
          "explanation": "Combine like terms before integrating.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate",
          "workingLatex": "\\int x - x^{2}\\,dx = \\dfrac{x^{2}}{2} - \\dfrac{x^{3}}{3}",
          "explanation": "Find the antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply limits",
          "workingLatex": "\\left[ \\dfrac{x^{2}}{2} - \\dfrac{x^{3}}{3} \\right]_{0}^{1}",
          "explanation": "Evaluate between the bounds.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute limits",
          "workingLatex": "F(1) - F(0)",
          "explanation": "Upper value minus lower value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate",
          "workingLatex": "A = \\dfrac{1}{6}",
          "explanation": "Exact area.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check sign",
          "workingLatex": "A > 0",
          "explanation": "Area must be positive; upper minus lower ensures this.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State answer",
          "workingLatex": "A = \\dfrac{1}{6}",
          "explanation": "Line above parabola on $[0,1]$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= \\dfrac{1}{6}$ square units."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "questionDiagram": null,
    "id": "al.y2.pure.areas-applications.q030",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "areas",
      "area between curves"
    ],
    "questionText": "Find the exact area enclosed between the curves $y = 2x$ and $y = x^{2}$ for $0 \\leq x \\leq 2$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify upper and lower curves",
          "workingLatex": "\\text{On } [0, 2]:\\; y_{\\text{top}} = 2x",
          "explanation": "The upper curve has greater $y$-values on the interval.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up the area integral",
          "workingLatex": "A = \\int_{0}^{2} \\left(2x - (x^{2})\\right) dx",
          "explanation": "Area between curves is the integral of (upper minus lower).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify the integrand",
          "workingLatex": "A = \\int_{0}^{2} 2x - x^{2}\\,dx",
          "explanation": "Combine like terms before integrating.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate",
          "workingLatex": "\\int 2x - x^{2}\\,dx = x^{2} - \\dfrac{x^{3}}{3}",
          "explanation": "Find the antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply limits",
          "workingLatex": "\\left[ x^{2} - \\dfrac{x^{3}}{3} \\right]_{0}^{2}",
          "explanation": "Evaluate between the bounds.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute limits",
          "workingLatex": "F(2) - F(0)",
          "explanation": "Upper value minus lower value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate",
          "workingLatex": "A = \\dfrac{4}{3}",
          "explanation": "Exact area.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check sign",
          "workingLatex": "A > 0",
          "explanation": "Area must be positive; upper minus lower ensures this.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State answer",
          "workingLatex": "A = \\dfrac{4}{3}",
          "explanation": "Line and parabola.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= \\dfrac{4}{3}$ square units."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "questionDiagram": null,
    "id": "al.y2.pure.areas-applications.q031",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "areas",
      "area between curves"
    ],
    "questionText": "Find the exact area enclosed between the curves $y = 4$ and $y = x^{2}$ for $0 \\leq x \\leq 2$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify upper and lower curves",
          "workingLatex": "\\text{On } [0, 2]:\\; y_{\\text{top}} = 4",
          "explanation": "The upper curve has greater $y$-values on the interval.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up the area integral",
          "workingLatex": "A = \\int_{0}^{2} \\left(4 - (x^{2})\\right) dx",
          "explanation": "Area between curves is the integral of (upper minus lower).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify the integrand",
          "workingLatex": "A = \\int_{0}^{2} 4 - x^{2}\\,dx",
          "explanation": "Combine like terms before integrating.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate",
          "workingLatex": "\\int 4 - x^{2}\\,dx = 4x - \\dfrac{x^{3}}{3}",
          "explanation": "Find the antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply limits",
          "workingLatex": "\\left[ 4x - \\dfrac{x^{3}}{3} \\right]_{0}^{2}",
          "explanation": "Evaluate between the bounds.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute limits",
          "workingLatex": "F(2) - F(0)",
          "explanation": "Upper value minus lower value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate",
          "workingLatex": "A = \\dfrac{16}{3}",
          "explanation": "Exact area.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check sign",
          "workingLatex": "A > 0",
          "explanation": "Area must be positive; upper minus lower ensures this.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State answer",
          "workingLatex": "A = \\dfrac{16}{3}",
          "explanation": "Horizontal line and parabola.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= \\dfrac{16}{3}$ square units."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "questionDiagram": null,
    "id": "al.y2.pure.areas-applications.q032",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "areas",
      "area between curves"
    ],
    "questionText": "Find the exact area enclosed between the curves $y = x^{2}$ and $y = x$ for $1 \\leq x \\leq 2$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify upper and lower curves",
          "workingLatex": "\\text{On } [1, 2]:\\; y_{\\text{top}} = x^{2}",
          "explanation": "The upper curve has greater $y$-values on the interval.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up the area integral",
          "workingLatex": "A = \\int_{1}^{2} \\left(x^{2} - (x)\\right) dx",
          "explanation": "Area between curves is the integral of (upper minus lower).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify the integrand",
          "workingLatex": "A = \\int_{1}^{2} x^{2} - x\\,dx",
          "explanation": "Combine like terms before integrating.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate",
          "workingLatex": "\\int x^{2} - x\\,dx = \\dfrac{x^{3}}{3} - \\dfrac{x^{2}}{2}",
          "explanation": "Find the antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply limits",
          "workingLatex": "\\left[ \\dfrac{x^{3}}{3} - \\dfrac{x^{2}}{2} \\right]_{1}^{2}",
          "explanation": "Evaluate between the bounds.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute limits",
          "workingLatex": "F(2) - F(1)",
          "explanation": "Upper value minus lower value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate",
          "workingLatex": "A = \\dfrac{5}{6}",
          "explanation": "Exact area.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check sign",
          "workingLatex": "A > 0",
          "explanation": "Area must be positive; upper minus lower ensures this.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State answer",
          "workingLatex": "A = \\dfrac{5}{6}",
          "explanation": "Parabola above line on $[1,2]$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= \\dfrac{5}{6}$ square units."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "questionDiagram": null,
    "id": "al.y2.pure.areas-applications.q033",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "areas",
      "area between curves"
    ],
    "questionText": "Find the exact area enclosed between the curves $y = x + 2$ and $y = x^{2}$ for $0 \\leq x \\leq 2$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify upper and lower curves",
          "workingLatex": "\\text{On } [0, 2]:\\; y_{\\text{top}} = x + 2",
          "explanation": "The upper curve has greater $y$-values on the interval.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up the area integral",
          "workingLatex": "A = \\int_{0}^{2} \\left(x + 2 - (x^{2})\\right) dx",
          "explanation": "Area between curves is the integral of (upper minus lower).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify the integrand",
          "workingLatex": "A = \\int_{0}^{2} x + 2 - x^{2}\\,dx",
          "explanation": "Combine like terms before integrating.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate",
          "workingLatex": "\\int x + 2 - x^{2}\\,dx = \\dfrac{x^{2}}{2} + 2x - \\dfrac{x^{3}}{3}",
          "explanation": "Find the antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply limits",
          "workingLatex": "\\left[ \\dfrac{x^{2}}{2} + 2x - \\dfrac{x^{3}}{3} \\right]_{0}^{2}",
          "explanation": "Evaluate between the bounds.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute limits",
          "workingLatex": "F(2) - F(0)",
          "explanation": "Upper value minus lower value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate",
          "workingLatex": "A = \\dfrac{10}{3}",
          "explanation": "Exact area.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check sign",
          "workingLatex": "A > 0",
          "explanation": "Area must be positive; upper minus lower ensures this.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State answer",
          "workingLatex": "A = \\dfrac{10}{3}",
          "explanation": "Line above parabola.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= \\dfrac{10}{3}$ square units."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "questionDiagram": null,
    "id": "al.y2.pure.areas-applications.q034",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "areas",
      "area between curves"
    ],
    "questionText": "Find the exact area enclosed between the curves $y = 6 - x^{2}$ and $y = x^{2}$ for $0 \\leq x \\leq \\sqrt{3}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify upper and lower curves",
          "workingLatex": "\\text{On } [0, \\sqrt{3}]:\\; y_{\\text{top}} = 6 - x^{2}",
          "explanation": "The upper curve has greater $y$-values on the interval.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up the area integral",
          "workingLatex": "A = \\int_{0}^{\\sqrt{3}} \\left(6 - x^{2} - (x^{2})\\right) dx",
          "explanation": "Area between curves is the integral of (upper minus lower).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify the integrand",
          "workingLatex": "A = \\int_{0}^{\\sqrt{3}} 6 - 2x^{2}\\,dx",
          "explanation": "Combine like terms before integrating.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate",
          "workingLatex": "\\int 6 - 2x^{2}\\,dx = 6x - \\dfrac{2x^{3}}{3}",
          "explanation": "Find the antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply limits",
          "workingLatex": "\\left[ 6x - \\dfrac{2x^{3}}{3} \\right]_{0}^{\\sqrt{3}}",
          "explanation": "Evaluate between the bounds.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute limits",
          "workingLatex": "F(\\sqrt{3}) - F(0)",
          "explanation": "Upper value minus lower value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate",
          "workingLatex": "A = 4\\sqrt{3}",
          "explanation": "Exact area.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check sign",
          "workingLatex": "A > 0",
          "explanation": "Area must be positive; upper minus lower ensures this.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State answer",
          "workingLatex": "A = 4\\sqrt{3}",
          "explanation": "Two parabolas symmetric about $x=0$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= 4\\sqrt{3}$ square units."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "questionDiagram": null,
    "id": "al.y2.pure.areas-applications.q035",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "areas",
      "area between curves"
    ],
    "questionText": "Find the exact area enclosed between the curves $y = 8 - x^{2}$ and $y = x^{2}$ for $-2 \\leq x \\leq 2$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify upper and lower curves",
          "workingLatex": "\\text{On } [-2, 2]:\\; y_{\\text{top}} = 8 - x^{2}",
          "explanation": "The upper curve has greater $y$-values on the interval.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up the area integral",
          "workingLatex": "A = \\int_{-2}^{2} \\left(8 - x^{2} - (x^{2})\\right) dx",
          "explanation": "Area between curves is the integral of (upper minus lower).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify the integrand",
          "workingLatex": "A = \\int_{-2}^{2} 8 - 2x^{2}\\,dx",
          "explanation": "Combine like terms before integrating.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate",
          "workingLatex": "\\int 8 - 2x^{2}\\,dx = 8x - \\dfrac{2x^{3}}{3}",
          "explanation": "Find the antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply limits",
          "workingLatex": "\\left[ 8x - \\dfrac{2x^{3}}{3} \\right]_{-2}^{2}",
          "explanation": "Evaluate between the bounds.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute limits",
          "workingLatex": "F(2) - F(-2)",
          "explanation": "Upper value minus lower value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate",
          "workingLatex": "A = \\dfrac{64}{3}",
          "explanation": "Exact area.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check sign",
          "workingLatex": "A > 0",
          "explanation": "Area must be positive; upper minus lower ensures this.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State answer",
          "workingLatex": "A = \\dfrac{64}{3}",
          "explanation": "Symmetric region.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= \\dfrac{64}{3}$ square units."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "questionDiagram": null,
    "id": "al.y2.pure.areas-applications.q036",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "areas",
      "area between curves"
    ],
    "questionText": "Find the exact area enclosed between the curves $y = x^{2} + 1$ and $y = 2x$ for $0 \\leq x \\leq 1$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify upper and lower curves",
          "workingLatex": "\\text{On } [0, 1]:\\; y_{\\text{top}} = x^{2} + 1",
          "explanation": "The upper curve has greater $y$-values on the interval.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up the area integral",
          "workingLatex": "A = \\int_{0}^{1} \\left(x^{2} + 1 - (2x)\\right) dx",
          "explanation": "Area between curves is the integral of (upper minus lower).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify the integrand",
          "workingLatex": "A = \\int_{0}^{1} x^{2} - 2x + 1\\,dx",
          "explanation": "Combine like terms before integrating.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate",
          "workingLatex": "\\int x^{2} - 2x + 1\\,dx = \\dfrac{x^{3}}{3} - x^{2} + x",
          "explanation": "Find the antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply limits",
          "workingLatex": "\\left[ \\dfrac{x^{3}}{3} - x^{2} + x \\right]_{0}^{1}",
          "explanation": "Evaluate between the bounds.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute limits",
          "workingLatex": "F(1) - F(0)",
          "explanation": "Upper value minus lower value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate",
          "workingLatex": "A = \\dfrac{1}{3}",
          "explanation": "Exact area.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check sign",
          "workingLatex": "A > 0",
          "explanation": "Area must be positive; upper minus lower ensures this.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State answer",
          "workingLatex": "A = \\dfrac{1}{3}",
          "explanation": "Parabola above line.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= \\dfrac{1}{3}$ square units."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "questionDiagram": null,
    "id": "al.y2.pure.areas-applications.q037",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "areas",
      "area between curves"
    ],
    "questionText": "Find the exact area enclosed between the curves $y = 4x - x^{2}$ and $y = x^{2}$ for $0 \\leq x \\leq 2$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify upper and lower curves",
          "workingLatex": "\\text{On } [0, 2]:\\; y_{\\text{top}} = 4x - x^{2}",
          "explanation": "The upper curve has greater $y$-values on the interval.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up the area integral",
          "workingLatex": "A = \\int_{0}^{2} \\left(4x - x^{2} - (x^{2})\\right) dx",
          "explanation": "Area between curves is the integral of (upper minus lower).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify the integrand",
          "workingLatex": "A = \\int_{0}^{2} 4x - 2x^{2}\\,dx",
          "explanation": "Combine like terms before integrating.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate",
          "workingLatex": "\\int 4x - 2x^{2}\\,dx = 2x^{2} - \\dfrac{2x^{3}}{3}",
          "explanation": "Find the antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply limits",
          "workingLatex": "\\left[ 2x^{2} - \\dfrac{2x^{3}}{3} \\right]_{0}^{2}",
          "explanation": "Evaluate between the bounds.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute limits",
          "workingLatex": "F(2) - F(0)",
          "explanation": "Upper value minus lower value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate",
          "workingLatex": "A = \\dfrac{8}{3}",
          "explanation": "Exact area.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check sign",
          "workingLatex": "A > 0",
          "explanation": "Area must be positive; upper minus lower ensures this.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State answer",
          "workingLatex": "A = \\dfrac{8}{3}",
          "explanation": "Two quadratics.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= \\dfrac{8}{3}$ square units."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "questionDiagram": null,
    "id": "al.y2.pure.areas-applications.q038",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "areas",
      "area between curves"
    ],
    "questionText": "Find the exact area enclosed between the curves $y = x^{2} + 2$ and $y = x + 2$ for $0 \\leq x \\leq 1$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify upper and lower curves",
          "workingLatex": "\\text{On } [0, 1]:\\; y_{\\text{top}} = x^{2} + 2",
          "explanation": "The upper curve has greater $y$-values on the interval.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up the area integral",
          "workingLatex": "A = \\int_{0}^{1} \\left(x^{2} + 2 - (x + 2)\\right) dx",
          "explanation": "Area between curves is the integral of (upper minus lower).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify the integrand",
          "workingLatex": "A = \\int_{0}^{1} x^{2} - x\\,dx",
          "explanation": "Combine like terms before integrating.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate",
          "workingLatex": "\\int x^{2} - x\\,dx = \\dfrac{x^{3}}{3} - \\dfrac{x^{2}}{2}",
          "explanation": "Find the antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply limits",
          "workingLatex": "\\left[ \\dfrac{x^{3}}{3} - \\dfrac{x^{2}}{2} \\right]_{0}^{1}",
          "explanation": "Evaluate between the bounds.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute limits",
          "workingLatex": "F(1) - F(0)",
          "explanation": "Upper value minus lower value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate",
          "workingLatex": "A = \\dfrac{1}{6}",
          "explanation": "Exact area.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check sign",
          "workingLatex": "A > 0",
          "explanation": "Area must be positive; upper minus lower ensures this.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State answer",
          "workingLatex": "A = \\dfrac{1}{6}",
          "explanation": "Close curves on unit interval.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= \\dfrac{1}{6}$ square units."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "questionDiagram": null,
    "id": "al.y2.pure.areas-applications.q039",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "areas",
      "area between curves"
    ],
    "questionText": "Find the exact area enclosed between the curves $y = 2 - x^{2}$ and $y = x^{2} - 2$ for $0 \\leq x \\leq 1$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify upper and lower curves",
          "workingLatex": "\\text{On } [0, 1]:\\; y_{\\text{top}} = 2 - x^{2}",
          "explanation": "The upper curve has greater $y$-values on the interval.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up the area integral",
          "workingLatex": "A = \\int_{0}^{1} \\left(2 - x^{2} - (x^{2} - 2)\\right) dx",
          "explanation": "Area between curves is the integral of (upper minus lower).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify the integrand",
          "workingLatex": "A = \\int_{0}^{1} 4 - 2x^{2}\\,dx",
          "explanation": "Combine like terms before integrating.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate",
          "workingLatex": "\\int 4 - 2x^{2}\\,dx = 4x - \\dfrac{2x^{3}}{3}",
          "explanation": "Find the antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply limits",
          "workingLatex": "\\left[ 4x - \\dfrac{2x^{3}}{3} \\right]_{0}^{1}",
          "explanation": "Evaluate between the bounds.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute limits",
          "workingLatex": "F(1) - F(0)",
          "explanation": "Upper value minus lower value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate",
          "workingLatex": "A = \\dfrac{10}{3}",
          "explanation": "Exact area.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check sign",
          "workingLatex": "A > 0",
          "explanation": "Area must be positive; upper minus lower ensures this.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State answer",
          "workingLatex": "A = \\dfrac{10}{3}",
          "explanation": "Upper and lower quadratics.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= \\dfrac{10}{3}$ square units."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "questionDiagram": null,
    "id": "al.y2.pure.areas-applications.q040",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "areas",
      "area between curves"
    ],
    "questionText": "Find the exact area enclosed between the curves $y = x^{3}$ and $y = x$ for $0 \\leq x \\leq 1$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify upper and lower curves",
          "workingLatex": "\\text{On } [0, 1]:\\; y_{\\text{top}} = x^{3}",
          "explanation": "The upper curve has greater $y$-values on the interval.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up the area integral",
          "workingLatex": "A = \\int_{0}^{1} \\left(x^{3} - (x)\\right) dx",
          "explanation": "Area between curves is the integral of (upper minus lower).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify the integrand",
          "workingLatex": "A = \\int_{0}^{1} x^{3} - x\\,dx",
          "explanation": "Combine like terms before integrating.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate",
          "workingLatex": "\\int x^{3} - x\\,dx = \\dfrac{x^{4}}{4} - \\dfrac{x^{2}}{2}",
          "explanation": "Find the antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply limits",
          "workingLatex": "\\left[ \\dfrac{x^{4}}{4} - \\dfrac{x^{2}}{2} \\right]_{0}^{1}",
          "explanation": "Evaluate between the bounds.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute limits",
          "workingLatex": "F(1) - F(0)",
          "explanation": "Upper value minus lower value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate",
          "workingLatex": "A = \\dfrac{1}{4}",
          "explanation": "Exact area.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check sign",
          "workingLatex": "A > 0",
          "explanation": "Area must be positive; upper minus lower ensures this.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State answer",
          "workingLatex": "A = \\dfrac{1}{4}",
          "explanation": "Cubic above line on $[0,1]$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= \\dfrac{1}{4}$ square units."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "questionDiagram": null,
    "id": "al.y2.pure.areas-applications.q041",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "areas",
      "intersection",
      "area between curves"
    ],
    "questionText": "The curves $y = x^{2}$ and $y = x$ intersect. Find the exact area of the finite region enclosed between them.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find intersection points",
          "workingLatex": "x^{2} = x \\Rightarrow x = 0 \\text{ or } x = 1",
          "explanation": "Set the two equations equal and solve for $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Determine which curve is on top",
          "workingLatex": "\\text{On } [0, 1]",
          "explanation": "Test a value in the interval or sketch to decide upper minus lower.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set up the integral",
          "workingLatex": "A = \\int_{0}^{1} x - x^{2}\\,dx",
          "explanation": "Integrate upper minus lower between the intersection points.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate",
          "workingLatex": "\\int x - x^{2}\\,dx = \\dfrac{x^{2}}{2} - \\dfrac{x^{3}}{3}",
          "explanation": "Find the antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply limits",
          "workingLatex": "\\left[ \\dfrac{x^{2}}{2} - \\dfrac{x^{3}}{3} \\right]_{0}^{1}",
          "explanation": "Use the intersection $x$-values as limits.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate at upper limit",
          "workingLatex": "F(1)",
          "explanation": "Substitute $x = ${b}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate at lower limit",
          "workingLatex": "F(0)",
          "explanation": "Substitute $x = ${a}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Subtract",
          "workingLatex": "F(1) - F(0) = \\dfrac{1}{6}",
          "explanation": "Exact area enclosed.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify",
          "workingLatex": "A = \\dfrac{1}{6}",
          "explanation": "The enclosed region has area ${area} square units.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= \\dfrac{1}{6}$ square units."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "questionDiagram": null,
    "id": "al.y2.pure.areas-applications.q042",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "areas",
      "intersection",
      "area between curves"
    ],
    "questionText": "The curves $y = x^{2} + 1$ and $y = 2x + 1$ intersect. Find the exact area of the finite region enclosed between them.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find intersection points",
          "workingLatex": "x^{2} + 1 = 2x + 1 \\Rightarrow x = 0 \\text{ or } x = 2",
          "explanation": "Set the two equations equal and solve for $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Determine which curve is on top",
          "workingLatex": "\\text{On } [0, 2]",
          "explanation": "Test a value in the interval or sketch to decide upper minus lower.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set up the integral",
          "workingLatex": "A = \\int_{0}^{2} x^{2} - 2x\\,dx",
          "explanation": "Integrate upper minus lower between the intersection points.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate",
          "workingLatex": "\\int x^{2} - 2x\\,dx = \\dfrac{x^{3}}{3} - x^{2}",
          "explanation": "Find the antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply limits",
          "workingLatex": "\\left[ \\dfrac{x^{3}}{3} - x^{2} \\right]_{0}^{2}",
          "explanation": "Use the intersection $x$-values as limits.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate at upper limit",
          "workingLatex": "F(2)",
          "explanation": "Substitute $x = ${b}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate at lower limit",
          "workingLatex": "F(0)",
          "explanation": "Substitute $x = ${a}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Subtract",
          "workingLatex": "F(2) - F(0) = \\dfrac{4}{3}",
          "explanation": "Exact area enclosed.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify",
          "workingLatex": "A = \\dfrac{4}{3}",
          "explanation": "The enclosed region has area ${area} square units.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= \\dfrac{4}{3}$ square units."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "questionDiagram": null,
    "id": "al.y2.pure.areas-applications.q043",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "areas",
      "intersection",
      "area between curves"
    ],
    "questionText": "The curves $y = x^{2}$ and $y = 2x - x^{2}$ intersect. Find the exact area of the finite region enclosed between them.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find intersection points",
          "workingLatex": "x^{2} = 2x - x^{2} \\Rightarrow x = 0 \\text{ or } x = 1",
          "explanation": "Set the two equations equal and solve for $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Determine which curve is on top",
          "workingLatex": "\\text{On } [0, 1]",
          "explanation": "Test a value in the interval or sketch to decide upper minus lower.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set up the integral",
          "workingLatex": "A = \\int_{0}^{1} 2x - 2x^{2}\\,dx",
          "explanation": "Integrate upper minus lower between the intersection points.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate",
          "workingLatex": "\\int 2x - 2x^{2}\\,dx = x^{2} - \\dfrac{2x^{3}}{3}",
          "explanation": "Find the antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply limits",
          "workingLatex": "\\left[ x^{2} - \\dfrac{2x^{3}}{3} \\right]_{0}^{1}",
          "explanation": "Use the intersection $x$-values as limits.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate at upper limit",
          "workingLatex": "F(1)",
          "explanation": "Substitute $x = ${b}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate at lower limit",
          "workingLatex": "F(0)",
          "explanation": "Substitute $x = ${a}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Subtract",
          "workingLatex": "F(1) - F(0) = \\dfrac{1}{3}",
          "explanation": "Exact area enclosed.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify",
          "workingLatex": "A = \\dfrac{1}{3}",
          "explanation": "The enclosed region has area ${area} square units.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= \\dfrac{1}{3}$ square units."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "questionDiagram": null,
    "id": "al.y2.pure.areas-applications.q044",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "areas",
      "intersection",
      "area between curves"
    ],
    "questionText": "The curves $y = x + 3$ and $y = x^{2} - 2x + 3$ intersect. Find the exact area of the finite region enclosed between them.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find intersection points",
          "workingLatex": "x + 3 = x^{2} - 2x + 3 \\Rightarrow x = 0 \\text{ or } x = 3",
          "explanation": "Set the two equations equal and solve for $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Determine which curve is on top",
          "workingLatex": "\\text{On } [0, 3]",
          "explanation": "Test a value in the interval or sketch to decide upper minus lower.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set up the integral",
          "workingLatex": "A = \\int_{0}^{3} 3x - x^{2}\\,dx",
          "explanation": "Integrate upper minus lower between the intersection points.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate",
          "workingLatex": "\\int 3x - x^{2}\\,dx = \\dfrac{3x^{2}}{2} - \\dfrac{x^{3}}{3}",
          "explanation": "Find the antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply limits",
          "workingLatex": "\\left[ \\dfrac{3x^{2}}{2} - \\dfrac{x^{3}}{3} \\right]_{0}^{3}",
          "explanation": "Use the intersection $x$-values as limits.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate at upper limit",
          "workingLatex": "F(3)",
          "explanation": "Substitute $x = ${b}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate at lower limit",
          "workingLatex": "F(0)",
          "explanation": "Substitute $x = ${a}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Subtract",
          "workingLatex": "F(3) - F(0) = \\dfrac{9}{2}",
          "explanation": "Exact area enclosed.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify",
          "workingLatex": "A = \\dfrac{9}{2}",
          "explanation": "The enclosed region has area ${area} square units.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= \\dfrac{9}{2}$ square units."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "questionDiagram": null,
    "id": "al.y2.pure.areas-applications.q045",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "areas",
      "intersection",
      "area between curves"
    ],
    "questionText": "The curves $y = 4 - x$ and $y = x^{2}$ intersect. Find the exact area of the finite region enclosed between them.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find intersection points",
          "workingLatex": "4 - x = x^{2} \\Rightarrow x = -2 \\text{ or } x = 2",
          "explanation": "Set the two equations equal and solve for $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Determine which curve is on top",
          "workingLatex": "\\text{On } [-2, 2]",
          "explanation": "Test a value in the interval or sketch to decide upper minus lower.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set up the integral",
          "workingLatex": "A = \\int_{-2}^{2} 4 - x - x^{2}\\,dx",
          "explanation": "Integrate upper minus lower between the intersection points.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate",
          "workingLatex": "\\int 4 - x - x^{2}\\,dx = 4x - \\dfrac{x^{2}}{2} - \\dfrac{x^{3}}{3}",
          "explanation": "Find the antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply limits",
          "workingLatex": "\\left[ 4x - \\dfrac{x^{2}}{2} - \\dfrac{x^{3}}{3} \\right]_{-2}^{2}",
          "explanation": "Use the intersection $x$-values as limits.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate at upper limit",
          "workingLatex": "F(2)",
          "explanation": "Substitute $x = ${b}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate at lower limit",
          "workingLatex": "F(-2)",
          "explanation": "Substitute $x = ${a}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Subtract",
          "workingLatex": "F(2) - F(-2) = \\dfrac{32}{3}",
          "explanation": "Exact area enclosed.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify",
          "workingLatex": "A = \\dfrac{32}{3}",
          "explanation": "The enclosed region has area ${area} square units.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= \\dfrac{32}{3}$ square units."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "questionDiagram": null,
    "id": "al.y2.pure.areas-applications.q046",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "areas",
      "parametric integration"
    ],
    "questionText": "A curve is defined parametrically by $x = t^{2}$, $y = 2t$ for $0 \\leq t \\leq 2$. Find the exact area under the curve (above the $x$-axis).",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the parametric area formula",
          "workingLatex": "A = \\int_{t_{0}}^{t_{1}} y\\,\\dfrac{dx}{dt}\\,dt",
          "explanation": "When a curve is given parametrically, area under it uses $y\\,dx/dt$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find dx/dt",
          "workingLatex": "\\dfrac{dx}{dt} = 2t",
          "explanation": "Differentiate $x$ with respect to the parameter.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form the integrand",
          "workingLatex": "y\\,\\dfrac{dx}{dt} = 4t^{2}",
          "explanation": "Multiply $y$ by $dx/dt$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set up the integral",
          "workingLatex": "A = \\int_{0}^{2} 4t^{2}\\,dt",
          "explanation": "Use the given parameter limits.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate",
          "workingLatex": "\\int 4t^{2}\\,dt = \\dfrac{4t^{3}}{3}",
          "explanation": "Find the antiderivative with respect to $t$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply limits",
          "workingLatex": "\\left[ \\dfrac{4t^{3}}{3} \\right]_{0}^{2}",
          "explanation": "Evaluate at $t = ${t1}$ and $t = ${t0}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate",
          "workingLatex": "A = \\dfrac{32}{3}",
          "explanation": "Exact area.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret",
          "workingLatex": "Parabola traced parametrically.",
          "explanation": "This is the area under the parametric curve with respect to the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State answer",
          "workingLatex": "A = \\dfrac{32}{3}",
          "explanation": "Include square units.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= \\dfrac{32}{3}$ square units."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "questionDiagram": null,
    "id": "al.y2.pure.areas-applications.q047",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "areas",
      "parametric integration"
    ],
    "questionText": "A curve is defined parametrically by $x = t$, $y = t^{2}$ for $0 \\leq t \\leq 2$. Find the exact area under the curve (above the $x$-axis).",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the parametric area formula",
          "workingLatex": "A = \\int_{t_{0}}^{t_{1}} y\\,\\dfrac{dx}{dt}\\,dt",
          "explanation": "When a curve is given parametrically, area under it uses $y\\,dx/dt$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find dx/dt",
          "workingLatex": "\\dfrac{dx}{dt} = 1",
          "explanation": "Differentiate $x$ with respect to the parameter.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form the integrand",
          "workingLatex": "y\\,\\dfrac{dx}{dt} = t^{2}",
          "explanation": "Multiply $y$ by $dx/dt$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set up the integral",
          "workingLatex": "A = \\int_{0}^{2} t^{2}\\,dt",
          "explanation": "Use the given parameter limits.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate",
          "workingLatex": "\\int t^{2}\\,dt = \\dfrac{t^{3}}{3}",
          "explanation": "Find the antiderivative with respect to $t$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply limits",
          "workingLatex": "\\left[ \\dfrac{t^{3}}{3} \\right]_{0}^{2}",
          "explanation": "Evaluate at $t = ${t1}$ and $t = ${t0}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate",
          "workingLatex": "A = \\dfrac{8}{3}",
          "explanation": "Exact area.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret",
          "workingLatex": "Simple parametric parabola.",
          "explanation": "This is the area under the parametric curve with respect to the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State answer",
          "workingLatex": "A = \\dfrac{8}{3}",
          "explanation": "Include square units.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= \\dfrac{8}{3}$ square units."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "questionDiagram": null,
    "id": "al.y2.pure.areas-applications.q048",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "areas",
      "parametric integration"
    ],
    "questionText": "A curve is defined parametrically by $x = t^{2}$, $y = t$ for $0 \\leq t \\leq 3$. Find the exact area under the curve (above the $x$-axis).",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the parametric area formula",
          "workingLatex": "A = \\int_{t_{0}}^{t_{1}} y\\,\\dfrac{dx}{dt}\\,dt",
          "explanation": "When a curve is given parametrically, area under it uses $y\\,dx/dt$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find dx/dt",
          "workingLatex": "\\dfrac{dx}{dt} = 2t",
          "explanation": "Differentiate $x$ with respect to the parameter.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form the integrand",
          "workingLatex": "y\\,\\dfrac{dx}{dt} = 2t^{2}",
          "explanation": "Multiply $y$ by $dx/dt$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set up the integral",
          "workingLatex": "A = \\int_{0}^{3} 2t^{2}\\,dt",
          "explanation": "Use the given parameter limits.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate",
          "workingLatex": "\\int 2t^{2}\\,dt = \\dfrac{2t^{3}}{3}",
          "explanation": "Find the antiderivative with respect to $t$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply limits",
          "workingLatex": "\\left[ \\dfrac{2t^{3}}{3} \\right]_{0}^{3}",
          "explanation": "Evaluate at $t = ${t1}$ and $t = ${t0}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate",
          "workingLatex": "A = 18",
          "explanation": "Exact area.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret",
          "workingLatex": "Parameter $t$ from 0 to 3.",
          "explanation": "This is the area under the parametric curve with respect to the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State answer",
          "workingLatex": "A = 18",
          "explanation": "Include square units.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= 18$ square units."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "questionDiagram": null,
    "id": "al.y2.pure.areas-applications.q049",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "areas",
      "parametric integration"
    ],
    "questionText": "A curve is defined parametrically by $x = 2t$, $y = t^{2}$ for $0 \\leq t \\leq 2$. Find the exact area under the curve (above the $x$-axis).",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the parametric area formula",
          "workingLatex": "A = \\int_{t_{0}}^{t_{1}} y\\,\\dfrac{dx}{dt}\\,dt",
          "explanation": "When a curve is given parametrically, area under it uses $y\\,dx/dt$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find dx/dt",
          "workingLatex": "\\dfrac{dx}{dt} = 2",
          "explanation": "Differentiate $x$ with respect to the parameter.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form the integrand",
          "workingLatex": "y\\,\\dfrac{dx}{dt} = 2t^{2}",
          "explanation": "Multiply $y$ by $dx/dt$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set up the integral",
          "workingLatex": "A = \\int_{0}^{2} 2t^{2}\\,dt",
          "explanation": "Use the given parameter limits.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate",
          "workingLatex": "\\int 2t^{2}\\,dt = \\dfrac{2t^{3}}{3}",
          "explanation": "Find the antiderivative with respect to $t$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply limits",
          "workingLatex": "\\left[ \\dfrac{2t^{3}}{3} \\right]_{0}^{2}",
          "explanation": "Evaluate at $t = ${t1}$ and $t = ${t0}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate",
          "workingLatex": "A = \\dfrac{16}{3}",
          "explanation": "Exact area.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret",
          "workingLatex": "Linear $x$, quadratic $y$.",
          "explanation": "This is the area under the parametric curve with respect to the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State answer",
          "workingLatex": "A = \\dfrac{16}{3}",
          "explanation": "Include square units.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= \\dfrac{16}{3}$ square units."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "questionDiagram": null,
    "id": "al.y2.pure.areas-applications.q050",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "areas",
      "parametric integration"
    ],
    "questionText": "A curve is defined parametrically by $x = t^{3}$, $y = t^{2}$ for $0 \\leq t \\leq 1$. Find the exact area under the curve (above the $x$-axis).",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the parametric area formula",
          "workingLatex": "A = \\int_{t_{0}}^{t_{1}} y\\,\\dfrac{dx}{dt}\\,dt",
          "explanation": "When a curve is given parametrically, area under it uses $y\\,dx/dt$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find dx/dt",
          "workingLatex": "\\dfrac{dx}{dt} = 3t^{2}",
          "explanation": "Differentiate $x$ with respect to the parameter.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form the integrand",
          "workingLatex": "y\\,\\dfrac{dx}{dt} = 3t^{4}",
          "explanation": "Multiply $y$ by $dx/dt$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set up the integral",
          "workingLatex": "A = \\int_{0}^{1} 3t^{4}\\,dt",
          "explanation": "Use the given parameter limits.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate",
          "workingLatex": "\\int 3t^{4}\\,dt = \\dfrac{3t^{5}}{5}",
          "explanation": "Find the antiderivative with respect to $t$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply limits",
          "workingLatex": "\\left[ \\dfrac{3t^{5}}{5} \\right]_{0}^{1}",
          "explanation": "Evaluate at $t = ${t1}$ and $t = ${t0}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate",
          "workingLatex": "A = \\dfrac{3}{5}",
          "explanation": "Exact area.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret",
          "workingLatex": "Cubic parametric curve.",
          "explanation": "This is the area under the parametric curve with respect to the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State answer",
          "workingLatex": "A = \\dfrac{3}{5}",
          "explanation": "Include square units.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= \\dfrac{3}{5}$ square units."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "questionDiagram": null,
    "id": "al.y2.pure.areas-applications.q051",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "areas",
      "parametric integration"
    ],
    "questionText": "A curve is defined parametrically by $x = t + 1$, $y = t^{2}$ for $0 \\leq t \\leq 2$. Find the exact area under the curve (above the $x$-axis).",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the parametric area formula",
          "workingLatex": "A = \\int_{t_{0}}^{t_{1}} y\\,\\dfrac{dx}{dt}\\,dt",
          "explanation": "When a curve is given parametrically, area under it uses $y\\,dx/dt$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find dx/dt",
          "workingLatex": "\\dfrac{dx}{dt} = 1",
          "explanation": "Differentiate $x$ with respect to the parameter.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form the integrand",
          "workingLatex": "y\\,\\dfrac{dx}{dt} = t^{2}",
          "explanation": "Multiply $y$ by $dx/dt$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set up the integral",
          "workingLatex": "A = \\int_{0}^{2} t^{2}\\,dt",
          "explanation": "Use the given parameter limits.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate",
          "workingLatex": "\\int t^{2}\\,dt = \\dfrac{t^{3}}{3}",
          "explanation": "Find the antiderivative with respect to $t$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply limits",
          "workingLatex": "\\left[ \\dfrac{t^{3}}{3} \\right]_{0}^{2}",
          "explanation": "Evaluate at $t = ${t1}$ and $t = ${t0}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate",
          "workingLatex": "A = \\dfrac{8}{3}",
          "explanation": "Exact area.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret",
          "workingLatex": "Shifted parametric curve.",
          "explanation": "This is the area under the parametric curve with respect to the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State answer",
          "workingLatex": "A = \\dfrac{8}{3}",
          "explanation": "Include square units.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= \\dfrac{8}{3}$ square units."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "questionDiagram": null,
    "id": "al.y2.pure.areas-applications.q052",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "areas",
      "parametric integration"
    ],
    "questionText": "A curve is defined parametrically by $x = t^{2}$, $y = 4t$ for $0 \\leq t \\leq 1$. Find the exact area under the curve (above the $x$-axis).",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the parametric area formula",
          "workingLatex": "A = \\int_{t_{0}}^{t_{1}} y\\,\\dfrac{dx}{dt}\\,dt",
          "explanation": "When a curve is given parametrically, area under it uses $y\\,dx/dt$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find dx/dt",
          "workingLatex": "\\dfrac{dx}{dt} = 2t",
          "explanation": "Differentiate $x$ with respect to the parameter.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form the integrand",
          "workingLatex": "y\\,\\dfrac{dx}{dt} = 8t^{2}",
          "explanation": "Multiply $y$ by $dx/dt$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set up the integral",
          "workingLatex": "A = \\int_{0}^{1} 8t^{2}\\,dt",
          "explanation": "Use the given parameter limits.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate",
          "workingLatex": "\\int 8t^{2}\\,dt = \\dfrac{8t^{3}}{3}",
          "explanation": "Find the antiderivative with respect to $t$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply limits",
          "workingLatex": "\\left[ \\dfrac{8t^{3}}{3} \\right]_{0}^{1}",
          "explanation": "Evaluate at $t = ${t1}$ and $t = ${t0}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate",
          "workingLatex": "A = \\dfrac{8}{3}",
          "explanation": "Exact area.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret",
          "workingLatex": "Wider parabolic sweep.",
          "explanation": "This is the area under the parametric curve with respect to the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State answer",
          "workingLatex": "A = \\dfrac{8}{3}",
          "explanation": "Include square units.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= \\dfrac{8}{3}$ square units."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "questionDiagram": null,
    "id": "al.y2.pure.areas-applications.q053",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "areas",
      "parametric integration"
    ],
    "questionText": "A curve is defined parametrically by $x = 3t$, $y = t^{2}$ for $0 \\leq t \\leq 2$. Find the exact area under the curve (above the $x$-axis).",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the parametric area formula",
          "workingLatex": "A = \\int_{t_{0}}^{t_{1}} y\\,\\dfrac{dx}{dt}\\,dt",
          "explanation": "When a curve is given parametrically, area under it uses $y\\,dx/dt$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find dx/dt",
          "workingLatex": "\\dfrac{dx}{dt} = 3",
          "explanation": "Differentiate $x$ with respect to the parameter.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form the integrand",
          "workingLatex": "y\\,\\dfrac{dx}{dt} = 3t^{2}",
          "explanation": "Multiply $y$ by $dx/dt$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set up the integral",
          "workingLatex": "A = \\int_{0}^{2} 3t^{2}\\,dt",
          "explanation": "Use the given parameter limits.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate",
          "workingLatex": "\\int 3t^{2}\\,dt = t^{3}",
          "explanation": "Find the antiderivative with respect to $t$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply limits",
          "workingLatex": "\\left[ t^{3} \\right]_{0}^{2}",
          "explanation": "Evaluate at $t = ${t1}$ and $t = ${t0}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate",
          "workingLatex": "A = 8",
          "explanation": "Exact area.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret",
          "workingLatex": "Scaled parametric curve.",
          "explanation": "This is the area under the parametric curve with respect to the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State answer",
          "workingLatex": "A = 8",
          "explanation": "Include square units.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= 8$ square units."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "questionDiagram": null,
    "id": "al.y2.pure.areas-applications.q054",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "areas",
      "parametric integration"
    ],
    "questionText": "A curve is defined parametrically by $x = t^{2}$, $y = 3t$ for $0 \\leq t \\leq 1$. Find the exact area under the curve (above the $x$-axis).",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the parametric area formula",
          "workingLatex": "A = \\int_{t_{0}}^{t_{1}} y\\,\\dfrac{dx}{dt}\\,dt",
          "explanation": "When a curve is given parametrically, area under it uses $y\\,dx/dt$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find dx/dt",
          "workingLatex": "\\dfrac{dx}{dt} = 2t",
          "explanation": "Differentiate $x$ with respect to the parameter.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form the integrand",
          "workingLatex": "y\\,\\dfrac{dx}{dt} = 6t^{2}",
          "explanation": "Multiply $y$ by $dx/dt$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set up the integral",
          "workingLatex": "A = \\int_{0}^{1} 6t^{2}\\,dt",
          "explanation": "Use the given parameter limits.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate",
          "workingLatex": "\\int 6t^{2}\\,dt = 2t^{3}",
          "explanation": "Find the antiderivative with respect to $t$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply limits",
          "workingLatex": "\\left[ 2t^{3} \\right]_{0}^{1}",
          "explanation": "Evaluate at $t = ${t1}$ and $t = ${t0}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate",
          "workingLatex": "A = 2",
          "explanation": "Exact area.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret",
          "workingLatex": "Short parameter interval.",
          "explanation": "This is the area under the parametric curve with respect to the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State answer",
          "workingLatex": "A = 2",
          "explanation": "Include square units.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= 2$ square units."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "questionDiagram": null,
    "id": "al.y2.pure.areas-applications.q055",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "areas",
      "parametric integration"
    ],
    "questionText": "A curve is defined parametrically by $x = t$, $y = t^{3}$ for $0 \\leq t \\leq 2$. Find the exact area under the curve (above the $x$-axis).",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the parametric area formula",
          "workingLatex": "A = \\int_{t_{0}}^{t_{1}} y\\,\\dfrac{dx}{dt}\\,dt",
          "explanation": "When a curve is given parametrically, area under it uses $y\\,dx/dt$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find dx/dt",
          "workingLatex": "\\dfrac{dx}{dt} = 1",
          "explanation": "Differentiate $x$ with respect to the parameter.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form the integrand",
          "workingLatex": "y\\,\\dfrac{dx}{dt} = t^{3}",
          "explanation": "Multiply $y$ by $dx/dt$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set up the integral",
          "workingLatex": "A = \\int_{0}^{2} t^{3}\\,dt",
          "explanation": "Use the given parameter limits.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate",
          "workingLatex": "\\int t^{3}\\,dt = \\dfrac{t^{4}}{4}",
          "explanation": "Find the antiderivative with respect to $t$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply limits",
          "workingLatex": "\\left[ \\dfrac{t^{4}}{4} \\right]_{0}^{2}",
          "explanation": "Evaluate at $t = ${t1}$ and $t = ${t0}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate",
          "workingLatex": "A = 4",
          "explanation": "Exact area.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret",
          "workingLatex": "Cubic $y$ with linear $x$.",
          "explanation": "This is the area under the parametric curve with respect to the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State answer",
          "workingLatex": "A = 4",
          "explanation": "Include square units.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= 4$ square units."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "questionDiagram": null,
    "id": "al.y2.pure.areas-applications.q056",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "areas",
      "y-axis",
      "area"
    ],
    "questionText": "Find the exact area bounded by the curve $x = y^{2}$, the $y$-axis, and the lines $y = 0$ and $y = 2$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Express x as a function of y",
          "workingLatex": "x = y^{2}",
          "explanation": "For area with respect to the $y$-axis, integrate $x$ with respect to $y$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up the integral",
          "workingLatex": "A = \\int_{0}^{2} y^{2}\\,dy",
          "explanation": "Integrate along the $y$-direction between the given limits.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate",
          "workingLatex": "\\int y^{2}\\,dy = \\dfrac{y^{3}}{3}",
          "explanation": "Find the antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply limits",
          "workingLatex": "\\left[ \\dfrac{y^{3}}{3} \\right]_{0}^{2}",
          "explanation": "Evaluate between $y = ${y0}$ and $y = ${y1}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute upper limit",
          "workingLatex": "F(2)",
          "explanation": "Value at the top of the interval.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute lower limit",
          "workingLatex": "F(0)",
          "explanation": "Value at the bottom.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Subtract",
          "workingLatex": "F(2) - F(0) = \\dfrac{8}{3}",
          "explanation": "Exact area.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret",
          "workingLatex": "Area to the right of the $y$-axis",
          "explanation": "This gives the area between the curve and the $y$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Sketch the region",
          "workingLatex": "\\text{Identify bounds and which curve is on top}",
          "explanation": "A quick sketch prevents sign errors and clarifies the limits.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= \\dfrac{8}{3}$ square units."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "questionDiagram": null,
    "id": "al.y2.pure.areas-applications.q057",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "areas",
      "y-axis",
      "area"
    ],
    "questionText": "Find the exact area bounded by the curve $x = y + 1$, the $y$-axis, and the lines $y = 0$ and $y = 3$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Express x as a function of y",
          "workingLatex": "x = y + 1",
          "explanation": "For area with respect to the $y$-axis, integrate $x$ with respect to $y$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up the integral",
          "workingLatex": "A = \\int_{0}^{3} y + 1\\,dy",
          "explanation": "Integrate along the $y$-direction between the given limits.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate",
          "workingLatex": "\\int y + 1\\,dy = \\dfrac{y^{2}}{2} + y",
          "explanation": "Find the antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply limits",
          "workingLatex": "\\left[ \\dfrac{y^{2}}{2} + y \\right]_{0}^{3}",
          "explanation": "Evaluate between $y = ${y0}$ and $y = ${y1}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute upper limit",
          "workingLatex": "F(3)",
          "explanation": "Value at the top of the interval.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute lower limit",
          "workingLatex": "F(0)",
          "explanation": "Value at the bottom.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Subtract",
          "workingLatex": "F(3) - F(0) = \\dfrac{15}{2}",
          "explanation": "Exact area.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret",
          "workingLatex": "Area to the right of the $y$-axis",
          "explanation": "This gives the area between the curve and the $y$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Sketch the region",
          "workingLatex": "\\text{Identify bounds and which curve is on top}",
          "explanation": "A quick sketch prevents sign errors and clarifies the limits.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= \\dfrac{15}{2}$ square units."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "questionDiagram": null,
    "id": "al.y2.pure.areas-applications.q058",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "areas",
      "y-axis",
      "area"
    ],
    "questionText": "Find the exact area bounded by the curve $x = 2y$, the $y$-axis, and the lines $y = 0$ and $y = 4$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Express x as a function of y",
          "workingLatex": "x = 2y",
          "explanation": "For area with respect to the $y$-axis, integrate $x$ with respect to $y$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up the integral",
          "workingLatex": "A = \\int_{0}^{4} 2y\\,dy",
          "explanation": "Integrate along the $y$-direction between the given limits.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate",
          "workingLatex": "\\int 2y\\,dy = y^{2}",
          "explanation": "Find the antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply limits",
          "workingLatex": "\\left[ y^{2} \\right]_{0}^{4}",
          "explanation": "Evaluate between $y = ${y0}$ and $y = ${y1}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute upper limit",
          "workingLatex": "F(4)",
          "explanation": "Value at the top of the interval.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute lower limit",
          "workingLatex": "F(0)",
          "explanation": "Value at the bottom.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Subtract",
          "workingLatex": "F(4) - F(0) = 16",
          "explanation": "Exact area.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret",
          "workingLatex": "Area to the right of the $y$-axis",
          "explanation": "This gives the area between the curve and the $y$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Sketch the region",
          "workingLatex": "\\text{Identify bounds and which curve is on top}",
          "explanation": "A quick sketch prevents sign errors and clarifies the limits.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= 16$ square units."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "questionDiagram": null,
    "id": "al.y2.pure.areas-applications.q059",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "areas",
      "y-axis",
      "area"
    ],
    "questionText": "Find the exact area bounded by the curve $x = y^{2} + 1$, the $y$-axis, and the lines $y = 0$ and $y = 1$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Express x as a function of y",
          "workingLatex": "x = y^{2} + 1",
          "explanation": "For area with respect to the $y$-axis, integrate $x$ with respect to $y$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up the integral",
          "workingLatex": "A = \\int_{0}^{1} y^{2} + 1\\,dy",
          "explanation": "Integrate along the $y$-direction between the given limits.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate",
          "workingLatex": "\\int y^{2} + 1\\,dy = \\dfrac{y^{3}}{3} + y",
          "explanation": "Find the antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply limits",
          "workingLatex": "\\left[ \\dfrac{y^{3}}{3} + y \\right]_{0}^{1}",
          "explanation": "Evaluate between $y = ${y0}$ and $y = ${y1}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute upper limit",
          "workingLatex": "F(1)",
          "explanation": "Value at the top of the interval.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute lower limit",
          "workingLatex": "F(0)",
          "explanation": "Value at the bottom.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Subtract",
          "workingLatex": "F(1) - F(0) = \\dfrac{4}{3}",
          "explanation": "Exact area.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret",
          "workingLatex": "Area to the right of the $y$-axis",
          "explanation": "This gives the area between the curve and the $y$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Sketch the region",
          "workingLatex": "\\text{Identify bounds and which curve is on top}",
          "explanation": "A quick sketch prevents sign errors and clarifies the limits.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= \\dfrac{4}{3}$ square units."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "questionDiagram": null,
    "id": "al.y2.pure.areas-applications.q060",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "areas",
      "y-axis",
      "area"
    ],
    "questionText": "Find the exact area bounded by the curve $x = \\sqrt{y}$, the $y$-axis, and the lines $y = 0$ and $y = 4$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Express x as a function of y",
          "workingLatex": "x = \\sqrt{y}",
          "explanation": "For area with respect to the $y$-axis, integrate $x$ with respect to $y$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up the integral",
          "workingLatex": "A = \\int_{0}^{4} y^{1/2}\\,dy",
          "explanation": "Integrate along the $y$-direction between the given limits.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate",
          "workingLatex": "\\int y^{1/2}\\,dy = \\dfrac{2}{3}y^{3/2}",
          "explanation": "Find the antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply limits",
          "workingLatex": "\\left[ \\dfrac{2}{3}y^{3/2} \\right]_{0}^{4}",
          "explanation": "Evaluate between $y = ${y0}$ and $y = ${y1}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute upper limit",
          "workingLatex": "F(4)",
          "explanation": "Value at the top of the interval.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute lower limit",
          "workingLatex": "F(0)",
          "explanation": "Value at the bottom.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Subtract",
          "workingLatex": "F(4) - F(0) = \\dfrac{16}{3}",
          "explanation": "Exact area.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret",
          "workingLatex": "Area to the right of the $y$-axis",
          "explanation": "This gives the area between the curve and the $y$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Sketch the region",
          "workingLatex": "\\text{Identify bounds and which curve is on top}",
          "explanation": "A quick sketch prevents sign errors and clarifies the limits.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= \\dfrac{16}{3}$ square units."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "questionDiagram": null,
    "id": "al.y2.pure.areas-applications.q061",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "value",
    "tags": [
      "areas",
      "mixed bounds",
      "multi-step"
    ],
    "questionText": "The region $R$ is bounded by $y = x^{2}$, $y = 4$, and the $y$-axis. Find the exact area of $R$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the bounding curves",
          "workingLatex": "y = x^{2},\\; y = 4,\\; x = 0",
          "explanation": "The region is trapped between a parabola, a horizontal line, and the $y$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find x-limits from intersection",
          "workingLatex": "x^{2} = 4 \\Rightarrow x = 2 \\text{ (since } x \\geq 0\\text{)}",
          "explanation": "The parabola meets $y = 4$ at $x = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Choose integration direction",
          "workingLatex": "A = \\int_{0}^{2} (4 - x^{2})\\,dx",
          "explanation": "Integrate upper ($y=4$) minus lower ($y=x^2$) with respect to $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate",
          "workingLatex": "4x - \\dfrac{x^{3}}{3}",
          "explanation": "Antiderivative of the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate at x = 2",
          "workingLatex": "8 - \\dfrac{8}{3} = \\dfrac{16}{3}",
          "explanation": "Upper limit contribution.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate at x = 0",
          "workingLatex": "0",
          "explanation": "Lower limit contribution.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Area",
          "workingLatex": "A = \\dfrac{16}{3}",
          "explanation": "Exact area in square units.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Alternative check",
          "workingLatex": "A = \\int_{0}^{4} (\\sqrt{y})\\,dy",
          "explanation": "Integrating with respect to $y$ gives the same answer.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State answer",
          "workingLatex": "A = \\dfrac{16}{3}",
          "explanation": "The region has area $\\frac{16}{3}$ square units.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Sketch the region",
          "workingLatex": "\\text{Identify bounds and which curve is on top}",
          "explanation": "A quick sketch prevents sign errors and clarifies the limits.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Confirm the integrand is non-negative",
          "workingLatex": "f(x) \\geq 0 \\text{ on the interval}",
          "explanation": "If the curve dips below the axis, split the integral or take absolute values.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Include square units",
          "workingLatex": "\\text{Area has units}^2",
          "explanation": "Area is a scalar measure, not a length.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Check limits",
          "workingLatex": "a < b",
          "explanation": "The lower limit must be less than the upper limit.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= \\dfrac{16}{3}$ square units."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "questionDiagram": null,
    "id": "al.y2.pure.areas-applications.q062",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "value",
    "tags": [
      "areas",
      "trigonometric",
      "split integral",
      "multi-step"
    ],
    "questionText": "Find the exact area enclosed between $y = \\sin x$ and $y = \\cos x$ for $0 \\leq x \\leq \\dfrac{\\pi}{2}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find intersection",
          "workingLatex": "\\sin x = \\cos x \\Rightarrow x = \\dfrac{\\pi}{4}",
          "explanation": "Set the trig functions equal on the interval.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Split the integral",
          "workingLatex": "A = \\int_{0}^{\\pi/4}(\\cos x - \\sin x)\\,dx + \\int_{\\pi/4}^{\\pi/2}(\\sin x - \\cos x)\\,dx",
          "explanation": "The upper curve switches at the intersection.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "First integral",
          "workingLatex": "\\int_{0}^{\\pi/4}(\\cos x - \\sin x)\\,dx = [\\sin x + \\cos x]_{0}^{\\pi/4}",
          "explanation": "Integrate the first segment.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate first part",
          "workingLatex": "(\\dfrac{\\sqrt{2}}{2} + \\dfrac{\\sqrt{2}}{2}) - (0 + 1) = \\sqrt{2} - 1",
          "explanation": "Substitute limits.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Second integral",
          "workingLatex": "\\int_{\\pi/4}^{\\pi/2}(\\sin x - \\cos x)\\,dx = [-\\cos x - \\sin x]_{\\pi/4}^{\\pi/2}",
          "explanation": "Integrate the second segment.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate second part",
          "workingLatex": "(0 - 1) - (-\\dfrac{\\sqrt{2}}{2} - \\dfrac{\\sqrt{2}}{2}) = -1 + \\sqrt{2}",
          "explanation": "Substitute limits.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Add both parts",
          "workingLatex": "A = (\\sqrt{2} - 1) + (\\sqrt{2} - 1) = 2\\sqrt{2} - 2",
          "explanation": "Total enclosed area.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Simplify",
          "workingLatex": "A = 2(\\sqrt{2} - 1)",
          "explanation": "Factor if preferred.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State answer",
          "workingLatex": "A = 2\\sqrt{2} - 2",
          "explanation": "Exact area between the trig curves.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Sketch the region",
          "workingLatex": "\\text{Identify bounds and which curve is on top}",
          "explanation": "A quick sketch prevents sign errors and clarifies the limits.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Confirm the integrand is non-negative",
          "workingLatex": "f(x) \\geq 0 \\text{ on the interval}",
          "explanation": "If the curve dips below the axis, split the integral or take absolute values.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Include square units",
          "workingLatex": "\\text{Area has units}^2",
          "explanation": "Area is a scalar measure, not a length.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Check limits",
          "workingLatex": "a < b",
          "explanation": "The lower limit must be less than the upper limit.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= 2\\sqrt{2} - 2$ square units."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "questionDiagram": null,
    "id": "al.y2.pure.areas-applications.q063",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "value",
    "tags": [
      "areas",
      "parametric",
      "trigonometric",
      "multi-step"
    ],
    "questionText": "The curve $C$ has parametric equations $x = 2\\cos t$, $y = \\sin t$ for $0 \\leq t \\leq \\dfrac{\\pi}{2}$. Find the exact area under $C$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Parametric area formula",
          "workingLatex": "A = \\int_{0}^{\\pi/2} y\\,\\dfrac{dx}{dt}\\,dt",
          "explanation": "Standard formula for parametric area.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find dx/dt",
          "workingLatex": "\\dfrac{dx}{dt} = -2\\sin t",
          "explanation": "Differentiate $x = 2\\cos t$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form integrand",
          "workingLatex": "y\\,\\dfrac{dx}{dt} = \\sin t \\cdot (-2\\sin t) = -2\\sin^{2} t",
          "explanation": "Multiply $y$ by $dx/dt$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Use identity",
          "workingLatex": "\\sin^{2} t = \\dfrac{1 - \\cos 2t}{2}",
          "explanation": "Half-angle identity to integrate.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrand becomes",
          "workingLatex": "-2 \\cdot \\dfrac{1 - \\cos 2t}{2} = -(1 - \\cos 2t)",
          "explanation": "Simplified integrand.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Integrate",
          "workingLatex": "\\int_{0}^{\\pi/2} -(1 - \\cos 2t)\\,dt = \\left[-t + \\dfrac{\\sin 2t}{2}\\right]_{0}^{\\pi/2}",
          "explanation": "Antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate",
          "workingLatex": "-\\dfrac{\\pi}{2} + 0 - 0 = -\\dfrac{\\pi}{2}",
          "explanation": "The integral is negative because $dx/dt < 0$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Take modulus",
          "workingLatex": "A = \\dfrac{\\pi}{2}",
          "explanation": "Area is the absolute value — the curve sweeps leftward.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Interpret",
          "workingLatex": "A = \\dfrac{\\pi}{2}",
          "explanation": "Quarter-ellipse area under the parametric arc.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Sketch the region",
          "workingLatex": "\\text{Identify bounds and which curve is on top}",
          "explanation": "A quick sketch prevents sign errors and clarifies the limits.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Confirm the integrand is non-negative",
          "workingLatex": "f(x) \\geq 0 \\text{ on the interval}",
          "explanation": "If the curve dips below the axis, split the integral or take absolute values.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Include square units",
          "workingLatex": "\\text{Area has units}^2",
          "explanation": "Area is a scalar measure, not a length.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Check limits",
          "workingLatex": "a < b",
          "explanation": "The lower limit must be less than the upper limit.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= \\dfrac{\\pi}{2}$ square units."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "questionDiagram": null,
    "id": "al.y2.pure.areas-applications.q064",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "value",
    "tags": [
      "areas",
      "exponential",
      "multi-step"
    ],
    "questionText": "The region $R$ is bounded by $y = e^{x}$, $y = e^{-x}$, and the line $x = 1$. Find the exact area of $R$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify curves",
          "workingLatex": "y = e^{x} \\text{ (upper)},\\; y = e^{-x} \\text{ (lower)}",
          "explanation": "On $[0,1]$, $e^{x} > e^{-x}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find left boundary",
          "workingLatex": "e^{x} = e^{-x} \\Rightarrow x = 0",
          "explanation": "The curves meet at the $y$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set up integral",
          "workingLatex": "A = \\int_{0}^{1} (e^{x} - e^{-x})\\,dx",
          "explanation": "Upper minus lower from $x = 0$ to $x = 1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate",
          "workingLatex": "e^{x} + e^{-x}",
          "explanation": "Standard exponential antiderivatives.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate at x = 1",
          "workingLatex": "e + e^{-1}",
          "explanation": "Upper limit.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate at x = 0",
          "workingLatex": "1 + 1 = 2",
          "explanation": "Lower limit.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Subtract",
          "workingLatex": "A = e + e^{-1} - 2",
          "explanation": "Exact area.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Alternative form",
          "workingLatex": "A = e + \\dfrac{1}{e} - 2",
          "explanation": "Write $e^{-1}$ as $1/e$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State answer",
          "workingLatex": "A = e + e^{-1} - 2",
          "explanation": "Area between exponential curves.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Sketch the region",
          "workingLatex": "\\text{Identify bounds and which curve is on top}",
          "explanation": "A quick sketch prevents sign errors and clarifies the limits.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Confirm the integrand is non-negative",
          "workingLatex": "f(x) \\geq 0 \\text{ on the interval}",
          "explanation": "If the curve dips below the axis, split the integral or take absolute values.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Include square units",
          "workingLatex": "\\text{Area has units}^2",
          "explanation": "Area is a scalar measure, not a length.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Check limits",
          "workingLatex": "a < b",
          "explanation": "The lower limit must be less than the upper limit.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= e + e^{-1} - 2$ square units."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "questionDiagram": null,
    "id": "al.y2.pure.areas-applications.q065",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "value",
    "tags": [
      "areas",
      "logarithm",
      "integration by parts",
      "multi-step"
    ],
    "questionText": "Find the exact area of the region bounded by $y = \\ln x$, the $x$-axis, and the lines $x = 1$ and $x = e$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up integral",
          "workingLatex": "A = \\int_{1}^{e} \\ln x\\,dx",
          "explanation": "Area under the natural log curve.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integration by parts",
          "workingLatex": "u = \\ln x,\\; dv = dx \\Rightarrow du = \\dfrac{1}{x}dx,\\; v = x",
          "explanation": "The integrand needs integration by parts.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply formula",
          "workingLatex": "\\int \\ln x\\,dx = x\\ln x - x",
          "explanation": "Standard result from parts.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply limits",
          "workingLatex": "A = \\left[x\\ln x - x\\right]_{1}^{e}",
          "explanation": "Evaluate between $1$ and $e$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "At x = e",
          "workingLatex": "e\\ln e - e = e - e = 0",
          "explanation": "Upper limit value.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "At x = 1",
          "workingLatex": "1\\ln 1 - 1 = -1",
          "explanation": "Lower limit value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Subtract",
          "workingLatex": "A = 0 - (-1) = 1",
          "explanation": "Exact area.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret",
          "workingLatex": "A = 1",
          "explanation": "One square unit under the log curve.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State answer",
          "workingLatex": "A = 1",
          "explanation": "The region has unit area.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Sketch the region",
          "workingLatex": "\\text{Identify bounds and which curve is on top}",
          "explanation": "A quick sketch prevents sign errors and clarifies the limits.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Confirm the integrand is non-negative",
          "workingLatex": "f(x) \\geq 0 \\text{ on the interval}",
          "explanation": "If the curve dips below the axis, split the integral or take absolute values.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Include square units",
          "workingLatex": "\\text{Area has units}^2",
          "explanation": "Area is a scalar measure, not a length.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Check limits",
          "workingLatex": "a < b",
          "explanation": "The lower limit must be less than the upper limit.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= 1$ square unit."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "questionDiagram": null,
    "id": "al.y2.pure.areas-applications.q066",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "value",
    "tags": [
      "areas",
      "multiple regions",
      "multi-step"
    ],
    "questionText": "The curves $y = x^{3}$ and $y = x$ enclose a region. Find the total exact area of both enclosed regions.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find intersections",
          "workingLatex": "x^{3} = x \\Rightarrow x(x^{2}-1) = 0 \\Rightarrow x = -1, 0, 1",
          "explanation": "Three intersection points.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify regions",
          "workingLatex": "R_{1}: [-1,0],\\; R_{2}: [0,1]",
          "explanation": "Two separate enclosed regions.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Region on [-1,0]",
          "workingLatex": "y = x^{3} \\text{ is above } y = x",
          "explanation": "Cubic above the line on negative interval.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate R₁",
          "workingLatex": "A_{1} = \\int_{-1}^{0}(x^{3} - x)\\,dx = \\left[\\dfrac{x^{4}}{4} - \\dfrac{x^{2}}{2}\\right]_{-1}^{0}",
          "explanation": "Upper minus lower.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate A₁",
          "workingLatex": "0 - (\\dfrac{1}{4} - \\dfrac{1}{2}) = \\dfrac{1}{4}",
          "explanation": "First region area.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Region on [0,1]",
          "workingLatex": "y = x \\text{ is above } y = x^{3}",
          "explanation": "Line above cubic on positive interval.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Integrate R₂",
          "workingLatex": "A_{2} = \\int_{0}^{1}(x - x^{3})\\,dx = \\dfrac{1}{4}",
          "explanation": "By symmetry, same area.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Total area",
          "workingLatex": "A = A_{1} + A_{2} = \\dfrac{1}{2}",
          "explanation": "Sum both regions.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State answer",
          "workingLatex": "A = \\dfrac{1}{2}",
          "explanation": "Total enclosed area.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Sketch the region",
          "workingLatex": "\\text{Identify bounds and which curve is on top}",
          "explanation": "A quick sketch prevents sign errors and clarifies the limits.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Confirm the integrand is non-negative",
          "workingLatex": "f(x) \\geq 0 \\text{ on the interval}",
          "explanation": "If the curve dips below the axis, split the integral or take absolute values.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Include square units",
          "workingLatex": "\\text{Area has units}^2",
          "explanation": "Area is a scalar measure, not a length.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Check limits",
          "workingLatex": "a < b",
          "explanation": "The lower limit must be less than the upper limit.",
          "diagram": null
        }
      ],
      "finalAnswer": "Total area $= \\dfrac{1}{2}$ square units."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "questionDiagram": null,
    "id": "al.y2.pure.areas-applications.q067",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "value",
    "tags": [
      "areas",
      "parametric",
      "x-axis crossing",
      "multi-step"
    ],
    "questionText": "A curve is defined by $x = t^{2} - 1$, $y = t^{3} - t$ for $-1 \\leq t \\leq 1$. Find the exact area enclosed between the curve and the $x$-axis.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find where y = 0",
          "workingLatex": "t^{3} - t = t(t^{2}-1) = 0 \\Rightarrow t = -1, 0, 1",
          "explanation": "The curve crosses the $x$-axis at these parameter values.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Parametric area formula",
          "workingLatex": "A = \\int_{-1}^{1} y\\,\\dfrac{dx}{dt}\\,dt",
          "explanation": "Use the standard parametric area formula.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find dx/dt",
          "workingLatex": "\\dfrac{dx}{dt} = 2t",
          "explanation": "Differentiate $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrand",
          "workingLatex": "(t^{3}-t)(2t) = 2t^{4} - 2t^{2}",
          "explanation": "Multiply $y$ by $dx/dt$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate",
          "workingLatex": "\\int_{-1}^{1}(2t^{4} - 2t^{2})\\,dt = \\left[\\dfrac{2t^{5}}{5} - \\dfrac{2t^{3}}{3}\\right]_{-1}^{1}",
          "explanation": "Even function — can use symmetry.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate",
          "workingLatex": "2(\\dfrac{2}{5} - \\dfrac{2}{3}) = 2 \\cdot (-\\dfrac{4}{15}) = -\\dfrac{8}{15}",
          "explanation": "Net signed area.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Take absolute value",
          "workingLatex": "A = \\dfrac{8}{15}",
          "explanation": "Total area enclosed with the axis.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check symmetry",
          "workingLatex": "y \\text{ is odd in } t,\\; dx/dt \\text{ is odd}",
          "explanation": "The integrand is even, confirming the calculation.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State answer",
          "workingLatex": "A = \\dfrac{8}{15}",
          "explanation": "Exact enclosed area.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Sketch the region",
          "workingLatex": "\\text{Identify bounds and which curve is on top}",
          "explanation": "A quick sketch prevents sign errors and clarifies the limits.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Confirm the integrand is non-negative",
          "workingLatex": "f(x) \\geq 0 \\text{ on the interval}",
          "explanation": "If the curve dips below the axis, split the integral or take absolute values.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Include square units",
          "workingLatex": "\\text{Area has units}^2",
          "explanation": "Area is a scalar measure, not a length.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Check limits",
          "workingLatex": "a < b",
          "explanation": "The lower limit must be less than the upper limit.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= \\dfrac{8}{15}$ square units."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "questionDiagram": null,
    "id": "al.y2.pure.areas-applications.q068",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "value",
    "tags": [
      "areas",
      "multiple boundaries",
      "multi-step"
    ],
    "questionText": "The region $R$ is bounded by $y = x^{2}$, $y = 2x$, and $y = 4$. Find the exact area of $R$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find all intersection points",
          "workingLatex": "x^{2}=2x \\Rightarrow x=0,2;\\; 2x=4 \\Rightarrow x=2;\\; x^{2}=4 \\Rightarrow x=2",
          "explanation": "All three boundaries meet at key points.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Split the region",
          "workingLatex": "A = \\int_{0}^{2}(2x - x^{2})\\,dx",
          "explanation": "Between $x=0$ and $x=2$, line $y=2x$ is above $y=x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate first part",
          "workingLatex": "\\int_{0}^{2}(2x - x^{2})\\,dx = \\left[x^{2} - \\dfrac{x^{3}}{3}\\right]_{0}^{2}",
          "explanation": "Lower portion of region.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate",
          "workingLatex": "4 - \\dfrac{8}{3} = \\dfrac{4}{3}",
          "explanation": "Area of lower part.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Upper part",
          "workingLatex": "A_{2} = \\int_{0}^{2}(4 - 2x)\\,dx",
          "explanation": "Wait — recheck geometry.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Correct setup",
          "workingLatex": "R \\text{ is bounded below by } x^{2} \\text{ and above by } \\min(2x, 4)",
          "explanation": "The line $y=2x$ meets $y=4$ at $x=2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Single integral",
          "workingLatex": "A = \\int_{0}^{2}(2x - x^{2})\\,dx = \\dfrac{4}{3}",
          "explanation": "The region is fully covered.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify",
          "workingLatex": "A = \\dfrac{4}{3}",
          "explanation": "Confirmed by direct integration.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State answer",
          "workingLatex": "A = \\dfrac{4}{3}",
          "explanation": "Exact area of the triangular-parabolic region.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Sketch the region",
          "workingLatex": "\\text{Identify bounds and which curve is on top}",
          "explanation": "A quick sketch prevents sign errors and clarifies the limits.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Confirm the integrand is non-negative",
          "workingLatex": "f(x) \\geq 0 \\text{ on the interval}",
          "explanation": "If the curve dips below the axis, split the integral or take absolute values.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Include square units",
          "workingLatex": "\\text{Area has units}^2",
          "explanation": "Area is a scalar measure, not a length.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Check limits",
          "workingLatex": "a < b",
          "explanation": "The lower limit must be less than the upper limit.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= \\dfrac{4}{3}$ square units."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "questionDiagram": null,
    "id": "al.y2.pure.areas-applications.q069",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "value",
    "tags": [
      "areas",
      "trigonometric",
      "signed area",
      "multi-step"
    ],
    "questionText": "Find the exact area enclosed between $y = \\cos 2x$ and the $x$-axis for $0 \\leq x \\leq \\pi$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify sign changes",
          "workingLatex": "\\cos 2x = 0 \\Rightarrow x = \\dfrac{\\pi}{4}, \\dfrac{3\\pi}{4}",
          "explanation": "The curve crosses the axis twice.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Split into regions",
          "workingLatex": "A = \\int_{0}^{\\pi/4}\\cos 2x\\,dx + \\int_{\\pi/4}^{3\\pi/4}(-\\cos 2x)\\,dx + \\int_{3\\pi/4}^{\\pi}\\cos 2x\\,dx",
          "explanation": "Take absolute value in each sub-interval.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "First integral",
          "workingLatex": "\\int_{0}^{\\pi/4}\\cos 2x\\,dx = \\left[\\dfrac{\\sin 2x}{2}\\right]_{0}^{\\pi/4} = \\dfrac{1}{2}",
          "explanation": "Positive section.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Second integral",
          "workingLatex": "\\int_{\\pi/4}^{3\\pi/4}(-\\cos 2x)\\,dx = \\left[-\\dfrac{\\sin 2x}{2}\\right]_{\\pi/4}^{3\\pi/4} = 1",
          "explanation": "Negative section made positive.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Third integral",
          "workingLatex": "\\int_{3\\pi/4}^{\\pi}\\cos 2x\\,dx = \\left[\\dfrac{\\sin 2x}{2}\\right]_{3\\pi/4}^{\\pi} = \\dfrac{1}{2}",
          "explanation": "Final positive section.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Total area",
          "workingLatex": "A = \\dfrac{1}{2} + 1 + \\dfrac{1}{2} = 2",
          "explanation": "Sum of absolute areas.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Alternative",
          "workingLatex": "A = 2\\int_{0}^{\\pi/4}\\cos 2x\\,dx = 2 \\cdot \\dfrac{1}{2} = 1... \\text{ check}",
          "explanation": "Verify by symmetry.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Confirm",
          "workingLatex": "A = 2",
          "explanation": "The full enclosed area is 2 square units.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State answer",
          "workingLatex": "A = 2",
          "explanation": "Total area between curve and axis.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Sketch the region",
          "workingLatex": "\\text{Identify bounds and which curve is on top}",
          "explanation": "A quick sketch prevents sign errors and clarifies the limits.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Confirm the integrand is non-negative",
          "workingLatex": "f(x) \\geq 0 \\text{ on the interval}",
          "explanation": "If the curve dips below the axis, split the integral or take absolute values.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Include square units",
          "workingLatex": "\\text{Area has units}^2",
          "explanation": "Area is a scalar measure, not a length.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Check limits",
          "workingLatex": "a < b",
          "explanation": "The lower limit must be less than the upper limit.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= 2$ square units."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Areas and further applications",
    "subtopicId": "al.y2.pure.areas-applications",
    "questionDiagram": null,
    "id": "al.y2.pure.areas-applications.q070",
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "value",
    "tags": [
      "areas",
      "multi-part",
      "volume setup",
      "multi-step"
    ],
    "questionText": "(a) Show that the curves $y = x^{2}$ and $y = x + 2$ intersect at $x = -1$ and $x = 2$.\n(b) Find the exact area enclosed between the curves.\n(c) The same region is rotated about the $x$-axis. State the integral for the volume (do not evaluate).",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "(a) Set equal",
          "workingLatex": "x^{2} = x + 2 \\Rightarrow x^{2} - x - 2 = 0",
          "explanation": "Form a quadratic equation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Factorise",
          "workingLatex": "(x + 1)(x - 2) = 0",
          "explanation": "Factor the quadratic.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "(a) Intersections",
          "workingLatex": "x = -1 \\text{ and } x = 2",
          "explanation": "Confirmed intersection points.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "(b) Identify upper curve",
          "workingLatex": "y = x + 2 \\text{ is above } y = x^{2} \\text{ on } [-1, 2]",
          "explanation": "Line lies above the parabola.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "(b) Set up integral",
          "workingLatex": "A = \\int_{-1}^{2}((x + 2) - x^{2})\\,dx",
          "explanation": "Upper minus lower.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "(b) Integrate",
          "workingLatex": "\\dfrac{x^{2}}{2} + 2x - \\dfrac{x^{3}}{3}",
          "explanation": "Antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "(b) Evaluate",
          "workingLatex": "\\left(\\dfrac{4}{2} + 4 - \\dfrac{8}{3}\\right) - \\left(\\dfrac{1}{2} - 2 + \\dfrac{1}{3}\\right) = \\dfrac{9}{2}",
          "explanation": "Exact area.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "(c) Volume integral",
          "workingLatex": "V = \\pi\\int_{-1}^{2}\\left((x+2)^{2} - (x^{2})^{2}\\right)dx",
          "explanation": "Disc method: outer radius squared minus inner radius squared.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answers",
          "workingLatex": "(a) $x = -1, 2$; (b) $A = \\dfrac{9}{2}$; (c) $V = \\pi\\int_{-1}^{2}((x+2)^{2} - x^{4})\\,dx$",
          "explanation": "All three parts answered.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Sketch the region",
          "workingLatex": "\\text{Identify bounds and which curve is on top}",
          "explanation": "A quick sketch prevents sign errors and clarifies the limits.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Confirm the integrand is non-negative",
          "workingLatex": "f(x) \\geq 0 \\text{ on the interval}",
          "explanation": "If the curve dips below the axis, split the integral or take absolute values.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Include square units",
          "workingLatex": "\\text{Area has units}^2",
          "explanation": "Area is a scalar measure, not a length.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Check limits",
          "workingLatex": "a < b",
          "explanation": "The lower limit must be less than the upper limit.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) Intersections at $x = -1$ and $x = 2$. (b) Area $= \\dfrac{9}{2}$ square units. (c) $V = \\pi\\int_{-1}^{2}((x+2)^{2} - x^{4})\\,dx$."
    }
  }
];
