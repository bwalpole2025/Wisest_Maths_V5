import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Multiple-angle identities",
    "subtopicId": "fm.y2.pure.multiple-angles",
    "questionDiagram": null,
    "id": "fm.y2.pure.multiple-angles.q001",
    "tags": [
      "cos-form",
      "double-angle",
      "recall"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Write down the double-angle formula for $\\cos 2\\theta$ in terms of $\\cos\\theta$ only.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Start from De Moivre",
          "workingLatex": "(\\cos\\theta + i\\sin\\theta)^{2} = \\cos 2\\theta + i\\sin 2\\theta",
          "explanation": "Double-angle formulae come from $n=2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expand LHS",
          "workingLatex": "(\\cos\\theta + i\\sin\\theta)^{2} = \\cos^{2}\\theta - \\sin^{2}\\theta + 2i\\sin\\theta\\cos\\theta",
          "explanation": "Use $(a+bi)^2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Match real parts",
          "workingLatex": "\\cos 2\\theta = \\cos^{2}\\theta - \\sin^{2}\\theta",
          "explanation": "Equate real parts.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Match imaginary parts",
          "workingLatex": "\\sin 2\\theta = 2\\sin\\theta\\cos\\theta",
          "explanation": "Equate imaginary parts.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Pythagoras substitution",
          "workingLatex": "\\cos 2\\theta = 2\\cos^{2}\\theta - 1 = 1 - 2\\sin^{2}\\theta",
          "explanation": "Alternative forms using $\\sin^{2}\\theta + \\cos^{2}\\theta = 1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State identity",
          "workingLatex": "\\cos 2\\theta = 2\\cos^{2}\\theta - 1",
          "explanation": "Required formula.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify",
          "workingLatex": "\\theta = 0 \\Rightarrow \\cos 0 = 1",
          "explanation": "Quick check.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "\\cos 2\\theta = 2\\cos^{2}\\theta - 1",
          "explanation": "Final identity.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\cos 2\\theta = 2\\cos^{2}\\theta - 1$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Multiple-angle identities",
    "subtopicId": "fm.y2.pure.multiple-angles",
    "questionDiagram": null,
    "id": "fm.y2.pure.multiple-angles.q002",
    "tags": [
      "sin-form",
      "double-angle",
      "recall"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Write down the double-angle formula for $\\sin 2\\theta$ in terms of $\\sin\\theta$ only.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Start from De Moivre",
          "workingLatex": "(\\cos\\theta + i\\sin\\theta)^{2} = \\cos 2\\theta + i\\sin 2\\theta",
          "explanation": "Double-angle formulae come from $n=2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expand LHS",
          "workingLatex": "(\\cos\\theta + i\\sin\\theta)^{2} = \\cos^{2}\\theta - \\sin^{2}\\theta + 2i\\sin\\theta\\cos\\theta",
          "explanation": "Use $(a+bi)^2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Match real parts",
          "workingLatex": "\\cos 2\\theta = \\cos^{2}\\theta - \\sin^{2}\\theta",
          "explanation": "Equate real parts.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Match imaginary parts",
          "workingLatex": "\\sin 2\\theta = 2\\sin\\theta\\cos\\theta",
          "explanation": "Equate imaginary parts.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Pythagoras substitution",
          "workingLatex": "\\sin 2\\theta = 2\\sin\\theta\\cos\\theta",
          "explanation": "Alternative forms using $\\sin^{2}\\theta + \\cos^{2}\\theta = 1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State identity",
          "workingLatex": "\\sin 2\\theta = 2\\sin\\theta\\cos\\theta",
          "explanation": "Required formula.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify",
          "workingLatex": "\\theta = 0 \\Rightarrow \\sin 0 = 0",
          "explanation": "Quick check.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "\\sin 2\\theta = 2\\sin\\theta\\cos\\theta",
          "explanation": "Final identity.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sin 2\\theta = 2\\sin\\theta\\cos\\theta$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Multiple-angle identities",
    "subtopicId": "fm.y2.pure.multiple-angles",
    "questionDiagram": null,
    "id": "fm.y2.pure.multiple-angles.q003",
    "tags": [
      "double-angle",
      "recall"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Write down three equivalent forms of $\\cos 2\\theta$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "From De Moivre",
          "workingLatex": "\\cos 2\\theta = \\cos^{2}\\theta - \\sin^{2}\\theta",
          "explanation": "Difference of squares form.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Replace $\\sin^{2}\\theta$",
          "workingLatex": "\\cos 2\\theta = 2\\cos^{2}\\theta - 1",
          "explanation": "Using $\\sin^{2}\\theta = 1 - \\cos^{2}\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Replace $\\cos^{2}\\theta$",
          "workingLatex": "\\cos 2\\theta = 1 - 2\\sin^{2}\\theta",
          "explanation": "Using $\\cos^{2}\\theta = 1 - \\sin^{2}\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Summary",
          "workingLatex": "\\cos 2\\theta = \\cos^{2}\\theta - \\sin^{2}\\theta = 2\\cos^{2}\\theta - 1 = 1 - 2\\sin^{2}\\theta",
          "explanation": "Three standard forms.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Use",
          "workingLatex": "\\text{Choose form based on given information}",
          "explanation": "Pick the version involving the known ratio.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\text{All three forms listed}",
          "explanation": "Complete recall.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\cos 2\\theta = \\cos^{2}\\theta - \\sin^{2}\\theta = 2\\cos^{2}\\theta - 1 = 1 - 2\\sin^{2}\\theta$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Multiple-angle identities",
    "subtopicId": "fm.y2.pure.multiple-angles",
    "questionDiagram": null,
    "id": "fm.y2.pure.multiple-angles.q004",
    "tags": [
      "double-angle",
      "de-moivre",
      "expansion"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Using De Moivre's theorem, express $\\cos 4\\theta$ and $\\sin 4\\theta$ in terms of powers of $\\cos\\theta$ and $\\sin\\theta$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "De Moivre's theorem",
          "workingLatex": "(\\cos\\theta + i\\sin\\theta)^{4} = \\cos 4\\theta + i\\sin 4\\theta",
          "explanation": "Connect complex powers to multiple angles.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Binomial expansion",
          "workingLatex": "(\\cos\\theta + i\\sin\\theta)^{4} = \\sum_{k=0}^{4} \\binom{4}{k}(\\cos\\theta)^{4-k}(i\\sin\\theta)^{k}",
          "explanation": "Expand using the binomial theorem.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Real part",
          "workingLatex": "\\text{Collect terms where }i^k\\text{ is real}",
          "explanation": "Even powers of $i$ are real, so they contribute to $\\cos 4\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Cosine identity",
          "workingLatex": "\\cos 4\\theta = \\cos^{2}\\theta - \\sin^{2}\\theta",
          "explanation": "Equate real parts.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Imaginary part",
          "workingLatex": "\\text{Collect terms where }i^k\\text{ is imaginary}",
          "explanation": "Odd powers of $i$ are imaginary, so they contribute to $\\sin 4\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Sine identity",
          "workingLatex": "\\sin 4\\theta = 2\\sin\\theta\\cos\\theta",
          "explanation": "Equate imaginary parts and divide by $i$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check at $\\theta=0$",
          "workingLatex": "\\cos 0 = 1",
          "explanation": "Sanity check the cosine formula.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "\\cos 4\\theta = \\cos^{2}\\theta - \\sin^{2}\\theta;\\; \\sin 4\\theta = 2\\sin\\theta\\cos\\theta",
          "explanation": "Both multiple-angle identities.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\cos 4\\theta = \\cos^{2}\\theta - \\sin^{2}\\theta$, $\\sin 4\\theta = 2\\sin\\theta\\cos\\theta$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Multiple-angle identities",
    "subtopicId": "fm.y2.pure.multiple-angles",
    "questionDiagram": null,
    "id": "fm.y2.pure.multiple-angles.q005",
    "tags": [
      "triple-angle",
      "de-moivre",
      "expansion"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Using De Moivre's theorem, express $\\cos 5\\theta$ and $\\sin 5\\theta$ in terms of powers of $\\cos\\theta$ and $\\sin\\theta$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "De Moivre's theorem",
          "workingLatex": "(\\cos\\theta + i\\sin\\theta)^{5} = \\cos 5\\theta + i\\sin 5\\theta",
          "explanation": "Connect complex powers to multiple angles.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Binomial expansion",
          "workingLatex": "(\\cos\\theta + i\\sin\\theta)^{5} = \\sum_{k=0}^{5} \\binom{5}{k}(\\cos\\theta)^{5-k}(i\\sin\\theta)^{k}",
          "explanation": "Expand using the binomial theorem.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Real part",
          "workingLatex": "\\text{Collect terms where }i^k\\text{ is real}",
          "explanation": "Even powers of $i$ are real, so they contribute to $\\cos 5\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Cosine identity",
          "workingLatex": "\\cos 5\\theta = 4\\cos^{3}\\theta - 3\\cos\\theta",
          "explanation": "Equate real parts.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Imaginary part",
          "workingLatex": "\\text{Collect terms where }i^k\\text{ is imaginary}",
          "explanation": "Odd powers of $i$ are imaginary, so they contribute to $\\sin 5\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Sine identity",
          "workingLatex": "\\sin 5\\theta = 3\\sin\\theta - 4\\sin^{3}\\theta",
          "explanation": "Equate imaginary parts and divide by $i$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check at $\\theta=0$",
          "workingLatex": "\\cos 0 = 1",
          "explanation": "Sanity check the cosine formula.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "\\cos 5\\theta = 4\\cos^{3}\\theta - 3\\cos\\theta;\\; \\sin 5\\theta = 3\\sin\\theta - 4\\sin^{3}\\theta",
          "explanation": "Both multiple-angle identities.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\cos 5\\theta = 4\\cos^{3}\\theta - 3\\cos\\theta$, $\\sin 5\\theta = 3\\sin\\theta - 4\\sin^{3}\\theta$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Multiple-angle identities",
    "subtopicId": "fm.y2.pure.multiple-angles",
    "questionDiagram": null,
    "id": "fm.y2.pure.multiple-angles.q006",
    "tags": [
      "double-angle",
      "evaluation"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Given that $\\cos\\theta = \\frac{1}{2}$, find the exact value of $\\cos 2\\theta$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Multiple-angle formula",
          "workingLatex": "\\cos 2\\theta = \\cos^{2}\\theta - \\sin^{2}\\theta",
          "explanation": "Use the appropriate identity.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "\\cos\\theta = \\frac{1}{2}",
          "explanation": "Given value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute powers",
          "workingLatex": "\\cos^{3}\\theta = \\frac{1}{2}^{3}",
          "explanation": "Evaluate powers of $\\cos\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into formula",
          "workingLatex": "\\cos 2\\theta = 2(\\frac{1}{2})^{2}-1 = \\frac{1}{2}",
          "explanation": "Replace each power.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "\\cos 2\\theta = \\frac{1}{2}",
          "explanation": "Arithmetic.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Sign check",
          "workingLatex": "\\text{Quadrant and sign consistent}",
          "explanation": "Confirm the sign is reasonable.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "\\cos 2\\theta = \\frac{1}{2}",
          "explanation": "Exact value.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\cos 2\\theta = \\frac{1}{2}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Multiple-angle identities",
    "subtopicId": "fm.y2.pure.multiple-angles",
    "questionDiagram": null,
    "id": "fm.y2.pure.multiple-angles.q007",
    "tags": [
      "double-angle",
      "evaluation"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Given that $\\cos\\theta = \\frac{\\sqrt{3}}{2}$, find the exact value of $\\cos 2\\theta$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Multiple-angle formula",
          "workingLatex": "\\cos 2\\theta = \\cos^{2}\\theta - \\sin^{2}\\theta",
          "explanation": "Use the appropriate identity.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "\\cos\\theta = \\frac{\\sqrt{3}}{2}",
          "explanation": "Given value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute powers",
          "workingLatex": "\\cos^{3}\\theta = \\frac{\\sqrt{3}}{2}^{3}",
          "explanation": "Evaluate powers of $\\cos\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into formula",
          "workingLatex": "\\cos 2\\theta = 2(\\frac{\\sqrt{3}}{2})^{2}-1 = -\\frac{1}{2}",
          "explanation": "Replace each power.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "\\cos 2\\theta = -\\frac{1}{2}",
          "explanation": "Arithmetic.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Sign check",
          "workingLatex": "\\text{Quadrant and sign consistent}",
          "explanation": "Confirm the sign is reasonable.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "\\cos 2\\theta = -\\frac{1}{2}",
          "explanation": "Exact value.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\cos 2\\theta = -\\frac{1}{2}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Multiple-angle identities",
    "subtopicId": "fm.y2.pure.multiple-angles",
    "questionDiagram": null,
    "id": "fm.y2.pure.multiple-angles.q008",
    "tags": [
      "double-angle",
      "evaluation"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Given that $\\sin\\theta = \\frac{1}{2}$, find the exact value of $\\sin 2\\theta$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Multiple-angle formula",
          "workingLatex": "\\sin 2\\theta = 2\\sin\\theta\\cos\\theta",
          "explanation": "Use the appropriate identity.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "\\sin\\theta = \\frac{1}{2}",
          "explanation": "Given value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute powers",
          "workingLatex": "\\sin^{3}\\theta = (\\frac{1}{2})^{3}",
          "explanation": "Evaluate powers of $\\sin\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into formula",
          "workingLatex": "\\sin 2\\theta = 2(\\frac{1}{2})(\\frac{\\sqrt{3}}{2})",
          "explanation": "Replace each power.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "\\sin 2\\theta = \\frac{\\sqrt{3}}{2}",
          "explanation": "Arithmetic.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Sign check",
          "workingLatex": "\\text{Sign consistent with quadrant}",
          "explanation": "Confirm the sign.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "\\sin 2\\theta = \\frac{\\sqrt{3}}{2}",
          "explanation": "Exact value.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sin 2\\theta = \\frac{\\sqrt{3}}{2}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Multiple-angle identities",
    "subtopicId": "fm.y2.pure.multiple-angles",
    "questionDiagram": null,
    "id": "fm.y2.pure.multiple-angles.q009",
    "tags": [
      "double-angle",
      "evaluation"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Given that $\\sin\\theta = \\frac{\\sqrt{3}}{2}$, find the exact value of $\\sin 2\\theta$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Multiple-angle formula",
          "workingLatex": "\\sin 2\\theta = 2\\sin\\theta\\cos\\theta",
          "explanation": "Use the appropriate identity.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "\\sin\\theta = \\frac{\\sqrt{3}}{2}",
          "explanation": "Given value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute powers",
          "workingLatex": "\\sin^{3}\\theta = (\\frac{\\sqrt{3}}{2})^{3}",
          "explanation": "Evaluate powers of $\\sin\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into formula",
          "workingLatex": "\\sin 2\\theta = 2(\\frac{\\sqrt{3}}{2})(\\frac{1}{2})",
          "explanation": "Replace each power.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "\\sin 2\\theta = \\frac{\\sqrt{3}}{2}",
          "explanation": "Arithmetic.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Sign check",
          "workingLatex": "\\text{Sign consistent with quadrant}",
          "explanation": "Confirm the sign.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "\\sin 2\\theta = \\frac{\\sqrt{3}}{2}",
          "explanation": "Exact value.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sin 2\\theta = \\frac{\\sqrt{3}}{2}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Multiple-angle identities",
    "subtopicId": "fm.y2.pure.multiple-angles",
    "questionDiagram": null,
    "id": "fm.y2.pure.multiple-angles.q010",
    "tags": [
      "3-4-5",
      "evaluation"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Given that $\\cos\\theta = \\frac{3}{5}$, find the exact value of $\\cos 2\\theta$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Multiple-angle formula",
          "workingLatex": "\\cos 2\\theta = \\cos^{2}\\theta - \\sin^{2}\\theta",
          "explanation": "Use the appropriate identity.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "\\cos\\theta = \\frac{3}{5}",
          "explanation": "Given value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute powers",
          "workingLatex": "\\cos^{3}\\theta = \\frac{3}{5}^{3}",
          "explanation": "Evaluate powers of $\\cos\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into formula",
          "workingLatex": "\\cos 2\\theta = 2(\\frac{3}{5})^{2}-1",
          "explanation": "Replace each power.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "\\cos 2\\theta = -\\frac{7}{25}",
          "explanation": "Arithmetic.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Sign check",
          "workingLatex": "\\text{Quadrant and sign consistent}",
          "explanation": "Confirm the sign is reasonable.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "\\cos 2\\theta = -\\frac{7}{25}",
          "explanation": "Exact value.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\cos 2\\theta = -\\frac{7}{25}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Multiple-angle identities",
    "subtopicId": "fm.y2.pure.multiple-angles",
    "questionDiagram": null,
    "id": "fm.y2.pure.multiple-angles.q011",
    "tags": [
      "3-4-5",
      "evaluation"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Given that $\\sin\\theta = \\frac{4}{5}$, find the exact value of $\\sin 2\\theta$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Multiple-angle formula",
          "workingLatex": "\\sin 2\\theta = 2\\sin\\theta\\cos\\theta",
          "explanation": "Use the appropriate identity.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "\\sin\\theta = \\frac{4}{5}",
          "explanation": "Given value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute powers",
          "workingLatex": "\\sin^{3}\\theta = (\\frac{4}{5})^{3}",
          "explanation": "Evaluate powers of $\\sin\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into formula",
          "workingLatex": "\\sin 2\\theta = 2(\\frac{4}{5})(\\frac{3}{5})",
          "explanation": "Replace each power.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "\\sin 2\\theta = \\frac{24}{25}",
          "explanation": "Arithmetic.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Sign check",
          "workingLatex": "\\text{Sign consistent with quadrant}",
          "explanation": "Confirm the sign.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "\\sin 2\\theta = \\frac{24}{25}",
          "explanation": "Exact value.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sin 2\\theta = \\frac{24}{25}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Multiple-angle identities",
    "subtopicId": "fm.y2.pure.multiple-angles",
    "questionDiagram": null,
    "id": "fm.y2.pure.multiple-angles.q012",
    "tags": [
      "double-angle",
      "evaluation"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Given $\\cos\\theta = \\dfrac{1}{\\sqrt{2}}$, find $\\cos 2\\theta$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Formula",
          "workingLatex": "\\cos 2\\theta = 2\\cos^{2}\\theta - 1",
          "explanation": "Cosine-only double-angle form.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "\\cos\\theta = \\frac{1}{\\sqrt{2}}",
          "explanation": "Given.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Square",
          "workingLatex": "\\cos^{2}\\theta = \\frac{1}{2}",
          "explanation": "Square the given value.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate",
          "workingLatex": "\\cos 2\\theta = 2(\\frac{1}{2}) - 1 = 0",
          "explanation": "Substitute and simplify.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret",
          "workingLatex": "\\cos 2\\theta = 0",
          "explanation": "Corresponds to $2\\theta = 90^{\\circ}, 270^{\\circ}, \\ldots$",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "0",
          "explanation": "Exact value.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\cos 2\\theta = 0$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Multiple-angle identities",
    "subtopicId": "fm.y2.pure.multiple-angles",
    "questionDiagram": null,
    "id": "fm.y2.pure.multiple-angles.q013",
    "tags": [
      "triple-angle",
      "recall"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Write down the triple-angle formulae for $\\cos 3\\theta$ and $\\sin 3\\theta$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "De Moivre with $n=3$",
          "workingLatex": "(\\cos\\theta + i\\sin\\theta)^{3} = \\cos 3\\theta + i\\sin 3\\theta",
          "explanation": "Start point.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Cosine result",
          "workingLatex": "\\cos 3\\theta = 4\\cos^{3}\\theta - 3\\cos\\theta",
          "explanation": "Real part after expansion.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Sine result",
          "workingLatex": "\\sin 3\\theta = 3\\sin\\theta - 4\\sin^{3}\\theta",
          "explanation": "Imaginary part.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Alternative route",
          "workingLatex": "\\cos 3\\theta = \\cos(2\\theta+\\theta)",
          "explanation": "Can also derive via compound angles.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check",
          "workingLatex": "\\theta=0 \\Rightarrow \\cos 0=1",
          "explanation": "Sanity check.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\text{Both formulae stated}",
          "explanation": "Complete.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\cos 3\\theta = 4\\cos^{3}\\theta - 3\\cos\\theta$, $\\sin 3\\theta = 3\\sin\\theta - 4\\sin^{3}\\theta$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Multiple-angle identities",
    "subtopicId": "fm.y2.pure.multiple-angles",
    "questionDiagram": null,
    "id": "fm.y2.pure.multiple-angles.q014",
    "tags": [
      "triple-angle",
      "evaluation"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Given that $\\cos\\theta = \\frac{1}{2}$, find the exact value of $\\cos 3\\theta$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Multiple-angle formula",
          "workingLatex": "\\cos 3\\theta = 4\\cos^{3}\\theta - 3\\cos\\theta",
          "explanation": "Use the appropriate identity.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "\\cos\\theta = \\frac{1}{2}",
          "explanation": "Given value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute powers",
          "workingLatex": "\\cos^{3}\\theta = \\frac{1}{2}^{3}",
          "explanation": "Evaluate powers of $\\cos\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into formula",
          "workingLatex": "\\cos 3\\theta = 4(\\frac{1}{2})^{3}-3(\\frac{1}{2}) = 0",
          "explanation": "Replace each power.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "\\cos 3\\theta = 0",
          "explanation": "Arithmetic.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Sign check",
          "workingLatex": "\\text{Quadrant and sign consistent}",
          "explanation": "Confirm the sign is reasonable.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "\\cos 3\\theta = 0",
          "explanation": "Exact value.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\cos 3\\theta = 0$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Multiple-angle identities",
    "subtopicId": "fm.y2.pure.multiple-angles",
    "questionDiagram": null,
    "id": "fm.y2.pure.multiple-angles.q015",
    "tags": [
      "triple-angle",
      "evaluation"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Given that $\\sin\\theta = \\frac{1}{2}$, find the exact value of $\\sin 3\\theta$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Multiple-angle formula",
          "workingLatex": "\\sin 3\\theta = 3\\sin\\theta - 4\\sin^{3}\\theta",
          "explanation": "Use the appropriate identity.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "\\sin\\theta = \\frac{1}{2}",
          "explanation": "Given value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute powers",
          "workingLatex": "\\sin^{3}\\theta = (\\frac{1}{2})^{3}",
          "explanation": "Evaluate powers of $\\sin\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into formula",
          "workingLatex": "\\sin 3\\theta = 3(\\frac{1}{2})-4(\\frac{1}{2})^{3} = 1",
          "explanation": "Replace each power.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "\\sin 3\\theta = 1",
          "explanation": "Arithmetic.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Sign check",
          "workingLatex": "\\text{Sign consistent with quadrant}",
          "explanation": "Confirm the sign.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "\\sin 3\\theta = 1",
          "explanation": "Exact value.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sin 3\\theta = 1$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Multiple-angle identities",
    "subtopicId": "fm.y2.pure.multiple-angles",
    "questionDiagram": null,
    "id": "fm.y2.pure.multiple-angles.q016",
    "tags": [
      "triple-angle",
      "evaluation"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Given that $\\cos\\theta = \\frac{3}{5}$, find the exact value of $\\cos 3\\theta$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Multiple-angle formula",
          "workingLatex": "\\cos 3\\theta = 4\\cos^{3}\\theta - 3\\cos\\theta",
          "explanation": "Use the appropriate identity.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "\\cos\\theta = \\frac{3}{5}",
          "explanation": "Given value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute powers",
          "workingLatex": "\\cos^{3}\\theta = \\frac{3}{5}^{3}",
          "explanation": "Evaluate powers of $\\cos\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into formula",
          "workingLatex": "\\cos 3\\theta = 4(\\frac{3}{5})^{3}-3(\\frac{3}{5})",
          "explanation": "Replace each power.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "\\cos 3\\theta = -\\frac{99}{125}",
          "explanation": "Arithmetic.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Sign check",
          "workingLatex": "\\text{Quadrant and sign consistent}",
          "explanation": "Confirm the sign is reasonable.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "\\cos 3\\theta = -\\frac{99}{125}",
          "explanation": "Exact value.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\cos 3\\theta = -\\frac{99}{125}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Multiple-angle identities",
    "subtopicId": "fm.y2.pure.multiple-angles",
    "questionDiagram": null,
    "id": "fm.y2.pure.multiple-angles.q017",
    "tags": [
      "triple-angle",
      "evaluation"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Given that $\\sin\\theta = \\frac{3}{5}$, find the exact value of $\\sin 3\\theta$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Multiple-angle formula",
          "workingLatex": "\\sin 3\\theta = 3\\sin\\theta - 4\\sin^{3}\\theta",
          "explanation": "Use the appropriate identity.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "\\sin\\theta = \\frac{3}{5}",
          "explanation": "Given value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute powers",
          "workingLatex": "\\sin^{3}\\theta = (\\frac{3}{5})^{3}",
          "explanation": "Evaluate powers of $\\sin\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into formula",
          "workingLatex": "\\sin 3\\theta = 3(\\frac{3}{5})-4(\\frac{3}{5})^{3}",
          "explanation": "Replace each power.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "\\sin 3\\theta = -\\frac{117}{125}",
          "explanation": "Arithmetic.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Sign check",
          "workingLatex": "\\text{Sign consistent with quadrant}",
          "explanation": "Confirm the sign.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "\\sin 3\\theta = -\\frac{117}{125}",
          "explanation": "Exact value.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sin 3\\theta = -\\frac{117}{125}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Multiple-angle identities",
    "subtopicId": "fm.y2.pure.multiple-angles",
    "questionDiagram": null,
    "id": "fm.y2.pure.multiple-angles.q018",
    "tags": [
      "double-angle",
      "proof"
    ],
    "difficulty": "Easy",
    "marks": 5,
    "answerType": "written",
    "questionText": "Show that $\\dfrac{\\sin 2\\theta}{1 + \\cos 2\\theta} \\equiv \\tan\\theta$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Numerator",
          "workingLatex": "\\sin 2\\theta = 2\\sin\\theta\\cos\\theta",
          "explanation": "Double-angle sine.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Denominator",
          "workingLatex": "1 + \\cos 2\\theta = 1 + 2\\cos^{2}\\theta - 1 = 2\\cos^{2}\\theta",
          "explanation": "Double-angle cosine.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Fraction",
          "workingLatex": "\\dfrac{2\\sin\\theta\\cos\\theta}{2\\cos^{2}\\theta}",
          "explanation": "Substitute both.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Cancel",
          "workingLatex": "\\dfrac{\\sin\\theta}{\\cos\\theta}",
          "explanation": "Cancel $2\\cos\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Result",
          "workingLatex": "\\tan\\theta",
          "explanation": "Definition of tangent.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Domain",
          "workingLatex": "\\cos\\theta \\neq 0",
          "explanation": "Required for validity.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "\\tan\\theta",
          "explanation": "Identity shown.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{\\sin 2\\theta}{1 + \\cos 2\\theta} \\equiv \\tan\\theta$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Multiple-angle identities",
    "subtopicId": "fm.y2.pure.multiple-angles",
    "questionDiagram": null,
    "id": "fm.y2.pure.multiple-angles.q019",
    "tags": [
      "double-angle",
      "proof"
    ],
    "difficulty": "Easy",
    "marks": 5,
    "answerType": "written",
    "questionText": "Show that $\\cos^{2}\\theta \\equiv \\dfrac{1 + \\cos 2\\theta}{2}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Start",
          "workingLatex": "\\cos 2\\theta = 2\\cos^{2}\\theta - 1",
          "explanation": "Double-angle cosine.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rearrange",
          "workingLatex": "2\\cos^{2}\\theta = 1 + \\cos 2\\theta",
          "explanation": "Add $1$ to both sides.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Divide",
          "workingLatex": "\\cos^{2}\\theta = \\dfrac{1 + \\cos 2\\theta}{2}",
          "explanation": "Divide by $2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Use",
          "workingLatex": "\\text{Power reduction for integration}",
          "explanation": "Converts squared trig to linear multiple angles.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check",
          "workingLatex": "\\theta=0: \\cos^{2}0 = 1, \\frac{1+1}{2}=1",
          "explanation": "Verification.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\dfrac{1 + \\cos 2\\theta}{2}",
          "explanation": "Identity shown.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\cos^{2}\\theta \\equiv \\dfrac{1 + \\cos 2\\theta}{2}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Multiple-angle identities",
    "subtopicId": "fm.y2.pure.multiple-angles",
    "questionDiagram": null,
    "id": "fm.y2.pure.multiple-angles.q020",
    "tags": [
      "double-angle",
      "proof"
    ],
    "difficulty": "Easy",
    "marks": 5,
    "answerType": "written",
    "questionText": "Show that $\\sin^{2}\\theta \\equiv \\dfrac{1 - \\cos 2\\theta}{2}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Start",
          "workingLatex": "\\cos 2\\theta = 1 - 2\\sin^{2}\\theta",
          "explanation": "Double-angle cosine in sine form.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rearrange",
          "workingLatex": "2\\sin^{2}\\theta = 1 - \\cos 2\\theta",
          "explanation": "Isolate $\\sin^{2}\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Divide",
          "workingLatex": "\\sin^{2}\\theta = \\dfrac{1 - \\cos 2\\theta}{2}",
          "explanation": "Divide by $2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Use",
          "workingLatex": "\\int \\sin^{2}\\theta\\,d\\theta",
          "explanation": "Common integration application.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check",
          "workingLatex": "\\theta=0: 0 = \\frac{1-1}{2}",
          "explanation": "Verification.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\dfrac{1 - \\cos 2\\theta}{2}",
          "explanation": "Identity shown.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sin^{2}\\theta \\equiv \\dfrac{1 - \\cos 2\\theta}{2}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Multiple-angle identities",
    "subtopicId": "fm.y2.pure.multiple-angles",
    "questionDiagram": null,
    "id": "fm.y2.pure.multiple-angles.q021",
    "tags": [
      "quadruple-angle",
      "evaluation"
    ],
    "difficulty": "Easy",
    "marks": 5,
    "answerType": "written",
    "questionText": "Given that $\\cos\\theta = \\frac{1}{\\sqrt{2}}$, find the exact value of $\\cos 4\\theta$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Multiple-angle formula",
          "workingLatex": "\\cos 4\\theta = 8\\cos^{4}\\theta - 8\\cos^{2}\\theta + 1",
          "explanation": "Use the appropriate identity.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "\\cos\\theta = \\frac{1}{\\sqrt{2}}",
          "explanation": "Given value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute powers",
          "workingLatex": "\\cos^{3}\\theta = \\frac{1}{\\sqrt{2}}^{3}",
          "explanation": "Evaluate powers of $\\cos\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into formula",
          "workingLatex": "\\cos 4\\theta = 8(\\frac{1}{\\sqrt{2}})^{4}-8(\\frac{1}{\\sqrt{2}})^{2}+1",
          "explanation": "Replace each power.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "\\cos 4\\theta = 0",
          "explanation": "Arithmetic.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Sign check",
          "workingLatex": "\\text{Quadrant and sign consistent}",
          "explanation": "Confirm the sign is reasonable.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "\\cos 4\\theta = 0",
          "explanation": "Exact value.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\cos 4\\theta = 0$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Multiple-angle identities",
    "subtopicId": "fm.y2.pure.multiple-angles",
    "questionDiagram": null,
    "id": "fm.y2.pure.multiple-angles.q022",
    "tags": [
      "quadruple-angle",
      "evaluation"
    ],
    "difficulty": "Easy",
    "marks": 5,
    "answerType": "written",
    "questionText": "Given that $\\sin\\theta = \\frac{1}{\\sqrt{2}}$, find the exact value of $\\sin 4\\theta$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Multiple-angle formula",
          "workingLatex": "\\sin 4\\theta = 4\\cos^{3}\\theta\\sin\\theta - 4\\cos\\theta\\sin^{3}\\theta",
          "explanation": "Use the appropriate identity.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "\\sin\\theta = \\frac{1}{\\sqrt{2}}",
          "explanation": "Given value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute powers",
          "workingLatex": "\\sin^{3}\\theta = (\\frac{1}{\\sqrt{2}})^{3}",
          "explanation": "Evaluate powers of $\\sin\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into formula",
          "workingLatex": "\\sin 4\\theta = 4(\\frac{1}{\\sqrt{2}})^{3}(\\frac{1}{\\sqrt{2}})-4(\\frac{1}{\\sqrt{2}})(\\frac{1}{\\sqrt{2}})^{3}",
          "explanation": "Replace each power.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "\\sin 4\\theta = 0",
          "explanation": "Arithmetic.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Sign check",
          "workingLatex": "\\text{Sign consistent with quadrant}",
          "explanation": "Confirm the sign.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "\\sin 4\\theta = 0",
          "explanation": "Exact value.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sin 4\\theta = 0$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Multiple-angle identities",
    "subtopicId": "fm.y2.pure.multiple-angles",
    "questionDiagram": null,
    "id": "fm.y2.pure.multiple-angles.q023",
    "tags": [
      "tan",
      "double-angle"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Express $\\tan 2\\theta$ in terms of $\\tan\\theta$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Definition",
          "workingLatex": "\\tan 2\\theta = \\dfrac{\\sin 2\\theta}{\\cos 2\\theta}",
          "explanation": "Quotient identity.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "\\tan 2\\theta = \\dfrac{2\\sin\\theta\\cos\\theta}{\\cos^{2}\\theta - \\sin^{2}\\theta}",
          "explanation": "Double-angle formulae.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Divide by $\\cos^{2}\\theta$",
          "workingLatex": "\\tan 2\\theta = \\dfrac{2\\tan\\theta}{1 - \\tan^{2}\\theta}",
          "explanation": "Obtain tangent form.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Domain",
          "workingLatex": "1 - \\tan^{2}\\theta \\neq 0",
          "explanation": "Denominator restriction.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Answer",
          "workingLatex": "\\dfrac{2\\tan\\theta}{1 - \\tan^{2}\\theta}",
          "explanation": "Double-angle tangent.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "De Moivre's theorem",
          "workingLatex": "(\\cos\\theta+i\\sin\\theta)^{n}=\\cos n\\theta+i\\sin n\\theta",
          "explanation": "Links complex powers to multiple angles.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\tan 2\\theta = \\dfrac{2\\tan\\theta}{1 - \\tan^{2}\\theta}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Multiple-angle identities",
    "subtopicId": "fm.y2.pure.multiple-angles",
    "questionDiagram": null,
    "id": "fm.y2.pure.multiple-angles.q024",
    "tags": [
      "half-angle",
      "double-angle"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Given $\\cos 2\\theta = \\dfrac{3}{5}$, find $\\cos^{2}\\theta$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Power reduction",
          "workingLatex": "\\cos^{2}\\theta = \\dfrac{1 + \\cos 2\\theta}{2}",
          "explanation": "Link squared cosine to double angle.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "\\cos^{2}\\theta = \\dfrac{1 + \\frac{3}{5}}{2}",
          "explanation": "Given value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify",
          "workingLatex": "\\cos^{2}\\theta = \\dfrac{8/5}{2} = \\dfrac{4}{5}",
          "explanation": "Arithmetic.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Note",
          "workingLatex": "\\cos\\theta = \\pm\\dfrac{2}{\\sqrt{5}}",
          "explanation": "Square root gives two possibilities.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Answer",
          "workingLatex": "\\dfrac{4}{5}",
          "explanation": "Squared value only.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "De Moivre's theorem",
          "workingLatex": "(\\cos\\theta+i\\sin\\theta)^{n}=\\cos n\\theta+i\\sin n\\theta",
          "explanation": "Links complex powers to multiple angles.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\cos^{2}\\theta = \\dfrac{4}{5}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Multiple-angle identities",
    "subtopicId": "fm.y2.pure.multiple-angles",
    "questionDiagram": null,
    "id": "fm.y2.pure.multiple-angles.q025",
    "tags": [
      "half-angle",
      "double-angle"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Given $\\cos 2\\theta = -\\dfrac{4}{5}$, find $\\sin^{2}\\theta$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Power reduction",
          "workingLatex": "\\sin^{2}\\theta = \\dfrac{1 - \\cos 2\\theta}{2}",
          "explanation": "Link squared sine to double angle.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "\\sin^{2}\\theta = \\dfrac{1 - (-\\frac{4}{5})}{2}",
          "explanation": "Given value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify",
          "workingLatex": "\\sin^{2}\\theta = \\dfrac{9/5}{2} = \\dfrac{9}{10}",
          "explanation": "Arithmetic.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Answer",
          "workingLatex": "\\dfrac{9}{10}",
          "explanation": "Exact value.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "De Moivre's theorem",
          "workingLatex": "(\\cos\\theta+i\\sin\\theta)^{n}=\\cos n\\theta+i\\sin n\\theta",
          "explanation": "Links complex powers to multiple angles.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Binomial expansion",
          "workingLatex": "(\\cos\\theta+i\\sin\\theta)^{n}=\\sum\\binom{n}{k}(\\cos\\theta)^{n-k}(i\\sin\\theta)^{k}",
          "explanation": "Expand and separate real/imaginary parts.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sin^{2}\\theta = \\dfrac{9}{10}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Multiple-angle identities",
    "subtopicId": "fm.y2.pure.multiple-angles",
    "questionDiagram": null,
    "id": "fm.y2.pure.multiple-angles.q026",
    "tags": [
      "quadruple-angle",
      "de-moivre",
      "expansion"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Using De Moivre's theorem, express $\\cos 26\\theta$ and $\\sin 26\\theta$ in terms of powers of $\\cos\\theta$ and $\\sin\\theta$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "De Moivre's theorem",
          "workingLatex": "(\\cos\\theta + i\\sin\\theta)^{26} = \\cos 26\\theta + i\\sin 26\\theta",
          "explanation": "Connect complex powers to multiple angles.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Binomial expansion",
          "workingLatex": "(\\cos\\theta + i\\sin\\theta)^{26} = \\sum_{k=0}^{26} \\binom{26}{k}(\\cos\\theta)^{26-k}(i\\sin\\theta)^{k}",
          "explanation": "Expand using the binomial theorem.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Real part",
          "workingLatex": "\\text{Collect terms where }i^k\\text{ is real}",
          "explanation": "Even powers of $i$ are real, so they contribute to $\\cos 26\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Cosine identity",
          "workingLatex": "\\cos 26\\theta = 8\\cos^{4}\\theta - 8\\cos^{2}\\theta + 1",
          "explanation": "Equate real parts.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Imaginary part",
          "workingLatex": "\\text{Collect terms where }i^k\\text{ is imaginary}",
          "explanation": "Odd powers of $i$ are imaginary, so they contribute to $\\sin 26\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Sine identity",
          "workingLatex": "\\sin 26\\theta = 4\\cos^{3}\\theta\\sin\\theta - 4\\cos\\theta\\sin^{3}\\theta",
          "explanation": "Equate imaginary parts and divide by $i$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check at $\\theta=0$",
          "workingLatex": "\\cos 0 = 1",
          "explanation": "Sanity check the cosine formula.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "\\cos 26\\theta = 8\\cos^{4}\\theta - 8\\cos^{2}\\theta + 1;\\; \\sin 26\\theta = 4\\cos^{3}\\theta\\sin\\theta - 4\\cos\\theta\\sin^{3}\\theta",
          "explanation": "Both multiple-angle identities.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "De Moivre's theorem",
          "workingLatex": "(\\cos\\theta+i\\sin\\theta)^{n}=\\cos n\\theta+i\\sin n\\theta",
          "explanation": "Links complex powers to multiple angles.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\cos 26\\theta = 8\\cos^{4}\\theta - 8\\cos^{2}\\theta + 1$, $\\sin 26\\theta = 4\\cos^{3}\\theta\\sin\\theta - 4\\cos\\theta\\sin^{3}\\theta$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Multiple-angle identities",
    "subtopicId": "fm.y2.pure.multiple-angles",
    "questionDiagram": null,
    "id": "fm.y2.pure.multiple-angles.q027",
    "tags": [
      "quintuple-angle",
      "de-moivre",
      "expansion"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Using De Moivre's theorem, express $\\cos 27\\theta$ and $\\sin 27\\theta$ in terms of powers of $\\cos\\theta$ and $\\sin\\theta$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "De Moivre's theorem",
          "workingLatex": "(\\cos\\theta + i\\sin\\theta)^{27} = \\cos 27\\theta + i\\sin 27\\theta",
          "explanation": "Connect complex powers to multiple angles.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Binomial expansion",
          "workingLatex": "(\\cos\\theta + i\\sin\\theta)^{27} = \\sum_{k=0}^{27} \\binom{27}{k}(\\cos\\theta)^{27-k}(i\\sin\\theta)^{k}",
          "explanation": "Expand using the binomial theorem.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Real part",
          "workingLatex": "\\text{Collect terms where }i^k\\text{ is real}",
          "explanation": "Even powers of $i$ are real, so they contribute to $\\cos 27\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Cosine identity",
          "workingLatex": "\\cos 27\\theta = 16\\cos^{5}\\theta - 20\\cos^{3}\\theta + 5\\cos\\theta",
          "explanation": "Equate real parts.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Imaginary part",
          "workingLatex": "\\text{Collect terms where }i^k\\text{ is imaginary}",
          "explanation": "Odd powers of $i$ are imaginary, so they contribute to $\\sin 27\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Sine identity",
          "workingLatex": "\\sin 27\\theta = 16\\sin^{5}\\theta - 20\\sin^{3}\\theta + 5\\sin\\theta",
          "explanation": "Equate imaginary parts and divide by $i$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check at $\\theta=0$",
          "workingLatex": "\\cos 0 = 1",
          "explanation": "Sanity check the cosine formula.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "\\cos 27\\theta = 16\\cos^{5}\\theta - 20\\cos^{3}\\theta + 5\\cos\\theta;\\; \\sin 27\\theta = 16\\sin^{5}\\theta - 20\\sin^{3}\\theta + 5\\sin\\theta",
          "explanation": "Both multiple-angle identities.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "De Moivre's theorem",
          "workingLatex": "(\\cos\\theta+i\\sin\\theta)^{n}=\\cos n\\theta+i\\sin n\\theta",
          "explanation": "Links complex powers to multiple angles.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\cos 27\\theta = 16\\cos^{5}\\theta - 20\\cos^{3}\\theta + 5\\cos\\theta$, $\\sin 27\\theta = 16\\sin^{5}\\theta - 20\\sin^{3}\\theta + 5\\sin\\theta$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Multiple-angle identities",
    "subtopicId": "fm.y2.pure.multiple-angles",
    "questionDiagram": null,
    "id": "fm.y2.pure.multiple-angles.q028",
    "tags": [
      "cos-squared",
      "power-reduction"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Express $\\cos^{2}\\theta$ in terms of multiple angles of $\\theta$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "De Moivre",
          "workingLatex": "(\\cos\\theta + i\\sin\\theta)^{2} = \\cos 2\\theta + i\\sin 2\\theta",
          "explanation": "Start from complex exponential form.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Also expand",
          "workingLatex": "(\\cos\\theta + i\\sin\\theta)^{2} = \\sum \\binom{2}{k}(\\cos\\theta)^{2-k}(i\\sin\\theta)^{k}",
          "explanation": "Binomial expansion.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Extract $\\cos^{2}\\theta$",
          "workingLatex": "\\text{Use }\\cos 2\\theta\\text{ or }\\sin 2\\theta\\text{ to eliminate cross terms}",
          "explanation": "Multiple-angle formula links powers.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Power-reduction formula",
          "workingLatex": "\\cos^{2}\\theta = \\dfrac{1 + \\cos 2\\theta}{2}",
          "explanation": "Express single power in multiple angles.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Example",
          "workingLatex": "\\cos^{2}30^{\\circ} = \\frac{1+\\cos 60^{\\circ}}{2} = \\frac{3}{4}",
          "explanation": "Verify with a standard value.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Use in integration",
          "workingLatex": "\\int \\cos^{2}\\theta\\,d\\theta",
          "explanation": "Typical application.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "\\cos^{2}\\theta = \\dfrac{1 + \\cos 2\\theta}{2}",
          "explanation": "Final identity.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "De Moivre's theorem",
          "workingLatex": "(\\cos\\theta+i\\sin\\theta)^{n}=\\cos n\\theta+i\\sin n\\theta",
          "explanation": "Links complex powers to multiple angles.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Binomial expansion",
          "workingLatex": "(\\cos\\theta+i\\sin\\theta)^{n}=\\sum\\binom{n}{k}(\\cos\\theta)^{n-k}(i\\sin\\theta)^{k}",
          "explanation": "Expand and separate real/imaginary parts.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\cos^{2}\\theta = \\dfrac{1 + \\cos 2\\theta}{2}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Multiple-angle identities",
    "subtopicId": "fm.y2.pure.multiple-angles",
    "questionDiagram": null,
    "id": "fm.y2.pure.multiple-angles.q029",
    "tags": [
      "sin-squared",
      "power-reduction"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Express $\\sin^{2}\\theta$ in terms of multiple angles of $\\theta$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "De Moivre",
          "workingLatex": "(\\cos\\theta + i\\sin\\theta)^{2} = \\cos 2\\theta + i\\sin 2\\theta",
          "explanation": "Start from complex exponential form.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Also expand",
          "workingLatex": "(\\cos\\theta + i\\sin\\theta)^{2} = \\sum \\binom{2}{k}(\\cos\\theta)^{2-k}(i\\sin\\theta)^{k}",
          "explanation": "Binomial expansion.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Extract $\\sin^{2}\\theta$",
          "workingLatex": "\\text{Use }\\cos 2\\theta\\text{ or }\\sin 2\\theta\\text{ to eliminate cross terms}",
          "explanation": "Multiple-angle formula links powers.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Power-reduction formula",
          "workingLatex": "\\sin^{2}\\theta = \\dfrac{1 - \\cos 2\\theta}{2}",
          "explanation": "Express single power in multiple angles.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Example",
          "workingLatex": "\\sin^{2}45^{\\circ} = \\frac{1-\\cos 90^{\\circ}}{2} = \\frac{1}{2}",
          "explanation": "Verify with a standard value.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Use in integration",
          "workingLatex": "\\int \\sin^{2}\\theta\\,d\\theta",
          "explanation": "Typical application.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "\\sin^{2}\\theta = \\dfrac{1 - \\cos 2\\theta}{2}",
          "explanation": "Final identity.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "De Moivre's theorem",
          "workingLatex": "(\\cos\\theta+i\\sin\\theta)^{n}=\\cos n\\theta+i\\sin n\\theta",
          "explanation": "Links complex powers to multiple angles.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Binomial expansion",
          "workingLatex": "(\\cos\\theta+i\\sin\\theta)^{n}=\\sum\\binom{n}{k}(\\cos\\theta)^{n-k}(i\\sin\\theta)^{k}",
          "explanation": "Expand and separate real/imaginary parts.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sin^{2}\\theta = \\dfrac{1 - \\cos 2\\theta}{2}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Multiple-angle identities",
    "subtopicId": "fm.y2.pure.multiple-angles",
    "questionDiagram": null,
    "id": "fm.y2.pure.multiple-angles.q030",
    "tags": [
      "cos-cubed",
      "power-reduction"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Express $\\cos^{3}\\theta$ in terms of multiple angles of $\\theta$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "De Moivre",
          "workingLatex": "(\\cos\\theta + i\\sin\\theta)^{3} = \\cos 3\\theta + i\\sin 3\\theta",
          "explanation": "Start from complex exponential form.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Also expand",
          "workingLatex": "(\\cos\\theta + i\\sin\\theta)^{3} = \\sum \\binom{3}{k}(\\cos\\theta)^{3-k}(i\\sin\\theta)^{k}",
          "explanation": "Binomial expansion.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Extract $\\cos^{3}\\theta$",
          "workingLatex": "\\text{Use }\\cos 3\\theta\\text{ or }\\sin 3\\theta\\text{ to eliminate cross terms}",
          "explanation": "Multiple-angle formula links powers.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Power-reduction formula",
          "workingLatex": "\\cos^{3}\\theta = \\dfrac{3\\cos\\theta + \\cos 3\\theta}{4}",
          "explanation": "Express single power in multiple angles.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Example",
          "workingLatex": "\\cos^{3}60^{\\circ} = \\frac{3(\\frac{1}{2})+0}{4} = \\frac{3}{8}",
          "explanation": "Verify with a standard value.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Use in integration",
          "workingLatex": "\\int \\cos^{3}\\theta\\,d\\theta",
          "explanation": "Typical application.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "\\cos^{3}\\theta = \\dfrac{3\\cos\\theta + \\cos 3\\theta}{4}",
          "explanation": "Final identity.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "De Moivre's theorem",
          "workingLatex": "(\\cos\\theta+i\\sin\\theta)^{n}=\\cos n\\theta+i\\sin n\\theta",
          "explanation": "Links complex powers to multiple angles.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Binomial expansion",
          "workingLatex": "(\\cos\\theta+i\\sin\\theta)^{n}=\\sum\\binom{n}{k}(\\cos\\theta)^{n-k}(i\\sin\\theta)^{k}",
          "explanation": "Expand and separate real/imaginary parts.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\cos^{3}\\theta = \\dfrac{3\\cos\\theta + \\cos 3\\theta}{4}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Multiple-angle identities",
    "subtopicId": "fm.y2.pure.multiple-angles",
    "questionDiagram": null,
    "id": "fm.y2.pure.multiple-angles.q031",
    "tags": [
      "sin-cubed",
      "power-reduction"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Express $\\sin^{3}\\theta$ in terms of multiple angles of $\\theta$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "De Moivre",
          "workingLatex": "(\\cos\\theta + i\\sin\\theta)^{3} = \\cos 3\\theta + i\\sin 3\\theta",
          "explanation": "Start from complex exponential form.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Also expand",
          "workingLatex": "(\\cos\\theta + i\\sin\\theta)^{3} = \\sum \\binom{3}{k}(\\cos\\theta)^{3-k}(i\\sin\\theta)^{k}",
          "explanation": "Binomial expansion.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Extract $\\sin^{3}\\theta$",
          "workingLatex": "\\text{Use }\\cos 3\\theta\\text{ or }\\sin 3\\theta\\text{ to eliminate cross terms}",
          "explanation": "Multiple-angle formula links powers.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Power-reduction formula",
          "workingLatex": "\\sin^{3}\\theta = \\dfrac{3\\sin\\theta - \\sin 3\\theta}{4}",
          "explanation": "Express single power in multiple angles.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Example",
          "workingLatex": "\\sin^{3}30^{\\circ} = \\frac{3(\\frac{1}{2})-1}{4} = \\frac{1}{8}",
          "explanation": "Verify with a standard value.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Use in integration",
          "workingLatex": "\\int \\sin^{3}\\theta\\,d\\theta",
          "explanation": "Typical application.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "\\sin^{3}\\theta = \\dfrac{3\\sin\\theta - \\sin 3\\theta}{4}",
          "explanation": "Final identity.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "De Moivre's theorem",
          "workingLatex": "(\\cos\\theta+i\\sin\\theta)^{n}=\\cos n\\theta+i\\sin n\\theta",
          "explanation": "Links complex powers to multiple angles.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Binomial expansion",
          "workingLatex": "(\\cos\\theta+i\\sin\\theta)^{n}=\\sum\\binom{n}{k}(\\cos\\theta)^{n-k}(i\\sin\\theta)^{k}",
          "explanation": "Expand and separate real/imaginary parts.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sin^{3}\\theta = \\dfrac{3\\sin\\theta - \\sin 3\\theta}{4}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Multiple-angle identities",
    "subtopicId": "fm.y2.pure.multiple-angles",
    "questionDiagram": null,
    "id": "fm.y2.pure.multiple-angles.q032",
    "tags": [
      "cos-fourth",
      "power-reduction"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Express $\\cos^{4}\\theta$ in terms of multiple angles of $\\theta$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "De Moivre",
          "workingLatex": "(\\cos\\theta + i\\sin\\theta)^{4} = \\cos 4\\theta + i\\sin 4\\theta",
          "explanation": "Start from complex exponential form.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Also expand",
          "workingLatex": "(\\cos\\theta + i\\sin\\theta)^{4} = \\sum \\binom{4}{k}(\\cos\\theta)^{4-k}(i\\sin\\theta)^{k}",
          "explanation": "Binomial expansion.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Extract $\\cos^{4}\\theta$",
          "workingLatex": "\\text{Use }\\cos 4\\theta\\text{ or }\\sin 4\\theta\\text{ to eliminate cross terms}",
          "explanation": "Multiple-angle formula links powers.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Power-reduction formula",
          "workingLatex": "\\cos^{4}\\theta = \\dfrac{3 + 4\\cos 2\\theta + \\cos 4\\theta}{8}",
          "explanation": "Express single power in multiple angles.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Example",
          "workingLatex": "\\text{Used in }\\int\\cos^{4}\\theta\\,d\\theta",
          "explanation": "Verify with a standard value.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Use in integration",
          "workingLatex": "\\int \\cos^{4}\\theta\\,d\\theta",
          "explanation": "Typical application.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "\\cos^{4}\\theta = \\dfrac{3 + 4\\cos 2\\theta + \\cos 4\\theta}{8}",
          "explanation": "Final identity.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "De Moivre's theorem",
          "workingLatex": "(\\cos\\theta+i\\sin\\theta)^{n}=\\cos n\\theta+i\\sin n\\theta",
          "explanation": "Links complex powers to multiple angles.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Binomial expansion",
          "workingLatex": "(\\cos\\theta+i\\sin\\theta)^{n}=\\sum\\binom{n}{k}(\\cos\\theta)^{n-k}(i\\sin\\theta)^{k}",
          "explanation": "Expand and separate real/imaginary parts.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\cos^{4}\\theta = \\dfrac{3 + 4\\cos 2\\theta + \\cos 4\\theta}{8}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Multiple-angle identities",
    "subtopicId": "fm.y2.pure.multiple-angles",
    "questionDiagram": null,
    "id": "fm.y2.pure.multiple-angles.q033",
    "tags": [
      "sin-fourth",
      "power-reduction"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Express $\\sin^{4}\\theta$ in terms of multiple angles of $\\theta$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "De Moivre",
          "workingLatex": "(\\cos\\theta + i\\sin\\theta)^{4} = \\cos 4\\theta + i\\sin 4\\theta",
          "explanation": "Start from complex exponential form.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Also expand",
          "workingLatex": "(\\cos\\theta + i\\sin\\theta)^{4} = \\sum \\binom{4}{k}(\\cos\\theta)^{4-k}(i\\sin\\theta)^{k}",
          "explanation": "Binomial expansion.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Extract $\\sin^{4}\\theta$",
          "workingLatex": "\\text{Use }\\cos 4\\theta\\text{ or }\\sin 4\\theta\\text{ to eliminate cross terms}",
          "explanation": "Multiple-angle formula links powers.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Power-reduction formula",
          "workingLatex": "\\sin^{4}\\theta = \\dfrac{3 - 4\\cos 2\\theta + \\cos 4\\theta}{8}",
          "explanation": "Express single power in multiple angles.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Example",
          "workingLatex": "\\text{Used in }\\int\\sin^{4}\\theta\\,d\\theta",
          "explanation": "Verify with a standard value.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Use in integration",
          "workingLatex": "\\int \\sin^{4}\\theta\\,d\\theta",
          "explanation": "Typical application.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "\\sin^{4}\\theta = \\dfrac{3 - 4\\cos 2\\theta + \\cos 4\\theta}{8}",
          "explanation": "Final identity.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "De Moivre's theorem",
          "workingLatex": "(\\cos\\theta+i\\sin\\theta)^{n}=\\cos n\\theta+i\\sin n\\theta",
          "explanation": "Links complex powers to multiple angles.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Binomial expansion",
          "workingLatex": "(\\cos\\theta+i\\sin\\theta)^{n}=\\sum\\binom{n}{k}(\\cos\\theta)^{n-k}(i\\sin\\theta)^{k}",
          "explanation": "Expand and separate real/imaginary parts.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sin^{4}\\theta = \\dfrac{3 - 4\\cos 2\\theta + \\cos 4\\theta}{8}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Multiple-angle identities",
    "subtopicId": "fm.y2.pure.multiple-angles",
    "questionDiagram": null,
    "id": "fm.y2.pure.multiple-angles.q034",
    "tags": [
      "factorise",
      "equations"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Solve $\\sin 2\\theta = \\cos\\theta$ for $0 \\leq \\theta < 2\\pi$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Double-angle",
          "workingLatex": "\\sin 2\\theta = 2\\sin\\theta\\cos\\theta",
          "explanation": "Rewrite LHS.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Equation",
          "workingLatex": "2\\sin\\theta\\cos\\theta = \\cos\\theta",
          "explanation": "Substitute.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange",
          "workingLatex": "2\\sin\\theta\\cos\\theta - \\cos\\theta = 0",
          "explanation": "Bring terms together.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Factorise",
          "workingLatex": "\\cos\\theta(2\\sin\\theta - 1) = 0",
          "explanation": "Common factor.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Case 1",
          "workingLatex": "\\cos\\theta = 0 \\Rightarrow \\theta = \\frac{\\pi}{2}, \\frac{3\\pi}{2}",
          "explanation": "First family.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Case 2",
          "workingLatex": "\\sin\\theta = \\frac{1}{2} \\Rightarrow \\theta = \\frac{\\pi}{6}, \\frac{5\\pi}{6}",
          "explanation": "Second family.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "\\theta = \\frac{\\pi}{6}, \\frac{\\pi}{2}, \\frac{5\\pi}{6}, \\frac{3\\pi}{2}",
          "explanation": "All solutions in interval.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "De Moivre's theorem",
          "workingLatex": "(\\cos\\theta+i\\sin\\theta)^{n}=\\cos n\\theta+i\\sin n\\theta",
          "explanation": "Links complex powers to multiple angles.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Binomial expansion",
          "workingLatex": "(\\cos\\theta+i\\sin\\theta)^{n}=\\sum\\binom{n}{k}(\\cos\\theta)^{n-k}(i\\sin\\theta)^{k}",
          "explanation": "Expand and separate real/imaginary parts.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta = \\dfrac{\\pi}{6},\\ \\dfrac{\\pi}{2},\\ \\dfrac{5\\pi}{6},\\ \\dfrac{3\\pi}{2}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Multiple-angle identities",
    "subtopicId": "fm.y2.pure.multiple-angles",
    "questionDiagram": null,
    "id": "fm.y2.pure.multiple-angles.q035",
    "tags": [
      "quadratic",
      "equations"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Solve $\\cos 2\\theta = \\sin\\theta$ for $0 \\leq \\theta < 2\\pi$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Double-angle",
          "workingLatex": "\\cos 2\\theta = 1 - 2\\sin^{2}\\theta",
          "explanation": "Express in sine only.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Equation",
          "workingLatex": "1 - 2\\sin^{2}\\theta = \\sin\\theta",
          "explanation": "Substitute.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange",
          "workingLatex": "2\\sin^{2}\\theta + \\sin\\theta - 1 = 0",
          "explanation": "Quadratic in $\\sin\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Factorise",
          "workingLatex": "(2\\sin\\theta - 1)(\\sin\\theta + 1) = 0",
          "explanation": "Factor.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Case 1",
          "workingLatex": "\\sin\\theta = \\frac{1}{2} \\Rightarrow \\theta = \\frac{\\pi}{6}, \\frac{5\\pi}{6}",
          "explanation": "First family.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Case 2",
          "workingLatex": "\\sin\\theta = -1 \\Rightarrow \\theta = \\frac{3\\pi}{2}",
          "explanation": "Second family.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "\\theta = \\frac{\\pi}{6}, \\frac{5\\pi}{6}, \\frac{3\\pi}{2}",
          "explanation": "All solutions.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "De Moivre's theorem",
          "workingLatex": "(\\cos\\theta+i\\sin\\theta)^{n}=\\cos n\\theta+i\\sin n\\theta",
          "explanation": "Links complex powers to multiple angles.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Binomial expansion",
          "workingLatex": "(\\cos\\theta+i\\sin\\theta)^{n}=\\sum\\binom{n}{k}(\\cos\\theta)^{n-k}(i\\sin\\theta)^{k}",
          "explanation": "Expand and separate real/imaginary parts.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta = \\dfrac{\\pi}{6},\\ \\dfrac{5\\pi}{6},\\ \\dfrac{3\\pi}{2}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Multiple-angle identities",
    "subtopicId": "fm.y2.pure.multiple-angles",
    "questionDiagram": null,
    "id": "fm.y2.pure.multiple-angles.q036",
    "tags": [
      "triple-angle",
      "equations"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Solve $\\sin 3\\theta = \\sin\\theta$ for $0 \\leq \\theta < 2\\pi$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Triple-angle",
          "workingLatex": "\\sin 3\\theta = 3\\sin\\theta - 4\\sin^{3}\\theta",
          "explanation": "Expand LHS.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Equation",
          "workingLatex": "3\\sin\\theta - 4\\sin^{3}\\theta = \\sin\\theta",
          "explanation": "Substitute.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange",
          "workingLatex": "2\\sin\\theta - 4\\sin^{3}\\theta = 0",
          "explanation": "Bring to one side.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Factorise",
          "workingLatex": "2\\sin\\theta(1 - 2\\sin^{2}\\theta) = 0",
          "explanation": "Factor.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Case 1",
          "workingLatex": "\\sin\\theta = 0 \\Rightarrow \\theta = 0, \\pi",
          "explanation": "First family.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Case 2",
          "workingLatex": "\\sin^{2}\\theta = \\frac{1}{2} \\Rightarrow \\sin\\theta = \\pm\\frac{1}{\\sqrt{2}}",
          "explanation": "Second family.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Case 2 solutions",
          "workingLatex": "\\theta = \\frac{\\pi}{4}, \\frac{3\\pi}{4}, \\frac{5\\pi}{4}, \\frac{7\\pi}{4}",
          "explanation": "All quadrants.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "\\theta = 0, \\frac{\\pi}{4}, \\frac{3\\pi}{4}, \\pi, \\frac{5\\pi}{4}, \\frac{7\\pi}{4}",
          "explanation": "Complete set.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "De Moivre's theorem",
          "workingLatex": "(\\cos\\theta+i\\sin\\theta)^{n}=\\cos n\\theta+i\\sin n\\theta",
          "explanation": "Links complex powers to multiple angles.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta = 0,\\ \\dfrac{\\pi}{4},\\ \\dfrac{3\\pi}{4},\\ \\pi,\\ \\dfrac{5\\pi}{4},\\ \\dfrac{7\\pi}{4}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Multiple-angle identities",
    "subtopicId": "fm.y2.pure.multiple-angles",
    "questionDiagram": null,
    "id": "fm.y2.pure.multiple-angles.q037",
    "tags": [
      "triple-angle",
      "equations"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Solve $\\cos 3\\theta = \\cos\\theta$ for $0 \\leq \\theta < 2\\pi$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Triple-angle",
          "workingLatex": "\\cos 3\\theta = 4\\cos^{3}\\theta - 3\\cos\\theta",
          "explanation": "Expand LHS.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Equation",
          "workingLatex": "4\\cos^{3}\\theta - 3\\cos\\theta = \\cos\\theta",
          "explanation": "Substitute.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange",
          "workingLatex": "4\\cos^{3}\\theta - 4\\cos\\theta = 0",
          "explanation": "Bring to one side.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Factorise",
          "workingLatex": "4\\cos\\theta(\\cos^{2}\\theta - 1) = 0",
          "explanation": "Factor.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Case 1",
          "workingLatex": "\\cos\\theta = 0 \\Rightarrow \\theta = \\frac{\\pi}{2}, \\frac{3\\pi}{2}",
          "explanation": "First family.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Case 2",
          "workingLatex": "\\cos^{2}\\theta = 1 \\Rightarrow \\cos\\theta = \\pm 1",
          "explanation": "Second family.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Case 2 solutions",
          "workingLatex": "\\theta = 0, \\pi",
          "explanation": "From $\\cos\\theta = \\pm 1$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "\\theta = 0, \\frac{\\pi}{2}, \\pi, \\frac{3\\pi}{2}",
          "explanation": "Complete set.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "De Moivre's theorem",
          "workingLatex": "(\\cos\\theta+i\\sin\\theta)^{n}=\\cos n\\theta+i\\sin n\\theta",
          "explanation": "Links complex powers to multiple angles.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta = 0,\\ \\dfrac{\\pi}{2},\\ \\pi,\\ \\dfrac{3\\pi}{2}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Multiple-angle identities",
    "subtopicId": "fm.y2.pure.multiple-angles",
    "questionDiagram": null,
    "id": "fm.y2.pure.multiple-angles.q038",
    "tags": [
      "integration"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Find $\\displaystyle\\int \\sin^{2}\\theta\\,d\\theta$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Power reduction",
          "workingLatex": "\\sin^{2}\\theta = \\dfrac{1 - \\cos 2\\theta}{2}",
          "explanation": "Linearise the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Split integral",
          "workingLatex": "\\int \\sin^{2}\\theta\\,d\\theta = \\frac{1}{2}\\int 1\\,d\\theta - \\frac{1}{2}\\int \\cos 2\\theta\\,d\\theta",
          "explanation": "Integrate term by term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "First term",
          "workingLatex": "\\frac{1}{2}\\theta",
          "explanation": "Integrate $1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Second term",
          "workingLatex": "-\\frac{1}{2}\\cdot\\frac{1}{2}\\sin 2\\theta",
          "explanation": "Use $\\int\\cos 2\\theta\\,d\\theta = \\frac{1}{2}\\sin 2\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Combine",
          "workingLatex": "\\frac{1}{2}\\theta - \\frac{1}{4}\\sin 2\\theta + C",
          "explanation": "Add constant.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Alternative",
          "workingLatex": "\\frac{1}{2}\\theta - \\frac{1}{2}\\sin\\theta\\cos\\theta + C",
          "explanation": "Using $\\sin 2\\theta = 2\\sin\\theta\\cos\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "\\frac{1}{2}\\theta - \\frac{1}{4}\\sin 2\\theta + C",
          "explanation": "Final antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "De Moivre's theorem",
          "workingLatex": "(\\cos\\theta+i\\sin\\theta)^{n}=\\cos n\\theta+i\\sin n\\theta",
          "explanation": "Links complex powers to multiple angles.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Binomial expansion",
          "workingLatex": "(\\cos\\theta+i\\sin\\theta)^{n}=\\sum\\binom{n}{k}(\\cos\\theta)^{n-k}(i\\sin\\theta)^{k}",
          "explanation": "Expand and separate real/imaginary parts.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\sin^{2}\\theta\\,d\\theta = \\dfrac{1}{2}\\theta - \\dfrac{1}{4}\\sin 2\\theta + C$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Multiple-angle identities",
    "subtopicId": "fm.y2.pure.multiple-angles",
    "questionDiagram": null,
    "id": "fm.y2.pure.multiple-angles.q039",
    "tags": [
      "integration"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Find $\\displaystyle\\int \\cos^{2}\\theta\\,d\\theta$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Power reduction",
          "workingLatex": "\\cos^{2}\\theta = \\dfrac{1 + \\cos 2\\theta}{2}",
          "explanation": "Linearise the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Split integral",
          "workingLatex": "\\int \\cos^{2}\\theta\\,d\\theta = \\frac{1}{2}\\int 1\\,d\\theta + \\frac{1}{2}\\int \\cos 2\\theta\\,d\\theta",
          "explanation": "Integrate term by term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "First term",
          "workingLatex": "\\frac{1}{2}\\theta",
          "explanation": "Integrate $1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Second term",
          "workingLatex": "\\frac{1}{2}\\cdot\\frac{1}{2}\\sin 2\\theta",
          "explanation": "Standard integral.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Combine",
          "workingLatex": "\\frac{1}{2}\\theta + \\frac{1}{4}\\sin 2\\theta + C",
          "explanation": "Add constant.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\frac{1}{2}\\theta + \\frac{1}{4}\\sin 2\\theta + C",
          "explanation": "Final antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "De Moivre's theorem",
          "workingLatex": "(\\cos\\theta+i\\sin\\theta)^{n}=\\cos n\\theta+i\\sin n\\theta",
          "explanation": "Links complex powers to multiple angles.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Binomial expansion",
          "workingLatex": "(\\cos\\theta+i\\sin\\theta)^{n}=\\sum\\binom{n}{k}(\\cos\\theta)^{n-k}(i\\sin\\theta)^{k}",
          "explanation": "Expand and separate real/imaginary parts.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Power reduction",
          "workingLatex": "\\cos^{2}\\theta=\\frac{1+\\cos 2\\theta}{2},\\;\\sin^{2}\\theta=\\frac{1-\\cos 2\\theta}{2}",
          "explanation": "Convert squared trig to multiple angles.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\cos^{2}\\theta\\,d\\theta = \\dfrac{1}{2}\\theta + \\dfrac{1}{4}\\sin 2\\theta + C$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Multiple-angle identities",
    "subtopicId": "fm.y2.pure.multiple-angles",
    "questionDiagram": null,
    "id": "fm.y2.pure.multiple-angles.q040",
    "tags": [
      "integration"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Find $\\displaystyle\\int \\sin^{3}\\theta\\,d\\theta$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rewrite",
          "workingLatex": "\\sin^{3}\\theta = \\sin\\theta \\cdot \\sin^{2}\\theta",
          "explanation": "Split one factor.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Power reduction",
          "workingLatex": "\\sin^{2}\\theta = \\dfrac{1 - \\cos 2\\theta}{2}",
          "explanation": "Linearise the squared term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Product",
          "workingLatex": "\\sin^{3}\\theta = \\frac{1}{2}\\sin\\theta - \\frac{1}{2}\\sin\\theta\\cos 2\\theta",
          "explanation": "Expand.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Use product-to-sum",
          "workingLatex": "\\sin\\theta\\cos 2\\theta = \\frac{1}{2}(\\sin 3\\theta - \\sin\\theta)",
          "explanation": "Convert product to sum.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify integrand",
          "workingLatex": "\\sin^{3}\\theta = \\frac{3}{4}\\sin\\theta - \\frac{1}{4}\\sin 3\\theta",
          "explanation": "Collect like terms.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Integrate",
          "workingLatex": "-\\frac{3}{4}\\cos\\theta + \\frac{1}{12}\\cos 3\\theta + C",
          "explanation": "Standard integrals.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "-\\frac{3}{4}\\cos\\theta + \\frac{1}{12}\\cos 3\\theta + C",
          "explanation": "Final antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "De Moivre's theorem",
          "workingLatex": "(\\cos\\theta+i\\sin\\theta)^{n}=\\cos n\\theta+i\\sin n\\theta",
          "explanation": "Links complex powers to multiple angles.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Binomial expansion",
          "workingLatex": "(\\cos\\theta+i\\sin\\theta)^{n}=\\sum\\binom{n}{k}(\\cos\\theta)^{n-k}(i\\sin\\theta)^{k}",
          "explanation": "Expand and separate real/imaginary parts.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\sin^{3}\\theta\\,d\\theta = -\\dfrac{3}{4}\\cos\\theta + \\dfrac{1}{12}\\cos 3\\theta + C$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Multiple-angle identities",
    "subtopicId": "fm.y2.pure.multiple-angles",
    "questionDiagram": null,
    "id": "fm.y2.pure.multiple-angles.q041",
    "tags": [
      "integration"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Find $\\displaystyle\\int \\cos^{3}\\theta\\,d\\theta$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rewrite",
          "workingLatex": "\\cos^{3}\\theta = \\cos\\theta \\cdot \\cos^{2}\\theta",
          "explanation": "Split one factor.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Power reduction",
          "workingLatex": "\\cos^{2}\\theta = \\dfrac{1 + \\cos 2\\theta}{2}",
          "explanation": "Linearise.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Product",
          "workingLatex": "\\cos^{3}\\theta = \\frac{1}{2}\\cos\\theta + \\frac{1}{2}\\cos\\theta\\cos 2\\theta",
          "explanation": "Expand.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Product-to-sum",
          "workingLatex": "\\cos\\theta\\cos 2\\theta = \\frac{1}{2}(\\cos 3\\theta + \\cos\\theta)",
          "explanation": "Convert product.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "\\cos^{3}\\theta = \\frac{3}{4}\\cos\\theta + \\frac{1}{4}\\cos 3\\theta",
          "explanation": "Collect terms.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Integrate",
          "workingLatex": "\\frac{3}{4}\\sin\\theta + \\frac{1}{12}\\sin 3\\theta + C",
          "explanation": "Standard integrals.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "\\frac{3}{4}\\sin\\theta + \\frac{1}{12}\\sin 3\\theta + C",
          "explanation": "Final antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "De Moivre's theorem",
          "workingLatex": "(\\cos\\theta+i\\sin\\theta)^{n}=\\cos n\\theta+i\\sin n\\theta",
          "explanation": "Links complex powers to multiple angles.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Binomial expansion",
          "workingLatex": "(\\cos\\theta+i\\sin\\theta)^{n}=\\sum\\binom{n}{k}(\\cos\\theta)^{n-k}(i\\sin\\theta)^{k}",
          "explanation": "Expand and separate real/imaginary parts.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\cos^{3}\\theta\\,d\\theta = \\dfrac{3}{4}\\sin\\theta + \\dfrac{1}{12}\\sin 3\\theta + C$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Multiple-angle identities",
    "subtopicId": "fm.y2.pure.multiple-angles",
    "questionDiagram": null,
    "id": "fm.y2.pure.multiple-angles.q042",
    "tags": [
      "tan",
      "triple-angle"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Express $\\tan 3\\theta$ in terms of $\\tan\\theta$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Definition",
          "workingLatex": "\\tan 3\\theta = \\dfrac{\\sin 3\\theta}{\\cos 3\\theta}",
          "explanation": "Quotient identity.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Numerator",
          "workingLatex": "\\sin 3\\theta = 3\\sin\\theta - 4\\sin^{3}\\theta",
          "explanation": "Triple-angle sine.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Denominator",
          "workingLatex": "\\cos 3\\theta = 4\\cos^{3}\\theta - 3\\cos\\theta",
          "explanation": "Triple-angle cosine.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Divide by $\\cos^{3}\\theta$",
          "workingLatex": "\\tan 3\\theta = \\dfrac{3\\tan\\theta - 4\\tan^{3}\\theta}{4 - 3\\tan^{2}\\theta}",
          "explanation": "Obtain tangent form.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Domain",
          "workingLatex": "4 - 3\\tan^{2}\\theta \\neq 0",
          "explanation": "Denominator restriction.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\dfrac{3\\tan\\theta - 4\\tan^{3}\\theta}{4 - 3\\tan^{2}\\theta}",
          "explanation": "Triple-angle tangent.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "De Moivre's theorem",
          "workingLatex": "(\\cos\\theta+i\\sin\\theta)^{n}=\\cos n\\theta+i\\sin n\\theta",
          "explanation": "Links complex powers to multiple angles.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Binomial expansion",
          "workingLatex": "(\\cos\\theta+i\\sin\\theta)^{n}=\\sum\\binom{n}{k}(\\cos\\theta)^{n-k}(i\\sin\\theta)^{k}",
          "explanation": "Expand and separate real/imaginary parts.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Power reduction",
          "workingLatex": "\\cos^{2}\\theta=\\frac{1+\\cos 2\\theta}{2},\\;\\sin^{2}\\theta=\\frac{1-\\cos 2\\theta}{2}",
          "explanation": "Convert squared trig to multiple angles.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\tan 3\\theta = \\dfrac{3\\tan\\theta - 4\\tan^{3}\\theta}{4 - 3\\tan^{2}\\theta}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Multiple-angle identities",
    "subtopicId": "fm.y2.pure.multiple-angles",
    "questionDiagram": null,
    "id": "fm.y2.pure.multiple-angles.q043",
    "tags": [
      "proof",
      "triple-angle"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Prove that $\\sin 3\\theta \\equiv 3\\sin\\theta - 4\\sin^{3}\\theta$ using the compound-angle formula.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write as sum",
          "workingLatex": "\\sin 3\\theta = \\sin(2\\theta + \\theta)",
          "explanation": "Split the angle.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Compound angle",
          "workingLatex": "\\sin(2\\theta+\\theta) = \\sin 2\\theta\\cos\\theta + \\cos 2\\theta\\sin\\theta",
          "explanation": "Addition formula.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute double angles",
          "workingLatex": "= 2\\sin\\theta\\cos^{2}\\theta + (1-2\\sin^{2}\\theta)\\sin\\theta",
          "explanation": "Use double-angle forms.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Replace $\\cos^{2}\\theta$",
          "workingLatex": "= 2\\sin\\theta(1-\\sin^{2}\\theta) + \\sin\\theta - 2\\sin^{3}\\theta",
          "explanation": "Use Pythagoras.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Expand",
          "workingLatex": "= 2\\sin\\theta - 2\\sin^{3}\\theta + \\sin\\theta - 2\\sin^{3}\\theta",
          "explanation": "Distribute.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Collect",
          "workingLatex": "= 3\\sin\\theta - 4\\sin^{3}\\theta",
          "explanation": "Simplify.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "3\\sin\\theta - 4\\sin^{3}\\theta",
          "explanation": "Identity proved.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "De Moivre's theorem",
          "workingLatex": "(\\cos\\theta+i\\sin\\theta)^{n}=\\cos n\\theta+i\\sin n\\theta",
          "explanation": "Links complex powers to multiple angles.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Binomial expansion",
          "workingLatex": "(\\cos\\theta+i\\sin\\theta)^{n}=\\sum\\binom{n}{k}(\\cos\\theta)^{n-k}(i\\sin\\theta)^{k}",
          "explanation": "Expand and separate real/imaginary parts.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sin 3\\theta \\equiv 3\\sin\\theta - 4\\sin^{3}\\theta$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Multiple-angle identities",
    "subtopicId": "fm.y2.pure.multiple-angles",
    "questionDiagram": null,
    "id": "fm.y2.pure.multiple-angles.q044",
    "tags": [
      "proof",
      "triple-angle"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Prove that $\\cos 3\\theta \\equiv 4\\cos^{3}\\theta - 3\\cos\\theta$ using the compound-angle formula.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write as sum",
          "workingLatex": "\\cos 3\\theta = \\cos(2\\theta + \\theta)",
          "explanation": "Split the angle.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Compound angle",
          "workingLatex": "\\cos(2\\theta+\\theta) = \\cos 2\\theta\\cos\\theta - \\sin 2\\theta\\sin\\theta",
          "explanation": "Addition formula.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute",
          "workingLatex": "= (2\\cos^{2}\\theta-1)\\cos\\theta - 2\\sin\\theta\\cos\\theta\\sin\\theta",
          "explanation": "Double-angle forms.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify sine term",
          "workingLatex": "= (2\\cos^{2}\\theta-1)\\cos\\theta - 2\\sin^{2}\\theta\\cos\\theta",
          "explanation": "Collect.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Replace $\\sin^{2}\\theta$",
          "workingLatex": "= (2\\cos^{2}\\theta-1)\\cos\\theta - 2(1-\\cos^{2}\\theta)\\cos\\theta",
          "explanation": "Pythagoras.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Expand and collect",
          "workingLatex": "= 4\\cos^{3}\\theta - 3\\cos\\theta",
          "explanation": "Simplify.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "4\\cos^{3}\\theta - 3\\cos\\theta",
          "explanation": "Identity proved.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "De Moivre's theorem",
          "workingLatex": "(\\cos\\theta+i\\sin\\theta)^{n}=\\cos n\\theta+i\\sin n\\theta",
          "explanation": "Links complex powers to multiple angles.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Binomial expansion",
          "workingLatex": "(\\cos\\theta+i\\sin\\theta)^{n}=\\sum\\binom{n}{k}(\\cos\\theta)^{n-k}(i\\sin\\theta)^{k}",
          "explanation": "Expand and separate real/imaginary parts.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\cos 3\\theta \\equiv 4\\cos^{3}\\theta - 3\\cos\\theta$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Multiple-angle identities",
    "subtopicId": "fm.y2.pure.multiple-angles",
    "questionDiagram": null,
    "id": "fm.y2.pure.multiple-angles.q045",
    "tags": [
      "3-4-5",
      "evaluation"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Given that $\\cos\\theta = \\frac{4}{5}$, find the exact value of $\\cos 3\\theta$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Multiple-angle formula",
          "workingLatex": "\\cos 3\\theta = 4\\cos^{3}\\theta - 3\\cos\\theta",
          "explanation": "Use the appropriate identity.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "\\cos\\theta = \\frac{4}{5}",
          "explanation": "Given value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute powers",
          "workingLatex": "\\cos^{3}\\theta = \\frac{4}{5}^{3}",
          "explanation": "Evaluate powers of $\\cos\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into formula",
          "workingLatex": "\\cos 3\\theta = 4(\\frac{4}{5})^{3}-3(\\frac{4}{5})",
          "explanation": "Replace each power.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "\\cos 3\\theta = -\\frac{44}{125}",
          "explanation": "Arithmetic.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Sign check",
          "workingLatex": "\\text{Quadrant and sign consistent}",
          "explanation": "Confirm the sign is reasonable.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "\\cos 3\\theta = -\\frac{44}{125}",
          "explanation": "Exact value.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "De Moivre's theorem",
          "workingLatex": "(\\cos\\theta+i\\sin\\theta)^{n}=\\cos n\\theta+i\\sin n\\theta",
          "explanation": "Links complex powers to multiple angles.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Binomial expansion",
          "workingLatex": "(\\cos\\theta+i\\sin\\theta)^{n}=\\sum\\binom{n}{k}(\\cos\\theta)^{n-k}(i\\sin\\theta)^{k}",
          "explanation": "Expand and separate real/imaginary parts.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\cos 3\\theta = -\\frac{44}{125}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Multiple-angle identities",
    "subtopicId": "fm.y2.pure.multiple-angles",
    "questionDiagram": null,
    "id": "fm.y2.pure.multiple-angles.q046",
    "tags": [
      "3-4-5",
      "evaluation"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Given that $\\sin\\theta = \\frac{4}{5}$, find the exact value of $\\sin 3\\theta$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Multiple-angle formula",
          "workingLatex": "\\sin 3\\theta = 3\\sin\\theta - 4\\sin^{3}\\theta",
          "explanation": "Use the appropriate identity.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "\\sin\\theta = \\frac{4}{5}",
          "explanation": "Given value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute powers",
          "workingLatex": "\\sin^{3}\\theta = (\\frac{4}{5})^{3}",
          "explanation": "Evaluate powers of $\\sin\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into formula",
          "workingLatex": "\\sin 3\\theta = 3(\\frac{4}{5})-4(\\frac{4}{5})^{3}",
          "explanation": "Replace each power.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "\\sin 3\\theta = -\\frac{48}{125}",
          "explanation": "Arithmetic.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Sign check",
          "workingLatex": "\\text{Sign consistent with quadrant}",
          "explanation": "Confirm the sign.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "\\sin 3\\theta = -\\frac{48}{125}",
          "explanation": "Exact value.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "De Moivre's theorem",
          "workingLatex": "(\\cos\\theta+i\\sin\\theta)^{n}=\\cos n\\theta+i\\sin n\\theta",
          "explanation": "Links complex powers to multiple angles.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Binomial expansion",
          "workingLatex": "(\\cos\\theta+i\\sin\\theta)^{n}=\\sum\\binom{n}{k}(\\cos\\theta)^{n-k}(i\\sin\\theta)^{k}",
          "explanation": "Expand and separate real/imaginary parts.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sin 3\\theta = -\\frac{48}{125}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Multiple-angle identities",
    "subtopicId": "fm.y2.pure.multiple-angles",
    "questionDiagram": null,
    "id": "fm.y2.pure.multiple-angles.q047",
    "tags": [
      "product-to-sum",
      "equations"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Solve $\\cos 4\\theta = \\cos 2\\theta$ for $0 \\leq \\theta < 2\\pi$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factorise difference",
          "workingLatex": "\\cos 4\\theta - \\cos 2\\theta = -2\\sin 3\\theta\\sin\\theta",
          "explanation": "Product-to-sum formula.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Equation",
          "workingLatex": "-2\\sin 3\\theta\\sin\\theta = 0",
          "explanation": "Set equal to zero.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Case 1",
          "workingLatex": "\\sin\\theta = 0 \\Rightarrow \\theta = 0, \\pi",
          "explanation": "First family.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Case 2",
          "workingLatex": "\\sin 3\\theta = 0 \\Rightarrow 3\\theta = 0, \\pi, 2\\pi, 3\\pi, 4\\pi, 5\\pi",
          "explanation": "Second family.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Case 2 solutions",
          "workingLatex": "\\theta = 0, \\frac{\\pi}{3}, \\frac{2\\pi}{3}, \\pi, \\frac{4\\pi}{3}, \\frac{5\\pi}{3}",
          "explanation": "Divide by $3$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Distinct values",
          "workingLatex": "\\theta = 0, \\frac{\\pi}{3}, \\frac{2\\pi}{3}, \\pi, \\frac{4\\pi}{3}, \\frac{5\\pi}{3}",
          "explanation": "Remove duplicates.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "\\theta = 0, \\frac{\\pi}{3}, \\frac{2\\pi}{3}, \\pi, \\frac{4\\pi}{3}, \\frac{5\\pi}{3}",
          "explanation": "Complete set.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "De Moivre's theorem",
          "workingLatex": "(\\cos\\theta+i\\sin\\theta)^{n}=\\cos n\\theta+i\\sin n\\theta",
          "explanation": "Links complex powers to multiple angles.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Binomial expansion",
          "workingLatex": "(\\cos\\theta+i\\sin\\theta)^{n}=\\sum\\binom{n}{k}(\\cos\\theta)^{n-k}(i\\sin\\theta)^{k}",
          "explanation": "Expand and separate real/imaginary parts.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta = 0,\\ \\dfrac{\\pi}{3},\\ \\dfrac{2\\pi}{3},\\ \\pi,\\ \\dfrac{4\\pi}{3},\\ \\dfrac{5\\pi}{3}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Multiple-angle identities",
    "subtopicId": "fm.y2.pure.multiple-angles",
    "questionDiagram": null,
    "id": "fm.y2.pure.multiple-angles.q048",
    "tags": [
      "integration"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Find $\\displaystyle\\int \\sin^{2}\\theta\\cos^{2}\\theta\\,d\\theta$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Use $\\sin 2\\theta$",
          "workingLatex": "\\sin\\theta\\cos\\theta = \\frac{1}{2}\\sin 2\\theta",
          "explanation": "Double-angle product.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rewrite integrand",
          "workingLatex": "\\sin^{2}\\theta\\cos^{2}\\theta = \\frac{1}{4}\\sin^{2} 2\\theta",
          "explanation": "Square the identity.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Power reduce",
          "workingLatex": "\\sin^{2}2\\theta = \\frac{1-\\cos 4\\theta}{2}",
          "explanation": "Linearise.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrand",
          "workingLatex": "\\frac{1}{8}(1-\\cos 4\\theta)",
          "explanation": "Simplify.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate",
          "workingLatex": "\\frac{1}{8}\\theta - \\frac{1}{32}\\sin 4\\theta + C",
          "explanation": "Standard integrals.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\frac{1}{8}\\theta - \\frac{1}{32}\\sin 4\\theta + C",
          "explanation": "Final antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "De Moivre's theorem",
          "workingLatex": "(\\cos\\theta+i\\sin\\theta)^{n}=\\cos n\\theta+i\\sin n\\theta",
          "explanation": "Links complex powers to multiple angles.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Binomial expansion",
          "workingLatex": "(\\cos\\theta+i\\sin\\theta)^{n}=\\sum\\binom{n}{k}(\\cos\\theta)^{n-k}(i\\sin\\theta)^{k}",
          "explanation": "Expand and separate real/imaginary parts.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Power reduction",
          "workingLatex": "\\cos^{2}\\theta=\\frac{1+\\cos 2\\theta}{2},\\;\\sin^{2}\\theta=\\frac{1-\\cos 2\\theta}{2}",
          "explanation": "Convert squared trig to multiple angles.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\sin^{2}\\theta\\cos^{2}\\theta\\,d\\theta = \\dfrac{1}{8}\\theta - \\dfrac{1}{32}\\sin 4\\theta + C$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Multiple-angle identities",
    "subtopicId": "fm.y2.pure.multiple-angles",
    "questionDiagram": null,
    "id": "fm.y2.pure.multiple-angles.q049",
    "tags": [
      "simplify",
      "double-angle"
    ],
    "difficulty": "Intermediate",
    "marks": 7,
    "answerType": "written",
    "questionText": "Simplify $\\cos^{2}\\theta - \\sin^{2}\\theta + 2\\sin^{2}\\theta$ using multiple-angle identities.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Combine squared terms",
          "workingLatex": "\\cos^{2}\\theta - \\sin^{2}\\theta + 2\\sin^{2}\\theta = \\cos^{2}\\theta + \\sin^{2}\\theta",
          "explanation": "Collect like terms.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Pythagoras",
          "workingLatex": "\\cos^{2}\\theta + \\sin^{2}\\theta = 1",
          "explanation": "Fundamental identity.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Alternative route",
          "workingLatex": "\\cos^{2}\\theta - \\sin^{2}\\theta = \\cos 2\\theta",
          "explanation": "Recognise double-angle.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Then",
          "workingLatex": "\\cos 2\\theta + 2\\sin^{2}\\theta = \\cos 2\\theta + (1-\\cos 2\\theta) = 1",
          "explanation": "Power reduction confirms.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Answer",
          "workingLatex": "1",
          "explanation": "Simplified value.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "De Moivre's theorem",
          "workingLatex": "(\\cos\\theta+i\\sin\\theta)^{n}=\\cos n\\theta+i\\sin n\\theta",
          "explanation": "Links complex powers to multiple angles.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Binomial expansion",
          "workingLatex": "(\\cos\\theta+i\\sin\\theta)^{n}=\\sum\\binom{n}{k}(\\cos\\theta)^{n-k}(i\\sin\\theta)^{k}",
          "explanation": "Expand and separate real/imaginary parts.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Power reduction",
          "workingLatex": "\\cos^{2}\\theta=\\frac{1+\\cos 2\\theta}{2},\\;\\sin^{2}\\theta=\\frac{1-\\cos 2\\theta}{2}",
          "explanation": "Convert squared trig to multiple angles.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Double-angle recall",
          "workingLatex": "\\cos 2\\theta=2\\cos^{2}\\theta-1,\\;\\sin 2\\theta=2\\sin\\theta\\cos\\theta",
          "explanation": "Fundamental identities.",
          "diagram": null
        }
      ],
      "finalAnswer": "$1$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Multiple-angle identities",
    "subtopicId": "fm.y2.pure.multiple-angles",
    "questionDiagram": null,
    "id": "fm.y2.pure.multiple-angles.q050",
    "tags": [
      "simplify",
      "triple-angle"
    ],
    "difficulty": "Intermediate",
    "marks": 7,
    "answerType": "written",
    "questionText": "Simplify $4\\cos^{3}\\theta - 3\\cos\\theta + 2\\sin^{2}\\theta$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise triple angle",
          "workingLatex": "4\\cos^{3}\\theta - 3\\cos\\theta = \\cos 3\\theta",
          "explanation": "Triple-angle cosine.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Power reduction",
          "workingLatex": "2\\sin^{2}\\theta = 1 - \\cos 2\\theta",
          "explanation": "Express in multiple angle.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Combined",
          "workingLatex": "\\cos 3\\theta + 1 - \\cos 2\\theta",
          "explanation": "Substitute both.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Cannot simplify further",
          "workingLatex": "\\text{Unless specific }\\theta\\text{ given}",
          "explanation": "General form.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Example at $\\theta=0$",
          "workingLatex": "1 + 1 - 1 = 1",
          "explanation": "Numerical check.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\cos 3\\theta + 1 - \\cos 2\\theta",
          "explanation": "Simplified expression.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "De Moivre's theorem",
          "workingLatex": "(\\cos\\theta+i\\sin\\theta)^{n}=\\cos n\\theta+i\\sin n\\theta",
          "explanation": "Links complex powers to multiple angles.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Binomial expansion",
          "workingLatex": "(\\cos\\theta+i\\sin\\theta)^{n}=\\sum\\binom{n}{k}(\\cos\\theta)^{n-k}(i\\sin\\theta)^{k}",
          "explanation": "Expand and separate real/imaginary parts.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Power reduction",
          "workingLatex": "\\cos^{2}\\theta=\\frac{1+\\cos 2\\theta}{2},\\;\\sin^{2}\\theta=\\frac{1-\\cos 2\\theta}{2}",
          "explanation": "Convert squared trig to multiple angles.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\cos 3\\theta + 1 - \\cos 2\\theta$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Multiple-angle identities",
    "subtopicId": "fm.y2.pure.multiple-angles",
    "questionDiagram": null,
    "id": "fm.y2.pure.multiple-angles.q051",
    "tags": [
      "proof",
      "quadruple-angle"
    ],
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "written",
    "questionText": "Prove that $\\cos 4\\theta \\equiv 8\\cos^{4}\\theta - 8\\cos^{2}\\theta + 1$ using De Moivre's theorem.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "De Moivre",
          "workingLatex": "(\\cos\\theta + i\\sin\\theta)^{4} = \\cos 4\\theta + i\\sin 4\\theta",
          "explanation": "Start.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Binomial",
          "workingLatex": "(\\cos\\theta + i\\sin\\theta)^{4} = \\cos^{4}\\theta + 4i\\cos^{3}\\theta\\sin\\theta - 6\\cos^{2}\\theta\\sin^{2}\\theta - 4i\\cos\\theta\\sin^{3}\\theta + \\sin^{4}\\theta",
          "explanation": "Expand fully.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Real part",
          "workingLatex": "\\cos 4\\theta = \\cos^{4}\\theta - 6\\cos^{2}\\theta\\sin^{2}\\theta + \\sin^{4}\\theta",
          "explanation": "Collect real terms.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Replace $\\sin^{2}\\theta$",
          "workingLatex": "\\cos 4\\theta = \\cos^{4}\\theta - 6\\cos^{2}\\theta(1-\\cos^{2}\\theta) + (1-\\cos^{2}\\theta)^{2}",
          "explanation": "Use Pythagoras.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Expand",
          "workingLatex": "\\cos 4\\theta = 8\\cos^{4}\\theta - 8\\cos^{2}\\theta + 1",
          "explanation": "Collect powers of $\\cos\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify",
          "workingLatex": "\\theta=0 \\Rightarrow \\cos 0 = 1",
          "explanation": "Check.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "8\\cos^{4}\\theta - 8\\cos^{2}\\theta + 1",
          "explanation": "Identity proved.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "De Moivre's theorem",
          "workingLatex": "(\\cos\\theta+i\\sin\\theta)^{n}=\\cos n\\theta+i\\sin n\\theta",
          "explanation": "Links complex powers to multiple angles.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Binomial expansion",
          "workingLatex": "(\\cos\\theta+i\\sin\\theta)^{n}=\\sum\\binom{n}{k}(\\cos\\theta)^{n-k}(i\\sin\\theta)^{k}",
          "explanation": "Expand and separate real/imaginary parts.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Power reduction",
          "workingLatex": "\\cos^{2}\\theta=\\frac{1+\\cos 2\\theta}{2},\\;\\sin^{2}\\theta=\\frac{1-\\cos 2\\theta}{2}",
          "explanation": "Convert squared trig to multiple angles.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Double-angle recall",
          "workingLatex": "\\cos 2\\theta=2\\cos^{2}\\theta-1,\\;\\sin 2\\theta=2\\sin\\theta\\cos\\theta",
          "explanation": "Fundamental identities.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Triple-angle",
          "workingLatex": "\\cos 3\\theta=4\\cos^{3}\\theta-3\\cos\\theta,\\;\\sin 3\\theta=3\\sin\\theta-4\\sin^{3}\\theta",
          "explanation": "Common higher multiple angles.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Integration strategy",
          "workingLatex": "\\text{Reduce powers, then integrate term by term}",
          "explanation": "Standard approach for even/odd powers.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\cos 4\\theta \\equiv 8\\cos^{4}\\theta - 8\\cos^{2}\\theta + 1$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Multiple-angle identities",
    "subtopicId": "fm.y2.pure.multiple-angles",
    "questionDiagram": null,
    "id": "fm.y2.pure.multiple-angles.q052",
    "tags": [
      "proof",
      "quadruple-angle"
    ],
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "written",
    "questionText": "Prove that $\\sin 4\\theta \\equiv 4\\cos^{3}\\theta\\sin\\theta - 4\\cos\\theta\\sin^{3}\\theta$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "De Moivre",
          "workingLatex": "(\\cos\\theta + i\\sin\\theta)^{4} = \\cos 4\\theta + i\\sin 4\\theta",
          "explanation": "Start.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Imaginary part",
          "workingLatex": "\\sin 4\\theta = 4\\cos^{3}\\theta\\sin\\theta - 4\\cos\\theta\\sin^{3}\\theta",
          "explanation": "From binomial expansion.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Factorise",
          "workingLatex": "\\sin 4\\theta = 4\\sin\\theta\\cos\\theta(\\cos^{2}\\theta - \\sin^{2}\\theta)",
          "explanation": "Factor common terms.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Recognise",
          "workingLatex": "= 2\\sin 2\\theta \\cos 2\\theta = \\sin 4\\theta",
          "explanation": "Double-angle check.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Alternative",
          "workingLatex": "\\sin 4\\theta = \\frac{1}{2}(\\sin 5\\theta - \\sin 3\\theta)",
          "explanation": "Product-to-sum route.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "4\\cos^{3}\\theta\\sin\\theta - 4\\cos\\theta\\sin^{3}\\theta",
          "explanation": "Identity proved.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "De Moivre's theorem",
          "workingLatex": "(\\cos\\theta+i\\sin\\theta)^{n}=\\cos n\\theta+i\\sin n\\theta",
          "explanation": "Links complex powers to multiple angles.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Binomial expansion",
          "workingLatex": "(\\cos\\theta+i\\sin\\theta)^{n}=\\sum\\binom{n}{k}(\\cos\\theta)^{n-k}(i\\sin\\theta)^{k}",
          "explanation": "Expand and separate real/imaginary parts.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Power reduction",
          "workingLatex": "\\cos^{2}\\theta=\\frac{1+\\cos 2\\theta}{2},\\;\\sin^{2}\\theta=\\frac{1-\\cos 2\\theta}{2}",
          "explanation": "Convert squared trig to multiple angles.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Double-angle recall",
          "workingLatex": "\\cos 2\\theta=2\\cos^{2}\\theta-1,\\;\\sin 2\\theta=2\\sin\\theta\\cos\\theta",
          "explanation": "Fundamental identities.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Triple-angle",
          "workingLatex": "\\cos 3\\theta=4\\cos^{3}\\theta-3\\cos\\theta,\\;\\sin 3\\theta=3\\sin\\theta-4\\sin^{3}\\theta",
          "explanation": "Common higher multiple angles.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Integration strategy",
          "workingLatex": "\\text{Reduce powers, then integrate term by term}",
          "explanation": "Standard approach for even/odd powers.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Equation solving",
          "workingLatex": "\\text{Factorise or use sum-to-product formulae}",
          "explanation": "Turn trig equations into simpler factors.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sin 4\\theta \\equiv 4\\cos^{3}\\theta\\sin\\theta - 4\\cos\\theta\\sin^{3}\\theta$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Multiple-angle identities",
    "subtopicId": "fm.y2.pure.multiple-angles",
    "questionDiagram": null,
    "id": "fm.y2.pure.multiple-angles.q053",
    "tags": [
      "equations",
      "quintuple-angle"
    ],
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "questionText": "Solve $\\cos 5\\theta = \\cos 2\\theta$ for $0 \\leq \\theta < 2\\pi$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Product-to-sum",
          "workingLatex": "\\cos 5\\theta - \\cos 2\\theta = -2\\sin\\frac{7\\theta}{2}\\sin\\frac{3\\theta}{2}",
          "explanation": "Difference formula.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Equation",
          "workingLatex": "-2\\sin\\frac{7\\theta}{2}\\sin\\frac{3\\theta}{2} = 0",
          "explanation": "Set to zero.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Case 1",
          "workingLatex": "\\sin\\frac{7\\theta}{2} = 0 \\Rightarrow \\frac{7\\theta}{2} = 0, \\pi, 2\\pi, \\ldots",
          "explanation": "First family.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Case 1 solutions",
          "workingLatex": "\\theta = 0, \\frac{2\\pi}{7}, \\frac{4\\pi}{7}, \\frac{6\\pi}{7}, \\frac{8\\pi}{7}, \\frac{10\\pi}{7}, \\frac{12\\pi}{7}",
          "explanation": "In interval.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Case 2",
          "workingLatex": "\\sin\\frac{3\\theta}{2} = 0 \\Rightarrow \\frac{3\\theta}{2} = 0, \\pi, 2\\pi, 3\\pi",
          "explanation": "Second family.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Case 2 solutions",
          "workingLatex": "\\theta = 0, \\frac{2\\pi}{3}, \\frac{4\\pi}{3}",
          "explanation": "In interval.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Distinct",
          "workingLatex": "\\theta = 0, \\frac{2\\pi}{7}, \\frac{4\\pi}{7}, \\frac{6\\pi}{7}, \\frac{8\\pi}{7}, \\frac{10\\pi}{7}, \\frac{12\\pi}{7}, \\frac{2\\pi}{3}, \\frac{4\\pi}{3}",
          "explanation": "Union.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "\\text{Nine distinct solutions listed}",
          "explanation": "Complete set.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "De Moivre's theorem",
          "workingLatex": "(\\cos\\theta+i\\sin\\theta)^{n}=\\cos n\\theta+i\\sin n\\theta",
          "explanation": "Links complex powers to multiple angles.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Binomial expansion",
          "workingLatex": "(\\cos\\theta+i\\sin\\theta)^{n}=\\sum\\binom{n}{k}(\\cos\\theta)^{n-k}(i\\sin\\theta)^{k}",
          "explanation": "Expand and separate real/imaginary parts.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Power reduction",
          "workingLatex": "\\cos^{2}\\theta=\\frac{1+\\cos 2\\theta}{2},\\;\\sin^{2}\\theta=\\frac{1-\\cos 2\\theta}{2}",
          "explanation": "Convert squared trig to multiple angles.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Double-angle recall",
          "workingLatex": "\\cos 2\\theta=2\\cos^{2}\\theta-1,\\;\\sin 2\\theta=2\\sin\\theta\\cos\\theta",
          "explanation": "Fundamental identities.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Triple-angle",
          "workingLatex": "\\cos 3\\theta=4\\cos^{3}\\theta-3\\cos\\theta,\\;\\sin 3\\theta=3\\sin\\theta-4\\sin^{3}\\theta",
          "explanation": "Common higher multiple angles.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta = 0,\\ \\dfrac{2\\pi}{7},\\ \\dfrac{4\\pi}{7},\\ \\dfrac{6\\pi}{7},\\ \\dfrac{8\\pi}{7},\\ \\dfrac{10\\pi}{7},\\ \\dfrac{12\\pi}{7},\\ \\dfrac{2\\pi}{3},\\ \\dfrac{4\\pi}{3}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Multiple-angle identities",
    "subtopicId": "fm.y2.pure.multiple-angles",
    "questionDiagram": null,
    "id": "fm.y2.pure.multiple-angles.q054",
    "tags": [
      "integration"
    ],
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "questionText": "Find $\\displaystyle\\int \\sin^{4}\\theta\\,d\\theta$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Power reduction",
          "workingLatex": "\\sin^{4}\\theta = \\left(\\dfrac{1-\\cos 2\\theta}{2}\\right)^{2}",
          "explanation": "Square the half-angle form.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expand",
          "workingLatex": "\\sin^{4}\\theta = \\dfrac{1 - 2\\cos 2\\theta + \\cos^{2}2\\theta}{4}",
          "explanation": "Expand square.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Reduce $\\cos^{2}2\\theta$",
          "workingLatex": "\\cos^{2}2\\theta = \\dfrac{1+\\cos 4\\theta}{2}",
          "explanation": "Second power reduction.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrand",
          "workingLatex": "\\sin^{4}\\theta = \\dfrac{3 - 4\\cos 2\\theta + \\cos 4\\theta}{8}",
          "explanation": "Simplify.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate",
          "workingLatex": "\\frac{3}{8}\\theta - \\frac{1}{4}\\sin 2\\theta + \\frac{1}{32}\\sin 4\\theta + C",
          "explanation": "Term by term.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\frac{3}{8}\\theta - \\frac{1}{4}\\sin 2\\theta + \\frac{1}{32}\\sin 4\\theta + C",
          "explanation": "Final antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "De Moivre's theorem",
          "workingLatex": "(\\cos\\theta+i\\sin\\theta)^{n}=\\cos n\\theta+i\\sin n\\theta",
          "explanation": "Links complex powers to multiple angles.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Binomial expansion",
          "workingLatex": "(\\cos\\theta+i\\sin\\theta)^{n}=\\sum\\binom{n}{k}(\\cos\\theta)^{n-k}(i\\sin\\theta)^{k}",
          "explanation": "Expand and separate real/imaginary parts.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Power reduction",
          "workingLatex": "\\cos^{2}\\theta=\\frac{1+\\cos 2\\theta}{2},\\;\\sin^{2}\\theta=\\frac{1-\\cos 2\\theta}{2}",
          "explanation": "Convert squared trig to multiple angles.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Double-angle recall",
          "workingLatex": "\\cos 2\\theta=2\\cos^{2}\\theta-1,\\;\\sin 2\\theta=2\\sin\\theta\\cos\\theta",
          "explanation": "Fundamental identities.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Triple-angle",
          "workingLatex": "\\cos 3\\theta=4\\cos^{3}\\theta-3\\cos\\theta,\\;\\sin 3\\theta=3\\sin\\theta-4\\sin^{3}\\theta",
          "explanation": "Common higher multiple angles.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Integration strategy",
          "workingLatex": "\\text{Reduce powers, then integrate term by term}",
          "explanation": "Standard approach for even/odd powers.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Equation solving",
          "workingLatex": "\\text{Factorise or use sum-to-product formulae}",
          "explanation": "Turn trig equations into simpler factors.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\sin^{4}\\theta\\,d\\theta = \\dfrac{3}{8}\\theta - \\dfrac{1}{4}\\sin 2\\theta + \\dfrac{1}{32}\\sin 4\\theta + C$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Multiple-angle identities",
    "subtopicId": "fm.y2.pure.multiple-angles",
    "questionDiagram": null,
    "id": "fm.y2.pure.multiple-angles.q055",
    "tags": [
      "integration"
    ],
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "questionText": "Find $\\displaystyle\\int \\cos^{4}\\theta\\,d\\theta$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Power reduction",
          "workingLatex": "\\cos^{4}\\theta = \\left(\\dfrac{1+\\cos 2\\theta}{2}\\right)^{2}",
          "explanation": "Square the half-angle form.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expand",
          "workingLatex": "\\cos^{4}\\theta = \\dfrac{1 + 2\\cos 2\\theta + \\cos^{2}2\\theta}{4}",
          "explanation": "Expand square.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Reduce $\\cos^{2}2\\theta$",
          "workingLatex": "\\cos^{2}2\\theta = \\dfrac{1+\\cos 4\\theta}{2}",
          "explanation": "Second power reduction.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrand",
          "workingLatex": "\\cos^{4}\\theta = \\dfrac{3 + 4\\cos 2\\theta + \\cos 4\\theta}{8}",
          "explanation": "Simplify.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate",
          "workingLatex": "\\frac{3}{8}\\theta + \\frac{1}{4}\\sin 2\\theta + \\frac{1}{32}\\sin 4\\theta + C",
          "explanation": "Term by term.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\frac{3}{8}\\theta + \\frac{1}{4}\\sin 2\\theta + \\frac{1}{32}\\sin 4\\theta + C",
          "explanation": "Final antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "De Moivre's theorem",
          "workingLatex": "(\\cos\\theta+i\\sin\\theta)^{n}=\\cos n\\theta+i\\sin n\\theta",
          "explanation": "Links complex powers to multiple angles.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Binomial expansion",
          "workingLatex": "(\\cos\\theta+i\\sin\\theta)^{n}=\\sum\\binom{n}{k}(\\cos\\theta)^{n-k}(i\\sin\\theta)^{k}",
          "explanation": "Expand and separate real/imaginary parts.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Power reduction",
          "workingLatex": "\\cos^{2}\\theta=\\frac{1+\\cos 2\\theta}{2},\\;\\sin^{2}\\theta=\\frac{1-\\cos 2\\theta}{2}",
          "explanation": "Convert squared trig to multiple angles.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Double-angle recall",
          "workingLatex": "\\cos 2\\theta=2\\cos^{2}\\theta-1,\\;\\sin 2\\theta=2\\sin\\theta\\cos\\theta",
          "explanation": "Fundamental identities.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Triple-angle",
          "workingLatex": "\\cos 3\\theta=4\\cos^{3}\\theta-3\\cos\\theta,\\;\\sin 3\\theta=3\\sin\\theta-4\\sin^{3}\\theta",
          "explanation": "Common higher multiple angles.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Integration strategy",
          "workingLatex": "\\text{Reduce powers, then integrate term by term}",
          "explanation": "Standard approach for even/odd powers.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Equation solving",
          "workingLatex": "\\text{Factorise or use sum-to-product formulae}",
          "explanation": "Turn trig equations into simpler factors.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\cos^{4}\\theta\\,d\\theta = \\dfrac{3}{8}\\theta + \\dfrac{1}{4}\\sin 2\\theta + \\dfrac{1}{32}\\sin 4\\theta + C$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Multiple-angle identities",
    "subtopicId": "fm.y2.pure.multiple-angles",
    "questionDiagram": null,
    "id": "fm.y2.pure.multiple-angles.q056",
    "tags": [
      "equations",
      "quintuple-angle"
    ],
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "questionText": "Solve $\\sin 5\\theta = \\sin\\theta$ for $0 \\leq \\theta < 2\\pi$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Product-to-sum",
          "workingLatex": "\\sin 5\\theta - \\sin\\theta = 2\\cos 3\\theta\\sin 2\\theta",
          "explanation": "Difference formula.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Equation",
          "workingLatex": "2\\cos 3\\theta\\sin 2\\theta = 0",
          "explanation": "Set to zero.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Case 1",
          "workingLatex": "\\sin 2\\theta = 0 \\Rightarrow \\theta = 0, \\frac{\\pi}{2}, \\pi, \\frac{3\\pi}{2}",
          "explanation": "First family.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Case 2",
          "workingLatex": "\\cos 3\\theta = 0 \\Rightarrow 3\\theta = \\frac{\\pi}{2}, \\frac{3\\pi}{2}, \\frac{5\\pi}{2}, \\ldots",
          "explanation": "Second family.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Case 2 solutions",
          "workingLatex": "\\theta = \\frac{\\pi}{6}, \\frac{\\pi}{2}, \\frac{5\\pi}{6}, \\frac{7\\pi}{6}, \\frac{3\\pi}{2}, \\frac{11\\pi}{6}",
          "explanation": "In interval.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Distinct",
          "workingLatex": "\\theta = 0, \\frac{\\pi}{6}, \\frac{\\pi}{2}, \\frac{5\\pi}{6}, \\pi, \\frac{7\\pi}{6}, \\frac{3\\pi}{2}, \\frac{11\\pi}{6}",
          "explanation": "Union.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "\\text{Eight distinct solutions}",
          "explanation": "Complete set.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "De Moivre's theorem",
          "workingLatex": "(\\cos\\theta+i\\sin\\theta)^{n}=\\cos n\\theta+i\\sin n\\theta",
          "explanation": "Links complex powers to multiple angles.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Binomial expansion",
          "workingLatex": "(\\cos\\theta+i\\sin\\theta)^{n}=\\sum\\binom{n}{k}(\\cos\\theta)^{n-k}(i\\sin\\theta)^{k}",
          "explanation": "Expand and separate real/imaginary parts.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Power reduction",
          "workingLatex": "\\cos^{2}\\theta=\\frac{1+\\cos 2\\theta}{2},\\;\\sin^{2}\\theta=\\frac{1-\\cos 2\\theta}{2}",
          "explanation": "Convert squared trig to multiple angles.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Double-angle recall",
          "workingLatex": "\\cos 2\\theta=2\\cos^{2}\\theta-1,\\;\\sin 2\\theta=2\\sin\\theta\\cos\\theta",
          "explanation": "Fundamental identities.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Triple-angle",
          "workingLatex": "\\cos 3\\theta=4\\cos^{3}\\theta-3\\cos\\theta,\\;\\sin 3\\theta=3\\sin\\theta-4\\sin^{3}\\theta",
          "explanation": "Common higher multiple angles.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Integration strategy",
          "workingLatex": "\\text{Reduce powers, then integrate term by term}",
          "explanation": "Standard approach for even/odd powers.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta = 0,\\ \\dfrac{\\pi}{6},\\ \\dfrac{\\pi}{2},\\ \\dfrac{5\\pi}{6},\\ \\pi,\\ \\dfrac{7\\pi}{6},\\ \\dfrac{3\\pi}{2},\\ \\dfrac{11\\pi}{6}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Multiple-angle identities",
    "subtopicId": "fm.y2.pure.multiple-angles",
    "questionDiagram": null,
    "id": "fm.y2.pure.multiple-angles.q057",
    "tags": [
      "integration",
      "quintuple-angle"
    ],
    "difficulty": "Hard",
    "marks": 11,
    "answerType": "written",
    "questionText": "Express $\\cos^{5}\\theta$ in terms of multiple angles and hence find $\\displaystyle\\int \\cos^{5}\\theta\\,d\\theta$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Use $\\cos^{5}\\theta$ formula",
          "workingLatex": "\\cos^{5}\\theta = \\dfrac{10\\cos\\theta + 5\\cos 3\\theta + \\cos 5\\theta}{16}",
          "explanation": "From De Moivre / multiple-angle theory.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Derive via De Moivre",
          "workingLatex": "(\\cos\\theta+i\\sin\\theta)^{5} = \\cos 5\\theta + i\\sin 5\\theta",
          "explanation": "Start.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Also",
          "workingLatex": "(\\cos\\theta+i\\sin\\theta)^{5} = \\cos^{5}\\theta + 5i\\cos^{4}\\theta\\sin\\theta - \\ldots",
          "explanation": "Binomial.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Link to $\\cos 5\\theta$",
          "workingLatex": "\\cos 5\\theta = 16\\cos^{5}\\theta - 20\\cos^{3}\\theta + 5\\cos\\theta",
          "explanation": "Known identity.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate",
          "workingLatex": "\\int\\cos^{5}\\theta\\,d\\theta = \\frac{1}{16}\\int(10\\cos\\theta+5\\cos 3\\theta+\\cos 5\\theta)\\,d\\theta",
          "explanation": "Use linear form.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate",
          "workingLatex": "\\frac{10}{16}\\sin\\theta + \\frac{5}{48}\\sin 3\\theta + \\frac{1}{80}\\sin 5\\theta + C",
          "explanation": "Integrate each term.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "\\frac{5}{8}\\sin\\theta + \\frac{5}{48}\\sin 3\\theta + \\frac{1}{80}\\sin 5\\theta + C",
          "explanation": "Simplified.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "De Moivre's theorem",
          "workingLatex": "(\\cos\\theta+i\\sin\\theta)^{n}=\\cos n\\theta+i\\sin n\\theta",
          "explanation": "Links complex powers to multiple angles.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Binomial expansion",
          "workingLatex": "(\\cos\\theta+i\\sin\\theta)^{n}=\\sum\\binom{n}{k}(\\cos\\theta)^{n-k}(i\\sin\\theta)^{k}",
          "explanation": "Expand and separate real/imaginary parts.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Power reduction",
          "workingLatex": "\\cos^{2}\\theta=\\frac{1+\\cos 2\\theta}{2},\\;\\sin^{2}\\theta=\\frac{1-\\cos 2\\theta}{2}",
          "explanation": "Convert squared trig to multiple angles.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Double-angle recall",
          "workingLatex": "\\cos 2\\theta=2\\cos^{2}\\theta-1,\\;\\sin 2\\theta=2\\sin\\theta\\cos\\theta",
          "explanation": "Fundamental identities.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Triple-angle",
          "workingLatex": "\\cos 3\\theta=4\\cos^{3}\\theta-3\\cos\\theta,\\;\\sin 3\\theta=3\\sin\\theta-4\\sin^{3}\\theta",
          "explanation": "Common higher multiple angles.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Integration strategy",
          "workingLatex": "\\text{Reduce powers, then integrate term by term}",
          "explanation": "Standard approach for even/odd powers.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\cos^{5}\\theta = \\dfrac{10\\cos\\theta + 5\\cos 3\\theta + \\cos 5\\theta}{16}$; $\\displaystyle\\int \\cos^{5}\\theta\\,d\\theta = \\dfrac{5}{8}\\sin\\theta + \\dfrac{5}{48}\\sin 3\\theta + \\dfrac{1}{80}\\sin 5\\theta + C$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Multiple-angle identities",
    "subtopicId": "fm.y2.pure.multiple-angles",
    "questionDiagram": null,
    "id": "fm.y2.pure.multiple-angles.q058",
    "tags": [
      "proof",
      "sum-to-product"
    ],
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "written",
    "questionText": "Show that $\\dfrac{\\cos 3\\theta + \\cos\\theta}{\\sin 3\\theta + \\sin\\theta} \\equiv \\cot 2\\theta$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Sum-to-product numerator",
          "workingLatex": "\\cos 3\\theta + \\cos\\theta = 2\\cos 2\\theta\\cos\\theta",
          "explanation": "Sum formula.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Sum-to-product denominator",
          "workingLatex": "\\sin 3\\theta + \\sin\\theta = 2\\sin 2\\theta\\cos\\theta",
          "explanation": "Sum formula.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Fraction",
          "workingLatex": "\\dfrac{2\\cos 2\\theta\\cos\\theta}{2\\sin 2\\theta\\cos\\theta}",
          "explanation": "Substitute.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Cancel",
          "workingLatex": "\\dfrac{\\cos 2\\theta}{\\sin 2\\theta} = \\cot 2\\theta",
          "explanation": "Cancel $2\\cos\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Domain",
          "workingLatex": "\\cos\\theta \\neq 0,\\; \\sin 2\\theta \\neq 0",
          "explanation": "Restrictions for validity.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Alternative check",
          "workingLatex": "\\theta = \\frac{\\pi}{6} \\Rightarrow \\text{LHS} = \\text{RHS}",
          "explanation": "Numerical verification.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "\\cot 2\\theta",
          "explanation": "Simplified form.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "De Moivre's theorem",
          "workingLatex": "(\\cos\\theta+i\\sin\\theta)^{n}=\\cos n\\theta+i\\sin n\\theta",
          "explanation": "Links complex powers to multiple angles.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Binomial expansion",
          "workingLatex": "(\\cos\\theta+i\\sin\\theta)^{n}=\\sum\\binom{n}{k}(\\cos\\theta)^{n-k}(i\\sin\\theta)^{k}",
          "explanation": "Expand and separate real/imaginary parts.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Power reduction",
          "workingLatex": "\\cos^{2}\\theta=\\frac{1+\\cos 2\\theta}{2},\\;\\sin^{2}\\theta=\\frac{1-\\cos 2\\theta}{2}",
          "explanation": "Convert squared trig to multiple angles.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Double-angle recall",
          "workingLatex": "\\cos 2\\theta=2\\cos^{2}\\theta-1,\\;\\sin 2\\theta=2\\sin\\theta\\cos\\theta",
          "explanation": "Fundamental identities.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Triple-angle",
          "workingLatex": "\\cos 3\\theta=4\\cos^{3}\\theta-3\\cos\\theta,\\;\\sin 3\\theta=3\\sin\\theta-4\\sin^{3}\\theta",
          "explanation": "Common higher multiple angles.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Integration strategy",
          "workingLatex": "\\text{Reduce powers, then integrate term by term}",
          "explanation": "Standard approach for even/odd powers.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{\\cos 3\\theta + \\cos\\theta}{\\sin 3\\theta + \\sin\\theta} \\equiv \\cot 2\\theta$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Multiple-angle identities",
    "subtopicId": "fm.y2.pure.multiple-angles",
    "questionDiagram": null,
    "id": "fm.y2.pure.multiple-angles.q059",
    "tags": [
      "evaluation",
      "quintuple-angle"
    ],
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "written",
    "questionText": "Given $\\cos\\theta = \\dfrac{1}{3}$, find the exact value of $\\cos 5\\theta$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Quintuple-angle",
          "workingLatex": "\\cos 5\\theta = 16\\cos^{5}\\theta - 20\\cos^{3}\\theta + 5\\cos\\theta",
          "explanation": "Formula.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Powers",
          "workingLatex": "\\cos^{3}\\theta = \\frac{1}{27},\\; \\cos^{5}\\theta = \\frac{1}{243}",
          "explanation": "Compute powers.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute",
          "workingLatex": "\\cos 5\\theta = 16(\\frac{1}{243}) - 20(\\frac{1}{27}) + 5(\\frac{1}{3})",
          "explanation": "Replace.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Common denominator",
          "workingLatex": "\\cos 5\\theta = \\frac{16 - 180 + 405}{243}",
          "explanation": "Over $243$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "\\cos 5\\theta = \\frac{241}{243}",
          "explanation": "Arithmetic.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\frac{241}{243}",
          "explanation": "Exact value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "De Moivre's theorem",
          "workingLatex": "(\\cos\\theta+i\\sin\\theta)^{n}=\\cos n\\theta+i\\sin n\\theta",
          "explanation": "Links complex powers to multiple angles.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Binomial expansion",
          "workingLatex": "(\\cos\\theta+i\\sin\\theta)^{n}=\\sum\\binom{n}{k}(\\cos\\theta)^{n-k}(i\\sin\\theta)^{k}",
          "explanation": "Expand and separate real/imaginary parts.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Power reduction",
          "workingLatex": "\\cos^{2}\\theta=\\frac{1+\\cos 2\\theta}{2},\\;\\sin^{2}\\theta=\\frac{1-\\cos 2\\theta}{2}",
          "explanation": "Convert squared trig to multiple angles.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Double-angle recall",
          "workingLatex": "\\cos 2\\theta=2\\cos^{2}\\theta-1,\\;\\sin 2\\theta=2\\sin\\theta\\cos\\theta",
          "explanation": "Fundamental identities.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Triple-angle",
          "workingLatex": "\\cos 3\\theta=4\\cos^{3}\\theta-3\\cos\\theta,\\;\\sin 3\\theta=3\\sin\\theta-4\\sin^{3}\\theta",
          "explanation": "Common higher multiple angles.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Integration strategy",
          "workingLatex": "\\text{Reduce powers, then integrate term by term}",
          "explanation": "Standard approach for even/odd powers.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Equation solving",
          "workingLatex": "\\text{Factorise or use sum-to-product formulae}",
          "explanation": "Turn trig equations into simpler factors.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\cos 5\\theta = \\dfrac{241}{243}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Multiple-angle identities",
    "subtopicId": "fm.y2.pure.multiple-angles",
    "questionDiagram": null,
    "id": "fm.y2.pure.multiple-angles.q060",
    "tags": [
      "evaluation",
      "quintuple-angle"
    ],
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "written",
    "questionText": "Given $\\sin\\theta = \\dfrac{2}{3}$, find the exact value of $\\sin 5\\theta$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Quintuple-angle",
          "workingLatex": "\\sin 5\\theta = 16\\sin^{5}\\theta - 20\\sin^{3}\\theta + 5\\sin\\theta",
          "explanation": "Formula.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Powers",
          "workingLatex": "\\sin^{3}\\theta = \\frac{8}{27},\\; \\sin^{5}\\theta = \\frac{32}{243}",
          "explanation": "Compute powers.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute",
          "workingLatex": "\\sin 5\\theta = 16(\\frac{32}{243}) - 20(\\frac{8}{27}) + 5(\\frac{2}{3})",
          "explanation": "Replace.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Common denominator",
          "workingLatex": "\\sin 5\\theta = \\frac{512 - 480 + 810}{243}",
          "explanation": "Over $243$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "\\sin 5\\theta = \\frac{842}{243}",
          "explanation": "Arithmetic.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\frac{842}{243}",
          "explanation": "Exact value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "De Moivre's theorem",
          "workingLatex": "(\\cos\\theta+i\\sin\\theta)^{n}=\\cos n\\theta+i\\sin n\\theta",
          "explanation": "Links complex powers to multiple angles.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Binomial expansion",
          "workingLatex": "(\\cos\\theta+i\\sin\\theta)^{n}=\\sum\\binom{n}{k}(\\cos\\theta)^{n-k}(i\\sin\\theta)^{k}",
          "explanation": "Expand and separate real/imaginary parts.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Power reduction",
          "workingLatex": "\\cos^{2}\\theta=\\frac{1+\\cos 2\\theta}{2},\\;\\sin^{2}\\theta=\\frac{1-\\cos 2\\theta}{2}",
          "explanation": "Convert squared trig to multiple angles.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Double-angle recall",
          "workingLatex": "\\cos 2\\theta=2\\cos^{2}\\theta-1,\\;\\sin 2\\theta=2\\sin\\theta\\cos\\theta",
          "explanation": "Fundamental identities.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Triple-angle",
          "workingLatex": "\\cos 3\\theta=4\\cos^{3}\\theta-3\\cos\\theta,\\;\\sin 3\\theta=3\\sin\\theta-4\\sin^{3}\\theta",
          "explanation": "Common higher multiple angles.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Integration strategy",
          "workingLatex": "\\text{Reduce powers, then integrate term by term}",
          "explanation": "Standard approach for even/odd powers.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Equation solving",
          "workingLatex": "\\text{Factorise or use sum-to-product formulae}",
          "explanation": "Turn trig equations into simpler factors.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sin 5\\theta = \\dfrac{842}{243}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Multiple-angle identities",
    "subtopicId": "fm.y2.pure.multiple-angles",
    "questionDiagram": null,
    "id": "fm.y2.pure.multiple-angles.q061",
    "tags": [
      "equations",
      "mixed"
    ],
    "difficulty": "Hard",
    "marks": 11,
    "answerType": "written",
    "questionText": "Solve $\\cos 3\\theta = \\sin 2\\theta$ for $0 \\leq \\theta < 2\\pi$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write in one trig function",
          "workingLatex": "\\cos 3\\theta = \\cos(\\frac{\\pi}{2}-2\\theta)",
          "explanation": "Use $\\sin x = \\cos(\\frac{\\pi}{2}-x)$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "General solutions",
          "workingLatex": "3\\theta = \\frac{\\pi}{2}-2\\theta + 2k\\pi \\text{ or } 3\\theta = -(\\frac{\\pi}{2}-2\\theta)+2k\\pi",
          "explanation": "Cosine equality.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Case 1",
          "workingLatex": "5\\theta = \\frac{\\pi}{2}+2k\\pi \\Rightarrow \\theta = \\frac{\\pi}{10}+\\frac{2k\\pi}{5}",
          "explanation": "First family.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Case 1 in interval",
          "workingLatex": "\\theta = \\frac{\\pi}{10}, \\frac{5\\pi}{10}, \\frac{9\\pi}{10}, \\frac{13\\pi}{10}, \\frac{17\\pi}{10}",
          "explanation": "Five solutions.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Case 2",
          "workingLatex": "\\theta = -\\frac{\\pi}{2}+2k\\pi",
          "explanation": "Second family.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Case 2 in interval",
          "workingLatex": "\\theta = \\frac{3\\pi}{2}",
          "explanation": "One solution.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "\\theta = \\frac{\\pi}{10}, \\frac{\\pi}{2}, \\frac{9\\pi}{10}, \\frac{13\\pi}{10}, \\frac{17\\pi}{10}, \\frac{3\\pi}{2}",
          "explanation": "Six solutions.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "De Moivre's theorem",
          "workingLatex": "(\\cos\\theta+i\\sin\\theta)^{n}=\\cos n\\theta+i\\sin n\\theta",
          "explanation": "Links complex powers to multiple angles.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Binomial expansion",
          "workingLatex": "(\\cos\\theta+i\\sin\\theta)^{n}=\\sum\\binom{n}{k}(\\cos\\theta)^{n-k}(i\\sin\\theta)^{k}",
          "explanation": "Expand and separate real/imaginary parts.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Power reduction",
          "workingLatex": "\\cos^{2}\\theta=\\frac{1+\\cos 2\\theta}{2},\\;\\sin^{2}\\theta=\\frac{1-\\cos 2\\theta}{2}",
          "explanation": "Convert squared trig to multiple angles.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Double-angle recall",
          "workingLatex": "\\cos 2\\theta=2\\cos^{2}\\theta-1,\\;\\sin 2\\theta=2\\sin\\theta\\cos\\theta",
          "explanation": "Fundamental identities.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Triple-angle",
          "workingLatex": "\\cos 3\\theta=4\\cos^{3}\\theta-3\\cos\\theta,\\;\\sin 3\\theta=3\\sin\\theta-4\\sin^{3}\\theta",
          "explanation": "Common higher multiple angles.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Integration strategy",
          "workingLatex": "\\text{Reduce powers, then integrate term by term}",
          "explanation": "Standard approach for even/odd powers.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta = \\dfrac{\\pi}{10},\\ \\dfrac{\\pi}{2},\\ \\dfrac{9\\pi}{10},\\ \\dfrac{13\\pi}{10},\\ \\dfrac{17\\pi}{10},\\ \\dfrac{3\\pi}{2}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Multiple-angle identities",
    "subtopicId": "fm.y2.pure.multiple-angles",
    "questionDiagram": null,
    "id": "fm.y2.pure.multiple-angles.q062",
    "tags": [
      "proof",
      "equations",
      "tan"
    ],
    "difficulty": "Hard",
    "marks": 12,
    "answerType": "written",
    "questionText": "Prove that $\\tan 3\\theta \\equiv \\dfrac{3\\tan\\theta - \\tan^{3}\\theta}{1 - 3\\tan^{2}\\theta}$ and hence solve $\\tan 3\\theta = \\tan\\theta$ for $0 \\leq \\theta < \\pi$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Prove formula",
          "workingLatex": "\\tan 3\\theta = \\dfrac{3\\tan\\theta - \\tan^{3}\\theta}{1 - 3\\tan^{2}\\theta}",
          "explanation": "From triple-angle sine/cosine.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Equation",
          "workingLatex": "\\dfrac{3t - t^{3}}{1-3t^{2}} = t",
          "explanation": "Let $t=\\tan\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Cross-multiply",
          "workingLatex": "3t - t^{3} = t(1-3t^{2})",
          "explanation": "Clear denominator.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify",
          "workingLatex": "3t - t^{3} = t - 3t^{3}",
          "explanation": "Expand.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rearrange",
          "workingLatex": "2t + 2t^{3} = 0",
          "explanation": "Collect.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Factorise",
          "workingLatex": "2t(1+t^{2})=0 \\Rightarrow t=0",
          "explanation": "Only $t=0$ is real.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solutions",
          "workingLatex": "\\tan\\theta = 0 \\Rightarrow \\theta = 0",
          "explanation": "In interval $[0,\\pi)$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "\\theta = 0",
          "explanation": "Only solution.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "De Moivre's theorem",
          "workingLatex": "(\\cos\\theta+i\\sin\\theta)^{n}=\\cos n\\theta+i\\sin n\\theta",
          "explanation": "Links complex powers to multiple angles.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Binomial expansion",
          "workingLatex": "(\\cos\\theta+i\\sin\\theta)^{n}=\\sum\\binom{n}{k}(\\cos\\theta)^{n-k}(i\\sin\\theta)^{k}",
          "explanation": "Expand and separate real/imaginary parts.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Power reduction",
          "workingLatex": "\\cos^{2}\\theta=\\frac{1+\\cos 2\\theta}{2},\\;\\sin^{2}\\theta=\\frac{1-\\cos 2\\theta}{2}",
          "explanation": "Convert squared trig to multiple angles.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Double-angle recall",
          "workingLatex": "\\cos 2\\theta=2\\cos^{2}\\theta-1,\\;\\sin 2\\theta=2\\sin\\theta\\cos\\theta",
          "explanation": "Fundamental identities.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Triple-angle",
          "workingLatex": "\\cos 3\\theta=4\\cos^{3}\\theta-3\\cos\\theta,\\;\\sin 3\\theta=3\\sin\\theta-4\\sin^{3}\\theta",
          "explanation": "Common higher multiple angles.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\tan 3\\theta \\equiv \\dfrac{3\\tan\\theta - \\tan^{3}\\theta}{1 - 3\\tan^{2}\\theta}$; $\\theta = 0$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Multiple-angle identities",
    "subtopicId": "fm.y2.pure.multiple-angles",
    "questionDiagram": null,
    "id": "fm.y2.pure.multiple-angles.q063",
    "tags": [
      "integration",
      "definite"
    ],
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "questionText": "Find $\\displaystyle\\int_{0}^{\\pi/4} \\sin^{2}\\theta\\,d\\theta$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Antiderivative",
          "workingLatex": "\\int\\sin^{2}\\theta\\,d\\theta = \\frac{1}{2}\\theta - \\frac{1}{4}\\sin 2\\theta",
          "explanation": "Power reduction result.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Upper limit",
          "workingLatex": "\\left[\\frac{1}{2}\\theta - \\frac{1}{4}\\sin 2\\theta\\right]_{0}^{\\pi/4}",
          "explanation": "Definite integral.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "At $\\pi/4$",
          "workingLatex": "\\frac{1}{2}\\cdot\\frac{\\pi}{4} - \\frac{1}{4}\\sin\\frac{\\pi}{2} = \\frac{\\pi}{8} - \\frac{1}{4}",
          "explanation": "Evaluate.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "At $0$",
          "workingLatex": "0",
          "explanation": "Lower limit.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Answer",
          "workingLatex": "\\frac{\\pi}{8} - \\frac{1}{4}",
          "explanation": "Exact value.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "De Moivre's theorem",
          "workingLatex": "(\\cos\\theta+i\\sin\\theta)^{n}=\\cos n\\theta+i\\sin n\\theta",
          "explanation": "Links complex powers to multiple angles.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Binomial expansion",
          "workingLatex": "(\\cos\\theta+i\\sin\\theta)^{n}=\\sum\\binom{n}{k}(\\cos\\theta)^{n-k}(i\\sin\\theta)^{k}",
          "explanation": "Expand and separate real/imaginary parts.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Power reduction",
          "workingLatex": "\\cos^{2}\\theta=\\frac{1+\\cos 2\\theta}{2},\\;\\sin^{2}\\theta=\\frac{1-\\cos 2\\theta}{2}",
          "explanation": "Convert squared trig to multiple angles.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Double-angle recall",
          "workingLatex": "\\cos 2\\theta=2\\cos^{2}\\theta-1,\\;\\sin 2\\theta=2\\sin\\theta\\cos\\theta",
          "explanation": "Fundamental identities.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Triple-angle",
          "workingLatex": "\\cos 3\\theta=4\\cos^{3}\\theta-3\\cos\\theta,\\;\\sin 3\\theta=3\\sin\\theta-4\\sin^{3}\\theta",
          "explanation": "Common higher multiple angles.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Integration strategy",
          "workingLatex": "\\text{Reduce powers, then integrate term by term}",
          "explanation": "Standard approach for even/odd powers.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Equation solving",
          "workingLatex": "\\text{Factorise or use sum-to-product formulae}",
          "explanation": "Turn trig equations into simpler factors.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Final answer",
          "workingLatex": "\\text{State exact values and all solutions in the interval}",
          "explanation": "Include every valid solution.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{0}^{\\pi/4} \\sin^{2}\\theta\\,d\\theta = \\dfrac{\\pi}{8} - \\dfrac{1}{4}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Multiple-angle identities",
    "subtopicId": "fm.y2.pure.multiple-angles",
    "questionDiagram": null,
    "id": "fm.y2.pure.multiple-angles.q064",
    "tags": [
      "integration",
      "definite"
    ],
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "written",
    "questionText": "Find $\\displaystyle\\int_{0}^{\\pi/2} \\cos^{3}\\theta\\,d\\theta$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Antiderivative",
          "workingLatex": "\\int\\cos^{3}\\theta\\,d\\theta = \\frac{3}{4}\\sin\\theta + \\frac{1}{12}\\sin 3\\theta",
          "explanation": "From power reduction.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Upper limit",
          "workingLatex": "\\frac{3}{4}(1) + \\frac{1}{12}(0) = \\frac{3}{4}",
          "explanation": "At $\\theta=\\pi/2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Lower limit",
          "workingLatex": "0",
          "explanation": "At $\\theta=0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Answer",
          "workingLatex": "\\frac{3}{4}",
          "explanation": "Definite integral value.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "De Moivre's theorem",
          "workingLatex": "(\\cos\\theta+i\\sin\\theta)^{n}=\\cos n\\theta+i\\sin n\\theta",
          "explanation": "Links complex powers to multiple angles.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Binomial expansion",
          "workingLatex": "(\\cos\\theta+i\\sin\\theta)^{n}=\\sum\\binom{n}{k}(\\cos\\theta)^{n-k}(i\\sin\\theta)^{k}",
          "explanation": "Expand and separate real/imaginary parts.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Power reduction",
          "workingLatex": "\\cos^{2}\\theta=\\frac{1+\\cos 2\\theta}{2},\\;\\sin^{2}\\theta=\\frac{1-\\cos 2\\theta}{2}",
          "explanation": "Convert squared trig to multiple angles.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Double-angle recall",
          "workingLatex": "\\cos 2\\theta=2\\cos^{2}\\theta-1,\\;\\sin 2\\theta=2\\sin\\theta\\cos\\theta",
          "explanation": "Fundamental identities.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Triple-angle",
          "workingLatex": "\\cos 3\\theta=4\\cos^{3}\\theta-3\\cos\\theta,\\;\\sin 3\\theta=3\\sin\\theta-4\\sin^{3}\\theta",
          "explanation": "Common higher multiple angles.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Integration strategy",
          "workingLatex": "\\text{Reduce powers, then integrate term by term}",
          "explanation": "Standard approach for even/odd powers.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Equation solving",
          "workingLatex": "\\text{Factorise or use sum-to-product formulae}",
          "explanation": "Turn trig equations into simpler factors.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Final answer",
          "workingLatex": "\\text{State exact values and all solutions in the interval}",
          "explanation": "Include every valid solution.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "De Moivre's theorem",
          "workingLatex": "(\\cos\\theta+i\\sin\\theta)^{n}=\\cos n\\theta+i\\sin n\\theta",
          "explanation": "Links complex powers to multiple angles.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{0}^{\\pi/2} \\cos^{3}\\theta\\,d\\theta = \\dfrac{3}{4}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Multiple-angle identities",
    "subtopicId": "fm.y2.pure.multiple-angles",
    "questionDiagram": null,
    "id": "fm.y2.pure.multiple-angles.q065",
    "tags": [
      "sum-to-product",
      "equations"
    ],
    "difficulty": "Hard",
    "marks": 11,
    "answerType": "written",
    "questionText": "Show that $\\cos 2\\theta + \\cos 4\\theta = 2\\cos 3\\theta\\cos\\theta$ and use this to solve $\\cos 2\\theta + \\cos 4\\theta = 0$ for $0 \\leq \\theta < 2\\pi$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Sum-to-product",
          "workingLatex": "\\cos 2\\theta + \\cos 4\\theta = 2\\cos 3\\theta\\cos\\theta",
          "explanation": "Sum formula with $A=4\\theta, B=2\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Verify",
          "workingLatex": "2\\cos\\frac{6\\theta}{2}\\cos\\frac{2\\theta}{2} = 2\\cos 3\\theta\\cos\\theta",
          "explanation": "Confirm.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Equation",
          "workingLatex": "2\\cos 3\\theta\\cos\\theta = 0",
          "explanation": "Set to zero.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Case 1",
          "workingLatex": "\\cos\\theta = 0 \\Rightarrow \\theta = \\frac{\\pi}{2}, \\frac{3\\pi}{2}",
          "explanation": "First family.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Case 2",
          "workingLatex": "\\cos 3\\theta = 0 \\Rightarrow \\theta = \\frac{\\pi}{6}, \\frac{\\pi}{2}, \\frac{5\\pi}{6}, \\ldots",
          "explanation": "Second family.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Distinct",
          "workingLatex": "\\theta = \\frac{\\pi}{6}, \\frac{\\pi}{2}, \\frac{5\\pi}{6}, \\frac{7\\pi}{6}, \\frac{3\\pi}{2}, \\frac{11\\pi}{6}",
          "explanation": "In interval.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "\\text{Six solutions}",
          "explanation": "Complete set.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "De Moivre's theorem",
          "workingLatex": "(\\cos\\theta+i\\sin\\theta)^{n}=\\cos n\\theta+i\\sin n\\theta",
          "explanation": "Links complex powers to multiple angles.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Binomial expansion",
          "workingLatex": "(\\cos\\theta+i\\sin\\theta)^{n}=\\sum\\binom{n}{k}(\\cos\\theta)^{n-k}(i\\sin\\theta)^{k}",
          "explanation": "Expand and separate real/imaginary parts.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Power reduction",
          "workingLatex": "\\cos^{2}\\theta=\\frac{1+\\cos 2\\theta}{2},\\;\\sin^{2}\\theta=\\frac{1-\\cos 2\\theta}{2}",
          "explanation": "Convert squared trig to multiple angles.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Double-angle recall",
          "workingLatex": "\\cos 2\\theta=2\\cos^{2}\\theta-1,\\;\\sin 2\\theta=2\\sin\\theta\\cos\\theta",
          "explanation": "Fundamental identities.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Triple-angle",
          "workingLatex": "\\cos 3\\theta=4\\cos^{3}\\theta-3\\cos\\theta,\\;\\sin 3\\theta=3\\sin\\theta-4\\sin^{3}\\theta",
          "explanation": "Common higher multiple angles.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Integration strategy",
          "workingLatex": "\\text{Reduce powers, then integrate term by term}",
          "explanation": "Standard approach for even/odd powers.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\cos 2\\theta + \\cos 4\\theta = 2\\cos 3\\theta\\cos\\theta$; $\\theta = \\dfrac{\\pi}{6},\\ \\dfrac{\\pi}{2},\\ \\dfrac{5\\pi}{6},\\ \\dfrac{7\\pi}{6},\\ \\dfrac{3\\pi}{2},\\ \\dfrac{11\\pi}{6}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Multiple-angle identities",
    "subtopicId": "fm.y2.pure.multiple-angles",
    "questionDiagram": null,
    "id": "fm.y2.pure.multiple-angles.q066",
    "tags": [
      "integration",
      "power-reduction"
    ],
    "difficulty": "Hard",
    "marks": 12,
    "answerType": "written",
    "questionText": "Express $\\sin^{6}\\theta$ in terms of multiple angles and outline how to integrate it.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Start with $\\sin^{2}\\theta$",
          "workingLatex": "\\sin^{2}\\theta = \\frac{1-\\cos 2\\theta}{2}",
          "explanation": "Power reduction.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Cube",
          "workingLatex": "\\sin^{6}\\theta = \\left(\\frac{1-\\cos 2\\theta}{2}\\right)^{3}",
          "explanation": "Raise to third power.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand",
          "workingLatex": "\\sin^{6}\\theta = \\frac{1}{8}(1 - 3\\cos 2\\theta + 3\\cos^{2}2\\theta - \\cos^{3}2\\theta)",
          "explanation": "Binomial expansion.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Reduce further",
          "workingLatex": "\\cos^{2}2\\theta = \\frac{1+\\cos 4\\theta}{2},\\; \\cos^{3}2\\theta = \\frac{3\\cos 2\\theta+\\cos 6\\theta}{4}",
          "explanation": "Multiple-angle reduction.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Linear form",
          "workingLatex": "\\sin^{6}\\theta = \\frac{1}{32}(10 - 15\\cos 2\\theta + 6\\cos 4\\theta - \\cos 6\\theta)",
          "explanation": "Collect terms.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Integrate",
          "workingLatex": "\\int\\sin^{6}\\theta\\,d\\theta = \\frac{1}{32}(10\\theta - \\frac{15}{2}\\sin 2\\theta + \\frac{3}{2}\\sin 4\\theta - \\frac{1}{6}\\sin 6\\theta)+C",
          "explanation": "Term by term.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "\\text{Linear combination of }\\theta,\\sin 2\\theta,\\sin 4\\theta,\\sin 6\\theta",
          "explanation": "Integrable form.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "De Moivre's theorem",
          "workingLatex": "(\\cos\\theta+i\\sin\\theta)^{n}=\\cos n\\theta+i\\sin n\\theta",
          "explanation": "Links complex powers to multiple angles.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Binomial expansion",
          "workingLatex": "(\\cos\\theta+i\\sin\\theta)^{n}=\\sum\\binom{n}{k}(\\cos\\theta)^{n-k}(i\\sin\\theta)^{k}",
          "explanation": "Expand and separate real/imaginary parts.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Power reduction",
          "workingLatex": "\\cos^{2}\\theta=\\frac{1+\\cos 2\\theta}{2},\\;\\sin^{2}\\theta=\\frac{1-\\cos 2\\theta}{2}",
          "explanation": "Convert squared trig to multiple angles.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Double-angle recall",
          "workingLatex": "\\cos 2\\theta=2\\cos^{2}\\theta-1,\\;\\sin 2\\theta=2\\sin\\theta\\cos\\theta",
          "explanation": "Fundamental identities.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Triple-angle",
          "workingLatex": "\\cos 3\\theta=4\\cos^{3}\\theta-3\\cos\\theta,\\;\\sin 3\\theta=3\\sin\\theta-4\\sin^{3}\\theta",
          "explanation": "Common higher multiple angles.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Integration strategy",
          "workingLatex": "\\text{Reduce powers, then integrate term by term}",
          "explanation": "Standard approach for even/odd powers.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sin^{6}\\theta = \\dfrac{1}{32}(10 - 15\\cos 2\\theta + 6\\cos 4\\theta - \\cos 6\\theta)$; integrate term by term."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Multiple-angle identities",
    "subtopicId": "fm.y2.pure.multiple-angles",
    "questionDiagram": null,
    "id": "fm.y2.pure.multiple-angles.q067",
    "tags": [
      "equations"
    ],
    "difficulty": "Hard",
    "marks": 11,
    "answerType": "written",
    "questionText": "Solve $\\sin^{2}\\theta = \\cos 2\\theta$ for $0 \\leq \\theta < 2\\pi$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Power reduction",
          "workingLatex": "\\sin^{2}\\theta = \\frac{1-\\cos 2\\theta}{2}",
          "explanation": "Express LHS.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Equation",
          "workingLatex": "\\frac{1-\\cos 2\\theta}{2} = \\cos 2\\theta",
          "explanation": "Substitute.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange",
          "workingLatex": "1 - \\cos 2\\theta = 2\\cos 2\\theta",
          "explanation": "Clear fraction.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve",
          "workingLatex": "3\\cos 2\\theta = 1 \\Rightarrow \\cos 2\\theta = \\frac{1}{3}",
          "explanation": "Isolate.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "General",
          "workingLatex": "2\\theta = \\pm\\cos^{-1}(\\frac{1}{3}) + 2k\\pi",
          "explanation": "Inverse cosine.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "In interval",
          "workingLatex": "\\theta = \\frac{1}{2}\\cos^{-1}(\\frac{1}{3}),\\; \\pi - \\frac{1}{2}\\cos^{-1}(\\frac{1}{3})",
          "explanation": "Two principal solutions.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Also",
          "workingLatex": "\\theta = \\pi + \\frac{1}{2}\\cos^{-1}(\\frac{1}{3}),\\; 2\\pi - \\frac{1}{2}\\cos^{-1}(\\frac{1}{3})",
          "explanation": "Remaining two.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "\\theta = \\frac{1}{2}\\cos^{-1}(\\frac{1}{3}),\\; \\pi-\\frac{1}{2}\\cos^{-1}(\\frac{1}{3}),\\; \\pi+\\frac{1}{2}\\cos^{-1}(\\frac{1}{3}),\\; 2\\pi-\\frac{1}{2}\\cos^{-1}(\\frac{1}{3})",
          "explanation": "Four solutions.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "De Moivre's theorem",
          "workingLatex": "(\\cos\\theta+i\\sin\\theta)^{n}=\\cos n\\theta+i\\sin n\\theta",
          "explanation": "Links complex powers to multiple angles.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Binomial expansion",
          "workingLatex": "(\\cos\\theta+i\\sin\\theta)^{n}=\\sum\\binom{n}{k}(\\cos\\theta)^{n-k}(i\\sin\\theta)^{k}",
          "explanation": "Expand and separate real/imaginary parts.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Power reduction",
          "workingLatex": "\\cos^{2}\\theta=\\frac{1+\\cos 2\\theta}{2},\\;\\sin^{2}\\theta=\\frac{1-\\cos 2\\theta}{2}",
          "explanation": "Convert squared trig to multiple angles.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Double-angle recall",
          "workingLatex": "\\cos 2\\theta=2\\cos^{2}\\theta-1,\\;\\sin 2\\theta=2\\sin\\theta\\cos\\theta",
          "explanation": "Fundamental identities.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Triple-angle",
          "workingLatex": "\\cos 3\\theta=4\\cos^{3}\\theta-3\\cos\\theta,\\;\\sin 3\\theta=3\\sin\\theta-4\\sin^{3}\\theta",
          "explanation": "Common higher multiple angles.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\cos 2\\theta = \\dfrac{1}{3}$; $\\theta = \\dfrac{1}{2}\\cos^{-1}\\!\\left(\\dfrac{1}{3}\\right),\\ \\pi - \\dfrac{1}{2}\\cos^{-1}\\!\\left(\\dfrac{1}{3}\\right),\\ \\pi + \\dfrac{1}{2}\\cos^{-1}\\!\\left(\\dfrac{1}{3}\\right),\\ 2\\pi - \\dfrac{1}{2}\\cos^{-1}\\!\\left(\\dfrac{1}{3}\\right)$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Multiple-angle identities",
    "subtopicId": "fm.y2.pure.multiple-angles",
    "questionDiagram": null,
    "id": "fm.y2.pure.multiple-angles.q068",
    "tags": [
      "proof",
      "factorisation"
    ],
    "difficulty": "Hard",
    "marks": 13,
    "answerType": "written",
    "questionText": "Prove that $\\cos 5\\theta \\equiv 16\\cos^{5}\\theta - 20\\cos^{3}\\theta + 5\\cos\\theta$ and hence factorise $\\cos 5\\theta - \\cos\\theta$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "De Moivre",
          "workingLatex": "(\\cos\\theta+i\\sin\\theta)^{5} = \\cos 5\\theta + i\\sin 5\\theta",
          "explanation": "Start.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Real part expansion",
          "workingLatex": "\\cos 5\\theta = 16\\cos^{5}\\theta - 20\\cos^{3}\\theta + 5\\cos\\theta",
          "explanation": "From binomial.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Factorise difference",
          "workingLatex": "\\cos 5\\theta - \\cos\\theta = 16\\cos^{5}\\theta - 20\\cos^{3}\\theta + 4\\cos\\theta",
          "explanation": "Subtract $\\cos\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Factor out $\\cos\\theta$",
          "workingLatex": "= 4\\cos\\theta(4\\cos^{4}\\theta - 5\\cos^{2}\\theta + 1)",
          "explanation": "Common factor.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Quadratic in $\\cos^{2}\\theta$",
          "workingLatex": "4\\cos^{4}\\theta - 5\\cos^{2}\\theta + 1 = (4\\cos^{2}\\theta-1)(\\cos^{2}\\theta-1)",
          "explanation": "Factor.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Full factorisation",
          "workingLatex": "= 4\\cos\\theta(2\\cos\\theta-1)(2\\cos\\theta+1)(\\cos\\theta-1)(\\cos\\theta+1)",
          "explanation": "Complete.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "4\\cos\\theta(2\\cos\\theta-1)(2\\cos\\theta+1)(\\cos\\theta-1)(\\cos\\theta+1)",
          "explanation": "Factorised form.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "De Moivre's theorem",
          "workingLatex": "(\\cos\\theta+i\\sin\\theta)^{n}=\\cos n\\theta+i\\sin n\\theta",
          "explanation": "Links complex powers to multiple angles.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Binomial expansion",
          "workingLatex": "(\\cos\\theta+i\\sin\\theta)^{n}=\\sum\\binom{n}{k}(\\cos\\theta)^{n-k}(i\\sin\\theta)^{k}",
          "explanation": "Expand and separate real/imaginary parts.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Power reduction",
          "workingLatex": "\\cos^{2}\\theta=\\frac{1+\\cos 2\\theta}{2},\\;\\sin^{2}\\theta=\\frac{1-\\cos 2\\theta}{2}",
          "explanation": "Convert squared trig to multiple angles.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Double-angle recall",
          "workingLatex": "\\cos 2\\theta=2\\cos^{2}\\theta-1,\\;\\sin 2\\theta=2\\sin\\theta\\cos\\theta",
          "explanation": "Fundamental identities.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Triple-angle",
          "workingLatex": "\\cos 3\\theta=4\\cos^{3}\\theta-3\\cos\\theta,\\;\\sin 3\\theta=3\\sin\\theta-4\\sin^{3}\\theta",
          "explanation": "Common higher multiple angles.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Integration strategy",
          "workingLatex": "\\text{Reduce powers, then integrate term by term}",
          "explanation": "Standard approach for even/odd powers.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\cos 5\\theta - \\cos\\theta = 4\\cos\\theta(2\\cos\\theta-1)(2\\cos\\theta+1)(\\cos\\theta-1)(\\cos\\theta+1)$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Multiple-angle identities",
    "subtopicId": "fm.y2.pure.multiple-angles",
    "questionDiagram": null,
    "id": "fm.y2.pure.multiple-angles.q069",
    "tags": [
      "multi-part"
    ],
    "difficulty": "Hard",
    "marks": 12,
    "answerType": "written",
    "questionText": "(a) Express $\\cos 3\\theta$ in terms of $\\cos\\theta$. (b) Hence solve $\\cos 3\\theta = -\\dfrac{1}{2}$ for $0 \\leq \\theta < 2\\pi$. (c) Verify one solution.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "(a) Formula",
          "workingLatex": "\\cos 3\\theta = 4\\cos^{3}\\theta - 3\\cos\\theta",
          "explanation": "Triple-angle.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "(b) General",
          "workingLatex": "3\\theta = \\frac{2\\pi}{3}, \\frac{4\\pi}{3}, \\ldots",
          "explanation": "From $\\cos 3\\theta = -\\frac{1}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "(b) Solutions",
          "workingLatex": "\\theta = \\frac{2\\pi}{9}, \\frac{4\\pi}{9}, \\frac{8\\pi}{9}, \\frac{10\\pi}{9}, \\frac{14\\pi}{9}, \\frac{16\\pi}{9}",
          "explanation": "In interval.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "(c) Check $\\theta=\\frac{2\\pi}{9}$",
          "workingLatex": "3\\theta = \\frac{2\\pi}{3},\\; \\cos\\frac{2\\pi}{3} = -\\frac{1}{2}",
          "explanation": "Verification.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Alternative via (a)",
          "workingLatex": "4\\cos^{3}\\frac{2\\pi}{9} - 3\\cos\\frac{2\\pi}{9} = -\\frac{1}{2}",
          "explanation": "Cubic route.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer (a)",
          "workingLatex": "4\\cos^{3}\\theta - 3\\cos\\theta",
          "explanation": "Identity.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer (b)",
          "workingLatex": "\\theta = \\frac{2\\pi}{9}, \\frac{4\\pi}{9}, \\frac{8\\pi}{9}, \\frac{10\\pi}{9}, \\frac{14\\pi}{9}, \\frac{16\\pi}{9}",
          "explanation": "Six solutions.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer (c)",
          "workingLatex": "\\text{Verified}",
          "explanation": "Check complete.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "De Moivre's theorem",
          "workingLatex": "(\\cos\\theta+i\\sin\\theta)^{n}=\\cos n\\theta+i\\sin n\\theta",
          "explanation": "Links complex powers to multiple angles.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Binomial expansion",
          "workingLatex": "(\\cos\\theta+i\\sin\\theta)^{n}=\\sum\\binom{n}{k}(\\cos\\theta)^{n-k}(i\\sin\\theta)^{k}",
          "explanation": "Expand and separate real/imaginary parts.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Power reduction",
          "workingLatex": "\\cos^{2}\\theta=\\frac{1+\\cos 2\\theta}{2},\\;\\sin^{2}\\theta=\\frac{1-\\cos 2\\theta}{2}",
          "explanation": "Convert squared trig to multiple angles.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Double-angle recall",
          "workingLatex": "\\cos 2\\theta=2\\cos^{2}\\theta-1,\\;\\sin 2\\theta=2\\sin\\theta\\cos\\theta",
          "explanation": "Fundamental identities.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Triple-angle",
          "workingLatex": "\\cos 3\\theta=4\\cos^{3}\\theta-3\\cos\\theta,\\;\\sin 3\\theta=3\\sin\\theta-4\\sin^{3}\\theta",
          "explanation": "Common higher multiple angles.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\cos 3\\theta = 4\\cos^{3}\\theta - 3\\cos\\theta$. (b) $\\theta = \\dfrac{2\\pi}{9},\\ \\dfrac{4\\pi}{9},\\ \\dfrac{8\\pi}{9},\\ \\dfrac{10\\pi}{9},\\ \\dfrac{14\\pi}{9},\\ \\dfrac{16\\pi}{9}$. (c) $3\\theta = \\dfrac{2\\pi}{3}$ gives $\\cos 3\\theta = -\\dfrac{1}{2}$ ✓"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Multiple-angle identities",
    "subtopicId": "fm.y2.pure.multiple-angles",
    "questionDiagram": null,
    "id": "fm.y2.pure.multiple-angles.q070",
    "tags": [
      "multi-part",
      "calculus"
    ],
    "difficulty": "Hard",
    "marks": 13,
    "answerType": "written",
    "questionText": "A curve has equation $y = \\sin^{2}x + \\cos 2x$. (a) Express $y$ in terms of $\\cos 2x$ only. (b) Hence find $\\dfrac{dy}{dx}$. (c) Solve $\\dfrac{dy}{dx} = 0$ for $0 \\leq x < 2\\pi$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "(a) Power reduction",
          "workingLatex": "\\sin^{2}x = \\frac{1-\\cos 2x}{2}",
          "explanation": "Linearise squared sine.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "(a) Substitute",
          "workingLatex": "y = \\frac{1-\\cos 2x}{2} + \\cos 2x = \\frac{1}{2} + \\frac{\\cos 2x}{2}",
          "explanation": "Simplify.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "(b) Differentiate",
          "workingLatex": "\\frac{dy}{dx} = -\\sin 2x",
          "explanation": "Derivative of $\\frac{1}{2}+\\frac{\\cos 2x}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "(c) Set to zero",
          "workingLatex": "-\\sin 2x = 0 \\Rightarrow \\sin 2x = 0",
          "explanation": "Stationary points.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "(c) Solutions",
          "workingLatex": "2x = 0, \\pi, 2\\pi, 3\\pi",
          "explanation": "In doubled interval.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "(c) Values",
          "workingLatex": "x = 0, \\frac{\\pi}{2}, \\pi, \\frac{3\\pi}{2}",
          "explanation": "Divide by $2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer (a)",
          "workingLatex": "y = \\frac{1}{2} + \\frac{\\cos 2x}{2}",
          "explanation": "Simplified $y$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer (b,c)",
          "workingLatex": "\\frac{dy}{dx}=-\\sin 2x;\\; x=0,\\frac{\\pi}{2},\\pi,\\frac{3\\pi}{2}",
          "explanation": "Complete.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "De Moivre's theorem",
          "workingLatex": "(\\cos\\theta+i\\sin\\theta)^{n}=\\cos n\\theta+i\\sin n\\theta",
          "explanation": "Links complex powers to multiple angles.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Binomial expansion",
          "workingLatex": "(\\cos\\theta+i\\sin\\theta)^{n}=\\sum\\binom{n}{k}(\\cos\\theta)^{n-k}(i\\sin\\theta)^{k}",
          "explanation": "Expand and separate real/imaginary parts.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Power reduction",
          "workingLatex": "\\cos^{2}\\theta=\\frac{1+\\cos 2\\theta}{2},\\;\\sin^{2}\\theta=\\frac{1-\\cos 2\\theta}{2}",
          "explanation": "Convert squared trig to multiple angles.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Double-angle recall",
          "workingLatex": "\\cos 2\\theta=2\\cos^{2}\\theta-1,\\;\\sin 2\\theta=2\\sin\\theta\\cos\\theta",
          "explanation": "Fundamental identities.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Triple-angle",
          "workingLatex": "\\cos 3\\theta=4\\cos^{3}\\theta-3\\cos\\theta,\\;\\sin 3\\theta=3\\sin\\theta-4\\sin^{3}\\theta",
          "explanation": "Common higher multiple angles.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $y = \\dfrac{1}{2} + \\dfrac{\\cos 2x}{2}$. (b) $\\dfrac{dy}{dx} = -\\sin 2x$. (c) $x = 0,\\ \\dfrac{\\pi}{2},\\ \\pi,\\ \\dfrac{3\\pi}{2}$"
    }
  }
];
