import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "id": "al.y2.pure.standard-integrals.q001",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": [
      "standard integrals",
      "exponential"
    ],
    "questionText": "Find $\\displaystyle\\int e^{x}\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the integrand",
          "workingLatex": "\\int e^{x}\\,dx",
          "explanation": "We need an antiderivative of $e^{x}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the standard result",
          "workingLatex": "\\int e^{x}\\,dx = e^{x} + c",
          "explanation": "The exponential $e^{x}$ is its own antiderivative — the function that differentiates to give $e^{x}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Include the constant of integration",
          "workingLatex": "e^{x} + c",
          "explanation": "Indefinite integration produces a family of curves; $+c$ accounts for any vertical shift.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check by differentiating",
          "workingLatex": "\\frac{d}{dx}(e^{x}+c) = e^{x}",
          "explanation": "Differentiating our answer returns the integrand, confirming the result.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret the result",
          "workingLatex": "\\text{every translate of } y=e^{x}",
          "explanation": "All functions $e^{x}+c$ share the same gradient function $e^{x}$.",
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
    "id": "al.y2.pure.standard-integrals.q002",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "standard integrals",
      "exponential",
      "constant multiple"
    ],
    "questionText": "Find $\\displaystyle\\int 4e^{x}\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Pull out the constant",
          "workingLatex": "\\int 4e^{x}\\,dx = 4\\int e^{x}\\,dx",
          "explanation": "A constant factor can be taken outside the integral.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall $\\int e^{x}\\,dx = e^{x}+c$",
          "workingLatex": "\\int e^{x}\\,dx = e^{x}",
          "explanation": "The exponential is its own antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Multiply by $4$",
          "workingLatex": "4e^{x}",
          "explanation": "Restore the constant multiple in front.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add $+c$",
          "workingLatex": "4e^{x} + c",
          "explanation": "Include the constant of integration.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check",
          "workingLatex": "\\frac{d}{dx}(4e^{x}+c) = 4e^{x}",
          "explanation": "Differentiating recovers the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "\\int 4e^{x}\\,dx = 4e^{x} + c",
          "explanation": "This is the required antiderivative.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int 4e^{x}\\,dx = 4e^{x} + c$."
    }
  },
  {
    "id": "al.y2.pure.standard-integrals.q003",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "standard integrals",
      "exponential",
      "linear exponent"
    ],
    "questionText": "Find $\\displaystyle\\int e^{3x}\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Match the standard form",
          "workingLatex": "\\int e^{3x}\\,dx",
          "explanation": "Recognise this as $e^{kx}$ with a constant $k$ in the exponent.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall $\\int e^{kx}\\,dx = \\tfrac{1}{k}e^{kx}+c$",
          "workingLatex": "\\int e^{3x}\\,dx = \\dfrac{1}{3}e^{3x} + c",
          "explanation": "Differentiating $\\tfrac{1}{k}e^{kx}$ gives $e^{kx}$ by the chain rule.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the rule",
          "workingLatex": "\\dfrac{1}{3}e^{3x}",
          "explanation": "Substitute $k$ and any constant factor in front.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add the constant",
          "workingLatex": "\\dfrac{1}{3}e^{3x} + c",
          "explanation": "Include $+c$ for the indefinite integral.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check by differentiating",
          "workingLatex": "\\frac{d}{dx}\\left(\\dfrac{1}{3}e^{3x}\\right)",
          "explanation": "Differentiating should recover the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "\\int e^{3x}\\,dx = \\dfrac{1}{3}e^{3x} + c",
          "explanation": "This is the required antiderivative.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int e^{3x}\\,dx = \\dfrac{1}{3}e^{3x} + c$."
    }
  },
  {
    "id": "al.y2.pure.standard-integrals.q004",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "standard integrals",
      "exponential",
      "negative exponent"
    ],
    "questionText": "Find $\\displaystyle\\int e^{-x}\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Match the standard form",
          "workingLatex": "\\int e^{-1x}\\,dx",
          "explanation": "Recognise this as $e^{kx}$ with a constant $k$ in the exponent.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall $\\int e^{kx}\\,dx = \\tfrac{1}{k}e^{kx}+c$",
          "workingLatex": "\\int e^{-1x}\\,dx = \\dfrac{1}{-1}e^{-1x} + c",
          "explanation": "Differentiating $\\tfrac{1}{k}e^{kx}$ gives $e^{kx}$ by the chain rule.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the rule",
          "workingLatex": "-e^{-x}",
          "explanation": "Substitute $k$ and any constant factor in front.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add the constant",
          "workingLatex": "-e^{-x} + c",
          "explanation": "Include $+c$ for the indefinite integral.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check by differentiating",
          "workingLatex": "\\frac{d}{dx}\\left(-e^{-x}\\right)",
          "explanation": "Differentiating should recover the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "\\int e^{-x}\\,dx = -e^{-x} + c",
          "explanation": "This is the required antiderivative.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int e^{-x}\\,dx = -e^{-x} + c$."
    }
  },
  {
    "id": "al.y2.pure.standard-integrals.q005",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "standard integrals",
      "exponential",
      "linear exponent"
    ],
    "questionText": "Find $\\displaystyle\\int e^{2x}\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Match the standard form",
          "workingLatex": "\\int e^{2x}\\,dx",
          "explanation": "Recognise this as $e^{kx}$ with a constant $k$ in the exponent.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall $\\int e^{kx}\\,dx = \\tfrac{1}{k}e^{kx}+c$",
          "workingLatex": "\\int e^{2x}\\,dx = \\dfrac{1}{2}e^{2x} + c",
          "explanation": "Differentiating $\\tfrac{1}{k}e^{kx}$ gives $e^{kx}$ by the chain rule.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the rule",
          "workingLatex": "\\dfrac{1}{2}e^{2x}",
          "explanation": "Substitute $k$ and any constant factor in front.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add the constant",
          "workingLatex": "\\dfrac{1}{2}e^{2x} + c",
          "explanation": "Include $+c$ for the indefinite integral.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check by differentiating",
          "workingLatex": "\\frac{d}{dx}\\left(\\dfrac{1}{2}e^{2x}\\right)",
          "explanation": "Differentiating should recover the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "\\int e^{2x}\\,dx = \\dfrac{1}{2}e^{2x} + c",
          "explanation": "This is the required antiderivative.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int e^{2x}\\,dx = \\dfrac{1}{2}e^{2x} + c$."
    }
  },
  {
    "id": "al.y2.pure.standard-integrals.q006",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "standard integrals",
      "exponential",
      "constant multiple"
    ],
    "questionText": "Find $\\displaystyle\\int 2e^{5x}\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Match the standard form",
          "workingLatex": "\\int e^{5x}\\,dx",
          "explanation": "Recognise this as $e^{kx}$ with a constant $k$ in the exponent.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall $\\int e^{kx}\\,dx = \\tfrac{1}{k}e^{kx}+c$",
          "workingLatex": "\\int e^{5x}\\,dx = \\dfrac{1}{5}e^{5x} + c",
          "explanation": "Differentiating $\\tfrac{1}{k}e^{kx}$ gives $e^{kx}$ by the chain rule.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the rule",
          "workingLatex": "\\dfrac{2}{5}e^{5x}",
          "explanation": "Substitute $k$ and any constant factor in front.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add the constant",
          "workingLatex": "\\dfrac{2}{5}e^{5x} + c",
          "explanation": "Include $+c$ for the indefinite integral.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check by differentiating",
          "workingLatex": "\\frac{d}{dx}\\left(\\dfrac{2}{5}e^{5x}\\right)",
          "explanation": "Differentiating should recover the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "\\int 2e^{5x}\\,dx = \\dfrac{2}{5}e^{5x} + c",
          "explanation": "This is the required antiderivative.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int 2e^{5x}\\,dx = \\dfrac{2}{5}e^{5x} + c$."
    }
  },
  {
    "id": "al.y2.pure.standard-integrals.q007",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "standard integrals",
      "reciprocal",
      "reciprocal"
    ],
    "questionText": "Find $\\displaystyle\\int \\dfrac{1}{x}\\,dx$, where $x \\neq 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the form",
          "workingLatex": "\\int \\dfrac{1}{x}\\,dx",
          "explanation": "This is a constant multiple of $\\dfrac{1}{x}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the standard result",
          "workingLatex": "\\int \\dfrac{1}{x}\\,dx = \\ln|x| + c",
          "explanation": "Since $\\dfrac{d}{dx}(\\ln|x|) = \\dfrac{1}{x}$, the reciprocal integrates to a logarithm. The modulus handles negative $x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the constant multiple",
          "workingLatex": "\\ln|x|",
          "explanation": "Pull any numerical factor in front of the logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Include $+c$",
          "workingLatex": "\\ln|x| + c",
          "explanation": "The indefinite integral needs the constant of integration.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Note the domain",
          "workingLatex": "x \\neq 0",
          "explanation": "The integrand is undefined at $x=0$, so we state $x\\neq 0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "\\int \\dfrac{1}{x}\\,dx = \\ln|x| + c",
          "explanation": "This is the required antiderivative.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\dfrac{1}{x}\\,dx = \\ln|x| + c$, $x \\neq 0$."
    }
  },
  {
    "id": "al.y2.pure.standard-integrals.q008",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "standard integrals",
      "reciprocal",
      "constant multiple"
    ],
    "questionText": "Find $\\displaystyle\\int \\dfrac{3}{x}\\,dx$, where $x \\neq 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the form",
          "workingLatex": "\\int \\dfrac{3}{x}\\,dx",
          "explanation": "This is a constant multiple of $\\dfrac{1}{x}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the standard result",
          "workingLatex": "\\int \\dfrac{1}{x}\\,dx = \\ln|x| + c",
          "explanation": "Since $\\dfrac{d}{dx}(\\ln|x|) = \\dfrac{1}{x}$, the reciprocal integrates to a logarithm. The modulus handles negative $x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the constant multiple",
          "workingLatex": "3\\ln|x|",
          "explanation": "Pull any numerical factor in front of the logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Include $+c$",
          "workingLatex": "3\\ln|x| + c",
          "explanation": "The indefinite integral needs the constant of integration.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Note the domain",
          "workingLatex": "x \\neq 0",
          "explanation": "The integrand is undefined at $x=0$, so we state $x\\neq 0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "\\int \\dfrac{3}{x}\\,dx = 3\\ln|x| + c",
          "explanation": "This is the required antiderivative.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\dfrac{3}{x}\\,dx = 3\\ln|x| + c$, $x \\neq 0$."
    }
  },
  {
    "id": "al.y2.pure.standard-integrals.q009",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "standard integrals",
      "reciprocal",
      "reciprocal"
    ],
    "questionText": "Find $\\displaystyle\\int \\dfrac{1}{2x}\\,dx$, where $x \\neq 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the form",
          "workingLatex": "\\int \\dfrac{1}{2x}\\,dx",
          "explanation": "This is a constant multiple of $\\dfrac{1}{x}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the standard result",
          "workingLatex": "\\int \\dfrac{1}{x}\\,dx = \\ln|x| + c",
          "explanation": "Since $\\dfrac{d}{dx}(\\ln|x|) = \\dfrac{1}{x}$, the reciprocal integrates to a logarithm. The modulus handles negative $x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the constant multiple",
          "workingLatex": "\\dfrac{1}{2}\\ln|x|",
          "explanation": "Pull any numerical factor in front of the logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Include $+c$",
          "workingLatex": "\\dfrac{1}{2}\\ln|x| + c",
          "explanation": "The indefinite integral needs the constant of integration.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Note the domain",
          "workingLatex": "x \\neq 0",
          "explanation": "The integrand is undefined at $x=0$, so we state $x\\neq 0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "\\int \\dfrac{1}{2x}\\,dx = \\dfrac{1}{2}\\ln|x| + c",
          "explanation": "This is the required antiderivative.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\dfrac{1}{2x}\\,dx = \\dfrac{1}{2}\\ln|x| + c$, $x \\neq 0$."
    }
  },
  {
    "id": "al.y2.pure.standard-integrals.q010",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "standard integrals",
      "reciprocal",
      "constant multiple"
    ],
    "questionText": "Find $\\displaystyle\\int \\dfrac{5}{x}\\,dx$, where $x \\neq 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the form",
          "workingLatex": "\\int \\dfrac{5}{x}\\,dx",
          "explanation": "This is a constant multiple of $\\dfrac{1}{x}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the standard result",
          "workingLatex": "\\int \\dfrac{1}{x}\\,dx = \\ln|x| + c",
          "explanation": "Since $\\dfrac{d}{dx}(\\ln|x|) = \\dfrac{1}{x}$, the reciprocal integrates to a logarithm. The modulus handles negative $x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the constant multiple",
          "workingLatex": "5\\ln|x|",
          "explanation": "Pull any numerical factor in front of the logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Include $+c$",
          "workingLatex": "5\\ln|x| + c",
          "explanation": "The indefinite integral needs the constant of integration.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Note the domain",
          "workingLatex": "x \\neq 0",
          "explanation": "The integrand is undefined at $x=0$, so we state $x\\neq 0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "\\int \\dfrac{5}{x}\\,dx = 5\\ln|x| + c",
          "explanation": "This is the required antiderivative.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\dfrac{5}{x}\\,dx = 5\\ln|x| + c$, $x \\neq 0$."
    }
  },
  {
    "id": "al.y2.pure.standard-integrals.q011",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "standard integrals",
      "trigonometry",
      "sine"
    ],
    "questionText": "Find $\\displaystyle\\int \\sin x\\,dx$, where $x$ is in radians.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the trig form",
          "workingLatex": "\\int \\sin x\\,dx",
          "explanation": "Match the integrand to a standard trigonometric antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the standard result",
          "workingLatex": "\\int \\sin x\\,dx = -\\cos x + c,\\quad \\int \\cos x\\,dx = \\sin x + c",
          "explanation": "Sine integrates to negative cosine; cosine integrates to sine. These follow from the derivatives of $\\cos x$ and $\\sin x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the result directly",
          "workingLatex": "-\\cos x",
          "explanation": "If the argument is $ax$, divide by $a$ after integrating — the reverse of the chain rule.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Include the constant",
          "workingLatex": "-\\cos x + c",
          "explanation": "Add $+c$ for the indefinite integral.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check by differentiating",
          "workingLatex": "\\frac{d}{dx}\\left(-\\cos x\\right)",
          "explanation": "Differentiating should return the original integrand.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "\\int \\sin x\\,dx = -\\cos x + c",
          "explanation": "This is the required antiderivative.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\sin x\\,dx = -\\cos x + c$."
    }
  },
  {
    "id": "al.y2.pure.standard-integrals.q012",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "standard integrals",
      "trigonometry",
      "cosine"
    ],
    "questionText": "Find $\\displaystyle\\int \\cos x\\,dx$, where $x$ is in radians.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the trig form",
          "workingLatex": "\\int \\cos x\\,dx",
          "explanation": "Match the integrand to a standard trigonometric antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the standard result",
          "workingLatex": "\\int \\sin x\\,dx = -\\cos x + c,\\quad \\int \\cos x\\,dx = \\sin x + c",
          "explanation": "Sine integrates to negative cosine; cosine integrates to sine. These follow from the derivatives of $\\cos x$ and $\\sin x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the result directly",
          "workingLatex": "\\sin x",
          "explanation": "If the argument is $ax$, divide by $a$ after integrating — the reverse of the chain rule.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Include the constant",
          "workingLatex": "\\sin x + c",
          "explanation": "Add $+c$ for the indefinite integral.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check by differentiating",
          "workingLatex": "\\frac{d}{dx}\\left(\\sin x\\right)",
          "explanation": "Differentiating should return the original integrand.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "\\int \\cos x\\,dx = \\sin x + c",
          "explanation": "This is the required antiderivative.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\cos x\\,dx = \\sin x + c$."
    }
  },
  {
    "id": "al.y2.pure.standard-integrals.q013",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "standard integrals",
      "trigonometry",
      "sine"
    ],
    "questionText": "Find $\\displaystyle\\int 3\\sin x\\,dx$, where $x$ is in radians.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the trig form",
          "workingLatex": "\\int 3\\sin x\\,dx",
          "explanation": "Match the integrand to a standard trigonometric antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the standard result",
          "workingLatex": "\\int \\sin x\\,dx = -\\cos x + c,\\quad \\int \\cos x\\,dx = \\sin x + c",
          "explanation": "Sine integrates to negative cosine; cosine integrates to sine. These follow from the derivatives of $\\cos x$ and $\\sin x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the result directly",
          "workingLatex": "-3\\cos x",
          "explanation": "If the argument is $ax$, divide by $a$ after integrating — the reverse of the chain rule.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Include the constant",
          "workingLatex": "-3\\cos x + c",
          "explanation": "Add $+c$ for the indefinite integral.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check by differentiating",
          "workingLatex": "\\frac{d}{dx}\\left(-3\\cos x\\right)",
          "explanation": "Differentiating should return the original integrand.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "\\int 3\\sin x\\,dx = -3\\cos x + c",
          "explanation": "This is the required antiderivative.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int 3\\sin x\\,dx = -3\\cos x + c$."
    }
  },
  {
    "id": "al.y2.pure.standard-integrals.q014",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "standard integrals",
      "trigonometry",
      "cosine"
    ],
    "questionText": "Find $\\displaystyle\\int 2\\cos x\\,dx$, where $x$ is in radians.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the trig form",
          "workingLatex": "\\int 2\\cos x\\,dx",
          "explanation": "Match the integrand to a standard trigonometric antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the standard result",
          "workingLatex": "\\int \\sin x\\,dx = -\\cos x + c,\\quad \\int \\cos x\\,dx = \\sin x + c",
          "explanation": "Sine integrates to negative cosine; cosine integrates to sine. These follow from the derivatives of $\\cos x$ and $\\sin x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the result directly",
          "workingLatex": "2\\sin x",
          "explanation": "If the argument is $ax$, divide by $a$ after integrating — the reverse of the chain rule.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Include the constant",
          "workingLatex": "2\\sin x + c",
          "explanation": "Add $+c$ for the indefinite integral.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check by differentiating",
          "workingLatex": "\\frac{d}{dx}\\left(2\\sin x\\right)",
          "explanation": "Differentiating should return the original integrand.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "\\int 2\\cos x\\,dx = 2\\sin x + c",
          "explanation": "This is the required antiderivative.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int 2\\cos x\\,dx = 2\\sin x + c$."
    }
  },
  {
    "id": "al.y2.pure.standard-integrals.q015",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "standard integrals",
      "trigonometry",
      "cosine"
    ],
    "questionText": "Find $\\displaystyle\\int -\\cos x\\,dx$, where $x$ is in radians.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the trig form",
          "workingLatex": "\\int -\\cos x\\,dx",
          "explanation": "Match the integrand to a standard trigonometric antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the standard result",
          "workingLatex": "\\int \\sin x\\,dx = -\\cos x + c,\\quad \\int \\cos x\\,dx = \\sin x + c",
          "explanation": "Sine integrates to negative cosine; cosine integrates to sine. These follow from the derivatives of $\\cos x$ and $\\sin x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the result directly",
          "workingLatex": "-\\sin x",
          "explanation": "If the argument is $ax$, divide by $a$ after integrating — the reverse of the chain rule.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Include the constant",
          "workingLatex": "-\\sin x + c",
          "explanation": "Add $+c$ for the indefinite integral.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check by differentiating",
          "workingLatex": "\\frac{d}{dx}\\left(-\\sin x\\right)",
          "explanation": "Differentiating should return the original integrand.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "\\int -\\cos x\\,dx = -\\sin x + c",
          "explanation": "This is the required antiderivative.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int -\\cos x\\,dx = -\\sin x + c$."
    }
  },
  {
    "id": "al.y2.pure.standard-integrals.q016",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "standard integrals",
      "trigonometry",
      "linear argument"
    ],
    "questionText": "Find $\\displaystyle\\int \\sin(2x)\\,dx$, where $x$ is in radians.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the trig form",
          "workingLatex": "\\int \\sin(2x)\\,dx",
          "explanation": "Match the integrand to a standard trigonometric antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the standard result",
          "workingLatex": "\\int \\sin x\\,dx = -\\cos x + c,\\quad \\int \\cos x\\,dx = \\sin x + c",
          "explanation": "Sine integrates to negative cosine; cosine integrates to sine. These follow from the derivatives of $\\cos x$ and $\\sin x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Account for the inner linear factor",
          "workingLatex": "-\\dfrac{1}{2}\\cos(2x)",
          "explanation": "If the argument is $ax$, divide by $a$ after integrating — the reverse of the chain rule.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Include the constant",
          "workingLatex": "-\\dfrac{1}{2}\\cos(2x) + c",
          "explanation": "Add $+c$ for the indefinite integral.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check by differentiating",
          "workingLatex": "\\frac{d}{dx}\\left(-\\dfrac{1}{2}\\cos(2x)\\right)",
          "explanation": "Differentiating should return the original integrand.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "\\int \\sin(2x)\\,dx = -\\dfrac{1}{2}\\cos(2x) + c",
          "explanation": "This is the required antiderivative.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\sin(2x)\\,dx = -\\dfrac{1}{2}\\cos(2x) + c$."
    }
  },
  {
    "id": "al.y2.pure.standard-integrals.q017",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "standard integrals",
      "trigonometry",
      "linear argument"
    ],
    "questionText": "Find $\\displaystyle\\int \\cos(3x)\\,dx$, where $x$ is in radians.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the trig form",
          "workingLatex": "\\int \\cos(3x)\\,dx",
          "explanation": "Match the integrand to a standard trigonometric antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the standard result",
          "workingLatex": "\\int \\sin x\\,dx = -\\cos x + c,\\quad \\int \\cos x\\,dx = \\sin x + c",
          "explanation": "Sine integrates to negative cosine; cosine integrates to sine. These follow from the derivatives of $\\cos x$ and $\\sin x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Account for the inner linear factor",
          "workingLatex": "\\dfrac{1}{3}\\sin(3x)",
          "explanation": "If the argument is $ax$, divide by $a$ after integrating — the reverse of the chain rule.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Include the constant",
          "workingLatex": "\\dfrac{1}{3}\\sin(3x) + c",
          "explanation": "Add $+c$ for the indefinite integral.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check by differentiating",
          "workingLatex": "\\frac{d}{dx}\\left(\\dfrac{1}{3}\\sin(3x)\\right)",
          "explanation": "Differentiating should return the original integrand.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "\\int \\cos(3x)\\,dx = \\dfrac{1}{3}\\sin(3x) + c",
          "explanation": "This is the required antiderivative.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\cos(3x)\\,dx = \\dfrac{1}{3}\\sin(3x) + c$."
    }
  },
  {
    "id": "al.y2.pure.standard-integrals.q018",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "standard integrals",
      "reciprocal",
      "linear argument"
    ],
    "questionText": "Find $\\displaystyle\\int \\dfrac{1}{x+2}\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise the form",
          "workingLatex": "\\int \\dfrac{1}{x+2}\\,dx",
          "explanation": "The denominator is a linear function of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall $\\int \\dfrac{1}{ax+b}\\,dx$",
          "workingLatex": "\\int \\dfrac{1}{x+2}\\,dx = \\dfrac{1}{a}\\ln|x+2| + c",
          "explanation": "Integrating $\\dfrac{1}{ax+b}$ gives $\\dfrac{1}{a}\\ln|ax+b|$, because differentiating $\\ln|ax+b|$ produces $\\dfrac{a}{ax+b}$ and the $a$ cancels with $\\dfrac{1}{a}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the rule",
          "workingLatex": "\\ln|x+2|",
          "explanation": "Identify $a$ and the linear expression in the denominator.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add $+c$",
          "workingLatex": "\\ln|x+2| + c",
          "explanation": "Include the constant of integration.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check the derivative",
          "workingLatex": "\\frac{d}{dx}\\left(\\ln|x+2|\\right)",
          "explanation": "Differentiating the logarithm should recover the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "\\int \\dfrac{1}{x+2}\\,dx = \\ln|x+2| + c",
          "explanation": "This is the required antiderivative.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\dfrac{1}{x+2}\\,dx = \\ln|x+2| + c$."
    }
  },
  {
    "id": "al.y2.pure.standard-integrals.q019",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "standard integrals",
      "reciprocal",
      "linear argument"
    ],
    "questionText": "Find $\\displaystyle\\int \\dfrac{1}{2x-1}\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise the form",
          "workingLatex": "\\int \\dfrac{1}{2x-1}\\,dx",
          "explanation": "The denominator is a linear function of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall $\\int \\dfrac{1}{ax+b}\\,dx$",
          "workingLatex": "\\int \\dfrac{1}{2x-1}\\,dx = \\dfrac{1}{a}\\ln|2x-1| + c",
          "explanation": "Integrating $\\dfrac{1}{ax+b}$ gives $\\dfrac{1}{a}\\ln|ax+b|$, because differentiating $\\ln|ax+b|$ produces $\\dfrac{a}{ax+b}$ and the $a$ cancels with $\\dfrac{1}{a}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the rule",
          "workingLatex": "\\dfrac{1}{2}\\ln|2x-1|",
          "explanation": "Identify $a$ and the linear expression in the denominator.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add $+c$",
          "workingLatex": "\\dfrac{1}{2}\\ln|2x-1| + c",
          "explanation": "Include the constant of integration.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check the derivative",
          "workingLatex": "\\frac{d}{dx}\\left(\\dfrac{1}{2}\\ln|2x-1|\\right)",
          "explanation": "Differentiating the logarithm should recover the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "\\int \\dfrac{1}{2x-1}\\,dx = \\dfrac{1}{2}\\ln|2x-1| + c",
          "explanation": "This is the required antiderivative.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\dfrac{1}{2x-1}\\,dx = \\dfrac{1}{2}\\ln|2x-1| + c$."
    }
  },
  {
    "id": "al.y2.pure.standard-integrals.q020",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "standard integrals",
      "reciprocal",
      "linear argument"
    ],
    "questionText": "Find $\\displaystyle\\int \\dfrac{3}{x-4}\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise the form",
          "workingLatex": "\\int \\dfrac{3}{x-4}\\,dx",
          "explanation": "The denominator is a linear function of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall $\\int \\dfrac{1}{ax+b}\\,dx$",
          "workingLatex": "\\int \\dfrac{1}{x-4}\\,dx = \\dfrac{1}{a}\\ln|x-4| + c",
          "explanation": "Integrating $\\dfrac{1}{ax+b}$ gives $\\dfrac{1}{a}\\ln|ax+b|$, because differentiating $\\ln|ax+b|$ produces $\\dfrac{a}{ax+b}$ and the $a$ cancels with $\\dfrac{1}{a}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the rule",
          "workingLatex": "3\\ln|x-4|",
          "explanation": "Identify $a$ and the linear expression in the denominator.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add $+c$",
          "workingLatex": "3\\ln|x-4| + c",
          "explanation": "Include the constant of integration.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check the derivative",
          "workingLatex": "\\frac{d}{dx}\\left(3\\ln|x-4|\\right)",
          "explanation": "Differentiating the logarithm should recover the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "\\int \\dfrac{3}{x-4}\\,dx = 3\\ln|x-4| + c",
          "explanation": "This is the required antiderivative.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\dfrac{3}{x-4}\\,dx = 3\\ln|x-4| + c$."
    }
  },
  {
    "id": "al.y2.pure.standard-integrals.q021",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "standard integrals",
      "sum rule",
      "exponential",
      "trigonometry"
    ],
    "questionText": "Find $\\displaystyle\\int \\left(e^{x} + \\sin x\\right) dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Use linearity",
          "workingLatex": "\\int (e^{x} + \\sin x)\\,dx = \\int e^{x}\\,dx + \\int \\sin x\\,dx",
          "explanation": "Integration is linear: the integral of a sum is the sum of the integrals.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate $e^{x}$",
          "workingLatex": "\\int e^{x}\\,dx = e^{x}",
          "explanation": "The exponential is its own antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate $\\sin x$",
          "workingLatex": "\\int \\sin x\\,dx = -\\cos x",
          "explanation": "Sine integrates to negative cosine.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Combine",
          "workingLatex": "e^{x} - \\cos x + c",
          "explanation": "Add the two results and include $+c$ once at the end.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check",
          "workingLatex": "\\frac{d}{dx}(e^{x} - \\cos x + c) = e^{x} + \\sin x",
          "explanation": "Differentiating returns the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "\\int (e^{x} + \\sin x)\\,dx = e^{x} - \\cos x + c",
          "explanation": "This is the required antiderivative.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\left(e^{x} + \\sin x\\right) dx = e^{x} - \\cos x + c$."
    }
  },
  {
    "id": "al.y2.pure.standard-integrals.q022",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "tags": [
      "standard integrals",
      "standard results"
    ],
    "questionText": "Write down the standard integrals for $e^{x}$, $\\dfrac{1}{x}$, $\\sin x$ and $\\cos x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Exponential",
          "workingLatex": "\\int e^{x}\\,dx = e^{x} + c",
          "explanation": "$e^{x}$ is the unique function (up to scaling) that reproduces itself on differentiation and integration.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Reciprocal",
          "workingLatex": "\\int \\dfrac{1}{x}\\,dx = \\ln|x| + c",
          "explanation": "The derivative of $\\ln|x|$ is $\\dfrac{1}{x}$, so integration reverses this.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Sine",
          "workingLatex": "\\int \\sin x\\,dx = -\\cos x + c",
          "explanation": "Since $\\dfrac{d}{dx}(-\\cos x) = \\sin x$, sine integrates to negative cosine.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Cosine",
          "workingLatex": "\\int \\cos x\\,dx = \\sin x + c",
          "explanation": "Since $\\dfrac{d}{dx}(\\sin x) = \\cos x$, cosine integrates to sine.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Radians",
          "workingLatex": "\\text{all angles in radians}",
          "explanation": "These standard results assume $x$ is measured in radians.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Summary",
          "workingLatex": "\\int e^{x}\\,dx,\\ \\int \\tfrac{1}{x}\\,dx,\\ \\int \\sin x\\,dx,\\ \\int \\cos x\\,dx",
          "explanation": "These four results are the building blocks for Year 2 integration.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\int e^{x}\\,dx = e^{x}+c$, $\\int \\dfrac{1}{x}\\,dx = \\ln|x|+c$, $\\int \\sin x\\,dx = -\\cos x+c$, $\\int \\cos x\\,dx = \\sin x+c$."
    }
  },
  {
    "id": "al.y2.pure.standard-integrals.q023",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "standard integrals",
      "definite integral",
      "exponential"
    ],
    "questionText": "Evaluate $\\displaystyle\\int_{0}^{1} e^{x}\\,dx$ exactly.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the definite integral",
          "workingLatex": "\\displaystyle\\int_{0}^{1} e^{x}\\,dx",
          "explanation": "Write the definite integral with its limits.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the antiderivative",
          "workingLatex": "F(x) = e^{x}",
          "explanation": "Find an antiderivative using the standard integral result.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate at the upper limit",
          "workingLatex": "F(1) = e",
          "explanation": "Substitute the upper limit into the antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate at the lower limit",
          "workingLatex": "F(0) = e^{0} = 1",
          "explanation": "Substitute the lower limit into the antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Subtract",
          "workingLatex": "e - 1",
          "explanation": "Apply the evaluation theorem: $F(b) - F(a)$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret",
          "workingLatex": "\\text{area under } y=e^{x} \\text{ from } 0 \\text{ to } 1",
          "explanation": "Interpret or verify the result makes sense.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\displaystyle\\int_{0}^{1} e^{x}\\,dx = e - 1",
          "explanation": "State the exact value of the integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{0}^{1} e^{x}\\,dx = e - 1$."
    }
  },
  {
    "id": "al.y2.pure.standard-integrals.q024",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "standard integrals",
      "definite integral",
      "reciprocal"
    ],
    "questionText": "Evaluate $\\displaystyle\\int_{1}^{e} \\dfrac{1}{x}\\,dx$ exactly.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up",
          "workingLatex": "\\displaystyle\\int_{1}^{e} \\dfrac{1}{x}\\,dx",
          "explanation": "Write the definite integral with its limits.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Antiderivative",
          "workingLatex": "F(x) = \\ln x \\quad (x>0)",
          "explanation": "Find an antiderivative using the standard integral result.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Upper limit",
          "workingLatex": "F(e) = \\ln e = 1",
          "explanation": "Substitute the upper limit into the antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Lower limit",
          "workingLatex": "F(1) = \\ln 1 = 0",
          "explanation": "Substitute the lower limit into the antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Subtract",
          "workingLatex": "1 - 0 = 1",
          "explanation": "Apply the evaluation theorem: $F(b) - F(a)$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Note",
          "workingLatex": "\\ln e = 1 \\text{ by definition of } e",
          "explanation": "Interpret or verify the result makes sense.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "\\displaystyle\\int_{1}^{e} \\dfrac{1}{x}\\,dx = 1",
          "explanation": "State the exact value of the integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{1}^{e} \\dfrac{1}{x}\\,dx = 1$."
    }
  },
  {
    "id": "al.y2.pure.standard-integrals.q025",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "standard integrals",
      "definite integral",
      "trigonometry"
    ],
    "questionText": "Evaluate $\\displaystyle\\int_{0}^{\\dfrac{\\pi}{2}} \\sin x\\,dx$ exactly.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up",
          "workingLatex": "\\displaystyle\\int_{0}^{\\pi/2} \\sin x\\,dx",
          "explanation": "Write the definite integral with its limits.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Antiderivative",
          "workingLatex": "F(x) = -\\cos x",
          "explanation": "Find an antiderivative using the standard integral result.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Upper limit",
          "workingLatex": "F(\\pi/2) = -\\cos(\\pi/2) = 0",
          "explanation": "Substitute the upper limit into the antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Lower limit",
          "workingLatex": "F(0) = -\\cos 0 = -1",
          "explanation": "Substitute the lower limit into the antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Subtract",
          "workingLatex": "0 - (-1) = 1",
          "explanation": "Apply the evaluation theorem: $F(b) - F(a)$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Geometric check",
          "workingLatex": "\\text{one unit of area under half a sine arch}",
          "explanation": "Interpret or verify the result makes sense.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "\\displaystyle\\int_{0}^{\\pi/2} \\sin x\\,dx = 1",
          "explanation": "State the exact value of the integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{0}^{\\dfrac{\\pi}{2}} \\sin x\\,dx = 1$."
    }
  },
  {
    "id": "al.y2.pure.standard-integrals.q026",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "standard integrals",
      "definite integral",
      "trigonometry"
    ],
    "questionText": "Evaluate $\\displaystyle\\int_{0}^{\\pi} \\cos x\\,dx$ exactly.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up",
          "workingLatex": "\\displaystyle\\int_{0}^{\\pi} \\cos x\\,dx",
          "explanation": "Write the definite integral with its limits.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Antiderivative",
          "workingLatex": "F(x) = \\sin x",
          "explanation": "Find an antiderivative using the standard integral result.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Upper limit",
          "workingLatex": "F(\\pi) = \\sin\\pi = 0",
          "explanation": "Substitute the upper limit into the antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Lower limit",
          "workingLatex": "F(0) = \\sin 0 = 0",
          "explanation": "Substitute the lower limit into the antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Subtract",
          "workingLatex": "0 - 0 = 0",
          "explanation": "Apply the evaluation theorem: $F(b) - F(a)$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Symmetry",
          "workingLatex": "\\cos x \\text{ has equal positive and negative area over } [0,\\pi]",
          "explanation": "Interpret or verify the result makes sense.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "\\displaystyle\\int_{0}^{\\pi} \\cos x\\,dx = 0",
          "explanation": "State the exact value of the integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{0}^{\\pi} \\cos x\\,dx = 0$."
    }
  },
  {
    "id": "al.y2.pure.standard-integrals.q027",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "standard integrals",
      "definite integral",
      "exponential"
    ],
    "questionText": "Evaluate $\\displaystyle\\int_{0}^{1} e^{-2x}\\,dx$ exactly.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up",
          "workingLatex": "\\displaystyle\\int_{0}^{1} e^{-2x}\\,dx",
          "explanation": "Write the definite integral with its limits.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Antiderivative",
          "workingLatex": "F(x) = -\\dfrac{1}{2}e^{-2x}",
          "explanation": "Find an antiderivative using the standard integral result.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Upper limit",
          "workingLatex": "F(1) = -\\dfrac{1}{2}e^{-2}",
          "explanation": "Substitute the upper limit into the antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Lower limit",
          "workingLatex": "F(0) = -\\dfrac{1}{2}",
          "explanation": "Substitute the lower limit into the antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Subtract",
          "workingLatex": "-\\dfrac{1}{2}e^{-2} + \\dfrac{1}{2} = \\dfrac{1-e^{-2}}{2}",
          "explanation": "Apply the evaluation theorem: $F(b) - F(a)$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check sign",
          "workingLatex": "\\text{integrand positive, so area is positive}",
          "explanation": "Interpret or verify the result makes sense.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "\\displaystyle\\int_{0}^{1} e^{-2x}\\,dx = \\dfrac{1-e^{-2}}{2}",
          "explanation": "State the exact value of the integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{0}^{1} e^{-2x}\\,dx = \\dfrac{1-e^{-2}}{2}$."
    }
  },
  {
    "id": "al.y2.pure.standard-integrals.q028",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "standard integrals",
      "definite integral",
      "reciprocal"
    ],
    "questionText": "Evaluate $\\displaystyle\\int_{1}^{4} \\dfrac{1}{x}\\,dx$ exactly.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up",
          "workingLatex": "\\displaystyle\\int_{1}^{4} \\dfrac{1}{x}\\,dx",
          "explanation": "Write the definite integral with its limits.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Antiderivative",
          "workingLatex": "F(x) = \\ln x",
          "explanation": "Find an antiderivative using the standard integral result.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Upper limit",
          "workingLatex": "F(4) = \\ln 4",
          "explanation": "Substitute the upper limit into the antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Lower limit",
          "workingLatex": "F(1) = 0",
          "explanation": "Substitute the lower limit into the antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Subtract",
          "workingLatex": "\\ln 4",
          "explanation": "Apply the evaluation theorem: $F(b) - F(a)$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Log laws",
          "workingLatex": "\\ln 4 = \\ln(2^{2}) = 2\\ln 2",
          "explanation": "Interpret or verify the result makes sense.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "\\displaystyle\\int_{1}^{4} \\dfrac{1}{x}\\,dx = \\ln 4",
          "explanation": "State the exact value of the integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{1}^{4} \\dfrac{1}{x}\\,dx = \\ln 4$."
    }
  },
  {
    "id": "al.y2.pure.standard-integrals.q029",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "standard integrals",
      "definite integral",
      "exponential"
    ],
    "questionText": "Evaluate $\\displaystyle\\int_{0}^{\\ln 2} e^{x}\\,dx$ exactly.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up",
          "workingLatex": "\\displaystyle\\int_{0}^{\\ln 2} e^{x}\\,dx",
          "explanation": "Write the definite integral with its limits.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Antiderivative",
          "workingLatex": "F(x) = e^{x}",
          "explanation": "Find an antiderivative using the standard integral result.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Upper limit",
          "workingLatex": "F(\\ln 2) = e^{\\ln 2} = 2",
          "explanation": "Substitute the upper limit into the antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Lower limit",
          "workingLatex": "F(0) = 1",
          "explanation": "Substitute the lower limit into the antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Subtract",
          "workingLatex": "2 - 1 = 1",
          "explanation": "Apply the evaluation theorem: $F(b) - F(a)$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Use",
          "workingLatex": "e^{\\ln 2} = 2",
          "explanation": "Interpret or verify the result makes sense.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "\\displaystyle\\int_{0}^{\\ln 2} e^{x}\\,dx = 1",
          "explanation": "State the exact value of the integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{0}^{\\ln 2} e^{x}\\,dx = 1$."
    }
  },
  {
    "id": "al.y2.pure.standard-integrals.q030",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "standard integrals",
      "definite integral",
      "trigonometry"
    ],
    "questionText": "Evaluate $\\displaystyle\\int_{0}^{\\dfrac{\\pi}{4}} \\sin(2x)\\,dx$ exactly.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up",
          "workingLatex": "\\displaystyle\\int_{0}^{\\pi/4} \\sin(2x)\\,dx",
          "explanation": "Write the definite integral with its limits.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Antiderivative",
          "workingLatex": "F(x) = -\\dfrac{1}{2}\\cos(2x)",
          "explanation": "Find an antiderivative using the standard integral result.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Upper limit",
          "workingLatex": "F(\\pi/4) = -\\dfrac{1}{2}\\cos(\\pi/2) = 0",
          "explanation": "Substitute the upper limit into the antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Lower limit",
          "workingLatex": "F(0) = -\\dfrac{1}{2}",
          "explanation": "Substitute the lower limit into the antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Subtract",
          "workingLatex": "0 - (-\\dfrac{1}{2}) = \\dfrac{1}{2}",
          "explanation": "Apply the evaluation theorem: $F(b) - F(a)$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check",
          "workingLatex": "\\text{positive integrand on } [0,\\pi/4]",
          "explanation": "Interpret or verify the result makes sense.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "\\displaystyle\\int_{0}^{\\pi/4} \\sin(2x)\\,dx = \\dfrac{1}{2}",
          "explanation": "State the exact value of the integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{0}^{\\dfrac{\\pi}{4}} \\sin(2x)\\,dx = \\dfrac{1}{2}$."
    }
  },
  {
    "id": "al.y2.pure.standard-integrals.q031",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "standard integrals",
      "initial value",
      "exponential"
    ],
    "questionText": "Given $\\dfrac{dy}{dx} = 3e^{2x}$ and that $y = 5$ when $x = 0$, find $y$ in terms of $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Integrate to find $y$",
          "workingLatex": "\\int 3e^{2x}\\,dx",
          "explanation": "Integrate the gradient function to obtain $y$ up to a constant.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply standard integrals term by term",
          "workingLatex": "y = \\dfrac{3}{2}e^{2x} + c",
          "explanation": "Use the standard results for each term in the derivative.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Include the constant of integration",
          "workingLatex": "y = \\ldots + c",
          "explanation": "Indefinite integration introduces an unknown constant $c$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the given point",
          "workingLatex": "x = 0,\\ y = 5",
          "explanation": "Use the known point on the curve to find $c$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for $c$",
          "workingLatex": "c = \\ldots",
          "explanation": "Rearrange the equation from the substitution.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the equation of the curve",
          "workingLatex": "y = \\dfrac{3}{2}e^{2x} + \\dfrac{7}{2}",
          "explanation": "Substitute $c$ back to give $y$ in terms of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify",
          "workingLatex": "\\text{check gradient and point}",
          "explanation": "Differentiate and substitute the point to confirm.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the answer",
          "workingLatex": "y = \\dfrac{3}{2}e^{2x} + \\dfrac{7}{2}",
          "explanation": "This is the equation of the curve.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Domain note",
          "workingLatex": "\\text{all } x",
          "explanation": "State any restriction from logarithms or reciprocals.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = \\dfrac{3}{2}e^{2x} + \\dfrac{7}{2}$."
    }
  },
  {
    "id": "al.y2.pure.standard-integrals.q032",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "standard integrals",
      "initial value",
      "reciprocal"
    ],
    "questionText": "A curve has gradient function $\\dfrac{dy}{dx} = \\dfrac{2}{x}$, $x > 0$. The curve passes through the point $(e, 4)$. Find $y$ in terms of $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Integrate to find $y$",
          "workingLatex": "\\int \\dfrac{2}{x}\\,dx",
          "explanation": "Integrate the gradient function to obtain $y$ up to a constant.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply standard integrals term by term",
          "workingLatex": "y = 2\\ln x + c",
          "explanation": "Use the standard results for each term in the derivative.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Include the constant of integration",
          "workingLatex": "y = \\ldots + c",
          "explanation": "Indefinite integration introduces an unknown constant $c$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the given point",
          "workingLatex": "x = e,\\ y = 4",
          "explanation": "Use the known point on the curve to find $c$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for $c$",
          "workingLatex": "c = \\ldots",
          "explanation": "Rearrange the equation from the substitution.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the equation of the curve",
          "workingLatex": "y = 2\\ln x + 2",
          "explanation": "Substitute $c$ back to give $y$ in terms of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify",
          "workingLatex": "\\text{check gradient and point}",
          "explanation": "Differentiate and substitute the point to confirm.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the answer",
          "workingLatex": "y = 2\\ln x + 2",
          "explanation": "This is the equation of the curve.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Domain note",
          "workingLatex": "x > 0",
          "explanation": "State any restriction from logarithms or reciprocals.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = 2\\ln x + 2$."
    }
  },
  {
    "id": "al.y2.pure.standard-integrals.q033",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "standard integrals",
      "initial value",
      "trigonometry"
    ],
    "questionText": "Given $\\dfrac{dy}{dx} = \\cos x$ and that $y = 3$ when $x = \\dfrac{\\pi}{2}$, find $y$ in terms of $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Integrate to find $y$",
          "workingLatex": "\\int \\cos x\\,dx",
          "explanation": "Integrate the gradient function to obtain $y$ up to a constant.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply standard integrals term by term",
          "workingLatex": "y = \\sin x + c",
          "explanation": "Use the standard results for each term in the derivative.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Include the constant of integration",
          "workingLatex": "y = \\ldots + c",
          "explanation": "Indefinite integration introduces an unknown constant $c$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the given point",
          "workingLatex": "x = \\dfrac{\\pi}{2},\\ y = 3",
          "explanation": "Use the known point on the curve to find $c$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for $c$",
          "workingLatex": "c = \\ldots",
          "explanation": "Rearrange the equation from the substitution.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the equation of the curve",
          "workingLatex": "y = \\sin x + 2",
          "explanation": "Substitute $c$ back to give $y$ in terms of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify",
          "workingLatex": "\\text{check gradient and point}",
          "explanation": "Differentiate and substitute the point to confirm.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the answer",
          "workingLatex": "y = \\sin x + 2",
          "explanation": "This is the equation of the curve.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Domain note",
          "workingLatex": "\\text{all } x",
          "explanation": "State any restriction from logarithms or reciprocals.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = \\sin x + 2$."
    }
  },
  {
    "id": "al.y2.pure.standard-integrals.q034",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "standard integrals",
      "initial value",
      "mixed"
    ],
    "questionText": "Given $\\dfrac{dy}{dx} = e^{x} + \\dfrac{1}{x}$, $x > 0$, and that the curve passes through $(1, e)$, find $y$ in terms of $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Integrate to find $y$",
          "workingLatex": "\\int e^{x} + \\dfrac{1}{x}\\,dx",
          "explanation": "Integrate the gradient function to obtain $y$ up to a constant.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply standard integrals term by term",
          "workingLatex": "y = e^{x} + c",
          "explanation": "Use the standard results for each term in the derivative.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Include the constant of integration",
          "workingLatex": "y = \\ldots + c",
          "explanation": "Indefinite integration introduces an unknown constant $c$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the given point",
          "workingLatex": "x = 1,\\ y = e",
          "explanation": "Use the known point on the curve to find $c$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for $c$",
          "workingLatex": "c = \\ldots",
          "explanation": "Rearrange the equation from the substitution.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the equation of the curve",
          "workingLatex": "y = e^{x} + \\ln x",
          "explanation": "Substitute $c$ back to give $y$ in terms of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify",
          "workingLatex": "\\text{check gradient and point}",
          "explanation": "Differentiate and substitute the point to confirm.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the answer",
          "workingLatex": "y = e^{x} + \\ln x",
          "explanation": "This is the equation of the curve.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Domain note",
          "workingLatex": "x > 0",
          "explanation": "State any restriction from logarithms or reciprocals.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = e^{x} + \\ln x$."
    }
  },
  {
    "id": "al.y2.pure.standard-integrals.q035",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "standard integrals",
      "sum rule"
    ],
    "questionText": "Find $\\displaystyle\\int \\left(2e^{3x} + \\sin x\\right) dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Split the integral",
          "workingLatex": "\\int 2e^{3x} + \\sin x\\,dx",
          "explanation": "Use linearity to integrate each term separately.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate the exponential / trig / reciprocal terms",
          "workingLatex": "\\text{term by term}",
          "explanation": "Apply the relevant standard integral to each part.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Watch for linear arguments",
          "workingLatex": "\\text{divide by inner coefficient when needed}",
          "explanation": "For $e^{kx}$, $\\sin(ax)$, $\\dfrac{1}{ax+b}$, include the factor $\\dfrac{1}{a}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Combine the results",
          "workingLatex": "\\dfrac{2}{3}e^{3x} - \\cos x",
          "explanation": "Add the antiderivatives of each term.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Add $+c$",
          "workingLatex": "\\dfrac{2}{3}e^{3x} - \\cos x + c",
          "explanation": "One constant covers the whole indefinite integral.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Differentiate to check",
          "workingLatex": "\\frac{d}{dx}\\left(\\dfrac{2}{3}e^{3x} - \\cos x\\right)",
          "explanation": "The derivative should match the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Confirm",
          "workingLatex": "\\text{domain}",
          "explanation": "All terms are defined on the standard domain.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the answer",
          "workingLatex": "\\int (2e^{3x} + \\sin x)\\,dx = \\dfrac{2}{3}e^{3x} - \\cos x + c",
          "explanation": "This is the required antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Summary",
          "workingLatex": "\\dfrac{2}{3}e^{3x} - \\cos x + c",
          "explanation": "Collect the final result.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\left(2e^{3x} + \\sin x\\right) dx = \\dfrac{2}{3}e^{3x} - \\cos x + c$."
    }
  },
  {
    "id": "al.y2.pure.standard-integrals.q036",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "standard integrals",
      "sum rule"
    ],
    "questionText": "Find $\\displaystyle\\int \\left(e^{x} + \\dfrac{3}{x}\\right) dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Split the integral",
          "workingLatex": "\\int e^{x} + \\dfrac{3}{x}\\,dx",
          "explanation": "Use linearity to integrate each term separately.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate the exponential / trig / reciprocal terms",
          "workingLatex": "\\text{term by term}",
          "explanation": "Apply the relevant standard integral to each part.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Watch for linear arguments",
          "workingLatex": "\\text{divide by inner coefficient when needed}",
          "explanation": "For $e^{kx}$, $\\sin(ax)$, $\\dfrac{1}{ax+b}$, include the factor $\\dfrac{1}{a}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Combine the results",
          "workingLatex": "e^{x} + 3\\ln|x|",
          "explanation": "Add the antiderivatives of each term.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Add $+c$",
          "workingLatex": "e^{x} + 3\\ln|x| + c",
          "explanation": "One constant covers the whole indefinite integral.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Differentiate to check",
          "workingLatex": "\\frac{d}{dx}\\left(e^{x} + 3\\ln|x|\\right)",
          "explanation": "The derivative should match the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Note domain restrictions",
          "workingLatex": "\\text{domain}",
          "explanation": "Include $| \\cdot |$ in logarithms and state $x\\neq 0$ where needed.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the answer",
          "workingLatex": "\\int (e^{x} + \\dfrac{3}{x})\\,dx = e^{x} + 3\\ln|x| + c",
          "explanation": "This is the required antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Summary",
          "workingLatex": "e^{x} + 3\\ln|x| + c",
          "explanation": "Collect the final result.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\left(e^{x} + \\dfrac{3}{x}\\right) dx = e^{x} + 3\\ln|x| + c$."
    }
  },
  {
    "id": "al.y2.pure.standard-integrals.q037",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "standard integrals",
      "sum rule"
    ],
    "questionText": "Find $\\displaystyle\\int \\left(\\sin(2x) + \\cos(3x)\\right) dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Split the integral",
          "workingLatex": "\\int \\sin(2x) + \\cos(3x)\\,dx",
          "explanation": "Use linearity to integrate each term separately.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate the exponential / trig / reciprocal terms",
          "workingLatex": "\\text{term by term}",
          "explanation": "Apply the relevant standard integral to each part.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Watch for linear arguments",
          "workingLatex": "\\text{divide by inner coefficient when needed}",
          "explanation": "For $e^{kx}$, $\\sin(ax)$, $\\dfrac{1}{ax+b}$, include the factor $\\dfrac{1}{a}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Combine the results",
          "workingLatex": "-\\dfrac{1}{2}\\cos(2x) + \\dfrac{1}{3}\\sin(3x)",
          "explanation": "Add the antiderivatives of each term.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Add $+c$",
          "workingLatex": "-\\dfrac{1}{2}\\cos(2x) + \\dfrac{1}{3}\\sin(3x) + c",
          "explanation": "One constant covers the whole indefinite integral.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Differentiate to check",
          "workingLatex": "\\frac{d}{dx}\\left(-\\dfrac{1}{2}\\cos(2x) + \\dfrac{1}{3}\\sin(3x)\\right)",
          "explanation": "The derivative should match the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Confirm",
          "workingLatex": "\\text{domain}",
          "explanation": "All terms are defined on the standard domain.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the answer",
          "workingLatex": "\\int (\\sin(2x) + \\cos(3x))\\,dx = -\\dfrac{1}{2}\\cos(2x) + \\dfrac{1}{3}\\sin(3x) + c",
          "explanation": "This is the required antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Summary",
          "workingLatex": "-\\dfrac{1}{2}\\cos(2x) + \\dfrac{1}{3}\\sin(3x) + c",
          "explanation": "Collect the final result.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\left(\\sin(2x) + \\cos(3x)\\right) dx = -\\dfrac{1}{2}\\cos(2x) + \\dfrac{1}{3}\\sin(3x) + c$."
    }
  },
  {
    "id": "al.y2.pure.standard-integrals.q038",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "standard integrals",
      "sum rule"
    ],
    "questionText": "Find $\\displaystyle\\int \\left(e^{x} - e^{-x}\\right) dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Split the integral",
          "workingLatex": "\\int e^{x} - e^{-x}\\,dx",
          "explanation": "Use linearity to integrate each term separately.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate the exponential / trig / reciprocal terms",
          "workingLatex": "\\text{term by term}",
          "explanation": "Apply the relevant standard integral to each part.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Watch for linear arguments",
          "workingLatex": "\\text{divide by inner coefficient when needed}",
          "explanation": "For $e^{kx}$, $\\sin(ax)$, $\\dfrac{1}{ax+b}$, include the factor $\\dfrac{1}{a}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Combine the results",
          "workingLatex": "e^{x} + e^{-x}",
          "explanation": "Add the antiderivatives of each term.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Add $+c$",
          "workingLatex": "e^{x} + e^{-x} + c",
          "explanation": "One constant covers the whole indefinite integral.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Differentiate to check",
          "workingLatex": "\\frac{d}{dx}\\left(e^{x} + e^{-x}\\right)",
          "explanation": "The derivative should match the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Confirm",
          "workingLatex": "\\text{domain}",
          "explanation": "All terms are defined on the standard domain.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the answer",
          "workingLatex": "\\int (e^{x} - e^{-x})\\,dx = e^{x} + e^{-x} + c",
          "explanation": "This is the required antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Summary",
          "workingLatex": "e^{x} + e^{-x} + c",
          "explanation": "Collect the final result.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\left(e^{x} - e^{-x}\\right) dx = e^{x} + e^{-x} + c$."
    }
  },
  {
    "id": "al.y2.pure.standard-integrals.q039",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "standard integrals",
      "sum rule"
    ],
    "questionText": "Find $\\displaystyle\\int \\left(5e^{2x} - \\dfrac{4}{x}\\right) dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Split the integral",
          "workingLatex": "\\int 5e^{2x} - \\dfrac{4}{x}\\,dx",
          "explanation": "Use linearity to integrate each term separately.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate the exponential / trig / reciprocal terms",
          "workingLatex": "\\text{term by term}",
          "explanation": "Apply the relevant standard integral to each part.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Watch for linear arguments",
          "workingLatex": "\\text{divide by inner coefficient when needed}",
          "explanation": "For $e^{kx}$, $\\sin(ax)$, $\\dfrac{1}{ax+b}$, include the factor $\\dfrac{1}{a}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Combine the results",
          "workingLatex": "\\dfrac{5}{2}e^{2x} - 4\\ln|x|",
          "explanation": "Add the antiderivatives of each term.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Add $+c$",
          "workingLatex": "\\dfrac{5}{2}e^{2x} - 4\\ln|x| + c",
          "explanation": "One constant covers the whole indefinite integral.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Differentiate to check",
          "workingLatex": "\\frac{d}{dx}\\left(\\dfrac{5}{2}e^{2x} - 4\\ln|x|\\right)",
          "explanation": "The derivative should match the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Note domain restrictions",
          "workingLatex": "\\text{domain}",
          "explanation": "Include $| \\cdot |$ in logarithms and state $x\\neq 0$ where needed.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the answer",
          "workingLatex": "\\int (5e^{2x} - \\dfrac{4}{x})\\,dx = \\dfrac{5}{2}e^{2x} - 4\\ln|x| + c",
          "explanation": "This is the required antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Summary",
          "workingLatex": "\\dfrac{5}{2}e^{2x} - 4\\ln|x| + c",
          "explanation": "Collect the final result.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\left(5e^{2x} - \\dfrac{4}{x}\\right) dx = \\dfrac{5}{2}e^{2x} - 4\\ln|x| + c$."
    }
  },
  {
    "id": "al.y2.pure.standard-integrals.q040",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "standard integrals",
      "sum rule"
    ],
    "questionText": "Find $\\displaystyle\\int \\left(\\sin x + \\dfrac{1}{x+1}\\right) dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Split the integral",
          "workingLatex": "\\int \\sin x + \\dfrac{1}{x+1}\\,dx",
          "explanation": "Use linearity to integrate each term separately.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate the exponential / trig / reciprocal terms",
          "workingLatex": "\\text{term by term}",
          "explanation": "Apply the relevant standard integral to each part.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Watch for linear arguments",
          "workingLatex": "\\text{divide by inner coefficient when needed}",
          "explanation": "For $e^{kx}$, $\\sin(ax)$, $\\dfrac{1}{ax+b}$, include the factor $\\dfrac{1}{a}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Combine the results",
          "workingLatex": "-\\cos x + \\ln|x+1|",
          "explanation": "Add the antiderivatives of each term.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Add $+c$",
          "workingLatex": "-\\cos x + \\ln|x+1| + c",
          "explanation": "One constant covers the whole indefinite integral.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Differentiate to check",
          "workingLatex": "\\frac{d}{dx}\\left(-\\cos x + \\ln|x+1|\\right)",
          "explanation": "The derivative should match the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Note domain restrictions",
          "workingLatex": "\\text{domain}",
          "explanation": "Include $| \\cdot |$ in logarithms and state $x\\neq 0$ where needed.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the answer",
          "workingLatex": "\\int (\\sin x + \\dfrac{1}{x+1})\\,dx = -\\cos x + \\ln|x+1| + c",
          "explanation": "This is the required antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Summary",
          "workingLatex": "-\\cos x + \\ln|x+1| + c",
          "explanation": "Collect the final result.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\left(\\sin x + \\dfrac{1}{x+1}\\right) dx = -\\cos x + \\ln|x+1| + c$."
    }
  },
  {
    "id": "al.y2.pure.standard-integrals.q041",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "standard integrals",
      "trigonometry",
      "secant"
    ],
    "questionText": "Find $\\displaystyle\\int \\sec^{2} x\\,dx$, where $x$ is in radians.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the derivative of $\\tan x$",
          "workingLatex": "\\frac{d}{dx}(\\tan x) = \\sec^{2} x",
          "explanation": "Integration reverses differentiation, so $\\sec^{2}x$ is the derivative of $\\tan x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the antiderivative",
          "workingLatex": "\\int \\sec^{2} x\\,dx = \\tan x + c",
          "explanation": "The standard result follows directly from the derivative of tangent.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Check",
          "workingLatex": "\\frac{d}{dx}(\\tan x + c) = \\sec^{2} x",
          "explanation": "Differentiating confirms the result.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Note the domain",
          "workingLatex": "\\cos x \\neq 0",
          "explanation": "Tangent is undefined where cosine is zero.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the answer",
          "workingLatex": "\\int \\sec^{2} x\\,dx = \\tan x + c",
          "explanation": "This is the required antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Link to standard list",
          "workingLatex": "\\sec^{2} x \\text{ is a Year 2 standard integral}",
          "explanation": "Exam boards include $\\int \\sec^{2}x\\,dx = \\tan x + c$ alongside sine and cosine.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\sec^{2} x\\,dx = \\tan x + c$."
    }
  },
  {
    "id": "al.y2.pure.standard-integrals.q042",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "standard integrals",
      "definite integral",
      "mixed"
    ],
    "questionText": "Evaluate $\\displaystyle\\int_{1}^{e} \\left(e^{x} + \\dfrac{1}{x}\\right) dx$ exactly.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up",
          "workingLatex": "\\displaystyle\\int_{1}^{e} (e^{x} + \\dfrac{1}{x})\\,dx",
          "explanation": "Identify each term and integrate separately.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find antiderivatives",
          "workingLatex": "F(x) = \\ldots",
          "explanation": "Use standard integrals for each term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate at $x = e$",
          "workingLatex": "F(e)",
          "explanation": "Substitute the upper limit.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate at $x = 1$",
          "workingLatex": "F(1)",
          "explanation": "Substitute the lower limit.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Subtract and simplify",
          "workingLatex": "e^{e} - e + 1",
          "explanation": "Combine using the evaluation theorem.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Use log/exponential laws if needed",
          "workingLatex": "\\text{simplify exact form}",
          "explanation": "Rewrite $e^{\\ln k}$ and logarithms where helpful.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check sign and magnitude",
          "workingLatex": "\\text{sensible result?}",
          "explanation": "The value should match the expected area.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the answer",
          "workingLatex": "\\displaystyle\\int_{1}^{e} (e^{x} + \\dfrac{1}{x})\\,dx = e^{e} - e + 1",
          "explanation": "This is the exact value.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Final form",
          "workingLatex": "e^{e} - e + 1",
          "explanation": "Present the simplified exact answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{1}^{e} \\left(e^{x} + \\dfrac{1}{x}\\right) dx = e^{e} - e + 1$."
    }
  },
  {
    "id": "al.y2.pure.standard-integrals.q043",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "standard integrals",
      "definite integral",
      "mixed"
    ],
    "questionText": "Evaluate $\\displaystyle\\int_{0}^{\\dfrac{\\pi}{2}} \\left(e^{x} + \\sin x\\right) dx$ exactly.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up",
          "workingLatex": "\\displaystyle\\int_{0}^{\\dfrac{\\pi}{2}} (e^{x} + \\sin x)\\,dx",
          "explanation": "Identify each term and integrate separately.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find antiderivatives",
          "workingLatex": "F(x) = \\ldots",
          "explanation": "Use standard integrals for each term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate at $x = \\dfrac{\\pi}{2}$",
          "workingLatex": "F(\\dfrac{\\pi}{2})",
          "explanation": "Substitute the upper limit.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate at $x = 0$",
          "workingLatex": "F(0)",
          "explanation": "Substitute the lower limit.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Subtract and simplify",
          "workingLatex": "e^{\\pi/2} - 1",
          "explanation": "Combine using the evaluation theorem.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Use log/exponential laws if needed",
          "workingLatex": "\\text{simplify exact form}",
          "explanation": "Rewrite $e^{\\ln k}$ and logarithms where helpful.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check sign and magnitude",
          "workingLatex": "\\text{sensible result?}",
          "explanation": "The value should match the expected area.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the answer",
          "workingLatex": "\\displaystyle\\int_{0}^{\\dfrac{\\pi}{2}} (e^{x} + \\sin x)\\,dx = e^{\\pi/2} - 1",
          "explanation": "This is the exact value.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Final form",
          "workingLatex": "e^{\\pi/2} - 1",
          "explanation": "Present the simplified exact answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{0}^{\\dfrac{\\pi}{2}} \\left(e^{x} + \\sin x\\right) dx = e^{\\pi/2} - 1$."
    }
  },
  {
    "id": "al.y2.pure.standard-integrals.q044",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "standard integrals",
      "definite integral",
      "trigonometry"
    ],
    "questionText": "Evaluate $\\displaystyle\\int_{0}^{\\dfrac{\\pi}{2}} \\left(\\cos(2x)\\right) dx$ exactly.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up",
          "workingLatex": "\\displaystyle\\int_{0}^{\\dfrac{\\pi}{2}} (\\cos(2x))\\,dx",
          "explanation": "Identify each term and integrate separately.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find antiderivatives",
          "workingLatex": "F(x) = \\ldots",
          "explanation": "Use standard integrals for each term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate at $x = \\dfrac{\\pi}{2}$",
          "workingLatex": "F(\\dfrac{\\pi}{2})",
          "explanation": "Substitute the upper limit.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate at $x = 0$",
          "workingLatex": "F(0)",
          "explanation": "Substitute the lower limit.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Subtract and simplify",
          "workingLatex": "0",
          "explanation": "Combine using the evaluation theorem.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Use log/exponential laws if needed",
          "workingLatex": "\\text{simplify exact form}",
          "explanation": "Rewrite $e^{\\ln k}$ and logarithms where helpful.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check sign and magnitude",
          "workingLatex": "\\text{sensible result?}",
          "explanation": "The value should match the expected area.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the answer",
          "workingLatex": "\\displaystyle\\int_{0}^{\\dfrac{\\pi}{2}} (\\cos(2x))\\,dx = 0",
          "explanation": "This is the exact value.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Final form",
          "workingLatex": "0",
          "explanation": "Present the simplified exact answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{0}^{\\dfrac{\\pi}{2}} \\left(\\cos(2x)\\right) dx = 0$."
    }
  },
  {
    "id": "al.y2.pure.standard-integrals.q045",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "standard integrals",
      "definite integral",
      "exponential"
    ],
    "questionText": "Evaluate $\\displaystyle\\int_{0}^{\\ln 3} \\left(e^{2x}\\right) dx$ exactly.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up",
          "workingLatex": "\\displaystyle\\int_{0}^{\\ln 3} (e^{2x})\\,dx",
          "explanation": "Identify each term and integrate separately.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find antiderivatives",
          "workingLatex": "F(x) = \\ldots",
          "explanation": "Use standard integrals for each term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate at $x = \\ln 3$",
          "workingLatex": "F(\\ln 3)",
          "explanation": "Substitute the upper limit.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate at $x = 0$",
          "workingLatex": "F(0)",
          "explanation": "Substitute the lower limit.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Subtract and simplify",
          "workingLatex": "4",
          "explanation": "Combine using the evaluation theorem.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Use log/exponential laws if needed",
          "workingLatex": "\\text{simplify exact form}",
          "explanation": "Rewrite $e^{\\ln k}$ and logarithms where helpful.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check sign and magnitude",
          "workingLatex": "\\text{sensible result?}",
          "explanation": "The value should match the expected area.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the answer",
          "workingLatex": "\\displaystyle\\int_{0}^{\\ln 3} (e^{2x})\\,dx = 4",
          "explanation": "This is the exact value.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Final form",
          "workingLatex": "4",
          "explanation": "Present the simplified exact answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{0}^{\\ln 3} \\left(e^{2x}\\right) dx = 4$."
    }
  },
  {
    "id": "al.y2.pure.standard-integrals.q046",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "standard integrals",
      "definite integral",
      "reciprocal"
    ],
    "questionText": "Evaluate $\\displaystyle\\int_{2}^{8} \\left(\\dfrac{1}{x}\\right) dx$ exactly.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up",
          "workingLatex": "\\displaystyle\\int_{2}^{8} (\\dfrac{1}{x})\\,dx",
          "explanation": "Identify each term and integrate separately.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find antiderivatives",
          "workingLatex": "F(x) = \\ldots",
          "explanation": "Use standard integrals for each term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate at $x = 8$",
          "workingLatex": "F(8)",
          "explanation": "Substitute the upper limit.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate at $x = 2$",
          "workingLatex": "F(2)",
          "explanation": "Substitute the lower limit.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Subtract and simplify",
          "workingLatex": "\\ln 4",
          "explanation": "Combine using the evaluation theorem.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Use log/exponential laws if needed",
          "workingLatex": "\\text{simplify exact form}",
          "explanation": "Rewrite $e^{\\ln k}$ and logarithms where helpful.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check sign and magnitude",
          "workingLatex": "\\text{sensible result?}",
          "explanation": "The value should match the expected area.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the answer",
          "workingLatex": "\\displaystyle\\int_{2}^{8} (\\dfrac{1}{x})\\,dx = \\ln 4",
          "explanation": "This is the exact value.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Final form",
          "workingLatex": "\\ln 4",
          "explanation": "Present the simplified exact answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{2}^{8} \\left(\\dfrac{1}{x}\\right) dx = \\ln 4$."
    }
  },
  {
    "id": "al.y2.pure.standard-integrals.q047",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "exact",
    "tags": [
      "standard integrals",
      "modelling",
      "exponential"
    ],
    "questionText": "A quantity grows so that its rate of change is proportional to $e^{t}$, with $\\dfrac{dx}{dt} = 2e^{t}$. Given $x = 3$ when $t = 0$, find $x$ in terms of $t$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Integrate the rate",
          "workingLatex": "\\int 2e^{t}\\,dt = 2e^{t} + c",
          "explanation": "The position function is found by integrating the rate of change.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the general solution",
          "workingLatex": "x = 2e^{t} + c",
          "explanation": "Include the constant of integration from the indefinite integral.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use the initial condition",
          "workingLatex": "t = 0,\\ x = 3",
          "explanation": "Substitute the known values to find $c$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for $c$",
          "workingLatex": "3 = 2e^{0} + c = 2 + c \\Rightarrow c = 1",
          "explanation": "At $t=0$, $e^{0}=1$, giving a simple equation for $c$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the particular solution",
          "workingLatex": "x = 2e^{t} + 1",
          "explanation": "Substitute $c=1$ into the general solution.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify the rate",
          "workingLatex": "\\frac{dx}{dt} = 2e^{t}",
          "explanation": "Differentiating confirms the model.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Interpret",
          "workingLatex": "\\text{exponential growth shifted up by 1}",
          "explanation": "The quantity grows exponentially from a starting value of $3$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the answer",
          "workingLatex": "x = 2e^{t} + 1",
          "explanation": "This is the required model.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check initial value",
          "workingLatex": "x(0) = 2 + 1 = 3 \\checkmark",
          "explanation": "The solution satisfies the initial condition.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = 2e^{t} + 1$."
    }
  },
  {
    "id": "al.y2.pure.standard-integrals.q048",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "standard integrals",
      "linear argument"
    ],
    "questionText": "Find $\\displaystyle\\int e^{2-3x}\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the linear exponent",
          "workingLatex": "e^{2-3x} = e^{2} \\cdot e^{-3x}",
          "explanation": "Separate the constant factor $e^{2}$ from the variable part.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Pull out $e^{2}$",
          "workingLatex": "\\int e^{2-3x}\\,dx = e^{2}\\int e^{-3x}\\,dx",
          "explanation": "Constants factor out of the integral.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate $e^{-3x}$",
          "workingLatex": "\\int e^{-3x}\\,dx = -\\dfrac{1}{3}e^{-3x}",
          "explanation": "Use $\\int e^{kx}\\,dx = \\tfrac{1}{k}e^{kx}$ with $k=-3$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Multiply by $e^{2}$",
          "workingLatex": "-\\dfrac{1}{3}e^{2} e^{-3x} = -\\dfrac{1}{3}e^{2-3x}",
          "explanation": "Combine the exponential factors.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Add $+c$",
          "workingLatex": "-\\dfrac{1}{3}e^{2-3x} + c",
          "explanation": "Include the constant of integration.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Alternative: direct rule",
          "workingLatex": "\\int e^{ax+b}\\,dx = \\dfrac{1}{a}e^{ax+b}+c",
          "explanation": "With $a=-3$, $b=2$, we obtain the same result directly.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check",
          "workingLatex": "\\frac{d}{dx}\\left(-\\tfrac{1}{3}e^{2-3x}\\right) = e^{2-3x}",
          "explanation": "Differentiating confirms the answer.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the answer",
          "workingLatex": "\\int e^{2-3x}\\,dx = -\\dfrac{1}{3}e^{2-3x} + c",
          "explanation": "This is the required antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Summary",
          "workingLatex": "-\\dfrac{1}{3}e^{2-3x} + c",
          "explanation": "Divide by the coefficient of $x$ in the exponent.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int e^{2-3x}\\,dx = -\\dfrac{1}{3}e^{2-3x} + c$."
    }
  },
  {
    "id": "al.y2.pure.standard-integrals.q049",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "standard integrals",
      "linear argument",
      "reciprocal"
    ],
    "questionText": "Find $\\displaystyle\\int \\dfrac{3}{2x+5}\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Match $\\dfrac{1}{ax+b}$ form",
          "workingLatex": "\\dfrac{3}{2x+5} = 3 \\cdot \\dfrac{1}{2x+5}",
          "explanation": "Factor out the constant $3$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Standard integral",
          "workingLatex": "\\int \\dfrac{1}{2x+5}\\,dx = \\dfrac{1}{2}\\ln|2x+5|",
          "explanation": "Integrating $\\dfrac{1}{ax+b}$ gives $\\dfrac{1}{a}\\ln|ax+b|$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Multiply by $3$",
          "workingLatex": "\\dfrac{3}{2}\\ln|2x+5|",
          "explanation": "Apply the constant multiple.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add $+c$",
          "workingLatex": "\\dfrac{3}{2}\\ln|2x+5| + c",
          "explanation": "Include the constant of integration.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check derivative",
          "workingLatex": "\\frac{d}{dx}\\left(\\tfrac{3}{2}\\ln|2x+5|\\right) = \\dfrac{3}{2} \\cdot \\dfrac{2}{2x+5} = \\dfrac{3}{2x+5}",
          "explanation": "The chain rule recovers the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Domain",
          "workingLatex": "2x+5 \\neq 0",
          "explanation": "The integrand is undefined when $2x+5=0$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int \\dfrac{3}{2x+5}\\,dx = \\dfrac{3}{2}\\ln|2x+5| + c",
          "explanation": "This is the required antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Modulus",
          "workingLatex": "|2x+5|",
          "explanation": "The modulus ensures the logarithm is valid for all $x$ in the domain.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Summary",
          "workingLatex": "\\dfrac{3}{2}\\ln|2x+5| + c",
          "explanation": "Constant over linear denominator integrates to a scaled logarithm.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\dfrac{3}{2x+5}\\,dx = \\dfrac{3}{2}\\ln|2x+5| + c$."
    }
  },
  {
    "id": "al.y2.pure.standard-integrals.q050",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "exact",
    "tags": [
      "standard integrals",
      "definite integral",
      "mixed"
    ],
    "questionText": "Evaluate $\\displaystyle\\int_{1}^{2} \\left(e^{x} + \\dfrac{1}{x}\\right) dx$ exactly, giving your answer in terms of $e$ and $\\ln 2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Split the integral",
          "workingLatex": "\\int_{1}^{2} e^{x}\\,dx + \\int_{1}^{2} \\dfrac{1}{x}\\,dx",
          "explanation": "Integrate each standard form separately.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate $e^{x}$",
          "workingLatex": "\\int_{1}^{2} e^{x}\\,dx = [e^{x}]_{1}^{2} = e^{2} - e",
          "explanation": "The antiderivative of $e^{x}$ is $e^{x}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate $\\dfrac{1}{x}$",
          "workingLatex": "\\int_{1}^{2} \\dfrac{1}{x}\\,dx = [\\ln x]_{1}^{2} = \\ln 2",
          "explanation": "On $x>0$, the antiderivative is $\\ln x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add the parts",
          "workingLatex": "e^{2} - e + \\ln 2",
          "explanation": "The definite integral of a sum is the sum of the definite integrals.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check lower limits",
          "workingLatex": "e^{1} - e = 0 \\text{ contribution from lower?}; \\ln 1 = 0",
          "explanation": "Both parts vanish at $x=1$ for the lower limit.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Numerical sense",
          "workingLatex": "e^{2} - e + \\ln 2 \\approx 4.67",
          "explanation": "The integrand is positive on $[1,2]$, so the area is positive.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Exact form",
          "workingLatex": "e^{2} - e + \\ln 2",
          "explanation": "Leave the answer in exact form using $e$ and $\\ln 2$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the answer",
          "workingLatex": "\\displaystyle\\int_{1}^{2} (e^{x} + \\tfrac{1}{x})\\,dx = e^{2} - e + \\ln 2",
          "explanation": "This is the exact value.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Summary",
          "workingLatex": "e^{2} - e + \\ln 2",
          "explanation": "Combine exponential and logarithmic contributions.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{1}^{2} \\left(e^{x} + \\dfrac{1}{x}\\right) dx = e^{2} - e + \\ln 2$."
    }
  },
  {
    "id": "al.y2.pure.standard-integrals.q051",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "standard integrals",
      "mixed"
    ],
    "questionText": "Find $\\displaystyle\\int \\left(e^{2x} + \\dfrac{1}{x} - \\sin x\\right) dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Decompose the integrand",
          "workingLatex": "\\int (e^{2x} + \\dfrac{1}{x} - \\sin x)\\,dx",
          "explanation": "Split into standard forms: exponential, reciprocal, and trigonometric.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate each term",
          "workingLatex": "\\text{term-by-term}",
          "explanation": "Apply the appropriate standard integral to every term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Handle $e^{kx}$ and linear arguments",
          "workingLatex": "\\text{include } \\dfrac{1}{k}",
          "explanation": "Divide by the coefficient of $x$ inside exponentials and trig functions.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Handle reciprocal terms",
          "workingLatex": "\\ln|\\cdot|",
          "explanation": "Use $\\int \\dfrac{1}{ax+b}\\,dx = \\dfrac{1}{a}\\ln|ax+b|+c$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Combine",
          "workingLatex": "\\dfrac{1}{2}e^{2x} + \\ln|x| + \\cos x",
          "explanation": "Add all antiderivative parts.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Add $+c$",
          "workingLatex": "\\dfrac{1}{2}e^{2x} + \\ln|x| + \\cos x + c",
          "explanation": "One constant for the whole indefinite integral.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Differentiate to verify",
          "workingLatex": "\\frac{d}{dx}\\left(\\dfrac{1}{2}e^{2x} + \\ln|x| + \\cos x\\right)",
          "explanation": "Check each term differentiates back to the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State domain restrictions",
          "workingLatex": "\\text{note any log arguments}",
          "explanation": "State values excluded by reciprocals or logarithms.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Final answer",
          "workingLatex": "\\int (e^{2x} + \\dfrac{1}{x} - \\sin x)\\,dx = \\dfrac{1}{2}e^{2x} + \\ln|x| + \\cos x + c",
          "explanation": "Present the complete antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Summary",
          "workingLatex": "\\dfrac{1}{2}e^{2x} + \\ln|x| + \\cos x + c",
          "explanation": "Collect the simplified result.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check",
          "workingLatex": "\\text{all terms accounted for}",
          "explanation": "Ensure no term was dropped or double-counted.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Answer",
          "workingLatex": "\\dfrac{1}{2}e^{2x} + \\ln|x| + \\cos x + c",
          "explanation": "This is the required indefinite integral.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Done",
          "workingLatex": "\\dfrac{1}{2}e^{2x} + \\ln|x| + \\cos x + c",
          "explanation": "Standard integrals only — no substitution beyond $f(ax+b)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\left(e^{2x} + \\dfrac{1}{x} - \\sin x\\right) dx = \\dfrac{1}{2}e^{2x} + \\ln|x| + \\cos x + c$."
    }
  },
  {
    "id": "al.y2.pure.standard-integrals.q052",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "standard integrals",
      "mixed"
    ],
    "questionText": "Find $\\displaystyle\\int \\left(3e^{3x} - \\dfrac{5}{x} + 2\\cos x\\right) dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Decompose the integrand",
          "workingLatex": "\\int (3e^{3x} - \\dfrac{5}{x} + 2\\cos x)\\,dx",
          "explanation": "Split into standard forms: exponential, reciprocal, and trigonometric.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate each term",
          "workingLatex": "\\text{term-by-term}",
          "explanation": "Apply the appropriate standard integral to every term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Handle $e^{kx}$ and linear arguments",
          "workingLatex": "\\text{include } \\dfrac{1}{k}",
          "explanation": "Divide by the coefficient of $x$ inside exponentials and trig functions.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Handle reciprocal terms",
          "workingLatex": "\\ln|\\cdot|",
          "explanation": "Use $\\int \\dfrac{1}{ax+b}\\,dx = \\dfrac{1}{a}\\ln|ax+b|+c$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Combine",
          "workingLatex": "e^{3x} - 5\\ln|x| + 2\\sin x",
          "explanation": "Add all antiderivative parts.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Add $+c$",
          "workingLatex": "e^{3x} - 5\\ln|x| + 2\\sin x + c",
          "explanation": "One constant for the whole indefinite integral.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Differentiate to verify",
          "workingLatex": "\\frac{d}{dx}\\left(e^{3x} - 5\\ln|x| + 2\\sin x\\right)",
          "explanation": "Check each term differentiates back to the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State domain restrictions",
          "workingLatex": "\\text{note any log arguments}",
          "explanation": "State values excluded by reciprocals or logarithms.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Final answer",
          "workingLatex": "\\int (3e^{3x} - \\dfrac{5}{x} + 2\\cos x)\\,dx = e^{3x} - 5\\ln|x| + 2\\sin x + c",
          "explanation": "Present the complete antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Summary",
          "workingLatex": "e^{3x} - 5\\ln|x| + 2\\sin x + c",
          "explanation": "Collect the simplified result.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check",
          "workingLatex": "\\text{all terms accounted for}",
          "explanation": "Ensure no term was dropped or double-counted.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Answer",
          "workingLatex": "e^{3x} - 5\\ln|x| + 2\\sin x + c",
          "explanation": "This is the required indefinite integral.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Done",
          "workingLatex": "e^{3x} - 5\\ln|x| + 2\\sin x + c",
          "explanation": "Standard integrals only — no substitution beyond $f(ax+b)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\left(3e^{3x} - \\dfrac{5}{x} + 2\\cos x\\right) dx = e^{3x} - 5\\ln|x| + 2\\sin x + c$."
    }
  },
  {
    "id": "al.y2.pure.standard-integrals.q053",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "standard integrals",
      "mixed"
    ],
    "questionText": "Find $\\displaystyle\\int \\left(e^{x} + \\sin(2x) + \\dfrac{1}{x+1}\\right) dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Decompose the integrand",
          "workingLatex": "\\int (e^{x} + \\sin(2x) + \\dfrac{1}{x+1})\\,dx",
          "explanation": "Split into standard forms: exponential, reciprocal, and trigonometric.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate each term",
          "workingLatex": "\\text{term-by-term}",
          "explanation": "Apply the appropriate standard integral to every term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Handle $e^{kx}$ and linear arguments",
          "workingLatex": "\\text{include } \\dfrac{1}{k}",
          "explanation": "Divide by the coefficient of $x$ inside exponentials and trig functions.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Handle reciprocal terms",
          "workingLatex": "\\ln|\\cdot|",
          "explanation": "Use $\\int \\dfrac{1}{ax+b}\\,dx = \\dfrac{1}{a}\\ln|ax+b|+c$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Combine",
          "workingLatex": "e^{x} - \\dfrac{1}{2}\\cos(2x) + \\ln|x+1|",
          "explanation": "Add all antiderivative parts.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Add $+c$",
          "workingLatex": "e^{x} - \\dfrac{1}{2}\\cos(2x) + \\ln|x+1| + c",
          "explanation": "One constant for the whole indefinite integral.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Differentiate to verify",
          "workingLatex": "\\frac{d}{dx}\\left(e^{x} - \\dfrac{1}{2}\\cos(2x) + \\ln|x+1|\\right)",
          "explanation": "Check each term differentiates back to the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State domain restrictions",
          "workingLatex": "\\text{note any log arguments}",
          "explanation": "State values excluded by reciprocals or logarithms.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Final answer",
          "workingLatex": "\\int (e^{x} + \\sin(2x) + \\dfrac{1}{x+1})\\,dx = e^{x} - \\dfrac{1}{2}\\cos(2x) + \\ln|x+1| + c",
          "explanation": "Present the complete antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Summary",
          "workingLatex": "e^{x} - \\dfrac{1}{2}\\cos(2x) + \\ln|x+1| + c",
          "explanation": "Collect the simplified result.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check",
          "workingLatex": "\\text{all terms accounted for}",
          "explanation": "Ensure no term was dropped or double-counted.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Answer",
          "workingLatex": "e^{x} - \\dfrac{1}{2}\\cos(2x) + \\ln|x+1| + c",
          "explanation": "This is the required indefinite integral.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Done",
          "workingLatex": "e^{x} - \\dfrac{1}{2}\\cos(2x) + \\ln|x+1| + c",
          "explanation": "Standard integrals only — no substitution beyond $f(ax+b)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\left(e^{x} + \\sin(2x) + \\dfrac{1}{x+1}\\right) dx = e^{x} - \\dfrac{1}{2}\\cos(2x) + \\ln|x+1| + c$."
    }
  },
  {
    "id": "al.y2.pure.standard-integrals.q054",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "standard integrals",
      "mixed"
    ],
    "questionText": "Find $\\displaystyle\\int \\left(2e^{-x} + \\dfrac{4}{3x-2}\\right) dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Decompose the integrand",
          "workingLatex": "\\int (2e^{-x} + \\dfrac{4}{3x-2})\\,dx",
          "explanation": "Split into standard forms: exponential, reciprocal, and trigonometric.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate each term",
          "workingLatex": "\\text{term-by-term}",
          "explanation": "Apply the appropriate standard integral to every term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Handle $e^{kx}$ and linear arguments",
          "workingLatex": "\\text{include } \\dfrac{1}{k}",
          "explanation": "Divide by the coefficient of $x$ inside exponentials and trig functions.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Handle reciprocal terms",
          "workingLatex": "\\ln|\\cdot|",
          "explanation": "Use $\\int \\dfrac{1}{ax+b}\\,dx = \\dfrac{1}{a}\\ln|ax+b|+c$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Combine",
          "workingLatex": "-2e^{-x} + \\dfrac{4}{3}\\ln|3x-2|",
          "explanation": "Add all antiderivative parts.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Add $+c$",
          "workingLatex": "-2e^{-x} + \\dfrac{4}{3}\\ln|3x-2| + c",
          "explanation": "One constant for the whole indefinite integral.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Differentiate to verify",
          "workingLatex": "\\frac{d}{dx}\\left(-2e^{-x} + \\dfrac{4}{3}\\ln|3x-2|\\right)",
          "explanation": "Check each term differentiates back to the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State domain restrictions",
          "workingLatex": "\\text{note any log arguments}",
          "explanation": "State values excluded by reciprocals or logarithms.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Final answer",
          "workingLatex": "\\int (2e^{-x} + \\dfrac{4}{3x-2})\\,dx = -2e^{-x} + \\dfrac{4}{3}\\ln|3x-2| + c",
          "explanation": "Present the complete antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Summary",
          "workingLatex": "-2e^{-x} + \\dfrac{4}{3}\\ln|3x-2| + c",
          "explanation": "Collect the simplified result.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check",
          "workingLatex": "\\text{all terms accounted for}",
          "explanation": "Ensure no term was dropped or double-counted.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Answer",
          "workingLatex": "-2e^{-x} + \\dfrac{4}{3}\\ln|3x-2| + c",
          "explanation": "This is the required indefinite integral.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Done",
          "workingLatex": "-2e^{-x} + \\dfrac{4}{3}\\ln|3x-2| + c",
          "explanation": "Standard integrals only — no substitution beyond $f(ax+b)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\left(2e^{-x} + \\dfrac{4}{3x-2}\\right) dx = -2e^{-x} + \\dfrac{4}{3}\\ln|3x-2| + c$."
    }
  },
  {
    "id": "al.y2.pure.standard-integrals.q055",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "standard integrals",
      "mixed"
    ],
    "questionText": "Find $\\displaystyle\\int \\left(e^{x} - e^{-x} + \\cos x\\right) dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Decompose the integrand",
          "workingLatex": "\\int (e^{x} - e^{-x} + \\cos x)\\,dx",
          "explanation": "Split into standard forms: exponential, reciprocal, and trigonometric.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate each term",
          "workingLatex": "\\text{term-by-term}",
          "explanation": "Apply the appropriate standard integral to every term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Handle $e^{kx}$ and linear arguments",
          "workingLatex": "\\text{include } \\dfrac{1}{k}",
          "explanation": "Divide by the coefficient of $x$ inside exponentials and trig functions.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Handle reciprocal terms",
          "workingLatex": "\\ln|\\cdot|",
          "explanation": "Use $\\int \\dfrac{1}{ax+b}\\,dx = \\dfrac{1}{a}\\ln|ax+b|+c$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Combine",
          "workingLatex": "e^{x} + e^{-x} + \\sin x",
          "explanation": "Add all antiderivative parts.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Add $+c$",
          "workingLatex": "e^{x} + e^{-x} + \\sin x + c",
          "explanation": "One constant for the whole indefinite integral.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Differentiate to verify",
          "workingLatex": "\\frac{d}{dx}\\left(e^{x} + e^{-x} + \\sin x\\right)",
          "explanation": "Check each term differentiates back to the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Confirm completeness",
          "workingLatex": "\\text{note any log arguments}",
          "explanation": "State values excluded by reciprocals or logarithms.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Final answer",
          "workingLatex": "\\int (e^{x} - e^{-x} + \\cos x)\\,dx = e^{x} + e^{-x} + \\sin x + c",
          "explanation": "Present the complete antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Summary",
          "workingLatex": "e^{x} + e^{-x} + \\sin x + c",
          "explanation": "Collect the simplified result.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check",
          "workingLatex": "\\text{all terms accounted for}",
          "explanation": "Ensure no term was dropped or double-counted.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Answer",
          "workingLatex": "e^{x} + e^{-x} + \\sin x + c",
          "explanation": "This is the required indefinite integral.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Done",
          "workingLatex": "e^{x} + e^{-x} + \\sin x + c",
          "explanation": "Standard integrals only — no substitution beyond $f(ax+b)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\left(e^{x} - e^{-x} + \\cos x\\right) dx = e^{x} + e^{-x} + \\sin x + c$."
    }
  },
  {
    "id": "al.y2.pure.standard-integrals.q056",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "exact",
    "tags": [
      "standard integrals",
      "initial value",
      "mixed"
    ],
    "questionText": "A curve has $\\dfrac{dy}{dx} = e^{x} + \\dfrac{2}{x}$, $x > 0$. The curve passes through $(1, 0)$. Find $y$ in terms of $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Integrate",
          "workingLatex": "y = e^{x} + 2\\ln x + c",
          "explanation": "Integrate each term using standard results; on $x>0$, $\\int \\dfrac{2}{x}\\,dx = 2\\ln x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute $(1, 0)$",
          "workingLatex": "0 = e + 2\\ln 1 + c",
          "explanation": "Use the given point on the curve.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify",
          "workingLatex": "\\ln 1 = 0 \\Rightarrow 0 = e + c",
          "explanation": "The logarithmic term vanishes at $x=1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for $c$",
          "workingLatex": "c = -e",
          "explanation": "Rearrange to find the constant.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Particular solution",
          "workingLatex": "y = e^{x} + 2\\ln x - e",
          "explanation": "Substitute $c=-e$ into the general solution.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify gradient",
          "workingLatex": "\\frac{dy}{dx} = e^{x} + \\dfrac{2}{x}",
          "explanation": "Differentiating recovers the given gradient function.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify point",
          "workingLatex": "y(1) = e - e = 0",
          "explanation": "The curve passes through $(1,0)$ as required.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Domain",
          "workingLatex": "x > 0",
          "explanation": "The logarithm requires positive $x$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Interpret",
          "workingLatex": "\\text{exponential growth plus log term, shifted down by } e",
          "explanation": "The $-e$ shifts the entire family of curves.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the answer",
          "workingLatex": "y = e^{x} + 2\\ln x - e",
          "explanation": "This is the equation of the curve.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Alternative form",
          "workingLatex": "y = e^{x} - e + 2\\ln x",
          "explanation": "Terms may be reordered.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Check at another point",
          "workingLatex": "x = e \\Rightarrow y = e^{e} + 2 - e",
          "explanation": "Substituting $x=e$ gives a finite value.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Final",
          "workingLatex": "y = e^{x} + 2\\ln x - e",
          "explanation": "Complete answer in terms of $x$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = e^{x} + 2\\ln x - e$, $x > 0$."
    }
  },
  {
    "id": "al.y2.pure.standard-integrals.q057",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "exact",
    "tags": [
      "standard integrals",
      "definite integral",
      "mixed"
    ],
    "questionText": "Evaluate $\\displaystyle\\int_{0}^{1} \\left(e^{2x} + \\sin(\\pi x)\\right) dx$ exactly.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Plan",
          "workingLatex": "\\displaystyle\\int_{0}^{1} (e^{2x} + \\sin(\\pi x))\\,dx",
          "explanation": "Split into standard integrals and evaluate each part.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Antiderivatives",
          "workingLatex": "F(x) = \\ldots",
          "explanation": "Find $F(x)$ term by term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Upper limit",
          "workingLatex": "x = 1",
          "explanation": "Substitute the upper limit into each antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Lower limit",
          "workingLatex": "x = 0",
          "explanation": "Substitute the lower limit.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Subtract",
          "workingLatex": "\\dfrac{e^{2}-1}{2} + \\dfrac{2}{\\pi}",
          "explanation": "Apply $F(b)-F(a)$ for each term and combine.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify using laws",
          "workingLatex": "\\text{exact form}",
          "explanation": "Use $e^{\\ln k}=k$ and log rules where needed.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Sanity check",
          "workingLatex": "\\text{sign and size}",
          "explanation": "Verify the result is reasonable.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Numerical estimate",
          "workingLatex": "\\approx \\text{calculator check}",
          "explanation": "A quick decimal check supports the exact value.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State answer",
          "workingLatex": "\\displaystyle\\int_{0}^{1} (e^{2x} + \\sin(\\pi x))\\,dx = \\dfrac{e^{2}-1}{2} + \\dfrac{2}{\\pi}",
          "explanation": "Present the exact result.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Final",
          "workingLatex": "\\dfrac{e^{2}-1}{2} + \\dfrac{2}{\\pi}",
          "explanation": "Simplified exact value.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Method summary",
          "workingLatex": "\\text{standard integrals + evaluation theorem}",
          "explanation": "No advanced techniques beyond $f(ax+b)$ forms.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Units",
          "workingLatex": "\\text{area units if applicable}",
          "explanation": "Definite integrals represent signed area.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Answer",
          "workingLatex": "\\dfrac{e^{2}-1}{2} + \\dfrac{2}{\\pi}",
          "explanation": "Complete exact evaluation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{0}^{1} \\left(e^{2x} + \\sin(\\pi x)\\right) dx = \\dfrac{e^{2}-1}{2} + \\dfrac{2}{\\pi}$."
    }
  },
  {
    "id": "al.y2.pure.standard-integrals.q058",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "exact",
    "tags": [
      "standard integrals",
      "definite integral",
      "exponential"
    ],
    "questionText": "Evaluate $\\displaystyle\\int_{0}^{1} \\left(e^{x} + e^{-x}\\right) dx$ exactly.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Plan",
          "workingLatex": "\\displaystyle\\int_{0}^{1} (e^{x} + e^{-x})\\,dx",
          "explanation": "Split into standard integrals and evaluate each part.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Antiderivatives",
          "workingLatex": "F(x) = \\ldots",
          "explanation": "Find $F(x)$ term by term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Upper limit",
          "workingLatex": "x = 1",
          "explanation": "Substitute the upper limit into each antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Lower limit",
          "workingLatex": "x = 0",
          "explanation": "Substitute the lower limit.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Subtract",
          "workingLatex": "e - \\dfrac{1}{e}",
          "explanation": "Apply $F(b)-F(a)$ for each term and combine.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify using laws",
          "workingLatex": "\\text{exact form}",
          "explanation": "Use $e^{\\ln k}=k$ and log rules where needed.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Sanity check",
          "workingLatex": "\\text{sign and size}",
          "explanation": "Verify the result is reasonable.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Numerical estimate",
          "workingLatex": "\\approx \\text{calculator check}",
          "explanation": "A quick decimal check supports the exact value.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State answer",
          "workingLatex": "\\displaystyle\\int_{0}^{1} (e^{x} + e^{-x})\\,dx = e - \\dfrac{1}{e}",
          "explanation": "Present the exact result.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Final",
          "workingLatex": "e - \\dfrac{1}{e}",
          "explanation": "Simplified exact value.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Method summary",
          "workingLatex": "\\text{standard integrals + evaluation theorem}",
          "explanation": "No advanced techniques beyond $f(ax+b)$ forms.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Units",
          "workingLatex": "\\text{area units if applicable}",
          "explanation": "Definite integrals represent signed area.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Answer",
          "workingLatex": "e - \\dfrac{1}{e}",
          "explanation": "Complete exact evaluation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{0}^{1} \\left(e^{x} + e^{-x}\\right) dx = e - \\dfrac{1}{e}$."
    }
  },
  {
    "id": "al.y2.pure.standard-integrals.q059",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "exact",
    "tags": [
      "standard integrals",
      "definite integral",
      "mixed"
    ],
    "questionText": "Evaluate $\\displaystyle\\int_{1}^{e} \\left(e^{x} + \\dfrac{2}{x}\\right) dx$ exactly.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Plan",
          "workingLatex": "\\displaystyle\\int_{1}^{e} (e^{x} + \\dfrac{2}{x})\\,dx",
          "explanation": "Split into standard integrals and evaluate each part.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Antiderivatives",
          "workingLatex": "F(x) = \\ldots",
          "explanation": "Find $F(x)$ term by term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Upper limit",
          "workingLatex": "x = e",
          "explanation": "Substitute the upper limit into each antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Lower limit",
          "workingLatex": "x = 1",
          "explanation": "Substitute the lower limit.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Subtract",
          "workingLatex": "e^{e} - e + 2",
          "explanation": "Apply $F(b)-F(a)$ for each term and combine.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify using laws",
          "workingLatex": "\\text{exact form}",
          "explanation": "Use $e^{\\ln k}=k$ and log rules where needed.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Sanity check",
          "workingLatex": "\\text{sign and size}",
          "explanation": "Verify the result is reasonable.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Numerical estimate",
          "workingLatex": "\\approx \\text{calculator check}",
          "explanation": "A quick decimal check supports the exact value.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State answer",
          "workingLatex": "\\displaystyle\\int_{1}^{e} (e^{x} + \\dfrac{2}{x})\\,dx = e^{e} - e + 2",
          "explanation": "Present the exact result.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Final",
          "workingLatex": "e^{e} - e + 2",
          "explanation": "Simplified exact value.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Method summary",
          "workingLatex": "\\text{standard integrals + evaluation theorem}",
          "explanation": "No advanced techniques beyond $f(ax+b)$ forms.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Units",
          "workingLatex": "\\text{area units if applicable}",
          "explanation": "Definite integrals represent signed area.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Answer",
          "workingLatex": "e^{e} - e + 2",
          "explanation": "Complete exact evaluation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{1}^{e} \\left(e^{x} + \\dfrac{2}{x}\\right) dx = e^{e} - e + 2$."
    }
  },
  {
    "id": "al.y2.pure.standard-integrals.q060",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "exact",
    "tags": [
      "standard integrals",
      "definite integral",
      "trigonometry"
    ],
    "questionText": "Evaluate $\\displaystyle\\int_{0}^{\\pi} \\left(\\sin x + \\cos x\\right) dx$ exactly.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Plan",
          "workingLatex": "\\displaystyle\\int_{0}^{\\pi} (\\sin x + \\cos x)\\,dx",
          "explanation": "Split into standard integrals and evaluate each part.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Antiderivatives",
          "workingLatex": "F(x) = \\ldots",
          "explanation": "Find $F(x)$ term by term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Upper limit",
          "workingLatex": "x = \\pi",
          "explanation": "Substitute the upper limit into each antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Lower limit",
          "workingLatex": "x = 0",
          "explanation": "Substitute the lower limit.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Subtract",
          "workingLatex": "0",
          "explanation": "Apply $F(b)-F(a)$ for each term and combine.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify using laws",
          "workingLatex": "\\text{exact form}",
          "explanation": "Use $e^{\\ln k}=k$ and log rules where needed.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Sanity check",
          "workingLatex": "\\text{sign and size}",
          "explanation": "Verify the result is reasonable.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Confirm",
          "workingLatex": "\\approx \\text{calculator check}",
          "explanation": "A quick decimal check supports the exact value.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State answer",
          "workingLatex": "\\displaystyle\\int_{0}^{\\pi} (\\sin x + \\cos x)\\,dx = 0",
          "explanation": "Present the exact result.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Final",
          "workingLatex": "0",
          "explanation": "Simplified exact value.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Method summary",
          "workingLatex": "\\text{standard integrals + evaluation theorem}",
          "explanation": "No advanced techniques beyond $f(ax+b)$ forms.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Units",
          "workingLatex": "\\text{area units if applicable}",
          "explanation": "Definite integrals represent signed area.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Answer",
          "workingLatex": "0",
          "explanation": "Complete exact evaluation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{0}^{\\pi} \\left(\\sin x + \\cos x\\right) dx = 0$."
    }
  },
  {
    "id": "al.y2.pure.standard-integrals.q061",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "exact",
    "tags": [
      "standard integrals",
      "definite integral",
      "exponential"
    ],
    "questionText": "Evaluate $\\displaystyle\\int_{0}^{\\ln 2} \\left(e^{2x}\\right) dx$ exactly.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Plan",
          "workingLatex": "\\displaystyle\\int_{0}^{\\ln 2} (e^{2x})\\,dx",
          "explanation": "Split into standard integrals and evaluate each part.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Antiderivatives",
          "workingLatex": "F(x) = \\ldots",
          "explanation": "Find $F(x)$ term by term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Upper limit",
          "workingLatex": "x = \\ln 2",
          "explanation": "Substitute the upper limit into each antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Lower limit",
          "workingLatex": "x = 0",
          "explanation": "Substitute the lower limit.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Subtract",
          "workingLatex": "\\dfrac{3}{4}",
          "explanation": "Apply $F(b)-F(a)$ for each term and combine.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify using laws",
          "workingLatex": "\\text{exact form}",
          "explanation": "Use $e^{\\ln k}=k$ and log rules where needed.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Sanity check",
          "workingLatex": "\\text{sign and size}",
          "explanation": "Verify the result is reasonable.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Confirm",
          "workingLatex": "\\approx \\text{calculator check}",
          "explanation": "A quick decimal check supports the exact value.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State answer",
          "workingLatex": "\\displaystyle\\int_{0}^{\\ln 2} (e^{2x})\\,dx = \\dfrac{3}{4}",
          "explanation": "Present the exact result.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Final",
          "workingLatex": "\\dfrac{3}{4}",
          "explanation": "Simplified exact value.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Method summary",
          "workingLatex": "\\text{standard integrals + evaluation theorem}",
          "explanation": "No advanced techniques beyond $f(ax+b)$ forms.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Units",
          "workingLatex": "\\text{area units if applicable}",
          "explanation": "Definite integrals represent signed area.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Answer",
          "workingLatex": "\\dfrac{3}{4}",
          "explanation": "Complete exact evaluation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{0}^{\\ln 2} \\left(e^{2x}\\right) dx = \\dfrac{3}{4}$."
    }
  },
  {
    "id": "al.y2.pure.standard-integrals.q062",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "standard integrals",
      "trigonometry",
      "secant"
    ],
    "questionText": "Find $\\displaystyle\\int \\sec x \\tan x\\,dx$, where $x$ is in radians.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall derivative of $\\sec x$",
          "workingLatex": "\\frac{d}{dx}(\\sec x) = \\sec x \\tan x",
          "explanation": "The product $\\sec x \\tan x$ is exactly the derivative of $\\sec x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the antiderivative",
          "workingLatex": "\\int \\sec x \\tan x\\,dx = \\sec x + c",
          "explanation": "Integration reverses differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Check",
          "workingLatex": "\\frac{d}{dx}(\\sec x + c) = \\sec x \\tan x",
          "explanation": "Differentiating confirms the result.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Domain",
          "workingLatex": "\\cos x \\neq 0",
          "explanation": "Secant is undefined where cosine is zero.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Link to standard list",
          "workingLatex": "\\sec x \\tan x",
          "explanation": "This is one of the reciprocal-trig standard integrals.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "\\int \\sec x \\tan x\\,dx = \\sec x + c",
          "explanation": "Required antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compare with $\\tan x$",
          "workingLatex": "\\int \\sec^{2}x\\,dx = \\tan x + c",
          "explanation": "Do not confuse $\\sec x\\tan x$ with $\\sec^{2}x$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Memory aid",
          "workingLatex": "\\sec x \\text{ differentiates to } \\sec x \\tan x",
          "explanation": "The secant function reproduces itself times tangent on differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Summary",
          "workingLatex": "\\sec x + c",
          "explanation": "Standard result for A-Level.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Final",
          "workingLatex": "\\int \\sec x \\tan x\\,dx = \\sec x + c",
          "explanation": "Complete answer.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Note",
          "workingLatex": "+c",
          "explanation": "Indefinite integral requires the constant.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Radians",
          "workingLatex": "\\text{all trig in radians}",
          "explanation": "Standard results assume radian measure.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Answer",
          "workingLatex": "\\sec x + c",
          "explanation": "Antiderivative of $\\sec x \\tan x$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\sec x \\tan x\\,dx = \\sec x + c$."
    }
  },
  {
    "id": "al.y2.pure.standard-integrals.q063",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "standard integrals",
      "trigonometry",
      "cosecant"
    ],
    "questionText": "Find $\\displaystyle\\int \\cosec x \\cot x\\,dx$, where $x$ is in radians.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall derivative of $\\cosec x$",
          "workingLatex": "\\frac{d}{dx}(\\cosec x) = -\\cosec x \\cot x",
          "explanation": "Cosecant differentiates to negative cosecant times cotangent.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Adjust for the negative sign",
          "workingLatex": "\\int \\cosec x \\cot x\\,dx = -\\cosec x + c",
          "explanation": "The integrand is the negative of the derivative of $\\cosec x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Check",
          "workingLatex": "\\frac{d}{dx}(-\\cosec x + c) = \\cosec x \\cot x",
          "explanation": "Differentiating confirms the result.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Domain",
          "workingLatex": "\\sin x \\neq 0",
          "explanation": "Cosecant is undefined where sine is zero.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Standard result",
          "workingLatex": "\\int \\cosec x \\cot x\\,dx = -\\cosec x + c",
          "explanation": "A-Level standard integral paired with $\\sec x \\tan x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Sign care",
          "workingLatex": "\\text{minus sign is essential}",
          "explanation": "Missing the negative is a common error.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compare",
          "workingLatex": "\\int \\cosec^{2}x\\,dx = -\\cot x + c",
          "explanation": "Do not confuse $\\cosec x\\cot x$ with $\\cosec^{2}x$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Memory",
          "workingLatex": "-\\cosec x",
          "explanation": "Opposite sign to the secant integral.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State answer",
          "workingLatex": "\\int \\cosec x \\cot x\\,dx = -\\cosec x + c",
          "explanation": "Required antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Radians",
          "workingLatex": "\\text{use radians}",
          "explanation": "Trig standard integrals assume radian measure.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Summary",
          "workingLatex": "-\\cosec x + c",
          "explanation": "Complete result.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Verify sign",
          "workingLatex": "\\frac{d}{dx}(-\\cosec x) = \\cosec x \\cot x",
          "explanation": "Chain rule on $\\cosec x = 1/\\sin x$ gives the same result.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Answer",
          "workingLatex": "-\\cosec x + c",
          "explanation": "Antiderivative of $\\cosec x \\cot x$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\cosec x \\cot x\\,dx = -\\cosec x + c$."
    }
  },
  {
    "id": "al.y2.pure.standard-integrals.q064",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "exact",
    "tags": [
      "standard integrals",
      "definite integral",
      "modelling"
    ],
    "questionText": "The region bounded by $y = e^{x}$, the $x$-axis and the lines $x = 0$ and $x = k$ has area $3$. Find the exact value of $k$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the area integral",
          "workingLatex": "A = \\displaystyle\\int_{0}^{k} e^{x}\\,dx",
          "explanation": "Area under the curve between $x=0$ and $x=k$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate",
          "workingLatex": "A = [e^{x}]_{0}^{k} = e^{k} - 1",
          "explanation": "The antiderivative of $e^{x}$ is $e^{x}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form the equation",
          "workingLatex": "e^{k} - 1 = 3",
          "explanation": "Set the area equal to $3$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for $e^{k}$",
          "workingLatex": "e^{k} = 4",
          "explanation": "Add $1$ to both sides.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Take natural logs",
          "workingLatex": "k = \\ln 4",
          "explanation": "Use $\\ln(e^{k}) = k$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Alternative form",
          "workingLatex": "k = 2\\ln 2",
          "explanation": "Log law: $\\ln 4 = \\ln(2^{2}) = 2\\ln 2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify",
          "workingLatex": "e^{\\ln 4} - 1 = 4 - 1 = 3",
          "explanation": "Substituting back gives the required area.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret",
          "workingLatex": "k > 0",
          "explanation": "The upper limit must be positive for a region from $x=0$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Graphical sense",
          "workingLatex": "\\text{shift } k \\text{ right increases area}",
          "explanation": "Exponential growth means area increases rapidly with $k$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the answer",
          "workingLatex": "k = \\ln 4",
          "explanation": "Exact value of $k$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Decimal",
          "workingLatex": "k \\approx 1.386",
          "explanation": "Numerical check.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Method",
          "workingLatex": "\\text{integrate then solve}",
          "explanation": "Standard integral followed by logarithms.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Final",
          "workingLatex": "k = \\ln 4 = 2\\ln 2",
          "explanation": "Complete answer.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Summary",
          "workingLatex": "k = \\ln 4",
          "explanation": "The boundary is at $x = \\ln 4$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$k = \\ln 4 = 2\\ln 2$."
    }
  },
  {
    "id": "al.y2.pure.standard-integrals.q065",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "standard integrals",
      "linear argument"
    ],
    "questionText": "Find $\\displaystyle\\int \\left(2e^{3x-1} - \\dfrac{5}{x}\\right) dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Split terms",
          "workingLatex": "\\int (2e^{3x-1} - \\dfrac{5}{x})\\,dx",
          "explanation": "Handle exponential and reciprocal separately.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate $2e^{3x-1}$",
          "workingLatex": "\\int 2e^{3x-1}\\,dx = 2 \\cdot \\dfrac{1}{3}e^{3x-1} = \\dfrac{2}{3}e^{3x-1}",
          "explanation": "Use $\\int e^{ax+b}\\,dx = \\dfrac{1}{a}e^{ax+b}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate $-\\dfrac{5}{x}$",
          "workingLatex": "-5\\ln|x|",
          "explanation": "Standard reciprocal integral.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Combine",
          "workingLatex": "\\dfrac{2}{3}e^{3x-1} - 5\\ln|x|",
          "explanation": "Add the parts.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Add $+c$",
          "workingLatex": "\\dfrac{2}{3}e^{3x-1} - 5\\ln|x| + c",
          "explanation": "Constant of integration.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check",
          "workingLatex": "\\text{differentiate}",
          "explanation": "Verify each term.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Domain",
          "workingLatex": "x \\neq 0",
          "explanation": "Reciprocal excludes zero.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Exponent form",
          "workingLatex": "e^{3x-1}",
          "explanation": "Linear argument in the exponential.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Summary",
          "workingLatex": "\\dfrac{2}{3}e^{3x-1} - 5\\ln|x| + c",
          "explanation": "Complete antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Answer",
          "workingLatex": "\\dfrac{2}{3}e^{3x-1} - 5\\ln|x| + c",
          "explanation": "Required result.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Note",
          "workingLatex": "\\dfrac{2}{3}",
          "explanation": "Factor from $k=3$ in exponent.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Final",
          "workingLatex": "\\dfrac{2}{3}e^{3x-1} - 5\\ln|x| + c",
          "explanation": "Standard integrals only.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Done",
          "workingLatex": "\\dfrac{2}{3}e^{3x-1} - 5\\ln|x| + c",
          "explanation": "Complete.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\left(2e^{3x-1} - \\dfrac{5}{x}\\right) dx = \\dfrac{2}{3}e^{3x-1} - 5\\ln|x| + c$."
    }
  },
  {
    "id": "al.y2.pure.standard-integrals.q066",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "exact",
    "tags": [
      "standard integrals",
      "definite integral",
      "mixed"
    ],
    "questionText": "Evaluate $\\displaystyle\\int_{1}^{e} \\left(e^{x} + \\sin(2x) + \\dfrac{1}{x}\\right) dx$ exactly, simplifying your answer.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Split",
          "workingLatex": "\\int_{1}^{e} e^{x}\\,dx + \\int_{1}^{e} \\sin(2x)\\,dx + \\int_{1}^{e} \\dfrac{1}{x}\\,dx",
          "explanation": "Three standard integrals on $x>0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "$e^{x}$ part",
          "workingLatex": "[e^{x}]_{1}^{e} = e^{e} - e",
          "explanation": "Direct evaluation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "$\\sin(2x)$ part",
          "workingLatex": "\\left[-\\dfrac{1}{2}\\cos(2x)\\right]_{1}^{e} = -\\dfrac{1}{2}(\\cos 2e - \\cos 2)",
          "explanation": "Integrate using $\\int \\sin(2x)\\,dx = -\\tfrac{1}{2}\\cos(2x)$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "$\\dfrac{1}{x}$ part",
          "workingLatex": "[\\ln x]_{1}^{e} = 1",
          "explanation": "Logarithm evaluation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Combine",
          "workingLatex": "e^{e} - e + 1 - \\dfrac{1}{2}(\\cos 2e - \\cos 2)",
          "explanation": "Sum all three contributions.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Expand",
          "workingLatex": "e^{e} - e + 1 + \\dfrac{1}{2}\\cos 2 - \\dfrac{1}{2}\\cos 2e",
          "explanation": "Distribute the minus sign.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Exact form",
          "workingLatex": "e^{e} - e + \\dfrac{1}{2}(\\cos 2 - \\cos 2e) + 1",
          "explanation": "Leave trig values in exact form.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check $x>0$",
          "workingLatex": "1 \\le x \\le e",
          "explanation": "Logarithm requires positive limits.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Numerical estimate",
          "workingLatex": "\\approx 16.0",
          "explanation": "Calculator check for plausibility.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State answer",
          "workingLatex": "e^{e} - e + 1 + \\dfrac{1}{2}\\cos 2 - \\dfrac{1}{2}\\cos 2e",
          "explanation": "Exact simplified form.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Method",
          "workingLatex": "\\text{term by term}",
          "explanation": "Each term uses a standard integral.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Trig in radians",
          "workingLatex": "\\cos 2,\\ \\cos 2e",
          "explanation": "Arguments are in radians.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Final",
          "workingLatex": "e^{e} - e + 1 + \\dfrac{1}{2}\\cos 2 - \\dfrac{1}{2}\\cos 2e",
          "explanation": "Complete exact answer.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Summary",
          "workingLatex": "\\text{exponential + trig + log}",
          "explanation": "Mixed standard integral problem.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{1}^{e} \\left(e^{x} + \\sin(2x) + \\dfrac{1}{x}\\right) dx = e^{e} - e + 1 + \\dfrac{1}{2}\\cos 2 - \\dfrac{1}{2}\\cos 2e$."
    }
  },
  {
    "id": "al.y2.pure.standard-integrals.q067",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "exact",
    "tags": [
      "standard integrals",
      "definite integral",
      "reciprocal"
    ],
    "questionText": "Evaluate $\\displaystyle\\int_{-2}^{-1} \\dfrac{1}{x}\\,dx$ exactly.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Note the interval",
          "workingLatex": "-2 \\le x \\le -1",
          "explanation": "Both limits are negative, so $|x| = -x$ on this interval.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Antiderivative",
          "workingLatex": "F(x) = \\ln|x|",
          "explanation": "Use the modulus form for $\\int \\dfrac{1}{x}\\,dx$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Upper limit",
          "workingLatex": "F(-1) = \\ln|-1| = \\ln 1 = 0",
          "explanation": "At $x=-1$, $|x|=1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Lower limit",
          "workingLatex": "F(-2) = \\ln|-2| = \\ln 2",
          "explanation": "At $x=-2$, $|x|=2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Subtract",
          "workingLatex": "0 - \\ln 2 = -\\ln 2",
          "explanation": "The integral is negative — the function $\\dfrac{1}{x}$ is negative on $(-2,-1)$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret",
          "workingLatex": "\\text{signed area below the axis}",
          "explanation": "A negative result reflects area below the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Alternative",
          "workingLatex": "[\\ln(-x)]_{-2}^{-1}",
          "explanation": "On $x<0$, $\\ln|x| = \\ln(-x)$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify sign",
          "workingLatex": "\\dfrac{1}{x} < 0 \\text{ on } (-2,-1)",
          "explanation": "Reciprocal of negative $x$ is negative.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State answer",
          "workingLatex": "\\displaystyle\\int_{-2}^{-1} \\dfrac{1}{x}\\,dx = -\\ln 2",
          "explanation": "Exact value.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Decimal",
          "workingLatex": "-\\ln 2 \\approx -0.693",
          "explanation": "Numerical check.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Modulus importance",
          "workingLatex": "\\ln|x|",
          "explanation": "Without modulus the antiderivative would fail on negative $x$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Summary",
          "workingLatex": "-\\ln 2",
          "explanation": "Signed area result.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Final",
          "workingLatex": "-\\ln 2",
          "explanation": "Complete answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{-2}^{-1} \\dfrac{1}{x}\\,dx = -\\ln 2$."
    }
  },
  {
    "id": "al.y2.pure.standard-integrals.q068",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "exact",
    "tags": [
      "standard integrals",
      "modelling",
      "kinematics"
    ],
    "questionText": "A particle moves along a line so that its acceleration is $a = 3e^{t}$ m s$^{-2}$. When $t = 0$, its velocity is $2$ m s$^{-1}$ and its displacement from a fixed point $O$ is $0$ m. Find $v$ and $s$ in terms of $t$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Integrate acceleration for velocity",
          "workingLatex": "v = \\int 3e^{t}\\,dt = 3e^{t} + c_{1}",
          "explanation": "Velocity is the antiderivative of acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Use $v(0) = 2$",
          "workingLatex": "2 = 3e^{0} + c_{1} = 3 + c_{1} \\Rightarrow c_{1} = -1",
          "explanation": "Substitute the initial velocity.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Velocity",
          "workingLatex": "v = 3e^{t} - 1",
          "explanation": "Particular solution for velocity.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate velocity for displacement",
          "workingLatex": "s = \\int (3e^{t} - 1)\\,dt = 3e^{t} - t + c_{2}",
          "explanation": "Displacement is the antiderivative of velocity.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Use $s(0) = 0$",
          "workingLatex": "0 = 3 + c_{2} \\Rightarrow c_{2} = -3",
          "explanation": "Substitute the initial displacement.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Displacement",
          "workingLatex": "s = 3e^{t} - t - 3",
          "explanation": "Particular solution for displacement.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify acceleration",
          "workingLatex": "\\frac{dv}{dt} = 3e^{t}",
          "explanation": "Differentiating $v$ recovers $a$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify velocity at $t=0$",
          "workingLatex": "v(0) = 2",
          "explanation": "Initial condition satisfied.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify displacement at $t=0$",
          "workingLatex": "s(0) = 0",
          "explanation": "Starting point confirmed.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Interpret",
          "workingLatex": "\\text{exponential speed growth}",
          "explanation": "Velocity increases without bound as $t$ grows.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State $v$",
          "workingLatex": "v = 3e^{t} - 1",
          "explanation": "Velocity in terms of $t$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State $s$",
          "workingLatex": "s = 3e^{t} - t - 3",
          "explanation": "Displacement in terms of $t$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Units",
          "workingLatex": "v \\text{ in m s}^{-1},\\ s \\text{ in m}",
          "explanation": "Include appropriate units.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Summary",
          "workingLatex": "v = 3e^{t} - 1,\\ s = 3e^{t} - t - 3",
          "explanation": "Complete kinematics solution.",
          "diagram": null
        }
      ],
      "finalAnswer": "$v = 3e^{t} - 1$ m s$^{-1}$ and $s = 3e^{t} - t - 3$ m."
    }
  },
  {
    "id": "al.y2.pure.standard-integrals.q069",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "standard integrals",
      "mixed"
    ],
    "questionText": "Find $\\displaystyle\\int \\left(4e^{2x} + 3\\sin x - \\dfrac{6}{x}\\right) dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Split",
          "workingLatex": "\\int 4e^{2x}\\,dx + \\int 3\\sin x\\,dx - \\int \\dfrac{6}{x}\\,dx",
          "explanation": "Integrate each standard form separately.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "$4e^{2x}$",
          "workingLatex": "4 \\cdot \\dfrac{1}{2}e^{2x} = 2e^{2x}",
          "explanation": "Divide by $2$ from the exponent.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "$3\\sin x$",
          "workingLatex": "3(-\\cos x) = -3\\cos x",
          "explanation": "Sine integrates to negative cosine.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "$\\dfrac{6}{x}$",
          "workingLatex": "6\\ln|x|",
          "explanation": "Reciprocal integrates to logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Combine",
          "workingLatex": "2e^{2x} - 3\\cos x - 6\\ln|x| + c",
          "explanation": "Watch the minus sign on the log term.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check",
          "workingLatex": "\\frac{d}{dx}(2e^{2x} - 3\\cos x - 6\\ln|x|) = 4e^{2x} + 3\\sin x - \\dfrac{6}{x}",
          "explanation": "Differentiation recovers the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Domain",
          "workingLatex": "x \\neq 0",
          "explanation": "Logarithm and reciprocal restrictions.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Summary",
          "workingLatex": "2e^{2x} - 3\\cos x - 6\\ln|x| + c",
          "explanation": "Complete antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Terms",
          "workingLatex": "\\text{exp, trig, log}",
          "explanation": "Three standard families combined.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Answer",
          "workingLatex": "2e^{2x} - 3\\cos x - 6\\ln|x| + c",
          "explanation": "Required result.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Coefficients",
          "workingLatex": "2,\\ -3,\\ -6",
          "explanation": "Track each constant carefully.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Final",
          "workingLatex": "2e^{2x} - 3\\cos x - 6\\ln|x| + c",
          "explanation": "Complete answer.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Done",
          "workingLatex": "2e^{2x} - 3\\cos x - 6\\ln|x| + c",
          "explanation": "Standard integrals only.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\left(4e^{2x} + 3\\sin x - \\dfrac{6}{x}\\right) dx = 2e^{2x} - 3\\cos x - 6\\ln|x| + c$."
    }
  },
  {
    "id": "al.y2.pure.standard-integrals.q070",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard integrals",
    "subtopicId": "al.y2.pure.standard-integrals",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "exact",
    "tags": [
      "standard integrals",
      "definite integral",
      "challenge"
    ],
    "questionText": "Evaluate $\\displaystyle\\int_{0}^{\\pi/2} \\left(e^{x} + 2\\sin x + \\dfrac{3}{x+1}\\right) dx$ exactly, giving your answer in terms of $e$, $\\ln$ and trigonometric values.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Split the integral",
          "workingLatex": "\\int_{0}^{\\pi/2} e^{x}\\,dx + 2\\int_{0}^{\\pi/2} \\sin x\\,dx + 3\\int_{0}^{\\pi/2} \\dfrac{1}{x+1}\\,dx",
          "explanation": "Three standard integrals; note $x+1>0$ on $[0,\\pi/2]$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Exponential part",
          "workingLatex": "[e^{x}]_{0}^{\\pi/2} = e^{\\pi/2} - 1",
          "explanation": "Direct evaluation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Sine part",
          "workingLatex": "2[-\\cos x]_{0}^{\\pi/2} = 2(0 - (-1)) = 2",
          "explanation": "Standard sine integral over a quarter period.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Reciprocal part",
          "workingLatex": "3[\\ln(x+1)]_{0}^{\\pi/2} = 3\\left(\\ln\\left(1+\\dfrac{\\pi}{2}\\right) - \\ln 1\\right) = 3\\ln\\left(1+\\dfrac{\\pi}{2}\\right)",
          "explanation": "Use $\\int \\dfrac{1}{x+1}\\,dx = \\ln|x+1|$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Combine",
          "workingLatex": "e^{\\pi/2} - 1 + 2 + 3\\ln\\left(1+\\dfrac{\\pi}{2}\\right)",
          "explanation": "Sum all three contributions.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify constants",
          "workingLatex": "e^{\\pi/2} + 1 + 3\\ln\\left(1+\\dfrac{\\pi}{2}\\right)",
          "explanation": "Combine $-1+2=1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Exact form",
          "workingLatex": "e^{\\pi/2} + 1 + 3\\ln\\left(1+\\dfrac{\\pi}{2}\\right)",
          "explanation": "Leave in exact form as required.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Domain check",
          "workingLatex": "x+1 > 0 \\text{ on } [0, \\pi/2]",
          "explanation": "Logarithm is valid throughout the interval.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Numerical estimate",
          "workingLatex": "\\approx 6.5",
          "explanation": "Calculator check for plausibility.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Interpret parts",
          "workingLatex": "\\text{growth + trig area + log scaling}",
          "explanation": "Each term contributes a different standard area.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State answer",
          "workingLatex": "e^{\\pi/2} + 1 + 3\\ln\\left(1+\\dfrac{\\pi}{2}\\right)",
          "explanation": "Exact value.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Method summary",
          "workingLatex": "\\text{three standard integrals}",
          "explanation": "No substitution beyond $f(ax+b)$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Trig values",
          "workingLatex": "\\cos(\\pi/2)=0,\\ \\cos 0=1",
          "explanation": "Used in the sine evaluation.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Final",
          "workingLatex": "e^{\\pi/2} + 1 + 3\\ln\\left(1+\\dfrac{\\pi}{2}\\right)",
          "explanation": "Complete exact answer.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Summary",
          "workingLatex": "e^{\\pi/2} + 1 + 3\\ln\\left(1+\\dfrac{\\pi}{2}\\right)",
          "explanation": "Mixed standard integral evaluation.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "Units",
          "workingLatex": "\\text{pure area}",
          "explanation": "Definite integral gives a scalar area value.",
          "diagram": null
        },
        {
          "stepNumber": 17,
          "description": "Answer",
          "workingLatex": "e^{\\pi/2} + 1 + 3\\ln\\left(1+\\dfrac{\\pi}{2}\\right)",
          "explanation": "Required exact result.",
          "diagram": null
        },
        {
          "stepNumber": 18,
          "description": "Done",
          "workingLatex": "e^{\\pi/2} + 1 + 3\\ln\\left(1+\\dfrac{\\pi}{2}\\right)",
          "explanation": "Challenge question complete.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{0}^{\\pi/2} \\left(e^{x} + 2\\sin x + \\dfrac{3}{x+1}\\right) dx = e^{\\pi/2} + 1 + 3\\ln\\left(1+\\dfrac{\\pi}{2}\\right)$."
    }
  }
];
