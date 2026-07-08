import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Linear transformations",
    "subtopicId": "fm.y1.pure.linear-transformations",
    "questionDiagram": null,
    "id": "fm.y1.pure.linear-transformations.q001",
    "tags": [
      "rotation",
      "identify-transformation"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Describe fully the transformation represented by $M = \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Inspect the matrix",
          "workingLatex": "M = \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}",
          "explanation": "Compare with standard transformation matrices.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Check determinant",
          "workingLatex": "\\det(M) = (0)(0) - (-1)(1) = 1",
          "explanation": "Determinant sign helps distinguish rotation/reflection from enlargement.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare structure",
          "workingLatex": "\\text{Match rows and columns to known forms}",
          "explanation": "Rotations have orthogonal rows; reflections have determinant $-1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify the transformation",
          "workingLatex": "Rotation $90^\\circ$ anticlockwise about the origin.",
          "explanation": "Name the geometric transformation represented.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify with a test point",
          "workingLatex": "\\text{Apply } M \\text{ to } (1,0) \\text{ and } (0,1)",
          "explanation": "Images of basis vectors confirm the transformation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "Rotation $90^\\circ$ anticlockwise about the origin.",
          "explanation": "State the transformation clearly.",
          "diagram": null
        }
      ],
      "finalAnswer": "Rotation $90^\\circ$ anticlockwise about the origin."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Linear transformations",
    "subtopicId": "fm.y1.pure.linear-transformations",
    "questionDiagram": null,
    "id": "fm.y1.pure.linear-transformations.q002",
    "tags": [
      "rotation",
      "identify-transformation"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Describe fully the transformation represented by $M = \\begin{pmatrix} -1 & 0 \\\\ 0 & -1 \\end{pmatrix}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Inspect the matrix",
          "workingLatex": "M = \\begin{pmatrix} -1 & 0 \\\\ 0 & -1 \\end{pmatrix}",
          "explanation": "Compare with standard transformation matrices.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Check determinant",
          "workingLatex": "\\det(M) = (-1)(-1) - (0)(0) = 1",
          "explanation": "Determinant sign helps distinguish rotation/reflection from enlargement.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare structure",
          "workingLatex": "\\text{Match rows and columns to known forms}",
          "explanation": "Rotations have orthogonal rows; reflections have determinant $-1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify the transformation",
          "workingLatex": "Rotation $180^\\circ$ about the origin (equivalently, enlargement scale factor $-1$).",
          "explanation": "Name the geometric transformation represented.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify with a test point",
          "workingLatex": "\\text{Apply } M \\text{ to } (1,0) \\text{ and } (0,1)",
          "explanation": "Images of basis vectors confirm the transformation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "Rotation $180^\\circ$ about the origin (equivalently, enlargement scale factor $-1$).",
          "explanation": "State the transformation clearly.",
          "diagram": null
        }
      ],
      "finalAnswer": "Rotation $180^\\circ$ about the origin (equivalently, enlargement scale factor $-1$)."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Linear transformations",
    "subtopicId": "fm.y1.pure.linear-transformations",
    "questionDiagram": null,
    "id": "fm.y1.pure.linear-transformations.q003",
    "tags": [
      "rotation",
      "identify-transformation"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Describe fully the transformation represented by $M = \\begin{pmatrix} 0 & 1 \\\\ -1 & 0 \\end{pmatrix}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Inspect the matrix",
          "workingLatex": "M = \\begin{pmatrix} 0 & 1 \\\\ -1 & 0 \\end{pmatrix}",
          "explanation": "Compare with standard transformation matrices.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Check determinant",
          "workingLatex": "\\det(M) = (0)(0) - (1)(-1) = 1",
          "explanation": "Determinant sign helps distinguish rotation/reflection from enlargement.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare structure",
          "workingLatex": "\\text{Match rows and columns to known forms}",
          "explanation": "Rotations have orthogonal rows; reflections have determinant $-1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify the transformation",
          "workingLatex": "Rotation $90^\\circ$ clockwise about the origin.",
          "explanation": "Name the geometric transformation represented.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify with a test point",
          "workingLatex": "\\text{Apply } M \\text{ to } (1,0) \\text{ and } (0,1)",
          "explanation": "Images of basis vectors confirm the transformation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "Rotation $90^\\circ$ clockwise about the origin.",
          "explanation": "State the transformation clearly.",
          "diagram": null
        }
      ],
      "finalAnswer": "Rotation $90^\\circ$ clockwise about the origin."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Linear transformations",
    "subtopicId": "fm.y1.pure.linear-transformations",
    "questionDiagram": null,
    "id": "fm.y1.pure.linear-transformations.q004",
    "tags": [
      "reflection",
      "identify-transformation"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Describe fully the transformation represented by $M = \\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Inspect the matrix",
          "workingLatex": "M = \\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}",
          "explanation": "Compare with standard transformation matrices.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Check determinant",
          "workingLatex": "\\det(M) = (1)(-1) - (0)(0) = -1",
          "explanation": "Determinant sign helps distinguish rotation/reflection from enlargement.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare structure",
          "workingLatex": "\\text{Match rows and columns to known forms}",
          "explanation": "Rotations have orthogonal rows; reflections have determinant $-1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify the transformation",
          "workingLatex": "Reflection in the $x$-axis.",
          "explanation": "Name the geometric transformation represented.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify with a test point",
          "workingLatex": "\\text{Apply } M \\text{ to } (1,0) \\text{ and } (0,1)",
          "explanation": "Images of basis vectors confirm the transformation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "Reflection in the $x$-axis.",
          "explanation": "State the transformation clearly.",
          "diagram": null
        }
      ],
      "finalAnswer": "Reflection in the $x$-axis."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Linear transformations",
    "subtopicId": "fm.y1.pure.linear-transformations",
    "questionDiagram": null,
    "id": "fm.y1.pure.linear-transformations.q005",
    "tags": [
      "reflection",
      "identify-transformation"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Describe fully the transformation represented by $M = \\begin{pmatrix} -1 & 0 \\\\ 0 & 1 \\end{pmatrix}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Inspect the matrix",
          "workingLatex": "M = \\begin{pmatrix} -1 & 0 \\\\ 0 & 1 \\end{pmatrix}",
          "explanation": "Compare with standard transformation matrices.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Check determinant",
          "workingLatex": "\\det(M) = (-1)(1) - (0)(0) = -1",
          "explanation": "Determinant sign helps distinguish rotation/reflection from enlargement.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare structure",
          "workingLatex": "\\text{Match rows and columns to known forms}",
          "explanation": "Rotations have orthogonal rows; reflections have determinant $-1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify the transformation",
          "workingLatex": "Reflection in the $y$-axis.",
          "explanation": "Name the geometric transformation represented.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify with a test point",
          "workingLatex": "\\text{Apply } M \\text{ to } (1,0) \\text{ and } (0,1)",
          "explanation": "Images of basis vectors confirm the transformation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "Reflection in the $y$-axis.",
          "explanation": "State the transformation clearly.",
          "diagram": null
        }
      ],
      "finalAnswer": "Reflection in the $y$-axis."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Linear transformations",
    "subtopicId": "fm.y1.pure.linear-transformations",
    "questionDiagram": null,
    "id": "fm.y1.pure.linear-transformations.q006",
    "tags": [
      "reflection",
      "identify-transformation"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Describe fully the transformation represented by $M = \\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Inspect the matrix",
          "workingLatex": "M = \\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}",
          "explanation": "Compare with standard transformation matrices.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Check determinant",
          "workingLatex": "\\det(M) = (0)(0) - (1)(1) = -1",
          "explanation": "Determinant sign helps distinguish rotation/reflection from enlargement.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare structure",
          "workingLatex": "\\text{Match rows and columns to known forms}",
          "explanation": "Rotations have orthogonal rows; reflections have determinant $-1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify the transformation",
          "workingLatex": "Reflection in the line $y = x$.",
          "explanation": "Name the geometric transformation represented.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify with a test point",
          "workingLatex": "\\text{Apply } M \\text{ to } (1,0) \\text{ and } (0,1)",
          "explanation": "Images of basis vectors confirm the transformation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "Reflection in the line $y = x$.",
          "explanation": "State the transformation clearly.",
          "diagram": null
        }
      ],
      "finalAnswer": "Reflection in the line $y = x$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Linear transformations",
    "subtopicId": "fm.y1.pure.linear-transformations",
    "questionDiagram": null,
    "id": "fm.y1.pure.linear-transformations.q007",
    "tags": [
      "enlargement",
      "identify-transformation"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Describe fully the transformation represented by $M = \\begin{pmatrix} 2 & 0 \\\\ 0 & 2 \\end{pmatrix}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Inspect the matrix",
          "workingLatex": "M = \\begin{pmatrix} 2 & 0 \\\\ 0 & 2 \\end{pmatrix}",
          "explanation": "Compare with standard transformation matrices.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Check determinant",
          "workingLatex": "\\det(M) = (2)(2) - (0)(0) = 4",
          "explanation": "Determinant sign helps distinguish rotation/reflection from enlargement.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare structure",
          "workingLatex": "\\text{Match rows and columns to known forms}",
          "explanation": "Rotations have orthogonal rows; reflections have determinant $-1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify the transformation",
          "workingLatex": "Enlargement, scale factor $2$, centre the origin.",
          "explanation": "Name the geometric transformation represented.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify with a test point",
          "workingLatex": "\\text{Apply } M \\text{ to } (1,0) \\text{ and } (0,1)",
          "explanation": "Images of basis vectors confirm the transformation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "Enlargement, scale factor $2$, centre the origin.",
          "explanation": "State the transformation clearly.",
          "diagram": null
        }
      ],
      "finalAnswer": "Enlargement, scale factor $2$, centre the origin."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Linear transformations",
    "subtopicId": "fm.y1.pure.linear-transformations",
    "questionDiagram": null,
    "id": "fm.y1.pure.linear-transformations.q008",
    "tags": [
      "shear",
      "identify-transformation"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Describe fully the transformation represented by $M = \\begin{pmatrix} 1 & 2 \\\\ 0 & 1 \\end{pmatrix}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Inspect the matrix",
          "workingLatex": "M = \\begin{pmatrix} 1 & 2 \\\\ 0 & 1 \\end{pmatrix}",
          "explanation": "Compare with standard transformation matrices.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Check determinant",
          "workingLatex": "\\det(M) = (1)(1) - (2)(0) = 1",
          "explanation": "Determinant sign helps distinguish rotation/reflection from enlargement.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare structure",
          "workingLatex": "\\text{Match rows and columns to known forms}",
          "explanation": "Rotations have orthogonal rows; reflections have determinant $-1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify the transformation",
          "workingLatex": "Shear parallel to the $x$-axis with factor $2$.",
          "explanation": "Name the geometric transformation represented.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify with a test point",
          "workingLatex": "\\text{Apply } M \\text{ to } (1,0) \\text{ and } (0,1)",
          "explanation": "Images of basis vectors confirm the transformation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "Shear parallel to the $x$-axis with factor $2$.",
          "explanation": "State the transformation clearly.",
          "diagram": null
        }
      ],
      "finalAnswer": "Shear parallel to the $x$-axis with factor $2$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Linear transformations",
    "subtopicId": "fm.y1.pure.linear-transformations",
    "questionDiagram": null,
    "id": "fm.y1.pure.linear-transformations.q009",
    "tags": [
      "rotation",
      "image-of-point"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "The transformation represented by $M = \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}$ maps point $(3, 1)$. Find the image of this point.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the transformation matrix",
          "workingLatex": "M = \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}",
          "explanation": "This matrix represents rotation $90^\\circ$ anticlockwise about the origin.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the point as a column vector",
          "workingLatex": "\\mathbf{p} = \\begin{pmatrix} 3 \\\\ 1 \\end{pmatrix}",
          "explanation": "Points are multiplied on the left by the matrix.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set up the product",
          "workingLatex": "M\\mathbf{p} = \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}\\begin{pmatrix} 3 \\\\ 1 \\end{pmatrix}",
          "explanation": "Matrix multiplication gives the image.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Multiply the first row",
          "workingLatex": "0\\times3 + -1\\times1 = -1",
          "explanation": "The top entry of the image vector.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Multiply the second row",
          "workingLatex": "1\\times3 + 0\\times1 = 3",
          "explanation": "The bottom entry of the image vector.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the image",
          "workingLatex": "\\mathbf{p}' = \\begin{pmatrix} -1 \\\\ 3 \\end{pmatrix}",
          "explanation": "Write the image as coordinates $(x', y')$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(-1, 3)$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Linear transformations",
    "subtopicId": "fm.y1.pure.linear-transformations",
    "questionDiagram": null,
    "id": "fm.y1.pure.linear-transformations.q010",
    "tags": [
      "rotation",
      "image-of-point"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "The transformation represented by $M = \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}$ maps point $(-2, 4)$. Find the image of this point.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the transformation matrix",
          "workingLatex": "M = \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}",
          "explanation": "This matrix represents rotation $90^\\circ$ anticlockwise about the origin.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the point as a column vector",
          "workingLatex": "\\mathbf{p} = \\begin{pmatrix} -2 \\\\ 4 \\end{pmatrix}",
          "explanation": "Points are multiplied on the left by the matrix.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set up the product",
          "workingLatex": "M\\mathbf{p} = \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}\\begin{pmatrix} -2 \\\\ 4 \\end{pmatrix}",
          "explanation": "Matrix multiplication gives the image.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Multiply the first row",
          "workingLatex": "0\\times-2 + -1\\times4 = -4",
          "explanation": "The top entry of the image vector.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Multiply the second row",
          "workingLatex": "1\\times-2 + 0\\times4 = -2",
          "explanation": "The bottom entry of the image vector.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the image",
          "workingLatex": "\\mathbf{p}' = \\begin{pmatrix} -4 \\\\ -2 \\end{pmatrix}",
          "explanation": "Write the image as coordinates $(x', y')$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(-4, -2)$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Linear transformations",
    "subtopicId": "fm.y1.pure.linear-transformations",
    "questionDiagram": null,
    "id": "fm.y1.pure.linear-transformations.q011",
    "tags": [
      "reflection",
      "image-of-point"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "The transformation represented by $M = \\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}$ maps point $(5, 2)$. Find the image of this point.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the transformation matrix",
          "workingLatex": "M = \\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}",
          "explanation": "This matrix represents reflection in the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the point as a column vector",
          "workingLatex": "\\mathbf{p} = \\begin{pmatrix} 5 \\\\ 2 \\end{pmatrix}",
          "explanation": "Points are multiplied on the left by the matrix.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set up the product",
          "workingLatex": "M\\mathbf{p} = \\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}\\begin{pmatrix} 5 \\\\ 2 \\end{pmatrix}",
          "explanation": "Matrix multiplication gives the image.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Multiply the first row",
          "workingLatex": "1\\times5 + 0\\times2 = 5",
          "explanation": "The top entry of the image vector.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Multiply the second row",
          "workingLatex": "0\\times5 + -1\\times2 = -2",
          "explanation": "The bottom entry of the image vector.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the image",
          "workingLatex": "\\mathbf{p}' = \\begin{pmatrix} 5 \\\\ -2 \\end{pmatrix}",
          "explanation": "Write the image as coordinates $(x', y')$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(5, -2)$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Linear transformations",
    "subtopicId": "fm.y1.pure.linear-transformations",
    "questionDiagram": null,
    "id": "fm.y1.pure.linear-transformations.q012",
    "tags": [
      "reflection",
      "image-of-point"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "The transformation represented by $M = \\begin{pmatrix} -1 & 0 \\\\ 0 & 1 \\end{pmatrix}$ maps point $(4, -3)$. Find the image of this point.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the transformation matrix",
          "workingLatex": "M = \\begin{pmatrix} -1 & 0 \\\\ 0 & 1 \\end{pmatrix}",
          "explanation": "This matrix represents reflection in the $y$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the point as a column vector",
          "workingLatex": "\\mathbf{p} = \\begin{pmatrix} 4 \\\\ -3 \\end{pmatrix}",
          "explanation": "Points are multiplied on the left by the matrix.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set up the product",
          "workingLatex": "M\\mathbf{p} = \\begin{pmatrix} -1 & 0 \\\\ 0 & 1 \\end{pmatrix}\\begin{pmatrix} 4 \\\\ -3 \\end{pmatrix}",
          "explanation": "Matrix multiplication gives the image.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Multiply the first row",
          "workingLatex": "-1\\times4 + 0\\times-3 = -4",
          "explanation": "The top entry of the image vector.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Multiply the second row",
          "workingLatex": "0\\times4 + 1\\times-3 = -3",
          "explanation": "The bottom entry of the image vector.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the image",
          "workingLatex": "\\mathbf{p}' = \\begin{pmatrix} -4 \\\\ -3 \\end{pmatrix}",
          "explanation": "Write the image as coordinates $(x', y')$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(-4, -3)$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Linear transformations",
    "subtopicId": "fm.y1.pure.linear-transformations",
    "questionDiagram": null,
    "id": "fm.y1.pure.linear-transformations.q013",
    "tags": [
      "reflection",
      "image-of-point"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "The transformation represented by $M = \\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$ maps point $(2, 7)$. Find the image of this point.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the transformation matrix",
          "workingLatex": "M = \\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}",
          "explanation": "This matrix represents reflection in the line $y = x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the point as a column vector",
          "workingLatex": "\\mathbf{p} = \\begin{pmatrix} 2 \\\\ 7 \\end{pmatrix}",
          "explanation": "Points are multiplied on the left by the matrix.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set up the product",
          "workingLatex": "M\\mathbf{p} = \\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}\\begin{pmatrix} 2 \\\\ 7 \\end{pmatrix}",
          "explanation": "Matrix multiplication gives the image.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Multiply the first row",
          "workingLatex": "0\\times2 + 1\\times7 = 7",
          "explanation": "The top entry of the image vector.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Multiply the second row",
          "workingLatex": "1\\times2 + 0\\times7 = 2",
          "explanation": "The bottom entry of the image vector.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the image",
          "workingLatex": "\\mathbf{p}' = \\begin{pmatrix} 7 \\\\ 2 \\end{pmatrix}",
          "explanation": "Write the image as coordinates $(x', y')$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(7, 2)$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Linear transformations",
    "subtopicId": "fm.y1.pure.linear-transformations",
    "questionDiagram": null,
    "id": "fm.y1.pure.linear-transformations.q014",
    "tags": [
      "enlargement",
      "image-of-point"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "The transformation represented by $M = \\begin{pmatrix} 2 & 0 \\\\ 0 & 2 \\end{pmatrix}$ maps point $(-1, 3)$. Find the image of this point.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the transformation matrix",
          "workingLatex": "M = \\begin{pmatrix} 2 & 0 \\\\ 0 & 2 \\end{pmatrix}",
          "explanation": "This matrix represents enlargement, scale factor 2, centre the origin.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the point as a column vector",
          "workingLatex": "\\mathbf{p} = \\begin{pmatrix} -1 \\\\ 3 \\end{pmatrix}",
          "explanation": "Points are multiplied on the left by the matrix.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set up the product",
          "workingLatex": "M\\mathbf{p} = \\begin{pmatrix} 2 & 0 \\\\ 0 & 2 \\end{pmatrix}\\begin{pmatrix} -1 \\\\ 3 \\end{pmatrix}",
          "explanation": "Matrix multiplication gives the image.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Multiply the first row",
          "workingLatex": "2\\times-1 + 0\\times3 = -2",
          "explanation": "The top entry of the image vector.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Multiply the second row",
          "workingLatex": "0\\times-1 + 2\\times3 = 6",
          "explanation": "The bottom entry of the image vector.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the image",
          "workingLatex": "\\mathbf{p}' = \\begin{pmatrix} -2 \\\\ 6 \\end{pmatrix}",
          "explanation": "Write the image as coordinates $(x', y')$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(-2, 6)$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Linear transformations",
    "subtopicId": "fm.y1.pure.linear-transformations",
    "questionDiagram": null,
    "id": "fm.y1.pure.linear-transformations.q015",
    "tags": [
      "enlargement",
      "image-of-point"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "The transformation represented by $M = \\begin{pmatrix} 3 & 0 \\\\ 0 & 3 \\end{pmatrix}$ maps point $(2, -1)$. Find the image of this point.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the transformation matrix",
          "workingLatex": "M = \\begin{pmatrix} 3 & 0 \\\\ 0 & 3 \\end{pmatrix}",
          "explanation": "This matrix represents enlargement, scale factor 3, centre the origin.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the point as a column vector",
          "workingLatex": "\\mathbf{p} = \\begin{pmatrix} 2 \\\\ -1 \\end{pmatrix}",
          "explanation": "Points are multiplied on the left by the matrix.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set up the product",
          "workingLatex": "M\\mathbf{p} = \\begin{pmatrix} 3 & 0 \\\\ 0 & 3 \\end{pmatrix}\\begin{pmatrix} 2 \\\\ -1 \\end{pmatrix}",
          "explanation": "Matrix multiplication gives the image.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Multiply the first row",
          "workingLatex": "3\\times2 + 0\\times-1 = 6",
          "explanation": "The top entry of the image vector.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Multiply the second row",
          "workingLatex": "0\\times2 + 3\\times-1 = -3",
          "explanation": "The bottom entry of the image vector.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the image",
          "workingLatex": "\\mathbf{p}' = \\begin{pmatrix} 6 \\\\ -3 \\end{pmatrix}",
          "explanation": "Write the image as coordinates $(x', y')$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(6, -3)$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Linear transformations",
    "subtopicId": "fm.y1.pure.linear-transformations",
    "questionDiagram": null,
    "id": "fm.y1.pure.linear-transformations.q016",
    "tags": [
      "rotation",
      "image-of-point"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "The transformation represented by $M = \\begin{pmatrix} -1 & 0 \\\\ 0 & -1 \\end{pmatrix}$ maps point $(1, 4)$. Find the image of this point.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the transformation matrix",
          "workingLatex": "M = \\begin{pmatrix} -1 & 0 \\\\ 0 & -1 \\end{pmatrix}",
          "explanation": "This matrix represents rotation $180^\\circ$ about the origin.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the point as a column vector",
          "workingLatex": "\\mathbf{p} = \\begin{pmatrix} 1 \\\\ 4 \\end{pmatrix}",
          "explanation": "Points are multiplied on the left by the matrix.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set up the product",
          "workingLatex": "M\\mathbf{p} = \\begin{pmatrix} -1 & 0 \\\\ 0 & -1 \\end{pmatrix}\\begin{pmatrix} 1 \\\\ 4 \\end{pmatrix}",
          "explanation": "Matrix multiplication gives the image.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Multiply the first row",
          "workingLatex": "-1\\times1 + 0\\times4 = -1",
          "explanation": "The top entry of the image vector.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Multiply the second row",
          "workingLatex": "0\\times1 + -1\\times4 = -4",
          "explanation": "The bottom entry of the image vector.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the image",
          "workingLatex": "\\mathbf{p}' = \\begin{pmatrix} -1 \\\\ -4 \\end{pmatrix}",
          "explanation": "Write the image as coordinates $(x', y')$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(-1, -4)$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Linear transformations",
    "subtopicId": "fm.y1.pure.linear-transformations",
    "questionDiagram": null,
    "id": "fm.y1.pure.linear-transformations.q017",
    "tags": [
      "shear",
      "image-of-point"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "The transformation represented by $M = \\begin{pmatrix} 1 & 3 \\\\ 0 & 1 \\end{pmatrix}$ maps point $(1, 2)$. Find the image of this point.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the transformation matrix",
          "workingLatex": "M = \\begin{pmatrix} 1 & 3 \\\\ 0 & 1 \\end{pmatrix}",
          "explanation": "This matrix represents shear parallel to the $x$-axis with factor 3.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the point as a column vector",
          "workingLatex": "\\mathbf{p} = \\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix}",
          "explanation": "Points are multiplied on the left by the matrix.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set up the product",
          "workingLatex": "M\\mathbf{p} = \\begin{pmatrix} 1 & 3 \\\\ 0 & 1 \\end{pmatrix}\\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix}",
          "explanation": "Matrix multiplication gives the image.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Multiply the first row",
          "workingLatex": "1\\times1 + 3\\times2 = 7",
          "explanation": "The top entry of the image vector.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Multiply the second row",
          "workingLatex": "0\\times1 + 1\\times2 = 2",
          "explanation": "The bottom entry of the image vector.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the image",
          "workingLatex": "\\mathbf{p}' = \\begin{pmatrix} 7 \\\\ 2 \\end{pmatrix}",
          "explanation": "Write the image as coordinates $(x', y')$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(7, 2)$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Linear transformations",
    "subtopicId": "fm.y1.pure.linear-transformations",
    "questionDiagram": null,
    "id": "fm.y1.pure.linear-transformations.q018",
    "tags": [
      "shear",
      "image-of-point"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "The transformation represented by $M = \\begin{pmatrix} 1 & 0 \\\\ 2 & 1 \\end{pmatrix}$ maps point $(3, 1)$. Find the image of this point.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the transformation matrix",
          "workingLatex": "M = \\begin{pmatrix} 1 & 0 \\\\ 2 & 1 \\end{pmatrix}",
          "explanation": "This matrix represents shear parallel to the $y$-axis with factor 2.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the point as a column vector",
          "workingLatex": "\\mathbf{p} = \\begin{pmatrix} 3 \\\\ 1 \\end{pmatrix}",
          "explanation": "Points are multiplied on the left by the matrix.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set up the product",
          "workingLatex": "M\\mathbf{p} = \\begin{pmatrix} 1 & 0 \\\\ 2 & 1 \\end{pmatrix}\\begin{pmatrix} 3 \\\\ 1 \\end{pmatrix}",
          "explanation": "Matrix multiplication gives the image.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Multiply the first row",
          "workingLatex": "1\\times3 + 0\\times1 = 3",
          "explanation": "The top entry of the image vector.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Multiply the second row",
          "workingLatex": "2\\times3 + 1\\times1 = 7",
          "explanation": "The bottom entry of the image vector.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the image",
          "workingLatex": "\\mathbf{p}' = \\begin{pmatrix} 3 \\\\ 7 \\end{pmatrix}",
          "explanation": "Write the image as coordinates $(x', y')$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(3, 7)$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Linear transformations",
    "subtopicId": "fm.y1.pure.linear-transformations",
    "questionDiagram": null,
    "id": "fm.y1.pure.linear-transformations.q019",
    "tags": [
      "rotation",
      "image-of-point"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "The transformation represented by $M = \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}$ maps point $(0, 5)$. Find the image of this point.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the transformation matrix",
          "workingLatex": "M = \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}",
          "explanation": "This matrix represents rotation $90^\\circ$ anticlockwise about the origin.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the point as a column vector",
          "workingLatex": "\\mathbf{p} = \\begin{pmatrix} 0 \\\\ 5 \\end{pmatrix}",
          "explanation": "Points are multiplied on the left by the matrix.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set up the product",
          "workingLatex": "M\\mathbf{p} = \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}\\begin{pmatrix} 0 \\\\ 5 \\end{pmatrix}",
          "explanation": "Matrix multiplication gives the image.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Multiply the first row",
          "workingLatex": "0\\times0 + -1\\times5 = -5",
          "explanation": "The top entry of the image vector.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Multiply the second row",
          "workingLatex": "1\\times0 + 0\\times5 = 0",
          "explanation": "The bottom entry of the image vector.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the image",
          "workingLatex": "\\mathbf{p}' = \\begin{pmatrix} -5 \\\\ 0 \\end{pmatrix}",
          "explanation": "Write the image as coordinates $(x', y')$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(-5, 0)$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Linear transformations",
    "subtopicId": "fm.y1.pure.linear-transformations",
    "questionDiagram": null,
    "id": "fm.y1.pure.linear-transformations.q020",
    "tags": [
      "reflection",
      "image-of-point"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "The transformation represented by $M = \\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}$ maps point $(-3, -2)$. Find the image of this point.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the transformation matrix",
          "workingLatex": "M = \\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}",
          "explanation": "This matrix represents reflection in the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the point as a column vector",
          "workingLatex": "\\mathbf{p} = \\begin{pmatrix} -3 \\\\ -2 \\end{pmatrix}",
          "explanation": "Points are multiplied on the left by the matrix.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set up the product",
          "workingLatex": "M\\mathbf{p} = \\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}\\begin{pmatrix} -3 \\\\ -2 \\end{pmatrix}",
          "explanation": "Matrix multiplication gives the image.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Multiply the first row",
          "workingLatex": "1\\times-3 + 0\\times-2 = -3",
          "explanation": "The top entry of the image vector.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Multiply the second row",
          "workingLatex": "0\\times-3 + -1\\times-2 = 2",
          "explanation": "The bottom entry of the image vector.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the image",
          "workingLatex": "\\mathbf{p}' = \\begin{pmatrix} -3 \\\\ 2 \\end{pmatrix}",
          "explanation": "Write the image as coordinates $(x', y')$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(-3, 2)$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Linear transformations",
    "subtopicId": "fm.y1.pure.linear-transformations",
    "questionDiagram": null,
    "id": "fm.y1.pure.linear-transformations.q021",
    "tags": [
      "reflection",
      "image-of-point"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "The transformation represented by $M = \\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$ maps point $(-4, 1)$. Find the image of this point.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the transformation matrix",
          "workingLatex": "M = \\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}",
          "explanation": "This matrix represents reflection in the line $y = x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the point as a column vector",
          "workingLatex": "\\mathbf{p} = \\begin{pmatrix} -4 \\\\ 1 \\end{pmatrix}",
          "explanation": "Points are multiplied on the left by the matrix.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set up the product",
          "workingLatex": "M\\mathbf{p} = \\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}\\begin{pmatrix} -4 \\\\ 1 \\end{pmatrix}",
          "explanation": "Matrix multiplication gives the image.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Multiply the first row",
          "workingLatex": "0\\times-4 + 1\\times1 = 1",
          "explanation": "The top entry of the image vector.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Multiply the second row",
          "workingLatex": "1\\times-4 + 0\\times1 = -4",
          "explanation": "The bottom entry of the image vector.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the image",
          "workingLatex": "\\mathbf{p}' = \\begin{pmatrix} 1 \\\\ -4 \\end{pmatrix}",
          "explanation": "Write the image as coordinates $(x', y')$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(1, -4)$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Linear transformations",
    "subtopicId": "fm.y1.pure.linear-transformations",
    "questionDiagram": null,
    "id": "fm.y1.pure.linear-transformations.q022",
    "tags": [
      "rotation",
      "image-of-point"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "The transformation represented by $M = \\begin{pmatrix} 0 & 1 \\\\ -1 & 0 \\end{pmatrix}$ maps point $(6, 2)$. Find the image of this point.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the transformation matrix",
          "workingLatex": "M = \\begin{pmatrix} 0 & 1 \\\\ -1 & 0 \\end{pmatrix}",
          "explanation": "This matrix represents rotation $270^\\circ$ anticlockwise (or $90^\\circ$ clockwise) about the origin.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the point as a column vector",
          "workingLatex": "\\mathbf{p} = \\begin{pmatrix} 6 \\\\ 2 \\end{pmatrix}",
          "explanation": "Points are multiplied on the left by the matrix.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set up the product",
          "workingLatex": "M\\mathbf{p} = \\begin{pmatrix} 0 & 1 \\\\ -1 & 0 \\end{pmatrix}\\begin{pmatrix} 6 \\\\ 2 \\end{pmatrix}",
          "explanation": "Matrix multiplication gives the image.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Multiply the first row",
          "workingLatex": "0\\times6 + 1\\times2 = 2",
          "explanation": "The top entry of the image vector.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Multiply the second row",
          "workingLatex": "-1\\times6 + 0\\times2 = -6",
          "explanation": "The bottom entry of the image vector.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the image",
          "workingLatex": "\\mathbf{p}' = \\begin{pmatrix} 2 \\\\ -6 \\end{pmatrix}",
          "explanation": "Write the image as coordinates $(x', y')$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(2, -6)$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Linear transformations",
    "subtopicId": "fm.y1.pure.linear-transformations",
    "questionDiagram": null,
    "id": "fm.y1.pure.linear-transformations.q023",
    "tags": [
      "reflection",
      "image-of-point"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "The transformation represented by $M = \\begin{pmatrix} 0 & -1 \\\\ -1 & 0 \\end{pmatrix}$ maps point $(1, 1)$. Find the image of this point.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the transformation matrix",
          "workingLatex": "M = \\begin{pmatrix} 0 & -1 \\\\ -1 & 0 \\end{pmatrix}",
          "explanation": "This matrix represents reflection in the line $y = -x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the point as a column vector",
          "workingLatex": "\\mathbf{p} = \\begin{pmatrix} 1 \\\\ 1 \\end{pmatrix}",
          "explanation": "Points are multiplied on the left by the matrix.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set up the product",
          "workingLatex": "M\\mathbf{p} = \\begin{pmatrix} 0 & -1 \\\\ -1 & 0 \\end{pmatrix}\\begin{pmatrix} 1 \\\\ 1 \\end{pmatrix}",
          "explanation": "Matrix multiplication gives the image.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Multiply the first row",
          "workingLatex": "0\\times1 + -1\\times1 = -1",
          "explanation": "The top entry of the image vector.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Multiply the second row",
          "workingLatex": "-1\\times1 + 0\\times1 = -1",
          "explanation": "The bottom entry of the image vector.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the image",
          "workingLatex": "\\mathbf{p}' = \\begin{pmatrix} -1 \\\\ -1 \\end{pmatrix}",
          "explanation": "Write the image as coordinates $(x', y')$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(-1, -1)$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Linear transformations",
    "subtopicId": "fm.y1.pure.linear-transformations",
    "questionDiagram": null,
    "id": "fm.y1.pure.linear-transformations.q024",
    "tags": [
      "enlargement",
      "image-of-point"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "The transformation represented by $M = \\begin{pmatrix} 0.5 & 0 \\\\ 0 & 0.5 \\end{pmatrix}$ maps point $(4, 6)$. Find the image of this point.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the transformation matrix",
          "workingLatex": "M = \\begin{pmatrix} 0.5 & 0 \\\\ 0 & 0.5 \\end{pmatrix}",
          "explanation": "This matrix represents enlargement, scale factor 0.5, centre the origin.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the point as a column vector",
          "workingLatex": "\\mathbf{p} = \\begin{pmatrix} 4 \\\\ 6 \\end{pmatrix}",
          "explanation": "Points are multiplied on the left by the matrix.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set up the product",
          "workingLatex": "M\\mathbf{p} = \\begin{pmatrix} 0.5 & 0 \\\\ 0 & 0.5 \\end{pmatrix}\\begin{pmatrix} 4 \\\\ 6 \\end{pmatrix}",
          "explanation": "Matrix multiplication gives the image.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Multiply the first row",
          "workingLatex": "0.5\\times4 + 0\\times6 = 2",
          "explanation": "The top entry of the image vector.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Multiply the second row",
          "workingLatex": "0\\times4 + 0.5\\times6 = 3",
          "explanation": "The bottom entry of the image vector.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the image",
          "workingLatex": "\\mathbf{p}' = \\begin{pmatrix} 2 \\\\ 3 \\end{pmatrix}",
          "explanation": "Write the image as coordinates $(x', y')$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(2, 3)$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Linear transformations",
    "subtopicId": "fm.y1.pure.linear-transformations",
    "questionDiagram": null,
    "id": "fm.y1.pure.linear-transformations.q025",
    "tags": [
      "identity",
      "image-of-point"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "The transformation represented by $M = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$ maps point $(7, -2)$. Find the image of this point.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the transformation matrix",
          "workingLatex": "M = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}",
          "explanation": "This matrix represents the identity transformation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the point as a column vector",
          "workingLatex": "\\mathbf{p} = \\begin{pmatrix} 7 \\\\ -2 \\end{pmatrix}",
          "explanation": "Points are multiplied on the left by the matrix.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set up the product",
          "workingLatex": "M\\mathbf{p} = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}\\begin{pmatrix} 7 \\\\ -2 \\end{pmatrix}",
          "explanation": "Matrix multiplication gives the image.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Multiply the first row",
          "workingLatex": "1\\times7 + 0\\times-2 = 7",
          "explanation": "The top entry of the image vector.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Multiply the second row",
          "workingLatex": "0\\times7 + 1\\times-2 = -2",
          "explanation": "The bottom entry of the image vector.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the image",
          "workingLatex": "\\mathbf{p}' = \\begin{pmatrix} 7 \\\\ -2 \\end{pmatrix}",
          "explanation": "Write the image as coordinates $(x', y')$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(7, -2)$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Linear transformations",
    "subtopicId": "fm.y1.pure.linear-transformations",
    "questionDiagram": null,
    "id": "fm.y1.pure.linear-transformations.q026",
    "tags": [
      "basic",
      "rotation-matrix"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "questionText": "Find the matrix representing a rotation of $90^\\circ$ anticlockwise about the origin.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rotation matrix formula",
          "workingLatex": "\\begin{pmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{pmatrix}",
          "explanation": "Anticlockwise rotation about the origin uses this standard form.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute the angle",
          "workingLatex": "\\theta = 90^\\circ",
          "explanation": "Use exact values for common angles.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate trig values",
          "workingLatex": "\\cos 90^\\circ = 0,\\quad \\sin 90^\\circ = 1",
          "explanation": "Memorise exact values for $90^\\circ$, $180^\\circ$, $270^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the matrix",
          "workingLatex": "M = \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}",
          "explanation": "Substitute into the rotation template.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check with $(1,0)$",
          "workingLatex": "M\\begin{pmatrix} 1 \\\\ 0 \\end{pmatrix} = \\begin{pmatrix} 0 \\\\ 1 \\end{pmatrix}",
          "explanation": "The image of $(1,0)$ should rotate by $\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check with $(0,1)$",
          "workingLatex": "M\\begin{pmatrix} 0 \\\\ 1 \\end{pmatrix} = \\begin{pmatrix} -1 \\\\ 0 \\end{pmatrix}",
          "explanation": "Confirm using the second basis vector.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify orthogonality",
          "workingLatex": "\\text{Rows are unit vectors and perpendicular}",
          "explanation": "A pure rotation matrix is orthogonal with determinant $+1$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "M = \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}",
          "explanation": "Matrix for the given rotation.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Geometric meaning",
          "workingLatex": "\\text{Anticlockwise rotation } 90^\\circ \\text{ about } O",
          "explanation": "Connect the matrix to the transformation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$M = \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Linear transformations",
    "subtopicId": "fm.y1.pure.linear-transformations",
    "questionDiagram": null,
    "id": "fm.y1.pure.linear-transformations.q027",
    "tags": [
      "basic",
      "rotation-matrix"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "questionText": "Find the matrix representing a rotation of $180^\\circ$ anticlockwise about the origin.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rotation matrix formula",
          "workingLatex": "\\begin{pmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{pmatrix}",
          "explanation": "Anticlockwise rotation about the origin uses this standard form.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute the angle",
          "workingLatex": "\\theta = 180^\\circ",
          "explanation": "Use exact values for common angles.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate trig values",
          "workingLatex": "\\cos 180^\\circ = -1,\\quad \\sin 180^\\circ = 0",
          "explanation": "Memorise exact values for $90^\\circ$, $180^\\circ$, $270^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the matrix",
          "workingLatex": "M = \\begin{pmatrix} -1 & 0 \\\\ 0 & -1 \\end{pmatrix}",
          "explanation": "Substitute into the rotation template.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check with $(1,0)$",
          "workingLatex": "M\\begin{pmatrix} 1 \\\\ 0 \\end{pmatrix} = \\begin{pmatrix} -1 \\\\ 0 \\end{pmatrix}",
          "explanation": "The image of $(1,0)$ should rotate by $\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check with $(0,1)$",
          "workingLatex": "M\\begin{pmatrix} 0 \\\\ 1 \\end{pmatrix} = \\begin{pmatrix} 0 \\\\ -1 \\end{pmatrix}",
          "explanation": "Confirm using the second basis vector.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify orthogonality",
          "workingLatex": "\\text{Rows are unit vectors and perpendicular}",
          "explanation": "A pure rotation matrix is orthogonal with determinant $+1$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "M = \\begin{pmatrix} -1 & 0 \\\\ 0 & -1 \\end{pmatrix}",
          "explanation": "Matrix for the given rotation.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Geometric meaning",
          "workingLatex": "\\text{Anticlockwise rotation } 180^\\circ \\text{ about } O",
          "explanation": "Connect the matrix to the transformation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$M = \\begin{pmatrix} -1 & 0 \\\\ 0 & -1 \\end{pmatrix}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Linear transformations",
    "subtopicId": "fm.y1.pure.linear-transformations",
    "questionDiagram": null,
    "id": "fm.y1.pure.linear-transformations.q028",
    "tags": [
      "basic",
      "rotation-matrix"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "questionText": "Find the matrix representing a rotation of $270^\\circ$ anticlockwise about the origin.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rotation matrix formula",
          "workingLatex": "\\begin{pmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{pmatrix}",
          "explanation": "Anticlockwise rotation about the origin uses this standard form.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute the angle",
          "workingLatex": "\\theta = 270^\\circ",
          "explanation": "Use exact values for common angles.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate trig values",
          "workingLatex": "\\cos 270^\\circ = 0,\\quad \\sin 270^\\circ = -1",
          "explanation": "Memorise exact values for $90^\\circ$, $180^\\circ$, $270^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the matrix",
          "workingLatex": "M = \\begin{pmatrix} 0 & 1 \\\\ -1 & 0 \\end{pmatrix}",
          "explanation": "Substitute into the rotation template.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check with $(1,0)$",
          "workingLatex": "M\\begin{pmatrix} 1 \\\\ 0 \\end{pmatrix} = \\begin{pmatrix} 0 \\\\ -1 \\end{pmatrix}",
          "explanation": "The image of $(1,0)$ should rotate by $\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check with $(0,1)$",
          "workingLatex": "M\\begin{pmatrix} 0 \\\\ 1 \\end{pmatrix} = \\begin{pmatrix} 1 \\\\ 0 \\end{pmatrix}",
          "explanation": "Confirm using the second basis vector.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify orthogonality",
          "workingLatex": "\\text{Rows are unit vectors and perpendicular}",
          "explanation": "A pure rotation matrix is orthogonal with determinant $+1$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "M = \\begin{pmatrix} 0 & 1 \\\\ -1 & 0 \\end{pmatrix}",
          "explanation": "Matrix for the given rotation.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Geometric meaning",
          "workingLatex": "\\text{Anticlockwise rotation } 270^\\circ \\text{ about } O",
          "explanation": "Connect the matrix to the transformation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$M = \\begin{pmatrix} 0 & 1 \\\\ -1 & 0 \\end{pmatrix}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Linear transformations",
    "subtopicId": "fm.y1.pure.linear-transformations",
    "questionDiagram": null,
    "id": "fm.y1.pure.linear-transformations.q029",
    "tags": [
      "basic",
      "reflection-matrix"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "questionText": "Write down the matrix representing reflection in the $x\\text{-axis}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Effect on coordinates",
          "workingLatex": "(x,y)\\mapsto(x,-y)",
          "explanation": "A reflection fixes points on the mirror line and reverses the perpendicular component.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Effect on basis vectors",
          "workingLatex": "\\text{Track where } (1,0) \\text{ and } (0,1) \\text{ go}",
          "explanation": "Columns of the matrix are images of $(1,0)$ and $(0,1)$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "First column",
          "workingLatex": "M\\begin{pmatrix}1\\\\0\\end{pmatrix} = \\begin{pmatrix}1\\\\0\\end{pmatrix}",
          "explanation": "Image of the unit $x$-vector.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Second column",
          "workingLatex": "M\\begin{pmatrix}0\\\\1\\end{pmatrix} = \\begin{pmatrix}0\\\\-1\\end{pmatrix}",
          "explanation": "Image of the unit $y$-vector.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Assemble the matrix",
          "workingLatex": "M = \\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}",
          "explanation": "Place column vectors side by side.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check determinant",
          "workingLatex": "\\det(M) = -1 = -1",
          "explanation": "Reflections have determinant $-1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Invariant line",
          "workingLatex": "\\text{Points on } x\\text{-axis} \\text{ are fixed}",
          "explanation": "Every point on the mirror line maps to itself.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "M = \\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}",
          "explanation": "Matrix for reflection in the xtext{-axis}.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify a point",
          "workingLatex": "\\text{Choose a point off the line and confirm its image}",
          "explanation": "The perpendicular distance to the line is preserved but the side changes.",
          "diagram": null
        }
      ],
      "finalAnswer": "$M = \\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Linear transformations",
    "subtopicId": "fm.y1.pure.linear-transformations",
    "questionDiagram": null,
    "id": "fm.y1.pure.linear-transformations.q030",
    "tags": [
      "basic",
      "reflection-matrix"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "questionText": "Write down the matrix representing reflection in the $y\\text{-axis}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Effect on coordinates",
          "workingLatex": "(x,y)\\mapsto(-x,y)",
          "explanation": "A reflection fixes points on the mirror line and reverses the perpendicular component.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Effect on basis vectors",
          "workingLatex": "\\text{Track where } (1,0) \\text{ and } (0,1) \\text{ go}",
          "explanation": "Columns of the matrix are images of $(1,0)$ and $(0,1)$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "First column",
          "workingLatex": "M\\begin{pmatrix}1\\\\0\\end{pmatrix} = \\begin{pmatrix}-1\\\\0\\end{pmatrix}",
          "explanation": "Image of the unit $x$-vector.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Second column",
          "workingLatex": "M\\begin{pmatrix}0\\\\1\\end{pmatrix} = \\begin{pmatrix}0\\\\1\\end{pmatrix}",
          "explanation": "Image of the unit $y$-vector.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Assemble the matrix",
          "workingLatex": "M = \\begin{pmatrix} -1 & 0 \\\\ 0 & 1 \\end{pmatrix}",
          "explanation": "Place column vectors side by side.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check determinant",
          "workingLatex": "\\det(M) = -1 = -1",
          "explanation": "Reflections have determinant $-1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Invariant line",
          "workingLatex": "\\text{Points on } y\\text{-axis} \\text{ are fixed}",
          "explanation": "Every point on the mirror line maps to itself.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "M = \\begin{pmatrix} -1 & 0 \\\\ 0 & 1 \\end{pmatrix}",
          "explanation": "Matrix for reflection in the ytext{-axis}.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify a point",
          "workingLatex": "\\text{Choose a point off the line and confirm its image}",
          "explanation": "The perpendicular distance to the line is preserved but the side changes.",
          "diagram": null
        }
      ],
      "finalAnswer": "$M = \\begin{pmatrix} -1 & 0 \\\\ 0 & 1 \\end{pmatrix}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Linear transformations",
    "subtopicId": "fm.y1.pure.linear-transformations",
    "questionDiagram": null,
    "id": "fm.y1.pure.linear-transformations.q031",
    "tags": [
      "basic",
      "reflection-matrix"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "questionText": "Write down the matrix representing reflection in the $y=x$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Effect on coordinates",
          "workingLatex": "(x,y)\\mapsto(y,x)",
          "explanation": "A reflection fixes points on the mirror line and reverses the perpendicular component.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Effect on basis vectors",
          "workingLatex": "\\text{Track where } (1,0) \\text{ and } (0,1) \\text{ go}",
          "explanation": "Columns of the matrix are images of $(1,0)$ and $(0,1)$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "First column",
          "workingLatex": "M\\begin{pmatrix}1\\\\0\\end{pmatrix} = \\begin{pmatrix}0\\\\1\\end{pmatrix}",
          "explanation": "Image of the unit $x$-vector.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Second column",
          "workingLatex": "M\\begin{pmatrix}0\\\\1\\end{pmatrix} = \\begin{pmatrix}1\\\\0\\end{pmatrix}",
          "explanation": "Image of the unit $y$-vector.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Assemble the matrix",
          "workingLatex": "M = \\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}",
          "explanation": "Place column vectors side by side.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check determinant",
          "workingLatex": "\\det(M) = -1 = -1",
          "explanation": "Reflections have determinant $-1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Invariant line",
          "workingLatex": "\\text{Points on } y=x \\text{ are fixed}",
          "explanation": "Every point on the mirror line maps to itself.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "M = \\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}",
          "explanation": "Matrix for reflection in the y=x.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify a point",
          "workingLatex": "\\text{Choose a point off the line and confirm its image}",
          "explanation": "The perpendicular distance to the line is preserved but the side changes.",
          "diagram": null
        }
      ],
      "finalAnswer": "$M = \\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Linear transformations",
    "subtopicId": "fm.y1.pure.linear-transformations",
    "questionDiagram": null,
    "id": "fm.y1.pure.linear-transformations.q032",
    "tags": [
      "basic",
      "reflection-matrix"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "questionText": "Write down the matrix representing reflection in the $y=-x$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Effect on coordinates",
          "workingLatex": "(x,y)\\mapsto(-y,-x)",
          "explanation": "A reflection fixes points on the mirror line and reverses the perpendicular component.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Effect on basis vectors",
          "workingLatex": "\\text{Track where } (1,0) \\text{ and } (0,1) \\text{ go}",
          "explanation": "Columns of the matrix are images of $(1,0)$ and $(0,1)$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "First column",
          "workingLatex": "M\\begin{pmatrix}1\\\\0\\end{pmatrix} = \\begin{pmatrix}0\\\\-1\\end{pmatrix}",
          "explanation": "Image of the unit $x$-vector.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Second column",
          "workingLatex": "M\\begin{pmatrix}0\\\\1\\end{pmatrix} = \\begin{pmatrix}-1\\\\0\\end{pmatrix}",
          "explanation": "Image of the unit $y$-vector.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Assemble the matrix",
          "workingLatex": "M = \\begin{pmatrix} 0 & -1 \\\\ -1 & 0 \\end{pmatrix}",
          "explanation": "Place column vectors side by side.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check determinant",
          "workingLatex": "\\det(M) = -1 = -1",
          "explanation": "Reflections have determinant $-1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Invariant line",
          "workingLatex": "\\text{Points on } y=-x \\text{ are fixed}",
          "explanation": "Every point on the mirror line maps to itself.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "M = \\begin{pmatrix} 0 & -1 \\\\ -1 & 0 \\end{pmatrix}",
          "explanation": "Matrix for reflection in the y=-x.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify a point",
          "workingLatex": "\\text{Choose a point off the line and confirm its image}",
          "explanation": "The perpendicular distance to the line is preserved but the side changes.",
          "diagram": null
        }
      ],
      "finalAnswer": "$M = \\begin{pmatrix} 0 & -1 \\\\ -1 & 0 \\end{pmatrix}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Linear transformations",
    "subtopicId": "fm.y1.pure.linear-transformations",
    "questionDiagram": null,
    "id": "fm.y1.pure.linear-transformations.q033",
    "tags": [
      "enlargement-matrix"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "questionText": "Find the matrix for an enlargement with scale factor $5$ centred at the origin.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Enlargement form",
          "workingLatex": "\\begin{pmatrix} k & 0 \\\\ 0 & k \\end{pmatrix}",
          "explanation": "Equal scale factor on both axes when centred at the origin.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute $k=5$",
          "workingLatex": "k = 5",
          "explanation": "Given scale factor.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write matrix",
          "workingLatex": "M = \\begin{pmatrix} 5 & 0 \\\\ 0 & 5 \\end{pmatrix}",
          "explanation": "Diagonal matrix with $k$ on the diagonal.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Test $(1,1)$",
          "workingLatex": "M\\begin{pmatrix} 1 \\\\ 1 \\end{pmatrix} = \\begin{pmatrix} 5 \\\\ 5 \\end{pmatrix}",
          "explanation": "Distance from origin multiplies by $5$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Determinant",
          "workingLatex": "\\det(M) = 25",
          "explanation": "Area scale factor is $k^{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "M = \\begin{pmatrix} 5 & 0 \\\\ 0 & 5 \\end{pmatrix}",
          "explanation": "Enlargement matrix.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Invariant point",
          "workingLatex": "\\text{Only } (0,0) \\text{ is fixed}",
          "explanation": "Centre of enlargement is invariant.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Distance property",
          "workingLatex": "|M\\mathbf{p}| = 5|\\mathbf{p}|",
          "explanation": "All points move radially from the origin.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Summary",
          "workingLatex": "\\text{Enlargement SF } 5",
          "explanation": "Complete matrix.",
          "diagram": null
        }
      ],
      "finalAnswer": "$M = \\begin{pmatrix} 5 & 0 \\\\ 0 & 5 \\end{pmatrix}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Linear transformations",
    "subtopicId": "fm.y1.pure.linear-transformations",
    "questionDiagram": null,
    "id": "fm.y1.pure.linear-transformations.q034",
    "tags": [
      "shear-matrix"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find the matrix representing a shear parallel to the $y$-axis mapping $(1,0) \\mapsto (1,3)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Shear template",
          "workingLatex": "\\begin{pmatrix} 1 & 0 \\\\ k & 1 \\end{pmatrix}",
          "explanation": "Shear parallel to $y$-axis fixes the $y$-direction shape.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Use given image",
          "workingLatex": "\\begin{pmatrix}1\\\\0\\end{pmatrix} \\mapsto \\begin{pmatrix}1\\\\3\\end{pmatrix}",
          "explanation": "Read off the first column of the matrix.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "First column",
          "workingLatex": "\\begin{pmatrix}1\\\\3\\end{pmatrix}",
          "explanation": "Image of $(1,0)$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Second basis vector",
          "workingLatex": "\\begin{pmatrix}0\\\\1\\end{pmatrix} \\mapsto \\begin{pmatrix}0\\\\1\\end{pmatrix}",
          "explanation": "Vertical lines slide; $y$-direction unchanged.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Assemble matrix",
          "workingLatex": "M = \\begin{pmatrix} 1 & 0 \\\\ 3 & 1 \\end{pmatrix}",
          "explanation": "Columns are images of basis vectors.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify",
          "workingLatex": "M\\begin{pmatrix} 1 \\\\ 0 \\end{pmatrix} = \\begin{pmatrix} 1 \\\\ 3 \\end{pmatrix}",
          "explanation": "Matches the given mapping.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Area preserved",
          "workingLatex": "\\det(M) = 1",
          "explanation": "Shears preserve area.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "M = \\begin{pmatrix} 1 & 0 \\\\ 3 & 1 \\end{pmatrix}",
          "explanation": "Shear matrix with $k=3$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Invariant set",
          "workingLatex": "\\text{The } x\\text{-axis is an invariant line}",
          "explanation": "Points with $y=0$ may move along the axis.",
          "diagram": null
        }
      ],
      "finalAnswer": "$M = \\begin{pmatrix} 1 & 0 \\\\ 3 & 1 \\end{pmatrix}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Linear transformations",
    "subtopicId": "fm.y1.pure.linear-transformations",
    "questionDiagram": null,
    "id": "fm.y1.pure.linear-transformations.q035",
    "tags": [
      "matrix-from-mapping"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "The transformation maps $(1,0) \\mapsto (0,1)$ and $(0,1) \\mapsto (-1,0)$. Find the matrix.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Column vector rule",
          "workingLatex": "\\text{Columns are images of } (1,0) \\text{ and } (0,1)",
          "explanation": "A $2\\times2$ matrix is determined by where basis vectors go.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "First column",
          "workingLatex": "\\begin{pmatrix}0\\\\1\\end{pmatrix}",
          "explanation": "Image of $(1,0)$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Second column",
          "workingLatex": "\\begin{pmatrix}-1\\\\0\\end{pmatrix}",
          "explanation": "Image of $(0,1)$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write matrix",
          "workingLatex": "M = \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}",
          "explanation": "Assemble columns.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Identify transformation",
          "workingLatex": "\\text{Rotation } 90^\\circ \\text{ anticlockwise}",
          "explanation": "Standard rotation matrix.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify both mappings",
          "workingLatex": "M\\begin{pmatrix} 1 \\\\ 0 \\end{pmatrix}=\\begin{pmatrix} 0 \\\\ 1 \\end{pmatrix},\\; M\\begin{pmatrix} 0 \\\\ 1 \\end{pmatrix}=\\begin{pmatrix} -1 \\\\ 0 \\end{pmatrix}",
          "explanation": "Both conditions satisfied.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Determinant",
          "workingLatex": "\\det(M) = 1",
          "explanation": "Preserves area and orientation.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "M = \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}",
          "explanation": "Matrix found from point mappings.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Uniqueness",
          "workingLatex": "\\text{Two basis images fix the matrix}",
          "explanation": "Any point image follows by linearity.",
          "diagram": null
        }
      ],
      "finalAnswer": "$M = \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Linear transformations",
    "subtopicId": "fm.y1.pure.linear-transformations",
    "questionDiagram": null,
    "id": "fm.y1.pure.linear-transformations.q036",
    "tags": [
      "reflection-then-rotation",
      "composite-transformation"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Point $P$ has coordinates $(2, 3)$. The transformation reflection in the $x$-axis is followed by rotation $90^\\circ$ anticlockwise about the origin. Find the coordinates of the image of $P$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write both matrices",
          "workingLatex": "A = \\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix},\\quad B = \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}",
          "explanation": "First apply reflection in the $x$-axis, then rotation $90^\\circ$ anticlockwise about the origin.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Order of composition",
          "workingLatex": "\\text{Total matrix } = BA",
          "explanation": "The second transformation is written on the left.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Multiply matrices",
          "workingLatex": "BA = \\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}",
          "explanation": "Use row-by-column multiplication.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Intermediate image",
          "workingLatex": "A\\begin{pmatrix} 2 \\\\ 3 \\end{pmatrix} = \\begin{pmatrix} 2 \\\\ -3 \\end{pmatrix}",
          "explanation": "Image after the first transformation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply second matrix",
          "workingLatex": "B\\begin{pmatrix} 2 \\\\ -3 \\end{pmatrix} = \\begin{pmatrix} 3 \\\\ 2 \\end{pmatrix}",
          "explanation": "Complete the composite mapping.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Direct calculation",
          "workingLatex": "BA\\begin{pmatrix} 2 \\\\ 3 \\end{pmatrix} = \\begin{pmatrix} 3 \\\\ 2 \\end{pmatrix}",
          "explanation": "Same result using the product matrix.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "(3, 2)",
          "explanation": "Final image of the point.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check determinant",
          "workingLatex": "\\det(BA) = \\det(B)\\det(A)",
          "explanation": "Composition multiplies scale factors.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Interpret geometrically",
          "workingLatex": "\\text{Single transformation equivalent to } BA",
          "explanation": "Matrix product encodes doing both maps in order.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(3, 2)$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Linear transformations",
    "subtopicId": "fm.y1.pure.linear-transformations",
    "questionDiagram": null,
    "id": "fm.y1.pure.linear-transformations.q037",
    "tags": [
      "rotation-then-reflection",
      "composite-transformation"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Point $P$ has coordinates $(1, 4)$. The transformation rotation $90^\\circ$ anticlockwise about the origin is followed by reflection in the $y$-axis. Find the coordinates of the image of $P$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write both matrices",
          "workingLatex": "A = \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix},\\quad B = \\begin{pmatrix} -1 & 0 \\\\ 0 & 1 \\end{pmatrix}",
          "explanation": "First apply rotation $90^\\circ$ anticlockwise about the origin, then reflection in the $y$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Order of composition",
          "workingLatex": "\\text{Total matrix } = BA",
          "explanation": "The second transformation is written on the left.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Multiply matrices",
          "workingLatex": "BA = \\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}",
          "explanation": "Use row-by-column multiplication.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Intermediate image",
          "workingLatex": "A\\begin{pmatrix} 1 \\\\ 4 \\end{pmatrix} = \\begin{pmatrix} -4 \\\\ 1 \\end{pmatrix}",
          "explanation": "Image after the first transformation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply second matrix",
          "workingLatex": "B\\begin{pmatrix} -4 \\\\ 1 \\end{pmatrix} = \\begin{pmatrix} 4 \\\\ 1 \\end{pmatrix}",
          "explanation": "Complete the composite mapping.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Direct calculation",
          "workingLatex": "BA\\begin{pmatrix} 1 \\\\ 4 \\end{pmatrix} = \\begin{pmatrix} 4 \\\\ 1 \\end{pmatrix}",
          "explanation": "Same result using the product matrix.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "(4, 1)",
          "explanation": "Final image of the point.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check determinant",
          "workingLatex": "\\det(BA) = \\det(B)\\det(A)",
          "explanation": "Composition multiplies scale factors.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Interpret geometrically",
          "workingLatex": "\\text{Single transformation equivalent to } BA",
          "explanation": "Matrix product encodes doing both maps in order.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(4, 1)$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Linear transformations",
    "subtopicId": "fm.y1.pure.linear-transformations",
    "questionDiagram": null,
    "id": "fm.y1.pure.linear-transformations.q038",
    "tags": [
      "enlargement-then-rotation",
      "composite-transformation"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Point $P$ has coordinates $(3, 1)$. The transformation enlargement, scale factor 2, centre the origin is followed by rotation $90^\\circ$ anticlockwise about the origin. Find the coordinates of the image of $P$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write both matrices",
          "workingLatex": "A = \\begin{pmatrix} 2 & 0 \\\\ 0 & 2 \\end{pmatrix},\\quad B = \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}",
          "explanation": "First apply enlargement, scale factor 2, centre the origin, then rotation $90^\\circ$ anticlockwise about the origin.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Order of composition",
          "workingLatex": "\\text{Total matrix } = BA",
          "explanation": "The second transformation is written on the left.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Multiply matrices",
          "workingLatex": "BA = \\begin{pmatrix} 0 & -2 \\\\ 2 & 0 \\end{pmatrix}",
          "explanation": "Use row-by-column multiplication.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Intermediate image",
          "workingLatex": "A\\begin{pmatrix} 3 \\\\ 1 \\end{pmatrix} = \\begin{pmatrix} 6 \\\\ 2 \\end{pmatrix}",
          "explanation": "Image after the first transformation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply second matrix",
          "workingLatex": "B\\begin{pmatrix} 6 \\\\ 2 \\end{pmatrix} = \\begin{pmatrix} -2 \\\\ 6 \\end{pmatrix}",
          "explanation": "Complete the composite mapping.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Direct calculation",
          "workingLatex": "BA\\begin{pmatrix} 3 \\\\ 1 \\end{pmatrix} = \\begin{pmatrix} -2 \\\\ 6 \\end{pmatrix}",
          "explanation": "Same result using the product matrix.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "(-2, 6)",
          "explanation": "Final image of the point.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check determinant",
          "workingLatex": "\\det(BA) = \\det(B)\\det(A)",
          "explanation": "Composition multiplies scale factors.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Interpret geometrically",
          "workingLatex": "\\text{Single transformation equivalent to } BA",
          "explanation": "Matrix product encodes doing both maps in order.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(-2, 6)$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Linear transformations",
    "subtopicId": "fm.y1.pure.linear-transformations",
    "questionDiagram": null,
    "id": "fm.y1.pure.linear-transformations.q039",
    "tags": [
      "double-reflection",
      "composite-transformation"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Point $P$ has coordinates $(2, 5)$. The transformation reflection in the line $y = x$ is followed by reflection in the $x$-axis. Find the coordinates of the image of $P$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write both matrices",
          "workingLatex": "A = \\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix},\\quad B = \\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}",
          "explanation": "First apply reflection in the line $y = x$, then reflection in the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Order of composition",
          "workingLatex": "\\text{Total matrix } = BA",
          "explanation": "The second transformation is written on the left.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Multiply matrices",
          "workingLatex": "BA = \\begin{pmatrix} 0 & 1 \\\\ -1 & 0 \\end{pmatrix}",
          "explanation": "Use row-by-column multiplication.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Intermediate image",
          "workingLatex": "A\\begin{pmatrix} 2 \\\\ 5 \\end{pmatrix} = \\begin{pmatrix} 5 \\\\ 2 \\end{pmatrix}",
          "explanation": "Image after the first transformation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply second matrix",
          "workingLatex": "B\\begin{pmatrix} 5 \\\\ 2 \\end{pmatrix} = \\begin{pmatrix} 5 \\\\ -2 \\end{pmatrix}",
          "explanation": "Complete the composite mapping.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Direct calculation",
          "workingLatex": "BA\\begin{pmatrix} 2 \\\\ 5 \\end{pmatrix} = \\begin{pmatrix} 5 \\\\ -2 \\end{pmatrix}",
          "explanation": "Same result using the product matrix.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "(5, -2)",
          "explanation": "Final image of the point.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check determinant",
          "workingLatex": "\\det(BA) = \\det(B)\\det(A)",
          "explanation": "Composition multiplies scale factors.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Interpret geometrically",
          "workingLatex": "\\text{Single transformation equivalent to } BA",
          "explanation": "Matrix product encodes doing both maps in order.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(5, -2)$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Linear transformations",
    "subtopicId": "fm.y1.pure.linear-transformations",
    "questionDiagram": null,
    "id": "fm.y1.pure.linear-transformations.q040",
    "tags": [
      "shear-then-reflection",
      "composite-transformation"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Point $P$ has coordinates $(1, 2)$. The transformation shear parallel to the $x$-axis with factor 2 is followed by reflection in the $y$-axis. Find the coordinates of the image of $P$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write both matrices",
          "workingLatex": "A = \\begin{pmatrix} 1 & 2 \\\\ 0 & 1 \\end{pmatrix},\\quad B = \\begin{pmatrix} -1 & 0 \\\\ 0 & 1 \\end{pmatrix}",
          "explanation": "First apply shear parallel to the $x$-axis with factor 2, then reflection in the $y$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Order of composition",
          "workingLatex": "\\text{Total matrix } = BA",
          "explanation": "The second transformation is written on the left.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Multiply matrices",
          "workingLatex": "BA = \\begin{pmatrix} -1 & -2 \\\\ 0 & 1 \\end{pmatrix}",
          "explanation": "Use row-by-column multiplication.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Intermediate image",
          "workingLatex": "A\\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix} = \\begin{pmatrix} 5 \\\\ 2 \\end{pmatrix}",
          "explanation": "Image after the first transformation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply second matrix",
          "workingLatex": "B\\begin{pmatrix} 5 \\\\ 2 \\end{pmatrix} = \\begin{pmatrix} -5 \\\\ 2 \\end{pmatrix}",
          "explanation": "Complete the composite mapping.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Direct calculation",
          "workingLatex": "BA\\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix} = \\begin{pmatrix} -5 \\\\ 2 \\end{pmatrix}",
          "explanation": "Same result using the product matrix.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "(-5, 2)",
          "explanation": "Final image of the point.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check determinant",
          "workingLatex": "\\det(BA) = \\det(B)\\det(A)",
          "explanation": "Composition multiplies scale factors.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Interpret geometrically",
          "workingLatex": "\\text{Single transformation equivalent to } BA",
          "explanation": "Matrix product encodes doing both maps in order.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(-5, 2)$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Linear transformations",
    "subtopicId": "fm.y1.pure.linear-transformations",
    "questionDiagram": null,
    "id": "fm.y1.pure.linear-transformations.q041",
    "tags": [
      "rotation-then-enlargement",
      "composite-transformation"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Point $P$ has coordinates $(-2, 1)$. The transformation rotation $180^\\circ$ about the origin is followed by enlargement, scale factor 3, centre the origin. Find the coordinates of the image of $P$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write both matrices",
          "workingLatex": "A = \\begin{pmatrix} -1 & 0 \\\\ 0 & -1 \\end{pmatrix},\\quad B = \\begin{pmatrix} 3 & 0 \\\\ 0 & 3 \\end{pmatrix}",
          "explanation": "First apply rotation $180^\\circ$ about the origin, then enlargement, scale factor 3, centre the origin.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Order of composition",
          "workingLatex": "\\text{Total matrix } = BA",
          "explanation": "The second transformation is written on the left.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Multiply matrices",
          "workingLatex": "BA = \\begin{pmatrix} -3 & 0 \\\\ 0 & -3 \\end{pmatrix}",
          "explanation": "Use row-by-column multiplication.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Intermediate image",
          "workingLatex": "A\\begin{pmatrix} -2 \\\\ 1 \\end{pmatrix} = \\begin{pmatrix} 2 \\\\ -1 \\end{pmatrix}",
          "explanation": "Image after the first transformation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply second matrix",
          "workingLatex": "B\\begin{pmatrix} 2 \\\\ -1 \\end{pmatrix} = \\begin{pmatrix} 6 \\\\ -3 \\end{pmatrix}",
          "explanation": "Complete the composite mapping.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Direct calculation",
          "workingLatex": "BA\\begin{pmatrix} -2 \\\\ 1 \\end{pmatrix} = \\begin{pmatrix} 6 \\\\ -3 \\end{pmatrix}",
          "explanation": "Same result using the product matrix.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "(6, -3)",
          "explanation": "Final image of the point.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check determinant",
          "workingLatex": "\\det(BA) = \\det(B)\\det(A)",
          "explanation": "Composition multiplies scale factors.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Interpret geometrically",
          "workingLatex": "\\text{Single transformation equivalent to } BA",
          "explanation": "Matrix product encodes doing both maps in order.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(6, -3)$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Linear transformations",
    "subtopicId": "fm.y1.pure.linear-transformations",
    "questionDiagram": null,
    "id": "fm.y1.pure.linear-transformations.q042",
    "tags": [
      "reflection-then-rotation",
      "composite-transformation"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Point $P$ has coordinates $(4, 0)$. The transformation reflection in the line $y = -x$ is followed by rotation $90^\\circ$ anticlockwise about the origin. Find the coordinates of the image of $P$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write both matrices",
          "workingLatex": "A = \\begin{pmatrix} 0 & -1 \\\\ -1 & 0 \\end{pmatrix},\\quad B = \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}",
          "explanation": "First apply reflection in the line $y = -x$, then rotation $90^\\circ$ anticlockwise about the origin.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Order of composition",
          "workingLatex": "\\text{Total matrix } = BA",
          "explanation": "The second transformation is written on the left.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Multiply matrices",
          "workingLatex": "BA = \\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}",
          "explanation": "Use row-by-column multiplication.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Intermediate image",
          "workingLatex": "A\\begin{pmatrix} 4 \\\\ 0 \\end{pmatrix} = \\begin{pmatrix} 0 \\\\ -4 \\end{pmatrix}",
          "explanation": "Image after the first transformation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply second matrix",
          "workingLatex": "B\\begin{pmatrix} 0 \\\\ -4 \\end{pmatrix} = \\begin{pmatrix} 4 \\\\ 0 \\end{pmatrix}",
          "explanation": "Complete the composite mapping.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Direct calculation",
          "workingLatex": "BA\\begin{pmatrix} 4 \\\\ 0 \\end{pmatrix} = \\begin{pmatrix} 4 \\\\ 0 \\end{pmatrix}",
          "explanation": "Same result using the product matrix.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "(4, 0)",
          "explanation": "Final image of the point.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check determinant",
          "workingLatex": "\\det(BA) = \\det(B)\\det(A)",
          "explanation": "Composition multiplies scale factors.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Interpret geometrically",
          "workingLatex": "\\text{Single transformation equivalent to } BA",
          "explanation": "Matrix product encodes doing both maps in order.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(4, 0)$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Linear transformations",
    "subtopicId": "fm.y1.pure.linear-transformations",
    "questionDiagram": null,
    "id": "fm.y1.pure.linear-transformations.q043",
    "tags": [
      "enlargement-then-reflection",
      "composite-transformation"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Point $P$ has coordinates $(1, 3)$. The transformation enlargement, scale factor -2, centre the origin is followed by reflection in the $x$-axis. Find the coordinates of the image of $P$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write both matrices",
          "workingLatex": "A = \\begin{pmatrix} -2 & 0 \\\\ 0 & -2 \\end{pmatrix},\\quad B = \\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}",
          "explanation": "First apply enlargement, scale factor -2, centre the origin, then reflection in the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Order of composition",
          "workingLatex": "\\text{Total matrix } = BA",
          "explanation": "The second transformation is written on the left.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Multiply matrices",
          "workingLatex": "BA = \\begin{pmatrix} -2 & 0 \\\\ 0 & 2 \\end{pmatrix}",
          "explanation": "Use row-by-column multiplication.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Intermediate image",
          "workingLatex": "A\\begin{pmatrix} 1 \\\\ 3 \\end{pmatrix} = \\begin{pmatrix} -2 \\\\ -6 \\end{pmatrix}",
          "explanation": "Image after the first transformation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply second matrix",
          "workingLatex": "B\\begin{pmatrix} -2 \\\\ -6 \\end{pmatrix} = \\begin{pmatrix} -2 \\\\ 6 \\end{pmatrix}",
          "explanation": "Complete the composite mapping.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Direct calculation",
          "workingLatex": "BA\\begin{pmatrix} 1 \\\\ 3 \\end{pmatrix} = \\begin{pmatrix} -2 \\\\ 6 \\end{pmatrix}",
          "explanation": "Same result using the product matrix.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "(-2, 6)",
          "explanation": "Final image of the point.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check determinant",
          "workingLatex": "\\det(BA) = \\det(B)\\det(A)",
          "explanation": "Composition multiplies scale factors.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Interpret geometrically",
          "workingLatex": "\\text{Single transformation equivalent to } BA",
          "explanation": "Matrix product encodes doing both maps in order.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(-2, 6)$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Linear transformations",
    "subtopicId": "fm.y1.pure.linear-transformations",
    "questionDiagram": null,
    "id": "fm.y1.pure.linear-transformations.q044",
    "tags": [
      "shear-then-rotation",
      "composite-transformation"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Point $P$ has coordinates $(2, 2)$. The transformation shear parallel to the $y$-axis with factor 1 is followed by rotation $180^\\circ$ about the origin. Find the coordinates of the image of $P$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write both matrices",
          "workingLatex": "A = \\begin{pmatrix} 1 & 0 \\\\ 1 & 1 \\end{pmatrix},\\quad B = \\begin{pmatrix} -1 & 0 \\\\ 0 & -1 \\end{pmatrix}",
          "explanation": "First apply shear parallel to the $y$-axis with factor 1, then rotation $180^\\circ$ about the origin.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Order of composition",
          "workingLatex": "\\text{Total matrix } = BA",
          "explanation": "The second transformation is written on the left.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Multiply matrices",
          "workingLatex": "BA = \\begin{pmatrix} -1 & 0 \\\\ -1 & -1 \\end{pmatrix}",
          "explanation": "Use row-by-column multiplication.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Intermediate image",
          "workingLatex": "A\\begin{pmatrix} 2 \\\\ 2 \\end{pmatrix} = \\begin{pmatrix} 2 \\\\ 4 \\end{pmatrix}",
          "explanation": "Image after the first transformation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply second matrix",
          "workingLatex": "B\\begin{pmatrix} 2 \\\\ 4 \\end{pmatrix} = \\begin{pmatrix} -2 \\\\ -4 \\end{pmatrix}",
          "explanation": "Complete the composite mapping.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Direct calculation",
          "workingLatex": "BA\\begin{pmatrix} 2 \\\\ 2 \\end{pmatrix} = \\begin{pmatrix} -2 \\\\ -4 \\end{pmatrix}",
          "explanation": "Same result using the product matrix.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "(-2, -4)",
          "explanation": "Final image of the point.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check determinant",
          "workingLatex": "\\det(BA) = \\det(B)\\det(A)",
          "explanation": "Composition multiplies scale factors.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Interpret geometrically",
          "workingLatex": "\\text{Single transformation equivalent to } BA",
          "explanation": "Matrix product encodes doing both maps in order.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(-2, -4)$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Linear transformations",
    "subtopicId": "fm.y1.pure.linear-transformations",
    "questionDiagram": null,
    "id": "fm.y1.pure.linear-transformations.q045",
    "tags": [
      "rotation-composite",
      "composite-transformation"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Point $P$ has coordinates $(5, 1)$. The transformation rotation $90^\\circ$ anticlockwise about the origin is followed by rotation $90^\\circ$ anticlockwise about the origin. Find the coordinates of the image of $P$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write both matrices",
          "workingLatex": "A = \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix},\\quad B = \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}",
          "explanation": "First apply rotation $90^\\circ$ anticlockwise about the origin, then rotation $90^\\circ$ anticlockwise about the origin.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Order of composition",
          "workingLatex": "\\text{Total matrix } = BA",
          "explanation": "The second transformation is written on the left.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Multiply matrices",
          "workingLatex": "BA = \\begin{pmatrix} -1 & 0 \\\\ 0 & -1 \\end{pmatrix}",
          "explanation": "Use row-by-column multiplication.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Intermediate image",
          "workingLatex": "A\\begin{pmatrix} 5 \\\\ 1 \\end{pmatrix} = \\begin{pmatrix} -1 \\\\ 5 \\end{pmatrix}",
          "explanation": "Image after the first transformation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply second matrix",
          "workingLatex": "B\\begin{pmatrix} -1 \\\\ 5 \\end{pmatrix} = \\begin{pmatrix} -5 \\\\ -1 \\end{pmatrix}",
          "explanation": "Complete the composite mapping.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Direct calculation",
          "workingLatex": "BA\\begin{pmatrix} 5 \\\\ 1 \\end{pmatrix} = \\begin{pmatrix} -5 \\\\ -1 \\end{pmatrix}",
          "explanation": "Same result using the product matrix.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "(-5, -1)",
          "explanation": "Final image of the point.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check determinant",
          "workingLatex": "\\det(BA) = \\det(B)\\det(A)",
          "explanation": "Composition multiplies scale factors.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Interpret geometrically",
          "workingLatex": "\\text{Single transformation equivalent to } BA",
          "explanation": "Matrix product encodes doing both maps in order.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(-5, -1)$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Linear transformations",
    "subtopicId": "fm.y1.pure.linear-transformations",
    "questionDiagram": null,
    "id": "fm.y1.pure.linear-transformations.q046",
    "tags": [
      "reflection",
      "invariant-points"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "questionText": "Find the invariant point(s) of the transformation represented by $M = \\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}$ (reflection in the $x$-axis).",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Invariant point condition",
          "workingLatex": "\\begin{pmatrix}x\\\\y\\end{pmatrix} = M\\begin{pmatrix}x\\\\y\\end{pmatrix}",
          "explanation": "An invariant point satisfies $\\mathbf{p} = M\\mathbf{p}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write equations",
          "workingLatex": "0x + 0y = 0,\\quad 0x + -2y = 0",
          "explanation": "Rearrange $M\\mathbf{p} - \\mathbf{p} = \\mathbf{0}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Analyse the system",
          "workingLatex": "\\det(M - I) = 0",
          "explanation": "Non-trivial solutions exist when $M-I$ is singular.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve",
          "workingLatex": "(0,0) \\text{ satisfies both equations}",
          "explanation": "Find points fixed by the transformation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify origin",
          "workingLatex": "M\\begin{pmatrix} 0 \\\\ 0 \\end{pmatrix} = \\begin{pmatrix} 0 \\\\ 0 \\end{pmatrix}",
          "explanation": "The origin is always invariant for linear maps through $O$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Geometric interpretation",
          "workingLatex": "\\text{For reflection in the $x$-axis, the invariant points are as found}",
          "explanation": "Connect algebra to geometry.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "\\text{Only } (0,0)",
          "explanation": "State all invariant points.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check a non-fixed point",
          "workingLatex": "\\text{Choose a point and confirm it moves unless on the invariant set}",
          "explanation": "Only invariant points are unchanged.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Summary",
          "workingLatex": "\\text{Invariant points for } reflection in the $x$-axis",
          "explanation": "Complete the analysis.",
          "diagram": null
        }
      ],
      "finalAnswer": "The only invariant point is $(0,0)$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Linear transformations",
    "subtopicId": "fm.y1.pure.linear-transformations",
    "questionDiagram": null,
    "id": "fm.y1.pure.linear-transformations.q047",
    "tags": [
      "reflection",
      "invariant-points"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "questionText": "Find the invariant point(s) of the transformation represented by $M = \\begin{pmatrix} -1 & 0 \\\\ 0 & 1 \\end{pmatrix}$ (reflection in the $y$-axis).",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Invariant point condition",
          "workingLatex": "\\begin{pmatrix}x\\\\y\\end{pmatrix} = M\\begin{pmatrix}x\\\\y\\end{pmatrix}",
          "explanation": "An invariant point satisfies $\\mathbf{p} = M\\mathbf{p}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write equations",
          "workingLatex": "-2x + 0y = 0,\\quad 0x + 0y = 0",
          "explanation": "Rearrange $M\\mathbf{p} - \\mathbf{p} = \\mathbf{0}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Analyse the system",
          "workingLatex": "\\det(M - I) = 0",
          "explanation": "Non-trivial solutions exist when $M-I$ is singular.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve",
          "workingLatex": "(0,0) \\text{ satisfies both equations}",
          "explanation": "Find points fixed by the transformation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify origin",
          "workingLatex": "M\\begin{pmatrix} 0 \\\\ 0 \\end{pmatrix} = \\begin{pmatrix} 0 \\\\ 0 \\end{pmatrix}",
          "explanation": "The origin is always invariant for linear maps through $O$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Geometric interpretation",
          "workingLatex": "\\text{For reflection in the $y$-axis, the invariant points are as found}",
          "explanation": "Connect algebra to geometry.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "\\text{Only } (0,0)",
          "explanation": "State all invariant points.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check a non-fixed point",
          "workingLatex": "\\text{Choose a point and confirm it moves unless on the invariant set}",
          "explanation": "Only invariant points are unchanged.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Summary",
          "workingLatex": "\\text{Invariant points for } reflection in the $y$-axis",
          "explanation": "Complete the analysis.",
          "diagram": null
        }
      ],
      "finalAnswer": "The only invariant point is $(0,0)$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Linear transformations",
    "subtopicId": "fm.y1.pure.linear-transformations",
    "questionDiagram": null,
    "id": "fm.y1.pure.linear-transformations.q048",
    "tags": [
      "reflection",
      "invariant-points"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "questionText": "Find the invariant point(s) of the transformation represented by $M = \\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$ (reflection in $y=x$).",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Invariant point condition",
          "workingLatex": "\\begin{pmatrix}x\\\\y\\end{pmatrix} = M\\begin{pmatrix}x\\\\y\\end{pmatrix}",
          "explanation": "An invariant point satisfies $\\mathbf{p} = M\\mathbf{p}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write equations",
          "workingLatex": "-1x + 1y = 0,\\quad 1x + -1y = 0",
          "explanation": "Rearrange $M\\mathbf{p} - \\mathbf{p} = \\mathbf{0}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Analyse the system",
          "workingLatex": "\\det(M - I) = 0",
          "explanation": "Non-trivial solutions exist when $M-I$ is singular.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve",
          "workingLatex": "(0,0) \\text{ satisfies both equations}",
          "explanation": "Find points fixed by the transformation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify origin",
          "workingLatex": "M\\begin{pmatrix} 0 \\\\ 0 \\end{pmatrix} = \\begin{pmatrix} 0 \\\\ 0 \\end{pmatrix}",
          "explanation": "The origin is always invariant for linear maps through $O$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Geometric interpretation",
          "workingLatex": "\\text{For reflection in $y=x$, the invariant points are as found}",
          "explanation": "Connect algebra to geometry.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "\\text{Only } (0,0)",
          "explanation": "State all invariant points.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check a non-fixed point",
          "workingLatex": "\\text{Choose a point and confirm it moves unless on the invariant set}",
          "explanation": "Only invariant points are unchanged.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Summary",
          "workingLatex": "\\text{Invariant points for } reflection in $y=x$",
          "explanation": "Complete the analysis.",
          "diagram": null
        }
      ],
      "finalAnswer": "The only invariant point is $(0,0)$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Linear transformations",
    "subtopicId": "fm.y1.pure.linear-transformations",
    "questionDiagram": null,
    "id": "fm.y1.pure.linear-transformations.q049",
    "tags": [
      "enlargement",
      "invariant-points"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "questionText": "Find the invariant point(s) of the transformation represented by $M = \\begin{pmatrix} 2 & 0 \\\\ 0 & 2 \\end{pmatrix}$ (enlargement SF $2$).",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Invariant point condition",
          "workingLatex": "\\begin{pmatrix}x\\\\y\\end{pmatrix} = M\\begin{pmatrix}x\\\\y\\end{pmatrix}",
          "explanation": "An invariant point satisfies $\\mathbf{p} = M\\mathbf{p}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write equations",
          "workingLatex": "1x + 0y = 0,\\quad 0x + 1y = 0",
          "explanation": "Rearrange $M\\mathbf{p} - \\mathbf{p} = \\mathbf{0}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Analyse the system",
          "workingLatex": "\\det(M - I) = 1",
          "explanation": "Non-trivial solutions exist when $M-I$ is singular.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve",
          "workingLatex": "(0,0) \\text{ satisfies both equations}",
          "explanation": "Find points fixed by the transformation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify origin",
          "workingLatex": "M\\begin{pmatrix} 0 \\\\ 0 \\end{pmatrix} = \\begin{pmatrix} 0 \\\\ 0 \\end{pmatrix}",
          "explanation": "The origin is always invariant for linear maps through $O$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Geometric interpretation",
          "workingLatex": "\\text{For enlargement SF $2$, the invariant points are as found}",
          "explanation": "Connect algebra to geometry.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "\\text{Only } (0,0)",
          "explanation": "State all invariant points.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check a non-fixed point",
          "workingLatex": "\\text{Choose a point and confirm it moves unless on the invariant set}",
          "explanation": "Only invariant points are unchanged.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Summary",
          "workingLatex": "\\text{Invariant points for } enlargement SF $2$",
          "explanation": "Complete the analysis.",
          "diagram": null
        }
      ],
      "finalAnswer": "The only invariant point is $(0,0)$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Linear transformations",
    "subtopicId": "fm.y1.pure.linear-transformations",
    "questionDiagram": null,
    "id": "fm.y1.pure.linear-transformations.q050",
    "tags": [
      "rotation",
      "invariant-points"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "questionText": "Find the invariant point(s) of the transformation represented by $M = \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}$ (rotation $90^\\circ$).",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Invariant point condition",
          "workingLatex": "\\begin{pmatrix}x\\\\y\\end{pmatrix} = M\\begin{pmatrix}x\\\\y\\end{pmatrix}",
          "explanation": "An invariant point satisfies $\\mathbf{p} = M\\mathbf{p}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write equations",
          "workingLatex": "-1x + -1y = 0,\\quad 1x + -1y = 0",
          "explanation": "Rearrange $M\\mathbf{p} - \\mathbf{p} = \\mathbf{0}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Analyse the system",
          "workingLatex": "\\det(M - I) = 2",
          "explanation": "Non-trivial solutions exist when $M-I$ is singular.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve",
          "workingLatex": "(0,0) \\text{ satisfies both equations}",
          "explanation": "Find points fixed by the transformation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify origin",
          "workingLatex": "M\\begin{pmatrix} 0 \\\\ 0 \\end{pmatrix} = \\begin{pmatrix} 0 \\\\ 0 \\end{pmatrix}",
          "explanation": "The origin is always invariant for linear maps through $O$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Geometric interpretation",
          "workingLatex": "\\text{For rotation $90^\\circ$, the invariant points are as found}",
          "explanation": "Connect algebra to geometry.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "\\text{Only } (0,0)",
          "explanation": "State all invariant points.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check a non-fixed point",
          "workingLatex": "\\text{Choose a point and confirm it moves unless on the invariant set}",
          "explanation": "Only invariant points are unchanged.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Summary",
          "workingLatex": "\\text{Invariant points for } rotation $90^\\circ$",
          "explanation": "Complete the analysis.",
          "diagram": null
        }
      ],
      "finalAnswer": "The only invariant point is $(0,0)$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Linear transformations",
    "subtopicId": "fm.y1.pure.linear-transformations",
    "questionDiagram": null,
    "id": "fm.y1.pure.linear-transformations.q051",
    "tags": [
      "reflection-x",
      "invariant-lines"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "The transformation $M = \\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}$ has at least one invariant line through the origin. Find the equation(s) of the invariant line(s).",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Invariant line condition",
          "workingLatex": "M\\mathbf{p} \\text{ lies on the same line as } \\mathbf{p}",
          "explanation": "Every point on the line maps to another point on that line.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Parametric form",
          "workingLatex": "\\mathbf{p} = t\\mathbf{d} \\Rightarrow M(t\\mathbf{d}) = tM\\mathbf{d}",
          "explanation": "Lines through the origin are determined by direction vectors.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Eigenvector idea",
          "workingLatex": "M\\mathbf{d} = \\lambda \\mathbf{d}",
          "explanation": "A direction vector parallel to an invariant line satisfies this.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for directions",
          "workingLatex": "Points on $y=0$ map to points on $y=0$.",
          "explanation": "Find lines through the origin mapped to themselves.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify on the line",
          "workingLatex": "\\text{Pick a point on the line and check its image}",
          "explanation": "Confirm the image lies on the same line.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Points not on the line",
          "workingLatex": "\\text{Points off the line generally move}",
          "explanation": "Only the line itself is invariant as a whole.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "The $x$-axis ($y = 0$) is an invariant line.",
          "explanation": "State the invariant line(s).",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Geometric view",
          "workingLatex": "\\text{The transformation preserves this line as a set}",
          "explanation": "The line may stretch or reflect along itself.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Summary",
          "workingLatex": "The $x$-axis ($y = 0$) is an invariant line.",
          "explanation": "Complete description of invariant lines.",
          "diagram": null
        }
      ],
      "finalAnswer": "The $x$-axis ($y = 0$) is an invariant line."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Linear transformations",
    "subtopicId": "fm.y1.pure.linear-transformations",
    "questionDiagram": null,
    "id": "fm.y1.pure.linear-transformations.q052",
    "tags": [
      "reflection-y",
      "invariant-lines"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "The transformation $M = \\begin{pmatrix} -1 & 0 \\\\ 0 & 1 \\end{pmatrix}$ has at least one invariant line through the origin. Find the equation(s) of the invariant line(s).",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Invariant line condition",
          "workingLatex": "M\\mathbf{p} \\text{ lies on the same line as } \\mathbf{p}",
          "explanation": "Every point on the line maps to another point on that line.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Parametric form",
          "workingLatex": "\\mathbf{p} = t\\mathbf{d} \\Rightarrow M(t\\mathbf{d}) = tM\\mathbf{d}",
          "explanation": "Lines through the origin are determined by direction vectors.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Eigenvector idea",
          "workingLatex": "M\\mathbf{d} = \\lambda \\mathbf{d}",
          "explanation": "A direction vector parallel to an invariant line satisfies this.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for directions",
          "workingLatex": "Points on $x=0$ map to points on $x=0$.",
          "explanation": "Find lines through the origin mapped to themselves.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify on the line",
          "workingLatex": "\\text{Pick a point on the line and check its image}",
          "explanation": "Confirm the image lies on the same line.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Points not on the line",
          "workingLatex": "\\text{Points off the line generally move}",
          "explanation": "Only the line itself is invariant as a whole.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "The $y$-axis ($x = 0$) is an invariant line.",
          "explanation": "State the invariant line(s).",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Geometric view",
          "workingLatex": "\\text{The transformation preserves this line as a set}",
          "explanation": "The line may stretch or reflect along itself.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Summary",
          "workingLatex": "The $y$-axis ($x = 0$) is an invariant line.",
          "explanation": "Complete description of invariant lines.",
          "diagram": null
        }
      ],
      "finalAnswer": "The $y$-axis ($x = 0$) is an invariant line."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Linear transformations",
    "subtopicId": "fm.y1.pure.linear-transformations",
    "questionDiagram": null,
    "id": "fm.y1.pure.linear-transformations.q053",
    "tags": [
      "reflection-yx",
      "invariant-lines"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "The transformation $M = \\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$ has at least one invariant line through the origin. Find the equation(s) of the invariant line(s).",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Invariant line condition",
          "workingLatex": "M\\mathbf{p} \\text{ lies on the same line as } \\mathbf{p}",
          "explanation": "Every point on the line maps to another point on that line.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Parametric form",
          "workingLatex": "\\mathbf{p} = t\\mathbf{d} \\Rightarrow M(t\\mathbf{d}) = tM\\mathbf{d}",
          "explanation": "Lines through the origin are determined by direction vectors.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Eigenvector idea",
          "workingLatex": "M\\mathbf{d} = \\lambda \\mathbf{d}",
          "explanation": "A direction vector parallel to an invariant line satisfies this.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for directions",
          "workingLatex": "Swapping coordinates fixes points on $y=x$.",
          "explanation": "Find lines through the origin mapped to themselves.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify on the line",
          "workingLatex": "\\text{Pick a point on the line and check its image}",
          "explanation": "Confirm the image lies on the same line.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Points not on the line",
          "workingLatex": "\\text{Points off the line generally move}",
          "explanation": "Only the line itself is invariant as a whole.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "The line $y = x$ is an invariant line.",
          "explanation": "State the invariant line(s).",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Geometric view",
          "workingLatex": "\\text{The transformation preserves this line as a set}",
          "explanation": "The line may stretch or reflect along itself.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Summary",
          "workingLatex": "The line $y = x$ is an invariant line.",
          "explanation": "Complete description of invariant lines.",
          "diagram": null
        }
      ],
      "finalAnswer": "The line $y = x$ is an invariant line."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Linear transformations",
    "subtopicId": "fm.y1.pure.linear-transformations",
    "questionDiagram": null,
    "id": "fm.y1.pure.linear-transformations.q054",
    "tags": [
      "rotation-180",
      "invariant-lines"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "The transformation $M = \\begin{pmatrix} -1 & 0 \\\\ 0 & -1 \\end{pmatrix}$ has at least one invariant line through the origin. Find the equation(s) of the invariant line(s).",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Invariant line condition",
          "workingLatex": "M\\mathbf{p} \\text{ lies on the same line as } \\mathbf{p}",
          "explanation": "Every point on the line maps to another point on that line.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Parametric form",
          "workingLatex": "\\mathbf{p} = t\\mathbf{d} \\Rightarrow M(t\\mathbf{d}) = tM\\mathbf{d}",
          "explanation": "Lines through the origin are determined by direction vectors.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Eigenvector idea",
          "workingLatex": "M\\mathbf{d} = \\lambda \\mathbf{d}",
          "explanation": "A direction vector parallel to an invariant line satisfies this.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for directions",
          "workingLatex": "A $180^\\circ$ rotation sends each line through $O$ to itself.",
          "explanation": "Find lines through the origin mapped to themselves.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify on the line",
          "workingLatex": "\\text{Pick a point on the line and check its image}",
          "explanation": "Confirm the image lies on the same line.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Points not on the line",
          "workingLatex": "\\text{Points off the line generally move}",
          "explanation": "Only the line itself is invariant as a whole.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "Every line through the origin is an invariant line.",
          "explanation": "State the invariant line(s).",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Geometric view",
          "workingLatex": "\\text{The transformation preserves this line as a set}",
          "explanation": "The line may stretch or reflect along itself.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Summary",
          "workingLatex": "Every line through the origin is an invariant line.",
          "explanation": "Complete description of invariant lines.",
          "diagram": null
        }
      ],
      "finalAnswer": "Every line through the origin is an invariant line."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Linear transformations",
    "subtopicId": "fm.y1.pure.linear-transformations",
    "questionDiagram": null,
    "id": "fm.y1.pure.linear-transformations.q055",
    "tags": [
      "enlargement",
      "invariant-lines"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "The transformation $M = \\begin{pmatrix} 2 & 0 \\\\ 0 & 2 \\end{pmatrix}$ has at least one invariant line through the origin. Find the equation(s) of the invariant line(s).",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Invariant line condition",
          "workingLatex": "M\\mathbf{p} \\text{ lies on the same line as } \\mathbf{p}",
          "explanation": "Every point on the line maps to another point on that line.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Parametric form",
          "workingLatex": "\\mathbf{p} = t\\mathbf{d} \\Rightarrow M(t\\mathbf{d}) = tM\\mathbf{d}",
          "explanation": "Lines through the origin are determined by direction vectors.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Eigenvector idea",
          "workingLatex": "M\\mathbf{d} = \\lambda \\mathbf{d}",
          "explanation": "A direction vector parallel to an invariant line satisfies this.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for directions",
          "workingLatex": "Enlargement maps each radial line to itself.",
          "explanation": "Find lines through the origin mapped to themselves.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify on the line",
          "workingLatex": "\\text{Pick a point on the line and check its image}",
          "explanation": "Confirm the image lies on the same line.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Points not on the line",
          "workingLatex": "\\text{Points off the line generally move}",
          "explanation": "Only the line itself is invariant as a whole.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "Every line through the origin is an invariant line.",
          "explanation": "State the invariant line(s).",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Geometric view",
          "workingLatex": "\\text{The transformation preserves this line as a set}",
          "explanation": "The line may stretch or reflect along itself.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Summary",
          "workingLatex": "Every line through the origin is an invariant line.",
          "explanation": "Complete description of invariant lines.",
          "diagram": null
        }
      ],
      "finalAnswer": "Every line through the origin is an invariant line."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Linear transformations",
    "subtopicId": "fm.y1.pure.linear-transformations",
    "questionDiagram": null,
    "id": "fm.y1.pure.linear-transformations.q056",
    "tags": [
      "composite-reflections",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "questionText": "Find the single matrix representing reflection in the $x$-axis followed by reflection in the line $y = x$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Matrices",
          "workingLatex": "R_x = \\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix},\\; R_{y=x} = \\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}",
          "explanation": "Write each reflection.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Order",
          "workingLatex": "\\text{Total} = R_{y=x} R_x",
          "explanation": "Second reflection applied first on the right.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Multiply",
          "workingLatex": "\\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}\\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix} = \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}",
          "explanation": "Row-by-column multiplication.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify",
          "workingLatex": "\\text{Rotation } 90^\\circ \\text{ anticlockwise}",
          "explanation": "Product of two reflections is a rotation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Determinant",
          "workingLatex": "\\det = (+1)",
          "explanation": "Rotation preserves orientation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Test $(1,0)$",
          "workingLatex": "\\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}\\begin{pmatrix} 1 \\\\ 0 \\end{pmatrix} = \\begin{pmatrix} 0 \\\\ 1 \\end{pmatrix}",
          "explanation": "Confirms anticlockwise quarter turn.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Angle between mirrors",
          "workingLatex": "\\text{Lines at } 45^\\circ \\Rightarrow 2\\times 45^\\circ = 90^\\circ",
          "explanation": "Two reflections rotate by twice the angle between lines.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "M = \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}",
          "explanation": "Single equivalent matrix.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Alternative order",
          "workingLatex": "R_x R_{y=x} = \\begin{pmatrix} 0 & 1 \\\\ -1 & 0 \\end{pmatrix}",
          "explanation": "Reversing order gives the opposite rotation.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Verify with point",
          "workingLatex": "(2,3) \\mapsto (-3,2)",
          "explanation": "Check a specific image.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Composition rule",
          "workingLatex": "\\text{Two reflections} \\Rightarrow \\text{rotation}",
          "explanation": "Key result for composite transformations.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Summary",
          "workingLatex": "M = \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}",
          "explanation": "Equivalent to $90^\\circ$ rotation.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Geometric insight",
          "workingLatex": "\\text{Mirror lines meet at } O",
          "explanation": "Composition is rotation about their intersection.",
          "diagram": null
        }
      ],
      "finalAnswer": "$M = \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}$, a $90^\\circ$ anticlockwise rotation."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Linear transformations",
    "subtopicId": "fm.y1.pure.linear-transformations",
    "questionDiagram": null,
    "id": "fm.y1.pure.linear-transformations.q057",
    "tags": [
      "rotation-enlargement",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "written",
    "questionText": "The matrix $A = \\begin{pmatrix} 0 & -2 \\\\ 2 & 0 \\end{pmatrix}$ represents a transformation. Describe it fully and find the image of $(3, 1)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factor the matrix",
          "workingLatex": "A = 2\\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}",
          "explanation": "Separate scale factor from rotation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify rotation part",
          "workingLatex": "\\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix} = R_{90^\\circ}",
          "explanation": "Unit rotation matrix.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Full description",
          "workingLatex": "\\text{Rotation } 90^\\circ \\text{ anticlockwise, then enlargement SF } 2",
          "explanation": "Or combined rotation-enlargement.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Determinant",
          "workingLatex": "\\det(A) = 4",
          "explanation": "Area scale factor is $4$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply to point",
          "workingLatex": "A\\begin{pmatrix} 3 \\\\ 1 \\end{pmatrix} = \\begin{pmatrix} -2 \\\\ 6 \\end{pmatrix}",
          "explanation": "Matrix multiplication.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Step-by-step",
          "workingLatex": "\\text{Rotate } (3,1)\\mapsto(-1,3),\\; \\text{then enlarge}\\mapsto(-2,6)",
          "explanation": "Decompose the action.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Distance check",
          "workingLatex": "|(3,1)|=\\sqrt{10},\\; |(-2,6)|=2\\sqrt{10}",
          "explanation": "Distances double as expected.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer — description",
          "workingLatex": "\\text{Anticlockwise } 90^\\circ \\text{ rotation about } O \\text{ with SF } 2",
          "explanation": "Full geometric description.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer — image",
          "workingLatex": "(-2, 6)",
          "explanation": "Image of the given point.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Invariant point",
          "workingLatex": "\\text{Only } (0,0)",
          "explanation": "Origin fixed.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Non-orthogonal",
          "workingLatex": "A \\text{ is not orthogonal}",
          "explanation": "Combines rotation and scaling.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Polar view",
          "workingLatex": "\\text{Multiply modulus by } 2, \\text{ add } 90^\\circ \\text{ to argument}",
          "explanation": "Complex number interpretation.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Summary",
          "workingLatex": "\\text{Image } (-2,6);\\; 90^\\circ \\text{ rotation with SF } 2",
          "explanation": "Complete answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "Rotation $90^\\circ$ anticlockwise about the origin combined with enlargement scale factor $2$. Image of $(3,1)$ is $(-2,6)$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Linear transformations",
    "subtopicId": "fm.y1.pure.linear-transformations",
    "questionDiagram": null,
    "id": "fm.y1.pure.linear-transformations.q058",
    "tags": [
      "rotation-angle",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "questionText": "Show that $M = \\begin{pmatrix} \\frac{1}{2} & -\\frac{\\sqrt{3}}{2} \\\\ \\frac{\\sqrt{3}}{2} & \\frac{1}{2} \\end{pmatrix}$ represents a rotation and state the angle.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Check orthogonality",
          "workingLatex": "\\text{Rows have length } 1 \\text{ and are perpendicular}",
          "explanation": "Rotation matrices are orthogonal.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Determinant",
          "workingLatex": "\\det(M) = \\frac{1}{4} + \\frac{3}{4} = 1",
          "explanation": "Positive unit determinant confirms rotation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare with template",
          "workingLatex": "\\cos\\theta = \\frac{1}{2},\\; \\sin\\theta = \\frac{\\sqrt{3}}{2}",
          "explanation": "Match entries to $\\cos\\theta$ and $\\sin\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find angle",
          "workingLatex": "\\theta = 60^\\circ",
          "explanation": "Anticlockwise from positive $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify $(1,0)$",
          "workingLatex": "M\\begin{pmatrix} 1 \\\\ 0 \\end{pmatrix} = \\begin{pmatrix} 1/2 \\\\ √3/2 \\end{pmatrix}",
          "explanation": "Unit vector rotates by $60^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "No scaling",
          "workingLatex": "\\text{Lengths preserved}",
          "explanation": "Pure rotation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "\\text{Rotation } 60^\\circ \\text{ anticlockwise about } O",
          "explanation": "Full description.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Complex form",
          "workingLatex": "e^{i\\pi/3} = \\cos 60^\\circ + i\\sin 60^\\circ",
          "explanation": "Equivalent complex multiplication.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Composition",
          "workingLatex": "\\text{Cannot be written as reflection}",
          "explanation": "Determinant $+1$ rules out reflection.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Inverse",
          "workingLatex": "M^{-1} = M^T = \\text{rotation } -60^\\circ",
          "explanation": "Inverse is reverse rotation.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Invariant point",
          "workingLatex": "\\text{Only } (0,0)",
          "explanation": "Centre of rotation.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Period",
          "workingLatex": "M^{6} = I",
          "explanation": "Six applications return to identity.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Conclusion",
          "workingLatex": "60^\\circ \\text{ anticlockwise rotation}",
          "explanation": "Confirmed rotation angle.",
          "diagram": null
        }
      ],
      "finalAnswer": "$M$ represents a rotation of $60^\\circ$ anticlockwise about the origin."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Linear transformations",
    "subtopicId": "fm.y1.pure.linear-transformations",
    "questionDiagram": null,
    "id": "fm.y1.pure.linear-transformations.q059",
    "tags": [
      "matrix-from-points",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "written",
    "questionText": "A transformation maps $A(1,0) \\mapsto A'(4,0)$ and $B(0,1) \\mapsto B'(0,4)$. Find the matrix and describe the transformation.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read columns",
          "workingLatex": "\\text{Col}_1 = \\begin{pmatrix} 4 \\\\ 0 \\end{pmatrix},\\; \\text{Col}_2 = \\begin{pmatrix} 0 \\\\ 4 \\end{pmatrix}",
          "explanation": "Images of basis vectors form columns.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Matrix",
          "workingLatex": "M = \\begin{pmatrix} 4 & 0 \\\\ 0 & 4 \\end{pmatrix}",
          "explanation": "Assemble the matrix.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Description",
          "workingLatex": "\\text{Enlargement, scale factor } 4",
          "explanation": "Equal scaling on both axes.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Verify $A$",
          "workingLatex": "M\\begin{pmatrix} 1 \\\\ 0 \\end{pmatrix} = \\begin{pmatrix} 4 \\\\ 0 \\end{pmatrix}",
          "explanation": "First condition satisfied.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify $B$",
          "workingLatex": "M\\begin{pmatrix} 0 \\\\ 1 \\end{pmatrix} = \\begin{pmatrix} 0 \\\\ 4 \\end{pmatrix}",
          "explanation": "Second condition satisfied.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "General point",
          "workingLatex": "(x,y)\\mapsto(4x,4y)",
          "explanation": "Linear rule from the matrix.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Determinant",
          "workingLatex": "\\det(M) = 16",
          "explanation": "Area multiplied by $16$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Invariant point",
          "workingLatex": "(0,0) \\text{ only}",
          "explanation": "Centre of enlargement.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Distance",
          "workingLatex": "|M\\mathbf{p}| = 4|\\mathbf{p}|",
          "explanation": "All distances from origin scale by $4$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Answer matrix",
          "workingLatex": "M = \\begin{pmatrix} 4 & 0 \\\\ 0 & 4 \\end{pmatrix}",
          "explanation": "Matrix found.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Answer description",
          "workingLatex": "\\text{Enlargement SF } 4 \\text{ centre } O",
          "explanation": "Geometric description.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Uniqueness",
          "workingLatex": "\\text{Two independent vector images determine } M",
          "explanation": "Linear transformation fixed by basis images.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Summary",
          "workingLatex": "M = \\begin{pmatrix} 4 & 0 \\\\ 0 & 4 \\end{pmatrix};\\; \\text{enlargement SF } 4",
          "explanation": "Complete.",
          "diagram": null
        }
      ],
      "finalAnswer": "$M = \\begin{pmatrix} 4 & 0 \\\\ 0 & 4 \\end{pmatrix}$; enlargement scale factor $4$ about the origin."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Linear transformations",
    "subtopicId": "fm.y1.pure.linear-transformations",
    "questionDiagram": null,
    "id": "fm.y1.pure.linear-transformations.q060",
    "tags": [
      "determinant",
      "area-scale",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "questionText": "For $M = \\begin{pmatrix} 3 & 4 \\\\ 4 & -3 \\end{pmatrix}$, find (a) $\\det(M)$, (b) whether the transformation preserves area or reverses orientation, (c) the image of $(1,2)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "(a) Determinant",
          "workingLatex": "\\det(M) = (3)(-3) - (4)(4) = -9 - 16 = -25",
          "explanation": "Product of eigenvalues; area scale factor.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "(b) Interpret det",
          "workingLatex": "\\det = -25 < 0",
          "explanation": "Negative determinant reverses orientation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "(b) Area scale",
          "workingLatex": "\\text{Area multiplied by } 25",
          "explanation": "Absolute value of determinant.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check if orthogonal",
          "workingLatex": "\\text{Rows not perpendicular}",
          "explanation": "Not a pure rotation or reflection.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "(c) Multiply",
          "workingLatex": "M\\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix} = \\begin{pmatrix} 11 \\\\ -2 \\end{pmatrix}",
          "explanation": "Apply matrix to the point.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "(c) Working",
          "workingLatex": "x' = 3(1)+4(2)=11,\\; y' = 4(1)+(-3)(2)=-2",
          "explanation": "Row calculations.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Magnitude change",
          "workingLatex": "|(1,2)|=\\sqrt{5},\\; |(11,-2)|=5\\sqrt{5}",
          "explanation": "Distance scales by $\\sqrt{25}=5$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer (a)",
          "workingLatex": "\\det(M) = -25",
          "explanation": "Determinant value.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer (b)",
          "workingLatex": "\\text{Area } \\times 25;\\; \\text{orientation reversed}",
          "explanation": "Area and orientation.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Answer (c)",
          "workingLatex": "(11, -2)",
          "explanation": "Image point.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Factorise",
          "workingLatex": "M = 5\\begin{pmatrix} 0.6 & 0.8 \\\\ 0.8 & -0.6 \\end{pmatrix}",
          "explanation": "Scale factor $5$ with reflection-like part.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Eigenvalues",
          "workingLatex": "\\lambda = \\pm 5",
          "explanation": "Confirms scaling factor $\\sqrt{25}$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Summary",
          "workingLatex": "\\det=-25;\\; (11,-2)",
          "explanation": "All parts answered.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\det(M) = -25$. (b) Area scale factor $25$; orientation reversed. (c) Image is $(11, -2)$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Linear transformations",
    "subtopicId": "fm.y1.pure.linear-transformations",
    "questionDiagram": null,
    "id": "fm.y1.pure.linear-transformations.q061",
    "tags": [
      "non-commutative",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "written",
    "questionText": "The transformation $T$ has matrix $AB$ where $A = \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}$ and $B = \\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}$. Find $AB$, describe $T$, and determine whether $AB = BA$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Compute $AB$",
          "workingLatex": "\\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}\\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix} = \\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}",
          "explanation": "Multiply in order.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Describe $T$",
          "workingLatex": "\\text{Reflection in } y = x",
          "explanation": "Recognise the product matrix.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute $BA$",
          "workingLatex": "\\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}\\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix} = \\begin{pmatrix} 0 & -1 \\\\ -1 & 0 \\end{pmatrix}",
          "explanation": "Reverse order.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compare",
          "workingLatex": "AB \\neq BA",
          "explanation": "Matrix multiplication is not commutative.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Geometric meaning of $BA$",
          "workingLatex": "\\text{Reflection in } y = -x",
          "explanation": "Different composite transformation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Test point for $AB$",
          "workingLatex": "(2,1) \\mapsto (1,2)",
          "explanation": "Swap coordinates.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Test point for $BA$",
          "workingLatex": "(2,1) \\mapsto (-1,-2)",
          "explanation": "Different image.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer $AB$",
          "workingLatex": "AB = \\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}",
          "explanation": "Product matrix.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer description",
          "workingLatex": "\\text{Reflection in } y=x",
          "explanation": "Geometric interpretation.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Answer commutativity",
          "workingLatex": "AB \\neq BA",
          "explanation": "Order matters.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "General principle",
          "workingLatex": "\\text{Compositions of rotations/reflections depend on order}",
          "explanation": "Non-commutative algebra reflects geometry.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Determinants",
          "workingLatex": "\\det(A)=1,\\; \\det(B)=-1,\\; \\det(AB)=-1",
          "explanation": "Consistent with one reflection.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Summary",
          "workingLatex": "AB = \\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix};\\; \\text{not commutative}",
          "explanation": "Complete.",
          "diagram": null
        }
      ],
      "finalAnswer": "$AB = \\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$ (reflection in $y=x$). $AB \\neq BA$; reversing the order gives reflection in $y=-x$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Linear transformations",
    "subtopicId": "fm.y1.pure.linear-transformations",
    "questionDiagram": null,
    "id": "fm.y1.pure.linear-transformations.q062",
    "tags": [
      "reflection-general-line",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "questionText": "Find the matrix for reflection in the line $y = 2x$ and hence find the image of $(2, 1)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "General formula",
          "workingLatex": "\\text{For line } y=(\\tan\\alpha)x,\\; \\text{use double-angle formulae}",
          "explanation": "Reflection matrix depends on angle $\\alpha$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Angle of line",
          "workingLatex": "\\tan\\alpha = 2 \\Rightarrow \\cos 2\\alpha = \\frac{1-4}{1+4} = -\\frac{3}{5}",
          "explanation": "Use $\\cos 2\\alpha = \\frac{1-\\tan^2\\alpha}{1+\\tan^2\\alpha}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Sin 2α",
          "workingLatex": "\\sin 2\\alpha = \\frac{2(2)}{1+4} = \\frac{4}{5}",
          "explanation": "Use $\\sin 2\\alpha = \\frac{2\\tan\\alpha}{1+\\tan^2\\alpha}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Reflection matrix",
          "workingLatex": "\\begin{pmatrix} \\cos 2\\alpha & \\sin 2\\alpha \\\\ \\sin 2\\alpha & -\\cos 2\\alpha \\end{pmatrix} = \\begin{pmatrix} -3/5 & 4/5 \\\\ 4/5 & 3/5 \\end{pmatrix}",
          "explanation": "Standard reflection in line at angle $\\alpha$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply to point",
          "workingLatex": "\\begin{pmatrix} -3/5 & 4/5 \\\\ 4/5 & 3/5 \\end{pmatrix}\\begin{pmatrix} 2 \\\\ 1 \\end{pmatrix} = \\begin{pmatrix} -2/5 \\\\ 11/5 \\end{pmatrix}",
          "explanation": "Matrix multiplication.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify on line",
          "workingLatex": "\\text{Point on } y=2x \\text{ is fixed}",
          "explanation": "Check $(1,2)$ maps to itself.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Perpendicular distance",
          "workingLatex": "\\text{Distance to line preserved}",
          "explanation": "Property of reflections.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Determinant",
          "workingLatex": "\\det = -1",
          "explanation": "Confirms reflection.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer matrix",
          "workingLatex": "M = \\begin{pmatrix} -3/5 & 4/5 \\\\ 4/5 & 3/5 \\end{pmatrix}",
          "explanation": "Reflection matrix.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Answer image",
          "workingLatex": "(-\\frac{2}{5}, \\frac{11}{5})",
          "explanation": "Image of $(2,1)$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Alternative method",
          "workingLatex": "\\text{Project onto line then reflect}",
          "explanation": "Geometric construction confirms algebra.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Invariant line",
          "workingLatex": "y = 2x",
          "explanation": "Mirror line fixed pointwise.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Summary",
          "workingLatex": "M = \\begin{pmatrix} -3/5 & 4/5 \\\\ 4/5 & 3/5 \\end{pmatrix};\\; \\text{image } (-\\frac{2}{5}, \\frac{11}{5})",
          "explanation": "Complete.",
          "diagram": null
        }
      ],
      "finalAnswer": "$M = \\begin{pmatrix} -\\frac{3}{5} & \\frac{4}{5} \\\\ \\frac{4}{5} & \\frac{3}{5} \\end{pmatrix}$. Image of $(2,1)$ is $\\left(-\\frac{2}{5}, \\frac{11}{5}\\right)$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Linear transformations",
    "subtopicId": "fm.y1.pure.linear-transformations",
    "questionDiagram": null,
    "id": "fm.y1.pure.linear-transformations.q063",
    "tags": [
      "shape-transformation",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "written",
    "questionText": "A triangle has vertices $O(0,0)$, $A(2,0)$, and $B(0,3)$. Find the images under $M = \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}$ and describe how the triangle has transformed.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Transform each vertex",
          "workingLatex": "O'=(0,0),\\; A'=(0,2),\\; B'=(-3,0)",
          "explanation": "Apply matrix to each coordinate.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Image of $O$",
          "workingLatex": "M\\begin{pmatrix} 0 \\\\ 0 \\end{pmatrix} = \\begin{pmatrix} 0 \\\\ 0 \\end{pmatrix}",
          "explanation": "Origin fixed.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Image of $A$",
          "workingLatex": "M\\begin{pmatrix} 2 \\\\ 0 \\end{pmatrix} = \\begin{pmatrix} 0 \\\\ 2 \\end{pmatrix}",
          "explanation": "$(2,0)$ rotates to $(0,2)$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Image of $B$",
          "workingLatex": "M\\begin{pmatrix} 0 \\\\ 3 \\end{pmatrix} = \\begin{pmatrix} -3 \\\\ 0 \\end{pmatrix}",
          "explanation": "$(0,3)$ rotates to $(-3,0)$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Area of original",
          "workingLatex": "\\text{Area} = \\frac{1}{2}(2)(3) = 3",
          "explanation": "Right-angled triangle at origin.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Area of image",
          "workingLatex": "\\text{Area} = 3",
          "explanation": "Rotation preserves area.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Orientation",
          "workingLatex": "\\text{Anticlockwise } 90^\\circ",
          "explanation": "Vertices cycle: $x$-axis to $y$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Shape",
          "workingLatex": "\\text{Congruent right-angled triangle}",
          "explanation": "Lengths and angles preserved.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Side lengths",
          "workingLatex": "OA=2,\\; OB=3,\\; AB=\\sqrt{13}",
          "explanation": "Unchanged under rotation.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Answer vertices",
          "workingLatex": "O'(0,0),\\; A'(0,2),\\; B'(-3,0)",
          "explanation": "Image triangle.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Answer description",
          "workingLatex": "90^\\circ \\text{ anticlockwise rotation about } O",
          "explanation": "Transformation type.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Matrix interpretation",
          "workingLatex": "\\det(M)=1",
          "explanation": "Confirms area-preserving rotation.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Summary",
          "workingLatex": "\\text{Vertices } (0,0),(0,2),(-3,0);\\; 90^\\circ \\text{ rotation}",
          "explanation": "Complete.",
          "diagram": null
        }
      ],
      "finalAnswer": "$O'=(0,0)$, $A'=(0,2)$, $B'=(-3,0)$. The triangle is rotated $90^\\circ$ anticlockwise about the origin; area and shape are preserved."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Linear transformations",
    "subtopicId": "fm.y1.pure.linear-transformations",
    "questionDiagram": null,
    "id": "fm.y1.pure.linear-transformations.q064",
    "tags": [
      "enlargement-parameters",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "questionText": "If $M = \\begin{pmatrix} a & 0 \\\\ 0 & d \\end{pmatrix}$ represents an enlargement, find $a$ and $d$ given that $(3,4) \\mapsto (9,-12)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Diagonal form",
          "workingLatex": "(x,y)\\mapsto(ax, dy)",
          "explanation": "Independent scaling on each axis.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Use $x$-coordinate",
          "workingLatex": "3a = 9 \\Rightarrow a = 3",
          "explanation": "From first component.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use $y$-coordinate",
          "workingLatex": "4d = -12 \\Rightarrow d = -3",
          "explanation": "From second component.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Matrix",
          "workingLatex": "M = \\begin{pmatrix} 3 & 0 \\\\ 0 & -3 \\end{pmatrix}",
          "explanation": "Assemble values.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Description",
          "workingLatex": "\\text{Enlargement SF } 3 \\text{ in } x,\\; \\text{SF } -3 \\text{ in } y",
          "explanation": "Or reflection in $x$-axis plus enlargement.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Determinant",
          "workingLatex": "\\det = -9",
          "explanation": "Area scale factor $9$; orientation reversed.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify point",
          "workingLatex": "M\\begin{pmatrix} 3 \\\\ 4 \\end{pmatrix} = \\begin{pmatrix} 9 \\\\ -12 \\end{pmatrix}",
          "explanation": "Matches given image.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Distance",
          "workingLatex": "|(3,4)|=5,\\; |(9,-12)|=15",
          "explanation": "Distance multiplied by $3$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "a=3,\\; d=-3",
          "explanation": "Diagonal entries.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Geometric view",
          "workingLatex": "\\text{Stretch by } 3 \\text{ and reflect in } x\\text{-axis}",
          "explanation": "Equivalent description.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Invariant lines",
          "workingLatex": "x\\text{-axis and } y\\text{-axis}",
          "explanation": "Coordinate axes are invariant lines.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Origin",
          "workingLatex": "(0,0) \\text{ invariant}",
          "explanation": "Centre fixed.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Summary",
          "workingLatex": "M = \\begin{pmatrix} 3 & 0 \\\\ 0 & -3 \\end{pmatrix}",
          "explanation": "Complete matrix.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a = 3$, $d = -3$. Matrix $\\begin{pmatrix} 3 & 0 \\\\ 0 & -3 \\end{pmatrix}$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Linear transformations",
    "subtopicId": "fm.y1.pure.linear-transformations",
    "questionDiagram": null,
    "id": "fm.y1.pure.linear-transformations.q065",
    "tags": [
      "matrix-inverse",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "questionText": "Find the inverse of $M = \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}$ and interpret it geometrically.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Determinant",
          "workingLatex": "\\det(M) = 1",
          "explanation": "Non-zero so inverse exists.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Formula",
          "workingLatex": "M^{-1} = \\frac{1}{\\det}\\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}",
          "explanation": "Standard $2\\times2$ inverse.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute",
          "workingLatex": "M^{-1} = \\begin{pmatrix} 0 & 1 \\\\ -1 & 0 \\end{pmatrix}",
          "explanation": "Swap and change signs appropriately.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Verify",
          "workingLatex": "MM^{-1} = I",
          "explanation": "Product gives identity.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Geometric meaning",
          "workingLatex": "M \\text{ is } 90^\\circ \\text{ anticlockwise}",
          "explanation": "Original transformation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Inverse meaning",
          "workingLatex": "M^{-1} \\text{ is } 90^\\circ \\text{ clockwise}",
          "explanation": "Undoes the rotation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check composition",
          "workingLatex": "M M^{-1} = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}",
          "explanation": "Returns to identity.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Orthogonal property",
          "workingLatex": "M^{-1} = M^T",
          "explanation": "Rotation matrices: inverse equals transpose.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "M^{-1} = \\begin{pmatrix} 0 & 1 \\\\ -1 & 0 \\end{pmatrix}",
          "explanation": "Inverse matrix.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Interpretation",
          "workingLatex": "90^\\circ \\text{ clockwise rotation about } O",
          "explanation": "Geometric description.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Test point",
          "workingLatex": "(1,0) \\mapsto (0,-1) \\text{ under } M^{-1}",
          "explanation": "Confirms clockwise turn.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "General principle",
          "workingLatex": "\\text{Inverse transformation reverses the map}",
          "explanation": "Algebra matches geometry.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Summary",
          "workingLatex": "M^{-1} = \\begin{pmatrix} 0 & 1 \\\\ -1 & 0 \\end{pmatrix};\\; 90^\\circ \\text{ clockwise}",
          "explanation": "Complete.",
          "diagram": null
        }
      ],
      "finalAnswer": "$M^{-1} = \\begin{pmatrix} 0 & 1 \\\\ -1 & 0 \\end{pmatrix}$, representing a $90^\\circ$ clockwise rotation about the origin."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Linear transformations",
    "subtopicId": "fm.y1.pure.linear-transformations",
    "questionDiagram": null,
    "id": "fm.y1.pure.linear-transformations.q066",
    "tags": [
      "matrix-from-two-points",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "questionText": "The transformation $T$ maps $(1,0) \\mapsto (2,1)$ and $(0,1) \\mapsto (-3,2)$. Find the matrix of $T$ and the image of $(1,1)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Column vector rule",
          "workingLatex": "\\text{Columns are images of } (1,0) \\text{ and } (0,1)",
          "explanation": "A $2\\times2$ matrix is determined by basis images.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "First column",
          "workingLatex": "T\\begin{pmatrix}1\\\\0\\end{pmatrix} = \\begin{pmatrix} 2 \\\\ 1 \\end{pmatrix}",
          "explanation": "Given image of $(1,0)$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Second column",
          "workingLatex": "T\\begin{pmatrix}0\\\\1\\end{pmatrix} = \\begin{pmatrix} -3 \\\\ 2 \\end{pmatrix}",
          "explanation": "Given image of $(0,1)$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Assemble matrix",
          "workingLatex": "M = \\begin{pmatrix} 2 & -3 \\\\ 1 & 2 \\end{pmatrix}",
          "explanation": "Place column vectors side by side.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify $(1,0)$",
          "workingLatex": "M\\begin{pmatrix} 1 \\\\ 0 \\end{pmatrix} = \\begin{pmatrix} 2 \\\\ 1 \\end{pmatrix}",
          "explanation": "First condition satisfied.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify $(0,1)$",
          "workingLatex": "M\\begin{pmatrix} 0 \\\\ 1 \\end{pmatrix} = \\begin{pmatrix} -3 \\\\ 2 \\end{pmatrix}",
          "explanation": "Second condition satisfied.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Image of $(1,1)$",
          "workingLatex": "M\\begin{pmatrix} 1 \\\\ 1 \\end{pmatrix} = \\begin{pmatrix} -1 \\\\ 3 \\end{pmatrix}",
          "explanation": "Since $(1,1)=(1,0)+(0,1)$, add the column images.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Working",
          "workingLatex": "x' = 2(1)+(-3)(1) = -1,\\; y' = 1(1)+2(1) = 3",
          "explanation": "Matrix multiplication.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Determinant",
          "workingLatex": "\\det(M) = 4+3 = 7",
          "explanation": "Area scale factor.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Answer matrix",
          "workingLatex": "M = \\begin{pmatrix} 2 & -3 \\\\ 1 & 2 \\end{pmatrix}",
          "explanation": "Transformation matrix.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Answer image",
          "workingLatex": "(-1, 3)",
          "explanation": "Image of $(1,1)$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Linearity",
          "workingLatex": "T(\\mathbf{u}+\\mathbf{v}) = T\\mathbf{u}+T\\mathbf{v}",
          "explanation": "Any point image follows from basis images.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Summary",
          "workingLatex": "M = \\begin{pmatrix} 2 & -3 \\\\ 1 & 2 \\end{pmatrix};\\; (1,1)\\mapsto(-1,3)",
          "explanation": "Complete.",
          "diagram": null
        }
      ],
      "finalAnswer": "$M = \\begin{pmatrix} 2 & -3 \\\\ 1 & 2 \\end{pmatrix}$. Image of $(1,1)$ is $(-1, 3)$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Linear transformations",
    "subtopicId": "fm.y1.pure.linear-transformations",
    "questionDiagram": null,
    "id": "fm.y1.pure.linear-transformations.q067",
    "tags": [
      "shear-invariant-lines",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "written",
    "questionText": "For $M = \\begin{pmatrix} 1 & 2 \\\\ 0 & 1 \\end{pmatrix}$ (shear), find the invariant lines through the origin and the image of the line $y = 2$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Shear type",
          "workingLatex": "\\text{Horizontal shear: } (x,y)\\mapsto(x+2y,y)",
          "explanation": "From matrix structure.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Invariant line condition",
          "workingLatex": "M\\mathbf{v} = \\lambda\\mathbf{v}",
          "explanation": "Direction vectors of invariant lines.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Eigenvalues",
          "workingLatex": "\\det(M-\\lambda I)=0 \\Rightarrow \\lambda=1 \\text{ (double)}",
          "explanation": "Only eigenvalue is $1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Eigenvectors",
          "workingLatex": "(x+2y,y)=\\lambda(x,y) \\Rightarrow y=0 \\text{ or special cases}",
          "explanation": "Solve $(M-I)\\mathbf{v}=0$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Invariant lines",
          "workingLatex": "y = 0 \\text{ (the } x\\text{-axis)}",
          "explanation": "Horizontal lines shear; $x$-axis invariant.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Points on $y=2$",
          "workingLatex": "(x,2)\\mapsto(x+4,2)",
          "explanation": "All points on $y=2$ map to $y=2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Image of line $y=2$",
          "workingLatex": "y = 2 \\text{ (same line)}",
          "explanation": "Horizontal lines are invariant as sets.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Horizontal shift",
          "workingLatex": "x \\text{ increases by } 4",
          "explanation": "Each point moves $4$ units right.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Area",
          "workingLatex": "\\det(M)=1",
          "explanation": "Area preserved.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Answer invariant",
          "workingLatex": "$x$-axis is an invariant line; every horizontal line maps to a parallel horizontal line",
          "explanation": "Invariant structure.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Answer image of $y=2$",
          "workingLatex": "$y=2$ with $x$-coordinates increased by $4$",
          "explanation": "Line maps to itself with shear.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Example",
          "workingLatex": "(0,2)\\mapsto(4,2),\\; (1,2)\\mapsto(5,2)",
          "explanation": "Specific images.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Summary",
          "workingLatex": "\\text{Horizontal lines invariant as sets; } y=2 \\mapsto y=2",
          "explanation": "Complete.",
          "diagram": null
        }
      ],
      "finalAnswer": "Invariant line through the origin: the $x$-axis ($y=0$). The line $y=2$ maps to itself; each point $(x,2)$ maps to $(x+4,2)$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Linear transformations",
    "subtopicId": "fm.y1.pure.linear-transformations",
    "questionDiagram": null,
    "id": "fm.y1.pure.linear-transformations.q068",
    "tags": [
      "rotation-reflection-composite",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "questionText": "Show that composing a $90^\\circ$ rotation with a reflection in the $x$-axis gives a reflection, and find the equation of the mirror line.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Matrices",
          "workingLatex": "R = \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix},\\; F = \\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}",
          "explanation": "Rotation then reflection: $FR$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Compute $FR$",
          "workingLatex": "\\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}\\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix} = \\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}",
          "explanation": "Matrix product.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Determinant",
          "workingLatex": "\\det(FR) = -1",
          "explanation": "Indicates reflection (not rotation).",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify matrix",
          "workingLatex": "FR = \\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}",
          "explanation": "Reflection in $y=x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Mirror line",
          "workingLatex": "y = x",
          "explanation": "From standard matrix.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Angle argument",
          "workingLatex": "\\text{Rotate } x\\text{-axis to } y\\text{-axis, then reflect}",
          "explanation": "Geometric construction.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify fixed line",
          "workingLatex": "\\text{Points on } y=x \\text{ fixed}",
          "explanation": "Definition of reflection.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Test point",
          "workingLatex": "(1,0) \\mapsto (0,1) \\mapsto (0,-1)$ via steps; direct: $(1,0)\\mapsto(0,1)$ under $FR$",
          "explanation": "Consistent.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\text{Reflection in } y = x",
          "explanation": "Mirror line equation.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "General result",
          "workingLatex": "\\text{Rotation + reflection} = \\text{reflection}",
          "explanation": "Useful composition rule.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Order matters",
          "workingLatex": "RF \\neq FR",
          "explanation": "Different mirror lines in general.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Eigenvalues",
          "workingLatex": "\\lambda = 1, -1",
          "explanation": "Characteristic of reflection.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Summary",
          "workingLatex": "\\text{Reflection in } y=x",
          "explanation": "Confirmed.",
          "diagram": null
        }
      ],
      "finalAnswer": "The composition is a reflection. Mirror line: $y = x$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Linear transformations",
    "subtopicId": "fm.y1.pure.linear-transformations",
    "questionDiagram": null,
    "id": "fm.y1.pure.linear-transformations.q069",
    "tags": [
      "triple-composite",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "questionText": "A sequence of transformations: enlargement SF $2$ about $O$, then rotation $90^\\circ$ anticlockwise, then reflection in $y=x$. Find the combined matrix and the image of $(1, 2)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Individual matrices",
          "workingLatex": "E = \\begin{pmatrix} 2 & 0 \\\\ 0 & 2 \\end{pmatrix},\\; R = \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix},\\; F = \\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}",
          "explanation": "Write each matrix.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Order",
          "workingLatex": "\\text{Combined} = FRE",
          "explanation": "Rightmost applied first to the point.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute $RE$",
          "workingLatex": "\\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}\\begin{pmatrix} 2 & 0 \\\\ 0 & 2 \\end{pmatrix} = \\begin{pmatrix} 0 & -2 \\\\ 2 & 0 \\end{pmatrix}",
          "explanation": "Rotation after enlargement.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute $FRE$",
          "workingLatex": "\\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}\\begin{pmatrix} 0 & -2 \\\\ 2 & 0 \\end{pmatrix} = \\begin{pmatrix} 2 & 0 \\\\ 0 & -2 \\end{pmatrix}",
          "explanation": "Final product.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Identify",
          "workingLatex": "\\text{Reflection in } x\\text{-axis with SF } 2",
          "explanation": "Equivalent to $\\begin{pmatrix} 2 & 0 \\\\ 0 & -2 \\end{pmatrix}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply to point",
          "workingLatex": "\\begin{pmatrix} 2 & 0 \\\\ 0 & -2 \\end{pmatrix}\\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix} = \\begin{pmatrix} 2 \\\\ -4 \\end{pmatrix}",
          "explanation": "Direct calculation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Step-by-step",
          "workingLatex": "(1,2)\\mapsto(2,4)\\mapsto(-4,2)\\mapsto(2,-4)",
          "explanation": "Verify via sequence.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Determinant",
          "workingLatex": "\\det = -4",
          "explanation": "Area scale factor $4$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer matrix",
          "workingLatex": "FRE = \\begin{pmatrix} 2 & 0 \\\\ 0 & -2 \\end{pmatrix}",
          "explanation": "Combined matrix.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Answer image",
          "workingLatex": "(2, -4)",
          "explanation": "Image of $(1,2)$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Simplify interpretation",
          "workingLatex": "\\text{Scale by } 2 \\text{ and reflect in } x\\text{-axis}",
          "explanation": "Single transformation.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Check distance",
          "workingLatex": "|(1,2)|=\\sqrt{5},\\; |(2,-4)|=2\\sqrt{5}",
          "explanation": "Consistent scaling.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Summary",
          "workingLatex": "M = \\begin{pmatrix} 2 & 0 \\\\ 0 & -2 \\end{pmatrix};\\; (2,-4)",
          "explanation": "Complete.",
          "diagram": null
        }
      ],
      "finalAnswer": "Combined matrix $\\begin{pmatrix} 2 & 0 \\\\ 0 & -2 \\end{pmatrix}$. Image of $(1,2)$ is $(2,-4)$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Linear transformations",
    "subtopicId": "fm.y1.pure.linear-transformations",
    "questionDiagram": null,
    "id": "fm.y1.pure.linear-transformations.q070",
    "tags": [
      "invariant-line-construction",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "questionText": "The matrix $M$ represents a transformation leaving the line $y = 3x$ invariant. Given $M\\begin{pmatrix}1\\\\3\\end{pmatrix} = \\begin{pmatrix}2\\\\6\\end{pmatrix}$ and $M\\begin{pmatrix}3\\\\-1\\end{pmatrix} = \\begin{pmatrix}-3\\\\1\\end{pmatrix}$, find $M$, classify the transformation, and find the image of $(1,1)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Column approach",
          "workingLatex": "\\text{Express standard basis in given directions}",
          "explanation": "Use linear combinations of the two given vectors.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "First given direction",
          "workingLatex": "\\begin{pmatrix}1\\\\3\\end{pmatrix} \\mapsto \\begin{pmatrix}2\\\\6\\end{pmatrix} = 2\\begin{pmatrix}1\\\\3\\end{pmatrix}",
          "explanation": "Stretch by factor $2$ along $y=3x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Second direction",
          "workingLatex": "\\begin{pmatrix}3\\\\-1\\end{pmatrix} \\mapsto \\begin{pmatrix}-3\\\\1\\end{pmatrix} = -\\begin{pmatrix}3\\\\-1\\end{pmatrix}",
          "explanation": "Reflection factor $-1$ perpendicular to invariant line.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Eigenvalue interpretation",
          "workingLatex": "\\lambda_1 = 2,\\; \\lambda_2 = -1",
          "explanation": "Along and perpendicular to invariant line.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Construct $M$",
          "workingLatex": "M = PDP^{-1} \\text{ or solve from basis images}",
          "explanation": "Build matrix from eigenvectors.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Construct using eigenvectors",
          "workingLatex": "M = V\\begin{pmatrix}2&0\\\\0&-1\\end{pmatrix}V^{-1}",
          "explanation": "Diagonalise in the eigenvector basis.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Matrix",
          "workingLatex": "M = \\begin{pmatrix} -7/10 & 9/10 \\\\ 9/10 & 17/10 \\end{pmatrix}",
          "explanation": "After multiplying out $VDV^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify conditions",
          "workingLatex": "M\\begin{pmatrix} 1 \\\\ 3 \\end{pmatrix} = \\begin{pmatrix} 2 \\\\ 6 \\end{pmatrix},\\; M\\begin{pmatrix} 3 \\\\ -1 \\end{pmatrix} = \\begin{pmatrix} -3 \\\\ 1 \\end{pmatrix}",
          "explanation": "Both given mappings satisfied.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Classification",
          "workingLatex": "\\text{Stretch factor } 2 \\text{ along } y=3x \\text{ and reflection across it}",
          "explanation": "Not a standard single rotation/reflection.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Determinant",
          "workingLatex": "\\det(M) = -2",
          "explanation": "Product of eigenvalues $2 \\times (-1)$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Image of $(1,1)$",
          "workingLatex": "M\\begin{pmatrix} 1 \\\\ 1 \\end{pmatrix} = \\begin{pmatrix} 1/5 \\\\ 13/5 \\end{pmatrix}",
          "explanation": "Apply final matrix.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Invariant line",
          "workingLatex": "y = 3x",
          "explanation": "Confirmed by first condition.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Summary",
          "workingLatex": "M = \\begin{pmatrix} -7/10 & 9/10 \\\\ 9/10 & 17/10 \\end{pmatrix};\\; (1,1)\\mapsto(\\frac{1}{5},\\frac{13}{5})",
          "explanation": "Complete multi-part answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "$M = \\begin{pmatrix} -\\frac{7}{10} & \\frac{9}{10} \\\\ \\frac{9}{10} & \\frac{17}{10} \\end{pmatrix}$. Stretch by $2$ along $y=3x$ with reflection across that line. Image of $(1,1)$ is $\\left(\\frac{1}{5}, \\frac{13}{5}\\right)$."
    }
  }
];
