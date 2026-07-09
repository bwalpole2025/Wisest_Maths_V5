import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Further integration",
    "subtopicId": "fm.y2.pure.further-integration",
    "questionDiagram": null,
    "id": "fm.y2.pure.further-integration.q001",
    "tags": [
      "shifted-quadratic",
      "arctangent",
      "logarithm"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Find $\\displaystyle\\int \\frac{2x + 3}{(x)^{2} + 4}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the shifted variable",
          "workingLatex": "u = x",
          "explanation": "The denominator is built from a shifted square, so writing the numerator in terms of the same shift makes the standard integrals visible.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rewrite the numerator",
          "workingLatex": "2x + 3 = 2(x) + 3",
          "explanation": "Separating the numerator into a multiple of the derivative of the quadratic plus a constant creates a logarithm part and an arctangent part.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Split the integral",
          "workingLatex": "\\int \\frac{2x + 3}{(x)^{2} + 4}\\,dx = \\int \\frac{2(x)}{(x)^{2} + 4}\\,dx + \\int \\frac{3}{(x)^{2} + 4}\\,dx",
          "explanation": "Linearity lets us handle each standard form separately.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate the logarithm part",
          "workingLatex": "\\int \\frac{2(x)}{(x)^{2} + 4}\\,dx = \\ln((x)^{2} + 4)",
          "explanation": "The derivative of the quadratic denominator is twice the shifted linear factor.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate the arctangent part",
          "workingLatex": "\\int \\frac{3}{(x)^{2} + 4}\\,dx = \\frac{3}{2}\\arctan\\left(\\frac{x}{2}\\right)",
          "explanation": "A reciprocal quadratic of the form $1/(u^{2}+a^{2})$ integrates to an arctangent.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine the parts",
          "workingLatex": "\\ln((x)^{2} + 4) + \\frac{3}{2}\\arctan\\left(\\frac{x}{2}\\right) + C",
          "explanation": "The constant of integration is added after the separate antiderivatives are combined.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\ln((x)^{2} + 4) + \\frac{3}{2}\\arctan\\left(\\frac{x}{2}\\right) + C$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Further integration",
    "subtopicId": "fm.y2.pure.further-integration",
    "questionDiagram": null,
    "id": "fm.y2.pure.further-integration.q002",
    "tags": [
      "shifted-quadratic",
      "arctangent",
      "logarithm"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Find $\\displaystyle\\int \\frac{3x - 1}{(x - 1)^{2} + 9}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the shifted variable",
          "workingLatex": "u = x - 1",
          "explanation": "The denominator is built from a shifted square, so writing the numerator in terms of the same shift makes the standard integrals visible.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rewrite the numerator",
          "workingLatex": "3x - 1 = 3(x - 1) + 2",
          "explanation": "Separating the numerator into a multiple of the derivative of the quadratic plus a constant creates a logarithm part and an arctangent part.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Split the integral",
          "workingLatex": "\\int \\frac{3x - 1}{(x - 1)^{2} + 9}\\,dx = \\int \\frac{3(x - 1)}{(x - 1)^{2} + 9}\\,dx + \\int \\frac{2}{(x - 1)^{2} + 9}\\,dx",
          "explanation": "Linearity lets us handle each standard form separately.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate the logarithm part",
          "workingLatex": "\\int \\frac{3(x - 1)}{(x - 1)^{2} + 9}\\,dx = \\frac{3}{2}\\ln((x - 1)^{2} + 9)",
          "explanation": "The derivative of the quadratic denominator is twice the shifted linear factor.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate the arctangent part",
          "workingLatex": "\\int \\frac{2}{(x - 1)^{2} + 9}\\,dx = \\frac{2}{3}\\arctan\\left(\\frac{x - 1}{3}\\right)",
          "explanation": "A reciprocal quadratic of the form $1/(u^{2}+a^{2})$ integrates to an arctangent.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine the parts",
          "workingLatex": "\\frac{3}{2}\\ln((x - 1)^{2} + 9) + \\frac{2}{3}\\arctan\\left(\\frac{x - 1}{3}\\right) + C",
          "explanation": "The constant of integration is added after the separate antiderivatives are combined.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{3}{2}\\ln((x - 1)^{2} + 9) + \\frac{2}{3}\\arctan\\left(\\frac{x - 1}{3}\\right) + C$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Further integration",
    "subtopicId": "fm.y2.pure.further-integration",
    "questionDiagram": null,
    "id": "fm.y2.pure.further-integration.q003",
    "tags": [
      "shifted-quadratic",
      "arctangent",
      "logarithm"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Find $\\displaystyle\\int \\frac{x + 5}{(x + 1)^{2} + 4}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the shifted variable",
          "workingLatex": "u = x + 1",
          "explanation": "The denominator is built from a shifted square, so writing the numerator in terms of the same shift makes the standard integrals visible.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rewrite the numerator",
          "workingLatex": "x + 5 = 1(x + 1) + 4",
          "explanation": "Separating the numerator into a multiple of the derivative of the quadratic plus a constant creates a logarithm part and an arctangent part.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Split the integral",
          "workingLatex": "\\int \\frac{x + 5}{(x + 1)^{2} + 4}\\,dx = \\int \\frac{1(x + 1)}{(x + 1)^{2} + 4}\\,dx + \\int \\frac{4}{(x + 1)^{2} + 4}\\,dx",
          "explanation": "Linearity lets us handle each standard form separately.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate the logarithm part",
          "workingLatex": "\\int \\frac{1(x + 1)}{(x + 1)^{2} + 4}\\,dx = \\frac{1}{2}\\ln((x + 1)^{2} + 4)",
          "explanation": "The derivative of the quadratic denominator is twice the shifted linear factor.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate the arctangent part",
          "workingLatex": "\\int \\frac{4}{(x + 1)^{2} + 4}\\,dx = 2\\arctan\\left(\\frac{x + 1}{2}\\right)",
          "explanation": "A reciprocal quadratic of the form $1/(u^{2}+a^{2})$ integrates to an arctangent.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine the parts",
          "workingLatex": "\\frac{1}{2}\\ln((x + 1)^{2} + 4) + 2\\arctan\\left(\\frac{x + 1}{2}\\right) + C",
          "explanation": "The constant of integration is added after the separate antiderivatives are combined.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{1}{2}\\ln((x + 1)^{2} + 4) + 2\\arctan\\left(\\frac{x + 1}{2}\\right) + C$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Further integration",
    "subtopicId": "fm.y2.pure.further-integration",
    "questionDiagram": null,
    "id": "fm.y2.pure.further-integration.q004",
    "tags": [
      "shifted-quadratic",
      "arctangent",
      "logarithm"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Find $\\displaystyle\\int \\frac{4x + 2}{(x - 2)^{2} + 1}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the shifted variable",
          "workingLatex": "u = x - 2",
          "explanation": "The denominator is built from a shifted square, so writing the numerator in terms of the same shift makes the standard integrals visible.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rewrite the numerator",
          "workingLatex": "4x + 2 = 4(x - 2) + 10",
          "explanation": "Separating the numerator into a multiple of the derivative of the quadratic plus a constant creates a logarithm part and an arctangent part.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Split the integral",
          "workingLatex": "\\int \\frac{4x + 2}{(x - 2)^{2} + 1}\\,dx = \\int \\frac{4(x - 2)}{(x - 2)^{2} + 1}\\,dx + \\int \\frac{10}{(x - 2)^{2} + 1}\\,dx",
          "explanation": "Linearity lets us handle each standard form separately.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate the logarithm part",
          "workingLatex": "\\int \\frac{4(x - 2)}{(x - 2)^{2} + 1}\\,dx = 2\\ln((x - 2)^{2} + 1)",
          "explanation": "The derivative of the quadratic denominator is twice the shifted linear factor.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate the arctangent part",
          "workingLatex": "\\int \\frac{10}{(x - 2)^{2} + 1}\\,dx = 10\\arctan\\left(x - 2\\right)",
          "explanation": "A reciprocal quadratic of the form $1/(u^{2}+a^{2})$ integrates to an arctangent.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine the parts",
          "workingLatex": "2\\ln((x - 2)^{2} + 1) + 10\\arctan\\left(x - 2\\right) + C",
          "explanation": "The constant of integration is added after the separate antiderivatives are combined.",
          "diagram": null
        }
      ],
      "finalAnswer": "$2\\ln((x - 2)^{2} + 1) + 10\\arctan\\left(x - 2\\right) + C$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Further integration",
    "subtopicId": "fm.y2.pure.further-integration",
    "questionDiagram": null,
    "id": "fm.y2.pure.further-integration.q005",
    "tags": [
      "shifted-quadratic",
      "arctangent",
      "logarithm"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Find $\\displaystyle\\int \\frac{2x - 5}{(x + 2)^{2} + 16}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the shifted variable",
          "workingLatex": "u = x + 2",
          "explanation": "The denominator is built from a shifted square, so writing the numerator in terms of the same shift makes the standard integrals visible.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rewrite the numerator",
          "workingLatex": "2x - 5 = 2(x + 2) + -9",
          "explanation": "Separating the numerator into a multiple of the derivative of the quadratic plus a constant creates a logarithm part and an arctangent part.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Split the integral",
          "workingLatex": "\\int \\frac{2x - 5}{(x + 2)^{2} + 16}\\,dx = \\int \\frac{2(x + 2)}{(x + 2)^{2} + 16}\\,dx + \\int \\frac{-9}{(x + 2)^{2} + 16}\\,dx",
          "explanation": "Linearity lets us handle each standard form separately.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate the logarithm part",
          "workingLatex": "\\int \\frac{2(x + 2)}{(x + 2)^{2} + 16}\\,dx = \\ln((x + 2)^{2} + 16)",
          "explanation": "The derivative of the quadratic denominator is twice the shifted linear factor.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate the arctangent part",
          "workingLatex": "\\int \\frac{-9}{(x + 2)^{2} + 16}\\,dx = -\\frac{9}{4}\\arctan\\left(\\frac{x + 2}{4}\\right)",
          "explanation": "A reciprocal quadratic of the form $1/(u^{2}+a^{2})$ integrates to an arctangent.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine the parts",
          "workingLatex": "\\ln((x + 2)^{2} + 16) - \\frac{9}{4}\\arctan\\left(\\frac{x + 2}{4}\\right) + C",
          "explanation": "The constant of integration is added after the separate antiderivatives are combined.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\ln((x + 2)^{2} + 16) - \\frac{9}{4}\\arctan\\left(\\frac{x + 2}{4}\\right) + C$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Further integration",
    "subtopicId": "fm.y2.pure.further-integration",
    "questionDiagram": null,
    "id": "fm.y2.pure.further-integration.q006",
    "tags": [
      "shifted-quadratic",
      "arctangent",
      "logarithm"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Find $\\displaystyle\\int \\frac{5x + 1}{(x)^{2} + 9}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the shifted variable",
          "workingLatex": "u = x",
          "explanation": "The denominator is built from a shifted square, so writing the numerator in terms of the same shift makes the standard integrals visible.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rewrite the numerator",
          "workingLatex": "5x + 1 = 5(x) + 1",
          "explanation": "Separating the numerator into a multiple of the derivative of the quadratic plus a constant creates a logarithm part and an arctangent part.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Split the integral",
          "workingLatex": "\\int \\frac{5x + 1}{(x)^{2} + 9}\\,dx = \\int \\frac{5(x)}{(x)^{2} + 9}\\,dx + \\int \\frac{1}{(x)^{2} + 9}\\,dx",
          "explanation": "Linearity lets us handle each standard form separately.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate the logarithm part",
          "workingLatex": "\\int \\frac{5(x)}{(x)^{2} + 9}\\,dx = \\frac{5}{2}\\ln((x)^{2} + 9)",
          "explanation": "The derivative of the quadratic denominator is twice the shifted linear factor.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate the arctangent part",
          "workingLatex": "\\int \\frac{1}{(x)^{2} + 9}\\,dx = \\frac{1}{3}\\arctan\\left(\\frac{x}{3}\\right)",
          "explanation": "A reciprocal quadratic of the form $1/(u^{2}+a^{2})$ integrates to an arctangent.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine the parts",
          "workingLatex": "\\frac{5}{2}\\ln((x)^{2} + 9) + \\frac{1}{3}\\arctan\\left(\\frac{x}{3}\\right) + C",
          "explanation": "The constant of integration is added after the separate antiderivatives are combined.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{5}{2}\\ln((x)^{2} + 9) + \\frac{1}{3}\\arctan\\left(\\frac{x}{3}\\right) + C$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Further integration",
    "subtopicId": "fm.y2.pure.further-integration",
    "questionDiagram": null,
    "id": "fm.y2.pure.further-integration.q007",
    "tags": [
      "shifted-quadratic",
      "arctangent",
      "logarithm"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Find $\\displaystyle\\int \\frac{-2x + 7}{(x - 1)^{2} + 4}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the shifted variable",
          "workingLatex": "u = x - 1",
          "explanation": "The denominator is built from a shifted square, so writing the numerator in terms of the same shift makes the standard integrals visible.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rewrite the numerator",
          "workingLatex": "-2x + 7 = -2(x - 1) + 5",
          "explanation": "Separating the numerator into a multiple of the derivative of the quadratic plus a constant creates a logarithm part and an arctangent part.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Split the integral",
          "workingLatex": "\\int \\frac{-2x + 7}{(x - 1)^{2} + 4}\\,dx = \\int \\frac{-2(x - 1)}{(x - 1)^{2} + 4}\\,dx + \\int \\frac{5}{(x - 1)^{2} + 4}\\,dx",
          "explanation": "Linearity lets us handle each standard form separately.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate the logarithm part",
          "workingLatex": "\\int \\frac{-2(x - 1)}{(x - 1)^{2} + 4}\\,dx = -\\ln((x - 1)^{2} + 4)",
          "explanation": "The derivative of the quadratic denominator is twice the shifted linear factor.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate the arctangent part",
          "workingLatex": "\\int \\frac{5}{(x - 1)^{2} + 4}\\,dx = \\frac{5}{2}\\arctan\\left(\\frac{x - 1}{2}\\right)",
          "explanation": "A reciprocal quadratic of the form $1/(u^{2}+a^{2})$ integrates to an arctangent.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine the parts",
          "workingLatex": "-\\ln((x - 1)^{2} + 4) + \\frac{5}{2}\\arctan\\left(\\frac{x - 1}{2}\\right) + C",
          "explanation": "The constant of integration is added after the separate antiderivatives are combined.",
          "diagram": null
        }
      ],
      "finalAnswer": "$-\\ln((x - 1)^{2} + 4) + \\frac{5}{2}\\arctan\\left(\\frac{x - 1}{2}\\right) + C$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Further integration",
    "subtopicId": "fm.y2.pure.further-integration",
    "questionDiagram": null,
    "id": "fm.y2.pure.further-integration.q008",
    "tags": [
      "shifted-quadratic",
      "arctangent",
      "logarithm"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Find $\\displaystyle\\int \\frac{3x + 4}{(x + 1)^{2} + 25}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the shifted variable",
          "workingLatex": "u = x + 1",
          "explanation": "The denominator is built from a shifted square, so writing the numerator in terms of the same shift makes the standard integrals visible.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rewrite the numerator",
          "workingLatex": "3x + 4 = 3(x + 1) + 1",
          "explanation": "Separating the numerator into a multiple of the derivative of the quadratic plus a constant creates a logarithm part and an arctangent part.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Split the integral",
          "workingLatex": "\\int \\frac{3x + 4}{(x + 1)^{2} + 25}\\,dx = \\int \\frac{3(x + 1)}{(x + 1)^{2} + 25}\\,dx + \\int \\frac{1}{(x + 1)^{2} + 25}\\,dx",
          "explanation": "Linearity lets us handle each standard form separately.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate the logarithm part",
          "workingLatex": "\\int \\frac{3(x + 1)}{(x + 1)^{2} + 25}\\,dx = \\frac{3}{2}\\ln((x + 1)^{2} + 25)",
          "explanation": "The derivative of the quadratic denominator is twice the shifted linear factor.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate the arctangent part",
          "workingLatex": "\\int \\frac{1}{(x + 1)^{2} + 25}\\,dx = \\frac{1}{5}\\arctan\\left(\\frac{x + 1}{5}\\right)",
          "explanation": "A reciprocal quadratic of the form $1/(u^{2}+a^{2})$ integrates to an arctangent.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine the parts",
          "workingLatex": "\\frac{3}{2}\\ln((x + 1)^{2} + 25) + \\frac{1}{5}\\arctan\\left(\\frac{x + 1}{5}\\right) + C",
          "explanation": "The constant of integration is added after the separate antiderivatives are combined.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{3}{2}\\ln((x + 1)^{2} + 25) + \\frac{1}{5}\\arctan\\left(\\frac{x + 1}{5}\\right) + C$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Further integration",
    "subtopicId": "fm.y2.pure.further-integration",
    "questionDiagram": null,
    "id": "fm.y2.pure.further-integration.q009",
    "tags": [
      "shifted-quadratic",
      "arctangent",
      "logarithm"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Find $\\displaystyle\\int \\frac{x - 3}{(x - 3)^{2} + 1}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the shifted variable",
          "workingLatex": "u = x - 3",
          "explanation": "The denominator is built from a shifted square, so writing the numerator in terms of the same shift makes the standard integrals visible.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rewrite the numerator",
          "workingLatex": "x - 3 = 1(x - 3) + 0",
          "explanation": "Separating the numerator into a multiple of the derivative of the quadratic plus a constant creates a logarithm part and an arctangent part.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Split the integral",
          "workingLatex": "\\int \\frac{x - 3}{(x - 3)^{2} + 1}\\,dx = \\int \\frac{1(x - 3)}{(x - 3)^{2} + 1}\\,dx + \\int \\frac{0}{(x - 3)^{2} + 1}\\,dx",
          "explanation": "Linearity lets us handle each standard form separately.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate the logarithm part",
          "workingLatex": "\\int \\frac{1(x - 3)}{(x - 3)^{2} + 1}\\,dx = \\frac{1}{2}\\ln((x - 3)^{2} + 1)",
          "explanation": "The derivative of the quadratic denominator is twice the shifted linear factor.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate the arctangent part",
          "workingLatex": "\\int \\frac{0}{(x - 3)^{2} + 1}\\,dx = None",
          "explanation": "A reciprocal quadratic of the form $1/(u^{2}+a^{2})$ integrates to an arctangent.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine the parts",
          "workingLatex": "\\frac{1}{2}\\ln((x - 3)^{2} + 1) + C",
          "explanation": "The constant of integration is added after the separate antiderivatives are combined.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{1}{2}\\ln((x - 3)^{2} + 1) + C$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Further integration",
    "subtopicId": "fm.y2.pure.further-integration",
    "questionDiagram": null,
    "id": "fm.y2.pure.further-integration.q010",
    "tags": [
      "shifted-quadratic",
      "arctangent",
      "logarithm"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Find $\\displaystyle\\int \\frac{4x - 1}{(x + 3)^{2} + 4}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the shifted variable",
          "workingLatex": "u = x + 3",
          "explanation": "The denominator is built from a shifted square, so writing the numerator in terms of the same shift makes the standard integrals visible.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rewrite the numerator",
          "workingLatex": "4x - 1 = 4(x + 3) + -13",
          "explanation": "Separating the numerator into a multiple of the derivative of the quadratic plus a constant creates a logarithm part and an arctangent part.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Split the integral",
          "workingLatex": "\\int \\frac{4x - 1}{(x + 3)^{2} + 4}\\,dx = \\int \\frac{4(x + 3)}{(x + 3)^{2} + 4}\\,dx + \\int \\frac{-13}{(x + 3)^{2} + 4}\\,dx",
          "explanation": "Linearity lets us handle each standard form separately.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate the logarithm part",
          "workingLatex": "\\int \\frac{4(x + 3)}{(x + 3)^{2} + 4}\\,dx = 2\\ln((x + 3)^{2} + 4)",
          "explanation": "The derivative of the quadratic denominator is twice the shifted linear factor.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate the arctangent part",
          "workingLatex": "\\int \\frac{-13}{(x + 3)^{2} + 4}\\,dx = -\\frac{13}{2}\\arctan\\left(\\frac{x + 3}{2}\\right)",
          "explanation": "A reciprocal quadratic of the form $1/(u^{2}+a^{2})$ integrates to an arctangent.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine the parts",
          "workingLatex": "2\\ln((x + 3)^{2} + 4) - \\frac{13}{2}\\arctan\\left(\\frac{x + 3}{2}\\right) + C",
          "explanation": "The constant of integration is added after the separate antiderivatives are combined.",
          "diagram": null
        }
      ],
      "finalAnswer": "$2\\ln((x + 3)^{2} + 4) - \\frac{13}{2}\\arctan\\left(\\frac{x + 3}{2}\\right) + C$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Further integration",
    "subtopicId": "fm.y2.pure.further-integration",
    "questionDiagram": null,
    "id": "fm.y2.pure.further-integration.q011",
    "tags": [
      "shifted-quadratic",
      "arctangent",
      "logarithm"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Find $\\displaystyle\\int \\frac{2x + 6}{(x - 2)^{2} + 9}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the shifted variable",
          "workingLatex": "u = x - 2",
          "explanation": "The denominator is built from a shifted square, so writing the numerator in terms of the same shift makes the standard integrals visible.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rewrite the numerator",
          "workingLatex": "2x + 6 = 2(x - 2) + 10",
          "explanation": "Separating the numerator into a multiple of the derivative of the quadratic plus a constant creates a logarithm part and an arctangent part.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Split the integral",
          "workingLatex": "\\int \\frac{2x + 6}{(x - 2)^{2} + 9}\\,dx = \\int \\frac{2(x - 2)}{(x - 2)^{2} + 9}\\,dx + \\int \\frac{10}{(x - 2)^{2} + 9}\\,dx",
          "explanation": "Linearity lets us handle each standard form separately.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate the logarithm part",
          "workingLatex": "\\int \\frac{2(x - 2)}{(x - 2)^{2} + 9}\\,dx = \\ln((x - 2)^{2} + 9)",
          "explanation": "The derivative of the quadratic denominator is twice the shifted linear factor.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate the arctangent part",
          "workingLatex": "\\int \\frac{10}{(x - 2)^{2} + 9}\\,dx = \\frac{10}{3}\\arctan\\left(\\frac{x - 2}{3}\\right)",
          "explanation": "A reciprocal quadratic of the form $1/(u^{2}+a^{2})$ integrates to an arctangent.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine the parts",
          "workingLatex": "\\ln((x - 2)^{2} + 9) + \\frac{10}{3}\\arctan\\left(\\frac{x - 2}{3}\\right) + C",
          "explanation": "The constant of integration is added after the separate antiderivatives are combined.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\ln((x - 2)^{2} + 9) + \\frac{10}{3}\\arctan\\left(\\frac{x - 2}{3}\\right) + C$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Further integration",
    "subtopicId": "fm.y2.pure.further-integration",
    "questionDiagram": null,
    "id": "fm.y2.pure.further-integration.q012",
    "tags": [
      "shifted-quadratic",
      "arctangent",
      "logarithm"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Find $\\displaystyle\\int \\frac{-3x + 2}{(x - 1)^{2} + 16}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the shifted variable",
          "workingLatex": "u = x - 1",
          "explanation": "The denominator is built from a shifted square, so writing the numerator in terms of the same shift makes the standard integrals visible.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rewrite the numerator",
          "workingLatex": "-3x + 2 = -3(x - 1) + -1",
          "explanation": "Separating the numerator into a multiple of the derivative of the quadratic plus a constant creates a logarithm part and an arctangent part.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Split the integral",
          "workingLatex": "\\int \\frac{-3x + 2}{(x - 1)^{2} + 16}\\,dx = \\int \\frac{-3(x - 1)}{(x - 1)^{2} + 16}\\,dx + \\int \\frac{-1}{(x - 1)^{2} + 16}\\,dx",
          "explanation": "Linearity lets us handle each standard form separately.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate the logarithm part",
          "workingLatex": "\\int \\frac{-3(x - 1)}{(x - 1)^{2} + 16}\\,dx = -\\frac{3}{2}\\ln((x - 1)^{2} + 16)",
          "explanation": "The derivative of the quadratic denominator is twice the shifted linear factor.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate the arctangent part",
          "workingLatex": "\\int \\frac{-1}{(x - 1)^{2} + 16}\\,dx = -\\frac{1}{4}\\arctan\\left(\\frac{x - 1}{4}\\right)",
          "explanation": "A reciprocal quadratic of the form $1/(u^{2}+a^{2})$ integrates to an arctangent.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine the parts",
          "workingLatex": "-\\frac{3}{2}\\ln((x - 1)^{2} + 16) - \\frac{1}{4}\\arctan\\left(\\frac{x - 1}{4}\\right) + C",
          "explanation": "The constant of integration is added after the separate antiderivatives are combined.",
          "diagram": null
        }
      ],
      "finalAnswer": "$-\\frac{3}{2}\\ln((x - 1)^{2} + 16) - \\frac{1}{4}\\arctan\\left(\\frac{x - 1}{4}\\right) + C$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Further integration",
    "subtopicId": "fm.y2.pure.further-integration",
    "questionDiagram": null,
    "id": "fm.y2.pure.further-integration.q013",
    "tags": [
      "shifted-quadratic",
      "arctangent",
      "logarithm"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Find $\\displaystyle\\int \\frac{5x - 4}{(x + 1)^{2} + 4}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the shifted variable",
          "workingLatex": "u = x + 1",
          "explanation": "The denominator is built from a shifted square, so writing the numerator in terms of the same shift makes the standard integrals visible.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rewrite the numerator",
          "workingLatex": "5x - 4 = 5(x + 1) + -9",
          "explanation": "Separating the numerator into a multiple of the derivative of the quadratic plus a constant creates a logarithm part and an arctangent part.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Split the integral",
          "workingLatex": "\\int \\frac{5x - 4}{(x + 1)^{2} + 4}\\,dx = \\int \\frac{5(x + 1)}{(x + 1)^{2} + 4}\\,dx + \\int \\frac{-9}{(x + 1)^{2} + 4}\\,dx",
          "explanation": "Linearity lets us handle each standard form separately.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate the logarithm part",
          "workingLatex": "\\int \\frac{5(x + 1)}{(x + 1)^{2} + 4}\\,dx = \\frac{5}{2}\\ln((x + 1)^{2} + 4)",
          "explanation": "The derivative of the quadratic denominator is twice the shifted linear factor.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate the arctangent part",
          "workingLatex": "\\int \\frac{-9}{(x + 1)^{2} + 4}\\,dx = -\\frac{9}{2}\\arctan\\left(\\frac{x + 1}{2}\\right)",
          "explanation": "A reciprocal quadratic of the form $1/(u^{2}+a^{2})$ integrates to an arctangent.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine the parts",
          "workingLatex": "\\frac{5}{2}\\ln((x + 1)^{2} + 4) - \\frac{9}{2}\\arctan\\left(\\frac{x + 1}{2}\\right) + C",
          "explanation": "The constant of integration is added after the separate antiderivatives are combined.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{5}{2}\\ln((x + 1)^{2} + 4) - \\frac{9}{2}\\arctan\\left(\\frac{x + 1}{2}\\right) + C$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Further integration",
    "subtopicId": "fm.y2.pure.further-integration",
    "questionDiagram": null,
    "id": "fm.y2.pure.further-integration.q014",
    "tags": [
      "shifted-quadratic",
      "arctangent",
      "logarithm"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Find $\\displaystyle\\int \\frac{x + 2}{(x)^{2} + 25}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the shifted variable",
          "workingLatex": "u = x",
          "explanation": "The denominator is built from a shifted square, so writing the numerator in terms of the same shift makes the standard integrals visible.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rewrite the numerator",
          "workingLatex": "x + 2 = 1(x) + 2",
          "explanation": "Separating the numerator into a multiple of the derivative of the quadratic plus a constant creates a logarithm part and an arctangent part.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Split the integral",
          "workingLatex": "\\int \\frac{x + 2}{(x)^{2} + 25}\\,dx = \\int \\frac{1(x)}{(x)^{2} + 25}\\,dx + \\int \\frac{2}{(x)^{2} + 25}\\,dx",
          "explanation": "Linearity lets us handle each standard form separately.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate the logarithm part",
          "workingLatex": "\\int \\frac{1(x)}{(x)^{2} + 25}\\,dx = \\frac{1}{2}\\ln((x)^{2} + 25)",
          "explanation": "The derivative of the quadratic denominator is twice the shifted linear factor.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate the arctangent part",
          "workingLatex": "\\int \\frac{2}{(x)^{2} + 25}\\,dx = \\frac{2}{5}\\arctan\\left(\\frac{x}{5}\\right)",
          "explanation": "A reciprocal quadratic of the form $1/(u^{2}+a^{2})$ integrates to an arctangent.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine the parts",
          "workingLatex": "\\frac{1}{2}\\ln((x)^{2} + 25) + \\frac{2}{5}\\arctan\\left(\\frac{x}{5}\\right) + C",
          "explanation": "The constant of integration is added after the separate antiderivatives are combined.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{1}{2}\\ln((x)^{2} + 25) + \\frac{2}{5}\\arctan\\left(\\frac{x}{5}\\right) + C$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Further integration",
    "subtopicId": "fm.y2.pure.further-integration",
    "questionDiagram": null,
    "id": "fm.y2.pure.further-integration.q015",
    "tags": [
      "shifted-quadratic",
      "arctangent",
      "logarithm"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Find $\\displaystyle\\int \\frac{3x - 7}{(x + 2)^{2} + 9}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the shifted variable",
          "workingLatex": "u = x + 2",
          "explanation": "The denominator is built from a shifted square, so writing the numerator in terms of the same shift makes the standard integrals visible.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rewrite the numerator",
          "workingLatex": "3x - 7 = 3(x + 2) + -13",
          "explanation": "Separating the numerator into a multiple of the derivative of the quadratic plus a constant creates a logarithm part and an arctangent part.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Split the integral",
          "workingLatex": "\\int \\frac{3x - 7}{(x + 2)^{2} + 9}\\,dx = \\int \\frac{3(x + 2)}{(x + 2)^{2} + 9}\\,dx + \\int \\frac{-13}{(x + 2)^{2} + 9}\\,dx",
          "explanation": "Linearity lets us handle each standard form separately.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate the logarithm part",
          "workingLatex": "\\int \\frac{3(x + 2)}{(x + 2)^{2} + 9}\\,dx = \\frac{3}{2}\\ln((x + 2)^{2} + 9)",
          "explanation": "The derivative of the quadratic denominator is twice the shifted linear factor.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate the arctangent part",
          "workingLatex": "\\int \\frac{-13}{(x + 2)^{2} + 9}\\,dx = -\\frac{13}{3}\\arctan\\left(\\frac{x + 2}{3}\\right)",
          "explanation": "A reciprocal quadratic of the form $1/(u^{2}+a^{2})$ integrates to an arctangent.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine the parts",
          "workingLatex": "\\frac{3}{2}\\ln((x + 2)^{2} + 9) - \\frac{13}{3}\\arctan\\left(\\frac{x + 2}{3}\\right) + C",
          "explanation": "The constant of integration is added after the separate antiderivatives are combined.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{3}{2}\\ln((x + 2)^{2} + 9) - \\frac{13}{3}\\arctan\\left(\\frac{x + 2}{3}\\right) + C$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Further integration",
    "subtopicId": "fm.y2.pure.further-integration",
    "questionDiagram": null,
    "id": "fm.y2.pure.further-integration.q016",
    "tags": [
      "shifted-quadratic",
      "arctangent",
      "logarithm"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Find $\\displaystyle\\int \\frac{2x + 1}{(x - 1)^{2} + 1}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the shifted variable",
          "workingLatex": "u = x - 1",
          "explanation": "The denominator is built from a shifted square, so writing the numerator in terms of the same shift makes the standard integrals visible.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rewrite the numerator",
          "workingLatex": "2x + 1 = 2(x - 1) + 3",
          "explanation": "Separating the numerator into a multiple of the derivative of the quadratic plus a constant creates a logarithm part and an arctangent part.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Split the integral",
          "workingLatex": "\\int \\frac{2x + 1}{(x - 1)^{2} + 1}\\,dx = \\int \\frac{2(x - 1)}{(x - 1)^{2} + 1}\\,dx + \\int \\frac{3}{(x - 1)^{2} + 1}\\,dx",
          "explanation": "Linearity lets us handle each standard form separately.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate the logarithm part",
          "workingLatex": "\\int \\frac{2(x - 1)}{(x - 1)^{2} + 1}\\,dx = \\ln((x - 1)^{2} + 1)",
          "explanation": "The derivative of the quadratic denominator is twice the shifted linear factor.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate the arctangent part",
          "workingLatex": "\\int \\frac{3}{(x - 1)^{2} + 1}\\,dx = 3\\arctan\\left(x - 1\\right)",
          "explanation": "A reciprocal quadratic of the form $1/(u^{2}+a^{2})$ integrates to an arctangent.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine the parts",
          "workingLatex": "\\ln((x - 1)^{2} + 1) + 3\\arctan\\left(x - 1\\right) + C",
          "explanation": "The constant of integration is added after the separate antiderivatives are combined.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\ln((x - 1)^{2} + 1) + 3\\arctan\\left(x - 1\\right) + C$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Further integration",
    "subtopicId": "fm.y2.pure.further-integration",
    "questionDiagram": null,
    "id": "fm.y2.pure.further-integration.q017",
    "tags": [
      "shifted-quadratic",
      "arctangent",
      "logarithm"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Find $\\displaystyle\\int \\frac{-x + 6}{(x - 2)^{2} + 4}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the shifted variable",
          "workingLatex": "u = x - 2",
          "explanation": "The denominator is built from a shifted square, so writing the numerator in terms of the same shift makes the standard integrals visible.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rewrite the numerator",
          "workingLatex": "-x + 6 = -1(x - 2) + 4",
          "explanation": "Separating the numerator into a multiple of the derivative of the quadratic plus a constant creates a logarithm part and an arctangent part.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Split the integral",
          "workingLatex": "\\int \\frac{-x + 6}{(x - 2)^{2} + 4}\\,dx = \\int \\frac{-1(x - 2)}{(x - 2)^{2} + 4}\\,dx + \\int \\frac{4}{(x - 2)^{2} + 4}\\,dx",
          "explanation": "Linearity lets us handle each standard form separately.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate the logarithm part",
          "workingLatex": "\\int \\frac{-1(x - 2)}{(x - 2)^{2} + 4}\\,dx = -\\frac{1}{2}\\ln((x - 2)^{2} + 4)",
          "explanation": "The derivative of the quadratic denominator is twice the shifted linear factor.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate the arctangent part",
          "workingLatex": "\\int \\frac{4}{(x - 2)^{2} + 4}\\,dx = 2\\arctan\\left(\\frac{x - 2}{2}\\right)",
          "explanation": "A reciprocal quadratic of the form $1/(u^{2}+a^{2})$ integrates to an arctangent.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine the parts",
          "workingLatex": "-\\frac{1}{2}\\ln((x - 2)^{2} + 4) + 2\\arctan\\left(\\frac{x - 2}{2}\\right) + C",
          "explanation": "The constant of integration is added after the separate antiderivatives are combined.",
          "diagram": null
        }
      ],
      "finalAnswer": "$-\\frac{1}{2}\\ln((x - 2)^{2} + 4) + 2\\arctan\\left(\\frac{x - 2}{2}\\right) + C$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Further integration",
    "subtopicId": "fm.y2.pure.further-integration",
    "questionDiagram": null,
    "id": "fm.y2.pure.further-integration.q018",
    "tags": [
      "shifted-quadratic",
      "arctangent",
      "logarithm"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Find $\\displaystyle\\int \\frac{4x + 5}{(x + 1)^{2} + 16}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the shifted variable",
          "workingLatex": "u = x + 1",
          "explanation": "The denominator is built from a shifted square, so writing the numerator in terms of the same shift makes the standard integrals visible.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rewrite the numerator",
          "workingLatex": "4x + 5 = 4(x + 1) + 1",
          "explanation": "Separating the numerator into a multiple of the derivative of the quadratic plus a constant creates a logarithm part and an arctangent part.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Split the integral",
          "workingLatex": "\\int \\frac{4x + 5}{(x + 1)^{2} + 16}\\,dx = \\int \\frac{4(x + 1)}{(x + 1)^{2} + 16}\\,dx + \\int \\frac{1}{(x + 1)^{2} + 16}\\,dx",
          "explanation": "Linearity lets us handle each standard form separately.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate the logarithm part",
          "workingLatex": "\\int \\frac{4(x + 1)}{(x + 1)^{2} + 16}\\,dx = 2\\ln((x + 1)^{2} + 16)",
          "explanation": "The derivative of the quadratic denominator is twice the shifted linear factor.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate the arctangent part",
          "workingLatex": "\\int \\frac{1}{(x + 1)^{2} + 16}\\,dx = \\frac{1}{4}\\arctan\\left(\\frac{x + 1}{4}\\right)",
          "explanation": "A reciprocal quadratic of the form $1/(u^{2}+a^{2})$ integrates to an arctangent.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine the parts",
          "workingLatex": "2\\ln((x + 1)^{2} + 16) + \\frac{1}{4}\\arctan\\left(\\frac{x + 1}{4}\\right) + C",
          "explanation": "The constant of integration is added after the separate antiderivatives are combined.",
          "diagram": null
        }
      ],
      "finalAnswer": "$2\\ln((x + 1)^{2} + 16) + \\frac{1}{4}\\arctan\\left(\\frac{x + 1}{4}\\right) + C$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Further integration",
    "subtopicId": "fm.y2.pure.further-integration",
    "questionDiagram": null,
    "id": "fm.y2.pure.further-integration.q019",
    "tags": [
      "shifted-quadratic",
      "arctangent",
      "logarithm"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Find $\\displaystyle\\int \\frac{3x + 8}{(x + 2)^{2} + 4}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the shifted variable",
          "workingLatex": "u = x + 2",
          "explanation": "The denominator is built from a shifted square, so writing the numerator in terms of the same shift makes the standard integrals visible.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rewrite the numerator",
          "workingLatex": "3x + 8 = 3(x + 2) + 2",
          "explanation": "Separating the numerator into a multiple of the derivative of the quadratic plus a constant creates a logarithm part and an arctangent part.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Split the integral",
          "workingLatex": "\\int \\frac{3x + 8}{(x + 2)^{2} + 4}\\,dx = \\int \\frac{3(x + 2)}{(x + 2)^{2} + 4}\\,dx + \\int \\frac{2}{(x + 2)^{2} + 4}\\,dx",
          "explanation": "Linearity lets us handle each standard form separately.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate the logarithm part",
          "workingLatex": "\\int \\frac{3(x + 2)}{(x + 2)^{2} + 4}\\,dx = \\frac{3}{2}\\ln((x + 2)^{2} + 4)",
          "explanation": "The derivative of the quadratic denominator is twice the shifted linear factor.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate the arctangent part",
          "workingLatex": "\\int \\frac{2}{(x + 2)^{2} + 4}\\,dx = \\arctan\\left(\\frac{x + 2}{2}\\right)",
          "explanation": "A reciprocal quadratic of the form $1/(u^{2}+a^{2})$ integrates to an arctangent.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine the parts",
          "workingLatex": "\\frac{3}{2}\\ln((x + 2)^{2} + 4) + \\arctan\\left(\\frac{x + 2}{2}\\right) + C",
          "explanation": "The constant of integration is added after the separate antiderivatives are combined.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{3}{2}\\ln((x + 2)^{2} + 4) + \\arctan\\left(\\frac{x + 2}{2}\\right) + C$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Further integration",
    "subtopicId": "fm.y2.pure.further-integration",
    "questionDiagram": null,
    "id": "fm.y2.pure.further-integration.q020",
    "tags": [
      "shifted-quadratic",
      "arctangent",
      "logarithm"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Find $\\displaystyle\\int \\frac{2x - 1}{(x - 3)^{2} + 25}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the shifted variable",
          "workingLatex": "u = x - 3",
          "explanation": "The denominator is built from a shifted square, so writing the numerator in terms of the same shift makes the standard integrals visible.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rewrite the numerator",
          "workingLatex": "2x - 1 = 2(x - 3) + 5",
          "explanation": "Separating the numerator into a multiple of the derivative of the quadratic plus a constant creates a logarithm part and an arctangent part.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Split the integral",
          "workingLatex": "\\int \\frac{2x - 1}{(x - 3)^{2} + 25}\\,dx = \\int \\frac{2(x - 3)}{(x - 3)^{2} + 25}\\,dx + \\int \\frac{5}{(x - 3)^{2} + 25}\\,dx",
          "explanation": "Linearity lets us handle each standard form separately.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate the logarithm part",
          "workingLatex": "\\int \\frac{2(x - 3)}{(x - 3)^{2} + 25}\\,dx = \\ln((x - 3)^{2} + 25)",
          "explanation": "The derivative of the quadratic denominator is twice the shifted linear factor.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate the arctangent part",
          "workingLatex": "\\int \\frac{5}{(x - 3)^{2} + 25}\\,dx = \\arctan\\left(\\frac{x - 3}{5}\\right)",
          "explanation": "A reciprocal quadratic of the form $1/(u^{2}+a^{2})$ integrates to an arctangent.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine the parts",
          "workingLatex": "\\ln((x - 3)^{2} + 25) + \\arctan\\left(\\frac{x - 3}{5}\\right) + C",
          "explanation": "The constant of integration is added after the separate antiderivatives are combined.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\ln((x - 3)^{2} + 25) + \\arctan\\left(\\frac{x - 3}{5}\\right) + C$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Further integration",
    "subtopicId": "fm.y2.pure.further-integration",
    "questionDiagram": null,
    "id": "fm.y2.pure.further-integration.q021",
    "tags": [
      "shifted-quadratic",
      "arctangent",
      "logarithm"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Find $\\displaystyle\\int \\frac{6x + 1}{(x + 1)^{2} + 9}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the shifted variable",
          "workingLatex": "u = x + 1",
          "explanation": "The denominator is built from a shifted square, so writing the numerator in terms of the same shift makes the standard integrals visible.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rewrite the numerator",
          "workingLatex": "6x + 1 = 6(x + 1) + -5",
          "explanation": "Separating the numerator into a multiple of the derivative of the quadratic plus a constant creates a logarithm part and an arctangent part.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Split the integral",
          "workingLatex": "\\int \\frac{6x + 1}{(x + 1)^{2} + 9}\\,dx = \\int \\frac{6(x + 1)}{(x + 1)^{2} + 9}\\,dx + \\int \\frac{-5}{(x + 1)^{2} + 9}\\,dx",
          "explanation": "Linearity lets us handle each standard form separately.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate the logarithm part",
          "workingLatex": "\\int \\frac{6(x + 1)}{(x + 1)^{2} + 9}\\,dx = 3\\ln((x + 1)^{2} + 9)",
          "explanation": "The derivative of the quadratic denominator is twice the shifted linear factor.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate the arctangent part",
          "workingLatex": "\\int \\frac{-5}{(x + 1)^{2} + 9}\\,dx = -\\frac{5}{3}\\arctan\\left(\\frac{x + 1}{3}\\right)",
          "explanation": "A reciprocal quadratic of the form $1/(u^{2}+a^{2})$ integrates to an arctangent.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine the parts",
          "workingLatex": "3\\ln((x + 1)^{2} + 9) - \\frac{5}{3}\\arctan\\left(\\frac{x + 1}{3}\\right) + C",
          "explanation": "The constant of integration is added after the separate antiderivatives are combined.",
          "diagram": null
        }
      ],
      "finalAnswer": "$3\\ln((x + 1)^{2} + 9) - \\frac{5}{3}\\arctan\\left(\\frac{x + 1}{3}\\right) + C$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Further integration",
    "subtopicId": "fm.y2.pure.further-integration",
    "questionDiagram": null,
    "id": "fm.y2.pure.further-integration.q022",
    "tags": [
      "shifted-quadratic",
      "arctangent",
      "logarithm"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Find $\\displaystyle\\int \\frac{x - 2}{(x - 2)^{2} + 16}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the shifted variable",
          "workingLatex": "u = x - 2",
          "explanation": "The denominator is built from a shifted square, so writing the numerator in terms of the same shift makes the standard integrals visible.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rewrite the numerator",
          "workingLatex": "x - 2 = 1(x - 2) + 0",
          "explanation": "Separating the numerator into a multiple of the derivative of the quadratic plus a constant creates a logarithm part and an arctangent part.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Split the integral",
          "workingLatex": "\\int \\frac{x - 2}{(x - 2)^{2} + 16}\\,dx = \\int \\frac{1(x - 2)}{(x - 2)^{2} + 16}\\,dx + \\int \\frac{0}{(x - 2)^{2} + 16}\\,dx",
          "explanation": "Linearity lets us handle each standard form separately.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate the logarithm part",
          "workingLatex": "\\int \\frac{1(x - 2)}{(x - 2)^{2} + 16}\\,dx = \\frac{1}{2}\\ln((x - 2)^{2} + 16)",
          "explanation": "The derivative of the quadratic denominator is twice the shifted linear factor.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate the arctangent part",
          "workingLatex": "\\int \\frac{0}{(x - 2)^{2} + 16}\\,dx = None",
          "explanation": "A reciprocal quadratic of the form $1/(u^{2}+a^{2})$ integrates to an arctangent.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine the parts",
          "workingLatex": "\\frac{1}{2}\\ln((x - 2)^{2} + 16) + C",
          "explanation": "The constant of integration is added after the separate antiderivatives are combined.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{1}{2}\\ln((x - 2)^{2} + 16) + C$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Further integration",
    "subtopicId": "fm.y2.pure.further-integration",
    "questionDiagram": null,
    "id": "fm.y2.pure.further-integration.q023",
    "tags": [
      "shifted-quadratic",
      "arctangent",
      "logarithm"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Find $\\displaystyle\\int \\frac{5x + 3}{(x + 2)^{2} + 1}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the shifted variable",
          "workingLatex": "u = x + 2",
          "explanation": "The denominator is built from a shifted square, so writing the numerator in terms of the same shift makes the standard integrals visible.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rewrite the numerator",
          "workingLatex": "5x + 3 = 5(x + 2) + -7",
          "explanation": "Separating the numerator into a multiple of the derivative of the quadratic plus a constant creates a logarithm part and an arctangent part.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Split the integral",
          "workingLatex": "\\int \\frac{5x + 3}{(x + 2)^{2} + 1}\\,dx = \\int \\frac{5(x + 2)}{(x + 2)^{2} + 1}\\,dx + \\int \\frac{-7}{(x + 2)^{2} + 1}\\,dx",
          "explanation": "Linearity lets us handle each standard form separately.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate the logarithm part",
          "workingLatex": "\\int \\frac{5(x + 2)}{(x + 2)^{2} + 1}\\,dx = \\frac{5}{2}\\ln((x + 2)^{2} + 1)",
          "explanation": "The derivative of the quadratic denominator is twice the shifted linear factor.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate the arctangent part",
          "workingLatex": "\\int \\frac{-7}{(x + 2)^{2} + 1}\\,dx = -7\\arctan\\left(x + 2\\right)",
          "explanation": "A reciprocal quadratic of the form $1/(u^{2}+a^{2})$ integrates to an arctangent.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine the parts",
          "workingLatex": "\\frac{5}{2}\\ln((x + 2)^{2} + 1) - 7\\arctan\\left(x + 2\\right) + C",
          "explanation": "The constant of integration is added after the separate antiderivatives are combined.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{5}{2}\\ln((x + 2)^{2} + 1) - 7\\arctan\\left(x + 2\\right) + C$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Further integration",
    "subtopicId": "fm.y2.pure.further-integration",
    "questionDiagram": null,
    "id": "fm.y2.pure.further-integration.q024",
    "tags": [
      "shifted-quadratic",
      "arctangent",
      "logarithm"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Find $\\displaystyle\\int \\frac{-2x - 3}{(x)^{2} + 9}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the shifted variable",
          "workingLatex": "u = x",
          "explanation": "The denominator is built from a shifted square, so writing the numerator in terms of the same shift makes the standard integrals visible.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rewrite the numerator",
          "workingLatex": "-2x - 3 = -2(x) + -3",
          "explanation": "Separating the numerator into a multiple of the derivative of the quadratic plus a constant creates a logarithm part and an arctangent part.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Split the integral",
          "workingLatex": "\\int \\frac{-2x - 3}{(x)^{2} + 9}\\,dx = \\int \\frac{-2(x)}{(x)^{2} + 9}\\,dx + \\int \\frac{-3}{(x)^{2} + 9}\\,dx",
          "explanation": "Linearity lets us handle each standard form separately.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate the logarithm part",
          "workingLatex": "\\int \\frac{-2(x)}{(x)^{2} + 9}\\,dx = -\\ln((x)^{2} + 9)",
          "explanation": "The derivative of the quadratic denominator is twice the shifted linear factor.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate the arctangent part",
          "workingLatex": "\\int \\frac{-3}{(x)^{2} + 9}\\,dx = -\\arctan\\left(\\frac{x}{3}\\right)",
          "explanation": "A reciprocal quadratic of the form $1/(u^{2}+a^{2})$ integrates to an arctangent.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine the parts",
          "workingLatex": "-\\ln((x)^{2} + 9) - \\arctan\\left(\\frac{x}{3}\\right) + C",
          "explanation": "The constant of integration is added after the separate antiderivatives are combined.",
          "diagram": null
        }
      ],
      "finalAnswer": "$-\\ln((x)^{2} + 9) - \\arctan\\left(\\frac{x}{3}\\right) + C$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Further integration",
    "subtopicId": "fm.y2.pure.further-integration",
    "questionDiagram": null,
    "id": "fm.y2.pure.further-integration.q025",
    "tags": [
      "partial-fractions",
      "quadratic-factor",
      "arctangent"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Use partial fractions to find $\\displaystyle\\int \\frac{2x^{2} + x + 2}{(x - 1)(x^{2} + 4)}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up partial fractions",
          "workingLatex": "\\frac{2x^{2} + x + 2}{(x - 1)(x^{2} + 4)} = \\frac{A}{x - 1} + \\frac{Bx + C}{x^{2} + 4}",
          "explanation": "A linear factor gives a constant numerator, while an irreducible quadratic needs a linear numerator.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Clear denominators",
          "workingLatex": "2x^{2} + x + 2 = A(x^{2} + 4) + (Bx+C)(x - 1)",
          "explanation": "Multiplying through turns the identity into a polynomial comparison.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare coefficients",
          "workingLatex": "2x^{2} + x + 2 = (2)x^{2} + (1)x + (2)",
          "explanation": "Matching powers of $x$ determines the unknown constants.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for the constants",
          "workingLatex": "A=1,\\quad B=1,\\quad C=2",
          "explanation": "These values make the numerator identity true for every $x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rewrite the integrand",
          "workingLatex": "\\frac{2x^{2} + x + 2}{(x - 1)(x^{2} + 4)} = \\frac{1}{x - 1} + \\frac{x + 2}{x^{2} + 4}",
          "explanation": "The integral is now a sum of standard simpler integrals.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Integrate the linear-factor term",
          "workingLatex": "\\int \\frac{1}{x - 1}\\,dx = \\ln|x - 1|",
          "explanation": "The integral of $1/(x-p)$ is a logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Split the quadratic numerator",
          "workingLatex": "\\int \\frac{x + 2}{x^{2} + 4}\\,dx = \\int \\frac{1x}{x^{2} + 4}\\,dx + \\int \\frac{2}{x^{2} + 4}\\,dx",
          "explanation": "The $x$ term produces a logarithm and the constant term produces an arctangent.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Integrate the quadratic terms",
          "workingLatex": "\\int \\frac{x + 2}{x^{2} + 4}\\,dx = \\frac{1}{2}\\ln(x^{2} + 4) + \\arctan\\left(\\frac{x}{2}\\right)",
          "explanation": "These are the standard results for $x/(x^2+a^2)$ and $1/(x^2+a^2)$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Combine the antiderivative",
          "workingLatex": "\\ln|x - 1| + \\frac{1}{2}\\ln(x^{2} + 4) + \\arctan\\left(\\frac{x}{2}\\right) + C",
          "explanation": "Adding the three contributions gives the required indefinite integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\ln|x - 1| + \\frac{1}{2}\\ln(x^{2} + 4) + \\arctan\\left(\\frac{x}{2}\\right) + C$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Further integration",
    "subtopicId": "fm.y2.pure.further-integration",
    "questionDiagram": null,
    "id": "fm.y2.pure.further-integration.q026",
    "tags": [
      "partial-fractions",
      "quadratic-factor",
      "arctangent"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Use partial fractions to find $\\displaystyle\\int \\frac{5x^{2} - 9x + 24}{(x - 2)(x^{2} + 9)}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up partial fractions",
          "workingLatex": "\\frac{5x^{2} - 9x + 24}{(x - 2)(x^{2} + 9)} = \\frac{A}{x - 2} + \\frac{Bx + C}{x^{2} + 9}",
          "explanation": "A linear factor gives a constant numerator, while an irreducible quadratic needs a linear numerator.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Clear denominators",
          "workingLatex": "5x^{2} - 9x + 24 = A(x^{2} + 9) + (Bx+C)(x - 2)",
          "explanation": "Multiplying through turns the identity into a polynomial comparison.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare coefficients",
          "workingLatex": "5x^{2} - 9x + 24 = (5)x^{2} + (-9)x + (24)",
          "explanation": "Matching powers of $x$ determines the unknown constants.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for the constants",
          "workingLatex": "A=2,\\quad B=3,\\quad C=-3",
          "explanation": "These values make the numerator identity true for every $x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rewrite the integrand",
          "workingLatex": "\\frac{5x^{2} - 9x + 24}{(x - 2)(x^{2} + 9)} = \\frac{2}{x - 2} + \\frac{3x - 3}{x^{2} + 9}",
          "explanation": "The integral is now a sum of standard simpler integrals.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Integrate the linear-factor term",
          "workingLatex": "\\int \\frac{2}{x - 2}\\,dx = 2\\ln|x - 2|",
          "explanation": "The integral of $1/(x-p)$ is a logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Split the quadratic numerator",
          "workingLatex": "\\int \\frac{3x - 3}{x^{2} + 9}\\,dx = \\int \\frac{3x}{x^{2} + 9}\\,dx + \\int \\frac{-3}{x^{2} + 9}\\,dx",
          "explanation": "The $x$ term produces a logarithm and the constant term produces an arctangent.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Integrate the quadratic terms",
          "workingLatex": "\\int \\frac{3x - 3}{x^{2} + 9}\\,dx = \\frac{3}{2}\\ln(x^{2} + 9) - \\arctan\\left(\\frac{x}{3}\\right)",
          "explanation": "These are the standard results for $x/(x^2+a^2)$ and $1/(x^2+a^2)$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Combine the antiderivative",
          "workingLatex": "2\\ln|x - 2| + \\frac{3}{2}\\ln(x^{2} + 9) - \\arctan\\left(\\frac{x}{3}\\right) + C",
          "explanation": "Adding the three contributions gives the required indefinite integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$2\\ln|x - 2| + \\frac{3}{2}\\ln(x^{2} + 9) - \\arctan\\left(\\frac{x}{3}\\right) + C$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Further integration",
    "subtopicId": "fm.y2.pure.further-integration",
    "questionDiagram": null,
    "id": "fm.y2.pure.further-integration.q027",
    "tags": [
      "partial-fractions",
      "quadratic-factor",
      "arctangent"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Use partial fractions to find $\\displaystyle\\int \\frac{x^{2} - 4x - 22}{(x - 3)(x^{2} + 16)}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up partial fractions",
          "workingLatex": "\\frac{x^{2} - 4x - 22}{(x - 3)(x^{2} + 16)} = \\frac{A}{x - 3} + \\frac{Bx + C}{x^{2} + 16}",
          "explanation": "A linear factor gives a constant numerator, while an irreducible quadratic needs a linear numerator.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Clear denominators",
          "workingLatex": "x^{2} - 4x - 22 = A(x^{2} + 16) + (Bx+C)(x - 3)",
          "explanation": "Multiplying through turns the identity into a polynomial comparison.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare coefficients",
          "workingLatex": "x^{2} - 4x - 22 = (1)x^{2} + (-4)x + (-22)",
          "explanation": "Matching powers of $x$ determines the unknown constants.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for the constants",
          "workingLatex": "A=-1,\\quad B=2,\\quad C=2",
          "explanation": "These values make the numerator identity true for every $x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rewrite the integrand",
          "workingLatex": "\\frac{x^{2} - 4x - 22}{(x - 3)(x^{2} + 16)} = \\frac{-1}{x - 3} + \\frac{2x + 2}{x^{2} + 16}",
          "explanation": "The integral is now a sum of standard simpler integrals.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Integrate the linear-factor term",
          "workingLatex": "\\int \\frac{-1}{x - 3}\\,dx = -\\ln|x - 3|",
          "explanation": "The integral of $1/(x-p)$ is a logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Split the quadratic numerator",
          "workingLatex": "\\int \\frac{2x + 2}{x^{2} + 16}\\,dx = \\int \\frac{2x}{x^{2} + 16}\\,dx + \\int \\frac{2}{x^{2} + 16}\\,dx",
          "explanation": "The $x$ term produces a logarithm and the constant term produces an arctangent.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Integrate the quadratic terms",
          "workingLatex": "\\int \\frac{2x + 2}{x^{2} + 16}\\,dx = \\ln(x^{2} + 16) + \\frac{1}{2}\\arctan\\left(\\frac{x}{4}\\right)",
          "explanation": "These are the standard results for $x/(x^2+a^2)$ and $1/(x^2+a^2)$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Combine the antiderivative",
          "workingLatex": "-\\ln|x - 3| + \\ln(x^{2} + 16) + \\frac{1}{2}\\arctan\\left(\\frac{x}{4}\\right) + C",
          "explanation": "Adding the three contributions gives the required indefinite integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$-\\ln|x - 3| + \\ln(x^{2} + 16) + \\frac{1}{2}\\arctan\\left(\\frac{x}{4}\\right) + C$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Further integration",
    "subtopicId": "fm.y2.pure.further-integration",
    "questionDiagram": null,
    "id": "fm.y2.pure.further-integration.q028",
    "tags": [
      "partial-fractions",
      "quadratic-factor",
      "arctangent"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Use partial fractions to find $\\displaystyle\\int \\frac{x^{2} - 5x + 72}{(x + 1)(x^{2} + 25)}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up partial fractions",
          "workingLatex": "\\frac{x^{2} - 5x + 72}{(x + 1)(x^{2} + 25)} = \\frac{A}{x + 1} + \\frac{Bx + C}{x^{2} + 25}",
          "explanation": "A linear factor gives a constant numerator, while an irreducible quadratic needs a linear numerator.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Clear denominators",
          "workingLatex": "x^{2} - 5x + 72 = A(x^{2} + 25) + (Bx+C)(x + 1)",
          "explanation": "Multiplying through turns the identity into a polynomial comparison.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare coefficients",
          "workingLatex": "x^{2} - 5x + 72 = (1)x^{2} + (-5)x + (72)",
          "explanation": "Matching powers of $x$ determines the unknown constants.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for the constants",
          "workingLatex": "A=3,\\quad B=-2,\\quad C=-3",
          "explanation": "These values make the numerator identity true for every $x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rewrite the integrand",
          "workingLatex": "\\frac{x^{2} - 5x + 72}{(x + 1)(x^{2} + 25)} = \\frac{3}{x + 1} + \\frac{-2x - 3}{x^{2} + 25}",
          "explanation": "The integral is now a sum of standard simpler integrals.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Integrate the linear-factor term",
          "workingLatex": "\\int \\frac{3}{x + 1}\\,dx = 3\\ln|x + 1|",
          "explanation": "The integral of $1/(x-p)$ is a logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Split the quadratic numerator",
          "workingLatex": "\\int \\frac{-2x - 3}{x^{2} + 25}\\,dx = \\int \\frac{-2x}{x^{2} + 25}\\,dx + \\int \\frac{-3}{x^{2} + 25}\\,dx",
          "explanation": "The $x$ term produces a logarithm and the constant term produces an arctangent.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Integrate the quadratic terms",
          "workingLatex": "\\int \\frac{-2x - 3}{x^{2} + 25}\\,dx = -\\ln(x^{2} + 25) - \\frac{3}{5}\\arctan\\left(\\frac{x}{5}\\right)",
          "explanation": "These are the standard results for $x/(x^2+a^2)$ and $1/(x^2+a^2)$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Combine the antiderivative",
          "workingLatex": "3\\ln|x + 1| - \\ln(x^{2} + 25) - \\frac{3}{5}\\arctan\\left(\\frac{x}{5}\\right) + C",
          "explanation": "Adding the three contributions gives the required indefinite integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$3\\ln|x + 1| - \\ln(x^{2} + 25) - \\frac{3}{5}\\arctan\\left(\\frac{x}{5}\\right) + C$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Further integration",
    "subtopicId": "fm.y2.pure.further-integration",
    "questionDiagram": null,
    "id": "fm.y2.pure.further-integration.q029",
    "tags": [
      "partial-fractions",
      "quadratic-factor",
      "arctangent"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Use partial fractions to find $\\displaystyle\\int \\frac{-3x^{2} + 2}{(x + 2)(x^{2} + 1)}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up partial fractions",
          "workingLatex": "\\frac{-3x^{2} + 2}{(x + 2)(x^{2} + 1)} = \\frac{A}{x + 2} + \\frac{Bx + C}{x^{2} + 1}",
          "explanation": "A linear factor gives a constant numerator, while an irreducible quadratic needs a linear numerator.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Clear denominators",
          "workingLatex": "-3x^{2} + 2 = A(x^{2} + 1) + (Bx+C)(x + 2)",
          "explanation": "Multiplying through turns the identity into a polynomial comparison.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare coefficients",
          "workingLatex": "-3x^{2} + 2 = (-3)x^{2} + (0)x + (2)",
          "explanation": "Matching powers of $x$ determines the unknown constants.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for the constants",
          "workingLatex": "A=-2,\\quad B=-1,\\quad C=2",
          "explanation": "These values make the numerator identity true for every $x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rewrite the integrand",
          "workingLatex": "\\frac{-3x^{2} + 2}{(x + 2)(x^{2} + 1)} = \\frac{-2}{x + 2} + \\frac{-x + 2}{x^{2} + 1}",
          "explanation": "The integral is now a sum of standard simpler integrals.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Integrate the linear-factor term",
          "workingLatex": "\\int \\frac{-2}{x + 2}\\,dx = -2\\ln|x + 2|",
          "explanation": "The integral of $1/(x-p)$ is a logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Split the quadratic numerator",
          "workingLatex": "\\int \\frac{-x + 2}{x^{2} + 1}\\,dx = \\int \\frac{-1x}{x^{2} + 1}\\,dx + \\int \\frac{2}{x^{2} + 1}\\,dx",
          "explanation": "The $x$ term produces a logarithm and the constant term produces an arctangent.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Integrate the quadratic terms",
          "workingLatex": "\\int \\frac{-x + 2}{x^{2} + 1}\\,dx = -\\frac{1}{2}\\ln(x^{2} + 1) + 2\\arctan\\left(x\\right)",
          "explanation": "These are the standard results for $x/(x^2+a^2)$ and $1/(x^2+a^2)$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Combine the antiderivative",
          "workingLatex": "-2\\ln|x + 2| - \\frac{1}{2}\\ln(x^{2} + 1) + 2\\arctan\\left(x\\right) + C",
          "explanation": "Adding the three contributions gives the required indefinite integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$-2\\ln|x + 2| - \\frac{1}{2}\\ln(x^{2} + 1) + 2\\arctan\\left(x\\right) + C$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Further integration",
    "subtopicId": "fm.y2.pure.further-integration",
    "questionDiagram": null,
    "id": "fm.y2.pure.further-integration.q030",
    "tags": [
      "partial-fractions",
      "quadratic-factor",
      "arctangent"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Use partial fractions to find $\\displaystyle\\int \\frac{2x^{2} - 5}{(x + 3)(x^{2} + 4)}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up partial fractions",
          "workingLatex": "\\frac{2x^{2} - 5}{(x + 3)(x^{2} + 4)} = \\frac{A}{x + 3} + \\frac{Bx + C}{x^{2} + 4}",
          "explanation": "A linear factor gives a constant numerator, while an irreducible quadratic needs a linear numerator.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Clear denominators",
          "workingLatex": "2x^{2} - 5 = A(x^{2} + 4) + (Bx+C)(x + 3)",
          "explanation": "Multiplying through turns the identity into a polynomial comparison.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare coefficients",
          "workingLatex": "2x^{2} - 5 = (2)x^{2} + (0)x + (-5)",
          "explanation": "Matching powers of $x$ determines the unknown constants.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for the constants",
          "workingLatex": "A=1,\\quad B=1,\\quad C=-3",
          "explanation": "These values make the numerator identity true for every $x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rewrite the integrand",
          "workingLatex": "\\frac{2x^{2} - 5}{(x + 3)(x^{2} + 4)} = \\frac{1}{x + 3} + \\frac{x - 3}{x^{2} + 4}",
          "explanation": "The integral is now a sum of standard simpler integrals.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Integrate the linear-factor term",
          "workingLatex": "\\int \\frac{1}{x + 3}\\,dx = \\ln|x + 3|",
          "explanation": "The integral of $1/(x-p)$ is a logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Split the quadratic numerator",
          "workingLatex": "\\int \\frac{x - 3}{x^{2} + 4}\\,dx = \\int \\frac{1x}{x^{2} + 4}\\,dx + \\int \\frac{-3}{x^{2} + 4}\\,dx",
          "explanation": "The $x$ term produces a logarithm and the constant term produces an arctangent.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Integrate the quadratic terms",
          "workingLatex": "\\int \\frac{x - 3}{x^{2} + 4}\\,dx = \\frac{1}{2}\\ln(x^{2} + 4) - \\frac{3}{2}\\arctan\\left(\\frac{x}{2}\\right)",
          "explanation": "These are the standard results for $x/(x^2+a^2)$ and $1/(x^2+a^2)$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Combine the antiderivative",
          "workingLatex": "\\ln|x + 3| + \\frac{1}{2}\\ln(x^{2} + 4) - \\frac{3}{2}\\arctan\\left(\\frac{x}{2}\\right) + C",
          "explanation": "Adding the three contributions gives the required indefinite integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\ln|x + 3| + \\frac{1}{2}\\ln(x^{2} + 4) - \\frac{3}{2}\\arctan\\left(\\frac{x}{2}\\right) + C$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Further integration",
    "subtopicId": "fm.y2.pure.further-integration",
    "questionDiagram": null,
    "id": "fm.y2.pure.further-integration.q031",
    "tags": [
      "partial-fractions",
      "quadratic-factor",
      "arctangent"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Use partial fractions to find $\\displaystyle\\int \\frac{5x^{2} - x + 16}{(x - 1)(x^{2} + 9)}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up partial fractions",
          "workingLatex": "\\frac{5x^{2} - x + 16}{(x - 1)(x^{2} + 9)} = \\frac{A}{x - 1} + \\frac{Bx + C}{x^{2} + 9}",
          "explanation": "A linear factor gives a constant numerator, while an irreducible quadratic needs a linear numerator.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Clear denominators",
          "workingLatex": "5x^{2} - x + 16 = A(x^{2} + 9) + (Bx+C)(x - 1)",
          "explanation": "Multiplying through turns the identity into a polynomial comparison.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare coefficients",
          "workingLatex": "5x^{2} - x + 16 = (5)x^{2} + (-1)x + (16)",
          "explanation": "Matching powers of $x$ determines the unknown constants.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for the constants",
          "workingLatex": "A=2,\\quad B=3,\\quad C=2",
          "explanation": "These values make the numerator identity true for every $x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rewrite the integrand",
          "workingLatex": "\\frac{5x^{2} - x + 16}{(x - 1)(x^{2} + 9)} = \\frac{2}{x - 1} + \\frac{3x + 2}{x^{2} + 9}",
          "explanation": "The integral is now a sum of standard simpler integrals.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Integrate the linear-factor term",
          "workingLatex": "\\int \\frac{2}{x - 1}\\,dx = 2\\ln|x - 1|",
          "explanation": "The integral of $1/(x-p)$ is a logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Split the quadratic numerator",
          "workingLatex": "\\int \\frac{3x + 2}{x^{2} + 9}\\,dx = \\int \\frac{3x}{x^{2} + 9}\\,dx + \\int \\frac{2}{x^{2} + 9}\\,dx",
          "explanation": "The $x$ term produces a logarithm and the constant term produces an arctangent.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Integrate the quadratic terms",
          "workingLatex": "\\int \\frac{3x + 2}{x^{2} + 9}\\,dx = \\frac{3}{2}\\ln(x^{2} + 9) + \\frac{2}{3}\\arctan\\left(\\frac{x}{3}\\right)",
          "explanation": "These are the standard results for $x/(x^2+a^2)$ and $1/(x^2+a^2)$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Combine the antiderivative",
          "workingLatex": "2\\ln|x - 1| + \\frac{3}{2}\\ln(x^{2} + 9) + \\frac{2}{3}\\arctan\\left(\\frac{x}{3}\\right) + C",
          "explanation": "Adding the three contributions gives the required indefinite integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$2\\ln|x - 1| + \\frac{3}{2}\\ln(x^{2} + 9) + \\frac{2}{3}\\arctan\\left(\\frac{x}{3}\\right) + C$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Further integration",
    "subtopicId": "fm.y2.pure.further-integration",
    "questionDiagram": null,
    "id": "fm.y2.pure.further-integration.q032",
    "tags": [
      "partial-fractions",
      "quadratic-factor",
      "arctangent"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Use partial fractions to find $\\displaystyle\\int \\frac{x^{2} - 7x - 10}{(x - 2)(x^{2} + 16)}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up partial fractions",
          "workingLatex": "\\frac{x^{2} - 7x - 10}{(x - 2)(x^{2} + 16)} = \\frac{A}{x - 2} + \\frac{Bx + C}{x^{2} + 16}",
          "explanation": "A linear factor gives a constant numerator, while an irreducible quadratic needs a linear numerator.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Clear denominators",
          "workingLatex": "x^{2} - 7x - 10 = A(x^{2} + 16) + (Bx+C)(x - 2)",
          "explanation": "Multiplying through turns the identity into a polynomial comparison.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare coefficients",
          "workingLatex": "x^{2} - 7x - 10 = (1)x^{2} + (-7)x + (-10)",
          "explanation": "Matching powers of $x$ determines the unknown constants.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for the constants",
          "workingLatex": "A=-1,\\quad B=2,\\quad C=-3",
          "explanation": "These values make the numerator identity true for every $x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rewrite the integrand",
          "workingLatex": "\\frac{x^{2} - 7x - 10}{(x - 2)(x^{2} + 16)} = \\frac{-1}{x - 2} + \\frac{2x - 3}{x^{2} + 16}",
          "explanation": "The integral is now a sum of standard simpler integrals.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Integrate the linear-factor term",
          "workingLatex": "\\int \\frac{-1}{x - 2}\\,dx = -\\ln|x - 2|",
          "explanation": "The integral of $1/(x-p)$ is a logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Split the quadratic numerator",
          "workingLatex": "\\int \\frac{2x - 3}{x^{2} + 16}\\,dx = \\int \\frac{2x}{x^{2} + 16}\\,dx + \\int \\frac{-3}{x^{2} + 16}\\,dx",
          "explanation": "The $x$ term produces a logarithm and the constant term produces an arctangent.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Integrate the quadratic terms",
          "workingLatex": "\\int \\frac{2x - 3}{x^{2} + 16}\\,dx = \\ln(x^{2} + 16) - \\frac{3}{4}\\arctan\\left(\\frac{x}{4}\\right)",
          "explanation": "These are the standard results for $x/(x^2+a^2)$ and $1/(x^2+a^2)$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Combine the antiderivative",
          "workingLatex": "-\\ln|x - 2| + \\ln(x^{2} + 16) - \\frac{3}{4}\\arctan\\left(\\frac{x}{4}\\right) + C",
          "explanation": "Adding the three contributions gives the required indefinite integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$-\\ln|x - 2| + \\ln(x^{2} + 16) - \\frac{3}{4}\\arctan\\left(\\frac{x}{4}\\right) + C$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Further integration",
    "subtopicId": "fm.y2.pure.further-integration",
    "questionDiagram": null,
    "id": "fm.y2.pure.further-integration.q033",
    "tags": [
      "partial-fractions",
      "quadratic-factor",
      "arctangent"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Use partial fractions to find $\\displaystyle\\int \\frac{x^{2} + 8x + 69}{(x - 3)(x^{2} + 25)}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up partial fractions",
          "workingLatex": "\\frac{x^{2} + 8x + 69}{(x - 3)(x^{2} + 25)} = \\frac{A}{x - 3} + \\frac{Bx + C}{x^{2} + 25}",
          "explanation": "A linear factor gives a constant numerator, while an irreducible quadratic needs a linear numerator.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Clear denominators",
          "workingLatex": "x^{2} + 8x + 69 = A(x^{2} + 25) + (Bx+C)(x - 3)",
          "explanation": "Multiplying through turns the identity into a polynomial comparison.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare coefficients",
          "workingLatex": "x^{2} + 8x + 69 = (1)x^{2} + (8)x + (69)",
          "explanation": "Matching powers of $x$ determines the unknown constants.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for the constants",
          "workingLatex": "A=3,\\quad B=-2,\\quad C=2",
          "explanation": "These values make the numerator identity true for every $x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rewrite the integrand",
          "workingLatex": "\\frac{x^{2} + 8x + 69}{(x - 3)(x^{2} + 25)} = \\frac{3}{x - 3} + \\frac{-2x + 2}{x^{2} + 25}",
          "explanation": "The integral is now a sum of standard simpler integrals.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Integrate the linear-factor term",
          "workingLatex": "\\int \\frac{3}{x - 3}\\,dx = 3\\ln|x - 3|",
          "explanation": "The integral of $1/(x-p)$ is a logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Split the quadratic numerator",
          "workingLatex": "\\int \\frac{-2x + 2}{x^{2} + 25}\\,dx = \\int \\frac{-2x}{x^{2} + 25}\\,dx + \\int \\frac{2}{x^{2} + 25}\\,dx",
          "explanation": "The $x$ term produces a logarithm and the constant term produces an arctangent.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Integrate the quadratic terms",
          "workingLatex": "\\int \\frac{-2x + 2}{x^{2} + 25}\\,dx = -\\ln(x^{2} + 25) + \\frac{2}{5}\\arctan\\left(\\frac{x}{5}\\right)",
          "explanation": "These are the standard results for $x/(x^2+a^2)$ and $1/(x^2+a^2)$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Combine the antiderivative",
          "workingLatex": "3\\ln|x - 3| - \\ln(x^{2} + 25) + \\frac{2}{5}\\arctan\\left(\\frac{x}{5}\\right) + C",
          "explanation": "Adding the three contributions gives the required indefinite integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$3\\ln|x - 3| - \\ln(x^{2} + 25) + \\frac{2}{5}\\arctan\\left(\\frac{x}{5}\\right) + C$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Further integration",
    "subtopicId": "fm.y2.pure.further-integration",
    "questionDiagram": null,
    "id": "fm.y2.pure.further-integration.q034",
    "tags": [
      "partial-fractions",
      "quadratic-factor",
      "arctangent"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Use partial fractions to find $\\displaystyle\\int \\frac{-3x^{2} - 4x - 5}{(x + 1)(x^{2} + 1)}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up partial fractions",
          "workingLatex": "\\frac{-3x^{2} - 4x - 5}{(x + 1)(x^{2} + 1)} = \\frac{A}{x + 1} + \\frac{Bx + C}{x^{2} + 1}",
          "explanation": "A linear factor gives a constant numerator, while an irreducible quadratic needs a linear numerator.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Clear denominators",
          "workingLatex": "-3x^{2} - 4x - 5 = A(x^{2} + 1) + (Bx+C)(x + 1)",
          "explanation": "Multiplying through turns the identity into a polynomial comparison.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare coefficients",
          "workingLatex": "-3x^{2} - 4x - 5 = (-3)x^{2} + (-4)x + (-5)",
          "explanation": "Matching powers of $x$ determines the unknown constants.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for the constants",
          "workingLatex": "A=-2,\\quad B=-1,\\quad C=-3",
          "explanation": "These values make the numerator identity true for every $x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rewrite the integrand",
          "workingLatex": "\\frac{-3x^{2} - 4x - 5}{(x + 1)(x^{2} + 1)} = \\frac{-2}{x + 1} + \\frac{-x - 3}{x^{2} + 1}",
          "explanation": "The integral is now a sum of standard simpler integrals.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Integrate the linear-factor term",
          "workingLatex": "\\int \\frac{-2}{x + 1}\\,dx = -2\\ln|x + 1|",
          "explanation": "The integral of $1/(x-p)$ is a logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Split the quadratic numerator",
          "workingLatex": "\\int \\frac{-x - 3}{x^{2} + 1}\\,dx = \\int \\frac{-1x}{x^{2} + 1}\\,dx + \\int \\frac{-3}{x^{2} + 1}\\,dx",
          "explanation": "The $x$ term produces a logarithm and the constant term produces an arctangent.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Integrate the quadratic terms",
          "workingLatex": "\\int \\frac{-x - 3}{x^{2} + 1}\\,dx = -\\frac{1}{2}\\ln(x^{2} + 1) - 3\\arctan\\left(x\\right)",
          "explanation": "These are the standard results for $x/(x^2+a^2)$ and $1/(x^2+a^2)$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Combine the antiderivative",
          "workingLatex": "-2\\ln|x + 1| - \\frac{1}{2}\\ln(x^{2} + 1) - 3\\arctan\\left(x\\right) + C",
          "explanation": "Adding the three contributions gives the required indefinite integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$-2\\ln|x + 1| - \\frac{1}{2}\\ln(x^{2} + 1) - 3\\arctan\\left(x\\right) + C$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Further integration",
    "subtopicId": "fm.y2.pure.further-integration",
    "questionDiagram": null,
    "id": "fm.y2.pure.further-integration.q035",
    "tags": [
      "partial-fractions",
      "quadratic-factor",
      "arctangent"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Use partial fractions to find $\\displaystyle\\int \\frac{2x^{2} + 4x + 8}{(x + 2)(x^{2} + 4)}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up partial fractions",
          "workingLatex": "\\frac{2x^{2} + 4x + 8}{(x + 2)(x^{2} + 4)} = \\frac{A}{x + 2} + \\frac{Bx + C}{x^{2} + 4}",
          "explanation": "A linear factor gives a constant numerator, while an irreducible quadratic needs a linear numerator.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Clear denominators",
          "workingLatex": "2x^{2} + 4x + 8 = A(x^{2} + 4) + (Bx+C)(x + 2)",
          "explanation": "Multiplying through turns the identity into a polynomial comparison.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare coefficients",
          "workingLatex": "2x^{2} + 4x + 8 = (2)x^{2} + (4)x + (8)",
          "explanation": "Matching powers of $x$ determines the unknown constants.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for the constants",
          "workingLatex": "A=1,\\quad B=1,\\quad C=2",
          "explanation": "These values make the numerator identity true for every $x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rewrite the integrand",
          "workingLatex": "\\frac{2x^{2} + 4x + 8}{(x + 2)(x^{2} + 4)} = \\frac{1}{x + 2} + \\frac{x + 2}{x^{2} + 4}",
          "explanation": "The integral is now a sum of standard simpler integrals.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Integrate the linear-factor term",
          "workingLatex": "\\int \\frac{1}{x + 2}\\,dx = \\ln|x + 2|",
          "explanation": "The integral of $1/(x-p)$ is a logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Split the quadratic numerator",
          "workingLatex": "\\int \\frac{x + 2}{x^{2} + 4}\\,dx = \\int \\frac{1x}{x^{2} + 4}\\,dx + \\int \\frac{2}{x^{2} + 4}\\,dx",
          "explanation": "The $x$ term produces a logarithm and the constant term produces an arctangent.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Integrate the quadratic terms",
          "workingLatex": "\\int \\frac{x + 2}{x^{2} + 4}\\,dx = \\frac{1}{2}\\ln(x^{2} + 4) + \\arctan\\left(\\frac{x}{2}\\right)",
          "explanation": "These are the standard results for $x/(x^2+a^2)$ and $1/(x^2+a^2)$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Combine the antiderivative",
          "workingLatex": "\\ln|x + 2| + \\frac{1}{2}\\ln(x^{2} + 4) + \\arctan\\left(\\frac{x}{2}\\right) + C",
          "explanation": "Adding the three contributions gives the required indefinite integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\ln|x + 2| + \\frac{1}{2}\\ln(x^{2} + 4) + \\arctan\\left(\\frac{x}{2}\\right) + C$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Further integration",
    "subtopicId": "fm.y2.pure.further-integration",
    "questionDiagram": null,
    "id": "fm.y2.pure.further-integration.q036",
    "tags": [
      "partial-fractions",
      "quadratic-factor",
      "arctangent"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Use partial fractions to find $\\displaystyle\\int \\frac{5x^{2} + 6x + 9}{(x + 3)(x^{2} + 9)}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up partial fractions",
          "workingLatex": "\\frac{5x^{2} + 6x + 9}{(x + 3)(x^{2} + 9)} = \\frac{A}{x + 3} + \\frac{Bx + C}{x^{2} + 9}",
          "explanation": "A linear factor gives a constant numerator, while an irreducible quadratic needs a linear numerator.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Clear denominators",
          "workingLatex": "5x^{2} + 6x + 9 = A(x^{2} + 9) + (Bx+C)(x + 3)",
          "explanation": "Multiplying through turns the identity into a polynomial comparison.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare coefficients",
          "workingLatex": "5x^{2} + 6x + 9 = (5)x^{2} + (6)x + (9)",
          "explanation": "Matching powers of $x$ determines the unknown constants.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for the constants",
          "workingLatex": "A=2,\\quad B=3,\\quad C=-3",
          "explanation": "These values make the numerator identity true for every $x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rewrite the integrand",
          "workingLatex": "\\frac{5x^{2} + 6x + 9}{(x + 3)(x^{2} + 9)} = \\frac{2}{x + 3} + \\frac{3x - 3}{x^{2} + 9}",
          "explanation": "The integral is now a sum of standard simpler integrals.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Integrate the linear-factor term",
          "workingLatex": "\\int \\frac{2}{x + 3}\\,dx = 2\\ln|x + 3|",
          "explanation": "The integral of $1/(x-p)$ is a logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Split the quadratic numerator",
          "workingLatex": "\\int \\frac{3x - 3}{x^{2} + 9}\\,dx = \\int \\frac{3x}{x^{2} + 9}\\,dx + \\int \\frac{-3}{x^{2} + 9}\\,dx",
          "explanation": "The $x$ term produces a logarithm and the constant term produces an arctangent.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Integrate the quadratic terms",
          "workingLatex": "\\int \\frac{3x - 3}{x^{2} + 9}\\,dx = \\frac{3}{2}\\ln(x^{2} + 9) - \\arctan\\left(\\frac{x}{3}\\right)",
          "explanation": "These are the standard results for $x/(x^2+a^2)$ and $1/(x^2+a^2)$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Combine the antiderivative",
          "workingLatex": "2\\ln|x + 3| + \\frac{3}{2}\\ln(x^{2} + 9) - \\arctan\\left(\\frac{x}{3}\\right) + C",
          "explanation": "Adding the three contributions gives the required indefinite integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$2\\ln|x + 3| + \\frac{3}{2}\\ln(x^{2} + 9) - \\arctan\\left(\\frac{x}{3}\\right) + C$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Further integration",
    "subtopicId": "fm.y2.pure.further-integration",
    "questionDiagram": null,
    "id": "fm.y2.pure.further-integration.q037",
    "tags": [
      "partial-fractions",
      "quadratic-factor",
      "arctangent"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Use partial fractions to find $\\displaystyle\\int \\frac{x^{2} - 18}{(x - 1)(x^{2} + 16)}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up partial fractions",
          "workingLatex": "\\frac{x^{2} - 18}{(x - 1)(x^{2} + 16)} = \\frac{A}{x - 1} + \\frac{Bx + C}{x^{2} + 16}",
          "explanation": "A linear factor gives a constant numerator, while an irreducible quadratic needs a linear numerator.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Clear denominators",
          "workingLatex": "x^{2} - 18 = A(x^{2} + 16) + (Bx+C)(x - 1)",
          "explanation": "Multiplying through turns the identity into a polynomial comparison.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare coefficients",
          "workingLatex": "x^{2} - 18 = (1)x^{2} + (0)x + (-18)",
          "explanation": "Matching powers of $x$ determines the unknown constants.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for the constants",
          "workingLatex": "A=-1,\\quad B=2,\\quad C=2",
          "explanation": "These values make the numerator identity true for every $x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rewrite the integrand",
          "workingLatex": "\\frac{x^{2} - 18}{(x - 1)(x^{2} + 16)} = \\frac{-1}{x - 1} + \\frac{2x + 2}{x^{2} + 16}",
          "explanation": "The integral is now a sum of standard simpler integrals.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Integrate the linear-factor term",
          "workingLatex": "\\int \\frac{-1}{x - 1}\\,dx = -\\ln|x - 1|",
          "explanation": "The integral of $1/(x-p)$ is a logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Split the quadratic numerator",
          "workingLatex": "\\int \\frac{2x + 2}{x^{2} + 16}\\,dx = \\int \\frac{2x}{x^{2} + 16}\\,dx + \\int \\frac{2}{x^{2} + 16}\\,dx",
          "explanation": "The $x$ term produces a logarithm and the constant term produces an arctangent.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Integrate the quadratic terms",
          "workingLatex": "\\int \\frac{2x + 2}{x^{2} + 16}\\,dx = \\ln(x^{2} + 16) + \\frac{1}{2}\\arctan\\left(\\frac{x}{4}\\right)",
          "explanation": "These are the standard results for $x/(x^2+a^2)$ and $1/(x^2+a^2)$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Combine the antiderivative",
          "workingLatex": "-\\ln|x - 1| + \\ln(x^{2} + 16) + \\frac{1}{2}\\arctan\\left(\\frac{x}{4}\\right) + C",
          "explanation": "Adding the three contributions gives the required indefinite integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$-\\ln|x - 1| + \\ln(x^{2} + 16) + \\frac{1}{2}\\arctan\\left(\\frac{x}{4}\\right) + C$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Further integration",
    "subtopicId": "fm.y2.pure.further-integration",
    "questionDiagram": null,
    "id": "fm.y2.pure.further-integration.q038",
    "tags": [
      "partial-fractions",
      "quadratic-factor",
      "arctangent"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Use partial fractions to find $\\displaystyle\\int \\frac{x^{2} + x + 81}{(x - 2)(x^{2} + 25)}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up partial fractions",
          "workingLatex": "\\frac{x^{2} + x + 81}{(x - 2)(x^{2} + 25)} = \\frac{A}{x - 2} + \\frac{Bx + C}{x^{2} + 25}",
          "explanation": "A linear factor gives a constant numerator, while an irreducible quadratic needs a linear numerator.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Clear denominators",
          "workingLatex": "x^{2} + x + 81 = A(x^{2} + 25) + (Bx+C)(x - 2)",
          "explanation": "Multiplying through turns the identity into a polynomial comparison.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare coefficients",
          "workingLatex": "x^{2} + x + 81 = (1)x^{2} + (1)x + (81)",
          "explanation": "Matching powers of $x$ determines the unknown constants.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for the constants",
          "workingLatex": "A=3,\\quad B=-2,\\quad C=-3",
          "explanation": "These values make the numerator identity true for every $x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rewrite the integrand",
          "workingLatex": "\\frac{x^{2} + x + 81}{(x - 2)(x^{2} + 25)} = \\frac{3}{x - 2} + \\frac{-2x - 3}{x^{2} + 25}",
          "explanation": "The integral is now a sum of standard simpler integrals.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Integrate the linear-factor term",
          "workingLatex": "\\int \\frac{3}{x - 2}\\,dx = 3\\ln|x - 2|",
          "explanation": "The integral of $1/(x-p)$ is a logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Split the quadratic numerator",
          "workingLatex": "\\int \\frac{-2x - 3}{x^{2} + 25}\\,dx = \\int \\frac{-2x}{x^{2} + 25}\\,dx + \\int \\frac{-3}{x^{2} + 25}\\,dx",
          "explanation": "The $x$ term produces a logarithm and the constant term produces an arctangent.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Integrate the quadratic terms",
          "workingLatex": "\\int \\frac{-2x - 3}{x^{2} + 25}\\,dx = -\\ln(x^{2} + 25) - \\frac{3}{5}\\arctan\\left(\\frac{x}{5}\\right)",
          "explanation": "These are the standard results for $x/(x^2+a^2)$ and $1/(x^2+a^2)$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Combine the antiderivative",
          "workingLatex": "3\\ln|x - 2| - \\ln(x^{2} + 25) - \\frac{3}{5}\\arctan\\left(\\frac{x}{5}\\right) + C",
          "explanation": "Adding the three contributions gives the required indefinite integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$3\\ln|x - 2| - \\ln(x^{2} + 25) - \\frac{3}{5}\\arctan\\left(\\frac{x}{5}\\right) + C$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Further integration",
    "subtopicId": "fm.y2.pure.further-integration",
    "questionDiagram": null,
    "id": "fm.y2.pure.further-integration.q039",
    "tags": [
      "partial-fractions",
      "quadratic-factor",
      "arctangent"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Use partial fractions to find $\\displaystyle\\int \\frac{-3x^{2} + 5x - 8}{(x - 3)(x^{2} + 1)}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up partial fractions",
          "workingLatex": "\\frac{-3x^{2} + 5x - 8}{(x - 3)(x^{2} + 1)} = \\frac{A}{x - 3} + \\frac{Bx + C}{x^{2} + 1}",
          "explanation": "A linear factor gives a constant numerator, while an irreducible quadratic needs a linear numerator.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Clear denominators",
          "workingLatex": "-3x^{2} + 5x - 8 = A(x^{2} + 1) + (Bx+C)(x - 3)",
          "explanation": "Multiplying through turns the identity into a polynomial comparison.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare coefficients",
          "workingLatex": "-3x^{2} + 5x - 8 = (-3)x^{2} + (5)x + (-8)",
          "explanation": "Matching powers of $x$ determines the unknown constants.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for the constants",
          "workingLatex": "A=-2,\\quad B=-1,\\quad C=2",
          "explanation": "These values make the numerator identity true for every $x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rewrite the integrand",
          "workingLatex": "\\frac{-3x^{2} + 5x - 8}{(x - 3)(x^{2} + 1)} = \\frac{-2}{x - 3} + \\frac{-x + 2}{x^{2} + 1}",
          "explanation": "The integral is now a sum of standard simpler integrals.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Integrate the linear-factor term",
          "workingLatex": "\\int \\frac{-2}{x - 3}\\,dx = -2\\ln|x - 3|",
          "explanation": "The integral of $1/(x-p)$ is a logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Split the quadratic numerator",
          "workingLatex": "\\int \\frac{-x + 2}{x^{2} + 1}\\,dx = \\int \\frac{-1x}{x^{2} + 1}\\,dx + \\int \\frac{2}{x^{2} + 1}\\,dx",
          "explanation": "The $x$ term produces a logarithm and the constant term produces an arctangent.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Integrate the quadratic terms",
          "workingLatex": "\\int \\frac{-x + 2}{x^{2} + 1}\\,dx = -\\frac{1}{2}\\ln(x^{2} + 1) + 2\\arctan\\left(x\\right)",
          "explanation": "These are the standard results for $x/(x^2+a^2)$ and $1/(x^2+a^2)$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Combine the antiderivative",
          "workingLatex": "-2\\ln|x - 3| - \\frac{1}{2}\\ln(x^{2} + 1) + 2\\arctan\\left(x\\right) + C",
          "explanation": "Adding the three contributions gives the required indefinite integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$-2\\ln|x - 3| - \\frac{1}{2}\\ln(x^{2} + 1) + 2\\arctan\\left(x\\right) + C$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Further integration",
    "subtopicId": "fm.y2.pure.further-integration",
    "questionDiagram": null,
    "id": "fm.y2.pure.further-integration.q040",
    "tags": [
      "partial-fractions",
      "quadratic-factor",
      "arctangent"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Use partial fractions to find $\\displaystyle\\int \\frac{2x^{2} - 2x + 1}{(x + 1)(x^{2} + 4)}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up partial fractions",
          "workingLatex": "\\frac{2x^{2} - 2x + 1}{(x + 1)(x^{2} + 4)} = \\frac{A}{x + 1} + \\frac{Bx + C}{x^{2} + 4}",
          "explanation": "A linear factor gives a constant numerator, while an irreducible quadratic needs a linear numerator.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Clear denominators",
          "workingLatex": "2x^{2} - 2x + 1 = A(x^{2} + 4) + (Bx+C)(x + 1)",
          "explanation": "Multiplying through turns the identity into a polynomial comparison.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare coefficients",
          "workingLatex": "2x^{2} - 2x + 1 = (2)x^{2} + (-2)x + (1)",
          "explanation": "Matching powers of $x$ determines the unknown constants.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for the constants",
          "workingLatex": "A=1,\\quad B=1,\\quad C=-3",
          "explanation": "These values make the numerator identity true for every $x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rewrite the integrand",
          "workingLatex": "\\frac{2x^{2} - 2x + 1}{(x + 1)(x^{2} + 4)} = \\frac{1}{x + 1} + \\frac{x - 3}{x^{2} + 4}",
          "explanation": "The integral is now a sum of standard simpler integrals.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Integrate the linear-factor term",
          "workingLatex": "\\int \\frac{1}{x + 1}\\,dx = \\ln|x + 1|",
          "explanation": "The integral of $1/(x-p)$ is a logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Split the quadratic numerator",
          "workingLatex": "\\int \\frac{x - 3}{x^{2} + 4}\\,dx = \\int \\frac{1x}{x^{2} + 4}\\,dx + \\int \\frac{-3}{x^{2} + 4}\\,dx",
          "explanation": "The $x$ term produces a logarithm and the constant term produces an arctangent.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Integrate the quadratic terms",
          "workingLatex": "\\int \\frac{x - 3}{x^{2} + 4}\\,dx = \\frac{1}{2}\\ln(x^{2} + 4) - \\frac{3}{2}\\arctan\\left(\\frac{x}{2}\\right)",
          "explanation": "These are the standard results for $x/(x^2+a^2)$ and $1/(x^2+a^2)$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Combine the antiderivative",
          "workingLatex": "\\ln|x + 1| + \\frac{1}{2}\\ln(x^{2} + 4) - \\frac{3}{2}\\arctan\\left(\\frac{x}{2}\\right) + C",
          "explanation": "Adding the three contributions gives the required indefinite integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\ln|x + 1| + \\frac{1}{2}\\ln(x^{2} + 4) - \\frac{3}{2}\\arctan\\left(\\frac{x}{2}\\right) + C$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Further integration",
    "subtopicId": "fm.y2.pure.further-integration",
    "questionDiagram": null,
    "id": "fm.y2.pure.further-integration.q041",
    "tags": [
      "partial-fractions",
      "quadratic-factor",
      "arctangent"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Use partial fractions to find $\\displaystyle\\int \\frac{5x^{2} + 8x + 22}{(x + 2)(x^{2} + 9)}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up partial fractions",
          "workingLatex": "\\frac{5x^{2} + 8x + 22}{(x + 2)(x^{2} + 9)} = \\frac{A}{x + 2} + \\frac{Bx + C}{x^{2} + 9}",
          "explanation": "A linear factor gives a constant numerator, while an irreducible quadratic needs a linear numerator.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Clear denominators",
          "workingLatex": "5x^{2} + 8x + 22 = A(x^{2} + 9) + (Bx+C)(x + 2)",
          "explanation": "Multiplying through turns the identity into a polynomial comparison.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare coefficients",
          "workingLatex": "5x^{2} + 8x + 22 = (5)x^{2} + (8)x + (22)",
          "explanation": "Matching powers of $x$ determines the unknown constants.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for the constants",
          "workingLatex": "A=2,\\quad B=3,\\quad C=2",
          "explanation": "These values make the numerator identity true for every $x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rewrite the integrand",
          "workingLatex": "\\frac{5x^{2} + 8x + 22}{(x + 2)(x^{2} + 9)} = \\frac{2}{x + 2} + \\frac{3x + 2}{x^{2} + 9}",
          "explanation": "The integral is now a sum of standard simpler integrals.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Integrate the linear-factor term",
          "workingLatex": "\\int \\frac{2}{x + 2}\\,dx = 2\\ln|x + 2|",
          "explanation": "The integral of $1/(x-p)$ is a logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Split the quadratic numerator",
          "workingLatex": "\\int \\frac{3x + 2}{x^{2} + 9}\\,dx = \\int \\frac{3x}{x^{2} + 9}\\,dx + \\int \\frac{2}{x^{2} + 9}\\,dx",
          "explanation": "The $x$ term produces a logarithm and the constant term produces an arctangent.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Integrate the quadratic terms",
          "workingLatex": "\\int \\frac{3x + 2}{x^{2} + 9}\\,dx = \\frac{3}{2}\\ln(x^{2} + 9) + \\frac{2}{3}\\arctan\\left(\\frac{x}{3}\\right)",
          "explanation": "These are the standard results for $x/(x^2+a^2)$ and $1/(x^2+a^2)$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Combine the antiderivative",
          "workingLatex": "2\\ln|x + 2| + \\frac{3}{2}\\ln(x^{2} + 9) + \\frac{2}{3}\\arctan\\left(\\frac{x}{3}\\right) + C",
          "explanation": "Adding the three contributions gives the required indefinite integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$2\\ln|x + 2| + \\frac{3}{2}\\ln(x^{2} + 9) + \\frac{2}{3}\\arctan\\left(\\frac{x}{3}\\right) + C$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Further integration",
    "subtopicId": "fm.y2.pure.further-integration",
    "questionDiagram": null,
    "id": "fm.y2.pure.further-integration.q042",
    "tags": [
      "partial-fractions",
      "quadratic-factor",
      "arctangent"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Use partial fractions to find $\\displaystyle\\int \\frac{x^{2} + 3x - 25}{(x + 3)(x^{2} + 16)}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up partial fractions",
          "workingLatex": "\\frac{x^{2} + 3x - 25}{(x + 3)(x^{2} + 16)} = \\frac{A}{x + 3} + \\frac{Bx + C}{x^{2} + 16}",
          "explanation": "A linear factor gives a constant numerator, while an irreducible quadratic needs a linear numerator.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Clear denominators",
          "workingLatex": "x^{2} + 3x - 25 = A(x^{2} + 16) + (Bx+C)(x + 3)",
          "explanation": "Multiplying through turns the identity into a polynomial comparison.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare coefficients",
          "workingLatex": "x^{2} + 3x - 25 = (1)x^{2} + (3)x + (-25)",
          "explanation": "Matching powers of $x$ determines the unknown constants.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for the constants",
          "workingLatex": "A=-1,\\quad B=2,\\quad C=-3",
          "explanation": "These values make the numerator identity true for every $x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rewrite the integrand",
          "workingLatex": "\\frac{x^{2} + 3x - 25}{(x + 3)(x^{2} + 16)} = \\frac{-1}{x + 3} + \\frac{2x - 3}{x^{2} + 16}",
          "explanation": "The integral is now a sum of standard simpler integrals.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Integrate the linear-factor term",
          "workingLatex": "\\int \\frac{-1}{x + 3}\\,dx = -\\ln|x + 3|",
          "explanation": "The integral of $1/(x-p)$ is a logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Split the quadratic numerator",
          "workingLatex": "\\int \\frac{2x - 3}{x^{2} + 16}\\,dx = \\int \\frac{2x}{x^{2} + 16}\\,dx + \\int \\frac{-3}{x^{2} + 16}\\,dx",
          "explanation": "The $x$ term produces a logarithm and the constant term produces an arctangent.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Integrate the quadratic terms",
          "workingLatex": "\\int \\frac{2x - 3}{x^{2} + 16}\\,dx = \\ln(x^{2} + 16) - \\frac{3}{4}\\arctan\\left(\\frac{x}{4}\\right)",
          "explanation": "These are the standard results for $x/(x^2+a^2)$ and $1/(x^2+a^2)$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Combine the antiderivative",
          "workingLatex": "-\\ln|x + 3| + \\ln(x^{2} + 16) - \\frac{3}{4}\\arctan\\left(\\frac{x}{4}\\right) + C",
          "explanation": "Adding the three contributions gives the required indefinite integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$-\\ln|x + 3| + \\ln(x^{2} + 16) - \\frac{3}{4}\\arctan\\left(\\frac{x}{4}\\right) + C$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Further integration",
    "subtopicId": "fm.y2.pure.further-integration",
    "questionDiagram": null,
    "id": "fm.y2.pure.further-integration.q043",
    "tags": [
      "partial-fractions",
      "quadratic-factor",
      "arctangent"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Use partial fractions to find $\\displaystyle\\int \\frac{x^{2} + 4x + 73}{(x - 1)(x^{2} + 25)}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up partial fractions",
          "workingLatex": "\\frac{x^{2} + 4x + 73}{(x - 1)(x^{2} + 25)} = \\frac{A}{x - 1} + \\frac{Bx + C}{x^{2} + 25}",
          "explanation": "A linear factor gives a constant numerator, while an irreducible quadratic needs a linear numerator.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Clear denominators",
          "workingLatex": "x^{2} + 4x + 73 = A(x^{2} + 25) + (Bx+C)(x - 1)",
          "explanation": "Multiplying through turns the identity into a polynomial comparison.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare coefficients",
          "workingLatex": "x^{2} + 4x + 73 = (1)x^{2} + (4)x + (73)",
          "explanation": "Matching powers of $x$ determines the unknown constants.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for the constants",
          "workingLatex": "A=3,\\quad B=-2,\\quad C=2",
          "explanation": "These values make the numerator identity true for every $x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rewrite the integrand",
          "workingLatex": "\\frac{x^{2} + 4x + 73}{(x - 1)(x^{2} + 25)} = \\frac{3}{x - 1} + \\frac{-2x + 2}{x^{2} + 25}",
          "explanation": "The integral is now a sum of standard simpler integrals.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Integrate the linear-factor term",
          "workingLatex": "\\int \\frac{3}{x - 1}\\,dx = 3\\ln|x - 1|",
          "explanation": "The integral of $1/(x-p)$ is a logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Split the quadratic numerator",
          "workingLatex": "\\int \\frac{-2x + 2}{x^{2} + 25}\\,dx = \\int \\frac{-2x}{x^{2} + 25}\\,dx + \\int \\frac{2}{x^{2} + 25}\\,dx",
          "explanation": "The $x$ term produces a logarithm and the constant term produces an arctangent.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Integrate the quadratic terms",
          "workingLatex": "\\int \\frac{-2x + 2}{x^{2} + 25}\\,dx = -\\ln(x^{2} + 25) + \\frac{2}{5}\\arctan\\left(\\frac{x}{5}\\right)",
          "explanation": "These are the standard results for $x/(x^2+a^2)$ and $1/(x^2+a^2)$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Combine the antiderivative",
          "workingLatex": "3\\ln|x - 1| - \\ln(x^{2} + 25) + \\frac{2}{5}\\arctan\\left(\\frac{x}{5}\\right) + C",
          "explanation": "Adding the three contributions gives the required indefinite integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$3\\ln|x - 1| - \\ln(x^{2} + 25) + \\frac{2}{5}\\arctan\\left(\\frac{x}{5}\\right) + C$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Further integration",
    "subtopicId": "fm.y2.pure.further-integration",
    "questionDiagram": null,
    "id": "fm.y2.pure.further-integration.q044",
    "tags": [
      "partial-fractions",
      "quadratic-factor",
      "arctangent"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Use partial fractions to find $\\displaystyle\\int \\frac{-3x^{2} - x + 4}{(x - 2)(x^{2} + 1)}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up partial fractions",
          "workingLatex": "\\frac{-3x^{2} - x + 4}{(x - 2)(x^{2} + 1)} = \\frac{A}{x - 2} + \\frac{Bx + C}{x^{2} + 1}",
          "explanation": "A linear factor gives a constant numerator, while an irreducible quadratic needs a linear numerator.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Clear denominators",
          "workingLatex": "-3x^{2} - x + 4 = A(x^{2} + 1) + (Bx+C)(x - 2)",
          "explanation": "Multiplying through turns the identity into a polynomial comparison.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare coefficients",
          "workingLatex": "-3x^{2} - x + 4 = (-3)x^{2} + (-1)x + (4)",
          "explanation": "Matching powers of $x$ determines the unknown constants.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for the constants",
          "workingLatex": "A=-2,\\quad B=-1,\\quad C=-3",
          "explanation": "These values make the numerator identity true for every $x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rewrite the integrand",
          "workingLatex": "\\frac{-3x^{2} - x + 4}{(x - 2)(x^{2} + 1)} = \\frac{-2}{x - 2} + \\frac{-x - 3}{x^{2} + 1}",
          "explanation": "The integral is now a sum of standard simpler integrals.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Integrate the linear-factor term",
          "workingLatex": "\\int \\frac{-2}{x - 2}\\,dx = -2\\ln|x - 2|",
          "explanation": "The integral of $1/(x-p)$ is a logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Split the quadratic numerator",
          "workingLatex": "\\int \\frac{-x - 3}{x^{2} + 1}\\,dx = \\int \\frac{-1x}{x^{2} + 1}\\,dx + \\int \\frac{-3}{x^{2} + 1}\\,dx",
          "explanation": "The $x$ term produces a logarithm and the constant term produces an arctangent.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Integrate the quadratic terms",
          "workingLatex": "\\int \\frac{-x - 3}{x^{2} + 1}\\,dx = -\\frac{1}{2}\\ln(x^{2} + 1) - 3\\arctan\\left(x\\right)",
          "explanation": "These are the standard results for $x/(x^2+a^2)$ and $1/(x^2+a^2)$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Combine the antiderivative",
          "workingLatex": "-2\\ln|x - 2| - \\frac{1}{2}\\ln(x^{2} + 1) - 3\\arctan\\left(x\\right) + C",
          "explanation": "Adding the three contributions gives the required indefinite integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$-2\\ln|x - 2| - \\frac{1}{2}\\ln(x^{2} + 1) - 3\\arctan\\left(x\\right) + C$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Further integration",
    "subtopicId": "fm.y2.pure.further-integration",
    "questionDiagram": null,
    "id": "fm.y2.pure.further-integration.q045",
    "tags": [
      "partial-fractions",
      "quadratic-factor",
      "arctangent"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Use partial fractions to find $\\displaystyle\\int \\frac{2x^{2} - x - 2}{(x - 3)(x^{2} + 4)}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up partial fractions",
          "workingLatex": "\\frac{2x^{2} - x - 2}{(x - 3)(x^{2} + 4)} = \\frac{A}{x - 3} + \\frac{Bx + C}{x^{2} + 4}",
          "explanation": "A linear factor gives a constant numerator, while an irreducible quadratic needs a linear numerator.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Clear denominators",
          "workingLatex": "2x^{2} - x - 2 = A(x^{2} + 4) + (Bx+C)(x - 3)",
          "explanation": "Multiplying through turns the identity into a polynomial comparison.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare coefficients",
          "workingLatex": "2x^{2} - x - 2 = (2)x^{2} + (-1)x + (-2)",
          "explanation": "Matching powers of $x$ determines the unknown constants.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for the constants",
          "workingLatex": "A=1,\\quad B=1,\\quad C=2",
          "explanation": "These values make the numerator identity true for every $x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rewrite the integrand",
          "workingLatex": "\\frac{2x^{2} - x - 2}{(x - 3)(x^{2} + 4)} = \\frac{1}{x - 3} + \\frac{x + 2}{x^{2} + 4}",
          "explanation": "The integral is now a sum of standard simpler integrals.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Integrate the linear-factor term",
          "workingLatex": "\\int \\frac{1}{x - 3}\\,dx = \\ln|x - 3|",
          "explanation": "The integral of $1/(x-p)$ is a logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Split the quadratic numerator",
          "workingLatex": "\\int \\frac{x + 2}{x^{2} + 4}\\,dx = \\int \\frac{1x}{x^{2} + 4}\\,dx + \\int \\frac{2}{x^{2} + 4}\\,dx",
          "explanation": "The $x$ term produces a logarithm and the constant term produces an arctangent.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Integrate the quadratic terms",
          "workingLatex": "\\int \\frac{x + 2}{x^{2} + 4}\\,dx = \\frac{1}{2}\\ln(x^{2} + 4) + \\arctan\\left(\\frac{x}{2}\\right)",
          "explanation": "These are the standard results for $x/(x^2+a^2)$ and $1/(x^2+a^2)$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Combine the antiderivative",
          "workingLatex": "\\ln|x - 3| + \\frac{1}{2}\\ln(x^{2} + 4) + \\arctan\\left(\\frac{x}{2}\\right) + C",
          "explanation": "Adding the three contributions gives the required indefinite integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\ln|x - 3| + \\frac{1}{2}\\ln(x^{2} + 4) + \\arctan\\left(\\frac{x}{2}\\right) + C$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Further integration",
    "subtopicId": "fm.y2.pure.further-integration",
    "questionDiagram": null,
    "id": "fm.y2.pure.further-integration.q046",
    "tags": [
      "partial-fractions",
      "quadratic-factor",
      "arctangent"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Use partial fractions to find $\\displaystyle\\int \\frac{5x^{2} + 15}{(x + 1)(x^{2} + 9)}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up partial fractions",
          "workingLatex": "\\frac{5x^{2} + 15}{(x + 1)(x^{2} + 9)} = \\frac{A}{x + 1} + \\frac{Bx + C}{x^{2} + 9}",
          "explanation": "A linear factor gives a constant numerator, while an irreducible quadratic needs a linear numerator.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Clear denominators",
          "workingLatex": "5x^{2} + 15 = A(x^{2} + 9) + (Bx+C)(x + 1)",
          "explanation": "Multiplying through turns the identity into a polynomial comparison.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare coefficients",
          "workingLatex": "5x^{2} + 15 = (5)x^{2} + (0)x + (15)",
          "explanation": "Matching powers of $x$ determines the unknown constants.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for the constants",
          "workingLatex": "A=2,\\quad B=3,\\quad C=-3",
          "explanation": "These values make the numerator identity true for every $x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rewrite the integrand",
          "workingLatex": "\\frac{5x^{2} + 15}{(x + 1)(x^{2} + 9)} = \\frac{2}{x + 1} + \\frac{3x - 3}{x^{2} + 9}",
          "explanation": "The integral is now a sum of standard simpler integrals.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Integrate the linear-factor term",
          "workingLatex": "\\int \\frac{2}{x + 1}\\,dx = 2\\ln|x + 1|",
          "explanation": "The integral of $1/(x-p)$ is a logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Split the quadratic numerator",
          "workingLatex": "\\int \\frac{3x - 3}{x^{2} + 9}\\,dx = \\int \\frac{3x}{x^{2} + 9}\\,dx + \\int \\frac{-3}{x^{2} + 9}\\,dx",
          "explanation": "The $x$ term produces a logarithm and the constant term produces an arctangent.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Integrate the quadratic terms",
          "workingLatex": "\\int \\frac{3x - 3}{x^{2} + 9}\\,dx = \\frac{3}{2}\\ln(x^{2} + 9) - \\arctan\\left(\\frac{x}{3}\\right)",
          "explanation": "These are the standard results for $x/(x^2+a^2)$ and $1/(x^2+a^2)$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Combine the antiderivative",
          "workingLatex": "2\\ln|x + 1| + \\frac{3}{2}\\ln(x^{2} + 9) - \\arctan\\left(\\frac{x}{3}\\right) + C",
          "explanation": "Adding the three contributions gives the required indefinite integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$2\\ln|x + 1| + \\frac{3}{2}\\ln(x^{2} + 9) - \\arctan\\left(\\frac{x}{3}\\right) + C$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Further integration",
    "subtopicId": "fm.y2.pure.further-integration",
    "questionDiagram": null,
    "id": "fm.y2.pure.further-integration.q047",
    "tags": [
      "partial-fractions",
      "quadratic-factor",
      "arctangent"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Use partial fractions to find $\\displaystyle\\int \\frac{x^{2} + 6x - 12}{(x + 2)(x^{2} + 16)}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up partial fractions",
          "workingLatex": "\\frac{x^{2} + 6x - 12}{(x + 2)(x^{2} + 16)} = \\frac{A}{x + 2} + \\frac{Bx + C}{x^{2} + 16}",
          "explanation": "A linear factor gives a constant numerator, while an irreducible quadratic needs a linear numerator.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Clear denominators",
          "workingLatex": "x^{2} + 6x - 12 = A(x^{2} + 16) + (Bx+C)(x + 2)",
          "explanation": "Multiplying through turns the identity into a polynomial comparison.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare coefficients",
          "workingLatex": "x^{2} + 6x - 12 = (1)x^{2} + (6)x + (-12)",
          "explanation": "Matching powers of $x$ determines the unknown constants.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for the constants",
          "workingLatex": "A=-1,\\quad B=2,\\quad C=2",
          "explanation": "These values make the numerator identity true for every $x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rewrite the integrand",
          "workingLatex": "\\frac{x^{2} + 6x - 12}{(x + 2)(x^{2} + 16)} = \\frac{-1}{x + 2} + \\frac{2x + 2}{x^{2} + 16}",
          "explanation": "The integral is now a sum of standard simpler integrals.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Integrate the linear-factor term",
          "workingLatex": "\\int \\frac{-1}{x + 2}\\,dx = -\\ln|x + 2|",
          "explanation": "The integral of $1/(x-p)$ is a logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Split the quadratic numerator",
          "workingLatex": "\\int \\frac{2x + 2}{x^{2} + 16}\\,dx = \\int \\frac{2x}{x^{2} + 16}\\,dx + \\int \\frac{2}{x^{2} + 16}\\,dx",
          "explanation": "The $x$ term produces a logarithm and the constant term produces an arctangent.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Integrate the quadratic terms",
          "workingLatex": "\\int \\frac{2x + 2}{x^{2} + 16}\\,dx = \\ln(x^{2} + 16) + \\frac{1}{2}\\arctan\\left(\\frac{x}{4}\\right)",
          "explanation": "These are the standard results for $x/(x^2+a^2)$ and $1/(x^2+a^2)$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Combine the antiderivative",
          "workingLatex": "-\\ln|x + 2| + \\ln(x^{2} + 16) + \\frac{1}{2}\\arctan\\left(\\frac{x}{4}\\right) + C",
          "explanation": "Adding the three contributions gives the required indefinite integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$-\\ln|x + 2| + \\ln(x^{2} + 16) + \\frac{1}{2}\\arctan\\left(\\frac{x}{4}\\right) + C$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Further integration",
    "subtopicId": "fm.y2.pure.further-integration",
    "questionDiagram": null,
    "id": "fm.y2.pure.further-integration.q048",
    "tags": [
      "partial-fractions",
      "quadratic-factor",
      "arctangent"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Use partial fractions to find $\\displaystyle\\int \\frac{x^{2} - 9x + 66}{(x + 3)(x^{2} + 25)}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up partial fractions",
          "workingLatex": "\\frac{x^{2} - 9x + 66}{(x + 3)(x^{2} + 25)} = \\frac{A}{x + 3} + \\frac{Bx + C}{x^{2} + 25}",
          "explanation": "A linear factor gives a constant numerator, while an irreducible quadratic needs a linear numerator.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Clear denominators",
          "workingLatex": "x^{2} - 9x + 66 = A(x^{2} + 25) + (Bx+C)(x + 3)",
          "explanation": "Multiplying through turns the identity into a polynomial comparison.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare coefficients",
          "workingLatex": "x^{2} - 9x + 66 = (1)x^{2} + (-9)x + (66)",
          "explanation": "Matching powers of $x$ determines the unknown constants.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for the constants",
          "workingLatex": "A=3,\\quad B=-2,\\quad C=-3",
          "explanation": "These values make the numerator identity true for every $x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rewrite the integrand",
          "workingLatex": "\\frac{x^{2} - 9x + 66}{(x + 3)(x^{2} + 25)} = \\frac{3}{x + 3} + \\frac{-2x - 3}{x^{2} + 25}",
          "explanation": "The integral is now a sum of standard simpler integrals.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Integrate the linear-factor term",
          "workingLatex": "\\int \\frac{3}{x + 3}\\,dx = 3\\ln|x + 3|",
          "explanation": "The integral of $1/(x-p)$ is a logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Split the quadratic numerator",
          "workingLatex": "\\int \\frac{-2x - 3}{x^{2} + 25}\\,dx = \\int \\frac{-2x}{x^{2} + 25}\\,dx + \\int \\frac{-3}{x^{2} + 25}\\,dx",
          "explanation": "The $x$ term produces a logarithm and the constant term produces an arctangent.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Integrate the quadratic terms",
          "workingLatex": "\\int \\frac{-2x - 3}{x^{2} + 25}\\,dx = -\\ln(x^{2} + 25) - \\frac{3}{5}\\arctan\\left(\\frac{x}{5}\\right)",
          "explanation": "These are the standard results for $x/(x^2+a^2)$ and $1/(x^2+a^2)$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Combine the antiderivative",
          "workingLatex": "3\\ln|x + 3| - \\ln(x^{2} + 25) - \\frac{3}{5}\\arctan\\left(\\frac{x}{5}\\right) + C",
          "explanation": "Adding the three contributions gives the required indefinite integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$3\\ln|x + 3| - \\ln(x^{2} + 25) - \\frac{3}{5}\\arctan\\left(\\frac{x}{5}\\right) + C$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Further integration",
    "subtopicId": "fm.y2.pure.further-integration",
    "questionDiagram": null,
    "id": "fm.y2.pure.further-integration.q049",
    "tags": [
      "partial-fractions",
      "quadratic-factor",
      "arctangent"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Use partial fractions to find $\\displaystyle\\int \\frac{-3x^{2} + 3x - 4}{(x - 1)(x^{2} + 1)}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up partial fractions",
          "workingLatex": "\\frac{-3x^{2} + 3x - 4}{(x - 1)(x^{2} + 1)} = \\frac{A}{x - 1} + \\frac{Bx + C}{x^{2} + 1}",
          "explanation": "A linear factor gives a constant numerator, while an irreducible quadratic needs a linear numerator.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Clear denominators",
          "workingLatex": "-3x^{2} + 3x - 4 = A(x^{2} + 1) + (Bx+C)(x - 1)",
          "explanation": "Multiplying through turns the identity into a polynomial comparison.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare coefficients",
          "workingLatex": "-3x^{2} + 3x - 4 = (-3)x^{2} + (3)x + (-4)",
          "explanation": "Matching powers of $x$ determines the unknown constants.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for the constants",
          "workingLatex": "A=-2,\\quad B=-1,\\quad C=2",
          "explanation": "These values make the numerator identity true for every $x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rewrite the integrand",
          "workingLatex": "\\frac{-3x^{2} + 3x - 4}{(x - 1)(x^{2} + 1)} = \\frac{-2}{x - 1} + \\frac{-x + 2}{x^{2} + 1}",
          "explanation": "The integral is now a sum of standard simpler integrals.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Integrate the linear-factor term",
          "workingLatex": "\\int \\frac{-2}{x - 1}\\,dx = -2\\ln|x - 1|",
          "explanation": "The integral of $1/(x-p)$ is a logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Split the quadratic numerator",
          "workingLatex": "\\int \\frac{-x + 2}{x^{2} + 1}\\,dx = \\int \\frac{-1x}{x^{2} + 1}\\,dx + \\int \\frac{2}{x^{2} + 1}\\,dx",
          "explanation": "The $x$ term produces a logarithm and the constant term produces an arctangent.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Integrate the quadratic terms",
          "workingLatex": "\\int \\frac{-x + 2}{x^{2} + 1}\\,dx = -\\frac{1}{2}\\ln(x^{2} + 1) + 2\\arctan\\left(x\\right)",
          "explanation": "These are the standard results for $x/(x^2+a^2)$ and $1/(x^2+a^2)$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Combine the antiderivative",
          "workingLatex": "-2\\ln|x - 1| - \\frac{1}{2}\\ln(x^{2} + 1) + 2\\arctan\\left(x\\right) + C",
          "explanation": "Adding the three contributions gives the required indefinite integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$-2\\ln|x - 1| - \\frac{1}{2}\\ln(x^{2} + 1) + 2\\arctan\\left(x\\right) + C$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Further integration",
    "subtopicId": "fm.y2.pure.further-integration",
    "questionDiagram": null,
    "id": "fm.y2.pure.further-integration.q050",
    "tags": [
      "partial-fractions",
      "quadratic-factor",
      "arctangent"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Use partial fractions to find $\\displaystyle\\int \\frac{2x^{2} - 5x + 10}{(x - 2)(x^{2} + 4)}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up partial fractions",
          "workingLatex": "\\frac{2x^{2} - 5x + 10}{(x - 2)(x^{2} + 4)} = \\frac{A}{x - 2} + \\frac{Bx + C}{x^{2} + 4}",
          "explanation": "A linear factor gives a constant numerator, while an irreducible quadratic needs a linear numerator.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Clear denominators",
          "workingLatex": "2x^{2} - 5x + 10 = A(x^{2} + 4) + (Bx+C)(x - 2)",
          "explanation": "Multiplying through turns the identity into a polynomial comparison.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare coefficients",
          "workingLatex": "2x^{2} - 5x + 10 = (2)x^{2} + (-5)x + (10)",
          "explanation": "Matching powers of $x$ determines the unknown constants.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for the constants",
          "workingLatex": "A=1,\\quad B=1,\\quad C=-3",
          "explanation": "These values make the numerator identity true for every $x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rewrite the integrand",
          "workingLatex": "\\frac{2x^{2} - 5x + 10}{(x - 2)(x^{2} + 4)} = \\frac{1}{x - 2} + \\frac{x - 3}{x^{2} + 4}",
          "explanation": "The integral is now a sum of standard simpler integrals.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Integrate the linear-factor term",
          "workingLatex": "\\int \\frac{1}{x - 2}\\,dx = \\ln|x - 2|",
          "explanation": "The integral of $1/(x-p)$ is a logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Split the quadratic numerator",
          "workingLatex": "\\int \\frac{x - 3}{x^{2} + 4}\\,dx = \\int \\frac{1x}{x^{2} + 4}\\,dx + \\int \\frac{-3}{x^{2} + 4}\\,dx",
          "explanation": "The $x$ term produces a logarithm and the constant term produces an arctangent.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Integrate the quadratic terms",
          "workingLatex": "\\int \\frac{x - 3}{x^{2} + 4}\\,dx = \\frac{1}{2}\\ln(x^{2} + 4) - \\frac{3}{2}\\arctan\\left(\\frac{x}{2}\\right)",
          "explanation": "These are the standard results for $x/(x^2+a^2)$ and $1/(x^2+a^2)$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Combine the antiderivative",
          "workingLatex": "\\ln|x - 2| + \\frac{1}{2}\\ln(x^{2} + 4) - \\frac{3}{2}\\arctan\\left(\\frac{x}{2}\\right) + C",
          "explanation": "Adding the three contributions gives the required indefinite integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\ln|x - 2| + \\frac{1}{2}\\ln(x^{2} + 4) - \\frac{3}{2}\\arctan\\left(\\frac{x}{2}\\right) + C$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Further integration",
    "subtopicId": "fm.y2.pure.further-integration",
    "questionDiagram": null,
    "id": "fm.y2.pure.further-integration.q051",
    "tags": [
      "partial-fractions",
      "quadratic-factor",
      "arctangent"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Use partial fractions to find $\\displaystyle\\int \\frac{5x^{2} - 7x + 12}{(x - 3)(x^{2} + 9)}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up partial fractions",
          "workingLatex": "\\frac{5x^{2} - 7x + 12}{(x - 3)(x^{2} + 9)} = \\frac{A}{x - 3} + \\frac{Bx + C}{x^{2} + 9}",
          "explanation": "A linear factor gives a constant numerator, while an irreducible quadratic needs a linear numerator.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Clear denominators",
          "workingLatex": "5x^{2} - 7x + 12 = A(x^{2} + 9) + (Bx+C)(x - 3)",
          "explanation": "Multiplying through turns the identity into a polynomial comparison.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare coefficients",
          "workingLatex": "5x^{2} - 7x + 12 = (5)x^{2} + (-7)x + (12)",
          "explanation": "Matching powers of $x$ determines the unknown constants.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for the constants",
          "workingLatex": "A=2,\\quad B=3,\\quad C=2",
          "explanation": "These values make the numerator identity true for every $x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rewrite the integrand",
          "workingLatex": "\\frac{5x^{2} - 7x + 12}{(x - 3)(x^{2} + 9)} = \\frac{2}{x - 3} + \\frac{3x + 2}{x^{2} + 9}",
          "explanation": "The integral is now a sum of standard simpler integrals.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Integrate the linear-factor term",
          "workingLatex": "\\int \\frac{2}{x - 3}\\,dx = 2\\ln|x - 3|",
          "explanation": "The integral of $1/(x-p)$ is a logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Split the quadratic numerator",
          "workingLatex": "\\int \\frac{3x + 2}{x^{2} + 9}\\,dx = \\int \\frac{3x}{x^{2} + 9}\\,dx + \\int \\frac{2}{x^{2} + 9}\\,dx",
          "explanation": "The $x$ term produces a logarithm and the constant term produces an arctangent.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Integrate the quadratic terms",
          "workingLatex": "\\int \\frac{3x + 2}{x^{2} + 9}\\,dx = \\frac{3}{2}\\ln(x^{2} + 9) + \\frac{2}{3}\\arctan\\left(\\frac{x}{3}\\right)",
          "explanation": "These are the standard results for $x/(x^2+a^2)$ and $1/(x^2+a^2)$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Combine the antiderivative",
          "workingLatex": "2\\ln|x - 3| + \\frac{3}{2}\\ln(x^{2} + 9) + \\frac{2}{3}\\arctan\\left(\\frac{x}{3}\\right) + C",
          "explanation": "Adding the three contributions gives the required indefinite integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$2\\ln|x - 3| + \\frac{3}{2}\\ln(x^{2} + 9) + \\frac{2}{3}\\arctan\\left(\\frac{x}{3}\\right) + C$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Further integration",
    "subtopicId": "fm.y2.pure.further-integration",
    "questionDiagram": null,
    "id": "fm.y2.pure.further-integration.q052",
    "tags": [
      "partial-fractions",
      "quadratic-factor",
      "arctangent"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Use partial fractions to find $\\displaystyle\\int \\frac{x^{2} - x - 19}{(x + 1)(x^{2} + 16)}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up partial fractions",
          "workingLatex": "\\frac{x^{2} - x - 19}{(x + 1)(x^{2} + 16)} = \\frac{A}{x + 1} + \\frac{Bx + C}{x^{2} + 16}",
          "explanation": "A linear factor gives a constant numerator, while an irreducible quadratic needs a linear numerator.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Clear denominators",
          "workingLatex": "x^{2} - x - 19 = A(x^{2} + 16) + (Bx+C)(x + 1)",
          "explanation": "Multiplying through turns the identity into a polynomial comparison.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare coefficients",
          "workingLatex": "x^{2} - x - 19 = (1)x^{2} + (-1)x + (-19)",
          "explanation": "Matching powers of $x$ determines the unknown constants.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for the constants",
          "workingLatex": "A=-1,\\quad B=2,\\quad C=-3",
          "explanation": "These values make the numerator identity true for every $x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rewrite the integrand",
          "workingLatex": "\\frac{x^{2} - x - 19}{(x + 1)(x^{2} + 16)} = \\frac{-1}{x + 1} + \\frac{2x - 3}{x^{2} + 16}",
          "explanation": "The integral is now a sum of standard simpler integrals.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Integrate the linear-factor term",
          "workingLatex": "\\int \\frac{-1}{x + 1}\\,dx = -\\ln|x + 1|",
          "explanation": "The integral of $1/(x-p)$ is a logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Split the quadratic numerator",
          "workingLatex": "\\int \\frac{2x - 3}{x^{2} + 16}\\,dx = \\int \\frac{2x}{x^{2} + 16}\\,dx + \\int \\frac{-3}{x^{2} + 16}\\,dx",
          "explanation": "The $x$ term produces a logarithm and the constant term produces an arctangent.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Integrate the quadratic terms",
          "workingLatex": "\\int \\frac{2x - 3}{x^{2} + 16}\\,dx = \\ln(x^{2} + 16) - \\frac{3}{4}\\arctan\\left(\\frac{x}{4}\\right)",
          "explanation": "These are the standard results for $x/(x^2+a^2)$ and $1/(x^2+a^2)$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Combine the antiderivative",
          "workingLatex": "-\\ln|x + 1| + \\ln(x^{2} + 16) - \\frac{3}{4}\\arctan\\left(\\frac{x}{4}\\right) + C",
          "explanation": "Adding the three contributions gives the required indefinite integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$-\\ln|x + 1| + \\ln(x^{2} + 16) - \\frac{3}{4}\\arctan\\left(\\frac{x}{4}\\right) + C$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Further integration",
    "subtopicId": "fm.y2.pure.further-integration",
    "questionDiagram": null,
    "id": "fm.y2.pure.further-integration.q053",
    "tags": [
      "partial-fractions",
      "quadratic-factor",
      "arctangent"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Use partial fractions to find $\\displaystyle\\int \\frac{x^{2} - 2x + 79}{(x + 2)(x^{2} + 25)}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up partial fractions",
          "workingLatex": "\\frac{x^{2} - 2x + 79}{(x + 2)(x^{2} + 25)} = \\frac{A}{x + 2} + \\frac{Bx + C}{x^{2} + 25}",
          "explanation": "A linear factor gives a constant numerator, while an irreducible quadratic needs a linear numerator.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Clear denominators",
          "workingLatex": "x^{2} - 2x + 79 = A(x^{2} + 25) + (Bx+C)(x + 2)",
          "explanation": "Multiplying through turns the identity into a polynomial comparison.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare coefficients",
          "workingLatex": "x^{2} - 2x + 79 = (1)x^{2} + (-2)x + (79)",
          "explanation": "Matching powers of $x$ determines the unknown constants.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for the constants",
          "workingLatex": "A=3,\\quad B=-2,\\quad C=2",
          "explanation": "These values make the numerator identity true for every $x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rewrite the integrand",
          "workingLatex": "\\frac{x^{2} - 2x + 79}{(x + 2)(x^{2} + 25)} = \\frac{3}{x + 2} + \\frac{-2x + 2}{x^{2} + 25}",
          "explanation": "The integral is now a sum of standard simpler integrals.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Integrate the linear-factor term",
          "workingLatex": "\\int \\frac{3}{x + 2}\\,dx = 3\\ln|x + 2|",
          "explanation": "The integral of $1/(x-p)$ is a logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Split the quadratic numerator",
          "workingLatex": "\\int \\frac{-2x + 2}{x^{2} + 25}\\,dx = \\int \\frac{-2x}{x^{2} + 25}\\,dx + \\int \\frac{2}{x^{2} + 25}\\,dx",
          "explanation": "The $x$ term produces a logarithm and the constant term produces an arctangent.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Integrate the quadratic terms",
          "workingLatex": "\\int \\frac{-2x + 2}{x^{2} + 25}\\,dx = -\\ln(x^{2} + 25) + \\frac{2}{5}\\arctan\\left(\\frac{x}{5}\\right)",
          "explanation": "These are the standard results for $x/(x^2+a^2)$ and $1/(x^2+a^2)$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Combine the antiderivative",
          "workingLatex": "3\\ln|x + 2| - \\ln(x^{2} + 25) + \\frac{2}{5}\\arctan\\left(\\frac{x}{5}\\right) + C",
          "explanation": "Adding the three contributions gives the required indefinite integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$3\\ln|x + 2| - \\ln(x^{2} + 25) + \\frac{2}{5}\\arctan\\left(\\frac{x}{5}\\right) + C$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Further integration",
    "subtopicId": "fm.y2.pure.further-integration",
    "questionDiagram": null,
    "id": "fm.y2.pure.further-integration.q054",
    "tags": [
      "partial-fractions",
      "quadratic-factor",
      "arctangent"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Use partial fractions to find $\\displaystyle\\int \\frac{-3x^{2} - 6x - 11}{(x + 3)(x^{2} + 1)}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up partial fractions",
          "workingLatex": "\\frac{-3x^{2} - 6x - 11}{(x + 3)(x^{2} + 1)} = \\frac{A}{x + 3} + \\frac{Bx + C}{x^{2} + 1}",
          "explanation": "A linear factor gives a constant numerator, while an irreducible quadratic needs a linear numerator.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Clear denominators",
          "workingLatex": "-3x^{2} - 6x - 11 = A(x^{2} + 1) + (Bx+C)(x + 3)",
          "explanation": "Multiplying through turns the identity into a polynomial comparison.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare coefficients",
          "workingLatex": "-3x^{2} - 6x - 11 = (-3)x^{2} + (-6)x + (-11)",
          "explanation": "Matching powers of $x$ determines the unknown constants.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for the constants",
          "workingLatex": "A=-2,\\quad B=-1,\\quad C=-3",
          "explanation": "These values make the numerator identity true for every $x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rewrite the integrand",
          "workingLatex": "\\frac{-3x^{2} - 6x - 11}{(x + 3)(x^{2} + 1)} = \\frac{-2}{x + 3} + \\frac{-x - 3}{x^{2} + 1}",
          "explanation": "The integral is now a sum of standard simpler integrals.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Integrate the linear-factor term",
          "workingLatex": "\\int \\frac{-2}{x + 3}\\,dx = -2\\ln|x + 3|",
          "explanation": "The integral of $1/(x-p)$ is a logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Split the quadratic numerator",
          "workingLatex": "\\int \\frac{-x - 3}{x^{2} + 1}\\,dx = \\int \\frac{-1x}{x^{2} + 1}\\,dx + \\int \\frac{-3}{x^{2} + 1}\\,dx",
          "explanation": "The $x$ term produces a logarithm and the constant term produces an arctangent.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Integrate the quadratic terms",
          "workingLatex": "\\int \\frac{-x - 3}{x^{2} + 1}\\,dx = -\\frac{1}{2}\\ln(x^{2} + 1) - 3\\arctan\\left(x\\right)",
          "explanation": "These are the standard results for $x/(x^2+a^2)$ and $1/(x^2+a^2)$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Combine the antiderivative",
          "workingLatex": "-2\\ln|x + 3| - \\frac{1}{2}\\ln(x^{2} + 1) - 3\\arctan\\left(x\\right) + C",
          "explanation": "Adding the three contributions gives the required indefinite integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$-2\\ln|x + 3| - \\frac{1}{2}\\ln(x^{2} + 1) - 3\\arctan\\left(x\\right) + C$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Further integration",
    "subtopicId": "fm.y2.pure.further-integration",
    "questionDiagram": null,
    "id": "fm.y2.pure.further-integration.q055",
    "tags": [
      "substitution",
      "partial-fractions",
      "definite-integral"
    ],
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "questionText": "Evaluate exactly $\\displaystyle\\int_0^{1} \\frac{2x(-2x^{2} + 7)}{(x^{2} + 3)(x^{4} + 4)}\\,dx$ using the substitution $u=x^2$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the substitution",
          "workingLatex": "u=x^{2}",
          "explanation": "The integrand contains $2x\\,dx$, which is exactly the differential created by $u=x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate",
          "workingLatex": "du=2x\\,dx",
          "explanation": "This replacement removes the extra factor of $x$ cleanly.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Change the limits",
          "workingLatex": "x=0\\Rightarrow u=0,\\qquad x=1\\Rightarrow u=1",
          "explanation": "For a definite integral, changing the limits avoids converting back to $x$ later.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rewrite the integral",
          "workingLatex": "I=\\int_0^{1} \\frac{-2u + 7}{(u + 3)(u^{2}+4)}\\,du",
          "explanation": "After substitution the problem is a rational integral in $u$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set up partial fractions",
          "workingLatex": "\\frac{-2u + 7}{(u + 3)(u^{2}+4)}=\\frac{A}{u + 3}+\\frac{Bu+C}{u^{2}+4}",
          "explanation": "The quadratic factor is irreducible, so its numerator must be linear.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Clear denominators",
          "workingLatex": "-2u + 7=A(u^{2}+4)+(Bu+C)(u + 3)",
          "explanation": "Clearing denominators lets us compare polynomial coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compare coefficients",
          "workingLatex": "-2u + 7=(0)u^{2}+(-2)u+(7)",
          "explanation": "The coefficients of like powers of $u$ must match.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for constants",
          "workingLatex": "A=1,\\quad B=-1,\\quad C=1",
          "explanation": "These constants give an equivalent sum of simpler fractions.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Split the integral",
          "workingLatex": "I=\\int_0^{1}\\frac{1}{u + 3}\\,du+\\int_0^{1}\\frac{-1u+1}{u^{2}+4}\\,du",
          "explanation": "Each part now matches a standard logarithm or arctangent form.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Integrate the linear factor",
          "workingLatex": "\\int_0^{1}\\frac{1}{u + 3}\\,du=\\ln\\left(\\frac{4}{3}\\right)",
          "explanation": "A shifted reciprocal integrates to a logarithm evaluated at the new limits.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Integrate the $u$ term",
          "workingLatex": "\\int_0^{1}\\frac{-1u}{u^{2}+4}\\,du=-\\frac{1}{2}\\ln\\left(\\frac{5}{4}\\right)",
          "explanation": "The derivative of $u^2+a^2$ is proportional to $u$, producing a logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Integrate the constant term",
          "workingLatex": "\\int_0^{1}\\frac{1}{u^{2}+4}\\,du=\\frac{1}{2}\\left[\\arctan\\left(\\frac{1}{2}\\right)-\\arctan 0\\right]",
          "explanation": "The remaining reciprocal quadratic gives an arctangent contribution.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Combine the exact value",
          "workingLatex": "\\ln\\left(\\frac{4}{3}\\right) - \\frac{1}{2}\\ln\\left(\\frac{5}{4}\\right) + \\frac{1}{2}\\left[\\arctan\\left(\\frac{1}{2}\\right)-\\arctan 0\\right]",
          "explanation": "Adding the three evaluated pieces gives the exact value of the original definite integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\ln\\left(\\frac{4}{3}\\right) - \\frac{1}{2}\\ln\\left(\\frac{5}{4}\\right) + \\frac{1}{2}\\left[\\arctan\\left(\\frac{1}{2}\\right)-\\arctan 0\\right]$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Further integration",
    "subtopicId": "fm.y2.pure.further-integration",
    "questionDiagram": null,
    "id": "fm.y2.pure.further-integration.q056",
    "tags": [
      "substitution",
      "partial-fractions",
      "definite-integral"
    ],
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "questionText": "Evaluate exactly $\\displaystyle\\int_0^{\\sqrt{2}} \\frac{2x(5x^{4} + 10x^{2} + 10)}{(x^{2} + 4)(x^{4} + 9)}\\,dx$ using the substitution $u=x^2$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the substitution",
          "workingLatex": "u=x^{2}",
          "explanation": "The integrand contains $2x\\,dx$, which is exactly the differential created by $u=x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate",
          "workingLatex": "du=2x\\,dx",
          "explanation": "This replacement removes the extra factor of $x$ cleanly.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Change the limits",
          "workingLatex": "x=0\\Rightarrow u=0,\\qquad x=\\sqrt{2}\\Rightarrow u=2",
          "explanation": "For a definite integral, changing the limits avoids converting back to $x$ later.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rewrite the integral",
          "workingLatex": "I=\\int_0^{2} \\frac{5u^{2} + 10u + 10}{(u + 4)(u^{2}+9)}\\,du",
          "explanation": "After substitution the problem is a rational integral in $u$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set up partial fractions",
          "workingLatex": "\\frac{5u^{2} + 10u + 10}{(u + 4)(u^{2}+9)}=\\frac{A}{u + 4}+\\frac{Bu+C}{u^{2}+9}",
          "explanation": "The quadratic factor is irreducible, so its numerator must be linear.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Clear denominators",
          "workingLatex": "5u^{2} + 10u + 10=A(u^{2}+9)+(Bu+C)(u + 4)",
          "explanation": "Clearing denominators lets us compare polynomial coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compare coefficients",
          "workingLatex": "5u^{2} + 10u + 10=(5)u^{2}+(10)u+(10)",
          "explanation": "The coefficients of like powers of $u$ must match.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for constants",
          "workingLatex": "A=2,\\quad B=3,\\quad C=-2",
          "explanation": "These constants give an equivalent sum of simpler fractions.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Split the integral",
          "workingLatex": "I=\\int_0^{2}\\frac{2}{u + 4}\\,du+\\int_0^{2}\\frac{3u+-2}{u^{2}+9}\\,du",
          "explanation": "Each part now matches a standard logarithm or arctangent form.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Integrate the linear factor",
          "workingLatex": "\\int_0^{2}\\frac{2}{u + 4}\\,du=2\\ln\\left(\\frac{6}{4}\\right)",
          "explanation": "A shifted reciprocal integrates to a logarithm evaluated at the new limits.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Integrate the $u$ term",
          "workingLatex": "\\int_0^{2}\\frac{3u}{u^{2}+9}\\,du=\\frac{3}{2}\\ln\\left(\\frac{13}{9}\\right)",
          "explanation": "The derivative of $u^2+a^2$ is proportional to $u$, producing a logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Integrate the constant term",
          "workingLatex": "\\int_0^{2}\\frac{-2}{u^{2}+9}\\,du=-\\frac{2}{3}\\left[\\arctan\\left(\\frac{2}{3}\\right)-\\arctan 0\\right]",
          "explanation": "The remaining reciprocal quadratic gives an arctangent contribution.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Combine the exact value",
          "workingLatex": "2\\ln\\left(\\frac{6}{4}\\right) + \\frac{3}{2}\\ln\\left(\\frac{13}{9}\\right) - \\frac{2}{3}\\left[\\arctan\\left(\\frac{2}{3}\\right)-\\arctan 0\\right]",
          "explanation": "Adding the three evaluated pieces gives the exact value of the original definite integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$2\\ln\\left(\\frac{6}{4}\\right) + \\frac{3}{2}\\ln\\left(\\frac{13}{9}\\right) - \\frac{2}{3}\\left[\\arctan\\left(\\frac{2}{3}\\right)-\\arctan 0\\right]$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Further integration",
    "subtopicId": "fm.y2.pure.further-integration",
    "questionDiagram": null,
    "id": "fm.y2.pure.further-integration.q057",
    "tags": [
      "substitution",
      "partial-fractions",
      "definite-integral"
    ],
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "questionText": "Evaluate exactly $\\displaystyle\\int_0^{\\sqrt{3}} \\frac{2x(-3x^{4} + 3x^{2} - 11)}{(x^{2} + 1)(x^{4} + 16)}\\,dx$ using the substitution $u=x^2$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the substitution",
          "workingLatex": "u=x^{2}",
          "explanation": "The integrand contains $2x\\,dx$, which is exactly the differential created by $u=x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate",
          "workingLatex": "du=2x\\,dx",
          "explanation": "This replacement removes the extra factor of $x$ cleanly.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Change the limits",
          "workingLatex": "x=0\\Rightarrow u=0,\\qquad x=\\sqrt{3}\\Rightarrow u=3",
          "explanation": "For a definite integral, changing the limits avoids converting back to $x$ later.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rewrite the integral",
          "workingLatex": "I=\\int_0^{3} \\frac{-3u^{2} + 3u - 11}{(u + 1)(u^{2}+16)}\\,du",
          "explanation": "After substitution the problem is a rational integral in $u$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set up partial fractions",
          "workingLatex": "\\frac{-3u^{2} + 3u - 11}{(u + 1)(u^{2}+16)}=\\frac{A}{u + 1}+\\frac{Bu+C}{u^{2}+16}",
          "explanation": "The quadratic factor is irreducible, so its numerator must be linear.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Clear denominators",
          "workingLatex": "-3u^{2} + 3u - 11=A(u^{2}+16)+(Bu+C)(u + 1)",
          "explanation": "Clearing denominators lets us compare polynomial coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compare coefficients",
          "workingLatex": "-3u^{2} + 3u - 11=(-3)u^{2}+(3)u+(-11)",
          "explanation": "The coefficients of like powers of $u$ must match.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for constants",
          "workingLatex": "A=-1,\\quad B=-2,\\quad C=5",
          "explanation": "These constants give an equivalent sum of simpler fractions.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Split the integral",
          "workingLatex": "I=\\int_0^{3}\\frac{-1}{u + 1}\\,du+\\int_0^{3}\\frac{-2u+5}{u^{2}+16}\\,du",
          "explanation": "Each part now matches a standard logarithm or arctangent form.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Integrate the linear factor",
          "workingLatex": "\\int_0^{3}\\frac{-1}{u + 1}\\,du=-\\ln\\left(\\frac{4}{1}\\right)",
          "explanation": "A shifted reciprocal integrates to a logarithm evaluated at the new limits.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Integrate the $u$ term",
          "workingLatex": "\\int_0^{3}\\frac{-2u}{u^{2}+16}\\,du=-\\ln\\left(\\frac{25}{16}\\right)",
          "explanation": "The derivative of $u^2+a^2$ is proportional to $u$, producing a logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Integrate the constant term",
          "workingLatex": "\\int_0^{3}\\frac{5}{u^{2}+16}\\,du=\\frac{5}{4}\\left[\\arctan\\left(\\frac{3}{4}\\right)-\\arctan 0\\right]",
          "explanation": "The remaining reciprocal quadratic gives an arctangent contribution.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Combine the exact value",
          "workingLatex": "-\\ln\\left(\\frac{4}{1}\\right) - \\ln\\left(\\frac{25}{16}\\right) + \\frac{5}{4}\\left[\\arctan\\left(\\frac{3}{4}\\right)-\\arctan 0\\right]",
          "explanation": "Adding the three evaluated pieces gives the exact value of the original definite integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$-\\ln\\left(\\frac{4}{1}\\right) - \\ln\\left(\\frac{25}{16}\\right) + \\frac{5}{4}\\left[\\arctan\\left(\\frac{3}{4}\\right)-\\arctan 0\\right]$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Further integration",
    "subtopicId": "fm.y2.pure.further-integration",
    "questionDiagram": null,
    "id": "fm.y2.pure.further-integration.q058",
    "tags": [
      "substitution",
      "partial-fractions",
      "definite-integral"
    ],
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "questionText": "Evaluate exactly $\\displaystyle\\int_0^{\\sqrt{4}} \\frac{2x(5x^{4} + 5x^{2} + 5)}{(x^{2} + 2)(x^{4} + 1)}\\,dx$ using the substitution $u=x^2$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the substitution",
          "workingLatex": "u=x^{2}",
          "explanation": "The integrand contains $2x\\,dx$, which is exactly the differential created by $u=x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate",
          "workingLatex": "du=2x\\,dx",
          "explanation": "This replacement removes the extra factor of $x$ cleanly.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Change the limits",
          "workingLatex": "x=0\\Rightarrow u=0,\\qquad x=\\sqrt{4}\\Rightarrow u=4",
          "explanation": "For a definite integral, changing the limits avoids converting back to $x$ later.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rewrite the integral",
          "workingLatex": "I=\\int_0^{4} \\frac{5u^{2} + 5u + 5}{(u + 2)(u^{2}+1)}\\,du",
          "explanation": "After substitution the problem is a rational integral in $u$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set up partial fractions",
          "workingLatex": "\\frac{5u^{2} + 5u + 5}{(u + 2)(u^{2}+1)}=\\frac{A}{u + 2}+\\frac{Bu+C}{u^{2}+1}",
          "explanation": "The quadratic factor is irreducible, so its numerator must be linear.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Clear denominators",
          "workingLatex": "5u^{2} + 5u + 5=A(u^{2}+1)+(Bu+C)(u + 2)",
          "explanation": "Clearing denominators lets us compare polynomial coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compare coefficients",
          "workingLatex": "5u^{2} + 5u + 5=(5)u^{2}+(5)u+(5)",
          "explanation": "The coefficients of like powers of $u$ must match.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for constants",
          "workingLatex": "A=3,\\quad B=2,\\quad C=1",
          "explanation": "These constants give an equivalent sum of simpler fractions.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Split the integral",
          "workingLatex": "I=\\int_0^{4}\\frac{3}{u + 2}\\,du+\\int_0^{4}\\frac{2u+1}{u^{2}+1}\\,du",
          "explanation": "Each part now matches a standard logarithm or arctangent form.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Integrate the linear factor",
          "workingLatex": "\\int_0^{4}\\frac{3}{u + 2}\\,du=3\\ln\\left(\\frac{6}{2}\\right)",
          "explanation": "A shifted reciprocal integrates to a logarithm evaluated at the new limits.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Integrate the $u$ term",
          "workingLatex": "\\int_0^{4}\\frac{2u}{u^{2}+1}\\,du=\\ln\\left(\\frac{17}{1}\\right)",
          "explanation": "The derivative of $u^2+a^2$ is proportional to $u$, producing a logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Integrate the constant term",
          "workingLatex": "\\int_0^{4}\\frac{1}{u^{2}+1}\\,du=\\left[\\arctan\\left(4\\right)-\\arctan 0\\right]",
          "explanation": "The remaining reciprocal quadratic gives an arctangent contribution.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Combine the exact value",
          "workingLatex": "3\\ln\\left(\\frac{6}{2}\\right) + \\ln\\left(\\frac{17}{1}\\right) + \\left[\\arctan\\left(4\\right)-\\arctan 0\\right]",
          "explanation": "Adding the three evaluated pieces gives the exact value of the original definite integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$3\\ln\\left(\\frac{6}{2}\\right) + \\ln\\left(\\frac{17}{1}\\right) + \\left[\\arctan\\left(4\\right)-\\arctan 0\\right]$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Further integration",
    "subtopicId": "fm.y2.pure.further-integration",
    "questionDiagram": null,
    "id": "fm.y2.pure.further-integration.q059",
    "tags": [
      "substitution",
      "partial-fractions",
      "definite-integral"
    ],
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "questionText": "Evaluate exactly $\\displaystyle\\int_0^{\\sqrt{5}} \\frac{2x(-5x^{2} - 2)}{(x^{2} + 3)(x^{4} + 4)}\\,dx$ using the substitution $u=x^2$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the substitution",
          "workingLatex": "u=x^{2}",
          "explanation": "The integrand contains $2x\\,dx$, which is exactly the differential created by $u=x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate",
          "workingLatex": "du=2x\\,dx",
          "explanation": "This replacement removes the extra factor of $x$ cleanly.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Change the limits",
          "workingLatex": "x=0\\Rightarrow u=0,\\qquad x=\\sqrt{5}\\Rightarrow u=5",
          "explanation": "For a definite integral, changing the limits avoids converting back to $x$ later.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rewrite the integral",
          "workingLatex": "I=\\int_0^{5} \\frac{-5u - 2}{(u + 3)(u^{2}+4)}\\,du",
          "explanation": "After substitution the problem is a rational integral in $u$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set up partial fractions",
          "workingLatex": "\\frac{-5u - 2}{(u + 3)(u^{2}+4)}=\\frac{A}{u + 3}+\\frac{Bu+C}{u^{2}+4}",
          "explanation": "The quadratic factor is irreducible, so its numerator must be linear.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Clear denominators",
          "workingLatex": "-5u - 2=A(u^{2}+4)+(Bu+C)(u + 3)",
          "explanation": "Clearing denominators lets us compare polynomial coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compare coefficients",
          "workingLatex": "-5u - 2=(0)u^{2}+(-5)u+(-2)",
          "explanation": "The coefficients of like powers of $u$ must match.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for constants",
          "workingLatex": "A=1,\\quad B=-1,\\quad C=-2",
          "explanation": "These constants give an equivalent sum of simpler fractions.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Split the integral",
          "workingLatex": "I=\\int_0^{5}\\frac{1}{u + 3}\\,du+\\int_0^{5}\\frac{-1u+-2}{u^{2}+4}\\,du",
          "explanation": "Each part now matches a standard logarithm or arctangent form.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Integrate the linear factor",
          "workingLatex": "\\int_0^{5}\\frac{1}{u + 3}\\,du=\\ln\\left(\\frac{8}{3}\\right)",
          "explanation": "A shifted reciprocal integrates to a logarithm evaluated at the new limits.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Integrate the $u$ term",
          "workingLatex": "\\int_0^{5}\\frac{-1u}{u^{2}+4}\\,du=-\\frac{1}{2}\\ln\\left(\\frac{29}{4}\\right)",
          "explanation": "The derivative of $u^2+a^2$ is proportional to $u$, producing a logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Integrate the constant term",
          "workingLatex": "\\int_0^{5}\\frac{-2}{u^{2}+4}\\,du=-\\left[\\arctan\\left(\\frac{5}{2}\\right)-\\arctan 0\\right]",
          "explanation": "The remaining reciprocal quadratic gives an arctangent contribution.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Combine the exact value",
          "workingLatex": "\\ln\\left(\\frac{8}{3}\\right) - \\frac{1}{2}\\ln\\left(\\frac{29}{4}\\right) - \\left[\\arctan\\left(\\frac{5}{2}\\right)-\\arctan 0\\right]",
          "explanation": "Adding the three evaluated pieces gives the exact value of the original definite integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\ln\\left(\\frac{8}{3}\\right) - \\frac{1}{2}\\ln\\left(\\frac{29}{4}\\right) - \\left[\\arctan\\left(\\frac{5}{2}\\right)-\\arctan 0\\right]$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Further integration",
    "subtopicId": "fm.y2.pure.further-integration",
    "questionDiagram": null,
    "id": "fm.y2.pure.further-integration.q060",
    "tags": [
      "substitution",
      "partial-fractions",
      "definite-integral"
    ],
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "questionText": "Evaluate exactly $\\displaystyle\\int_0^{\\sqrt{6}} \\frac{2x(5x^{4} + 17x^{2} + 38)}{(x^{2} + 4)(x^{4} + 9)}\\,dx$ using the substitution $u=x^2$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the substitution",
          "workingLatex": "u=x^{2}",
          "explanation": "The integrand contains $2x\\,dx$, which is exactly the differential created by $u=x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate",
          "workingLatex": "du=2x\\,dx",
          "explanation": "This replacement removes the extra factor of $x$ cleanly.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Change the limits",
          "workingLatex": "x=0\\Rightarrow u=0,\\qquad x=\\sqrt{6}\\Rightarrow u=6",
          "explanation": "For a definite integral, changing the limits avoids converting back to $x$ later.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rewrite the integral",
          "workingLatex": "I=\\int_0^{6} \\frac{5u^{2} + 17u + 38}{(u + 4)(u^{2}+9)}\\,du",
          "explanation": "After substitution the problem is a rational integral in $u$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set up partial fractions",
          "workingLatex": "\\frac{5u^{2} + 17u + 38}{(u + 4)(u^{2}+9)}=\\frac{A}{u + 4}+\\frac{Bu+C}{u^{2}+9}",
          "explanation": "The quadratic factor is irreducible, so its numerator must be linear.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Clear denominators",
          "workingLatex": "5u^{2} + 17u + 38=A(u^{2}+9)+(Bu+C)(u + 4)",
          "explanation": "Clearing denominators lets us compare polynomial coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compare coefficients",
          "workingLatex": "5u^{2} + 17u + 38=(5)u^{2}+(17)u+(38)",
          "explanation": "The coefficients of like powers of $u$ must match.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for constants",
          "workingLatex": "A=2,\\quad B=3,\\quad C=5",
          "explanation": "These constants give an equivalent sum of simpler fractions.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Split the integral",
          "workingLatex": "I=\\int_0^{6}\\frac{2}{u + 4}\\,du+\\int_0^{6}\\frac{3u+5}{u^{2}+9}\\,du",
          "explanation": "Each part now matches a standard logarithm or arctangent form.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Integrate the linear factor",
          "workingLatex": "\\int_0^{6}\\frac{2}{u + 4}\\,du=2\\ln\\left(\\frac{10}{4}\\right)",
          "explanation": "A shifted reciprocal integrates to a logarithm evaluated at the new limits.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Integrate the $u$ term",
          "workingLatex": "\\int_0^{6}\\frac{3u}{u^{2}+9}\\,du=\\frac{3}{2}\\ln\\left(\\frac{45}{9}\\right)",
          "explanation": "The derivative of $u^2+a^2$ is proportional to $u$, producing a logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Integrate the constant term",
          "workingLatex": "\\int_0^{6}\\frac{5}{u^{2}+9}\\,du=\\frac{5}{3}\\left[\\arctan\\left(\\frac{6}{3}\\right)-\\arctan 0\\right]",
          "explanation": "The remaining reciprocal quadratic gives an arctangent contribution.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Combine the exact value",
          "workingLatex": "2\\ln\\left(\\frac{10}{4}\\right) + \\frac{3}{2}\\ln\\left(\\frac{45}{9}\\right) + \\frac{5}{3}\\left[\\arctan\\left(\\frac{6}{3}\\right)-\\arctan 0\\right]",
          "explanation": "Adding the three evaluated pieces gives the exact value of the original definite integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$2\\ln\\left(\\frac{10}{4}\\right) + \\frac{3}{2}\\ln\\left(\\frac{45}{9}\\right) + \\frac{5}{3}\\left[\\arctan\\left(\\frac{6}{3}\\right)-\\arctan 0\\right]$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Further integration",
    "subtopicId": "fm.y2.pure.further-integration",
    "questionDiagram": null,
    "id": "fm.y2.pure.further-integration.q061",
    "tags": [
      "substitution",
      "partial-fractions",
      "definite-integral"
    ],
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "questionText": "Evaluate exactly $\\displaystyle\\int_0^{\\sqrt{8}} \\frac{2x(-3x^{4} - x^{2} - 15)}{(x^{2} + 1)(x^{4} + 16)}\\,dx$ using the substitution $u=x^2$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the substitution",
          "workingLatex": "u=x^{2}",
          "explanation": "The integrand contains $2x\\,dx$, which is exactly the differential created by $u=x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate",
          "workingLatex": "du=2x\\,dx",
          "explanation": "This replacement removes the extra factor of $x$ cleanly.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Change the limits",
          "workingLatex": "x=0\\Rightarrow u=0,\\qquad x=\\sqrt{8}\\Rightarrow u=8",
          "explanation": "For a definite integral, changing the limits avoids converting back to $x$ later.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rewrite the integral",
          "workingLatex": "I=\\int_0^{8} \\frac{-3u^{2} - u - 15}{(u + 1)(u^{2}+16)}\\,du",
          "explanation": "After substitution the problem is a rational integral in $u$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set up partial fractions",
          "workingLatex": "\\frac{-3u^{2} - u - 15}{(u + 1)(u^{2}+16)}=\\frac{A}{u + 1}+\\frac{Bu+C}{u^{2}+16}",
          "explanation": "The quadratic factor is irreducible, so its numerator must be linear.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Clear denominators",
          "workingLatex": "-3u^{2} - u - 15=A(u^{2}+16)+(Bu+C)(u + 1)",
          "explanation": "Clearing denominators lets us compare polynomial coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compare coefficients",
          "workingLatex": "-3u^{2} - u - 15=(-3)u^{2}+(-1)u+(-15)",
          "explanation": "The coefficients of like powers of $u$ must match.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for constants",
          "workingLatex": "A=-1,\\quad B=-2,\\quad C=1",
          "explanation": "These constants give an equivalent sum of simpler fractions.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Split the integral",
          "workingLatex": "I=\\int_0^{8}\\frac{-1}{u + 1}\\,du+\\int_0^{8}\\frac{-2u+1}{u^{2}+16}\\,du",
          "explanation": "Each part now matches a standard logarithm or arctangent form.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Integrate the linear factor",
          "workingLatex": "\\int_0^{8}\\frac{-1}{u + 1}\\,du=-\\ln\\left(\\frac{9}{1}\\right)",
          "explanation": "A shifted reciprocal integrates to a logarithm evaluated at the new limits.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Integrate the $u$ term",
          "workingLatex": "\\int_0^{8}\\frac{-2u}{u^{2}+16}\\,du=-\\ln\\left(\\frac{80}{16}\\right)",
          "explanation": "The derivative of $u^2+a^2$ is proportional to $u$, producing a logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Integrate the constant term",
          "workingLatex": "\\int_0^{8}\\frac{1}{u^{2}+16}\\,du=\\frac{1}{4}\\left[\\arctan\\left(\\frac{8}{4}\\right)-\\arctan 0\\right]",
          "explanation": "The remaining reciprocal quadratic gives an arctangent contribution.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Combine the exact value",
          "workingLatex": "-\\ln\\left(\\frac{9}{1}\\right) - \\ln\\left(\\frac{80}{16}\\right) + \\frac{1}{4}\\left[\\arctan\\left(\\frac{8}{4}\\right)-\\arctan 0\\right]",
          "explanation": "Adding the three evaluated pieces gives the exact value of the original definite integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$-\\ln\\left(\\frac{9}{1}\\right) - \\ln\\left(\\frac{80}{16}\\right) + \\frac{1}{4}\\left[\\arctan\\left(\\frac{8}{4}\\right)-\\arctan 0\\right]$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Further integration",
    "subtopicId": "fm.y2.pure.further-integration",
    "questionDiagram": null,
    "id": "fm.y2.pure.further-integration.q062",
    "tags": [
      "substitution",
      "partial-fractions",
      "definite-integral"
    ],
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "questionText": "Evaluate exactly $\\displaystyle\\int_0^{\\sqrt{9}} \\frac{2x(5x^{4} + 2x^{2} - 1)}{(x^{2} + 2)(x^{4} + 1)}\\,dx$ using the substitution $u=x^2$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the substitution",
          "workingLatex": "u=x^{2}",
          "explanation": "The integrand contains $2x\\,dx$, which is exactly the differential created by $u=x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate",
          "workingLatex": "du=2x\\,dx",
          "explanation": "This replacement removes the extra factor of $x$ cleanly.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Change the limits",
          "workingLatex": "x=0\\Rightarrow u=0,\\qquad x=\\sqrt{9}\\Rightarrow u=9",
          "explanation": "For a definite integral, changing the limits avoids converting back to $x$ later.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rewrite the integral",
          "workingLatex": "I=\\int_0^{9} \\frac{5u^{2} + 2u - 1}{(u + 2)(u^{2}+1)}\\,du",
          "explanation": "After substitution the problem is a rational integral in $u$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set up partial fractions",
          "workingLatex": "\\frac{5u^{2} + 2u - 1}{(u + 2)(u^{2}+1)}=\\frac{A}{u + 2}+\\frac{Bu+C}{u^{2}+1}",
          "explanation": "The quadratic factor is irreducible, so its numerator must be linear.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Clear denominators",
          "workingLatex": "5u^{2} + 2u - 1=A(u^{2}+1)+(Bu+C)(u + 2)",
          "explanation": "Clearing denominators lets us compare polynomial coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compare coefficients",
          "workingLatex": "5u^{2} + 2u - 1=(5)u^{2}+(2)u+(-1)",
          "explanation": "The coefficients of like powers of $u$ must match.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for constants",
          "workingLatex": "A=3,\\quad B=2,\\quad C=-2",
          "explanation": "These constants give an equivalent sum of simpler fractions.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Split the integral",
          "workingLatex": "I=\\int_0^{9}\\frac{3}{u + 2}\\,du+\\int_0^{9}\\frac{2u+-2}{u^{2}+1}\\,du",
          "explanation": "Each part now matches a standard logarithm or arctangent form.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Integrate the linear factor",
          "workingLatex": "\\int_0^{9}\\frac{3}{u + 2}\\,du=3\\ln\\left(\\frac{11}{2}\\right)",
          "explanation": "A shifted reciprocal integrates to a logarithm evaluated at the new limits.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Integrate the $u$ term",
          "workingLatex": "\\int_0^{9}\\frac{2u}{u^{2}+1}\\,du=\\ln\\left(\\frac{82}{1}\\right)",
          "explanation": "The derivative of $u^2+a^2$ is proportional to $u$, producing a logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Integrate the constant term",
          "workingLatex": "\\int_0^{9}\\frac{-2}{u^{2}+1}\\,du=-2\\left[\\arctan\\left(9\\right)-\\arctan 0\\right]",
          "explanation": "The remaining reciprocal quadratic gives an arctangent contribution.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Combine the exact value",
          "workingLatex": "3\\ln\\left(\\frac{11}{2}\\right) + \\ln\\left(\\frac{82}{1}\\right) - 2\\left[\\arctan\\left(9\\right)-\\arctan 0\\right]",
          "explanation": "Adding the three evaluated pieces gives the exact value of the original definite integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$3\\ln\\left(\\frac{11}{2}\\right) + \\ln\\left(\\frac{82}{1}\\right) - 2\\left[\\arctan\\left(9\\right)-\\arctan 0\\right]$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Further integration",
    "subtopicId": "fm.y2.pure.further-integration",
    "questionDiagram": null,
    "id": "fm.y2.pure.further-integration.q063",
    "tags": [
      "substitution",
      "partial-fractions",
      "definite-integral"
    ],
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "questionText": "Evaluate exactly $\\displaystyle\\int_0^{1} \\frac{2x(2x^{2} + 19)}{(x^{2} + 3)(x^{4} + 4)}\\,dx$ using the substitution $u=x^2$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the substitution",
          "workingLatex": "u=x^{2}",
          "explanation": "The integrand contains $2x\\,dx$, which is exactly the differential created by $u=x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate",
          "workingLatex": "du=2x\\,dx",
          "explanation": "This replacement removes the extra factor of $x$ cleanly.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Change the limits",
          "workingLatex": "x=0\\Rightarrow u=0,\\qquad x=1\\Rightarrow u=1",
          "explanation": "For a definite integral, changing the limits avoids converting back to $x$ later.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rewrite the integral",
          "workingLatex": "I=\\int_0^{1} \\frac{2u + 19}{(u + 3)(u^{2}+4)}\\,du",
          "explanation": "After substitution the problem is a rational integral in $u$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set up partial fractions",
          "workingLatex": "\\frac{2u + 19}{(u + 3)(u^{2}+4)}=\\frac{A}{u + 3}+\\frac{Bu+C}{u^{2}+4}",
          "explanation": "The quadratic factor is irreducible, so its numerator must be linear.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Clear denominators",
          "workingLatex": "2u + 19=A(u^{2}+4)+(Bu+C)(u + 3)",
          "explanation": "Clearing denominators lets us compare polynomial coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compare coefficients",
          "workingLatex": "2u + 19=(0)u^{2}+(2)u+(19)",
          "explanation": "The coefficients of like powers of $u$ must match.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for constants",
          "workingLatex": "A=1,\\quad B=-1,\\quad C=5",
          "explanation": "These constants give an equivalent sum of simpler fractions.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Split the integral",
          "workingLatex": "I=\\int_0^{1}\\frac{1}{u + 3}\\,du+\\int_0^{1}\\frac{-1u+5}{u^{2}+4}\\,du",
          "explanation": "Each part now matches a standard logarithm or arctangent form.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Integrate the linear factor",
          "workingLatex": "\\int_0^{1}\\frac{1}{u + 3}\\,du=\\ln\\left(\\frac{4}{3}\\right)",
          "explanation": "A shifted reciprocal integrates to a logarithm evaluated at the new limits.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Integrate the $u$ term",
          "workingLatex": "\\int_0^{1}\\frac{-1u}{u^{2}+4}\\,du=-\\frac{1}{2}\\ln\\left(\\frac{5}{4}\\right)",
          "explanation": "The derivative of $u^2+a^2$ is proportional to $u$, producing a logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Integrate the constant term",
          "workingLatex": "\\int_0^{1}\\frac{5}{u^{2}+4}\\,du=\\frac{5}{2}\\left[\\arctan\\left(\\frac{1}{2}\\right)-\\arctan 0\\right]",
          "explanation": "The remaining reciprocal quadratic gives an arctangent contribution.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Combine the exact value",
          "workingLatex": "\\ln\\left(\\frac{4}{3}\\right) - \\frac{1}{2}\\ln\\left(\\frac{5}{4}\\right) + \\frac{5}{2}\\left[\\arctan\\left(\\frac{1}{2}\\right)-\\arctan 0\\right]",
          "explanation": "Adding the three evaluated pieces gives the exact value of the original definite integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\ln\\left(\\frac{4}{3}\\right) - \\frac{1}{2}\\ln\\left(\\frac{5}{4}\\right) + \\frac{5}{2}\\left[\\arctan\\left(\\frac{1}{2}\\right)-\\arctan 0\\right]$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Further integration",
    "subtopicId": "fm.y2.pure.further-integration",
    "questionDiagram": null,
    "id": "fm.y2.pure.further-integration.q064",
    "tags": [
      "substitution",
      "partial-fractions",
      "definite-integral"
    ],
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "questionText": "Evaluate exactly $\\displaystyle\\int_0^{\\sqrt{2}} \\frac{2x(5x^{4} + 13x^{2} + 22)}{(x^{2} + 4)(x^{4} + 9)}\\,dx$ using the substitution $u=x^2$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the substitution",
          "workingLatex": "u=x^{2}",
          "explanation": "The integrand contains $2x\\,dx$, which is exactly the differential created by $u=x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate",
          "workingLatex": "du=2x\\,dx",
          "explanation": "This replacement removes the extra factor of $x$ cleanly.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Change the limits",
          "workingLatex": "x=0\\Rightarrow u=0,\\qquad x=\\sqrt{2}\\Rightarrow u=2",
          "explanation": "For a definite integral, changing the limits avoids converting back to $x$ later.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rewrite the integral",
          "workingLatex": "I=\\int_0^{2} \\frac{5u^{2} + 13u + 22}{(u + 4)(u^{2}+9)}\\,du",
          "explanation": "After substitution the problem is a rational integral in $u$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set up partial fractions",
          "workingLatex": "\\frac{5u^{2} + 13u + 22}{(u + 4)(u^{2}+9)}=\\frac{A}{u + 4}+\\frac{Bu+C}{u^{2}+9}",
          "explanation": "The quadratic factor is irreducible, so its numerator must be linear.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Clear denominators",
          "workingLatex": "5u^{2} + 13u + 22=A(u^{2}+9)+(Bu+C)(u + 4)",
          "explanation": "Clearing denominators lets us compare polynomial coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compare coefficients",
          "workingLatex": "5u^{2} + 13u + 22=(5)u^{2}+(13)u+(22)",
          "explanation": "The coefficients of like powers of $u$ must match.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for constants",
          "workingLatex": "A=2,\\quad B=3,\\quad C=1",
          "explanation": "These constants give an equivalent sum of simpler fractions.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Split the integral",
          "workingLatex": "I=\\int_0^{2}\\frac{2}{u + 4}\\,du+\\int_0^{2}\\frac{3u+1}{u^{2}+9}\\,du",
          "explanation": "Each part now matches a standard logarithm or arctangent form.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Integrate the linear factor",
          "workingLatex": "\\int_0^{2}\\frac{2}{u + 4}\\,du=2\\ln\\left(\\frac{6}{4}\\right)",
          "explanation": "A shifted reciprocal integrates to a logarithm evaluated at the new limits.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Integrate the $u$ term",
          "workingLatex": "\\int_0^{2}\\frac{3u}{u^{2}+9}\\,du=\\frac{3}{2}\\ln\\left(\\frac{13}{9}\\right)",
          "explanation": "The derivative of $u^2+a^2$ is proportional to $u$, producing a logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Integrate the constant term",
          "workingLatex": "\\int_0^{2}\\frac{1}{u^{2}+9}\\,du=\\frac{1}{3}\\left[\\arctan\\left(\\frac{2}{3}\\right)-\\arctan 0\\right]",
          "explanation": "The remaining reciprocal quadratic gives an arctangent contribution.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Combine the exact value",
          "workingLatex": "2\\ln\\left(\\frac{6}{4}\\right) + \\frac{3}{2}\\ln\\left(\\frac{13}{9}\\right) + \\frac{1}{3}\\left[\\arctan\\left(\\frac{2}{3}\\right)-\\arctan 0\\right]",
          "explanation": "Adding the three evaluated pieces gives the exact value of the original definite integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$2\\ln\\left(\\frac{6}{4}\\right) + \\frac{3}{2}\\ln\\left(\\frac{13}{9}\\right) + \\frac{1}{3}\\left[\\arctan\\left(\\frac{2}{3}\\right)-\\arctan 0\\right]$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Further integration",
    "subtopicId": "fm.y2.pure.further-integration",
    "questionDiagram": null,
    "id": "fm.y2.pure.further-integration.q065",
    "tags": [
      "substitution",
      "partial-fractions",
      "definite-integral"
    ],
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "questionText": "Evaluate exactly $\\displaystyle\\int_0^{\\sqrt{3}} \\frac{2x(-3x^{4} - 4x^{2} - 18)}{(x^{2} + 1)(x^{4} + 16)}\\,dx$ using the substitution $u=x^2$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the substitution",
          "workingLatex": "u=x^{2}",
          "explanation": "The integrand contains $2x\\,dx$, which is exactly the differential created by $u=x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate",
          "workingLatex": "du=2x\\,dx",
          "explanation": "This replacement removes the extra factor of $x$ cleanly.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Change the limits",
          "workingLatex": "x=0\\Rightarrow u=0,\\qquad x=\\sqrt{3}\\Rightarrow u=3",
          "explanation": "For a definite integral, changing the limits avoids converting back to $x$ later.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rewrite the integral",
          "workingLatex": "I=\\int_0^{3} \\frac{-3u^{2} - 4u - 18}{(u + 1)(u^{2}+16)}\\,du",
          "explanation": "After substitution the problem is a rational integral in $u$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set up partial fractions",
          "workingLatex": "\\frac{-3u^{2} - 4u - 18}{(u + 1)(u^{2}+16)}=\\frac{A}{u + 1}+\\frac{Bu+C}{u^{2}+16}",
          "explanation": "The quadratic factor is irreducible, so its numerator must be linear.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Clear denominators",
          "workingLatex": "-3u^{2} - 4u - 18=A(u^{2}+16)+(Bu+C)(u + 1)",
          "explanation": "Clearing denominators lets us compare polynomial coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compare coefficients",
          "workingLatex": "-3u^{2} - 4u - 18=(-3)u^{2}+(-4)u+(-18)",
          "explanation": "The coefficients of like powers of $u$ must match.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for constants",
          "workingLatex": "A=-1,\\quad B=-2,\\quad C=-2",
          "explanation": "These constants give an equivalent sum of simpler fractions.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Split the integral",
          "workingLatex": "I=\\int_0^{3}\\frac{-1}{u + 1}\\,du+\\int_0^{3}\\frac{-2u+-2}{u^{2}+16}\\,du",
          "explanation": "Each part now matches a standard logarithm or arctangent form.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Integrate the linear factor",
          "workingLatex": "\\int_0^{3}\\frac{-1}{u + 1}\\,du=-\\ln\\left(\\frac{4}{1}\\right)",
          "explanation": "A shifted reciprocal integrates to a logarithm evaluated at the new limits.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Integrate the $u$ term",
          "workingLatex": "\\int_0^{3}\\frac{-2u}{u^{2}+16}\\,du=-\\ln\\left(\\frac{25}{16}\\right)",
          "explanation": "The derivative of $u^2+a^2$ is proportional to $u$, producing a logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Integrate the constant term",
          "workingLatex": "\\int_0^{3}\\frac{-2}{u^{2}+16}\\,du=-\\frac{1}{2}\\left[\\arctan\\left(\\frac{3}{4}\\right)-\\arctan 0\\right]",
          "explanation": "The remaining reciprocal quadratic gives an arctangent contribution.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Combine the exact value",
          "workingLatex": "-\\ln\\left(\\frac{4}{1}\\right) - \\ln\\left(\\frac{25}{16}\\right) - \\frac{1}{2}\\left[\\arctan\\left(\\frac{3}{4}\\right)-\\arctan 0\\right]",
          "explanation": "Adding the three evaluated pieces gives the exact value of the original definite integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$-\\ln\\left(\\frac{4}{1}\\right) - \\ln\\left(\\frac{25}{16}\\right) - \\frac{1}{2}\\left[\\arctan\\left(\\frac{3}{4}\\right)-\\arctan 0\\right]$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Further integration",
    "subtopicId": "fm.y2.pure.further-integration",
    "questionDiagram": null,
    "id": "fm.y2.pure.further-integration.q066",
    "tags": [
      "substitution",
      "partial-fractions",
      "definite-integral"
    ],
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "questionText": "Evaluate exactly $\\displaystyle\\int_0^{\\sqrt{4}} \\frac{2x(5x^{4} + 9x^{2} + 13)}{(x^{2} + 2)(x^{4} + 1)}\\,dx$ using the substitution $u=x^2$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the substitution",
          "workingLatex": "u=x^{2}",
          "explanation": "The integrand contains $2x\\,dx$, which is exactly the differential created by $u=x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate",
          "workingLatex": "du=2x\\,dx",
          "explanation": "This replacement removes the extra factor of $x$ cleanly.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Change the limits",
          "workingLatex": "x=0\\Rightarrow u=0,\\qquad x=\\sqrt{4}\\Rightarrow u=4",
          "explanation": "For a definite integral, changing the limits avoids converting back to $x$ later.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rewrite the integral",
          "workingLatex": "I=\\int_0^{4} \\frac{5u^{2} + 9u + 13}{(u + 2)(u^{2}+1)}\\,du",
          "explanation": "After substitution the problem is a rational integral in $u$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set up partial fractions",
          "workingLatex": "\\frac{5u^{2} + 9u + 13}{(u + 2)(u^{2}+1)}=\\frac{A}{u + 2}+\\frac{Bu+C}{u^{2}+1}",
          "explanation": "The quadratic factor is irreducible, so its numerator must be linear.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Clear denominators",
          "workingLatex": "5u^{2} + 9u + 13=A(u^{2}+1)+(Bu+C)(u + 2)",
          "explanation": "Clearing denominators lets us compare polynomial coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compare coefficients",
          "workingLatex": "5u^{2} + 9u + 13=(5)u^{2}+(9)u+(13)",
          "explanation": "The coefficients of like powers of $u$ must match.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for constants",
          "workingLatex": "A=3,\\quad B=2,\\quad C=5",
          "explanation": "These constants give an equivalent sum of simpler fractions.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Split the integral",
          "workingLatex": "I=\\int_0^{4}\\frac{3}{u + 2}\\,du+\\int_0^{4}\\frac{2u+5}{u^{2}+1}\\,du",
          "explanation": "Each part now matches a standard logarithm or arctangent form.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Integrate the linear factor",
          "workingLatex": "\\int_0^{4}\\frac{3}{u + 2}\\,du=3\\ln\\left(\\frac{6}{2}\\right)",
          "explanation": "A shifted reciprocal integrates to a logarithm evaluated at the new limits.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Integrate the $u$ term",
          "workingLatex": "\\int_0^{4}\\frac{2u}{u^{2}+1}\\,du=\\ln\\left(\\frac{17}{1}\\right)",
          "explanation": "The derivative of $u^2+a^2$ is proportional to $u$, producing a logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Integrate the constant term",
          "workingLatex": "\\int_0^{4}\\frac{5}{u^{2}+1}\\,du=5\\left[\\arctan\\left(4\\right)-\\arctan 0\\right]",
          "explanation": "The remaining reciprocal quadratic gives an arctangent contribution.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Combine the exact value",
          "workingLatex": "3\\ln\\left(\\frac{6}{2}\\right) + \\ln\\left(\\frac{17}{1}\\right) + 5\\left[\\arctan\\left(4\\right)-\\arctan 0\\right]",
          "explanation": "Adding the three evaluated pieces gives the exact value of the original definite integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$3\\ln\\left(\\frac{6}{2}\\right) + \\ln\\left(\\frac{17}{1}\\right) + 5\\left[\\arctan\\left(4\\right)-\\arctan 0\\right]$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Further integration",
    "subtopicId": "fm.y2.pure.further-integration",
    "questionDiagram": null,
    "id": "fm.y2.pure.further-integration.q067",
    "tags": [
      "substitution",
      "partial-fractions",
      "definite-integral"
    ],
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "questionText": "Evaluate exactly $\\displaystyle\\int_0^{\\sqrt{5}} \\frac{2x(-2x^{2} + 7)}{(x^{2} + 3)(x^{4} + 4)}\\,dx$ using the substitution $u=x^2$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the substitution",
          "workingLatex": "u=x^{2}",
          "explanation": "The integrand contains $2x\\,dx$, which is exactly the differential created by $u=x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate",
          "workingLatex": "du=2x\\,dx",
          "explanation": "This replacement removes the extra factor of $x$ cleanly.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Change the limits",
          "workingLatex": "x=0\\Rightarrow u=0,\\qquad x=\\sqrt{5}\\Rightarrow u=5",
          "explanation": "For a definite integral, changing the limits avoids converting back to $x$ later.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rewrite the integral",
          "workingLatex": "I=\\int_0^{5} \\frac{-2u + 7}{(u + 3)(u^{2}+4)}\\,du",
          "explanation": "After substitution the problem is a rational integral in $u$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set up partial fractions",
          "workingLatex": "\\frac{-2u + 7}{(u + 3)(u^{2}+4)}=\\frac{A}{u + 3}+\\frac{Bu+C}{u^{2}+4}",
          "explanation": "The quadratic factor is irreducible, so its numerator must be linear.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Clear denominators",
          "workingLatex": "-2u + 7=A(u^{2}+4)+(Bu+C)(u + 3)",
          "explanation": "Clearing denominators lets us compare polynomial coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compare coefficients",
          "workingLatex": "-2u + 7=(0)u^{2}+(-2)u+(7)",
          "explanation": "The coefficients of like powers of $u$ must match.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for constants",
          "workingLatex": "A=1,\\quad B=-1,\\quad C=1",
          "explanation": "These constants give an equivalent sum of simpler fractions.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Split the integral",
          "workingLatex": "I=\\int_0^{5}\\frac{1}{u + 3}\\,du+\\int_0^{5}\\frac{-1u+1}{u^{2}+4}\\,du",
          "explanation": "Each part now matches a standard logarithm or arctangent form.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Integrate the linear factor",
          "workingLatex": "\\int_0^{5}\\frac{1}{u + 3}\\,du=\\ln\\left(\\frac{8}{3}\\right)",
          "explanation": "A shifted reciprocal integrates to a logarithm evaluated at the new limits.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Integrate the $u$ term",
          "workingLatex": "\\int_0^{5}\\frac{-1u}{u^{2}+4}\\,du=-\\frac{1}{2}\\ln\\left(\\frac{29}{4}\\right)",
          "explanation": "The derivative of $u^2+a^2$ is proportional to $u$, producing a logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Integrate the constant term",
          "workingLatex": "\\int_0^{5}\\frac{1}{u^{2}+4}\\,du=\\frac{1}{2}\\left[\\arctan\\left(\\frac{5}{2}\\right)-\\arctan 0\\right]",
          "explanation": "The remaining reciprocal quadratic gives an arctangent contribution.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Combine the exact value",
          "workingLatex": "\\ln\\left(\\frac{8}{3}\\right) - \\frac{1}{2}\\ln\\left(\\frac{29}{4}\\right) + \\frac{1}{2}\\left[\\arctan\\left(\\frac{5}{2}\\right)-\\arctan 0\\right]",
          "explanation": "Adding the three evaluated pieces gives the exact value of the original definite integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\ln\\left(\\frac{8}{3}\\right) - \\frac{1}{2}\\ln\\left(\\frac{29}{4}\\right) + \\frac{1}{2}\\left[\\arctan\\left(\\frac{5}{2}\\right)-\\arctan 0\\right]$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Further integration",
    "subtopicId": "fm.y2.pure.further-integration",
    "questionDiagram": null,
    "id": "fm.y2.pure.further-integration.q068",
    "tags": [
      "substitution",
      "partial-fractions",
      "definite-integral"
    ],
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "questionText": "Evaluate exactly $\\displaystyle\\int_0^{\\sqrt{6}} \\frac{2x(5x^{4} + 10x^{2} + 10)}{(x^{2} + 4)(x^{4} + 9)}\\,dx$ using the substitution $u=x^2$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the substitution",
          "workingLatex": "u=x^{2}",
          "explanation": "The integrand contains $2x\\,dx$, which is exactly the differential created by $u=x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate",
          "workingLatex": "du=2x\\,dx",
          "explanation": "This replacement removes the extra factor of $x$ cleanly.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Change the limits",
          "workingLatex": "x=0\\Rightarrow u=0,\\qquad x=\\sqrt{6}\\Rightarrow u=6",
          "explanation": "For a definite integral, changing the limits avoids converting back to $x$ later.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rewrite the integral",
          "workingLatex": "I=\\int_0^{6} \\frac{5u^{2} + 10u + 10}{(u + 4)(u^{2}+9)}\\,du",
          "explanation": "After substitution the problem is a rational integral in $u$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set up partial fractions",
          "workingLatex": "\\frac{5u^{2} + 10u + 10}{(u + 4)(u^{2}+9)}=\\frac{A}{u + 4}+\\frac{Bu+C}{u^{2}+9}",
          "explanation": "The quadratic factor is irreducible, so its numerator must be linear.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Clear denominators",
          "workingLatex": "5u^{2} + 10u + 10=A(u^{2}+9)+(Bu+C)(u + 4)",
          "explanation": "Clearing denominators lets us compare polynomial coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compare coefficients",
          "workingLatex": "5u^{2} + 10u + 10=(5)u^{2}+(10)u+(10)",
          "explanation": "The coefficients of like powers of $u$ must match.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for constants",
          "workingLatex": "A=2,\\quad B=3,\\quad C=-2",
          "explanation": "These constants give an equivalent sum of simpler fractions.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Split the integral",
          "workingLatex": "I=\\int_0^{6}\\frac{2}{u + 4}\\,du+\\int_0^{6}\\frac{3u+-2}{u^{2}+9}\\,du",
          "explanation": "Each part now matches a standard logarithm or arctangent form.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Integrate the linear factor",
          "workingLatex": "\\int_0^{6}\\frac{2}{u + 4}\\,du=2\\ln\\left(\\frac{10}{4}\\right)",
          "explanation": "A shifted reciprocal integrates to a logarithm evaluated at the new limits.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Integrate the $u$ term",
          "workingLatex": "\\int_0^{6}\\frac{3u}{u^{2}+9}\\,du=\\frac{3}{2}\\ln\\left(\\frac{45}{9}\\right)",
          "explanation": "The derivative of $u^2+a^2$ is proportional to $u$, producing a logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Integrate the constant term",
          "workingLatex": "\\int_0^{6}\\frac{-2}{u^{2}+9}\\,du=-\\frac{2}{3}\\left[\\arctan\\left(\\frac{6}{3}\\right)-\\arctan 0\\right]",
          "explanation": "The remaining reciprocal quadratic gives an arctangent contribution.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Combine the exact value",
          "workingLatex": "2\\ln\\left(\\frac{10}{4}\\right) + \\frac{3}{2}\\ln\\left(\\frac{45}{9}\\right) - \\frac{2}{3}\\left[\\arctan\\left(\\frac{6}{3}\\right)-\\arctan 0\\right]",
          "explanation": "Adding the three evaluated pieces gives the exact value of the original definite integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$2\\ln\\left(\\frac{10}{4}\\right) + \\frac{3}{2}\\ln\\left(\\frac{45}{9}\\right) - \\frac{2}{3}\\left[\\arctan\\left(\\frac{6}{3}\\right)-\\arctan 0\\right]$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Further integration",
    "subtopicId": "fm.y2.pure.further-integration",
    "questionDiagram": null,
    "id": "fm.y2.pure.further-integration.q069",
    "tags": [
      "substitution",
      "partial-fractions",
      "definite-integral"
    ],
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "questionText": "Evaluate exactly $\\displaystyle\\int_0^{\\sqrt{8}} \\frac{2x(-3x^{4} + 3x^{2} - 11)}{(x^{2} + 1)(x^{4} + 16)}\\,dx$ using the substitution $u=x^2$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the substitution",
          "workingLatex": "u=x^{2}",
          "explanation": "The integrand contains $2x\\,dx$, which is exactly the differential created by $u=x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate",
          "workingLatex": "du=2x\\,dx",
          "explanation": "This replacement removes the extra factor of $x$ cleanly.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Change the limits",
          "workingLatex": "x=0\\Rightarrow u=0,\\qquad x=\\sqrt{8}\\Rightarrow u=8",
          "explanation": "For a definite integral, changing the limits avoids converting back to $x$ later.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rewrite the integral",
          "workingLatex": "I=\\int_0^{8} \\frac{-3u^{2} + 3u - 11}{(u + 1)(u^{2}+16)}\\,du",
          "explanation": "After substitution the problem is a rational integral in $u$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set up partial fractions",
          "workingLatex": "\\frac{-3u^{2} + 3u - 11}{(u + 1)(u^{2}+16)}=\\frac{A}{u + 1}+\\frac{Bu+C}{u^{2}+16}",
          "explanation": "The quadratic factor is irreducible, so its numerator must be linear.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Clear denominators",
          "workingLatex": "-3u^{2} + 3u - 11=A(u^{2}+16)+(Bu+C)(u + 1)",
          "explanation": "Clearing denominators lets us compare polynomial coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compare coefficients",
          "workingLatex": "-3u^{2} + 3u - 11=(-3)u^{2}+(3)u+(-11)",
          "explanation": "The coefficients of like powers of $u$ must match.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for constants",
          "workingLatex": "A=-1,\\quad B=-2,\\quad C=5",
          "explanation": "These constants give an equivalent sum of simpler fractions.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Split the integral",
          "workingLatex": "I=\\int_0^{8}\\frac{-1}{u + 1}\\,du+\\int_0^{8}\\frac{-2u+5}{u^{2}+16}\\,du",
          "explanation": "Each part now matches a standard logarithm or arctangent form.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Integrate the linear factor",
          "workingLatex": "\\int_0^{8}\\frac{-1}{u + 1}\\,du=-\\ln\\left(\\frac{9}{1}\\right)",
          "explanation": "A shifted reciprocal integrates to a logarithm evaluated at the new limits.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Integrate the $u$ term",
          "workingLatex": "\\int_0^{8}\\frac{-2u}{u^{2}+16}\\,du=-\\ln\\left(\\frac{80}{16}\\right)",
          "explanation": "The derivative of $u^2+a^2$ is proportional to $u$, producing a logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Integrate the constant term",
          "workingLatex": "\\int_0^{8}\\frac{5}{u^{2}+16}\\,du=\\frac{5}{4}\\left[\\arctan\\left(\\frac{8}{4}\\right)-\\arctan 0\\right]",
          "explanation": "The remaining reciprocal quadratic gives an arctangent contribution.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Combine the exact value",
          "workingLatex": "-\\ln\\left(\\frac{9}{1}\\right) - \\ln\\left(\\frac{80}{16}\\right) + \\frac{5}{4}\\left[\\arctan\\left(\\frac{8}{4}\\right)-\\arctan 0\\right]",
          "explanation": "Adding the three evaluated pieces gives the exact value of the original definite integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$-\\ln\\left(\\frac{9}{1}\\right) - \\ln\\left(\\frac{80}{16}\\right) + \\frac{5}{4}\\left[\\arctan\\left(\\frac{8}{4}\\right)-\\arctan 0\\right]$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Further integration",
    "subtopicId": "fm.y2.pure.further-integration",
    "questionDiagram": null,
    "id": "fm.y2.pure.further-integration.q070",
    "tags": [
      "substitution",
      "partial-fractions",
      "definite-integral"
    ],
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "questionText": "Evaluate exactly $\\displaystyle\\int_0^{\\sqrt{9}} \\frac{2x(5x^{4} + 5x^{2} + 5)}{(x^{2} + 2)(x^{4} + 1)}\\,dx$ using the substitution $u=x^2$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the substitution",
          "workingLatex": "u=x^{2}",
          "explanation": "The integrand contains $2x\\,dx$, which is exactly the differential created by $u=x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate",
          "workingLatex": "du=2x\\,dx",
          "explanation": "This replacement removes the extra factor of $x$ cleanly.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Change the limits",
          "workingLatex": "x=0\\Rightarrow u=0,\\qquad x=\\sqrt{9}\\Rightarrow u=9",
          "explanation": "For a definite integral, changing the limits avoids converting back to $x$ later.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rewrite the integral",
          "workingLatex": "I=\\int_0^{9} \\frac{5u^{2} + 5u + 5}{(u + 2)(u^{2}+1)}\\,du",
          "explanation": "After substitution the problem is a rational integral in $u$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set up partial fractions",
          "workingLatex": "\\frac{5u^{2} + 5u + 5}{(u + 2)(u^{2}+1)}=\\frac{A}{u + 2}+\\frac{Bu+C}{u^{2}+1}",
          "explanation": "The quadratic factor is irreducible, so its numerator must be linear.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Clear denominators",
          "workingLatex": "5u^{2} + 5u + 5=A(u^{2}+1)+(Bu+C)(u + 2)",
          "explanation": "Clearing denominators lets us compare polynomial coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compare coefficients",
          "workingLatex": "5u^{2} + 5u + 5=(5)u^{2}+(5)u+(5)",
          "explanation": "The coefficients of like powers of $u$ must match.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for constants",
          "workingLatex": "A=3,\\quad B=2,\\quad C=1",
          "explanation": "These constants give an equivalent sum of simpler fractions.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Split the integral",
          "workingLatex": "I=\\int_0^{9}\\frac{3}{u + 2}\\,du+\\int_0^{9}\\frac{2u+1}{u^{2}+1}\\,du",
          "explanation": "Each part now matches a standard logarithm or arctangent form.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Integrate the linear factor",
          "workingLatex": "\\int_0^{9}\\frac{3}{u + 2}\\,du=3\\ln\\left(\\frac{11}{2}\\right)",
          "explanation": "A shifted reciprocal integrates to a logarithm evaluated at the new limits.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Integrate the $u$ term",
          "workingLatex": "\\int_0^{9}\\frac{2u}{u^{2}+1}\\,du=\\ln\\left(\\frac{82}{1}\\right)",
          "explanation": "The derivative of $u^2+a^2$ is proportional to $u$, producing a logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Integrate the constant term",
          "workingLatex": "\\int_0^{9}\\frac{1}{u^{2}+1}\\,du=\\left[\\arctan\\left(9\\right)-\\arctan 0\\right]",
          "explanation": "The remaining reciprocal quadratic gives an arctangent contribution.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Combine the exact value",
          "workingLatex": "3\\ln\\left(\\frac{11}{2}\\right) + \\ln\\left(\\frac{82}{1}\\right) + \\left[\\arctan\\left(9\\right)-\\arctan 0\\right]",
          "explanation": "Adding the three evaluated pieces gives the exact value of the original definite integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$3\\ln\\left(\\frac{11}{2}\\right) + \\ln\\left(\\frac{82}{1}\\right) + \\left[\\arctan\\left(9\\right)-\\arctan 0\\right]$"
    }
  }
];
