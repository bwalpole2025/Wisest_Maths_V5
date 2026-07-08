import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Complex roots of polynomials",
    "subtopicId": "fm.y1.pure.complex-quadratics",
    "questionDiagram": null,
    "id": "fm.y1.pure.complex-quadratics.q001",
    "tags": [
      "quadratic",
      "negative-discriminant"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Solve $x^{2} + 2x + 5 = 0$, giving your answers in the form $a + bi$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the quadratic",
          "workingLatex": "x^{2} + 2x + 5 = 0",
          "explanation": "Identify $a$, $b$ and $c$ in standard form.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate discriminant",
          "workingLatex": "\\Delta = b^{2} - 4ac = 4 - 20 = -16",
          "explanation": "The discriminant tells us the nature of the roots.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Interpret discriminant",
          "workingLatex": "\\Delta = -16 < 0",
          "explanation": "A negative discriminant means the roots are non-real complex conjugates.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply quadratic formula",
          "workingLatex": "x = \\frac{-b \\pm \\sqrt{\\Delta}}{2a}",
          "explanation": "Use the formula even when $\\Delta < 0$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify $\\sqrt{\\Delta}$",
          "workingLatex": "\\sqrt{-16} = 4i",
          "explanation": "Express the square root of a negative number using $i$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute",
          "workingLatex": "x = \\frac{-2 \\pm 4i}{2}",
          "explanation": "Insert the values of $a$, $b$ and $\\sqrt{\\Delta}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify",
          "workingLatex": "x = -1 \\pm 2i",
          "explanation": "Divide real and imaginary parts by $2a$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State conjugate pair",
          "workingLatex": "x = -1 + 2i \\quad \\text{or} \\quad x = -1 - 2i",
          "explanation": "Complex roots of real-coefficient polynomials occur in conjugate pairs.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "x = -1 + 2i,\\; -1 - 2i",
          "explanation": "Both roots in the form $a + bi$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = -1 + 2i$ or $x = -1 - 2i$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Complex roots of polynomials",
    "subtopicId": "fm.y1.pure.complex-quadratics",
    "questionDiagram": null,
    "id": "fm.y1.pure.complex-quadratics.q002",
    "tags": [
      "quadratic",
      "negative-discriminant"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Solve $x^{2} - 4x + 13 = 0$, giving your answers in the form $a + bi$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the quadratic",
          "workingLatex": "x^{2} - 4x + 13 = 0",
          "explanation": "Identify $a$, $b$ and $c$ in standard form.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate discriminant",
          "workingLatex": "\\Delta = b^{2} - 4ac = 16 - 52 = -36",
          "explanation": "The discriminant tells us the nature of the roots.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Interpret discriminant",
          "workingLatex": "\\Delta = -36 < 0",
          "explanation": "A negative discriminant means the roots are non-real complex conjugates.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply quadratic formula",
          "workingLatex": "x = \\frac{-b \\pm \\sqrt{\\Delta}}{2a}",
          "explanation": "Use the formula even when $\\Delta < 0$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify $\\sqrt{\\Delta}$",
          "workingLatex": "\\sqrt{-36} = 6i",
          "explanation": "Express the square root of a negative number using $i$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute",
          "workingLatex": "x = \\frac{4 \\pm 6i}{2}",
          "explanation": "Insert the values of $a$, $b$ and $\\sqrt{\\Delta}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify",
          "workingLatex": "x = 2 \\pm 3i",
          "explanation": "Divide real and imaginary parts by $2a$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State conjugate pair",
          "workingLatex": "x = 2 + 3i \\quad \\text{or} \\quad x = 2 - 3i",
          "explanation": "Complex roots of real-coefficient polynomials occur in conjugate pairs.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "x = 2 + 3i,\\; 2 - 3i",
          "explanation": "Both roots in the form $a + bi$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = 2 + 3i$ or $x = 2 - 3i$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Complex roots of polynomials",
    "subtopicId": "fm.y1.pure.complex-quadratics",
    "questionDiagram": null,
    "id": "fm.y1.pure.complex-quadratics.q003",
    "tags": [
      "quadratic",
      "negative-discriminant"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Solve $x^{2} + 6x + 10 = 0$, giving your answers in the form $a + bi$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the quadratic",
          "workingLatex": "x^{2} + 6x + 10 = 0",
          "explanation": "Identify $a$, $b$ and $c$ in standard form.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate discriminant",
          "workingLatex": "\\Delta = b^{2} - 4ac = 36 - 40 = -4",
          "explanation": "The discriminant tells us the nature of the roots.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Interpret discriminant",
          "workingLatex": "\\Delta = -4 < 0",
          "explanation": "A negative discriminant means the roots are non-real complex conjugates.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply quadratic formula",
          "workingLatex": "x = \\frac{-b \\pm \\sqrt{\\Delta}}{2a}",
          "explanation": "Use the formula even when $\\Delta < 0$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify $\\sqrt{\\Delta}$",
          "workingLatex": "\\sqrt{-4} = 2i",
          "explanation": "Express the square root of a negative number using $i$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute",
          "workingLatex": "x = \\frac{-6 \\pm 2i}{2}",
          "explanation": "Insert the values of $a$, $b$ and $\\sqrt{\\Delta}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify",
          "workingLatex": "x = -3 \\pm 1i",
          "explanation": "Divide real and imaginary parts by $2a$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State conjugate pair",
          "workingLatex": "x = -3 + i \\quad \\text{or} \\quad x = -3 - i",
          "explanation": "Complex roots of real-coefficient polynomials occur in conjugate pairs.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "x = -3 + i,\\; -3 - i",
          "explanation": "Both roots in the form $a + bi$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = -3 + i$ or $x = -3 - i$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Complex roots of polynomials",
    "subtopicId": "fm.y1.pure.complex-quadratics",
    "questionDiagram": null,
    "id": "fm.y1.pure.complex-quadratics.q004",
    "tags": [
      "quadratic",
      "negative-discriminant"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Solve $x^{2} - 2x + 5 = 0$, giving your answers in the form $a + bi$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the quadratic",
          "workingLatex": "x^{2} - 2x + 5 = 0",
          "explanation": "Identify $a$, $b$ and $c$ in standard form.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate discriminant",
          "workingLatex": "\\Delta = b^{2} - 4ac = 4 - 20 = -16",
          "explanation": "The discriminant tells us the nature of the roots.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Interpret discriminant",
          "workingLatex": "\\Delta = -16 < 0",
          "explanation": "A negative discriminant means the roots are non-real complex conjugates.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply quadratic formula",
          "workingLatex": "x = \\frac{-b \\pm \\sqrt{\\Delta}}{2a}",
          "explanation": "Use the formula even when $\\Delta < 0$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify $\\sqrt{\\Delta}$",
          "workingLatex": "\\sqrt{-16} = 4i",
          "explanation": "Express the square root of a negative number using $i$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute",
          "workingLatex": "x = \\frac{2 \\pm 4i}{2}",
          "explanation": "Insert the values of $a$, $b$ and $\\sqrt{\\Delta}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify",
          "workingLatex": "x = 1 \\pm 2i",
          "explanation": "Divide real and imaginary parts by $2a$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State conjugate pair",
          "workingLatex": "x = 1 + 2i \\quad \\text{or} \\quad x = 1 - 2i",
          "explanation": "Complex roots of real-coefficient polynomials occur in conjugate pairs.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "x = 1 + 2i,\\; 1 - 2i",
          "explanation": "Both roots in the form $a + bi$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = 1 + 2i$ or $x = 1 - 2i$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Complex roots of polynomials",
    "subtopicId": "fm.y1.pure.complex-quadratics",
    "questionDiagram": null,
    "id": "fm.y1.pure.complex-quadratics.q005",
    "tags": [
      "quadratic",
      "negative-discriminant"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Solve $x^{2} + 4x + 8 = 0$, giving your answers in the form $a + bi$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the quadratic",
          "workingLatex": "x^{2} + 4x + 8 = 0",
          "explanation": "Identify $a$, $b$ and $c$ in standard form.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate discriminant",
          "workingLatex": "\\Delta = b^{2} - 4ac = 16 - 32 = -16",
          "explanation": "The discriminant tells us the nature of the roots.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Interpret discriminant",
          "workingLatex": "\\Delta = -16 < 0",
          "explanation": "A negative discriminant means the roots are non-real complex conjugates.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply quadratic formula",
          "workingLatex": "x = \\frac{-b \\pm \\sqrt{\\Delta}}{2a}",
          "explanation": "Use the formula even when $\\Delta < 0$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify $\\sqrt{\\Delta}$",
          "workingLatex": "\\sqrt{-16} = 4i",
          "explanation": "Express the square root of a negative number using $i$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute",
          "workingLatex": "x = \\frac{-4 \\pm 4i}{2}",
          "explanation": "Insert the values of $a$, $b$ and $\\sqrt{\\Delta}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify",
          "workingLatex": "x = -2 \\pm 2i",
          "explanation": "Divide real and imaginary parts by $2a$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State conjugate pair",
          "workingLatex": "x = -2 + 2i \\quad \\text{or} \\quad x = -2 - 2i",
          "explanation": "Complex roots of real-coefficient polynomials occur in conjugate pairs.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "x = -2 + 2i,\\; -2 - 2i",
          "explanation": "Both roots in the form $a + bi$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = -2 + 2i$ or $x = -2 - 2i$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Complex roots of polynomials",
    "subtopicId": "fm.y1.pure.complex-quadratics",
    "questionDiagram": null,
    "id": "fm.y1.pure.complex-quadratics.q006",
    "tags": [
      "quadratic",
      "negative-discriminant"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Solve $x^{2} + 9 = 0$, giving your answers in the form $a + bi$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the quadratic",
          "workingLatex": "x^{2} + 9 = 0",
          "explanation": "Identify $a$, $b$ and $c$ in standard form.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate discriminant",
          "workingLatex": "\\Delta = b^{2} - 4ac = 0 - 36 = -36",
          "explanation": "The discriminant tells us the nature of the roots.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Interpret discriminant",
          "workingLatex": "\\Delta = -36 < 0",
          "explanation": "A negative discriminant means the roots are non-real complex conjugates.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply quadratic formula",
          "workingLatex": "x = \\frac{-b \\pm \\sqrt{\\Delta}}{2a}",
          "explanation": "Use the formula even when $\\Delta < 0$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify $\\sqrt{\\Delta}$",
          "workingLatex": "\\sqrt{-36} = 6i",
          "explanation": "Express the square root of a negative number using $i$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute",
          "workingLatex": "x = \\frac{0 \\pm 6i}{2}",
          "explanation": "Insert the values of $a$, $b$ and $\\sqrt{\\Delta}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify",
          "workingLatex": "x = 0 \\pm 3i",
          "explanation": "Divide real and imaginary parts by $2a$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State conjugate pair",
          "workingLatex": "x = 3i \\quad \\text{or} \\quad x = -3i",
          "explanation": "Complex roots of real-coefficient polynomials occur in conjugate pairs.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "x = 3i,\\; -3i",
          "explanation": "Both roots in the form $a + bi$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = 3i$ or $x = -3i$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Complex roots of polynomials",
    "subtopicId": "fm.y1.pure.complex-quadratics",
    "questionDiagram": null,
    "id": "fm.y1.pure.complex-quadratics.q007",
    "tags": [
      "quadratic",
      "negative-discriminant"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Solve $x^{2} - 6x + 13 = 0$, giving your answers in the form $a + bi$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the quadratic",
          "workingLatex": "x^{2} - 6x + 13 = 0",
          "explanation": "Identify $a$, $b$ and $c$ in standard form.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate discriminant",
          "workingLatex": "\\Delta = b^{2} - 4ac = 36 - 52 = -16",
          "explanation": "The discriminant tells us the nature of the roots.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Interpret discriminant",
          "workingLatex": "\\Delta = -16 < 0",
          "explanation": "A negative discriminant means the roots are non-real complex conjugates.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply quadratic formula",
          "workingLatex": "x = \\frac{-b \\pm \\sqrt{\\Delta}}{2a}",
          "explanation": "Use the formula even when $\\Delta < 0$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify $\\sqrt{\\Delta}$",
          "workingLatex": "\\sqrt{-16} = 4i",
          "explanation": "Express the square root of a negative number using $i$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute",
          "workingLatex": "x = \\frac{6 \\pm 4i}{2}",
          "explanation": "Insert the values of $a$, $b$ and $\\sqrt{\\Delta}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify",
          "workingLatex": "x = 3 \\pm 2i",
          "explanation": "Divide real and imaginary parts by $2a$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State conjugate pair",
          "workingLatex": "x = 3 + 2i \\quad \\text{or} \\quad x = 3 - 2i",
          "explanation": "Complex roots of real-coefficient polynomials occur in conjugate pairs.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "x = 3 + 2i,\\; 3 - 2i",
          "explanation": "Both roots in the form $a + bi$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = 3 + 2i$ or $x = 3 - 2i$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Complex roots of polynomials",
    "subtopicId": "fm.y1.pure.complex-quadratics",
    "questionDiagram": null,
    "id": "fm.y1.pure.complex-quadratics.q008",
    "tags": [
      "quadratic",
      "negative-discriminant"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Solve $x^{2} + 2x + 2 = 0$, giving your answers in the form $a + bi$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the quadratic",
          "workingLatex": "x^{2} + 2x + 2 = 0",
          "explanation": "Identify $a$, $b$ and $c$ in standard form.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate discriminant",
          "workingLatex": "\\Delta = b^{2} - 4ac = 4 - 8 = -4",
          "explanation": "The discriminant tells us the nature of the roots.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Interpret discriminant",
          "workingLatex": "\\Delta = -4 < 0",
          "explanation": "A negative discriminant means the roots are non-real complex conjugates.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply quadratic formula",
          "workingLatex": "x = \\frac{-b \\pm \\sqrt{\\Delta}}{2a}",
          "explanation": "Use the formula even when $\\Delta < 0$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify $\\sqrt{\\Delta}$",
          "workingLatex": "\\sqrt{-4} = 2i",
          "explanation": "Express the square root of a negative number using $i$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute",
          "workingLatex": "x = \\frac{-2 \\pm 2i}{2}",
          "explanation": "Insert the values of $a$, $b$ and $\\sqrt{\\Delta}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify",
          "workingLatex": "x = -1 \\pm 1i",
          "explanation": "Divide real and imaginary parts by $2a$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State conjugate pair",
          "workingLatex": "x = -1 + i \\quad \\text{or} \\quad x = -1 - i",
          "explanation": "Complex roots of real-coefficient polynomials occur in conjugate pairs.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "x = -1 + i,\\; -1 - i",
          "explanation": "Both roots in the form $a + bi$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = -1 + i$ or $x = -1 - i$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Complex roots of polynomials",
    "subtopicId": "fm.y1.pure.complex-quadratics",
    "questionDiagram": null,
    "id": "fm.y1.pure.complex-quadratics.q009",
    "tags": [
      "quadratic",
      "negative-discriminant"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Solve $2x^{2} - 4x + 10 = 0$, giving your answers in the form $a + bi$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the quadratic",
          "workingLatex": "2x^{2} - 4x + 10 = 0",
          "explanation": "Identify $a$, $b$ and $c$ in standard form.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate discriminant",
          "workingLatex": "\\Delta = b^{2} - 4ac = 16 - 80 = -64",
          "explanation": "The discriminant tells us the nature of the roots.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Interpret discriminant",
          "workingLatex": "\\Delta = -64 < 0",
          "explanation": "A negative discriminant means the roots are non-real complex conjugates.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply quadratic formula",
          "workingLatex": "x = \\frac{-b \\pm \\sqrt{\\Delta}}{2a}",
          "explanation": "Use the formula even when $\\Delta < 0$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify $\\sqrt{\\Delta}$",
          "workingLatex": "\\sqrt{-64} = 8i",
          "explanation": "Express the square root of a negative number using $i$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute",
          "workingLatex": "x = \\frac{4 \\pm 8i}{4}",
          "explanation": "Insert the values of $a$, $b$ and $\\sqrt{\\Delta}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify",
          "workingLatex": "x = 1 \\pm 2i",
          "explanation": "Divide real and imaginary parts by $2a$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State conjugate pair",
          "workingLatex": "x = 1 + 2i \\quad \\text{or} \\quad x = 1 - 2i",
          "explanation": "Complex roots of real-coefficient polynomials occur in conjugate pairs.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "x = 1 + 2i,\\; 1 - 2i",
          "explanation": "Both roots in the form $a + bi$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = 1 + 2i$ or $x = 1 - 2i$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Complex roots of polynomials",
    "subtopicId": "fm.y1.pure.complex-quadratics",
    "questionDiagram": null,
    "id": "fm.y1.pure.complex-quadratics.q010",
    "tags": [
      "quadratic",
      "negative-discriminant"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Solve $x^{2} + 10x + 26 = 0$, giving your answers in the form $a + bi$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the quadratic",
          "workingLatex": "x^{2} + 10x + 26 = 0",
          "explanation": "Identify $a$, $b$ and $c$ in standard form.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate discriminant",
          "workingLatex": "\\Delta = b^{2} - 4ac = 100 - 104 = -4",
          "explanation": "The discriminant tells us the nature of the roots.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Interpret discriminant",
          "workingLatex": "\\Delta = -4 < 0",
          "explanation": "A negative discriminant means the roots are non-real complex conjugates.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply quadratic formula",
          "workingLatex": "x = \\frac{-b \\pm \\sqrt{\\Delta}}{2a}",
          "explanation": "Use the formula even when $\\Delta < 0$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify $\\sqrt{\\Delta}$",
          "workingLatex": "\\sqrt{-4} = 2i",
          "explanation": "Express the square root of a negative number using $i$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute",
          "workingLatex": "x = \\frac{-10 \\pm 2i}{2}",
          "explanation": "Insert the values of $a$, $b$ and $\\sqrt{\\Delta}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify",
          "workingLatex": "x = -5 \\pm 1i",
          "explanation": "Divide real and imaginary parts by $2a$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State conjugate pair",
          "workingLatex": "x = -5 + i \\quad \\text{or} \\quad x = -5 - i",
          "explanation": "Complex roots of real-coefficient polynomials occur in conjugate pairs.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "x = -5 + i,\\; -5 - i",
          "explanation": "Both roots in the form $a + bi$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = -5 + i$ or $x = -5 - i$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Complex roots of polynomials",
    "subtopicId": "fm.y1.pure.complex-quadratics",
    "questionDiagram": null,
    "id": "fm.y1.pure.complex-quadratics.q011",
    "tags": [
      "quadratic",
      "negative-discriminant"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Solve $x^{2} - 8x + 20 = 0$, giving your answers in the form $a + bi$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the quadratic",
          "workingLatex": "x^{2} - 8x + 20 = 0",
          "explanation": "Identify $a$, $b$ and $c$ in standard form.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate discriminant",
          "workingLatex": "\\Delta = b^{2} - 4ac = 64 - 80 = -16",
          "explanation": "The discriminant tells us the nature of the roots.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Interpret discriminant",
          "workingLatex": "\\Delta = -16 < 0",
          "explanation": "A negative discriminant means the roots are non-real complex conjugates.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply quadratic formula",
          "workingLatex": "x = \\frac{-b \\pm \\sqrt{\\Delta}}{2a}",
          "explanation": "Use the formula even when $\\Delta < 0$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify $\\sqrt{\\Delta}$",
          "workingLatex": "\\sqrt{-16} = 4i",
          "explanation": "Express the square root of a negative number using $i$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute",
          "workingLatex": "x = \\frac{8 \\pm 4i}{2}",
          "explanation": "Insert the values of $a$, $b$ and $\\sqrt{\\Delta}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify",
          "workingLatex": "x = 4 \\pm 2i",
          "explanation": "Divide real and imaginary parts by $2a$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State conjugate pair",
          "workingLatex": "x = 4 + 2i \\quad \\text{or} \\quad x = 4 - 2i",
          "explanation": "Complex roots of real-coefficient polynomials occur in conjugate pairs.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "x = 4 + 2i,\\; 4 - 2i",
          "explanation": "Both roots in the form $a + bi$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = 4 + 2i$ or $x = 4 - 2i$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Complex roots of polynomials",
    "subtopicId": "fm.y1.pure.complex-quadratics",
    "questionDiagram": null,
    "id": "fm.y1.pure.complex-quadratics.q012",
    "tags": [
      "quadratic",
      "negative-discriminant"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Solve $x^{2} + 4x + 5 = 0$, giving your answers in the form $a + bi$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the quadratic",
          "workingLatex": "x^{2} + 4x + 5 = 0",
          "explanation": "Identify $a$, $b$ and $c$ in standard form.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate discriminant",
          "workingLatex": "\\Delta = b^{2} - 4ac = 16 - 20 = -4",
          "explanation": "The discriminant tells us the nature of the roots.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Interpret discriminant",
          "workingLatex": "\\Delta = -4 < 0",
          "explanation": "A negative discriminant means the roots are non-real complex conjugates.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply quadratic formula",
          "workingLatex": "x = \\frac{-b \\pm \\sqrt{\\Delta}}{2a}",
          "explanation": "Use the formula even when $\\Delta < 0$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify $\\sqrt{\\Delta}$",
          "workingLatex": "\\sqrt{-4} = 2i",
          "explanation": "Express the square root of a negative number using $i$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute",
          "workingLatex": "x = \\frac{-4 \\pm 2i}{2}",
          "explanation": "Insert the values of $a$, $b$ and $\\sqrt{\\Delta}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify",
          "workingLatex": "x = -2 \\pm 1i",
          "explanation": "Divide real and imaginary parts by $2a$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State conjugate pair",
          "workingLatex": "x = -2 + i \\quad \\text{or} \\quad x = -2 - i",
          "explanation": "Complex roots of real-coefficient polynomials occur in conjugate pairs.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "x = -2 + i,\\; -2 - i",
          "explanation": "Both roots in the form $a + bi$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = -2 + i$ or $x = -2 - i$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Complex roots of polynomials",
    "subtopicId": "fm.y1.pure.complex-quadratics",
    "questionDiagram": null,
    "id": "fm.y1.pure.complex-quadratics.q013",
    "tags": [
      "quadratic",
      "negative-discriminant"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Solve $3x^{2} - 6x + 15 = 0$, giving your answers in the form $a + bi$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the quadratic",
          "workingLatex": "3x^{2} - 6x + 15 = 0",
          "explanation": "Identify $a$, $b$ and $c$ in standard form.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate discriminant",
          "workingLatex": "\\Delta = b^{2} - 4ac = 36 - 180 = -144",
          "explanation": "The discriminant tells us the nature of the roots.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Interpret discriminant",
          "workingLatex": "\\Delta = -144 < 0",
          "explanation": "A negative discriminant means the roots are non-real complex conjugates.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply quadratic formula",
          "workingLatex": "x = \\frac{-b \\pm \\sqrt{\\Delta}}{2a}",
          "explanation": "Use the formula even when $\\Delta < 0$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify $\\sqrt{\\Delta}$",
          "workingLatex": "\\sqrt{-144} = 12i",
          "explanation": "Express the square root of a negative number using $i$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute",
          "workingLatex": "x = \\frac{6 \\pm 12i}{6}",
          "explanation": "Insert the values of $a$, $b$ and $\\sqrt{\\Delta}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify",
          "workingLatex": "x = 1 \\pm 2i",
          "explanation": "Divide real and imaginary parts by $2a$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State conjugate pair",
          "workingLatex": "x = 1 + 2i \\quad \\text{or} \\quad x = 1 - 2i",
          "explanation": "Complex roots of real-coefficient polynomials occur in conjugate pairs.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "x = 1 + 2i,\\; 1 - 2i",
          "explanation": "Both roots in the form $a + bi$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = 1 + 2i$ or $x = 1 - 2i$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Complex roots of polynomials",
    "subtopicId": "fm.y1.pure.complex-quadratics",
    "questionDiagram": null,
    "id": "fm.y1.pure.complex-quadratics.q014",
    "tags": [
      "quadratic",
      "negative-discriminant"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Solve $x^{2} - 2x + 2 = 0$, giving your answers in the form $a + bi$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the quadratic",
          "workingLatex": "x^{2} - 2x + 2 = 0",
          "explanation": "Identify $a$, $b$ and $c$ in standard form.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate discriminant",
          "workingLatex": "\\Delta = b^{2} - 4ac = 4 - 8 = -4",
          "explanation": "The discriminant tells us the nature of the roots.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Interpret discriminant",
          "workingLatex": "\\Delta = -4 < 0",
          "explanation": "A negative discriminant means the roots are non-real complex conjugates.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply quadratic formula",
          "workingLatex": "x = \\frac{-b \\pm \\sqrt{\\Delta}}{2a}",
          "explanation": "Use the formula even when $\\Delta < 0$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify $\\sqrt{\\Delta}$",
          "workingLatex": "\\sqrt{-4} = 2i",
          "explanation": "Express the square root of a negative number using $i$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute",
          "workingLatex": "x = \\frac{2 \\pm 2i}{2}",
          "explanation": "Insert the values of $a$, $b$ and $\\sqrt{\\Delta}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify",
          "workingLatex": "x = 1 \\pm 1i",
          "explanation": "Divide real and imaginary parts by $2a$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State conjugate pair",
          "workingLatex": "x = 1 + i \\quad \\text{or} \\quad x = 1 - i",
          "explanation": "Complex roots of real-coefficient polynomials occur in conjugate pairs.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "x = 1 + i,\\; 1 - i",
          "explanation": "Both roots in the form $a + bi$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = 1 + i$ or $x = 1 - i$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Complex roots of polynomials",
    "subtopicId": "fm.y1.pure.complex-quadratics",
    "questionDiagram": null,
    "id": "fm.y1.pure.complex-quadratics.q015",
    "tags": [
      "quadratic",
      "negative-discriminant"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Solve $x^{2} + 6x + 18 = 0$, giving your answers in the form $a + bi$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the quadratic",
          "workingLatex": "x^{2} + 6x + 18 = 0",
          "explanation": "Identify $a$, $b$ and $c$ in standard form.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate discriminant",
          "workingLatex": "\\Delta = b^{2} - 4ac = 36 - 72 = -36",
          "explanation": "The discriminant tells us the nature of the roots.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Interpret discriminant",
          "workingLatex": "\\Delta = -36 < 0",
          "explanation": "A negative discriminant means the roots are non-real complex conjugates.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply quadratic formula",
          "workingLatex": "x = \\frac{-b \\pm \\sqrt{\\Delta}}{2a}",
          "explanation": "Use the formula even when $\\Delta < 0$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify $\\sqrt{\\Delta}$",
          "workingLatex": "\\sqrt{-36} = 6i",
          "explanation": "Express the square root of a negative number using $i$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute",
          "workingLatex": "x = \\frac{-6 \\pm 6i}{2}",
          "explanation": "Insert the values of $a$, $b$ and $\\sqrt{\\Delta}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify",
          "workingLatex": "x = -3 \\pm 3i",
          "explanation": "Divide real and imaginary parts by $2a$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State conjugate pair",
          "workingLatex": "x = -3 + 3i \\quad \\text{or} \\quad x = -3 - 3i",
          "explanation": "Complex roots of real-coefficient polynomials occur in conjugate pairs.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "x = -3 + 3i,\\; -3 - 3i",
          "explanation": "Both roots in the form $a + bi$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = -3 + 3i$ or $x = -3 - 3i$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Complex roots of polynomials",
    "subtopicId": "fm.y1.pure.complex-quadratics",
    "questionDiagram": null,
    "id": "fm.y1.pure.complex-quadratics.q016",
    "tags": [
      "discriminant"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Describe the nature of the roots of $x^{2} + 2x + 5 = 0$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Formula for discriminant",
          "workingLatex": "\\Delta = b^{2} - 4ac",
          "explanation": "The discriminant determines the type of roots.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "\\Delta = (2)^{2} - 4(1)(5) = -16",
          "explanation": "Evaluate using the coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare with zero",
          "workingLatex": "\\Delta < 0",
          "explanation": "The sign of $\\Delta$ classifies the roots.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Conclude",
          "workingLatex": "\\text{The equation has two non-real complex conjugate roots}",
          "explanation": "Negative $\\Delta$ guarantees complex conjugate roots when coefficients are real.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Connection to complex roots",
          "workingLatex": "\\text{Complex roots must be conjugates}",
          "explanation": "Real coefficients force non-real roots to pair up.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "two non-real complex conjugate roots",
          "explanation": "Nature of the roots.",
          "diagram": null
        }
      ],
      "finalAnswer": "The equation has two non-real complex conjugate roots."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Complex roots of polynomials",
    "subtopicId": "fm.y1.pure.complex-quadratics",
    "questionDiagram": null,
    "id": "fm.y1.pure.complex-quadratics.q017",
    "tags": [
      "discriminant"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Describe the nature of the roots of $x^{2} - 4x + 4 = 0$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Formula for discriminant",
          "workingLatex": "\\Delta = b^{2} - 4ac",
          "explanation": "The discriminant determines the type of roots.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "\\Delta = (-4)^{2} - 4(1)(4) = 0",
          "explanation": "Evaluate using the coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare with zero",
          "workingLatex": "\\Delta = 0",
          "explanation": "The sign of $\\Delta$ classifies the roots.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Conclude",
          "workingLatex": "\\text{The equation has one repeated real root}",
          "explanation": "State the root type clearly.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Connection to complex roots",
          "workingLatex": "\\text{All roots are real here}",
          "explanation": "Real coefficients force non-real roots to pair up.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "one repeated real root",
          "explanation": "Nature of the roots.",
          "diagram": null
        }
      ],
      "finalAnswer": "The equation has one repeated real root."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Complex roots of polynomials",
    "subtopicId": "fm.y1.pure.complex-quadratics",
    "questionDiagram": null,
    "id": "fm.y1.pure.complex-quadratics.q018",
    "tags": [
      "discriminant"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Describe the nature of the roots of $x^{2} + 3x + 2 = 0$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Formula for discriminant",
          "workingLatex": "\\Delta = b^{2} - 4ac",
          "explanation": "The discriminant determines the type of roots.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "\\Delta = (3)^{2} - 4(1)(2) = 1",
          "explanation": "Evaluate using the coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare with zero",
          "workingLatex": "\\Delta > 0",
          "explanation": "The sign of $\\Delta$ classifies the roots.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Conclude",
          "workingLatex": "\\text{The equation has two distinct real roots}",
          "explanation": "State the root type clearly.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Connection to complex roots",
          "workingLatex": "\\text{All roots are real here}",
          "explanation": "Real coefficients force non-real roots to pair up.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "two distinct real roots",
          "explanation": "Nature of the roots.",
          "diagram": null
        }
      ],
      "finalAnswer": "The equation has two distinct real roots."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Complex roots of polynomials",
    "subtopicId": "fm.y1.pure.complex-quadratics",
    "questionDiagram": null,
    "id": "fm.y1.pure.complex-quadratics.q019",
    "tags": [
      "discriminant"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Describe the nature of the roots of $x^{2} + 1 = 0$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Formula for discriminant",
          "workingLatex": "\\Delta = b^{2} - 4ac",
          "explanation": "The discriminant determines the type of roots.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "\\Delta = (0)^{2} - 4(1)(1) = -4",
          "explanation": "Evaluate using the coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare with zero",
          "workingLatex": "\\Delta < 0",
          "explanation": "The sign of $\\Delta$ classifies the roots.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Conclude",
          "workingLatex": "\\text{The equation has two non-real complex conjugate roots}",
          "explanation": "Negative $\\Delta$ guarantees complex conjugate roots when coefficients are real.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Connection to complex roots",
          "workingLatex": "\\text{Complex roots must be conjugates}",
          "explanation": "Real coefficients force non-real roots to pair up.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "two non-real complex conjugate roots",
          "explanation": "Nature of the roots.",
          "diagram": null
        }
      ],
      "finalAnswer": "The equation has two non-real complex conjugate roots."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Complex roots of polynomials",
    "subtopicId": "fm.y1.pure.complex-quadratics",
    "questionDiagram": null,
    "id": "fm.y1.pure.complex-quadratics.q020",
    "tags": [
      "discriminant"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Describe the nature of the roots of $x^{2} + 6x + 9 = 0$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Formula for discriminant",
          "workingLatex": "\\Delta = b^{2} - 4ac",
          "explanation": "The discriminant determines the type of roots.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "\\Delta = (6)^{2} - 4(1)(9) = 0",
          "explanation": "Evaluate using the coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare with zero",
          "workingLatex": "\\Delta = 0",
          "explanation": "The sign of $\\Delta$ classifies the roots.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Conclude",
          "workingLatex": "\\text{The equation has one repeated real root}",
          "explanation": "State the root type clearly.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Connection to complex roots",
          "workingLatex": "\\text{All roots are real here}",
          "explanation": "Real coefficients force non-real roots to pair up.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "one repeated real root",
          "explanation": "Nature of the roots.",
          "diagram": null
        }
      ],
      "finalAnswer": "The equation has one repeated real root."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Complex roots of polynomials",
    "subtopicId": "fm.y1.pure.complex-quadratics",
    "questionDiagram": null,
    "id": "fm.y1.pure.complex-quadratics.q021",
    "tags": [
      "discriminant"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Describe the nature of the roots of $x^{2} - 2x + 5 = 0$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Formula for discriminant",
          "workingLatex": "\\Delta = b^{2} - 4ac",
          "explanation": "The discriminant determines the type of roots.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "\\Delta = (-2)^{2} - 4(1)(5) = -16",
          "explanation": "Evaluate using the coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare with zero",
          "workingLatex": "\\Delta < 0",
          "explanation": "The sign of $\\Delta$ classifies the roots.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Conclude",
          "workingLatex": "\\text{The equation has two non-real complex conjugate roots}",
          "explanation": "Negative $\\Delta$ guarantees complex conjugate roots when coefficients are real.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Connection to complex roots",
          "workingLatex": "\\text{Complex roots must be conjugates}",
          "explanation": "Real coefficients force non-real roots to pair up.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "two non-real complex conjugate roots",
          "explanation": "Nature of the roots.",
          "diagram": null
        }
      ],
      "finalAnswer": "The equation has two non-real complex conjugate roots."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Complex roots of polynomials",
    "subtopicId": "fm.y1.pure.complex-quadratics",
    "questionDiagram": null,
    "id": "fm.y1.pure.complex-quadratics.q022",
    "tags": [
      "discriminant"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Describe the nature of the roots of $2x^{2} - 8x + 8 = 0$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Formula for discriminant",
          "workingLatex": "\\Delta = b^{2} - 4ac",
          "explanation": "The discriminant determines the type of roots.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "\\Delta = (-8)^{2} - 4(2)(8) = 0",
          "explanation": "Evaluate using the coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare with zero",
          "workingLatex": "\\Delta = 0",
          "explanation": "The sign of $\\Delta$ classifies the roots.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Conclude",
          "workingLatex": "\\text{The equation has one repeated real root}",
          "explanation": "State the root type clearly.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Connection to complex roots",
          "workingLatex": "\\text{All roots are real here}",
          "explanation": "Real coefficients force non-real roots to pair up.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "one repeated real root",
          "explanation": "Nature of the roots.",
          "diagram": null
        }
      ],
      "finalAnswer": "The equation has one repeated real root."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Complex roots of polynomials",
    "subtopicId": "fm.y1.pure.complex-quadratics",
    "questionDiagram": null,
    "id": "fm.y1.pure.complex-quadratics.q023",
    "tags": [
      "discriminant"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Describe the nature of the roots of $x^{2} + 4x + 7 = 0$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Formula for discriminant",
          "workingLatex": "\\Delta = b^{2} - 4ac",
          "explanation": "The discriminant determines the type of roots.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "\\Delta = (4)^{2} - 4(1)(7) = -12",
          "explanation": "Evaluate using the coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare with zero",
          "workingLatex": "\\Delta < 0",
          "explanation": "The sign of $\\Delta$ classifies the roots.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Conclude",
          "workingLatex": "\\text{The equation has two non-real complex conjugate roots}",
          "explanation": "Negative $\\Delta$ guarantees complex conjugate roots when coefficients are real.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Connection to complex roots",
          "workingLatex": "\\text{Complex roots must be conjugates}",
          "explanation": "Real coefficients force non-real roots to pair up.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "two non-real complex conjugate roots",
          "explanation": "Nature of the roots.",
          "diagram": null
        }
      ],
      "finalAnswer": "The equation has two non-real complex conjugate roots."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Complex roots of polynomials",
    "subtopicId": "fm.y1.pure.complex-quadratics",
    "questionDiagram": null,
    "id": "fm.y1.pure.complex-quadratics.q024",
    "tags": [
      "discriminant"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Describe the nature of the roots of $x^{2} - 6x + 10 = 0$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Formula for discriminant",
          "workingLatex": "\\Delta = b^{2} - 4ac",
          "explanation": "The discriminant determines the type of roots.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "\\Delta = (-6)^{2} - 4(1)(10) = -4",
          "explanation": "Evaluate using the coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare with zero",
          "workingLatex": "\\Delta < 0",
          "explanation": "The sign of $\\Delta$ classifies the roots.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Conclude",
          "workingLatex": "\\text{The equation has two non-real complex conjugate roots}",
          "explanation": "Negative $\\Delta$ guarantees complex conjugate roots when coefficients are real.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Connection to complex roots",
          "workingLatex": "\\text{Complex roots must be conjugates}",
          "explanation": "Real coefficients force non-real roots to pair up.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "two non-real complex conjugate roots",
          "explanation": "Nature of the roots.",
          "diagram": null
        }
      ],
      "finalAnswer": "The equation has two non-real complex conjugate roots."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Complex roots of polynomials",
    "subtopicId": "fm.y1.pure.complex-quadratics",
    "questionDiagram": null,
    "id": "fm.y1.pure.complex-quadratics.q025",
    "tags": [
      "discriminant"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Describe the nature of the roots of $x^{2} + 1x + 1 = 0$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Formula for discriminant",
          "workingLatex": "\\Delta = b^{2} - 4ac",
          "explanation": "The discriminant determines the type of roots.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "\\Delta = (1)^{2} - 4(1)(1) = -3",
          "explanation": "Evaluate using the coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare with zero",
          "workingLatex": "\\Delta < 0",
          "explanation": "The sign of $\\Delta$ classifies the roots.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Conclude",
          "workingLatex": "\\text{The equation has two non-real complex conjugate roots}",
          "explanation": "Negative $\\Delta$ guarantees complex conjugate roots when coefficients are real.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Connection to complex roots",
          "workingLatex": "\\text{Complex roots must be conjugates}",
          "explanation": "Real coefficients force non-real roots to pair up.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "two non-real complex conjugate roots",
          "explanation": "Nature of the roots.",
          "diagram": null
        }
      ],
      "finalAnswer": "The equation has two non-real complex conjugate roots."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Complex roots of polynomials",
    "subtopicId": "fm.y1.pure.complex-quadratics",
    "questionDiagram": null,
    "id": "fm.y1.pure.complex-quadratics.q026",
    "tags": [
      "forming-equation",
      "conjugate-pair"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "A quadratic equation has real coefficients and one root $2 + 3i$. Find the equation in the form $x^{2} + bx + c = 0$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the conjugate",
          "workingLatex": "\\text{If } 2 + 3i \\text{ is a root, so is } 2 - 3i",
          "explanation": "Polynomials with real coefficients have conjugate pairs of non-real roots.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Sum of roots",
          "workingLatex": "\\alpha + \\beta = (2 + 3i) + (2 - 3i) = 4",
          "explanation": "Imaginary parts cancel.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Product of roots",
          "workingLatex": "\\alpha\\beta = (2 + 3i)(2 - 3i) = 2^{2} + 3^{2} = 13",
          "explanation": "Multiply conjugates to get a real product.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Vieta's relations",
          "workingLatex": "x^{2} - (\\alpha+\\beta)x + \\alpha\\beta = 0",
          "explanation": "For a monic quadratic, the coefficient of $x$ is minus the sum and the constant is the product.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute",
          "workingLatex": "x^{2} - 4x + 13 = 0",
          "explanation": "Write the equation with real coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify coefficients are real",
          "workingLatex": "\\text{All coefficients are real}",
          "explanation": "The conjugate-pair argument ensures no imaginary coefficients remain.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "x^{2} - 4x + 13 = 0",
          "explanation": "Monic quadratic with the given complex root.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Conjugate pairs",
          "workingLatex": "a+bi,\\; a-bi",
          "explanation": "Non-real roots of real polynomials occur in conjugate pairs.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Discriminant",
          "workingLatex": "\\Delta < 0 \\Rightarrow \\text{complex roots}",
          "explanation": "Negative discriminant signals complex conjugate roots.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x^{2} - 4x + 13 = 0$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Complex roots of polynomials",
    "subtopicId": "fm.y1.pure.complex-quadratics",
    "questionDiagram": null,
    "id": "fm.y1.pure.complex-quadratics.q027",
    "tags": [
      "forming-equation",
      "conjugate-pair"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "A quadratic equation has real coefficients and one root $-1 + 2i$. Find the equation in the form $x^{2} + bx + c = 0$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the conjugate",
          "workingLatex": "\\text{If } -1 + 2i \\text{ is a root, so is } -1 - 2i",
          "explanation": "Polynomials with real coefficients have conjugate pairs of non-real roots.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Sum of roots",
          "workingLatex": "\\alpha + \\beta = (-1 + 2i) + (-1 - 2i) = -2",
          "explanation": "Imaginary parts cancel.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Product of roots",
          "workingLatex": "\\alpha\\beta = (-1 + 2i)(-1 - 2i) = -1^{2} + 2^{2} = 5",
          "explanation": "Multiply conjugates to get a real product.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Vieta's relations",
          "workingLatex": "x^{2} - (\\alpha+\\beta)x + \\alpha\\beta = 0",
          "explanation": "For a monic quadratic, the coefficient of $x$ is minus the sum and the constant is the product.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute",
          "workingLatex": "x^{2} + 2x + 5 = 0",
          "explanation": "Write the equation with real coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify coefficients are real",
          "workingLatex": "\\text{All coefficients are real}",
          "explanation": "The conjugate-pair argument ensures no imaginary coefficients remain.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "x^{2} + 2x + 5 = 0",
          "explanation": "Monic quadratic with the given complex root.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Conjugate pairs",
          "workingLatex": "a+bi,\\; a-bi",
          "explanation": "Non-real roots of real polynomials occur in conjugate pairs.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Discriminant",
          "workingLatex": "\\Delta < 0 \\Rightarrow \\text{complex roots}",
          "explanation": "Negative discriminant signals complex conjugate roots.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x^{2} + 2x + 5 = 0$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Complex roots of polynomials",
    "subtopicId": "fm.y1.pure.complex-quadratics",
    "questionDiagram": null,
    "id": "fm.y1.pure.complex-quadratics.q028",
    "tags": [
      "forming-equation",
      "conjugate-pair"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "A quadratic equation has real coefficients and one root $3 + i$. Find the equation in the form $x^{2} + bx + c = 0$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the conjugate",
          "workingLatex": "\\text{If } 3 + i \\text{ is a root, so is } 3 - i",
          "explanation": "Polynomials with real coefficients have conjugate pairs of non-real roots.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Sum of roots",
          "workingLatex": "\\alpha + \\beta = (3 + 1i) + (3 - 1i) = 6",
          "explanation": "Imaginary parts cancel.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Product of roots",
          "workingLatex": "\\alpha\\beta = (3 + 1i)(3 - 1i) = 3^{2} + 1^{2} = 10",
          "explanation": "Multiply conjugates to get a real product.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Vieta's relations",
          "workingLatex": "x^{2} - (\\alpha+\\beta)x + \\alpha\\beta = 0",
          "explanation": "For a monic quadratic, the coefficient of $x$ is minus the sum and the constant is the product.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute",
          "workingLatex": "x^{2} - 6x + 10 = 0",
          "explanation": "Write the equation with real coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify coefficients are real",
          "workingLatex": "\\text{All coefficients are real}",
          "explanation": "The conjugate-pair argument ensures no imaginary coefficients remain.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "x^{2} - 6x + 10 = 0",
          "explanation": "Monic quadratic with the given complex root.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Conjugate pairs",
          "workingLatex": "a+bi,\\; a-bi",
          "explanation": "Non-real roots of real polynomials occur in conjugate pairs.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Discriminant",
          "workingLatex": "\\Delta < 0 \\Rightarrow \\text{complex roots}",
          "explanation": "Negative discriminant signals complex conjugate roots.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x^{2} - 6x + 10 = 0$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Complex roots of polynomials",
    "subtopicId": "fm.y1.pure.complex-quadratics",
    "questionDiagram": null,
    "id": "fm.y1.pure.complex-quadratics.q029",
    "tags": [
      "forming-equation",
      "conjugate-pair"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "A quadratic equation has real coefficients and one root $-2 + 5i$. Find the equation in the form $x^{2} + bx + c = 0$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the conjugate",
          "workingLatex": "\\text{If } -2 + 5i \\text{ is a root, so is } -2 - 5i",
          "explanation": "Polynomials with real coefficients have conjugate pairs of non-real roots.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Sum of roots",
          "workingLatex": "\\alpha + \\beta = (-2 + 5i) + (-2 - 5i) = -4",
          "explanation": "Imaginary parts cancel.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Product of roots",
          "workingLatex": "\\alpha\\beta = (-2 + 5i)(-2 - 5i) = -2^{2} + 5^{2} = 29",
          "explanation": "Multiply conjugates to get a real product.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Vieta's relations",
          "workingLatex": "x^{2} - (\\alpha+\\beta)x + \\alpha\\beta = 0",
          "explanation": "For a monic quadratic, the coefficient of $x$ is minus the sum and the constant is the product.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute",
          "workingLatex": "x^{2} + 4x + 29 = 0",
          "explanation": "Write the equation with real coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify coefficients are real",
          "workingLatex": "\\text{All coefficients are real}",
          "explanation": "The conjugate-pair argument ensures no imaginary coefficients remain.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "x^{2} + 4x + 29 = 0",
          "explanation": "Monic quadratic with the given complex root.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Conjugate pairs",
          "workingLatex": "a+bi,\\; a-bi",
          "explanation": "Non-real roots of real polynomials occur in conjugate pairs.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Discriminant",
          "workingLatex": "\\Delta < 0 \\Rightarrow \\text{complex roots}",
          "explanation": "Negative discriminant signals complex conjugate roots.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x^{2} + 4x + 29 = 0$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Complex roots of polynomials",
    "subtopicId": "fm.y1.pure.complex-quadratics",
    "questionDiagram": null,
    "id": "fm.y1.pure.complex-quadratics.q030",
    "tags": [
      "forming-equation",
      "conjugate-pair"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "A quadratic equation has real coefficients and one root $1 + 4i$. Find the equation in the form $x^{2} + bx + c = 0$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the conjugate",
          "workingLatex": "\\text{If } 1 + 4i \\text{ is a root, so is } 1 - 4i",
          "explanation": "Polynomials with real coefficients have conjugate pairs of non-real roots.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Sum of roots",
          "workingLatex": "\\alpha + \\beta = (1 + 4i) + (1 - 4i) = 2",
          "explanation": "Imaginary parts cancel.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Product of roots",
          "workingLatex": "\\alpha\\beta = (1 + 4i)(1 - 4i) = 1^{2} + 4^{2} = 17",
          "explanation": "Multiply conjugates to get a real product.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Vieta's relations",
          "workingLatex": "x^{2} - (\\alpha+\\beta)x + \\alpha\\beta = 0",
          "explanation": "For a monic quadratic, the coefficient of $x$ is minus the sum and the constant is the product.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute",
          "workingLatex": "x^{2} - 2x + 17 = 0",
          "explanation": "Write the equation with real coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify coefficients are real",
          "workingLatex": "\\text{All coefficients are real}",
          "explanation": "The conjugate-pair argument ensures no imaginary coefficients remain.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "x^{2} - 2x + 17 = 0",
          "explanation": "Monic quadratic with the given complex root.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Conjugate pairs",
          "workingLatex": "a+bi,\\; a-bi",
          "explanation": "Non-real roots of real polynomials occur in conjugate pairs.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Discriminant",
          "workingLatex": "\\Delta < 0 \\Rightarrow \\text{complex roots}",
          "explanation": "Negative discriminant signals complex conjugate roots.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x^{2} - 2x + 17 = 0$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Complex roots of polynomials",
    "subtopicId": "fm.y1.pure.complex-quadratics",
    "questionDiagram": null,
    "id": "fm.y1.pure.complex-quadratics.q031",
    "tags": [
      "forming-equation",
      "conjugate-pair"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "A quadratic equation has real coefficients and one root $4 + i$. Find the equation in the form $x^{2} + bx + c = 0$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the conjugate",
          "workingLatex": "\\text{If } 4 + i \\text{ is a root, so is } 4 - i",
          "explanation": "Polynomials with real coefficients have conjugate pairs of non-real roots.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Sum of roots",
          "workingLatex": "\\alpha + \\beta = (4 + 1i) + (4 - 1i) = 8",
          "explanation": "Imaginary parts cancel.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Product of roots",
          "workingLatex": "\\alpha\\beta = (4 + 1i)(4 - 1i) = 4^{2} + 1^{2} = 17",
          "explanation": "Multiply conjugates to get a real product.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Vieta's relations",
          "workingLatex": "x^{2} - (\\alpha+\\beta)x + \\alpha\\beta = 0",
          "explanation": "For a monic quadratic, the coefficient of $x$ is minus the sum and the constant is the product.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute",
          "workingLatex": "x^{2} - 8x + 17 = 0",
          "explanation": "Write the equation with real coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify coefficients are real",
          "workingLatex": "\\text{All coefficients are real}",
          "explanation": "The conjugate-pair argument ensures no imaginary coefficients remain.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "x^{2} - 8x + 17 = 0",
          "explanation": "Monic quadratic with the given complex root.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Conjugate pairs",
          "workingLatex": "a+bi,\\; a-bi",
          "explanation": "Non-real roots of real polynomials occur in conjugate pairs.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Discriminant",
          "workingLatex": "\\Delta < 0 \\Rightarrow \\text{complex roots}",
          "explanation": "Negative discriminant signals complex conjugate roots.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x^{2} - 8x + 17 = 0$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Complex roots of polynomials",
    "subtopicId": "fm.y1.pure.complex-quadratics",
    "questionDiagram": null,
    "id": "fm.y1.pure.complex-quadratics.q032",
    "tags": [
      "forming-equation",
      "conjugate-pair"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "A quadratic equation has real coefficients and one root $-3 + 2i$. Find the equation in the form $x^{2} + bx + c = 0$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the conjugate",
          "workingLatex": "\\text{If } -3 + 2i \\text{ is a root, so is } -3 - 2i",
          "explanation": "Polynomials with real coefficients have conjugate pairs of non-real roots.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Sum of roots",
          "workingLatex": "\\alpha + \\beta = (-3 + 2i) + (-3 - 2i) = -6",
          "explanation": "Imaginary parts cancel.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Product of roots",
          "workingLatex": "\\alpha\\beta = (-3 + 2i)(-3 - 2i) = -3^{2} + 2^{2} = 13",
          "explanation": "Multiply conjugates to get a real product.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Vieta's relations",
          "workingLatex": "x^{2} - (\\alpha+\\beta)x + \\alpha\\beta = 0",
          "explanation": "For a monic quadratic, the coefficient of $x$ is minus the sum and the constant is the product.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute",
          "workingLatex": "x^{2} + 6x + 13 = 0",
          "explanation": "Write the equation with real coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify coefficients are real",
          "workingLatex": "\\text{All coefficients are real}",
          "explanation": "The conjugate-pair argument ensures no imaginary coefficients remain.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "x^{2} + 6x + 13 = 0",
          "explanation": "Monic quadratic with the given complex root.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Conjugate pairs",
          "workingLatex": "a+bi,\\; a-bi",
          "explanation": "Non-real roots of real polynomials occur in conjugate pairs.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Discriminant",
          "workingLatex": "\\Delta < 0 \\Rightarrow \\text{complex roots}",
          "explanation": "Negative discriminant signals complex conjugate roots.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x^{2} + 6x + 13 = 0$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Complex roots of polynomials",
    "subtopicId": "fm.y1.pure.complex-quadratics",
    "questionDiagram": null,
    "id": "fm.y1.pure.complex-quadratics.q033",
    "tags": [
      "forming-equation",
      "conjugate-pair"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "A quadratic equation has real coefficients and one root $3i$. Find the equation in the form $x^{2} + bx + c = 0$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the conjugate",
          "workingLatex": "\\text{If } 3i \\text{ is a root, so is } -3i",
          "explanation": "Polynomials with real coefficients have conjugate pairs of non-real roots.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Sum of roots",
          "workingLatex": "\\alpha + \\beta = (0 + 3i) + (0 - 3i) = 0",
          "explanation": "Imaginary parts cancel.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Product of roots",
          "workingLatex": "\\alpha\\beta = (0 + 3i)(0 - 3i) = 0^{2} + 3^{2} = 9",
          "explanation": "Multiply conjugates to get a real product.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Vieta's relations",
          "workingLatex": "x^{2} - (\\alpha+\\beta)x + \\alpha\\beta = 0",
          "explanation": "For a monic quadratic, the coefficient of $x$ is minus the sum and the constant is the product.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute",
          "workingLatex": "x^{2} + 9 = 0",
          "explanation": "Write the equation with real coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify coefficients are real",
          "workingLatex": "\\text{All coefficients are real}",
          "explanation": "The conjugate-pair argument ensures no imaginary coefficients remain.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "x^{2} + 9 = 0",
          "explanation": "Monic quadratic with the given complex root.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Conjugate pairs",
          "workingLatex": "a+bi,\\; a-bi",
          "explanation": "Non-real roots of real polynomials occur in conjugate pairs.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Discriminant",
          "workingLatex": "\\Delta < 0 \\Rightarrow \\text{complex roots}",
          "explanation": "Negative discriminant signals complex conjugate roots.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x^{2} + 9 = 0$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Complex roots of polynomials",
    "subtopicId": "fm.y1.pure.complex-quadratics",
    "questionDiagram": null,
    "id": "fm.y1.pure.complex-quadratics.q034",
    "tags": [
      "forming-equation",
      "conjugate-pair"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "A quadratic equation has real coefficients and one root $5 + 2i$. Find the equation in the form $x^{2} + bx + c = 0$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the conjugate",
          "workingLatex": "\\text{If } 5 + 2i \\text{ is a root, so is } 5 - 2i",
          "explanation": "Polynomials with real coefficients have conjugate pairs of non-real roots.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Sum of roots",
          "workingLatex": "\\alpha + \\beta = (5 + 2i) + (5 - 2i) = 10",
          "explanation": "Imaginary parts cancel.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Product of roots",
          "workingLatex": "\\alpha\\beta = (5 + 2i)(5 - 2i) = 5^{2} + 2^{2} = 29",
          "explanation": "Multiply conjugates to get a real product.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Vieta's relations",
          "workingLatex": "x^{2} - (\\alpha+\\beta)x + \\alpha\\beta = 0",
          "explanation": "For a monic quadratic, the coefficient of $x$ is minus the sum and the constant is the product.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute",
          "workingLatex": "x^{2} - 10x + 29 = 0",
          "explanation": "Write the equation with real coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify coefficients are real",
          "workingLatex": "\\text{All coefficients are real}",
          "explanation": "The conjugate-pair argument ensures no imaginary coefficients remain.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "x^{2} - 10x + 29 = 0",
          "explanation": "Monic quadratic with the given complex root.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Conjugate pairs",
          "workingLatex": "a+bi,\\; a-bi",
          "explanation": "Non-real roots of real polynomials occur in conjugate pairs.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Discriminant",
          "workingLatex": "\\Delta < 0 \\Rightarrow \\text{complex roots}",
          "explanation": "Negative discriminant signals complex conjugate roots.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x^{2} - 10x + 29 = 0$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Complex roots of polynomials",
    "subtopicId": "fm.y1.pure.complex-quadratics",
    "questionDiagram": null,
    "id": "fm.y1.pure.complex-quadratics.q035",
    "tags": [
      "forming-equation",
      "conjugate-pair"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "A quadratic equation has real coefficients and one root $-1 + i$. Find the equation in the form $x^{2} + bx + c = 0$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the conjugate",
          "workingLatex": "\\text{If } -1 + i \\text{ is a root, so is } -1 - i",
          "explanation": "Polynomials with real coefficients have conjugate pairs of non-real roots.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Sum of roots",
          "workingLatex": "\\alpha + \\beta = (-1 + 1i) + (-1 - 1i) = -2",
          "explanation": "Imaginary parts cancel.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Product of roots",
          "workingLatex": "\\alpha\\beta = (-1 + 1i)(-1 - 1i) = -1^{2} + 1^{2} = 2",
          "explanation": "Multiply conjugates to get a real product.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Vieta's relations",
          "workingLatex": "x^{2} - (\\alpha+\\beta)x + \\alpha\\beta = 0",
          "explanation": "For a monic quadratic, the coefficient of $x$ is minus the sum and the constant is the product.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute",
          "workingLatex": "x^{2} + 2x + 2 = 0",
          "explanation": "Write the equation with real coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify coefficients are real",
          "workingLatex": "\\text{All coefficients are real}",
          "explanation": "The conjugate-pair argument ensures no imaginary coefficients remain.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "x^{2} + 2x + 2 = 0",
          "explanation": "Monic quadratic with the given complex root.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Conjugate pairs",
          "workingLatex": "a+bi,\\; a-bi",
          "explanation": "Non-real roots of real polynomials occur in conjugate pairs.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Discriminant",
          "workingLatex": "\\Delta < 0 \\Rightarrow \\text{complex roots}",
          "explanation": "Negative discriminant signals complex conjugate roots.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x^{2} + 2x + 2 = 0$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Complex roots of polynomials",
    "subtopicId": "fm.y1.pure.complex-quadratics",
    "questionDiagram": null,
    "id": "fm.y1.pure.complex-quadratics.q036",
    "tags": [
      "conjugate-pair",
      "proof"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Explain why, if $2 + 3i$ is a root of a polynomial with real coefficients, then its complex conjugate is also a root.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Suppose $z$ is a non-real root",
          "workingLatex": "z = 2 + 3i",
          "explanation": "Assume a complex root of a polynomial with real coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Polynomial with real coefficients",
          "workingLatex": "P(x) = a_{n}x^{n} + \\cdots + a_{0},\\; a_{i} \\in \\mathbb{R}",
          "explanation": "Every coefficient is a real number.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Root condition",
          "workingLatex": "P(z) = 0",
          "explanation": "Substituting the root gives zero.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Take complex conjugate",
          "workingLatex": "\\overline{P(z)} = P(\\bar{z}) = 0",
          "explanation": "Conjugating each term: $\\overline{a_k z^{k}} = a_k \\bar{z}^{k}$ since $a_k$ is real.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Conclusion",
          "workingLatex": "\\bar{z} = 2 - 3i \\text{ is also a root}",
          "explanation": "The conjugate satisfies the same equation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Why pairs matter",
          "workingLatex": "\\text{Non-real roots occur in conjugate pairs}",
          "explanation": "This is essential when forming polynomials from complex roots.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "\\text{The conjugate } 2 - 3i \\text{ is also a root}",
          "explanation": "Conjugate-pair theorem for real polynomials.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Conjugate pairs",
          "workingLatex": "a+bi,\\; a-bi",
          "explanation": "Non-real roots of real polynomials occur in conjugate pairs.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Discriminant",
          "workingLatex": "\\Delta < 0 \\Rightarrow \\text{complex roots}",
          "explanation": "Negative discriminant signals complex conjugate roots.",
          "diagram": null
        }
      ],
      "finalAnswer": "Since coefficients are real, $\\overline{P(z)} = P(\\bar{z}) = 0$, so $\\bar{z} = 2 - 3i$ is also a root."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Complex roots of polynomials",
    "subtopicId": "fm.y1.pure.complex-quadratics",
    "questionDiagram": null,
    "id": "fm.y1.pure.complex-quadratics.q037",
    "tags": [
      "conjugate-pair",
      "proof"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Explain why, if $-1 + 4i$ is a root of a polynomial with real coefficients, then its complex conjugate is also a root.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Suppose $z$ is a non-real root",
          "workingLatex": "z = -1 + 4i",
          "explanation": "Assume a complex root of a polynomial with real coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Polynomial with real coefficients",
          "workingLatex": "P(x) = a_{n}x^{n} + \\cdots + a_{0},\\; a_{i} \\in \\mathbb{R}",
          "explanation": "Every coefficient is a real number.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Root condition",
          "workingLatex": "P(z) = 0",
          "explanation": "Substituting the root gives zero.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Take complex conjugate",
          "workingLatex": "\\overline{P(z)} = P(\\bar{z}) = 0",
          "explanation": "Conjugating each term: $\\overline{a_k z^{k}} = a_k \\bar{z}^{k}$ since $a_k$ is real.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Conclusion",
          "workingLatex": "\\bar{z} = -1 - 4i \\text{ is also a root}",
          "explanation": "The conjugate satisfies the same equation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Why pairs matter",
          "workingLatex": "\\text{Non-real roots occur in conjugate pairs}",
          "explanation": "This is essential when forming polynomials from complex roots.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "\\text{The conjugate } -1 - 4i \\text{ is also a root}",
          "explanation": "Conjugate-pair theorem for real polynomials.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Conjugate pairs",
          "workingLatex": "a+bi,\\; a-bi",
          "explanation": "Non-real roots of real polynomials occur in conjugate pairs.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Discriminant",
          "workingLatex": "\\Delta < 0 \\Rightarrow \\text{complex roots}",
          "explanation": "Negative discriminant signals complex conjugate roots.",
          "diagram": null
        }
      ],
      "finalAnswer": "Since coefficients are real, $\\overline{P(z)} = P(\\bar{z}) = 0$, so $\\bar{z} = -1 - 4i$ is also a root."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Complex roots of polynomials",
    "subtopicId": "fm.y1.pure.complex-quadratics",
    "questionDiagram": null,
    "id": "fm.y1.pure.complex-quadratics.q038",
    "tags": [
      "conjugate-pair",
      "proof"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Explain why, if $3 + i$ is a root of a polynomial with real coefficients, then its complex conjugate is also a root.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Suppose $z$ is a non-real root",
          "workingLatex": "z = 3 + i",
          "explanation": "Assume a complex root of a polynomial with real coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Polynomial with real coefficients",
          "workingLatex": "P(x) = a_{n}x^{n} + \\cdots + a_{0},\\; a_{i} \\in \\mathbb{R}",
          "explanation": "Every coefficient is a real number.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Root condition",
          "workingLatex": "P(z) = 0",
          "explanation": "Substituting the root gives zero.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Take complex conjugate",
          "workingLatex": "\\overline{P(z)} = P(\\bar{z}) = 0",
          "explanation": "Conjugating each term: $\\overline{a_k z^{k}} = a_k \\bar{z}^{k}$ since $a_k$ is real.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Conclusion",
          "workingLatex": "\\bar{z} = 3 - i \\text{ is also a root}",
          "explanation": "The conjugate satisfies the same equation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Why pairs matter",
          "workingLatex": "\\text{Non-real roots occur in conjugate pairs}",
          "explanation": "This is essential when forming polynomials from complex roots.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "\\text{The conjugate } 3 - i \\text{ is also a root}",
          "explanation": "Conjugate-pair theorem for real polynomials.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Conjugate pairs",
          "workingLatex": "a+bi,\\; a-bi",
          "explanation": "Non-real roots of real polynomials occur in conjugate pairs.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Discriminant",
          "workingLatex": "\\Delta < 0 \\Rightarrow \\text{complex roots}",
          "explanation": "Negative discriminant signals complex conjugate roots.",
          "diagram": null
        }
      ],
      "finalAnswer": "Since coefficients are real, $\\overline{P(z)} = P(\\bar{z}) = 0$, so $\\bar{z} = 3 - i$ is also a root."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Complex roots of polynomials",
    "subtopicId": "fm.y1.pure.complex-quadratics",
    "questionDiagram": null,
    "id": "fm.y1.pure.complex-quadratics.q039",
    "tags": [
      "conjugate-pair",
      "proof"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Explain why, if $-2 + i$ is a root of a polynomial with real coefficients, then its complex conjugate is also a root.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Suppose $z$ is a non-real root",
          "workingLatex": "z = -2 + i",
          "explanation": "Assume a complex root of a polynomial with real coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Polynomial with real coefficients",
          "workingLatex": "P(x) = a_{n}x^{n} + \\cdots + a_{0},\\; a_{i} \\in \\mathbb{R}",
          "explanation": "Every coefficient is a real number.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Root condition",
          "workingLatex": "P(z) = 0",
          "explanation": "Substituting the root gives zero.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Take complex conjugate",
          "workingLatex": "\\overline{P(z)} = P(\\bar{z}) = 0",
          "explanation": "Conjugating each term: $\\overline{a_k z^{k}} = a_k \\bar{z}^{k}$ since $a_k$ is real.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Conclusion",
          "workingLatex": "\\bar{z} = -2 - i \\text{ is also a root}",
          "explanation": "The conjugate satisfies the same equation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Why pairs matter",
          "workingLatex": "\\text{Non-real roots occur in conjugate pairs}",
          "explanation": "This is essential when forming polynomials from complex roots.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "\\text{The conjugate } -2 - i \\text{ is also a root}",
          "explanation": "Conjugate-pair theorem for real polynomials.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Conjugate pairs",
          "workingLatex": "a+bi,\\; a-bi",
          "explanation": "Non-real roots of real polynomials occur in conjugate pairs.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Discriminant",
          "workingLatex": "\\Delta < 0 \\Rightarrow \\text{complex roots}",
          "explanation": "Negative discriminant signals complex conjugate roots.",
          "diagram": null
        }
      ],
      "finalAnswer": "Since coefficients are real, $\\overline{P(z)} = P(\\bar{z}) = 0$, so $\\bar{z} = -2 - i$ is also a root."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Complex roots of polynomials",
    "subtopicId": "fm.y1.pure.complex-quadratics",
    "questionDiagram": null,
    "id": "fm.y1.pure.complex-quadratics.q040",
    "tags": [
      "conjugate-pair",
      "proof"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Explain why, if $1 + 2i$ is a root of a polynomial with real coefficients, then its complex conjugate is also a root.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Suppose $z$ is a non-real root",
          "workingLatex": "z = 1 + 2i",
          "explanation": "Assume a complex root of a polynomial with real coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Polynomial with real coefficients",
          "workingLatex": "P(x) = a_{n}x^{n} + \\cdots + a_{0},\\; a_{i} \\in \\mathbb{R}",
          "explanation": "Every coefficient is a real number.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Root condition",
          "workingLatex": "P(z) = 0",
          "explanation": "Substituting the root gives zero.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Take complex conjugate",
          "workingLatex": "\\overline{P(z)} = P(\\bar{z}) = 0",
          "explanation": "Conjugating each term: $\\overline{a_k z^{k}} = a_k \\bar{z}^{k}$ since $a_k$ is real.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Conclusion",
          "workingLatex": "\\bar{z} = 1 - 2i \\text{ is also a root}",
          "explanation": "The conjugate satisfies the same equation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Why pairs matter",
          "workingLatex": "\\text{Non-real roots occur in conjugate pairs}",
          "explanation": "This is essential when forming polynomials from complex roots.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "\\text{The conjugate } 1 - 2i \\text{ is also a root}",
          "explanation": "Conjugate-pair theorem for real polynomials.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Conjugate pairs",
          "workingLatex": "a+bi,\\; a-bi",
          "explanation": "Non-real roots of real polynomials occur in conjugate pairs.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Discriminant",
          "workingLatex": "\\Delta < 0 \\Rightarrow \\text{complex roots}",
          "explanation": "Negative discriminant signals complex conjugate roots.",
          "diagram": null
        }
      ],
      "finalAnswer": "Since coefficients are real, $\\overline{P(z)} = P(\\bar{z}) = 0$, so $\\bar{z} = 1 - 2i$ is also a root."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Complex roots of polynomials",
    "subtopicId": "fm.y1.pure.complex-quadratics",
    "questionDiagram": null,
    "id": "fm.y1.pure.complex-quadratics.q041",
    "tags": [
      "factorisation",
      "quadratic-factor"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Write a real quadratic factor of a polynomial that has roots $2 + 3i$ and its conjugate.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Conjugate root",
          "workingLatex": "\\text{Also a root: } 2 - 3i",
          "explanation": "Real coefficients give conjugate pairs.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Quadratic factor",
          "workingLatex": "(x - (2 + 3i))(x - (2 - 3i))",
          "explanation": "Multiply linear factors for the pair.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand",
          "workingLatex": "x^{2} - 4x + 13",
          "explanation": "Use $(a+bi)(a-bi) = a^{2}+b^{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Factorised form",
          "workingLatex": "(x^{2} - 4x + 13)",
          "explanation": "Irreducible quadratic factor over $\\mathbb{R}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpretation",
          "workingLatex": "\\text{Cannot factor further over } \\mathbb{R}",
          "explanation": "Complex roots mean the quadratic factor has no real roots.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "(x^{2} - 4x + 13)",
          "explanation": "Real quadratic factor corresponding to the conjugate pair.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conjugate pairs",
          "workingLatex": "a+bi,\\; a-bi",
          "explanation": "Non-real roots of real polynomials occur in conjugate pairs.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Discriminant",
          "workingLatex": "\\Delta < 0 \\Rightarrow \\text{complex roots}",
          "explanation": "Negative discriminant signals complex conjugate roots.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Real coefficients",
          "workingLatex": "\\text{Coefficients } \\in \\mathbb{R}",
          "explanation": "The conjugate-pair theorem applies to polynomials with real coefficients.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(x^{2} - 4x + 13)$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Complex roots of polynomials",
    "subtopicId": "fm.y1.pure.complex-quadratics",
    "questionDiagram": null,
    "id": "fm.y1.pure.complex-quadratics.q042",
    "tags": [
      "factorisation",
      "quadratic-factor"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Write a real quadratic factor of a polynomial that has roots $-1 + 2i$ and its conjugate.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Conjugate root",
          "workingLatex": "\\text{Also a root: } -1 - 2i",
          "explanation": "Real coefficients give conjugate pairs.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Quadratic factor",
          "workingLatex": "(x - (-1 + 2i))(x - (-1 - 2i))",
          "explanation": "Multiply linear factors for the pair.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand",
          "workingLatex": "x^{2} - -2x + 5",
          "explanation": "Use $(a+bi)(a-bi) = a^{2}+b^{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Factorised form",
          "workingLatex": "(x^{2} - -2x + 5)",
          "explanation": "Irreducible quadratic factor over $\\mathbb{R}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpretation",
          "workingLatex": "\\text{Cannot factor further over } \\mathbb{R}",
          "explanation": "Complex roots mean the quadratic factor has no real roots.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "(x^{2} - -2x + 5)",
          "explanation": "Real quadratic factor corresponding to the conjugate pair.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conjugate pairs",
          "workingLatex": "a+bi,\\; a-bi",
          "explanation": "Non-real roots of real polynomials occur in conjugate pairs.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Discriminant",
          "workingLatex": "\\Delta < 0 \\Rightarrow \\text{complex roots}",
          "explanation": "Negative discriminant signals complex conjugate roots.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Real coefficients",
          "workingLatex": "\\text{Coefficients } \\in \\mathbb{R}",
          "explanation": "The conjugate-pair theorem applies to polynomials with real coefficients.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(x^{2} - -2x + 5)$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Complex roots of polynomials",
    "subtopicId": "fm.y1.pure.complex-quadratics",
    "questionDiagram": null,
    "id": "fm.y1.pure.complex-quadratics.q043",
    "tags": [
      "factorisation",
      "quadratic-factor"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Write a real quadratic factor of a polynomial that has roots $3 + 4i$ and its conjugate.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Conjugate root",
          "workingLatex": "\\text{Also a root: } 3 - 4i",
          "explanation": "Real coefficients give conjugate pairs.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Quadratic factor",
          "workingLatex": "(x - (3 + 4i))(x - (3 - 4i))",
          "explanation": "Multiply linear factors for the pair.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand",
          "workingLatex": "x^{2} - 6x + 25",
          "explanation": "Use $(a+bi)(a-bi) = a^{2}+b^{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Factorised form",
          "workingLatex": "(x^{2} - 6x + 25)",
          "explanation": "Irreducible quadratic factor over $\\mathbb{R}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpretation",
          "workingLatex": "\\text{Cannot factor further over } \\mathbb{R}",
          "explanation": "Complex roots mean the quadratic factor has no real roots.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "(x^{2} - 6x + 25)",
          "explanation": "Real quadratic factor corresponding to the conjugate pair.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conjugate pairs",
          "workingLatex": "a+bi,\\; a-bi",
          "explanation": "Non-real roots of real polynomials occur in conjugate pairs.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Discriminant",
          "workingLatex": "\\Delta < 0 \\Rightarrow \\text{complex roots}",
          "explanation": "Negative discriminant signals complex conjugate roots.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Real coefficients",
          "workingLatex": "\\text{Coefficients } \\in \\mathbb{R}",
          "explanation": "The conjugate-pair theorem applies to polynomials with real coefficients.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(x^{2} - 6x + 25)$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Complex roots of polynomials",
    "subtopicId": "fm.y1.pure.complex-quadratics",
    "questionDiagram": null,
    "id": "fm.y1.pure.complex-quadratics.q044",
    "tags": [
      "factorisation",
      "quadratic-factor"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Write a real quadratic factor of a polynomial that has roots $-2 + i$ and its conjugate.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Conjugate root",
          "workingLatex": "\\text{Also a root: } -2 - i",
          "explanation": "Real coefficients give conjugate pairs.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Quadratic factor",
          "workingLatex": "(x - (-2 + i))(x - (-2 - i))",
          "explanation": "Multiply linear factors for the pair.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand",
          "workingLatex": "x^{2} - -4x + 5",
          "explanation": "Use $(a+bi)(a-bi) = a^{2}+b^{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Factorised form",
          "workingLatex": "(x^{2} - -4x + 5)",
          "explanation": "Irreducible quadratic factor over $\\mathbb{R}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpretation",
          "workingLatex": "\\text{Cannot factor further over } \\mathbb{R}",
          "explanation": "Complex roots mean the quadratic factor has no real roots.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "(x^{2} - -4x + 5)",
          "explanation": "Real quadratic factor corresponding to the conjugate pair.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conjugate pairs",
          "workingLatex": "a+bi,\\; a-bi",
          "explanation": "Non-real roots of real polynomials occur in conjugate pairs.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Discriminant",
          "workingLatex": "\\Delta < 0 \\Rightarrow \\text{complex roots}",
          "explanation": "Negative discriminant signals complex conjugate roots.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Real coefficients",
          "workingLatex": "\\text{Coefficients } \\in \\mathbb{R}",
          "explanation": "The conjugate-pair theorem applies to polynomials with real coefficients.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(x^{2} - -4x + 5)$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Complex roots of polynomials",
    "subtopicId": "fm.y1.pure.complex-quadratics",
    "questionDiagram": null,
    "id": "fm.y1.pure.complex-quadratics.q045",
    "tags": [
      "factorisation",
      "quadratic-factor"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Write a real quadratic factor of a polynomial that has roots $1 + i$ and its conjugate.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Conjugate root",
          "workingLatex": "\\text{Also a root: } 1 - i",
          "explanation": "Real coefficients give conjugate pairs.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Quadratic factor",
          "workingLatex": "(x - (1 + i))(x - (1 - i))",
          "explanation": "Multiply linear factors for the pair.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand",
          "workingLatex": "x^{2} - 2x + 2",
          "explanation": "Use $(a+bi)(a-bi) = a^{2}+b^{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Factorised form",
          "workingLatex": "(x^{2} - 2x + 2)",
          "explanation": "Irreducible quadratic factor over $\\mathbb{R}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpretation",
          "workingLatex": "\\text{Cannot factor further over } \\mathbb{R}",
          "explanation": "Complex roots mean the quadratic factor has no real roots.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "(x^{2} - 2x + 2)",
          "explanation": "Real quadratic factor corresponding to the conjugate pair.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conjugate pairs",
          "workingLatex": "a+bi,\\; a-bi",
          "explanation": "Non-real roots of real polynomials occur in conjugate pairs.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Discriminant",
          "workingLatex": "\\Delta < 0 \\Rightarrow \\text{complex roots}",
          "explanation": "Negative discriminant signals complex conjugate roots.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Real coefficients",
          "workingLatex": "\\text{Coefficients } \\in \\mathbb{R}",
          "explanation": "The conjugate-pair theorem applies to polynomials with real coefficients.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(x^{2} - 2x + 2)$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Complex roots of polynomials",
    "subtopicId": "fm.y1.pure.complex-quadratics",
    "questionDiagram": null,
    "id": "fm.y1.pure.complex-quadratics.q046",
    "tags": [
      "cubic",
      "conjugate-pair",
      "forming-equation"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "A cubic with real coefficients has roots $1$, $2 + 3i$ and its conjugate. Find the equation.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "List all three roots",
          "workingLatex": "\\alpha = 1,\\; \\beta = 2 + 3i,\\; \\gamma = 2 - 3i",
          "explanation": "One real root and one conjugate pair.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Sum of roots",
          "workingLatex": "\\alpha + \\beta + \\gamma = 1 + 2(2) = 5",
          "explanation": "The imaginary parts cancel in the sum.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Sum of pairwise products",
          "workingLatex": "\\alpha\\beta + \\beta\\gamma + \\gamma\\alpha = 1 \\cdot 2(2) + 13 = 17",
          "explanation": "Use $\\beta\\gamma = |\\beta|^{2} = ${pairProd}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Product of roots",
          "workingLatex": "\\alpha\\beta\\gamma = 1 \\times 13 = 13",
          "explanation": "Multiply all three roots.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Vieta for cubic",
          "workingLatex": "x^{3} - S_{1}x^{2} + S_{2}x - S_{3} = 0",
          "explanation": "Monic cubic template with symmetric sums.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write equation",
          "workingLatex": "x^{3} - 5x^{2} + 17x - 13 = 0",
          "explanation": "Substitute the computed symmetric sums.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check real coefficients",
          "workingLatex": "\\text{All coefficients are real}",
          "explanation": "Conjugate pairs guarantee real coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "x^{3} - 5x^{2} + 17x - 13 = 0",
          "explanation": "Cubic with the given root structure.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conjugate pairs",
          "workingLatex": "a+bi,\\; a-bi",
          "explanation": "Non-real roots of real polynomials occur in conjugate pairs.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x^{3} - 5x^{2} + 17x - 13 = 0$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Complex roots of polynomials",
    "subtopicId": "fm.y1.pure.complex-quadratics",
    "questionDiagram": null,
    "id": "fm.y1.pure.complex-quadratics.q047",
    "tags": [
      "cubic",
      "conjugate-pair",
      "forming-equation"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "A cubic with real coefficients has roots $-2$, $1 + 2i$ and its conjugate. Find the equation.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "List all three roots",
          "workingLatex": "\\alpha = -2,\\; \\beta = 1 + 2i,\\; \\gamma = 1 - 2i",
          "explanation": "One real root and one conjugate pair.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Sum of roots",
          "workingLatex": "\\alpha + \\beta + \\gamma = -2 + 2(1) = 0",
          "explanation": "The imaginary parts cancel in the sum.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Sum of pairwise products",
          "workingLatex": "\\alpha\\beta + \\beta\\gamma + \\gamma\\alpha = -2 \\cdot 2(1) + 5 = 1",
          "explanation": "Use $\\beta\\gamma = |\\beta|^{2} = ${pairProd}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Product of roots",
          "workingLatex": "\\alpha\\beta\\gamma = -2 \\times 5 = -10",
          "explanation": "Multiply all three roots.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Vieta for cubic",
          "workingLatex": "x^{3} - S_{1}x^{2} + S_{2}x - S_{3} = 0",
          "explanation": "Monic cubic template with symmetric sums.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write equation",
          "workingLatex": "x^{3} - 0x^{2} + 1x - -10 = 0",
          "explanation": "Substitute the computed symmetric sums.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check real coefficients",
          "workingLatex": "\\text{All coefficients are real}",
          "explanation": "Conjugate pairs guarantee real coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "x^{3} - 0x^{2} + 1x - -10 = 0",
          "explanation": "Cubic with the given root structure.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conjugate pairs",
          "workingLatex": "a+bi,\\; a-bi",
          "explanation": "Non-real roots of real polynomials occur in conjugate pairs.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x^{3} - 0x^{2} + 1x - -10 = 0$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Complex roots of polynomials",
    "subtopicId": "fm.y1.pure.complex-quadratics",
    "questionDiagram": null,
    "id": "fm.y1.pure.complex-quadratics.q048",
    "tags": [
      "cubic",
      "conjugate-pair",
      "forming-equation"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "A cubic with real coefficients has roots $3$, $-1 + i$ and its conjugate. Find the equation.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "List all three roots",
          "workingLatex": "\\alpha = 3,\\; \\beta = -1 + i,\\; \\gamma = -1 - i",
          "explanation": "One real root and one conjugate pair.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Sum of roots",
          "workingLatex": "\\alpha + \\beta + \\gamma = 3 + 2(-1) = 1",
          "explanation": "The imaginary parts cancel in the sum.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Sum of pairwise products",
          "workingLatex": "\\alpha\\beta + \\beta\\gamma + \\gamma\\alpha = 3 \\cdot 2(-1) + 2 = -4",
          "explanation": "Use $\\beta\\gamma = |\\beta|^{2} = ${pairProd}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Product of roots",
          "workingLatex": "\\alpha\\beta\\gamma = 3 \\times 2 = 6",
          "explanation": "Multiply all three roots.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Vieta for cubic",
          "workingLatex": "x^{3} - S_{1}x^{2} + S_{2}x - S_{3} = 0",
          "explanation": "Monic cubic template with symmetric sums.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write equation",
          "workingLatex": "x^{3} - 1x^{2} + -4x - 6 = 0",
          "explanation": "Substitute the computed symmetric sums.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check real coefficients",
          "workingLatex": "\\text{All coefficients are real}",
          "explanation": "Conjugate pairs guarantee real coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "x^{3} - 1x^{2} + -4x - 6 = 0",
          "explanation": "Cubic with the given root structure.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conjugate pairs",
          "workingLatex": "a+bi,\\; a-bi",
          "explanation": "Non-real roots of real polynomials occur in conjugate pairs.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x^{3} - 1x^{2} + -4x - 6 = 0$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Complex roots of polynomials",
    "subtopicId": "fm.y1.pure.complex-quadratics",
    "questionDiagram": null,
    "id": "fm.y1.pure.complex-quadratics.q049",
    "tags": [
      "cubic",
      "conjugate-pair",
      "forming-equation"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "A cubic with real coefficients has roots $0$, $2 + i$ and its conjugate. Find the equation.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "List all three roots",
          "workingLatex": "\\alpha = 0,\\; \\beta = 2 + i,\\; \\gamma = 2 - i",
          "explanation": "One real root and one conjugate pair.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Sum of roots",
          "workingLatex": "\\alpha + \\beta + \\gamma = 0 + 2(2) = 4",
          "explanation": "The imaginary parts cancel in the sum.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Sum of pairwise products",
          "workingLatex": "\\alpha\\beta + \\beta\\gamma + \\gamma\\alpha = 0 \\cdot 2(2) + 5 = 5",
          "explanation": "Use $\\beta\\gamma = |\\beta|^{2} = ${pairProd}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Product of roots",
          "workingLatex": "\\alpha\\beta\\gamma = 0 \\times 5 = 0",
          "explanation": "Multiply all three roots.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Vieta for cubic",
          "workingLatex": "x^{3} - S_{1}x^{2} + S_{2}x - S_{3} = 0",
          "explanation": "Monic cubic template with symmetric sums.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write equation",
          "workingLatex": "x^{3} - 4x^{2} + 5x - 0 = 0",
          "explanation": "Substitute the computed symmetric sums.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check real coefficients",
          "workingLatex": "\\text{All coefficients are real}",
          "explanation": "Conjugate pairs guarantee real coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "x^{3} - 4x^{2} + 5x - 0 = 0",
          "explanation": "Cubic with the given root structure.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conjugate pairs",
          "workingLatex": "a+bi,\\; a-bi",
          "explanation": "Non-real roots of real polynomials occur in conjugate pairs.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x^{3} - 4x^{2} + 5x - 0 = 0$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Complex roots of polynomials",
    "subtopicId": "fm.y1.pure.complex-quadratics",
    "questionDiagram": null,
    "id": "fm.y1.pure.complex-quadratics.q050",
    "tags": [
      "cubic",
      "conjugate-pair",
      "forming-equation"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "A cubic with real coefficients has roots $2$, $-2 + 3i$ and its conjugate. Find the equation.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "List all three roots",
          "workingLatex": "\\alpha = 2,\\; \\beta = -2 + 3i,\\; \\gamma = -2 - 3i",
          "explanation": "One real root and one conjugate pair.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Sum of roots",
          "workingLatex": "\\alpha + \\beta + \\gamma = 2 + 2(-2) = -2",
          "explanation": "The imaginary parts cancel in the sum.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Sum of pairwise products",
          "workingLatex": "\\alpha\\beta + \\beta\\gamma + \\gamma\\alpha = 2 \\cdot 2(-2) + 13 = 5",
          "explanation": "Use $\\beta\\gamma = |\\beta|^{2} = ${pairProd}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Product of roots",
          "workingLatex": "\\alpha\\beta\\gamma = 2 \\times 13 = 26",
          "explanation": "Multiply all three roots.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Vieta for cubic",
          "workingLatex": "x^{3} - S_{1}x^{2} + S_{2}x - S_{3} = 0",
          "explanation": "Monic cubic template with symmetric sums.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write equation",
          "workingLatex": "x^{3} - -2x^{2} + 5x - 26 = 0",
          "explanation": "Substitute the computed symmetric sums.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check real coefficients",
          "workingLatex": "\\text{All coefficients are real}",
          "explanation": "Conjugate pairs guarantee real coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "x^{3} - -2x^{2} + 5x - 26 = 0",
          "explanation": "Cubic with the given root structure.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conjugate pairs",
          "workingLatex": "a+bi,\\; a-bi",
          "explanation": "Non-real roots of real polynomials occur in conjugate pairs.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x^{3} - -2x^{2} + 5x - 26 = 0$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Complex roots of polynomials",
    "subtopicId": "fm.y1.pure.complex-quadratics",
    "questionDiagram": null,
    "id": "fm.y1.pure.complex-quadratics.q051",
    "tags": [
      "cubic",
      "conjugate-pair",
      "forming-equation"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "A cubic with real coefficients has roots $-1$, $3 + 2i$ and its conjugate. Find the equation.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "List all three roots",
          "workingLatex": "\\alpha = -1,\\; \\beta = 3 + 2i,\\; \\gamma = 3 - 2i",
          "explanation": "One real root and one conjugate pair.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Sum of roots",
          "workingLatex": "\\alpha + \\beta + \\gamma = -1 + 2(3) = 5",
          "explanation": "The imaginary parts cancel in the sum.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Sum of pairwise products",
          "workingLatex": "\\alpha\\beta + \\beta\\gamma + \\gamma\\alpha = -1 \\cdot 2(3) + 13 = 7",
          "explanation": "Use $\\beta\\gamma = |\\beta|^{2} = ${pairProd}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Product of roots",
          "workingLatex": "\\alpha\\beta\\gamma = -1 \\times 13 = -13",
          "explanation": "Multiply all three roots.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Vieta for cubic",
          "workingLatex": "x^{3} - S_{1}x^{2} + S_{2}x - S_{3} = 0",
          "explanation": "Monic cubic template with symmetric sums.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write equation",
          "workingLatex": "x^{3} - 5x^{2} + 7x - -13 = 0",
          "explanation": "Substitute the computed symmetric sums.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check real coefficients",
          "workingLatex": "\\text{All coefficients are real}",
          "explanation": "Conjugate pairs guarantee real coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "x^{3} - 5x^{2} + 7x - -13 = 0",
          "explanation": "Cubic with the given root structure.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conjugate pairs",
          "workingLatex": "a+bi,\\; a-bi",
          "explanation": "Non-real roots of real polynomials occur in conjugate pairs.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x^{3} - 5x^{2} + 7x - -13 = 0$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Complex roots of polynomials",
    "subtopicId": "fm.y1.pure.complex-quadratics",
    "questionDiagram": null,
    "id": "fm.y1.pure.complex-quadratics.q052",
    "tags": [
      "cubic",
      "conjugate-pair",
      "forming-equation"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "A cubic with real coefficients has roots $4$, $1 + i$ and its conjugate. Find the equation.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "List all three roots",
          "workingLatex": "\\alpha = 4,\\; \\beta = 1 + i,\\; \\gamma = 1 - i",
          "explanation": "One real root and one conjugate pair.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Sum of roots",
          "workingLatex": "\\alpha + \\beta + \\gamma = 4 + 2(1) = 6",
          "explanation": "The imaginary parts cancel in the sum.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Sum of pairwise products",
          "workingLatex": "\\alpha\\beta + \\beta\\gamma + \\gamma\\alpha = 4 \\cdot 2(1) + 2 = 10",
          "explanation": "Use $\\beta\\gamma = |\\beta|^{2} = ${pairProd}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Product of roots",
          "workingLatex": "\\alpha\\beta\\gamma = 4 \\times 2 = 8",
          "explanation": "Multiply all three roots.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Vieta for cubic",
          "workingLatex": "x^{3} - S_{1}x^{2} + S_{2}x - S_{3} = 0",
          "explanation": "Monic cubic template with symmetric sums.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write equation",
          "workingLatex": "x^{3} - 6x^{2} + 10x - 8 = 0",
          "explanation": "Substitute the computed symmetric sums.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check real coefficients",
          "workingLatex": "\\text{All coefficients are real}",
          "explanation": "Conjugate pairs guarantee real coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "x^{3} - 6x^{2} + 10x - 8 = 0",
          "explanation": "Cubic with the given root structure.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conjugate pairs",
          "workingLatex": "a+bi,\\; a-bi",
          "explanation": "Non-real roots of real polynomials occur in conjugate pairs.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x^{3} - 6x^{2} + 10x - 8 = 0$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Complex roots of polynomials",
    "subtopicId": "fm.y1.pure.complex-quadratics",
    "questionDiagram": null,
    "id": "fm.y1.pure.complex-quadratics.q053",
    "tags": [
      "cubic",
      "conjugate-pair",
      "forming-equation"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "A cubic with real coefficients has roots $-3$, $2 + 2i$ and its conjugate. Find the equation.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "List all three roots",
          "workingLatex": "\\alpha = -3,\\; \\beta = 2 + 2i,\\; \\gamma = 2 - 2i",
          "explanation": "One real root and one conjugate pair.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Sum of roots",
          "workingLatex": "\\alpha + \\beta + \\gamma = -3 + 2(2) = 1",
          "explanation": "The imaginary parts cancel in the sum.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Sum of pairwise products",
          "workingLatex": "\\alpha\\beta + \\beta\\gamma + \\gamma\\alpha = -3 \\cdot 2(2) + 8 = -4",
          "explanation": "Use $\\beta\\gamma = |\\beta|^{2} = ${pairProd}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Product of roots",
          "workingLatex": "\\alpha\\beta\\gamma = -3 \\times 8 = -24",
          "explanation": "Multiply all three roots.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Vieta for cubic",
          "workingLatex": "x^{3} - S_{1}x^{2} + S_{2}x - S_{3} = 0",
          "explanation": "Monic cubic template with symmetric sums.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write equation",
          "workingLatex": "x^{3} - 1x^{2} + -4x - -24 = 0",
          "explanation": "Substitute the computed symmetric sums.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check real coefficients",
          "workingLatex": "\\text{All coefficients are real}",
          "explanation": "Conjugate pairs guarantee real coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "x^{3} - 1x^{2} + -4x - -24 = 0",
          "explanation": "Cubic with the given root structure.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conjugate pairs",
          "workingLatex": "a+bi,\\; a-bi",
          "explanation": "Non-real roots of real polynomials occur in conjugate pairs.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x^{3} - 1x^{2} + -4x - -24 = 0$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Complex roots of polynomials",
    "subtopicId": "fm.y1.pure.complex-quadratics",
    "questionDiagram": null,
    "id": "fm.y1.pure.complex-quadratics.q054",
    "tags": [
      "cubic",
      "conjugate-pair",
      "forming-equation"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "A cubic with real coefficients has roots $1$, $-1 + 2i$ and its conjugate. Find the equation.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "List all three roots",
          "workingLatex": "\\alpha = 1,\\; \\beta = -1 + 2i,\\; \\gamma = -1 - 2i",
          "explanation": "One real root and one conjugate pair.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Sum of roots",
          "workingLatex": "\\alpha + \\beta + \\gamma = 1 + 2(-1) = -1",
          "explanation": "The imaginary parts cancel in the sum.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Sum of pairwise products",
          "workingLatex": "\\alpha\\beta + \\beta\\gamma + \\gamma\\alpha = 1 \\cdot 2(-1) + 5 = 3",
          "explanation": "Use $\\beta\\gamma = |\\beta|^{2} = ${pairProd}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Product of roots",
          "workingLatex": "\\alpha\\beta\\gamma = 1 \\times 5 = 5",
          "explanation": "Multiply all three roots.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Vieta for cubic",
          "workingLatex": "x^{3} - S_{1}x^{2} + S_{2}x - S_{3} = 0",
          "explanation": "Monic cubic template with symmetric sums.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write equation",
          "workingLatex": "x^{3} - -1x^{2} + 3x - 5 = 0",
          "explanation": "Substitute the computed symmetric sums.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check real coefficients",
          "workingLatex": "\\text{All coefficients are real}",
          "explanation": "Conjugate pairs guarantee real coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "x^{3} - -1x^{2} + 3x - 5 = 0",
          "explanation": "Cubic with the given root structure.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conjugate pairs",
          "workingLatex": "a+bi,\\; a-bi",
          "explanation": "Non-real roots of real polynomials occur in conjugate pairs.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x^{3} - -1x^{2} + 3x - 5 = 0$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Complex roots of polynomials",
    "subtopicId": "fm.y1.pure.complex-quadratics",
    "questionDiagram": null,
    "id": "fm.y1.pure.complex-quadratics.q055",
    "tags": [
      "cubic",
      "conjugate-pair",
      "forming-equation"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "A cubic with real coefficients has roots $2$, $3 + i$ and its conjugate. Find the equation.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "List all three roots",
          "workingLatex": "\\alpha = 2,\\; \\beta = 3 + i,\\; \\gamma = 3 - i",
          "explanation": "One real root and one conjugate pair.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Sum of roots",
          "workingLatex": "\\alpha + \\beta + \\gamma = 2 + 2(3) = 8",
          "explanation": "The imaginary parts cancel in the sum.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Sum of pairwise products",
          "workingLatex": "\\alpha\\beta + \\beta\\gamma + \\gamma\\alpha = 2 \\cdot 2(3) + 10 = 22",
          "explanation": "Use $\\beta\\gamma = |\\beta|^{2} = ${pairProd}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Product of roots",
          "workingLatex": "\\alpha\\beta\\gamma = 2 \\times 10 = 20",
          "explanation": "Multiply all three roots.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Vieta for cubic",
          "workingLatex": "x^{3} - S_{1}x^{2} + S_{2}x - S_{3} = 0",
          "explanation": "Monic cubic template with symmetric sums.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write equation",
          "workingLatex": "x^{3} - 8x^{2} + 22x - 20 = 0",
          "explanation": "Substitute the computed symmetric sums.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check real coefficients",
          "workingLatex": "\\text{All coefficients are real}",
          "explanation": "Conjugate pairs guarantee real coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "x^{3} - 8x^{2} + 22x - 20 = 0",
          "explanation": "Cubic with the given root structure.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conjugate pairs",
          "workingLatex": "a+bi,\\; a-bi",
          "explanation": "Non-real roots of real polynomials occur in conjugate pairs.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x^{3} - 8x^{2} + 22x - 20 = 0$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Complex roots of polynomials",
    "subtopicId": "fm.y1.pure.complex-quadratics",
    "questionDiagram": null,
    "id": "fm.y1.pure.complex-quadratics.q056",
    "tags": [
      "cubic",
      "factor-theorem"
    ],
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "written",
    "questionText": "Given that $2 + i$ is a root of $x^{3} - 3x^{2} + 7x - 15 = 0$, find all three roots.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify conjugate root",
          "workingLatex": "\\text{If } 2 + i \\text{ is a root, so is } 2 - i",
          "explanation": "Real coefficients imply conjugate pairs.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Quadratic factor from conjugate pair",
          "workingLatex": "(x - (2 + i))(x - (2 - i)) = x^{2} - 4x + 5",
          "explanation": "Multiply the conjugate linear factors.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use sum of roots",
          "workingLatex": "\\alpha + \\beta + \\gamma = 3",
          "explanation": "From Vieta: sum of roots equals $-b/a$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Sum of conjugate pair",
          "workingLatex": "2 + 2 = 4",
          "explanation": "The two conjugate roots sum to $2a$ when $a+bi$ and $a-bi$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find real root",
          "workingLatex": "\\gamma = 3 - 4 = -1",
          "explanation": "Subtract the conjugate sum from the total sum.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify product",
          "workingLatex": "\\gamma \\times 5 = -5",
          "explanation": "Check against $-d/a = 15$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State all roots",
          "workingLatex": "x = -1,\\; 2 + i,\\; 2 - i",
          "explanation": "One real and one conjugate pair.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "x = -1,\\; 2 + i,\\; 2 - i",
          "explanation": "All three roots of the cubic.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conjugate pairs",
          "workingLatex": "a+bi,\\; a-bi",
          "explanation": "Non-real roots of real polynomials occur in conjugate pairs.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Discriminant",
          "workingLatex": "\\Delta < 0 \\Rightarrow \\text{complex roots}",
          "explanation": "Negative discriminant signals complex conjugate roots.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Real coefficients",
          "workingLatex": "\\text{Coefficients } \\in \\mathbb{R}",
          "explanation": "The conjugate-pair theorem applies to polynomials with real coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Quadratic factor",
          "workingLatex": "(x-(a+bi))(x-(a-bi)) = x^{2}-2ax+(a^{2}+b^{2})",
          "explanation": "A conjugate pair gives a real quadratic factor.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Vieta link",
          "workingLatex": "\\text{Symmetric sums are real}",
          "explanation": "Sums and products of conjugate pairs are real numbers.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = -1$, $x = 2 + i$ and $x = 2 - i$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Complex roots of polynomials",
    "subtopicId": "fm.y1.pure.complex-quadratics",
    "questionDiagram": null,
    "id": "fm.y1.pure.complex-quadratics.q057",
    "tags": [
      "cubic",
      "factor-theorem"
    ],
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "written",
    "questionText": "Given that $3 + 2i$ is a root of $x^{3} - 1x^{2} + 9x - 25 = 0$, find all three roots.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify conjugate root",
          "workingLatex": "\\text{If } 3 + 2i \\text{ is a root, so is } 3 - 2i",
          "explanation": "Real coefficients imply conjugate pairs.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Quadratic factor from conjugate pair",
          "workingLatex": "(x - (3 + 2i))(x - (3 - 2i)) = x^{2} - 6x + 13",
          "explanation": "Multiply the conjugate linear factors.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use sum of roots",
          "workingLatex": "\\alpha + \\beta + \\gamma = 1",
          "explanation": "From Vieta: sum of roots equals $-b/a$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Sum of conjugate pair",
          "workingLatex": "3 + 3 = 6",
          "explanation": "The two conjugate roots sum to $2a$ when $a+bi$ and $a-bi$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find real root",
          "workingLatex": "\\gamma = 1 - 6 = -5",
          "explanation": "Subtract the conjugate sum from the total sum.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify product",
          "workingLatex": "\\gamma \\times 13 = -65",
          "explanation": "Check against $-d/a = 25$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State all roots",
          "workingLatex": "x = -5,\\; 3 + 2i,\\; 3 - 2i",
          "explanation": "One real and one conjugate pair.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "x = -5,\\; 3 + 2i,\\; 3 - 2i",
          "explanation": "All three roots of the cubic.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conjugate pairs",
          "workingLatex": "a+bi,\\; a-bi",
          "explanation": "Non-real roots of real polynomials occur in conjugate pairs.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Discriminant",
          "workingLatex": "\\Delta < 0 \\Rightarrow \\text{complex roots}",
          "explanation": "Negative discriminant signals complex conjugate roots.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Real coefficients",
          "workingLatex": "\\text{Coefficients } \\in \\mathbb{R}",
          "explanation": "The conjugate-pair theorem applies to polynomials with real coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Quadratic factor",
          "workingLatex": "(x-(a+bi))(x-(a-bi)) = x^{2}-2ax+(a^{2}+b^{2})",
          "explanation": "A conjugate pair gives a real quadratic factor.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Vieta link",
          "workingLatex": "\\text{Symmetric sums are real}",
          "explanation": "Sums and products of conjugate pairs are real numbers.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = -5$, $x = 3 + 2i$ and $x = 3 - 2i$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Complex roots of polynomials",
    "subtopicId": "fm.y1.pure.complex-quadratics",
    "questionDiagram": null,
    "id": "fm.y1.pure.complex-quadratics.q058",
    "tags": [
      "cubic",
      "factor-theorem"
    ],
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "written",
    "questionText": "Given that $1 + 2i$ is a root of $x^{3} - 6x^{2} + 15x - 22 = 0$, find all three roots.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify conjugate root",
          "workingLatex": "\\text{If } 1 + 2i \\text{ is a root, so is } 1 - 2i",
          "explanation": "Real coefficients imply conjugate pairs.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Quadratic factor from conjugate pair",
          "workingLatex": "(x - (1 + 2i))(x - (1 - 2i)) = x^{2} - 2x + 5",
          "explanation": "Multiply the conjugate linear factors.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use sum of roots",
          "workingLatex": "\\alpha + \\beta + \\gamma = 6",
          "explanation": "From Vieta: sum of roots equals $-b/a$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Sum of conjugate pair",
          "workingLatex": "1 + 1 = 2",
          "explanation": "The two conjugate roots sum to $2a$ when $a+bi$ and $a-bi$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find real root",
          "workingLatex": "\\gamma = 6 - 2 = 4",
          "explanation": "Subtract the conjugate sum from the total sum.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify product",
          "workingLatex": "\\gamma \\times 5 = 20",
          "explanation": "Check against $-d/a = 22$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State all roots",
          "workingLatex": "x = 4,\\; 1 + 2i,\\; 1 - 2i",
          "explanation": "One real and one conjugate pair.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "x = 4,\\; 1 + 2i,\\; 1 - 2i",
          "explanation": "All three roots of the cubic.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conjugate pairs",
          "workingLatex": "a+bi,\\; a-bi",
          "explanation": "Non-real roots of real polynomials occur in conjugate pairs.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Discriminant",
          "workingLatex": "\\Delta < 0 \\Rightarrow \\text{complex roots}",
          "explanation": "Negative discriminant signals complex conjugate roots.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Real coefficients",
          "workingLatex": "\\text{Coefficients } \\in \\mathbb{R}",
          "explanation": "The conjugate-pair theorem applies to polynomials with real coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Quadratic factor",
          "workingLatex": "(x-(a+bi))(x-(a-bi)) = x^{2}-2ax+(a^{2}+b^{2})",
          "explanation": "A conjugate pair gives a real quadratic factor.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Vieta link",
          "workingLatex": "\\text{Symmetric sums are real}",
          "explanation": "Sums and products of conjugate pairs are real numbers.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = 4$, $x = 1 + 2i$ and $x = 1 - 2i$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Complex roots of polynomials",
    "subtopicId": "fm.y1.pure.complex-quadratics",
    "questionDiagram": null,
    "id": "fm.y1.pure.complex-quadratics.q059",
    "tags": [
      "cubic",
      "factor-theorem"
    ],
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "written",
    "questionText": "Given that $2 + i$ is a root of $x^{3} + 0x^{2} + 7x - 10 = 0$, find all three roots.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify conjugate root",
          "workingLatex": "\\text{If } 2 + i \\text{ is a root, so is } 2 - i",
          "explanation": "Real coefficients imply conjugate pairs.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Quadratic factor from conjugate pair",
          "workingLatex": "(x - (2 + i))(x - (2 - i)) = x^{2} - 4x + 5",
          "explanation": "Multiply the conjugate linear factors.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use sum of roots",
          "workingLatex": "\\alpha + \\beta + \\gamma = 0",
          "explanation": "From Vieta: sum of roots equals $-b/a$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Sum of conjugate pair",
          "workingLatex": "2 + 2 = 4",
          "explanation": "The two conjugate roots sum to $2a$ when $a+bi$ and $a-bi$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find real root",
          "workingLatex": "\\gamma = 0 - 4 = -4",
          "explanation": "Subtract the conjugate sum from the total sum.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify product",
          "workingLatex": "\\gamma \\times 5 = -20",
          "explanation": "Check against $-d/a = 10$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State all roots",
          "workingLatex": "x = -4,\\; 2 + i,\\; 2 - i",
          "explanation": "One real and one conjugate pair.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "x = -4,\\; 2 + i,\\; 2 - i",
          "explanation": "All three roots of the cubic.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conjugate pairs",
          "workingLatex": "a+bi,\\; a-bi",
          "explanation": "Non-real roots of real polynomials occur in conjugate pairs.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Discriminant",
          "workingLatex": "\\Delta < 0 \\Rightarrow \\text{complex roots}",
          "explanation": "Negative discriminant signals complex conjugate roots.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Real coefficients",
          "workingLatex": "\\text{Coefficients } \\in \\mathbb{R}",
          "explanation": "The conjugate-pair theorem applies to polynomials with real coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Quadratic factor",
          "workingLatex": "(x-(a+bi))(x-(a-bi)) = x^{2}-2ax+(a^{2}+b^{2})",
          "explanation": "A conjugate pair gives a real quadratic factor.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Vieta link",
          "workingLatex": "\\text{Symmetric sums are real}",
          "explanation": "Sums and products of conjugate pairs are real numbers.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = -4$, $x = 2 + i$ and $x = 2 - i$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Complex roots of polynomials",
    "subtopicId": "fm.y1.pure.complex-quadratics",
    "questionDiagram": null,
    "id": "fm.y1.pure.complex-quadratics.q060",
    "tags": [
      "cubic",
      "factor-theorem"
    ],
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "written",
    "questionText": "Given that $1 + i$ is a root of $x^{3} - 4x^{2} + 6x - 4 = 0$, find all three roots.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify conjugate root",
          "workingLatex": "\\text{If } 1 + i \\text{ is a root, so is } 1 - i",
          "explanation": "Real coefficients imply conjugate pairs.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Quadratic factor from conjugate pair",
          "workingLatex": "(x - (1 + i))(x - (1 - i)) = x^{2} - 2x + 2",
          "explanation": "Multiply the conjugate linear factors.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use sum of roots",
          "workingLatex": "\\alpha + \\beta + \\gamma = 4",
          "explanation": "From Vieta: sum of roots equals $-b/a$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Sum of conjugate pair",
          "workingLatex": "1 + 1 = 2",
          "explanation": "The two conjugate roots sum to $2a$ when $a+bi$ and $a-bi$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find real root",
          "workingLatex": "\\gamma = 4 - 2 = 2",
          "explanation": "Subtract the conjugate sum from the total sum.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify product",
          "workingLatex": "\\gamma \\times 2 = 4",
          "explanation": "Check against $-d/a = 4$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State all roots",
          "workingLatex": "x = 2,\\; 1 + i,\\; 1 - i",
          "explanation": "One real and one conjugate pair.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "x = 2,\\; 1 + i,\\; 1 - i",
          "explanation": "All three roots of the cubic.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conjugate pairs",
          "workingLatex": "a+bi,\\; a-bi",
          "explanation": "Non-real roots of real polynomials occur in conjugate pairs.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Discriminant",
          "workingLatex": "\\Delta < 0 \\Rightarrow \\text{complex roots}",
          "explanation": "Negative discriminant signals complex conjugate roots.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Real coefficients",
          "workingLatex": "\\text{Coefficients } \\in \\mathbb{R}",
          "explanation": "The conjugate-pair theorem applies to polynomials with real coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Quadratic factor",
          "workingLatex": "(x-(a+bi))(x-(a-bi)) = x^{2}-2ax+(a^{2}+b^{2})",
          "explanation": "A conjugate pair gives a real quadratic factor.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Vieta link",
          "workingLatex": "\\text{Symmetric sums are real}",
          "explanation": "Sums and products of conjugate pairs are real numbers.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = 2$, $x = 1 + i$ and $x = 1 - i$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Complex roots of polynomials",
    "subtopicId": "fm.y1.pure.complex-quadratics",
    "questionDiagram": null,
    "id": "fm.y1.pure.complex-quadratics.q061",
    "tags": [
      "cubic",
      "factor-theorem"
    ],
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "written",
    "questionText": "Given that $-1 + 2i$ is a root of $x^{3} + 2x^{2} + 5x + 4 = 0$, find all three roots.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify conjugate root",
          "workingLatex": "\\text{If } -1 + 2i \\text{ is a root, so is } -1 - 2i",
          "explanation": "Real coefficients imply conjugate pairs.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Quadratic factor from conjugate pair",
          "workingLatex": "(x - (-1 + 2i))(x - (-1 - 2i)) = x^{2} - -2x + 5",
          "explanation": "Multiply the conjugate linear factors.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use sum of roots",
          "workingLatex": "\\alpha + \\beta + \\gamma = -2",
          "explanation": "From Vieta: sum of roots equals $-b/a$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Sum of conjugate pair",
          "workingLatex": "-1 + -1 = -2",
          "explanation": "The two conjugate roots sum to $2a$ when $a+bi$ and $a-bi$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find real root",
          "workingLatex": "\\gamma = -2 - -2 = 0",
          "explanation": "Subtract the conjugate sum from the total sum.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify product",
          "workingLatex": "\\gamma \\times 5 = 0",
          "explanation": "Check against $-d/a = -4$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State all roots",
          "workingLatex": "x = 0,\\; -1 + 2i,\\; -1 - 2i",
          "explanation": "One real and one conjugate pair.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "x = 0,\\; -1 + 2i,\\; -1 - 2i",
          "explanation": "All three roots of the cubic.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conjugate pairs",
          "workingLatex": "a+bi,\\; a-bi",
          "explanation": "Non-real roots of real polynomials occur in conjugate pairs.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Discriminant",
          "workingLatex": "\\Delta < 0 \\Rightarrow \\text{complex roots}",
          "explanation": "Negative discriminant signals complex conjugate roots.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Real coefficients",
          "workingLatex": "\\text{Coefficients } \\in \\mathbb{R}",
          "explanation": "The conjugate-pair theorem applies to polynomials with real coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Quadratic factor",
          "workingLatex": "(x-(a+bi))(x-(a-bi)) = x^{2}-2ax+(a^{2}+b^{2})",
          "explanation": "A conjugate pair gives a real quadratic factor.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Vieta link",
          "workingLatex": "\\text{Symmetric sums are real}",
          "explanation": "Sums and products of conjugate pairs are real numbers.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = 0$, $x = -1 + 2i$ and $x = -1 - 2i$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Complex roots of polynomials",
    "subtopicId": "fm.y1.pure.complex-quadratics",
    "questionDiagram": null,
    "id": "fm.y1.pure.complex-quadratics.q062",
    "tags": [
      "cubic",
      "factor-theorem"
    ],
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "written",
    "questionText": "Given that $2 + 3i$ is a root of $x^{3} - 2x^{2} + 9x - 18 = 0$, find all three roots.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify conjugate root",
          "workingLatex": "\\text{If } 2 + 3i \\text{ is a root, so is } 2 - 3i",
          "explanation": "Real coefficients imply conjugate pairs.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Quadratic factor from conjugate pair",
          "workingLatex": "(x - (2 + 3i))(x - (2 - 3i)) = x^{2} - 4x + 13",
          "explanation": "Multiply the conjugate linear factors.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use sum of roots",
          "workingLatex": "\\alpha + \\beta + \\gamma = 2",
          "explanation": "From Vieta: sum of roots equals $-b/a$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Sum of conjugate pair",
          "workingLatex": "2 + 2 = 4",
          "explanation": "The two conjugate roots sum to $2a$ when $a+bi$ and $a-bi$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find real root",
          "workingLatex": "\\gamma = 2 - 4 = -2",
          "explanation": "Subtract the conjugate sum from the total sum.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify product",
          "workingLatex": "\\gamma \\times 13 = -26",
          "explanation": "Check against $-d/a = 18$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State all roots",
          "workingLatex": "x = -2,\\; 2 + 3i,\\; 2 - 3i",
          "explanation": "One real and one conjugate pair.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "x = -2,\\; 2 + 3i,\\; 2 - 3i",
          "explanation": "All three roots of the cubic.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conjugate pairs",
          "workingLatex": "a+bi,\\; a-bi",
          "explanation": "Non-real roots of real polynomials occur in conjugate pairs.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Discriminant",
          "workingLatex": "\\Delta < 0 \\Rightarrow \\text{complex roots}",
          "explanation": "Negative discriminant signals complex conjugate roots.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Real coefficients",
          "workingLatex": "\\text{Coefficients } \\in \\mathbb{R}",
          "explanation": "The conjugate-pair theorem applies to polynomials with real coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Quadratic factor",
          "workingLatex": "(x-(a+bi))(x-(a-bi)) = x^{2}-2ax+(a^{2}+b^{2})",
          "explanation": "A conjugate pair gives a real quadratic factor.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Vieta link",
          "workingLatex": "\\text{Symmetric sums are real}",
          "explanation": "Sums and products of conjugate pairs are real numbers.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = -2$, $x = 2 + 3i$ and $x = 2 - 3i$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Complex roots of polynomials",
    "subtopicId": "fm.y1.pure.complex-quadratics",
    "questionDiagram": null,
    "id": "fm.y1.pure.complex-quadratics.q063",
    "tags": [
      "quartic",
      "conjugate-pairs"
    ],
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "questionText": "A quartic with real coefficients has roots $1 + 2i$, $1 - 2i$, $2 + i$ and $2 - i$. Find the equation.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Four roots",
          "workingLatex": "\\alpha = 1 + 2i,\\; \\beta = 1 - 2i,\\; \\gamma = 2 + i,\\; \\delta = 2 - i",
          "explanation": "Two conjugate pairs from real coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Sum $S_1$",
          "workingLatex": "S_{1} = 2(1) + 2(2) = 6",
          "explanation": "Imaginary parts cancel.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Pair products",
          "workingLatex": "p_{1} = 5,\\; p_{2} = 5",
          "explanation": "Each conjugate pair multiplies to a real number.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Sum $S_2$",
          "workingLatex": "S_{2} = p_{1} + p_{2} + 2(1)(2) + 2(1)(2) = 18",
          "explanation": "Six pairwise products grouped by pair.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Sum $S_3$",
          "workingLatex": "S_{3} = 30",
          "explanation": "Four triple products.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Product $S_4$",
          "workingLatex": "S_{4} = p_{1} \\times p_{2} = 25",
          "explanation": "Product of all four roots.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Quartic equation",
          "workingLatex": "x^{4} - 6x^{3} + 18x^{2} - 30x + 25 = 0",
          "explanation": "Monic quartic from Vieta.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Real coefficients",
          "workingLatex": "\\text{All coefficients are real}",
          "explanation": "Two conjugate pairs ensure real coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "x^{4} - 6x^{3} + 18x^{2} - 30x + 25 = 0",
          "explanation": "Quartic with two conjugate pairs.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Conjugate pairs",
          "workingLatex": "a+bi,\\; a-bi",
          "explanation": "Non-real roots of real polynomials occur in conjugate pairs.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Discriminant",
          "workingLatex": "\\Delta < 0 \\Rightarrow \\text{complex roots}",
          "explanation": "Negative discriminant signals complex conjugate roots.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Real coefficients",
          "workingLatex": "\\text{Coefficients } \\in \\mathbb{R}",
          "explanation": "The conjugate-pair theorem applies to polynomials with real coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Quadratic factor",
          "workingLatex": "(x-(a+bi))(x-(a-bi)) = x^{2}-2ax+(a^{2}+b^{2})",
          "explanation": "A conjugate pair gives a real quadratic factor.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x^{4} - 6x^{3} + 18x^{2} - 30x + 25 = 0$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Complex roots of polynomials",
    "subtopicId": "fm.y1.pure.complex-quadratics",
    "questionDiagram": null,
    "id": "fm.y1.pure.complex-quadratics.q064",
    "tags": [
      "quartic",
      "conjugate-pairs"
    ],
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "questionText": "A quartic with real coefficients has roots $-1 + i$, $-1 - i$, $2 + 3i$ and $2 - 3i$. Find the equation.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Four roots",
          "workingLatex": "\\alpha = -1 + i,\\; \\beta = -1 - i,\\; \\gamma = 2 + 3i,\\; \\delta = 2 - 3i",
          "explanation": "Two conjugate pairs from real coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Sum $S_1$",
          "workingLatex": "S_{1} = 2(-1) + 2(2) = 2",
          "explanation": "Imaginary parts cancel.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Pair products",
          "workingLatex": "p_{1} = 2,\\; p_{2} = 13",
          "explanation": "Each conjugate pair multiplies to a real number.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Sum $S_2$",
          "workingLatex": "S_{2} = p_{1} + p_{2} + 2(-1)(2) + 2(-1)(2) = 7",
          "explanation": "Six pairwise products grouped by pair.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Sum $S_3$",
          "workingLatex": "S_{3} = -18",
          "explanation": "Four triple products.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Product $S_4$",
          "workingLatex": "S_{4} = p_{1} \\times p_{2} = 26",
          "explanation": "Product of all four roots.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Quartic equation",
          "workingLatex": "x^{4} - 2x^{3} + 7x^{2} - -18x + 26 = 0",
          "explanation": "Monic quartic from Vieta.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Real coefficients",
          "workingLatex": "\\text{All coefficients are real}",
          "explanation": "Two conjugate pairs ensure real coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "x^{4} - 2x^{3} + 7x^{2} - -18x + 26 = 0",
          "explanation": "Quartic with two conjugate pairs.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Conjugate pairs",
          "workingLatex": "a+bi,\\; a-bi",
          "explanation": "Non-real roots of real polynomials occur in conjugate pairs.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Discriminant",
          "workingLatex": "\\Delta < 0 \\Rightarrow \\text{complex roots}",
          "explanation": "Negative discriminant signals complex conjugate roots.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Real coefficients",
          "workingLatex": "\\text{Coefficients } \\in \\mathbb{R}",
          "explanation": "The conjugate-pair theorem applies to polynomials with real coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Quadratic factor",
          "workingLatex": "(x-(a+bi))(x-(a-bi)) = x^{2}-2ax+(a^{2}+b^{2})",
          "explanation": "A conjugate pair gives a real quadratic factor.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x^{4} - 2x^{3} + 7x^{2} - -18x + 26 = 0$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Complex roots of polynomials",
    "subtopicId": "fm.y1.pure.complex-quadratics",
    "questionDiagram": null,
    "id": "fm.y1.pure.complex-quadratics.q065",
    "tags": [
      "quartic",
      "conjugate-pairs"
    ],
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "questionText": "A quartic with real coefficients has roots $2 + i$, $2 - i$, $-1 + 2i$ and $-1 - 2i$. Find the equation.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Four roots",
          "workingLatex": "\\alpha = 2 + i,\\; \\beta = 2 - i,\\; \\gamma = -1 + 2i,\\; \\delta = -1 - 2i",
          "explanation": "Two conjugate pairs from real coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Sum $S_1$",
          "workingLatex": "S_{1} = 2(2) + 2(-1) = 2",
          "explanation": "Imaginary parts cancel.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Pair products",
          "workingLatex": "p_{1} = 5,\\; p_{2} = 5",
          "explanation": "Each conjugate pair multiplies to a real number.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Sum $S_2$",
          "workingLatex": "S_{2} = p_{1} + p_{2} + 2(2)(-1) + 2(2)(-1) = 2",
          "explanation": "Six pairwise products grouped by pair.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Sum $S_3$",
          "workingLatex": "S_{3} = 10",
          "explanation": "Four triple products.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Product $S_4$",
          "workingLatex": "S_{4} = p_{1} \\times p_{2} = 25",
          "explanation": "Product of all four roots.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Quartic equation",
          "workingLatex": "x^{4} - 2x^{3} + 2x^{2} - 10x + 25 = 0",
          "explanation": "Monic quartic from Vieta.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Real coefficients",
          "workingLatex": "\\text{All coefficients are real}",
          "explanation": "Two conjugate pairs ensure real coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "x^{4} - 2x^{3} + 2x^{2} - 10x + 25 = 0",
          "explanation": "Quartic with two conjugate pairs.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Conjugate pairs",
          "workingLatex": "a+bi,\\; a-bi",
          "explanation": "Non-real roots of real polynomials occur in conjugate pairs.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Discriminant",
          "workingLatex": "\\Delta < 0 \\Rightarrow \\text{complex roots}",
          "explanation": "Negative discriminant signals complex conjugate roots.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Real coefficients",
          "workingLatex": "\\text{Coefficients } \\in \\mathbb{R}",
          "explanation": "The conjugate-pair theorem applies to polynomials with real coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Quadratic factor",
          "workingLatex": "(x-(a+bi))(x-(a-bi)) = x^{2}-2ax+(a^{2}+b^{2})",
          "explanation": "A conjugate pair gives a real quadratic factor.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x^{4} - 2x^{3} + 2x^{2} - 10x + 25 = 0$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Complex roots of polynomials",
    "subtopicId": "fm.y1.pure.complex-quadratics",
    "questionDiagram": null,
    "id": "fm.y1.pure.complex-quadratics.q066",
    "tags": [
      "quartic",
      "conjugate-pairs"
    ],
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "questionText": "A quartic with real coefficients has roots $1 + 3i$, $1 - 3i$, $-2 + i$ and $-2 - i$. Find the equation.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Four roots",
          "workingLatex": "\\alpha = 1 + 3i,\\; \\beta = 1 - 3i,\\; \\gamma = -2 + i,\\; \\delta = -2 - i",
          "explanation": "Two conjugate pairs from real coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Sum $S_1$",
          "workingLatex": "S_{1} = 2(1) + 2(-2) = -2",
          "explanation": "Imaginary parts cancel.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Pair products",
          "workingLatex": "p_{1} = 10,\\; p_{2} = 5",
          "explanation": "Each conjugate pair multiplies to a real number.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Sum $S_2$",
          "workingLatex": "S_{2} = p_{1} + p_{2} + 2(1)(-2) + 2(1)(-2) = 7",
          "explanation": "Six pairwise products grouped by pair.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Sum $S_3$",
          "workingLatex": "S_{3} = -30",
          "explanation": "Four triple products.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Product $S_4$",
          "workingLatex": "S_{4} = p_{1} \\times p_{2} = 50",
          "explanation": "Product of all four roots.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Quartic equation",
          "workingLatex": "x^{4} - -2x^{3} + 7x^{2} - -30x + 50 = 0",
          "explanation": "Monic quartic from Vieta.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Real coefficients",
          "workingLatex": "\\text{All coefficients are real}",
          "explanation": "Two conjugate pairs ensure real coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "x^{4} - -2x^{3} + 7x^{2} - -30x + 50 = 0",
          "explanation": "Quartic with two conjugate pairs.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Conjugate pairs",
          "workingLatex": "a+bi,\\; a-bi",
          "explanation": "Non-real roots of real polynomials occur in conjugate pairs.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Discriminant",
          "workingLatex": "\\Delta < 0 \\Rightarrow \\text{complex roots}",
          "explanation": "Negative discriminant signals complex conjugate roots.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Real coefficients",
          "workingLatex": "\\text{Coefficients } \\in \\mathbb{R}",
          "explanation": "The conjugate-pair theorem applies to polynomials with real coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Quadratic factor",
          "workingLatex": "(x-(a+bi))(x-(a-bi)) = x^{2}-2ax+(a^{2}+b^{2})",
          "explanation": "A conjugate pair gives a real quadratic factor.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x^{4} - -2x^{3} + 7x^{2} - -30x + 50 = 0$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Complex roots of polynomials",
    "subtopicId": "fm.y1.pure.complex-quadratics",
    "questionDiagram": null,
    "id": "fm.y1.pure.complex-quadratics.q067",
    "tags": [
      "quartic",
      "conjugate-pairs"
    ],
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "questionText": "A quartic with real coefficients has roots $3 + i$, $3 - i$, $1 + i$ and $1 - i$. Find the equation.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Four roots",
          "workingLatex": "\\alpha = 3 + i,\\; \\beta = 3 - i,\\; \\gamma = 1 + i,\\; \\delta = 1 - i",
          "explanation": "Two conjugate pairs from real coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Sum $S_1$",
          "workingLatex": "S_{1} = 2(3) + 2(1) = 8",
          "explanation": "Imaginary parts cancel.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Pair products",
          "workingLatex": "p_{1} = 10,\\; p_{2} = 2",
          "explanation": "Each conjugate pair multiplies to a real number.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Sum $S_2$",
          "workingLatex": "S_{2} = p_{1} + p_{2} + 2(3)(1) + 2(3)(1) = 24",
          "explanation": "Six pairwise products grouped by pair.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Sum $S_3$",
          "workingLatex": "S_{3} = 32",
          "explanation": "Four triple products.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Product $S_4$",
          "workingLatex": "S_{4} = p_{1} \\times p_{2} = 20",
          "explanation": "Product of all four roots.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Quartic equation",
          "workingLatex": "x^{4} - 8x^{3} + 24x^{2} - 32x + 20 = 0",
          "explanation": "Monic quartic from Vieta.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Real coefficients",
          "workingLatex": "\\text{All coefficients are real}",
          "explanation": "Two conjugate pairs ensure real coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "x^{4} - 8x^{3} + 24x^{2} - 32x + 20 = 0",
          "explanation": "Quartic with two conjugate pairs.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Conjugate pairs",
          "workingLatex": "a+bi,\\; a-bi",
          "explanation": "Non-real roots of real polynomials occur in conjugate pairs.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Discriminant",
          "workingLatex": "\\Delta < 0 \\Rightarrow \\text{complex roots}",
          "explanation": "Negative discriminant signals complex conjugate roots.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Real coefficients",
          "workingLatex": "\\text{Coefficients } \\in \\mathbb{R}",
          "explanation": "The conjugate-pair theorem applies to polynomials with real coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Quadratic factor",
          "workingLatex": "(x-(a+bi))(x-(a-bi)) = x^{2}-2ax+(a^{2}+b^{2})",
          "explanation": "A conjugate pair gives a real quadratic factor.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x^{4} - 8x^{3} + 24x^{2} - 32x + 20 = 0$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Complex roots of polynomials",
    "subtopicId": "fm.y1.pure.complex-quadratics",
    "questionDiagram": null,
    "id": "fm.y1.pure.complex-quadratics.q068",
    "tags": [
      "multi-part",
      "quadratic",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "written",
    "questionText": "The quadratic $x^{2} + px + q = 0$ has roots $2 + 3i$ and $2 - 3i$. Find $p$ and $q$, then solve $x^{2} + px + (q + 1) = 0$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify conjugate pair",
          "workingLatex": "\\alpha = 2+3i,\\; \\beta = 2-3i",
          "explanation": "Given roots are conjugates as expected.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Sum of roots",
          "workingLatex": "\\alpha + \\beta = 4",
          "explanation": "Imaginary parts cancel.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Product of roots",
          "workingLatex": "\\alpha\\beta = 4 + 9 = 13",
          "explanation": "Multiply conjugates.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find $p$ and $q$",
          "workingLatex": "p = -4,\\; q = 13",
          "explanation": "From $x^{2} - (\\alpha+\\beta)x + \\alpha\\beta$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "New constant term",
          "workingLatex": "q + 1 = 14",
          "explanation": "Adjust the constant in the second equation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Discriminant of new equation",
          "workingLatex": "\\Delta = 16 - 56 = -40",
          "explanation": "Check nature of new roots.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve new quadratic",
          "workingLatex": "x = 2 \\pm i\\sqrt{10}",
          "explanation": "Apply quadratic formula.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "p = -4,\\; q = 13;\\; x = 2 \\pm i\\sqrt{10}",
          "explanation": "Complete multi-part solution.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify first equation",
          "workingLatex": "(2+3i)^{2} - 4(2+3i) + 13 = 0",
          "explanation": "Substitute a root to check.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Conjugate-pair link",
          "workingLatex": "\\text{Both new roots are also conjugates}",
          "explanation": "Real coefficients throughout.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Summary",
          "workingLatex": "p=-4,\\; q=13;\\; x=2\\pm i\\sqrt{10}",
          "explanation": "All parts answered.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Geometric view",
          "workingLatex": "\\text{Roots lie symmetrically about the real axis}",
          "explanation": "Conjugate pairs reflect in the real line.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Final",
          "workingLatex": "p=-4,\\; q=13;\\; x=2\\pm i\\sqrt{10}",
          "explanation": "Confirmed.",
          "diagram": null
        }
      ],
      "finalAnswer": "$p = -4$, $q = 13$; roots of the second equation are $x = 2 \\pm i\\sqrt{10}$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Complex roots of polynomials",
    "subtopicId": "fm.y1.pure.complex-quadratics",
    "questionDiagram": null,
    "id": "fm.y1.pure.complex-quadratics.q069",
    "tags": [
      "cubic",
      "multi-part",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "written",
    "questionText": "A cubic $x^{3} + ax^{2} + bx + c = 0$ has roots $1$, $2+i$ and $2-i$. Find $a$, $b$ and $c$, and verify that all coefficients are real.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "List roots",
          "workingLatex": "1,\\; 2+i,\\; 2-i",
          "explanation": "One real and one conjugate pair.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Sum",
          "workingLatex": "S_{1} = 1 + 4 = 5",
          "explanation": "Sum of roots equals $-a$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Pairwise sum",
          "workingLatex": "S_{2} = 1(4) + 5 = 9",
          "explanation": "Sum of pairwise products equals $b$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Product",
          "workingLatex": "S_{3} = 1 \\times 5 = 5",
          "explanation": "Product of roots equals $-c$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Coefficients",
          "workingLatex": "a = -5,\\; b = 9,\\; c = -5",
          "explanation": "Read from Vieta.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Equation",
          "workingLatex": "x^{3} - 5x^{2} + 9x - 5 = 0",
          "explanation": "Substitute coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify real",
          "workingLatex": "\\text{All coefficients are real}",
          "explanation": "Conjugate-pair structure ensures this.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Expand check",
          "workingLatex": "(x-1)(x^{2}-4x+5)",
          "explanation": "Factor as linear times irreducible quadratic.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "a=-5,\\; b=9,\\; c=-5",
          "explanation": "All coefficients found.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Irreducible quadratic",
          "workingLatex": "x^{2}-4x+5",
          "explanation": "Corresponds to conjugate pair $2\\pm i$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Discriminant of quadratic factor",
          "workingLatex": "\\Delta = -4",
          "explanation": "Confirms complex roots.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Summary",
          "workingLatex": "a=-5,\\; b=9,\\; c=-5",
          "explanation": "Complete.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Final",
          "workingLatex": "x^{3}-5x^{2}+9x-5=0",
          "explanation": "Verified cubic.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a = -5$, $b = 9$, $c = -5$. Equation: $x^{3} - 5x^{2} + 9x - 5 = 0$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Complex roots of polynomials",
    "subtopicId": "fm.y1.pure.complex-quadratics",
    "questionDiagram": null,
    "id": "fm.y1.pure.complex-quadratics.q070",
    "tags": [
      "proof",
      "cubic",
      "conjugate-pair",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "questionText": "Prove that a cubic with real coefficients has at least one real root. Hence explain why a cubic with only non-real roots cannot have real coefficients.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Complex roots come in pairs",
          "workingLatex": "\\text{Non-real roots occur as } a\\pm bi",
          "explanation": "Conjugate-pair theorem for real polynomials.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Count non-real roots",
          "workingLatex": "\\text{Non-real roots number 0, 2 or more (even)}",
          "explanation": "Each conjugate pair contributes two roots.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Cubic has three roots",
          "workingLatex": "\\text{Total roots (with multiplicity) is 3}",
          "explanation": "Fundamental theorem of algebra.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Parity argument",
          "workingLatex": "3 \\text{ is odd, so cannot be sum of only pairs}",
          "explanation": "An odd count cannot be made from even-sized conjugate pairs alone.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Conclusion",
          "workingLatex": "\\text{At least one real root exists}",
          "explanation": "The remaining root after pairing must be real.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Contrapositive",
          "workingLatex": "\\text{If all roots non-real, coefficients cannot all be real}",
          "explanation": "Would require an even number of roots.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Example",
          "workingLatex": "x^{3}+1 \\text{ has root } -1",
          "explanation": "Illustrates the real root.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "\\text{A cubic with real coefficients has at least one real root}",
          "explanation": "By conjugate-pair parity.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Application",
          "workingLatex": "\\text{When forming cubics from complex roots, include a real root or a conjugate pair}",
          "explanation": "Designing polynomials with real coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Link to syllabus",
          "workingLatex": "\\text{Explains why cubics with one complex root always have its conjugate}",
          "explanation": "Core FM reasoning.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Summary",
          "workingLatex": "\\text{Odd degree } \\Rightarrow \\text{ at least one real root}",
          "explanation": "Generalises beyond cubics.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Final statement",
          "workingLatex": "\\text{Real coefficients } \\Rightarrow \\text{ at least one real root for cubics}",
          "explanation": "Proved.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Complete",
          "workingLatex": "\\text{Conjugate-pair argument}",
          "explanation": "Done.",
          "diagram": null
        }
      ],
      "finalAnswer": "A cubic with real coefficients must have at least one real root, because non-real roots occur in conjugate pairs and three is odd."
    }
  }
];
