import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Matrix arithmetic and determinants",
    "subtopicId": "fm.y1.pure.matrices",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrices.q001",
    "tags": [
      "basic",
      "addition"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Given $A = \\begin{pmatrix}1 & 2\\\\3 & 4\\end{pmatrix}$ and $B = \\begin{pmatrix}2 & 1\\\\0 & 3\\end{pmatrix}$, find $A + B$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write both matrices",
          "workingLatex": "A = \\begin{pmatrix}1 & 2\\\\3 & 4\\end{pmatrix},\\quad B = \\begin{pmatrix}2 & 1\\\\0 & 3\\end{pmatrix}",
          "explanation": "Matrix addition requires matrices of the same order.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Add corresponding entries",
          "workingLatex": "a_{ij} + b_{ij}",
          "explanation": "Add the element in each matching position.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Top-left entry",
          "workingLatex": "1 + 2 = 3",
          "explanation": "Combine the entries in row 1, column 1.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Remaining entries",
          "workingLatex": "\\text{Work through each position}",
          "explanation": "Apply the same rule to every element.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Result matrix",
          "workingLatex": "\\begin{pmatrix}3 & 3\\\\3 & 7\\end{pmatrix}",
          "explanation": "Collect all sums into the answer matrix.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify dimensions",
          "workingLatex": "2 \\times 2",
          "explanation": "The sum has the same order as the originals.",
          "diagram": null
        }
      ],
      "finalAnswer": "$A + B = \\begin{pmatrix}3 & 3\\\\3 & 7\\end{pmatrix}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Matrix arithmetic and determinants",
    "subtopicId": "fm.y1.pure.matrices",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrices.q002",
    "tags": [
      "mixed-signs",
      "addition"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Given $A = \\begin{pmatrix}5 & -1\\\\2 & 3\\end{pmatrix}$ and $B = \\begin{pmatrix}-2 & 4\\\\1 & 0\\end{pmatrix}$, find $A + B$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write both matrices",
          "workingLatex": "A = \\begin{pmatrix}5 & -1\\\\2 & 3\\end{pmatrix},\\quad B = \\begin{pmatrix}-2 & 4\\\\1 & 0\\end{pmatrix}",
          "explanation": "Matrix addition requires matrices of the same order.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Add corresponding entries",
          "workingLatex": "a_{ij} + b_{ij}",
          "explanation": "Add the element in each matching position.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Top-left entry",
          "workingLatex": "5 + -2 = 3",
          "explanation": "Combine the entries in row 1, column 1.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Remaining entries",
          "workingLatex": "\\text{Work through each position}",
          "explanation": "Apply the same rule to every element.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Result matrix",
          "workingLatex": "\\begin{pmatrix}3 & 3\\\\3 & 3\\end{pmatrix}",
          "explanation": "Collect all sums into the answer matrix.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify dimensions",
          "workingLatex": "2 \\times 2",
          "explanation": "The sum has the same order as the originals.",
          "diagram": null
        }
      ],
      "finalAnswer": "$A + B = \\begin{pmatrix}3 & 3\\\\3 & 3\\end{pmatrix}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Matrix arithmetic and determinants",
    "subtopicId": "fm.y1.pure.matrices",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrices.q003",
    "tags": [
      "with-zeros",
      "addition"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Given $A = \\begin{pmatrix}0 & 2\\\\3 & 1\\end{pmatrix}$ and $B = \\begin{pmatrix}4 & 0\\\\1 & 2\\end{pmatrix}$, find $A + B$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write both matrices",
          "workingLatex": "A = \\begin{pmatrix}0 & 2\\\\3 & 1\\end{pmatrix},\\quad B = \\begin{pmatrix}4 & 0\\\\1 & 2\\end{pmatrix}",
          "explanation": "Matrix addition requires matrices of the same order.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Add corresponding entries",
          "workingLatex": "a_{ij} + b_{ij}",
          "explanation": "Add the element in each matching position.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Top-left entry",
          "workingLatex": "0 + 4 = 4",
          "explanation": "Combine the entries in row 1, column 1.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Remaining entries",
          "workingLatex": "\\text{Work through each position}",
          "explanation": "Apply the same rule to every element.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Result matrix",
          "workingLatex": "\\begin{pmatrix}4 & 2\\\\4 & 3\\end{pmatrix}",
          "explanation": "Collect all sums into the answer matrix.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify dimensions",
          "workingLatex": "2 \\times 2",
          "explanation": "The sum has the same order as the originals.",
          "diagram": null
        }
      ],
      "finalAnswer": "$A + B = \\begin{pmatrix}4 & 2\\\\4 & 3\\end{pmatrix}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Matrix arithmetic and determinants",
    "subtopicId": "fm.y1.pure.matrices",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrices.q004",
    "tags": [
      "negative",
      "addition"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Given $A = \\begin{pmatrix}-1 & 2\\\\-3 & 4\\end{pmatrix}$ and $B = \\begin{pmatrix}2 & -1\\\\3 & -2\\end{pmatrix}$, find $A + B$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write both matrices",
          "workingLatex": "A = \\begin{pmatrix}-1 & 2\\\\-3 & 4\\end{pmatrix},\\quad B = \\begin{pmatrix}2 & -1\\\\3 & -2\\end{pmatrix}",
          "explanation": "Matrix addition requires matrices of the same order.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Add corresponding entries",
          "workingLatex": "a_{ij} + b_{ij}",
          "explanation": "Add the element in each matching position.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Top-left entry",
          "workingLatex": "-1 + 2 = 1",
          "explanation": "Combine the entries in row 1, column 1.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Remaining entries",
          "workingLatex": "\\text{Work through each position}",
          "explanation": "Apply the same rule to every element.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Result matrix",
          "workingLatex": "\\begin{pmatrix}1 & 1\\\\0 & 2\\end{pmatrix}",
          "explanation": "Collect all sums into the answer matrix.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify dimensions",
          "workingLatex": "2 \\times 2",
          "explanation": "The sum has the same order as the originals.",
          "diagram": null
        }
      ],
      "finalAnswer": "$A + B = \\begin{pmatrix}1 & 1\\\\0 & 2\\end{pmatrix}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Matrix arithmetic and determinants",
    "subtopicId": "fm.y1.pure.matrices",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrices.q005",
    "tags": [
      "diagonal",
      "addition"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Given $A = \\begin{pmatrix}6 & 0\\\\0 & 5\\end{pmatrix}$ and $B = \\begin{pmatrix}1 & 2\\\\3 & 4\\end{pmatrix}$, find $A + B$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write both matrices",
          "workingLatex": "A = \\begin{pmatrix}6 & 0\\\\0 & 5\\end{pmatrix},\\quad B = \\begin{pmatrix}1 & 2\\\\3 & 4\\end{pmatrix}",
          "explanation": "Matrix addition requires matrices of the same order.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Add corresponding entries",
          "workingLatex": "a_{ij} + b_{ij}",
          "explanation": "Add the element in each matching position.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Top-left entry",
          "workingLatex": "6 + 1 = 7",
          "explanation": "Combine the entries in row 1, column 1.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Remaining entries",
          "workingLatex": "\\text{Work through each position}",
          "explanation": "Apply the same rule to every element.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Result matrix",
          "workingLatex": "\\begin{pmatrix}7 & 2\\\\3 & 9\\end{pmatrix}",
          "explanation": "Collect all sums into the answer matrix.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify dimensions",
          "workingLatex": "2 \\times 2",
          "explanation": "The sum has the same order as the originals.",
          "diagram": null
        }
      ],
      "finalAnswer": "$A + B = \\begin{pmatrix}7 & 2\\\\3 & 9\\end{pmatrix}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Matrix arithmetic and determinants",
    "subtopicId": "fm.y1.pure.matrices",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrices.q006",
    "tags": [
      "basic",
      "addition"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Given $A = \\begin{pmatrix}2 & 3\\\\1 & 4\\end{pmatrix}$ and $B = \\begin{pmatrix}3 & 1\\\\2 & 2\\end{pmatrix}$, find $A + B$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write both matrices",
          "workingLatex": "A = \\begin{pmatrix}2 & 3\\\\1 & 4\\end{pmatrix},\\quad B = \\begin{pmatrix}3 & 1\\\\2 & 2\\end{pmatrix}",
          "explanation": "Matrix addition requires matrices of the same order.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Add corresponding entries",
          "workingLatex": "a_{ij} + b_{ij}",
          "explanation": "Add the element in each matching position.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Top-left entry",
          "workingLatex": "2 + 3 = 5",
          "explanation": "Combine the entries in row 1, column 1.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Remaining entries",
          "workingLatex": "\\text{Work through each position}",
          "explanation": "Apply the same rule to every element.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Result matrix",
          "workingLatex": "\\begin{pmatrix}5 & 4\\\\3 & 6\\end{pmatrix}",
          "explanation": "Collect all sums into the answer matrix.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify dimensions",
          "workingLatex": "2 \\times 2",
          "explanation": "The sum has the same order as the originals.",
          "diagram": null
        }
      ],
      "finalAnswer": "$A + B = \\begin{pmatrix}5 & 4\\\\3 & 6\\end{pmatrix}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Matrix arithmetic and determinants",
    "subtopicId": "fm.y1.pure.matrices",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrices.q007",
    "tags": [
      "basic",
      "subtraction"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Given $A = \\begin{pmatrix}7 & 3\\\\2 & 5\\end{pmatrix}$ and $B = \\begin{pmatrix}3 & 1\\\\2 & 1\\end{pmatrix}$, find $A - B$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write both matrices",
          "workingLatex": "A = \\begin{pmatrix}7 & 3\\\\2 & 5\\end{pmatrix},\\quad B = \\begin{pmatrix}3 & 1\\\\2 & 1\\end{pmatrix}",
          "explanation": "Subtraction also requires matching orders.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Subtract corresponding entries",
          "workingLatex": "a_{ij} - b_{ij}",
          "explanation": "Subtract element by element.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Top-left entry",
          "workingLatex": "7 - 3 = 4",
          "explanation": "First position: subtract matching entries.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Complete all positions",
          "workingLatex": "\\text{Apply to every } (i,j)",
          "explanation": "Work through each of the four entries.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Result matrix",
          "workingLatex": "\\begin{pmatrix}4 & 2\\\\0 & 4\\end{pmatrix}",
          "explanation": "Assemble the differences.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check",
          "workingLatex": "A - B = \\begin{pmatrix}4 & 2\\\\0 & 4\\end{pmatrix}",
          "explanation": "Confirm each entry individually.",
          "diagram": null
        }
      ],
      "finalAnswer": "$A - B = \\begin{pmatrix}4 & 2\\\\0 & 4\\end{pmatrix}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Matrix arithmetic and determinants",
    "subtopicId": "fm.y1.pure.matrices",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrices.q008",
    "tags": [
      "basic",
      "subtraction"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Given $A = \\begin{pmatrix}4 & 6\\\\1 & 3\\end{pmatrix}$ and $B = \\begin{pmatrix}2 & 4\\\\0 & 2\\end{pmatrix}$, find $A - B$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write both matrices",
          "workingLatex": "A = \\begin{pmatrix}4 & 6\\\\1 & 3\\end{pmatrix},\\quad B = \\begin{pmatrix}2 & 4\\\\0 & 2\\end{pmatrix}",
          "explanation": "Subtraction also requires matching orders.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Subtract corresponding entries",
          "workingLatex": "a_{ij} - b_{ij}",
          "explanation": "Subtract element by element.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Top-left entry",
          "workingLatex": "4 - 2 = 2",
          "explanation": "First position: subtract matching entries.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Complete all positions",
          "workingLatex": "\\text{Apply to every } (i,j)",
          "explanation": "Work through each of the four entries.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Result matrix",
          "workingLatex": "\\begin{pmatrix}2 & 2\\\\1 & 1\\end{pmatrix}",
          "explanation": "Assemble the differences.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check",
          "workingLatex": "A - B = \\begin{pmatrix}2 & 2\\\\1 & 1\\end{pmatrix}",
          "explanation": "Confirm each entry individually.",
          "diagram": null
        }
      ],
      "finalAnswer": "$A - B = \\begin{pmatrix}2 & 2\\\\1 & 1\\end{pmatrix}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Matrix arithmetic and determinants",
    "subtopicId": "fm.y1.pure.matrices",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrices.q009",
    "tags": [
      "mixed",
      "subtraction"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Given $A = \\begin{pmatrix}10 & -2\\\\3 & 7\\end{pmatrix}$ and $B = \\begin{pmatrix}4 & 1\\\\3 & 2\\end{pmatrix}$, find $A - B$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write both matrices",
          "workingLatex": "A = \\begin{pmatrix}10 & -2\\\\3 & 7\\end{pmatrix},\\quad B = \\begin{pmatrix}4 & 1\\\\3 & 2\\end{pmatrix}",
          "explanation": "Subtraction also requires matching orders.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Subtract corresponding entries",
          "workingLatex": "a_{ij} - b_{ij}",
          "explanation": "Subtract element by element.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Top-left entry",
          "workingLatex": "10 - 4 = 6",
          "explanation": "First position: subtract matching entries.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Complete all positions",
          "workingLatex": "\\text{Apply to every } (i,j)",
          "explanation": "Work through each of the four entries.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Result matrix",
          "workingLatex": "\\begin{pmatrix}6 & -3\\\\0 & 5\\end{pmatrix}",
          "explanation": "Assemble the differences.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check",
          "workingLatex": "A - B = \\begin{pmatrix}6 & -3\\\\0 & 5\\end{pmatrix}",
          "explanation": "Confirm each entry individually.",
          "diagram": null
        }
      ],
      "finalAnswer": "$A - B = \\begin{pmatrix}6 & -3\\\\0 & 5\\end{pmatrix}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Matrix arithmetic and determinants",
    "subtopicId": "fm.y1.pure.matrices",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrices.q010",
    "tags": [
      "positive",
      "scalar-multiplication"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Find $3 \\times \\begin{pmatrix}1 & 2\\\\0 & 3\\end{pmatrix}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Scalar multiplication rule",
          "workingLatex": "kA = \\begin{pmatrix}1 & 2\\\\0 & 3\\end{pmatrix} \\text{ with each entry multiplied by } 3",
          "explanation": "Multiply every entry of the matrix by the scalar.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "First row",
          "workingLatex": "3 \\times 1 = 3,\\quad 3 \\times 2 = 6",
          "explanation": "Scale each element in row 1.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Second row",
          "workingLatex": "3 \\times 0 = 0,\\quad 3 \\times 3 = 9",
          "explanation": "Scale each element in row 2.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Assemble result",
          "workingLatex": "\\begin{pmatrix}3 & 6\\\\0 & 9\\end{pmatrix}",
          "explanation": "Write the scaled matrix.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify",
          "workingLatex": "3 \\cdot \\begin{pmatrix}1 & 2\\\\0 & 3\\end{pmatrix} = \\begin{pmatrix}3 & 6\\\\0 & 9\\end{pmatrix}",
          "explanation": "Check that every entry was multiplied.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\begin{pmatrix}3 & 6\\\\0 & 9\\end{pmatrix}",
          "explanation": "The scalar multiple of $A$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$3A = \\begin{pmatrix}3 & 6\\\\0 & 9\\end{pmatrix}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Matrix arithmetic and determinants",
    "subtopicId": "fm.y1.pure.matrices",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrices.q011",
    "tags": [
      "negative",
      "scalar-multiplication"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Find $-2 \\times \\begin{pmatrix}3 & 1\\\\2 & 4\\end{pmatrix}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Scalar multiplication rule",
          "workingLatex": "kA = \\begin{pmatrix}3 & 1\\\\2 & 4\\end{pmatrix} \\text{ with each entry multiplied by } -2",
          "explanation": "Multiply every entry of the matrix by the scalar.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "First row",
          "workingLatex": "-2 \\times 3 = -6,\\quad -2 \\times 1 = -2",
          "explanation": "Scale each element in row 1.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Second row",
          "workingLatex": "-2 \\times 2 = -4,\\quad -2 \\times 4 = -8",
          "explanation": "Scale each element in row 2.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Assemble result",
          "workingLatex": "\\begin{pmatrix}-6 & -2\\\\-4 & -8\\end{pmatrix}",
          "explanation": "Write the scaled matrix.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify",
          "workingLatex": "-2 \\cdot \\begin{pmatrix}3 & 1\\\\2 & 4\\end{pmatrix} = \\begin{pmatrix}-6 & -2\\\\-4 & -8\\end{pmatrix}",
          "explanation": "Check that every entry was multiplied.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\begin{pmatrix}-6 & -2\\\\-4 & -8\\end{pmatrix}",
          "explanation": "The scalar multiple of $A$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$-2A = \\begin{pmatrix}-6 & -2\\\\-4 & -8\\end{pmatrix}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Matrix arithmetic and determinants",
    "subtopicId": "fm.y1.pure.matrices",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrices.q012",
    "tags": [
      "zero-scalar",
      "scalar-multiplication"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Find $0 \\times \\begin{pmatrix}5 & 2\\\\1 & 3\\end{pmatrix}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Scalar multiplication rule",
          "workingLatex": "kA = \\begin{pmatrix}5 & 2\\\\1 & 3\\end{pmatrix} \\text{ with each entry multiplied by } 0",
          "explanation": "Multiply every entry of the matrix by the scalar.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "First row",
          "workingLatex": "0 \\times 5 = 0,\\quad 0 \\times 2 = 0",
          "explanation": "Scale each element in row 1.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Second row",
          "workingLatex": "0 \\times 1 = 0,\\quad 0 \\times 3 = 0",
          "explanation": "Scale each element in row 2.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Assemble result",
          "workingLatex": "\\begin{pmatrix}0 & 0\\\\0 & 0\\end{pmatrix}",
          "explanation": "Write the scaled matrix.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify",
          "workingLatex": "0 \\cdot \\begin{pmatrix}5 & 2\\\\1 & 3\\end{pmatrix} = \\begin{pmatrix}0 & 0\\\\0 & 0\\end{pmatrix}",
          "explanation": "Check that every entry was multiplied.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\begin{pmatrix}0 & 0\\\\0 & 0\\end{pmatrix}",
          "explanation": "The scalar multiple of $A$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$0A = \\begin{pmatrix}0 & 0\\\\0 & 0\\end{pmatrix}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Matrix arithmetic and determinants",
    "subtopicId": "fm.y1.pure.matrices",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrices.q013",
    "tags": [
      "fraction",
      "scalar-multiplication"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Find $\\dfrac{1}{2} \\times \\begin{pmatrix}4 & 6\\\\2 & 8\\end{pmatrix}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Scalar multiplication rule",
          "workingLatex": "kA = \\begin{pmatrix}4 & 6\\\\2 & 8\\end{pmatrix} \\text{ with each entry multiplied by } 0.5",
          "explanation": "Multiply every entry of the matrix by the scalar.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "First row",
          "workingLatex": "0.5 \\times 4 = 2,\\quad 0.5 \\times 6 = 3",
          "explanation": "Scale each element in row 1.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Second row",
          "workingLatex": "0.5 \\times 2 = 1,\\quad 0.5 \\times 8 = 4",
          "explanation": "Scale each element in row 2.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Assemble result",
          "workingLatex": "\\begin{pmatrix}2 & 3\\\\1 & 4\\end{pmatrix}",
          "explanation": "Write the scaled matrix.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify",
          "workingLatex": "0.5 \\cdot \\begin{pmatrix}4 & 6\\\\2 & 8\\end{pmatrix} = \\begin{pmatrix}2 & 3\\\\1 & 4\\end{pmatrix}",
          "explanation": "Check that every entry was multiplied.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\begin{pmatrix}2 & 3\\\\1 & 4\\end{pmatrix}",
          "explanation": "The scalar multiple of $A$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{1}{2}A = \\begin{pmatrix}2 & 3\\\\1 & 4\\end{pmatrix}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Matrix arithmetic and determinants",
    "subtopicId": "fm.y1.pure.matrices",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrices.q014",
    "tags": [
      "basic",
      "identity"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Given $A = \\begin{pmatrix}2 & 3\\\\1 & 4\\end{pmatrix}$, evaluate $I A$ where $I = \\begin{pmatrix}1 & 0\\\\0 & 1\\end{pmatrix}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identity matrix",
          "workingLatex": "I = \\begin{pmatrix}1 & 0\\\\0 & 1\\end{pmatrix}",
          "explanation": "The $2 \\times 2$ identity has 1s on the diagonal and 0s elsewhere.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Property",
          "workingLatex": "IA = A",
          "explanation": "Multiplying by the identity leaves a matrix unchanged.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Multiply row 1 of $I$ by columns of $A$",
          "workingLatex": "2,\\; 3",
          "explanation": "First row of $I$ picks out the first row of $A$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Multiply row 2 of $I$ by columns of $A$",
          "workingLatex": "1,\\; 4",
          "explanation": "Second row of $I$ picks out the second row of $A$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Result",
          "workingLatex": "\\begin{pmatrix}2 & 3\\\\1 & 4\\end{pmatrix} = \\begin{pmatrix}2 & 3\\\\1 & 4\\end{pmatrix}",
          "explanation": "The product equals the original matrix.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "IA = \\begin{pmatrix}2 & 3\\\\1 & 4\\end{pmatrix}",
          "explanation": "Identity multiplication confirmed.",
          "diagram": null
        }
      ],
      "finalAnswer": "$IA = \\begin{pmatrix}2 & 3\\\\1 & 4\\end{pmatrix}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Matrix arithmetic and determinants",
    "subtopicId": "fm.y1.pure.matrices",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrices.q015",
    "tags": [
      "basic",
      "zero-matrix"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Given $A = \\begin{pmatrix}3 & -1\\\\2 & 5\\end{pmatrix}$ and $O = \\begin{pmatrix}0 & 0\\\\0 & 0\\end{pmatrix}$, find $A + O$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Zero matrix",
          "workingLatex": "O = \\begin{pmatrix}0 & 0\\\\0 & 0\\end{pmatrix}",
          "explanation": "Every entry of the zero matrix is 0.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Addition rule",
          "workingLatex": "A + O",
          "explanation": "Add the zero matrix to $A$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Add entries",
          "workingLatex": "3 + 0 = 3,\\; -1 + 0 = -1",
          "explanation": "Adding 0 leaves each entry unchanged.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Second row",
          "workingLatex": "2 + 0 = 2,\\; 5 + 0 = 5",
          "explanation": "Same for row 2.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Result",
          "workingLatex": "\\begin{pmatrix}3 & -1\\\\2 & 5\\end{pmatrix} = \\begin{pmatrix}3 & -1\\\\2 & 5\\end{pmatrix}",
          "explanation": "The sum equals $A$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "A + O = \\begin{pmatrix}3 & -1\\\\2 & 5\\end{pmatrix}",
          "explanation": "The zero matrix is the additive identity.",
          "diagram": null
        }
      ],
      "finalAnswer": "$A + O = \\begin{pmatrix}3 & -1\\\\2 & 5\\end{pmatrix}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Matrix arithmetic and determinants",
    "subtopicId": "fm.y1.pure.matrices",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrices.q016",
    "tags": [
      "negative-entry",
      "identity"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Given $A = \\begin{pmatrix}-2 & 1\\\\0 & 3\\end{pmatrix}$, evaluate $I A$ where $I = \\begin{pmatrix}1 & 0\\\\0 & 1\\end{pmatrix}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identity matrix",
          "workingLatex": "I = \\begin{pmatrix}1 & 0\\\\0 & 1\\end{pmatrix}",
          "explanation": "The $2 \\times 2$ identity has 1s on the diagonal and 0s elsewhere.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Property",
          "workingLatex": "IA = A",
          "explanation": "Multiplying by the identity leaves a matrix unchanged.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Multiply row 1 of $I$ by columns of $A$",
          "workingLatex": "-2,\\; 1",
          "explanation": "First row of $I$ picks out the first row of $A$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Multiply row 2 of $I$ by columns of $A$",
          "workingLatex": "0,\\; 3",
          "explanation": "Second row of $I$ picks out the second row of $A$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Result",
          "workingLatex": "\\begin{pmatrix}-2 & 1\\\\0 & 3\\end{pmatrix} = \\begin{pmatrix}-2 & 1\\\\0 & 3\\end{pmatrix}",
          "explanation": "The product equals the original matrix.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "IA = \\begin{pmatrix}-2 & 1\\\\0 & 3\\end{pmatrix}",
          "explanation": "Identity multiplication confirmed.",
          "diagram": null
        }
      ],
      "finalAnswer": "$IA = \\begin{pmatrix}-2 & 1\\\\0 & 3\\end{pmatrix}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Matrix arithmetic and determinants",
    "subtopicId": "fm.y1.pure.matrices",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrices.q017",
    "tags": [
      "basic",
      "determinant-2x2"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Find $\\det A$ where $A = \\begin{pmatrix}3 & 1\\\\2 & 4\\end{pmatrix}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Formula for $2 \\times 2$",
          "workingLatex": "\\det\\begin{pmatrix}a & b\\\\c & d\\end{pmatrix} = ad - bc",
          "explanation": "Multiply the main diagonal and subtract the other diagonal.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify entries",
          "workingLatex": "a=3,\\; b=1,\\; c=2,\\; d=4",
          "explanation": "Read off each element from the matrix.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute $ad$",
          "workingLatex": "3 \\times 4 = 12",
          "explanation": "Product of top-left and bottom-right.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute $bc$",
          "workingLatex": "1 \\times 2 = 2",
          "explanation": "Product of top-right and bottom-left.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Subtract",
          "workingLatex": "12 - 2 = 10",
          "explanation": "Main diagonal minus the other diagonal.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\det(A) = 10",
          "explanation": "The determinant is a single number summarising the matrix.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\det A = 10$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Matrix arithmetic and determinants",
    "subtopicId": "fm.y1.pure.matrices",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrices.q018",
    "tags": [
      "basic",
      "determinant-2x2"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Find $\\det A$ where $A = \\begin{pmatrix}2 & 5\\\\1 & 3\\end{pmatrix}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Formula for $2 \\times 2$",
          "workingLatex": "\\det\\begin{pmatrix}a & b\\\\c & d\\end{pmatrix} = ad - bc",
          "explanation": "Multiply the main diagonal and subtract the other diagonal.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify entries",
          "workingLatex": "a=2,\\; b=5,\\; c=1,\\; d=3",
          "explanation": "Read off each element from the matrix.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute $ad$",
          "workingLatex": "2 \\times 3 = 6",
          "explanation": "Product of top-left and bottom-right.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute $bc$",
          "workingLatex": "5 \\times 1 = 5",
          "explanation": "Product of top-right and bottom-left.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Subtract",
          "workingLatex": "6 - 5 = 1",
          "explanation": "Main diagonal minus the other diagonal.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\det(A) = 1",
          "explanation": "The determinant is a single number summarising the matrix.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\det A = 1$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Matrix arithmetic and determinants",
    "subtopicId": "fm.y1.pure.matrices",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrices.q019",
    "tags": [
      "singular-preview",
      "determinant-2x2"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Find $\\det A$ where $A = \\begin{pmatrix}4 & 2\\\\6 & 3\\end{pmatrix}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Formula for $2 \\times 2$",
          "workingLatex": "\\det\\begin{pmatrix}a & b\\\\c & d\\end{pmatrix} = ad - bc",
          "explanation": "Multiply the main diagonal and subtract the other diagonal.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify entries",
          "workingLatex": "a=4,\\; b=2,\\; c=6,\\; d=3",
          "explanation": "Read off each element from the matrix.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute $ad$",
          "workingLatex": "4 \\times 3 = 12",
          "explanation": "Product of top-left and bottom-right.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute $bc$",
          "workingLatex": "2 \\times 6 = 12",
          "explanation": "Product of top-right and bottom-left.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Subtract",
          "workingLatex": "12 - 12 = 0",
          "explanation": "Main diagonal minus the other diagonal.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\det(A) = 0",
          "explanation": "A determinant of 0 means the matrix is singular (no inverse).",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\det A = 0$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Matrix arithmetic and determinants",
    "subtopicId": "fm.y1.pure.matrices",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrices.q020",
    "tags": [
      "negative",
      "determinant-2x2"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Find $\\det A$ where $A = \\begin{pmatrix}-1 & 2\\\\3 & 5\\end{pmatrix}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Formula for $2 \\times 2$",
          "workingLatex": "\\det\\begin{pmatrix}a & b\\\\c & d\\end{pmatrix} = ad - bc",
          "explanation": "Multiply the main diagonal and subtract the other diagonal.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify entries",
          "workingLatex": "a=-1,\\; b=2,\\; c=3,\\; d=5",
          "explanation": "Read off each element from the matrix.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute $ad$",
          "workingLatex": "-1 \\times 5 = -5",
          "explanation": "Product of top-left and bottom-right.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute $bc$",
          "workingLatex": "2 \\times 3 = 6",
          "explanation": "Product of top-right and bottom-left.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Subtract",
          "workingLatex": "-5 - 6 = -11",
          "explanation": "Main diagonal minus the other diagonal.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\det(A) = -11",
          "explanation": "The determinant is a single number summarising the matrix.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\det A = -11$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Matrix arithmetic and determinants",
    "subtopicId": "fm.y1.pure.matrices",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrices.q021",
    "tags": [
      "zero-entry",
      "determinant-2x2"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Find $\\det A$ where $A = \\begin{pmatrix}0 & 3\\\\2 & 1\\end{pmatrix}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Formula for $2 \\times 2$",
          "workingLatex": "\\det\\begin{pmatrix}a & b\\\\c & d\\end{pmatrix} = ad - bc",
          "explanation": "Multiply the main diagonal and subtract the other diagonal.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify entries",
          "workingLatex": "a=0,\\; b=3,\\; c=2,\\; d=1",
          "explanation": "Read off each element from the matrix.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute $ad$",
          "workingLatex": "0 \\times 1 = 0",
          "explanation": "Product of top-left and bottom-right.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute $bc$",
          "workingLatex": "3 \\times 2 = 6",
          "explanation": "Product of top-right and bottom-left.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Subtract",
          "workingLatex": "0 - 6 = -6",
          "explanation": "Main diagonal minus the other diagonal.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\det(A) = -6",
          "explanation": "The determinant is a single number summarising the matrix.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\det A = -6$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Matrix arithmetic and determinants",
    "subtopicId": "fm.y1.pure.matrices",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrices.q022",
    "tags": [
      "diagonal",
      "determinant-2x2"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Find $\\det A$ where $A = \\begin{pmatrix}5 & 0\\\\0 & 2\\end{pmatrix}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Formula for $2 \\times 2$",
          "workingLatex": "\\det\\begin{pmatrix}a & b\\\\c & d\\end{pmatrix} = ad - bc",
          "explanation": "Multiply the main diagonal and subtract the other diagonal.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify entries",
          "workingLatex": "a=5,\\; b=0,\\; c=0,\\; d=2",
          "explanation": "Read off each element from the matrix.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute $ad$",
          "workingLatex": "5 \\times 2 = 10",
          "explanation": "Product of top-left and bottom-right.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute $bc$",
          "workingLatex": "0 \\times 0 = 0",
          "explanation": "Product of top-right and bottom-left.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Subtract",
          "workingLatex": "10 - 0 = 10",
          "explanation": "Main diagonal minus the other diagonal.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\det(A) = 10",
          "explanation": "The determinant is a single number summarising the matrix.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\det A = 10$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Matrix arithmetic and determinants",
    "subtopicId": "fm.y1.pure.matrices",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrices.q023",
    "tags": [
      "identity-mult",
      "matrix-multiplication"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Given $A = \\begin{pmatrix}1 & 0\\\\0 & 1\\end{pmatrix}$ and $B = \\begin{pmatrix}3 & 2\\\\1 & 4\\end{pmatrix}$, find $AB$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Check orders",
          "workingLatex": "A\\text{ is }2\\times2,\\; B\\text{ is }2\\times2",
          "explanation": "The inner dimensions must match for multiplication.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Entry $(1,1)$",
          "workingLatex": "1\\cdot3 + 0\\cdot1 = 3",
          "explanation": "Row 1 of $A$ dotted with column 1 of $B$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Entry $(1,2)$",
          "workingLatex": "1\\cdot2 + 0\\cdot4 = 2",
          "explanation": "Row 1 of $A$ dotted with column 2 of $B$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Entry $(2,1)$",
          "workingLatex": "0\\cdot3 + 1\\cdot1 = 1",
          "explanation": "Row 2 of $A$ dotted with column 1 of $B$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Entry $(2,2)$",
          "workingLatex": "0\\cdot2 + 1\\cdot4 = 4",
          "explanation": "Row 2 of $A$ dotted with column 2 of $B$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Result",
          "workingLatex": "AB = \\begin{pmatrix}3 & 2\\\\1 & 4\\end{pmatrix}",
          "explanation": "Assemble all four products.",
          "diagram": null
        }
      ],
      "finalAnswer": "$AB = \\begin{pmatrix}3 & 2\\\\1 & 4\\end{pmatrix}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Matrix arithmetic and determinants",
    "subtopicId": "fm.y1.pure.matrices",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrices.q024",
    "tags": [
      "basic",
      "matrix-multiplication"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Given $A = \\begin{pmatrix}1 & 2\\\\0 & 1\\end{pmatrix}$ and $B = \\begin{pmatrix}3 & 4\\\\5 & 6\\end{pmatrix}$, find $AB$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Check orders",
          "workingLatex": "A\\text{ is }2\\times2,\\; B\\text{ is }2\\times2",
          "explanation": "The inner dimensions must match for multiplication.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Entry $(1,1)$",
          "workingLatex": "1\\cdot3 + 2\\cdot5 = 13",
          "explanation": "Row 1 of $A$ dotted with column 1 of $B$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Entry $(1,2)$",
          "workingLatex": "1\\cdot4 + 2\\cdot6 = 16",
          "explanation": "Row 1 of $A$ dotted with column 2 of $B$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Entry $(2,1)$",
          "workingLatex": "0\\cdot3 + 1\\cdot5 = 5",
          "explanation": "Row 2 of $A$ dotted with column 1 of $B$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Entry $(2,2)$",
          "workingLatex": "0\\cdot4 + 1\\cdot6 = 6",
          "explanation": "Row 2 of $A$ dotted with column 2 of $B$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Result",
          "workingLatex": "AB = \\begin{pmatrix}13 & 16\\\\5 & 6\\end{pmatrix}",
          "explanation": "Assemble all four products.",
          "diagram": null
        }
      ],
      "finalAnswer": "$AB = \\begin{pmatrix}13 & 16\\\\5 & 6\\end{pmatrix}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Matrix arithmetic and determinants",
    "subtopicId": "fm.y1.pure.matrices",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrices.q025",
    "tags": [
      "diagonal",
      "matrix-multiplication"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Given $A = \\begin{pmatrix}2 & 0\\\\0 & 3\\end{pmatrix}$ and $B = \\begin{pmatrix}1 & 1\\\\1 & 1\\end{pmatrix}$, find $AB$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Check orders",
          "workingLatex": "A\\text{ is }2\\times2,\\; B\\text{ is }2\\times2",
          "explanation": "The inner dimensions must match for multiplication.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Entry $(1,1)$",
          "workingLatex": "2\\cdot1 + 0\\cdot1 = 2",
          "explanation": "Row 1 of $A$ dotted with column 1 of $B$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Entry $(1,2)$",
          "workingLatex": "2\\cdot1 + 0\\cdot1 = 2",
          "explanation": "Row 1 of $A$ dotted with column 2 of $B$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Entry $(2,1)$",
          "workingLatex": "0\\cdot1 + 3\\cdot1 = 3",
          "explanation": "Row 2 of $A$ dotted with column 1 of $B$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Entry $(2,2)$",
          "workingLatex": "0\\cdot1 + 3\\cdot1 = 3",
          "explanation": "Row 2 of $A$ dotted with column 2 of $B$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Result",
          "workingLatex": "AB = \\begin{pmatrix}2 & 2\\\\3 & 3\\end{pmatrix}",
          "explanation": "Assemble all four products.",
          "diagram": null
        }
      ],
      "finalAnswer": "$AB = \\begin{pmatrix}2 & 2\\\\3 & 3\\end{pmatrix}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Matrix arithmetic and determinants",
    "subtopicId": "fm.y1.pure.matrices",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrices.q026",
    "tags": [
      "basic",
      "matrix-multiplication"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "questionText": "Given $A = \\begin{pmatrix}1 & 1\\\\0 & 1\\end{pmatrix}$ and $B = \\begin{pmatrix}2 & 3\\\\4 & 5\\end{pmatrix}$, find $AB$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Check orders",
          "workingLatex": "A\\text{ is }2\\times2,\\; B\\text{ is }2\\times2",
          "explanation": "The inner dimensions must match for multiplication.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Entry $(1,1)$",
          "workingLatex": "1\\cdot2 + 1\\cdot4 = 6",
          "explanation": "Row 1 of $A$ dotted with column 1 of $B$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Entry $(1,2)$",
          "workingLatex": "1\\cdot3 + 1\\cdot5 = 8",
          "explanation": "Row 1 of $A$ dotted with column 2 of $B$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Entry $(2,1)$",
          "workingLatex": "0\\cdot2 + 1\\cdot4 = 4",
          "explanation": "Row 2 of $A$ dotted with column 1 of $B$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Entry $(2,2)$",
          "workingLatex": "0\\cdot3 + 1\\cdot5 = 5",
          "explanation": "Row 2 of $A$ dotted with column 2 of $B$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Result",
          "workingLatex": "AB = \\begin{pmatrix}6 & 8\\\\4 & 5\\end{pmatrix}",
          "explanation": "Assemble all four products.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Matrix notation",
          "workingLatex": "A = (a_{ij})",
          "explanation": "A matrix is a rectangular array of numbers.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Same order rule",
          "workingLatex": "m \\times n",
          "explanation": "Addition and subtraction require matching dimensions.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Scalar rule",
          "workingLatex": "kA",
          "explanation": "Multiply every entry by the scalar $k$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$AB = \\begin{pmatrix}6 & 8\\\\4 & 5\\end{pmatrix}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Matrix arithmetic and determinants",
    "subtopicId": "fm.y1.pure.matrices",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrices.q027",
    "tags": [
      "basic",
      "matrix-multiplication"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "questionText": "Given $A = \\begin{pmatrix}2 & 1\\\\3 & 4\\end{pmatrix}$ and $B = \\begin{pmatrix}1 & 0\\\\2 & 1\\end{pmatrix}$, find $AB$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Check orders",
          "workingLatex": "A\\text{ is }2\\times2,\\; B\\text{ is }2\\times2",
          "explanation": "The inner dimensions must match for multiplication.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Entry $(1,1)$",
          "workingLatex": "2\\cdot1 + 1\\cdot2 = 4",
          "explanation": "Row 1 of $A$ dotted with column 1 of $B$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Entry $(1,2)$",
          "workingLatex": "2\\cdot0 + 1\\cdot1 = 1",
          "explanation": "Row 1 of $A$ dotted with column 2 of $B$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Entry $(2,1)$",
          "workingLatex": "3\\cdot1 + 4\\cdot2 = 11",
          "explanation": "Row 2 of $A$ dotted with column 1 of $B$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Entry $(2,2)$",
          "workingLatex": "3\\cdot0 + 4\\cdot1 = 4",
          "explanation": "Row 2 of $A$ dotted with column 2 of $B$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Result",
          "workingLatex": "AB = \\begin{pmatrix}4 & 1\\\\11 & 4\\end{pmatrix}",
          "explanation": "Assemble all four products.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Matrix notation",
          "workingLatex": "A = (a_{ij})",
          "explanation": "A matrix is a rectangular array of numbers.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Same order rule",
          "workingLatex": "m \\times n",
          "explanation": "Addition and subtraction require matching dimensions.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Scalar rule",
          "workingLatex": "kA",
          "explanation": "Multiply every entry by the scalar $k$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$AB = \\begin{pmatrix}4 & 1\\\\11 & 4\\end{pmatrix}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Matrix arithmetic and determinants",
    "subtopicId": "fm.y1.pure.matrices",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrices.q028",
    "tags": [
      "basic",
      "matrix-multiplication"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "questionText": "Given $A = \\begin{pmatrix}1 & 2\\\\3 & 2\\end{pmatrix}$ and $B = \\begin{pmatrix}2 & 1\\\\1 & 3\\end{pmatrix}$, find $AB$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Check orders",
          "workingLatex": "A\\text{ is }2\\times2,\\; B\\text{ is }2\\times2",
          "explanation": "The inner dimensions must match for multiplication.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Entry $(1,1)$",
          "workingLatex": "1\\cdot2 + 2\\cdot1 = 4",
          "explanation": "Row 1 of $A$ dotted with column 1 of $B$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Entry $(1,2)$",
          "workingLatex": "1\\cdot1 + 2\\cdot3 = 7",
          "explanation": "Row 1 of $A$ dotted with column 2 of $B$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Entry $(2,1)$",
          "workingLatex": "3\\cdot2 + 2\\cdot1 = 8",
          "explanation": "Row 2 of $A$ dotted with column 1 of $B$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Entry $(2,2)$",
          "workingLatex": "3\\cdot1 + 2\\cdot3 = 9",
          "explanation": "Row 2 of $A$ dotted with column 2 of $B$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Result",
          "workingLatex": "AB = \\begin{pmatrix}4 & 7\\\\8 & 9\\end{pmatrix}",
          "explanation": "Assemble all four products.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Matrix notation",
          "workingLatex": "A = (a_{ij})",
          "explanation": "A matrix is a rectangular array of numbers.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Same order rule",
          "workingLatex": "m \\times n",
          "explanation": "Addition and subtraction require matching dimensions.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Scalar rule",
          "workingLatex": "kA",
          "explanation": "Multiply every entry by the scalar $k$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$AB = \\begin{pmatrix}4 & 7\\\\8 & 9\\end{pmatrix}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Matrix arithmetic and determinants",
    "subtopicId": "fm.y1.pure.matrices",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrices.q029",
    "tags": [
      "swap",
      "matrix-multiplication"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "questionText": "Given $A = \\begin{pmatrix}0 & 1\\\\1 & 0\\end{pmatrix}$ and $B = \\begin{pmatrix}3 & 4\\\\5 & 6\\end{pmatrix}$, find $AB$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Check orders",
          "workingLatex": "A\\text{ is }2\\times2,\\; B\\text{ is }2\\times2",
          "explanation": "The inner dimensions must match for multiplication.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Entry $(1,1)$",
          "workingLatex": "0\\cdot3 + 1\\cdot5 = 5",
          "explanation": "Row 1 of $A$ dotted with column 1 of $B$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Entry $(1,2)$",
          "workingLatex": "0\\cdot4 + 1\\cdot6 = 6",
          "explanation": "Row 1 of $A$ dotted with column 2 of $B$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Entry $(2,1)$",
          "workingLatex": "1\\cdot3 + 0\\cdot5 = 3",
          "explanation": "Row 2 of $A$ dotted with column 1 of $B$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Entry $(2,2)$",
          "workingLatex": "1\\cdot4 + 0\\cdot6 = 4",
          "explanation": "Row 2 of $A$ dotted with column 2 of $B$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Result",
          "workingLatex": "AB = \\begin{pmatrix}5 & 6\\\\3 & 4\\end{pmatrix}",
          "explanation": "Assemble all four products.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Matrix notation",
          "workingLatex": "A = (a_{ij})",
          "explanation": "A matrix is a rectangular array of numbers.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Same order rule",
          "workingLatex": "m \\times n",
          "explanation": "Addition and subtraction require matching dimensions.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Scalar rule",
          "workingLatex": "kA",
          "explanation": "Multiply every entry by the scalar $k$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$AB = \\begin{pmatrix}5 & 6\\\\3 & 4\\end{pmatrix}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Matrix arithmetic and determinants",
    "subtopicId": "fm.y1.pure.matrices",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrices.q030",
    "tags": [
      "basic",
      "matrix-multiplication"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "questionText": "Given $A = \\begin{pmatrix}2 & 3\\\\1 & 4\\end{pmatrix}$ and $B = \\begin{pmatrix}1 & 2\\\\0 & 1\\end{pmatrix}$, find $AB$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Check orders",
          "workingLatex": "A\\text{ is }2\\times2,\\; B\\text{ is }2\\times2",
          "explanation": "The inner dimensions must match for multiplication.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Entry $(1,1)$",
          "workingLatex": "2\\cdot1 + 3\\cdot0 = 2",
          "explanation": "Row 1 of $A$ dotted with column 1 of $B$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Entry $(1,2)$",
          "workingLatex": "2\\cdot2 + 3\\cdot1 = 7",
          "explanation": "Row 1 of $A$ dotted with column 2 of $B$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Entry $(2,1)$",
          "workingLatex": "1\\cdot1 + 4\\cdot0 = 1",
          "explanation": "Row 2 of $A$ dotted with column 1 of $B$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Entry $(2,2)$",
          "workingLatex": "1\\cdot2 + 4\\cdot1 = 6",
          "explanation": "Row 2 of $A$ dotted with column 2 of $B$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Result",
          "workingLatex": "AB = \\begin{pmatrix}2 & 7\\\\1 & 6\\end{pmatrix}",
          "explanation": "Assemble all four products.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Matrix notation",
          "workingLatex": "A = (a_{ij})",
          "explanation": "A matrix is a rectangular array of numbers.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Same order rule",
          "workingLatex": "m \\times n",
          "explanation": "Addition and subtraction require matching dimensions.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Scalar rule",
          "workingLatex": "kA",
          "explanation": "Multiply every entry by the scalar $k$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$AB = \\begin{pmatrix}2 & 7\\\\1 & 6\\end{pmatrix}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Matrix arithmetic and determinants",
    "subtopicId": "fm.y1.pure.matrices",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrices.q031",
    "tags": [
      "mixed-signs",
      "matrix-multiplication"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "questionText": "Given $A = \\begin{pmatrix}1 & -1\\\\2 & 3\\end{pmatrix}$ and $B = \\begin{pmatrix}4 & 1\\\\0 & 2\\end{pmatrix}$, find $AB$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Check orders",
          "workingLatex": "A\\text{ is }2\\times2,\\; B\\text{ is }2\\times2",
          "explanation": "The inner dimensions must match for multiplication.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Entry $(1,1)$",
          "workingLatex": "1\\cdot4 + -1\\cdot0 = 4",
          "explanation": "Row 1 of $A$ dotted with column 1 of $B$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Entry $(1,2)$",
          "workingLatex": "1\\cdot1 + -1\\cdot2 = -1",
          "explanation": "Row 1 of $A$ dotted with column 2 of $B$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Entry $(2,1)$",
          "workingLatex": "2\\cdot4 + 3\\cdot0 = 8",
          "explanation": "Row 2 of $A$ dotted with column 1 of $B$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Entry $(2,2)$",
          "workingLatex": "2\\cdot1 + 3\\cdot2 = 8",
          "explanation": "Row 2 of $A$ dotted with column 2 of $B$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Result",
          "workingLatex": "AB = \\begin{pmatrix}4 & -1\\\\8 & 8\\end{pmatrix}",
          "explanation": "Assemble all four products.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Matrix notation",
          "workingLatex": "A = (a_{ij})",
          "explanation": "A matrix is a rectangular array of numbers.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Same order rule",
          "workingLatex": "m \\times n",
          "explanation": "Addition and subtraction require matching dimensions.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Scalar rule",
          "workingLatex": "kA",
          "explanation": "Multiply every entry by the scalar $k$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$AB = \\begin{pmatrix}4 & -1\\\\8 & 8\\end{pmatrix}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Matrix arithmetic and determinants",
    "subtopicId": "fm.y1.pure.matrices",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrices.q032",
    "tags": [
      "basic",
      "matrix-multiplication"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "questionText": "Given $A = \\begin{pmatrix}3 & 1\\\\2 & 2\\end{pmatrix}$ and $B = \\begin{pmatrix}1 & 2\\\\3 & 1\\end{pmatrix}$, find $AB$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Check orders",
          "workingLatex": "A\\text{ is }2\\times2,\\; B\\text{ is }2\\times2",
          "explanation": "The inner dimensions must match for multiplication.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Entry $(1,1)$",
          "workingLatex": "3\\cdot1 + 1\\cdot3 = 6",
          "explanation": "Row 1 of $A$ dotted with column 1 of $B$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Entry $(1,2)$",
          "workingLatex": "3\\cdot2 + 1\\cdot1 = 7",
          "explanation": "Row 1 of $A$ dotted with column 2 of $B$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Entry $(2,1)$",
          "workingLatex": "2\\cdot1 + 2\\cdot3 = 8",
          "explanation": "Row 2 of $A$ dotted with column 1 of $B$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Entry $(2,2)$",
          "workingLatex": "2\\cdot2 + 2\\cdot1 = 6",
          "explanation": "Row 2 of $A$ dotted with column 2 of $B$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Result",
          "workingLatex": "AB = \\begin{pmatrix}6 & 7\\\\8 & 6\\end{pmatrix}",
          "explanation": "Assemble all four products.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Matrix notation",
          "workingLatex": "A = (a_{ij})",
          "explanation": "A matrix is a rectangular array of numbers.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Same order rule",
          "workingLatex": "m \\times n",
          "explanation": "Addition and subtraction require matching dimensions.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Scalar rule",
          "workingLatex": "kA",
          "explanation": "Multiply every entry by the scalar $k$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$AB = \\begin{pmatrix}6 & 7\\\\8 & 6\\end{pmatrix}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Matrix arithmetic and determinants",
    "subtopicId": "fm.y1.pure.matrices",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrices.q033",
    "tags": [
      "classic",
      "non-commutativity"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "questionText": "Given $A = \\begin{pmatrix}1 & 2\\\\0 & 1\\end{pmatrix}$ and $B = \\begin{pmatrix}3 & 1\\\\2 & 4\\end{pmatrix}$, calculate $AB$ and $BA$. Show that $AB \\neq BA$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Compute $AB$",
          "workingLatex": "AB = \\begin{pmatrix}7 & 9\\\\2 & 4\\end{pmatrix}",
          "explanation": "Multiply $A$ on the left of $B$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Entry-by-entry for $AB$",
          "workingLatex": "\\text{Use row} \\times \\text{column products}",
          "explanation": "Each entry is a dot product of a row of $A$ with a column of $B$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute $BA$",
          "workingLatex": "BA = \\begin{pmatrix}3 & 7\\\\2 & 8\\end{pmatrix}",
          "explanation": "Now multiply $B$ on the left of $A$ — the order is reversed.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compare results",
          "workingLatex": "AB \\neq BA",
          "explanation": "Matrix multiplication is not commutative in general.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Show difference",
          "workingLatex": "\\begin{pmatrix}7 & 9\\\\2 & 4\\end{pmatrix} \\neq \\begin{pmatrix}3 & 7\\\\2 & 8\\end{pmatrix}",
          "explanation": "The two products differ — order matters.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclusion",
          "workingLatex": "AB \\neq BA",
          "explanation": "Always check order when multiplying matrices.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Key fact",
          "workingLatex": "\\text{In general } AB \\neq BA",
          "explanation": "Unlike ordinary numbers, matrix multiplication depends on order.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Example values",
          "workingLatex": "AB = \\begin{pmatrix}7 & 9\\\\2 & 4\\end{pmatrix},\\quad BA = \\begin{pmatrix}3 & 7\\\\2 & 8\\end{pmatrix}",
          "explanation": "Concrete numerical comparison.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "AB = \\begin{pmatrix}7 & 9\\\\2 & 4\\end{pmatrix},\\; BA = \\begin{pmatrix}3 & 7\\\\2 & 8\\end{pmatrix}",
          "explanation": "State both products clearly.",
          "diagram": null
        }
      ],
      "finalAnswer": "$AB = \\begin{pmatrix}7 & 9\\\\2 & 4\\end{pmatrix}$ and $BA = \\begin{pmatrix}3 & 7\\\\2 & 8\\end{pmatrix}$, so $AB \\neq BA$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Matrix arithmetic and determinants",
    "subtopicId": "fm.y1.pure.matrices",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrices.q034",
    "tags": [
      "diagonal-left",
      "non-commutativity"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "questionText": "Given $A = \\begin{pmatrix}2 & 0\\\\0 & 1\\end{pmatrix}$ and $B = \\begin{pmatrix}1 & 3\\\\0 & 2\\end{pmatrix}$, calculate $AB$ and $BA$. Show that $AB \\neq BA$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Compute $AB$",
          "workingLatex": "AB = \\begin{pmatrix}2 & 6\\\\0 & 2\\end{pmatrix}",
          "explanation": "Multiply $A$ on the left of $B$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Entry-by-entry for $AB$",
          "workingLatex": "\\text{Use row} \\times \\text{column products}",
          "explanation": "Each entry is a dot product of a row of $A$ with a column of $B$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute $BA$",
          "workingLatex": "BA = \\begin{pmatrix}2 & 3\\\\0 & 2\\end{pmatrix}",
          "explanation": "Now multiply $B$ on the left of $A$ — the order is reversed.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compare results",
          "workingLatex": "AB \\neq BA",
          "explanation": "Matrix multiplication is not commutative in general.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Show difference",
          "workingLatex": "\\begin{pmatrix}2 & 6\\\\0 & 2\\end{pmatrix} \\neq \\begin{pmatrix}2 & 3\\\\0 & 2\\end{pmatrix}",
          "explanation": "The two products differ — order matters.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclusion",
          "workingLatex": "AB \\neq BA",
          "explanation": "Always check order when multiplying matrices.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Key fact",
          "workingLatex": "\\text{In general } AB \\neq BA",
          "explanation": "Unlike ordinary numbers, matrix multiplication depends on order.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Example values",
          "workingLatex": "AB = \\begin{pmatrix}2 & 6\\\\0 & 2\\end{pmatrix},\\quad BA = \\begin{pmatrix}2 & 3\\\\0 & 2\\end{pmatrix}",
          "explanation": "Concrete numerical comparison.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "AB = \\begin{pmatrix}2 & 6\\\\0 & 2\\end{pmatrix},\\; BA = \\begin{pmatrix}2 & 3\\\\0 & 2\\end{pmatrix}",
          "explanation": "State both products clearly.",
          "diagram": null
        }
      ],
      "finalAnswer": "$AB = \\begin{pmatrix}2 & 6\\\\0 & 2\\end{pmatrix}$ and $BA = \\begin{pmatrix}2 & 3\\\\0 & 2\\end{pmatrix}$, so $AB \\neq BA$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Matrix arithmetic and determinants",
    "subtopicId": "fm.y1.pure.matrices",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrices.q035",
    "tags": [
      "shear",
      "non-commutativity"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "questionText": "Given $A = \\begin{pmatrix}1 & 0\\\\2 & 1\\end{pmatrix}$ and $B = \\begin{pmatrix}1 & 1\\\\0 & 1\\end{pmatrix}$, calculate $AB$ and $BA$. Show that $AB \\neq BA$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Compute $AB$",
          "workingLatex": "AB = \\begin{pmatrix}1 & 1\\\\2 & 3\\end{pmatrix}",
          "explanation": "Multiply $A$ on the left of $B$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Entry-by-entry for $AB$",
          "workingLatex": "\\text{Use row} \\times \\text{column products}",
          "explanation": "Each entry is a dot product of a row of $A$ with a column of $B$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute $BA$",
          "workingLatex": "BA = \\begin{pmatrix}3 & 1\\\\2 & 1\\end{pmatrix}",
          "explanation": "Now multiply $B$ on the left of $A$ — the order is reversed.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compare results",
          "workingLatex": "AB \\neq BA",
          "explanation": "Matrix multiplication is not commutative in general.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Show difference",
          "workingLatex": "\\begin{pmatrix}1 & 1\\\\2 & 3\\end{pmatrix} \\neq \\begin{pmatrix}3 & 1\\\\2 & 1\\end{pmatrix}",
          "explanation": "The two products differ — order matters.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclusion",
          "workingLatex": "AB \\neq BA",
          "explanation": "Always check order when multiplying matrices.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Key fact",
          "workingLatex": "\\text{In general } AB \\neq BA",
          "explanation": "Unlike ordinary numbers, matrix multiplication depends on order.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Example values",
          "workingLatex": "AB = \\begin{pmatrix}1 & 1\\\\2 & 3\\end{pmatrix},\\quad BA = \\begin{pmatrix}3 & 1\\\\2 & 1\\end{pmatrix}",
          "explanation": "Concrete numerical comparison.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "AB = \\begin{pmatrix}1 & 1\\\\2 & 3\\end{pmatrix},\\; BA = \\begin{pmatrix}3 & 1\\\\2 & 1\\end{pmatrix}",
          "explanation": "State both products clearly.",
          "diagram": null
        }
      ],
      "finalAnswer": "$AB = \\begin{pmatrix}1 & 1\\\\2 & 3\\end{pmatrix}$ and $BA = \\begin{pmatrix}3 & 1\\\\2 & 1\\end{pmatrix}$, so $AB \\neq BA$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Matrix arithmetic and determinants",
    "subtopicId": "fm.y1.pure.matrices",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrices.q036",
    "tags": [
      "swap-combo",
      "non-commutativity"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "questionText": "Given $A = \\begin{pmatrix}1 & 2\\\\3 & 4\\end{pmatrix}$ and $B = \\begin{pmatrix}0 & 1\\\\1 & 0\\end{pmatrix}$, calculate $AB$ and $BA$. Show that $AB \\neq BA$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Compute $AB$",
          "workingLatex": "AB = \\begin{pmatrix}2 & 1\\\\4 & 3\\end{pmatrix}",
          "explanation": "Multiply $A$ on the left of $B$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Entry-by-entry for $AB$",
          "workingLatex": "\\text{Use row} \\times \\text{column products}",
          "explanation": "Each entry is a dot product of a row of $A$ with a column of $B$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute $BA$",
          "workingLatex": "BA = \\begin{pmatrix}3 & 4\\\\1 & 2\\end{pmatrix}",
          "explanation": "Now multiply $B$ on the left of $A$ — the order is reversed.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compare results",
          "workingLatex": "AB \\neq BA",
          "explanation": "Matrix multiplication is not commutative in general.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Show difference",
          "workingLatex": "\\begin{pmatrix}2 & 1\\\\4 & 3\\end{pmatrix} \\neq \\begin{pmatrix}3 & 4\\\\1 & 2\\end{pmatrix}",
          "explanation": "The two products differ — order matters.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclusion",
          "workingLatex": "AB \\neq BA",
          "explanation": "Always check order when multiplying matrices.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Key fact",
          "workingLatex": "\\text{In general } AB \\neq BA",
          "explanation": "Unlike ordinary numbers, matrix multiplication depends on order.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Example values",
          "workingLatex": "AB = \\begin{pmatrix}2 & 1\\\\4 & 3\\end{pmatrix},\\quad BA = \\begin{pmatrix}3 & 4\\\\1 & 2\\end{pmatrix}",
          "explanation": "Concrete numerical comparison.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "AB = \\begin{pmatrix}2 & 1\\\\4 & 3\\end{pmatrix},\\; BA = \\begin{pmatrix}3 & 4\\\\1 & 2\\end{pmatrix}",
          "explanation": "State both products clearly.",
          "diagram": null
        }
      ],
      "finalAnswer": "$AB = \\begin{pmatrix}2 & 1\\\\4 & 3\\end{pmatrix}$ and $BA = \\begin{pmatrix}3 & 4\\\\1 & 2\\end{pmatrix}$, so $AB \\neq BA$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Matrix arithmetic and determinants",
    "subtopicId": "fm.y1.pure.matrices",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrices.q037",
    "tags": [
      "symmetric-ish",
      "non-commutativity"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "questionText": "Given $A = \\begin{pmatrix}2 & 1\\\\1 & 3\\end{pmatrix}$ and $B = \\begin{pmatrix}1 & 2\\\\3 & 1\\end{pmatrix}$, calculate $AB$ and $BA$. Show that $AB \\neq BA$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Compute $AB$",
          "workingLatex": "AB = \\begin{pmatrix}5 & 5\\\\10 & 5\\end{pmatrix}",
          "explanation": "Multiply $A$ on the left of $B$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Entry-by-entry for $AB$",
          "workingLatex": "\\text{Use row} \\times \\text{column products}",
          "explanation": "Each entry is a dot product of a row of $A$ with a column of $B$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute $BA$",
          "workingLatex": "BA = \\begin{pmatrix}4 & 7\\\\7 & 6\\end{pmatrix}",
          "explanation": "Now multiply $B$ on the left of $A$ — the order is reversed.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compare results",
          "workingLatex": "AB \\neq BA",
          "explanation": "Matrix multiplication is not commutative in general.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Show difference",
          "workingLatex": "\\begin{pmatrix}5 & 5\\\\10 & 5\\end{pmatrix} \\neq \\begin{pmatrix}4 & 7\\\\7 & 6\\end{pmatrix}",
          "explanation": "The two products differ — order matters.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclusion",
          "workingLatex": "AB \\neq BA",
          "explanation": "Always check order when multiplying matrices.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Key fact",
          "workingLatex": "\\text{In general } AB \\neq BA",
          "explanation": "Unlike ordinary numbers, matrix multiplication depends on order.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Example values",
          "workingLatex": "AB = \\begin{pmatrix}5 & 5\\\\10 & 5\\end{pmatrix},\\quad BA = \\begin{pmatrix}4 & 7\\\\7 & 6\\end{pmatrix}",
          "explanation": "Concrete numerical comparison.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "AB = \\begin{pmatrix}5 & 5\\\\10 & 5\\end{pmatrix},\\; BA = \\begin{pmatrix}4 & 7\\\\7 & 6\\end{pmatrix}",
          "explanation": "State both products clearly.",
          "diagram": null
        }
      ],
      "finalAnswer": "$AB = \\begin{pmatrix}5 & 5\\\\10 & 5\\end{pmatrix}$ and $BA = \\begin{pmatrix}4 & 7\\\\7 & 6\\end{pmatrix}$, so $AB \\neq BA$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Matrix arithmetic and determinants",
    "subtopicId": "fm.y1.pure.matrices",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrices.q038",
    "tags": [
      "basic",
      "inverse-2x2"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "questionText": "Find $A^{-1}$ where $A = \\begin{pmatrix}3 & 1\\\\2 & 4\\end{pmatrix}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Check determinant",
          "workingLatex": "\\det A = 10",
          "explanation": "An inverse exists only when the determinant is non-zero.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Formula",
          "workingLatex": "A^{-1} = \\dfrac{1}{\\det A}\\begin{pmatrix}d & -b\\\\-c & a\\end{pmatrix}",
          "explanation": "Swap diagonal entries, negate off-diagonals, divide by determinant.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Adjugate matrix",
          "workingLatex": "\\begin{pmatrix}4 & -1\\\\-2 & 3\\end{pmatrix}",
          "explanation": "Form the matrix of cofactors (transposed for $2\\times2$).",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Divide by $\\det A$",
          "workingLatex": "\\dfrac{1}{10} \\times \\text{adjugate}",
          "explanation": "Scale every entry by $1/\\det A$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify entries",
          "workingLatex": "\\begin{pmatrix}0.4 & -0.1\\\\-0.2 & 0.3\\end{pmatrix}",
          "explanation": "Write each element as a simplified fraction or integer.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify $AA^{-1}$",
          "workingLatex": "A \\cdot A^{-1} = I",
          "explanation": "Multiply $A$ by its inverse to confirm you get the identity.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check product",
          "workingLatex": "\\begin{pmatrix}1 & 0\\\\0 & 1\\end{pmatrix}",
          "explanation": "The product should be the identity matrix.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "A^{-1} = \\begin{pmatrix}0.4 & -0.1\\\\-0.2 & 0.3\\end{pmatrix}",
          "explanation": "The inverse matrix.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Confirm",
          "workingLatex": "\\det A = 10 \\neq 0",
          "explanation": "Non-zero determinant guarantees a unique inverse.",
          "diagram": null
        }
      ],
      "finalAnswer": "$A^{-1} = \\begin{pmatrix}0.4 & -0.1\\\\-0.2 & 0.3\\end{pmatrix}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Matrix arithmetic and determinants",
    "subtopicId": "fm.y1.pure.matrices",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrices.q039",
    "tags": [
      "basic",
      "inverse-2x2"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "questionText": "Find $A^{-1}$ where $A = \\begin{pmatrix}2 & 1\\\\5 & 3\\end{pmatrix}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Check determinant",
          "workingLatex": "\\det A = 1",
          "explanation": "An inverse exists only when the determinant is non-zero.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Formula",
          "workingLatex": "A^{-1} = \\dfrac{1}{\\det A}\\begin{pmatrix}d & -b\\\\-c & a\\end{pmatrix}",
          "explanation": "Swap diagonal entries, negate off-diagonals, divide by determinant.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Adjugate matrix",
          "workingLatex": "\\begin{pmatrix}3 & -1\\\\-5 & 2\\end{pmatrix}",
          "explanation": "Form the matrix of cofactors (transposed for $2\\times2$).",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Divide by $\\det A$",
          "workingLatex": "\\dfrac{1}{1} \\times \\text{adjugate}",
          "explanation": "Scale every entry by $1/\\det A$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify entries",
          "workingLatex": "\\begin{pmatrix}3 & -1\\\\-5 & 2\\end{pmatrix}",
          "explanation": "Write each element as a simplified fraction or integer.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify $AA^{-1}$",
          "workingLatex": "A \\cdot A^{-1} = I",
          "explanation": "Multiply $A$ by its inverse to confirm you get the identity.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check product",
          "workingLatex": "\\begin{pmatrix}1 & 0\\\\0 & 1\\end{pmatrix}",
          "explanation": "The product should be the identity matrix.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "A^{-1} = \\begin{pmatrix}3 & -1\\\\-5 & 2\\end{pmatrix}",
          "explanation": "The inverse matrix.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Confirm",
          "workingLatex": "\\det A = 1 \\neq 0",
          "explanation": "Non-zero determinant guarantees a unique inverse.",
          "diagram": null
        }
      ],
      "finalAnswer": "$A^{-1} = \\begin{pmatrix}3 & -1\\\\-5 & 2\\end{pmatrix}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Matrix arithmetic and determinants",
    "subtopicId": "fm.y1.pure.matrices",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrices.q040",
    "tags": [
      "det-2",
      "inverse-2x2"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "questionText": "Find $A^{-1}$ where $A = \\begin{pmatrix}4 & 2\\\\3 & 2\\end{pmatrix}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Check determinant",
          "workingLatex": "\\det A = 2",
          "explanation": "An inverse exists only when the determinant is non-zero.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Formula",
          "workingLatex": "A^{-1} = \\dfrac{1}{\\det A}\\begin{pmatrix}d & -b\\\\-c & a\\end{pmatrix}",
          "explanation": "Swap diagonal entries, negate off-diagonals, divide by determinant.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Adjugate matrix",
          "workingLatex": "\\begin{pmatrix}2 & -2\\\\-3 & 4\\end{pmatrix}",
          "explanation": "Form the matrix of cofactors (transposed for $2\\times2$).",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Divide by $\\det A$",
          "workingLatex": "\\dfrac{1}{2} \\times \\text{adjugate}",
          "explanation": "Scale every entry by $1/\\det A$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify entries",
          "workingLatex": "\\begin{pmatrix}1 & -1\\\\-1.5 & 2\\end{pmatrix}",
          "explanation": "Write each element as a simplified fraction or integer.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify $AA^{-1}$",
          "workingLatex": "A \\cdot A^{-1} = I",
          "explanation": "Multiply $A$ by its inverse to confirm you get the identity.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check product",
          "workingLatex": "\\begin{pmatrix}1 & 0\\\\0 & 1\\end{pmatrix}",
          "explanation": "The product should be the identity matrix.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "A^{-1} = \\begin{pmatrix}1 & -1\\\\-1.5 & 2\\end{pmatrix}",
          "explanation": "The inverse matrix.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Confirm",
          "workingLatex": "\\det A = 2 \\neq 0",
          "explanation": "Non-zero determinant guarantees a unique inverse.",
          "diagram": null
        }
      ],
      "finalAnswer": "$A^{-1} = \\begin{pmatrix}1 & -1\\\\-1.5 & 2\\end{pmatrix}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Matrix arithmetic and determinants",
    "subtopicId": "fm.y1.pure.matrices",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrices.q041",
    "tags": [
      "det-1",
      "inverse-2x2"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "questionText": "Find $A^{-1}$ where $A = \\begin{pmatrix}1 & 2\\\\3 & 7\\end{pmatrix}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Check determinant",
          "workingLatex": "\\det A = 1",
          "explanation": "An inverse exists only when the determinant is non-zero.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Formula",
          "workingLatex": "A^{-1} = \\dfrac{1}{\\det A}\\begin{pmatrix}d & -b\\\\-c & a\\end{pmatrix}",
          "explanation": "Swap diagonal entries, negate off-diagonals, divide by determinant.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Adjugate matrix",
          "workingLatex": "\\begin{pmatrix}7 & -2\\\\-3 & 1\\end{pmatrix}",
          "explanation": "Form the matrix of cofactors (transposed for $2\\times2$).",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Divide by $\\det A$",
          "workingLatex": "\\dfrac{1}{1} \\times \\text{adjugate}",
          "explanation": "Scale every entry by $1/\\det A$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify entries",
          "workingLatex": "\\begin{pmatrix}7 & -2\\\\-3 & 1\\end{pmatrix}",
          "explanation": "Write each element as a simplified fraction or integer.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify $AA^{-1}$",
          "workingLatex": "A \\cdot A^{-1} = I",
          "explanation": "Multiply $A$ by its inverse to confirm you get the identity.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check product",
          "workingLatex": "\\begin{pmatrix}1 & 0\\\\0 & 1\\end{pmatrix}",
          "explanation": "The product should be the identity matrix.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "A^{-1} = \\begin{pmatrix}7 & -2\\\\-3 & 1\\end{pmatrix}",
          "explanation": "The inverse matrix.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Confirm",
          "workingLatex": "\\det A = 1 \\neq 0",
          "explanation": "Non-zero determinant guarantees a unique inverse.",
          "diagram": null
        }
      ],
      "finalAnswer": "$A^{-1} = \\begin{pmatrix}7 & -2\\\\-3 & 1\\end{pmatrix}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Matrix arithmetic and determinants",
    "subtopicId": "fm.y1.pure.matrices",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrices.q042",
    "tags": [
      "negative-entry",
      "inverse-2x2"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "questionText": "Find $A^{-1}$ where $A = \\begin{pmatrix}2 & -1\\\\1 & 3\\end{pmatrix}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Check determinant",
          "workingLatex": "\\det A = 7",
          "explanation": "An inverse exists only when the determinant is non-zero.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Formula",
          "workingLatex": "A^{-1} = \\dfrac{1}{\\det A}\\begin{pmatrix}d & -b\\\\-c & a\\end{pmatrix}",
          "explanation": "Swap diagonal entries, negate off-diagonals, divide by determinant.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Adjugate matrix",
          "workingLatex": "\\begin{pmatrix}3 & 1\\\\-1 & 2\\end{pmatrix}",
          "explanation": "Form the matrix of cofactors (transposed for $2\\times2$).",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Divide by $\\det A$",
          "workingLatex": "\\dfrac{1}{7} \\times \\text{adjugate}",
          "explanation": "Scale every entry by $1/\\det A$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify entries",
          "workingLatex": "\\begin{pmatrix}0.4286 & 0.1429\\\\-0.1429 & 0.2857\\end{pmatrix}",
          "explanation": "Write each element as a simplified fraction or integer.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify $AA^{-1}$",
          "workingLatex": "A \\cdot A^{-1} = I",
          "explanation": "Multiply $A$ by its inverse to confirm you get the identity.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check product",
          "workingLatex": "\\begin{pmatrix}1 & 0\\\\0 & 1\\end{pmatrix}",
          "explanation": "The product should be the identity matrix.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "A^{-1} = \\begin{pmatrix}0.4286 & 0.1429\\\\-0.1429 & 0.2857\\end{pmatrix}",
          "explanation": "The inverse matrix.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Confirm",
          "workingLatex": "\\det A = 7 \\neq 0",
          "explanation": "Non-zero determinant guarantees a unique inverse.",
          "diagram": null
        }
      ],
      "finalAnswer": "$A^{-1} = \\begin{pmatrix}0.4286 & 0.1429\\\\-0.1429 & 0.2857\\end{pmatrix}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Matrix arithmetic and determinants",
    "subtopicId": "fm.y1.pure.matrices",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrices.q043",
    "tags": [
      "diagonal",
      "inverse-2x2"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "questionText": "Find $A^{-1}$ where $A = \\begin{pmatrix}5 & 0\\\\0 & 3\\end{pmatrix}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Check determinant",
          "workingLatex": "\\det A = 15",
          "explanation": "An inverse exists only when the determinant is non-zero.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Formula",
          "workingLatex": "A^{-1} = \\dfrac{1}{\\det A}\\begin{pmatrix}d & -b\\\\-c & a\\end{pmatrix}",
          "explanation": "Swap diagonal entries, negate off-diagonals, divide by determinant.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Adjugate matrix",
          "workingLatex": "\\begin{pmatrix}3 & 0\\\\0 & 5\\end{pmatrix}",
          "explanation": "Form the matrix of cofactors (transposed for $2\\times2$).",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Divide by $\\det A$",
          "workingLatex": "\\dfrac{1}{15} \\times \\text{adjugate}",
          "explanation": "Scale every entry by $1/\\det A$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify entries",
          "workingLatex": "\\begin{pmatrix}0.2 & 0\\\\0 & 0.3333\\end{pmatrix}",
          "explanation": "Write each element as a simplified fraction or integer.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify $AA^{-1}$",
          "workingLatex": "A \\cdot A^{-1} = I",
          "explanation": "Multiply $A$ by its inverse to confirm you get the identity.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check product",
          "workingLatex": "\\begin{pmatrix}1 & 0\\\\0 & 1\\end{pmatrix}",
          "explanation": "The product should be the identity matrix.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "A^{-1} = \\begin{pmatrix}0.2 & 0\\\\0 & 0.3333\\end{pmatrix}",
          "explanation": "The inverse matrix.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Confirm",
          "workingLatex": "\\det A = 15 \\neq 0",
          "explanation": "Non-zero determinant guarantees a unique inverse.",
          "diagram": null
        }
      ],
      "finalAnswer": "$A^{-1} = \\begin{pmatrix}0.2 & 0\\\\0 & 0.3333\\end{pmatrix}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Matrix arithmetic and determinants",
    "subtopicId": "fm.y1.pure.matrices",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrices.q044",
    "tags": [
      "basic",
      "determinant-3x3"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find $\\det A$ where $A = \\begin{pmatrix}1 & 2 & 3\\\\0 & 1 & 4\\\\5 & 6 & 0\\end{pmatrix}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Cofactor expansion along row 1",
          "workingLatex": "\\det A = a(ei-fh) - b(di-fg) + c(dh-eg)",
          "explanation": "Expand along the first row using $\\pm$ cofactors.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Compute cofactor of $a$",
          "workingLatex": "ei - fh = 1\\cdot0 - 4\\cdot6 = -24",
          "explanation": "Minor of $a$ with correct sign.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute cofactor of $b$",
          "workingLatex": "-(di - fg) = -(0\\cdot0 - 4\\cdot5) = 20",
          "explanation": "Subtract the second cofactor term.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute cofactor of $c$",
          "workingLatex": "dh - eg = 0\\cdot6 - 1\\cdot5 = -5",
          "explanation": "Third cofactor term.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Combine",
          "workingLatex": "1\\cdot-24 - 2\\cdot-20 + 3\\cdot-5",
          "explanation": "Substitute all three cofactors.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate",
          "workingLatex": "\\det A = 1",
          "explanation": "Simplify to a single number.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Alternative check",
          "workingLatex": "\\text{Expand along any row or column}",
          "explanation": "Different expansions give the same determinant.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpretation",
          "workingLatex": "\\det A \\neq 0 \\Rightarrow \\text{invertible}",
          "explanation": "The determinant tells us whether an inverse exists.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\det A = 1",
          "explanation": "The determinant of the $3 \\times 3$ matrix.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\det A = 1$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Matrix arithmetic and determinants",
    "subtopicId": "fm.y1.pure.matrices",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrices.q045",
    "tags": [
      "basic",
      "determinant-3x3"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find $\\det A$ where $A = \\begin{pmatrix}2 & 0 & 1\\\\3 & 1 & 0\\\\1 & 2 & 4\\end{pmatrix}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Cofactor expansion along row 1",
          "workingLatex": "\\det A = a(ei-fh) - b(di-fg) + c(dh-eg)",
          "explanation": "Expand along the first row using $\\pm$ cofactors.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Compute cofactor of $a$",
          "workingLatex": "ei - fh = 1\\cdot4 - 0\\cdot2 = 4",
          "explanation": "Minor of $a$ with correct sign.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute cofactor of $b$",
          "workingLatex": "-(di - fg) = -(3\\cdot4 - 0\\cdot1) = -12",
          "explanation": "Subtract the second cofactor term.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute cofactor of $c$",
          "workingLatex": "dh - eg = 3\\cdot2 - 1\\cdot1 = 5",
          "explanation": "Third cofactor term.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Combine",
          "workingLatex": "2\\cdot4 - 0\\cdot12 + 1\\cdot5",
          "explanation": "Substitute all three cofactors.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate",
          "workingLatex": "\\det A = 13",
          "explanation": "Simplify to a single number.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Alternative check",
          "workingLatex": "\\text{Expand along any row or column}",
          "explanation": "Different expansions give the same determinant.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpretation",
          "workingLatex": "\\det A \\neq 0 \\Rightarrow \\text{invertible}",
          "explanation": "The determinant tells us whether an inverse exists.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\det A = 13",
          "explanation": "The determinant of the $3 \\times 3$ matrix.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\det A = 13$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Matrix arithmetic and determinants",
    "subtopicId": "fm.y1.pure.matrices",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrices.q046",
    "tags": [
      "diagonal",
      "determinant-3x3"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find $\\det A$ where $A = \\begin{pmatrix}1 & 0 & 0\\\\0 & 2 & 0\\\\0 & 0 & 3\\end{pmatrix}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Cofactor expansion along row 1",
          "workingLatex": "\\det A = a(ei-fh) - b(di-fg) + c(dh-eg)",
          "explanation": "Expand along the first row using $\\pm$ cofactors.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Compute cofactor of $a$",
          "workingLatex": "ei - fh = 2\\cdot3 - 0\\cdot0 = 6",
          "explanation": "Minor of $a$ with correct sign.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute cofactor of $b$",
          "workingLatex": "-(di - fg) = -(0\\cdot3 - 0\\cdot0) = 0",
          "explanation": "Subtract the second cofactor term.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute cofactor of $c$",
          "workingLatex": "dh - eg = 0\\cdot0 - 2\\cdot0 = 0",
          "explanation": "Third cofactor term.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Combine",
          "workingLatex": "1\\cdot6 - 0\\cdot0 + 0\\cdot0",
          "explanation": "Substitute all three cofactors.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate",
          "workingLatex": "\\det A = 6",
          "explanation": "Simplify to a single number.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Alternative check",
          "workingLatex": "\\text{Expand along any row or column}",
          "explanation": "Different expansions give the same determinant.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpretation",
          "workingLatex": "\\det A \\neq 0 \\Rightarrow \\text{invertible}",
          "explanation": "The determinant tells us whether an inverse exists.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\det A = 6",
          "explanation": "The determinant of the $3 \\times 3$ matrix.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\det A = 6$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Matrix arithmetic and determinants",
    "subtopicId": "fm.y1.pure.matrices",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrices.q047",
    "tags": [
      "basic",
      "determinant-3x3"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find $\\det A$ where $A = \\begin{pmatrix}1 & 1 & 0\\\\0 & 1 & 1\\\\1 & 0 & 1\\end{pmatrix}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Cofactor expansion along row 1",
          "workingLatex": "\\det A = a(ei-fh) - b(di-fg) + c(dh-eg)",
          "explanation": "Expand along the first row using $\\pm$ cofactors.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Compute cofactor of $a$",
          "workingLatex": "ei - fh = 1\\cdot1 - 1\\cdot0 = 1",
          "explanation": "Minor of $a$ with correct sign.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute cofactor of $b$",
          "workingLatex": "-(di - fg) = -(0\\cdot1 - 1\\cdot1) = 1",
          "explanation": "Subtract the second cofactor term.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute cofactor of $c$",
          "workingLatex": "dh - eg = 0\\cdot0 - 1\\cdot1 = -1",
          "explanation": "Third cofactor term.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Combine",
          "workingLatex": "1\\cdot1 - 1\\cdot-1 + 0\\cdot-1",
          "explanation": "Substitute all three cofactors.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate",
          "workingLatex": "\\det A = 2",
          "explanation": "Simplify to a single number.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Alternative check",
          "workingLatex": "\\text{Expand along any row or column}",
          "explanation": "Different expansions give the same determinant.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpretation",
          "workingLatex": "\\det A \\neq 0 \\Rightarrow \\text{invertible}",
          "explanation": "The determinant tells us whether an inverse exists.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\det A = 2",
          "explanation": "The determinant of the $3 \\times 3$ matrix.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\det A = 2$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Matrix arithmetic and determinants",
    "subtopicId": "fm.y1.pure.matrices",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrices.q048",
    "tags": [
      "basic",
      "determinant-3x3"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find $\\det A$ where $A = \\begin{pmatrix}2 & 1 & 3\\\\1 & 0 & 2\\\\4 & 1 & 1\\end{pmatrix}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Cofactor expansion along row 1",
          "workingLatex": "\\det A = a(ei-fh) - b(di-fg) + c(dh-eg)",
          "explanation": "Expand along the first row using $\\pm$ cofactors.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Compute cofactor of $a$",
          "workingLatex": "ei - fh = 0\\cdot1 - 2\\cdot1 = -2",
          "explanation": "Minor of $a$ with correct sign.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute cofactor of $b$",
          "workingLatex": "-(di - fg) = -(1\\cdot1 - 2\\cdot4) = 7",
          "explanation": "Subtract the second cofactor term.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute cofactor of $c$",
          "workingLatex": "dh - eg = 1\\cdot1 - 0\\cdot4 = 1",
          "explanation": "Third cofactor term.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Combine",
          "workingLatex": "2\\cdot-2 - 1\\cdot-7 + 3\\cdot1",
          "explanation": "Substitute all three cofactors.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate",
          "workingLatex": "\\det A = 6",
          "explanation": "Simplify to a single number.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Alternative check",
          "workingLatex": "\\text{Expand along any row or column}",
          "explanation": "Different expansions give the same determinant.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpretation",
          "workingLatex": "\\det A \\neq 0 \\Rightarrow \\text{invertible}",
          "explanation": "The determinant tells us whether an inverse exists.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\det A = 6",
          "explanation": "The determinant of the $3 \\times 3$ matrix.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\det A = 6$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Matrix arithmetic and determinants",
    "subtopicId": "fm.y1.pure.matrices",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrices.q049",
    "tags": [
      "singular-preview",
      "determinant-3x3"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find $\\det A$ where $A = \\begin{pmatrix}1 & 2 & 1\\\\2 & 4 & 2\\\\1 & 1 & 1\\end{pmatrix}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Cofactor expansion along row 1",
          "workingLatex": "\\det A = a(ei-fh) - b(di-fg) + c(dh-eg)",
          "explanation": "Expand along the first row using $\\pm$ cofactors.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Compute cofactor of $a$",
          "workingLatex": "ei - fh = 4\\cdot1 - 2\\cdot1 = 2",
          "explanation": "Minor of $a$ with correct sign.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute cofactor of $b$",
          "workingLatex": "-(di - fg) = -(2\\cdot1 - 2\\cdot1) = 0",
          "explanation": "Subtract the second cofactor term.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute cofactor of $c$",
          "workingLatex": "dh - eg = 2\\cdot1 - 4\\cdot1 = -2",
          "explanation": "Third cofactor term.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Combine",
          "workingLatex": "1\\cdot2 - 2\\cdot0 + 1\\cdot-2",
          "explanation": "Substitute all three cofactors.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate",
          "workingLatex": "\\det A = 0",
          "explanation": "Simplify to a single number.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Alternative check",
          "workingLatex": "\\text{Expand along any row or column}",
          "explanation": "Different expansions give the same determinant.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpretation",
          "workingLatex": "\\det A = 0 \\Rightarrow \\text{singular}",
          "explanation": "The determinant tells us whether an inverse exists.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\det A = 0",
          "explanation": "The determinant of the $3 \\times 3$ matrix.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\det A = 0$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Matrix arithmetic and determinants",
    "subtopicId": "fm.y1.pure.matrices",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrices.q050",
    "tags": [
      "2x3-times-3x1",
      "non-square-multiplication"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "questionText": "Given $A = \\begin{pmatrix}1 & 2 & 3\\\\4 & 5 & 6\\end{pmatrix}$ and $B = \\begin{pmatrix}7\\\\8\\\\9\\end{pmatrix}$, find $AB$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Check dimensions",
          "workingLatex": "A\\text{ is }2\\times3,\\; B\\text{ is }3\\times1",
          "explanation": "Inner dimensions ($3$ and $3$) must match.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Result size",
          "workingLatex": "AB\\text{ is }2\\times1",
          "explanation": "The product has outer dimensions.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Row 1 of $AB$",
          "workingLatex": "50",
          "explanation": "Dot each row of $A$ with each column of $B$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Row 2 of $AB$",
          "workingLatex": "122",
          "explanation": "Continue for each row.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Full product",
          "workingLatex": "AB = \\begin{pmatrix}50\\\\122\\end{pmatrix}",
          "explanation": "Assemble the result matrix.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify an entry",
          "workingLatex": "\\text{Check one dot product}",
          "explanation": "Pick one entry and recompute to confirm.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Note on order",
          "workingLatex": "AB \\neq BA \\text{ when dimensions differ}",
          "explanation": "Non-square matrices often cannot be multiplied in reverse.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Dimensions summary",
          "workingLatex": "2\\times3 \\cdot 3\\times1 = 2\\times1",
          "explanation": "Record the dimension rule.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "AB = \\begin{pmatrix}50\\\\122\\end{pmatrix}",
          "explanation": "The matrix product.",
          "diagram": null
        }
      ],
      "finalAnswer": "$AB = \\begin{pmatrix}50\\\\122\\end{pmatrix}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Matrix arithmetic and determinants",
    "subtopicId": "fm.y1.pure.matrices",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrices.q051",
    "tags": [
      "3x2-times-2x3",
      "non-square-multiplication"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "questionText": "Given $A = \\begin{pmatrix}1 & 0\\\\0 & 1\\\\2 & 1\\end{pmatrix}$ and $B = \\begin{pmatrix}3 & 1 & 2\\end{pmatrix}$, find $AB$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Check dimensions",
          "workingLatex": "A\\text{ is }3\\times2,\\; B\\text{ is }1\\times3",
          "explanation": "Inner dimensions ($2$ and $1$) must match.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Result size",
          "workingLatex": "AB\\text{ is }3\\times3",
          "explanation": "The product has outer dimensions.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Row 1 of $AB$",
          "workingLatex": "3,\\; 1,\\; 2",
          "explanation": "Dot each row of $A$ with each column of $B$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Row 2 of $AB$",
          "workingLatex": "0,\\; 0,\\; 0",
          "explanation": "Continue for each row.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Full product",
          "workingLatex": "AB = \\begin{pmatrix}3 & 1 & 2\\\\0 & 0 & 0\\\\6 & 2 & 4\\end{pmatrix}",
          "explanation": "Assemble the result matrix.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify an entry",
          "workingLatex": "\\text{Check one dot product}",
          "explanation": "Pick one entry and recompute to confirm.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Note on order",
          "workingLatex": "AB \\neq BA \\text{ when dimensions differ}",
          "explanation": "Non-square matrices often cannot be multiplied in reverse.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Dimensions summary",
          "workingLatex": "3\\times2 \\cdot 1\\times3 = 3\\times3",
          "explanation": "Record the dimension rule.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "AB = \\begin{pmatrix}3 & 1 & 2\\\\0 & 0 & 0\\\\6 & 2 & 4\\end{pmatrix}",
          "explanation": "The matrix product.",
          "diagram": null
        }
      ],
      "finalAnswer": "$AB = \\begin{pmatrix}3 & 1 & 2\\\\0 & 0 & 0\\\\6 & 2 & 4\\end{pmatrix}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Matrix arithmetic and determinants",
    "subtopicId": "fm.y1.pure.matrices",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrices.q052",
    "tags": [
      "2x2-times-2x3",
      "non-square-multiplication"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "questionText": "Given $A = \\begin{pmatrix}2 & 1\\\\3 & 4\\end{pmatrix}$ and $B = \\begin{pmatrix}1 & 2 & 0\\\\0 & 1 & 2\\end{pmatrix}$, find $AB$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Check dimensions",
          "workingLatex": "A\\text{ is }2\\times2,\\; B\\text{ is }2\\times3",
          "explanation": "Inner dimensions ($2$ and $2$) must match.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Result size",
          "workingLatex": "AB\\text{ is }2\\times3",
          "explanation": "The product has outer dimensions.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Row 1 of $AB$",
          "workingLatex": "2,\\; 5,\\; 2",
          "explanation": "Dot each row of $A$ with each column of $B$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Row 2 of $AB$",
          "workingLatex": "3,\\; 10,\\; 8",
          "explanation": "Continue for each row.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Full product",
          "workingLatex": "AB = \\begin{pmatrix}2 & 5 & 2\\\\3 & 10 & 8\\end{pmatrix}",
          "explanation": "Assemble the result matrix.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify an entry",
          "workingLatex": "\\text{Check one dot product}",
          "explanation": "Pick one entry and recompute to confirm.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Note on order",
          "workingLatex": "AB \\neq BA \\text{ when dimensions differ}",
          "explanation": "Non-square matrices often cannot be multiplied in reverse.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Dimensions summary",
          "workingLatex": "2\\times2 \\cdot 2\\times3 = 2\\times3",
          "explanation": "Record the dimension rule.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "AB = \\begin{pmatrix}2 & 5 & 2\\\\3 & 10 & 8\\end{pmatrix}",
          "explanation": "The matrix product.",
          "diagram": null
        }
      ],
      "finalAnswer": "$AB = \\begin{pmatrix}2 & 5 & 2\\\\3 & 10 & 8\\end{pmatrix}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Matrix arithmetic and determinants",
    "subtopicId": "fm.y1.pure.matrices",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrices.q053",
    "tags": [
      "column-vector",
      "solve-ax-b"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Solve $AX = B$ where $A = \\begin{pmatrix}2 & 1\\\\1 & 3\\end{pmatrix}$ and $B = \\begin{pmatrix}5\\\\7\\end{pmatrix}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up equation",
          "workingLatex": "AX = B",
          "explanation": "We need the matrix $X$ that satisfies this equation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Check $\\det A$",
          "workingLatex": "\\det A = 5 \\neq 0",
          "explanation": "A unique solution exists when $A$ is invertible.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Multiply by $A^{-1}$",
          "workingLatex": "X = A^{-1}B",
          "explanation": "Left-multiply both sides by $A^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find $A^{-1}$",
          "workingLatex": "A^{-1} = \\begin{pmatrix}0.6 & -0.2\\\\-0.2 & 0.4\\end{pmatrix}",
          "explanation": "Use the $2\\times2$ inverse formula.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Multiply $A^{-1}B$",
          "workingLatex": "\\text{Row} \\times \\text{column products}",
          "explanation": "Multiply the inverse by $B$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Entry $(1,1)$",
          "workingLatex": "1.5999999999999999",
          "explanation": "First entry of the solution.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Remaining entries",
          "workingLatex": "undefined,\\; 1.8000000000000003,\\; undefined",
          "explanation": "Complete the solution matrix.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solution",
          "workingLatex": "X = \\begin{pmatrix}1.6\\\\1.8\\end{pmatrix}",
          "explanation": "The matrix $X$ satisfying $AX = B$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify",
          "workingLatex": "AX = \\begin{pmatrix}5\\\\7\\end{pmatrix}",
          "explanation": "Multiply $A$ by $X$ to confirm you recover $B$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$X = \\begin{pmatrix}1.6\\\\1.8\\end{pmatrix}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Matrix arithmetic and determinants",
    "subtopicId": "fm.y1.pure.matrices",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrices.q054",
    "tags": [
      "2x2-solution",
      "solve-ax-b"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Solve $AX = B$ where $A = \\begin{pmatrix}3 & 2\\\\1 & 4\\end{pmatrix}$ and $B = \\begin{pmatrix}7 & 1\\\\5 & 3\\end{pmatrix}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up equation",
          "workingLatex": "AX = B",
          "explanation": "We need the matrix $X$ that satisfies this equation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Check $\\det A$",
          "workingLatex": "\\det A = 10 \\neq 0",
          "explanation": "A unique solution exists when $A$ is invertible.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Multiply by $A^{-1}$",
          "workingLatex": "X = A^{-1}B",
          "explanation": "Left-multiply both sides by $A^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find $A^{-1}$",
          "workingLatex": "A^{-1} = \\begin{pmatrix}0.4 & -0.2\\\\-0.1 & 0.3\\end{pmatrix}",
          "explanation": "Use the $2\\times2$ inverse formula.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Multiply $A^{-1}B$",
          "workingLatex": "\\text{Row} \\times \\text{column products}",
          "explanation": "Multiply the inverse by $B$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Entry $(1,1)$",
          "workingLatex": "1.8000000000000003",
          "explanation": "First entry of the solution.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Remaining entries",
          "workingLatex": "-0.20000000000000007,\\; 0.7999999999999999,\\; 0.7999999999999999",
          "explanation": "Complete the solution matrix.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solution",
          "workingLatex": "X = \\begin{pmatrix}1.8 & -0.2\\\\0.8 & 0.8\\end{pmatrix}",
          "explanation": "The matrix $X$ satisfying $AX = B$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify",
          "workingLatex": "AX = \\begin{pmatrix}7 & 0.9999999999999997\\\\5 & 2.9999999999999996\\end{pmatrix}",
          "explanation": "Multiply $A$ by $X$ to confirm you recover $B$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$X = \\begin{pmatrix}1.8 & -0.2\\\\0.8 & 0.8\\end{pmatrix}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Matrix arithmetic and determinants",
    "subtopicId": "fm.y1.pure.matrices",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrices.q055",
    "tags": [
      "column-vector",
      "solve-ax-b"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Solve $AX = B$ where $A = \\begin{pmatrix}1 & 2\\\\3 & 5\\end{pmatrix}$ and $B = \\begin{pmatrix}4\\\\11\\end{pmatrix}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up equation",
          "workingLatex": "AX = B",
          "explanation": "We need the matrix $X$ that satisfies this equation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Check $\\det A$",
          "workingLatex": "\\det A = -1 \\neq 0",
          "explanation": "A unique solution exists when $A$ is invertible.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Multiply by $A^{-1}$",
          "workingLatex": "X = A^{-1}B",
          "explanation": "Left-multiply both sides by $A^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find $A^{-1}$",
          "workingLatex": "A^{-1} = \\begin{pmatrix}-5 & 2\\\\3 & -1\\end{pmatrix}",
          "explanation": "Use the $2\\times2$ inverse formula.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Multiply $A^{-1}B$",
          "workingLatex": "\\text{Row} \\times \\text{column products}",
          "explanation": "Multiply the inverse by $B$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Entry $(1,1)$",
          "workingLatex": "2",
          "explanation": "First entry of the solution.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Remaining entries",
          "workingLatex": "undefined,\\; 1,\\; undefined",
          "explanation": "Complete the solution matrix.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solution",
          "workingLatex": "X = \\begin{pmatrix}2\\\\1\\end{pmatrix}",
          "explanation": "The matrix $X$ satisfying $AX = B$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify",
          "workingLatex": "AX = \\begin{pmatrix}4\\\\11\\end{pmatrix}",
          "explanation": "Multiply $A$ by $X$ to confirm you recover $B$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$X = \\begin{pmatrix}2\\\\1\\end{pmatrix}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Matrix arithmetic and determinants",
    "subtopicId": "fm.y1.pure.matrices",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrices.q056",
    "tags": [
      "diagonal",
      "inverse-3x3"
    ],
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "written",
    "questionText": "Find $A^{-1}$ where $A = \\begin{pmatrix}1 & 0 & 0\\\\0 & 2 & 0\\\\0 & 0 & 3\\end{pmatrix}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Compute $\\det A$",
          "workingLatex": "\\det A = 6",
          "explanation": "First verify the matrix is invertible.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find cofactors",
          "workingLatex": "\\text{Compute all nine cofactors}",
          "explanation": "Each cofactor is a signed $2\\times2$ minor.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Cofactor matrix",
          "workingLatex": "\\begin{pmatrix}6 & 0 & 0\\\\0 & 3 & 0\\\\0 & 0 & 2\\end{pmatrix}",
          "explanation": "Matrix of cofactors (note the transpose in the adjugate).",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Adjugate",
          "workingLatex": "\\text{Transpose of cofactor matrix}",
          "explanation": "For $3\\times3$, the adjugate is the transpose of the cofactor matrix.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Formula",
          "workingLatex": "A^{-1} = \\dfrac{1}{\\det A}\\text{adj}(A)",
          "explanation": "Divide every entry of the adjugate by the determinant.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Divide each entry",
          "workingLatex": "\\dfrac{1}{6} \\times \\text{adj}(A)",
          "explanation": "Scale the adjugate.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify",
          "workingLatex": "\\begin{pmatrix}1 & 0 & 0\\\\0 & 0.5 & 0\\\\0 & 0 & 0.3333\\end{pmatrix}",
          "explanation": "Write each entry in simplest form.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify diagonal of $AA^{-1}$",
          "workingLatex": "\\text{Should equal 1}",
          "explanation": "Check that the product gives the identity.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify off-diagonal",
          "workingLatex": "\\text{Should equal 0}",
          "explanation": "Off-diagonal entries of $AA^{-1}$ must be zero.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Confirm $AA^{-1}=I$",
          "workingLatex": "A \\cdot A^{-1} = I_{3}",
          "explanation": "Full verification of the inverse.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check $\\det$",
          "workingLatex": "\\det A = 6 \\neq 0",
          "explanation": "Non-zero determinant was required.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Answer",
          "workingLatex": "A^{-1} = \\begin{pmatrix}1 & 0 & 0\\\\0 & 0.5 & 0\\\\0 & 0 & 0.3333\\end{pmatrix}",
          "explanation": "The $3\\times3$ inverse matrix.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Method summary",
          "workingLatex": "\\text{adj}(A) / \\det A",
          "explanation": "Standard method for $3\\times3$ inverses.",
          "diagram": null
        }
      ],
      "finalAnswer": "$A^{-1} = \\begin{pmatrix}1 & 0 & 0\\\\0 & 0.5 & 0\\\\0 & 0 & 0.3333\\end{pmatrix}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Matrix arithmetic and determinants",
    "subtopicId": "fm.y1.pure.matrices",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrices.q057",
    "tags": [
      "upper-triangular",
      "inverse-3x3"
    ],
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "written",
    "questionText": "Find $A^{-1}$ where $A = \\begin{pmatrix}1 & 0 & 0\\\\0 & 1 & 1\\\\0 & 0 & 2\\end{pmatrix}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Compute $\\det A$",
          "workingLatex": "\\det A = 2",
          "explanation": "First verify the matrix is invertible.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find cofactors",
          "workingLatex": "\\text{Compute all nine cofactors}",
          "explanation": "Each cofactor is a signed $2\\times2$ minor.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Cofactor matrix",
          "workingLatex": "\\begin{pmatrix}2 & 0 & 0\\\\0 & 2 & -1\\\\0 & 0 & 1\\end{pmatrix}",
          "explanation": "Matrix of cofactors (note the transpose in the adjugate).",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Adjugate",
          "workingLatex": "\\text{Transpose of cofactor matrix}",
          "explanation": "For $3\\times3$, the adjugate is the transpose of the cofactor matrix.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Formula",
          "workingLatex": "A^{-1} = \\dfrac{1}{\\det A}\\text{adj}(A)",
          "explanation": "Divide every entry of the adjugate by the determinant.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Divide each entry",
          "workingLatex": "\\dfrac{1}{2} \\times \\text{adj}(A)",
          "explanation": "Scale the adjugate.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify",
          "workingLatex": "\\begin{pmatrix}1 & 0 & 0\\\\0 & 1 & -0.5\\\\0 & 0 & 0.5\\end{pmatrix}",
          "explanation": "Write each entry in simplest form.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify diagonal of $AA^{-1}$",
          "workingLatex": "\\text{Should equal 1}",
          "explanation": "Check that the product gives the identity.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify off-diagonal",
          "workingLatex": "\\text{Should equal 0}",
          "explanation": "Off-diagonal entries of $AA^{-1}$ must be zero.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Confirm $AA^{-1}=I$",
          "workingLatex": "A \\cdot A^{-1} = I_{3}",
          "explanation": "Full verification of the inverse.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check $\\det$",
          "workingLatex": "\\det A = 2 \\neq 0",
          "explanation": "Non-zero determinant was required.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Answer",
          "workingLatex": "A^{-1} = \\begin{pmatrix}1 & 0 & 0\\\\0 & 1 & -0.5\\\\0 & 0 & 0.5\\end{pmatrix}",
          "explanation": "The $3\\times3$ inverse matrix.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Method summary",
          "workingLatex": "\\text{adj}(A) / \\det A",
          "explanation": "Standard method for $3\\times3$ inverses.",
          "diagram": null
        }
      ],
      "finalAnswer": "$A^{-1} = \\begin{pmatrix}1 & 0 & 0\\\\0 & 1 & -0.5\\\\0 & 0 & 0.5\\end{pmatrix}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Matrix arithmetic and determinants",
    "subtopicId": "fm.y1.pure.matrices",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrices.q058",
    "tags": [
      "basic",
      "inverse-3x3"
    ],
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "written",
    "questionText": "Find $A^{-1}$ where $A = \\begin{pmatrix}2 & 0 & 1\\\\0 & 1 & 0\\\\1 & 0 & 1\\end{pmatrix}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Compute $\\det A$",
          "workingLatex": "\\det A = 1",
          "explanation": "First verify the matrix is invertible.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find cofactors",
          "workingLatex": "\\text{Compute all nine cofactors}",
          "explanation": "Each cofactor is a signed $2\\times2$ minor.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Cofactor matrix",
          "workingLatex": "\\begin{pmatrix}1 & 0 & -1\\\\0 & 1 & 0\\\\-1 & 0 & 2\\end{pmatrix}",
          "explanation": "Matrix of cofactors (note the transpose in the adjugate).",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Adjugate",
          "workingLatex": "\\text{Transpose of cofactor matrix}",
          "explanation": "For $3\\times3$, the adjugate is the transpose of the cofactor matrix.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Formula",
          "workingLatex": "A^{-1} = \\dfrac{1}{\\det A}\\text{adj}(A)",
          "explanation": "Divide every entry of the adjugate by the determinant.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Divide each entry",
          "workingLatex": "\\dfrac{1}{1} \\times \\text{adj}(A)",
          "explanation": "Scale the adjugate.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify",
          "workingLatex": "\\begin{pmatrix}1 & 0 & -1\\\\0 & 1 & 0\\\\-1 & 0 & 2\\end{pmatrix}",
          "explanation": "Write each entry in simplest form.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify diagonal of $AA^{-1}$",
          "workingLatex": "\\text{Should equal 1}",
          "explanation": "Check that the product gives the identity.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify off-diagonal",
          "workingLatex": "\\text{Should equal 0}",
          "explanation": "Off-diagonal entries of $AA^{-1}$ must be zero.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Confirm $AA^{-1}=I$",
          "workingLatex": "A \\cdot A^{-1} = I_{3}",
          "explanation": "Full verification of the inverse.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check $\\det$",
          "workingLatex": "\\det A = 1 \\neq 0",
          "explanation": "Non-zero determinant was required.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Answer",
          "workingLatex": "A^{-1} = \\begin{pmatrix}1 & 0 & -1\\\\0 & 1 & 0\\\\-1 & 0 & 2\\end{pmatrix}",
          "explanation": "The $3\\times3$ inverse matrix.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Method summary",
          "workingLatex": "\\text{adj}(A) / \\det A",
          "explanation": "Standard method for $3\\times3$ inverses.",
          "diagram": null
        }
      ],
      "finalAnswer": "$A^{-1} = \\begin{pmatrix}1 & 0 & -1\\\\0 & 1 & 0\\\\-1 & 0 & 2\\end{pmatrix}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Matrix arithmetic and determinants",
    "subtopicId": "fm.y1.pure.matrices",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrices.q059",
    "tags": [
      "upper-triangular",
      "inverse-3x3"
    ],
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "written",
    "questionText": "Find $A^{-1}$ where $A = \\begin{pmatrix}1 & 1 & 0\\\\0 & 1 & 1\\\\0 & 0 & 1\\end{pmatrix}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Compute $\\det A$",
          "workingLatex": "\\det A = 1",
          "explanation": "First verify the matrix is invertible.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find cofactors",
          "workingLatex": "\\text{Compute all nine cofactors}",
          "explanation": "Each cofactor is a signed $2\\times2$ minor.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Cofactor matrix",
          "workingLatex": "\\begin{pmatrix}1 & -1 & 1\\\\0 & 1 & -1\\\\0 & 0 & 1\\end{pmatrix}",
          "explanation": "Matrix of cofactors (note the transpose in the adjugate).",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Adjugate",
          "workingLatex": "\\text{Transpose of cofactor matrix}",
          "explanation": "For $3\\times3$, the adjugate is the transpose of the cofactor matrix.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Formula",
          "workingLatex": "A^{-1} = \\dfrac{1}{\\det A}\\text{adj}(A)",
          "explanation": "Divide every entry of the adjugate by the determinant.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Divide each entry",
          "workingLatex": "\\dfrac{1}{1} \\times \\text{adj}(A)",
          "explanation": "Scale the adjugate.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify",
          "workingLatex": "\\begin{pmatrix}1 & -1 & 1\\\\0 & 1 & -1\\\\0 & 0 & 1\\end{pmatrix}",
          "explanation": "Write each entry in simplest form.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify diagonal of $AA^{-1}$",
          "workingLatex": "\\text{Should equal 1}",
          "explanation": "Check that the product gives the identity.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify off-diagonal",
          "workingLatex": "\\text{Should equal 0}",
          "explanation": "Off-diagonal entries of $AA^{-1}$ must be zero.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Confirm $AA^{-1}=I$",
          "workingLatex": "A \\cdot A^{-1} = I_{3}",
          "explanation": "Full verification of the inverse.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check $\\det$",
          "workingLatex": "\\det A = 1 \\neq 0",
          "explanation": "Non-zero determinant was required.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Answer",
          "workingLatex": "A^{-1} = \\begin{pmatrix}1 & -1 & 1\\\\0 & 1 & -1\\\\0 & 0 & 1\\end{pmatrix}",
          "explanation": "The $3\\times3$ inverse matrix.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Method summary",
          "workingLatex": "\\text{adj}(A) / \\det A",
          "explanation": "Standard method for $3\\times3$ inverses.",
          "diagram": null
        }
      ],
      "finalAnswer": "$A^{-1} = \\begin{pmatrix}1 & -1 & 1\\\\0 & 1 & -1\\\\0 & 0 & 1\\end{pmatrix}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Matrix arithmetic and determinants",
    "subtopicId": "fm.y1.pure.matrices",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrices.q060",
    "tags": [
      "diagonal",
      "solve-ax-b",
      "3x3"
    ],
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "written",
    "questionText": "Solve $AX = B$ where $A = \\begin{pmatrix}1 & 0 & 0\\\\0 & 2 & 0\\\\0 & 0 & 3\\end{pmatrix}$ and $B = \\begin{pmatrix}2\\\\4\\\\6\\end{pmatrix}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Equation",
          "workingLatex": "AX = B",
          "explanation": "Matrix equation with $3\\times3$ matrices.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Check invertibility",
          "workingLatex": "\\det A = 6 \\neq 0",
          "explanation": "Confirm $A$ has an inverse.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Strategy",
          "workingLatex": "X = A^{-1}B",
          "explanation": "Left-multiply by $A^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find $A^{-1}$",
          "workingLatex": "A^{-1} = \\begin{pmatrix}1 & 0 & 0\\\\0 & 0.5 & 0\\\\0 & 0 & 0.3333\\end{pmatrix}",
          "explanation": "Use cofactors and divide by determinant.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set up multiplication",
          "workingLatex": "A^{-1}B",
          "explanation": "A $3\\times3$ matrix times a $3\\times1$ column (or $3\\times3$).",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Row 1 of $X$",
          "workingLatex": "2",
          "explanation": "Dot row 1 of $A^{-1}$ with columns of $B$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Row 2 of $X$",
          "workingLatex": "2",
          "explanation": "Continue the multiplication.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Row 3 of $X$",
          "workingLatex": "2",
          "explanation": "Final row of the solution.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solution matrix",
          "workingLatex": "X = \\begin{pmatrix}2\\\\2\\\\2\\end{pmatrix}",
          "explanation": "Assemble the answer.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Verify $AX$",
          "workingLatex": "AX = \\begin{pmatrix}2\\\\4\\\\6\\end{pmatrix}",
          "explanation": "Multiply $A$ by $X$ to recover $B$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check entry $(1,1)$",
          "workingLatex": "2",
          "explanation": "Verify at least one entry explicitly.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Confirm all entries",
          "workingLatex": "\\text{All match } B",
          "explanation": "Full verification.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Answer",
          "workingLatex": "X = \\begin{pmatrix}2\\\\2\\\\2\\end{pmatrix}",
          "explanation": "Solution to the matrix equation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$X = \\begin{pmatrix}2\\\\2\\\\2\\end{pmatrix}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Matrix arithmetic and determinants",
    "subtopicId": "fm.y1.pure.matrices",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrices.q061",
    "tags": [
      "basic",
      "solve-ax-b",
      "3x3"
    ],
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "written",
    "questionText": "Solve $AX = B$ where $A = \\begin{pmatrix}1 & 1 & 0\\\\0 & 1 & 1\\\\1 & 0 & 1\\end{pmatrix}$ and $B = \\begin{pmatrix}2\\\\3\\\\4\\end{pmatrix}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Equation",
          "workingLatex": "AX = B",
          "explanation": "Matrix equation with $3\\times3$ matrices.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Check invertibility",
          "workingLatex": "\\det A = 2 \\neq 0",
          "explanation": "Confirm $A$ has an inverse.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Strategy",
          "workingLatex": "X = A^{-1}B",
          "explanation": "Left-multiply by $A^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find $A^{-1}$",
          "workingLatex": "A^{-1} = \\begin{pmatrix}0.5 & -0.5 & 0.5\\\\0.5 & 0.5 & -0.5\\\\-0.5 & 0.5 & 0.5\\end{pmatrix}",
          "explanation": "Use cofactors and divide by determinant.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set up multiplication",
          "workingLatex": "A^{-1}B",
          "explanation": "A $3\\times3$ matrix times a $3\\times1$ column (or $3\\times3$).",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Row 1 of $X$",
          "workingLatex": "1.5",
          "explanation": "Dot row 1 of $A^{-1}$ with columns of $B$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Row 2 of $X$",
          "workingLatex": "0.5",
          "explanation": "Continue the multiplication.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Row 3 of $X$",
          "workingLatex": "2.5",
          "explanation": "Final row of the solution.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solution matrix",
          "workingLatex": "X = \\begin{pmatrix}1.5\\\\0.5\\\\2.5\\end{pmatrix}",
          "explanation": "Assemble the answer.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Verify $AX$",
          "workingLatex": "AX = \\begin{pmatrix}2\\\\3\\\\4\\end{pmatrix}",
          "explanation": "Multiply $A$ by $X$ to recover $B$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check entry $(1,1)$",
          "workingLatex": "2",
          "explanation": "Verify at least one entry explicitly.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Confirm all entries",
          "workingLatex": "\\text{All match } B",
          "explanation": "Full verification.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Answer",
          "workingLatex": "X = \\begin{pmatrix}1.5\\\\0.5\\\\2.5\\end{pmatrix}",
          "explanation": "Solution to the matrix equation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$X = \\begin{pmatrix}1.5\\\\0.5\\\\2.5\\end{pmatrix}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Matrix arithmetic and determinants",
    "subtopicId": "fm.y1.pure.matrices",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrices.q062",
    "tags": [
      "basic",
      "solve-ax-b",
      "3x3"
    ],
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "written",
    "questionText": "Solve $AX = B$ where $A = \\begin{pmatrix}2 & 0 & 1\\\\0 & 1 & 0\\\\1 & 0 & 1\\end{pmatrix}$ and $B = \\begin{pmatrix}3\\\\2\\\\4\\end{pmatrix}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Equation",
          "workingLatex": "AX = B",
          "explanation": "Matrix equation with $3\\times3$ matrices.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Check invertibility",
          "workingLatex": "\\det A = 1 \\neq 0",
          "explanation": "Confirm $A$ has an inverse.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Strategy",
          "workingLatex": "X = A^{-1}B",
          "explanation": "Left-multiply by $A^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find $A^{-1}$",
          "workingLatex": "A^{-1} = \\begin{pmatrix}1 & 0 & -1\\\\0 & 1 & 0\\\\-1 & 0 & 2\\end{pmatrix}",
          "explanation": "Use cofactors and divide by determinant.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set up multiplication",
          "workingLatex": "A^{-1}B",
          "explanation": "A $3\\times3$ matrix times a $3\\times1$ column (or $3\\times3$).",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Row 1 of $X$",
          "workingLatex": "-1",
          "explanation": "Dot row 1 of $A^{-1}$ with columns of $B$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Row 2 of $X$",
          "workingLatex": "2",
          "explanation": "Continue the multiplication.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Row 3 of $X$",
          "workingLatex": "5",
          "explanation": "Final row of the solution.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solution matrix",
          "workingLatex": "X = \\begin{pmatrix}-1\\\\2\\\\5\\end{pmatrix}",
          "explanation": "Assemble the answer.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Verify $AX$",
          "workingLatex": "AX = \\begin{pmatrix}3\\\\2\\\\4\\end{pmatrix}",
          "explanation": "Multiply $A$ by $X$ to recover $B$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check entry $(1,1)$",
          "workingLatex": "3",
          "explanation": "Verify at least one entry explicitly.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Confirm all entries",
          "workingLatex": "\\text{All match } B",
          "explanation": "Full verification.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Answer",
          "workingLatex": "X = \\begin{pmatrix}-1\\\\2\\\\5\\end{pmatrix}",
          "explanation": "Solution to the matrix equation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$X = \\begin{pmatrix}-1\\\\2\\\\5\\end{pmatrix}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Matrix arithmetic and determinants",
    "subtopicId": "fm.y1.pure.matrices",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrices.q063",
    "tags": [
      "proportional-rows",
      "singular-matrix"
    ],
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "written",
    "questionText": "Show that $A = \\begin{pmatrix}2 & 4\\\\1 & 2\\end{pmatrix}$ is singular and hence has no inverse.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Compute determinant",
          "workingLatex": "\\det A = 2\\cdot2 - 4\\cdot1 = 0",
          "explanation": "Use the $2\\times2$ determinant formula.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Interpret result",
          "workingLatex": "\\det A = 0",
          "explanation": "A zero determinant means the matrix is singular.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Consequence for inverse",
          "workingLatex": "A^{-1} \\text{ does not exist}",
          "explanation": "You cannot divide by zero in the inverse formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rows relationship",
          "workingLatex": "\\text{Rows are linearly dependent}",
          "explanation": "One row is a scalar multiple of the other (or both zero).",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Geometric meaning",
          "workingLatex": "\\text{Transformation squashes area to zero}",
          "explanation": "The matrix collapses the plane to a line or point.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check rows",
          "workingLatex": "\\text{Compare row 1 and row 2}",
          "explanation": "Look for proportional rows.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Systems of equations",
          "workingLatex": "AX=B \\text{ may have no or infinitely many solutions}",
          "explanation": "Singular matrices do not give unique solutions.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Definition",
          "workingLatex": "\\text{Singular: } \\det A = 0",
          "explanation": "Memorise this key criterion.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\det A = 0,\\; A \\text{ is singular}",
          "explanation": "The matrix has no inverse.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Matrix notation",
          "workingLatex": "A = (a_{ij})",
          "explanation": "A matrix is a rectangular array of numbers.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Same order rule",
          "workingLatex": "m \\times n",
          "explanation": "Addition and subtraction require matching dimensions.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Scalar rule",
          "workingLatex": "kA",
          "explanation": "Multiply every entry by the scalar $k$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Multiplication rule",
          "workingLatex": "\\text{row} \\cdot \\text{column}",
          "explanation": "Each entry of $AB$ is a dot product.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\det A = 0$, so $A$ is singular and $A^{-1}$ does not exist."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Matrix arithmetic and determinants",
    "subtopicId": "fm.y1.pure.matrices",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrices.q064",
    "tags": [
      "proportional-rows",
      "singular-matrix"
    ],
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "written",
    "questionText": "Show that $A = \\begin{pmatrix}1 & 3\\\\2 & 6\\end{pmatrix}$ is singular and hence has no inverse.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Compute determinant",
          "workingLatex": "\\det A = 1\\cdot6 - 3\\cdot2 = 0",
          "explanation": "Use the $2\\times2$ determinant formula.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Interpret result",
          "workingLatex": "\\det A = 0",
          "explanation": "A zero determinant means the matrix is singular.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Consequence for inverse",
          "workingLatex": "A^{-1} \\text{ does not exist}",
          "explanation": "You cannot divide by zero in the inverse formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rows relationship",
          "workingLatex": "\\text{Rows are linearly dependent}",
          "explanation": "One row is a scalar multiple of the other (or both zero).",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Geometric meaning",
          "workingLatex": "\\text{Transformation squashes area to zero}",
          "explanation": "The matrix collapses the plane to a line or point.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check rows",
          "workingLatex": "\\text{Compare row 1 and row 2}",
          "explanation": "Look for proportional rows.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Systems of equations",
          "workingLatex": "AX=B \\text{ may have no or infinitely many solutions}",
          "explanation": "Singular matrices do not give unique solutions.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Definition",
          "workingLatex": "\\text{Singular: } \\det A = 0",
          "explanation": "Memorise this key criterion.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\det A = 0,\\; A \\text{ is singular}",
          "explanation": "The matrix has no inverse.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Matrix notation",
          "workingLatex": "A = (a_{ij})",
          "explanation": "A matrix is a rectangular array of numbers.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Same order rule",
          "workingLatex": "m \\times n",
          "explanation": "Addition and subtraction require matching dimensions.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Scalar rule",
          "workingLatex": "kA",
          "explanation": "Multiply every entry by the scalar $k$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Multiplication rule",
          "workingLatex": "\\text{row} \\cdot \\text{column}",
          "explanation": "Each entry of $AB$ is a dot product.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\det A = 0$, so $A$ is singular and $A^{-1}$ does not exist."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Matrix arithmetic and determinants",
    "subtopicId": "fm.y1.pure.matrices",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrices.q065",
    "tags": [
      "singular-matrix",
      "determinant-3x3",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "written",
    "questionText": "The matrix $A = \\begin{pmatrix}1 & 2 & 3\\\\4 & 5 & 6\\\\7 & 8 & 9\\end{pmatrix}$ is singular. Find $\\det A$ and explain why $A^{-1}$ does not exist.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Expand determinant",
          "workingLatex": "\\det A = 1(5\\cdot9-6\\cdot8) - 2(4\\cdot9-6\\cdot7) + 3(4\\cdot8-5\\cdot7)",
          "explanation": "Cofactor expansion along row 1.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "First cofactor",
          "workingLatex": "5\\cdot9 - 6\\cdot8 = 45 - 48 = -3",
          "explanation": "Compute the minor of $a_{11}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Second cofactor",
          "workingLatex": "-(4\\cdot9 - 6\\cdot7) = -(36-42) = 6",
          "explanation": "Compute the minor of $a_{12}$ with sign.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Third cofactor",
          "workingLatex": "4\\cdot8 - 5\\cdot7 = 32 - 35 = -3",
          "explanation": "Compute the minor of $a_{13}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Combine",
          "workingLatex": "1(-3) - 2(6) + 3(-3) = -3 - 12 - 9",
          "explanation": "Substitute into the expansion.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Result",
          "workingLatex": "\\det A = 0",
          "explanation": "The determinant is zero.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Singular matrix",
          "workingLatex": "\\det A = 0 \\Rightarrow A \\text{ is singular}",
          "explanation": "A singular matrix has no inverse.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Row dependency",
          "workingLatex": "\\text{Row 3} = 2\\cdot\\text{Row 2} - \\text{Row 1}",
          "explanation": "The rows are linearly dependent.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "No inverse",
          "workingLatex": "A^{-1} \\text{ does not exist}",
          "explanation": "Cannot divide by zero in the inverse formula.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Systems implication",
          "workingLatex": "AX=B \\text{ has no unique solution}",
          "explanation": "Singular matrices cannot be inverted.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Geometric view",
          "workingLatex": "\\text{Maps } \\mathbb{R}^{3} \\text{ to a plane or line}",
          "explanation": "The transformation is not bijective.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Key criterion",
          "workingLatex": "\\det A \\neq 0 \\iff A \\text{ is invertible}",
          "explanation": "Memorise this equivalence.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Answer",
          "workingLatex": "\\det A = 0;\\; A^{-1} \\text{ does not exist}",
          "explanation": "Singular $3\\times3$ matrix.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\det A = 0$, so $A$ is singular and $A^{-1}$ does not exist."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Matrix arithmetic and determinants",
    "subtopicId": "fm.y1.pure.matrices",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrices.q066",
    "tags": [
      "combined",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "written",
    "questionText": "Given $A = \\begin{pmatrix}2 & 1\\\\3 & 4\\end{pmatrix}$ and $B = \\begin{pmatrix}1 & 0\\\\2 & 1\\end{pmatrix}$, find (a) $AB$, (b) $BA$, (c) $\\det A$, (d) $A^{-1}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "(a) Compute $AB$",
          "workingLatex": "AB = \\begin{pmatrix}4 & 1\\\\11 & 4\\end{pmatrix}",
          "explanation": "Multiply $A$ on the left of $B$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "(b) Compute $BA$",
          "workingLatex": "BA = \\begin{pmatrix}2 & 1\\\\7 & 6\\end{pmatrix}",
          "explanation": "Reverse the order — result differs.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "(b) Compare",
          "workingLatex": "AB \\neq BA",
          "explanation": "Matrix multiplication is not commutative.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "(c) Determinant of $A$",
          "workingLatex": "\\det A = 2\\cdot4 - 1\\cdot3 = 5",
          "explanation": "Use $ad-bc$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "(d) Inverse formula",
          "workingLatex": "A^{-1} = \\dfrac{1}{5}\\begin{pmatrix}4 & -1\\\\-3 & 2\\end{pmatrix}",
          "explanation": "Adjugate divided by determinant.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "(d) Simplify",
          "workingLatex": "A^{-1} = \\begin{pmatrix}\\frac{4}{5} & -\\frac{1}{5}\\\\-\\frac{3}{5} & \\frac{2}{5}\\end{pmatrix}",
          "explanation": "Write each entry as a fraction.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify $AA^{-1}$",
          "workingLatex": "\\begin{pmatrix}1 & 0\\\\0 & 1\\end{pmatrix}",
          "explanation": "Product should be the identity.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check $\\det$ for invertibility",
          "workingLatex": "\\det A = 5 \\neq 0",
          "explanation": "Non-zero determinant confirms inverse exists.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Summary (a)",
          "workingLatex": "AB = \\begin{pmatrix}4 & 1\\\\11 & 4\\end{pmatrix}",
          "explanation": "Part (a) answer.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Summary (b)",
          "workingLatex": "BA = \\begin{pmatrix}2 & 1\\\\7 & 6\\end{pmatrix}",
          "explanation": "Part (b) answer.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Summary (c)",
          "workingLatex": "\\det A = 5",
          "explanation": "Part (c) answer.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Summary (d)",
          "workingLatex": "A^{-1} = \\begin{pmatrix}\\frac{4}{5} & -\\frac{1}{5}\\\\-\\frac{3}{5} & \\frac{2}{5}\\end{pmatrix}",
          "explanation": "Part (d) answer.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Key ideas",
          "workingLatex": "\\text{Order matters; } \\det \\neq 0 \\Rightarrow A^{-1} \\text{ exists}",
          "explanation": "Comprehensive matrix skills review.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $AB = \\begin{pmatrix}4 & 1\\\\11 & 4\\end{pmatrix}$. (b) $BA = \\begin{pmatrix}2 & 1\\\\7 & 6\\end{pmatrix}$. (c) $\\det A = 5$. (d) $A^{-1} = \\begin{pmatrix}\\frac{4}{5} & -\\frac{1}{5}\\\\-\\frac{3}{5} & \\frac{2}{5}\\end{pmatrix}$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Matrix arithmetic and determinants",
    "subtopicId": "fm.y1.pure.matrices",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrices.q067",
    "tags": [
      "systems",
      "solve-ax-b",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "questionText": "Solve the system using matrices: $\\begin{cases}2x + y = 5\\\\x + 3y = 7\\end{cases}$. Write as $AX = B$, find $A^{-1}$, and hence find $x$ and $y$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Matrix form",
          "workingLatex": "\\begin{pmatrix}2 & 1\\\\1 & 3\\end{pmatrix}\\begin{pmatrix}x\\\\y\\end{pmatrix} = \\begin{pmatrix}5\\\\7\\end{pmatrix}",
          "explanation": "Write the system as $AX = B$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify $A$ and $B$",
          "workingLatex": "A = \\begin{pmatrix}2 & 1\\\\1 & 3\\end{pmatrix},\\; B = \\begin{pmatrix}5\\\\7\\end{pmatrix}",
          "explanation": "Extract the coefficient matrix and constants.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Determinant",
          "workingLatex": "\\det A = 6 - 1 = 5",
          "explanation": "Check that $A$ is invertible.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Inverse",
          "workingLatex": "A^{-1} = \\dfrac{1}{5}\\begin{pmatrix}3 & -1\\\\-1 & 2\\end{pmatrix}",
          "explanation": "Use the $2\\times2$ inverse formula.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve",
          "workingLatex": "X = A^{-1}B",
          "explanation": "Multiply inverse by constant vector.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute $x$",
          "workingLatex": "x = \\dfrac{1}{5}(3\\cdot5 + (-1)\\cdot7) = \\dfrac{8}{5}",
          "explanation": "First entry of the solution vector.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compute $y$",
          "workingLatex": "y = \\dfrac{1}{5}((-1)\\cdot5 + 2\\cdot7) = \\dfrac{9}{5}",
          "explanation": "Second entry of the solution vector.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solution vector",
          "workingLatex": "X = \\begin{pmatrix}\\frac{8}{5}\\\\\\frac{9}{5}\\end{pmatrix}",
          "explanation": "The matrix solution.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify equation 1",
          "workingLatex": "2\\cdot\\frac{8}{5} + \\frac{9}{5} = \\frac{25}{5} = 5",
          "explanation": "Substitute into the first equation.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Verify equation 2",
          "workingLatex": "\\frac{8}{5} + 3\\cdot\\frac{9}{5} = \\frac{35}{5} = 7",
          "explanation": "Substitute into the second equation.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Matrix method advantage",
          "workingLatex": "\\text{Works for larger systems}",
          "explanation": "The same method extends to $3\\times3$ and beyond.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Check $\\det$",
          "workingLatex": "\\det A = 5 \\neq 0",
          "explanation": "Unique solution guaranteed.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Answer",
          "workingLatex": "x = \\dfrac{8}{5},\\; y = \\dfrac{9}{5}",
          "explanation": "Solution to the simultaneous equations.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = \\dfrac{8}{5}$, $y = \\dfrac{9}{5}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Matrix arithmetic and determinants",
    "subtopicId": "fm.y1.pure.matrices",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrices.q068",
    "tags": [
      "combined",
      "3x3",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "questionText": "Given $A = \\begin{pmatrix}1 & 2 & 0\\\\0 & 1 & 1\\\\2 & 0 & 1\\end{pmatrix}$, find (a) $\\det A$, (b) $A^{-1}$, (c) solve $AX = \\begin{pmatrix}3\\\\2\\\\5\\end{pmatrix}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "(a) Expand $\\det A$",
          "workingLatex": "\\det A = 1(1\\cdot1-1\\cdot0) - 2(0\\cdot1-1\\cdot2) + 0",
          "explanation": "Cofactor expansion along row 1.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "(a) Evaluate",
          "workingLatex": "\\det A = 1 + 4 = 5",
          "explanation": "Simplify the expansion.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "(b) Cofactors",
          "workingLatex": "\\text{Compute all nine cofactors of } A",
          "explanation": "Build the adjugate matrix.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "(b) Adjugate",
          "workingLatex": "\\text{adj}(A) = \\begin{pmatrix}1 & -2 & 2\\\\-2 & 1 & -1\\\\-2 & 2 & 1\\end{pmatrix}",
          "explanation": "Transpose of the cofactor matrix.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "(b) Inverse",
          "workingLatex": "A^{-1} = \\dfrac{1}{5}\\text{adj}(A)",
          "explanation": "Divide by the determinant.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "(b) Result",
          "workingLatex": "A^{-1} = \\begin{pmatrix}\\frac{1}{5} & -\\frac{2}{5} & \\frac{2}{5}\\\\-\\frac{2}{5} & \\frac{1}{5} & -\\frac{1}{5}\\\\-\\frac{2}{5} & \\frac{2}{5} & \\frac{1}{5}\\end{pmatrix}",
          "explanation": "Simplify each entry.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "(c) Set up",
          "workingLatex": "X = A^{-1}B",
          "explanation": "Use the inverse to solve the equation.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "(c) Multiply",
          "workingLatex": "X = A^{-1}\\begin{pmatrix}3\\\\2\\\\5\\end{pmatrix}",
          "explanation": "Matrix-vector multiplication.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "(c) Compute entries",
          "workingLatex": "x_{1} = \\frac{3}{5},\\; x_{2} = -\\frac{3}{5},\\; x_{3} = \\frac{19}{5}",
          "explanation": "Dot products of rows of $A^{-1}$ with $B$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "(c) Solution",
          "workingLatex": "X = \\begin{pmatrix}\\frac{3}{5}\\\\-\\frac{3}{5}\\\\\\frac{19}{5}\\end{pmatrix}",
          "explanation": "The solution vector.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Verify $AX$",
          "workingLatex": "AX = \\begin{pmatrix}3\\\\2\\\\5\\end{pmatrix}",
          "explanation": "Confirm by multiplying $A$ by $X$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Check $\\det$",
          "workingLatex": "\\det A = 5 \\neq 0",
          "explanation": "Invertibility was essential.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Summary",
          "workingLatex": "\\det A = 5;\\; A^{-1} \\text{ found};\\; X \\text{ solved}",
          "explanation": "Full $3\\times3$ matrix workflow.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\det A = 5$. $A^{-1} = \\begin{pmatrix}\\frac{1}{5} & -\\frac{2}{5} & \\frac{2}{5}\\\\-\\frac{2}{5} & \\frac{1}{5} & -\\frac{1}{5}\\\\-\\frac{2}{5} & \\frac{2}{5} & \\frac{1}{5}\\end{pmatrix}$. $X = \\begin{pmatrix}\\frac{3}{5}\\\\-\\frac{3}{5}\\\\\\frac{19}{5}\\end{pmatrix}$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Matrix arithmetic and determinants",
    "subtopicId": "fm.y1.pure.matrices",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrices.q069",
    "tags": [
      "associativity",
      "multi-step",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "questionText": "Let $A = \\begin{pmatrix}1 & 2\\\\3 & 4\\end{pmatrix}$, $B = \\begin{pmatrix}2 & 0\\\\1 & 3\\end{pmatrix}$, $C = \\begin{pmatrix}0 & 1\\\\1 & 0\\end{pmatrix}$. Find $(AB)C$ and $A(BC)$ and verify the associativity law $(AB)C = A(BC)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Compute $AB$",
          "workingLatex": "AB = \\begin{pmatrix}4 & 6\\\\10 & 12\\end{pmatrix}",
          "explanation": "Multiply $A$ and $B$ first.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Compute $(AB)C$",
          "workingLatex": "(AB)C = \\begin{pmatrix}6 & 4\\\\12 & 10\\end{pmatrix}",
          "explanation": "Multiply the result by $C$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute $BC$",
          "workingLatex": "BC = \\begin{pmatrix}0 & 2\\\\3 & 1\\end{pmatrix}",
          "explanation": "Multiply $B$ and $C$ first.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute $A(BC)$",
          "workingLatex": "A(BC) = \\begin{pmatrix}6 & 4\\\\12 & 10\\end{pmatrix}",
          "explanation": "Multiply $A$ by the result.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare",
          "workingLatex": "(AB)C = A(BC)",
          "explanation": "Both parenthesizations give the same answer.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Associativity law",
          "workingLatex": "(AB)C = A(BC)",
          "explanation": "Matrix multiplication is associative.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Note on commutativity",
          "workingLatex": "AB \\neq BA \\text{ in general}",
          "explanation": "Associative but not commutative.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify $AB$",
          "workingLatex": "\\begin{pmatrix}1&2\\\\3&4\\end{pmatrix}\\begin{pmatrix}2&0\\\\1&3\\end{pmatrix}",
          "explanation": "Check the intermediate product.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify $BC$",
          "workingLatex": "\\begin{pmatrix}2&0\\\\1&3\\end{pmatrix}\\begin{pmatrix}0&1\\\\1&0\\end{pmatrix}",
          "explanation": "Check the other intermediate.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Entry check $(1,1)$",
          "workingLatex": "6 = 6",
          "explanation": "Confirm at least one entry matches.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Full equality",
          "workingLatex": "\\begin{pmatrix}6&4\\\\12&10\\end{pmatrix} = \\begin{pmatrix}6&4\\\\12&10\\end{pmatrix}",
          "explanation": "All entries match.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Key property",
          "workingLatex": "\\text{Associativity allows flexible bracketing}",
          "explanation": "You can group matrix products in any order.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Answer",
          "workingLatex": "(AB)C = A(BC) = \\begin{pmatrix}6 & 4\\\\12 & 10\\end{pmatrix}",
          "explanation": "Associativity verified.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(AB)C = A(BC) = \\begin{pmatrix}6 & 4\\\\12 & 10\\end{pmatrix}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Matrix arithmetic and determinants",
    "subtopicId": "fm.y1.pure.matrices",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrices.q070",
    "tags": [
      "transformations",
      "combined",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "questionText": "The transformation matrices $M = \\begin{pmatrix}2 & 0\\\\0 & 3\\end{pmatrix}$ and $N = \\begin{pmatrix}1 & 1\\\\0 & 1\\end{pmatrix}$ represent a stretch and a shear. Find (a) $MN$, (b) $NM$, (c) $\\det(MN)$, (d) $(MN)^{-1}$, and interpret the order of transformations.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "(a) Compute $MN$",
          "workingLatex": "MN = \\begin{pmatrix}2 & 2\\\\0 & 3\\end{pmatrix}",
          "explanation": "Shear then stretch (read right to left for column vectors).",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "(b) Compute $NM$",
          "workingLatex": "NM = \\begin{pmatrix}2 & 3\\\\0 & 3\\end{pmatrix}",
          "explanation": "Stretch then shear — different result.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "(b) Compare",
          "workingLatex": "MN \\neq NM",
          "explanation": "Order of transformations matters.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "(c) $\\det(MN)$",
          "workingLatex": "\\det(MN) = 2\\cdot3 - 2\\cdot0 = 6",
          "explanation": "Determinant of the combined transformation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "(c) Product rule",
          "workingLatex": "\\det(MN) = \\det M \\cdot \\det N = 6\\cdot1 = 6",
          "explanation": "Determinant of a product equals product of determinants.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "(d) Inverse of $MN$",
          "workingLatex": "(MN)^{-1} = \\dfrac{1}{6}\\begin{pmatrix}3 & -2\\\\0 & 2\\end{pmatrix}",
          "explanation": "Use the $2\\times2$ inverse formula.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "(d) Simplify",
          "workingLatex": "(MN)^{-1} = \\begin{pmatrix}\\frac{1}{2} & -\\frac{1}{3}\\\\0 & \\frac{1}{3}\\end{pmatrix}",
          "explanation": "Simplify fractions.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify $(MN)(MN)^{-1}=I$",
          "workingLatex": "\\begin{pmatrix}1&0\\\\0&1\\end{pmatrix}",
          "explanation": "Product with inverse gives identity.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Geometric: $M$",
          "workingLatex": "\\text{Stretch } x \\text{ by 2, } y \\text{ by 3}",
          "explanation": "Diagonal scaling matrix.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Geometric: $N$",
          "workingLatex": "\\text{Shear in } x\\text{-direction}",
          "explanation": "Upper triangular with 1 on diagonal.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Order interpretation",
          "workingLatex": "MN \\text{ applies shear first, then stretch}",
          "explanation": "For column vectors, the rightmost matrix acts first.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Determinant meaning",
          "workingLatex": "\\det(MN) = 6 \\Rightarrow \\text{area scaled by factor 6}",
          "explanation": "Determinant gives area scaling factor.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Summary",
          "workingLatex": "MN \\neq NM;\\; \\det(MN)=6;\\; (MN)^{-1} \\text{ found}",
          "explanation": "Complete transformation analysis.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $MN = \\begin{pmatrix}2 & 2\\\\0 & 3\\end{pmatrix}$. (b) $NM = \\begin{pmatrix}2 & 3\\\\0 & 3\\end{pmatrix}$. (c) $\\det(MN) = 6$. (d) $(MN)^{-1} = \\begin{pmatrix}\\frac{1}{2} & -\\frac{1}{3}\\\\0 & \\frac{1}{3}\\end{pmatrix}$."
    }
  }
];
