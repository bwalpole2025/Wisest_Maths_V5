import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "De Moivre's theorem",
    "subtopicId": "fm.y2.pure.de-moivre",
    "questionDiagram": null,
    "id": "fm.y2.pure.de-moivre.q001",
    "tags": [
      "powers"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Given $z = 2e^{i\\frac{\\pi}{6}}$, find $z^{2}$ in the form $re^{i\\theta}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "De Moivre's theorem",
          "workingLatex": "(re^{i\\theta})^{n} = r^{n}e^{in\\theta}",
          "explanation": "Raise modulus to power $n$; multiply argument by $n$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Given",
          "workingLatex": "z = 2e^{i\\frac{\\pi}{6}}",
          "explanation": "Exponential form.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Modulus power",
          "workingLatex": "r^{2} = 4",
          "explanation": "Compute $r^n$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Argument multiple",
          "workingLatex": "n\\theta = 2 \\times \\frac{\\pi}{6} = \\frac{\\pi}{3}",
          "explanation": "Multiply argument by $n$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Result",
          "workingLatex": "z^{2} = 4e^{i\\frac{\\pi}{3}}",
          "explanation": "De Moivre form.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify range",
          "workingLatex": "\\text{Adjust to } (-\\pi,\\pi] \\text{ if needed}",
          "explanation": "Principal argument may need adjustment.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z^{2} = 4e^{i\\frac{\\pi}{3}}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "De Moivre's theorem",
    "subtopicId": "fm.y2.pure.de-moivre",
    "questionDiagram": null,
    "id": "fm.y2.pure.de-moivre.q002",
    "tags": [
      "powers"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Given $z = 3e^{i\\frac{\\pi}{4}}$, find $z^{2}$ in the form $re^{i\\theta}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "De Moivre's theorem",
          "workingLatex": "(re^{i\\theta})^{n} = r^{n}e^{in\\theta}",
          "explanation": "Raise modulus to power $n$; multiply argument by $n$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Given",
          "workingLatex": "z = 3e^{i\\frac{\\pi}{4}}",
          "explanation": "Exponential form.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Modulus power",
          "workingLatex": "r^{2} = 9",
          "explanation": "Compute $r^n$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Argument multiple",
          "workingLatex": "n\\theta = 2 \\times \\frac{\\pi}{4} = \\frac{\\pi}{2}",
          "explanation": "Multiply argument by $n$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Result",
          "workingLatex": "z^{2} = 9e^{i\\frac{\\pi}{2}}",
          "explanation": "De Moivre form.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify range",
          "workingLatex": "\\text{Adjust to } (-\\pi,\\pi] \\text{ if needed}",
          "explanation": "Principal argument may need adjustment.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z^{2} = 9e^{i\\frac{\\pi}{2}}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "De Moivre's theorem",
    "subtopicId": "fm.y2.pure.de-moivre",
    "questionDiagram": null,
    "id": "fm.y2.pure.de-moivre.q003",
    "tags": [
      "powers"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Given $z = 2e^{i\\frac{\\pi}{3}}$, find $z^{3}$ in the form $re^{i\\theta}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "De Moivre's theorem",
          "workingLatex": "(re^{i\\theta})^{n} = r^{n}e^{in\\theta}",
          "explanation": "Raise modulus to power $n$; multiply argument by $n$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Given",
          "workingLatex": "z = 2e^{i\\frac{\\pi}{3}}",
          "explanation": "Exponential form.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Modulus power",
          "workingLatex": "r^{3} = 8",
          "explanation": "Compute $r^n$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Argument multiple",
          "workingLatex": "n\\theta = 3 \\times \\frac{\\pi}{3} = \\pi",
          "explanation": "Multiply argument by $n$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Result",
          "workingLatex": "z^{3} = 8e^{i\\pi}",
          "explanation": "De Moivre form.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify range",
          "workingLatex": "\\text{Adjust to } (-\\pi,\\pi] \\text{ if needed}",
          "explanation": "Principal argument may need adjustment.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z^{3} = 8e^{i\\pi}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "De Moivre's theorem",
    "subtopicId": "fm.y2.pure.de-moivre",
    "questionDiagram": null,
    "id": "fm.y2.pure.de-moivre.q004",
    "tags": [
      "powers"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Given $z = 4e^{i\\frac{\\pi}{2}}$, find $z^{2}$ in the form $re^{i\\theta}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "De Moivre's theorem",
          "workingLatex": "(re^{i\\theta})^{n} = r^{n}e^{in\\theta}",
          "explanation": "Raise modulus to power $n$; multiply argument by $n$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Given",
          "workingLatex": "z = 4e^{i\\frac{\\pi}{2}}",
          "explanation": "Exponential form.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Modulus power",
          "workingLatex": "r^{2} = 16",
          "explanation": "Compute $r^n$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Argument multiple",
          "workingLatex": "n\\theta = 2 \\times \\frac{\\pi}{2} = \\pi",
          "explanation": "Multiply argument by $n$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Result",
          "workingLatex": "z^{2} = 16e^{i\\pi}",
          "explanation": "De Moivre form.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify range",
          "workingLatex": "\\text{Adjust to } (-\\pi,\\pi] \\text{ if needed}",
          "explanation": "Principal argument may need adjustment.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z^{2} = 16e^{i\\pi}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "De Moivre's theorem",
    "subtopicId": "fm.y2.pure.de-moivre",
    "questionDiagram": null,
    "id": "fm.y2.pure.de-moivre.q005",
    "tags": [
      "powers"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Given $z = 5e^{i0}$, find $z^{2}$ in the form $re^{i\\theta}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "De Moivre's theorem",
          "workingLatex": "(re^{i\\theta})^{n} = r^{n}e^{in\\theta}",
          "explanation": "Raise modulus to power $n$; multiply argument by $n$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Given",
          "workingLatex": "z = 5e^{i0}",
          "explanation": "Exponential form.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Modulus power",
          "workingLatex": "r^{2} = 25",
          "explanation": "Compute $r^n$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Argument multiple",
          "workingLatex": "n\\theta = 2 \\times 0 = 0",
          "explanation": "Multiply argument by $n$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Result",
          "workingLatex": "z^{2} = 25e^{i0}",
          "explanation": "De Moivre form.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify range",
          "workingLatex": "\\text{Adjust to } (-\\pi,\\pi] \\text{ if needed}",
          "explanation": "Principal argument may need adjustment.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z^{2} = 25e^{i0}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "De Moivre's theorem",
    "subtopicId": "fm.y2.pure.de-moivre",
    "questionDiagram": null,
    "id": "fm.y2.pure.de-moivre.q006",
    "tags": [
      "powers"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Given $z = 2e^{i\\frac{\\pi}{4}}$, find $z^{3}$ in the form $re^{i\\theta}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "De Moivre's theorem",
          "workingLatex": "(re^{i\\theta})^{n} = r^{n}e^{in\\theta}",
          "explanation": "Raise modulus to power $n$; multiply argument by $n$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Given",
          "workingLatex": "z = 2e^{i\\frac{\\pi}{4}}",
          "explanation": "Exponential form.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Modulus power",
          "workingLatex": "r^{3} = 8",
          "explanation": "Compute $r^n$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Argument multiple",
          "workingLatex": "n\\theta = 3 \\times \\frac{\\pi}{4} = \\frac{3\\pi}{4}",
          "explanation": "Multiply argument by $n$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Result",
          "workingLatex": "z^{3} = 8e^{i\\frac{3\\pi}{4}}",
          "explanation": "De Moivre form.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify range",
          "workingLatex": "\\text{Adjust to } (-\\pi,\\pi] \\text{ if needed}",
          "explanation": "Principal argument may need adjustment.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z^{3} = 8e^{i\\frac{3\\pi}{4}}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "De Moivre's theorem",
    "subtopicId": "fm.y2.pure.de-moivre",
    "questionDiagram": null,
    "id": "fm.y2.pure.de-moivre.q007",
    "tags": [
      "powers"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Given $z = 3e^{i\\frac{\\pi}{2}}$, find $z^{2}$ in the form $re^{i\\theta}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "De Moivre's theorem",
          "workingLatex": "(re^{i\\theta})^{n} = r^{n}e^{in\\theta}",
          "explanation": "Raise modulus to power $n$; multiply argument by $n$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Given",
          "workingLatex": "z = 3e^{i\\frac{\\pi}{2}}",
          "explanation": "Exponential form.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Modulus power",
          "workingLatex": "r^{2} = 9",
          "explanation": "Compute $r^n$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Argument multiple",
          "workingLatex": "n\\theta = 2 \\times \\frac{\\pi}{2} = \\pi",
          "explanation": "Multiply argument by $n$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Result",
          "workingLatex": "z^{2} = 9e^{i\\pi}",
          "explanation": "De Moivre form.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify range",
          "workingLatex": "\\text{Adjust to } (-\\pi,\\pi] \\text{ if needed}",
          "explanation": "Principal argument may need adjustment.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z^{2} = 9e^{i\\pi}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "De Moivre's theorem",
    "subtopicId": "fm.y2.pure.de-moivre",
    "questionDiagram": null,
    "id": "fm.y2.pure.de-moivre.q008",
    "tags": [
      "powers"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Given $z = 2e^{i\\frac{\\pi}{2}}$, find $z^{4}$ in the form $re^{i\\theta}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "De Moivre's theorem",
          "workingLatex": "(re^{i\\theta})^{n} = r^{n}e^{in\\theta}",
          "explanation": "Raise modulus to power $n$; multiply argument by $n$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Given",
          "workingLatex": "z = 2e^{i\\frac{\\pi}{2}}",
          "explanation": "Exponential form.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Modulus power",
          "workingLatex": "r^{4} = 16",
          "explanation": "Compute $r^n$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Argument multiple",
          "workingLatex": "n\\theta = 4 \\times \\frac{\\pi}{2} = 2pi",
          "explanation": "Multiply argument by $n$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Result",
          "workingLatex": "z^{4} = 16e^{i2pi}",
          "explanation": "De Moivre form.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify range",
          "workingLatex": "\\text{Adjust to } (-\\pi,\\pi] \\text{ if needed}",
          "explanation": "Principal argument may need adjustment.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z^{4} = 16e^{i2pi}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "De Moivre's theorem",
    "subtopicId": "fm.y2.pure.de-moivre",
    "questionDiagram": null,
    "id": "fm.y2.pure.de-moivre.q009",
    "tags": [
      "powers"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Given $z = 6e^{i\\frac{\\pi}{6}}$, find $z^{2}$ in the form $re^{i\\theta}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "De Moivre's theorem",
          "workingLatex": "(re^{i\\theta})^{n} = r^{n}e^{in\\theta}",
          "explanation": "Raise modulus to power $n$; multiply argument by $n$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Given",
          "workingLatex": "z = 6e^{i\\frac{\\pi}{6}}",
          "explanation": "Exponential form.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Modulus power",
          "workingLatex": "r^{2} = 36",
          "explanation": "Compute $r^n$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Argument multiple",
          "workingLatex": "n\\theta = 2 \\times \\frac{\\pi}{6} = \\frac{\\pi}{3}",
          "explanation": "Multiply argument by $n$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Result",
          "workingLatex": "z^{2} = 36e^{i\\frac{\\pi}{3}}",
          "explanation": "De Moivre form.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify range",
          "workingLatex": "\\text{Adjust to } (-\\pi,\\pi] \\text{ if needed}",
          "explanation": "Principal argument may need adjustment.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z^{2} = 36e^{i\\frac{\\pi}{3}}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "De Moivre's theorem",
    "subtopicId": "fm.y2.pure.de-moivre",
    "questionDiagram": null,
    "id": "fm.y2.pure.de-moivre.q010",
    "tags": [
      "powers"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Given $z = 2e^{i-\\frac{\\pi}{4}}$, find $z^{2}$ in the form $re^{i\\theta}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "De Moivre's theorem",
          "workingLatex": "(re^{i\\theta})^{n} = r^{n}e^{in\\theta}",
          "explanation": "Raise modulus to power $n$; multiply argument by $n$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Given",
          "workingLatex": "z = 2e^{i-\\frac{\\pi}{4}}",
          "explanation": "Exponential form.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Modulus power",
          "workingLatex": "r^{2} = 4",
          "explanation": "Compute $r^n$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Argument multiple",
          "workingLatex": "n\\theta = 2 \\times -\\frac{\\pi}{4} = -\\frac{\\pi}{2}",
          "explanation": "Multiply argument by $n$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Result",
          "workingLatex": "z^{2} = 4e^{i-\\frac{\\pi}{2}}",
          "explanation": "De Moivre form.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify range",
          "workingLatex": "\\text{Adjust to } (-\\pi,\\pi] \\text{ if needed}",
          "explanation": "Principal argument may need adjustment.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z^{2} = 4e^{i-\\frac{\\pi}{2}}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "De Moivre's theorem",
    "subtopicId": "fm.y2.pure.de-moivre",
    "questionDiagram": null,
    "id": "fm.y2.pure.de-moivre.q011",
    "tags": [
      "powers"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Given $z = 3e^{i\\frac{\\pi}{3}}$, find $z^{3}$ in the form $re^{i\\theta}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "De Moivre's theorem",
          "workingLatex": "(re^{i\\theta})^{n} = r^{n}e^{in\\theta}",
          "explanation": "Raise modulus to power $n$; multiply argument by $n$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Given",
          "workingLatex": "z = 3e^{i\\frac{\\pi}{3}}",
          "explanation": "Exponential form.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Modulus power",
          "workingLatex": "r^{3} = 27",
          "explanation": "Compute $r^n$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Argument multiple",
          "workingLatex": "n\\theta = 3 \\times \\frac{\\pi}{3} = \\pi",
          "explanation": "Multiply argument by $n$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Result",
          "workingLatex": "z^{3} = 27e^{i\\pi}",
          "explanation": "De Moivre form.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify range",
          "workingLatex": "\\text{Adjust to } (-\\pi,\\pi] \\text{ if needed}",
          "explanation": "Principal argument may need adjustment.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z^{3} = 27e^{i\\pi}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "De Moivre's theorem",
    "subtopicId": "fm.y2.pure.de-moivre",
    "questionDiagram": null,
    "id": "fm.y2.pure.de-moivre.q012",
    "tags": [
      "powers"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Given $z = 2e^{i\\frac{\\pi}{6}}$, find $z^{6}$ in the form $re^{i\\theta}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "De Moivre's theorem",
          "workingLatex": "(re^{i\\theta})^{n} = r^{n}e^{in\\theta}",
          "explanation": "Raise modulus to power $n$; multiply argument by $n$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Given",
          "workingLatex": "z = 2e^{i\\frac{\\pi}{6}}",
          "explanation": "Exponential form.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Modulus power",
          "workingLatex": "r^{6} = 64",
          "explanation": "Compute $r^n$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Argument multiple",
          "workingLatex": "n\\theta = 6 \\times \\frac{\\pi}{6} = \\pi",
          "explanation": "Multiply argument by $n$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Result",
          "workingLatex": "z^{6} = 64e^{i\\pi}",
          "explanation": "De Moivre form.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify range",
          "workingLatex": "\\text{Adjust to } (-\\pi,\\pi] \\text{ if needed}",
          "explanation": "Principal argument may need adjustment.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z^{6} = 64e^{i\\pi}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "De Moivre's theorem",
    "subtopicId": "fm.y2.pure.de-moivre",
    "questionDiagram": null,
    "id": "fm.y2.pure.de-moivre.q013",
    "tags": [
      "powers"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Given $z = 4e^{i\\frac{\\pi}{4}}$, find $z^{3}$ in the form $re^{i\\theta}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "De Moivre's theorem",
          "workingLatex": "(re^{i\\theta})^{n} = r^{n}e^{in\\theta}",
          "explanation": "Raise modulus to power $n$; multiply argument by $n$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Given",
          "workingLatex": "z = 4e^{i\\frac{\\pi}{4}}",
          "explanation": "Exponential form.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Modulus power",
          "workingLatex": "r^{3} = 64",
          "explanation": "Compute $r^n$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Argument multiple",
          "workingLatex": "n\\theta = 3 \\times \\frac{\\pi}{4} = \\frac{3\\pi}{4}",
          "explanation": "Multiply argument by $n$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Result",
          "workingLatex": "z^{3} = 64e^{i\\frac{3\\pi}{4}}",
          "explanation": "De Moivre form.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify range",
          "workingLatex": "\\text{Adjust to } (-\\pi,\\pi] \\text{ if needed}",
          "explanation": "Principal argument may need adjustment.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z^{3} = 64e^{i\\frac{3\\pi}{4}}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "De Moivre's theorem",
    "subtopicId": "fm.y2.pure.de-moivre",
    "questionDiagram": null,
    "id": "fm.y2.pure.de-moivre.q014",
    "tags": [
      "powers"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Given $z = 5e^{i\\frac{\\pi}{2}}$, find $z^{2}$ in the form $re^{i\\theta}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "De Moivre's theorem",
          "workingLatex": "(re^{i\\theta})^{n} = r^{n}e^{in\\theta}",
          "explanation": "Raise modulus to power $n$; multiply argument by $n$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Given",
          "workingLatex": "z = 5e^{i\\frac{\\pi}{2}}",
          "explanation": "Exponential form.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Modulus power",
          "workingLatex": "r^{2} = 25",
          "explanation": "Compute $r^n$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Argument multiple",
          "workingLatex": "n\\theta = 2 \\times \\frac{\\pi}{2} = \\pi",
          "explanation": "Multiply argument by $n$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Result",
          "workingLatex": "z^{2} = 25e^{i\\pi}",
          "explanation": "De Moivre form.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify range",
          "workingLatex": "\\text{Adjust to } (-\\pi,\\pi] \\text{ if needed}",
          "explanation": "Principal argument may need adjustment.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z^{2} = 25e^{i\\pi}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "De Moivre's theorem",
    "subtopicId": "fm.y2.pure.de-moivre",
    "questionDiagram": null,
    "id": "fm.y2.pure.de-moivre.q015",
    "tags": [
      "powers"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Given $z = 2e^{i\\frac{\\pi}{3}}$, find $z^{4}$ in the form $re^{i\\theta}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "De Moivre's theorem",
          "workingLatex": "(re^{i\\theta})^{n} = r^{n}e^{in\\theta}",
          "explanation": "Raise modulus to power $n$; multiply argument by $n$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Given",
          "workingLatex": "z = 2e^{i\\frac{\\pi}{3}}",
          "explanation": "Exponential form.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Modulus power",
          "workingLatex": "r^{4} = 16",
          "explanation": "Compute $r^n$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Argument multiple",
          "workingLatex": "n\\theta = 4 \\times \\frac{\\pi}{3} = 4pi/3",
          "explanation": "Multiply argument by $n$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Result",
          "workingLatex": "z^{4} = 16e^{i4pi/3}",
          "explanation": "De Moivre form.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify range",
          "workingLatex": "\\text{Adjust to } (-\\pi,\\pi] \\text{ if needed}",
          "explanation": "Principal argument may need adjustment.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z^{4} = 16e^{i4pi/3}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "De Moivre's theorem",
    "subtopicId": "fm.y2.pure.de-moivre",
    "questionDiagram": null,
    "id": "fm.y2.pure.de-moivre.q016",
    "tags": [
      "pi/4",
      "powers",
      "rectangular"
    ],
    "difficulty": "Easy",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find $(1+1i)^{2}$, giving your answer in the form $a + bi$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Modulus",
          "workingLatex": "|z| = \\sqrt{2}",
          "explanation": "Distance from origin.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Argument",
          "workingLatex": "\\arg(z) = \\tan^{-1}\\!\\left(\\frac{1}{1}\\right)",
          "explanation": "Principal argument.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Exponential form",
          "workingLatex": "z = \\sqrt{2}e^{i\\theta}",
          "explanation": "Write in exponential form.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply De Moivre",
          "workingLatex": "z^{2} = (\\sqrt{2})^{2} e^{i2\\theta}",
          "explanation": "Raise modulus and multiply argument.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Modulus result",
          "workingLatex": "|z|^{2} = \\sqrt{2}^{2}",
          "explanation": "Compute $r^n$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Expand using trig",
          "workingLatex": "z^{2} = \\sqrt{2}^{2}(\\cos 2\\theta + i\\sin 2\\theta)",
          "explanation": "Euler's formula.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Rectangular form",
          "workingLatex": "z^{2} = 2i",
          "explanation": "Evaluate real and imaginary parts.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify",
          "workingLatex": "|z^{2}| = \\sqrt{2}^{2}",
          "explanation": "Modulus check.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "2i",
          "explanation": "Final $a+bi$ form.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(1+1i)^{2} = 2i$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "De Moivre's theorem",
    "subtopicId": "fm.y2.pure.de-moivre",
    "questionDiagram": null,
    "id": "fm.y2.pure.de-moivre.q017",
    "tags": [
      "pi/3",
      "powers",
      "rectangular"
    ],
    "difficulty": "Easy",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find $(1+1.7320508075688772i)^{2}$, giving your answer in the form $a + bi$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Modulus",
          "workingLatex": "|z| = \\sqrt{3.9999999999999996}",
          "explanation": "Distance from origin.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Argument",
          "workingLatex": "\\arg(z) = \\tan^{-1}\\!\\left(\\frac{1.7320508075688772}{1}\\right)",
          "explanation": "Principal argument.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Exponential form",
          "workingLatex": "z = \\sqrt{3.9999999999999996}e^{i\\theta}",
          "explanation": "Write in exponential form.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply De Moivre",
          "workingLatex": "z^{2} = (\\sqrt{3.9999999999999996})^{2} e^{i2\\theta}",
          "explanation": "Raise modulus and multiply argument.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Modulus result",
          "workingLatex": "|z|^{2} = \\sqrt{3.9999999999999996}^{2}",
          "explanation": "Compute $r^n$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Expand using trig",
          "workingLatex": "z^{2} = \\sqrt{3.9999999999999996}^{2}(\\cos 2\\theta + i\\sin 2\\theta)",
          "explanation": "Euler's formula.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Rectangular form",
          "workingLatex": "z^{2} = -2+3.4641016151377544i",
          "explanation": "Evaluate real and imaginary parts.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify",
          "workingLatex": "|z^{2}| = \\sqrt{3.9999999999999996}^{2}",
          "explanation": "Modulus check.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "-2+3.4641016151377544i",
          "explanation": "Final $a+bi$ form.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(1+1.7320508075688772i)^{2} = -2+3.4641016151377544i$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "De Moivre's theorem",
    "subtopicId": "fm.y2.pure.de-moivre",
    "questionDiagram": null,
    "id": "fm.y2.pure.de-moivre.q018",
    "tags": [
      "pure-real",
      "powers",
      "rectangular"
    ],
    "difficulty": "Easy",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find $(1)^{3}$, giving your answer in the form $a + bi$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Modulus",
          "workingLatex": "|z| = 1",
          "explanation": "Distance from origin.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Argument",
          "workingLatex": "\\arg(z) = \\tan^{-1}\\!\\left(\\frac{0}{1}\\right)",
          "explanation": "Principal argument.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Exponential form",
          "workingLatex": "z = 1e^{i\\theta}",
          "explanation": "Write in exponential form.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply De Moivre",
          "workingLatex": "z^{3} = (1)^{3} e^{i3\\theta}",
          "explanation": "Raise modulus and multiply argument.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Modulus result",
          "workingLatex": "|z|^{3} = 1",
          "explanation": "Compute $r^n$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Expand using trig",
          "workingLatex": "z^{3} = 1(\\cos 3\\theta + i\\sin 3\\theta)",
          "explanation": "Euler's formula.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Rectangular form",
          "workingLatex": "z^{3} = 1",
          "explanation": "Evaluate real and imaginary parts.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify",
          "workingLatex": "|z^{3}| = 1",
          "explanation": "Modulus check.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "1",
          "explanation": "Final $a+bi$ form.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(1)^{3} = 1$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "De Moivre's theorem",
    "subtopicId": "fm.y2.pure.de-moivre",
    "questionDiagram": null,
    "id": "fm.y2.pure.de-moivre.q019",
    "tags": [
      "pure-imaginary",
      "powers",
      "rectangular"
    ],
    "difficulty": "Easy",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find $(1i)^{4}$, giving your answer in the form $a + bi$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Modulus",
          "workingLatex": "|z| = 1",
          "explanation": "Distance from origin.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Argument",
          "workingLatex": "\\arg(z) = \\tan^{-1}\\!\\left(\\frac{1}{0}\\right)",
          "explanation": "Principal argument.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Exponential form",
          "workingLatex": "z = 1e^{i\\theta}",
          "explanation": "Write in exponential form.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply De Moivre",
          "workingLatex": "z^{4} = (1)^{4} e^{i4\\theta}",
          "explanation": "Raise modulus and multiply argument.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Modulus result",
          "workingLatex": "|z|^{4} = 1",
          "explanation": "Compute $r^n$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Expand using trig",
          "workingLatex": "z^{4} = 1(\\cos 4\\theta + i\\sin 4\\theta)",
          "explanation": "Euler's formula.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Rectangular form",
          "workingLatex": "z^{4} = 1",
          "explanation": "Evaluate real and imaginary parts.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify",
          "workingLatex": "|z^{4}| = 1",
          "explanation": "Modulus check.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "1",
          "explanation": "Final $a+bi$ form.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(1i)^{4} = 1$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "De Moivre's theorem",
    "subtopicId": "fm.y2.pure.de-moivre",
    "questionDiagram": null,
    "id": "fm.y2.pure.de-moivre.q020",
    "tags": [
      "negative-real",
      "powers",
      "rectangular"
    ],
    "difficulty": "Easy",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find $(-1)^{3}$, giving your answer in the form $a + bi$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Modulus",
          "workingLatex": "|z| = 1",
          "explanation": "Distance from origin.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Argument",
          "workingLatex": "\\arg(z) = \\tan^{-1}\\!\\left(\\frac{0}{-1}\\right)",
          "explanation": "Principal argument.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Exponential form",
          "workingLatex": "z = 1e^{i\\theta}",
          "explanation": "Write in exponential form.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply De Moivre",
          "workingLatex": "z^{3} = (1)^{3} e^{i3\\theta}",
          "explanation": "Raise modulus and multiply argument.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Modulus result",
          "workingLatex": "|z|^{3} = 1",
          "explanation": "Compute $r^n$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Expand using trig",
          "workingLatex": "z^{3} = 1(\\cos 3\\theta + i\\sin 3\\theta)",
          "explanation": "Euler's formula.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Rectangular form",
          "workingLatex": "z^{3} = -1",
          "explanation": "Evaluate real and imaginary parts.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify",
          "workingLatex": "|z^{3}| = 1",
          "explanation": "Modulus check.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "-1",
          "explanation": "Final $a+bi$ form.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(-1)^{3} = -1$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "De Moivre's theorem",
    "subtopicId": "fm.y2.pure.de-moivre",
    "questionDiagram": null,
    "id": "fm.y2.pure.de-moivre.q021",
    "tags": [
      "pi/4",
      "powers",
      "rectangular"
    ],
    "difficulty": "Easy",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find $(1+1i)^{3}$, giving your answer in the form $a + bi$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Modulus",
          "workingLatex": "|z| = \\sqrt{2}",
          "explanation": "Distance from origin.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Argument",
          "workingLatex": "\\arg(z) = \\tan^{-1}\\!\\left(\\frac{1}{1}\\right)",
          "explanation": "Principal argument.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Exponential form",
          "workingLatex": "z = \\sqrt{2}e^{i\\theta}",
          "explanation": "Write in exponential form.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply De Moivre",
          "workingLatex": "z^{3} = (\\sqrt{2})^{3} e^{i3\\theta}",
          "explanation": "Raise modulus and multiply argument.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Modulus result",
          "workingLatex": "|z|^{3} = \\sqrt{2}^{3}",
          "explanation": "Compute $r^n$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Expand using trig",
          "workingLatex": "z^{3} = \\sqrt{2}^{3}(\\cos 3\\theta + i\\sin 3\\theta)",
          "explanation": "Euler's formula.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Rectangular form",
          "workingLatex": "z^{3} = -2+2i",
          "explanation": "Evaluate real and imaginary parts.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify",
          "workingLatex": "|z^{3}| = \\sqrt{2}^{3}",
          "explanation": "Modulus check.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "-2+2i",
          "explanation": "Final $a+bi$ form.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(1+1i)^{3} = -2+2i$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "De Moivre's theorem",
    "subtopicId": "fm.y2.pure.de-moivre",
    "questionDiagram": null,
    "id": "fm.y2.pure.de-moivre.q022",
    "tags": [
      "-pi/4",
      "powers",
      "rectangular"
    ],
    "difficulty": "Easy",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find $(1-1i)^{2}$, giving your answer in the form $a + bi$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Modulus",
          "workingLatex": "|z| = \\sqrt{2}",
          "explanation": "Distance from origin.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Argument",
          "workingLatex": "\\arg(z) = \\tan^{-1}\\!\\left(\\frac{-1}{1}\\right)",
          "explanation": "Principal argument.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Exponential form",
          "workingLatex": "z = \\sqrt{2}e^{i\\theta}",
          "explanation": "Write in exponential form.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply De Moivre",
          "workingLatex": "z^{2} = (\\sqrt{2})^{2} e^{i2\\theta}",
          "explanation": "Raise modulus and multiply argument.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Modulus result",
          "workingLatex": "|z|^{2} = \\sqrt{2}^{2}",
          "explanation": "Compute $r^n$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Expand using trig",
          "workingLatex": "z^{2} = \\sqrt{2}^{2}(\\cos 2\\theta + i\\sin 2\\theta)",
          "explanation": "Euler's formula.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Rectangular form",
          "workingLatex": "z^{2} = -2i",
          "explanation": "Evaluate real and imaginary parts.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify",
          "workingLatex": "|z^{2}| = \\sqrt{2}^{2}",
          "explanation": "Modulus check.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "-2i",
          "explanation": "Final $a+bi$ form.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(1-1i)^{2} = -2i$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "De Moivre's theorem",
    "subtopicId": "fm.y2.pure.de-moivre",
    "questionDiagram": null,
    "id": "fm.y2.pure.de-moivre.q023",
    "tags": [
      "pure-real",
      "powers",
      "rectangular"
    ],
    "difficulty": "Easy",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find $(2)^{3}$, giving your answer in the form $a + bi$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Modulus",
          "workingLatex": "|z| = 2",
          "explanation": "Distance from origin.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Argument",
          "workingLatex": "\\arg(z) = \\tan^{-1}\\!\\left(\\frac{0}{2}\\right)",
          "explanation": "Principal argument.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Exponential form",
          "workingLatex": "z = 2e^{i\\theta}",
          "explanation": "Write in exponential form.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply De Moivre",
          "workingLatex": "z^{3} = (2)^{3} e^{i3\\theta}",
          "explanation": "Raise modulus and multiply argument.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Modulus result",
          "workingLatex": "|z|^{3} = 8",
          "explanation": "Compute $r^n$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Expand using trig",
          "workingLatex": "z^{3} = 8(\\cos 3\\theta + i\\sin 3\\theta)",
          "explanation": "Euler's formula.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Rectangular form",
          "workingLatex": "z^{3} = 8",
          "explanation": "Evaluate real and imaginary parts.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify",
          "workingLatex": "|z^{3}| = 8",
          "explanation": "Modulus check.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "8",
          "explanation": "Final $a+bi$ form.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(2)^{3} = 8$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "De Moivre's theorem",
    "subtopicId": "fm.y2.pure.de-moivre",
    "questionDiagram": null,
    "id": "fm.y2.pure.de-moivre.q024",
    "tags": [
      "pure-imaginary",
      "powers",
      "rectangular"
    ],
    "difficulty": "Easy",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find $(2i)^{3}$, giving your answer in the form $a + bi$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Modulus",
          "workingLatex": "|z| = 2",
          "explanation": "Distance from origin.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Argument",
          "workingLatex": "\\arg(z) = \\tan^{-1}\\!\\left(\\frac{2}{0}\\right)",
          "explanation": "Principal argument.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Exponential form",
          "workingLatex": "z = 2e^{i\\theta}",
          "explanation": "Write in exponential form.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply De Moivre",
          "workingLatex": "z^{3} = (2)^{3} e^{i3\\theta}",
          "explanation": "Raise modulus and multiply argument.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Modulus result",
          "workingLatex": "|z|^{3} = 8",
          "explanation": "Compute $r^n$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Expand using trig",
          "workingLatex": "z^{3} = 8(\\cos 3\\theta + i\\sin 3\\theta)",
          "explanation": "Euler's formula.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Rectangular form",
          "workingLatex": "z^{3} = 8i",
          "explanation": "Evaluate real and imaginary parts.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify",
          "workingLatex": "|z^{3}| = 8",
          "explanation": "Modulus check.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "8i",
          "explanation": "Final $a+bi$ form.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(2i)^{3} = 8i$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "De Moivre's theorem",
    "subtopicId": "fm.y2.pure.de-moivre",
    "questionDiagram": null,
    "id": "fm.y2.pure.de-moivre.q025",
    "tags": [
      "pi/3",
      "powers",
      "rectangular"
    ],
    "difficulty": "Easy",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find $(1+1.7320508075688772i)^{3}$, giving your answer in the form $a + bi$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Modulus",
          "workingLatex": "|z| = \\sqrt{3.9999999999999996}",
          "explanation": "Distance from origin.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Argument",
          "workingLatex": "\\arg(z) = \\tan^{-1}\\!\\left(\\frac{1.7320508075688772}{1}\\right)",
          "explanation": "Principal argument.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Exponential form",
          "workingLatex": "z = \\sqrt{3.9999999999999996}e^{i\\theta}",
          "explanation": "Write in exponential form.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply De Moivre",
          "workingLatex": "z^{3} = (\\sqrt{3.9999999999999996})^{3} e^{i3\\theta}",
          "explanation": "Raise modulus and multiply argument.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Modulus result",
          "workingLatex": "|z|^{3} = \\sqrt{3.9999999999999996}^{3}",
          "explanation": "Compute $r^n$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Expand using trig",
          "workingLatex": "z^{3} = \\sqrt{3.9999999999999996}^{3}(\\cos 3\\theta + i\\sin 3\\theta)",
          "explanation": "Euler's formula.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Rectangular form",
          "workingLatex": "z^{3} = -8",
          "explanation": "Evaluate real and imaginary parts.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify",
          "workingLatex": "|z^{3}| = \\sqrt{3.9999999999999996}^{3}",
          "explanation": "Modulus check.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "-8",
          "explanation": "Final $a+bi$ form.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(1+1.7320508075688772i)^{3} = -8$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "De Moivre's theorem",
    "subtopicId": "fm.y2.pure.de-moivre",
    "questionDiagram": null,
    "id": "fm.y2.pure.de-moivre.q026",
    "tags": [
      "cube-roots",
      "roots"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Find the 3 roots of $z^{3} = 8e^{i0}$, giving each in the form $re^{i\\theta}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "De Moivre for roots",
          "workingLatex": "z = re^{i\\theta} \\Rightarrow z^{1/3} = r^{1/3}e^{i(\\theta + 2k\\pi)/3}",
          "explanation": "There are $3$ distinct roots, corresponding to $k = 0, 1, 2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Modulus of each root",
          "workingLatex": "r^{1/3} = 2",
          "explanation": "Take the positive real $n$th root of $r$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Base argument",
          "workingLatex": "\\theta = 0",
          "explanation": "Principal argument of $z$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Root spacing",
          "workingLatex": "\\text{Arguments differ by } \\frac{2\\pi}{3}",
          "explanation": "Roots are equally spaced on a circle.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "List roots",
          "workingLatex": "k=0: 2;\\; k=1: 2e^{i2\\pi/3};\\; k=2: 2e^{i4\\pi/3}",
          "explanation": "Substitute each value of $k$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify count",
          "workingLatex": "\\text{Exactly } 3 \\text{ distinct roots}",
          "explanation": "Complete set on the Argand diagram.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Geometric view",
          "workingLatex": "\\text{Vertices of a regular 3-gon}",
          "explanation": "Roots lie on a circle of radius $r^{1/n}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Product check",
          "workingLatex": "\\text{Product of all roots equals } 8",
          "explanation": "Properties of roots of a complex number.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "2,\\; 2e^{i2\\pi/3},\\; 2e^{i4\\pi/3}",
          "explanation": "All $n$ roots in exponential form.",
          "diagram": null
        }
      ],
      "finalAnswer": "$2$, $2e^{i2\\pi/3}$, $2e^{i4\\pi/3}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "De Moivre's theorem",
    "subtopicId": "fm.y2.pure.de-moivre",
    "questionDiagram": null,
    "id": "fm.y2.pure.de-moivre.q027",
    "tags": [
      "fourth-roots",
      "unity",
      "roots"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Find the 4 roots of $z^{4} = 1e^{i0}$, giving each in the form $re^{i\\theta}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "De Moivre for roots",
          "workingLatex": "z = re^{i\\theta} \\Rightarrow z^{1/4} = r^{1/4}e^{i(\\theta + 2k\\pi)/4}",
          "explanation": "There are $4$ distinct roots, corresponding to $k = 0, 1, 2, 3$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Modulus of each root",
          "workingLatex": "r^{1/4} = 1",
          "explanation": "Take the positive real $n$th root of $r$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Base argument",
          "workingLatex": "\\theta = 0",
          "explanation": "Principal argument of $z$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Root spacing",
          "workingLatex": "\\text{Arguments differ by } \\frac{2\\pi}{4}",
          "explanation": "Roots are equally spaced on a circle.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "List roots",
          "workingLatex": "k=0: 1;\\; k=1: i;\\; k=2: -1;\\; k=3: -i",
          "explanation": "Substitute each value of $k$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify count",
          "workingLatex": "\\text{Exactly } 4 \\text{ distinct roots}",
          "explanation": "Complete set on the Argand diagram.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Geometric view",
          "workingLatex": "\\text{Vertices of a regular 4-gon}",
          "explanation": "Roots lie on a circle of radius $r^{1/n}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Product check",
          "workingLatex": "\\text{Product of all roots equals } original modulus",
          "explanation": "Properties of roots of a complex number.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "1,\\; i,\\; -1,\\; -i",
          "explanation": "All $n$ roots in exponential form.",
          "diagram": null
        }
      ],
      "finalAnswer": "$1$, $i$, $-1$, $-i$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "De Moivre's theorem",
    "subtopicId": "fm.y2.pure.de-moivre",
    "questionDiagram": null,
    "id": "fm.y2.pure.de-moivre.q028",
    "tags": [
      "square-roots",
      "roots"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Find the 2 roots of $z^{2} = 16e^{i\\frac{\\pi}{2}}$, giving each in the form $re^{i\\theta}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "De Moivre for roots",
          "workingLatex": "z = re^{i\\theta} \\Rightarrow z^{1/2} = r^{1/2}e^{i(\\theta + 2k\\pi)/2}",
          "explanation": "There are $2$ distinct roots, corresponding to $k = 0, 1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Modulus of each root",
          "workingLatex": "r^{1/2} = 4",
          "explanation": "Take the positive real $n$th root of $r$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Base argument",
          "workingLatex": "\\theta = \\frac{\\pi}{2}",
          "explanation": "Principal argument of $z$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Root spacing",
          "workingLatex": "\\text{Arguments differ by } \\frac{2\\pi}{2}",
          "explanation": "Roots are equally spaced on a circle.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "List roots",
          "workingLatex": "k=0: 4e^{i\\pi/4};\\; k=1: 4e^{i5\\pi/4}",
          "explanation": "Substitute each value of $k$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify count",
          "workingLatex": "\\text{Exactly } 2 \\text{ distinct roots}",
          "explanation": "Complete set on the Argand diagram.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Geometric view",
          "workingLatex": "\\text{Vertices of a regular 2-gon}",
          "explanation": "Roots lie on a circle of radius $r^{1/n}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Product check",
          "workingLatex": "\\text{Product of all roots equals } 16",
          "explanation": "Properties of roots of a complex number.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "4e^{i\\pi/4},\\; 4e^{i5\\pi/4}",
          "explanation": "All $n$ roots in exponential form.",
          "diagram": null
        }
      ],
      "finalAnswer": "$4e^{i\\pi/4}$, $4e^{i5\\pi/4}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "De Moivre's theorem",
    "subtopicId": "fm.y2.pure.de-moivre",
    "questionDiagram": null,
    "id": "fm.y2.pure.de-moivre.q029",
    "tags": [
      "cube-roots",
      "roots"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Find the 3 roots of $z^{3} = 27e^{i0}$, giving each in the form $re^{i\\theta}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "De Moivre for roots",
          "workingLatex": "z = re^{i\\theta} \\Rightarrow z^{1/3} = r^{1/3}e^{i(\\theta + 2k\\pi)/3}",
          "explanation": "There are $3$ distinct roots, corresponding to $k = 0, 1, 2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Modulus of each root",
          "workingLatex": "r^{1/3} = 3",
          "explanation": "Take the positive real $n$th root of $r$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Base argument",
          "workingLatex": "\\theta = 0",
          "explanation": "Principal argument of $z$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Root spacing",
          "workingLatex": "\\text{Arguments differ by } \\frac{2\\pi}{3}",
          "explanation": "Roots are equally spaced on a circle.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "List roots",
          "workingLatex": "k=0: 3;\\; k=1: 3e^{i2\\pi/3};\\; k=2: 3e^{i4\\pi/3}",
          "explanation": "Substitute each value of $k$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify count",
          "workingLatex": "\\text{Exactly } 3 \\text{ distinct roots}",
          "explanation": "Complete set on the Argand diagram.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Geometric view",
          "workingLatex": "\\text{Vertices of a regular 3-gon}",
          "explanation": "Roots lie on a circle of radius $r^{1/n}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Product check",
          "workingLatex": "\\text{Product of all roots equals } 27",
          "explanation": "Properties of roots of a complex number.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "3,\\; 3e^{i2\\pi/3},\\; 3e^{i4\\pi/3}",
          "explanation": "All $n$ roots in exponential form.",
          "diagram": null
        }
      ],
      "finalAnswer": "$3$, $3e^{i2\\pi/3}$, $3e^{i4\\pi/3}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "De Moivre's theorem",
    "subtopicId": "fm.y2.pure.de-moivre",
    "questionDiagram": null,
    "id": "fm.y2.pure.de-moivre.q030",
    "tags": [
      "fifth-roots",
      "roots"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Find the 5 roots of $z^{5} = 32e^{i0}$, giving each in the form $re^{i\\theta}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "De Moivre for roots",
          "workingLatex": "z = re^{i\\theta} \\Rightarrow z^{1/5} = r^{1/5}e^{i(\\theta + 2k\\pi)/5}",
          "explanation": "There are $5$ distinct roots, corresponding to $k = 0, 1, 2, 3, 4$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Modulus of each root",
          "workingLatex": "r^{1/5} = 2",
          "explanation": "Take the positive real $n$th root of $r$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Base argument",
          "workingLatex": "\\theta = 0",
          "explanation": "Principal argument of $z$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Root spacing",
          "workingLatex": "\\text{Arguments differ by } \\frac{2\\pi}{5}",
          "explanation": "Roots are equally spaced on a circle.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "List roots",
          "workingLatex": "k=0: 2;\\; k=1: 2e^{i2\\pi/5};\\; k=2: 2e^{i4\\pi/5};\\; k=3: 2e^{i6\\pi/5};\\; k=4: 2e^{i8\\pi/5}",
          "explanation": "Substitute each value of $k$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify count",
          "workingLatex": "\\text{Exactly } 5 \\text{ distinct roots}",
          "explanation": "Complete set on the Argand diagram.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Geometric view",
          "workingLatex": "\\text{Vertices of a regular 5-gon}",
          "explanation": "Roots lie on a circle of radius $r^{1/n}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Product check",
          "workingLatex": "\\text{Product of all roots equals } 32",
          "explanation": "Properties of roots of a complex number.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "2,\\; 2e^{i2\\pi/5},\\; 2e^{i4\\pi/5},\\; 2e^{i6\\pi/5},\\; 2e^{i8\\pi/5}",
          "explanation": "All $n$ roots in exponential form.",
          "diagram": null
        }
      ],
      "finalAnswer": "$2$, $2e^{i2\\pi/5}$, $2e^{i4\\pi/5}$, $2e^{i6\\pi/5}$, $2e^{i8\\pi/5}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "De Moivre's theorem",
    "subtopicId": "fm.y2.pure.de-moivre",
    "questionDiagram": null,
    "id": "fm.y2.pure.de-moivre.q031",
    "tags": [
      "quadratic",
      "equations",
      "roots"
    ],
    "difficulty": "Intermediate",
    "marks": 7,
    "answerType": "written",
    "questionText": "Solve $z^{2} = 9e^{i0}$, giving all roots in the form $re^{i\\theta}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write $w$ in exponential form",
          "workingLatex": "w = 9e^{i0}",
          "explanation": "Convert the right-hand side.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up equation",
          "workingLatex": "z^{2} = 9e^{i0}",
          "explanation": "Standard form for root-finding.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "De Moivre for roots",
          "workingLatex": "z = r^{1/2}e^{i(\\theta + 2k\\pi)/2}",
          "explanation": "General solution formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Modulus",
          "workingLatex": "|z| = 3",
          "explanation": "All roots have the same modulus.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Values of $k$",
          "workingLatex": "k = 0, 1, \\ldots, 1",
          "explanation": "Distinct roots.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute each root",
          "workingLatex": "k=0: 3;\\; k=1: -3",
          "explanation": "Substitute each $k$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify one root",
          "workingLatex": "(3)^{2} = 9e^{i0}",
          "explanation": "Check by raising a root to power $n$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Geometric description",
          "workingLatex": "\\text{Regular 2-gon on circle } |z|=3",
          "explanation": "Roots equally spaced.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "3,\\; -3",
          "explanation": "Complete solution set.",
          "diagram": null
        }
      ],
      "finalAnswer": "$3$, $-3$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "De Moivre's theorem",
    "subtopicId": "fm.y2.pure.de-moivre",
    "questionDiagram": null,
    "id": "fm.y2.pure.de-moivre.q032",
    "tags": [
      "cubic",
      "equations",
      "roots"
    ],
    "difficulty": "Intermediate",
    "marks": 7,
    "answerType": "written",
    "questionText": "Solve $z^{3} = 8e^{i0}$, giving all roots in the form $re^{i\\theta}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write $w$ in exponential form",
          "workingLatex": "w = 8e^{i0}",
          "explanation": "Convert the right-hand side.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up equation",
          "workingLatex": "z^{3} = 8e^{i0}",
          "explanation": "Standard form for root-finding.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "De Moivre for roots",
          "workingLatex": "z = r^{1/3}e^{i(\\theta + 2k\\pi)/3}",
          "explanation": "General solution formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Modulus",
          "workingLatex": "|z| = 2",
          "explanation": "All roots have the same modulus.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Values of $k$",
          "workingLatex": "k = 0, 1, \\ldots, 2",
          "explanation": "Distinct roots.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute each root",
          "workingLatex": "k=0: 2;\\; k=1: 2e^{i2\\pi/3};\\; k=2: 2e^{i4\\pi/3}",
          "explanation": "Substitute each $k$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify one root",
          "workingLatex": "(2)^{3} = 8e^{i0}",
          "explanation": "Check by raising a root to power $n$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Geometric description",
          "workingLatex": "\\text{Regular 3-gon on circle } |z|=2",
          "explanation": "Roots equally spaced.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "2,\\; 2e^{i2\\pi/3},\\; 2e^{i4\\pi/3}",
          "explanation": "Complete solution set.",
          "diagram": null
        }
      ],
      "finalAnswer": "$2$, $2e^{i2\\pi/3}$, $2e^{i4\\pi/3}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "De Moivre's theorem",
    "subtopicId": "fm.y2.pure.de-moivre",
    "questionDiagram": null,
    "id": "fm.y2.pure.de-moivre.q033",
    "tags": [
      "quartic",
      "equations",
      "roots"
    ],
    "difficulty": "Intermediate",
    "marks": 7,
    "answerType": "written",
    "questionText": "Solve $z^{4} = 16e^{i\\frac{\\pi}{2}}$, giving all roots in the form $re^{i\\theta}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write $w$ in exponential form",
          "workingLatex": "w = 16e^{i\\frac{\\pi}{2}}",
          "explanation": "Convert the right-hand side.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up equation",
          "workingLatex": "z^{4} = 16e^{i\\frac{\\pi}{2}}",
          "explanation": "Standard form for root-finding.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "De Moivre for roots",
          "workingLatex": "z = r^{1/4}e^{i(\\theta + 2k\\pi)/4}",
          "explanation": "General solution formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Modulus",
          "workingLatex": "|z| = 2",
          "explanation": "All roots have the same modulus.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Values of $k$",
          "workingLatex": "k = 0, 1, \\ldots, 3",
          "explanation": "Distinct roots.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute each root",
          "workingLatex": "k=0: 2e^{i3\\pi/8};\\; k=1: 2e^{i7\\pi/8};\\; k=2: 2e^{i11\\pi/8};\\; k=3: 2e^{i15\\pi/8}",
          "explanation": "Substitute each $k$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify one root",
          "workingLatex": "(2e^{i3\\pi/8})^{4} = 16e^{i\\frac{\\pi}{2}}",
          "explanation": "Check by raising a root to power $n$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Geometric description",
          "workingLatex": "\\text{Regular 4-gon on circle } |z|=2",
          "explanation": "Roots equally spaced.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "2e^{i3\\pi/8},\\; 2e^{i7\\pi/8},\\; 2e^{i11\\pi/8},\\; 2e^{i15\\pi/8}",
          "explanation": "Complete solution set.",
          "diagram": null
        }
      ],
      "finalAnswer": "$2e^{i3\\pi/8}$, $2e^{i7\\pi/8}$, $2e^{i11\\pi/8}$, $2e^{i15\\pi/8}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "De Moivre's theorem",
    "subtopicId": "fm.y2.pure.de-moivre",
    "questionDiagram": null,
    "id": "fm.y2.pure.de-moivre.q034",
    "tags": [
      "square",
      "equations",
      "roots"
    ],
    "difficulty": "Intermediate",
    "marks": 7,
    "answerType": "written",
    "questionText": "Solve $z^{2} = 4e^{i\\pi}$, giving all roots in the form $re^{i\\theta}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write $w$ in exponential form",
          "workingLatex": "w = 4e^{i\\pi}",
          "explanation": "Convert the right-hand side.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up equation",
          "workingLatex": "z^{2} = 4e^{i\\pi}",
          "explanation": "Standard form for root-finding.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "De Moivre for roots",
          "workingLatex": "z = r^{1/2}e^{i(\\theta + 2k\\pi)/2}",
          "explanation": "General solution formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Modulus",
          "workingLatex": "|z| = 2",
          "explanation": "All roots have the same modulus.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Values of $k$",
          "workingLatex": "k = 0, 1, \\ldots, 1",
          "explanation": "Distinct roots.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute each root",
          "workingLatex": "k=0: 2e^{i\\pi/2};\\; k=1: 2e^{i3\\pi/2}",
          "explanation": "Substitute each $k$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify one root",
          "workingLatex": "(2e^{i\\pi/2})^{2} = 4e^{i\\pi}",
          "explanation": "Check by raising a root to power $n$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Geometric description",
          "workingLatex": "\\text{Regular 2-gon on circle } |z|=2",
          "explanation": "Roots equally spaced.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "2e^{i\\pi/2},\\; 2e^{i3\\pi/2}",
          "explanation": "Complete solution set.",
          "diagram": null
        }
      ],
      "finalAnswer": "$2e^{i\\pi/2}$, $2e^{i3\\pi/2}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "De Moivre's theorem",
    "subtopicId": "fm.y2.pure.de-moivre",
    "questionDiagram": null,
    "id": "fm.y2.pure.de-moivre.q035",
    "tags": [
      "sixth-roots",
      "equations",
      "roots"
    ],
    "difficulty": "Intermediate",
    "marks": 7,
    "answerType": "written",
    "questionText": "Solve $z^{6} = 64e^{i0}$, giving all roots in the form $re^{i\\theta}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write $w$ in exponential form",
          "workingLatex": "w = 64e^{i0}",
          "explanation": "Convert the right-hand side.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up equation",
          "workingLatex": "z^{6} = 64e^{i0}",
          "explanation": "Standard form for root-finding.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "De Moivre for roots",
          "workingLatex": "z = r^{1/6}e^{i(\\theta + 2k\\pi)/6}",
          "explanation": "General solution formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Modulus",
          "workingLatex": "|z| = 2",
          "explanation": "All roots have the same modulus.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Values of $k$",
          "workingLatex": "k = 0, 1, \\ldots, 5",
          "explanation": "Distinct roots.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute each root",
          "workingLatex": "k=0: 2;\\; k=1: 2e^{i\\pi/3};\\; k=2: 2e^{i2\\pi/3};\\; k=3: 2e^{i\\pi};\\; k=4: 2e^{i4\\pi/3};\\; k=5: 2e^{i5\\pi/3}",
          "explanation": "Substitute each $k$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify one root",
          "workingLatex": "(2)^{6} = 64e^{i0}",
          "explanation": "Check by raising a root to power $n$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Geometric description",
          "workingLatex": "\\text{Regular 6-gon on circle } |z|=2",
          "explanation": "Roots equally spaced.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "2,\\; 2e^{i\\pi/3},\\; 2e^{i2\\pi/3},\\; 2e^{i\\pi},\\; 2e^{i4\\pi/3},\\; 2e^{i5\\pi/3}",
          "explanation": "Complete solution set.",
          "diagram": null
        }
      ],
      "finalAnswer": "$2$, $2e^{i\\pi/3}$, $2e^{i2\\pi/3}$, $2e^{i\\pi}$, $2e^{i4\\pi/3}$, $2e^{i5\\pi/3}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "De Moivre's theorem",
    "subtopicId": "fm.y2.pure.de-moivre",
    "questionDiagram": null,
    "id": "fm.y2.pure.de-moivre.q036",
    "tags": [
      "sixth-roots-unity",
      "roots"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Find the 6 roots of $z^{6} = 1e^{i0}$, giving each in the form $re^{i\\theta}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "De Moivre for roots",
          "workingLatex": "z = re^{i\\theta} \\Rightarrow z^{1/6} = r^{1/6}e^{i(\\theta + 2k\\pi)/6}",
          "explanation": "There are $6$ distinct roots, corresponding to $k = 0, 1, 2, 3, 4, 5$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Modulus of each root",
          "workingLatex": "r^{1/6} = 1",
          "explanation": "Take the positive real $n$th root of $r$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Base argument",
          "workingLatex": "\\theta = 0",
          "explanation": "Principal argument of $z$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Root spacing",
          "workingLatex": "\\text{Arguments differ by } \\frac{2\\pi}{6}",
          "explanation": "Roots are equally spaced on a circle.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "List roots",
          "workingLatex": "k=0: 1;\\; k=1: e^{i\\pi/3};\\; k=2: e^{i2\\pi/3};\\; k=3: e^{i\\pi};\\; k=4: e^{i4\\pi/3};\\; k=5: e^{i5\\pi/3}",
          "explanation": "Substitute each value of $k$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify count",
          "workingLatex": "\\text{Exactly } 6 \\text{ distinct roots}",
          "explanation": "Complete set on the Argand diagram.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Geometric view",
          "workingLatex": "\\text{Vertices of a regular 6-gon}",
          "explanation": "Roots lie on a circle of radius $r^{1/n}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Product check",
          "workingLatex": "\\text{Product of all roots equals } original modulus",
          "explanation": "Properties of roots of a complex number.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "1,\\; e^{i\\pi/3},\\; e^{i2\\pi/3},\\; e^{i\\pi},\\; e^{i4\\pi/3},\\; e^{i5\\pi/3}",
          "explanation": "All $n$ roots in exponential form.",
          "diagram": null
        }
      ],
      "finalAnswer": "$1$, $e^{i\\pi/3}$, $e^{i2\\pi/3}$, $e^{i\\pi}$, $e^{i4\\pi/3}$, $e^{i5\\pi/3}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "De Moivre's theorem",
    "subtopicId": "fm.y2.pure.de-moivre",
    "questionDiagram": null,
    "id": "fm.y2.pure.de-moivre.q037",
    "tags": [
      "fourth-roots",
      "roots"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Find the 4 roots of $z^{4} = 81e^{i0}$, giving each in the form $re^{i\\theta}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "De Moivre for roots",
          "workingLatex": "z = re^{i\\theta} \\Rightarrow z^{1/4} = r^{1/4}e^{i(\\theta + 2k\\pi)/4}",
          "explanation": "There are $4$ distinct roots, corresponding to $k = 0, 1, 2, 3$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Modulus of each root",
          "workingLatex": "r^{1/4} = 3",
          "explanation": "Take the positive real $n$th root of $r$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Base argument",
          "workingLatex": "\\theta = 0",
          "explanation": "Principal argument of $z$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Root spacing",
          "workingLatex": "\\text{Arguments differ by } \\frac{2\\pi}{4}",
          "explanation": "Roots are equally spaced on a circle.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "List roots",
          "workingLatex": "k=0: 3;\\; k=1: 3i;\\; k=2: -3;\\; k=3: -3i",
          "explanation": "Substitute each value of $k$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify count",
          "workingLatex": "\\text{Exactly } 4 \\text{ distinct roots}",
          "explanation": "Complete set on the Argand diagram.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Geometric view",
          "workingLatex": "\\text{Vertices of a regular 4-gon}",
          "explanation": "Roots lie on a circle of radius $r^{1/n}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Product check",
          "workingLatex": "\\text{Product of all roots equals } 81",
          "explanation": "Properties of roots of a complex number.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "3,\\; 3i,\\; -3,\\; -3i",
          "explanation": "All $n$ roots in exponential form.",
          "diagram": null
        }
      ],
      "finalAnswer": "$3$, $3i$, $-3$, $-3i$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "De Moivre's theorem",
    "subtopicId": "fm.y2.pure.de-moivre",
    "questionDiagram": null,
    "id": "fm.y2.pure.de-moivre.q038",
    "tags": [
      "cube",
      "equations",
      "roots"
    ],
    "difficulty": "Intermediate",
    "marks": 7,
    "answerType": "written",
    "questionText": "Solve $z^{3} = 1e^{i\\pi}$, giving all roots in the form $re^{i\\theta}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write $w$ in exponential form",
          "workingLatex": "w = 1e^{i\\pi}",
          "explanation": "Convert the right-hand side.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up equation",
          "workingLatex": "z^{3} = 1e^{i\\pi}",
          "explanation": "Standard form for root-finding.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "De Moivre for roots",
          "workingLatex": "z = r^{1/3}e^{i(\\theta + 2k\\pi)/3}",
          "explanation": "General solution formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Modulus",
          "workingLatex": "|z| = 1",
          "explanation": "All roots have the same modulus.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Values of $k$",
          "workingLatex": "k = 0, 1, \\ldots, 2",
          "explanation": "Distinct roots.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute each root",
          "workingLatex": "k=0: e^{i\\pi/3};\\; k=1: e^{i\\pi};\\; k=2: e^{i5\\pi/3}",
          "explanation": "Substitute each $k$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify one root",
          "workingLatex": "(e^{i\\pi/3})^{3} = 1e^{i\\pi}",
          "explanation": "Check by raising a root to power $n$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Geometric description",
          "workingLatex": "\\text{Regular 3-gon on circle } |z|=1",
          "explanation": "Roots equally spaced.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "e^{i\\pi/3},\\; e^{i\\pi},\\; e^{i5\\pi/3}",
          "explanation": "Complete solution set.",
          "diagram": null
        }
      ],
      "finalAnswer": "$e^{i\\pi/3}$, $e^{i\\pi}$, $e^{i5\\pi/3}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "De Moivre's theorem",
    "subtopicId": "fm.y2.pure.de-moivre",
    "questionDiagram": null,
    "id": "fm.y2.pure.de-moivre.q039",
    "tags": [
      "quintic",
      "equations",
      "roots"
    ],
    "difficulty": "Intermediate",
    "marks": 7,
    "answerType": "written",
    "questionText": "Solve $z^{5} = 32e^{i\\frac{\\pi}{2}}$, giving all roots in the form $re^{i\\theta}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write $w$ in exponential form",
          "workingLatex": "w = 32e^{i\\frac{\\pi}{2}}",
          "explanation": "Convert the right-hand side.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up equation",
          "workingLatex": "z^{5} = 32e^{i\\frac{\\pi}{2}}",
          "explanation": "Standard form for root-finding.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "De Moivre for roots",
          "workingLatex": "z = r^{1/5}e^{i(\\theta + 2k\\pi)/5}",
          "explanation": "General solution formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Modulus",
          "workingLatex": "|z| = 2",
          "explanation": "All roots have the same modulus.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Values of $k$",
          "workingLatex": "k = 0, 1, \\ldots, 4",
          "explanation": "Distinct roots.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute each root",
          "workingLatex": "k=0: 2e^{i\\pi/10};\\; k=1: 2e^{i\\pi/2};\\; k=2: 2e^{i9\\pi/10};\\; k=3: 2e^{i13\\pi/10};\\; k=4: 2e^{i17\\pi/10}",
          "explanation": "Substitute each $k$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify one root",
          "workingLatex": "(2e^{i\\pi/10})^{5} = 32e^{i\\frac{\\pi}{2}}",
          "explanation": "Check by raising a root to power $n$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Geometric description",
          "workingLatex": "\\text{Regular 5-gon on circle } |z|=2",
          "explanation": "Roots equally spaced.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "2e^{i\\pi/10},\\; 2e^{i\\pi/2},\\; 2e^{i9\\pi/10},\\; 2e^{i13\\pi/10},\\; 2e^{i17\\pi/10}",
          "explanation": "Complete solution set.",
          "diagram": null
        }
      ],
      "finalAnswer": "$2e^{i\\pi/10}$, $2e^{i\\pi/2}$, $2e^{i9\\pi/10}$, $2e^{i13\\pi/10}$, $2e^{i17\\pi/10}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "De Moivre's theorem",
    "subtopicId": "fm.y2.pure.de-moivre",
    "questionDiagram": null,
    "id": "fm.y2.pure.de-moivre.q040",
    "tags": [
      "square",
      "equations",
      "roots"
    ],
    "difficulty": "Intermediate",
    "marks": 7,
    "answerType": "written",
    "questionText": "Solve $z^{2} = 25e^{i0}$, giving all roots in the form $re^{i\\theta}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write $w$ in exponential form",
          "workingLatex": "w = 25e^{i0}",
          "explanation": "Convert the right-hand side.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up equation",
          "workingLatex": "z^{2} = 25e^{i0}",
          "explanation": "Standard form for root-finding.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "De Moivre for roots",
          "workingLatex": "z = r^{1/2}e^{i(\\theta + 2k\\pi)/2}",
          "explanation": "General solution formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Modulus",
          "workingLatex": "|z| = 5",
          "explanation": "All roots have the same modulus.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Values of $k$",
          "workingLatex": "k = 0, 1, \\ldots, 1",
          "explanation": "Distinct roots.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute each root",
          "workingLatex": "k=0: 5;\\; k=1: -5",
          "explanation": "Substitute each $k$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify one root",
          "workingLatex": "(5)^{2} = 25e^{i0}",
          "explanation": "Check by raising a root to power $n$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Geometric description",
          "workingLatex": "\\text{Regular 2-gon on circle } |z|=5",
          "explanation": "Roots equally spaced.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "5,\\; -5",
          "explanation": "Complete solution set.",
          "diagram": null
        }
      ],
      "finalAnswer": "$5$, $-5$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "De Moivre's theorem",
    "subtopicId": "fm.y2.pure.de-moivre",
    "questionDiagram": null,
    "id": "fm.y2.pure.de-moivre.q041",
    "tags": [
      "double-angle",
      "multiple-angle"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Using De Moivre's theorem, express $\\cos 2\\theta$ and $\\sin 2\\theta$ in terms of powers of $\\cos\\theta$ and $\\sin\\theta$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "De Moivre's theorem",
          "workingLatex": "(\\cos\\theta + i\\sin\\theta)^{2} = \\cos 2\\theta + i\\sin 2\\theta",
          "explanation": "Integer power form.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Binomial expansion",
          "workingLatex": "(\\cos\\theta + i\\sin\\theta)^{2} = \\sum_{k=0}^{2} \\binom{2}{k}(\\cos\\theta)^{2-k}(i\\sin\\theta)^{k}",
          "explanation": "Expand using the binomial theorem.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Separate real and imaginary",
          "workingLatex": "\\text{Re: terms with even powers of } i",
          "explanation": "Only even $k$ contribute to the real part.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Cosine result",
          "workingLatex": "\\cos 2\\theta = \\cos^{2}\\theta - \\sin^{2}\\theta",
          "explanation": "Equate real parts.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Separate imaginary",
          "workingLatex": "\\text{Im: terms with odd powers of } i",
          "explanation": "Odd $k$ contribute to the imaginary part.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Sine result",
          "workingLatex": "\\sin 2\\theta = 2\\sin\\theta\\cos\\theta",
          "explanation": "Equate imaginary parts (after dividing by $i$).",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify small angle",
          "workingLatex": "\\theta = 0 \\text{ gives } \\cos 0 = 1",
          "explanation": "Sanity check at $\\theta = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Application",
          "workingLatex": "\\text{Use to expand } \\cos 2\\theta \\text{ or solve equations}",
          "explanation": "Multiple-angle identities follow from De Moivre.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\cos 2\\theta = \\cos^{2}\\theta - \\sin^{2}\\theta;\\; \\sin 2\\theta = 2\\sin\\theta\\cos\\theta",
          "explanation": "Both identities.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\cos 2\\theta = \\cos^{2}\\theta - \\sin^{2}\\theta$, $\\sin 2\\theta = 2\\sin\\theta\\cos\\theta$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "De Moivre's theorem",
    "subtopicId": "fm.y2.pure.de-moivre",
    "questionDiagram": null,
    "id": "fm.y2.pure.de-moivre.q042",
    "tags": [
      "triple-angle",
      "multiple-angle"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Using De Moivre's theorem, express $\\cos 3\\theta$ and $\\sin 3\\theta$ in terms of powers of $\\cos\\theta$ and $\\sin\\theta$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "De Moivre's theorem",
          "workingLatex": "(\\cos\\theta + i\\sin\\theta)^{3} = \\cos 3\\theta + i\\sin 3\\theta",
          "explanation": "Integer power form.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Binomial expansion",
          "workingLatex": "(\\cos\\theta + i\\sin\\theta)^{3} = \\sum_{k=0}^{3} \\binom{3}{k}(\\cos\\theta)^{3-k}(i\\sin\\theta)^{k}",
          "explanation": "Expand using the binomial theorem.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Separate real and imaginary",
          "workingLatex": "\\text{Re: terms with even powers of } i",
          "explanation": "Only even $k$ contribute to the real part.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Cosine result",
          "workingLatex": "\\cos 3\\theta = 4\\cos^{3}\\theta - 3\\cos\\theta",
          "explanation": "Equate real parts.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Separate imaginary",
          "workingLatex": "\\text{Im: terms with odd powers of } i",
          "explanation": "Odd $k$ contribute to the imaginary part.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Sine result",
          "workingLatex": "\\sin 3\\theta = 3\\sin\\theta - 4\\sin^{3}\\theta",
          "explanation": "Equate imaginary parts (after dividing by $i$).",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify small angle",
          "workingLatex": "\\theta = 0 \\text{ gives } \\cos 0 = 1",
          "explanation": "Sanity check at $\\theta = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Application",
          "workingLatex": "\\text{Use to expand } \\cos 3\\theta \\text{ or solve equations}",
          "explanation": "Multiple-angle identities follow from De Moivre.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\cos 3\\theta = 4\\cos^{3}\\theta - 3\\cos\\theta;\\; \\sin 3\\theta = 3\\sin\\theta - 4\\sin^{3}\\theta",
          "explanation": "Both identities.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\cos 3\\theta = 4\\cos^{3}\\theta - 3\\cos\\theta$, $\\sin 3\\theta = 3\\sin\\theta - 4\\sin^{3}\\theta$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "De Moivre's theorem",
    "subtopicId": "fm.y2.pure.de-moivre",
    "questionDiagram": null,
    "id": "fm.y2.pure.de-moivre.q043",
    "tags": [
      "proof",
      "induction",
      "proof"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Prove the base case $n=1$ of De Moivre's theorem: $(\\cos\\theta + i\\sin\\theta)^{n} = \\cos n\\theta + i\\sin n\\theta$, and outline the inductive step.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Statement",
          "workingLatex": "P(n): (\\cos\\theta + i\\sin\\theta)^{n} = \\cos n\\theta + i\\sin n\\theta",
          "explanation": "De Moivre's theorem for positive integers.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Base case $n=1$",
          "workingLatex": "(\\cos\\theta + i\\sin\\theta)^{1} = \\cos\\theta + i\\sin\\theta",
          "explanation": "LHS equals RHS when $n=1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "LHS at $n=1$",
          "workingLatex": "= \\cos(1\\cdot\\theta) + i\\sin(1\\cdot\\theta)",
          "explanation": "Substitute into RHS formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Conclusion base",
          "workingLatex": "P(1) \\text{ is true}",
          "explanation": "Base case verified.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Inductive hypothesis",
          "workingLatex": "\\text{Assume } P(k) \\text{ true for some } k \\geq 1",
          "explanation": "Assume the statement holds for $n=k$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Consider $P(k+1)$",
          "workingLatex": "(\\cos\\theta + i\\sin\\theta)^{k+1}",
          "explanation": "Need to prove for $n=k+1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Split power",
          "workingLatex": "= (\\cos\\theta + i\\sin\\theta)^{k} \\cdot (\\cos\\theta + i\\sin\\theta)",
          "explanation": "Separate one factor.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Apply hypothesis",
          "workingLatex": "= (\\cos k\\theta + i\\sin k\\theta)(\\cos\\theta + i\\sin\\theta)",
          "explanation": "Use $P(k)$ on the first factor.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\text{Base case } n=1 \\text{ verified; inductive step uses angle addition}",
          "explanation": "Proof structure established.",
          "diagram": null
        }
      ],
      "finalAnswer": "Base case: $(\\cos\\theta+i\\sin\\theta)^1=\\cos\\theta+i\\sin\\theta$ ✓. Inductive step: multiply $P(k)$ by $(\\cos\\theta+i\\sin\\theta)$ and use compound angle formulae."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "De Moivre's theorem",
    "subtopicId": "fm.y2.pure.de-moivre",
    "questionDiagram": null,
    "id": "fm.y2.pure.de-moivre.q044",
    "tags": [
      "2pi/3",
      "powers",
      "rectangular"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find $(-1+1.7320508075688772i)^{2}$, giving your answer in the form $a + bi$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Modulus",
          "workingLatex": "|z| = \\sqrt{3.9999999999999996}",
          "explanation": "Distance from origin.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Argument",
          "workingLatex": "\\arg(z) = \\tan^{-1}\\!\\left(\\frac{1.7320508075688772}{-1}\\right)",
          "explanation": "Principal argument.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Exponential form",
          "workingLatex": "z = \\sqrt{3.9999999999999996}e^{i\\theta}",
          "explanation": "Write in exponential form.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply De Moivre",
          "workingLatex": "z^{2} = (\\sqrt{3.9999999999999996})^{2} e^{i2\\theta}",
          "explanation": "Raise modulus and multiply argument.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Modulus result",
          "workingLatex": "|z|^{2} = \\sqrt{3.9999999999999996}^{2}",
          "explanation": "Compute $r^n$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Expand using trig",
          "workingLatex": "z^{2} = \\sqrt{3.9999999999999996}^{2}(\\cos 2\\theta + i\\sin 2\\theta)",
          "explanation": "Euler's formula.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Rectangular form",
          "workingLatex": "z^{2} = -2-3.4641016151377544i",
          "explanation": "Evaluate real and imaginary parts.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify",
          "workingLatex": "|z^{2}| = \\sqrt{3.9999999999999996}^{2}",
          "explanation": "Modulus check.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "-2-3.4641016151377544i",
          "explanation": "Final $a+bi$ form.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(-1+1.7320508075688772i)^{2} = -2-3.4641016151377544i$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "De Moivre's theorem",
    "subtopicId": "fm.y2.pure.de-moivre",
    "questionDiagram": null,
    "id": "fm.y2.pure.de-moivre.q045",
    "tags": [
      "4pi/3",
      "powers",
      "rectangular"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find $(1+1.7320508075688772i)^{4}$, giving your answer in the form $a + bi$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Modulus",
          "workingLatex": "|z| = \\sqrt{3.9999999999999996}",
          "explanation": "Distance from origin.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Argument",
          "workingLatex": "\\arg(z) = \\tan^{-1}\\!\\left(\\frac{1.7320508075688772}{1}\\right)",
          "explanation": "Principal argument.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Exponential form",
          "workingLatex": "z = \\sqrt{3.9999999999999996}e^{i\\theta}",
          "explanation": "Write in exponential form.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply De Moivre",
          "workingLatex": "z^{4} = (\\sqrt{3.9999999999999996})^{4} e^{i4\\theta}",
          "explanation": "Raise modulus and multiply argument.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Modulus result",
          "workingLatex": "|z|^{4} = \\sqrt{3.9999999999999996}^{4}",
          "explanation": "Compute $r^n$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Expand using trig",
          "workingLatex": "z^{4} = \\sqrt{3.9999999999999996}^{4}(\\cos 4\\theta + i\\sin 4\\theta)",
          "explanation": "Euler's formula.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Rectangular form",
          "workingLatex": "z^{4} = -8-13.856406460551018i",
          "explanation": "Evaluate real and imaginary parts.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify",
          "workingLatex": "|z^{4}| = \\sqrt{3.9999999999999996}^{4}",
          "explanation": "Modulus check.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "-8-13.856406460551018i",
          "explanation": "Final $a+bi$ form.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(1+1.7320508075688772i)^{4} = -8-13.856406460551018i$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "De Moivre's theorem",
    "subtopicId": "fm.y2.pure.de-moivre",
    "questionDiagram": null,
    "id": "fm.y2.pure.de-moivre.q046",
    "tags": [
      "powers"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Given $z = 2e^{i\\frac{\\pi}{4}}$, find $z^{4}$ in the form $re^{i\\theta}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "De Moivre's theorem",
          "workingLatex": "(re^{i\\theta})^{n} = r^{n}e^{in\\theta}",
          "explanation": "Raise modulus to power $n$; multiply argument by $n$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Given",
          "workingLatex": "z = 2e^{i\\frac{\\pi}{4}}",
          "explanation": "Exponential form.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Modulus power",
          "workingLatex": "r^{4} = 16",
          "explanation": "Compute $r^n$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Argument multiple",
          "workingLatex": "n\\theta = 4 \\times \\frac{\\pi}{4} = \\pi",
          "explanation": "Multiply argument by $n$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Result",
          "workingLatex": "z^{4} = 16e^{i\\pi}",
          "explanation": "De Moivre form.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify range",
          "workingLatex": "\\text{Adjust to } (-\\pi,\\pi] \\text{ if needed}",
          "explanation": "Principal argument may need adjustment.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "De Moivre's theorem",
          "workingLatex": "(re^{i\\theta})^{n}=r^{n}e^{in\\theta}",
          "explanation": "Raise modulus to $n$; multiply argument by $n$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Euler's formula",
          "workingLatex": "e^{i\\theta}=\\cos\\theta+i\\sin\\theta",
          "explanation": "Links exponential and trig forms.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "nth roots",
          "workingLatex": "z^{n}=w \\Rightarrow z=w^{1/n}e^{i2k\\pi/n}",
          "explanation": "There are $n$ distinct roots.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z^{4} = 16e^{i\\pi}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "De Moivre's theorem",
    "subtopicId": "fm.y2.pure.de-moivre",
    "questionDiagram": null,
    "id": "fm.y2.pure.de-moivre.q047",
    "tags": [
      "powers"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Given $z = 3e^{i-\\frac{\\pi}{3}}$, find $z^{3}$ in the form $re^{i\\theta}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "De Moivre's theorem",
          "workingLatex": "(re^{i\\theta})^{n} = r^{n}e^{in\\theta}",
          "explanation": "Raise modulus to power $n$; multiply argument by $n$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Given",
          "workingLatex": "z = 3e^{i-\\frac{\\pi}{3}}",
          "explanation": "Exponential form.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Modulus power",
          "workingLatex": "r^{3} = 27",
          "explanation": "Compute $r^n$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Argument multiple",
          "workingLatex": "n\\theta = 3 \\times -\\frac{\\pi}{3} = -pi",
          "explanation": "Multiply argument by $n$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Result",
          "workingLatex": "z^{3} = 27e^{i-pi}",
          "explanation": "De Moivre form.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify range",
          "workingLatex": "\\text{Adjust to } (-\\pi,\\pi] \\text{ if needed}",
          "explanation": "Principal argument may need adjustment.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "De Moivre's theorem",
          "workingLatex": "(re^{i\\theta})^{n}=r^{n}e^{in\\theta}",
          "explanation": "Raise modulus to $n$; multiply argument by $n$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Euler's formula",
          "workingLatex": "e^{i\\theta}=\\cos\\theta+i\\sin\\theta",
          "explanation": "Links exponential and trig forms.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "nth roots",
          "workingLatex": "z^{n}=w \\Rightarrow z=w^{1/n}e^{i2k\\pi/n}",
          "explanation": "There are $n$ distinct roots.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z^{3} = 27e^{i-pi}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "De Moivre's theorem",
    "subtopicId": "fm.y2.pure.de-moivre",
    "questionDiagram": null,
    "id": "fm.y2.pure.de-moivre.q048",
    "tags": [
      "powers"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Given $z = 2e^{i\\frac{\\pi}{6}}$, find $z^{5}$ in the form $re^{i\\theta}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "De Moivre's theorem",
          "workingLatex": "(re^{i\\theta})^{n} = r^{n}e^{in\\theta}",
          "explanation": "Raise modulus to power $n$; multiply argument by $n$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Given",
          "workingLatex": "z = 2e^{i\\frac{\\pi}{6}}",
          "explanation": "Exponential form.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Modulus power",
          "workingLatex": "r^{5} = 32",
          "explanation": "Compute $r^n$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Argument multiple",
          "workingLatex": "n\\theta = 5 \\times \\frac{\\pi}{6} = \\frac{5\\pi}{6}",
          "explanation": "Multiply argument by $n$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Result",
          "workingLatex": "z^{5} = 32e^{i\\frac{5\\pi}{6}}",
          "explanation": "De Moivre form.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify range",
          "workingLatex": "\\text{Adjust to } (-\\pi,\\pi] \\text{ if needed}",
          "explanation": "Principal argument may need adjustment.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "De Moivre's theorem",
          "workingLatex": "(re^{i\\theta})^{n}=r^{n}e^{in\\theta}",
          "explanation": "Raise modulus to $n$; multiply argument by $n$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Euler's formula",
          "workingLatex": "e^{i\\theta}=\\cos\\theta+i\\sin\\theta",
          "explanation": "Links exponential and trig forms.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "nth roots",
          "workingLatex": "z^{n}=w \\Rightarrow z=w^{1/n}e^{i2k\\pi/n}",
          "explanation": "There are $n$ distinct roots.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z^{5} = 32e^{i\\frac{5\\pi}{6}}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "De Moivre's theorem",
    "subtopicId": "fm.y2.pure.de-moivre",
    "questionDiagram": null,
    "id": "fm.y2.pure.de-moivre.q049",
    "tags": [
      "powers"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Given $z = 4e^{i-\\frac{\\pi}{4}}$, find $z^{2}$ in the form $re^{i\\theta}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "De Moivre's theorem",
          "workingLatex": "(re^{i\\theta})^{n} = r^{n}e^{in\\theta}",
          "explanation": "Raise modulus to power $n$; multiply argument by $n$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Given",
          "workingLatex": "z = 4e^{i-\\frac{\\pi}{4}}",
          "explanation": "Exponential form.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Modulus power",
          "workingLatex": "r^{2} = 16",
          "explanation": "Compute $r^n$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Argument multiple",
          "workingLatex": "n\\theta = 2 \\times -\\frac{\\pi}{4} = -\\frac{\\pi}{2}",
          "explanation": "Multiply argument by $n$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Result",
          "workingLatex": "z^{2} = 16e^{i-\\frac{\\pi}{2}}",
          "explanation": "De Moivre form.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify range",
          "workingLatex": "\\text{Adjust to } (-\\pi,\\pi] \\text{ if needed}",
          "explanation": "Principal argument may need adjustment.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "De Moivre's theorem",
          "workingLatex": "(re^{i\\theta})^{n}=r^{n}e^{in\\theta}",
          "explanation": "Raise modulus to $n$; multiply argument by $n$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Euler's formula",
          "workingLatex": "e^{i\\theta}=\\cos\\theta+i\\sin\\theta",
          "explanation": "Links exponential and trig forms.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "nth roots",
          "workingLatex": "z^{n}=w \\Rightarrow z=w^{1/n}e^{i2k\\pi/n}",
          "explanation": "There are $n$ distinct roots.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z^{2} = 16e^{i-\\frac{\\pi}{2}}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "De Moivre's theorem",
    "subtopicId": "fm.y2.pure.de-moivre",
    "questionDiagram": null,
    "id": "fm.y2.pure.de-moivre.q050",
    "tags": [
      "powers"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Given $z = 2e^{i\\frac{3\\pi}{4}}$, find $z^{3}$ in the form $re^{i\\theta}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "De Moivre's theorem",
          "workingLatex": "(re^{i\\theta})^{n} = r^{n}e^{in\\theta}",
          "explanation": "Raise modulus to power $n$; multiply argument by $n$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Given",
          "workingLatex": "z = 2e^{i\\frac{3\\pi}{4}}",
          "explanation": "Exponential form.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Modulus power",
          "workingLatex": "r^{3} = 8",
          "explanation": "Compute $r^n$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Argument multiple",
          "workingLatex": "n\\theta = 3 \\times \\frac{3\\pi}{4} = 9pi/4",
          "explanation": "Multiply argument by $n$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Result",
          "workingLatex": "z^{3} = 8e^{i9pi/4}",
          "explanation": "De Moivre form.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify range",
          "workingLatex": "\\text{Adjust to } (-\\pi,\\pi] \\text{ if needed}",
          "explanation": "Principal argument may need adjustment.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "De Moivre's theorem",
          "workingLatex": "(re^{i\\theta})^{n}=r^{n}e^{in\\theta}",
          "explanation": "Raise modulus to $n$; multiply argument by $n$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Euler's formula",
          "workingLatex": "e^{i\\theta}=\\cos\\theta+i\\sin\\theta",
          "explanation": "Links exponential and trig forms.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "nth roots",
          "workingLatex": "z^{n}=w \\Rightarrow z=w^{1/n}e^{i2k\\pi/n}",
          "explanation": "There are $n$ distinct roots.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z^{3} = 8e^{i9pi/4}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "De Moivre's theorem",
    "subtopicId": "fm.y2.pure.de-moivre",
    "questionDiagram": null,
    "id": "fm.y2.pure.de-moivre.q051",
    "tags": [
      "powers"
    ],
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "questionText": "Find $(1 + i\\sqrt{3})^{6}$, giving your answer in the form $a + bi$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Modulus",
          "workingLatex": "|1+i\\sqrt{3}| = 2",
          "explanation": "Distance from origin.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Argument",
          "workingLatex": "\\arg = \\pi/3",
          "explanation": "Standard angle.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Exponential form",
          "workingLatex": "1+i\\sqrt{3} = 2e^{i\\pi/3}",
          "explanation": "Write using De Moivre setup.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply De Moivre",
          "workingLatex": "(2e^{i\\pi/3})^{6} = 2^{6}e^{i\\cdot 6\\pi/3} = 64e^{i2\\pi}",
          "explanation": "Raise modulus and multiply argument.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "64e^{i2\\pi} = 64(1) = 64",
          "explanation": "Full rotation returns to the positive real axis.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify algebraically",
          "workingLatex": "(1+i\\sqrt{3})^{2} = -2+2i\\sqrt{3}",
          "explanation": "Square first as check.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Continue squaring",
          "workingLatex": "(-2+2i\\sqrt{3})^{2} = -8-8i\\sqrt{3}",
          "explanation": "Fourth power.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Final multiply",
          "workingLatex": "(-8-8i\\sqrt{3})(-2+2i\\sqrt{3}) = 64",
          "explanation": "Confirms result.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Geometric view",
          "workingLatex": "6 \\times \\pi/3 = 2\\pi",
          "explanation": "Six rotations of $60°$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Cube roots link",
          "workingLatex": "1+i\\sqrt{3} \\text{ is a sixth root of } 64",
          "explanation": "Connection to roots.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Modulus check",
          "workingLatex": "|64| = 64 = 2^{6}",
          "explanation": "Consistent.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Answer form",
          "workingLatex": "64 + 0i",
          "explanation": "Purely real.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Final",
          "workingLatex": "64",
          "explanation": "Simplified answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(1 + i\\sqrt{3})^{6} = 64$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "De Moivre's theorem",
    "subtopicId": "fm.y2.pure.de-moivre",
    "questionDiagram": null,
    "id": "fm.y2.pure.de-moivre.q052",
    "tags": [
      "roots",
      "equations"
    ],
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "questionText": "Find all complex numbers $z$ such that $z^{4} = -4$, giving each root in the form $re^{i\\theta}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write $-4$ in exponential form",
          "workingLatex": "-4 = 4e^{i\\pi}",
          "explanation": "Principal argument of $-4$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up",
          "workingLatex": "z^{4} = 4e^{i\\pi}",
          "explanation": "Equation in exponential form.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "De Moivre for roots",
          "workingLatex": "z = 4^{1/4}e^{i(\\pi + 2k\\pi)/4}",
          "explanation": "General root formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Modulus",
          "workingLatex": "|z| = \\sqrt{2}",
          "explanation": "Fourth root of 4.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "$k=0$",
          "workingLatex": "z = \\sqrt{2}e^{i\\pi/4}",
          "explanation": "First root.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "$k=1$",
          "workingLatex": "z = \\sqrt{2}e^{i3\\pi/4}",
          "explanation": "Second root.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "$k=2$",
          "workingLatex": "z = \\sqrt{2}e^{i5\\pi/4}",
          "explanation": "Third root.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "$k=3$",
          "workingLatex": "z = \\sqrt{2}e^{i7\\pi/4}",
          "explanation": "Fourth root.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify",
          "workingLatex": "(\\sqrt{2}e^{i\\pi/4})^{4} = 4e^{i\\pi} = -4",
          "explanation": "Check first root.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Geometric view",
          "workingLatex": "\\text{Square vertices on circle } |z|=\\sqrt{2}",
          "explanation": "Regular quadrilateral.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Rectangular forms",
          "workingLatex": "\\pm\\sqrt{2}(\\pm 1 + i)/\\sqrt{2}",
          "explanation": "Optional conversion.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Sum of roots",
          "workingLatex": "\\text{Sum} = 0",
          "explanation": "Property of $z^{4} = -4$ excluding real factor.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Answer",
          "workingLatex": "\\sqrt{2}e^{i\\pi/4},\\; \\sqrt{2}e^{i3\\pi/4},\\; \\sqrt{2}e^{i5\\pi/4},\\; \\sqrt{2}e^{i7\\pi/4}",
          "explanation": "All four roots.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z = \\sqrt{2}e^{i\\pi/4}$, $\\sqrt{2}e^{i3\\pi/4}$, $\\sqrt{2}e^{i5\\pi/4}$, $\\sqrt{2}e^{i7\\pi/4}$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "De Moivre's theorem",
    "subtopicId": "fm.y2.pure.de-moivre",
    "questionDiagram": null,
    "id": "fm.y2.pure.de-moivre.q053",
    "tags": [
      "identity",
      "equations"
    ],
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "questionText": "Using De Moivre's theorem, show that $\\cos 3\\theta = 4\\cos^{3}\\theta - 3\\cos\\theta$. Hence solve $\\cos 3\\theta = \\cos\\theta$ for $0 \\leq \\theta < 2\\pi$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "De Moivre",
          "workingLatex": "(\\cos\\theta + i\\sin\\theta)^{3} = \\cos 3\\theta + i\\sin 3\\theta",
          "explanation": "Cube both sides.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expand LHS",
          "workingLatex": "\\cos^{3}\\theta + 3i\\cos^{2}\\theta\\sin\\theta - 3\\cos\\theta\\sin^{2}\\theta - i\\sin^{3}\\theta",
          "explanation": "Binomial expansion.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Real part",
          "workingLatex": "\\cos 3\\theta = \\cos^{3}\\theta - 3\\cos\\theta\\sin^{2}\\theta",
          "explanation": "Equate real parts.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute $\\sin^{2}\\theta$",
          "workingLatex": "= \\cos^{3}\\theta - 3\\cos\\theta(1-\\cos^{2}\\theta)",
          "explanation": "Use $\\sin^{2}\\theta = 1 - \\cos^{2}\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "= 4\\cos^{3}\\theta - 3\\cos\\theta",
          "explanation": "Identity proved.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve equation",
          "workingLatex": "4\\cos^{3}\\theta - 3\\cos\\theta = \\cos\\theta",
          "explanation": "Substitute identity.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Rearrange",
          "workingLatex": "4\\cos^{3}\\theta - 4\\cos\\theta = 0",
          "explanation": "Bring terms together.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Factorise",
          "workingLatex": "4\\cos\\theta(\\cos^{2}\\theta - 1) = 0",
          "explanation": "Factor out $\\cos\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solutions",
          "workingLatex": "\\cos\\theta = 0 \\text{ or } \\cos\\theta = \\pm 1",
          "explanation": "Two cases.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "$\\cos\\theta = 0$",
          "workingLatex": "\\theta = \\pi/2,\\; 3\\pi/2",
          "explanation": "In $[0, 2\\pi)$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "$\\cos\\theta = 1$",
          "workingLatex": "\\theta = 0",
          "explanation": "Principal value.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "$\\cos\\theta = -1$",
          "workingLatex": "\\theta = \\pi",
          "explanation": "Second solution.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Answer",
          "workingLatex": "\\theta = 0,\\; \\pi/2,\\; \\pi,\\; 3\\pi/2",
          "explanation": "All solutions in the interval.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\cos 3\\theta = 4\\cos^{3}\\theta - 3\\cos\\theta$; solutions: $\\theta = 0,\\, \\frac{\\pi}{2},\\, \\pi,\\, \\frac{3\\pi}{2}$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "De Moivre's theorem",
    "subtopicId": "fm.y2.pure.de-moivre",
    "questionDiagram": null,
    "id": "fm.y2.pure.de-moivre.q054",
    "tags": [
      "roots",
      "geometry"
    ],
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "questionText": "The complex number $z = 1 + i$ has $n$th roots $w_k = r e^{i(\\pi/4 + 2k\\pi/n)}$. For $n=8$, find all roots and show they are the vertices of a regular octagon.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Modulus of $z$",
          "workingLatex": "|1+i| = \\sqrt{2}",
          "explanation": "Compute $r$ for $z$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Argument of $z$",
          "workingLatex": "\\arg(1+i) = \\pi/4",
          "explanation": "First quadrant.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Root modulus",
          "workingLatex": "r = (\\sqrt{2})^{1/8} = 2^{1/16}",
          "explanation": "Eighth root of modulus.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "General root",
          "workingLatex": "w_k = 2^{1/16}e^{i(\\pi/32 + k\\pi/4)}",
          "explanation": "For $k = 0, 1, \\ldots, 7$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "List $k=0$ to $7$",
          "workingLatex": "\\text{Arguments: } \\pi/32,\\; 9\\pi/32,\\; \\ldots,\\; 15\\pi/16",
          "explanation": "Equally spaced by $\\pi/4$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Equal spacing",
          "workingLatex": "\\text{Angle increment} = 2\\pi/8 = \\pi/4",
          "explanation": "Regular angular separation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Same modulus",
          "workingLatex": "|w_k| = 2^{1/16} \\text{ for all } k",
          "explanation": "All on the same circle.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Octagon property",
          "workingLatex": "8 \\text{ points equally spaced on a circle}",
          "explanation": "Definition of regular octagon vertices.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Product of roots",
          "workingLatex": "\\prod w_k = (1+i)",
          "explanation": "Property of all $n$th roots.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Verify $k=0$",
          "workingLatex": "w_0^{8} = 1+i",
          "explanation": "Check first root.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Geometric centre",
          "workingLatex": "\\text{Origin}",
          "explanation": "Circle centred at origin.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Symmetry",
          "workingLatex": "\\text{Rotational symmetry of order } 8",
          "explanation": "Octagon symmetry.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Answer",
          "workingLatex": "w_k = 2^{1/16}e^{i(\\pi/32 + k\\pi/4)},\\; k=0,\\ldots,7",
          "explanation": "All eighth roots.",
          "diagram": null
        }
      ],
      "finalAnswer": "$w_k = 2^{1/16}e^{i(\\pi/32 + k\\pi/4)}$ for $k = 0, 1, \\ldots, 7$; equally spaced on $|w| = 2^{1/16}$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "De Moivre's theorem",
    "subtopicId": "fm.y2.pure.de-moivre",
    "questionDiagram": null,
    "id": "fm.y2.pure.de-moivre.q055",
    "tags": [
      "induction",
      "proof"
    ],
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "questionText": "Prove by induction that $(\\cos\\theta + i\\sin\\theta)^{n} = \\cos n\\theta + i\\sin n\\theta$ for all positive integers $n$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Statement $P(n)$",
          "workingLatex": "P(n): (\\cos\\theta + i\\sin\\theta)^{n} = \\cos n\\theta + i\\sin n\\theta",
          "explanation": "De Moivre's theorem.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Base case $n=1$",
          "workingLatex": "\\cos\\theta + i\\sin\\theta = \\cos\\theta + i\\sin\\theta",
          "explanation": "Trivially true.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Assume $P(k)$",
          "workingLatex": "(\\cos\\theta + i\\sin\\theta)^{k} = \\cos k\\theta + i\\sin k\\theta",
          "explanation": "Inductive hypothesis.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Consider $P(k+1)$",
          "workingLatex": "(\\cos\\theta + i\\sin\\theta)^{k+1}",
          "explanation": "Target statement.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Split",
          "workingLatex": "= (\\cos\\theta + i\\sin\\theta)^{k}(\\cos\\theta + i\\sin\\theta)",
          "explanation": "Separate one factor.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply $P(k)$",
          "workingLatex": "= (\\cos k\\theta + i\\sin k\\theta)(\\cos\\theta + i\\sin\\theta)",
          "explanation": "Use hypothesis.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Expand",
          "workingLatex": "= \\cos k\\theta\\cos\\theta - \\sin k\\theta\\sin\\theta + i(\\sin k\\theta\\cos\\theta + \\cos k\\theta\\sin\\theta)",
          "explanation": "Multiply out.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compound angle",
          "workingLatex": "= \\cos(k\\theta + \\theta) + i\\sin(k\\theta + \\theta)",
          "explanation": "Use $\\cos(A+B)$ and $\\sin(A+B)$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Simplify",
          "workingLatex": "= \\cos((k+1)\\theta) + i\\sin((k+1)\\theta)",
          "explanation": "Combine angles.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Conclusion",
          "workingLatex": "P(k+1) \\text{ is true}",
          "explanation": "Inductive step complete.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "By induction",
          "workingLatex": "P(n) \\text{ true for all } n \\in \\mathbb{Z}^{+}",
          "explanation": "Base case and inductive step.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Corollary",
          "workingLatex": "(re^{i\\theta})^{n} = r^{n}e^{in\\theta}",
          "explanation": "Extends to mod–arg form.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Answer",
          "workingLatex": "\\text{De Moivre proved by induction}",
          "explanation": "Complete proof.",
          "diagram": null
        }
      ],
      "finalAnswer": "Base case $n=1$ ✓. Inductive step uses compound angle formulae to show $P(k) \\Rightarrow P(k+1)$. Hence true for all positive integers $n$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "De Moivre's theorem",
    "subtopicId": "fm.y2.pure.de-moivre",
    "questionDiagram": null,
    "id": "fm.y2.pure.de-moivre.q056",
    "tags": [
      "powers",
      "division"
    ],
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "questionText": "Find $\\dfrac{(1 + i)^{10}}{(1 - i)^{10}}$ without expanding fully, giving your answer in the form $a + bi$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Modulus of $1+i$",
          "workingLatex": "|1+i| = \\sqrt{2}",
          "explanation": "Compute modulus.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Argument of $1+i$",
          "workingLatex": "\\arg = \\pi/4",
          "explanation": "First quadrant.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Exponential form",
          "workingLatex": "1+i = \\sqrt{2}e^{i\\pi/4}",
          "explanation": "Write in exponential form.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Similarly $1-i$",
          "workingLatex": "1-i = \\sqrt{2}e^{-i\\pi/4}",
          "explanation": "Fourth quadrant.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Numerator",
          "workingLatex": "(1+i)^{10} = (\\sqrt{2})^{10}e^{i10\\pi/4} = 32e^{i5\\pi/2}",
          "explanation": "Apply De Moivre.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify exponent",
          "workingLatex": "e^{i5\\pi/2} = e^{i\\pi/2} = i",
          "explanation": "Reduce angle mod $2\\pi$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Numerator value",
          "workingLatex": "32i",
          "explanation": "Simplified.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Denominator",
          "workingLatex": "(1-i)^{10} = (\\sqrt{2})^{10}e^{-i10\\pi/4} = 32e^{-i5\\pi/2}",
          "explanation": "Apply De Moivre.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Simplify",
          "workingLatex": "e^{-i5\\pi/2} = e^{-i\\pi/2} = -i",
          "explanation": "Reduce angle.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Denominator value",
          "workingLatex": "-32i",
          "explanation": "Simplified.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Divide",
          "workingLatex": "\\frac{32i}{-32i} = -1",
          "explanation": "Cancel.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Alternative",
          "workingLatex": "\\frac{(1+i)^{10}}{(1-i)^{10}} = \\left(\\frac{1+i}{1-i}\\right)^{10}",
          "explanation": "Single fraction.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Answer",
          "workingLatex": "-1 + 0i",
          "explanation": "Final result.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{(1 + i)^{10}}{(1 - i)^{10}} = -1$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "De Moivre's theorem",
    "subtopicId": "fm.y2.pure.de-moivre",
    "questionDiagram": null,
    "id": "fm.y2.pure.de-moivre.q057",
    "tags": [
      "roots",
      "equations"
    ],
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "questionText": "Solve $z^{3} = 8i$, giving all roots in the form $a + bi$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write $8i$ exponentially",
          "workingLatex": "8i = 8e^{i\\pi/2}",
          "explanation": "Principal argument.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up",
          "workingLatex": "z^{3} = 8e^{i\\pi/2}",
          "explanation": "Cube root problem.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Root modulus",
          "workingLatex": "|z| = 2",
          "explanation": "Cube root of 8.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "General argument",
          "workingLatex": "\\arg(z) = \\frac{\\pi/2 + 2k\\pi}{3}",
          "explanation": "For $k = 0, 1, 2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "$k=0$",
          "workingLatex": "z = 2e^{i\\pi/6} = 2(\\cos\\pi/6 + i\\sin\\pi/6) = \\sqrt{3} + i",
          "explanation": "First root.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "$k=1$",
          "workingLatex": "z = 2e^{i5\\pi/6} = -\\sqrt{3} + i",
          "explanation": "Second root.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "$k=2$",
          "workingLatex": "z = 2e^{i3\\pi/2} = -2i",
          "explanation": "Third root.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify $k=0$",
          "workingLatex": "(\\sqrt{3}+i)^{3} = 8i",
          "explanation": "Check by cubing.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Geometric view",
          "workingLatex": "\\text{Equilateral triangle on circle } |z|=2",
          "explanation": "Three equally spaced roots.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Sum of roots",
          "workingLatex": "\\sqrt{3}+i + (-\\sqrt{3}+i) + (-2i) = 0",
          "explanation": "Roots sum to zero.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Product",
          "workingLatex": "\\text{Product} = 8i",
          "explanation": "Product of all roots equals constant term.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Alternative form",
          "workingLatex": "2e^{i\\pi/6},\\; 2e^{i5\\pi/6},\\; 2e^{i3\\pi/2}",
          "explanation": "Exponential forms.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Answer",
          "workingLatex": "\\sqrt{3}+i,\\; -\\sqrt{3}+i,\\; -2i",
          "explanation": "All three roots.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z = \\sqrt{3}+i$, $-\\sqrt{3}+i$, or $-2i$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "De Moivre's theorem",
    "subtopicId": "fm.y2.pure.de-moivre",
    "questionDiagram": null,
    "id": "fm.y2.pure.de-moivre.q058",
    "tags": [
      "powers",
      "reasoning"
    ],
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "questionText": "Find the smallest positive integer $n$ such that $(\\tfrac{1}{2} + \\tfrac{\\sqrt{3}}{2}i)^{n}$ is real. Justify your answer using De Moivre's theorem.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise angle",
          "workingLatex": "\\cos\\pi/3 = 1/2,\\; \\sin\\pi/3 = \\sqrt{3}/2",
          "explanation": "Standard values.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Exponential form",
          "workingLatex": "z = e^{i\\pi/3}",
          "explanation": "Unit modulus.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "De Moivre",
          "workingLatex": "z^{n} = e^{in\\pi/3}",
          "explanation": "Raise to power $n$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Real condition",
          "workingLatex": "\\sin(n\\pi/3) = 0",
          "explanation": "Imaginary part must vanish.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve",
          "workingLatex": "n\\pi/3 = k\\pi \\Rightarrow n = 3k",
          "explanation": "Integer multiples of $\\pi$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Smallest positive",
          "workingLatex": "n = 3",
          "explanation": "When $k = 1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify $n=3$",
          "workingLatex": "z^{3} = e^{i\\pi} = -1",
          "explanation": "Purely real.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check $n=1,2$",
          "workingLatex": "z \\text{ and } z^{2} \\text{ are not real}",
          "explanation": "Confirm minimality.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Geometric view",
          "workingLatex": "3 \\times 60° = 180°",
          "explanation": "Three rotations land on negative real axis.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Connection",
          "workingLatex": "z \\text{ is a primitive cube root of unity rotated}",
          "explanation": "Related to roots of unity.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "General pattern",
          "workingLatex": "n \\text{ multiple of } 3 \\text{ gives real powers}",
          "explanation": "All such $n$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Answer justification",
          "workingLatex": "\\arg(z^{n}) = n\\pi/3 \\equiv 0 \\text{ or } \\pi \\pmod{\\pi}",
          "explanation": "Real when argument is $0$ or $\\pi$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Answer",
          "workingLatex": "n = 3",
          "explanation": "Smallest positive integer.",
          "diagram": null
        }
      ],
      "finalAnswer": "Smallest positive integer: $n = 3$, since $z^{3} = e^{i\\pi} = -1$ is real."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "De Moivre's theorem",
    "subtopicId": "fm.y2.pure.de-moivre",
    "questionDiagram": null,
    "id": "fm.y2.pure.de-moivre.q059",
    "tags": [
      "proof",
      "identity"
    ],
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "questionText": "Given $z + \\dfrac{1}{z} = 2\\cos\\theta$, show that $z^{n} + \\dfrac{1}{z^{n}} = 2\\cos n\\theta$ for positive integers $n$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Let $z = e^{i\\theta}$",
          "workingLatex": "z = \\cos\\theta + i\\sin\\theta",
          "explanation": "On the unit circle.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Verify condition",
          "workingLatex": "z + 1/z = e^{i\\theta} + e^{-i\\theta} = 2\\cos\\theta",
          "explanation": "Matches given.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply De Moivre to $z^{n}$",
          "workingLatex": "z^{n} = e^{in\\theta} = \\cos n\\theta + i\\sin n\\theta",
          "explanation": "Raise to power $n$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply to $1/z^{n}$",
          "workingLatex": "1/z^{n} = e^{-in\\theta} = \\cos n\\theta - i\\sin n\\theta",
          "explanation": "Reciprocal.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Add",
          "workingLatex": "z^{n} + 1/z^{n} = 2\\cos n\\theta",
          "explanation": "Imaginary parts cancel.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Alternative: induction",
          "workingLatex": "\\text{Base } n=1 \\text{ given}",
          "explanation": "Inductive approach also works.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Inductive step idea",
          "workingLatex": "z^{k+1} + 1/z^{k+1} = (z^{k}+1/z^{k})(z+1/z) - (z^{k-1}+1/z^{k-1})",
          "explanation": "Recurrence from the given relation.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Chebyshev connection",
          "workingLatex": "\\text{Related to Chebyshev polynomials}",
          "explanation": "Classic identity in trigonometry.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Example $n=2$",
          "workingLatex": "z^{2}+1/z^{2} = 2\\cos 2\\theta = 4\\cos^{2}\\theta - 2",
          "explanation": "Double angle.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Example $n=3$",
          "workingLatex": "= 2\\cos 3\\theta = 8\\cos^{3}\\theta - 6\\cos\\theta",
          "explanation": "Triple angle.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Application",
          "workingLatex": "\\text{Simplify powers of } \\cos\\theta",
          "explanation": "Used in integration and series.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Condition on $|z|$",
          "workingLatex": "|z|=1 \\text{ ensures } 1/z = \\bar{z}",
          "explanation": "Unit modulus essential.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Answer",
          "workingLatex": "z^{n} + z^{-n} = 2\\cos n\\theta",
          "explanation": "Proved.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z^{n} + \\dfrac{1}{z^{n}} = 2\\cos n\\theta$ (using $z = e^{i\\theta}$ and De Moivre)."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "De Moivre's theorem",
    "subtopicId": "fm.y2.pure.de-moivre",
    "questionDiagram": null,
    "id": "fm.y2.pure.de-moivre.q060",
    "tags": [
      "roots",
      "equations"
    ],
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "questionText": "Find all values of $z$ satisfying $z^{6} + 64 = 0$, giving answers in exponential form.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rearrange",
          "workingLatex": "z^{6} = -64",
          "explanation": "Isolate the power.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Exponential form",
          "workingLatex": "-64 = 64e^{i\\pi}",
          "explanation": "Principal argument.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Root modulus",
          "workingLatex": "|z| = 64^{1/6} = 2",
          "explanation": "Sixth root of 64.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "General argument",
          "workingLatex": "\\arg(z) = \\frac{\\pi + 2k\\pi}{6}",
          "explanation": "For $k = 0, 1, \\ldots, 5$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "$k=0$",
          "workingLatex": "z = 2e^{i\\pi/6}",
          "explanation": "First root.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "$k=1$",
          "workingLatex": "z = 2e^{i\\pi/2} = 2i",
          "explanation": "Second root.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "$k=2$",
          "workingLatex": "z = 2e^{i5\\pi/6}",
          "explanation": "Third root.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "$k=3$",
          "workingLatex": "z = 2e^{i7\\pi/6}",
          "explanation": "Fourth root.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "$k=4$",
          "workingLatex": "z = 2e^{i3\\pi/2} = -2i",
          "explanation": "Fifth root.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "$k=5$",
          "workingLatex": "z = 2e^{i11\\pi/6}",
          "explanation": "Sixth root.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Verify",
          "workingLatex": "(2e^{i\\pi/6})^{6} = 64e^{i\\pi} = -64",
          "explanation": "Check first root.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Geometric view",
          "workingLatex": "\\text{Regular hexagon on } |z|=2",
          "explanation": "Six equally spaced roots.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Answer",
          "workingLatex": "2e^{i\\pi/6},\\; 2i,\\; 2e^{i5\\pi/6},\\; 2e^{i7\\pi/6},\\; -2i,\\; 2e^{i11\\pi/6}",
          "explanation": "All six roots.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z = 2e^{i\\pi/6}$, $2i$, $2e^{i5\\pi/6}$, $2e^{i7\\pi/6}$, $-2i$, $2e^{i11\\pi/6}$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "De Moivre's theorem",
    "subtopicId": "fm.y2.pure.de-moivre",
    "questionDiagram": null,
    "id": "fm.y2.pure.de-moivre.q061",
    "tags": [
      "hard",
      "powers",
      "rectangular"
    ],
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "written",
    "questionText": "Find $(2+2i)^{3}$, giving your answer in the form $a + bi$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Modulus",
          "workingLatex": "|z| = \\sqrt{8}",
          "explanation": "Distance from origin.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Argument",
          "workingLatex": "\\arg(z) = \\tan^{-1}\\!\\left(\\frac{2}{2}\\right)",
          "explanation": "Principal argument.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Exponential form",
          "workingLatex": "z = \\sqrt{8}e^{i\\theta}",
          "explanation": "Write in exponential form.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply De Moivre",
          "workingLatex": "z^{3} = (\\sqrt{8})^{3} e^{i3\\theta}",
          "explanation": "Raise modulus and multiply argument.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Modulus result",
          "workingLatex": "|z|^{3} = \\sqrt{8}^{3}",
          "explanation": "Compute $r^n$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Expand using trig",
          "workingLatex": "z^{3} = \\sqrt{8}^{3}(\\cos 3\\theta + i\\sin 3\\theta)",
          "explanation": "Euler's formula.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Rectangular form",
          "workingLatex": "z^{3} = -16+16i",
          "explanation": "Evaluate real and imaginary parts.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify",
          "workingLatex": "|z^{3}| = \\sqrt{8}^{3}",
          "explanation": "Modulus check.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "-16+16i",
          "explanation": "Final $a+bi$ form.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "De Moivre's theorem",
          "workingLatex": "(re^{i\\theta})^{n}=r^{n}e^{in\\theta}",
          "explanation": "Raise modulus to $n$; multiply argument by $n$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Euler's formula",
          "workingLatex": "e^{i\\theta}=\\cos\\theta+i\\sin\\theta",
          "explanation": "Links exponential and trig forms.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "nth roots",
          "workingLatex": "z^{n}=w \\Rightarrow z=w^{1/n}e^{i2k\\pi/n}",
          "explanation": "There are $n$ distinct roots.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Principal argument",
          "workingLatex": "-\\pi<\\theta\\leq\\pi",
          "explanation": "Standard range.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(2+2i)^{3} = -16+16i$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "De Moivre's theorem",
    "subtopicId": "fm.y2.pure.de-moivre",
    "questionDiagram": null,
    "id": "fm.y2.pure.de-moivre.q062",
    "tags": [
      "hard",
      "powers",
      "rectangular"
    ],
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "written",
    "questionText": "Find $(-1+1i)^{4}$, giving your answer in the form $a + bi$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Modulus",
          "workingLatex": "|z| = \\sqrt{2}",
          "explanation": "Distance from origin.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Argument",
          "workingLatex": "\\arg(z) = \\tan^{-1}\\!\\left(\\frac{1}{-1}\\right)",
          "explanation": "Principal argument.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Exponential form",
          "workingLatex": "z = \\sqrt{2}e^{i\\theta}",
          "explanation": "Write in exponential form.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply De Moivre",
          "workingLatex": "z^{4} = (\\sqrt{2})^{4} e^{i4\\theta}",
          "explanation": "Raise modulus and multiply argument.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Modulus result",
          "workingLatex": "|z|^{4} = \\sqrt{2}^{4}",
          "explanation": "Compute $r^n$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Expand using trig",
          "workingLatex": "z^{4} = \\sqrt{2}^{4}(\\cos 4\\theta + i\\sin 4\\theta)",
          "explanation": "Euler's formula.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Rectangular form",
          "workingLatex": "z^{4} = -4",
          "explanation": "Evaluate real and imaginary parts.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify",
          "workingLatex": "|z^{4}| = \\sqrt{2}^{4}",
          "explanation": "Modulus check.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "-4",
          "explanation": "Final $a+bi$ form.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "De Moivre's theorem",
          "workingLatex": "(re^{i\\theta})^{n}=r^{n}e^{in\\theta}",
          "explanation": "Raise modulus to $n$; multiply argument by $n$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Euler's formula",
          "workingLatex": "e^{i\\theta}=\\cos\\theta+i\\sin\\theta",
          "explanation": "Links exponential and trig forms.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "nth roots",
          "workingLatex": "z^{n}=w \\Rightarrow z=w^{1/n}e^{i2k\\pi/n}",
          "explanation": "There are $n$ distinct roots.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Principal argument",
          "workingLatex": "-\\pi<\\theta\\leq\\pi",
          "explanation": "Standard range.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(-1+1i)^{4} = -4$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "De Moivre's theorem",
    "subtopicId": "fm.y2.pure.de-moivre",
    "questionDiagram": null,
    "id": "fm.y2.pure.de-moivre.q063",
    "tags": [
      "cubic",
      "equations",
      "roots"
    ],
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "written",
    "questionText": "Solve $z^{3} = 27e^{i\\frac{\\pi}{2}}$, giving all roots in the form $re^{i\\theta}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write $w$ in exponential form",
          "workingLatex": "w = 27e^{i\\frac{\\pi}{2}}",
          "explanation": "Convert the right-hand side.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up equation",
          "workingLatex": "z^{3} = 27e^{i\\frac{\\pi}{2}}",
          "explanation": "Standard form for root-finding.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "De Moivre for roots",
          "workingLatex": "z = r^{1/3}e^{i(\\theta + 2k\\pi)/3}",
          "explanation": "General solution formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Modulus",
          "workingLatex": "|z| = 3",
          "explanation": "All roots have the same modulus.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Values of $k$",
          "workingLatex": "k = 0, 1, \\ldots, 2",
          "explanation": "Distinct roots.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute each root",
          "workingLatex": "k=0: 3e^{i\\pi/6};\\; k=1: 3e^{i3\\pi/2};\\; k=2: 3e^{i5\\pi/6}",
          "explanation": "Substitute each $k$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify one root",
          "workingLatex": "(3e^{i\\pi/6})^{3} = 27e^{i\\frac{\\pi}{2}}",
          "explanation": "Check by raising a root to power $n$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Geometric description",
          "workingLatex": "\\text{Regular 3-gon on circle } |z|=3",
          "explanation": "Roots equally spaced.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "3e^{i\\pi/6},\\; 3e^{i3\\pi/2},\\; 3e^{i5\\pi/6}",
          "explanation": "Complete solution set.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "De Moivre's theorem",
          "workingLatex": "(re^{i\\theta})^{n}=r^{n}e^{in\\theta}",
          "explanation": "Raise modulus to $n$; multiply argument by $n$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Euler's formula",
          "workingLatex": "e^{i\\theta}=\\cos\\theta+i\\sin\\theta",
          "explanation": "Links exponential and trig forms.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "nth roots",
          "workingLatex": "z^{n}=w \\Rightarrow z=w^{1/n}e^{i2k\\pi/n}",
          "explanation": "There are $n$ distinct roots.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Principal argument",
          "workingLatex": "-\\pi<\\theta\\leq\\pi",
          "explanation": "Standard range.",
          "diagram": null
        }
      ],
      "finalAnswer": "$3e^{i\\pi/6}$, $3e^{i3\\pi/2}$, $3e^{i5\\pi/6}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "De Moivre's theorem",
    "subtopicId": "fm.y2.pure.de-moivre",
    "questionDiagram": null,
    "id": "fm.y2.pure.de-moivre.q064",
    "tags": [
      "quartic",
      "equations",
      "roots"
    ],
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "written",
    "questionText": "Solve $z^{4} = 1e^{i\\frac{\\pi}{4}}$, giving all roots in the form $re^{i\\theta}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write $w$ in exponential form",
          "workingLatex": "w = 1e^{i\\frac{\\pi}{4}}",
          "explanation": "Convert the right-hand side.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up equation",
          "workingLatex": "z^{4} = 1e^{i\\frac{\\pi}{4}}",
          "explanation": "Standard form for root-finding.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "De Moivre for roots",
          "workingLatex": "z = r^{1/4}e^{i(\\theta + 2k\\pi)/4}",
          "explanation": "General solution formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Modulus",
          "workingLatex": "|z| = 1",
          "explanation": "All roots have the same modulus.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Values of $k$",
          "workingLatex": "k = 0, 1, \\ldots, 3",
          "explanation": "Distinct roots.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute each root",
          "workingLatex": "k=0: e^{i\\pi/16};\\; k=1: e^{i9\\pi/16};\\; k=2: e^{i17\\pi/16};\\; k=3: e^{i25\\pi/16}",
          "explanation": "Substitute each $k$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify one root",
          "workingLatex": "(e^{i\\pi/16})^{4} = 1e^{i\\frac{\\pi}{4}}",
          "explanation": "Check by raising a root to power $n$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Geometric description",
          "workingLatex": "\\text{Regular 4-gon on circle } |z|=1",
          "explanation": "Roots equally spaced.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "e^{i\\pi/16},\\; e^{i9\\pi/16},\\; e^{i17\\pi/16},\\; e^{i25\\pi/16}",
          "explanation": "Complete solution set.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "De Moivre's theorem",
          "workingLatex": "(re^{i\\theta})^{n}=r^{n}e^{in\\theta}",
          "explanation": "Raise modulus to $n$; multiply argument by $n$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Euler's formula",
          "workingLatex": "e^{i\\theta}=\\cos\\theta+i\\sin\\theta",
          "explanation": "Links exponential and trig forms.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "nth roots",
          "workingLatex": "z^{n}=w \\Rightarrow z=w^{1/n}e^{i2k\\pi/n}",
          "explanation": "There are $n$ distinct roots.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Principal argument",
          "workingLatex": "-\\pi<\\theta\\leq\\pi",
          "explanation": "Standard range.",
          "diagram": null
        }
      ],
      "finalAnswer": "$e^{i\\pi/16}$, $e^{i9\\pi/16}$, $e^{i17\\pi/16}$, $e^{i25\\pi/16}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "De Moivre's theorem",
    "subtopicId": "fm.y2.pure.de-moivre",
    "questionDiagram": null,
    "id": "fm.y2.pure.de-moivre.q065",
    "tags": [
      "quadruple",
      "multiple-angle"
    ],
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "written",
    "questionText": "Using De Moivre's theorem, express $\\cos 4\\theta$ and $\\sin 4\\theta$ in terms of powers of $\\cos\\theta$ and $\\sin\\theta$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "De Moivre's theorem",
          "workingLatex": "(\\cos\\theta + i\\sin\\theta)^{4} = \\cos 4\\theta + i\\sin 4\\theta",
          "explanation": "Integer power form.",
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
          "description": "Separate real and imaginary",
          "workingLatex": "\\text{Re: terms with even powers of } i",
          "explanation": "Only even $k$ contribute to the real part.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Cosine result",
          "workingLatex": "\\cos 4\\theta = 8\\cos^{4}\\theta - 8\\cos^{2}\\theta + 1",
          "explanation": "Equate real parts.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Separate imaginary",
          "workingLatex": "\\text{Im: terms with odd powers of } i",
          "explanation": "Odd $k$ contribute to the imaginary part.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Sine result",
          "workingLatex": "\\sin 4\\theta = 4\\cos\\theta\\sin\\theta - 4\\cos\\theta\\sin^{3}\\theta",
          "explanation": "Equate imaginary parts (after dividing by $i$).",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify small angle",
          "workingLatex": "\\theta = 0 \\text{ gives } \\cos 0 = 1",
          "explanation": "Sanity check at $\\theta = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Application",
          "workingLatex": "\\text{Use to expand } \\cos 4\\theta \\text{ or solve equations}",
          "explanation": "Multiple-angle identities follow from De Moivre.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\cos 4\\theta = 8\\cos^{4}\\theta - 8\\cos^{2}\\theta + 1;\\; \\sin 4\\theta = 4\\cos\\theta\\sin\\theta - 4\\cos\\theta\\sin^{3}\\theta",
          "explanation": "Both identities.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "De Moivre's theorem",
          "workingLatex": "(re^{i\\theta})^{n}=r^{n}e^{in\\theta}",
          "explanation": "Raise modulus to $n$; multiply argument by $n$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Euler's formula",
          "workingLatex": "e^{i\\theta}=\\cos\\theta+i\\sin\\theta",
          "explanation": "Links exponential and trig forms.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "nth roots",
          "workingLatex": "z^{n}=w \\Rightarrow z=w^{1/n}e^{i2k\\pi/n}",
          "explanation": "There are $n$ distinct roots.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Principal argument",
          "workingLatex": "-\\pi<\\theta\\leq\\pi",
          "explanation": "Standard range.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\cos 4\\theta = 8\\cos^{4}\\theta - 8\\cos^{2}\\theta + 1$, $\\sin 4\\theta = 4\\cos\\theta\\sin\\theta - 4\\cos\\theta\\sin^{3}\\theta$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "De Moivre's theorem",
    "subtopicId": "fm.y2.pure.de-moivre",
    "questionDiagram": null,
    "id": "fm.y2.pure.de-moivre.q066",
    "tags": [
      "powers"
    ],
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "written",
    "questionText": "Given $z = 2e^{ipi/8}$, find $z^{8}$ in the form $re^{i\\theta}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "De Moivre's theorem",
          "workingLatex": "(re^{i\\theta})^{n} = r^{n}e^{in\\theta}",
          "explanation": "Raise modulus to power $n$; multiply argument by $n$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Given",
          "workingLatex": "z = 2e^{ipi/8}",
          "explanation": "Exponential form.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Modulus power",
          "workingLatex": "r^{8} = 256",
          "explanation": "Compute $r^n$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Argument multiple",
          "workingLatex": "n\\theta = 8 \\times pi/8 = \\pi",
          "explanation": "Multiply argument by $n$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Result",
          "workingLatex": "z^{8} = 256e^{i\\pi}",
          "explanation": "De Moivre form.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify range",
          "workingLatex": "\\text{Adjust to } (-\\pi,\\pi] \\text{ if needed}",
          "explanation": "Principal argument may need adjustment.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "De Moivre's theorem",
          "workingLatex": "(re^{i\\theta})^{n}=r^{n}e^{in\\theta}",
          "explanation": "Raise modulus to $n$; multiply argument by $n$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Euler's formula",
          "workingLatex": "e^{i\\theta}=\\cos\\theta+i\\sin\\theta",
          "explanation": "Links exponential and trig forms.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "nth roots",
          "workingLatex": "z^{n}=w \\Rightarrow z=w^{1/n}e^{i2k\\pi/n}",
          "explanation": "There are $n$ distinct roots.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Principal argument",
          "workingLatex": "-\\pi<\\theta\\leq\\pi",
          "explanation": "Standard range.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Modulus",
          "workingLatex": "|z|=r",
          "explanation": "Distance from origin.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Roots of unity",
          "workingLatex": "z^{n}=1",
          "explanation": "Roots equally spaced on the unit circle.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Induction",
          "workingLatex": "P(1)\\text{ true, }P(k)\\Rightarrow P(k+1)",
          "explanation": "Proof structure for De Moivre.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z^{8} = 256e^{i\\pi}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "De Moivre's theorem",
    "subtopicId": "fm.y2.pure.de-moivre",
    "questionDiagram": null,
    "id": "fm.y2.pure.de-moivre.q067",
    "tags": [
      "powers"
    ],
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "written",
    "questionText": "Given $z = 3e^{i\\frac{2\\pi}{3}}$, find $z^{4}$ in the form $re^{i\\theta}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "De Moivre's theorem",
          "workingLatex": "(re^{i\\theta})^{n} = r^{n}e^{in\\theta}",
          "explanation": "Raise modulus to power $n$; multiply argument by $n$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Given",
          "workingLatex": "z = 3e^{i\\frac{2\\pi}{3}}",
          "explanation": "Exponential form.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Modulus power",
          "workingLatex": "r^{4} = 81",
          "explanation": "Compute $r^n$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Argument multiple",
          "workingLatex": "n\\theta = 4 \\times \\frac{2\\pi}{3} = 8pi/3",
          "explanation": "Multiply argument by $n$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Result",
          "workingLatex": "z^{4} = 81e^{i8pi/3}",
          "explanation": "De Moivre form.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify range",
          "workingLatex": "\\text{Adjust to } (-\\pi,\\pi] \\text{ if needed}",
          "explanation": "Principal argument may need adjustment.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "De Moivre's theorem",
          "workingLatex": "(re^{i\\theta})^{n}=r^{n}e^{in\\theta}",
          "explanation": "Raise modulus to $n$; multiply argument by $n$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Euler's formula",
          "workingLatex": "e^{i\\theta}=\\cos\\theta+i\\sin\\theta",
          "explanation": "Links exponential and trig forms.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "nth roots",
          "workingLatex": "z^{n}=w \\Rightarrow z=w^{1/n}e^{i2k\\pi/n}",
          "explanation": "There are $n$ distinct roots.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Principal argument",
          "workingLatex": "-\\pi<\\theta\\leq\\pi",
          "explanation": "Standard range.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Modulus",
          "workingLatex": "|z|=r",
          "explanation": "Distance from origin.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Roots of unity",
          "workingLatex": "z^{n}=1",
          "explanation": "Roots equally spaced on the unit circle.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Induction",
          "workingLatex": "P(1)\\text{ true, }P(k)\\Rightarrow P(k+1)",
          "explanation": "Proof structure for De Moivre.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z^{4} = 81e^{i8pi/3}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "De Moivre's theorem",
    "subtopicId": "fm.y2.pure.de-moivre",
    "questionDiagram": null,
    "id": "fm.y2.pure.de-moivre.q068",
    "tags": [
      "cube",
      "roots"
    ],
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "written",
    "questionText": "Find the 3 roots of $z^{3} = 64e^{i\\frac{\\pi}{3}}$, giving each in the form $re^{i\\theta}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "De Moivre for roots",
          "workingLatex": "z = re^{i\\theta} \\Rightarrow z^{1/3} = r^{1/3}e^{i(\\theta + 2k\\pi)/3}",
          "explanation": "There are $3$ distinct roots, corresponding to $k = 0, 1, 2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Modulus of each root",
          "workingLatex": "r^{1/3} = \\sqrt[3]{64}",
          "explanation": "Take the positive real $n$th root of $r$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Base argument",
          "workingLatex": "\\theta = \\frac{\\pi}{3}",
          "explanation": "Principal argument of $z$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Root spacing",
          "workingLatex": "\\text{Arguments differ by } \\frac{2\\pi}{3}",
          "explanation": "Roots are equally spaced on a circle.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "List roots",
          "workingLatex": "k=0: 4e^{i\\pi/9};\\; k=1: 4e^{i7\\pi/9};\\; k=2: 4e^{i13\\pi/9}",
          "explanation": "Substitute each value of $k$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify count",
          "workingLatex": "\\text{Exactly } 3 \\text{ distinct roots}",
          "explanation": "Complete set on the Argand diagram.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Geometric view",
          "workingLatex": "\\text{Vertices of a regular 3-gon}",
          "explanation": "Roots lie on a circle of radius $r^{1/n}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Product check",
          "workingLatex": "\\text{Product of all roots equals } 64",
          "explanation": "Properties of roots of a complex number.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "4e^{i\\pi/9},\\; 4e^{i7\\pi/9},\\; 4e^{i13\\pi/9}",
          "explanation": "All $n$ roots in exponential form.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "De Moivre's theorem",
          "workingLatex": "(re^{i\\theta})^{n}=r^{n}e^{in\\theta}",
          "explanation": "Raise modulus to $n$; multiply argument by $n$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Euler's formula",
          "workingLatex": "e^{i\\theta}=\\cos\\theta+i\\sin\\theta",
          "explanation": "Links exponential and trig forms.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "nth roots",
          "workingLatex": "z^{n}=w \\Rightarrow z=w^{1/n}e^{i2k\\pi/n}",
          "explanation": "There are $n$ distinct roots.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Principal argument",
          "workingLatex": "-\\pi<\\theta\\leq\\pi",
          "explanation": "Standard range.",
          "diagram": null
        }
      ],
      "finalAnswer": "$4e^{i\\pi/9}$, $4e^{i7\\pi/9}$, $4e^{i13\\pi/9}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "De Moivre's theorem",
    "subtopicId": "fm.y2.pure.de-moivre",
    "questionDiagram": null,
    "id": "fm.y2.pure.de-moivre.q069",
    "tags": [
      "seventh",
      "roots"
    ],
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "written",
    "questionText": "Find the 7 roots of $z^{7} = 128e^{i0}$, giving each in the form $re^{i\\theta}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "De Moivre for roots",
          "workingLatex": "z = re^{i\\theta} \\Rightarrow z^{1/7} = r^{1/7}e^{i(\\theta + 2k\\pi)/7}",
          "explanation": "There are $7$ distinct roots, corresponding to $k = 0, 1, 2, 3, 4, 5, 6$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Modulus of each root",
          "workingLatex": "r^{1/7} = 2",
          "explanation": "Take the positive real $n$th root of $r$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Base argument",
          "workingLatex": "\\theta = 0",
          "explanation": "Principal argument of $z$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Root spacing",
          "workingLatex": "\\text{Arguments differ by } \\frac{2\\pi}{7}",
          "explanation": "Roots are equally spaced on a circle.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "List roots",
          "workingLatex": "k=0: 2;\\; k=1: 2e^{i2\\pi/7};\\; k=2: 2e^{i4\\pi/7};\\; k=3: 2e^{i6\\pi/7};\\; k=4: 2e^{i8\\pi/7};\\; k=5: 2e^{i10\\pi/7};\\; k=6: 2e^{i12\\pi/7}",
          "explanation": "Substitute each value of $k$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify count",
          "workingLatex": "\\text{Exactly } 7 \\text{ distinct roots}",
          "explanation": "Complete set on the Argand diagram.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Geometric view",
          "workingLatex": "\\text{Vertices of a regular 7-gon}",
          "explanation": "Roots lie on a circle of radius $r^{1/n}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Product check",
          "workingLatex": "\\text{Product of all roots equals } 128",
          "explanation": "Properties of roots of a complex number.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "2,\\; 2e^{i2\\pi/7},\\; 2e^{i4\\pi/7},\\; 2e^{i6\\pi/7},\\; 2e^{i8\\pi/7},\\; 2e^{i10\\pi/7},\\; 2e^{i12\\pi/7}",
          "explanation": "All $n$ roots in exponential form.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "De Moivre's theorem",
          "workingLatex": "(re^{i\\theta})^{n}=r^{n}e^{in\\theta}",
          "explanation": "Raise modulus to $n$; multiply argument by $n$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Euler's formula",
          "workingLatex": "e^{i\\theta}=\\cos\\theta+i\\sin\\theta",
          "explanation": "Links exponential and trig forms.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "nth roots",
          "workingLatex": "z^{n}=w \\Rightarrow z=w^{1/n}e^{i2k\\pi/n}",
          "explanation": "There are $n$ distinct roots.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Principal argument",
          "workingLatex": "-\\pi<\\theta\\leq\\pi",
          "explanation": "Standard range.",
          "diagram": null
        }
      ],
      "finalAnswer": "$2$, $2e^{i2\\pi/7}$, $2e^{i4\\pi/7}$, $2e^{i6\\pi/7}$, $2e^{i8\\pi/7}$, $2e^{i10\\pi/7}$, $2e^{i12\\pi/7}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "De Moivre's theorem",
    "subtopicId": "fm.y2.pure.de-moivre",
    "questionDiagram": null,
    "id": "fm.y2.pure.de-moivre.q070",
    "tags": [
      "roots-of-unity",
      "proof"
    ],
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "questionText": "The roots of $z^{5} = 1$ are $1, \\omega, \\omega^{2}, \\omega^{3}, \\omega^{4}$ where $\\omega = e^{i2\\pi/5}$. Show that $\\omega + \\omega^{2} + \\omega^{3} + \\omega^{4} = -1$ and find the value of $(1 + \\omega)(1 + \\omega^{2})(1 + \\omega^{3})(1 + \\omega^{4})$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Sum of all roots",
          "workingLatex": "1 + \\omega + \\omega^{2} + \\omega^{3} + \\omega^{4} = 0",
          "explanation": "Sum of roots of $z^{5}-1=0$ is 0 (no $z^{4}$ term).",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rearrange",
          "workingLatex": "\\omega + \\omega^{2} + \\omega^{3} + \\omega^{4} = -1",
          "explanation": "Subtract 1 from both sides.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Product setup",
          "workingLatex": "(1+\\omega)(1+\\omega^{2})(1+\\omega^{3})(1+\\omega^{4})",
          "explanation": "Target expression.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Pair factors",
          "workingLatex": "(1+\\omega)(1+\\omega^{4}) \\cdot (1+\\omega^{2})(1+\\omega^{3})",
          "explanation": "Group conjugate pairs since $\\omega^{4} = \\bar{\\omega}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Expand pair",
          "workingLatex": "(1+\\omega)(1+\\omega^{4}) = 1 + \\omega + \\omega^{4} + \\omega^{5} = 1 + \\omega + \\omega^{4} + 1",
          "explanation": "Use $\\omega^{5}=1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify",
          "workingLatex": "= 2 + \\omega + \\omega^{4}",
          "explanation": "First pair result.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Similarly",
          "workingLatex": "(1+\\omega^{2})(1+\\omega^{3}) = 2 + \\omega^{2} + \\omega^{3}",
          "explanation": "Second pair.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Use sum identity",
          "workingLatex": "\\omega + \\omega^{4} = -1 - (\\omega^{2}+\\omega^{3})",
          "explanation": "From sum of non-trivial roots.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Evaluate product",
          "workingLatex": "= 5",
          "explanation": "Full expansion gives 5 (standard roots of unity result).",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Alternative",
          "workingLatex": "P(-1) = (-1)^{5}-1 = -2",
          "explanation": "Evaluate $z^{5}-1$ at $z=-1$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Factorisation link",
          "workingLatex": "z^{5}-1 = (z-1)(z-\\omega)\\cdots",
          "explanation": "Product of linear factors.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Geometric view",
          "workingLatex": "\\text{Fifth roots of unity on unit circle}",
          "explanation": "Regular pentagon vertices.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Answer",
          "workingLatex": "\\omega+\\omega^{2}+\\omega^{3}+\\omega^{4}=-1;\\; \\text{product}=5",
          "explanation": "Both results.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\omega + \\omega^{2} + \\omega^{3} + \\omega^{4} = -1$; $(1+\\omega)(1+\\omega^{2})(1+\\omega^{3})(1+\\omega^{4}) = 5$."
    }
  }
];
