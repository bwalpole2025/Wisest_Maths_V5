import { Question } from "@/lib/types";

/**
 * A-Level Maths · Year 2 Pure · Integration with partial fractions
 * Decompose rational functions and integrate: distinct and repeated linear factors,
 * improper fractions, definite integrals and areas. 70 questions.
 */
export const questions: Question[] = 
[
  {
    "id": "al.y2.pure.integration-partial-fractions.q001",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "partial fractions",
      "integration",
      "given decomposition",
      "indefinite integral"
    ],
    "questionText": "Given that the integrand can be written as $\\dfrac{2}{(x-1)} + \\dfrac{3}{(x+2)}$, find $\\displaystyle\\int \\left(\\dfrac{2}{(x-1)} + \\dfrac{3}{(x+2)}\\right)\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the standard integral",
          "workingLatex": "\\int \\dfrac{1}{x-p}\\,dx = \\ln|x-p| + c",
          "explanation": "Each partial fraction has the form $\\dfrac{\\text{constant}}{x-p}$, which integrates to a logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate term by term",
          "workingLatex": "\\int \\left(\\dfrac{2}{(x-1)} + \\dfrac{3}{(x+2)}\\right)\\,dx",
          "explanation": "Integration is linear, so we integrate each partial fraction separately.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate the \\dfrac{2}{(x-1)} term",
          "workingLatex": "\\int \\dfrac{2}{(x-1)}\\,dx = 2\\ln|x-1|",
          "explanation": "The constant 2 stays in front; only the denominator affects the logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate the \\dfrac{3}{(x+2)} term",
          "workingLatex": "\\int \\dfrac{3}{(x+2)}\\,dx = 3\\ln|x+2|",
          "explanation": "The constant 3 stays in front; only the denominator affects the logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Combine and add $+c$",
          "workingLatex": "2\\ln|x-1| + 3\\ln|x+2| + c",
          "explanation": "Collect the logarithmic terms and include the constant of integration.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check by differentiating",
          "workingLatex": "\\frac{d}{dx}\\left(2\\ln|x-1| + 3\\ln|x+2|\\right)",
          "explanation": "Differentiating each $\\ln$ term gives back the corresponding partial fraction.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\left(\\dfrac{2}{(x-1)} + \\dfrac{3}{(x+2)}\\right)\\,dx = 2\\ln|x-1| + 3\\ln|x+2| + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-partial-fractions.q002",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "partial fractions",
      "integration",
      "given decomposition",
      "indefinite integral"
    ],
    "questionText": "Given that the integrand can be written as $\\dfrac{1}{(x-3)} - \\dfrac{1}{(x+1)}$, find $\\displaystyle\\int \\left(\\dfrac{1}{(x-3)} - \\dfrac{1}{(x+1)}\\right)\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the standard integral",
          "workingLatex": "\\int \\dfrac{1}{x-p}\\,dx = \\ln|x-p| + c",
          "explanation": "Each partial fraction has the form $\\dfrac{\\text{constant}}{x-p}$, which integrates to a logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate term by term",
          "workingLatex": "\\int \\left(\\dfrac{1}{(x-3)} - \\dfrac{1}{(x+1)}\\right)\\,dx",
          "explanation": "Integration is linear, so we integrate each partial fraction separately.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate the \\dfrac{1}{(x-3)} term",
          "workingLatex": "\\int \\dfrac{1}{(x-3)}\\,dx = 1\\ln|x-3|",
          "explanation": "The constant 1 stays in front; only the denominator affects the logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate the -\\dfrac{1}{(x+1)} term",
          "workingLatex": "\\int -\\dfrac{1}{(x+1)}\\,dx = (-1)\\ln|x+1|",
          "explanation": "The constant (-1) stays in front; only the denominator affects the logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Combine and add $+c$",
          "workingLatex": "1\\ln|x-3| + (-1)\\ln|x+1| + c",
          "explanation": "Collect the logarithmic terms and include the constant of integration.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check by differentiating",
          "workingLatex": "\\frac{d}{dx}\\left(1\\ln|x-3| + (-1)\\ln|x+1|\\right)",
          "explanation": "Differentiating each $\\ln$ term gives back the corresponding partial fraction.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\left(\\dfrac{1}{(x-3)} - \\dfrac{1}{(x+1)}\\right)\\,dx = 1\\ln|x-3| + (-1)\\ln|x+1| + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-partial-fractions.q003",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "partial fractions",
      "integration",
      "given decomposition",
      "indefinite integral"
    ],
    "questionText": "Given that the integrand can be written as $\\dfrac{4}{(x+3)}$, find $\\displaystyle\\int \\left(\\dfrac{4}{(x+3)}\\right)\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the standard integral",
          "workingLatex": "\\int \\dfrac{1}{x-p}\\,dx = \\ln|x-p| + c",
          "explanation": "Each partial fraction has the form $\\dfrac{\\text{constant}}{x-p}$, which integrates to a logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate term by term",
          "workingLatex": "\\int \\left(\\dfrac{4}{(x+3)}\\right)\\,dx",
          "explanation": "Integration is linear, so we integrate each partial fraction separately.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate the \\dfrac{4}{(x+3)} term",
          "workingLatex": "\\int \\dfrac{4}{(x+3)}\\,dx = 4\\ln|x+3|",
          "explanation": "The constant 4 stays in front; only the denominator affects the logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Combine and add $+c$",
          "workingLatex": "4\\ln|x+3| + c",
          "explanation": "Collect the logarithmic terms and include the constant of integration.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check by differentiating",
          "workingLatex": "\\frac{d}{dx}\\left(4\\ln|x+3|\\right)",
          "explanation": "Differentiating each $\\ln$ term gives back the corresponding partial fraction.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "4\\ln|x+3| + c",
          "explanation": "This is the required indefinite integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\left(\\dfrac{4}{(x+3)}\\right)\\,dx = 4\\ln|x+3| + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-partial-fractions.q004",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "partial fractions",
      "integration",
      "given decomposition",
      "indefinite integral"
    ],
    "questionText": "Given that the integrand can be written as $\\dfrac{1}{(x-2)} + \\dfrac{1}{(x+2)}$, find $\\displaystyle\\int \\left(\\dfrac{1}{(x-2)} + \\dfrac{1}{(x+2)}\\right)\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the standard integral",
          "workingLatex": "\\int \\dfrac{1}{x-p}\\,dx = \\ln|x-p| + c",
          "explanation": "Each partial fraction has the form $\\dfrac{\\text{constant}}{x-p}$, which integrates to a logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate term by term",
          "workingLatex": "\\int \\left(\\dfrac{1}{(x-2)} + \\dfrac{1}{(x+2)}\\right)\\,dx",
          "explanation": "Integration is linear, so we integrate each partial fraction separately.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate the \\dfrac{1}{(x-2)} term",
          "workingLatex": "\\int \\dfrac{1}{(x-2)}\\,dx = 1\\ln|x-2|",
          "explanation": "The constant 1 stays in front; only the denominator affects the logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate the \\dfrac{1}{(x+2)} term",
          "workingLatex": "\\int \\dfrac{1}{(x+2)}\\,dx = 1\\ln|x+2|",
          "explanation": "The constant 1 stays in front; only the denominator affects the logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Combine and add $+c$",
          "workingLatex": "1\\ln|x-2| + 1\\ln|x+2| + c",
          "explanation": "Collect the logarithmic terms and include the constant of integration.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check by differentiating",
          "workingLatex": "\\frac{d}{dx}\\left(1\\ln|x-2| + 1\\ln|x+2|\\right)",
          "explanation": "Differentiating each $\\ln$ term gives back the corresponding partial fraction.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\left(\\dfrac{1}{(x-2)} + \\dfrac{1}{(x+2)}\\right)\\,dx = 1\\ln|x-2| + 1\\ln|x+2| + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-partial-fractions.q005",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "partial fractions",
      "integration",
      "given decomposition",
      "indefinite integral"
    ],
    "questionText": "Given that the integrand can be written as $\\dfrac{-2}{(x-1)} + \\dfrac{5}{(x+4)}$, find $\\displaystyle\\int \\left(\\dfrac{-2}{(x-1)} + \\dfrac{5}{(x+4)}\\right)\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the standard integral",
          "workingLatex": "\\int \\dfrac{1}{x-p}\\,dx = \\ln|x-p| + c",
          "explanation": "Each partial fraction has the form $\\dfrac{\\text{constant}}{x-p}$, which integrates to a logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate term by term",
          "workingLatex": "\\int \\left(\\dfrac{-2}{(x-1)} + \\dfrac{5}{(x+4)}\\right)\\,dx",
          "explanation": "Integration is linear, so we integrate each partial fraction separately.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate the \\dfrac{-2}{(x-1)} term",
          "workingLatex": "\\int \\dfrac{-2}{(x-1)}\\,dx = (-2)\\ln|x-1|",
          "explanation": "The constant (-2) stays in front; only the denominator affects the logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate the \\dfrac{5}{(x+4)} term",
          "workingLatex": "\\int \\dfrac{5}{(x+4)}\\,dx = 5\\ln|x+4|",
          "explanation": "The constant 5 stays in front; only the denominator affects the logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Combine and add $+c$",
          "workingLatex": "(-2)\\ln|x-1| + 5\\ln|x+4| + c",
          "explanation": "Collect the logarithmic terms and include the constant of integration.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check by differentiating",
          "workingLatex": "\\frac{d}{dx}\\left((-2)\\ln|x-1| + 5\\ln|x+4|\\right)",
          "explanation": "Differentiating each $\\ln$ term gives back the corresponding partial fraction.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\left(\\dfrac{-2}{(x-1)} + \\dfrac{5}{(x+4)}\\right)\\,dx = (-2)\\ln|x-1| + 5\\ln|x+4| + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-partial-fractions.q006",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "partial fractions",
      "integration",
      "given decomposition",
      "indefinite integral"
    ],
    "questionText": "Given that the integrand can be written as $\\dfrac{3}{x} + \\dfrac{1}{(x-5)}$, find $\\displaystyle\\int \\left(\\dfrac{3}{x} + \\dfrac{1}{(x-5)}\\right)\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the standard integral",
          "workingLatex": "\\int \\dfrac{1}{x-p}\\,dx = \\ln|x-p| + c",
          "explanation": "Each partial fraction has the form $\\dfrac{\\text{constant}}{x-p}$, which integrates to a logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate term by term",
          "workingLatex": "\\int \\left(\\dfrac{3}{x} + \\dfrac{1}{(x-5)}\\right)\\,dx",
          "explanation": "Integration is linear, so we integrate each partial fraction separately.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate the \\dfrac{3}{x} term",
          "workingLatex": "\\int \\dfrac{3}{x}\\,dx = 3\\ln|x+0|",
          "explanation": "The constant 3 stays in front; only the denominator affects the logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate the \\dfrac{1}{(x-5)} term",
          "workingLatex": "\\int \\dfrac{1}{(x-5)}\\,dx = 1\\ln|x-5|",
          "explanation": "The constant 1 stays in front; only the denominator affects the logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Combine and add $+c$",
          "workingLatex": "3\\ln|x+0| + 1\\ln|x-5| + c",
          "explanation": "Collect the logarithmic terms and include the constant of integration.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check by differentiating",
          "workingLatex": "\\frac{d}{dx}\\left(3\\ln|x+0| + 1\\ln|x-5|\\right)",
          "explanation": "Differentiating each $\\ln$ term gives back the corresponding partial fraction.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\left(\\dfrac{3}{x} + \\dfrac{1}{(x-5)}\\right)\\,dx = 3\\ln|x+0| + 1\\ln|x-5| + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-partial-fractions.q007",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "partial fractions",
      "integration",
      "given decomposition",
      "indefinite integral"
    ],
    "questionText": "Given that the integrand can be written as $\\dfrac{1}{(x+1)} + \\dfrac{-3}{(x-2)}$, find $\\displaystyle\\int \\left(\\dfrac{1}{(x+1)} + \\dfrac{-3}{(x-2)}\\right)\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the standard integral",
          "workingLatex": "\\int \\dfrac{1}{x-p}\\,dx = \\ln|x-p| + c",
          "explanation": "Each partial fraction has the form $\\dfrac{\\text{constant}}{x-p}$, which integrates to a logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate term by term",
          "workingLatex": "\\int \\left(\\dfrac{1}{(x+1)} + \\dfrac{-3}{(x-2)}\\right)\\,dx",
          "explanation": "Integration is linear, so we integrate each partial fraction separately.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate the \\dfrac{1}{(x+1)} term",
          "workingLatex": "\\int \\dfrac{1}{(x+1)}\\,dx = 1\\ln|x+1|",
          "explanation": "The constant 1 stays in front; only the denominator affects the logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate the \\dfrac{-3}{(x-2)} term",
          "workingLatex": "\\int \\dfrac{-3}{(x-2)}\\,dx = (-3)\\ln|x-2|",
          "explanation": "The constant (-3) stays in front; only the denominator affects the logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Combine and add $+c$",
          "workingLatex": "1\\ln|x+1| + (-3)\\ln|x-2| + c",
          "explanation": "Collect the logarithmic terms and include the constant of integration.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check by differentiating",
          "workingLatex": "\\frac{d}{dx}\\left(1\\ln|x+1| + (-3)\\ln|x-2|\\right)",
          "explanation": "Differentiating each $\\ln$ term gives back the corresponding partial fraction.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\left(\\dfrac{1}{(x+1)} + \\dfrac{-3}{(x-2)}\\right)\\,dx = 1\\ln|x+1| + (-3)\\ln|x-2| + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-partial-fractions.q008",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "partial fractions",
      "integration",
      "given decomposition",
      "indefinite integral"
    ],
    "questionText": "Given that the integrand can be written as $\\dfrac{2}{(x-4)}$, find $\\displaystyle\\int \\left(\\dfrac{2}{(x-4)}\\right)\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the standard integral",
          "workingLatex": "\\int \\dfrac{1}{x-p}\\,dx = \\ln|x-p| + c",
          "explanation": "Each partial fraction has the form $\\dfrac{\\text{constant}}{x-p}$, which integrates to a logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate term by term",
          "workingLatex": "\\int \\left(\\dfrac{2}{(x-4)}\\right)\\,dx",
          "explanation": "Integration is linear, so we integrate each partial fraction separately.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate the \\dfrac{2}{(x-4)} term",
          "workingLatex": "\\int \\dfrac{2}{(x-4)}\\,dx = 2\\ln|x-4|",
          "explanation": "The constant 2 stays in front; only the denominator affects the logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Combine and add $+c$",
          "workingLatex": "2\\ln|x-4| + c",
          "explanation": "Collect the logarithmic terms and include the constant of integration.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check by differentiating",
          "workingLatex": "\\frac{d}{dx}\\left(2\\ln|x-4|\\right)",
          "explanation": "Differentiating each $\\ln$ term gives back the corresponding partial fraction.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "2\\ln|x-4| + c",
          "explanation": "This is the required indefinite integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\left(\\dfrac{2}{(x-4)}\\right)\\,dx = 2\\ln|x-4| + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-partial-fractions.q009",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "partial fractions",
      "integration",
      "given decomposition",
      "indefinite integral"
    ],
    "questionText": "Given that the integrand can be written as $\\dfrac{1}{(x-1)} + \\dfrac{2}{(x-3)} - \\dfrac{1}{(x+2)}$, find $\\displaystyle\\int \\left(\\dfrac{1}{(x-1)} + \\dfrac{2}{(x-3)} - \\dfrac{1}{(x+2)}\\right)\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the standard integral",
          "workingLatex": "\\int \\dfrac{1}{x-p}\\,dx = \\ln|x-p| + c",
          "explanation": "Each partial fraction has the form $\\dfrac{\\text{constant}}{x-p}$, which integrates to a logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate term by term",
          "workingLatex": "\\int \\left(\\dfrac{1}{(x-1)} + \\dfrac{2}{(x-3)} - \\dfrac{1}{(x+2)}\\right)\\,dx",
          "explanation": "Integration is linear, so we integrate each partial fraction separately.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate the \\dfrac{1}{(x-1)} term",
          "workingLatex": "\\int \\dfrac{1}{(x-1)}\\,dx = 1\\ln|x-1|",
          "explanation": "The constant 1 stays in front; only the denominator affects the logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate the \\dfrac{2}{(x-3)} term",
          "workingLatex": "\\int \\dfrac{2}{(x-3)}\\,dx = 2\\ln|x-3|",
          "explanation": "The constant 2 stays in front; only the denominator affects the logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate the -\\dfrac{1}{(x+2)} term",
          "workingLatex": "\\int -\\dfrac{1}{(x+2)}\\,dx = (-1)\\ln|x+2|",
          "explanation": "The constant (-1) stays in front; only the denominator affects the logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine and add $+c$",
          "workingLatex": "1\\ln|x-1| + 2\\ln|x-3| + (-1)\\ln|x+2| + c",
          "explanation": "Collect the logarithmic terms and include the constant of integration.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\left(\\dfrac{1}{(x-1)} + \\dfrac{2}{(x-3)} - \\dfrac{1}{(x+2)}\\right)\\,dx = 1\\ln|x-1| + 2\\ln|x-3| + (-1)\\ln|x+2| + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-partial-fractions.q010",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "partial fractions",
      "integration",
      "given decomposition",
      "indefinite integral"
    ],
    "questionText": "Given that the integrand can be written as $-\\dfrac{1}{(x-2)} + \\dfrac{4}{(x+1)}$, find $\\displaystyle\\int \\left(-\\dfrac{1}{(x-2)} + \\dfrac{4}{(x+1)}\\right)\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the standard integral",
          "workingLatex": "\\int \\dfrac{1}{x-p}\\,dx = \\ln|x-p| + c",
          "explanation": "Each partial fraction has the form $\\dfrac{\\text{constant}}{x-p}$, which integrates to a logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate term by term",
          "workingLatex": "\\int \\left(-\\dfrac{1}{(x-2)} + \\dfrac{4}{(x+1)}\\right)\\,dx",
          "explanation": "Integration is linear, so we integrate each partial fraction separately.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate the -\\dfrac{1}{(x-2)} term",
          "workingLatex": "\\int -\\dfrac{1}{(x-2)}\\,dx = (-1)\\ln|x-2|",
          "explanation": "The constant (-1) stays in front; only the denominator affects the logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate the \\dfrac{4}{(x+1)} term",
          "workingLatex": "\\int \\dfrac{4}{(x+1)}\\,dx = 4\\ln|x+1|",
          "explanation": "The constant 4 stays in front; only the denominator affects the logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Combine and add $+c$",
          "workingLatex": "(-1)\\ln|x-2| + 4\\ln|x+1| + c",
          "explanation": "Collect the logarithmic terms and include the constant of integration.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check by differentiating",
          "workingLatex": "\\frac{d}{dx}\\left((-1)\\ln|x-2| + 4\\ln|x+1|\\right)",
          "explanation": "Differentiating each $\\ln$ term gives back the corresponding partial fraction.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\left(-\\dfrac{1}{(x-2)} + \\dfrac{4}{(x+1)}\\right)\\,dx = (-1)\\ln|x-2| + 4\\ln|x+1| + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-partial-fractions.q011",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "partial fractions",
      "integration",
      "given decomposition",
      "indefinite integral"
    ],
    "questionText": "Given that the integrand can be written as $\\dfrac{5}{(x+2)}$, find $\\displaystyle\\int \\left(\\dfrac{5}{(x+2)}\\right)\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the standard integral",
          "workingLatex": "\\int \\dfrac{1}{x-p}\\,dx = \\ln|x-p| + c",
          "explanation": "Each partial fraction has the form $\\dfrac{\\text{constant}}{x-p}$, which integrates to a logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate term by term",
          "workingLatex": "\\int \\left(\\dfrac{5}{(x+2)}\\right)\\,dx",
          "explanation": "Integration is linear, so we integrate each partial fraction separately.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate the \\dfrac{5}{(x+2)} term",
          "workingLatex": "\\int \\dfrac{5}{(x+2)}\\,dx = 5\\ln|x+2|",
          "explanation": "The constant 5 stays in front; only the denominator affects the logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Combine and add $+c$",
          "workingLatex": "5\\ln|x+2| + c",
          "explanation": "Collect the logarithmic terms and include the constant of integration.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check by differentiating",
          "workingLatex": "\\frac{d}{dx}\\left(5\\ln|x+2|\\right)",
          "explanation": "Differentiating each $\\ln$ term gives back the corresponding partial fraction.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "5\\ln|x+2| + c",
          "explanation": "This is the required indefinite integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\left(\\dfrac{5}{(x+2)}\\right)\\,dx = 5\\ln|x+2| + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-partial-fractions.q012",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "partial fractions",
      "integration",
      "given decomposition",
      "indefinite integral"
    ],
    "questionText": "Given that the integrand can be written as $\\dfrac{1}{x} + \\dfrac{1}{(x+3)}$, find $\\displaystyle\\int \\left(\\dfrac{1}{x} + \\dfrac{1}{(x+3)}\\right)\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the standard integral",
          "workingLatex": "\\int \\dfrac{1}{x-p}\\,dx = \\ln|x-p| + c",
          "explanation": "Each partial fraction has the form $\\dfrac{\\text{constant}}{x-p}$, which integrates to a logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate term by term",
          "workingLatex": "\\int \\left(\\dfrac{1}{x} + \\dfrac{1}{(x+3)}\\right)\\,dx",
          "explanation": "Integration is linear, so we integrate each partial fraction separately.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate the \\dfrac{1}{x} term",
          "workingLatex": "\\int \\dfrac{1}{x}\\,dx = 1\\ln|x+0|",
          "explanation": "The constant 1 stays in front; only the denominator affects the logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate the \\dfrac{1}{(x+3)} term",
          "workingLatex": "\\int \\dfrac{1}{(x+3)}\\,dx = 1\\ln|x+3|",
          "explanation": "The constant 1 stays in front; only the denominator affects the logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Combine and add $+c$",
          "workingLatex": "1\\ln|x+0| + 1\\ln|x+3| + c",
          "explanation": "Collect the logarithmic terms and include the constant of integration.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check by differentiating",
          "workingLatex": "\\frac{d}{dx}\\left(1\\ln|x+0| + 1\\ln|x+3|\\right)",
          "explanation": "Differentiating each $\\ln$ term gives back the corresponding partial fraction.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\left(\\dfrac{1}{x} + \\dfrac{1}{(x+3)}\\right)\\,dx = 1\\ln|x+0| + 1\\ln|x+3| + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-partial-fractions.q013",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "partial fractions",
      "integration",
      "given decomposition",
      "indefinite integral"
    ],
    "questionText": "Given that the integrand can be written as $\\dfrac{2}{(x+1)} - \\dfrac{1}{(x-4)}$, find $\\displaystyle\\int \\left(\\dfrac{2}{(x+1)} - \\dfrac{1}{(x-4)}\\right)\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the standard integral",
          "workingLatex": "\\int \\dfrac{1}{x-p}\\,dx = \\ln|x-p| + c",
          "explanation": "Each partial fraction has the form $\\dfrac{\\text{constant}}{x-p}$, which integrates to a logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate term by term",
          "workingLatex": "\\int \\left(\\dfrac{2}{(x+1)} - \\dfrac{1}{(x-4)}\\right)\\,dx",
          "explanation": "Integration is linear, so we integrate each partial fraction separately.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate the \\dfrac{2}{(x+1)} term",
          "workingLatex": "\\int \\dfrac{2}{(x+1)}\\,dx = 2\\ln|x+1|",
          "explanation": "The constant 2 stays in front; only the denominator affects the logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate the -\\dfrac{1}{(x-4)} term",
          "workingLatex": "\\int -\\dfrac{1}{(x-4)}\\,dx = (-1)\\ln|x-4|",
          "explanation": "The constant (-1) stays in front; only the denominator affects the logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Combine and add $+c$",
          "workingLatex": "2\\ln|x+1| + (-1)\\ln|x-4| + c",
          "explanation": "Collect the logarithmic terms and include the constant of integration.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check by differentiating",
          "workingLatex": "\\frac{d}{dx}\\left(2\\ln|x+1| + (-1)\\ln|x-4|\\right)",
          "explanation": "Differentiating each $\\ln$ term gives back the corresponding partial fraction.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\left(\\dfrac{2}{(x+1)} - \\dfrac{1}{(x-4)}\\right)\\,dx = 2\\ln|x+1| + (-1)\\ln|x-4| + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-partial-fractions.q014",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "partial fractions",
      "integration",
      "given decomposition",
      "indefinite integral"
    ],
    "questionText": "Given that the integrand can be written as $\\dfrac{3}{(x-2)} + \\dfrac{1}{(x+5)}$, find $\\displaystyle\\int \\left(\\dfrac{3}{(x-2)} + \\dfrac{1}{(x+5)}\\right)\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the standard integral",
          "workingLatex": "\\int \\dfrac{1}{x-p}\\,dx = \\ln|x-p| + c",
          "explanation": "Each partial fraction has the form $\\dfrac{\\text{constant}}{x-p}$, which integrates to a logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate term by term",
          "workingLatex": "\\int \\left(\\dfrac{3}{(x-2)} + \\dfrac{1}{(x+5)}\\right)\\,dx",
          "explanation": "Integration is linear, so we integrate each partial fraction separately.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate the \\dfrac{3}{(x-2)} term",
          "workingLatex": "\\int \\dfrac{3}{(x-2)}\\,dx = 3\\ln|x-2|",
          "explanation": "The constant 3 stays in front; only the denominator affects the logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate the \\dfrac{1}{(x+5)} term",
          "workingLatex": "\\int \\dfrac{1}{(x+5)}\\,dx = 1\\ln|x+5|",
          "explanation": "The constant 1 stays in front; only the denominator affects the logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Combine and add $+c$",
          "workingLatex": "3\\ln|x-2| + 1\\ln|x+5| + c",
          "explanation": "Collect the logarithmic terms and include the constant of integration.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check by differentiating",
          "workingLatex": "\\frac{d}{dx}\\left(3\\ln|x-2| + 1\\ln|x+5|\\right)",
          "explanation": "Differentiating each $\\ln$ term gives back the corresponding partial fraction.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\left(\\dfrac{3}{(x-2)} + \\dfrac{1}{(x+5)}\\right)\\,dx = 3\\ln|x-2| + 1\\ln|x+5| + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-partial-fractions.q015",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "partial fractions",
      "integration",
      "given decomposition",
      "indefinite integral"
    ],
    "questionText": "Given that the integrand can be written as $\\dfrac{-2}{(x+3)}$, find $\\displaystyle\\int \\left(\\dfrac{-2}{(x+3)}\\right)\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the standard integral",
          "workingLatex": "\\int \\dfrac{1}{x-p}\\,dx = \\ln|x-p| + c",
          "explanation": "Each partial fraction has the form $\\dfrac{\\text{constant}}{x-p}$, which integrates to a logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate term by term",
          "workingLatex": "\\int \\left(\\dfrac{-2}{(x+3)}\\right)\\,dx",
          "explanation": "Integration is linear, so we integrate each partial fraction separately.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate the \\dfrac{-2}{(x+3)} term",
          "workingLatex": "\\int \\dfrac{-2}{(x+3)}\\,dx = (-2)\\ln|x+3|",
          "explanation": "The constant (-2) stays in front; only the denominator affects the logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Combine and add $+c$",
          "workingLatex": "(-2)\\ln|x+3| + c",
          "explanation": "Collect the logarithmic terms and include the constant of integration.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check by differentiating",
          "workingLatex": "\\frac{d}{dx}\\left((-2)\\ln|x+3|\\right)",
          "explanation": "Differentiating each $\\ln$ term gives back the corresponding partial fraction.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "(-2)\\ln|x+3| + c",
          "explanation": "This is the required indefinite integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\left(\\dfrac{-2}{(x+3)}\\right)\\,dx = (-2)\\ln|x+3| + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-partial-fractions.q016",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "partial fractions",
      "integration",
      "given decomposition",
      "indefinite integral"
    ],
    "questionText": "Given that the integrand can be written as $\\dfrac{1}{(x-6)} + \\dfrac{1}{(x+6)}$, find $\\displaystyle\\int \\left(\\dfrac{1}{(x-6)} + \\dfrac{1}{(x+6)}\\right)\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the standard integral",
          "workingLatex": "\\int \\dfrac{1}{x-p}\\,dx = \\ln|x-p| + c",
          "explanation": "Each partial fraction has the form $\\dfrac{\\text{constant}}{x-p}$, which integrates to a logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate term by term",
          "workingLatex": "\\int \\left(\\dfrac{1}{(x-6)} + \\dfrac{1}{(x+6)}\\right)\\,dx",
          "explanation": "Integration is linear, so we integrate each partial fraction separately.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate the \\dfrac{1}{(x-6)} term",
          "workingLatex": "\\int \\dfrac{1}{(x-6)}\\,dx = 1\\ln|x-6|",
          "explanation": "The constant 1 stays in front; only the denominator affects the logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate the \\dfrac{1}{(x+6)} term",
          "workingLatex": "\\int \\dfrac{1}{(x+6)}\\,dx = 1\\ln|x+6|",
          "explanation": "The constant 1 stays in front; only the denominator affects the logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Combine and add $+c$",
          "workingLatex": "1\\ln|x-6| + 1\\ln|x+6| + c",
          "explanation": "Collect the logarithmic terms and include the constant of integration.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check by differentiating",
          "workingLatex": "\\frac{d}{dx}\\left(1\\ln|x-6| + 1\\ln|x+6|\\right)",
          "explanation": "Differentiating each $\\ln$ term gives back the corresponding partial fraction.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\left(\\dfrac{1}{(x-6)} + \\dfrac{1}{(x+6)}\\right)\\,dx = 1\\ln|x-6| + 1\\ln|x+6| + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-partial-fractions.q017",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "partial fractions",
      "integration",
      "given decomposition",
      "indefinite integral"
    ],
    "questionText": "Given that the integrand can be written as $\\dfrac{4}{(x-1)} + \\dfrac{-2}{(x+1)}$, find $\\displaystyle\\int \\left(\\dfrac{4}{(x-1)} + \\dfrac{-2}{(x+1)}\\right)\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the standard integral",
          "workingLatex": "\\int \\dfrac{1}{x-p}\\,dx = \\ln|x-p| + c",
          "explanation": "Each partial fraction has the form $\\dfrac{\\text{constant}}{x-p}$, which integrates to a logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate term by term",
          "workingLatex": "\\int \\left(\\dfrac{4}{(x-1)} + \\dfrac{-2}{(x+1)}\\right)\\,dx",
          "explanation": "Integration is linear, so we integrate each partial fraction separately.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate the \\dfrac{4}{(x-1)} term",
          "workingLatex": "\\int \\dfrac{4}{(x-1)}\\,dx = 4\\ln|x-1|",
          "explanation": "The constant 4 stays in front; only the denominator affects the logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate the \\dfrac{-2}{(x+1)} term",
          "workingLatex": "\\int \\dfrac{-2}{(x+1)}\\,dx = (-2)\\ln|x+1|",
          "explanation": "The constant (-2) stays in front; only the denominator affects the logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Combine and add $+c$",
          "workingLatex": "4\\ln|x-1| + (-2)\\ln|x+1| + c",
          "explanation": "Collect the logarithmic terms and include the constant of integration.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check by differentiating",
          "workingLatex": "\\frac{d}{dx}\\left(4\\ln|x-1| + (-2)\\ln|x+1|\\right)",
          "explanation": "Differentiating each $\\ln$ term gives back the corresponding partial fraction.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\left(\\dfrac{4}{(x-1)} + \\dfrac{-2}{(x+1)}\\right)\\,dx = 4\\ln|x-1| + (-2)\\ln|x+1| + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-partial-fractions.q018",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "partial fractions",
      "integration",
      "given decomposition",
      "indefinite integral"
    ],
    "questionText": "Given that the integrand can be written as $\\dfrac{1}{(x-2)} - \\dfrac{1}{(x-2)}$, find $\\displaystyle\\int \\left(\\dfrac{1}{(x-2)} - \\dfrac{1}{(x-2)}\\right)\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the standard integral",
          "workingLatex": "\\int \\dfrac{1}{x-p}\\,dx = \\ln|x-p| + c",
          "explanation": "Each partial fraction has the form $\\dfrac{\\text{constant}}{x-p}$, which integrates to a logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate term by term",
          "workingLatex": "\\int \\left(\\dfrac{1}{(x-2)} - \\dfrac{1}{(x-2)}\\right)\\,dx",
          "explanation": "Integration is linear, so we integrate each partial fraction separately.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate the \\dfrac{1}{(x-2)} term",
          "workingLatex": "\\int \\dfrac{1}{(x-2)}\\,dx = 1\\ln|x-2|",
          "explanation": "The constant 1 stays in front; only the denominator affects the logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate the -\\dfrac{1}{(x-2)} term",
          "workingLatex": "\\int -\\dfrac{1}{(x-2)}\\,dx = (-1)\\ln|x-2|",
          "explanation": "The constant (-1) stays in front; only the denominator affects the logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Combine and add $+c$",
          "workingLatex": "1\\ln|x-2| + (-1)\\ln|x-2| + c",
          "explanation": "Collect the logarithmic terms and include the constant of integration.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check by differentiating",
          "workingLatex": "\\frac{d}{dx}\\left(1\\ln|x-2| + (-1)\\ln|x-2|\\right)",
          "explanation": "Differentiating each $\\ln$ term gives back the corresponding partial fraction.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\left(\\dfrac{1}{(x-2)} - \\dfrac{1}{(x-2)}\\right)\\,dx = 1\\ln|x-2| + (-1)\\ln|x-2| + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-partial-fractions.q019",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "partial fractions",
      "distinct linear factors",
      "cover-up method",
      "integration"
    ],
    "questionText": "Find $\\displaystyle\\int \\dfrac{3x+5}{(x-1)(x+2)}\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up partial fractions",
          "workingLatex": "\\dfrac{3x+5}{(x-1)(x+2)} \\equiv \\dfrac{A}{(x-1)} + \\dfrac{B}{(x+2)}",
          "explanation": "Distinct linear factors in the denominator give one unknown fraction per factor.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find $A$ by cover-up",
          "workingLatex": "x = 1 \\Rightarrow 8 = A(3) \\Rightarrow A = \\dfrac{8}{3}",
          "explanation": "Substituting $x = 1$ removes the $B$ term because the factor $(x-1)$ becomes zero.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find $B$ by cover-up",
          "workingLatex": "x = -2 \\Rightarrow -1 = B(-3) \\Rightarrow B = \\dfrac{1}{3}",
          "explanation": "Substituting $x = -2$ isolates $B$ in the same way.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the decomposition",
          "workingLatex": "\\dfrac{8}{3}/(x-1) + \\dfrac{1}{3}/(x+2)",
          "explanation": "The rational function splits into simpler fractions ready to integrate.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate each term",
          "workingLatex": "\\int \\dfrac{8}{3}/(x-1)\\,dx = \\dfrac{8}{3}\\ln|x-1|",
          "explanation": "Each term $\\dfrac{k}{x-p}$ integrates to $k\\ln|x-p|$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Integrate the second term",
          "workingLatex": "\\int \\dfrac{1}{3}/(x+2)\\,dx = \\dfrac{1}{3}\\ln|x+2|",
          "explanation": "Apply the same logarithm rule to the second partial fraction.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Combine and add $+c$",
          "workingLatex": "\\dfrac{8}{3}\\ln|x-1| + \\dfrac{1}{3}\\ln|x+2| + c",
          "explanation": "Add the integrated terms and include the constant of integration.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check by differentiating",
          "workingLatex": "\\frac{d}{dx}\\left(\\dfrac{8}{3}\\ln|x-1| + \\dfrac{1}{3}\\ln|x+2|\\right)",
          "explanation": "Differentiating the answer should recover the original integrand.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\dfrac{3x+5}{(x-1)(x+2)}\\,dx = \\dfrac{8}{3}\\ln|x-1| + \\dfrac{1}{3}\\ln|x+2| + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-partial-fractions.q020",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "partial fractions",
      "distinct linear factors",
      "cover-up method",
      "integration"
    ],
    "questionText": "Find $\\displaystyle\\int \\dfrac{2x+1}{(x+1)(x-3)}\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up partial fractions",
          "workingLatex": "\\dfrac{2x+1}{(x+1)(x-3)} \\equiv \\dfrac{A}{(x+1)} + \\dfrac{B}{(x-3)}",
          "explanation": "Distinct linear factors in the denominator give one unknown fraction per factor.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find $A$ by cover-up",
          "workingLatex": "x = -1 \\Rightarrow -1 = A(-4) \\Rightarrow A = \\dfrac{1}{4}",
          "explanation": "Substituting $x = -1$ removes the $B$ term because the factor $(x--1)$ becomes zero.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find $B$ by cover-up",
          "workingLatex": "x = 3 \\Rightarrow 7 = B(4) \\Rightarrow B = \\dfrac{7}{4}",
          "explanation": "Substituting $x = 3$ isolates $B$ in the same way.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the decomposition",
          "workingLatex": "\\dfrac{1}{4}/(x+1) + \\dfrac{7}{4}/(x-3)",
          "explanation": "The rational function splits into simpler fractions ready to integrate.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate each term",
          "workingLatex": "\\int \\dfrac{1}{4}/(x+1)\\,dx = \\dfrac{1}{4}\\ln|x+1|",
          "explanation": "Each term $\\dfrac{k}{x-p}$ integrates to $k\\ln|x-p|$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Integrate the second term",
          "workingLatex": "\\int \\dfrac{7}{4}/(x-3)\\,dx = \\dfrac{7}{4}\\ln|x-3|",
          "explanation": "Apply the same logarithm rule to the second partial fraction.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Combine and add $+c$",
          "workingLatex": "\\dfrac{1}{4}\\ln|x+1| + \\dfrac{7}{4}\\ln|x-3| + c",
          "explanation": "Add the integrated terms and include the constant of integration.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check by differentiating",
          "workingLatex": "\\frac{d}{dx}\\left(\\dfrac{1}{4}\\ln|x+1| + \\dfrac{7}{4}\\ln|x-3|\\right)",
          "explanation": "Differentiating the answer should recover the original integrand.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\dfrac{2x+1}{(x+1)(x-3)}\\,dx = \\dfrac{1}{4}\\ln|x+1| + \\dfrac{7}{4}\\ln|x-3| + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-partial-fractions.q021",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "partial fractions",
      "distinct linear factors",
      "cover-up method",
      "integration"
    ],
    "questionText": "Find $\\displaystyle\\int \\dfrac{4x-3}{(x-2)(x+1)}\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up partial fractions",
          "workingLatex": "\\dfrac{4x-3}{(x-2)(x+1)} \\equiv \\dfrac{A}{(x-2)} + \\dfrac{B}{(x+1)}",
          "explanation": "Distinct linear factors in the denominator give one unknown fraction per factor.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find $A$ by cover-up",
          "workingLatex": "x = 2 \\Rightarrow 5 = A(3) \\Rightarrow A = \\dfrac{5}{3}",
          "explanation": "Substituting $x = 2$ removes the $B$ term because the factor $(x-2)$ becomes zero.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find $B$ by cover-up",
          "workingLatex": "x = -1 \\Rightarrow -7 = B(-3) \\Rightarrow B = \\dfrac{7}{3}",
          "explanation": "Substituting $x = -1$ isolates $B$ in the same way.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the decomposition",
          "workingLatex": "\\dfrac{5}{3}/(x-2) + \\dfrac{7}{3}/(x+1)",
          "explanation": "The rational function splits into simpler fractions ready to integrate.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate each term",
          "workingLatex": "\\int \\dfrac{5}{3}/(x-2)\\,dx = \\dfrac{5}{3}\\ln|x-2|",
          "explanation": "Each term $\\dfrac{k}{x-p}$ integrates to $k\\ln|x-p|$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Integrate the second term",
          "workingLatex": "\\int \\dfrac{7}{3}/(x+1)\\,dx = \\dfrac{7}{3}\\ln|x+1|",
          "explanation": "Apply the same logarithm rule to the second partial fraction.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Combine and add $+c$",
          "workingLatex": "\\dfrac{5}{3}\\ln|x-2| + \\dfrac{7}{3}\\ln|x+1| + c",
          "explanation": "Add the integrated terms and include the constant of integration.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check by differentiating",
          "workingLatex": "\\frac{d}{dx}\\left(\\dfrac{5}{3}\\ln|x-2| + \\dfrac{7}{3}\\ln|x+1|\\right)",
          "explanation": "Differentiating the answer should recover the original integrand.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\dfrac{4x-3}{(x-2)(x+1)}\\,dx = \\dfrac{5}{3}\\ln|x-2| + \\dfrac{7}{3}\\ln|x+1| + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-partial-fractions.q022",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "partial fractions",
      "distinct linear factors",
      "cover-up method",
      "integration"
    ],
    "questionText": "Find $\\displaystyle\\int \\dfrac{1x+6}{(x+2)(x-4)}\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up partial fractions",
          "workingLatex": "\\dfrac{1x+6}{(x+2)(x-4)} \\equiv \\dfrac{A}{(x+2)} + \\dfrac{B}{(x-4)}",
          "explanation": "Distinct linear factors in the denominator give one unknown fraction per factor.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find $A$ by cover-up",
          "workingLatex": "x = -2 \\Rightarrow 4 = A(-6) \\Rightarrow A = -\\dfrac{2}{3}",
          "explanation": "Substituting $x = -2$ removes the $B$ term because the factor $(x--2)$ becomes zero.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find $B$ by cover-up",
          "workingLatex": "x = 4 \\Rightarrow 10 = B(6) \\Rightarrow B = \\dfrac{5}{3}",
          "explanation": "Substituting $x = 4$ isolates $B$ in the same way.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the decomposition",
          "workingLatex": "-\\dfrac{2}{3}/(x+2) + \\dfrac{5}{3}/(x-4)",
          "explanation": "The rational function splits into simpler fractions ready to integrate.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate each term",
          "workingLatex": "\\int -\\dfrac{2}{3}/(x+2)\\,dx = -\\dfrac{2}{3}\\ln|x+2|",
          "explanation": "Each term $\\dfrac{k}{x-p}$ integrates to $k\\ln|x-p|$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Integrate the second term",
          "workingLatex": "\\int \\dfrac{5}{3}/(x-4)\\,dx = \\dfrac{5}{3}\\ln|x-4|",
          "explanation": "Apply the same logarithm rule to the second partial fraction.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Combine and add $+c$",
          "workingLatex": "-\\dfrac{2}{3}\\ln|x+2| + \\dfrac{5}{3}\\ln|x-4| + c",
          "explanation": "Add the integrated terms and include the constant of integration.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check by differentiating",
          "workingLatex": "\\frac{d}{dx}\\left(-\\dfrac{2}{3}\\ln|x+2| + \\dfrac{5}{3}\\ln|x-4|\\right)",
          "explanation": "Differentiating the answer should recover the original integrand.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\dfrac{1x+6}{(x+2)(x-4)}\\,dx = -\\dfrac{2}{3}\\ln|x+2| + \\dfrac{5}{3}\\ln|x-4| + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-partial-fractions.q023",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "partial fractions",
      "factorising denominator",
      "integration"
    ],
    "questionText": "Find $\\displaystyle\\int \\dfrac{2x+7}{x^2-x-6}\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factorise the denominator",
          "workingLatex": "x^2-x-6 = (x-3)(x+2)",
          "explanation": "Before splitting into partial fractions, the denominator must be written as a product of linear factors.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up partial fractions",
          "workingLatex": "\\dfrac{2x+7}{(x-3)(x+2)} \\equiv \\dfrac{A}{(x-3)} + \\dfrac{B}{(x+2)}",
          "explanation": "Each distinct linear factor gets its own term in the decomposition.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find $A$ using cover-up",
          "workingLatex": "x = 3 \\Rightarrow A = \\dfrac{13}{5}",
          "explanation": "Substituting the root $x = 3$ eliminates the $B$ term.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find $B$ using cover-up",
          "workingLatex": "x = -2 \\Rightarrow B = -\\dfrac{3}{5}",
          "explanation": "Substituting $x = -2$ gives $B$ directly.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the partial fractions",
          "workingLatex": "\\dfrac{13}{5}/(x-3) - \\dfrac{3}{5}/(x+2)",
          "explanation": "The integrand is now a sum of simple rational terms.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Integrate the first term",
          "workingLatex": "\\int \\dfrac{13}{5}/(x-3)\\,dx = \\dfrac{13}{5}\\ln|x-3|",
          "explanation": "Use $\\int \\dfrac{1}{x-p}\\,dx = \\ln|x-p| + c$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Integrate the second term",
          "workingLatex": "\\int -\\dfrac{3}{5}/(x+2)\\,dx = -\\dfrac{3}{5}\\ln|x+2|",
          "explanation": "The second term integrates in the same way.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Combine the result",
          "workingLatex": "\\dfrac{13}{5}\\ln|x-3| + -\\dfrac{3}{5}\\ln|x+2| + c",
          "explanation": "Add the logarithmic terms and include $+c$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify",
          "workingLatex": "\\frac{d}{dx}\\left(\\dfrac{13}{5}\\ln|x-3| + -\\dfrac{3}{5}\\ln|x+2|\\right) = \\dfrac{2x+7}{x^2-x-6}",
          "explanation": "Differentiating confirms the original integrand.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\dfrac{2x+7}{x^2-x-6}\\,dx = \\dfrac{13}{5}\\ln|x-3| + -\\dfrac{3}{5}\\ln|x+2| + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-partial-fractions.q024",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "partial fractions",
      "factorising denominator",
      "integration"
    ],
    "questionText": "Find $\\displaystyle\\int \\dfrac{3x+1}{x^2-x-6}\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factorise the denominator",
          "workingLatex": "x^2-x-6 = (x-3)(x+2)",
          "explanation": "Before splitting into partial fractions, the denominator must be written as a product of linear factors.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up partial fractions",
          "workingLatex": "\\dfrac{3x+1}{(x-3)(x+2)} \\equiv \\dfrac{A}{(x-3)} + \\dfrac{B}{(x+2)}",
          "explanation": "Each distinct linear factor gets its own term in the decomposition.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find $A$ using cover-up",
          "workingLatex": "x = 3 \\Rightarrow A = 2",
          "explanation": "Substituting the root $x = 3$ eliminates the $B$ term.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find $B$ using cover-up",
          "workingLatex": "x = -2 \\Rightarrow B = 1",
          "explanation": "Substituting $x = -2$ gives $B$ directly.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the partial fractions",
          "workingLatex": "2/(x-3) + 1/(x+2)",
          "explanation": "The integrand is now a sum of simple rational terms.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Integrate the first term",
          "workingLatex": "\\int 2/(x-3)\\,dx = 2\\ln|x-3|",
          "explanation": "Use $\\int \\dfrac{1}{x-p}\\,dx = \\ln|x-p| + c$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Integrate the second term",
          "workingLatex": "\\int 1/(x+2)\\,dx = 1\\ln|x+2|",
          "explanation": "The second term integrates in the same way.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Combine the result",
          "workingLatex": "2\\ln|x-3| + 1\\ln|x+2| + c",
          "explanation": "Add the logarithmic terms and include $+c$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify",
          "workingLatex": "\\frac{d}{dx}\\left(2\\ln|x-3| + 1\\ln|x+2|\\right) = \\dfrac{3x+1}{x^2-x-6}",
          "explanation": "Differentiating confirms the original integrand.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\dfrac{3x+1}{x^2-x-6}\\,dx = 2\\ln|x-3| + 1\\ln|x+2| + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-partial-fractions.q025",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "partial fractions",
      "factorising denominator",
      "integration"
    ],
    "questionText": "Find $\\displaystyle\\int \\dfrac{5x-7}{x^2-x-12}\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factorise the denominator",
          "workingLatex": "x^2-x-12 = (x-4)(x+3)",
          "explanation": "Before splitting into partial fractions, the denominator must be written as a product of linear factors.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up partial fractions",
          "workingLatex": "\\dfrac{5x-7}{(x-4)(x+3)} \\equiv \\dfrac{A}{(x-4)} + \\dfrac{B}{(x+3)}",
          "explanation": "Each distinct linear factor gets its own term in the decomposition.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find $A$ using cover-up",
          "workingLatex": "x = 4 \\Rightarrow A = \\dfrac{13}{7}",
          "explanation": "Substituting the root $x = 4$ eliminates the $B$ term.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find $B$ using cover-up",
          "workingLatex": "x = -3 \\Rightarrow B = \\dfrac{22}{7}",
          "explanation": "Substituting $x = -3$ gives $B$ directly.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the partial fractions",
          "workingLatex": "\\dfrac{13}{7}/(x-4) + \\dfrac{22}{7}/(x+3)",
          "explanation": "The integrand is now a sum of simple rational terms.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Integrate the first term",
          "workingLatex": "\\int \\dfrac{13}{7}/(x-4)\\,dx = \\dfrac{13}{7}\\ln|x-4|",
          "explanation": "Use $\\int \\dfrac{1}{x-p}\\,dx = \\ln|x-p| + c$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Integrate the second term",
          "workingLatex": "\\int \\dfrac{22}{7}/(x+3)\\,dx = \\dfrac{22}{7}\\ln|x+3|",
          "explanation": "The second term integrates in the same way.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Combine the result",
          "workingLatex": "\\dfrac{13}{7}\\ln|x-4| + \\dfrac{22}{7}\\ln|x+3| + c",
          "explanation": "Add the logarithmic terms and include $+c$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify",
          "workingLatex": "\\frac{d}{dx}\\left(\\dfrac{13}{7}\\ln|x-4| + \\dfrac{22}{7}\\ln|x+3|\\right) = \\dfrac{5x-7}{x^2-x-12}",
          "explanation": "Differentiating confirms the original integrand.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\dfrac{5x-7}{x^2-x-12}\\,dx = \\dfrac{13}{7}\\ln|x-4| + \\dfrac{22}{7}\\ln|x+3| + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-partial-fractions.q026",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "partial fractions",
      "factorising denominator",
      "integration"
    ],
    "questionText": "Find $\\displaystyle\\int \\dfrac{4x+3}{x^2-x-6}\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factorise the denominator",
          "workingLatex": "x^2-x-6 = (x-3)(x+2)",
          "explanation": "Before splitting into partial fractions, the denominator must be written as a product of linear factors.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up partial fractions",
          "workingLatex": "\\dfrac{4x+3}{(x-3)(x+2)} \\equiv \\dfrac{A}{(x-3)} + \\dfrac{B}{(x+2)}",
          "explanation": "Each distinct linear factor gets its own term in the decomposition.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find $A$ using cover-up",
          "workingLatex": "x = 3 \\Rightarrow A = 3",
          "explanation": "Substituting the root $x = 3$ eliminates the $B$ term.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find $B$ using cover-up",
          "workingLatex": "x = -2 \\Rightarrow B = 1",
          "explanation": "Substituting $x = -2$ gives $B$ directly.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the partial fractions",
          "workingLatex": "3/(x-3) + 1/(x+2)",
          "explanation": "The integrand is now a sum of simple rational terms.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Integrate the first term",
          "workingLatex": "\\int 3/(x-3)\\,dx = 3\\ln|x-3|",
          "explanation": "Use $\\int \\dfrac{1}{x-p}\\,dx = \\ln|x-p| + c$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Integrate the second term",
          "workingLatex": "\\int 1/(x+2)\\,dx = 1\\ln|x+2|",
          "explanation": "The second term integrates in the same way.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Combine the result",
          "workingLatex": "3\\ln|x-3| + 1\\ln|x+2| + c",
          "explanation": "Add the logarithmic terms and include $+c$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify",
          "workingLatex": "\\frac{d}{dx}\\left(3\\ln|x-3| + 1\\ln|x+2|\\right) = \\dfrac{4x+3}{x^2-x-6}",
          "explanation": "Differentiating confirms the original integrand.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\dfrac{4x+3}{x^2-x-6}\\,dx = 3\\ln|x-3| + 1\\ln|x+2| + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-partial-fractions.q027",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "partial fractions",
      "factorising denominator",
      "integration"
    ],
    "questionText": "Find $\\displaystyle\\int \\dfrac{2x-5}{x^2-4}\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factorise the denominator",
          "workingLatex": "x^2-4 = (x-2)(x+2)",
          "explanation": "Before splitting into partial fractions, the denominator must be written as a product of linear factors.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up partial fractions",
          "workingLatex": "\\dfrac{2x-5}{(x-2)(x+2)} \\equiv \\dfrac{A}{(x-2)} + \\dfrac{B}{(x+2)}",
          "explanation": "Each distinct linear factor gets its own term in the decomposition.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find $A$ using cover-up",
          "workingLatex": "x = 2 \\Rightarrow A = -\\dfrac{1}{4}",
          "explanation": "Substituting the root $x = 2$ eliminates the $B$ term.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find $B$ using cover-up",
          "workingLatex": "x = -2 \\Rightarrow B = \\dfrac{9}{4}",
          "explanation": "Substituting $x = -2$ gives $B$ directly.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the partial fractions",
          "workingLatex": "-\\dfrac{1}{4}/(x-2) + \\dfrac{9}{4}/(x+2)",
          "explanation": "The integrand is now a sum of simple rational terms.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Integrate the first term",
          "workingLatex": "\\int -\\dfrac{1}{4}/(x-2)\\,dx = -\\dfrac{1}{4}\\ln|x-2|",
          "explanation": "Use $\\int \\dfrac{1}{x-p}\\,dx = \\ln|x-p| + c$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Integrate the second term",
          "workingLatex": "\\int \\dfrac{9}{4}/(x+2)\\,dx = \\dfrac{9}{4}\\ln|x+2|",
          "explanation": "The second term integrates in the same way.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Combine the result",
          "workingLatex": "-\\dfrac{1}{4}\\ln|x-2| + \\dfrac{9}{4}\\ln|x+2| + c",
          "explanation": "Add the logarithmic terms and include $+c$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify",
          "workingLatex": "\\frac{d}{dx}\\left(-\\dfrac{1}{4}\\ln|x-2| + \\dfrac{9}{4}\\ln|x+2|\\right) = \\dfrac{2x-5}{x^2-4}",
          "explanation": "Differentiating confirms the original integrand.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\dfrac{2x-5}{x^2-4}\\,dx = -\\dfrac{1}{4}\\ln|x-2| + \\dfrac{9}{4}\\ln|x+2| + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-partial-fractions.q028",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "partial fractions",
      "factorising denominator",
      "integration"
    ],
    "questionText": "Find $\\displaystyle\\int \\dfrac{3x+5}{x^2+3x+2}\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factorise the denominator",
          "workingLatex": "x^2+3x+2 = (x+1)(x+2)",
          "explanation": "Before splitting into partial fractions, the denominator must be written as a product of linear factors.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up partial fractions",
          "workingLatex": "\\dfrac{3x+5}{(x+1)(x+2)} \\equiv \\dfrac{A}{(x+1)} + \\dfrac{B}{(x+2)}",
          "explanation": "Each distinct linear factor gets its own term in the decomposition.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find $A$ using cover-up",
          "workingLatex": "x = -1 \\Rightarrow A = 2",
          "explanation": "Substituting the root $x = -1$ eliminates the $B$ term.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find $B$ using cover-up",
          "workingLatex": "x = -2 \\Rightarrow B = 1",
          "explanation": "Substituting $x = -2$ gives $B$ directly.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the partial fractions",
          "workingLatex": "2/(x+1) + 1/(x+2)",
          "explanation": "The integrand is now a sum of simple rational terms.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Integrate the first term",
          "workingLatex": "\\int 2/(x+1)\\,dx = 2\\ln|x+1|",
          "explanation": "Use $\\int \\dfrac{1}{x-p}\\,dx = \\ln|x-p| + c$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Integrate the second term",
          "workingLatex": "\\int 1/(x+2)\\,dx = 1\\ln|x+2|",
          "explanation": "The second term integrates in the same way.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Combine the result",
          "workingLatex": "2\\ln|x+1| + 1\\ln|x+2| + c",
          "explanation": "Add the logarithmic terms and include $+c$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify",
          "workingLatex": "\\frac{d}{dx}\\left(2\\ln|x+1| + 1\\ln|x+2|\\right) = \\dfrac{3x+5}{x^2+3x+2}",
          "explanation": "Differentiating confirms the original integrand.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\dfrac{3x+5}{x^2+3x+2}\\,dx = 2\\ln|x+1| + 1\\ln|x+2| + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-partial-fractions.q029",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "partial fractions",
      "factorising denominator",
      "integration"
    ],
    "questionText": "Find $\\displaystyle\\int \\dfrac{1x+4}{x^2+2x-8}\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factorise the denominator",
          "workingLatex": "x^2+2x-8 = (x+4)(x-2)",
          "explanation": "Before splitting into partial fractions, the denominator must be written as a product of linear factors.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up partial fractions",
          "workingLatex": "\\dfrac{1x+4}{(x+4)(x-2)} \\equiv \\dfrac{A}{(x+4)} + \\dfrac{B}{(x-2)}",
          "explanation": "Each distinct linear factor gets its own term in the decomposition.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find $A$ using cover-up",
          "workingLatex": "x = -4 \\Rightarrow A = 0",
          "explanation": "Substituting the root $x = -4$ eliminates the $B$ term.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find $B$ using cover-up",
          "workingLatex": "x = 2 \\Rightarrow B = 1",
          "explanation": "Substituting $x = 2$ gives $B$ directly.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the partial fractions",
          "workingLatex": "0/(x+4) + 1/(x-2)",
          "explanation": "The integrand is now a sum of simple rational terms.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Integrate the first term",
          "workingLatex": "\\int 0/(x+4)\\,dx = 0\\ln|x+4|",
          "explanation": "Use $\\int \\dfrac{1}{x-p}\\,dx = \\ln|x-p| + c$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Integrate the second term",
          "workingLatex": "\\int 1/(x-2)\\,dx = 1\\ln|x-2|",
          "explanation": "The second term integrates in the same way.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Combine the result",
          "workingLatex": "0\\ln|x+4| + 1\\ln|x-2| + c",
          "explanation": "Add the logarithmic terms and include $+c$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify",
          "workingLatex": "\\frac{d}{dx}\\left(0\\ln|x+4| + 1\\ln|x-2|\\right) = \\dfrac{1x+4}{x^2+2x-8}",
          "explanation": "Differentiating confirms the original integrand.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\dfrac{1x+4}{x^2+2x-8}\\,dx = 0\\ln|x+4| + 1\\ln|x-2| + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-partial-fractions.q030",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "partial fractions",
      "factorising denominator",
      "integration"
    ],
    "questionText": "Find $\\displaystyle\\int \\dfrac{6x-5}{x^2-x-12}\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factorise the denominator",
          "workingLatex": "x^2-x-12 = (x-4)(x+3)",
          "explanation": "Before splitting into partial fractions, the denominator must be written as a product of linear factors.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up partial fractions",
          "workingLatex": "\\dfrac{6x-5}{(x-4)(x+3)} \\equiv \\dfrac{A}{(x-4)} + \\dfrac{B}{(x+3)}",
          "explanation": "Each distinct linear factor gets its own term in the decomposition.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find $A$ using cover-up",
          "workingLatex": "x = 4 \\Rightarrow A = \\dfrac{19}{7}",
          "explanation": "Substituting the root $x = 4$ eliminates the $B$ term.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find $B$ using cover-up",
          "workingLatex": "x = -3 \\Rightarrow B = \\dfrac{23}{7}",
          "explanation": "Substituting $x = -3$ gives $B$ directly.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the partial fractions",
          "workingLatex": "\\dfrac{19}{7}/(x-4) + \\dfrac{23}{7}/(x+3)",
          "explanation": "The integrand is now a sum of simple rational terms.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Integrate the first term",
          "workingLatex": "\\int \\dfrac{19}{7}/(x-4)\\,dx = \\dfrac{19}{7}\\ln|x-4|",
          "explanation": "Use $\\int \\dfrac{1}{x-p}\\,dx = \\ln|x-p| + c$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Integrate the second term",
          "workingLatex": "\\int \\dfrac{23}{7}/(x+3)\\,dx = \\dfrac{23}{7}\\ln|x+3|",
          "explanation": "The second term integrates in the same way.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Combine the result",
          "workingLatex": "\\dfrac{19}{7}\\ln|x-4| + \\dfrac{23}{7}\\ln|x+3| + c",
          "explanation": "Add the logarithmic terms and include $+c$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify",
          "workingLatex": "\\frac{d}{dx}\\left(\\dfrac{19}{7}\\ln|x-4| + \\dfrac{23}{7}\\ln|x+3|\\right) = \\dfrac{6x-5}{x^2-x-12}",
          "explanation": "Differentiating confirms the original integrand.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\dfrac{6x-5}{x^2-x-12}\\,dx = \\dfrac{19}{7}\\ln|x-4| + \\dfrac{23}{7}\\ln|x+3| + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-partial-fractions.q031",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "partial fractions",
      "three linear factors",
      "integration"
    ],
    "questionText": "Find $\\displaystyle\\int \\dfrac{2x+1}{(x-1)(x+1)(x-2)}\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up three partial fractions",
          "workingLatex": "\\dfrac{2x+1}{(x-1)(x+1)(x-2)} \\equiv \\dfrac{A}{(x-1)} + \\dfrac{B}{(x+1)} + \\dfrac{C}{(x-2)}",
          "explanation": "Three distinct linear factors require three simple fractions.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Cover-up for $A$ at $x = 1$",
          "workingLatex": "A = -\\dfrac{3}{2}",
          "explanation": "Substitute the root of the first factor to find $A$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Cover-up for $B$ at $x = -1$",
          "workingLatex": "B = -\\dfrac{1}{6}",
          "explanation": "Substitute $x = {b}$ to isolate $B$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Cover-up for $C$ at $x = 2$",
          "workingLatex": "C = \\dfrac{5}{3}",
          "explanation": "Substitute $x = {c}$ to find $C$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the decomposition",
          "workingLatex": "-\\dfrac{3}{2}/(x-1) - \\dfrac{1}{6}/(x+1) + \\dfrac{5}{3}/(x-2)",
          "explanation": "All three numerators are now known.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Integrate term by term",
          "workingLatex": "\\int -\\dfrac{3}{2}/(x-1)\\,dx = -\\dfrac{3}{2}\\ln|x-1|,\\quad \\int -\\dfrac{1}{6}/(x+1)\\,dx = -\\dfrac{1}{6}\\ln|x+1|,\\quad \\int \\dfrac{5}{3}/(x-2)\\,dx = \\dfrac{5}{3}\\ln|x-2|",
          "explanation": "Each partial fraction gives a logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Combine",
          "workingLatex": "-\\dfrac{3}{2}\\ln|x-1| + -\\dfrac{1}{6}\\ln|x+1| + \\dfrac{5}{3}\\ln|x-2| + c",
          "explanation": "Collect terms and add $+c$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check",
          "workingLatex": "\\text{Differentiate the answer}",
          "explanation": "The derivative should equal the original rational function.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Final answer",
          "workingLatex": "-\\dfrac{3}{2}\\ln|x-1| + -\\dfrac{1}{6}\\ln|x+1| + \\dfrac{5}{3}\\ln|x-2| + c",
          "explanation": "Required indefinite integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\dfrac{2x+1}{(x-1)(x+1)(x-2)}\\,dx = -\\dfrac{3}{2}\\ln|x-1| + -\\dfrac{1}{6}\\ln|x+1| + \\dfrac{5}{3}\\ln|x-2| + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-partial-fractions.q032",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "partial fractions",
      "three linear factors",
      "integration"
    ],
    "questionText": "Find $\\displaystyle\\int \\dfrac{3x+5}{(x+2)(x-1)(x-3)}\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up three partial fractions",
          "workingLatex": "\\dfrac{3x+5}{(x+2)(x-1)(x-3)} \\equiv \\dfrac{A}{(x+2)} + \\dfrac{B}{(x-1)} + \\dfrac{C}{(x-3)}",
          "explanation": "Three distinct linear factors require three simple fractions.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Cover-up for $A$ at $x = -2$",
          "workingLatex": "A = -\\dfrac{1}{15}",
          "explanation": "Substitute the root of the first factor to find $A$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Cover-up for $B$ at $x = 1$",
          "workingLatex": "B = -\\dfrac{4}{3}",
          "explanation": "Substitute $x = {b}$ to isolate $B$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Cover-up for $C$ at $x = 3$",
          "workingLatex": "C = \\dfrac{7}{5}",
          "explanation": "Substitute $x = {c}$ to find $C$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the decomposition",
          "workingLatex": "-\\dfrac{1}{15}/(x+2) - \\dfrac{4}{3}/(x-1) + \\dfrac{7}{5}/(x-3)",
          "explanation": "All three numerators are now known.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Integrate term by term",
          "workingLatex": "\\int -\\dfrac{1}{15}/(x+2)\\,dx = -\\dfrac{1}{15}\\ln|x+2|,\\quad \\int -\\dfrac{4}{3}/(x-1)\\,dx = -\\dfrac{4}{3}\\ln|x-1|,\\quad \\int \\dfrac{7}{5}/(x-3)\\,dx = \\dfrac{7}{5}\\ln|x-3|",
          "explanation": "Each partial fraction gives a logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Combine",
          "workingLatex": "-\\dfrac{1}{15}\\ln|x+2| + -\\dfrac{4}{3}\\ln|x-1| + \\dfrac{7}{5}\\ln|x-3| + c",
          "explanation": "Collect terms and add $+c$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check",
          "workingLatex": "\\text{Differentiate the answer}",
          "explanation": "The derivative should equal the original rational function.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Final answer",
          "workingLatex": "-\\dfrac{1}{15}\\ln|x+2| + -\\dfrac{4}{3}\\ln|x-1| + \\dfrac{7}{5}\\ln|x-3| + c",
          "explanation": "Required indefinite integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\dfrac{3x+5}{(x+2)(x-1)(x-3)}\\,dx = -\\dfrac{1}{15}\\ln|x+2| + -\\dfrac{4}{3}\\ln|x-1| + \\dfrac{7}{5}\\ln|x-3| + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-partial-fractions.q033",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "partial fractions",
      "three linear factors",
      "integration"
    ],
    "questionText": "Find $\\displaystyle\\int \\dfrac{1x+2}{x(x-2)(x+3)}\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up three partial fractions",
          "workingLatex": "\\dfrac{1x+2}{x(x-2)(x+3)} \\equiv \\dfrac{A}{x} + \\dfrac{B}{(x-2)} + \\dfrac{C}{(x+3)}",
          "explanation": "Three distinct linear factors require three simple fractions.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Cover-up for $A$ at $x = 0$",
          "workingLatex": "A = -\\dfrac{1}{3}",
          "explanation": "Substitute the root of the first factor to find $A$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Cover-up for $B$ at $x = 2$",
          "workingLatex": "B = \\dfrac{2}{5}",
          "explanation": "Substitute $x = {b}$ to isolate $B$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Cover-up for $C$ at $x = -3$",
          "workingLatex": "C = -\\dfrac{1}{15}",
          "explanation": "Substitute $x = {c}$ to find $C$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the decomposition",
          "workingLatex": "-\\dfrac{1}{3}/x + \\dfrac{2}{5}/(x-2) - \\dfrac{1}{15}/(x+3)",
          "explanation": "All three numerators are now known.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Integrate term by term",
          "workingLatex": "\\int -\\dfrac{1}{3}/x\\,dx = -\\dfrac{1}{3}\\ln|x|,\\quad \\int \\dfrac{2}{5}/(x-2)\\,dx = \\dfrac{2}{5}\\ln|x-2|,\\quad \\int -\\dfrac{1}{15}/(x+3)\\,dx = -\\dfrac{1}{15}\\ln|x+3|",
          "explanation": "Each partial fraction gives a logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Combine",
          "workingLatex": "-\\dfrac{1}{3}\\ln|x| + \\dfrac{2}{5}\\ln|x-2| + -\\dfrac{1}{15}\\ln|x+3| + c",
          "explanation": "Collect terms and add $+c$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check",
          "workingLatex": "\\text{Differentiate the answer}",
          "explanation": "The derivative should equal the original rational function.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Final answer",
          "workingLatex": "-\\dfrac{1}{3}\\ln|x| + \\dfrac{2}{5}\\ln|x-2| + -\\dfrac{1}{15}\\ln|x+3| + c",
          "explanation": "Required indefinite integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\dfrac{1x+2}{x(x-2)(x+3)}\\,dx = -\\dfrac{1}{3}\\ln|x| + \\dfrac{2}{5}\\ln|x-2| + -\\dfrac{1}{15}\\ln|x+3| + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-partial-fractions.q034",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "partial fractions",
      "three linear factors",
      "integration"
    ],
    "questionText": "Find $\\displaystyle\\int \\dfrac{4x-1}{(x-1)(x-2)(x+1)}\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up three partial fractions",
          "workingLatex": "\\dfrac{4x-1}{(x-1)(x-2)(x+1)} \\equiv \\dfrac{A}{(x-1)} + \\dfrac{B}{(x-2)} + \\dfrac{C}{(x+1)}",
          "explanation": "Three distinct linear factors require three simple fractions.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Cover-up for $A$ at $x = 1$",
          "workingLatex": "A = -\\dfrac{3}{2}",
          "explanation": "Substitute the root of the first factor to find $A$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Cover-up for $B$ at $x = 2$",
          "workingLatex": "B = \\dfrac{7}{3}",
          "explanation": "Substitute $x = {b}$ to isolate $B$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Cover-up for $C$ at $x = -1$",
          "workingLatex": "C = -\\dfrac{5}{6}",
          "explanation": "Substitute $x = {c}$ to find $C$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the decomposition",
          "workingLatex": "-\\dfrac{3}{2}/(x-1) + \\dfrac{7}{3}/(x-2) - \\dfrac{5}{6}/(x+1)",
          "explanation": "All three numerators are now known.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Integrate term by term",
          "workingLatex": "\\int -\\dfrac{3}{2}/(x-1)\\,dx = -\\dfrac{3}{2}\\ln|x-1|,\\quad \\int \\dfrac{7}{3}/(x-2)\\,dx = \\dfrac{7}{3}\\ln|x-2|,\\quad \\int -\\dfrac{5}{6}/(x+1)\\,dx = -\\dfrac{5}{6}\\ln|x+1|",
          "explanation": "Each partial fraction gives a logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Combine",
          "workingLatex": "-\\dfrac{3}{2}\\ln|x-1| + \\dfrac{7}{3}\\ln|x-2| + -\\dfrac{5}{6}\\ln|x+1| + c",
          "explanation": "Collect terms and add $+c$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check",
          "workingLatex": "\\text{Differentiate the answer}",
          "explanation": "The derivative should equal the original rational function.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Final answer",
          "workingLatex": "-\\dfrac{3}{2}\\ln|x-1| + \\dfrac{7}{3}\\ln|x-2| + -\\dfrac{5}{6}\\ln|x+1| + c",
          "explanation": "Required indefinite integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\dfrac{4x-1}{(x-1)(x-2)(x+1)}\\,dx = -\\dfrac{3}{2}\\ln|x-1| + \\dfrac{7}{3}\\ln|x-2| + -\\dfrac{5}{6}\\ln|x+1| + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-partial-fractions.q035",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "partial fractions",
      "three linear factors",
      "integration"
    ],
    "questionText": "Find $\\displaystyle\\int \\dfrac{2x+7}{(x+1)(x-2)(x-4)}\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up three partial fractions",
          "workingLatex": "\\dfrac{2x+7}{(x+1)(x-2)(x-4)} \\equiv \\dfrac{A}{(x+1)} + \\dfrac{B}{(x-2)} + \\dfrac{C}{(x-4)}",
          "explanation": "Three distinct linear factors require three simple fractions.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Cover-up for $A$ at $x = -1$",
          "workingLatex": "A = \\dfrac{1}{3}",
          "explanation": "Substitute the root of the first factor to find $A$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Cover-up for $B$ at $x = 2$",
          "workingLatex": "B = -\\dfrac{11}{6}",
          "explanation": "Substitute $x = {b}$ to isolate $B$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Cover-up for $C$ at $x = 4$",
          "workingLatex": "C = \\dfrac{3}{2}",
          "explanation": "Substitute $x = {c}$ to find $C$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the decomposition",
          "workingLatex": "\\dfrac{1}{3}/(x+1) - \\dfrac{11}{6}/(x-2) + \\dfrac{3}{2}/(x-4)",
          "explanation": "All three numerators are now known.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Integrate term by term",
          "workingLatex": "\\int \\dfrac{1}{3}/(x+1)\\,dx = \\dfrac{1}{3}\\ln|x+1|,\\quad \\int -\\dfrac{11}{6}/(x-2)\\,dx = -\\dfrac{11}{6}\\ln|x-2|,\\quad \\int \\dfrac{3}{2}/(x-4)\\,dx = \\dfrac{3}{2}\\ln|x-4|",
          "explanation": "Each partial fraction gives a logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Combine",
          "workingLatex": "\\dfrac{1}{3}\\ln|x+1| + -\\dfrac{11}{6}\\ln|x-2| + \\dfrac{3}{2}\\ln|x-4| + c",
          "explanation": "Collect terms and add $+c$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check",
          "workingLatex": "\\text{Differentiate the answer}",
          "explanation": "The derivative should equal the original rational function.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Final answer",
          "workingLatex": "\\dfrac{1}{3}\\ln|x+1| + -\\dfrac{11}{6}\\ln|x-2| + \\dfrac{3}{2}\\ln|x-4| + c",
          "explanation": "Required indefinite integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\dfrac{2x+7}{(x+1)(x-2)(x-4)}\\,dx = \\dfrac{1}{3}\\ln|x+1| + -\\dfrac{11}{6}\\ln|x-2| + \\dfrac{3}{2}\\ln|x-4| + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-partial-fractions.q036",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "partial fractions",
      "three linear factors",
      "integration"
    ],
    "questionText": "Find $\\displaystyle\\int \\dfrac{5x-4}{(x-1)(x+2)(x-3)}\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up three partial fractions",
          "workingLatex": "\\dfrac{5x-4}{(x-1)(x+2)(x-3)} \\equiv \\dfrac{A}{(x-1)} + \\dfrac{B}{(x+2)} + \\dfrac{C}{(x-3)}",
          "explanation": "Three distinct linear factors require three simple fractions.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Cover-up for $A$ at $x = 1$",
          "workingLatex": "A = -\\dfrac{1}{6}",
          "explanation": "Substitute the root of the first factor to find $A$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Cover-up for $B$ at $x = -2$",
          "workingLatex": "B = -\\dfrac{14}{15}",
          "explanation": "Substitute $x = {b}$ to isolate $B$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Cover-up for $C$ at $x = 3$",
          "workingLatex": "C = \\dfrac{11}{10}",
          "explanation": "Substitute $x = {c}$ to find $C$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the decomposition",
          "workingLatex": "-\\dfrac{1}{6}/(x-1) - \\dfrac{14}{15}/(x+2) + \\dfrac{11}{10}/(x-3)",
          "explanation": "All three numerators are now known.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Integrate term by term",
          "workingLatex": "\\int -\\dfrac{1}{6}/(x-1)\\,dx = -\\dfrac{1}{6}\\ln|x-1|,\\quad \\int -\\dfrac{14}{15}/(x+2)\\,dx = -\\dfrac{14}{15}\\ln|x+2|,\\quad \\int \\dfrac{11}{10}/(x-3)\\,dx = \\dfrac{11}{10}\\ln|x-3|",
          "explanation": "Each partial fraction gives a logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Combine",
          "workingLatex": "-\\dfrac{1}{6}\\ln|x-1| + -\\dfrac{14}{15}\\ln|x+2| + \\dfrac{11}{10}\\ln|x-3| + c",
          "explanation": "Collect terms and add $+c$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check",
          "workingLatex": "\\text{Differentiate the answer}",
          "explanation": "The derivative should equal the original rational function.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Final answer",
          "workingLatex": "-\\dfrac{1}{6}\\ln|x-1| + -\\dfrac{14}{15}\\ln|x+2| + \\dfrac{11}{10}\\ln|x-3| + c",
          "explanation": "Required indefinite integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\dfrac{5x-4}{(x-1)(x+2)(x-3)}\\,dx = -\\dfrac{1}{6}\\ln|x-1| + -\\dfrac{14}{15}\\ln|x+2| + \\dfrac{11}{10}\\ln|x-3| + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-partial-fractions.q037",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "partial fractions",
      "repeated linear factor",
      "integration"
    ],
    "questionText": "Find $\\displaystyle\\int \\dfrac{2x+3}{(x+1)^2}\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify a repeated linear factor",
          "workingLatex": "\\dfrac{2x+3}{(x+1)^2}",
          "explanation": "A squared linear factor needs two terms in the decomposition: one for each power.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the partial fraction form",
          "workingLatex": "\\dfrac{2x+3}{(x+1)^2} \\equiv \\dfrac{A}{(x+1)} + \\dfrac{B}{(x+1)^2}",
          "explanation": "Include both $\\dfrac{A}{x-a}$ and $\\dfrac{B}{(x-a)^2}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Clear denominators",
          "workingLatex": "2x+3 = A(x+1) + B",
          "explanation": "Multiply through by $(x-a)^2$ to get a polynomial identity.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute $x = -1$ to find $B$",
          "workingLatex": "B = 1",
          "explanation": "Setting $x = {a}$ removes the $A$ term.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare coefficients to find $A$",
          "workingLatex": "A = 2",
          "explanation": "The coefficient of $x$ on both sides gives $A$ directly.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Integrate $\\dfrac{A}{x-a}$",
          "workingLatex": "\\int 2/(x+1)\\,dx = 2\\ln|x+1|",
          "explanation": "This is a standard logarithm integral.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Integrate $\\dfrac{B}{(x-a)^2}$",
          "workingLatex": "\\int 1/(x+1)^2\\,dx = -1/(x+1)",
          "explanation": "Use $\\int (x-a)^{-2}\\,dx = -\\dfrac{1}{x-a}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Combine",
          "workingLatex": "2\\ln|x+1| - 1/(x+1) + c",
          "explanation": "Add all terms and include $+c$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify",
          "workingLatex": "\\text{Differentiate}",
          "explanation": "Differentiating should recover the integrand.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\dfrac{2x+3}{(x+1)^2}\\,dx = 2\\ln|x+1| - 1/(x+1) + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-partial-fractions.q038",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "partial fractions",
      "repeated linear factor",
      "integration"
    ],
    "questionText": "Find $\\displaystyle\\int \\dfrac{5x-2}{(x-1)^2}\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify a repeated linear factor",
          "workingLatex": "\\dfrac{5x-2}{(x-1)^2}",
          "explanation": "A squared linear factor needs two terms in the decomposition: one for each power.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the partial fraction form",
          "workingLatex": "\\dfrac{5x-2}{(x-1)^2} \\equiv \\dfrac{A}{(x-1)} + \\dfrac{B}{(x-1)^2}",
          "explanation": "Include both $\\dfrac{A}{x-a}$ and $\\dfrac{B}{(x-a)^2}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Clear denominators",
          "workingLatex": "5x+-2 = A(x-1) + B",
          "explanation": "Multiply through by $(x-a)^2$ to get a polynomial identity.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute $x = 1$ to find $B$",
          "workingLatex": "B = 3",
          "explanation": "Setting $x = {a}$ removes the $A$ term.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare coefficients to find $A$",
          "workingLatex": "A = 5",
          "explanation": "The coefficient of $x$ on both sides gives $A$ directly.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Integrate $\\dfrac{A}{x-a}$",
          "workingLatex": "\\int 5/(x-1)\\,dx = 5\\ln|x-1|",
          "explanation": "This is a standard logarithm integral.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Integrate $\\dfrac{B}{(x-a)^2}$",
          "workingLatex": "\\int 3/(x-1)^2\\,dx = -3/(x-1)",
          "explanation": "Use $\\int (x-a)^{-2}\\,dx = -\\dfrac{1}{x-a}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Combine",
          "workingLatex": "5\\ln|x-1| - 3/(x-1) + c",
          "explanation": "Add all terms and include $+c$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify",
          "workingLatex": "\\text{Differentiate}",
          "explanation": "Differentiating should recover the integrand.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\dfrac{5x-2}{(x-1)^2}\\,dx = 5\\ln|x-1| - 3/(x-1) + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-partial-fractions.q039",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "partial fractions",
      "repeated linear factor",
      "integration"
    ],
    "questionText": "Find $\\displaystyle\\int \\dfrac{3x+4}{(x-2)^2}\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify a repeated linear factor",
          "workingLatex": "\\dfrac{3x+4}{(x-2)^2}",
          "explanation": "A squared linear factor needs two terms in the decomposition: one for each power.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the partial fraction form",
          "workingLatex": "\\dfrac{3x+4}{(x-2)^2} \\equiv \\dfrac{A}{(x-2)} + \\dfrac{B}{(x-2)^2}",
          "explanation": "Include both $\\dfrac{A}{x-a}$ and $\\dfrac{B}{(x-a)^2}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Clear denominators",
          "workingLatex": "3x+4 = A(x-2) + B",
          "explanation": "Multiply through by $(x-a)^2$ to get a polynomial identity.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute $x = 2$ to find $B$",
          "workingLatex": "B = 10",
          "explanation": "Setting $x = {a}$ removes the $A$ term.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare coefficients to find $A$",
          "workingLatex": "A = 3",
          "explanation": "The coefficient of $x$ on both sides gives $A$ directly.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Integrate $\\dfrac{A}{x-a}$",
          "workingLatex": "\\int 3/(x-2)\\,dx = 3\\ln|x-2|",
          "explanation": "This is a standard logarithm integral.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Integrate $\\dfrac{B}{(x-a)^2}$",
          "workingLatex": "\\int 10/(x-2)^2\\,dx = -10/(x-2)",
          "explanation": "Use $\\int (x-a)^{-2}\\,dx = -\\dfrac{1}{x-a}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Combine",
          "workingLatex": "3\\ln|x-2| - 10/(x-2) + c",
          "explanation": "Add all terms and include $+c$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify",
          "workingLatex": "\\text{Differentiate}",
          "explanation": "Differentiating should recover the integrand.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\dfrac{3x+4}{(x-2)^2}\\,dx = 3\\ln|x-2| - 10/(x-2) + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-partial-fractions.q040",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "partial fractions",
      "repeated linear factor",
      "integration"
    ],
    "questionText": "Find $\\displaystyle\\int \\dfrac{4x-7}{(x+2)^2}\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify a repeated linear factor",
          "workingLatex": "\\dfrac{4x-7}{(x+2)^2}",
          "explanation": "A squared linear factor needs two terms in the decomposition: one for each power.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the partial fraction form",
          "workingLatex": "\\dfrac{4x-7}{(x+2)^2} \\equiv \\dfrac{A}{(x+2)} + \\dfrac{B}{(x+2)^2}",
          "explanation": "Include both $\\dfrac{A}{x-a}$ and $\\dfrac{B}{(x-a)^2}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Clear denominators",
          "workingLatex": "4x+-7 = A(x+2) + B",
          "explanation": "Multiply through by $(x-a)^2$ to get a polynomial identity.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute $x = -2$ to find $B$",
          "workingLatex": "B = (-15)",
          "explanation": "Setting $x = {a}$ removes the $A$ term.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare coefficients to find $A$",
          "workingLatex": "A = 4",
          "explanation": "The coefficient of $x$ on both sides gives $A$ directly.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Integrate $\\dfrac{A}{x-a}$",
          "workingLatex": "\\int 4/(x+2)\\,dx = 4\\ln|x+2|",
          "explanation": "This is a standard logarithm integral.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Integrate $\\dfrac{B}{(x-a)^2}$",
          "workingLatex": "\\int (-15)/(x+2)^2\\,dx = 15/(x+2)",
          "explanation": "Use $\\int (x-a)^{-2}\\,dx = -\\dfrac{1}{x-a}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Combine",
          "workingLatex": "4\\ln|x+2| + (-15)/(x+2) + c",
          "explanation": "Add all terms and include $+c$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify",
          "workingLatex": "\\text{Differentiate}",
          "explanation": "Differentiating should recover the integrand.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\dfrac{4x-7}{(x+2)^2}\\,dx = 4\\ln|x+2| + (-15)/(x+2) + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-partial-fractions.q041",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "exact",
    "tags": [
      "partial fractions",
      "definite integral",
      "logarithms"
    ],
    "questionText": "Evaluate $\\displaystyle\\int_{2}^{4} \\dfrac{3x+1}{(x-1)(x+2)}\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Decompose into partial fractions",
          "workingLatex": "\\dfrac{3x+1}{(x-1)(x+2)} = \\dfrac{4}{3}/(x-1) + \\dfrac{5}{3}/(x+2)",
          "explanation": "Split the rational function before integrating.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the definite integral",
          "workingLatex": "\\displaystyle\\int_{2}^{4} \\left(\\dfrac{4}{3}/(x-1) + \\dfrac{5}{3}/(x+2)\\right)\\,dx",
          "explanation": "Replace the integrand with its partial fraction form.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate",
          "workingLatex": "\\left[\\dfrac{4}{3}\\ln|x-1| + \\dfrac{5}{3}\\ln|x+2|\\right]_{2}^{4}",
          "explanation": "Each term integrates to a logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute $x = 4$",
          "workingLatex": "\\dfrac{4}{3}\\ln|4-1| + \\dfrac{5}{3}\\ln|4--2|",
          "explanation": "Evaluate the antiderivative at the upper limit.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute $x = 2$",
          "workingLatex": "\\dfrac{4}{3}\\ln|2-1| + \\dfrac{5}{3}\\ln|2--2|",
          "explanation": "Evaluate at the lower limit and subtract.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify using log laws",
          "workingLatex": "\\ln 3",
          "explanation": "Combine logarithms: $\\ln a - \\ln b = \\ln\\dfrac{a}{b}$ and $k\\ln a = \\ln a^k$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check the interval",
          "workingLatex": "x \\in [2,4] \\text{ avoids poles}",
          "explanation": "None of the denominator zeros lie inside the interval of integration.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Exact value",
          "workingLatex": "\\ln 3",
          "explanation": "Leave the answer in exact logarithmic form.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Final answer",
          "workingLatex": "\\ln 3",
          "explanation": "The definite integral evaluates to this exact value.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{2}^{4} \\dfrac{3x+1}{(x-1)(x+2)}\\,dx = \\ln 3$."
    }
  },
  {
    "id": "al.y2.pure.integration-partial-fractions.q042",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "exact",
    "tags": [
      "partial fractions",
      "definite integral",
      "logarithms"
    ],
    "questionText": "Evaluate $\\displaystyle\\int_{0}^{2} \\dfrac{2x+5}{(x+1)(x-3)}\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Decompose into partial fractions",
          "workingLatex": "\\dfrac{2x+5}{(x+1)(x-3)} = -\\dfrac{3}{4}/(x+1) + \\dfrac{11}{4}/(x-3)",
          "explanation": "Split the rational function before integrating.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the definite integral",
          "workingLatex": "\\displaystyle\\int_{0}^{2} \\left(-\\dfrac{3}{4}/(x+1) + \\dfrac{11}{4}/(x-3)\\right)\\,dx",
          "explanation": "Replace the integrand with its partial fraction form.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate",
          "workingLatex": "\\left[-\\dfrac{3}{4}\\ln|x+1| + \\dfrac{11}{4}\\ln|x-3|\\right]_{0}^{2}",
          "explanation": "Each term integrates to a logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute $x = 2$",
          "workingLatex": "-\\dfrac{3}{4}\\ln|2--1| + \\dfrac{11}{4}\\ln|2-3|",
          "explanation": "Evaluate the antiderivative at the upper limit.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute $x = 0$",
          "workingLatex": "-\\dfrac{3}{4}\\ln|0--1| + \\dfrac{11}{4}\\ln|0-3|",
          "explanation": "Evaluate at the lower limit and subtract.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify using log laws",
          "workingLatex": "2\\ln 2",
          "explanation": "Combine logarithms: $\\ln a - \\ln b = \\ln\\dfrac{a}{b}$ and $k\\ln a = \\ln a^k$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check the interval",
          "workingLatex": "x \\in [0,2] \\text{ avoids poles}",
          "explanation": "None of the denominator zeros lie inside the interval of integration.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Exact value",
          "workingLatex": "2\\ln 2",
          "explanation": "Leave the answer in exact logarithmic form.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Final answer",
          "workingLatex": "2\\ln 2",
          "explanation": "The definite integral evaluates to this exact value.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{0}^{2} \\dfrac{2x+5}{(x+1)(x-3)}\\,dx = 2\\ln 2$."
    }
  },
  {
    "id": "al.y2.pure.integration-partial-fractions.q043",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "exact",
    "tags": [
      "partial fractions",
      "definite integral",
      "logarithms"
    ],
    "questionText": "Evaluate $\\displaystyle\\int_{1}^{3} \\dfrac{4x-3}{(x-2)(x+1)}\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Decompose into partial fractions",
          "workingLatex": "\\dfrac{4x-3}{(x-2)(x+1)} = \\dfrac{5}{3}/(x-2) + \\dfrac{7}{3}/(x+1)",
          "explanation": "Split the rational function before integrating.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the definite integral",
          "workingLatex": "\\displaystyle\\int_{1}^{3} \\left(\\dfrac{5}{3}/(x-2) + \\dfrac{7}{3}/(x+1)\\right)\\,dx",
          "explanation": "Replace the integrand with its partial fraction form.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate",
          "workingLatex": "\\left[\\dfrac{5}{3}\\ln|x-2| + \\dfrac{7}{3}\\ln|x+1|\\right]_{1}^{3}",
          "explanation": "Each term integrates to a logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute $x = 3$",
          "workingLatex": "\\dfrac{5}{3}\\ln|3-2| + \\dfrac{7}{3}\\ln|3--1|",
          "explanation": "Evaluate the antiderivative at the upper limit.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute $x = 1$",
          "workingLatex": "\\dfrac{5}{3}\\ln|1-2| + \\dfrac{7}{3}\\ln|1--1|",
          "explanation": "Evaluate at the lower limit and subtract.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify using log laws",
          "workingLatex": "\\ln 5",
          "explanation": "Combine logarithms: $\\ln a - \\ln b = \\ln\\dfrac{a}{b}$ and $k\\ln a = \\ln a^k$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check the interval",
          "workingLatex": "x \\in [1,3] \\text{ avoids poles}",
          "explanation": "None of the denominator zeros lie inside the interval of integration.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Exact value",
          "workingLatex": "\\ln 5",
          "explanation": "Leave the answer in exact logarithmic form.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Final answer",
          "workingLatex": "\\ln 5",
          "explanation": "The definite integral evaluates to this exact value.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{1}^{3} \\dfrac{4x-3}{(x-2)(x+1)}\\,dx = \\ln 5$."
    }
  },
  {
    "id": "al.y2.pure.integration-partial-fractions.q044",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "exact",
    "tags": [
      "partial fractions",
      "definite integral",
      "logarithms"
    ],
    "questionText": "Evaluate $\\displaystyle\\int_{1}^{3} \\dfrac{1x+6}{(x+2)(x-4)}\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Decompose into partial fractions",
          "workingLatex": "\\dfrac{1x+6}{(x+2)(x-4)} = -\\dfrac{2}{3}/(x+2) + \\dfrac{5}{3}/(x-4)",
          "explanation": "Split the rational function before integrating.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the definite integral",
          "workingLatex": "\\displaystyle\\int_{1}^{3} \\left(-\\dfrac{2}{3}/(x+2) + \\dfrac{5}{3}/(x-4)\\right)\\,dx",
          "explanation": "Replace the integrand with its partial fraction form.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate",
          "workingLatex": "\\left[-\\dfrac{2}{3}\\ln|x+2| + \\dfrac{5}{3}\\ln|x-4|\\right]_{1}^{3}",
          "explanation": "Each term integrates to a logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute $x = 3$",
          "workingLatex": "-\\dfrac{2}{3}\\ln|3--2| + \\dfrac{5}{3}\\ln|3-4|",
          "explanation": "Evaluate the antiderivative at the upper limit.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute $x = 1$",
          "workingLatex": "-\\dfrac{2}{3}\\ln|1--2| + \\dfrac{5}{3}\\ln|1-4|",
          "explanation": "Evaluate at the lower limit and subtract.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify using log laws",
          "workingLatex": "\\dfrac{3}{2}\\ln 2",
          "explanation": "Combine logarithms: $\\ln a - \\ln b = \\ln\\dfrac{a}{b}$ and $k\\ln a = \\ln a^k$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check the interval",
          "workingLatex": "x \\in [1,3] \\text{ avoids poles}",
          "explanation": "None of the denominator zeros lie inside the interval of integration.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Exact value",
          "workingLatex": "\\dfrac{3}{2}\\ln 2",
          "explanation": "Leave the answer in exact logarithmic form.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Final answer",
          "workingLatex": "\\dfrac{3}{2}\\ln 2",
          "explanation": "The definite integral evaluates to this exact value.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{1}^{3} \\dfrac{1x+6}{(x+2)(x-4)}\\,dx = \\dfrac{3}{2}\\ln 2$."
    }
  },
  {
    "id": "al.y2.pure.integration-partial-fractions.q045",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "exact",
    "tags": [
      "partial fractions",
      "definite integral",
      "logarithms"
    ],
    "questionText": "Evaluate $\\displaystyle\\int_{2}^{5} \\dfrac{5x-1}{(x-1)(x-2)}\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Decompose into partial fractions",
          "workingLatex": "\\dfrac{5x-1}{(x-1)(x-2)} = (-4)/(x-1) + 9/(x-2)",
          "explanation": "Split the rational function before integrating.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the definite integral",
          "workingLatex": "\\displaystyle\\int_{2}^{5} \\left((-4)/(x-1) + 9/(x-2)\\right)\\,dx",
          "explanation": "Replace the integrand with its partial fraction form.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate",
          "workingLatex": "\\left[(-4)\\ln|x-1| + 9\\ln|x-2|\\right]_{2}^{5}",
          "explanation": "Each term integrates to a logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute $x = 5$",
          "workingLatex": "(-4)\\ln|5-1| + 9\\ln|5-2|",
          "explanation": "Evaluate the antiderivative at the upper limit.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute $x = 2$",
          "workingLatex": "(-4)\\ln|2-1| + 9\\ln|2-2|",
          "explanation": "Evaluate at the lower limit and subtract.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify using log laws",
          "workingLatex": "\\ln\\dfrac{16}{9}",
          "explanation": "Combine logarithms: $\\ln a - \\ln b = \\ln\\dfrac{a}{b}$ and $k\\ln a = \\ln a^k$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check the interval",
          "workingLatex": "x \\in [2,5] \\text{ avoids poles}",
          "explanation": "None of the denominator zeros lie inside the interval of integration.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Exact value",
          "workingLatex": "\\ln\\dfrac{16}{9}",
          "explanation": "Leave the answer in exact logarithmic form.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Final answer",
          "workingLatex": "\\ln\\dfrac{16}{9}",
          "explanation": "The definite integral evaluates to this exact value.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{2}^{5} \\dfrac{5x-1}{(x-1)(x-2)}\\,dx = \\ln\\dfrac{16}{9}$."
    }
  },
  {
    "id": "al.y2.pure.integration-partial-fractions.q046",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "exact",
    "tags": [
      "partial fractions",
      "definite integral",
      "logarithms"
    ],
    "questionText": "Evaluate $\\displaystyle\\int_{1}^{4} \\dfrac{2x+3}{(x+1)(x-2)}\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Decompose into partial fractions",
          "workingLatex": "\\dfrac{2x+3}{(x+1)(x-2)} = -\\dfrac{1}{3}/(x+1) + \\dfrac{7}{3}/(x-2)",
          "explanation": "Split the rational function before integrating.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the definite integral",
          "workingLatex": "\\displaystyle\\int_{1}^{4} \\left(-\\dfrac{1}{3}/(x+1) + \\dfrac{7}{3}/(x-2)\\right)\\,dx",
          "explanation": "Replace the integrand with its partial fraction form.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate",
          "workingLatex": "\\left[-\\dfrac{1}{3}\\ln|x+1| + \\dfrac{7}{3}\\ln|x-2|\\right]_{1}^{4}",
          "explanation": "Each term integrates to a logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute $x = 4$",
          "workingLatex": "-\\dfrac{1}{3}\\ln|4--1| + \\dfrac{7}{3}\\ln|4-2|",
          "explanation": "Evaluate the antiderivative at the upper limit.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute $x = 1$",
          "workingLatex": "-\\dfrac{1}{3}\\ln|1--1| + \\dfrac{7}{3}\\ln|1-2|",
          "explanation": "Evaluate at the lower limit and subtract.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify using log laws",
          "workingLatex": "\\ln\\dfrac{27}{8}",
          "explanation": "Combine logarithms: $\\ln a - \\ln b = \\ln\\dfrac{a}{b}$ and $k\\ln a = \\ln a^k$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check the interval",
          "workingLatex": "x \\in [1,4] \\text{ avoids poles}",
          "explanation": "None of the denominator zeros lie inside the interval of integration.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Exact value",
          "workingLatex": "\\ln\\dfrac{27}{8}",
          "explanation": "Leave the answer in exact logarithmic form.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Final answer",
          "workingLatex": "\\ln\\dfrac{27}{8}",
          "explanation": "The definite integral evaluates to this exact value.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{1}^{4} \\dfrac{2x+3}{(x+1)(x-2)}\\,dx = \\ln\\dfrac{27}{8}$."
    }
  },
  {
    "id": "al.y2.pure.integration-partial-fractions.q047",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "partial fractions",
      "constant numerator",
      "definite integral"
    ],
    "questionText": "Evaluate $\\displaystyle\\int_{2}^{5} \\dfrac{3}{(x-1)(x+2)}\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up partial fractions",
          "workingLatex": "\\dfrac{3}{(x-1)(x+2)} \\equiv \\dfrac{A}{(x-1)} + \\dfrac{B}{(x+2)}",
          "explanation": "A constant numerator still decomposes over distinct linear factors.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find $A$ and $B$",
          "workingLatex": "A = 1,\\quad B = (-1)",
          "explanation": "Use cover-up at each root of the denominator.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate",
          "workingLatex": "\\int \\left(1/(x-1) + (-1)/(x+2)\\right) dx",
          "explanation": "Each term gives a logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the limits",
          "workingLatex": "\\left[1\\ln|x-1| + (-1)\\ln|x+2|\\right]_{2}^{5}",
          "explanation": "Evaluate the antiderivative between $x = {lo}$ and $x = {hi}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute and subtract",
          "workingLatex": "\\ln\\dfrac{9}{4}",
          "explanation": "Use logarithm laws to simplify the difference of logs.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Confirm exact form",
          "workingLatex": "\\ln\\dfrac{9}{4}",
          "explanation": "The answer is a single logarithm or simple multiple.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check poles",
          "workingLatex": "\\text{No zeros of denominator on } [2,5]",
          "explanation": "The integral exists because the integrand is continuous on the interval.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret",
          "workingLatex": "\\text{Signed area under the rational curve}",
          "explanation": "The definite integral gives the net area under $y = f(x)$ on the interval.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\ln\\dfrac{9}{4}",
          "explanation": "Exact value of the integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{2}^{5} \\dfrac{3}{(x-1)(x+2)}\\,dx = \\ln\\dfrac{9}{4}$."
    }
  },
  {
    "id": "al.y2.pure.integration-partial-fractions.q048",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "partial fractions",
      "constant numerator",
      "definite integral"
    ],
    "questionText": "Evaluate $\\displaystyle\\int_{1}^{4} \\dfrac{5}{(x+1)(x-3)}\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up partial fractions",
          "workingLatex": "\\dfrac{5}{(x+1)(x-3)} \\equiv \\dfrac{A}{(x+1)} + \\dfrac{B}{(x-3)}",
          "explanation": "A constant numerator still decomposes over distinct linear factors.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find $A$ and $B$",
          "workingLatex": "A = -\\dfrac{5}{4},\\quad B = \\dfrac{5}{4}",
          "explanation": "Use cover-up at each root of the denominator.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate",
          "workingLatex": "\\int \\left(-\\dfrac{5}{4}/(x+1) + \\dfrac{5}{4}/(x-3)\\right) dx",
          "explanation": "Each term gives a logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the limits",
          "workingLatex": "\\left[-\\dfrac{5}{4}\\ln|x+1| + \\dfrac{5}{4}\\ln|x-3|\\right]_{1}^{4}",
          "explanation": "Evaluate the antiderivative between $x = {lo}$ and $x = {hi}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute and subtract",
          "workingLatex": "\\ln\\dfrac{25}{16}",
          "explanation": "Use logarithm laws to simplify the difference of logs.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Confirm exact form",
          "workingLatex": "\\ln\\dfrac{25}{16}",
          "explanation": "The answer is a single logarithm or simple multiple.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check poles",
          "workingLatex": "\\text{No zeros of denominator on } [1,4]",
          "explanation": "The integral exists because the integrand is continuous on the interval.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret",
          "workingLatex": "\\text{Signed area under the rational curve}",
          "explanation": "The definite integral gives the net area under $y = f(x)$ on the interval.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\ln\\dfrac{25}{16}",
          "explanation": "Exact value of the integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{1}^{4} \\dfrac{5}{(x+1)(x-3)}\\,dx = \\ln\\dfrac{25}{16}$."
    }
  },
  {
    "id": "al.y2.pure.integration-partial-fractions.q049",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "partial fractions",
      "constant numerator",
      "definite integral"
    ],
    "questionText": "Evaluate $\\displaystyle\\int_{0}^{3} \\dfrac{2}{(x-2)(x+3)}\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up partial fractions",
          "workingLatex": "\\dfrac{2}{(x-2)(x+3)} \\equiv \\dfrac{A}{(x-2)} + \\dfrac{B}{(x+3)}",
          "explanation": "A constant numerator still decomposes over distinct linear factors.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find $A$ and $B$",
          "workingLatex": "A = \\dfrac{2}{5},\\quad B = -\\dfrac{2}{5}",
          "explanation": "Use cover-up at each root of the denominator.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate",
          "workingLatex": "\\int \\left(\\dfrac{2}{5}/(x-2) - \\dfrac{2}{5}/(x+3)\\right) dx",
          "explanation": "Each term gives a logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the limits",
          "workingLatex": "\\left[\\dfrac{2}{5}\\ln|x-2| + -\\dfrac{2}{5}\\ln|x+3|\\right]_{0}^{3}",
          "explanation": "Evaluate the antiderivative between $x = {lo}$ and $x = {hi}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute and subtract",
          "workingLatex": "\\ln 3",
          "explanation": "Use logarithm laws to simplify the difference of logs.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Confirm exact form",
          "workingLatex": "\\ln 3",
          "explanation": "The answer is a single logarithm or simple multiple.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check poles",
          "workingLatex": "\\text{No zeros of denominator on } [0,3]",
          "explanation": "The integral exists because the integrand is continuous on the interval.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret",
          "workingLatex": "\\text{Signed area under the rational curve}",
          "explanation": "The definite integral gives the net area under $y = f(x)$ on the interval.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\ln 3",
          "explanation": "Exact value of the integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{0}^{3} \\dfrac{2}{(x-2)(x+3)}\\,dx = \\ln 3$."
    }
  },
  {
    "id": "al.y2.pure.integration-partial-fractions.q050",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "partial fractions",
      "constant numerator",
      "definite integral"
    ],
    "questionText": "Evaluate $\\displaystyle\\int_{3}^{6} \\dfrac{6}{(x-1)(x-2)}\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up partial fractions",
          "workingLatex": "\\dfrac{6}{(x-1)(x-2)} \\equiv \\dfrac{A}{(x-1)} + \\dfrac{B}{(x-2)}",
          "explanation": "A constant numerator still decomposes over distinct linear factors.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find $A$ and $B$",
          "workingLatex": "A = (-6),\\quad B = 6",
          "explanation": "Use cover-up at each root of the denominator.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate",
          "workingLatex": "\\int \\left((-6)/(x-1) + 6/(x-2)\\right) dx",
          "explanation": "Each term gives a logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the limits",
          "workingLatex": "\\left[(-6)\\ln|x-1| + 6\\ln|x-2|\\right]_{3}^{6}",
          "explanation": "Evaluate the antiderivative between $x = {lo}$ and $x = {hi}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute and subtract",
          "workingLatex": "\\ln 2",
          "explanation": "Use logarithm laws to simplify the difference of logs.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Confirm exact form",
          "workingLatex": "\\ln 2",
          "explanation": "The answer is a single logarithm or simple multiple.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check poles",
          "workingLatex": "\\text{No zeros of denominator on } [3,6]",
          "explanation": "The integral exists because the integrand is continuous on the interval.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret",
          "workingLatex": "\\text{Signed area under the rational curve}",
          "explanation": "The definite integral gives the net area under $y = f(x)$ on the interval.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\ln 2",
          "explanation": "Exact value of the integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{3}^{6} \\dfrac{6}{(x-1)(x-2)}\\,dx = \\ln 2$."
    }
  },
  {
    "id": "al.y2.pure.integration-partial-fractions.q051",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "tags": [
      "partial fractions",
      "improper fraction",
      "polynomial division",
      "integration"
    ],
    "questionText": "Find $\\displaystyle\\int \\dfrac{2x^2+3x+1}{x^2-x-2}\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Check if the fraction is improper",
          "workingLatex": "\\deg(\\text{num}) = 2,\\ \\deg(\\text{den}) = 2",
          "explanation": "When the numerator and denominator have the same degree, we must divide first.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Divide the numerator by the denominator",
          "workingLatex": "2x^2+3x+1 = 2(x^2-x-2) + (5x+5)",
          "explanation": "Polynomial division gives a quotient of 2 and a proper remainder.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite the integral",
          "workingLatex": "\\int \\dfrac{2x^2+3x+1}{x^2-x-2}\\,dx = \\int 2\\,dx + \\int \\dfrac{5x+5}{x^2-x-2}\\,dx",
          "explanation": "Split into a polynomial integral and a proper rational integral.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate the polynomial part",
          "workingLatex": "\\int 2\\,dx = 2x",
          "explanation": "The quotient integrates term by term.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Factorise and decompose the remainder",
          "workingLatex": "\\dfrac{5x+5}{(x+1)(x-2)} = 0/(x+1) + 5/(x-2)",
          "explanation": "Apply partial fractions to the proper remainder.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Integrate the logarithmic terms",
          "workingLatex": "0\\ln|x+1| + 5\\ln|x-2|",
          "explanation": "Each partial fraction integrates to a logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Combine all parts",
          "workingLatex": "2x + 0\\ln|x+1| + 5\\ln|x-2| + c",
          "explanation": "Add the polynomial and logarithmic parts with $+c$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify by differentiating",
          "workingLatex": "\\text{Check the derivative}",
          "explanation": "Differentiation should recover the original integrand.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Note on method",
          "workingLatex": "\\text{Division before decomposition}",
          "explanation": "Improper fractions always need division before partial fractions can be applied.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Alternative check",
          "workingLatex": "\\text{Expand partial fractions to match } \\dfrac{5x+5}{x^2-x-2}",
          "explanation": "Recombining confirms the decomposition is correct.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Domain",
          "workingLatex": "x \\neq -1, 2",
          "explanation": "State values excluded by the denominator.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Structure",
          "workingLatex": "\\text{Polynomial} + \\text{logs}",
          "explanation": "Final answer has a linear term plus logarithms.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Final answer",
          "workingLatex": "2x + 0\\ln|x+1| + 5\\ln|x-2| + c",
          "explanation": "Complete antiderivative.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\dfrac{2x^2+3x+1}{x^2-x-2}\\,dx = 2x + 0\\ln|x+1| + 5\\ln|x-2| + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-partial-fractions.q052",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "tags": [
      "partial fractions",
      "improper fraction",
      "polynomial division",
      "integration"
    ],
    "questionText": "Find $\\displaystyle\\int \\dfrac{3x^2+2x-1}{x^2-1}\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Check if the fraction is improper",
          "workingLatex": "\\deg(\\text{num}) = 2,\\ \\deg(\\text{den}) = 2",
          "explanation": "When the numerator and denominator have the same degree, we must divide first.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Divide the numerator by the denominator",
          "workingLatex": "3x^2+2x-1 = 3(x^2-1) + (2x+2)",
          "explanation": "Polynomial division gives a quotient of 3 and a proper remainder.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite the integral",
          "workingLatex": "\\int \\dfrac{3x^2+2x-1}{x^2-1}\\,dx = \\int 3\\,dx + \\int \\dfrac{2x+2}{x^2-1}\\,dx",
          "explanation": "Split into a polynomial integral and a proper rational integral.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate the polynomial part",
          "workingLatex": "\\int 3\\,dx = 3x",
          "explanation": "The quotient integrates term by term.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Factorise and decompose the remainder",
          "workingLatex": "\\dfrac{2x+2}{(x-1)(x+1)} = 2/(x-1) + 0/(x+1)",
          "explanation": "Apply partial fractions to the proper remainder.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Integrate the logarithmic terms",
          "workingLatex": "2\\ln|x-1| + 0\\ln|x+1|",
          "explanation": "Each partial fraction integrates to a logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Combine all parts",
          "workingLatex": "3x + 2\\ln|x-1| + 0\\ln|x+1| + c",
          "explanation": "Add the polynomial and logarithmic parts with $+c$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify by differentiating",
          "workingLatex": "\\text{Check the derivative}",
          "explanation": "Differentiation should recover the original integrand.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Note on method",
          "workingLatex": "\\text{Division before decomposition}",
          "explanation": "Improper fractions always need division before partial fractions can be applied.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Alternative check",
          "workingLatex": "\\text{Expand partial fractions to match } \\dfrac{2x+2}{x^2-1}",
          "explanation": "Recombining confirms the decomposition is correct.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Domain",
          "workingLatex": "x \\neq 1, -1",
          "explanation": "State values excluded by the denominator.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Structure",
          "workingLatex": "\\text{Polynomial} + \\text{logs}",
          "explanation": "Final answer has a linear term plus logarithms.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Final answer",
          "workingLatex": "3x + 2\\ln|x-1| + 0\\ln|x+1| + c",
          "explanation": "Complete antiderivative.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\dfrac{3x^2+2x-1}{x^2-1}\\,dx = 3x + 2\\ln|x-1| + 0\\ln|x+1| + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-partial-fractions.q053",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "tags": [
      "partial fractions",
      "improper fraction",
      "polynomial division",
      "integration"
    ],
    "questionText": "Find $\\displaystyle\\int \\dfrac{1x^2+3x+2}{x^2-x-2}\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Check if the fraction is improper",
          "workingLatex": "\\deg(\\text{num}) = 2,\\ \\deg(\\text{den}) = 2",
          "explanation": "When the numerator and denominator have the same degree, we must divide first.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Divide the numerator by the denominator",
          "workingLatex": "1x^2+3x+2 = 1(x^2-x-2) + (4x+4)",
          "explanation": "Polynomial division gives a quotient of 1 and a proper remainder.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite the integral",
          "workingLatex": "\\int \\dfrac{1x^2+3x+2}{x^2-x-2}\\,dx = \\int 1\\,dx + \\int \\dfrac{4x+4}{x^2-x-2}\\,dx",
          "explanation": "Split into a polynomial integral and a proper rational integral.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate the polynomial part",
          "workingLatex": "\\int 1\\,dx = 1x",
          "explanation": "The quotient integrates term by term.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Factorise and decompose the remainder",
          "workingLatex": "\\dfrac{4x+4}{(x+1)(x-2)} = 0/(x+1) + 4/(x-2)",
          "explanation": "Apply partial fractions to the proper remainder.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Integrate the logarithmic terms",
          "workingLatex": "0\\ln|x+1| + 4\\ln|x-2|",
          "explanation": "Each partial fraction integrates to a logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Combine all parts",
          "workingLatex": "1x + 0\\ln|x+1| + 4\\ln|x-2| + c",
          "explanation": "Add the polynomial and logarithmic parts with $+c$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify by differentiating",
          "workingLatex": "\\text{Check the derivative}",
          "explanation": "Differentiation should recover the original integrand.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Note on method",
          "workingLatex": "\\text{Division before decomposition}",
          "explanation": "Improper fractions always need division before partial fractions can be applied.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Alternative check",
          "workingLatex": "\\text{Expand partial fractions to match } \\dfrac{4x+4}{x^2-x-2}",
          "explanation": "Recombining confirms the decomposition is correct.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Domain",
          "workingLatex": "x \\neq -1, 2",
          "explanation": "State values excluded by the denominator.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Structure",
          "workingLatex": "\\text{Polynomial} + \\text{logs}",
          "explanation": "Final answer has a linear term plus logarithms.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Final answer",
          "workingLatex": "1x + 0\\ln|x+1| + 4\\ln|x-2| + c",
          "explanation": "Complete antiderivative.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\dfrac{1x^2+3x+2}{x^2-x-2}\\,dx = 1x + 0\\ln|x+1| + 4\\ln|x-2| + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-partial-fractions.q054",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "tags": [
      "partial fractions",
      "improper fraction",
      "polynomial division",
      "integration"
    ],
    "questionText": "Find $\\displaystyle\\int \\dfrac{2x^2+5x+3}{x^2-1}\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Check if the fraction is improper",
          "workingLatex": "\\deg(\\text{num}) = 2,\\ \\deg(\\text{den}) = 2",
          "explanation": "When the numerator and denominator have the same degree, we must divide first.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Divide the numerator by the denominator",
          "workingLatex": "2x^2+5x+3 = 2(x^2-1) + (5x+5)",
          "explanation": "Polynomial division gives a quotient of 2 and a proper remainder.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite the integral",
          "workingLatex": "\\int \\dfrac{2x^2+5x+3}{x^2-1}\\,dx = \\int 2\\,dx + \\int \\dfrac{5x+5}{x^2-1}\\,dx",
          "explanation": "Split into a polynomial integral and a proper rational integral.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate the polynomial part",
          "workingLatex": "\\int 2\\,dx = 2x",
          "explanation": "The quotient integrates term by term.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Factorise and decompose the remainder",
          "workingLatex": "\\dfrac{5x+5}{(x-1)(x+1)} = 5/(x-1) + 0/(x+1)",
          "explanation": "Apply partial fractions to the proper remainder.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Integrate the logarithmic terms",
          "workingLatex": "5\\ln|x-1| + 0\\ln|x+1|",
          "explanation": "Each partial fraction integrates to a logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Combine all parts",
          "workingLatex": "2x + 5\\ln|x-1| + 0\\ln|x+1| + c",
          "explanation": "Add the polynomial and logarithmic parts with $+c$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify by differentiating",
          "workingLatex": "\\text{Check the derivative}",
          "explanation": "Differentiation should recover the original integrand.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Note on method",
          "workingLatex": "\\text{Division before decomposition}",
          "explanation": "Improper fractions always need division before partial fractions can be applied.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Alternative check",
          "workingLatex": "\\text{Expand partial fractions to match } \\dfrac{5x+5}{x^2-1}",
          "explanation": "Recombining confirms the decomposition is correct.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Domain",
          "workingLatex": "x \\neq 1, -1",
          "explanation": "State values excluded by the denominator.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Structure",
          "workingLatex": "\\text{Polynomial} + \\text{logs}",
          "explanation": "Final answer has a linear term plus logarithms.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Final answer",
          "workingLatex": "2x + 5\\ln|x-1| + 0\\ln|x+1| + c",
          "explanation": "Complete antiderivative.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\dfrac{2x^2+5x+3}{x^2-1}\\,dx = 2x + 5\\ln|x-1| + 0\\ln|x+1| + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-partial-fractions.q055",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "exact",
    "tags": [
      "partial fractions",
      "repeated linear factor",
      "definite integral"
    ],
    "questionText": "Evaluate $\\displaystyle\\int_{0}^{1} \\dfrac{2x+3}{(x+1)^2}\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Decompose the integrand",
          "workingLatex": "\\dfrac{2x+3}{(x+1)^2} = 2/(x+1) + 1/(x+1)^2",
          "explanation": "Repeated linear factors need two terms in the decomposition.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find $A$ and $B$",
          "workingLatex": "A = 2,\\ B = 1",
          "explanation": "Use substitution and coefficient comparison.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate",
          "workingLatex": "\\left[2\\ln|x+1| - 1/(x+1)\\right]_{0}^{1}",
          "explanation": "Integrate each partial fraction before applying limits.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate at upper limit",
          "workingLatex": "x = 1",
          "explanation": "Substitute $x = {hi}$ into the antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate at lower limit",
          "workingLatex": "x = 0",
          "explanation": "Substitute $x = {lo}$ and subtract.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify",
          "workingLatex": "\\dfrac{3}{2}",
          "explanation": "Combine logarithms and fractions.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check continuity",
          "workingLatex": "\\text{Integrand continuous on } [0,1]",
          "explanation": "The repeated root must not lie inside the open interval.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Log law simplification",
          "workingLatex": "\\dfrac{3}{2}",
          "explanation": "Express as a single simplified exact value.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Final answer",
          "workingLatex": "\\dfrac{3}{2}",
          "explanation": "Exact definite integral.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Method summary",
          "workingLatex": "\\text{Decompose } \\rightarrow \\text{ integrate } \\rightarrow \\text{ evaluate}",
          "explanation": "Standard workflow for rational definite integrals.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Common error",
          "workingLatex": "\\text{Forgetting the } -\\dfrac{B}{x-a} \\text{ form}",
          "explanation": "The $(x-a)^{-2}$ term integrates with a negative power.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Numerical sense",
          "workingLatex": "\\text{Positive integrand } \\Rightarrow \\text{ positive integral}",
          "explanation": "Sanity-check the sign of the result.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Answer",
          "workingLatex": "\\dfrac{3}{2}",
          "explanation": "Confirmed.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{0}^{1} \\dfrac{2x+3}{(x+1)^2}\\,dx = \\dfrac{3}{2}$."
    }
  },
  {
    "id": "al.y2.pure.integration-partial-fractions.q056",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "exact",
    "tags": [
      "partial fractions",
      "repeated linear factor",
      "definite integral"
    ],
    "questionText": "Evaluate $\\displaystyle\\int_{2}^{4} \\dfrac{5x-2}{(x-1)^2}\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Decompose the integrand",
          "workingLatex": "\\dfrac{5x-2}{(x-1)^2} = 5/(x-1) + 3/(x-1)^2",
          "explanation": "Repeated linear factors need two terms in the decomposition.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find $A$ and $B$",
          "workingLatex": "A = 5,\\ B = 3",
          "explanation": "Use substitution and coefficient comparison.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate",
          "workingLatex": "\\left[5\\ln|x-1| - 3/(x-1)\\right]_{2}^{4}",
          "explanation": "Integrate each partial fraction before applying limits.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate at upper limit",
          "workingLatex": "x = 4",
          "explanation": "Substitute $x = {hi}$ into the antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate at lower limit",
          "workingLatex": "x = 2",
          "explanation": "Substitute $x = {lo}$ and subtract.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify",
          "workingLatex": "\\ln\\dfrac{9}{4} + \\dfrac{1}{3}",
          "explanation": "Combine logarithms and fractions.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check continuity",
          "workingLatex": "\\text{Integrand continuous on } [2,4]",
          "explanation": "The repeated root must not lie inside the open interval.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Log law simplification",
          "workingLatex": "\\ln\\dfrac{9}{4} + \\dfrac{1}{3}",
          "explanation": "Express as a single simplified exact value.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Final answer",
          "workingLatex": "\\ln\\dfrac{9}{4} + \\dfrac{1}{3}",
          "explanation": "Exact definite integral.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Method summary",
          "workingLatex": "\\text{Decompose } \\rightarrow \\text{ integrate } \\rightarrow \\text{ evaluate}",
          "explanation": "Standard workflow for rational definite integrals.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Common error",
          "workingLatex": "\\text{Forgetting the } -\\dfrac{B}{x-a} \\text{ form}",
          "explanation": "The $(x-a)^{-2}$ term integrates with a negative power.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Numerical sense",
          "workingLatex": "\\text{Positive integrand } \\Rightarrow \\text{ positive integral}",
          "explanation": "Sanity-check the sign of the result.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Answer",
          "workingLatex": "\\ln\\dfrac{9}{4} + \\dfrac{1}{3}",
          "explanation": "Confirmed.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{2}^{4} \\dfrac{5x-2}{(x-1)^2}\\,dx = \\ln\\dfrac{9}{4} + \\dfrac{1}{3}$."
    }
  },
  {
    "id": "al.y2.pure.integration-partial-fractions.q057",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "exact",
    "tags": [
      "partial fractions",
      "repeated linear factor",
      "definite integral"
    ],
    "questionText": "Evaluate $\\displaystyle\\int_{3}^{5} \\dfrac{3x+4}{(x-2)^2}\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Decompose the integrand",
          "workingLatex": "\\dfrac{3x+4}{(x-2)^2} = 3/(x-2) + 10/(x-2)^2",
          "explanation": "Repeated linear factors need two terms in the decomposition.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find $A$ and $B$",
          "workingLatex": "A = 3,\\ B = 10",
          "explanation": "Use substitution and coefficient comparison.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate",
          "workingLatex": "\\left[3\\ln|x-2| - 10/(x-2)\\right]_{3}^{5}",
          "explanation": "Integrate each partial fraction before applying limits.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate at upper limit",
          "workingLatex": "x = 5",
          "explanation": "Substitute $x = {hi}$ into the antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate at lower limit",
          "workingLatex": "x = 3",
          "explanation": "Substitute $x = {lo}$ and subtract.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify",
          "workingLatex": "\\ln\\dfrac{9}{4} - \\dfrac{1}{5}",
          "explanation": "Combine logarithms and fractions.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check continuity",
          "workingLatex": "\\text{Integrand continuous on } [3,5]",
          "explanation": "The repeated root must not lie inside the open interval.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Log law simplification",
          "workingLatex": "\\ln\\dfrac{9}{4} - \\dfrac{1}{5}",
          "explanation": "Express as a single simplified exact value.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Final answer",
          "workingLatex": "\\ln\\dfrac{9}{4} - \\dfrac{1}{5}",
          "explanation": "Exact definite integral.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Method summary",
          "workingLatex": "\\text{Decompose } \\rightarrow \\text{ integrate } \\rightarrow \\text{ evaluate}",
          "explanation": "Standard workflow for rational definite integrals.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Common error",
          "workingLatex": "\\text{Forgetting the } -\\dfrac{B}{x-a} \\text{ form}",
          "explanation": "The $(x-a)^{-2}$ term integrates with a negative power.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Numerical sense",
          "workingLatex": "\\text{Positive integrand } \\Rightarrow \\text{ positive integral}",
          "explanation": "Sanity-check the sign of the result.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Answer",
          "workingLatex": "\\ln\\dfrac{9}{4} - \\dfrac{1}{5}",
          "explanation": "Confirmed.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{3}^{5} \\dfrac{3x+4}{(x-2)^2}\\,dx = \\ln\\dfrac{9}{4} - \\dfrac{1}{5}$."
    }
  },
  {
    "id": "al.y2.pure.integration-partial-fractions.q058",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "exact",
    "tags": [
      "partial fractions",
      "repeated linear factor",
      "definite integral"
    ],
    "questionText": "Evaluate $\\displaystyle\\int_{0}^{1} \\dfrac{4x-7}{(x+2)^2}\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Decompose the integrand",
          "workingLatex": "\\dfrac{4x-7}{(x+2)^2} = 4/(x+2) + (-15)/(x+2)^2",
          "explanation": "Repeated linear factors need two terms in the decomposition.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find $A$ and $B$",
          "workingLatex": "A = 4,\\ B = (-15)",
          "explanation": "Use substitution and coefficient comparison.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate",
          "workingLatex": "\\left[4\\ln|x+2| - (-15)/(x+2)\\right]_{0}^{1}",
          "explanation": "Integrate each partial fraction before applying limits.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate at upper limit",
          "workingLatex": "x = 1",
          "explanation": "Substitute $x = {hi}$ into the antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate at lower limit",
          "workingLatex": "x = 0",
          "explanation": "Substitute $x = {lo}$ and subtract.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify",
          "workingLatex": "\\dfrac{5}{2}",
          "explanation": "Combine logarithms and fractions.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check continuity",
          "workingLatex": "\\text{Integrand continuous on } [0,1]",
          "explanation": "The repeated root must not lie inside the open interval.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Log law simplification",
          "workingLatex": "\\dfrac{5}{2}",
          "explanation": "Express as a single simplified exact value.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Final answer",
          "workingLatex": "\\dfrac{5}{2}",
          "explanation": "Exact definite integral.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Method summary",
          "workingLatex": "\\text{Decompose } \\rightarrow \\text{ integrate } \\rightarrow \\text{ evaluate}",
          "explanation": "Standard workflow for rational definite integrals.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Common error",
          "workingLatex": "\\text{Forgetting the } -\\dfrac{B}{x-a} \\text{ form}",
          "explanation": "The $(x-a)^{-2}$ term integrates with a negative power.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Numerical sense",
          "workingLatex": "\\text{Positive integrand } \\Rightarrow \\text{ positive integral}",
          "explanation": "Sanity-check the sign of the result.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Answer",
          "workingLatex": "\\dfrac{5}{2}",
          "explanation": "Confirmed.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{0}^{1} \\dfrac{4x-7}{(x+2)^2}\\,dx = \\dfrac{5}{2}$."
    }
  },
  {
    "id": "al.y2.pure.integration-partial-fractions.q059",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "exact",
    "tags": [
      "partial fractions",
      "area under curve",
      "definite integral"
    ],
    "questionText": "The curve $C$ has equation $y = \\dfrac{3x+5}{(x-1)(x+2)}$ for $x \\in [2,4]$. Given that $y > 0$ on this interval, find the area of the region bounded by $C$, the $x$-axis, and the lines $x = 2$ and $x = 4$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Relate area to integration",
          "workingLatex": "A = \\displaystyle\\int_{2}^{4} \\dfrac{3x+5}{(x-1)(x+2)}\\,dx",
          "explanation": "Area under a curve above the $x$-axis equals the definite integral of $y$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Confirm $y > 0$ on the interval",
          "workingLatex": "\\text{On } [2,4],\\ \\dfrac{3x+5}{(x-1)(x+2)} > 0",
          "explanation": "The integrand is positive throughout, so the integral gives the geometric area.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Decompose into partial fractions",
          "workingLatex": "\\dfrac{8}{3}/(x-1) + \\dfrac{1}{3}/(x+2)",
          "explanation": "Split before integrating.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate",
          "workingLatex": "\\left[\\dfrac{8}{3}\\ln|x-1| + \\dfrac{1}{3}\\ln|x+2|\\right]_{2}^{4}",
          "explanation": "Each term integrates to a logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate between limits",
          "workingLatex": "\\ln\\dfrac{27}{4}",
          "explanation": "Substitute and simplify using log laws.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Units",
          "workingLatex": "A = \\ln\\dfrac{27}{4} \\text{ square units}",
          "explanation": "Area is measured in square units.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Exact form",
          "workingLatex": "\\ln\\dfrac{27}{4}",
          "explanation": "Leave in exact logarithmic form.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Sketch interpretation",
          "workingLatex": "\\text{Region under a hyperbola-type curve}",
          "explanation": "Rational curves often have vertical asymptotes outside the interval.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify poles",
          "workingLatex": "\\text{Denominator zeros not in } (2,4)",
          "explanation": "Integration is valid because there are no discontinuities inside the interval.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Method",
          "workingLatex": "\\text{Partial fractions } \\rightarrow \\text{ definite integral}",
          "explanation": "Decomposition converts a rational area problem into logarithms.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Alternative",
          "workingLatex": "\\text{Could use substitution on each log term}",
          "explanation": "Once decomposed, each integral is a standard log form.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Check sign",
          "workingLatex": "\\text{Area must be positive}",
          "explanation": "A positive integrand on the interval gives positive area.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Final answer",
          "workingLatex": "A = \\ln\\dfrac{27}{4}",
          "explanation": "Area $= \\ln\\dfrac{27}{4}$ square units.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= \\ln\\dfrac{27}{4}$ square units."
    }
  },
  {
    "id": "al.y2.pure.integration-partial-fractions.q060",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "exact",
    "tags": [
      "partial fractions",
      "area under curve",
      "definite integral"
    ],
    "questionText": "The curve $C$ has equation $y = \\dfrac{2x+1}{(x+1)(x-3)}$ for $x \\in [1,3]$. Given that $y > 0$ on this interval, find the area of the region bounded by $C$, the $x$-axis, and the lines $x = 1$ and $x = 3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Relate area to integration",
          "workingLatex": "A = \\displaystyle\\int_{1}^{3} \\dfrac{2x+1}{(x+1)(x-3)}\\,dx",
          "explanation": "Area under a curve above the $x$-axis equals the definite integral of $y$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Confirm $y > 0$ on the interval",
          "workingLatex": "\\text{On } [1,3],\\ \\dfrac{2x+1}{(x+1)(x-3)} > 0",
          "explanation": "The integrand is positive throughout, so the integral gives the geometric area.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Decompose into partial fractions",
          "workingLatex": "\\dfrac{1}{4}/(x+1) + \\dfrac{7}{4}/(x-3)",
          "explanation": "Split before integrating.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate",
          "workingLatex": "\\left[\\dfrac{1}{4}\\ln|x+1| + \\dfrac{7}{4}\\ln|x-3|\\right]_{1}^{3}",
          "explanation": "Each term integrates to a logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate between limits",
          "workingLatex": "\\ln\\dfrac{9}{4}",
          "explanation": "Substitute and simplify using log laws.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Units",
          "workingLatex": "A = \\ln\\dfrac{9}{4} \\text{ square units}",
          "explanation": "Area is measured in square units.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Exact form",
          "workingLatex": "\\ln\\dfrac{9}{4}",
          "explanation": "Leave in exact logarithmic form.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Sketch interpretation",
          "workingLatex": "\\text{Region under a hyperbola-type curve}",
          "explanation": "Rational curves often have vertical asymptotes outside the interval.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify poles",
          "workingLatex": "\\text{Denominator zeros not in } (1,3)",
          "explanation": "Integration is valid because there are no discontinuities inside the interval.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Method",
          "workingLatex": "\\text{Partial fractions } \\rightarrow \\text{ definite integral}",
          "explanation": "Decomposition converts a rational area problem into logarithms.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Alternative",
          "workingLatex": "\\text{Could use substitution on each log term}",
          "explanation": "Once decomposed, each integral is a standard log form.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Check sign",
          "workingLatex": "\\text{Area must be positive}",
          "explanation": "A positive integrand on the interval gives positive area.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Final answer",
          "workingLatex": "A = \\ln\\dfrac{9}{4}",
          "explanation": "Area $= \\ln\\dfrac{9}{4}$ square units.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= \\ln\\dfrac{9}{4}$ square units."
    }
  },
  {
    "id": "al.y2.pure.integration-partial-fractions.q061",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "exact",
    "tags": [
      "partial fractions",
      "area under curve",
      "definite integral"
    ],
    "questionText": "The curve $C$ has equation $y = \\dfrac{4x-3}{(x-2)(x+1)}$ for $x \\in [1,2]$. Given that $y > 0$ on this interval, find the area of the region bounded by $C$, the $x$-axis, and the lines $x = 1$ and $x = 2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Relate area to integration",
          "workingLatex": "A = \\displaystyle\\int_{1}^{2} \\dfrac{4x-3}{(x-2)(x+1)}\\,dx",
          "explanation": "Area under a curve above the $x$-axis equals the definite integral of $y$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Confirm $y > 0$ on the interval",
          "workingLatex": "\\text{On } [1,2],\\ \\dfrac{4x-3}{(x-2)(x+1)} > 0",
          "explanation": "The integrand is positive throughout, so the integral gives the geometric area.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Decompose into partial fractions",
          "workingLatex": "\\dfrac{5}{3}/(x-2) + \\dfrac{7}{3}/(x+1)",
          "explanation": "Split before integrating.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate",
          "workingLatex": "\\left[\\dfrac{5}{3}\\ln|x-2| + \\dfrac{7}{3}\\ln|x+1|\\right]_{1}^{2}",
          "explanation": "Each term integrates to a logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate between limits",
          "workingLatex": "\\ln\\dfrac{9}{4}",
          "explanation": "Substitute and simplify using log laws.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Units",
          "workingLatex": "A = \\ln\\dfrac{9}{4} \\text{ square units}",
          "explanation": "Area is measured in square units.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Exact form",
          "workingLatex": "\\ln\\dfrac{9}{4}",
          "explanation": "Leave in exact logarithmic form.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Sketch interpretation",
          "workingLatex": "\\text{Region under a hyperbola-type curve}",
          "explanation": "Rational curves often have vertical asymptotes outside the interval.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify poles",
          "workingLatex": "\\text{Denominator zeros not in } (1,2)",
          "explanation": "Integration is valid because there are no discontinuities inside the interval.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Method",
          "workingLatex": "\\text{Partial fractions } \\rightarrow \\text{ definite integral}",
          "explanation": "Decomposition converts a rational area problem into logarithms.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Alternative",
          "workingLatex": "\\text{Could use substitution on each log term}",
          "explanation": "Once decomposed, each integral is a standard log form.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Check sign",
          "workingLatex": "\\text{Area must be positive}",
          "explanation": "A positive integrand on the interval gives positive area.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Final answer",
          "workingLatex": "A = \\ln\\dfrac{9}{4}",
          "explanation": "Area $= \\ln\\dfrac{9}{4}$ square units.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= \\ln\\dfrac{9}{4}$ square units."
    }
  },
  {
    "id": "al.y2.pure.integration-partial-fractions.q062",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "exact",
    "tags": [
      "partial fractions",
      "area under curve",
      "definite integral"
    ],
    "questionText": "The curve $C$ has equation $y = \\dfrac{1x+4}{(x+2)(x-4)}$ for $x \\in [2,5]$. Given that $y > 0$ on this interval, find the area of the region bounded by $C$, the $x$-axis, and the lines $x = 2$ and $x = 5$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Relate area to integration",
          "workingLatex": "A = \\displaystyle\\int_{2}^{5} \\dfrac{1x+4}{(x+2)(x-4)}\\,dx",
          "explanation": "Area under a curve above the $x$-axis equals the definite integral of $y$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Confirm $y > 0$ on the interval",
          "workingLatex": "\\text{On } [2,5],\\ \\dfrac{1x+4}{(x+2)(x-4)} > 0",
          "explanation": "The integrand is positive throughout, so the integral gives the geometric area.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Decompose into partial fractions",
          "workingLatex": "-\\dfrac{1}{3}/(x+2) + \\dfrac{4}{3}/(x-4)",
          "explanation": "Split before integrating.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate",
          "workingLatex": "\\left[-\\dfrac{1}{3}\\ln|x+2| + \\dfrac{4}{3}\\ln|x-4|\\right]_{2}^{5}",
          "explanation": "Each term integrates to a logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate between limits",
          "workingLatex": "\\ln\\dfrac{81}{25}",
          "explanation": "Substitute and simplify using log laws.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Units",
          "workingLatex": "A = \\ln\\dfrac{81}{25} \\text{ square units}",
          "explanation": "Area is measured in square units.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Exact form",
          "workingLatex": "\\ln\\dfrac{81}{25}",
          "explanation": "Leave in exact logarithmic form.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Sketch interpretation",
          "workingLatex": "\\text{Region under a hyperbola-type curve}",
          "explanation": "Rational curves often have vertical asymptotes outside the interval.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify poles",
          "workingLatex": "\\text{Denominator zeros not in } (2,5)",
          "explanation": "Integration is valid because there are no discontinuities inside the interval.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Method",
          "workingLatex": "\\text{Partial fractions } \\rightarrow \\text{ definite integral}",
          "explanation": "Decomposition converts a rational area problem into logarithms.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Alternative",
          "workingLatex": "\\text{Could use substitution on each log term}",
          "explanation": "Once decomposed, each integral is a standard log form.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Check sign",
          "workingLatex": "\\text{Area must be positive}",
          "explanation": "A positive integrand on the interval gives positive area.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Final answer",
          "workingLatex": "A = \\ln\\dfrac{81}{25}",
          "explanation": "Area $= \\ln\\dfrac{81}{25}$ square units.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= \\ln\\dfrac{81}{25}$ square units."
    }
  },
  {
    "id": "al.y2.pure.integration-partial-fractions.q063",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "tags": [
      "partial fractions",
      "multi-part",
      "hence",
      "definite integral"
    ],
    "questionText": "(a) Express $\\dfrac{3x+5}{(x-1)(x+2)}$ in partial fractions. (b) Hence find $\\displaystyle\\int_2^4 \\dfrac{3x+5}{(x-1)(x+2)}\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Part (a): set up partial fractions",
          "workingLatex": "\\dfrac{3x+5}{(x-1)(x+2)} \\equiv \\dfrac{A}{(x-1)} + \\dfrac{B}{(x+2)}",
          "explanation": "Write the form for distinct linear factors.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find $A$ by cover-up",
          "workingLatex": "A = \\dfrac{8}{3}",
          "explanation": "Substitute $x = 1$ to find $A$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find $B$ by cover-up",
          "workingLatex": "B = \\dfrac{1}{3}",
          "explanation": "Substitute $x = -2$ to find $B$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State partial fractions",
          "workingLatex": "\\dfrac{8}{3}/(x-1) + \\dfrac{1}{3}/(x+2)",
          "explanation": "Part (a) answer: the decomposition.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Part (b): write the integral using part (a)",
          "workingLatex": "\\int_{2}^{4} \\left(\\dfrac{8}{3}/(x-1) + \\dfrac{1}{3}/(x+2)\\right) dx",
          "explanation": "Replace the integrand with the partial fractions from part (a).",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Integrate",
          "workingLatex": "\\left[\\dfrac{8}{3}\\ln|x-1| + \\dfrac{1}{3}\\ln|x+2|\\right]_{2}^{4}",
          "explanation": "Integrate each logarithmic term.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate",
          "workingLatex": "\\ln 3",
          "explanation": "Substitute limits and simplify.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Part (a) result",
          "workingLatex": "\\dfrac{8}{3}/(x-1) + \\dfrac{1}{3}/(x+2)",
          "explanation": "Record the decomposition.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Part (b) result",
          "workingLatex": "\\ln 3",
          "explanation": "Record the integral value.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Hence link",
          "workingLatex": "\\text{Part (b) uses part (a) directly}",
          "explanation": "The partial fraction form from (a) is substituted into the integral in (b).",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Log laws",
          "workingLatex": "\\ln 3",
          "explanation": "Combine logarithms into a single expression.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Check interval",
          "workingLatex": "\\text{No poles on } [2,4]",
          "explanation": "Confirm the integral exists.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Final answers",
          "workingLatex": "\\text{(a) } \\dfrac{8}{3}/(x-1) + \\dfrac{1}{3}/(x+2),\\quad \\text{(b) } \\ln 3",
          "explanation": "Both parts completed.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Exam technique",
          "workingLatex": "\\text{Always do (a) carefully — (b) depends on it}",
          "explanation": "Errors in decomposition propagate to the integral.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Exact form",
          "workingLatex": "\\text{(b) } \\ln 3",
          "explanation": "Leave part (b) in exact form.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\dfrac{8}{3}/(x-1) + \\dfrac{1}{3}/(x+2)$. (b) $\\displaystyle\\int_{2}^{4} \\dfrac{3x+5}{(x-1)(x+2)}\\,dx = \\ln 3$."
    }
  },
  {
    "id": "al.y2.pure.integration-partial-fractions.q064",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "tags": [
      "partial fractions",
      "multi-part",
      "hence",
      "definite integral"
    ],
    "questionText": "(a) Express $\\dfrac{2x+7}{(x-1)(x+3)}$ in partial fractions. (b) Hence evaluate $\\displaystyle\\int_0^2 \\dfrac{2x+7}{(x-1)(x+3)}\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Part (a): set up partial fractions",
          "workingLatex": "\\dfrac{2x+7}{(x-1)(x+3)} \\equiv \\dfrac{A}{(x-1)} + \\dfrac{B}{(x+3)}",
          "explanation": "Write the form for distinct linear factors.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find $A$ by cover-up",
          "workingLatex": "A = \\dfrac{9}{4}",
          "explanation": "Substitute $x = 1$ to find $A$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find $B$ by cover-up",
          "workingLatex": "B = -\\dfrac{1}{4}",
          "explanation": "Substitute $x = -3$ to find $B$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State partial fractions",
          "workingLatex": "\\dfrac{9}{4}/(x-1) - \\dfrac{1}{4}/(x+3)",
          "explanation": "Part (a) answer: the decomposition.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Part (b): write the integral using part (a)",
          "workingLatex": "\\int_{0}^{2} \\left(\\dfrac{9}{4}/(x-1) - \\dfrac{1}{4}/(x+3)\\right) dx",
          "explanation": "Replace the integrand with the partial fractions from part (a).",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Integrate",
          "workingLatex": "\\left[\\dfrac{9}{4}\\ln|x-1| + -\\dfrac{1}{4}\\ln|x+3|\\right]_{0}^{2}",
          "explanation": "Integrate each logarithmic term.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate",
          "workingLatex": "\\ln\\dfrac{9}{2}",
          "explanation": "Substitute limits and simplify.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Part (a) result",
          "workingLatex": "\\dfrac{9}{4}/(x-1) - \\dfrac{1}{4}/(x+3)",
          "explanation": "Record the decomposition.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Part (b) result",
          "workingLatex": "\\ln\\dfrac{9}{2}",
          "explanation": "Record the integral value.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Hence link",
          "workingLatex": "\\text{Part (b) uses part (a) directly}",
          "explanation": "The partial fraction form from (a) is substituted into the integral in (b).",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Log laws",
          "workingLatex": "\\ln\\dfrac{9}{2}",
          "explanation": "Combine logarithms into a single expression.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Check interval",
          "workingLatex": "\\text{No poles on } [0,2]",
          "explanation": "Confirm the integral exists.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Final answers",
          "workingLatex": "\\text{(a) } \\dfrac{9}{4}/(x-1) - \\dfrac{1}{4}/(x+3),\\quad \\text{(b) } \\ln\\dfrac{9}{2}",
          "explanation": "Both parts completed.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Exam technique",
          "workingLatex": "\\text{Always do (a) carefully — (b) depends on it}",
          "explanation": "Errors in decomposition propagate to the integral.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Exact form",
          "workingLatex": "\\text{(b) } \\ln\\dfrac{9}{2}",
          "explanation": "Leave part (b) in exact form.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\dfrac{9}{4}/(x-1) - \\dfrac{1}{4}/(x+3)$. (b) $\\displaystyle\\int_{0}^{2} \\dfrac{2x+7}{(x-1)(x+3)}\\,dx = \\ln\\dfrac{9}{2}$."
    }
  },
  {
    "id": "al.y2.pure.integration-partial-fractions.q065",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "tags": [
      "partial fractions",
      "multi-part",
      "hence",
      "definite integral"
    ],
    "questionText": "(a) Split $\\dfrac{4x+1}{(x+1)(x-2)}$ into partial fractions. (b) Hence find $\\displaystyle\\int_1^3 \\dfrac{4x+1}{(x+1)(x-2)}\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Part (a): set up partial fractions",
          "workingLatex": "\\dfrac{4x+1}{(x+1)(x-2)} \\equiv \\dfrac{A}{(x+1)} + \\dfrac{B}{(x-2)}",
          "explanation": "Write the form for distinct linear factors.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find $A$ by cover-up",
          "workingLatex": "A = 1",
          "explanation": "Substitute $x = -1$ to find $A$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find $B$ by cover-up",
          "workingLatex": "B = 3",
          "explanation": "Substitute $x = 2$ to find $B$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State partial fractions",
          "workingLatex": "1/(x+1) + 3/(x-2)",
          "explanation": "Part (a) answer: the decomposition.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Part (b): write the integral using part (a)",
          "workingLatex": "\\int_{1}^{3} \\left(1/(x+1) + 3/(x-2)\\right) dx",
          "explanation": "Replace the integrand with the partial fractions from part (a).",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Integrate",
          "workingLatex": "\\left[1\\ln|x+1| + 3\\ln|x-2|\\right]_{1}^{3}",
          "explanation": "Integrate each logarithmic term.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate",
          "workingLatex": "\\ln\\dfrac{16}{9}",
          "explanation": "Substitute limits and simplify.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Part (a) result",
          "workingLatex": "1/(x+1) + 3/(x-2)",
          "explanation": "Record the decomposition.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Part (b) result",
          "workingLatex": "\\ln\\dfrac{16}{9}",
          "explanation": "Record the integral value.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Hence link",
          "workingLatex": "\\text{Part (b) uses part (a) directly}",
          "explanation": "The partial fraction form from (a) is substituted into the integral in (b).",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Log laws",
          "workingLatex": "\\ln\\dfrac{16}{9}",
          "explanation": "Combine logarithms into a single expression.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Check interval",
          "workingLatex": "\\text{No poles on } [1,3]",
          "explanation": "Confirm the integral exists.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Final answers",
          "workingLatex": "\\text{(a) } 1/(x+1) + 3/(x-2),\\quad \\text{(b) } \\ln\\dfrac{16}{9}",
          "explanation": "Both parts completed.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Exam technique",
          "workingLatex": "\\text{Always do (a) carefully — (b) depends on it}",
          "explanation": "Errors in decomposition propagate to the integral.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Exact form",
          "workingLatex": "\\text{(b) } \\ln\\dfrac{16}{9}",
          "explanation": "Leave part (b) in exact form.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $1/(x+1) + 3/(x-2)$. (b) $\\displaystyle\\int_{1}^{3} \\dfrac{4x+1}{(x+1)(x-2)}\\,dx = \\ln\\dfrac{16}{9}$."
    }
  },
  {
    "id": "al.y2.pure.integration-partial-fractions.q066",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "tags": [
      "partial fractions",
      "multi-part",
      "hence",
      "definite integral"
    ],
    "questionText": "(a) Express $\\dfrac{x+6}{(x+2)(x-4)}$ in partial fractions. (b) Hence evaluate $\\displaystyle\\int_2^5 \\dfrac{x+6}{(x+2)(x-4)}\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Part (a): set up partial fractions",
          "workingLatex": "\\dfrac{1x+6}{(x+2)(x-4)} \\equiv \\dfrac{A}{(x+2)} + \\dfrac{B}{(x-4)}",
          "explanation": "Write the form for distinct linear factors.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find $A$ by cover-up",
          "workingLatex": "A = -\\dfrac{2}{3}",
          "explanation": "Substitute $x = -2$ to find $A$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find $B$ by cover-up",
          "workingLatex": "B = \\dfrac{5}{3}",
          "explanation": "Substitute $x = 4$ to find $B$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State partial fractions",
          "workingLatex": "-\\dfrac{2}{3}/(x+2) + \\dfrac{5}{3}/(x-4)",
          "explanation": "Part (a) answer: the decomposition.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Part (b): write the integral using part (a)",
          "workingLatex": "\\int_{2}^{5} \\left(-\\dfrac{2}{3}/(x+2) + \\dfrac{5}{3}/(x-4)\\right) dx",
          "explanation": "Replace the integrand with the partial fractions from part (a).",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Integrate",
          "workingLatex": "\\left[-\\dfrac{2}{3}\\ln|x+2| + \\dfrac{5}{3}\\ln|x-4|\\right]_{2}^{5}",
          "explanation": "Integrate each logarithmic term.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate",
          "workingLatex": "\\dfrac{3}{2}\\ln 2",
          "explanation": "Substitute limits and simplify.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Part (a) result",
          "workingLatex": "-\\dfrac{2}{3}/(x+2) + \\dfrac{5}{3}/(x-4)",
          "explanation": "Record the decomposition.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Part (b) result",
          "workingLatex": "\\dfrac{3}{2}\\ln 2",
          "explanation": "Record the integral value.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Hence link",
          "workingLatex": "\\text{Part (b) uses part (a) directly}",
          "explanation": "The partial fraction form from (a) is substituted into the integral in (b).",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Log laws",
          "workingLatex": "\\dfrac{3}{2}\\ln 2",
          "explanation": "Combine logarithms into a single expression.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Check interval",
          "workingLatex": "\\text{No poles on } [2,5]",
          "explanation": "Confirm the integral exists.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Final answers",
          "workingLatex": "\\text{(a) } -\\dfrac{2}{3}/(x+2) + \\dfrac{5}{3}/(x-4),\\quad \\text{(b) } \\dfrac{3}{2}\\ln 2",
          "explanation": "Both parts completed.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Exam technique",
          "workingLatex": "\\text{Always do (a) carefully — (b) depends on it}",
          "explanation": "Errors in decomposition propagate to the integral.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Exact form",
          "workingLatex": "\\text{(b) } \\dfrac{3}{2}\\ln 2",
          "explanation": "Leave part (b) in exact form.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $-\\dfrac{2}{3}/(x+2) + \\dfrac{5}{3}/(x-4)$. (b) $\\displaystyle\\int_{2}^{5} \\dfrac{1x+6}{(x+2)(x-4)}\\,dx = \\dfrac{3}{2}\\ln 2$."
    }
  },
  {
    "id": "al.y2.pure.integration-partial-fractions.q067",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "exact",
    "tags": [
      "partial fractions",
      "improper fraction",
      "definite integral"
    ],
    "questionText": "Find $\\displaystyle\\int_3^5 \\dfrac{2x^2+3x+1}{x^2-x-2}\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise an improper fraction",
          "workingLatex": "\\deg(\\text{num}) = \\deg(\\text{den}) = 2",
          "explanation": "Divide before decomposing.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Divide",
          "workingLatex": "2x^2+3x+1 = 2(x^2-x-2) + 5x+5",
          "explanation": "Quotient is $2$; remainder is $5x+5$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Split the integral",
          "workingLatex": "\\int_3^5 2\\,dx + \\int_3^5 \\dfrac{5x+5}{(x-2)(x+1)}\\,dx",
          "explanation": "Factorise $x^2-x-2 = (x-2)(x+1)$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate the constant",
          "workingLatex": "\\int_3^5 2\\,dx = [2x]_3^5 = 4",
          "explanation": "The polynomial part gives $10-6=4$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the remainder",
          "workingLatex": "\\dfrac{5x+5}{(x-2)(x+1)} = \\dfrac{5(x+1)}{(x-2)(x+1)} = \\dfrac{5}{x-2}",
          "explanation": "The factor $(x+1)$ cancels, leaving a single simple fraction.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Integrate the rational part",
          "workingLatex": "\\int_3^5 \\dfrac{5}{x-2}\\,dx = \\left[5\\ln|x-2|\\right]_3^5",
          "explanation": "This is a standard logarithm integral.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the log part",
          "workingLatex": "5\\ln 3 - 5\\ln 1 = 5\\ln 3",
          "explanation": "Substitute $x=5$ and $x=3$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Combine",
          "workingLatex": "4 + 5\\ln 3",
          "explanation": "Add the polynomial and logarithmic contributions.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Interval check",
          "workingLatex": "x \\in [3,5] \\text{ avoids } x=2, x=-1",
          "explanation": "No discontinuities lie inside the interval of integration.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Alternative form",
          "workingLatex": "4 + \\ln 243",
          "explanation": "Since $5\\ln 3 = \\ln 3^5 = \\ln 243$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Method",
          "workingLatex": "\\text{Division + simplification + evaluation}",
          "explanation": "Full workflow for improper rational definite integrals.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Sanity check",
          "workingLatex": "\\text{Integrand positive on } [3,5]",
          "explanation": "A positive integrand gives a positive integral.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Final answer",
          "workingLatex": "4 + 5\\ln 3",
          "explanation": "Exact value of the definite integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_3^5 \\dfrac{2x^2+3x+1}{x^2-x-2}\\,dx = 4 + 5\\ln 3$."
    }
  },
  {
    "id": "al.y2.pure.integration-partial-fractions.q068",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "exact",
    "tags": [
      "partial fractions",
      "three linear factors",
      "definite integral"
    ],
    "questionText": "Evaluate $\\displaystyle\\int_1^2 \\dfrac{3}{x(x+1)(x+2)}\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Decompose into three partial fractions",
          "workingLatex": "\\dfrac{3}{x(x+1)(x+2)} \\equiv \\dfrac{A}{x} + \\dfrac{B}{x+1} + \\dfrac{C}{x+2}",
          "explanation": "Three distinct linear factors need three terms.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Cover-up values",
          "workingLatex": "A = \\dfrac{3}{2},\\quad B = -3,\\quad C = \\dfrac{3}{2}",
          "explanation": "Substitute $x=0$, $x=-1$, and $x=-2$ in turn.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate",
          "workingLatex": "\\left[\\dfrac{3}{2}\\ln|x| - 3\\ln|x+1| + \\dfrac{3}{2}\\ln|x+2|\\right]_1^2",
          "explanation": "Each partial fraction integrates to a logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate at $x = 2$",
          "workingLatex": "\\dfrac{3}{2}\\ln 2 - 3\\ln 3 + \\dfrac{3}{2}\\ln 4",
          "explanation": "Substitute the upper limit.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate at $x = 1$",
          "workingLatex": "-3\\ln 2 + \\dfrac{3}{2}\\ln 3",
          "explanation": "Substitute the lower limit.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify using log laws",
          "workingLatex": "\\dfrac{15}{2}\\ln 2 - \\dfrac{9}{2}\\ln 3",
          "explanation": "Use $\\ln 4 = 2\\ln 2$ and collect like terms.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Alternative form",
          "workingLatex": "\\dfrac{3}{2}\\ln\\dfrac{32}{27}",
          "explanation": "Factor out $\\dfrac{3}{2}$ and combine into a single logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interval validity",
          "workingLatex": "x \\in [1,2] \\Rightarrow \\text{no zeros of denominator}",
          "explanation": "The integrand is continuous on the interval.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Alternative form",
          "workingLatex": "\\dfrac{3}{2}\\ln\\dfrac{32}{27}",
          "explanation": "Equivalent single-logarithm form.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Method summary",
          "workingLatex": "\\text{Three cover-ups, integrate, evaluate}",
          "explanation": "Standard extension of the two-factor case.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Sign check",
          "workingLatex": "\\text{Integrand positive on } [1,2]",
          "explanation": "A positive integrand gives a positive integral.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Exact answer",
          "workingLatex": "\\dfrac{15}{2}\\ln 2 - \\dfrac{9}{2}\\ln 3",
          "explanation": "Simplest exact form.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Final answer",
          "workingLatex": "\\dfrac{15}{2}\\ln 2 - \\dfrac{9}{2}\\ln 3",
          "explanation": "Confirmed.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_1^2 \\dfrac{3}{x(x+1)(x+2)}\\,dx = \\dfrac{15}{2}\\ln 2 - \\dfrac{9}{2}\\ln 3$."
    }
  },
  {
    "id": "al.y2.pure.integration-partial-fractions.q069",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "written",
    "tags": [
      "partial fractions",
      "repeated linear factor",
      "multi-part",
      "hence"
    ],
    "questionText": "(a) Express $\\dfrac{3x+4}{(x+2)^2}$ in partial fractions. (b) Hence find $\\displaystyle\\int_1^2 \\dfrac{3x+4}{(x+2)^2}\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Part (a): form for repeated factor",
          "workingLatex": "\\dfrac{3x+4}{(x+2)^2} \\equiv \\dfrac{A}{x+2} + \\dfrac{B}{(x+2)^2}",
          "explanation": "Include both powers of $(x+2)$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Clear denominators",
          "workingLatex": "3x+4 = A(x+2) + B",
          "explanation": "Multiply by $(x+2)^2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find $B$ at $x = -2$",
          "workingLatex": "3(-2)+4 = B \\Rightarrow B = -2",
          "explanation": "Substitute the root to isolate $B$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find $A$",
          "workingLatex": "A = 3",
          "explanation": "Compare coefficients of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Partial fractions",
          "workingLatex": "\\dfrac{3}{x+2} - \\dfrac{2}{(x+2)^2}",
          "explanation": "Part (a) complete.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Part (b): integrate",
          "workingLatex": "\\int_1^2 \\left(\\dfrac{3}{x+2} - \\dfrac{2}{(x+2)^2}\\right) dx",
          "explanation": "Use the decomposition from (a).",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Antiderivative",
          "workingLatex": "\\left[3\\ln|x+2| + \\dfrac{2}{x+2}\\right]_1^2",
          "explanation": "Log plus $\\dfrac{2}{x+2}$ from integrating $-2(x+2)^{-2}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Evaluate",
          "workingLatex": "3\\ln\\dfrac{4}{3} + \\dfrac{2}{4} - \\dfrac{2}{3} = 3\\ln\\dfrac{4}{3} - \\dfrac{1}{6}",
          "explanation": "Substitute $x=2$ and $x=1$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Part (a) answer",
          "workingLatex": "\\dfrac{3}{x+2} - \\dfrac{2}{(x+2)^2}",
          "explanation": "Decomposition.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Part (b) answer",
          "workingLatex": "3\\ln\\dfrac{4}{3} - \\dfrac{1}{6}",
          "explanation": "Definite integral.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check interval",
          "workingLatex": "[1,2] \\text{ avoids } x=-2",
          "explanation": "No discontinuity on the interval.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Integration of $(x+2)^{-2}$",
          "workingLatex": "\\int -2(x+2)^{-2}dx = \\dfrac{2}{x+2}",
          "explanation": "Power $-2$ gives $-1$ exponent after integrating.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Exam tip",
          "workingLatex": "\\text{(a) decomposition unlocks (b)}",
          "explanation": "Carry (a) forward carefully.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Exact form",
          "workingLatex": "3\\ln\\dfrac{4}{3} - \\dfrac{1}{6}",
          "explanation": "Leave in exact form.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Final",
          "workingLatex": "\\text{(a) } \\dfrac{3}{x+2} - \\dfrac{2}{(x+2)^2},\\quad \\text{(b) } 3\\ln\\dfrac{4}{3} - \\dfrac{1}{6}",
          "explanation": "Both parts answered.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\dfrac{3}{x+2} - \\dfrac{2}{(x+2)^2}$. (b) $\\displaystyle\\int_1^2 \\dfrac{3x+4}{(x+2)^2}\\,dx = 3\\ln\\dfrac{4}{3} - \\dfrac{1}{6}$."
    }
  },
  {
    "id": "al.y2.pure.integration-partial-fractions.q070",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "tags": [
      "partial fractions",
      "improper fraction",
      "area under curve",
      "multi-part"
    ],
    "questionText": "The curve $C$ has equation $y = \\dfrac{3x^2+2x+1}{x^2-1}$ for $x > 1$. (a) Show that the integrand can be written in the form $3 + \\dfrac{2x+4}{x^2-1}$. (b) Express $\\dfrac{2x+4}{x^2-1}$ in partial fractions. (c) Hence find the area of the region bounded by $C$, the $x$-axis, and the lines $x = 2$ and $x = 4$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Part (a): divide",
          "workingLatex": "3x^2+2x+1 = 3(x^2-1) + (2x+4)",
          "explanation": "Polynomial division gives quotient $3$ and remainder $2x+4$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Confirm the form",
          "workingLatex": "\\dfrac{3x^2+2x+1}{x^2-1} = 3 + \\dfrac{2x+4}{x^2-1}",
          "explanation": "The integrand splits into a constant and a proper fraction.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Part (b): factorise",
          "workingLatex": "x^2-1 = (x-1)(x+1)",
          "explanation": "Difference of two squares.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set up partial fractions",
          "workingLatex": "\\dfrac{2x+4}{(x-1)(x+1)} \\equiv \\dfrac{A}{x-1} + \\dfrac{B}{x+1}",
          "explanation": "Two distinct linear factors.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Cover-up",
          "workingLatex": "A = 3,\\quad B = -1",
          "explanation": "At $x=1$: $A=3$; at $x=-1$: $B=-1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Partial fractions",
          "workingLatex": "\\dfrac{3}{x-1} - \\dfrac{1}{x+1}",
          "explanation": "Part (b) complete.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Part (c): set up area",
          "workingLatex": "A = \\displaystyle\\int_2^4 \\left(3 + \\dfrac{3}{x-1} - \\dfrac{1}{x+1}\\right) dx",
          "explanation": "Use parts (a) and (b) to write the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Integrate",
          "workingLatex": "\\left[3x + 3\\ln|x-1| - \\ln|x+1|\\right]_2^4",
          "explanation": "Integrate term by term.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Evaluate polynomial part",
          "workingLatex": "[3x]_2^4 = 6",
          "explanation": "$3(4) - 3(2) = 6$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Evaluate log part",
          "workingLatex": "3\\ln 3 - \\ln\\dfrac{5}{3} = \\ln 27 - \\ln\\dfrac{5}{3} = \\ln\\dfrac{81}{5}",
          "explanation": "Combine logarithms at $x=4$ and $x=2$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Total area",
          "workingLatex": "6 + \\ln\\dfrac{81}{5}",
          "explanation": "Add polynomial and logarithmic contributions.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Check $y > 0$",
          "workingLatex": "x \\in [2,4] \\Rightarrow y > 0",
          "explanation": "The integrand is positive, so the integral is the geometric area.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Poles",
          "workingLatex": "x \\neq \\pm 1; \\text{ interval } [2,4] \\text{ is safe}",
          "explanation": "No discontinuities in the interval.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Parts summary",
          "workingLatex": "\\text{(a) division, (b) decomposition, (c) integration}",
          "explanation": "Three linked techniques.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Final answer",
          "workingLatex": "A = 6 + \\ln\\dfrac{81}{5}",
          "explanation": "Area in exact form.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "Units",
          "workingLatex": "\\text{square units}",
          "explanation": "Area measurement.",
          "diagram": null
        },
        {
          "stepNumber": 17,
          "description": "Method efficiency",
          "workingLatex": "\\text{Hence structure avoids redoing work}",
          "explanation": "Each part feeds into the next.",
          "diagram": null
        },
        {
          "stepNumber": 18,
          "description": "Alternative log form",
          "workingLatex": "6 + \\ln 81 - \\ln 5",
          "explanation": "Equivalent expression.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\dfrac{3x^2+2x+1}{x^2-1} = 3 + \\dfrac{2x+4}{x^2-1}$. (b) $\\dfrac{2x+4}{x^2-1} = \\dfrac{3}{x-1} - \\dfrac{1}{x+1}$. (c) Area $= 6 + \\ln\\dfrac{81}{5}$ square units."
    }
  }
];
