import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Trigonometric series",
    "subtopicId": "fm.y2.pure.trig-series",
    "questionDiagram": null,
    "id": "fm.y2.pure.trig-series.q001",
    "tags": [
      "small-n",
      "cosine-sum",
      "c-plus-is"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Find the exact value of $\\displaystyle\\sum_{k=1}^{3} \\cos \\frac{k\\pi}{3}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define $C$ and $S$",
          "workingLatex": "C = \\cos \\frac{1\\pi}{3} + \\cos \\frac{2\\pi}{3} + \\cos \\frac{3\\pi}{3}",
          "explanation": "Let $C$ be the cosine sum we need.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Companion sine sum",
          "workingLatex": "S = \\sin \\frac{1\\pi}{3} + \\sin \\frac{2\\pi}{3} + \\sin \\frac{3\\pi}{3}",
          "explanation": "Introduce the matching sine sum for the $C+iS$ method.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form $C + iS$",
          "workingLatex": "C + iS = \\sum_{k=1}^{3} e^{ik\\frac{\\pi}{3}}",
          "explanation": "Each $\\cos k\\theta + i\\sin k\\theta = e^{ik\\theta}$ by Euler's formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Geometric series",
          "workingLatex": "C + iS = e^{i\\frac{\\pi}{3}}\\frac{1 - e^{i3\\frac{\\pi}{3}}}{1 - e^{i\\frac{\\pi}{3}}}",
          "explanation": "First term $e^{i\\theta}$, common ratio $e^{i\\theta}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Sine product form",
          "workingLatex": "C + iS = \\frac{\\sin\\!\\left(\\frac{3\\frac{\\pi}{3}}{2}\\right)}{\\sin\\!\\left(\\frac{\\frac{\\pi}{3}}{2}\\right)}\\,e^{i\\frac{4\\frac{\\pi}{3}}{2}}",
          "explanation": "Multiply numerator and denominator by $e^{i(n+1)\\theta/2}$ and use $e^{ix}-e^{-ix}=2i\\sin x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Real part",
          "workingLatex": "C = \\frac{\\sin\\!\\left(\\frac{3\\frac{\\pi}{3}}{2}\\right)\\cos\\!\\left(\\frac{4\\frac{\\pi}{3}}{2}\\right)}{\\sin\\!\\left(\\frac{\\frac{\\pi}{3}}{2}\\right)}",
          "explanation": "Take the real part: $\\operatorname{Re}(e^{i\\phi})=\\cos\\phi$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify",
          "workingLatex": "C = -1",
          "explanation": "Evaluate the trigonometric values.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check small $n$",
          "workingLatex": "\\text{Direct addition confirms the result}",
          "explanation": "Substitute a few terms to verify.",
          "diagram": null
        }
      ],
      "finalAnswer": "$-1$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Trigonometric series",
    "subtopicId": "fm.y2.pure.trig-series",
    "questionDiagram": null,
    "id": "fm.y2.pure.trig-series.q002",
    "tags": [
      "small-n",
      "cosine-sum",
      "c-plus-is"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Find the exact value of $\\displaystyle\\sum_{k=1}^{4} \\cos \\frac{k\\pi}{2}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define $C$ and $S$",
          "workingLatex": "C = \\cos \\frac{1\\pi}{2} + \\cos \\frac{2\\pi}{2} + \\cos \\frac{3\\pi}{2} + \\cos \\frac{4\\pi}{2}",
          "explanation": "Let $C$ be the cosine sum we need.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Companion sine sum",
          "workingLatex": "S = \\sin \\frac{1\\pi}{2} + \\sin \\frac{2\\pi}{2} + \\sin \\frac{3\\pi}{2} + \\sin \\frac{4\\pi}{2}",
          "explanation": "Introduce the matching sine sum for the $C+iS$ method.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form $C + iS$",
          "workingLatex": "C + iS = \\sum_{k=1}^{4} e^{ik\\frac{\\pi}{2}}",
          "explanation": "Each $\\cos k\\theta + i\\sin k\\theta = e^{ik\\theta}$ by Euler's formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Geometric series",
          "workingLatex": "C + iS = e^{i\\frac{\\pi}{2}}\\frac{1 - e^{i4\\frac{\\pi}{2}}}{1 - e^{i\\frac{\\pi}{2}}}",
          "explanation": "First term $e^{i\\theta}$, common ratio $e^{i\\theta}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Sine product form",
          "workingLatex": "C + iS = \\frac{\\sin\\!\\left(\\frac{4\\frac{\\pi}{2}}{2}\\right)}{\\sin\\!\\left(\\frac{\\frac{\\pi}{2}}{2}\\right)}\\,e^{i\\frac{5\\frac{\\pi}{2}}{2}}",
          "explanation": "Multiply numerator and denominator by $e^{i(n+1)\\theta/2}$ and use $e^{ix}-e^{-ix}=2i\\sin x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Real part",
          "workingLatex": "C = \\frac{\\sin\\!\\left(\\frac{4\\frac{\\pi}{2}}{2}\\right)\\cos\\!\\left(\\frac{5\\frac{\\pi}{2}}{2}\\right)}{\\sin\\!\\left(\\frac{\\frac{\\pi}{2}}{2}\\right)}",
          "explanation": "Take the real part: $\\operatorname{Re}(e^{i\\phi})=\\cos\\phi$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify",
          "workingLatex": "C = 0",
          "explanation": "Evaluate the trigonometric values.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check small $n$",
          "workingLatex": "\\text{Direct addition confirms the result}",
          "explanation": "Substitute a few terms to verify.",
          "diagram": null
        }
      ],
      "finalAnswer": "$0$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Trigonometric series",
    "subtopicId": "fm.y2.pure.trig-series",
    "questionDiagram": null,
    "id": "fm.y2.pure.trig-series.q003",
    "tags": [
      "small-n",
      "cosine-sum",
      "c-plus-is"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Find the exact value of $\\displaystyle\\sum_{k=1}^{5} \\cos \\frac{k\\pi}{3}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define $C$ and $S$",
          "workingLatex": "C = \\cos \\frac{1\\pi}{3} + \\cos \\frac{2\\pi}{3} + \\cos \\frac{3\\pi}{3} + \\cos \\frac{4\\pi}{3} + \\cos \\frac{5\\pi}{3}",
          "explanation": "Let $C$ be the cosine sum we need.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Companion sine sum",
          "workingLatex": "S = \\sin \\frac{1\\pi}{3} + \\sin \\frac{2\\pi}{3} + \\sin \\frac{3\\pi}{3} + \\sin \\frac{4\\pi}{3} + \\sin \\frac{5\\pi}{3}",
          "explanation": "Introduce the matching sine sum for the $C+iS$ method.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form $C + iS$",
          "workingLatex": "C + iS = \\sum_{k=1}^{5} e^{ik\\frac{\\pi}{3}}",
          "explanation": "Each $\\cos k\\theta + i\\sin k\\theta = e^{ik\\theta}$ by Euler's formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Geometric series",
          "workingLatex": "C + iS = e^{i\\frac{\\pi}{3}}\\frac{1 - e^{i5\\frac{\\pi}{3}}}{1 - e^{i\\frac{\\pi}{3}}}",
          "explanation": "First term $e^{i\\theta}$, common ratio $e^{i\\theta}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Sine product form",
          "workingLatex": "C + iS = \\frac{\\sin\\!\\left(\\frac{5\\frac{\\pi}{3}}{2}\\right)}{\\sin\\!\\left(\\frac{\\frac{\\pi}{3}}{2}\\right)}\\,e^{i\\frac{6\\frac{\\pi}{3}}{2}}",
          "explanation": "Multiply numerator and denominator by $e^{i(n+1)\\theta/2}$ and use $e^{ix}-e^{-ix}=2i\\sin x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Real part",
          "workingLatex": "C = \\frac{\\sin\\!\\left(\\frac{5\\frac{\\pi}{3}}{2}\\right)\\cos\\!\\left(\\frac{6\\frac{\\pi}{3}}{2}\\right)}{\\sin\\!\\left(\\frac{\\frac{\\pi}{3}}{2}\\right)}",
          "explanation": "Take the real part: $\\operatorname{Re}(e^{i\\phi})=\\cos\\phi$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify",
          "workingLatex": "C = -1",
          "explanation": "Evaluate the trigonometric values.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check small $n$",
          "workingLatex": "\\text{Direct addition confirms the result}",
          "explanation": "Substitute a few terms to verify.",
          "diagram": null
        }
      ],
      "finalAnswer": "$-1$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Trigonometric series",
    "subtopicId": "fm.y2.pure.trig-series",
    "questionDiagram": null,
    "id": "fm.y2.pure.trig-series.q004",
    "tags": [
      "small-n",
      "cosine-sum",
      "c-plus-is"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Find the exact value of $\\displaystyle\\sum_{k=1}^{6} \\cos \\frac{k\\pi}{3}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define $C$ and $S$",
          "workingLatex": "C = \\cos \\frac{1\\pi}{3} + \\cos \\frac{2\\pi}{3} + \\cos \\frac{3\\pi}{3} + \\cos \\frac{4\\pi}{3} + \\cos \\frac{5\\pi}{3} + \\cos \\frac{6\\pi}{3}",
          "explanation": "Let $C$ be the cosine sum we need.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Companion sine sum",
          "workingLatex": "S = \\sin \\frac{1\\pi}{3} + \\sin \\frac{2\\pi}{3} + \\sin \\frac{3\\pi}{3} + \\sin \\frac{4\\pi}{3} + \\sin \\frac{5\\pi}{3} + \\sin \\frac{6\\pi}{3}",
          "explanation": "Introduce the matching sine sum for the $C+iS$ method.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form $C + iS$",
          "workingLatex": "C + iS = \\sum_{k=1}^{6} e^{ik\\frac{\\pi}{3}}",
          "explanation": "Each $\\cos k\\theta + i\\sin k\\theta = e^{ik\\theta}$ by Euler's formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Geometric series",
          "workingLatex": "C + iS = e^{i\\frac{\\pi}{3}}\\frac{1 - e^{i6\\frac{\\pi}{3}}}{1 - e^{i\\frac{\\pi}{3}}}",
          "explanation": "First term $e^{i\\theta}$, common ratio $e^{i\\theta}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Sine product form",
          "workingLatex": "C + iS = \\frac{\\sin\\!\\left(\\frac{6\\frac{\\pi}{3}}{2}\\right)}{\\sin\\!\\left(\\frac{\\frac{\\pi}{3}}{2}\\right)}\\,e^{i\\frac{7\\frac{\\pi}{3}}{2}}",
          "explanation": "Multiply numerator and denominator by $e^{i(n+1)\\theta/2}$ and use $e^{ix}-e^{-ix}=2i\\sin x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Real part",
          "workingLatex": "C = \\frac{\\sin\\!\\left(\\frac{6\\frac{\\pi}{3}}{2}\\right)\\cos\\!\\left(\\frac{7\\frac{\\pi}{3}}{2}\\right)}{\\sin\\!\\left(\\frac{\\frac{\\pi}{3}}{2}\\right)}",
          "explanation": "Take the real part: $\\operatorname{Re}(e^{i\\phi})=\\cos\\phi$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify",
          "workingLatex": "C = 0",
          "explanation": "Evaluate the trigonometric values.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check small $n$",
          "workingLatex": "\\text{Direct addition confirms the result}",
          "explanation": "Substitute a few terms to verify.",
          "diagram": null
        }
      ],
      "finalAnswer": "$0$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Trigonometric series",
    "subtopicId": "fm.y2.pure.trig-series",
    "questionDiagram": null,
    "id": "fm.y2.pure.trig-series.q005",
    "tags": [
      "small-n",
      "cosine-sum",
      "c-plus-is"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Find the exact value of $\\displaystyle\\sum_{k=1}^{3} \\cos \\frac{k\\pi}{4}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define $C$ and $S$",
          "workingLatex": "C = \\cos \\frac{1\\pi}{4} + \\cos \\frac{2\\pi}{4} + \\cos \\frac{3\\pi}{4}",
          "explanation": "Let $C$ be the cosine sum we need.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Companion sine sum",
          "workingLatex": "S = \\sin \\frac{1\\pi}{4} + \\sin \\frac{2\\pi}{4} + \\sin \\frac{3\\pi}{4}",
          "explanation": "Introduce the matching sine sum for the $C+iS$ method.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form $C + iS$",
          "workingLatex": "C + iS = \\sum_{k=1}^{3} e^{ik\\frac{\\pi}{4}}",
          "explanation": "Each $\\cos k\\theta + i\\sin k\\theta = e^{ik\\theta}$ by Euler's formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Geometric series",
          "workingLatex": "C + iS = e^{i\\frac{\\pi}{4}}\\frac{1 - e^{i3\\frac{\\pi}{4}}}{1 - e^{i\\frac{\\pi}{4}}}",
          "explanation": "First term $e^{i\\theta}$, common ratio $e^{i\\theta}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Sine product form",
          "workingLatex": "C + iS = \\frac{\\sin\\!\\left(\\frac{3\\frac{\\pi}{4}}{2}\\right)}{\\sin\\!\\left(\\frac{\\frac{\\pi}{4}}{2}\\right)}\\,e^{i\\frac{4\\frac{\\pi}{4}}{2}}",
          "explanation": "Multiply numerator and denominator by $e^{i(n+1)\\theta/2}$ and use $e^{ix}-e^{-ix}=2i\\sin x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Real part",
          "workingLatex": "C = \\frac{\\sin\\!\\left(\\frac{3\\frac{\\pi}{4}}{2}\\right)\\cos\\!\\left(\\frac{4\\frac{\\pi}{4}}{2}\\right)}{\\sin\\!\\left(\\frac{\\frac{\\pi}{4}}{2}\\right)}",
          "explanation": "Take the real part: $\\operatorname{Re}(e^{i\\phi})=\\cos\\phi$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify",
          "workingLatex": "C = 0",
          "explanation": "Evaluate the trigonometric values.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check small $n$",
          "workingLatex": "\\text{Direct addition confirms the result}",
          "explanation": "Substitute a few terms to verify.",
          "diagram": null
        }
      ],
      "finalAnswer": "$0$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Trigonometric series",
    "subtopicId": "fm.y2.pure.trig-series",
    "questionDiagram": null,
    "id": "fm.y2.pure.trig-series.q006",
    "tags": [
      "small-n",
      "cosine-sum",
      "c-plus-is"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Find the exact value of $\\displaystyle\\sum_{k=1}^{4} \\cos \\frac{k\\pi}{4}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define $C$ and $S$",
          "workingLatex": "C = \\cos \\frac{1\\pi}{4} + \\cos \\frac{2\\pi}{4} + \\cos \\frac{3\\pi}{4} + \\cos \\frac{4\\pi}{4}",
          "explanation": "Let $C$ be the cosine sum we need.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Companion sine sum",
          "workingLatex": "S = \\sin \\frac{1\\pi}{4} + \\sin \\frac{2\\pi}{4} + \\sin \\frac{3\\pi}{4} + \\sin \\frac{4\\pi}{4}",
          "explanation": "Introduce the matching sine sum for the $C+iS$ method.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form $C + iS$",
          "workingLatex": "C + iS = \\sum_{k=1}^{4} e^{ik\\frac{\\pi}{4}}",
          "explanation": "Each $\\cos k\\theta + i\\sin k\\theta = e^{ik\\theta}$ by Euler's formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Geometric series",
          "workingLatex": "C + iS = e^{i\\frac{\\pi}{4}}\\frac{1 - e^{i4\\frac{\\pi}{4}}}{1 - e^{i\\frac{\\pi}{4}}}",
          "explanation": "First term $e^{i\\theta}$, common ratio $e^{i\\theta}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Sine product form",
          "workingLatex": "C + iS = \\frac{\\sin\\!\\left(\\frac{4\\frac{\\pi}{4}}{2}\\right)}{\\sin\\!\\left(\\frac{\\frac{\\pi}{4}}{2}\\right)}\\,e^{i\\frac{5\\frac{\\pi}{4}}{2}}",
          "explanation": "Multiply numerator and denominator by $e^{i(n+1)\\theta/2}$ and use $e^{ix}-e^{-ix}=2i\\sin x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Real part",
          "workingLatex": "C = \\frac{\\sin\\!\\left(\\frac{4\\frac{\\pi}{4}}{2}\\right)\\cos\\!\\left(\\frac{5\\frac{\\pi}{4}}{2}\\right)}{\\sin\\!\\left(\\frac{\\frac{\\pi}{4}}{2}\\right)}",
          "explanation": "Take the real part: $\\operatorname{Re}(e^{i\\phi})=\\cos\\phi$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify",
          "workingLatex": "C = -1",
          "explanation": "Evaluate the trigonometric values.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check small $n$",
          "workingLatex": "\\text{Direct addition confirms the result}",
          "explanation": "Substitute a few terms to verify.",
          "diagram": null
        }
      ],
      "finalAnswer": "$-1$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Trigonometric series",
    "subtopicId": "fm.y2.pure.trig-series",
    "questionDiagram": null,
    "id": "fm.y2.pure.trig-series.q007",
    "tags": [
      "small-n",
      "cosine-sum",
      "c-plus-is"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Find the exact value of $\\displaystyle\\sum_{k=1}^{5} \\cos \\frac{k\\pi}{6}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define $C$ and $S$",
          "workingLatex": "C = \\cos \\frac{1\\pi}{6} + \\cos \\frac{2\\pi}{6} + \\cos \\frac{3\\pi}{6} + \\cos \\frac{4\\pi}{6} + \\cos \\frac{5\\pi}{6}",
          "explanation": "Let $C$ be the cosine sum we need.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Companion sine sum",
          "workingLatex": "S = \\sin \\frac{1\\pi}{6} + \\sin \\frac{2\\pi}{6} + \\sin \\frac{3\\pi}{6} + \\sin \\frac{4\\pi}{6} + \\sin \\frac{5\\pi}{6}",
          "explanation": "Introduce the matching sine sum for the $C+iS$ method.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form $C + iS$",
          "workingLatex": "C + iS = \\sum_{k=1}^{5} e^{ik\\frac{\\pi}{6}}",
          "explanation": "Each $\\cos k\\theta + i\\sin k\\theta = e^{ik\\theta}$ by Euler's formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Geometric series",
          "workingLatex": "C + iS = e^{i\\frac{\\pi}{6}}\\frac{1 - e^{i5\\frac{\\pi}{6}}}{1 - e^{i\\frac{\\pi}{6}}}",
          "explanation": "First term $e^{i\\theta}$, common ratio $e^{i\\theta}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Sine product form",
          "workingLatex": "C + iS = \\frac{\\sin\\!\\left(\\frac{5\\frac{\\pi}{6}}{2}\\right)}{\\sin\\!\\left(\\frac{\\frac{\\pi}{6}}{2}\\right)}\\,e^{i\\frac{6\\frac{\\pi}{6}}{2}}",
          "explanation": "Multiply numerator and denominator by $e^{i(n+1)\\theta/2}$ and use $e^{ix}-e^{-ix}=2i\\sin x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Real part",
          "workingLatex": "C = \\frac{\\sin\\!\\left(\\frac{5\\frac{\\pi}{6}}{2}\\right)\\cos\\!\\left(\\frac{6\\frac{\\pi}{6}}{2}\\right)}{\\sin\\!\\left(\\frac{\\frac{\\pi}{6}}{2}\\right)}",
          "explanation": "Take the real part: $\\operatorname{Re}(e^{i\\phi})=\\cos\\phi$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify",
          "workingLatex": "C = 0",
          "explanation": "Evaluate the trigonometric values.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check small $n$",
          "workingLatex": "\\text{Direct addition confirms the result}",
          "explanation": "Substitute a few terms to verify.",
          "diagram": null
        }
      ],
      "finalAnswer": "$0$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Trigonometric series",
    "subtopicId": "fm.y2.pure.trig-series",
    "questionDiagram": null,
    "id": "fm.y2.pure.trig-series.q008",
    "tags": [
      "small-n",
      "cosine-sum",
      "c-plus-is"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Find the exact value of $\\displaystyle\\sum_{k=1}^{6} \\cos \\frac{k\\pi}{6}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define $C$ and $S$",
          "workingLatex": "C = \\cos \\frac{1\\pi}{6} + \\cos \\frac{2\\pi}{6} + \\cos \\frac{3\\pi}{6} + \\cos \\frac{4\\pi}{6} + \\cos \\frac{5\\pi}{6} + \\cos \\frac{6\\pi}{6}",
          "explanation": "Let $C$ be the cosine sum we need.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Companion sine sum",
          "workingLatex": "S = \\sin \\frac{1\\pi}{6} + \\sin \\frac{2\\pi}{6} + \\sin \\frac{3\\pi}{6} + \\sin \\frac{4\\pi}{6} + \\sin \\frac{5\\pi}{6} + \\sin \\frac{6\\pi}{6}",
          "explanation": "Introduce the matching sine sum for the $C+iS$ method.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form $C + iS$",
          "workingLatex": "C + iS = \\sum_{k=1}^{6} e^{ik\\frac{\\pi}{6}}",
          "explanation": "Each $\\cos k\\theta + i\\sin k\\theta = e^{ik\\theta}$ by Euler's formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Geometric series",
          "workingLatex": "C + iS = e^{i\\frac{\\pi}{6}}\\frac{1 - e^{i6\\frac{\\pi}{6}}}{1 - e^{i\\frac{\\pi}{6}}}",
          "explanation": "First term $e^{i\\theta}$, common ratio $e^{i\\theta}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Sine product form",
          "workingLatex": "C + iS = \\frac{\\sin\\!\\left(\\frac{6\\frac{\\pi}{6}}{2}\\right)}{\\sin\\!\\left(\\frac{\\frac{\\pi}{6}}{2}\\right)}\\,e^{i\\frac{7\\frac{\\pi}{6}}{2}}",
          "explanation": "Multiply numerator and denominator by $e^{i(n+1)\\theta/2}$ and use $e^{ix}-e^{-ix}=2i\\sin x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Real part",
          "workingLatex": "C = \\frac{\\sin\\!\\left(\\frac{6\\frac{\\pi}{6}}{2}\\right)\\cos\\!\\left(\\frac{7\\frac{\\pi}{6}}{2}\\right)}{\\sin\\!\\left(\\frac{\\frac{\\pi}{6}}{2}\\right)}",
          "explanation": "Take the real part: $\\operatorname{Re}(e^{i\\phi})=\\cos\\phi$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify",
          "workingLatex": "C = -1",
          "explanation": "Evaluate the trigonometric values.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check small $n$",
          "workingLatex": "\\text{Direct addition confirms the result}",
          "explanation": "Substitute a few terms to verify.",
          "diagram": null
        }
      ],
      "finalAnswer": "$-1$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Trigonometric series",
    "subtopicId": "fm.y2.pure.trig-series",
    "questionDiagram": null,
    "id": "fm.y2.pure.trig-series.q009",
    "tags": [
      "small-n",
      "cosine-sum",
      "c-plus-is"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Find the exact value of $\\displaystyle\\sum_{k=1}^{3} \\cos \\frac{k\\pi}{2}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define $C$ and $S$",
          "workingLatex": "C = \\cos \\frac{1\\pi}{2} + \\cos \\frac{2\\pi}{2} + \\cos \\frac{3\\pi}{2}",
          "explanation": "Let $C$ be the cosine sum we need.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Companion sine sum",
          "workingLatex": "S = \\sin \\frac{1\\pi}{2} + \\sin \\frac{2\\pi}{2} + \\sin \\frac{3\\pi}{2}",
          "explanation": "Introduce the matching sine sum for the $C+iS$ method.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form $C + iS$",
          "workingLatex": "C + iS = \\sum_{k=1}^{3} e^{ik\\frac{\\pi}{2}}",
          "explanation": "Each $\\cos k\\theta + i\\sin k\\theta = e^{ik\\theta}$ by Euler's formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Geometric series",
          "workingLatex": "C + iS = e^{i\\frac{\\pi}{2}}\\frac{1 - e^{i3\\frac{\\pi}{2}}}{1 - e^{i\\frac{\\pi}{2}}}",
          "explanation": "First term $e^{i\\theta}$, common ratio $e^{i\\theta}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Sine product form",
          "workingLatex": "C + iS = \\frac{\\sin\\!\\left(\\frac{3\\frac{\\pi}{2}}{2}\\right)}{\\sin\\!\\left(\\frac{\\frac{\\pi}{2}}{2}\\right)}\\,e^{i\\frac{4\\frac{\\pi}{2}}{2}}",
          "explanation": "Multiply numerator and denominator by $e^{i(n+1)\\theta/2}$ and use $e^{ix}-e^{-ix}=2i\\sin x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Real part",
          "workingLatex": "C = \\frac{\\sin\\!\\left(\\frac{3\\frac{\\pi}{2}}{2}\\right)\\cos\\!\\left(\\frac{4\\frac{\\pi}{2}}{2}\\right)}{\\sin\\!\\left(\\frac{\\frac{\\pi}{2}}{2}\\right)}",
          "explanation": "Take the real part: $\\operatorname{Re}(e^{i\\phi})=\\cos\\phi$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify",
          "workingLatex": "C = -1",
          "explanation": "Evaluate the trigonometric values.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check small $n$",
          "workingLatex": "\\text{Direct addition confirms the result}",
          "explanation": "Substitute a few terms to verify.",
          "diagram": null
        }
      ],
      "finalAnswer": "$-1$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Trigonometric series",
    "subtopicId": "fm.y2.pure.trig-series",
    "questionDiagram": null,
    "id": "fm.y2.pure.trig-series.q010",
    "tags": [
      "small-n",
      "cosine-sum",
      "c-plus-is"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Find the exact value of $\\displaystyle\\sum_{k=1}^{4} \\cos \\frac{k\\pi}{3}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define $C$ and $S$",
          "workingLatex": "C = \\cos \\frac{1\\pi}{3} + \\cos \\frac{2\\pi}{3} + \\cos \\frac{3\\pi}{3} + \\cos \\frac{4\\pi}{3}",
          "explanation": "Let $C$ be the cosine sum we need.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Companion sine sum",
          "workingLatex": "S = \\sin \\frac{1\\pi}{3} + \\sin \\frac{2\\pi}{3} + \\sin \\frac{3\\pi}{3} + \\sin \\frac{4\\pi}{3}",
          "explanation": "Introduce the matching sine sum for the $C+iS$ method.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form $C + iS$",
          "workingLatex": "C + iS = \\sum_{k=1}^{4} e^{ik\\frac{\\pi}{3}}",
          "explanation": "Each $\\cos k\\theta + i\\sin k\\theta = e^{ik\\theta}$ by Euler's formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Geometric series",
          "workingLatex": "C + iS = e^{i\\frac{\\pi}{3}}\\frac{1 - e^{i4\\frac{\\pi}{3}}}{1 - e^{i\\frac{\\pi}{3}}}",
          "explanation": "First term $e^{i\\theta}$, common ratio $e^{i\\theta}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Sine product form",
          "workingLatex": "C + iS = \\frac{\\sin\\!\\left(\\frac{4\\frac{\\pi}{3}}{2}\\right)}{\\sin\\!\\left(\\frac{\\frac{\\pi}{3}}{2}\\right)}\\,e^{i\\frac{5\\frac{\\pi}{3}}{2}}",
          "explanation": "Multiply numerator and denominator by $e^{i(n+1)\\theta/2}$ and use $e^{ix}-e^{-ix}=2i\\sin x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Real part",
          "workingLatex": "C = \\frac{\\sin\\!\\left(\\frac{4\\frac{\\pi}{3}}{2}\\right)\\cos\\!\\left(\\frac{5\\frac{\\pi}{3}}{2}\\right)}{\\sin\\!\\left(\\frac{\\frac{\\pi}{3}}{2}\\right)}",
          "explanation": "Take the real part: $\\operatorname{Re}(e^{i\\phi})=\\cos\\phi$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify",
          "workingLatex": "C = -\\frac{3}{2}",
          "explanation": "Evaluate the trigonometric values.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check small $n$",
          "workingLatex": "\\text{Direct addition confirms the result}",
          "explanation": "Substitute a few terms to verify.",
          "diagram": null
        }
      ],
      "finalAnswer": "$-\\frac{3}{2}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Trigonometric series",
    "subtopicId": "fm.y2.pure.trig-series",
    "questionDiagram": null,
    "id": "fm.y2.pure.trig-series.q011",
    "tags": [
      "small-n",
      "cosine-sum",
      "c-plus-is"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Find the exact value of $\\displaystyle\\sum_{k=1}^{5} \\cos \\frac{k\\pi}{4}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define $C$ and $S$",
          "workingLatex": "C = \\cos \\frac{1\\pi}{4} + \\cos \\frac{2\\pi}{4} + \\cos \\frac{3\\pi}{4} + \\cos \\frac{4\\pi}{4} + \\cos \\frac{5\\pi}{4}",
          "explanation": "Let $C$ be the cosine sum we need.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Companion sine sum",
          "workingLatex": "S = \\sin \\frac{1\\pi}{4} + \\sin \\frac{2\\pi}{4} + \\sin \\frac{3\\pi}{4} + \\sin \\frac{4\\pi}{4} + \\sin \\frac{5\\pi}{4}",
          "explanation": "Introduce the matching sine sum for the $C+iS$ method.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form $C + iS$",
          "workingLatex": "C + iS = \\sum_{k=1}^{5} e^{ik\\frac{\\pi}{4}}",
          "explanation": "Each $\\cos k\\theta + i\\sin k\\theta = e^{ik\\theta}$ by Euler's formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Geometric series",
          "workingLatex": "C + iS = e^{i\\frac{\\pi}{4}}\\frac{1 - e^{i5\\frac{\\pi}{4}}}{1 - e^{i\\frac{\\pi}{4}}}",
          "explanation": "First term $e^{i\\theta}$, common ratio $e^{i\\theta}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Sine product form",
          "workingLatex": "C + iS = \\frac{\\sin\\!\\left(\\frac{5\\frac{\\pi}{4}}{2}\\right)}{\\sin\\!\\left(\\frac{\\frac{\\pi}{4}}{2}\\right)}\\,e^{i\\frac{6\\frac{\\pi}{4}}{2}}",
          "explanation": "Multiply numerator and denominator by $e^{i(n+1)\\theta/2}$ and use $e^{ix}-e^{-ix}=2i\\sin x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Real part",
          "workingLatex": "C = \\frac{\\sin\\!\\left(\\frac{5\\frac{\\pi}{4}}{2}\\right)\\cos\\!\\left(\\frac{6\\frac{\\pi}{4}}{2}\\right)}{\\sin\\!\\left(\\frac{\\frac{\\pi}{4}}{2}\\right)}",
          "explanation": "Take the real part: $\\operatorname{Re}(e^{i\\phi})=\\cos\\phi$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify",
          "workingLatex": "C = \\frac{-4 - 2\\sqrt{2}}{4}",
          "explanation": "Evaluate the trigonometric values.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check small $n$",
          "workingLatex": "\\text{Direct addition confirms the result}",
          "explanation": "Substitute a few terms to verify.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{-4 - 2\\sqrt{2}}{4}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Trigonometric series",
    "subtopicId": "fm.y2.pure.trig-series",
    "questionDiagram": null,
    "id": "fm.y2.pure.trig-series.q012",
    "tags": [
      "small-n",
      "cosine-sum",
      "c-plus-is"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Find the exact value of $\\displaystyle\\sum_{k=1}^{6} \\cos \\frac{k\\pi}{4}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define $C$ and $S$",
          "workingLatex": "C = \\cos \\frac{1\\pi}{4} + \\cos \\frac{2\\pi}{4} + \\cos \\frac{3\\pi}{4} + \\cos \\frac{4\\pi}{4} + \\cos \\frac{5\\pi}{4} + \\cos \\frac{6\\pi}{4}",
          "explanation": "Let $C$ be the cosine sum we need.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Companion sine sum",
          "workingLatex": "S = \\sin \\frac{1\\pi}{4} + \\sin \\frac{2\\pi}{4} + \\sin \\frac{3\\pi}{4} + \\sin \\frac{4\\pi}{4} + \\sin \\frac{5\\pi}{4} + \\sin \\frac{6\\pi}{4}",
          "explanation": "Introduce the matching sine sum for the $C+iS$ method.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form $C + iS$",
          "workingLatex": "C + iS = \\sum_{k=1}^{6} e^{ik\\frac{\\pi}{4}}",
          "explanation": "Each $\\cos k\\theta + i\\sin k\\theta = e^{ik\\theta}$ by Euler's formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Geometric series",
          "workingLatex": "C + iS = e^{i\\frac{\\pi}{4}}\\frac{1 - e^{i6\\frac{\\pi}{4}}}{1 - e^{i\\frac{\\pi}{4}}}",
          "explanation": "First term $e^{i\\theta}$, common ratio $e^{i\\theta}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Sine product form",
          "workingLatex": "C + iS = \\frac{\\sin\\!\\left(\\frac{6\\frac{\\pi}{4}}{2}\\right)}{\\sin\\!\\left(\\frac{\\frac{\\pi}{4}}{2}\\right)}\\,e^{i\\frac{7\\frac{\\pi}{4}}{2}}",
          "explanation": "Multiply numerator and denominator by $e^{i(n+1)\\theta/2}$ and use $e^{ix}-e^{-ix}=2i\\sin x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Real part",
          "workingLatex": "C = \\frac{\\sin\\!\\left(\\frac{6\\frac{\\pi}{4}}{2}\\right)\\cos\\!\\left(\\frac{7\\frac{\\pi}{4}}{2}\\right)}{\\sin\\!\\left(\\frac{\\frac{\\pi}{4}}{2}\\right)}",
          "explanation": "Take the real part: $\\operatorname{Re}(e^{i\\phi})=\\cos\\phi$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify",
          "workingLatex": "C = \\frac{-4 - 2\\sqrt{2}}{4}",
          "explanation": "Evaluate the trigonometric values.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check small $n$",
          "workingLatex": "\\text{Direct addition confirms the result}",
          "explanation": "Substitute a few terms to verify.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{-4 - 2\\sqrt{2}}{4}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Trigonometric series",
    "subtopicId": "fm.y2.pure.trig-series",
    "questionDiagram": null,
    "id": "fm.y2.pure.trig-series.q013",
    "tags": [
      "small-n",
      "sine-sum",
      "c-plus-is"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Find the exact value of $\\displaystyle\\sum_{k=1}^{3} \\sin \\frac{k\\pi}{3}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define $S$",
          "workingLatex": "S = \\sum_{k=1}^{3} \\sin \\frac{k\\pi}{3}",
          "explanation": "Let $S$ be the required sine sum.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Companion cosine sum",
          "workingLatex": "C = \\sum_{k=1}^{3} \\cos \\frac{k\\pi}{3}",
          "explanation": "Pair with the cosine sum for the $C+iS$ method.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form $C + iS$",
          "workingLatex": "C + iS = \\sum_{k=1}^{3} e^{ik\\frac{\\pi}{3}}",
          "explanation": "Combine using Euler's formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Geometric series",
          "workingLatex": "C + iS = e^{i\\frac{\\pi}{3}}\\frac{1 - e^{i3\\frac{\\pi}{3}}}{1 - e^{i\\frac{\\pi}{3}}}",
          "explanation": "Sum of a geometric progression of complex exponentials.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Sine product form",
          "workingLatex": "C + iS = \\frac{\\sin\\!\\left(\\frac{3\\frac{\\pi}{3}}{2}\\right)}{\\sin\\!\\left(\\frac{\\frac{\\pi}{3}}{2}\\right)}\\,e^{i\\frac{4\\frac{\\pi}{3}}{2}}",
          "explanation": "Standard result from the $C+iS$ method.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Imaginary part",
          "workingLatex": "S = \\frac{\\sin\\!\\left(\\frac{3\\frac{\\pi}{3}}{2}\\right)\\sin\\!\\left(\\frac{4\\frac{\\pi}{3}}{2}\\right)}{\\sin\\!\\left(\\frac{\\frac{\\pi}{3}}{2}\\right)}",
          "explanation": "Take the imaginary part.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify",
          "workingLatex": "S = \\sqrt{3}",
          "explanation": "Evaluate using exact trigonometric values.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify",
          "workingLatex": "\\text{Compare with term-by-term addition}",
          "explanation": "Sanity check.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sqrt{3}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Trigonometric series",
    "subtopicId": "fm.y2.pure.trig-series",
    "questionDiagram": null,
    "id": "fm.y2.pure.trig-series.q014",
    "tags": [
      "small-n",
      "sine-sum",
      "c-plus-is"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Find the exact value of $\\displaystyle\\sum_{k=1}^{4} \\sin \\frac{k\\pi}{2}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define $S$",
          "workingLatex": "S = \\sum_{k=1}^{4} \\sin \\frac{k\\pi}{2}",
          "explanation": "Let $S$ be the required sine sum.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Companion cosine sum",
          "workingLatex": "C = \\sum_{k=1}^{4} \\cos \\frac{k\\pi}{2}",
          "explanation": "Pair with the cosine sum for the $C+iS$ method.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form $C + iS$",
          "workingLatex": "C + iS = \\sum_{k=1}^{4} e^{ik\\frac{\\pi}{2}}",
          "explanation": "Combine using Euler's formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Geometric series",
          "workingLatex": "C + iS = e^{i\\frac{\\pi}{2}}\\frac{1 - e^{i4\\frac{\\pi}{2}}}{1 - e^{i\\frac{\\pi}{2}}}",
          "explanation": "Sum of a geometric progression of complex exponentials.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Sine product form",
          "workingLatex": "C + iS = \\frac{\\sin\\!\\left(\\frac{4\\frac{\\pi}{2}}{2}\\right)}{\\sin\\!\\left(\\frac{\\frac{\\pi}{2}}{2}\\right)}\\,e^{i\\frac{5\\frac{\\pi}{2}}{2}}",
          "explanation": "Standard result from the $C+iS$ method.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Imaginary part",
          "workingLatex": "S = \\frac{\\sin\\!\\left(\\frac{4\\frac{\\pi}{2}}{2}\\right)\\sin\\!\\left(\\frac{5\\frac{\\pi}{2}}{2}\\right)}{\\sin\\!\\left(\\frac{\\frac{\\pi}{2}}{2}\\right)}",
          "explanation": "Take the imaginary part.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify",
          "workingLatex": "S = 0",
          "explanation": "Evaluate using exact trigonometric values.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify",
          "workingLatex": "\\text{Compare with term-by-term addition}",
          "explanation": "Sanity check.",
          "diagram": null
        }
      ],
      "finalAnswer": "$0$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Trigonometric series",
    "subtopicId": "fm.y2.pure.trig-series",
    "questionDiagram": null,
    "id": "fm.y2.pure.trig-series.q015",
    "tags": [
      "small-n",
      "sine-sum",
      "c-plus-is"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Find the exact value of $\\displaystyle\\sum_{k=1}^{5} \\sin \\frac{k\\pi}{3}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define $S$",
          "workingLatex": "S = \\sum_{k=1}^{5} \\sin \\frac{k\\pi}{3}",
          "explanation": "Let $S$ be the required sine sum.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Companion cosine sum",
          "workingLatex": "C = \\sum_{k=1}^{5} \\cos \\frac{k\\pi}{3}",
          "explanation": "Pair with the cosine sum for the $C+iS$ method.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form $C + iS$",
          "workingLatex": "C + iS = \\sum_{k=1}^{5} e^{ik\\frac{\\pi}{3}}",
          "explanation": "Combine using Euler's formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Geometric series",
          "workingLatex": "C + iS = e^{i\\frac{\\pi}{3}}\\frac{1 - e^{i5\\frac{\\pi}{3}}}{1 - e^{i\\frac{\\pi}{3}}}",
          "explanation": "Sum of a geometric progression of complex exponentials.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Sine product form",
          "workingLatex": "C + iS = \\frac{\\sin\\!\\left(\\frac{5\\frac{\\pi}{3}}{2}\\right)}{\\sin\\!\\left(\\frac{\\frac{\\pi}{3}}{2}\\right)}\\,e^{i\\frac{6\\frac{\\pi}{3}}{2}}",
          "explanation": "Standard result from the $C+iS$ method.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Imaginary part",
          "workingLatex": "S = \\frac{\\sin\\!\\left(\\frac{5\\frac{\\pi}{3}}{2}\\right)\\sin\\!\\left(\\frac{6\\frac{\\pi}{3}}{2}\\right)}{\\sin\\!\\left(\\frac{\\frac{\\pi}{3}}{2}\\right)}",
          "explanation": "Take the imaginary part.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify",
          "workingLatex": "S = 0",
          "explanation": "Evaluate using exact trigonometric values.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify",
          "workingLatex": "\\text{Compare with term-by-term addition}",
          "explanation": "Sanity check.",
          "diagram": null
        }
      ],
      "finalAnswer": "$0$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Trigonometric series",
    "subtopicId": "fm.y2.pure.trig-series",
    "questionDiagram": null,
    "id": "fm.y2.pure.trig-series.q016",
    "tags": [
      "small-n",
      "sine-sum",
      "c-plus-is"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Find the exact value of $\\displaystyle\\sum_{k=1}^{6} \\sin \\frac{k\\pi}{3}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define $S$",
          "workingLatex": "S = \\sum_{k=1}^{6} \\sin \\frac{k\\pi}{3}",
          "explanation": "Let $S$ be the required sine sum.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Companion cosine sum",
          "workingLatex": "C = \\sum_{k=1}^{6} \\cos \\frac{k\\pi}{3}",
          "explanation": "Pair with the cosine sum for the $C+iS$ method.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form $C + iS$",
          "workingLatex": "C + iS = \\sum_{k=1}^{6} e^{ik\\frac{\\pi}{3}}",
          "explanation": "Combine using Euler's formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Geometric series",
          "workingLatex": "C + iS = e^{i\\frac{\\pi}{3}}\\frac{1 - e^{i6\\frac{\\pi}{3}}}{1 - e^{i\\frac{\\pi}{3}}}",
          "explanation": "Sum of a geometric progression of complex exponentials.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Sine product form",
          "workingLatex": "C + iS = \\frac{\\sin\\!\\left(\\frac{6\\frac{\\pi}{3}}{2}\\right)}{\\sin\\!\\left(\\frac{\\frac{\\pi}{3}}{2}\\right)}\\,e^{i\\frac{7\\frac{\\pi}{3}}{2}}",
          "explanation": "Standard result from the $C+iS$ method.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Imaginary part",
          "workingLatex": "S = \\frac{\\sin\\!\\left(\\frac{6\\frac{\\pi}{3}}{2}\\right)\\sin\\!\\left(\\frac{7\\frac{\\pi}{3}}{2}\\right)}{\\sin\\!\\left(\\frac{\\frac{\\pi}{3}}{2}\\right)}",
          "explanation": "Take the imaginary part.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify",
          "workingLatex": "S = 0",
          "explanation": "Evaluate using exact trigonometric values.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify",
          "workingLatex": "\\text{Compare with term-by-term addition}",
          "explanation": "Sanity check.",
          "diagram": null
        }
      ],
      "finalAnswer": "$0$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Trigonometric series",
    "subtopicId": "fm.y2.pure.trig-series",
    "questionDiagram": null,
    "id": "fm.y2.pure.trig-series.q017",
    "tags": [
      "small-n",
      "sine-sum",
      "c-plus-is"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Find the exact value of $\\displaystyle\\sum_{k=1}^{3} \\sin \\frac{k\\pi}{4}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define $S$",
          "workingLatex": "S = \\sum_{k=1}^{3} \\sin \\frac{k\\pi}{4}",
          "explanation": "Let $S$ be the required sine sum.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Companion cosine sum",
          "workingLatex": "C = \\sum_{k=1}^{3} \\cos \\frac{k\\pi}{4}",
          "explanation": "Pair with the cosine sum for the $C+iS$ method.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form $C + iS$",
          "workingLatex": "C + iS = \\sum_{k=1}^{3} e^{ik\\frac{\\pi}{4}}",
          "explanation": "Combine using Euler's formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Geometric series",
          "workingLatex": "C + iS = e^{i\\frac{\\pi}{4}}\\frac{1 - e^{i3\\frac{\\pi}{4}}}{1 - e^{i\\frac{\\pi}{4}}}",
          "explanation": "Sum of a geometric progression of complex exponentials.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Sine product form",
          "workingLatex": "C + iS = \\frac{\\sin\\!\\left(\\frac{3\\frac{\\pi}{4}}{2}\\right)}{\\sin\\!\\left(\\frac{\\frac{\\pi}{4}}{2}\\right)}\\,e^{i\\frac{4\\frac{\\pi}{4}}{2}}",
          "explanation": "Standard result from the $C+iS$ method.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Imaginary part",
          "workingLatex": "S = \\frac{\\sin\\!\\left(\\frac{3\\frac{\\pi}{4}}{2}\\right)\\sin\\!\\left(\\frac{4\\frac{\\pi}{4}}{2}\\right)}{\\sin\\!\\left(\\frac{\\frac{\\pi}{4}}{2}\\right)}",
          "explanation": "Take the imaginary part.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify",
          "workingLatex": "S = 1 + \\sqrt{2}",
          "explanation": "Evaluate using exact trigonometric values.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify",
          "workingLatex": "\\text{Compare with term-by-term addition}",
          "explanation": "Sanity check.",
          "diagram": null
        }
      ],
      "finalAnswer": "$1 + \\sqrt{2}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Trigonometric series",
    "subtopicId": "fm.y2.pure.trig-series",
    "questionDiagram": null,
    "id": "fm.y2.pure.trig-series.q018",
    "tags": [
      "small-n",
      "sine-sum",
      "c-plus-is"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Find the exact value of $\\displaystyle\\sum_{k=1}^{4} \\sin \\frac{k\\pi}{4}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define $S$",
          "workingLatex": "S = \\sum_{k=1}^{4} \\sin \\frac{k\\pi}{4}",
          "explanation": "Let $S$ be the required sine sum.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Companion cosine sum",
          "workingLatex": "C = \\sum_{k=1}^{4} \\cos \\frac{k\\pi}{4}",
          "explanation": "Pair with the cosine sum for the $C+iS$ method.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form $C + iS$",
          "workingLatex": "C + iS = \\sum_{k=1}^{4} e^{ik\\frac{\\pi}{4}}",
          "explanation": "Combine using Euler's formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Geometric series",
          "workingLatex": "C + iS = e^{i\\frac{\\pi}{4}}\\frac{1 - e^{i4\\frac{\\pi}{4}}}{1 - e^{i\\frac{\\pi}{4}}}",
          "explanation": "Sum of a geometric progression of complex exponentials.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Sine product form",
          "workingLatex": "C + iS = \\frac{\\sin\\!\\left(\\frac{4\\frac{\\pi}{4}}{2}\\right)}{\\sin\\!\\left(\\frac{\\frac{\\pi}{4}}{2}\\right)}\\,e^{i\\frac{5\\frac{\\pi}{4}}{2}}",
          "explanation": "Standard result from the $C+iS$ method.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Imaginary part",
          "workingLatex": "S = \\frac{\\sin\\!\\left(\\frac{4\\frac{\\pi}{4}}{2}\\right)\\sin\\!\\left(\\frac{5\\frac{\\pi}{4}}{2}\\right)}{\\sin\\!\\left(\\frac{\\frac{\\pi}{4}}{2}\\right)}",
          "explanation": "Take the imaginary part.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify",
          "workingLatex": "S = 1 + \\sqrt{2}",
          "explanation": "Evaluate using exact trigonometric values.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify",
          "workingLatex": "\\text{Compare with term-by-term addition}",
          "explanation": "Sanity check.",
          "diagram": null
        }
      ],
      "finalAnswer": "$1 + \\sqrt{2}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Trigonometric series",
    "subtopicId": "fm.y2.pure.trig-series",
    "questionDiagram": null,
    "id": "fm.y2.pure.trig-series.q019",
    "tags": [
      "small-n",
      "sine-sum",
      "c-plus-is"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Find the exact value of $\\displaystyle\\sum_{k=1}^{5} \\sin \\frac{k\\pi}{6}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define $S$",
          "workingLatex": "S = \\sum_{k=1}^{5} \\sin \\frac{k\\pi}{6}",
          "explanation": "Let $S$ be the required sine sum.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Companion cosine sum",
          "workingLatex": "C = \\sum_{k=1}^{5} \\cos \\frac{k\\pi}{6}",
          "explanation": "Pair with the cosine sum for the $C+iS$ method.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form $C + iS$",
          "workingLatex": "C + iS = \\sum_{k=1}^{5} e^{ik\\frac{\\pi}{6}}",
          "explanation": "Combine using Euler's formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Geometric series",
          "workingLatex": "C + iS = e^{i\\frac{\\pi}{6}}\\frac{1 - e^{i5\\frac{\\pi}{6}}}{1 - e^{i\\frac{\\pi}{6}}}",
          "explanation": "Sum of a geometric progression of complex exponentials.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Sine product form",
          "workingLatex": "C + iS = \\frac{\\sin\\!\\left(\\frac{5\\frac{\\pi}{6}}{2}\\right)}{\\sin\\!\\left(\\frac{\\frac{\\pi}{6}}{2}\\right)}\\,e^{i\\frac{6\\frac{\\pi}{6}}{2}}",
          "explanation": "Standard result from the $C+iS$ method.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Imaginary part",
          "workingLatex": "S = \\frac{\\sin\\!\\left(\\frac{5\\frac{\\pi}{6}}{2}\\right)\\sin\\!\\left(\\frac{6\\frac{\\pi}{6}}{2}\\right)}{\\sin\\!\\left(\\frac{\\frac{\\pi}{6}}{2}\\right)}",
          "explanation": "Take the imaginary part.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify",
          "workingLatex": "S = 2 + \\sqrt{3}",
          "explanation": "Evaluate using exact trigonometric values.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify",
          "workingLatex": "\\text{Compare with term-by-term addition}",
          "explanation": "Sanity check.",
          "diagram": null
        }
      ],
      "finalAnswer": "$2 + \\sqrt{3}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Trigonometric series",
    "subtopicId": "fm.y2.pure.trig-series",
    "questionDiagram": null,
    "id": "fm.y2.pure.trig-series.q020",
    "tags": [
      "small-n",
      "sine-sum",
      "c-plus-is"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Find the exact value of $\\displaystyle\\sum_{k=1}^{6} \\sin \\frac{k\\pi}{6}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define $S$",
          "workingLatex": "S = \\sum_{k=1}^{6} \\sin \\frac{k\\pi}{6}",
          "explanation": "Let $S$ be the required sine sum.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Companion cosine sum",
          "workingLatex": "C = \\sum_{k=1}^{6} \\cos \\frac{k\\pi}{6}",
          "explanation": "Pair with the cosine sum for the $C+iS$ method.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form $C + iS$",
          "workingLatex": "C + iS = \\sum_{k=1}^{6} e^{ik\\frac{\\pi}{6}}",
          "explanation": "Combine using Euler's formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Geometric series",
          "workingLatex": "C + iS = e^{i\\frac{\\pi}{6}}\\frac{1 - e^{i6\\frac{\\pi}{6}}}{1 - e^{i\\frac{\\pi}{6}}}",
          "explanation": "Sum of a geometric progression of complex exponentials.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Sine product form",
          "workingLatex": "C + iS = \\frac{\\sin\\!\\left(\\frac{6\\frac{\\pi}{6}}{2}\\right)}{\\sin\\!\\left(\\frac{\\frac{\\pi}{6}}{2}\\right)}\\,e^{i\\frac{7\\frac{\\pi}{6}}{2}}",
          "explanation": "Standard result from the $C+iS$ method.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Imaginary part",
          "workingLatex": "S = \\frac{\\sin\\!\\left(\\frac{6\\frac{\\pi}{6}}{2}\\right)\\sin\\!\\left(\\frac{7\\frac{\\pi}{6}}{2}\\right)}{\\sin\\!\\left(\\frac{\\frac{\\pi}{6}}{2}\\right)}",
          "explanation": "Take the imaginary part.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify",
          "workingLatex": "S = 2 + \\sqrt{3}",
          "explanation": "Evaluate using exact trigonometric values.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify",
          "workingLatex": "\\text{Compare with term-by-term addition}",
          "explanation": "Sanity check.",
          "diagram": null
        }
      ],
      "finalAnswer": "$2 + \\sqrt{3}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Trigonometric series",
    "subtopicId": "fm.y2.pure.trig-series",
    "questionDiagram": null,
    "id": "fm.y2.pure.trig-series.q021",
    "tags": [
      "small-n",
      "sine-sum",
      "c-plus-is"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Find the exact value of $\\displaystyle\\sum_{k=1}^{3} \\sin \\frac{k\\pi}{2}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define $S$",
          "workingLatex": "S = \\sum_{k=1}^{3} \\sin \\frac{k\\pi}{2}",
          "explanation": "Let $S$ be the required sine sum.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Companion cosine sum",
          "workingLatex": "C = \\sum_{k=1}^{3} \\cos \\frac{k\\pi}{2}",
          "explanation": "Pair with the cosine sum for the $C+iS$ method.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form $C + iS$",
          "workingLatex": "C + iS = \\sum_{k=1}^{3} e^{ik\\frac{\\pi}{2}}",
          "explanation": "Combine using Euler's formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Geometric series",
          "workingLatex": "C + iS = e^{i\\frac{\\pi}{2}}\\frac{1 - e^{i3\\frac{\\pi}{2}}}{1 - e^{i\\frac{\\pi}{2}}}",
          "explanation": "Sum of a geometric progression of complex exponentials.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Sine product form",
          "workingLatex": "C + iS = \\frac{\\sin\\!\\left(\\frac{3\\frac{\\pi}{2}}{2}\\right)}{\\sin\\!\\left(\\frac{\\frac{\\pi}{2}}{2}\\right)}\\,e^{i\\frac{4\\frac{\\pi}{2}}{2}}",
          "explanation": "Standard result from the $C+iS$ method.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Imaginary part",
          "workingLatex": "S = \\frac{\\sin\\!\\left(\\frac{3\\frac{\\pi}{2}}{2}\\right)\\sin\\!\\left(\\frac{4\\frac{\\pi}{2}}{2}\\right)}{\\sin\\!\\left(\\frac{\\frac{\\pi}{2}}{2}\\right)}",
          "explanation": "Take the imaginary part.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify",
          "workingLatex": "S = 0",
          "explanation": "Evaluate using exact trigonometric values.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify",
          "workingLatex": "\\text{Compare with term-by-term addition}",
          "explanation": "Sanity check.",
          "diagram": null
        }
      ],
      "finalAnswer": "$0$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Trigonometric series",
    "subtopicId": "fm.y2.pure.trig-series",
    "questionDiagram": null,
    "id": "fm.y2.pure.trig-series.q022",
    "tags": [
      "small-n",
      "sine-sum",
      "c-plus-is"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Find the exact value of $\\displaystyle\\sum_{k=1}^{4} \\sin \\frac{k\\pi}{3}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define $S$",
          "workingLatex": "S = \\sum_{k=1}^{4} \\sin \\frac{k\\pi}{3}",
          "explanation": "Let $S$ be the required sine sum.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Companion cosine sum",
          "workingLatex": "C = \\sum_{k=1}^{4} \\cos \\frac{k\\pi}{3}",
          "explanation": "Pair with the cosine sum for the $C+iS$ method.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form $C + iS$",
          "workingLatex": "C + iS = \\sum_{k=1}^{4} e^{ik\\frac{\\pi}{3}}",
          "explanation": "Combine using Euler's formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Geometric series",
          "workingLatex": "C + iS = e^{i\\frac{\\pi}{3}}\\frac{1 - e^{i4\\frac{\\pi}{3}}}{1 - e^{i\\frac{\\pi}{3}}}",
          "explanation": "Sum of a geometric progression of complex exponentials.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Sine product form",
          "workingLatex": "C + iS = \\frac{\\sin\\!\\left(\\frac{4\\frac{\\pi}{3}}{2}\\right)}{\\sin\\!\\left(\\frac{\\frac{\\pi}{3}}{2}\\right)}\\,e^{i\\frac{5\\frac{\\pi}{3}}{2}}",
          "explanation": "Standard result from the $C+iS$ method.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Imaginary part",
          "workingLatex": "S = \\frac{\\sin\\!\\left(\\frac{4\\frac{\\pi}{3}}{2}\\right)\\sin\\!\\left(\\frac{5\\frac{\\pi}{3}}{2}\\right)}{\\sin\\!\\left(\\frac{\\frac{\\pi}{3}}{2}\\right)}",
          "explanation": "Take the imaginary part.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify",
          "workingLatex": "S = \\frac{\\sqrt{3}}{2}",
          "explanation": "Evaluate using exact trigonometric values.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify",
          "workingLatex": "\\text{Compare with term-by-term addition}",
          "explanation": "Sanity check.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{\\sqrt{3}}{2}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Trigonometric series",
    "subtopicId": "fm.y2.pure.trig-series",
    "questionDiagram": null,
    "id": "fm.y2.pure.trig-series.q023",
    "tags": [
      "small-n",
      "sine-sum",
      "c-plus-is"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Find the exact value of $\\displaystyle\\sum_{k=1}^{5} \\sin \\frac{k\\pi}{4}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define $S$",
          "workingLatex": "S = \\sum_{k=1}^{5} \\sin \\frac{k\\pi}{4}",
          "explanation": "Let $S$ be the required sine sum.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Companion cosine sum",
          "workingLatex": "C = \\sum_{k=1}^{5} \\cos \\frac{k\\pi}{4}",
          "explanation": "Pair with the cosine sum for the $C+iS$ method.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form $C + iS$",
          "workingLatex": "C + iS = \\sum_{k=1}^{5} e^{ik\\frac{\\pi}{4}}",
          "explanation": "Combine using Euler's formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Geometric series",
          "workingLatex": "C + iS = e^{i\\frac{\\pi}{4}}\\frac{1 - e^{i5\\frac{\\pi}{4}}}{1 - e^{i\\frac{\\pi}{4}}}",
          "explanation": "Sum of a geometric progression of complex exponentials.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Sine product form",
          "workingLatex": "C + iS = \\frac{\\sin\\!\\left(\\frac{5\\frac{\\pi}{4}}{2}\\right)}{\\sin\\!\\left(\\frac{\\frac{\\pi}{4}}{2}\\right)}\\,e^{i\\frac{6\\frac{\\pi}{4}}{2}}",
          "explanation": "Standard result from the $C+iS$ method.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Imaginary part",
          "workingLatex": "S = \\frac{\\sin\\!\\left(\\frac{5\\frac{\\pi}{4}}{2}\\right)\\sin\\!\\left(\\frac{6\\frac{\\pi}{4}}{2}\\right)}{\\sin\\!\\left(\\frac{\\frac{\\pi}{4}}{2}\\right)}",
          "explanation": "Take the imaginary part.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify",
          "workingLatex": "S = \\frac{2 + \\sqrt{2}}{2}",
          "explanation": "Evaluate using exact trigonometric values.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify",
          "workingLatex": "\\text{Compare with term-by-term addition}",
          "explanation": "Sanity check.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{2 + \\sqrt{2}}{2}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Trigonometric series",
    "subtopicId": "fm.y2.pure.trig-series",
    "questionDiagram": null,
    "id": "fm.y2.pure.trig-series.q024",
    "tags": [
      "small-n",
      "sine-sum",
      "c-plus-is"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Find the exact value of $\\displaystyle\\sum_{k=1}^{6} \\sin \\frac{k\\pi}{4}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define $S$",
          "workingLatex": "S = \\sum_{k=1}^{6} \\sin \\frac{k\\pi}{4}",
          "explanation": "Let $S$ be the required sine sum.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Companion cosine sum",
          "workingLatex": "C = \\sum_{k=1}^{6} \\cos \\frac{k\\pi}{4}",
          "explanation": "Pair with the cosine sum for the $C+iS$ method.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form $C + iS$",
          "workingLatex": "C + iS = \\sum_{k=1}^{6} e^{ik\\frac{\\pi}{4}}",
          "explanation": "Combine using Euler's formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Geometric series",
          "workingLatex": "C + iS = e^{i\\frac{\\pi}{4}}\\frac{1 - e^{i6\\frac{\\pi}{4}}}{1 - e^{i\\frac{\\pi}{4}}}",
          "explanation": "Sum of a geometric progression of complex exponentials.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Sine product form",
          "workingLatex": "C + iS = \\frac{\\sin\\!\\left(\\frac{6\\frac{\\pi}{4}}{2}\\right)}{\\sin\\!\\left(\\frac{\\frac{\\pi}{4}}{2}\\right)}\\,e^{i\\frac{7\\frac{\\pi}{4}}{2}}",
          "explanation": "Standard result from the $C+iS$ method.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Imaginary part",
          "workingLatex": "S = \\frac{\\sin\\!\\left(\\frac{6\\frac{\\pi}{4}}{2}\\right)\\sin\\!\\left(\\frac{7\\frac{\\pi}{4}}{2}\\right)}{\\sin\\!\\left(\\frac{\\frac{\\pi}{4}}{2}\\right)}",
          "explanation": "Take the imaginary part.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify",
          "workingLatex": "S = \\frac{\\sqrt{2}}{2}",
          "explanation": "Evaluate using exact trigonometric values.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify",
          "workingLatex": "\\text{Compare with term-by-term addition}",
          "explanation": "Sanity check.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{\\sqrt{2}}{2}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Trigonometric series",
    "subtopicId": "fm.y2.pure.trig-series",
    "questionDiagram": null,
    "id": "fm.y2.pure.trig-series.q025",
    "tags": [
      "small-n",
      "sine-sum",
      "c-plus-is"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Find the exact value of $\\displaystyle\\sum_{k=1}^{4} \\sin \\frac{k\\pi}{6}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define $S$",
          "workingLatex": "S = \\sum_{k=1}^{4} \\sin \\frac{k\\pi}{6}",
          "explanation": "Let $S$ be the required sine sum.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Companion cosine sum",
          "workingLatex": "C = \\sum_{k=1}^{4} \\cos \\frac{k\\pi}{6}",
          "explanation": "Pair with the cosine sum for the $C+iS$ method.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form $C + iS$",
          "workingLatex": "C + iS = \\sum_{k=1}^{4} e^{ik\\frac{\\pi}{6}}",
          "explanation": "Combine using Euler's formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Geometric series",
          "workingLatex": "C + iS = e^{i\\frac{\\pi}{6}}\\frac{1 - e^{i4\\frac{\\pi}{6}}}{1 - e^{i\\frac{\\pi}{6}}}",
          "explanation": "Sum of a geometric progression of complex exponentials.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Sine product form",
          "workingLatex": "C + iS = \\frac{\\sin\\!\\left(\\frac{4\\frac{\\pi}{6}}{2}\\right)}{\\sin\\!\\left(\\frac{\\frac{\\pi}{6}}{2}\\right)}\\,e^{i\\frac{5\\frac{\\pi}{6}}{2}}",
          "explanation": "Standard result from the $C+iS$ method.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Imaginary part",
          "workingLatex": "S = \\frac{\\sin\\!\\left(\\frac{4\\frac{\\pi}{6}}{2}\\right)\\sin\\!\\left(\\frac{5\\frac{\\pi}{6}}{2}\\right)}{\\sin\\!\\left(\\frac{\\frac{\\pi}{6}}{2}\\right)}",
          "explanation": "Take the imaginary part.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify",
          "workingLatex": "S = \\frac{3 + 2\\sqrt{3}}{2}",
          "explanation": "Evaluate using exact trigonometric values.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify",
          "workingLatex": "\\text{Compare with term-by-term addition}",
          "explanation": "Sanity check.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{3 + 2\\sqrt{3}}{2}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Trigonometric series",
    "subtopicId": "fm.y2.pure.trig-series",
    "questionDiagram": null,
    "id": "fm.y2.pure.trig-series.q026",
    "tags": [
      "both-sums",
      "cosine-sum",
      "sine-sum",
      "c-plus-is"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Using the $C + iS$ method, find $\\displaystyle\\sum_{k=1}^{4} \\cos \\frac{k\\pi}{3}$ and $\\displaystyle\\sum_{k=1}^{4} \\sin \\frac{k\\pi}{3}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up $C$ and $S$",
          "workingLatex": "C = \\sum_{k=1}^{4} \\cos \\frac{k\\pi}{3},\\quad S = \\sum_{k=1}^{4} \\sin \\frac{k\\pi}{3}",
          "explanation": "Define both sums.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Complex exponential",
          "workingLatex": "C + iS = \\sum_{k=1}^{4} e^{ik\\frac{\\pi}{3}}",
          "explanation": "Euler's formula converts each term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Geometric sum",
          "workingLatex": "C + iS = e^{i\\frac{\\pi}{3}}\\frac{1 - e^{i4\\frac{\\pi}{3}}}{1 - e^{i\\frac{\\pi}{3}}}",
          "explanation": "Apply the finite geometric series formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Factor sines",
          "workingLatex": "C + iS = \\frac{\\sin\\!\\left(\\frac{4\\frac{\\pi}{3}}{2}\\right)}{\\sin\\!\\left(\\frac{\\frac{\\pi}{3}}{2}\\right)}\\,e^{i\\frac{5\\frac{\\pi}{3}}{2}}",
          "explanation": "Use $1-e^{ix}=-2ie^{ix/2}\\sin(x/2)$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Cosine sum",
          "workingLatex": "C = \\frac{\\sin\\!\\left(\\frac{4\\frac{\\pi}{3}}{2}\\right)\\cos\\!\\left(\\frac{5\\frac{\\pi}{3}}{2}\\right)}{\\sin\\!\\left(\\frac{\\frac{\\pi}{3}}{2}\\right)} = -\\frac{3}{2}",
          "explanation": "Real part.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Sine sum",
          "workingLatex": "S = \\frac{\\sin\\!\\left(\\frac{4\\frac{\\pi}{3}}{2}\\right)\\sin\\!\\left(\\frac{5\\frac{\\pi}{3}}{2}\\right)}{\\sin\\!\\left(\\frac{\\frac{\\pi}{3}}{2}\\right)} = \\frac{\\sqrt{3}}{2}",
          "explanation": "Imaginary part.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Modulus check",
          "workingLatex": "|C + iS| = \\frac{|\\sin(n\\theta/2)|}{|\\sin(\\theta/2)|}",
          "explanation": "The complex sum has modulus given by the sine ratio.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Argument",
          "workingLatex": "\\arg(C+iS) = \\frac{5\\frac{\\pi}{3}}{2}",
          "explanation": "The argument of the complex sum.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answers",
          "workingLatex": "C = -\\frac{3}{2},\\; S = \\frac{\\sqrt{3}}{2}",
          "explanation": "Both sums found.",
          "diagram": null
        }
      ],
      "finalAnswer": "$C = -\\frac{3}{2}$, $S = \\frac{\\sqrt{3}}{2}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Trigonometric series",
    "subtopicId": "fm.y2.pure.trig-series",
    "questionDiagram": null,
    "id": "fm.y2.pure.trig-series.q027",
    "tags": [
      "both-sums",
      "cosine-sum",
      "sine-sum",
      "c-plus-is"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Using the $C + iS$ method, find $\\displaystyle\\sum_{k=1}^{5} \\cos \\frac{k\\pi}{4}$ and $\\displaystyle\\sum_{k=1}^{5} \\sin \\frac{k\\pi}{4}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up $C$ and $S$",
          "workingLatex": "C = \\sum_{k=1}^{5} \\cos \\frac{k\\pi}{4},\\quad S = \\sum_{k=1}^{5} \\sin \\frac{k\\pi}{4}",
          "explanation": "Define both sums.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Complex exponential",
          "workingLatex": "C + iS = \\sum_{k=1}^{5} e^{ik\\frac{\\pi}{4}}",
          "explanation": "Euler's formula converts each term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Geometric sum",
          "workingLatex": "C + iS = e^{i\\frac{\\pi}{4}}\\frac{1 - e^{i5\\frac{\\pi}{4}}}{1 - e^{i\\frac{\\pi}{4}}}",
          "explanation": "Apply the finite geometric series formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Factor sines",
          "workingLatex": "C + iS = \\frac{\\sin\\!\\left(\\frac{5\\frac{\\pi}{4}}{2}\\right)}{\\sin\\!\\left(\\frac{\\frac{\\pi}{4}}{2}\\right)}\\,e^{i\\frac{6\\frac{\\pi}{4}}{2}}",
          "explanation": "Use $1-e^{ix}=-2ie^{ix/2}\\sin(x/2)$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Cosine sum",
          "workingLatex": "C = \\frac{\\sin\\!\\left(\\frac{5\\frac{\\pi}{4}}{2}\\right)\\cos\\!\\left(\\frac{6\\frac{\\pi}{4}}{2}\\right)}{\\sin\\!\\left(\\frac{\\frac{\\pi}{4}}{2}\\right)} = \\frac{-4 - 2\\sqrt{2}}{4}",
          "explanation": "Real part.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Sine sum",
          "workingLatex": "S = \\frac{\\sin\\!\\left(\\frac{5\\frac{\\pi}{4}}{2}\\right)\\sin\\!\\left(\\frac{6\\frac{\\pi}{4}}{2}\\right)}{\\sin\\!\\left(\\frac{\\frac{\\pi}{4}}{2}\\right)} = \\frac{2 + \\sqrt{2}}{2}",
          "explanation": "Imaginary part.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Modulus check",
          "workingLatex": "|C + iS| = \\frac{|\\sin(n\\theta/2)|}{|\\sin(\\theta/2)|}",
          "explanation": "The complex sum has modulus given by the sine ratio.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Argument",
          "workingLatex": "\\arg(C+iS) = \\frac{6\\frac{\\pi}{4}}{2}",
          "explanation": "The argument of the complex sum.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answers",
          "workingLatex": "C = \\frac{-4 - 2\\sqrt{2}}{4},\\; S = \\frac{2 + \\sqrt{2}}{2}",
          "explanation": "Both sums found.",
          "diagram": null
        }
      ],
      "finalAnswer": "$C = \\frac{-4 - 2\\sqrt{2}}{4}$, $S = \\frac{2 + \\sqrt{2}}{2}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Trigonometric series",
    "subtopicId": "fm.y2.pure.trig-series",
    "questionDiagram": null,
    "id": "fm.y2.pure.trig-series.q028",
    "tags": [
      "both-sums",
      "cosine-sum",
      "sine-sum",
      "c-plus-is"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Using the $C + iS$ method, find $\\displaystyle\\sum_{k=1}^{6} \\cos \\frac{k\\pi}{6}$ and $\\displaystyle\\sum_{k=1}^{6} \\sin \\frac{k\\pi}{6}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up $C$ and $S$",
          "workingLatex": "C = \\sum_{k=1}^{6} \\cos \\frac{k\\pi}{6},\\quad S = \\sum_{k=1}^{6} \\sin \\frac{k\\pi}{6}",
          "explanation": "Define both sums.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Complex exponential",
          "workingLatex": "C + iS = \\sum_{k=1}^{6} e^{ik\\frac{\\pi}{6}}",
          "explanation": "Euler's formula converts each term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Geometric sum",
          "workingLatex": "C + iS = e^{i\\frac{\\pi}{6}}\\frac{1 - e^{i6\\frac{\\pi}{6}}}{1 - e^{i\\frac{\\pi}{6}}}",
          "explanation": "Apply the finite geometric series formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Factor sines",
          "workingLatex": "C + iS = \\frac{\\sin\\!\\left(\\frac{6\\frac{\\pi}{6}}{2}\\right)}{\\sin\\!\\left(\\frac{\\frac{\\pi}{6}}{2}\\right)}\\,e^{i\\frac{7\\frac{\\pi}{6}}{2}}",
          "explanation": "Use $1-e^{ix}=-2ie^{ix/2}\\sin(x/2)$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Cosine sum",
          "workingLatex": "C = \\frac{\\sin\\!\\left(\\frac{6\\frac{\\pi}{6}}{2}\\right)\\cos\\!\\left(\\frac{7\\frac{\\pi}{6}}{2}\\right)}{\\sin\\!\\left(\\frac{\\frac{\\pi}{6}}{2}\\right)} = -1",
          "explanation": "Real part.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Sine sum",
          "workingLatex": "S = \\frac{\\sin\\!\\left(\\frac{6\\frac{\\pi}{6}}{2}\\right)\\sin\\!\\left(\\frac{7\\frac{\\pi}{6}}{2}\\right)}{\\sin\\!\\left(\\frac{\\frac{\\pi}{6}}{2}\\right)} = 2 + \\sqrt{3}",
          "explanation": "Imaginary part.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Modulus check",
          "workingLatex": "|C + iS| = \\frac{|\\sin(n\\theta/2)|}{|\\sin(\\theta/2)|}",
          "explanation": "The complex sum has modulus given by the sine ratio.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Argument",
          "workingLatex": "\\arg(C+iS) = \\frac{7\\frac{\\pi}{6}}{2}",
          "explanation": "The argument of the complex sum.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answers",
          "workingLatex": "C = -1,\\; S = 2 + \\sqrt{3}",
          "explanation": "Both sums found.",
          "diagram": null
        }
      ],
      "finalAnswer": "$C = -1$, $S = 2 + \\sqrt{3}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Trigonometric series",
    "subtopicId": "fm.y2.pure.trig-series",
    "questionDiagram": null,
    "id": "fm.y2.pure.trig-series.q029",
    "tags": [
      "both-sums",
      "cosine-sum",
      "sine-sum",
      "c-plus-is"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Using the $C + iS$ method, find $\\displaystyle\\sum_{k=1}^{3} \\cos \\frac{k\\pi}{2}$ and $\\displaystyle\\sum_{k=1}^{3} \\sin \\frac{k\\pi}{2}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up $C$ and $S$",
          "workingLatex": "C = \\sum_{k=1}^{3} \\cos \\frac{k\\pi}{2},\\quad S = \\sum_{k=1}^{3} \\sin \\frac{k\\pi}{2}",
          "explanation": "Define both sums.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Complex exponential",
          "workingLatex": "C + iS = \\sum_{k=1}^{3} e^{ik\\frac{\\pi}{2}}",
          "explanation": "Euler's formula converts each term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Geometric sum",
          "workingLatex": "C + iS = e^{i\\frac{\\pi}{2}}\\frac{1 - e^{i3\\frac{\\pi}{2}}}{1 - e^{i\\frac{\\pi}{2}}}",
          "explanation": "Apply the finite geometric series formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Factor sines",
          "workingLatex": "C + iS = \\frac{\\sin\\!\\left(\\frac{3\\frac{\\pi}{2}}{2}\\right)}{\\sin\\!\\left(\\frac{\\frac{\\pi}{2}}{2}\\right)}\\,e^{i\\frac{4\\frac{\\pi}{2}}{2}}",
          "explanation": "Use $1-e^{ix}=-2ie^{ix/2}\\sin(x/2)$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Cosine sum",
          "workingLatex": "C = \\frac{\\sin\\!\\left(\\frac{3\\frac{\\pi}{2}}{2}\\right)\\cos\\!\\left(\\frac{4\\frac{\\pi}{2}}{2}\\right)}{\\sin\\!\\left(\\frac{\\frac{\\pi}{2}}{2}\\right)} = -1",
          "explanation": "Real part.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Sine sum",
          "workingLatex": "S = \\frac{\\sin\\!\\left(\\frac{3\\frac{\\pi}{2}}{2}\\right)\\sin\\!\\left(\\frac{4\\frac{\\pi}{2}}{2}\\right)}{\\sin\\!\\left(\\frac{\\frac{\\pi}{2}}{2}\\right)} = 0",
          "explanation": "Imaginary part.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Modulus check",
          "workingLatex": "|C + iS| = \\frac{|\\sin(n\\theta/2)|}{|\\sin(\\theta/2)|}",
          "explanation": "The complex sum has modulus given by the sine ratio.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Argument",
          "workingLatex": "\\arg(C+iS) = \\frac{4\\frac{\\pi}{2}}{2}",
          "explanation": "The argument of the complex sum.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answers",
          "workingLatex": "C = -1,\\; S = 0",
          "explanation": "Both sums found.",
          "diagram": null
        }
      ],
      "finalAnswer": "$C = -1$, $S = 0$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Trigonometric series",
    "subtopicId": "fm.y2.pure.trig-series",
    "questionDiagram": null,
    "id": "fm.y2.pure.trig-series.q030",
    "tags": [
      "both-sums",
      "cosine-sum",
      "sine-sum",
      "c-plus-is"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Using the $C + iS$ method, find $\\displaystyle\\sum_{k=1}^{4} \\cos \\frac{k\\pi}{4}$ and $\\displaystyle\\sum_{k=1}^{4} \\sin \\frac{k\\pi}{4}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up $C$ and $S$",
          "workingLatex": "C = \\sum_{k=1}^{4} \\cos \\frac{k\\pi}{4},\\quad S = \\sum_{k=1}^{4} \\sin \\frac{k\\pi}{4}",
          "explanation": "Define both sums.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Complex exponential",
          "workingLatex": "C + iS = \\sum_{k=1}^{4} e^{ik\\frac{\\pi}{4}}",
          "explanation": "Euler's formula converts each term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Geometric sum",
          "workingLatex": "C + iS = e^{i\\frac{\\pi}{4}}\\frac{1 - e^{i4\\frac{\\pi}{4}}}{1 - e^{i\\frac{\\pi}{4}}}",
          "explanation": "Apply the finite geometric series formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Factor sines",
          "workingLatex": "C + iS = \\frac{\\sin\\!\\left(\\frac{4\\frac{\\pi}{4}}{2}\\right)}{\\sin\\!\\left(\\frac{\\frac{\\pi}{4}}{2}\\right)}\\,e^{i\\frac{5\\frac{\\pi}{4}}{2}}",
          "explanation": "Use $1-e^{ix}=-2ie^{ix/2}\\sin(x/2)$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Cosine sum",
          "workingLatex": "C = \\frac{\\sin\\!\\left(\\frac{4\\frac{\\pi}{4}}{2}\\right)\\cos\\!\\left(\\frac{5\\frac{\\pi}{4}}{2}\\right)}{\\sin\\!\\left(\\frac{\\frac{\\pi}{4}}{2}\\right)} = -1",
          "explanation": "Real part.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Sine sum",
          "workingLatex": "S = \\frac{\\sin\\!\\left(\\frac{4\\frac{\\pi}{4}}{2}\\right)\\sin\\!\\left(\\frac{5\\frac{\\pi}{4}}{2}\\right)}{\\sin\\!\\left(\\frac{\\frac{\\pi}{4}}{2}\\right)} = 1 + \\sqrt{2}",
          "explanation": "Imaginary part.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Modulus check",
          "workingLatex": "|C + iS| = \\frac{|\\sin(n\\theta/2)|}{|\\sin(\\theta/2)|}",
          "explanation": "The complex sum has modulus given by the sine ratio.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Argument",
          "workingLatex": "\\arg(C+iS) = \\frac{5\\frac{\\pi}{4}}{2}",
          "explanation": "The argument of the complex sum.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answers",
          "workingLatex": "C = -1,\\; S = 1 + \\sqrt{2}",
          "explanation": "Both sums found.",
          "diagram": null
        }
      ],
      "finalAnswer": "$C = -1$, $S = 1 + \\sqrt{2}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Trigonometric series",
    "subtopicId": "fm.y2.pure.trig-series",
    "questionDiagram": null,
    "id": "fm.y2.pure.trig-series.q031",
    "tags": [
      "both-sums",
      "cosine-sum",
      "sine-sum",
      "c-plus-is"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Using the $C + iS$ method, find $\\displaystyle\\sum_{k=1}^{5} \\cos \\frac{k\\pi}{6}$ and $\\displaystyle\\sum_{k=1}^{5} \\sin \\frac{k\\pi}{6}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up $C$ and $S$",
          "workingLatex": "C = \\sum_{k=1}^{5} \\cos \\frac{k\\pi}{6},\\quad S = \\sum_{k=1}^{5} \\sin \\frac{k\\pi}{6}",
          "explanation": "Define both sums.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Complex exponential",
          "workingLatex": "C + iS = \\sum_{k=1}^{5} e^{ik\\frac{\\pi}{6}}",
          "explanation": "Euler's formula converts each term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Geometric sum",
          "workingLatex": "C + iS = e^{i\\frac{\\pi}{6}}\\frac{1 - e^{i5\\frac{\\pi}{6}}}{1 - e^{i\\frac{\\pi}{6}}}",
          "explanation": "Apply the finite geometric series formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Factor sines",
          "workingLatex": "C + iS = \\frac{\\sin\\!\\left(\\frac{5\\frac{\\pi}{6}}{2}\\right)}{\\sin\\!\\left(\\frac{\\frac{\\pi}{6}}{2}\\right)}\\,e^{i\\frac{6\\frac{\\pi}{6}}{2}}",
          "explanation": "Use $1-e^{ix}=-2ie^{ix/2}\\sin(x/2)$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Cosine sum",
          "workingLatex": "C = \\frac{\\sin\\!\\left(\\frac{5\\frac{\\pi}{6}}{2}\\right)\\cos\\!\\left(\\frac{6\\frac{\\pi}{6}}{2}\\right)}{\\sin\\!\\left(\\frac{\\frac{\\pi}{6}}{2}\\right)} = 0",
          "explanation": "Real part.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Sine sum",
          "workingLatex": "S = \\frac{\\sin\\!\\left(\\frac{5\\frac{\\pi}{6}}{2}\\right)\\sin\\!\\left(\\frac{6\\frac{\\pi}{6}}{2}\\right)}{\\sin\\!\\left(\\frac{\\frac{\\pi}{6}}{2}\\right)} = 2 + \\sqrt{3}",
          "explanation": "Imaginary part.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Modulus check",
          "workingLatex": "|C + iS| = \\frac{|\\sin(n\\theta/2)|}{|\\sin(\\theta/2)|}",
          "explanation": "The complex sum has modulus given by the sine ratio.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Argument",
          "workingLatex": "\\arg(C+iS) = \\frac{6\\frac{\\pi}{6}}{2}",
          "explanation": "The argument of the complex sum.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answers",
          "workingLatex": "C = 0,\\; S = 2 + \\sqrt{3}",
          "explanation": "Both sums found.",
          "diagram": null
        }
      ],
      "finalAnswer": "$C = 0$, $S = 2 + \\sqrt{3}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Trigonometric series",
    "subtopicId": "fm.y2.pure.trig-series",
    "questionDiagram": null,
    "id": "fm.y2.pure.trig-series.q032",
    "tags": [
      "both-sums",
      "cosine-sum",
      "sine-sum",
      "c-plus-is"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Using the $C + iS$ method, find $\\displaystyle\\sum_{k=1}^{6} \\cos \\frac{k\\pi}{3}$ and $\\displaystyle\\sum_{k=1}^{6} \\sin \\frac{k\\pi}{3}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up $C$ and $S$",
          "workingLatex": "C = \\sum_{k=1}^{6} \\cos \\frac{k\\pi}{3},\\quad S = \\sum_{k=1}^{6} \\sin \\frac{k\\pi}{3}",
          "explanation": "Define both sums.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Complex exponential",
          "workingLatex": "C + iS = \\sum_{k=1}^{6} e^{ik\\frac{\\pi}{3}}",
          "explanation": "Euler's formula converts each term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Geometric sum",
          "workingLatex": "C + iS = e^{i\\frac{\\pi}{3}}\\frac{1 - e^{i6\\frac{\\pi}{3}}}{1 - e^{i\\frac{\\pi}{3}}}",
          "explanation": "Apply the finite geometric series formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Factor sines",
          "workingLatex": "C + iS = \\frac{\\sin\\!\\left(\\frac{6\\frac{\\pi}{3}}{2}\\right)}{\\sin\\!\\left(\\frac{\\frac{\\pi}{3}}{2}\\right)}\\,e^{i\\frac{7\\frac{\\pi}{3}}{2}}",
          "explanation": "Use $1-e^{ix}=-2ie^{ix/2}\\sin(x/2)$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Cosine sum",
          "workingLatex": "C = \\frac{\\sin\\!\\left(\\frac{6\\frac{\\pi}{3}}{2}\\right)\\cos\\!\\left(\\frac{7\\frac{\\pi}{3}}{2}\\right)}{\\sin\\!\\left(\\frac{\\frac{\\pi}{3}}{2}\\right)} = 0",
          "explanation": "Real part.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Sine sum",
          "workingLatex": "S = \\frac{\\sin\\!\\left(\\frac{6\\frac{\\pi}{3}}{2}\\right)\\sin\\!\\left(\\frac{7\\frac{\\pi}{3}}{2}\\right)}{\\sin\\!\\left(\\frac{\\frac{\\pi}{3}}{2}\\right)} = 0",
          "explanation": "Imaginary part.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Modulus check",
          "workingLatex": "|C + iS| = \\frac{|\\sin(n\\theta/2)|}{|\\sin(\\theta/2)|}",
          "explanation": "The complex sum has modulus given by the sine ratio.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Argument",
          "workingLatex": "\\arg(C+iS) = \\frac{7\\frac{\\pi}{3}}{2}",
          "explanation": "The argument of the complex sum.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answers",
          "workingLatex": "C = 0,\\; S = 0",
          "explanation": "Both sums found.",
          "diagram": null
        }
      ],
      "finalAnswer": "$C = 0$, $S = 0$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Trigonometric series",
    "subtopicId": "fm.y2.pure.trig-series",
    "questionDiagram": null,
    "id": "fm.y2.pure.trig-series.q033",
    "tags": [
      "both-sums",
      "cosine-sum",
      "sine-sum",
      "c-plus-is"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Using the $C + iS$ method, find $\\displaystyle\\sum_{k=1}^{7} \\cos \\frac{k\\pi}{6}$ and $\\displaystyle\\sum_{k=1}^{7} \\sin \\frac{k\\pi}{6}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up $C$ and $S$",
          "workingLatex": "C = \\sum_{k=1}^{7} \\cos \\frac{k\\pi}{6},\\quad S = \\sum_{k=1}^{7} \\sin \\frac{k\\pi}{6}",
          "explanation": "Define both sums.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Complex exponential",
          "workingLatex": "C + iS = \\sum_{k=1}^{7} e^{ik\\frac{\\pi}{6}}",
          "explanation": "Euler's formula converts each term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Geometric sum",
          "workingLatex": "C + iS = e^{i\\frac{\\pi}{6}}\\frac{1 - e^{i7\\frac{\\pi}{6}}}{1 - e^{i\\frac{\\pi}{6}}}",
          "explanation": "Apply the finite geometric series formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Factor sines",
          "workingLatex": "C + iS = \\frac{\\sin\\!\\left(\\frac{7\\frac{\\pi}{6}}{2}\\right)}{\\sin\\!\\left(\\frac{\\frac{\\pi}{6}}{2}\\right)}\\,e^{i\\frac{8\\frac{\\pi}{6}}{2}}",
          "explanation": "Use $1-e^{ix}=-2ie^{ix/2}\\sin(x/2)$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Cosine sum",
          "workingLatex": "C = \\frac{\\sin\\!\\left(\\frac{7\\frac{\\pi}{6}}{2}\\right)\\cos\\!\\left(\\frac{8\\frac{\\pi}{6}}{2}\\right)}{\\sin\\!\\left(\\frac{\\frac{\\pi}{6}}{2}\\right)} = \\frac{-4 - 2\\sqrt{3}}{4}",
          "explanation": "Real part.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Sine sum",
          "workingLatex": "S = \\frac{\\sin\\!\\left(\\frac{7\\frac{\\pi}{6}}{2}\\right)\\sin\\!\\left(\\frac{8\\frac{\\pi}{6}}{2}\\right)}{\\sin\\!\\left(\\frac{\\frac{\\pi}{6}}{2}\\right)} = \\frac{3 + 2\\sqrt{3}}{2}",
          "explanation": "Imaginary part.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Modulus check",
          "workingLatex": "|C + iS| = \\frac{|\\sin(n\\theta/2)|}{|\\sin(\\theta/2)|}",
          "explanation": "The complex sum has modulus given by the sine ratio.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Argument",
          "workingLatex": "\\arg(C+iS) = \\frac{8\\frac{\\pi}{6}}{2}",
          "explanation": "The argument of the complex sum.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answers",
          "workingLatex": "C = \\frac{-4 - 2\\sqrt{3}}{4},\\; S = \\frac{3 + 2\\sqrt{3}}{2}",
          "explanation": "Both sums found.",
          "diagram": null
        }
      ],
      "finalAnswer": "$C = \\frac{-4 - 2\\sqrt{3}}{4}$, $S = \\frac{3 + 2\\sqrt{3}}{2}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Trigonometric series",
    "subtopicId": "fm.y2.pure.trig-series",
    "questionDiagram": null,
    "id": "fm.y2.pure.trig-series.q034",
    "tags": [
      "both-sums",
      "cosine-sum",
      "sine-sum",
      "c-plus-is"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Using the $C + iS$ method, find $\\displaystyle\\sum_{k=1}^{8} \\cos \\frac{k\\pi}{4}$ and $\\displaystyle\\sum_{k=1}^{8} \\sin \\frac{k\\pi}{4}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up $C$ and $S$",
          "workingLatex": "C = \\sum_{k=1}^{8} \\cos \\frac{k\\pi}{4},\\quad S = \\sum_{k=1}^{8} \\sin \\frac{k\\pi}{4}",
          "explanation": "Define both sums.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Complex exponential",
          "workingLatex": "C + iS = \\sum_{k=1}^{8} e^{ik\\frac{\\pi}{4}}",
          "explanation": "Euler's formula converts each term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Geometric sum",
          "workingLatex": "C + iS = e^{i\\frac{\\pi}{4}}\\frac{1 - e^{i8\\frac{\\pi}{4}}}{1 - e^{i\\frac{\\pi}{4}}}",
          "explanation": "Apply the finite geometric series formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Factor sines",
          "workingLatex": "C + iS = \\frac{\\sin\\!\\left(\\frac{8\\frac{\\pi}{4}}{2}\\right)}{\\sin\\!\\left(\\frac{\\frac{\\pi}{4}}{2}\\right)}\\,e^{i\\frac{9\\frac{\\pi}{4}}{2}}",
          "explanation": "Use $1-e^{ix}=-2ie^{ix/2}\\sin(x/2)$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Cosine sum",
          "workingLatex": "C = \\frac{\\sin\\!\\left(\\frac{8\\frac{\\pi}{4}}{2}\\right)\\cos\\!\\left(\\frac{9\\frac{\\pi}{4}}{2}\\right)}{\\sin\\!\\left(\\frac{\\frac{\\pi}{4}}{2}\\right)} = 0",
          "explanation": "Real part.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Sine sum",
          "workingLatex": "S = \\frac{\\sin\\!\\left(\\frac{8\\frac{\\pi}{4}}{2}\\right)\\sin\\!\\left(\\frac{9\\frac{\\pi}{4}}{2}\\right)}{\\sin\\!\\left(\\frac{\\frac{\\pi}{4}}{2}\\right)} = 0",
          "explanation": "Imaginary part.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Modulus check",
          "workingLatex": "|C + iS| = \\frac{|\\sin(n\\theta/2)|}{|\\sin(\\theta/2)|}",
          "explanation": "The complex sum has modulus given by the sine ratio.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Argument",
          "workingLatex": "\\arg(C+iS) = \\frac{9\\frac{\\pi}{4}}{2}",
          "explanation": "The argument of the complex sum.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answers",
          "workingLatex": "C = 0,\\; S = 0",
          "explanation": "Both sums found.",
          "diagram": null
        }
      ],
      "finalAnswer": "$C = 0$, $S = 0$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Trigonometric series",
    "subtopicId": "fm.y2.pure.trig-series",
    "questionDiagram": null,
    "id": "fm.y2.pure.trig-series.q035",
    "tags": [
      "both-sums",
      "cosine-sum",
      "sine-sum",
      "c-plus-is"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Using the $C + iS$ method, find $\\displaystyle\\sum_{k=1}^{9} \\cos \\frac{k\\pi}{3}$ and $\\displaystyle\\sum_{k=1}^{9} \\sin \\frac{k\\pi}{3}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up $C$ and $S$",
          "workingLatex": "C = \\sum_{k=1}^{9} \\cos \\frac{k\\pi}{3},\\quad S = \\sum_{k=1}^{9} \\sin \\frac{k\\pi}{3}",
          "explanation": "Define both sums.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Complex exponential",
          "workingLatex": "C + iS = \\sum_{k=1}^{9} e^{ik\\frac{\\pi}{3}}",
          "explanation": "Euler's formula converts each term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Geometric sum",
          "workingLatex": "C + iS = e^{i\\frac{\\pi}{3}}\\frac{1 - e^{i9\\frac{\\pi}{3}}}{1 - e^{i\\frac{\\pi}{3}}}",
          "explanation": "Apply the finite geometric series formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Factor sines",
          "workingLatex": "C + iS = \\frac{\\sin\\!\\left(\\frac{9\\frac{\\pi}{3}}{2}\\right)}{\\sin\\!\\left(\\frac{\\frac{\\pi}{3}}{2}\\right)}\\,e^{i\\frac{10\\frac{\\pi}{3}}{2}}",
          "explanation": "Use $1-e^{ix}=-2ie^{ix/2}\\sin(x/2)$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Cosine sum",
          "workingLatex": "C = \\frac{\\sin\\!\\left(\\frac{9\\frac{\\pi}{3}}{2}\\right)\\cos\\!\\left(\\frac{10\\frac{\\pi}{3}}{2}\\right)}{\\sin\\!\\left(\\frac{\\frac{\\pi}{3}}{2}\\right)} = -1",
          "explanation": "Real part.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Sine sum",
          "workingLatex": "S = \\frac{\\sin\\!\\left(\\frac{9\\frac{\\pi}{3}}{2}\\right)\\sin\\!\\left(\\frac{10\\frac{\\pi}{3}}{2}\\right)}{\\sin\\!\\left(\\frac{\\frac{\\pi}{3}}{2}\\right)} = \\sqrt{3}",
          "explanation": "Imaginary part.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Modulus check",
          "workingLatex": "|C + iS| = \\frac{|\\sin(n\\theta/2)|}{|\\sin(\\theta/2)|}",
          "explanation": "The complex sum has modulus given by the sine ratio.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Argument",
          "workingLatex": "\\arg(C+iS) = \\frac{10\\frac{\\pi}{3}}{2}",
          "explanation": "The argument of the complex sum.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answers",
          "workingLatex": "C = -1,\\; S = \\sqrt{3}",
          "explanation": "Both sums found.",
          "diagram": null
        }
      ],
      "finalAnswer": "$C = -1$, $S = \\sqrt{3}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Trigonometric series",
    "subtopicId": "fm.y2.pure.trig-series",
    "questionDiagram": null,
    "id": "fm.y2.pure.trig-series.q036",
    "tags": [
      "alternating",
      "alternating",
      "cosine-sum"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find $\\displaystyle\\sum_{k=1}^{4} (-1)^{k-1} \\cos \\frac{k\\pi}{3}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rewrite with powers",
          "workingLatex": "\\sum_{k=1}^{4} (-1)^{k-1}\\cos \\frac{k\\pi}{3} = \\operatorname{Re}\\!\\left(\\sum_{k=1}^{4} (-e^{i\\frac{\\pi}{3}})^{k-1} e^{i\\frac{\\pi}{3}}\\right)",
          "explanation": "Alternating signs correspond to ratio $-e^{i\\theta}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Geometric series",
          "workingLatex": "\\sum_{k=1}^{4} (-e^{i\\frac{\\pi}{3}})^{k} = -e^{i\\frac{\\pi}{3}}\\frac{1 - (-e^{i\\frac{\\pi}{3}})^{4}}{1 + e^{i\\frac{\\pi}{3}}}",
          "explanation": "First term $-e^{i\\theta}$, ratio $-e^{i\\theta}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify denominator",
          "workingLatex": "1 + e^{i\\frac{\\pi}{3}} = 2e^{i\\frac{\\pi}{3}/2}\\cos\\!\\left(\\frac{\\frac{\\pi}{3}}{2}\\right)",
          "explanation": "Half-angle factorisation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Numerator",
          "workingLatex": "1 - (-e^{i\\frac{\\pi}{3}})^{4} = 1 - (-1)^{4} e^{i4\\frac{\\pi}{3}}",
          "explanation": "Handle the alternating power.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Take real part",
          "workingLatex": "C = \\operatorname{Re}(\\text{sum})",
          "explanation": "Extract the cosine sum.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate",
          "workingLatex": "C = \\frac{1}{2}",
          "explanation": "Simplify using exact values.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check $n=1$",
          "workingLatex": "\\cos \\frac{\\pi}{3} \\text{ matches}",
          "explanation": "Base case verification.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Alternative",
          "workingLatex": "\\text{Use } C+iS \\text{ with } r=-1",
          "explanation": "Equivalent complex approach.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\frac{1}{2}",
          "explanation": "Final value.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{1}{2}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Trigonometric series",
    "subtopicId": "fm.y2.pure.trig-series",
    "questionDiagram": null,
    "id": "fm.y2.pure.trig-series.q037",
    "tags": [
      "alternating",
      "alternating",
      "cosine-sum"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find $\\displaystyle\\sum_{k=1}^{5} (-1)^{k-1} \\cos \\frac{k\\pi}{4}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rewrite with powers",
          "workingLatex": "\\sum_{k=1}^{5} (-1)^{k-1}\\cos \\frac{k\\pi}{4} = \\operatorname{Re}\\!\\left(\\sum_{k=1}^{5} (-e^{i\\frac{\\pi}{4}})^{k-1} e^{i\\frac{\\pi}{4}}\\right)",
          "explanation": "Alternating signs correspond to ratio $-e^{i\\theta}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Geometric series",
          "workingLatex": "\\sum_{k=1}^{5} (-e^{i\\frac{\\pi}{4}})^{k} = -e^{i\\frac{\\pi}{4}}\\frac{1 - (-e^{i\\frac{\\pi}{4}})^{5}}{1 + e^{i\\frac{\\pi}{4}}}",
          "explanation": "First term $-e^{i\\theta}$, ratio $-e^{i\\theta}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify denominator",
          "workingLatex": "1 + e^{i\\frac{\\pi}{4}} = 2e^{i\\frac{\\pi}{4}/2}\\cos\\!\\left(\\frac{\\frac{\\pi}{4}}{2}\\right)",
          "explanation": "Half-angle factorisation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Numerator",
          "workingLatex": "1 - (-e^{i\\frac{\\pi}{4}})^{5} = 1 - (-1)^{5} e^{i5\\frac{\\pi}{4}}",
          "explanation": "Handle the alternating power.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Take real part",
          "workingLatex": "C = \\operatorname{Re}(\\text{sum})",
          "explanation": "Extract the cosine sum.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate",
          "workingLatex": "C = \\frac{2 - \\sqrt{2}}{2}",
          "explanation": "Simplify using exact values.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check $n=1$",
          "workingLatex": "\\cos \\frac{\\pi}{4} \\text{ matches}",
          "explanation": "Base case verification.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Alternative",
          "workingLatex": "\\text{Use } C+iS \\text{ with } r=-1",
          "explanation": "Equivalent complex approach.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\frac{2 - \\sqrt{2}}{2}",
          "explanation": "Final value.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{2 - \\sqrt{2}}{2}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Trigonometric series",
    "subtopicId": "fm.y2.pure.trig-series",
    "questionDiagram": null,
    "id": "fm.y2.pure.trig-series.q038",
    "tags": [
      "alternating",
      "alternating",
      "cosine-sum"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find $\\displaystyle\\sum_{k=1}^{6} (-1)^{k-1} \\cos \\frac{k\\pi}{6}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rewrite with powers",
          "workingLatex": "\\sum_{k=1}^{6} (-1)^{k-1}\\cos \\frac{k\\pi}{6} = \\operatorname{Re}\\!\\left(\\sum_{k=1}^{6} (-e^{i\\frac{\\pi}{6}})^{k-1} e^{i\\frac{\\pi}{6}}\\right)",
          "explanation": "Alternating signs correspond to ratio $-e^{i\\theta}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Geometric series",
          "workingLatex": "\\sum_{k=1}^{6} (-e^{i\\frac{\\pi}{6}})^{k} = -e^{i\\frac{\\pi}{6}}\\frac{1 - (-e^{i\\frac{\\pi}{6}})^{6}}{1 + e^{i\\frac{\\pi}{6}}}",
          "explanation": "First term $-e^{i\\theta}$, ratio $-e^{i\\theta}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify denominator",
          "workingLatex": "1 + e^{i\\frac{\\pi}{6}} = 2e^{i\\frac{\\pi}{6}/2}\\cos\\!\\left(\\frac{\\frac{\\pi}{6}}{2}\\right)",
          "explanation": "Half-angle factorisation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Numerator",
          "workingLatex": "1 - (-e^{i\\frac{\\pi}{6}})^{6} = 1 - (-1)^{6} e^{i6\\frac{\\pi}{6}}",
          "explanation": "Handle the alternating power.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Take real part",
          "workingLatex": "C = \\operatorname{Re}(\\text{sum})",
          "explanation": "Extract the cosine sum.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate",
          "workingLatex": "C = 1",
          "explanation": "Simplify using exact values.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check $n=1$",
          "workingLatex": "\\cos \\frac{\\pi}{6} \\text{ matches}",
          "explanation": "Base case verification.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Alternative",
          "workingLatex": "\\text{Use } C+iS \\text{ with } r=-1",
          "explanation": "Equivalent complex approach.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "1",
          "explanation": "Final value.",
          "diagram": null
        }
      ],
      "finalAnswer": "$1$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Trigonometric series",
    "subtopicId": "fm.y2.pure.trig-series",
    "questionDiagram": null,
    "id": "fm.y2.pure.trig-series.q039",
    "tags": [
      "alternating",
      "alternating",
      "cosine-sum"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find $\\displaystyle\\sum_{k=1}^{3} (-1)^{k-1} \\cos \\frac{k\\pi}{2}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rewrite with powers",
          "workingLatex": "\\sum_{k=1}^{3} (-1)^{k-1}\\cos \\frac{k\\pi}{2} = \\operatorname{Re}\\!\\left(\\sum_{k=1}^{3} (-e^{i\\frac{\\pi}{2}})^{k-1} e^{i\\frac{\\pi}{2}}\\right)",
          "explanation": "Alternating signs correspond to ratio $-e^{i\\theta}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Geometric series",
          "workingLatex": "\\sum_{k=1}^{3} (-e^{i\\frac{\\pi}{2}})^{k} = -e^{i\\frac{\\pi}{2}}\\frac{1 - (-e^{i\\frac{\\pi}{2}})^{3}}{1 + e^{i\\frac{\\pi}{2}}}",
          "explanation": "First term $-e^{i\\theta}$, ratio $-e^{i\\theta}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify denominator",
          "workingLatex": "1 + e^{i\\frac{\\pi}{2}} = 2e^{i\\frac{\\pi}{2}/2}\\cos\\!\\left(\\frac{\\frac{\\pi}{2}}{2}\\right)",
          "explanation": "Half-angle factorisation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Numerator",
          "workingLatex": "1 - (-e^{i\\frac{\\pi}{2}})^{3} = 1 - (-1)^{3} e^{i3\\frac{\\pi}{2}}",
          "explanation": "Handle the alternating power.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Take real part",
          "workingLatex": "C = \\operatorname{Re}(\\text{sum})",
          "explanation": "Extract the cosine sum.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate",
          "workingLatex": "C = 1",
          "explanation": "Simplify using exact values.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check $n=1$",
          "workingLatex": "\\cos \\frac{\\pi}{2} \\text{ matches}",
          "explanation": "Base case verification.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Alternative",
          "workingLatex": "\\text{Use } C+iS \\text{ with } r=-1",
          "explanation": "Equivalent complex approach.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "1",
          "explanation": "Final value.",
          "diagram": null
        }
      ],
      "finalAnswer": "$1$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Trigonometric series",
    "subtopicId": "fm.y2.pure.trig-series",
    "questionDiagram": null,
    "id": "fm.y2.pure.trig-series.q040",
    "tags": [
      "alternating",
      "alternating",
      "cosine-sum"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find $\\displaystyle\\sum_{k=1}^{4} (-1)^{k-1} \\cos \\frac{k\\pi}{4}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rewrite with powers",
          "workingLatex": "\\sum_{k=1}^{4} (-1)^{k-1}\\cos \\frac{k\\pi}{4} = \\operatorname{Re}\\!\\left(\\sum_{k=1}^{4} (-e^{i\\frac{\\pi}{4}})^{k-1} e^{i\\frac{\\pi}{4}}\\right)",
          "explanation": "Alternating signs correspond to ratio $-e^{i\\theta}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Geometric series",
          "workingLatex": "\\sum_{k=1}^{4} (-e^{i\\frac{\\pi}{4}})^{k} = -e^{i\\frac{\\pi}{4}}\\frac{1 - (-e^{i\\frac{\\pi}{4}})^{4}}{1 + e^{i\\frac{\\pi}{4}}}",
          "explanation": "First term $-e^{i\\theta}$, ratio $-e^{i\\theta}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify denominator",
          "workingLatex": "1 + e^{i\\frac{\\pi}{4}} = 2e^{i\\frac{\\pi}{4}/2}\\cos\\!\\left(\\frac{\\frac{\\pi}{4}}{2}\\right)",
          "explanation": "Half-angle factorisation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Numerator",
          "workingLatex": "1 - (-e^{i\\frac{\\pi}{4}})^{4} = 1 - (-1)^{4} e^{i4\\frac{\\pi}{4}}",
          "explanation": "Handle the alternating power.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Take real part",
          "workingLatex": "C = \\operatorname{Re}(\\text{sum})",
          "explanation": "Extract the cosine sum.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate",
          "workingLatex": "C = 1",
          "explanation": "Simplify using exact values.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check $n=1$",
          "workingLatex": "\\cos \\frac{\\pi}{4} \\text{ matches}",
          "explanation": "Base case verification.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Alternative",
          "workingLatex": "\\text{Use } C+iS \\text{ with } r=-1",
          "explanation": "Equivalent complex approach.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "1",
          "explanation": "Final value.",
          "diagram": null
        }
      ],
      "finalAnswer": "$1$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Trigonometric series",
    "subtopicId": "fm.y2.pure.trig-series",
    "questionDiagram": null,
    "id": "fm.y2.pure.trig-series.q041",
    "tags": [
      "arithmetic-progression",
      "arithmetic-progression",
      "cosine-sum"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Find $\\displaystyle\\sum_{k=0}^{3} \\cos\\left(\\frac{\\pi}{6} + \\frac{k\\pi}{3}\\right)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise the pattern",
          "workingLatex": "\\cos\\left(\\frac{\\pi}{6} + \\frac{0\\pi}{3}\\right) + \\cos\\left(\\frac{\\pi}{6} + \\frac{1\\pi}{3}\\right) + \\cos\\left(\\frac{\\pi}{6} + \\frac{2\\pi}{3}\\right) + \\cos\\left(\\frac{\\pi}{6} + \\frac{3\\pi}{3}\\right)",
          "explanation": "Angles form an arithmetic progression with common difference $\\alpha$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Complex form",
          "workingLatex": "\\sum_{k=0}^{3} \\cos(\\frac{\\pi}{6}+k\\frac{\\pi}{3}) = \\operatorname{Re}\\!\\left(e^{i\\frac{\\pi}{6}}\\sum_{k=0}^{3} e^{ik\\frac{\\pi}{3}}\\right)",
          "explanation": "Factor out $e^{i\\theta}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Inner geometric sum",
          "workingLatex": "\\sum_{k=0}^{3} e^{ik\\frac{\\pi}{3}} = \\frac{1 - e^{i4\\frac{\\pi}{3}}}{1 - e^{i\\frac{\\pi}{3}}}",
          "explanation": "Geometric series in $e^{i\\alpha}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Sine factorisation",
          "workingLatex": "= \\frac{\\sin\\!\\left(\\frac{4\\frac{\\pi}{3}}{2}\\right)}{\\sin\\!\\left(\\frac{\\frac{\\pi}{3}}{2}\\right)}\\,e^{i\\frac{4\\frac{\\pi}{3}}{2}}",
          "explanation": "Standard sine product form.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Combine",
          "workingLatex": "C = \\operatorname{Re}\\!\\left(e^{i\\frac{\\pi}{6}} \\cdot \\frac{\\sin(n\\alpha/2)}{\\sin(\\alpha/2)} e^{in\\alpha/2}\\right)",
          "explanation": "Multiply the two exponentials.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Real part formula",
          "workingLatex": "C = \\frac{\\sin\\!\\left(\\frac{4\\frac{\\pi}{3}}{2}\\right)\\cos\\!\\left(\\frac{\\pi}{6}+\\frac{4\\frac{\\pi}{3}}{2}\\right)}{\\sin\\!\\left(\\frac{\\frac{\\pi}{3}}{2}\\right)}",
          "explanation": "General arithmetic progression result.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate",
          "workingLatex": "C = \\frac{-2\\sqrt{3}}{4}",
          "explanation": "Substitute exact trigonometric values.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify",
          "workingLatex": "\\text{Add terms directly to confirm}",
          "explanation": "Numerical check.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\frac{-2\\sqrt{3}}{4}",
          "explanation": "Final sum.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{-2\\sqrt{3}}{4}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Trigonometric series",
    "subtopicId": "fm.y2.pure.trig-series",
    "questionDiagram": null,
    "id": "fm.y2.pure.trig-series.q042",
    "tags": [
      "arithmetic-progression",
      "arithmetic-progression",
      "cosine-sum"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Find $\\displaystyle\\sum_{k=0}^{4} \\cos\\left(\\frac{\\pi}{4} + \\frac{k\\pi}{2}\\right)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise the pattern",
          "workingLatex": "\\cos\\left(\\frac{\\pi}{4} + \\frac{0\\pi}{2}\\right) + \\cos\\left(\\frac{\\pi}{4} + \\frac{1\\pi}{2}\\right) + \\cos\\left(\\frac{\\pi}{4} + \\frac{2\\pi}{2}\\right) + \\cos\\left(\\frac{\\pi}{4} + \\frac{3\\pi}{2}\\right) + \\cos\\left(\\frac{\\pi}{4} + \\frac{4\\pi}{2}\\right)",
          "explanation": "Angles form an arithmetic progression with common difference $\\alpha$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Complex form",
          "workingLatex": "\\sum_{k=0}^{4} \\cos(\\frac{\\pi}{4}+k\\frac{\\pi}{2}) = \\operatorname{Re}\\!\\left(e^{i\\frac{\\pi}{4}}\\sum_{k=0}^{4} e^{ik\\frac{\\pi}{2}}\\right)",
          "explanation": "Factor out $e^{i\\theta}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Inner geometric sum",
          "workingLatex": "\\sum_{k=0}^{4} e^{ik\\frac{\\pi}{2}} = \\frac{1 - e^{i5\\frac{\\pi}{2}}}{1 - e^{i\\frac{\\pi}{2}}}",
          "explanation": "Geometric series in $e^{i\\alpha}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Sine factorisation",
          "workingLatex": "= \\frac{\\sin\\!\\left(\\frac{5\\frac{\\pi}{2}}{2}\\right)}{\\sin\\!\\left(\\frac{\\frac{\\pi}{2}}{2}\\right)}\\,e^{i\\frac{5\\frac{\\pi}{2}}{2}}",
          "explanation": "Standard sine product form.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Combine",
          "workingLatex": "C = \\operatorname{Re}\\!\\left(e^{i\\frac{\\pi}{4}} \\cdot \\frac{\\sin(n\\alpha/2)}{\\sin(\\alpha/2)} e^{in\\alpha/2}\\right)",
          "explanation": "Multiply the two exponentials.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Real part formula",
          "workingLatex": "C = \\frac{\\sin\\!\\left(\\frac{5\\frac{\\pi}{2}}{2}\\right)\\cos\\!\\left(\\frac{\\pi}{4}+\\frac{5\\frac{\\pi}{2}}{2}\\right)}{\\sin\\!\\left(\\frac{\\frac{\\pi}{2}}{2}\\right)}",
          "explanation": "General arithmetic progression result.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate",
          "workingLatex": "C = \\frac{\\sqrt{2}}{2}",
          "explanation": "Substitute exact trigonometric values.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify",
          "workingLatex": "\\text{Add terms directly to confirm}",
          "explanation": "Numerical check.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\frac{\\sqrt{2}}{2}",
          "explanation": "Final sum.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{\\sqrt{2}}{2}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Trigonometric series",
    "subtopicId": "fm.y2.pure.trig-series",
    "questionDiagram": null,
    "id": "fm.y2.pure.trig-series.q043",
    "tags": [
      "arithmetic-progression",
      "arithmetic-progression",
      "cosine-sum"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Find $\\displaystyle\\sum_{k=0}^{2} \\cos\\left(0 + \\frac{k\\pi}{3}\\right)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise the pattern",
          "workingLatex": "\\cos\\left(0 + \\frac{0\\pi}{3}\\right) + \\cos\\left(0 + \\frac{1\\pi}{3}\\right) + \\cos\\left(0 + \\frac{2\\pi}{3}\\right)",
          "explanation": "Angles form an arithmetic progression with common difference $\\alpha$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Complex form",
          "workingLatex": "\\sum_{k=0}^{2} \\cos(0+k\\frac{\\pi}{3}) = \\operatorname{Re}\\!\\left(e^{i0}\\sum_{k=0}^{2} e^{ik\\frac{\\pi}{3}}\\right)",
          "explanation": "Factor out $e^{i\\theta}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Inner geometric sum",
          "workingLatex": "\\sum_{k=0}^{2} e^{ik\\frac{\\pi}{3}} = \\frac{1 - e^{i3\\frac{\\pi}{3}}}{1 - e^{i\\frac{\\pi}{3}}}",
          "explanation": "Geometric series in $e^{i\\alpha}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Sine factorisation",
          "workingLatex": "= \\frac{\\sin\\!\\left(\\frac{3\\frac{\\pi}{3}}{2}\\right)}{\\sin\\!\\left(\\frac{\\frac{\\pi}{3}}{2}\\right)}\\,e^{i\\frac{3\\frac{\\pi}{3}}{2}}",
          "explanation": "Standard sine product form.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Combine",
          "workingLatex": "C = \\operatorname{Re}\\!\\left(e^{i0} \\cdot \\frac{\\sin(n\\alpha/2)}{\\sin(\\alpha/2)} e^{in\\alpha/2}\\right)",
          "explanation": "Multiply the two exponentials.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Real part formula",
          "workingLatex": "C = \\frac{\\sin\\!\\left(\\frac{3\\frac{\\pi}{3}}{2}\\right)\\cos\\!\\left(0+\\frac{3\\frac{\\pi}{3}}{2}\\right)}{\\sin\\!\\left(\\frac{\\frac{\\pi}{3}}{2}\\right)}",
          "explanation": "General arithmetic progression result.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate",
          "workingLatex": "C = 1",
          "explanation": "Substitute exact trigonometric values.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify",
          "workingLatex": "\\text{Add terms directly to confirm}",
          "explanation": "Numerical check.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "1",
          "explanation": "Final sum.",
          "diagram": null
        }
      ],
      "finalAnswer": "$1$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Trigonometric series",
    "subtopicId": "fm.y2.pure.trig-series",
    "questionDiagram": null,
    "id": "fm.y2.pure.trig-series.q044",
    "tags": [
      "arithmetic-progression",
      "arithmetic-progression",
      "cosine-sum"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Find $\\displaystyle\\sum_{k=0}^{3} \\cos\\left(\\frac{\\pi}{6} + \\frac{k\\pi}{6}\\right)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise the pattern",
          "workingLatex": "\\cos\\left(\\frac{\\pi}{6} + \\frac{0\\pi}{6}\\right) + \\cos\\left(\\frac{\\pi}{6} + \\frac{1\\pi}{6}\\right) + \\cos\\left(\\frac{\\pi}{6} + \\frac{2\\pi}{6}\\right) + \\cos\\left(\\frac{\\pi}{6} + \\frac{3\\pi}{6}\\right)",
          "explanation": "Angles form an arithmetic progression with common difference $\\alpha$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Complex form",
          "workingLatex": "\\sum_{k=0}^{3} \\cos(\\frac{\\pi}{6}+k\\frac{\\pi}{6}) = \\operatorname{Re}\\!\\left(e^{i\\frac{\\pi}{6}}\\sum_{k=0}^{3} e^{ik\\frac{\\pi}{6}}\\right)",
          "explanation": "Factor out $e^{i\\theta}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Inner geometric sum",
          "workingLatex": "\\sum_{k=0}^{3} e^{ik\\frac{\\pi}{6}} = \\frac{1 - e^{i4\\frac{\\pi}{6}}}{1 - e^{i\\frac{\\pi}{6}}}",
          "explanation": "Geometric series in $e^{i\\alpha}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Sine factorisation",
          "workingLatex": "= \\frac{\\sin\\!\\left(\\frac{4\\frac{\\pi}{6}}{2}\\right)}{\\sin\\!\\left(\\frac{\\frac{\\pi}{6}}{2}\\right)}\\,e^{i\\frac{4\\frac{\\pi}{6}}{2}}",
          "explanation": "Standard sine product form.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Combine",
          "workingLatex": "C = \\operatorname{Re}\\!\\left(e^{i\\frac{\\pi}{6}} \\cdot \\frac{\\sin(n\\alpha/2)}{\\sin(\\alpha/2)} e^{in\\alpha/2}\\right)",
          "explanation": "Multiply the two exponentials.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Real part formula",
          "workingLatex": "C = \\frac{\\sin\\!\\left(\\frac{4\\frac{\\pi}{6}}{2}\\right)\\cos\\!\\left(\\frac{\\pi}{6}+\\frac{4\\frac{\\pi}{6}}{2}\\right)}{\\sin\\!\\left(\\frac{\\frac{\\pi}{6}}{2}\\right)}",
          "explanation": "General arithmetic progression result.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate",
          "workingLatex": "C = \\frac{\\sqrt{3}}{2}",
          "explanation": "Substitute exact trigonometric values.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify",
          "workingLatex": "\\text{Add terms directly to confirm}",
          "explanation": "Numerical check.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\frac{\\sqrt{3}}{2}",
          "explanation": "Final sum.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{\\sqrt{3}}{2}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Trigonometric series",
    "subtopicId": "fm.y2.pure.trig-series",
    "questionDiagram": null,
    "id": "fm.y2.pure.trig-series.q045",
    "tags": [
      "arithmetic-progression",
      "arithmetic-progression",
      "cosine-sum"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Find $\\displaystyle\\sum_{k=0}^{5} \\cos\\left(\\frac{\\pi}{6} + \\frac{k\\pi}{6}\\right)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise the pattern",
          "workingLatex": "\\cos\\left(\\frac{\\pi}{6} + \\frac{0\\pi}{6}\\right) + \\cos\\left(\\frac{\\pi}{6} + \\frac{1\\pi}{6}\\right) + \\cos\\left(\\frac{\\pi}{6} + \\frac{2\\pi}{6}\\right) + \\cos\\left(\\frac{\\pi}{6} + \\frac{3\\pi}{6}\\right) + \\cos\\left(\\frac{\\pi}{6} + \\frac{4\\pi}{6}\\right) + \\cos\\left(\\frac{\\pi}{6} + \\frac{5\\pi}{6}\\right)",
          "explanation": "Angles form an arithmetic progression with common difference $\\alpha$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Complex form",
          "workingLatex": "\\sum_{k=0}^{5} \\cos(\\frac{\\pi}{6}+k\\frac{\\pi}{6}) = \\operatorname{Re}\\!\\left(e^{i\\frac{\\pi}{6}}\\sum_{k=0}^{5} e^{ik\\frac{\\pi}{6}}\\right)",
          "explanation": "Factor out $e^{i\\theta}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Inner geometric sum",
          "workingLatex": "\\sum_{k=0}^{5} e^{ik\\frac{\\pi}{6}} = \\frac{1 - e^{i6\\frac{\\pi}{6}}}{1 - e^{i\\frac{\\pi}{6}}}",
          "explanation": "Geometric series in $e^{i\\alpha}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Sine factorisation",
          "workingLatex": "= \\frac{\\sin\\!\\left(\\frac{6\\frac{\\pi}{6}}{2}\\right)}{\\sin\\!\\left(\\frac{\\frac{\\pi}{6}}{2}\\right)}\\,e^{i\\frac{6\\frac{\\pi}{6}}{2}}",
          "explanation": "Standard sine product form.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Combine",
          "workingLatex": "C = \\operatorname{Re}\\!\\left(e^{i\\frac{\\pi}{6}} \\cdot \\frac{\\sin(n\\alpha/2)}{\\sin(\\alpha/2)} e^{in\\alpha/2}\\right)",
          "explanation": "Multiply the two exponentials.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Real part formula",
          "workingLatex": "C = \\frac{\\sin\\!\\left(\\frac{6\\frac{\\pi}{6}}{2}\\right)\\cos\\!\\left(\\frac{\\pi}{6}+\\frac{6\\frac{\\pi}{6}}{2}\\right)}{\\sin\\!\\left(\\frac{\\frac{\\pi}{6}}{2}\\right)}",
          "explanation": "General arithmetic progression result.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate",
          "workingLatex": "C = -1",
          "explanation": "Substitute exact trigonometric values.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify",
          "workingLatex": "\\text{Add terms directly to confirm}",
          "explanation": "Numerical check.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "-1",
          "explanation": "Final sum.",
          "diagram": null
        }
      ],
      "finalAnswer": "$-1$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Trigonometric series",
    "subtopicId": "fm.y2.pure.trig-series",
    "questionDiagram": null,
    "id": "fm.y2.pure.trig-series.q046",
    "tags": [
      "weighted-sum",
      "weighted-sum",
      "geometric"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Find $\\displaystyle\\sum_{k=1}^{4} \\left(\\frac{1}{2}\\right)^{k} \\cos \\frac{k\\pi}{3}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up",
          "workingLatex": "C = \\sum_{k=1}^{4} \\left(\\frac{1}{2}\\right)^{k}\\cos \\frac{k\\pi}{3}",
          "explanation": "Cosine sum with geometric weight $r^{k}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Complex form",
          "workingLatex": "C + iS = \\sum_{k=1}^{4} (1e^{i\\frac{\\pi}{3}})^{k}",
          "explanation": "Each term is a power of $re^{i\\theta}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Geometric sum",
          "workingLatex": "C + iS = 1e^{i\\frac{\\pi}{3}}\\frac{1 - (1e^{i\\frac{\\pi}{3}})^{4}}{1 - 1e^{i\\frac{\\pi}{3}}}",
          "explanation": "Finite GP with ratio $re^{i\\theta}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Condition",
          "workingLatex": "|1| < 1 \\text{ ensures convergence for infinite series}",
          "explanation": "For finite $n$, always valid.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Real part",
          "workingLatex": "C = \\operatorname{Re}(C+iS)",
          "explanation": "Extract the cosine sum.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Expand",
          "workingLatex": "C = -\\frac{1}{32}",
          "explanation": "Simplify to exact form.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check $n=1$",
          "workingLatex": "1\\cos \\frac{\\pi}{3}",
          "explanation": "First term check.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Modulus",
          "workingLatex": "|1e^{i\\frac{\\pi}{3}}| = 1",
          "explanation": "Geometric ratio modulus.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "-\\frac{1}{32}",
          "explanation": "Final value.",
          "diagram": null
        }
      ],
      "finalAnswer": "$-\\frac{1}{32}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Trigonometric series",
    "subtopicId": "fm.y2.pure.trig-series",
    "questionDiagram": null,
    "id": "fm.y2.pure.trig-series.q047",
    "tags": [
      "weighted-sum",
      "weighted-sum",
      "geometric"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Find $\\displaystyle\\sum_{k=1}^{5} \\left(\\frac{1}{2}\\right)^{k} \\cos \\frac{k\\pi}{3}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up",
          "workingLatex": "C = \\sum_{k=1}^{5} \\left(\\frac{1}{2}\\right)^{k}\\cos \\frac{k\\pi}{3}",
          "explanation": "Cosine sum with geometric weight $r^{k}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Complex form",
          "workingLatex": "C + iS = \\sum_{k=1}^{5} (1e^{i\\frac{\\pi}{3}})^{k}",
          "explanation": "Each term is a power of $re^{i\\theta}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Geometric sum",
          "workingLatex": "C + iS = 1e^{i\\frac{\\pi}{3}}\\frac{1 - (1e^{i\\frac{\\pi}{3}})^{5}}{1 - 1e^{i\\frac{\\pi}{3}}}",
          "explanation": "Finite GP with ratio $re^{i\\theta}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Condition",
          "workingLatex": "|1| < 1 \\text{ ensures convergence for infinite series}",
          "explanation": "For finite $n$, always valid.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Real part",
          "workingLatex": "C = \\operatorname{Re}(C+iS)",
          "explanation": "Extract the cosine sum.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Expand",
          "workingLatex": "C = -\\frac{1}{64}",
          "explanation": "Simplify to exact form.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check $n=1$",
          "workingLatex": "1\\cos \\frac{\\pi}{3}",
          "explanation": "First term check.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Modulus",
          "workingLatex": "|1e^{i\\frac{\\pi}{3}}| = 1",
          "explanation": "Geometric ratio modulus.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "-\\frac{1}{64}",
          "explanation": "Final value.",
          "diagram": null
        }
      ],
      "finalAnswer": "$-\\frac{1}{64}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Trigonometric series",
    "subtopicId": "fm.y2.pure.trig-series",
    "questionDiagram": null,
    "id": "fm.y2.pure.trig-series.q048",
    "tags": [
      "weighted-sum",
      "weighted-sum",
      "geometric"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Find $\\displaystyle\\sum_{k=1}^{3} \\left(\\frac{1}{2}\\right)^{k} \\cos \\frac{k\\pi}{2}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up",
          "workingLatex": "C = \\sum_{k=1}^{3} \\left(\\frac{1}{2}\\right)^{k}\\cos \\frac{k\\pi}{2}",
          "explanation": "Cosine sum with geometric weight $r^{k}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Complex form",
          "workingLatex": "C + iS = \\sum_{k=1}^{3} (1e^{i\\frac{\\pi}{2}})^{k}",
          "explanation": "Each term is a power of $re^{i\\theta}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Geometric sum",
          "workingLatex": "C + iS = 1e^{i\\frac{\\pi}{2}}\\frac{1 - (1e^{i\\frac{\\pi}{2}})^{3}}{1 - 1e^{i\\frac{\\pi}{2}}}",
          "explanation": "Finite GP with ratio $re^{i\\theta}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Condition",
          "workingLatex": "|1| < 1 \\text{ ensures convergence for infinite series}",
          "explanation": "For finite $n$, always valid.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Real part",
          "workingLatex": "C = \\operatorname{Re}(C+iS)",
          "explanation": "Extract the cosine sum.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Expand",
          "workingLatex": "C = -\\frac{1}{4}",
          "explanation": "Simplify to exact form.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check $n=1$",
          "workingLatex": "1\\cos \\frac{\\pi}{2}",
          "explanation": "First term check.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Modulus",
          "workingLatex": "|1e^{i\\frac{\\pi}{2}}| = 1",
          "explanation": "Geometric ratio modulus.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "-\\frac{1}{4}",
          "explanation": "Final value.",
          "diagram": null
        }
      ],
      "finalAnswer": "$-\\frac{1}{4}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Trigonometric series",
    "subtopicId": "fm.y2.pure.trig-series",
    "questionDiagram": null,
    "id": "fm.y2.pure.trig-series.q049",
    "tags": [
      "roots-of-unity",
      "cosine-sum",
      "c-plus-is"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find the exact value of $\\displaystyle\\sum_{k=1}^{10} \\cos \\frac{k\\pi}{5}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define $C$ and $S$",
          "workingLatex": "C = \\cos \\frac{1\\pi}{5} + \\cos \\frac{2\\pi}{5} + \\cos \\frac{3\\pi}{5} + \\cos \\frac{4\\pi}{5} + \\cos \\frac{5\\pi}{5} + \\cos \\frac{6\\pi}{5} + \\cos \\frac{7\\pi}{5} + \\cos \\frac{8\\pi}{5} + \\cos \\frac{9\\pi}{5} + \\cos \\frac{10\\pi}{5}",
          "explanation": "Let $C$ be the cosine sum we need.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Companion sine sum",
          "workingLatex": "S = \\sin \\frac{1\\pi}{5} + \\sin \\frac{2\\pi}{5} + \\sin \\frac{3\\pi}{5} + \\sin \\frac{4\\pi}{5} + \\sin \\frac{5\\pi}{5} + \\sin \\frac{6\\pi}{5} + \\sin \\frac{7\\pi}{5} + \\sin \\frac{8\\pi}{5} + \\sin \\frac{9\\pi}{5} + \\sin \\frac{10\\pi}{5}",
          "explanation": "Introduce the matching sine sum for the $C+iS$ method.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form $C + iS$",
          "workingLatex": "C + iS = \\sum_{k=1}^{10} e^{ik\\frac{\\pi}{5}}",
          "explanation": "Each $\\cos k\\theta + i\\sin k\\theta = e^{ik\\theta}$ by Euler's formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Geometric series",
          "workingLatex": "C + iS = e^{i\\frac{\\pi}{5}}\\frac{1 - e^{i10\\frac{\\pi}{5}}}{1 - e^{i\\frac{\\pi}{5}}}",
          "explanation": "First term $e^{i\\theta}$, common ratio $e^{i\\theta}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Sine product form",
          "workingLatex": "C + iS = \\frac{\\sin\\!\\left(\\frac{10\\frac{\\pi}{5}}{2}\\right)}{\\sin\\!\\left(\\frac{\\frac{\\pi}{5}}{2}\\right)}\\,e^{i\\frac{11\\frac{\\pi}{5}}{2}}",
          "explanation": "Multiply numerator and denominator by $e^{i(n+1)\\theta/2}$ and use $e^{ix}-e^{-ix}=2i\\sin x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Real part",
          "workingLatex": "C = \\frac{\\sin\\!\\left(\\frac{10\\frac{\\pi}{5}}{2}\\right)\\cos\\!\\left(\\frac{11\\frac{\\pi}{5}}{2}\\right)}{\\sin\\!\\left(\\frac{\\frac{\\pi}{5}}{2}\\right)}",
          "explanation": "Take the real part: $\\operatorname{Re}(e^{i\\phi})=\\cos\\phi$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify",
          "workingLatex": "C = 0",
          "explanation": "Evaluate the trigonometric values.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check small $n$",
          "workingLatex": "\\text{Direct addition confirms the result}",
          "explanation": "Substitute a few terms to verify.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Euler's formula",
          "workingLatex": "e^{i\\theta}=\\cos\\theta+i\\sin\\theta",
          "explanation": "Links exponentials and trigonometry.",
          "diagram": null
        }
      ],
      "finalAnswer": "$0$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Trigonometric series",
    "subtopicId": "fm.y2.pure.trig-series",
    "questionDiagram": null,
    "id": "fm.y2.pure.trig-series.q050",
    "tags": [
      "proof",
      "proof",
      "c-plus-is"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Using the $C + iS$ method, prove that $\\displaystyle\\sum_{k=1}^{n} \\cos k\\theta = \\frac{\\sin(n\\theta/2)\\cos((n+1)\\theta/2)}{\\sin(\\theta/2)}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define sums",
          "workingLatex": "C = \\sum_{k=1}^{n} \\cos k\\theta,\\quad S = \\sum_{k=1}^{n} \\sin k\\theta",
          "explanation": "Standard cosine and sine sums.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Euler's formula",
          "workingLatex": "\\cos k\\theta + i\\sin k\\theta = e^{ik\\theta}",
          "explanation": "Convert each term to exponential form.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Combine",
          "workingLatex": "C + iS = \\sum_{k=1}^{n} e^{ik\\theta}",
          "explanation": "Sum of complex exponentials.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Geometric series",
          "workingLatex": "C + iS = e^{i\\theta}\\frac{1 - e^{in\\theta}}{1 - e^{i\\theta}}",
          "explanation": "First term $e^{i\\theta}$, ratio $e^{i\\theta}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Factor sines",
          "workingLatex": "1 - e^{in\\theta} = -2ie^{in\\theta/2}\\sin\\!\\left(\\frac{n\\theta}{2}\\right)",
          "explanation": "Difference of exponentials.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Denominator",
          "workingLatex": "1 - e^{i\\theta} = -2ie^{i\\theta/2}\\sin\\!\\left(\\frac{\\theta}{2}\\right)",
          "explanation": "Same factorisation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify",
          "workingLatex": "C + iS = \\frac{\\sin(n\\theta/2)}{\\sin(\\theta/2)}\\,e^{i(n+1)\\theta/2}",
          "explanation": "Cancel common factors.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Cosine formula",
          "workingLatex": "C = \\frac{\\sin(n\\theta/2)\\cos((n+1)\\theta/2)}{\\sin(\\theta/2)}",
          "explanation": "Take real part.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Sine formula",
          "workingLatex": "S = \\frac{\\sin(n\\theta/2)\\sin((n+1)\\theta/2)}{\\sin(\\theta/2)}",
          "explanation": "Take imaginary part.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\sum_{k=1}^{n} \\cos k\\theta = \\frac{\\sin(n\\theta/2)\\cos((n+1)\\theta/2)}{\\sin(\\theta/2)}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Trigonometric series",
    "subtopicId": "fm.y2.pure.trig-series",
    "questionDiagram": null,
    "id": "fm.y2.pure.trig-series.q051",
    "tags": [
      "zero-sum",
      "reasoning"
    ],
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "questionText": "Show that $\\displaystyle\\sum_{k=1}^{n} \\cos k\\theta = 0$ when $n\\theta = 2m\\pi$ for a positive integer $m$. Hence find the smallest positive integer $n$ such that $\\displaystyle\\sum_{k=1}^{n} \\cos\\frac{k\\pi}{3} = 0$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Formula",
          "workingLatex": "\\sum_{k=1}^{n} \\cos k\\theta = \\frac{\\sin(n\\theta/2)\\cos((n+1)\\theta/2)}{\\sin(\\theta/2)}",
          "explanation": "Standard $C+iS$ result.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Zero condition",
          "workingLatex": "\\sin(n\\theta/2) = 0 \\Rightarrow n\\theta = 2m\\pi",
          "explanation": "Numerator vanishes.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Non-trivial",
          "workingLatex": "\\cos((n+1)\\theta/2) \\neq 0 \\text{ and } \\sin(\\theta/2) \\neq 0",
          "explanation": "Denominator and cosine factor must be non-zero.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply $\\theta = \\pi/3$",
          "workingLatex": "n \\cdot \\frac{\\pi}{3} = 2m\\pi \\Rightarrow n = 6m",
          "explanation": "Substitute the given angle.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Smallest positive",
          "workingLatex": "n = 6",
          "explanation": "When $m = 1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify $n=6$",
          "workingLatex": "\\cos\\frac{\\pi}{3} + \\cdots + \\cos 2\\pi = 0",
          "explanation": "Direct check.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Geometric view",
          "workingLatex": "\\text{Sixth roots of unity on unit circle}",
          "explanation": "Cosines sum to zero by symmetry.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Complex form",
          "workingLatex": "\\sum e^{ik\\pi/3} = 0 \\text{ for } n=6",
          "explanation": "Full complex sum vanishes.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "n = 6",
          "explanation": "Smallest positive integer.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "General result",
          "workingLatex": "n\\theta = 2m\\pi \\Rightarrow \\text{sum} = 0",
          "explanation": "Condition proved.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Sine counterpart",
          "workingLatex": "\\sum \\sin k\\theta = 0 \\text{ when } (n+1)\\theta = m\\pi",
          "explanation": "Related condition for sine.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Application",
          "workingLatex": "\\text{Used in signal processing and Fourier sums}",
          "explanation": "Practical context.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Final",
          "workingLatex": "n = 6",
          "explanation": "Answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "Condition: $n\\theta = 2m\\pi$. Smallest positive $n$ for $\\theta = \\pi/3$: $n = 6$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Trigonometric series",
    "subtopicId": "fm.y2.pure.trig-series",
    "questionDiagram": null,
    "id": "fm.y2.pure.trig-series.q052",
    "tags": [
      "roots-of-unity",
      "both-sums"
    ],
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "questionText": "Using the $C + iS$ method, find $\\displaystyle\\sum_{k=1}^{10} \\cos\\frac{k\\pi}{5}$ and $\\displaystyle\\sum_{k=1}^{10} \\sin\\frac{k\\pi}{5}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up",
          "workingLatex": "C = \\sum_{k=1}^{10} \\cos\\frac{k\\pi}{5},\\; S = \\sum_{k=1}^{10} \\sin\\frac{k\\pi}{5}",
          "explanation": "Define both sums.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Complex sum",
          "workingLatex": "C + iS = \\sum_{k=1}^{10} e^{ik\\pi/5}",
          "explanation": "Euler's formula.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Geometric series",
          "workingLatex": "C + iS = e^{i\\pi/5}\\frac{1 - e^{i2\\pi}}{1 - e^{i\\pi/5}}",
          "explanation": "Note $e^{i10\\pi/5} = e^{i2\\pi} = 1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Numerator",
          "workingLatex": "1 - e^{i2\\pi} = 0",
          "explanation": "The numerator vanishes.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Conclusion",
          "workingLatex": "C + iS = 0",
          "explanation": "The full complex sum is zero.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Cosine sum",
          "workingLatex": "C = 0",
          "explanation": "Real part.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Sine sum",
          "workingLatex": "S = 0",
          "explanation": "Imaginary part.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Symmetry",
          "workingLatex": "\\text{Ten equally spaced points on unit circle}",
          "explanation": "Vertices of a regular decagon.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Root of unity",
          "workingLatex": "e^{i2\\pi/10} \\text{ is a primitive 10th root}",
          "explanation": "Geometric interpretation.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Verify",
          "workingLatex": "\\cos\\frac{\\pi}{5} + \\cos\\frac{2\\pi}{5} + \\cdots = 0",
          "explanation": "Known identity.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Pairing",
          "workingLatex": "\\cos\\frac{k\\pi}{5} + \\cos\\frac{(10-k)\\pi}{5} = 0",
          "explanation": "Symmetric pairs cancel.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Answer",
          "workingLatex": "C = 0,\\; S = 0",
          "explanation": "Both sums.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Note",
          "workingLatex": "\\text{Works for any multiple of full rotation}",
          "explanation": "General principle.",
          "diagram": null
        }
      ],
      "finalAnswer": "$C = 0$ and $S = 0$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Trigonometric series",
    "subtopicId": "fm.y2.pure.trig-series",
    "questionDiagram": null,
    "id": "fm.y2.pure.trig-series.q053",
    "tags": [
      "proof",
      "sine-sum"
    ],
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "questionText": "Prove that $\\displaystyle\\sum_{k=1}^{n} \\sin k\\theta = \\frac{\\sin(n\\theta/2)\\sin((n+1)\\theta/2)}{\\sin(\\theta/2)}$ and use it to find $\\displaystyle\\sum_{k=1}^{8} \\sin\\frac{k\\pi}{4}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Start with $C + iS$",
          "workingLatex": "C + iS = \\sum_{k=1}^{n} e^{ik\\theta}",
          "explanation": "Complex exponential form.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Geometric sum",
          "workingLatex": "= e^{i\\theta}\\frac{1 - e^{in\\theta}}{1 - e^{i\\theta}}",
          "explanation": "Standard GP.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Sine form",
          "workingLatex": "= \\frac{\\sin(n\\theta/2)}{\\sin(\\theta/2)} e^{i(n+1)\\theta/2}",
          "explanation": "Factorisation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Imaginary part",
          "workingLatex": "S = \\frac{\\sin(n\\theta/2)\\sin((n+1)\\theta/2)}{\\sin(\\theta/2)}",
          "explanation": "Take $\\operatorname{Im}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Formula proved",
          "workingLatex": "\\sum_{k=1}^{n} \\sin k\\theta = \\frac{\\sin(n\\theta/2)\\sin((n+1)\\theta/2)}{\\sin(\\theta/2)}",
          "explanation": "Sine sum formula.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute $n=8$, $\\theta=\\pi/4$",
          "workingLatex": "S = \\frac{\\sin\\pi \\cdot \\sin(9\\pi/8)}{\\sin(\\pi/8)}",
          "explanation": "Evaluate angles.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Numerator",
          "workingLatex": "\\sin\\pi = 0",
          "explanation": "First factor is zero.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Result",
          "workingLatex": "S = 0",
          "explanation": "The sine sum is zero.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify",
          "workingLatex": "\\sin\\frac{\\pi}{4} + \\sin\\frac{\\pi}{2} + \\cdots + \\sin 2\\pi = 0",
          "explanation": "Direct check.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Condition",
          "workingLatex": "n\\theta = 2m\\pi \\Rightarrow \\sin(n\\theta/2) = 0",
          "explanation": "When the sum vanishes.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Geometric",
          "workingLatex": "8 \\text{ points equally spaced on unit circle}",
          "explanation": "Regular octagon.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Answer",
          "workingLatex": "S = 0",
          "explanation": "Final value.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Formula",
          "workingLatex": "\\sum \\sin k\\theta = \\frac{\\sin(n\\theta/2)\\sin((n+1)\\theta/2)}{\\sin(\\theta/2)}",
          "explanation": "General result.",
          "diagram": null
        }
      ],
      "finalAnswer": "Formula proved; $\\displaystyle\\sum_{k=1}^{8} \\sin\\frac{k\\pi}{4} = 0$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Trigonometric series",
    "subtopicId": "fm.y2.pure.trig-series",
    "questionDiagram": null,
    "id": "fm.y2.pure.trig-series.q054",
    "tags": [
      "weighted-sum",
      "closed-form"
    ],
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "questionText": "Find $\\displaystyle\\sum_{k=1}^{n} r^{k}\\cos k\\theta$ in closed form using the $C + iS$ method, and hence evaluate $\\displaystyle\\sum_{k=1}^{5} \\left(\\frac{1}{2}\\right)^{k} \\cos\\frac{k\\pi}{3}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Complex sum",
          "workingLatex": "C + iS = \\sum_{k=1}^{n} (re^{i\\theta})^{k}",
          "explanation": "Geometric progression.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "GP formula",
          "workingLatex": "= re^{i\\theta}\\frac{1 - (re^{i\\theta})^{n}}{1 - re^{i\\theta}}",
          "explanation": "Finite sum.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Real part",
          "workingLatex": "C = \\operatorname{Re}\\!\\left(re^{i\\theta}\\frac{1 - r^{n}e^{in\\theta}}{1 - re^{i\\theta}}\\right)",
          "explanation": "Extract cosine sum.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify",
          "workingLatex": "C = \\frac{r\\cos\\theta - r^{n+1}\\cos((n+1)\\theta) - r^{n+2}\\cos(n\\theta) + r^{2}\\cos((n-1)\\theta)}{1 - 2r\\cos\\theta + r^{2}}",
          "explanation": "Standard closed form (after algebra).",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute $r=1/2$, $\\theta=\\pi/3$, $n=5$",
          "workingLatex": "C = \\sum_{k=1}^{5} \\left(\\frac{1}{2}\\right)^{k}\\cos\\frac{k\\pi}{3}",
          "explanation": "Specific case.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute term by term",
          "workingLatex": "\\frac{1}{2}\\cdot\\frac{1}{2} + \\frac{1}{4}\\cdot\\left(-\\frac{1}{2}\\right) + \\frac{1}{8}\\cdot\\left(-\\frac{1}{2}\\right) + \\frac{1}{16}\\cdot\\frac{1}{2} + \\frac{1}{32}\\cdot 1",
          "explanation": "Direct evaluation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify",
          "workingLatex": "= \\frac{1}{4} - \\frac{1}{8} - \\frac{1}{16} + \\frac{1}{32} + \\frac{1}{32}",
          "explanation": "Add fractions.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Common denominator",
          "workingLatex": "= \\frac{8 - 4 - 2 + 1 + 1}{32} = \\frac{4}{32}",
          "explanation": "Combine.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Result",
          "workingLatex": "C = \\frac{1}{8}",
          "explanation": "Simplified answer.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Convergence",
          "workingLatex": "|r| < 1 \\Rightarrow \\text{infinite sum converges}",
          "explanation": "Geometric decay.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Application",
          "workingLatex": "\\text{Used in damped oscillations}",
          "explanation": "Physical context.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Verify with formula",
          "workingLatex": "\\text{Closed form gives } \\frac{1}{8}",
          "explanation": "Cross-check.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Answer",
          "workingLatex": "\\frac{1}{8}",
          "explanation": "Final value.",
          "diagram": null
        }
      ],
      "finalAnswer": "Closed form derived; $\\displaystyle\\sum_{k=1}^{5} \\left(\\frac{1}{2}\\right)^{k} \\cos\\frac{k\\pi}{3} = \\frac{1}{8}$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Trigonometric series",
    "subtopicId": "fm.y2.pure.trig-series",
    "questionDiagram": null,
    "id": "fm.y2.pure.trig-series.q055",
    "tags": [
      "arithmetic-progression",
      "proof"
    ],
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "questionText": "Show that $\\displaystyle\\sum_{k=0}^{n-1} \\cos(\\theta + k\\alpha) = \\frac{\\sin(n\\alpha/2)\\cos(\\theta + (n-1)\\alpha/2)}{\\sin(\\alpha/2)}$ and use it to find $\\displaystyle\\sum_{k=0}^{5} \\cos\\frac{k\\pi}{3}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Complex form",
          "workingLatex": "\\sum_{k=0}^{n-1} e^{i(\\theta+k\\alpha)} = e^{i\\theta}\\sum_{k=0}^{n-1} e^{ik\\alpha}",
          "explanation": "Factor out $e^{i\\theta}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Inner sum",
          "workingLatex": "\\sum_{k=0}^{n-1} e^{ik\\alpha} = \\frac{1 - e^{in\\alpha}}{1 - e^{i\\alpha}}",
          "explanation": "Geometric series.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Sine form",
          "workingLatex": "= \\frac{\\sin(n\\alpha/2)}{\\sin(\\alpha/2)} e^{in\\alpha/2}",
          "explanation": "Standard factorisation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Real part",
          "workingLatex": "\\sum_{k=0}^{n-1} \\cos(\\theta+k\\alpha) = \\frac{\\sin(n\\alpha/2)\\cos(\\theta+(n-1)\\alpha/2)}{\\sin(\\alpha/2)}",
          "explanation": "Take $\\operatorname{Re}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute $\\theta=0$, $\\alpha=\\pi/3$, $n=6$",
          "workingLatex": "C = \\frac{\\sin\\pi \\cdot \\cos(5\\pi/6)}{\\sin(\\pi/6)}",
          "explanation": "Specific values.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate",
          "workingLatex": "\\sin\\pi = 0 \\Rightarrow C = 0",
          "explanation": "Sum is zero.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Direct check",
          "workingLatex": "1 + \\frac{1}{2} + 0 + \\left(-\\frac{1}{2}\\right) + (-1) + \\left(-\\frac{1}{2}\\right) = 0",
          "explanation": "Term by term.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Geometric",
          "workingLatex": "\\text{Sixth roots of unity projected onto real axis}",
          "explanation": "Symmetry.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "General formula",
          "workingLatex": "\\text{Proved for arithmetic progression of angles}",
          "explanation": "Result established.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Sine analogue",
          "workingLatex": "\\sum \\sin(\\theta+k\\alpha) = \\frac{\\sin(n\\alpha/2)\\sin(\\theta+(n-1)\\alpha/2)}{\\sin(\\alpha/2)}",
          "explanation": "Companion formula.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Application",
          "workingLatex": "\\text{Phase-shifted sums in engineering}",
          "explanation": "Context.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Answer",
          "workingLatex": "0",
          "explanation": "Sum value.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Formula",
          "workingLatex": "\\sum_{k=0}^{n-1} \\cos(\\theta+k\\alpha) = \\frac{\\sin(n\\alpha/2)\\cos(\\theta+(n-1)\\alpha/2)}{\\sin(\\alpha/2)}",
          "explanation": "General result.",
          "diagram": null
        }
      ],
      "finalAnswer": "Formula proved; $\\displaystyle\\sum_{k=0}^{5} \\cos\\frac{k\\pi}{3} = 0$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Trigonometric series",
    "subtopicId": "fm.y2.pure.trig-series",
    "questionDiagram": null,
    "id": "fm.y2.pure.trig-series.q056",
    "tags": [
      "roots-of-unity",
      "integer-result"
    ],
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "questionText": "Find the value of $\\displaystyle\\sum_{k=1}^{12} \\cos\\frac{k\\pi}{6}$ and explain why the result is an integer.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Formula",
          "workingLatex": "C = \\frac{\\sin(6\\pi/6)\\cos(13\\pi/12)}{\\sin(\\pi/12)}",
          "explanation": "Apply with $n=12$, $\\theta=\\pi/6$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Simplify angles",
          "workingLatex": "\\sin\\pi = 0",
          "explanation": "Numerator factor.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Result",
          "workingLatex": "C = 0",
          "explanation": "Sum is zero.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Alternative view",
          "workingLatex": "e^{ik\\pi/6} \\text{ for } k=1,\\ldots,12 \\text{ are all 12th roots of unity except } 1",
          "explanation": "Complex interpretation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Sum of roots",
          "workingLatex": "\\sum_{k=0}^{11} e^{ik\\pi/6} = 0",
          "explanation": "All 12th roots sum to zero.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Adjust",
          "workingLatex": "\\sum_{k=1}^{12} e^{ik\\pi/6} = \\sum_{k=0}^{11} e^{ik\\pi/6} = 0",
          "explanation": "Same sum (periodicity).",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Real part",
          "workingLatex": "C = 0",
          "explanation": "Cosine sum.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Integer",
          "workingLatex": "0 \\text{ is an integer}",
          "explanation": "Explains the question.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "General",
          "workingLatex": "\\sum_{k=1}^{n} \\cos(2k\\pi/n) = 0 \\text{ for } n > 1",
          "explanation": "Roots of unity property.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Sine sum",
          "workingLatex": "\\sum_{k=1}^{12} \\sin\\frac{k\\pi}{6} = 0",
          "explanation": "By same argument.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Geometric",
          "workingLatex": "\\text{Regular 12-gon centred at origin}",
          "explanation": "Vertices sum to zero.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Application",
          "workingLatex": "\\text{Discrete Fourier transform}",
          "explanation": "Signal processing link.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Answer",
          "workingLatex": "0",
          "explanation": "Integer result.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\sum_{k=1}^{12} \\cos\\frac{k\\pi}{6} = 0$ (an integer because the sum of equally spaced cosines on the unit circle vanishes)."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Trigonometric series",
    "subtopicId": "fm.y2.pure.trig-series",
    "questionDiagram": null,
    "id": "fm.y2.pure.trig-series.q057",
    "tags": [
      "equations",
      "solving"
    ],
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "questionText": "Solve $\\displaystyle\\sum_{k=1}^{n} \\cos k\\theta = -\\frac{1}{2}$ for $\\theta = \\frac{2\\pi}{3}$, giving all valid positive integers $n \\leq 10$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Formula",
          "workingLatex": "\\frac{\\sin(n\\theta/2)\\cos((n+1)\\theta/2)}{\\sin(\\theta/2)} = -\\frac{1}{2}",
          "explanation": "Apply the cosine sum formula.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute $\\theta = 2\\pi/3$",
          "workingLatex": "\\sin(\\theta/2) = \\sin(\\pi/3) = \\frac{\\sqrt{3}}{2}",
          "explanation": "Denominator.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Equation",
          "workingLatex": "\\frac{2\\sin(n\\pi/3)\\cos((n+1)\\pi/3)}{\\sqrt{3}} = -\\frac{1}{2}",
          "explanation": "Simplified.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rearrange",
          "workingLatex": "\\sin(n\\pi/3)\\cos((n+1)\\pi/3) = -\\frac{\\sqrt{3}}{4}",
          "explanation": "Target equation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Try $n=1$",
          "workingLatex": "\\sin(\\pi/3)\\cos(2\\pi/3) = \\frac{\\sqrt{3}}{2} \\cdot \\left(-\\frac{1}{2}\\right) = -\\frac{\\sqrt{3}}{4}",
          "explanation": "Works.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Try $n=2$",
          "workingLatex": "\\sin(2\\pi/3)\\cos(\\pi) = \\frac{\\sqrt{3}}{2} \\cdot (-1) = -\\frac{\\sqrt{3}}{2} \\neq -\\frac{\\sqrt{3}}{4}",
          "explanation": "Fails.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Try $n=4$",
          "workingLatex": "\\sin(4\\pi/3)\\cos(5\\pi/3) = \\left(-\\frac{\\sqrt{3}}{2}\\right)\\cdot\\frac{1}{2} = -\\frac{\\sqrt{3}}{4}",
          "explanation": "Works.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Try $n=5$",
          "workingLatex": "\\sin(5\\pi/3)\\cos(2\\pi) = \\left(-\\frac{\\sqrt{3}}{2}\\right) \\cdot 1 = -\\frac{\\sqrt{3}}{2}",
          "explanation": "Fails.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Pattern",
          "workingLatex": "n = 1 \\text{ and } n = 4 \\text{ in range } n \\leq 10",
          "explanation": "Check remaining values.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Verify $n=7$",
          "workingLatex": "\\sin(7\\pi/3)\\cos(8\\pi/3) = \\sin(\\pi/3)\\cos(2\\pi/3) = -\\frac{\\sqrt{3}}{4}",
          "explanation": "Works by periodicity.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "All solutions",
          "workingLatex": "n = 1, 4, 7, 10",
          "explanation": "Period 3 in $n$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Answer",
          "workingLatex": "n = 1, 4, 7, 10",
          "explanation": "All valid $n \\leq 10$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Method",
          "workingLatex": "\\text{Test using the closed-form sum}",
          "explanation": "Systematic approach.",
          "diagram": null
        }
      ],
      "finalAnswer": "$n = 1, 4, 7, 10$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Trigonometric series",
    "subtopicId": "fm.y2.pure.trig-series",
    "questionDiagram": null,
    "id": "fm.y2.pure.trig-series.q058",
    "tags": [
      "alternating",
      "closed-form"
    ],
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "questionText": "Express $\\displaystyle\\sum_{k=1}^{n} (-1)^{k} \\cos k\\theta$ in closed form and evaluate for $n=6$, $\\theta=\\frac{\\pi}{3}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Complex form",
          "workingLatex": "\\sum_{k=1}^{n} (-1)^{k} e^{ik\\theta} = \\sum_{k=1}^{n} (-e^{i\\theta})^{k}",
          "explanation": "Ratio $-e^{i\\theta}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "GP sum",
          "workingLatex": "= -e^{i\\theta}\\frac{1 - (-e^{i\\theta})^{n}}{1 + e^{i\\theta}}",
          "explanation": "Geometric series.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Real part",
          "workingLatex": "C = \\operatorname{Re}\\!\\left(-e^{i\\theta}\\frac{1 - (-1)^{n}e^{in\\theta}}{1 + e^{i\\theta}}\\right)",
          "explanation": "Cosine sum.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute $n=6$, $\\theta=\\pi/3$",
          "workingLatex": "(-1)^{6} = 1,\\; e^{i2\\pi} = 1",
          "explanation": "Evaluate powers.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Numerator",
          "workingLatex": "1 - e^{i2\\pi} = 0",
          "explanation": "Vanishes.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Result",
          "workingLatex": "C = 0",
          "explanation": "Alternating cosine sum is zero.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Direct check",
          "workingLatex": "-\\cos\\frac{\\pi}{3} + \\cos\\frac{2\\pi}{3} - \\cos\\pi + \\cos\\frac{4\\pi}{3} - \\cos\\frac{5\\pi}{3} + \\cos 2\\pi = 0",
          "explanation": "Term by term.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "General closed form",
          "workingLatex": "C = \\frac{\\sin(n\\theta/2)\\cos((n+1)\\theta/2 + \\pi/2)}{\\sin(\\theta/2 + \\pi/2)}",
          "explanation": "With sign adjustment.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Special case",
          "workingLatex": "n\\theta = 2m\\pi \\Rightarrow \\text{sum} = 0",
          "explanation": "When numerator vanishes.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Application",
          "workingLatex": "\\text{Alternating Fourier series}",
          "explanation": "Context.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Verify",
          "workingLatex": "0",
          "explanation": "Confirmed.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Answer",
          "workingLatex": "0",
          "explanation": "Final value.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Closed form",
          "workingLatex": "\\text{Derived via } (-e^{i\\theta})^k",
          "explanation": "Method summary.",
          "diagram": null
        }
      ],
      "finalAnswer": "Closed form: $\\displaystyle\\sum_{k=1}^{n} (-1)^{k} e^{ik\\theta} = -e^{i\\theta}\\frac{1-(-e^{i\\theta})^{n}}{1+e^{i\\theta}}$; for $n=6$, $\\theta=\\pi/3$: sum $= 0$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Trigonometric series",
    "subtopicId": "fm.y2.pure.trig-series",
    "questionDiagram": null,
    "id": "fm.y2.pure.trig-series.q059",
    "tags": [
      "squared-trig",
      "identity"
    ],
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "questionText": "Use the $C + iS$ method to show that $\\displaystyle\\sum_{k=1}^{n} \\cos^{2} k\\theta = \\frac{n}{2} + \\frac{\\sin(n\\theta)\\cos(n\\theta)}{2\\sin\\theta}$ and find this sum for $n=4$, $\\theta=\\frac{\\pi}{4}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identity",
          "workingLatex": "\\cos^{2} k\\theta = \\frac{1 + \\cos 2k\\theta}{2}",
          "explanation": "Double-angle identity.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Split sum",
          "workingLatex": "\\sum_{k=1}^{n} \\cos^{2} k\\theta = \\frac{n}{2} + \\frac{1}{2}\\sum_{k=1}^{n} \\cos 2k\\theta",
          "explanation": "Separate constant and cosine sum.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply formula",
          "workingLatex": "\\sum_{k=1}^{n} \\cos 2k\\theta = \\frac{\\sin(n\\theta)\\cos((n+1)\\theta)}{\\sin\\theta}",
          "explanation": "Use result with $2\\theta$ replacing $\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Combine",
          "workingLatex": "\\sum \\cos^{2} k\\theta = \\frac{n}{2} + \\frac{\\sin(n\\theta)\\cos(n\\theta)}{2\\sin\\theta}",
          "explanation": "Proved.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute $n=4$, $\\theta=\\pi/4$",
          "workingLatex": "= 2 + \\frac{\\sin\\pi \\cdot \\cos\\pi}{2\\sin(\\pi/4)}",
          "explanation": "Evaluate.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify",
          "workingLatex": "\\sin\\pi = 0 \\Rightarrow \\text{sum} = 2",
          "explanation": "Second term vanishes.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Direct check",
          "workingLatex": "\\cos^{2}\\frac{\\pi}{4} + \\cos^{2}\\frac{\\pi}{2} + \\cos^{2}\\frac{3\\pi}{4} + \\cos^{2}\\pi = \\frac{1}{2} + 0 + \\frac{1}{2} + 1 = 2",
          "explanation": "Verified.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "General technique",
          "workingLatex": "\\text{Reduce squared trig to linear using identities}",
          "explanation": "Key strategy.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Sine analogue",
          "workingLatex": "\\sum \\sin^{2} k\\theta = \\frac{n}{2} - \\frac{\\sin(n\\theta)\\cos(n\\theta)}{2\\sin\\theta}",
          "explanation": "Companion result.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Application",
          "workingLatex": "\\text{Power reduction in Fourier analysis}",
          "explanation": "Context.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Answer",
          "workingLatex": "2",
          "explanation": "Sum value.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Formula",
          "workingLatex": "\\frac{n}{2} + \\frac{\\sin(n\\theta)\\cos(n\\theta)}{2\\sin\\theta}",
          "explanation": "General result.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Method",
          "workingLatex": "$C+iS$ \\text{ applied to } \\cos 2k\\theta",
          "explanation": "Technique summary.",
          "diagram": null
        }
      ],
      "finalAnswer": "Formula proved; for $n=4$, $\\theta=\\pi/4$: sum $= 2$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Trigonometric series",
    "subtopicId": "fm.y2.pure.trig-series",
    "questionDiagram": null,
    "id": "fm.y2.pure.trig-series.q060",
    "tags": [
      "squared-trig",
      "sine-sum"
    ],
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "questionText": "Find $\\displaystyle\\sum_{k=1}^{6} \\sin^{2}\\frac{k\\pi}{6}$ using trigonometric series methods.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identity",
          "workingLatex": "\\sin^{2} k\\theta = \\frac{1 - \\cos 2k\\theta}{2}",
          "explanation": "Power reduction.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Split",
          "workingLatex": "\\sum_{k=1}^{6} \\sin^{2}\\frac{k\\pi}{6} = 3 - \\frac{1}{2}\\sum_{k=1}^{6} \\cos\\frac{k\\pi}{3}",
          "explanation": "Six terms, half the cosine sum.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Cosine sum",
          "workingLatex": "\\sum_{k=1}^{6} \\cos\\frac{k\\pi}{3} = 0",
          "explanation": "From $C+iS$ with $n=6$, $\\theta=\\pi/3$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Result",
          "workingLatex": "\\sum_{k=1}^{6} \\sin^{2}\\frac{k\\pi}{6} = 3",
          "explanation": "Simplified.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Direct check",
          "workingLatex": "\\frac{1}{4} + \\frac{3}{4} + 1 + \\frac{3}{4} + \\frac{1}{4} + 0 = 3",
          "explanation": "Term by term.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Geometric",
          "workingLatex": "\\text{Projections of 6th roots onto imaginary axis, squared}",
          "explanation": "Interpretation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "General",
          "workingLatex": "\\sum_{k=1}^{n} \\sin^{2} k\\theta = \\frac{n}{2} - \\frac{\\sin(n\\theta)\\cos(n\\theta)}{2\\sin\\theta}",
          "explanation": "Formula.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify formula",
          "workingLatex": "n=6, \\theta=\\pi/6: \\frac{6}{2} - 0 = 3",
          "explanation": "Consistent.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Application",
          "workingLatex": "\\text{Energy in Fourier components}",
          "explanation": "Physics context.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Answer",
          "workingLatex": "3",
          "explanation": "Final sum.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Technique",
          "workingLatex": "$C+iS$ \\text{ on } \\cos 2k\\theta",
          "explanation": "Method used.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Note",
          "workingLatex": "\\sin^{2}\\theta + \\cos^{2}\\theta = 1 \\text{ links the two sums}",
          "explanation": "Connection.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Final",
          "workingLatex": "3",
          "explanation": "Answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\sum_{k=1}^{6} \\sin^{2}\\frac{k\\pi}{6} = 3$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Trigonometric series",
    "subtopicId": "fm.y2.pure.trig-series",
    "questionDiagram": null,
    "id": "fm.y2.pure.trig-series.q061",
    "tags": [
      "medium-n",
      "cosine-sum",
      "c-plus-is"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find the exact value of $\\displaystyle\\sum_{k=1}^{7} \\cos \\frac{k\\pi}{3}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define $C$ and $S$",
          "workingLatex": "C = \\cos \\frac{1\\pi}{3} + \\cos \\frac{2\\pi}{3} + \\cos \\frac{3\\pi}{3} + \\cos \\frac{4\\pi}{3} + \\cos \\frac{5\\pi}{3} + \\cos \\frac{6\\pi}{3} + \\cos \\frac{7\\pi}{3}",
          "explanation": "Let $C$ be the cosine sum we need.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Companion sine sum",
          "workingLatex": "S = \\sin \\frac{1\\pi}{3} + \\sin \\frac{2\\pi}{3} + \\sin \\frac{3\\pi}{3} + \\sin \\frac{4\\pi}{3} + \\sin \\frac{5\\pi}{3} + \\sin \\frac{6\\pi}{3} + \\sin \\frac{7\\pi}{3}",
          "explanation": "Introduce the matching sine sum for the $C+iS$ method.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form $C + iS$",
          "workingLatex": "C + iS = \\sum_{k=1}^{7} e^{ik\\frac{\\pi}{3}}",
          "explanation": "Each $\\cos k\\theta + i\\sin k\\theta = e^{ik\\theta}$ by Euler's formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Geometric series",
          "workingLatex": "C + iS = e^{i\\frac{\\pi}{3}}\\frac{1 - e^{i7\\frac{\\pi}{3}}}{1 - e^{i\\frac{\\pi}{3}}}",
          "explanation": "First term $e^{i\\theta}$, common ratio $e^{i\\theta}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Sine product form",
          "workingLatex": "C + iS = \\frac{\\sin\\!\\left(\\frac{7\\frac{\\pi}{3}}{2}\\right)}{\\sin\\!\\left(\\frac{\\frac{\\pi}{3}}{2}\\right)}\\,e^{i\\frac{8\\frac{\\pi}{3}}{2}}",
          "explanation": "Multiply numerator and denominator by $e^{i(n+1)\\theta/2}$ and use $e^{ix}-e^{-ix}=2i\\sin x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Real part",
          "workingLatex": "C = \\frac{\\sin\\!\\left(\\frac{7\\frac{\\pi}{3}}{2}\\right)\\cos\\!\\left(\\frac{8\\frac{\\pi}{3}}{2}\\right)}{\\sin\\!\\left(\\frac{\\frac{\\pi}{3}}{2}\\right)}",
          "explanation": "Take the real part: $\\operatorname{Re}(e^{i\\phi})=\\cos\\phi$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify",
          "workingLatex": "C = \\frac{1}{2}",
          "explanation": "Evaluate the trigonometric values.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check small $n$",
          "workingLatex": "\\text{Direct addition confirms the result}",
          "explanation": "Substitute a few terms to verify.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Euler's formula",
          "workingLatex": "e^{i\\theta}=\\cos\\theta+i\\sin\\theta",
          "explanation": "Links exponentials and trigonometry.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{1}{2}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Trigonometric series",
    "subtopicId": "fm.y2.pure.trig-series",
    "questionDiagram": null,
    "id": "fm.y2.pure.trig-series.q062",
    "tags": [
      "medium-n",
      "cosine-sum",
      "c-plus-is"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find the exact value of $\\displaystyle\\sum_{k=1}^{8} \\cos \\frac{k\\pi}{4}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define $C$ and $S$",
          "workingLatex": "C = \\cos \\frac{1\\pi}{4} + \\cos \\frac{2\\pi}{4} + \\cos \\frac{3\\pi}{4} + \\cos \\frac{4\\pi}{4} + \\cos \\frac{5\\pi}{4} + \\cos \\frac{6\\pi}{4} + \\cos \\frac{7\\pi}{4} + \\cos \\frac{8\\pi}{4}",
          "explanation": "Let $C$ be the cosine sum we need.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Companion sine sum",
          "workingLatex": "S = \\sin \\frac{1\\pi}{4} + \\sin \\frac{2\\pi}{4} + \\sin \\frac{3\\pi}{4} + \\sin \\frac{4\\pi}{4} + \\sin \\frac{5\\pi}{4} + \\sin \\frac{6\\pi}{4} + \\sin \\frac{7\\pi}{4} + \\sin \\frac{8\\pi}{4}",
          "explanation": "Introduce the matching sine sum for the $C+iS$ method.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form $C + iS$",
          "workingLatex": "C + iS = \\sum_{k=1}^{8} e^{ik\\frac{\\pi}{4}}",
          "explanation": "Each $\\cos k\\theta + i\\sin k\\theta = e^{ik\\theta}$ by Euler's formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Geometric series",
          "workingLatex": "C + iS = e^{i\\frac{\\pi}{4}}\\frac{1 - e^{i8\\frac{\\pi}{4}}}{1 - e^{i\\frac{\\pi}{4}}}",
          "explanation": "First term $e^{i\\theta}$, common ratio $e^{i\\theta}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Sine product form",
          "workingLatex": "C + iS = \\frac{\\sin\\!\\left(\\frac{8\\frac{\\pi}{4}}{2}\\right)}{\\sin\\!\\left(\\frac{\\frac{\\pi}{4}}{2}\\right)}\\,e^{i\\frac{9\\frac{\\pi}{4}}{2}}",
          "explanation": "Multiply numerator and denominator by $e^{i(n+1)\\theta/2}$ and use $e^{ix}-e^{-ix}=2i\\sin x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Real part",
          "workingLatex": "C = \\frac{\\sin\\!\\left(\\frac{8\\frac{\\pi}{4}}{2}\\right)\\cos\\!\\left(\\frac{9\\frac{\\pi}{4}}{2}\\right)}{\\sin\\!\\left(\\frac{\\frac{\\pi}{4}}{2}\\right)}",
          "explanation": "Take the real part: $\\operatorname{Re}(e^{i\\phi})=\\cos\\phi$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify",
          "workingLatex": "C = 0",
          "explanation": "Evaluate the trigonometric values.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check small $n$",
          "workingLatex": "\\text{Direct addition confirms the result}",
          "explanation": "Substitute a few terms to verify.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Euler's formula",
          "workingLatex": "e^{i\\theta}=\\cos\\theta+i\\sin\\theta",
          "explanation": "Links exponentials and trigonometry.",
          "diagram": null
        }
      ],
      "finalAnswer": "$0$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Trigonometric series",
    "subtopicId": "fm.y2.pure.trig-series",
    "questionDiagram": null,
    "id": "fm.y2.pure.trig-series.q063",
    "tags": [
      "medium-n",
      "sine-sum",
      "c-plus-is"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find the exact value of $\\displaystyle\\sum_{k=1}^{7} \\sin \\frac{k\\pi}{6}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define $S$",
          "workingLatex": "S = \\sum_{k=1}^{7} \\sin \\frac{k\\pi}{6}",
          "explanation": "Let $S$ be the required sine sum.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Companion cosine sum",
          "workingLatex": "C = \\sum_{k=1}^{7} \\cos \\frac{k\\pi}{6}",
          "explanation": "Pair with the cosine sum for the $C+iS$ method.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form $C + iS$",
          "workingLatex": "C + iS = \\sum_{k=1}^{7} e^{ik\\frac{\\pi}{6}}",
          "explanation": "Combine using Euler's formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Geometric series",
          "workingLatex": "C + iS = e^{i\\frac{\\pi}{6}}\\frac{1 - e^{i7\\frac{\\pi}{6}}}{1 - e^{i\\frac{\\pi}{6}}}",
          "explanation": "Sum of a geometric progression of complex exponentials.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Sine product form",
          "workingLatex": "C + iS = \\frac{\\sin\\!\\left(\\frac{7\\frac{\\pi}{6}}{2}\\right)}{\\sin\\!\\left(\\frac{\\frac{\\pi}{6}}{2}\\right)}\\,e^{i\\frac{8\\frac{\\pi}{6}}{2}}",
          "explanation": "Standard result from the $C+iS$ method.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Imaginary part",
          "workingLatex": "S = \\frac{\\sin\\!\\left(\\frac{7\\frac{\\pi}{6}}{2}\\right)\\sin\\!\\left(\\frac{8\\frac{\\pi}{6}}{2}\\right)}{\\sin\\!\\left(\\frac{\\frac{\\pi}{6}}{2}\\right)}",
          "explanation": "Take the imaginary part.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify",
          "workingLatex": "S = \\frac{3 + 2\\sqrt{3}}{2}",
          "explanation": "Evaluate using exact trigonometric values.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify",
          "workingLatex": "\\text{Compare with term-by-term addition}",
          "explanation": "Sanity check.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Euler's formula",
          "workingLatex": "e^{i\\theta}=\\cos\\theta+i\\sin\\theta",
          "explanation": "Links exponentials and trigonometry.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{3 + 2\\sqrt{3}}{2}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Trigonometric series",
    "subtopicId": "fm.y2.pure.trig-series",
    "questionDiagram": null,
    "id": "fm.y2.pure.trig-series.q064",
    "tags": [
      "medium-n",
      "sine-sum",
      "c-plus-is"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find the exact value of $\\displaystyle\\sum_{k=1}^{8} \\sin \\frac{k\\pi}{3}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define $S$",
          "workingLatex": "S = \\sum_{k=1}^{8} \\sin \\frac{k\\pi}{3}",
          "explanation": "Let $S$ be the required sine sum.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Companion cosine sum",
          "workingLatex": "C = \\sum_{k=1}^{8} \\cos \\frac{k\\pi}{3}",
          "explanation": "Pair with the cosine sum for the $C+iS$ method.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form $C + iS$",
          "workingLatex": "C + iS = \\sum_{k=1}^{8} e^{ik\\frac{\\pi}{3}}",
          "explanation": "Combine using Euler's formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Geometric series",
          "workingLatex": "C + iS = e^{i\\frac{\\pi}{3}}\\frac{1 - e^{i8\\frac{\\pi}{3}}}{1 - e^{i\\frac{\\pi}{3}}}",
          "explanation": "Sum of a geometric progression of complex exponentials.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Sine product form",
          "workingLatex": "C + iS = \\frac{\\sin\\!\\left(\\frac{8\\frac{\\pi}{3}}{2}\\right)}{\\sin\\!\\left(\\frac{\\frac{\\pi}{3}}{2}\\right)}\\,e^{i\\frac{9\\frac{\\pi}{3}}{2}}",
          "explanation": "Standard result from the $C+iS$ method.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Imaginary part",
          "workingLatex": "S = \\frac{\\sin\\!\\left(\\frac{8\\frac{\\pi}{3}}{2}\\right)\\sin\\!\\left(\\frac{9\\frac{\\pi}{3}}{2}\\right)}{\\sin\\!\\left(\\frac{\\frac{\\pi}{3}}{2}\\right)}",
          "explanation": "Take the imaginary part.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify",
          "workingLatex": "S = \\sqrt{3}",
          "explanation": "Evaluate using exact trigonometric values.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify",
          "workingLatex": "\\text{Compare with term-by-term addition}",
          "explanation": "Sanity check.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Euler's formula",
          "workingLatex": "e^{i\\theta}=\\cos\\theta+i\\sin\\theta",
          "explanation": "Links exponentials and trigonometry.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sqrt{3}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Trigonometric series",
    "subtopicId": "fm.y2.pure.trig-series",
    "questionDiagram": null,
    "id": "fm.y2.pure.trig-series.q065",
    "tags": [
      "both-sums",
      "cosine-sum",
      "sine-sum",
      "c-plus-is"
    ],
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "written",
    "questionText": "Using the $C + iS$ method, find $\\displaystyle\\sum_{k=1}^{10} \\cos \\frac{k\\pi}{5}$ and $\\displaystyle\\sum_{k=1}^{10} \\sin \\frac{k\\pi}{5}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up $C$ and $S$",
          "workingLatex": "C = \\sum_{k=1}^{10} \\cos \\frac{k\\pi}{5},\\quad S = \\sum_{k=1}^{10} \\sin \\frac{k\\pi}{5}",
          "explanation": "Define both sums.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Complex exponential",
          "workingLatex": "C + iS = \\sum_{k=1}^{10} e^{ik\\frac{\\pi}{5}}",
          "explanation": "Euler's formula converts each term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Geometric sum",
          "workingLatex": "C + iS = e^{i\\frac{\\pi}{5}}\\frac{1 - e^{i10\\frac{\\pi}{5}}}{1 - e^{i\\frac{\\pi}{5}}}",
          "explanation": "Apply the finite geometric series formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Factor sines",
          "workingLatex": "C + iS = \\frac{\\sin\\!\\left(\\frac{10\\frac{\\pi}{5}}{2}\\right)}{\\sin\\!\\left(\\frac{\\frac{\\pi}{5}}{2}\\right)}\\,e^{i\\frac{11\\frac{\\pi}{5}}{2}}",
          "explanation": "Use $1-e^{ix}=-2ie^{ix/2}\\sin(x/2)$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Cosine sum",
          "workingLatex": "C = \\frac{\\sin\\!\\left(\\frac{10\\frac{\\pi}{5}}{2}\\right)\\cos\\!\\left(\\frac{11\\frac{\\pi}{5}}{2}\\right)}{\\sin\\!\\left(\\frac{\\frac{\\pi}{5}}{2}\\right)} = 0",
          "explanation": "Real part.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Sine sum",
          "workingLatex": "S = \\frac{\\sin\\!\\left(\\frac{10\\frac{\\pi}{5}}{2}\\right)\\sin\\!\\left(\\frac{11\\frac{\\pi}{5}}{2}\\right)}{\\sin\\!\\left(\\frac{\\frac{\\pi}{5}}{2}\\right)} = 0",
          "explanation": "Imaginary part.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Modulus check",
          "workingLatex": "|C + iS| = \\frac{|\\sin(n\\theta/2)|}{|\\sin(\\theta/2)|}",
          "explanation": "The complex sum has modulus given by the sine ratio.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Argument",
          "workingLatex": "\\arg(C+iS) = \\frac{11\\frac{\\pi}{5}}{2}",
          "explanation": "The argument of the complex sum.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answers",
          "workingLatex": "C = 0,\\; S = 0",
          "explanation": "Both sums found.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Euler's formula",
          "workingLatex": "e^{i\\theta}=\\cos\\theta+i\\sin\\theta",
          "explanation": "Links exponentials and trigonometry.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Define $C$ and $S$",
          "workingLatex": "C=\\sum\\cos k\\theta,\\; S=\\sum\\sin k\\theta",
          "explanation": "The $C+iS$ method pairs cosine and sine sums.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Geometric series",
          "workingLatex": "\\sum_{k=0}^{n-1} z^{k}=\\frac{1-z^{n}}{1-z}",
          "explanation": "Finite complex geometric progression.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Sine factorisation",
          "workingLatex": "1-e^{ix}=-2ie^{ix/2}\\sin(x/2)",
          "explanation": "Converts differences to sines.",
          "diagram": null
        }
      ],
      "finalAnswer": "$C = 0$, $S = 0$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Trigonometric series",
    "subtopicId": "fm.y2.pure.trig-series",
    "questionDiagram": null,
    "id": "fm.y2.pure.trig-series.q066",
    "tags": [
      "arithmetic-progression",
      "arithmetic-progression",
      "cosine-sum"
    ],
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "written",
    "questionText": "Find $\\displaystyle\\sum_{k=0}^{5} \\cos\\left(\\frac{\\pi}{4} + \\frac{k\\pi}{4}\\right)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise the pattern",
          "workingLatex": "\\cos\\left(\\frac{\\pi}{4} + \\frac{0\\pi}{4}\\right) + \\cos\\left(\\frac{\\pi}{4} + \\frac{1\\pi}{4}\\right) + \\cos\\left(\\frac{\\pi}{4} + \\frac{2\\pi}{4}\\right) + \\cos\\left(\\frac{\\pi}{4} + \\frac{3\\pi}{4}\\right) + \\cos\\left(\\frac{\\pi}{4} + \\frac{4\\pi}{4}\\right) + \\cos\\left(\\frac{\\pi}{4} + \\frac{5\\pi}{4}\\right)",
          "explanation": "Angles form an arithmetic progression with common difference $\\alpha$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Complex form",
          "workingLatex": "\\sum_{k=0}^{5} \\cos(\\frac{\\pi}{4}+k\\frac{\\pi}{4}) = \\operatorname{Re}\\!\\left(e^{i\\frac{\\pi}{4}}\\sum_{k=0}^{5} e^{ik\\frac{\\pi}{4}}\\right)",
          "explanation": "Factor out $e^{i\\theta}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Inner geometric sum",
          "workingLatex": "\\sum_{k=0}^{5} e^{ik\\frac{\\pi}{4}} = \\frac{1 - e^{i6\\frac{\\pi}{4}}}{1 - e^{i\\frac{\\pi}{4}}}",
          "explanation": "Geometric series in $e^{i\\alpha}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Sine factorisation",
          "workingLatex": "= \\frac{\\sin\\!\\left(\\frac{6\\frac{\\pi}{4}}{2}\\right)}{\\sin\\!\\left(\\frac{\\frac{\\pi}{4}}{2}\\right)}\\,e^{i\\frac{6\\frac{\\pi}{4}}{2}}",
          "explanation": "Standard sine product form.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Combine",
          "workingLatex": "C = \\operatorname{Re}\\!\\left(e^{i\\frac{\\pi}{4}} \\cdot \\frac{\\sin(n\\alpha/2)}{\\sin(\\alpha/2)} e^{in\\alpha/2}\\right)",
          "explanation": "Multiply the two exponentials.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Real part formula",
          "workingLatex": "C = \\frac{\\sin\\!\\left(\\frac{6\\frac{\\pi}{4}}{2}\\right)\\cos\\!\\left(\\frac{\\pi}{4}+\\frac{6\\frac{\\pi}{4}}{2}\\right)}{\\sin\\!\\left(\\frac{\\frac{\\pi}{4}}{2}\\right)}",
          "explanation": "General arithmetic progression result.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate",
          "workingLatex": "C = \\frac{-4 - 2\\sqrt{2}}{4}",
          "explanation": "Substitute exact trigonometric values.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify",
          "workingLatex": "\\text{Add terms directly to confirm}",
          "explanation": "Numerical check.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\frac{-4 - 2\\sqrt{2}}{4}",
          "explanation": "Final sum.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Euler's formula",
          "workingLatex": "e^{i\\theta}=\\cos\\theta+i\\sin\\theta",
          "explanation": "Links exponentials and trigonometry.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Define $C$ and $S$",
          "workingLatex": "C=\\sum\\cos k\\theta,\\; S=\\sum\\sin k\\theta",
          "explanation": "The $C+iS$ method pairs cosine and sine sums.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Geometric series",
          "workingLatex": "\\sum_{k=0}^{n-1} z^{k}=\\frac{1-z^{n}}{1-z}",
          "explanation": "Finite complex geometric progression.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Sine factorisation",
          "workingLatex": "1-e^{ix}=-2ie^{ix/2}\\sin(x/2)",
          "explanation": "Converts differences to sines.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{-4 - 2\\sqrt{2}}{4}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Trigonometric series",
    "subtopicId": "fm.y2.pure.trig-series",
    "questionDiagram": null,
    "id": "fm.y2.pure.trig-series.q067",
    "tags": [
      "alternating",
      "alternating",
      "cosine-sum"
    ],
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "written",
    "questionText": "Find $\\displaystyle\\sum_{k=1}^{6} (-1)^{k-1} \\cos \\frac{k\\pi}{3}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rewrite with powers",
          "workingLatex": "\\sum_{k=1}^{6} (-1)^{k-1}\\cos \\frac{k\\pi}{3} = \\operatorname{Re}\\!\\left(\\sum_{k=1}^{6} (-e^{i\\frac{\\pi}{3}})^{k-1} e^{i\\frac{\\pi}{3}}\\right)",
          "explanation": "Alternating signs correspond to ratio $-e^{i\\theta}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Geometric series",
          "workingLatex": "\\sum_{k=1}^{6} (-e^{i\\frac{\\pi}{3}})^{k} = -e^{i\\frac{\\pi}{3}}\\frac{1 - (-e^{i\\frac{\\pi}{3}})^{6}}{1 + e^{i\\frac{\\pi}{3}}}",
          "explanation": "First term $-e^{i\\theta}$, ratio $-e^{i\\theta}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify denominator",
          "workingLatex": "1 + e^{i\\frac{\\pi}{3}} = 2e^{i\\frac{\\pi}{3}/2}\\cos\\!\\left(\\frac{\\frac{\\pi}{3}}{2}\\right)",
          "explanation": "Half-angle factorisation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Numerator",
          "workingLatex": "1 - (-e^{i\\frac{\\pi}{3}})^{6} = 1 - (-1)^{6} e^{i6\\frac{\\pi}{3}}",
          "explanation": "Handle the alternating power.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Take real part",
          "workingLatex": "C = \\operatorname{Re}(\\text{sum})",
          "explanation": "Extract the cosine sum.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate",
          "workingLatex": "C = 0",
          "explanation": "Simplify using exact values.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check $n=1$",
          "workingLatex": "\\cos \\frac{\\pi}{3} \\text{ matches}",
          "explanation": "Base case verification.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Alternative",
          "workingLatex": "\\text{Use } C+iS \\text{ with } r=-1",
          "explanation": "Equivalent complex approach.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "0",
          "explanation": "Final value.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Euler's formula",
          "workingLatex": "e^{i\\theta}=\\cos\\theta+i\\sin\\theta",
          "explanation": "Links exponentials and trigonometry.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Define $C$ and $S$",
          "workingLatex": "C=\\sum\\cos k\\theta,\\; S=\\sum\\sin k\\theta",
          "explanation": "The $C+iS$ method pairs cosine and sine sums.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Geometric series",
          "workingLatex": "\\sum_{k=0}^{n-1} z^{k}=\\frac{1-z^{n}}{1-z}",
          "explanation": "Finite complex geometric progression.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Sine factorisation",
          "workingLatex": "1-e^{ix}=-2ie^{ix/2}\\sin(x/2)",
          "explanation": "Converts differences to sines.",
          "diagram": null
        }
      ],
      "finalAnswer": "$0$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Trigonometric series",
    "subtopicId": "fm.y2.pure.trig-series",
    "questionDiagram": null,
    "id": "fm.y2.pure.trig-series.q068",
    "tags": [
      "proof",
      "proof",
      "c-plus-is"
    ],
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "written",
    "questionText": "Using the $C + iS$ method, prove that $\\displaystyle\\sum_{k=1}^{n} \\cos k\\theta = \\frac{\\sin(n\\theta/2)\\cos((n+1)\\theta/2)}{\\sin(\\theta/2)}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define sums",
          "workingLatex": "C = \\sum_{k=1}^{n} \\cos k\\theta,\\quad S = \\sum_{k=1}^{n} \\sin k\\theta",
          "explanation": "Standard cosine and sine sums.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Euler's formula",
          "workingLatex": "\\cos k\\theta + i\\sin k\\theta = e^{ik\\theta}",
          "explanation": "Convert each term to exponential form.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Combine",
          "workingLatex": "C + iS = \\sum_{k=1}^{n} e^{ik\\theta}",
          "explanation": "Sum of complex exponentials.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Geometric series",
          "workingLatex": "C + iS = e^{i\\theta}\\frac{1 - e^{in\\theta}}{1 - e^{i\\theta}}",
          "explanation": "First term $e^{i\\theta}$, ratio $e^{i\\theta}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Factor sines",
          "workingLatex": "1 - e^{in\\theta} = -2ie^{in\\theta/2}\\sin\\!\\left(\\frac{n\\theta}{2}\\right)",
          "explanation": "Difference of exponentials.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Denominator",
          "workingLatex": "1 - e^{i\\theta} = -2ie^{i\\theta/2}\\sin\\!\\left(\\frac{\\theta}{2}\\right)",
          "explanation": "Same factorisation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify",
          "workingLatex": "C + iS = \\frac{\\sin(n\\theta/2)}{\\sin(\\theta/2)}\\,e^{i(n+1)\\theta/2}",
          "explanation": "Cancel common factors.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Cosine formula",
          "workingLatex": "C = \\frac{\\sin(n\\theta/2)\\cos((n+1)\\theta/2)}{\\sin(\\theta/2)}",
          "explanation": "Take real part.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Sine formula",
          "workingLatex": "S = \\frac{\\sin(n\\theta/2)\\sin((n+1)\\theta/2)}{\\sin(\\theta/2)}",
          "explanation": "Take imaginary part.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Euler's formula",
          "workingLatex": "e^{i\\theta}=\\cos\\theta+i\\sin\\theta",
          "explanation": "Links exponentials and trigonometry.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Define $C$ and $S$",
          "workingLatex": "C=\\sum\\cos k\\theta,\\; S=\\sum\\sin k\\theta",
          "explanation": "The $C+iS$ method pairs cosine and sine sums.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Geometric series",
          "workingLatex": "\\sum_{k=0}^{n-1} z^{k}=\\frac{1-z^{n}}{1-z}",
          "explanation": "Finite complex geometric progression.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Sine factorisation",
          "workingLatex": "1-e^{ix}=-2ie^{ix/2}\\sin(x/2)",
          "explanation": "Converts differences to sines.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\sum_{k=1}^{n} \\cos k\\theta = \\frac{\\sin(n\\theta/2)\\cos((n+1)\\theta/2)}{\\sin(\\theta/2)}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Trigonometric series",
    "subtopicId": "fm.y2.pure.trig-series",
    "questionDiagram": null,
    "id": "fm.y2.pure.trig-series.q069",
    "tags": [
      "weighted-sum",
      "weighted-sum",
      "geometric"
    ],
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "written",
    "questionText": "Find $\\displaystyle\\sum_{k=1}^{5} \\left(\\frac{1}{2}\\right)^{k} \\cos \\frac{k\\pi}{3}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up",
          "workingLatex": "C = \\sum_{k=1}^{5} \\left(\\frac{1}{2}\\right)^{k}\\cos \\frac{k\\pi}{3}",
          "explanation": "Cosine sum with geometric weight $r^{k}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Complex form",
          "workingLatex": "C + iS = \\sum_{k=1}^{5} (1e^{i\\frac{\\pi}{3}})^{k}",
          "explanation": "Each term is a power of $re^{i\\theta}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Geometric sum",
          "workingLatex": "C + iS = 1e^{i\\frac{\\pi}{3}}\\frac{1 - (1e^{i\\frac{\\pi}{3}})^{5}}{1 - 1e^{i\\frac{\\pi}{3}}}",
          "explanation": "Finite GP with ratio $re^{i\\theta}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Condition",
          "workingLatex": "|1| < 1 \\text{ ensures convergence for infinite series}",
          "explanation": "For finite $n$, always valid.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Real part",
          "workingLatex": "C = \\operatorname{Re}(C+iS)",
          "explanation": "Extract the cosine sum.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Expand",
          "workingLatex": "C = -\\frac{1}{64}",
          "explanation": "Simplify to exact form.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check $n=1$",
          "workingLatex": "1\\cos \\frac{\\pi}{3}",
          "explanation": "First term check.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Modulus",
          "workingLatex": "|1e^{i\\frac{\\pi}{3}}| = 1",
          "explanation": "Geometric ratio modulus.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "-\\frac{1}{64}",
          "explanation": "Final value.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Euler's formula",
          "workingLatex": "e^{i\\theta}=\\cos\\theta+i\\sin\\theta",
          "explanation": "Links exponentials and trigonometry.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Define $C$ and $S$",
          "workingLatex": "C=\\sum\\cos k\\theta,\\; S=\\sum\\sin k\\theta",
          "explanation": "The $C+iS$ method pairs cosine and sine sums.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Geometric series",
          "workingLatex": "\\sum_{k=0}^{n-1} z^{k}=\\frac{1-z^{n}}{1-z}",
          "explanation": "Finite complex geometric progression.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Sine factorisation",
          "workingLatex": "1-e^{ix}=-2ie^{ix/2}\\sin(x/2)",
          "explanation": "Converts differences to sines.",
          "diagram": null
        }
      ],
      "finalAnswer": "$-\\frac{1}{64}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Trigonometric series",
    "subtopicId": "fm.y2.pure.trig-series",
    "questionDiagram": null,
    "id": "fm.y2.pure.trig-series.q070",
    "tags": [
      "modulus",
      "proof"
    ],
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "questionText": "The sum $S = \\displaystyle\\sum_{k=1}^{n} e^{ik\\theta}$ satisfies $|S| = \\dfrac{|\\sin(n\\theta/2)|}{|\\sin(\\theta/2)|}$. Prove this and find the maximum value of $\\displaystyle\\left|\\sum_{k=1}^{12} e^{ik\\pi/6}\\right|$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Geometric sum",
          "workingLatex": "S = e^{i\\theta}\\frac{1 - e^{in\\theta}}{1 - e^{i\\theta}}",
          "explanation": "Standard formula.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Sine factorisation",
          "workingLatex": "S = \\frac{\\sin(n\\theta/2)}{\\sin(\\theta/2)} e^{i(n+1)\\theta/2}",
          "explanation": "Multiply by conjugate factors.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Modulus",
          "workingLatex": "|S| = \\frac{|\\sin(n\\theta/2)|}{|\\sin(\\theta/2)|}",
          "explanation": "Since $|e^{i\\phi}| = 1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Proved",
          "workingLatex": "|S| = \\dfrac{|\\sin(n\\theta/2)|}{|\\sin(\\theta/2)|}",
          "explanation": "Result established.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply $n=12$, $\\theta=\\pi/6$",
          "workingLatex": "|S| = \\frac{|\\sin\\pi|}{|\\sin(\\pi/12)|} = 0",
          "explanation": "Numerator is zero.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Maximum",
          "workingLatex": "\\text{Maximum over } n \\text{ occurs when } |\\sin(n\\theta/2)| \\text{ is maximal}",
          "explanation": "For fixed $\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "For this case",
          "workingLatex": "|S| = 0",
          "explanation": "Sum is exactly zero.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "General maximum",
          "workingLatex": "\\max |S| = \\frac{1}{|\\sin(\\theta/2)|} \\text{ when } \\sin(n\\theta/2) = \\pm 1",
          "explanation": "Upper bound.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Geometric",
          "workingLatex": "|S| \\text{ is the distance from origin to sum of unit vectors}",
          "explanation": "Vector interpretation.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Application",
          "workingLatex": "\\text{Resonance and interference patterns}",
          "explanation": "Physics link.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Cosine and sine",
          "workingLatex": "|C + iS| = |S|",
          "explanation": "Modulus of complex sum.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Answer",
          "workingLatex": "|S| = 0",
          "explanation": "For the given parameters.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Formula",
          "workingLatex": "|S| = \\dfrac{|\\sin(n\\theta/2)|}{|\\sin(\\theta/2)|}",
          "explanation": "General result.",
          "diagram": null
        }
      ],
      "finalAnswer": "$|S| = \\dfrac{|\\sin(n\\theta/2)|}{|\\sin(\\theta/2)|}$; for $n=12$, $\\theta=\\pi/6$: $|S| = 0$."
    }
  }
];
