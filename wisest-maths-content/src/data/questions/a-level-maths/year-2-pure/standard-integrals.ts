import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "questionDiagram": null,
    "id": "al.y2.pure.standard-integrals.q001",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": [
      "standard integrals",
      "exponential"
    ],
    "questionText": "Find $\\displaystyle\\int e^{x}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the integrand",
          "workingLatex": "\\int e^{x}\\,dx",
          "explanation": "We need an antiderivative of this exponential.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the standard result for $e^{kx}$",
          "workingLatex": "\\int e^{kx}\\,dx = \\dfrac{1}{k}e^{kx} + c",
          "explanation": "Differentiating $\\tfrac{1}{k}e^{kx}$ gives $e^{kx}$, so integration reverses this with a factor $\\tfrac{1}{k}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply for $k=1$",
          "workingLatex": "\\int e^{x}\\,dx = e^{x} + c",
          "explanation": "When $k=1$ the factor is $1$ and we recover the basic exponential integral.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the antiderivative",
          "workingLatex": "e^{x} + c",
          "explanation": "Add $+c$ because this is an indefinite integral.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check by differentiating",
          "workingLatex": "\\dfrac{d}{dx}\\left(e^{x}\\right) = e^{x}",
          "explanation": "Differentiating should recover the original integrand.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "\\int e^{x}\\,dx = e^{x} + c",
          "explanation": "This is the required indefinite integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int e^{x}\\,dx = e^{x} + c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "questionDiagram": null,
    "id": "al.y2.pure.standard-integrals.q002",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": [
      "standard integrals",
      "exponential"
    ],
    "questionText": "Find $\\displaystyle\\int e^{3x}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the integrand",
          "workingLatex": "\\int e^{3x}\\,dx",
          "explanation": "We need an antiderivative of this exponential.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the standard result for $e^{kx}$",
          "workingLatex": "\\int e^{kx}\\,dx = \\dfrac{1}{k}e^{kx} + c",
          "explanation": "Differentiating $\\tfrac{1}{k}e^{kx}$ gives $e^{kx}$, so integration reverses this with a factor $\\tfrac{1}{k}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute $k = 3$",
          "workingLatex": "\\int e^{3x}\\,dx = \\dfrac{1}{3}e^{3x} + c",
          "explanation": "Here the exponent is 3 times $x$, so divide by 3.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the antiderivative",
          "workingLatex": "\\dfrac{1}{3}e^{3x} + c",
          "explanation": "Add $+c$ because this is an indefinite integral.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check by differentiating",
          "workingLatex": "\\dfrac{d}{dx}\\left(\\dfrac{1}{3}e^{3x}\\right) = e^{3x}",
          "explanation": "Differentiating should recover the original integrand.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "\\int e^{3x}\\,dx = \\dfrac{1}{3}e^{3x} + c",
          "explanation": "This is the required indefinite integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int e^{3x}\\,dx = \\dfrac{1}{3}e^{3x} + c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "questionDiagram": null,
    "id": "al.y2.pure.standard-integrals.q003",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "standard integrals",
      "logarithm"
    ],
    "questionText": "Find $\\displaystyle\\int \\dfrac{1}{x}\\,dx$, stating any restriction on $x$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the form",
          "workingLatex": "\\int \\dfrac{1}{x}\\,dx",
          "explanation": "This is a reciprocal of a linear expression — a standard logarithmic integral.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the standard result",
          "workingLatex": "\\int \\dfrac{1}{x}\\,dx = \\ln|x| + c",
          "explanation": "Integration of $\\tfrac{1}{x}$ gives the natural logarithm (with modulus for generality).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply to this integrand",
          "workingLatex": "Recall $\\int \\tfrac{1}{x}\\,dx = \\ln|x| + c$ for $x \\neq 0$.",
          "explanation": "Recall $\\int \\tfrac{1}{x}\\,dx = \\ln|x| + c$ for $x \\neq 0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate",
          "workingLatex": "\\int \\dfrac{1}{x}\\,dx = \\ln|x| + c",
          "explanation": "\\int \\dfrac{1}{x}\\,dx = \\ln|x| + c",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Note the domain",
          "workingLatex": "valid for $x \\neq 0$",
          "explanation": "The logarithm requires a non-zero argument.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check",
          "workingLatex": "\\dfrac{d}{dx}\\left(\\ln|x|\\right) \\propto \\dfrac{1}{x}",
          "explanation": "Differentiating confirms the antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int \\dfrac{1}{x}\\,dx = \\ln|x| + c",
          "explanation": "Include $+c$ for the indefinite integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\dfrac{1}{x}\\,dx = \\ln|x| + c$, valid for $x \\neq 0$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "questionDiagram": null,
    "id": "al.y2.pure.standard-integrals.q004",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": [
      "standard integrals",
      "exponential"
    ],
    "questionText": "Find $\\displaystyle\\int 5e^{x}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the integrand",
          "workingLatex": "\\int 5e^{x}\\,dx",
          "explanation": "We need an antiderivative of this exponential.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the standard result for $e^{kx}$",
          "workingLatex": "\\int e^{kx}\\,dx = \\dfrac{1}{k}e^{kx} + c",
          "explanation": "Differentiating $\\tfrac{1}{k}e^{kx}$ gives $e^{kx}$, so integration reverses this with a factor $\\tfrac{1}{k}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply for $k=1$",
          "workingLatex": "\\int e^{x}\\,dx = e^{x} + c",
          "explanation": "When $k=1$ the factor is $1$ and we recover the basic exponential integral.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Include the constant multiple",
          "workingLatex": "\\int 5e^{x}\\,dx = 5\\cdot\\dfrac{1}{1}e^{x} + c",
          "explanation": "A constant factor stays outside the integral.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the antiderivative",
          "workingLatex": "5e^{x} + c",
          "explanation": "Add $+c$ because this is an indefinite integral.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check by differentiating",
          "workingLatex": "\\dfrac{d}{dx}\\left(5e^{x}\\right) = 5e^{x}",
          "explanation": "Differentiating should recover the original integrand.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int 5e^{x}\\,dx = 5e^{x} + c",
          "explanation": "This is the required indefinite integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int 5e^{x}\\,dx = 5e^{x} + c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "questionDiagram": null,
    "id": "al.y2.pure.standard-integrals.q005",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": [
      "standard integrals",
      "sine"
    ],
    "questionText": "Find $\\displaystyle\\int \\sin x\\,dx$, where $x$ is in radians.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the integrand",
          "workingLatex": "\\int \\sin x\\,dx",
          "explanation": "Match this to a standard trigonometric integral (radians).",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the standard result",
          "workingLatex": "\\int \\sin x\\,dx = -\\cos x + c",
          "explanation": "This is one of the core results to memorise alongside derivatives of trig functions.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply directly",
          "workingLatex": "\\int \\sin x\\,dx = -\\cos x + c",
          "explanation": "Substitute into the standard formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add the constant of integration",
          "workingLatex": "-\\cos x + c",
          "explanation": "Every indefinite integral needs $+c$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the antiderivative",
          "workingLatex": "-\\cos x + c",
          "explanation": "Combine the standard result with any scaling.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify by differentiation",
          "workingLatex": "\\dfrac{d}{dx}(-\\cos x) = \\sin x",
          "explanation": "Differentiation should recover the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int \\sin x\\,dx = -\\cos x + c",
          "explanation": "Final answer in simplest form.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\sin x\\,dx = -\\cos x + c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "questionDiagram": null,
    "id": "al.y2.pure.standard-integrals.q006",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": [
      "standard integrals",
      "cosine"
    ],
    "questionText": "Find $\\displaystyle\\int \\cos x\\,dx$, where $x$ is in radians.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the integrand",
          "workingLatex": "\\int \\cos x\\,dx",
          "explanation": "Match this to a standard trigonometric integral (radians).",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the standard result",
          "workingLatex": "\\int \\cos x\\,dx = \\sin x + c",
          "explanation": "This is one of the core results to memorise alongside derivatives of trig functions.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply directly",
          "workingLatex": "\\int \\cos x\\,dx = \\sin x + c",
          "explanation": "Substitute into the standard formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add the constant of integration",
          "workingLatex": "\\sin x + c",
          "explanation": "Every indefinite integral needs $+c$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the antiderivative",
          "workingLatex": "\\sin x + c",
          "explanation": "Combine the standard result with any scaling.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify by differentiation",
          "workingLatex": "\\dfrac{d}{dx}(\\sin x) = \\cos x",
          "explanation": "Differentiation should recover the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int \\cos x\\,dx = \\sin x + c",
          "explanation": "Final answer in simplest form.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\cos x\\,dx = \\sin x + c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "questionDiagram": null,
    "id": "al.y2.pure.standard-integrals.q007",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": [
      "standard integrals",
      "secant"
    ],
    "questionText": "Find $\\displaystyle\\int \\sec^{2} x\\,dx$, where $x$ is in radians.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the integrand",
          "workingLatex": "\\int \\sec^{2} x\\,dx",
          "explanation": "Match this to a standard trigonometric integral (radians).",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the standard result",
          "workingLatex": "\\int \\sec^{2} x\\,dx = \\tan x + c",
          "explanation": "This is one of the core results to memorise alongside derivatives of trig functions.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply directly",
          "workingLatex": "\\int \\sec^{2} x\\,dx = \\tan x + c",
          "explanation": "Substitute into the standard formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add the constant of integration",
          "workingLatex": "\\tan x + c",
          "explanation": "Every indefinite integral needs $+c$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the antiderivative",
          "workingLatex": "\\tan x + c",
          "explanation": "Combine the standard result with any scaling.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify by differentiation",
          "workingLatex": "\\dfrac{d}{dx}(\\tan x) = \\sec^{2} x",
          "explanation": "Differentiation should recover the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int \\sec^{2} x\\,dx = \\tan x + c",
          "explanation": "Final answer in simplest form.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\sec^{2} x\\,dx = \\tan x + c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "questionDiagram": null,
    "id": "al.y2.pure.standard-integrals.q008",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": [
      "standard integrals",
      "exponential"
    ],
    "questionText": "Find $\\displaystyle\\int 6e^{2x}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the integrand",
          "workingLatex": "\\int 6e^{2x}\\,dx",
          "explanation": "We need an antiderivative of this exponential.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the standard result for $e^{kx}$",
          "workingLatex": "\\int e^{kx}\\,dx = \\dfrac{1}{k}e^{kx} + c",
          "explanation": "Differentiating $\\tfrac{1}{k}e^{kx}$ gives $e^{kx}$, so integration reverses this with a factor $\\tfrac{1}{k}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute $k = 2$",
          "workingLatex": "\\int e^{2x}\\,dx = \\dfrac{1}{2}e^{2x} + c",
          "explanation": "Here the exponent is 2 times $x$, so divide by 2.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Include the constant multiple",
          "workingLatex": "\\int 6e^{2x}\\,dx = 6\\cdot\\dfrac{1}{2}e^{2x} + c",
          "explanation": "A constant factor stays outside the integral.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the antiderivative",
          "workingLatex": "3e^{2x} + c",
          "explanation": "Add $+c$ because this is an indefinite integral.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check by differentiating",
          "workingLatex": "\\dfrac{d}{dx}\\left(3e^{2x}\\right) = 6e^{2x}",
          "explanation": "Differentiating should recover the original integrand.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int 6e^{2x}\\,dx = 3e^{2x} + c",
          "explanation": "This is the required indefinite integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int 6e^{2x}\\,dx = 3e^{2x} + c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "questionDiagram": null,
    "id": "al.y2.pure.standard-integrals.q009",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "standard integrals",
      "logarithm"
    ],
    "questionText": "Find $\\displaystyle\\int \\dfrac{3}{x}\\,dx$, stating any restriction on $x$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the form",
          "workingLatex": "\\int \\dfrac{3}{x}\\,dx",
          "explanation": "This is a reciprocal of a linear expression — a standard logarithmic integral.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the standard result",
          "workingLatex": "\\int \\dfrac{1}{x}\\,dx = \\ln|x| + c",
          "explanation": "Integration of $\\tfrac{1}{x}$ gives the natural logarithm (with modulus for generality).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply to this integrand",
          "workingLatex": "Factor the constant: $\\int \\tfrac{3}{x}\\,dx = 3\\int \\tfrac{1}{x}\\,dx$.",
          "explanation": "Factor the constant: $\\int \\tfrac{3}{x}\\,dx = 3\\int \\tfrac{1}{x}\\,dx$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate",
          "workingLatex": "Use $\\int \\tfrac{1}{x}\\,dx = \\ln|x| + c$.",
          "explanation": "Use $\\int \\tfrac{1}{x}\\,dx = \\ln|x| + c$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Note the domain",
          "workingLatex": "$x \\neq 0$",
          "explanation": "The logarithm requires a non-zero argument.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check",
          "workingLatex": "\\dfrac{d}{dx}\\left(3\\ln|x|\\right) \\propto \\dfrac{3}{x}",
          "explanation": "Differentiating confirms the antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int \\dfrac{3}{x}\\,dx = 3\\ln|x| + c",
          "explanation": "Include $+c$ for the indefinite integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\dfrac{3}{x}\\,dx = 3\\ln|x| + c$, $x \\neq 0$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "questionDiagram": null,
    "id": "al.y2.pure.standard-integrals.q010",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": [
      "standard integrals",
      "sine"
    ],
    "questionText": "Find $\\displaystyle\\int \\sin 2x\\,dx$, where $x$ is in radians.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the integrand",
          "workingLatex": "\\int \\sin 2x\\,dx",
          "explanation": "Match this to a standard trigonometric integral (radians).",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the standard result",
          "workingLatex": "\\int \\sin x\\,dx = -\\cos x + c",
          "explanation": "This is one of the core results to memorise alongside derivatives of trig functions.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Adjust for the inner linear argument",
          "workingLatex": "\\text{If the angle is } 2x\\text{, divide by the coefficient of }x",
          "explanation": "For $\\int \\sin(kx)\\,dx$ we get $-\\tfrac{1}{k}\\cos(kx)+c$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add the constant of integration",
          "workingLatex": "-\\dfrac{1}{2}\\cos 2x + c",
          "explanation": "Every indefinite integral needs $+c$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the antiderivative",
          "workingLatex": "-\\dfrac{1}{2}\\cos 2x + c",
          "explanation": "Combine the standard result with any scaling.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify by differentiation",
          "workingLatex": "\\dfrac{d}{dx}(-\\dfrac{1}{2}\\cos 2x) = \\sin 2x",
          "explanation": "Differentiation should recover the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int \\sin 2x\\,dx = -\\dfrac{1}{2}\\cos 2x + c",
          "explanation": "Final answer in simplest form.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\sin 2x\\,dx = -\\dfrac{1}{2}\\cos 2x + c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "questionDiagram": null,
    "id": "al.y2.pure.standard-integrals.q011",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": [
      "standard integrals",
      "cosine"
    ],
    "questionText": "Find $\\displaystyle\\int \\cos 3x\\,dx$, where $x$ is in radians.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the integrand",
          "workingLatex": "\\int \\cos 3x\\,dx",
          "explanation": "Match this to a standard trigonometric integral (radians).",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the standard result",
          "workingLatex": "\\int \\cos x\\,dx = \\sin x + c",
          "explanation": "This is one of the core results to memorise alongside derivatives of trig functions.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Adjust for the inner linear argument",
          "workingLatex": "\\text{If the angle is } 3x\\text{, divide by the coefficient of }x",
          "explanation": "For $\\int \\sin(kx)\\,dx$ we get $-\\tfrac{1}{k}\\cos(kx)+c$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add the constant of integration",
          "workingLatex": "\\dfrac{1}{3}\\sin 3x + c",
          "explanation": "Every indefinite integral needs $+c$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the antiderivative",
          "workingLatex": "\\dfrac{1}{3}\\sin 3x + c",
          "explanation": "Combine the standard result with any scaling.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify by differentiation",
          "workingLatex": "\\dfrac{d}{dx}(\\dfrac{1}{3}\\sin 3x) = \\cos 3x",
          "explanation": "Differentiation should recover the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int \\cos 3x\\,dx = \\dfrac{1}{3}\\sin 3x + c",
          "explanation": "Final answer in simplest form.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\cos 3x\\,dx = \\dfrac{1}{3}\\sin 3x + c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "questionDiagram": null,
    "id": "al.y2.pure.standard-integrals.q012",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": [
      "standard integrals",
      "exponential"
    ],
    "questionText": "Find $\\displaystyle\\int e^{-1x}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the integrand",
          "workingLatex": "\\int e^{-1x}\\,dx",
          "explanation": "We need an antiderivative of this exponential.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the standard result for $e^{kx}$",
          "workingLatex": "\\int e^{kx}\\,dx = \\dfrac{1}{k}e^{kx} + c",
          "explanation": "Differentiating $\\tfrac{1}{k}e^{kx}$ gives $e^{kx}$, so integration reverses this with a factor $\\tfrac{1}{k}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute $k = -1$",
          "workingLatex": "\\int e^{-1x}\\,dx = \\dfrac{1}{-1}e^{-1x} + c",
          "explanation": "Here the exponent is -1 times $x$, so divide by -1.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the antiderivative",
          "workingLatex": "\\dfrac{1}{-1}e^{-1x} + c",
          "explanation": "Add $+c$ because this is an indefinite integral.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check by differentiating",
          "workingLatex": "\\dfrac{d}{dx}\\left(\\dfrac{1}{-1}e^{-1x}\\right) = e^{-1x}",
          "explanation": "Differentiating should recover the original integrand.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "\\int e^{-1x}\\,dx = \\dfrac{1}{-1}e^{-1x} + c",
          "explanation": "This is the required indefinite integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int e^{-1x}\\,dx = \\dfrac{1}{-1}e^{-1x} + c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "questionDiagram": null,
    "id": "al.y2.pure.standard-integrals.q013",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "standard integrals",
      "logarithm"
    ],
    "questionText": "Find $\\displaystyle\\int \\dfrac{1}{2x+1}\\,dx$, stating any restriction on $x$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the form",
          "workingLatex": "\\int \\dfrac{1}{2x+1}\\,dx",
          "explanation": "This is a reciprocal of a linear expression — a standard logarithmic integral.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the standard result",
          "workingLatex": "\\int \\dfrac{1}{x}\\,dx = \\ln|x| + c",
          "explanation": "Integration of $\\tfrac{1}{x}$ gives the natural logarithm (with modulus for generality).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply to this integrand",
          "workingLatex": "Match $\\int \\tfrac{1}{ax+b}\\,dx = \\tfrac{1}{a}\\ln|ax+b| + c$.",
          "explanation": "Match $\\int \\tfrac{1}{ax+b}\\,dx = \\tfrac{1}{a}\\ln|ax+b| + c$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate",
          "workingLatex": "Here $a=2$, $b=1$.",
          "explanation": "Here $a=2$, $b=1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Note the domain",
          "workingLatex": "$2x+1 \\neq 0$",
          "explanation": "The logarithm requires a non-zero argument.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check",
          "workingLatex": "\\dfrac{d}{dx}\\left(\\dfrac{1}{2}\\ln|2x+1|\\right) \\propto \\dfrac{1}{2x+1}",
          "explanation": "Differentiating confirms the antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int \\dfrac{1}{2x+1}\\,dx = \\dfrac{1}{2}\\ln|2x+1| + c",
          "explanation": "Include $+c$ for the indefinite integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\dfrac{1}{2x+1}\\,dx = \\dfrac{1}{2}\\ln|2x+1| + c$, $2x+1 \\neq 0$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "questionDiagram": null,
    "id": "al.y2.pure.standard-integrals.q014",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "standard integrals",
      "combination"
    ],
    "questionText": "Find $\\displaystyle\\int (e^{x} + x^{3})\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Split the integral",
          "workingLatex": "\\int (e^{x} + x^{3})\\,dx = \\int e^{x}\\,dx + \\int x^{3}\\,dx",
          "explanation": "Integration is linear: integrate each term separately.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate e^{x}",
          "workingLatex": "\\int e^{x}\\,dx = e^{x}",
          "explanation": "$\\int e^{x}\\,dx = e^{x}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate x^{3}",
          "workingLatex": "\\int x^{3}\\,dx = \\dfrac{x^{4}}{4}",
          "explanation": "Power rule for $x^{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Combine the antiderivatives",
          "workingLatex": "e^{x} + \\dfrac{x^{4}}{4} + c",
          "explanation": "Gather all terms and add a single constant $+c$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check",
          "workingLatex": "\\dfrac{d}{dx}(e^{x} + \\dfrac{x^{4}}{4}) = e^{x} + x^{3}",
          "explanation": "Differentiate to confirm.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "\\int (e^{x} + x^{3})\\,dx = e^{x} + \\dfrac{x^{4}}{4} + c",
          "explanation": "Final indefinite integral.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Name the integral type",
          "workingLatex": "\\text{Standard integral}",
          "explanation": "Classify the integrand: exponential, logarithmic, trigonometric, or a linear combination.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Quote the relevant standard result",
          "workingLatex": "\\text{From the formula sheet / memorised results}",
          "explanation": "A-Level integration here relies on recognising standard forms rather than substitution or parts.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Include the constant of integration",
          "workingLatex": "+c",
          "explanation": "Unless evaluating a definite integral, every antiderivative needs an arbitrary constant $+c$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int (e^{x} + x^{3})\\,dx = e^{x} + \\dfrac{x^{4}}{4} + c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "questionDiagram": null,
    "id": "al.y2.pure.standard-integrals.q015",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "standard integrals",
      "combination"
    ],
    "questionText": "Find $\\displaystyle\\int (\\sin x + \\cos x)\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Split the integral",
          "workingLatex": "\\int (\\sin x + \\cos x)\\,dx = \\int \\sin x\\,dx + \\int \\cos x\\,dx",
          "explanation": "Integration is linear: integrate each term separately.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate \\sin x",
          "workingLatex": "\\int \\sin x\\,dx = -\\cos x",
          "explanation": "Standard sine integral.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate \\cos x",
          "workingLatex": "\\int \\cos x\\,dx = \\sin x",
          "explanation": "Standard cosine integral.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Combine the antiderivatives",
          "workingLatex": "-\\cos x + \\sin x + c",
          "explanation": "Gather all terms and add a single constant $+c$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check",
          "workingLatex": "\\dfrac{d}{dx}(-\\cos x + \\sin x) = \\sin x + \\cos x",
          "explanation": "Differentiate to confirm.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "\\int (\\sin x + \\cos x)\\,dx = -\\cos x + \\sin x + c",
          "explanation": "Final indefinite integral.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Name the integral type",
          "workingLatex": "\\text{Standard integral}",
          "explanation": "Classify the integrand: exponential, logarithmic, trigonometric, or a linear combination.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Quote the relevant standard result",
          "workingLatex": "\\text{From the formula sheet / memorised results}",
          "explanation": "A-Level integration here relies on recognising standard forms rather than substitution or parts.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Include the constant of integration",
          "workingLatex": "+c",
          "explanation": "Unless evaluating a definite integral, every antiderivative needs an arbitrary constant $+c$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int (\\sin x + \\cos x)\\,dx = -\\cos x + \\sin x + c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "questionDiagram": null,
    "id": "al.y2.pure.standard-integrals.q016",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "standard integrals",
      "combination"
    ],
    "questionText": "Find $\\displaystyle\\int (2e^{x} - \\dfrac{3}{x})\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Split the integral",
          "workingLatex": "\\int (2e^{x} - \\dfrac{3}{x})\\,dx = \\int 2e^{x}\\,dx + \\int -\\dfrac{3}{x}\\,dx",
          "explanation": "Integration is linear: integrate each term separately.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate 2e^{x}",
          "workingLatex": "\\int 2e^{x}\\,dx = 2e^{x}",
          "explanation": "Constant multiple of $e^{x}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate -\\dfrac{3}{x}",
          "workingLatex": "\\int -\\dfrac{3}{x}\\,dx = -3\\ln|x|",
          "explanation": "Standard $1/x$ integral scaled by $-3$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Combine the antiderivatives",
          "workingLatex": "2e^{x} - 3\\ln|x| + c",
          "explanation": "Gather all terms and add a single constant $+c$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check",
          "workingLatex": "\\dfrac{d}{dx}(2e^{x} - 3\\ln|x|) = 2e^{x} - \\dfrac{3}{x}",
          "explanation": "Differentiate to confirm.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "\\int (2e^{x} - \\dfrac{3}{x})\\,dx = 2e^{x} - 3\\ln|x| + c",
          "explanation": "Final indefinite integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int (2e^{x} - \\dfrac{3}{x})\\,dx = 2e^{x} - 3\\ln|x| + c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "questionDiagram": null,
    "id": "al.y2.pure.standard-integrals.q017",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": [
      "standard integrals",
      "cosine"
    ],
    "questionText": "Find $\\displaystyle\\int -4\\cos x\\,dx$, where $x$ is in radians.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the integrand",
          "workingLatex": "\\int -4\\cos x\\,dx",
          "explanation": "Match this to a standard trigonometric integral (radians).",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the standard result",
          "workingLatex": "\\int \\cos x\\,dx = \\sin x + c",
          "explanation": "This is one of the core results to memorise alongside derivatives of trig functions.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply directly",
          "workingLatex": "\\int \\cos x\\,dx = \\sin x + c",
          "explanation": "Substitute into the standard formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Include the constant multiple",
          "workingLatex": "\\int -4\\,\\cdots\\,dx = -4\\times(\\cdots) + c",
          "explanation": "Constants factor out of the integral.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the antiderivative",
          "workingLatex": "-4\\sin x + c",
          "explanation": "Combine the standard result with any scaling.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify by differentiation",
          "workingLatex": "\\dfrac{d}{dx}(-4\\sin x) = -4\\cos x",
          "explanation": "Differentiation should recover the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int -4\\cos x\\,dx = -4\\sin x + c",
          "explanation": "Final answer in simplest form.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int -4\\cos x\\,dx = -4\\sin x + c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "questionDiagram": null,
    "id": "al.y2.pure.standard-integrals.q018",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": [
      "standard integrals",
      "sine"
    ],
    "questionText": "Find $\\displaystyle\\int \\sin x + \\dfrac{\\pi}{4}\\,dx$, where $x$ is in radians.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the integrand",
          "workingLatex": "\\int \\sin x + \\dfrac{\\pi}{4}\\,dx",
          "explanation": "Match this to a standard trigonometric integral (radians).",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the standard result",
          "workingLatex": "\\int \\sin x\\,dx = -\\cos x + c",
          "explanation": "This is one of the core results to memorise alongside derivatives of trig functions.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Adjust for the inner linear argument",
          "workingLatex": "\\text{If the angle is } x + \\dfrac{\\pi}{4}\\text{, divide by the coefficient of }x",
          "explanation": "For $\\int \\sin(kx)\\,dx$ we get $-\\tfrac{1}{k}\\cos(kx)+c$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add the constant of integration",
          "workingLatex": "-\\cos x + \\dfrac{\\pi}{4} + c",
          "explanation": "Every indefinite integral needs $+c$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the antiderivative",
          "workingLatex": "-\\cos x + \\dfrac{\\pi}{4} + c",
          "explanation": "Combine the standard result with any scaling.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify by differentiation",
          "workingLatex": "\\dfrac{d}{dx}(-\\cos x + \\dfrac{\\pi}{4}) = \\sin x + \\dfrac{\\pi}{4}",
          "explanation": "Differentiation should recover the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int \\sin x + \\dfrac{\\pi}{4}\\,dx = -\\cos x + \\dfrac{\\pi}{4} + c",
          "explanation": "Final answer in simplest form.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\sin x + \\dfrac{\\pi}{4}\\,dx = -\\cos x + \\dfrac{\\pi}{4} + c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "questionDiagram": null,
    "id": "al.y2.pure.standard-integrals.q019",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "standard integrals",
      "exponential",
      "linear argument"
    ],
    "questionText": "Find $\\displaystyle\\int e^{3x+2}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the form",
          "workingLatex": "\\int e^{3x+2}\\,dx",
          "explanation": "The exponent is a linear expression $3x+2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the standard result",
          "workingLatex": "\\int e^{ax+b}\\,dx = \\dfrac{1}{a}e^{ax+b} + c",
          "explanation": "Treat the linear expression as a single block; divide by the coefficient of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply with a = 3",
          "workingLatex": "\\int e^{3x+2}\\,dx = \\dfrac{1}{3}e^{3x+2} + c",
          "explanation": "Here $a=3$ and $b=2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check",
          "workingLatex": "\\dfrac{d}{dx}\\left(\\tfrac{1}{3}e^{3x+2}\\right) = e^{3x+2}",
          "explanation": "Differentiation brings down a factor of $3$ which cancels the $\\tfrac{1}{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Answer",
          "workingLatex": "\\dfrac{1}{3}e^{3x+2} + c",
          "explanation": "Final antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Name the integral type",
          "workingLatex": "\\text{Standard integral}",
          "explanation": "Classify the integrand: exponential, logarithmic, trigonometric, or a linear combination.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Quote the relevant standard result",
          "workingLatex": "\\text{From the formula sheet / memorised results}",
          "explanation": "A-Level integration here relies on recognising standard forms rather than substitution or parts.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Include the constant of integration",
          "workingLatex": "+c",
          "explanation": "Unless evaluating a definite integral, every antiderivative needs an arbitrary constant $+c$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check by differentiating",
          "workingLatex": "\\dfrac{d}{dx}(\\text{answer}) = \\text{integrand}",
          "explanation": "Differentiation reverses integration — a quick check catches sign or scaling errors.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int e^{3x+2}\\,dx = \\dfrac{1}{3}e^{3x+2} + c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "questionDiagram": null,
    "id": "al.y2.pure.standard-integrals.q020",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "standard integrals",
      "logarithm"
    ],
    "questionText": "Find $\\displaystyle\\int \\dfrac{1}{5-2x}\\,dx$, stating any restriction on $x$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the form",
          "workingLatex": "\\int \\dfrac{1}{5-2x}\\,dx",
          "explanation": "This is a reciprocal of a linear expression — a standard logarithmic integral.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the standard result",
          "workingLatex": "\\int \\dfrac{1}{x}\\,dx = \\ln|x| + c",
          "explanation": "Integration of $\\tfrac{1}{x}$ gives the natural logarithm (with modulus for generality).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply to this integrand",
          "workingLatex": "Rewrite as $\\int \\tfrac{1}{5-2x}\\,dx$ with linear denominator.",
          "explanation": "Rewrite as $\\int \\tfrac{1}{5-2x}\\,dx$ with linear denominator.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate",
          "workingLatex": "Use $\\int \\tfrac{1}{ax+b}\\,dx = \\tfrac{1}{a}\\ln|ax+b| + c$ with $a=-2$.",
          "explanation": "Use $\\int \\tfrac{1}{ax+b}\\,dx = \\tfrac{1}{a}\\ln|ax+b| + c$ with $a=-2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Note the domain",
          "workingLatex": "$5-2x \\neq 0$",
          "explanation": "The logarithm requires a non-zero argument.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check",
          "workingLatex": "\\dfrac{d}{dx}\\left(-\\dfrac{1}{2}\\ln|5-2x|\\right) \\propto \\dfrac{1}{5-2x}",
          "explanation": "Differentiating confirms the antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int \\dfrac{1}{5-2x}\\,dx = -\\dfrac{1}{2}\\ln|5-2x| + c",
          "explanation": "Include $+c$ for the indefinite integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\dfrac{1}{5-2x}\\,dx = -\\dfrac{1}{2}\\ln|5-2x| + c$, $5-2x \\neq 0$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "questionDiagram": null,
    "id": "al.y2.pure.standard-integrals.q021",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "standard integrals",
      "cosine"
    ],
    "questionText": "Find $\\displaystyle\\int \\cos 2x - 1\\,dx$, where $x$ is in radians.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the integrand",
          "workingLatex": "\\int \\cos 2x - 1\\,dx",
          "explanation": "Match this to a standard trigonometric integral (radians).",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the standard result",
          "workingLatex": "\\int \\cos x\\,dx = \\sin x + c",
          "explanation": "This is one of the core results to memorise alongside derivatives of trig functions.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Adjust for the inner linear argument",
          "workingLatex": "\\text{If the angle is } 2x - 1\\text{, divide by the coefficient of }x",
          "explanation": "For $\\int \\sin(kx)\\,dx$ we get $-\\tfrac{1}{k}\\cos(kx)+c$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add the constant of integration",
          "workingLatex": "\\dfrac{1}{2}\\sin 2x - 1 + c",
          "explanation": "Every indefinite integral needs $+c$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the antiderivative",
          "workingLatex": "\\dfrac{1}{2}\\sin 2x - 1 + c",
          "explanation": "Combine the standard result with any scaling.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify by differentiation",
          "workingLatex": "\\dfrac{d}{dx}(\\dfrac{1}{2}\\sin 2x - 1) = \\cos 2x - 1",
          "explanation": "Differentiation should recover the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int \\cos 2x - 1\\,dx = \\dfrac{1}{2}\\sin 2x - 1 + c",
          "explanation": "Final answer in simplest form.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Name the integral type",
          "workingLatex": "\\text{Standard integral}",
          "explanation": "Classify the integrand: exponential, logarithmic, trigonometric, or a linear combination.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Quote the relevant standard result",
          "workingLatex": "\\text{From the formula sheet / memorised results}",
          "explanation": "A-Level integration here relies on recognising standard forms rather than substitution or parts.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\cos 2x - 1\\,dx = \\dfrac{1}{2}\\sin 2x - 1 + c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "questionDiagram": null,
    "id": "al.y2.pure.standard-integrals.q022",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": [
      "standard integrals",
      "exponential"
    ],
    "questionText": "Find $\\displaystyle\\int 8e^{4x}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the integrand",
          "workingLatex": "\\int 8e^{4x}\\,dx",
          "explanation": "We need an antiderivative of this exponential.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the standard result for $e^{kx}$",
          "workingLatex": "\\int e^{kx}\\,dx = \\dfrac{1}{k}e^{kx} + c",
          "explanation": "Differentiating $\\tfrac{1}{k}e^{kx}$ gives $e^{kx}$, so integration reverses this with a factor $\\tfrac{1}{k}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute $k = 4$",
          "workingLatex": "\\int e^{4x}\\,dx = \\dfrac{1}{4}e^{4x} + c",
          "explanation": "Here the exponent is 4 times $x$, so divide by 4.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Include the constant multiple",
          "workingLatex": "\\int 8e^{4x}\\,dx = 8\\cdot\\dfrac{1}{4}e^{4x} + c",
          "explanation": "A constant factor stays outside the integral.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the antiderivative",
          "workingLatex": "2e^{4x} + c",
          "explanation": "Add $+c$ because this is an indefinite integral.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check by differentiating",
          "workingLatex": "\\dfrac{d}{dx}\\left(2e^{4x}\\right) = 8e^{4x}",
          "explanation": "Differentiating should recover the original integrand.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int 8e^{4x}\\,dx = 2e^{4x} + c",
          "explanation": "This is the required indefinite integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int 8e^{4x}\\,dx = 2e^{4x} + c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "questionDiagram": null,
    "id": "al.y2.pure.standard-integrals.q023",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": [
      "standard integrals",
      "reciprocal"
    ],
    "questionText": "Find $\\displaystyle\\int \\dfrac{1}{3x}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rewrite",
          "workingLatex": "\\int \\dfrac{1}{3x}\\,dx = \\dfrac{1}{3}\\int \\dfrac{1}{x}\\,dx",
          "explanation": "Factor out the constant.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Standard result",
          "workingLatex": "\\dfrac{1}{3}\\ln|x| + c",
          "explanation": "Use $\\int \\tfrac{1}{x}\\,dx = \\ln|x| + c$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Alternative form",
          "workingLatex": "\\dfrac{1}{3}\\ln|3x| + c",
          "explanation": "Equally valid since $\\tfrac{1}{3}\\ln|3x| = \\tfrac{1}{3}\\ln|x| + \\text{const}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Domain",
          "workingLatex": "x \\neq 0",
          "explanation": "The integrand is undefined at $x=0$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check",
          "workingLatex": "\\dfrac{d}{dx}\\left(\\tfrac{1}{3}\\ln|x|\\right) = \\tfrac{1}{3x}",
          "explanation": "Differentiation confirms.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\int \\dfrac{1}{3x}\\,dx = \\dfrac{1}{3}\\ln|x| + c",
          "explanation": "Final answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\dfrac{1}{3x}\\,dx = \\dfrac{1}{3}\\ln|x| + c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "questionDiagram": null,
    "id": "al.y2.pure.standard-integrals.q024",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": [
      "standard integrals",
      "sine"
    ],
    "questionText": "Find $\\displaystyle\\int -1\\sin 5x\\,dx$, where $x$ is in radians.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the integrand",
          "workingLatex": "\\int -1\\sin 5x\\,dx",
          "explanation": "Match this to a standard trigonometric integral (radians).",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the standard result",
          "workingLatex": "\\int \\sin x\\,dx = -\\cos x + c",
          "explanation": "This is one of the core results to memorise alongside derivatives of trig functions.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Adjust for the inner linear argument",
          "workingLatex": "\\text{If the angle is } 5x\\text{, divide by the coefficient of }x",
          "explanation": "For $\\int \\sin(kx)\\,dx$ we get $-\\tfrac{1}{k}\\cos(kx)+c$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Include the constant multiple",
          "workingLatex": "\\int -1\\,\\cdots\\,dx = -1\\times(\\cdots) + c",
          "explanation": "Constants factor out of the integral.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the antiderivative",
          "workingLatex": "--\\dfrac{1}{5}\\cos 5x + c",
          "explanation": "Combine the standard result with any scaling.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify by differentiation",
          "workingLatex": "\\dfrac{d}{dx}(--\\dfrac{1}{5}\\cos 5x) = -1\\sin 5x",
          "explanation": "Differentiation should recover the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int -1\\sin 5x\\,dx = --\\dfrac{1}{5}\\cos 5x + c",
          "explanation": "Final answer in simplest form.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int -1\\sin 5x\\,dx = --\\dfrac{1}{5}\\cos 5x + c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "questionDiagram": null,
    "id": "al.y2.pure.standard-integrals.q025",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "standard integrals",
      "exponential",
      "a^x"
    ],
    "questionText": "Find $\\displaystyle\\int 2^{x}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the form",
          "workingLatex": "\\int 2^{x}\\,dx",
          "explanation": "This is an exponential with base $2$, not $e$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the standard result",
          "workingLatex": "\\int a^{x}\\,dx = \\dfrac{a^{x}}{\\ln a} + c",
          "explanation": "For base $a>0$, $a\\neq 1$, integration gives $a^{x}/\\ln a$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute a = 2",
          "workingLatex": "\\int 2^{x}\\,dx = \\dfrac{2^{x}}{\\ln 2} + c",
          "explanation": "Apply with $a=2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check",
          "workingLatex": "\\dfrac{d}{dx}\\left(\\dfrac{2^{x}}{\\ln 2}\\right) = 2^{x}",
          "explanation": "Since $\\tfrac{d}{dx}(2^{x}) = 2^{x}\\ln 2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Note",
          "workingLatex": "\\text{Valid for all real }x",
          "explanation": "$2^{x}$ is defined everywhere.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\int 2^{x}\\,dx = \\dfrac{2^{x}}{\\ln 2} + c",
          "explanation": "Standard result.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int 2^{x}\\,dx = \\dfrac{2^{x}}{\\ln 2} + c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "questionDiagram": null,
    "id": "al.y2.pure.standard-integrals.q026",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "standard integrals",
      "definite integral"
    ],
    "questionText": "Evaluate $\\displaystyle\\int_{0}^{1} e^{x}\\,dx$ exactly.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the indefinite integral",
          "workingLatex": "\\int e^{x}\\,dx",
          "explanation": "First find an antiderivative using standard results.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the antiderivative",
          "workingLatex": "F(x) = e^{x}",
          "explanation": "$\\int e^{x}\\,dx = e^{x}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the limits",
          "workingLatex": "\\left[ e^{x} \\right]_{0}^{1}",
          "explanation": "Evaluate the antiderivative at the upper and lower limits.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the upper limit",
          "workingLatex": "F(1) = e",
          "explanation": "At $x = 1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the lower limit",
          "workingLatex": "F(0) = 1",
          "explanation": "At $x = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Subtract",
          "workingLatex": "e - (1) = e - 1",
          "explanation": "Definite integral = value at top minus value at bottom.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Interpret",
          "workingLatex": "e - 1",
          "explanation": "This is the exact value of the integral.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the answer",
          "workingLatex": "\\int_{0}^{1} e^{x}\\,dx = e - 1",
          "explanation": "Exact form required.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Name the integral type",
          "workingLatex": "\\text{Standard integral}",
          "explanation": "Classify the integrand: exponential, logarithmic, trigonometric, or a linear combination.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{0}^{1} e^{x}\\,dx = e - 1$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "questionDiagram": null,
    "id": "al.y2.pure.standard-integrals.q027",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "standard integrals",
      "definite integral"
    ],
    "questionText": "Evaluate $\\displaystyle\\int_{1}^{e} \\dfrac{1}{x}\\,dx$ exactly.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the indefinite integral",
          "workingLatex": "\\int \\dfrac{1}{x}\\,dx",
          "explanation": "First find an antiderivative using standard results.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the antiderivative",
          "workingLatex": "F(x) = \\ln x",
          "explanation": "On $[1,e]$, $x>0$ so $\\ln|x| = \\ln x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the limits",
          "workingLatex": "\\left[ \\ln x \\right]_{1}^{e}",
          "explanation": "Evaluate the antiderivative at the upper and lower limits.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the upper limit",
          "workingLatex": "F(e) = \\ln e = 1",
          "explanation": "At $x = e$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the lower limit",
          "workingLatex": "F(1) = \\ln 1 = 0",
          "explanation": "At $x = 1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Subtract",
          "workingLatex": "\\ln e = 1 - (\\ln 1 = 0) = 1",
          "explanation": "Definite integral = value at top minus value at bottom.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Interpret",
          "workingLatex": "1",
          "explanation": "This is the exact value of the integral.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the answer",
          "workingLatex": "\\int_{1}^{e} \\dfrac{1}{x}\\,dx = 1",
          "explanation": "Exact form required.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Name the integral type",
          "workingLatex": "\\text{Standard integral}",
          "explanation": "Classify the integrand: exponential, logarithmic, trigonometric, or a linear combination.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{1}^{e} \\dfrac{1}{x}\\,dx = 1$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "questionDiagram": null,
    "id": "al.y2.pure.standard-integrals.q028",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "standard integrals",
      "definite integral"
    ],
    "questionText": "Evaluate $\\displaystyle\\int_{0}^{\\dfrac{\\pi}{2}} \\sin x\\,dx$ exactly.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the indefinite integral",
          "workingLatex": "\\int \\sin x\\,dx",
          "explanation": "First find an antiderivative using standard results.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the antiderivative",
          "workingLatex": "F(x) = -\\cos x",
          "explanation": "$\\int \\sin x\\,dx = -\\cos x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the limits",
          "workingLatex": "\\left[ -\\cos x \\right]_{0}^{\\dfrac{\\pi}{2}}",
          "explanation": "Evaluate the antiderivative at the upper and lower limits.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the upper limit",
          "workingLatex": "F(\\dfrac{\\pi}{2}) = -\\cos\\tfrac{\\pi}{2} = 0",
          "explanation": "At $x = \\dfrac{\\pi}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the lower limit",
          "workingLatex": "F(0) = -\\cos 0 = -1",
          "explanation": "At $x = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Subtract",
          "workingLatex": "-\\cos\\tfrac{\\pi}{2} = 0 - (-\\cos 0 = -1) = 1",
          "explanation": "Definite integral = value at top minus value at bottom.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Interpret",
          "workingLatex": "1",
          "explanation": "This is the exact value of the integral.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the answer",
          "workingLatex": "\\int_{0}^{\\dfrac{\\pi}{2}} \\sin x\\,dx = 1",
          "explanation": "Exact form required.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Name the integral type",
          "workingLatex": "\\text{Standard integral}",
          "explanation": "Classify the integrand: exponential, logarithmic, trigonometric, or a linear combination.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{0}^{\\dfrac{\\pi}{2}} \\sin x\\,dx = 1$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "questionDiagram": null,
    "id": "al.y2.pure.standard-integrals.q029",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "standard integrals",
      "definite integral"
    ],
    "questionText": "Evaluate $\\displaystyle\\int_{0}^{\\pi} \\cos x\\,dx$ exactly.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the indefinite integral",
          "workingLatex": "\\int \\cos x\\,dx",
          "explanation": "First find an antiderivative using standard results.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the antiderivative",
          "workingLatex": "F(x) = \\sin x",
          "explanation": "$\\int \\cos x\\,dx = \\sin x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the limits",
          "workingLatex": "\\left[ \\sin x \\right]_{0}^{\\pi}",
          "explanation": "Evaluate the antiderivative at the upper and lower limits.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the upper limit",
          "workingLatex": "F(\\pi) = \\sin\\pi = 0",
          "explanation": "At $x = \\pi$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the lower limit",
          "workingLatex": "F(0) = \\sin 0 = 0",
          "explanation": "At $x = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Subtract",
          "workingLatex": "\\sin\\pi = 0 - (\\sin 0 = 0) = 0",
          "explanation": "Definite integral = value at top minus value at bottom.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Interpret",
          "workingLatex": "0",
          "explanation": "This is the exact value of the integral.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the answer",
          "workingLatex": "\\int_{0}^{\\pi} \\cos x\\,dx = 0",
          "explanation": "Exact form required.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Name the integral type",
          "workingLatex": "\\text{Standard integral}",
          "explanation": "Classify the integrand: exponential, logarithmic, trigonometric, or a linear combination.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{0}^{\\pi} \\cos x\\,dx = 0$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "questionDiagram": null,
    "id": "al.y2.pure.standard-integrals.q030",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "standard integrals",
      "definite integral"
    ],
    "questionText": "Evaluate $\\displaystyle\\int_{0}^{1} e^{2x}\\,dx$ exactly.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the indefinite integral",
          "workingLatex": "\\int e^{2x}\\,dx",
          "explanation": "First find an antiderivative using standard results.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the antiderivative",
          "workingLatex": "F(x) = \\dfrac{1}{2}e^{2x}",
          "explanation": "$\\int e^{2x}\\,dx = \\tfrac{1}{2}e^{2x}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the limits",
          "workingLatex": "\\left[ \\dfrac{1}{2}e^{2x} \\right]_{0}^{1}",
          "explanation": "Evaluate the antiderivative at the upper and lower limits.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the upper limit",
          "workingLatex": "F(1) = \\dfrac{e^{2}}{2}",
          "explanation": "At $x = 1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the lower limit",
          "workingLatex": "F(0) = \\dfrac{1}{2}",
          "explanation": "At $x = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Subtract",
          "workingLatex": "\\dfrac{e^{2}}{2} - (\\dfrac{1}{2}) = \\dfrac{e^{2}-1}{2}",
          "explanation": "Definite integral = value at top minus value at bottom.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Interpret",
          "workingLatex": "\\dfrac{e^{2}-1}{2}",
          "explanation": "This is the exact value of the integral.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the answer",
          "workingLatex": "\\int_{0}^{1} e^{2x}\\,dx = \\dfrac{e^{2}-1}{2}",
          "explanation": "Exact form required.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Name the integral type",
          "workingLatex": "\\text{Standard integral}",
          "explanation": "Classify the integrand: exponential, logarithmic, trigonometric, or a linear combination.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{0}^{1} e^{2x}\\,dx = \\dfrac{e^{2}-1}{2}$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "questionDiagram": null,
    "id": "al.y2.pure.standard-integrals.q031",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "standard integrals",
      "constant of integration",
      "curve"
    ],
    "questionText": "A curve has gradient function $\\dfrac{dy}{dx} = e^{x}$ and passes through the point $(0,\\,2)$. Find the equation of the curve.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Integrate the gradient function",
          "workingLatex": "\\dfrac{dy}{dx} = e^{x}",
          "explanation": "Find $y$ by integrating the given derivative.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply standard integrals",
          "workingLatex": "y = e^{x} + c",
          "explanation": "Use the standard results term by term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use the given point",
          "workingLatex": "2 = e^{(0)} + c",
          "explanation": "Substitute $x = 0$ to find $c$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for c",
          "workingLatex": "c = 1",
          "explanation": "Rearrange for the constant of integration.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the equation",
          "workingLatex": "y = e^{x} + 1",
          "explanation": "Substitute $c$ back to get $y$ in terms of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify the point",
          "workingLatex": "\\text{At } x=0,\\; y=2",
          "explanation": "The curve passes through the given point.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check the gradient",
          "workingLatex": "\\dfrac{dy}{dx} = e^{x}",
          "explanation": "Differentiate your answer to confirm the gradient function.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the equation",
          "workingLatex": "y = e^{x} + 1",
          "explanation": "This is the equation of the curve.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Name the integral type",
          "workingLatex": "\\text{Standard integral}",
          "explanation": "Classify the integrand: exponential, logarithmic, trigonometric, or a linear combination.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = e^{x} + 1$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "questionDiagram": null,
    "id": "al.y2.pure.standard-integrals.q032",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "standard integrals",
      "constant of integration",
      "curve"
    ],
    "questionText": "A curve has gradient function $\\dfrac{dy}{dx} = \\dfrac{2}{x}$ and passes through the point $(1,\\,3)$. Find the equation of the curve.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Integrate the gradient function",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{2}{x}",
          "explanation": "Find $y$ by integrating the given derivative.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply standard integrals",
          "workingLatex": "y = 2\\ln|x| + c",
          "explanation": "Use the standard results term by term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use the given point",
          "workingLatex": "3 = 2\\ln|(1)| + c",
          "explanation": "Substitute $x = 1$ to find $c$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for c",
          "workingLatex": "c = 3",
          "explanation": "Rearrange for the constant of integration.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the equation",
          "workingLatex": "y = 2\\ln|x| + 3",
          "explanation": "Substitute $c$ back to get $y$ in terms of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify the point",
          "workingLatex": "\\text{At } x=1,\\; y=3",
          "explanation": "The curve passes through the given point.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check the gradient",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{2}{x}",
          "explanation": "Differentiate your answer to confirm the gradient function.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the equation",
          "workingLatex": "y = 2\\ln|x| + 3",
          "explanation": "This is the equation of the curve.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Name the integral type",
          "workingLatex": "\\text{Standard integral}",
          "explanation": "Classify the integrand: exponential, logarithmic, trigonometric, or a linear combination.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = 2\\ln|x| + 3$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "questionDiagram": null,
    "id": "al.y2.pure.standard-integrals.q033",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "standard integrals",
      "constant of integration",
      "curve"
    ],
    "questionText": "A curve has gradient function $\\dfrac{dy}{dx} = \\sin x$ and passes through the point $(0,\\,1)$. Find the equation of the curve.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Integrate the gradient function",
          "workingLatex": "\\dfrac{dy}{dx} = \\sin x",
          "explanation": "Find $y$ by integrating the given derivative.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply standard integrals",
          "workingLatex": "y = -\\cos x + c",
          "explanation": "Use the standard results term by term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use the given point",
          "workingLatex": "1 = -\\cos (0) + c",
          "explanation": "Substitute $x = 0$ to find $c$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for c",
          "workingLatex": "c = 2",
          "explanation": "Rearrange for the constant of integration.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the equation",
          "workingLatex": "y = -\\cos x + 2",
          "explanation": "Substitute $c$ back to get $y$ in terms of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify the point",
          "workingLatex": "\\text{At } x=0,\\; y=1",
          "explanation": "The curve passes through the given point.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check the gradient",
          "workingLatex": "\\dfrac{dy}{dx} = \\sin x",
          "explanation": "Differentiate your answer to confirm the gradient function.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the equation",
          "workingLatex": "y = -\\cos x + 2",
          "explanation": "This is the equation of the curve.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Name the integral type",
          "workingLatex": "\\text{Standard integral}",
          "explanation": "Classify the integrand: exponential, logarithmic, trigonometric, or a linear combination.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = -\\cos x + 2$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "questionDiagram": null,
    "id": "al.y2.pure.standard-integrals.q034",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "standard integrals",
      "constant of integration",
      "curve"
    ],
    "questionText": "A curve has gradient function $\\dfrac{dy}{dx} = \\cos x$ and passes through the point $(\\dfrac{\\pi}{2},\\,5)$. Find the equation of the curve.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Integrate the gradient function",
          "workingLatex": "\\dfrac{dy}{dx} = \\cos x",
          "explanation": "Find $y$ by integrating the given derivative.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply standard integrals",
          "workingLatex": "y = \\sin x + c",
          "explanation": "Use the standard results term by term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use the given point",
          "workingLatex": "5 = \\sin (\\dfrac{\\pi}{2}) + c",
          "explanation": "Substitute $x = \\dfrac{\\pi}{2}$ to find $c$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for c",
          "workingLatex": "c = 4",
          "explanation": "Rearrange for the constant of integration.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the equation",
          "workingLatex": "y = \\sin x + 4",
          "explanation": "Substitute $c$ back to get $y$ in terms of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify the point",
          "workingLatex": "\\text{At } x=\\dfrac{\\pi}{2},\\; y=5",
          "explanation": "The curve passes through the given point.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check the gradient",
          "workingLatex": "\\dfrac{dy}{dx} = \\cos x",
          "explanation": "Differentiate your answer to confirm the gradient function.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the equation",
          "workingLatex": "y = \\sin x + 4",
          "explanation": "This is the equation of the curve.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Name the integral type",
          "workingLatex": "\\text{Standard integral}",
          "explanation": "Classify the integrand: exponential, logarithmic, trigonometric, or a linear combination.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = \\sin x + 4$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "questionDiagram": null,
    "id": "al.y2.pure.standard-integrals.q035",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "standard integrals",
      "combination"
    ],
    "questionText": "Find $\\displaystyle\\int (e^{x} + \\sin x)\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Split the integral",
          "workingLatex": "\\int (e^{x} + \\sin x)\\,dx = \\int e^{x}\\,dx + \\int \\sin x\\,dx",
          "explanation": "Integration is linear: integrate each term separately.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate e^{x}",
          "workingLatex": "\\int e^{x}\\,dx = e^{x}",
          "explanation": "Exponential.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate \\sin x",
          "workingLatex": "\\int \\sin x\\,dx = -\\cos x",
          "explanation": "Sine integral.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Combine the antiderivatives",
          "workingLatex": "e^{x} - \\cos x + c",
          "explanation": "Gather all terms and add a single constant $+c$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check",
          "workingLatex": "\\dfrac{d}{dx}(e^{x} - \\cos x) = e^{x} + \\sin x",
          "explanation": "Differentiate to confirm.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "\\int (e^{x} + \\sin x)\\,dx = e^{x} - \\cos x + c",
          "explanation": "Final indefinite integral.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Name the integral type",
          "workingLatex": "\\text{Standard integral}",
          "explanation": "Classify the integrand: exponential, logarithmic, trigonometric, or a linear combination.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Quote the relevant standard result",
          "workingLatex": "\\text{From the formula sheet / memorised results}",
          "explanation": "A-Level integration here relies on recognising standard forms rather than substitution or parts.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Include the constant of integration",
          "workingLatex": "+c",
          "explanation": "Unless evaluating a definite integral, every antiderivative needs an arbitrary constant $+c$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int (e^{x} + \\sin x)\\,dx = e^{x} - \\cos x + c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "questionDiagram": null,
    "id": "al.y2.pure.standard-integrals.q036",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "standard integrals",
      "combination"
    ],
    "questionText": "Find $\\displaystyle\\int (\\dfrac{1}{x} + 2x)\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Split the integral",
          "workingLatex": "\\int (\\dfrac{1}{x} + 2x)\\,dx = \\int \\dfrac{1}{x}\\,dx + \\int 2x\\,dx",
          "explanation": "Integration is linear: integrate each term separately.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate \\dfrac{1}{x}",
          "workingLatex": "\\int \\dfrac{1}{x}\\,dx = \\ln|x|",
          "explanation": "Logarithmic standard result.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate 2x",
          "workingLatex": "\\int 2x\\,dx = x^{2}",
          "explanation": "Power rule.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Combine the antiderivatives",
          "workingLatex": "\\ln|x| + x^{2} + c",
          "explanation": "Gather all terms and add a single constant $+c$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check",
          "workingLatex": "\\dfrac{d}{dx}(\\ln|x| + x^{2}) = \\dfrac{1}{x} + 2x",
          "explanation": "Differentiate to confirm.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "\\int (\\dfrac{1}{x} + 2x)\\,dx = \\ln|x| + x^{2} + c",
          "explanation": "Final indefinite integral.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Name the integral type",
          "workingLatex": "\\text{Standard integral}",
          "explanation": "Classify the integrand: exponential, logarithmic, trigonometric, or a linear combination.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Quote the relevant standard result",
          "workingLatex": "\\text{From the formula sheet / memorised results}",
          "explanation": "A-Level integration here relies on recognising standard forms rather than substitution or parts.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Include the constant of integration",
          "workingLatex": "+c",
          "explanation": "Unless evaluating a definite integral, every antiderivative needs an arbitrary constant $+c$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int (\\dfrac{1}{x} + 2x)\\,dx = \\ln|x| + x^{2} + c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "questionDiagram": null,
    "id": "al.y2.pure.standard-integrals.q037",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "standard integrals",
      "combination"
    ],
    "questionText": "Find $\\displaystyle\\int (4e^{2x} - 3\\cos x)\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Split the integral",
          "workingLatex": "\\int (4e^{2x} - 3\\cos x)\\,dx = \\int 4e^{2x}\\,dx + \\int -3\\cos x\\,dx",
          "explanation": "Integration is linear: integrate each term separately.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate 4e^{2x}",
          "workingLatex": "\\int 4e^{2x}\\,dx = 2e^{2x}",
          "explanation": "$4\\times\\tfrac{1}{2}e^{2x}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate -3\\cos x",
          "workingLatex": "\\int -3\\cos x\\,dx = -3\\sin x",
          "explanation": "Scaled cosine integral.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Combine the antiderivatives",
          "workingLatex": "2e^{2x} - 3\\sin x + c",
          "explanation": "Gather all terms and add a single constant $+c$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check",
          "workingLatex": "\\dfrac{d}{dx}(2e^{2x} - 3\\sin x) = 4e^{2x} - 3\\cos x",
          "explanation": "Differentiate to confirm.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "\\int (4e^{2x} - 3\\cos x)\\,dx = 2e^{2x} - 3\\sin x + c",
          "explanation": "Final indefinite integral.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Name the integral type",
          "workingLatex": "\\text{Standard integral}",
          "explanation": "Classify the integrand: exponential, logarithmic, trigonometric, or a linear combination.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Quote the relevant standard result",
          "workingLatex": "\\text{From the formula sheet / memorised results}",
          "explanation": "A-Level integration here relies on recognising standard forms rather than substitution or parts.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Include the constant of integration",
          "workingLatex": "+c",
          "explanation": "Unless evaluating a definite integral, every antiderivative needs an arbitrary constant $+c$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int (4e^{2x} - 3\\cos x)\\,dx = 2e^{2x} - 3\\sin x + c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "questionDiagram": null,
    "id": "al.y2.pure.standard-integrals.q038",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "standard integrals",
      "logarithm",
      "linear"
    ],
    "questionText": "Find $\\displaystyle\\int \\dfrac{3}{2x+5}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify",
          "workingLatex": "\\int \\dfrac{3}{2x+5}\\,dx",
          "explanation": "Linear denominator with constant numerator.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Factor",
          "workingLatex": "3\\int \\dfrac{1}{2x+5}\\,dx",
          "explanation": "Constants factor out.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Standard form",
          "workingLatex": "\\int \\dfrac{1}{ax+b}\\,dx = \\dfrac{1}{a}\\ln|ax+b| + c",
          "explanation": "With $a=2$, $b=5$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply",
          "workingLatex": "\\dfrac{3}{2}\\ln|2x+5| + c",
          "explanation": "Multiply the $\\tfrac{1}{2}$ by $3$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Domain",
          "workingLatex": "2x+5 \\neq 0",
          "explanation": "Denominator must be non-zero.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check",
          "workingLatex": "\\dfrac{d}{dx}\\left(\\tfrac{3}{2}\\ln|2x+5|\\right) = \\dfrac{3}{2x+5}",
          "explanation": "Confirms integrand.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "\\int \\dfrac{3}{2x+5}\\,dx = \\dfrac{3}{2}\\ln|2x+5| + c",
          "explanation": "Final.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Name the integral type",
          "workingLatex": "\\text{Standard integral}",
          "explanation": "Classify the integrand: exponential, logarithmic, trigonometric, or a linear combination.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Quote the relevant standard result",
          "workingLatex": "\\text{From the formula sheet / memorised results}",
          "explanation": "A-Level integration here relies on recognising standard forms rather than substitution or parts.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\dfrac{3}{2x+5}\\,dx = \\dfrac{3}{2}\\ln|2x+5| + c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "questionDiagram": null,
    "id": "al.y2.pure.standard-integrals.q039",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "standard integrals",
      "sine"
    ],
    "questionText": "Find $\\displaystyle\\int -2\\sin 3x\\,dx$, where $x$ is in radians.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the integrand",
          "workingLatex": "\\int -2\\sin 3x\\,dx",
          "explanation": "Match this to a standard trigonometric integral (radians).",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the standard result",
          "workingLatex": "\\int \\sin x\\,dx = -\\cos x + c",
          "explanation": "This is one of the core results to memorise alongside derivatives of trig functions.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Adjust for the inner linear argument",
          "workingLatex": "\\text{If the angle is } 3x\\text{, divide by the coefficient of }x",
          "explanation": "For $\\int \\sin(kx)\\,dx$ we get $-\\tfrac{1}{k}\\cos(kx)+c$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Include the constant multiple",
          "workingLatex": "\\int -2\\,\\cdots\\,dx = -2\\times(\\cdots) + c",
          "explanation": "Constants factor out of the integral.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the antiderivative",
          "workingLatex": "-2-\\dfrac{1}{3}\\cos 3x + c",
          "explanation": "Combine the standard result with any scaling.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify by differentiation",
          "workingLatex": "\\dfrac{d}{dx}(-2-\\dfrac{1}{3}\\cos 3x) = -2\\sin 3x",
          "explanation": "Differentiation should recover the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int -2\\sin 3x\\,dx = -2-\\dfrac{1}{3}\\cos 3x + c",
          "explanation": "Final answer in simplest form.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Name the integral type",
          "workingLatex": "\\text{Standard integral}",
          "explanation": "Classify the integrand: exponential, logarithmic, trigonometric, or a linear combination.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Quote the relevant standard result",
          "workingLatex": "\\text{From the formula sheet / memorised results}",
          "explanation": "A-Level integration here relies on recognising standard forms rather than substitution or parts.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int -2\\sin 3x\\,dx = -2-\\dfrac{1}{3}\\cos 3x + c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "questionDiagram": null,
    "id": "al.y2.pure.standard-integrals.q040",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "standard integrals",
      "definite integral"
    ],
    "questionText": "Evaluate $\\displaystyle\\int_{0}^{\\ln 2} e^{x}\\,dx$ exactly.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the indefinite integral",
          "workingLatex": "\\int e^{x}\\,dx",
          "explanation": "First find an antiderivative using standard results.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the antiderivative",
          "workingLatex": "F(x) = e^{x}",
          "explanation": "Evaluate at $x = \\ln 2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the limits",
          "workingLatex": "\\left[ e^{x} \\right]_{0}^{\\ln 2}",
          "explanation": "Evaluate the antiderivative at the upper and lower limits.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the upper limit",
          "workingLatex": "F(\\ln 2) = e^{\\ln 2} = 2",
          "explanation": "At $x = \\ln 2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the lower limit",
          "workingLatex": "F(0) = 1",
          "explanation": "At $x = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Subtract",
          "workingLatex": "e^{\\ln 2} = 2 - (1) = 1",
          "explanation": "Definite integral = value at top minus value at bottom.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Interpret",
          "workingLatex": "1",
          "explanation": "This is the exact value of the integral.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the answer",
          "workingLatex": "\\int_{0}^{\\ln 2} e^{x}\\,dx = 1",
          "explanation": "Exact form required.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Name the integral type",
          "workingLatex": "\\text{Standard integral}",
          "explanation": "Classify the integrand: exponential, logarithmic, trigonometric, or a linear combination.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{0}^{\\ln 2} e^{x}\\,dx = 1$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "questionDiagram": null,
    "id": "al.y2.pure.standard-integrals.q041",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "standard integrals",
      "definite integral"
    ],
    "questionText": "Evaluate $\\displaystyle\\int_{\\dfrac{\\pi}{6}}^{\\dfrac{\\pi}{2}} \\cos x\\,dx$ exactly.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the indefinite integral",
          "workingLatex": "\\int \\cos x\\,dx",
          "explanation": "First find an antiderivative using standard results.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the antiderivative",
          "workingLatex": "F(x) = \\sin x",
          "explanation": "Standard cosine integral.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the limits",
          "workingLatex": "\\left[ \\sin x \\right]_{\\dfrac{\\pi}{6}}^{\\dfrac{\\pi}{2}}",
          "explanation": "Evaluate the antiderivative at the upper and lower limits.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the upper limit",
          "workingLatex": "F(\\dfrac{\\pi}{2}) = \\sin\\tfrac{\\pi}{2} = 1",
          "explanation": "At $x = \\dfrac{\\pi}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the lower limit",
          "workingLatex": "F(\\dfrac{\\pi}{6}) = \\sin\\tfrac{\\pi}{6} = \\tfrac{1}{2}",
          "explanation": "At $x = \\dfrac{\\pi}{6}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Subtract",
          "workingLatex": "\\sin\\tfrac{\\pi}{2} = 1 - (\\sin\\tfrac{\\pi}{6} = \\tfrac{1}{2}) = \\dfrac{1}{2}",
          "explanation": "Definite integral = value at top minus value at bottom.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Interpret",
          "workingLatex": "\\dfrac{1}{2}",
          "explanation": "This is the exact value of the integral.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the answer",
          "workingLatex": "\\int_{\\dfrac{\\pi}{6}}^{\\dfrac{\\pi}{2}} \\cos x\\,dx = \\dfrac{1}{2}",
          "explanation": "Exact form required.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Name the integral type",
          "workingLatex": "\\text{Standard integral}",
          "explanation": "Classify the integrand: exponential, logarithmic, trigonometric, or a linear combination.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{\\dfrac{\\pi}{6}}^{\\dfrac{\\pi}{2}} \\cos x\\,dx = \\dfrac{1}{2}$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "questionDiagram": null,
    "id": "al.y2.pure.standard-integrals.q042",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "standard integrals",
      "definite integral"
    ],
    "questionText": "Evaluate $\\displaystyle\\int_{1}^{2} \\dfrac{1}{x}\\,dx$ exactly.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the indefinite integral",
          "workingLatex": "\\int \\dfrac{1}{x}\\,dx",
          "explanation": "First find an antiderivative using standard results.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the antiderivative",
          "workingLatex": "F(x) = \\ln x",
          "explanation": "On $[1,2]$, $x>0$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the limits",
          "workingLatex": "\\left[ \\ln x \\right]_{1}^{2}",
          "explanation": "Evaluate the antiderivative at the upper and lower limits.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the upper limit",
          "workingLatex": "F(2) = \\ln 2",
          "explanation": "At $x = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the lower limit",
          "workingLatex": "F(1) = 0",
          "explanation": "At $x = 1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Subtract",
          "workingLatex": "\\ln 2 - (0) = \\ln 2",
          "explanation": "Definite integral = value at top minus value at bottom.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Interpret",
          "workingLatex": "\\ln 2",
          "explanation": "This is the exact value of the integral.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the answer",
          "workingLatex": "\\int_{1}^{2} \\dfrac{1}{x}\\,dx = \\ln 2",
          "explanation": "Exact form required.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Name the integral type",
          "workingLatex": "\\text{Standard integral}",
          "explanation": "Classify the integrand: exponential, logarithmic, trigonometric, or a linear combination.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{1}^{2} \\dfrac{1}{x}\\,dx = \\ln 2$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "questionDiagram": null,
    "id": "al.y2.pure.standard-integrals.q043",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "standard integrals",
      "definite integral"
    ],
    "questionText": "Evaluate $\\displaystyle\\int_{0}^{1} e^{x} + 1\\,dx$ exactly.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the indefinite integral",
          "workingLatex": "\\int e^{x} + 1\\,dx",
          "explanation": "First find an antiderivative using standard results.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the antiderivative",
          "workingLatex": "F(x) = e^{x} + x",
          "explanation": "Integrate term by term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the limits",
          "workingLatex": "\\left[ e^{x} + x \\right]_{0}^{1}",
          "explanation": "Evaluate the antiderivative at the upper and lower limits.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the upper limit",
          "workingLatex": "F(1) = e + 1",
          "explanation": "At $x = 1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the lower limit",
          "workingLatex": "F(0) = 1",
          "explanation": "At $x = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Subtract",
          "workingLatex": "e + 1 - (1) = e",
          "explanation": "Definite integral = value at top minus value at bottom.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Interpret",
          "workingLatex": "e",
          "explanation": "This is the exact value of the integral.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the answer",
          "workingLatex": "\\int_{0}^{1} e^{x} + 1\\,dx = e",
          "explanation": "Exact form required.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Name the integral type",
          "workingLatex": "\\text{Standard integral}",
          "explanation": "Classify the integrand: exponential, logarithmic, trigonometric, or a linear combination.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{0}^{1} e^{x} + 1\\,dx = e$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "questionDiagram": null,
    "id": "al.y2.pure.standard-integrals.q044",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "standard integrals",
      "area",
      "definite integral"
    ],
    "questionText": "The curve $y = e^{x}$ meets the $x$-axis at no point, but is bounded above $y=0$ on $[0, \\ln 3]$. Find the exact area of the region between the curve and the $x$-axis on this interval.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the area",
          "workingLatex": "A = \\int_{0}^{\\ln 3} e^{x}\\,dx",
          "explanation": "Area under a curve is the definite integral of $y$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate",
          "workingLatex": "\\int e^{x}\\,dx = e^{x}",
          "explanation": "Standard exponential integral.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply limits",
          "workingLatex": "\\left[e^{x}\\right]_{0}^{\\ln 3}",
          "explanation": "Evaluate at $x = \\ln 3$ and $x = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Upper value",
          "workingLatex": "e^{\\ln 3} = 3",
          "explanation": "Use the law $e^{\\ln a} = a$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Lower value",
          "workingLatex": "e^{0} = 1",
          "explanation": "At the origin end.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Subtract",
          "workingLatex": "A = 3 - 1 = 2",
          "explanation": "Top minus bottom.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Units",
          "workingLatex": "A = 2 \\text{ square units}",
          "explanation": "Area is positive since $e^{x}>0$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "A = 2",
          "explanation": "Exact area.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Name the integral type",
          "workingLatex": "\\text{Standard integral}",
          "explanation": "Classify the integrand: exponential, logarithmic, trigonometric, or a linear combination.",
          "diagram": null
        }
      ],
      "finalAnswer": "The area is $2$ square units."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "questionDiagram": null,
    "id": "al.y2.pure.standard-integrals.q045",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "standard integrals",
      "combination"
    ],
    "questionText": "Find $\\displaystyle\\int (e^{x} - e^{-x})\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Split the integral",
          "workingLatex": "\\int (e^{x} - e^{-x})\\,dx = \\int e^{x}\\,dx + \\int -e^{-x}\\,dx",
          "explanation": "Integration is linear: integrate each term separately.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate e^{x}",
          "workingLatex": "\\int e^{x}\\,dx = e^{x}",
          "explanation": "Exponential.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate -e^{-x}",
          "workingLatex": "\\int -e^{-x}\\,dx = e^{-x}",
          "explanation": "$\\int e^{-x}\\,dx = -e^{-x}$, so $-e^{-x}$ integrates to $e^{-x}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Combine the antiderivatives",
          "workingLatex": "e^{x} + e^{-x} + c",
          "explanation": "Gather all terms and add a single constant $+c$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check",
          "workingLatex": "\\dfrac{d}{dx}(e^{x} + e^{-x}) = e^{x} - e^{-x}",
          "explanation": "Differentiate to confirm.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "\\int (e^{x} - e^{-x})\\,dx = e^{x} + e^{-x} + c",
          "explanation": "Final indefinite integral.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Name the integral type",
          "workingLatex": "\\text{Standard integral}",
          "explanation": "Classify the integrand: exponential, logarithmic, trigonometric, or a linear combination.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Quote the relevant standard result",
          "workingLatex": "\\text{From the formula sheet / memorised results}",
          "explanation": "A-Level integration here relies on recognising standard forms rather than substitution or parts.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Include the constant of integration",
          "workingLatex": "+c",
          "explanation": "Unless evaluating a definite integral, every antiderivative needs an arbitrary constant $+c$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int (e^{x} - e^{-x})\\,dx = e^{x} + e^{-x} + c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "questionDiagram": null,
    "id": "al.y2.pure.standard-integrals.q046",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "standard integrals",
      "rewrite",
      "exponential"
    ],
    "questionText": "Find $\\displaystyle\\int \\dfrac{e^{2x}+1}{e^{x}}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Simplify the integrand",
          "workingLatex": "\\dfrac{e^{2x}+1}{e^{x}} = e^{x} + e^{-x}",
          "explanation": "Divide each term by $e^{x}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Split",
          "workingLatex": "\\int (e^{x} + e^{-x})\\,dx",
          "explanation": "Linearity of integration.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate e^x",
          "workingLatex": "e^{x}",
          "explanation": "Standard result.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate e^{-x}",
          "workingLatex": "-e^{-x}",
          "explanation": "$\\int e^{-x}\\,dx = -e^{-x}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Combine",
          "workingLatex": "e^{x} - e^{-x} + c",
          "explanation": "Gather terms.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check",
          "workingLatex": "\\dfrac{d}{dx}(e^{x}-e^{-x}) = e^{x}+e^{-x}",
          "explanation": "Matches simplified integrand.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "\\int \\dfrac{e^{2x}+1}{e^{x}}\\,dx = e^{x} - e^{-x} + c",
          "explanation": "Final.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Name the integral type",
          "workingLatex": "\\text{Standard integral}",
          "explanation": "Classify the integrand: exponential, logarithmic, trigonometric, or a linear combination.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Quote the relevant standard result",
          "workingLatex": "\\text{From the formula sheet / memorised results}",
          "explanation": "A-Level integration here relies on recognising standard forms rather than substitution or parts.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\dfrac{e^{2x}+1}{e^{x}}\\,dx = e^{x} - e^{-x} + c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "questionDiagram": null,
    "id": "al.y2.pure.standard-integrals.q047",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "standard integrals",
      "combination"
    ],
    "questionText": "Find $\\displaystyle\\int (5\\cos(2x) + 3e^{x})\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Split the integral",
          "workingLatex": "\\int (5\\cos(2x) + 3e^{x})\\,dx = \\int 5\\cos(2x)\\,dx + \\int 3e^{x}\\,dx",
          "explanation": "Integration is linear: integrate each term separately.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate 5\\cos(2x)",
          "workingLatex": "\\int 5\\cos(2x)\\,dx = \\dfrac{5}{2}\\sin(2x)",
          "explanation": "$5\\times\\tfrac{1}{2}\\sin(2x)$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate 3e^{x}",
          "workingLatex": "\\int 3e^{x}\\,dx = 3e^{x}",
          "explanation": "Scaled exponential.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Combine the antiderivatives",
          "workingLatex": "\\dfrac{5}{2}\\sin(2x) + 3e^{x} + c",
          "explanation": "Gather all terms and add a single constant $+c$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check",
          "workingLatex": "\\dfrac{d}{dx}(\\dfrac{5}{2}\\sin(2x) + 3e^{x}) = 5\\cos(2x) + 3e^{x}",
          "explanation": "Differentiate to confirm.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "\\int (5\\cos(2x) + 3e^{x})\\,dx = \\dfrac{5}{2}\\sin(2x) + 3e^{x} + c",
          "explanation": "Final indefinite integral.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Name the integral type",
          "workingLatex": "\\text{Standard integral}",
          "explanation": "Classify the integrand: exponential, logarithmic, trigonometric, or a linear combination.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Quote the relevant standard result",
          "workingLatex": "\\text{From the formula sheet / memorised results}",
          "explanation": "A-Level integration here relies on recognising standard forms rather than substitution or parts.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Include the constant of integration",
          "workingLatex": "+c",
          "explanation": "Unless evaluating a definite integral, every antiderivative needs an arbitrary constant $+c$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int (5\\cos(2x) + 3e^{x})\\,dx = \\dfrac{5}{2}\\sin(2x) + 3e^{x} + c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "questionDiagram": null,
    "id": "al.y2.pure.standard-integrals.q048",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "standard integrals",
      "constant of integration",
      "curve"
    ],
    "questionText": "A curve has gradient function $\\dfrac{dy}{dx} = e^{2x}$ and passes through the point $(0,\\,1)$. Find the equation of the curve.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Integrate the gradient function",
          "workingLatex": "\\dfrac{dy}{dx} = e^{2x}",
          "explanation": "Find $y$ by integrating the given derivative.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply standard integrals",
          "workingLatex": "y = \\dfrac{1}{2}e^{2x} + c",
          "explanation": "Use the standard results term by term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use the given point",
          "workingLatex": "1 = \\dfrac{1}{2}e^{2(0)} + c",
          "explanation": "Substitute $x = 0$ to find $c$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for c",
          "workingLatex": "c = \\dfrac{1}{2}",
          "explanation": "Rearrange for the constant of integration.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the equation",
          "workingLatex": "y = \\dfrac{1}{2}e^{2x} + \\dfrac{1}{2}",
          "explanation": "Substitute $c$ back to get $y$ in terms of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify the point",
          "workingLatex": "\\text{At } x=0,\\; y=1",
          "explanation": "The curve passes through the given point.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check the gradient",
          "workingLatex": "\\dfrac{dy}{dx} = e^{2x}",
          "explanation": "Differentiate your answer to confirm the gradient function.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the equation",
          "workingLatex": "y = \\dfrac{1}{2}e^{2x} + \\dfrac{1}{2}",
          "explanation": "This is the equation of the curve.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Name the integral type",
          "workingLatex": "\\text{Standard integral}",
          "explanation": "Classify the integrand: exponential, logarithmic, trigonometric, or a linear combination.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = \\dfrac{1}{2}e^{2x} + \\dfrac{1}{2}$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "questionDiagram": null,
    "id": "al.y2.pure.standard-integrals.q049",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "standard integrals",
      "definite integral"
    ],
    "questionText": "Evaluate $\\displaystyle\\int_{0}^{2} e^{-x}\\,dx$ exactly.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the indefinite integral",
          "workingLatex": "\\int e^{-x}\\,dx",
          "explanation": "First find an antiderivative using standard results.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the antiderivative",
          "workingLatex": "F(x) = -e^{-x}",
          "explanation": "$\\int e^{-x}\\,dx = -e^{-x}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the limits",
          "workingLatex": "\\left[ -e^{-x} \\right]_{0}^{2}",
          "explanation": "Evaluate the antiderivative at the upper and lower limits.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the upper limit",
          "workingLatex": "F(2) = -e^{-2}",
          "explanation": "At $x = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the lower limit",
          "workingLatex": "F(0) = -1",
          "explanation": "At $x = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Subtract",
          "workingLatex": "-e^{-2} - (-1) = 1 - e^{-2}",
          "explanation": "Definite integral = value at top minus value at bottom.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Interpret",
          "workingLatex": "1 - e^{-2}",
          "explanation": "This is the exact value of the integral.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the answer",
          "workingLatex": "\\int_{0}^{2} e^{-x}\\,dx = 1 - e^{-2}",
          "explanation": "Exact form required.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Name the integral type",
          "workingLatex": "\\text{Standard integral}",
          "explanation": "Classify the integrand: exponential, logarithmic, trigonometric, or a linear combination.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{0}^{2} e^{-x}\\,dx = 1 - e^{-2}$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "questionDiagram": null,
    "id": "al.y2.pure.standard-integrals.q050",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "standard integrals",
      "definite integral"
    ],
    "questionText": "Evaluate $\\displaystyle\\int_{0}^{\\pi} \\sin x\\,dx$ exactly.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the indefinite integral",
          "workingLatex": "\\int \\sin x\\,dx",
          "explanation": "First find an antiderivative using standard results.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the antiderivative",
          "workingLatex": "F(x) = -\\cos x",
          "explanation": "Area under one arch of $\\sin x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the limits",
          "workingLatex": "\\left[ -\\cos x \\right]_{0}^{\\pi}",
          "explanation": "Evaluate the antiderivative at the upper and lower limits.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the upper limit",
          "workingLatex": "F(\\pi) = -\\cos\\pi = 1",
          "explanation": "At $x = \\pi$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the lower limit",
          "workingLatex": "F(0) = -\\cos 0 = -1",
          "explanation": "At $x = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Subtract",
          "workingLatex": "-\\cos\\pi = 1 - (-\\cos 0 = -1) = 2",
          "explanation": "Definite integral = value at top minus value at bottom.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Interpret",
          "workingLatex": "2",
          "explanation": "This is the exact value of the integral.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the answer",
          "workingLatex": "\\int_{0}^{\\pi} \\sin x\\,dx = 2",
          "explanation": "Exact form required.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Name the integral type",
          "workingLatex": "\\text{Standard integral}",
          "explanation": "Classify the integrand: exponential, logarithmic, trigonometric, or a linear combination.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{0}^{\\pi} \\sin x\\,dx = 2$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "questionDiagram": null,
    "id": "al.y2.pure.standard-integrals.q051",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "exact",
    "tags": [
      "standard integrals",
      "exponential",
      "definite integral",
      "multi-part"
    ],
    "questionText": "Find $\\displaystyle\\int e^{2x}\\,dx$ and hence evaluate $\\displaystyle\\int_{0}^{\\ln 2} e^{2x}\\,dx$ exactly.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Part (a): identify",
          "workingLatex": "\\int e^{2x}\\,dx",
          "explanation": "Standard exponential with $k=2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate",
          "workingLatex": "\\dfrac{1}{2}e^{2x} + c",
          "explanation": "$\\int e^{kx}\\,dx = \\tfrac{1}{k}e^{kx}+c$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Part (b): set up",
          "workingLatex": "\\left[\\dfrac{1}{2}e^{2x}\\right]_{0}^{\\ln 2}",
          "explanation": "Use the antiderivative from (a).",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Upper limit",
          "workingLatex": "\\dfrac{1}{2}e^{2\\ln 2} = \\dfrac{1}{2}(2^{2}) = 2",
          "explanation": "Since $e^{2\\ln 2} = (e^{\\ln 2})^{2} = 4$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Lower limit",
          "workingLatex": "\\dfrac{1}{2}e^{0} = \\dfrac{1}{2}",
          "explanation": "At $x=0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Subtract",
          "workingLatex": "2 - \\dfrac{1}{2} = \\dfrac{3}{2}",
          "explanation": "Definite integral value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify",
          "workingLatex": "\\dfrac{d}{dx}\\left(\\tfrac{1}{2}e^{2x}\\right) = e^{2x}",
          "explanation": "Checks part (a).",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "\\int e^{2x}\\,dx = \\tfrac{1}{2}e^{2x}+c;\\; \\int_{0}^{\\ln 2} e^{2x}\\,dx = \\tfrac{3}{2}",
          "explanation": "Both parts.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Name the integral type",
          "workingLatex": "\\text{Standard integral}",
          "explanation": "Classify the integrand: exponential, logarithmic, trigonometric, or a linear combination.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Quote the relevant standard result",
          "workingLatex": "\\text{From the formula sheet / memorised results}",
          "explanation": "A-Level integration here relies on recognising standard forms rather than substitution or parts.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Include the constant of integration",
          "workingLatex": "+c",
          "explanation": "Unless evaluating a definite integral, every antiderivative needs an arbitrary constant $+c$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Check by differentiating",
          "workingLatex": "\\dfrac{d}{dx}(\\text{answer}) = \\text{integrand}",
          "explanation": "Differentiation reverses integration — a quick check catches sign or scaling errors.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State any domain restriction",
          "workingLatex": "\\text{Where the integrand is defined}",
          "explanation": "Logarithmic forms need a non-zero argument; trig results assume radians unless stated.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\displaystyle\\int e^{2x}\\,dx = \\dfrac{1}{2}e^{2x} + c$. (b) $\\displaystyle\\int_{0}^{\\ln 2} e^{2x}\\,dx = \\dfrac{3}{2}$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "questionDiagram": null,
    "id": "al.y2.pure.standard-integrals.q052",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "exact",
    "tags": [
      "standard integrals",
      "trigonometric",
      "multi-part"
    ],
    "questionText": "Evaluate $\\displaystyle\\int_{0}^{\\pi/2} (\\sin x + \\cos x)\\,dx$ exactly.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Split",
          "workingLatex": "\\int_{0}^{\\pi/2}\\sin x\\,dx + \\int_{0}^{\\pi/2}\\cos x\\,dx",
          "explanation": "Linearity.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate sine",
          "workingLatex": "\\left[-\\cos x\\right]_{0}^{\\pi/2}",
          "explanation": "Standard result.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Sine part",
          "workingLatex": "(-\\cos\\tfrac{\\pi}{2})-(-\\cos 0) = 0-(-1) = 1",
          "explanation": "Evaluate.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate cosine",
          "workingLatex": "\\left[\\sin x\\right]_{0}^{\\pi/2}",
          "explanation": "Standard result.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Cosine part",
          "workingLatex": "\\sin\\tfrac{\\pi}{2}-\\sin 0 = 1-0 = 1",
          "explanation": "Evaluate.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Add",
          "workingLatex": "1+1 = 2",
          "explanation": "Total integral.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Interpret",
          "workingLatex": "\\text{Combined area under sine and cosine}",
          "explanation": "Both contribute equally on this interval.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "2",
          "explanation": "Exact value.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Name the integral type",
          "workingLatex": "\\text{Standard integral}",
          "explanation": "Classify the integrand: exponential, logarithmic, trigonometric, or a linear combination.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Quote the relevant standard result",
          "workingLatex": "\\text{From the formula sheet / memorised results}",
          "explanation": "A-Level integration here relies on recognising standard forms rather than substitution or parts.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Include the constant of integration",
          "workingLatex": "+c",
          "explanation": "Unless evaluating a definite integral, every antiderivative needs an arbitrary constant $+c$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Check by differentiating",
          "workingLatex": "\\dfrac{d}{dx}(\\text{answer}) = \\text{integrand}",
          "explanation": "Differentiation reverses integration — a quick check catches sign or scaling errors.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State any domain restriction",
          "workingLatex": "\\text{Where the integrand is defined}",
          "explanation": "Logarithmic forms need a non-zero argument; trig results assume radians unless stated.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{0}^{\\pi/2} (\\sin x + \\cos x)\\,dx = 2$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "questionDiagram": null,
    "id": "al.y2.pure.standard-integrals.q053",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "exact",
    "tags": [
      "standard integrals",
      "curve",
      "logarithm",
      "multi-part"
    ],
    "questionText": "A curve has $\\dfrac{dy}{dx} = \\dfrac{1}{x} + 2x$ for $x>0$ and passes through $(1, 1)$. Find $y$ in terms of $x$ and hence find the value of $y$ when $x = 2$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Integrate",
          "workingLatex": "y = \\ln x + x^{2} + c",
          "explanation": "$\\int \\tfrac{1}{x}\\,dx = \\ln x$ and $\\int 2x\\,dx = x^{2}$ on $x>0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Use (1,1)",
          "workingLatex": "1 = \\ln 1 + 1 + c = 0 + 1 + c",
          "explanation": "Substitute the given point.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve",
          "workingLatex": "c = 0",
          "explanation": "So the constant is zero.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Equation",
          "workingLatex": "y = \\ln x + x^{2}",
          "explanation": "Curve equation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find y(2)",
          "workingLatex": "y = \\ln 2 + 4",
          "explanation": "Substitute $x=2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Exact value",
          "workingLatex": "y = 4 + \\ln 2",
          "explanation": "Leave in log form.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check gradient at x=1",
          "workingLatex": "\\dfrac{1}{1}+2(1) = 3",
          "explanation": "Differentiate $y$ to verify (optional).",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "y = \\ln x + x^{2};\\; y(2) = 4+\\ln 2",
          "explanation": "Both parts.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Name the integral type",
          "workingLatex": "\\text{Standard integral}",
          "explanation": "Classify the integrand: exponential, logarithmic, trigonometric, or a linear combination.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Quote the relevant standard result",
          "workingLatex": "\\text{From the formula sheet / memorised results}",
          "explanation": "A-Level integration here relies on recognising standard forms rather than substitution or parts.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Include the constant of integration",
          "workingLatex": "+c",
          "explanation": "Unless evaluating a definite integral, every antiderivative needs an arbitrary constant $+c$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Check by differentiating",
          "workingLatex": "\\dfrac{d}{dx}(\\text{answer}) = \\text{integrand}",
          "explanation": "Differentiation reverses integration — a quick check catches sign or scaling errors.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State any domain restriction",
          "workingLatex": "\\text{Where the integrand is defined}",
          "explanation": "Logarithmic forms need a non-zero argument; trig results assume radians unless stated.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = \\ln x + x^{2}$; when $x=2$, $y = 4 + \\ln 2$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "questionDiagram": null,
    "id": "al.y2.pure.standard-integrals.q054",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "exact",
    "tags": [
      "standard integrals",
      "combination",
      "multi-part"
    ],
    "questionText": "Find $\\displaystyle\\int (e^{x} + \\sin x + \\cos x)\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Split",
          "workingLatex": "\\int e^{x}\\,dx + \\int \\sin x\\,dx + \\int \\cos x\\,dx",
          "explanation": "Three standard integrals.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "e^x",
          "workingLatex": "e^{x}",
          "explanation": "Self-integrating exponential.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "sin x",
          "workingLatex": "-\\cos x",
          "explanation": "Standard sine integral.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "cos x",
          "workingLatex": "\\sin x",
          "explanation": "Standard cosine integral.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Combine",
          "workingLatex": "e^{x} - \\cos x + \\sin x + c",
          "explanation": "Single constant.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check",
          "workingLatex": "\\dfrac{d}{dx}(e^{x}-\\cos x+\\sin x) = e^{x}+\\sin x+\\cos x",
          "explanation": "Differentiate.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "e^{x}-\\cos x+\\sin x+c",
          "explanation": "Final.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Name the integral type",
          "workingLatex": "\\text{Standard integral}",
          "explanation": "Classify the integrand: exponential, logarithmic, trigonometric, or a linear combination.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Quote the relevant standard result",
          "workingLatex": "\\text{From the formula sheet / memorised results}",
          "explanation": "A-Level integration here relies on recognising standard forms rather than substitution or parts.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Include the constant of integration",
          "workingLatex": "+c",
          "explanation": "Unless evaluating a definite integral, every antiderivative needs an arbitrary constant $+c$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check by differentiating",
          "workingLatex": "\\dfrac{d}{dx}(\\text{answer}) = \\text{integrand}",
          "explanation": "Differentiation reverses integration — a quick check catches sign or scaling errors.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State any domain restriction",
          "workingLatex": "\\text{Where the integrand is defined}",
          "explanation": "Logarithmic forms need a non-zero argument; trig results assume radians unless stated.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Simplify the final form",
          "workingLatex": "\\text{Collect like terms}",
          "explanation": "Present the answer in the neatest equivalent form.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int (e^{x} + \\sin x + \\cos x)\\,dx = e^{x} - \\cos x + \\sin x + c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "questionDiagram": null,
    "id": "al.y2.pure.standard-integrals.q055",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "standard integrals",
      "logarithm"
    ],
    "questionText": "Find $\\displaystyle\\int \\dfrac{6}{3x-1}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factor",
          "workingLatex": "6\\int \\dfrac{1}{3x-1}\\,dx",
          "explanation": "Constant multiple.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Standard",
          "workingLatex": "\\int \\dfrac{1}{ax+b}\\,dx = \\dfrac{1}{a}\\ln|ax+b|+c",
          "explanation": "$a=3$, $b=-1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply",
          "workingLatex": "\\dfrac{6}{3}\\ln|3x-1|+c = 2\\ln|3x-1|+c",
          "explanation": "Simplify.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Domain",
          "workingLatex": "3x-1 \\neq 0",
          "explanation": "Non-zero denominator.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check",
          "workingLatex": "\\dfrac{d}{dx}(2\\ln|3x-1|)=\\dfrac{6}{3x-1}",
          "explanation": "Verify.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "2\\ln|3x-1|+c",
          "explanation": "Final.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Name the integral type",
          "workingLatex": "\\text{Standard integral}",
          "explanation": "Classify the integrand: exponential, logarithmic, trigonometric, or a linear combination.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Quote the relevant standard result",
          "workingLatex": "\\text{From the formula sheet / memorised results}",
          "explanation": "A-Level integration here relies on recognising standard forms rather than substitution or parts.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Include the constant of integration",
          "workingLatex": "+c",
          "explanation": "Unless evaluating a definite integral, every antiderivative needs an arbitrary constant $+c$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\dfrac{6}{3x-1}\\,dx = 2\\ln|3x-1| + c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "questionDiagram": null,
    "id": "al.y2.pure.standard-integrals.q056",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "exact",
    "tags": [
      "standard integrals",
      "exponential",
      "expansion",
      "multi-part"
    ],
    "questionText": "Find $\\displaystyle\\int (e^{x} + e^{-x})^{2}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Expand",
          "workingLatex": "(e^{x}+e^{-x})^{2} = e^{2x}+2+e^{-2x}",
          "explanation": "Square the bracket.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Split integral",
          "workingLatex": "\\int e^{2x}\\,dx + \\int 2\\,dx + \\int e^{-2x}\\,dx",
          "explanation": "Linearity.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "First term",
          "workingLatex": "\\dfrac{1}{2}e^{2x}",
          "explanation": "$\\int e^{2x}\\,dx$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Second term",
          "workingLatex": "2x",
          "explanation": "Integral of constant $2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Third term",
          "workingLatex": "-\\dfrac{1}{2}e^{-2x}",
          "explanation": "$\\int e^{-2x}\\,dx = -\\tfrac{1}{2}e^{-2x}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine",
          "workingLatex": "\\dfrac{1}{2}e^{2x} + 2x - \\dfrac{1}{2}e^{-2x} + c",
          "explanation": "Gather terms.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Alternative",
          "workingLatex": "\\dfrac{1}{2}(e^{2x}-e^{-2x})+2x+c",
          "explanation": "Factor if preferred.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "\\dfrac{1}{2}e^{2x}+2x-\\dfrac{1}{2}e^{-2x}+c",
          "explanation": "Final.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Name the integral type",
          "workingLatex": "\\text{Standard integral}",
          "explanation": "Classify the integrand: exponential, logarithmic, trigonometric, or a linear combination.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Quote the relevant standard result",
          "workingLatex": "\\text{From the formula sheet / memorised results}",
          "explanation": "A-Level integration here relies on recognising standard forms rather than substitution or parts.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Include the constant of integration",
          "workingLatex": "+c",
          "explanation": "Unless evaluating a definite integral, every antiderivative needs an arbitrary constant $+c$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Check by differentiating",
          "workingLatex": "\\dfrac{d}{dx}(\\text{answer}) = \\text{integrand}",
          "explanation": "Differentiation reverses integration — a quick check catches sign or scaling errors.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State any domain restriction",
          "workingLatex": "\\text{Where the integrand is defined}",
          "explanation": "Logarithmic forms need a non-zero argument; trig results assume radians unless stated.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int (e^{x}+e^{-x})^{2}\\,dx = \\dfrac{1}{2}e^{2x} + 2x - \\dfrac{1}{2}e^{-2x} + c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "questionDiagram": null,
    "id": "al.y2.pure.standard-integrals.q057",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "exact",
    "tags": [
      "standard integrals",
      "definite integral",
      "exponential",
      "multi-part"
    ],
    "questionText": "Given that $\\displaystyle\\int_{0}^{a} e^{x}\\,dx = e - 1$, find the value of $a$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Integrate",
          "workingLatex": "\\int_{0}^{a} e^{x}\\,dx = \\left[e^{x}\\right]_{0}^{a}",
          "explanation": "Standard exponential.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate",
          "workingLatex": "e^{a} - e^{0} = e^{a} - 1",
          "explanation": "At limits.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set equal",
          "workingLatex": "e^{a} - 1 = e - 1",
          "explanation": "Given condition.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve",
          "workingLatex": "e^{a} = e",
          "explanation": "Add $1$ to both sides.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Take ln",
          "workingLatex": "a = 1",
          "explanation": "Since $e^{a}=e$ implies $a=1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify",
          "workingLatex": "\\int_{0}^{1}e^{x}\\,dx = e-1",
          "explanation": "Check.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "a = 1",
          "explanation": "Final.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Name the integral type",
          "workingLatex": "\\text{Standard integral}",
          "explanation": "Classify the integrand: exponential, logarithmic, trigonometric, or a linear combination.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Quote the relevant standard result",
          "workingLatex": "\\text{From the formula sheet / memorised results}",
          "explanation": "A-Level integration here relies on recognising standard forms rather than substitution or parts.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Include the constant of integration",
          "workingLatex": "+c",
          "explanation": "Unless evaluating a definite integral, every antiderivative needs an arbitrary constant $+c$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check by differentiating",
          "workingLatex": "\\dfrac{d}{dx}(\\text{answer}) = \\text{integrand}",
          "explanation": "Differentiation reverses integration — a quick check catches sign or scaling errors.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State any domain restriction",
          "workingLatex": "\\text{Where the integrand is defined}",
          "explanation": "Logarithmic forms need a non-zero argument; trig results assume radians unless stated.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Simplify the final form",
          "workingLatex": "\\text{Collect like terms}",
          "explanation": "Present the answer in the neatest equivalent form.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a = 1$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "questionDiagram": null,
    "id": "al.y2.pure.standard-integrals.q058",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "exact",
    "tags": [
      "standard integrals",
      "curve",
      "multi-part"
    ],
    "questionText": "A curve passes through $(0, 1)$ and has gradient function $\\dfrac{dy}{dx} = e^{x} + \\cos x$. Find $y$ in terms of $x$ and evaluate $y$ at $x = \\dfrac{\\pi}{2}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Integrate",
          "workingLatex": "y = e^{x} + \\sin x + c",
          "explanation": "Standard integrals.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Use (0,1)",
          "workingLatex": "1 = e^{0} + \\sin 0 + c = 1 + 0 + c",
          "explanation": "Substitute.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "c = 0",
          "workingLatex": "c = 0",
          "explanation": "Constant is zero.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Equation",
          "workingLatex": "y = e^{x} + \\sin x",
          "explanation": "Curve.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "At x = π/2",
          "workingLatex": "y = e^{\\pi/2} + 1",
          "explanation": "Evaluate.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Exact",
          "workingLatex": "y = 1 + e^{\\pi/2}",
          "explanation": "Simplest exact form.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check (0,1)",
          "workingLatex": "e^{0}+\\sin 0 = 1",
          "explanation": "Passes through point.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "y = e^{x}+\\sin x;\\; y(\\tfrac{\\pi}{2}) = 1+e^{\\pi/2}",
          "explanation": "Both parts.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Name the integral type",
          "workingLatex": "\\text{Standard integral}",
          "explanation": "Classify the integrand: exponential, logarithmic, trigonometric, or a linear combination.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Quote the relevant standard result",
          "workingLatex": "\\text{From the formula sheet / memorised results}",
          "explanation": "A-Level integration here relies on recognising standard forms rather than substitution or parts.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Include the constant of integration",
          "workingLatex": "+c",
          "explanation": "Unless evaluating a definite integral, every antiderivative needs an arbitrary constant $+c$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Check by differentiating",
          "workingLatex": "\\dfrac{d}{dx}(\\text{answer}) = \\text{integrand}",
          "explanation": "Differentiation reverses integration — a quick check catches sign or scaling errors.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State any domain restriction",
          "workingLatex": "\\text{Where the integrand is defined}",
          "explanation": "Logarithmic forms need a non-zero argument; trig results assume radians unless stated.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = e^{x} + \\sin x$; at $x = \\dfrac{\\pi}{2}$, $y = 1 + e^{\\pi/2}$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "questionDiagram": null,
    "id": "al.y2.pure.standard-integrals.q059",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "exact",
    "tags": [
      "standard integrals",
      "logarithm",
      "definite integral",
      "multi-part"
    ],
    "questionText": "Evaluate $\\displaystyle\\int_{1}^{e^{2}} \\dfrac{1}{x}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Antiderivative",
          "workingLatex": "\\ln x",
          "explanation": "On $x>0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply limits",
          "workingLatex": "\\left[\\ln x\\right]_{1}^{e^{2}}",
          "explanation": "Definite integral.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Upper",
          "workingLatex": "\\ln(e^{2}) = 2",
          "explanation": "Log law.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Lower",
          "workingLatex": "\\ln 1 = 0",
          "explanation": "At $x=1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Result",
          "workingLatex": "2 - 0 = 2",
          "explanation": "Subtract.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret",
          "workingLatex": "\\text{Area under }y=\\tfrac{1}{x}",
          "explanation": "Hyperbola region.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "2",
          "explanation": "Exact.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Name the integral type",
          "workingLatex": "\\text{Standard integral}",
          "explanation": "Classify the integrand: exponential, logarithmic, trigonometric, or a linear combination.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Quote the relevant standard result",
          "workingLatex": "\\text{From the formula sheet / memorised results}",
          "explanation": "A-Level integration here relies on recognising standard forms rather than substitution or parts.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Include the constant of integration",
          "workingLatex": "+c",
          "explanation": "Unless evaluating a definite integral, every antiderivative needs an arbitrary constant $+c$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check by differentiating",
          "workingLatex": "\\dfrac{d}{dx}(\\text{answer}) = \\text{integrand}",
          "explanation": "Differentiation reverses integration — a quick check catches sign or scaling errors.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State any domain restriction",
          "workingLatex": "\\text{Where the integrand is defined}",
          "explanation": "Logarithmic forms need a non-zero argument; trig results assume radians unless stated.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Simplify the final form",
          "workingLatex": "\\text{Collect like terms}",
          "explanation": "Present the answer in the neatest equivalent form.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{1}^{e^{2}} \\dfrac{1}{x}\\,dx = 2$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "questionDiagram": null,
    "id": "al.y2.pure.standard-integrals.q060",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "exact",
    "tags": [
      "standard integrals",
      "area",
      "trigonometric",
      "multi-part"
    ],
    "questionText": "Find the exact area enclosed between the curve $y = \\cos x$ and the $x$-axis for $0 \\le x \\le \\dfrac{\\pi}{2}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Area formula",
          "workingLatex": "A = \\int_{0}^{\\pi/2} \\cos x\\,dx",
          "explanation": "Definite integral of $y$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate",
          "workingLatex": "\\sin x",
          "explanation": "Standard.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Limits",
          "workingLatex": "\\left[\\sin x\\right]_{0}^{\\pi/2}",
          "explanation": "Evaluate.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Upper",
          "workingLatex": "\\sin\\tfrac{\\pi}{2} = 1",
          "explanation": "At $\\pi/2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Lower",
          "workingLatex": "\\sin 0 = 0",
          "explanation": "At $0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Area",
          "workingLatex": "A = 1",
          "explanation": "Positive since $\\cos x \\ge 0$ on this interval.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "1 \\text{ square unit}",
          "explanation": "Exact area.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Name the integral type",
          "workingLatex": "\\text{Standard integral}",
          "explanation": "Classify the integrand: exponential, logarithmic, trigonometric, or a linear combination.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Quote the relevant standard result",
          "workingLatex": "\\text{From the formula sheet / memorised results}",
          "explanation": "A-Level integration here relies on recognising standard forms rather than substitution or parts.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Include the constant of integration",
          "workingLatex": "+c",
          "explanation": "Unless evaluating a definite integral, every antiderivative needs an arbitrary constant $+c$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check by differentiating",
          "workingLatex": "\\dfrac{d}{dx}(\\text{answer}) = \\text{integrand}",
          "explanation": "Differentiation reverses integration — a quick check catches sign or scaling errors.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State any domain restriction",
          "workingLatex": "\\text{Where the integrand is defined}",
          "explanation": "Logarithmic forms need a non-zero argument; trig results assume radians unless stated.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Simplify the final form",
          "workingLatex": "\\text{Collect like terms}",
          "explanation": "Present the answer in the neatest equivalent form.",
          "diagram": null
        }
      ],
      "finalAnswer": "The area is $1$ square unit."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "questionDiagram": null,
    "id": "al.y2.pure.standard-integrals.q061",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "exact",
    "tags": [
      "standard integrals",
      "exponential",
      "multi-part"
    ],
    "questionText": "Find $\\displaystyle\\int \\dfrac{e^{3x}-1}{e^{x}}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Simplify",
          "workingLatex": "\\dfrac{e^{3x}-1}{e^{x}} = e^{2x} - e^{-x}",
          "explanation": "Split fraction.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate e^{2x}",
          "workingLatex": "\\dfrac{1}{2}e^{2x}",
          "explanation": "Standard.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate -e^{-x}",
          "workingLatex": "e^{-x}",
          "explanation": "$\\int -e^{-x}\\,dx = e^{-x}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Combine",
          "workingLatex": "\\dfrac{1}{2}e^{2x} + e^{-x} + c",
          "explanation": "Antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check",
          "workingLatex": "\\dfrac{d}{dx}\\left(\\tfrac{1}{2}e^{2x}+e^{-x}\\right)=e^{2x}-e^{-x}",
          "explanation": "Verify.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\dfrac{1}{2}e^{2x}+e^{-x}+c",
          "explanation": "Final.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Name the integral type",
          "workingLatex": "\\text{Standard integral}",
          "explanation": "Classify the integrand: exponential, logarithmic, trigonometric, or a linear combination.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Quote the relevant standard result",
          "workingLatex": "\\text{From the formula sheet / memorised results}",
          "explanation": "A-Level integration here relies on recognising standard forms rather than substitution or parts.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Include the constant of integration",
          "workingLatex": "+c",
          "explanation": "Unless evaluating a definite integral, every antiderivative needs an arbitrary constant $+c$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check by differentiating",
          "workingLatex": "\\dfrac{d}{dx}(\\text{answer}) = \\text{integrand}",
          "explanation": "Differentiation reverses integration — a quick check catches sign or scaling errors.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State any domain restriction",
          "workingLatex": "\\text{Where the integrand is defined}",
          "explanation": "Logarithmic forms need a non-zero argument; trig results assume radians unless stated.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Simplify the final form",
          "workingLatex": "\\text{Collect like terms}",
          "explanation": "Present the answer in the neatest equivalent form.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Interpret the result",
          "workingLatex": "\\text{What the integral represents}",
          "explanation": "In context, this could be area, displacement, or simply an antiderivative.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\dfrac{e^{3x}-1}{e^{x}}\\,dx = \\dfrac{1}{2}e^{2x} + e^{-x} + c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "questionDiagram": null,
    "id": "al.y2.pure.standard-integrals.q062",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "exact",
    "tags": [
      "standard integrals",
      "curve",
      "exponential",
      "logarithm",
      "multi-part"
    ],
    "questionText": "The curve $C$ has equation $y = f(x)$ where $f'(x) = 3e^{3x} - \\dfrac{2}{x}$ for $x>0$. Given that $C$ passes through $(1, e^{3})$, find $f(x)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Integrate",
          "workingLatex": "f(x) = e^{3x} - 2\\ln x + c",
          "explanation": "$\\int 3e^{3x}\\,dx = e^{3x}$ and $\\int -\\tfrac{2}{x}\\,dx = -2\\ln x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute (1, e³)",
          "workingLatex": "e^{3} = e^{3} - 2\\ln 1 + c",
          "explanation": "$\\ln 1 = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "c = 0",
          "workingLatex": "c = 0",
          "explanation": "Constant vanishes.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "f(x)",
          "workingLatex": "f(x) = e^{3x} - 2\\ln x",
          "explanation": "Equation of curve.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify point",
          "workingLatex": "f(1) = e^{3} - 0 = e^{3}",
          "explanation": "Passes through given point.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check derivative",
          "workingLatex": "f'(x) = 3e^{3x} - \\tfrac{2}{x}",
          "explanation": "Differentiate to confirm.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "f(x) = e^{3x} - 2\\ln x",
          "explanation": "Final.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Name the integral type",
          "workingLatex": "\\text{Standard integral}",
          "explanation": "Classify the integrand: exponential, logarithmic, trigonometric, or a linear combination.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Quote the relevant standard result",
          "workingLatex": "\\text{From the formula sheet / memorised results}",
          "explanation": "A-Level integration here relies on recognising standard forms rather than substitution or parts.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Include the constant of integration",
          "workingLatex": "+c",
          "explanation": "Unless evaluating a definite integral, every antiderivative needs an arbitrary constant $+c$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check by differentiating",
          "workingLatex": "\\dfrac{d}{dx}(\\text{answer}) = \\text{integrand}",
          "explanation": "Differentiation reverses integration — a quick check catches sign or scaling errors.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State any domain restriction",
          "workingLatex": "\\text{Where the integrand is defined}",
          "explanation": "Logarithmic forms need a non-zero argument; trig results assume radians unless stated.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Simplify the final form",
          "workingLatex": "\\text{Collect like terms}",
          "explanation": "Present the answer in the neatest equivalent form.",
          "diagram": null
        }
      ],
      "finalAnswer": "$f(x) = e^{3x} - 2\\ln x$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "questionDiagram": null,
    "id": "al.y2.pure.standard-integrals.q063",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "exact",
    "tags": [
      "standard integrals",
      "trigonometric",
      "definite integral",
      "multi-part"
    ],
    "questionText": "Evaluate $\\displaystyle\\int_{0}^{\\pi/4} (2\\sin x + 3\\cos x)\\,dx$ exactly.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Antiderivative",
          "workingLatex": "-2\\cos x + 3\\sin x",
          "explanation": "Integrate each term.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply limits",
          "workingLatex": "\\left[-2\\cos x + 3\\sin x\\right]_{0}^{\\pi/4}",
          "explanation": "Definite integral.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "At π/4",
          "workingLatex": "-2\\cdot\\tfrac{\\sqrt{2}}{2} + 3\\cdot\\tfrac{\\sqrt{2}}{2} = \\tfrac{\\sqrt{2}}{2}",
          "explanation": "Exact trig values.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "At 0",
          "workingLatex": "-2(1) + 3(0) = -2",
          "explanation": "Lower limit.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Subtract",
          "workingLatex": "\\tfrac{\\sqrt{2}}{2} - (-2) = 2 + \\tfrac{\\sqrt{2}}{2}",
          "explanation": "Result.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify",
          "workingLatex": "2 + \\dfrac{\\sqrt{2}}{2}",
          "explanation": "Exact form.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "2 + \\tfrac{\\sqrt{2}}{2}",
          "explanation": "Final.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Name the integral type",
          "workingLatex": "\\text{Standard integral}",
          "explanation": "Classify the integrand: exponential, logarithmic, trigonometric, or a linear combination.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Quote the relevant standard result",
          "workingLatex": "\\text{From the formula sheet / memorised results}",
          "explanation": "A-Level integration here relies on recognising standard forms rather than substitution or parts.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Include the constant of integration",
          "workingLatex": "+c",
          "explanation": "Unless evaluating a definite integral, every antiderivative needs an arbitrary constant $+c$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check by differentiating",
          "workingLatex": "\\dfrac{d}{dx}(\\text{answer}) = \\text{integrand}",
          "explanation": "Differentiation reverses integration — a quick check catches sign or scaling errors.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State any domain restriction",
          "workingLatex": "\\text{Where the integrand is defined}",
          "explanation": "Logarithmic forms need a non-zero argument; trig results assume radians unless stated.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Simplify the final form",
          "workingLatex": "\\text{Collect like terms}",
          "explanation": "Present the answer in the neatest equivalent form.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{0}^{\\pi/4} (2\\sin x + 3\\cos x)\\,dx = 2 + \\dfrac{\\sqrt{2}}{2}$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "questionDiagram": null,
    "id": "al.y2.pure.standard-integrals.q064",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "exact",
    "tags": [
      "standard integrals",
      "definite integral",
      "average",
      "multi-part"
    ],
    "questionText": "Find $\\displaystyle\\int_{0}^{1} (e^{x} + x)\\,dx$ and hence find the average value of $e^{x}+x$ on $[0,1]$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Integrate",
          "workingLatex": "\\int (e^{x}+x)\\,dx = e^{x} + \\tfrac{x^{2}}{2}",
          "explanation": "Term by term.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Definite",
          "workingLatex": "\\left[e^{x}+\\tfrac{x^{2}}{2}\\right]_{0}^{1}",
          "explanation": "Apply limits.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "At 1",
          "workingLatex": "e + \\tfrac{1}{2}",
          "explanation": "Upper.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "At 0",
          "workingLatex": "1 + 0 = 1",
          "explanation": "Lower.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integral",
          "workingLatex": "e + \\tfrac{1}{2} - 1 = e - \\tfrac{1}{2}",
          "explanation": "Subtract.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Average",
          "workingLatex": "\\dfrac{e-\\tfrac{1}{2}}{1} = e - \\tfrac{1}{2}",
          "explanation": "Average = integral / width.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "\\int = e-\\tfrac{1}{2};\\; \\text{average} = e-\\tfrac{1}{2}",
          "explanation": "Both.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Name the integral type",
          "workingLatex": "\\text{Standard integral}",
          "explanation": "Classify the integrand: exponential, logarithmic, trigonometric, or a linear combination.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Quote the relevant standard result",
          "workingLatex": "\\text{From the formula sheet / memorised results}",
          "explanation": "A-Level integration here relies on recognising standard forms rather than substitution or parts.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Include the constant of integration",
          "workingLatex": "+c",
          "explanation": "Unless evaluating a definite integral, every antiderivative needs an arbitrary constant $+c$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check by differentiating",
          "workingLatex": "\\dfrac{d}{dx}(\\text{answer}) = \\text{integrand}",
          "explanation": "Differentiation reverses integration — a quick check catches sign or scaling errors.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State any domain restriction",
          "workingLatex": "\\text{Where the integrand is defined}",
          "explanation": "Logarithmic forms need a non-zero argument; trig results assume radians unless stated.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Simplify the final form",
          "workingLatex": "\\text{Collect like terms}",
          "explanation": "Present the answer in the neatest equivalent form.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{0}^{1}(e^{x}+x)\\,dx = e - \\dfrac{1}{2}$; average value $= e - \\dfrac{1}{2}$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "questionDiagram": null,
    "id": "al.y2.pure.standard-integrals.q065",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "exact",
    "tags": [
      "standard integrals",
      "modelling",
      "kinematics",
      "multi-part"
    ],
    "questionText": "A particle moves along a line so that its velocity at time $t$ seconds is $v = 3\\sin t + 2e^{t}$ m/s. Given $s(0) = 1$, find the displacement $s(t)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Relate s and v",
          "workingLatex": "s = \\int v\\,dt",
          "explanation": "Displacement is the integral of velocity.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate sin t",
          "workingLatex": "-3\\cos t",
          "explanation": "$3\\int \\sin t\\,dt$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate 2e^t",
          "workingLatex": "2e^{t}",
          "explanation": "Constant multiple of $e^{t}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "General",
          "workingLatex": "s = -3\\cos t + 2e^{t} + c",
          "explanation": "Add constant.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "s(0)=1",
          "workingLatex": "1 = -3(1) + 2(1) + c = -1 + c",
          "explanation": "Use initial condition.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "c = 2",
          "workingLatex": "c = 2",
          "explanation": "Solve.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "s = -3\\cos t + 2e^{t} + 2",
          "explanation": "Displacement function.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Name the integral type",
          "workingLatex": "\\text{Standard integral}",
          "explanation": "Classify the integrand: exponential, logarithmic, trigonometric, or a linear combination.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Quote the relevant standard result",
          "workingLatex": "\\text{From the formula sheet / memorised results}",
          "explanation": "A-Level integration here relies on recognising standard forms rather than substitution or parts.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Include the constant of integration",
          "workingLatex": "+c",
          "explanation": "Unless evaluating a definite integral, every antiderivative needs an arbitrary constant $+c$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check by differentiating",
          "workingLatex": "\\dfrac{d}{dx}(\\text{answer}) = \\text{integrand}",
          "explanation": "Differentiation reverses integration — a quick check catches sign or scaling errors.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State any domain restriction",
          "workingLatex": "\\text{Where the integrand is defined}",
          "explanation": "Logarithmic forms need a non-zero argument; trig results assume radians unless stated.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Simplify the final form",
          "workingLatex": "\\text{Collect like terms}",
          "explanation": "Present the answer in the neatest equivalent form.",
          "diagram": null
        }
      ],
      "finalAnswer": "$s(t) = -3\\cos t + 2e^{t} + 2$ metres."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "questionDiagram": null,
    "id": "al.y2.pure.standard-integrals.q066",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "exact",
    "tags": [
      "standard integrals",
      "exponential",
      "definite integral",
      "multi-part"
    ],
    "questionText": "Find $\\displaystyle\\int e^{2x+1}\\,dx$ and hence evaluate $\\displaystyle\\int_{0}^{\\ln 2} e^{2x+1}\\,dx$ exactly.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the form",
          "workingLatex": "\\int e^{2x+1}\\,dx",
          "explanation": "Linear expression in the exponent.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Standard result",
          "workingLatex": "\\int e^{ax+b}\\,dx = \\dfrac{1}{a}e^{ax+b} + c",
          "explanation": "Divide by the coefficient of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Part (a)",
          "workingLatex": "\\int e^{2x+1}\\,dx = \\dfrac{1}{2}e^{2x+1} + c",
          "explanation": "With $a=2$, $b=1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set up definite integral",
          "workingLatex": "\\left[\\dfrac{1}{2}e^{2x+1}\\right]_{0}^{\\ln 2}",
          "explanation": "Use the antiderivative from part (a).",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Upper limit",
          "workingLatex": "\\dfrac{1}{2}e^{2\\ln 2 + 1} = \\dfrac{1}{2}e^{1} \\cdot 4 = 2e",
          "explanation": "Since $e^{2\\ln 2}=4$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Lower limit",
          "workingLatex": "\\dfrac{1}{2}e^{1} = \\dfrac{e}{2}",
          "explanation": "At $x=0$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Subtract",
          "workingLatex": "2e - \\dfrac{e}{2} = \\dfrac{3e}{2}",
          "explanation": "Definite integral value.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "\\int e^{2x+1}\\,dx = \\tfrac{1}{2}e^{2x+1}+c;\\; \\int_{0}^{\\ln 2} = \\tfrac{3e}{2}",
          "explanation": "Both parts.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Name the integral type",
          "workingLatex": "\\text{Standard integral}",
          "explanation": "Classify the integrand: exponential, logarithmic, trigonometric, or a linear combination.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Quote the relevant standard result",
          "workingLatex": "\\text{From the formula sheet / memorised results}",
          "explanation": "A-Level integration here relies on recognising standard forms rather than substitution or parts.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Include the constant of integration",
          "workingLatex": "+c",
          "explanation": "Unless evaluating a definite integral, every antiderivative needs an arbitrary constant $+c$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Check by differentiating",
          "workingLatex": "\\dfrac{d}{dx}(\\text{answer}) = \\text{integrand}",
          "explanation": "Differentiation reverses integration — a quick check catches sign or scaling errors.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State any domain restriction",
          "workingLatex": "\\text{Where the integrand is defined}",
          "explanation": "Logarithmic forms need a non-zero argument; trig results assume radians unless stated.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\displaystyle\\int e^{2x+1}\\,dx = \\dfrac{1}{2}e^{2x+1} + c$. (b) $\\displaystyle\\int_{0}^{\\ln 2} e^{2x+1}\\,dx = \\dfrac{3e}{2}$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "questionDiagram": null,
    "id": "al.y2.pure.standard-integrals.q067",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "exact",
    "tags": [
      "standard integrals",
      "area",
      "multi-part"
    ],
    "questionText": "The region $R$ is bounded by $y = e^{2x}$, the coordinate axes and the line $x = 1$. Find the exact area of $R$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up",
          "workingLatex": "A = \\int_{0}^{1} e^{2x}\\,dx",
          "explanation": "Area under curve from $x=0$ to $x=1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate",
          "workingLatex": "\\dfrac{1}{2}e^{2x}",
          "explanation": "Standard.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Limits",
          "workingLatex": "\\left[\\dfrac{1}{2}e^{2x}\\right]_{0}^{1}",
          "explanation": "Evaluate.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "At 1",
          "workingLatex": "\\dfrac{e^{2}}{2}",
          "explanation": "Upper.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "At 0",
          "workingLatex": "\\dfrac{1}{2}",
          "explanation": "Lower.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Area",
          "workingLatex": "\\dfrac{e^{2}-1}{2}",
          "explanation": "Subtract.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "\\dfrac{e^{2}-1}{2}",
          "explanation": "Exact area.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Name the integral type",
          "workingLatex": "\\text{Standard integral}",
          "explanation": "Classify the integrand: exponential, logarithmic, trigonometric, or a linear combination.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Quote the relevant standard result",
          "workingLatex": "\\text{From the formula sheet / memorised results}",
          "explanation": "A-Level integration here relies on recognising standard forms rather than substitution or parts.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Include the constant of integration",
          "workingLatex": "+c",
          "explanation": "Unless evaluating a definite integral, every antiderivative needs an arbitrary constant $+c$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check by differentiating",
          "workingLatex": "\\dfrac{d}{dx}(\\text{answer}) = \\text{integrand}",
          "explanation": "Differentiation reverses integration — a quick check catches sign or scaling errors.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State any domain restriction",
          "workingLatex": "\\text{Where the integrand is defined}",
          "explanation": "Logarithmic forms need a non-zero argument; trig results assume radians unless stated.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Simplify the final form",
          "workingLatex": "\\text{Collect like terms}",
          "explanation": "Present the answer in the neatest equivalent form.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= \\dfrac{e^{2}-1}{2}$ square units."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "questionDiagram": null,
    "id": "al.y2.pure.standard-integrals.q068",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "exact",
    "tags": [
      "standard integrals",
      "secant",
      "definite integral",
      "multi-part"
    ],
    "questionText": "Find $\\displaystyle\\int_{\\pi/6}^{\\pi/3} \\sec^{2} x\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Antiderivative",
          "workingLatex": "\\tan x",
          "explanation": "$\\int \\sec^{2}x\\,dx = \\tan x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Limits",
          "workingLatex": "\\left[\\tan x\\right]_{\\pi/6}^{\\pi/3}",
          "explanation": "Apply.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Upper",
          "workingLatex": "\\tan\\tfrac{\\pi}{3} = \\sqrt{3}",
          "explanation": "Exact.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Lower",
          "workingLatex": "\\tan\\tfrac{\\pi}{6} = \\tfrac{1}{\\sqrt{3}} = \\tfrac{\\sqrt{3}}{3}",
          "explanation": "Exact.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Subtract",
          "workingLatex": "\\sqrt{3} - \\tfrac{\\sqrt{3}}{3} = \\tfrac{2\\sqrt{3}}{3}",
          "explanation": "Common denominator.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\tfrac{2\\sqrt{3}}{3}",
          "explanation": "Exact value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Name the integral type",
          "workingLatex": "\\text{Standard integral}",
          "explanation": "Classify the integrand: exponential, logarithmic, trigonometric, or a linear combination.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Quote the relevant standard result",
          "workingLatex": "\\text{From the formula sheet / memorised results}",
          "explanation": "A-Level integration here relies on recognising standard forms rather than substitution or parts.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Include the constant of integration",
          "workingLatex": "+c",
          "explanation": "Unless evaluating a definite integral, every antiderivative needs an arbitrary constant $+c$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check by differentiating",
          "workingLatex": "\\dfrac{d}{dx}(\\text{answer}) = \\text{integrand}",
          "explanation": "Differentiation reverses integration — a quick check catches sign or scaling errors.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State any domain restriction",
          "workingLatex": "\\text{Where the integrand is defined}",
          "explanation": "Logarithmic forms need a non-zero argument; trig results assume radians unless stated.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Simplify the final form",
          "workingLatex": "\\text{Collect like terms}",
          "explanation": "Present the answer in the neatest equivalent form.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Interpret the result",
          "workingLatex": "\\text{What the integral represents}",
          "explanation": "In context, this could be area, displacement, or simply an antiderivative.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{\\pi/6}^{\\pi/3} \\sec^{2} x\\,dx = \\dfrac{2\\sqrt{3}}{3}$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "questionDiagram": null,
    "id": "al.y2.pure.standard-integrals.q069",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "exact",
    "tags": [
      "standard integrals",
      "curve",
      "multi-part"
    ],
    "questionText": "A curve has $\\dfrac{dy}{dx} = 4\\cos(2x) - 3e^{-x}$. Given that the curve passes through $(0, 2)$, find its equation.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Integrate cos(2x)",
          "workingLatex": "2\\sin(2x)",
          "explanation": "$4\\cdot\\tfrac{1}{2}\\sin 2x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate -3e^{-x}",
          "workingLatex": "3e^{-x}",
          "explanation": "$-3\\cdot(-e^{-x})$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "General",
          "workingLatex": "y = 2\\sin(2x) + 3e^{-x} + c",
          "explanation": "Combine.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Use (0,2)",
          "workingLatex": "2 = 2\\sin 0 + 3e^{0} + c = 0 + 3 + c",
          "explanation": "Substitute.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "c = -1",
          "workingLatex": "c = -1",
          "explanation": "Solve.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Equation",
          "workingLatex": "y = 2\\sin(2x) + 3e^{-x} - 1",
          "explanation": "Final curve.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify",
          "workingLatex": "y(0) = -1 + 3 = 2",
          "explanation": "Check point.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "y = 2\\sin(2x) + 3e^{-x} - 1",
          "explanation": "Equation.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Name the integral type",
          "workingLatex": "\\text{Standard integral}",
          "explanation": "Classify the integrand: exponential, logarithmic, trigonometric, or a linear combination.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Quote the relevant standard result",
          "workingLatex": "\\text{From the formula sheet / memorised results}",
          "explanation": "A-Level integration here relies on recognising standard forms rather than substitution or parts.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Include the constant of integration",
          "workingLatex": "+c",
          "explanation": "Unless evaluating a definite integral, every antiderivative needs an arbitrary constant $+c$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Check by differentiating",
          "workingLatex": "\\dfrac{d}{dx}(\\text{answer}) = \\text{integrand}",
          "explanation": "Differentiation reverses integration — a quick check catches sign or scaling errors.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State any domain restriction",
          "workingLatex": "\\text{Where the integrand is defined}",
          "explanation": "Logarithmic forms need a non-zero argument; trig results assume radians unless stated.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = 2\\sin(2x) + 3e^{-x} - 1$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "questionDiagram": null,
    "id": "al.y2.pure.standard-integrals.q070",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "exact",
    "tags": [
      "standard integrals",
      "multi-part",
      "FTC",
      "multi-part"
    ],
    "questionText": "A curve $C$ has equation $y = f(x)$ where $f'(x) = e^{x} + \\dfrac{1}{x}$ for $x>0$.\n(a) Find $f(x)$, given that $f(1) = e$.\n(b) Evaluate $\\displaystyle\\int_{1}^{2} f'(x)\\,dx$ exactly.\n(c) Hence find the average rate of change of $f$ on $[1,2]$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "(a) Integrate",
          "workingLatex": "f(x) = e^{x} + \\ln x + c",
          "explanation": "Standard integrals on $x>0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Use f(1)=e",
          "workingLatex": "e = e + \\ln 1 + c = e + 0 + c",
          "explanation": "Substitute.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "c = 0",
          "workingLatex": "c = 0",
          "explanation": "Constant is zero.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State f(x)",
          "workingLatex": "f(x) = e^{x} + \\ln x",
          "explanation": "Part (a) answer.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "(b) Integral of f'",
          "workingLatex": "\\int_{1}^{2} f'(x)\\,dx = f(2) - f(1)",
          "explanation": "FTC: integral of derivative equals change in $f$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "f(2)",
          "workingLatex": "e^{2} + \\ln 2",
          "explanation": "Evaluate $f$ at 2.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "f(1)",
          "workingLatex": "e",
          "explanation": "Given.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Integral",
          "workingLatex": "e^{2} + \\ln 2 - e",
          "explanation": "Part (b).",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "(c) Average rate",
          "workingLatex": "\\dfrac{f(2)-f(1)}{2-1} = e^{2} + \\ln 2 - e",
          "explanation": "Change in $f$ over interval length.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Answer",
          "workingLatex": "f(x)=e^{x}+\\ln x;\\; \\int_{1}^{2}f'(x)\\,dx = e^{2}+\\ln 2-e;\\; \\text{avg} = e^{2}+\\ln 2-e",
          "explanation": "All parts.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Name the integral type",
          "workingLatex": "\\text{Standard integral}",
          "explanation": "Classify the integrand: exponential, logarithmic, trigonometric, or a linear combination.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Quote the relevant standard result",
          "workingLatex": "\\text{From the formula sheet / memorised results}",
          "explanation": "A-Level integration here relies on recognising standard forms rather than substitution or parts.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Include the constant of integration",
          "workingLatex": "+c",
          "explanation": "Unless evaluating a definite integral, every antiderivative needs an arbitrary constant $+c$.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $f(x) = e^{x} + \\ln x$. (b) $\\displaystyle\\int_{1}^{2} f'(x)\\,dx = e^{2} + \\ln 2 - e$. (c) Average rate of change $= e^{2} + \\ln 2 - e$."
    }
  }
];
