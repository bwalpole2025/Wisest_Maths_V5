import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Systems of linear equations",
    "subtopicId": "fm.y1.pure.matrix-systems",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrix-systems.q001",
    "tags": [
      "matrix-form"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Write the system $\\begin{cases}2x + y = 5\\\\x + 3y = 7\\end{cases}$ in matrix form $AX = B$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify unknowns",
          "workingLatex": "X = \\begin{pmatrix}x\\\\y\\end{pmatrix}",
          "explanation": "Collect the variables as a column vector.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Coefficient matrix",
          "workingLatex": "A = \\begin{pmatrix}2 & 1\\\\1 & 3\\end{pmatrix}",
          "explanation": "Rows are the coefficients of $x$ and $y$ in each equation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Constant vector",
          "workingLatex": "B = \\begin{pmatrix}5\\\\7\\end{pmatrix}",
          "explanation": "Right-hand sides form the column matrix $B$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Matrix equation",
          "workingLatex": "AX = B",
          "explanation": "The system in matrix form.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Expand",
          "workingLatex": "\\begin{pmatrix}2 & 1\\\\1 & 3\\end{pmatrix}\\begin{pmatrix}x\\\\y\\end{pmatrix} = \\begin{pmatrix}5\\\\7\\end{pmatrix}",
          "explanation": "Shows how multiplication recovers the equations.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "AX = B \\text{ with } A = \\begin{pmatrix}2 & 1\\\\1 & 3\\end{pmatrix},\\; B = \\begin{pmatrix}5\\\\7\\end{pmatrix}",
          "explanation": "Complete matrix form.",
          "diagram": null
        }
      ],
      "finalAnswer": "$A = \\begin{pmatrix}2 & 1\\\\1 & 3\\end{pmatrix},\\; X = \\begin{pmatrix}x\\\\y\\end{pmatrix},\\; B = \\begin{pmatrix}5\\\\7\\end{pmatrix}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Systems of linear equations",
    "subtopicId": "fm.y1.pure.matrix-systems",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrix-systems.q002",
    "tags": [
      "matrix-form"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Write the system $\\begin{cases}3x + 2y = 7\\\\x + 4y = 5\\end{cases}$ in matrix form $AX = B$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify unknowns",
          "workingLatex": "X = \\begin{pmatrix}x\\\\y\\end{pmatrix}",
          "explanation": "Collect the variables as a column vector.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Coefficient matrix",
          "workingLatex": "A = \\begin{pmatrix}3 & 2\\\\1 & 4\\end{pmatrix}",
          "explanation": "Rows are the coefficients of $x$ and $y$ in each equation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Constant vector",
          "workingLatex": "B = \\begin{pmatrix}7\\\\5\\end{pmatrix}",
          "explanation": "Right-hand sides form the column matrix $B$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Matrix equation",
          "workingLatex": "AX = B",
          "explanation": "The system in matrix form.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Expand",
          "workingLatex": "\\begin{pmatrix}3 & 2\\\\1 & 4\\end{pmatrix}\\begin{pmatrix}x\\\\y\\end{pmatrix} = \\begin{pmatrix}7\\\\5\\end{pmatrix}",
          "explanation": "Shows how multiplication recovers the equations.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "AX = B \\text{ with } A = \\begin{pmatrix}3 & 2\\\\1 & 4\\end{pmatrix},\\; B = \\begin{pmatrix}7\\\\5\\end{pmatrix}",
          "explanation": "Complete matrix form.",
          "diagram": null
        }
      ],
      "finalAnswer": "$A = \\begin{pmatrix}3 & 2\\\\1 & 4\\end{pmatrix},\\; X = \\begin{pmatrix}x\\\\y\\end{pmatrix},\\; B = \\begin{pmatrix}7\\\\5\\end{pmatrix}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Systems of linear equations",
    "subtopicId": "fm.y1.pure.matrix-systems",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrix-systems.q003",
    "tags": [
      "matrix-form"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Write the system $\\begin{cases}x + 2y = 4\\\\3x + 5y = 11\\end{cases}$ in matrix form $AX = B$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify unknowns",
          "workingLatex": "X = \\begin{pmatrix}x\\\\y\\end{pmatrix}",
          "explanation": "Collect the variables as a column vector.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Coefficient matrix",
          "workingLatex": "A = \\begin{pmatrix}1 & 2\\\\3 & 5\\end{pmatrix}",
          "explanation": "Rows are the coefficients of $x$ and $y$ in each equation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Constant vector",
          "workingLatex": "B = \\begin{pmatrix}4\\\\11\\end{pmatrix}",
          "explanation": "Right-hand sides form the column matrix $B$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Matrix equation",
          "workingLatex": "AX = B",
          "explanation": "The system in matrix form.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Expand",
          "workingLatex": "\\begin{pmatrix}1 & 2\\\\3 & 5\\end{pmatrix}\\begin{pmatrix}x\\\\y\\end{pmatrix} = \\begin{pmatrix}4\\\\11\\end{pmatrix}",
          "explanation": "Shows how multiplication recovers the equations.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "AX = B \\text{ with } A = \\begin{pmatrix}1 & 2\\\\3 & 5\\end{pmatrix},\\; B = \\begin{pmatrix}4\\\\11\\end{pmatrix}",
          "explanation": "Complete matrix form.",
          "diagram": null
        }
      ],
      "finalAnswer": "$A = \\begin{pmatrix}1 & 2\\\\3 & 5\\end{pmatrix},\\; X = \\begin{pmatrix}x\\\\y\\end{pmatrix},\\; B = \\begin{pmatrix}4\\\\11\\end{pmatrix}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Systems of linear equations",
    "subtopicId": "fm.y1.pure.matrix-systems",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrix-systems.q004",
    "tags": [
      "matrix-form"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Write the system $\\begin{cases}4x + y = 9\\\\2x + 3y = 8\\end{cases}$ in matrix form $AX = B$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify unknowns",
          "workingLatex": "X = \\begin{pmatrix}x\\\\y\\end{pmatrix}",
          "explanation": "Collect the variables as a column vector.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Coefficient matrix",
          "workingLatex": "A = \\begin{pmatrix}4 & 1\\\\2 & 3\\end{pmatrix}",
          "explanation": "Rows are the coefficients of $x$ and $y$ in each equation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Constant vector",
          "workingLatex": "B = \\begin{pmatrix}9\\\\8\\end{pmatrix}",
          "explanation": "Right-hand sides form the column matrix $B$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Matrix equation",
          "workingLatex": "AX = B",
          "explanation": "The system in matrix form.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Expand",
          "workingLatex": "\\begin{pmatrix}4 & 1\\\\2 & 3\\end{pmatrix}\\begin{pmatrix}x\\\\y\\end{pmatrix} = \\begin{pmatrix}9\\\\8\\end{pmatrix}",
          "explanation": "Shows how multiplication recovers the equations.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "AX = B \\text{ with } A = \\begin{pmatrix}4 & 1\\\\2 & 3\\end{pmatrix},\\; B = \\begin{pmatrix}9\\\\8\\end{pmatrix}",
          "explanation": "Complete matrix form.",
          "diagram": null
        }
      ],
      "finalAnswer": "$A = \\begin{pmatrix}4 & 1\\\\2 & 3\\end{pmatrix},\\; X = \\begin{pmatrix}x\\\\y\\end{pmatrix},\\; B = \\begin{pmatrix}9\\\\8\\end{pmatrix}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Systems of linear equations",
    "subtopicId": "fm.y1.pure.matrix-systems",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrix-systems.q005",
    "tags": [
      "matrix-form"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Write the system $\\begin{cases}x + y = 3\\\\2x + 3y = 8\\end{cases}$ in matrix form $AX = B$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify unknowns",
          "workingLatex": "X = \\begin{pmatrix}x\\\\y\\end{pmatrix}",
          "explanation": "Collect the variables as a column vector.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Coefficient matrix",
          "workingLatex": "A = \\begin{pmatrix}1 & 1\\\\2 & 3\\end{pmatrix}",
          "explanation": "Rows are the coefficients of $x$ and $y$ in each equation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Constant vector",
          "workingLatex": "B = \\begin{pmatrix}3\\\\8\\end{pmatrix}",
          "explanation": "Right-hand sides form the column matrix $B$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Matrix equation",
          "workingLatex": "AX = B",
          "explanation": "The system in matrix form.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Expand",
          "workingLatex": "\\begin{pmatrix}1 & 1\\\\2 & 3\\end{pmatrix}\\begin{pmatrix}x\\\\y\\end{pmatrix} = \\begin{pmatrix}3\\\\8\\end{pmatrix}",
          "explanation": "Shows how multiplication recovers the equations.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "AX = B \\text{ with } A = \\begin{pmatrix}1 & 1\\\\2 & 3\\end{pmatrix},\\; B = \\begin{pmatrix}3\\\\8\\end{pmatrix}",
          "explanation": "Complete matrix form.",
          "diagram": null
        }
      ],
      "finalAnswer": "$A = \\begin{pmatrix}1 & 1\\\\2 & 3\\end{pmatrix},\\; X = \\begin{pmatrix}x\\\\y\\end{pmatrix},\\; B = \\begin{pmatrix}3\\\\8\\end{pmatrix}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Systems of linear equations",
    "subtopicId": "fm.y1.pure.matrix-systems",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrix-systems.q006",
    "tags": [
      "matrix-form"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Write the system $\\begin{cases}5x + 2y = 19\\\\3x + 4y = 18\\end{cases}$ in matrix form $AX = B$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify unknowns",
          "workingLatex": "X = \\begin{pmatrix}x\\\\y\\end{pmatrix}",
          "explanation": "Collect the variables as a column vector.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Coefficient matrix",
          "workingLatex": "A = \\begin{pmatrix}5 & 2\\\\3 & 4\\end{pmatrix}",
          "explanation": "Rows are the coefficients of $x$ and $y$ in each equation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Constant vector",
          "workingLatex": "B = \\begin{pmatrix}19\\\\18\\end{pmatrix}",
          "explanation": "Right-hand sides form the column matrix $B$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Matrix equation",
          "workingLatex": "AX = B",
          "explanation": "The system in matrix form.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Expand",
          "workingLatex": "\\begin{pmatrix}5 & 2\\\\3 & 4\\end{pmatrix}\\begin{pmatrix}x\\\\y\\end{pmatrix} = \\begin{pmatrix}19\\\\18\\end{pmatrix}",
          "explanation": "Shows how multiplication recovers the equations.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "AX = B \\text{ with } A = \\begin{pmatrix}5 & 2\\\\3 & 4\\end{pmatrix},\\; B = \\begin{pmatrix}19\\\\18\\end{pmatrix}",
          "explanation": "Complete matrix form.",
          "diagram": null
        }
      ],
      "finalAnswer": "$A = \\begin{pmatrix}5 & 2\\\\3 & 4\\end{pmatrix},\\; X = \\begin{pmatrix}x\\\\y\\end{pmatrix},\\; B = \\begin{pmatrix}19\\\\18\\end{pmatrix}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Systems of linear equations",
    "subtopicId": "fm.y1.pure.matrix-systems",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrix-systems.q007",
    "tags": [
      "matrix-form"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Write the system $\\begin{cases}2x - y = 1\\\\x + 3y = 7\\end{cases}$ in matrix form $AX = B$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify unknowns",
          "workingLatex": "X = \\begin{pmatrix}x\\\\y\\end{pmatrix}",
          "explanation": "Collect the variables as a column vector.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Coefficient matrix",
          "workingLatex": "A = \\begin{pmatrix}2 & -1\\\\1 & 3\\end{pmatrix}",
          "explanation": "Rows are the coefficients of $x$ and $y$ in each equation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Constant vector",
          "workingLatex": "B = \\begin{pmatrix}1\\\\7\\end{pmatrix}",
          "explanation": "Right-hand sides form the column matrix $B$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Matrix equation",
          "workingLatex": "AX = B",
          "explanation": "The system in matrix form.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Expand",
          "workingLatex": "\\begin{pmatrix}2 & -1\\\\1 & 3\\end{pmatrix}\\begin{pmatrix}x\\\\y\\end{pmatrix} = \\begin{pmatrix}1\\\\7\\end{pmatrix}",
          "explanation": "Shows how multiplication recovers the equations.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "AX = B \\text{ with } A = \\begin{pmatrix}2 & -1\\\\1 & 3\\end{pmatrix},\\; B = \\begin{pmatrix}1\\\\7\\end{pmatrix}",
          "explanation": "Complete matrix form.",
          "diagram": null
        }
      ],
      "finalAnswer": "$A = \\begin{pmatrix}2 & -1\\\\1 & 3\\end{pmatrix},\\; X = \\begin{pmatrix}x\\\\y\\end{pmatrix},\\; B = \\begin{pmatrix}1\\\\7\\end{pmatrix}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Systems of linear equations",
    "subtopicId": "fm.y1.pure.matrix-systems",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrix-systems.q008",
    "tags": [
      "matrix-form"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Write the system $\\begin{cases}3x + y = 11\\\\2x + 5y = 17\\end{cases}$ in matrix form $AX = B$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify unknowns",
          "workingLatex": "X = \\begin{pmatrix}x\\\\y\\end{pmatrix}",
          "explanation": "Collect the variables as a column vector.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Coefficient matrix",
          "workingLatex": "A = \\begin{pmatrix}3 & 1\\\\2 & 5\\end{pmatrix}",
          "explanation": "Rows are the coefficients of $x$ and $y$ in each equation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Constant vector",
          "workingLatex": "B = \\begin{pmatrix}11\\\\17\\end{pmatrix}",
          "explanation": "Right-hand sides form the column matrix $B$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Matrix equation",
          "workingLatex": "AX = B",
          "explanation": "The system in matrix form.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Expand",
          "workingLatex": "\\begin{pmatrix}3 & 1\\\\2 & 5\\end{pmatrix}\\begin{pmatrix}x\\\\y\\end{pmatrix} = \\begin{pmatrix}11\\\\17\\end{pmatrix}",
          "explanation": "Shows how multiplication recovers the equations.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "AX = B \\text{ with } A = \\begin{pmatrix}3 & 1\\\\2 & 5\\end{pmatrix},\\; B = \\begin{pmatrix}11\\\\17\\end{pmatrix}",
          "explanation": "Complete matrix form.",
          "diagram": null
        }
      ],
      "finalAnswer": "$A = \\begin{pmatrix}3 & 1\\\\2 & 5\\end{pmatrix},\\; X = \\begin{pmatrix}x\\\\y\\end{pmatrix},\\; B = \\begin{pmatrix}11\\\\17\\end{pmatrix}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Systems of linear equations",
    "subtopicId": "fm.y1.pure.matrix-systems",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrix-systems.q009",
    "tags": [
      "matrix-form"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Express $\\begin{cases}x + y + z = 6\\\\2x + y = 5\\\\x + z = 4\\end{cases}$ as $AX = B$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Unknown vector",
          "workingLatex": "X = \\begin{pmatrix}x\\\\y\\\\z\\end{pmatrix}",
          "explanation": "Three unknowns form a $3\\times1$ column.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Coefficient matrix",
          "workingLatex": "A = \\begin{pmatrix}1 & 1 & 1\\\\2 & 1 & 0\\\\1 & 0 & 1\\end{pmatrix}",
          "explanation": "Each row gives coefficients from one equation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Constants",
          "workingLatex": "B = \\begin{pmatrix}6\\\\5\\\\4\\end{pmatrix}",
          "explanation": "Right-hand sides as a column matrix.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Equation",
          "workingLatex": "AX = B",
          "explanation": "Standard matrix representation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify row 1",
          "workingLatex": "\\text{First row gives: } x + y + z = 6",
          "explanation": "Matrix multiplication recovers the first equation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Complete system",
          "workingLatex": "AX = B",
          "explanation": "All three equations encoded.",
          "diagram": null
        }
      ],
      "finalAnswer": "$A = \\begin{pmatrix}1 & 1 & 1\\\\2 & 1 & 0\\\\1 & 0 & 1\\end{pmatrix},\\; X = \\begin{pmatrix}x\\\\y\\\\z\\end{pmatrix},\\; B = \\begin{pmatrix}6\\\\5\\\\4\\end{pmatrix}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Systems of linear equations",
    "subtopicId": "fm.y1.pure.matrix-systems",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrix-systems.q010",
    "tags": [
      "matrix-form"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Express $\\begin{cases}2x + y = 5\\\\y + z = 4\\\\x + 2z = 6\\end{cases}$ as $AX = B$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Unknown vector",
          "workingLatex": "X = \\begin{pmatrix}x\\\\y\\\\z\\end{pmatrix}",
          "explanation": "Three unknowns form a $3\\times1$ column.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Coefficient matrix",
          "workingLatex": "A = \\begin{pmatrix}2 & 1 & 0\\\\0 & 1 & 1\\\\1 & 0 & 2\\end{pmatrix}",
          "explanation": "Each row gives coefficients from one equation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Constants",
          "workingLatex": "B = \\begin{pmatrix}5\\\\4\\\\6\\end{pmatrix}",
          "explanation": "Right-hand sides as a column matrix.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Equation",
          "workingLatex": "AX = B",
          "explanation": "Standard matrix representation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify row 1",
          "workingLatex": "\\text{First row gives: } 2x + y = 5",
          "explanation": "Matrix multiplication recovers the first equation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Complete system",
          "workingLatex": "AX = B",
          "explanation": "All three equations encoded.",
          "diagram": null
        }
      ],
      "finalAnswer": "$A = \\begin{pmatrix}2 & 1 & 0\\\\0 & 1 & 1\\\\1 & 0 & 2\\end{pmatrix},\\; X = \\begin{pmatrix}x\\\\y\\\\z\\end{pmatrix},\\; B = \\begin{pmatrix}5\\\\4\\\\6\\end{pmatrix}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Systems of linear equations",
    "subtopicId": "fm.y1.pure.matrix-systems",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrix-systems.q011",
    "tags": [
      "matrix-form"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Express $\\begin{cases}x = 2\\\\2y = 4\\\\3z = 6\\end{cases}$ as $AX = B$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Unknown vector",
          "workingLatex": "X = \\begin{pmatrix}x\\\\y\\\\z\\end{pmatrix}",
          "explanation": "Three unknowns form a $3\\times1$ column.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Coefficient matrix",
          "workingLatex": "A = \\begin{pmatrix}1 & 0 & 0\\\\0 & 2 & 0\\\\0 & 0 & 3\\end{pmatrix}",
          "explanation": "Each row gives coefficients from one equation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Constants",
          "workingLatex": "B = \\begin{pmatrix}2\\\\4\\\\6\\end{pmatrix}",
          "explanation": "Right-hand sides as a column matrix.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Equation",
          "workingLatex": "AX = B",
          "explanation": "Standard matrix representation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify row 1",
          "workingLatex": "\\text{First row gives: } x = 2",
          "explanation": "Matrix multiplication recovers the first equation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Complete system",
          "workingLatex": "AX = B",
          "explanation": "All three equations encoded.",
          "diagram": null
        }
      ],
      "finalAnswer": "$A = \\begin{pmatrix}1 & 0 & 0\\\\0 & 2 & 0\\\\0 & 0 & 3\\end{pmatrix},\\; X = \\begin{pmatrix}x\\\\y\\\\z\\end{pmatrix},\\; B = \\begin{pmatrix}2\\\\4\\\\6\\end{pmatrix}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Systems of linear equations",
    "subtopicId": "fm.y1.pure.matrix-systems",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrix-systems.q012",
    "tags": [
      "matrix-form"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Express $\\begin{cases}x + 2y = 3\\\\y + z = 4\\\\2x + z = 5\\end{cases}$ as $AX = B$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Unknown vector",
          "workingLatex": "X = \\begin{pmatrix}x\\\\y\\\\z\\end{pmatrix}",
          "explanation": "Three unknowns form a $3\\times1$ column.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Coefficient matrix",
          "workingLatex": "A = \\begin{pmatrix}1 & 2 & 0\\\\0 & 1 & 1\\\\2 & 0 & 1\\end{pmatrix}",
          "explanation": "Each row gives coefficients from one equation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Constants",
          "workingLatex": "B = \\begin{pmatrix}3\\\\4\\\\5\\end{pmatrix}",
          "explanation": "Right-hand sides as a column matrix.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Equation",
          "workingLatex": "AX = B",
          "explanation": "Standard matrix representation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify row 1",
          "workingLatex": "\\text{First row gives: } x + 2y = 3",
          "explanation": "Matrix multiplication recovers the first equation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Complete system",
          "workingLatex": "AX = B",
          "explanation": "All three equations encoded.",
          "diagram": null
        }
      ],
      "finalAnswer": "$A = \\begin{pmatrix}1 & 2 & 0\\\\0 & 1 & 1\\\\2 & 0 & 1\\end{pmatrix},\\; X = \\begin{pmatrix}x\\\\y\\\\z\\end{pmatrix},\\; B = \\begin{pmatrix}3\\\\4\\\\5\\end{pmatrix}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Systems of linear equations",
    "subtopicId": "fm.y1.pure.matrix-systems",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrix-systems.q013",
    "tags": [
      "matrix-form"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Express $\\begin{cases}3x + y = 7\\\\2y + z = 5\\\\x + 2z = 6\\end{cases}$ as $AX = B$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Unknown vector",
          "workingLatex": "X = \\begin{pmatrix}x\\\\y\\\\z\\end{pmatrix}",
          "explanation": "Three unknowns form a $3\\times1$ column.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Coefficient matrix",
          "workingLatex": "A = \\begin{pmatrix}3 & 1 & 0\\\\0 & 2 & 1\\\\1 & 0 & 2\\end{pmatrix}",
          "explanation": "Each row gives coefficients from one equation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Constants",
          "workingLatex": "B = \\begin{pmatrix}7\\\\5\\\\6\\end{pmatrix}",
          "explanation": "Right-hand sides as a column matrix.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Equation",
          "workingLatex": "AX = B",
          "explanation": "Standard matrix representation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify row 1",
          "workingLatex": "\\text{First row gives: } 3x + y = 7",
          "explanation": "Matrix multiplication recovers the first equation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Complete system",
          "workingLatex": "AX = B",
          "explanation": "All three equations encoded.",
          "diagram": null
        }
      ],
      "finalAnswer": "$A = \\begin{pmatrix}3 & 1 & 0\\\\0 & 2 & 1\\\\1 & 0 & 2\\end{pmatrix},\\; X = \\begin{pmatrix}x\\\\y\\\\z\\end{pmatrix},\\; B = \\begin{pmatrix}7\\\\5\\\\6\\end{pmatrix}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Systems of linear equations",
    "subtopicId": "fm.y1.pure.matrix-systems",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrix-systems.q014",
    "tags": [
      "matrix-form"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Express $\\begin{cases}x + y = 2\\\\y + z = 3\\\\x + z = 4\\end{cases}$ as $AX = B$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Unknown vector",
          "workingLatex": "X = \\begin{pmatrix}x\\\\y\\\\z\\end{pmatrix}",
          "explanation": "Three unknowns form a $3\\times1$ column.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Coefficient matrix",
          "workingLatex": "A = \\begin{pmatrix}1 & 1 & 0\\\\0 & 1 & 1\\\\1 & 0 & 1\\end{pmatrix}",
          "explanation": "Each row gives coefficients from one equation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Constants",
          "workingLatex": "B = \\begin{pmatrix}2\\\\3\\\\4\\end{pmatrix}",
          "explanation": "Right-hand sides as a column matrix.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Equation",
          "workingLatex": "AX = B",
          "explanation": "Standard matrix representation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify row 1",
          "workingLatex": "\\text{First row gives: } x + y = 2",
          "explanation": "Matrix multiplication recovers the first equation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Complete system",
          "workingLatex": "AX = B",
          "explanation": "All three equations encoded.",
          "diagram": null
        }
      ],
      "finalAnswer": "$A = \\begin{pmatrix}1 & 1 & 0\\\\0 & 1 & 1\\\\1 & 0 & 1\\end{pmatrix},\\; X = \\begin{pmatrix}x\\\\y\\\\z\\end{pmatrix},\\; B = \\begin{pmatrix}2\\\\3\\\\4\\end{pmatrix}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Systems of linear equations",
    "subtopicId": "fm.y1.pure.matrix-systems",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrix-systems.q015",
    "tags": [
      "solve-2x2"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Solve using matrices: $\\begin{cases}2x + y = 5\\\\x + 3y = 7\\end{cases}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Matrix form",
          "workingLatex": "AX = B",
          "explanation": "Write the system as a matrix equation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Coefficient matrix",
          "workingLatex": "A = \\begin{pmatrix}2 & 1\\\\1 & 3\\end{pmatrix},\\; B = \\begin{pmatrix}5\\\\7\\end{pmatrix}",
          "explanation": "Identify $A$ and $B$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Determinant",
          "workingLatex": "\\det A = 5 \\neq 0",
          "explanation": "Non-zero determinant guarantees a unique solution.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Inverse",
          "workingLatex": "A^{-1} = \\begin{pmatrix}0.6 & -0.2\\\\-0.2 & 0.4\\end{pmatrix}",
          "explanation": "Find the inverse of $A$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve",
          "workingLatex": "X = A^{-1}B",
          "explanation": "Multiply both sides on the left by $A^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Calculate",
          "workingLatex": "X = \\begin{pmatrix}1.6\\\\1.8\\end{pmatrix}",
          "explanation": "Evaluate the product.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solution",
          "workingLatex": "x = 1.6,\\; y = 1.8",
          "explanation": "Read off the values.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify",
          "workingLatex": "\\text{Substitute into both equations}",
          "explanation": "Check the solution satisfies the system.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = 1.6,\\; y = 1.8$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Systems of linear equations",
    "subtopicId": "fm.y1.pure.matrix-systems",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrix-systems.q016",
    "tags": [
      "solve-2x2"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Solve using matrices: $\\begin{cases}3x + 2y = 7\\\\x + 4y = 5\\end{cases}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Matrix form",
          "workingLatex": "AX = B",
          "explanation": "Write the system as a matrix equation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Coefficient matrix",
          "workingLatex": "A = \\begin{pmatrix}3 & 2\\\\1 & 4\\end{pmatrix},\\; B = \\begin{pmatrix}7\\\\5\\end{pmatrix}",
          "explanation": "Identify $A$ and $B$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Determinant",
          "workingLatex": "\\det A = 10 \\neq 0",
          "explanation": "Non-zero determinant guarantees a unique solution.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Inverse",
          "workingLatex": "A^{-1} = \\begin{pmatrix}0.4 & -0.2\\\\-0.1 & 0.3\\end{pmatrix}",
          "explanation": "Find the inverse of $A$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve",
          "workingLatex": "X = A^{-1}B",
          "explanation": "Multiply both sides on the left by $A^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Calculate",
          "workingLatex": "X = \\begin{pmatrix}1.8\\\\0.8\\end{pmatrix}",
          "explanation": "Evaluate the product.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solution",
          "workingLatex": "x = 1.8,\\; y = 0.8",
          "explanation": "Read off the values.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify",
          "workingLatex": "\\text{Substitute into both equations}",
          "explanation": "Check the solution satisfies the system.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = 1.8,\\; y = 0.8$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Systems of linear equations",
    "subtopicId": "fm.y1.pure.matrix-systems",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrix-systems.q017",
    "tags": [
      "solve-2x2"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Solve using matrices: $\\begin{cases}x + 2y = 4\\\\3x + 5y = 11\\end{cases}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Matrix form",
          "workingLatex": "AX = B",
          "explanation": "Write the system as a matrix equation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Coefficient matrix",
          "workingLatex": "A = \\begin{pmatrix}1 & 2\\\\3 & 5\\end{pmatrix},\\; B = \\begin{pmatrix}4\\\\11\\end{pmatrix}",
          "explanation": "Identify $A$ and $B$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Determinant",
          "workingLatex": "\\det A = -1 \\neq 0",
          "explanation": "Non-zero determinant guarantees a unique solution.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Inverse",
          "workingLatex": "A^{-1} = \\begin{pmatrix}-5 & 2\\\\3 & -1\\end{pmatrix}",
          "explanation": "Find the inverse of $A$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve",
          "workingLatex": "X = A^{-1}B",
          "explanation": "Multiply both sides on the left by $A^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Calculate",
          "workingLatex": "X = \\begin{pmatrix}2\\\\1\\end{pmatrix}",
          "explanation": "Evaluate the product.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solution",
          "workingLatex": "x = 2,\\; y = 1",
          "explanation": "Read off the values.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify",
          "workingLatex": "\\text{Substitute into both equations}",
          "explanation": "Check the solution satisfies the system.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = 2,\\; y = 1$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Systems of linear equations",
    "subtopicId": "fm.y1.pure.matrix-systems",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrix-systems.q018",
    "tags": [
      "solve-2x2"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Solve using matrices: $\\begin{cases}4x + y = 9\\\\2x + 3y = 8\\end{cases}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Matrix form",
          "workingLatex": "AX = B",
          "explanation": "Write the system as a matrix equation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Coefficient matrix",
          "workingLatex": "A = \\begin{pmatrix}4 & 1\\\\2 & 3\\end{pmatrix},\\; B = \\begin{pmatrix}9\\\\8\\end{pmatrix}",
          "explanation": "Identify $A$ and $B$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Determinant",
          "workingLatex": "\\det A = 10 \\neq 0",
          "explanation": "Non-zero determinant guarantees a unique solution.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Inverse",
          "workingLatex": "A^{-1} = \\begin{pmatrix}0.3 & -0.1\\\\-0.2 & 0.4\\end{pmatrix}",
          "explanation": "Find the inverse of $A$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve",
          "workingLatex": "X = A^{-1}B",
          "explanation": "Multiply both sides on the left by $A^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Calculate",
          "workingLatex": "X = \\begin{pmatrix}1.9\\\\1.4\\end{pmatrix}",
          "explanation": "Evaluate the product.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solution",
          "workingLatex": "x = 1.9,\\; y = 1.4",
          "explanation": "Read off the values.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify",
          "workingLatex": "\\text{Substitute into both equations}",
          "explanation": "Check the solution satisfies the system.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = 1.9,\\; y = 1.4$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Systems of linear equations",
    "subtopicId": "fm.y1.pure.matrix-systems",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrix-systems.q019",
    "tags": [
      "solve-2x2"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Solve using matrices: $\\begin{cases}x + y = 3\\\\2x + 3y = 8\\end{cases}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Matrix form",
          "workingLatex": "AX = B",
          "explanation": "Write the system as a matrix equation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Coefficient matrix",
          "workingLatex": "A = \\begin{pmatrix}1 & 1\\\\2 & 3\\end{pmatrix},\\; B = \\begin{pmatrix}3\\\\8\\end{pmatrix}",
          "explanation": "Identify $A$ and $B$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Determinant",
          "workingLatex": "\\det A = 1 \\neq 0",
          "explanation": "Non-zero determinant guarantees a unique solution.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Inverse",
          "workingLatex": "A^{-1} = \\begin{pmatrix}3 & -1\\\\-2 & 1\\end{pmatrix}",
          "explanation": "Find the inverse of $A$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve",
          "workingLatex": "X = A^{-1}B",
          "explanation": "Multiply both sides on the left by $A^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Calculate",
          "workingLatex": "X = \\begin{pmatrix}1\\\\2\\end{pmatrix}",
          "explanation": "Evaluate the product.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solution",
          "workingLatex": "x = 1,\\; y = 2",
          "explanation": "Read off the values.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify",
          "workingLatex": "\\text{Substitute into both equations}",
          "explanation": "Check the solution satisfies the system.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = 1,\\; y = 2$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Systems of linear equations",
    "subtopicId": "fm.y1.pure.matrix-systems",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrix-systems.q020",
    "tags": [
      "solve-2x2"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Solve using matrices: $\\begin{cases}5x + 2y = 19\\\\3x + 4y = 18\\end{cases}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Matrix form",
          "workingLatex": "AX = B",
          "explanation": "Write the system as a matrix equation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Coefficient matrix",
          "workingLatex": "A = \\begin{pmatrix}5 & 2\\\\3 & 4\\end{pmatrix},\\; B = \\begin{pmatrix}19\\\\18\\end{pmatrix}",
          "explanation": "Identify $A$ and $B$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Determinant",
          "workingLatex": "\\det A = 14 \\neq 0",
          "explanation": "Non-zero determinant guarantees a unique solution.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Inverse",
          "workingLatex": "A^{-1} = \\begin{pmatrix}0.2857 & -0.1429\\\\-0.2143 & 0.3571\\end{pmatrix}",
          "explanation": "Find the inverse of $A$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve",
          "workingLatex": "X = A^{-1}B",
          "explanation": "Multiply both sides on the left by $A^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Calculate",
          "workingLatex": "X = \\begin{pmatrix}2.8571\\\\2.3571\\end{pmatrix}",
          "explanation": "Evaluate the product.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solution",
          "workingLatex": "x = 2.8571,\\; y = 2.3571",
          "explanation": "Read off the values.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify",
          "workingLatex": "\\text{Substitute into both equations}",
          "explanation": "Check the solution satisfies the system.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = 2.8571,\\; y = 2.3571$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Systems of linear equations",
    "subtopicId": "fm.y1.pure.matrix-systems",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrix-systems.q021",
    "tags": [
      "solve-2x2"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Solve using matrices: $\\begin{cases}2x - y = 1\\\\x + 3y = 7\\end{cases}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Matrix form",
          "workingLatex": "AX = B",
          "explanation": "Write the system as a matrix equation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Coefficient matrix",
          "workingLatex": "A = \\begin{pmatrix}2 & -1\\\\1 & 3\\end{pmatrix},\\; B = \\begin{pmatrix}1\\\\7\\end{pmatrix}",
          "explanation": "Identify $A$ and $B$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Determinant",
          "workingLatex": "\\det A = 7 \\neq 0",
          "explanation": "Non-zero determinant guarantees a unique solution.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Inverse",
          "workingLatex": "A^{-1} = \\begin{pmatrix}0.4286 & 0.1429\\\\-0.1429 & 0.2857\\end{pmatrix}",
          "explanation": "Find the inverse of $A$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve",
          "workingLatex": "X = A^{-1}B",
          "explanation": "Multiply both sides on the left by $A^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Calculate",
          "workingLatex": "X = \\begin{pmatrix}1.4286\\\\1.8571\\end{pmatrix}",
          "explanation": "Evaluate the product.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solution",
          "workingLatex": "x = 1.4286,\\; y = 1.8571",
          "explanation": "Read off the values.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify",
          "workingLatex": "\\text{Substitute into both equations}",
          "explanation": "Check the solution satisfies the system.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = 1.4286,\\; y = 1.8571$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Systems of linear equations",
    "subtopicId": "fm.y1.pure.matrix-systems",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrix-systems.q022",
    "tags": [
      "solve-2x2"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Solve using matrices: $\\begin{cases}3x + y = 11\\\\2x + 5y = 17\\end{cases}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Matrix form",
          "workingLatex": "AX = B",
          "explanation": "Write the system as a matrix equation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Coefficient matrix",
          "workingLatex": "A = \\begin{pmatrix}3 & 1\\\\2 & 5\\end{pmatrix},\\; B = \\begin{pmatrix}11\\\\17\\end{pmatrix}",
          "explanation": "Identify $A$ and $B$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Determinant",
          "workingLatex": "\\det A = 13 \\neq 0",
          "explanation": "Non-zero determinant guarantees a unique solution.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Inverse",
          "workingLatex": "A^{-1} = \\begin{pmatrix}0.3846 & -0.0769\\\\-0.1538 & 0.2308\\end{pmatrix}",
          "explanation": "Find the inverse of $A$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve",
          "workingLatex": "X = A^{-1}B",
          "explanation": "Multiply both sides on the left by $A^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Calculate",
          "workingLatex": "X = \\begin{pmatrix}2.9231\\\\2.2308\\end{pmatrix}",
          "explanation": "Evaluate the product.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solution",
          "workingLatex": "x = 2.9231,\\; y = 2.2308",
          "explanation": "Read off the values.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify",
          "workingLatex": "\\text{Substitute into both equations}",
          "explanation": "Check the solution satisfies the system.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = 2.9231,\\; y = 2.2308$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Systems of linear equations",
    "subtopicId": "fm.y1.pure.matrix-systems",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrix-systems.q023",
    "tags": [
      "solve-2x2"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Solve using matrices: $\\begin{cases}x + 3y = 7\\\\2x + y = 4\\end{cases}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Matrix form",
          "workingLatex": "AX = B",
          "explanation": "Write the system as a matrix equation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Coefficient matrix",
          "workingLatex": "A = \\begin{pmatrix}1 & 3\\\\2 & 1\\end{pmatrix},\\; B = \\begin{pmatrix}7\\\\4\\end{pmatrix}",
          "explanation": "Identify $A$ and $B$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Determinant",
          "workingLatex": "\\det A = -5 \\neq 0",
          "explanation": "Non-zero determinant guarantees a unique solution.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Inverse",
          "workingLatex": "A^{-1} = \\begin{pmatrix}-0.2 & 0.6\\\\0.4 & -0.2\\end{pmatrix}",
          "explanation": "Find the inverse of $A$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve",
          "workingLatex": "X = A^{-1}B",
          "explanation": "Multiply both sides on the left by $A^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Calculate",
          "workingLatex": "X = \\begin{pmatrix}1\\\\2\\end{pmatrix}",
          "explanation": "Evaluate the product.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solution",
          "workingLatex": "x = 1,\\; y = 2",
          "explanation": "Read off the values.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify",
          "workingLatex": "\\text{Substitute into both equations}",
          "explanation": "Check the solution satisfies the system.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = 1,\\; y = 2$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Systems of linear equations",
    "subtopicId": "fm.y1.pure.matrix-systems",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrix-systems.q024",
    "tags": [
      "solve-2x2"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Solve using matrices: $\\begin{cases}4x + 3y = 18\\\\2x + 5y = 17\\end{cases}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Matrix form",
          "workingLatex": "AX = B",
          "explanation": "Write the system as a matrix equation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Coefficient matrix",
          "workingLatex": "A = \\begin{pmatrix}4 & 3\\\\2 & 5\\end{pmatrix},\\; B = \\begin{pmatrix}18\\\\17\\end{pmatrix}",
          "explanation": "Identify $A$ and $B$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Determinant",
          "workingLatex": "\\det A = 14 \\neq 0",
          "explanation": "Non-zero determinant guarantees a unique solution.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Inverse",
          "workingLatex": "A^{-1} = \\begin{pmatrix}0.3571 & -0.2143\\\\-0.1429 & 0.2857\\end{pmatrix}",
          "explanation": "Find the inverse of $A$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve",
          "workingLatex": "X = A^{-1}B",
          "explanation": "Multiply both sides on the left by $A^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Calculate",
          "workingLatex": "X = \\begin{pmatrix}2.7857\\\\2.2857\\end{pmatrix}",
          "explanation": "Evaluate the product.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solution",
          "workingLatex": "x = 2.7857,\\; y = 2.2857",
          "explanation": "Read off the values.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify",
          "workingLatex": "\\text{Substitute into both equations}",
          "explanation": "Check the solution satisfies the system.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = 2.7857,\\; y = 2.2857$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Systems of linear equations",
    "subtopicId": "fm.y1.pure.matrix-systems",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrix-systems.q025",
    "tags": [
      "solve-3x3"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Solve the system $\\begin{cases}x + y + z = 6\\\\2x + y = 5\\\\x + z = 4\\end{cases}$ using the matrix method.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Matrix equation",
          "workingLatex": "AX = B",
          "explanation": "Represent the three equations in matrix form.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up",
          "workingLatex": "A = \\begin{pmatrix}1 & 1 & 1\\\\2 & 1 & 0\\\\1 & 0 & 1\\end{pmatrix},\\; B = \\begin{pmatrix}6\\\\5\\\\4\\end{pmatrix}",
          "explanation": "Coefficient matrix and constants.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Determinant",
          "workingLatex": "\\det A = -2 \\neq 0",
          "explanation": "Confirm the system has a unique solution.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find $A^{-1}$",
          "workingLatex": "A^{-1} = \\begin{pmatrix}-0.5 & 0.5 & 0.5\\\\1 & 0 & -1\\\\0.5 & -0.5 & 0.5\\end{pmatrix}",
          "explanation": "Use the adjugate method for $3\\times3$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve",
          "workingLatex": "X = A^{-1}B",
          "explanation": "Apply the inverse to the constant vector.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute",
          "workingLatex": "X = \\begin{pmatrix}1.5\\\\2\\\\2.5\\end{pmatrix}",
          "explanation": "Multiply out to find $x$, $y$, $z$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solution",
          "workingLatex": "x = 1.5,\\; y = 2,\\; z = 2.5",
          "explanation": "The unique point of intersection.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Geometric meaning",
          "workingLatex": "\\text{Three planes meet at a single point}",
          "explanation": "Unique solution corresponds to one common point.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify",
          "workingLatex": "\\text{Substitute into all three equations}",
          "explanation": "Confirm the values work.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = 1.5,\\; y = 2,\\; z = 2.5$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Systems of linear equations",
    "subtopicId": "fm.y1.pure.matrix-systems",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrix-systems.q026",
    "tags": [
      "solve-3x3"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Solve the system $\\begin{cases}2x + y = 5\\\\y + z = 4\\\\x + 2z = 6\\end{cases}$ using the matrix method.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Matrix equation",
          "workingLatex": "AX = B",
          "explanation": "Represent the three equations in matrix form.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up",
          "workingLatex": "A = \\begin{pmatrix}2 & 1 & 0\\\\0 & 1 & 1\\\\1 & 0 & 2\\end{pmatrix},\\; B = \\begin{pmatrix}5\\\\4\\\\6\\end{pmatrix}",
          "explanation": "Coefficient matrix and constants.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Determinant",
          "workingLatex": "\\det A = 5 \\neq 0",
          "explanation": "Confirm the system has a unique solution.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find $A^{-1}$",
          "workingLatex": "A^{-1} = \\begin{pmatrix}0.4 & -0.4 & 0.2\\\\0.2 & 0.8 & -0.4\\\\-0.2 & 0.2 & 0.4\\end{pmatrix}",
          "explanation": "Use the adjugate method for $3\\times3$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve",
          "workingLatex": "X = A^{-1}B",
          "explanation": "Apply the inverse to the constant vector.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute",
          "workingLatex": "X = \\begin{pmatrix}1.6\\\\1.8\\\\2.2\\end{pmatrix}",
          "explanation": "Multiply out to find $x$, $y$, $z$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solution",
          "workingLatex": "x = 1.6,\\; y = 1.8,\\; z = 2.2",
          "explanation": "The unique point of intersection.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Geometric meaning",
          "workingLatex": "\\text{Three planes meet at a single point}",
          "explanation": "Unique solution corresponds to one common point.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify",
          "workingLatex": "\\text{Substitute into all three equations}",
          "explanation": "Confirm the values work.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = 1.6,\\; y = 1.8,\\; z = 2.2$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Systems of linear equations",
    "subtopicId": "fm.y1.pure.matrix-systems",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrix-systems.q027",
    "tags": [
      "solve-3x3"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Solve the system $\\begin{cases}x = 2\\\\2y = 4\\\\3z = 6\\end{cases}$ using the matrix method.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Matrix equation",
          "workingLatex": "AX = B",
          "explanation": "Represent the three equations in matrix form.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up",
          "workingLatex": "A = \\begin{pmatrix}1 & 0 & 0\\\\0 & 2 & 0\\\\0 & 0 & 3\\end{pmatrix},\\; B = \\begin{pmatrix}2\\\\4\\\\6\\end{pmatrix}",
          "explanation": "Coefficient matrix and constants.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Determinant",
          "workingLatex": "\\det A = 6 \\neq 0",
          "explanation": "Confirm the system has a unique solution.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find $A^{-1}$",
          "workingLatex": "A^{-1} = \\begin{pmatrix}1 & 0 & 0\\\\0 & 0.5 & 0\\\\0 & 0 & 0.3333\\end{pmatrix}",
          "explanation": "Use the adjugate method for $3\\times3$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve",
          "workingLatex": "X = A^{-1}B",
          "explanation": "Apply the inverse to the constant vector.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute",
          "workingLatex": "X = \\begin{pmatrix}2\\\\2\\\\2\\end{pmatrix}",
          "explanation": "Multiply out to find $x$, $y$, $z$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solution",
          "workingLatex": "x = 2,\\; y = 2,\\; z = 2",
          "explanation": "The unique point of intersection.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Geometric meaning",
          "workingLatex": "\\text{Three planes meet at a single point}",
          "explanation": "Unique solution corresponds to one common point.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify",
          "workingLatex": "\\text{Substitute into all three equations}",
          "explanation": "Confirm the values work.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = 2,\\; y = 2,\\; z = 2$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Systems of linear equations",
    "subtopicId": "fm.y1.pure.matrix-systems",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrix-systems.q028",
    "tags": [
      "solve-3x3"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Solve the system $\\begin{cases}x + 2y = 3\\\\y + z = 4\\\\2x + z = 5\\end{cases}$ using the matrix method.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Matrix equation",
          "workingLatex": "AX = B",
          "explanation": "Represent the three equations in matrix form.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up",
          "workingLatex": "A = \\begin{pmatrix}1 & 2 & 0\\\\0 & 1 & 1\\\\2 & 0 & 1\\end{pmatrix},\\; B = \\begin{pmatrix}3\\\\4\\\\5\\end{pmatrix}",
          "explanation": "Coefficient matrix and constants.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Determinant",
          "workingLatex": "\\det A = 5 \\neq 0",
          "explanation": "Confirm the system has a unique solution.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find $A^{-1}$",
          "workingLatex": "A^{-1} = \\begin{pmatrix}0.2 & -0.4 & 0.4\\\\0.4 & 0.2 & -0.2\\\\-0.4 & 0.8 & 0.2\\end{pmatrix}",
          "explanation": "Use the adjugate method for $3\\times3$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve",
          "workingLatex": "X = A^{-1}B",
          "explanation": "Apply the inverse to the constant vector.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute",
          "workingLatex": "X = \\begin{pmatrix}1\\\\1\\\\3\\end{pmatrix}",
          "explanation": "Multiply out to find $x$, $y$, $z$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solution",
          "workingLatex": "x = 1,\\; y = 1,\\; z = 3",
          "explanation": "The unique point of intersection.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Geometric meaning",
          "workingLatex": "\\text{Three planes meet at a single point}",
          "explanation": "Unique solution corresponds to one common point.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify",
          "workingLatex": "\\text{Substitute into all three equations}",
          "explanation": "Confirm the values work.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = 1,\\; y = 1,\\; z = 3$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Systems of linear equations",
    "subtopicId": "fm.y1.pure.matrix-systems",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrix-systems.q029",
    "tags": [
      "solve-3x3"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Solve the system $\\begin{cases}3x + y = 7\\\\2y + z = 5\\\\x + 2z = 6\\end{cases}$ using the matrix method.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Matrix equation",
          "workingLatex": "AX = B",
          "explanation": "Represent the three equations in matrix form.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up",
          "workingLatex": "A = \\begin{pmatrix}3 & 1 & 0\\\\0 & 2 & 1\\\\1 & 0 & 2\\end{pmatrix},\\; B = \\begin{pmatrix}7\\\\5\\\\6\\end{pmatrix}",
          "explanation": "Coefficient matrix and constants.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Determinant",
          "workingLatex": "\\det A = 13 \\neq 0",
          "explanation": "Confirm the system has a unique solution.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find $A^{-1}$",
          "workingLatex": "A^{-1} = \\begin{pmatrix}0.3077 & -0.1538 & 0.0769\\\\0.0769 & 0.4615 & -0.2308\\\\-0.1538 & 0.0769 & 0.4615\\end{pmatrix}",
          "explanation": "Use the adjugate method for $3\\times3$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve",
          "workingLatex": "X = A^{-1}B",
          "explanation": "Apply the inverse to the constant vector.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute",
          "workingLatex": "X = \\begin{pmatrix}1.8462\\\\1.4615\\\\2.0769\\end{pmatrix}",
          "explanation": "Multiply out to find $x$, $y$, $z$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solution",
          "workingLatex": "x = 1.8462,\\; y = 1.4615,\\; z = 2.0769",
          "explanation": "The unique point of intersection.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Geometric meaning",
          "workingLatex": "\\text{Three planes meet at a single point}",
          "explanation": "Unique solution corresponds to one common point.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify",
          "workingLatex": "\\text{Substitute into all three equations}",
          "explanation": "Confirm the values work.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = 1.8462,\\; y = 1.4615,\\; z = 2.0769$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Systems of linear equations",
    "subtopicId": "fm.y1.pure.matrix-systems",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrix-systems.q030",
    "tags": [
      "solve-3x3"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Solve the system $\\begin{cases}x + y = 2\\\\y + z = 3\\\\x + z = 4\\end{cases}$ using the matrix method.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Matrix equation",
          "workingLatex": "AX = B",
          "explanation": "Represent the three equations in matrix form.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up",
          "workingLatex": "A = \\begin{pmatrix}1 & 1 & 0\\\\0 & 1 & 1\\\\1 & 0 & 1\\end{pmatrix},\\; B = \\begin{pmatrix}2\\\\3\\\\4\\end{pmatrix}",
          "explanation": "Coefficient matrix and constants.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Determinant",
          "workingLatex": "\\det A = 2 \\neq 0",
          "explanation": "Confirm the system has a unique solution.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find $A^{-1}$",
          "workingLatex": "A^{-1} = \\begin{pmatrix}0.5 & -0.5 & 0.5\\\\0.5 & 0.5 & -0.5\\\\-0.5 & 0.5 & 0.5\\end{pmatrix}",
          "explanation": "Use the adjugate method for $3\\times3$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve",
          "workingLatex": "X = A^{-1}B",
          "explanation": "Apply the inverse to the constant vector.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute",
          "workingLatex": "X = \\begin{pmatrix}1.5\\\\0.5\\\\2.5\\end{pmatrix}",
          "explanation": "Multiply out to find $x$, $y$, $z$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solution",
          "workingLatex": "x = 1.5,\\; y = 0.5,\\; z = 2.5",
          "explanation": "The unique point of intersection.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Geometric meaning",
          "workingLatex": "\\text{Three planes meet at a single point}",
          "explanation": "Unique solution corresponds to one common point.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify",
          "workingLatex": "\\text{Substitute into all three equations}",
          "explanation": "Confirm the values work.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = 1.5,\\; y = 0.5,\\; z = 2.5$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Systems of linear equations",
    "subtopicId": "fm.y1.pure.matrix-systems",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrix-systems.q031",
    "tags": [
      "solve-3x3"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Solve the system $\\begin{cases}2x + y + z = 5\\\\x + 2y + z = 6\\\\x + y + 2z = 7\\end{cases}$ using the matrix method.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Matrix equation",
          "workingLatex": "AX = B",
          "explanation": "Represent the three equations in matrix form.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up",
          "workingLatex": "A = \\begin{pmatrix}2 & 1 & 1\\\\1 & 2 & 1\\\\1 & 1 & 2\\end{pmatrix},\\; B = \\begin{pmatrix}5\\\\6\\\\7\\end{pmatrix}",
          "explanation": "Coefficient matrix and constants.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Determinant",
          "workingLatex": "\\det A = 4 \\neq 0",
          "explanation": "Confirm the system has a unique solution.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find $A^{-1}$",
          "workingLatex": "A^{-1} = \\begin{pmatrix}0.75 & -0.25 & -0.25\\\\-0.25 & 0.75 & -0.25\\\\-0.25 & -0.25 & 0.75\\end{pmatrix}",
          "explanation": "Use the adjugate method for $3\\times3$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve",
          "workingLatex": "X = A^{-1}B",
          "explanation": "Apply the inverse to the constant vector.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute",
          "workingLatex": "X = \\begin{pmatrix}0.5\\\\1.5\\\\2.5\\end{pmatrix}",
          "explanation": "Multiply out to find $x$, $y$, $z$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solution",
          "workingLatex": "x = 0.5,\\; y = 1.5,\\; z = 2.5",
          "explanation": "The unique point of intersection.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Geometric meaning",
          "workingLatex": "\\text{Three planes meet at a single point}",
          "explanation": "Unique solution corresponds to one common point.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify",
          "workingLatex": "\\text{Substitute into all three equations}",
          "explanation": "Confirm the values work.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = 0.5,\\; y = 1.5,\\; z = 2.5$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Systems of linear equations",
    "subtopicId": "fm.y1.pure.matrix-systems",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrix-systems.q032",
    "tags": [
      "solve-3x3"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Solve the system $\\begin{cases}x + 2y + 3z = 14\\\\y + 4z = 9\\\\5x + 6y = 7\\end{cases}$ using the matrix method.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Matrix equation",
          "workingLatex": "AX = B",
          "explanation": "Represent the three equations in matrix form.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up",
          "workingLatex": "A = \\begin{pmatrix}1 & 2 & 3\\\\0 & 1 & 4\\\\5 & 6 & 0\\end{pmatrix},\\; B = \\begin{pmatrix}14\\\\9\\\\7\\end{pmatrix}",
          "explanation": "Coefficient matrix and constants.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Determinant",
          "workingLatex": "\\det A = 1 \\neq 0",
          "explanation": "Confirm the system has a unique solution.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find $A^{-1}$",
          "workingLatex": "A^{-1} = \\begin{pmatrix}-24 & 18 & 5\\\\20 & -15 & -4\\\\-5 & 4 & 1\\end{pmatrix}",
          "explanation": "Use the adjugate method for $3\\times3$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve",
          "workingLatex": "X = A^{-1}B",
          "explanation": "Apply the inverse to the constant vector.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute",
          "workingLatex": "X = \\begin{pmatrix}-139\\\\117\\\\-27\\end{pmatrix}",
          "explanation": "Multiply out to find $x$, $y$, $z$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solution",
          "workingLatex": "x = -139,\\; y = 117,\\; z = -27",
          "explanation": "The unique point of intersection.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Geometric meaning",
          "workingLatex": "\\text{Three planes meet at a single point}",
          "explanation": "Unique solution corresponds to one common point.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify",
          "workingLatex": "\\text{Substitute into all three equations}",
          "explanation": "Confirm the values work.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = -139,\\; y = 117,\\; z = -27$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Systems of linear equations",
    "subtopicId": "fm.y1.pure.matrix-systems",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrix-systems.q033",
    "tags": [
      "solve-3x3"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Solve the system $\\begin{cases}3x + 2y + z = 6\\\\x + y + z = 4\\\\2x + y + 3z = 9\\end{cases}$ using the matrix method.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Matrix equation",
          "workingLatex": "AX = B",
          "explanation": "Represent the three equations in matrix form.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up",
          "workingLatex": "A = \\begin{pmatrix}3 & 2 & 1\\\\1 & 1 & 1\\\\2 & 1 & 3\\end{pmatrix},\\; B = \\begin{pmatrix}6\\\\4\\\\9\\end{pmatrix}",
          "explanation": "Coefficient matrix and constants.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Determinant",
          "workingLatex": "\\det A = 3 \\neq 0",
          "explanation": "Confirm the system has a unique solution.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find $A^{-1}$",
          "workingLatex": "A^{-1} = \\begin{pmatrix}0.6667 & -1.6667 & 0.3333\\\\-0.3333 & 2.3333 & -0.6667\\\\-0.3333 & 0.3333 & 0.3333\\end{pmatrix}",
          "explanation": "Use the adjugate method for $3\\times3$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve",
          "workingLatex": "X = A^{-1}B",
          "explanation": "Apply the inverse to the constant vector.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute",
          "workingLatex": "X = \\begin{pmatrix}0.3333\\\\1.3333\\\\2.3333\\end{pmatrix}",
          "explanation": "Multiply out to find $x$, $y$, $z$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solution",
          "workingLatex": "x = 0.3333,\\; y = 1.3333,\\; z = 2.3333",
          "explanation": "The unique point of intersection.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Geometric meaning",
          "workingLatex": "\\text{Three planes meet at a single point}",
          "explanation": "Unique solution corresponds to one common point.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify",
          "workingLatex": "\\text{Substitute into all three equations}",
          "explanation": "Confirm the values work.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = 0.3333,\\; y = 1.3333,\\; z = 2.3333$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Systems of linear equations",
    "subtopicId": "fm.y1.pure.matrix-systems",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrix-systems.q034",
    "tags": [
      "solve-3x3"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Solve the system $\\begin{cases}2x + z = 5\\\\x + y = 3\\\\y + 2z = 7\\end{cases}$ using the matrix method.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Matrix equation",
          "workingLatex": "AX = B",
          "explanation": "Represent the three equations in matrix form.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up",
          "workingLatex": "A = \\begin{pmatrix}2 & 0 & 1\\\\1 & 1 & 0\\\\0 & 1 & 2\\end{pmatrix},\\; B = \\begin{pmatrix}5\\\\3\\\\7\\end{pmatrix}",
          "explanation": "Coefficient matrix and constants.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Determinant",
          "workingLatex": "\\det A = 5 \\neq 0",
          "explanation": "Confirm the system has a unique solution.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find $A^{-1}$",
          "workingLatex": "A^{-1} = \\begin{pmatrix}0.4 & 0.2 & -0.2\\\\-0.4 & 0.8 & 0.2\\\\0.2 & -0.4 & 0.4\\end{pmatrix}",
          "explanation": "Use the adjugate method for $3\\times3$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve",
          "workingLatex": "X = A^{-1}B",
          "explanation": "Apply the inverse to the constant vector.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute",
          "workingLatex": "X = \\begin{pmatrix}1.2\\\\1.8\\\\2.6\\end{pmatrix}",
          "explanation": "Multiply out to find $x$, $y$, $z$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solution",
          "workingLatex": "x = 1.2,\\; y = 1.8,\\; z = 2.6",
          "explanation": "The unique point of intersection.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Geometric meaning",
          "workingLatex": "\\text{Three planes meet at a single point}",
          "explanation": "Unique solution corresponds to one common point.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify",
          "workingLatex": "\\text{Substitute into all three equations}",
          "explanation": "Confirm the values work.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = 1.2,\\; y = 1.8,\\; z = 2.6$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Systems of linear equations",
    "subtopicId": "fm.y1.pure.matrix-systems",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrix-systems.q035",
    "tags": [
      "solve-3x3"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Solve the system $\\begin{cases}x + 2z = 5\\\\3y + z = 7\\\\2x + y = 4\\end{cases}$ using the matrix method.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Matrix equation",
          "workingLatex": "AX = B",
          "explanation": "Represent the three equations in matrix form.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up",
          "workingLatex": "A = \\begin{pmatrix}1 & 0 & 2\\\\0 & 3 & 1\\\\2 & 1 & 0\\end{pmatrix},\\; B = \\begin{pmatrix}5\\\\7\\\\4\\end{pmatrix}",
          "explanation": "Coefficient matrix and constants.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Determinant",
          "workingLatex": "\\det A = -13 \\neq 0",
          "explanation": "Confirm the system has a unique solution.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find $A^{-1}$",
          "workingLatex": "A^{-1} = \\begin{pmatrix}0.0769 & -0.1538 & 0.4615\\\\-0.1538 & 0.3077 & 0.0769\\\\0.4615 & 0.0769 & -0.2308\\end{pmatrix}",
          "explanation": "Use the adjugate method for $3\\times3$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve",
          "workingLatex": "X = A^{-1}B",
          "explanation": "Apply the inverse to the constant vector.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute",
          "workingLatex": "X = \\begin{pmatrix}1.1538\\\\1.6923\\\\1.9231\\end{pmatrix}",
          "explanation": "Multiply out to find $x$, $y$, $z$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solution",
          "workingLatex": "x = 1.1538,\\; y = 1.6923,\\; z = 1.9231",
          "explanation": "The unique point of intersection.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Geometric meaning",
          "workingLatex": "\\text{Three planes meet at a single point}",
          "explanation": "Unique solution corresponds to one common point.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify",
          "workingLatex": "\\text{Substitute into all three equations}",
          "explanation": "Confirm the values work.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = 1.1538,\\; y = 1.6923,\\; z = 1.9231$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Systems of linear equations",
    "subtopicId": "fm.y1.pure.matrix-systems",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrix-systems.q036",
    "tags": [
      "solve-3x3"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Solve the system $\\begin{cases}4x + y = 9\\\\2y + z = 5\\\\x + 3z = 7\\end{cases}$ using the matrix method.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Matrix equation",
          "workingLatex": "AX = B",
          "explanation": "Represent the three equations in matrix form.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up",
          "workingLatex": "A = \\begin{pmatrix}4 & 1 & 0\\\\0 & 2 & 1\\\\1 & 0 & 3\\end{pmatrix},\\; B = \\begin{pmatrix}9\\\\5\\\\7\\end{pmatrix}",
          "explanation": "Coefficient matrix and constants.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Determinant",
          "workingLatex": "\\det A = 25 \\neq 0",
          "explanation": "Confirm the system has a unique solution.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find $A^{-1}$",
          "workingLatex": "A^{-1} = \\begin{pmatrix}0.24 & -0.12 & 0.04\\\\0.04 & 0.48 & -0.16\\\\-0.08 & 0.04 & 0.32\\end{pmatrix}",
          "explanation": "Use the adjugate method for $3\\times3$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve",
          "workingLatex": "X = A^{-1}B",
          "explanation": "Apply the inverse to the constant vector.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute",
          "workingLatex": "X = \\begin{pmatrix}1.84\\\\1.64\\\\1.72\\end{pmatrix}",
          "explanation": "Multiply out to find $x$, $y$, $z$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solution",
          "workingLatex": "x = 1.84,\\; y = 1.64,\\; z = 1.72",
          "explanation": "The unique point of intersection.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Geometric meaning",
          "workingLatex": "\\text{Three planes meet at a single point}",
          "explanation": "Unique solution corresponds to one common point.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify",
          "workingLatex": "\\text{Substitute into all three equations}",
          "explanation": "Confirm the values work.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = 1.84,\\; y = 1.64,\\; z = 1.72$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Systems of linear equations",
    "subtopicId": "fm.y1.pure.matrix-systems",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrix-systems.q037",
    "tags": [
      "solve-3x3"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Solve the system $\\begin{cases}x + 2y + z = 4\\\\2x + y = 5\\\\y + 2z = 6\\end{cases}$ using the matrix method.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Matrix equation",
          "workingLatex": "AX = B",
          "explanation": "Represent the three equations in matrix form.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up",
          "workingLatex": "A = \\begin{pmatrix}1 & 2 & 1\\\\2 & 1 & 0\\\\0 & 1 & 2\\end{pmatrix},\\; B = \\begin{pmatrix}4\\\\5\\\\6\\end{pmatrix}",
          "explanation": "Coefficient matrix and constants.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Determinant",
          "workingLatex": "\\det A = -4 \\neq 0",
          "explanation": "Confirm the system has a unique solution.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find $A^{-1}$",
          "workingLatex": "A^{-1} = \\begin{pmatrix}-0.5 & 0.75 & 0.25\\\\1 & -0.5 & -0.5\\\\-0.5 & 0.25 & 0.75\\end{pmatrix}",
          "explanation": "Use the adjugate method for $3\\times3$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve",
          "workingLatex": "X = A^{-1}B",
          "explanation": "Apply the inverse to the constant vector.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute",
          "workingLatex": "X = \\begin{pmatrix}3.25\\\\-1.5\\\\3.75\\end{pmatrix}",
          "explanation": "Multiply out to find $x$, $y$, $z$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solution",
          "workingLatex": "x = 3.25,\\; y = -1.5,\\; z = 3.75",
          "explanation": "The unique point of intersection.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Geometric meaning",
          "workingLatex": "\\text{Three planes meet at a single point}",
          "explanation": "Unique solution corresponds to one common point.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify",
          "workingLatex": "\\text{Substitute into all three equations}",
          "explanation": "Confirm the values work.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = 3.25,\\; y = -1.5,\\; z = 3.75$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Systems of linear equations",
    "subtopicId": "fm.y1.pure.matrix-systems",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrix-systems.q038",
    "tags": [
      "solve-3x3"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Solve the system $\\begin{cases}2x + y + 3z = 8\\\\x + 2z = 5\\\\3x + 2y + z = 10\\end{cases}$ using the matrix method.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Matrix equation",
          "workingLatex": "AX = B",
          "explanation": "Represent the three equations in matrix form.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up",
          "workingLatex": "A = \\begin{pmatrix}2 & 1 & 3\\\\1 & 0 & 2\\\\3 & 2 & 1\\end{pmatrix},\\; B = \\begin{pmatrix}8\\\\5\\\\10\\end{pmatrix}",
          "explanation": "Coefficient matrix and constants.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Determinant",
          "workingLatex": "\\det A = 3 \\neq 0",
          "explanation": "Confirm the system has a unique solution.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find $A^{-1}$",
          "workingLatex": "A^{-1} = \\begin{pmatrix}-1.3333 & 1.6667 & 0.6667\\\\1.6667 & -2.3333 & -0.3333\\\\0.6667 & -0.3333 & -0.3333\\end{pmatrix}",
          "explanation": "Use the adjugate method for $3\\times3$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve",
          "workingLatex": "X = A^{-1}B",
          "explanation": "Apply the inverse to the constant vector.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute",
          "workingLatex": "X = \\begin{pmatrix}4.3333\\\\-1.6667\\\\0.3333\\end{pmatrix}",
          "explanation": "Multiply out to find $x$, $y$, $z$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solution",
          "workingLatex": "x = 4.3333,\\; y = -1.6667,\\; z = 0.3333",
          "explanation": "The unique point of intersection.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Geometric meaning",
          "workingLatex": "\\text{Three planes meet at a single point}",
          "explanation": "Unique solution corresponds to one common point.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify",
          "workingLatex": "\\text{Substitute into all three equations}",
          "explanation": "Confirm the values work.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = 4.3333,\\; y = -1.6667,\\; z = 0.3333$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Systems of linear equations",
    "subtopicId": "fm.y1.pure.matrix-systems",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrix-systems.q039",
    "tags": [
      "solve-3x3"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Solve the system $\\begin{cases}x + z = 2\\\\y + z = 3\\\\x + y = 1\\end{cases}$ using the matrix method.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Matrix equation",
          "workingLatex": "AX = B",
          "explanation": "Represent the three equations in matrix form.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up",
          "workingLatex": "A = \\begin{pmatrix}1 & 0 & 1\\\\0 & 1 & 1\\\\1 & 1 & 0\\end{pmatrix},\\; B = \\begin{pmatrix}2\\\\3\\\\1\\end{pmatrix}",
          "explanation": "Coefficient matrix and constants.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Determinant",
          "workingLatex": "\\det A = -2 \\neq 0",
          "explanation": "Confirm the system has a unique solution.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find $A^{-1}$",
          "workingLatex": "A^{-1} = \\begin{pmatrix}0.5 & -0.5 & 0.5\\\\-0.5 & 0.5 & 0.5\\\\0.5 & 0.5 & -0.5\\end{pmatrix}",
          "explanation": "Use the adjugate method for $3\\times3$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve",
          "workingLatex": "X = A^{-1}B",
          "explanation": "Apply the inverse to the constant vector.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute",
          "workingLatex": "X = \\begin{pmatrix}0\\\\1\\\\2\\end{pmatrix}",
          "explanation": "Multiply out to find $x$, $y$, $z$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solution",
          "workingLatex": "x = 0,\\; y = 1,\\; z = 2",
          "explanation": "The unique point of intersection.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Geometric meaning",
          "workingLatex": "\\text{Three planes meet at a single point}",
          "explanation": "Unique solution corresponds to one common point.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify",
          "workingLatex": "\\text{Substitute into all three equations}",
          "explanation": "Confirm the values work.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = 0,\\; y = 1,\\; z = 2$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Systems of linear equations",
    "subtopicId": "fm.y1.pure.matrix-systems",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrix-systems.q040",
    "tags": [
      "consistency",
      "unique"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "questionText": "Classify the system $\\begin{cases}x + y + z = 6\\\\2x + y = 5\\\\x + z = 4\\end{cases}$: does it have a unique solution, no solution, or infinitely many?",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Coefficient matrix",
          "workingLatex": "A = \\begin{pmatrix}1 & 1 & 1\\\\2 & 1 & 0\\\\1 & 0 & 1\\end{pmatrix}",
          "explanation": "Extract the matrix of coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Compute $\\det A$",
          "workingLatex": "\\det A = -2",
          "explanation": "Evaluate the determinant.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Criterion",
          "workingLatex": "\\det A \\neq 0 \\Rightarrow \\text{unique solution}",
          "explanation": "Non-singular coefficient matrix.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Consistency",
          "workingLatex": "\\text{System is consistent}",
          "explanation": "A unique solution exists.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Geometric view",
          "workingLatex": "\\text{Three planes meet at one point}",
          "explanation": "The planes intersect in a single point.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\text{Unique solution}",
          "explanation": "Classification of the system.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Matrix form",
          "workingLatex": "AX = B",
          "explanation": "Every linear system can be written as a matrix equation.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Determinant test",
          "workingLatex": "\\det A \\neq 0 \\Rightarrow \\text{unique solution}",
          "explanation": "Key criterion for invertibility.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Singular case",
          "workingLatex": "\\det A = 0",
          "explanation": "No unique solution; check consistency.",
          "diagram": null
        }
      ],
      "finalAnswer": "The system has a **unique solution** because $\\det A = -2 \\neq 0$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Systems of linear equations",
    "subtopicId": "fm.y1.pure.matrix-systems",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrix-systems.q041",
    "tags": [
      "consistency",
      "unique"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "questionText": "Classify the system $\\begin{cases}2x + y = 5\\\\y + z = 4\\\\x + 2z = 6\\end{cases}$: does it have a unique solution, no solution, or infinitely many?",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Coefficient matrix",
          "workingLatex": "A = \\begin{pmatrix}2 & 1 & 0\\\\0 & 1 & 1\\\\1 & 0 & 2\\end{pmatrix}",
          "explanation": "Extract the matrix of coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Compute $\\det A$",
          "workingLatex": "\\det A = 5",
          "explanation": "Evaluate the determinant.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Criterion",
          "workingLatex": "\\det A \\neq 0 \\Rightarrow \\text{unique solution}",
          "explanation": "Non-singular coefficient matrix.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Consistency",
          "workingLatex": "\\text{System is consistent}",
          "explanation": "A unique solution exists.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Geometric view",
          "workingLatex": "\\text{Three planes meet at one point}",
          "explanation": "The planes intersect in a single point.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\text{Unique solution}",
          "explanation": "Classification of the system.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Matrix form",
          "workingLatex": "AX = B",
          "explanation": "Every linear system can be written as a matrix equation.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Determinant test",
          "workingLatex": "\\det A \\neq 0 \\Rightarrow \\text{unique solution}",
          "explanation": "Key criterion for invertibility.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Singular case",
          "workingLatex": "\\det A = 0",
          "explanation": "No unique solution; check consistency.",
          "diagram": null
        }
      ],
      "finalAnswer": "The system has a **unique solution** because $\\det A = 5 \\neq 0$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Systems of linear equations",
    "subtopicId": "fm.y1.pure.matrix-systems",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrix-systems.q042",
    "tags": [
      "consistency",
      "unique"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "questionText": "Classify the system $\\begin{cases}x + 2y = 3\\\\y + z = 4\\\\2x + z = 5\\end{cases}$: does it have a unique solution, no solution, or infinitely many?",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Coefficient matrix",
          "workingLatex": "A = \\begin{pmatrix}1 & 2 & 0\\\\0 & 1 & 1\\\\2 & 0 & 1\\end{pmatrix}",
          "explanation": "Extract the matrix of coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Compute $\\det A$",
          "workingLatex": "\\det A = 5",
          "explanation": "Evaluate the determinant.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Criterion",
          "workingLatex": "\\det A \\neq 0 \\Rightarrow \\text{unique solution}",
          "explanation": "Non-singular coefficient matrix.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Consistency",
          "workingLatex": "\\text{System is consistent}",
          "explanation": "A unique solution exists.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Geometric view",
          "workingLatex": "\\text{Three planes meet at one point}",
          "explanation": "The planes intersect in a single point.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\text{Unique solution}",
          "explanation": "Classification of the system.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Matrix form",
          "workingLatex": "AX = B",
          "explanation": "Every linear system can be written as a matrix equation.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Determinant test",
          "workingLatex": "\\det A \\neq 0 \\Rightarrow \\text{unique solution}",
          "explanation": "Key criterion for invertibility.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Singular case",
          "workingLatex": "\\det A = 0",
          "explanation": "No unique solution; check consistency.",
          "diagram": null
        }
      ],
      "finalAnswer": "The system has a **unique solution** because $\\det A = 5 \\neq 0$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Systems of linear equations",
    "subtopicId": "fm.y1.pure.matrix-systems",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrix-systems.q043",
    "tags": [
      "consistency",
      "unique"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "questionText": "Classify the system $\\begin{cases}2x + y + z = 5\\\\x + 2y + z = 6\\\\x + y + 2z = 7\\end{cases}$: does it have a unique solution, no solution, or infinitely many?",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Coefficient matrix",
          "workingLatex": "A = \\begin{pmatrix}2 & 1 & 1\\\\1 & 2 & 1\\\\1 & 1 & 2\\end{pmatrix}",
          "explanation": "Extract the matrix of coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Compute $\\det A$",
          "workingLatex": "\\det A = 4",
          "explanation": "Evaluate the determinant.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Criterion",
          "workingLatex": "\\det A \\neq 0 \\Rightarrow \\text{unique solution}",
          "explanation": "Non-singular coefficient matrix.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Consistency",
          "workingLatex": "\\text{System is consistent}",
          "explanation": "A unique solution exists.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Geometric view",
          "workingLatex": "\\text{Three planes meet at one point}",
          "explanation": "The planes intersect in a single point.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\text{Unique solution}",
          "explanation": "Classification of the system.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Matrix form",
          "workingLatex": "AX = B",
          "explanation": "Every linear system can be written as a matrix equation.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Determinant test",
          "workingLatex": "\\det A \\neq 0 \\Rightarrow \\text{unique solution}",
          "explanation": "Key criterion for invertibility.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Singular case",
          "workingLatex": "\\det A = 0",
          "explanation": "No unique solution; check consistency.",
          "diagram": null
        }
      ],
      "finalAnswer": "The system has a **unique solution** because $\\det A = 4 \\neq 0$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Systems of linear equations",
    "subtopicId": "fm.y1.pure.matrix-systems",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrix-systems.q044",
    "tags": [
      "consistency",
      "unique"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "questionText": "Classify the system $\\begin{cases}3x + 2y + z = 6\\\\x + y + z = 4\\\\2x + y + 3z = 9\\end{cases}$: does it have a unique solution, no solution, or infinitely many?",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Coefficient matrix",
          "workingLatex": "A = \\begin{pmatrix}3 & 2 & 1\\\\1 & 1 & 1\\\\2 & 1 & 3\\end{pmatrix}",
          "explanation": "Extract the matrix of coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Compute $\\det A$",
          "workingLatex": "\\det A = 3",
          "explanation": "Evaluate the determinant.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Criterion",
          "workingLatex": "\\det A \\neq 0 \\Rightarrow \\text{unique solution}",
          "explanation": "Non-singular coefficient matrix.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Consistency",
          "workingLatex": "\\text{System is consistent}",
          "explanation": "A unique solution exists.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Geometric view",
          "workingLatex": "\\text{Three planes meet at one point}",
          "explanation": "The planes intersect in a single point.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\text{Unique solution}",
          "explanation": "Classification of the system.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Matrix form",
          "workingLatex": "AX = B",
          "explanation": "Every linear system can be written as a matrix equation.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Determinant test",
          "workingLatex": "\\det A \\neq 0 \\Rightarrow \\text{unique solution}",
          "explanation": "Key criterion for invertibility.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Singular case",
          "workingLatex": "\\det A = 0",
          "explanation": "No unique solution; check consistency.",
          "diagram": null
        }
      ],
      "finalAnswer": "The system has a **unique solution** because $\\det A = 3 \\neq 0$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Systems of linear equations",
    "subtopicId": "fm.y1.pure.matrix-systems",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrix-systems.q045",
    "tags": [
      "inconsistent",
      "no-solution"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Show that $\\begin{cases}x + y + z = 3\\\\x + y + z = 5\\\\x -y = 0\\end{cases}$ has no solution and describe the geometric configuration of the three planes.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Matrix form",
          "workingLatex": "AX = B",
          "explanation": "Write the system in matrix form.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Determinant",
          "workingLatex": "\\det A = 0",
          "explanation": "Compute the determinant of the coefficient matrix.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Singular matrix",
          "workingLatex": "\\det A = 0",
          "explanation": "The coefficient matrix is singular.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check consistency",
          "workingLatex": "\\text{Augmented system is inconsistent}",
          "explanation": "At least one equation contradicts the others.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Identify conflict",
          "workingLatex": "\\text{Parallel planes with different constants}",
          "explanation": "Same normal direction but different positions.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Geometric configuration",
          "workingLatex": "Two parallel planes ($x+y+z=3$ and $x+y+z=5$) with a third plane cutting them; no common point.",
          "explanation": "How the three planes are arranged in 3D.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclusion",
          "workingLatex": "\\text{No solution}",
          "explanation": "The planes do not share a common point.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "\\text{Inconsistent — no solution}",
          "explanation": "Final classification.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Matrix form",
          "workingLatex": "AX = B",
          "explanation": "Every linear system can be written as a matrix equation.",
          "diagram": null
        }
      ],
      "finalAnswer": "The system is **inconsistent** (no solution). Two parallel planes ($x+y+z=3$ and $x+y+z=5$) with a third plane cutting them; no common point."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Systems of linear equations",
    "subtopicId": "fm.y1.pure.matrix-systems",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrix-systems.q046",
    "tags": [
      "inconsistent",
      "no-solution"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Show that $\\begin{cases}x + y + z = 1\\\\2x + 2y + 2z = 3\\\\x = 1\\end{cases}$ has no solution and describe the geometric configuration of the three planes.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Matrix form",
          "workingLatex": "AX = B",
          "explanation": "Write the system in matrix form.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Determinant",
          "workingLatex": "\\det A = 0",
          "explanation": "Compute the determinant of the coefficient matrix.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Singular matrix",
          "workingLatex": "\\det A = 0",
          "explanation": "The coefficient matrix is singular.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check consistency",
          "workingLatex": "\\text{Augmented system is inconsistent}",
          "explanation": "At least one equation contradicts the others.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Identify conflict",
          "workingLatex": "\\text{Parallel planes with different constants}",
          "explanation": "Same normal direction but different positions.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Geometric configuration",
          "workingLatex": "Two parallel planes ($x+y+z=1$ and $2x+2y+2z=3$) and a third plane; inconsistent.",
          "explanation": "How the three planes are arranged in 3D.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclusion",
          "workingLatex": "\\text{No solution}",
          "explanation": "The planes do not share a common point.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "\\text{Inconsistent — no solution}",
          "explanation": "Final classification.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Matrix form",
          "workingLatex": "AX = B",
          "explanation": "Every linear system can be written as a matrix equation.",
          "diagram": null
        }
      ],
      "finalAnswer": "The system is **inconsistent** (no solution). Two parallel planes ($x+y+z=1$ and $2x+2y+2z=3$) and a third plane; inconsistent."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Systems of linear equations",
    "subtopicId": "fm.y1.pure.matrix-systems",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrix-systems.q047",
    "tags": [
      "inconsistent",
      "no-solution"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Show that $\\begin{cases}x + 2y + z = 3\\\\2x + 4y + 2z = 7\\\\y + z = 2\\end{cases}$ has no solution and describe the geometric configuration of the three planes.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Matrix form",
          "workingLatex": "AX = B",
          "explanation": "Write the system in matrix form.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Determinant",
          "workingLatex": "\\det A = 0",
          "explanation": "Compute the determinant of the coefficient matrix.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Singular matrix",
          "workingLatex": "\\det A = 0",
          "explanation": "The coefficient matrix is singular.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check consistency",
          "workingLatex": "\\text{Augmented system is inconsistent}",
          "explanation": "At least one equation contradicts the others.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Identify conflict",
          "workingLatex": "\\text{Parallel planes with different constants}",
          "explanation": "Same normal direction but different positions.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Geometric configuration",
          "workingLatex": "Two coincident parallel planes ($x+2y+z=3$ and $2x+4y+2z=7$ are parallel with different constants) plus a third plane.",
          "explanation": "How the three planes are arranged in 3D.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclusion",
          "workingLatex": "\\text{No solution}",
          "explanation": "The planes do not share a common point.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "\\text{Inconsistent — no solution}",
          "explanation": "Final classification.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Matrix form",
          "workingLatex": "AX = B",
          "explanation": "Every linear system can be written as a matrix equation.",
          "diagram": null
        }
      ],
      "finalAnswer": "The system is **inconsistent** (no solution). Two coincident parallel planes ($x+2y+z=3$ and $2x+4y+2z=7$ are parallel with different constants) plus a third plane."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Systems of linear equations",
    "subtopicId": "fm.y1.pure.matrix-systems",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrix-systems.q048",
    "tags": [
      "inconsistent",
      "no-solution"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Show that $\\begin{cases}x = 1\\\\y = 2\\\\x + y = 4\\end{cases}$ has no solution and describe the geometric configuration of the three planes.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Matrix form",
          "workingLatex": "AX = B",
          "explanation": "Write the system in matrix form.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Determinant",
          "workingLatex": "\\det A = 0",
          "explanation": "Compute the determinant of the coefficient matrix.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Singular matrix",
          "workingLatex": "\\det A = 0",
          "explanation": "The coefficient matrix is singular.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check consistency",
          "workingLatex": "\\text{Augmented system is inconsistent}",
          "explanation": "At least one equation contradicts the others.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Identify conflict",
          "workingLatex": "\\text{Parallel planes with different constants}",
          "explanation": "Same normal direction but different positions.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Geometric configuration",
          "workingLatex": "Two planes $x=1$ and $y=2$ meeting in a line, but $x+y=4$ contradicts that line.",
          "explanation": "How the three planes are arranged in 3D.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclusion",
          "workingLatex": "\\text{No solution}",
          "explanation": "The planes do not share a common point.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "\\text{Inconsistent — no solution}",
          "explanation": "Final classification.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Matrix form",
          "workingLatex": "AX = B",
          "explanation": "Every linear system can be written as a matrix equation.",
          "diagram": null
        }
      ],
      "finalAnswer": "The system is **inconsistent** (no solution). Two planes $x=1$ and $y=2$ meeting in a line, but $x+y=4$ contradicts that line."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Systems of linear equations",
    "subtopicId": "fm.y1.pure.matrix-systems",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrix-systems.q049",
    "tags": [
      "inconsistent",
      "no-solution"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Show that $\\begin{cases}2x + y + z = 3\\\\4x + 2y + 2z = 8\\\\x + z = 2\\end{cases}$ has no solution and describe the geometric configuration of the three planes.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Matrix form",
          "workingLatex": "AX = B",
          "explanation": "Write the system in matrix form.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Determinant",
          "workingLatex": "\\det A = 0",
          "explanation": "Compute the determinant of the coefficient matrix.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Singular matrix",
          "workingLatex": "\\det A = 0",
          "explanation": "The coefficient matrix is singular.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check consistency",
          "workingLatex": "\\text{Augmented system is inconsistent}",
          "explanation": "At least one equation contradicts the others.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Identify conflict",
          "workingLatex": "\\text{Parallel planes with different constants}",
          "explanation": "Same normal direction but different positions.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Geometric configuration",
          "workingLatex": "Planes $2x+y+z=3$ and $4x+2y+2z=8$ are parallel (same normal, different constants).",
          "explanation": "How the three planes are arranged in 3D.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclusion",
          "workingLatex": "\\text{No solution}",
          "explanation": "The planes do not share a common point.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "\\text{Inconsistent — no solution}",
          "explanation": "Final classification.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Matrix form",
          "workingLatex": "AX = B",
          "explanation": "Every linear system can be written as a matrix equation.",
          "diagram": null
        }
      ],
      "finalAnswer": "The system is **inconsistent** (no solution). Planes $2x+y+z=3$ and $4x+2y+2z=8$ are parallel (same normal, different constants)."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Systems of linear equations",
    "subtopicId": "fm.y1.pure.matrix-systems",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrix-systems.q050",
    "tags": [
      "inconsistent",
      "no-solution"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Show that $\\begin{cases}x + y = 1\\\\2x + 2y = 3\\\\z = 2\\end{cases}$ has no solution and describe the geometric configuration of the three planes.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Matrix form",
          "workingLatex": "AX = B",
          "explanation": "Write the system in matrix form.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Determinant",
          "workingLatex": "\\det A = 0",
          "explanation": "Compute the determinant of the coefficient matrix.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Singular matrix",
          "workingLatex": "\\det A = 0",
          "explanation": "The coefficient matrix is singular.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check consistency",
          "workingLatex": "\\text{Augmented system is inconsistent}",
          "explanation": "At least one equation contradicts the others.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Identify conflict",
          "workingLatex": "\\text{Parallel planes with different constants}",
          "explanation": "Same normal direction but different positions.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Geometric configuration",
          "workingLatex": "Two parallel vertical planes ($x+y=1$ and $x+y=3$) with horizontal plane $z=2$.",
          "explanation": "How the three planes are arranged in 3D.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclusion",
          "workingLatex": "\\text{No solution}",
          "explanation": "The planes do not share a common point.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "\\text{Inconsistent — no solution}",
          "explanation": "Final classification.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Matrix form",
          "workingLatex": "AX = B",
          "explanation": "Every linear system can be written as a matrix equation.",
          "diagram": null
        }
      ],
      "finalAnswer": "The system is **inconsistent** (no solution). Two parallel vertical planes ($x+y=1$ and $x+y=3$) with horizontal plane $z=2$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Systems of linear equations",
    "subtopicId": "fm.y1.pure.matrix-systems",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrix-systems.q051",
    "tags": [
      "inconsistent",
      "no-solution"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Show that $\\begin{cases}x + z = 1\\\\2x + 2z = 5\\\\y = 3\\end{cases}$ has no solution and describe the geometric configuration of the three planes.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Matrix form",
          "workingLatex": "AX = B",
          "explanation": "Write the system in matrix form.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Determinant",
          "workingLatex": "\\det A = 0",
          "explanation": "Compute the determinant of the coefficient matrix.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Singular matrix",
          "workingLatex": "\\det A = 0",
          "explanation": "The coefficient matrix is singular.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check consistency",
          "workingLatex": "\\text{Augmented system is inconsistent}",
          "explanation": "At least one equation contradicts the others.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Identify conflict",
          "workingLatex": "\\text{Parallel planes with different constants}",
          "explanation": "Same normal direction but different positions.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Geometric configuration",
          "workingLatex": "Parallel planes $x+z=1$ and $x+z=5$ with plane $y=3$.",
          "explanation": "How the three planes are arranged in 3D.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclusion",
          "workingLatex": "\\text{No solution}",
          "explanation": "The planes do not share a common point.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "\\text{Inconsistent — no solution}",
          "explanation": "Final classification.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Matrix form",
          "workingLatex": "AX = B",
          "explanation": "Every linear system can be written as a matrix equation.",
          "diagram": null
        }
      ],
      "finalAnswer": "The system is **inconsistent** (no solution). Parallel planes $x+z=1$ and $x+z=5$ with plane $y=3$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Systems of linear equations",
    "subtopicId": "fm.y1.pure.matrix-systems",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrix-systems.q052",
    "tags": [
      "inconsistent",
      "no-solution"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Show that $\\begin{cases}x + y + z = 2\\\\x + y + z = 4\\\\2x + 2y + 2z = 5\\end{cases}$ has no solution and describe the geometric configuration of the three planes.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Matrix form",
          "workingLatex": "AX = B",
          "explanation": "Write the system in matrix form.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Determinant",
          "workingLatex": "\\det A = 0",
          "explanation": "Compute the determinant of the coefficient matrix.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Singular matrix",
          "workingLatex": "\\det A = 0",
          "explanation": "The coefficient matrix is singular.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check consistency",
          "workingLatex": "\\text{Augmented system is inconsistent}",
          "explanation": "At least one equation contradicts the others.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Identify conflict",
          "workingLatex": "\\text{Parallel planes with different constants}",
          "explanation": "Same normal direction but different positions.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Geometric configuration",
          "workingLatex": "Three planes: two with $x+y+z=2$ and $x+y+z=4$ (parallel), third $2x+2y+2z=5$ inconsistent with both.",
          "explanation": "How the three planes are arranged in 3D.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclusion",
          "workingLatex": "\\text{No solution}",
          "explanation": "The planes do not share a common point.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "\\text{Inconsistent — no solution}",
          "explanation": "Final classification.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Matrix form",
          "workingLatex": "AX = B",
          "explanation": "Every linear system can be written as a matrix equation.",
          "diagram": null
        }
      ],
      "finalAnswer": "The system is **inconsistent** (no solution). Three planes: two with $x+y+z=2$ and $x+y+z=4$ (parallel), third $2x+2y+2z=5$ inconsistent with both."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Systems of linear equations",
    "subtopicId": "fm.y1.pure.matrix-systems",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrix-systems.q053",
    "tags": [
      "infinite-solutions"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Show that $\\begin{cases}x + y + z = 6\\\\2x + y + z = 10\\\\3x + 2y + 2z = 16\\end{cases}$ has infinitely many solutions and describe the planes geometrically.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Coefficient matrix",
          "workingLatex": "A = \\begin{pmatrix}1 & 1 & 1\\\\2 & 1 & 1\\\\3 & 2 & 2\\end{pmatrix}",
          "explanation": "Form the matrix of coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Determinant",
          "workingLatex": "\\det A = 0",
          "explanation": "Evaluate the determinant.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Singular",
          "workingLatex": "\\det A = 0",
          "explanation": "The matrix is not invertible.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Row dependence",
          "workingLatex": "\\text{One equation is a linear combination of the others}",
          "explanation": "Equations are not independent.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Consistency",
          "workingLatex": "\\text{System is consistent}",
          "explanation": "No contradictory equations.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Free variable",
          "workingLatex": "\\text{One degree of freedom}",
          "explanation": "Infinitely many solutions along a line.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Geometric view",
          "workingLatex": "All three planes meet in a common line (sheaf of planes through one line).",
          "explanation": "Configuration of the three planes.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "\\text{Infinitely many solutions}",
          "explanation": "Classification.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Matrix form",
          "workingLatex": "AX = B",
          "explanation": "Every linear system can be written as a matrix equation.",
          "diagram": null
        }
      ],
      "finalAnswer": "The system has **infinitely many solutions**. All three planes meet in a common line (sheaf of planes through one line)."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Systems of linear equations",
    "subtopicId": "fm.y1.pure.matrix-systems",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrix-systems.q054",
    "tags": [
      "infinite-solutions"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Show that $\\begin{cases}x + 2y + z = 4\\\\2x + 4y + 2z = 8\\\\x + y = 2\\end{cases}$ has infinitely many solutions and describe the planes geometrically.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Coefficient matrix",
          "workingLatex": "A = \\begin{pmatrix}1 & 2 & 1\\\\2 & 4 & 2\\\\1 & 1 & 0\\end{pmatrix}",
          "explanation": "Form the matrix of coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Determinant",
          "workingLatex": "\\det A = 0",
          "explanation": "Evaluate the determinant.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Singular",
          "workingLatex": "\\det A = 0",
          "explanation": "The matrix is not invertible.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Row dependence",
          "workingLatex": "\\text{One equation is a linear combination of the others}",
          "explanation": "Equations are not independent.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Consistency",
          "workingLatex": "\\text{System is consistent}",
          "explanation": "No contradictory equations.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Free variable",
          "workingLatex": "\\text{One degree of freedom}",
          "explanation": "Infinitely many solutions along a line.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Geometric view",
          "workingLatex": "First two planes are coincident; third cuts them in a line of intersection.",
          "explanation": "Configuration of the three planes.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "\\text{Infinitely many solutions}",
          "explanation": "Classification.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Matrix form",
          "workingLatex": "AX = B",
          "explanation": "Every linear system can be written as a matrix equation.",
          "diagram": null
        }
      ],
      "finalAnswer": "The system has **infinitely many solutions**. First two planes are coincident; third cuts them in a line of intersection."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Systems of linear equations",
    "subtopicId": "fm.y1.pure.matrix-systems",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrix-systems.q055",
    "tags": [
      "infinite-solutions"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Show that $\\begin{cases}x = 2\\\\y = 3\\\\x + y = 5\\end{cases}$ has infinitely many solutions and describe the planes geometrically.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Coefficient matrix",
          "workingLatex": "A = \\begin{pmatrix}1 & 0 & 0\\\\0 & 1 & 0\\\\1 & 1 & 0\\end{pmatrix}",
          "explanation": "Form the matrix of coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Determinant",
          "workingLatex": "\\det A = 0",
          "explanation": "Evaluate the determinant.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Singular",
          "workingLatex": "\\det A = 0",
          "explanation": "The matrix is not invertible.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Row dependence",
          "workingLatex": "\\text{One equation is a linear combination of the others}",
          "explanation": "Equations are not independent.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Consistency",
          "workingLatex": "\\text{System is consistent}",
          "explanation": "No contradictory equations.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Free variable",
          "workingLatex": "\\text{One degree of freedom}",
          "explanation": "Infinitely many solutions along a line.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Geometric view",
          "workingLatex": "Planes $x=2$, $y=3$, and $x+y=5$ — the third is the sum of the first two; line of intersection.",
          "explanation": "Configuration of the three planes.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "\\text{Infinitely many solutions}",
          "explanation": "Classification.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Matrix form",
          "workingLatex": "AX = B",
          "explanation": "Every linear system can be written as a matrix equation.",
          "diagram": null
        }
      ],
      "finalAnswer": "The system has **infinitely many solutions**. Planes $x=2$, $y=3$, and $x+y=5$ — the third is the sum of the first two; line of intersection."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Systems of linear equations",
    "subtopicId": "fm.y1.pure.matrix-systems",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrix-systems.q056",
    "tags": [
      "infinite-solutions"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Show that $\\begin{cases}x + y = 3\\\\y + z = 4\\\\x + 2y + z = 7\\end{cases}$ has infinitely many solutions and describe the planes geometrically.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Coefficient matrix",
          "workingLatex": "A = \\begin{pmatrix}1 & 1 & 0\\\\0 & 1 & 1\\\\1 & 2 & 1\\end{pmatrix}",
          "explanation": "Form the matrix of coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Determinant",
          "workingLatex": "\\det A = 0",
          "explanation": "Evaluate the determinant.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Singular",
          "workingLatex": "\\det A = 0",
          "explanation": "The matrix is not invertible.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Row dependence",
          "workingLatex": "\\text{One equation is a linear combination of the others}",
          "explanation": "Equations are not independent.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Consistency",
          "workingLatex": "\\text{System is consistent}",
          "explanation": "No contradictory equations.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Free variable",
          "workingLatex": "\\text{One degree of freedom}",
          "explanation": "Infinitely many solutions along a line.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Geometric view",
          "workingLatex": "Third equation is the sum of the first two; planes intersect in a line.",
          "explanation": "Configuration of the three planes.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "\\text{Infinitely many solutions}",
          "explanation": "Classification.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Matrix form",
          "workingLatex": "AX = B",
          "explanation": "Every linear system can be written as a matrix equation.",
          "diagram": null
        }
      ],
      "finalAnswer": "The system has **infinitely many solutions**. Third equation is the sum of the first two; planes intersect in a line."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Systems of linear equations",
    "subtopicId": "fm.y1.pure.matrix-systems",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrix-systems.q057",
    "tags": [
      "infinite-solutions"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Show that $\\begin{cases}2x + y + z = 6\\\\4x + 2y + 2z = 12\\\\x + z = 3\\end{cases}$ has infinitely many solutions and describe the planes geometrically.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Coefficient matrix",
          "workingLatex": "A = \\begin{pmatrix}2 & 1 & 1\\\\4 & 2 & 2\\\\1 & 0 & 1\\end{pmatrix}",
          "explanation": "Form the matrix of coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Determinant",
          "workingLatex": "\\det A = 0",
          "explanation": "Evaluate the determinant.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Singular",
          "workingLatex": "\\det A = 0",
          "explanation": "The matrix is not invertible.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Row dependence",
          "workingLatex": "\\text{One equation is a linear combination of the others}",
          "explanation": "Equations are not independent.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Consistency",
          "workingLatex": "\\text{System is consistent}",
          "explanation": "No contradictory equations.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Free variable",
          "workingLatex": "\\text{One degree of freedom}",
          "explanation": "Infinitely many solutions along a line.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Geometric view",
          "workingLatex": "First two planes coincide ($2x+y+z=6$ and $4x+2y+2z=12$); third intersects in a line.",
          "explanation": "Configuration of the three planes.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "\\text{Infinitely many solutions}",
          "explanation": "Classification.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Matrix form",
          "workingLatex": "AX = B",
          "explanation": "Every linear system can be written as a matrix equation.",
          "diagram": null
        }
      ],
      "finalAnswer": "The system has **infinitely many solutions**. First two planes coincide ($2x+y+z=6$ and $4x+2y+2z=12$); third intersects in a line."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Systems of linear equations",
    "subtopicId": "fm.y1.pure.matrix-systems",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrix-systems.q058",
    "tags": [
      "infinite-solutions"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Show that $\\begin{cases}x + z = 2\\\\y + z = 3\\\\x + y + 2z = 5\\end{cases}$ has infinitely many solutions and describe the planes geometrically.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Coefficient matrix",
          "workingLatex": "A = \\begin{pmatrix}1 & 0 & 1\\\\0 & 1 & 1\\\\1 & 1 & 2\\end{pmatrix}",
          "explanation": "Form the matrix of coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Determinant",
          "workingLatex": "\\det A = 0",
          "explanation": "Evaluate the determinant.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Singular",
          "workingLatex": "\\det A = 0",
          "explanation": "The matrix is not invertible.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Row dependence",
          "workingLatex": "\\text{One equation is a linear combination of the others}",
          "explanation": "Equations are not independent.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Consistency",
          "workingLatex": "\\text{System is consistent}",
          "explanation": "No contradictory equations.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Free variable",
          "workingLatex": "\\text{One degree of freedom}",
          "explanation": "Infinitely many solutions along a line.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Geometric view",
          "workingLatex": "Third plane is the sum of the first two; common line of intersection.",
          "explanation": "Configuration of the three planes.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "\\text{Infinitely many solutions}",
          "explanation": "Classification.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Matrix form",
          "workingLatex": "AX = B",
          "explanation": "Every linear system can be written as a matrix equation.",
          "diagram": null
        }
      ],
      "finalAnswer": "The system has **infinitely many solutions**. Third plane is the sum of the first two; common line of intersection."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Systems of linear equations",
    "subtopicId": "fm.y1.pure.matrix-systems",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrix-systems.q059",
    "tags": [
      "infinite-solutions"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Show that $\\begin{cases}x + 2y = 3\\\\2x + 4y = 6\\\\z = 2\\end{cases}$ has infinitely many solutions and describe the planes geometrically.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Coefficient matrix",
          "workingLatex": "A = \\begin{pmatrix}1 & 2 & 0\\\\2 & 4 & 0\\\\0 & 0 & 1\\end{pmatrix}",
          "explanation": "Form the matrix of coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Determinant",
          "workingLatex": "\\det A = 0",
          "explanation": "Evaluate the determinant.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Singular",
          "workingLatex": "\\det A = 0",
          "explanation": "The matrix is not invertible.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Row dependence",
          "workingLatex": "\\text{One equation is a linear combination of the others}",
          "explanation": "Equations are not independent.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Consistency",
          "workingLatex": "\\text{System is consistent}",
          "explanation": "No contradictory equations.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Free variable",
          "workingLatex": "\\text{One degree of freedom}",
          "explanation": "Infinitely many solutions along a line.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Geometric view",
          "workingLatex": "Two coincident planes ($x+2y=3$ and $2x+4y=6$) cut by $z=2$ in a line.",
          "explanation": "Configuration of the three planes.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "\\text{Infinitely many solutions}",
          "explanation": "Classification.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Matrix form",
          "workingLatex": "AX = B",
          "explanation": "Every linear system can be written as a matrix equation.",
          "diagram": null
        }
      ],
      "finalAnswer": "The system has **infinitely many solutions**. Two coincident planes ($x+2y=3$ and $2x+4y=6$) cut by $z=2$ in a line."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Systems of linear equations",
    "subtopicId": "fm.y1.pure.matrix-systems",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrix-systems.q060",
    "tags": [
      "infinite-solutions"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Show that $\\begin{cases}x + y + z = 6\\\\2x + 2y + 2z = 12\\\\3x + 3y + 3z = 18\\end{cases}$ has infinitely many solutions and describe the planes geometrically.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Coefficient matrix",
          "workingLatex": "A = \\begin{pmatrix}1 & 1 & 1\\\\2 & 2 & 2\\\\3 & 3 & 3\\end{pmatrix}",
          "explanation": "Form the matrix of coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Determinant",
          "workingLatex": "\\det A = 0",
          "explanation": "Evaluate the determinant.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Singular",
          "workingLatex": "\\det A = 0",
          "explanation": "The matrix is not invertible.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Row dependence",
          "workingLatex": "\\text{One equation is a linear combination of the others}",
          "explanation": "Equations are not independent.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Consistency",
          "workingLatex": "\\text{System is consistent}",
          "explanation": "No contradictory equations.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Free variable",
          "workingLatex": "\\text{One degree of freedom}",
          "explanation": "Infinitely many solutions along a line.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Geometric view",
          "workingLatex": "All three planes are coincident (same plane $x+y+z=6$).",
          "explanation": "Configuration of the three planes.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "\\text{Infinitely many solutions}",
          "explanation": "Classification.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Matrix form",
          "workingLatex": "AX = B",
          "explanation": "Every linear system can be written as a matrix equation.",
          "diagram": null
        }
      ],
      "finalAnswer": "The system has **infinitely many solutions**. All three planes are coincident (same plane $x+y+z=6$)."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Systems of linear equations",
    "subtopicId": "fm.y1.pure.matrix-systems",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrix-systems.q061",
    "tags": [
      "geometry-planes"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "questionText": "Describe the geometric configuration of the three planes defined by $\\begin{cases}x + y + z = 6\\\\2x + y = 5\\\\x + z = 4\\end{cases}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "System",
          "workingLatex": "\\begin{cases}x + y + z = 6\\\\2x + y = 5\\\\x + z = 4\\end{cases}",
          "explanation": "Each equation represents a plane in 3D.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Determinant",
          "workingLatex": "\\det A = -2",
          "explanation": "Test the coefficient matrix.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Classification",
          "workingLatex": "Unique solution",
          "explanation": "Algebraic type of solution set.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Plane 1",
          "workingLatex": "\\text{Normal and position from equation 1}",
          "explanation": "Identify the first plane.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Plane 2",
          "workingLatex": "\\text{Normal and position from equation 2}",
          "explanation": "Identify the second plane.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Plane 3",
          "workingLatex": "\\text{Normal and position from equation 3}",
          "explanation": "Identify the third plane.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Configuration",
          "workingLatex": "Three planes meeting at a single point (like three faces of a corner).",
          "explanation": "How the three planes relate spatially.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "Three planes meeting at a single point (like three faces of a corner).",
          "explanation": "Geometric description.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Matrix form",
          "workingLatex": "AX = B",
          "explanation": "Every linear system can be written as a matrix equation.",
          "diagram": null
        }
      ],
      "finalAnswer": "Three planes meeting at a single point (like three faces of a corner)."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Systems of linear equations",
    "subtopicId": "fm.y1.pure.matrix-systems",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrix-systems.q062",
    "tags": [
      "geometry-planes"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "questionText": "Describe the geometric configuration of the three planes defined by $\\begin{cases}x + y + z = 3\\\\x + y + z = 5\\\\x -y = 0\\end{cases}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "System",
          "workingLatex": "\\begin{cases}x + y + z = 3\\\\x + y + z = 5\\\\x -y = 0\\end{cases}",
          "explanation": "Each equation represents a plane in 3D.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Determinant",
          "workingLatex": "\\det A = 0",
          "explanation": "Test the coefficient matrix.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Classification",
          "workingLatex": "No solution",
          "explanation": "Algebraic type of solution set.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Plane 1",
          "workingLatex": "\\text{Normal and position from equation 1}",
          "explanation": "Identify the first plane.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Plane 2",
          "workingLatex": "\\text{Normal and position from equation 2}",
          "explanation": "Identify the second plane.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Plane 3",
          "workingLatex": "\\text{Normal and position from equation 3}",
          "explanation": "Identify the third plane.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Configuration",
          "workingLatex": "Two parallel planes with a third plane cutting them; triangular prism arrangement with no common point.",
          "explanation": "How the three planes relate spatially.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "Two parallel planes with a third plane cutting them; triangular prism arrangement with no common point.",
          "explanation": "Geometric description.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Matrix form",
          "workingLatex": "AX = B",
          "explanation": "Every linear system can be written as a matrix equation.",
          "diagram": null
        }
      ],
      "finalAnswer": "Two parallel planes with a third plane cutting them; triangular prism arrangement with no common point."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Systems of linear equations",
    "subtopicId": "fm.y1.pure.matrix-systems",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrix-systems.q063",
    "tags": [
      "geometry-planes"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "questionText": "Describe the geometric configuration of the three planes defined by $\\begin{cases}x + y + z = 6\\\\2x + y + z = 10\\\\3x + 2y + 2z = 16\\end{cases}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "System",
          "workingLatex": "\\begin{cases}x + y + z = 6\\\\2x + y + z = 10\\\\3x + 2y + 2z = 16\\end{cases}",
          "explanation": "Each equation represents a plane in 3D.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Determinant",
          "workingLatex": "\\det A = 0",
          "explanation": "Test the coefficient matrix.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Classification",
          "workingLatex": "Infinitely many solutions",
          "explanation": "Algebraic type of solution set.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Plane 1",
          "workingLatex": "\\text{Normal and position from equation 1}",
          "explanation": "Identify the first plane.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Plane 2",
          "workingLatex": "\\text{Normal and position from equation 2}",
          "explanation": "Identify the second plane.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Plane 3",
          "workingLatex": "\\text{Normal and position from equation 3}",
          "explanation": "Identify the third plane.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Configuration",
          "workingLatex": "Three planes intersecting in a common line.",
          "explanation": "How the three planes relate spatially.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "Three planes intersecting in a common line.",
          "explanation": "Geometric description.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Matrix form",
          "workingLatex": "AX = B",
          "explanation": "Every linear system can be written as a matrix equation.",
          "diagram": null
        }
      ],
      "finalAnswer": "Three planes intersecting in a common line."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Systems of linear equations",
    "subtopicId": "fm.y1.pure.matrix-systems",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrix-systems.q064",
    "tags": [
      "geometry-planes"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "questionText": "Describe the geometric configuration of the three planes defined by $\\begin{cases}x + 2y + z = 4\\\\2x + 4y + 2z = 8\\\\x + y = 2\\end{cases}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "System",
          "workingLatex": "\\begin{cases}x + 2y + z = 4\\\\2x + 4y + 2z = 8\\\\x + y = 2\\end{cases}",
          "explanation": "Each equation represents a plane in 3D.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Determinant",
          "workingLatex": "\\det A = 0",
          "explanation": "Test the coefficient matrix.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Classification",
          "workingLatex": "Infinitely many solutions",
          "explanation": "Algebraic type of solution set.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Plane 1",
          "workingLatex": "\\text{Normal and position from equation 1}",
          "explanation": "Identify the first plane.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Plane 2",
          "workingLatex": "\\text{Normal and position from equation 2}",
          "explanation": "Identify the second plane.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Plane 3",
          "workingLatex": "\\text{Normal and position from equation 3}",
          "explanation": "Identify the third plane.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Configuration",
          "workingLatex": "Two coincident planes with a third plane cutting through them.",
          "explanation": "How the three planes relate spatially.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "Two coincident planes with a third plane cutting through them.",
          "explanation": "Geometric description.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Matrix form",
          "workingLatex": "AX = B",
          "explanation": "Every linear system can be written as a matrix equation.",
          "diagram": null
        }
      ],
      "finalAnswer": "Two coincident planes with a third plane cutting through them."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Systems of linear equations",
    "subtopicId": "fm.y1.pure.matrix-systems",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrix-systems.q065",
    "tags": [
      "parameter-k",
      "no-solution"
    ],
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "written",
    "questionText": "Find the value of $k$ for which the system $\\begin{cases}x + 1y + 1z = 2\\\\2x + 2y + 2z = 4\\\\x = 1\\end{cases}$ has no solution.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Coefficient matrix",
          "workingLatex": "A(k) = \\begin{pmatrix}1 & 1 & 1\\\\2 & 2 & 2\\\\1 & 0 & 0\\end{pmatrix}",
          "explanation": "Matrix depends on parameter $k$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Determinant",
          "workingLatex": "\\det A(k) = 0",
          "explanation": "Set determinant equal to zero for singularity.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for $k$",
          "workingLatex": "k = 2",
          "explanation": "Find critical value(s) of $k$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Analyse cases",
          "workingLatex": "\\text{Consider } k = 2 \\text{ and other values}",
          "explanation": "Test consistency at the critical value.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Outcome",
          "workingLatex": "At $k=2$, rows 1 and 2 are proportional with inconsistent constants — no solution.",
          "explanation": "Classification for the required value of $k$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "k = 2",
          "explanation": "Required parameter value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Matrix form",
          "workingLatex": "AX = B",
          "explanation": "Every linear system can be written as a matrix equation.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Determinant test",
          "workingLatex": "\\det A \\neq 0 \\Rightarrow \\text{unique solution}",
          "explanation": "Key criterion for invertibility.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Singular case",
          "workingLatex": "\\det A = 0",
          "explanation": "No unique solution; check consistency.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Geometry",
          "workingLatex": "\\text{Each equation is a plane in 3D}",
          "explanation": "Visualise the intersection.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Consistency",
          "workingLatex": "\\text{No contradictory equations}",
          "explanation": "Augmented system must be consistent.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Verify",
          "workingLatex": "\\text{Substitute the solution}",
          "explanation": "Always check your answer.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Matrix form",
          "workingLatex": "AX = B",
          "explanation": "Every linear system can be written as a matrix equation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$k = 2$. At $k=2$, rows 1 and 2 are proportional with inconsistent constants — no solution."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Systems of linear equations",
    "subtopicId": "fm.y1.pure.matrix-systems",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrix-systems.q066",
    "tags": [
      "parameter-k",
      "infinite"
    ],
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "written",
    "questionText": "Find the value of $k$ for which the system $\\begin{cases}x = 1\\\\+ 1y = 2\\\\kx + 1y = 3\\end{cases}$ has infinitely many solutions.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Coefficient matrix",
          "workingLatex": "A(k) = \\begin{pmatrix}1 & 0 & 0\\\\0 & 1 & 0\\\\k & 1 & 0\\end{pmatrix}",
          "explanation": "Matrix depends on parameter $k$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Determinant",
          "workingLatex": "\\det A(k) = 0",
          "explanation": "Set determinant equal to zero for singularity.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for $k$",
          "workingLatex": "k = 1",
          "explanation": "Find critical value(s) of $k$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Analyse cases",
          "workingLatex": "\\text{Consider } k = 1 \\text{ and other values}",
          "explanation": "Test consistency at the critical value.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Outcome",
          "workingLatex": "When the third equation becomes dependent, the system has infinitely many solutions.",
          "explanation": "Classification for the required value of $k$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "k = 1",
          "explanation": "Required parameter value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Matrix form",
          "workingLatex": "AX = B",
          "explanation": "Every linear system can be written as a matrix equation.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Determinant test",
          "workingLatex": "\\det A \\neq 0 \\Rightarrow \\text{unique solution}",
          "explanation": "Key criterion for invertibility.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Singular case",
          "workingLatex": "\\det A = 0",
          "explanation": "No unique solution; check consistency.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Geometry",
          "workingLatex": "\\text{Each equation is a plane in 3D}",
          "explanation": "Visualise the intersection.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Consistency",
          "workingLatex": "\\text{No contradictory equations}",
          "explanation": "Augmented system must be consistent.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Verify",
          "workingLatex": "\\text{Substitute the solution}",
          "explanation": "Always check your answer.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Matrix form",
          "workingLatex": "AX = B",
          "explanation": "Every linear system can be written as a matrix equation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$k = 1$. When the third equation becomes dependent, the system has infinitely many solutions."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Systems of linear equations",
    "subtopicId": "fm.y1.pure.matrix-systems",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrix-systems.q067",
    "tags": [
      "parameter-k",
      "unique"
    ],
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "written",
    "questionText": "Find the value of $k$ for which the system $\\begin{cases}2x + 1y = 3\\\\x + 2y + 1z = 4\\\\+ 1y = 2\\end{cases}$ has a unique solution.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Coefficient matrix",
          "workingLatex": "A(k) = \\begin{pmatrix}2 & 1 & 0\\\\1 & 2 & 1\\\\0 & 1 & k\\end{pmatrix}",
          "explanation": "Matrix depends on parameter $k$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Determinant",
          "workingLatex": "\\det A(k) = 0",
          "explanation": "Set determinant equal to zero for singularity.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for $k$",
          "workingLatex": "k = 2",
          "explanation": "Find critical value(s) of $k$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Analyse cases",
          "workingLatex": "\\text{Consider } k = 2 \\text{ and other values}",
          "explanation": "Test consistency at the critical value.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Outcome",
          "workingLatex": "For $k \\neq 2$, $\\det A \\neq 0$ and the system has a unique solution.",
          "explanation": "Classification for the required value of $k$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "k = 2",
          "explanation": "Required parameter value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Matrix form",
          "workingLatex": "AX = B",
          "explanation": "Every linear system can be written as a matrix equation.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Determinant test",
          "workingLatex": "\\det A \\neq 0 \\Rightarrow \\text{unique solution}",
          "explanation": "Key criterion for invertibility.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Singular case",
          "workingLatex": "\\det A = 0",
          "explanation": "No unique solution; check consistency.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Geometry",
          "workingLatex": "\\text{Each equation is a plane in 3D}",
          "explanation": "Visualise the intersection.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Consistency",
          "workingLatex": "\\text{No contradictory equations}",
          "explanation": "Augmented system must be consistent.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Verify",
          "workingLatex": "\\text{Substitute the solution}",
          "explanation": "Always check your answer.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Matrix form",
          "workingLatex": "AX = B",
          "explanation": "Every linear system can be written as a matrix equation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$k = 2$. For $k \\neq 2$, $\\det A \\neq 0$ and the system has a unique solution."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Systems of linear equations",
    "subtopicId": "fm.y1.pure.matrix-systems",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrix-systems.q068",
    "tags": [
      "parameter-k",
      "no-solution"
    ],
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "written",
    "questionText": "Find the value of $k$ for which the system $\\begin{cases}x + 1y = 1\\\\2x + 2y = k\\\\+ 1z = 2\\end{cases}$ has no solution.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Coefficient matrix",
          "workingLatex": "A(k) = \\begin{pmatrix}1 & 1 & 0\\\\2 & 2 & 0\\\\0 & 0 & 1\\end{pmatrix}",
          "explanation": "Matrix depends on parameter $k$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Determinant",
          "workingLatex": "\\det A(k) = 0",
          "explanation": "Set determinant equal to zero for singularity.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for $k$",
          "workingLatex": "k = 3",
          "explanation": "Find critical value(s) of $k$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Analyse cases",
          "workingLatex": "\\text{Consider } k = 3 \\text{ and other values}",
          "explanation": "Test consistency at the critical value.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Outcome",
          "workingLatex": "When $k=3$, the first two planes are parallel with different constants — no solution.",
          "explanation": "Classification for the required value of $k$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "k = 3",
          "explanation": "Required parameter value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Matrix form",
          "workingLatex": "AX = B",
          "explanation": "Every linear system can be written as a matrix equation.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Determinant test",
          "workingLatex": "\\det A \\neq 0 \\Rightarrow \\text{unique solution}",
          "explanation": "Key criterion for invertibility.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Singular case",
          "workingLatex": "\\det A = 0",
          "explanation": "No unique solution; check consistency.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Geometry",
          "workingLatex": "\\text{Each equation is a plane in 3D}",
          "explanation": "Visualise the intersection.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Consistency",
          "workingLatex": "\\text{No contradictory equations}",
          "explanation": "Augmented system must be consistent.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Verify",
          "workingLatex": "\\text{Substitute the solution}",
          "explanation": "Always check your answer.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Matrix form",
          "workingLatex": "AX = B",
          "explanation": "Every linear system can be written as a matrix equation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$k = 3$. When $k=3$, the first two planes are parallel with different constants — no solution."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Systems of linear equations",
    "subtopicId": "fm.y1.pure.matrix-systems",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrix-systems.q069",
    "tags": [
      "infinite-solutions",
      "parametric",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "questionText": "Solve $\\begin{cases}x + y + z = 6\\\\2x + y + z = 10\\\\3x + 2y + 2z = 16\\end{cases}$ using matrices. Classify the system and describe the planes.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Matrix form",
          "workingLatex": "A = \\begin{pmatrix}1&1&1\\\\2&1&1\\\\3&2&2\\end{pmatrix},\\; B = \\begin{pmatrix}6\\\\10\\\\16\\end{pmatrix}",
          "explanation": "Set up $AX=B$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Determinant",
          "workingLatex": "\\det A = 0",
          "explanation": "Singular coefficient matrix.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Row 3 check",
          "workingLatex": "\\text{Row 3} = \\text{Row 1} + \\text{Row 2}",
          "explanation": "Third equation is dependent.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Constants check",
          "workingLatex": "6 + 10 = 16",
          "explanation": "System is consistent.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Classification",
          "workingLatex": "\\text{Infinitely many solutions}",
          "explanation": "Not unique, not inconsistent.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Parametric form",
          "workingLatex": "\\text{Let } z = t",
          "explanation": "Introduce a free parameter.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "From equations 1 and 2",
          "workingLatex": "x = 4 - t,\\; y = 2",
          "explanation": "Solve the independent pair.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solution set",
          "workingLatex": "(x,y,z) = (4-t,\\, 2,\\, t)",
          "explanation": "Line of solutions.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Geometric view",
          "workingLatex": "\\text{Three planes meeting in a line}",
          "explanation": "Common line of intersection.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Verify",
          "workingLatex": "\\text{Substitute into all three equations}",
          "explanation": "Confirmed for all $t$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Matrix method note",
          "workingLatex": "A^{-1} \\text{ does not exist}",
          "explanation": "Cannot use $X=A^{-1}B$ directly.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Alternative",
          "workingLatex": "\\text{Row reduction on augmented matrix}",
          "explanation": "Gaussian elimination is needed.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Answer",
          "workingLatex": "\\text{Infinitely many: } (4-t, 2, t)",
          "explanation": "Complete solution.",
          "diagram": null
        }
      ],
      "finalAnswer": "Infinitely many solutions: $(x,y,z) = (4-t,\\, 2,\\, t)$. The three planes intersect in a line."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Systems of linear equations",
    "subtopicId": "fm.y1.pure.matrix-systems",
    "questionDiagram": null,
    "id": "fm.y1.pure.matrix-systems.q070",
    "tags": [
      "consistency",
      "coincident-planes",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "questionText": "A system has coefficient matrix $A = \\begin{pmatrix}1&2&1\\\\2&4&2\\\\1&1&0\\end{pmatrix}$ and constants $\\begin{pmatrix}3\\\\6\\\\2\\end{pmatrix}$. Determine whether the system is consistent, and describe the three planes.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Compute $\\det A$",
          "workingLatex": "\\det A = 0",
          "explanation": "Singular matrix.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Row 2 vs Row 1",
          "workingLatex": "\\text{Row 2} = 2 \\times \\text{Row 1}",
          "explanation": "Equations 1 and 2 have proportional coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Check constants",
          "workingLatex": "2 \\times 3 = 6",
          "explanation": "Constants are consistent — equations 1 and 2 represent the same plane.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Equation 3",
          "workingLatex": "x + y = 2",
          "explanation": "Independent third plane.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Coincident planes",
          "workingLatex": "x + 2y + z = 3 \\text{ and } 2x + 4y + 2z = 6",
          "explanation": "Two coincident planes.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Intersection",
          "workingLatex": "\\text{Third plane cuts the coincident pair in a line}",
          "explanation": "Line of infinitely many solutions.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Consistency",
          "workingLatex": "\\text{System is consistent}",
          "explanation": "No contradictory equations.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Classification",
          "workingLatex": "\\text{Infinitely many solutions}",
          "explanation": "One degree of freedom.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Parametric solution",
          "workingLatex": "\\text{Solve } x+y=2 \\text{ and } x+2y+z=3",
          "explanation": "Find the line.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Free variable",
          "workingLatex": "\\text{Let } y = t",
          "explanation": "Parameterise.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Result",
          "workingLatex": "(x,y,z) = (2-t,\\, t,\\, 1-t)",
          "explanation": "Line of intersection.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Geometric picture",
          "workingLatex": "\\text{Two coincident planes cut by a third}",
          "explanation": "Like an open book with a third sheet through the spine.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Answer",
          "workingLatex": "\\text{Consistent, infinitely many solutions}",
          "explanation": "Complete analysis.",
          "diagram": null
        }
      ],
      "finalAnswer": "The system is **consistent** with infinitely many solutions. Two planes are coincident; the third intersects them in a line."
    }
  }
];
