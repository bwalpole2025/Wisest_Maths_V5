import { Question } from "@/lib/types";

/**
 * A-Level Maths · Year 2 Pure · Integration by substitution
 * u-substitution for indefinite and definite integrals, changed limits,
 * trigonometric and exponential forms, and reverse chain rule. 70 questions.
 */
export const questions: Question[] = 
[
  {
    "id": "al.y2.pure.integration-substitution.q001",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "substitution",
      "linear substitution",
      "indefinite integral"
    ],
    "questionText": "Find $\\displaystyle\\int (2x+1)^3\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify a suitable substitution",
          "workingLatex": "u = 2x+1",
          "explanation": "Look for a linear expression inside the integrand whose derivative is a constant.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate to find $du$",
          "workingLatex": "du = 2\\,dx",
          "explanation": "Differentiating $u$ gives $du$ in terms of $dx$, which we rearrange to replace $dx$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite the integral in terms of $u$",
          "workingLatex": "\\int u^{4} \\cdot \\dfrac{du}{2}",
          "explanation": "Every $x$ term is replaced using the substitution.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate with respect to $u$",
          "workingLatex": "\\dfrac{1}{8}u^4",
          "explanation": "Integrate the simpler expression in $u$ using standard rules.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute back for $x$",
          "workingLatex": "\\dfrac{1}{8}(2x+1)^4",
          "explanation": "Replace $u$ with the original expression in $x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Add the constant of integration",
          "workingLatex": "\\dfrac{1}{8}(2x+1)^4 + c",
          "explanation": "Include $+c$ for an indefinite integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int (2x+1)^3\\,dx = \\dfrac{1}{8}(2x+1)^4 + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-substitution.q002",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "substitution",
      "linear substitution",
      "indefinite integral"
    ],
    "questionText": "Find $\\displaystyle\\int (3x-2)^5\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify a suitable substitution",
          "workingLatex": "u = 3x-2",
          "explanation": "Look for a linear expression inside the integrand whose derivative is a constant.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate to find $du$",
          "workingLatex": "du = 3\\,dx",
          "explanation": "Differentiating $u$ gives $du$ in terms of $dx$, which we rearrange to replace $dx$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite the integral in terms of $u$",
          "workingLatex": "\\int u^{6} \\cdot \\dfrac{du}{3}",
          "explanation": "Every $x$ term is replaced using the substitution.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate with respect to $u$",
          "workingLatex": "\\dfrac{1}{18}u^6",
          "explanation": "Integrate the simpler expression in $u$ using standard rules.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute back for $x$",
          "workingLatex": "\\dfrac{1}{18}(3x-2)^6",
          "explanation": "Replace $u$ with the original expression in $x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Add the constant of integration",
          "workingLatex": "\\dfrac{1}{18}(3x-2)^6 + c",
          "explanation": "Include $+c$ for an indefinite integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int (3x-2)^5\\,dx = \\dfrac{1}{18}(3x-2)^6 + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-substitution.q003",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "substitution",
      "linear substitution",
      "indefinite integral"
    ],
    "questionText": "Find $\\displaystyle\\int \\sqrt{4x+1}\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify a suitable substitution",
          "workingLatex": "u = 4x+1",
          "explanation": "Look for a linear expression inside the integrand whose derivative is a constant.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate to find $du$",
          "workingLatex": "du = 4\\,dx",
          "explanation": "Differentiating $u$ gives $du$ in terms of $dx$, which we rearrange to replace $dx$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite the integral in terms of $u$",
          "workingLatex": "\\int u^{3/2} \\cdot \\dfrac{du}{4}",
          "explanation": "Every $x$ term is replaced using the substitution.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate with respect to $u$",
          "workingLatex": "\\dfrac{1}{6}u^{3/2}",
          "explanation": "Integrate the simpler expression in $u$ using standard rules.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute back for $x$",
          "workingLatex": "\\dfrac{1}{6}(4x+1)^{3/2}",
          "explanation": "Replace $u$ with the original expression in $x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Add the constant of integration",
          "workingLatex": "\\dfrac{1}{6}(4x+1)^{3/2} + c",
          "explanation": "Include $+c$ for an indefinite integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\sqrt{4x+1}\\,dx = \\dfrac{1}{6}(4x+1)^{3/2} + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-substitution.q004",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "substitution",
      "linear substitution",
      "indefinite integral"
    ],
    "questionText": "Find $\\displaystyle\\int \\dfrac{1}{3x+2}\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify a suitable substitution",
          "workingLatex": "u = 3x+2",
          "explanation": "Look for a linear expression inside the integrand whose derivative is a constant.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate to find $du$",
          "workingLatex": "du = 3\\,dx",
          "explanation": "Differentiating $u$ gives $du$ in terms of $dx$, which we rearrange to replace $dx$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite the integral in terms of $u$",
          "workingLatex": "\\int \\dfrac{1}{u} \\cdot \\dfrac{du}{3}",
          "explanation": "Every $x$ term is replaced using the substitution.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate with respect to $u$",
          "workingLatex": "\\dfrac{1}{3}\\ln|3x+2|",
          "explanation": "Integrate the simpler expression in $u$ using standard rules.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute back for $x$",
          "workingLatex": "\\dfrac{1}{3}\\ln|3x+2|",
          "explanation": "Replace $u$ with the original expression in $x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Add the constant of integration",
          "workingLatex": "\\dfrac{1}{3}\\ln|3x+2| + c",
          "explanation": "Include $+c$ for an indefinite integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\dfrac{1}{3x+2}\\,dx = \\dfrac{1}{3}\\ln|3x+2| + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-substitution.q005",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "substitution",
      "linear substitution",
      "indefinite integral"
    ],
    "questionText": "Find $\\displaystyle\\int e^{5x}\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify a suitable substitution",
          "workingLatex": "u = 5x",
          "explanation": "Look for a linear expression inside the integrand whose derivative is a constant.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate to find $du$",
          "workingLatex": "du = 5\\,dx",
          "explanation": "Differentiating $u$ gives $du$ in terms of $dx$, which we rearrange to replace $dx$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite the integral in terms of $u$",
          "workingLatex": "\\int \\dfrac{1}{u} \\cdot \\dfrac{du}{5}",
          "explanation": "Every $x$ term is replaced using the substitution.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate with respect to $u$",
          "workingLatex": "\\dfrac{1}{5}e^u",
          "explanation": "Integrate the simpler expression in $u$ using standard rules.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute back for $x$",
          "workingLatex": "\\dfrac{1}{5}e^{5x}",
          "explanation": "Replace $u$ with the original expression in $x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Add the constant of integration",
          "workingLatex": "\\dfrac{1}{5}e^{5x} + c",
          "explanation": "Include $+c$ for an indefinite integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int e^{5x}\\,dx = \\dfrac{1}{5}e^{5x} + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-substitution.q006",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "substitution",
      "linear substitution",
      "indefinite integral"
    ],
    "questionText": "Find $\\displaystyle\\int (1-x)^4\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify a suitable substitution",
          "workingLatex": "u = 1-x",
          "explanation": "Look for a linear expression inside the integrand whose derivative is a constant.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate to find $du$",
          "workingLatex": "du = -dx",
          "explanation": "Differentiating $u$ gives $du$ in terms of $dx$, which we rearrange to replace $dx$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite the integral in terms of $u$",
          "workingLatex": "\\int u^{5} \\cdot \\dfrac{du}{1}",
          "explanation": "Every $x$ term is replaced using the substitution.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate with respect to $u$",
          "workingLatex": "-\\dfrac{1}{5}u^5",
          "explanation": "Integrate the simpler expression in $u$ using standard rules.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute back for $x$",
          "workingLatex": "-\\dfrac{1}{5}(1-x)^5",
          "explanation": "Replace $u$ with the original expression in $x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Add the constant of integration",
          "workingLatex": "-\\dfrac{1}{5}(1-x)^5 + c",
          "explanation": "Include $+c$ for an indefinite integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int (1-x)^4\\,dx = -\\dfrac{1}{5}(1-x)^5 + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-substitution.q007",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "substitution",
      "linear substitution",
      "indefinite integral"
    ],
    "questionText": "Find $\\displaystyle\\int \\dfrac{2}{5x-1}\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify a suitable substitution",
          "workingLatex": "u = 5x-1",
          "explanation": "Look for a linear expression inside the integrand whose derivative is a constant.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate to find $du$",
          "workingLatex": "du = 5\\,dx",
          "explanation": "Differentiating $u$ gives $du$ in terms of $dx$, which we rearrange to replace $dx$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite the integral in terms of $u$",
          "workingLatex": "\\int \\dfrac{1}{u} \\cdot \\dfrac{du}{5}",
          "explanation": "Every $x$ term is replaced using the substitution.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate with respect to $u$",
          "workingLatex": "\\dfrac{2}{5}\\ln|5x-1|",
          "explanation": "Integrate the simpler expression in $u$ using standard rules.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute back for $x$",
          "workingLatex": "\\dfrac{2}{5}\\ln|5x-1|",
          "explanation": "Replace $u$ with the original expression in $x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Add the constant of integration",
          "workingLatex": "\\dfrac{2}{5}\\ln|5x-1| + c",
          "explanation": "Include $+c$ for an indefinite integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\dfrac{2}{5x-1}\\,dx = \\dfrac{2}{5}\\ln|5x-1| + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-substitution.q008",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "substitution",
      "linear substitution",
      "indefinite integral"
    ],
    "questionText": "Find $\\displaystyle\\int (x+3)^{-2}\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify a suitable substitution",
          "workingLatex": "u = x+3",
          "explanation": "Look for a linear expression inside the integrand whose derivative is a constant.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate to find $du$",
          "workingLatex": "du = dx",
          "explanation": "Differentiating $u$ gives $du$ in terms of $dx$, which we rearrange to replace $dx$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite the integral in terms of $u$",
          "workingLatex": "\\int u^{-2}\\,du",
          "explanation": "Every $x$ term is replaced using the substitution.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate with respect to $u$",
          "workingLatex": "-u^{-1}",
          "explanation": "Integrate the simpler expression in $u$ using standard rules.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute back for $x$",
          "workingLatex": "-(x+3)^{-1}",
          "explanation": "Replace $u$ with the original expression in $x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Add the constant of integration",
          "workingLatex": "-(x+3)^{-1} + c",
          "explanation": "Include $+c$ for an indefinite integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int (x+3)^{-2}\\,dx = -(x+3)^{-1} + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-substitution.q009",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "substitution",
      "reverse chain rule"
    ],
    "questionText": "Find $\\displaystyle\\int x(x^2+1)^3\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Spot the reverse chain rule",
          "workingLatex": "u = x^2+1",
          "explanation": "The integrand contains a function of $x^2$ (or similar) multiplied by (a constant times) its derivative.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Define the substitution",
          "workingLatex": "u = x^2+1, \\quad du = 2x\\,dx",
          "explanation": "Let $u$ be the inner function; then $du$ appears as a factor in the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite in terms of $u$",
          "workingLatex": "\\text{integral becomes a standard form in } u",
          "explanation": "The $x\\,dx$ factor combines with $du$ to leave a simple integral.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate",
          "workingLatex": "\\dfrac{1}{8}(x^2+1)^4",
          "explanation": "Apply the power rule, exponential rule, or logarithm rule in $u$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute back",
          "workingLatex": "\\dfrac{1}{8}(x^2+1)^4",
          "explanation": "Replace $u$ with the expression in $x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check by differentiating",
          "workingLatex": "\\frac{d}{dx}\\left(\\dfrac{1}{8}(x^2+1)^4\\right)",
          "explanation": "Differentiating the answer should recover the integrand.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int x(x^2+1)^3\\,dx = \\dfrac{1}{8}(x^2+1)^4 + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-substitution.q010",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "substitution",
      "reverse chain rule"
    ],
    "questionText": "Find $\\displaystyle\\int x e^{x^2}\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Spot the reverse chain rule",
          "workingLatex": "u = x^2",
          "explanation": "The integrand contains a function of $x^2$ (or similar) multiplied by (a constant times) its derivative.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Define the substitution",
          "workingLatex": "u = x^2, \\quad du = 2x\\,dx",
          "explanation": "Let $u$ be the inner function; then $du$ appears as a factor in the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite in terms of $u$",
          "workingLatex": "\\text{integral becomes a standard form in } u",
          "explanation": "The $x\\,dx$ factor combines with $du$ to leave a simple integral.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate",
          "workingLatex": "\\dfrac{1}{2}e^{x^2}",
          "explanation": "Apply the power rule, exponential rule, or logarithm rule in $u$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute back",
          "workingLatex": "\\dfrac{1}{2}e^{x^2}",
          "explanation": "Replace $u$ with the expression in $x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check by differentiating",
          "workingLatex": "\\frac{d}{dx}\\left(\\dfrac{1}{2}e^{x^2}\\right)",
          "explanation": "Differentiating the answer should recover the integrand.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int x e^{x^2}\\,dx = \\dfrac{1}{2}e^{x^2} + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-substitution.q011",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "substitution",
      "reverse chain rule"
    ],
    "questionText": "Find $\\displaystyle\\int \\dfrac{x}{x^2+4}\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Spot the reverse chain rule",
          "workingLatex": "u = x^2+4",
          "explanation": "The integrand contains a function of $x^2$ (or similar) multiplied by (a constant times) its derivative.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Define the substitution",
          "workingLatex": "u = x^2+4, \\quad du = 2x\\,dx",
          "explanation": "Let $u$ be the inner function; then $du$ appears as a factor in the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite in terms of $u$",
          "workingLatex": "\\text{integral becomes a standard form in } u",
          "explanation": "The $x\\,dx$ factor combines with $du$ to leave a simple integral.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate",
          "workingLatex": "\\dfrac{1}{2}\\ln(x^2+4)",
          "explanation": "Apply the power rule, exponential rule, or logarithm rule in $u$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute back",
          "workingLatex": "\\dfrac{1}{2}\\ln(x^2+4)",
          "explanation": "Replace $u$ with the expression in $x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check by differentiating",
          "workingLatex": "\\frac{d}{dx}\\left(\\dfrac{1}{2}\\ln(x^2+4)\\right)",
          "explanation": "Differentiating the answer should recover the integrand.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\dfrac{x}{x^2+4}\\,dx = \\dfrac{1}{2}\\ln(x^2+4) + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-substitution.q012",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "substitution",
      "reverse chain rule"
    ],
    "questionText": "Find $\\displaystyle\\int x\\sqrt{x^2+9}\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Spot the reverse chain rule",
          "workingLatex": "u = x^2+9",
          "explanation": "The integrand contains a function of $x^2$ (or similar) multiplied by (a constant times) its derivative.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Define the substitution",
          "workingLatex": "u = x^2+9, \\quad du = 2x\\,dx",
          "explanation": "Let $u$ be the inner function; then $du$ appears as a factor in the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite in terms of $u$",
          "workingLatex": "\\text{integral becomes a standard form in } u",
          "explanation": "The $x\\,dx$ factor combines with $du$ to leave a simple integral.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate",
          "workingLatex": "\\dfrac{1}{3}(x^2+9)^{3/2}",
          "explanation": "Apply the power rule, exponential rule, or logarithm rule in $u$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute back",
          "workingLatex": "\\dfrac{1}{3}(x^2+9)^{3/2}",
          "explanation": "Replace $u$ with the expression in $x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check by differentiating",
          "workingLatex": "\\frac{d}{dx}\\left(\\dfrac{1}{3}(x^2+9)^{3/2}\\right)",
          "explanation": "Differentiating the answer should recover the integrand.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int x\\sqrt{x^2+9}\\,dx = \\dfrac{1}{3}(x^2+9)^{3/2} + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-substitution.q013",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "substitution",
      "trigonometry"
    ],
    "questionText": "Find $\\displaystyle\\int \\sin x \\cos x\\,dx$, where $x$ is in radians.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose a substitution",
          "workingLatex": "u = \\sin x",
          "explanation": "One trig factor is the derivative (up to sign) of the inner function in the other factor.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find $du$",
          "workingLatex": "du = \\cos x\\,dx",
          "explanation": "Differentiate $u$ to obtain $du$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite the integral",
          "workingLatex": "\\int u^n\\,du \\text{ (after adjusting constants)}",
          "explanation": "The remaining trig factor becomes part of $du$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate",
          "workingLatex": "\\dfrac{1}{2}\\sin^2 x",
          "explanation": "Use the power rule on $u$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute back",
          "workingLatex": "\\dfrac{1}{2}\\sin^2 x",
          "explanation": "Express the answer in terms of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Alternative check",
          "workingLatex": "\\text{Could also use } u = \\cos x",
          "explanation": "Some trig products allow either substitution; both give equivalent answers differing by a constant.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\sin x \\cos x\\,dx = \\dfrac{1}{2}\\sin^2 x + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-substitution.q014",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "substitution",
      "trigonometry"
    ],
    "questionText": "Find $\\displaystyle\\int \\sin x \\cos^2 x\\,dx$, where $x$ is in radians.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose a substitution",
          "workingLatex": "u = \\cos x",
          "explanation": "One trig factor is the derivative (up to sign) of the inner function in the other factor.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find $du$",
          "workingLatex": "du = -\\sin x\\,dx",
          "explanation": "Differentiate $u$ to obtain $du$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite the integral",
          "workingLatex": "\\int u^n\\,du \\text{ (after adjusting constants)}",
          "explanation": "The remaining trig factor becomes part of $du$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate",
          "workingLatex": "-\\dfrac{1}{3}\\cos^3 x",
          "explanation": "Use the power rule on $u$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute back",
          "workingLatex": "-\\dfrac{1}{3}\\cos^3 x",
          "explanation": "Express the answer in terms of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Alternative check",
          "workingLatex": "\\text{Could also use } u = \\cos x",
          "explanation": "Some trig products allow either substitution; both give equivalent answers differing by a constant.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\sin x \\cos^2 x\\,dx = -\\dfrac{1}{3}\\cos^3 x + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-substitution.q015",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "substitution",
      "trigonometry"
    ],
    "questionText": "Find $\\displaystyle\\int 2\\sin x \\cos x\\,dx$, where $x$ is in radians.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose a substitution",
          "workingLatex": "u = \\sin x",
          "explanation": "One trig factor is the derivative (up to sign) of the inner function in the other factor.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find $du$",
          "workingLatex": "du = \\cos x\\,dx",
          "explanation": "Differentiate $u$ to obtain $du$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite the integral",
          "workingLatex": "\\int u^n\\,du \\text{ (after adjusting constants)}",
          "explanation": "The remaining trig factor becomes part of $du$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate",
          "workingLatex": "\\sin^2 x",
          "explanation": "Use the power rule on $u$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute back",
          "workingLatex": "\\sin^2 x",
          "explanation": "Express the answer in terms of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Alternative check",
          "workingLatex": "\\text{Could also use } u = \\cos x",
          "explanation": "Some trig products allow either substitution; both give equivalent answers differing by a constant.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int 2\\sin x \\cos x\\,dx = \\sin^2 x + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-substitution.q016",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "tags": [
      "substitution",
      "method"
    ],
    "questionText": "Explain why $u$-substitution works for integrating $\\displaystyle\\int f(g(x))g'(x)\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the substitution",
          "workingLatex": "u = g(x)",
          "explanation": "Let $u$ equal the inner function.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate",
          "workingLatex": "\\dfrac{du}{dx} = g'(x) \\Rightarrow du = g'(x)\\,dx",
          "explanation": "The derivative of the inner function provides the $dx$ replacement.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite the integral",
          "workingLatex": "\\int f(g(x))g'(x)\\,dx = \\int f(u)\\,du",
          "explanation": "Every part of the integrand is now in terms of $u$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate in $u$",
          "workingLatex": "\\int f(u)\\,du = F(u) + c",
          "explanation": "The integral becomes a standard form in the new variable.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Reverse substitute",
          "workingLatex": "F(g(x)) + c",
          "explanation": "Replace $u$ with $g(x)$ to express the answer in $x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Connect to the chain rule",
          "workingLatex": "\\frac{d}{dx}F(g(x)) = f(g(x))g'(x)",
          "explanation": "Substitution is the reverse of the chain rule for differentiation — which is why the $g'(x)$ factor must be present.",
          "diagram": null
        }
      ],
      "finalAnswer": "With $u = g(x)$, $du = g'(x)\\,dx$, so $\\int f(g(x))g'(x)\\,dx = \\int f(u)\\,du$; this is the reverse of the chain rule."
    }
  },
  {
    "id": "al.y2.pure.integration-substitution.q017",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "substitution",
      "logarithm"
    ],
    "questionText": "Find $\\displaystyle\\int \\dfrac{\\ln x}{x}\\,dx$, where $x > 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose $u = \\ln x$",
          "workingLatex": "u = \\ln x",
          "explanation": "The derivative of $\\ln x$ is $\\dfrac{1}{x}$, which appears as a factor.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find $du$",
          "workingLatex": "du = \\dfrac{1}{x}\\,dx",
          "explanation": "Differentiating $\\ln x$ gives the reciprocal factor in the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite",
          "workingLatex": "\\int u\\,du",
          "explanation": "The integral becomes a simple polynomial in $u$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate",
          "workingLatex": "\\dfrac{1}{2}u^2 + c",
          "explanation": "Integrate $u$ using the power rule.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute back",
          "workingLatex": "\\dfrac{1}{2}(\\ln x)^2 + c",
          "explanation": "Replace $u$ with $\\ln x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "\\dfrac{1}{2}(\\ln x)^2 + c",
          "explanation": "The integral of $\\dfrac{\\ln x}{x}$ is half the square of $\\ln x$, plus a constant.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\dfrac{\\ln x}{x}\\,dx = \\dfrac{1}{2}(\\ln x)^2 + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-substitution.q018",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "substitution",
      "exponential"
    ],
    "questionText": "Find $\\displaystyle\\int x e^{x^2}\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the inner function",
          "workingLatex": "u = x^2",
          "explanation": "The exponent $x^2$ is differentiated to give $2x$, which appears (up to a factor) in the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate",
          "workingLatex": "du = 2x\\,dx",
          "explanation": "So $x\\,dx = \\dfrac{1}{2}du$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute",
          "workingLatex": "\\int e^u \\cdot \\dfrac{1}{2}\\,du = \\dfrac{1}{2}\\int e^u\\,du",
          "explanation": "The integral reduces to the standard exponential.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate",
          "workingLatex": "\\dfrac{1}{2}e^u + c",
          "explanation": "$e^u$ is its own antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Back-substitute",
          "workingLatex": "\\dfrac{1}{2}e^{x^2} + c",
          "explanation": "Replace $u$ with $x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify",
          "workingLatex": "\\frac{d}{dx}\\left(\\dfrac{1}{2}e^{x^2}\\right) = x e^{x^2}",
          "explanation": "Differentiating confirms the result.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int x e^{x^2}\\,dx = \\dfrac{1}{2}e^{x^2} + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-substitution.q019",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "substitution",
      "indefinite integral"
    ],
    "questionText": "Find $\\displaystyle\\int \\sin^3 x \\cos x\\,dx$, where $x$ is in radians where applicable.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the substitution",
          "workingLatex": "u = \\sin x",
          "explanation": "Identify the inner function whose derivative appears as a factor.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate to find $du$",
          "workingLatex": "du = \\cos x\\,dx",
          "explanation": "Compute $du$ and solve for the matching factor in the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Express $dx$ or combine factors",
          "workingLatex": "\\text{rewrite integral in } u",
          "explanation": "Replace every $x$-term using the substitution.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the integral",
          "workingLatex": "\\int u^{4}\\,du",
          "explanation": "The integral should now be a standard power or logarithm form.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate with respect to $u$",
          "workingLatex": "\\dfrac{1}{4}\\sin^4 x",
          "explanation": "Apply the appropriate integration rule.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute back for $x$",
          "workingLatex": "\\dfrac{1}{4}\\sin^4 x",
          "explanation": "Replace $u$ with the original expression.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Include $+c$",
          "workingLatex": "\\dfrac{1}{4}\\sin^4 x + c",
          "explanation": "Add the constant of integration.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check by differentiating",
          "workingLatex": "\\frac{d}{dx}\\left(\\dfrac{1}{4}\\sin^4 x\\right)",
          "explanation": "Differentiation confirms the antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the final answer",
          "workingLatex": "\\int \\sin^3 x \\cos x\\,dx = \\dfrac{1}{4}\\sin^4 x + c",
          "explanation": "This is the required indefinite integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\sin^3 x \\cos x\\,dx = \\dfrac{1}{4}\\sin^4 x + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-substitution.q020",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "substitution",
      "indefinite integral"
    ],
    "questionText": "Find $\\displaystyle\\int \\cos^3 x \\sin x\\,dx$, where $x$ is in radians where applicable.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the substitution",
          "workingLatex": "u = \\cos x",
          "explanation": "Identify the inner function whose derivative appears as a factor.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate to find $du$",
          "workingLatex": "du = -\\sin x\\,dx",
          "explanation": "Compute $du$ and solve for the matching factor in the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Express $dx$ or combine factors",
          "workingLatex": "\\text{rewrite integral in } u",
          "explanation": "Replace every $x$-term using the substitution.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the integral",
          "workingLatex": "\\int u^{4}\\,du",
          "explanation": "The integral should now be a standard power or logarithm form.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate with respect to $u$",
          "workingLatex": "-\\dfrac{1}{4}\\cos^4 x",
          "explanation": "Apply the appropriate integration rule.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute back for $x$",
          "workingLatex": "-\\dfrac{1}{4}\\cos^4 x",
          "explanation": "Replace $u$ with the original expression.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Include $+c$",
          "workingLatex": "-\\dfrac{1}{4}\\cos^4 x + c",
          "explanation": "Add the constant of integration.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check by differentiating",
          "workingLatex": "\\frac{d}{dx}\\left(-\\dfrac{1}{4}\\cos^4 x\\right)",
          "explanation": "Differentiation confirms the antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the final answer",
          "workingLatex": "\\int \\cos^3 x \\sin x\\,dx = -\\dfrac{1}{4}\\cos^4 x + c",
          "explanation": "This is the required indefinite integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\cos^3 x \\sin x\\,dx = -\\dfrac{1}{4}\\cos^4 x + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-substitution.q021",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "substitution",
      "indefinite integral"
    ],
    "questionText": "Find $\\displaystyle\\int \\tan x \\sec^2 x\\,dx$, where $x$ is in radians where applicable.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the substitution",
          "workingLatex": "u = \\tan x",
          "explanation": "Identify the inner function whose derivative appears as a factor.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate to find $du$",
          "workingLatex": "du = \\sec^2 x\\,dx",
          "explanation": "Compute $du$ and solve for the matching factor in the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Express $dx$ or combine factors",
          "workingLatex": "\\text{rewrite integral in } u",
          "explanation": "Replace every $x$-term using the substitution.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the integral",
          "workingLatex": "\\int u^{2}\\,du",
          "explanation": "The integral should now be a standard power or logarithm form.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate with respect to $u$",
          "workingLatex": "\\dfrac{1}{2}\\tan^2 x",
          "explanation": "Apply the appropriate integration rule.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute back for $x$",
          "workingLatex": "\\dfrac{1}{2}\\tan^2 x",
          "explanation": "Replace $u$ with the original expression.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Include $+c$",
          "workingLatex": "\\dfrac{1}{2}\\tan^2 x + c",
          "explanation": "Add the constant of integration.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check by differentiating",
          "workingLatex": "\\frac{d}{dx}\\left(\\dfrac{1}{2}\\tan^2 x\\right)",
          "explanation": "Differentiation confirms the antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the final answer",
          "workingLatex": "\\int \\tan x \\sec^2 x\\,dx = \\dfrac{1}{2}\\tan^2 x + c",
          "explanation": "This is the required indefinite integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\tan x \\sec^2 x\\,dx = \\dfrac{1}{2}\\tan^2 x + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-substitution.q022",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "substitution",
      "indefinite integral"
    ],
    "questionText": "Find $\\displaystyle\\int \\dfrac{e^x}{e^x+1}\\,dx$, where $x$ is in radians where applicable.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the substitution",
          "workingLatex": "u = e^x+1",
          "explanation": "Identify the inner function whose derivative appears as a factor.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate to find $du$",
          "workingLatex": "du = e^x\\,dx",
          "explanation": "Compute $du$ and solve for the matching factor in the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Express $dx$ or combine factors",
          "workingLatex": "\\text{rewrite integral in } u",
          "explanation": "Replace every $x$-term using the substitution.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the integral",
          "workingLatex": "\\int u^{1}\\,du",
          "explanation": "The integral should now be a standard power or logarithm form.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate with respect to $u$",
          "workingLatex": "\\ln(e^x+1)",
          "explanation": "Apply the appropriate integration rule.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute back for $x$",
          "workingLatex": "\\ln(e^x+1)",
          "explanation": "Replace $u$ with the original expression.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Include $+c$",
          "workingLatex": "\\ln(e^x+1) + c",
          "explanation": "Add the constant of integration.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check by differentiating",
          "workingLatex": "\\frac{d}{dx}\\left(\\ln(e^x+1)\\right)",
          "explanation": "Differentiation confirms the antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the final answer",
          "workingLatex": "\\int \\dfrac{e^x}{e^x+1}\\,dx = \\ln(e^x+1) + c",
          "explanation": "This is the required indefinite integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\dfrac{e^x}{e^x+1}\\,dx = \\ln(e^x+1) + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-substitution.q023",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "substitution",
      "indefinite integral"
    ],
    "questionText": "Find $\\displaystyle\\int \\dfrac{3x^2}{x^3+1}\\,dx$, where $x$ is in radians where applicable.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the substitution",
          "workingLatex": "u = x^3+1",
          "explanation": "Identify the inner function whose derivative appears as a factor.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate to find $du$",
          "workingLatex": "du = 3x^2\\,dx",
          "explanation": "Compute $du$ and solve for the matching factor in the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Express $dx$ or combine factors",
          "workingLatex": "\\text{rewrite integral in } u",
          "explanation": "Replace every $x$-term using the substitution.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the integral",
          "workingLatex": "\\int u^{1}\\,du",
          "explanation": "The integral should now be a standard power or logarithm form.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate with respect to $u$",
          "workingLatex": "\\ln(x^3+1)",
          "explanation": "Apply the appropriate integration rule.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute back for $x$",
          "workingLatex": "\\ln(x^3+1)",
          "explanation": "Replace $u$ with the original expression.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Include $+c$",
          "workingLatex": "\\ln(x^3+1) + c",
          "explanation": "Add the constant of integration.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check by differentiating",
          "workingLatex": "\\frac{d}{dx}\\left(\\ln(x^3+1)\\right)",
          "explanation": "Differentiation confirms the antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the final answer",
          "workingLatex": "\\int \\dfrac{3x^2}{x^3+1}\\,dx = \\ln(x^3+1) + c",
          "explanation": "This is the required indefinite integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\dfrac{3x^2}{x^3+1}\\,dx = \\ln(x^3+1) + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-substitution.q024",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "substitution",
      "indefinite integral"
    ],
    "questionText": "Find $\\displaystyle\\int x(x^2-1)^2\\,dx$, where $x$ is in radians where applicable.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the substitution",
          "workingLatex": "u = x^2-1",
          "explanation": "Identify the inner function whose derivative appears as a factor.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate to find $du$",
          "workingLatex": "du = 2x\\,dx",
          "explanation": "Compute $du$ and solve for the matching factor in the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Express $dx$ or combine factors",
          "workingLatex": "\\text{rewrite integral in } u",
          "explanation": "Replace every $x$-term using the substitution.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the integral",
          "workingLatex": "\\int u^{3}\\,du",
          "explanation": "The integral should now be a standard power or logarithm form.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate with respect to $u$",
          "workingLatex": "\\dfrac{1}{6}(x^2-1)^3",
          "explanation": "Apply the appropriate integration rule.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute back for $x$",
          "workingLatex": "\\dfrac{1}{6}(x^2-1)^3",
          "explanation": "Replace $u$ with the original expression.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Include $+c$",
          "workingLatex": "\\dfrac{1}{6}(x^2-1)^3 + c",
          "explanation": "Add the constant of integration.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check by differentiating",
          "workingLatex": "\\frac{d}{dx}\\left(\\dfrac{1}{6}(x^2-1)^3\\right)",
          "explanation": "Differentiation confirms the antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the final answer",
          "workingLatex": "\\int x(x^2-1)^2\\,dx = \\dfrac{1}{6}(x^2-1)^3 + c",
          "explanation": "This is the required indefinite integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int x(x^2-1)^2\\,dx = \\dfrac{1}{6}(x^2-1)^3 + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-substitution.q025",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "substitution",
      "indefinite integral"
    ],
    "questionText": "Find $\\displaystyle\\int \\dfrac{1}{\\sqrt{2x+3}}\\,dx$, where $x$ is in radians where applicable.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the substitution",
          "workingLatex": "u = 2x+3",
          "explanation": "Identify the inner function whose derivative appears as a factor.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate to find $du$",
          "workingLatex": "du = 2\\,dx",
          "explanation": "Compute $du$ and solve for the matching factor in the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Express $dx$ or combine factors",
          "workingLatex": "\\text{rewrite integral in } u",
          "explanation": "Replace every $x$-term using the substitution.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the integral",
          "workingLatex": "\\int u^{1/2}\\,du",
          "explanation": "The integral should now be a standard power or logarithm form.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate with respect to $u$",
          "workingLatex": "\\sqrt{2x+3}",
          "explanation": "Apply the appropriate integration rule.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute back for $x$",
          "workingLatex": "\\sqrt{2x+3}",
          "explanation": "Replace $u$ with the original expression.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Include $+c$",
          "workingLatex": "\\sqrt{2x+3} + c",
          "explanation": "Add the constant of integration.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check by differentiating",
          "workingLatex": "\\frac{d}{dx}\\left(\\sqrt{2x+3}\\right)",
          "explanation": "Differentiation confirms the antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the final answer",
          "workingLatex": "\\int \\dfrac{1}{\\sqrt{2x+3}}\\,dx = \\sqrt{2x+3} + c",
          "explanation": "This is the required indefinite integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\dfrac{1}{\\sqrt{2x+3}}\\,dx = \\sqrt{2x+3} + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-substitution.q026",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "substitution",
      "indefinite integral"
    ],
    "questionText": "Find $\\displaystyle\\int x^3(x^4+2)^5\\,dx$, where $x$ is in radians where applicable.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the substitution",
          "workingLatex": "u = x^4+2",
          "explanation": "Identify the inner function whose derivative appears as a factor.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate to find $du$",
          "workingLatex": "du = 4x^3\\,dx",
          "explanation": "Compute $du$ and solve for the matching factor in the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Express $dx$ or combine factors",
          "workingLatex": "\\text{rewrite integral in } u",
          "explanation": "Replace every $x$-term using the substitution.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the integral",
          "workingLatex": "\\int u^{6}\\,du",
          "explanation": "The integral should now be a standard power or logarithm form.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate with respect to $u$",
          "workingLatex": "\\dfrac{1}{24}(x^4+2)^6",
          "explanation": "Apply the appropriate integration rule.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute back for $x$",
          "workingLatex": "\\dfrac{1}{24}(x^4+2)^6",
          "explanation": "Replace $u$ with the original expression.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Include $+c$",
          "workingLatex": "\\dfrac{1}{24}(x^4+2)^6 + c",
          "explanation": "Add the constant of integration.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check by differentiating",
          "workingLatex": "\\frac{d}{dx}\\left(\\dfrac{1}{24}(x^4+2)^6\\right)",
          "explanation": "Differentiation confirms the antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the final answer",
          "workingLatex": "\\int x^3(x^4+2)^5\\,dx = \\dfrac{1}{24}(x^4+2)^6 + c",
          "explanation": "This is the required indefinite integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int x^3(x^4+2)^5\\,dx = \\dfrac{1}{24}(x^4+2)^6 + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-substitution.q027",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "substitution",
      "indefinite integral"
    ],
    "questionText": "Find $\\displaystyle\\int \\sin^2 x \\cos x\\,dx$, where $x$ is in radians where applicable.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the substitution",
          "workingLatex": "u = \\sin x",
          "explanation": "Identify the inner function whose derivative appears as a factor.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate to find $du$",
          "workingLatex": "du = \\cos x\\,dx",
          "explanation": "Compute $du$ and solve for the matching factor in the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Express $dx$ or combine factors",
          "workingLatex": "\\text{rewrite integral in } u",
          "explanation": "Replace every $x$-term using the substitution.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the integral",
          "workingLatex": "\\int u^{3}\\,du",
          "explanation": "The integral should now be a standard power or logarithm form.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate with respect to $u$",
          "workingLatex": "\\dfrac{1}{3}\\sin^3 x",
          "explanation": "Apply the appropriate integration rule.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute back for $x$",
          "workingLatex": "\\dfrac{1}{3}\\sin^3 x",
          "explanation": "Replace $u$ with the original expression.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Include $+c$",
          "workingLatex": "\\dfrac{1}{3}\\sin^3 x + c",
          "explanation": "Add the constant of integration.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check by differentiating",
          "workingLatex": "\\frac{d}{dx}\\left(\\dfrac{1}{3}\\sin^3 x\\right)",
          "explanation": "Differentiation confirms the antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the final answer",
          "workingLatex": "\\int \\sin^2 x \\cos x\\,dx = \\dfrac{1}{3}\\sin^3 x + c",
          "explanation": "This is the required indefinite integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\sin^2 x \\cos x\\,dx = \\dfrac{1}{3}\\sin^3 x + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-substitution.q028",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "substitution",
      "indefinite integral"
    ],
    "questionText": "Find $\\displaystyle\\int \\dfrac{2x}{x^2-5}\\,dx$, where $x$ is in radians where applicable.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the substitution",
          "workingLatex": "u = x^2-5",
          "explanation": "Identify the inner function whose derivative appears as a factor.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate to find $du$",
          "workingLatex": "du = 2x\\,dx",
          "explanation": "Compute $du$ and solve for the matching factor in the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Express $dx$ or combine factors",
          "workingLatex": "\\text{rewrite integral in } u",
          "explanation": "Replace every $x$-term using the substitution.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the integral",
          "workingLatex": "\\int u^{1}\\,du",
          "explanation": "The integral should now be a standard power or logarithm form.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate with respect to $u$",
          "workingLatex": "\\ln|x^2-5|",
          "explanation": "Apply the appropriate integration rule.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute back for $x$",
          "workingLatex": "\\ln|x^2-5|",
          "explanation": "Replace $u$ with the original expression.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Include $+c$",
          "workingLatex": "\\ln|x^2-5| + c",
          "explanation": "Add the constant of integration.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check by differentiating",
          "workingLatex": "\\frac{d}{dx}\\left(\\ln|x^2-5|\\right)",
          "explanation": "Differentiation confirms the antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the final answer",
          "workingLatex": "\\int \\dfrac{2x}{x^2-5}\\,dx = \\ln|x^2-5| + c",
          "explanation": "This is the required indefinite integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\dfrac{2x}{x^2-5}\\,dx = \\ln|x^2-5| + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-substitution.q029",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "substitution",
      "indefinite integral"
    ],
    "questionText": "Find $\\displaystyle\\int e^{3x}(e^{3x}+2)^4\\,dx$, where $x$ is in radians where applicable.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the substitution",
          "workingLatex": "u = e^{3x}+2",
          "explanation": "Identify the inner function whose derivative appears as a factor.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate to find $du$",
          "workingLatex": "du = 3e^{3x}\\,dx",
          "explanation": "Compute $du$ and solve for the matching factor in the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Express $dx$ or combine factors",
          "workingLatex": "\\text{rewrite integral in } u",
          "explanation": "Replace every $x$-term using the substitution.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the integral",
          "workingLatex": "\\int u^{5}\\,du",
          "explanation": "The integral should now be a standard power or logarithm form.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate with respect to $u$",
          "workingLatex": "\\dfrac{1}{15}(e^{3x}+2)^5",
          "explanation": "Apply the appropriate integration rule.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute back for $x$",
          "workingLatex": "\\dfrac{1}{15}(e^{3x}+2)^5",
          "explanation": "Replace $u$ with the original expression.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Include $+c$",
          "workingLatex": "\\dfrac{1}{15}(e^{3x}+2)^5 + c",
          "explanation": "Add the constant of integration.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check by differentiating",
          "workingLatex": "\\frac{d}{dx}\\left(\\dfrac{1}{15}(e^{3x}+2)^5\\right)",
          "explanation": "Differentiation confirms the antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the final answer",
          "workingLatex": "\\int e^{3x}(e^{3x}+2)^4\\,dx = \\dfrac{1}{15}(e^{3x}+2)^5 + c",
          "explanation": "This is the required indefinite integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int e^{3x}(e^{3x}+2)^4\\,dx = \\dfrac{1}{15}(e^{3x}+2)^5 + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-substitution.q030",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "substitution",
      "indefinite integral"
    ],
    "questionText": "Find $\\displaystyle\\int \\dfrac{\\cos x}{\\sin x}\\,dx$, where $x$ is in radians where applicable.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the substitution",
          "workingLatex": "u = \\sin x",
          "explanation": "Identify the inner function whose derivative appears as a factor.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate to find $du$",
          "workingLatex": "du = \\cos x\\,dx",
          "explanation": "Compute $du$ and solve for the matching factor in the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Express $dx$ or combine factors",
          "workingLatex": "\\text{rewrite integral in } u",
          "explanation": "Replace every $x$-term using the substitution.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the integral",
          "workingLatex": "\\int u^{1}\\,du",
          "explanation": "The integral should now be a standard power or logarithm form.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate with respect to $u$",
          "workingLatex": "\\ln|\\sin x|",
          "explanation": "Apply the appropriate integration rule.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute back for $x$",
          "workingLatex": "\\ln|\\sin x|",
          "explanation": "Replace $u$ with the original expression.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Include $+c$",
          "workingLatex": "\\ln|\\sin x| + c",
          "explanation": "Add the constant of integration.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check by differentiating",
          "workingLatex": "\\frac{d}{dx}\\left(\\ln|\\sin x|\\right)",
          "explanation": "Differentiation confirms the antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the final answer",
          "workingLatex": "\\int \\dfrac{\\cos x}{\\sin x}\\,dx = \\ln|\\sin x| + c",
          "explanation": "This is the required indefinite integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\dfrac{\\cos x}{\\sin x}\\,dx = \\ln|\\sin x| + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-substitution.q031",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "substitution",
      "definite integral",
      "changed limits"
    ],
    "questionText": "Evaluate $\\displaystyle\\int_{0}^{2} 2x\\sqrt{x^2+1}\\,dx$ using a substitution.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the substitution",
          "workingLatex": "u = x^2+1",
          "explanation": "Select $u$ so that $du$ appears in the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Change the limits from $x$ to $u$",
          "workingLatex": "x = 0 \\Rightarrow u = 0, \\quad x = 2 \\Rightarrow u = 5",
          "explanation": "When using substitution on a definite integral, convert the $x$-limits to $u$-limits.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite the integral in $u$",
          "workingLatex": "\\int_{0}^{5} \\ldots \\,du",
          "explanation": "Express the entire integral in terms of $u$ with the new limits.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate",
          "workingLatex": "\\text{antiderivative in } u",
          "explanation": "Find the antiderivative with respect to $u$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate between the $u$-limits",
          "workingLatex": "\\left[\\ldots\\right]_{0}^{5}",
          "explanation": "Substitute the upper and lower $u$-limits and subtract.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify",
          "workingLatex": "\\dfrac{2}{3}(5^{3/2}-1) = \\dfrac{2}{3}(5\\sqrt{5}-1)",
          "explanation": "Evaluate any arithmetic to obtain the exact value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Note: no $+c$ needed",
          "workingLatex": "\\text{Definite integral gives a number}",
          "explanation": "Constants of integration cancel when evaluating definite integrals.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Alternative: back-substitute then evaluate",
          "workingLatex": "\\text{Either method is valid}",
          "explanation": "You may also find the indefinite integral, substitute back for $x$, and use the original limits.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "\\dfrac{2}{3}(5^{3/2}-1) = \\dfrac{2}{3}(5\\sqrt{5}-1)",
          "explanation": "This is the value of the definite integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{0}^{2} 2x\\sqrt{x^2+1}\\,dx = \\dfrac{2}{3}(5^{3/2}-1) = \\dfrac{2}{3}(5\\sqrt{5}-1)$."
    }
  },
  {
    "id": "al.y2.pure.integration-substitution.q032",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "substitution",
      "definite integral",
      "changed limits"
    ],
    "questionText": "Evaluate $\\displaystyle\\int_{0}^{1} x e^{x^2}\\,dx$ using a substitution.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the substitution",
          "workingLatex": "u = x^2",
          "explanation": "Select $u$ so that $du$ appears in the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Change the limits from $x$ to $u$",
          "workingLatex": "x = 0 \\Rightarrow u = 0, \\quad x = 1 \\Rightarrow u = 1",
          "explanation": "When using substitution on a definite integral, convert the $x$-limits to $u$-limits.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite the integral in $u$",
          "workingLatex": "\\int_{0}^{1} \\ldots \\,du",
          "explanation": "Express the entire integral in terms of $u$ with the new limits.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate",
          "workingLatex": "\\text{antiderivative in } u",
          "explanation": "Find the antiderivative with respect to $u$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate between the $u$-limits",
          "workingLatex": "\\left[\\ldots\\right]_{0}^{1}",
          "explanation": "Substitute the upper and lower $u$-limits and subtract.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify",
          "workingLatex": "\\dfrac{1}{2}(e-1)",
          "explanation": "Evaluate any arithmetic to obtain the exact value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Note: no $+c$ needed",
          "workingLatex": "\\text{Definite integral gives a number}",
          "explanation": "Constants of integration cancel when evaluating definite integrals.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Alternative: back-substitute then evaluate",
          "workingLatex": "\\text{Either method is valid}",
          "explanation": "You may also find the indefinite integral, substitute back for $x$, and use the original limits.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "\\dfrac{1}{2}(e-1)",
          "explanation": "This is the value of the definite integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{0}^{1} x e^{x^2}\\,dx = \\dfrac{1}{2}(e-1)$."
    }
  },
  {
    "id": "al.y2.pure.integration-substitution.q033",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "substitution",
      "definite integral",
      "changed limits"
    ],
    "questionText": "Evaluate $\\displaystyle\\int_{0}^{\\dfrac{\\pi}{2}} \\sin x \\cos x\\,dx$ using a substitution.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the substitution",
          "workingLatex": "u = \\sin x",
          "explanation": "Select $u$ so that $du$ appears in the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Change the limits from $x$ to $u$",
          "workingLatex": "x = 0 \\Rightarrow u = 0, \\quad x = \\dfrac{\\pi}{2} \\Rightarrow u = 1",
          "explanation": "When using substitution on a definite integral, convert the $x$-limits to $u$-limits.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite the integral in $u$",
          "workingLatex": "\\int_{0}^{1} \\ldots \\,du",
          "explanation": "Express the entire integral in terms of $u$ with the new limits.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate",
          "workingLatex": "\\text{antiderivative in } u",
          "explanation": "Find the antiderivative with respect to $u$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate between the $u$-limits",
          "workingLatex": "\\left[\\ldots\\right]_{0}^{1}",
          "explanation": "Substitute the upper and lower $u$-limits and subtract.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify",
          "workingLatex": "\\dfrac{1}{2}",
          "explanation": "Evaluate any arithmetic to obtain the exact value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Note: no $+c$ needed",
          "workingLatex": "\\text{Definite integral gives a number}",
          "explanation": "Constants of integration cancel when evaluating definite integrals.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Alternative: back-substitute then evaluate",
          "workingLatex": "\\text{Either method is valid}",
          "explanation": "You may also find the indefinite integral, substitute back for $x$, and use the original limits.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "\\dfrac{1}{2}",
          "explanation": "This is the value of the definite integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{0}^{\\dfrac{\\pi}{2}} \\sin x \\cos x\\,dx = \\dfrac{1}{2}$."
    }
  },
  {
    "id": "al.y2.pure.integration-substitution.q034",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "substitution",
      "definite integral",
      "changed limits"
    ],
    "questionText": "Evaluate $\\displaystyle\\int_{1}^{e} \\dfrac{1}{2x+1}\\,dx$ using a substitution.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the substitution",
          "workingLatex": "u = 2x+1",
          "explanation": "Select $u$ so that $du$ appears in the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Change the limits from $x$ to $u$",
          "workingLatex": "x = 1 \\Rightarrow u = 3, \\quad x = e \\Rightarrow u = 2e+1",
          "explanation": "When using substitution on a definite integral, convert the $x$-limits to $u$-limits.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite the integral in $u$",
          "workingLatex": "\\int_{3}^{2e+1} \\ldots \\,du",
          "explanation": "Express the entire integral in terms of $u$ with the new limits.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate",
          "workingLatex": "\\text{antiderivative in } u",
          "explanation": "Find the antiderivative with respect to $u$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate between the $u$-limits",
          "workingLatex": "\\left[\\ldots\\right]_{3}^{2e+1}",
          "explanation": "Substitute the upper and lower $u$-limits and subtract.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify",
          "workingLatex": "\\dfrac{1}{2}\\ln(2e+1) - \\dfrac{1}{2}\\ln 3",
          "explanation": "Evaluate any arithmetic to obtain the exact value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Note: no $+c$ needed",
          "workingLatex": "\\text{Definite integral gives a number}",
          "explanation": "Constants of integration cancel when evaluating definite integrals.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Alternative: back-substitute then evaluate",
          "workingLatex": "\\text{Either method is valid}",
          "explanation": "You may also find the indefinite integral, substitute back for $x$, and use the original limits.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "\\dfrac{1}{2}\\ln(2e+1) - \\dfrac{1}{2}\\ln 3",
          "explanation": "This is the value of the definite integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{1}^{e} \\dfrac{1}{2x+1}\\,dx = \\dfrac{1}{2}\\ln(2e+1) - \\dfrac{1}{2}\\ln 3$."
    }
  },
  {
    "id": "al.y2.pure.integration-substitution.q035",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "substitution",
      "definite integral",
      "changed limits"
    ],
    "questionText": "Evaluate $\\displaystyle\\int_{0}^{1} x(x^2+4)^2\\,dx$ using a substitution.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the substitution",
          "workingLatex": "u = x^2+4",
          "explanation": "Select $u$ so that $du$ appears in the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Change the limits from $x$ to $u$",
          "workingLatex": "x = 0 \\Rightarrow u = 4, \\quad x = 1 \\Rightarrow u = 5",
          "explanation": "When using substitution on a definite integral, convert the $x$-limits to $u$-limits.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite the integral in $u$",
          "workingLatex": "\\int_{4}^{5} \\ldots \\,du",
          "explanation": "Express the entire integral in terms of $u$ with the new limits.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate",
          "workingLatex": "\\text{antiderivative in } u",
          "explanation": "Find the antiderivative with respect to $u$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate between the $u$-limits",
          "workingLatex": "\\left[\\ldots\\right]_{4}^{5}",
          "explanation": "Substitute the upper and lower $u$-limits and subtract.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify",
          "workingLatex": "\\dfrac{1}{6}(5^3 - 4^3) = \\dfrac{61}{6}",
          "explanation": "Evaluate any arithmetic to obtain the exact value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Note: no $+c$ needed",
          "workingLatex": "\\text{Definite integral gives a number}",
          "explanation": "Constants of integration cancel when evaluating definite integrals.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Alternative: back-substitute then evaluate",
          "workingLatex": "\\text{Either method is valid}",
          "explanation": "You may also find the indefinite integral, substitute back for $x$, and use the original limits.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "\\dfrac{1}{6}(5^3 - 4^3) = \\dfrac{61}{6}",
          "explanation": "This is the value of the definite integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{0}^{1} x(x^2+4)^2\\,dx = \\dfrac{1}{6}(5^3 - 4^3) = \\dfrac{61}{6}$."
    }
  },
  {
    "id": "al.y2.pure.integration-substitution.q036",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "substitution",
      "definite integral",
      "changed limits"
    ],
    "questionText": "Evaluate $\\displaystyle\\int_{0}^{\\pi} \\cos x \\sin^2 x\\,dx$ using a substitution.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the substitution",
          "workingLatex": "u = \\sin x",
          "explanation": "Select $u$ so that $du$ appears in the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Change the limits from $x$ to $u$",
          "workingLatex": "x = 0 \\Rightarrow u = 0, \\quad x = \\pi \\Rightarrow u = 0",
          "explanation": "When using substitution on a definite integral, convert the $x$-limits to $u$-limits.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite the integral in $u$",
          "workingLatex": "\\int_{0}^{0} \\ldots \\,du",
          "explanation": "Express the entire integral in terms of $u$ with the new limits.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate",
          "workingLatex": "\\text{antiderivative in } u",
          "explanation": "Find the antiderivative with respect to $u$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate between the $u$-limits",
          "workingLatex": "\\left[\\ldots\\right]_{0}^{0}",
          "explanation": "Substitute the upper and lower $u$-limits and subtract.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify",
          "workingLatex": "0",
          "explanation": "Evaluate any arithmetic to obtain the exact value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Note: no $+c$ needed",
          "workingLatex": "\\text{Definite integral gives a number}",
          "explanation": "Constants of integration cancel when evaluating definite integrals.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Alternative: back-substitute then evaluate",
          "workingLatex": "\\text{Either method is valid}",
          "explanation": "You may also find the indefinite integral, substitute back for $x$, and use the original limits.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "0",
          "explanation": "This is the value of the definite integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{0}^{\\pi} \\cos x \\sin^2 x\\,dx = 0$."
    }
  },
  {
    "id": "al.y2.pure.integration-substitution.q037",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "substitution",
      "definite integral",
      "changed limits"
    ],
    "questionText": "Evaluate $\\displaystyle\\int_{1}^{2} \\dfrac{x}{x^2+1}\\,dx$ using a substitution.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the substitution",
          "workingLatex": "u = x^2+1",
          "explanation": "Select $u$ so that $du$ appears in the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Change the limits from $x$ to $u$",
          "workingLatex": "x = 1 \\Rightarrow u = 2, \\quad x = 2 \\Rightarrow u = 5",
          "explanation": "When using substitution on a definite integral, convert the $x$-limits to $u$-limits.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite the integral in $u$",
          "workingLatex": "\\int_{2}^{5} \\ldots \\,du",
          "explanation": "Express the entire integral in terms of $u$ with the new limits.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate",
          "workingLatex": "\\text{antiderivative in } u",
          "explanation": "Find the antiderivative with respect to $u$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate between the $u$-limits",
          "workingLatex": "\\left[\\ldots\\right]_{2}^{5}",
          "explanation": "Substitute the upper and lower $u$-limits and subtract.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify",
          "workingLatex": "\\dfrac{1}{2}\\ln 5 - \\dfrac{1}{2}\\ln 2",
          "explanation": "Evaluate any arithmetic to obtain the exact value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Note: no $+c$ needed",
          "workingLatex": "\\text{Definite integral gives a number}",
          "explanation": "Constants of integration cancel when evaluating definite integrals.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Alternative: back-substitute then evaluate",
          "workingLatex": "\\text{Either method is valid}",
          "explanation": "You may also find the indefinite integral, substitute back for $x$, and use the original limits.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "\\dfrac{1}{2}\\ln 5 - \\dfrac{1}{2}\\ln 2",
          "explanation": "This is the value of the definite integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{1}^{2} \\dfrac{x}{x^2+1}\\,dx = \\dfrac{1}{2}\\ln 5 - \\dfrac{1}{2}\\ln 2$."
    }
  },
  {
    "id": "al.y2.pure.integration-substitution.q038",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "substitution",
      "definite integral",
      "changed limits"
    ],
    "questionText": "Evaluate $\\displaystyle\\int_{0}^{1} (3x+1)^2\\,dx$ using a substitution.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the substitution",
          "workingLatex": "u = 3x+1",
          "explanation": "Select $u$ so that $du$ appears in the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Change the limits from $x$ to $u$",
          "workingLatex": "x = 0 \\Rightarrow u = 1, \\quad x = 1 \\Rightarrow u = 4",
          "explanation": "When using substitution on a definite integral, convert the $x$-limits to $u$-limits.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite the integral in $u$",
          "workingLatex": "\\int_{1}^{4} \\ldots \\,du",
          "explanation": "Express the entire integral in terms of $u$ with the new limits.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate",
          "workingLatex": "\\text{antiderivative in } u",
          "explanation": "Find the antiderivative with respect to $u$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate between the $u$-limits",
          "workingLatex": "\\left[\\ldots\\right]_{1}^{4}",
          "explanation": "Substitute the upper and lower $u$-limits and subtract.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify",
          "workingLatex": "\\dfrac{1}{3}\\left(\\dfrac{4^3}{3} - \\dfrac{1}{3}\\right) = \\dfrac{63}{9} = 7",
          "explanation": "Evaluate any arithmetic to obtain the exact value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Note: no $+c$ needed",
          "workingLatex": "\\text{Definite integral gives a number}",
          "explanation": "Constants of integration cancel when evaluating definite integrals.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Alternative: back-substitute then evaluate",
          "workingLatex": "\\text{Either method is valid}",
          "explanation": "You may also find the indefinite integral, substitute back for $x$, and use the original limits.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "\\dfrac{1}{3}\\left(\\dfrac{4^3}{3} - \\dfrac{1}{3}\\right) = \\dfrac{63}{9} = 7",
          "explanation": "This is the value of the definite integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{0}^{1} (3x+1)^2\\,dx = \\dfrac{1}{3}\\left(\\dfrac{4^3}{3} - \\dfrac{1}{3}\\right) = \\dfrac{63}{9} = 7$."
    }
  },
  {
    "id": "al.y2.pure.integration-substitution.q039",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "substitution"
    ],
    "questionText": "Find $\\displaystyle\\int \\dfrac{x}{\\sqrt{x^2+1}}\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose $u$",
          "workingLatex": "u = x^2+1",
          "explanation": "Pick the inner function whose derivative appears in the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find $du$ and rearrange",
          "workingLatex": "\\text{match factors to } du",
          "explanation": "Express $dx$ or remaining factors in terms of $du$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute into the integral",
          "workingLatex": "\\int \\ldots \\,du",
          "explanation": "Rewrite completely in $u$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate",
          "workingLatex": "\\sqrt{u} + c",
          "explanation": "Apply standard integration rules.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Back-substitute",
          "workingLatex": "\\sqrt{x^2+1}",
          "explanation": "Replace $u$ with the $x$-expression.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Add $+c$",
          "workingLatex": "\\sqrt{x^2+1} + c",
          "explanation": "Include the constant for an indefinite integral.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Differentiate to check",
          "workingLatex": "\\frac{d}{dx}\\left(\\sqrt{x^2+1}\\right)",
          "explanation": "Confirm the derivative matches the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Comment on domain restrictions",
          "workingLatex": "\\text{Note where the integrand is defined}",
          "explanation": "Logarithmic answers may need $|{\\cdot}|$ or domain restrictions such as $x>0$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "\\int \\dfrac{x}{\\sqrt{x^2+1}}\\,dx = \\sqrt{x^2+1} + c",
          "explanation": "Final antiderivative.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\dfrac{x}{\\sqrt{x^2+1}}\\,dx = \\sqrt{x^2+1} + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-substitution.q040",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "substitution"
    ],
    "questionText": "Find $\\displaystyle\\int \\dfrac{1}{x\\ln x}\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose $u$",
          "workingLatex": "u = \\ln x",
          "explanation": "Pick the inner function whose derivative appears in the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find $du$ and rearrange",
          "workingLatex": "\\text{match factors to } du",
          "explanation": "Express $dx$ or remaining factors in terms of $du$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute into the integral",
          "workingLatex": "\\int \\ldots \\,du",
          "explanation": "Rewrite completely in $u$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate",
          "workingLatex": "\\ln|u| + c",
          "explanation": "Apply standard integration rules.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Back-substitute",
          "workingLatex": "\\ln|\\ln x|",
          "explanation": "Replace $u$ with the $x$-expression.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Add $+c$",
          "workingLatex": "\\ln|\\ln x| + c",
          "explanation": "Include the constant for an indefinite integral.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Differentiate to check",
          "workingLatex": "\\frac{d}{dx}\\left(\\ln|\\ln x|\\right)",
          "explanation": "Confirm the derivative matches the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Comment on domain restrictions",
          "workingLatex": "\\text{Note where the integrand is defined}",
          "explanation": "Logarithmic answers may need $|{\\cdot}|$ or domain restrictions such as $x>0$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "\\int \\dfrac{1}{x\\ln x}\\,dx = \\ln|\\ln x| + c",
          "explanation": "Final antiderivative.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\dfrac{1}{x\\ln x}\\,dx = \\ln|\\ln x| + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-substitution.q041",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "substitution"
    ],
    "questionText": "Find $\\displaystyle\\int x^2(x^3+1)^4\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose $u$",
          "workingLatex": "u = x^3+1",
          "explanation": "Pick the inner function whose derivative appears in the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find $du$ and rearrange",
          "workingLatex": "\\text{match factors to } du",
          "explanation": "Express $dx$ or remaining factors in terms of $du$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute into the integral",
          "workingLatex": "\\int \\ldots \\,du",
          "explanation": "Rewrite completely in $u$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate",
          "workingLatex": "\\dfrac{1}{15}u^5 + c",
          "explanation": "Apply standard integration rules.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Back-substitute",
          "workingLatex": "\\dfrac{1}{15}(x^3+1)^5",
          "explanation": "Replace $u$ with the $x$-expression.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Add $+c$",
          "workingLatex": "\\dfrac{1}{15}(x^3+1)^5 + c",
          "explanation": "Include the constant for an indefinite integral.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Differentiate to check",
          "workingLatex": "\\frac{d}{dx}\\left(\\dfrac{1}{15}(x^3+1)^5\\right)",
          "explanation": "Confirm the derivative matches the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Comment on domain restrictions",
          "workingLatex": "\\text{Note where the integrand is defined}",
          "explanation": "Logarithmic answers may need $|{\\cdot}|$ or domain restrictions such as $x>0$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "\\int x^2(x^3+1)^4\\,dx = \\dfrac{1}{15}(x^3+1)^5 + c",
          "explanation": "Final antiderivative.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int x^2(x^3+1)^4\\,dx = \\dfrac{1}{15}(x^3+1)^5 + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-substitution.q042",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "substitution"
    ],
    "questionText": "Find $\\displaystyle\\int \\sec^2 x \\tan^3 x\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose $u$",
          "workingLatex": "u = \\tan x",
          "explanation": "Pick the inner function whose derivative appears in the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find $du$ and rearrange",
          "workingLatex": "\\text{match factors to } du",
          "explanation": "Express $dx$ or remaining factors in terms of $du$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute into the integral",
          "workingLatex": "\\int \\ldots \\,du",
          "explanation": "Rewrite completely in $u$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate",
          "workingLatex": "\\dfrac{1}{4}u^4 + c",
          "explanation": "Apply standard integration rules.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Back-substitute",
          "workingLatex": "\\dfrac{1}{4}\\tan^4 x",
          "explanation": "Replace $u$ with the $x$-expression.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Add $+c$",
          "workingLatex": "\\dfrac{1}{4}\\tan^4 x + c",
          "explanation": "Include the constant for an indefinite integral.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Differentiate to check",
          "workingLatex": "\\frac{d}{dx}\\left(\\dfrac{1}{4}\\tan^4 x\\right)",
          "explanation": "Confirm the derivative matches the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Comment on domain restrictions",
          "workingLatex": "\\text{Note where the integrand is defined}",
          "explanation": "Logarithmic answers may need $|{\\cdot}|$ or domain restrictions such as $x>0$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "\\int \\sec^2 x \\tan^3 x\\,dx = \\dfrac{1}{4}\\tan^4 x + c",
          "explanation": "Final antiderivative.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\sec^2 x \\tan^3 x\\,dx = \\dfrac{1}{4}\\tan^4 x + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-substitution.q043",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "substitution"
    ],
    "questionText": "Find $\\displaystyle\\int \\dfrac{e^{2x}}{1+e^{2x}}\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose $u$",
          "workingLatex": "u = 1+e^{2x}",
          "explanation": "Pick the inner function whose derivative appears in the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find $du$ and rearrange",
          "workingLatex": "\\text{match factors to } du",
          "explanation": "Express $dx$ or remaining factors in terms of $du$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute into the integral",
          "workingLatex": "\\int \\ldots \\,du",
          "explanation": "Rewrite completely in $u$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate",
          "workingLatex": "\\dfrac{1}{2}\\ln|u| + c",
          "explanation": "Apply standard integration rules.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Back-substitute",
          "workingLatex": "\\dfrac{1}{2}\\ln(1+e^{2x})",
          "explanation": "Replace $u$ with the $x$-expression.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Add $+c$",
          "workingLatex": "\\dfrac{1}{2}\\ln(1+e^{2x}) + c",
          "explanation": "Include the constant for an indefinite integral.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Differentiate to check",
          "workingLatex": "\\frac{d}{dx}\\left(\\dfrac{1}{2}\\ln(1+e^{2x})\\right)",
          "explanation": "Confirm the derivative matches the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Comment on domain restrictions",
          "workingLatex": "\\text{Note where the integrand is defined}",
          "explanation": "Logarithmic answers may need $|{\\cdot}|$ or domain restrictions such as $x>0$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "\\int \\dfrac{e^{2x}}{1+e^{2x}}\\,dx = \\dfrac{1}{2}\\ln(1+e^{2x}) + c",
          "explanation": "Final antiderivative.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\dfrac{e^{2x}}{1+e^{2x}}\\,dx = \\dfrac{1}{2}\\ln(1+e^{2x}) + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-substitution.q044",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "substitution"
    ],
    "questionText": "Find $\\displaystyle\\int (2x+1)^7\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose $u$",
          "workingLatex": "u = 2x+1",
          "explanation": "Pick the inner function whose derivative appears in the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find $du$ and rearrange",
          "workingLatex": "\\text{match factors to } du",
          "explanation": "Express $dx$ or remaining factors in terms of $du$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute into the integral",
          "workingLatex": "\\int \\ldots \\,du",
          "explanation": "Rewrite completely in $u$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate",
          "workingLatex": "\\dfrac{1}{16}u^8 + c",
          "explanation": "Apply standard integration rules.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Back-substitute",
          "workingLatex": "\\dfrac{1}{16}(2x+1)^8",
          "explanation": "Replace $u$ with the $x$-expression.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Add $+c$",
          "workingLatex": "\\dfrac{1}{16}(2x+1)^8 + c",
          "explanation": "Include the constant for an indefinite integral.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Differentiate to check",
          "workingLatex": "\\frac{d}{dx}\\left(\\dfrac{1}{16}(2x+1)^8\\right)",
          "explanation": "Confirm the derivative matches the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Comment on domain restrictions",
          "workingLatex": "\\text{Note where the integrand is defined}",
          "explanation": "Logarithmic answers may need $|{\\cdot}|$ or domain restrictions such as $x>0$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "\\int (2x+1)^7\\,dx = \\dfrac{1}{16}(2x+1)^8 + c",
          "explanation": "Final antiderivative.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int (2x+1)^7\\,dx = \\dfrac{1}{16}(2x+1)^8 + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-substitution.q045",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "substitution"
    ],
    "questionText": "Find $\\displaystyle\\int \\sin x \\cos^3 x\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose $u$",
          "workingLatex": "u = \\cos x",
          "explanation": "Pick the inner function whose derivative appears in the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find $du$ and rearrange",
          "workingLatex": "\\text{match factors to } du",
          "explanation": "Express $dx$ or remaining factors in terms of $du$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute into the integral",
          "workingLatex": "\\int \\ldots \\,du",
          "explanation": "Rewrite completely in $u$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate",
          "workingLatex": "-\\dfrac{1}{4}u^4 + c",
          "explanation": "Apply standard integration rules.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Back-substitute",
          "workingLatex": "-\\dfrac{1}{4}\\cos^4 x",
          "explanation": "Replace $u$ with the $x$-expression.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Add $+c$",
          "workingLatex": "-\\dfrac{1}{4}\\cos^4 x + c",
          "explanation": "Include the constant for an indefinite integral.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Differentiate to check",
          "workingLatex": "\\frac{d}{dx}\\left(-\\dfrac{1}{4}\\cos^4 x\\right)",
          "explanation": "Confirm the derivative matches the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Comment on domain restrictions",
          "workingLatex": "\\text{Note where the integrand is defined}",
          "explanation": "Logarithmic answers may need $|{\\cdot}|$ or domain restrictions such as $x>0$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "\\int \\sin x \\cos^3 x\\,dx = -\\dfrac{1}{4}\\cos^4 x + c",
          "explanation": "Final antiderivative.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\sin x \\cos^3 x\\,dx = -\\dfrac{1}{4}\\cos^4 x + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-substitution.q046",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "substitution"
    ],
    "questionText": "Find $\\displaystyle\\int \\dfrac{5}{3-2x}\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose $u$",
          "workingLatex": "u = 3-2x",
          "explanation": "Pick the inner function whose derivative appears in the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find $du$ and rearrange",
          "workingLatex": "\\text{match factors to } du",
          "explanation": "Express $dx$ or remaining factors in terms of $du$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute into the integral",
          "workingLatex": "\\int \\ldots \\,du",
          "explanation": "Rewrite completely in $u$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate",
          "workingLatex": "-\\dfrac{5}{2}\\ln|u| + c",
          "explanation": "Apply standard integration rules.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Back-substitute",
          "workingLatex": "-\\dfrac{5}{2}\\ln|3-2x|",
          "explanation": "Replace $u$ with the $x$-expression.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Add $+c$",
          "workingLatex": "-\\dfrac{5}{2}\\ln|3-2x| + c",
          "explanation": "Include the constant for an indefinite integral.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Differentiate to check",
          "workingLatex": "\\frac{d}{dx}\\left(-\\dfrac{5}{2}\\ln|3-2x|\\right)",
          "explanation": "Confirm the derivative matches the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Comment on domain restrictions",
          "workingLatex": "\\text{Note where the integrand is defined}",
          "explanation": "Logarithmic answers may need $|{\\cdot}|$ or domain restrictions such as $x>0$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "\\int \\dfrac{5}{3-2x}\\,dx = -\\dfrac{5}{2}\\ln|3-2x| + c",
          "explanation": "Final antiderivative.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\dfrac{5}{3-2x}\\,dx = -\\dfrac{5}{2}\\ln|3-2x| + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-substitution.q047",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "substitution"
    ],
    "questionText": "Find $\\displaystyle\\int x\\sqrt{1-x^2}\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose $u$",
          "workingLatex": "u = 1-x^2",
          "explanation": "Pick the inner function whose derivative appears in the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find $du$ and rearrange",
          "workingLatex": "\\text{match factors to } du",
          "explanation": "Express $dx$ or remaining factors in terms of $du$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute into the integral",
          "workingLatex": "\\int \\ldots \\,du",
          "explanation": "Rewrite completely in $u$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate",
          "workingLatex": "-\\dfrac{1}{3}u^{3/2} + c",
          "explanation": "Apply standard integration rules.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Back-substitute",
          "workingLatex": "-\\dfrac{1}{3}(1-x^2)^{3/2}",
          "explanation": "Replace $u$ with the $x$-expression.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Add $+c$",
          "workingLatex": "-\\dfrac{1}{3}(1-x^2)^{3/2} + c",
          "explanation": "Include the constant for an indefinite integral.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Differentiate to check",
          "workingLatex": "\\frac{d}{dx}\\left(-\\dfrac{1}{3}(1-x^2)^{3/2}\\right)",
          "explanation": "Confirm the derivative matches the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Comment on domain restrictions",
          "workingLatex": "\\text{Note where the integrand is defined}",
          "explanation": "Logarithmic answers may need $|{\\cdot}|$ or domain restrictions such as $x>0$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "\\int x\\sqrt{1-x^2}\\,dx = -\\dfrac{1}{3}(1-x^2)^{3/2} + c",
          "explanation": "Final antiderivative.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int x\\sqrt{1-x^2}\\,dx = -\\dfrac{1}{3}(1-x^2)^{3/2} + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-substitution.q048",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "substitution"
    ],
    "questionText": "Find $\\displaystyle\\int \\dfrac{\\ln x}{x}\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose $u$",
          "workingLatex": "u = \\ln x",
          "explanation": "Pick the inner function whose derivative appears in the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find $du$ and rearrange",
          "workingLatex": "\\text{match factors to } du",
          "explanation": "Express $dx$ or remaining factors in terms of $du$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute into the integral",
          "workingLatex": "\\int \\ldots \\,du",
          "explanation": "Rewrite completely in $u$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate",
          "workingLatex": "\\dfrac{1}{2}u^2 + c",
          "explanation": "Apply standard integration rules.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Back-substitute",
          "workingLatex": "\\dfrac{1}{2}(\\ln x)^2",
          "explanation": "Replace $u$ with the $x$-expression.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Add $+c$",
          "workingLatex": "\\dfrac{1}{2}(\\ln x)^2 + c",
          "explanation": "Include the constant for an indefinite integral.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Differentiate to check",
          "workingLatex": "\\frac{d}{dx}\\left(\\dfrac{1}{2}(\\ln x)^2\\right)",
          "explanation": "Confirm the derivative matches the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Comment on domain restrictions",
          "workingLatex": "\\text{Note where the integrand is defined}",
          "explanation": "Logarithmic answers may need $|{\\cdot}|$ or domain restrictions such as $x>0$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "\\int \\dfrac{\\ln x}{x}\\,dx = \\dfrac{1}{2}(\\ln x)^2 + c",
          "explanation": "Final antiderivative.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\dfrac{\\ln x}{x}\\,dx = \\dfrac{1}{2}(\\ln x)^2 + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-substitution.q049",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "substitution"
    ],
    "questionText": "Find $\\displaystyle\\int e^x \\sin(e^x)\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose $u$",
          "workingLatex": "u = e^x",
          "explanation": "Pick the inner function whose derivative appears in the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find $du$ and rearrange",
          "workingLatex": "\\text{match factors to } du",
          "explanation": "Express $dx$ or remaining factors in terms of $du$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute into the integral",
          "workingLatex": "\\int \\ldots \\,du",
          "explanation": "Rewrite completely in $u$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate",
          "workingLatex": "-\\cos u + c",
          "explanation": "Apply standard integration rules.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Back-substitute",
          "workingLatex": "-\\cos(e^x)",
          "explanation": "Replace $u$ with the $x$-expression.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Add $+c$",
          "workingLatex": "-\\cos(e^x) + c",
          "explanation": "Include the constant for an indefinite integral.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Differentiate to check",
          "workingLatex": "\\frac{d}{dx}\\left(-\\cos(e^x)\\right)",
          "explanation": "Confirm the derivative matches the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Comment on domain restrictions",
          "workingLatex": "\\text{Note where the integrand is defined}",
          "explanation": "Logarithmic answers may need $|{\\cdot}|$ or domain restrictions such as $x>0$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "\\int e^x \\sin(e^x)\\,dx = -\\cos(e^x) + c",
          "explanation": "Final antiderivative.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int e^x \\sin(e^x)\\,dx = -\\cos(e^x) + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-substitution.q050",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "substitution"
    ],
    "questionText": "Find $\\displaystyle\\int \\dfrac{x^2}{(x^3+2)^2}\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose $u$",
          "workingLatex": "u = x^3+2",
          "explanation": "Pick the inner function whose derivative appears in the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find $du$ and rearrange",
          "workingLatex": "\\text{match factors to } du",
          "explanation": "Express $dx$ or remaining factors in terms of $du$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute into the integral",
          "workingLatex": "\\int \\ldots \\,du",
          "explanation": "Rewrite completely in $u$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate",
          "workingLatex": "-\\dfrac{1}{3}u^{-1} + c",
          "explanation": "Apply standard integration rules.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Back-substitute",
          "workingLatex": "-\\dfrac{1}{3(x^3+2)}",
          "explanation": "Replace $u$ with the $x$-expression.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Add $+c$",
          "workingLatex": "-\\dfrac{1}{3(x^3+2)} + c",
          "explanation": "Include the constant for an indefinite integral.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Differentiate to check",
          "workingLatex": "\\frac{d}{dx}\\left(-\\dfrac{1}{3(x^3+2)}\\right)",
          "explanation": "Confirm the derivative matches the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Comment on domain restrictions",
          "workingLatex": "\\text{Note where the integrand is defined}",
          "explanation": "Logarithmic answers may need $|{\\cdot}|$ or domain restrictions such as $x>0$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "\\int \\dfrac{x^2}{(x^3+2)^2}\\,dx = -\\dfrac{1}{3(x^3+2)} + c",
          "explanation": "Final antiderivative.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\dfrac{x^2}{(x^3+2)^2}\\,dx = -\\dfrac{1}{3(x^3+2)} + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-substitution.q051",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "substitution",
      "definite integral",
      "trigonometry"
    ],
    "questionText": "Evaluate $\\displaystyle\\int_{0}^{\\dfrac{\\pi}{2}} \\sin^2 x \\cos x\\,dx$ using substitution.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the substitution",
          "workingLatex": "u=\\sin x",
          "explanation": "Choose $u$ to simplify the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find $du$",
          "workingLatex": "\\text{differentiate } u",
          "explanation": "Compute $du$ and match to integrand factors.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Change the limits",
          "workingLatex": "x=0 \\Rightarrow u=0, \\quad x=\\dfrac{\\pi}{2} \\Rightarrow u=1",
          "explanation": "Convert $x$-limits to $u$-limits before integrating.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rewrite the definite integral",
          "workingLatex": "\\int_{0}^{1} \\ldots \\,du",
          "explanation": "Full substitution into $u$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate",
          "workingLatex": "\\text{find antiderivative}",
          "explanation": "Integrate with respect to $u$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate at the limits",
          "workingLatex": "\\left[F(u)\\right]_{0}^{1}",
          "explanation": "Apply the fundamental theorem of calculus.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify the arithmetic",
          "workingLatex": "\\dfrac{1}{3}",
          "explanation": "Combine terms and simplify surds or logarithms.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret geometrically if applicable",
          "workingLatex": "\\text{Area under the curve}",
          "explanation": "A definite integral represents the signed area between the curve and the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify the substitution was valid",
          "workingLatex": "\\text{Check } u \\text{ is continuous on } [{ua},{ub}]",
          "explanation": "The substitution must be valid across the entire interval.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the exact answer",
          "workingLatex": "\\dfrac{1}{3}",
          "explanation": "Leave the answer in exact form unless decimals are requested.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Note common errors",
          "workingLatex": "\\text{Forgetting to change limits}",
          "explanation": "A frequent mistake is substituting $u$ but keeping the original $x$-limits.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Alternative method outline",
          "workingLatex": "\\text{Indefinite integral then back-substitute}",
          "explanation": "Either changed limits or back-substitution with original limits works.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Final answer",
          "workingLatex": "\\dfrac{1}{3}",
          "explanation": "The value of the definite integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{0}^{\\dfrac{\\pi}{2}} \\sin^2 x \\cos x\\,dx = \\dfrac{1}{3}$."
    }
  },
  {
    "id": "al.y2.pure.integration-substitution.q052",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "substitution",
      "definite integral",
      "trigonometry"
    ],
    "questionText": "Evaluate $\\displaystyle\\int_{0}^{2} x\\sqrt{4-x^2}\\,dx$ using substitution.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the substitution",
          "workingLatex": "u=4-x^2",
          "explanation": "Choose $u$ to simplify the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find $du$",
          "workingLatex": "\\text{differentiate } u",
          "explanation": "Compute $du$ and match to integrand factors.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Change the limits",
          "workingLatex": "x=0 \\Rightarrow u=4, \\quad x=2 \\Rightarrow u=0",
          "explanation": "Convert $x$-limits to $u$-limits before integrating.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rewrite the definite integral",
          "workingLatex": "\\int_{4}^{0} \\ldots \\,du",
          "explanation": "Full substitution into $u$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate",
          "workingLatex": "\\text{find antiderivative}",
          "explanation": "Integrate with respect to $u$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate at the limits",
          "workingLatex": "\\left[F(u)\\right]_{4}^{0}",
          "explanation": "Apply the fundamental theorem of calculus.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify the arithmetic",
          "workingLatex": "\\dfrac{8}{3}",
          "explanation": "Combine terms and simplify surds or logarithms.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret geometrically if applicable",
          "workingLatex": "\\text{Area under the curve}",
          "explanation": "A definite integral represents the signed area between the curve and the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify the substitution was valid",
          "workingLatex": "\\text{Check } u \\text{ is continuous on } [{ua},{ub}]",
          "explanation": "The substitution must be valid across the entire interval.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the exact answer",
          "workingLatex": "\\dfrac{8}{3}",
          "explanation": "Leave the answer in exact form unless decimals are requested.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Note common errors",
          "workingLatex": "\\text{Forgetting to change limits}",
          "explanation": "A frequent mistake is substituting $u$ but keeping the original $x$-limits.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Alternative method outline",
          "workingLatex": "\\text{Indefinite integral then back-substitute}",
          "explanation": "Either changed limits or back-substitution with original limits works.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Final answer",
          "workingLatex": "\\dfrac{8}{3}",
          "explanation": "The value of the definite integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{0}^{2} x\\sqrt{4-x^2}\\,dx = \\dfrac{8}{3}$."
    }
  },
  {
    "id": "al.y2.pure.integration-substitution.q053",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "substitution",
      "definite integral",
      "trigonometry"
    ],
    "questionText": "Evaluate $\\displaystyle\\int_{0}^{1} \\dfrac{x^3}{x^4+1}\\,dx$ using substitution.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the substitution",
          "workingLatex": "u=x^4+1",
          "explanation": "Choose $u$ to simplify the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find $du$",
          "workingLatex": "\\text{differentiate } u",
          "explanation": "Compute $du$ and match to integrand factors.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Change the limits",
          "workingLatex": "x=0 \\Rightarrow u=1, \\quad x=1 \\Rightarrow u=2",
          "explanation": "Convert $x$-limits to $u$-limits before integrating.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rewrite the definite integral",
          "workingLatex": "\\int_{1}^{2} \\ldots \\,du",
          "explanation": "Full substitution into $u$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate",
          "workingLatex": "\\text{find antiderivative}",
          "explanation": "Integrate with respect to $u$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate at the limits",
          "workingLatex": "\\left[F(u)\\right]_{1}^{2}",
          "explanation": "Apply the fundamental theorem of calculus.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify the arithmetic",
          "workingLatex": "\\dfrac{1}{4}\\ln 2",
          "explanation": "Combine terms and simplify surds or logarithms.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret geometrically if applicable",
          "workingLatex": "\\text{Area under the curve}",
          "explanation": "A definite integral represents the signed area between the curve and the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify the substitution was valid",
          "workingLatex": "\\text{Check } u \\text{ is continuous on } [{ua},{ub}]",
          "explanation": "The substitution must be valid across the entire interval.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the exact answer",
          "workingLatex": "\\dfrac{1}{4}\\ln 2",
          "explanation": "Leave the answer in exact form unless decimals are requested.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Note common errors",
          "workingLatex": "\\text{Forgetting to change limits}",
          "explanation": "A frequent mistake is substituting $u$ but keeping the original $x$-limits.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Alternative method outline",
          "workingLatex": "\\text{Indefinite integral then back-substitute}",
          "explanation": "Either changed limits or back-substitution with original limits works.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Final answer",
          "workingLatex": "\\dfrac{1}{4}\\ln 2",
          "explanation": "The value of the definite integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{0}^{1} \\dfrac{x^3}{x^4+1}\\,dx = \\dfrac{1}{4}\\ln 2$."
    }
  },
  {
    "id": "al.y2.pure.integration-substitution.q054",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "substitution",
      "definite integral",
      "trigonometry"
    ],
    "questionText": "Evaluate $\\displaystyle\\int_{0}^{\\ln 3} e^x\\sqrt{e^x+1}\\,dx$ using substitution.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the substitution",
          "workingLatex": "u=e^x+1",
          "explanation": "Choose $u$ to simplify the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find $du$",
          "workingLatex": "\\text{differentiate } u",
          "explanation": "Compute $du$ and match to integrand factors.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Change the limits",
          "workingLatex": "x=0 \\Rightarrow u=2, \\quad x=\\ln 3 \\Rightarrow u=4",
          "explanation": "Convert $x$-limits to $u$-limits before integrating.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rewrite the definite integral",
          "workingLatex": "\\int_{2}^{4} \\ldots \\,du",
          "explanation": "Full substitution into $u$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate",
          "workingLatex": "\\text{find antiderivative}",
          "explanation": "Integrate with respect to $u$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate at the limits",
          "workingLatex": "\\left[F(u)\\right]_{2}^{4}",
          "explanation": "Apply the fundamental theorem of calculus.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify the arithmetic",
          "workingLatex": "\\dfrac{2}{3}(4^{3/2}-2^{3/2}) = \\dfrac{2}{3}(8-2\\sqrt{2})",
          "explanation": "Combine terms and simplify surds or logarithms.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret geometrically if applicable",
          "workingLatex": "\\text{Area under the curve}",
          "explanation": "A definite integral represents the signed area between the curve and the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify the substitution was valid",
          "workingLatex": "\\text{Check } u \\text{ is continuous on } [{ua},{ub}]",
          "explanation": "The substitution must be valid across the entire interval.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the exact answer",
          "workingLatex": "\\dfrac{2}{3}(4^{3/2}-2^{3/2}) = \\dfrac{2}{3}(8-2\\sqrt{2})",
          "explanation": "Leave the answer in exact form unless decimals are requested.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Note common errors",
          "workingLatex": "\\text{Forgetting to change limits}",
          "explanation": "A frequent mistake is substituting $u$ but keeping the original $x$-limits.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Alternative method outline",
          "workingLatex": "\\text{Indefinite integral then back-substitute}",
          "explanation": "Either changed limits or back-substitution with original limits works.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Final answer",
          "workingLatex": "\\dfrac{2}{3}(4^{3/2}-2^{3/2}) = \\dfrac{2}{3}(8-2\\sqrt{2})",
          "explanation": "The value of the definite integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{0}^{\\ln 3} e^x\\sqrt{e^x+1}\\,dx = \\dfrac{2}{3}(4^{3/2}-2^{3/2}) = \\dfrac{2}{3}(8-2\\sqrt{2})$."
    }
  },
  {
    "id": "al.y2.pure.integration-substitution.q055",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "substitution",
      "definite integral",
      "trigonometry"
    ],
    "questionText": "Evaluate $\\displaystyle\\int_{0}^{\\dfrac{\\pi}{4}} \\dfrac{\\sin x}{\\cos^2 x}\\,dx$ using substitution.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the substitution",
          "workingLatex": "u=\\cos x",
          "explanation": "Choose $u$ to simplify the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find $du$",
          "workingLatex": "\\text{differentiate } u",
          "explanation": "Compute $du$ and match to integrand factors.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Change the limits",
          "workingLatex": "x=0 \\Rightarrow u=1, \\quad x=\\dfrac{\\pi}{4} \\Rightarrow u=\\dfrac{1}{\\sqrt{2}}",
          "explanation": "Convert $x$-limits to $u$-limits before integrating.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rewrite the definite integral",
          "workingLatex": "\\int_{1}^{\\dfrac{1}{\\sqrt{2}}} \\ldots \\,du",
          "explanation": "Full substitution into $u$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate",
          "workingLatex": "\\text{find antiderivative}",
          "explanation": "Integrate with respect to $u$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate at the limits",
          "workingLatex": "\\left[F(u)\\right]_{1}^{\\dfrac{1}{\\sqrt{2}}}",
          "explanation": "Apply the fundamental theorem of calculus.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify the arithmetic",
          "workingLatex": "2-\\sqrt{2}",
          "explanation": "Combine terms and simplify surds or logarithms.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret geometrically if applicable",
          "workingLatex": "\\text{Area under the curve}",
          "explanation": "A definite integral represents the signed area between the curve and the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify the substitution was valid",
          "workingLatex": "\\text{Check } u \\text{ is continuous on } [{ua},{ub}]",
          "explanation": "The substitution must be valid across the entire interval.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the exact answer",
          "workingLatex": "2-\\sqrt{2}",
          "explanation": "Leave the answer in exact form unless decimals are requested.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Note common errors",
          "workingLatex": "\\text{Forgetting to change limits}",
          "explanation": "A frequent mistake is substituting $u$ but keeping the original $x$-limits.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Alternative method outline",
          "workingLatex": "\\text{Indefinite integral then back-substitute}",
          "explanation": "Either changed limits or back-substitution with original limits works.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Final answer",
          "workingLatex": "2-\\sqrt{2}",
          "explanation": "The value of the definite integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{0}^{\\dfrac{\\pi}{4}} \\dfrac{\\sin x}{\\cos^2 x}\\,dx = 2-\\sqrt{2}$."
    }
  },
  {
    "id": "al.y2.pure.integration-substitution.q056",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "substitution",
      "indefinite integral"
    ],
    "questionText": "Find $\\displaystyle\\int \\sin^5 x \\cos x\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Analyse the integrand structure",
          "workingLatex": "\\sin^5 x \\cos x",
          "explanation": "Look for an inner function and (a constant times) its derivative.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Define the substitution",
          "workingLatex": "u=\\sin x",
          "explanation": "Set $u$ equal to the inner expression.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute $du$",
          "workingLatex": "\\text{differentiate and rearrange}",
          "explanation": "Find $du$ and solve for the factor needed.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Transform the integral",
          "workingLatex": "\\int f(u)\\,du",
          "explanation": "Rewrite entirely in $u$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate",
          "workingLatex": "\\dfrac{1}{6}\\sin^6 x",
          "explanation": "Apply the appropriate rule.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Back-substitute",
          "workingLatex": "\\dfrac{1}{6}\\sin^6 x",
          "explanation": "Replace $u$ with the $x$-expression.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Add $+c$",
          "workingLatex": "\\dfrac{1}{6}\\sin^6 x + c",
          "explanation": "Constant of integration for indefinite integrals.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check",
          "workingLatex": "\\text{differentiate the answer}",
          "explanation": "Verify the derivative returns the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Discuss domain",
          "workingLatex": "\\text{State restrictions on } x",
          "explanation": "Note values where the integrand or answer is undefined.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Compare with inspection",
          "workingLatex": "\\text{Could the form be recognised directly?}",
          "explanation": "With practice, some substitutions become immediate reverse chain-rule recognition.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the result",
          "workingLatex": "\\int \\sin^5 x \\cos x\\,dx = \\dfrac{1}{6}\\sin^6 x + c",
          "explanation": "Final answer.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Method summary",
          "workingLatex": "u\\text{-substitution}",
          "explanation": "This problem demonstrates choosing $u$ to reduce a complex integrand to a basic form.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Final answer",
          "workingLatex": "\\dfrac{1}{6}\\sin^6 x + c",
          "explanation": "Confirmed antiderivative.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\sin^5 x \\cos x\\,dx = \\dfrac{1}{6}\\sin^6 x + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-substitution.q057",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "substitution",
      "indefinite integral"
    ],
    "questionText": "Find $\\displaystyle\\int \\dfrac{x}{\\sqrt{x^2-1}}\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Analyse the integrand structure",
          "workingLatex": "\\dfrac{x}{\\sqrt{x^2-1}}",
          "explanation": "Look for an inner function and (a constant times) its derivative.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Define the substitution",
          "workingLatex": "u=x^2-1",
          "explanation": "Set $u$ equal to the inner expression.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute $du$",
          "workingLatex": "\\text{differentiate and rearrange}",
          "explanation": "Find $du$ and solve for the factor needed.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Transform the integral",
          "workingLatex": "\\int f(u)\\,du",
          "explanation": "Rewrite entirely in $u$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate",
          "workingLatex": "\\sqrt{x^2-1}",
          "explanation": "Apply the appropriate rule.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Back-substitute",
          "workingLatex": "\\sqrt{x^2-1}",
          "explanation": "Replace $u$ with the $x$-expression.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Add $+c$",
          "workingLatex": "\\sqrt{x^2-1} + c",
          "explanation": "Constant of integration for indefinite integrals.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check",
          "workingLatex": "\\text{differentiate the answer}",
          "explanation": "Verify the derivative returns the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Discuss domain",
          "workingLatex": "\\text{State restrictions on } x",
          "explanation": "Note values where the integrand or answer is undefined.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Compare with inspection",
          "workingLatex": "\\text{Could the form be recognised directly?}",
          "explanation": "With practice, some substitutions become immediate reverse chain-rule recognition.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the result",
          "workingLatex": "\\int \\dfrac{x}{\\sqrt{x^2-1}}\\,dx = \\sqrt{x^2-1} + c",
          "explanation": "Final answer.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Method summary",
          "workingLatex": "u\\text{-substitution}",
          "explanation": "This problem demonstrates choosing $u$ to reduce a complex integrand to a basic form.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Final answer",
          "workingLatex": "\\sqrt{x^2-1} + c",
          "explanation": "Confirmed antiderivative.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\dfrac{x}{\\sqrt{x^2-1}}\\,dx = \\sqrt{x^2-1} + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-substitution.q058",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "substitution",
      "indefinite integral"
    ],
    "questionText": "Find $\\displaystyle\\int \\tan x\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Analyse the integrand structure",
          "workingLatex": "\\tan x",
          "explanation": "Look for an inner function and (a constant times) its derivative.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Define the substitution",
          "workingLatex": "u=\\cos x",
          "explanation": "Set $u$ equal to the inner expression.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute $du$",
          "workingLatex": "\\text{differentiate and rearrange}",
          "explanation": "Find $du$ and solve for the factor needed.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Transform the integral",
          "workingLatex": "\\int f(u)\\,du",
          "explanation": "Rewrite entirely in $u$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate",
          "workingLatex": "-\\ln|\\cos x|",
          "explanation": "Apply the appropriate rule.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Back-substitute",
          "workingLatex": "-\\ln|\\cos x|",
          "explanation": "Replace $u$ with the $x$-expression.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Add $+c$",
          "workingLatex": "-\\ln|\\cos x| + c",
          "explanation": "Constant of integration for indefinite integrals.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check",
          "workingLatex": "\\text{differentiate the answer}",
          "explanation": "Verify the derivative returns the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Discuss domain",
          "workingLatex": "\\text{State restrictions on } x",
          "explanation": "Note values where the integrand or answer is undefined.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Compare with inspection",
          "workingLatex": "\\text{Could the form be recognised directly?}",
          "explanation": "With practice, some substitutions become immediate reverse chain-rule recognition.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the result",
          "workingLatex": "\\int \\tan x\\,dx = -\\ln|\\cos x| + c",
          "explanation": "Final answer.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Method summary",
          "workingLatex": "u\\text{-substitution}",
          "explanation": "This problem demonstrates choosing $u$ to reduce a complex integrand to a basic form.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Final answer",
          "workingLatex": "-\\ln|\\cos x| + c",
          "explanation": "Confirmed antiderivative.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\tan x\\,dx = -\\ln|\\cos x| + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-substitution.q059",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "substitution",
      "indefinite integral"
    ],
    "questionText": "Find $\\displaystyle\\int \\dfrac{1}{x^2\\sqrt{1+1/x}}\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Analyse the integrand structure",
          "workingLatex": "\\dfrac{1}{x^2\\sqrt{1+1/x}}",
          "explanation": "Look for an inner function and (a constant times) its derivative.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Define the substitution",
          "workingLatex": "u=1+\\dfrac{1}{x}",
          "explanation": "Set $u$ equal to the inner expression.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute $du$",
          "workingLatex": "\\text{differentiate and rearrange}",
          "explanation": "Find $du$ and solve for the factor needed.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Transform the integral",
          "workingLatex": "\\int f(u)\\,du",
          "explanation": "Rewrite entirely in $u$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate",
          "workingLatex": "-2\\sqrt{1+\\dfrac{1}{x}}",
          "explanation": "Apply the appropriate rule.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Back-substitute",
          "workingLatex": "-2\\sqrt{1+\\dfrac{1}{x}}",
          "explanation": "Replace $u$ with the $x$-expression.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Add $+c$",
          "workingLatex": "-2\\sqrt{1+\\dfrac{1}{x}} + c",
          "explanation": "Constant of integration for indefinite integrals.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check",
          "workingLatex": "\\text{differentiate the answer}",
          "explanation": "Verify the derivative returns the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Discuss domain",
          "workingLatex": "\\text{State restrictions on } x",
          "explanation": "Note values where the integrand or answer is undefined.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Compare with inspection",
          "workingLatex": "\\text{Could the form be recognised directly?}",
          "explanation": "With practice, some substitutions become immediate reverse chain-rule recognition.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the result",
          "workingLatex": "\\int \\dfrac{1}{x^2\\sqrt{1+1/x}}\\,dx = -2\\sqrt{1+\\dfrac{1}{x}} + c",
          "explanation": "Final answer.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Method summary",
          "workingLatex": "u\\text{-substitution}",
          "explanation": "This problem demonstrates choosing $u$ to reduce a complex integrand to a basic form.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Final answer",
          "workingLatex": "-2\\sqrt{1+\\dfrac{1}{x}} + c",
          "explanation": "Confirmed antiderivative.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\dfrac{1}{x^2\\sqrt{1+1/x}}\\,dx = -2\\sqrt{1+\\dfrac{1}{x}} + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-substitution.q060",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "substitution",
      "indefinite integral"
    ],
    "questionText": "Find $\\displaystyle\\int x^2 e^{x^3}\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Analyse the integrand structure",
          "workingLatex": "x^2 e^{x^3}",
          "explanation": "Look for an inner function and (a constant times) its derivative.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Define the substitution",
          "workingLatex": "u=x^3",
          "explanation": "Set $u$ equal to the inner expression.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute $du$",
          "workingLatex": "\\text{differentiate and rearrange}",
          "explanation": "Find $du$ and solve for the factor needed.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Transform the integral",
          "workingLatex": "\\int f(u)\\,du",
          "explanation": "Rewrite entirely in $u$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate",
          "workingLatex": "\\dfrac{1}{3}e^{x^3}",
          "explanation": "Apply the appropriate rule.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Back-substitute",
          "workingLatex": "\\dfrac{1}{3}e^{x^3}",
          "explanation": "Replace $u$ with the $x$-expression.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Add $+c$",
          "workingLatex": "\\dfrac{1}{3}e^{x^3} + c",
          "explanation": "Constant of integration for indefinite integrals.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check",
          "workingLatex": "\\text{differentiate the answer}",
          "explanation": "Verify the derivative returns the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Discuss domain",
          "workingLatex": "\\text{State restrictions on } x",
          "explanation": "Note values where the integrand or answer is undefined.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Compare with inspection",
          "workingLatex": "\\text{Could the form be recognised directly?}",
          "explanation": "With practice, some substitutions become immediate reverse chain-rule recognition.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the result",
          "workingLatex": "\\int x^2 e^{x^3}\\,dx = \\dfrac{1}{3}e^{x^3} + c",
          "explanation": "Final answer.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Method summary",
          "workingLatex": "u\\text{-substitution}",
          "explanation": "This problem demonstrates choosing $u$ to reduce a complex integrand to a basic form.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Final answer",
          "workingLatex": "\\dfrac{1}{3}e^{x^3} + c",
          "explanation": "Confirmed antiderivative.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int x^2 e^{x^3}\\,dx = \\dfrac{1}{3}e^{x^3} + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-substitution.q061",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "substitution",
      "indefinite integral"
    ],
    "questionText": "Find $\\displaystyle\\int \\dfrac{\\cos x - \\sin x}{\\sin x + \\cos x}\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Analyse the integrand structure",
          "workingLatex": "\\dfrac{\\cos x - \\sin x}{\\sin x + \\cos x}",
          "explanation": "Look for an inner function and (a constant times) its derivative.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Define the substitution",
          "workingLatex": "u=\\sin x+\\cos x",
          "explanation": "Set $u$ equal to the inner expression.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute $du$",
          "workingLatex": "\\text{differentiate and rearrange}",
          "explanation": "Find $du$ and solve for the factor needed.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Transform the integral",
          "workingLatex": "\\int f(u)\\,du",
          "explanation": "Rewrite entirely in $u$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate",
          "workingLatex": "\\ln|\\sin x+\\cos x|",
          "explanation": "Apply the appropriate rule.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Back-substitute",
          "workingLatex": "\\ln|\\sin x+\\cos x|",
          "explanation": "Replace $u$ with the $x$-expression.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Add $+c$",
          "workingLatex": "\\ln|\\sin x+\\cos x| + c",
          "explanation": "Constant of integration for indefinite integrals.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check",
          "workingLatex": "\\text{differentiate the answer}",
          "explanation": "Verify the derivative returns the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Discuss domain",
          "workingLatex": "\\text{State restrictions on } x",
          "explanation": "Note values where the integrand or answer is undefined.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Compare with inspection",
          "workingLatex": "\\text{Could the form be recognised directly?}",
          "explanation": "With practice, some substitutions become immediate reverse chain-rule recognition.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the result",
          "workingLatex": "\\int \\dfrac{\\cos x - \\sin x}{\\sin x + \\cos x}\\,dx = \\ln|\\sin x+\\cos x| + c",
          "explanation": "Final answer.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Method summary",
          "workingLatex": "u\\text{-substitution}",
          "explanation": "This problem demonstrates choosing $u$ to reduce a complex integrand to a basic form.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Final answer",
          "workingLatex": "\\ln|\\sin x+\\cos x| + c",
          "explanation": "Confirmed antiderivative.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\dfrac{\\cos x - \\sin x}{\\sin x + \\cos x}\\,dx = \\ln|\\sin x+\\cos x| + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-substitution.q062",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "substitution",
      "indefinite integral"
    ],
    "questionText": "Find $\\displaystyle\\int (\\ln x)^2 \\cdot \\dfrac{1}{x}\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Analyse the integrand structure",
          "workingLatex": "(\\ln x)^2 \\cdot \\dfrac{1}{x}",
          "explanation": "Look for an inner function and (a constant times) its derivative.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Define the substitution",
          "workingLatex": "u=\\ln x",
          "explanation": "Set $u$ equal to the inner expression.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute $du$",
          "workingLatex": "\\text{differentiate and rearrange}",
          "explanation": "Find $du$ and solve for the factor needed.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Transform the integral",
          "workingLatex": "\\int f(u)\\,du",
          "explanation": "Rewrite entirely in $u$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate",
          "workingLatex": "\\dfrac{1}{3}(\\ln x)^3",
          "explanation": "Apply the appropriate rule.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Back-substitute",
          "workingLatex": "\\dfrac{1}{3}(\\ln x)^3",
          "explanation": "Replace $u$ with the $x$-expression.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Add $+c$",
          "workingLatex": "\\dfrac{1}{3}(\\ln x)^3 + c",
          "explanation": "Constant of integration for indefinite integrals.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check",
          "workingLatex": "\\text{differentiate the answer}",
          "explanation": "Verify the derivative returns the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Discuss domain",
          "workingLatex": "\\text{State restrictions on } x",
          "explanation": "Note values where the integrand or answer is undefined.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Compare with inspection",
          "workingLatex": "\\text{Could the form be recognised directly?}",
          "explanation": "With practice, some substitutions become immediate reverse chain-rule recognition.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the result",
          "workingLatex": "\\int (\\ln x)^2 \\cdot \\dfrac{1}{x}\\,dx = \\dfrac{1}{3}(\\ln x)^3 + c",
          "explanation": "Final answer.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Method summary",
          "workingLatex": "u\\text{-substitution}",
          "explanation": "This problem demonstrates choosing $u$ to reduce a complex integrand to a basic form.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Final answer",
          "workingLatex": "\\dfrac{1}{3}(\\ln x)^3 + c",
          "explanation": "Confirmed antiderivative.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int (\\ln x)^2 \\cdot \\dfrac{1}{x}\\,dx = \\dfrac{1}{3}(\\ln x)^3 + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-substitution.q063",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "substitution",
      "indefinite integral"
    ],
    "questionText": "Find $\\displaystyle\\int \\dfrac{2x+1}{(x^2+x+1)^2}\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Analyse the integrand structure",
          "workingLatex": "\\dfrac{2x+1}{(x^2+x+1)^2}",
          "explanation": "Look for an inner function and (a constant times) its derivative.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Define the substitution",
          "workingLatex": "u=x^2+x+1",
          "explanation": "Set $u$ equal to the inner expression.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute $du$",
          "workingLatex": "\\text{differentiate and rearrange}",
          "explanation": "Find $du$ and solve for the factor needed.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Transform the integral",
          "workingLatex": "\\int f(u)\\,du",
          "explanation": "Rewrite entirely in $u$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate",
          "workingLatex": "-\\dfrac{1}{x^2+x+1}",
          "explanation": "Apply the appropriate rule.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Back-substitute",
          "workingLatex": "-\\dfrac{1}{x^2+x+1}",
          "explanation": "Replace $u$ with the $x$-expression.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Add $+c$",
          "workingLatex": "-\\dfrac{1}{x^2+x+1} + c",
          "explanation": "Constant of integration for indefinite integrals.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check",
          "workingLatex": "\\text{differentiate the answer}",
          "explanation": "Verify the derivative returns the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Discuss domain",
          "workingLatex": "\\text{State restrictions on } x",
          "explanation": "Note values where the integrand or answer is undefined.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Compare with inspection",
          "workingLatex": "\\text{Could the form be recognised directly?}",
          "explanation": "With practice, some substitutions become immediate reverse chain-rule recognition.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the result",
          "workingLatex": "\\int \\dfrac{2x+1}{(x^2+x+1)^2}\\,dx = -\\dfrac{1}{x^2+x+1} + c",
          "explanation": "Final answer.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Method summary",
          "workingLatex": "u\\text{-substitution}",
          "explanation": "This problem demonstrates choosing $u$ to reduce a complex integrand to a basic form.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Final answer",
          "workingLatex": "-\\dfrac{1}{x^2+x+1} + c",
          "explanation": "Confirmed antiderivative.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\dfrac{2x+1}{(x^2+x+1)^2}\\,dx = -\\dfrac{1}{x^2+x+1} + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-substitution.q064",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "substitution",
      "indefinite integral"
    ],
    "questionText": "Find $\\displaystyle\\int e^{\\sin x}\\cos x\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Analyse the integrand structure",
          "workingLatex": "e^{\\sin x}\\cos x",
          "explanation": "Look for an inner function and (a constant times) its derivative.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Define the substitution",
          "workingLatex": "u=\\sin x",
          "explanation": "Set $u$ equal to the inner expression.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute $du$",
          "workingLatex": "\\text{differentiate and rearrange}",
          "explanation": "Find $du$ and solve for the factor needed.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Transform the integral",
          "workingLatex": "\\int f(u)\\,du",
          "explanation": "Rewrite entirely in $u$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate",
          "workingLatex": "e^{\\sin x}",
          "explanation": "Apply the appropriate rule.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Back-substitute",
          "workingLatex": "e^{\\sin x}",
          "explanation": "Replace $u$ with the $x$-expression.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Add $+c$",
          "workingLatex": "e^{\\sin x} + c",
          "explanation": "Constant of integration for indefinite integrals.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check",
          "workingLatex": "\\text{differentiate the answer}",
          "explanation": "Verify the derivative returns the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Discuss domain",
          "workingLatex": "\\text{State restrictions on } x",
          "explanation": "Note values where the integrand or answer is undefined.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Compare with inspection",
          "workingLatex": "\\text{Could the form be recognised directly?}",
          "explanation": "With practice, some substitutions become immediate reverse chain-rule recognition.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the result",
          "workingLatex": "\\int e^{\\sin x}\\cos x\\,dx = e^{\\sin x} + c",
          "explanation": "Final answer.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Method summary",
          "workingLatex": "u\\text{-substitution}",
          "explanation": "This problem demonstrates choosing $u$ to reduce a complex integrand to a basic form.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Final answer",
          "workingLatex": "e^{\\sin x} + c",
          "explanation": "Confirmed antiderivative.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int e^{\\sin x}\\cos x\\,dx = e^{\\sin x} + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-substitution.q065",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "substitution",
      "indefinite integral"
    ],
    "questionText": "Find $\\displaystyle\\int \\dfrac{x^3}{\\sqrt{1-x^4}}\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Analyse the integrand structure",
          "workingLatex": "\\dfrac{x^3}{\\sqrt{1-x^4}}",
          "explanation": "Look for an inner function and (a constant times) its derivative.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Define the substitution",
          "workingLatex": "u=1-x^4",
          "explanation": "Set $u$ equal to the inner expression.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute $du$",
          "workingLatex": "\\text{differentiate and rearrange}",
          "explanation": "Find $du$ and solve for the factor needed.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Transform the integral",
          "workingLatex": "\\int f(u)\\,du",
          "explanation": "Rewrite entirely in $u$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate",
          "workingLatex": "-\\dfrac{1}{4}\\sqrt{1-x^4}",
          "explanation": "Apply the appropriate rule.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Back-substitute",
          "workingLatex": "-\\dfrac{1}{4}\\sqrt{1-x^4}",
          "explanation": "Replace $u$ with the $x$-expression.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Add $+c$",
          "workingLatex": "-\\dfrac{1}{4}\\sqrt{1-x^4} + c",
          "explanation": "Constant of integration for indefinite integrals.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check",
          "workingLatex": "\\text{differentiate the answer}",
          "explanation": "Verify the derivative returns the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Discuss domain",
          "workingLatex": "\\text{State restrictions on } x",
          "explanation": "Note values where the integrand or answer is undefined.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Compare with inspection",
          "workingLatex": "\\text{Could the form be recognised directly?}",
          "explanation": "With practice, some substitutions become immediate reverse chain-rule recognition.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the result",
          "workingLatex": "\\int \\dfrac{x^3}{\\sqrt{1-x^4}}\\,dx = -\\dfrac{1}{4}\\sqrt{1-x^4} + c",
          "explanation": "Final answer.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Method summary",
          "workingLatex": "u\\text{-substitution}",
          "explanation": "This problem demonstrates choosing $u$ to reduce a complex integrand to a basic form.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Final answer",
          "workingLatex": "-\\dfrac{1}{4}\\sqrt{1-x^4} + c",
          "explanation": "Confirmed antiderivative.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\dfrac{x^3}{\\sqrt{1-x^4}}\\,dx = -\\dfrac{1}{4}\\sqrt{1-x^4} + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-substitution.q066",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "written",
    "tags": [
      "substitution",
      "definite integral",
      "area"
    ],
    "questionText": "The curve $y = \\dfrac{x}{\\sqrt{x^2+1}}$ is defined for $x \\geqslant 0$. (a) Use the substitution $u = x^2+1$ to show that $\\displaystyle\\int_0^1 \\dfrac{x}{\\sqrt{x^2+1}}\\,dx = \\sqrt{2}-1$. (b) State the exact area of the finite region bounded by the curve, the $x$-axis and the lines $x=0$ and $x=1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the substitution for part (a)",
          "workingLatex": "u = x^2+1, \\quad du = 2x\\,dx",
          "explanation": "The $x$ in the numerator combines with $dx$ to form $du$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Change the limits",
          "workingLatex": "x=0 \\Rightarrow u=1, \\quad x=1 \\Rightarrow u=2",
          "explanation": "Convert to $u$-limits.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite the integral",
          "workingLatex": "\\int_1^2 \\dfrac{1}{2\\sqrt{u}}\\,du = \\dfrac{1}{2}\\int_1^2 u^{-1/2}\\,du",
          "explanation": "The integral becomes a standard power.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate",
          "workingLatex": "\\dfrac{1}{2}\\left[2u^{1/2}\\right]_1^2 = \\left[\\sqrt{u}\\right]_1^2",
          "explanation": "Antiderivative of $u^{-1/2}$ is $2u^{1/2}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate",
          "workingLatex": "\\sqrt{2} - \\sqrt{1} = \\sqrt{2}-1",
          "explanation": "Substitute the limits to obtain the required result.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Part (b): identify the region",
          "workingLatex": "\\text{Area} = \\int_0^1 y\\,dx",
          "explanation": "The area under the curve between $x=0$ and $x=1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Use part (a)",
          "workingLatex": "\\text{Area} = \\sqrt{2}-1",
          "explanation": "The integral from part (a) gives the exact area.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Confirm the curve is positive on $[0,1]$",
          "workingLatex": "y > 0 \\text{ for } x \\geqslant 0",
          "explanation": "Since both $x$ and the square root are non-negative, the integrand is positive and the integral gives the area directly.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State part (b)",
          "workingLatex": "\\text{Area} = \\sqrt{2}-1 \\text{ square units}",
          "explanation": "The exact area is $\\sqrt{2}-1$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Units",
          "workingLatex": "\\text{square units}",
          "explanation": "Area has units of length squared.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Summary",
          "workingLatex": "(a)\\ \\sqrt{2}-1, \\quad (b)\\ \\text{Area}=\\sqrt{2}-1",
          "explanation": "Both parts use the same integral.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Geometric note",
          "workingLatex": "\\text{Small area under a gently increasing curve}",
          "explanation": "$\\sqrt{2}-1 \\approx 0.414$, a modest area.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Final answers",
          "workingLatex": "(a)\\ \\sqrt{2}-1, \\quad (b)\\ \\sqrt{2}-1",
          "explanation": "As required.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\displaystyle\\int_0^1 \\dfrac{x}{\\sqrt{x^2+1}}\\,dx = \\sqrt{2}-1$. (b) Area $= \\sqrt{2}-1$ square units."
    }
  },
  {
    "id": "al.y2.pure.integration-substitution.q067",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "tags": [
      "substitution",
      "trigonometry"
    ],
    "questionText": "Find $\\displaystyle\\int \\sin^3 x\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rewrite using $\\sin^2 x = 1-\\cos^2 x$",
          "workingLatex": "\\sin^3 x = \\sin x(1-\\cos^2 x)",
          "explanation": "Split off one $\\sin x$ for $du$ and express the rest in cosines.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose $u = \\cos x$",
          "workingLatex": "u = \\cos x, \\quad du = -\\sin x\\,dx",
          "explanation": "The remaining $\\sin x\\,dx$ becomes $-du$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute",
          "workingLatex": "-\\int (1-u^2)\\,du",
          "explanation": "The integral is a polynomial in $u$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Expand and integrate",
          "workingLatex": "-u + \\dfrac{u^3}{3} + c",
          "explanation": "Integrate term by term.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Back-substitute",
          "workingLatex": "-\\cos x + \\dfrac{\\cos^3 x}{3} + c",
          "explanation": "Replace $u$ with $\\cos x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Alternative form",
          "workingLatex": "\\cos x\\left(\\dfrac{\\cos^2 x}{3}-1\\right) + c",
          "explanation": "Factor if desired.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check by differentiating",
          "workingLatex": "\\frac{d}{dx}\\left(-\\cos x + \\dfrac{\\cos^3 x}{3}\\right) = \\sin x - \\cos^2 x\\sin x = \\sin^3 x",
          "explanation": "Confirmation.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Note the technique",
          "workingLatex": "\\text{Odd power of sine: save one factor, convert rest}",
          "explanation": "For $\\int \\sin^n x\\,dx$ with $n$ odd, this is the standard approach.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Could also write",
          "workingLatex": "\\dfrac{1}{3}\\cos^3 x - \\cos x + c",
          "explanation": "Equivalent answer.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Domain",
          "workingLatex": "x \\in \\mathbb{R}",
          "explanation": "The antiderivative is valid wherever $\\sin^3 x$ is defined.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Relate to standard integral",
          "workingLatex": "\\text{Not a standard result — needs substitution}",
          "explanation": "Unlike $\\int \\sin x\\,dx$, odd powers require this technique.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Summary of steps",
          "workingLatex": "\\text{rewrite} \\to u\\text{-sub} \\to \\text{integrate} \\to \\text{back-sub}",
          "explanation": "The full substitution pipeline.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Final answer",
          "workingLatex": "-\\cos x + \\dfrac{\\cos^3 x}{3} + c",
          "explanation": "Required antiderivative.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\sin^3 x\\,dx = -\\cos x + \\dfrac{\\cos^3 x}{3} + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-substitution.q068",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "substitution",
      "definite integral"
    ],
    "questionText": "Use the substitution $u = 1+x^2$ to evaluate $\\displaystyle\\int_0^1 \\dfrac{x}{(1+x^2)^2}\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Apply the given substitution",
          "workingLatex": "u = 1+x^2, \\quad du = 2x\\,dx",
          "explanation": "So $x\\,dx = \\dfrac{1}{2}du$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Change limits",
          "workingLatex": "x=0 \\Rightarrow u=1, \\quad x=1 \\Rightarrow u=2",
          "explanation": "New limits in $u$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite",
          "workingLatex": "\\int_1^2 \\dfrac{1}{u^2} \\cdot \\dfrac{1}{2}\\,du = \\dfrac{1}{2}\\int_1^2 u^{-2}\\,du",
          "explanation": "The integral simplifies to a power.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate",
          "workingLatex": "\\dfrac{1}{2}\\left[-u^{-1}\\right]_1^2",
          "explanation": "Antiderivative of $u^{-2}$ is $-u^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate",
          "workingLatex": "\\dfrac{1}{2}\\left(-\\dfrac{1}{2} + 1\\right) = \\dfrac{1}{2} \\cdot \\dfrac{1}{2} = \\dfrac{1}{4}",
          "explanation": "Substitute limits and simplify.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Exact answer",
          "workingLatex": "\\dfrac{1}{4}",
          "explanation": "The integral equals $\\dfrac{1}{4}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify sign",
          "workingLatex": "\\text{Integrand positive on } [0,1]",
          "explanation": "The integrand is positive, so the integral should be positive.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Note the given substitution",
          "workingLatex": "\\text{Using the suggested } u",
          "explanation": "Sometimes the substitution is specified in the question.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Alternative: $u=x^2+1$ discovered independently",
          "workingLatex": "\\text{Same result}",
          "explanation": "The same $u$ would be found by inspection.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Decimal check",
          "workingLatex": "0.25",
          "explanation": "$\\dfrac{1}{4} = 0.25$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Method",
          "workingLatex": "\\text{Changed limits, no back-substitution needed}",
          "explanation": "Efficient for definite integrals.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Common error",
          "workingLatex": "\\text{Forgetting the } \\tfrac{1}{2}",
          "explanation": "The factor from $du = 2x\\,dx$ is easily missed.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Final answer",
          "workingLatex": "\\dfrac{1}{4}",
          "explanation": "Confirmed.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_0^1 \\dfrac{x}{(1+x^2)^2}\\,dx = \\dfrac{1}{4}$."
    }
  },
  {
    "id": "al.y2.pure.integration-substitution.q069",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "expression",
    "tags": [
      "substitution",
      "exponential"
    ],
    "questionText": "Find $\\displaystyle\\int \\dfrac{e^{2x}}{(e^{2x}+1)^3}\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose $u = e^{2x}+1$",
          "workingLatex": "u = e^{2x}+1",
          "explanation": "The denominator is a power of an exponential expression.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate",
          "workingLatex": "du = 2e^{2x}\\,dx",
          "explanation": "The numerator (up to a factor of $2$) is $du$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange",
          "workingLatex": "e^{2x}\\,dx = \\dfrac{1}{2}du",
          "explanation": "Isolate the matching factor.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute",
          "workingLatex": "\\dfrac{1}{2}\\int u^{-3}\\,du",
          "explanation": "Standard power integral.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate",
          "workingLatex": "\\dfrac{1}{2} \\cdot \\dfrac{u^{-2}}{-2} + c = -\\dfrac{1}{4u^2} + c",
          "explanation": "Power rule with $n=-3$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Back-substitute",
          "workingLatex": "-\\dfrac{1}{4(e^{2x}+1)^2} + c",
          "explanation": "Replace $u$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check",
          "workingLatex": "\\frac{d}{dx}\\left(-\\dfrac{1}{4(e^{2x}+1)^2}\\right)",
          "explanation": "Chain rule confirms the derivative.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Note the structure",
          "workingLatex": "\\dfrac{f'(x)}{f(x)^3} \\text{ type}",
          "explanation": "Generalises to integrals of rational functions of exponentials.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Domain",
          "workingLatex": "e^{2x}+1 > 0 \\text{ always}",
          "explanation": "The integrand is defined for all real $x$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Alternative $u = e^{2x}$",
          "workingLatex": "u = e^{2x} \\Rightarrow \\int \\dfrac{du}{(u+1)^3}",
          "explanation": "A two-step substitution also works.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Simplify the answer",
          "workingLatex": "-\\dfrac{1}{4(e^{2x}+1)^2} + c",
          "explanation": "Simplest form.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Technique summary",
          "workingLatex": "\\text{Denominator defines } u",
          "explanation": "When the denominator is a function of $e^{kx}$, let $u$ be that function.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Related integrals",
          "workingLatex": "\\int \\dfrac{f'(x)}{f(x)^n}\\,dx",
          "explanation": "Same method for other powers in the denominator.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Final answer",
          "workingLatex": "-\\dfrac{1}{4(e^{2x}+1)^2} + c",
          "explanation": "Required antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Confirm $+c$",
          "workingLatex": "+c",
          "explanation": "General solution includes an arbitrary constant.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\dfrac{e^{2x}}{(e^{2x}+1)^3}\\,dx = -\\dfrac{1}{4(e^{2x}+1)^2} + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-substitution.q070",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "tags": [
      "substitution",
      "definite integral",
      "show that"
    ],
    "questionText": "(a) Show that $\\displaystyle\\int_0^{\\pi/4} \\tan x\\,dx = \\dfrac{1}{2}\\ln 2$. (b) Hence find $\\displaystyle\\int_0^{\\pi/4} \\dfrac{1}{\\cos^2 x}\\,dx$ without further integration.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rewrite $\\tan x$ for part (a)",
          "workingLatex": "\\tan x = \\dfrac{\\sin x}{\\cos x}",
          "explanation": "Express tangent as a quotient.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute $u = \\cos x$",
          "workingLatex": "u = \\cos x, \\quad du = -\\sin x\\,dx",
          "explanation": "The numerator becomes part of $du$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Change limits",
          "workingLatex": "x=0 \\Rightarrow u=1, \\quad x=\\dfrac{\\pi}{4} \\Rightarrow u=\\dfrac{1}{\\sqrt{2}}",
          "explanation": "Convert to $u$-limits.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rewrite the integral",
          "workingLatex": "-\\int_1^{1/\\sqrt{2}} \\dfrac{1}{u^2}\\,du = \\int_{1/\\sqrt{2}}^1 u^{-2}\\,du",
          "explanation": "Reversing limits removes the negative sign.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate",
          "workingLatex": "\\left[-u^{-1}\\right]_{1/\\sqrt{2}}^1 = -1 + \\sqrt{2}",
          "explanation": "Wait — recalculate: $\\int \\tan x\\,dx = -\\ln|\\cos x|$. At limits: $-\\ln(1/\\sqrt{2}) + \\ln 1 = \\dfrac{1}{2}\\ln 2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate correctly",
          "workingLatex": "-\\ln\\dfrac{1}{\\sqrt{2}} = \\ln\\sqrt{2} = \\dfrac{1}{2}\\ln 2",
          "explanation": "Using $-\\ln(1/\\sqrt{2}) = \\ln(\\sqrt{2}) = \\tfrac{1}{2}\\ln 2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Part (a) complete",
          "workingLatex": "\\int_0^{\\pi/4} \\tan x\\,dx = \\dfrac{1}{2}\\ln 2",
          "explanation": "As required.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Part (b): recognise $\\dfrac{1}{\\cos^2 x} = \\sec^2 x$",
          "workingLatex": "\\sec^2 x = \\dfrac{d}{dx}(\\tan x)",
          "explanation": "The derivative of $\\tan x$ is $\\sec^2 x$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Therefore",
          "workingLatex": "\\int_0^{\\pi/4} \\sec^2 x\\,dx = \\left[\\tan x\\right]_0^{\\pi/4} = 1 - 0 = 1",
          "explanation": "Direct evaluation using the standard result.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Link to part (a)",
          "workingLatex": "\\text{Different integral, related trig functions}",
          "explanation": "Part (b) does not require the substitution from (a), but uses the derivative relationship.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Note",
          "workingLatex": "\\text{Part (b) is independent of the 'hence'}",
          "explanation": "The 'hence' suggests using $\\tan$, but $\\sec^2$ integrates directly.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Final answers",
          "workingLatex": "(a)\\ \\dfrac{1}{2}\\ln 2, \\quad (b)\\ 1",
          "explanation": "Both parts answered.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Check part (b)",
          "workingLatex": "\\tan(\\pi/4) - \\tan(0) = 1",
          "explanation": "Confirmed.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Summary",
          "workingLatex": "\\text{Substitution for (a); standard derivative for (b)}",
          "explanation": "Different techniques for related integrals.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Exact values",
          "workingLatex": "(a)\\ \\dfrac{1}{2}\\ln 2, \\quad (b)\\ 1",
          "explanation": "Final exact answers.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\displaystyle\\int_0^{\\pi/4} \\tan x\\,dx = \\dfrac{1}{2}\\ln 2$. (b) $\\displaystyle\\int_0^{\\pi/4} \\sec^2 x\\,dx = 1$."
    }
  }
];
