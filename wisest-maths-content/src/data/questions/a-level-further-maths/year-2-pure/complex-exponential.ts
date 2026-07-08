import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Exponential form",
    "subtopicId": "fm.y2.pure.complex-exponential",
    "questionDiagram": null,
    "id": "fm.y2.pure.complex-exponential.q001",
    "tags": [
      "pure-real",
      "conversion"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Write $z = 1$ in the form $re^{i\\theta}$, where $r > 0$ and $-\\pi < \\theta \\leq \\pi$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Modulus",
          "workingLatex": "r = |z| = \\sqrt{1^{2}+0^{2}} = 1",
          "explanation": "The modulus is the distance from the origin.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Argument",
          "workingLatex": "\\theta = \\arg(z) = 0",
          "explanation": "Principal argument in $(-\\pi,\\pi]$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Euler's formula",
          "workingLatex": "e^{i\\theta} = \\cos\\theta + i\\sin\\theta",
          "explanation": "Links exponential and trigonometric forms.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Exponential form",
          "workingLatex": "z = 1e^{i0}",
          "explanation": "Substitute $r$ and $\\theta$ into $z = re^{i\\theta}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check real part",
          "workingLatex": "1\\cos 0 = 1",
          "explanation": "Verify the real component.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check imaginary part",
          "workingLatex": "1\\sin 0 = 0",
          "explanation": "Verify the imaginary component.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z = 1e^{i0}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Exponential form",
    "subtopicId": "fm.y2.pure.complex-exponential",
    "questionDiagram": null,
    "id": "fm.y2.pure.complex-exponential.q002",
    "tags": [
      "pure-imaginary",
      "conversion"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Write $z = 2i$ in the form $re^{i\\theta}$, where $r > 0$ and $-\\pi < \\theta \\leq \\pi$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Modulus",
          "workingLatex": "r = |z| = \\sqrt{0^{2}+2^{2}} = 2",
          "explanation": "The modulus is the distance from the origin.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Argument",
          "workingLatex": "\\theta = \\arg(z) = \\frac{\\pi}{2}",
          "explanation": "Principal argument in $(-\\pi,\\pi]$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Euler's formula",
          "workingLatex": "e^{i\\theta} = \\cos\\theta + i\\sin\\theta",
          "explanation": "Links exponential and trigonometric forms.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Exponential form",
          "workingLatex": "z = 2e^{i\\frac{\\pi}{2}}",
          "explanation": "Substitute $r$ and $\\theta$ into $z = re^{i\\theta}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check real part",
          "workingLatex": "2\\cos \\frac{\\pi}{2} = 0",
          "explanation": "Verify the real component.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check imaginary part",
          "workingLatex": "2\\sin \\frac{\\pi}{2} = 2",
          "explanation": "Verify the imaginary component.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z = 2e^{i\\frac{\\pi}{2}}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Exponential form",
    "subtopicId": "fm.y2.pure.complex-exponential",
    "questionDiagram": null,
    "id": "fm.y2.pure.complex-exponential.q003",
    "tags": [
      "3-4-5",
      "conversion"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Write $z = 3+4i$ in the form $re^{i\\theta}$, where $r > 0$ and $-\\pi < \\theta \\leq \\pi$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Modulus",
          "workingLatex": "r = |z| = \\sqrt{3^{2}+4^{2}} = 5",
          "explanation": "The modulus is the distance from the origin.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Argument",
          "workingLatex": "\\theta = \\arg(z) = \\tan^{-1}\\!\\left(\\frac{4}{3}\\right)",
          "explanation": "Principal argument in $(-\\pi,\\pi]$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Euler's formula",
          "workingLatex": "e^{i\\theta} = \\cos\\theta + i\\sin\\theta",
          "explanation": "Links exponential and trigonometric forms.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Exponential form",
          "workingLatex": "z = 5e^{i\\tan^{-1}\\!\\left(\\frac{4}{3}\\right)}",
          "explanation": "Substitute $r$ and $\\theta$ into $z = re^{i\\theta}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check real part",
          "workingLatex": "5\\cos \\tan^{-1}\\!\\left(\\frac{4}{3}\\right) = 3",
          "explanation": "Verify the real component.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check imaginary part",
          "workingLatex": "5\\sin \\tan^{-1}\\!\\left(\\frac{4}{3}\\right) = 4",
          "explanation": "Verify the imaginary component.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z = 5e^{i\\tan^{-1}\\!\\left(\\frac{4}{3}\\right)}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Exponential form",
    "subtopicId": "fm.y2.pure.complex-exponential",
    "questionDiagram": null,
    "id": "fm.y2.pure.complex-exponential.q004",
    "tags": [
      "negative-real",
      "conversion"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Write $z = -1$ in the form $re^{i\\theta}$, where $r > 0$ and $-\\pi < \\theta \\leq \\pi$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Modulus",
          "workingLatex": "r = |z| = \\sqrt{-1^{2}+0^{2}} = 1",
          "explanation": "The modulus is the distance from the origin.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Argument",
          "workingLatex": "\\theta = \\arg(z) = \\pi",
          "explanation": "Principal argument in $(-\\pi,\\pi]$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Euler's formula",
          "workingLatex": "e^{i\\theta} = \\cos\\theta + i\\sin\\theta",
          "explanation": "Links exponential and trigonometric forms.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Exponential form",
          "workingLatex": "z = 1e^{i\\pi}",
          "explanation": "Substitute $r$ and $\\theta$ into $z = re^{i\\theta}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check real part",
          "workingLatex": "1\\cos \\pi = -1",
          "explanation": "Verify the real component.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check imaginary part",
          "workingLatex": "1\\sin \\pi = 0",
          "explanation": "Verify the imaginary component.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z = 1e^{i\\pi}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Exponential form",
    "subtopicId": "fm.y2.pure.complex-exponential",
    "questionDiagram": null,
    "id": "fm.y2.pure.complex-exponential.q005",
    "tags": [
      "negative-imaginary",
      "conversion"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Write $z = -3i$ in the form $re^{i\\theta}$, where $r > 0$ and $-\\pi < \\theta \\leq \\pi$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Modulus",
          "workingLatex": "r = |z| = \\sqrt{0^{2}+-3^{2}} = 3",
          "explanation": "The modulus is the distance from the origin.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Argument",
          "workingLatex": "\\theta = \\arg(z) = -\\frac{\\pi}{2}",
          "explanation": "Principal argument in $(-\\pi,\\pi]$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Euler's formula",
          "workingLatex": "e^{i\\theta} = \\cos\\theta + i\\sin\\theta",
          "explanation": "Links exponential and trigonometric forms.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Exponential form",
          "workingLatex": "z = 3e^{i-\\frac{\\pi}{2}}",
          "explanation": "Substitute $r$ and $\\theta$ into $z = re^{i\\theta}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check real part",
          "workingLatex": "3\\cos -\\frac{\\pi}{2} = 0",
          "explanation": "Verify the real component.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check imaginary part",
          "workingLatex": "3\\sin -\\frac{\\pi}{2} = -3",
          "explanation": "Verify the imaginary component.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z = 3e^{i-\\frac{\\pi}{2}}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Exponential form",
    "subtopicId": "fm.y2.pure.complex-exponential",
    "questionDiagram": null,
    "id": "fm.y2.pure.complex-exponential.q006",
    "tags": [
      "pi/4",
      "conversion"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Write $z = 1+1i$ in the form $re^{i\\theta}$, where $r > 0$ and $-\\pi < \\theta \\leq \\pi$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Modulus",
          "workingLatex": "r = |z| = \\sqrt{1^{2}+1^{2}} = \\sqrt{2}",
          "explanation": "The modulus is the distance from the origin.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Argument",
          "workingLatex": "\\theta = \\arg(z) = \\frac{\\pi}{4}",
          "explanation": "Principal argument in $(-\\pi,\\pi]$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Euler's formula",
          "workingLatex": "e^{i\\theta} = \\cos\\theta + i\\sin\\theta",
          "explanation": "Links exponential and trigonometric forms.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Exponential form",
          "workingLatex": "z = \\sqrt{2}e^{i\\frac{\\pi}{4}}",
          "explanation": "Substitute $r$ and $\\theta$ into $z = re^{i\\theta}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check real part",
          "workingLatex": "\\sqrt{2}\\cos \\frac{\\pi}{4} = 1",
          "explanation": "Verify the real component.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check imaginary part",
          "workingLatex": "\\sqrt{2}\\sin \\frac{\\pi}{4} = 1",
          "explanation": "Verify the imaginary component.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z = \\sqrt{2}e^{i\\frac{\\pi}{4}}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Exponential form",
    "subtopicId": "fm.y2.pure.complex-exponential",
    "questionDiagram": null,
    "id": "fm.y2.pure.complex-exponential.q007",
    "tags": [
      "-pi/4",
      "conversion"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Write $z = 1-1i$ in the form $re^{i\\theta}$, where $r > 0$ and $-\\pi < \\theta \\leq \\pi$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Modulus",
          "workingLatex": "r = |z| = \\sqrt{1^{2}+-1^{2}} = \\sqrt{2}",
          "explanation": "The modulus is the distance from the origin.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Argument",
          "workingLatex": "\\theta = \\arg(z) = -\\frac{\\pi}{4}",
          "explanation": "Principal argument in $(-\\pi,\\pi]$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Euler's formula",
          "workingLatex": "e^{i\\theta} = \\cos\\theta + i\\sin\\theta",
          "explanation": "Links exponential and trigonometric forms.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Exponential form",
          "workingLatex": "z = \\sqrt{2}e^{i-\\frac{\\pi}{4}}",
          "explanation": "Substitute $r$ and $\\theta$ into $z = re^{i\\theta}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check real part",
          "workingLatex": "\\sqrt{2}\\cos -\\frac{\\pi}{4} = 1",
          "explanation": "Verify the real component.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check imaginary part",
          "workingLatex": "\\sqrt{2}\\sin -\\frac{\\pi}{4} = -1",
          "explanation": "Verify the imaginary component.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z = \\sqrt{2}e^{i-\\frac{\\pi}{4}}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Exponential form",
    "subtopicId": "fm.y2.pure.complex-exponential",
    "questionDiagram": null,
    "id": "fm.y2.pure.complex-exponential.q008",
    "tags": [
      "3pi/4",
      "conversion"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Write $z = -1+1i$ in the form $re^{i\\theta}$, where $r > 0$ and $-\\pi < \\theta \\leq \\pi$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Modulus",
          "workingLatex": "r = |z| = \\sqrt{-1^{2}+1^{2}} = \\sqrt{2}",
          "explanation": "The modulus is the distance from the origin.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Argument",
          "workingLatex": "\\theta = \\arg(z) = \\frac{3\\pi}{4}",
          "explanation": "Principal argument in $(-\\pi,\\pi]$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Euler's formula",
          "workingLatex": "e^{i\\theta} = \\cos\\theta + i\\sin\\theta",
          "explanation": "Links exponential and trigonometric forms.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Exponential form",
          "workingLatex": "z = \\sqrt{2}e^{i\\frac{3\\pi}{4}}",
          "explanation": "Substitute $r$ and $\\theta$ into $z = re^{i\\theta}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check real part",
          "workingLatex": "\\sqrt{2}\\cos \\frac{3\\pi}{4} = -1",
          "explanation": "Verify the real component.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check imaginary part",
          "workingLatex": "\\sqrt{2}\\sin \\frac{3\\pi}{4} = 1",
          "explanation": "Verify the imaginary component.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z = \\sqrt{2}e^{i\\frac{3\\pi}{4}}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Exponential form",
    "subtopicId": "fm.y2.pure.complex-exponential",
    "questionDiagram": null,
    "id": "fm.y2.pure.complex-exponential.q009",
    "tags": [
      "pi/3",
      "conversion"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Write $z = 1+1.7320508075688772i$ in the form $re^{i\\theta}$, where $r > 0$ and $-\\pi < \\theta \\leq \\pi$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Modulus",
          "workingLatex": "r = |z| = \\sqrt{1^{2}+1.7320508075688772^{2}} = \\sqrt{3.9999999999999996}",
          "explanation": "The modulus is the distance from the origin.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Argument",
          "workingLatex": "\\theta = \\arg(z) = \\frac{\\pi}{3}",
          "explanation": "Principal argument in $(-\\pi,\\pi]$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Euler's formula",
          "workingLatex": "e^{i\\theta} = \\cos\\theta + i\\sin\\theta",
          "explanation": "Links exponential and trigonometric forms.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Exponential form",
          "workingLatex": "z = \\sqrt{3.9999999999999996}e^{i\\frac{\\pi}{3}}",
          "explanation": "Substitute $r$ and $\\theta$ into $z = re^{i\\theta}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check real part",
          "workingLatex": "\\sqrt{3.9999999999999996}\\cos \\frac{\\pi}{3} = 1",
          "explanation": "Verify the real component.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check imaginary part",
          "workingLatex": "\\sqrt{3.9999999999999996}\\sin \\frac{\\pi}{3} = 1.7320508075688772",
          "explanation": "Verify the imaginary component.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z = \\sqrt{3.9999999999999996}e^{i\\frac{\\pi}{3}}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Exponential form",
    "subtopicId": "fm.y2.pure.complex-exponential",
    "questionDiagram": null,
    "id": "fm.y2.pure.complex-exponential.q010",
    "tags": [
      "negative-real",
      "conversion"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Write $z = -2$ in the form $re^{i\\theta}$, where $r > 0$ and $-\\pi < \\theta \\leq \\pi$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Modulus",
          "workingLatex": "r = |z| = \\sqrt{-2^{2}+0^{2}} = 2",
          "explanation": "The modulus is the distance from the origin.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Argument",
          "workingLatex": "\\theta = \\arg(z) = \\pi",
          "explanation": "Principal argument in $(-\\pi,\\pi]$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Euler's formula",
          "workingLatex": "e^{i\\theta} = \\cos\\theta + i\\sin\\theta",
          "explanation": "Links exponential and trigonometric forms.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Exponential form",
          "workingLatex": "z = 2e^{i\\pi}",
          "explanation": "Substitute $r$ and $\\theta$ into $z = re^{i\\theta}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check real part",
          "workingLatex": "2\\cos \\pi = -2",
          "explanation": "Verify the real component.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check imaginary part",
          "workingLatex": "2\\sin \\pi = 0",
          "explanation": "Verify the imaginary component.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z = 2e^{i\\pi}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Exponential form",
    "subtopicId": "fm.y2.pure.complex-exponential",
    "questionDiagram": null,
    "id": "fm.y2.pure.complex-exponential.q011",
    "tags": [
      "exp",
      "conversion"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Express $z = 2e^{i\\frac{\\pi}{4}}$ in the form $a + bi$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Euler's formula",
          "workingLatex": "re^{i\\theta} = r(\\cos\\theta + i\\sin\\theta)",
          "explanation": "Expand exponential form.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "z = 2e^{i\\frac{\\pi}{4}} = 2(\\cos \\frac{\\pi}{4} + i\\sin \\frac{\\pi}{4})",
          "explanation": "Use the given modulus and argument.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Real part",
          "workingLatex": "\\text{Re}(z) = 2\\cos \\frac{\\pi}{4} = 1.4142135623730951",
          "explanation": "Multiply by $\\cos\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Imaginary part",
          "workingLatex": "\\text{Im}(z) = 2\\sin \\frac{\\pi}{4} = 1.4142135623730951",
          "explanation": "Multiply by $\\sin\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rectangular form",
          "workingLatex": "z = 1.4142135623730951+1.4142135623730951i",
          "explanation": "Combine into $a + bi$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Argand position",
          "workingLatex": "\\text{Point } (1.4142135623730951,1.4142135623730951)",
          "explanation": "Geometric interpretation on the diagram.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z = 1.4142135623730951+1.4142135623730951i$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Exponential form",
    "subtopicId": "fm.y2.pure.complex-exponential",
    "questionDiagram": null,
    "id": "fm.y2.pure.complex-exponential.q012",
    "tags": [
      "exp",
      "conversion"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Express $z = 3e^{i\\frac{\\pi}{2}}$ in the form $a + bi$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Euler's formula",
          "workingLatex": "re^{i\\theta} = r(\\cos\\theta + i\\sin\\theta)",
          "explanation": "Expand exponential form.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "z = 3e^{i\\frac{\\pi}{2}} = 3(\\cos \\frac{\\pi}{2} + i\\sin \\frac{\\pi}{2})",
          "explanation": "Use the given modulus and argument.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Real part",
          "workingLatex": "\\text{Re}(z) = 3\\cos \\frac{\\pi}{2} = 0",
          "explanation": "Multiply by $\\cos\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Imaginary part",
          "workingLatex": "\\text{Im}(z) = 3\\sin \\frac{\\pi}{2} = 3",
          "explanation": "Multiply by $\\sin\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rectangular form",
          "workingLatex": "z = 3i",
          "explanation": "Combine into $a + bi$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Argand position",
          "workingLatex": "\\text{Point } (0,3)",
          "explanation": "Geometric interpretation on the diagram.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z = 3i$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Exponential form",
    "subtopicId": "fm.y2.pure.complex-exponential",
    "questionDiagram": null,
    "id": "fm.y2.pure.complex-exponential.q013",
    "tags": [
      "exp",
      "conversion"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Express $z = 4e^{i\\pi}$ in the form $a + bi$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Euler's formula",
          "workingLatex": "re^{i\\theta} = r(\\cos\\theta + i\\sin\\theta)",
          "explanation": "Expand exponential form.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "z = 4e^{i\\pi} = 4(\\cos \\pi + i\\sin \\pi)",
          "explanation": "Use the given modulus and argument.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Real part",
          "workingLatex": "\\text{Re}(z) = 4\\cos \\pi = -4",
          "explanation": "Multiply by $\\cos\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Imaginary part",
          "workingLatex": "\\text{Im}(z) = 4\\sin \\pi = 0",
          "explanation": "Multiply by $\\sin\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rectangular form",
          "workingLatex": "z = -4",
          "explanation": "Combine into $a + bi$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Argand position",
          "workingLatex": "\\text{Point } (-4,0)",
          "explanation": "Geometric interpretation on the diagram.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z = -4$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Exponential form",
    "subtopicId": "fm.y2.pure.complex-exponential",
    "questionDiagram": null,
    "id": "fm.y2.pure.complex-exponential.q014",
    "tags": [
      "exp",
      "conversion"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Express $z = 5e^{i0}$ in the form $a + bi$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Euler's formula",
          "workingLatex": "re^{i\\theta} = r(\\cos\\theta + i\\sin\\theta)",
          "explanation": "Expand exponential form.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "z = 5e^{i0} = 5(\\cos 0 + i\\sin 0)",
          "explanation": "Use the given modulus and argument.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Real part",
          "workingLatex": "\\text{Re}(z) = 5\\cos 0 = 5",
          "explanation": "Multiply by $\\cos\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Imaginary part",
          "workingLatex": "\\text{Im}(z) = 5\\sin 0 = 0",
          "explanation": "Multiply by $\\sin\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rectangular form",
          "workingLatex": "z = 5",
          "explanation": "Combine into $a + bi$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Argand position",
          "workingLatex": "\\text{Point } (5,0)",
          "explanation": "Geometric interpretation on the diagram.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z = 5$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Exponential form",
    "subtopicId": "fm.y2.pure.complex-exponential",
    "questionDiagram": null,
    "id": "fm.y2.pure.complex-exponential.q015",
    "tags": [
      "exp",
      "conversion"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Express $z = 2e^{i\\frac{\\pi}{3}}$ in the form $a + bi$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Euler's formula",
          "workingLatex": "re^{i\\theta} = r(\\cos\\theta + i\\sin\\theta)",
          "explanation": "Expand exponential form.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "z = 2e^{i\\frac{\\pi}{3}} = 2(\\cos \\frac{\\pi}{3} + i\\sin \\frac{\\pi}{3})",
          "explanation": "Use the given modulus and argument.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Real part",
          "workingLatex": "\\text{Re}(z) = 2\\cos \\frac{\\pi}{3} = 1",
          "explanation": "Multiply by $\\cos\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Imaginary part",
          "workingLatex": "\\text{Im}(z) = 2\\sin \\frac{\\pi}{3} = 1.7320508075688772",
          "explanation": "Multiply by $\\sin\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rectangular form",
          "workingLatex": "z = 1+1.7320508075688772i",
          "explanation": "Combine into $a + bi$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Argand position",
          "workingLatex": "\\text{Point } (1,1.7320508075688772)",
          "explanation": "Geometric interpretation on the diagram.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z = 1+1.7320508075688772i$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Exponential form",
    "subtopicId": "fm.y2.pure.complex-exponential",
    "questionDiagram": null,
    "id": "fm.y2.pure.complex-exponential.q016",
    "tags": [
      "exp",
      "conversion"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Express $z = 6e^{i-\\frac{\\pi}{6}}$ in the form $a + bi$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Euler's formula",
          "workingLatex": "re^{i\\theta} = r(\\cos\\theta + i\\sin\\theta)",
          "explanation": "Expand exponential form.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "z = 6e^{i-\\frac{\\pi}{6}} = 6(\\cos -\\frac{\\pi}{6} + i\\sin -\\frac{\\pi}{6})",
          "explanation": "Use the given modulus and argument.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Real part",
          "workingLatex": "\\text{Re}(z) = 6\\cos -\\frac{\\pi}{6} = 5.196152422706632",
          "explanation": "Multiply by $\\cos\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Imaginary part",
          "workingLatex": "\\text{Im}(z) = 6\\sin -\\frac{\\pi}{6} = -3",
          "explanation": "Multiply by $\\sin\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rectangular form",
          "workingLatex": "z = 5.196152422706632-3i",
          "explanation": "Combine into $a + bi$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Argand position",
          "workingLatex": "\\text{Point } (5.196152422706632,-3)",
          "explanation": "Geometric interpretation on the diagram.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z = 5.196152422706632-3i$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Exponential form",
    "subtopicId": "fm.y2.pure.complex-exponential",
    "questionDiagram": null,
    "id": "fm.y2.pure.complex-exponential.q017",
    "tags": [
      "exp",
      "conversion"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Express $z = 1e^{i-\\frac{\\pi}{2}}$ in the form $a + bi$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Euler's formula",
          "workingLatex": "re^{i\\theta} = r(\\cos\\theta + i\\sin\\theta)",
          "explanation": "Expand exponential form.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "z = 1e^{i-\\frac{\\pi}{2}} = 1(\\cos -\\frac{\\pi}{2} + i\\sin -\\frac{\\pi}{2})",
          "explanation": "Use the given modulus and argument.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Real part",
          "workingLatex": "\\text{Re}(z) = 1\\cos -\\frac{\\pi}{2} = 0",
          "explanation": "Multiply by $\\cos\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Imaginary part",
          "workingLatex": "\\text{Im}(z) = 1\\sin -\\frac{\\pi}{2} = -1",
          "explanation": "Multiply by $\\sin\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rectangular form",
          "workingLatex": "z = -1i",
          "explanation": "Combine into $a + bi$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Argand position",
          "workingLatex": "\\text{Point } (0,-1)",
          "explanation": "Geometric interpretation on the diagram.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z = -1i$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Exponential form",
    "subtopicId": "fm.y2.pure.complex-exponential",
    "questionDiagram": null,
    "id": "fm.y2.pure.complex-exponential.q018",
    "tags": [
      "pi/4",
      "conversion"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "questionText": "Write $z = 5+5i$ in the form $re^{i\\theta}$, where $r > 0$ and $-\\pi < \\theta \\leq \\pi$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Modulus",
          "workingLatex": "r = |z| = \\sqrt{5^{2}+5^{2}} = \\sqrt{50}",
          "explanation": "The modulus is the distance from the origin.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Argument",
          "workingLatex": "\\theta = \\arg(z) = \\tan^{-1}\\!\\left(\\frac{5}{5}\\right)",
          "explanation": "Principal argument in $(-\\pi,\\pi]$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Euler's formula",
          "workingLatex": "e^{i\\theta} = \\cos\\theta + i\\sin\\theta",
          "explanation": "Links exponential and trigonometric forms.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Exponential form",
          "workingLatex": "z = \\sqrt{50}e^{i\\tan^{-1}\\!\\left(\\frac{5}{5}\\right)}",
          "explanation": "Substitute $r$ and $\\theta$ into $z = re^{i\\theta}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check real part",
          "workingLatex": "\\sqrt{50}\\cos \\tan^{-1}\\!\\left(\\frac{5}{5}\\right) = 5",
          "explanation": "Verify the real component.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check imaginary part",
          "workingLatex": "\\sqrt{50}\\sin \\tan^{-1}\\!\\left(\\frac{5}{5}\\right) = 5",
          "explanation": "Verify the imaginary component.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Euler's formula",
          "workingLatex": "e^{i\\theta}=\\cos\\theta+i\\sin\\theta",
          "explanation": "Core link between exponential and trig forms.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Exponential form",
          "workingLatex": "z=re^{i\\theta}",
          "explanation": "Modulus $r>0$, argument $\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Multiplication",
          "workingLatex": "r_1 e^{i\\theta_1}\\cdot r_2 e^{i\\theta_2}=r_1 r_2 e^{i(\\theta_1+\\theta_2)}",
          "explanation": "Moduli multiply; arguments add.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z = \\sqrt{50}e^{i\\tan^{-1}\\!\\left(\\frac{5}{5}\\right)}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Exponential form",
    "subtopicId": "fm.y2.pure.complex-exponential",
    "questionDiagram": null,
    "id": "fm.y2.pure.complex-exponential.q019",
    "tags": [
      "3pi/4",
      "conversion"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "questionText": "Write $z = -3+3i$ in the form $re^{i\\theta}$, where $r > 0$ and $-\\pi < \\theta \\leq \\pi$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Modulus",
          "workingLatex": "r = |z| = \\sqrt{-3^{2}+3^{2}} = \\sqrt{18}",
          "explanation": "The modulus is the distance from the origin.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Argument",
          "workingLatex": "\\theta = \\arg(z) = \\pi - \\tan^{-1}\\!\\left(\\frac{3}{3}\\right)",
          "explanation": "Principal argument in $(-\\pi,\\pi]$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Euler's formula",
          "workingLatex": "e^{i\\theta} = \\cos\\theta + i\\sin\\theta",
          "explanation": "Links exponential and trigonometric forms.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Exponential form",
          "workingLatex": "z = \\sqrt{18}e^{i\\pi - \\tan^{-1}\\!\\left(\\frac{3}{3}\\right)}",
          "explanation": "Substitute $r$ and $\\theta$ into $z = re^{i\\theta}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check real part",
          "workingLatex": "\\sqrt{18}\\cos \\pi - \\tan^{-1}\\!\\left(\\frac{3}{3}\\right) = -3",
          "explanation": "Verify the real component.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check imaginary part",
          "workingLatex": "\\sqrt{18}\\sin \\pi - \\tan^{-1}\\!\\left(\\frac{3}{3}\\right) = 3",
          "explanation": "Verify the imaginary component.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Euler's formula",
          "workingLatex": "e^{i\\theta}=\\cos\\theta+i\\sin\\theta",
          "explanation": "Core link between exponential and trig forms.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Exponential form",
          "workingLatex": "z=re^{i\\theta}",
          "explanation": "Modulus $r>0$, argument $\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Multiplication",
          "workingLatex": "r_1 e^{i\\theta_1}\\cdot r_2 e^{i\\theta_2}=r_1 r_2 e^{i(\\theta_1+\\theta_2)}",
          "explanation": "Moduli multiply; arguments add.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z = \\sqrt{18}e^{i\\pi - \\tan^{-1}\\!\\left(\\frac{3}{3}\\right)}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Exponential form",
    "subtopicId": "fm.y2.pure.complex-exponential",
    "questionDiagram": null,
    "id": "fm.y2.pure.complex-exponential.q020",
    "tags": [
      "pi/4",
      "conversion"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "questionText": "Write $z = 6+6i$ in the form $re^{i\\theta}$, where $r > 0$ and $-\\pi < \\theta \\leq \\pi$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Modulus",
          "workingLatex": "r = |z| = \\sqrt{6^{2}+6^{2}} = \\sqrt{72}",
          "explanation": "The modulus is the distance from the origin.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Argument",
          "workingLatex": "\\theta = \\arg(z) = \\tan^{-1}\\!\\left(\\frac{6}{6}\\right)",
          "explanation": "Principal argument in $(-\\pi,\\pi]$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Euler's formula",
          "workingLatex": "e^{i\\theta} = \\cos\\theta + i\\sin\\theta",
          "explanation": "Links exponential and trigonometric forms.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Exponential form",
          "workingLatex": "z = \\sqrt{72}e^{i\\tan^{-1}\\!\\left(\\frac{6}{6}\\right)}",
          "explanation": "Substitute $r$ and $\\theta$ into $z = re^{i\\theta}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check real part",
          "workingLatex": "\\sqrt{72}\\cos \\tan^{-1}\\!\\left(\\frac{6}{6}\\right) = 6",
          "explanation": "Verify the real component.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check imaginary part",
          "workingLatex": "\\sqrt{72}\\sin \\tan^{-1}\\!\\left(\\frac{6}{6}\\right) = 6",
          "explanation": "Verify the imaginary component.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Euler's formula",
          "workingLatex": "e^{i\\theta}=\\cos\\theta+i\\sin\\theta",
          "explanation": "Core link between exponential and trig forms.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Exponential form",
          "workingLatex": "z=re^{i\\theta}",
          "explanation": "Modulus $r>0$, argument $\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Multiplication",
          "workingLatex": "r_1 e^{i\\theta_1}\\cdot r_2 e^{i\\theta_2}=r_1 r_2 e^{i(\\theta_1+\\theta_2)}",
          "explanation": "Moduli multiply; arguments add.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z = \\sqrt{72}e^{i\\tan^{-1}\\!\\left(\\frac{6}{6}\\right)}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Exponential form",
    "subtopicId": "fm.y2.pure.complex-exponential",
    "questionDiagram": null,
    "id": "fm.y2.pure.complex-exponential.q021",
    "tags": [
      "euler",
      "euler"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Evaluate $e^{i\\frac{\\pi}{2}}$ exactly.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Euler's formula",
          "workingLatex": "e^{i\\theta} = \\cos\\theta + i\\sin\\theta",
          "explanation": "Fundamental identity.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute angle",
          "workingLatex": "e^{i\\frac{\\pi}{2}} = \\cos \\frac{\\pi}{2} + i\\sin \\frac{\\pi}{2}",
          "explanation": "Evaluate at the given argument.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Trig values",
          "workingLatex": "\\cos \\frac{\\pi}{2} \\text{ and } \\sin \\frac{\\pi}{2} \\text{ are known exact values}",
          "explanation": "Use standard angles.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify",
          "workingLatex": "e^{i\\frac{\\pi}{2}} = i",
          "explanation": "Combine real and imaginary parts.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Scale if needed",
          "workingLatex": "1e^{i\\frac{\\pi}{2}} = 1 \\times (i)",
          "explanation": "No scaling required.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "i",
          "explanation": "State the simplified value.",
          "diagram": null
        }
      ],
      "finalAnswer": "$i$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Exponential form",
    "subtopicId": "fm.y2.pure.complex-exponential",
    "questionDiagram": null,
    "id": "fm.y2.pure.complex-exponential.q022",
    "tags": [
      "euler",
      "euler"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Evaluate $e^{i\\pi}$ exactly.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Euler's formula",
          "workingLatex": "e^{i\\theta} = \\cos\\theta + i\\sin\\theta",
          "explanation": "Fundamental identity.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute angle",
          "workingLatex": "e^{i\\pi} = \\cos \\pi + i\\sin \\pi",
          "explanation": "Evaluate at the given argument.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Trig values",
          "workingLatex": "\\cos \\pi \\text{ and } \\sin \\pi \\text{ are known exact values}",
          "explanation": "Use standard angles.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify",
          "workingLatex": "e^{i\\pi} = -1",
          "explanation": "Combine real and imaginary parts.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Scale if needed",
          "workingLatex": "1e^{i\\pi} = 1 \\times (-1)",
          "explanation": "No scaling required.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "-1",
          "explanation": "State the simplified value.",
          "diagram": null
        }
      ],
      "finalAnswer": "$-1$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Exponential form",
    "subtopicId": "fm.y2.pure.complex-exponential",
    "questionDiagram": null,
    "id": "fm.y2.pure.complex-exponential.q023",
    "tags": [
      "euler",
      "euler"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Evaluate $e^{i0}$ exactly.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Euler's formula",
          "workingLatex": "e^{i\\theta} = \\cos\\theta + i\\sin\\theta",
          "explanation": "Fundamental identity.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute angle",
          "workingLatex": "e^{i0} = \\cos 0 + i\\sin 0",
          "explanation": "Evaluate at the given argument.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Trig values",
          "workingLatex": "\\cos 0 \\text{ and } \\sin 0 \\text{ are known exact values}",
          "explanation": "Use standard angles.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify",
          "workingLatex": "e^{i0} = 1",
          "explanation": "Combine real and imaginary parts.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Scale if needed",
          "workingLatex": "1e^{i0} = 1 \\times (1)",
          "explanation": "No scaling required.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "1",
          "explanation": "State the simplified value.",
          "diagram": null
        }
      ],
      "finalAnswer": "$1$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Exponential form",
    "subtopicId": "fm.y2.pure.complex-exponential",
    "questionDiagram": null,
    "id": "fm.y2.pure.complex-exponential.q024",
    "tags": [
      "euler",
      "euler"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Evaluate $e^{i-\\frac{\\pi}{2}}$ exactly.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Euler's formula",
          "workingLatex": "e^{i\\theta} = \\cos\\theta + i\\sin\\theta",
          "explanation": "Fundamental identity.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute angle",
          "workingLatex": "e^{i-\\frac{\\pi}{2}} = \\cos -\\frac{\\pi}{2} + i\\sin -\\frac{\\pi}{2}",
          "explanation": "Evaluate at the given argument.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Trig values",
          "workingLatex": "\\cos -\\frac{\\pi}{2} \\text{ and } \\sin -\\frac{\\pi}{2} \\text{ are known exact values}",
          "explanation": "Use standard angles.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify",
          "workingLatex": "e^{i-\\frac{\\pi}{2}} = -i",
          "explanation": "Combine real and imaginary parts.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Scale if needed",
          "workingLatex": "1e^{i-\\frac{\\pi}{2}} = 1 \\times (-i)",
          "explanation": "No scaling required.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "-i",
          "explanation": "State the simplified value.",
          "diagram": null
        }
      ],
      "finalAnswer": "$-i$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Exponential form",
    "subtopicId": "fm.y2.pure.complex-exponential",
    "questionDiagram": null,
    "id": "fm.y2.pure.complex-exponential.q025",
    "tags": [
      "euler",
      "euler"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "questionText": "Evaluate 2 \\times $e^{i\\frac{\\pi}{3}}$ exactly.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Euler's formula",
          "workingLatex": "e^{i\\theta} = \\cos\\theta + i\\sin\\theta",
          "explanation": "Fundamental identity.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute angle",
          "workingLatex": "e^{i\\frac{\\pi}{3}} = \\cos \\frac{\\pi}{3} + i\\sin \\frac{\\pi}{3}",
          "explanation": "Evaluate at the given argument.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Trig values",
          "workingLatex": "\\cos \\frac{\\pi}{3} \\text{ and } \\sin \\frac{\\pi}{3} \\text{ are known exact values}",
          "explanation": "Use standard angles.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify",
          "workingLatex": "e^{i\\frac{\\pi}{3}} = 1 + i\\sqrt{3}",
          "explanation": "Combine real and imaginary parts.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Scale if needed",
          "workingLatex": "2e^{i\\frac{\\pi}{3}} = 2 \\times (1 + i\\sqrt{3})",
          "explanation": "Multiply by modulus $2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "21 + i\\sqrt{3}",
          "explanation": "State the simplified value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Euler's formula",
          "workingLatex": "e^{i\\theta}=\\cos\\theta+i\\sin\\theta",
          "explanation": "Core link between exponential and trig forms.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Exponential form",
          "workingLatex": "z=re^{i\\theta}",
          "explanation": "Modulus $r>0$, argument $\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Multiplication",
          "workingLatex": "r_1 e^{i\\theta_1}\\cdot r_2 e^{i\\theta_2}=r_1 r_2 e^{i(\\theta_1+\\theta_2)}",
          "explanation": "Moduli multiply; arguments add.",
          "diagram": null
        }
      ],
      "finalAnswer": "$21 + i\\sqrt{3}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Exponential form",
    "subtopicId": "fm.y2.pure.complex-exponential",
    "questionDiagram": null,
    "id": "fm.y2.pure.complex-exponential.q026",
    "tags": [
      "scaling",
      "scaling",
      "geometry"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "The complex number $z = 3e^{i\\frac{\\pi}{4}}$ is scaled by a factor of 2 from the origin. Find the result in the form $re^{i\\theta}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Scaling as multiplication",
          "workingLatex": "\\text{Scale by } 2 \\text{ means multiply by } 2",
          "explanation": "Real positive factor stretches from the origin.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Original",
          "workingLatex": "z = 3e^{i\\frac{\\pi}{4}}",
          "explanation": "Starting exponential form.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Multiply",
          "workingLatex": "z' = 2 \\cdot 3e^{i\\frac{\\pi}{4}}",
          "explanation": "Apply the scale factor.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "New modulus",
          "workingLatex": "r' = 3 \\times 2 = 6",
          "explanation": "Modulus scales by factor $k$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Argument unchanged",
          "workingLatex": "\\theta' = \\frac{\\pi}{4}",
          "explanation": "Scaling does not change direction.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "z' = 6e^{i\\frac{\\pi}{4}}",
          "explanation": "Scaled exponential form.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z' = 6e^{i\\frac{\\pi}{4}}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Exponential form",
    "subtopicId": "fm.y2.pure.complex-exponential",
    "questionDiagram": null,
    "id": "fm.y2.pure.complex-exponential.q027",
    "tags": [
      "scaling",
      "scaling",
      "geometry"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "The complex number $z = 5e^{i\\frac{\\pi}{2}}$ is scaled by a factor of 3 from the origin. Find the result in the form $re^{i\\theta}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Scaling as multiplication",
          "workingLatex": "\\text{Scale by } 3 \\text{ means multiply by } 3",
          "explanation": "Real positive factor stretches from the origin.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Original",
          "workingLatex": "z = 5e^{i\\frac{\\pi}{2}}",
          "explanation": "Starting exponential form.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Multiply",
          "workingLatex": "z' = 3 \\cdot 5e^{i\\frac{\\pi}{2}}",
          "explanation": "Apply the scale factor.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "New modulus",
          "workingLatex": "r' = 5 \\times 3 = 15",
          "explanation": "Modulus scales by factor $k$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Argument unchanged",
          "workingLatex": "\\theta' = \\frac{\\pi}{2}",
          "explanation": "Scaling does not change direction.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "z' = 15e^{i\\frac{\\pi}{2}}",
          "explanation": "Scaled exponential form.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z' = 15e^{i\\frac{\\pi}{2}}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Exponential form",
    "subtopicId": "fm.y2.pure.complex-exponential",
    "questionDiagram": null,
    "id": "fm.y2.pure.complex-exponential.q028",
    "tags": [
      "scaling",
      "scaling",
      "geometry"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "The complex number $z = 4e^{i\\frac{\\pi}{3}}$ is scaled by a factor of 0.5 from the origin. Find the result in the form $re^{i\\theta}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Scaling as multiplication",
          "workingLatex": "\\text{Scale by } 0.5 \\text{ means multiply by } 0.5",
          "explanation": "Real positive factor stretches from the origin.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Original",
          "workingLatex": "z = 4e^{i\\frac{\\pi}{3}}",
          "explanation": "Starting exponential form.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Multiply",
          "workingLatex": "z' = 0.5 \\cdot 4e^{i\\frac{\\pi}{3}}",
          "explanation": "Apply the scale factor.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "New modulus",
          "workingLatex": "r' = 4 \\times 0.5 = 2",
          "explanation": "Modulus scales by factor $k$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Argument unchanged",
          "workingLatex": "\\theta' = \\frac{\\pi}{3}",
          "explanation": "Scaling does not change direction.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "z' = 2e^{i\\frac{\\pi}{3}}",
          "explanation": "Scaled exponential form.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z' = 2e^{i\\frac{\\pi}{3}}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Exponential form",
    "subtopicId": "fm.y2.pure.complex-exponential",
    "questionDiagram": null,
    "id": "fm.y2.pure.complex-exponential.q029",
    "tags": [
      "scaling",
      "scaling",
      "geometry"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "The complex number $z = 2e^{i\\pi}$ is scaled by a factor of 4 from the origin. Find the result in the form $re^{i\\theta}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Scaling as multiplication",
          "workingLatex": "\\text{Scale by } 4 \\text{ means multiply by } 4",
          "explanation": "Real positive factor stretches from the origin.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Original",
          "workingLatex": "z = 2e^{i\\pi}",
          "explanation": "Starting exponential form.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Multiply",
          "workingLatex": "z' = 4 \\cdot 2e^{i\\pi}",
          "explanation": "Apply the scale factor.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "New modulus",
          "workingLatex": "r' = 2 \\times 4 = 8",
          "explanation": "Modulus scales by factor $k$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Argument unchanged",
          "workingLatex": "\\theta' = \\pi",
          "explanation": "Scaling does not change direction.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "z' = 8e^{i\\pi}",
          "explanation": "Scaled exponential form.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z' = 8e^{i\\pi}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Exponential form",
    "subtopicId": "fm.y2.pure.complex-exponential",
    "questionDiagram": null,
    "id": "fm.y2.pure.complex-exponential.q030",
    "tags": [
      "scaling",
      "scaling",
      "geometry"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "The complex number $z = 6e^{i0}$ is scaled by a factor of 2 from the origin. Find the result in the form $re^{i\\theta}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Scaling as multiplication",
          "workingLatex": "\\text{Scale by } 2 \\text{ means multiply by } 2",
          "explanation": "Real positive factor stretches from the origin.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Original",
          "workingLatex": "z = 6e^{i0}",
          "explanation": "Starting exponential form.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Multiply",
          "workingLatex": "z' = 2 \\cdot 6e^{i0}",
          "explanation": "Apply the scale factor.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "New modulus",
          "workingLatex": "r' = 6 \\times 2 = 12",
          "explanation": "Modulus scales by factor $k$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Argument unchanged",
          "workingLatex": "\\theta' = 0",
          "explanation": "Scaling does not change direction.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "z' = 12e^{i0}",
          "explanation": "Scaled exponential form.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z' = 12e^{i0}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Exponential form",
    "subtopicId": "fm.y2.pure.complex-exponential",
    "questionDiagram": null,
    "id": "fm.y2.pure.complex-exponential.q031",
    "tags": [
      "multiplication"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Given $z_1 = 2e^{i\\frac{\\pi}{4}}$ and $z_2 = 3e^{i\\frac{\\pi}{4}}$, find $z_1 z_2$ in the form $re^{i\\theta}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Multiplication rule",
          "workingLatex": "r_1 e^{i\\theta_1} \\cdot r_2 e^{i\\theta_2} = r_1 r_2 e^{i(\\theta_1 + \\theta_2)}",
          "explanation": "Moduli multiply; arguments add.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify moduli",
          "workingLatex": "r_1 = 2,\\; r_2 = 3",
          "explanation": "Read from each factor.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify arguments",
          "workingLatex": "\\theta_1 = \\frac{\\pi}{4},\\; \\theta_2 = \\frac{\\pi}{4}",
          "explanation": "Principal arguments.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "New modulus",
          "workingLatex": "r = 2 \\times 3 = 6",
          "explanation": "Product of moduli.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "New argument",
          "workingLatex": "\\theta = \\frac{\\pi}{4} + \\frac{\\pi}{4} = \\frac{\\pi}{2}",
          "explanation": "Sum of arguments (adjust to principal value if needed).",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Result",
          "workingLatex": "z_1 z_2 = 6e^{i\\frac{\\pi}{2}}",
          "explanation": "Exponential form of the product.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Geometric meaning",
          "workingLatex": "\\text{Scale by } 3 \\text{ and rotate by } \\frac{\\pi}{4}",
          "explanation": "Multiplication scales and rotates on the Argand diagram.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify",
          "workingLatex": "|z_1 z_2| = 6",
          "explanation": "Modulus of product equals product of moduli.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "6e^{i\\frac{\\pi}{2}}",
          "explanation": "Final exponential form.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z_1 z_2 = 6e^{i\\frac{\\pi}{2}}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Exponential form",
    "subtopicId": "fm.y2.pure.complex-exponential",
    "questionDiagram": null,
    "id": "fm.y2.pure.complex-exponential.q032",
    "tags": [
      "multiplication"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Given $z_1 = 4e^{i\\frac{\\pi}{3}}$ and $z_2 = 2e^{i\\frac{\\pi}{6}}$, find $z_1 z_2$ in the form $re^{i\\theta}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Multiplication rule",
          "workingLatex": "r_1 e^{i\\theta_1} \\cdot r_2 e^{i\\theta_2} = r_1 r_2 e^{i(\\theta_1 + \\theta_2)}",
          "explanation": "Moduli multiply; arguments add.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify moduli",
          "workingLatex": "r_1 = 4,\\; r_2 = 2",
          "explanation": "Read from each factor.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify arguments",
          "workingLatex": "\\theta_1 = \\frac{\\pi}{3},\\; \\theta_2 = \\frac{\\pi}{6}",
          "explanation": "Principal arguments.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "New modulus",
          "workingLatex": "r = 4 \\times 2 = 8",
          "explanation": "Product of moduli.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "New argument",
          "workingLatex": "\\theta = \\frac{\\pi}{3} + \\frac{\\pi}{6} = \\frac{\\pi}{2}",
          "explanation": "Sum of arguments (adjust to principal value if needed).",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Result",
          "workingLatex": "z_1 z_2 = 8e^{i\\frac{\\pi}{2}}",
          "explanation": "Exponential form of the product.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Geometric meaning",
          "workingLatex": "\\text{Scale by } 2 \\text{ and rotate by } \\frac{\\pi}{6}",
          "explanation": "Multiplication scales and rotates on the Argand diagram.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify",
          "workingLatex": "|z_1 z_2| = 8",
          "explanation": "Modulus of product equals product of moduli.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "8e^{i\\frac{\\pi}{2}}",
          "explanation": "Final exponential form.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z_1 z_2 = 8e^{i\\frac{\\pi}{2}}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Exponential form",
    "subtopicId": "fm.y2.pure.complex-exponential",
    "questionDiagram": null,
    "id": "fm.y2.pure.complex-exponential.q033",
    "tags": [
      "multiplication"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Given $z_1 = 3e^{i\\frac{\\pi}{2}}$ and $z_2 = 5e^{i\\frac{\\pi}{2}}$, find $z_1 z_2$ in the form $re^{i\\theta}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Multiplication rule",
          "workingLatex": "r_1 e^{i\\theta_1} \\cdot r_2 e^{i\\theta_2} = r_1 r_2 e^{i(\\theta_1 + \\theta_2)}",
          "explanation": "Moduli multiply; arguments add.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify moduli",
          "workingLatex": "r_1 = 3,\\; r_2 = 5",
          "explanation": "Read from each factor.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify arguments",
          "workingLatex": "\\theta_1 = \\frac{\\pi}{2},\\; \\theta_2 = \\frac{\\pi}{2}",
          "explanation": "Principal arguments.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "New modulus",
          "workingLatex": "r = 3 \\times 5 = 15",
          "explanation": "Product of moduli.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "New argument",
          "workingLatex": "\\theta = \\frac{\\pi}{2} + \\frac{\\pi}{2} = \\pi",
          "explanation": "Sum of arguments (adjust to principal value if needed).",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Result",
          "workingLatex": "z_1 z_2 = 15e^{i\\pi}",
          "explanation": "Exponential form of the product.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Geometric meaning",
          "workingLatex": "\\text{Scale by } 5 \\text{ and rotate by } \\frac{\\pi}{2}",
          "explanation": "Multiplication scales and rotates on the Argand diagram.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify",
          "workingLatex": "|z_1 z_2| = 15",
          "explanation": "Modulus of product equals product of moduli.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "15e^{i\\pi}",
          "explanation": "Final exponential form.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z_1 z_2 = 15e^{i\\pi}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Exponential form",
    "subtopicId": "fm.y2.pure.complex-exponential",
    "questionDiagram": null,
    "id": "fm.y2.pure.complex-exponential.q034",
    "tags": [
      "multiplication"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Given $z_1 = 2e^{i0}$ and $z_2 = 3e^{i\\frac{\\pi}{3}}$, find $z_1 z_2$ in the form $re^{i\\theta}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Multiplication rule",
          "workingLatex": "r_1 e^{i\\theta_1} \\cdot r_2 e^{i\\theta_2} = r_1 r_2 e^{i(\\theta_1 + \\theta_2)}",
          "explanation": "Moduli multiply; arguments add.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify moduli",
          "workingLatex": "r_1 = 2,\\; r_2 = 3",
          "explanation": "Read from each factor.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify arguments",
          "workingLatex": "\\theta_1 = 0,\\; \\theta_2 = \\frac{\\pi}{3}",
          "explanation": "Principal arguments.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "New modulus",
          "workingLatex": "r = 2 \\times 3 = 6",
          "explanation": "Product of moduli.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "New argument",
          "workingLatex": "\\theta = 0 + \\frac{\\pi}{3} = \\frac{\\pi}{3}",
          "explanation": "Sum of arguments (adjust to principal value if needed).",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Result",
          "workingLatex": "z_1 z_2 = 6e^{i\\frac{\\pi}{3}}",
          "explanation": "Exponential form of the product.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Geometric meaning",
          "workingLatex": "\\text{Scale by } 3 \\text{ and rotate by } \\frac{\\pi}{3}",
          "explanation": "Multiplication scales and rotates on the Argand diagram.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify",
          "workingLatex": "|z_1 z_2| = 6",
          "explanation": "Modulus of product equals product of moduli.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "6e^{i\\frac{\\pi}{3}}",
          "explanation": "Final exponential form.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z_1 z_2 = 6e^{i\\frac{\\pi}{3}}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Exponential form",
    "subtopicId": "fm.y2.pure.complex-exponential",
    "questionDiagram": null,
    "id": "fm.y2.pure.complex-exponential.q035",
    "tags": [
      "multiplication"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Given $z_1 = 5e^{i\\frac{\\pi}{4}}$ and $z_2 = 2e^{i-\\frac{\\pi}{4}}$, find $z_1 z_2$ in the form $re^{i\\theta}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Multiplication rule",
          "workingLatex": "r_1 e^{i\\theta_1} \\cdot r_2 e^{i\\theta_2} = r_1 r_2 e^{i(\\theta_1 + \\theta_2)}",
          "explanation": "Moduli multiply; arguments add.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify moduli",
          "workingLatex": "r_1 = 5,\\; r_2 = 2",
          "explanation": "Read from each factor.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify arguments",
          "workingLatex": "\\theta_1 = \\frac{\\pi}{4},\\; \\theta_2 = -\\frac{\\pi}{4}",
          "explanation": "Principal arguments.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "New modulus",
          "workingLatex": "r = 5 \\times 2 = 10",
          "explanation": "Product of moduli.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "New argument",
          "workingLatex": "\\theta = \\frac{\\pi}{4} + -\\frac{\\pi}{4} = 0",
          "explanation": "Sum of arguments (adjust to principal value if needed).",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Result",
          "workingLatex": "z_1 z_2 = 10e^{i0}",
          "explanation": "Exponential form of the product.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Geometric meaning",
          "workingLatex": "\\text{Scale by } 2 \\text{ and rotate by } -\\frac{\\pi}{4}",
          "explanation": "Multiplication scales and rotates on the Argand diagram.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify",
          "workingLatex": "|z_1 z_2| = 10",
          "explanation": "Modulus of product equals product of moduli.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "10e^{i0}",
          "explanation": "Final exponential form.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z_1 z_2 = 10e^{i0}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Exponential form",
    "subtopicId": "fm.y2.pure.complex-exponential",
    "questionDiagram": null,
    "id": "fm.y2.pure.complex-exponential.q036",
    "tags": [
      "multiplication"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Given $z_1 = 3e^{i\\frac{\\pi}{6}}$ and $z_2 = 4e^{i\\frac{\\pi}{3}}$, find $z_1 z_2$ in the form $re^{i\\theta}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Multiplication rule",
          "workingLatex": "r_1 e^{i\\theta_1} \\cdot r_2 e^{i\\theta_2} = r_1 r_2 e^{i(\\theta_1 + \\theta_2)}",
          "explanation": "Moduli multiply; arguments add.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify moduli",
          "workingLatex": "r_1 = 3,\\; r_2 = 4",
          "explanation": "Read from each factor.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify arguments",
          "workingLatex": "\\theta_1 = \\frac{\\pi}{6},\\; \\theta_2 = \\frac{\\pi}{3}",
          "explanation": "Principal arguments.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "New modulus",
          "workingLatex": "r = 3 \\times 4 = 12",
          "explanation": "Product of moduli.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "New argument",
          "workingLatex": "\\theta = \\frac{\\pi}{6} + \\frac{\\pi}{3} = \\frac{\\pi}{2}",
          "explanation": "Sum of arguments (adjust to principal value if needed).",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Result",
          "workingLatex": "z_1 z_2 = 12e^{i\\frac{\\pi}{2}}",
          "explanation": "Exponential form of the product.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Geometric meaning",
          "workingLatex": "\\text{Scale by } 4 \\text{ and rotate by } \\frac{\\pi}{3}",
          "explanation": "Multiplication scales and rotates on the Argand diagram.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify",
          "workingLatex": "|z_1 z_2| = 12",
          "explanation": "Modulus of product equals product of moduli.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "12e^{i\\frac{\\pi}{2}}",
          "explanation": "Final exponential form.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z_1 z_2 = 12e^{i\\frac{\\pi}{2}}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Exponential form",
    "subtopicId": "fm.y2.pure.complex-exponential",
    "questionDiagram": null,
    "id": "fm.y2.pure.complex-exponential.q037",
    "tags": [
      "multiplication"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Given $z_1 = 2e^{i\\frac{\\pi}{3}}$ and $z_2 = 3e^{i-\\frac{\\pi}{3}}$, find $z_1 z_2$ in the form $re^{i\\theta}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Multiplication rule",
          "workingLatex": "r_1 e^{i\\theta_1} \\cdot r_2 e^{i\\theta_2} = r_1 r_2 e^{i(\\theta_1 + \\theta_2)}",
          "explanation": "Moduli multiply; arguments add.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify moduli",
          "workingLatex": "r_1 = 2,\\; r_2 = 3",
          "explanation": "Read from each factor.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify arguments",
          "workingLatex": "\\theta_1 = \\frac{\\pi}{3},\\; \\theta_2 = -\\frac{\\pi}{3}",
          "explanation": "Principal arguments.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "New modulus",
          "workingLatex": "r = 2 \\times 3 = 6",
          "explanation": "Product of moduli.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "New argument",
          "workingLatex": "\\theta = \\frac{\\pi}{3} + -\\frac{\\pi}{3} = 0",
          "explanation": "Sum of arguments (adjust to principal value if needed).",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Result",
          "workingLatex": "z_1 z_2 = 6e^{i0}",
          "explanation": "Exponential form of the product.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Geometric meaning",
          "workingLatex": "\\text{Scale by } 3 \\text{ and rotate by } -\\frac{\\pi}{3}",
          "explanation": "Multiplication scales and rotates on the Argand diagram.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify",
          "workingLatex": "|z_1 z_2| = 6",
          "explanation": "Modulus of product equals product of moduli.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "6e^{i0}",
          "explanation": "Final exponential form.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z_1 z_2 = 6e^{i0}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Exponential form",
    "subtopicId": "fm.y2.pure.complex-exponential",
    "questionDiagram": null,
    "id": "fm.y2.pure.complex-exponential.q038",
    "tags": [
      "multiplication"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Given $z_1 = 6e^{i\\frac{\\pi}{4}}$ and $z_2 = 0.5e^{i\\frac{\\pi}{4}}$, find $z_1 z_2$ in the form $re^{i\\theta}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Multiplication rule",
          "workingLatex": "r_1 e^{i\\theta_1} \\cdot r_2 e^{i\\theta_2} = r_1 r_2 e^{i(\\theta_1 + \\theta_2)}",
          "explanation": "Moduli multiply; arguments add.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify moduli",
          "workingLatex": "r_1 = 6,\\; r_2 = 0.5",
          "explanation": "Read from each factor.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify arguments",
          "workingLatex": "\\theta_1 = \\frac{\\pi}{4},\\; \\theta_2 = \\frac{\\pi}{4}",
          "explanation": "Principal arguments.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "New modulus",
          "workingLatex": "r = 6 \\times 0.5 = 3",
          "explanation": "Product of moduli.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "New argument",
          "workingLatex": "\\theta = \\frac{\\pi}{4} + \\frac{\\pi}{4} = \\frac{\\pi}{2}",
          "explanation": "Sum of arguments (adjust to principal value if needed).",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Result",
          "workingLatex": "z_1 z_2 = 3e^{i\\frac{\\pi}{2}}",
          "explanation": "Exponential form of the product.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Geometric meaning",
          "workingLatex": "\\text{Scale by } 0.5 \\text{ and rotate by } \\frac{\\pi}{4}",
          "explanation": "Multiplication scales and rotates on the Argand diagram.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify",
          "workingLatex": "|z_1 z_2| = 3",
          "explanation": "Modulus of product equals product of moduli.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "3e^{i\\frac{\\pi}{2}}",
          "explanation": "Final exponential form.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z_1 z_2 = 3e^{i\\frac{\\pi}{2}}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Exponential form",
    "subtopicId": "fm.y2.pure.complex-exponential",
    "questionDiagram": null,
    "id": "fm.y2.pure.complex-exponential.q039",
    "tags": [
      "multiplication"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Given $z_1 = 4e^{i\\pi}$ and $z_2 = 3e^{i\\frac{\\pi}{2}}$, find $z_1 z_2$ in the form $re^{i\\theta}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Multiplication rule",
          "workingLatex": "r_1 e^{i\\theta_1} \\cdot r_2 e^{i\\theta_2} = r_1 r_2 e^{i(\\theta_1 + \\theta_2)}",
          "explanation": "Moduli multiply; arguments add.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify moduli",
          "workingLatex": "r_1 = 4,\\; r_2 = 3",
          "explanation": "Read from each factor.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify arguments",
          "workingLatex": "\\theta_1 = \\pi,\\; \\theta_2 = \\frac{\\pi}{2}",
          "explanation": "Principal arguments.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "New modulus",
          "workingLatex": "r = 4 \\times 3 = 12",
          "explanation": "Product of moduli.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "New argument",
          "workingLatex": "\\theta = \\pi + \\frac{\\pi}{2} = -\\frac{\\pi}{2}",
          "explanation": "Sum of arguments (adjust to principal value if needed).",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Result",
          "workingLatex": "z_1 z_2 = 12e^{i-\\frac{\\pi}{2}}",
          "explanation": "Exponential form of the product.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Geometric meaning",
          "workingLatex": "\\text{Scale by } 3 \\text{ and rotate by } \\frac{\\pi}{2}",
          "explanation": "Multiplication scales and rotates on the Argand diagram.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify",
          "workingLatex": "|z_1 z_2| = 12",
          "explanation": "Modulus of product equals product of moduli.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "12e^{i-\\frac{\\pi}{2}}",
          "explanation": "Final exponential form.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z_1 z_2 = 12e^{i-\\frac{\\pi}{2}}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Exponential form",
    "subtopicId": "fm.y2.pure.complex-exponential",
    "questionDiagram": null,
    "id": "fm.y2.pure.complex-exponential.q040",
    "tags": [
      "multiplication"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Given $z_1 = 2e^{i-\\frac{\\pi}{4}}$ and $z_2 = 4e^{i\\frac{\\pi}{4}}$, find $z_1 z_2$ in the form $re^{i\\theta}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Multiplication rule",
          "workingLatex": "r_1 e^{i\\theta_1} \\cdot r_2 e^{i\\theta_2} = r_1 r_2 e^{i(\\theta_1 + \\theta_2)}",
          "explanation": "Moduli multiply; arguments add.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify moduli",
          "workingLatex": "r_1 = 2,\\; r_2 = 4",
          "explanation": "Read from each factor.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify arguments",
          "workingLatex": "\\theta_1 = -\\frac{\\pi}{4},\\; \\theta_2 = \\frac{\\pi}{4}",
          "explanation": "Principal arguments.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "New modulus",
          "workingLatex": "r = 2 \\times 4 = 8",
          "explanation": "Product of moduli.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "New argument",
          "workingLatex": "\\theta = -\\frac{\\pi}{4} + \\frac{\\pi}{4} = 0",
          "explanation": "Sum of arguments (adjust to principal value if needed).",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Result",
          "workingLatex": "z_1 z_2 = 8e^{i0}",
          "explanation": "Exponential form of the product.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Geometric meaning",
          "workingLatex": "\\text{Scale by } 4 \\text{ and rotate by } \\frac{\\pi}{4}",
          "explanation": "Multiplication scales and rotates on the Argand diagram.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify",
          "workingLatex": "|z_1 z_2| = 8",
          "explanation": "Modulus of product equals product of moduli.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "8e^{i0}",
          "explanation": "Final exponential form.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z_1 z_2 = 8e^{i0}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Exponential form",
    "subtopicId": "fm.y2.pure.complex-exponential",
    "questionDiagram": null,
    "id": "fm.y2.pure.complex-exponential.q041",
    "tags": [
      "verify",
      "multiplication"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Given $z_1 = 3e^{i\\frac{\\pi}{3}}$ and $z_2 = 2e^{i\\frac{\\pi}{6}}$, find $z_1 z_2$ in the form $re^{i\\theta}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Multiplication rule",
          "workingLatex": "r_1 e^{i\\theta_1} \\cdot r_2 e^{i\\theta_2} = r_1 r_2 e^{i(\\theta_1 + \\theta_2)}",
          "explanation": "Moduli multiply; arguments add.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify moduli",
          "workingLatex": "r_1 = 3,\\; r_2 = 2",
          "explanation": "Read from each factor.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify arguments",
          "workingLatex": "\\theta_1 = \\frac{\\pi}{3},\\; \\theta_2 = \\frac{\\pi}{6}",
          "explanation": "Principal arguments.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "New modulus",
          "workingLatex": "r = 3 \\times 2 = 6",
          "explanation": "Product of moduli.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "New argument",
          "workingLatex": "\\theta = \\frac{\\pi}{3} + \\frac{\\pi}{6} = \\frac{\\pi}{2}",
          "explanation": "Sum of arguments (adjust to principal value if needed).",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Result",
          "workingLatex": "z_1 z_2 = 6e^{i\\frac{\\pi}{2}}",
          "explanation": "Exponential form of the product.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Geometric meaning",
          "workingLatex": "\\text{Scale by } 2 \\text{ and rotate by } \\frac{\\pi}{6}",
          "explanation": "Multiplication scales and rotates on the Argand diagram.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify",
          "workingLatex": "|z_1 z_2| = 6",
          "explanation": "Modulus of product equals product of moduli.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "6e^{i\\frac{\\pi}{2}}",
          "explanation": "Final exponential form.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z_1 z_2 = 6e^{i\\frac{\\pi}{2}}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Exponential form",
    "subtopicId": "fm.y2.pure.complex-exponential",
    "questionDiagram": null,
    "id": "fm.y2.pure.complex-exponential.q042",
    "tags": [
      "verify",
      "multiplication"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Given $z_1 = 5e^{i0}$ and $z_2 = 2e^{i\\frac{\\pi}{2}}$, find $z_1 z_2$ in the form $re^{i\\theta}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Multiplication rule",
          "workingLatex": "r_1 e^{i\\theta_1} \\cdot r_2 e^{i\\theta_2} = r_1 r_2 e^{i(\\theta_1 + \\theta_2)}",
          "explanation": "Moduli multiply; arguments add.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify moduli",
          "workingLatex": "r_1 = 5,\\; r_2 = 2",
          "explanation": "Read from each factor.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify arguments",
          "workingLatex": "\\theta_1 = 0,\\; \\theta_2 = \\frac{\\pi}{2}",
          "explanation": "Principal arguments.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "New modulus",
          "workingLatex": "r = 5 \\times 2 = 10",
          "explanation": "Product of moduli.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "New argument",
          "workingLatex": "\\theta = 0 + \\frac{\\pi}{2} = \\frac{\\pi}{2}",
          "explanation": "Sum of arguments (adjust to principal value if needed).",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Result",
          "workingLatex": "z_1 z_2 = 10e^{i\\frac{\\pi}{2}}",
          "explanation": "Exponential form of the product.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Geometric meaning",
          "workingLatex": "\\text{Scale by } 2 \\text{ and rotate by } \\frac{\\pi}{2}",
          "explanation": "Multiplication scales and rotates on the Argand diagram.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify",
          "workingLatex": "|z_1 z_2| = 10",
          "explanation": "Modulus of product equals product of moduli.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "10e^{i\\frac{\\pi}{2}}",
          "explanation": "Final exponential form.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z_1 z_2 = 10e^{i\\frac{\\pi}{2}}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Exponential form",
    "subtopicId": "fm.y2.pure.complex-exponential",
    "questionDiagram": null,
    "id": "fm.y2.pure.complex-exponential.q043",
    "tags": [
      "multiplication"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Given $z_1 = 4e^{i-\\frac{\\pi}{3}}$ and $z_2 = 3e^{i\\frac{2\\pi}{3}}$, find $z_1 z_2$ in the form $re^{i\\theta}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Multiplication rule",
          "workingLatex": "r_1 e^{i\\theta_1} \\cdot r_2 e^{i\\theta_2} = r_1 r_2 e^{i(\\theta_1 + \\theta_2)}",
          "explanation": "Moduli multiply; arguments add.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify moduli",
          "workingLatex": "r_1 = 4,\\; r_2 = 3",
          "explanation": "Read from each factor.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify arguments",
          "workingLatex": "\\theta_1 = -\\frac{\\pi}{3},\\; \\theta_2 = \\frac{2\\pi}{3}",
          "explanation": "Principal arguments.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "New modulus",
          "workingLatex": "r = 4 \\times 3 = 12",
          "explanation": "Product of moduli.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "New argument",
          "workingLatex": "\\theta = -\\frac{\\pi}{3} + \\frac{2\\pi}{3} = \\frac{\\pi}{3}",
          "explanation": "Sum of arguments (adjust to principal value if needed).",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Result",
          "workingLatex": "z_1 z_2 = 12e^{i\\frac{\\pi}{3}}",
          "explanation": "Exponential form of the product.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Geometric meaning",
          "workingLatex": "\\text{Scale by } 3 \\text{ and rotate by } \\frac{2\\pi}{3}",
          "explanation": "Multiplication scales and rotates on the Argand diagram.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify",
          "workingLatex": "|z_1 z_2| = 12",
          "explanation": "Modulus of product equals product of moduli.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "12e^{i\\frac{\\pi}{3}}",
          "explanation": "Final exponential form.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z_1 z_2 = 12e^{i\\frac{\\pi}{3}}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Exponential form",
    "subtopicId": "fm.y2.pure.complex-exponential",
    "questionDiagram": null,
    "id": "fm.y2.pure.complex-exponential.q044",
    "tags": [
      "multiplication"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Given $z_1 = 2e^{i\\frac{\\pi}{6}}$ and $z_2 = 5e^{i\\frac{\\pi}{3}}$, find $z_1 z_2$ in the form $re^{i\\theta}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Multiplication rule",
          "workingLatex": "r_1 e^{i\\theta_1} \\cdot r_2 e^{i\\theta_2} = r_1 r_2 e^{i(\\theta_1 + \\theta_2)}",
          "explanation": "Moduli multiply; arguments add.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify moduli",
          "workingLatex": "r_1 = 2,\\; r_2 = 5",
          "explanation": "Read from each factor.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify arguments",
          "workingLatex": "\\theta_1 = \\frac{\\pi}{6},\\; \\theta_2 = \\frac{\\pi}{3}",
          "explanation": "Principal arguments.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "New modulus",
          "workingLatex": "r = 2 \\times 5 = 10",
          "explanation": "Product of moduli.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "New argument",
          "workingLatex": "\\theta = \\frac{\\pi}{6} + \\frac{\\pi}{3} = \\frac{\\pi}{2}",
          "explanation": "Sum of arguments (adjust to principal value if needed).",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Result",
          "workingLatex": "z_1 z_2 = 10e^{i\\frac{\\pi}{2}}",
          "explanation": "Exponential form of the product.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Geometric meaning",
          "workingLatex": "\\text{Scale by } 5 \\text{ and rotate by } \\frac{\\pi}{3}",
          "explanation": "Multiplication scales and rotates on the Argand diagram.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify",
          "workingLatex": "|z_1 z_2| = 10",
          "explanation": "Modulus of product equals product of moduli.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "10e^{i\\frac{\\pi}{2}}",
          "explanation": "Final exponential form.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z_1 z_2 = 10e^{i\\frac{\\pi}{2}}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Exponential form",
    "subtopicId": "fm.y2.pure.complex-exponential",
    "questionDiagram": null,
    "id": "fm.y2.pure.complex-exponential.q045",
    "tags": [
      "multiplication"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Given $z_1 = 3e^{i\\frac{\\pi}{4}}$ and $z_2 = 4e^{i-\\frac{\\pi}{2}}$, find $z_1 z_2$ in the form $re^{i\\theta}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Multiplication rule",
          "workingLatex": "r_1 e^{i\\theta_1} \\cdot r_2 e^{i\\theta_2} = r_1 r_2 e^{i(\\theta_1 + \\theta_2)}",
          "explanation": "Moduli multiply; arguments add.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify moduli",
          "workingLatex": "r_1 = 3,\\; r_2 = 4",
          "explanation": "Read from each factor.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify arguments",
          "workingLatex": "\\theta_1 = \\frac{\\pi}{4},\\; \\theta_2 = -\\frac{\\pi}{2}",
          "explanation": "Principal arguments.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "New modulus",
          "workingLatex": "r = 3 \\times 4 = 12",
          "explanation": "Product of moduli.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "New argument",
          "workingLatex": "\\theta = \\frac{\\pi}{4} + -\\frac{\\pi}{2} = -\\frac{\\pi}{4}",
          "explanation": "Sum of arguments (adjust to principal value if needed).",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Result",
          "workingLatex": "z_1 z_2 = 12e^{i-\\frac{\\pi}{4}}",
          "explanation": "Exponential form of the product.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Geometric meaning",
          "workingLatex": "\\text{Scale by } 4 \\text{ and rotate by } -\\frac{\\pi}{2}",
          "explanation": "Multiplication scales and rotates on the Argand diagram.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify",
          "workingLatex": "|z_1 z_2| = 12",
          "explanation": "Modulus of product equals product of moduli.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "12e^{i-\\frac{\\pi}{4}}",
          "explanation": "Final exponential form.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z_1 z_2 = 12e^{i-\\frac{\\pi}{4}}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Exponential form",
    "subtopicId": "fm.y2.pure.complex-exponential",
    "questionDiagram": null,
    "id": "fm.y2.pure.complex-exponential.q046",
    "tags": [
      "division"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Given $z_1 = 8e^{i\\frac{\\pi}{2}}$ and $z_2 = 2e^{i\\frac{\\pi}{4}}$, find $\\dfrac{z_1}{z_2}$ in the form $re^{i\\theta}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Division rule",
          "workingLatex": "\\frac{r_1 e^{i\\theta_1}}{r_2 e^{i\\theta_2}} = \\frac{r_1}{r_2} e^{i(\\theta_1 - \\theta_2)}",
          "explanation": "Moduli divide; arguments subtract.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Moduli",
          "workingLatex": "r_1 = 8,\\; r_2 = 2",
          "explanation": "From each number.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Arguments",
          "workingLatex": "\\theta_1 = \\frac{\\pi}{2},\\; \\theta_2 = \\frac{\\pi}{4}",
          "explanation": "Principal values.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Quotient modulus",
          "workingLatex": "\\frac{r_1}{r_2} = \\frac{8}{2} = 4",
          "explanation": "Divide moduli.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Quotient argument",
          "workingLatex": "\\theta_1 - \\theta_2 = \\frac{\\pi}{4}",
          "explanation": "Subtract arguments.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Result",
          "workingLatex": "\\frac{z_1}{z_2} = 4e^{i\\frac{\\pi}{4}}",
          "explanation": "Exponential form of the quotient.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Geometric meaning",
          "workingLatex": "\\text{Scale by } \\tfrac{8}{2} \\text{ and rotate by } -\\frac{\\pi}{4}",
          "explanation": "Division inverts the rotation of the divisor.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check",
          "workingLatex": "\\arg\\!\\left(\\frac{z_1}{z_2}\\right) = \\frac{\\pi}{4}",
          "explanation": "Confirm principal argument.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "4e^{i\\frac{\\pi}{4}}",
          "explanation": "Quotient in exponential form.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{z_1}{z_2} = 4e^{i\\frac{\\pi}{4}}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Exponential form",
    "subtopicId": "fm.y2.pure.complex-exponential",
    "questionDiagram": null,
    "id": "fm.y2.pure.complex-exponential.q047",
    "tags": [
      "division"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Given $z_1 = 6e^{i\\frac{\\pi}{3}}$ and $z_2 = 3e^{i\\frac{\\pi}{6}}$, find $\\dfrac{z_1}{z_2}$ in the form $re^{i\\theta}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Division rule",
          "workingLatex": "\\frac{r_1 e^{i\\theta_1}}{r_2 e^{i\\theta_2}} = \\frac{r_1}{r_2} e^{i(\\theta_1 - \\theta_2)}",
          "explanation": "Moduli divide; arguments subtract.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Moduli",
          "workingLatex": "r_1 = 6,\\; r_2 = 3",
          "explanation": "From each number.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Arguments",
          "workingLatex": "\\theta_1 = \\frac{\\pi}{3},\\; \\theta_2 = \\frac{\\pi}{6}",
          "explanation": "Principal values.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Quotient modulus",
          "workingLatex": "\\frac{r_1}{r_2} = \\frac{6}{3} = 2",
          "explanation": "Divide moduli.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Quotient argument",
          "workingLatex": "\\theta_1 - \\theta_2 = \\frac{\\pi}{6}",
          "explanation": "Subtract arguments.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Result",
          "workingLatex": "\\frac{z_1}{z_2} = 2e^{i\\frac{\\pi}{6}}",
          "explanation": "Exponential form of the quotient.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Geometric meaning",
          "workingLatex": "\\text{Scale by } \\tfrac{6}{3} \\text{ and rotate by } -\\frac{\\pi}{6}",
          "explanation": "Division inverts the rotation of the divisor.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check",
          "workingLatex": "\\arg\\!\\left(\\frac{z_1}{z_2}\\right) = \\frac{\\pi}{6}",
          "explanation": "Confirm principal argument.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "2e^{i\\frac{\\pi}{6}}",
          "explanation": "Quotient in exponential form.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{z_1}{z_2} = 2e^{i\\frac{\\pi}{6}}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Exponential form",
    "subtopicId": "fm.y2.pure.complex-exponential",
    "questionDiagram": null,
    "id": "fm.y2.pure.complex-exponential.q048",
    "tags": [
      "division"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Given $z_1 = 10e^{i\\pi}$ and $z_2 = 5e^{i\\frac{\\pi}{2}}$, find $\\dfrac{z_1}{z_2}$ in the form $re^{i\\theta}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Division rule",
          "workingLatex": "\\frac{r_1 e^{i\\theta_1}}{r_2 e^{i\\theta_2}} = \\frac{r_1}{r_2} e^{i(\\theta_1 - \\theta_2)}",
          "explanation": "Moduli divide; arguments subtract.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Moduli",
          "workingLatex": "r_1 = 10,\\; r_2 = 5",
          "explanation": "From each number.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Arguments",
          "workingLatex": "\\theta_1 = \\pi,\\; \\theta_2 = \\frac{\\pi}{2}",
          "explanation": "Principal values.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Quotient modulus",
          "workingLatex": "\\frac{r_1}{r_2} = \\frac{10}{5} = 2",
          "explanation": "Divide moduli.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Quotient argument",
          "workingLatex": "\\theta_1 - \\theta_2 = \\frac{\\pi}{2}",
          "explanation": "Subtract arguments.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Result",
          "workingLatex": "\\frac{z_1}{z_2} = 2e^{i\\frac{\\pi}{2}}",
          "explanation": "Exponential form of the quotient.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Geometric meaning",
          "workingLatex": "\\text{Scale by } \\tfrac{10}{5} \\text{ and rotate by } -\\frac{\\pi}{2}",
          "explanation": "Division inverts the rotation of the divisor.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check",
          "workingLatex": "\\arg\\!\\left(\\frac{z_1}{z_2}\\right) = \\frac{\\pi}{2}",
          "explanation": "Confirm principal argument.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "2e^{i\\frac{\\pi}{2}}",
          "explanation": "Quotient in exponential form.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{z_1}{z_2} = 2e^{i\\frac{\\pi}{2}}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Exponential form",
    "subtopicId": "fm.y2.pure.complex-exponential",
    "questionDiagram": null,
    "id": "fm.y2.pure.complex-exponential.q049",
    "tags": [
      "division"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Given $z_1 = 9e^{i\\frac{\\pi}{4}}$ and $z_2 = 3e^{i\\frac{\\pi}{4}}$, find $\\dfrac{z_1}{z_2}$ in the form $re^{i\\theta}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Division rule",
          "workingLatex": "\\frac{r_1 e^{i\\theta_1}}{r_2 e^{i\\theta_2}} = \\frac{r_1}{r_2} e^{i(\\theta_1 - \\theta_2)}",
          "explanation": "Moduli divide; arguments subtract.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Moduli",
          "workingLatex": "r_1 = 9,\\; r_2 = 3",
          "explanation": "From each number.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Arguments",
          "workingLatex": "\\theta_1 = \\frac{\\pi}{4},\\; \\theta_2 = \\frac{\\pi}{4}",
          "explanation": "Principal values.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Quotient modulus",
          "workingLatex": "\\frac{r_1}{r_2} = \\frac{9}{3} = 3",
          "explanation": "Divide moduli.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Quotient argument",
          "workingLatex": "\\theta_1 - \\theta_2 = 0",
          "explanation": "Subtract arguments.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Result",
          "workingLatex": "\\frac{z_1}{z_2} = 3e^{i0}",
          "explanation": "Exponential form of the quotient.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Geometric meaning",
          "workingLatex": "\\text{Scale by } \\tfrac{9}{3} \\text{ and rotate by } -\\frac{\\pi}{4}",
          "explanation": "Division inverts the rotation of the divisor.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check",
          "workingLatex": "\\arg\\!\\left(\\frac{z_1}{z_2}\\right) = 0",
          "explanation": "Confirm principal argument.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "3e^{i0}",
          "explanation": "Quotient in exponential form.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{z_1}{z_2} = 3e^{i0}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Exponential form",
    "subtopicId": "fm.y2.pure.complex-exponential",
    "questionDiagram": null,
    "id": "fm.y2.pure.complex-exponential.q050",
    "tags": [
      "division"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Given $z_1 = 12e^{i\\frac{\\pi}{2}}$ and $z_2 = 4e^{i\\frac{\\pi}{3}}$, find $\\dfrac{z_1}{z_2}$ in the form $re^{i\\theta}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Division rule",
          "workingLatex": "\\frac{r_1 e^{i\\theta_1}}{r_2 e^{i\\theta_2}} = \\frac{r_1}{r_2} e^{i(\\theta_1 - \\theta_2)}",
          "explanation": "Moduli divide; arguments subtract.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Moduli",
          "workingLatex": "r_1 = 12,\\; r_2 = 4",
          "explanation": "From each number.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Arguments",
          "workingLatex": "\\theta_1 = \\frac{\\pi}{2},\\; \\theta_2 = \\frac{\\pi}{3}",
          "explanation": "Principal values.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Quotient modulus",
          "workingLatex": "\\frac{r_1}{r_2} = \\frac{12}{4} = 3",
          "explanation": "Divide moduli.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Quotient argument",
          "workingLatex": "\\theta_1 - \\theta_2 = \\frac{\\pi}{6}",
          "explanation": "Subtract arguments.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Result",
          "workingLatex": "\\frac{z_1}{z_2} = 3e^{i\\frac{\\pi}{6}}",
          "explanation": "Exponential form of the quotient.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Geometric meaning",
          "workingLatex": "\\text{Scale by } \\tfrac{12}{4} \\text{ and rotate by } -\\frac{\\pi}{3}",
          "explanation": "Division inverts the rotation of the divisor.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check",
          "workingLatex": "\\arg\\!\\left(\\frac{z_1}{z_2}\\right) = \\frac{\\pi}{6}",
          "explanation": "Confirm principal argument.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "3e^{i\\frac{\\pi}{6}}",
          "explanation": "Quotient in exponential form.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{z_1}{z_2} = 3e^{i\\frac{\\pi}{6}}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Exponential form",
    "subtopicId": "fm.y2.pure.complex-exponential",
    "questionDiagram": null,
    "id": "fm.y2.pure.complex-exponential.q051",
    "tags": [
      "reciprocal"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find $\\dfrac{1}{z}$ in the form $re^{i\\theta}$, where $z = 4e^{i\\frac{\\pi}{3}}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Reciprocal rule",
          "workingLatex": "\\frac{1}{re^{i\\theta}} = \\frac{1}{r}e^{-i\\theta}",
          "explanation": "Modulus inverts; argument negates.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Given",
          "workingLatex": "z = 4e^{i\\frac{\\pi}{3}}",
          "explanation": "Original number.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Invert modulus",
          "workingLatex": "\\frac{1}{r} = 1/4",
          "explanation": "Reciprocal of the modulus.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Negate argument",
          "workingLatex": "-\\theta = -\\frac{\\pi}{3}",
          "explanation": "Argument changes sign.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Result",
          "workingLatex": "\\frac{1}{z} = 1/4e^{i-\\frac{\\pi}{3}}",
          "explanation": "Reciprocal in exponential form.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify product",
          "workingLatex": "z \\cdot \\frac{1}{z} = 1",
          "explanation": "A number times its reciprocal is 1.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Geometric meaning",
          "workingLatex": "\\text{Reflection through origin combined with inversion}",
          "explanation": "Reciprocal inverts distance and reflects direction.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check",
          "workingLatex": "4 \\times 1/4 = 1",
          "explanation": "Moduli multiply to 1.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "1/4e^{i-\\frac{\\pi}{3}}",
          "explanation": "Reciprocal.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{1}{z} = 1/4e^{i-\\frac{\\pi}{3}}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Exponential form",
    "subtopicId": "fm.y2.pure.complex-exponential",
    "questionDiagram": null,
    "id": "fm.y2.pure.complex-exponential.q052",
    "tags": [
      "reciprocal"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find $\\dfrac{1}{z}$ in the form $re^{i\\theta}$, where $z = 5e^{i\\frac{\\pi}{4}}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Reciprocal rule",
          "workingLatex": "\\frac{1}{re^{i\\theta}} = \\frac{1}{r}e^{-i\\theta}",
          "explanation": "Modulus inverts; argument negates.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Given",
          "workingLatex": "z = 5e^{i\\frac{\\pi}{4}}",
          "explanation": "Original number.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Invert modulus",
          "workingLatex": "\\frac{1}{r} = 1/5",
          "explanation": "Reciprocal of the modulus.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Negate argument",
          "workingLatex": "-\\theta = -\\frac{\\pi}{4}",
          "explanation": "Argument changes sign.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Result",
          "workingLatex": "\\frac{1}{z} = 1/5e^{i-\\frac{\\pi}{4}}",
          "explanation": "Reciprocal in exponential form.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify product",
          "workingLatex": "z \\cdot \\frac{1}{z} = 1",
          "explanation": "A number times its reciprocal is 1.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Geometric meaning",
          "workingLatex": "\\text{Reflection through origin combined with inversion}",
          "explanation": "Reciprocal inverts distance and reflects direction.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check",
          "workingLatex": "5 \\times 1/5 = 1",
          "explanation": "Moduli multiply to 1.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "1/5e^{i-\\frac{\\pi}{4}}",
          "explanation": "Reciprocal.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{1}{z} = 1/5e^{i-\\frac{\\pi}{4}}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Exponential form",
    "subtopicId": "fm.y2.pure.complex-exponential",
    "questionDiagram": null,
    "id": "fm.y2.pure.complex-exponential.q053",
    "tags": [
      "reciprocal"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find $\\dfrac{1}{z}$ in the form $re^{i\\theta}$, where $z = 2e^{i\\frac{\\pi}{2}}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Reciprocal rule",
          "workingLatex": "\\frac{1}{re^{i\\theta}} = \\frac{1}{r}e^{-i\\theta}",
          "explanation": "Modulus inverts; argument negates.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Given",
          "workingLatex": "z = 2e^{i\\frac{\\pi}{2}}",
          "explanation": "Original number.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Invert modulus",
          "workingLatex": "\\frac{1}{r} = 1/2",
          "explanation": "Reciprocal of the modulus.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Negate argument",
          "workingLatex": "-\\theta = -\\frac{\\pi}{2}",
          "explanation": "Argument changes sign.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Result",
          "workingLatex": "\\frac{1}{z} = 1/2e^{i-\\frac{\\pi}{2}}",
          "explanation": "Reciprocal in exponential form.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify product",
          "workingLatex": "z \\cdot \\frac{1}{z} = 1",
          "explanation": "A number times its reciprocal is 1.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Geometric meaning",
          "workingLatex": "\\text{Reflection through origin combined with inversion}",
          "explanation": "Reciprocal inverts distance and reflects direction.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check",
          "workingLatex": "2 \\times 1/2 = 1",
          "explanation": "Moduli multiply to 1.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "1/2e^{i-\\frac{\\pi}{2}}",
          "explanation": "Reciprocal.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{1}{z} = 1/2e^{i-\\frac{\\pi}{2}}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Exponential form",
    "subtopicId": "fm.y2.pure.complex-exponential",
    "questionDiagram": null,
    "id": "fm.y2.pure.complex-exponential.q054",
    "tags": [
      "reciprocal"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find $\\dfrac{1}{z}$ in the form $re^{i\\theta}$, where $z = 3e^{i\\pi}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Reciprocal rule",
          "workingLatex": "\\frac{1}{re^{i\\theta}} = \\frac{1}{r}e^{-i\\theta}",
          "explanation": "Modulus inverts; argument negates.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Given",
          "workingLatex": "z = 3e^{i\\pi}",
          "explanation": "Original number.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Invert modulus",
          "workingLatex": "\\frac{1}{r} = 1/3",
          "explanation": "Reciprocal of the modulus.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Negate argument",
          "workingLatex": "-\\theta = -pi",
          "explanation": "Argument changes sign.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Result",
          "workingLatex": "\\frac{1}{z} = 1/3e^{i-pi}",
          "explanation": "Reciprocal in exponential form.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify product",
          "workingLatex": "z \\cdot \\frac{1}{z} = 1",
          "explanation": "A number times its reciprocal is 1.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Geometric meaning",
          "workingLatex": "\\text{Reflection through origin combined with inversion}",
          "explanation": "Reciprocal inverts distance and reflects direction.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check",
          "workingLatex": "3 \\times 1/3 = 1",
          "explanation": "Moduli multiply to 1.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "1/3e^{i-pi}",
          "explanation": "Reciprocal.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{1}{z} = 1/3e^{i-pi}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Exponential form",
    "subtopicId": "fm.y2.pure.complex-exponential",
    "questionDiagram": null,
    "id": "fm.y2.pure.complex-exponential.q055",
    "tags": [
      "reciprocal"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find $\\dfrac{1}{z}$ in the form $re^{i\\theta}$, where $z = 6e^{i-\\frac{\\pi}{6}}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Reciprocal rule",
          "workingLatex": "\\frac{1}{re^{i\\theta}} = \\frac{1}{r}e^{-i\\theta}",
          "explanation": "Modulus inverts; argument negates.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Given",
          "workingLatex": "z = 6e^{i-\\frac{\\pi}{6}}",
          "explanation": "Original number.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Invert modulus",
          "workingLatex": "\\frac{1}{r} = 1/6",
          "explanation": "Reciprocal of the modulus.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Negate argument",
          "workingLatex": "-\\theta = \\frac{\\pi}{6}",
          "explanation": "Argument changes sign.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Result",
          "workingLatex": "\\frac{1}{z} = 1/6e^{i\\frac{\\pi}{6}}",
          "explanation": "Reciprocal in exponential form.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify product",
          "workingLatex": "z \\cdot \\frac{1}{z} = 1",
          "explanation": "A number times its reciprocal is 1.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Geometric meaning",
          "workingLatex": "\\text{Reflection through origin combined with inversion}",
          "explanation": "Reciprocal inverts distance and reflects direction.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check",
          "workingLatex": "6 \\times 1/6 = 1",
          "explanation": "Moduli multiply to 1.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "1/6e^{i\\frac{\\pi}{6}}",
          "explanation": "Reciprocal.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{1}{z} = 1/6e^{i\\frac{\\pi}{6}}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Exponential form",
    "subtopicId": "fm.y2.pure.complex-exponential",
    "questionDiagram": null,
    "id": "fm.y2.pure.complex-exponential.q056",
    "tags": [
      "rotation",
      "geometry"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "The complex number $z = 4e^{i0}$ is rotated anticlockwise through \\frac{\\pi}{2} about the origin. Find $z'$ in the form $re^{i\\theta}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rotation as multiplication",
          "workingLatex": "\\text{Rotation by } \\frac{\\pi}{2} \\text{ means multiply by } e^{i\\frac{\\pi}{2}}",
          "explanation": "A rotation is multiplication by a unit complex number.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Original number",
          "workingLatex": "z = 4e^{i0}",
          "explanation": "Given in exponential form.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply rotation",
          "workingLatex": "z' = z \\cdot e^{i\\frac{\\pi}{2}} = 4e^{i0} \\cdot e^{i\\frac{\\pi}{2}}",
          "explanation": "Multiply by the rotation factor.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add arguments",
          "workingLatex": "\\theta' = 0 + \\frac{\\pi}{2} = \\frac{\\pi}{2}",
          "explanation": "Arguments add under multiplication.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Modulus unchanged",
          "workingLatex": "|z'| = 4",
          "explanation": "Rotation preserves distance from origin.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Result",
          "workingLatex": "z' = 4e^{i\\frac{\\pi}{2}}",
          "explanation": "Image after rotation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Direction change",
          "workingLatex": "\\text{Anticlockwise rotation by } \\frac{\\pi}{2}",
          "explanation": "Geometric interpretation.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify",
          "workingLatex": "|z'| = 4",
          "explanation": "Modulus check.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "4e^{i\\frac{\\pi}{2}}",
          "explanation": "Rotated complex number.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z' = 4e^{i\\frac{\\pi}{2}}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Exponential form",
    "subtopicId": "fm.y2.pure.complex-exponential",
    "questionDiagram": null,
    "id": "fm.y2.pure.complex-exponential.q057",
    "tags": [
      "rotation",
      "geometry"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "The complex number $z = 3e^{i\\frac{\\pi}{4}}$ is rotated anticlockwise through \\frac{\\pi}{4} about the origin. Find $z'$ in the form $re^{i\\theta}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rotation as multiplication",
          "workingLatex": "\\text{Rotation by } \\frac{\\pi}{4} \\text{ means multiply by } e^{i\\frac{\\pi}{4}}",
          "explanation": "A rotation is multiplication by a unit complex number.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Original number",
          "workingLatex": "z = 3e^{i\\frac{\\pi}{4}}",
          "explanation": "Given in exponential form.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply rotation",
          "workingLatex": "z' = z \\cdot e^{i\\frac{\\pi}{4}} = 3e^{i\\frac{\\pi}{4}} \\cdot e^{i\\frac{\\pi}{4}}",
          "explanation": "Multiply by the rotation factor.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add arguments",
          "workingLatex": "\\theta' = \\frac{\\pi}{4} + \\frac{\\pi}{4} = \\frac{\\pi}{2}",
          "explanation": "Arguments add under multiplication.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Modulus unchanged",
          "workingLatex": "|z'| = 3",
          "explanation": "Rotation preserves distance from origin.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Result",
          "workingLatex": "z' = 3e^{i\\frac{\\pi}{2}}",
          "explanation": "Image after rotation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Direction change",
          "workingLatex": "\\text{Anticlockwise rotation by } \\frac{\\pi}{4}",
          "explanation": "Geometric interpretation.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify",
          "workingLatex": "|z'| = 3",
          "explanation": "Modulus check.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "3e^{i\\frac{\\pi}{2}}",
          "explanation": "Rotated complex number.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z' = 3e^{i\\frac{\\pi}{2}}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Exponential form",
    "subtopicId": "fm.y2.pure.complex-exponential",
    "questionDiagram": null,
    "id": "fm.y2.pure.complex-exponential.q058",
    "tags": [
      "rotation",
      "geometry"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "The complex number $z = 5e^{i\\frac{\\pi}{6}}$ is rotated anticlockwise through \\frac{\\pi}{3} about the origin. Find $z'$ in the form $re^{i\\theta}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rotation as multiplication",
          "workingLatex": "\\text{Rotation by } \\frac{\\pi}{3} \\text{ means multiply by } e^{i\\frac{\\pi}{3}}",
          "explanation": "A rotation is multiplication by a unit complex number.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Original number",
          "workingLatex": "z = 5e^{i\\frac{\\pi}{6}}",
          "explanation": "Given in exponential form.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply rotation",
          "workingLatex": "z' = z \\cdot e^{i\\frac{\\pi}{3}} = 5e^{i\\frac{\\pi}{6}} \\cdot e^{i\\frac{\\pi}{3}}",
          "explanation": "Multiply by the rotation factor.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add arguments",
          "workingLatex": "\\theta' = \\frac{\\pi}{6} + \\frac{\\pi}{3} = \\frac{\\pi}{2}",
          "explanation": "Arguments add under multiplication.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Modulus unchanged",
          "workingLatex": "|z'| = 5",
          "explanation": "Rotation preserves distance from origin.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Result",
          "workingLatex": "z' = 5e^{i\\frac{\\pi}{2}}",
          "explanation": "Image after rotation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Direction change",
          "workingLatex": "\\text{Anticlockwise rotation by } \\frac{\\pi}{3}",
          "explanation": "Geometric interpretation.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify",
          "workingLatex": "|z'| = 5",
          "explanation": "Modulus check.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "5e^{i\\frac{\\pi}{2}}",
          "explanation": "Rotated complex number.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z' = 5e^{i\\frac{\\pi}{2}}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Exponential form",
    "subtopicId": "fm.y2.pure.complex-exponential",
    "questionDiagram": null,
    "id": "fm.y2.pure.complex-exponential.q059",
    "tags": [
      "rotation",
      "geometry"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "The complex number $z = 2e^{i\\frac{\\pi}{3}}$ is rotated anticlockwise through \\frac{\\pi}{6} about the origin. Find $z'$ in the form $re^{i\\theta}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rotation as multiplication",
          "workingLatex": "\\text{Rotation by } \\frac{\\pi}{6} \\text{ means multiply by } e^{i\\frac{\\pi}{6}}",
          "explanation": "A rotation is multiplication by a unit complex number.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Original number",
          "workingLatex": "z = 2e^{i\\frac{\\pi}{3}}",
          "explanation": "Given in exponential form.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply rotation",
          "workingLatex": "z' = z \\cdot e^{i\\frac{\\pi}{6}} = 2e^{i\\frac{\\pi}{3}} \\cdot e^{i\\frac{\\pi}{6}}",
          "explanation": "Multiply by the rotation factor.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add arguments",
          "workingLatex": "\\theta' = \\frac{\\pi}{3} + \\frac{\\pi}{6} = \\frac{\\pi}{2}",
          "explanation": "Arguments add under multiplication.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Modulus unchanged",
          "workingLatex": "|z'| = 2",
          "explanation": "Rotation preserves distance from origin.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Result",
          "workingLatex": "z' = 2e^{i\\frac{\\pi}{2}}",
          "explanation": "Image after rotation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Direction change",
          "workingLatex": "\\text{Anticlockwise rotation by } \\frac{\\pi}{6}",
          "explanation": "Geometric interpretation.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify",
          "workingLatex": "|z'| = 2",
          "explanation": "Modulus check.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "2e^{i\\frac{\\pi}{2}}",
          "explanation": "Rotated complex number.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z' = 2e^{i\\frac{\\pi}{2}}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Exponential form",
    "subtopicId": "fm.y2.pure.complex-exponential",
    "questionDiagram": null,
    "id": "fm.y2.pure.complex-exponential.q060",
    "tags": [
      "rotation",
      "geometry"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "The complex number $z = 6e^{i\\frac{\\pi}{2}}$ is rotated anticlockwise through -\\frac{\\pi}{2} about the origin. Find $z'$ in the form $re^{i\\theta}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rotation as multiplication",
          "workingLatex": "\\text{Rotation by } -\\frac{\\pi}{2} \\text{ means multiply by } e^{i-\\frac{\\pi}{2}}",
          "explanation": "A rotation is multiplication by a unit complex number.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Original number",
          "workingLatex": "z = 6e^{i\\frac{\\pi}{2}}",
          "explanation": "Given in exponential form.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply rotation",
          "workingLatex": "z' = z \\cdot e^{i-\\frac{\\pi}{2}} = 6e^{i\\frac{\\pi}{2}} \\cdot e^{i-\\frac{\\pi}{2}}",
          "explanation": "Multiply by the rotation factor.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add arguments",
          "workingLatex": "\\theta' = \\frac{\\pi}{2} + -\\frac{\\pi}{2} = 0",
          "explanation": "Arguments add under multiplication.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Modulus unchanged",
          "workingLatex": "|z'| = 6",
          "explanation": "Rotation preserves distance from origin.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Result",
          "workingLatex": "z' = 6e^{i0}",
          "explanation": "Image after rotation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Direction change",
          "workingLatex": "\\text{Anticlockwise rotation by } -\\frac{\\pi}{2}",
          "explanation": "Geometric interpretation.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify",
          "workingLatex": "|z'| = 6",
          "explanation": "Modulus check.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "6e^{i0}",
          "explanation": "Rotated complex number.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z' = 6e^{i0}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Exponential form",
    "subtopicId": "fm.y2.pure.complex-exponential",
    "questionDiagram": null,
    "id": "fm.y2.pure.complex-exponential.q061",
    "tags": [
      "rotation",
      "geometry"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "The complex number $z = 4e^{i\\frac{\\pi}{4}}$ is rotated anticlockwise through \\pi about the origin. Find $z'$ in the form $re^{i\\theta}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rotation as multiplication",
          "workingLatex": "\\text{Rotation by } \\pi \\text{ means multiply by } e^{i\\pi}",
          "explanation": "A rotation is multiplication by a unit complex number.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Original number",
          "workingLatex": "z = 4e^{i\\frac{\\pi}{4}}",
          "explanation": "Given in exponential form.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply rotation",
          "workingLatex": "z' = z \\cdot e^{i\\pi} = 4e^{i\\frac{\\pi}{4}} \\cdot e^{i\\pi}",
          "explanation": "Multiply by the rotation factor.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add arguments",
          "workingLatex": "\\theta' = \\frac{\\pi}{4} + \\pi = 5pi/4",
          "explanation": "Arguments add under multiplication.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Modulus unchanged",
          "workingLatex": "|z'| = 4",
          "explanation": "Rotation preserves distance from origin.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Result",
          "workingLatex": "z' = 4e^{i5pi/4}",
          "explanation": "Image after rotation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Direction change",
          "workingLatex": "\\text{Anticlockwise rotation by } \\pi",
          "explanation": "Geometric interpretation.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify",
          "workingLatex": "|z'| = 4",
          "explanation": "Modulus check.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "4e^{i5pi/4}",
          "explanation": "Rotated complex number.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z' = 4e^{i5pi/4}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Exponential form",
    "subtopicId": "fm.y2.pure.complex-exponential",
    "questionDiagram": null,
    "id": "fm.y2.pure.complex-exponential.q062",
    "tags": [
      "rotation",
      "geometry"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "The complex number $z = 3e^{i-\\frac{\\pi}{4}}$ is rotated anticlockwise through \\frac{\\pi}{2} about the origin. Find $z'$ in the form $re^{i\\theta}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rotation as multiplication",
          "workingLatex": "\\text{Rotation by } \\frac{\\pi}{2} \\text{ means multiply by } e^{i\\frac{\\pi}{2}}",
          "explanation": "A rotation is multiplication by a unit complex number.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Original number",
          "workingLatex": "z = 3e^{i-\\frac{\\pi}{4}}",
          "explanation": "Given in exponential form.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply rotation",
          "workingLatex": "z' = z \\cdot e^{i\\frac{\\pi}{2}} = 3e^{i-\\frac{\\pi}{4}} \\cdot e^{i\\frac{\\pi}{2}}",
          "explanation": "Multiply by the rotation factor.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add arguments",
          "workingLatex": "\\theta' = -\\frac{\\pi}{4} + \\frac{\\pi}{2} = \\frac{\\pi}{4}",
          "explanation": "Arguments add under multiplication.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Modulus unchanged",
          "workingLatex": "|z'| = 3",
          "explanation": "Rotation preserves distance from origin.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Result",
          "workingLatex": "z' = 3e^{i\\frac{\\pi}{4}}",
          "explanation": "Image after rotation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Direction change",
          "workingLatex": "\\text{Anticlockwise rotation by } \\frac{\\pi}{2}",
          "explanation": "Geometric interpretation.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify",
          "workingLatex": "|z'| = 3",
          "explanation": "Modulus check.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "3e^{i\\frac{\\pi}{4}}",
          "explanation": "Rotated complex number.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z' = 3e^{i\\frac{\\pi}{4}}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Exponential form",
    "subtopicId": "fm.y2.pure.complex-exponential",
    "questionDiagram": null,
    "id": "fm.y2.pure.complex-exponential.q063",
    "tags": [
      "transformation"
    ],
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "written",
    "questionText": "The number $z = 2e^{i\\frac{\\pi}{6}}$ is scaled by 3 and then rotated anticlockwise through \\frac{\\pi}{3}. Find $z'$ in the form $re^{i\\theta}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Transform as multiplication",
          "workingLatex": "z' = k \\cdot e^{i\\frac{\\pi}{3}} \\cdot z",
          "explanation": "Scale then rotate (or combined as one complex multiplier).",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Multiplier",
          "workingLatex": "w = 3e^{i\\frac{\\pi}{3}}",
          "explanation": "The combined transformation factor.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Original",
          "workingLatex": "z = 2e^{i\\frac{\\pi}{6}}",
          "explanation": "Starting point.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Multiply moduli",
          "workingLatex": "r' = 3 \\times 2 = 6",
          "explanation": "Scale factor times original modulus.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Add arguments",
          "workingLatex": "\\theta' = \\frac{\\pi}{6} + \\frac{\\pi}{3} = \\frac{\\pi}{2}",
          "explanation": "Rotation adds to the argument.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Result",
          "workingLatex": "z' = 6e^{i\\frac{\\pi}{2}}",
          "explanation": "Transformed exponential form.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Geometric summary",
          "workingLatex": "\\text{Scale } \\times3,\\; \\text{rotate } \\frac{\\pi}{3}",
          "explanation": "Combined geometric effect.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Alternative",
          "workingLatex": "z' = (3e^{i\\frac{\\pi}{3}})(2e^{i\\frac{\\pi}{6}})",
          "explanation": "Product of transformation and original.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify modulus",
          "workingLatex": "|z'| = 6",
          "explanation": "Check distance from origin.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Verify argument",
          "workingLatex": "\\arg(z') = \\frac{\\pi}{2}",
          "explanation": "Check direction.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Argand interpretation",
          "workingLatex": "\\text{Spiral transformation}",
          "explanation": "Scaling plus rotation is a spiral similarity.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Answer",
          "workingLatex": "6e^{i\\frac{\\pi}{2}}",
          "explanation": "Final form.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Check",
          "workingLatex": "z' = (3e^{i\\frac{\\pi}{3}})(2e^{i\\frac{\\pi}{6}})",
          "explanation": "Confirm multiplication order.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z' = 6e^{i\\frac{\\pi}{2}}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Exponential form",
    "subtopicId": "fm.y2.pure.complex-exponential",
    "questionDiagram": null,
    "id": "fm.y2.pure.complex-exponential.q064",
    "tags": [
      "transformation"
    ],
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "written",
    "questionText": "The number $z = 4e^{i\\frac{\\pi}{4}}$ is scaled by 0.5 and then rotated anticlockwise through \\frac{\\pi}{2}. Find $z'$ in the form $re^{i\\theta}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Transform as multiplication",
          "workingLatex": "z' = k \\cdot e^{i\\frac{\\pi}{2}} \\cdot z",
          "explanation": "Scale then rotate (or combined as one complex multiplier).",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Multiplier",
          "workingLatex": "w = 0.5e^{i\\frac{\\pi}{2}}",
          "explanation": "The combined transformation factor.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Original",
          "workingLatex": "z = 4e^{i\\frac{\\pi}{4}}",
          "explanation": "Starting point.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Multiply moduli",
          "workingLatex": "r' = 0.5 \\times 4 = 2",
          "explanation": "Scale factor times original modulus.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Add arguments",
          "workingLatex": "\\theta' = \\frac{\\pi}{4} + \\frac{\\pi}{2} = \\frac{3\\pi}{4}",
          "explanation": "Rotation adds to the argument.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Result",
          "workingLatex": "z' = 2e^{i\\frac{3\\pi}{4}}",
          "explanation": "Transformed exponential form.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Geometric summary",
          "workingLatex": "\\text{Scale } \\times0.5,\\; \\text{rotate } \\frac{\\pi}{2}",
          "explanation": "Combined geometric effect.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Alternative",
          "workingLatex": "z' = (0.5e^{i\\frac{\\pi}{2}})(4e^{i\\frac{\\pi}{4}})",
          "explanation": "Product of transformation and original.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify modulus",
          "workingLatex": "|z'| = 2",
          "explanation": "Check distance from origin.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Verify argument",
          "workingLatex": "\\arg(z') = \\frac{3\\pi}{4}",
          "explanation": "Check direction.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Argand interpretation",
          "workingLatex": "\\text{Spiral transformation}",
          "explanation": "Scaling plus rotation is a spiral similarity.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Answer",
          "workingLatex": "2e^{i\\frac{3\\pi}{4}}",
          "explanation": "Final form.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Check",
          "workingLatex": "z' = (0.5e^{i\\frac{\\pi}{2}})(4e^{i\\frac{\\pi}{4}})",
          "explanation": "Confirm multiplication order.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z' = 2e^{i\\frac{3\\pi}{4}}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Exponential form",
    "subtopicId": "fm.y2.pure.complex-exponential",
    "questionDiagram": null,
    "id": "fm.y2.pure.complex-exponential.q065",
    "tags": [
      "transformation"
    ],
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "written",
    "questionText": "The number $z = 5e^{i0}$ is scaled by 2 and then rotated anticlockwise through \\frac{\\pi}{4}. Find $z'$ in the form $re^{i\\theta}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Transform as multiplication",
          "workingLatex": "z' = k \\cdot e^{i\\frac{\\pi}{4}} \\cdot z",
          "explanation": "Scale then rotate (or combined as one complex multiplier).",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Multiplier",
          "workingLatex": "w = 2e^{i\\frac{\\pi}{4}}",
          "explanation": "The combined transformation factor.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Original",
          "workingLatex": "z = 5e^{i0}",
          "explanation": "Starting point.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Multiply moduli",
          "workingLatex": "r' = 2 \\times 5 = 10",
          "explanation": "Scale factor times original modulus.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Add arguments",
          "workingLatex": "\\theta' = 0 + \\frac{\\pi}{4} = \\frac{\\pi}{4}",
          "explanation": "Rotation adds to the argument.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Result",
          "workingLatex": "z' = 10e^{i\\frac{\\pi}{4}}",
          "explanation": "Transformed exponential form.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Geometric summary",
          "workingLatex": "\\text{Scale } \\times2,\\; \\text{rotate } \\frac{\\pi}{4}",
          "explanation": "Combined geometric effect.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Alternative",
          "workingLatex": "z' = (2e^{i\\frac{\\pi}{4}})(5e^{i0})",
          "explanation": "Product of transformation and original.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify modulus",
          "workingLatex": "|z'| = 10",
          "explanation": "Check distance from origin.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Verify argument",
          "workingLatex": "\\arg(z') = \\frac{\\pi}{4}",
          "explanation": "Check direction.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Argand interpretation",
          "workingLatex": "\\text{Spiral transformation}",
          "explanation": "Scaling plus rotation is a spiral similarity.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Answer",
          "workingLatex": "10e^{i\\frac{\\pi}{4}}",
          "explanation": "Final form.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Check",
          "workingLatex": "z' = (2e^{i\\frac{\\pi}{4}})(5e^{i0})",
          "explanation": "Confirm multiplication order.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z' = 10e^{i\\frac{\\pi}{4}}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Exponential form",
    "subtopicId": "fm.y2.pure.complex-exponential",
    "questionDiagram": null,
    "id": "fm.y2.pure.complex-exponential.q066",
    "tags": [
      "transformation"
    ],
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "written",
    "questionText": "The number $z = 3e^{i\\frac{\\pi}{3}}$ is scaled by 4 and then rotated anticlockwise through -\\frac{\\pi}{6}. Find $z'$ in the form $re^{i\\theta}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Transform as multiplication",
          "workingLatex": "z' = k \\cdot e^{i-\\frac{\\pi}{6}} \\cdot z",
          "explanation": "Scale then rotate (or combined as one complex multiplier).",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Multiplier",
          "workingLatex": "w = 4e^{i-\\frac{\\pi}{6}}",
          "explanation": "The combined transformation factor.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Original",
          "workingLatex": "z = 3e^{i\\frac{\\pi}{3}}",
          "explanation": "Starting point.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Multiply moduli",
          "workingLatex": "r' = 4 \\times 3 = 12",
          "explanation": "Scale factor times original modulus.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Add arguments",
          "workingLatex": "\\theta' = \\frac{\\pi}{3} + -\\frac{\\pi}{6} = \\frac{\\pi}{6}",
          "explanation": "Rotation adds to the argument.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Result",
          "workingLatex": "z' = 12e^{i\\frac{\\pi}{6}}",
          "explanation": "Transformed exponential form.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Geometric summary",
          "workingLatex": "\\text{Scale } \\times4,\\; \\text{rotate } -\\frac{\\pi}{6}",
          "explanation": "Combined geometric effect.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Alternative",
          "workingLatex": "z' = (4e^{i-\\frac{\\pi}{6}})(3e^{i\\frac{\\pi}{3}})",
          "explanation": "Product of transformation and original.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify modulus",
          "workingLatex": "|z'| = 12",
          "explanation": "Check distance from origin.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Verify argument",
          "workingLatex": "\\arg(z') = \\frac{\\pi}{6}",
          "explanation": "Check direction.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Argand interpretation",
          "workingLatex": "\\text{Spiral transformation}",
          "explanation": "Scaling plus rotation is a spiral similarity.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Answer",
          "workingLatex": "12e^{i\\frac{\\pi}{6}}",
          "explanation": "Final form.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Check",
          "workingLatex": "z' = (4e^{i-\\frac{\\pi}{6}})(3e^{i\\frac{\\pi}{3}})",
          "explanation": "Confirm multiplication order.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z' = 12e^{i\\frac{\\pi}{6}}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Exponential form",
    "subtopicId": "fm.y2.pure.complex-exponential",
    "questionDiagram": null,
    "id": "fm.y2.pure.complex-exponential.q067",
    "tags": [
      "combined"
    ],
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "questionText": "Given $z_1 = 2e^{i\\pi/6}$, $z_2 = 3e^{i\\pi/4}$ and $z_3 = e^{-i\\pi/3}$, find (a) $z_1 z_2 z_3$ and (b) $\\dfrac{z_1 z_2}{z_3}$ in the form $re^{i\\theta}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "(a) Multiply $z_1$ and $z_2$",
          "workingLatex": "2e^{i\\pi/6} \\cdot 3e^{i\\pi/4} = 6e^{i(\\pi/6+\\pi/4)} = 6e^{i5\\pi/12}",
          "explanation": "Moduli multiply; arguments add.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "(a) Multiply by $z_3$",
          "workingLatex": "6e^{i5\\pi/12} \\cdot e^{-i\\pi/3} = 6e^{i(5\\pi/12-\\pi/3)} = 6e^{i\\pi/12}",
          "explanation": "Continue multiplying.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "(b) Numerator",
          "workingLatex": "z_1 z_2 = 6e^{i5\\pi/12}",
          "explanation": "From part (a) first step.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "(b) Divide by $z_3$",
          "workingLatex": "\\frac{6e^{i5\\pi/12}}{e^{-i\\pi/3}} = 6e^{i(5\\pi/12+\\pi/3)} = 6e^{i3\\pi/4}",
          "explanation": "Division subtracts arguments; here subtracting a negative adds.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify (a) modulus",
          "workingLatex": "|z_1 z_2 z_3| = 2 \\times 3 \\times 1 = 6",
          "explanation": "Product of moduli.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify (b) modulus",
          "workingLatex": "|z_1 z_2 / z_3| = 6",
          "explanation": "Same modulus in this case since $|z_3|=1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Argument check (a)",
          "workingLatex": "\\pi/6 + \\pi/4 - \\pi/3 = \\pi/12",
          "explanation": "Net argument.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Argument check (b)",
          "workingLatex": "5\\pi/12 + \\pi/3 = 3\\pi/4",
          "explanation": "Confirm part (b).",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Geometric view",
          "workingLatex": "\\text{Three rotations compose to net angle } \\pi/12",
          "explanation": "Multiplication chains rotations.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Alternative (b)",
          "workingLatex": "z_1 z_2 z_3^2 \\text{ would differ}",
          "explanation": "Order and operation matter.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Rectangular check (a)",
          "workingLatex": "6e^{i\\pi/12} \\approx 5.79 + 1.55i",
          "explanation": "Approximate verification.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Answer (a)",
          "workingLatex": "6e^{i\\pi/12}",
          "explanation": "Triple product.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Answer (b)",
          "workingLatex": "6e^{i3\\pi/4}",
          "explanation": "Quotient.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $6e^{i\\pi/12}$. (b) $6e^{i3\\pi/4}$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Exponential form",
    "subtopicId": "fm.y2.pure.complex-exponential",
    "questionDiagram": null,
    "id": "fm.y2.pure.complex-exponential.q068",
    "tags": [
      "powers",
      "geometry"
    ],
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "questionText": "The complex number $w = 1 + i\\sqrt{3}$ is written in exponential form. Describe the geometric effect of multiplying any complex number $z$ by $w$, and find $w^{2}$ and $w^{3}$ in the form $re^{i\\theta}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Modulus of $w$",
          "workingLatex": "|w| = \\sqrt{1+3} = 2",
          "explanation": "Distance from origin.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Argument of $w$",
          "workingLatex": "\\arg(w) = \\pi/3",
          "explanation": "Quadrant I: $\\tan\\theta = \\sqrt{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Exponential form",
          "workingLatex": "w = 2e^{i\\pi/3}",
          "explanation": "Write in $re^{i\\theta}$ form.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Geometric effect",
          "workingLatex": "\\text{Scale by 2 and rotate anticlockwise by } \\pi/3",
          "explanation": "Multiplication by $w$ is a spiral similarity.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "$w^{2}$ modulus",
          "workingLatex": "|w|^{2} = 4",
          "explanation": "Modulus squared.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "$w^{2}$ argument",
          "workingLatex": "2 \\times \\pi/3 = 2\\pi/3",
          "explanation": "Argument doubles.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "$w^{2}$ form",
          "workingLatex": "w^{2} = 4e^{i2\\pi/3}",
          "explanation": "Exponential form.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "$w^{3}$ modulus",
          "workingLatex": "|w|^{3} = 8",
          "explanation": "Modulus cubed.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "$w^{3}$ argument",
          "workingLatex": "3 \\times \\pi/3 = \\pi",
          "explanation": "Argument triples.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "$w^{3}$ form",
          "workingLatex": "w^{3} = 8e^{i\\pi} = -8",
          "explanation": "Simplifies to a real number.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Verify $w^{3}$",
          "workingLatex": "(1+i\\sqrt{3})^{3} = -8",
          "explanation": "Algebraic confirmation.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Geometric summary",
          "workingLatex": "\\text{Each power adds another rotation of } \\pi/3",
          "explanation": "Powers compound the transformation.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Answer",
          "workingLatex": "w = 2e^{i\\pi/3};\\; w^{2} = 4e^{i2\\pi/3};\\; w^{3} = 8e^{i\\pi}",
          "explanation": "Complete.",
          "diagram": null
        }
      ],
      "finalAnswer": "$w = 2e^{i\\pi/3}$; multiplying by $w$ scales by 2 and rotates by $\\pi/3$; $w^{2} = 4e^{i2\\pi/3}$; $w^{3} = 8e^{i\\pi}$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Exponential form",
    "subtopicId": "fm.y2.pure.complex-exponential",
    "questionDiagram": null,
    "id": "fm.y2.pure.complex-exponential.q069",
    "tags": [
      "equation"
    ],
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "questionText": "Solve $ze^{i\\pi/4} = 4e^{i\\pi/2}$ for $z$, giving your answer in exponential form. Hence write $z$ in the form $a + bi$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Isolate $z$",
          "workingLatex": "z = \\frac{4e^{i\\pi/2}}{e^{i\\pi/4}}",
          "explanation": "Divide both sides by $e^{i\\pi/4}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Division rule",
          "workingLatex": "z = 4e^{i(\\pi/2 - \\pi/4)}",
          "explanation": "Moduli divide; arguments subtract.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify argument",
          "workingLatex": "\\pi/2 - \\pi/4 = \\pi/4",
          "explanation": "Compute the difference.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Exponential answer",
          "workingLatex": "z = 4e^{i\\pi/4}",
          "explanation": "Solution in required form.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Expand to rectangular",
          "workingLatex": "z = 4(\\cos\\pi/4 + i\\sin\\pi/4)",
          "explanation": "Use Euler's formula.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Trig values",
          "workingLatex": "\\cos\\pi/4 = \\sin\\pi/4 = \\frac{\\sqrt{2}}{2}",
          "explanation": "Standard exact values.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Multiply",
          "workingLatex": "z = 4 \\cdot \\frac{\\sqrt{2}}{2}(1+i) = 2\\sqrt{2}(1+i)",
          "explanation": "Simplify.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Rectangular form",
          "workingLatex": "z = 2\\sqrt{2} + 2\\sqrt{2}i",
          "explanation": "Final $a + bi$ form.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify",
          "workingLatex": "2\\sqrt{2}(1+i) \\cdot e^{i\\pi/4} = 2\\sqrt{2} \\cdot \\sqrt{2} e^{i\\pi/2} = 4e^{i\\pi/2}",
          "explanation": "Check by substituting back.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Modulus check",
          "workingLatex": "|z| = 4",
          "explanation": "Consistent with exponential form.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Argument check",
          "workingLatex": "\\arg(z) = \\pi/4",
          "explanation": "Consistent.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Geometric view",
          "workingLatex": "z \\text{ rotated by } \\pi/4 \\text{ gives } 4e^{i\\pi/2}",
          "explanation": "Multiplication interpretation.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Answer",
          "workingLatex": "z = 4e^{i\\pi/4} = 2\\sqrt{2} + 2\\sqrt{2}i",
          "explanation": "Both forms.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z = 4e^{i\\pi/4} = 2\\sqrt{2} + 2\\sqrt{2}i$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Exponential form",
    "subtopicId": "fm.y2.pure.complex-exponential",
    "questionDiagram": null,
    "id": "fm.y2.pure.complex-exponential.q070",
    "tags": [
      "proof",
      "conjugate"
    ],
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "questionText": "Let $z = re^{i\\theta}$. Show that $z + \\bar{z} = 2r\\cos\\theta$ and $z - \\bar{z} = 2ri\\sin\\theta$. Hence express $\\dfrac{z}{\\bar{z}}$ in exponential form when $z \\neq 0$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Conjugate in exponential form",
          "workingLatex": "\\bar{z} = re^{-i\\theta}",
          "explanation": "Conjugate negates the argument.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Sum",
          "workingLatex": "z + \\bar{z} = re^{i\\theta} + re^{-i\\theta}",
          "explanation": "Add the two forms.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Factor",
          "workingLatex": "= r(e^{i\\theta} + e^{-i\\theta})",
          "explanation": "Factor out $r$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Euler identity",
          "workingLatex": "e^{i\\theta} + e^{-i\\theta} = 2\\cos\\theta",
          "explanation": "From $\\cos\\theta = \\tfrac{1}{2}(e^{i\\theta}+e^{-i\\theta})$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Result (sum)",
          "workingLatex": "z + \\bar{z} = 2r\\cos\\theta",
          "explanation": "First identity proved.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Difference",
          "workingLatex": "z - \\bar{z} = re^{i\\theta} - re^{-i\\theta}",
          "explanation": "Subtract conjugates.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Factor",
          "workingLatex": "= r(e^{i\\theta} - e^{-i\\theta})",
          "explanation": "Factor out $r$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Euler identity",
          "workingLatex": "e^{i\\theta} - e^{-i\\theta} = 2i\\sin\\theta",
          "explanation": "Standard identity.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Result (difference)",
          "workingLatex": "z - \\bar{z} = 2ri\\sin\\theta",
          "explanation": "Second identity proved.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Quotient",
          "workingLatex": "\\frac{z}{\\bar{z}} = \\frac{re^{i\\theta}}{re^{-i\\theta}}",
          "explanation": "Divide when $z \\neq 0$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Simplify",
          "workingLatex": "= e^{i\\theta - (-i\\theta)} = e^{i2\\theta}",
          "explanation": "Moduli cancel; arguments subtract.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Geometric meaning",
          "workingLatex": "\\text{Rotation by } 2\\theta",
          "explanation": "$z/\\bar{z}$ has unit modulus and argument $2\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Answer",
          "workingLatex": "z+\\bar{z}=2r\\cos\\theta;\\; z-\\bar{z}=2ri\\sin\\theta;\\; \\frac{z}{\\bar{z}}=e^{i2\\theta}",
          "explanation": "All results.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z+\\bar{z}=2r\\cos\\theta$, $z-\\bar{z}=2ri\\sin\\theta$, and $\\dfrac{z}{\\bar{z}}=e^{i2\\theta}$."
    }
  }
];
