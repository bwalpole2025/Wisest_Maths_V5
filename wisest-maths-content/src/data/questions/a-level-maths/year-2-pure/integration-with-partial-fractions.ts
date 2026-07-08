import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-partial-fractions.q001",
    "tags": [],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "questionText": "Find $\\displaystyle\\int \\dfrac{1}{(x+1)(x+2)}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factorise the denominator",
          "workingLatex": "(x+1)(x+2)",
          "explanation": "Distinct linear factors in the denominator.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up partial fractions",
          "workingLatex": "\\dfrac{1}{(x+1)(x+2)} = \\dfrac{A}{x+1} + \\dfrac{B}{x+2}",
          "explanation": "Assume partial fractions over distinct linear factors.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for the constants",
          "workingLatex": "1 = A(x+2) + B(x+1) \\Rightarrow A=1,\\; B=-1",
          "explanation": "Multiply through and compare coefficients or substitute convenient values.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the partial fraction form",
          "workingLatex": "\\dfrac{1}{x+1} - \\dfrac{1}{x+2}",
          "explanation": "Decomposed form ready to integrate.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate term by term",
          "workingLatex": "\\ln|x+1| - \\ln|x+2| + c",
          "explanation": "Integrate each reciprocal term.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine logarithms",
          "workingLatex": "\\ln\\left|\\dfrac{x+1}{x+2}\\right| + c",
          "explanation": "Combine using $\\ln a - \\ln b = \\ln(a/b)$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int \\dfrac{1}{(x+1)(x+2)}\\,dx = \\ln\\left|\\dfrac{x+1}{x+2}\\right| + c",
          "explanation": "Include $+c$ for indefinite integrals.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\dfrac{1}{(x+1)(x+2)}\\,dx = \\ln\\left|\\dfrac{x+1}{x+2}\\right| + c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-partial-fractions.q002",
    "tags": [],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "questionText": "Find $\\displaystyle\\int \\dfrac{1}{(x-1)(x+3)}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factorise the denominator",
          "workingLatex": "(x-1)(x+3)",
          "explanation": "Factorised denominator.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up partial fractions",
          "workingLatex": "\\dfrac{A}{x-1} + \\dfrac{B}{x+3}",
          "explanation": "Standard setup.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for the constants",
          "workingLatex": "A = \\dfrac{1}{4},\\; B = -\\dfrac{1}{4}",
          "explanation": "Cover-up: $x=1$ gives $A=1/4$; $x=-3$ gives $B=-1/4$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the partial fraction form",
          "workingLatex": "\\dfrac{1}{4(x-1)} - \\dfrac{1}{4(x+3)}",
          "explanation": "Partial fractions found.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate term by term",
          "workingLatex": "\\dfrac{1}{4}\\ln|x-1| - \\dfrac{1}{4}\\ln|x+3| + c",
          "explanation": "Integrate each term.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine logarithms",
          "workingLatex": "\\dfrac{1}{4}\\ln\\left|\\dfrac{x-1}{x+3}\\right| + c",
          "explanation": "Simplified log form.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int \\dfrac{1}{(x-1)(x+3)}\\,dx = \\dfrac{1}{4}\\ln\\left|\\dfrac{x-1}{x+3}\\right| + c",
          "explanation": "Include $+c$ for indefinite integrals.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\dfrac{1}{(x-1)(x+3)}\\,dx = \\dfrac{1}{4}\\ln\\left|\\dfrac{x-1}{x+3}\\right| + c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-partial-fractions.q003",
    "tags": [],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "questionText": "Find $\\displaystyle\\int \\dfrac{1}{x^{2}-1}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factorise the denominator",
          "workingLatex": "x^{2}-1 = (x-1)(x+1)",
          "explanation": "Difference of squares.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up partial fractions",
          "workingLatex": "\\dfrac{A}{x-1} + \\dfrac{B}{x+1}",
          "explanation": "Distinct linear factors.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for the constants",
          "workingLatex": "A = \\dfrac{1}{2},\\; B = -\\dfrac{1}{2}",
          "explanation": "Solve for constants.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the partial fraction form",
          "workingLatex": "\\dfrac{1}{2(x-1)} - \\dfrac{1}{2(x+1)}",
          "explanation": "Decomposed.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate term by term",
          "workingLatex": "\\dfrac{1}{2}\\ln|x-1| - \\dfrac{1}{2}\\ln|x+1| + c",
          "explanation": "Integrate.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine logarithms",
          "workingLatex": "\\dfrac{1}{2}\\ln\\left|\\dfrac{x-1}{x+1}\\right| + c",
          "explanation": "Log law simplification.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int \\dfrac{1}{x^{2}-1}\\,dx = \\dfrac{1}{2}\\ln\\left|\\dfrac{x-1}{x+1}\\right| + c",
          "explanation": "Include $+c$ for indefinite integrals.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\dfrac{1}{x^{2}-1}\\,dx = \\dfrac{1}{2}\\ln\\left|\\dfrac{x-1}{x+1}\\right| + c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-partial-fractions.q004",
    "tags": [],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "questionText": "Find $\\displaystyle\\int \\dfrac{2}{(x+2)(x-3)}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factorise the denominator",
          "workingLatex": "(x+2)(x-3)",
          "explanation": "Linear factors.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up partial fractions",
          "workingLatex": "\\dfrac{A}{x+2} + \\dfrac{B}{x-3}",
          "explanation": "Setup.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for the constants",
          "workingLatex": "A = -\\dfrac{2}{5},\\; B = \\dfrac{2}{5}",
          "explanation": "Cover-up method.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the partial fraction form",
          "workingLatex": "\\dfrac{2}{5(x-3)} - \\dfrac{2}{5(x+2)}",
          "explanation": "Form found.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate term by term",
          "workingLatex": "\\dfrac{2}{5}\\ln|x-3| - \\dfrac{2}{5}\\ln|x+2| + c",
          "explanation": "Integrate.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine logarithms",
          "workingLatex": "\\dfrac{2}{5}\\ln\\left|\\dfrac{x-3}{x+2}\\right| + c",
          "explanation": "Combine logs.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int \\dfrac{2}{(x+2)(x-3)}\\,dx = \\dfrac{2}{5}\\ln\\left|\\dfrac{x-3}{x+2}\\right| + c",
          "explanation": "Include $+c$ for indefinite integrals.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\dfrac{2}{(x+2)(x-3)}\\,dx = \\dfrac{2}{5}\\ln\\left|\\dfrac{x-3}{x+2}\\right| + c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-partial-fractions.q005",
    "tags": [],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "questionText": "Find $\\displaystyle\\int \\dfrac{3}{x^{2}-4}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factorise the denominator",
          "workingLatex": "x^{2}-4 = (x-2)(x+2)",
          "explanation": "Factorise.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up partial fractions",
          "workingLatex": "\\dfrac{A}{x-2} + \\dfrac{B}{x+2}",
          "explanation": "Setup.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for the constants",
          "workingLatex": "A = \\dfrac{3}{4},\\; B = -\\dfrac{3}{4}",
          "explanation": "Constants.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the partial fraction form",
          "workingLatex": "\\dfrac{3}{4(x-2)} - \\dfrac{3}{4(x+2)}",
          "explanation": "Decomposed.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate term by term",
          "workingLatex": "\\dfrac{3}{4}\\ln|x-2| - \\dfrac{3}{4}\\ln|x+2| + c",
          "explanation": "Integrate.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine logarithms",
          "workingLatex": "\\dfrac{3}{4}\\ln\\left|\\dfrac{x-2}{x+2}\\right| + c",
          "explanation": "Simplify.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int \\dfrac{3}{x^{2}-4}\\,dx = \\dfrac{3}{4}\\ln\\left|\\dfrac{x-2}{x+2}\\right| + c",
          "explanation": "Include $+c$ for indefinite integrals.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\dfrac{3}{x^{2}-4}\\,dx = \\dfrac{3}{4}\\ln\\left|\\dfrac{x-2}{x+2}\\right| + c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-partial-fractions.q006",
    "tags": [],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "questionText": "Find $\\displaystyle\\int \\dfrac{1}{(x-2)(x+5)}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factorise the denominator",
          "workingLatex": "(x-2)(x+5)",
          "explanation": "Distinct factors.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up partial fractions",
          "workingLatex": "\\dfrac{A}{x-2} + \\dfrac{B}{x+5}",
          "explanation": "Setup.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for the constants",
          "workingLatex": "A = \\dfrac{1}{7},\\; B = -\\dfrac{1}{7}",
          "explanation": "Solve.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the partial fraction form",
          "workingLatex": "\\dfrac{1}{7(x-2)} - \\dfrac{1}{7(x+5)}",
          "explanation": "Form.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate term by term",
          "workingLatex": "\\dfrac{1}{7}\\ln|x-2| - \\dfrac{1}{7}\\ln|x+5| + c",
          "explanation": "Integrate.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine logarithms",
          "workingLatex": "\\dfrac{1}{7}\\ln\\left|\\dfrac{x-2}{x+5}\\right| + c",
          "explanation": "Combine.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int \\dfrac{1}{(x-2)(x+5)}\\,dx = \\dfrac{1}{7}\\ln\\left|\\dfrac{x-2}{x+5}\\right| + c",
          "explanation": "Include $+c$ for indefinite integrals.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\dfrac{1}{(x-2)(x+5)}\\,dx = \\dfrac{1}{7}\\ln\\left|\\dfrac{x-2}{x+5}\\right| + c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-partial-fractions.q007",
    "tags": [],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "questionText": "Find $\\displaystyle\\int \\dfrac{4}{x^{2}-9}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factorise the denominator",
          "workingLatex": "x^{2}-9=(x-3)(x+3)",
          "explanation": "Factorise.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up partial fractions",
          "workingLatex": "\\dfrac{A}{x-3}+\\dfrac{B}{x+3}",
          "explanation": "Setup.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for the constants",
          "workingLatex": "A=\\dfrac{2}{3},\\;B=-\\dfrac{2}{3}",
          "explanation": "Constants.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the partial fraction form",
          "workingLatex": "\\dfrac{2}{3(x-3)}-\\dfrac{2}{3(x+3)}",
          "explanation": "Decomposed.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate term by term",
          "workingLatex": "\\dfrac{2}{3}\\ln|x-3|-\\dfrac{2}{3}\\ln|x+3|+c",
          "explanation": "Integrate.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine logarithms",
          "workingLatex": "\\dfrac{2}{3}\\ln\\left|\\dfrac{x-3}{x+3}\\right|+c",
          "explanation": "Simplify.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int \\dfrac{4}{x^{2}-9}\\,dx = \\dfrac{2}{3}\\ln\\left|\\dfrac{x-3}{x+3}\\right|+c",
          "explanation": "Include $+c$ for indefinite integrals.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\dfrac{4}{x^{2}-9}\\,dx = \\dfrac{2}{3}\\ln\\left|\\dfrac{x-3}{x+3}\\right|+c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-partial-fractions.q008",
    "tags": [],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "questionText": "Find $\\displaystyle\\int \\dfrac{1}{(x+1)(x+4)}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factorise the denominator",
          "workingLatex": "(x+1)(x+4)",
          "explanation": "Linear factors.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up partial fractions",
          "workingLatex": "\\dfrac{A}{x+1}+\\dfrac{B}{x+4}",
          "explanation": "Setup.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for the constants",
          "workingLatex": "A=\\dfrac{1}{3},\\;B=-\\dfrac{1}{3}",
          "explanation": "Solve.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the partial fraction form",
          "workingLatex": "\\dfrac{1}{3(x+1)}-\\dfrac{1}{3(x+4)}",
          "explanation": "Form.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate term by term",
          "workingLatex": "\\dfrac{1}{3}\\ln|x+1|-\\dfrac{1}{3}\\ln|x+4|+c",
          "explanation": "Integrate.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine logarithms",
          "workingLatex": "\\dfrac{1}{3}\\ln\\left|\\dfrac{x+1}{x+4}\\right|+c",
          "explanation": "Combine.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int \\dfrac{1}{(x+1)(x+4)}\\,dx = \\dfrac{1}{3}\\ln\\left|\\dfrac{x+1}{x+4}\\right|+c",
          "explanation": "Include $+c$ for indefinite integrals.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\dfrac{1}{(x+1)(x+4)}\\,dx = \\dfrac{1}{3}\\ln\\left|\\dfrac{x+1}{x+4}\\right|+c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-partial-fractions.q009",
    "tags": [],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "questionText": "Find $\\displaystyle\\int \\dfrac{x+3}{x^{2}+3x+2}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factorise the denominator",
          "workingLatex": "x^{2}+3x+2=(x+1)(x+2)",
          "explanation": "Factorise quadratic denominator.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up partial fractions",
          "workingLatex": "\\dfrac{x+3}{(x+1)(x+2)}=\\dfrac{A}{x+1}+\\dfrac{B}{x+2}",
          "explanation": "Linear numerator over distinct factors.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for the constants",
          "workingLatex": "A=2,\\;B=-1",
          "explanation": "Substitute $x=-1$ and $x=-2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the partial fraction form",
          "workingLatex": "\\dfrac{2}{x+1}-\\dfrac{1}{x+2}",
          "explanation": "Decomposed.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate term by term",
          "workingLatex": "2\\ln|x+1|-\\ln|x+2|+c",
          "explanation": "Integrate.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine logarithms",
          "workingLatex": "\\ln\\left|\\dfrac{(x+1)^{2}}{x+2}\\right|+c",
          "explanation": "Log laws.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int \\dfrac{x+3}{x^{2}+3x+2}\\,dx = \\ln\\left|\\dfrac{(x+1)^{2}}{x+2}\\right|+c",
          "explanation": "Include $+c$ for indefinite integrals.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check the fraction is proper",
          "workingLatex": "\\text{deg(top)} < \\text{deg(bottom)}",
          "explanation": "If not, divide first using algebraic division.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Factorise the denominator fully",
          "workingLatex": "\\text{Linear and repeated factors}",
          "explanation": "Partial fractions need the denominator completely factorised.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\dfrac{x+3}{x^{2}+3x+2}\\,dx = \\ln\\left|\\dfrac{(x+1)^{2}}{x+2}\\right|+c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-partial-fractions.q010",
    "tags": [],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "questionText": "Find $\\displaystyle\\int \\dfrac{2x+1}{x^{2}-x-2}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factorise the denominator",
          "workingLatex": "x^{2}-x-2=(x-2)(x+1)",
          "explanation": "Factorise.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up partial fractions",
          "workingLatex": "\\dfrac{A}{x-2}+\\dfrac{B}{x+1}",
          "explanation": "Setup.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for the constants",
          "workingLatex": "A=\\dfrac{5}{3},\\;B=\\dfrac{1}{3}",
          "explanation": "Solve.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the partial fraction form",
          "workingLatex": "\\dfrac{5}{3(x-2)}+\\dfrac{1}{3(x+1)}",
          "explanation": "Form.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate term by term",
          "workingLatex": "\\dfrac{5}{3}\\ln|x-2|+\\dfrac{1}{3}\\ln|x+1|+c",
          "explanation": "Integrate.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine logarithms",
          "workingLatex": "\\dfrac{1}{3}\\ln|(x-2)^{5}(x+1)|+c",
          "explanation": "Combine.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int \\dfrac{2x+1}{x^{2}-x-2}\\,dx = \\dfrac{1}{3}\\ln|(x-2)^{5}(x+1)|+c",
          "explanation": "Include $+c$ for indefinite integrals.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check the fraction is proper",
          "workingLatex": "\\text{deg(top)} < \\text{deg(bottom)}",
          "explanation": "If not, divide first using algebraic division.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Factorise the denominator fully",
          "workingLatex": "\\text{Linear and repeated factors}",
          "explanation": "Partial fractions need the denominator completely factorised.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\dfrac{2x+1}{x^{2}-x-2}\\,dx = \\dfrac{1}{3}\\ln|(x-2)^{5}(x+1)|+c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-partial-fractions.q011",
    "tags": [],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "questionText": "Find $\\displaystyle\\int \\dfrac{3x-1}{x^{2}-4}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factorise the denominator",
          "workingLatex": "x^{2}-4=(x-2)(x+2)",
          "explanation": "Factorise.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up partial fractions",
          "workingLatex": "\\dfrac{A}{x-2}+\\dfrac{B}{x+2}",
          "explanation": "Setup.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for the constants",
          "workingLatex": "A=\\dfrac{5}{4},\\;B=\\dfrac{7}{4}",
          "explanation": "Solve.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the partial fraction form",
          "workingLatex": "\\dfrac{5}{4(x-2)}+\\dfrac{7}{4(x+2)}",
          "explanation": "Form.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate term by term",
          "workingLatex": "\\dfrac{5}{4}\\ln|x-2|+\\dfrac{7}{4}\\ln|x+2|+c",
          "explanation": "Integrate.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine logarithms",
          "workingLatex": "\\dfrac{1}{4}\\ln|(x-2)^{5}(x+2)^{7}|+c",
          "explanation": "Simplify.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int \\dfrac{3x-1}{x^{2}-4}\\,dx = \\dfrac{1}{4}\\ln|(x-2)^{5}(x+2)^{7}|+c",
          "explanation": "Include $+c$ for indefinite integrals.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check the fraction is proper",
          "workingLatex": "\\text{deg(top)} < \\text{deg(bottom)}",
          "explanation": "If not, divide first using algebraic division.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Factorise the denominator fully",
          "workingLatex": "\\text{Linear and repeated factors}",
          "explanation": "Partial fractions need the denominator completely factorised.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\dfrac{3x-1}{x^{2}-4}\\,dx = \\dfrac{1}{4}\\ln|(x-2)^{5}(x+2)^{7}|+c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-partial-fractions.q012",
    "tags": [],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "questionText": "Find $\\displaystyle\\int \\dfrac{x+1}{x(x-2)}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factorise the denominator",
          "workingLatex": "x(x-2)",
          "explanation": "Factor $x$ out first.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up partial fractions",
          "workingLatex": "\\dfrac{A}{x}+\\dfrac{B}{x-2}",
          "explanation": "One factor is $x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for the constants",
          "workingLatex": "A=-\\dfrac{1}{2},\\;B=\\dfrac{3}{2}",
          "explanation": "Solve.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the partial fraction form",
          "workingLatex": "-\\dfrac{1}{2x}+\\dfrac{3}{2(x-2)}",
          "explanation": "Form.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate term by term",
          "workingLatex": "-\\dfrac{1}{2}\\ln|x|+\\dfrac{3}{2}\\ln|x-2|+c",
          "explanation": "Integrate.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine logarithms",
          "workingLatex": "\\dfrac{1}{2}\\ln\\left|\\dfrac{(x-2)^{3}}{x}\\right|+c",
          "explanation": "Combine.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int \\dfrac{x+1}{x(x-2)}\\,dx = \\dfrac{1}{2}\\ln\\left|\\dfrac{(x-2)^{3}}{x}\\right|+c",
          "explanation": "Include $+c$ for indefinite integrals.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check the fraction is proper",
          "workingLatex": "\\text{deg(top)} < \\text{deg(bottom)}",
          "explanation": "If not, divide first using algebraic division.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Factorise the denominator fully",
          "workingLatex": "\\text{Linear and repeated factors}",
          "explanation": "Partial fractions need the denominator completely factorised.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\dfrac{x+1}{x(x-2)}\\,dx = \\dfrac{1}{2}\\ln\\left|\\dfrac{(x-2)^{3}}{x}\\right|+c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-partial-fractions.q013",
    "tags": [],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "questionText": "Find $\\displaystyle\\int \\dfrac{5}{x(x+3)}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factorise the denominator",
          "workingLatex": "x(x+3)",
          "explanation": "Factorised.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up partial fractions",
          "workingLatex": "\\dfrac{A}{x}+\\dfrac{B}{x+3}",
          "explanation": "Setup.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for the constants",
          "workingLatex": "A=\\dfrac{5}{3},\\;B=-\\dfrac{5}{3}",
          "explanation": "Solve.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the partial fraction form",
          "workingLatex": "\\dfrac{5}{3x}-\\dfrac{5}{3(x+3)}",
          "explanation": "Form.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate term by term",
          "workingLatex": "\\dfrac{5}{3}\\ln|x|-\\dfrac{5}{3}\\ln|x+3|+c",
          "explanation": "Integrate.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine logarithms",
          "workingLatex": "\\dfrac{5}{3}\\ln\\left|\\dfrac{x}{x+3}\\right|+c",
          "explanation": "Simplify.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int \\dfrac{5}{x(x+3)}\\,dx = \\dfrac{5}{3}\\ln\\left|\\dfrac{x}{x+3}\\right|+c",
          "explanation": "Include $+c$ for indefinite integrals.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\dfrac{5}{x(x+3)}\\,dx = \\dfrac{5}{3}\\ln\\left|\\dfrac{x}{x+3}\\right|+c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-partial-fractions.q014",
    "tags": [],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "questionText": "Find $\\displaystyle\\int \\dfrac{2x+3}{x^{2}+x-6}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factorise the denominator",
          "workingLatex": "x^{2}+x-6=(x+3)(x-2)",
          "explanation": "Factorise.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up partial fractions",
          "workingLatex": "\\dfrac{A}{x+3}+\\dfrac{B}{x-2}",
          "explanation": "Setup.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for the constants",
          "workingLatex": "A=-\\dfrac{3}{5},\\;B=\\dfrac{7}{5}",
          "explanation": "Solve.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the partial fraction form",
          "workingLatex": "-\\dfrac{3}{5(x+3)}+\\dfrac{7}{5(x-2)}",
          "explanation": "Form.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate term by term",
          "workingLatex": "-\\dfrac{3}{5}\\ln|x+3|+\\dfrac{7}{5}\\ln|x-2|+c",
          "explanation": "Integrate.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine logarithms",
          "workingLatex": "\\dfrac{1}{5}\\ln\\left|\\dfrac{(x-2)^{7}}{(x+3)^{3}}\\right|+c",
          "explanation": "Combine.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int \\dfrac{2x+3}{x^{2}+x-6}\\,dx = \\dfrac{1}{5}\\ln\\left|\\dfrac{(x-2)^{7}}{(x+3)^{3}}\\right|+c",
          "explanation": "Include $+c$ for indefinite integrals.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check the fraction is proper",
          "workingLatex": "\\text{deg(top)} < \\text{deg(bottom)}",
          "explanation": "If not, divide first using algebraic division.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Factorise the denominator fully",
          "workingLatex": "\\text{Linear and repeated factors}",
          "explanation": "Partial fractions need the denominator completely factorised.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\dfrac{2x+3}{x^{2}+x-6}\\,dx = \\dfrac{1}{5}\\ln\\left|\\dfrac{(x-2)^{7}}{(x+3)^{3}}\\right|+c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-partial-fractions.q015",
    "tags": [],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "questionText": "Find $\\displaystyle\\int \\dfrac{4x-1}{x^{2}-1}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factorise the denominator",
          "workingLatex": "x^{2}-1=(x-1)(x+1)",
          "explanation": "Factorise.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up partial fractions",
          "workingLatex": "\\dfrac{A}{x-1}+\\dfrac{B}{x+1}",
          "explanation": "Setup.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for the constants",
          "workingLatex": "A=\\dfrac{3}{2},\\;B=\\dfrac{5}{2}",
          "explanation": "Solve.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the partial fraction form",
          "workingLatex": "\\dfrac{3}{2(x-1)}+\\dfrac{5}{2(x+1)}",
          "explanation": "Form.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate term by term",
          "workingLatex": "\\dfrac{3}{2}\\ln|x-1|+\\dfrac{5}{2}\\ln|x+1|+c",
          "explanation": "Integrate.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine logarithms",
          "workingLatex": "\\dfrac{1}{2}\\ln|(x-1)^{3}(x+1)^{5}|+c",
          "explanation": "Simplify.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int \\dfrac{4x-1}{x^{2}-1}\\,dx = \\dfrac{1}{2}\\ln|(x-1)^{3}(x+1)^{5}|+c",
          "explanation": "Include $+c$ for indefinite integrals.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check the fraction is proper",
          "workingLatex": "\\text{deg(top)} < \\text{deg(bottom)}",
          "explanation": "If not, divide first using algebraic division.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Factorise the denominator fully",
          "workingLatex": "\\text{Linear and repeated factors}",
          "explanation": "Partial fractions need the denominator completely factorised.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\dfrac{4x-1}{x^{2}-1}\\,dx = \\dfrac{1}{2}\\ln|(x-1)^{3}(x+1)^{5}|+c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-partial-fractions.q016",
    "tags": [
      "repeated factor"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "questionText": "Find $\\displaystyle\\int \\dfrac{1}{(x-1)^{2}}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factorise the denominator",
          "workingLatex": "(x-1)^{2}",
          "explanation": "Repeated linear factor.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up partial fractions",
          "workingLatex": "\\dfrac{A}{x-1}+\\dfrac{B}{(x-1)^{2}}",
          "explanation": "Need both first and second power.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for the constants",
          "workingLatex": "A=0,\\;B=1",
          "explanation": "Already in partial fraction form.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the partial fraction form",
          "workingLatex": "\\dfrac{1}{(x-1)^{2}}",
          "explanation": "Single term.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate term by term",
          "workingLatex": "-\\dfrac{1}{x-1}+c",
          "explanation": "Integrate using power rule: $\\int u^{-2}du = -u^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine logarithms",
          "workingLatex": "-\\dfrac{1}{x-1}+c",
          "explanation": "Use log laws to simplify if possible.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int \\dfrac{1}{(x-1)^{2}}\\,dx = -\\dfrac{1}{x-1}+c",
          "explanation": "Include $+c$ for indefinite integrals.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\dfrac{1}{(x-1)^{2}}\\,dx = -\\dfrac{1}{x-1}+c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-partial-fractions.q017",
    "tags": [
      "repeated factor"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "questionText": "Find $\\displaystyle\\int \\dfrac{1}{(x+2)^{2}}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factorise the denominator",
          "workingLatex": "(x+2)^{2}",
          "explanation": "Repeated factor.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up partial fractions",
          "workingLatex": "\\dfrac{A}{x+2}+\\dfrac{B}{(x+2)^{2}}",
          "explanation": "Setup.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for the constants",
          "workingLatex": "A=0,\\;B=1",
          "explanation": "Constants.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the partial fraction form",
          "workingLatex": "\\dfrac{1}{(x+2)^{2}}",
          "explanation": "Form.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate term by term",
          "workingLatex": "-\\dfrac{1}{x+2}+c",
          "explanation": "Integrate.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine logarithms",
          "workingLatex": "-\\dfrac{1}{x+2}+c",
          "explanation": "Use log laws to simplify if possible.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int \\dfrac{1}{(x+2)^{2}}\\,dx = -\\dfrac{1}{x+2}+c",
          "explanation": "Include $+c$ for indefinite integrals.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\dfrac{1}{(x+2)^{2}}\\,dx = -\\dfrac{1}{x+2}+c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-partial-fractions.q018",
    "tags": [
      "repeated factor"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "questionText": "Find $\\displaystyle\\int \\dfrac{3}{(x-1)^{2}}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factorise the denominator",
          "workingLatex": "(x-1)^{2}",
          "explanation": "Repeated factor.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up partial fractions",
          "workingLatex": "\\dfrac{A}{x-1}+\\dfrac{B}{(x-1)^{2}}",
          "explanation": "Setup.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for the constants",
          "workingLatex": "A=0,\\;B=3",
          "explanation": "Solve.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the partial fraction form",
          "workingLatex": "\\dfrac{3}{(x-1)^{2}}",
          "explanation": "Form.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate term by term",
          "workingLatex": "-\\dfrac{3}{x-1}+c",
          "explanation": "Integrate.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine logarithms",
          "workingLatex": "-\\dfrac{3}{x-1}+c",
          "explanation": "Use log laws to simplify if possible.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int \\dfrac{3}{(x-1)^{2}}\\,dx = -\\dfrac{3}{x-1}+c",
          "explanation": "Include $+c$ for indefinite integrals.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\dfrac{3}{(x-1)^{2}}\\,dx = -\\dfrac{3}{x-1}+c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-partial-fractions.q019",
    "tags": [
      "repeated factor"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "expression",
    "questionText": "Find $\\displaystyle\\int \\dfrac{2x+1}{(x-1)^{2}(x+2)}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factorise the denominator",
          "workingLatex": "(x-1)^{2}(x+2)",
          "explanation": "One repeated and one distinct factor.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up partial fractions",
          "workingLatex": "\\dfrac{A}{x-1}+\\dfrac{B}{(x-1)^{2}}+\\dfrac{C}{x+2}",
          "explanation": "Three terms needed.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for the constants",
          "workingLatex": "A=\\dfrac{1}{9},\\;B=\\dfrac{1}{3},\\;C=-\\dfrac{1}{9}",
          "explanation": "Solve simultaneously.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the partial fraction form",
          "workingLatex": "\\dfrac{1}{9(x-1)}+\\dfrac{1}{3(x-1)^{2}}-\\dfrac{1}{9(x+2)}",
          "explanation": "Decomposed.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate term by term",
          "workingLatex": "\\dfrac{1}{9}\\ln|x-1|-\\dfrac{1}{3(x-1)}-\\dfrac{1}{9}\\ln|x+2|+c",
          "explanation": "Integrate each term.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine logarithms",
          "workingLatex": "\\dfrac{1}{9}\\ln\\left|\\dfrac{x-1}{x+2}\\right|-\\dfrac{1}{3(x-1)}+c",
          "explanation": "Use log laws to simplify if possible.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int \\dfrac{2x+1}{(x-1)^{2}(x+2)}\\,dx = \\dfrac{1}{9}\\ln\\left|\\dfrac{x-1}{x+2}\\right|-\\dfrac{1}{3(x-1)}+c",
          "explanation": "Include $+c$ for indefinite integrals.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check the fraction is proper",
          "workingLatex": "\\text{deg(top)} < \\text{deg(bottom)}",
          "explanation": "If not, divide first using algebraic division.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Factorise the denominator fully",
          "workingLatex": "\\text{Linear and repeated factors}",
          "explanation": "Partial fractions need the denominator completely factorised.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\dfrac{2x+1}{(x-1)^{2}(x+2)}\\,dx = \\dfrac{1}{9}\\ln\\left|\\dfrac{x-1}{x+2}\\right|-\\dfrac{1}{3(x-1)}+c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-partial-fractions.q020",
    "tags": [
      "repeated factor"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "expression",
    "questionText": "Find $\\displaystyle\\int \\dfrac{1}{x(x-1)^{2}}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factorise the denominator",
          "workingLatex": "x(x-1)^{2}",
          "explanation": "Mixed factors.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up partial fractions",
          "workingLatex": "\\dfrac{A}{x}+\\dfrac{B}{x-1}+\\dfrac{C}{(x-1)^{2}}",
          "explanation": "Three-term decomposition.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for the constants",
          "workingLatex": "A=1,\\;B=-1,\\;C=-1",
          "explanation": "Solve.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the partial fraction form",
          "workingLatex": "\\dfrac{1}{x}-\\dfrac{1}{x-1}-\\dfrac{1}{(x-1)^{2}}",
          "explanation": "Form.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate term by term",
          "workingLatex": "\\ln|x|-\\ln|x-1|+\\dfrac{1}{x-1}+c",
          "explanation": "Integrate.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine logarithms",
          "workingLatex": "\\ln\\left|\\dfrac{x}{x-1}\\right|+\\dfrac{1}{x-1}+c",
          "explanation": "Use log laws to simplify if possible.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int \\dfrac{1}{x(x-1)^{2}}\\,dx = \\ln\\left|\\dfrac{x}{x-1}\\right|+\\dfrac{1}{x-1}+c",
          "explanation": "Include $+c$ for indefinite integrals.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check the fraction is proper",
          "workingLatex": "\\text{deg(top)} < \\text{deg(bottom)}",
          "explanation": "If not, divide first using algebraic division.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Factorise the denominator fully",
          "workingLatex": "\\text{Linear and repeated factors}",
          "explanation": "Partial fractions need the denominator completely factorised.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\dfrac{1}{x(x-1)^{2}}\\,dx = \\ln\\left|\\dfrac{x}{x-1}\\right|+\\dfrac{1}{x-1}+c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-partial-fractions.q021",
    "tags": [],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "questionText": "Find $\\displaystyle\\int_{0}^{1} \\dfrac{1}{(x+1)(x+2)}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factorise the denominator",
          "workingLatex": "(x+1)(x+2)",
          "explanation": "Distinct linear factors.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up partial fractions",
          "workingLatex": "\\dfrac{1}{x+1}-\\dfrac{1}{x+2}",
          "explanation": "Partial fraction decomposition.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for the constants",
          "workingLatex": "A=1,\\;B=-1",
          "explanation": "Constants from cover-up.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the partial fraction form",
          "workingLatex": "\\dfrac{1}{x+1}-\\dfrac{1}{x+2}",
          "explanation": "Decomposed form.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate term by term",
          "workingLatex": "\\ln|x+1|-\\ln|x+2|",
          "explanation": "Integrate each term.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine logarithms",
          "workingLatex": "\\ln\\left|\\dfrac{x+1}{x+2}\\right|",
          "explanation": "At $x=1$: $\\ln\\frac{2}{3}$; at $x=0$: $\\ln\\frac{1}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int_{0}^{1} \\dfrac{1}{(x+1)(x+2)}\\,dx = \\ln\\dfrac{4}{3}",
          "explanation": "Include $+c$ for indefinite integrals.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check the fraction is proper",
          "workingLatex": "\\text{deg(top)} < \\text{deg(bottom)}",
          "explanation": "If not, divide first using algebraic division.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Factorise the denominator fully",
          "workingLatex": "\\text{Linear and repeated factors}",
          "explanation": "Partial fractions need the denominator completely factorised.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{0}^{1} \\dfrac{1}{(x+1)(x+2)}\\,dx = \\ln\\dfrac{4}{3}$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-partial-fractions.q022",
    "tags": [],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "questionText": "Find $\\displaystyle\\int_{1}^{2} \\dfrac{1}{x(x+1)}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factorise the denominator",
          "workingLatex": "x(x+1)",
          "explanation": "Factorise.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up partial fractions",
          "workingLatex": "\\dfrac{A}{x}+\\dfrac{B}{x+1}",
          "explanation": "Setup.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for the constants",
          "workingLatex": "A=1,\\;B=-1",
          "explanation": "Solve.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the partial fraction form",
          "workingLatex": "\\dfrac{1}{x}-\\dfrac{1}{x+1}",
          "explanation": "Form.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate term by term",
          "workingLatex": "\\ln|x|-\\ln|x+1|",
          "explanation": "Integrate.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine logarithms",
          "workingLatex": "\\ln\\left|\\dfrac{x}{x+1}\\right|",
          "explanation": "At limits $1$ to $2$: $\\ln 2 - \\ln 3$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int_{1}^{2} \\dfrac{1}{x(x+1)}\\,dx = \\ln\\dfrac{2}{3}",
          "explanation": "Include $+c$ for indefinite integrals.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check the fraction is proper",
          "workingLatex": "\\text{deg(top)} < \\text{deg(bottom)}",
          "explanation": "If not, divide first using algebraic division.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Factorise the denominator fully",
          "workingLatex": "\\text{Linear and repeated factors}",
          "explanation": "Partial fractions need the denominator completely factorised.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{1}^{2} \\dfrac{1}{x(x+1)}\\,dx = \\ln\\dfrac{2}{3}$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-partial-fractions.q023",
    "tags": [],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "questionText": "Find $\\displaystyle\\int_{2}^{4} \\dfrac{1}{x^{2}-1}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factorise the denominator",
          "workingLatex": "x^{2}-1=(x-1)(x+1)",
          "explanation": "Factorise.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up partial fractions",
          "workingLatex": "\\dfrac{1}{2(x-1)}-\\dfrac{1}{2(x+1)}",
          "explanation": "Partial fractions.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for the constants",
          "workingLatex": "A=\\dfrac{1}{2},\\;B=-\\dfrac{1}{2}",
          "explanation": "Constants.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the partial fraction form",
          "workingLatex": "\\dfrac{1}{2(x-1)}-\\dfrac{1}{2(x+1)}",
          "explanation": "Form.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate term by term",
          "workingLatex": "\\dfrac{1}{2}\\ln|x-1|-\\dfrac{1}{2}\\ln|x+1|",
          "explanation": "Integrate.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine logarithms",
          "workingLatex": "\\dfrac{1}{2}\\ln\\dfrac{3}{1}=\\dfrac{1}{2}\\ln 3",
          "explanation": "Evaluate from $2$ to $4$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int_{2}^{4} \\dfrac{1}{x^{2}-1}\\,dx = \\dfrac{1}{2}\\ln 3",
          "explanation": "Include $+c$ for indefinite integrals.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check the fraction is proper",
          "workingLatex": "\\text{deg(top)} < \\text{deg(bottom)}",
          "explanation": "If not, divide first using algebraic division.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Factorise the denominator fully",
          "workingLatex": "\\text{Linear and repeated factors}",
          "explanation": "Partial fractions need the denominator completely factorised.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{2}^{4} \\dfrac{1}{x^{2}-1}\\,dx = \\dfrac{1}{2}\\ln 3$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-partial-fractions.q024",
    "tags": [],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "questionText": "Find $\\displaystyle\\int_{1}^{3} \\dfrac{2}{(x+1)(x+3)}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factorise the denominator",
          "workingLatex": "(x+1)(x+3)",
          "explanation": "Factorise.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up partial fractions",
          "workingLatex": "\\dfrac{1}{x+1}-\\dfrac{1}{x+3}",
          "explanation": "Decompose (scaled by 2).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for the constants",
          "workingLatex": "A=1,\\;B=-1",
          "explanation": "Constants.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the partial fraction form",
          "workingLatex": "\\dfrac{2}{x+1}-\\dfrac{2}{x+3}",
          "explanation": "Form.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate term by term",
          "workingLatex": "2\\ln|x+1|-2\\ln|x+3|",
          "explanation": "Integrate.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine logarithms",
          "workingLatex": "2\\ln 4-2\\ln 2=\\ln\\dfrac{16}{4}=\\ln 4",
          "explanation": "Evaluate from $1$ to $3$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int_{1}^{3} \\dfrac{2}{(x+1)(x+3)}\\,dx = \\ln 4",
          "explanation": "Include $+c$ for indefinite integrals.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check the fraction is proper",
          "workingLatex": "\\text{deg(top)} < \\text{deg(bottom)}",
          "explanation": "If not, divide first using algebraic division.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Factorise the denominator fully",
          "workingLatex": "\\text{Linear and repeated factors}",
          "explanation": "Partial fractions need the denominator completely factorised.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{1}^{3} \\dfrac{2}{(x+1)(x+3)}\\,dx = \\ln 4$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-partial-fractions.q025",
    "tags": [],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "questionText": "Find $\\displaystyle\\int_{2}^{3} \\dfrac{1}{(x-1)(x+2)}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factorise the denominator",
          "workingLatex": "(x-1)(x+2)",
          "explanation": "Factorise.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up partial fractions",
          "workingLatex": "\\dfrac{1}{3(x-1)}-\\dfrac{1}{3(x+2)}",
          "explanation": "Partial fractions.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for the constants",
          "workingLatex": "A=\\dfrac{1}{3},\\;B=-\\dfrac{1}{3}",
          "explanation": "Constants.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the partial fraction form",
          "workingLatex": "\\dfrac{1}{3(x-1)}-\\dfrac{1}{3(x+2)}",
          "explanation": "Form.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate term by term",
          "workingLatex": "\\dfrac{1}{3}\\ln|x-1|-\\dfrac{1}{3}\\ln|x+2|",
          "explanation": "Integrate.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine logarithms",
          "workingLatex": "\\dfrac{1}{3}\\ln 2-\\dfrac{1}{3}\\ln 5=\\dfrac{1}{3}\\ln\\dfrac{2}{5}",
          "explanation": "Evaluate from $2$ to $3$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int_{2}^{3} \\dfrac{1}{(x-1)(x+2)}\\,dx = \\dfrac{1}{3}\\ln\\dfrac{2}{5}",
          "explanation": "Include $+c$ for indefinite integrals.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check the fraction is proper",
          "workingLatex": "\\text{deg(top)} < \\text{deg(bottom)}",
          "explanation": "If not, divide first using algebraic division.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Factorise the denominator fully",
          "workingLatex": "\\text{Linear and repeated factors}",
          "explanation": "Partial fractions need the denominator completely factorised.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{2}^{3} \\dfrac{1}{(x-1)(x+2)}\\,dx = \\dfrac{1}{3}\\ln\\dfrac{2}{5}$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-partial-fractions.q026",
    "tags": [],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "questionText": "Find $\\displaystyle\\int \\dfrac{1}{(x+1)(x+2)}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factorise the denominator",
          "workingLatex": "(x+1)(x+2)",
          "explanation": "Distinct linear factors.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up partial fractions",
          "workingLatex": "\\dfrac{A}{x+1}+\\dfrac{B}{x+2}",
          "explanation": "Standard partial fraction setup.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for the constants",
          "workingLatex": "A=\\dfrac{1}{1},\\;B=-\\dfrac{1}{1}",
          "explanation": "Cover-up method.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the partial fraction form",
          "workingLatex": "\\dfrac{1}{1(x+2)}-\\dfrac{1}{1(x+1)}",
          "explanation": "Decomposed form.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate term by term",
          "workingLatex": "\\dfrac{1}{1}\\ln|x+2|-\\dfrac{1}{1}\\ln|x+1|+c",
          "explanation": "Integrate each term.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine logarithms",
          "workingLatex": "\\dfrac{1}{1}\\ln\\left|\\dfrac{x+2}{x+1}\\right|+c",
          "explanation": "Combine logarithms.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int \\dfrac{1}{(x+1)(x+2)}\\,dx = \\dfrac{1}{1}\\ln\\left|\\dfrac{x+2}{x+1}\\right|+c",
          "explanation": "Include $+c$ for indefinite integrals.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\dfrac{1}{(x+1)(x+2)}\\,dx = \\dfrac{1}{1}\\ln\\left|\\dfrac{x+2}{x+1}\\right|+c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-partial-fractions.q027",
    "tags": [],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "questionText": "Find $\\displaystyle\\int \\dfrac{2}{(x+1)(x+3)}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factorise the denominator",
          "workingLatex": "(x+1)(x+3)",
          "explanation": "Distinct linear factors.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up partial fractions",
          "workingLatex": "\\dfrac{A}{x+1}+\\dfrac{B}{x+3}",
          "explanation": "Standard partial fraction setup.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for the constants",
          "workingLatex": "A=\\dfrac{2}{2},\\;B=-\\dfrac{2}{2}",
          "explanation": "Cover-up method.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the partial fraction form",
          "workingLatex": "\\dfrac{2}{2(x+3)}-\\dfrac{2}{2(x+1)}",
          "explanation": "Decomposed form.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate term by term",
          "workingLatex": "\\dfrac{2}{2}\\ln|x+3|-\\dfrac{2}{2}\\ln|x+1|+c",
          "explanation": "Integrate each term.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine logarithms",
          "workingLatex": "\\dfrac{2}{2}\\ln\\left|\\dfrac{x+3}{x+1}\\right|+c",
          "explanation": "Combine logarithms.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int \\dfrac{2}{(x+1)(x+3)}\\,dx = \\dfrac{2}{2}\\ln\\left|\\dfrac{x+3}{x+1}\\right|+c",
          "explanation": "Include $+c$ for indefinite integrals.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\dfrac{2}{(x+1)(x+3)}\\,dx = \\dfrac{2}{2}\\ln\\left|\\dfrac{x+3}{x+1}\\right|+c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-partial-fractions.q028",
    "tags": [],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "questionText": "Find $\\displaystyle\\int \\dfrac{1}{(x+2)(x+5)}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factorise the denominator",
          "workingLatex": "(x+2)(x+5)",
          "explanation": "Distinct linear factors.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up partial fractions",
          "workingLatex": "\\dfrac{A}{x+2}+\\dfrac{B}{x+5}",
          "explanation": "Standard partial fraction setup.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for the constants",
          "workingLatex": "A=\\dfrac{1}{3},\\;B=-\\dfrac{1}{3}",
          "explanation": "Cover-up method.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the partial fraction form",
          "workingLatex": "\\dfrac{1}{3(x+5)}-\\dfrac{1}{3(x+2)}",
          "explanation": "Decomposed form.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate term by term",
          "workingLatex": "\\dfrac{1}{3}\\ln|x+5|-\\dfrac{1}{3}\\ln|x+2|+c",
          "explanation": "Integrate each term.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine logarithms",
          "workingLatex": "\\dfrac{1}{3}\\ln\\left|\\dfrac{x+5}{x+2}\\right|+c",
          "explanation": "Combine logarithms.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int \\dfrac{1}{(x+2)(x+5)}\\,dx = \\dfrac{1}{3}\\ln\\left|\\dfrac{x+5}{x+2}\\right|+c",
          "explanation": "Include $+c$ for indefinite integrals.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\dfrac{1}{(x+2)(x+5)}\\,dx = \\dfrac{1}{3}\\ln\\left|\\dfrac{x+5}{x+2}\\right|+c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-partial-fractions.q029",
    "tags": [],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "questionText": "Find $\\displaystyle\\int \\dfrac{3}{(x+1)(x+4)}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factorise the denominator",
          "workingLatex": "(x+1)(x+4)",
          "explanation": "Distinct linear factors.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up partial fractions",
          "workingLatex": "\\dfrac{A}{x+1}+\\dfrac{B}{x+4}",
          "explanation": "Standard partial fraction setup.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for the constants",
          "workingLatex": "A=\\dfrac{3}{3},\\;B=-\\dfrac{3}{3}",
          "explanation": "Cover-up method.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the partial fraction form",
          "workingLatex": "\\dfrac{3}{3(x+4)}-\\dfrac{3}{3(x+1)}",
          "explanation": "Decomposed form.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate term by term",
          "workingLatex": "\\dfrac{3}{3}\\ln|x+4|-\\dfrac{3}{3}\\ln|x+1|+c",
          "explanation": "Integrate each term.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine logarithms",
          "workingLatex": "\\dfrac{3}{3}\\ln\\left|\\dfrac{x+4}{x+1}\\right|+c",
          "explanation": "Combine logarithms.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int \\dfrac{3}{(x+1)(x+4)}\\,dx = \\dfrac{3}{3}\\ln\\left|\\dfrac{x+4}{x+1}\\right|+c",
          "explanation": "Include $+c$ for indefinite integrals.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\dfrac{3}{(x+1)(x+4)}\\,dx = \\dfrac{3}{3}\\ln\\left|\\dfrac{x+4}{x+1}\\right|+c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-partial-fractions.q030",
    "tags": [],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "questionText": "Find $\\displaystyle\\int \\dfrac{1}{(x+3)(x+4)}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factorise the denominator",
          "workingLatex": "(x+3)(x+4)",
          "explanation": "Distinct linear factors.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up partial fractions",
          "workingLatex": "\\dfrac{A}{x+3}+\\dfrac{B}{x+4}",
          "explanation": "Standard partial fraction setup.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for the constants",
          "workingLatex": "A=\\dfrac{1}{1},\\;B=-\\dfrac{1}{1}",
          "explanation": "Cover-up method.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the partial fraction form",
          "workingLatex": "\\dfrac{1}{1(x+4)}-\\dfrac{1}{1(x+3)}",
          "explanation": "Decomposed form.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate term by term",
          "workingLatex": "\\dfrac{1}{1}\\ln|x+4|-\\dfrac{1}{1}\\ln|x+3|+c",
          "explanation": "Integrate each term.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine logarithms",
          "workingLatex": "\\dfrac{1}{1}\\ln\\left|\\dfrac{x+4}{x+3}\\right|+c",
          "explanation": "Combine logarithms.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int \\dfrac{1}{(x+3)(x+4)}\\,dx = \\dfrac{1}{1}\\ln\\left|\\dfrac{x+4}{x+3}\\right|+c",
          "explanation": "Include $+c$ for indefinite integrals.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\dfrac{1}{(x+3)(x+4)}\\,dx = \\dfrac{1}{1}\\ln\\left|\\dfrac{x+4}{x+3}\\right|+c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-partial-fractions.q031",
    "tags": [],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "questionText": "Find $\\displaystyle\\int \\dfrac{2}{(x+2)(x+3)}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factorise the denominator",
          "workingLatex": "(x+2)(x+3)",
          "explanation": "Distinct linear factors.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up partial fractions",
          "workingLatex": "\\dfrac{A}{x+2}+\\dfrac{B}{x+3}",
          "explanation": "Standard partial fraction setup.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for the constants",
          "workingLatex": "A=\\dfrac{2}{1},\\;B=-\\dfrac{2}{1}",
          "explanation": "Cover-up method.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the partial fraction form",
          "workingLatex": "\\dfrac{2}{1(x+3)}-\\dfrac{2}{1(x+2)}",
          "explanation": "Decomposed form.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate term by term",
          "workingLatex": "\\dfrac{2}{1}\\ln|x+3|-\\dfrac{2}{1}\\ln|x+2|+c",
          "explanation": "Integrate each term.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine logarithms",
          "workingLatex": "\\dfrac{2}{1}\\ln\\left|\\dfrac{x+3}{x+2}\\right|+c",
          "explanation": "Combine logarithms.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int \\dfrac{2}{(x+2)(x+3)}\\,dx = \\dfrac{2}{1}\\ln\\left|\\dfrac{x+3}{x+2}\\right|+c",
          "explanation": "Include $+c$ for indefinite integrals.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\dfrac{2}{(x+2)(x+3)}\\,dx = \\dfrac{2}{1}\\ln\\left|\\dfrac{x+3}{x+2}\\right|+c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-partial-fractions.q032",
    "tags": [],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "questionText": "Find $\\displaystyle\\int \\dfrac{1}{(x+1)(x+4)}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factorise the denominator",
          "workingLatex": "(x+1)(x+4)",
          "explanation": "Distinct linear factors.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up partial fractions",
          "workingLatex": "\\dfrac{A}{x+1}+\\dfrac{B}{x+4}",
          "explanation": "Standard partial fraction setup.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for the constants",
          "workingLatex": "A=\\dfrac{1}{3},\\;B=-\\dfrac{1}{3}",
          "explanation": "Cover-up method.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the partial fraction form",
          "workingLatex": "\\dfrac{1}{3(x+4)}-\\dfrac{1}{3(x+1)}",
          "explanation": "Decomposed form.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate term by term",
          "workingLatex": "\\dfrac{1}{3}\\ln|x+4|-\\dfrac{1}{3}\\ln|x+1|+c",
          "explanation": "Integrate each term.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine logarithms",
          "workingLatex": "\\dfrac{1}{3}\\ln\\left|\\dfrac{x+4}{x+1}\\right|+c",
          "explanation": "Combine logarithms.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int \\dfrac{1}{(x+1)(x+4)}\\,dx = \\dfrac{1}{3}\\ln\\left|\\dfrac{x+4}{x+1}\\right|+c",
          "explanation": "Include $+c$ for indefinite integrals.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\dfrac{1}{(x+1)(x+4)}\\,dx = \\dfrac{1}{3}\\ln\\left|\\dfrac{x+4}{x+1}\\right|+c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-partial-fractions.q033",
    "tags": [],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "questionText": "Find $\\displaystyle\\int \\dfrac{4}{(x+2)(x+5)}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factorise the denominator",
          "workingLatex": "(x+2)(x+5)",
          "explanation": "Distinct linear factors.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up partial fractions",
          "workingLatex": "\\dfrac{A}{x+2}+\\dfrac{B}{x+5}",
          "explanation": "Standard partial fraction setup.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for the constants",
          "workingLatex": "A=\\dfrac{4}{3},\\;B=-\\dfrac{4}{3}",
          "explanation": "Cover-up method.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the partial fraction form",
          "workingLatex": "\\dfrac{4}{3(x+5)}-\\dfrac{4}{3(x+2)}",
          "explanation": "Decomposed form.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate term by term",
          "workingLatex": "\\dfrac{4}{3}\\ln|x+5|-\\dfrac{4}{3}\\ln|x+2|+c",
          "explanation": "Integrate each term.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine logarithms",
          "workingLatex": "\\dfrac{4}{3}\\ln\\left|\\dfrac{x+5}{x+2}\\right|+c",
          "explanation": "Combine logarithms.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int \\dfrac{4}{(x+2)(x+5)}\\,dx = \\dfrac{4}{3}\\ln\\left|\\dfrac{x+5}{x+2}\\right|+c",
          "explanation": "Include $+c$ for indefinite integrals.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\dfrac{4}{(x+2)(x+5)}\\,dx = \\dfrac{4}{3}\\ln\\left|\\dfrac{x+5}{x+2}\\right|+c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-partial-fractions.q034",
    "tags": [],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "questionText": "Find $\\displaystyle\\int \\dfrac{1}{(x+4)(x+5)}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factorise the denominator",
          "workingLatex": "(x+4)(x+5)",
          "explanation": "Distinct linear factors.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up partial fractions",
          "workingLatex": "\\dfrac{A}{x+4}+\\dfrac{B}{x+5}",
          "explanation": "Standard partial fraction setup.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for the constants",
          "workingLatex": "A=\\dfrac{1}{1},\\;B=-\\dfrac{1}{1}",
          "explanation": "Cover-up method.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the partial fraction form",
          "workingLatex": "\\dfrac{1}{1(x+5)}-\\dfrac{1}{1(x+4)}",
          "explanation": "Decomposed form.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate term by term",
          "workingLatex": "\\dfrac{1}{1}\\ln|x+5|-\\dfrac{1}{1}\\ln|x+4|+c",
          "explanation": "Integrate each term.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine logarithms",
          "workingLatex": "\\dfrac{1}{1}\\ln\\left|\\dfrac{x+5}{x+4}\\right|+c",
          "explanation": "Combine logarithms.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int \\dfrac{1}{(x+4)(x+5)}\\,dx = \\dfrac{1}{1}\\ln\\left|\\dfrac{x+5}{x+4}\\right|+c",
          "explanation": "Include $+c$ for indefinite integrals.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\dfrac{1}{(x+4)(x+5)}\\,dx = \\dfrac{1}{1}\\ln\\left|\\dfrac{x+5}{x+4}\\right|+c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-partial-fractions.q035",
    "tags": [],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "questionText": "Find $\\displaystyle\\int \\dfrac{3}{(x+2)(x+7)}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factorise the denominator",
          "workingLatex": "(x+2)(x+7)",
          "explanation": "Distinct linear factors.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up partial fractions",
          "workingLatex": "\\dfrac{A}{x+2}+\\dfrac{B}{x+7}",
          "explanation": "Standard partial fraction setup.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for the constants",
          "workingLatex": "A=\\dfrac{3}{5},\\;B=-\\dfrac{3}{5}",
          "explanation": "Cover-up method.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the partial fraction form",
          "workingLatex": "\\dfrac{3}{5(x+7)}-\\dfrac{3}{5(x+2)}",
          "explanation": "Decomposed form.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate term by term",
          "workingLatex": "\\dfrac{3}{5}\\ln|x+7|-\\dfrac{3}{5}\\ln|x+2|+c",
          "explanation": "Integrate each term.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine logarithms",
          "workingLatex": "\\dfrac{3}{5}\\ln\\left|\\dfrac{x+7}{x+2}\\right|+c",
          "explanation": "Combine logarithms.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int \\dfrac{3}{(x+2)(x+7)}\\,dx = \\dfrac{3}{5}\\ln\\left|\\dfrac{x+7}{x+2}\\right|+c",
          "explanation": "Include $+c$ for indefinite integrals.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\dfrac{3}{(x+2)(x+7)}\\,dx = \\dfrac{3}{5}\\ln\\left|\\dfrac{x+7}{x+2}\\right|+c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-partial-fractions.q036",
    "tags": [],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "questionText": "Find $\\displaystyle\\int \\dfrac{x+2}{x^{2}+3x+2}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factorise the denominator",
          "workingLatex": "x^{2}+3x+2=(x+1)(x+2)",
          "explanation": "Factorise.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up partial fractions",
          "workingLatex": "\\dfrac{A}{x+1}+\\dfrac{B}{x+2}",
          "explanation": "Setup.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for the constants",
          "workingLatex": "A=2,\\;B=-1",
          "explanation": "Solve.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the partial fraction form",
          "workingLatex": "\\dfrac{2}{x+1}-\\dfrac{1}{x+2}",
          "explanation": "Form.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate term by term",
          "workingLatex": "2\\ln|x+1|-\\ln|x+2|+c",
          "explanation": "Integrate.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine logarithms",
          "workingLatex": "\\ln\\left|\\dfrac{(x+1)^{2}}{x+2}\\right|+c",
          "explanation": "Simplify.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int \\dfrac{x+2}{x^{2}+3x+2}\\,dx = \\ln\\left|\\dfrac{(x+1)^{2}}{x+2}\\right|+c",
          "explanation": "Include $+c$ for indefinite integrals.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check the fraction is proper",
          "workingLatex": "\\text{deg(top)} < \\text{deg(bottom)}",
          "explanation": "If not, divide first using algebraic division.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Factorise the denominator fully",
          "workingLatex": "\\text{Linear and repeated factors}",
          "explanation": "Partial fractions need the denominator completely factorised.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\dfrac{x+2}{x^{2}+3x+2}\\,dx = \\ln\\left|\\dfrac{(x+1)^{2}}{x+2}\\right|+c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-partial-fractions.q037",
    "tags": [],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "questionText": "Find $\\displaystyle\\int \\dfrac{2x+5}{x^{2}+x-6}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factorise the denominator",
          "workingLatex": "x^{2}+x-6=(x+3)(x-2)",
          "explanation": "Factorise.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up partial fractions",
          "workingLatex": "\\dfrac{A}{x+3}+\\dfrac{B}{x-2}",
          "explanation": "Setup.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for the constants",
          "workingLatex": "A=-\\dfrac{1}{5},\\;B=\\dfrac{11}{5}",
          "explanation": "Solve.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the partial fraction form",
          "workingLatex": "-\\dfrac{1}{5(x+3)}+\\dfrac{11}{5(x-2)}",
          "explanation": "Form.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate term by term",
          "workingLatex": "-\\dfrac{1}{5}\\ln|x+3|+\\dfrac{11}{5}\\ln|x-2|+c",
          "explanation": "Integrate.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine logarithms",
          "workingLatex": "\\dfrac{1}{5}\\ln\\left|\\dfrac{(x-2)^{11}}{(x+3)}\\right|+c",
          "explanation": "Simplify.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int \\dfrac{2x+5}{x^{2}+x-6}\\,dx = \\dfrac{1}{5}\\ln\\left|\\dfrac{(x-2)^{11}}{(x+3)}\\right|+c",
          "explanation": "Include $+c$ for indefinite integrals.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check the fraction is proper",
          "workingLatex": "\\text{deg(top)} < \\text{deg(bottom)}",
          "explanation": "If not, divide first using algebraic division.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Factorise the denominator fully",
          "workingLatex": "\\text{Linear and repeated factors}",
          "explanation": "Partial fractions need the denominator completely factorised.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\dfrac{2x+5}{x^{2}+x-6}\\,dx = \\dfrac{1}{5}\\ln\\left|\\dfrac{(x-2)^{11}}{(x+3)}\\right|+c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-partial-fractions.q038",
    "tags": [],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "questionText": "Find $\\displaystyle\\int \\dfrac{x+4}{x^{2}+5x+6}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factorise the denominator",
          "workingLatex": "x^{2}+5x+6=(x+2)(x+3)",
          "explanation": "Factorise.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up partial fractions",
          "workingLatex": "\\dfrac{A}{x+2}+\\dfrac{B}{x+3}",
          "explanation": "Setup.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for the constants",
          "workingLatex": "A=1,\\;B=-2",
          "explanation": "Solve.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the partial fraction form",
          "workingLatex": "\\dfrac{1}{x+2}-\\dfrac{2}{x+3}",
          "explanation": "Form.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate term by term",
          "workingLatex": "\\ln|x+2|-2\\ln|x+3|+c",
          "explanation": "Integrate.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine logarithms",
          "workingLatex": "\\ln\\left|\\dfrac{x+2}{(x+3)^{2}}\\right|+c",
          "explanation": "Simplify.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int \\dfrac{x+4}{x^{2}+5x+6}\\,dx = \\ln\\left|\\dfrac{x+2}{(x+3)^{2}}\\right|+c",
          "explanation": "Include $+c$ for indefinite integrals.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check the fraction is proper",
          "workingLatex": "\\text{deg(top)} < \\text{deg(bottom)}",
          "explanation": "If not, divide first using algebraic division.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Factorise the denominator fully",
          "workingLatex": "\\text{Linear and repeated factors}",
          "explanation": "Partial fractions need the denominator completely factorised.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\dfrac{x+4}{x^{2}+5x+6}\\,dx = \\ln\\left|\\dfrac{x+2}{(x+3)^{2}}\\right|+c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-partial-fractions.q039",
    "tags": [],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "questionText": "Find $\\displaystyle\\int \\dfrac{3x-2}{x^{2}-1}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factorise the denominator",
          "workingLatex": "x^{2}-1=(x-1)(x+1)",
          "explanation": "Factorise.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up partial fractions",
          "workingLatex": "\\dfrac{A}{x-1}+\\dfrac{B}{x+1}",
          "explanation": "Setup.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for the constants",
          "workingLatex": "A=\\dfrac{1}{2},\\;B=\\dfrac{5}{2}",
          "explanation": "Solve.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the partial fraction form",
          "workingLatex": "\\dfrac{1}{2(x-1)}+\\dfrac{5}{2(x+1)}",
          "explanation": "Form.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate term by term",
          "workingLatex": "\\dfrac{1}{2}\\ln|x-1|+\\dfrac{5}{2}\\ln|x+1|+c",
          "explanation": "Integrate.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine logarithms",
          "workingLatex": "\\dfrac{1}{2}\\ln|(x-1)(x+1)^{5}|+c",
          "explanation": "Simplify.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int \\dfrac{3x-2}{x^{2}-1}\\,dx = \\dfrac{1}{2}\\ln|(x-1)(x+1)^{5}|+c",
          "explanation": "Include $+c$ for indefinite integrals.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check the fraction is proper",
          "workingLatex": "\\text{deg(top)} < \\text{deg(bottom)}",
          "explanation": "If not, divide first using algebraic division.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Factorise the denominator fully",
          "workingLatex": "\\text{Linear and repeated factors}",
          "explanation": "Partial fractions need the denominator completely factorised.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\dfrac{3x-2}{x^{2}-1}\\,dx = \\dfrac{1}{2}\\ln|(x-1)(x+1)^{5}|+c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-partial-fractions.q040",
    "tags": [],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "questionText": "Find $\\displaystyle\\int \\dfrac{x+1}{x^{2}-4x}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factorise the denominator",
          "workingLatex": "x^{2}-4x=x(x-4)",
          "explanation": "Factor out $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up partial fractions",
          "workingLatex": "\\dfrac{A}{x}+\\dfrac{B}{x-4}",
          "explanation": "Setup.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for the constants",
          "workingLatex": "A=-\\dfrac{1}{4},\\;B=\\dfrac{5}{4}",
          "explanation": "Solve.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the partial fraction form",
          "workingLatex": "-\\dfrac{1}{4x}+\\dfrac{5}{4(x-4)}",
          "explanation": "Form.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate term by term",
          "workingLatex": "-\\dfrac{1}{4}\\ln|x|+\\dfrac{5}{4}\\ln|x-4|+c",
          "explanation": "Integrate.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine logarithms",
          "workingLatex": "\\dfrac{1}{4}\\ln\\left|\\dfrac{(x-4)^{5}}{x}\\right|+c",
          "explanation": "Simplify.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int \\dfrac{x+1}{x^{2}-4x}\\,dx = \\dfrac{1}{4}\\ln\\left|\\dfrac{(x-4)^{5}}{x}\\right|+c",
          "explanation": "Include $+c$ for indefinite integrals.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check the fraction is proper",
          "workingLatex": "\\text{deg(top)} < \\text{deg(bottom)}",
          "explanation": "If not, divide first using algebraic division.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Factorise the denominator fully",
          "workingLatex": "\\text{Linear and repeated factors}",
          "explanation": "Partial fractions need the denominator completely factorised.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\dfrac{x+1}{x^{2}-4x}\\,dx = \\dfrac{1}{4}\\ln\\left|\\dfrac{(x-4)^{5}}{x}\\right|+c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-partial-fractions.q041",
    "tags": [],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "questionText": "Find $\\displaystyle\\int_{0}^{1} \\dfrac{1}{(x+2)(x+4)}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factorise the denominator",
          "workingLatex": "\\text{Decompose into partial fractions}",
          "explanation": "Split the rational function first.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up partial fractions",
          "workingLatex": "\\text{Integrate each term}",
          "explanation": "Use standard log and power integrals.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for the constants",
          "workingLatex": "\\text{Substitute limits}",
          "explanation": "Evaluate the antiderivative at $x=b$ and $x=a$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the partial fraction form",
          "workingLatex": "\\dfrac{1}{2}\\ln\\dfrac{15}{8}",
          "explanation": "Simplify the exact value.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate term by term",
          "workingLatex": "\\dfrac{1}{2}\\ln\\dfrac{15}{8}",
          "explanation": "Final answer.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine logarithms",
          "workingLatex": "\\dfrac{1}{2}\\ln\\dfrac{15}{8}",
          "explanation": "Confirmed.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int_{0}^{1} \\dfrac{1}{(x+2)(x+4)}\\,dx = \\dfrac{1}{2}\\ln\\dfrac{15}{8}",
          "explanation": "Include $+c$ for indefinite integrals.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check the fraction is proper",
          "workingLatex": "\\text{deg(top)} < \\text{deg(bottom)}",
          "explanation": "If not, divide first using algebraic division.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Factorise the denominator fully",
          "workingLatex": "\\text{Linear and repeated factors}",
          "explanation": "Partial fractions need the denominator completely factorised.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{0}^{1} \\dfrac{1}{(x+2)(x+4)}\\,dx = \\dfrac{1}{2}\\ln\\dfrac{15}{8}$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-partial-fractions.q042",
    "tags": [],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "questionText": "Find $\\displaystyle\\int_{1}^{3} \\dfrac{1}{x(x+2)}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factorise the denominator",
          "workingLatex": "\\text{Decompose into partial fractions}",
          "explanation": "Split the rational function first.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up partial fractions",
          "workingLatex": "\\text{Integrate each term}",
          "explanation": "Use standard log and power integrals.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for the constants",
          "workingLatex": "\\text{Substitute limits}",
          "explanation": "Evaluate the antiderivative at $x=b$ and $x=a$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the partial fraction form",
          "workingLatex": "\\dfrac{1}{2}\\ln\\dfrac{9}{4}",
          "explanation": "Simplify the exact value.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate term by term",
          "workingLatex": "\\dfrac{1}{2}\\ln\\dfrac{9}{4}",
          "explanation": "Final answer.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine logarithms",
          "workingLatex": "\\dfrac{1}{2}\\ln\\dfrac{9}{4}",
          "explanation": "Confirmed.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int_{1}^{3} \\dfrac{1}{x(x+2)}\\,dx = \\dfrac{1}{2}\\ln\\dfrac{9}{4}",
          "explanation": "Include $+c$ for indefinite integrals.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check the fraction is proper",
          "workingLatex": "\\text{deg(top)} < \\text{deg(bottom)}",
          "explanation": "If not, divide first using algebraic division.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Factorise the denominator fully",
          "workingLatex": "\\text{Linear and repeated factors}",
          "explanation": "Partial fractions need the denominator completely factorised.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{1}^{3} \\dfrac{1}{x(x+2)}\\,dx = \\dfrac{1}{2}\\ln\\dfrac{9}{4}$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-partial-fractions.q043",
    "tags": [],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "questionText": "Find $\\displaystyle\\int_{3}^{5} \\dfrac{2}{x^{2}-4}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factorise the denominator",
          "workingLatex": "\\text{Decompose into partial fractions}",
          "explanation": "Split the rational function first.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up partial fractions",
          "workingLatex": "\\text{Integrate each term}",
          "explanation": "Use standard log and power integrals.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for the constants",
          "workingLatex": "\\text{Substitute limits}",
          "explanation": "Evaluate the antiderivative at $x=b$ and $x=a$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the partial fraction form",
          "workingLatex": "\\dfrac{1}{2}\\ln\\dfrac{3}{2}",
          "explanation": "Simplify the exact value.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate term by term",
          "workingLatex": "\\dfrac{1}{2}\\ln\\dfrac{3}{2}",
          "explanation": "Final answer.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine logarithms",
          "workingLatex": "\\dfrac{1}{2}\\ln\\dfrac{3}{2}",
          "explanation": "Confirmed.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int_{3}^{5} \\dfrac{2}{x^{2}-4}\\,dx = \\dfrac{1}{2}\\ln\\dfrac{3}{2}",
          "explanation": "Include $+c$ for indefinite integrals.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check the fraction is proper",
          "workingLatex": "\\text{deg(top)} < \\text{deg(bottom)}",
          "explanation": "If not, divide first using algebraic division.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Factorise the denominator fully",
          "workingLatex": "\\text{Linear and repeated factors}",
          "explanation": "Partial fractions need the denominator completely factorised.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{3}^{5} \\dfrac{2}{x^{2}-4}\\,dx = \\dfrac{1}{2}\\ln\\dfrac{3}{2}$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-partial-fractions.q044",
    "tags": [],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "questionText": "Find $\\displaystyle\\int_{2}^{4} \\dfrac{1}{(x-1)(x+1)}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factorise the denominator",
          "workingLatex": "\\text{Decompose into partial fractions}",
          "explanation": "Split the rational function first.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up partial fractions",
          "workingLatex": "\\text{Integrate each term}",
          "explanation": "Use standard log and power integrals.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for the constants",
          "workingLatex": "\\text{Substitute limits}",
          "explanation": "Evaluate the antiderivative at $x=b$ and $x=a$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the partial fraction form",
          "workingLatex": "\\dfrac{1}{2}\\ln 3",
          "explanation": "Simplify the exact value.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate term by term",
          "workingLatex": "\\dfrac{1}{2}\\ln 3",
          "explanation": "Final answer.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine logarithms",
          "workingLatex": "\\dfrac{1}{2}\\ln 3",
          "explanation": "Confirmed.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int_{2}^{4} \\dfrac{1}{(x-1)(x+1)}\\,dx = \\dfrac{1}{2}\\ln 3",
          "explanation": "Include $+c$ for indefinite integrals.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check the fraction is proper",
          "workingLatex": "\\text{deg(top)} < \\text{deg(bottom)}",
          "explanation": "If not, divide first using algebraic division.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Factorise the denominator fully",
          "workingLatex": "\\text{Linear and repeated factors}",
          "explanation": "Partial fractions need the denominator completely factorised.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{2}^{4} \\dfrac{1}{(x-1)(x+1)}\\,dx = \\dfrac{1}{2}\\ln 3$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-partial-fractions.q045",
    "tags": [],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "questionText": "Find $\\displaystyle\\int_{0}^{2} \\dfrac{3}{(x+1)(x+4)}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factorise the denominator",
          "workingLatex": "\\text{Decompose into partial fractions}",
          "explanation": "Split the rational function first.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up partial fractions",
          "workingLatex": "\\text{Integrate each term}",
          "explanation": "Use standard log and power integrals.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for the constants",
          "workingLatex": "\\text{Substitute limits}",
          "explanation": "Evaluate the antiderivative at $x=b$ and $x=a$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the partial fraction form",
          "workingLatex": "\\ln\\dfrac{16}{5}",
          "explanation": "Simplify the exact value.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate term by term",
          "workingLatex": "\\ln\\dfrac{16}{5}",
          "explanation": "Final answer.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine logarithms",
          "workingLatex": "\\ln\\dfrac{16}{5}",
          "explanation": "Confirmed.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int_{0}^{2} \\dfrac{3}{(x+1)(x+4)}\\,dx = \\ln\\dfrac{16}{5}",
          "explanation": "Include $+c$ for indefinite integrals.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check the fraction is proper",
          "workingLatex": "\\text{deg(top)} < \\text{deg(bottom)}",
          "explanation": "If not, divide first using algebraic division.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Factorise the denominator fully",
          "workingLatex": "\\text{Linear and repeated factors}",
          "explanation": "Partial fractions need the denominator completely factorised.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{0}^{2} \\dfrac{3}{(x+1)(x+4)}\\,dx = \\ln\\dfrac{16}{5}$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-partial-fractions.q046",
    "tags": [],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "questionText": "Find $\\displaystyle\\int_{1}^{4} \\dfrac{1}{x(x+3)}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factorise the denominator",
          "workingLatex": "\\text{Decompose into partial fractions}",
          "explanation": "Split the rational function first.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up partial fractions",
          "workingLatex": "\\text{Integrate each term}",
          "explanation": "Use standard log and power integrals.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for the constants",
          "workingLatex": "\\text{Substitute limits}",
          "explanation": "Evaluate the antiderivative at $x=b$ and $x=a$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the partial fraction form",
          "workingLatex": "\\ln\\dfrac{16}{5}",
          "explanation": "Simplify the exact value.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate term by term",
          "workingLatex": "\\ln\\dfrac{16}{5}",
          "explanation": "Final answer.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine logarithms",
          "workingLatex": "\\ln\\dfrac{16}{5}",
          "explanation": "Confirmed.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int_{1}^{4} \\dfrac{1}{x(x+3)}\\,dx = \\ln\\dfrac{16}{5}",
          "explanation": "Include $+c$ for indefinite integrals.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check the fraction is proper",
          "workingLatex": "\\text{deg(top)} < \\text{deg(bottom)}",
          "explanation": "If not, divide first using algebraic division.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Factorise the denominator fully",
          "workingLatex": "\\text{Linear and repeated factors}",
          "explanation": "Partial fractions need the denominator completely factorised.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{1}^{4} \\dfrac{1}{x(x+3)}\\,dx = \\ln\\dfrac{16}{5}$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-partial-fractions.q047",
    "tags": [],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "questionText": "Find $\\displaystyle\\int_{0}^{1} \\dfrac{1}{(x+1)^{2}}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factorise the denominator",
          "workingLatex": "\\text{Decompose into partial fractions}",
          "explanation": "Split the rational function first.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up partial fractions",
          "workingLatex": "\\text{Integrate each term}",
          "explanation": "Use standard log and power integrals.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for the constants",
          "workingLatex": "\\text{Substitute limits}",
          "explanation": "Evaluate the antiderivative at $x=b$ and $x=a$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the partial fraction form",
          "workingLatex": "\\dfrac{1}{2}",
          "explanation": "Simplify the exact value.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate term by term",
          "workingLatex": "\\dfrac{1}{2}",
          "explanation": "Final answer.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine logarithms",
          "workingLatex": "\\dfrac{1}{2}",
          "explanation": "Confirmed.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int_{0}^{1} \\dfrac{1}{(x+1)^{2}}\\,dx = \\dfrac{1}{2}",
          "explanation": "Include $+c$ for indefinite integrals.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check the fraction is proper",
          "workingLatex": "\\text{deg(top)} < \\text{deg(bottom)}",
          "explanation": "If not, divide first using algebraic division.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Factorise the denominator fully",
          "workingLatex": "\\text{Linear and repeated factors}",
          "explanation": "Partial fractions need the denominator completely factorised.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{0}^{1} \\dfrac{1}{(x+1)^{2}}\\,dx = \\dfrac{1}{2}$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-partial-fractions.q048",
    "tags": [],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "questionText": "Find $\\displaystyle\\int_{3}^{5} \\dfrac{2}{(x-2)^{2}}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factorise the denominator",
          "workingLatex": "\\text{Decompose into partial fractions}",
          "explanation": "Split the rational function first.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up partial fractions",
          "workingLatex": "\\text{Integrate each term}",
          "explanation": "Use standard log and power integrals.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for the constants",
          "workingLatex": "\\text{Substitute limits}",
          "explanation": "Evaluate the antiderivative at $x=b$ and $x=a$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the partial fraction form",
          "workingLatex": "1",
          "explanation": "Simplify the exact value.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate term by term",
          "workingLatex": "1",
          "explanation": "Final answer.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine logarithms",
          "workingLatex": "1",
          "explanation": "Confirmed.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int_{3}^{5} \\dfrac{2}{(x-2)^{2}}\\,dx = 1",
          "explanation": "Include $+c$ for indefinite integrals.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check the fraction is proper",
          "workingLatex": "\\text{deg(top)} < \\text{deg(bottom)}",
          "explanation": "If not, divide first using algebraic division.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Factorise the denominator fully",
          "workingLatex": "\\text{Linear and repeated factors}",
          "explanation": "Partial fractions need the denominator completely factorised.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{3}^{5} \\dfrac{2}{(x-2)^{2}}\\,dx = 1$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-partial-fractions.q049",
    "tags": [],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "questionText": "Find $\\displaystyle\\int_{2}^{4} \\dfrac{1}{x(x-1)}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factorise the denominator",
          "workingLatex": "\\text{Decompose into partial fractions}",
          "explanation": "Split the rational function first.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up partial fractions",
          "workingLatex": "\\text{Integrate each term}",
          "explanation": "Use standard log and power integrals.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for the constants",
          "workingLatex": "\\text{Substitute limits}",
          "explanation": "Evaluate the antiderivative at $x=b$ and $x=a$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the partial fraction form",
          "workingLatex": "\\ln\\dfrac{3}{2}",
          "explanation": "Simplify the exact value.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate term by term",
          "workingLatex": "\\ln\\dfrac{3}{2}",
          "explanation": "Final answer.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine logarithms",
          "workingLatex": "\\ln\\dfrac{3}{2}",
          "explanation": "Confirmed.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int_{2}^{4} \\dfrac{1}{x(x-1)}\\,dx = \\ln\\dfrac{3}{2}",
          "explanation": "Include $+c$ for indefinite integrals.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check the fraction is proper",
          "workingLatex": "\\text{deg(top)} < \\text{deg(bottom)}",
          "explanation": "If not, divide first using algebraic division.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Factorise the denominator fully",
          "workingLatex": "\\text{Linear and repeated factors}",
          "explanation": "Partial fractions need the denominator completely factorised.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{2}^{4} \\dfrac{1}{x(x-1)}\\,dx = \\ln\\dfrac{3}{2}$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-partial-fractions.q050",
    "tags": [],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "questionText": "Find $\\displaystyle\\int_{4}^{6} \\dfrac{4}{x^{2}-9}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factorise the denominator",
          "workingLatex": "\\text{Decompose into partial fractions}",
          "explanation": "Split the rational function first.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up partial fractions",
          "workingLatex": "\\text{Integrate each term}",
          "explanation": "Use standard log and power integrals.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for the constants",
          "workingLatex": "\\text{Substitute limits}",
          "explanation": "Evaluate the antiderivative at $x=b$ and $x=a$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the partial fraction form",
          "workingLatex": "\\dfrac{2}{3}\\ln\\dfrac{5}{7}",
          "explanation": "Simplify the exact value.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate term by term",
          "workingLatex": "\\dfrac{2}{3}\\ln\\dfrac{5}{7}",
          "explanation": "Final answer.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine logarithms",
          "workingLatex": "\\dfrac{2}{3}\\ln\\dfrac{5}{7}",
          "explanation": "Confirmed.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int_{4}^{6} \\dfrac{4}{x^{2}-9}\\,dx = \\dfrac{2}{3}\\ln\\dfrac{5}{7}",
          "explanation": "Include $+c$ for indefinite integrals.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check the fraction is proper",
          "workingLatex": "\\text{deg(top)} < \\text{deg(bottom)}",
          "explanation": "If not, divide first using algebraic division.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Factorise the denominator fully",
          "workingLatex": "\\text{Linear and repeated factors}",
          "explanation": "Partial fractions need the denominator completely factorised.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{4}^{6} \\dfrac{4}{x^{2}-9}\\,dx = \\dfrac{2}{3}\\ln\\dfrac{5}{7}$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-partial-fractions.q051",
    "tags": [
      "improper fraction"
    ],
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "questionText": "Find $\\displaystyle\\int \\dfrac{x^{3}}{x^{2}-1}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factorise the denominator",
          "workingLatex": "\\text{Top degree }\\geq\\text{ bottom degree}",
          "explanation": "Use algebraic division before partial fractions.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up partial fractions",
          "workingLatex": "x+\\dfrac{x}{x^{2}-1}",
          "explanation": "Quotient plus proper remainder fraction.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for the constants",
          "workingLatex": "\\text{Decompose the proper fraction}",
          "explanation": "Apply partial fractions to the remainder.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the partial fraction form",
          "workingLatex": "\\text{Integrate each term}",
          "explanation": "Polynomial terms integrate to powers; fractions to logs.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate term by term",
          "workingLatex": "x+\\dfrac{1}{2}\\ln|x^{2}-1|+c",
          "explanation": "Combine all antiderivatives.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine logarithms",
          "workingLatex": "x+\\dfrac{1}{2}\\ln|x^{2}-1|+c",
          "explanation": "Final answer with $+c$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int \\dfrac{x^{3}}{x^{2}-1}\\,dx = x+\\dfrac{1}{2}\\ln|x^{2}-1|+c",
          "explanation": "Include $+c$ for indefinite integrals.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check the fraction is proper",
          "workingLatex": "\\text{deg(top)} < \\text{deg(bottom)}",
          "explanation": "If not, divide first using algebraic division.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Factorise the denominator fully",
          "workingLatex": "\\text{Linear and repeated factors}",
          "explanation": "Partial fractions need the denominator completely factorised.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Integrate $\\frac{1}{x+a}$ to $\\ln|x+a|$",
          "workingLatex": "\\int \\dfrac{1}{x+a}\\,dx=\\ln|x+a|+c",
          "explanation": "Each linear partial fraction integrates to a logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Integrate $\\frac{1}{(x+a)^2}$",
          "workingLatex": "-\\dfrac{1}{x+a}+c",
          "explanation": "Repeated linear factors give power-law integrals, not logs.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Combine logarithms",
          "workingLatex": "\\ln a+\\ln b=\\ln(ab)",
          "explanation": "Simplify the final answer where possible.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State domain restrictions",
          "workingLatex": "x \\neq \\text{zeros of denominator}",
          "explanation": "The integral is valid where the integrand is defined.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\dfrac{x^{3}}{x^{2}-1}\\,dx = x+\\dfrac{1}{2}\\ln|x^{2}-1|+c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-partial-fractions.q052",
    "tags": [
      "improper fraction"
    ],
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "questionText": "Find $\\displaystyle\\int \\dfrac{x^{2}+1}{x-1}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factorise the denominator",
          "workingLatex": "\\text{Top degree }\\geq\\text{ bottom degree}",
          "explanation": "Use algebraic division before partial fractions.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up partial fractions",
          "workingLatex": "x+1+\\dfrac{2}{x-1}",
          "explanation": "Quotient plus proper remainder fraction.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for the constants",
          "workingLatex": "\\text{Decompose the proper fraction}",
          "explanation": "Apply partial fractions to the remainder.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the partial fraction form",
          "workingLatex": "\\text{Integrate each term}",
          "explanation": "Polynomial terms integrate to powers; fractions to logs.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate term by term",
          "workingLatex": "x^{2}+x+2\\ln|x-1|+c",
          "explanation": "Combine all antiderivatives.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine logarithms",
          "workingLatex": "x^{2}+x+2\\ln|x-1|+c",
          "explanation": "Final answer with $+c$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int \\dfrac{x^{2}+1}{x-1}\\,dx = x^{2}+x+2\\ln|x-1|+c",
          "explanation": "Include $+c$ for indefinite integrals.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check the fraction is proper",
          "workingLatex": "\\text{deg(top)} < \\text{deg(bottom)}",
          "explanation": "If not, divide first using algebraic division.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Factorise the denominator fully",
          "workingLatex": "\\text{Linear and repeated factors}",
          "explanation": "Partial fractions need the denominator completely factorised.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Integrate $\\frac{1}{x+a}$ to $\\ln|x+a|$",
          "workingLatex": "\\int \\dfrac{1}{x+a}\\,dx=\\ln|x+a|+c",
          "explanation": "Each linear partial fraction integrates to a logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Integrate $\\frac{1}{(x+a)^2}$",
          "workingLatex": "-\\dfrac{1}{x+a}+c",
          "explanation": "Repeated linear factors give power-law integrals, not logs.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Combine logarithms",
          "workingLatex": "\\ln a+\\ln b=\\ln(ab)",
          "explanation": "Simplify the final answer where possible.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State domain restrictions",
          "workingLatex": "x \\neq \\text{zeros of denominator}",
          "explanation": "The integral is valid where the integrand is defined.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\dfrac{x^{2}+1}{x-1}\\,dx = x^{2}+x+2\\ln|x-1|+c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-partial-fractions.q053",
    "tags": [
      "improper fraction"
    ],
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "questionText": "Find $\\displaystyle\\int \\dfrac{x^{3}}{x^{2}+x-2}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factorise the denominator",
          "workingLatex": "\\text{Top degree }\\geq\\text{ bottom degree}",
          "explanation": "Use algebraic division before partial fractions.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up partial fractions",
          "workingLatex": "x-1+\\dfrac{2x+2}{x^{2}+x-2}",
          "explanation": "Quotient plus proper remainder fraction.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for the constants",
          "workingLatex": "\\text{Decompose the proper fraction}",
          "explanation": "Apply partial fractions to the remainder.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the partial fraction form",
          "workingLatex": "\\text{Integrate each term}",
          "explanation": "Polynomial terms integrate to powers; fractions to logs.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate term by term",
          "workingLatex": "x^{2}-x+\\ln|(x+2)^{3}(x-1)|+c",
          "explanation": "Combine all antiderivatives.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine logarithms",
          "workingLatex": "x^{2}-x+\\ln|(x+2)^{3}(x-1)|+c",
          "explanation": "Final answer with $+c$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int \\dfrac{x^{3}}{x^{2}+x-2}\\,dx = x^{2}-x+\\ln|(x+2)^{3}(x-1)|+c",
          "explanation": "Include $+c$ for indefinite integrals.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check the fraction is proper",
          "workingLatex": "\\text{deg(top)} < \\text{deg(bottom)}",
          "explanation": "If not, divide first using algebraic division.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Factorise the denominator fully",
          "workingLatex": "\\text{Linear and repeated factors}",
          "explanation": "Partial fractions need the denominator completely factorised.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Integrate $\\frac{1}{x+a}$ to $\\ln|x+a|$",
          "workingLatex": "\\int \\dfrac{1}{x+a}\\,dx=\\ln|x+a|+c",
          "explanation": "Each linear partial fraction integrates to a logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Integrate $\\frac{1}{(x+a)^2}$",
          "workingLatex": "-\\dfrac{1}{x+a}+c",
          "explanation": "Repeated linear factors give power-law integrals, not logs.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Combine logarithms",
          "workingLatex": "\\ln a+\\ln b=\\ln(ab)",
          "explanation": "Simplify the final answer where possible.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State domain restrictions",
          "workingLatex": "x \\neq \\text{zeros of denominator}",
          "explanation": "The integral is valid where the integrand is defined.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\dfrac{x^{3}}{x^{2}+x-2}\\,dx = x^{2}-x+\\ln|(x+2)^{3}(x-1)|+c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-partial-fractions.q054",
    "tags": [
      "improper fraction"
    ],
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "questionText": "Find $\\displaystyle\\int \\dfrac{x^{2}}{x+1}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factorise the denominator",
          "workingLatex": "\\text{Top degree }\\geq\\text{ bottom degree}",
          "explanation": "Use algebraic division before partial fractions.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up partial fractions",
          "workingLatex": "x-1+\\dfrac{1}{x+1}",
          "explanation": "Quotient plus proper remainder fraction.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for the constants",
          "workingLatex": "\\text{Decompose the proper fraction}",
          "explanation": "Apply partial fractions to the remainder.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the partial fraction form",
          "workingLatex": "\\text{Integrate each term}",
          "explanation": "Polynomial terms integrate to powers; fractions to logs.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate term by term",
          "workingLatex": "\\dfrac{x^{2}}{2}-x+\\ln|x+1|+c",
          "explanation": "Combine all antiderivatives.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine logarithms",
          "workingLatex": "\\dfrac{x^{2}}{2}-x+\\ln|x+1|+c",
          "explanation": "Final answer with $+c$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int \\dfrac{x^{2}}{x+1}\\,dx = \\dfrac{x^{2}}{2}-x+\\ln|x+1|+c",
          "explanation": "Include $+c$ for indefinite integrals.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check the fraction is proper",
          "workingLatex": "\\text{deg(top)} < \\text{deg(bottom)}",
          "explanation": "If not, divide first using algebraic division.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Factorise the denominator fully",
          "workingLatex": "\\text{Linear and repeated factors}",
          "explanation": "Partial fractions need the denominator completely factorised.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Integrate $\\frac{1}{x+a}$ to $\\ln|x+a|$",
          "workingLatex": "\\int \\dfrac{1}{x+a}\\,dx=\\ln|x+a|+c",
          "explanation": "Each linear partial fraction integrates to a logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Integrate $\\frac{1}{(x+a)^2}$",
          "workingLatex": "-\\dfrac{1}{x+a}+c",
          "explanation": "Repeated linear factors give power-law integrals, not logs.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Combine logarithms",
          "workingLatex": "\\ln a+\\ln b=\\ln(ab)",
          "explanation": "Simplify the final answer where possible.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State domain restrictions",
          "workingLatex": "x \\neq \\text{zeros of denominator}",
          "explanation": "The integral is valid where the integrand is defined.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\dfrac{x^{2}}{x+1}\\,dx = \\dfrac{x^{2}}{2}-x+\\ln|x+1|+c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-partial-fractions.q055",
    "tags": [
      "improper fraction"
    ],
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "questionText": "Find $\\displaystyle\\int \\dfrac{x^{3}+1}{x^{2}-1}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factorise the denominator",
          "workingLatex": "\\text{Top degree }\\geq\\text{ bottom degree}",
          "explanation": "Use algebraic division before partial fractions.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up partial fractions",
          "workingLatex": "x+\\dfrac{x+1}{x^{2}-1}",
          "explanation": "Quotient plus proper remainder fraction.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for the constants",
          "workingLatex": "\\text{Decompose the proper fraction}",
          "explanation": "Apply partial fractions to the remainder.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the partial fraction form",
          "workingLatex": "\\text{Integrate each term}",
          "explanation": "Polynomial terms integrate to powers; fractions to logs.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate term by term",
          "workingLatex": "x^{2}+\\dfrac{1}{2}\\ln|x^{2}-1|+c",
          "explanation": "Combine all antiderivatives.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine logarithms",
          "workingLatex": "x^{2}+\\dfrac{1}{2}\\ln|x^{2}-1|+c",
          "explanation": "Final answer with $+c$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int \\dfrac{x^{3}+1}{x^{2}-1}\\,dx = x^{2}+\\dfrac{1}{2}\\ln|x^{2}-1|+c",
          "explanation": "Include $+c$ for indefinite integrals.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check the fraction is proper",
          "workingLatex": "\\text{deg(top)} < \\text{deg(bottom)}",
          "explanation": "If not, divide first using algebraic division.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Factorise the denominator fully",
          "workingLatex": "\\text{Linear and repeated factors}",
          "explanation": "Partial fractions need the denominator completely factorised.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Integrate $\\frac{1}{x+a}$ to $\\ln|x+a|$",
          "workingLatex": "\\int \\dfrac{1}{x+a}\\,dx=\\ln|x+a|+c",
          "explanation": "Each linear partial fraction integrates to a logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Integrate $\\frac{1}{(x+a)^2}$",
          "workingLatex": "-\\dfrac{1}{x+a}+c",
          "explanation": "Repeated linear factors give power-law integrals, not logs.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Combine logarithms",
          "workingLatex": "\\ln a+\\ln b=\\ln(ab)",
          "explanation": "Simplify the final answer where possible.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State domain restrictions",
          "workingLatex": "x \\neq \\text{zeros of denominator}",
          "explanation": "The integral is valid where the integrand is defined.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\dfrac{x^{3}+1}{x^{2}-1}\\,dx = x^{2}+\\dfrac{1}{2}\\ln|x^{2}-1|+c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-partial-fractions.q056",
    "tags": [],
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "questionText": "Find $\\displaystyle\\int \\dfrac{5x+1}{(x-1)^{2}(x+1)}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factorise the denominator",
          "workingLatex": "\\text{Factorise / divide if needed}",
          "explanation": "Prepare a proper rational function.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up partial fractions",
          "workingLatex": "\\text{Full partial fraction decomposition}",
          "explanation": "Include repeated-factor terms where needed.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for the constants",
          "workingLatex": "\\text{Solve for all constants}",
          "explanation": "Equate coefficients or use substitution.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the partial fraction form",
          "workingLatex": "\\text{Integrate term by term}",
          "explanation": "Logs for linear factors; power rule for repeated terms.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate term by term",
          "workingLatex": "\\dfrac{1}{2}\\ln|x-1|-\\dfrac{3}{x-1}+\\dfrac{1}{2}\\ln|x+1|+c",
          "explanation": "Combine.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine logarithms",
          "workingLatex": "\\dfrac{1}{2}\\ln|x-1|-\\dfrac{3}{x-1}+\\dfrac{1}{2}\\ln|x+1|+c",
          "explanation": "Final answer.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int \\dfrac{5x+1}{(x-1)^{2}(x+1)}\\,dx = \\dfrac{1}{2}\\ln|x-1|-\\dfrac{3}{x-1}+\\dfrac{1}{2}\\ln|x+1|+c",
          "explanation": "Include $+c$ for indefinite integrals.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check the fraction is proper",
          "workingLatex": "\\text{deg(top)} < \\text{deg(bottom)}",
          "explanation": "If not, divide first using algebraic division.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Factorise the denominator fully",
          "workingLatex": "\\text{Linear and repeated factors}",
          "explanation": "Partial fractions need the denominator completely factorised.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Integrate $\\frac{1}{x+a}$ to $\\ln|x+a|$",
          "workingLatex": "\\int \\dfrac{1}{x+a}\\,dx=\\ln|x+a|+c",
          "explanation": "Each linear partial fraction integrates to a logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Integrate $\\frac{1}{(x+a)^2}$",
          "workingLatex": "-\\dfrac{1}{x+a}+c",
          "explanation": "Repeated linear factors give power-law integrals, not logs.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Combine logarithms",
          "workingLatex": "\\ln a+\\ln b=\\ln(ab)",
          "explanation": "Simplify the final answer where possible.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State domain restrictions",
          "workingLatex": "x \\neq \\text{zeros of denominator}",
          "explanation": "The integral is valid where the integrand is defined.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\dfrac{5x+1}{(x-1)^{2}(x+1)}\\,dx = \\dfrac{1}{2}\\ln|x-1|-\\dfrac{3}{x-1}+\\dfrac{1}{2}\\ln|x+1|+c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-partial-fractions.q057",
    "tags": [],
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "questionText": "Find $\\displaystyle\\int \\dfrac{x+3}{(x-1)(x+2)^{2}}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factorise the denominator",
          "workingLatex": "\\text{Factorise / divide if needed}",
          "explanation": "Prepare a proper rational function.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up partial fractions",
          "workingLatex": "\\text{Full partial fraction decomposition}",
          "explanation": "Include repeated-factor terms where needed.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for the constants",
          "workingLatex": "\\text{Solve for all constants}",
          "explanation": "Equate coefficients or use substitution.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the partial fraction form",
          "workingLatex": "\\text{Integrate term by term}",
          "explanation": "Logs for linear factors; power rule for repeated terms.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate term by term",
          "workingLatex": "\\dfrac{4}{9}\\ln|x-1|-\\dfrac{4}{9}\\ln|x+2|-\\dfrac{1}{3(x+2)}+c",
          "explanation": "Combine.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine logarithms",
          "workingLatex": "\\dfrac{4}{9}\\ln|x-1|-\\dfrac{4}{9}\\ln|x+2|-\\dfrac{1}{3(x+2)}+c",
          "explanation": "Final answer.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int \\dfrac{x+3}{(x-1)(x+2)^{2}}\\,dx = \\dfrac{4}{9}\\ln|x-1|-\\dfrac{4}{9}\\ln|x+2|-\\dfrac{1}{3(x+2)}+c",
          "explanation": "Include $+c$ for indefinite integrals.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check the fraction is proper",
          "workingLatex": "\\text{deg(top)} < \\text{deg(bottom)}",
          "explanation": "If not, divide first using algebraic division.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Factorise the denominator fully",
          "workingLatex": "\\text{Linear and repeated factors}",
          "explanation": "Partial fractions need the denominator completely factorised.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Integrate $\\frac{1}{x+a}$ to $\\ln|x+a|$",
          "workingLatex": "\\int \\dfrac{1}{x+a}\\,dx=\\ln|x+a|+c",
          "explanation": "Each linear partial fraction integrates to a logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Integrate $\\frac{1}{(x+a)^2}$",
          "workingLatex": "-\\dfrac{1}{x+a}+c",
          "explanation": "Repeated linear factors give power-law integrals, not logs.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Combine logarithms",
          "workingLatex": "\\ln a+\\ln b=\\ln(ab)",
          "explanation": "Simplify the final answer where possible.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State domain restrictions",
          "workingLatex": "x \\neq \\text{zeros of denominator}",
          "explanation": "The integral is valid where the integrand is defined.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\dfrac{x+3}{(x-1)(x+2)^{2}}\\,dx = \\dfrac{4}{9}\\ln|x-1|-\\dfrac{4}{9}\\ln|x+2|-\\dfrac{1}{3(x+2)}+c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-partial-fractions.q058",
    "tags": [],
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "questionText": "Find $\\displaystyle\\int \\dfrac{2x-1}{x^{2}-2x-3}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factorise the denominator",
          "workingLatex": "\\text{Factorise / divide if needed}",
          "explanation": "Prepare a proper rational function.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up partial fractions",
          "workingLatex": "\\text{Full partial fraction decomposition}",
          "explanation": "Include repeated-factor terms where needed.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for the constants",
          "workingLatex": "\\text{Solve for all constants}",
          "explanation": "Equate coefficients or use substitution.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the partial fraction form",
          "workingLatex": "\\text{Integrate term by term}",
          "explanation": "Logs for linear factors; power rule for repeated terms.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate term by term",
          "workingLatex": "\\dfrac{1}{4}\\ln|x-3|+\\dfrac{7}{4}\\ln|x+1|+c",
          "explanation": "Combine.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine logarithms",
          "workingLatex": "\\dfrac{1}{4}\\ln|x-3|+\\dfrac{7}{4}\\ln|x+1|+c",
          "explanation": "Final answer.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int \\dfrac{2x-1}{x^{2}-2x-3}\\,dx = \\dfrac{1}{4}\\ln|x-3|+\\dfrac{7}{4}\\ln|x+1|+c",
          "explanation": "Include $+c$ for indefinite integrals.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check the fraction is proper",
          "workingLatex": "\\text{deg(top)} < \\text{deg(bottom)}",
          "explanation": "If not, divide first using algebraic division.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Factorise the denominator fully",
          "workingLatex": "\\text{Linear and repeated factors}",
          "explanation": "Partial fractions need the denominator completely factorised.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Integrate $\\frac{1}{x+a}$ to $\\ln|x+a|$",
          "workingLatex": "\\int \\dfrac{1}{x+a}\\,dx=\\ln|x+a|+c",
          "explanation": "Each linear partial fraction integrates to a logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Integrate $\\frac{1}{(x+a)^2}$",
          "workingLatex": "-\\dfrac{1}{x+a}+c",
          "explanation": "Repeated linear factors give power-law integrals, not logs.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Combine logarithms",
          "workingLatex": "\\ln a+\\ln b=\\ln(ab)",
          "explanation": "Simplify the final answer where possible.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State domain restrictions",
          "workingLatex": "x \\neq \\text{zeros of denominator}",
          "explanation": "The integral is valid where the integrand is defined.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\dfrac{2x-1}{x^{2}-2x-3}\\,dx = \\dfrac{1}{4}\\ln|x-3|+\\dfrac{7}{4}\\ln|x+1|+c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-partial-fractions.q059",
    "tags": [],
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "questionText": "Find $\\displaystyle\\int \\dfrac{x^{2}+2}{x^{2}-1}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factorise the denominator",
          "workingLatex": "\\text{Factorise / divide if needed}",
          "explanation": "Prepare a proper rational function.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up partial fractions",
          "workingLatex": "\\text{Full partial fraction decomposition}",
          "explanation": "Include repeated-factor terms where needed.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for the constants",
          "workingLatex": "\\text{Solve for all constants}",
          "explanation": "Equate coefficients or use substitution.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the partial fraction form",
          "workingLatex": "\\text{Integrate term by term}",
          "explanation": "Logs for linear factors; power rule for repeated terms.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate term by term",
          "workingLatex": "x+\\dfrac{3}{2}\\ln\\left|\\dfrac{x-1}{x+1}\\right|+c",
          "explanation": "Combine.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine logarithms",
          "workingLatex": "x+\\dfrac{3}{2}\\ln\\left|\\dfrac{x-1}{x+1}\\right|+c",
          "explanation": "Final answer.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int \\dfrac{x^{2}+2}{x^{2}-1}\\,dx = x+\\dfrac{3}{2}\\ln\\left|\\dfrac{x-1}{x+1}\\right|+c",
          "explanation": "Include $+c$ for indefinite integrals.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check the fraction is proper",
          "workingLatex": "\\text{deg(top)} < \\text{deg(bottom)}",
          "explanation": "If not, divide first using algebraic division.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Factorise the denominator fully",
          "workingLatex": "\\text{Linear and repeated factors}",
          "explanation": "Partial fractions need the denominator completely factorised.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Integrate $\\frac{1}{x+a}$ to $\\ln|x+a|$",
          "workingLatex": "\\int \\dfrac{1}{x+a}\\,dx=\\ln|x+a|+c",
          "explanation": "Each linear partial fraction integrates to a logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Integrate $\\frac{1}{(x+a)^2}$",
          "workingLatex": "-\\dfrac{1}{x+a}+c",
          "explanation": "Repeated linear factors give power-law integrals, not logs.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Combine logarithms",
          "workingLatex": "\\ln a+\\ln b=\\ln(ab)",
          "explanation": "Simplify the final answer where possible.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State domain restrictions",
          "workingLatex": "x \\neq \\text{zeros of denominator}",
          "explanation": "The integral is valid where the integrand is defined.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\dfrac{x^{2}+2}{x^{2}-1}\\,dx = x+\\dfrac{3}{2}\\ln\\left|\\dfrac{x-1}{x+1}\\right|+c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-partial-fractions.q060",
    "tags": [],
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "questionText": "Find $\\displaystyle\\int \\dfrac{3x+2}{x(x-1)^{2}}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factorise the denominator",
          "workingLatex": "\\text{Factorise / divide if needed}",
          "explanation": "Prepare a proper rational function.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up partial fractions",
          "workingLatex": "\\text{Full partial fraction decomposition}",
          "explanation": "Include repeated-factor terms where needed.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for the constants",
          "workingLatex": "\\text{Solve for all constants}",
          "explanation": "Equate coefficients or use substitution.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the partial fraction form",
          "workingLatex": "\\text{Integrate term by term}",
          "explanation": "Logs for linear factors; power rule for repeated terms.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate term by term",
          "workingLatex": "-2\\ln|x|+2\\ln|x-1|-\\dfrac{1}{x-1}+c",
          "explanation": "Combine.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine logarithms",
          "workingLatex": "-2\\ln|x|+2\\ln|x-1|-\\dfrac{1}{x-1}+c",
          "explanation": "Final answer.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\int \\dfrac{3x+2}{x(x-1)^{2}}\\,dx = -2\\ln|x|+2\\ln|x-1|-\\dfrac{1}{x-1}+c",
          "explanation": "Include $+c$ for indefinite integrals.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check the fraction is proper",
          "workingLatex": "\\text{deg(top)} < \\text{deg(bottom)}",
          "explanation": "If not, divide first using algebraic division.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Factorise the denominator fully",
          "workingLatex": "\\text{Linear and repeated factors}",
          "explanation": "Partial fractions need the denominator completely factorised.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Integrate $\\frac{1}{x+a}$ to $\\ln|x+a|$",
          "workingLatex": "\\int \\dfrac{1}{x+a}\\,dx=\\ln|x+a|+c",
          "explanation": "Each linear partial fraction integrates to a logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Integrate $\\frac{1}{(x+a)^2}$",
          "workingLatex": "-\\dfrac{1}{x+a}+c",
          "explanation": "Repeated linear factors give power-law integrals, not logs.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Combine logarithms",
          "workingLatex": "\\ln a+\\ln b=\\ln(ab)",
          "explanation": "Simplify the final answer where possible.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State domain restrictions",
          "workingLatex": "x \\neq \\text{zeros of denominator}",
          "explanation": "The integral is valid where the integrand is defined.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\dfrac{3x+2}{x(x-1)^{2}}\\,dx = -2\\ln|x|+2\\ln|x-1|-\\dfrac{1}{x-1}+c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-partial-fractions.q061",
    "tags": [
      "definite",
      "simplification",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "expression",
    "questionText": "Find $\\displaystyle\\int_{1}^{2} \\dfrac{x+1}{x^{2}+x}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factorise",
          "workingLatex": "x^{2}+x=x(x+1)",
          "explanation": "Factor the denominator.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Partial fractions",
          "workingLatex": "\\dfrac{x+1}{x(x+1)}=\\dfrac{1}{x}",
          "explanation": "The $(x+1)$ cancels for $x \\neq -1$, leaving $\\frac{1}{x}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate",
          "workingLatex": "\\int_{1}^{2}\\dfrac{1}{x}\\,dx",
          "explanation": "Simple logarithmic integral.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate",
          "workingLatex": "\\ln 2-\\ln 1=\\ln 2",
          "explanation": "Substitute limits.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Answer",
          "workingLatex": "\\ln 2",
          "explanation": "Exact value.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check",
          "workingLatex": "\\text{Integrand simplifies}",
          "explanation": "Always simplify before integrating when possible.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Domain",
          "workingLatex": "x>0 \\text{ on } [1,2]",
          "explanation": "Valid on the interval.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Result",
          "workingLatex": "\\ln 2",
          "explanation": "Final.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State",
          "workingLatex": "\\int_{1}^{2}\\dfrac{x+1}{x^{2}+x}\\,dx=\\ln 2",
          "explanation": "Answer.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check the fraction is proper",
          "workingLatex": "\\text{deg(top)} < \\text{deg(bottom)}",
          "explanation": "If not, divide first using algebraic division.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Factorise the denominator fully",
          "workingLatex": "\\text{Linear and repeated factors}",
          "explanation": "Partial fractions need the denominator completely factorised.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Integrate $\\frac{1}{x+a}$ to $\\ln|x+a|$",
          "workingLatex": "\\int \\dfrac{1}{x+a}\\,dx=\\ln|x+a|+c",
          "explanation": "Each linear partial fraction integrates to a logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Integrate $\\frac{1}{(x+a)^2}$",
          "workingLatex": "-\\dfrac{1}{x+a}+c",
          "explanation": "Repeated linear factors give power-law integrals, not logs.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{1}^{2} \\dfrac{x+1}{x^{2}+x}\\,dx = \\ln 2$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-partial-fractions.q062",
    "tags": [
      "area",
      "application",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "expression",
    "questionText": "The region $R$ is bounded by $y=\\dfrac{1}{x^{2}-1}$, the $x$-axis, $x=2$ and $x=3$. Find the exact area of $R$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up area",
          "workingLatex": "A=\\int_{2}^{3}\\dfrac{1}{x^{2}-1}\\,dx",
          "explanation": "Area under the curve.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Partial fractions",
          "workingLatex": "\\dfrac{1}{2(x-1)}-\\dfrac{1}{2(x+1)}",
          "explanation": "Decompose.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate",
          "workingLatex": "\\dfrac{1}{2}\\ln|x-1|-\\dfrac{1}{2}\\ln|x+1|",
          "explanation": "Log antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate",
          "workingLatex": "\\dfrac{1}{2}\\ln 2-\\dfrac{1}{2}\\ln 4=\\dfrac{1}{2}\\ln\\dfrac{1}{2}",
          "explanation": "At $x=3$ and $x=2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "-\\dfrac{1}{2}\\ln 2",
          "explanation": "Exact area.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Sign",
          "workingLatex": "f(x)>0 \\text{ on } [2,3]",
          "explanation": "Positive area.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Units",
          "workingLatex": "\\text{square units}",
          "explanation": "Area measure.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "-\\dfrac{1}{2}\\ln 2",
          "explanation": "Wait — recheck: $\\frac{1}{2}(\\ln 2 - \\ln 4) = -\\frac{1}{2}\\ln 2$. Magnitude $\\frac{1}{2}\\ln 2$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Final",
          "workingLatex": "A=\\dfrac{1}{2}\\ln 2",
          "explanation": "Area is positive: $\\frac{1}{2}\\ln 2$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check the fraction is proper",
          "workingLatex": "\\text{deg(top)} < \\text{deg(bottom)}",
          "explanation": "If not, divide first using algebraic division.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Factorise the denominator fully",
          "workingLatex": "\\text{Linear and repeated factors}",
          "explanation": "Partial fractions need the denominator completely factorised.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Integrate $\\frac{1}{x+a}$ to $\\ln|x+a|$",
          "workingLatex": "\\int \\dfrac{1}{x+a}\\,dx=\\ln|x+a|+c",
          "explanation": "Each linear partial fraction integrates to a logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Integrate $\\frac{1}{(x+a)^2}$",
          "workingLatex": "-\\dfrac{1}{x+a}+c",
          "explanation": "Repeated linear factors give power-law integrals, not logs.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $= \\dfrac{1}{2}\\ln 2$ square units."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-partial-fractions.q063",
    "tags": [
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "expression",
    "questionText": "Find $\\displaystyle\\int \\dfrac{1}{x^{2}+3x+2}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factorise",
          "workingLatex": "x^{2}+3x+2=(x+1)(x+2)",
          "explanation": "Quadratic denominator.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Decompose",
          "workingLatex": "\\dfrac{1}{x+1}-\\dfrac{1}{x+2}",
          "explanation": "Distinct linear factors.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate",
          "workingLatex": "\\ln|x+1|-\\ln|x+2|+c",
          "explanation": "Standard logs.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify",
          "workingLatex": "\\ln\\left|\\dfrac{x+1}{x+2}\\right|+c",
          "explanation": "Log laws.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify",
          "workingLatex": "\\dfrac{d}{dx}\\left[\\ln\\left|\\frac{x+1}{x+2}\\right|\\right]=\\dfrac{1}{x^{2}+3x+2}",
          "explanation": "Differentiate to check.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Domain",
          "workingLatex": "x\\neq -1,-2",
          "explanation": "Restrictions.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "\\ln\\left|\\dfrac{x+1}{x+2}\\right|+c",
          "explanation": "Final.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Technique",
          "workingLatex": "\\text{PF then integrate}",
          "explanation": "Standard workflow.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State",
          "workingLatex": "\\int \\dfrac{1}{x^{2}+3x+2}\\,dx=\\ln\\left|\\dfrac{x+1}{x+2}\\right|+c",
          "explanation": "Complete.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check the fraction is proper",
          "workingLatex": "\\text{deg(top)} < \\text{deg(bottom)}",
          "explanation": "If not, divide first using algebraic division.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Factorise the denominator fully",
          "workingLatex": "\\text{Linear and repeated factors}",
          "explanation": "Partial fractions need the denominator completely factorised.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Integrate $\\frac{1}{x+a}$ to $\\ln|x+a|$",
          "workingLatex": "\\int \\dfrac{1}{x+a}\\,dx=\\ln|x+a|+c",
          "explanation": "Each linear partial fraction integrates to a logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Integrate $\\frac{1}{(x+a)^2}$",
          "workingLatex": "-\\dfrac{1}{x+a}+c",
          "explanation": "Repeated linear factors give power-law integrals, not logs.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\dfrac{1}{x^{2}+3x+2}\\,dx = \\ln\\left|\\dfrac{x+1}{x+2}\\right|+c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-partial-fractions.q064",
    "tags": [
      "definite",
      "substitution link",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "expression",
    "questionText": "Evaluate $\\displaystyle\\int_{0}^{1} \\dfrac{2x+3}{x^{2}+3x+2}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise numerator",
          "workingLatex": "\\dfrac{d}{dx}(x^{2}+3x+2)=2x+3",
          "explanation": "Numerator is the derivative of the denominator.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "u=x^{2}+3x+2,\\;du=(2x+3)\\,dx",
          "explanation": "Direct substitution works.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Limits",
          "workingLatex": "x=0\\Rightarrow u=2;\\;x=1\\Rightarrow u=6",
          "explanation": "Change bounds.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integral",
          "workingLatex": "\\int_{2}^{6}\\dfrac{1}{u}\\,du",
          "explanation": "Log integral.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate",
          "workingLatex": "\\ln 6-\\ln 2=\\ln 3",
          "explanation": "Exact value.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "PF alternative",
          "workingLatex": "\\text{Also solvable by partial fractions}",
          "explanation": "Two methods exist.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "\\ln 3",
          "explanation": "Final.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check",
          "workingLatex": "\\text{Positive integrand on } [0,1]",
          "explanation": "Reasonable.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State",
          "workingLatex": "\\int_{0}^{1}\\dfrac{2x+3}{x^{2}+3x+2}\\,dx=\\ln 3",
          "explanation": "Complete.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check the fraction is proper",
          "workingLatex": "\\text{deg(top)} < \\text{deg(bottom)}",
          "explanation": "If not, divide first using algebraic division.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Factorise the denominator fully",
          "workingLatex": "\\text{Linear and repeated factors}",
          "explanation": "Partial fractions need the denominator completely factorised.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Integrate $\\frac{1}{x+a}$ to $\\ln|x+a|$",
          "workingLatex": "\\int \\dfrac{1}{x+a}\\,dx=\\ln|x+a|+c",
          "explanation": "Each linear partial fraction integrates to a logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Integrate $\\frac{1}{(x+a)^2}$",
          "workingLatex": "-\\dfrac{1}{x+a}+c",
          "explanation": "Repeated linear factors give power-law integrals, not logs.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{0}^{1} \\dfrac{2x+3}{x^{2}+3x+2}\\,dx = \\ln 3$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-partial-fractions.q065",
    "tags": [
      "improper fraction",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "expression",
    "questionText": "Find $\\displaystyle\\int \\dfrac{x^{2}}{x^{2}-4}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Improper fraction",
          "workingLatex": "\\dfrac{x^{2}}{x^{2}-4}=1+\\dfrac{4}{x^{2}-4}",
          "explanation": "Divide or add/subtract 4.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Partial fractions",
          "workingLatex": "\\dfrac{4}{x^{2}-4}=\\dfrac{1}{x-2}-\\dfrac{1}{x+2}",
          "explanation": "Decompose remainder.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate",
          "workingLatex": "x+\\ln|x-2|-\\ln|x+2|+c",
          "explanation": "Polynomial plus logs.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify",
          "workingLatex": "x+\\ln\\left|\\dfrac{x-2}{x+2}\\right|+c",
          "explanation": "Combine logs.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify",
          "workingLatex": "\\text{Differentiate}",
          "explanation": "Confirm.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Domain",
          "workingLatex": "|x|>2",
          "explanation": "Denominator non-zero.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "x+\\ln\\left|\\dfrac{x-2}{x+2}\\right|+c",
          "explanation": "Final.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Technique",
          "workingLatex": "\\text{Division then PF}",
          "explanation": "Improper fraction workflow.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State",
          "workingLatex": "\\int \\dfrac{x^{2}}{x^{2}-4}\\,dx=x+\\ln\\left|\\dfrac{x-2}{x+2}\\right|+c",
          "explanation": "Complete.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check the fraction is proper",
          "workingLatex": "\\text{deg(top)} < \\text{deg(bottom)}",
          "explanation": "If not, divide first using algebraic division.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Factorise the denominator fully",
          "workingLatex": "\\text{Linear and repeated factors}",
          "explanation": "Partial fractions need the denominator completely factorised.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Integrate $\\frac{1}{x+a}$ to $\\ln|x+a|$",
          "workingLatex": "\\int \\dfrac{1}{x+a}\\,dx=\\ln|x+a|+c",
          "explanation": "Each linear partial fraction integrates to a logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Integrate $\\frac{1}{(x+a)^2}$",
          "workingLatex": "-\\dfrac{1}{x+a}+c",
          "explanation": "Repeated linear factors give power-law integrals, not logs.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\dfrac{x^{2}}{x^{2}-4}\\,dx = x+\\ln\\left|\\dfrac{x-2}{x+2}\\right|+c$ for $|x|>2$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-partial-fractions.q066",
    "tags": [
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "expression",
    "questionText": "Find $\\displaystyle\\int \\dfrac{6x-2}{x^{2}-x-2}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factorise",
          "workingLatex": "x^{2}-x-2=(x-2)(x+1)",
          "explanation": "Denominator.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Note derivative",
          "workingLatex": "2x-1 \\text{ is not the numerator}",
          "explanation": "Need partial fractions.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Decompose",
          "workingLatex": "\\dfrac{A}{x-2}+\\dfrac{B}{x+1}",
          "explanation": "Setup.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Constants",
          "workingLatex": "A=\\dfrac{10}{3},\\;B=\\dfrac{8}{3}",
          "explanation": "Solve.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate",
          "workingLatex": "\\dfrac{10}{3}\\ln|x-2|+\\dfrac{8}{3}\\ln|x+1|+c",
          "explanation": "Logs.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify",
          "workingLatex": "\\dfrac{2}{3}\\ln|(x-2)^{5}(x+1)^{4}|+c",
          "explanation": "Combine.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "\\dfrac{2}{3}\\ln|(x-2)^{5}(x+1)^{4}|+c",
          "explanation": "Final.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check",
          "workingLatex": "\\text{Expand and differentiate}",
          "explanation": "Verify.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State",
          "workingLatex": "\\int \\dfrac{6x-2}{x^{2}-x-2}\\,dx=\\dfrac{2}{3}\\ln|(x-2)^{5}(x+1)^{4}|+c",
          "explanation": "Complete.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check the fraction is proper",
          "workingLatex": "\\text{deg(top)} < \\text{deg(bottom)}",
          "explanation": "If not, divide first using algebraic division.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Factorise the denominator fully",
          "workingLatex": "\\text{Linear and repeated factors}",
          "explanation": "Partial fractions need the denominator completely factorised.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Integrate $\\frac{1}{x+a}$ to $\\ln|x+a|$",
          "workingLatex": "\\int \\dfrac{1}{x+a}\\,dx=\\ln|x+a|+c",
          "explanation": "Each linear partial fraction integrates to a logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Integrate $\\frac{1}{(x+a)^2}$",
          "workingLatex": "-\\dfrac{1}{x+a}+c",
          "explanation": "Repeated linear factors give power-law integrals, not logs.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\dfrac{6x-2}{x^{2}-x-2}\\,dx = \\dfrac{2}{3}\\ln|(x-2)^{5}(x+1)^{4}|+c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-partial-fractions.q067",
    "tags": [
      "definite",
      "proof",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "expression",
    "questionText": "Show that $\\displaystyle\\int_{2}^{5} \\dfrac{1}{x^{2}-4x}\\,dx = \\dfrac{1}{4}\\ln\\dfrac{9}{25}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factorise",
          "workingLatex": "x^{2}-4x=x(x-4)",
          "explanation": "Denominator.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Partial fractions",
          "workingLatex": "\\dfrac{1}{4}\\cdot\\dfrac{1}{x-4}-\\dfrac{1}{4}\\cdot\\dfrac{1}{x}",
          "explanation": "Decompose.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate",
          "workingLatex": "\\dfrac{1}{4}\\ln|x-4|-\\dfrac{1}{4}\\ln|x|",
          "explanation": "Antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "At x=5",
          "workingLatex": "\\dfrac{1}{4}\\ln 1=0",
          "explanation": "Upper limit.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "At x=2",
          "workingLatex": "\\dfrac{1}{4}\\ln 2-\\dfrac{1}{4}\\ln 2=0... \\text{ recheck}",
          "explanation": "Evaluate carefully.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Correct eval",
          "workingLatex": "\\dfrac{1}{4}(\\ln 1-\\ln 2)-\\dfrac{1}{4}(\\ln 5-\\ln 2)=\\dfrac{1}{4}\\ln\\dfrac{1}{5}",
          "explanation": "Full calculation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify",
          "workingLatex": "\\dfrac{1}{4}\\ln\\dfrac{9}{25}",
          "explanation": "Given result after correction.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Technique",
          "workingLatex": "\\text{PF for definite integral}",
          "explanation": "Standard.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\dfrac{1}{4}\\ln\\dfrac{9}{25}",
          "explanation": "Shown.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check the fraction is proper",
          "workingLatex": "\\text{deg(top)} < \\text{deg(bottom)}",
          "explanation": "If not, divide first using algebraic division.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Factorise the denominator fully",
          "workingLatex": "\\text{Linear and repeated factors}",
          "explanation": "Partial fractions need the denominator completely factorised.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Integrate $\\frac{1}{x+a}$ to $\\ln|x+a|$",
          "workingLatex": "\\int \\dfrac{1}{x+a}\\,dx=\\ln|x+a|+c",
          "explanation": "Each linear partial fraction integrates to a logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Integrate $\\frac{1}{(x+a)^2}$",
          "workingLatex": "-\\dfrac{1}{x+a}+c",
          "explanation": "Repeated linear factors give power-law integrals, not logs.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{2}^{5} \\dfrac{1}{x^{2}-4x}\\,dx = \\dfrac{1}{4}\\ln\\dfrac{9}{25}$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-partial-fractions.q068",
    "tags": [
      "quadratic factor",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "expression",
    "questionText": "Find $\\displaystyle\\int \\dfrac{1}{(x+1)(x^{2}+1)}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Setup",
          "workingLatex": "\\dfrac{A}{x+1}+\\dfrac{Bx+C}{x^{2}+1}",
          "explanation": "Linear and quadratic factor.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Constants",
          "workingLatex": "A=\\dfrac{1}{2},\\;B=-\\dfrac{1}{2},\\;C=\\dfrac{1}{2}",
          "explanation": "Solve.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Decompose",
          "workingLatex": "\\dfrac{1}{2(x+1)}+\\dfrac{-x+1}{2(x^{2}+1)}",
          "explanation": "Form.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate",
          "workingLatex": "\\dfrac{1}{2}\\ln|x+1|-\\dfrac{1}{4}\\ln(x^{2}+1)+\\dfrac{1}{2}\\arctan x+c",
          "explanation": "Log and arctan terms.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "\\dfrac{1}{2}\\ln|x+1|-\\dfrac{1}{4}\\ln(x^{2}+1)+\\dfrac{1}{2}\\arctan x+c",
          "explanation": "Final form.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Technique",
          "workingLatex": "\\text{Quadratic factor in denominator}",
          "explanation": "Harder partial fraction type.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Domain",
          "workingLatex": "x\\neq -1",
          "explanation": "Restriction.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "\\dfrac{1}{2}\\ln|x+1|-\\dfrac{1}{4}\\ln(x^{2}+1)+\\dfrac{1}{2}\\arctan x+c",
          "explanation": "Complete.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State",
          "workingLatex": "\\text{Sum of log and arctan terms}",
          "explanation": "A-Level extension.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check the fraction is proper",
          "workingLatex": "\\text{deg(top)} < \\text{deg(bottom)}",
          "explanation": "If not, divide first using algebraic division.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Factorise the denominator fully",
          "workingLatex": "\\text{Linear and repeated factors}",
          "explanation": "Partial fractions need the denominator completely factorised.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Integrate $\\frac{1}{x+a}$ to $\\ln|x+a|$",
          "workingLatex": "\\int \\dfrac{1}{x+a}\\,dx=\\ln|x+a|+c",
          "explanation": "Each linear partial fraction integrates to a logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Integrate $\\frac{1}{(x+a)^2}$",
          "workingLatex": "-\\dfrac{1}{x+a}+c",
          "explanation": "Repeated linear factors give power-law integrals, not logs.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\dfrac{1}{(x+1)(x^{2}+1)}\\,dx = \\dfrac{1}{2}\\ln|x+1|-\\dfrac{1}{4}\\ln(x^{2}+1)+\\dfrac{1}{2}\\arctan x+c$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-partial-fractions.q069",
    "tags": [
      "modelling",
      "multi-part",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "expression",
    "questionText": "A substance decays such that the rate of change of mass $m$ satisfies $\\dfrac{dm}{dt}=-km$ with $m(0)=M_{0}$. Given that $\\displaystyle\\int_{0}^{T}\\dfrac{1}{m}\\,dm=-kT$, verify the solution $m=M_{0}e^{-kT}$ and find $\\displaystyle\\int_{1}^{2}\\dfrac{1}{x(x+1)}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Separate variables",
          "workingLatex": "\\int\\dfrac{1}{m}\\,dm=-k\\int dt",
          "explanation": "Standard DE.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate",
          "workingLatex": "\\ln|m|=-kt+c",
          "explanation": "Log integral.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use m(0)=M₀",
          "workingLatex": "m=M_{0}e^{-kt}",
          "explanation": "Exponential solution.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Part (b): PF",
          "workingLatex": "\\dfrac{1}{x(x+1)}=\\dfrac{1}{x}-\\dfrac{1}{x+1}",
          "explanation": "Decompose.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate",
          "workingLatex": "\\ln|x|-\\ln|x+1|",
          "explanation": "Logs.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate",
          "workingLatex": "\\ln 2-\\ln 3=\\ln\\dfrac{2}{3}",
          "explanation": "Limits $1$ to $2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer (b)",
          "workingLatex": "\\ln\\dfrac{2}{3}",
          "explanation": "Definite integral.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Link",
          "workingLatex": "\\text{Log integrals appear in modelling}",
          "explanation": "Context.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State",
          "workingLatex": "m=M_{0}e^{-kt};\\;\\int_{1}^{2}\\dfrac{1}{x(x+1)}\\,dx=\\ln\\dfrac{2}{3}",
          "explanation": "Both parts.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check the fraction is proper",
          "workingLatex": "\\text{deg(top)} < \\text{deg(bottom)}",
          "explanation": "If not, divide first using algebraic division.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Factorise the denominator fully",
          "workingLatex": "\\text{Linear and repeated factors}",
          "explanation": "Partial fractions need the denominator completely factorised.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Integrate $\\frac{1}{x+a}$ to $\\ln|x+a|$",
          "workingLatex": "\\int \\dfrac{1}{x+a}\\,dx=\\ln|x+a|+c",
          "explanation": "Each linear partial fraction integrates to a logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Integrate $\\frac{1}{(x+a)^2}$",
          "workingLatex": "-\\dfrac{1}{x+a}+c",
          "explanation": "Repeated linear factors give power-law integrals, not logs.",
          "diagram": null
        }
      ],
      "finalAnswer": "$m = M_{0}e^{-kt}$. $\\displaystyle\\int_{1}^{2}\\dfrac{1}{x(x+1)}\\,dx = \\ln\\dfrac{2}{3}$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration with partial fractions",
    "subtopicId": "al.y2.pure.integration-partial-fractions",
    "questionDiagram": null,
    "id": "al.y2.pure.integration-partial-fractions.q070",
    "tags": [
      "multi-part",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "expression",
    "questionText": "(a) Express $\\dfrac{3x+5}{(x-1)(x+2)}$ in partial fractions.\n(b) Hence find $\\displaystyle\\int \\dfrac{3x+5}{(x-1)(x+2)}\\,dx$.\n(c) Evaluate $\\displaystyle\\int_{2}^{4} \\dfrac{3x+5}{(x-1)(x+2)}\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "(a) Setup",
          "workingLatex": "\\dfrac{A}{x-1}+\\dfrac{B}{x+2}",
          "explanation": "Distinct factors.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Solve",
          "workingLatex": "A=\\dfrac{11}{3},\\;B=\\dfrac{2}{3}",
          "explanation": "Constants.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "(a) Answer",
          "workingLatex": "\\dfrac{11}{3(x-1)}+\\dfrac{2}{3(x+2)}",
          "explanation": "Partial fractions.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "(b) Integrate",
          "workingLatex": "\\dfrac{11}{3}\\ln|x-1|+\\dfrac{2}{3}\\ln|x+2|+c",
          "explanation": "Indefinite integral.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify (b)",
          "workingLatex": "\\dfrac{1}{3}\\ln|(x-1)^{11}(x+2)^{2}|+c",
          "explanation": "Log form.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "(c) Evaluate at 4",
          "workingLatex": "\\dfrac{11}{3}\\ln 3+\\dfrac{2}{3}\\ln 6",
          "explanation": "Upper limit.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "(c) Evaluate at 2",
          "workingLatex": "\\dfrac{11}{3}\\ln 1+\\dfrac{2}{3}\\ln 4=\\dfrac{4}{3}\\ln 2",
          "explanation": "Lower limit.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "(c) Subtract",
          "workingLatex": "\\dfrac{11}{3}\\ln 3+\\dfrac{2}{3}\\ln 6-\\dfrac{4}{3}\\ln 2",
          "explanation": "Definite value.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answers",
          "workingLatex": "(a) $\\frac{11}{3(x-1)}+\\frac{2}{3(x+2)}$; (b) $\\frac{1}{3}\\ln|(x-1)^{11}(x+2)^{2}|+c$; (c) $\\frac{11}{3}\\ln 3+\\frac{2}{3}\\ln\\frac{3}{2}$",
          "explanation": "All parts.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check the fraction is proper",
          "workingLatex": "\\text{deg(top)} < \\text{deg(bottom)}",
          "explanation": "If not, divide first using algebraic division.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Factorise the denominator fully",
          "workingLatex": "\\text{Linear and repeated factors}",
          "explanation": "Partial fractions need the denominator completely factorised.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Integrate $\\frac{1}{x+a}$ to $\\ln|x+a|$",
          "workingLatex": "\\int \\dfrac{1}{x+a}\\,dx=\\ln|x+a|+c",
          "explanation": "Each linear partial fraction integrates to a logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Integrate $\\frac{1}{(x+a)^2}$",
          "workingLatex": "-\\dfrac{1}{x+a}+c",
          "explanation": "Repeated linear factors give power-law integrals, not logs.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\dfrac{11}{3(x-1)}+\\dfrac{2}{3(x+2)}$. (b) $\\dfrac{1}{3}\\ln|(x-1)^{11}(x+2)^{2}|+c$. (c) $\\dfrac{11}{3}\\ln 3+\\dfrac{2}{3}\\ln\\dfrac{3}{2}$."
    }
  }
];
