import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-substitution.q001",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "integration by substitution",
      "polynomial"
    ],
    "questionText": "Use substitution to find $\\displaystyle\\int 2x(x^{2}+1)^{5}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose a substitution",
          "workingLatex": "u = x^{2}+1",
          "explanation": "Look for a function whose derivative also appears as a factor in the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate",
          "workingLatex": "\\dfrac{du}{dx} = 2x",
          "explanation": "Find $du$ in terms of $dx$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange",
          "workingLatex": "du = (2x)\\,dx",
          "explanation": "Express $dx$ (or the matching factor) in terms of $du$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the integral",
          "workingLatex": "\\int u^{5}\\,du",
          "explanation": "Replace every part of the integral with $u$-terms.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate with respect to u",
          "workingLatex": "\\dfrac{1}{6}(x^{2}+1)^{6}",
          "explanation": "Integrate the simpler expression in $u$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Replace u",
          "workingLatex": "\\dfrac{1}{6}(x^{2}+1)^{6} + c",
          "explanation": "Substitute back the original expression for $u$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int 2x(x^{2}+1)^{5}\\,dx = \\dfrac{1}{6}(x^{2}+1)^{6} + c",
          "explanation": "Include $+c$ for an indefinite integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int 2x(x^{2}+1)^{5}\\,dx = \\dfrac{1}{6}(x^{2}+1)^{6} + c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-substitution.q002",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "integration by substitution",
      "trigonometric"
    ],
    "questionText": "Use substitution to find $\\displaystyle\\int 3x^{2}\\cos(x^{3})\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose a substitution",
          "workingLatex": "u = x^{3}",
          "explanation": "Look for a function whose derivative also appears as a factor in the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate",
          "workingLatex": "\\dfrac{du}{dx} = 3x^{2}",
          "explanation": "Find $du$ in terms of $dx$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange",
          "workingLatex": "du = (3x^{2})\\,dx",
          "explanation": "Express $dx$ (or the matching factor) in terms of $du$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the integral",
          "workingLatex": "\\int \\cos u\\,du",
          "explanation": "Replace every part of the integral with $u$-terms.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate with respect to u",
          "workingLatex": "\\sin(x^{3})",
          "explanation": "Integrate the simpler expression in $u$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Replace u",
          "workingLatex": "\\sin(x^{3}) + c",
          "explanation": "Substitute back the original expression for $u$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int 3x^{2}\\cos(x^{3})\\,dx = \\sin(x^{3}) + c",
          "explanation": "Include $+c$ for an indefinite integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int 3x^{2}\\cos(x^{3})\\,dx = \\sin(x^{3}) + c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-substitution.q003",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "integration by substitution",
      "exponential"
    ],
    "questionText": "Use substitution to find $\\displaystyle\\int xe^{x^{2}}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose a substitution",
          "workingLatex": "u = x^{2}",
          "explanation": "Look for a function whose derivative also appears as a factor in the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate",
          "workingLatex": "\\dfrac{du}{dx} = 2x",
          "explanation": "Find $du$ in terms of $dx$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange",
          "workingLatex": "du = (2x)\\,dx",
          "explanation": "Express $dx$ (or the matching factor) in terms of $du$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the integral",
          "workingLatex": "\\int \\dfrac{1}{2}e^{u}\\,du",
          "explanation": "Replace every part of the integral with $u$-terms.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate with respect to u",
          "workingLatex": "\\dfrac{1}{2}e^{x^{2}}",
          "explanation": "Integrate the simpler expression in $u$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Replace u",
          "workingLatex": "\\dfrac{1}{2}e^{x^{2}} + c",
          "explanation": "Substitute back the original expression for $u$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int xe^{x^{2}}\\,dx = \\dfrac{1}{2}e^{x^{2}} + c",
          "explanation": "Include $+c$ for an indefinite integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int xe^{x^{2}}\\,dx = \\dfrac{1}{2}e^{x^{2}} + c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-substitution.q004",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "integration by substitution",
      "surds"
    ],
    "questionText": "Use substitution to find $\\displaystyle\\int x\\sqrt{x^{2}+1}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose a substitution",
          "workingLatex": "u = x^{2}+1",
          "explanation": "Look for a function whose derivative also appears as a factor in the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate",
          "workingLatex": "\\dfrac{du}{dx} = 2x",
          "explanation": "Find $du$ in terms of $dx$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange",
          "workingLatex": "du = (2x)\\,dx",
          "explanation": "Express $dx$ (or the matching factor) in terms of $du$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the integral",
          "workingLatex": "\\int \\dfrac{1}{2}\\sqrt{u}\\,du",
          "explanation": "Replace every part of the integral with $u$-terms.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate with respect to u",
          "workingLatex": "\\dfrac{1}{3}(x^{2}+1)^{3/2}",
          "explanation": "Integrate the simpler expression in $u$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Replace u",
          "workingLatex": "\\dfrac{1}{3}(x^{2}+1)^{3/2} + c",
          "explanation": "Substitute back the original expression for $u$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int x\\sqrt{x^{2}+1}\\,dx = \\dfrac{1}{3}(x^{2}+1)^{3/2} + c",
          "explanation": "Include $+c$ for an indefinite integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int x\\sqrt{x^{2}+1}\\,dx = \\dfrac{1}{3}(x^{2}+1)^{3/2} + c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-substitution.q005",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "integration by substitution",
      "logarithm"
    ],
    "questionText": "Use substitution to find $\\displaystyle\\int \\dfrac{2x}{x^{2}+1}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose a substitution",
          "workingLatex": "u = x^{2}+1",
          "explanation": "Look for a function whose derivative also appears as a factor in the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate",
          "workingLatex": "\\dfrac{du}{dx} = 2x",
          "explanation": "Find $du$ in terms of $dx$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange",
          "workingLatex": "du = (2x)\\,dx",
          "explanation": "Express $dx$ (or the matching factor) in terms of $du$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the integral",
          "workingLatex": "\\int \\dfrac{1}{u}\\,du",
          "explanation": "Replace every part of the integral with $u$-terms.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate with respect to u",
          "workingLatex": "\\ln|x^{2}+1|",
          "explanation": "Integrate the simpler expression in $u$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Replace u",
          "workingLatex": "\\ln|x^{2}+1| + c",
          "explanation": "Substitute back the original expression for $u$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int \\dfrac{2x}{x^{2}+1}\\,dx = \\ln|x^{2}+1| + c",
          "explanation": "Include $+c$ for an indefinite integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\dfrac{2x}{x^{2}+1}\\,dx = \\ln|x^{2}+1| + c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-substitution.q006",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "integration by substitution",
      "polynomial"
    ],
    "questionText": "Use substitution to find $\\displaystyle\\int 4x^{3}(x^{4}-3)^{2}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose a substitution",
          "workingLatex": "u = x^{4}-3",
          "explanation": "Look for a function whose derivative also appears as a factor in the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate",
          "workingLatex": "\\dfrac{du}{dx} = 4x^{3}",
          "explanation": "Find $du$ in terms of $dx$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange",
          "workingLatex": "du = (4x^{3})\\,dx",
          "explanation": "Express $dx$ (or the matching factor) in terms of $du$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the integral",
          "workingLatex": "\\int u^{2}\\,du",
          "explanation": "Replace every part of the integral with $u$-terms.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate with respect to u",
          "workingLatex": "\\dfrac{1}{3}(x^{4}-3)^{3}",
          "explanation": "Integrate the simpler expression in $u$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Replace u",
          "workingLatex": "\\dfrac{1}{3}(x^{4}-3)^{3} + c",
          "explanation": "Substitute back the original expression for $u$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int 4x^{3}(x^{4}-3)^{2}\\,dx = \\dfrac{1}{3}(x^{4}-3)^{3} + c",
          "explanation": "Include $+c$ for an indefinite integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int 4x^{3}(x^{4}-3)^{2}\\,dx = \\dfrac{1}{3}(x^{4}-3)^{3} + c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-substitution.q007",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "integration by substitution",
      "linear denominator"
    ],
    "questionText": "Use substitution to find $\\displaystyle\\int \\dfrac{1}{2x+1}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose a substitution",
          "workingLatex": "u = 2x+1",
          "explanation": "Look for a function whose derivative also appears as a factor in the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate",
          "workingLatex": "\\dfrac{du}{dx} = 2",
          "explanation": "Find $du$ in terms of $dx$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange",
          "workingLatex": "du = (2)\\,dx",
          "explanation": "Express $dx$ (or the matching factor) in terms of $du$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the integral",
          "workingLatex": "\\int \\dfrac{1}{u}\\,du",
          "explanation": "Replace every part of the integral with $u$-terms.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate with respect to u",
          "workingLatex": "\\dfrac{1}{2}\\ln|2x+1|",
          "explanation": "Integrate the simpler expression in $u$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Replace u",
          "workingLatex": "\\dfrac{1}{2}\\ln|2x+1| + c",
          "explanation": "Substitute back the original expression for $u$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int \\dfrac{1}{2x+1}\\,dx = \\dfrac{1}{2}\\ln|2x+1| + c",
          "explanation": "Include $+c$ for an indefinite integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\dfrac{1}{2x+1}\\,dx = \\dfrac{1}{2}\\ln|2x+1| + c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-substitution.q008",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "integration by substitution",
      "exponential"
    ],
    "questionText": "Use substitution to find $\\displaystyle\\int e^{3x}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose a substitution",
          "workingLatex": "u = 3x",
          "explanation": "Look for a function whose derivative also appears as a factor in the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate",
          "workingLatex": "\\dfrac{du}{dx} = 3",
          "explanation": "Find $du$ in terms of $dx$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange",
          "workingLatex": "du = (3)\\,dx",
          "explanation": "Express $dx$ (or the matching factor) in terms of $du$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the integral",
          "workingLatex": "\\int e^{u}\\,du",
          "explanation": "Replace every part of the integral with $u$-terms.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate with respect to u",
          "workingLatex": "\\dfrac{1}{3}e^{3x}",
          "explanation": "Integrate the simpler expression in $u$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Replace u",
          "workingLatex": "\\dfrac{1}{3}e^{3x} + c",
          "explanation": "Substitute back the original expression for $u$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int e^{3x}\\,dx = \\dfrac{1}{3}e^{3x} + c",
          "explanation": "Include $+c$ for an indefinite integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int e^{3x}\\,dx = \\dfrac{1}{3}e^{3x} + c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-substitution.q009",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "integration by substitution",
      "trigonometric"
    ],
    "questionText": "Use substitution to find $\\displaystyle\\int \\sin(2x)\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose a substitution",
          "workingLatex": "u = 2x",
          "explanation": "Look for a function whose derivative also appears as a factor in the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate",
          "workingLatex": "\\dfrac{du}{dx} = 2",
          "explanation": "Find $du$ in terms of $dx$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange",
          "workingLatex": "du = (2)\\,dx",
          "explanation": "Express $dx$ (or the matching factor) in terms of $du$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the integral",
          "workingLatex": "\\int \\cos u\\,du",
          "explanation": "Replace every part of the integral with $u$-terms.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate with respect to u",
          "workingLatex": "-\\dfrac{1}{2}\\cos(2x)",
          "explanation": "Integrate the simpler expression in $u$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Replace u",
          "workingLatex": "-\\dfrac{1}{2}\\cos(2x) + c",
          "explanation": "Substitute back the original expression for $u$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int \\sin(2x)\\,dx = -\\dfrac{1}{2}\\cos(2x) + c",
          "explanation": "Include $+c$ for an indefinite integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\sin(2x)\\,dx = -\\dfrac{1}{2}\\cos(2x) + c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-substitution.q010",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "integration by substitution",
      "trigonometric"
    ],
    "questionText": "Use substitution to find $\\displaystyle\\int \\cos(3x)\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose a substitution",
          "workingLatex": "u = 3x",
          "explanation": "Look for a function whose derivative also appears as a factor in the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate",
          "workingLatex": "\\dfrac{du}{dx} = 3",
          "explanation": "Find $du$ in terms of $dx$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange",
          "workingLatex": "du = (3)\\,dx",
          "explanation": "Express $dx$ (or the matching factor) in terms of $du$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the integral",
          "workingLatex": "\\int \\sin u\\,du",
          "explanation": "Replace every part of the integral with $u$-terms.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate with respect to u",
          "workingLatex": "\\dfrac{1}{3}\\sin(3x)",
          "explanation": "Integrate the simpler expression in $u$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Replace u",
          "workingLatex": "\\dfrac{1}{3}\\sin(3x) + c",
          "explanation": "Substitute back the original expression for $u$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int \\cos(3x)\\,dx = \\dfrac{1}{3}\\sin(3x) + c",
          "explanation": "Include $+c$ for an indefinite integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\cos(3x)\\,dx = \\dfrac{1}{3}\\sin(3x) + c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-substitution.q011",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "integration by substitution",
      "surds"
    ],
    "questionText": "Use substitution to find $\\displaystyle\\int x(x^{2}+4)^{-1/2}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose a substitution",
          "workingLatex": "u = x^{2}+4",
          "explanation": "Look for a function whose derivative also appears as a factor in the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate",
          "workingLatex": "\\dfrac{du}{dx} = 2x",
          "explanation": "Find $du$ in terms of $dx$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange",
          "workingLatex": "du = (2x)\\,dx",
          "explanation": "Express $dx$ (or the matching factor) in terms of $du$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the integral",
          "workingLatex": "\\int \\dfrac{1}{2}u^{-1/2}\\,du",
          "explanation": "Replace every part of the integral with $u$-terms.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate with respect to u",
          "workingLatex": "\\sqrt{x^{2}+4}",
          "explanation": "Integrate the simpler expression in $u$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Replace u",
          "workingLatex": "\\sqrt{x^{2}+4} + c",
          "explanation": "Substitute back the original expression for $u$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int x(x^{2}+4)^{-1/2}\\,dx = \\sqrt{x^{2}+4} + c",
          "explanation": "Include $+c$ for an indefinite integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int x(x^{2}+4)^{-1/2}\\,dx = \\sqrt{x^{2}+4} + c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-substitution.q012",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "integration by substitution",
      "polynomial"
    ],
    "questionText": "Use substitution to find $\\displaystyle\\int 5x^{4}(x^{5}+2)^{3}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose a substitution",
          "workingLatex": "u = x^{5}+2",
          "explanation": "Look for a function whose derivative also appears as a factor in the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate",
          "workingLatex": "\\dfrac{du}{dx} = 5x^{4}",
          "explanation": "Find $du$ in terms of $dx$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange",
          "workingLatex": "du = (5x^{4})\\,dx",
          "explanation": "Express $dx$ (or the matching factor) in terms of $du$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the integral",
          "workingLatex": "\\int u^{3}\\,du",
          "explanation": "Replace every part of the integral with $u$-terms.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate with respect to u",
          "workingLatex": "\\dfrac{1}{4}(x^{5}+2)^{4}",
          "explanation": "Integrate the simpler expression in $u$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Replace u",
          "workingLatex": "\\dfrac{1}{4}(x^{5}+2)^{4} + c",
          "explanation": "Substitute back the original expression for $u$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int 5x^{4}(x^{5}+2)^{3}\\,dx = \\dfrac{1}{4}(x^{5}+2)^{4} + c",
          "explanation": "Include $+c$ for an indefinite integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int 5x^{4}(x^{5}+2)^{3}\\,dx = \\dfrac{1}{4}(x^{5}+2)^{4} + c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-substitution.q013",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "integration by substitution",
      "logarithm"
    ],
    "questionText": "Use substitution to find $\\displaystyle\\int \\dfrac{x}{x^{2}+9}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose a substitution",
          "workingLatex": "u = x^{2}+9",
          "explanation": "Look for a function whose derivative also appears as a factor in the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate",
          "workingLatex": "\\dfrac{du}{dx} = 2x",
          "explanation": "Find $du$ in terms of $dx$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange",
          "workingLatex": "du = (2x)\\,dx",
          "explanation": "Express $dx$ (or the matching factor) in terms of $du$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the integral",
          "workingLatex": "\\int \\dfrac{1}{2u}\\,du",
          "explanation": "Replace every part of the integral with $u$-terms.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate with respect to u",
          "workingLatex": "\\dfrac{1}{2}\\ln(x^{2}+9)",
          "explanation": "Integrate the simpler expression in $u$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Replace u",
          "workingLatex": "\\dfrac{1}{2}\\ln(x^{2}+9) + c",
          "explanation": "Substitute back the original expression for $u$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int \\dfrac{x}{x^{2}+9}\\,dx = \\dfrac{1}{2}\\ln(x^{2}+9) + c",
          "explanation": "Include $+c$ for an indefinite integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\dfrac{x}{x^{2}+9}\\,dx = \\dfrac{1}{2}\\ln(x^{2}+9) + c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-substitution.q014",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "integration by substitution",
      "trigonometric"
    ],
    "questionText": "Use substitution to find $\\displaystyle\\int 2x\\sin(x^{2})\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose a substitution",
          "workingLatex": "u = x^{2}",
          "explanation": "Look for a function whose derivative also appears as a factor in the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate",
          "workingLatex": "\\dfrac{du}{dx} = 2x",
          "explanation": "Find $du$ in terms of $dx$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange",
          "workingLatex": "du = (2x)\\,dx",
          "explanation": "Express $dx$ (or the matching factor) in terms of $du$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the integral",
          "workingLatex": "\\int \\sin u\\,du",
          "explanation": "Replace every part of the integral with $u$-terms.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate with respect to u",
          "workingLatex": "-\\cos(x^{2})",
          "explanation": "Integrate the simpler expression in $u$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Replace u",
          "workingLatex": "-\\cos(x^{2}) + c",
          "explanation": "Substitute back the original expression for $u$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int 2x\\sin(x^{2})\\,dx = -\\cos(x^{2}) + c",
          "explanation": "Include $+c$ for an indefinite integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int 2x\\sin(x^{2})\\,dx = -\\cos(x^{2}) + c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-substitution.q015",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "integration by substitution",
      "exponential"
    ],
    "questionText": "Use substitution to find $\\displaystyle\\int \\dfrac{e^{x}}{e^{x}+1}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose a substitution",
          "workingLatex": "u = e^{x}+1",
          "explanation": "Look for a function whose derivative also appears as a factor in the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate",
          "workingLatex": "\\dfrac{du}{dx} = e^{x}",
          "explanation": "Find $du$ in terms of $dx$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange",
          "workingLatex": "du = (e^{x})\\,dx",
          "explanation": "Express $dx$ (or the matching factor) in terms of $du$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the integral",
          "workingLatex": "\\int \\dfrac{1}{u}\\,du",
          "explanation": "Replace every part of the integral with $u$-terms.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate with respect to u",
          "workingLatex": "\\ln|e^{x}+1|",
          "explanation": "Integrate the simpler expression in $u$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Replace u",
          "workingLatex": "\\ln|e^{x}+1| + c",
          "explanation": "Substitute back the original expression for $u$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int \\dfrac{e^{x}}{e^{x}+1}\\,dx = \\ln|e^{x}+1| + c",
          "explanation": "Include $+c$ for an indefinite integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\dfrac{e^{x}}{e^{x}+1}\\,dx = \\ln|e^{x}+1| + c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-substitution.q016",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "integration by substitution",
      "reverse chain rule"
    ],
    "questionText": "Find $\\displaystyle\\int 3x^{2}(x^{3}+1)^{4}\\,dx$ by recognising a reverse chain rule.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise the form",
          "workingLatex": "\\int f'(x^{3}+1) \\cdot g(x^{3}+1)\\,dx",
          "explanation": "The integrand is a derivative of the inner function times something of the inner function.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the inner function",
          "workingLatex": "u = x^{3}+1",
          "explanation": "Choose $u$ to be the inner function.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Note the derivative factor",
          "workingLatex": "\\dfrac{du}{dx} \\text{ appears in the integrand}",
          "explanation": "The coefficient matches the derivative of $u$ (up to a constant).",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate directly",
          "workingLatex": "\\int u^{4}\\,du = \\dfrac{1}{5}(u)^{5}",
          "explanation": "This is reverse chain rule integration.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Replace u",
          "workingLatex": "\\dfrac{1}{5}(x^{3}+1)^{5} + c",
          "explanation": "Write the answer in terms of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify",
          "workingLatex": "\\dfrac{d}{dx}(\\dfrac{1}{5}(x^{3}+1)^{5}) = 3x^{2}(x^{3}+1)^{4}",
          "explanation": "Differentiate to confirm.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int 3x^{2}(x^{3}+1)^{4}\\,dx = \\dfrac{1}{5}(x^{3}+1)^{5} + c",
          "explanation": "Final antiderivative.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int 3x^{2}(x^{3}+1)^{4}\\,dx = \\dfrac{1}{5}(x^{3}+1)^{5} + c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-substitution.q017",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "integration by substitution",
      "reverse chain rule"
    ],
    "questionText": "Find $\\displaystyle\\int \\dfrac{4x^{3}}{x^{4}+1}\\,dx$ by recognising a reverse chain rule.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise the form",
          "workingLatex": "\\int f'(x^{4}+1) \\cdot g(x^{4}+1)\\,dx",
          "explanation": "The integrand is a derivative of the inner function times something of the inner function.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the inner function",
          "workingLatex": "u = x^{4}+1",
          "explanation": "Choose $u$ to be the inner function.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Note the derivative factor",
          "workingLatex": "\\dfrac{du}{dx} \\text{ appears in the integrand}",
          "explanation": "The coefficient matches the derivative of $u$ (up to a constant).",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate directly",
          "workingLatex": "\\int \\dfrac{1}{u}\\,du = \\ln|u|",
          "explanation": "This is reverse chain rule integration.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Replace u",
          "workingLatex": "\\ln|x^{4}+1| + c",
          "explanation": "Write the answer in terms of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify",
          "workingLatex": "\\dfrac{d}{dx}(\\ln|x^{4}+1|) = \\dfrac{4x^{3}}{x^{4}+1}",
          "explanation": "Differentiate to confirm.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int \\dfrac{4x^{3}}{x^{4}+1}\\,dx = \\ln|x^{4}+1| + c",
          "explanation": "Final antiderivative.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\dfrac{4x^{3}}{x^{4}+1}\\,dx = \\ln|x^{4}+1| + c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-substitution.q018",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "integration by substitution",
      "double angle",
      "reverse chain rule"
    ],
    "questionText": "Find $\\displaystyle\\int 2\\cos x \\sin x\\,dx$ by recognising a reverse chain rule.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise the form",
          "workingLatex": "\\int f'(\\sin x) \\cdot g(\\sin x)\\,dx",
          "explanation": "The integrand is a derivative of the inner function times something of the inner function.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the inner function",
          "workingLatex": "u = \\sin x",
          "explanation": "Choose $u$ to be the inner function.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Note the derivative factor",
          "workingLatex": "\\dfrac{du}{dx} \\text{ appears in the integrand}",
          "explanation": "The coefficient matches the derivative of $u$ (up to a constant).",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate directly",
          "workingLatex": "\\int u\\,du = \\sin^{2}x",
          "explanation": "This is reverse chain rule integration.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Replace u",
          "workingLatex": "\\sin^{2}x + c",
          "explanation": "Write the answer in terms of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify",
          "workingLatex": "\\dfrac{d}{dx}(\\sin^{2}x) = 2\\cos x \\sin x",
          "explanation": "Differentiate to confirm.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int 2\\cos x \\sin x\\,dx = \\sin^{2}x + c",
          "explanation": "Final antiderivative.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int 2\\cos x \\sin x\\,dx = \\sin^{2}x + c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-substitution.q019",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "integration by substitution",
      "reverse chain rule"
    ],
    "questionText": "Find $\\displaystyle\\int -\\sin x \\cos x\\,dx$ by recognising a reverse chain rule.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise the form",
          "workingLatex": "\\int f'(\\cos x) \\cdot g(\\cos x)\\,dx",
          "explanation": "The integrand is a derivative of the inner function times something of the inner function.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the inner function",
          "workingLatex": "u = \\cos x",
          "explanation": "Choose $u$ to be the inner function.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Note the derivative factor",
          "workingLatex": "\\dfrac{du}{dx} \\text{ appears in the integrand}",
          "explanation": "The coefficient matches the derivative of $u$ (up to a constant).",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate directly",
          "workingLatex": "\\int u\\,du = -\\dfrac{1}{2}\\cos^{2}x",
          "explanation": "This is reverse chain rule integration.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Replace u",
          "workingLatex": "-\\dfrac{1}{2}\\cos^{2}x + c",
          "explanation": "Write the answer in terms of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify",
          "workingLatex": "\\dfrac{d}{dx}(-\\dfrac{1}{2}\\cos^{2}x) = -\\sin x \\cos x",
          "explanation": "Differentiate to confirm.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int -\\sin x \\cos x\\,dx = -\\dfrac{1}{2}\\cos^{2}x + c",
          "explanation": "Final antiderivative.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int -\\sin x \\cos x\\,dx = -\\dfrac{1}{2}\\cos^{2}x + c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-substitution.q020",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "integration by substitution",
      "reverse chain rule"
    ],
    "questionText": "Find $\\displaystyle\\int \\dfrac{1}{x\\ln x}\\,dx$ by recognising a reverse chain rule.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise the form",
          "workingLatex": "\\int f'(\\ln x) \\cdot g(\\ln x)\\,dx",
          "explanation": "The integrand is a derivative of the inner function times something of the inner function.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the inner function",
          "workingLatex": "u = \\ln x",
          "explanation": "Choose $u$ to be the inner function.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Note the derivative factor",
          "workingLatex": "\\dfrac{du}{dx} \\text{ appears in the integrand}",
          "explanation": "The coefficient matches the derivative of $u$ (up to a constant).",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate directly",
          "workingLatex": "\\int \\dfrac{1}{u}\\,du = \\ln|u|",
          "explanation": "This is reverse chain rule integration.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Replace u",
          "workingLatex": "\\ln|\\ln x| + c",
          "explanation": "Write the answer in terms of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify",
          "workingLatex": "\\dfrac{d}{dx}(\\ln|\\ln x|) = \\dfrac{1}{x\\ln x}",
          "explanation": "Differentiate to confirm.",
          "diagram": null
        },
        {
          "stepNumber": 7,
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
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-substitution.q021",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "integration by substitution",
      "reverse chain rule"
    ],
    "questionText": "Find $\\displaystyle\\int x\\sqrt{1-x^{2}}\\,dx$ by recognising a reverse chain rule.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise the form",
          "workingLatex": "\\int f'(1-x^{2}) \\cdot g(1-x^{2})\\,dx",
          "explanation": "The integrand is a derivative of the inner function times something of the inner function.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the inner function",
          "workingLatex": "u = 1-x^{2}",
          "explanation": "Choose $u$ to be the inner function.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Note the derivative factor",
          "workingLatex": "\\dfrac{du}{dx} \\text{ appears in the integrand}",
          "explanation": "The coefficient matches the derivative of $u$ (up to a constant).",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate directly",
          "workingLatex": "\\int u^{1/2}\\,du = -\\dfrac{1}{3}(u)^{3/2}",
          "explanation": "This is reverse chain rule integration.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Replace u",
          "workingLatex": "-\\dfrac{1}{3}(1-x^{2})^{3/2} + c",
          "explanation": "Write the answer in terms of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify",
          "workingLatex": "\\dfrac{d}{dx}(-\\dfrac{1}{3}(1-x^{2})^{3/2}) = x\\sqrt{1-x^{2}}",
          "explanation": "Differentiate to confirm.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int x\\sqrt{1-x^{2}}\\,dx = -\\dfrac{1}{3}(1-x^{2})^{3/2} + c",
          "explanation": "Final antiderivative.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int x\\sqrt{1-x^{2}}\\,dx = -\\dfrac{1}{3}(1-x^{2})^{3/2} + c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-substitution.q022",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "integration by substitution",
      "secant",
      "reverse chain rule"
    ],
    "questionText": "Find $\\displaystyle\\int \\sec^{2}x \\tan x\\,dx$ by recognising a reverse chain rule.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise the form",
          "workingLatex": "\\int f'(\\tan x) \\cdot g(\\tan x)\\,dx",
          "explanation": "The integrand is a derivative of the inner function times something of the inner function.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the inner function",
          "workingLatex": "u = \\tan x",
          "explanation": "Choose $u$ to be the inner function.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Note the derivative factor",
          "workingLatex": "\\dfrac{du}{dx} \\text{ appears in the integrand}",
          "explanation": "The coefficient matches the derivative of $u$ (up to a constant).",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate directly",
          "workingLatex": "\\int u\\,du = \\dfrac{1}{2}\\tan^{2}x",
          "explanation": "This is reverse chain rule integration.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Replace u",
          "workingLatex": "\\dfrac{1}{2}\\tan^{2}x + c",
          "explanation": "Write the answer in terms of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify",
          "workingLatex": "\\dfrac{d}{dx}(\\dfrac{1}{2}\\tan^{2}x) = \\sec^{2}x \\tan x",
          "explanation": "Differentiate to confirm.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int \\sec^{2}x \\tan x\\,dx = \\dfrac{1}{2}\\tan^{2}x + c",
          "explanation": "Final antiderivative.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\sec^{2}x \\tan x\\,dx = \\dfrac{1}{2}\\tan^{2}x + c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-substitution.q023",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "integration by substitution",
      "definite integral"
    ],
    "questionText": "Use substitution to evaluate $\\displaystyle\\int_{0}^{1} 2x(x^{2}+1)^{3}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the substitution",
          "workingLatex": "u = x^{2}+1,\\; du = 2x\\,dx",
          "explanation": "The factor $2x$ matches the derivative of $x^2+1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Change the limits",
          "workingLatex": "x = 0 \\Rightarrow u = 1;\\quad x = 1 \\Rightarrow u = 2",
          "explanation": "For definite integrals, convert the $x$-limits to $u$-limits.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite the integral",
          "workingLatex": "\\int_{1}^{2} u^{3}\\,du",
          "explanation": "Convert limits: $x=0 \\Rightarrow u=1$, $x=1 \\Rightarrow u=2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate in u",
          "workingLatex": "\\left[\\dfrac{u^{4}}{4}\\right]_{1}^{2}",
          "explanation": "Integrate $u^3$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate at the limits",
          "workingLatex": "\\dfrac{16}{4} - \\dfrac{1}{4} = \\dfrac{15}{4}",
          "explanation": "Evaluate at $u=2$ and $u=1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify",
          "workingLatex": "\\dfrac{15}{4}",
          "explanation": "Give the exact value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check reasonableness",
          "workingLatex": "\\text{Sign and magnitude should match the area interpretation}",
          "explanation": "A quick estimate can confirm the result.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the answer",
          "workingLatex": "\\int_{0}^{1} 2x(x^{2}+1)^{3}\\,dx = \\dfrac{15}{4}",
          "explanation": "Final definite integral value.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Identify the substitution",
          "workingLatex": "\\text{Look for a function and its derivative}",
          "explanation": "Integration by substitution reverses the chain rule — find $u=g(x)$ where $g'(x)$ appears as a factor.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{0}^{1} 2x(x^{2}+1)^{3}\\,dx = \\dfrac{15}{4}$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-substitution.q024",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "integration by substitution",
      "exponential",
      "definite integral"
    ],
    "questionText": "Use substitution to evaluate $\\displaystyle\\int_{0}^{1} xe^{-x^{2}}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the substitution",
          "workingLatex": "u = -x^{2},\\; du = -2x\\,dx",
          "explanation": "Use $u=-x^2$ so the $x\\,dx$ factor matches.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Change the limits",
          "workingLatex": "x = 0 \\Rightarrow u = 0;\\quad x = 1 \\Rightarrow u = -1",
          "explanation": "For definite integrals, convert the $x$-limits to $u$-limits.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite the integral",
          "workingLatex": "-\\dfrac{1}{2}\\int_{0}^{-1} e^{u}\\,du",
          "explanation": "Limits: $x=0 \\Rightarrow u=0$, $x=1 \\Rightarrow u=-1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate in u",
          "workingLatex": "-\\dfrac{1}{2}\\left[e^{u}\\right]_{0}^{-1}",
          "explanation": "Integrate $e^u$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate at the limits",
          "workingLatex": "-\\dfrac{1}{2}(e^{-1}-1) = \\dfrac{1-e^{-1}}{2}",
          "explanation": "Simplify the exact value.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify",
          "workingLatex": "\\dfrac{1-e^{-1}}{2}",
          "explanation": "Give the exact value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check reasonableness",
          "workingLatex": "\\text{Sign and magnitude should match the area interpretation}",
          "explanation": "A quick estimate can confirm the result.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the answer",
          "workingLatex": "\\int_{0}^{1} xe^{-x^{2}}\\,dx = \\dfrac{1-e^{-1}}{2}",
          "explanation": "Final definite integral value.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Identify the substitution",
          "workingLatex": "\\text{Look for a function and its derivative}",
          "explanation": "Integration by substitution reverses the chain rule — find $u=g(x)$ where $g'(x)$ appears as a factor.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{0}^{1} xe^{-x^{2}}\\,dx = \\dfrac{1-e^{-1}}{2}$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-substitution.q025",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "integration by substitution",
      "logarithm",
      "definite integral"
    ],
    "questionText": "Use substitution to evaluate $\\displaystyle\\int_{1}^{e} \\dfrac{1}{x}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the substitution",
          "workingLatex": "u = \\ln x,\\; du = \\dfrac{1}{x}\\,dx",
          "explanation": "The integrand is exactly $du$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Change the limits",
          "workingLatex": "x = 1 \\Rightarrow u = 0;\\quad x = e \\Rightarrow u = 1",
          "explanation": "For definite integrals, convert the $x$-limits to $u$-limits.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite the integral",
          "workingLatex": "\\int_{0}^{1} du",
          "explanation": "Limits: $x=1 \\Rightarrow u=0$, $x=e \\Rightarrow u=1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate in u",
          "workingLatex": "\\left[u\\right]_{0}^{1}",
          "explanation": "Integrate $1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate at the limits",
          "workingLatex": "1",
          "explanation": "Evaluate directly.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify",
          "workingLatex": "1",
          "explanation": "Give the exact value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check reasonableness",
          "workingLatex": "\\text{Sign and magnitude should match the area interpretation}",
          "explanation": "A quick estimate can confirm the result.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the answer",
          "workingLatex": "\\int_{1}^{e} \\dfrac{1}{x}\\,dx = 1",
          "explanation": "Final definite integral value.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Identify the substitution",
          "workingLatex": "\\text{Look for a function and its derivative}",
          "explanation": "Integration by substitution reverses the chain rule — find $u=g(x)$ where $g'(x)$ appears as a factor.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{1}^{e} \\dfrac{1}{x}\\,dx = 1$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-substitution.q026",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "integration by substitution",
      "trigonometric",
      "definite integral"
    ],
    "questionText": "Use substitution to evaluate $\\displaystyle\\int_{0}^{\\dfrac{\\pi}{2}} \\cos x\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the substitution",
          "workingLatex": "u = \\sin x,\\; du = \\cos x\\,dx",
          "explanation": "The integrand is the derivative of $\\sin x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Change the limits",
          "workingLatex": "x = 0 \\Rightarrow u = 0;\\quad x = \\dfrac{\\pi}{2} \\Rightarrow u = 1",
          "explanation": "For definite integrals, convert the $x$-limits to $u$-limits.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite the integral",
          "workingLatex": "\\int_{0}^{1} du",
          "explanation": "Limits: $x=0 \\Rightarrow u=0$, $x=\\pi/2 \\Rightarrow u=1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate in u",
          "workingLatex": "\\left[u\\right]_{0}^{1}",
          "explanation": "Integrate.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate at the limits",
          "workingLatex": "1",
          "explanation": "Area under $\\cos x$ from $0$ to $\\pi/2$ is $1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify",
          "workingLatex": "1",
          "explanation": "Give the exact value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check reasonableness",
          "workingLatex": "\\text{Sign and magnitude should match the area interpretation}",
          "explanation": "A quick estimate can confirm the result.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the answer",
          "workingLatex": "\\int_{0}^{\\dfrac{\\pi}{2}} \\cos x\\,dx = 1",
          "explanation": "Final definite integral value.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Identify the substitution",
          "workingLatex": "\\text{Look for a function and its derivative}",
          "explanation": "Integration by substitution reverses the chain rule — find $u=g(x)$ where $g'(x)$ appears as a factor.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{0}^{\\dfrac{\\pi}{2}} \\cos x\\,dx = 1$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-substitution.q027",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "integration by substitution",
      "definite integral"
    ],
    "questionText": "Use substitution to evaluate $\\displaystyle\\int_{0}^{1} \\dfrac{2x}{x^{2}+1}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the substitution",
          "workingLatex": "u = x^{2}+1,\\; du = 2x\\,dx",
          "explanation": "Standard logarithmic substitution.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Change the limits",
          "workingLatex": "x = 0 \\Rightarrow u = 1;\\quad x = 1 \\Rightarrow u = 2",
          "explanation": "For definite integrals, convert the $x$-limits to $u$-limits.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite the integral",
          "workingLatex": "\\int_{1}^{2} \\dfrac{1}{u}\\,du",
          "explanation": "Change limits accordingly.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate in u",
          "workingLatex": "\\left[\\ln u\\right]_{1}^{2}",
          "explanation": "Integrate $1/u$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate at the limits",
          "workingLatex": "\\ln 2",
          "explanation": "Evaluate.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify",
          "workingLatex": "\\ln 2",
          "explanation": "Give the exact value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check reasonableness",
          "workingLatex": "\\text{Sign and magnitude should match the area interpretation}",
          "explanation": "A quick estimate can confirm the result.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the answer",
          "workingLatex": "\\int_{0}^{1} \\dfrac{2x}{x^{2}+1}\\,dx = \\ln 2",
          "explanation": "Final definite integral value.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Identify the substitution",
          "workingLatex": "\\text{Look for a function and its derivative}",
          "explanation": "Integration by substitution reverses the chain rule — find $u=g(x)$ where $g'(x)$ appears as a factor.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{0}^{1} \\dfrac{2x}{x^{2}+1}\\,dx = \\ln 2$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-substitution.q028",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "integration by substitution",
      "surds",
      "definite integral"
    ],
    "questionText": "Use substitution to evaluate $\\displaystyle\\int_{0}^{2} x\\sqrt{x^{2}+4}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the substitution",
          "workingLatex": "u = x^{2}+4,\\; du = 2x\\,dx",
          "explanation": "Match the $x\\,dx$ factor.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Change the limits",
          "workingLatex": "x = 0 \\Rightarrow u = 4;\\quad x = 2 \\Rightarrow u = 8",
          "explanation": "For definite integrals, convert the $x$-limits to $u$-limits.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite the integral",
          "workingLatex": "\\dfrac{1}{2}\\int_{4}^{8} u^{1/2}\\,du",
          "explanation": "Convert limits.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate in u",
          "workingLatex": "\\dfrac{1}{2}\\left[\\dfrac{2}{3}u^{3/2}\\right]_{4}^{8}",
          "explanation": "Integrate $u^{1/2}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate at the limits",
          "workingLatex": "\\dfrac{1}{3}(8^{3/2}-4^{3/2}) = \\dfrac{1}{3}(16\\sqrt{2}-8)",
          "explanation": "Simplify.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify",
          "workingLatex": "\\dfrac{16\\sqrt{2}-8}{3}",
          "explanation": "Give the exact value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check reasonableness",
          "workingLatex": "\\text{Sign and magnitude should match the area interpretation}",
          "explanation": "A quick estimate can confirm the result.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the answer",
          "workingLatex": "\\int_{0}^{2} x\\sqrt{x^{2}+4}\\,dx = \\dfrac{16\\sqrt{2}-8}{3}",
          "explanation": "Final definite integral value.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Identify the substitution",
          "workingLatex": "\\text{Look for a function and its derivative}",
          "explanation": "Integration by substitution reverses the chain rule — find $u=g(x)$ where $g'(x)$ appears as a factor.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{0}^{2} x\\sqrt{x^{2}+4}\\,dx = \\dfrac{16\\sqrt{2}-8}{3}$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-substitution.q029",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "integration by substitution",
      "exponential",
      "definite integral"
    ],
    "questionText": "Use substitution to evaluate $\\displaystyle\\int_{0}^{\\dfrac{1}{2}} e^{2x}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the substitution",
          "workingLatex": "u = 2x,\\; du = 2\\,dx",
          "explanation": "Linear substitution for exponential.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Change the limits",
          "workingLatex": "x = 0 \\Rightarrow u = 0;\\quad x = \\dfrac{1}{2} \\Rightarrow u = 1",
          "explanation": "For definite integrals, convert the $x$-limits to $u$-limits.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite the integral",
          "workingLatex": "\\dfrac{1}{2}\\int_{0}^{1} e^{u}\\,du",
          "explanation": "Change limits.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate in u",
          "workingLatex": "\\dfrac{1}{2}\\left[e^{u}\\right]_{0}^{1}",
          "explanation": "Integrate.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate at the limits",
          "workingLatex": "\\dfrac{e-1}{2}",
          "explanation": "Exact value.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify",
          "workingLatex": "\\dfrac{e-1}{2}",
          "explanation": "Give the exact value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check reasonableness",
          "workingLatex": "\\text{Sign and magnitude should match the area interpretation}",
          "explanation": "A quick estimate can confirm the result.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the answer",
          "workingLatex": "\\int_{0}^{\\dfrac{1}{2}} e^{2x}\\,dx = \\dfrac{e-1}{2}",
          "explanation": "Final definite integral value.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Identify the substitution",
          "workingLatex": "\\text{Look for a function and its derivative}",
          "explanation": "Integration by substitution reverses the chain rule — find $u=g(x)$ where $g'(x)$ appears as a factor.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{0}^{\\dfrac{1}{2}} e^{2x}\\,dx = \\dfrac{e-1}{2}$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-substitution.q030",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "integration by substitution",
      "trigonometric",
      "definite integral"
    ],
    "questionText": "Use substitution to evaluate $\\displaystyle\\int_{0}^{\\dfrac{\\pi}{2}} \\sin x \\cos x\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the substitution",
          "workingLatex": "u = \\sin x,\\; du = \\cos x\\,dx",
          "explanation": "Use $u=\\sin x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Change the limits",
          "workingLatex": "x = 0 \\Rightarrow u = 0;\\quad x = \\dfrac{\\pi}{2} \\Rightarrow u = 1",
          "explanation": "For definite integrals, convert the $x$-limits to $u$-limits.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite the integral",
          "workingLatex": "\\int_{0}^{1} u\\,du",
          "explanation": "Limits change as shown.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate in u",
          "workingLatex": "\\left[\\dfrac{u^{2}}{2}\\right]_{0}^{1}",
          "explanation": "Integrate $u$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate at the limits",
          "workingLatex": "\\dfrac{1}{2}",
          "explanation": "Evaluate.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify",
          "workingLatex": "\\dfrac{1}{2}",
          "explanation": "Give the exact value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check reasonableness",
          "workingLatex": "\\text{Sign and magnitude should match the area interpretation}",
          "explanation": "A quick estimate can confirm the result.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the answer",
          "workingLatex": "\\int_{0}^{\\dfrac{\\pi}{2}} \\sin x \\cos x\\,dx = \\dfrac{1}{2}",
          "explanation": "Final definite integral value.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Identify the substitution",
          "workingLatex": "\\text{Look for a function and its derivative}",
          "explanation": "Integration by substitution reverses the chain rule — find $u=g(x)$ where $g'(x)$ appears as a factor.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{0}^{\\dfrac{\\pi}{2}} \\sin x \\cos x\\,dx = \\dfrac{1}{2}$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-substitution.q031",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "integration by substitution",
      "definite integral"
    ],
    "questionText": "Use substitution to evaluate $\\displaystyle\\int_{0}^{1} \\dfrac{1}{2x+3}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the substitution",
          "workingLatex": "u = 2x+3,\\; du = 2\\,dx",
          "explanation": "Linear denominator substitution.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Change the limits",
          "workingLatex": "x = 0 \\Rightarrow u = 3;\\quad x = 1 \\Rightarrow u = 5",
          "explanation": "For definite integrals, convert the $x$-limits to $u$-limits.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite the integral",
          "workingLatex": "\\dfrac{1}{2}\\int_{3}^{5} \\dfrac{1}{u}\\,du",
          "explanation": "Adjust limits.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate in u",
          "workingLatex": "\\dfrac{1}{2}\\left[\\ln u\\right]_{3}^{5}",
          "explanation": "Integrate.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate at the limits",
          "workingLatex": "\\dfrac{1}{2}\\ln\\dfrac{5}{3}",
          "explanation": "Logarithm laws.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify",
          "workingLatex": "\\dfrac{1}{2}\\ln\\dfrac{5}{3}",
          "explanation": "Give the exact value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check reasonableness",
          "workingLatex": "\\text{Sign and magnitude should match the area interpretation}",
          "explanation": "A quick estimate can confirm the result.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the answer",
          "workingLatex": "\\int_{0}^{1} \\dfrac{1}{2x+3}\\,dx = \\dfrac{1}{2}\\ln\\dfrac{5}{3}",
          "explanation": "Final definite integral value.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Identify the substitution",
          "workingLatex": "\\text{Look for a function and its derivative}",
          "explanation": "Integration by substitution reverses the chain rule — find $u=g(x)$ where $g'(x)$ appears as a factor.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{0}^{1} \\dfrac{1}{2x+3}\\,dx = \\dfrac{1}{2}\\ln\\dfrac{5}{3}$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-substitution.q032",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "integration by substitution",
      "definite integral"
    ],
    "questionText": "Use substitution to evaluate $\\displaystyle\\int_{0}^{1} x(x^{2}+1)^{2}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the substitution",
          "workingLatex": "u = x^{2}+1,\\; du = 2x\\,dx",
          "explanation": "Standard substitution.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Change the limits",
          "workingLatex": "x = 0 \\Rightarrow u = 1;\\quad x = 1 \\Rightarrow u = 2",
          "explanation": "For definite integrals, convert the $x$-limits to $u$-limits.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite the integral",
          "workingLatex": "\\dfrac{1}{2}\\int_{1}^{2} u^{2}\\,du",
          "explanation": "Rewrite with new limits.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate in u",
          "workingLatex": "\\dfrac{1}{2}\\left[\\dfrac{u^{3}}{3}\\right]_{1}^{2}",
          "explanation": "Integrate.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate at the limits",
          "workingLatex": "\\dfrac{1}{6}(8-1) = \\dfrac{7}{6}",
          "explanation": "Evaluate.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify",
          "workingLatex": "\\dfrac{7}{6}",
          "explanation": "Give the exact value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check reasonableness",
          "workingLatex": "\\text{Sign and magnitude should match the area interpretation}",
          "explanation": "A quick estimate can confirm the result.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the answer",
          "workingLatex": "\\int_{0}^{1} x(x^{2}+1)^{2}\\,dx = \\dfrac{7}{6}",
          "explanation": "Final definite integral value.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Identify the substitution",
          "workingLatex": "\\text{Look for a function and its derivative}",
          "explanation": "Integration by substitution reverses the chain rule — find $u=g(x)$ where $g'(x)$ appears as a factor.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{0}^{1} x(x^{2}+1)^{2}\\,dx = \\dfrac{7}{6}$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-substitution.q033",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "integration by substitution",
      "trigonometric",
      "definite integral"
    ],
    "questionText": "Use substitution to evaluate $\\displaystyle\\int_{0}^{\\dfrac{\\pi}{4}} \\sec^{2}x\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the substitution",
          "workingLatex": "u = \\tan x,\\; du = \\sec^{2}x\\,dx",
          "explanation": "Derivative of $\\tan x$ is $\\sec^2 x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Change the limits",
          "workingLatex": "x = 0 \\Rightarrow u = 0;\\quad x = \\dfrac{\\pi}{4} \\Rightarrow u = 1",
          "explanation": "For definite integrals, convert the $x$-limits to $u$-limits.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite the integral",
          "workingLatex": "\\int_{0}^{1} du",
          "explanation": "Limits: $\\tan 0=0$, $\\tan(\\pi/4)=1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate in u",
          "workingLatex": "\\left[u\\right]_{0}^{1}",
          "explanation": "Integrate.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate at the limits",
          "workingLatex": "1",
          "explanation": "Result.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify",
          "workingLatex": "1",
          "explanation": "Give the exact value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check reasonableness",
          "workingLatex": "\\text{Sign and magnitude should match the area interpretation}",
          "explanation": "A quick estimate can confirm the result.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the answer",
          "workingLatex": "\\int_{0}^{\\dfrac{\\pi}{4}} \\sec^{2}x\\,dx = 1",
          "explanation": "Final definite integral value.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Identify the substitution",
          "workingLatex": "\\text{Look for a function and its derivative}",
          "explanation": "Integration by substitution reverses the chain rule — find $u=g(x)$ where $g'(x)$ appears as a factor.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{0}^{\\dfrac{\\pi}{4}} \\sec^{2}x\\,dx = 1$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-substitution.q034",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "integration by substitution",
      "surds",
      "definite integral"
    ],
    "questionText": "Use substitution to evaluate $\\displaystyle\\int_{0}^{1} \\dfrac{x}{\\sqrt{x^{2}+1}}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the substitution",
          "workingLatex": "u = x^{2}+1,\\; du = 2x\\,dx",
          "explanation": "Substitution for surd form.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Change the limits",
          "workingLatex": "x = 0 \\Rightarrow u = 1;\\quad x = 1 \\Rightarrow u = \\sqrt{2}",
          "explanation": "For definite integrals, convert the $x$-limits to $u$-limits.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite the integral",
          "workingLatex": "\\dfrac{1}{2}\\int_{1}^{\\sqrt{2}} u^{-1/2}\\,du",
          "explanation": "Note $u=\\sqrt{2}$ when $x=1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate in u",
          "workingLatex": "\\dfrac{1}{2}\\left[2u^{1/2}\\right]_{1}^{\\sqrt{2}}",
          "explanation": "Integrate.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate at the limits",
          "workingLatex": "\\sqrt{2}-1",
          "explanation": "Evaluate.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify",
          "workingLatex": "\\sqrt{2}-1",
          "explanation": "Give the exact value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check reasonableness",
          "workingLatex": "\\text{Sign and magnitude should match the area interpretation}",
          "explanation": "A quick estimate can confirm the result.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the answer",
          "workingLatex": "\\int_{0}^{1} \\dfrac{x}{\\sqrt{x^{2}+1}}\\,dx = \\sqrt{2}-1",
          "explanation": "Final definite integral value.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Identify the substitution",
          "workingLatex": "\\text{Look for a function and its derivative}",
          "explanation": "Integration by substitution reverses the chain rule — find $u=g(x)$ where $g'(x)$ appears as a factor.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{0}^{1} \\dfrac{x}{\\sqrt{x^{2}+1}}\\,dx = \\sqrt{2}-1$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-substitution.q035",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "integration by substitution",
      "exponential",
      "definite integral"
    ],
    "questionText": "Use substitution to evaluate $\\displaystyle\\int_{0}^{1} 3x^{2}e^{x^{3}}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the substitution",
          "workingLatex": "u = x^{3},\\; du = 3x^{2}\\,dx",
          "explanation": "Exact match of derivative factor.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Change the limits",
          "workingLatex": "x = 0 \\Rightarrow u = 0;\\quad x = 1 \\Rightarrow u = 1",
          "explanation": "For definite integrals, convert the $x$-limits to $u$-limits.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite the integral",
          "workingLatex": "\\int_{0}^{1} e^{u}\\,du",
          "explanation": "Change limits.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate in u",
          "workingLatex": "\\left[e^{u}\\right]_{0}^{1}",
          "explanation": "Integrate.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate at the limits",
          "workingLatex": "e-1",
          "explanation": "Evaluate.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify",
          "workingLatex": "e-1",
          "explanation": "Give the exact value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check reasonableness",
          "workingLatex": "\\text{Sign and magnitude should match the area interpretation}",
          "explanation": "A quick estimate can confirm the result.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the answer",
          "workingLatex": "\\int_{0}^{1} 3x^{2}e^{x^{3}}\\,dx = e-1",
          "explanation": "Final definite integral value.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Identify the substitution",
          "workingLatex": "\\text{Look for a function and its derivative}",
          "explanation": "Integration by substitution reverses the chain rule — find $u=g(x)$ where $g'(x)$ appears as a factor.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{0}^{1} 3x^{2}e^{x^{3}}\\,dx = e-1$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-substitution.q036",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "integration by substitution",
      "inverse trig",
      "definite integral"
    ],
    "questionText": "Use substitution to evaluate $\\displaystyle\\int_{0}^{\\dfrac{1}{2}} \\dfrac{1}{\\sqrt{1-x^{2}}}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the substitution",
          "workingLatex": "u = \\arcsin x,\\; du = \\dfrac{1}{\\sqrt{1-x^{2}}}\\,dx",
          "explanation": "The integrand is exactly $du$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Change the limits",
          "workingLatex": "x = 0 \\Rightarrow u = 0;\\quad x = \\dfrac{1}{2} \\Rightarrow u = \\dfrac{\\pi}{6}",
          "explanation": "For definite integrals, convert the $x$-limits to $u$-limits.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite the integral",
          "workingLatex": "\\int_{0}^{\\pi/6} du",
          "explanation": "$x=0 \\Rightarrow u=0$; $x=1/2 \\Rightarrow u=\\pi/6$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate in u",
          "workingLatex": "\\left[u\\right]_{0}^{\\pi/6}",
          "explanation": "Integrate.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate at the limits",
          "workingLatex": "\\dfrac{\\pi}{6}",
          "explanation": "Evaluate.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify",
          "workingLatex": "\\dfrac{\\pi}{6}",
          "explanation": "Give the exact value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check reasonableness",
          "workingLatex": "\\text{Sign and magnitude should match the area interpretation}",
          "explanation": "A quick estimate can confirm the result.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the answer",
          "workingLatex": "\\int_{0}^{\\dfrac{1}{2}} \\dfrac{1}{\\sqrt{1-x^{2}}}\\,dx = \\dfrac{\\pi}{6}",
          "explanation": "Final definite integral value.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Identify the substitution",
          "workingLatex": "\\text{Look for a function and its derivative}",
          "explanation": "Integration by substitution reverses the chain rule — find $u=g(x)$ where $g'(x)$ appears as a factor.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{0}^{\\dfrac{1}{2}} \\dfrac{1}{\\sqrt{1-x^{2}}}\\,dx = \\dfrac{\\pi}{6}$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-substitution.q037",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "integration by substitution",
      "trigonometric",
      "definite integral"
    ],
    "questionText": "Use substitution to evaluate $\\displaystyle\\int_{0}^{\\sqrt{\\pi}} x\\cos(x^{2})\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the substitution",
          "workingLatex": "u = x^{2},\\; du = 2x\\,dx",
          "explanation": "Match the $x\\,dx$ factor.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Change the limits",
          "workingLatex": "x = 0 \\Rightarrow u = 0;\\quad x = \\sqrt{\\pi} \\Rightarrow u = \\pi",
          "explanation": "For definite integrals, convert the $x$-limits to $u$-limits.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite the integral",
          "workingLatex": "\\dfrac{1}{2}\\int_{0}^{\\pi} \\cos u\\,du",
          "explanation": "Limits: $x=\\sqrt{\\pi} \\Rightarrow u=\\pi$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate in u",
          "workingLatex": "\\dfrac{1}{2}\\left[\\sin u\\right]_{0}^{\\pi}",
          "explanation": "Integrate.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate at the limits",
          "workingLatex": "0",
          "explanation": "$\\sin\\pi - \\sin 0 = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify",
          "workingLatex": "0",
          "explanation": "Give the exact value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check reasonableness",
          "workingLatex": "\\text{Sign and magnitude should match the area interpretation}",
          "explanation": "A quick estimate can confirm the result.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the answer",
          "workingLatex": "\\int_{0}^{\\sqrt{\\pi}} x\\cos(x^{2})\\,dx = 0",
          "explanation": "Final definite integral value.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Identify the substitution",
          "workingLatex": "\\text{Look for a function and its derivative}",
          "explanation": "Integration by substitution reverses the chain rule — find $u=g(x)$ where $g'(x)$ appears as a factor.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{0}^{\\sqrt{\\pi}} x\\cos(x^{2})\\,dx = 0$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-substitution.q038",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "integration by substitution",
      "exponential",
      "definite integral"
    ],
    "questionText": "Use substitution to evaluate $\\displaystyle\\int_{0}^{\\ln 2} \\dfrac{e^{x}}{1+e^{x}}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the substitution",
          "workingLatex": "u = 1+e^{x},\\; du = e^{x}\\,dx",
          "explanation": "Numerator is derivative of denominator.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Change the limits",
          "workingLatex": "x = 0 \\Rightarrow u = 1;\\quad x = \\ln 2 \\Rightarrow u = 2",
          "explanation": "For definite integrals, convert the $x$-limits to $u$-limits.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite the integral",
          "workingLatex": "\\int_{1}^{2} \\dfrac{1}{u}\\,du",
          "explanation": "Limits: $x=0 \\Rightarrow u=2$... check: $e^0=1$, so $u=2$. $x=\\ln 2 \\Rightarrow u=3$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate in u",
          "workingLatex": "\\left[\\ln u\\right]_{2}^{3}",
          "explanation": "Correct limits $u=2$ to $u=3$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate at the limits",
          "workingLatex": "\\ln\\dfrac{3}{2}",
          "explanation": "Evaluate.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify",
          "workingLatex": "\\ln\\dfrac{3}{2}",
          "explanation": "Give the exact value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check reasonableness",
          "workingLatex": "\\text{Sign and magnitude should match the area interpretation}",
          "explanation": "A quick estimate can confirm the result.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the answer",
          "workingLatex": "\\int_{0}^{\\ln 2} \\dfrac{e^{x}}{1+e^{x}}\\,dx = \\ln\\dfrac{3}{2}",
          "explanation": "Final definite integral value.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Identify the substitution",
          "workingLatex": "\\text{Look for a function and its derivative}",
          "explanation": "Integration by substitution reverses the chain rule — find $u=g(x)$ where $g'(x)$ appears as a factor.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{0}^{\\ln 2} \\dfrac{e^{x}}{1+e^{x}}\\,dx = \\ln\\dfrac{3}{2}$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-substitution.q039",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "integration by substitution",
      "trigonometric"
    ],
    "questionText": "Use substitution to find $\\displaystyle\\int \\sin^{3}x \\cos x\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose a substitution",
          "workingLatex": "u = \\sin x",
          "explanation": "Look for a function whose derivative also appears as a factor in the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate",
          "workingLatex": "\\dfrac{du}{dx} = \\cos x",
          "explanation": "Find $du$ in terms of $dx$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange",
          "workingLatex": "du = (\\cos x)\\,dx",
          "explanation": "Express $dx$ (or the matching factor) in terms of $du$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the integral",
          "workingLatex": "\\int u^{3}\\,du",
          "explanation": "Replace every part of the integral with $u$-terms.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate with respect to u",
          "workingLatex": "\\dfrac{1}{4}\\sin^{4}x",
          "explanation": "Integrate the simpler expression in $u$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Replace u",
          "workingLatex": "\\dfrac{1}{4}\\sin^{4}x + c",
          "explanation": "Substitute back the original expression for $u$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int \\sin^{3}x \\cos x\\,dx = \\dfrac{1}{4}\\sin^{4}x + c",
          "explanation": "Include $+c$ for an indefinite integral.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Identify the substitution",
          "workingLatex": "\\text{Look for a function and its derivative}",
          "explanation": "Integration by substitution reverses the chain rule — find $u=g(x)$ where $g'(x)$ appears as a factor.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Write du in terms of dx",
          "workingLatex": "du = g'(x)\\,dx",
          "explanation": "Differentiate $u$ and rearrange to replace the $x$-terms.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\sin^{3}x \\cos x\\,dx = \\dfrac{1}{4}\\sin^{4}x + c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-substitution.q040",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "integration by substitution",
      "trigonometric"
    ],
    "questionText": "Use substitution to find $\\displaystyle\\int \\cos^{3}x \\sin x\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose a substitution",
          "workingLatex": "u = \\cos x",
          "explanation": "Look for a function whose derivative also appears as a factor in the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate",
          "workingLatex": "\\dfrac{du}{dx} = -\\sin x",
          "explanation": "Find $du$ in terms of $dx$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange",
          "workingLatex": "du = (-\\sin x)\\,dx",
          "explanation": "Express $dx$ (or the matching factor) in terms of $du$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the integral",
          "workingLatex": "\\int -u^{3}\\,du",
          "explanation": "Replace every part of the integral with $u$-terms.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate with respect to u",
          "workingLatex": "-\\dfrac{1}{4}\\cos^{4}x",
          "explanation": "Integrate the simpler expression in $u$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Replace u",
          "workingLatex": "-\\dfrac{1}{4}\\cos^{4}x + c",
          "explanation": "Substitute back the original expression for $u$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int \\cos^{3}x \\sin x\\,dx = -\\dfrac{1}{4}\\cos^{4}x + c",
          "explanation": "Include $+c$ for an indefinite integral.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Identify the substitution",
          "workingLatex": "\\text{Look for a function and its derivative}",
          "explanation": "Integration by substitution reverses the chain rule — find $u=g(x)$ where $g'(x)$ appears as a factor.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Write du in terms of dx",
          "workingLatex": "du = g'(x)\\,dx",
          "explanation": "Differentiate $u$ and rearrange to replace the $x$-terms.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\cos^{3}x \\sin x\\,dx = -\\dfrac{1}{4}\\cos^{4}x + c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-substitution.q041",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "integration by substitution",
      "logarithm"
    ],
    "questionText": "Use substitution to find $\\displaystyle\\int \\dfrac{x}{x^{2}-1}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose a substitution",
          "workingLatex": "u = x^{2}-1",
          "explanation": "Look for a function whose derivative also appears as a factor in the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate",
          "workingLatex": "\\dfrac{du}{dx} = 2x",
          "explanation": "Find $du$ in terms of $dx$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange",
          "workingLatex": "du = (2x)\\,dx",
          "explanation": "Express $dx$ (or the matching factor) in terms of $du$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the integral",
          "workingLatex": "\\int \\dfrac{1}{2u}\\,du",
          "explanation": "Replace every part of the integral with $u$-terms.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate with respect to u",
          "workingLatex": "\\dfrac{1}{2}\\ln|x^{2}-1|",
          "explanation": "Integrate the simpler expression in $u$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Replace u",
          "workingLatex": "\\dfrac{1}{2}\\ln|x^{2}-1| + c",
          "explanation": "Substitute back the original expression for $u$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int \\dfrac{x}{x^{2}-1}\\,dx = \\dfrac{1}{2}\\ln|x^{2}-1| + c",
          "explanation": "Include $+c$ for an indefinite integral.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Identify the substitution",
          "workingLatex": "\\text{Look for a function and its derivative}",
          "explanation": "Integration by substitution reverses the chain rule — find $u=g(x)$ where $g'(x)$ appears as a factor.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Write du in terms of dx",
          "workingLatex": "du = g'(x)\\,dx",
          "explanation": "Differentiate $u$ and rearrange to replace the $x$-terms.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\dfrac{x}{x^{2}-1}\\,dx = \\dfrac{1}{2}\\ln|x^{2}-1| + c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-substitution.q042",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "integration by substitution",
      "surds"
    ],
    "questionText": "Use substitution to find $\\displaystyle\\int x\\sqrt{4-x^{2}}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose a substitution",
          "workingLatex": "u = 4-x^{2}",
          "explanation": "Look for a function whose derivative also appears as a factor in the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate",
          "workingLatex": "\\dfrac{du}{dx} = -2x",
          "explanation": "Find $du$ in terms of $dx$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange",
          "workingLatex": "du = (-2x)\\,dx",
          "explanation": "Express $dx$ (or the matching factor) in terms of $du$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the integral",
          "workingLatex": "\\int -\\dfrac{1}{2}u^{1/2}\\,du",
          "explanation": "Replace every part of the integral with $u$-terms.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate with respect to u",
          "workingLatex": "-\\dfrac{1}{3}(4-x^{2})^{3/2}",
          "explanation": "Integrate the simpler expression in $u$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Replace u",
          "workingLatex": "-\\dfrac{1}{3}(4-x^{2})^{3/2} + c",
          "explanation": "Substitute back the original expression for $u$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int x\\sqrt{4-x^{2}}\\,dx = -\\dfrac{1}{3}(4-x^{2})^{3/2} + c",
          "explanation": "Include $+c$ for an indefinite integral.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Identify the substitution",
          "workingLatex": "\\text{Look for a function and its derivative}",
          "explanation": "Integration by substitution reverses the chain rule — find $u=g(x)$ where $g'(x)$ appears as a factor.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Write du in terms of dx",
          "workingLatex": "du = g'(x)\\,dx",
          "explanation": "Differentiate $u$ and rearrange to replace the $x$-terms.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int x\\sqrt{4-x^{2}}\\,dx = -\\dfrac{1}{3}(4-x^{2})^{3/2} + c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-substitution.q043",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "integration by substitution",
      "logarithm"
    ],
    "questionText": "Use substitution to find $\\displaystyle\\int \\dfrac{\\ln x}{x}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose a substitution",
          "workingLatex": "u = \\ln x",
          "explanation": "Look for a function whose derivative also appears as a factor in the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate",
          "workingLatex": "\\dfrac{du}{dx} = \\dfrac{1}{x}",
          "explanation": "Find $du$ in terms of $dx$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange",
          "workingLatex": "du = (\\dfrac{1}{x})\\,dx",
          "explanation": "Express $dx$ (or the matching factor) in terms of $du$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the integral",
          "workingLatex": "\\int \\dfrac{1}{u}\\,du",
          "explanation": "Replace every part of the integral with $u$-terms.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate with respect to u",
          "workingLatex": "\\dfrac{1}{2}(\\ln x)^{2}",
          "explanation": "Integrate the simpler expression in $u$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Replace u",
          "workingLatex": "\\dfrac{1}{2}(\\ln x)^{2} + c",
          "explanation": "Substitute back the original expression for $u$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int \\dfrac{\\ln x}{x}\\,dx = \\dfrac{1}{2}(\\ln x)^{2} + c",
          "explanation": "Include $+c$ for an indefinite integral.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Identify the substitution",
          "workingLatex": "\\text{Look for a function and its derivative}",
          "explanation": "Integration by substitution reverses the chain rule — find $u=g(x)$ where $g'(x)$ appears as a factor.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Write du in terms of dx",
          "workingLatex": "du = g'(x)\\,dx",
          "explanation": "Differentiate $u$ and rearrange to replace the $x$-terms.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\dfrac{\\ln x}{x}\\,dx = \\dfrac{1}{2}(\\ln x)^{2} + c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-substitution.q044",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "integration by substitution",
      "logarithm"
    ],
    "questionText": "Use substitution to find $\\displaystyle\\int \\dfrac{x}{x^{2}+4}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose a substitution",
          "workingLatex": "u = x^{2}+4",
          "explanation": "Look for a function whose derivative also appears as a factor in the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate",
          "workingLatex": "\\dfrac{du}{dx} = 2x",
          "explanation": "Find $du$ in terms of $dx$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange",
          "workingLatex": "du = (2x)\\,dx",
          "explanation": "Express $dx$ (or the matching factor) in terms of $du$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the integral",
          "workingLatex": "\\int \\dfrac{1}{2u}\\,du",
          "explanation": "Replace every part of the integral with $u$-terms.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate with respect to u",
          "workingLatex": "\\dfrac{1}{2}\\ln(x^{2}+4)",
          "explanation": "Integrate the simpler expression in $u$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Replace u",
          "workingLatex": "\\dfrac{1}{2}\\ln(x^{2}+4) + c",
          "explanation": "Substitute back the original expression for $u$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int \\dfrac{x}{x^{2}+4}\\,dx = \\dfrac{1}{2}\\ln(x^{2}+4) + c",
          "explanation": "Include $+c$ for an indefinite integral.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Identify the substitution",
          "workingLatex": "\\text{Look for a function and its derivative}",
          "explanation": "Integration by substitution reverses the chain rule — find $u=g(x)$ where $g'(x)$ appears as a factor.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Write du in terms of dx",
          "workingLatex": "du = g'(x)\\,dx",
          "explanation": "Differentiate $u$ and rearrange to replace the $x$-terms.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\dfrac{x}{x^{2}+4}\\,dx = \\dfrac{1}{2}\\ln(x^{2}+4) + c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-substitution.q045",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "integration by substitution",
      "exponential",
      "trigonometric"
    ],
    "questionText": "Use substitution to find $\\displaystyle\\int e^{x}\\sin(e^{x})\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose a substitution",
          "workingLatex": "u = e^{x}",
          "explanation": "Look for a function whose derivative also appears as a factor in the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate",
          "workingLatex": "\\dfrac{du}{dx} = e^{x}",
          "explanation": "Find $du$ in terms of $dx$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange",
          "workingLatex": "du = (e^{x})\\,dx",
          "explanation": "Express $dx$ (or the matching factor) in terms of $du$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the integral",
          "workingLatex": "\\int \\sin u\\,du",
          "explanation": "Replace every part of the integral with $u$-terms.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate with respect to u",
          "workingLatex": "-\\cos(e^{x})",
          "explanation": "Integrate the simpler expression in $u$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Replace u",
          "workingLatex": "-\\cos(e^{x}) + c",
          "explanation": "Substitute back the original expression for $u$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int e^{x}\\sin(e^{x})\\,dx = -\\cos(e^{x}) + c",
          "explanation": "Include $+c$ for an indefinite integral.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Identify the substitution",
          "workingLatex": "\\text{Look for a function and its derivative}",
          "explanation": "Integration by substitution reverses the chain rule — find $u=g(x)$ where $g'(x)$ appears as a factor.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Write du in terms of dx",
          "workingLatex": "du = g'(x)\\,dx",
          "explanation": "Differentiate $u$ and rearrange to replace the $x$-terms.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int e^{x}\\sin(e^{x})\\,dx = -\\cos(e^{x}) + c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-substitution.q046",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "integration by substitution",
      "logarithm",
      "surds"
    ],
    "questionText": "Use substitution to find $\\displaystyle\\int \\dfrac{1}{x\\sqrt{\\ln x}}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose a substitution",
          "workingLatex": "u = \\ln x",
          "explanation": "Look for a function whose derivative also appears as a factor in the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate",
          "workingLatex": "\\dfrac{du}{dx} = \\dfrac{1}{x}",
          "explanation": "Find $du$ in terms of $dx$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange",
          "workingLatex": "du = (\\dfrac{1}{x})\\,dx",
          "explanation": "Express $dx$ (or the matching factor) in terms of $du$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the integral",
          "workingLatex": "\\int u^{-1/2}\\,du",
          "explanation": "Replace every part of the integral with $u$-terms.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate with respect to u",
          "workingLatex": "2\\sqrt{\\ln x}",
          "explanation": "Integrate the simpler expression in $u$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Replace u",
          "workingLatex": "2\\sqrt{\\ln x} + c",
          "explanation": "Substitute back the original expression for $u$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int \\dfrac{1}{x\\sqrt{\\ln x}}\\,dx = 2\\sqrt{\\ln x} + c",
          "explanation": "Include $+c$ for an indefinite integral.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Identify the substitution",
          "workingLatex": "\\text{Look for a function and its derivative}",
          "explanation": "Integration by substitution reverses the chain rule — find $u=g(x)$ where $g'(x)$ appears as a factor.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Write du in terms of dx",
          "workingLatex": "du = g'(x)\\,dx",
          "explanation": "Differentiate $u$ and rearrange to replace the $x$-terms.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\dfrac{1}{x\\sqrt{\\ln x}}\\,dx = 2\\sqrt{\\ln x} + c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-substitution.q047",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "integration by substitution",
      "logarithm"
    ],
    "questionText": "Use substitution to find $\\displaystyle\\int x^{3}(x^{4}+1)^{-1}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose a substitution",
          "workingLatex": "u = x^{4}+1",
          "explanation": "Look for a function whose derivative also appears as a factor in the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate",
          "workingLatex": "\\dfrac{du}{dx} = 4x^{3}",
          "explanation": "Find $du$ in terms of $dx$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange",
          "workingLatex": "du = (4x^{3})\\,dx",
          "explanation": "Express $dx$ (or the matching factor) in terms of $du$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the integral",
          "workingLatex": "\\int \\dfrac{1}{4u}\\,du",
          "explanation": "Replace every part of the integral with $u$-terms.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate with respect to u",
          "workingLatex": "\\dfrac{1}{4}\\ln|x^{4}+1|",
          "explanation": "Integrate the simpler expression in $u$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Replace u",
          "workingLatex": "\\dfrac{1}{4}\\ln|x^{4}+1| + c",
          "explanation": "Substitute back the original expression for $u$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int x^{3}(x^{4}+1)^{-1}\\,dx = \\dfrac{1}{4}\\ln|x^{4}+1| + c",
          "explanation": "Include $+c$ for an indefinite integral.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Identify the substitution",
          "workingLatex": "\\text{Look for a function and its derivative}",
          "explanation": "Integration by substitution reverses the chain rule — find $u=g(x)$ where $g'(x)$ appears as a factor.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Write du in terms of dx",
          "workingLatex": "du = g'(x)\\,dx",
          "explanation": "Differentiate $u$ and rearrange to replace the $x$-terms.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int x^{3}(x^{4}+1)^{-1}\\,dx = \\dfrac{1}{4}\\ln|x^{4}+1| + c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-substitution.q048",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "integration by substitution",
      "trigonometric"
    ],
    "questionText": "Use substitution to find $\\displaystyle\\int \\tan x \\sec^{2}x\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose a substitution",
          "workingLatex": "u = \\tan x",
          "explanation": "Look for a function whose derivative also appears as a factor in the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate",
          "workingLatex": "\\dfrac{du}{dx} = \\sec^{2}x",
          "explanation": "Find $du$ in terms of $dx$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange",
          "workingLatex": "du = (\\sec^{2}x)\\,dx",
          "explanation": "Express $dx$ (or the matching factor) in terms of $du$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the integral",
          "workingLatex": "\\int u\\,du",
          "explanation": "Replace every part of the integral with $u$-terms.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate with respect to u",
          "workingLatex": "\\dfrac{1}{2}\\tan^{2}x",
          "explanation": "Integrate the simpler expression in $u$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Replace u",
          "workingLatex": "\\dfrac{1}{2}\\tan^{2}x + c",
          "explanation": "Substitute back the original expression for $u$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int \\tan x \\sec^{2}x\\,dx = \\dfrac{1}{2}\\tan^{2}x + c",
          "explanation": "Include $+c$ for an indefinite integral.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Identify the substitution",
          "workingLatex": "\\text{Look for a function and its derivative}",
          "explanation": "Integration by substitution reverses the chain rule — find $u=g(x)$ where $g'(x)$ appears as a factor.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Write du in terms of dx",
          "workingLatex": "du = g'(x)\\,dx",
          "explanation": "Differentiate $u$ and rearrange to replace the $x$-terms.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\tan x \\sec^{2}x\\,dx = \\dfrac{1}{2}\\tan^{2}x + c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-substitution.q049",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "integration by substitution",
      "trigonometric"
    ],
    "questionText": "Use substitution to find $\\displaystyle\\int \\dfrac{\\cos x}{\\sin x}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose a substitution",
          "workingLatex": "u = \\sin x",
          "explanation": "Look for a function whose derivative also appears as a factor in the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate",
          "workingLatex": "\\dfrac{du}{dx} = \\cos x",
          "explanation": "Find $du$ in terms of $dx$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange",
          "workingLatex": "du = (\\cos x)\\,dx",
          "explanation": "Express $dx$ (or the matching factor) in terms of $du$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the integral",
          "workingLatex": "\\int \\dfrac{1}{u}\\,du",
          "explanation": "Replace every part of the integral with $u$-terms.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate with respect to u",
          "workingLatex": "\\ln|\\sin x|",
          "explanation": "Integrate the simpler expression in $u$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Replace u",
          "workingLatex": "\\ln|\\sin x| + c",
          "explanation": "Substitute back the original expression for $u$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int \\dfrac{\\cos x}{\\sin x}\\,dx = \\ln|\\sin x| + c",
          "explanation": "Include $+c$ for an indefinite integral.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Identify the substitution",
          "workingLatex": "\\text{Look for a function and its derivative}",
          "explanation": "Integration by substitution reverses the chain rule — find $u=g(x)$ where $g'(x)$ appears as a factor.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Write du in terms of dx",
          "workingLatex": "du = g'(x)\\,dx",
          "explanation": "Differentiate $u$ and rearrange to replace the $x$-terms.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\dfrac{\\cos x}{\\sin x}\\,dx = \\ln|\\sin x| + c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-substitution.q050",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "integration by substitution",
      "exponential"
    ],
    "questionText": "Use substitution to find $\\displaystyle\\int x^{2}e^{x^{3}}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose a substitution",
          "workingLatex": "u = x^{3}",
          "explanation": "Look for a function whose derivative also appears as a factor in the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate",
          "workingLatex": "\\dfrac{du}{dx} = 3x^{2}",
          "explanation": "Find $du$ in terms of $dx$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange",
          "workingLatex": "du = (3x^{2})\\,dx",
          "explanation": "Express $dx$ (or the matching factor) in terms of $du$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the integral",
          "workingLatex": "\\int e^{u}\\,du",
          "explanation": "Replace every part of the integral with $u$-terms.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate with respect to u",
          "workingLatex": "\\dfrac{1}{3}e^{x^{3}}",
          "explanation": "Integrate the simpler expression in $u$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Replace u",
          "workingLatex": "\\dfrac{1}{3}e^{x^{3}} + c",
          "explanation": "Substitute back the original expression for $u$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int x^{2}e^{x^{3}}\\,dx = \\dfrac{1}{3}e^{x^{3}} + c",
          "explanation": "Include $+c$ for an indefinite integral.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Identify the substitution",
          "workingLatex": "\\text{Look for a function and its derivative}",
          "explanation": "Integration by substitution reverses the chain rule — find $u=g(x)$ where $g'(x)$ appears as a factor.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Write du in terms of dx",
          "workingLatex": "du = g'(x)\\,dx",
          "explanation": "Differentiate $u$ and rearrange to replace the $x$-terms.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int x^{2}e^{x^{3}}\\,dx = \\dfrac{1}{3}e^{x^{3}} + c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-substitution.q051",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "integration by substitution",
      "surds"
    ],
    "questionText": "Use substitution to find $\\displaystyle\\int \\dfrac{1}{\\sqrt{2x+1}}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose a substitution",
          "workingLatex": "u = 2x+1",
          "explanation": "Look for a function whose derivative also appears as a factor in the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate",
          "workingLatex": "\\dfrac{du}{dx} = 2",
          "explanation": "Find $du$ in terms of $dx$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange",
          "workingLatex": "du = (2)\\,dx",
          "explanation": "Express $dx$ (or the matching factor) in terms of $du$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the integral",
          "workingLatex": "\\int u^{-1/2}\\,du",
          "explanation": "Replace every part of the integral with $u$-terms.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate with respect to u",
          "workingLatex": "\\sqrt{2x+1}",
          "explanation": "Integrate the simpler expression in $u$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Replace u",
          "workingLatex": "\\sqrt{2x+1} + c",
          "explanation": "Substitute back the original expression for $u$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int \\dfrac{1}{\\sqrt{2x+1}}\\,dx = \\sqrt{2x+1} + c",
          "explanation": "Include $+c$ for an indefinite integral.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Identify the substitution",
          "workingLatex": "\\text{Look for a function and its derivative}",
          "explanation": "Integration by substitution reverses the chain rule — find $u=g(x)$ where $g'(x)$ appears as a factor.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Write du in terms of dx",
          "workingLatex": "du = g'(x)\\,dx",
          "explanation": "Differentiate $u$ and rearrange to replace the $x$-terms.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\dfrac{1}{\\sqrt{2x+1}}\\,dx = \\sqrt{2x+1} + c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-substitution.q052",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "integration by substitution",
      "logarithm"
    ],
    "questionText": "Use substitution to find $\\displaystyle\\int \\dfrac{x^{2}}{x^{3}+1}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose a substitution",
          "workingLatex": "u = x^{3}+1",
          "explanation": "Look for a function whose derivative also appears as a factor in the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate",
          "workingLatex": "\\dfrac{du}{dx} = 3x^{2}",
          "explanation": "Find $du$ in terms of $dx$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange",
          "workingLatex": "du = (3x^{2})\\,dx",
          "explanation": "Express $dx$ (or the matching factor) in terms of $du$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the integral",
          "workingLatex": "\\int \\dfrac{1}{3u}\\,du",
          "explanation": "Replace every part of the integral with $u$-terms.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate with respect to u",
          "workingLatex": "\\dfrac{1}{3}\\ln|x^{3}+1|",
          "explanation": "Integrate the simpler expression in $u$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Replace u",
          "workingLatex": "\\dfrac{1}{3}\\ln|x^{3}+1| + c",
          "explanation": "Substitute back the original expression for $u$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int \\dfrac{x^{2}}{x^{3}+1}\\,dx = \\dfrac{1}{3}\\ln|x^{3}+1| + c",
          "explanation": "Include $+c$ for an indefinite integral.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Identify the substitution",
          "workingLatex": "\\text{Look for a function and its derivative}",
          "explanation": "Integration by substitution reverses the chain rule — find $u=g(x)$ where $g'(x)$ appears as a factor.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Write du in terms of dx",
          "workingLatex": "du = g'(x)\\,dx",
          "explanation": "Differentiate $u$ and rearrange to replace the $x$-terms.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\dfrac{x^{2}}{x^{3}+1}\\,dx = \\dfrac{1}{3}\\ln|x^{3}+1| + c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-substitution.q053",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "integration by substitution",
      "trigonometric"
    ],
    "questionText": "Use substitution to find $\\displaystyle\\int \\sin^{2}x \\cos x\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose a substitution",
          "workingLatex": "u = \\sin x",
          "explanation": "Look for a function whose derivative also appears as a factor in the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate",
          "workingLatex": "\\dfrac{du}{dx} = \\cos x",
          "explanation": "Find $du$ in terms of $dx$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange",
          "workingLatex": "du = (\\cos x)\\,dx",
          "explanation": "Express $dx$ (or the matching factor) in terms of $du$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the integral",
          "workingLatex": "\\int u^{2}\\,du",
          "explanation": "Replace every part of the integral with $u$-terms.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate with respect to u",
          "workingLatex": "\\dfrac{1}{3}\\sin^{3}x",
          "explanation": "Integrate the simpler expression in $u$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Replace u",
          "workingLatex": "\\dfrac{1}{3}\\sin^{3}x + c",
          "explanation": "Substitute back the original expression for $u$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int \\sin^{2}x \\cos x\\,dx = \\dfrac{1}{3}\\sin^{3}x + c",
          "explanation": "Include $+c$ for an indefinite integral.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Identify the substitution",
          "workingLatex": "\\text{Look for a function and its derivative}",
          "explanation": "Integration by substitution reverses the chain rule — find $u=g(x)$ where $g'(x)$ appears as a factor.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Write du in terms of dx",
          "workingLatex": "du = g'(x)\\,dx",
          "explanation": "Differentiate $u$ and rearrange to replace the $x$-terms.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\sin^{2}x \\cos x\\,dx = \\dfrac{1}{3}\\sin^{3}x + c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-substitution.q054",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "integration by substitution",
      "exponential"
    ],
    "questionText": "Use substitution to find $\\displaystyle\\int \\dfrac{e^{2x}}{1+e^{2x}}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose a substitution",
          "workingLatex": "u = 1+e^{2x}",
          "explanation": "Look for a function whose derivative also appears as a factor in the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate",
          "workingLatex": "\\dfrac{du}{dx} = 2e^{2x}",
          "explanation": "Find $du$ in terms of $dx$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange",
          "workingLatex": "du = (2e^{2x})\\,dx",
          "explanation": "Express $dx$ (or the matching factor) in terms of $du$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the integral",
          "workingLatex": "\\int \\dfrac{1}{2u}\\,du",
          "explanation": "Replace every part of the integral with $u$-terms.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate with respect to u",
          "workingLatex": "\\dfrac{1}{2}\\ln(1+e^{2x})",
          "explanation": "Integrate the simpler expression in $u$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Replace u",
          "workingLatex": "\\dfrac{1}{2}\\ln(1+e^{2x}) + c",
          "explanation": "Substitute back the original expression for $u$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int \\dfrac{e^{2x}}{1+e^{2x}}\\,dx = \\dfrac{1}{2}\\ln(1+e^{2x}) + c",
          "explanation": "Include $+c$ for an indefinite integral.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Identify the substitution",
          "workingLatex": "\\text{Look for a function and its derivative}",
          "explanation": "Integration by substitution reverses the chain rule — find $u=g(x)$ where $g'(x)$ appears as a factor.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Write du in terms of dx",
          "workingLatex": "du = g'(x)\\,dx",
          "explanation": "Differentiate $u$ and rearrange to replace the $x$-terms.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\dfrac{e^{2x}}{1+e^{2x}}\\,dx = \\dfrac{1}{2}\\ln(1+e^{2x}) + c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-substitution.q055",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "integration by substitution",
      "general power"
    ],
    "questionText": "Use substitution to find $\\displaystyle\\int x(1+x^{2})^{n}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose a substitution",
          "workingLatex": "u = 1+x^{2}",
          "explanation": "Look for a function whose derivative also appears as a factor in the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate",
          "workingLatex": "\\dfrac{du}{dx} = 2x",
          "explanation": "Find $du$ in terms of $dx$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange",
          "workingLatex": "du = (2x)\\,dx",
          "explanation": "Express $dx$ (or the matching factor) in terms of $du$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the integral",
          "workingLatex": "\\int \\dfrac{1}{2}u^{n}\\,du",
          "explanation": "Replace every part of the integral with $u$-terms.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate with respect to u",
          "workingLatex": "\\dfrac{1}{2(n+1)}(1+x^{2})^{n+1}",
          "explanation": "Integrate the simpler expression in $u$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Replace u",
          "workingLatex": "\\dfrac{1}{2(n+1)}(1+x^{2})^{n+1} + c",
          "explanation": "Substitute back the original expression for $u$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int x(1+x^{2})^{n}\\,dx = \\dfrac{1}{2(n+1)}(1+x^{2})^{n+1} + c",
          "explanation": "Include $+c$ for an indefinite integral.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Identify the substitution",
          "workingLatex": "\\text{Look for a function and its derivative}",
          "explanation": "Integration by substitution reverses the chain rule — find $u=g(x)$ where $g'(x)$ appears as a factor.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Write du in terms of dx",
          "workingLatex": "du = g'(x)\\,dx",
          "explanation": "Differentiate $u$ and rearrange to replace the $x$-terms.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int x(1+x^{2})^{n}\\,dx = \\dfrac{1}{2(n+1)}(1+x^{2})^{n+1} + c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-substitution.q056",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "expression",
    "tags": [
      "integration by substitution",
      "definite integral",
      "rational",
      "multi-step"
    ],
    "questionText": "Use the substitution $u = x^{2}+1$ to evaluate $\\displaystyle\\int_{0}^{1} \\dfrac{x}{(x^{2}+1)^{2}}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set u = x² + 1",
          "workingLatex": "u = x^{2}+1,\\; du = 2x\\,dx",
          "explanation": "The numerator $x\\,dx$ matches half of $du$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rewrite",
          "workingLatex": "\\dfrac{1}{2}\\int_{1}^{2} u^{-2}\\,du",
          "explanation": "Limits: $x=0 \\Rightarrow u=1$, $x=1 \\Rightarrow u=2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate",
          "workingLatex": "\\dfrac{1}{2}\\left[-u^{-1}\\right]_{1}^{2}",
          "explanation": "Power rule for $u^{-2}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate",
          "workingLatex": "\\dfrac{1}{2}\\left(-\\dfrac{1}{2}+1\\right)",
          "explanation": "Substitute limits.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "\\dfrac{1}{4}",
          "explanation": "Exact value.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret",
          "workingLatex": "\\text{Area under the reciprocal-square curve}",
          "explanation": "Positive area on $[0,1]$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Alternative check",
          "workingLatex": "\\text{Antiderivative } -\\dfrac{1}{2(x^{2}+1)}",
          "explanation": "Differentiate to confirm.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Domain",
          "workingLatex": "x^{2}+1 > 0",
          "explanation": "Always valid.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\dfrac{1}{4}",
          "explanation": "Final value.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Identify the substitution",
          "workingLatex": "\\text{Look for a function and its derivative}",
          "explanation": "Integration by substitution reverses the chain rule — find $u=g(x)$ where $g'(x)$ appears as a factor.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Write du in terms of dx",
          "workingLatex": "du = g'(x)\\,dx",
          "explanation": "Differentiate $u$ and rearrange to replace the $x$-terms.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Change limits for definite integrals",
          "workingLatex": "u \\text{-limits from } x\\text{-limits}",
          "explanation": "When evaluating a definite integral, always convert the limits to avoid back-substitution.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Integrate in u",
          "workingLatex": "\\int (\\cdots)\\,du",
          "explanation": "The substituted integral should be simpler than the original.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{0}^{1} \\dfrac{x}{(x^{2}+1)^{2}}\\,dx = \\dfrac{1}{4}$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-substitution.q057",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "expression",
    "tags": [
      "integration by substitution",
      "reciprocal substitution",
      "multi-step"
    ],
    "questionText": "Find $\\displaystyle\\int \\dfrac{1}{x^{2}\\sqrt{x^{2}-1}}\\,dx$ using the substitution $u = \\dfrac{1}{x}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set u = 1/x",
          "workingLatex": "u = \\dfrac{1}{x},\\; du = -\\dfrac{1}{x^{2}}\\,dx",
          "explanation": "This reciprocal substitution is useful when $x^2$ appears in the denominator.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Express √",
          "workingLatex": "\\sqrt{x^{2}-1} = \\dfrac{\\sqrt{1-u^{2}}}{u}",
          "explanation": "Rewrite all terms in $u$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute",
          "workingLatex": "-\\int \\dfrac{u}{\\sqrt{1-u^{2}}}\\,du",
          "explanation": "The integral simplifies.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Inner sub v = 1-u²",
          "workingLatex": "v = 1-u^{2},\\; dv = -2u\\,du",
          "explanation": "Second substitution for the surd.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate",
          "workingLatex": "\\dfrac{1}{2}\\int v^{-1/2}\\,dv = v^{1/2}",
          "explanation": "Power rule.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Back-substitute",
          "workingLatex": "\\sqrt{1-u^{2}} = \\dfrac{\\sqrt{x^{2}-1}}{x}",
          "explanation": "Return to $x$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify",
          "workingLatex": "\\dfrac{\\sqrt{x^{2}-1}}{x} + c",
          "explanation": "Standard form.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Domain",
          "workingLatex": "|x| > 1",
          "explanation": "Square root requires $x^2>1$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\dfrac{\\sqrt{x^{2}-1}}{x} + c",
          "explanation": "Antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Identify the substitution",
          "workingLatex": "\\text{Look for a function and its derivative}",
          "explanation": "Integration by substitution reverses the chain rule — find $u=g(x)$ where $g'(x)$ appears as a factor.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Write du in terms of dx",
          "workingLatex": "du = g'(x)\\,dx",
          "explanation": "Differentiate $u$ and rearrange to replace the $x$-terms.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Change limits for definite integrals",
          "workingLatex": "u \\text{-limits from } x\\text{-limits}",
          "explanation": "When evaluating a definite integral, always convert the limits to avoid back-substitution.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Integrate in u",
          "workingLatex": "\\int (\\cdots)\\,du",
          "explanation": "The substituted integral should be simpler than the original.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\dfrac{1}{x^{2}\\sqrt{x^{2}-1}}\\,dx = \\dfrac{\\sqrt{x^{2}-1}}{x} + c$ for $|x|>1$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-substitution.q058",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "expression",
    "tags": [
      "integration by substitution",
      "area",
      "application",
      "multi-step"
    ],
    "questionText": "The region $R$ is bounded by $y = \\dfrac{x}{x^{2}+1}$, the $x$-axis, and the lines $x=0$ and $x=1$. Find the exact area of $R$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the area",
          "workingLatex": "A = \\int_{0}^{1} \\dfrac{x}{x^{2}+1}\\,dx",
          "explanation": "Area equals the definite integral.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitution",
          "workingLatex": "u = x^{2}+1,\\; du = 2x\\,dx",
          "explanation": "Match numerator factor.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Change limits",
          "workingLatex": "u = 1 \\text{ to } 2",
          "explanation": "Convert bounds.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integral",
          "workingLatex": "\\dfrac{1}{2}\\int_{1}^{2} \\dfrac{1}{u}\\,du",
          "explanation": "Logarithmic form.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate",
          "workingLatex": "\\dfrac{1}{2}\\ln 2",
          "explanation": "Exact area.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Units",
          "workingLatex": "\\text{square units}",
          "explanation": "Area measure.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check sign",
          "workingLatex": "f(x) > 0 \\text{ on } [0,1]",
          "explanation": "Positive area confirmed.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Sketch",
          "workingLatex": "\\text{Decreasing positive curve}",
          "explanation": "Graph supports result.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "A = \\dfrac{1}{2}\\ln 2",
          "explanation": "Exact area.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Identify the substitution",
          "workingLatex": "\\text{Look for a function and its derivative}",
          "explanation": "Integration by substitution reverses the chain rule — find $u=g(x)$ where $g'(x)$ appears as a factor.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Write du in terms of dx",
          "workingLatex": "du = g'(x)\\,dx",
          "explanation": "Differentiate $u$ and rearrange to replace the $x$-terms.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Change limits for definite integrals",
          "workingLatex": "u \\text{-limits from } x\\text{-limits}",
          "explanation": "When evaluating a definite integral, always convert the limits to avoid back-substitution.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Integrate in u",
          "workingLatex": "\\int (\\cdots)\\,du",
          "explanation": "The substituted integral should be simpler than the original.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= \\dfrac{1}{2}\\ln 2$ square units."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-substitution.q059",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "expression",
    "tags": [
      "integration by substitution",
      "trigonometric",
      "definite",
      "multi-step"
    ],
    "questionText": "Use substitution to find $\\displaystyle\\int_{0}^{\\pi/4} \\tan x \\sec^{2}x\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose u",
          "workingLatex": "u = \\tan x,\\; du = \\sec^{2}x\\,dx",
          "explanation": "Exact match.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Limits",
          "workingLatex": "x = 0 \\Rightarrow u = 0;\\; x = \\pi/4 \\Rightarrow u = 1",
          "explanation": "Change bounds.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integral",
          "workingLatex": "\\int_{0}^{1} u\\,du",
          "explanation": "Simple polynomial.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate",
          "workingLatex": "\\left[\\dfrac{u^{2}}{2}\\right]_{0}^{1}",
          "explanation": "Integrate.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Result",
          "workingLatex": "\\dfrac{1}{2}",
          "explanation": "Exact value.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Geometric",
          "workingLatex": "\\text{Area under } \\tan x \\sec^{2}x",
          "explanation": "Positive on the interval.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Alternative u = sec x",
          "workingLatex": "\\text{Also works}",
          "explanation": "Different valid choice.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify antiderivative",
          "workingLatex": "\\dfrac{1}{2}\\tan^{2}x",
          "explanation": "Differentiate.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\dfrac{1}{2}",
          "explanation": "Final.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Identify the substitution",
          "workingLatex": "\\text{Look for a function and its derivative}",
          "explanation": "Integration by substitution reverses the chain rule — find $u=g(x)$ where $g'(x)$ appears as a factor.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Write du in terms of dx",
          "workingLatex": "du = g'(x)\\,dx",
          "explanation": "Differentiate $u$ and rearrange to replace the $x$-terms.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Change limits for definite integrals",
          "workingLatex": "u \\text{-limits from } x\\text{-limits}",
          "explanation": "When evaluating a definite integral, always convert the limits to avoid back-substitution.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Integrate in u",
          "workingLatex": "\\int (\\cdots)\\,du",
          "explanation": "The substituted integral should be simpler than the original.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{0}^{\\pi/4} \\tan x \\sec^{2}x\\,dx = \\dfrac{1}{2}$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-substitution.q060",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "expression",
    "tags": [
      "integration by substitution",
      "exponential",
      "surds",
      "multi-step"
    ],
    "questionText": "Find $\\displaystyle\\int e^{x}\\sqrt{1+e^{x}}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Substitute",
          "workingLatex": "u = 1+e^{x},\\; du = e^{x}\\,dx",
          "explanation": "The factor $e^x\\,dx$ is present.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rewrite",
          "workingLatex": "\\int u^{1/2}\\,du",
          "explanation": "Power form.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate",
          "workingLatex": "\\dfrac{2}{3}u^{3/2} + c",
          "explanation": "Standard power rule.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Back-substitute",
          "workingLatex": "\\dfrac{2}{3}(1+e^{x})^{3/2} + c",
          "explanation": "Return to $x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check",
          "workingLatex": "\\dfrac{d}{dx}\\left[\\dfrac{2}{3}(1+e^{x})^{3/2}\\right] = e^{x}\\sqrt{1+e^{x}}",
          "explanation": "Differentiate to verify.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Domain",
          "workingLatex": "1+e^{x} > 0",
          "explanation": "Always true.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Special case",
          "workingLatex": "x=0 \\Rightarrow \\text{integrand } = \\sqrt{2}",
          "explanation": "Sanity check.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Form",
          "workingLatex": "\\text{Composite exponential}",
          "explanation": "Common exam type.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\dfrac{2}{3}(1+e^{x})^{3/2} + c",
          "explanation": "Final.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Identify the substitution",
          "workingLatex": "\\text{Look for a function and its derivative}",
          "explanation": "Integration by substitution reverses the chain rule — find $u=g(x)$ where $g'(x)$ appears as a factor.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Write du in terms of dx",
          "workingLatex": "du = g'(x)\\,dx",
          "explanation": "Differentiate $u$ and rearrange to replace the $x$-terms.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Change limits for definite integrals",
          "workingLatex": "u \\text{-limits from } x\\text{-limits}",
          "explanation": "When evaluating a definite integral, always convert the limits to avoid back-substitution.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Integrate in u",
          "workingLatex": "\\int (\\cdots)\\,du",
          "explanation": "The substituted integral should be simpler than the original.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int e^{x}\\sqrt{1+e^{x}}\\,dx = \\dfrac{2}{3}(1+e^{x})^{3/2} + c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-substitution.q061",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "expression",
    "tags": [
      "integration by substitution",
      "symmetry",
      "definite",
      "multi-step"
    ],
    "questionText": "Evaluate $\\displaystyle\\int_{-1}^{1} \\dfrac{x}{\\sqrt{x^{2}+1}}\\,dx$ and explain the result.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Odd integrand",
          "workingLatex": "f(-x) = -f(x)",
          "explanation": "The function is odd.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitution",
          "workingLatex": "u = x^{2}+1,\\; du = 2x\\,dx",
          "explanation": "Still valid on $[-1,1]$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Antiderivative",
          "workingLatex": "\\sqrt{x^{2}+1}",
          "explanation": "Indefinite integral (up to constant).",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate",
          "workingLatex": "\\sqrt{2} - \\sqrt{2} = 0",
          "explanation": "Equal values at symmetric limits.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Symmetry argument",
          "workingLatex": "\\int_{-a}^{a} f(x)\\,dx = 0 \\text{ for odd } f",
          "explanation": "Areas cancel.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Graphical",
          "workingLatex": "\\text{Equal positive and negative areas}",
          "explanation": "Visual explanation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "No need for u-limits",
          "workingLatex": "\\text{Symmetry is quicker}",
          "explanation": "Useful shortcut.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "General rule",
          "workingLatex": "\\text{Odd function on symmetric interval}",
          "explanation": "Standard result.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "0",
          "explanation": "Integral is zero.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Identify the substitution",
          "workingLatex": "\\text{Look for a function and its derivative}",
          "explanation": "Integration by substitution reverses the chain rule — find $u=g(x)$ where $g'(x)$ appears as a factor.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Write du in terms of dx",
          "workingLatex": "du = g'(x)\\,dx",
          "explanation": "Differentiate $u$ and rearrange to replace the $x$-terms.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Change limits for definite integrals",
          "workingLatex": "u \\text{-limits from } x\\text{-limits}",
          "explanation": "When evaluating a definite integral, always convert the limits to avoid back-substitution.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Integrate in u",
          "workingLatex": "\\int (\\cdots)\\,du",
          "explanation": "The substituted integral should be simpler than the original.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{-1}^{1} \\dfrac{x}{\\sqrt{x^{2}+1}}\\,dx = 0$ because the integrand is odd."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-substitution.q062",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "expression",
    "tags": [
      "integration by substitution",
      "trigonometric",
      "arctan",
      "multi-step"
    ],
    "questionText": "Use substitution to find $\\displaystyle\\int \\dfrac{\\sin x}{1+\\cos^{2}x}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Substitute",
          "workingLatex": "u = \\cos x,\\; du = -\\sin x\\,dx",
          "explanation": "The $\\sin x\\,dx$ factor matches.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rewrite",
          "workingLatex": "-\\int \\dfrac{1}{1+u^{2}}\\,du",
          "explanation": "Standard arctan form.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate",
          "workingLatex": "-\\arctan u + c",
          "explanation": "Recall $\\int \\tfrac{1}{1+u^2}\\,du = \\arctan u$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Back-substitute",
          "workingLatex": "-\\arctan(\\cos x) + c",
          "explanation": "Answer in $x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check derivative",
          "workingLatex": "\\text{Use chain rule}",
          "explanation": "Confirms result.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Range",
          "workingLatex": "\\arctan(\\cos x) \\in (-\\pi/4, \\pi/4]",
          "explanation": "Bounded output.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Special value",
          "workingLatex": "x = \\pi/2 \\Rightarrow -\\arctan 0 = 0",
          "explanation": "Test point.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Technique",
          "workingLatex": "\\text{Trig substitution to polynomial}",
          "explanation": "Common pattern.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "-\\arctan(\\cos x) + c",
          "explanation": "Final.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Identify the substitution",
          "workingLatex": "\\text{Look for a function and its derivative}",
          "explanation": "Integration by substitution reverses the chain rule — find $u=g(x)$ where $g'(x)$ appears as a factor.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Write du in terms of dx",
          "workingLatex": "du = g'(x)\\,dx",
          "explanation": "Differentiate $u$ and rearrange to replace the $x$-terms.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Change limits for definite integrals",
          "workingLatex": "u \\text{-limits from } x\\text{-limits}",
          "explanation": "When evaluating a definite integral, always convert the limits to avoid back-substitution.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Integrate in u",
          "workingLatex": "\\int (\\cdots)\\,du",
          "explanation": "The substituted integral should be simpler than the original.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\dfrac{\\sin x}{1+\\cos^{2}x}\\,dx = -\\arctan(\\cos x) + c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-substitution.q063",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "expression",
    "tags": [
      "integration by substitution",
      "curve",
      "application",
      "multi-step"
    ],
    "questionText": "A curve has gradient $\\dfrac{dy}{dx} = \\dfrac{x}{\\sqrt{x^{2}+1}}$ and passes through $(0, 1)$. Find $y$ in terms of $x$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Integrate the gradient",
          "workingLatex": "y = \\int \\dfrac{x}{\\sqrt{x^{2}+1}}\\,dx",
          "explanation": "Find $y$ by integration.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "u = x^{2}+1,\\; du = 2x\\,dx",
          "explanation": "Standard surd substitution.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate",
          "workingLatex": "y = \\sqrt{x^{2}+1} + c",
          "explanation": "Result of substitution.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Use (0,1)",
          "workingLatex": "1 = \\sqrt{1} + c",
          "explanation": "Substitute the given point.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve c",
          "workingLatex": "c = 0",
          "explanation": "Constant is zero.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Equation",
          "workingLatex": "y = \\sqrt{x^{2}+1}",
          "explanation": "Curve equation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify gradient",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{x}{\\sqrt{x^{2}+1}}",
          "explanation": "Differentiate to check.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify point",
          "workingLatex": "y(0) = 1",
          "explanation": "Passes through $(0,1)$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "y = \\sqrt{x^{2}+1}",
          "explanation": "Final equation.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Identify the substitution",
          "workingLatex": "\\text{Look for a function and its derivative}",
          "explanation": "Integration by substitution reverses the chain rule — find $u=g(x)$ where $g'(x)$ appears as a factor.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Write du in terms of dx",
          "workingLatex": "du = g'(x)\\,dx",
          "explanation": "Differentiate $u$ and rearrange to replace the $x$-terms.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Change limits for definite integrals",
          "workingLatex": "u \\text{-limits from } x\\text{-limits}",
          "explanation": "When evaluating a definite integral, always convert the limits to avoid back-substitution.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Integrate in u",
          "workingLatex": "\\int (\\cdots)\\,du",
          "explanation": "The substituted integral should be simpler than the original.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = \\sqrt{x^{2}+1}$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-substitution.q064",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "expression",
    "tags": [
      "integration by substitution",
      "definite",
      "reversed limits",
      "multi-step"
    ],
    "questionText": "Evaluate $\\displaystyle\\int_{0}^{1} x(1-x^{2})^{3}\\,dx$ using substitution.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Substitute",
          "workingLatex": "u = 1-x^{2},\\; du = -2x\\,dx",
          "explanation": "Note the negative sign.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Limits",
          "workingLatex": "x=0 \\Rightarrow u=1;\\; x=1 \\Rightarrow u=0",
          "explanation": "Limits reverse.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integral",
          "workingLatex": "-\\dfrac{1}{2}\\int_{1}^{0} u^{3}\\,du = \\dfrac{1}{2}\\int_{0}^{1} u^{3}\\,du",
          "explanation": "Swap limits to remove negative.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate",
          "workingLatex": "\\dfrac{1}{2}\\left[\\dfrac{u^{4}}{4}\\right]_{0}^{1}",
          "explanation": "Power rule.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate",
          "workingLatex": "\\dfrac{1}{8}",
          "explanation": "Exact value.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Area interpretation",
          "workingLatex": "\\text{Positive area under curve}",
          "explanation": "Integrand positive on $(0,1)$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Antiderivative form",
          "workingLatex": "-\\dfrac{1}{8}(1-x^{2})^{4}",
          "explanation": "Check by differentiating.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Technique note",
          "workingLatex": "\\text{Watch for reversed limits}",
          "explanation": "Common exam trap.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\dfrac{1}{8}",
          "explanation": "Final.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Identify the substitution",
          "workingLatex": "\\text{Look for a function and its derivative}",
          "explanation": "Integration by substitution reverses the chain rule — find $u=g(x)$ where $g'(x)$ appears as a factor.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Write du in terms of dx",
          "workingLatex": "du = g'(x)\\,dx",
          "explanation": "Differentiate $u$ and rearrange to replace the $x$-terms.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Change limits for definite integrals",
          "workingLatex": "u \\text{-limits from } x\\text{-limits}",
          "explanation": "When evaluating a definite integral, always convert the limits to avoid back-substitution.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Integrate in u",
          "workingLatex": "\\int (\\cdots)\\,du",
          "explanation": "The substituted integral should be simpler than the original.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{0}^{1} x(1-x^{2})^{3}\\,dx = \\dfrac{1}{8}$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-substitution.q065",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "expression",
    "tags": [
      "integration by substitution",
      "logarithm",
      "nested",
      "multi-step"
    ],
    "questionText": "Find $\\displaystyle\\int \\dfrac{1}{x\\ln x \\ln(\\ln x)}\\,dx$ for $x > 1$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Substitute",
          "workingLatex": "u = \\ln(\\ln x),\\; du = \\dfrac{1}{x\\ln x}\\,dx",
          "explanation": "The denominator matches $du$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rewrite",
          "workingLatex": "\\int \\dfrac{1}{u}\\,du",
          "explanation": "Logarithmic integral.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate",
          "workingLatex": "\\ln|u| + c",
          "explanation": "Standard result.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Back-substitute",
          "workingLatex": "\\ln|\\ln(\\ln x)| + c",
          "explanation": "Answer in $x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Domain",
          "workingLatex": "x > e \\text{ for } \\ln(\\ln x) > 0",
          "explanation": "Nested log domain.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Structure",
          "workingLatex": "\\text{Repeated log composition}",
          "explanation": "Recognise the pattern.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check",
          "workingLatex": "\\dfrac{d}{dx}[\\ln(\\ln(\\ln x))] = \\dfrac{1}{x\\ln x \\ln(\\ln x)}",
          "explanation": "Verify.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Exam tip",
          "workingLatex": "\\text{Work from outside in}",
          "explanation": "Substitute the outermost log first.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\ln|\\ln(\\ln x)| + c",
          "explanation": "Final.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Identify the substitution",
          "workingLatex": "\\text{Look for a function and its derivative}",
          "explanation": "Integration by substitution reverses the chain rule — find $u=g(x)$ where $g'(x)$ appears as a factor.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Write du in terms of dx",
          "workingLatex": "du = g'(x)\\,dx",
          "explanation": "Differentiate $u$ and rearrange to replace the $x$-terms.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Change limits for definite integrals",
          "workingLatex": "u \\text{-limits from } x\\text{-limits}",
          "explanation": "When evaluating a definite integral, always convert the limits to avoid back-substitution.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Integrate in u",
          "workingLatex": "\\int (\\cdots)\\,du",
          "explanation": "The substituted integral should be simpler than the original.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\dfrac{1}{x\\ln x \\ln(\\ln x)}\\,dx = \\ln|\\ln(\\ln x)| + c$ for $x > e$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-substitution.q066",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "expression",
    "tags": [
      "integration by substitution",
      "trigonometric",
      "definite",
      "multi-step"
    ],
    "questionText": "Use the substitution $u = \\sin x$ to evaluate $\\displaystyle\\int_{0}^{\\pi/2} \\cos^{3}x\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rewrite cos³",
          "workingLatex": "\\cos^{3}x = \\cos^{2}x \\cdot \\cos x = (1-\\sin^{2}x)\\cos x",
          "explanation": "Split to expose $\\cos x\\,dx$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "u = \\sin x,\\; du = \\cos x\\,dx",
          "explanation": "Standard trig substitution.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Limits",
          "workingLatex": "0 \\text{ to } 1",
          "explanation": "Change bounds.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integral",
          "workingLatex": "\\int_{0}^{1} (1-u^{2})\\,du",
          "explanation": "Polynomial in $u$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate",
          "workingLatex": "\\left[u - \\dfrac{u^{3}}{3}\\right]_{0}^{1}",
          "explanation": "Term by term.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate",
          "workingLatex": "1 - \\dfrac{1}{3} = \\dfrac{2}{3}",
          "explanation": "Exact value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Known result",
          "workingLatex": "\\int_{0}^{\\pi/2}\\cos^{n}x\\,dx",
          "explanation": "Reduction formula context.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Area",
          "workingLatex": "\\text{Positive area under cosine curve}",
          "explanation": "Interpretation.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\dfrac{2}{3}",
          "explanation": "Final.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Identify the substitution",
          "workingLatex": "\\text{Look for a function and its derivative}",
          "explanation": "Integration by substitution reverses the chain rule — find $u=g(x)$ where $g'(x)$ appears as a factor.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Write du in terms of dx",
          "workingLatex": "du = g'(x)\\,dx",
          "explanation": "Differentiate $u$ and rearrange to replace the $x$-terms.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Change limits for definite integrals",
          "workingLatex": "u \\text{-limits from } x\\text{-limits}",
          "explanation": "When evaluating a definite integral, always convert the limits to avoid back-substitution.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Integrate in u",
          "workingLatex": "\\int (\\cdots)\\,du",
          "explanation": "The substituted integral should be simpler than the original.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{0}^{\\pi/2} \\cos^{3}x\\,dx = \\dfrac{2}{3}$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-substitution.q067",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "expression",
    "tags": [
      "integration by substitution",
      "FTC",
      "proof",
      "multi-step"
    ],
    "questionText": "Show that $\\displaystyle\\int_{a}^{b} f'(x)\\,dx = f(b) - f(a)$ using substitution $u = f(x)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set u = f(x)",
          "workingLatex": "u = f(x),\\; du = f'(x)\\,dx",
          "explanation": "The integrand is exactly $du$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Change limits",
          "workingLatex": "x = a \\Rightarrow u = f(a);\\; x = b \\Rightarrow u = f(b)",
          "explanation": "Convert bounds.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite integral",
          "workingLatex": "\\int_{f(a)}^{f(b)} du",
          "explanation": "Simple integral of $1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate",
          "workingLatex": "f(b) - f(a)",
          "explanation": "Fundamental theorem of calculus.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Name",
          "workingLatex": "\\text{Newton–Leibniz / FTC}",
          "explanation": "Core calculus result.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitution view",
          "workingLatex": "\\text{Change of variables confirms FTC}",
          "explanation": "Links techniques.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Application",
          "workingLatex": "\\text{Evaluate integrals of derivatives quickly}",
          "explanation": "Practical use.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Example",
          "workingLatex": "\\int_{1}^{2} \\dfrac{1}{x}\\,dx = \\ln 2 - \\ln 1 = \\ln 2",
          "explanation": "Illustration.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conclude",
          "workingLatex": "\\int_{a}^{b} f'(x)\\,dx = f(b) - f(a)",
          "explanation": "Proved.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Identify the substitution",
          "workingLatex": "\\text{Look for a function and its derivative}",
          "explanation": "Integration by substitution reverses the chain rule — find $u=g(x)$ where $g'(x)$ appears as a factor.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Write du in terms of dx",
          "workingLatex": "du = g'(x)\\,dx",
          "explanation": "Differentiate $u$ and rearrange to replace the $x$-terms.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Change limits for definite integrals",
          "workingLatex": "u \\text{-limits from } x\\text{-limits}",
          "explanation": "When evaluating a definite integral, always convert the limits to avoid back-substitution.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Integrate in u",
          "workingLatex": "\\int (\\cdots)\\,du",
          "explanation": "The substituted integral should be simpler than the original.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{a}^{b} f'(x)\\,dx = f(b) - f(a)$ (Fundamental Theorem of Calculus)."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-substitution.q068",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "expression",
    "tags": [
      "integration by substitution",
      "exponential",
      "arctan",
      "multi-step"
    ],
    "questionText": "Find the exact value of $\\displaystyle\\int_{0}^{\\ln 3} \\dfrac{e^{x}}{e^{2x}+1}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Multiply top and bottom",
          "workingLatex": "\\dfrac{e^{x}}{e^{2x}+1} = \\dfrac{1}{e^{x}+e^{-x}}",
          "explanation": "Alternative form.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "u = e^{x},\\; du = e^{x}\\,dx",
          "explanation": "Standard exponential sub.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Limits",
          "workingLatex": "x=0 \\Rightarrow u=1;\\; x=\\ln 3 \\Rightarrow u=3",
          "explanation": "New bounds.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integral",
          "workingLatex": "\\int_{1}^{3} \\dfrac{1}{u^{2}+1}\\,du",
          "explanation": "Arctan form.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate",
          "workingLatex": "\\left[\\arctan u\\right]_{1}^{3}",
          "explanation": "Standard result.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate",
          "workingLatex": "\\arctan 3 - \\arctan 1 = \\arctan 3 - \\dfrac{\\pi}{4}",
          "explanation": "Exact value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Decimal check",
          "workingLatex": "\\approx 0.318",
          "explanation": "Reasonable magnitude.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Technique",
          "workingLatex": "e^{x} \\text{ substitution for exponentials}",
          "explanation": "Key method.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\arctan 3 - \\dfrac{\\pi}{4}",
          "explanation": "Final.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Identify the substitution",
          "workingLatex": "\\text{Look for a function and its derivative}",
          "explanation": "Integration by substitution reverses the chain rule — find $u=g(x)$ where $g'(x)$ appears as a factor.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Write du in terms of dx",
          "workingLatex": "du = g'(x)\\,dx",
          "explanation": "Differentiate $u$ and rearrange to replace the $x$-terms.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Change limits for definite integrals",
          "workingLatex": "u \\text{-limits from } x\\text{-limits}",
          "explanation": "When evaluating a definite integral, always convert the limits to avoid back-substitution.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Integrate in u",
          "workingLatex": "\\int (\\cdots)\\,du",
          "explanation": "The substituted integral should be simpler than the original.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{0}^{\\ln 3} \\dfrac{e^{x}}{e^{2x}+1}\\,dx = \\arctan 3 - \\dfrac{\\pi}{4}$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-substitution.q069",
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "expression",
    "tags": [
      "integration by substitution",
      "differential equations",
      "modelling",
      "multi-step"
    ],
    "questionText": "The rate of growth of a population is proportional to $P(1-P/1000)$ where $P$ is the population. Given $\\dfrac{dP}{dt} = 0.1P(1-P/1000)$, use partial fractions and substitution to solve for $P$ given $P(0)=100$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Separate variables",
          "workingLatex": "\\dfrac{dP}{P(1-P/1000)} = 0.1\\,dt",
          "explanation": "Logistic-type DE.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Partial fractions",
          "workingLatex": "\\dfrac{1}{P(1-P/1000)} = \\dfrac{1}{P} + \\dfrac{1/1000}{1-P/1000}",
          "explanation": "Decompose.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate LHS",
          "workingLatex": "\\ln|P| - \\ln|1-P/1000| = 0.1t + c",
          "explanation": "Logarithmic integration.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Combine logs",
          "workingLatex": "\\ln\\left|\\dfrac{P}{1000-P}\\right| = 0.1t + c",
          "explanation": "Log laws.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Use P(0)=100",
          "workingLatex": "\\ln\\left(\\dfrac{100}{900}\\right) = c",
          "explanation": "Find constant.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Exponentiate",
          "workingLatex": "\\dfrac{P}{1000-P} = \\dfrac{1}{9}e^{0.1t}",
          "explanation": "Remove logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for P",
          "workingLatex": "P = \\dfrac{1000}{1+9e^{-0.1t}}",
          "explanation": "Logistic solution.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check t=0",
          "workingLatex": "P = 100",
          "explanation": "Initial condition satisfied.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "P = \\dfrac{1000}{1+9e^{-0.1t}}",
          "explanation": "Population model.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Identify the substitution",
          "workingLatex": "\\text{Look for a function and its derivative}",
          "explanation": "Integration by substitution reverses the chain rule — find $u=g(x)$ where $g'(x)$ appears as a factor.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Write du in terms of dx",
          "workingLatex": "du = g'(x)\\,dx",
          "explanation": "Differentiate $u$ and rearrange to replace the $x$-terms.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Change limits for definite integrals",
          "workingLatex": "u \\text{-limits from } x\\text{-limits}",
          "explanation": "When evaluating a definite integral, always convert the limits to avoid back-substitution.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Integrate in u",
          "workingLatex": "\\int (\\cdots)\\,du",
          "explanation": "The substituted integral should be simpler than the original.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P = \\dfrac{1000}{1+9e^{-0.1t}}$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by substitution",
    "subtopicId": "al.y2.pure.integration-substitution",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-substitution.q070",
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "expression",
    "tags": [
      "integration by substitution",
      "trigonometric substitution",
      "multi-part",
      "multi-step"
    ],
    "questionText": "(a) Use substitution to show that $\\displaystyle\\int_{0}^{a} \\dfrac{1}{\\sqrt{a^{2}-x^{2}}}\\,dx = \\dfrac{\\pi a}{2}$ for $a>0$.\n(b) Hence find $\\displaystyle\\int_{0}^{3} \\dfrac{1}{\\sqrt{9-x^{2}}}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "(a) Substitute",
          "workingLatex": "x = a\\sin\\theta,\\; dx = a\\cos\\theta\\,d\\theta",
          "explanation": "Trig substitution for $\\sqrt{a^2-x^2}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Simplify surd",
          "workingLatex": "\\sqrt{a^{2}-x^{2}} = a\\cos\\theta",
          "explanation": "Pythagorean identity.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Limits",
          "workingLatex": "x=0 \\Rightarrow \\theta=0;\\; x=a \\Rightarrow \\theta=\\pi/2",
          "explanation": "New bounds.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integral becomes",
          "workingLatex": "\\int_{0}^{\\pi/2} d\\theta",
          "explanation": "Cancels to integrate $1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate",
          "workingLatex": "\\dfrac{\\pi}{2}",
          "explanation": "Part (a) with unit $a$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Scale for general a",
          "workingLatex": "\\int_{0}^{a} \\dfrac{1}{\\sqrt{a^{2}-x^{2}}}\\,dx = \\dfrac{\\pi}{2} \\cdot 1",
          "explanation": "Standard result.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "(b) Identify a",
          "workingLatex": "a = 3",
          "explanation": "From $\\sqrt{9-x^2}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Apply result",
          "workingLatex": "\\dfrac{\\pi \\cdot 3}{2} = \\dfrac{3\\pi}{2}",
          "explanation": "Part (b) answer.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Interpretation",
          "workingLatex": "\\text{Quarter-circle area scaled}",
          "explanation": "Geometric meaning.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Answer",
          "workingLatex": "(a) \\dfrac{\\pi a}{2};\\; (b) \\dfrac{3\\pi}{2}",
          "explanation": "Both parts.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Identify the substitution",
          "workingLatex": "\\text{Look for a function and its derivative}",
          "explanation": "Integration by substitution reverses the chain rule — find $u=g(x)$ where $g'(x)$ appears as a factor.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Write du in terms of dx",
          "workingLatex": "du = g'(x)\\,dx",
          "explanation": "Differentiate $u$ and rearrange to replace the $x$-terms.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Change limits for definite integrals",
          "workingLatex": "u \\text{-limits from } x\\text{-limits}",
          "explanation": "When evaluating a definite integral, always convert the limits to avoid back-substitution.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\displaystyle\\int_{0}^{a} \\dfrac{1}{\\sqrt{a^{2}-x^{2}}}\\,dx = \\dfrac{\\pi a}{2}$. (b) $\\dfrac{3\\pi}{2}$."
    }
  }
];
