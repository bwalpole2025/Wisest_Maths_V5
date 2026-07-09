import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Series: method of differences",
    "subtopicId": "fm.y2.pure.method-of-differences",
    "questionDiagram": null,
    "id": "fm.y2.pure.method-of-differences.q001",
    "tags": [
      "telescoping",
      "partial-fractions"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Find the exact value of $\\displaystyle\\sum_{r=1}^{5} \\frac{1}{r(r+1)}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Partial fractions",
          "workingLatex": "\\frac{1}{r(r+1)} = \\frac{1}{r} - \\frac{1}{r+1}",
          "explanation": "Decompose into a difference of two simpler fractions.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the sum",
          "workingLatex": "\\sum_{r=1}^{5} \\frac{1}{r(r+1)} = \\sum_{r=1}^{5} \\left(\\frac{1}{r} - \\frac{1}{r+1}\\right)",
          "explanation": "Each term is a difference.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand",
          "workingLatex": "= \\left(1 - \\frac{1}{2}\\right) + \\left(\\frac{1}{2} - \\frac{1}{3}\\right) + \\cdots + \\left(\\frac{1}{5} - \\frac{1}{6}\\right)",
          "explanation": "Write out successive terms.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Telescope",
          "workingLatex": "\\text{Intermediate terms cancel in pairs}",
          "explanation": "This is the method of differences.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Survivors",
          "workingLatex": "= 1 - \\frac{1}{6}",
          "explanation": "Only the first and last terms remain.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify",
          "workingLatex": "= \\frac{5}{6}",
          "explanation": "Combine over a common denominator.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify $n=1$",
          "workingLatex": "\\frac{1}{2} = \\frac{1}{2}",
          "explanation": "Check a small case.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "\\frac{5}{6}",
          "explanation": "Final value.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{5}{6}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Series: method of differences",
    "subtopicId": "fm.y2.pure.method-of-differences",
    "questionDiagram": null,
    "id": "fm.y2.pure.method-of-differences.q002",
    "tags": [
      "telescoping",
      "partial-fractions"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Find the exact value of $\\displaystyle\\sum_{r=1}^{10} \\frac{1}{r(r+1)}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Partial fractions",
          "workingLatex": "\\frac{1}{r(r+1)} = \\frac{1}{r} - \\frac{1}{r+1}",
          "explanation": "Decompose into a difference of two simpler fractions.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the sum",
          "workingLatex": "\\sum_{r=1}^{10} \\frac{1}{r(r+1)} = \\sum_{r=1}^{10} \\left(\\frac{1}{r} - \\frac{1}{r+1}\\right)",
          "explanation": "Each term is a difference.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand",
          "workingLatex": "= \\left(1 - \\frac{1}{2}\\right) + \\left(\\frac{1}{2} - \\frac{1}{3}\\right) + \\cdots + \\left(\\frac{1}{10} - \\frac{1}{11}\\right)",
          "explanation": "Write out successive terms.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Telescope",
          "workingLatex": "\\text{Intermediate terms cancel in pairs}",
          "explanation": "This is the method of differences.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Survivors",
          "workingLatex": "= 1 - \\frac{1}{11}",
          "explanation": "Only the first and last terms remain.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify",
          "workingLatex": "= \\frac{10}{11}",
          "explanation": "Combine over a common denominator.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify $n=1$",
          "workingLatex": "\\frac{1}{2} = \\frac{1}{2}",
          "explanation": "Check a small case.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "\\frac{10}{11}",
          "explanation": "Final value.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{10}{11}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Series: method of differences",
    "subtopicId": "fm.y2.pure.method-of-differences",
    "questionDiagram": null,
    "id": "fm.y2.pure.method-of-differences.q003",
    "tags": [
      "telescoping",
      "partial-fractions"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Find the exact value of $\\displaystyle\\sum_{r=1}^{20} \\frac{1}{r(r+1)}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Partial fractions",
          "workingLatex": "\\frac{1}{r(r+1)} = \\frac{1}{r} - \\frac{1}{r+1}",
          "explanation": "Decompose into a difference of two simpler fractions.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the sum",
          "workingLatex": "\\sum_{r=1}^{20} \\frac{1}{r(r+1)} = \\sum_{r=1}^{20} \\left(\\frac{1}{r} - \\frac{1}{r+1}\\right)",
          "explanation": "Each term is a difference.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand",
          "workingLatex": "= \\left(1 - \\frac{1}{2}\\right) + \\left(\\frac{1}{2} - \\frac{1}{3}\\right) + \\cdots + \\left(\\frac{1}{20} - \\frac{1}{21}\\right)",
          "explanation": "Write out successive terms.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Telescope",
          "workingLatex": "\\text{Intermediate terms cancel in pairs}",
          "explanation": "This is the method of differences.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Survivors",
          "workingLatex": "= 1 - \\frac{1}{21}",
          "explanation": "Only the first and last terms remain.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify",
          "workingLatex": "= \\frac{20}{21}",
          "explanation": "Combine over a common denominator.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify $n=1$",
          "workingLatex": "\\frac{1}{2} = \\frac{1}{2}",
          "explanation": "Check a small case.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "\\frac{20}{21}",
          "explanation": "Final value.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{20}{21}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Series: method of differences",
    "subtopicId": "fm.y2.pure.method-of-differences",
    "questionDiagram": null,
    "id": "fm.y2.pure.method-of-differences.q004",
    "tags": [
      "telescoping",
      "partial-fractions"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Find the exact value of $\\displaystyle\\sum_{r=1}^{3} \\frac{1}{r(r+1)}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Partial fractions",
          "workingLatex": "\\frac{1}{r(r+1)} = \\frac{1}{r} - \\frac{1}{r+1}",
          "explanation": "Decompose into a difference of two simpler fractions.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the sum",
          "workingLatex": "\\sum_{r=1}^{3} \\frac{1}{r(r+1)} = \\sum_{r=1}^{3} \\left(\\frac{1}{r} - \\frac{1}{r+1}\\right)",
          "explanation": "Each term is a difference.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand",
          "workingLatex": "= \\left(1 - \\frac{1}{2}\\right) + \\left(\\frac{1}{2} - \\frac{1}{3}\\right) + \\cdots + \\left(\\frac{1}{3} - \\frac{1}{4}\\right)",
          "explanation": "Write out successive terms.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Telescope",
          "workingLatex": "\\text{Intermediate terms cancel in pairs}",
          "explanation": "This is the method of differences.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Survivors",
          "workingLatex": "= 1 - \\frac{1}{4}",
          "explanation": "Only the first and last terms remain.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify",
          "workingLatex": "= \\frac{3}{4}",
          "explanation": "Combine over a common denominator.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify $n=1$",
          "workingLatex": "\\frac{1}{2} = \\frac{1}{2}",
          "explanation": "Check a small case.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "\\frac{3}{4}",
          "explanation": "Final value.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{3}{4}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Series: method of differences",
    "subtopicId": "fm.y2.pure.method-of-differences",
    "questionDiagram": null,
    "id": "fm.y2.pure.method-of-differences.q005",
    "tags": [
      "telescoping",
      "partial-fractions"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Find the exact value of $\\displaystyle\\sum_{r=1}^{7} \\frac{1}{r(r+1)}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Partial fractions",
          "workingLatex": "\\frac{1}{r(r+1)} = \\frac{1}{r} - \\frac{1}{r+1}",
          "explanation": "Decompose into a difference of two simpler fractions.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the sum",
          "workingLatex": "\\sum_{r=1}^{7} \\frac{1}{r(r+1)} = \\sum_{r=1}^{7} \\left(\\frac{1}{r} - \\frac{1}{r+1}\\right)",
          "explanation": "Each term is a difference.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand",
          "workingLatex": "= \\left(1 - \\frac{1}{2}\\right) + \\left(\\frac{1}{2} - \\frac{1}{3}\\right) + \\cdots + \\left(\\frac{1}{7} - \\frac{1}{8}\\right)",
          "explanation": "Write out successive terms.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Telescope",
          "workingLatex": "\\text{Intermediate terms cancel in pairs}",
          "explanation": "This is the method of differences.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Survivors",
          "workingLatex": "= 1 - \\frac{1}{8}",
          "explanation": "Only the first and last terms remain.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify",
          "workingLatex": "= \\frac{7}{8}",
          "explanation": "Combine over a common denominator.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify $n=1$",
          "workingLatex": "\\frac{1}{2} = \\frac{1}{2}",
          "explanation": "Check a small case.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "\\frac{7}{8}",
          "explanation": "Final value.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{7}{8}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Series: method of differences",
    "subtopicId": "fm.y2.pure.method-of-differences",
    "questionDiagram": null,
    "id": "fm.y2.pure.method-of-differences.q006",
    "tags": [
      "telescoping",
      "partial-fractions"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Find the exact value of $\\displaystyle\\sum_{r=1}^{12} \\frac{1}{r(r+1)}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Partial fractions",
          "workingLatex": "\\frac{1}{r(r+1)} = \\frac{1}{r} - \\frac{1}{r+1}",
          "explanation": "Decompose into a difference of two simpler fractions.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the sum",
          "workingLatex": "\\sum_{r=1}^{12} \\frac{1}{r(r+1)} = \\sum_{r=1}^{12} \\left(\\frac{1}{r} - \\frac{1}{r+1}\\right)",
          "explanation": "Each term is a difference.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand",
          "workingLatex": "= \\left(1 - \\frac{1}{2}\\right) + \\left(\\frac{1}{2} - \\frac{1}{3}\\right) + \\cdots + \\left(\\frac{1}{12} - \\frac{1}{13}\\right)",
          "explanation": "Write out successive terms.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Telescope",
          "workingLatex": "\\text{Intermediate terms cancel in pairs}",
          "explanation": "This is the method of differences.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Survivors",
          "workingLatex": "= 1 - \\frac{1}{13}",
          "explanation": "Only the first and last terms remain.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify",
          "workingLatex": "= \\frac{12}{13}",
          "explanation": "Combine over a common denominator.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify $n=1$",
          "workingLatex": "\\frac{1}{2} = \\frac{1}{2}",
          "explanation": "Check a small case.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "\\frac{12}{13}",
          "explanation": "Final value.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{12}{13}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Series: method of differences",
    "subtopicId": "fm.y2.pure.method-of-differences",
    "questionDiagram": null,
    "id": "fm.y2.pure.method-of-differences.q007",
    "tags": [
      "telescoping",
      "partial-fractions"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Find the exact value of $\\displaystyle\\sum_{r=1}^{15} \\frac{1}{r(r+1)}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Partial fractions",
          "workingLatex": "\\frac{1}{r(r+1)} = \\frac{1}{r} - \\frac{1}{r+1}",
          "explanation": "Decompose into a difference of two simpler fractions.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the sum",
          "workingLatex": "\\sum_{r=1}^{15} \\frac{1}{r(r+1)} = \\sum_{r=1}^{15} \\left(\\frac{1}{r} - \\frac{1}{r+1}\\right)",
          "explanation": "Each term is a difference.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand",
          "workingLatex": "= \\left(1 - \\frac{1}{2}\\right) + \\left(\\frac{1}{2} - \\frac{1}{3}\\right) + \\cdots + \\left(\\frac{1}{15} - \\frac{1}{16}\\right)",
          "explanation": "Write out successive terms.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Telescope",
          "workingLatex": "\\text{Intermediate terms cancel in pairs}",
          "explanation": "This is the method of differences.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Survivors",
          "workingLatex": "= 1 - \\frac{1}{16}",
          "explanation": "Only the first and last terms remain.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify",
          "workingLatex": "= \\frac{15}{16}",
          "explanation": "Combine over a common denominator.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify $n=1$",
          "workingLatex": "\\frac{1}{2} = \\frac{1}{2}",
          "explanation": "Check a small case.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "\\frac{15}{16}",
          "explanation": "Final value.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{15}{16}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Series: method of differences",
    "subtopicId": "fm.y2.pure.method-of-differences",
    "questionDiagram": null,
    "id": "fm.y2.pure.method-of-differences.q008",
    "tags": [
      "telescoping",
      "partial-fractions"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Find the exact value of $\\displaystyle\\sum_{r=1}^{4} \\frac{1}{r(r+1)}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Partial fractions",
          "workingLatex": "\\frac{1}{r(r+1)} = \\frac{1}{r} - \\frac{1}{r+1}",
          "explanation": "Decompose into a difference of two simpler fractions.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the sum",
          "workingLatex": "\\sum_{r=1}^{4} \\frac{1}{r(r+1)} = \\sum_{r=1}^{4} \\left(\\frac{1}{r} - \\frac{1}{r+1}\\right)",
          "explanation": "Each term is a difference.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand",
          "workingLatex": "= \\left(1 - \\frac{1}{2}\\right) + \\left(\\frac{1}{2} - \\frac{1}{3}\\right) + \\cdots + \\left(\\frac{1}{4} - \\frac{1}{5}\\right)",
          "explanation": "Write out successive terms.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Telescope",
          "workingLatex": "\\text{Intermediate terms cancel in pairs}",
          "explanation": "This is the method of differences.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Survivors",
          "workingLatex": "= 1 - \\frac{1}{5}",
          "explanation": "Only the first and last terms remain.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify",
          "workingLatex": "= \\frac{4}{5}",
          "explanation": "Combine over a common denominator.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify $n=1$",
          "workingLatex": "\\frac{1}{2} = \\frac{1}{2}",
          "explanation": "Check a small case.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "\\frac{4}{5}",
          "explanation": "Final value.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{4}{5}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Series: method of differences",
    "subtopicId": "fm.y2.pure.method-of-differences",
    "questionDiagram": null,
    "id": "fm.y2.pure.method-of-differences.q009",
    "tags": [
      "telescoping",
      "partial-fractions"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Find the exact value of $\\displaystyle\\sum_{r=1}^{8} \\frac{1}{r(r+1)}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Partial fractions",
          "workingLatex": "\\frac{1}{r(r+1)} = \\frac{1}{r} - \\frac{1}{r+1}",
          "explanation": "Decompose into a difference of two simpler fractions.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the sum",
          "workingLatex": "\\sum_{r=1}^{8} \\frac{1}{r(r+1)} = \\sum_{r=1}^{8} \\left(\\frac{1}{r} - \\frac{1}{r+1}\\right)",
          "explanation": "Each term is a difference.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand",
          "workingLatex": "= \\left(1 - \\frac{1}{2}\\right) + \\left(\\frac{1}{2} - \\frac{1}{3}\\right) + \\cdots + \\left(\\frac{1}{8} - \\frac{1}{9}\\right)",
          "explanation": "Write out successive terms.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Telescope",
          "workingLatex": "\\text{Intermediate terms cancel in pairs}",
          "explanation": "This is the method of differences.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Survivors",
          "workingLatex": "= 1 - \\frac{1}{9}",
          "explanation": "Only the first and last terms remain.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify",
          "workingLatex": "= \\frac{8}{9}",
          "explanation": "Combine over a common denominator.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify $n=1$",
          "workingLatex": "\\frac{1}{2} = \\frac{1}{2}",
          "explanation": "Check a small case.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "\\frac{8}{9}",
          "explanation": "Final value.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{8}{9}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Series: method of differences",
    "subtopicId": "fm.y2.pure.method-of-differences",
    "questionDiagram": null,
    "id": "fm.y2.pure.method-of-differences.q010",
    "tags": [
      "telescoping",
      "partial-fractions"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Find the exact value of $\\displaystyle\\sum_{r=1}^{6} \\frac{1}{r(r+1)}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Partial fractions",
          "workingLatex": "\\frac{1}{r(r+1)} = \\frac{1}{r} - \\frac{1}{r+1}",
          "explanation": "Decompose into a difference of two simpler fractions.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the sum",
          "workingLatex": "\\sum_{r=1}^{6} \\frac{1}{r(r+1)} = \\sum_{r=1}^{6} \\left(\\frac{1}{r} - \\frac{1}{r+1}\\right)",
          "explanation": "Each term is a difference.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand",
          "workingLatex": "= \\left(1 - \\frac{1}{2}\\right) + \\left(\\frac{1}{2} - \\frac{1}{3}\\right) + \\cdots + \\left(\\frac{1}{6} - \\frac{1}{7}\\right)",
          "explanation": "Write out successive terms.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Telescope",
          "workingLatex": "\\text{Intermediate terms cancel in pairs}",
          "explanation": "This is the method of differences.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Survivors",
          "workingLatex": "= 1 - \\frac{1}{7}",
          "explanation": "Only the first and last terms remain.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify",
          "workingLatex": "= \\frac{6}{7}",
          "explanation": "Combine over a common denominator.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify $n=1$",
          "workingLatex": "\\frac{1}{2} = \\frac{1}{2}",
          "explanation": "Check a small case.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "\\frac{6}{7}",
          "explanation": "Final value.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{6}{7}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Series: method of differences",
    "subtopicId": "fm.y2.pure.method-of-differences",
    "questionDiagram": null,
    "id": "fm.y2.pure.method-of-differences.q011",
    "tags": [
      "telescoping",
      "partial-fractions"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Find the exact value of $\\displaystyle\\sum_{r=1}^{9} \\frac{1}{r(r+1)}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Partial fractions",
          "workingLatex": "\\frac{1}{r(r+1)} = \\frac{1}{r} - \\frac{1}{r+1}",
          "explanation": "Decompose into a difference of two simpler fractions.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the sum",
          "workingLatex": "\\sum_{r=1}^{9} \\frac{1}{r(r+1)} = \\sum_{r=1}^{9} \\left(\\frac{1}{r} - \\frac{1}{r+1}\\right)",
          "explanation": "Each term is a difference.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand",
          "workingLatex": "= \\left(1 - \\frac{1}{2}\\right) + \\left(\\frac{1}{2} - \\frac{1}{3}\\right) + \\cdots + \\left(\\frac{1}{9} - \\frac{1}{10}\\right)",
          "explanation": "Write out successive terms.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Telescope",
          "workingLatex": "\\text{Intermediate terms cancel in pairs}",
          "explanation": "This is the method of differences.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Survivors",
          "workingLatex": "= 1 - \\frac{1}{10}",
          "explanation": "Only the first and last terms remain.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify",
          "workingLatex": "= \\frac{9}{10}",
          "explanation": "Combine over a common denominator.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify $n=1$",
          "workingLatex": "\\frac{1}{2} = \\frac{1}{2}",
          "explanation": "Check a small case.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "\\frac{9}{10}",
          "explanation": "Final value.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{9}{10}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Series: method of differences",
    "subtopicId": "fm.y2.pure.method-of-differences",
    "questionDiagram": null,
    "id": "fm.y2.pure.method-of-differences.q012",
    "tags": [
      "telescoping",
      "partial-fractions"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Find the exact value of $\\displaystyle\\sum_{r=1}^{11} \\frac{1}{r(r+1)}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Partial fractions",
          "workingLatex": "\\frac{1}{r(r+1)} = \\frac{1}{r} - \\frac{1}{r+1}",
          "explanation": "Decompose into a difference of two simpler fractions.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the sum",
          "workingLatex": "\\sum_{r=1}^{11} \\frac{1}{r(r+1)} = \\sum_{r=1}^{11} \\left(\\frac{1}{r} - \\frac{1}{r+1}\\right)",
          "explanation": "Each term is a difference.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand",
          "workingLatex": "= \\left(1 - \\frac{1}{2}\\right) + \\left(\\frac{1}{2} - \\frac{1}{3}\\right) + \\cdots + \\left(\\frac{1}{11} - \\frac{1}{12}\\right)",
          "explanation": "Write out successive terms.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Telescope",
          "workingLatex": "\\text{Intermediate terms cancel in pairs}",
          "explanation": "This is the method of differences.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Survivors",
          "workingLatex": "= 1 - \\frac{1}{12}",
          "explanation": "Only the first and last terms remain.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify",
          "workingLatex": "= \\frac{11}{12}",
          "explanation": "Combine over a common denominator.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify $n=1$",
          "workingLatex": "\\frac{1}{2} = \\frac{1}{2}",
          "explanation": "Check a small case.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "\\frac{11}{12}",
          "explanation": "Final value.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{11}{12}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Series: method of differences",
    "subtopicId": "fm.y2.pure.method-of-differences",
    "questionDiagram": null,
    "id": "fm.y2.pure.method-of-differences.q013",
    "tags": [
      "explicit-difference"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Evaluate $\\displaystyle\\sum_{r=1}^{5} \\left(\\frac{1}{r} - \\frac{1}{r+1}\\right)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise form",
          "workingLatex": "\\frac{1}{r} - \\frac{1}{r+1}",
          "explanation": "Already a difference — no partial fractions needed.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the sum",
          "workingLatex": "\\sum_{r=1}^{5} \\left(\\frac{1}{r} - \\frac{1}{r+1}\\right)",
          "explanation": "Direct method of differences.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Telescope",
          "workingLatex": "= 1 - \\frac{1}{6} = \\frac{5}{6}",
          "explanation": "Cancel all intermediate terms.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Answer",
          "workingLatex": "\\frac{5}{6}",
          "explanation": "Final value.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Key idea",
          "workingLatex": "u_r - u_{r+1} \\text{ form always telescopes}",
          "explanation": "General pattern.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify",
          "workingLatex": "n=2: \\frac{1}{2}+\\frac{1}{6}=\\frac{2}{3}",
          "explanation": "Check.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Link",
          "workingLatex": "\\text{Same as } \\sum \\frac{1}{r(r+1)}",
          "explanation": "Equivalent problem.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Method",
          "workingLatex": "\\text{Method of differences}",
          "explanation": "Named technique.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{5}{6}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Series: method of differences",
    "subtopicId": "fm.y2.pure.method-of-differences",
    "questionDiagram": null,
    "id": "fm.y2.pure.method-of-differences.q014",
    "tags": [
      "explicit-difference"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Evaluate $\\displaystyle\\sum_{r=1}^{10} \\left(\\frac{1}{r} - \\frac{1}{r+1}\\right)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise form",
          "workingLatex": "\\frac{1}{r} - \\frac{1}{r+1}",
          "explanation": "Already a difference — no partial fractions needed.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the sum",
          "workingLatex": "\\sum_{r=1}^{10} \\left(\\frac{1}{r} - \\frac{1}{r+1}\\right)",
          "explanation": "Direct method of differences.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Telescope",
          "workingLatex": "= 1 - \\frac{1}{11} = \\frac{10}{11}",
          "explanation": "Cancel all intermediate terms.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Answer",
          "workingLatex": "\\frac{10}{11}",
          "explanation": "Final value.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Key idea",
          "workingLatex": "u_r - u_{r+1} \\text{ form always telescopes}",
          "explanation": "General pattern.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify",
          "workingLatex": "n=2: \\frac{1}{2}+\\frac{1}{6}=\\frac{2}{3}",
          "explanation": "Check.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Link",
          "workingLatex": "\\text{Same as } \\sum \\frac{1}{r(r+1)}",
          "explanation": "Equivalent problem.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Method",
          "workingLatex": "\\text{Method of differences}",
          "explanation": "Named technique.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{10}{11}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Series: method of differences",
    "subtopicId": "fm.y2.pure.method-of-differences",
    "questionDiagram": null,
    "id": "fm.y2.pure.method-of-differences.q015",
    "tags": [
      "explicit-difference"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Evaluate $\\displaystyle\\sum_{r=1}^{8} \\left(\\frac{1}{r} - \\frac{1}{r+1}\\right)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise form",
          "workingLatex": "\\frac{1}{r} - \\frac{1}{r+1}",
          "explanation": "Already a difference — no partial fractions needed.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the sum",
          "workingLatex": "\\sum_{r=1}^{8} \\left(\\frac{1}{r} - \\frac{1}{r+1}\\right)",
          "explanation": "Direct method of differences.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Telescope",
          "workingLatex": "= 1 - \\frac{1}{9} = \\frac{8}{9}",
          "explanation": "Cancel all intermediate terms.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Answer",
          "workingLatex": "\\frac{8}{9}",
          "explanation": "Final value.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Key idea",
          "workingLatex": "u_r - u_{r+1} \\text{ form always telescopes}",
          "explanation": "General pattern.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify",
          "workingLatex": "n=2: \\frac{1}{2}+\\frac{1}{6}=\\frac{2}{3}",
          "explanation": "Check.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Link",
          "workingLatex": "\\text{Same as } \\sum \\frac{1}{r(r+1)}",
          "explanation": "Equivalent problem.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Method",
          "workingLatex": "\\text{Method of differences}",
          "explanation": "Named technique.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{8}{9}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Series: method of differences",
    "subtopicId": "fm.y2.pure.method-of-differences",
    "questionDiagram": null,
    "id": "fm.y2.pure.method-of-differences.q016",
    "tags": [
      "telescoping",
      "gap-2"
    ],
    "difficulty": "Easy",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find the exact value of $\\displaystyle\\sum_{r=1}^{5} \\frac{1}{r(r+2)}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Partial fractions",
          "workingLatex": "\\frac{1}{r(r+2)} = \\frac{1}{2}\\left(\\frac{1}{r} - \\frac{1}{r+2}\\right)",
          "explanation": "Decompose with a gap of 2.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the sum",
          "workingLatex": "\\sum_{r=1}^{5} \\frac{1}{r(r+2)} = \\frac{1}{2}\\sum_{r=1}^{5} \\left(\\frac{1}{r} - \\frac{1}{r+2}\\right)",
          "explanation": "Factor out $\\frac{1}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Telescope",
          "workingLatex": "\\text{First two minus last two terms survive}",
          "explanation": "Cancellation pattern.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Survivors",
          "workingLatex": "= \\frac{1}{2}\\left(1 + \\frac{1}{2} - \\frac{1}{6} - \\frac{1}{7}\\right)",
          "explanation": "Collect remaining terms.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "= \\frac{25}{42}",
          "explanation": "Combine fractions.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify $n=1$",
          "workingLatex": "\\frac{1}{6}",
          "explanation": "Direct evaluation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Method",
          "workingLatex": "\\text{Method of differences via partial fractions}",
          "explanation": "Key technique.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "\\frac{25}{42}",
          "explanation": "Final value.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{25}{42}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Series: method of differences",
    "subtopicId": "fm.y2.pure.method-of-differences",
    "questionDiagram": null,
    "id": "fm.y2.pure.method-of-differences.q017",
    "tags": [
      "telescoping",
      "gap-2"
    ],
    "difficulty": "Easy",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find the exact value of $\\displaystyle\\sum_{r=1}^{10} \\frac{1}{r(r+2)}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Partial fractions",
          "workingLatex": "\\frac{1}{r(r+2)} = \\frac{1}{2}\\left(\\frac{1}{r} - \\frac{1}{r+2}\\right)",
          "explanation": "Decompose with a gap of 2.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the sum",
          "workingLatex": "\\sum_{r=1}^{10} \\frac{1}{r(r+2)} = \\frac{1}{2}\\sum_{r=1}^{10} \\left(\\frac{1}{r} - \\frac{1}{r+2}\\right)",
          "explanation": "Factor out $\\frac{1}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Telescope",
          "workingLatex": "\\text{First two minus last two terms survive}",
          "explanation": "Cancellation pattern.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Survivors",
          "workingLatex": "= \\frac{1}{2}\\left(1 + \\frac{1}{2} - \\frac{1}{11} - \\frac{1}{12}\\right)",
          "explanation": "Collect remaining terms.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "= \\frac{175}{264}",
          "explanation": "Combine fractions.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify $n=1$",
          "workingLatex": "\\frac{1}{6}",
          "explanation": "Direct evaluation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Method",
          "workingLatex": "\\text{Method of differences via partial fractions}",
          "explanation": "Key technique.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "\\frac{175}{264}",
          "explanation": "Final value.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{175}{264}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Series: method of differences",
    "subtopicId": "fm.y2.pure.method-of-differences",
    "questionDiagram": null,
    "id": "fm.y2.pure.method-of-differences.q018",
    "tags": [
      "telescoping",
      "gap-2"
    ],
    "difficulty": "Easy",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find the exact value of $\\displaystyle\\sum_{r=1}^{8} \\frac{1}{r(r+2)}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Partial fractions",
          "workingLatex": "\\frac{1}{r(r+2)} = \\frac{1}{2}\\left(\\frac{1}{r} - \\frac{1}{r+2}\\right)",
          "explanation": "Decompose with a gap of 2.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the sum",
          "workingLatex": "\\sum_{r=1}^{8} \\frac{1}{r(r+2)} = \\frac{1}{2}\\sum_{r=1}^{8} \\left(\\frac{1}{r} - \\frac{1}{r+2}\\right)",
          "explanation": "Factor out $\\frac{1}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Telescope",
          "workingLatex": "\\text{First two minus last two terms survive}",
          "explanation": "Cancellation pattern.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Survivors",
          "workingLatex": "= \\frac{1}{2}\\left(1 + \\frac{1}{2} - \\frac{1}{9} - \\frac{1}{10}\\right)",
          "explanation": "Collect remaining terms.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "= \\frac{29}{45}",
          "explanation": "Combine fractions.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify $n=1$",
          "workingLatex": "\\frac{1}{6}",
          "explanation": "Direct evaluation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Method",
          "workingLatex": "\\text{Method of differences via partial fractions}",
          "explanation": "Key technique.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "\\frac{29}{45}",
          "explanation": "Final value.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{29}{45}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Series: method of differences",
    "subtopicId": "fm.y2.pure.method-of-differences",
    "questionDiagram": null,
    "id": "fm.y2.pure.method-of-differences.q019",
    "tags": [
      "telescoping",
      "gap-2"
    ],
    "difficulty": "Easy",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find the exact value of $\\displaystyle\\sum_{r=1}^{6} \\frac{1}{r(r+2)}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Partial fractions",
          "workingLatex": "\\frac{1}{r(r+2)} = \\frac{1}{2}\\left(\\frac{1}{r} - \\frac{1}{r+2}\\right)",
          "explanation": "Decompose with a gap of 2.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the sum",
          "workingLatex": "\\sum_{r=1}^{6} \\frac{1}{r(r+2)} = \\frac{1}{2}\\sum_{r=1}^{6} \\left(\\frac{1}{r} - \\frac{1}{r+2}\\right)",
          "explanation": "Factor out $\\frac{1}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Telescope",
          "workingLatex": "\\text{First two minus last two terms survive}",
          "explanation": "Cancellation pattern.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Survivors",
          "workingLatex": "= \\frac{1}{2}\\left(1 + \\frac{1}{2} - \\frac{1}{7} - \\frac{1}{8}\\right)",
          "explanation": "Collect remaining terms.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "= \\frac{69}{112}",
          "explanation": "Combine fractions.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify $n=1$",
          "workingLatex": "\\frac{1}{6}",
          "explanation": "Direct evaluation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Method",
          "workingLatex": "\\text{Method of differences via partial fractions}",
          "explanation": "Key technique.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "\\frac{69}{112}",
          "explanation": "Final value.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{69}{112}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Series: method of differences",
    "subtopicId": "fm.y2.pure.method-of-differences",
    "questionDiagram": null,
    "id": "fm.y2.pure.method-of-differences.q020",
    "tags": [
      "telescoping",
      "gap-2"
    ],
    "difficulty": "Easy",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find the exact value of $\\displaystyle\\sum_{r=1}^{12} \\frac{1}{r(r+2)}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Partial fractions",
          "workingLatex": "\\frac{1}{r(r+2)} = \\frac{1}{2}\\left(\\frac{1}{r} - \\frac{1}{r+2}\\right)",
          "explanation": "Decompose with a gap of 2.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the sum",
          "workingLatex": "\\sum_{r=1}^{12} \\frac{1}{r(r+2)} = \\frac{1}{2}\\sum_{r=1}^{12} \\left(\\frac{1}{r} - \\frac{1}{r+2}\\right)",
          "explanation": "Factor out $\\frac{1}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Telescope",
          "workingLatex": "\\text{First two minus last two terms survive}",
          "explanation": "Cancellation pattern.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Survivors",
          "workingLatex": "= \\frac{1}{2}\\left(1 + \\frac{1}{2} - \\frac{1}{13} - \\frac{1}{14}\\right)",
          "explanation": "Collect remaining terms.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "= \\frac{123}{182}",
          "explanation": "Combine fractions.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify $n=1$",
          "workingLatex": "\\frac{1}{6}",
          "explanation": "Direct evaluation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Method",
          "workingLatex": "\\text{Method of differences via partial fractions}",
          "explanation": "Key technique.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "\\frac{123}{182}",
          "explanation": "Final value.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{123}{182}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Series: method of differences",
    "subtopicId": "fm.y2.pure.method-of-differences",
    "questionDiagram": null,
    "id": "fm.y2.pure.method-of-differences.q021",
    "tags": [
      "telescoping",
      "gap-2"
    ],
    "difficulty": "Easy",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find the exact value of $\\displaystyle\\sum_{r=1}^{4} \\frac{1}{r(r+2)}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Partial fractions",
          "workingLatex": "\\frac{1}{r(r+2)} = \\frac{1}{2}\\left(\\frac{1}{r} - \\frac{1}{r+2}\\right)",
          "explanation": "Decompose with a gap of 2.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the sum",
          "workingLatex": "\\sum_{r=1}^{4} \\frac{1}{r(r+2)} = \\frac{1}{2}\\sum_{r=1}^{4} \\left(\\frac{1}{r} - \\frac{1}{r+2}\\right)",
          "explanation": "Factor out $\\frac{1}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Telescope",
          "workingLatex": "\\text{First two minus last two terms survive}",
          "explanation": "Cancellation pattern.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Survivors",
          "workingLatex": "= \\frac{1}{2}\\left(1 + \\frac{1}{2} - \\frac{1}{5} - \\frac{1}{6}\\right)",
          "explanation": "Collect remaining terms.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "= \\frac{17}{30}",
          "explanation": "Combine fractions.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify $n=1$",
          "workingLatex": "\\frac{1}{6}",
          "explanation": "Direct evaluation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Method",
          "workingLatex": "\\text{Method of differences via partial fractions}",
          "explanation": "Key technique.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "\\frac{17}{30}",
          "explanation": "Final value.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{17}{30}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Series: method of differences",
    "subtopicId": "fm.y2.pure.method-of-differences",
    "questionDiagram": null,
    "id": "fm.y2.pure.method-of-differences.q022",
    "tags": [
      "large-n",
      "telescoping",
      "partial-fractions"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Find the exact value of $\\displaystyle\\sum_{r=1}^{25} \\frac{1}{r(r+1)}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Partial fractions",
          "workingLatex": "\\frac{1}{r(r+1)} = \\frac{1}{r} - \\frac{1}{r+1}",
          "explanation": "Decompose into a difference of two simpler fractions.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the sum",
          "workingLatex": "\\sum_{r=1}^{25} \\frac{1}{r(r+1)} = \\sum_{r=1}^{25} \\left(\\frac{1}{r} - \\frac{1}{r+1}\\right)",
          "explanation": "Each term is a difference.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand",
          "workingLatex": "= \\left(1 - \\frac{1}{2}\\right) + \\left(\\frac{1}{2} - \\frac{1}{3}\\right) + \\cdots + \\left(\\frac{1}{25} - \\frac{1}{26}\\right)",
          "explanation": "Write out successive terms.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Telescope",
          "workingLatex": "\\text{Intermediate terms cancel in pairs}",
          "explanation": "This is the method of differences.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Survivors",
          "workingLatex": "= 1 - \\frac{1}{26}",
          "explanation": "Only the first and last terms remain.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify",
          "workingLatex": "= \\frac{25}{26}",
          "explanation": "Combine over a common denominator.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify $n=1$",
          "workingLatex": "\\frac{1}{2} = \\frac{1}{2}",
          "explanation": "Check a small case.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "\\frac{25}{26}",
          "explanation": "Final value.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{25}{26}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Series: method of differences",
    "subtopicId": "fm.y2.pure.method-of-differences",
    "questionDiagram": null,
    "id": "fm.y2.pure.method-of-differences.q023",
    "tags": [
      "fixed-n"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Evaluate $\\displaystyle\\sum_{r=1}^{5} \\frac{1}{r(r+1)}$ using the method of differences.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Partial fractions",
          "workingLatex": "\\frac{1}{r(r+1)} = \\frac{1}{r} - \\frac{1}{r+1}",
          "explanation": "Decompose each term.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Telescope",
          "workingLatex": "\\sum_{r=1}^{5} = 1 - \\frac{1}{6}",
          "explanation": "Cancel intermediate terms.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify",
          "workingLatex": "= \\frac{5}{6}",
          "explanation": "Final value.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Verify",
          "workingLatex": "\\text{Add terms directly}",
          "explanation": "Numerical check.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Method",
          "workingLatex": "\\text{Method of differences}",
          "explanation": "Named technique.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\frac{5}{6}",
          "explanation": "Result.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "General formula",
          "workingLatex": "\\sum_{r=1}^{n} \\frac{1}{r(r+1)} = \\frac{n}{n+1}",
          "explanation": "Standard result.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Application",
          "workingLatex": "\\text{Building block for harder sums}",
          "explanation": "Foundation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{5}{6}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Series: method of differences",
    "subtopicId": "fm.y2.pure.method-of-differences",
    "questionDiagram": null,
    "id": "fm.y2.pure.method-of-differences.q024",
    "tags": [
      "fixed-n"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Evaluate $\\displaystyle\\sum_{r=1}^{4} \\frac{1}{r(r+1)}$ using the method of differences.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Partial fractions",
          "workingLatex": "\\frac{1}{r(r+1)} = \\frac{1}{r} - \\frac{1}{r+1}",
          "explanation": "Decompose each term.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Telescope",
          "workingLatex": "\\sum_{r=1}^{4} = 1 - \\frac{1}{5}",
          "explanation": "Cancel intermediate terms.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify",
          "workingLatex": "= \\frac{4}{5}",
          "explanation": "Final value.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Verify",
          "workingLatex": "\\text{Add terms directly}",
          "explanation": "Numerical check.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Method",
          "workingLatex": "\\text{Method of differences}",
          "explanation": "Named technique.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\frac{4}{5}",
          "explanation": "Result.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "General formula",
          "workingLatex": "\\sum_{r=1}^{n} \\frac{1}{r(r+1)} = \\frac{n}{n+1}",
          "explanation": "Standard result.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Application",
          "workingLatex": "\\text{Building block for harder sums}",
          "explanation": "Foundation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{4}{5}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Series: method of differences",
    "subtopicId": "fm.y2.pure.method-of-differences",
    "questionDiagram": null,
    "id": "fm.y2.pure.method-of-differences.q025",
    "tags": [
      "fixed-n"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Evaluate $\\displaystyle\\sum_{r=1}^{6} \\frac{1}{r(r+1)}$ using the method of differences.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Partial fractions",
          "workingLatex": "\\frac{1}{r(r+1)} = \\frac{1}{r} - \\frac{1}{r+1}",
          "explanation": "Decompose each term.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Telescope",
          "workingLatex": "\\sum_{r=1}^{6} = 1 - \\frac{1}{7}",
          "explanation": "Cancel intermediate terms.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify",
          "workingLatex": "= \\frac{6}{7}",
          "explanation": "Final value.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Verify",
          "workingLatex": "\\text{Add terms directly}",
          "explanation": "Numerical check.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Method",
          "workingLatex": "\\text{Method of differences}",
          "explanation": "Named technique.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\frac{6}{7}",
          "explanation": "Result.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "General formula",
          "workingLatex": "\\sum_{r=1}^{n} \\frac{1}{r(r+1)} = \\frac{n}{n+1}",
          "explanation": "Standard result.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Application",
          "workingLatex": "\\text{Building block for harder sums}",
          "explanation": "Foundation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{6}{7}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Series: method of differences",
    "subtopicId": "fm.y2.pure.method-of-differences",
    "questionDiagram": null,
    "id": "fm.y2.pure.method-of-differences.q026",
    "tags": [
      "odd-terms",
      "telescoping"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find the exact value of $\\displaystyle\\sum_{r=1}^{5} \\frac{1}{(2r-1)(2r+1)}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Partial fractions",
          "workingLatex": "\\frac{1}{(2r-1)(2r+1)} = \\frac{1}{2}\\left(\\frac{1}{2r-1} - \\frac{1}{2r+1}\\right)",
          "explanation": "Decompose odd-term product.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Telescope",
          "workingLatex": "= \\frac{1}{2}\\left(1 - \\frac{1}{11}\\right)",
          "explanation": "First and last survive.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify",
          "workingLatex": "= \\frac{5}{11}",
          "explanation": "Common denominator.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Verify $n=1$",
          "workingLatex": "\\frac{1}{3}",
          "explanation": "Check.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Expand terms",
          "workingLatex": "\\frac{1}{1 \\cdot 3} + \\frac{1}{3 \\cdot 5} + \\cdots",
          "explanation": "Structure of sum.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Method",
          "workingLatex": "\\text{Method of differences}",
          "explanation": "Core technique.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "\\frac{5}{11}",
          "explanation": "Final value.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Link",
          "workingLatex": "\\text{Related to Leibniz series for } \\pi/4",
          "explanation": "Historical note.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "General",
          "workingLatex": "\\text{Any } \\frac{1}{(ar+b)(ar+c)} \\text{ may telescope}",
          "explanation": "Broader class.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{5}{11}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Series: method of differences",
    "subtopicId": "fm.y2.pure.method-of-differences",
    "questionDiagram": null,
    "id": "fm.y2.pure.method-of-differences.q027",
    "tags": [
      "odd-terms",
      "telescoping"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find the exact value of $\\displaystyle\\sum_{r=1}^{10} \\frac{1}{(2r-1)(2r+1)}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Partial fractions",
          "workingLatex": "\\frac{1}{(2r-1)(2r+1)} = \\frac{1}{2}\\left(\\frac{1}{2r-1} - \\frac{1}{2r+1}\\right)",
          "explanation": "Decompose odd-term product.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Telescope",
          "workingLatex": "= \\frac{1}{2}\\left(1 - \\frac{1}{21}\\right)",
          "explanation": "First and last survive.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify",
          "workingLatex": "= \\frac{10}{21}",
          "explanation": "Common denominator.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Verify $n=1$",
          "workingLatex": "\\frac{1}{3}",
          "explanation": "Check.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Expand terms",
          "workingLatex": "\\frac{1}{1 \\cdot 3} + \\frac{1}{3 \\cdot 5} + \\cdots",
          "explanation": "Structure of sum.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Method",
          "workingLatex": "\\text{Method of differences}",
          "explanation": "Core technique.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "\\frac{10}{21}",
          "explanation": "Final value.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Link",
          "workingLatex": "\\text{Related to Leibniz series for } \\pi/4",
          "explanation": "Historical note.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "General",
          "workingLatex": "\\text{Any } \\frac{1}{(ar+b)(ar+c)} \\text{ may telescope}",
          "explanation": "Broader class.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{10}{21}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Series: method of differences",
    "subtopicId": "fm.y2.pure.method-of-differences",
    "questionDiagram": null,
    "id": "fm.y2.pure.method-of-differences.q028",
    "tags": [
      "odd-terms",
      "telescoping"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find the exact value of $\\displaystyle\\sum_{r=1}^{20} \\frac{1}{(2r-1)(2r+1)}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Partial fractions",
          "workingLatex": "\\frac{1}{(2r-1)(2r+1)} = \\frac{1}{2}\\left(\\frac{1}{2r-1} - \\frac{1}{2r+1}\\right)",
          "explanation": "Decompose odd-term product.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Telescope",
          "workingLatex": "= \\frac{1}{2}\\left(1 - \\frac{1}{41}\\right)",
          "explanation": "First and last survive.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify",
          "workingLatex": "= \\frac{20}{41}",
          "explanation": "Common denominator.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Verify $n=1$",
          "workingLatex": "\\frac{1}{3}",
          "explanation": "Check.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Expand terms",
          "workingLatex": "\\frac{1}{1 \\cdot 3} + \\frac{1}{3 \\cdot 5} + \\cdots",
          "explanation": "Structure of sum.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Method",
          "workingLatex": "\\text{Method of differences}",
          "explanation": "Core technique.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "\\frac{20}{41}",
          "explanation": "Final value.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Link",
          "workingLatex": "\\text{Related to Leibniz series for } \\pi/4",
          "explanation": "Historical note.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "General",
          "workingLatex": "\\text{Any } \\frac{1}{(ar+b)(ar+c)} \\text{ may telescope}",
          "explanation": "Broader class.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{20}{41}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Series: method of differences",
    "subtopicId": "fm.y2.pure.method-of-differences",
    "questionDiagram": null,
    "id": "fm.y2.pure.method-of-differences.q029",
    "tags": [
      "odd-terms",
      "telescoping"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find the exact value of $\\displaystyle\\sum_{r=1}^{8} \\frac{1}{(2r-1)(2r+1)}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Partial fractions",
          "workingLatex": "\\frac{1}{(2r-1)(2r+1)} = \\frac{1}{2}\\left(\\frac{1}{2r-1} - \\frac{1}{2r+1}\\right)",
          "explanation": "Decompose odd-term product.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Telescope",
          "workingLatex": "= \\frac{1}{2}\\left(1 - \\frac{1}{17}\\right)",
          "explanation": "First and last survive.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify",
          "workingLatex": "= \\frac{8}{17}",
          "explanation": "Common denominator.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Verify $n=1$",
          "workingLatex": "\\frac{1}{3}",
          "explanation": "Check.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Expand terms",
          "workingLatex": "\\frac{1}{1 \\cdot 3} + \\frac{1}{3 \\cdot 5} + \\cdots",
          "explanation": "Structure of sum.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Method",
          "workingLatex": "\\text{Method of differences}",
          "explanation": "Core technique.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "\\frac{8}{17}",
          "explanation": "Final value.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Link",
          "workingLatex": "\\text{Related to Leibniz series for } \\pi/4",
          "explanation": "Historical note.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "General",
          "workingLatex": "\\text{Any } \\frac{1}{(ar+b)(ar+c)} \\text{ may telescope}",
          "explanation": "Broader class.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{8}{17}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Series: method of differences",
    "subtopicId": "fm.y2.pure.method-of-differences",
    "questionDiagram": null,
    "id": "fm.y2.pure.method-of-differences.q030",
    "tags": [
      "odd-terms",
      "telescoping"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find the exact value of $\\displaystyle\\sum_{r=1}^{15} \\frac{1}{(2r-1)(2r+1)}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Partial fractions",
          "workingLatex": "\\frac{1}{(2r-1)(2r+1)} = \\frac{1}{2}\\left(\\frac{1}{2r-1} - \\frac{1}{2r+1}\\right)",
          "explanation": "Decompose odd-term product.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Telescope",
          "workingLatex": "= \\frac{1}{2}\\left(1 - \\frac{1}{31}\\right)",
          "explanation": "First and last survive.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify",
          "workingLatex": "= \\frac{15}{31}",
          "explanation": "Common denominator.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Verify $n=1$",
          "workingLatex": "\\frac{1}{3}",
          "explanation": "Check.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Expand terms",
          "workingLatex": "\\frac{1}{1 \\cdot 3} + \\frac{1}{3 \\cdot 5} + \\cdots",
          "explanation": "Structure of sum.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Method",
          "workingLatex": "\\text{Method of differences}",
          "explanation": "Core technique.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "\\frac{15}{31}",
          "explanation": "Final value.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Link",
          "workingLatex": "\\text{Related to Leibniz series for } \\pi/4",
          "explanation": "Historical note.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "General",
          "workingLatex": "\\text{Any } \\frac{1}{(ar+b)(ar+c)} \\text{ may telescope}",
          "explanation": "Broader class.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{15}{31}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Series: method of differences",
    "subtopicId": "fm.y2.pure.method-of-differences",
    "questionDiagram": null,
    "id": "fm.y2.pure.method-of-differences.q031",
    "tags": [
      "gap-3",
      "telescoping"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find the exact value of $\\displaystyle\\sum_{r=1}^{5} \\frac{1}{r(r+3)}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Partial fractions",
          "workingLatex": "\\frac{1}{r(r+3)} = \\frac{1}{3}\\left(\\frac{1}{r} - \\frac{1}{r+3}\\right)",
          "explanation": "Decompose with gap 3.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Telescope",
          "workingLatex": "\\text{First three minus last three terms survive}",
          "explanation": "Cancellation with gap 3.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Survivors",
          "workingLatex": "= \\frac{1}{3}\\left(1 + \\frac{1}{2} + \\frac{1}{3} - \\frac{1}{6} - \\frac{1}{7} - \\frac{1}{8}\\right)",
          "explanation": "Collect terms.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify",
          "workingLatex": "= \\frac{235}{504}",
          "explanation": "Combine fractions.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify $n=1$",
          "workingLatex": "\\frac{1}{4}",
          "explanation": "Direct check.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Method",
          "workingLatex": "\\text{Partial fractions then telescope}",
          "explanation": "Standard FM approach.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "\\frac{235}{504}",
          "explanation": "Final value.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Pattern",
          "workingLatex": "\\text{Gap } k \\Rightarrow k \\text{ terms survive at each end}",
          "explanation": "General rule.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Note",
          "workingLatex": "\\text{Always decompose before summing}",
          "explanation": "Required first step.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{235}{504}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Series: method of differences",
    "subtopicId": "fm.y2.pure.method-of-differences",
    "questionDiagram": null,
    "id": "fm.y2.pure.method-of-differences.q032",
    "tags": [
      "gap-3",
      "telescoping"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find the exact value of $\\displaystyle\\sum_{r=1}^{10} \\frac{1}{r(r+3)}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Partial fractions",
          "workingLatex": "\\frac{1}{r(r+3)} = \\frac{1}{3}\\left(\\frac{1}{r} - \\frac{1}{r+3}\\right)",
          "explanation": "Decompose with gap 3.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Telescope",
          "workingLatex": "\\text{First three minus last three terms survive}",
          "explanation": "Cancellation with gap 3.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Survivors",
          "workingLatex": "= \\frac{1}{3}\\left(1 + \\frac{1}{2} + \\frac{1}{3} - \\frac{1}{11} - \\frac{1}{12} - \\frac{1}{13}\\right)",
          "explanation": "Collect terms.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify",
          "workingLatex": "= \\frac{905}{1716}",
          "explanation": "Combine fractions.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify $n=1$",
          "workingLatex": "\\frac{1}{4}",
          "explanation": "Direct check.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Method",
          "workingLatex": "\\text{Partial fractions then telescope}",
          "explanation": "Standard FM approach.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "\\frac{905}{1716}",
          "explanation": "Final value.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Pattern",
          "workingLatex": "\\text{Gap } k \\Rightarrow k \\text{ terms survive at each end}",
          "explanation": "General rule.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Note",
          "workingLatex": "\\text{Always decompose before summing}",
          "explanation": "Required first step.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{905}{1716}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Series: method of differences",
    "subtopicId": "fm.y2.pure.method-of-differences",
    "questionDiagram": null,
    "id": "fm.y2.pure.method-of-differences.q033",
    "tags": [
      "gap-3",
      "telescoping"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find the exact value of $\\displaystyle\\sum_{r=1}^{8} \\frac{1}{r(r+3)}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Partial fractions",
          "workingLatex": "\\frac{1}{r(r+3)} = \\frac{1}{3}\\left(\\frac{1}{r} - \\frac{1}{r+3}\\right)",
          "explanation": "Decompose with gap 3.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Telescope",
          "workingLatex": "\\text{First three minus last three terms survive}",
          "explanation": "Cancellation with gap 3.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Survivors",
          "workingLatex": "= \\frac{1}{3}\\left(1 + \\frac{1}{2} + \\frac{1}{3} - \\frac{1}{9} - \\frac{1}{10} - \\frac{1}{11}\\right)",
          "explanation": "Collect terms.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify",
          "workingLatex": "= \\frac{758}{1485}",
          "explanation": "Combine fractions.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify $n=1$",
          "workingLatex": "\\frac{1}{4}",
          "explanation": "Direct check.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Method",
          "workingLatex": "\\text{Partial fractions then telescope}",
          "explanation": "Standard FM approach.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "\\frac{758}{1485}",
          "explanation": "Final value.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Pattern",
          "workingLatex": "\\text{Gap } k \\Rightarrow k \\text{ terms survive at each end}",
          "explanation": "General rule.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Note",
          "workingLatex": "\\text{Always decompose before summing}",
          "explanation": "Required first step.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{758}{1485}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Series: method of differences",
    "subtopicId": "fm.y2.pure.method-of-differences",
    "questionDiagram": null,
    "id": "fm.y2.pure.method-of-differences.q034",
    "tags": [
      "gap-3",
      "telescoping"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find the exact value of $\\displaystyle\\sum_{r=1}^{6} \\frac{1}{r(r+3)}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Partial fractions",
          "workingLatex": "\\frac{1}{r(r+3)} = \\frac{1}{3}\\left(\\frac{1}{r} - \\frac{1}{r+3}\\right)",
          "explanation": "Decompose with gap 3.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Telescope",
          "workingLatex": "\\text{First three minus last three terms survive}",
          "explanation": "Cancellation with gap 3.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Survivors",
          "workingLatex": "= \\frac{1}{3}\\left(1 + \\frac{1}{2} + \\frac{1}{3} - \\frac{1}{7} - \\frac{1}{8} - \\frac{1}{9}\\right)",
          "explanation": "Collect terms.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify",
          "workingLatex": "= \\frac{733}{1512}",
          "explanation": "Combine fractions.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify $n=1$",
          "workingLatex": "\\frac{1}{4}",
          "explanation": "Direct check.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Method",
          "workingLatex": "\\text{Partial fractions then telescope}",
          "explanation": "Standard FM approach.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "\\frac{733}{1512}",
          "explanation": "Final value.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Pattern",
          "workingLatex": "\\text{Gap } k \\Rightarrow k \\text{ terms survive at each end}",
          "explanation": "General rule.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Note",
          "workingLatex": "\\text{Always decompose before summing}",
          "explanation": "Required first step.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{733}{1512}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Series: method of differences",
    "subtopicId": "fm.y2.pure.method-of-differences",
    "questionDiagram": null,
    "id": "fm.y2.pure.method-of-differences.q035",
    "tags": [
      "gap-3",
      "telescoping"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find the exact value of $\\displaystyle\\sum_{r=1}^{12} \\frac{1}{r(r+3)}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Partial fractions",
          "workingLatex": "\\frac{1}{r(r+3)} = \\frac{1}{3}\\left(\\frac{1}{r} - \\frac{1}{r+3}\\right)",
          "explanation": "Decompose with gap 3.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Telescope",
          "workingLatex": "\\text{First three minus last three terms survive}",
          "explanation": "Cancellation with gap 3.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Survivors",
          "workingLatex": "= \\frac{1}{3}\\left(1 + \\frac{1}{2} + \\frac{1}{3} - \\frac{1}{13} - \\frac{1}{14} - \\frac{1}{15}\\right)",
          "explanation": "Collect terms.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify",
          "workingLatex": "= \\frac{2209}{4095}",
          "explanation": "Combine fractions.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify $n=1$",
          "workingLatex": "\\frac{1}{4}",
          "explanation": "Direct check.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Method",
          "workingLatex": "\\text{Partial fractions then telescope}",
          "explanation": "Standard FM approach.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "\\frac{2209}{4095}",
          "explanation": "Final value.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Pattern",
          "workingLatex": "\\text{Gap } k \\Rightarrow k \\text{ terms survive at each end}",
          "explanation": "General rule.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Note",
          "workingLatex": "\\text{Always decompose before summing}",
          "explanation": "Required first step.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{2209}{4095}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Series: method of differences",
    "subtopicId": "fm.y2.pure.method-of-differences",
    "questionDiagram": null,
    "id": "fm.y2.pure.method-of-differences.q036",
    "tags": [
      "triple-product",
      "telescoping"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Find the exact value of $\\displaystyle\\sum_{r=1}^{5} \\frac{1}{r(r+1)(r+2)}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Partial fractions",
          "workingLatex": "\\frac{1}{r(r+1)(r+2)} = \\frac{1}{2}\\left(\\frac{1}{r(r+1)} - \\frac{1}{(r+1)(r+2)}\\right)",
          "explanation": "Split into telescoping pairs.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Telescope",
          "workingLatex": "\\sum_{r=1}^{5} = \\frac{1}{2}\\left(\\frac{1}{2} - \\frac{1}{(6)(7)}\\right)",
          "explanation": "Cancel intermediate terms.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify",
          "workingLatex": "= \\frac{5}{21}",
          "explanation": "Final fraction.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Verify $n=1$",
          "workingLatex": "\\frac{1}{6}",
          "explanation": "Direct.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Alternative form",
          "workingLatex": "= \\frac{n(n+3)}{2(n+1)(n+2)}",
          "explanation": "Equivalent closed form.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Technique",
          "workingLatex": "\\text{Repeated partial fractions}",
          "explanation": "Harder decomposition.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "\\frac{5}{21}",
          "explanation": "Final value.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Limit",
          "workingLatex": "\\lim_{n\\to\\infty} = \\frac{1}{4}",
          "explanation": "Infinite sum.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Method",
          "workingLatex": "\\text{Method of differences}",
          "explanation": "Named technique.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{5}{21}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Series: method of differences",
    "subtopicId": "fm.y2.pure.method-of-differences",
    "questionDiagram": null,
    "id": "fm.y2.pure.method-of-differences.q037",
    "tags": [
      "triple-product",
      "telescoping"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Find the exact value of $\\displaystyle\\sum_{r=1}^{10} \\frac{1}{r(r+1)(r+2)}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Partial fractions",
          "workingLatex": "\\frac{1}{r(r+1)(r+2)} = \\frac{1}{2}\\left(\\frac{1}{r(r+1)} - \\frac{1}{(r+1)(r+2)}\\right)",
          "explanation": "Split into telescoping pairs.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Telescope",
          "workingLatex": "\\sum_{r=1}^{10} = \\frac{1}{2}\\left(\\frac{1}{2} - \\frac{1}{(11)(12)}\\right)",
          "explanation": "Cancel intermediate terms.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify",
          "workingLatex": "= \\frac{65}{264}",
          "explanation": "Final fraction.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Verify $n=1$",
          "workingLatex": "\\frac{1}{6}",
          "explanation": "Direct.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Alternative form",
          "workingLatex": "= \\frac{n(n+3)}{2(n+1)(n+2)}",
          "explanation": "Equivalent closed form.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Technique",
          "workingLatex": "\\text{Repeated partial fractions}",
          "explanation": "Harder decomposition.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "\\frac{65}{264}",
          "explanation": "Final value.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Limit",
          "workingLatex": "\\lim_{n\\to\\infty} = \\frac{1}{4}",
          "explanation": "Infinite sum.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Method",
          "workingLatex": "\\text{Method of differences}",
          "explanation": "Named technique.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{65}{264}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Series: method of differences",
    "subtopicId": "fm.y2.pure.method-of-differences",
    "questionDiagram": null,
    "id": "fm.y2.pure.method-of-differences.q038",
    "tags": [
      "triple-product",
      "telescoping"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Find the exact value of $\\displaystyle\\sum_{r=1}^{8} \\frac{1}{r(r+1)(r+2)}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Partial fractions",
          "workingLatex": "\\frac{1}{r(r+1)(r+2)} = \\frac{1}{2}\\left(\\frac{1}{r(r+1)} - \\frac{1}{(r+1)(r+2)}\\right)",
          "explanation": "Split into telescoping pairs.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Telescope",
          "workingLatex": "\\sum_{r=1}^{8} = \\frac{1}{2}\\left(\\frac{1}{2} - \\frac{1}{(9)(10)}\\right)",
          "explanation": "Cancel intermediate terms.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify",
          "workingLatex": "= \\frac{11}{45}",
          "explanation": "Final fraction.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Verify $n=1$",
          "workingLatex": "\\frac{1}{6}",
          "explanation": "Direct.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Alternative form",
          "workingLatex": "= \\frac{n(n+3)}{2(n+1)(n+2)}",
          "explanation": "Equivalent closed form.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Technique",
          "workingLatex": "\\text{Repeated partial fractions}",
          "explanation": "Harder decomposition.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "\\frac{11}{45}",
          "explanation": "Final value.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Limit",
          "workingLatex": "\\lim_{n\\to\\infty} = \\frac{1}{4}",
          "explanation": "Infinite sum.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Method",
          "workingLatex": "\\text{Method of differences}",
          "explanation": "Named technique.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{11}{45}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Series: method of differences",
    "subtopicId": "fm.y2.pure.method-of-differences",
    "questionDiagram": null,
    "id": "fm.y2.pure.method-of-differences.q039",
    "tags": [
      "shifted-index"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find $\\displaystyle\\sum_{r=2}^{10} \\frac{1}{(r-1)r}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Partial fractions",
          "workingLatex": "\\frac{1}{(r-1)r} = \\frac{1}{r-1} - \\frac{1}{r}",
          "explanation": "Valid for $r \\geq 2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Telescope",
          "workingLatex": "\\sum_{r=2}^{10} = 1 - \\frac{1}{10}",
          "explanation": "First and last terms survive.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify",
          "workingLatex": "= \\frac{9}{10}",
          "explanation": "Final answer.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Verify $n=2$",
          "workingLatex": "\\frac{1}{2}",
          "explanation": "Check.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Note",
          "workingLatex": "\\text{Lower limit } r=2 \\text{ avoids } r=1",
          "explanation": "Domain restriction.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Method",
          "workingLatex": "\\text{Method of differences}",
          "explanation": "Technique.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "\\frac{9}{10}",
          "explanation": "Final value.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Equivalent",
          "workingLatex": "\\text{Same as } 1 - \\frac{1}{n}",
          "explanation": "Simple form.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Application",
          "workingLatex": "\\text{Harmonic-type sums}",
          "explanation": "Context.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{9}{10}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Series: method of differences",
    "subtopicId": "fm.y2.pure.method-of-differences",
    "questionDiagram": null,
    "id": "fm.y2.pure.method-of-differences.q040",
    "tags": [
      "shifted-index"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find $\\displaystyle\\sum_{r=2}^{20} \\frac{1}{(r-1)r}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Partial fractions",
          "workingLatex": "\\frac{1}{(r-1)r} = \\frac{1}{r-1} - \\frac{1}{r}",
          "explanation": "Valid for $r \\geq 2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Telescope",
          "workingLatex": "\\sum_{r=2}^{20} = 1 - \\frac{1}{20}",
          "explanation": "First and last terms survive.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify",
          "workingLatex": "= \\frac{19}{20}",
          "explanation": "Final answer.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Verify $n=2$",
          "workingLatex": "\\frac{1}{2}",
          "explanation": "Check.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Note",
          "workingLatex": "\\text{Lower limit } r=2 \\text{ avoids } r=1",
          "explanation": "Domain restriction.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Method",
          "workingLatex": "\\text{Method of differences}",
          "explanation": "Technique.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "\\frac{19}{20}",
          "explanation": "Final value.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Equivalent",
          "workingLatex": "\\text{Same as } 1 - \\frac{1}{n}",
          "explanation": "Simple form.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Application",
          "workingLatex": "\\text{Harmonic-type sums}",
          "explanation": "Context.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{19}{20}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Series: method of differences",
    "subtopicId": "fm.y2.pure.method-of-differences",
    "questionDiagram": null,
    "id": "fm.y2.pure.method-of-differences.q041",
    "tags": [
      "scaled"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find $\\displaystyle\\sum_{r=1}^{10} \\frac{1}{4r(r+1)}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rewrite",
          "workingLatex": "\\frac{1}{4r(r+1)} = \\frac{1}{4}\\left(\\frac{1}{r} - \\frac{1}{r+1}\\right)",
          "explanation": "Factor and decompose.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Telescope",
          "workingLatex": "= \\frac{1}{4}\\left(1 - \\frac{1}{11}\\right)",
          "explanation": "Standard cancellation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify",
          "workingLatex": "= \\frac{5}{22}",
          "explanation": "Final fraction.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Verify $n=1$",
          "workingLatex": "\\frac{1}{8}",
          "explanation": "Check.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Method",
          "workingLatex": "\\text{Scale a known telescoping sum}",
          "explanation": "Technique.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\frac{5}{22}",
          "explanation": "Final value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "General",
          "workingLatex": "\\frac{1}{kr(r+1)} \\text{ telescopes similarly}",
          "explanation": "Extension.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Key",
          "workingLatex": "\\text{Partial fractions first}",
          "explanation": "Always decompose.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "FM context",
          "workingLatex": "\\text{Core Pure 2 series}",
          "explanation": "Topic link.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{5}{22}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Series: method of differences",
    "subtopicId": "fm.y2.pure.method-of-differences",
    "questionDiagram": null,
    "id": "fm.y2.pure.method-of-differences.q042",
    "tags": [
      "scaled"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find $\\displaystyle\\sum_{r=1}^{20} \\frac{1}{4r(r+1)}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rewrite",
          "workingLatex": "\\frac{1}{4r(r+1)} = \\frac{1}{4}\\left(\\frac{1}{r} - \\frac{1}{r+1}\\right)",
          "explanation": "Factor and decompose.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Telescope",
          "workingLatex": "= \\frac{1}{4}\\left(1 - \\frac{1}{21}\\right)",
          "explanation": "Standard cancellation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify",
          "workingLatex": "= \\frac{5}{21}",
          "explanation": "Final fraction.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Verify $n=1$",
          "workingLatex": "\\frac{1}{8}",
          "explanation": "Check.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Method",
          "workingLatex": "\\text{Scale a known telescoping sum}",
          "explanation": "Technique.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\frac{5}{21}",
          "explanation": "Final value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "General",
          "workingLatex": "\\frac{1}{kr(r+1)} \\text{ telescopes similarly}",
          "explanation": "Extension.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Key",
          "workingLatex": "\\text{Partial fractions first}",
          "explanation": "Always decompose.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "FM context",
          "workingLatex": "\\text{Core Pure 2 series}",
          "explanation": "Topic link.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{5}{21}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Series: method of differences",
    "subtopicId": "fm.y2.pure.method-of-differences",
    "questionDiagram": null,
    "id": "fm.y2.pure.method-of-differences.q043",
    "tags": [
      "gap-4"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find $\\displaystyle\\sum_{r=1}^{10} \\frac{1}{r(r+4)}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Partial fractions",
          "workingLatex": "\\frac{1}{r(r+4)} = \\frac{1}{4}\\left(\\frac{1}{r} - \\frac{1}{r+4}\\right)",
          "explanation": "Gap of 4.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Telescope",
          "workingLatex": "= \\frac{1}{4}\\left(1 + \\frac{1}{2} + \\frac{1}{3} + \\frac{1}{4} - \\frac{1}{11} - \\frac{1}{12} - \\frac{1}{13} - \\frac{1}{14}\\right)",
          "explanation": "Four terms each end.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify",
          "workingLatex": "= \\frac{3525}{8008}",
          "explanation": "Combine.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Verify",
          "workingLatex": "n=1",
          "explanation": "Check numerically.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Method",
          "workingLatex": "\\text{Method of differences}",
          "explanation": "Technique.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\frac{3525}{8008}",
          "explanation": "Final value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "General",
          "workingLatex": "\\frac{1}{r(r+k)} \\text{ always telescopes}",
          "explanation": "Extension.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Application",
          "workingLatex": "\\text{FM Core Pure 2}",
          "explanation": "Exam context.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Key step",
          "workingLatex": "\\text{Partial fractions essential}",
          "explanation": "First move.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{3525}{8008}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Series: method of differences",
    "subtopicId": "fm.y2.pure.method-of-differences",
    "questionDiagram": null,
    "id": "fm.y2.pure.method-of-differences.q044",
    "tags": [
      "gap-4"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find $\\displaystyle\\sum_{r=1}^{8} \\frac{1}{r(r+4)}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Partial fractions",
          "workingLatex": "\\frac{1}{r(r+4)} = \\frac{1}{4}\\left(\\frac{1}{r} - \\frac{1}{r+4}\\right)",
          "explanation": "Gap of 4.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Telescope",
          "workingLatex": "= \\frac{1}{4}\\left(1 + \\frac{1}{2} + \\frac{1}{3} + \\frac{1}{4} - \\frac{1}{9} - \\frac{1}{10} - \\frac{1}{11} - \\frac{1}{12}\\right)",
          "explanation": "Four terms each end.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify",
          "workingLatex": "= \\frac{1681}{3960}",
          "explanation": "Combine.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Verify",
          "workingLatex": "n=1",
          "explanation": "Check numerically.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Method",
          "workingLatex": "\\text{Method of differences}",
          "explanation": "Technique.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\frac{1681}{3960}",
          "explanation": "Final value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "General",
          "workingLatex": "\\frac{1}{r(r+k)} \\text{ always telescopes}",
          "explanation": "Extension.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Application",
          "workingLatex": "\\text{FM Core Pure 2}",
          "explanation": "Exam context.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Key step",
          "workingLatex": "\\text{Partial fractions essential}",
          "explanation": "First move.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{1681}{3960}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Series: method of differences",
    "subtopicId": "fm.y2.pure.method-of-differences",
    "questionDiagram": null,
    "id": "fm.y2.pure.method-of-differences.q045",
    "tags": [
      "limit",
      "infinite-series"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Find $\\displaystyle\\lim_{n\\to\\infty} \\sum_{r=1}^{n} \\frac{1}{r(r+1)}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Finite sum",
          "workingLatex": "\\sum_{r=1}^{n} \\frac{1}{r(r+1)} = 1 - \\frac{1}{n+1}",
          "explanation": "Telescoping result.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Take limit",
          "workingLatex": "\\lim_{n\\to\\infty} \\left(1 - \\frac{1}{n+1}\\right) = 1",
          "explanation": "Tail term vanishes.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Convergence",
          "workingLatex": "\\text{The series converges to } 1",
          "explanation": "Infinite sum exists.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Partial sums",
          "workingLatex": "S_n = \\frac{n}{n+1} \\to 1",
          "explanation": "Alternative route.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Comparison",
          "workingLatex": "\\text{Each term is positive}",
          "explanation": "Justifies convergence.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Method",
          "workingLatex": "\\text{Telescoping then limit}",
          "explanation": "Two-step process.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "1",
          "explanation": "Limit value.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Contrast",
          "workingLatex": "\\sum \\frac{1}{r} \\text{ diverges}",
          "explanation": "Harmonic series differs.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Note",
          "workingLatex": "\\text{Not all telescoping series converge}",
          "explanation": "Important distinction.",
          "diagram": null
        }
      ],
      "finalAnswer": "$1$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Series: method of differences",
    "subtopicId": "fm.y2.pure.method-of-differences",
    "questionDiagram": null,
    "id": "fm.y2.pure.method-of-differences.q046",
    "tags": [
      "limit",
      "infinite-series"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Find $\\displaystyle\\lim_{n\\to\\infty} \\sum_{r=1}^{n} \\frac{1}{r(r+1)}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Finite sum",
          "workingLatex": "\\sum_{r=1}^{n} \\frac{1}{r(r+1)} = 1 - \\frac{1}{n+1}",
          "explanation": "Telescoping result.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Take limit",
          "workingLatex": "\\lim_{n\\to\\infty} \\left(1 - \\frac{1}{n+1}\\right) = 1",
          "explanation": "Tail term vanishes.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Convergence",
          "workingLatex": "\\text{The series converges to } 1",
          "explanation": "Infinite sum exists.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Partial sums",
          "workingLatex": "S_n = \\frac{n}{n+1} \\to 1",
          "explanation": "Alternative route.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Comparison",
          "workingLatex": "\\text{Each term is positive}",
          "explanation": "Justifies convergence.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Method",
          "workingLatex": "\\text{Telescoping then limit}",
          "explanation": "Two-step process.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "1",
          "explanation": "Limit value.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Contrast",
          "workingLatex": "\\sum \\frac{1}{r} \\text{ diverges}",
          "explanation": "Harmonic series differs.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Note",
          "workingLatex": "\\text{Not all telescoping series converge}",
          "explanation": "Important distinction.",
          "diagram": null
        }
      ],
      "finalAnswer": "$1$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Series: method of differences",
    "subtopicId": "fm.y2.pure.method-of-differences",
    "questionDiagram": null,
    "id": "fm.y2.pure.method-of-differences.q047",
    "tags": [
      "linear-numerator",
      "two-part",
      "partial-fractions"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "(a) Express $\\dfrac{3}{(r+0)(r+1)}$ in partial fractions.\n(b) Hence find $\\displaystyle\\sum_{r=1}^{10} \\dfrac{3}{(r+0)(r+1)}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Part (a): Set up",
          "workingLatex": "\\frac{3}{(r+0)(r+1)} = \\frac{A}{r+0} + \\frac{B}{r+1}",
          "explanation": "Partial fraction form.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Solve",
          "workingLatex": "A=3,\\; B=-3",
          "explanation": "Find constants.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Part (b): Decompose",
          "workingLatex": "\\text{Each term becomes a difference}",
          "explanation": "Enables telescoping.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Sum and telescope",
          "workingLatex": "\\sum_{r=1}^{10} \\text{ cancels to give } \\frac{30}{11}",
          "explanation": "Method of differences.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify",
          "workingLatex": "\\text{Check } n=1",
          "explanation": "Numerical confirmation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Method summary",
          "workingLatex": "\\text{Partial fractions } \\Rightarrow \\text{ telescope}",
          "explanation": "Two-step technique.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "\\frac{30}{11}",
          "explanation": "Result.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Exam tip",
          "workingLatex": "\\text{Always show partial fractions first}",
          "explanation": "Mark scheme.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "General",
          "workingLatex": "\\text{Standard FM approach}",
          "explanation": "Technique.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{30}{11}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Series: method of differences",
    "subtopicId": "fm.y2.pure.method-of-differences",
    "questionDiagram": null,
    "id": "fm.y2.pure.method-of-differences.q048",
    "tags": [
      "shifted",
      "two-part",
      "partial-fractions"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "(a) Express $\\dfrac{1}{(r+1)(r+2)}$ in partial fractions.\n(b) Hence find $\\displaystyle\\sum_{r=1}^{8} \\dfrac{1}{(r+1)(r+2)}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Part (a): Set up",
          "workingLatex": "\\frac{1}{(r+1)(r+2)} = \\frac{A}{r+1} + \\frac{B}{r+2}",
          "explanation": "Partial fraction form.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Solve",
          "workingLatex": "A=-\\frac{1}{3},\\; B=\\frac{1}{3}",
          "explanation": "Find constants.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Part (b): Decompose",
          "workingLatex": "\\text{Each term becomes a difference}",
          "explanation": "Enables telescoping.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Sum and telescope",
          "workingLatex": "\\sum_{r=1}^{8} \\text{ cancels to give } \\frac{2}{5}",
          "explanation": "Method of differences.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify",
          "workingLatex": "\\text{Check } n=1",
          "explanation": "Numerical confirmation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Method summary",
          "workingLatex": "\\text{Partial fractions } \\Rightarrow \\text{ telescope}",
          "explanation": "Two-step technique.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "\\frac{2}{5}",
          "explanation": "Result.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Exam tip",
          "workingLatex": "\\text{Always show partial fractions first}",
          "explanation": "Mark scheme.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "General",
          "workingLatex": "\\text{Standard FM approach}",
          "explanation": "Technique.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{2}{5}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Series: method of differences",
    "subtopicId": "fm.y2.pure.method-of-differences",
    "questionDiagram": null,
    "id": "fm.y2.pure.method-of-differences.q049",
    "tags": [
      "scaled-numerator",
      "two-part",
      "partial-fractions"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "(a) Express $\\dfrac{2}{(r+0)(r+1)}$ in partial fractions.\n(b) Hence find $\\displaystyle\\sum_{r=1}^{15} \\dfrac{2}{(r+0)(r+1)}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Part (a): Set up",
          "workingLatex": "\\frac{2}{(r+0)(r+1)} = \\frac{A}{r+0} + \\frac{B}{r+1}",
          "explanation": "Partial fraction form.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Solve",
          "workingLatex": "A=2,\\; B=-2",
          "explanation": "Find constants.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Part (b): Decompose",
          "workingLatex": "\\text{Each term becomes a difference}",
          "explanation": "Enables telescoping.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Sum and telescope",
          "workingLatex": "\\sum_{r=1}^{15} \\text{ cancels to give } \\frac{15}{8}",
          "explanation": "Method of differences.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify",
          "workingLatex": "\\text{Check } n=1",
          "explanation": "Numerical confirmation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Method summary",
          "workingLatex": "\\text{Partial fractions } \\Rightarrow \\text{ telescope}",
          "explanation": "Two-step technique.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "\\frac{15}{8}",
          "explanation": "Result.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Exam tip",
          "workingLatex": "\\text{Always show partial fractions first}",
          "explanation": "Mark scheme.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "General",
          "workingLatex": "\\text{Standard FM approach}",
          "explanation": "Technique.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{15}{8}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Series: method of differences",
    "subtopicId": "fm.y2.pure.method-of-differences",
    "questionDiagram": null,
    "id": "fm.y2.pure.method-of-differences.q050",
    "tags": [
      "gap-2",
      "two-part",
      "partial-fractions"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "(a) Express $\\dfrac{1}{(r+0)(r+2)}$ in partial fractions.\n(b) Hence find $\\displaystyle\\sum_{r=1}^{12} \\dfrac{1}{(r+0)(r+2)}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Part (a): Set up",
          "workingLatex": "\\frac{1}{(r+0)(r+2)} = \\frac{A}{r+0} + \\frac{B}{r+2}",
          "explanation": "Partial fraction form.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Solve",
          "workingLatex": "A=\\frac{1}{2},\\; B=-\\frac{1}{2}",
          "explanation": "Find constants.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Part (b): Decompose",
          "workingLatex": "\\text{Each term becomes a difference}",
          "explanation": "Enables telescoping.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Sum and telescope",
          "workingLatex": "\\sum_{r=1}^{12} \\text{ cancels to give } \\frac{123}{182}",
          "explanation": "Method of differences.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify",
          "workingLatex": "\\text{Check } n=1",
          "explanation": "Numerical confirmation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Method summary",
          "workingLatex": "\\text{Partial fractions } \\Rightarrow \\text{ telescope}",
          "explanation": "Two-step technique.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "\\frac{123}{182}",
          "explanation": "Result.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Exam tip",
          "workingLatex": "\\text{Always show partial fractions first}",
          "explanation": "Mark scheme.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "General",
          "workingLatex": "\\text{Standard FM approach}",
          "explanation": "Technique.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{123}{182}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Series: method of differences",
    "subtopicId": "fm.y2.pure.method-of-differences",
    "questionDiagram": null,
    "id": "fm.y2.pure.method-of-differences.q051",
    "tags": [
      "large-n",
      "odd-terms",
      "telescoping"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Find the exact value of $\\displaystyle\\sum_{r=1}^{25} \\frac{1}{(2r-1)(2r+1)}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Partial fractions",
          "workingLatex": "\\frac{1}{(2r-1)(2r+1)} = \\frac{1}{2}\\left(\\frac{1}{2r-1} - \\frac{1}{2r+1}\\right)",
          "explanation": "Decompose odd-term product.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Telescope",
          "workingLatex": "= \\frac{1}{2}\\left(1 - \\frac{1}{51}\\right)",
          "explanation": "First and last survive.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify",
          "workingLatex": "= \\frac{25}{51}",
          "explanation": "Common denominator.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Verify $n=1$",
          "workingLatex": "\\frac{1}{3}",
          "explanation": "Check.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Expand terms",
          "workingLatex": "\\frac{1}{1 \\cdot 3} + \\frac{1}{3 \\cdot 5} + \\cdots",
          "explanation": "Structure of sum.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Method",
          "workingLatex": "\\text{Method of differences}",
          "explanation": "Core technique.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "\\frac{25}{51}",
          "explanation": "Final value.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Link",
          "workingLatex": "\\text{Related to Leibniz series for } \\pi/4",
          "explanation": "Historical note.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "General",
          "workingLatex": "\\text{Any } \\frac{1}{(ar+b)(ar+c)} \\text{ may telescope}",
          "explanation": "Broader class.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{25}{51}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Series: method of differences",
    "subtopicId": "fm.y2.pure.method-of-differences",
    "questionDiagram": null,
    "id": "fm.y2.pure.method-of-differences.q052",
    "tags": [
      "large-n",
      "telescoping",
      "partial-fractions"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find the exact value of $\\displaystyle\\sum_{r=1}^{50} \\frac{1}{r(r+1)}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Partial fractions",
          "workingLatex": "\\frac{1}{r(r+1)} = \\frac{1}{r} - \\frac{1}{r+1}",
          "explanation": "Decompose into a difference of two simpler fractions.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the sum",
          "workingLatex": "\\sum_{r=1}^{50} \\frac{1}{r(r+1)} = \\sum_{r=1}^{50} \\left(\\frac{1}{r} - \\frac{1}{r+1}\\right)",
          "explanation": "Each term is a difference.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand",
          "workingLatex": "= \\left(1 - \\frac{1}{2}\\right) + \\left(\\frac{1}{2} - \\frac{1}{3}\\right) + \\cdots + \\left(\\frac{1}{50} - \\frac{1}{51}\\right)",
          "explanation": "Write out successive terms.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Telescope",
          "workingLatex": "\\text{Intermediate terms cancel in pairs}",
          "explanation": "This is the method of differences.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Survivors",
          "workingLatex": "= 1 - \\frac{1}{51}",
          "explanation": "Only the first and last terms remain.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify",
          "workingLatex": "= \\frac{50}{51}",
          "explanation": "Combine over a common denominator.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify $n=1$",
          "workingLatex": "\\frac{1}{2} = \\frac{1}{2}",
          "explanation": "Check a small case.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "\\frac{50}{51}",
          "explanation": "Final value.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Partial fractions",
          "workingLatex": "\\frac{1}{r(r+1)}=\\frac{1}{r}-\\frac{1}{r+1}",
          "explanation": "Decompose before summing.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{50}{51}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Series: method of differences",
    "subtopicId": "fm.y2.pure.method-of-differences",
    "questionDiagram": null,
    "id": "fm.y2.pure.method-of-differences.q053",
    "tags": [
      "medium-n",
      "gap-3",
      "telescoping"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Find the exact value of $\\displaystyle\\sum_{r=1}^{15} \\frac{1}{r(r+3)}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Partial fractions",
          "workingLatex": "\\frac{1}{r(r+3)} = \\frac{1}{3}\\left(\\frac{1}{r} - \\frac{1}{r+3}\\right)",
          "explanation": "Decompose with gap 3.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Telescope",
          "workingLatex": "\\text{First three minus last three terms survive}",
          "explanation": "Cancellation with gap 3.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Survivors",
          "workingLatex": "= \\frac{1}{3}\\left(1 + \\frac{1}{2} + \\frac{1}{3} - \\frac{1}{16} - \\frac{1}{17} - \\frac{1}{18}\\right)",
          "explanation": "Collect terms.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify",
          "workingLatex": "= \\frac{4055}{7344}",
          "explanation": "Combine fractions.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify $n=1$",
          "workingLatex": "\\frac{1}{4}",
          "explanation": "Direct check.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Method",
          "workingLatex": "\\text{Partial fractions then telescope}",
          "explanation": "Standard FM approach.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "\\frac{4055}{7344}",
          "explanation": "Final value.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Pattern",
          "workingLatex": "\\text{Gap } k \\Rightarrow k \\text{ terms survive at each end}",
          "explanation": "General rule.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Note",
          "workingLatex": "\\text{Always decompose before summing}",
          "explanation": "Required first step.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{4055}{7344}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Series: method of differences",
    "subtopicId": "fm.y2.pure.method-of-differences",
    "questionDiagram": null,
    "id": "fm.y2.pure.method-of-differences.q054",
    "tags": [
      "medium-n",
      "triple-product",
      "telescoping"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Find the exact value of $\\displaystyle\\sum_{r=1}^{15} \\frac{1}{r(r+1)(r+2)}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Partial fractions",
          "workingLatex": "\\frac{1}{r(r+1)(r+2)} = \\frac{1}{2}\\left(\\frac{1}{r(r+1)} - \\frac{1}{(r+1)(r+2)}\\right)",
          "explanation": "Split into telescoping pairs.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Telescope",
          "workingLatex": "\\sum_{r=1}^{15} = \\frac{1}{2}\\left(\\frac{1}{2} - \\frac{1}{(16)(17)}\\right)",
          "explanation": "Cancel intermediate terms.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify",
          "workingLatex": "= \\frac{135}{544}",
          "explanation": "Final fraction.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Verify $n=1$",
          "workingLatex": "\\frac{1}{6}",
          "explanation": "Direct.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Alternative form",
          "workingLatex": "= \\frac{n(n+3)}{2(n+1)(n+2)}",
          "explanation": "Equivalent closed form.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Technique",
          "workingLatex": "\\text{Repeated partial fractions}",
          "explanation": "Harder decomposition.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "\\frac{135}{544}",
          "explanation": "Final value.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Limit",
          "workingLatex": "\\lim_{n\\to\\infty} = \\frac{1}{4}",
          "explanation": "Infinite sum.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Method",
          "workingLatex": "\\text{Method of differences}",
          "explanation": "Named technique.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{135}{544}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Series: method of differences",
    "subtopicId": "fm.y2.pure.method-of-differences",
    "questionDiagram": null,
    "id": "fm.y2.pure.method-of-differences.q055",
    "tags": [
      "large-n",
      "shifted-index"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Find $\\displaystyle\\sum_{r=2}^{50} \\frac{1}{(r-1)r}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Partial fractions",
          "workingLatex": "\\frac{1}{(r-1)r} = \\frac{1}{r-1} - \\frac{1}{r}",
          "explanation": "Valid for $r \\geq 2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Telescope",
          "workingLatex": "\\sum_{r=2}^{50} = 1 - \\frac{1}{50}",
          "explanation": "First and last terms survive.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify",
          "workingLatex": "= \\frac{49}{50}",
          "explanation": "Final answer.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Verify $n=2$",
          "workingLatex": "\\frac{1}{2}",
          "explanation": "Check.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Note",
          "workingLatex": "\\text{Lower limit } r=2 \\text{ avoids } r=1",
          "explanation": "Domain restriction.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Method",
          "workingLatex": "\\text{Method of differences}",
          "explanation": "Technique.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "\\frac{49}{50}",
          "explanation": "Final value.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Equivalent",
          "workingLatex": "\\text{Same as } 1 - \\frac{1}{n}",
          "explanation": "Simple form.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Application",
          "workingLatex": "\\text{Harmonic-type sums}",
          "explanation": "Context.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{49}{50}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Series: method of differences",
    "subtopicId": "fm.y2.pure.method-of-differences",
    "questionDiagram": null,
    "id": "fm.y2.pure.method-of-differences.q056",
    "tags": [
      "proof",
      "triple-product"
    ],
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "questionText": "Show that $\\displaystyle\\sum_{r=1}^{n} \\frac{1}{r(r+1)(r+2)} = \\frac{n(n+3)}{4(n+1)(n+2)}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Partial fractions",
          "workingLatex": "\\frac{1}{r(r+1)(r+2)} = \\frac{1}{2}\\left(\\frac{1}{r(r+1)} - \\frac{1}{(r+1)(r+2)}\\right)",
          "explanation": "Key decomposition.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Telescope",
          "workingLatex": "\\sum_{r=1}^{n} = \\frac{1}{2}\\left(\\frac{1}{2} - \\frac{1}{(n+1)(n+2)}\\right)",
          "explanation": "Cancel intermediate terms.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Common denominator",
          "workingLatex": "= \\frac{(n+1)(n+2) - 2}{4(n+1)(n+2)}",
          "explanation": "Combine fractions.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Expand numerator",
          "workingLatex": "= \\frac{n^2 + 3n}{4(n+1)(n+2)}",
          "explanation": "Simplify.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Factor",
          "workingLatex": "= \\frac{n(n+3)}{4(n+1)(n+2)}",
          "explanation": "Factorise numerator.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify $n=1$",
          "workingLatex": "\\frac{1}{6} = \\frac{1 \\cdot 4}{4 \\cdot 2 \\cdot 3} = \\frac{4}{24} = \\frac{1}{6}",
          "explanation": "Check small case.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify $n=3$",
          "workingLatex": "\\frac{1}{6}+\\frac{1}{24}+\\frac{1}{60} = \\frac{9}{40}",
          "explanation": "Direct sum.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Formula at $n=3$",
          "workingLatex": "\\frac{3 \\cdot 6}{4 \\cdot 4 \\cdot 5} = \\frac{18}{80} = \\frac{9}{40}",
          "explanation": "Matches.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Proved",
          "workingLatex": "\\text{Telescoping gives the result}",
          "explanation": "Method of differences.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Limit",
          "workingLatex": "\\lim_{n\\to\\infty} = \\frac{1}{4}",
          "explanation": "As $n \\to \\infty$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Technique",
          "workingLatex": "\\text{Nested partial fractions}",
          "explanation": "Harder decomposition.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Exam",
          "workingLatex": "\\text{Show cancellation explicitly}",
          "explanation": "Mark scheme.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Answer",
          "workingLatex": "\\frac{n(n+3)}{4(n+1)(n+2)}",
          "explanation": "Proved form.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\sum_{r=1}^{n} \\frac{1}{r(r+1)(r+2)} = \\frac{n(n+3)}{4(n+1)(n+2)}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Series: method of differences",
    "subtopicId": "fm.y2.pure.method-of-differences",
    "questionDiagram": null,
    "id": "fm.y2.pure.method-of-differences.q057",
    "tags": [
      "proof",
      "limit"
    ],
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "questionText": "Prove that $\\displaystyle\\sum_{r=1}^{n} \\frac{1}{r(r+1)} = \\frac{n}{n+1}$ and hence find $\\displaystyle\\lim_{n\\to\\infty} \\sum_{r=1}^{n} \\frac{1}{r(r+1)}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Decompose",
          "workingLatex": "\\frac{1}{r(r+1)} = \\frac{1}{r} - \\frac{1}{r+1}",
          "explanation": "Partial fractions.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Telescope",
          "workingLatex": "\\sum_{r=1}^{n} = 1 - \\frac{1}{n+1} = \\frac{n}{n+1}",
          "explanation": "Cancel intermediate terms.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Proved",
          "workingLatex": "\\frac{n}{n+1}",
          "explanation": "Required result.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Limit",
          "workingLatex": "\\lim_{n\\to\\infty} \\frac{n}{n+1} = 1",
          "explanation": "As $n \\to \\infty$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Convergence",
          "workingLatex": "\\text{The infinite series sums to } 1",
          "explanation": "Result.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Base case",
          "workingLatex": "n=1: \\frac{1}{2}",
          "explanation": "Verified.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Method",
          "workingLatex": "\\text{Method of differences}",
          "explanation": "Named technique.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Application",
          "workingLatex": "\\text{Foundation for harder sums}",
          "explanation": "Building block.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Contrast",
          "workingLatex": "\\sum \\frac{1}{r} \\text{ diverges}",
          "explanation": "Harmonic series.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Key insight",
          "workingLatex": "\\text{Write as difference to telescope}",
          "explanation": "Core idea.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Exam",
          "workingLatex": "\\text{Show all cancellation clearly}",
          "explanation": "Mark scheme.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "General",
          "workingLatex": "\\frac{1}{r(r+k)} \\text{ similar}",
          "explanation": "Extension.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Answer",
          "workingLatex": "\\frac{n}{n+1};\\; \\lim = 1",
          "explanation": "Both parts.",
          "diagram": null
        }
      ],
      "finalAnswer": "Proved $\\displaystyle\\sum_{r=1}^{n} \\frac{1}{r(r+1)} = \\frac{n}{n+1}$; limit $= 1$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Series: method of differences",
    "subtopicId": "fm.y2.pure.method-of-differences",
    "questionDiagram": null,
    "id": "fm.y2.pure.method-of-differences.q058",
    "tags": [
      "two-part",
      "triple-product"
    ],
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "questionText": "(a) Express $\\dfrac{1}{r(r+1)(r+2)}$ in partial fractions as a telescoping difference.\n(b) Hence evaluate $\\displaystyle\\sum_{r=1}^{10} \\frac{1}{r(r+1)(r+2)}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Part (a)",
          "workingLatex": "\\frac{1}{r(r+1)(r+2)} = \\frac{1}{2}\\left(\\frac{1}{r(r+1)} - \\frac{1}{(r+1)(r+2)}\\right)",
          "explanation": "Telescoping decomposition.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Part (b): Sum",
          "workingLatex": "\\sum_{r=1}^{10}",
          "explanation": "Apply from $r=1$ to $10$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Telescope",
          "workingLatex": "= \\frac{1}{2}\\left(\\frac{1}{2} - \\frac{1}{11 \\cdot 12}\\right)",
          "explanation": "First minus last.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify",
          "workingLatex": "= \\frac{1}{2}\\left(\\frac{1}{2} - \\frac{1}{132}\\right) = \\frac{1}{2} \\cdot \\frac{65}{132} = \\frac{65}{264}",
          "explanation": "Calculate.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify",
          "workingLatex": "\\text{Direct addition confirms}",
          "explanation": "Numerical check.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Method",
          "workingLatex": "\\text{Partial fractions then telescope}",
          "explanation": "Two-step FM technique.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "General",
          "workingLatex": "\\text{Works for any upper limit } n",
          "explanation": "General formula.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Limit",
          "workingLatex": "n=10 \\text{ case evaluated}",
          "explanation": "Specific answer.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\frac{65}{264}",
          "explanation": "Final value.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Technique",
          "workingLatex": "\\text{Method of differences}",
          "explanation": "Core method.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Note",
          "workingLatex": "\\text{Triple products need nested PF}",
          "explanation": "Harder type.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Link",
          "workingLatex": "\\text{Partial fractions from A-Level}",
          "explanation": "Prior knowledge.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Final",
          "workingLatex": "\\frac{65}{264}",
          "explanation": "Answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{65}{264}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Series: method of differences",
    "subtopicId": "fm.y2.pure.method-of-differences",
    "questionDiagram": null,
    "id": "fm.y2.pure.method-of-differences.q059",
    "tags": [
      "shifted",
      "triple-product"
    ],
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "questionText": "Find $\\displaystyle\\sum_{r=1}^{n} \\frac{1}{(r+1)(r+2)(r+3)}$ using partial fractions and the method of differences.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Shift index",
          "workingLatex": "\\text{Let } k=r+1 \\text{; sum from } k=2 \\text{ to } n+1",
          "explanation": "Reindex for clarity.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Partial fractions",
          "workingLatex": "\\frac{1}{k(k+1)(k+2)} = \\frac{1}{2}\\left(\\frac{1}{k(k+1)} - \\frac{1}{(k+1)(k+2)}\\right)",
          "explanation": "Same triple-product form.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Telescope",
          "workingLatex": "\\sum_{k=2}^{n+1} = \\frac{1}{2}\\left(\\frac{1}{6} - \\frac{1}{(n+2)(n+3)}\\right)",
          "explanation": "First and last survive.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify",
          "workingLatex": "= \\frac{1}{2}\\left(\\frac{1}{6} - \\frac{1}{(n+2)(n+3)}\\right)",
          "explanation": "Telescoped form.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify $n=1$",
          "workingLatex": "\\frac{1}{2 \\cdot 3 \\cdot 4} = \\frac{1}{24}",
          "explanation": "Direct: one term.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Formula check",
          "workingLatex": "\\frac{1}{2}\\left(\\frac{1}{6}-\\frac{1}{12}\\right)=\\frac{1}{24}",
          "explanation": "Matches.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Method",
          "workingLatex": "\\text{Partial fractions then telescope}",
          "explanation": "Standard FM approach.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Technique",
          "workingLatex": "\\text{Method of differences}",
          "explanation": "Named method.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "General",
          "workingLatex": "\\text{Shifted triple products work similarly}",
          "explanation": "Pattern.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Limit",
          "workingLatex": "\\lim_{n\\to\\infty} = \\frac{1}{12}",
          "explanation": "As $n \\to \\infty$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Exam",
          "workingLatex": "\\text{Show decomposition clearly}",
          "explanation": "Marks available.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Link",
          "workingLatex": "\\text{Same as } \\sum \\frac{1}{r(r+1)(r+2)} \\text{ with shift}",
          "explanation": "Related sum.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Answer",
          "workingLatex": "\\frac{1}{2}\\left(\\frac{1}{6}-\\frac{1}{(n+2)(n+3)}\\right)",
          "explanation": "Closed form.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\sum_{r=1}^{n} \\frac{1}{(r+1)(r+2)(r+3)} = \\frac{1}{2}\\left(\\frac{1}{6}-\\frac{1}{(n+2)(n+3)}\\right)$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Series: method of differences",
    "subtopicId": "fm.y2.pure.method-of-differences",
    "questionDiagram": null,
    "id": "fm.y2.pure.method-of-differences.q060",
    "tags": [
      "odd-terms",
      "application"
    ],
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "questionText": "The sum $\\displaystyle\\sum_{r=1}^{n} \\frac{1}{(2r-1)(2r+1)}$ can be used to estimate $\\dfrac{\\pi}{4}$. Find this sum and state its value when $n=10$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Partial fractions",
          "workingLatex": "\\frac{1}{(2r-1)(2r+1)} = \\frac{1}{2}\\left(\\frac{1}{2r-1} - \\frac{1}{2r+1}\\right)",
          "explanation": "Decompose.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Telescope",
          "workingLatex": "\\sum_{r=1}^{n} = \\frac{n}{2n+1}",
          "explanation": "Standard result.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute $n=10$",
          "workingLatex": "= \\frac{10}{21}",
          "explanation": "Specific value.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Leibniz link",
          "workingLatex": "\\frac{\\pi}{4} = 1 - \\frac{1}{3} + \\frac{1}{5} - \\cdots",
          "explanation": "Alternating version.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "This sum",
          "workingLatex": "\\text{All positive terms } \\frac{1}{1 \\cdot 3} + \\frac{1}{3 \\cdot 5} + \\cdots",
          "explanation": "Related series.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify $n=10$",
          "workingLatex": "\\frac{10}{21} \\approx 0.476",
          "explanation": "Numerical.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Method",
          "workingLatex": "\\text{Method of differences}",
          "explanation": "Technique.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "General",
          "workingLatex": "\\frac{n}{2n+1} \\to \\frac{1}{2}",
          "explanation": "Limit as $n \\to \\infty$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer general",
          "workingLatex": "\\frac{n}{2n+1}",
          "explanation": "Formula.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Answer $n=10$",
          "workingLatex": "\\frac{10}{21}",
          "explanation": "Specific.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Context",
          "workingLatex": "\\text{Odd-term telescoping}",
          "explanation": "Standard type.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "FM",
          "workingLatex": "\\text{Core Pure 2}",
          "explanation": "Topic.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Final",
          "workingLatex": "\\frac{10}{21}",
          "explanation": "Answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\sum_{r=1}^{10} \\frac{1}{(2r-1)(2r+1)} = \\frac{10}{21}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Series: method of differences",
    "subtopicId": "fm.y2.pure.method-of-differences",
    "questionDiagram": null,
    "id": "fm.y2.pure.method-of-differences.q061",
    "tags": [
      "squares",
      "squares",
      "explicit-difference"
    ],
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "written",
    "questionText": "Evaluate $\\displaystyle\\sum_{r=1}^{5} \\left(\\frac{1}{r^2} - \\frac{1}{(r+1)^2}\\right)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise form",
          "workingLatex": "\\frac{1}{r^2} - \\frac{1}{(r+1)^2}",
          "explanation": "Difference of squares reciprocals.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Telescope",
          "workingLatex": "\\sum_{r=1}^{5} = 1 - \\frac{1}{(6)^2}",
          "explanation": "Cancel intermediate terms.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify",
          "workingLatex": "= \\frac{35}{36}",
          "explanation": "Final value.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Limit",
          "workingLatex": "\\lim_{n\\to\\infty} = 1",
          "explanation": "Infinite sum converges.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify $n=1$",
          "workingLatex": "1 - \\frac{1}{4} = \\frac{3}{4}",
          "explanation": "Check.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Not",
          "workingLatex": "\\sum \\frac{1}{r^2} \\text{ itself}",
          "explanation": "Different from Basel problem.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Method",
          "workingLatex": "\\text{Explicit difference — no partial fractions}",
          "explanation": "Direct telescope.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "\\frac{35}{36}",
          "explanation": "Finite sum.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Application",
          "workingLatex": "\\text{Variant of method of differences}",
          "explanation": "Extension.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Partial fractions",
          "workingLatex": "\\frac{1}{r(r+1)}=\\frac{1}{r}-\\frac{1}{r+1}",
          "explanation": "Decompose before summing.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Method of differences",
          "workingLatex": "u_r-u_{r+1}\\text{ form telescopes}",
          "explanation": "Core idea.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Telescoping",
          "workingLatex": "\\text{Intermediate terms cancel}",
          "explanation": "Write out terms to see cancellation.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Survivors",
          "workingLatex": "\\text{First and last terms remain}",
          "explanation": "After cancellation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{35}{36}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Series: method of differences",
    "subtopicId": "fm.y2.pure.method-of-differences",
    "questionDiagram": null,
    "id": "fm.y2.pure.method-of-differences.q062",
    "tags": [
      "squares",
      "squares",
      "explicit-difference"
    ],
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "written",
    "questionText": "Evaluate $\\displaystyle\\sum_{r=1}^{10} \\left(\\frac{1}{r^2} - \\frac{1}{(r+1)^2}\\right)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise form",
          "workingLatex": "\\frac{1}{r^2} - \\frac{1}{(r+1)^2}",
          "explanation": "Difference of squares reciprocals.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Telescope",
          "workingLatex": "\\sum_{r=1}^{10} = 1 - \\frac{1}{(11)^2}",
          "explanation": "Cancel intermediate terms.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify",
          "workingLatex": "= \\frac{120}{121}",
          "explanation": "Final value.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Limit",
          "workingLatex": "\\lim_{n\\to\\infty} = 1",
          "explanation": "Infinite sum converges.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify $n=1$",
          "workingLatex": "1 - \\frac{1}{4} = \\frac{3}{4}",
          "explanation": "Check.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Not",
          "workingLatex": "\\sum \\frac{1}{r^2} \\text{ itself}",
          "explanation": "Different from Basel problem.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Method",
          "workingLatex": "\\text{Explicit difference — no partial fractions}",
          "explanation": "Direct telescope.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "\\frac{120}{121}",
          "explanation": "Finite sum.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Application",
          "workingLatex": "\\text{Variant of method of differences}",
          "explanation": "Extension.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Partial fractions",
          "workingLatex": "\\frac{1}{r(r+1)}=\\frac{1}{r}-\\frac{1}{r+1}",
          "explanation": "Decompose before summing.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Method of differences",
          "workingLatex": "u_r-u_{r+1}\\text{ form telescopes}",
          "explanation": "Core idea.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Telescoping",
          "workingLatex": "\\text{Intermediate terms cancel}",
          "explanation": "Write out terms to see cancellation.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Survivors",
          "workingLatex": "\\text{First and last terms remain}",
          "explanation": "After cancellation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{120}{121}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Series: method of differences",
    "subtopicId": "fm.y2.pure.method-of-differences",
    "questionDiagram": null,
    "id": "fm.y2.pure.method-of-differences.q063",
    "tags": [
      "medium-n",
      "telescoping",
      "partial-fractions"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find the exact value of $\\displaystyle\\sum_{r=1}^{30} \\frac{1}{r(r+1)}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Partial fractions",
          "workingLatex": "\\frac{1}{r(r+1)} = \\frac{1}{r} - \\frac{1}{r+1}",
          "explanation": "Decompose into a difference of two simpler fractions.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the sum",
          "workingLatex": "\\sum_{r=1}^{30} \\frac{1}{r(r+1)} = \\sum_{r=1}^{30} \\left(\\frac{1}{r} - \\frac{1}{r+1}\\right)",
          "explanation": "Each term is a difference.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand",
          "workingLatex": "= \\left(1 - \\frac{1}{2}\\right) + \\left(\\frac{1}{2} - \\frac{1}{3}\\right) + \\cdots + \\left(\\frac{1}{30} - \\frac{1}{31}\\right)",
          "explanation": "Write out successive terms.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Telescope",
          "workingLatex": "\\text{Intermediate terms cancel in pairs}",
          "explanation": "This is the method of differences.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Survivors",
          "workingLatex": "= 1 - \\frac{1}{31}",
          "explanation": "Only the first and last terms remain.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify",
          "workingLatex": "= \\frac{30}{31}",
          "explanation": "Combine over a common denominator.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify $n=1$",
          "workingLatex": "\\frac{1}{2} = \\frac{1}{2}",
          "explanation": "Check a small case.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "\\frac{30}{31}",
          "explanation": "Final value.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Partial fractions",
          "workingLatex": "\\frac{1}{r(r+1)}=\\frac{1}{r}-\\frac{1}{r+1}",
          "explanation": "Decompose before summing.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{30}{31}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Series: method of differences",
    "subtopicId": "fm.y2.pure.method-of-differences",
    "questionDiagram": null,
    "id": "fm.y2.pure.method-of-differences.q064",
    "tags": [
      "medium-n",
      "telescoping",
      "gap-2"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find the exact value of $\\displaystyle\\sum_{r=1}^{15} \\frac{1}{r(r+2)}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Partial fractions",
          "workingLatex": "\\frac{1}{r(r+2)} = \\frac{1}{2}\\left(\\frac{1}{r} - \\frac{1}{r+2}\\right)",
          "explanation": "Decompose with a gap of 2.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the sum",
          "workingLatex": "\\sum_{r=1}^{15} \\frac{1}{r(r+2)} = \\frac{1}{2}\\sum_{r=1}^{15} \\left(\\frac{1}{r} - \\frac{1}{r+2}\\right)",
          "explanation": "Factor out $\\frac{1}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Telescope",
          "workingLatex": "\\text{First two minus last two terms survive}",
          "explanation": "Cancellation pattern.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Survivors",
          "workingLatex": "= \\frac{1}{2}\\left(1 + \\frac{1}{2} - \\frac{1}{16} - \\frac{1}{17}\\right)",
          "explanation": "Collect remaining terms.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "= \\frac{375}{544}",
          "explanation": "Combine fractions.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify $n=1$",
          "workingLatex": "\\frac{1}{6}",
          "explanation": "Direct evaluation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Method",
          "workingLatex": "\\text{Method of differences via partial fractions}",
          "explanation": "Key technique.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "\\frac{375}{544}",
          "explanation": "Final value.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Partial fractions",
          "workingLatex": "\\frac{1}{r(r+1)}=\\frac{1}{r}-\\frac{1}{r+1}",
          "explanation": "Decompose before summing.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{375}{544}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Series: method of differences",
    "subtopicId": "fm.y2.pure.method-of-differences",
    "questionDiagram": null,
    "id": "fm.y2.pure.method-of-differences.q065",
    "tags": [
      "medium-n",
      "odd-terms",
      "telescoping"
    ],
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "written",
    "questionText": "Find the exact value of $\\displaystyle\\sum_{r=1}^{12} \\frac{1}{(2r-1)(2r+1)}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Partial fractions",
          "workingLatex": "\\frac{1}{(2r-1)(2r+1)} = \\frac{1}{2}\\left(\\frac{1}{2r-1} - \\frac{1}{2r+1}\\right)",
          "explanation": "Decompose odd-term product.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Telescope",
          "workingLatex": "= \\frac{1}{2}\\left(1 - \\frac{1}{25}\\right)",
          "explanation": "First and last survive.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify",
          "workingLatex": "= \\frac{12}{25}",
          "explanation": "Common denominator.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Verify $n=1$",
          "workingLatex": "\\frac{1}{3}",
          "explanation": "Check.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Expand terms",
          "workingLatex": "\\frac{1}{1 \\cdot 3} + \\frac{1}{3 \\cdot 5} + \\cdots",
          "explanation": "Structure of sum.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Method",
          "workingLatex": "\\text{Method of differences}",
          "explanation": "Core technique.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "\\frac{12}{25}",
          "explanation": "Final value.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Link",
          "workingLatex": "\\text{Related to Leibniz series for } \\pi/4",
          "explanation": "Historical note.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "General",
          "workingLatex": "\\text{Any } \\frac{1}{(ar+b)(ar+c)} \\text{ may telescope}",
          "explanation": "Broader class.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Partial fractions",
          "workingLatex": "\\frac{1}{r(r+1)}=\\frac{1}{r}-\\frac{1}{r+1}",
          "explanation": "Decompose before summing.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Method of differences",
          "workingLatex": "u_r-u_{r+1}\\text{ form telescopes}",
          "explanation": "Core idea.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Telescoping",
          "workingLatex": "\\text{Intermediate terms cancel}",
          "explanation": "Write out terms to see cancellation.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Survivors",
          "workingLatex": "\\text{First and last terms remain}",
          "explanation": "After cancellation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{12}{25}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Series: method of differences",
    "subtopicId": "fm.y2.pure.method-of-differences",
    "questionDiagram": null,
    "id": "fm.y2.pure.method-of-differences.q066",
    "tags": [
      "large-n",
      "gap-3",
      "telescoping"
    ],
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "written",
    "questionText": "Find the exact value of $\\displaystyle\\sum_{r=1}^{20} \\frac{1}{r(r+3)}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Partial fractions",
          "workingLatex": "\\frac{1}{r(r+3)} = \\frac{1}{3}\\left(\\frac{1}{r} - \\frac{1}{r+3}\\right)",
          "explanation": "Decompose with gap 3.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Telescope",
          "workingLatex": "\\text{First three minus last three terms survive}",
          "explanation": "Cancellation with gap 3.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Survivors",
          "workingLatex": "= \\frac{1}{3}\\left(1 + \\frac{1}{2} + \\frac{1}{3} - \\frac{1}{21} - \\frac{1}{22} - \\frac{1}{23}\\right)",
          "explanation": "Collect terms.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify",
          "workingLatex": "= \\frac{3005}{5313}",
          "explanation": "Combine fractions.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify $n=1$",
          "workingLatex": "\\frac{1}{4}",
          "explanation": "Direct check.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Method",
          "workingLatex": "\\text{Partial fractions then telescope}",
          "explanation": "Standard FM approach.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "\\frac{3005}{5313}",
          "explanation": "Final value.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Pattern",
          "workingLatex": "\\text{Gap } k \\Rightarrow k \\text{ terms survive at each end}",
          "explanation": "General rule.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Note",
          "workingLatex": "\\text{Always decompose before summing}",
          "explanation": "Required first step.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Partial fractions",
          "workingLatex": "\\frac{1}{r(r+1)}=\\frac{1}{r}-\\frac{1}{r+1}",
          "explanation": "Decompose before summing.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Method of differences",
          "workingLatex": "u_r-u_{r+1}\\text{ form telescopes}",
          "explanation": "Core idea.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Telescoping",
          "workingLatex": "\\text{Intermediate terms cancel}",
          "explanation": "Write out terms to see cancellation.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Survivors",
          "workingLatex": "\\text{First and last terms remain}",
          "explanation": "After cancellation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{3005}{5313}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Series: method of differences",
    "subtopicId": "fm.y2.pure.method-of-differences",
    "questionDiagram": null,
    "id": "fm.y2.pure.method-of-differences.q067",
    "tags": [
      "large-n",
      "triple-product",
      "telescoping"
    ],
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "written",
    "questionText": "Find the exact value of $\\displaystyle\\sum_{r=1}^{20} \\frac{1}{r(r+1)(r+2)}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Partial fractions",
          "workingLatex": "\\frac{1}{r(r+1)(r+2)} = \\frac{1}{2}\\left(\\frac{1}{r(r+1)} - \\frac{1}{(r+1)(r+2)}\\right)",
          "explanation": "Split into telescoping pairs.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Telescope",
          "workingLatex": "\\sum_{r=1}^{20} = \\frac{1}{2}\\left(\\frac{1}{2} - \\frac{1}{(21)(22)}\\right)",
          "explanation": "Cancel intermediate terms.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify",
          "workingLatex": "= \\frac{115}{462}",
          "explanation": "Final fraction.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Verify $n=1$",
          "workingLatex": "\\frac{1}{6}",
          "explanation": "Direct.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Alternative form",
          "workingLatex": "= \\frac{n(n+3)}{2(n+1)(n+2)}",
          "explanation": "Equivalent closed form.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Technique",
          "workingLatex": "\\text{Repeated partial fractions}",
          "explanation": "Harder decomposition.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "\\frac{115}{462}",
          "explanation": "Final value.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Limit",
          "workingLatex": "\\lim_{n\\to\\infty} = \\frac{1}{4}",
          "explanation": "Infinite sum.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Method",
          "workingLatex": "\\text{Method of differences}",
          "explanation": "Named technique.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Partial fractions",
          "workingLatex": "\\frac{1}{r(r+1)}=\\frac{1}{r}-\\frac{1}{r+1}",
          "explanation": "Decompose before summing.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Method of differences",
          "workingLatex": "u_r-u_{r+1}\\text{ form telescopes}",
          "explanation": "Core idea.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Telescoping",
          "workingLatex": "\\text{Intermediate terms cancel}",
          "explanation": "Write out terms to see cancellation.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Survivors",
          "workingLatex": "\\text{First and last terms remain}",
          "explanation": "After cancellation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{115}{462}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Series: method of differences",
    "subtopicId": "fm.y2.pure.method-of-differences",
    "questionDiagram": null,
    "id": "fm.y2.pure.method-of-differences.q068",
    "tags": [
      "large-n",
      "shifted-index"
    ],
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "written",
    "questionText": "Find $\\displaystyle\\sum_{r=2}^{30} \\frac{1}{(r-1)r}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Partial fractions",
          "workingLatex": "\\frac{1}{(r-1)r} = \\frac{1}{r-1} - \\frac{1}{r}",
          "explanation": "Valid for $r \\geq 2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Telescope",
          "workingLatex": "\\sum_{r=2}^{30} = 1 - \\frac{1}{30}",
          "explanation": "First and last terms survive.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify",
          "workingLatex": "= \\frac{29}{30}",
          "explanation": "Final answer.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Verify $n=2$",
          "workingLatex": "\\frac{1}{2}",
          "explanation": "Check.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Note",
          "workingLatex": "\\text{Lower limit } r=2 \\text{ avoids } r=1",
          "explanation": "Domain restriction.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Method",
          "workingLatex": "\\text{Method of differences}",
          "explanation": "Technique.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "\\frac{29}{30}",
          "explanation": "Final value.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Equivalent",
          "workingLatex": "\\text{Same as } 1 - \\frac{1}{n}",
          "explanation": "Simple form.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Application",
          "workingLatex": "\\text{Harmonic-type sums}",
          "explanation": "Context.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Partial fractions",
          "workingLatex": "\\frac{1}{r(r+1)}=\\frac{1}{r}-\\frac{1}{r+1}",
          "explanation": "Decompose before summing.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Method of differences",
          "workingLatex": "u_r-u_{r+1}\\text{ form telescopes}",
          "explanation": "Core idea.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Telescoping",
          "workingLatex": "\\text{Intermediate terms cancel}",
          "explanation": "Write out terms to see cancellation.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Survivors",
          "workingLatex": "\\text{First and last terms remain}",
          "explanation": "After cancellation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{29}{30}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Series: method of differences",
    "subtopicId": "fm.y2.pure.method-of-differences",
    "questionDiagram": null,
    "id": "fm.y2.pure.method-of-differences.q069",
    "tags": [
      "large-n",
      "scaled"
    ],
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "written",
    "questionText": "Find $\\displaystyle\\sum_{r=1}^{50} \\frac{1}{4r(r+1)}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rewrite",
          "workingLatex": "\\frac{1}{4r(r+1)} = \\frac{1}{4}\\left(\\frac{1}{r} - \\frac{1}{r+1}\\right)",
          "explanation": "Factor and decompose.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Telescope",
          "workingLatex": "= \\frac{1}{4}\\left(1 - \\frac{1}{51}\\right)",
          "explanation": "Standard cancellation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify",
          "workingLatex": "= \\frac{25}{102}",
          "explanation": "Final fraction.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Verify $n=1$",
          "workingLatex": "\\frac{1}{8}",
          "explanation": "Check.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Method",
          "workingLatex": "\\text{Scale a known telescoping sum}",
          "explanation": "Technique.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\frac{25}{102}",
          "explanation": "Final value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "General",
          "workingLatex": "\\frac{1}{kr(r+1)} \\text{ telescopes similarly}",
          "explanation": "Extension.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Key",
          "workingLatex": "\\text{Partial fractions first}",
          "explanation": "Always decompose.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "FM context",
          "workingLatex": "\\text{Core Pure 2 series}",
          "explanation": "Topic link.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Partial fractions",
          "workingLatex": "\\frac{1}{r(r+1)}=\\frac{1}{r}-\\frac{1}{r+1}",
          "explanation": "Decompose before summing.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Method of differences",
          "workingLatex": "u_r-u_{r+1}\\text{ form telescopes}",
          "explanation": "Core idea.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Telescoping",
          "workingLatex": "\\text{Intermediate terms cancel}",
          "explanation": "Write out terms to see cancellation.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Survivors",
          "workingLatex": "\\text{First and last terms remain}",
          "explanation": "After cancellation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{25}{102}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Series: method of differences",
    "subtopicId": "fm.y2.pure.method-of-differences",
    "questionDiagram": null,
    "id": "fm.y2.pure.method-of-differences.q070",
    "tags": [
      "combined",
      "proof"
    ],
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "questionText": "Explain why the method of differences works for $\\displaystyle\\sum_{r=1}^{n} \\frac{1}{r(r+1)}$, and use it to find $\\displaystyle\\sum_{r=1}^{20} \\frac{1}{r(r+2)} + \\sum_{r=1}^{20} \\frac{1}{r(r+1)}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Method of differences",
          "workingLatex": "\\frac{1}{r(r+1)} = \\frac{1}{r} - \\frac{1}{r+1}",
          "explanation": "Each term is a difference $u_r - u_{r+1}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Why it works",
          "workingLatex": "\\text{Intermediate $u_r$ terms cancel consecutively}",
          "explanation": "Telescoping.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "First sum",
          "workingLatex": "\\sum_{r=1}^{20} \\frac{1}{r(r+1)} = \\frac{20}{21}",
          "explanation": "Standard result.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Second sum",
          "workingLatex": "\\sum_{r=1}^{20} \\frac{1}{r(r+2)} = \\frac{1}{2}\\left(\\frac{3}{2}-\\frac{1}{21}-\\frac{1}{22}\\right)",
          "explanation": "Gap-2 telescoping.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify second",
          "workingLatex": "= \\frac{1}{2} \\cdot \\frac{693-22-21}{462} = \\frac{325}{462}",
          "explanation": "Calculate.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Add both",
          "workingLatex": "\\frac{20}{21} + \\frac{325}{462}",
          "explanation": "Common denominator 462.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compute",
          "workingLatex": "= \\frac{440+325}{462} = \\frac{765}{462} = \\frac{255}{154}",
          "explanation": "Simplify.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify components",
          "workingLatex": "\\text{Check each sum separately}",
          "explanation": "Sanity check.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Method summary",
          "workingLatex": "\\text{Partial fractions enable telescoping}",
          "explanation": "Key insight.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "General",
          "workingLatex": "\\text{Any } \\frac{1}{r(r+k)} \\text{ works similarly}",
          "explanation": "Extension.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "FM context",
          "workingLatex": "\\text{Core Pure 2 series}",
          "explanation": "Topic.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Exam tip",
          "workingLatex": "\\text{Show cancellation explicitly}",
          "explanation": "Marks.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Answer",
          "workingLatex": "\\frac{255}{154}",
          "explanation": "Combined sum.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\sum_{r=1}^{20} \\frac{1}{r(r+2)} + \\sum_{r=1}^{20} \\frac{1}{r(r+1)} = \\frac{255}{154}$"
    }
  }
];
