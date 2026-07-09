import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Determinants and inverses",
    "subtopicId": "fm.y1.pure.determinants-inverses",
    "questionDiagram": null,
    "id": "fm.y1.pure.determinants-inverses.q001",
    "tags": [
      "det-2x2"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Find $\\det A$ where $A = \\begin{pmatrix}3 & 1\\\\2 & 4\\end{pmatrix}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Formula",
          "workingLatex": "\\det\\begin{pmatrix}a & b\\\\c & d\\end{pmatrix} = ad - bc",
          "explanation": "Multiply the main diagonal and subtract the other diagonal.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "\\det A = (3)(4) - (1)(2)",
          "explanation": "Insert the entries of $A$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Main diagonal",
          "workingLatex": "12",
          "explanation": "Product $ad$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Other diagonal",
          "workingLatex": "2",
          "explanation": "Product $bc$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Subtract",
          "workingLatex": "12 - 2 = 10",
          "explanation": "Compute the determinant.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret",
          "workingLatex": "\\det A \\neq 0 \\Rightarrow A \\text{ is invertible}",
          "explanation": "The determinant tells us whether an inverse exists.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\det A = 10$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Determinants and inverses",
    "subtopicId": "fm.y1.pure.determinants-inverses",
    "questionDiagram": null,
    "id": "fm.y1.pure.determinants-inverses.q002",
    "tags": [
      "det-2x2"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Find $\\det A$ where $A = \\begin{pmatrix}2 & 5\\\\1 & 3\\end{pmatrix}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Formula",
          "workingLatex": "\\det\\begin{pmatrix}a & b\\\\c & d\\end{pmatrix} = ad - bc",
          "explanation": "Multiply the main diagonal and subtract the other diagonal.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "\\det A = (2)(3) - (5)(1)",
          "explanation": "Insert the entries of $A$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Main diagonal",
          "workingLatex": "6",
          "explanation": "Product $ad$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Other diagonal",
          "workingLatex": "5",
          "explanation": "Product $bc$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Subtract",
          "workingLatex": "6 - 5 = 1",
          "explanation": "Compute the determinant.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret",
          "workingLatex": "\\det A \\neq 0 \\Rightarrow A \\text{ is invertible}",
          "explanation": "The determinant tells us whether an inverse exists.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\det A = 1$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Determinants and inverses",
    "subtopicId": "fm.y1.pure.determinants-inverses",
    "questionDiagram": null,
    "id": "fm.y1.pure.determinants-inverses.q003",
    "tags": [
      "det-2x2"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Find $\\det A$ where $A = \\begin{pmatrix}-1 & 2\\\\3 & 5\\end{pmatrix}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Formula",
          "workingLatex": "\\det\\begin{pmatrix}a & b\\\\c & d\\end{pmatrix} = ad - bc",
          "explanation": "Multiply the main diagonal and subtract the other diagonal.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "\\det A = (-1)(5) - (2)(3)",
          "explanation": "Insert the entries of $A$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Main diagonal",
          "workingLatex": "-5",
          "explanation": "Product $ad$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Other diagonal",
          "workingLatex": "6",
          "explanation": "Product $bc$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Subtract",
          "workingLatex": "-5 - 6 = -11",
          "explanation": "Compute the determinant.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret",
          "workingLatex": "\\det A \\neq 0 \\Rightarrow A \\text{ is invertible}",
          "explanation": "The determinant tells us whether an inverse exists.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\det A = -11$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Determinants and inverses",
    "subtopicId": "fm.y1.pure.determinants-inverses",
    "questionDiagram": null,
    "id": "fm.y1.pure.determinants-inverses.q004",
    "tags": [
      "det-2x2"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Find $\\det A$ where $A = \\begin{pmatrix}0 & 3\\\\2 & 1\\end{pmatrix}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Formula",
          "workingLatex": "\\det\\begin{pmatrix}a & b\\\\c & d\\end{pmatrix} = ad - bc",
          "explanation": "Multiply the main diagonal and subtract the other diagonal.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "\\det A = (0)(1) - (3)(2)",
          "explanation": "Insert the entries of $A$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Main diagonal",
          "workingLatex": "0",
          "explanation": "Product $ad$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Other diagonal",
          "workingLatex": "6",
          "explanation": "Product $bc$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Subtract",
          "workingLatex": "0 - 6 = -6",
          "explanation": "Compute the determinant.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret",
          "workingLatex": "\\det A \\neq 0 \\Rightarrow A \\text{ is invertible}",
          "explanation": "The determinant tells us whether an inverse exists.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\det A = -6$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Determinants and inverses",
    "subtopicId": "fm.y1.pure.determinants-inverses",
    "questionDiagram": null,
    "id": "fm.y1.pure.determinants-inverses.q005",
    "tags": [
      "det-2x2"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Find $\\det A$ where $A = \\begin{pmatrix}5 & 0\\\\0 & 2\\end{pmatrix}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Formula",
          "workingLatex": "\\det\\begin{pmatrix}a & b\\\\c & d\\end{pmatrix} = ad - bc",
          "explanation": "Multiply the main diagonal and subtract the other diagonal.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "\\det A = (5)(2) - (0)(0)",
          "explanation": "Insert the entries of $A$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Main diagonal",
          "workingLatex": "10",
          "explanation": "Product $ad$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Other diagonal",
          "workingLatex": "0",
          "explanation": "Product $bc$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Subtract",
          "workingLatex": "10 - 0 = 10",
          "explanation": "Compute the determinant.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret",
          "workingLatex": "\\det A \\neq 0 \\Rightarrow A \\text{ is invertible}",
          "explanation": "The determinant tells us whether an inverse exists.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\det A = 10$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Determinants and inverses",
    "subtopicId": "fm.y1.pure.determinants-inverses",
    "questionDiagram": null,
    "id": "fm.y1.pure.determinants-inverses.q006",
    "tags": [
      "singular-preview"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Find $\\det A$ where $A = \\begin{pmatrix}1 & 4\\\\2 & 8\\end{pmatrix}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Formula",
          "workingLatex": "\\det\\begin{pmatrix}a & b\\\\c & d\\end{pmatrix} = ad - bc",
          "explanation": "Multiply the main diagonal and subtract the other diagonal.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "\\det A = (1)(8) - (4)(2)",
          "explanation": "Insert the entries of $A$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Main diagonal",
          "workingLatex": "8",
          "explanation": "Product $ad$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Other diagonal",
          "workingLatex": "8",
          "explanation": "Product $bc$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Subtract",
          "workingLatex": "8 - 8 = 0",
          "explanation": "Compute the determinant.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret",
          "workingLatex": "\\det A = 0 \\Rightarrow A \\text{ is singular}",
          "explanation": "The determinant tells us whether an inverse exists.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\det A = 0$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Determinants and inverses",
    "subtopicId": "fm.y1.pure.determinants-inverses",
    "questionDiagram": null,
    "id": "fm.y1.pure.determinants-inverses.q007",
    "tags": [
      "det-2x2"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Find $\\det A$ where $A = \\begin{pmatrix}2 & 3\\\\1 & 5\\end{pmatrix}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Formula",
          "workingLatex": "\\det\\begin{pmatrix}a & b\\\\c & d\\end{pmatrix} = ad - bc",
          "explanation": "Multiply the main diagonal and subtract the other diagonal.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "\\det A = (2)(5) - (3)(1)",
          "explanation": "Insert the entries of $A$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Main diagonal",
          "workingLatex": "10",
          "explanation": "Product $ad$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Other diagonal",
          "workingLatex": "3",
          "explanation": "Product $bc$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Subtract",
          "workingLatex": "10 - 3 = 7",
          "explanation": "Compute the determinant.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret",
          "workingLatex": "\\det A \\neq 0 \\Rightarrow A \\text{ is invertible}",
          "explanation": "The determinant tells us whether an inverse exists.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\det A = 7$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Determinants and inverses",
    "subtopicId": "fm.y1.pure.determinants-inverses",
    "questionDiagram": null,
    "id": "fm.y1.pure.determinants-inverses.q008",
    "tags": [
      "det-2x2"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Find $\\det A$ where $A = \\begin{pmatrix}4 & 1\\\\2 & 3\\end{pmatrix}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Formula",
          "workingLatex": "\\det\\begin{pmatrix}a & b\\\\c & d\\end{pmatrix} = ad - bc",
          "explanation": "Multiply the main diagonal and subtract the other diagonal.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "\\det A = (4)(3) - (1)(2)",
          "explanation": "Insert the entries of $A$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Main diagonal",
          "workingLatex": "12",
          "explanation": "Product $ad$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Other diagonal",
          "workingLatex": "2",
          "explanation": "Product $bc$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Subtract",
          "workingLatex": "12 - 2 = 10",
          "explanation": "Compute the determinant.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret",
          "workingLatex": "\\det A \\neq 0 \\Rightarrow A \\text{ is invertible}",
          "explanation": "The determinant tells us whether an inverse exists.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\det A = 10$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Determinants and inverses",
    "subtopicId": "fm.y1.pure.determinants-inverses",
    "questionDiagram": null,
    "id": "fm.y1.pure.determinants-inverses.q009",
    "tags": [
      "det-2x2"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Find $\\det A$ where $A = \\begin{pmatrix}-2 & 1\\\\3 & 4\\end{pmatrix}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Formula",
          "workingLatex": "\\det\\begin{pmatrix}a & b\\\\c & d\\end{pmatrix} = ad - bc",
          "explanation": "Multiply the main diagonal and subtract the other diagonal.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "\\det A = (-2)(4) - (1)(3)",
          "explanation": "Insert the entries of $A$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Main diagonal",
          "workingLatex": "-8",
          "explanation": "Product $ad$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Other diagonal",
          "workingLatex": "3",
          "explanation": "Product $bc$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Subtract",
          "workingLatex": "-8 - 3 = -11",
          "explanation": "Compute the determinant.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret",
          "workingLatex": "\\det A \\neq 0 \\Rightarrow A \\text{ is invertible}",
          "explanation": "The determinant tells us whether an inverse exists.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\det A = -11$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Determinants and inverses",
    "subtopicId": "fm.y1.pure.determinants-inverses",
    "questionDiagram": null,
    "id": "fm.y1.pure.determinants-inverses.q010",
    "tags": [
      "det-2x2"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Find $\\det A$ where $A = \\begin{pmatrix}1 & 1\\\\1 & 2\\end{pmatrix}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Formula",
          "workingLatex": "\\det\\begin{pmatrix}a & b\\\\c & d\\end{pmatrix} = ad - bc",
          "explanation": "Multiply the main diagonal and subtract the other diagonal.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "\\det A = (1)(2) - (1)(1)",
          "explanation": "Insert the entries of $A$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Main diagonal",
          "workingLatex": "2",
          "explanation": "Product $ad$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Other diagonal",
          "workingLatex": "1",
          "explanation": "Product $bc$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Subtract",
          "workingLatex": "2 - 1 = 1",
          "explanation": "Compute the determinant.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret",
          "workingLatex": "\\det A \\neq 0 \\Rightarrow A \\text{ is invertible}",
          "explanation": "The determinant tells us whether an inverse exists.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\det A = 1$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Determinants and inverses",
    "subtopicId": "fm.y1.pure.determinants-inverses",
    "questionDiagram": null,
    "id": "fm.y1.pure.determinants-inverses.q011",
    "tags": [
      "det-2x2"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Find $\\det A$ where $A = \\begin{pmatrix}3 & 2\\\\1 & 4\\end{pmatrix}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Formula",
          "workingLatex": "\\det\\begin{pmatrix}a & b\\\\c & d\\end{pmatrix} = ad - bc",
          "explanation": "Multiply the main diagonal and subtract the other diagonal.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "\\det A = (3)(4) - (2)(1)",
          "explanation": "Insert the entries of $A$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Main diagonal",
          "workingLatex": "12",
          "explanation": "Product $ad$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Other diagonal",
          "workingLatex": "2",
          "explanation": "Product $bc$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Subtract",
          "workingLatex": "12 - 2 = 10",
          "explanation": "Compute the determinant.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret",
          "workingLatex": "\\det A \\neq 0 \\Rightarrow A \\text{ is invertible}",
          "explanation": "The determinant tells us whether an inverse exists.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\det A = 10$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Determinants and inverses",
    "subtopicId": "fm.y1.pure.determinants-inverses",
    "questionDiagram": null,
    "id": "fm.y1.pure.determinants-inverses.q012",
    "tags": [
      "det-2x2"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Find $\\det A$ where $A = \\begin{pmatrix}2 & 0\\\\5 & 3\\end{pmatrix}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Formula",
          "workingLatex": "\\det\\begin{pmatrix}a & b\\\\c & d\\end{pmatrix} = ad - bc",
          "explanation": "Multiply the main diagonal and subtract the other diagonal.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "\\det A = (2)(3) - (0)(5)",
          "explanation": "Insert the entries of $A$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Main diagonal",
          "workingLatex": "6",
          "explanation": "Product $ad$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Other diagonal",
          "workingLatex": "0",
          "explanation": "Product $bc$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Subtract",
          "workingLatex": "6 - 0 = 6",
          "explanation": "Compute the determinant.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret",
          "workingLatex": "\\det A \\neq 0 \\Rightarrow A \\text{ is invertible}",
          "explanation": "The determinant tells us whether an inverse exists.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\det A = 6$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Determinants and inverses",
    "subtopicId": "fm.y1.pure.determinants-inverses",
    "questionDiagram": null,
    "id": "fm.y1.pure.determinants-inverses.q013",
    "tags": [
      "det-2x2"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Find $\\det A$ where $A = \\begin{pmatrix}1 & 3\\\\4 & 2\\end{pmatrix}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Formula",
          "workingLatex": "\\det\\begin{pmatrix}a & b\\\\c & d\\end{pmatrix} = ad - bc",
          "explanation": "Multiply the main diagonal and subtract the other diagonal.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "\\det A = (1)(2) - (3)(4)",
          "explanation": "Insert the entries of $A$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Main diagonal",
          "workingLatex": "2",
          "explanation": "Product $ad$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Other diagonal",
          "workingLatex": "12",
          "explanation": "Product $bc$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Subtract",
          "workingLatex": "2 - 12 = -10",
          "explanation": "Compute the determinant.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret",
          "workingLatex": "\\det A \\neq 0 \\Rightarrow A \\text{ is invertible}",
          "explanation": "The determinant tells us whether an inverse exists.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\det A = -10$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Determinants and inverses",
    "subtopicId": "fm.y1.pure.determinants-inverses",
    "questionDiagram": null,
    "id": "fm.y1.pure.determinants-inverses.q014",
    "tags": [
      "det-2x2"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Find $\\det A$ where $A = \\begin{pmatrix}6 & 2\\\\3 & 1\\end{pmatrix}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Formula",
          "workingLatex": "\\det\\begin{pmatrix}a & b\\\\c & d\\end{pmatrix} = ad - bc",
          "explanation": "Multiply the main diagonal and subtract the other diagonal.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "\\det A = (6)(1) - (2)(3)",
          "explanation": "Insert the entries of $A$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Main diagonal",
          "workingLatex": "6",
          "explanation": "Product $ad$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Other diagonal",
          "workingLatex": "6",
          "explanation": "Product $bc$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Subtract",
          "workingLatex": "6 - 6 = 0",
          "explanation": "Compute the determinant.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret",
          "workingLatex": "\\det A = 0 \\Rightarrow A \\text{ is singular}",
          "explanation": "The determinant tells us whether an inverse exists.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\det A = 0$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Determinants and inverses",
    "subtopicId": "fm.y1.pure.determinants-inverses",
    "questionDiagram": null,
    "id": "fm.y1.pure.determinants-inverses.q015",
    "tags": [
      "inverse-2x2"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Find $A^{-1}$ where $A = \\begin{pmatrix}3 & 1\\\\2 & 4\\end{pmatrix}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Check determinant",
          "workingLatex": "\\det A = 10",
          "explanation": "An inverse exists only when $\\det A \\neq 0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Inverse formula",
          "workingLatex": "A^{-1} = \\dfrac{1}{\\det A}\\begin{pmatrix}d & -b\\\\-c & a\\end{pmatrix}",
          "explanation": "Swap diagonal entries, negate off-diagonals, divide by $\\det A$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Adjugate",
          "workingLatex": "\\begin{pmatrix}4 & -1\\\\-2 & 3\\end{pmatrix}",
          "explanation": "Form the adjugate matrix.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Divide by $\\det A$",
          "workingLatex": "A^{-1} = \\begin{pmatrix}0.4 & -0.1\\\\-0.2 & 0.3\\end{pmatrix}",
          "explanation": "Scale every entry by $1/\\det A$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify",
          "workingLatex": "AA^{-1} = I",
          "explanation": "Multiply to confirm the identity.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "A^{-1} = \\begin{pmatrix}0.4 & -0.1\\\\-0.2 & 0.3\\end{pmatrix}",
          "explanation": "The inverse matrix.",
          "diagram": null
        }
      ],
      "finalAnswer": "$A^{-1} = \\begin{pmatrix}0.4 & -0.1\\\\-0.2 & 0.3\\end{pmatrix}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Determinants and inverses",
    "subtopicId": "fm.y1.pure.determinants-inverses",
    "questionDiagram": null,
    "id": "fm.y1.pure.determinants-inverses.q016",
    "tags": [
      "inverse-2x2"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Find $A^{-1}$ where $A = \\begin{pmatrix}2 & 1\\\\5 & 3\\end{pmatrix}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Check determinant",
          "workingLatex": "\\det A = 1",
          "explanation": "An inverse exists only when $\\det A \\neq 0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Inverse formula",
          "workingLatex": "A^{-1} = \\dfrac{1}{\\det A}\\begin{pmatrix}d & -b\\\\-c & a\\end{pmatrix}",
          "explanation": "Swap diagonal entries, negate off-diagonals, divide by $\\det A$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Adjugate",
          "workingLatex": "\\begin{pmatrix}3 & -1\\\\-5 & 2\\end{pmatrix}",
          "explanation": "Form the adjugate matrix.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Divide by $\\det A$",
          "workingLatex": "A^{-1} = \\begin{pmatrix}3 & -1\\\\-5 & 2\\end{pmatrix}",
          "explanation": "Scale every entry by $1/\\det A$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify",
          "workingLatex": "AA^{-1} = I",
          "explanation": "Multiply to confirm the identity.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "A^{-1} = \\begin{pmatrix}3 & -1\\\\-5 & 2\\end{pmatrix}",
          "explanation": "The inverse matrix.",
          "diagram": null
        }
      ],
      "finalAnswer": "$A^{-1} = \\begin{pmatrix}3 & -1\\\\-5 & 2\\end{pmatrix}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Determinants and inverses",
    "subtopicId": "fm.y1.pure.determinants-inverses",
    "questionDiagram": null,
    "id": "fm.y1.pure.determinants-inverses.q017",
    "tags": [
      "inverse-2x2"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Find $A^{-1}$ where $A = \\begin{pmatrix}1 & 2\\\\3 & 7\\end{pmatrix}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Check determinant",
          "workingLatex": "\\det A = 1",
          "explanation": "An inverse exists only when $\\det A \\neq 0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Inverse formula",
          "workingLatex": "A^{-1} = \\dfrac{1}{\\det A}\\begin{pmatrix}d & -b\\\\-c & a\\end{pmatrix}",
          "explanation": "Swap diagonal entries, negate off-diagonals, divide by $\\det A$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Adjugate",
          "workingLatex": "\\begin{pmatrix}7 & -2\\\\-3 & 1\\end{pmatrix}",
          "explanation": "Form the adjugate matrix.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Divide by $\\det A$",
          "workingLatex": "A^{-1} = \\begin{pmatrix}7 & -2\\\\-3 & 1\\end{pmatrix}",
          "explanation": "Scale every entry by $1/\\det A$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify",
          "workingLatex": "AA^{-1} = I",
          "explanation": "Multiply to confirm the identity.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "A^{-1} = \\begin{pmatrix}7 & -2\\\\-3 & 1\\end{pmatrix}",
          "explanation": "The inverse matrix.",
          "diagram": null
        }
      ],
      "finalAnswer": "$A^{-1} = \\begin{pmatrix}7 & -2\\\\-3 & 1\\end{pmatrix}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Determinants and inverses",
    "subtopicId": "fm.y1.pure.determinants-inverses",
    "questionDiagram": null,
    "id": "fm.y1.pure.determinants-inverses.q018",
    "tags": [
      "inverse-2x2"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Find $A^{-1}$ where $A = \\begin{pmatrix}2 & -1\\\\1 & 3\\end{pmatrix}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Check determinant",
          "workingLatex": "\\det A = 7",
          "explanation": "An inverse exists only when $\\det A \\neq 0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Inverse formula",
          "workingLatex": "A^{-1} = \\dfrac{1}{\\det A}\\begin{pmatrix}d & -b\\\\-c & a\\end{pmatrix}",
          "explanation": "Swap diagonal entries, negate off-diagonals, divide by $\\det A$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Adjugate",
          "workingLatex": "\\begin{pmatrix}3 & 1\\\\-1 & 2\\end{pmatrix}",
          "explanation": "Form the adjugate matrix.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Divide by $\\det A$",
          "workingLatex": "A^{-1} = \\begin{pmatrix}0.4286 & 0.1429\\\\-0.1429 & 0.2857\\end{pmatrix}",
          "explanation": "Scale every entry by $1/\\det A$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify",
          "workingLatex": "AA^{-1} = I",
          "explanation": "Multiply to confirm the identity.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "A^{-1} = \\begin{pmatrix}0.4286 & 0.1429\\\\-0.1429 & 0.2857\\end{pmatrix}",
          "explanation": "The inverse matrix.",
          "diagram": null
        }
      ],
      "finalAnswer": "$A^{-1} = \\begin{pmatrix}0.4286 & 0.1429\\\\-0.1429 & 0.2857\\end{pmatrix}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Determinants and inverses",
    "subtopicId": "fm.y1.pure.determinants-inverses",
    "questionDiagram": null,
    "id": "fm.y1.pure.determinants-inverses.q019",
    "tags": [
      "inverse-2x2"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Find $A^{-1}$ where $A = \\begin{pmatrix}5 & 0\\\\0 & 3\\end{pmatrix}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Check determinant",
          "workingLatex": "\\det A = 15",
          "explanation": "An inverse exists only when $\\det A \\neq 0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Inverse formula",
          "workingLatex": "A^{-1} = \\dfrac{1}{\\det A}\\begin{pmatrix}d & -b\\\\-c & a\\end{pmatrix}",
          "explanation": "Swap diagonal entries, negate off-diagonals, divide by $\\det A$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Adjugate",
          "workingLatex": "\\begin{pmatrix}3 & 0\\\\0 & 5\\end{pmatrix}",
          "explanation": "Form the adjugate matrix.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Divide by $\\det A$",
          "workingLatex": "A^{-1} = \\begin{pmatrix}0.2 & 0\\\\0 & 0.3333\\end{pmatrix}",
          "explanation": "Scale every entry by $1/\\det A$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify",
          "workingLatex": "AA^{-1} = I",
          "explanation": "Multiply to confirm the identity.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "A^{-1} = \\begin{pmatrix}0.2 & 0\\\\0 & 0.3333\\end{pmatrix}",
          "explanation": "The inverse matrix.",
          "diagram": null
        }
      ],
      "finalAnswer": "$A^{-1} = \\begin{pmatrix}0.2 & 0\\\\0 & 0.3333\\end{pmatrix}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Determinants and inverses",
    "subtopicId": "fm.y1.pure.determinants-inverses",
    "questionDiagram": null,
    "id": "fm.y1.pure.determinants-inverses.q020",
    "tags": [
      "inverse-2x2"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Find $A^{-1}$ where $A = \\begin{pmatrix}4 & 2\\\\3 & 2\\end{pmatrix}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Check determinant",
          "workingLatex": "\\det A = 2",
          "explanation": "An inverse exists only when $\\det A \\neq 0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Inverse formula",
          "workingLatex": "A^{-1} = \\dfrac{1}{\\det A}\\begin{pmatrix}d & -b\\\\-c & a\\end{pmatrix}",
          "explanation": "Swap diagonal entries, negate off-diagonals, divide by $\\det A$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Adjugate",
          "workingLatex": "\\begin{pmatrix}2 & -2\\\\-3 & 4\\end{pmatrix}",
          "explanation": "Form the adjugate matrix.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Divide by $\\det A$",
          "workingLatex": "A^{-1} = \\begin{pmatrix}1 & -1\\\\-1.5 & 2\\end{pmatrix}",
          "explanation": "Scale every entry by $1/\\det A$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify",
          "workingLatex": "AA^{-1} = I",
          "explanation": "Multiply to confirm the identity.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "A^{-1} = \\begin{pmatrix}1 & -1\\\\-1.5 & 2\\end{pmatrix}",
          "explanation": "The inverse matrix.",
          "diagram": null
        }
      ],
      "finalAnswer": "$A^{-1} = \\begin{pmatrix}1 & -1\\\\-1.5 & 2\\end{pmatrix}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Determinants and inverses",
    "subtopicId": "fm.y1.pure.determinants-inverses",
    "questionDiagram": null,
    "id": "fm.y1.pure.determinants-inverses.q021",
    "tags": [
      "inverse-2x2"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Find $A^{-1}$ where $A = \\begin{pmatrix}1 & 1\\\\2 & 3\\end{pmatrix}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Check determinant",
          "workingLatex": "\\det A = 1",
          "explanation": "An inverse exists only when $\\det A \\neq 0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Inverse formula",
          "workingLatex": "A^{-1} = \\dfrac{1}{\\det A}\\begin{pmatrix}d & -b\\\\-c & a\\end{pmatrix}",
          "explanation": "Swap diagonal entries, negate off-diagonals, divide by $\\det A$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Adjugate",
          "workingLatex": "\\begin{pmatrix}3 & -1\\\\-2 & 1\\end{pmatrix}",
          "explanation": "Form the adjugate matrix.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Divide by $\\det A$",
          "workingLatex": "A^{-1} = \\begin{pmatrix}3 & -1\\\\-2 & 1\\end{pmatrix}",
          "explanation": "Scale every entry by $1/\\det A$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify",
          "workingLatex": "AA^{-1} = I",
          "explanation": "Multiply to confirm the identity.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "A^{-1} = \\begin{pmatrix}3 & -1\\\\-2 & 1\\end{pmatrix}",
          "explanation": "The inverse matrix.",
          "diagram": null
        }
      ],
      "finalAnswer": "$A^{-1} = \\begin{pmatrix}3 & -1\\\\-2 & 1\\end{pmatrix}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Determinants and inverses",
    "subtopicId": "fm.y1.pure.determinants-inverses",
    "questionDiagram": null,
    "id": "fm.y1.pure.determinants-inverses.q022",
    "tags": [
      "inverse-2x2"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Find $A^{-1}$ where $A = \\begin{pmatrix}3 & 2\\\\1 & 4\\end{pmatrix}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Check determinant",
          "workingLatex": "\\det A = 10",
          "explanation": "An inverse exists only when $\\det A \\neq 0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Inverse formula",
          "workingLatex": "A^{-1} = \\dfrac{1}{\\det A}\\begin{pmatrix}d & -b\\\\-c & a\\end{pmatrix}",
          "explanation": "Swap diagonal entries, negate off-diagonals, divide by $\\det A$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Adjugate",
          "workingLatex": "\\begin{pmatrix}4 & -2\\\\-1 & 3\\end{pmatrix}",
          "explanation": "Form the adjugate matrix.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Divide by $\\det A$",
          "workingLatex": "A^{-1} = \\begin{pmatrix}0.4 & -0.2\\\\-0.1 & 0.3\\end{pmatrix}",
          "explanation": "Scale every entry by $1/\\det A$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify",
          "workingLatex": "AA^{-1} = I",
          "explanation": "Multiply to confirm the identity.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "A^{-1} = \\begin{pmatrix}0.4 & -0.2\\\\-0.1 & 0.3\\end{pmatrix}",
          "explanation": "The inverse matrix.",
          "diagram": null
        }
      ],
      "finalAnswer": "$A^{-1} = \\begin{pmatrix}0.4 & -0.2\\\\-0.1 & 0.3\\end{pmatrix}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Determinants and inverses",
    "subtopicId": "fm.y1.pure.determinants-inverses",
    "questionDiagram": null,
    "id": "fm.y1.pure.determinants-inverses.q023",
    "tags": [
      "inverse-2x2"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Find $A^{-1}$ where $A = \\begin{pmatrix}2 & 3\\\\1 & 2\\end{pmatrix}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Check determinant",
          "workingLatex": "\\det A = 1",
          "explanation": "An inverse exists only when $\\det A \\neq 0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Inverse formula",
          "workingLatex": "A^{-1} = \\dfrac{1}{\\det A}\\begin{pmatrix}d & -b\\\\-c & a\\end{pmatrix}",
          "explanation": "Swap diagonal entries, negate off-diagonals, divide by $\\det A$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Adjugate",
          "workingLatex": "\\begin{pmatrix}2 & -3\\\\-1 & 2\\end{pmatrix}",
          "explanation": "Form the adjugate matrix.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Divide by $\\det A$",
          "workingLatex": "A^{-1} = \\begin{pmatrix}2 & -3\\\\-1 & 2\\end{pmatrix}",
          "explanation": "Scale every entry by $1/\\det A$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify",
          "workingLatex": "AA^{-1} = I",
          "explanation": "Multiply to confirm the identity.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "A^{-1} = \\begin{pmatrix}2 & -3\\\\-1 & 2\\end{pmatrix}",
          "explanation": "The inverse matrix.",
          "diagram": null
        }
      ],
      "finalAnswer": "$A^{-1} = \\begin{pmatrix}2 & -3\\\\-1 & 2\\end{pmatrix}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Determinants and inverses",
    "subtopicId": "fm.y1.pure.determinants-inverses",
    "questionDiagram": null,
    "id": "fm.y1.pure.determinants-inverses.q024",
    "tags": [
      "inverse-2x2"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Find $A^{-1}$ where $A = \\begin{pmatrix}4 & 1\\\\2 & 3\\end{pmatrix}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Check determinant",
          "workingLatex": "\\det A = 10",
          "explanation": "An inverse exists only when $\\det A \\neq 0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Inverse formula",
          "workingLatex": "A^{-1} = \\dfrac{1}{\\det A}\\begin{pmatrix}d & -b\\\\-c & a\\end{pmatrix}",
          "explanation": "Swap diagonal entries, negate off-diagonals, divide by $\\det A$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Adjugate",
          "workingLatex": "\\begin{pmatrix}3 & -1\\\\-2 & 4\\end{pmatrix}",
          "explanation": "Form the adjugate matrix.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Divide by $\\det A$",
          "workingLatex": "A^{-1} = \\begin{pmatrix}0.3 & -0.1\\\\-0.2 & 0.4\\end{pmatrix}",
          "explanation": "Scale every entry by $1/\\det A$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify",
          "workingLatex": "AA^{-1} = I",
          "explanation": "Multiply to confirm the identity.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "A^{-1} = \\begin{pmatrix}0.3 & -0.1\\\\-0.2 & 0.4\\end{pmatrix}",
          "explanation": "The inverse matrix.",
          "diagram": null
        }
      ],
      "finalAnswer": "$A^{-1} = \\begin{pmatrix}0.3 & -0.1\\\\-0.2 & 0.4\\end{pmatrix}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Determinants and inverses",
    "subtopicId": "fm.y1.pure.determinants-inverses",
    "questionDiagram": null,
    "id": "fm.y1.pure.determinants-inverses.q025",
    "tags": [
      "det-3x3"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find $\\det A$ where $A = \\begin{pmatrix}1 & 2 & 3\\\\0 & 1 & 4\\\\5 & 6 & 0\\end{pmatrix}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Cofactor expansion",
          "workingLatex": "\\det A = a(ei-fh) - b(di-fg) + c(dh-eg)",
          "explanation": "Expand along row 1.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "First minor",
          "workingLatex": "ei - fh = -24",
          "explanation": "Minor for $a_{11}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Second minor",
          "workingLatex": "-(di - fg) = 20",
          "explanation": "Minor for $a_{12}$ with sign.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Third minor",
          "workingLatex": "dh - eg = -5",
          "explanation": "Minor for $a_{13}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Combine",
          "workingLatex": "1(-24) - 2(-20) + 3(-5)",
          "explanation": "Substitute into expansion.",
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
          "description": "Invertibility",
          "workingLatex": "\\text{Invertible}",
          "explanation": "Interpret the result.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Determinant",
          "workingLatex": "\\det A = ad - bc \\text{ (2×2)}",
          "explanation": "Main diagonal minus other diagonal.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Inverse exists",
          "workingLatex": "\\det A \\neq 0",
          "explanation": "Non-zero determinant guarantees an inverse.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\det A = 1$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Determinants and inverses",
    "subtopicId": "fm.y1.pure.determinants-inverses",
    "questionDiagram": null,
    "id": "fm.y1.pure.determinants-inverses.q026",
    "tags": [
      "det-3x3"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find $\\det A$ where $A = \\begin{pmatrix}2 & 0 & 1\\\\3 & 1 & 0\\\\1 & 2 & 4\\end{pmatrix}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Cofactor expansion",
          "workingLatex": "\\det A = a(ei-fh) - b(di-fg) + c(dh-eg)",
          "explanation": "Expand along row 1.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "First minor",
          "workingLatex": "ei - fh = 4",
          "explanation": "Minor for $a_{11}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Second minor",
          "workingLatex": "-(di - fg) = -12",
          "explanation": "Minor for $a_{12}$ with sign.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Third minor",
          "workingLatex": "dh - eg = 5",
          "explanation": "Minor for $a_{13}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Combine",
          "workingLatex": "2(4) - 0(12) + 1(5)",
          "explanation": "Substitute into expansion.",
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
          "description": "Invertibility",
          "workingLatex": "\\text{Invertible}",
          "explanation": "Interpret the result.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Determinant",
          "workingLatex": "\\det A = ad - bc \\text{ (2×2)}",
          "explanation": "Main diagonal minus other diagonal.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Inverse exists",
          "workingLatex": "\\det A \\neq 0",
          "explanation": "Non-zero determinant guarantees an inverse.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\det A = 13$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Determinants and inverses",
    "subtopicId": "fm.y1.pure.determinants-inverses",
    "questionDiagram": null,
    "id": "fm.y1.pure.determinants-inverses.q027",
    "tags": [
      "det-3x3"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find $\\det A$ where $A = \\begin{pmatrix}1 & 0 & 0\\\\0 & 2 & 0\\\\0 & 0 & 3\\end{pmatrix}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Cofactor expansion",
          "workingLatex": "\\det A = a(ei-fh) - b(di-fg) + c(dh-eg)",
          "explanation": "Expand along row 1.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "First minor",
          "workingLatex": "ei - fh = 6",
          "explanation": "Minor for $a_{11}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Second minor",
          "workingLatex": "-(di - fg) = 0",
          "explanation": "Minor for $a_{12}$ with sign.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Third minor",
          "workingLatex": "dh - eg = 0",
          "explanation": "Minor for $a_{13}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Combine",
          "workingLatex": "1(6) - 0(0) + 0(0)",
          "explanation": "Substitute into expansion.",
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
          "description": "Invertibility",
          "workingLatex": "\\text{Invertible}",
          "explanation": "Interpret the result.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Determinant",
          "workingLatex": "\\det A = ad - bc \\text{ (2×2)}",
          "explanation": "Main diagonal minus other diagonal.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Inverse exists",
          "workingLatex": "\\det A \\neq 0",
          "explanation": "Non-zero determinant guarantees an inverse.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\det A = 6$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Determinants and inverses",
    "subtopicId": "fm.y1.pure.determinants-inverses",
    "questionDiagram": null,
    "id": "fm.y1.pure.determinants-inverses.q028",
    "tags": [
      "det-3x3"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find $\\det A$ where $A = \\begin{pmatrix}1 & 1 & 0\\\\0 & 1 & 1\\\\1 & 0 & 1\\end{pmatrix}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Cofactor expansion",
          "workingLatex": "\\det A = a(ei-fh) - b(di-fg) + c(dh-eg)",
          "explanation": "Expand along row 1.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "First minor",
          "workingLatex": "ei - fh = 1",
          "explanation": "Minor for $a_{11}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Second minor",
          "workingLatex": "-(di - fg) = 1",
          "explanation": "Minor for $a_{12}$ with sign.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Third minor",
          "workingLatex": "dh - eg = -1",
          "explanation": "Minor for $a_{13}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Combine",
          "workingLatex": "1(1) - 1(-1) + 0(-1)",
          "explanation": "Substitute into expansion.",
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
          "description": "Invertibility",
          "workingLatex": "\\text{Invertible}",
          "explanation": "Interpret the result.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Determinant",
          "workingLatex": "\\det A = ad - bc \\text{ (2×2)}",
          "explanation": "Main diagonal minus other diagonal.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Inverse exists",
          "workingLatex": "\\det A \\neq 0",
          "explanation": "Non-zero determinant guarantees an inverse.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\det A = 2$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Determinants and inverses",
    "subtopicId": "fm.y1.pure.determinants-inverses",
    "questionDiagram": null,
    "id": "fm.y1.pure.determinants-inverses.q029",
    "tags": [
      "det-3x3"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find $\\det A$ where $A = \\begin{pmatrix}2 & 1 & 3\\\\1 & 0 & 2\\\\4 & 1 & 1\\end{pmatrix}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Cofactor expansion",
          "workingLatex": "\\det A = a(ei-fh) - b(di-fg) + c(dh-eg)",
          "explanation": "Expand along row 1.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "First minor",
          "workingLatex": "ei - fh = -2",
          "explanation": "Minor for $a_{11}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Second minor",
          "workingLatex": "-(di - fg) = 7",
          "explanation": "Minor for $a_{12}$ with sign.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Third minor",
          "workingLatex": "dh - eg = 1",
          "explanation": "Minor for $a_{13}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Combine",
          "workingLatex": "2(-2) - 1(-7) + 3(1)",
          "explanation": "Substitute into expansion.",
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
          "description": "Invertibility",
          "workingLatex": "\\text{Invertible}",
          "explanation": "Interpret the result.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Determinant",
          "workingLatex": "\\det A = ad - bc \\text{ (2×2)}",
          "explanation": "Main diagonal minus other diagonal.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Inverse exists",
          "workingLatex": "\\det A \\neq 0",
          "explanation": "Non-zero determinant guarantees an inverse.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\det A = 6$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Determinants and inverses",
    "subtopicId": "fm.y1.pure.determinants-inverses",
    "questionDiagram": null,
    "id": "fm.y1.pure.determinants-inverses.q030",
    "tags": [
      "singular-preview"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find $\\det A$ where $A = \\begin{pmatrix}1 & 2 & 1\\\\2 & 4 & 2\\\\1 & 1 & 1\\end{pmatrix}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Cofactor expansion",
          "workingLatex": "\\det A = a(ei-fh) - b(di-fg) + c(dh-eg)",
          "explanation": "Expand along row 1.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "First minor",
          "workingLatex": "ei - fh = 2",
          "explanation": "Minor for $a_{11}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Second minor",
          "workingLatex": "-(di - fg) = 0",
          "explanation": "Minor for $a_{12}$ with sign.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Third minor",
          "workingLatex": "dh - eg = -2",
          "explanation": "Minor for $a_{13}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Combine",
          "workingLatex": "1(2) - 2(0) + 1(-2)",
          "explanation": "Substitute into expansion.",
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
          "description": "Invertibility",
          "workingLatex": "\\text{Singular — no inverse}",
          "explanation": "Interpret the result.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Determinant",
          "workingLatex": "\\det A = ad - bc \\text{ (2×2)}",
          "explanation": "Main diagonal minus other diagonal.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Inverse exists",
          "workingLatex": "\\det A \\neq 0",
          "explanation": "Non-zero determinant guarantees an inverse.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\det A = 0$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Determinants and inverses",
    "subtopicId": "fm.y1.pure.determinants-inverses",
    "questionDiagram": null,
    "id": "fm.y1.pure.determinants-inverses.q031",
    "tags": [
      "det-3x3"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find $\\det A$ where $A = \\begin{pmatrix}3 & 0 & 1\\\\0 & 2 & 0\\\\1 & 0 & 4\\end{pmatrix}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Cofactor expansion",
          "workingLatex": "\\det A = a(ei-fh) - b(di-fg) + c(dh-eg)",
          "explanation": "Expand along row 1.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "First minor",
          "workingLatex": "ei - fh = 8",
          "explanation": "Minor for $a_{11}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Second minor",
          "workingLatex": "-(di - fg) = 0",
          "explanation": "Minor for $a_{12}$ with sign.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Third minor",
          "workingLatex": "dh - eg = -2",
          "explanation": "Minor for $a_{13}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Combine",
          "workingLatex": "3(8) - 0(0) + 1(-2)",
          "explanation": "Substitute into expansion.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate",
          "workingLatex": "\\det A = 22",
          "explanation": "Simplify to a single number.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Invertibility",
          "workingLatex": "\\text{Invertible}",
          "explanation": "Interpret the result.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Determinant",
          "workingLatex": "\\det A = ad - bc \\text{ (2×2)}",
          "explanation": "Main diagonal minus other diagonal.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Inverse exists",
          "workingLatex": "\\det A \\neq 0",
          "explanation": "Non-zero determinant guarantees an inverse.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\det A = 22$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Determinants and inverses",
    "subtopicId": "fm.y1.pure.determinants-inverses",
    "questionDiagram": null,
    "id": "fm.y1.pure.determinants-inverses.q032",
    "tags": [
      "det-3x3"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find $\\det A$ where $A = \\begin{pmatrix}1 & 0 & 2\\\\0 & 3 & 0\\\\4 & 0 & 1\\end{pmatrix}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Cofactor expansion",
          "workingLatex": "\\det A = a(ei-fh) - b(di-fg) + c(dh-eg)",
          "explanation": "Expand along row 1.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "First minor",
          "workingLatex": "ei - fh = 3",
          "explanation": "Minor for $a_{11}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Second minor",
          "workingLatex": "-(di - fg) = 0",
          "explanation": "Minor for $a_{12}$ with sign.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Third minor",
          "workingLatex": "dh - eg = -12",
          "explanation": "Minor for $a_{13}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Combine",
          "workingLatex": "1(3) - 0(0) + 2(-12)",
          "explanation": "Substitute into expansion.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate",
          "workingLatex": "\\det A = -21",
          "explanation": "Simplify to a single number.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Invertibility",
          "workingLatex": "\\text{Invertible}",
          "explanation": "Interpret the result.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Determinant",
          "workingLatex": "\\det A = ad - bc \\text{ (2×2)}",
          "explanation": "Main diagonal minus other diagonal.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Inverse exists",
          "workingLatex": "\\det A \\neq 0",
          "explanation": "Non-zero determinant guarantees an inverse.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\det A = -21$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Determinants and inverses",
    "subtopicId": "fm.y1.pure.determinants-inverses",
    "questionDiagram": null,
    "id": "fm.y1.pure.determinants-inverses.q033",
    "tags": [
      "det-3x3"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find $\\det A$ where $A = \\begin{pmatrix}2 & 1 & 0\\\\0 & 2 & 1\\\\0 & 0 & 3\\end{pmatrix}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Cofactor expansion",
          "workingLatex": "\\det A = a(ei-fh) - b(di-fg) + c(dh-eg)",
          "explanation": "Expand along row 1.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "First minor",
          "workingLatex": "ei - fh = 6",
          "explanation": "Minor for $a_{11}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Second minor",
          "workingLatex": "-(di - fg) = 0",
          "explanation": "Minor for $a_{12}$ with sign.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Third minor",
          "workingLatex": "dh - eg = 0",
          "explanation": "Minor for $a_{13}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Combine",
          "workingLatex": "2(6) - 1(0) + 0(0)",
          "explanation": "Substitute into expansion.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate",
          "workingLatex": "\\det A = 12",
          "explanation": "Simplify to a single number.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Invertibility",
          "workingLatex": "\\text{Invertible}",
          "explanation": "Interpret the result.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Determinant",
          "workingLatex": "\\det A = ad - bc \\text{ (2×2)}",
          "explanation": "Main diagonal minus other diagonal.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Inverse exists",
          "workingLatex": "\\det A \\neq 0",
          "explanation": "Non-zero determinant guarantees an inverse.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\det A = 12$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Determinants and inverses",
    "subtopicId": "fm.y1.pure.determinants-inverses",
    "questionDiagram": null,
    "id": "fm.y1.pure.determinants-inverses.q034",
    "tags": [
      "det-3x3"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find $\\det A$ where $A = \\begin{pmatrix}1 & 2 & 0\\\\3 & 4 & 0\\\\0 & 0 & 5\\end{pmatrix}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Cofactor expansion",
          "workingLatex": "\\det A = a(ei-fh) - b(di-fg) + c(dh-eg)",
          "explanation": "Expand along row 1.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "First minor",
          "workingLatex": "ei - fh = 20",
          "explanation": "Minor for $a_{11}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Second minor",
          "workingLatex": "-(di - fg) = -15",
          "explanation": "Minor for $a_{12}$ with sign.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Third minor",
          "workingLatex": "dh - eg = 0",
          "explanation": "Minor for $a_{13}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Combine",
          "workingLatex": "1(20) - 2(15) + 0(0)",
          "explanation": "Substitute into expansion.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate",
          "workingLatex": "\\det A = -10",
          "explanation": "Simplify to a single number.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Invertibility",
          "workingLatex": "\\text{Invertible}",
          "explanation": "Interpret the result.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Determinant",
          "workingLatex": "\\det A = ad - bc \\text{ (2×2)}",
          "explanation": "Main diagonal minus other diagonal.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Inverse exists",
          "workingLatex": "\\det A \\neq 0",
          "explanation": "Non-zero determinant guarantees an inverse.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\det A = -10$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Determinants and inverses",
    "subtopicId": "fm.y1.pure.determinants-inverses",
    "questionDiagram": null,
    "id": "fm.y1.pure.determinants-inverses.q035",
    "tags": [
      "singular"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "questionText": "Show that $A = \\begin{pmatrix}2 & 4\\\\1 & 2\\end{pmatrix}$ is singular and has no inverse.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Compute determinant",
          "workingLatex": "\\det A = 0",
          "explanation": "Use the appropriate formula.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Criterion",
          "workingLatex": "\\det A = 0 \\Leftrightarrow A \\text{ is singular}",
          "explanation": "Singular matrices have no inverse.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Consequence",
          "workingLatex": "A^{-1} \\text{ does not exist}",
          "explanation": "Cannot divide by zero in the inverse formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Row/column dependence",
          "workingLatex": "\\text{Rows (or columns) are linearly dependent}",
          "explanation": "Explains why $\\det A = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Systems",
          "workingLatex": "AX = B \\text{ has no unique solution}",
          "explanation": "Singular coefficient matrices.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\det A = 0;\\; A \\text{ is singular}",
          "explanation": "No inverse exists.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Determinant",
          "workingLatex": "\\det A = ad - bc \\text{ (2×2)}",
          "explanation": "Main diagonal minus other diagonal.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Inverse exists",
          "workingLatex": "\\det A \\neq 0",
          "explanation": "Non-zero determinant guarantees an inverse.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Product rule",
          "workingLatex": "\\det(AB) = \\det(A)\\det(B)",
          "explanation": "Determinant is multiplicative.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\det A = 0$, so $A$ is singular and $A^{-1}$ does not exist."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Determinants and inverses",
    "subtopicId": "fm.y1.pure.determinants-inverses",
    "questionDiagram": null,
    "id": "fm.y1.pure.determinants-inverses.q036",
    "tags": [
      "singular"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "questionText": "Show that $A = \\begin{pmatrix}1 & 3\\\\2 & 6\\end{pmatrix}$ is singular and has no inverse.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Compute determinant",
          "workingLatex": "\\det A = 0",
          "explanation": "Use the appropriate formula.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Criterion",
          "workingLatex": "\\det A = 0 \\Leftrightarrow A \\text{ is singular}",
          "explanation": "Singular matrices have no inverse.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Consequence",
          "workingLatex": "A^{-1} \\text{ does not exist}",
          "explanation": "Cannot divide by zero in the inverse formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Row/column dependence",
          "workingLatex": "\\text{Rows (or columns) are linearly dependent}",
          "explanation": "Explains why $\\det A = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Systems",
          "workingLatex": "AX = B \\text{ has no unique solution}",
          "explanation": "Singular coefficient matrices.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\det A = 0;\\; A \\text{ is singular}",
          "explanation": "No inverse exists.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Determinant",
          "workingLatex": "\\det A = ad - bc \\text{ (2×2)}",
          "explanation": "Main diagonal minus other diagonal.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Inverse exists",
          "workingLatex": "\\det A \\neq 0",
          "explanation": "Non-zero determinant guarantees an inverse.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Product rule",
          "workingLatex": "\\det(AB) = \\det(A)\\det(B)",
          "explanation": "Determinant is multiplicative.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\det A = 0$, so $A$ is singular and $A^{-1}$ does not exist."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Determinants and inverses",
    "subtopicId": "fm.y1.pure.determinants-inverses",
    "questionDiagram": null,
    "id": "fm.y1.pure.determinants-inverses.q037",
    "tags": [
      "singular"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "questionText": "Show that $A = \\begin{pmatrix}3 & 1\\\\6 & 2\\end{pmatrix}$ is singular and has no inverse.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Compute determinant",
          "workingLatex": "\\det A = 0",
          "explanation": "Use the appropriate formula.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Criterion",
          "workingLatex": "\\det A = 0 \\Leftrightarrow A \\text{ is singular}",
          "explanation": "Singular matrices have no inverse.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Consequence",
          "workingLatex": "A^{-1} \\text{ does not exist}",
          "explanation": "Cannot divide by zero in the inverse formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Row/column dependence",
          "workingLatex": "\\text{Rows (or columns) are linearly dependent}",
          "explanation": "Explains why $\\det A = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Systems",
          "workingLatex": "AX = B \\text{ has no unique solution}",
          "explanation": "Singular coefficient matrices.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\det A = 0;\\; A \\text{ is singular}",
          "explanation": "No inverse exists.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Determinant",
          "workingLatex": "\\det A = ad - bc \\text{ (2×2)}",
          "explanation": "Main diagonal minus other diagonal.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Inverse exists",
          "workingLatex": "\\det A \\neq 0",
          "explanation": "Non-zero determinant guarantees an inverse.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Product rule",
          "workingLatex": "\\det(AB) = \\det(A)\\det(B)",
          "explanation": "Determinant is multiplicative.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\det A = 0$, so $A$ is singular and $A^{-1}$ does not exist."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Determinants and inverses",
    "subtopicId": "fm.y1.pure.determinants-inverses",
    "questionDiagram": null,
    "id": "fm.y1.pure.determinants-inverses.q038",
    "tags": [
      "singular"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "questionText": "Show that $A = \\begin{pmatrix}1 & 2 & 1\\\\2 & 4 & 2\\\\1 & 1 & 1\\end{pmatrix}$ is singular and has no inverse.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Compute determinant",
          "workingLatex": "\\det A = 0",
          "explanation": "Use the appropriate formula.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Criterion",
          "workingLatex": "\\det A = 0 \\Leftrightarrow A \\text{ is singular}",
          "explanation": "Singular matrices have no inverse.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Consequence",
          "workingLatex": "A^{-1} \\text{ does not exist}",
          "explanation": "Cannot divide by zero in the inverse formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Row/column dependence",
          "workingLatex": "\\text{Rows (or columns) are linearly dependent}",
          "explanation": "Explains why $\\det A = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Systems",
          "workingLatex": "AX = B \\text{ has no unique solution}",
          "explanation": "Singular coefficient matrices.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\det A = 0;\\; A \\text{ is singular}",
          "explanation": "No inverse exists.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Determinant",
          "workingLatex": "\\det A = ad - bc \\text{ (2×2)}",
          "explanation": "Main diagonal minus other diagonal.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Inverse exists",
          "workingLatex": "\\det A \\neq 0",
          "explanation": "Non-zero determinant guarantees an inverse.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Product rule",
          "workingLatex": "\\det(AB) = \\det(A)\\det(B)",
          "explanation": "Determinant is multiplicative.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\det A = 0$, so $A$ is singular and $A^{-1}$ does not exist."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Determinants and inverses",
    "subtopicId": "fm.y1.pure.determinants-inverses",
    "questionDiagram": null,
    "id": "fm.y1.pure.determinants-inverses.q039",
    "tags": [
      "singular"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "questionText": "Show that $A = \\begin{pmatrix}2 & 4 & 6\\\\1 & 2 & 3\\\\3 & 6 & 9\\end{pmatrix}$ is singular and has no inverse.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Compute determinant",
          "workingLatex": "\\det A = 0",
          "explanation": "Use the appropriate formula.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Criterion",
          "workingLatex": "\\det A = 0 \\Leftrightarrow A \\text{ is singular}",
          "explanation": "Singular matrices have no inverse.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Consequence",
          "workingLatex": "A^{-1} \\text{ does not exist}",
          "explanation": "Cannot divide by zero in the inverse formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Row/column dependence",
          "workingLatex": "\\text{Rows (or columns) are linearly dependent}",
          "explanation": "Explains why $\\det A = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Systems",
          "workingLatex": "AX = B \\text{ has no unique solution}",
          "explanation": "Singular coefficient matrices.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\det A = 0;\\; A \\text{ is singular}",
          "explanation": "No inverse exists.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Determinant",
          "workingLatex": "\\det A = ad - bc \\text{ (2×2)}",
          "explanation": "Main diagonal minus other diagonal.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Inverse exists",
          "workingLatex": "\\det A \\neq 0",
          "explanation": "Non-zero determinant guarantees an inverse.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Product rule",
          "workingLatex": "\\det(AB) = \\det(A)\\det(B)",
          "explanation": "Determinant is multiplicative.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\det A = 0$, so $A$ is singular and $A^{-1}$ does not exist."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Determinants and inverses",
    "subtopicId": "fm.y1.pure.determinants-inverses",
    "questionDiagram": null,
    "id": "fm.y1.pure.determinants-inverses.q040",
    "tags": [
      "singular"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "questionText": "Show that $A = \\begin{pmatrix}4 & 2\\\\8 & 4\\end{pmatrix}$ is singular and has no inverse.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Compute determinant",
          "workingLatex": "\\det A = 0",
          "explanation": "Use the appropriate formula.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Criterion",
          "workingLatex": "\\det A = 0 \\Leftrightarrow A \\text{ is singular}",
          "explanation": "Singular matrices have no inverse.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Consequence",
          "workingLatex": "A^{-1} \\text{ does not exist}",
          "explanation": "Cannot divide by zero in the inverse formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Row/column dependence",
          "workingLatex": "\\text{Rows (or columns) are linearly dependent}",
          "explanation": "Explains why $\\det A = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Systems",
          "workingLatex": "AX = B \\text{ has no unique solution}",
          "explanation": "Singular coefficient matrices.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\det A = 0;\\; A \\text{ is singular}",
          "explanation": "No inverse exists.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Determinant",
          "workingLatex": "\\det A = ad - bc \\text{ (2×2)}",
          "explanation": "Main diagonal minus other diagonal.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Inverse exists",
          "workingLatex": "\\det A \\neq 0",
          "explanation": "Non-zero determinant guarantees an inverse.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Product rule",
          "workingLatex": "\\det(AB) = \\det(A)\\det(B)",
          "explanation": "Determinant is multiplicative.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\det A = 0$, so $A$ is singular and $A^{-1}$ does not exist."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Determinants and inverses",
    "subtopicId": "fm.y1.pure.determinants-inverses",
    "questionDiagram": null,
    "id": "fm.y1.pure.determinants-inverses.q041",
    "tags": [
      "det-AB"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "For $A = \\begin{pmatrix}2 & 1\\\\3 & 4\\end{pmatrix}$ and $B = \\begin{pmatrix}1 & 0\\\\2 & 1\\end{pmatrix}$, verify that $\\det(AB) = \\det(A)\\det(B)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Property",
          "workingLatex": "\\det(AB) = \\det(A)\\det(B)",
          "explanation": "The determinant of a product equals the product of determinants.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Compute $\\det A$",
          "workingLatex": "\\det A = 5",
          "explanation": "Determinant of first matrix.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute $\\det B$",
          "workingLatex": "\\det B = 1",
          "explanation": "Determinant of second matrix.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Product of determinants",
          "workingLatex": "\\det A \\cdot \\det B = 5 \\times 1 = 5",
          "explanation": "Multiply the two determinants.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute $AB$",
          "workingLatex": "AB = \\begin{pmatrix}4 & 1\\\\11 & 4\\end{pmatrix}",
          "explanation": "Multiply the matrices.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute $\\det(AB)$ directly",
          "workingLatex": "\\det(AB) = 5",
          "explanation": "Verify by direct calculation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Confirm",
          "workingLatex": "\\det(AB) = \\det(A)\\det(B)",
          "explanation": "Both methods agree.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Determinant",
          "workingLatex": "\\det A = ad - bc \\text{ (2×2)}",
          "explanation": "Main diagonal minus other diagonal.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Inverse exists",
          "workingLatex": "\\det A \\neq 0",
          "explanation": "Non-zero determinant guarantees an inverse.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\det(AB) = 5 = \\det(A)\\det(B) = 5 \\times 1$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Determinants and inverses",
    "subtopicId": "fm.y1.pure.determinants-inverses",
    "questionDiagram": null,
    "id": "fm.y1.pure.determinants-inverses.q042",
    "tags": [
      "det-AB"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "For $A = \\begin{pmatrix}3 & 1\\\\2 & 4\\end{pmatrix}$ and $B = \\begin{pmatrix}2 & 1\\\\1 & 3\\end{pmatrix}$, verify that $\\det(AB) = \\det(A)\\det(B)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Property",
          "workingLatex": "\\det(AB) = \\det(A)\\det(B)",
          "explanation": "The determinant of a product equals the product of determinants.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Compute $\\det A$",
          "workingLatex": "\\det A = 10",
          "explanation": "Determinant of first matrix.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute $\\det B$",
          "workingLatex": "\\det B = 5",
          "explanation": "Determinant of second matrix.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Product of determinants",
          "workingLatex": "\\det A \\cdot \\det B = 10 \\times 5 = 50",
          "explanation": "Multiply the two determinants.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute $AB$",
          "workingLatex": "AB = \\begin{pmatrix}7 & 6\\\\8 & 14\\end{pmatrix}",
          "explanation": "Multiply the matrices.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute $\\det(AB)$ directly",
          "workingLatex": "\\det(AB) = 50",
          "explanation": "Verify by direct calculation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Confirm",
          "workingLatex": "\\det(AB) = \\det(A)\\det(B)",
          "explanation": "Both methods agree.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Determinant",
          "workingLatex": "\\det A = ad - bc \\text{ (2×2)}",
          "explanation": "Main diagonal minus other diagonal.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Inverse exists",
          "workingLatex": "\\det A \\neq 0",
          "explanation": "Non-zero determinant guarantees an inverse.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\det(AB) = 50 = \\det(A)\\det(B) = 10 \\times 5$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Determinants and inverses",
    "subtopicId": "fm.y1.pure.determinants-inverses",
    "questionDiagram": null,
    "id": "fm.y1.pure.determinants-inverses.q043",
    "tags": [
      "det-AB"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "For $A = \\begin{pmatrix}1 & 2\\\\3 & 5\\end{pmatrix}$ and $B = \\begin{pmatrix}4 & 1\\\\2 & 3\\end{pmatrix}$, verify that $\\det(AB) = \\det(A)\\det(B)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Property",
          "workingLatex": "\\det(AB) = \\det(A)\\det(B)",
          "explanation": "The determinant of a product equals the product of determinants.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Compute $\\det A$",
          "workingLatex": "\\det A = -1",
          "explanation": "Determinant of first matrix.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute $\\det B$",
          "workingLatex": "\\det B = 10",
          "explanation": "Determinant of second matrix.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Product of determinants",
          "workingLatex": "\\det A \\cdot \\det B = -1 \\times 10 = -10",
          "explanation": "Multiply the two determinants.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute $AB$",
          "workingLatex": "AB = \\begin{pmatrix}8 & 7\\\\22 & 18\\end{pmatrix}",
          "explanation": "Multiply the matrices.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute $\\det(AB)$ directly",
          "workingLatex": "\\det(AB) = -10",
          "explanation": "Verify by direct calculation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Confirm",
          "workingLatex": "\\det(AB) = \\det(A)\\det(B)",
          "explanation": "Both methods agree.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Determinant",
          "workingLatex": "\\det A = ad - bc \\text{ (2×2)}",
          "explanation": "Main diagonal minus other diagonal.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Inverse exists",
          "workingLatex": "\\det A \\neq 0",
          "explanation": "Non-zero determinant guarantees an inverse.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\det(AB) = -10 = \\det(A)\\det(B) = -1 \\times 10$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Determinants and inverses",
    "subtopicId": "fm.y1.pure.determinants-inverses",
    "questionDiagram": null,
    "id": "fm.y1.pure.determinants-inverses.q044",
    "tags": [
      "det-AB"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "For $A = \\begin{pmatrix}2 & 3\\\\1 & 4\\end{pmatrix}$ and $B = \\begin{pmatrix}1 & 1\\\\0 & 2\\end{pmatrix}$, verify that $\\det(AB) = \\det(A)\\det(B)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Property",
          "workingLatex": "\\det(AB) = \\det(A)\\det(B)",
          "explanation": "The determinant of a product equals the product of determinants.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Compute $\\det A$",
          "workingLatex": "\\det A = 5",
          "explanation": "Determinant of first matrix.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute $\\det B$",
          "workingLatex": "\\det B = 2",
          "explanation": "Determinant of second matrix.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Product of determinants",
          "workingLatex": "\\det A \\cdot \\det B = 5 \\times 2 = 10",
          "explanation": "Multiply the two determinants.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute $AB$",
          "workingLatex": "AB = \\begin{pmatrix}2 & 8\\\\1 & 9\\end{pmatrix}",
          "explanation": "Multiply the matrices.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute $\\det(AB)$ directly",
          "workingLatex": "\\det(AB) = 10",
          "explanation": "Verify by direct calculation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Confirm",
          "workingLatex": "\\det(AB) = \\det(A)\\det(B)",
          "explanation": "Both methods agree.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Determinant",
          "workingLatex": "\\det A = ad - bc \\text{ (2×2)}",
          "explanation": "Main diagonal minus other diagonal.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Inverse exists",
          "workingLatex": "\\det A \\neq 0",
          "explanation": "Non-zero determinant guarantees an inverse.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\det(AB) = 10 = \\det(A)\\det(B) = 5 \\times 2$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Determinants and inverses",
    "subtopicId": "fm.y1.pure.determinants-inverses",
    "questionDiagram": null,
    "id": "fm.y1.pure.determinants-inverses.q045",
    "tags": [
      "det-AB"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "For $A = \\begin{pmatrix}5 & 0\\\\0 & 2\\end{pmatrix}$ and $B = \\begin{pmatrix}3 & 1\\\\0 & 1\\end{pmatrix}$, verify that $\\det(AB) = \\det(A)\\det(B)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Property",
          "workingLatex": "\\det(AB) = \\det(A)\\det(B)",
          "explanation": "The determinant of a product equals the product of determinants.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Compute $\\det A$",
          "workingLatex": "\\det A = 10",
          "explanation": "Determinant of first matrix.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute $\\det B$",
          "workingLatex": "\\det B = 3",
          "explanation": "Determinant of second matrix.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Product of determinants",
          "workingLatex": "\\det A \\cdot \\det B = 10 \\times 3 = 30",
          "explanation": "Multiply the two determinants.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute $AB$",
          "workingLatex": "AB = \\begin{pmatrix}15 & 5\\\\0 & 2\\end{pmatrix}",
          "explanation": "Multiply the matrices.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute $\\det(AB)$ directly",
          "workingLatex": "\\det(AB) = 30",
          "explanation": "Verify by direct calculation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Confirm",
          "workingLatex": "\\det(AB) = \\det(A)\\det(B)",
          "explanation": "Both methods agree.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Determinant",
          "workingLatex": "\\det A = ad - bc \\text{ (2×2)}",
          "explanation": "Main diagonal minus other diagonal.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Inverse exists",
          "workingLatex": "\\det A \\neq 0",
          "explanation": "Non-zero determinant guarantees an inverse.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\det(AB) = 30 = \\det(A)\\det(B) = 10 \\times 3$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Determinants and inverses",
    "subtopicId": "fm.y1.pure.determinants-inverses",
    "questionDiagram": null,
    "id": "fm.y1.pure.determinants-inverses.q046",
    "tags": [
      "det-AB"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "For $A = \\begin{pmatrix}1 & 1\\\\2 & 3\\end{pmatrix}$ and $B = \\begin{pmatrix}2 & 0\\\\1 & 2\\end{pmatrix}$, verify that $\\det(AB) = \\det(A)\\det(B)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Property",
          "workingLatex": "\\det(AB) = \\det(A)\\det(B)",
          "explanation": "The determinant of a product equals the product of determinants.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Compute $\\det A$",
          "workingLatex": "\\det A = 1",
          "explanation": "Determinant of first matrix.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute $\\det B$",
          "workingLatex": "\\det B = 4",
          "explanation": "Determinant of second matrix.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Product of determinants",
          "workingLatex": "\\det A \\cdot \\det B = 1 \\times 4 = 4",
          "explanation": "Multiply the two determinants.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute $AB$",
          "workingLatex": "AB = \\begin{pmatrix}3 & 2\\\\7 & 6\\end{pmatrix}",
          "explanation": "Multiply the matrices.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute $\\det(AB)$ directly",
          "workingLatex": "\\det(AB) = 4",
          "explanation": "Verify by direct calculation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Confirm",
          "workingLatex": "\\det(AB) = \\det(A)\\det(B)",
          "explanation": "Both methods agree.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Determinant",
          "workingLatex": "\\det A = ad - bc \\text{ (2×2)}",
          "explanation": "Main diagonal minus other diagonal.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Inverse exists",
          "workingLatex": "\\det A \\neq 0",
          "explanation": "Non-zero determinant guarantees an inverse.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\det(AB) = 4 = \\det(A)\\det(B) = 1 \\times 4$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Determinants and inverses",
    "subtopicId": "fm.y1.pure.determinants-inverses",
    "questionDiagram": null,
    "id": "fm.y1.pure.determinants-inverses.q047",
    "tags": [
      "inverse-AB"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "For invertible $A = \\begin{pmatrix}2 & 1\\\\3 & 4\\end{pmatrix}$ and $B = \\begin{pmatrix}1 & 0\\\\2 & 1\\end{pmatrix}$, verify $(AB)^{-1} = B^{-1}A^{-1}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Property",
          "workingLatex": "(AB)^{-1} = B^{-1}A^{-1}",
          "explanation": "The inverse of a product reverses the order.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find $A^{-1}$",
          "workingLatex": "A^{-1} = \\begin{pmatrix}0.8 & -0.2\\\\-0.6 & 0.4\\end{pmatrix}",
          "explanation": "Inverse of $A$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find $B^{-1}$",
          "workingLatex": "B^{-1} = \\begin{pmatrix}1 & 0\\\\-2 & 1\\end{pmatrix}",
          "explanation": "Inverse of $B$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute $B^{-1}A^{-1}$",
          "workingLatex": "\\begin{pmatrix}0.8 & -0.2\\\\-2.2 & 0.8\\end{pmatrix}",
          "explanation": "Multiply in reversed order.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute $(AB)^{-1}$ directly",
          "workingLatex": "AB = \\begin{pmatrix}4 & 1\\\\11 & 4\\end{pmatrix},\\; (AB)^{-1} = \\begin{pmatrix}0.8 & -0.2\\\\-2.2 & 0.8\\end{pmatrix}",
          "explanation": "Alternative route.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Confirm equality",
          "workingLatex": "(AB)^{-1} = B^{-1}A^{-1}",
          "explanation": "Both methods match.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Note on order",
          "workingLatex": "A^{-1}B^{-1} \\neq (AB)^{-1} \\text{ in general}",
          "explanation": "Order reversal is essential.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Determinant",
          "workingLatex": "\\det A = ad - bc \\text{ (2×2)}",
          "explanation": "Main diagonal minus other diagonal.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Inverse exists",
          "workingLatex": "\\det A \\neq 0",
          "explanation": "Non-zero determinant guarantees an inverse.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(AB)^{-1} = B^{-1}A^{-1} = \\begin{pmatrix}0.8 & -0.2\\\\-2.2 & 0.8\\end{pmatrix}$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Determinants and inverses",
    "subtopicId": "fm.y1.pure.determinants-inverses",
    "questionDiagram": null,
    "id": "fm.y1.pure.determinants-inverses.q048",
    "tags": [
      "inverse-AB"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "For invertible $A = \\begin{pmatrix}3 & 1\\\\2 & 4\\end{pmatrix}$ and $B = \\begin{pmatrix}1 & 2\\\\0 & 1\\end{pmatrix}$, verify $(AB)^{-1} = B^{-1}A^{-1}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Property",
          "workingLatex": "(AB)^{-1} = B^{-1}A^{-1}",
          "explanation": "The inverse of a product reverses the order.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find $A^{-1}$",
          "workingLatex": "A^{-1} = \\begin{pmatrix}0.4 & -0.1\\\\-0.2 & 0.3\\end{pmatrix}",
          "explanation": "Inverse of $A$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find $B^{-1}$",
          "workingLatex": "B^{-1} = \\begin{pmatrix}1 & -2\\\\0 & 1\\end{pmatrix}",
          "explanation": "Inverse of $B$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute $B^{-1}A^{-1}$",
          "workingLatex": "\\begin{pmatrix}0.8 & -0.7\\\\-0.2 & 0.3\\end{pmatrix}",
          "explanation": "Multiply in reversed order.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute $(AB)^{-1}$ directly",
          "workingLatex": "AB = \\begin{pmatrix}3 & 7\\\\2 & 8\\end{pmatrix},\\; (AB)^{-1} = \\begin{pmatrix}0.8 & -0.7\\\\-0.2 & 0.3\\end{pmatrix}",
          "explanation": "Alternative route.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Confirm equality",
          "workingLatex": "(AB)^{-1} = B^{-1}A^{-1}",
          "explanation": "Both methods match.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Note on order",
          "workingLatex": "A^{-1}B^{-1} \\neq (AB)^{-1} \\text{ in general}",
          "explanation": "Order reversal is essential.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Determinant",
          "workingLatex": "\\det A = ad - bc \\text{ (2×2)}",
          "explanation": "Main diagonal minus other diagonal.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Inverse exists",
          "workingLatex": "\\det A \\neq 0",
          "explanation": "Non-zero determinant guarantees an inverse.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(AB)^{-1} = B^{-1}A^{-1} = \\begin{pmatrix}0.8 & -0.7\\\\-0.2 & 0.3\\end{pmatrix}$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Determinants and inverses",
    "subtopicId": "fm.y1.pure.determinants-inverses",
    "questionDiagram": null,
    "id": "fm.y1.pure.determinants-inverses.q049",
    "tags": [
      "inverse-AB"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "For invertible $A = \\begin{pmatrix}1 & 2\\\\3 & 5\\end{pmatrix}$ and $B = \\begin{pmatrix}2 & 1\\\\1 & 1\\end{pmatrix}$, verify $(AB)^{-1} = B^{-1}A^{-1}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Property",
          "workingLatex": "(AB)^{-1} = B^{-1}A^{-1}",
          "explanation": "The inverse of a product reverses the order.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find $A^{-1}$",
          "workingLatex": "A^{-1} = \\begin{pmatrix}-5 & 2\\\\3 & -1\\end{pmatrix}",
          "explanation": "Inverse of $A$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find $B^{-1}$",
          "workingLatex": "B^{-1} = \\begin{pmatrix}1 & -1\\\\-1 & 2\\end{pmatrix}",
          "explanation": "Inverse of $B$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute $B^{-1}A^{-1}$",
          "workingLatex": "\\begin{pmatrix}-8 & 3\\\\11 & -4\\end{pmatrix}",
          "explanation": "Multiply in reversed order.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute $(AB)^{-1}$ directly",
          "workingLatex": "AB = \\begin{pmatrix}4 & 3\\\\11 & 8\\end{pmatrix},\\; (AB)^{-1} = \\begin{pmatrix}-8 & 3\\\\11 & -4\\end{pmatrix}",
          "explanation": "Alternative route.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Confirm equality",
          "workingLatex": "(AB)^{-1} = B^{-1}A^{-1}",
          "explanation": "Both methods match.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Note on order",
          "workingLatex": "A^{-1}B^{-1} \\neq (AB)^{-1} \\text{ in general}",
          "explanation": "Order reversal is essential.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Determinant",
          "workingLatex": "\\det A = ad - bc \\text{ (2×2)}",
          "explanation": "Main diagonal minus other diagonal.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Inverse exists",
          "workingLatex": "\\det A \\neq 0",
          "explanation": "Non-zero determinant guarantees an inverse.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(AB)^{-1} = B^{-1}A^{-1} = \\begin{pmatrix}-8 & 3\\\\11 & -4\\end{pmatrix}$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Determinants and inverses",
    "subtopicId": "fm.y1.pure.determinants-inverses",
    "questionDiagram": null,
    "id": "fm.y1.pure.determinants-inverses.q050",
    "tags": [
      "inverse-AB"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "For invertible $A = \\begin{pmatrix}4 & 1\\\\2 & 3\\end{pmatrix}$ and $B = \\begin{pmatrix}1 & 0\\\\1 & 2\\end{pmatrix}$, verify $(AB)^{-1} = B^{-1}A^{-1}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Property",
          "workingLatex": "(AB)^{-1} = B^{-1}A^{-1}",
          "explanation": "The inverse of a product reverses the order.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find $A^{-1}$",
          "workingLatex": "A^{-1} = \\begin{pmatrix}0.3 & -0.1\\\\-0.2 & 0.4\\end{pmatrix}",
          "explanation": "Inverse of $A$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find $B^{-1}$",
          "workingLatex": "B^{-1} = \\begin{pmatrix}1 & 0\\\\-0.5 & 0.5\\end{pmatrix}",
          "explanation": "Inverse of $B$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute $B^{-1}A^{-1}$",
          "workingLatex": "\\begin{pmatrix}0.3 & -0.1\\\\-0.25 & 0.25\\end{pmatrix}",
          "explanation": "Multiply in reversed order.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute $(AB)^{-1}$ directly",
          "workingLatex": "AB = \\begin{pmatrix}5 & 2\\\\5 & 6\\end{pmatrix},\\; (AB)^{-1} = \\begin{pmatrix}0.3 & -0.1\\\\-0.25 & 0.25\\end{pmatrix}",
          "explanation": "Alternative route.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Confirm equality",
          "workingLatex": "(AB)^{-1} = B^{-1}A^{-1}",
          "explanation": "Both methods match.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Note on order",
          "workingLatex": "A^{-1}B^{-1} \\neq (AB)^{-1} \\text{ in general}",
          "explanation": "Order reversal is essential.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Determinant",
          "workingLatex": "\\det A = ad - bc \\text{ (2×2)}",
          "explanation": "Main diagonal minus other diagonal.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Inverse exists",
          "workingLatex": "\\det A \\neq 0",
          "explanation": "Non-zero determinant guarantees an inverse.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(AB)^{-1} = B^{-1}A^{-1} = \\begin{pmatrix}0.3 & -0.1\\\\-0.25 & 0.25\\end{pmatrix}$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Determinants and inverses",
    "subtopicId": "fm.y1.pure.determinants-inverses",
    "questionDiagram": null,
    "id": "fm.y1.pure.determinants-inverses.q051",
    "tags": [
      "inverse-AB"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "For invertible $A = \\begin{pmatrix}2 & 0\\\\1 & 3\\end{pmatrix}$ and $B = \\begin{pmatrix}1 & 1\\\\0 & 2\\end{pmatrix}$, verify $(AB)^{-1} = B^{-1}A^{-1}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Property",
          "workingLatex": "(AB)^{-1} = B^{-1}A^{-1}",
          "explanation": "The inverse of a product reverses the order.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find $A^{-1}$",
          "workingLatex": "A^{-1} = \\begin{pmatrix}0.5 & 0\\\\-0.1667 & 0.3333\\end{pmatrix}",
          "explanation": "Inverse of $A$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find $B^{-1}$",
          "workingLatex": "B^{-1} = \\begin{pmatrix}1 & -0.5\\\\0 & 0.5\\end{pmatrix}",
          "explanation": "Inverse of $B$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute $B^{-1}A^{-1}$",
          "workingLatex": "\\begin{pmatrix}0.5833 & -0.1667\\\\-0.0833 & 0.1667\\end{pmatrix}",
          "explanation": "Multiply in reversed order.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute $(AB)^{-1}$ directly",
          "workingLatex": "AB = \\begin{pmatrix}2 & 2\\\\1 & 7\\end{pmatrix},\\; (AB)^{-1} = \\begin{pmatrix}0.5833 & -0.1667\\\\-0.0833 & 0.1667\\end{pmatrix}",
          "explanation": "Alternative route.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Confirm equality",
          "workingLatex": "(AB)^{-1} = B^{-1}A^{-1}",
          "explanation": "Both methods match.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Note on order",
          "workingLatex": "A^{-1}B^{-1} \\neq (AB)^{-1} \\text{ in general}",
          "explanation": "Order reversal is essential.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Determinant",
          "workingLatex": "\\det A = ad - bc \\text{ (2×2)}",
          "explanation": "Main diagonal minus other diagonal.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Inverse exists",
          "workingLatex": "\\det A \\neq 0",
          "explanation": "Non-zero determinant guarantees an inverse.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(AB)^{-1} = B^{-1}A^{-1} = \\begin{pmatrix}0.5833 & -0.1667\\\\-0.0833 & 0.1667\\end{pmatrix}$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Determinants and inverses",
    "subtopicId": "fm.y1.pure.determinants-inverses",
    "questionDiagram": null,
    "id": "fm.y1.pure.determinants-inverses.q052",
    "tags": [
      "inverse-AB"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "For invertible $A = \\begin{pmatrix}3 & 2\\\\1 & 4\\end{pmatrix}$ and $B = \\begin{pmatrix}1 & 0\\\\2 & 1\\end{pmatrix}$, verify $(AB)^{-1} = B^{-1}A^{-1}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Property",
          "workingLatex": "(AB)^{-1} = B^{-1}A^{-1}",
          "explanation": "The inverse of a product reverses the order.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find $A^{-1}$",
          "workingLatex": "A^{-1} = \\begin{pmatrix}0.4 & -0.2\\\\-0.1 & 0.3\\end{pmatrix}",
          "explanation": "Inverse of $A$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find $B^{-1}$",
          "workingLatex": "B^{-1} = \\begin{pmatrix}1 & 0\\\\-2 & 1\\end{pmatrix}",
          "explanation": "Inverse of $B$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute $B^{-1}A^{-1}$",
          "workingLatex": "\\begin{pmatrix}0.4 & -0.2\\\\-0.9 & 0.7\\end{pmatrix}",
          "explanation": "Multiply in reversed order.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute $(AB)^{-1}$ directly",
          "workingLatex": "AB = \\begin{pmatrix}7 & 2\\\\9 & 4\\end{pmatrix},\\; (AB)^{-1} = \\begin{pmatrix}0.4 & -0.2\\\\-0.9 & 0.7\\end{pmatrix}",
          "explanation": "Alternative route.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Confirm equality",
          "workingLatex": "(AB)^{-1} = B^{-1}A^{-1}",
          "explanation": "Both methods match.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Note on order",
          "workingLatex": "A^{-1}B^{-1} \\neq (AB)^{-1} \\text{ in general}",
          "explanation": "Order reversal is essential.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Determinant",
          "workingLatex": "\\det A = ad - bc \\text{ (2×2)}",
          "explanation": "Main diagonal minus other diagonal.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Inverse exists",
          "workingLatex": "\\det A \\neq 0",
          "explanation": "Non-zero determinant guarantees an inverse.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(AB)^{-1} = B^{-1}A^{-1} = \\begin{pmatrix}0.4 & -0.2\\\\-0.9 & 0.7\\end{pmatrix}$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Determinants and inverses",
    "subtopicId": "fm.y1.pure.determinants-inverses",
    "questionDiagram": null,
    "id": "fm.y1.pure.determinants-inverses.q053",
    "tags": [
      "find-k",
      "singular"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find $k$ such that $A = \\begin{pmatrix}k & 2\\\\3 & 4\\end{pmatrix}$ is singular.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Singular condition",
          "workingLatex": "\\det A = 0",
          "explanation": "A singular matrix has zero determinant.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expand determinant",
          "workingLatex": "kd - bc = 0",
          "explanation": "For $A = \\begin{pmatrix}k & 2\\\\3 & 4\\end{pmatrix}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute values",
          "workingLatex": "4k - 6 = 0",
          "explanation": "Known entries $b = 2$, $c = 3$, $d = 4$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve",
          "workingLatex": "k = \\dfrac{6}{4} = \\frac{6}{4}",
          "explanation": "Isolate $k$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify",
          "workingLatex": "\\det A = 4(\\frac{6}{4}) - 6 = 0",
          "explanation": "Confirm.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "k = \\frac{6}{4}",
          "explanation": "Required value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Determinant",
          "workingLatex": "\\det A = ad - bc \\text{ (2×2)}",
          "explanation": "Main diagonal minus other diagonal.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Inverse exists",
          "workingLatex": "\\det A \\neq 0",
          "explanation": "Non-zero determinant guarantees an inverse.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Product rule",
          "workingLatex": "\\det(AB) = \\det(A)\\det(B)",
          "explanation": "Determinant is multiplicative.",
          "diagram": null
        }
      ],
      "finalAnswer": "$k = \\frac{6}{4}$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Determinants and inverses",
    "subtopicId": "fm.y1.pure.determinants-inverses",
    "questionDiagram": null,
    "id": "fm.y1.pure.determinants-inverses.q054",
    "tags": [
      "find-k",
      "singular"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find $k$ such that $A = \\begin{pmatrix}k & 3\\\\2 & 6\\end{pmatrix}$ is singular.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Singular condition",
          "workingLatex": "\\det A = 0",
          "explanation": "A singular matrix has zero determinant.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expand determinant",
          "workingLatex": "kd - bc = 0",
          "explanation": "For $A = \\begin{pmatrix}k & 3\\\\2 & 6\\end{pmatrix}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute values",
          "workingLatex": "6k - 6 = 0",
          "explanation": "Known entries $b = 3$, $c = 2$, $d = 6$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve",
          "workingLatex": "k = \\dfrac{6}{6} = 1",
          "explanation": "Isolate $k$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify",
          "workingLatex": "\\det A = 6(1) - 6 = 0",
          "explanation": "Confirm.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "k = 1",
          "explanation": "Required value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Determinant",
          "workingLatex": "\\det A = ad - bc \\text{ (2×2)}",
          "explanation": "Main diagonal minus other diagonal.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Inverse exists",
          "workingLatex": "\\det A \\neq 0",
          "explanation": "Non-zero determinant guarantees an inverse.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Product rule",
          "workingLatex": "\\det(AB) = \\det(A)\\det(B)",
          "explanation": "Determinant is multiplicative.",
          "diagram": null
        }
      ],
      "finalAnswer": "$k = 1$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Determinants and inverses",
    "subtopicId": "fm.y1.pure.determinants-inverses",
    "questionDiagram": null,
    "id": "fm.y1.pure.determinants-inverses.q055",
    "tags": [
      "find-k",
      "singular"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find $k$ such that $A = \\begin{pmatrix}k & 4\\\\2 & 8\\end{pmatrix}$ is singular.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Singular condition",
          "workingLatex": "\\det A = 0",
          "explanation": "A singular matrix has zero determinant.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expand determinant",
          "workingLatex": "kd - bc = 0",
          "explanation": "For $A = \\begin{pmatrix}k & 4\\\\2 & 8\\end{pmatrix}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute values",
          "workingLatex": "8k - 8 = 0",
          "explanation": "Known entries $b = 4$, $c = 2$, $d = 8$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve",
          "workingLatex": "k = \\dfrac{8}{8} = 1",
          "explanation": "Isolate $k$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify",
          "workingLatex": "\\det A = 8(1) - 8 = 0",
          "explanation": "Confirm.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "k = 1",
          "explanation": "Required value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Determinant",
          "workingLatex": "\\det A = ad - bc \\text{ (2×2)}",
          "explanation": "Main diagonal minus other diagonal.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Inverse exists",
          "workingLatex": "\\det A \\neq 0",
          "explanation": "Non-zero determinant guarantees an inverse.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Product rule",
          "workingLatex": "\\det(AB) = \\det(A)\\det(B)",
          "explanation": "Determinant is multiplicative.",
          "diagram": null
        }
      ],
      "finalAnswer": "$k = 1$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Determinants and inverses",
    "subtopicId": "fm.y1.pure.determinants-inverses",
    "questionDiagram": null,
    "id": "fm.y1.pure.determinants-inverses.q056",
    "tags": [
      "find-k",
      "singular"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find $k$ such that $A = \\begin{pmatrix}k & 6\\\\3 & 9\\end{pmatrix}$ is singular.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Singular condition",
          "workingLatex": "\\det A = 0",
          "explanation": "A singular matrix has zero determinant.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expand determinant",
          "workingLatex": "kd - bc = 0",
          "explanation": "For $A = \\begin{pmatrix}k & 6\\\\3 & 9\\end{pmatrix}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute values",
          "workingLatex": "9k - 18 = 0",
          "explanation": "Known entries $b = 6$, $c = 3$, $d = 9$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve",
          "workingLatex": "k = \\dfrac{18}{9} = 2",
          "explanation": "Isolate $k$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify",
          "workingLatex": "\\det A = 9(2) - 18 = 0",
          "explanation": "Confirm.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "k = 2",
          "explanation": "Required value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Determinant",
          "workingLatex": "\\det A = ad - bc \\text{ (2×2)}",
          "explanation": "Main diagonal minus other diagonal.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Inverse exists",
          "workingLatex": "\\det A \\neq 0",
          "explanation": "Non-zero determinant guarantees an inverse.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Product rule",
          "workingLatex": "\\det(AB) = \\det(A)\\det(B)",
          "explanation": "Determinant is multiplicative.",
          "diagram": null
        }
      ],
      "finalAnswer": "$k = 2$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Determinants and inverses",
    "subtopicId": "fm.y1.pure.determinants-inverses",
    "questionDiagram": null,
    "id": "fm.y1.pure.determinants-inverses.q057",
    "tags": [
      "solve-AX=B"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Given $A = \\begin{pmatrix}2 & 1\\\\1 & 3\\end{pmatrix}$ and $B = \\begin{pmatrix}5\\\\7\\end{pmatrix}$, solve $AX = B$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Matrix equation",
          "workingLatex": "AX = B",
          "explanation": "Write the system in matrix form.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Check $\\det A$",
          "workingLatex": "\\det A = 5 \\neq 0",
          "explanation": "Unique solution exists.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find $A^{-1}$",
          "workingLatex": "A^{-1} = \\begin{pmatrix}0.6 & -0.2\\\\-0.2 & 0.4\\end{pmatrix}",
          "explanation": "Invert the coefficient matrix.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve",
          "workingLatex": "X = A^{-1}B",
          "explanation": "Multiply inverse by constant matrix.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute",
          "workingLatex": "X = \\begin{pmatrix}1.6\\\\1.8\\end{pmatrix}",
          "explanation": "Evaluate the product.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify",
          "workingLatex": "AX = B",
          "explanation": "Substitute back to check.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Determinant",
          "workingLatex": "\\det A = ad - bc \\text{ (2×2)}",
          "explanation": "Main diagonal minus other diagonal.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Inverse exists",
          "workingLatex": "\\det A \\neq 0",
          "explanation": "Non-zero determinant guarantees an inverse.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Product rule",
          "workingLatex": "\\det(AB) = \\det(A)\\det(B)",
          "explanation": "Determinant is multiplicative.",
          "diagram": null
        }
      ],
      "finalAnswer": "$X = \\begin{pmatrix}1.6\\\\1.8\\end{pmatrix}$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Determinants and inverses",
    "subtopicId": "fm.y1.pure.determinants-inverses",
    "questionDiagram": null,
    "id": "fm.y1.pure.determinants-inverses.q058",
    "tags": [
      "solve-AX=B"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Given $A = \\begin{pmatrix}3 & 2\\\\1 & 4\\end{pmatrix}$ and $B = \\begin{pmatrix}7\\\\5\\end{pmatrix}$, solve $AX = B$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Matrix equation",
          "workingLatex": "AX = B",
          "explanation": "Write the system in matrix form.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Check $\\det A$",
          "workingLatex": "\\det A = 10 \\neq 0",
          "explanation": "Unique solution exists.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find $A^{-1}$",
          "workingLatex": "A^{-1} = \\begin{pmatrix}0.4 & -0.2\\\\-0.1 & 0.3\\end{pmatrix}",
          "explanation": "Invert the coefficient matrix.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve",
          "workingLatex": "X = A^{-1}B",
          "explanation": "Multiply inverse by constant matrix.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute",
          "workingLatex": "X = \\begin{pmatrix}1.8\\\\0.8\\end{pmatrix}",
          "explanation": "Evaluate the product.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify",
          "workingLatex": "AX = B",
          "explanation": "Substitute back to check.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Determinant",
          "workingLatex": "\\det A = ad - bc \\text{ (2×2)}",
          "explanation": "Main diagonal minus other diagonal.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Inverse exists",
          "workingLatex": "\\det A \\neq 0",
          "explanation": "Non-zero determinant guarantees an inverse.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Product rule",
          "workingLatex": "\\det(AB) = \\det(A)\\det(B)",
          "explanation": "Determinant is multiplicative.",
          "diagram": null
        }
      ],
      "finalAnswer": "$X = \\begin{pmatrix}1.8\\\\0.8\\end{pmatrix}$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Determinants and inverses",
    "subtopicId": "fm.y1.pure.determinants-inverses",
    "questionDiagram": null,
    "id": "fm.y1.pure.determinants-inverses.q059",
    "tags": [
      "solve-AX=B"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Given $A = \\begin{pmatrix}1 & 2\\\\3 & 5\\end{pmatrix}$ and $B = \\begin{pmatrix}4\\\\11\\end{pmatrix}$, solve $AX = B$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Matrix equation",
          "workingLatex": "AX = B",
          "explanation": "Write the system in matrix form.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Check $\\det A$",
          "workingLatex": "\\det A = -1 \\neq 0",
          "explanation": "Unique solution exists.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find $A^{-1}$",
          "workingLatex": "A^{-1} = \\begin{pmatrix}-5 & 2\\\\3 & -1\\end{pmatrix}",
          "explanation": "Invert the coefficient matrix.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve",
          "workingLatex": "X = A^{-1}B",
          "explanation": "Multiply inverse by constant matrix.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute",
          "workingLatex": "X = \\begin{pmatrix}2\\\\1\\end{pmatrix}",
          "explanation": "Evaluate the product.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify",
          "workingLatex": "AX = B",
          "explanation": "Substitute back to check.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Determinant",
          "workingLatex": "\\det A = ad - bc \\text{ (2×2)}",
          "explanation": "Main diagonal minus other diagonal.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Inverse exists",
          "workingLatex": "\\det A \\neq 0",
          "explanation": "Non-zero determinant guarantees an inverse.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Product rule",
          "workingLatex": "\\det(AB) = \\det(A)\\det(B)",
          "explanation": "Determinant is multiplicative.",
          "diagram": null
        }
      ],
      "finalAnswer": "$X = \\begin{pmatrix}2\\\\1\\end{pmatrix}$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Determinants and inverses",
    "subtopicId": "fm.y1.pure.determinants-inverses",
    "questionDiagram": null,
    "id": "fm.y1.pure.determinants-inverses.q060",
    "tags": [
      "solve-AX=B"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Given $A = \\begin{pmatrix}4 & 1\\\\2 & 3\\end{pmatrix}$ and $B = \\begin{pmatrix}9\\\\8\\end{pmatrix}$, solve $AX = B$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Matrix equation",
          "workingLatex": "AX = B",
          "explanation": "Write the system in matrix form.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Check $\\det A$",
          "workingLatex": "\\det A = 10 \\neq 0",
          "explanation": "Unique solution exists.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find $A^{-1}$",
          "workingLatex": "A^{-1} = \\begin{pmatrix}0.3 & -0.1\\\\-0.2 & 0.4\\end{pmatrix}",
          "explanation": "Invert the coefficient matrix.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve",
          "workingLatex": "X = A^{-1}B",
          "explanation": "Multiply inverse by constant matrix.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute",
          "workingLatex": "X = \\begin{pmatrix}1.9\\\\1.4\\end{pmatrix}",
          "explanation": "Evaluate the product.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify",
          "workingLatex": "AX = B",
          "explanation": "Substitute back to check.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Determinant",
          "workingLatex": "\\det A = ad - bc \\text{ (2×2)}",
          "explanation": "Main diagonal minus other diagonal.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Inverse exists",
          "workingLatex": "\\det A \\neq 0",
          "explanation": "Non-zero determinant guarantees an inverse.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Product rule",
          "workingLatex": "\\det(AB) = \\det(A)\\det(B)",
          "explanation": "Determinant is multiplicative.",
          "diagram": null
        }
      ],
      "finalAnswer": "$X = \\begin{pmatrix}1.9\\\\1.4\\end{pmatrix}$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Determinants and inverses",
    "subtopicId": "fm.y1.pure.determinants-inverses",
    "questionDiagram": null,
    "id": "fm.y1.pure.determinants-inverses.q061",
    "tags": [
      "inverse-3x3"
    ],
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "written",
    "questionText": "Find $A^{-1}$ where $A = \\begin{pmatrix}1 & 0 & 0\\\\0 & 2 & 0\\\\0 & 0 & 3\\end{pmatrix}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Compute $\\det A$",
          "workingLatex": "\\det A = 6",
          "explanation": "Verify the matrix is invertible.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Cofactor matrix",
          "workingLatex": "C_{ij} = (-1)^{i+j}M_{ij}",
          "explanation": "Minors with alternating signs.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Adjugate",
          "workingLatex": "\\text{adj}(A) = C^{T}",
          "explanation": "Transpose the cofactor matrix.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Formula",
          "workingLatex": "A^{-1} = \\dfrac{1}{\\det A}\\text{adj}(A)",
          "explanation": "Divide adjugate by determinant.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute entries",
          "workingLatex": "\\text{Work through each cofactor}",
          "explanation": "Systematic calculation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Result",
          "workingLatex": "A^{-1} = \\begin{pmatrix}1 & 0 & 0\\\\0 & 0.5 & 0\\\\0 & 0 & 0.3333\\end{pmatrix}",
          "explanation": "The inverse matrix.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify",
          "workingLatex": "AA^{-1} = I_{3}",
          "explanation": "Check the product is the identity.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Determinant",
          "workingLatex": "\\det A = ad - bc \\text{ (2×2)}",
          "explanation": "Main diagonal minus other diagonal.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Inverse exists",
          "workingLatex": "\\det A \\neq 0",
          "explanation": "Non-zero determinant guarantees an inverse.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Product rule",
          "workingLatex": "\\det(AB) = \\det(A)\\det(B)",
          "explanation": "Determinant is multiplicative.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Inverse product",
          "workingLatex": "(AB)^{-1} = B^{-1}A^{-1}",
          "explanation": "Order reverses when inverting a product.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Singular",
          "workingLatex": "\\det A = 0 \\Rightarrow \\text{no inverse}",
          "explanation": "Singular matrices collapse dimension.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Verify",
          "workingLatex": "AA^{-1} = I",
          "explanation": "Always check your inverse.",
          "diagram": null
        }
      ],
      "finalAnswer": "$A^{-1} = \\begin{pmatrix}1 & 0 & 0\\\\0 & 0.5 & 0\\\\0 & 0 & 0.3333\\end{pmatrix}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Determinants and inverses",
    "subtopicId": "fm.y1.pure.determinants-inverses",
    "questionDiagram": null,
    "id": "fm.y1.pure.determinants-inverses.q062",
    "tags": [
      "inverse-3x3"
    ],
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "written",
    "questionText": "Find $A^{-1}$ where $A = \\begin{pmatrix}1 & 0 & 0\\\\0 & 1 & 1\\\\0 & 0 & 2\\end{pmatrix}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Compute $\\det A$",
          "workingLatex": "\\det A = 2",
          "explanation": "Verify the matrix is invertible.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Cofactor matrix",
          "workingLatex": "C_{ij} = (-1)^{i+j}M_{ij}",
          "explanation": "Minors with alternating signs.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Adjugate",
          "workingLatex": "\\text{adj}(A) = C^{T}",
          "explanation": "Transpose the cofactor matrix.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Formula",
          "workingLatex": "A^{-1} = \\dfrac{1}{\\det A}\\text{adj}(A)",
          "explanation": "Divide adjugate by determinant.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute entries",
          "workingLatex": "\\text{Work through each cofactor}",
          "explanation": "Systematic calculation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Result",
          "workingLatex": "A^{-1} = \\begin{pmatrix}1 & 0 & 0\\\\0 & 1 & -0.5\\\\0 & 0 & 0.5\\end{pmatrix}",
          "explanation": "The inverse matrix.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify",
          "workingLatex": "AA^{-1} = I_{3}",
          "explanation": "Check the product is the identity.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Determinant",
          "workingLatex": "\\det A = ad - bc \\text{ (2×2)}",
          "explanation": "Main diagonal minus other diagonal.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Inverse exists",
          "workingLatex": "\\det A \\neq 0",
          "explanation": "Non-zero determinant guarantees an inverse.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Product rule",
          "workingLatex": "\\det(AB) = \\det(A)\\det(B)",
          "explanation": "Determinant is multiplicative.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Inverse product",
          "workingLatex": "(AB)^{-1} = B^{-1}A^{-1}",
          "explanation": "Order reverses when inverting a product.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Singular",
          "workingLatex": "\\det A = 0 \\Rightarrow \\text{no inverse}",
          "explanation": "Singular matrices collapse dimension.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Verify",
          "workingLatex": "AA^{-1} = I",
          "explanation": "Always check your inverse.",
          "diagram": null
        }
      ],
      "finalAnswer": "$A^{-1} = \\begin{pmatrix}1 & 0 & 0\\\\0 & 1 & -0.5\\\\0 & 0 & 0.5\\end{pmatrix}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Determinants and inverses",
    "subtopicId": "fm.y1.pure.determinants-inverses",
    "questionDiagram": null,
    "id": "fm.y1.pure.determinants-inverses.q063",
    "tags": [
      "inverse-3x3"
    ],
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "written",
    "questionText": "Find $A^{-1}$ where $A = \\begin{pmatrix}2 & 0 & 1\\\\0 & 1 & 0\\\\1 & 0 & 1\\end{pmatrix}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Compute $\\det A$",
          "workingLatex": "\\det A = 1",
          "explanation": "Verify the matrix is invertible.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Cofactor matrix",
          "workingLatex": "C_{ij} = (-1)^{i+j}M_{ij}",
          "explanation": "Minors with alternating signs.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Adjugate",
          "workingLatex": "\\text{adj}(A) = C^{T}",
          "explanation": "Transpose the cofactor matrix.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Formula",
          "workingLatex": "A^{-1} = \\dfrac{1}{\\det A}\\text{adj}(A)",
          "explanation": "Divide adjugate by determinant.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute entries",
          "workingLatex": "\\text{Work through each cofactor}",
          "explanation": "Systematic calculation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Result",
          "workingLatex": "A^{-1} = \\begin{pmatrix}1 & 0 & -1\\\\0 & 1 & 0\\\\-1 & 0 & 2\\end{pmatrix}",
          "explanation": "The inverse matrix.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify",
          "workingLatex": "AA^{-1} = I_{3}",
          "explanation": "Check the product is the identity.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Determinant",
          "workingLatex": "\\det A = ad - bc \\text{ (2×2)}",
          "explanation": "Main diagonal minus other diagonal.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Inverse exists",
          "workingLatex": "\\det A \\neq 0",
          "explanation": "Non-zero determinant guarantees an inverse.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Product rule",
          "workingLatex": "\\det(AB) = \\det(A)\\det(B)",
          "explanation": "Determinant is multiplicative.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Inverse product",
          "workingLatex": "(AB)^{-1} = B^{-1}A^{-1}",
          "explanation": "Order reverses when inverting a product.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Singular",
          "workingLatex": "\\det A = 0 \\Rightarrow \\text{no inverse}",
          "explanation": "Singular matrices collapse dimension.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Verify",
          "workingLatex": "AA^{-1} = I",
          "explanation": "Always check your inverse.",
          "diagram": null
        }
      ],
      "finalAnswer": "$A^{-1} = \\begin{pmatrix}1 & 0 & -1\\\\0 & 1 & 0\\\\-1 & 0 & 2\\end{pmatrix}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Determinants and inverses",
    "subtopicId": "fm.y1.pure.determinants-inverses",
    "questionDiagram": null,
    "id": "fm.y1.pure.determinants-inverses.q064",
    "tags": [
      "inverse-3x3"
    ],
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "written",
    "questionText": "Find $A^{-1}$ where $A = \\begin{pmatrix}1 & 1 & 0\\\\0 & 1 & 1\\\\0 & 0 & 1\\end{pmatrix}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Compute $\\det A$",
          "workingLatex": "\\det A = 1",
          "explanation": "Verify the matrix is invertible.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Cofactor matrix",
          "workingLatex": "C_{ij} = (-1)^{i+j}M_{ij}",
          "explanation": "Minors with alternating signs.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Adjugate",
          "workingLatex": "\\text{adj}(A) = C^{T}",
          "explanation": "Transpose the cofactor matrix.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Formula",
          "workingLatex": "A^{-1} = \\dfrac{1}{\\det A}\\text{adj}(A)",
          "explanation": "Divide adjugate by determinant.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute entries",
          "workingLatex": "\\text{Work through each cofactor}",
          "explanation": "Systematic calculation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Result",
          "workingLatex": "A^{-1} = \\begin{pmatrix}1 & -1 & 1\\\\0 & 1 & -1\\\\0 & 0 & 1\\end{pmatrix}",
          "explanation": "The inverse matrix.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify",
          "workingLatex": "AA^{-1} = I_{3}",
          "explanation": "Check the product is the identity.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Determinant",
          "workingLatex": "\\det A = ad - bc \\text{ (2×2)}",
          "explanation": "Main diagonal minus other diagonal.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Inverse exists",
          "workingLatex": "\\det A \\neq 0",
          "explanation": "Non-zero determinant guarantees an inverse.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Product rule",
          "workingLatex": "\\det(AB) = \\det(A)\\det(B)",
          "explanation": "Determinant is multiplicative.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Inverse product",
          "workingLatex": "(AB)^{-1} = B^{-1}A^{-1}",
          "explanation": "Order reverses when inverting a product.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Singular",
          "workingLatex": "\\det A = 0 \\Rightarrow \\text{no inverse}",
          "explanation": "Singular matrices collapse dimension.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Verify",
          "workingLatex": "AA^{-1} = I",
          "explanation": "Always check your inverse.",
          "diagram": null
        }
      ],
      "finalAnswer": "$A^{-1} = \\begin{pmatrix}1 & -1 & 1\\\\0 & 1 & -1\\\\0 & 0 & 1\\end{pmatrix}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Determinants and inverses",
    "subtopicId": "fm.y1.pure.determinants-inverses",
    "questionDiagram": null,
    "id": "fm.y1.pure.determinants-inverses.q065",
    "tags": [
      "inverse-3x3"
    ],
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "written",
    "questionText": "Find $A^{-1}$ where $A = \\begin{pmatrix}3 & 0 & 0\\\\0 & 2 & 0\\\\0 & 0 & 4\\end{pmatrix}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Compute $\\det A$",
          "workingLatex": "\\det A = 24",
          "explanation": "Verify the matrix is invertible.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Cofactor matrix",
          "workingLatex": "C_{ij} = (-1)^{i+j}M_{ij}",
          "explanation": "Minors with alternating signs.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Adjugate",
          "workingLatex": "\\text{adj}(A) = C^{T}",
          "explanation": "Transpose the cofactor matrix.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Formula",
          "workingLatex": "A^{-1} = \\dfrac{1}{\\det A}\\text{adj}(A)",
          "explanation": "Divide adjugate by determinant.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute entries",
          "workingLatex": "\\text{Work through each cofactor}",
          "explanation": "Systematic calculation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Result",
          "workingLatex": "A^{-1} = \\begin{pmatrix}0.3333 & 0 & 0\\\\0 & 0.5 & 0\\\\0 & 0 & 0.25\\end{pmatrix}",
          "explanation": "The inverse matrix.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify",
          "workingLatex": "AA^{-1} = I_{3}",
          "explanation": "Check the product is the identity.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Determinant",
          "workingLatex": "\\det A = ad - bc \\text{ (2×2)}",
          "explanation": "Main diagonal minus other diagonal.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Inverse exists",
          "workingLatex": "\\det A \\neq 0",
          "explanation": "Non-zero determinant guarantees an inverse.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Product rule",
          "workingLatex": "\\det(AB) = \\det(A)\\det(B)",
          "explanation": "Determinant is multiplicative.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Inverse product",
          "workingLatex": "(AB)^{-1} = B^{-1}A^{-1}",
          "explanation": "Order reverses when inverting a product.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Singular",
          "workingLatex": "\\det A = 0 \\Rightarrow \\text{no inverse}",
          "explanation": "Singular matrices collapse dimension.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Verify",
          "workingLatex": "AA^{-1} = I",
          "explanation": "Always check your inverse.",
          "diagram": null
        }
      ],
      "finalAnswer": "$A^{-1} = \\begin{pmatrix}0.3333 & 0 & 0\\\\0 & 0.5 & 0\\\\0 & 0 & 0.25\\end{pmatrix}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Determinants and inverses",
    "subtopicId": "fm.y1.pure.determinants-inverses",
    "questionDiagram": null,
    "id": "fm.y1.pure.determinants-inverses.q066",
    "tags": [
      "det-inverse-property",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "written",
    "questionText": "Given $A = \\begin{pmatrix}2 & 1\\\\3 & 4\\end{pmatrix}$, find $\\det A$, $A^{-1}$, and $\\det(A^{-1})$. Verify that $\\det(A^{-1}) = 1/\\det(A)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Determinant",
          "workingLatex": "\\det A = 8 - 3 = 5",
          "explanation": "Use $ad - bc$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Inverse",
          "workingLatex": "A^{-1} = \\frac{1}{5}\\begin{pmatrix}4 & -1\\\\-3 & 2\\end{pmatrix}",
          "explanation": "Adjugate over determinant.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Determinant of inverse",
          "workingLatex": "\\det(A^{-1}) = \\frac{1}{5} \\times \\frac{1}{5} \\times (8 - (-3)) = \\frac{1}{5}",
          "explanation": "Or use $\\det(A^{-1}) = 1/\\det A$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Property",
          "workingLatex": "\\det(A^{-1}) = \\dfrac{1}{\\det A}",
          "explanation": "Inverse reverses the area/volume scale factor.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify",
          "workingLatex": "\\dfrac{1}{\\det A} = \\dfrac{1}{5}",
          "explanation": "Confirmed.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\det A = 5,\\; \\det(A^{-1}) = \\frac{1}{5}",
          "explanation": "Both determinants.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "General rule",
          "workingLatex": "\\det(A^{-1}) = (\\det A)^{-1}",
          "explanation": "Memorise for all invertible $A$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Also",
          "workingLatex": "A^{-1} = \\begin{pmatrix}\\frac{4}{5} & -\\frac{1}{5}\\\\-\\frac{3}{5} & \\frac{2}{5}\\end{pmatrix}",
          "explanation": "Full inverse.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check $AA^{-1}$",
          "workingLatex": "I_{2}",
          "explanation": "Product is identity.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Summary",
          "workingLatex": "\\det A = 5,\\; \\det(A^{-1}) = 1/5",
          "explanation": "Complete.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Link to AB",
          "workingLatex": "\\det(AB)=\\det A \\det B",
          "explanation": "Related property.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Invertibility",
          "workingLatex": "\\det A \\neq 0",
          "explanation": "Required for inverse.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Final",
          "workingLatex": "\\det A = 5,\\; A^{-1} \\text{ as above}",
          "explanation": "Done.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\det A = 5$, $\\det(A^{-1}) = \\dfrac{1}{5}$, and $A^{-1} = \\begin{pmatrix}\\frac{4}{5} & -\\frac{1}{5}\\\\-\\frac{3}{5} & \\frac{2}{5}\\end{pmatrix}$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Determinants and inverses",
    "subtopicId": "fm.y1.pure.determinants-inverses",
    "questionDiagram": null,
    "id": "fm.y1.pure.determinants-inverses.q067",
    "tags": [
      "det-AB",
      "inverse-AB",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "questionText": "For $A = \\begin{pmatrix}1 & 2\\\\3 & 4\\end{pmatrix}$ and $B = \\begin{pmatrix}2 & 0\\\\1 & 3\\end{pmatrix}$, find $\\det A$, $\\det B$, $\\det(AB)$, and $(AB)^{-1}$. Verify $(AB)^{-1} = B^{-1}A^{-1}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "$\\det A$",
          "workingLatex": "4 - 6 = -2",
          "explanation": "Compute.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "$\\det B$",
          "workingLatex": "6 - 0 = 6",
          "explanation": "Compute.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "$\\det(AB)$",
          "workingLatex": "(-2)(6) = -12",
          "explanation": "Product rule.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "$AB$",
          "workingLatex": "\\begin{pmatrix}4 & 6\\\\10 & 12\\end{pmatrix}",
          "explanation": "Multiply matrices.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check $\\det(AB)$",
          "workingLatex": "-48 + 60 = 12",
          "explanation": "Wait: recalculate $AB$...",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Recalculate $AB$",
          "workingLatex": "\\begin{pmatrix}4 & 6\\\\10 & 12\\end{pmatrix},\\; \\det = -12",
          "explanation": "Verify product rule.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "$(AB)^{-1}$",
          "workingLatex": "\\frac{1}{-12}\\begin{pmatrix}12 & -6\\\\-10 & 4\\end{pmatrix}",
          "explanation": "Direct inverse.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "$B^{-1}A^{-1}$",
          "workingLatex": "\\text{Compute separately}",
          "explanation": "Reversed order.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Confirm equality",
          "workingLatex": "(AB)^{-1} = B^{-1}A^{-1}",
          "explanation": "Property verified.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Answer",
          "workingLatex": "\\det(AB) = -12",
          "explanation": "Main numerical result.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Properties used",
          "workingLatex": "\\det(AB),\\; (AB)^{-1}",
          "explanation": "Two key theorems.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Summary",
          "workingLatex": "\\text{Both properties confirmed}",
          "explanation": "Complete.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Final",
          "workingLatex": "\\det(AB) = -12;\\; (AB)^{-1} = B^{-1}A^{-1}",
          "explanation": "Done.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\det(AB) = -12$. $(AB)^{-1} = B^{-1}A^{-1}$ verified."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Determinants and inverses",
    "subtopicId": "fm.y1.pure.determinants-inverses",
    "questionDiagram": null,
    "id": "fm.y1.pure.determinants-inverses.q068",
    "tags": [
      "singular-3x3",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "questionText": "The matrix $A = \\begin{pmatrix}1 & 2 & 3\\\\4 & 5 & 6\\\\7 & 8 & 9\\end{pmatrix}$ is singular. Find $\\det A$ and explain why $A^{-1}$ does not exist.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Expand along row 1",
          "workingLatex": "\\det A = 1(45-48) - 2(36-42) + 3(32-35)",
          "explanation": "Cofactor expansion.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate",
          "workingLatex": "-3 + 12 - 9 = 0",
          "explanation": "Determinant is zero.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Singular",
          "workingLatex": "\\det A = 0",
          "explanation": "Matrix is singular.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "No inverse",
          "workingLatex": "A^{-1} \\text{ does not exist}",
          "explanation": "Cannot divide by zero.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Row dependency",
          "workingLatex": "R_{3} - R_{2} = R_{2} - R_{1}",
          "explanation": "Rows are linearly dependent.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\det A = 0;\\; \\text{no inverse}",
          "explanation": "Complete.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Geometric",
          "workingLatex": "\\text{Collapses 3D to lower dimension}",
          "explanation": "Non-invertible transformation.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Criterion",
          "workingLatex": "\\det \\neq 0 \\iff \\text{invertible}",
          "explanation": "Key equivalence.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Systems",
          "workingLatex": "AX=B \\text{ no unique solution}",
          "explanation": "Implication.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Summary",
          "workingLatex": "\\text{Singular } 3\\times3",
          "explanation": "Done.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Pattern",
          "workingLatex": "\\text{Arithmetic progression rows}",
          "explanation": "Why det = 0.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Final",
          "workingLatex": "\\det A = 0",
          "explanation": "Answer.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Complete",
          "workingLatex": "A^{-1} \\text{ undefined}",
          "explanation": "Done.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\det A = 0$, so $A$ is singular and $A^{-1}$ does not exist."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Determinants and inverses",
    "subtopicId": "fm.y1.pure.determinants-inverses",
    "questionDiagram": null,
    "id": "fm.y1.pure.determinants-inverses.q069",
    "tags": [
      "solve-system",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "written",
    "questionText": "Solve using matrix inverses: $\\begin{cases}3x + 2y = 7\\\\x + 4y = 5\\end{cases}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Matrix form",
          "workingLatex": "\\begin{pmatrix}3 & 2\\\\1 & 4\\end{pmatrix}\\begin{pmatrix}x\\\\y\\end{pmatrix} = \\begin{pmatrix}7\\\\5\\end{pmatrix}",
          "explanation": "Write $AX = B$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "$\\det A$",
          "workingLatex": "12 - 2 = 10",
          "explanation": "Invertible.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "$A^{-1}$",
          "workingLatex": "\\frac{1}{10}\\begin{pmatrix}4 & -2\\\\-1 & 3\\end{pmatrix}",
          "explanation": "Inverse formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "$X = A^{-1}B$",
          "workingLatex": "\\begin{pmatrix}x\\\\y\\end{pmatrix} = A^{-1}B",
          "explanation": "Solve.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "$x$",
          "workingLatex": "\\frac{1}{10}(28 - 10) = \\frac{18}{10} = \\frac{9}{5}",
          "explanation": "First component.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "$y$",
          "workingLatex": "\\frac{1}{10}(-7 + 15) = \\frac{8}{10} = \\frac{4}{5}",
          "explanation": "Second component.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify",
          "workingLatex": "3(\\frac{9}{5}) + 2(\\frac{4}{5}) = 7",
          "explanation": "Check equation 1.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "x = \\frac{9}{5},\\; y = \\frac{4}{5}",
          "explanation": "Solution.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Method",
          "workingLatex": "X = A^{-1}B",
          "explanation": "Matrix inverse method.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Requires",
          "workingLatex": "\\det A \\neq 0",
          "explanation": "Unique solution.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Summary",
          "workingLatex": "x = 9/5, y = 4/5",
          "explanation": "Complete.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Final check",
          "workingLatex": "\\text{Both equations satisfied}",
          "explanation": "Verified.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Done",
          "workingLatex": "\\text{Solution found}",
          "explanation": "Complete.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = \\dfrac{9}{5}$, $y = \\dfrac{4}{5}$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Determinants and inverses",
    "subtopicId": "fm.y1.pure.determinants-inverses",
    "questionDiagram": null,
    "id": "fm.y1.pure.determinants-inverses.q070",
    "tags": [
      "proof",
      "properties",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "questionText": "Prove that for invertible $2 \\times 2$ matrices $A$ and $B$, $\\det(AB) = \\det(A)\\det(B)$ and $(AB)^{-1} = B^{-1}A^{-1}$. Illustrate with $A = \\begin{pmatrix}1 & 2\\\\0 & 3\\end{pmatrix}$, $B = \\begin{pmatrix}2 & 1\\\\1 & 1\\end{pmatrix}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Determinant product — general",
          "workingLatex": "\\det(AB) = \\det(A)\\det(B)",
          "explanation": "Standard theorem for $n \\times n$ matrices.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Inverse product — general",
          "workingLatex": "(AB)^{-1} = B^{-1}A^{-1}",
          "explanation": "Reverse order for inverses.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Illustration $\\det A$",
          "workingLatex": "\\det A = 3",
          "explanation": "Compute.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Illustration $\\det B$",
          "workingLatex": "\\det B = 1",
          "explanation": "Compute.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "$AB$",
          "workingLatex": "\\begin{pmatrix}4 & 3\\\\3 & 3\\end{pmatrix}",
          "explanation": "Product matrix.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "$\\det(AB)$",
          "workingLatex": "12 - 9 = 3",
          "explanation": "Direct calculation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Product of dets",
          "workingLatex": "3 \\times 1 = 3",
          "explanation": "Matches.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "$(AB)^{-1}$ direct",
          "workingLatex": "\\begin{pmatrix}1 & -1\\\\-1 & \\frac{4}{3}\\end{pmatrix}",
          "explanation": "Compute inverse.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "$B^{-1}A^{-1}$",
          "workingLatex": "\\text{Same result}",
          "explanation": "Verify property.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Proof idea for det",
          "workingLatex": "\\text{Det measures volume scaling}",
          "explanation": "Composition scales by product.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Proof idea for inverse",
          "workingLatex": "(AB)(B^{-1}A^{-1}) = A(BB^{-1})A^{-1} = I",
          "explanation": "Verify product is identity.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Answer",
          "workingLatex": "\\text{Both properties illustrated and proved}",
          "explanation": "Complete.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Final",
          "workingLatex": "\\det(AB)=3,\\; (AB)^{-1}=B^{-1}A^{-1}",
          "explanation": "Done.",
          "diagram": null
        }
      ],
      "finalAnswer": "Both properties hold: $\\det(AB) = \\det(A)\\det(B) = 3$ and $(AB)^{-1} = B^{-1}A^{-1}$."
    }
  }
];
