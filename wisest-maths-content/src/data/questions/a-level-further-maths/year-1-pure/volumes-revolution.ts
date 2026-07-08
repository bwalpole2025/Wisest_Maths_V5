import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Volumes of revolution",
    "subtopicId": "fm.y1.pure.volumes-revolution",
    "questionDiagram": null,
    "id": "fm.y1.pure.volumes-revolution.q001",
    "tags": [
      "volumes-revolution",
      "x-axis",
      "disc-method"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "questionText": "The region bounded by the curve $y = x^{2}$, the $x$-axis, and the lines $x = 0$ and $x = 2$ is rotated through $360^\\circ$ about the $x$-axis. Find the exact volume of the solid formed.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the volume formula",
          "workingLatex": "V = \\pi \\int_{0}^{2} y^{2}\\,dx",
          "explanation": "Rotating a region about the $x$-axis creates discs of radius $y$, so each cross-section has area $\\pi y^{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute the curve",
          "workingLatex": "V = \\pi \\int_{0}^{2} x^{4}\\,dx",
          "explanation": "Replace $y$ with $x^{2}$ and square the expression.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate",
          "workingLatex": "\\int x^{4}\\,dx = \\dfrac{x^{5}}{5}",
          "explanation": "Find the antiderivative with respect to $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write with limits",
          "workingLatex": "V = \\pi \\left[ \\dfrac{x^{5}}{5} \\right]_{0}^{2}",
          "explanation": "Evaluate the definite integral between the given bounds.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the upper limit",
          "workingLatex": "F(2)",
          "explanation": "Replace $x$ with the upper limit.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute the lower limit",
          "workingLatex": "F(0)",
          "explanation": "Replace $x$ with the lower limit.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Subtract",
          "workingLatex": "F(2) - F(0)",
          "explanation": "The definite integral is the antiderivative at the upper limit minus the value at the lower limit.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Multiply by $\\pi$",
          "workingLatex": "V = \\dfrac{32\\pi}{5}",
          "explanation": "Include the factor $\\pi$ from the disc formula.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Interpret",
          "workingLatex": "The solid is a body of revolution about the $x$-axis.",
          "explanation": "The result is a volume in cubic units.",
          "diagram": null
        }
      ],
      "finalAnswer": "Volume $= \\dfrac{32\\pi}{5}$ cubic units."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Volumes of revolution",
    "subtopicId": "fm.y1.pure.volumes-revolution",
    "questionDiagram": null,
    "id": "fm.y1.pure.volumes-revolution.q002",
    "tags": [
      "volumes-revolution",
      "x-axis",
      "disc-method"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "questionText": "The region bounded by the curve $y = x$, the $x$-axis, and the lines $x = 0$ and $x = 3$ is rotated through $360^\\circ$ about the $x$-axis. Find the exact volume of the solid formed.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the volume formula",
          "workingLatex": "V = \\pi \\int_{0}^{3} y^{2}\\,dx",
          "explanation": "Rotating a region about the $x$-axis creates discs of radius $y$, so each cross-section has area $\\pi y^{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute the curve",
          "workingLatex": "V = \\pi \\int_{0}^{3} x^{2}\\,dx",
          "explanation": "Replace $y$ with $x$ and square the expression.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate",
          "workingLatex": "\\int x^{2}\\,dx = \\dfrac{x^{3}}{3}",
          "explanation": "Find the antiderivative with respect to $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write with limits",
          "workingLatex": "V = \\pi \\left[ \\dfrac{x^{3}}{3} \\right]_{0}^{3}",
          "explanation": "Evaluate the definite integral between the given bounds.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the upper limit",
          "workingLatex": "F(3)",
          "explanation": "Replace $x$ with the upper limit.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute the lower limit",
          "workingLatex": "F(0)",
          "explanation": "Replace $x$ with the lower limit.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Subtract",
          "workingLatex": "F(3) - F(0)",
          "explanation": "The definite integral is the antiderivative at the upper limit minus the value at the lower limit.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Multiply by $\\pi$",
          "workingLatex": "V = 9\\pi",
          "explanation": "Include the factor $\\pi$ from the disc formula.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Interpret",
          "workingLatex": "The solid is a body of revolution about the $x$-axis.",
          "explanation": "The result is a volume in cubic units.",
          "diagram": null
        }
      ],
      "finalAnswer": "Volume $= 9\\pi$ cubic units."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Volumes of revolution",
    "subtopicId": "fm.y1.pure.volumes-revolution",
    "questionDiagram": null,
    "id": "fm.y1.pure.volumes-revolution.q003",
    "tags": [
      "volumes-revolution",
      "cylinder"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "questionText": "The region bounded by the curve $y = 2$, the $x$-axis, and the lines $x = 0$ and $x = 3$ is rotated through $360^\\circ$ about the $x$-axis. Find the exact volume of the solid formed.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the volume formula",
          "workingLatex": "V = \\pi \\int_{0}^{3} y^{2}\\,dx",
          "explanation": "Rotating a region about the $x$-axis creates discs of radius $y$, so each cross-section has area $\\pi y^{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute the curve",
          "workingLatex": "V = \\pi \\int_{0}^{3} 4\\,dx",
          "explanation": "Replace $y$ with $2$ and square the expression.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate",
          "workingLatex": "\\int 4\\,dx = 4x",
          "explanation": "Find the antiderivative with respect to $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write with limits",
          "workingLatex": "V = \\pi \\left[ 4x \\right]_{0}^{3}",
          "explanation": "Evaluate the definite integral between the given bounds.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the upper limit",
          "workingLatex": "F(3)",
          "explanation": "Replace $x$ with the upper limit.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute the lower limit",
          "workingLatex": "F(0)",
          "explanation": "Replace $x$ with the lower limit.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Subtract",
          "workingLatex": "F(3) - F(0)",
          "explanation": "The definite integral is the antiderivative at the upper limit minus the value at the lower limit.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Multiply by $\\pi$",
          "workingLatex": "V = 12\\pi",
          "explanation": "Include the factor $\\pi$ from the disc formula.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Interpret",
          "workingLatex": "The solid is a body of revolution about the $x$-axis.",
          "explanation": "The result is a volume in cubic units.",
          "diagram": null
        }
      ],
      "finalAnswer": "Volume $= 12\\pi$ cubic units."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Volumes of revolution",
    "subtopicId": "fm.y1.pure.volumes-revolution",
    "questionDiagram": null,
    "id": "fm.y1.pure.volumes-revolution.q004",
    "tags": [
      "volumes-revolution",
      "x-axis",
      "disc-method"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "questionText": "The region bounded by the curve $y = x^{2}$, the $x$-axis, and the lines $x = 0$ and $x = 1$ is rotated through $360^\\circ$ about the $x$-axis. Find the exact volume of the solid formed.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the volume formula",
          "workingLatex": "V = \\pi \\int_{0}^{1} y^{2}\\,dx",
          "explanation": "Rotating a region about the $x$-axis creates discs of radius $y$, so each cross-section has area $\\pi y^{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute the curve",
          "workingLatex": "V = \\pi \\int_{0}^{1} x^{4}\\,dx",
          "explanation": "Replace $y$ with $x^{2}$ and square the expression.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate",
          "workingLatex": "\\int x^{4}\\,dx = \\dfrac{x^{5}}{5}",
          "explanation": "Find the antiderivative with respect to $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write with limits",
          "workingLatex": "V = \\pi \\left[ \\dfrac{x^{5}}{5} \\right]_{0}^{1}",
          "explanation": "Evaluate the definite integral between the given bounds.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the upper limit",
          "workingLatex": "F(1)",
          "explanation": "Replace $x$ with the upper limit.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute the lower limit",
          "workingLatex": "F(0)",
          "explanation": "Replace $x$ with the lower limit.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Subtract",
          "workingLatex": "F(1) - F(0)",
          "explanation": "The definite integral is the antiderivative at the upper limit minus the value at the lower limit.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Multiply by $\\pi$",
          "workingLatex": "V = \\dfrac{\\pi}{5}",
          "explanation": "Include the factor $\\pi$ from the disc formula.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Interpret",
          "workingLatex": "The solid is a body of revolution about the $x$-axis.",
          "explanation": "The result is a volume in cubic units.",
          "diagram": null
        }
      ],
      "finalAnswer": "Volume $= \\dfrac{\\pi}{5}$ cubic units."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Volumes of revolution",
    "subtopicId": "fm.y1.pure.volumes-revolution",
    "questionDiagram": null,
    "id": "fm.y1.pure.volumes-revolution.q005",
    "tags": [
      "volumes-revolution",
      "x-axis",
      "disc-method"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "questionText": "The region bounded by the curve $y = 3x$, the $x$-axis, and the lines $x = 0$ and $x = 1$ is rotated through $360^\\circ$ about the $x$-axis. Find the exact volume of the solid formed.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the volume formula",
          "workingLatex": "V = \\pi \\int_{0}^{1} y^{2}\\,dx",
          "explanation": "Rotating a region about the $x$-axis creates discs of radius $y$, so each cross-section has area $\\pi y^{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute the curve",
          "workingLatex": "V = \\pi \\int_{0}^{1} 9x^{2}\\,dx",
          "explanation": "Replace $y$ with $3x$ and square the expression.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate",
          "workingLatex": "\\int 9x^{2}\\,dx = 3x^{3}",
          "explanation": "Find the antiderivative with respect to $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write with limits",
          "workingLatex": "V = \\pi \\left[ 3x^{3} \\right]_{0}^{1}",
          "explanation": "Evaluate the definite integral between the given bounds.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the upper limit",
          "workingLatex": "F(1)",
          "explanation": "Replace $x$ with the upper limit.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute the lower limit",
          "workingLatex": "F(0)",
          "explanation": "Replace $x$ with the lower limit.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Subtract",
          "workingLatex": "F(1) - F(0)",
          "explanation": "The definite integral is the antiderivative at the upper limit minus the value at the lower limit.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Multiply by $\\pi$",
          "workingLatex": "V = 3\\pi",
          "explanation": "Include the factor $\\pi$ from the disc formula.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Interpret",
          "workingLatex": "The solid is a body of revolution about the $x$-axis.",
          "explanation": "The result is a volume in cubic units.",
          "diagram": null
        }
      ],
      "finalAnswer": "Volume $= 3\\pi$ cubic units."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Volumes of revolution",
    "subtopicId": "fm.y1.pure.volumes-revolution",
    "questionDiagram": null,
    "id": "fm.y1.pure.volumes-revolution.q006",
    "tags": [
      "volumes-revolution",
      "x-axis",
      "disc-method"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "questionText": "The region bounded by the curve $y = x^{3}$, the $x$-axis, and the lines $x = 0$ and $x = 1$ is rotated through $360^\\circ$ about the $x$-axis. Find the exact volume of the solid formed.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the volume formula",
          "workingLatex": "V = \\pi \\int_{0}^{1} y^{2}\\,dx",
          "explanation": "Rotating a region about the $x$-axis creates discs of radius $y$, so each cross-section has area $\\pi y^{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute the curve",
          "workingLatex": "V = \\pi \\int_{0}^{1} x^{6}\\,dx",
          "explanation": "Replace $y$ with $x^{3}$ and square the expression.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate",
          "workingLatex": "\\int x^{6}\\,dx = \\dfrac{x^{7}}{7}",
          "explanation": "Find the antiderivative with respect to $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write with limits",
          "workingLatex": "V = \\pi \\left[ \\dfrac{x^{7}}{7} \\right]_{0}^{1}",
          "explanation": "Evaluate the definite integral between the given bounds.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the upper limit",
          "workingLatex": "F(1)",
          "explanation": "Replace $x$ with the upper limit.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute the lower limit",
          "workingLatex": "F(0)",
          "explanation": "Replace $x$ with the lower limit.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Subtract",
          "workingLatex": "F(1) - F(0)",
          "explanation": "The definite integral is the antiderivative at the upper limit minus the value at the lower limit.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Multiply by $\\pi$",
          "workingLatex": "V = \\dfrac{\\pi}{7}",
          "explanation": "Include the factor $\\pi$ from the disc formula.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Interpret",
          "workingLatex": "The solid is a body of revolution about the $x$-axis.",
          "explanation": "The result is a volume in cubic units.",
          "diagram": null
        }
      ],
      "finalAnswer": "Volume $= \\dfrac{\\pi}{7}$ cubic units."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Volumes of revolution",
    "subtopicId": "fm.y1.pure.volumes-revolution",
    "questionDiagram": null,
    "id": "fm.y1.pure.volumes-revolution.q007",
    "tags": [
      "volumes-revolution",
      "x-axis",
      "disc-method"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "questionText": "The region bounded by the curve $y = 4$, the $x$-axis, and the lines $x = 0$ and $x = 2$ is rotated through $360^\\circ$ about the $x$-axis. Find the exact volume of the solid formed.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the volume formula",
          "workingLatex": "V = \\pi \\int_{0}^{2} y^{2}\\,dx",
          "explanation": "Rotating a region about the $x$-axis creates discs of radius $y$, so each cross-section has area $\\pi y^{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute the curve",
          "workingLatex": "V = \\pi \\int_{0}^{2} 16\\,dx",
          "explanation": "Replace $y$ with $4$ and square the expression.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate",
          "workingLatex": "\\int 16\\,dx = 16x",
          "explanation": "Find the antiderivative with respect to $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write with limits",
          "workingLatex": "V = \\pi \\left[ 16x \\right]_{0}^{2}",
          "explanation": "Evaluate the definite integral between the given bounds.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the upper limit",
          "workingLatex": "F(2)",
          "explanation": "Replace $x$ with the upper limit.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute the lower limit",
          "workingLatex": "F(0)",
          "explanation": "Replace $x$ with the lower limit.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Subtract",
          "workingLatex": "F(2) - F(0)",
          "explanation": "The definite integral is the antiderivative at the upper limit minus the value at the lower limit.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Multiply by $\\pi$",
          "workingLatex": "V = 32\\pi",
          "explanation": "Include the factor $\\pi$ from the disc formula.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Interpret",
          "workingLatex": "The solid is a body of revolution about the $x$-axis.",
          "explanation": "The result is a volume in cubic units.",
          "diagram": null
        }
      ],
      "finalAnswer": "Volume $= 32\\pi$ cubic units."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Volumes of revolution",
    "subtopicId": "fm.y1.pure.volumes-revolution",
    "questionDiagram": null,
    "id": "fm.y1.pure.volumes-revolution.q008",
    "tags": [
      "volumes-revolution",
      "x-axis",
      "disc-method"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "questionText": "The region bounded by the curve $y = 2x$, the $x$-axis, and the lines $x = 0$ and $x = 1$ is rotated through $360^\\circ$ about the $x$-axis. Find the exact volume of the solid formed.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the volume formula",
          "workingLatex": "V = \\pi \\int_{0}^{1} y^{2}\\,dx",
          "explanation": "Rotating a region about the $x$-axis creates discs of radius $y$, so each cross-section has area $\\pi y^{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute the curve",
          "workingLatex": "V = \\pi \\int_{0}^{1} 4x^{2}\\,dx",
          "explanation": "Replace $y$ with $2x$ and square the expression.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate",
          "workingLatex": "\\int 4x^{2}\\,dx = \\dfrac{4x^{3}}{3}",
          "explanation": "Find the antiderivative with respect to $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write with limits",
          "workingLatex": "V = \\pi \\left[ \\dfrac{4x^{3}}{3} \\right]_{0}^{1}",
          "explanation": "Evaluate the definite integral between the given bounds.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the upper limit",
          "workingLatex": "F(1)",
          "explanation": "Replace $x$ with the upper limit.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute the lower limit",
          "workingLatex": "F(0)",
          "explanation": "Replace $x$ with the lower limit.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Subtract",
          "workingLatex": "F(1) - F(0)",
          "explanation": "The definite integral is the antiderivative at the upper limit minus the value at the lower limit.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Multiply by $\\pi$",
          "workingLatex": "V = \\dfrac{4\\pi}{3}",
          "explanation": "Include the factor $\\pi$ from the disc formula.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Interpret",
          "workingLatex": "The solid is a body of revolution about the $x$-axis.",
          "explanation": "The result is a volume in cubic units.",
          "diagram": null
        }
      ],
      "finalAnswer": "Volume $= \\dfrac{4\\pi}{3}$ cubic units."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Volumes of revolution",
    "subtopicId": "fm.y1.pure.volumes-revolution",
    "questionDiagram": null,
    "id": "fm.y1.pure.volumes-revolution.q009",
    "tags": [
      "volumes-revolution",
      "square-root"
    ],
    "difficulty": "Easy",
    "marks": 5,
    "answerType": "value",
    "questionText": "The region bounded by the curve $y = x^{1/2}$, the $x$-axis, and the lines $x = 0$ and $x = 4$ is rotated through $360^\\circ$ about the $x$-axis. Find the exact volume of the solid formed.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the volume formula",
          "workingLatex": "V = \\pi \\int_{0}^{4} y^{2}\\,dx",
          "explanation": "Rotating a region about the $x$-axis creates discs of radius $y$, so each cross-section has area $\\pi y^{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute the curve",
          "workingLatex": "V = \\pi \\int_{0}^{4} x\\,dx",
          "explanation": "Replace $y$ with $x^{1/2}$ and square the expression.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate",
          "workingLatex": "\\int x\\,dx = \\dfrac{x^{2}}{2}",
          "explanation": "Find the antiderivative with respect to $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write with limits",
          "workingLatex": "V = \\pi \\left[ \\dfrac{x^{2}}{2} \\right]_{0}^{4}",
          "explanation": "Evaluate the definite integral between the given bounds.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the upper limit",
          "workingLatex": "F(4)",
          "explanation": "Replace $x$ with the upper limit.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute the lower limit",
          "workingLatex": "F(0)",
          "explanation": "Replace $x$ with the lower limit.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Subtract",
          "workingLatex": "F(4) - F(0)",
          "explanation": "The definite integral is the antiderivative at the upper limit minus the value at the lower limit.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Multiply by $\\pi$",
          "workingLatex": "V = 8\\pi",
          "explanation": "Include the factor $\\pi$ from the disc formula.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Interpret",
          "workingLatex": "The solid is a body of revolution about the $x$-axis.",
          "explanation": "The result is a volume in cubic units.",
          "diagram": null
        }
      ],
      "finalAnswer": "Volume $= 8\\pi$ cubic units."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Volumes of revolution",
    "subtopicId": "fm.y1.pure.volumes-revolution",
    "questionDiagram": null,
    "id": "fm.y1.pure.volumes-revolution.q010",
    "tags": [
      "volumes-revolution",
      "x-axis",
      "disc-method"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "questionText": "The region bounded by the curve $y = 2x^{2}$, the $x$-axis, and the lines $x = 0$ and $x = 1$ is rotated through $360^\\circ$ about the $x$-axis. Find the exact volume of the solid formed.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the volume formula",
          "workingLatex": "V = \\pi \\int_{0}^{1} y^{2}\\,dx",
          "explanation": "Rotating a region about the $x$-axis creates discs of radius $y$, so each cross-section has area $\\pi y^{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute the curve",
          "workingLatex": "V = \\pi \\int_{0}^{1} 4x^{4}\\,dx",
          "explanation": "Replace $y$ with $2x^{2}$ and square the expression.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate",
          "workingLatex": "\\int 4x^{4}\\,dx = \\dfrac{4x^{5}}{5}",
          "explanation": "Find the antiderivative with respect to $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write with limits",
          "workingLatex": "V = \\pi \\left[ \\dfrac{4x^{5}}{5} \\right]_{0}^{1}",
          "explanation": "Evaluate the definite integral between the given bounds.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the upper limit",
          "workingLatex": "F(1)",
          "explanation": "Replace $x$ with the upper limit.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute the lower limit",
          "workingLatex": "F(0)",
          "explanation": "Replace $x$ with the lower limit.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Subtract",
          "workingLatex": "F(1) - F(0)",
          "explanation": "The definite integral is the antiderivative at the upper limit minus the value at the lower limit.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Multiply by $\\pi$",
          "workingLatex": "V = \\dfrac{4\\pi}{5}",
          "explanation": "Include the factor $\\pi$ from the disc formula.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Interpret",
          "workingLatex": "The solid is a body of revolution about the $x$-axis.",
          "explanation": "The result is a volume in cubic units.",
          "diagram": null
        }
      ],
      "finalAnswer": "Volume $= \\dfrac{4\\pi}{5}$ cubic units."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Volumes of revolution",
    "subtopicId": "fm.y1.pure.volumes-revolution",
    "questionDiagram": null,
    "id": "fm.y1.pure.volumes-revolution.q011",
    "tags": [
      "volumes-revolution",
      "x-axis",
      "disc-method"
    ],
    "difficulty": "Easy",
    "marks": 5,
    "answerType": "value",
    "questionText": "The region bounded by the curve $y = x + 1$, the $x$-axis, and the lines $x = 0$ and $x = 1$ is rotated through $360^\\circ$ about the $x$-axis. Find the exact volume of the solid formed.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the volume formula",
          "workingLatex": "V = \\pi \\int_{0}^{1} y^{2}\\,dx",
          "explanation": "Rotating a region about the $x$-axis creates discs of radius $y$, so each cross-section has area $\\pi y^{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute the curve",
          "workingLatex": "V = \\pi \\int_{0}^{1} x^{2} + 2x + 1\\,dx",
          "explanation": "Replace $y$ with $x + 1$ and square the expression.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate",
          "workingLatex": "\\int x^{2} + 2x + 1\\,dx = \\dfrac{x^{3}}{3} + x^{2} + x",
          "explanation": "Find the antiderivative with respect to $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write with limits",
          "workingLatex": "V = \\pi \\left[ \\dfrac{x^{3}}{3} + x^{2} + x \\right]_{0}^{1}",
          "explanation": "Evaluate the definite integral between the given bounds.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the upper limit",
          "workingLatex": "F(1)",
          "explanation": "Replace $x$ with the upper limit.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute the lower limit",
          "workingLatex": "F(0)",
          "explanation": "Replace $x$ with the lower limit.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Subtract",
          "workingLatex": "F(1) - F(0)",
          "explanation": "The definite integral is the antiderivative at the upper limit minus the value at the lower limit.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Multiply by $\\pi$",
          "workingLatex": "V = \\dfrac{7\\pi}{3}",
          "explanation": "Include the factor $\\pi$ from the disc formula.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Interpret",
          "workingLatex": "The solid is a body of revolution about the $x$-axis.",
          "explanation": "The result is a volume in cubic units.",
          "diagram": null
        }
      ],
      "finalAnswer": "Volume $= \\dfrac{7\\pi}{3}$ cubic units."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Volumes of revolution",
    "subtopicId": "fm.y1.pure.volumes-revolution",
    "questionDiagram": null,
    "id": "fm.y1.pure.volumes-revolution.q012",
    "tags": [
      "volumes-revolution",
      "x-axis",
      "disc-method"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "questionText": "The region bounded by the curve $y = 5$, the $x$-axis, and the lines $x = 0$ and $x = 2$ is rotated through $360^\\circ$ about the $x$-axis. Find the exact volume of the solid formed.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the volume formula",
          "workingLatex": "V = \\pi \\int_{0}^{2} y^{2}\\,dx",
          "explanation": "Rotating a region about the $x$-axis creates discs of radius $y$, so each cross-section has area $\\pi y^{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute the curve",
          "workingLatex": "V = \\pi \\int_{0}^{2} 25\\,dx",
          "explanation": "Replace $y$ with $5$ and square the expression.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate",
          "workingLatex": "\\int 25\\,dx = 25x",
          "explanation": "Find the antiderivative with respect to $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write with limits",
          "workingLatex": "V = \\pi \\left[ 25x \\right]_{0}^{2}",
          "explanation": "Evaluate the definite integral between the given bounds.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the upper limit",
          "workingLatex": "F(2)",
          "explanation": "Replace $x$ with the upper limit.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute the lower limit",
          "workingLatex": "F(0)",
          "explanation": "Replace $x$ with the lower limit.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Subtract",
          "workingLatex": "F(2) - F(0)",
          "explanation": "The definite integral is the antiderivative at the upper limit minus the value at the lower limit.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Multiply by $\\pi$",
          "workingLatex": "V = 20\\pi",
          "explanation": "Include the factor $\\pi$ from the disc formula.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Interpret",
          "workingLatex": "The solid is a body of revolution about the $x$-axis.",
          "explanation": "The result is a volume in cubic units.",
          "diagram": null
        }
      ],
      "finalAnswer": "Volume $= 20\\pi$ cubic units."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Volumes of revolution",
    "subtopicId": "fm.y1.pure.volumes-revolution",
    "questionDiagram": null,
    "id": "fm.y1.pure.volumes-revolution.q013",
    "tags": [
      "volumes-revolution",
      "x-axis",
      "disc-method"
    ],
    "difficulty": "Easy",
    "marks": 5,
    "answerType": "value",
    "questionText": "The region bounded by the curve $y = x^{2} + 1$, the $x$-axis, and the lines $x = 0$ and $x = 1$ is rotated through $360^\\circ$ about the $x$-axis. Find the exact volume of the solid formed.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the volume formula",
          "workingLatex": "V = \\pi \\int_{0}^{1} y^{2}\\,dx",
          "explanation": "Rotating a region about the $x$-axis creates discs of radius $y$, so each cross-section has area $\\pi y^{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute the curve",
          "workingLatex": "V = \\pi \\int_{0}^{1} x^{4} + 2x^{2} + 1\\,dx",
          "explanation": "Replace $y$ with $x^{2} + 1$ and square the expression.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate",
          "workingLatex": "\\int x^{4} + 2x^{2} + 1\\,dx = \\dfrac{x^{5}}{5} + \\dfrac{2x^{3}}{3} + x",
          "explanation": "Find the antiderivative with respect to $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write with limits",
          "workingLatex": "V = \\pi \\left[ \\dfrac{x^{5}}{5} + \\dfrac{2x^{3}}{3} + x \\right]_{0}^{1}",
          "explanation": "Evaluate the definite integral between the given bounds.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the upper limit",
          "workingLatex": "F(1)",
          "explanation": "Replace $x$ with the upper limit.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute the lower limit",
          "workingLatex": "F(0)",
          "explanation": "Replace $x$ with the lower limit.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Subtract",
          "workingLatex": "F(1) - F(0)",
          "explanation": "The definite integral is the antiderivative at the upper limit minus the value at the lower limit.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Multiply by $\\pi$",
          "workingLatex": "V = \\dfrac{8\\pi}{3}",
          "explanation": "Include the factor $\\pi$ from the disc formula.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Interpret",
          "workingLatex": "The solid is a body of revolution about the $x$-axis.",
          "explanation": "The result is a volume in cubic units.",
          "diagram": null
        }
      ],
      "finalAnswer": "Volume $= \\dfrac{8\\pi}{3}$ cubic units."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Volumes of revolution",
    "subtopicId": "fm.y1.pure.volumes-revolution",
    "questionDiagram": null,
    "id": "fm.y1.pure.volumes-revolution.q014",
    "tags": [
      "volumes-revolution",
      "x-axis",
      "disc-method"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "questionText": "The region bounded by the curve $y = 3x$, the $x$-axis, and the lines $x = 0$ and $x = 2$ is rotated through $360^\\circ$ about the $x$-axis. Find the exact volume of the solid formed.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the volume formula",
          "workingLatex": "V = \\pi \\int_{0}^{2} y^{2}\\,dx",
          "explanation": "Rotating a region about the $x$-axis creates discs of radius $y$, so each cross-section has area $\\pi y^{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute the curve",
          "workingLatex": "V = \\pi \\int_{0}^{2} 9x^{2}\\,dx",
          "explanation": "Replace $y$ with $3x$ and square the expression.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate",
          "workingLatex": "\\int 9x^{2}\\,dx = 3x^{3}",
          "explanation": "Find the antiderivative with respect to $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write with limits",
          "workingLatex": "V = \\pi \\left[ 3x^{3} \\right]_{0}^{2}",
          "explanation": "Evaluate the definite integral between the given bounds.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the upper limit",
          "workingLatex": "F(2)",
          "explanation": "Replace $x$ with the upper limit.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute the lower limit",
          "workingLatex": "F(0)",
          "explanation": "Replace $x$ with the lower limit.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Subtract",
          "workingLatex": "F(2) - F(0)",
          "explanation": "The definite integral is the antiderivative at the upper limit minus the value at the lower limit.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Multiply by $\\pi$",
          "workingLatex": "V = 24\\pi",
          "explanation": "Include the factor $\\pi$ from the disc formula.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Interpret",
          "workingLatex": "The solid is a body of revolution about the $x$-axis.",
          "explanation": "The result is a volume in cubic units.",
          "diagram": null
        }
      ],
      "finalAnswer": "Volume $= 24\\pi$ cubic units."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Volumes of revolution",
    "subtopicId": "fm.y1.pure.volumes-revolution",
    "questionDiagram": null,
    "id": "fm.y1.pure.volumes-revolution.q015",
    "tags": [
      "volumes-revolution",
      "x-axis",
      "disc-method"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "questionText": "The region bounded by the curve $y = x^{4}$, the $x$-axis, and the lines $x = 0$ and $x = 1$ is rotated through $360^\\circ$ about the $x$-axis. Find the exact volume of the solid formed.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the volume formula",
          "workingLatex": "V = \\pi \\int_{0}^{1} y^{2}\\,dx",
          "explanation": "Rotating a region about the $x$-axis creates discs of radius $y$, so each cross-section has area $\\pi y^{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute the curve",
          "workingLatex": "V = \\pi \\int_{0}^{1} x^{8}\\,dx",
          "explanation": "Replace $y$ with $x^{4}$ and square the expression.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate",
          "workingLatex": "\\int x^{8}\\,dx = \\dfrac{x^{9}}{9}",
          "explanation": "Find the antiderivative with respect to $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write with limits",
          "workingLatex": "V = \\pi \\left[ \\dfrac{x^{9}}{9} \\right]_{0}^{1}",
          "explanation": "Evaluate the definite integral between the given bounds.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the upper limit",
          "workingLatex": "F(1)",
          "explanation": "Replace $x$ with the upper limit.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute the lower limit",
          "workingLatex": "F(0)",
          "explanation": "Replace $x$ with the lower limit.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Subtract",
          "workingLatex": "F(1) - F(0)",
          "explanation": "The definite integral is the antiderivative at the upper limit minus the value at the lower limit.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Multiply by $\\pi$",
          "workingLatex": "V = \\dfrac{\\pi}{9}",
          "explanation": "Include the factor $\\pi$ from the disc formula.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Interpret",
          "workingLatex": "The solid is a body of revolution about the $x$-axis.",
          "explanation": "The result is a volume in cubic units.",
          "diagram": null
        }
      ],
      "finalAnswer": "Volume $= \\dfrac{\\pi}{9}$ cubic units."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Volumes of revolution",
    "subtopicId": "fm.y1.pure.volumes-revolution",
    "questionDiagram": null,
    "id": "fm.y1.pure.volumes-revolution.q016",
    "tags": [
      "volumes-revolution",
      "x-axis",
      "disc-method"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "questionText": "The region bounded by the curve $y = 4x$, the $x$-axis, and the lines $x = 0$ and $x = 1$ is rotated through $360^\\circ$ about the $x$-axis. Find the exact volume of the solid formed.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the volume formula",
          "workingLatex": "V = \\pi \\int_{0}^{1} y^{2}\\,dx",
          "explanation": "Rotating a region about the $x$-axis creates discs of radius $y$, so each cross-section has area $\\pi y^{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute the curve",
          "workingLatex": "V = \\pi \\int_{0}^{1} 16x^{2}\\,dx",
          "explanation": "Replace $y$ with $4x$ and square the expression.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate",
          "workingLatex": "\\int 16x^{2}\\,dx = \\dfrac{16x^{3}}{3}",
          "explanation": "Find the antiderivative with respect to $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write with limits",
          "workingLatex": "V = \\pi \\left[ \\dfrac{16x^{3}}{3} \\right]_{0}^{1}",
          "explanation": "Evaluate the definite integral between the given bounds.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the upper limit",
          "workingLatex": "F(1)",
          "explanation": "Replace $x$ with the upper limit.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute the lower limit",
          "workingLatex": "F(0)",
          "explanation": "Replace $x$ with the lower limit.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Subtract",
          "workingLatex": "F(1) - F(0)",
          "explanation": "The definite integral is the antiderivative at the upper limit minus the value at the lower limit.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Multiply by $\\pi$",
          "workingLatex": "V = \\dfrac{16\\pi}{3}",
          "explanation": "Include the factor $\\pi$ from the disc formula.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Interpret",
          "workingLatex": "The solid is a body of revolution about the $x$-axis.",
          "explanation": "The result is a volume in cubic units.",
          "diagram": null
        }
      ],
      "finalAnswer": "Volume $= \\dfrac{16\\pi}{3}$ cubic units."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Volumes of revolution",
    "subtopicId": "fm.y1.pure.volumes-revolution",
    "questionDiagram": null,
    "id": "fm.y1.pure.volumes-revolution.q017",
    "tags": [
      "volumes-revolution",
      "x-axis",
      "disc-method"
    ],
    "difficulty": "Easy",
    "marks": 5,
    "answerType": "value",
    "questionText": "The region bounded by the curve $y = 6 - x^{2}$, the $x$-axis, and the lines $x = 0$ and $x = 2$ is rotated through $360^\\circ$ about the $x$-axis. Find the exact volume of the solid formed.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the volume formula",
          "workingLatex": "V = \\pi \\int_{0}^{2} y^{2}\\,dx",
          "explanation": "Rotating a region about the $x$-axis creates discs of radius $y$, so each cross-section has area $\\pi y^{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute the curve",
          "workingLatex": "V = \\pi \\int_{0}^{2} 36 - 12x^{2} + x^{4}\\,dx",
          "explanation": "Replace $y$ with $6 - x^{2}$ and square the expression.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate",
          "workingLatex": "\\int 36 - 12x^{2} + x^{4}\\,dx = 36x - 4x^{3} + \\dfrac{x^{5}}{5}",
          "explanation": "Find the antiderivative with respect to $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write with limits",
          "workingLatex": "V = \\pi \\left[ 36x - 4x^{3} + \\dfrac{x^{5}}{5} \\right]_{0}^{2}",
          "explanation": "Evaluate the definite integral between the given bounds.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the upper limit",
          "workingLatex": "F(2)",
          "explanation": "Replace $x$ with the upper limit.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute the lower limit",
          "workingLatex": "F(0)",
          "explanation": "Replace $x$ with the lower limit.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Subtract",
          "workingLatex": "F(2) - F(0)",
          "explanation": "The definite integral is the antiderivative at the upper limit minus the value at the lower limit.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Multiply by $\\pi$",
          "workingLatex": "V = \\dfrac{232\\pi}{5}",
          "explanation": "Include the factor $\\pi$ from the disc formula.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Interpret",
          "workingLatex": "The solid is a body of revolution about the $x$-axis.",
          "explanation": "The result is a volume in cubic units.",
          "diagram": null
        }
      ],
      "finalAnswer": "Volume $= \\dfrac{232\\pi}{5}$ cubic units."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Volumes of revolution",
    "subtopicId": "fm.y1.pure.volumes-revolution",
    "questionDiagram": null,
    "id": "fm.y1.pure.volumes-revolution.q018",
    "tags": [
      "volumes-revolution",
      "x-axis",
      "disc-method"
    ],
    "difficulty": "Easy",
    "marks": 5,
    "answerType": "value",
    "questionText": "The region bounded by the curve $y = 2x + 1$, the $x$-axis, and the lines $x = 0$ and $x = 1$ is rotated through $360^\\circ$ about the $x$-axis. Find the exact volume of the solid formed.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the volume formula",
          "workingLatex": "V = \\pi \\int_{0}^{1} y^{2}\\,dx",
          "explanation": "Rotating a region about the $x$-axis creates discs of radius $y$, so each cross-section has area $\\pi y^{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute the curve",
          "workingLatex": "V = \\pi \\int_{0}^{1} 4x^{2} + 4x + 1\\,dx",
          "explanation": "Replace $y$ with $2x + 1$ and square the expression.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate",
          "workingLatex": "\\int 4x^{2} + 4x + 1\\,dx = \\dfrac{4x^{3}}{3} + 2x^{2} + x",
          "explanation": "Find the antiderivative with respect to $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write with limits",
          "workingLatex": "V = \\pi \\left[ \\dfrac{4x^{3}}{3} + 2x^{2} + x \\right]_{0}^{1}",
          "explanation": "Evaluate the definite integral between the given bounds.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the upper limit",
          "workingLatex": "F(1)",
          "explanation": "Replace $x$ with the upper limit.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute the lower limit",
          "workingLatex": "F(0)",
          "explanation": "Replace $x$ with the lower limit.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Subtract",
          "workingLatex": "F(1) - F(0)",
          "explanation": "The definite integral is the antiderivative at the upper limit minus the value at the lower limit.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Multiply by $\\pi$",
          "workingLatex": "V = \\dfrac{13\\pi}{3}",
          "explanation": "Include the factor $\\pi$ from the disc formula.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Interpret",
          "workingLatex": "The solid is a body of revolution about the $x$-axis.",
          "explanation": "The result is a volume in cubic units.",
          "diagram": null
        }
      ],
      "finalAnswer": "Volume $= \\dfrac{13\\pi}{3}$ cubic units."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Volumes of revolution",
    "subtopicId": "fm.y1.pure.volumes-revolution",
    "questionDiagram": null,
    "id": "fm.y1.pure.volumes-revolution.q019",
    "tags": [
      "volumes-revolution",
      "x-axis",
      "disc-method"
    ],
    "difficulty": "Easy",
    "marks": 5,
    "answerType": "value",
    "questionText": "The region bounded by the curve $y = x^{2} + 2$, the $x$-axis, and the lines $x = 0$ and $x = 1$ is rotated through $360^\\circ$ about the $x$-axis. Find the exact volume of the solid formed.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the volume formula",
          "workingLatex": "V = \\pi \\int_{0}^{1} y^{2}\\,dx",
          "explanation": "Rotating a region about the $x$-axis creates discs of radius $y$, so each cross-section has area $\\pi y^{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute the curve",
          "workingLatex": "V = \\pi \\int_{0}^{1} x^{4} + 4x^{2} + 4\\,dx",
          "explanation": "Replace $y$ with $x^{2} + 2$ and square the expression.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate",
          "workingLatex": "\\int x^{4} + 4x^{2} + 4\\,dx = \\dfrac{x^{5}}{5} + \\dfrac{4x^{3}}{3} + 4x",
          "explanation": "Find the antiderivative with respect to $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write with limits",
          "workingLatex": "V = \\pi \\left[ \\dfrac{x^{5}}{5} + \\dfrac{4x^{3}}{3} + 4x \\right]_{0}^{1}",
          "explanation": "Evaluate the definite integral between the given bounds.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the upper limit",
          "workingLatex": "F(1)",
          "explanation": "Replace $x$ with the upper limit.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute the lower limit",
          "workingLatex": "F(0)",
          "explanation": "Replace $x$ with the lower limit.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Subtract",
          "workingLatex": "F(1) - F(0)",
          "explanation": "The definite integral is the antiderivative at the upper limit minus the value at the lower limit.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Multiply by $\\pi$",
          "workingLatex": "V = \\dfrac{83\\pi}{15}",
          "explanation": "Include the factor $\\pi$ from the disc formula.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Interpret",
          "workingLatex": "The solid is a body of revolution about the $x$-axis.",
          "explanation": "The result is a volume in cubic units.",
          "diagram": null
        }
      ],
      "finalAnswer": "Volume $= \\dfrac{83\\pi}{15}$ cubic units."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Volumes of revolution",
    "subtopicId": "fm.y1.pure.volumes-revolution",
    "questionDiagram": null,
    "id": "fm.y1.pure.volumes-revolution.q020",
    "tags": [
      "volumes-revolution",
      "x-axis",
      "disc-method"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "questionText": "The region bounded by the curve $y = 3$, the $x$-axis, and the lines $x = 0$ and $x = 4$ is rotated through $360^\\circ$ about the $x$-axis. Find the exact volume of the solid formed.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the volume formula",
          "workingLatex": "V = \\pi \\int_{0}^{4} y^{2}\\,dx",
          "explanation": "Rotating a region about the $x$-axis creates discs of radius $y$, so each cross-section has area $\\pi y^{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute the curve",
          "workingLatex": "V = \\pi \\int_{0}^{4} 9\\,dx",
          "explanation": "Replace $y$ with $3$ and square the expression.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate",
          "workingLatex": "\\int 9\\,dx = 9x",
          "explanation": "Find the antiderivative with respect to $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write with limits",
          "workingLatex": "V = \\pi \\left[ 9x \\right]_{0}^{4}",
          "explanation": "Evaluate the definite integral between the given bounds.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the upper limit",
          "workingLatex": "F(4)",
          "explanation": "Replace $x$ with the upper limit.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute the lower limit",
          "workingLatex": "F(0)",
          "explanation": "Replace $x$ with the lower limit.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Subtract",
          "workingLatex": "F(4) - F(0)",
          "explanation": "The definite integral is the antiderivative at the upper limit minus the value at the lower limit.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Multiply by $\\pi$",
          "workingLatex": "V = 36\\pi",
          "explanation": "Include the factor $\\pi$ from the disc formula.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Interpret",
          "workingLatex": "The solid is a body of revolution about the $x$-axis.",
          "explanation": "The result is a volume in cubic units.",
          "diagram": null
        }
      ],
      "finalAnswer": "Volume $= 36\\pi$ cubic units."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Volumes of revolution",
    "subtopicId": "fm.y1.pure.volumes-revolution",
    "questionDiagram": null,
    "id": "fm.y1.pure.volumes-revolution.q021",
    "tags": [
      "volumes-revolution",
      "y-axis",
      "disc-method"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "questionText": "The region bounded by the curve $x = y$, the $y$-axis, and the lines $y = 0$ and $y = 3$ is rotated through $360^\\circ$ about the $y$-axis. Find the exact volume of the solid formed.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the volume formula",
          "workingLatex": "V = \\pi \\int_{0}^{3} x^{2}\\,dy",
          "explanation": "When rotating about the $y$-axis, discs are perpendicular to the $y$-axis with radius $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Express $x$ in terms of $y$",
          "workingLatex": "x = y",
          "explanation": "The curve must be written with $x$ as a function of $y$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute into the integral",
          "workingLatex": "V = \\pi \\int_{0}^{3} y^{2}\\,dy",
          "explanation": "Square the expression for $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate",
          "workingLatex": "\\int y^{2}\\,dy = \\dfrac{y^{3}}{3}",
          "explanation": "Find the antiderivative with respect to $y$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply limits",
          "workingLatex": "V = \\pi \\left[ \\dfrac{y^{3}}{3} \\right]_{0}^{3}",
          "explanation": "Evaluate between $y = ${y0}$ and $y = ${y1}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute limits",
          "workingLatex": "F(3) - F(0)",
          "explanation": "Upper value minus lower value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Multiply by $\\pi$",
          "workingLatex": "V = 9\\pi",
          "explanation": "Include the factor $\\pi$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret",
          "workingLatex": "The solid is a body of revolution about the $y$-axis.",
          "explanation": "The result is a volume in cubic units.",
          "diagram": null
        }
      ],
      "finalAnswer": "Volume $= 9\\pi$ cubic units."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Volumes of revolution",
    "subtopicId": "fm.y1.pure.volumes-revolution",
    "questionDiagram": null,
    "id": "fm.y1.pure.volumes-revolution.q022",
    "tags": [
      "volumes-revolution",
      "y-axis",
      "disc-method"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "questionText": "The region bounded by the curve $x = y^{2}$, the $y$-axis, and the lines $y = 0$ and $y = 1$ is rotated through $360^\\circ$ about the $y$-axis. Find the exact volume of the solid formed.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the volume formula",
          "workingLatex": "V = \\pi \\int_{0}^{1} x^{2}\\,dy",
          "explanation": "When rotating about the $y$-axis, discs are perpendicular to the $y$-axis with radius $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Express $x$ in terms of $y$",
          "workingLatex": "x = y^{2}",
          "explanation": "The curve must be written with $x$ as a function of $y$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute into the integral",
          "workingLatex": "V = \\pi \\int_{0}^{1} y^{4}\\,dy",
          "explanation": "Square the expression for $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate",
          "workingLatex": "\\int y^{4}\\,dy = \\dfrac{y^{5}}{5}",
          "explanation": "Find the antiderivative with respect to $y$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply limits",
          "workingLatex": "V = \\pi \\left[ \\dfrac{y^{5}}{5} \\right]_{0}^{1}",
          "explanation": "Evaluate between $y = ${y0}$ and $y = ${y1}$.",
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
          "description": "Multiply by $\\pi$",
          "workingLatex": "V = \\dfrac{\\pi}{5}",
          "explanation": "Include the factor $\\pi$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret",
          "workingLatex": "The solid is a body of revolution about the $y$-axis.",
          "explanation": "The result is a volume in cubic units.",
          "diagram": null
        }
      ],
      "finalAnswer": "Volume $= \\dfrac{\\pi}{5}$ cubic units."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Volumes of revolution",
    "subtopicId": "fm.y1.pure.volumes-revolution",
    "questionDiagram": null,
    "id": "fm.y1.pure.volumes-revolution.q023",
    "tags": [
      "volumes-revolution",
      "cylinder"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "questionText": "The region bounded by the curve $x = 2$, the $y$-axis, and the lines $y = 0$ and $y = 3$ is rotated through $360^\\circ$ about the $y$-axis. Find the exact volume of the solid formed.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the volume formula",
          "workingLatex": "V = \\pi \\int_{0}^{3} x^{2}\\,dy",
          "explanation": "When rotating about the $y$-axis, discs are perpendicular to the $y$-axis with radius $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Express $x$ in terms of $y$",
          "workingLatex": "x = 2",
          "explanation": "The curve must be written with $x$ as a function of $y$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute into the integral",
          "workingLatex": "V = \\pi \\int_{0}^{3} 4\\,dy",
          "explanation": "Square the expression for $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate",
          "workingLatex": "\\int 4\\,dy = 4y",
          "explanation": "Find the antiderivative with respect to $y$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply limits",
          "workingLatex": "V = \\pi \\left[ 4y \\right]_{0}^{3}",
          "explanation": "Evaluate between $y = ${y0}$ and $y = ${y1}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute limits",
          "workingLatex": "F(3) - F(0)",
          "explanation": "Upper value minus lower value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Multiply by $\\pi$",
          "workingLatex": "V = 12\\pi",
          "explanation": "Include the factor $\\pi$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret",
          "workingLatex": "The solid is a body of revolution about the $y$-axis.",
          "explanation": "The result is a volume in cubic units.",
          "diagram": null
        }
      ],
      "finalAnswer": "Volume $= 12\\pi$ cubic units."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Volumes of revolution",
    "subtopicId": "fm.y1.pure.volumes-revolution",
    "questionDiagram": null,
    "id": "fm.y1.pure.volumes-revolution.q024",
    "tags": [
      "volumes-revolution",
      "y-axis",
      "disc-method"
    ],
    "difficulty": "Easy",
    "marks": 5,
    "answerType": "value",
    "questionText": "The region bounded by the curve $x = y^{1/2}$, the $y$-axis, and the lines $y = 0$ and $y = 4$ is rotated through $360^\\circ$ about the $y$-axis. Find the exact volume of the solid formed.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the volume formula",
          "workingLatex": "V = \\pi \\int_{0}^{4} x^{2}\\,dy",
          "explanation": "When rotating about the $y$-axis, discs are perpendicular to the $y$-axis with radius $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Express $x$ in terms of $y$",
          "workingLatex": "x = y^{1/2}",
          "explanation": "The curve must be written with $x$ as a function of $y$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute into the integral",
          "workingLatex": "V = \\pi \\int_{0}^{4} y\\,dy",
          "explanation": "Square the expression for $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate",
          "workingLatex": "\\int y\\,dy = \\dfrac{y^{2}}{2}",
          "explanation": "Find the antiderivative with respect to $y$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply limits",
          "workingLatex": "V = \\pi \\left[ \\dfrac{y^{2}}{2} \\right]_{0}^{4}",
          "explanation": "Evaluate between $y = ${y0}$ and $y = ${y1}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute limits",
          "workingLatex": "F(4) - F(0)",
          "explanation": "Upper value minus lower value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Multiply by $\\pi$",
          "workingLatex": "V = 8\\pi",
          "explanation": "Include the factor $\\pi$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret",
          "workingLatex": "The solid is a body of revolution about the $y$-axis.",
          "explanation": "The result is a volume in cubic units.",
          "diagram": null
        }
      ],
      "finalAnswer": "Volume $= 8\\pi$ cubic units."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Volumes of revolution",
    "subtopicId": "fm.y1.pure.volumes-revolution",
    "questionDiagram": null,
    "id": "fm.y1.pure.volumes-revolution.q025",
    "tags": [
      "volumes-revolution",
      "y-axis",
      "disc-method"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "questionText": "The region bounded by the curve $x = 3y$, the $y$-axis, and the lines $y = 0$ and $y = 1$ is rotated through $360^\\circ$ about the $y$-axis. Find the exact volume of the solid formed.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the volume formula",
          "workingLatex": "V = \\pi \\int_{0}^{1} x^{2}\\,dy",
          "explanation": "When rotating about the $y$-axis, discs are perpendicular to the $y$-axis with radius $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Express $x$ in terms of $y$",
          "workingLatex": "x = 3y",
          "explanation": "The curve must be written with $x$ as a function of $y$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute into the integral",
          "workingLatex": "V = \\pi \\int_{0}^{1} 9y^{2}\\,dy",
          "explanation": "Square the expression for $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate",
          "workingLatex": "\\int 9y^{2}\\,dy = 3y^{3}",
          "explanation": "Find the antiderivative with respect to $y$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply limits",
          "workingLatex": "V = \\pi \\left[ 3y^{3} \\right]_{0}^{1}",
          "explanation": "Evaluate between $y = ${y0}$ and $y = ${y1}$.",
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
          "description": "Multiply by $\\pi$",
          "workingLatex": "V = 3\\pi",
          "explanation": "Include the factor $\\pi$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret",
          "workingLatex": "The solid is a body of revolution about the $y$-axis.",
          "explanation": "The result is a volume in cubic units.",
          "diagram": null
        }
      ],
      "finalAnswer": "Volume $= 3\\pi$ cubic units."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Volumes of revolution",
    "subtopicId": "fm.y1.pure.volumes-revolution",
    "questionDiagram": null,
    "id": "fm.y1.pure.volumes-revolution.q026",
    "tags": [
      "volumes-revolution",
      "between-curves",
      "x-axis"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "questionText": "The finite region bounded by the curves $y = x$ and $y = x^{2}$ for $0 \\leq x \\leq 1$ is rotated through $360^\\circ$ about the $x$-axis. Find the exact volume of the solid formed.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify outer and inner radii",
          "workingLatex": "\\text{On } [0, 1]:\\; y_{\\text{outer}} = x,\\; y_{\\text{inner}} = x^{2}",
          "explanation": "The outer curve is farther from the axis of rotation and gives the larger radius.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up the washer integral",
          "workingLatex": "V = \\pi \\int_{0}^{1} \\left((x)^{2} - (x^{2})^{2}\\right) dx",
          "explanation": "Subtract the inner disc area from the outer disc area at each $x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify the integrand",
          "workingLatex": "V = \\pi \\int_{0}^{1} x^{2} - x^{4}\\,dx",
          "explanation": "Expand and collect like terms before integrating.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate",
          "workingLatex": "\\int x^{2} - x^{4}\\,dx = \\dfrac{x^{3}}{3} - \\dfrac{x^{5}}{5}",
          "explanation": "Find the antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply limits",
          "workingLatex": "\\pi \\left[ \\dfrac{x^{3}}{3} - \\dfrac{x^{5}}{5} \\right]_{0}^{1}",
          "explanation": "Evaluate the definite integral.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute limits",
          "workingLatex": "F(1) - F(0)",
          "explanation": "Upper limit minus lower limit.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Multiply by $\\pi$",
          "workingLatex": "V = \\dfrac{2\\pi}{15}",
          "explanation": "Include the factor $\\pi$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check sign",
          "workingLatex": "V > 0",
          "explanation": "Volume must be positive; outer radius squared minus inner radius squared ensures this.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State answer",
          "workingLatex": "V = \\dfrac{2\\pi}{15}",
          "explanation": "The solid is a hollowed washer formed between two curves.",
          "diagram": null
        }
      ],
      "finalAnswer": "Volume $= \\dfrac{2\\pi}{15}$ cubic units."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Volumes of revolution",
    "subtopicId": "fm.y1.pure.volumes-revolution",
    "questionDiagram": null,
    "id": "fm.y1.pure.volumes-revolution.q027",
    "tags": [
      "volumes-revolution",
      "between-curves",
      "x-axis"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "questionText": "The finite region bounded by the curves $y = 2x$ and $y = x^{2}$ for $0 \\leq x \\leq 2$ is rotated through $360^\\circ$ about the $x$-axis. Find the exact volume of the solid formed.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify outer and inner radii",
          "workingLatex": "\\text{On } [0, 2]:\\; y_{\\text{outer}} = 2x,\\; y_{\\text{inner}} = x^{2}",
          "explanation": "The outer curve is farther from the axis of rotation and gives the larger radius.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up the washer integral",
          "workingLatex": "V = \\pi \\int_{0}^{2} \\left((2x)^{2} - (x^{2})^{2}\\right) dx",
          "explanation": "Subtract the inner disc area from the outer disc area at each $x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify the integrand",
          "workingLatex": "V = \\pi \\int_{0}^{2} 4x^{2} - x^{4}\\,dx",
          "explanation": "Expand and collect like terms before integrating.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate",
          "workingLatex": "\\int 4x^{2} - x^{4}\\,dx = \\dfrac{4x^{3}}{3} - \\dfrac{x^{5}}{5}",
          "explanation": "Find the antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply limits",
          "workingLatex": "\\pi \\left[ \\dfrac{4x^{3}}{3} - \\dfrac{x^{5}}{5} \\right]_{0}^{2}",
          "explanation": "Evaluate the definite integral.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute limits",
          "workingLatex": "F(2) - F(0)",
          "explanation": "Upper limit minus lower limit.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Multiply by $\\pi$",
          "workingLatex": "V = \\dfrac{64\\pi}{15}",
          "explanation": "Include the factor $\\pi$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check sign",
          "workingLatex": "V > 0",
          "explanation": "Volume must be positive; outer radius squared minus inner radius squared ensures this.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State answer",
          "workingLatex": "V = \\dfrac{64\\pi}{15}",
          "explanation": "The solid is a hollowed washer formed between two curves.",
          "diagram": null
        }
      ],
      "finalAnswer": "Volume $= \\dfrac{64\\pi}{15}$ cubic units."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Volumes of revolution",
    "subtopicId": "fm.y1.pure.volumes-revolution",
    "questionDiagram": null,
    "id": "fm.y1.pure.volumes-revolution.q028",
    "tags": [
      "volumes-revolution",
      "between-curves",
      "x-axis"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "questionText": "The finite region bounded by the curves $y = 4$ and $y = x^{2}$ for $0 \\leq x \\leq 2$ is rotated through $360^\\circ$ about the $x$-axis. Find the exact volume of the solid formed.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify outer and inner radii",
          "workingLatex": "\\text{On } [0, 2]:\\; y_{\\text{outer}} = 4,\\; y_{\\text{inner}} = x^{2}",
          "explanation": "The outer curve is farther from the axis of rotation and gives the larger radius.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up the washer integral",
          "workingLatex": "V = \\pi \\int_{0}^{2} \\left((4)^{2} - (x^{2})^{2}\\right) dx",
          "explanation": "Subtract the inner disc area from the outer disc area at each $x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify the integrand",
          "workingLatex": "V = \\pi \\int_{0}^{2} 16 - x^{4}\\,dx",
          "explanation": "Expand and collect like terms before integrating.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate",
          "workingLatex": "\\int 16 - x^{4}\\,dx = 16x - \\dfrac{x^{5}}{5}",
          "explanation": "Find the antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply limits",
          "workingLatex": "\\pi \\left[ 16x - \\dfrac{x^{5}}{5} \\right]_{0}^{2}",
          "explanation": "Evaluate the definite integral.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute limits",
          "workingLatex": "F(2) - F(0)",
          "explanation": "Upper limit minus lower limit.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Multiply by $\\pi$",
          "workingLatex": "V = \\dfrac{128\\pi}{5}",
          "explanation": "Include the factor $\\pi$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check sign",
          "workingLatex": "V > 0",
          "explanation": "Volume must be positive; outer radius squared minus inner radius squared ensures this.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State answer",
          "workingLatex": "V = \\dfrac{128\\pi}{5}",
          "explanation": "The solid is a hollowed washer formed between two curves.",
          "diagram": null
        }
      ],
      "finalAnswer": "Volume $= \\dfrac{128\\pi}{5}$ cubic units."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Volumes of revolution",
    "subtopicId": "fm.y1.pure.volumes-revolution",
    "questionDiagram": null,
    "id": "fm.y1.pure.volumes-revolution.q029",
    "tags": [
      "volumes-revolution",
      "between-curves",
      "x-axis"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "questionText": "The finite region bounded by the curves $y = 8 - x^{2}$ and $y = x^{2}$ for $0 \\leq x \\leq 2$ is rotated through $360^\\circ$ about the $x$-axis. Find the exact volume of the solid formed.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify outer and inner radii",
          "workingLatex": "\\text{On } [0, 2]:\\; y_{\\text{outer}} = 8 - x^{2},\\; y_{\\text{inner}} = x^{2}",
          "explanation": "The outer curve is farther from the axis of rotation and gives the larger radius.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up the washer integral",
          "workingLatex": "V = \\pi \\int_{0}^{2} \\left((8 - x^{2})^{2} - (x^{2})^{2}\\right) dx",
          "explanation": "Subtract the inner disc area from the outer disc area at each $x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify the integrand",
          "workingLatex": "V = \\pi \\int_{0}^{2} 64 - 16x^{2}\\,dx",
          "explanation": "Expand and collect like terms before integrating.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate",
          "workingLatex": "\\int 64 - 16x^{2}\\,dx = 64x - \\dfrac{16x^{3}}{3}",
          "explanation": "Find the antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply limits",
          "workingLatex": "\\pi \\left[ 64x - \\dfrac{16x^{3}}{3} \\right]_{0}^{2}",
          "explanation": "Evaluate the definite integral.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute limits",
          "workingLatex": "F(2) - F(0)",
          "explanation": "Upper limit minus lower limit.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Multiply by $\\pi$",
          "workingLatex": "V = \\dfrac{256\\pi}{3}",
          "explanation": "Include the factor $\\pi$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check sign",
          "workingLatex": "V > 0",
          "explanation": "Volume must be positive; outer radius squared minus inner radius squared ensures this.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State answer",
          "workingLatex": "V = \\dfrac{256\\pi}{3}",
          "explanation": "The solid is a hollowed washer formed between two curves.",
          "diagram": null
        }
      ],
      "finalAnswer": "Volume $= \\dfrac{256\\pi}{3}$ cubic units."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Volumes of revolution",
    "subtopicId": "fm.y1.pure.volumes-revolution",
    "questionDiagram": null,
    "id": "fm.y1.pure.volumes-revolution.q030",
    "tags": [
      "volumes-revolution",
      "between-curves",
      "x-axis"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "questionText": "The finite region bounded by the curves $y = 2$ and $y = x$ for $0 \\leq x \\leq 2$ is rotated through $360^\\circ$ about the $x$-axis. Find the exact volume of the solid formed.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify outer and inner radii",
          "workingLatex": "\\text{On } [0, 2]:\\; y_{\\text{outer}} = 2,\\; y_{\\text{inner}} = x",
          "explanation": "The outer curve is farther from the axis of rotation and gives the larger radius.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up the washer integral",
          "workingLatex": "V = \\pi \\int_{0}^{2} \\left((2)^{2} - (x)^{2}\\right) dx",
          "explanation": "Subtract the inner disc area from the outer disc area at each $x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify the integrand",
          "workingLatex": "V = \\pi \\int_{0}^{2} 4 - x^{2}\\,dx",
          "explanation": "Expand and collect like terms before integrating.",
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
          "workingLatex": "\\pi \\left[ 4x - \\dfrac{x^{3}}{3} \\right]_{0}^{2}",
          "explanation": "Evaluate the definite integral.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute limits",
          "workingLatex": "F(2) - F(0)",
          "explanation": "Upper limit minus lower limit.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Multiply by $\\pi$",
          "workingLatex": "V = \\dfrac{16\\pi}{3}",
          "explanation": "Include the factor $\\pi$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check sign",
          "workingLatex": "V > 0",
          "explanation": "Volume must be positive; outer radius squared minus inner radius squared ensures this.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State answer",
          "workingLatex": "V = \\dfrac{16\\pi}{3}",
          "explanation": "The solid is a hollowed washer formed between two curves.",
          "diagram": null
        }
      ],
      "finalAnswer": "Volume $= \\dfrac{16\\pi}{3}$ cubic units."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Volumes of revolution",
    "subtopicId": "fm.y1.pure.volumes-revolution",
    "questionDiagram": null,
    "id": "fm.y1.pure.volumes-revolution.q031",
    "tags": [
      "volumes-revolution",
      "between-curves",
      "x-axis"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "questionText": "The finite region bounded by the curves $y = 9$ and $y = x^{2}$ for $0 \\leq x \\leq 3$ is rotated through $360^\\circ$ about the $x$-axis. Find the exact volume of the solid formed.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify outer and inner radii",
          "workingLatex": "\\text{On } [0, 3]:\\; y_{\\text{outer}} = 9,\\; y_{\\text{inner}} = x^{2}",
          "explanation": "The outer curve is farther from the axis of rotation and gives the larger radius.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up the washer integral",
          "workingLatex": "V = \\pi \\int_{0}^{3} \\left((9)^{2} - (x^{2})^{2}\\right) dx",
          "explanation": "Subtract the inner disc area from the outer disc area at each $x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify the integrand",
          "workingLatex": "V = \\pi \\int_{0}^{3} 81 - x^{4}\\,dx",
          "explanation": "Expand and collect like terms before integrating.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate",
          "workingLatex": "\\int 81 - x^{4}\\,dx = 81x - \\dfrac{x^{5}}{5}",
          "explanation": "Find the antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply limits",
          "workingLatex": "\\pi \\left[ 81x - \\dfrac{x^{5}}{5} \\right]_{0}^{3}",
          "explanation": "Evaluate the definite integral.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute limits",
          "workingLatex": "F(3) - F(0)",
          "explanation": "Upper limit minus lower limit.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Multiply by $\\pi$",
          "workingLatex": "V = \\dfrac{972\\pi}{5}",
          "explanation": "Include the factor $\\pi$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check sign",
          "workingLatex": "V > 0",
          "explanation": "Volume must be positive; outer radius squared minus inner radius squared ensures this.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State answer",
          "workingLatex": "V = \\dfrac{972\\pi}{5}",
          "explanation": "The solid is a hollowed washer formed between two curves.",
          "diagram": null
        }
      ],
      "finalAnswer": "Volume $= \\dfrac{972\\pi}{5}$ cubic units."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Volumes of revolution",
    "subtopicId": "fm.y1.pure.volumes-revolution",
    "questionDiagram": null,
    "id": "fm.y1.pure.volumes-revolution.q032",
    "tags": [
      "volumes-revolution",
      "between-curves",
      "x-axis"
    ],
    "difficulty": "Intermediate",
    "marks": 7,
    "answerType": "value",
    "questionText": "The finite region bounded by the curves $y = 4x$ and $y = x^{2}$ for $0 \\leq x \\leq 4$ is rotated through $360^\\circ$ about the $x$-axis. Find the exact volume of the solid formed.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify outer and inner radii",
          "workingLatex": "\\text{On } [0, 4]:\\; y_{\\text{outer}} = 4x,\\; y_{\\text{inner}} = x^{2}",
          "explanation": "The outer curve is farther from the axis of rotation and gives the larger radius.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up the washer integral",
          "workingLatex": "V = \\pi \\int_{0}^{4} \\left((4x)^{2} - (x^{2})^{2}\\right) dx",
          "explanation": "Subtract the inner disc area from the outer disc area at each $x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify the integrand",
          "workingLatex": "V = \\pi \\int_{0}^{4} 16x^{2} - x^{4}\\,dx",
          "explanation": "Expand and collect like terms before integrating.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate",
          "workingLatex": "\\int 16x^{2} - x^{4}\\,dx = \\dfrac{16x^{3}}{3} - \\dfrac{x^{5}}{5}",
          "explanation": "Find the antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply limits",
          "workingLatex": "\\pi \\left[ \\dfrac{16x^{3}}{3} - \\dfrac{x^{5}}{5} \\right]_{0}^{4}",
          "explanation": "Evaluate the definite integral.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute limits",
          "workingLatex": "F(4) - F(0)",
          "explanation": "Upper limit minus lower limit.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Multiply by $\\pi$",
          "workingLatex": "V = \\dfrac{2048\\pi}{15}",
          "explanation": "Include the factor $\\pi$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check sign",
          "workingLatex": "V > 0",
          "explanation": "Volume must be positive; outer radius squared minus inner radius squared ensures this.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State answer",
          "workingLatex": "V = \\dfrac{2048\\pi}{15}",
          "explanation": "The solid is a hollowed washer formed between two curves.",
          "diagram": null
        }
      ],
      "finalAnswer": "Volume $= \\dfrac{2048\\pi}{15}$ cubic units."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Volumes of revolution",
    "subtopicId": "fm.y1.pure.volumes-revolution",
    "questionDiagram": null,
    "id": "fm.y1.pure.volumes-revolution.q033",
    "tags": [
      "volumes-revolution",
      "between-curves",
      "x-axis"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "questionText": "The finite region bounded by the curves $y = 2x^{2}$ and $y = x^{2}$ for $0 \\leq x \\leq 1$ is rotated through $360^\\circ$ about the $x$-axis. Find the exact volume of the solid formed.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify outer and inner radii",
          "workingLatex": "\\text{On } [0, 1]:\\; y_{\\text{outer}} = 2x^{2},\\; y_{\\text{inner}} = x^{2}",
          "explanation": "The outer curve is farther from the axis of rotation and gives the larger radius.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up the washer integral",
          "workingLatex": "V = \\pi \\int_{0}^{1} \\left((2x^{2})^{2} - (x^{2})^{2}\\right) dx",
          "explanation": "Subtract the inner disc area from the outer disc area at each $x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify the integrand",
          "workingLatex": "V = \\pi \\int_{0}^{1} 3x^{4}\\,dx",
          "explanation": "Expand and collect like terms before integrating.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate",
          "workingLatex": "\\int 3x^{4}\\,dx = \\dfrac{3x^{5}}{5}",
          "explanation": "Find the antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply limits",
          "workingLatex": "\\pi \\left[ \\dfrac{3x^{5}}{5} \\right]_{0}^{1}",
          "explanation": "Evaluate the definite integral.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute limits",
          "workingLatex": "F(1) - F(0)",
          "explanation": "Upper limit minus lower limit.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Multiply by $\\pi$",
          "workingLatex": "V = \\dfrac{3\\pi}{5}",
          "explanation": "Include the factor $\\pi$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check sign",
          "workingLatex": "V > 0",
          "explanation": "Volume must be positive; outer radius squared minus inner radius squared ensures this.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State answer",
          "workingLatex": "V = \\dfrac{3\\pi}{5}",
          "explanation": "The solid is a hollowed washer formed between two curves.",
          "diagram": null
        }
      ],
      "finalAnswer": "Volume $= \\dfrac{3\\pi}{5}$ cubic units."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Volumes of revolution",
    "subtopicId": "fm.y1.pure.volumes-revolution",
    "questionDiagram": null,
    "id": "fm.y1.pure.volumes-revolution.q034",
    "tags": [
      "volumes-revolution",
      "between-curves",
      "x-axis"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "questionText": "The finite region bounded by the curves $y = 1$ and $y = x^{2}$ for $0 \\leq x \\leq 1$ is rotated through $360^\\circ$ about the $x$-axis. Find the exact volume of the solid formed.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify outer and inner radii",
          "workingLatex": "\\text{On } [0, 1]:\\; y_{\\text{outer}} = 1,\\; y_{\\text{inner}} = x^{2}",
          "explanation": "The outer curve is farther from the axis of rotation and gives the larger radius.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up the washer integral",
          "workingLatex": "V = \\pi \\int_{0}^{1} \\left((1)^{2} - (x^{2})^{2}\\right) dx",
          "explanation": "Subtract the inner disc area from the outer disc area at each $x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify the integrand",
          "workingLatex": "V = \\pi \\int_{0}^{1} 1 - x^{4}\\,dx",
          "explanation": "Expand and collect like terms before integrating.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate",
          "workingLatex": "\\int 1 - x^{4}\\,dx = x - \\dfrac{x^{5}}{5}",
          "explanation": "Find the antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply limits",
          "workingLatex": "\\pi \\left[ x - \\dfrac{x^{5}}{5} \\right]_{0}^{1}",
          "explanation": "Evaluate the definite integral.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute limits",
          "workingLatex": "F(1) - F(0)",
          "explanation": "Upper limit minus lower limit.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Multiply by $\\pi$",
          "workingLatex": "V = \\dfrac{4\\pi}{5}",
          "explanation": "Include the factor $\\pi$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check sign",
          "workingLatex": "V > 0",
          "explanation": "Volume must be positive; outer radius squared minus inner radius squared ensures this.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State answer",
          "workingLatex": "V = \\dfrac{4\\pi}{5}",
          "explanation": "The solid is a hollowed washer formed between two curves.",
          "diagram": null
        }
      ],
      "finalAnswer": "Volume $= \\dfrac{4\\pi}{5}$ cubic units."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Volumes of revolution",
    "subtopicId": "fm.y1.pure.volumes-revolution",
    "questionDiagram": null,
    "id": "fm.y1.pure.volumes-revolution.q035",
    "tags": [
      "volumes-revolution",
      "between-curves",
      "x-axis"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "questionText": "The finite region bounded by the curves $y = 2 - x$ and $y = x$ for $0 \\leq x \\leq 1$ is rotated through $360^\\circ$ about the $x$-axis. Find the exact volume of the solid formed.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify outer and inner radii",
          "workingLatex": "\\text{On } [0, 1]:\\; y_{\\text{outer}} = 2 - x,\\; y_{\\text{inner}} = x",
          "explanation": "The outer curve is farther from the axis of rotation and gives the larger radius.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up the washer integral",
          "workingLatex": "V = \\pi \\int_{0}^{1} \\left((2 - x)^{2} - (x)^{2}\\right) dx",
          "explanation": "Subtract the inner disc area from the outer disc area at each $x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify the integrand",
          "workingLatex": "V = \\pi \\int_{0}^{1} 4 - 4x\\,dx",
          "explanation": "Expand and collect like terms before integrating.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate",
          "workingLatex": "\\int 4 - 4x\\,dx = 4x - 2x^{2}",
          "explanation": "Find the antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply limits",
          "workingLatex": "\\pi \\left[ 4x - 2x^{2} \\right]_{0}^{1}",
          "explanation": "Evaluate the definite integral.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute limits",
          "workingLatex": "F(1) - F(0)",
          "explanation": "Upper limit minus lower limit.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Multiply by $\\pi$",
          "workingLatex": "V = 2\\pi",
          "explanation": "Include the factor $\\pi$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check sign",
          "workingLatex": "V > 0",
          "explanation": "Volume must be positive; outer radius squared minus inner radius squared ensures this.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State answer",
          "workingLatex": "V = 2\\pi",
          "explanation": "The solid is a hollowed washer formed between two curves.",
          "diagram": null
        }
      ],
      "finalAnswer": "Volume $= 2\\pi$ cubic units."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Volumes of revolution",
    "subtopicId": "fm.y1.pure.volumes-revolution",
    "questionDiagram": null,
    "id": "fm.y1.pure.volumes-revolution.q036",
    "tags": [
      "volumes-revolution",
      "square-root"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "questionText": "The finite region bounded by the curves $y = x^{1/2}$ and $y = x$ for $0 \\leq x \\leq 1$ is rotated through $360^\\circ$ about the $x$-axis. Find the exact volume of the solid formed.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify outer and inner radii",
          "workingLatex": "\\text{On } [0, 1]:\\; y_{\\text{outer}} = x^{1/2},\\; y_{\\text{inner}} = x",
          "explanation": "The outer curve is farther from the axis of rotation and gives the larger radius.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up the washer integral",
          "workingLatex": "V = \\pi \\int_{0}^{1} \\left((x^{1/2})^{2} - (x)^{2}\\right) dx",
          "explanation": "Subtract the inner disc area from the outer disc area at each $x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify the integrand",
          "workingLatex": "V = \\pi \\int_{0}^{1} x - x^{2}\\,dx",
          "explanation": "Expand and collect like terms before integrating.",
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
          "workingLatex": "\\pi \\left[ \\dfrac{x^{2}}{2} - \\dfrac{x^{3}}{3} \\right]_{0}^{1}",
          "explanation": "Evaluate the definite integral.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute limits",
          "workingLatex": "F(1) - F(0)",
          "explanation": "Upper limit minus lower limit.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Multiply by $\\pi$",
          "workingLatex": "V = \\dfrac{\\pi}{6}",
          "explanation": "Include the factor $\\pi$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check sign",
          "workingLatex": "V > 0",
          "explanation": "Volume must be positive; outer radius squared minus inner radius squared ensures this.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State answer",
          "workingLatex": "V = \\dfrac{\\pi}{6}",
          "explanation": "The solid is a hollowed washer formed between two curves.",
          "diagram": null
        }
      ],
      "finalAnswer": "Volume $= \\dfrac{\\pi}{6}$ cubic units."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Volumes of revolution",
    "subtopicId": "fm.y1.pure.volumes-revolution",
    "questionDiagram": null,
    "id": "fm.y1.pure.volumes-revolution.q037",
    "tags": [
      "volumes-revolution",
      "between-curves",
      "x-axis"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "questionText": "The finite region bounded by the curves $y = 3$ and $y = x^{2}$ for $0 \\leq x \\leq \\sqrt{3}$ is rotated through $360^\\circ$ about the $x$-axis. Find the exact volume of the solid formed.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify outer and inner radii",
          "workingLatex": "\\text{On } [0, \\sqrt{3}]:\\; y_{\\text{outer}} = 3,\\; y_{\\text{inner}} = x^{2}",
          "explanation": "The outer curve is farther from the axis of rotation and gives the larger radius.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up the washer integral",
          "workingLatex": "V = \\pi \\int_{0}^{\\sqrt{3}} \\left((3)^{2} - (x^{2})^{2}\\right) dx",
          "explanation": "Subtract the inner disc area from the outer disc area at each $x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify the integrand",
          "workingLatex": "V = \\pi \\int_{0}^{\\sqrt{3}} 9 - x^{4}\\,dx",
          "explanation": "Expand and collect like terms before integrating.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate",
          "workingLatex": "\\int 9 - x^{4}\\,dx = 9x - \\dfrac{x^{5}}{5}",
          "explanation": "Find the antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply limits",
          "workingLatex": "\\pi \\left[ 9x - \\dfrac{x^{5}}{5} \\right]_{0}^{\\sqrt{3}}",
          "explanation": "Evaluate the definite integral.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute limits",
          "workingLatex": "F(\\sqrt{3}) - F(0)",
          "explanation": "Upper limit minus lower limit.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Multiply by $\\pi$",
          "workingLatex": "V = \\dfrac{18\\sqrt{3}\\,\\pi}{5}",
          "explanation": "Include the factor $\\pi$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check sign",
          "workingLatex": "V > 0",
          "explanation": "Volume must be positive; outer radius squared minus inner radius squared ensures this.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State answer",
          "workingLatex": "V = \\dfrac{18\\sqrt{3}\\,\\pi}{5}",
          "explanation": "The solid is a hollowed washer formed between two curves.",
          "diagram": null
        }
      ],
      "finalAnswer": "Volume $= \\dfrac{18\\sqrt{3}\\,\\pi}{5}$ cubic units."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Volumes of revolution",
    "subtopicId": "fm.y1.pure.volumes-revolution",
    "questionDiagram": null,
    "id": "fm.y1.pure.volumes-revolution.q038",
    "tags": [
      "volumes-revolution",
      "between-curves",
      "x-axis"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "questionText": "The finite region bounded by the curves $y = 2x$ and $y = x$ for $0 \\leq x \\leq 1$ is rotated through $360^\\circ$ about the $x$-axis. Find the exact volume of the solid formed.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify outer and inner radii",
          "workingLatex": "\\text{On } [0, 1]:\\; y_{\\text{outer}} = 2x,\\; y_{\\text{inner}} = x",
          "explanation": "The outer curve is farther from the axis of rotation and gives the larger radius.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up the washer integral",
          "workingLatex": "V = \\pi \\int_{0}^{1} \\left((2x)^{2} - (x)^{2}\\right) dx",
          "explanation": "Subtract the inner disc area from the outer disc area at each $x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify the integrand",
          "workingLatex": "V = \\pi \\int_{0}^{1} 3x^{2}\\,dx",
          "explanation": "Expand and collect like terms before integrating.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate",
          "workingLatex": "\\int 3x^{2}\\,dx = x^{3}",
          "explanation": "Find the antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply limits",
          "workingLatex": "\\pi \\left[ x^{3} \\right]_{0}^{1}",
          "explanation": "Evaluate the definite integral.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute limits",
          "workingLatex": "F(1) - F(0)",
          "explanation": "Upper limit minus lower limit.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Multiply by $\\pi$",
          "workingLatex": "V = \\pi",
          "explanation": "Include the factor $\\pi$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check sign",
          "workingLatex": "V > 0",
          "explanation": "Volume must be positive; outer radius squared minus inner radius squared ensures this.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State answer",
          "workingLatex": "V = \\pi",
          "explanation": "The solid is a hollowed washer formed between two curves.",
          "diagram": null
        }
      ],
      "finalAnswer": "Volume $= \\pi$ cubic units."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Volumes of revolution",
    "subtopicId": "fm.y1.pure.volumes-revolution",
    "questionDiagram": null,
    "id": "fm.y1.pure.volumes-revolution.q039",
    "tags": [
      "volumes-revolution",
      "between-curves",
      "x-axis"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "questionText": "The finite region bounded by the curves $y = 4 - x^{2}$ and $y = x^{2}$ for $0 \\leq x \\leq 2$ is rotated through $360^\\circ$ about the $x$-axis. Find the exact volume of the solid formed.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify outer and inner radii",
          "workingLatex": "\\text{On } [0, 2]:\\; y_{\\text{outer}} = 4 - x^{2},\\; y_{\\text{inner}} = x^{2}",
          "explanation": "The outer curve is farther from the axis of rotation and gives the larger radius.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up the washer integral",
          "workingLatex": "V = \\pi \\int_{0}^{2} \\left((4 - x^{2})^{2} - (x^{2})^{2}\\right) dx",
          "explanation": "Subtract the inner disc area from the outer disc area at each $x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify the integrand",
          "workingLatex": "V = \\pi \\int_{0}^{2} 16 - 8x^{2}\\,dx",
          "explanation": "Expand and collect like terms before integrating.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate",
          "workingLatex": "\\int 16 - 8x^{2}\\,dx = 16x - \\dfrac{8x^{3}}{3}",
          "explanation": "Find the antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply limits",
          "workingLatex": "\\pi \\left[ 16x - \\dfrac{8x^{3}}{3} \\right]_{0}^{2}",
          "explanation": "Evaluate the definite integral.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute limits",
          "workingLatex": "F(2) - F(0)",
          "explanation": "Upper limit minus lower limit.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Multiply by $\\pi$",
          "workingLatex": "V = \\dfrac{128\\pi}{3}",
          "explanation": "Include the factor $\\pi$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check sign",
          "workingLatex": "V > 0",
          "explanation": "Volume must be positive; outer radius squared minus inner radius squared ensures this.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State answer",
          "workingLatex": "V = \\dfrac{128\\pi}{3}",
          "explanation": "The solid is a hollowed washer formed between two curves.",
          "diagram": null
        }
      ],
      "finalAnswer": "Volume $= \\dfrac{128\\pi}{3}$ cubic units."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Volumes of revolution",
    "subtopicId": "fm.y1.pure.volumes-revolution",
    "questionDiagram": null,
    "id": "fm.y1.pure.volumes-revolution.q040",
    "tags": [
      "volumes-revolution",
      "between-curves",
      "x-axis"
    ],
    "difficulty": "Intermediate",
    "marks": 7,
    "answerType": "value",
    "questionText": "The finite region bounded by the curves $y = x + 2$ and $y = x^{2}$ for $0 \\leq x \\leq 2$ is rotated through $360^\\circ$ about the $x$-axis. Find the exact volume of the solid formed.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify outer and inner radii",
          "workingLatex": "\\text{On } [0, 2]:\\; y_{\\text{outer}} = x + 2,\\; y_{\\text{inner}} = x^{2}",
          "explanation": "The outer curve is farther from the axis of rotation and gives the larger radius.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up the washer integral",
          "workingLatex": "V = \\pi \\int_{0}^{2} \\left((x + 2)^{2} - (x^{2})^{2}\\right) dx",
          "explanation": "Subtract the inner disc area from the outer disc area at each $x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify the integrand",
          "workingLatex": "V = \\pi \\int_{0}^{2} x^{2} + 4x + 4 - x^{4}\\,dx",
          "explanation": "Expand and collect like terms before integrating.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate",
          "workingLatex": "\\int x^{2} + 4x + 4 - x^{4}\\,dx = \\dfrac{x^{3}}{3} + 2x^{2} + 4x - \\dfrac{x^{5}}{5}",
          "explanation": "Find the antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply limits",
          "workingLatex": "\\pi \\left[ \\dfrac{x^{3}}{3} + 2x^{2} + 4x - \\dfrac{x^{5}}{5} \\right]_{0}^{2}",
          "explanation": "Evaluate the definite integral.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute limits",
          "workingLatex": "F(2) - F(0)",
          "explanation": "Upper limit minus lower limit.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Multiply by $\\pi$",
          "workingLatex": "V = \\dfrac{184\\pi}{15}",
          "explanation": "Include the factor $\\pi$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check sign",
          "workingLatex": "V > 0",
          "explanation": "Volume must be positive; outer radius squared minus inner radius squared ensures this.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State answer",
          "workingLatex": "V = \\dfrac{184\\pi}{15}",
          "explanation": "The solid is a hollowed washer formed between two curves.",
          "diagram": null
        }
      ],
      "finalAnswer": "Volume $= \\dfrac{184\\pi}{15}$ cubic units."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Volumes of revolution",
    "subtopicId": "fm.y1.pure.volumes-revolution",
    "questionDiagram": null,
    "id": "fm.y1.pure.volumes-revolution.q041",
    "tags": [
      "volumes-revolution",
      "between-curves",
      "y-axis"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "questionText": "The finite region bounded by the curves $x = 2y$ and $x = y^{2}$ for $0 \\leq y \\leq 2$ is rotated through $360^\\circ$ about the $y$-axis. Find the exact volume of the solid formed.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify outer and inner radii",
          "workingLatex": "\\text{On } [0, 2]:\\; x_{\\text{outer}} = 2y,\\; x_{\\text{inner}} = y^{2}",
          "explanation": "The curve farther from the $y$-axis gives the outer radius.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up the washer integral",
          "workingLatex": "V = \\pi \\int_{0}^{2} \\left((2y)^{2} - (y^{2})^{2}\\right) dy",
          "explanation": "Subtract inner disc area from outer disc area at each $y$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify the integrand",
          "workingLatex": "V = \\pi \\int_{0}^{2} 4y^{2} - y^{4}\\,dy",
          "explanation": "Expand and simplify before integrating.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate",
          "workingLatex": "\\int 4y^{2} - y^{4}\\,dy = \\dfrac{4y^{3}}{3} - \\dfrac{y^{5}}{5}",
          "explanation": "Find the antiderivative with respect to $y$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply limits",
          "workingLatex": "\\pi \\left[ \\dfrac{4y^{3}}{3} - \\dfrac{y^{5}}{5} \\right]_{0}^{2}",
          "explanation": "Evaluate between the $y$-bounds.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute limits",
          "workingLatex": "F(2) - F(0)",
          "explanation": "Upper minus lower.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Multiply by $\\pi$",
          "workingLatex": "V = \\dfrac{64\\pi}{15}",
          "explanation": "Include the factor $\\pi$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret",
          "workingLatex": "The solid is formed between two curves rotated about the $y$-axis.",
          "explanation": "The result is a volume in cubic units.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State answer",
          "workingLatex": "V = \\dfrac{64\\pi}{15}",
          "explanation": "Exact volume of the solid of revolution.",
          "diagram": null
        }
      ],
      "finalAnswer": "Volume $= \\dfrac{64\\pi}{15}$ cubic units."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Volumes of revolution",
    "subtopicId": "fm.y1.pure.volumes-revolution",
    "questionDiagram": null,
    "id": "fm.y1.pure.volumes-revolution.q042",
    "tags": [
      "volumes-revolution",
      "between-curves",
      "y-axis"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "questionText": "The finite region bounded by the curves $x = 4$ and $x = y^{2}$ for $0 \\leq y \\leq 2$ is rotated through $360^\\circ$ about the $y$-axis. Find the exact volume of the solid formed.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify outer and inner radii",
          "workingLatex": "\\text{On } [0, 2]:\\; x_{\\text{outer}} = 4,\\; x_{\\text{inner}} = y^{2}",
          "explanation": "The curve farther from the $y$-axis gives the outer radius.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up the washer integral",
          "workingLatex": "V = \\pi \\int_{0}^{2} \\left((4)^{2} - (y^{2})^{2}\\right) dy",
          "explanation": "Subtract inner disc area from outer disc area at each $y$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify the integrand",
          "workingLatex": "V = \\pi \\int_{0}^{2} 16 - y^{4}\\,dy",
          "explanation": "Expand and simplify before integrating.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate",
          "workingLatex": "\\int 16 - y^{4}\\,dy = 16y - \\dfrac{y^{5}}{5}",
          "explanation": "Find the antiderivative with respect to $y$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply limits",
          "workingLatex": "\\pi \\left[ 16y - \\dfrac{y^{5}}{5} \\right]_{0}^{2}",
          "explanation": "Evaluate between the $y$-bounds.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute limits",
          "workingLatex": "F(2) - F(0)",
          "explanation": "Upper minus lower.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Multiply by $\\pi$",
          "workingLatex": "V = \\dfrac{128\\pi}{5}",
          "explanation": "Include the factor $\\pi$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret",
          "workingLatex": "The solid is formed between two curves rotated about the $y$-axis.",
          "explanation": "The result is a volume in cubic units.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State answer",
          "workingLatex": "V = \\dfrac{128\\pi}{5}",
          "explanation": "Exact volume of the solid of revolution.",
          "diagram": null
        }
      ],
      "finalAnswer": "Volume $= \\dfrac{128\\pi}{5}$ cubic units."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Volumes of revolution",
    "subtopicId": "fm.y1.pure.volumes-revolution",
    "questionDiagram": null,
    "id": "fm.y1.pure.volumes-revolution.q043",
    "tags": [
      "volumes-revolution",
      "between-curves",
      "y-axis"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "questionText": "The finite region bounded by the curves $x = y$ and $x = y^{2}$ for $0 \\leq y \\leq 1$ is rotated through $360^\\circ$ about the $y$-axis. Find the exact volume of the solid formed.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify outer and inner radii",
          "workingLatex": "\\text{On } [0, 1]:\\; x_{\\text{outer}} = y,\\; x_{\\text{inner}} = y^{2}",
          "explanation": "The curve farther from the $y$-axis gives the outer radius.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up the washer integral",
          "workingLatex": "V = \\pi \\int_{0}^{1} \\left((y)^{2} - (y^{2})^{2}\\right) dy",
          "explanation": "Subtract inner disc area from outer disc area at each $y$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify the integrand",
          "workingLatex": "V = \\pi \\int_{0}^{1} y^{2} - y^{4}\\,dy",
          "explanation": "Expand and simplify before integrating.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate",
          "workingLatex": "\\int y^{2} - y^{4}\\,dy = \\dfrac{y^{3}}{3} - \\dfrac{y^{5}}{5}",
          "explanation": "Find the antiderivative with respect to $y$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply limits",
          "workingLatex": "\\pi \\left[ \\dfrac{y^{3}}{3} - \\dfrac{y^{5}}{5} \\right]_{0}^{1}",
          "explanation": "Evaluate between the $y$-bounds.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute limits",
          "workingLatex": "F(1) - F(0)",
          "explanation": "Upper minus lower.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Multiply by $\\pi$",
          "workingLatex": "V = \\dfrac{2\\pi}{15}",
          "explanation": "Include the factor $\\pi$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret",
          "workingLatex": "The solid is formed between two curves rotated about the $y$-axis.",
          "explanation": "The result is a volume in cubic units.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State answer",
          "workingLatex": "V = \\dfrac{2\\pi}{15}",
          "explanation": "Exact volume of the solid of revolution.",
          "diagram": null
        }
      ],
      "finalAnswer": "Volume $= \\dfrac{2\\pi}{15}$ cubic units."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Volumes of revolution",
    "subtopicId": "fm.y1.pure.volumes-revolution",
    "questionDiagram": null,
    "id": "fm.y1.pure.volumes-revolution.q044",
    "tags": [
      "volumes-revolution",
      "between-curves",
      "y-axis"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "questionText": "The finite region bounded by the curves $x = y^{1/2}$ and $x = y$ for $0 \\leq y \\leq 1$ is rotated through $360^\\circ$ about the $y$-axis. Find the exact volume of the solid formed.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify outer and inner radii",
          "workingLatex": "\\text{On } [0, 1]:\\; x_{\\text{outer}} = y^{1/2},\\; x_{\\text{inner}} = y",
          "explanation": "The curve farther from the $y$-axis gives the outer radius.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up the washer integral",
          "workingLatex": "V = \\pi \\int_{0}^{1} \\left((y^{1/2})^{2} - (y)^{2}\\right) dy",
          "explanation": "Subtract inner disc area from outer disc area at each $y$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify the integrand",
          "workingLatex": "V = \\pi \\int_{0}^{1} y - y^{2}\\,dy",
          "explanation": "Expand and simplify before integrating.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate",
          "workingLatex": "\\int y - y^{2}\\,dy = \\dfrac{y^{2}}{2} - \\dfrac{y^{3}}{3}",
          "explanation": "Find the antiderivative with respect to $y$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply limits",
          "workingLatex": "\\pi \\left[ \\dfrac{y^{2}}{2} - \\dfrac{y^{3}}{3} \\right]_{0}^{1}",
          "explanation": "Evaluate between the $y$-bounds.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute limits",
          "workingLatex": "F(1) - F(0)",
          "explanation": "Upper minus lower.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Multiply by $\\pi$",
          "workingLatex": "V = \\dfrac{\\pi}{6}",
          "explanation": "Include the factor $\\pi$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret",
          "workingLatex": "The solid is formed between two curves rotated about the $y$-axis.",
          "explanation": "The result is a volume in cubic units.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State answer",
          "workingLatex": "V = \\dfrac{\\pi}{6}",
          "explanation": "Exact volume of the solid of revolution.",
          "diagram": null
        }
      ],
      "finalAnswer": "Volume $= \\dfrac{\\pi}{6}$ cubic units."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Volumes of revolution",
    "subtopicId": "fm.y1.pure.volumes-revolution",
    "questionDiagram": null,
    "id": "fm.y1.pure.volumes-revolution.q045",
    "tags": [
      "volumes-revolution",
      "between-curves",
      "y-axis"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "questionText": "The finite region bounded by the curves $x = 2 - y$ and $x = y$ for $0 \\leq y \\leq 1$ is rotated through $360^\\circ$ about the $y$-axis. Find the exact volume of the solid formed.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify outer and inner radii",
          "workingLatex": "\\text{On } [0, 1]:\\; x_{\\text{outer}} = 2 - y,\\; x_{\\text{inner}} = y",
          "explanation": "The curve farther from the $y$-axis gives the outer radius.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up the washer integral",
          "workingLatex": "V = \\pi \\int_{0}^{1} \\left((2 - y)^{2} - (y)^{2}\\right) dy",
          "explanation": "Subtract inner disc area from outer disc area at each $y$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify the integrand",
          "workingLatex": "V = \\pi \\int_{0}^{1} 4 - 4y\\,dy",
          "explanation": "Expand and simplify before integrating.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate",
          "workingLatex": "\\int 4 - 4y\\,dy = 4y - 2y^{2}",
          "explanation": "Find the antiderivative with respect to $y$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply limits",
          "workingLatex": "\\pi \\left[ 4y - 2y^{2} \\right]_{0}^{1}",
          "explanation": "Evaluate between the $y$-bounds.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute limits",
          "workingLatex": "F(1) - F(0)",
          "explanation": "Upper minus lower.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Multiply by $\\pi$",
          "workingLatex": "V = 2\\pi",
          "explanation": "Include the factor $\\pi$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret",
          "workingLatex": "The solid is formed between two curves rotated about the $y$-axis.",
          "explanation": "The result is a volume in cubic units.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State answer",
          "workingLatex": "V = 2\\pi",
          "explanation": "Exact volume of the solid of revolution.",
          "diagram": null
        }
      ],
      "finalAnswer": "Volume $= 2\\pi$ cubic units."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Volumes of revolution",
    "subtopicId": "fm.y1.pure.volumes-revolution",
    "questionDiagram": null,
    "id": "fm.y1.pure.volumes-revolution.q046",
    "tags": [
      "volumes-revolution",
      "y-axis",
      "disc-method"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "questionText": "The region bounded by the curve $x = y + 1$, the $y$-axis, and the lines $y = 0$ and $y = 2$ is rotated through $360^\\circ$ about the $y$-axis. Find the exact volume of the solid formed.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the volume formula",
          "workingLatex": "V = \\pi \\int_{0}^{2} x^{2}\\,dy",
          "explanation": "When rotating about the $y$-axis, discs are perpendicular to the $y$-axis with radius $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Express $x$ in terms of $y$",
          "workingLatex": "x = y + 1",
          "explanation": "The curve must be written with $x$ as a function of $y$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute into the integral",
          "workingLatex": "V = \\pi \\int_{0}^{2} y^{2} + 2y + 1\\,dy",
          "explanation": "Square the expression for $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate",
          "workingLatex": "\\int y^{2} + 2y + 1\\,dy = \\dfrac{y^{3}}{3} + y^{2} + y",
          "explanation": "Find the antiderivative with respect to $y$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply limits",
          "workingLatex": "V = \\pi \\left[ \\dfrac{y^{3}}{3} + y^{2} + y \\right]_{0}^{2}",
          "explanation": "Evaluate between $y = ${y0}$ and $y = ${y1}$.",
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
          "description": "Multiply by $\\pi$",
          "workingLatex": "V = \\dfrac{26\\pi}{3}",
          "explanation": "Include the factor $\\pi$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret",
          "workingLatex": "The solid is a body of revolution about the $y$-axis.",
          "explanation": "The result is a volume in cubic units.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Disc method reminder",
          "workingLatex": "V = \\pi \\int r^{2}\\,d(\\text{axis})",
          "explanation": "Each cross-section is a disc of radius $r$ perpendicular to the axis of rotation.",
          "diagram": null
        }
      ],
      "finalAnswer": "Volume $= \\dfrac{26\\pi}{3}$ cubic units."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Volumes of revolution",
    "subtopicId": "fm.y1.pure.volumes-revolution",
    "questionDiagram": null,
    "id": "fm.y1.pure.volumes-revolution.q047",
    "tags": [
      "volumes-revolution",
      "y-axis",
      "disc-method"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "questionText": "The region bounded by the curve $x = 2y^{2}$, the $y$-axis, and the lines $y = 0$ and $y = 1$ is rotated through $360^\\circ$ about the $y$-axis. Find the exact volume of the solid formed.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the volume formula",
          "workingLatex": "V = \\pi \\int_{0}^{1} x^{2}\\,dy",
          "explanation": "When rotating about the $y$-axis, discs are perpendicular to the $y$-axis with radius $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Express $x$ in terms of $y$",
          "workingLatex": "x = 2y^{2}",
          "explanation": "The curve must be written with $x$ as a function of $y$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute into the integral",
          "workingLatex": "V = \\pi \\int_{0}^{1} 4y^{4}\\,dy",
          "explanation": "Square the expression for $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate",
          "workingLatex": "\\int 4y^{4}\\,dy = \\dfrac{4y^{5}}{5}",
          "explanation": "Find the antiderivative with respect to $y$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply limits",
          "workingLatex": "V = \\pi \\left[ \\dfrac{4y^{5}}{5} \\right]_{0}^{1}",
          "explanation": "Evaluate between $y = ${y0}$ and $y = ${y1}$.",
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
          "description": "Multiply by $\\pi$",
          "workingLatex": "V = \\dfrac{4\\pi}{5}",
          "explanation": "Include the factor $\\pi$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret",
          "workingLatex": "The solid is a body of revolution about the $y$-axis.",
          "explanation": "The result is a volume in cubic units.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Disc method reminder",
          "workingLatex": "V = \\pi \\int r^{2}\\,d(\\text{axis})",
          "explanation": "Each cross-section is a disc of radius $r$ perpendicular to the axis of rotation.",
          "diagram": null
        }
      ],
      "finalAnswer": "Volume $= \\dfrac{4\\pi}{5}$ cubic units."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Volumes of revolution",
    "subtopicId": "fm.y1.pure.volumes-revolution",
    "questionDiagram": null,
    "id": "fm.y1.pure.volumes-revolution.q048",
    "tags": [
      "volumes-revolution",
      "y-axis",
      "disc-method"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "questionText": "The region bounded by the curve $x = 4 - y$, the $y$-axis, and the lines $y = 0$ and $y = 2$ is rotated through $360^\\circ$ about the $y$-axis. Find the exact volume of the solid formed.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the volume formula",
          "workingLatex": "V = \\pi \\int_{0}^{2} x^{2}\\,dy",
          "explanation": "When rotating about the $y$-axis, discs are perpendicular to the $y$-axis with radius $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Express $x$ in terms of $y$",
          "workingLatex": "x = 4 - y",
          "explanation": "The curve must be written with $x$ as a function of $y$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute into the integral",
          "workingLatex": "V = \\pi \\int_{0}^{2} (4-y)^{2}\\,dy",
          "explanation": "Square the expression for $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate",
          "workingLatex": "\\int (4-y)^{2}\\,dy = 16y - 4y^{2} + \\dfrac{y^{3}}{3}",
          "explanation": "Find the antiderivative with respect to $y$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply limits",
          "workingLatex": "V = \\pi \\left[ 16y - 4y^{2} + \\dfrac{y^{3}}{3} \\right]_{0}^{2}",
          "explanation": "Evaluate between $y = ${y0}$ and $y = ${y1}$.",
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
          "description": "Multiply by $\\pi$",
          "workingLatex": "V = \\dfrac{8\\pi}{3}",
          "explanation": "Include the factor $\\pi$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret",
          "workingLatex": "The solid is a body of revolution about the $y$-axis.",
          "explanation": "The result is a volume in cubic units.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Disc method reminder",
          "workingLatex": "V = \\pi \\int r^{2}\\,d(\\text{axis})",
          "explanation": "Each cross-section is a disc of radius $r$ perpendicular to the axis of rotation.",
          "diagram": null
        }
      ],
      "finalAnswer": "Volume $= \\dfrac{8\\pi}{3}$ cubic units."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Volumes of revolution",
    "subtopicId": "fm.y1.pure.volumes-revolution",
    "questionDiagram": null,
    "id": "fm.y1.pure.volumes-revolution.q049",
    "tags": [
      "volumes-revolution",
      "modelling",
      "x-axis"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "questionText": "A decorative vase is made by rotating a curved profile about its central axis. The profile is modelled by $y = x^{2}$ for $0 \\leq x \\leq 3$, with the $x$-axis as the axis of symmetry. The profile is rotated through $360^\\circ$ about the $x$-axis. Find the exact volume of the solid.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the volume formula",
          "workingLatex": "V = \\pi \\int_{0}^{3} y^{2}\\,dx",
          "explanation": "Rotating a region about the $x$-axis creates discs of radius $y$, so each cross-section has area $\\pi y^{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute the curve",
          "workingLatex": "V = \\pi \\int_{0}^{3} x^{4}\\,dx",
          "explanation": "Replace $y$ with $x^{2}$ and square the expression.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate",
          "workingLatex": "\\int x^{4}\\,dx = \\dfrac{x^{5}}{5}",
          "explanation": "Find the antiderivative with respect to $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write with limits",
          "workingLatex": "V = \\pi \\left[ \\dfrac{x^{5}}{5} \\right]_{0}^{3}",
          "explanation": "Evaluate the definite integral between the given bounds.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the upper limit",
          "workingLatex": "F(3)",
          "explanation": "Replace $x$ with the upper limit.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute the lower limit",
          "workingLatex": "F(0)",
          "explanation": "Replace $x$ with the lower limit.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Subtract",
          "workingLatex": "F(3) - F(0)",
          "explanation": "The definite integral is the antiderivative at the upper limit minus the value at the lower limit.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Multiply by $\\pi$",
          "workingLatex": "V = \\dfrac{243\\pi}{5}",
          "explanation": "Include the factor $\\pi$ from the disc formula.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Interpret",
          "workingLatex": "In the model, the volume represents the capacity or size of the real object described.",
          "explanation": "The result is a volume in cubic units.",
          "diagram": null
        }
      ],
      "finalAnswer": "Volume $= \\dfrac{243\\pi}{5}$ cubic units."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Volumes of revolution",
    "subtopicId": "fm.y1.pure.volumes-revolution",
    "questionDiagram": null,
    "id": "fm.y1.pure.volumes-revolution.q050",
    "tags": [
      "volumes-revolution",
      "modelling",
      "x-axis"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "questionText": "A solid lampshade is formed by rotating a parabolic profile about the vertical axis. The profile is modelled by $y = 2 + x^{2}$ for $0 \\leq x \\leq 1$, with the $x$-axis as the axis of symmetry. The profile is rotated through $360^\\circ$ about the $x$-axis. Find the exact volume of the solid.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the volume formula",
          "workingLatex": "V = \\pi \\int_{0}^{1} y^{2}\\,dx",
          "explanation": "Rotating a region about the $x$-axis creates discs of radius $y$, so each cross-section has area $\\pi y^{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute the curve",
          "workingLatex": "V = \\pi \\int_{0}^{1} 4 + 4x^{2} + x^{4}\\,dx",
          "explanation": "Replace $y$ with $2 + x^{2}$ and square the expression.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate",
          "workingLatex": "\\int 4 + 4x^{2} + x^{4}\\,dx = 4x + \\dfrac{4x^{3}}{3} + \\dfrac{x^{5}}{5}",
          "explanation": "Find the antiderivative with respect to $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write with limits",
          "workingLatex": "V = \\pi \\left[ 4x + \\dfrac{4x^{3}}{3} + \\dfrac{x^{5}}{5} \\right]_{0}^{1}",
          "explanation": "Evaluate the definite integral between the given bounds.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the upper limit",
          "workingLatex": "F(1)",
          "explanation": "Replace $x$ with the upper limit.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute the lower limit",
          "workingLatex": "F(0)",
          "explanation": "Replace $x$ with the lower limit.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Subtract",
          "workingLatex": "F(1) - F(0)",
          "explanation": "The definite integral is the antiderivative at the upper limit minus the value at the lower limit.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Multiply by $\\pi$",
          "workingLatex": "V = \\dfrac{83\\pi}{15}",
          "explanation": "Include the factor $\\pi$ from the disc formula.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Interpret",
          "workingLatex": "In the model, the volume represents the capacity or size of the real object described.",
          "explanation": "The result is a volume in cubic units.",
          "diagram": null
        }
      ],
      "finalAnswer": "Volume $= \\dfrac{83\\pi}{15}$ cubic units."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Volumes of revolution",
    "subtopicId": "fm.y1.pure.volumes-revolution",
    "questionDiagram": null,
    "id": "fm.y1.pure.volumes-revolution.q051",
    "tags": [
      "volumes-revolution",
      "composite-region"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "questionText": "The region bounded by the lines $y = 2x$, $y = 4$, and $x = 0$ is rotated through $360^\\circ$ about the $x$-axis. Find the exact volume of the solid formed.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify outer and inner radii",
          "workingLatex": "\\text{On } [0, 2]:\\; y_{\\text{outer}} = 4,\\; y_{\\text{inner}} = 2x",
          "explanation": "The outer curve is farther from the axis of rotation and gives the larger radius.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up the washer integral",
          "workingLatex": "V = \\pi \\int_{0}^{2} \\left((4)^{2} - (2x)^{2}\\right) dx",
          "explanation": "Subtract the inner disc area from the outer disc area at each $x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify the integrand",
          "workingLatex": "V = \\pi \\int_{0}^{2} 16 - 4x^{2}\\,dx",
          "explanation": "Expand and collect like terms before integrating.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate",
          "workingLatex": "\\int 16 - 4x^{2}\\,dx = 16x - \\dfrac{4x^{3}}{3}",
          "explanation": "Find the antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply limits",
          "workingLatex": "\\pi \\left[ 16x - \\dfrac{4x^{3}}{3} \\right]_{0}^{2}",
          "explanation": "Evaluate the definite integral.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute limits",
          "workingLatex": "F(2) - F(0)",
          "explanation": "Upper limit minus lower limit.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Multiply by $\\pi$",
          "workingLatex": "V = \\dfrac{64\\pi}{3}",
          "explanation": "Include the factor $\\pi$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check sign",
          "workingLatex": "V > 0",
          "explanation": "Volume must be positive; outer radius squared minus inner radius squared ensures this.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State answer",
          "workingLatex": "V = \\dfrac{64\\pi}{3}",
          "explanation": "The region between a slant line and a horizontal boundary forms a truncated cone when rotated.",
          "diagram": null
        }
      ],
      "finalAnswer": "Volume $= \\dfrac{64\\pi}{3}$ cubic units."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Volumes of revolution",
    "subtopicId": "fm.y1.pure.volumes-revolution",
    "questionDiagram": null,
    "id": "fm.y1.pure.volumes-revolution.q052",
    "tags": [
      "volumes-revolution",
      "composite-region"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "questionText": "The triangular region bounded by $y = x$, $y = 1$, and $x = 0$ is rotated through $360^\\circ$ about the $x$-axis. Find the exact volume of the solid formed.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify outer and inner radii",
          "workingLatex": "\\text{On } [0, 1]:\\; y_{\\text{outer}} = 1,\\; y_{\\text{inner}} = x",
          "explanation": "The outer curve is farther from the axis of rotation and gives the larger radius.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up the washer integral",
          "workingLatex": "V = \\pi \\int_{0}^{1} \\left((1)^{2} - (x)^{2}\\right) dx",
          "explanation": "Subtract the inner disc area from the outer disc area at each $x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify the integrand",
          "workingLatex": "V = \\pi \\int_{0}^{1} 1 - x^{2}\\,dx",
          "explanation": "Expand and collect like terms before integrating.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate",
          "workingLatex": "\\int 1 - x^{2}\\,dx = x - \\dfrac{x^{3}}{3}",
          "explanation": "Find the antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply limits",
          "workingLatex": "\\pi \\left[ x - \\dfrac{x^{3}}{3} \\right]_{0}^{1}",
          "explanation": "Evaluate the definite integral.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute limits",
          "workingLatex": "F(1) - F(0)",
          "explanation": "Upper limit minus lower limit.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Multiply by $\\pi$",
          "workingLatex": "V = \\dfrac{2\\pi}{3}",
          "explanation": "Include the factor $\\pi$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check sign",
          "workingLatex": "V > 0",
          "explanation": "Volume must be positive; outer radius squared minus inner radius squared ensures this.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State answer",
          "workingLatex": "V = \\dfrac{2\\pi}{3}",
          "explanation": "The solid is a hollowed washer formed between two curves.",
          "diagram": null
        }
      ],
      "finalAnswer": "Volume $= \\dfrac{2\\pi}{3}$ cubic units."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Volumes of revolution",
    "subtopicId": "fm.y1.pure.volumes-revolution",
    "questionDiagram": null,
    "id": "fm.y1.pure.volumes-revolution.q053",
    "tags": [
      "volumes-revolution",
      "region-and-axis",
      "x-axis"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "questionText": "The region bounded by the curve $y = x^{2}$, the $x$-axis, and the lines $x = 0$ and $x = 3$ is rotated through $360^\\circ$ about the $x$-axis. Find the exact volume of the solid formed.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the volume formula",
          "workingLatex": "V = \\pi \\int_{0}^{3} y^{2}\\,dx",
          "explanation": "Rotating a region about the $x$-axis creates discs of radius $y$, so each cross-section has area $\\pi y^{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute the curve",
          "workingLatex": "V = \\pi \\int_{0}^{3} x^{4}\\,dx",
          "explanation": "Replace $y$ with $x^{2}$ and square the expression.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate",
          "workingLatex": "\\int x^{4}\\,dx = \\dfrac{x^{5}}{5}",
          "explanation": "Find the antiderivative with respect to $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write with limits",
          "workingLatex": "V = \\pi \\left[ \\dfrac{x^{5}}{5} \\right]_{0}^{3}",
          "explanation": "Evaluate the definite integral between the given bounds.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the upper limit",
          "workingLatex": "F(3)",
          "explanation": "Replace $x$ with the upper limit.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute the lower limit",
          "workingLatex": "F(0)",
          "explanation": "Replace $x$ with the lower limit.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Subtract",
          "workingLatex": "F(3) - F(0)",
          "explanation": "The definite integral is the antiderivative at the upper limit minus the value at the lower limit.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Multiply by $\\pi$",
          "workingLatex": "V = \\dfrac{243\\pi}{5}",
          "explanation": "Include the factor $\\pi$ from the disc formula.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Interpret",
          "workingLatex": "The solid lies entirely between the curve and the $x$-axis.",
          "explanation": "The result is a volume in cubic units.",
          "diagram": null
        }
      ],
      "finalAnswer": "Volume $= \\dfrac{243\\pi}{5}$ cubic units."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Volumes of revolution",
    "subtopicId": "fm.y1.pure.volumes-revolution",
    "questionDiagram": null,
    "id": "fm.y1.pure.volumes-revolution.q054",
    "tags": [
      "volumes-revolution",
      "region-and-axis",
      "x-axis"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "questionText": "The region bounded by the curve $y = 5 - x^{2}$, the $x$-axis, and the lines $x = 0$ and $x = 2$ is rotated through $360^\\circ$ about the $x$-axis. Find the exact volume of the solid formed.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the volume formula",
          "workingLatex": "V = \\pi \\int_{0}^{2} y^{2}\\,dx",
          "explanation": "Rotating a region about the $x$-axis creates discs of radius $y$, so each cross-section has area $\\pi y^{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute the curve",
          "workingLatex": "V = \\pi \\int_{0}^{2} 25 - 10x^{2} + x^{4}\\,dx",
          "explanation": "Replace $y$ with $5 - x^{2}$ and square the expression.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate",
          "workingLatex": "\\int 25 - 10x^{2} + x^{4}\\,dx = 25x - \\dfrac{10x^{3}}{3} + \\dfrac{x^{5}}{5}",
          "explanation": "Find the antiderivative with respect to $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write with limits",
          "workingLatex": "V = \\pi \\left[ 25x - \\dfrac{10x^{3}}{3} + \\dfrac{x^{5}}{5} \\right]_{0}^{2}",
          "explanation": "Evaluate the definite integral between the given bounds.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the upper limit",
          "workingLatex": "F(2)",
          "explanation": "Replace $x$ with the upper limit.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute the lower limit",
          "workingLatex": "F(0)",
          "explanation": "Replace $x$ with the lower limit.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Subtract",
          "workingLatex": "F(2) - F(0)",
          "explanation": "The definite integral is the antiderivative at the upper limit minus the value at the lower limit.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Multiply by $\\pi$",
          "workingLatex": "V = \\dfrac{223\\pi}{15}",
          "explanation": "Include the factor $\\pi$ from the disc formula.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Interpret",
          "workingLatex": "The solid lies entirely between the curve and the $x$-axis.",
          "explanation": "The result is a volume in cubic units.",
          "diagram": null
        }
      ],
      "finalAnswer": "Volume $= \\dfrac{223\\pi}{15}$ cubic units."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Volumes of revolution",
    "subtopicId": "fm.y1.pure.volumes-revolution",
    "questionDiagram": null,
    "id": "fm.y1.pure.volumes-revolution.q055",
    "tags": [
      "volumes-revolution",
      "y-axis",
      "disc-method"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "questionText": "The region bounded by the curve $x = y^{3}$, the $y$-axis, and the lines $y = 0$ and $y = 1$ is rotated through $360^\\circ$ about the $y$-axis. Find the exact volume of the solid formed.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the volume formula",
          "workingLatex": "V = \\pi \\int_{0}^{1} x^{2}\\,dy",
          "explanation": "When rotating about the $y$-axis, discs are perpendicular to the $y$-axis with radius $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Express $x$ in terms of $y$",
          "workingLatex": "x = y^{3}",
          "explanation": "The curve must be written with $x$ as a function of $y$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute into the integral",
          "workingLatex": "V = \\pi \\int_{0}^{1} y^{6}\\,dy",
          "explanation": "Square the expression for $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate",
          "workingLatex": "\\int y^{6}\\,dy = \\dfrac{y^{7}}{7}",
          "explanation": "Find the antiderivative with respect to $y$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply limits",
          "workingLatex": "V = \\pi \\left[ \\dfrac{y^{7}}{7} \\right]_{0}^{1}",
          "explanation": "Evaluate between $y = ${y0}$ and $y = ${y1}$.",
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
          "description": "Multiply by $\\pi$",
          "workingLatex": "V = \\dfrac{\\pi}{7}",
          "explanation": "Include the factor $\\pi$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret",
          "workingLatex": "The solid is a body of revolution about the $y$-axis.",
          "explanation": "The result is a volume in cubic units.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Disc method reminder",
          "workingLatex": "V = \\pi \\int r^{2}\\,d(\\text{axis})",
          "explanation": "Each cross-section is a disc of radius $r$ perpendicular to the axis of rotation.",
          "diagram": null
        }
      ],
      "finalAnswer": "Volume $= \\dfrac{\\pi}{7}$ cubic units."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Volumes of revolution",
    "subtopicId": "fm.y1.pure.volumes-revolution",
    "questionDiagram": null,
    "id": "fm.y1.pure.volumes-revolution.q056",
    "tags": [
      "volumes-revolution",
      "intersection",
      "between-curves",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "value",
    "questionText": "The curves $y = x^{2}$ and $y = x + 2$ intersect at $x = -1$ and $x = 2$. The finite region between them is rotated through $360^\\circ$ about the $x$-axis. Find the exact volume.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Confirm intersections",
          "workingLatex": "x^{2} = x + 2 \\Rightarrow (x+1)(x-2) = 0",
          "explanation": "The curves meet at $x = -1$ and $x = 2$, which are the integration limits.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify outer and inner curves",
          "workingLatex": "y = x + 2 \\text{ is above } y = x^{2} \\text{ on } [-1, 2]",
          "explanation": "The line lies above the parabola throughout the enclosed region.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set up the integral",
          "workingLatex": "V = \\pi \\int_{-1}^{2} \\left((x+2)^{2} - (x^{2})^{2}\\right) dx",
          "explanation": "Use the washer method with outer radius $x+2$ and inner radius $x^{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Expand the integrand",
          "workingLatex": "(x+2)^{2} - x^{4} = x^{2} + 4x + 4 - x^{4}",
          "explanation": "Expand each squared term before integrating.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate",
          "workingLatex": "\\int (x^{2} + 4x + 4 - x^{4})\\,dx = \\dfrac{x^{3}}{3} + 2x^{2} + 4x - \\dfrac{x^{5}}{5}",
          "explanation": "Integrate term by term.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate at $x = 2$",
          "workingLatex": "\\dfrac{8}{3} + 8 + 8 - \\dfrac{32}{5} = \\dfrac{184}{15}",
          "explanation": "Substitute the upper limit.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate at $x = -1$",
          "workingLatex": "-\\dfrac{1}{3} + 2 - 4 + \\dfrac{1}{5} = -\\dfrac{32}{15}",
          "explanation": "Substitute the lower limit.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Subtract",
          "workingLatex": "\\dfrac{184}{15} - \\left(-\\dfrac{32}{15}\\right) = \\dfrac{216}{15} = \\dfrac{72}{5}",
          "explanation": "Upper minus lower gives the definite integral.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Multiply by $\\pi$",
          "workingLatex": "V = \\dfrac{72\\pi}{5}",
          "explanation": "Include the factor $\\pi$ from the disc method.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Verify sign",
          "workingLatex": "V > 0",
          "explanation": "The outer radius exceeds the inner radius on the entire interval.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Interpret",
          "workingLatex": "\\text{Solid of revolution between a parabola and a line}",
          "explanation": "The result is the volume of the enclosed solid.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Check at midpoint",
          "workingLatex": "\\text{At } x = 0.5,\\; x+2 > x^{2}",
          "explanation": "Confirms the line is the outer curve.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State answer",
          "workingLatex": "V = \\dfrac{72\\pi}{5}",
          "explanation": "Exact volume in cubic units.",
          "diagram": null
        }
      ],
      "finalAnswer": "Volume $= \\dfrac{72\\pi}{5}$ cubic units."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Volumes of revolution",
    "subtopicId": "fm.y1.pure.volumes-revolution",
    "questionDiagram": null,
    "id": "fm.y1.pure.volumes-revolution.q057",
    "tags": [
      "volumes-revolution",
      "square-root",
      "paraboloid",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "value",
    "questionText": "The region bounded by $y = \\sqrt{x}$, $y = 0$, and $x = 9$ is rotated through $360^\\circ$ about the $x$-axis. Find the exact volume.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the curve",
          "workingLatex": "y = x^{1/2}",
          "explanation": "The square root function defines the upper boundary.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Volume formula",
          "workingLatex": "V = \\pi \\int_{0}^{9} y^{2}\\,dx",
          "explanation": "Rotation about the $x$-axis uses discs of radius $y$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Square the function",
          "workingLatex": "y^{2} = x",
          "explanation": "Squaring $\\sqrt{x}$ simplifies the integrand to $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set up integral",
          "workingLatex": "V = \\pi \\int_{0}^{9} x\\,dx",
          "explanation": "A polynomial integrand makes integration straightforward.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate",
          "workingLatex": "\\int x\\,dx = \\dfrac{x^{2}}{2}",
          "explanation": "Power rule for integration.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply limits",
          "workingLatex": "\\pi \\left[ \\dfrac{x^{2}}{2} \\right]_{0}^{9}",
          "explanation": "Evaluate between $x = 0$ and $x = 9$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute $x = 9$",
          "workingLatex": "\\dfrac{81}{2}",
          "explanation": "Upper limit value.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute $x = 0$",
          "workingLatex": "0",
          "explanation": "Lower limit value.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Multiply by $\\pi$",
          "workingLatex": "V = \\dfrac{81\\pi}{2}",
          "explanation": "Exact volume.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Geometric check",
          "workingLatex": "\\text{Solid is a paraboloid}",
          "explanation": "Rotating $y = \\sqrt{x}$ gives a parabolic bowl shape.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Units",
          "workingLatex": "\\text{cubic units}",
          "explanation": "Volume is measured in cubic units.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Compare with cone",
          "workingLatex": "V > \\pi \\int_{0}^{9} 0\\,dx = 0",
          "explanation": "Volume is positive as expected.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State answer",
          "workingLatex": "V = \\dfrac{81\\pi}{2}",
          "explanation": "Complete exact answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "Volume $= \\dfrac{81\\pi}{2}$ cubic units."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Volumes of revolution",
    "subtopicId": "fm.y1.pure.volumes-revolution",
    "questionDiagram": null,
    "id": "fm.y1.pure.volumes-revolution.q058",
    "tags": [
      "volumes-revolution",
      "y-axis",
      "square-root",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "value",
    "questionText": "The region bounded by $x = \\sqrt{y}$, $x = 0$, and $y = 9$ is rotated through $360^\\circ$ about the $y$-axis. Find the exact volume.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Express $x$ as a function of $y$",
          "workingLatex": "x = y^{1/2}",
          "explanation": "For rotation about the $y$-axis, integrate $x^{2}$ with respect to $y$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Volume formula",
          "workingLatex": "V = \\pi \\int_{0}^{9} x^{2}\\,dy",
          "explanation": "Discs are perpendicular to the $y$-axis with radius $x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Square the function",
          "workingLatex": "x^{2} = y",
          "explanation": "Squaring $\\sqrt{y}$ gives a simple linear integrand.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set up integral",
          "workingLatex": "V = \\pi \\int_{0}^{9} y\\,dy",
          "explanation": "Integrate with respect to $y$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate",
          "workingLatex": "\\int y\\,dy = \\dfrac{y^{2}}{2}",
          "explanation": "Power rule.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply limits",
          "workingLatex": "\\pi \\left[ \\dfrac{y^{2}}{2} \\right]_{0}^{9}",
          "explanation": "Evaluate at $y = 0$ and $y = 9$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute $y = 9$",
          "workingLatex": "\\dfrac{81}{2}",
          "explanation": "Upper limit.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Multiply by $\\pi$",
          "workingLatex": "V = \\dfrac{81\\pi}{2}",
          "explanation": "Exact volume.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Symmetry note",
          "workingLatex": "\\text{Same volume as rotating } y = \\sqrt{x} \\text{ about } x",
          "explanation": "The two setups describe the same solid.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Verify radius",
          "workingLatex": "\\text{At } y = 4,\\; \\text{radius} = 2",
          "explanation": "Radius equals $\\sqrt{y}$ at each height.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Units",
          "workingLatex": "\\text{cubic units}",
          "explanation": "Volume measurement.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Check positivity",
          "workingLatex": "V > 0",
          "explanation": "Volume must be positive.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State answer",
          "workingLatex": "V = \\dfrac{81\\pi}{2}",
          "explanation": "Complete answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "Volume $= \\dfrac{81\\pi}{2}$ cubic units."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Volumes of revolution",
    "subtopicId": "fm.y1.pure.volumes-revolution",
    "questionDiagram": null,
    "id": "fm.y1.pure.volumes-revolution.q059",
    "tags": [
      "volumes-revolution",
      "modelling",
      "symmetry",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "value",
    "questionText": "A bowl is modelled by rotating the curve $y = 4 - x^{2}$ for $-2 \\leq x \\leq 2$ about the $x$-axis. Find the exact volume of the bowl.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the profile",
          "workingLatex": "y = 4 - x^{2}",
          "explanation": "An inverted parabola opening downward with vertex at $(0, 4)$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Check the region",
          "workingLatex": "y \\geq 0 \\text{ on } [-2, 2]",
          "explanation": "The curve meets the $x$-axis at $x = \\pm 2$, so the profile is non-negative.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Volume formula",
          "workingLatex": "V = \\pi \\int_{-2}^{2} (4 - x^{2})^{2}\\,dx",
          "explanation": "Square the radius function for the disc method.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Expand",
          "workingLatex": "(4 - x^{2})^{2} = 16 - 8x^{2} + x^{4}",
          "explanation": "Expand before integrating.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Use symmetry",
          "workingLatex": "V = 2\\pi \\int_{0}^{2} (16 - 8x^{2} + x^{4})\\,dx",
          "explanation": "The integrand is even, so double the integral from $0$ to $2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Integrate",
          "workingLatex": "\\int (16 - 8x^{2} + x^{4})\\,dx = 16x - \\dfrac{8x^{3}}{3} + \\dfrac{x^{5}}{5}",
          "explanation": "Term-by-term integration.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate from $0$ to $2$",
          "workingLatex": "32 - \\dfrac{64}{3} + \\dfrac{32}{5} = \\dfrac{256}{15}",
          "explanation": "Substitute the upper limit.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Apply symmetry factor",
          "workingLatex": "V = 2\\pi \\cdot \\dfrac{256}{15} = \\dfrac{512\\pi}{15}",
          "explanation": "Multiply by $2\\pi$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Interpret",
          "workingLatex": "\\text{Capacity of the bowl}",
          "explanation": "The volume represents how much the bowl can hold.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Maximum radius",
          "workingLatex": "\\text{At } x = 0,\\; \\text{radius} = 4",
          "explanation": "The bowl is widest at its rim.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Verify at boundary",
          "workingLatex": "\\text{At } x = 2,\\; y = 0",
          "explanation": "The profile meets the axis at the base.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Units",
          "workingLatex": "\\text{cubic units}",
          "explanation": "Volume measurement.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State answer",
          "workingLatex": "V = \\dfrac{512\\pi}{15}",
          "explanation": "Exact volume of the bowl.",
          "diagram": null
        }
      ],
      "finalAnswer": "Volume $= \\dfrac{512\\pi}{15}$ cubic units."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Volumes of revolution",
    "subtopicId": "fm.y1.pure.volumes-revolution",
    "questionDiagram": null,
    "id": "fm.y1.pure.volumes-revolution.q060",
    "tags": [
      "volumes-revolution",
      "intersection",
      "between-curves",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "value",
    "questionText": "The finite region enclosed by $y = x^{2}$ and $y = 2x$ is rotated through $360^\\circ$ about the $x$-axis. Find the exact volume.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find intersections",
          "workingLatex": "x^{2} = 2x \\Rightarrow x(x-2) = 0",
          "explanation": "The curves meet at $x = 0$ and $x = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify outer curve",
          "workingLatex": "y = 2x \\text{ is above } y = x^{2} \\text{ on } (0, 2)",
          "explanation": "At $x = 1$, $2x = 2$ and $x^{2} = 1$, so the line is outer.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set up integral",
          "workingLatex": "V = \\pi \\int_{0}^{2} \\left((2x)^{2} - (x^{2})^{2}\\right) dx",
          "explanation": "Washer method with outer radius $2x$ and inner radius $x^{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify integrand",
          "workingLatex": "4x^{2} - x^{4}",
          "explanation": "Expand and subtract.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate",
          "workingLatex": "\\int (4x^{2} - x^{4})\\,dx = \\dfrac{4x^{3}}{3} - \\dfrac{x^{5}}{5}",
          "explanation": "Power rule integration.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate at $x = 2$",
          "workingLatex": "\\dfrac{32}{3} - \\dfrac{32}{5} = \\dfrac{64}{15}",
          "explanation": "Upper limit.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate at $x = 0$",
          "workingLatex": "0",
          "explanation": "Lower limit.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Multiply by $\\pi$",
          "workingLatex": "V = \\dfrac{64\\pi}{15}",
          "explanation": "Exact volume.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify outer > inner",
          "workingLatex": "2x > x^{2} \\text{ for } 0 < x < 2",
          "explanation": "Ensures positive integrand.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Geometric view",
          "workingLatex": "\\text{Hollowed solid between a cone and a paraboloid}",
          "explanation": "The inner surface is parabolic; the outer is conical.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Units",
          "workingLatex": "\\text{cubic units}",
          "explanation": "Volume measurement.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Check at midpoint",
          "workingLatex": "\\text{At } x = 1,\\; 4 - 1 = 3 > 0",
          "explanation": "Positive contribution at each point.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State answer",
          "workingLatex": "V = \\dfrac{64\\pi}{15}",
          "explanation": "Complete answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "Volume $= \\dfrac{64\\pi}{15}$ cubic units."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Volumes of revolution",
    "subtopicId": "fm.y1.pure.volumes-revolution",
    "questionDiagram": null,
    "id": "fm.y1.pure.volumes-revolution.q061",
    "tags": [
      "volumes-revolution",
      "composite-region",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "questionText": "The region bounded by $y = 1$, $y = x^{2}$, and $x = 0$ is rotated through $360^\\circ$ about the $x$-axis. Find the exact volume.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify bounds",
          "workingLatex": "0 \\leq x \\leq 1",
          "explanation": "The curves $y = 1$ and $y = x^{2}$ meet when $x^{2} = 1$, so $x = 1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Outer and inner radii",
          "workingLatex": "y_{\\text{outer}} = 1,\\; y_{\\text{inner}} = x^{2}",
          "explanation": "The horizontal line is farther from the $x$-axis than the parabola.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set up integral",
          "workingLatex": "V = \\pi \\int_{0}^{1} (1 - x^{4})\\,dx",
          "explanation": "Outer radius squared minus inner radius squared.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate",
          "workingLatex": "\\int (1 - x^{4})\\,dx = x - \\dfrac{x^{5}}{5}",
          "explanation": "Integrate term by term.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate at $x = 1$",
          "workingLatex": "1 - \\dfrac{1}{5} = \\dfrac{4}{5}",
          "explanation": "Upper limit.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate at $x = 0$",
          "workingLatex": "0",
          "explanation": "Lower limit.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Multiply by $\\pi$",
          "workingLatex": "V = \\dfrac{4\\pi}{5}",
          "explanation": "Exact volume.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Composite region",
          "workingLatex": "\\text{Region between a horizontal line and a curve}",
          "explanation": "This is a standard washer setup.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify at $x = 0.5$",
          "workingLatex": "1 - 0.0625 > 0",
          "explanation": "Positive integrand throughout.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Geometric shape",
          "workingLatex": "\\text{Hollowed cylinder with parabolic inner surface}",
          "explanation": "Outer boundary is cylindrical; inner is parabolic.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Units",
          "workingLatex": "\\text{cubic units}",
          "explanation": "Volume measurement.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Alternative view",
          "workingLatex": "\\text{Cylinder minus paraboloid segment}",
          "explanation": "Equivalent decomposition.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State answer",
          "workingLatex": "V = \\dfrac{4\\pi}{5}",
          "explanation": "Complete answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "Volume $= \\dfrac{4\\pi}{5}$ cubic units."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Volumes of revolution",
    "subtopicId": "fm.y1.pure.volumes-revolution",
    "questionDiagram": null,
    "id": "fm.y1.pure.volumes-revolution.q062",
    "tags": [
      "volumes-revolution",
      "y-axis",
      "intersection",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "value",
    "questionText": "The curves $x = y^{2}$ and $x = y + 2$ intersect. The finite region between them is rotated through $360^\\circ$ about the $y$-axis. Find the exact volume.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find intersections",
          "workingLatex": "y^{2} = y + 2 \\Rightarrow (y-2)(y+1) = 0",
          "explanation": "The curves meet at $y = -1$ and $y = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify outer curve",
          "workingLatex": "x = y + 2 \\text{ is to the right of } x = y^{2} \\text{ on } [-1, 2]",
          "explanation": "The line has larger $x$-values than the parabola.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set up integral",
          "workingLatex": "V = \\pi \\int_{-1}^{2} \\left((y+2)^{2} - (y^{2})^{2}\\right) dy",
          "explanation": "Washer method about the $y$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Expand",
          "workingLatex": "(y+2)^{2} - y^{4} = y^{2} + 4y + 4 - y^{4}",
          "explanation": "Expand each squared term.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate",
          "workingLatex": "\\int (y^{2} + 4y + 4 - y^{4})\\,dy = \\dfrac{y^{3}}{3} + 2y^{2} + 4y - \\dfrac{y^{5}}{5}",
          "explanation": "Integrate with respect to $y$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate at $y = 2$",
          "workingLatex": "\\dfrac{8}{3} + 8 + 8 - \\dfrac{32}{5} = \\dfrac{184}{15}",
          "explanation": "Upper limit.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate at $y = -1$",
          "workingLatex": "-\\dfrac{1}{3} + 2 - 4 + \\dfrac{1}{5} = -\\dfrac{32}{15}",
          "explanation": "Lower limit.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Subtract",
          "workingLatex": "\\dfrac{184}{15} - \\left(-\\dfrac{32}{15}\\right) = \\dfrac{216}{15} = \\dfrac{72}{5}",
          "explanation": "Definite integral value.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Multiply by $\\pi$",
          "workingLatex": "V = \\dfrac{72\\pi}{5}",
          "explanation": "Exact volume.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Verify at $y = 0$",
          "workingLatex": "4 > 0",
          "explanation": "Outer radius exceeds inner at the midpoint.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Units",
          "workingLatex": "\\text{cubic units}",
          "explanation": "Volume measurement.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Connection to $x$-axis problem",
          "workingLatex": "\\text{Same algebra as rotating about } x \\text{ with swapped roles}",
          "explanation": "The washer structure is analogous.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State answer",
          "workingLatex": "V = \\dfrac{72\\pi}{5}",
          "explanation": "Complete answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "Volume $= \\dfrac{72\\pi}{5}$ cubic units."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Volumes of revolution",
    "subtopicId": "fm.y1.pure.volumes-revolution",
    "questionDiagram": null,
    "id": "fm.y1.pure.volumes-revolution.q063",
    "tags": [
      "volumes-revolution",
      "composite-region",
      "modelling",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "questionText": "A solid is formed by rotating the region bounded by $y = x$, $y = 2$, and $x = 0$ about the $x$-axis. Find the exact volume.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the $x$-bound",
          "workingLatex": "y = x \\text{ meets } y = 2 \\text{ when } x = 2",
          "explanation": "The region extends from $x = 0$ to $x = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify radii",
          "workingLatex": "y_{\\text{outer}} = 2,\\; y_{\\text{inner}} = x",
          "explanation": "The horizontal line $y = 2$ is the outer boundary.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set up integral",
          "workingLatex": "V = \\pi \\int_{0}^{2} (4 - x^{2})\\,dx",
          "explanation": "Outer radius $2$, inner radius $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate",
          "workingLatex": "\\int (4 - x^{2})\\,dx = 4x - \\dfrac{x^{3}}{3}",
          "explanation": "Standard polynomial integration.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate at $x = 2$",
          "workingLatex": "8 - \\dfrac{8}{3} = \\dfrac{16}{3}",
          "explanation": "Upper limit.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate at $x = 0$",
          "workingLatex": "0",
          "explanation": "Lower limit.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Multiply by $\\pi$",
          "workingLatex": "V = \\dfrac{16\\pi}{3}",
          "explanation": "Exact volume.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Geometric shape",
          "workingLatex": "\\text{Truncated cone (frustum)}",
          "explanation": "Rotating a triangle with a slant inner boundary gives a frustum.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify outer > inner",
          "workingLatex": "2 > x \\text{ on } (0, 2)",
          "explanation": "Positive integrand.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Modelling context",
          "workingLatex": "\\text{Solid container with sloping inner wall}",
          "explanation": "Common in engineering profiles.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Units",
          "workingLatex": "\\text{cubic units}",
          "explanation": "Volume measurement.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Check using cone formula",
          "workingLatex": "\\text{Consistent with washer result}",
          "explanation": "The integral method agrees with geometry.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State answer",
          "workingLatex": "V = \\dfrac{16\\pi}{3}",
          "explanation": "Complete answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "Volume $= \\dfrac{16\\pi}{3}$ cubic units."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Volumes of revolution",
    "subtopicId": "fm.y1.pure.volumes-revolution",
    "questionDiagram": null,
    "id": "fm.y1.pure.volumes-revolution.q064",
    "tags": [
      "volumes-revolution",
      "quadratic",
      "region-and-axis",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "value",
    "questionText": "The region bounded by $y = 4x - x^{2}$ and the $x$-axis is rotated through $360^\\circ$ about the $x$-axis. Find the exact volume.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find $x$-intercepts",
          "workingLatex": "4x - x^{2} = 0 \\Rightarrow x(4-x) = 0",
          "explanation": "The curve meets the axis at $x = 0$ and $x = 4$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Confirm region",
          "workingLatex": "y \\geq 0 \\text{ on } [0, 4]",
          "explanation": "The parabola opens downward with vertex at $(2, 4)$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Volume formula",
          "workingLatex": "V = \\pi \\int_{0}^{4} (4x - x^{2})^{2}\\,dx",
          "explanation": "Square the radius function.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Expand",
          "workingLatex": "(4x - x^{2})^{2} = 16x^{2} - 8x^{3} + x^{4}",
          "explanation": "Expand the squared expression.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate",
          "workingLatex": "\\int (16x^{2} - 8x^{3} + x^{4})\\,dx = \\dfrac{16x^{3}}{3} - 2x^{4} + \\dfrac{x^{5}}{5}",
          "explanation": "Integrate term by term.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate at $x = 4$",
          "workingLatex": "\\dfrac{1024}{3} - 128 + \\dfrac{1024}{5}",
          "explanation": "Substitute the upper limit.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify",
          "workingLatex": "\\dfrac{1024}{3} - 512 + \\dfrac{1024}{5} = \\dfrac{512}{15}",
          "explanation": "Combine fractions.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Multiply by $\\pi$",
          "workingLatex": "V = \\dfrac{512\\pi}{15}",
          "explanation": "Exact volume.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Geometric shape",
          "workingLatex": "\\text{Solid with maximum radius at } x = 2",
          "explanation": "The solid bulges in the middle.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Maximum radius",
          "workingLatex": "y_{\\max} = 4 \\text{ at } x = 2",
          "explanation": "The widest cross-section is at the vertex.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Units",
          "workingLatex": "\\text{cubic units}",
          "explanation": "Volume measurement.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Symmetry",
          "workingLatex": "\\text{Profile is symmetric about } x = 2",
          "explanation": "The solid is symmetric about the plane $x = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State answer",
          "workingLatex": "V = \\dfrac{512\\pi}{15}",
          "explanation": "Complete answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "Volume $= \\dfrac{512\\pi}{15}$ cubic units."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Volumes of revolution",
    "subtopicId": "fm.y1.pure.volumes-revolution",
    "questionDiagram": null,
    "id": "fm.y1.pure.volumes-revolution.q065",
    "tags": [
      "volumes-revolution",
      "symmetry",
      "between-curves",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "value",
    "questionText": "The region bounded by $y = x^{2}$ and $y = 4$ is rotated through $360^\\circ$ about the $x$-axis. Find the exact volume.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find integration limits",
          "workingLatex": "x^{2} = 4 \\Rightarrow x = \\pm 2",
          "explanation": "The region spans $-2 \\leq x \\leq 2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify radii",
          "workingLatex": "y_{\\text{outer}} = 4,\\; y_{\\text{inner}} = x^{2}",
          "explanation": "The constant line $y = 4$ is the outer boundary.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use symmetry",
          "workingLatex": "V = 2\\pi \\int_{0}^{2} (16 - x^{4})\\,dx",
          "explanation": "The integrand is even, so integrate from $0$ to $2$ and double.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate",
          "workingLatex": "\\int (16 - x^{4})\\,dx = 16x - \\dfrac{x^{5}}{5}",
          "explanation": "Polynomial integration.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate from $0$ to $2$",
          "workingLatex": "32 - \\dfrac{32}{5} = \\dfrac{128}{5}",
          "explanation": "Upper limit substitution.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply symmetry",
          "workingLatex": "V = 2\\pi \\cdot \\dfrac{128}{5} = \\dfrac{256\\pi}{5}",
          "explanation": "Multiply by $2\\pi$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Alternative limits",
          "workingLatex": "V = \\pi \\int_{-2}^{2} (16 - x^{4})\\,dx",
          "explanation": "Direct integration over full interval gives the same result.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Geometric shape",
          "workingLatex": "\\text{Cylinder with parabolic hole}",
          "explanation": "Outer surface is cylindrical; inner is parabolic.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify at $x = 1$",
          "workingLatex": "16 - 1 = 15 > 0",
          "explanation": "Positive integrand.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Units",
          "workingLatex": "\\text{cubic units}",
          "explanation": "Volume measurement.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Compare with cylinder",
          "workingLatex": "V < \\pi \\cdot 4^{2} \\cdot 4 = 64\\pi",
          "explanation": "The hole reduces the volume below a full cylinder.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Symmetry advantage",
          "workingLatex": "\\text{Halving the interval simplifies arithmetic}",
          "explanation": "Even functions allow doubling a half-integral.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State answer",
          "workingLatex": "V = \\dfrac{256\\pi}{5}",
          "explanation": "Complete answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "Volume $= \\dfrac{256\\pi}{5}$ cubic units."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Volumes of revolution",
    "subtopicId": "fm.y1.pure.volumes-revolution",
    "questionDiagram": null,
    "id": "fm.y1.pure.volumes-revolution.q066",
    "tags": [
      "volumes-revolution",
      "modelling",
      "composite-region",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "value",
    "questionText": "A wine glass is modelled by rotating the curve $y = \\dfrac{x}{2}$ for $0 \\leq x \\leq 6$ about the $x$-axis. A second solid is formed by rotating $y = 3$ for $0 \\leq x \\leq 6$ about the $x$-axis. Find the volume of the material between the two surfaces (the glass wall).",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the model",
          "workingLatex": "\\text{Outer surface: } y = 3;\\; \\text{Inner surface: } y = \\dfrac{x}{2}",
          "explanation": "The glass wall lies between the conical inner surface and cylindrical outer surface.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up washer integral",
          "workingLatex": "V = \\pi \\int_{0}^{6} \\left(9 - \\dfrac{x^{2}}{4}\\right) dx",
          "explanation": "Outer radius $3$, inner radius $\\dfrac{x}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate",
          "workingLatex": "\\int \\left(9 - \\dfrac{x^{2}}{4}\\right) dx = 9x - \\dfrac{x^{3}}{12}",
          "explanation": "Integrate term by term.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate at $x = 6$",
          "workingLatex": "54 - 18 = 36",
          "explanation": "Upper limit.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate at $x = 0$",
          "workingLatex": "0",
          "explanation": "Lower limit.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Multiply by $\\pi$",
          "workingLatex": "V = 36\\pi",
          "explanation": "Volume of the glass material.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Outer volume alone",
          "workingLatex": "V_{\\text{outer}} = \\pi \\int_{0}^{6} 9\\,dx = 54\\pi",
          "explanation": "Full cylinder volume for comparison.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Inner volume alone",
          "workingLatex": "V_{\\text{inner}} = \\pi \\int_{0}^{6} \\dfrac{x^{2}}{4}\\,dx = 18\\pi",
          "explanation": "Cone volume removed.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check difference",
          "workingLatex": "54\\pi - 18\\pi = 36\\pi",
          "explanation": "Outer minus inner equals the washer result.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Modelling note",
          "workingLatex": "\\text{Wall thickness varies with height}",
          "explanation": "The gap between surfaces is not uniform.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Units",
          "workingLatex": "\\text{cubic units}",
          "explanation": "Volume of material.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Physical meaning",
          "workingLatex": "\\text{Amount of glass needed}",
          "explanation": "The volume represents the material required.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State answer",
          "workingLatex": "V = 36\\pi",
          "explanation": "Complete answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "Volume of glass material $= 36\\pi$ cubic units."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Volumes of revolution",
    "subtopicId": "fm.y1.pure.volumes-revolution",
    "questionDiagram": null,
    "id": "fm.y1.pure.volumes-revolution.q067",
    "tags": [
      "volumes-revolution",
      "cubic",
      "between-curves",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "value",
    "questionText": "The curves $y = x^{3}$ and $y = x$ enclose a finite region in the first quadrant. This region is rotated through $360^\\circ$ about the $x$-axis. Find the exact volume.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find intersections",
          "workingLatex": "x^{3} = x \\Rightarrow x(x^{2}-1) = 0",
          "explanation": "In the first quadrant, the curves meet at $x = 0$ and $x = 1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify outer curve",
          "workingLatex": "y = x \\text{ is above } y = x^{3} \\text{ on } (0, 1)",
          "explanation": "At $x = 0.5$, $x = 0.5$ and $x^{3} = 0.125$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set up integral",
          "workingLatex": "V = \\pi \\int_{0}^{1} (x^{2} - x^{6})\\,dx",
          "explanation": "Outer radius $x$, inner radius $x^{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate",
          "workingLatex": "\\int (x^{2} - x^{6})\\,dx = \\dfrac{x^{3}}{3} - \\dfrac{x^{7}}{7}",
          "explanation": "Power rule.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate at $x = 1$",
          "workingLatex": "\\dfrac{1}{3} - \\dfrac{1}{7} = \\dfrac{4}{21}",
          "explanation": "Upper limit.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate at $x = 0$",
          "workingLatex": "0",
          "explanation": "Lower limit.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Multiply by $\\pi$",
          "workingLatex": "V = \\dfrac{4\\pi}{21}",
          "explanation": "Exact volume.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify outer > inner",
          "workingLatex": "x > x^{3} \\text{ for } 0 < x < 1",
          "explanation": "Ensures positive integrand.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Geometric view",
          "workingLatex": "\\text{Small solid between a cone and a cubic surface}",
          "explanation": "The inner surface rises more slowly.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Units",
          "workingLatex": "\\text{cubic units}",
          "explanation": "Volume measurement.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check at $x = 0.8$",
          "workingLatex": "0.64 - 0.262 > 0",
          "explanation": "Positive contribution.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "First quadrant only",
          "workingLatex": "x \\geq 0,\\; y \\geq 0",
          "explanation": "The enclosed region is entirely in the first quadrant.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State answer",
          "workingLatex": "V = \\dfrac{4\\pi}{21}",
          "explanation": "Complete answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "Volume $= \\dfrac{4\\pi}{21}$ cubic units."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Volumes of revolution",
    "subtopicId": "fm.y1.pure.volumes-revolution",
    "questionDiagram": null,
    "id": "fm.y1.pure.volumes-revolution.q068",
    "tags": [
      "volumes-revolution",
      "square-root",
      "scaling",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "questionText": "The region bounded by $y = 2\\sqrt{x}$, $y = 0$, $x = 0$, and $x = 4$ is rotated through $360^\\circ$ about the $x$-axis. Find the exact volume.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the curve",
          "workingLatex": "y = 2x^{1/2}",
          "explanation": "A square root curve scaled by factor $2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Volume formula",
          "workingLatex": "V = \\pi \\int_{0}^{4} (2\\sqrt{x})^{2}\\,dx",
          "explanation": "Square the radius function.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify integrand",
          "workingLatex": "4x",
          "explanation": "Squaring eliminates the square root.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set up integral",
          "workingLatex": "V = \\pi \\int_{0}^{4} 4x\\,dx",
          "explanation": "Linear integrand.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate",
          "workingLatex": "\\int 4x\\,dx = 2x^{2}",
          "explanation": "Power rule.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply limits",
          "workingLatex": "\\pi \\left[ 2x^{2} \\right]_{0}^{4}",
          "explanation": "Evaluate at $x = 0$ and $x = 4$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute $x = 4$",
          "workingLatex": "2 \\cdot 16 = 32",
          "explanation": "Upper limit.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Multiply by $\\pi$",
          "workingLatex": "V = 32\\pi",
          "explanation": "Exact volume.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Geometric shape",
          "workingLatex": "\\text{Paraboloid scaled by factor } 2",
          "explanation": "Twice the radius of $y = \\sqrt{x}$ doubles the squared integrand.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Compare with $y = \\sqrt{x}$",
          "workingLatex": "V = 4 \\times 8\\pi = 32\\pi",
          "explanation": "Scaling $y$ by $2$ scales volume by $4$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Units",
          "workingLatex": "\\text{cubic units}",
          "explanation": "Volume measurement.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Verify positivity",
          "workingLatex": "V > 0",
          "explanation": "As expected.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State answer",
          "workingLatex": "V = 32\\pi",
          "explanation": "Complete answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "Volume $= 32\\pi$ cubic units."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Volumes of revolution",
    "subtopicId": "fm.y1.pure.volumes-revolution",
    "questionDiagram": null,
    "id": "fm.y1.pure.volumes-revolution.q069",
    "tags": [
      "volumes-revolution",
      "quadratic",
      "between-curves",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "value",
    "questionText": "The finite region bounded by $y = x^{2} - 4x + 5$ and $y = 1$ is rotated through $360^\\circ$ about the $x$-axis. Find the exact volume.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find intersections",
          "workingLatex": "x^{2} - 4x + 5 = 1 \\Rightarrow x^{2} - 4x + 4 = 0",
          "explanation": "Set the curves equal to find the bounds.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Solve",
          "workingLatex": "(x - 2)^{2} = 0 \\Rightarrow x = 2",
          "explanation": "The curves touch at a single point, but the region between them on $[0, 2]$ is bounded by $x = 0$ as well.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Re-analyse bounds",
          "workingLatex": "x^{2} - 4x + 5 = 1 \\Rightarrow x = 2 \\text{ only; use } 0 \\leq x \\leq 2",
          "explanation": "On $[0, 2]$, the parabola $y = x^{2} - 4x + 5$ lies above $y = 1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Verify at $x = 0$",
          "workingLatex": "y = 5 > 1",
          "explanation": "The parabola is the outer curve.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set up integral",
          "workingLatex": "V = \\pi \\int_{0}^{2} \\left((x^{2}-4x+5)^{2} - 1\\right) dx",
          "explanation": "Outer radius from the parabola, inner radius $1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Expand outer radius squared",
          "workingLatex": "(x^{2}-4x+5)^{2} = x^{4} - 8x^{3} + 26x^{2} - 40x + 25",
          "explanation": "Careful expansion of the quadratic squared.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify integrand",
          "workingLatex": "x^{4} - 8x^{3} + 26x^{2} - 40x + 24",
          "explanation": "Subtract $1$ from the expansion.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Integrate",
          "workingLatex": "\\int = \\dfrac{x^{5}}{5} - 2x^{4} + \\dfrac{26x^{3}}{3} - 20x^{2} + 24x",
          "explanation": "Integrate term by term.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Evaluate at $x = 2$",
          "workingLatex": "\\dfrac{32}{5} - 32 + \\dfrac{208}{3} - 80 + 48 = \\dfrac{176}{15}",
          "explanation": "Substitute $x = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Evaluate at $x = 0$",
          "workingLatex": "0",
          "explanation": "Lower limit.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Multiply by $\\pi$",
          "workingLatex": "V = \\dfrac{176\\pi}{15}",
          "explanation": "Exact volume.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Check vertex",
          "workingLatex": "\\text{Vertex of parabola at } (2, 1)",
          "explanation": "The curves touch at the vertex where the parabola meets $y = 1$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State answer",
          "workingLatex": "V = \\dfrac{176\\pi}{15}",
          "explanation": "Complete answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "Volume $= \\dfrac{176\\pi}{15}$ cubic units."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Volumes of revolution",
    "subtopicId": "fm.y1.pure.volumes-revolution",
    "questionDiagram": null,
    "id": "fm.y1.pure.volumes-revolution.q070",
    "tags": [
      "volumes-revolution",
      "y-axis",
      "multi-part",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "value",
    "questionText": "(a) The region $R$ is bounded by $y = x^{2}$, $y = 4$, and the $y$-axis. Write down the integral for the volume when $R$ is rotated about the $y$-axis.\n(b) Evaluate the integral to find the exact volume.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "(a) Express $x$ in terms of $y$",
          "workingLatex": "x = y^{1/2}",
          "explanation": "For rotation about the $y$-axis, use $x$ as a function of $y$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "(a) Find $y$-bounds",
          "workingLatex": "y = x^{2} \\text{ with } x \\text{ from } 0 \\text{ to } 2 \\Rightarrow 0 \\leq y \\leq 4",
          "explanation": "The region spans from the axis to $y = 4$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "(a) Outer and inner radii",
          "workingLatex": "x_{\\text{outer}} = 2 \\text{ (from } y = 4, x = 2),\\; x_{\\text{inner}} = y^{1/2}",
          "explanation": "The line $y = 4$ gives outer radius $2$; the parabola gives inner radius $\\sqrt{y}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "(a) Volume integral",
          "workingLatex": "V = \\pi \\int_{0}^{4} \\left(4 - y\\right) dy",
          "explanation": "Outer radius squared $4$, minus inner radius squared $y$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "(b) Integrate",
          "workingLatex": "\\int (4 - y)\\,dy = 4y - \\dfrac{y^{2}}{2}",
          "explanation": "Polynomial integration.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "(b) Apply limits",
          "workingLatex": "\\pi \\left[ 4y - \\dfrac{y^{2}}{2} \\right]_{0}^{4}",
          "explanation": "Evaluate from $y = 0$ to $y = 4$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "(b) Substitute $y = 4$",
          "workingLatex": "16 - 8 = 8",
          "explanation": "Upper limit.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "(b) Multiply by $\\pi$",
          "workingLatex": "V = 8\\pi",
          "explanation": "Exact volume.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Geometric check",
          "workingLatex": "\\text{Equivalent to rotating between } x = 2 \\text{ and } x = \\sqrt{y}",
          "explanation": "Washer method about the $y$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Compare with $x$-axis rotation",
          "workingLatex": "\\text{Different axis gives a different solid}",
          "explanation": "The axis of rotation changes the volume entirely.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Units",
          "workingLatex": "\\text{cubic units}",
          "explanation": "Volume measurement.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Verify integrand",
          "workingLatex": "4 - y \\geq 0 \\text{ on } [0, 4]",
          "explanation": "Positive throughout.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State answers",
          "workingLatex": "(a) $V = \\pi\\int_{0}^{4}(4-y)\\,dy$; (b) $V = 8\\pi$",
          "explanation": "Both parts answered.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $V = \\pi\\int_{0}^{4}(4 - y)\\,dy$. (b) Volume $= 8\\pi$ cubic units."
    }
  }
];
