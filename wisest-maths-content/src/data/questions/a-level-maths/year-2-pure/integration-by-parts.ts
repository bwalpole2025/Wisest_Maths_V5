import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-by-parts.q001",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "integration by parts",
      "exponential"
    ],
    "questionText": "Use integration by parts to find $\\displaystyle\\int xe^{x}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the formula",
          "workingLatex": "\\int u\\,dv = uv - \\int v\\,du",
          "explanation": "Integration by parts reverses the product rule for differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose u and dv",
          "workingLatex": "u = x,\\quad dv = e^{x}\\,dx",
          "explanation": "Use LIATE: Log, Inverse trig, Algebraic, Trig, Exponential — pick $u$ to simplify on differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find du and v",
          "workingLatex": "du = dx,\\quad v = e^{x}",
          "explanation": "Differentiate $u$ and integrate $dv$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the formula",
          "workingLatex": "xe^{x} - \\int e^{x}\\,dx",
          "explanation": "Substitute into $\\int u\\,dv = uv - \\int v\\,du$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the remaining integral",
          "workingLatex": "xe^{x} - e^{x}",
          "explanation": "The new integral should be simpler than the original.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify and add +c",
          "workingLatex": "xe^{x} - e^{x} + c",
          "explanation": "Combine terms and include the constant of integration.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int xe^{x}\\,dx = xe^{x} - e^{x} + c",
          "explanation": "Present the antiderivative clearly.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int xe^{x}\\,dx = xe^{x} - e^{x} + c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-by-parts.q002",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "integration by parts",
      "exponential"
    ],
    "questionText": "Use integration by parts to find $\\displaystyle\\int xe^{-x}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the formula",
          "workingLatex": "\\int u\\,dv = uv - \\int v\\,du",
          "explanation": "Integration by parts reverses the product rule for differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose u and dv",
          "workingLatex": "u = x,\\quad dv = e^{-x}\\,dx",
          "explanation": "Use LIATE: Log, Inverse trig, Algebraic, Trig, Exponential — pick $u$ to simplify on differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find du and v",
          "workingLatex": "du = dx,\\quad v = -e^{-x}",
          "explanation": "Differentiate $u$ and integrate $dv$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the formula",
          "workingLatex": "-xe^{-x} - \\int (-e^{-x})\\,dx",
          "explanation": "Substitute into $\\int u\\,dv = uv - \\int v\\,du$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the remaining integral",
          "workingLatex": "-xe^{-x} - e^{-x}",
          "explanation": "The new integral should be simpler than the original.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify and add +c",
          "workingLatex": "-xe^{-x} - e^{-x} + c",
          "explanation": "Combine terms and include the constant of integration.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int xe^{-x}\\,dx = -xe^{-x} - e^{-x} + c",
          "explanation": "Present the antiderivative clearly.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int xe^{-x}\\,dx = -xe^{-x} - e^{-x} + c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-by-parts.q003",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "integration by parts",
      "exponential"
    ],
    "questionText": "Use integration by parts to find $\\displaystyle\\int xe^{2x}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the formula",
          "workingLatex": "\\int u\\,dv = uv - \\int v\\,du",
          "explanation": "Integration by parts reverses the product rule for differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose u and dv",
          "workingLatex": "u = x,\\quad dv = e^{2x}\\,dx",
          "explanation": "Use LIATE: Log, Inverse trig, Algebraic, Trig, Exponential — pick $u$ to simplify on differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find du and v",
          "workingLatex": "du = dx,\\quad v = \\dfrac{1}{2}e^{2x}",
          "explanation": "Differentiate $u$ and integrate $dv$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the formula",
          "workingLatex": "\\dfrac{x}{2}e^{2x} - \\int \\dfrac{1}{2}e^{2x}\\,dx",
          "explanation": "Substitute into $\\int u\\,dv = uv - \\int v\\,du$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the remaining integral",
          "workingLatex": "\\dfrac{1}{2}xe^{2x} - \\dfrac{1}{4}e^{2x}",
          "explanation": "The new integral should be simpler than the original.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify and add +c",
          "workingLatex": "\\dfrac{1}{2}xe^{2x} - \\dfrac{1}{4}e^{2x} + c",
          "explanation": "Combine terms and include the constant of integration.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int xe^{2x}\\,dx = \\dfrac{1}{2}xe^{2x} - \\dfrac{1}{4}e^{2x} + c",
          "explanation": "Present the antiderivative clearly.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int xe^{2x}\\,dx = \\dfrac{1}{2}xe^{2x} - \\dfrac{1}{4}e^{2x} + c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-by-parts.q004",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "integration by parts",
      "exponential"
    ],
    "questionText": "Use integration by parts to find $\\displaystyle\\int xe^{-2x}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the formula",
          "workingLatex": "\\int u\\,dv = uv - \\int v\\,du",
          "explanation": "Integration by parts reverses the product rule for differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose u and dv",
          "workingLatex": "u = x,\\quad dv = e^{-2x}\\,dx",
          "explanation": "Use LIATE: Log, Inverse trig, Algebraic, Trig, Exponential — pick $u$ to simplify on differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find du and v",
          "workingLatex": "du = dx,\\quad v = -\\dfrac{1}{2}e^{-2x}",
          "explanation": "Differentiate $u$ and integrate $dv$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the formula",
          "workingLatex": "-\\dfrac{x}{2}e^{-2x} - \\int \\left(-\\dfrac{1}{2}e^{-2x}\\right)dx",
          "explanation": "Substitute into $\\int u\\,dv = uv - \\int v\\,du$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the remaining integral",
          "workingLatex": "-\\dfrac{1}{2}xe^{-2x} - \\dfrac{1}{4}e^{-2x}",
          "explanation": "The new integral should be simpler than the original.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify and add +c",
          "workingLatex": "-\\dfrac{1}{2}xe^{-2x} - \\dfrac{1}{4}e^{-2x} + c",
          "explanation": "Combine terms and include the constant of integration.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int xe^{-2x}\\,dx = -\\dfrac{1}{2}xe^{-2x} - \\dfrac{1}{4}e^{-2x} + c",
          "explanation": "Present the antiderivative clearly.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int xe^{-2x}\\,dx = -\\dfrac{1}{2}xe^{-2x} - \\dfrac{1}{4}e^{-2x} + c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-by-parts.q005",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "integration by parts",
      "exponential"
    ],
    "questionText": "Use integration by parts to find $\\displaystyle\\int xe^{3x}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the formula",
          "workingLatex": "\\int u\\,dv = uv - \\int v\\,du",
          "explanation": "Integration by parts reverses the product rule for differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose u and dv",
          "workingLatex": "u = x,\\quad dv = e^{3x}\\,dx",
          "explanation": "Use LIATE: Log, Inverse trig, Algebraic, Trig, Exponential — pick $u$ to simplify on differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find du and v",
          "workingLatex": "du = dx,\\quad v = \\dfrac{1}{3}e^{3x}",
          "explanation": "Differentiate $u$ and integrate $dv$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the formula",
          "workingLatex": "\\dfrac{x}{3}e^{3x} - \\int \\dfrac{1}{3}e^{3x}\\,dx",
          "explanation": "Substitute into $\\int u\\,dv = uv - \\int v\\,du$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the remaining integral",
          "workingLatex": "\\dfrac{1}{3}xe^{3x} - \\dfrac{1}{9}e^{3x}",
          "explanation": "The new integral should be simpler than the original.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify and add +c",
          "workingLatex": "\\dfrac{1}{3}xe^{3x} - \\dfrac{1}{9}e^{3x} + c",
          "explanation": "Combine terms and include the constant of integration.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int xe^{3x}\\,dx = \\dfrac{1}{3}xe^{3x} - \\dfrac{1}{9}e^{3x} + c",
          "explanation": "Present the antiderivative clearly.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int xe^{3x}\\,dx = \\dfrac{1}{3}xe^{3x} - \\dfrac{1}{9}e^{3x} + c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-by-parts.q006",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "integration by parts",
      "exponential"
    ],
    "questionText": "Use integration by parts to find $\\displaystyle\\int 2xe^{x}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the formula",
          "workingLatex": "\\int u\\,dv = uv - \\int v\\,du",
          "explanation": "Integration by parts reverses the product rule for differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose u and dv",
          "workingLatex": "u = x,\\quad dv = 2e^{x}\\,dx",
          "explanation": "Use LIATE: Log, Inverse trig, Algebraic, Trig, Exponential — pick $u$ to simplify on differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find du and v",
          "workingLatex": "du = dx,\\quad v = 2e^{x}",
          "explanation": "Differentiate $u$ and integrate $dv$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the formula",
          "workingLatex": "2xe^{x} - \\int 2e^{x}\\,dx",
          "explanation": "Substitute into $\\int u\\,dv = uv - \\int v\\,du$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the remaining integral",
          "workingLatex": "2xe^{x} - 2e^{x}",
          "explanation": "The new integral should be simpler than the original.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify and add +c",
          "workingLatex": "2xe^{x} - 2e^{x} + c",
          "explanation": "Combine terms and include the constant of integration.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int 2xe^{x}\\,dx = 2xe^{x} - 2e^{x} + c",
          "explanation": "Present the antiderivative clearly.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int 2xe^{x}\\,dx = 2xe^{x} - 2e^{x} + c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-by-parts.q007",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "integration by parts",
      "exponential"
    ],
    "questionText": "Use integration by parts to find $\\displaystyle\\int 3xe^{-x}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the formula",
          "workingLatex": "\\int u\\,dv = uv - \\int v\\,du",
          "explanation": "Integration by parts reverses the product rule for differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose u and dv",
          "workingLatex": "u = x,\\quad dv = 3e^{-x}\\,dx",
          "explanation": "Use LIATE: Log, Inverse trig, Algebraic, Trig, Exponential — pick $u$ to simplify on differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find du and v",
          "workingLatex": "du = dx,\\quad v = -3e^{-x}",
          "explanation": "Differentiate $u$ and integrate $dv$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the formula",
          "workingLatex": "-3xe^{-x} - \\int (-3e^{-x})\\,dx",
          "explanation": "Substitute into $\\int u\\,dv = uv - \\int v\\,du$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the remaining integral",
          "workingLatex": "-3xe^{-x} - 3e^{-x}",
          "explanation": "The new integral should be simpler than the original.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify and add +c",
          "workingLatex": "-3xe^{-x} - 3e^{-x} + c",
          "explanation": "Combine terms and include the constant of integration.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int 3xe^{-x}\\,dx = -3xe^{-x} - 3e^{-x} + c",
          "explanation": "Present the antiderivative clearly.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int 3xe^{-x}\\,dx = -3xe^{-x} - 3e^{-x} + c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-by-parts.q008",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "integration by parts",
      "exponential"
    ],
    "questionText": "Use integration by parts to find $\\displaystyle\\int xe^{x/2}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the formula",
          "workingLatex": "\\int u\\,dv = uv - \\int v\\,du",
          "explanation": "Integration by parts reverses the product rule for differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose u and dv",
          "workingLatex": "u = x,\\quad dv = e^{x/2}\\,dx",
          "explanation": "Use LIATE: Log, Inverse trig, Algebraic, Trig, Exponential — pick $u$ to simplify on differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find du and v",
          "workingLatex": "du = dx,\\quad v = 2e^{x/2}",
          "explanation": "Differentiate $u$ and integrate $dv$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the formula",
          "workingLatex": "2xe^{x/2} - \\int 2e^{x/2}\\,dx",
          "explanation": "Substitute into $\\int u\\,dv = uv - \\int v\\,du$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the remaining integral",
          "workingLatex": "2xe^{x/2} - 4e^{x/2}",
          "explanation": "The new integral should be simpler than the original.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify and add +c",
          "workingLatex": "2xe^{x/2} - 4e^{x/2} + c",
          "explanation": "Combine terms and include the constant of integration.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int xe^{x/2}\\,dx = 2xe^{x/2} - 4e^{x/2} + c",
          "explanation": "Present the antiderivative clearly.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int xe^{x/2}\\,dx = 2xe^{x/2} - 4e^{x/2} + c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-by-parts.q009",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "integration by parts",
      "trigonometric"
    ],
    "questionText": "Use integration by parts to find $\\displaystyle\\int x\\sin x\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the formula",
          "workingLatex": "\\int u\\,dv = uv - \\int v\\,du",
          "explanation": "Integration by parts reverses the product rule for differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose u and dv",
          "workingLatex": "u = x,\\quad dv = \\sin x\\,dx",
          "explanation": "Use LIATE: Log, Inverse trig, Algebraic, Trig, Exponential — pick $u$ to simplify on differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find du and v",
          "workingLatex": "du = dx,\\quad v = -\\cos x",
          "explanation": "Differentiate $u$ and integrate $dv$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the formula",
          "workingLatex": "-x\\cos x - \\int (-\\cos x)\\,dx",
          "explanation": "Substitute into $\\int u\\,dv = uv - \\int v\\,du$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the remaining integral",
          "workingLatex": "-x\\cos x + \\sin x",
          "explanation": "The new integral should be simpler than the original.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify and add +c",
          "workingLatex": "-x\\cos x + \\sin x + c",
          "explanation": "Combine terms and include the constant of integration.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int x\\sin x\\,dx = -x\\cos x + \\sin x + c",
          "explanation": "Present the antiderivative clearly.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int x\\sin x\\,dx = -x\\cos x + \\sin x + c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-by-parts.q010",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "integration by parts",
      "trigonometric"
    ],
    "questionText": "Use integration by parts to find $\\displaystyle\\int x\\cos x\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the formula",
          "workingLatex": "\\int u\\,dv = uv - \\int v\\,du",
          "explanation": "Integration by parts reverses the product rule for differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose u and dv",
          "workingLatex": "u = x,\\quad dv = \\cos x\\,dx",
          "explanation": "Use LIATE: Log, Inverse trig, Algebraic, Trig, Exponential — pick $u$ to simplify on differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find du and v",
          "workingLatex": "du = dx,\\quad v = \\sin x",
          "explanation": "Differentiate $u$ and integrate $dv$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the formula",
          "workingLatex": "x\\sin x - \\int \\sin x\\,dx",
          "explanation": "Substitute into $\\int u\\,dv = uv - \\int v\\,du$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the remaining integral",
          "workingLatex": "x\\sin x + \\cos x",
          "explanation": "The new integral should be simpler than the original.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify and add +c",
          "workingLatex": "x\\sin x + \\cos x + c",
          "explanation": "Combine terms and include the constant of integration.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int x\\cos x\\,dx = x\\sin x + \\cos x + c",
          "explanation": "Present the antiderivative clearly.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int x\\cos x\\,dx = x\\sin x + \\cos x + c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-by-parts.q011",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "integration by parts",
      "trigonometric"
    ],
    "questionText": "Use integration by parts to find $\\displaystyle\\int x\\sin(2x)\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the formula",
          "workingLatex": "\\int u\\,dv = uv - \\int v\\,du",
          "explanation": "Integration by parts reverses the product rule for differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose u and dv",
          "workingLatex": "u = x,\\quad dv = \\sin(2x)\\,dx",
          "explanation": "Use LIATE: Log, Inverse trig, Algebraic, Trig, Exponential — pick $u$ to simplify on differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find du and v",
          "workingLatex": "du = dx,\\quad v = -\\dfrac{1}{2}\\cos(2x)",
          "explanation": "Differentiate $u$ and integrate $dv$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the formula",
          "workingLatex": "-\\dfrac{x}{2}\\cos(2x) - \\int \\left(-\\dfrac{1}{2}\\cos(2x)\\right)dx",
          "explanation": "Substitute into $\\int u\\,dv = uv - \\int v\\,du$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the remaining integral",
          "workingLatex": "-\\dfrac{x}{2}\\cos(2x) + \\dfrac{1}{4}\\sin(2x)",
          "explanation": "The new integral should be simpler than the original.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify and add +c",
          "workingLatex": "-\\dfrac{x}{2}\\cos(2x) + \\dfrac{1}{4}\\sin(2x) + c",
          "explanation": "Combine terms and include the constant of integration.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int x\\sin(2x)\\,dx = -\\dfrac{x}{2}\\cos(2x) + \\dfrac{1}{4}\\sin(2x) + c",
          "explanation": "Present the antiderivative clearly.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int x\\sin(2x)\\,dx = -\\dfrac{x}{2}\\cos(2x) + \\dfrac{1}{4}\\sin(2x) + c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-by-parts.q012",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "integration by parts",
      "trigonometric"
    ],
    "questionText": "Use integration by parts to find $\\displaystyle\\int x\\cos(2x)\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the formula",
          "workingLatex": "\\int u\\,dv = uv - \\int v\\,du",
          "explanation": "Integration by parts reverses the product rule for differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose u and dv",
          "workingLatex": "u = x,\\quad dv = \\cos(2x)\\,dx",
          "explanation": "Use LIATE: Log, Inverse trig, Algebraic, Trig, Exponential — pick $u$ to simplify on differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find du and v",
          "workingLatex": "du = dx,\\quad v = \\dfrac{1}{2}\\sin(2x)",
          "explanation": "Differentiate $u$ and integrate $dv$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the formula",
          "workingLatex": "\\dfrac{x}{2}\\sin(2x) - \\int \\dfrac{1}{2}\\sin(2x)\\,dx",
          "explanation": "Substitute into $\\int u\\,dv = uv - \\int v\\,du$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the remaining integral",
          "workingLatex": "\\dfrac{x}{2}\\sin(2x) + \\dfrac{1}{4}\\cos(2x)",
          "explanation": "The new integral should be simpler than the original.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify and add +c",
          "workingLatex": "\\dfrac{x}{2}\\sin(2x) + \\dfrac{1}{4}\\cos(2x) + c",
          "explanation": "Combine terms and include the constant of integration.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int x\\cos(2x)\\,dx = \\dfrac{x}{2}\\sin(2x) + \\dfrac{1}{4}\\cos(2x) + c",
          "explanation": "Present the antiderivative clearly.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int x\\cos(2x)\\,dx = \\dfrac{x}{2}\\sin(2x) + \\dfrac{1}{4}\\cos(2x) + c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-by-parts.q013",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "integration by parts",
      "trigonometric"
    ],
    "questionText": "Use integration by parts to find $\\displaystyle\\int x\\sin(3x)\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the formula",
          "workingLatex": "\\int u\\,dv = uv - \\int v\\,du",
          "explanation": "Integration by parts reverses the product rule for differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose u and dv",
          "workingLatex": "u = x,\\quad dv = \\sin(3x)\\,dx",
          "explanation": "Use LIATE: Log, Inverse trig, Algebraic, Trig, Exponential — pick $u$ to simplify on differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find du and v",
          "workingLatex": "du = dx,\\quad v = -\\dfrac{1}{3}\\cos(3x)",
          "explanation": "Differentiate $u$ and integrate $dv$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the formula",
          "workingLatex": "-\\dfrac{x}{3}\\cos(3x) + \\int \\dfrac{1}{3}\\cos(3x)\\,dx",
          "explanation": "Substitute into $\\int u\\,dv = uv - \\int v\\,du$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the remaining integral",
          "workingLatex": "-\\dfrac{x}{3}\\cos(3x) + \\dfrac{1}{9}\\sin(3x)",
          "explanation": "The new integral should be simpler than the original.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify and add +c",
          "workingLatex": "-\\dfrac{x}{3}\\cos(3x) + \\dfrac{1}{9}\\sin(3x) + c",
          "explanation": "Combine terms and include the constant of integration.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int x\\sin(3x)\\,dx = -\\dfrac{x}{3}\\cos(3x) + \\dfrac{1}{9}\\sin(3x) + c",
          "explanation": "Present the antiderivative clearly.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int x\\sin(3x)\\,dx = -\\dfrac{x}{3}\\cos(3x) + \\dfrac{1}{9}\\sin(3x) + c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-by-parts.q014",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "integration by parts",
      "trigonometric"
    ],
    "questionText": "Use integration by parts to find $\\displaystyle\\int x\\cos(3x)\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the formula",
          "workingLatex": "\\int u\\,dv = uv - \\int v\\,du",
          "explanation": "Integration by parts reverses the product rule for differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose u and dv",
          "workingLatex": "u = x,\\quad dv = \\cos(3x)\\,dx",
          "explanation": "Use LIATE: Log, Inverse trig, Algebraic, Trig, Exponential — pick $u$ to simplify on differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find du and v",
          "workingLatex": "du = dx,\\quad v = \\dfrac{1}{3}\\sin(3x)",
          "explanation": "Differentiate $u$ and integrate $dv$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the formula",
          "workingLatex": "\\dfrac{x}{3}\\sin(3x) - \\int \\dfrac{1}{3}\\sin(3x)\\,dx",
          "explanation": "Substitute into $\\int u\\,dv = uv - \\int v\\,du$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the remaining integral",
          "workingLatex": "\\dfrac{x}{3}\\sin(3x) + \\dfrac{1}{9}\\cos(3x)",
          "explanation": "The new integral should be simpler than the original.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify and add +c",
          "workingLatex": "\\dfrac{x}{3}\\sin(3x) + \\dfrac{1}{9}\\cos(3x) + c",
          "explanation": "Combine terms and include the constant of integration.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int x\\cos(3x)\\,dx = \\dfrac{x}{3}\\sin(3x) + \\dfrac{1}{9}\\cos(3x) + c",
          "explanation": "Present the antiderivative clearly.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int x\\cos(3x)\\,dx = \\dfrac{x}{3}\\sin(3x) + \\dfrac{1}{9}\\cos(3x) + c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-by-parts.q015",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "integration by parts",
      "trigonometric"
    ],
    "questionText": "Use integration by parts to find $\\displaystyle\\int 2x\\sin x\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the formula",
          "workingLatex": "\\int u\\,dv = uv - \\int v\\,du",
          "explanation": "Integration by parts reverses the product rule for differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose u and dv",
          "workingLatex": "u = x,\\quad dv = 2\\sin x\\,dx",
          "explanation": "Use LIATE: Log, Inverse trig, Algebraic, Trig, Exponential — pick $u$ to simplify on differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find du and v",
          "workingLatex": "du = dx,\\quad v = -2\\cos x",
          "explanation": "Differentiate $u$ and integrate $dv$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the formula",
          "workingLatex": "-2x\\cos x + \\int 2\\cos x\\,dx",
          "explanation": "Substitute into $\\int u\\,dv = uv - \\int v\\,du$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the remaining integral",
          "workingLatex": "-2x\\cos x + 2\\sin x",
          "explanation": "The new integral should be simpler than the original.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify and add +c",
          "workingLatex": "-2x\\cos x + 2\\sin x + c",
          "explanation": "Combine terms and include the constant of integration.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int 2x\\sin x\\,dx = -2x\\cos x + 2\\sin x + c",
          "explanation": "Present the antiderivative clearly.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int 2x\\sin x\\,dx = -2x\\cos x + 2\\sin x + c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-by-parts.q016",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "integration by parts",
      "trigonometric"
    ],
    "questionText": "Use integration by parts to find $\\displaystyle\\int 2x\\cos x\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the formula",
          "workingLatex": "\\int u\\,dv = uv - \\int v\\,du",
          "explanation": "Integration by parts reverses the product rule for differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose u and dv",
          "workingLatex": "u = x,\\quad dv = 2\\cos x\\,dx",
          "explanation": "Use LIATE: Log, Inverse trig, Algebraic, Trig, Exponential — pick $u$ to simplify on differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find du and v",
          "workingLatex": "du = dx,\\quad v = 2\\sin x",
          "explanation": "Differentiate $u$ and integrate $dv$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the formula",
          "workingLatex": "2x\\sin x - \\int 2\\sin x\\,dx",
          "explanation": "Substitute into $\\int u\\,dv = uv - \\int v\\,du$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the remaining integral",
          "workingLatex": "2x\\sin x + 2\\cos x",
          "explanation": "The new integral should be simpler than the original.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify and add +c",
          "workingLatex": "2x\\sin x + 2\\cos x + c",
          "explanation": "Combine terms and include the constant of integration.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int 2x\\cos x\\,dx = 2x\\sin x + 2\\cos x + c",
          "explanation": "Present the antiderivative clearly.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int 2x\\cos x\\,dx = 2x\\sin x + 2\\cos x + c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-by-parts.q017",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "integration by parts",
      "logarithm"
    ],
    "questionText": "Use integration by parts to find $\\displaystyle\\int \\ln x\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the formula",
          "workingLatex": "\\int u\\,dv = uv - \\int v\\,du",
          "explanation": "Integration by parts reverses the product rule for differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose u and dv",
          "workingLatex": "u = \\ln x,\\quad dv = dx",
          "explanation": "Use LIATE: Log, Inverse trig, Algebraic, Trig, Exponential — pick $u$ to simplify on differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find du and v",
          "workingLatex": "du = \\dfrac{1}{x}\\,dx,\\quad v = x",
          "explanation": "Differentiate $u$ and integrate $dv$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the formula",
          "workingLatex": "x\\ln x - \\int x \\cdot \\dfrac{1}{x}\\,dx",
          "explanation": "Substitute into $\\int u\\,dv = uv - \\int v\\,du$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the remaining integral",
          "workingLatex": "x\\ln x - x",
          "explanation": "The new integral should be simpler than the original.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify and add +c",
          "workingLatex": "x\\ln x - x + c",
          "explanation": "Combine terms and include the constant of integration.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int \\ln x\\,dx = x\\ln x - x + c",
          "explanation": "Present the antiderivative clearly.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\ln x\\,dx = x\\ln x - x + c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-by-parts.q018",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "integration by parts",
      "logarithm"
    ],
    "questionText": "Use integration by parts to find $\\displaystyle\\int x\\ln x\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the formula",
          "workingLatex": "\\int u\\,dv = uv - \\int v\\,du",
          "explanation": "Integration by parts reverses the product rule for differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose u and dv",
          "workingLatex": "u = \\ln x,\\quad dv = x\\,dx",
          "explanation": "Use LIATE: Log, Inverse trig, Algebraic, Trig, Exponential — pick $u$ to simplify on differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find du and v",
          "workingLatex": "du = \\dfrac{1}{x}\\,dx,\\quad v = \\dfrac{x^{2}}{2}",
          "explanation": "Differentiate $u$ and integrate $dv$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the formula",
          "workingLatex": "\\dfrac{x^{2}}{2}\\ln x - \\int \\dfrac{x^{2}}{2} \\cdot \\dfrac{1}{x}\\,dx",
          "explanation": "Substitute into $\\int u\\,dv = uv - \\int v\\,du$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the remaining integral",
          "workingLatex": "\\dfrac{x^{2}}{2}\\ln x - \\dfrac{x^{2}}{4}",
          "explanation": "The new integral should be simpler than the original.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify and add +c",
          "workingLatex": "\\dfrac{x^{2}}{2}\\ln x - \\dfrac{x^{2}}{4} + c",
          "explanation": "Combine terms and include the constant of integration.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int x\\ln x\\,dx = \\dfrac{x^{2}}{2}\\ln x - \\dfrac{x^{2}}{4} + c",
          "explanation": "Present the antiderivative clearly.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Recall integration by parts",
          "workingLatex": "\\int u\\,dv = uv - \\int v\\,du",
          "explanation": "This formula comes from reversing the product rule for differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Use LIATE to choose u",
          "workingLatex": "\\text{Log, Inverse trig, Algebraic, Trig, Exponential}",
          "explanation": "Pick $u$ to be the factor that simplifies when differentiated.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int x\\ln x\\,dx = \\dfrac{x^{2}}{2}\\ln x - \\dfrac{x^{2}}{4} + c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-by-parts.q019",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "integration by parts",
      "exponential",
      "repeated parts"
    ],
    "questionText": "Use integration by parts to find $\\displaystyle\\int x^{2}e^{x}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the formula",
          "workingLatex": "\\int u\\,dv = uv - \\int v\\,du",
          "explanation": "Integration by parts reverses the product rule for differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose u and dv",
          "workingLatex": "u = x^{2},\\quad dv = e^{x}\\,dx",
          "explanation": "Use LIATE: Log, Inverse trig, Algebraic, Trig, Exponential — pick $u$ to simplify on differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find du and v",
          "workingLatex": "du = 2x\\,dx,\\quad v = e^{x}",
          "explanation": "Differentiate $u$ and integrate $dv$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the formula",
          "workingLatex": "x^{2}e^{x} - \\int 2xe^{x}\\,dx",
          "explanation": "Substitute into $\\int u\\,dv = uv - \\int v\\,du$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the remaining integral",
          "workingLatex": "x^{2}e^{x} - 2xe^{x} + 2e^{x}",
          "explanation": "The new integral should be simpler than the original.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify and add +c",
          "workingLatex": "x^{2}e^{x} - 2xe^{x} + 2e^{x} + c",
          "explanation": "Combine terms and include the constant of integration.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int x^{2}e^{x}\\,dx = x^{2}e^{x} - 2xe^{x} + 2e^{x} + c",
          "explanation": "Present the antiderivative clearly.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Recall integration by parts",
          "workingLatex": "\\int u\\,dv = uv - \\int v\\,du",
          "explanation": "This formula comes from reversing the product rule for differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Use LIATE to choose u",
          "workingLatex": "\\text{Log, Inverse trig, Algebraic, Trig, Exponential}",
          "explanation": "Pick $u$ to be the factor that simplifies when differentiated.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int x^{2}e^{x}\\,dx = x^{2}e^{x} - 2xe^{x} + 2e^{x} + c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-by-parts.q020",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "integration by parts",
      "trigonometric",
      "repeated parts"
    ],
    "questionText": "Use integration by parts to find $\\displaystyle\\int x^{2}\\sin x\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the formula",
          "workingLatex": "\\int u\\,dv = uv - \\int v\\,du",
          "explanation": "Integration by parts reverses the product rule for differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose u and dv",
          "workingLatex": "u = x^{2},\\quad dv = \\sin x\\,dx",
          "explanation": "Use LIATE: Log, Inverse trig, Algebraic, Trig, Exponential — pick $u$ to simplify on differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find du and v",
          "workingLatex": "du = 2x\\,dx,\\quad v = -\\cos x",
          "explanation": "Differentiate $u$ and integrate $dv$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the formula",
          "workingLatex": "-x^{2}\\cos x + \\int 2x\\cos x\\,dx",
          "explanation": "Substitute into $\\int u\\,dv = uv - \\int v\\,du$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the remaining integral",
          "workingLatex": "-x^{2}\\cos x + 2x\\sin x + 2\\cos x",
          "explanation": "The new integral should be simpler than the original.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify and add +c",
          "workingLatex": "-x^{2}\\cos x + 2x\\sin x + 2\\cos x + c",
          "explanation": "Combine terms and include the constant of integration.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int x^{2}\\sin x\\,dx = -x^{2}\\cos x + 2x\\sin x + 2\\cos x + c",
          "explanation": "Present the antiderivative clearly.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Recall integration by parts",
          "workingLatex": "\\int u\\,dv = uv - \\int v\\,du",
          "explanation": "This formula comes from reversing the product rule for differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Use LIATE to choose u",
          "workingLatex": "\\text{Log, Inverse trig, Algebraic, Trig, Exponential}",
          "explanation": "Pick $u$ to be the factor that simplifies when differentiated.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int x^{2}\\sin x\\,dx = -x^{2}\\cos x + 2x\\sin x + 2\\cos x + c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-by-parts.q021",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "integration by parts",
      "trigonometric",
      "repeated parts"
    ],
    "questionText": "Use integration by parts to find $\\displaystyle\\int x^{2}\\cos x\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the formula",
          "workingLatex": "\\int u\\,dv = uv - \\int v\\,du",
          "explanation": "Integration by parts reverses the product rule for differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose u and dv",
          "workingLatex": "u = x^{2},\\quad dv = \\cos x\\,dx",
          "explanation": "Use LIATE: Log, Inverse trig, Algebraic, Trig, Exponential — pick $u$ to simplify on differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find du and v",
          "workingLatex": "du = 2x\\,dx,\\quad v = \\sin x",
          "explanation": "Differentiate $u$ and integrate $dv$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the formula",
          "workingLatex": "x^{2}\\sin x - \\int 2x\\sin x\\,dx",
          "explanation": "Substitute into $\\int u\\,dv = uv - \\int v\\,du$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the remaining integral",
          "workingLatex": "x^{2}\\sin x + 2x\\cos x - 2\\sin x",
          "explanation": "The new integral should be simpler than the original.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify and add +c",
          "workingLatex": "x^{2}\\sin x + 2x\\cos x - 2\\sin x + c",
          "explanation": "Combine terms and include the constant of integration.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int x^{2}\\cos x\\,dx = x^{2}\\sin x + 2x\\cos x - 2\\sin x + c",
          "explanation": "Present the antiderivative clearly.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Recall integration by parts",
          "workingLatex": "\\int u\\,dv = uv - \\int v\\,du",
          "explanation": "This formula comes from reversing the product rule for differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Use LIATE to choose u",
          "workingLatex": "\\text{Log, Inverse trig, Algebraic, Trig, Exponential}",
          "explanation": "Pick $u$ to be the factor that simplifies when differentiated.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int x^{2}\\cos x\\,dx = x^{2}\\sin x + 2x\\cos x - 2\\sin x + c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-by-parts.q022",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "integration by parts",
      "logarithm"
    ],
    "questionText": "Use integration by parts to find $\\displaystyle\\int x^{2}\\ln x\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the formula",
          "workingLatex": "\\int u\\,dv = uv - \\int v\\,du",
          "explanation": "Integration by parts reverses the product rule for differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose u and dv",
          "workingLatex": "u = \\ln x,\\quad dv = x^{2}\\,dx",
          "explanation": "Use LIATE: Log, Inverse trig, Algebraic, Trig, Exponential — pick $u$ to simplify on differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find du and v",
          "workingLatex": "du = \\dfrac{1}{x}\\,dx,\\quad v = \\dfrac{x^{3}}{3}",
          "explanation": "Differentiate $u$ and integrate $dv$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the formula",
          "workingLatex": "\\dfrac{x^{3}}{3}\\ln x - \\int \\dfrac{x^{3}}{3} \\cdot \\dfrac{1}{x}\\,dx",
          "explanation": "Substitute into $\\int u\\,dv = uv - \\int v\\,du$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the remaining integral",
          "workingLatex": "\\dfrac{x^{3}}{3}\\ln x - \\dfrac{x^{3}}{9}",
          "explanation": "The new integral should be simpler than the original.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify and add +c",
          "workingLatex": "\\dfrac{x^{3}}{3}\\ln x - \\dfrac{x^{3}}{9} + c",
          "explanation": "Combine terms and include the constant of integration.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int x^{2}\\ln x\\,dx = \\dfrac{x^{3}}{3}\\ln x - \\dfrac{x^{3}}{9} + c",
          "explanation": "Present the antiderivative clearly.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Recall integration by parts",
          "workingLatex": "\\int u\\,dv = uv - \\int v\\,du",
          "explanation": "This formula comes from reversing the product rule for differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Use LIATE to choose u",
          "workingLatex": "\\text{Log, Inverse trig, Algebraic, Trig, Exponential}",
          "explanation": "Pick $u$ to be the factor that simplifies when differentiated.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int x^{2}\\ln x\\,dx = \\dfrac{x^{3}}{3}\\ln x - \\dfrac{x^{3}}{9} + c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-by-parts.q023",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "integration by parts",
      "exponential",
      "definite integral"
    ],
    "questionText": "Use integration by parts to evaluate $\\displaystyle\\int_{0}^{1} xe^{x}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the formula",
          "workingLatex": "\\int_{a}^{b} u\\,dv = \\left[uv\\right]_{a}^{b} - \\int_{a}^{b} v\\,du",
          "explanation": "The definite-integral version avoids introducing $+c$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose u and dv",
          "workingLatex": "u = x,\\quad dv = e^{x}\\,dx",
          "explanation": "Pick $u$ so that $du$ is simpler than $u$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find du and v",
          "workingLatex": "du = dx,\\quad v = e^{x}",
          "explanation": "Differentiate and integrate the chosen parts.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply by parts",
          "workingLatex": "\\left[xe^{x}\\right]_{0}^{1} - \\int_{0}^{1} e^{x}\\,dx",
          "explanation": "Apply integration by parts on $[0,1]$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the boundary term",
          "workingLatex": "e - 0",
          "explanation": "Boundary term: $1\\cdot e^{1} - 0\\cdot e^{0} = e$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the remaining integral",
          "workingLatex": "-\\left[e^{x}\\right]_{0}^{1} = -(e-1)",
          "explanation": "Remaining integral gives $e^{x}$ evaluated at the limits.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Combine and simplify",
          "workingLatex": "1",
          "explanation": "Give the exact value.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the answer",
          "workingLatex": "\\int_{0}^{1} xe^{x}\\,dx = 1",
          "explanation": "Final definite integral value.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Recall integration by parts",
          "workingLatex": "\\int u\\,dv = uv - \\int v\\,du",
          "explanation": "This formula comes from reversing the product rule for differentiation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{0}^{1} xe^{x}\\,dx = 1$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-by-parts.q024",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "integration by parts",
      "trigonometric",
      "definite integral"
    ],
    "questionText": "Use integration by parts to evaluate $\\displaystyle\\int_{0}^{\\dfrac{\\pi}{2}} x\\sin x\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the formula",
          "workingLatex": "\\int_{a}^{b} u\\,dv = \\left[uv\\right]_{a}^{b} - \\int_{a}^{b} v\\,du",
          "explanation": "The definite-integral version avoids introducing $+c$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose u and dv",
          "workingLatex": "u = x,\\quad dv = \\sin x\\,dx",
          "explanation": "Pick $u$ so that $du$ is simpler than $u$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find du and v",
          "workingLatex": "du = dx,\\quad v = -\\cos x",
          "explanation": "Differentiate and integrate the chosen parts.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply by parts",
          "workingLatex": "\\left[-x\\cos x\\right]_{0}^{\\pi/2} + \\int_{0}^{\\pi/2} \\cos x\\,dx",
          "explanation": "By parts with $u=x$, $dv=\\sin x\\,dx$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the boundary term",
          "workingLatex": "0 + 0 = 0",
          "explanation": "Boundary: $-\\tfrac{\\pi}{2}\\cos(\\tfrac{\\pi}{2}) + 0 = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the remaining integral",
          "workingLatex": "\\left[\\sin x\\right]_{0}^{\\pi/2} = 1",
          "explanation": "The cosine integral evaluates to $1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Combine and simplify",
          "workingLatex": "1",
          "explanation": "Give the exact value.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the answer",
          "workingLatex": "\\int_{0}^{\\dfrac{\\pi}{2}} x\\sin x\\,dx = 1",
          "explanation": "Final definite integral value.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Recall integration by parts",
          "workingLatex": "\\int u\\,dv = uv - \\int v\\,du",
          "explanation": "This formula comes from reversing the product rule for differentiation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{0}^{\\dfrac{\\pi}{2}} x\\sin x\\,dx = 1$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-by-parts.q025",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "integration by parts",
      "trigonometric",
      "definite integral"
    ],
    "questionText": "Use integration by parts to evaluate $\\displaystyle\\int_{0}^{\\dfrac{\\pi}{2}} x\\cos x\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the formula",
          "workingLatex": "\\int_{a}^{b} u\\,dv = \\left[uv\\right]_{a}^{b} - \\int_{a}^{b} v\\,du",
          "explanation": "The definite-integral version avoids introducing $+c$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose u and dv",
          "workingLatex": "u = x,\\quad dv = \\cos x\\,dx",
          "explanation": "Pick $u$ so that $du$ is simpler than $u$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find du and v",
          "workingLatex": "du = dx,\\quad v = \\sin x",
          "explanation": "Differentiate and integrate the chosen parts.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply by parts",
          "workingLatex": "\\left[x\\sin x\\right]_{0}^{\\pi/2} - \\int_{0}^{\\pi/2} \\sin x\\,dx",
          "explanation": "Standard by-parts setup.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the boundary term",
          "workingLatex": "\\dfrac{\\pi}{2}",
          "explanation": "Boundary: $\\tfrac{\\pi}{2}\\sin(\\tfrac{\\pi}{2}) = \\tfrac{\\pi}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the remaining integral",
          "workingLatex": "-\\left[-\\cos x\\right]_{0}^{\\pi/2} = -1",
          "explanation": "Integral of $\\sin x$ gives $-\\cos x$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Combine and simplify",
          "workingLatex": "\\dfrac{\\pi}{2} - 1",
          "explanation": "Give the exact value.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the answer",
          "workingLatex": "\\int_{0}^{\\dfrac{\\pi}{2}} x\\cos x\\,dx = \\dfrac{\\pi}{2} - 1",
          "explanation": "Final definite integral value.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Recall integration by parts",
          "workingLatex": "\\int u\\,dv = uv - \\int v\\,du",
          "explanation": "This formula comes from reversing the product rule for differentiation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{0}^{\\dfrac{\\pi}{2}} x\\cos x\\,dx = \\dfrac{\\pi}{2} - 1$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-by-parts.q026",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "integration by parts",
      "logarithm",
      "definite integral"
    ],
    "questionText": "Use integration by parts to evaluate $\\displaystyle\\int_{1}^{e} \\ln x\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the formula",
          "workingLatex": "\\int_{a}^{b} u\\,dv = \\left[uv\\right]_{a}^{b} - \\int_{a}^{b} v\\,du",
          "explanation": "The definite-integral version avoids introducing $+c$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose u and dv",
          "workingLatex": "u = \\ln x,\\quad dv = dx",
          "explanation": "Pick $u$ so that $du$ is simpler than $u$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find du and v",
          "workingLatex": "du = \\dfrac{1}{x}\\,dx,\\quad v = x",
          "explanation": "Differentiate and integrate the chosen parts.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply by parts",
          "workingLatex": "\\left[x\\ln x\\right]_{1}^{e} - \\int_{1}^{e} dx",
          "explanation": "Classic $\\int \\ln x\\,dx$ on $[1,e]$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the boundary term",
          "workingLatex": "e - 0 = e",
          "explanation": "Boundary: $e\\ln e - 1\\ln 1 = e$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the remaining integral",
          "workingLatex": "-\\left[x\\right]_{1}^{e} = -(e-1)",
          "explanation": "Remaining integral is $\\int 1\\,dx$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Combine and simplify",
          "workingLatex": "1",
          "explanation": "Give the exact value.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the answer",
          "workingLatex": "\\int_{1}^{e} \\ln x\\,dx = 1",
          "explanation": "Final definite integral value.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Recall integration by parts",
          "workingLatex": "\\int u\\,dv = uv - \\int v\\,du",
          "explanation": "This formula comes from reversing the product rule for differentiation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{1}^{e} \\ln x\\,dx = 1$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-by-parts.q027",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "integration by parts",
      "exponential",
      "definite integral"
    ],
    "questionText": "Use integration by parts to evaluate $\\displaystyle\\int_{0}^{1} xe^{-x}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the formula",
          "workingLatex": "\\int_{a}^{b} u\\,dv = \\left[uv\\right]_{a}^{b} - \\int_{a}^{b} v\\,du",
          "explanation": "The definite-integral version avoids introducing $+c$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose u and dv",
          "workingLatex": "u = x,\\quad dv = e^{-x}\\,dx",
          "explanation": "Pick $u$ so that $du$ is simpler than $u$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find du and v",
          "workingLatex": "du = dx,\\quad v = -e^{-x}",
          "explanation": "Differentiate and integrate the chosen parts.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply by parts",
          "workingLatex": "\\left[-xe^{-x}\\right]_{0}^{1} - \\int_{0}^{1} (-e^{-x})\\,dx",
          "explanation": "Choose $u=x$, $dv=e^{-x}dx$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the boundary term",
          "workingLatex": "-e^{-1}",
          "explanation": "Boundary term at $x=1$ gives $-e^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the remaining integral",
          "workingLatex": "-\\left[e^{-x}\\right]_{0}^{1} = -(e^{-1}-1) = 1-e^{-1}",
          "explanation": "Evaluate the exponential integral.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Combine and simplify",
          "workingLatex": "1 - 2e^{-1}",
          "explanation": "Give the exact value.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the answer",
          "workingLatex": "\\int_{0}^{1} xe^{-x}\\,dx = 1 - 2e^{-1}",
          "explanation": "Final definite integral value.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Recall integration by parts",
          "workingLatex": "\\int u\\,dv = uv - \\int v\\,du",
          "explanation": "This formula comes from reversing the product rule for differentiation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{0}^{1} xe^{-x}\\,dx = 1 - 2e^{-1}$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-by-parts.q028",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "integration by parts",
      "logarithm",
      "definite integral"
    ],
    "questionText": "Use integration by parts to evaluate $\\displaystyle\\int_{1}^{e} x\\ln x\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the formula",
          "workingLatex": "\\int_{a}^{b} u\\,dv = \\left[uv\\right]_{a}^{b} - \\int_{a}^{b} v\\,du",
          "explanation": "The definite-integral version avoids introducing $+c$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose u and dv",
          "workingLatex": "u = \\ln x,\\quad dv = x\\,dx",
          "explanation": "Pick $u$ so that $du$ is simpler than $u$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find du and v",
          "workingLatex": "du = \\dfrac{1}{x}\\,dx,\\quad v = \\dfrac{x^{2}}{2}",
          "explanation": "Differentiate and integrate the chosen parts.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply by parts",
          "workingLatex": "\\left[\\dfrac{x^{2}}{2}\\ln x\\right]_{1}^{e} - \\int_{1}^{e} \\dfrac{x}{2}\\,dx",
          "explanation": "Logarithm chosen as $u$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the boundary term",
          "workingLatex": "\\dfrac{e^{2}}{2}",
          "explanation": "At $x=e$: $\\tfrac{e^{2}}{2}\\ln e = \\tfrac{e^{2}}{2}$; at $x=1$ the term is $0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the remaining integral",
          "workingLatex": "-\\dfrac{1}{2}\\left[\\dfrac{x^{2}}{2}\\right]_{1}^{e} = -\\dfrac{e^{2}-1}{4}",
          "explanation": "Integrate $\\tfrac{x}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Combine and simplify",
          "workingLatex": "\\dfrac{e^{2}}{4} + \\dfrac{1}{4}",
          "explanation": "Give the exact value.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the answer",
          "workingLatex": "\\int_{1}^{e} x\\ln x\\,dx = \\dfrac{e^{2}}{4} + \\dfrac{1}{4}",
          "explanation": "Final definite integral value.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Recall integration by parts",
          "workingLatex": "\\int u\\,dv = uv - \\int v\\,du",
          "explanation": "This formula comes from reversing the product rule for differentiation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{1}^{e} x\\ln x\\,dx = \\dfrac{e^{2}}{4} + \\dfrac{1}{4}$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-by-parts.q029",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "integration by parts",
      "exponential",
      "definite integral"
    ],
    "questionText": "Use integration by parts to evaluate $\\displaystyle\\int_{0}^{1} xe^{2x}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the formula",
          "workingLatex": "\\int_{a}^{b} u\\,dv = \\left[uv\\right]_{a}^{b} - \\int_{a}^{b} v\\,du",
          "explanation": "The definite-integral version avoids introducing $+c$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose u and dv",
          "workingLatex": "u = x,\\quad dv = e^{2x}\\,dx",
          "explanation": "Pick $u$ so that $du$ is simpler than $u$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find du and v",
          "workingLatex": "du = dx,\\quad v = \\dfrac{1}{2}e^{2x}",
          "explanation": "Differentiate and integrate the chosen parts.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply by parts",
          "workingLatex": "\\left[\\dfrac{x}{2}e^{2x}\\right]_{0}^{1} - \\int_{0}^{1} \\dfrac{1}{2}e^{2x}\\,dx",
          "explanation": "Apply by parts.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the boundary term",
          "workingLatex": "\\dfrac{e^{2}}{2}",
          "explanation": "Boundary at $x=1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the remaining integral",
          "workingLatex": "-\\dfrac{1}{4}\\left[e^{2x}\\right]_{0}^{1} = -\\dfrac{e^{2}-1}{4}",
          "explanation": "Remaining exponential integral.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Combine and simplify",
          "workingLatex": "\\dfrac{e^{2}+1}{4}",
          "explanation": "Give the exact value.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the answer",
          "workingLatex": "\\int_{0}^{1} xe^{2x}\\,dx = \\dfrac{e^{2}+1}{4}",
          "explanation": "Final definite integral value.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Recall integration by parts",
          "workingLatex": "\\int u\\,dv = uv - \\int v\\,du",
          "explanation": "This formula comes from reversing the product rule for differentiation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{0}^{1} xe^{2x}\\,dx = \\dfrac{e^{2}+1}{4}$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-by-parts.q030",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "integration by parts",
      "trigonometric",
      "definite integral"
    ],
    "questionText": "Use integration by parts to evaluate $\\displaystyle\\int_{0}^{\\dfrac{\\pi}{4}} x\\sin(2x)\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the formula",
          "workingLatex": "\\int_{a}^{b} u\\,dv = \\left[uv\\right]_{a}^{b} - \\int_{a}^{b} v\\,du",
          "explanation": "The definite-integral version avoids introducing $+c$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose u and dv",
          "workingLatex": "u = x,\\quad dv = \\sin(2x)\\,dx",
          "explanation": "Pick $u$ so that $du$ is simpler than $u$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find du and v",
          "workingLatex": "du = dx,\\quad v = -\\dfrac{1}{2}\\cos(2x)",
          "explanation": "Differentiate and integrate the chosen parts.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply by parts",
          "workingLatex": "\\left[-\\dfrac{x}{2}\\cos(2x)\\right]_{0}^{\\pi/4} + \\int_{0}^{\\pi/4} \\dfrac{1}{2}\\cos(2x)\\,dx",
          "explanation": "Trig by parts with argument $2x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the boundary term",
          "workingLatex": "0",
          "explanation": "At $x=\\tfrac{\\pi}{4}$, $\\cos(\\tfrac{\\pi}{2})=0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the remaining integral",
          "workingLatex": "\\dfrac{1}{4}\\left[\\sin(2x)\\right]_{0}^{\\pi/4} = \\dfrac{1}{4}",
          "explanation": "Evaluate the cosine integral.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Combine and simplify",
          "workingLatex": "\\dfrac{1}{4}",
          "explanation": "Give the exact value.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the answer",
          "workingLatex": "\\int_{0}^{\\dfrac{\\pi}{4}} x\\sin(2x)\\,dx = \\dfrac{1}{4}",
          "explanation": "Final definite integral value.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Recall integration by parts",
          "workingLatex": "\\int u\\,dv = uv - \\int v\\,du",
          "explanation": "This formula comes from reversing the product rule for differentiation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{0}^{\\dfrac{\\pi}{4}} x\\sin(2x)\\,dx = \\dfrac{1}{4}$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-by-parts.q031",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "integration by parts",
      "algebraic",
      "definite integral"
    ],
    "questionText": "Use integration by parts to evaluate $\\displaystyle\\int_{0}^{1} x\\sqrt{x}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the formula",
          "workingLatex": "\\int_{a}^{b} u\\,dv = \\left[uv\\right]_{a}^{b} - \\int_{a}^{b} v\\,du",
          "explanation": "The definite-integral version avoids introducing $+c$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose u and dv",
          "workingLatex": "u = x,\\quad dv = x^{1/2}\\,dx",
          "explanation": "Pick $u$ so that $du$ is simpler than $u$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find du and v",
          "workingLatex": "du = dx,\\quad v = \\dfrac{2}{3}x^{3/2}",
          "explanation": "Differentiate and integrate the chosen parts.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply by parts",
          "workingLatex": "\\left[\\dfrac{2}{3}x^{5/2}\\right]_{0}^{1} - \\int_{0}^{1} \\dfrac{2}{3}x^{1/2}\\,dx",
          "explanation": "Algebraic $u=x$, $dv=x^{1/2}dx$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the boundary term",
          "workingLatex": "\\dfrac{2}{3}",
          "explanation": "Boundary term at $x=1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the remaining integral",
          "workingLatex": "-\\dfrac{4}{9}\\left[x^{3/2}\\right]_{0}^{1} = -\\dfrac{4}{9}",
          "explanation": "Power-law integral.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Combine and simplify",
          "workingLatex": "\\dfrac{2}{9}",
          "explanation": "Give the exact value.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the answer",
          "workingLatex": "\\int_{0}^{1} x\\sqrt{x}\\,dx = \\dfrac{2}{9}",
          "explanation": "Final definite integral value.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Recall integration by parts",
          "workingLatex": "\\int u\\,dv = uv - \\int v\\,du",
          "explanation": "This formula comes from reversing the product rule for differentiation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{0}^{1} x\\sqrt{x}\\,dx = \\dfrac{2}{9}$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-by-parts.q032",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "integration by parts",
      "algebraic",
      "definite integral"
    ],
    "questionText": "Use integration by parts to evaluate $\\displaystyle\\int_{0}^{1} x(1-x)\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the formula",
          "workingLatex": "\\int_{a}^{b} u\\,dv = \\left[uv\\right]_{a}^{b} - \\int_{a}^{b} v\\,du",
          "explanation": "The definite-integral version avoids introducing $+c$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose u and dv",
          "workingLatex": "u = x,\\quad dv = (1-x)\\,dx",
          "explanation": "Pick $u$ so that $du$ is simpler than $u$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find du and v",
          "workingLatex": "du = dx,\\quad v = x - \\dfrac{x^{2}}{2}",
          "explanation": "Differentiate and integrate the chosen parts.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply by parts",
          "workingLatex": "\\left[x\\left(x-\\dfrac{x^{2}}{2}\\right)\\right]_{0}^{1} - \\int_{0}^{1} \\left(x-\\dfrac{x^{2}}{2}\\right)dx",
          "explanation": "Expand or integrate $1-x$ directly for $v$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the boundary term",
          "workingLatex": "\\dfrac{1}{2}",
          "explanation": "Boundary term simplifies to $\\tfrac{1}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the remaining integral",
          "workingLatex": "-\\left[\\dfrac{x^{2}}{2} - \\dfrac{x^{3}}{6}\\right]_{0}^{1} = -\\dfrac{1}{3}",
          "explanation": "Polynomial integral on $[0,1]$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Combine and simplify",
          "workingLatex": "\\dfrac{1}{6}",
          "explanation": "Give the exact value.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the answer",
          "workingLatex": "\\int_{0}^{1} x(1-x)\\,dx = \\dfrac{1}{6}",
          "explanation": "Final definite integral value.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Recall integration by parts",
          "workingLatex": "\\int u\\,dv = uv - \\int v\\,du",
          "explanation": "This formula comes from reversing the product rule for differentiation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{0}^{1} x(1-x)\\,dx = \\dfrac{1}{6}$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-by-parts.q033",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "integration by parts",
      "inverse trigonometric"
    ],
    "questionText": "Use integration by parts to find $\\displaystyle\\int \\arctan x\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the formula",
          "workingLatex": "\\int u\\,dv = uv - \\int v\\,du",
          "explanation": "Integration by parts reverses the product rule for differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose u and dv",
          "workingLatex": "u = \\arctan x,\\quad dv = dx",
          "explanation": "Use LIATE: Log, Inverse trig, Algebraic, Trig, Exponential — pick $u$ to simplify on differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find du and v",
          "workingLatex": "du = \\dfrac{1}{1+x^{2}}\\,dx,\\quad v = x",
          "explanation": "Differentiate $u$ and integrate $dv$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the formula",
          "workingLatex": "x\\arctan x - \\int \\dfrac{x}{1+x^{2}}\\,dx",
          "explanation": "Substitute into $\\int u\\,dv = uv - \\int v\\,du$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the remaining integral",
          "workingLatex": "x\\arctan x - \\dfrac{1}{2}\\ln(1+x^{2})",
          "explanation": "The new integral should be simpler than the original.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify and add +c",
          "workingLatex": "x\\arctan x - \\dfrac{1}{2}\\ln(1+x^{2}) + c",
          "explanation": "Combine terms and include the constant of integration.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int \\arctan x\\,dx = x\\arctan x - \\dfrac{1}{2}\\ln(1+x^{2}) + c",
          "explanation": "Present the antiderivative clearly.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Recall integration by parts",
          "workingLatex": "\\int u\\,dv = uv - \\int v\\,du",
          "explanation": "This formula comes from reversing the product rule for differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Use LIATE to choose u",
          "workingLatex": "\\text{Log, Inverse trig, Algebraic, Trig, Exponential}",
          "explanation": "Pick $u$ to be the factor that simplifies when differentiated.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\arctan x\\,dx = x\\arctan x - \\dfrac{1}{2}\\ln(1+x^{2}) + c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-by-parts.q034",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "integration by parts",
      "inverse trigonometric"
    ],
    "questionText": "Use integration by parts to find $\\displaystyle\\int \\arcsin x\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the formula",
          "workingLatex": "\\int u\\,dv = uv - \\int v\\,du",
          "explanation": "Integration by parts reverses the product rule for differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose u and dv",
          "workingLatex": "u = \\arcsin x,\\quad dv = dx",
          "explanation": "Use LIATE: Log, Inverse trig, Algebraic, Trig, Exponential — pick $u$ to simplify on differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find du and v",
          "workingLatex": "du = \\dfrac{1}{\\sqrt{1-x^{2}}}\\,dx,\\quad v = x",
          "explanation": "Differentiate $u$ and integrate $dv$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the formula",
          "workingLatex": "x\\arcsin x - \\int \\dfrac{x}{\\sqrt{1-x^{2}}}\\,dx",
          "explanation": "Substitute into $\\int u\\,dv = uv - \\int v\\,du$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the remaining integral",
          "workingLatex": "x\\arcsin x + \\sqrt{1-x^{2}}",
          "explanation": "The new integral should be simpler than the original.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify and add +c",
          "workingLatex": "x\\arcsin x + \\sqrt{1-x^{2}} + c",
          "explanation": "Combine terms and include the constant of integration.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int \\arcsin x\\,dx = x\\arcsin x + \\sqrt{1-x^{2}} + c",
          "explanation": "Present the antiderivative clearly.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Recall integration by parts",
          "workingLatex": "\\int u\\,dv = uv - \\int v\\,du",
          "explanation": "This formula comes from reversing the product rule for differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Use LIATE to choose u",
          "workingLatex": "\\text{Log, Inverse trig, Algebraic, Trig, Exponential}",
          "explanation": "Pick $u$ to be the factor that simplifies when differentiated.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\arcsin x\\,dx = x\\arcsin x + \\sqrt{1-x^{2}} + c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-by-parts.q035",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "integration by parts",
      "logarithm"
    ],
    "questionText": "Use integration by parts to find $\\displaystyle\\int \\ln(2x)\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the formula",
          "workingLatex": "\\int u\\,dv = uv - \\int v\\,du",
          "explanation": "Integration by parts reverses the product rule for differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose u and dv",
          "workingLatex": "u = \\ln(2x),\\quad dv = dx",
          "explanation": "Use LIATE: Log, Inverse trig, Algebraic, Trig, Exponential — pick $u$ to simplify on differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find du and v",
          "workingLatex": "du = \\dfrac{1}{x}\\,dx,\\quad v = x",
          "explanation": "Differentiate $u$ and integrate $dv$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the formula",
          "workingLatex": "x\\ln(2x) - \\int x \\cdot \\dfrac{1}{x}\\,dx",
          "explanation": "Substitute into $\\int u\\,dv = uv - \\int v\\,du$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the remaining integral",
          "workingLatex": "x\\ln(2x) - x",
          "explanation": "The new integral should be simpler than the original.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify and add +c",
          "workingLatex": "x\\ln(2x) - x + c",
          "explanation": "Combine terms and include the constant of integration.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int \\ln(2x)\\,dx = x\\ln(2x) - x + c",
          "explanation": "Present the antiderivative clearly.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\ln(2x)\\,dx = x\\ln(2x) - x + c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-by-parts.q036",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "tags": [
      "integration by parts",
      "exponential",
      "repeated parts"
    ],
    "questionText": "Use integration by parts to find $\\displaystyle\\int x^{3}e^{x}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the formula",
          "workingLatex": "\\int u\\,dv = uv - \\int v\\,du",
          "explanation": "Integration by parts reverses the product rule for differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose u and dv",
          "workingLatex": "u = x^{3},\\quad dv = e^{x}\\,dx",
          "explanation": "Use LIATE: Log, Inverse trig, Algebraic, Trig, Exponential — pick $u$ to simplify on differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find du and v",
          "workingLatex": "du = 3x^{2}\\,dx,\\quad v = e^{x}",
          "explanation": "Differentiate $u$ and integrate $dv$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the formula",
          "workingLatex": "x^{3}e^{x} - \\int 3x^{2}e^{x}\\,dx",
          "explanation": "Substitute into $\\int u\\,dv = uv - \\int v\\,du$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the remaining integral",
          "workingLatex": "x^{3}e^{x} - 3x^{2}e^{x} + 6xe^{x} - 6e^{x}",
          "explanation": "The new integral should be simpler than the original.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify and add +c",
          "workingLatex": "x^{3}e^{x} - 3x^{2}e^{x} + 6xe^{x} - 6e^{x} + c",
          "explanation": "Combine terms and include the constant of integration.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int x^{3}e^{x}\\,dx = x^{3}e^{x} - 3x^{2}e^{x} + 6xe^{x} - 6e^{x} + c",
          "explanation": "Present the antiderivative clearly.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Recall integration by parts",
          "workingLatex": "\\int u\\,dv = uv - \\int v\\,du",
          "explanation": "This formula comes from reversing the product rule for differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Use LIATE to choose u",
          "workingLatex": "\\text{Log, Inverse trig, Algebraic, Trig, Exponential}",
          "explanation": "Pick $u$ to be the factor that simplifies when differentiated.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Differentiate u to find du",
          "workingLatex": "du = u'\\,dx",
          "explanation": "Differentiation of $u$ should ideally reduce complexity.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Integrate dv to find v",
          "workingLatex": "v = \\int dv",
          "explanation": "Integration of $dv$ must be doable — if not, swap your choice of $u$ and $dv$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Apply the formula",
          "workingLatex": "uv - \\int v\\,du",
          "explanation": "Substitute all four parts into the by-parts formula.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Evaluate the remaining integral",
          "workingLatex": "\\int v\\,du",
          "explanation": "The new integral should be simpler than the original.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int x^{3}e^{x}\\,dx = x^{3}e^{x} - 3x^{2}e^{x} + 6xe^{x} - 6e^{x} + c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-by-parts.q037",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "tags": [
      "integration by parts",
      "trigonometric",
      "repeated parts"
    ],
    "questionText": "Use integration by parts to find $\\displaystyle\\int x^{3}\\sin x\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the formula",
          "workingLatex": "\\int u\\,dv = uv - \\int v\\,du",
          "explanation": "Integration by parts reverses the product rule for differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose u and dv",
          "workingLatex": "u = x^{3},\\quad dv = \\sin x\\,dx",
          "explanation": "Use LIATE: Log, Inverse trig, Algebraic, Trig, Exponential — pick $u$ to simplify on differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find du and v",
          "workingLatex": "du = 3x^{2}\\,dx,\\quad v = -\\cos x",
          "explanation": "Differentiate $u$ and integrate $dv$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the formula",
          "workingLatex": "-x^{3}\\cos x + \\int 3x^{2}\\cos x\\,dx",
          "explanation": "Substitute into $\\int u\\,dv = uv - \\int v\\,du$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the remaining integral",
          "workingLatex": "-x^{3}\\cos x + 3x^{2}\\sin x + 6x\\cos x - 6\\sin x",
          "explanation": "The new integral should be simpler than the original.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify and add +c",
          "workingLatex": "-x^{3}\\cos x + 3x^{2}\\sin x + 6x\\cos x - 6\\sin x + c",
          "explanation": "Combine terms and include the constant of integration.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int x^{3}\\sin x\\,dx = -x^{3}\\cos x + 3x^{2}\\sin x + 6x\\cos x - 6\\sin x + c",
          "explanation": "Present the antiderivative clearly.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Recall integration by parts",
          "workingLatex": "\\int u\\,dv = uv - \\int v\\,du",
          "explanation": "This formula comes from reversing the product rule for differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Use LIATE to choose u",
          "workingLatex": "\\text{Log, Inverse trig, Algebraic, Trig, Exponential}",
          "explanation": "Pick $u$ to be the factor that simplifies when differentiated.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Differentiate u to find du",
          "workingLatex": "du = u'\\,dx",
          "explanation": "Differentiation of $u$ should ideally reduce complexity.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Integrate dv to find v",
          "workingLatex": "v = \\int dv",
          "explanation": "Integration of $dv$ must be doable — if not, swap your choice of $u$ and $dv$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Apply the formula",
          "workingLatex": "uv - \\int v\\,du",
          "explanation": "Substitute all four parts into the by-parts formula.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Evaluate the remaining integral",
          "workingLatex": "\\int v\\,du",
          "explanation": "The new integral should be simpler than the original.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int x^{3}\\sin x\\,dx = -x^{3}\\cos x + 3x^{2}\\sin x + 6x\\cos x - 6\\sin x + c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-by-parts.q038",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "integration by parts",
      "logarithm",
      "repeated parts"
    ],
    "questionText": "Use integration by parts to find $\\displaystyle\\int (\\ln x)^{2}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the formula",
          "workingLatex": "\\int u\\,dv = uv - \\int v\\,du",
          "explanation": "Integration by parts reverses the product rule for differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose u and dv",
          "workingLatex": "u = \\ln x,\\quad dv = \\ln x\\,dx",
          "explanation": "Use LIATE: Log, Inverse trig, Algebraic, Trig, Exponential — pick $u$ to simplify on differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find du and v",
          "workingLatex": "du = \\dfrac{1}{x}\\,dx,\\quad v = x\\ln x - x",
          "explanation": "Differentiate $u$ and integrate $dv$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the formula",
          "workingLatex": "x(\\ln x)^{2} - \\int (x\\ln x - x)\\cdot\\dfrac{1}{x}\\,dx",
          "explanation": "Substitute into $\\int u\\,dv = uv - \\int v\\,du$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the remaining integral",
          "workingLatex": "x(\\ln x)^{2} - x\\ln x + x",
          "explanation": "The new integral should be simpler than the original.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify and add +c",
          "workingLatex": "x(\\ln x)^{2} - x\\ln x + x + c",
          "explanation": "Combine terms and include the constant of integration.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int (\\ln x)^{2}\\,dx = x(\\ln x)^{2} - x\\ln x + x + c",
          "explanation": "Present the antiderivative clearly.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Recall integration by parts",
          "workingLatex": "\\int u\\,dv = uv - \\int v\\,du",
          "explanation": "This formula comes from reversing the product rule for differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Use LIATE to choose u",
          "workingLatex": "\\text{Log, Inverse trig, Algebraic, Trig, Exponential}",
          "explanation": "Pick $u$ to be the factor that simplifies when differentiated.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Differentiate u to find du",
          "workingLatex": "du = u'\\,dx",
          "explanation": "Differentiation of $u$ should ideally reduce complexity.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Integrate dv to find v",
          "workingLatex": "v = \\int dv",
          "explanation": "Integration of $dv$ must be doable — if not, swap your choice of $u$ and $dv$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Apply the formula",
          "workingLatex": "uv - \\int v\\,du",
          "explanation": "Substitute all four parts into the by-parts formula.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Evaluate the remaining integral",
          "workingLatex": "\\int v\\,du",
          "explanation": "The new integral should be simpler than the original.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int (\\ln x)^{2}\\,dx = x(\\ln x)^{2} - x\\ln x + x + c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-by-parts.q039",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "integration by parts",
      "logarithm"
    ],
    "questionText": "Use integration by parts to find $\\displaystyle\\int x\\ln(2x)\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the formula",
          "workingLatex": "\\int u\\,dv = uv - \\int v\\,du",
          "explanation": "Integration by parts reverses the product rule for differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose u and dv",
          "workingLatex": "u = \\ln(2x),\\quad dv = x\\,dx",
          "explanation": "Use LIATE: Log, Inverse trig, Algebraic, Trig, Exponential — pick $u$ to simplify on differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find du and v",
          "workingLatex": "du = \\dfrac{1}{x}\\,dx,\\quad v = \\dfrac{x^{2}}{2}",
          "explanation": "Differentiate $u$ and integrate $dv$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the formula",
          "workingLatex": "\\dfrac{x^{2}}{2}\\ln(2x) - \\int \\dfrac{x}{2}\\,dx",
          "explanation": "Substitute into $\\int u\\,dv = uv - \\int v\\,du$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the remaining integral",
          "workingLatex": "\\dfrac{x^{2}}{2}\\ln(2x) - \\dfrac{x^{2}}{4}",
          "explanation": "The new integral should be simpler than the original.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify and add +c",
          "workingLatex": "\\dfrac{x^{2}}{2}\\ln(2x) - \\dfrac{x^{2}}{4} + c",
          "explanation": "Combine terms and include the constant of integration.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int x\\ln(2x)\\,dx = \\dfrac{x^{2}}{2}\\ln(2x) - \\dfrac{x^{2}}{4} + c",
          "explanation": "Present the antiderivative clearly.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Recall integration by parts",
          "workingLatex": "\\int u\\,dv = uv - \\int v\\,du",
          "explanation": "This formula comes from reversing the product rule for differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Use LIATE to choose u",
          "workingLatex": "\\text{Log, Inverse trig, Algebraic, Trig, Exponential}",
          "explanation": "Pick $u$ to be the factor that simplifies when differentiated.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int x\\ln(2x)\\,dx = \\dfrac{x^{2}}{2}\\ln(2x) - \\dfrac{x^{2}}{4} + c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-by-parts.q040",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "integration by parts",
      "logarithm"
    ],
    "questionText": "Use integration by parts to find $\\displaystyle\\int x^{2}\\ln x\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the formula",
          "workingLatex": "\\int u\\,dv = uv - \\int v\\,du",
          "explanation": "Integration by parts reverses the product rule for differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose u and dv",
          "workingLatex": "u = \\ln x,\\quad dv = x^{2}\\,dx",
          "explanation": "Use LIATE: Log, Inverse trig, Algebraic, Trig, Exponential — pick $u$ to simplify on differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find du and v",
          "workingLatex": "du = \\dfrac{1}{x}\\,dx,\\quad v = \\dfrac{x^{3}}{3}",
          "explanation": "Differentiate $u$ and integrate $dv$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the formula",
          "workingLatex": "\\dfrac{x^{3}}{3}\\ln x - \\int \\dfrac{x^{2}}{3}\\,dx",
          "explanation": "Substitute into $\\int u\\,dv = uv - \\int v\\,du$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the remaining integral",
          "workingLatex": "\\dfrac{x^{3}}{3}\\ln x - \\dfrac{x^{3}}{9}",
          "explanation": "The new integral should be simpler than the original.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify and add +c",
          "workingLatex": "\\dfrac{x^{3}}{3}\\ln x - \\dfrac{x^{3}}{9} + c",
          "explanation": "Combine terms and include the constant of integration.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int x^{2}\\ln x\\,dx = \\dfrac{x^{3}}{3}\\ln x - \\dfrac{x^{3}}{9} + c",
          "explanation": "Present the antiderivative clearly.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Recall integration by parts",
          "workingLatex": "\\int u\\,dv = uv - \\int v\\,du",
          "explanation": "This formula comes from reversing the product rule for differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Use LIATE to choose u",
          "workingLatex": "\\text{Log, Inverse trig, Algebraic, Trig, Exponential}",
          "explanation": "Pick $u$ to be the factor that simplifies when differentiated.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int x^{2}\\ln x\\,dx = \\dfrac{x^{3}}{3}\\ln x - \\dfrac{x^{3}}{9} + c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-by-parts.q041",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "integration by parts",
      "trigonometric"
    ],
    "questionText": "Use integration by parts to find $\\displaystyle\\int x\\sec^{2}x\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the formula",
          "workingLatex": "\\int u\\,dv = uv - \\int v\\,du",
          "explanation": "Integration by parts reverses the product rule for differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose u and dv",
          "workingLatex": "u = x,\\quad dv = \\sec^{2}x\\,dx",
          "explanation": "Use LIATE: Log, Inverse trig, Algebraic, Trig, Exponential — pick $u$ to simplify on differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find du and v",
          "workingLatex": "du = dx,\\quad v = \\tan x",
          "explanation": "Differentiate $u$ and integrate $dv$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the formula",
          "workingLatex": "x\\tan x - \\int \\tan x\\,dx",
          "explanation": "Substitute into $\\int u\\,dv = uv - \\int v\\,du$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the remaining integral",
          "workingLatex": "x\\tan x + \\ln|\\cos x|",
          "explanation": "The new integral should be simpler than the original.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify and add +c",
          "workingLatex": "x\\tan x + \\ln|\\cos x| + c",
          "explanation": "Combine terms and include the constant of integration.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int x\\sec^{2}x\\,dx = x\\tan x + \\ln|\\cos x| + c",
          "explanation": "Present the antiderivative clearly.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Recall integration by parts",
          "workingLatex": "\\int u\\,dv = uv - \\int v\\,du",
          "explanation": "This formula comes from reversing the product rule for differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Use LIATE to choose u",
          "workingLatex": "\\text{Log, Inverse trig, Algebraic, Trig, Exponential}",
          "explanation": "Pick $u$ to be the factor that simplifies when differentiated.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int x\\sec^{2}x\\,dx = x\\tan x + \\ln|\\cos x| + c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-by-parts.q042",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "integration by parts",
      "logarithm"
    ],
    "questionText": "Use integration by parts to find $\\displaystyle\\int x\\ln(x^{2})\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the formula",
          "workingLatex": "\\int u\\,dv = uv - \\int v\\,du",
          "explanation": "Integration by parts reverses the product rule for differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose u and dv",
          "workingLatex": "u = \\ln(x^{2}),\\quad dv = x\\,dx",
          "explanation": "Use LIATE: Log, Inverse trig, Algebraic, Trig, Exponential — pick $u$ to simplify on differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find du and v",
          "workingLatex": "du = \\dfrac{2}{x}\\,dx,\\quad v = \\dfrac{x^{2}}{2}",
          "explanation": "Differentiate $u$ and integrate $dv$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the formula",
          "workingLatex": "\\dfrac{x^{2}}{2}\\ln(x^{2}) - \\int x\\,dx",
          "explanation": "Substitute into $\\int u\\,dv = uv - \\int v\\,du$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the remaining integral",
          "workingLatex": "x^{2}\\ln x - \\dfrac{x^{2}}{2}",
          "explanation": "The new integral should be simpler than the original.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify and add +c",
          "workingLatex": "x^{2}\\ln x - \\dfrac{x^{2}}{2} + c",
          "explanation": "Combine terms and include the constant of integration.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int x\\ln(x^{2})\\,dx = x^{2}\\ln x - \\dfrac{x^{2}}{2} + c",
          "explanation": "Present the antiderivative clearly.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Recall integration by parts",
          "workingLatex": "\\int u\\,dv = uv - \\int v\\,du",
          "explanation": "This formula comes from reversing the product rule for differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Use LIATE to choose u",
          "workingLatex": "\\text{Log, Inverse trig, Algebraic, Trig, Exponential}",
          "explanation": "Pick $u$ to be the factor that simplifies when differentiated.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int x\\ln(x^{2})\\,dx = x^{2}\\ln x - \\dfrac{x^{2}}{2} + c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-by-parts.q043",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "integration by parts",
      "algebraic"
    ],
    "questionText": "Use integration by parts to find $\\displaystyle\\int x(1+x)\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the formula",
          "workingLatex": "\\int u\\,dv = uv - \\int v\\,du",
          "explanation": "Integration by parts reverses the product rule for differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose u and dv",
          "workingLatex": "u = x,\\quad dv = (1+x)\\,dx",
          "explanation": "Use LIATE: Log, Inverse trig, Algebraic, Trig, Exponential — pick $u$ to simplify on differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find du and v",
          "workingLatex": "du = dx,\\quad v = x + \\dfrac{x^{2}}{2}",
          "explanation": "Differentiate $u$ and integrate $dv$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the formula",
          "workingLatex": "\\left(x + \\dfrac{x^{2}}{2}\\right)x - \\int \\left(x + \\dfrac{x^{2}}{2}\\right)dx",
          "explanation": "Substitute into $\\int u\\,dv = uv - \\int v\\,du$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the remaining integral",
          "workingLatex": "\\dfrac{x^{2}}{2} + \\dfrac{x^{3}}{3}",
          "explanation": "The new integral should be simpler than the original.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify and add +c",
          "workingLatex": "\\dfrac{x^{2}}{2} + \\dfrac{x^{3}}{3} + c",
          "explanation": "Combine terms and include the constant of integration.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int x(1+x)\\,dx = \\dfrac{x^{2}}{2} + \\dfrac{x^{3}}{3} + c",
          "explanation": "Present the antiderivative clearly.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int x(1+x)\\,dx = \\dfrac{x^{2}}{2} + \\dfrac{x^{3}}{3} + c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-by-parts.q044",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "integration by parts",
      "algebraic"
    ],
    "questionText": "Use integration by parts to find $\\displaystyle\\int x\\sqrt{1+x}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the formula",
          "workingLatex": "\\int u\\,dv = uv - \\int v\\,du",
          "explanation": "Integration by parts reverses the product rule for differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose u and dv",
          "workingLatex": "u = x,\\quad dv = \\sqrt{1+x}\\,dx",
          "explanation": "Use LIATE: Log, Inverse trig, Algebraic, Trig, Exponential — pick $u$ to simplify on differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find du and v",
          "workingLatex": "du = dx,\\quad v = \\dfrac{2}{3}(1+x)^{3/2}",
          "explanation": "Differentiate $u$ and integrate $dv$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the formula",
          "workingLatex": "\\dfrac{2x}{3}(1+x)^{3/2} - \\int \\dfrac{2}{3}(1+x)^{3/2}\\,dx",
          "explanation": "Substitute into $\\int u\\,dv = uv - \\int v\\,du$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the remaining integral",
          "workingLatex": "\\dfrac{2x}{3}(1+x)^{3/2} - \\dfrac{4}{15}(1+x)^{5/2}",
          "explanation": "The new integral should be simpler than the original.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify and add +c",
          "workingLatex": "\\dfrac{2x}{3}(1+x)^{3/2} - \\dfrac{4}{15}(1+x)^{5/2} + c",
          "explanation": "Combine terms and include the constant of integration.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int x\\sqrt{1+x}\\,dx = \\dfrac{2x}{3}(1+x)^{3/2} - \\dfrac{4}{15}(1+x)^{5/2} + c",
          "explanation": "Present the antiderivative clearly.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Recall integration by parts",
          "workingLatex": "\\int u\\,dv = uv - \\int v\\,du",
          "explanation": "This formula comes from reversing the product rule for differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Use LIATE to choose u",
          "workingLatex": "\\text{Log, Inverse trig, Algebraic, Trig, Exponential}",
          "explanation": "Pick $u$ to be the factor that simplifies when differentiated.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int x\\sqrt{1+x}\\,dx = \\dfrac{2x}{3}(1+x)^{3/2} - \\dfrac{4}{15}(1+x)^{5/2} + c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-by-parts.q045",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "tags": [
      "integration by parts",
      "logarithm"
    ],
    "questionText": "Use integration by parts to find $\\displaystyle\\int x\\ln(x+1)\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the formula",
          "workingLatex": "\\int u\\,dv = uv - \\int v\\,du",
          "explanation": "Integration by parts reverses the product rule for differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose u and dv",
          "workingLatex": "u = \\ln(x+1),\\quad dv = x\\,dx",
          "explanation": "Use LIATE: Log, Inverse trig, Algebraic, Trig, Exponential — pick $u$ to simplify on differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find du and v",
          "workingLatex": "du = \\dfrac{1}{x+1}\\,dx,\\quad v = \\dfrac{x^{2}}{2}",
          "explanation": "Differentiate $u$ and integrate $dv$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the formula",
          "workingLatex": "\\dfrac{x^{2}}{2}\\ln(x+1) - \\int \\dfrac{x^{2}}{2(x+1)}\\,dx",
          "explanation": "Substitute into $\\int u\\,dv = uv - \\int v\\,du$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the remaining integral",
          "workingLatex": "\\dfrac{x^{2}}{2}\\ln(x+1) - \\dfrac{x^{2}}{4} + \\dfrac{x}{2} - \\dfrac{1}{2}\\ln(x+1)",
          "explanation": "The new integral should be simpler than the original.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify and add +c",
          "workingLatex": "\\dfrac{x^{2}}{2}\\ln(x+1) - \\dfrac{x^{2}}{4} + \\dfrac{x}{2} - \\dfrac{1}{2}\\ln(x+1) + c",
          "explanation": "Combine terms and include the constant of integration.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int x\\ln(x+1)\\,dx = \\dfrac{x^{2}}{2}\\ln(x+1) - \\dfrac{x^{2}}{4} + \\dfrac{x}{2} - \\dfrac{1}{2}\\ln(x+1) + c",
          "explanation": "Present the antiderivative clearly.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Recall integration by parts",
          "workingLatex": "\\int u\\,dv = uv - \\int v\\,du",
          "explanation": "This formula comes from reversing the product rule for differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Use LIATE to choose u",
          "workingLatex": "\\text{Log, Inverse trig, Algebraic, Trig, Exponential}",
          "explanation": "Pick $u$ to be the factor that simplifies when differentiated.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Differentiate u to find du",
          "workingLatex": "du = u'\\,dx",
          "explanation": "Differentiation of $u$ should ideally reduce complexity.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Integrate dv to find v",
          "workingLatex": "v = \\int dv",
          "explanation": "Integration of $dv$ must be doable — if not, swap your choice of $u$ and $dv$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Apply the formula",
          "workingLatex": "uv - \\int v\\,du",
          "explanation": "Substitute all four parts into the by-parts formula.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Evaluate the remaining integral",
          "workingLatex": "\\int v\\,du",
          "explanation": "The new integral should be simpler than the original.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int x\\ln(x+1)\\,dx = \\dfrac{x^{2}}{2}\\ln(x+1) - \\dfrac{x^{2}}{4} + \\dfrac{x}{2} - \\dfrac{1}{2}\\ln(x+1) + c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-by-parts.q046",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "expression",
    "tags": [
      "integration by parts",
      "exponential",
      "trigonometric"
    ],
    "questionText": "Use integration by parts to find $\\displaystyle\\int xe^{x}\\sin x\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the formula",
          "workingLatex": "\\int u\\,dv = uv - \\int v\\,du",
          "explanation": "Integration by parts reverses the product rule for differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose u and dv",
          "workingLatex": "u = x,\\quad dv = e^{x}\\sin x\\,dx",
          "explanation": "Use LIATE: Log, Inverse trig, Algebraic, Trig, Exponential — pick $u$ to simplify on differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find du and v",
          "workingLatex": "du = dx,\\quad v = \\text{(cyclic)}",
          "explanation": "Differentiate $u$ and integrate $dv$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the formula",
          "workingLatex": "\\text{Apply parts twice or use the } e^{x}\\sin x \\text{ standard result}",
          "explanation": "Substitute into $\\int u\\,dv = uv - \\int v\\,du$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the remaining integral",
          "workingLatex": "e^{x}\\left[(x-\\dfrac{1}{2})\\sin x - (x+\\dfrac{1}{2})\\cos x\\right]",
          "explanation": "The new integral should be simpler than the original.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify and add +c",
          "workingLatex": "e^{x}\\left[(x-\\dfrac{1}{2})\\sin x - (x+\\dfrac{1}{2})\\cos x\\right] + c",
          "explanation": "Combine terms and include the constant of integration.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int xe^{x}\\sin x\\,dx = e^{x}\\left[(x-\\dfrac{1}{2})\\sin x - (x+\\dfrac{1}{2})\\cos x\\right] + c",
          "explanation": "Present the antiderivative clearly.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Recall integration by parts",
          "workingLatex": "\\int u\\,dv = uv - \\int v\\,du",
          "explanation": "This formula comes from reversing the product rule for differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Use LIATE to choose u",
          "workingLatex": "\\text{Log, Inverse trig, Algebraic, Trig, Exponential}",
          "explanation": "Pick $u$ to be the factor that simplifies when differentiated.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Differentiate u to find du",
          "workingLatex": "du = u'\\,dx",
          "explanation": "Differentiation of $u$ should ideally reduce complexity.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Integrate dv to find v",
          "workingLatex": "v = \\int dv",
          "explanation": "Integration of $dv$ must be doable — if not, swap your choice of $u$ and $dv$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Apply the formula",
          "workingLatex": "uv - \\int v\\,du",
          "explanation": "Substitute all four parts into the by-parts formula.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Evaluate the remaining integral",
          "workingLatex": "\\int v\\,du",
          "explanation": "The new integral should be simpler than the original.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int xe^{x}\\sin x\\,dx = e^{x}\\left[(x-\\dfrac{1}{2})\\sin x - (x+\\dfrac{1}{2})\\cos x\\right] + c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-by-parts.q047",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "tags": [
      "integration by parts",
      "logarithm",
      "repeated parts"
    ],
    "questionText": "Use integration by parts to find $\\displaystyle\\int x\\ln^{2}x\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the formula",
          "workingLatex": "\\int u\\,dv = uv - \\int v\\,du",
          "explanation": "Integration by parts reverses the product rule for differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose u and dv",
          "workingLatex": "u = \\ln^{2}x,\\quad dv = x\\,dx",
          "explanation": "Use LIATE: Log, Inverse trig, Algebraic, Trig, Exponential — pick $u$ to simplify on differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find du and v",
          "workingLatex": "du = \\dfrac{2\\ln x}{x}\\,dx,\\quad v = \\dfrac{x^{2}}{2}",
          "explanation": "Differentiate $u$ and integrate $dv$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the formula",
          "workingLatex": "\\dfrac{x^{2}}{2}\\ln^{2}x - \\int x\\ln x\\,dx",
          "explanation": "Substitute into $\\int u\\,dv = uv - \\int v\\,du$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the remaining integral",
          "workingLatex": "\\dfrac{x^{2}}{2}\\ln^{2}x - \\dfrac{x^{2}}{2}\\ln x + \\dfrac{x^{2}}{4}",
          "explanation": "The new integral should be simpler than the original.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify and add +c",
          "workingLatex": "\\dfrac{x^{2}}{2}\\ln^{2}x - \\dfrac{x^{2}}{2}\\ln x + \\dfrac{x^{2}}{4} + c",
          "explanation": "Combine terms and include the constant of integration.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int x\\ln^{2}x\\,dx = \\dfrac{x^{2}}{2}\\ln^{2}x - \\dfrac{x^{2}}{2}\\ln x + \\dfrac{x^{2}}{4} + c",
          "explanation": "Present the antiderivative clearly.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Recall integration by parts",
          "workingLatex": "\\int u\\,dv = uv - \\int v\\,du",
          "explanation": "This formula comes from reversing the product rule for differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Use LIATE to choose u",
          "workingLatex": "\\text{Log, Inverse trig, Algebraic, Trig, Exponential}",
          "explanation": "Pick $u$ to be the factor that simplifies when differentiated.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Differentiate u to find du",
          "workingLatex": "du = u'\\,dx",
          "explanation": "Differentiation of $u$ should ideally reduce complexity.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Integrate dv to find v",
          "workingLatex": "v = \\int dv",
          "explanation": "Integration of $dv$ must be doable — if not, swap your choice of $u$ and $dv$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Apply the formula",
          "workingLatex": "uv - \\int v\\,du",
          "explanation": "Substitute all four parts into the by-parts formula.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Evaluate the remaining integral",
          "workingLatex": "\\int v\\,du",
          "explanation": "The new integral should be simpler than the original.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int x\\ln^{2}x\\,dx = \\dfrac{x^{2}}{2}\\ln^{2}x - \\dfrac{x^{2}}{2}\\ln x + \\dfrac{x^{2}}{4} + c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-by-parts.q048",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "integration by parts",
      "exponential",
      "repeated parts"
    ],
    "questionText": "Use integration by parts to find $\\displaystyle\\int x^{2}e^{-x}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the formula",
          "workingLatex": "\\int u\\,dv = uv - \\int v\\,du",
          "explanation": "Integration by parts reverses the product rule for differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose u and dv",
          "workingLatex": "u = x^{2},\\quad dv = e^{-x}\\,dx",
          "explanation": "Use LIATE: Log, Inverse trig, Algebraic, Trig, Exponential — pick $u$ to simplify on differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find du and v",
          "workingLatex": "du = 2x\\,dx,\\quad v = -e^{-x}",
          "explanation": "Differentiate $u$ and integrate $dv$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the formula",
          "workingLatex": "-x^{2}e^{-x} + \\int 2xe^{-x}\\,dx",
          "explanation": "Substitute into $\\int u\\,dv = uv - \\int v\\,du$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the remaining integral",
          "workingLatex": "-x^{2}e^{-x} - 2xe^{-x} - 2e^{-x}",
          "explanation": "The new integral should be simpler than the original.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify and add +c",
          "workingLatex": "-x^{2}e^{-x} - 2xe^{-x} - 2e^{-x} + c",
          "explanation": "Combine terms and include the constant of integration.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int x^{2}e^{-x}\\,dx = -x^{2}e^{-x} - 2xe^{-x} - 2e^{-x} + c",
          "explanation": "Present the antiderivative clearly.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Recall integration by parts",
          "workingLatex": "\\int u\\,dv = uv - \\int v\\,du",
          "explanation": "This formula comes from reversing the product rule for differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Use LIATE to choose u",
          "workingLatex": "\\text{Log, Inverse trig, Algebraic, Trig, Exponential}",
          "explanation": "Pick $u$ to be the factor that simplifies when differentiated.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int x^{2}e^{-x}\\,dx = -x^{2}e^{-x} - 2xe^{-x} - 2e^{-x} + c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-by-parts.q049",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "expression",
    "tags": [
      "integration by parts",
      "cyclic",
      "exponential",
      "trigonometric",
      "multi-step"
    ],
    "questionText": "Find $\\displaystyle\\int e^{x}\\sin x\\,dx$ using integration by parts twice.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Let I denote the integral",
          "workingLatex": "I = \\int e^{x}\\sin x\\,dx",
          "explanation": "Cyclic integrals are handled by letting the unknown integral appear again.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "First application: u = sin x",
          "workingLatex": "u = \\sin x,\\; dv = e^{x}dx \\Rightarrow du = \\cos x\\,dx,\\; v = e^{x}",
          "explanation": "Choose $u$ as the trig factor.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply by parts",
          "workingLatex": "I = e^{x}\\sin x - \\int e^{x}\\cos x\\,dx",
          "explanation": "First reduction.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Second application on J = ∫eˣ cos x dx",
          "workingLatex": "u = \\cos x,\\; dv = e^{x}dx \\Rightarrow J = e^{x}\\cos x + \\int e^{x}\\sin x\\,dx",
          "explanation": "Parts on the cosine integral brings back $I$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute back",
          "workingLatex": "I = e^{x}\\sin x - e^{x}\\cos x - I",
          "explanation": "Replace $J$ in the expression for $I$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for I",
          "workingLatex": "2I = e^{x}(\\sin x - \\cos x)",
          "explanation": "Collect like terms.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Divide by 2",
          "workingLatex": "I = \\dfrac{e^{x}}{2}(\\sin x - \\cos x) + c",
          "explanation": "Standard cyclic result.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check by differentiating",
          "workingLatex": "\\dfrac{d}{dx}\\left[\\dfrac{e^{x}}{2}(\\sin x - \\cos x)\\right] = e^{x}\\sin x",
          "explanation": "Confirms the antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "\\int e^{x}\\sin x\\,dx = \\dfrac{e^{x}}{2}(\\sin x - \\cos x) + c",
          "explanation": "Memorise this form for exam speed.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Recall integration by parts",
          "workingLatex": "\\int u\\,dv = uv - \\int v\\,du",
          "explanation": "This formula comes from reversing the product rule for differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Use LIATE to choose u",
          "workingLatex": "\\text{Log, Inverse trig, Algebraic, Trig, Exponential}",
          "explanation": "Pick $u$ to be the factor that simplifies when differentiated.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Differentiate u to find du",
          "workingLatex": "du = u'\\,dx",
          "explanation": "Differentiation of $u$ should ideally reduce complexity.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Integrate dv to find v",
          "workingLatex": "v = \\int dv",
          "explanation": "Integration of $dv$ must be doable — if not, swap your choice of $u$ and $dv$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int e^{x}\\sin x\\,dx = \\dfrac{e^{x}}{2}(\\sin x - \\cos x) + c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-by-parts.q050",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "expression",
    "tags": [
      "integration by parts",
      "cyclic",
      "exponential",
      "trigonometric",
      "multi-step"
    ],
    "questionText": "Find $\\displaystyle\\int e^{x}\\cos x\\,dx$ using integration by parts twice.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Let J denote the integral",
          "workingLatex": "J = \\int e^{x}\\cos x\\,dx",
          "explanation": "This pairs with the sine cyclic integral.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "First application: u = cos x",
          "workingLatex": "u = \\cos x,\\; dv = e^{x}dx",
          "explanation": "Trig as $u$, exponential as $dv$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply by parts",
          "workingLatex": "J = e^{x}\\cos x + \\int e^{x}\\sin x\\,dx",
          "explanation": "Note the plus from $du = -\\sin x\\,dx$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Parts on ∫eˣ sin x dx",
          "workingLatex": "\\int e^{x}\\sin x\\,dx = e^{x}\\sin x - J",
          "explanation": "Second application returns $J$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute",
          "workingLatex": "J = e^{x}\\cos x + e^{x}\\sin x - J",
          "explanation": "Equation in $J$ only.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve",
          "workingLatex": "2J = e^{x}(\\cos x + \\sin x)",
          "explanation": "Collect terms.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Final form",
          "workingLatex": "J = \\dfrac{e^{x}}{2}(\\cos x + \\sin x) + c",
          "explanation": "Companion result to the sine case.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify",
          "workingLatex": "\\dfrac{d}{dx}\\left[\\dfrac{e^{x}}{2}(\\cos x + \\sin x)\\right] = e^{x}\\cos x",
          "explanation": "Differentiation check.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\int e^{x}\\cos x\\,dx = \\dfrac{e^{x}}{2}(\\cos x + \\sin x) + c",
          "explanation": "Standard cyclic integral.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Recall integration by parts",
          "workingLatex": "\\int u\\,dv = uv - \\int v\\,du",
          "explanation": "This formula comes from reversing the product rule for differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Use LIATE to choose u",
          "workingLatex": "\\text{Log, Inverse trig, Algebraic, Trig, Exponential}",
          "explanation": "Pick $u$ to be the factor that simplifies when differentiated.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Differentiate u to find du",
          "workingLatex": "du = u'\\,dx",
          "explanation": "Differentiation of $u$ should ideally reduce complexity.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Integrate dv to find v",
          "workingLatex": "v = \\int dv",
          "explanation": "Integration of $dv$ must be doable — if not, swap your choice of $u$ and $dv$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int e^{x}\\cos x\\,dx = \\dfrac{e^{x}}{2}(\\cos x + \\sin x) + c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-by-parts.q051",
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "expression",
    "tags": [
      "integration by parts",
      "cyclic",
      "exponential",
      "trigonometric",
      "multi-step"
    ],
    "questionText": "Find $\\displaystyle\\int e^{2x}\\sin 3x\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Let I = ∫e^{2x} sin 3x dx",
          "workingLatex": "I = \\int e^{2x}\\sin 3x\\,dx",
          "explanation": "Scaled exponential–trig cyclic form.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "First parts: u = sin 3x",
          "workingLatex": "u = \\sin 3x,\\; dv = e^{2x}dx \\Rightarrow du = 3\\cos 3x\\,dx,\\; v = \\dfrac{1}{2}e^{2x}",
          "explanation": "Account for the factor $2$ in the exponent.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply formula",
          "workingLatex": "I = \\dfrac{1}{2}e^{2x}\\sin 3x - \\dfrac{3}{2}\\int e^{2x}\\cos 3x\\,dx",
          "explanation": "First reduction.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Second parts on cosine integral",
          "workingLatex": "u = \\cos 3x,\\; dv = e^{2x}dx \\Rightarrow \\dfrac{1}{2}e^{2x}\\cos 3x + \\dfrac{3}{2}I",
          "explanation": "Parts again brings back $I$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute",
          "workingLatex": "I = \\dfrac{1}{2}e^{2x}\\sin 3x - \\dfrac{3}{2}\\left(\\dfrac{1}{2}e^{2x}\\cos 3x + \\dfrac{3}{2}I\\right)",
          "explanation": "Full substitution.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Expand and collect I",
          "workingLatex": "I + \\dfrac{9}{4}I = \\dfrac{1}{2}e^{2x}\\sin 3x - \\dfrac{3}{4}e^{2x}\\cos 3x",
          "explanation": "Linear equation in $I$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve",
          "workingLatex": "\\dfrac{13}{4}I = \\dfrac{e^{2x}}{4}(2\\sin 3x - 3\\cos 3x)",
          "explanation": "Multiply through by $4$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Divide",
          "workingLatex": "I = \\dfrac{e^{2x}}{13}(2\\sin 3x - 3\\cos 3x) + c",
          "explanation": "General pattern: denominator $a^{2}+b^{2}$ for $e^{ax}\\sin bx$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\int e^{2x}\\sin 3x\\,dx = \\dfrac{e^{2x}}{13}(2\\sin 3x - 3\\cos 3x) + c",
          "explanation": "Final antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Recall integration by parts",
          "workingLatex": "\\int u\\,dv = uv - \\int v\\,du",
          "explanation": "This formula comes from reversing the product rule for differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Use LIATE to choose u",
          "workingLatex": "\\text{Log, Inverse trig, Algebraic, Trig, Exponential}",
          "explanation": "Pick $u$ to be the factor that simplifies when differentiated.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Differentiate u to find du",
          "workingLatex": "du = u'\\,dx",
          "explanation": "Differentiation of $u$ should ideally reduce complexity.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Integrate dv to find v",
          "workingLatex": "v = \\int dv",
          "explanation": "Integration of $dv$ must be doable — if not, swap your choice of $u$ and $dv$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int e^{2x}\\sin 3x\\,dx = \\dfrac{e^{2x}}{13}(2\\sin 3x - 3\\cos 3x) + c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-by-parts.q052",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "tags": [
      "integration by parts",
      "exponential",
      "repeated parts",
      "multi-step"
    ],
    "questionText": "Find $\\displaystyle\\int x^{2}e^{-x}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall repeated parts",
          "workingLatex": "\\text{Apply by parts twice}",
          "explanation": "Each application reduces the power of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "First: u = x²",
          "workingLatex": "u = x^{2},\\; dv = e^{-x}dx \\Rightarrow -x^{2}e^{-x} + 2\\int xe^{-x}dx",
          "explanation": "First reduction.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Second on ∫xe^{-x}dx",
          "workingLatex": "u = x,\\; dv = e^{-x}dx \\Rightarrow -xe^{-x} - \\int e^{-x}dx",
          "explanation": "Standard $x$–exponential result.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Third integral",
          "workingLatex": "\\int e^{-x}dx = -e^{-x}",
          "explanation": "Simple exponential.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Combine",
          "workingLatex": "-x^{2}e^{-x} - 2xe^{-x} - 2e^{-x} + c",
          "explanation": "Gather all terms.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Factor",
          "workingLatex": "-e^{-x}(x^{2} + 2x + 2) + c",
          "explanation": "Optional factored form.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check at x=0",
          "workingLatex": "\\text{Derivative at } 0 \\text{ matches integrand}",
          "explanation": "Quick sanity check.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify derivative",
          "workingLatex": "\\dfrac{d}{dx}[-e^{-x}(x^{2}+2x+2)] = x^{2}e^{-x}",
          "explanation": "Full differentiation confirms.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\int x^{2}e^{-x}\\,dx = -e^{-x}(x^{2}+2x+2) + c",
          "explanation": "Final result.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Recall integration by parts",
          "workingLatex": "\\int u\\,dv = uv - \\int v\\,du",
          "explanation": "This formula comes from reversing the product rule for differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Use LIATE to choose u",
          "workingLatex": "\\text{Log, Inverse trig, Algebraic, Trig, Exponential}",
          "explanation": "Pick $u$ to be the factor that simplifies when differentiated.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Differentiate u to find du",
          "workingLatex": "du = u'\\,dx",
          "explanation": "Differentiation of $u$ should ideally reduce complexity.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Integrate dv to find v",
          "workingLatex": "v = \\int dv",
          "explanation": "Integration of $dv$ must be doable — if not, swap your choice of $u$ and $dv$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int x^{2}e^{-x}\\,dx = -e^{-x}(x^{2}+2x+2) + c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-by-parts.q053",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "tags": [
      "integration by parts",
      "inverse trigonometric",
      "multi-step"
    ],
    "questionText": "Find $\\displaystyle\\int x\\arctan x\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose u using LIATE",
          "workingLatex": "u = \\arctan x,\\; dv = x\\,dx",
          "explanation": "Inverse trig has higher priority than algebraic.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find du and v",
          "workingLatex": "du = \\dfrac{1}{1+x^{2}}dx,\\; v = \\dfrac{x^{2}}{2}",
          "explanation": "Differentiate and integrate.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply by parts",
          "workingLatex": "\\dfrac{x^{2}}{2}\\arctan x - \\int \\dfrac{x^{2}}{2(1+x^{2})}dx",
          "explanation": "Standard substitution.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the fraction",
          "workingLatex": "\\dfrac{x^{2}}{1+x^{2}} = 1 - \\dfrac{1}{1+x^{2}}",
          "explanation": "Algebraic trick for the remaining integral.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Split the integral",
          "workingLatex": "\\int \\dfrac{x^{2}}{2(1+x^{2})}dx = \\dfrac{1}{2}\\int 1\\,dx - \\dfrac{1}{2}\\int \\dfrac{1}{1+x^{2}}dx",
          "explanation": "Two standard integrals.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Integrate",
          "workingLatex": "\\dfrac{x}{2} - \\dfrac{1}{2}\\arctan x",
          "explanation": "Power and inverse-tan results.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Combine",
          "workingLatex": "\\dfrac{x^{2}}{2}\\arctan x - \\dfrac{x}{2} + \\dfrac{1}{2}\\arctan x + c",
          "explanation": "Gather terms.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Factor arctan",
          "workingLatex": "\\dfrac{1}{2}(x^{2}+1)\\arctan x - \\dfrac{x}{2} + c",
          "explanation": "Alternative neat form.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\int x\\arctan x\\,dx = \\dfrac{1}{2}(x^{2}+1)\\arctan x - \\dfrac{x}{2} + c",
          "explanation": "Final antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Recall integration by parts",
          "workingLatex": "\\int u\\,dv = uv - \\int v\\,du",
          "explanation": "This formula comes from reversing the product rule for differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Use LIATE to choose u",
          "workingLatex": "\\text{Log, Inverse trig, Algebraic, Trig, Exponential}",
          "explanation": "Pick $u$ to be the factor that simplifies when differentiated.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Differentiate u to find du",
          "workingLatex": "du = u'\\,dx",
          "explanation": "Differentiation of $u$ should ideally reduce complexity.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Integrate dv to find v",
          "workingLatex": "v = \\int dv",
          "explanation": "Integration of $dv$ must be doable — if not, swap your choice of $u$ and $dv$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int x\\arctan x\\,dx = \\dfrac{1}{2}(x^{2}+1)\\arctan x - \\dfrac{x}{2} + c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-by-parts.q054",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "expression",
    "tags": [
      "integration by parts",
      "logarithm",
      "inverse trigonometric",
      "multi-step"
    ],
    "questionText": "Find $\\displaystyle\\int \\ln(1+x^{2})\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write as product",
          "workingLatex": "\\int 1 \\cdot \\ln(1+x^{2})\\,dx",
          "explanation": "Treat the integrand as $1 \\times \\ln(1+x^{2})$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose u and dv",
          "workingLatex": "u = \\ln(1+x^{2}),\\; dv = dx",
          "explanation": "Logarithm is $u$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find du and v",
          "workingLatex": "du = \\dfrac{2x}{1+x^{2}}dx,\\; v = x",
          "explanation": "Differentiate the log.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply by parts",
          "workingLatex": "x\\ln(1+x^{2}) - \\int \\dfrac{2x^{2}}{1+x^{2}}dx",
          "explanation": "Boundary-style product minus integral.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify integrand",
          "workingLatex": "\\dfrac{2x^{2}}{1+x^{2}} = 2 - \\dfrac{2}{1+x^{2}}",
          "explanation": "Same algebraic split as for $\\arctan$ integrals.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Integrate",
          "workingLatex": "2x - 2\\arctan x",
          "explanation": "Standard results.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Combine",
          "workingLatex": "x\\ln(1+x^{2}) - 2x + 2\\arctan x + c",
          "explanation": "Full antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check x=0",
          "workingLatex": "\\text{Value } 0 \\text{ matches } \\ln 1 = 0",
          "explanation": "Domain includes $x=0$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\int \\ln(1+x^{2})\\,dx = x\\ln(1+x^{2}) - 2x + 2\\arctan x + c",
          "explanation": "Useful standard form.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Recall integration by parts",
          "workingLatex": "\\int u\\,dv = uv - \\int v\\,du",
          "explanation": "This formula comes from reversing the product rule for differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Use LIATE to choose u",
          "workingLatex": "\\text{Log, Inverse trig, Algebraic, Trig, Exponential}",
          "explanation": "Pick $u$ to be the factor that simplifies when differentiated.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Differentiate u to find du",
          "workingLatex": "du = u'\\,dx",
          "explanation": "Differentiation of $u$ should ideally reduce complexity.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Integrate dv to find v",
          "workingLatex": "v = \\int dv",
          "explanation": "Integration of $dv$ must be doable — if not, swap your choice of $u$ and $dv$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\ln(1+x^{2})\\,dx = x\\ln(1+x^{2}) - 2x + 2\\arctan x + c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-by-parts.q055",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "tags": [
      "integration by parts",
      "exponential",
      "definite integral",
      "repeated parts",
      "multi-step"
    ],
    "questionText": "Evaluate $\\displaystyle\\int_{0}^{1} x^{2}e^{x}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Repeated parts needed",
          "workingLatex": "\\int x^{2}e^{x}dx \\text{ then evaluate}",
          "explanation": "Find antiderivative first or work directly on $[0,1]$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "First parts",
          "workingLatex": "u = x^{2},\\; dv = e^{x}dx \\Rightarrow x^{2}e^{x} - 2\\int xe^{x}dx",
          "explanation": "Reduce power of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Second parts on ∫xeˣdx",
          "workingLatex": "\\int xe^{x}dx = xe^{x} - e^{x}",
          "explanation": "Standard result.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Antiderivative",
          "workingLatex": "x^{2}e^{x} - 2xe^{x} + 2e^{x}",
          "explanation": "Combine before evaluating.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate at x=1",
          "workingLatex": "e - 2e + 2e = e",
          "explanation": "Simplify at upper limit.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate at x=0",
          "workingLatex": "0 - 0 + 2 = 2",
          "explanation": "Lower limit contribution.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Subtract",
          "workingLatex": "e - 2",
          "explanation": "Definite value.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpretation",
          "workingLatex": "\\text{Area under } x^{2}e^{x} \\text{ on } [0,1]",
          "explanation": "Positive area since integrand $>0$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\int_{0}^{1} x^{2}e^{x}\\,dx = e - 2",
          "explanation": "Exact value.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Recall integration by parts",
          "workingLatex": "\\int u\\,dv = uv - \\int v\\,du",
          "explanation": "This formula comes from reversing the product rule for differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Use LIATE to choose u",
          "workingLatex": "\\text{Log, Inverse trig, Algebraic, Trig, Exponential}",
          "explanation": "Pick $u$ to be the factor that simplifies when differentiated.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Differentiate u to find du",
          "workingLatex": "du = u'\\,dx",
          "explanation": "Differentiation of $u$ should ideally reduce complexity.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Integrate dv to find v",
          "workingLatex": "v = \\int dv",
          "explanation": "Integration of $dv$ must be doable — if not, swap your choice of $u$ and $dv$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{0}^{1} x^{2}e^{x}\\,dx = e - 2$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-by-parts.q056",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "expression",
    "tags": [
      "integration by parts",
      "logarithm",
      "definite integral",
      "multi-step"
    ],
    "questionText": "Evaluate $\\displaystyle\\int_{1}^{e} x(\\ln x)^{2}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose u",
          "workingLatex": "u = (\\ln x)^{2},\\; dv = x\\,dx",
          "explanation": "Logarithmic power as $u$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find du and v",
          "workingLatex": "du = \\dfrac{2\\ln x}{x}dx,\\; v = \\dfrac{x^{2}}{2}",
          "explanation": "Differentiate $(\\ln x)^{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply by parts",
          "workingLatex": "\\left[\\dfrac{x^{2}}{2}(\\ln x)^{2}\\right]_{1}^{e} - \\int_{1}^{e} x\\ln x\\,dx",
          "explanation": "Definite by parts.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Boundary term",
          "workingLatex": "\\dfrac{e^{2}}{2}",
          "explanation": "At $x=e$; at $x=1$ the log term is $0$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Remaining integral",
          "workingLatex": "\\int_{1}^{e} x\\ln x\\,dx = \\dfrac{e^{2}}{4} + \\dfrac{1}{4}",
          "explanation": "Known definite result.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Subtract",
          "workingLatex": "\\dfrac{e^{2}}{2} - \\dfrac{e^{2}}{4} - \\dfrac{1}{4}",
          "explanation": "Combine exact values.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify",
          "workingLatex": "\\dfrac{e^{2}}{4} - \\dfrac{1}{4}",
          "explanation": "Final exact form.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Factor",
          "workingLatex": "\\dfrac{1}{4}(e^{2}-1)",
          "explanation": "Neat factored answer.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\int_{1}^{e} x(\\ln x)^{2}\\,dx = \\dfrac{e^{2}-1}{4}",
          "explanation": "Definite integral value.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Recall integration by parts",
          "workingLatex": "\\int u\\,dv = uv - \\int v\\,du",
          "explanation": "This formula comes from reversing the product rule for differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Use LIATE to choose u",
          "workingLatex": "\\text{Log, Inverse trig, Algebraic, Trig, Exponential}",
          "explanation": "Pick $u$ to be the factor that simplifies when differentiated.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Differentiate u to find du",
          "workingLatex": "du = u'\\,dx",
          "explanation": "Differentiation of $u$ should ideally reduce complexity.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Integrate dv to find v",
          "workingLatex": "v = \\int dv",
          "explanation": "Integration of $dv$ must be doable — if not, swap your choice of $u$ and $dv$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{1}^{e} x(\\ln x)^{2}\\,dx = \\dfrac{e^{2}-1}{4}$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-by-parts.q057",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "expression",
    "tags": [
      "integration by parts",
      "trigonometric",
      "identity",
      "multi-step"
    ],
    "questionText": "Find $\\displaystyle\\int x\\sin^{2}x\\,dx$ using the identity $\\sin^{2}x = \\dfrac{1 - \\cos 2x}{2}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Use the double-angle identity",
          "workingLatex": "\\sin^{2}x = \\dfrac{1 - \\cos 2x}{2}",
          "explanation": "Reduces to integrable standard forms.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rewrite integral",
          "workingLatex": "\\int x\\sin^{2}x\\,dx = \\dfrac{1}{2}\\int x\\,dx - \\dfrac{1}{2}\\int x\\cos 2x\\,dx",
          "explanation": "Split into two integrals.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "First integral",
          "workingLatex": "\\dfrac{1}{2}\\int x\\,dx = \\dfrac{x^{2}}{4}",
          "explanation": "Polynomial.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Second: parts on x cos 2x",
          "workingLatex": "u = x,\\; dv = \\cos 2x\\,dx \\Rightarrow \\dfrac{x}{2}\\sin 2x - \\dfrac{1}{4}\\sin 2x",
          "explanation": "Standard trig by parts.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Combine",
          "workingLatex": "\\dfrac{x^{2}}{4} - \\dfrac{x}{4}\\sin 2x + \\dfrac{1}{8}\\cos 2x + c",
          "explanation": "Subtract the half.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Alternative form",
          "workingLatex": "\\dfrac{x^{2}}{4} + \\dfrac{x}{4}\\sin 2x - \\dfrac{1}{8}\\sin 2x \\cdot 2 + \\cdots",
          "explanation": "Check signs carefully.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify",
          "workingLatex": "\\dfrac{x^{2}}{4} - \\dfrac{x}{4}\\sin 2x + \\dfrac{1}{8}\\cos 2x + c",
          "explanation": "Confirmed.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify at x=0",
          "workingLatex": "\\text{Constant term } \\tfrac{1}{8} + c",
          "explanation": "Consistent.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\int x\\sin^{2}x\\,dx = \\dfrac{x^{2}}{4} - \\dfrac{x}{4}\\sin 2x + \\dfrac{1}{8}\\cos 2x + c",
          "explanation": "Identity plus by parts.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Recall integration by parts",
          "workingLatex": "\\int u\\,dv = uv - \\int v\\,du",
          "explanation": "This formula comes from reversing the product rule for differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Use LIATE to choose u",
          "workingLatex": "\\text{Log, Inverse trig, Algebraic, Trig, Exponential}",
          "explanation": "Pick $u$ to be the factor that simplifies when differentiated.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Differentiate u to find du",
          "workingLatex": "du = u'\\,dx",
          "explanation": "Differentiation of $u$ should ideally reduce complexity.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Integrate dv to find v",
          "workingLatex": "v = \\int dv",
          "explanation": "Integration of $dv$ must be doable — if not, swap your choice of $u$ and $dv$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int x\\sin^{2}x\\,dx = \\dfrac{x^{2}}{4} - \\dfrac{x}{4}\\sin 2x + \\dfrac{1}{8}\\cos 2x + c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-by-parts.q058",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "expression",
    "tags": [
      "integration by parts",
      "logarithm",
      "multi-part",
      "multi-step"
    ],
    "questionText": "(a) Show that $\\displaystyle\\int \\ln x\\,dx = x\\ln x - x + c$.\n(b) Hence find $\\displaystyle\\int_{1}^{e^{2}} \\ln x\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "(a) Choose u and dv",
          "workingLatex": "u = \\ln x,\\; dv = dx",
          "explanation": "Classic logarithm integral.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply by parts",
          "workingLatex": "x\\ln x - \\int dx",
          "explanation": "Remaining integral is $x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Part (a) result",
          "workingLatex": "x\\ln x - x + c",
          "explanation": "Standard result proved.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "(b) Use limits 1 to e²",
          "workingLatex": "\\int_{1}^{e^{2}} \\ln x\\,dx",
          "explanation": "Evaluate the antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "At x = e²",
          "workingLatex": "e^{2}\\ln(e^{2}) - e^{2} = 2e^{2} - e^{2} = e^{2}",
          "explanation": "Use $\\ln(e^{2})=2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "At x = 1",
          "workingLatex": "1\\ln 1 - 1 = -1",
          "explanation": "Lower limit.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Subtract",
          "workingLatex": "e^{2} - (-1) = e^{2} + 1",
          "explanation": "Definite value.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpretation",
          "workingLatex": "\\text{Area under } \\ln x \\text{ on } [1,e^{2}]",
          "explanation": "Log curve area.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "(a) $x\\ln x - x + c$; (b) $e^{2}+1$",
          "explanation": "Both parts.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check magnitude",
          "workingLatex": "e^{2}+1 \\approx 8.39",
          "explanation": "Reasonable positive area.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Recall integration by parts",
          "workingLatex": "\\int u\\,dv = uv - \\int v\\,du",
          "explanation": "This formula comes from reversing the product rule for differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Use LIATE to choose u",
          "workingLatex": "\\text{Log, Inverse trig, Algebraic, Trig, Exponential}",
          "explanation": "Pick $u$ to be the factor that simplifies when differentiated.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Differentiate u to find du",
          "workingLatex": "du = u'\\,dx",
          "explanation": "Differentiation of $u$ should ideally reduce complexity.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\displaystyle\\int \\ln x\\,dx = x\\ln x - x + c$. (b) $\\displaystyle\\int_{1}^{e^{2}} \\ln x\\,dx = e^{2}+1$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-by-parts.q059",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "tags": [
      "integration by parts",
      "modelling",
      "differential equations",
      "multi-step"
    ],
    "questionText": "A curve has gradient function $\\dfrac{dy}{dx} = x e^{-x}$. Given that the curve passes through $(0, 1)$, find $y$ in terms of $x$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Integrate the gradient",
          "workingLatex": "y = \\int xe^{-x}\\,dx + c",
          "explanation": "Position from velocity analogue.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "By parts: u = x",
          "workingLatex": "u = x,\\; dv = e^{-x}dx \\Rightarrow -xe^{-x} - \\int (-e^{-x})dx",
          "explanation": "Standard setup.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Remaining integral",
          "workingLatex": "\\int e^{-x}dx = -e^{-x}",
          "explanation": "Exponential.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Antiderivative",
          "workingLatex": "y = -xe^{-x} - e^{-x} + c",
          "explanation": "Combine terms.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Factor",
          "workingLatex": "y = -e^{-x}(x+1) + c",
          "explanation": "Optional factored form.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Use (0, 1)",
          "workingLatex": "1 = -e^{0}(1) + c \\Rightarrow c = 2",
          "explanation": "Initial condition.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Particular solution",
          "workingLatex": "y = -e^{-x}(x+1) + 2",
          "explanation": "Curve equation.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check at x=0",
          "workingLatex": "y = -1 + 2 = 1",
          "explanation": "Passes through given point.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "y = 2 - e^{-x}(x+1)",
          "explanation": "Final model.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Recall integration by parts",
          "workingLatex": "\\int u\\,dv = uv - \\int v\\,du",
          "explanation": "This formula comes from reversing the product rule for differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Use LIATE to choose u",
          "workingLatex": "\\text{Log, Inverse trig, Algebraic, Trig, Exponential}",
          "explanation": "Pick $u$ to be the factor that simplifies when differentiated.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Differentiate u to find du",
          "workingLatex": "du = u'\\,dx",
          "explanation": "Differentiation of $u$ should ideally reduce complexity.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Integrate dv to find v",
          "workingLatex": "v = \\int dv",
          "explanation": "Integration of $dv$ must be doable — if not, swap your choice of $u$ and $dv$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = 2 - e^{-x}(x+1)$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-by-parts.q060",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "tags": [
      "integration by parts",
      "logarithm",
      "definite integral",
      "multi-step"
    ],
    "questionText": "Find $\\displaystyle\\int x^{2}\\ln x\\,dx$ and hence evaluate $\\displaystyle\\int_{1}^{e} x^{2}\\ln x\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose u = ln x",
          "workingLatex": "u = \\ln x,\\; dv = x^{2}dx",
          "explanation": "Logarithm as $u$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find du and v",
          "workingLatex": "du = \\dfrac{1}{x}dx,\\; v = \\dfrac{x^{3}}{3}",
          "explanation": "Power rule for $v$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply by parts",
          "workingLatex": "\\dfrac{x^{3}}{3}\\ln x - \\int \\dfrac{x^{2}}{3}dx",
          "explanation": "Reduce to polynomial.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate",
          "workingLatex": "\\dfrac{x^{3}}{3}\\ln x - \\dfrac{x^{3}}{9} + c",
          "explanation": "Indefinite result.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate at x=e",
          "workingLatex": "\\dfrac{e^{3}}{3} - \\dfrac{e^{3}}{9} = \\dfrac{2e^{3}}{9}",
          "explanation": "Upper limit.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate at x=1",
          "workingLatex": "0 - \\dfrac{1}{9} = -\\dfrac{1}{9}",
          "explanation": "Lower limit.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Subtract",
          "workingLatex": "\\dfrac{2e^{3}}{9} + \\dfrac{1}{9} = \\dfrac{2e^{3}+1}{9}",
          "explanation": "Definite value.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Hence link",
          "workingLatex": "\\text{Indefinite integral evaluated at limits}",
          "explanation": "Shows the power of finding $F(x)$ first.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\int x^{2}\\ln x\\,dx = \\dfrac{x^{3}}{3}\\ln x - \\dfrac{x^{3}}{9} + c;\\; \\int_{1}^{e} = \\dfrac{2e^{3}+1}{9}",
          "explanation": "Both forms.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Recall integration by parts",
          "workingLatex": "\\int u\\,dv = uv - \\int v\\,du",
          "explanation": "This formula comes from reversing the product rule for differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Use LIATE to choose u",
          "workingLatex": "\\text{Log, Inverse trig, Algebraic, Trig, Exponential}",
          "explanation": "Pick $u$ to be the factor that simplifies when differentiated.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Differentiate u to find du",
          "workingLatex": "du = u'\\,dx",
          "explanation": "Differentiation of $u$ should ideally reduce complexity.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Integrate dv to find v",
          "workingLatex": "v = \\int dv",
          "explanation": "Integration of $dv$ must be doable — if not, swap your choice of $u$ and $dv$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int x^{2}\\ln x\\,dx = \\dfrac{x^{3}}{3}\\ln x - \\dfrac{x^{3}}{9} + c$; $\\displaystyle\\int_{1}^{e} x^{2}\\ln x\\,dx = \\dfrac{2e^{3}+1}{9}$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-by-parts.q061",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "integration by parts",
      "trigonometric"
    ],
    "questionText": "Use integration by parts to find $\\displaystyle\\int x\\cos(4x)\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the formula",
          "workingLatex": "\\int u\\,dv = uv - \\int v\\,du",
          "explanation": "Integration by parts reverses the product rule for differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose u and dv",
          "workingLatex": "u = x,\\quad dv = \\cos(4x)\\,dx",
          "explanation": "Use LIATE: Log, Inverse trig, Algebraic, Trig, Exponential — pick $u$ to simplify on differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find du and v",
          "workingLatex": "du = dx,\\quad v = \\dfrac{1}{4}\\sin(4x)",
          "explanation": "Differentiate $u$ and integrate $dv$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the formula",
          "workingLatex": "\\dfrac{x}{4}\\sin(4x) - \\int \\dfrac{1}{4}\\sin(4x)\\,dx",
          "explanation": "Substitute into $\\int u\\,dv = uv - \\int v\\,du$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the remaining integral",
          "workingLatex": "\\dfrac{x}{4}\\sin(4x) + \\dfrac{1}{16}\\cos(4x)",
          "explanation": "The new integral should be simpler than the original.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify and add +c",
          "workingLatex": "\\dfrac{x}{4}\\sin(4x) + \\dfrac{1}{16}\\cos(4x) + c",
          "explanation": "Combine terms and include the constant of integration.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int x\\cos(4x)\\,dx = \\dfrac{x}{4}\\sin(4x) + \\dfrac{1}{16}\\cos(4x) + c",
          "explanation": "Present the antiderivative clearly.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Recall integration by parts",
          "workingLatex": "\\int u\\,dv = uv - \\int v\\,du",
          "explanation": "This formula comes from reversing the product rule for differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Use LIATE to choose u",
          "workingLatex": "\\text{Log, Inverse trig, Algebraic, Trig, Exponential}",
          "explanation": "Pick $u$ to be the factor that simplifies when differentiated.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int x\\cos(4x)\\,dx = \\dfrac{x}{4}\\sin(4x) + \\dfrac{1}{16}\\cos(4x) + c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-by-parts.q062",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "integration by parts",
      "exponential"
    ],
    "questionText": "Use integration by parts to find $\\displaystyle\\int x e^{-3x}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the formula",
          "workingLatex": "\\int u\\,dv = uv - \\int v\\,du",
          "explanation": "Integration by parts reverses the product rule for differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose u and dv",
          "workingLatex": "u = x,\\quad dv = e^{-3x}\\,dx",
          "explanation": "Use LIATE: Log, Inverse trig, Algebraic, Trig, Exponential — pick $u$ to simplify on differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find du and v",
          "workingLatex": "du = dx,\\quad v = -\\dfrac{1}{3}e^{-3x}",
          "explanation": "Differentiate $u$ and integrate $dv$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the formula",
          "workingLatex": "-\\dfrac{x}{3}e^{-3x} - \\int \\left(-\\dfrac{1}{3}e^{-3x}\\right)dx",
          "explanation": "Substitute into $\\int u\\,dv = uv - \\int v\\,du$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the remaining integral",
          "workingLatex": "-\\dfrac{x}{3}e^{-3x} - \\dfrac{1}{9}e^{-3x}",
          "explanation": "The new integral should be simpler than the original.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify and add +c",
          "workingLatex": "-\\dfrac{x}{3}e^{-3x} - \\dfrac{1}{9}e^{-3x} + c",
          "explanation": "Combine terms and include the constant of integration.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int x e^{-3x}\\,dx = -\\dfrac{x}{3}e^{-3x} - \\dfrac{1}{9}e^{-3x} + c",
          "explanation": "Present the antiderivative clearly.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int x e^{-3x}\\,dx = -\\dfrac{x}{3}e^{-3x} - \\dfrac{1}{9}e^{-3x} + c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-by-parts.q063",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "integration by parts",
      "logarithm"
    ],
    "questionText": "Use integration by parts to find $\\displaystyle\\int x\\ln(3x)\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the formula",
          "workingLatex": "\\int u\\,dv = uv - \\int v\\,du",
          "explanation": "Integration by parts reverses the product rule for differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose u and dv",
          "workingLatex": "u = \\ln(3x),\\quad dv = x\\,dx",
          "explanation": "Use LIATE: Log, Inverse trig, Algebraic, Trig, Exponential — pick $u$ to simplify on differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find du and v",
          "workingLatex": "du = \\dfrac{1}{x}\\,dx,\\quad v = \\dfrac{x^{2}}{2}",
          "explanation": "Differentiate $u$ and integrate $dv$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the formula",
          "workingLatex": "\\dfrac{x^{2}}{2}\\ln(3x) - \\int \\dfrac{x}{2}\\,dx",
          "explanation": "Substitute into $\\int u\\,dv = uv - \\int v\\,du$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the remaining integral",
          "workingLatex": "\\dfrac{x^{2}}{2}\\ln(3x) - \\dfrac{x^{2}}{4}",
          "explanation": "The new integral should be simpler than the original.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify and add +c",
          "workingLatex": "\\dfrac{x^{2}}{2}\\ln(3x) - \\dfrac{x^{2}}{4} + c",
          "explanation": "Combine terms and include the constant of integration.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int x\\ln(3x)\\,dx = \\dfrac{x^{2}}{2}\\ln(3x) - \\dfrac{x^{2}}{4} + c",
          "explanation": "Present the antiderivative clearly.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Recall integration by parts",
          "workingLatex": "\\int u\\,dv = uv - \\int v\\,du",
          "explanation": "This formula comes from reversing the product rule for differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Use LIATE to choose u",
          "workingLatex": "\\text{Log, Inverse trig, Algebraic, Trig, Exponential}",
          "explanation": "Pick $u$ to be the factor that simplifies when differentiated.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int x\\ln(3x)\\,dx = \\dfrac{x^{2}}{2}\\ln(3x) - \\dfrac{x^{2}}{4} + c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-by-parts.q064",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "tags": [
      "integration by parts",
      "trigonometric",
      "repeated parts"
    ],
    "questionText": "Use integration by parts to find $\\displaystyle\\int x^{2}\\cos(2x)\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the formula",
          "workingLatex": "\\int u\\,dv = uv - \\int v\\,du",
          "explanation": "Integration by parts reverses the product rule for differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose u and dv",
          "workingLatex": "u = x^{2},\\quad dv = \\cos(2x)\\,dx",
          "explanation": "Use LIATE: Log, Inverse trig, Algebraic, Trig, Exponential — pick $u$ to simplify on differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find du and v",
          "workingLatex": "du = 2x\\,dx,\\quad v = \\dfrac{1}{2}\\sin(2x)",
          "explanation": "Differentiate $u$ and integrate $dv$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the formula",
          "workingLatex": "\\dfrac{x^{2}}{2}\\sin(2x) - \\int x\\sin(2x)\\,dx",
          "explanation": "Substitute into $\\int u\\,dv = uv - \\int v\\,du$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the remaining integral",
          "workingLatex": "\\dfrac{x^{2}}{2}\\sin(2x) + \\dfrac{x}{2}\\cos(2x) - \\dfrac{1}{4}\\sin(2x)",
          "explanation": "The new integral should be simpler than the original.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify and add +c",
          "workingLatex": "\\dfrac{x^{2}}{2}\\sin(2x) + \\dfrac{x}{2}\\cos(2x) - \\dfrac{1}{4}\\sin(2x) + c",
          "explanation": "Combine terms and include the constant of integration.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int x^{2}\\cos(2x)\\,dx = \\dfrac{x^{2}}{2}\\sin(2x) + \\dfrac{x}{2}\\cos(2x) - \\dfrac{1}{4}\\sin(2x) + c",
          "explanation": "Present the antiderivative clearly.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Recall integration by parts",
          "workingLatex": "\\int u\\,dv = uv - \\int v\\,du",
          "explanation": "This formula comes from reversing the product rule for differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Use LIATE to choose u",
          "workingLatex": "\\text{Log, Inverse trig, Algebraic, Trig, Exponential}",
          "explanation": "Pick $u$ to be the factor that simplifies when differentiated.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Differentiate u to find du",
          "workingLatex": "du = u'\\,dx",
          "explanation": "Differentiation of $u$ should ideally reduce complexity.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Integrate dv to find v",
          "workingLatex": "v = \\int dv",
          "explanation": "Integration of $dv$ must be doable — if not, swap your choice of $u$ and $dv$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Apply the formula",
          "workingLatex": "uv - \\int v\\,du",
          "explanation": "Substitute all four parts into the by-parts formula.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Evaluate the remaining integral",
          "workingLatex": "\\int v\\,du",
          "explanation": "The new integral should be simpler than the original.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int x^{2}\\cos(2x)\\,dx = \\dfrac{x^{2}}{2}\\sin(2x) + \\dfrac{x}{2}\\cos(2x) - \\dfrac{1}{4}\\sin(2x) + c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-by-parts.q065",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "integration by parts",
      "algebraic"
    ],
    "questionText": "Use integration by parts to find $\\displaystyle\\int x(2+x)\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the formula",
          "workingLatex": "\\int u\\,dv = uv - \\int v\\,du",
          "explanation": "Integration by parts reverses the product rule for differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose u and dv",
          "workingLatex": "u = x,\\quad dv = (2+x)\\,dx",
          "explanation": "Use LIATE: Log, Inverse trig, Algebraic, Trig, Exponential — pick $u$ to simplify on differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find du and v",
          "workingLatex": "du = dx,\\quad v = 2x + \\dfrac{x^{2}}{2}",
          "explanation": "Differentiate $u$ and integrate $dv$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the formula",
          "workingLatex": "\\left(2x + \\dfrac{x^{2}}{2}\\right)x - \\int \\left(2x + \\dfrac{x^{2}}{2}\\right)dx",
          "explanation": "Substitute into $\\int u\\,dv = uv - \\int v\\,du$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the remaining integral",
          "workingLatex": "x^{2} + \\dfrac{x^{3}}{3}",
          "explanation": "The new integral should be simpler than the original.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify and add +c",
          "workingLatex": "x^{2} + \\dfrac{x^{3}}{3} + c",
          "explanation": "Combine terms and include the constant of integration.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int x(2+x)\\,dx = x^{2} + \\dfrac{x^{3}}{3} + c",
          "explanation": "Present the antiderivative clearly.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int x(2+x)\\,dx = x^{2} + \\dfrac{x^{3}}{3} + c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-by-parts.q066",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "integration by parts",
      "exponential",
      "definite integral"
    ],
    "questionText": "Use integration by parts to evaluate $\\displaystyle\\int_{0}^{\\ln 2} x e^{x}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the formula",
          "workingLatex": "\\int_{a}^{b} u\\,dv = \\left[uv\\right]_{a}^{b} - \\int_{a}^{b} v\\,du",
          "explanation": "The definite-integral version avoids introducing $+c$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose u and dv",
          "workingLatex": "u = x,\\quad dv = e^{x}\\,dx",
          "explanation": "Pick $u$ so that $du$ is simpler than $u$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find du and v",
          "workingLatex": "du = dx,\\quad v = e^{x}",
          "explanation": "Differentiate and integrate the chosen parts.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply by parts",
          "workingLatex": "\\left[xe^{x}\\right]_{0}^{\\ln 2} - \\int_{0}^{\\ln 2} e^{x}\\,dx",
          "explanation": "By parts on $[0, \\ln 2]$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the boundary term",
          "workingLatex": "2\\ln 2",
          "explanation": "Upper boundary: $\\ln 2 \\cdot e^{\\ln 2} = 2\\ln 2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the remaining integral",
          "workingLatex": "-(2-1) = -1",
          "explanation": "Remaining integral: $e^{x}$ from $0$ to $\\ln 2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Combine and simplify",
          "workingLatex": "2\\ln 2 - 1",
          "explanation": "Give the exact value.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the answer",
          "workingLatex": "\\int_{0}^{\\ln 2} x e^{x}\\,dx = 2\\ln 2 - 1",
          "explanation": "Final definite integral value.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Recall integration by parts",
          "workingLatex": "\\int u\\,dv = uv - \\int v\\,du",
          "explanation": "This formula comes from reversing the product rule for differentiation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{0}^{\\ln 2} x e^{x}\\,dx = 2\\ln 2 - 1$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-by-parts.q067",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "integration by parts",
      "trigonometric",
      "definite integral"
    ],
    "questionText": "Use integration by parts to evaluate $\\displaystyle\\int_{0}^{\\pi} x\\cos x\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the formula",
          "workingLatex": "\\int_{a}^{b} u\\,dv = \\left[uv\\right]_{a}^{b} - \\int_{a}^{b} v\\,du",
          "explanation": "The definite-integral version avoids introducing $+c$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose u and dv",
          "workingLatex": "u = x,\\quad dv = \\cos x\\,dx",
          "explanation": "Pick $u$ so that $du$ is simpler than $u$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find du and v",
          "workingLatex": "du = dx,\\quad v = \\sin x",
          "explanation": "Differentiate and integrate the chosen parts.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply by parts",
          "workingLatex": "\\left[x\\sin x\\right]_{0}^{\\pi} - \\int_{0}^{\\pi} \\sin x\\,dx",
          "explanation": "Standard by parts.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the boundary term",
          "workingLatex": "0",
          "explanation": "Both boundary terms at $0$ and $\\pi$ give $0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the remaining integral",
          "workingLatex": "-\\left[-\\cos x\\right]_{0}^{\\pi} = -2",
          "explanation": "Cosine integral contributes $-2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Combine and simplify",
          "workingLatex": "-2",
          "explanation": "Give the exact value.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the answer",
          "workingLatex": "\\int_{0}^{\\pi} x\\cos x\\,dx = -2",
          "explanation": "Final definite integral value.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Recall integration by parts",
          "workingLatex": "\\int u\\,dv = uv - \\int v\\,du",
          "explanation": "This formula comes from reversing the product rule for differentiation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{0}^{\\pi} x\\cos x\\,dx = -2$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-by-parts.q068",
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "expression",
    "tags": [
      "integration by parts",
      "cyclic",
      "proof",
      "multi-step"
    ],
    "questionText": "Use integration by parts to show $\\displaystyle\\int e^{ax}\\sin bx\\,dx = \\dfrac{e^{ax}}{a^{2}+b^{2}}(a\\sin bx - b\\cos bx) + c$ for constants $a, b \\neq 0$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Let I = ∫e^{ax} sin bx dx",
          "workingLatex": "I = \\int e^{ax}\\sin bx\\,dx",
          "explanation": "General cyclic template.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "First parts",
          "workingLatex": "u = \\sin bx,\\; dv = e^{ax}dx",
          "explanation": "Trig as $u$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "After first application",
          "workingLatex": "I = \\dfrac{e^{ax}}{a}\\sin bx - \\dfrac{b}{a}\\int e^{ax}\\cos bx\\,dx",
          "explanation": "Factor $\\tfrac{1}{a}$ from $v$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Second parts on cosine integral",
          "workingLatex": "u = \\cos bx,\\; dv = e^{ax}dx \\Rightarrow \\dfrac{e^{ax}}{a}\\cos bx + \\dfrac{b}{a}I",
          "explanation": "Brings $I$ back.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute and solve",
          "workingLatex": "I\\left(1 + \\dfrac{b^{2}}{a^{2}}\\right) = \\dfrac{e^{ax}}{a}(\\sin bx - \\dfrac{b}{a}\\cos bx)",
          "explanation": "Linear equation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Multiply by a²",
          "workingLatex": "I(a^{2}+b^{2}) = e^{ax}(a\\sin bx - b\\cos bx)",
          "explanation": "Clear denominators.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Divide",
          "workingLatex": "I = \\dfrac{e^{ax}}{a^{2}+b^{2}}(a\\sin bx - b\\cos bx) + c",
          "explanation": "General formula.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check a=b=1",
          "workingLatex": "Matches \\dfrac{e^{x}}{2}(\\sin x - \\cos x)",
          "explanation": "Recovers the special case.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\int e^{ax}\\sin bx\\,dx = \\dfrac{e^{ax}}{a^{2}+b^{2}}(a\\sin bx - b\\cos bx) + c",
          "explanation": "Proved.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Exam tip",
          "workingLatex": "a^{2}+b^{2} \\text{ is the denominator in the template}",
          "explanation": "Saves time in exams.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Recall integration by parts",
          "workingLatex": "\\int u\\,dv = uv - \\int v\\,du",
          "explanation": "This formula comes from reversing the product rule for differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Use LIATE to choose u",
          "workingLatex": "\\text{Log, Inverse trig, Algebraic, Trig, Exponential}",
          "explanation": "Pick $u$ to be the factor that simplifies when differentiated.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Differentiate u to find du",
          "workingLatex": "du = u'\\,dx",
          "explanation": "Differentiation of $u$ should ideally reduce complexity.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int e^{ax}\\sin bx\\,dx = \\dfrac{e^{ax}}{a^{2}+b^{2}}(a\\sin bx - b\\cos bx) + c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-by-parts.q069",
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "expression",
    "tags": [
      "integration by parts",
      "logarithm",
      "area",
      "multi-part",
      "multi-step"
    ],
    "questionText": "(a) Find $\\displaystyle\\int x\\ln x\\,dx$.\n(b) Hence find the exact area bounded by $y = x\\ln x$, the $x$-axis and the lines $x = 1$ and $x = e$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "(a) By parts with u = ln x",
          "workingLatex": "u = \\ln x,\\; dv = x\\,dx",
          "explanation": "Logarithm priority.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Antiderivative",
          "workingLatex": "F(x) = \\dfrac{x^{2}}{2}\\ln x - \\dfrac{x^{2}}{4}",
          "explanation": "From part (a).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "(b) Identify region",
          "workingLatex": "y = x\\ln x \\geq 0 \\text{ on } [1,e]",
          "explanation": "Integrand non-negative on interval.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set up area",
          "workingLatex": "A = \\int_{1}^{e} x\\ln x\\,dx",
          "explanation": "Definite integral of part (a).",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate at x=e",
          "workingLatex": "\\dfrac{e^{2}}{2} - \\dfrac{e^{2}}{4} = \\dfrac{e^{2}}{4}",
          "explanation": "Upper limit.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate at x=1",
          "workingLatex": "0 - \\dfrac{1}{4} = -\\dfrac{1}{4}",
          "explanation": "Lower limit.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Area",
          "workingLatex": "A = \\dfrac{e^{2}}{4} + \\dfrac{1}{4}",
          "explanation": "Subtract antiderivative values.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Simplify",
          "workingLatex": "A = \\dfrac{e^{2}+1}{4}",
          "explanation": "Exact area.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Units",
          "workingLatex": "\\text{square units}",
          "explanation": "Area interpretation.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Answer",
          "workingLatex": "(a) $\\tfrac{x^{2}}{2}\\ln x - \\tfrac{x^{2}}{4} + c$; (b) $\\tfrac{e^{2}+1}{4}$",
          "explanation": "Both parts.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Recall integration by parts",
          "workingLatex": "\\int u\\,dv = uv - \\int v\\,du",
          "explanation": "This formula comes from reversing the product rule for differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Use LIATE to choose u",
          "workingLatex": "\\text{Log, Inverse trig, Algebraic, Trig, Exponential}",
          "explanation": "Pick $u$ to be the factor that simplifies when differentiated.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Differentiate u to find du",
          "workingLatex": "du = u'\\,dx",
          "explanation": "Differentiation of $u$ should ideally reduce complexity.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\displaystyle\\int x\\ln x\\,dx = \\dfrac{x^{2}}{2}\\ln x - \\dfrac{x^{2}}{4} + c$. (b) Area $= \\dfrac{e^{2}+1}{4}$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-by-parts.q070",
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "expression",
    "tags": [
      "integration by parts",
      "exponential",
      "multi-part",
      "numerical integration link",
      "multi-step"
    ],
    "questionText": "(a) Use integration by parts to find $\\displaystyle\\int x^{2}e^{x}\\,dx$.\n(b) Find $\\displaystyle\\int_{0}^{2} x^{2}e^{x}\\,dx$.\n(c) State whether the trapezium rule with 4 strips would over- or under-estimate the integral in (b), giving a reason.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "(a) First parts u = x²",
          "workingLatex": "x^{2}e^{x} - 2\\int xe^{x}dx",
          "explanation": "Reduce power.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Second parts",
          "workingLatex": "\\int xe^{x}dx = xe^{x} - e^{x}",
          "explanation": "Standard.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "(a) Result",
          "workingLatex": "x^{2}e^{x} - 2xe^{x} + 2e^{x} + c",
          "explanation": "Antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "(b) At x=2",
          "workingLatex": "4e^{2} - 4e^{2} + 2e^{2} = 2e^{2}",
          "explanation": "Upper limit.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "(b) At x=0",
          "workingLatex": "0 - 0 + 2 = 2",
          "explanation": "Lower limit.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "(b) Value",
          "workingLatex": "2e^{2} - 2",
          "explanation": "Definite integral.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "(c) Concavity",
          "workingLatex": "f(x)=x^{2}e^{x} \\Rightarrow f''(x) = e^{x}(x^{2}+4x+2) > 0 \\text{ on } [0,2]",
          "explanation": "Second derivative positive.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "(c) Trapezium rule",
          "workingLatex": "\\text{Concave up } \\Rightarrow \\text{ chords lie above curve } \\Rightarrow \\text{ over-estimate}",
          "explanation": "Standard numerical-integration reasoning.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer (a)",
          "workingLatex": "x^{2}e^{x} - 2xe^{x} + 2e^{x} + c",
          "explanation": "Part (a).",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Answer (b,c)",
          "workingLatex": "(b) $2e^{2}-2$; (c) over-estimate (concave up)",
          "explanation": "All parts.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Recall integration by parts",
          "workingLatex": "\\int u\\,dv = uv - \\int v\\,du",
          "explanation": "This formula comes from reversing the product rule for differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Use LIATE to choose u",
          "workingLatex": "\\text{Log, Inverse trig, Algebraic, Trig, Exponential}",
          "explanation": "Pick $u$ to be the factor that simplifies when differentiated.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Differentiate u to find du",
          "workingLatex": "du = u'\\,dx",
          "explanation": "Differentiation of $u$ should ideally reduce complexity.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\displaystyle\\int x^{2}e^{x}\\,dx = x^{2}e^{x} - 2xe^{x} + 2e^{x} + c$. (b) $2e^{2}-2$. (c) Over-estimate — $f''(x)>0$ on $[0,2]$ so the curve is concave up."
    }
  }
];
