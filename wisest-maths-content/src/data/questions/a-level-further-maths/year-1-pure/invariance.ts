import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Invariant points and lines",
    "subtopicId": "fm.y1.pure.invariance",
    "questionDiagram": null,
    "id": "fm.y1.pure.invariance.q001",
    "tags": [
      "verify-point"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "The transformation $M = \\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}$ (reflection in the $x$-axis) is applied to the point $(3, 0)$. Is this point invariant?",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Invariant point test",
          "workingLatex": "\\mathbf{p} = M\\mathbf{p}",
          "explanation": "A point is invariant if the transformation leaves it unchanged.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up",
          "workingLatex": "M = \\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix},\\; \\mathbf{p} = \\begin{pmatrix} 3 \\\\ 0 \\end{pmatrix}",
          "explanation": "Matrix for reflection in the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute image",
          "workingLatex": "M\\mathbf{p} = \\begin{pmatrix} 3 \\\\ 0 \\end{pmatrix}",
          "explanation": "Multiply matrix by the position vector.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compare",
          "workingLatex": "(3, 0) = (3, 0)",
          "explanation": "Check whether the image equals the original.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Conclusion",
          "workingLatex": "\\text{Point is invariant}",
          "explanation": "State the result.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\text{Yes, } (3,0) \\text{ is invariant}",
          "explanation": "Final answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "Yes. $(3, 0)$ is an invariant point."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Invariant points and lines",
    "subtopicId": "fm.y1.pure.invariance",
    "questionDiagram": null,
    "id": "fm.y1.pure.invariance.q002",
    "tags": [
      "verify-point"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "The transformation $M = \\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}$ (reflection in the $x$-axis) is applied to the point $(0, 5)$. Is this point invariant?",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Invariant point test",
          "workingLatex": "\\mathbf{p} = M\\mathbf{p}",
          "explanation": "A point is invariant if the transformation leaves it unchanged.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up",
          "workingLatex": "M = \\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix},\\; \\mathbf{p} = \\begin{pmatrix} 0 \\\\ 5 \\end{pmatrix}",
          "explanation": "Matrix for reflection in the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute image",
          "workingLatex": "M\\mathbf{p} = \\begin{pmatrix} 0 \\\\ -5 \\end{pmatrix}",
          "explanation": "Multiply matrix by the position vector.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compare",
          "workingLatex": "(0, -5) \\neq (0, 5)",
          "explanation": "Check whether the image equals the original.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Conclusion",
          "workingLatex": "\\text{Point is not invariant}",
          "explanation": "State the result.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\text{No, } (0,5) \\text{ is not invariant}",
          "explanation": "Final answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "No. $(0, 5)$ is not invariant; its image is $(0, -5)$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Invariant points and lines",
    "subtopicId": "fm.y1.pure.invariance",
    "questionDiagram": null,
    "id": "fm.y1.pure.invariance.q003",
    "tags": [
      "verify-point"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "The transformation $M = \\begin{pmatrix} -1 & 0 \\\\ 0 & 1 \\end{pmatrix}$ (reflection in the $y$-axis) is applied to the point $(0, 4)$. Is this point invariant?",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Invariant point test",
          "workingLatex": "\\mathbf{p} = M\\mathbf{p}",
          "explanation": "A point is invariant if the transformation leaves it unchanged.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up",
          "workingLatex": "M = \\begin{pmatrix} -1 & 0 \\\\ 0 & 1 \\end{pmatrix},\\; \\mathbf{p} = \\begin{pmatrix} 0 \\\\ 4 \\end{pmatrix}",
          "explanation": "Matrix for reflection in the $y$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute image",
          "workingLatex": "M\\mathbf{p} = \\begin{pmatrix} 0 \\\\ 4 \\end{pmatrix}",
          "explanation": "Multiply matrix by the position vector.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compare",
          "workingLatex": "(0, 4) = (0, 4)",
          "explanation": "Check whether the image equals the original.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Conclusion",
          "workingLatex": "\\text{Point is invariant}",
          "explanation": "State the result.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\text{Yes, } (0,4) \\text{ is invariant}",
          "explanation": "Final answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "Yes. $(0, 4)$ is an invariant point."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Invariant points and lines",
    "subtopicId": "fm.y1.pure.invariance",
    "questionDiagram": null,
    "id": "fm.y1.pure.invariance.q004",
    "tags": [
      "verify-point"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "The transformation $M = \\begin{pmatrix} -1 & 0 \\\\ 0 & 1 \\end{pmatrix}$ (reflection in the $y$-axis) is applied to the point $(2, 3)$. Is this point invariant?",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Invariant point test",
          "workingLatex": "\\mathbf{p} = M\\mathbf{p}",
          "explanation": "A point is invariant if the transformation leaves it unchanged.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up",
          "workingLatex": "M = \\begin{pmatrix} -1 & 0 \\\\ 0 & 1 \\end{pmatrix},\\; \\mathbf{p} = \\begin{pmatrix} 2 \\\\ 3 \\end{pmatrix}",
          "explanation": "Matrix for reflection in the $y$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute image",
          "workingLatex": "M\\mathbf{p} = \\begin{pmatrix} -2 \\\\ 3 \\end{pmatrix}",
          "explanation": "Multiply matrix by the position vector.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compare",
          "workingLatex": "(-2, 3) \\neq (2, 3)",
          "explanation": "Check whether the image equals the original.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Conclusion",
          "workingLatex": "\\text{Point is not invariant}",
          "explanation": "State the result.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\text{No, } (2,3) \\text{ is not invariant}",
          "explanation": "Final answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "No. $(2, 3)$ is not invariant; its image is $(-2, 3)$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Invariant points and lines",
    "subtopicId": "fm.y1.pure.invariance",
    "questionDiagram": null,
    "id": "fm.y1.pure.invariance.q005",
    "tags": [
      "verify-point"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "The transformation $M = \\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$ (reflection in $y=x$) is applied to the point $(2, 2)$. Is this point invariant?",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Invariant point test",
          "workingLatex": "\\mathbf{p} = M\\mathbf{p}",
          "explanation": "A point is invariant if the transformation leaves it unchanged.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up",
          "workingLatex": "M = \\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix},\\; \\mathbf{p} = \\begin{pmatrix} 2 \\\\ 2 \\end{pmatrix}",
          "explanation": "Matrix for reflection in $y=x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute image",
          "workingLatex": "M\\mathbf{p} = \\begin{pmatrix} 2 \\\\ 2 \\end{pmatrix}",
          "explanation": "Multiply matrix by the position vector.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compare",
          "workingLatex": "(2, 2) = (2, 2)",
          "explanation": "Check whether the image equals the original.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Conclusion",
          "workingLatex": "\\text{Point is invariant}",
          "explanation": "State the result.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\text{Yes, } (2,2) \\text{ is invariant}",
          "explanation": "Final answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "Yes. $(2, 2)$ is an invariant point."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Invariant points and lines",
    "subtopicId": "fm.y1.pure.invariance",
    "questionDiagram": null,
    "id": "fm.y1.pure.invariance.q006",
    "tags": [
      "verify-point"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "The transformation $M = \\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$ (reflection in $y=x$) is applied to the point $(1, 2)$. Is this point invariant?",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Invariant point test",
          "workingLatex": "\\mathbf{p} = M\\mathbf{p}",
          "explanation": "A point is invariant if the transformation leaves it unchanged.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up",
          "workingLatex": "M = \\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix},\\; \\mathbf{p} = \\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix}",
          "explanation": "Matrix for reflection in $y=x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute image",
          "workingLatex": "M\\mathbf{p} = \\begin{pmatrix} 2 \\\\ 1 \\end{pmatrix}",
          "explanation": "Multiply matrix by the position vector.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compare",
          "workingLatex": "(2, 1) \\neq (1, 2)",
          "explanation": "Check whether the image equals the original.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Conclusion",
          "workingLatex": "\\text{Point is not invariant}",
          "explanation": "State the result.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\text{No, } (1,2) \\text{ is not invariant}",
          "explanation": "Final answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "No. $(1, 2)$ is not invariant; its image is $(2, 1)$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Invariant points and lines",
    "subtopicId": "fm.y1.pure.invariance",
    "questionDiagram": null,
    "id": "fm.y1.pure.invariance.q007",
    "tags": [
      "verify-point"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "The transformation $M = \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}$ (rotation $90^\\circ$ anticlockwise) is applied to the point $(0, 0)$. Is this point invariant?",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Invariant point test",
          "workingLatex": "\\mathbf{p} = M\\mathbf{p}",
          "explanation": "A point is invariant if the transformation leaves it unchanged.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up",
          "workingLatex": "M = \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix},\\; \\mathbf{p} = \\begin{pmatrix} 0 \\\\ 0 \\end{pmatrix}",
          "explanation": "Matrix for rotation $90^\\circ$ anticlockwise.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute image",
          "workingLatex": "M\\mathbf{p} = \\begin{pmatrix} 0 \\\\ 0 \\end{pmatrix}",
          "explanation": "Multiply matrix by the position vector.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compare",
          "workingLatex": "(0, 0) = (0, 0)",
          "explanation": "Check whether the image equals the original.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Conclusion",
          "workingLatex": "\\text{Point is invariant}",
          "explanation": "State the result.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\text{Yes, } (0,0) \\text{ is invariant}",
          "explanation": "Final answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "Yes. $(0, 0)$ is an invariant point."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Invariant points and lines",
    "subtopicId": "fm.y1.pure.invariance",
    "questionDiagram": null,
    "id": "fm.y1.pure.invariance.q008",
    "tags": [
      "verify-point"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "The transformation $M = \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}$ (rotation $90^\\circ$ anticlockwise) is applied to the point $(1, 0)$. Is this point invariant?",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Invariant point test",
          "workingLatex": "\\mathbf{p} = M\\mathbf{p}",
          "explanation": "A point is invariant if the transformation leaves it unchanged.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up",
          "workingLatex": "M = \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix},\\; \\mathbf{p} = \\begin{pmatrix} 1 \\\\ 0 \\end{pmatrix}",
          "explanation": "Matrix for rotation $90^\\circ$ anticlockwise.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute image",
          "workingLatex": "M\\mathbf{p} = \\begin{pmatrix} 0 \\\\ 1 \\end{pmatrix}",
          "explanation": "Multiply matrix by the position vector.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compare",
          "workingLatex": "(0, 1) \\neq (1, 0)",
          "explanation": "Check whether the image equals the original.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Conclusion",
          "workingLatex": "\\text{Point is not invariant}",
          "explanation": "State the result.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\text{No, } (1,0) \\text{ is not invariant}",
          "explanation": "Final answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "No. $(1, 0)$ is not invariant; its image is $(0, 1)$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Invariant points and lines",
    "subtopicId": "fm.y1.pure.invariance",
    "questionDiagram": null,
    "id": "fm.y1.pure.invariance.q009",
    "tags": [
      "verify-point"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "The transformation $M = \\begin{pmatrix} 2 & 0 \\\\ 0 & 2 \\end{pmatrix}$ (enlargement SF $2$) is applied to the point $(0, 0)$. Is this point invariant?",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Invariant point test",
          "workingLatex": "\\mathbf{p} = M\\mathbf{p}",
          "explanation": "A point is invariant if the transformation leaves it unchanged.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up",
          "workingLatex": "M = \\begin{pmatrix} 2 & 0 \\\\ 0 & 2 \\end{pmatrix},\\; \\mathbf{p} = \\begin{pmatrix} 0 \\\\ 0 \\end{pmatrix}",
          "explanation": "Matrix for enlargement SF $2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute image",
          "workingLatex": "M\\mathbf{p} = \\begin{pmatrix} 0 \\\\ 0 \\end{pmatrix}",
          "explanation": "Multiply matrix by the position vector.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compare",
          "workingLatex": "(0, 0) = (0, 0)",
          "explanation": "Check whether the image equals the original.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Conclusion",
          "workingLatex": "\\text{Point is invariant}",
          "explanation": "State the result.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\text{Yes, } (0,0) \\text{ is invariant}",
          "explanation": "Final answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "Yes. $(0, 0)$ is an invariant point."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Invariant points and lines",
    "subtopicId": "fm.y1.pure.invariance",
    "questionDiagram": null,
    "id": "fm.y1.pure.invariance.q010",
    "tags": [
      "verify-point"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "The transformation $M = \\begin{pmatrix} 2 & 0 \\\\ 0 & 2 \\end{pmatrix}$ (enlargement SF $2$) is applied to the point $(1, 1)$. Is this point invariant?",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Invariant point test",
          "workingLatex": "\\mathbf{p} = M\\mathbf{p}",
          "explanation": "A point is invariant if the transformation leaves it unchanged.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up",
          "workingLatex": "M = \\begin{pmatrix} 2 & 0 \\\\ 0 & 2 \\end{pmatrix},\\; \\mathbf{p} = \\begin{pmatrix} 1 \\\\ 1 \\end{pmatrix}",
          "explanation": "Matrix for enlargement SF $2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute image",
          "workingLatex": "M\\mathbf{p} = \\begin{pmatrix} 2 \\\\ 2 \\end{pmatrix}",
          "explanation": "Multiply matrix by the position vector.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compare",
          "workingLatex": "(2, 2) \\neq (1, 1)",
          "explanation": "Check whether the image equals the original.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Conclusion",
          "workingLatex": "\\text{Point is not invariant}",
          "explanation": "State the result.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\text{No, } (1,1) \\text{ is not invariant}",
          "explanation": "Final answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "No. $(1, 1)$ is not invariant; its image is $(2, 2)$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Invariant points and lines",
    "subtopicId": "fm.y1.pure.invariance",
    "questionDiagram": null,
    "id": "fm.y1.pure.invariance.q011",
    "tags": [
      "origin"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Show that the origin is an invariant point of the transformation $M = \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}$ (rotation $90^\\circ$ anticlockwise).",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Test the origin",
          "workingLatex": "M\\begin{pmatrix} 0 \\\\ 0 \\end{pmatrix}",
          "explanation": "Check whether $(0,0)$ is fixed.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Multiply",
          "workingLatex": "\\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}\\begin{pmatrix} 0 \\\\ 0 \\end{pmatrix} = \\begin{pmatrix} 0 \\\\ 0 \\end{pmatrix}",
          "explanation": "Any linear transformation through the origin fixes $O$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Reason",
          "workingLatex": "0 \\cdot a + 0 \\cdot b = 0,\\; 0 \\cdot c + 0 \\cdot d = 0",
          "explanation": "Both components remain zero.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "General principle",
          "workingLatex": "\\text{Linear maps fixing } O \\text{ always fix the origin}",
          "explanation": "The zero vector is always invariant.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Answer",
          "workingLatex": "(0,0) \\text{ is invariant}",
          "explanation": "The origin is invariant.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Note",
          "workingLatex": "\\text{Other invariant points may also exist}",
          "explanation": "But the origin is always one of them.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(0,0)$ is always invariant because $M\\begin{pmatrix}0\\\\0\\end{pmatrix} = \\begin{pmatrix}0\\\\0\\end{pmatrix}$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Invariant points and lines",
    "subtopicId": "fm.y1.pure.invariance",
    "questionDiagram": null,
    "id": "fm.y1.pure.invariance.q012",
    "tags": [
      "origin"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Show that the origin is an invariant point of the transformation $M = \\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}$ (reflection in the $x$-axis).",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Test the origin",
          "workingLatex": "M\\begin{pmatrix} 0 \\\\ 0 \\end{pmatrix}",
          "explanation": "Check whether $(0,0)$ is fixed.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Multiply",
          "workingLatex": "\\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}\\begin{pmatrix} 0 \\\\ 0 \\end{pmatrix} = \\begin{pmatrix} 0 \\\\ 0 \\end{pmatrix}",
          "explanation": "Any linear transformation through the origin fixes $O$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Reason",
          "workingLatex": "0 \\cdot a + 0 \\cdot b = 0,\\; 0 \\cdot c + 0 \\cdot d = 0",
          "explanation": "Both components remain zero.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "General principle",
          "workingLatex": "\\text{Linear maps fixing } O \\text{ always fix the origin}",
          "explanation": "The zero vector is always invariant.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Answer",
          "workingLatex": "(0,0) \\text{ is invariant}",
          "explanation": "The origin is invariant.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Note",
          "workingLatex": "\\text{Other invariant points may also exist}",
          "explanation": "But the origin is always one of them.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(0,0)$ is always invariant because $M\\begin{pmatrix}0\\\\0\\end{pmatrix} = \\begin{pmatrix}0\\\\0\\end{pmatrix}$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Invariant points and lines",
    "subtopicId": "fm.y1.pure.invariance",
    "questionDiagram": null,
    "id": "fm.y1.pure.invariance.q013",
    "tags": [
      "origin"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Show that the origin is an invariant point of the transformation $M = \\begin{pmatrix} 1 & 2 \\\\ 0 & 1 \\end{pmatrix}$ (shear factor $2$ parallel to $x$).",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Test the origin",
          "workingLatex": "M\\begin{pmatrix} 0 \\\\ 0 \\end{pmatrix}",
          "explanation": "Check whether $(0,0)$ is fixed.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Multiply",
          "workingLatex": "\\begin{pmatrix} 1 & 2 \\\\ 0 & 1 \\end{pmatrix}\\begin{pmatrix} 0 \\\\ 0 \\end{pmatrix} = \\begin{pmatrix} 0 \\\\ 0 \\end{pmatrix}",
          "explanation": "Any linear transformation through the origin fixes $O$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Reason",
          "workingLatex": "0 \\cdot a + 0 \\cdot b = 0,\\; 0 \\cdot c + 0 \\cdot d = 0",
          "explanation": "Both components remain zero.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "General principle",
          "workingLatex": "\\text{Linear maps fixing } O \\text{ always fix the origin}",
          "explanation": "The zero vector is always invariant.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Answer",
          "workingLatex": "(0,0) \\text{ is invariant}",
          "explanation": "The origin is invariant.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Note",
          "workingLatex": "\\text{Other invariant points may also exist}",
          "explanation": "But the origin is always one of them.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(0,0)$ is always invariant because $M\\begin{pmatrix}0\\\\0\\end{pmatrix} = \\begin{pmatrix}0\\\\0\\end{pmatrix}$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Invariant points and lines",
    "subtopicId": "fm.y1.pure.invariance",
    "questionDiagram": null,
    "id": "fm.y1.pure.invariance.q014",
    "tags": [
      "origin"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Show that the origin is an invariant point of the transformation $M = \\begin{pmatrix} 3 & 0 \\\\ 0 & 3 \\end{pmatrix}$ (enlargement SF $3$).",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Test the origin",
          "workingLatex": "M\\begin{pmatrix} 0 \\\\ 0 \\end{pmatrix}",
          "explanation": "Check whether $(0,0)$ is fixed.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Multiply",
          "workingLatex": "\\begin{pmatrix} 3 & 0 \\\\ 0 & 3 \\end{pmatrix}\\begin{pmatrix} 0 \\\\ 0 \\end{pmatrix} = \\begin{pmatrix} 0 \\\\ 0 \\end{pmatrix}",
          "explanation": "Any linear transformation through the origin fixes $O$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Reason",
          "workingLatex": "0 \\cdot a + 0 \\cdot b = 0,\\; 0 \\cdot c + 0 \\cdot d = 0",
          "explanation": "Both components remain zero.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "General principle",
          "workingLatex": "\\text{Linear maps fixing } O \\text{ always fix the origin}",
          "explanation": "The zero vector is always invariant.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Answer",
          "workingLatex": "(0,0) \\text{ is invariant}",
          "explanation": "The origin is invariant.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Note",
          "workingLatex": "\\text{Other invariant points may also exist}",
          "explanation": "But the origin is always one of them.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(0,0)$ is always invariant because $M\\begin{pmatrix}0\\\\0\\end{pmatrix} = \\begin{pmatrix}0\\\\0\\end{pmatrix}$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Invariant points and lines",
    "subtopicId": "fm.y1.pure.invariance",
    "questionDiagram": null,
    "id": "fm.y1.pure.invariance.q015",
    "tags": [
      "invariant-points"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Find all invariant points of the transformation $M = \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}$ (rotation $90^\\circ$ anticlockwise).",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Condition",
          "workingLatex": "(M - I)\\begin{pmatrix}x\\\\y\\end{pmatrix} = \\mathbf{0}",
          "explanation": "Invariant points satisfy $\\mathbf{p} = M\\mathbf{p}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Equations",
          "workingLatex": "\\begin{cases}-1x + -1y = 0\\\\1x + -1y = 0\\end{cases}",
          "explanation": "Rearrange to a homogeneous system.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Determinant",
          "workingLatex": "\\det(M - I) = 2",
          "explanation": "Tests whether non-trivial solutions exist.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve",
          "workingLatex": "\\det(M-I) = 2 \\neq 0",
          "explanation": "Only the trivial solution.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Conclusion",
          "workingLatex": "(0,0) \\text{ only}",
          "explanation": "No other fixed points.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "The only invariant point is $(0,0)$.",
          "explanation": "Complete description of invariant points.",
          "diagram": null
        }
      ],
      "finalAnswer": "The only invariant point is $(0,0)$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Invariant points and lines",
    "subtopicId": "fm.y1.pure.invariance",
    "questionDiagram": null,
    "id": "fm.y1.pure.invariance.q016",
    "tags": [
      "invariant-points"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Find all invariant points of the transformation $M = \\begin{pmatrix} -1 & 0 \\\\ 0 & -1 \\end{pmatrix}$ (rotation $180^\\circ$).",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Condition",
          "workingLatex": "(M - I)\\begin{pmatrix}x\\\\y\\end{pmatrix} = \\mathbf{0}",
          "explanation": "Invariant points satisfy $\\mathbf{p} = M\\mathbf{p}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Equations",
          "workingLatex": "\\begin{cases}-2x + 0y = 0\\\\0x + -2y = 0\\end{cases}",
          "explanation": "Rearrange to a homogeneous system.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Determinant",
          "workingLatex": "\\det(M - I) = 4",
          "explanation": "Tests whether non-trivial solutions exist.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve",
          "workingLatex": "\\det(M-I) = 4 \\neq 0",
          "explanation": "Non-singular $M-I$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Note",
          "workingLatex": "\\text{Lines through } O \\text{ are invariant, but only } O \\text{ is fixed}",
          "explanation": "Distinguish concepts.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "The only invariant point is $(0,0)$.",
          "explanation": "Complete description of invariant points.",
          "diagram": null
        }
      ],
      "finalAnswer": "The only invariant point is $(0,0)$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Invariant points and lines",
    "subtopicId": "fm.y1.pure.invariance",
    "questionDiagram": null,
    "id": "fm.y1.pure.invariance.q017",
    "tags": [
      "invariant-points"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Find all invariant points of the transformation $M = \\begin{pmatrix} 2 & 0 \\\\ 0 & 2 \\end{pmatrix}$ (enlargement SF $2$).",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Condition",
          "workingLatex": "(M - I)\\begin{pmatrix}x\\\\y\\end{pmatrix} = \\mathbf{0}",
          "explanation": "Invariant points satisfy $\\mathbf{p} = M\\mathbf{p}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Equations",
          "workingLatex": "\\begin{cases}1x + 0y = 0\\\\0x + 1y = 0\\end{cases}",
          "explanation": "Rearrange to a homogeneous system.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Determinant",
          "workingLatex": "\\det(M - I) = 1",
          "explanation": "Tests whether non-trivial solutions exist.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Equations",
          "workingLatex": "x = 0,\\; y = 0",
          "explanation": "Both give the origin.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Centre",
          "workingLatex": "\\text{Centre of enlargement is } O",
          "explanation": "Only the centre is fixed.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "The only invariant point is $(0,0)$.",
          "explanation": "Complete description of invariant points.",
          "diagram": null
        }
      ],
      "finalAnswer": "The only invariant point is $(0,0)$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Invariant points and lines",
    "subtopicId": "fm.y1.pure.invariance",
    "questionDiagram": null,
    "id": "fm.y1.pure.invariance.q018",
    "tags": [
      "invariant-points"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Find all invariant points of the transformation $M = \\begin{pmatrix} 0 & 1 \\\\ -1 & 0 \\end{pmatrix}$ (rotation $90^\\circ$ clockwise).",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Condition",
          "workingLatex": "(M - I)\\begin{pmatrix}x\\\\y\\end{pmatrix} = \\mathbf{0}",
          "explanation": "Invariant points satisfy $\\mathbf{p} = M\\mathbf{p}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Equations",
          "workingLatex": "\\begin{cases}-1x + 1y = 0\\\\-1x + -1y = 0\\end{cases}",
          "explanation": "Rearrange to a homogeneous system.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Determinant",
          "workingLatex": "\\det(M - I) = 2",
          "explanation": "Tests whether non-trivial solutions exist.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Determinant",
          "workingLatex": "\\det(M-I) = 2",
          "explanation": "Unique solution.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Answer",
          "workingLatex": "(0,0)",
          "explanation": "Origin only.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "The only invariant point is $(0,0)$.",
          "explanation": "Complete description of invariant points.",
          "diagram": null
        }
      ],
      "finalAnswer": "The only invariant point is $(0,0)$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Invariant points and lines",
    "subtopicId": "fm.y1.pure.invariance",
    "questionDiagram": null,
    "id": "fm.y1.pure.invariance.q019",
    "tags": [
      "invariant-points"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Find all invariant points of the transformation $M = \\begin{pmatrix} 3 & 0 \\\\ 0 & -3 \\end{pmatrix}$ (enlargement SF $3$ in $x$, SF $-3$ in $y$).",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Condition",
          "workingLatex": "(M - I)\\begin{pmatrix}x\\\\y\\end{pmatrix} = \\mathbf{0}",
          "explanation": "Invariant points satisfy $\\mathbf{p} = M\\mathbf{p}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Equations",
          "workingLatex": "\\begin{cases}2x + 0y = 0\\\\0x + -4y = 0\\end{cases}",
          "explanation": "Rearrange to a homogeneous system.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Determinant",
          "workingLatex": "\\det(M - I) = -8",
          "explanation": "Tests whether non-trivial solutions exist.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve",
          "workingLatex": "3x = x,\\; -3y = y \\Rightarrow x=0, y=0",
          "explanation": "Both coordinates must be zero.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Answer",
          "workingLatex": "(0,0)",
          "explanation": "Origin only.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "The only invariant point is $(0,0)$.",
          "explanation": "Complete description of invariant points.",
          "diagram": null
        }
      ],
      "finalAnswer": "The only invariant point is $(0,0)$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Invariant points and lines",
    "subtopicId": "fm.y1.pure.invariance",
    "questionDiagram": null,
    "id": "fm.y1.pure.invariance.q020",
    "tags": [
      "identity"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Find all invariant points of the transformation $M = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$ (identity).",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Condition",
          "workingLatex": "(M - I)\\begin{pmatrix}x\\\\y\\end{pmatrix} = \\mathbf{0}",
          "explanation": "Invariant points satisfy $\\mathbf{p} = M\\mathbf{p}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Equations",
          "workingLatex": "\\begin{cases}0x + 0y = 0\\\\0x + 0y = 0\\end{cases}",
          "explanation": "Rearrange to a homogeneous system.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Determinant",
          "workingLatex": "\\det(M - I) = 0",
          "explanation": "Tests whether non-trivial solutions exist.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Equations",
          "workingLatex": "0x + 0y = 0",
          "explanation": "Trivially satisfied by all points.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Answer",
          "workingLatex": "\\text{All points } (x,y)",
          "explanation": "Identity fixes everything.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "Every point in the plane is invariant.",
          "explanation": "Complete description of invariant points.",
          "diagram": null
        }
      ],
      "finalAnswer": "Every point in the plane is invariant."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Invariant points and lines",
    "subtopicId": "fm.y1.pure.invariance",
    "questionDiagram": null,
    "id": "fm.y1.pure.invariance.q021",
    "tags": [
      "invariant-points"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Find all invariant points of the transformation $M = \\begin{pmatrix} 0 & -1 \\\\ -1 & 0 \\end{pmatrix}$ (rotation $90^\\circ$ anticlockwise about a different centre — but through $O$).",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Condition",
          "workingLatex": "(M - I)\\begin{pmatrix}x\\\\y\\end{pmatrix} = \\mathbf{0}",
          "explanation": "Invariant points satisfy $\\mathbf{p} = M\\mathbf{p}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Equations",
          "workingLatex": "\\begin{cases}-1x + -1y = 0\\\\-1x + -1y = 0\\end{cases}",
          "explanation": "Rearrange to a homogeneous system.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Determinant",
          "workingLatex": "\\det(M - I) = 0",
          "explanation": "Tests whether non-trivial solutions exist.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check",
          "workingLatex": "\\det(M-I) = 2",
          "explanation": "Only origin.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify",
          "workingLatex": "(1,0) \\mapsto (0,-1) \\neq (1,0)",
          "explanation": "Non-origin points move.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "The only invariant point is $(0,0)$.",
          "explanation": "Complete description of invariant points.",
          "diagram": null
        }
      ],
      "finalAnswer": "The only invariant point is $(0,0)$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Invariant points and lines",
    "subtopicId": "fm.y1.pure.invariance",
    "questionDiagram": null,
    "id": "fm.y1.pure.invariance.q022",
    "tags": [
      "invariant-points"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Find all invariant points of the transformation $M = \\begin{pmatrix} -2 & 0 \\\\ 0 & -2 \\end{pmatrix}$ (enlargement SF $-2$).",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Condition",
          "workingLatex": "(M - I)\\begin{pmatrix}x\\\\y\\end{pmatrix} = \\mathbf{0}",
          "explanation": "Invariant points satisfy $\\mathbf{p} = M\\mathbf{p}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Equations",
          "workingLatex": "\\begin{cases}-3x + 0y = 0\\\\0x + -3y = 0\\end{cases}",
          "explanation": "Rearrange to a homogeneous system.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Determinant",
          "workingLatex": "\\det(M - I) = 9",
          "explanation": "Tests whether non-trivial solutions exist.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve",
          "workingLatex": "-3x = 0,\\; -3y = 0",
          "explanation": "Only origin.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Answer",
          "workingLatex": "(0,0)",
          "explanation": "Centre of enlargement.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "The only invariant point is $(0,0)$.",
          "explanation": "Complete description of invariant points.",
          "diagram": null
        }
      ],
      "finalAnswer": "The only invariant point is $(0,0)$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Invariant points and lines",
    "subtopicId": "fm.y1.pure.invariance",
    "questionDiagram": null,
    "id": "fm.y1.pure.invariance.q023",
    "tags": [
      "line-of-invariant-points"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find the line of invariant points for $M = \\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}$ (reflection in the $x$-axis).",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Definition",
          "workingLatex": "\\text{Every point on the line is fixed by } M",
          "explanation": "A line of invariant points is a 1D set of fixed points.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up",
          "workingLatex": "(M-I)\\mathbf{p} = \\mathbf{0}",
          "explanation": "All invariant points satisfy this.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve system",
          "workingLatex": "\\det(M-I) = 0",
          "explanation": "Non-trivial solutions form a line through the origin.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Line equation",
          "workingLatex": "y = 0",
          "explanation": "Equation of the line of invariant points.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify a point on the line",
          "workingLatex": "\\text{Choose a point on the line and confirm } M\\mathbf{p}=\\mathbf{p}",
          "explanation": "Algebraic check.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify a point off the line",
          "workingLatex": "\\text{A point not on the line moves}",
          "explanation": "Only the line consists entirely of fixed points.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Geometric meaning",
          "workingLatex": "The line of invariant points is the $x$-axis ($y = 0$). Every point on this axis is fixed.",
          "explanation": "Connect to the transformation geometry.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "The line of invariant points is the $x$-axis ($y = 0$). Every point on this axis is fixed.",
          "explanation": "The line of invariant points.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Definition",
          "workingLatex": "\\mathbf{p} = M\\mathbf{p}",
          "explanation": "Invariant point: the transformation fixes the point.",
          "diagram": null
        }
      ],
      "finalAnswer": "The line of invariant points is the $x$-axis ($y = 0$). Every point on this axis is fixed."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Invariant points and lines",
    "subtopicId": "fm.y1.pure.invariance",
    "questionDiagram": null,
    "id": "fm.y1.pure.invariance.q024",
    "tags": [
      "line-of-invariant-points"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find the line of invariant points for $M = \\begin{pmatrix} -1 & 0 \\\\ 0 & 1 \\end{pmatrix}$ (reflection in the $y$-axis).",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Definition",
          "workingLatex": "\\text{Every point on the line is fixed by } M",
          "explanation": "A line of invariant points is a 1D set of fixed points.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up",
          "workingLatex": "(M-I)\\mathbf{p} = \\mathbf{0}",
          "explanation": "All invariant points satisfy this.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve system",
          "workingLatex": "\\det(M-I) = 0",
          "explanation": "Non-trivial solutions form a line through the origin.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Line equation",
          "workingLatex": "x = 0",
          "explanation": "Equation of the line of invariant points.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify a point on the line",
          "workingLatex": "\\text{Choose a point on the line and confirm } M\\mathbf{p}=\\mathbf{p}",
          "explanation": "Algebraic check.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify a point off the line",
          "workingLatex": "\\text{A point not on the line moves}",
          "explanation": "Only the line consists entirely of fixed points.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Geometric meaning",
          "workingLatex": "The line of invariant points is the $y$-axis ($x = 0$).",
          "explanation": "Connect to the transformation geometry.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "The line of invariant points is the $y$-axis ($x = 0$).",
          "explanation": "The line of invariant points.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Definition",
          "workingLatex": "\\mathbf{p} = M\\mathbf{p}",
          "explanation": "Invariant point: the transformation fixes the point.",
          "diagram": null
        }
      ],
      "finalAnswer": "The line of invariant points is the $y$-axis ($x = 0$)."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Invariant points and lines",
    "subtopicId": "fm.y1.pure.invariance",
    "questionDiagram": null,
    "id": "fm.y1.pure.invariance.q025",
    "tags": [
      "line-of-invariant-points"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find the line of invariant points for $M = \\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$ (reflection in $y=x$).",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Definition",
          "workingLatex": "\\text{Every point on the line is fixed by } M",
          "explanation": "A line of invariant points is a 1D set of fixed points.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up",
          "workingLatex": "(M-I)\\mathbf{p} = \\mathbf{0}",
          "explanation": "All invariant points satisfy this.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve system",
          "workingLatex": "\\det(M-I) = 0",
          "explanation": "Non-trivial solutions form a line through the origin.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Line equation",
          "workingLatex": "y = x",
          "explanation": "Equation of the line of invariant points.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify a point on the line",
          "workingLatex": "\\text{Choose a point on the line and confirm } M\\mathbf{p}=\\mathbf{p}",
          "explanation": "Algebraic check.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify a point off the line",
          "workingLatex": "\\text{A point not on the line moves}",
          "explanation": "Only the line consists entirely of fixed points.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Geometric meaning",
          "workingLatex": "The line of invariant points is $y = x$ (the mirror line).",
          "explanation": "Connect to the transformation geometry.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "The line of invariant points is $y = x$ (the mirror line).",
          "explanation": "The line of invariant points.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Definition",
          "workingLatex": "\\mathbf{p} = M\\mathbf{p}",
          "explanation": "Invariant point: the transformation fixes the point.",
          "diagram": null
        }
      ],
      "finalAnswer": "The line of invariant points is $y = x$ (the mirror line)."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Invariant points and lines",
    "subtopicId": "fm.y1.pure.invariance",
    "questionDiagram": null,
    "id": "fm.y1.pure.invariance.q026",
    "tags": [
      "line-of-invariant-points"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find the line of invariant points for $M = \\begin{pmatrix} 0 & -1 \\\\ -1 & 0 \\end{pmatrix}$ (reflection in $y=-x$).",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Definition",
          "workingLatex": "\\text{Every point on the line is fixed by } M",
          "explanation": "A line of invariant points is a 1D set of fixed points.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up",
          "workingLatex": "(M-I)\\mathbf{p} = \\mathbf{0}",
          "explanation": "All invariant points satisfy this.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve system",
          "workingLatex": "\\det(M-I) = 0",
          "explanation": "Non-trivial solutions form a line through the origin.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Line equation",
          "workingLatex": "y = -x",
          "explanation": "Equation of the line of invariant points.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify a point on the line",
          "workingLatex": "\\text{Choose a point on the line and confirm } M\\mathbf{p}=\\mathbf{p}",
          "explanation": "Algebraic check.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify a point off the line",
          "workingLatex": "\\text{A point not on the line moves}",
          "explanation": "Only the line consists entirely of fixed points.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Geometric meaning",
          "workingLatex": "The line of invariant points is $y = -x$.",
          "explanation": "Connect to the transformation geometry.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "The line of invariant points is $y = -x$.",
          "explanation": "The line of invariant points.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Definition",
          "workingLatex": "\\mathbf{p} = M\\mathbf{p}",
          "explanation": "Invariant point: the transformation fixes the point.",
          "diagram": null
        }
      ],
      "finalAnswer": "The line of invariant points is $y = -x$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Invariant points and lines",
    "subtopicId": "fm.y1.pure.invariance",
    "questionDiagram": null,
    "id": "fm.y1.pure.invariance.q027",
    "tags": [
      "line-of-invariant-points"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find the line of invariant points for $M = \\begin{pmatrix} 1 & 2 \\\\ 2 & 4 \\end{pmatrix}$ (reflection in $y=2x$ (scaled matrix)).",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Definition",
          "workingLatex": "\\text{Every point on the line is fixed by } M",
          "explanation": "A line of invariant points is a 1D set of fixed points.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up",
          "workingLatex": "(M-I)\\mathbf{p} = \\mathbf{0}",
          "explanation": "All invariant points satisfy this.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve system",
          "workingLatex": "\\det(M-I) = 0",
          "explanation": "Non-trivial solutions form a line through the origin.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Line equation",
          "workingLatex": "y = 2x",
          "explanation": "Equation of the line of invariant points.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify a point on the line",
          "workingLatex": "\\text{Choose a point on the line and confirm } M\\mathbf{p}=\\mathbf{p}",
          "explanation": "Algebraic check.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify a point off the line",
          "workingLatex": "\\text{A point not on the line moves}",
          "explanation": "Only the line consists entirely of fixed points.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Geometric meaning",
          "workingLatex": "The line of invariant points is $y = 2x$.",
          "explanation": "Connect to the transformation geometry.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "The line of invariant points is $y = 2x$.",
          "explanation": "The line of invariant points.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Definition",
          "workingLatex": "\\mathbf{p} = M\\mathbf{p}",
          "explanation": "Invariant point: the transformation fixes the point.",
          "diagram": null
        }
      ],
      "finalAnswer": "The line of invariant points is $y = 2x$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Invariant points and lines",
    "subtopicId": "fm.y1.pure.invariance",
    "questionDiagram": null,
    "id": "fm.y1.pure.invariance.q028",
    "tags": [
      "line-of-invariant-points"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find the line of invariant points for $M = \\begin{pmatrix} 2 & -1 \\\\ -1 & 2 \\end{pmatrix}$ (reflection in a line through $O$).",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Definition",
          "workingLatex": "\\text{Every point on the line is fixed by } M",
          "explanation": "A line of invariant points is a 1D set of fixed points.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up",
          "workingLatex": "(M-I)\\mathbf{p} = \\mathbf{0}",
          "explanation": "All invariant points satisfy this.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve system",
          "workingLatex": "\\det(M-I) = 0",
          "explanation": "Non-trivial solutions form a line through the origin.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Line equation",
          "workingLatex": "y = 2x",
          "explanation": "Equation of the line of invariant points.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify a point on the line",
          "workingLatex": "\\text{Choose a point on the line and confirm } M\\mathbf{p}=\\mathbf{p}",
          "explanation": "Algebraic check.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify a point off the line",
          "workingLatex": "\\text{A point not on the line moves}",
          "explanation": "Only the line consists entirely of fixed points.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Geometric meaning",
          "workingLatex": "The line of invariant points is $y = 2x$ (verify: matrix represents reflection in this line).",
          "explanation": "Connect to the transformation geometry.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "The line of invariant points is $y = 2x$ (verify: matrix represents reflection in this line).",
          "explanation": "The line of invariant points.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Definition",
          "workingLatex": "\\mathbf{p} = M\\mathbf{p}",
          "explanation": "Invariant point: the transformation fixes the point.",
          "diagram": null
        }
      ],
      "finalAnswer": "The line of invariant points is $y = 2x$ (verify: matrix represents reflection in this line)."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Invariant points and lines",
    "subtopicId": "fm.y1.pure.invariance",
    "questionDiagram": null,
    "id": "fm.y1.pure.invariance.q029",
    "tags": [
      "line-of-invariant-points"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find the line of invariant points for $M = \\begin{pmatrix} 3 & 4 \\\\ 4 & -3 \\end{pmatrix}$ (reflection in $y = -\\frac{3}{4}x$).",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Definition",
          "workingLatex": "\\text{Every point on the line is fixed by } M",
          "explanation": "A line of invariant points is a 1D set of fixed points.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up",
          "workingLatex": "(M-I)\\mathbf{p} = \\mathbf{0}",
          "explanation": "All invariant points satisfy this.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve system",
          "workingLatex": "\\det(M-I) = 0",
          "explanation": "Non-trivial solutions form a line through the origin.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Line equation",
          "workingLatex": "4y = -3x",
          "explanation": "Equation of the line of invariant points.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify a point on the line",
          "workingLatex": "\\text{Choose a point on the line and confirm } M\\mathbf{p}=\\mathbf{p}",
          "explanation": "Algebraic check.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify a point off the line",
          "workingLatex": "\\text{A point not on the line moves}",
          "explanation": "Only the line consists entirely of fixed points.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Geometric meaning",
          "workingLatex": "The line of invariant points satisfies $4y + 3x = 0$.",
          "explanation": "Connect to the transformation geometry.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "The line of invariant points satisfies $4y + 3x = 0$.",
          "explanation": "The line of invariant points.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Definition",
          "workingLatex": "\\mathbf{p} = M\\mathbf{p}",
          "explanation": "Invariant point: the transformation fixes the point.",
          "diagram": null
        }
      ],
      "finalAnswer": "The line of invariant points satisfies $4y + 3x = 0$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Invariant points and lines",
    "subtopicId": "fm.y1.pure.invariance",
    "questionDiagram": null,
    "id": "fm.y1.pure.invariance.q030",
    "tags": [
      "line-of-invariant-points"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find the line of invariant points for $M = \\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$ (reflection in $y=x$).",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Definition",
          "workingLatex": "\\text{Every point on the line is fixed by } M",
          "explanation": "A line of invariant points is a 1D set of fixed points.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up",
          "workingLatex": "(M-I)\\mathbf{p} = \\mathbf{0}",
          "explanation": "All invariant points satisfy this.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve system",
          "workingLatex": "\\det(M-I) = 0",
          "explanation": "Non-trivial solutions form a line through the origin.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Line equation",
          "workingLatex": "y = x",
          "explanation": "Equation of the line of invariant points.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify a point on the line",
          "workingLatex": "\\text{Choose a point on the line and confirm } M\\mathbf{p}=\\mathbf{p}",
          "explanation": "Algebraic check.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify a point off the line",
          "workingLatex": "\\text{A point not on the line moves}",
          "explanation": "Only the line consists entirely of fixed points.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Geometric meaning",
          "workingLatex": "Every point on $y=x$ is fixed; e.g. $(3,3) \\mapsto (3,3)$ but $(1,0) \\mapsto (0,1)$.",
          "explanation": "Connect to the transformation geometry.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "Every point on $y=x$ is fixed; e.g. $(3,3) \\mapsto (3,3)$ but $(1,0) \\mapsto (0,1)$.",
          "explanation": "The line of invariant points.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Definition",
          "workingLatex": "\\mathbf{p} = M\\mathbf{p}",
          "explanation": "Invariant point: the transformation fixes the point.",
          "diagram": null
        }
      ],
      "finalAnswer": "Every point on $y=x$ is fixed; e.g. $(3,3) \\mapsto (3,3)$ but $(1,0) \\mapsto (0,1)$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Invariant points and lines",
    "subtopicId": "fm.y1.pure.invariance",
    "questionDiagram": null,
    "id": "fm.y1.pure.invariance.q031",
    "tags": [
      "invariant-line"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find the invariant line(s) through the origin for $M = \\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}$ (reflection in the $x$-axis).",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Definition",
          "workingLatex": "\\text{The line maps to itself as a set}",
          "explanation": "An invariant line: every point on it maps to another point on the same line.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Direction vector",
          "workingLatex": "\\mathbf{d} = t\\begin{pmatrix}1\\\\m\\end{pmatrix}",
          "explanation": "Parametrise a line through the origin.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Condition",
          "workingLatex": "M\\mathbf{d} = \\lambda\\mathbf{d}",
          "explanation": "The direction is an eigenvector of $M$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve",
          "workingLatex": "Eigenvectors: $(1,0)$ with $\\lambda=1$ and $(0,1)$ with $\\lambda=-1$.",
          "explanation": "Find directions preserved by the transformation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Line equation",
          "workingLatex": "The $x$-axis ($y=0$) and the $y$-axis ($x=0$) are both invariant lines.",
          "explanation": "Equation of the invariant line through the origin.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Test a point",
          "workingLatex": "\\text{Image of a point on the line lies on the line}",
          "explanation": "Confirm the line is preserved.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Distinguish",
          "workingLatex": "\\text{Points on the line need not be fixed individually}",
          "explanation": "Invariant line $\\neq$ line of invariant points in general.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "The $x$-axis ($y=0$) and the $y$-axis ($x=0$) are both invariant lines.",
          "explanation": "Invariant line(s) through the origin.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Definition",
          "workingLatex": "\\mathbf{p} = M\\mathbf{p}",
          "explanation": "Invariant point: the transformation fixes the point.",
          "diagram": null
        }
      ],
      "finalAnswer": "The $x$-axis ($y=0$) and the $y$-axis ($x=0$) are both invariant lines."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Invariant points and lines",
    "subtopicId": "fm.y1.pure.invariance",
    "questionDiagram": null,
    "id": "fm.y1.pure.invariance.q032",
    "tags": [
      "invariant-line"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find the invariant line(s) through the origin for $M = \\begin{pmatrix} -1 & 0 \\\\ 0 & -1 \\end{pmatrix}$ (rotation $180^\\circ$ / enlargement SF $-1$).",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Definition",
          "workingLatex": "\\text{The line maps to itself as a set}",
          "explanation": "An invariant line: every point on it maps to another point on the same line.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Direction vector",
          "workingLatex": "\\mathbf{d} = t\\begin{pmatrix}1\\\\m\\end{pmatrix}",
          "explanation": "Parametrise a line through the origin.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Condition",
          "workingLatex": "M\\mathbf{d} = \\lambda\\mathbf{d}",
          "explanation": "The direction is an eigenvector of $M$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve",
          "workingLatex": "Every direction vector satisfies $M\\mathbf{d} = -\\mathbf{d}$, so each line maps to itself.",
          "explanation": "Find directions preserved by the transformation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Line equation",
          "workingLatex": "Every line through the origin is an invariant line.",
          "explanation": "Equation of the invariant line through the origin.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Test a point",
          "workingLatex": "\\text{Image of a point on the line lies on the line}",
          "explanation": "Confirm the line is preserved.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Distinguish",
          "workingLatex": "\\text{Points on the line need not be fixed individually}",
          "explanation": "Invariant line $\\neq$ line of invariant points in general.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "Every line through the origin is an invariant line.",
          "explanation": "Invariant line(s) through the origin.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Definition",
          "workingLatex": "\\mathbf{p} = M\\mathbf{p}",
          "explanation": "Invariant point: the transformation fixes the point.",
          "diagram": null
        }
      ],
      "finalAnswer": "Every line through the origin is an invariant line."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Invariant points and lines",
    "subtopicId": "fm.y1.pure.invariance",
    "questionDiagram": null,
    "id": "fm.y1.pure.invariance.q033",
    "tags": [
      "invariant-line"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find the invariant line(s) through the origin for $M = \\begin{pmatrix} 2 & 0 \\\\ 0 & 2 \\end{pmatrix}$ (enlargement SF $2$).",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Definition",
          "workingLatex": "\\text{The line maps to itself as a set}",
          "explanation": "An invariant line: every point on it maps to another point on the same line.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Direction vector",
          "workingLatex": "\\mathbf{d} = t\\begin{pmatrix}1\\\\m\\end{pmatrix}",
          "explanation": "Parametrise a line through the origin.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Condition",
          "workingLatex": "M\\mathbf{d} = \\lambda\\mathbf{d}",
          "explanation": "The direction is an eigenvector of $M$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve",
          "workingLatex": "Each direction is an eigenvector with $\\lambda = 2$.",
          "explanation": "Find directions preserved by the transformation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Line equation",
          "workingLatex": "Every line through the origin is an invariant line.",
          "explanation": "Equation of the invariant line through the origin.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Test a point",
          "workingLatex": "\\text{Image of a point on the line lies on the line}",
          "explanation": "Confirm the line is preserved.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Distinguish",
          "workingLatex": "\\text{Points on the line need not be fixed individually}",
          "explanation": "Invariant line $\\neq$ line of invariant points in general.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "Every line through the origin is an invariant line.",
          "explanation": "Invariant line(s) through the origin.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Definition",
          "workingLatex": "\\mathbf{p} = M\\mathbf{p}",
          "explanation": "Invariant point: the transformation fixes the point.",
          "diagram": null
        }
      ],
      "finalAnswer": "Every line through the origin is an invariant line."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Invariant points and lines",
    "subtopicId": "fm.y1.pure.invariance",
    "questionDiagram": null,
    "id": "fm.y1.pure.invariance.q034",
    "tags": [
      "invariant-line"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find the invariant line(s) through the origin for $M = \\begin{pmatrix} 3 & 0 \\\\ 0 & -3 \\end{pmatrix}$ (enlargement with reflection).",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Definition",
          "workingLatex": "\\text{The line maps to itself as a set}",
          "explanation": "An invariant line: every point on it maps to another point on the same line.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Direction vector",
          "workingLatex": "\\mathbf{d} = t\\begin{pmatrix}1\\\\m\\end{pmatrix}",
          "explanation": "Parametrise a line through the origin.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Condition",
          "workingLatex": "M\\mathbf{d} = \\lambda\\mathbf{d}",
          "explanation": "The direction is an eigenvector of $M$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve",
          "workingLatex": "Diagonal matrix: eigenvectors along coordinate axes.",
          "explanation": "Find directions preserved by the transformation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Line equation",
          "workingLatex": "The $x$-axis and $y$-axis are invariant lines.",
          "explanation": "Equation of the invariant line through the origin.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Test a point",
          "workingLatex": "\\text{Image of a point on the line lies on the line}",
          "explanation": "Confirm the line is preserved.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Distinguish",
          "workingLatex": "\\text{Points on the line need not be fixed individually}",
          "explanation": "Invariant line $\\neq$ line of invariant points in general.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "The $x$-axis and $y$-axis are invariant lines.",
          "explanation": "Invariant line(s) through the origin.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Definition",
          "workingLatex": "\\mathbf{p} = M\\mathbf{p}",
          "explanation": "Invariant point: the transformation fixes the point.",
          "diagram": null
        }
      ],
      "finalAnswer": "The $x$-axis and $y$-axis are invariant lines."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Invariant points and lines",
    "subtopicId": "fm.y1.pure.invariance",
    "questionDiagram": null,
    "id": "fm.y1.pure.invariance.q035",
    "tags": [
      "invariant-line"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find the invariant line(s) through the origin for $M = \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}$ (rotation $90^\\circ$).",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Definition",
          "workingLatex": "\\text{The line maps to itself as a set}",
          "explanation": "An invariant line: every point on it maps to another point on the same line.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Direction vector",
          "workingLatex": "\\mathbf{d} = t\\begin{pmatrix}1\\\\m\\end{pmatrix}",
          "explanation": "Parametrise a line through the origin.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Condition",
          "workingLatex": "M\\mathbf{d} = \\lambda\\mathbf{d}",
          "explanation": "The direction is an eigenvector of $M$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve",
          "workingLatex": "No real eigenvectors; lines rotate to different lines.",
          "explanation": "Find directions preserved by the transformation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Line equation",
          "workingLatex": "No line through the origin is invariant (except trivially).",
          "explanation": "Equation of the invariant line through the origin.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Test a point",
          "workingLatex": "\\text{Image of a point on the line lies on the line}",
          "explanation": "Confirm the line is preserved.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Distinguish",
          "workingLatex": "\\text{Points on the line need not be fixed individually}",
          "explanation": "Invariant line $\\neq$ line of invariant points in general.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "No line through the origin is invariant (except trivially).",
          "explanation": "Invariant line(s) through the origin.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Definition",
          "workingLatex": "\\mathbf{p} = M\\mathbf{p}",
          "explanation": "Invariant point: the transformation fixes the point.",
          "diagram": null
        }
      ],
      "finalAnswer": "No line through the origin is invariant (except trivially)."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Invariant points and lines",
    "subtopicId": "fm.y1.pure.invariance",
    "questionDiagram": null,
    "id": "fm.y1.pure.invariance.q036",
    "tags": [
      "invariant-line"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find the invariant line(s) through the origin for $M = \\begin{pmatrix} 1 & 1 \\\\ 0 & 1 \\end{pmatrix}$ (shear parallel to $x$).",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Definition",
          "workingLatex": "\\text{The line maps to itself as a set}",
          "explanation": "An invariant line: every point on it maps to another point on the same line.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Direction vector",
          "workingLatex": "\\mathbf{d} = t\\begin{pmatrix}1\\\\m\\end{pmatrix}",
          "explanation": "Parametrise a line through the origin.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Condition",
          "workingLatex": "M\\mathbf{d} = \\lambda\\mathbf{d}",
          "explanation": "The direction is an eigenvector of $M$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve",
          "workingLatex": "$(M-I)\\mathbf{v}=0$ gives $y=0$.",
          "explanation": "Find directions preserved by the transformation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Line equation",
          "workingLatex": "The $x$-axis ($y=0$) is the only invariant line through the origin.",
          "explanation": "Equation of the invariant line through the origin.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Test a point",
          "workingLatex": "\\text{Image of a point on the line lies on the line}",
          "explanation": "Confirm the line is preserved.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Distinguish",
          "workingLatex": "\\text{Points on the line need not be fixed individually}",
          "explanation": "Invariant line $\\neq$ line of invariant points in general.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "The $x$-axis ($y=0$) is the only invariant line through the origin.",
          "explanation": "Invariant line(s) through the origin.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Definition",
          "workingLatex": "\\mathbf{p} = M\\mathbf{p}",
          "explanation": "Invariant point: the transformation fixes the point.",
          "diagram": null
        }
      ],
      "finalAnswer": "The $x$-axis ($y=0$) is the only invariant line through the origin."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Invariant points and lines",
    "subtopicId": "fm.y1.pure.invariance",
    "questionDiagram": null,
    "id": "fm.y1.pure.invariance.q037",
    "tags": [
      "invariant-line"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find the invariant line(s) through the origin for $M = \\begin{pmatrix} 1 & 0 \\\\ 2 & 1 \\end{pmatrix}$ (shear parallel to $y$).",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Definition",
          "workingLatex": "\\text{The line maps to itself as a set}",
          "explanation": "An invariant line: every point on it maps to another point on the same line.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Direction vector",
          "workingLatex": "\\mathbf{d} = t\\begin{pmatrix}1\\\\m\\end{pmatrix}",
          "explanation": "Parametrise a line through the origin.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Condition",
          "workingLatex": "M\\mathbf{d} = \\lambda\\mathbf{d}",
          "explanation": "The direction is an eigenvector of $M$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve",
          "workingLatex": "Eigenvector along $(0,1)$ with $\\lambda=1$.",
          "explanation": "Find directions preserved by the transformation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Line equation",
          "workingLatex": "The $y$-axis ($x=0$) is the only invariant line through the origin.",
          "explanation": "Equation of the invariant line through the origin.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Test a point",
          "workingLatex": "\\text{Image of a point on the line lies on the line}",
          "explanation": "Confirm the line is preserved.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Distinguish",
          "workingLatex": "\\text{Points on the line need not be fixed individually}",
          "explanation": "Invariant line $\\neq$ line of invariant points in general.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "The $y$-axis ($x=0$) is the only invariant line through the origin.",
          "explanation": "Invariant line(s) through the origin.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Definition",
          "workingLatex": "\\mathbf{p} = M\\mathbf{p}",
          "explanation": "Invariant point: the transformation fixes the point.",
          "diagram": null
        }
      ],
      "finalAnswer": "The $y$-axis ($x=0$) is the only invariant line through the origin."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Invariant points and lines",
    "subtopicId": "fm.y1.pure.invariance",
    "questionDiagram": null,
    "id": "fm.y1.pure.invariance.q038",
    "tags": [
      "invariant-line"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find the invariant line(s) through the origin for $M = \\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$ (reflection in $y=x$).",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Definition",
          "workingLatex": "\\text{The line maps to itself as a set}",
          "explanation": "An invariant line: every point on it maps to another point on the same line.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Direction vector",
          "workingLatex": "\\mathbf{d} = t\\begin{pmatrix}1\\\\m\\end{pmatrix}",
          "explanation": "Parametrise a line through the origin.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Condition",
          "workingLatex": "M\\mathbf{d} = \\lambda\\mathbf{d}",
          "explanation": "The direction is an eigenvector of $M$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve",
          "workingLatex": "Eigenvalues $1$ and $-1$ with eigenvectors along these lines.",
          "explanation": "Find directions preserved by the transformation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Line equation",
          "workingLatex": "The lines $y=x$ and $y=-x$ are both invariant lines.",
          "explanation": "Equation of the invariant line through the origin.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Test a point",
          "workingLatex": "\\text{Image of a point on the line lies on the line}",
          "explanation": "Confirm the line is preserved.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Distinguish",
          "workingLatex": "\\text{Points on the line need not be fixed individually}",
          "explanation": "Invariant line $\\neq$ line of invariant points in general.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "The lines $y=x$ and $y=-x$ are both invariant lines.",
          "explanation": "Invariant line(s) through the origin.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Definition",
          "workingLatex": "\\mathbf{p} = M\\mathbf{p}",
          "explanation": "Invariant point: the transformation fixes the point.",
          "diagram": null
        }
      ],
      "finalAnswer": "The lines $y=x$ and $y=-x$ are both invariant lines."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Invariant points and lines",
    "subtopicId": "fm.y1.pure.invariance",
    "questionDiagram": null,
    "id": "fm.y1.pure.invariance.q039",
    "tags": [
      "invariant-line"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find the invariant line(s) through the origin for $M = \\begin{pmatrix} 4 & 0 \\\\ 0 & 1 \\end{pmatrix}$ (stretch: SF $4$ in $x$, SF $1$ in $y$).",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Definition",
          "workingLatex": "\\text{The line maps to itself as a set}",
          "explanation": "An invariant line: every point on it maps to another point on the same line.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Direction vector",
          "workingLatex": "\\mathbf{d} = t\\begin{pmatrix}1\\\\m\\end{pmatrix}",
          "explanation": "Parametrise a line through the origin.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Condition",
          "workingLatex": "M\\mathbf{d} = \\lambda\\mathbf{d}",
          "explanation": "The direction is an eigenvector of $M$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve",
          "workingLatex": "Diagonal matrix preserves coordinate directions.",
          "explanation": "Find directions preserved by the transformation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Line equation",
          "workingLatex": "The $x$-axis and $y$-axis are invariant lines.",
          "explanation": "Equation of the invariant line through the origin.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Test a point",
          "workingLatex": "\\text{Image of a point on the line lies on the line}",
          "explanation": "Confirm the line is preserved.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Distinguish",
          "workingLatex": "\\text{Points on the line need not be fixed individually}",
          "explanation": "Invariant line $\\neq$ line of invariant points in general.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "The $x$-axis and $y$-axis are invariant lines.",
          "explanation": "Invariant line(s) through the origin.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Definition",
          "workingLatex": "\\mathbf{p} = M\\mathbf{p}",
          "explanation": "Invariant point: the transformation fixes the point.",
          "diagram": null
        }
      ],
      "finalAnswer": "The $x$-axis and $y$-axis are invariant lines."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Invariant points and lines",
    "subtopicId": "fm.y1.pure.invariance",
    "questionDiagram": null,
    "id": "fm.y1.pure.invariance.q040",
    "tags": [
      "invariant-line"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find the invariant line(s) through the origin for $M = \\begin{pmatrix} 1 & 2 \\\\ 2 & 4 \\end{pmatrix}$ (projection onto $y=2x$ (rank 1)).",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Definition",
          "workingLatex": "\\text{The line maps to itself as a set}",
          "explanation": "An invariant line: every point on it maps to another point on the same line.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Direction vector",
          "workingLatex": "\\mathbf{d} = t\\begin{pmatrix}1\\\\m\\end{pmatrix}",
          "explanation": "Parametrise a line through the origin.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Condition",
          "workingLatex": "M\\mathbf{d} = \\lambda\\mathbf{d}",
          "explanation": "The direction is an eigenvector of $M$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve",
          "workingLatex": "All points map onto this line; it is the image of the transformation.",
          "explanation": "Find directions preserved by the transformation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Line equation",
          "workingLatex": "The line $y=2x$ is the only invariant line.",
          "explanation": "Equation of the invariant line through the origin.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Test a point",
          "workingLatex": "\\text{Image of a point on the line lies on the line}",
          "explanation": "Confirm the line is preserved.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Distinguish",
          "workingLatex": "\\text{Points on the line need not be fixed individually}",
          "explanation": "Invariant line $\\neq$ line of invariant points in general.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "The line $y=2x$ is the only invariant line.",
          "explanation": "Invariant line(s) through the origin.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Definition",
          "workingLatex": "\\mathbf{p} = M\\mathbf{p}",
          "explanation": "Invariant point: the transformation fixes the point.",
          "diagram": null
        }
      ],
      "finalAnswer": "The line $y=2x$ is the only invariant line."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Invariant points and lines",
    "subtopicId": "fm.y1.pure.invariance",
    "questionDiagram": null,
    "id": "fm.y1.pure.invariance.q041",
    "tags": [
      "distinguish"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "For $M = \\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}$ (reflection in the $x$-axis), distinguish the line(s) of invariant points from the other invariant line(s) through the origin.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Line of invariant points",
          "workingLatex": "\\text{Every point on the line is fixed}",
          "explanation": "Definition: $\\mathbf{p} = M\\mathbf{p}$ for all points on the line.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Invariant line",
          "workingLatex": "\\text{The line maps to itself}",
          "explanation": "Definition: $M$ sends the line to the same line (as a set).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Analyse $M$",
          "workingLatex": "M = \\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}",
          "explanation": "Transformation: reflection in the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Fixed lines",
          "workingLatex": "the $x$-axis ($y=0$)",
          "explanation": "Lines where every point is invariant.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Invariant but not fixed",
          "workingLatex": "the $y$-axis ($x=0$)",
          "explanation": "Lines preserved as sets but most points move.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Example on fixed line",
          "workingLatex": "\\text{Pick a point on the fixed line — it stays put}",
          "explanation": "Verification.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Example on invariant line",
          "workingLatex": "\\text{Pick a non-origin point — it moves along the line}",
          "explanation": "Shows the distinction.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "\\text{Line of invariant points: } the $x$-axis ($y=0$). \\text{ Invariant line (not all fixed): } the $y$-axis ($x=0$)",
          "explanation": "Both concepts identified.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Definition",
          "workingLatex": "\\mathbf{p} = M\\mathbf{p}",
          "explanation": "Invariant point: the transformation fixes the point.",
          "diagram": null
        }
      ],
      "finalAnswer": "**Line of invariant points:** the $x$-axis ($y=0$). **Invariant line (not all points fixed):** the $y$-axis ($x=0$)."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Invariant points and lines",
    "subtopicId": "fm.y1.pure.invariance",
    "questionDiagram": null,
    "id": "fm.y1.pure.invariance.q042",
    "tags": [
      "distinguish"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "For $M = \\begin{pmatrix} -1 & 0 \\\\ 0 & 1 \\end{pmatrix}$ (reflection in the $y$-axis), distinguish the line(s) of invariant points from the other invariant line(s) through the origin.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Line of invariant points",
          "workingLatex": "\\text{Every point on the line is fixed}",
          "explanation": "Definition: $\\mathbf{p} = M\\mathbf{p}$ for all points on the line.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Invariant line",
          "workingLatex": "\\text{The line maps to itself}",
          "explanation": "Definition: $M$ sends the line to the same line (as a set).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Analyse $M$",
          "workingLatex": "M = \\begin{pmatrix} -1 & 0 \\\\ 0 & 1 \\end{pmatrix}",
          "explanation": "Transformation: reflection in the $y$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Fixed lines",
          "workingLatex": "the $y$-axis ($x=0$)",
          "explanation": "Lines where every point is invariant.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Invariant but not fixed",
          "workingLatex": "the $x$-axis ($y=0$)",
          "explanation": "Lines preserved as sets but most points move.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Example on fixed line",
          "workingLatex": "\\text{Pick a point on the fixed line — it stays put}",
          "explanation": "Verification.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Example on invariant line",
          "workingLatex": "\\text{Pick a non-origin point — it moves along the line}",
          "explanation": "Shows the distinction.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "\\text{Line of invariant points: } the $y$-axis ($x=0$). \\text{ Invariant line (not all fixed): } the $x$-axis ($y=0$)",
          "explanation": "Both concepts identified.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Definition",
          "workingLatex": "\\mathbf{p} = M\\mathbf{p}",
          "explanation": "Invariant point: the transformation fixes the point.",
          "diagram": null
        }
      ],
      "finalAnswer": "**Line of invariant points:** the $y$-axis ($x=0$). **Invariant line (not all points fixed):** the $x$-axis ($y=0$)."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Invariant points and lines",
    "subtopicId": "fm.y1.pure.invariance",
    "questionDiagram": null,
    "id": "fm.y1.pure.invariance.q043",
    "tags": [
      "distinguish"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "For $M = \\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$ (reflection in $y=x$), distinguish the line(s) of invariant points from the other invariant line(s) through the origin.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Line of invariant points",
          "workingLatex": "\\text{Every point on the line is fixed}",
          "explanation": "Definition: $\\mathbf{p} = M\\mathbf{p}$ for all points on the line.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Invariant line",
          "workingLatex": "\\text{The line maps to itself}",
          "explanation": "Definition: $M$ sends the line to the same line (as a set).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Analyse $M$",
          "workingLatex": "M = \\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}",
          "explanation": "Transformation: reflection in $y=x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Fixed lines",
          "workingLatex": "the line $y=x$",
          "explanation": "Lines where every point is invariant.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Invariant but not fixed",
          "workingLatex": "the line $y=-x$",
          "explanation": "Lines preserved as sets but most points move.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Example on fixed line",
          "workingLatex": "\\text{Pick a point on the fixed line — it stays put}",
          "explanation": "Verification.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Example on invariant line",
          "workingLatex": "\\text{Pick a non-origin point — it moves along the line}",
          "explanation": "Shows the distinction.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "\\text{Line of invariant points: } the line $y=x$. \\text{ Invariant line (not all fixed): } the line $y=-x$",
          "explanation": "Both concepts identified.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Definition",
          "workingLatex": "\\mathbf{p} = M\\mathbf{p}",
          "explanation": "Invariant point: the transformation fixes the point.",
          "diagram": null
        }
      ],
      "finalAnswer": "**Line of invariant points:** the line $y=x$. **Invariant line (not all points fixed):** the line $y=-x$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Invariant points and lines",
    "subtopicId": "fm.y1.pure.invariance",
    "questionDiagram": null,
    "id": "fm.y1.pure.invariance.q044",
    "tags": [
      "distinguish"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "For $M = \\begin{pmatrix} 0 & -1 \\\\ -1 & 0 \\end{pmatrix}$ (reflection in $y=-x$), distinguish the line(s) of invariant points from the other invariant line(s) through the origin.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Line of invariant points",
          "workingLatex": "\\text{Every point on the line is fixed}",
          "explanation": "Definition: $\\mathbf{p} = M\\mathbf{p}$ for all points on the line.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Invariant line",
          "workingLatex": "\\text{The line maps to itself}",
          "explanation": "Definition: $M$ sends the line to the same line (as a set).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Analyse $M$",
          "workingLatex": "M = \\begin{pmatrix} 0 & -1 \\\\ -1 & 0 \\end{pmatrix}",
          "explanation": "Transformation: reflection in $y=-x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Fixed lines",
          "workingLatex": "the line $y=-x$",
          "explanation": "Lines where every point is invariant.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Invariant but not fixed",
          "workingLatex": "the line $y=x$",
          "explanation": "Lines preserved as sets but most points move.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Example on fixed line",
          "workingLatex": "\\text{Pick a point on the fixed line — it stays put}",
          "explanation": "Verification.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Example on invariant line",
          "workingLatex": "\\text{Pick a non-origin point — it moves along the line}",
          "explanation": "Shows the distinction.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "\\text{Line of invariant points: } the line $y=-x$. \\text{ Invariant line (not all fixed): } the line $y=x$",
          "explanation": "Both concepts identified.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Definition",
          "workingLatex": "\\mathbf{p} = M\\mathbf{p}",
          "explanation": "Invariant point: the transformation fixes the point.",
          "diagram": null
        }
      ],
      "finalAnswer": "**Line of invariant points:** the line $y=-x$. **Invariant line (not all points fixed):** the line $y=x$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Invariant points and lines",
    "subtopicId": "fm.y1.pure.invariance",
    "questionDiagram": null,
    "id": "fm.y1.pure.invariance.q045",
    "tags": [
      "distinguish"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "For $M = \\begin{pmatrix} 2 & 0 \\\\ 0 & 2 \\end{pmatrix}$ (enlargement SF $2$), distinguish the line(s) of invariant points from the other invariant line(s) through the origin.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Line of invariant points",
          "workingLatex": "\\text{Every point on the line is fixed}",
          "explanation": "Definition: $\\mathbf{p} = M\\mathbf{p}$ for all points on the line.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Invariant line",
          "workingLatex": "\\text{The line maps to itself}",
          "explanation": "Definition: $M$ sends the line to the same line (as a set).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Analyse $M$",
          "workingLatex": "M = \\begin{pmatrix} 2 & 0 \\\\ 0 & 2 \\end{pmatrix}",
          "explanation": "Transformation: enlargement SF $2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Fixed lines",
          "workingLatex": "only the origin (a single point, not a line)",
          "explanation": "Lines where every point is invariant.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Invariant but not fixed",
          "workingLatex": "every line through the origin",
          "explanation": "Lines preserved as sets but most points move.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Example on fixed line",
          "workingLatex": "\\text{Pick a point on the fixed line — it stays put}",
          "explanation": "Verification.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Example on invariant line",
          "workingLatex": "\\text{Pick a non-origin point — it moves along the line}",
          "explanation": "Shows the distinction.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "\\text{Line of invariant points: } only the origin (a single point, not a line). \\text{ Invariant line (not all fixed): } every line through the origin",
          "explanation": "Both concepts identified.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Definition",
          "workingLatex": "\\mathbf{p} = M\\mathbf{p}",
          "explanation": "Invariant point: the transformation fixes the point.",
          "diagram": null
        }
      ],
      "finalAnswer": "**Line of invariant points:** only the origin (a single point, not a line). **Invariant line (not all points fixed):** every line through the origin."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Invariant points and lines",
    "subtopicId": "fm.y1.pure.invariance",
    "questionDiagram": null,
    "id": "fm.y1.pure.invariance.q046",
    "tags": [
      "distinguish"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "For $M = \\begin{pmatrix} -1 & 0 \\\\ 0 & -1 \\end{pmatrix}$ (rotation $180^\\circ$), distinguish the line(s) of invariant points from the other invariant line(s) through the origin.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Line of invariant points",
          "workingLatex": "\\text{Every point on the line is fixed}",
          "explanation": "Definition: $\\mathbf{p} = M\\mathbf{p}$ for all points on the line.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Invariant line",
          "workingLatex": "\\text{The line maps to itself}",
          "explanation": "Definition: $M$ sends the line to the same line (as a set).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Analyse $M$",
          "workingLatex": "M = \\begin{pmatrix} -1 & 0 \\\\ 0 & -1 \\end{pmatrix}",
          "explanation": "Transformation: rotation $180^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Fixed lines",
          "workingLatex": "only the origin",
          "explanation": "Lines where every point is invariant.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Invariant but not fixed",
          "workingLatex": "every line through the origin",
          "explanation": "Lines preserved as sets but most points move.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Example on fixed line",
          "workingLatex": "\\text{Pick a point on the fixed line — it stays put}",
          "explanation": "Verification.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Example on invariant line",
          "workingLatex": "\\text{Pick a non-origin point — it moves along the line}",
          "explanation": "Shows the distinction.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "\\text{Line of invariant points: } only the origin. \\text{ Invariant line (not all fixed): } every line through the origin",
          "explanation": "Both concepts identified.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Definition",
          "workingLatex": "\\mathbf{p} = M\\mathbf{p}",
          "explanation": "Invariant point: the transformation fixes the point.",
          "diagram": null
        }
      ],
      "finalAnswer": "**Line of invariant points:** only the origin. **Invariant line (not all points fixed):** every line through the origin."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Invariant points and lines",
    "subtopicId": "fm.y1.pure.invariance",
    "questionDiagram": null,
    "id": "fm.y1.pure.invariance.q047",
    "tags": [
      "shear"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "For the shear $M = \\begin{pmatrix} 1 & 2 \\\\ 0 & 1 \\end{pmatrix}$, find the invariant line(s) through the origin and describe how horizontal lines behave.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Shear matrix",
          "workingLatex": "M = \\begin{pmatrix} 1 & 2 \\\\ 0 & 1 \\end{pmatrix}",
          "explanation": "Shear parallel to the $x$-axis with factor $2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Effect on a point",
          "workingLatex": "(x,y) \\mapsto (x+2y, y)",
          "explanation": "How coordinates change.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Invariant line through $O$",
          "workingLatex": "The $x$-axis ($y = 0$) is an invariant line through the origin.",
          "explanation": "Direction vector that is an eigenvector.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Eigenvalue",
          "workingLatex": "\\lambda = 1",
          "explanation": "Shear has eigenvalue $1$ along the fixed direction.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Lines mapped to themselves",
          "workingLatex": "Every horizontal line $y = c$ is mapped to itself (sheared along the line).",
          "explanation": "Families of invariant lines.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Points on invariant line",
          "workingLatex": "\\text{Points move along the line unless on the axis through } O",
          "explanation": "The line is invariant as a set.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Area",
          "workingLatex": "\\det(M) = 1",
          "explanation": "Shear preserves area.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Example",
          "workingLatex": "(0,3) \\mapsto (6, 3)",
          "explanation": "A specific calculation.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "The $x$-axis ($y = 0$) is an invariant line through the origin.",
          "explanation": "Main invariant line through the origin.",
          "diagram": null
        }
      ],
      "finalAnswer": "The $x$-axis ($y = 0$) is an invariant line through the origin."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Invariant points and lines",
    "subtopicId": "fm.y1.pure.invariance",
    "questionDiagram": null,
    "id": "fm.y1.pure.invariance.q048",
    "tags": [
      "shear"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "For the shear $M = \\begin{pmatrix} 1 & 3 \\\\ 0 & 1 \\end{pmatrix}$, find the invariant line(s) through the origin and describe how horizontal lines behave.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Shear matrix",
          "workingLatex": "M = \\begin{pmatrix} 1 & 3 \\\\ 0 & 1 \\end{pmatrix}",
          "explanation": "Shear parallel to the $x$-axis with factor $3$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Effect on a point",
          "workingLatex": "(x,y) \\mapsto (x+3y, y)",
          "explanation": "How coordinates change.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Invariant line through $O$",
          "workingLatex": "The $x$-axis ($y = 0$) is an invariant line through the origin.",
          "explanation": "Direction vector that is an eigenvector.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Eigenvalue",
          "workingLatex": "\\lambda = 1",
          "explanation": "Shear has eigenvalue $1$ along the fixed direction.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Lines mapped to themselves",
          "workingLatex": "Every horizontal line $y = c$ is mapped to itself (sheared along the line).",
          "explanation": "Families of invariant lines.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Points on invariant line",
          "workingLatex": "\\text{Points move along the line unless on the axis through } O",
          "explanation": "The line is invariant as a set.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Area",
          "workingLatex": "\\det(M) = 1",
          "explanation": "Shear preserves area.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Example",
          "workingLatex": "(0,3) \\mapsto (9, 3)",
          "explanation": "A specific calculation.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "The $x$-axis ($y = 0$) is an invariant line through the origin.",
          "explanation": "Main invariant line through the origin.",
          "diagram": null
        }
      ],
      "finalAnswer": "The $x$-axis ($y = 0$) is an invariant line through the origin."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Invariant points and lines",
    "subtopicId": "fm.y1.pure.invariance",
    "questionDiagram": null,
    "id": "fm.y1.pure.invariance.q049",
    "tags": [
      "shear"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "For the shear $M = \\begin{pmatrix} 1 & 1 \\\\ 0 & 1 \\end{pmatrix}$, find the invariant line(s) through the origin and describe how horizontal lines behave.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Shear matrix",
          "workingLatex": "M = \\begin{pmatrix} 1 & 1 \\\\ 0 & 1 \\end{pmatrix}",
          "explanation": "Shear parallel to the $x$-axis with factor $1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Effect on a point",
          "workingLatex": "(x,y) \\mapsto (x+1y, y)",
          "explanation": "How coordinates change.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Invariant line through $O$",
          "workingLatex": "The $x$-axis ($y = 0$) is an invariant line through the origin.",
          "explanation": "Direction vector that is an eigenvector.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Eigenvalue",
          "workingLatex": "\\lambda = 1",
          "explanation": "Shear has eigenvalue $1$ along the fixed direction.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Lines mapped to themselves",
          "workingLatex": "Every horizontal line $y = c$ is mapped to itself (sheared along the line).",
          "explanation": "Families of invariant lines.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Points on invariant line",
          "workingLatex": "\\text{Points move along the line unless on the axis through } O",
          "explanation": "The line is invariant as a set.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Area",
          "workingLatex": "\\det(M) = 1",
          "explanation": "Shear preserves area.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Example",
          "workingLatex": "(0,3) \\mapsto (3, 3)",
          "explanation": "A specific calculation.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "The $x$-axis ($y = 0$) is an invariant line through the origin.",
          "explanation": "Main invariant line through the origin.",
          "diagram": null
        }
      ],
      "finalAnswer": "The $x$-axis ($y = 0$) is an invariant line through the origin."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Invariant points and lines",
    "subtopicId": "fm.y1.pure.invariance",
    "questionDiagram": null,
    "id": "fm.y1.pure.invariance.q050",
    "tags": [
      "shear"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "For the shear $M = \\begin{pmatrix} 1 & 0 \\\\ 2 & 1 \\end{pmatrix}$, find the invariant line(s) through the origin and describe how horizontal/vertical lines behave.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Shear matrix",
          "workingLatex": "M = \\begin{pmatrix} 1 & 0 \\\\ 2 & 1 \\end{pmatrix}",
          "explanation": "Shear parallel to the $y$-axis with factor $2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Effect on a point",
          "workingLatex": "(x,y) \\mapsto (x, 2x+y)",
          "explanation": "How coordinates change.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Invariant line through $O$",
          "workingLatex": "The $y$-axis ($x = 0$) is an invariant line through the origin.",
          "explanation": "Direction vector that is an eigenvector.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Eigenvalue",
          "workingLatex": "\\lambda = 1",
          "explanation": "Shear has eigenvalue $1$ along the fixed direction.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Lines mapped to themselves",
          "workingLatex": "Every vertical line $x = c$ is mapped to itself.",
          "explanation": "Families of invariant lines.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Points on invariant line",
          "workingLatex": "\\text{Points move along the line unless on the axis through } O",
          "explanation": "The line is invariant as a set.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Area",
          "workingLatex": "\\det(M) = 1",
          "explanation": "Shear preserves area.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Example",
          "workingLatex": "(2,0) \\mapsto (2, 4)",
          "explanation": "A specific calculation.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "The $y$-axis ($x = 0$) is an invariant line through the origin.",
          "explanation": "Main invariant line through the origin.",
          "diagram": null
        }
      ],
      "finalAnswer": "The $y$-axis ($x = 0$) is an invariant line through the origin."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Invariant points and lines",
    "subtopicId": "fm.y1.pure.invariance",
    "questionDiagram": null,
    "id": "fm.y1.pure.invariance.q051",
    "tags": [
      "shear"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "For the shear $M = \\begin{pmatrix} 1 & 0 \\\\ 3 & 1 \\end{pmatrix}$, find the invariant line(s) through the origin and describe how horizontal/vertical lines behave.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Shear matrix",
          "workingLatex": "M = \\begin{pmatrix} 1 & 0 \\\\ 3 & 1 \\end{pmatrix}",
          "explanation": "Shear parallel to the $y$-axis with factor $3$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Effect on a point",
          "workingLatex": "(x,y) \\mapsto (x, 3x+y)",
          "explanation": "How coordinates change.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Invariant line through $O$",
          "workingLatex": "The $y$-axis ($x = 0$) is an invariant line through the origin.",
          "explanation": "Direction vector that is an eigenvector.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Eigenvalue",
          "workingLatex": "\\lambda = 1",
          "explanation": "Shear has eigenvalue $1$ along the fixed direction.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Lines mapped to themselves",
          "workingLatex": "Every vertical line $x = c$ is mapped to itself.",
          "explanation": "Families of invariant lines.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Points on invariant line",
          "workingLatex": "\\text{Points move along the line unless on the axis through } O",
          "explanation": "The line is invariant as a set.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Area",
          "workingLatex": "\\det(M) = 1",
          "explanation": "Shear preserves area.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Example",
          "workingLatex": "(2,0) \\mapsto (2, 6)",
          "explanation": "A specific calculation.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "The $y$-axis ($x = 0$) is an invariant line through the origin.",
          "explanation": "Main invariant line through the origin.",
          "diagram": null
        }
      ],
      "finalAnswer": "The $y$-axis ($x = 0$) is an invariant line through the origin."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Invariant points and lines",
    "subtopicId": "fm.y1.pure.invariance",
    "questionDiagram": null,
    "id": "fm.y1.pure.invariance.q052",
    "tags": [
      "shear"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "For the shear $M = \\begin{pmatrix} 1 & 0 \\\\ -1 & 1 \\end{pmatrix}$, find the invariant line(s) through the origin and describe how horizontal/vertical lines behave.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Shear matrix",
          "workingLatex": "M = \\begin{pmatrix} 1 & 0 \\\\ -1 & 1 \\end{pmatrix}",
          "explanation": "Shear parallel to the $y$-axis with factor $-1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Effect on a point",
          "workingLatex": "(x,y) \\mapsto (x, -1x+y)",
          "explanation": "How coordinates change.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Invariant line through $O$",
          "workingLatex": "The $y$-axis ($x = 0$) is an invariant line through the origin.",
          "explanation": "Direction vector that is an eigenvector.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Eigenvalue",
          "workingLatex": "\\lambda = 1",
          "explanation": "Shear has eigenvalue $1$ along the fixed direction.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Lines mapped to themselves",
          "workingLatex": "Every vertical line $x = c$ is mapped to itself.",
          "explanation": "Families of invariant lines.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Points on invariant line",
          "workingLatex": "\\text{Points move along the line unless on the axis through } O",
          "explanation": "The line is invariant as a set.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Area",
          "workingLatex": "\\det(M) = 1",
          "explanation": "Shear preserves area.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Example",
          "workingLatex": "(2,0) \\mapsto (2, -2)",
          "explanation": "A specific calculation.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "The $y$-axis ($x = 0$) is an invariant line through the origin.",
          "explanation": "Main invariant line through the origin.",
          "diagram": null
        }
      ],
      "finalAnswer": "The $y$-axis ($x = 0$) is an invariant line through the origin."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Invariant points and lines",
    "subtopicId": "fm.y1.pure.invariance",
    "questionDiagram": null,
    "id": "fm.y1.pure.invariance.q053",
    "tags": [
      "invariant-points"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find all invariant points of the transformation $M = \\begin{pmatrix} 1 & 2 \\\\ 2 & 4 \\end{pmatrix}$ (reflection in $y=x$ (verify)).",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Condition",
          "workingLatex": "(M - I)\\begin{pmatrix}x\\\\y\\end{pmatrix} = \\mathbf{0}",
          "explanation": "Invariant points satisfy $\\mathbf{p} = M\\mathbf{p}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Equations",
          "workingLatex": "\\begin{cases}0x + 2y = 0\\\\2x + 3y = 0\\end{cases}",
          "explanation": "Rearrange to a homogeneous system.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Determinant",
          "workingLatex": "\\det(M - I) = -4",
          "explanation": "Tests whether non-trivial solutions exist.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Dependent equations",
          "workingLatex": "\\det(M-I) = 0",
          "explanation": "Infinitely many solutions.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Line",
          "workingLatex": "y = x",
          "explanation": "All points on the mirror line are fixed.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "The line of invariant points is $y = x$.",
          "explanation": "Complete description of invariant points.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Definition",
          "workingLatex": "\\mathbf{p} = M\\mathbf{p}",
          "explanation": "Invariant point: the transformation fixes the point.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Line of fixed points",
          "workingLatex": "\\text{Every point on the line is invariant}",
          "explanation": "Stronger than an invariant line.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Invariant line",
          "workingLatex": "M\\text{ maps the line to itself}",
          "explanation": "Points may move along the line.",
          "diagram": null
        }
      ],
      "finalAnswer": "The line of invariant points is $y = x$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Invariant points and lines",
    "subtopicId": "fm.y1.pure.invariance",
    "questionDiagram": null,
    "id": "fm.y1.pure.invariance.q054",
    "tags": [
      "invariant-points"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find all invariant points of the transformation $M = \\begin{pmatrix} 2 & 1 \\\\ 1 & 2 \\end{pmatrix}$ (reflection in $y=x$ (scaled)).",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Condition",
          "workingLatex": "(M - I)\\begin{pmatrix}x\\\\y\\end{pmatrix} = \\mathbf{0}",
          "explanation": "Invariant points satisfy $\\mathbf{p} = M\\mathbf{p}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Equations",
          "workingLatex": "\\begin{cases}1x + 1y = 0\\\\1x + 1y = 0\\end{cases}",
          "explanation": "Rearrange to a homogeneous system.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Determinant",
          "workingLatex": "\\det(M - I) = 0",
          "explanation": "Tests whether non-trivial solutions exist.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve",
          "workingLatex": "-x + y = 0",
          "explanation": "Gives $y=x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify",
          "workingLatex": "(2,2) \\mapsto (2,2)",
          "explanation": "Point on line is fixed.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "The line of invariant points is $y = x$.",
          "explanation": "Complete description of invariant points.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Definition",
          "workingLatex": "\\mathbf{p} = M\\mathbf{p}",
          "explanation": "Invariant point: the transformation fixes the point.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Line of fixed points",
          "workingLatex": "\\text{Every point on the line is invariant}",
          "explanation": "Stronger than an invariant line.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Invariant line",
          "workingLatex": "M\\text{ maps the line to itself}",
          "explanation": "Points may move along the line.",
          "diagram": null
        }
      ],
      "finalAnswer": "The line of invariant points is $y = x$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Invariant points and lines",
    "subtopicId": "fm.y1.pure.invariance",
    "questionDiagram": null,
    "id": "fm.y1.pure.invariance.q055",
    "tags": [
      "projection"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find all invariant points of the transformation $M = \\begin{pmatrix} 0 & 0 \\\\ 0 & 1 \\end{pmatrix}$ (projection onto $x$-axis).",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Condition",
          "workingLatex": "(M - I)\\begin{pmatrix}x\\\\y\\end{pmatrix} = \\mathbf{0}",
          "explanation": "Invariant points satisfy $\\mathbf{p} = M\\mathbf{p}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Equations",
          "workingLatex": "\\begin{cases}-1x + 0y = 0\\\\0x + 0y = 0\\end{cases}",
          "explanation": "Rearrange to a homogeneous system.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Determinant",
          "workingLatex": "\\det(M - I) = 0",
          "explanation": "Tests whether non-trivial solutions exist.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Equations",
          "workingLatex": "y = 0",
          "explanation": "Second equation forces $y=0$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Line",
          "workingLatex": "y = 0",
          "explanation": "All points on $x$-axis fixed.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "Every point on the $x$-axis ($y=0$) is invariant.",
          "explanation": "Complete description of invariant points.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Definition",
          "workingLatex": "\\mathbf{p} = M\\mathbf{p}",
          "explanation": "Invariant point: the transformation fixes the point.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Line of fixed points",
          "workingLatex": "\\text{Every point on the line is invariant}",
          "explanation": "Stronger than an invariant line.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Invariant line",
          "workingLatex": "M\\text{ maps the line to itself}",
          "explanation": "Points may move along the line.",
          "diagram": null
        }
      ],
      "finalAnswer": "Every point on the $x$-axis ($y=0$) is invariant."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Invariant points and lines",
    "subtopicId": "fm.y1.pure.invariance",
    "questionDiagram": null,
    "id": "fm.y1.pure.invariance.q056",
    "tags": [
      "projection"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find all invariant points of the transformation $M = \\begin{pmatrix} 1 & 0 \\\\ 0 & 0 \\end{pmatrix}$ (projection onto $x$-axis).",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Condition",
          "workingLatex": "(M - I)\\begin{pmatrix}x\\\\y\\end{pmatrix} = \\mathbf{0}",
          "explanation": "Invariant points satisfy $\\mathbf{p} = M\\mathbf{p}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Equations",
          "workingLatex": "\\begin{cases}0x + 0y = 0\\\\0x + -1y = 0\\end{cases}",
          "explanation": "Rearrange to a homogeneous system.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Determinant",
          "workingLatex": "\\det(M - I) = 0",
          "explanation": "Tests whether non-trivial solutions exist.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve",
          "workingLatex": "0 = 0,\\; -y = 0",
          "explanation": "So $y=0$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Answer",
          "workingLatex": "y = 0",
          "explanation": "Line of invariant points.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "Every point on the $x$-axis ($y=0$) is invariant.",
          "explanation": "Complete description of invariant points.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Definition",
          "workingLatex": "\\mathbf{p} = M\\mathbf{p}",
          "explanation": "Invariant point: the transformation fixes the point.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Line of fixed points",
          "workingLatex": "\\text{Every point on the line is invariant}",
          "explanation": "Stronger than an invariant line.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Invariant line",
          "workingLatex": "M\\text{ maps the line to itself}",
          "explanation": "Points may move along the line.",
          "diagram": null
        }
      ],
      "finalAnswer": "Every point on the $x$-axis ($y=0$) is invariant."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Invariant points and lines",
    "subtopicId": "fm.y1.pure.invariance",
    "questionDiagram": null,
    "id": "fm.y1.pure.invariance.q057",
    "tags": [
      "invariant-points"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find all invariant points of the transformation $M = \\begin{pmatrix} 1 & 2 \\\\ 2 & 4 \\end{pmatrix}$ (reflection in $y=x$).",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Condition",
          "workingLatex": "(M - I)\\begin{pmatrix}x\\\\y\\end{pmatrix} = \\mathbf{0}",
          "explanation": "Invariant points satisfy $\\mathbf{p} = M\\mathbf{p}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Equations",
          "workingLatex": "\\begin{cases}0x + 2y = 0\\\\2x + 3y = 0\\end{cases}",
          "explanation": "Rearrange to a homogeneous system.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Determinant",
          "workingLatex": "\\det(M - I) = -4",
          "explanation": "Tests whether non-trivial solutions exist.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Equations",
          "workingLatex": "-x + y = 0",
          "explanation": "Both equations equivalent.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Line",
          "workingLatex": "y = x",
          "explanation": "Mirror line.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "The line of invariant points is $y = x$.",
          "explanation": "Complete description of invariant points.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Definition",
          "workingLatex": "\\mathbf{p} = M\\mathbf{p}",
          "explanation": "Invariant point: the transformation fixes the point.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Line of fixed points",
          "workingLatex": "\\text{Every point on the line is invariant}",
          "explanation": "Stronger than an invariant line.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Invariant line",
          "workingLatex": "M\\text{ maps the line to itself}",
          "explanation": "Points may move along the line.",
          "diagram": null
        }
      ],
      "finalAnswer": "The line of invariant points is $y = x$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Invariant points and lines",
    "subtopicId": "fm.y1.pure.invariance",
    "questionDiagram": null,
    "id": "fm.y1.pure.invariance.q058",
    "tags": [
      "projection"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find all invariant points of the transformation $M = \\begin{pmatrix} 0 & 0 \\\\ 0 & 1 \\end{pmatrix}$ (projection onto the $x$-axis).",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Condition",
          "workingLatex": "(M - I)\\begin{pmatrix}x\\\\y\\end{pmatrix} = \\mathbf{0}",
          "explanation": "Invariant points satisfy $\\mathbf{p} = M\\mathbf{p}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Equations",
          "workingLatex": "\\begin{cases}-1x + 0y = 0\\\\0x + 0y = 0\\end{cases}",
          "explanation": "Rearrange to a homogeneous system.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Determinant",
          "workingLatex": "\\det(M - I) = 0",
          "explanation": "Tests whether non-trivial solutions exist.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve",
          "workingLatex": "y = 0",
          "explanation": "From $(M-I)\\mathbf{p}=0$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Answer",
          "workingLatex": "y = 0",
          "explanation": "All points with $y=0$ are fixed.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "Every point on the $x$-axis ($y = 0$) is invariant.",
          "explanation": "Complete description of invariant points.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Definition",
          "workingLatex": "\\mathbf{p} = M\\mathbf{p}",
          "explanation": "Invariant point: the transformation fixes the point.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Line of fixed points",
          "workingLatex": "\\text{Every point on the line is invariant}",
          "explanation": "Stronger than an invariant line.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Invariant line",
          "workingLatex": "M\\text{ maps the line to itself}",
          "explanation": "Points may move along the line.",
          "diagram": null
        }
      ],
      "finalAnswer": "Every point on the $x$-axis ($y = 0$) is invariant."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Invariant points and lines",
    "subtopicId": "fm.y1.pure.invariance",
    "questionDiagram": null,
    "id": "fm.y1.pure.invariance.q059",
    "tags": [
      "invariant-line"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find the invariant line(s) through the origin for $M = \\begin{pmatrix} 1 & 3 \\\\ 0 & 1 \\end{pmatrix}$ (shear factor $3$ parallel to $x$).",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Definition",
          "workingLatex": "\\text{The line maps to itself as a set}",
          "explanation": "An invariant line: every point on it maps to another point on the same line.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Direction vector",
          "workingLatex": "\\mathbf{d} = t\\begin{pmatrix}1\\\\m\\end{pmatrix}",
          "explanation": "Parametrise a line through the origin.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Condition",
          "workingLatex": "M\\mathbf{d} = \\lambda\\mathbf{d}",
          "explanation": "The direction is an eigenvector of $M$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve",
          "workingLatex": "$(M-I)\\mathbf{v}=0 \\Rightarrow y=0$.",
          "explanation": "Find directions preserved by the transformation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Line equation",
          "workingLatex": "The $x$-axis ($y=0$) is the only invariant line through the origin.",
          "explanation": "Equation of the invariant line through the origin.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Test a point",
          "workingLatex": "\\text{Image of a point on the line lies on the line}",
          "explanation": "Confirm the line is preserved.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Distinguish",
          "workingLatex": "\\text{Points on the line need not be fixed individually}",
          "explanation": "Invariant line $\\neq$ line of invariant points in general.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "The $x$-axis ($y=0$) is the only invariant line through the origin.",
          "explanation": "Invariant line(s) through the origin.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Definition",
          "workingLatex": "\\mathbf{p} = M\\mathbf{p}",
          "explanation": "Invariant point: the transformation fixes the point.",
          "diagram": null
        }
      ],
      "finalAnswer": "The $x$-axis ($y=0$) is the only invariant line through the origin."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Invariant points and lines",
    "subtopicId": "fm.y1.pure.invariance",
    "questionDiagram": null,
    "id": "fm.y1.pure.invariance.q060",
    "tags": [
      "invariant-line"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find the invariant line(s) through the origin for $M = \\begin{pmatrix} 1 & 0 \\\\ -2 & 1 \\end{pmatrix}$ (shear factor $-2$ parallel to $y$).",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Definition",
          "workingLatex": "\\text{The line maps to itself as a set}",
          "explanation": "An invariant line: every point on it maps to another point on the same line.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Direction vector",
          "workingLatex": "\\mathbf{d} = t\\begin{pmatrix}1\\\\m\\end{pmatrix}",
          "explanation": "Parametrise a line through the origin.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Condition",
          "workingLatex": "M\\mathbf{d} = \\lambda\\mathbf{d}",
          "explanation": "The direction is an eigenvector of $M$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve",
          "workingLatex": "Eigenvector $(0,1)$ with $\\lambda=1$.",
          "explanation": "Find directions preserved by the transformation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Line equation",
          "workingLatex": "The $y$-axis ($x=0$) is the only invariant line through the origin.",
          "explanation": "Equation of the invariant line through the origin.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Test a point",
          "workingLatex": "\\text{Image of a point on the line lies on the line}",
          "explanation": "Confirm the line is preserved.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Distinguish",
          "workingLatex": "\\text{Points on the line need not be fixed individually}",
          "explanation": "Invariant line $\\neq$ line of invariant points in general.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "The $y$-axis ($x=0$) is the only invariant line through the origin.",
          "explanation": "Invariant line(s) through the origin.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Definition",
          "workingLatex": "\\mathbf{p} = M\\mathbf{p}",
          "explanation": "Invariant point: the transformation fixes the point.",
          "diagram": null
        }
      ],
      "finalAnswer": "The $y$-axis ($x=0$) is the only invariant line through the origin."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Invariant points and lines",
    "subtopicId": "fm.y1.pure.invariance",
    "questionDiagram": null,
    "id": "fm.y1.pure.invariance.q061",
    "tags": [
      "invariant-line"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find the invariant line(s) through the origin for $M = \\begin{pmatrix} 5 & 0 \\\\ 0 & 1 \\end{pmatrix}$ (horizontal stretch SF $5$).",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Definition",
          "workingLatex": "\\text{The line maps to itself as a set}",
          "explanation": "An invariant line: every point on it maps to another point on the same line.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Direction vector",
          "workingLatex": "\\mathbf{d} = t\\begin{pmatrix}1\\\\m\\end{pmatrix}",
          "explanation": "Parametrise a line through the origin.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Condition",
          "workingLatex": "M\\mathbf{d} = \\lambda\\mathbf{d}",
          "explanation": "The direction is an eigenvector of $M$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve",
          "workingLatex": "Diagonal entries give axis directions.",
          "explanation": "Find directions preserved by the transformation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Line equation",
          "workingLatex": "The $x$-axis and $y$-axis are invariant lines.",
          "explanation": "Equation of the invariant line through the origin.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Test a point",
          "workingLatex": "\\text{Image of a point on the line lies on the line}",
          "explanation": "Confirm the line is preserved.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Distinguish",
          "workingLatex": "\\text{Points on the line need not be fixed individually}",
          "explanation": "Invariant line $\\neq$ line of invariant points in general.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "The $x$-axis and $y$-axis are invariant lines.",
          "explanation": "Invariant line(s) through the origin.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Definition",
          "workingLatex": "\\mathbf{p} = M\\mathbf{p}",
          "explanation": "Invariant point: the transformation fixes the point.",
          "diagram": null
        }
      ],
      "finalAnswer": "The $x$-axis and $y$-axis are invariant lines."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Invariant points and lines",
    "subtopicId": "fm.y1.pure.invariance",
    "questionDiagram": null,
    "id": "fm.y1.pure.invariance.q062",
    "tags": [
      "invariant-line"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find the invariant line(s) through the origin for $M = \\begin{pmatrix} 1 & 0 \\\\ 0 & 5 \\end{pmatrix}$ (vertical stretch SF $5$).",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Definition",
          "workingLatex": "\\text{The line maps to itself as a set}",
          "explanation": "An invariant line: every point on it maps to another point on the same line.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Direction vector",
          "workingLatex": "\\mathbf{d} = t\\begin{pmatrix}1\\\\m\\end{pmatrix}",
          "explanation": "Parametrise a line through the origin.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Condition",
          "workingLatex": "M\\mathbf{d} = \\lambda\\mathbf{d}",
          "explanation": "The direction is an eigenvector of $M$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve",
          "workingLatex": "Coordinate axes are eigenvector directions.",
          "explanation": "Find directions preserved by the transformation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Line equation",
          "workingLatex": "The $x$-axis and $y$-axis are invariant lines.",
          "explanation": "Equation of the invariant line through the origin.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Test a point",
          "workingLatex": "\\text{Image of a point on the line lies on the line}",
          "explanation": "Confirm the line is preserved.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Distinguish",
          "workingLatex": "\\text{Points on the line need not be fixed individually}",
          "explanation": "Invariant line $\\neq$ line of invariant points in general.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "The $x$-axis and $y$-axis are invariant lines.",
          "explanation": "Invariant line(s) through the origin.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Definition",
          "workingLatex": "\\mathbf{p} = M\\mathbf{p}",
          "explanation": "Invariant point: the transformation fixes the point.",
          "diagram": null
        }
      ],
      "finalAnswer": "The $x$-axis and $y$-axis are invariant lines."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Invariant points and lines",
    "subtopicId": "fm.y1.pure.invariance",
    "questionDiagram": null,
    "id": "fm.y1.pure.invariance.q063",
    "tags": [
      "full-analysis",
      "reflection",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "questionText": "Find all invariant points and all invariant lines through the origin for $M = \\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}$ (reflection in the $x$-axis).",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Invariant points",
          "workingLatex": "(M-I)\\mathbf{p} = \\mathbf{0}",
          "explanation": "Set up the equation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Solve",
          "workingLatex": "y = 0",
          "explanation": "Line of invariant points: the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Invariant lines",
          "workingLatex": "M\\mathbf{d} = \\lambda\\mathbf{d}",
          "explanation": "Find eigenvector directions.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Eigenvalues",
          "workingLatex": "\\lambda = 1 \\text{ and } \\lambda = -1",
          "explanation": "Characteristic equation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Eigenvectors",
          "workingLatex": "\\mathbf{d}_1 = (1,0),\\; \\mathbf{d}_2 = (0,1)",
          "explanation": "Along $x$ and $y$ axes.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Invariant lines",
          "workingLatex": "$y=0$ and $x=0$",
          "explanation": "Both axes are invariant lines.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Distinguish",
          "workingLatex": "$y=0$: \\text{line of invariant points};\\; x=0: \\text{invariant line only}",
          "explanation": "Key distinction.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify",
          "workingLatex": "(3,0)\\mapsto(3,0),\\; (0,4)\\mapsto(0,-4)",
          "explanation": "Confirm behaviour.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer points",
          "workingLatex": "$y = 0$",
          "explanation": "Line of invariant points.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Answer lines",
          "workingLatex": "$y=0$ and $x=0$",
          "explanation": "Both invariant lines.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Geometric summary",
          "workingLatex": "\\text{Mirror line } y=0; \\text{ perpendicular line } x=0",
          "explanation": "Reflection geometry.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Determinant",
          "workingLatex": "\\det(M) = -1",
          "explanation": "Orientation reversed.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Complete",
          "workingLatex": "\\text{Points fixed on } y=0; \\text{ lines } x=0, y=0 \\text{ invariant}",
          "explanation": "Full analysis.",
          "diagram": null
        }
      ],
      "finalAnswer": "Line of invariant points: $y=0$. Invariant lines through the origin: $y=0$ and $x=0$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Invariant points and lines",
    "subtopicId": "fm.y1.pure.invariance",
    "questionDiagram": null,
    "id": "fm.y1.pure.invariance.q064",
    "tags": [
      "eigenvalues",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "questionText": "The matrix $M = \\begin{pmatrix} 2 & 1 \\\\ 1 & 2 \\end{pmatrix}$ has eigenvalues $3$ and $1$. Find the invariant lines through the origin and state which is a line of invariant points.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Eigenvalue equation",
          "workingLatex": "\\det(M - \\lambda I) = 0",
          "explanation": "Find eigenvalues.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Eigenvalues",
          "workingLatex": "\\lambda = 3,\\; \\lambda = 1",
          "explanation": "Given / verify.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "$\\lambda = 3$ eigenvector",
          "workingLatex": "(1,1)",
          "explanation": "Direction $y = x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "$\\lambda = 1$ eigenvector",
          "workingLatex": "(1,-1)",
          "explanation": "Direction $y = -x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Invariant lines",
          "workingLatex": "$y = x$ and $y = -x$",
          "explanation": "Both are invariant lines.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "$\\lambda = 1$ means fixed",
          "workingLatex": "M\\mathbf{p} = \\mathbf{p} \\text{ on } y = -x",
          "explanation": "Eigenvalue $1$ gives invariant points.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Line of invariant points",
          "workingLatex": "$y = -x$",
          "explanation": "Every point on this line is fixed.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "$\\lambda = 3$ on $y=x$",
          "workingLatex": "\\text{Points stretch by factor } 3",
          "explanation": "Line invariant but points not fixed.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify",
          "workingLatex": "M(1,-1) = (1,-1)",
          "explanation": "Point on $y=-x$ fixed.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Verify stretch",
          "workingLatex": "M(1,1) = (3,3)",
          "explanation": "Point on $y=x$ moves.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Answer lines",
          "workingLatex": "$y=x$ and $y=-x$",
          "explanation": "Invariant lines.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Answer fixed line",
          "workingLatex": "$y = -x$",
          "explanation": "Line of invariant points.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Summary",
          "workingLatex": "\\text{Symmetric matrix: eigenvector directions}",
          "explanation": "Complete.",
          "diagram": null
        }
      ],
      "finalAnswer": "Invariant lines: $y=x$ and $y=-x$. Line of invariant points: $y=-x$ (eigenvalue $1$)."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Invariant points and lines",
    "subtopicId": "fm.y1.pure.invariance",
    "questionDiagram": null,
    "id": "fm.y1.pure.invariance.q065",
    "tags": [
      "construct-matrix",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "questionText": "A reflection has mirror line $y = 3x$. Given that $(1,3)$ is invariant, find the matrix $M$ and all invariant lines.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Mirror line",
          "workingLatex": "y = 3x",
          "explanation": "Line of invariant points.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Unit normal",
          "workingLatex": "\\mathbf{n} \\perp (1,3)",
          "explanation": "Direction $(-3,1)$ or $(3,-1)$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Reflection formula",
          "workingLatex": "M = I - 2\\mathbf{n}\\mathbf{n}^T/|\\mathbf{n}|^2",
          "explanation": "Householder reflection.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute",
          "workingLatex": "M = \\frac{1}{10}\\begin{pmatrix}-8 & -6 \\\\ -6 & 8\\end{pmatrix}",
          "explanation": "Or equivalent scalar multiple.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify",
          "workingLatex": "M(1,3) = (1,3)",
          "explanation": "Point on mirror line fixed.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Invariant lines",
          "workingLatex": "$y=3x$ and $y=-x/3$",
          "explanation": "Mirror line and perpendicular.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Line of invariant points",
          "workingLatex": "$y = 3x$",
          "explanation": "Mirror line.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Perpendicular line",
          "workingLatex": "$3y = -x$",
          "explanation": "Invariant but not fixed.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Determinant",
          "workingLatex": "\\det(M) = -1",
          "explanation": "Reflection property.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Answer matrix",
          "workingLatex": "M = \\begin{pmatrix}-4/5 & -3/5 \\\\ -3/5 & 4/5\\end{pmatrix}",
          "explanation": "Normalised form.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Answer lines",
          "workingLatex": "$y=3x$ (fixed), $3y=-x$ (invariant)",
          "explanation": "Both through origin.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Check off line",
          "workingLatex": "(1,0) \\mapsto \\text{not } (1,0)",
          "explanation": "Only mirror line fully fixed.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Summary",
          "workingLatex": "\\text{Reflection in } y=3x",
          "explanation": "Complete.",
          "diagram": null
        }
      ],
      "finalAnswer": "$M = \\begin{pmatrix}-4/5 & -3/5 \\\\ -3/5 & 4/5\\end{pmatrix}$. Line of invariant points: $y=3x$. Invariant lines: $y=3x$ and $3y=-x$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Invariant points and lines",
    "subtopicId": "fm.y1.pure.invariance",
    "questionDiagram": null,
    "id": "fm.y1.pure.invariance.q066",
    "tags": [
      "shear",
      "full-analysis",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "questionText": "For $M = \\begin{pmatrix} 1 & 2 \\\\ 0 & 1 \\end{pmatrix}$ (shear), find invariant lines, lines of invariant points, and describe the image of the line $y = 4$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Shear effect",
          "workingLatex": "(x,y) \\mapsto (x+2y, y)",
          "explanation": "Horizontal shear.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Invariant points",
          "workingLatex": "(M-I)\\mathbf{p}=0 \\Rightarrow y=0",
          "explanation": "Only points on $x$-axis... actually only origin: $y=0$ from both? $2y=0, 0=0$ so $y=0$ — ALL points on $x$-axis?",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Check $(a,0)$",
          "workingLatex": "(a,0)\\mapsto(a,0)",
          "explanation": "Every point on $x$-axis is fixed!",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Line of invariant points",
          "workingLatex": "$y = 0$",
          "explanation": "The $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Invariant lines",
          "workingLatex": "$y = 0$ and all lines $y = c$",
          "explanation": "Horizontal lines map to themselves.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Line $y=4$",
          "workingLatex": "(x,4)\\mapsto(x+8,4)",
          "explanation": "Maps to itself, shifted.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Image of $y=4$",
          "workingLatex": "$y = 4$",
          "explanation": "Same line.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Shift amount",
          "workingLatex": "$x \\mapsto x+8$",
          "explanation": "Each point moves 8 units right.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer fixed line",
          "workingLatex": "$y = 0$",
          "explanation": "Line of invariant points.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Answer invariant",
          "workingLatex": "$y=0$; \\text{ all } y=c$",
          "explanation": "Family of invariant lines.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Image of $y=4$",
          "workingLatex": "$y=4$, points shifted by $(8,0)$",
          "explanation": "Specific line behaviour.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Area",
          "workingLatex": "\\det(M)=1",
          "explanation": "Preserved.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Summary",
          "workingLatex": "\\text{Fixed: } y=0; \\; y=4\\mapsto y=4",
          "explanation": "Complete.",
          "diagram": null
        }
      ],
      "finalAnswer": "Line of invariant points: $y=0$. Invariant lines: $y=0$ and every horizontal line $y=c$. The line $y=4$ maps to itself with each point shifted 8 units in the $x$-direction."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Invariant points and lines",
    "subtopicId": "fm.y1.pure.invariance",
    "questionDiagram": null,
    "id": "fm.y1.pure.invariance.q067",
    "tags": [
      "composite",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "questionText": "The transformation $T$ has matrix $M = \\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$ followed by $N = \\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}$. Find the combined invariant lines and lines of invariant points.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Order",
          "workingLatex": "NM \\text{ (apply } M \\text{ first)}",
          "explanation": "Matrix product $NM$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Compute $NM$",
          "workingLatex": "\\begin{pmatrix}0 & 1\\\\-1 & 0\\end{pmatrix}",
          "explanation": "Reflection in $y=-x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify",
          "workingLatex": "\\text{Reflection in } y = -x",
          "explanation": "Standard matrix.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Line of invariant points",
          "workingLatex": "$y = -x$",
          "explanation": "Mirror line.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Other invariant line",
          "workingLatex": "$y = x$",
          "explanation": "Perpendicular through origin.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify composite",
          "workingLatex": "(1,1)\\mapsto(1,-1)\\mapsto(-1,-1) \\text{ vs direct } (1,1)\\mapsto(-1,-1)$",
          "explanation": "Consistent.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Invariant points on mirror",
          "workingLatex": "\\text{All points on } y=-x",
          "explanation": "Fixed by reflection.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Points on $y=x$",
          "workingLatex": "\\text{Swap to } y=-x \\text{ direction}",
          "explanation": "Move but stay on invariant line.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer combined",
          "workingLatex": "NM = \\begin{pmatrix}0 & 1\\\\-1 & 0\\end{pmatrix}",
          "explanation": "Single matrix.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Answer fixed",
          "workingLatex": "$y = -x$",
          "explanation": "Line of invariant points.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Answer invariant",
          "workingLatex": "$y=-x$ and $y=x$",
          "explanation": "Both invariant lines.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Composition rule",
          "workingLatex": "\\text{Two reflections} \\Rightarrow \\text{rotation or reflection}",
          "explanation": "Here: reflection.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Summary",
          "workingLatex": "\\text{Reflection in } y=-x",
          "explanation": "Complete.",
          "diagram": null
        }
      ],
      "finalAnswer": "Combined matrix: $\\begin{pmatrix}0 & 1\\\\-1 & 0\\end{pmatrix}$ (reflection in $y=-x$). Line of invariant points: $y=-x$. Invariant lines: $y=-x$ and $y=x$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Invariant points and lines",
    "subtopicId": "fm.y1.pure.invariance",
    "questionDiagram": null,
    "id": "fm.y1.pure.invariance.q068",
    "tags": [
      "parameter",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "written",
    "questionText": "Find the value of $k$ for which $M = \\begin{pmatrix} 1 & k \\\\ 0 & 1 \\end{pmatrix}$ has only the origin as an invariant point. For $k=0$, describe all invariant lines.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Invariant points",
          "workingLatex": "(M-I)\\mathbf{p}=0",
          "explanation": "Homogeneous system.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Equations",
          "workingLatex": "ky = 0",
          "explanation": "Only equation from $M-I$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Case $k \\neq 0$",
          "workingLatex": "y = 0",
          "explanation": "Line of invariant points — not just origin!",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Case $k = 0$",
          "workingLatex": "M = I",
          "explanation": "Every point invariant.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Re-read question",
          "workingLatex": "\\text{Shear: only origin as isolated point on invariant line?}",
          "explanation": "Clarify: for shear $k\\neq0$, line $y=0$ is line of invariant points.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "No value gives only origin",
          "workingLatex": "\\text{For } k\\neq0: \\text{ line } y=0; \\text{ for } k=0: \\text{ all points}",
          "explanation": "Shear never has only origin unless reconsidered.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Alternative: rotation matrix",
          "workingLatex": "\\text{Use different } M",
          "explanation": "Question as stated: shear always has $y=0$ fixed line when $k\\neq0$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "For $k=0$",
          "workingLatex": "M = I",
          "explanation": "Identity: all lines invariant, all points fixed.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer $k$",
          "workingLatex": "\\text{No such } k \\text{ for shear; or } k=0 \\text{ gives identity}",
          "explanation": "Interpret carefully.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Invariant lines $k=0$",
          "workingLatex": "\\text{Every line through } O",
          "explanation": "Identity preserves all lines.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Invariant points $k=0$",
          "workingLatex": "\\text{All points}",
          "explanation": "Identity.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Summary shear",
          "workingLatex": "k\\neq0: \\text{ fixed line } y=0",
          "explanation": "Standard shear behaviour.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Complete",
          "workingLatex": "k=0: I; \\; k\\neq0: \\text{ line } y=0 \\text{ of fixed points}",
          "explanation": "Answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "For $k=0$, $M=I$ and every line is invariant with every point fixed. For $k \\neq 0$, the line $y=0$ is a line of invariant points (not just the origin)."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Invariant points and lines",
    "subtopicId": "fm.y1.pure.invariance",
    "questionDiagram": null,
    "id": "fm.y1.pure.invariance.q069",
    "tags": [
      "proof",
      "reflection",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "questionText": "Show that for a $2 \\times 2$ reflection matrix, the mirror line is a line of invariant points and the perpendicular through the origin is an invariant line. Use $M = \\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$ as an example.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Reflection property",
          "workingLatex": "\\det(M) = -1",
          "explanation": "Identifies reflection.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Eigenvalues",
          "workingLatex": "\\lambda = 1, -1",
          "explanation": "Always for reflection.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "$\\lambda = 1$",
          "workingLatex": "\\text{Eigenvectors along mirror line}",
          "explanation": "Points fixed.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "$\\lambda = -1$",
          "workingLatex": "\\text{Eigenvectors perpendicular to mirror}",
          "explanation": "Points reflected through origin on this line.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Example $M$",
          "workingLatex": "\\text{Reflection in } y = x",
          "explanation": "Mirror line.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Mirror line",
          "workingLatex": "$y = x$: every point fixed",
          "explanation": "Line of invariant points.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Perpendicular",
          "workingLatex": "$y = -x$: points map to $(-y,-x)$, staying on line",
          "explanation": "Invariant line.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify $(2,2)$",
          "workingLatex": "(2,2)\\mapsto(2,2)",
          "explanation": "On mirror.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify $(2,-2)$",
          "workingLatex": "(2,-2)\\mapsto(-2,2)",
          "explanation": "On perpendicular, not fixed.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "General proof",
          "workingLatex": "M\\mathbf{n}=\\mathbf{n},\\; M\\mathbf{t}=-\\mathbf{t}",
          "explanation": "Normal and tangent directions.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Answer mirror",
          "workingLatex": "$y = x$",
          "explanation": "Line of invariant points.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Answer perpendicular",
          "workingLatex": "$y = -x$",
          "explanation": "Invariant line.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Theorem",
          "workingLatex": "\\text{Reflection: mirror fixed, perpendicular invariant}",
          "explanation": "General result.",
          "diagram": null
        }
      ],
      "finalAnswer": "Mirror line $y=x$: line of invariant points. Perpendicular $y=-x$: invariant line (points move but stay on the line)."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Invariant points and lines",
    "subtopicId": "fm.y1.pure.invariance",
    "questionDiagram": null,
    "id": "fm.y1.pure.invariance.q070",
    "tags": [
      "eigenvalues",
      "full-analysis",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "questionText": "The matrix $M = \\begin{pmatrix} 3 & 1 \\\\ 1 & 3 \\end{pmatrix}$ maps the unit square with vertices $(0,0),(1,0),(1,1),(0,1)$. Find the invariant lines through the origin, the line of invariant points (if any), and the image of the point $(2,0)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Eigenvalues",
          "workingLatex": "\\det(M-\\lambda I)=0 \\Rightarrow (3-\\lambda)^2-1=0",
          "explanation": "Characteristic equation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Solve",
          "workingLatex": "\\lambda = 4,\\; \\lambda = 2",
          "explanation": "Two eigenvalues.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Eigenvector $\\lambda=4$",
          "workingLatex": "(1,1)",
          "explanation": "Direction $y=x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Eigenvector $\\lambda=2$",
          "workingLatex": "(1,-1)",
          "explanation": "Direction $y=-x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Invariant lines",
          "workingLatex": "$y=x$ and $y=-x$",
          "explanation": "Through origin.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Line of invariant points",
          "workingLatex": "\\text{None (no } \\lambda=1)",
          "explanation": "No eigenvalue $1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Only origin fixed",
          "workingLatex": "(0,0)\\mapsto(0,0)",
          "explanation": "Trivial invariant point.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Image of $(2,0)$",
          "workingLatex": "M(2,0) = (6,2)",
          "explanation": "Matrix multiplication.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Decompose $(2,0)$",
          "workingLatex": "\\text{Along } y=x \\text{ and } y=-x",
          "explanation": "Eigenbasis expansion.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Stretch factors",
          "workingLatex": "\\times 4 \\text{ along } y=x,\\; \\times 2 \\text{ along } y=-x",
          "explanation": "Action on invariant lines.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Answer lines",
          "workingLatex": "$y=x$, $y=-x$",
          "explanation": "Invariant lines.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Answer fixed",
          "workingLatex": "\\text{Only } (0,0)",
          "explanation": "No line of invariant points.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Answer image",
          "workingLatex": "(6,2)$",
          "explanation": "Image of $(2,0)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Invariant lines: $y=x$ and $y=-x$. Only invariant point: $(0,0)$. Image of $(2,0)$: $(6,2)$."
    }
  }
];
