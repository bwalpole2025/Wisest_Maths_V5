import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Maclaurin series",
    "subtopicId": "fm.y2.pure.maclaurin",
    "questionDiagram": null,
    "id": "fm.y2.pure.maclaurin.q001",
    "tags": [
      "exponential"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Write down the Maclaurin series for $e^{x}$ up to and including the term in $x^{3}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Maclaurin form",
          "workingLatex": "e^{x} = 1 + x + \\frac{x^{2}}{2!} + \\frac{x^{3}}{3!} + \\cdots",
          "explanation": "Standard result from the formula booklet.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Pattern",
          "workingLatex": "\\text{Term in } x^{n} \\text{ is } \\frac{x^{n}}{n!}",
          "explanation": "Each power is divided by its factorial.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write requested terms",
          "workingLatex": "e^{x} = 1 + x + \\frac{x^{2}}{2!} + \\frac{x^{3}}{3!} + \\cdots",
          "explanation": "Include terms up to the required order.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check $x=0$",
          "workingLatex": "e^{0} = 1",
          "explanation": "The constant term must be 1.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check first derivative at 0",
          "workingLatex": "\\frac{d}{dx}(e^{x})\\big|_{0} = 1",
          "explanation": "Coefficient of $x$ matches $f'(0)$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "1 + x + \\frac{x^{2}}{2!} + \\frac{x^{3}}{3!} + \\cdots",
          "explanation": "Maclaurin expansion of $e^{x}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$e^{x} = 1 + x + \\frac{x^{2}}{2!} + \\frac{x^{3}}{3!} + \\cdots$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Maclaurin series",
    "subtopicId": "fm.y2.pure.maclaurin",
    "questionDiagram": null,
    "id": "fm.y2.pure.maclaurin.q002",
    "tags": [
      "sine"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Write down the Maclaurin series for $\\sin x$ up to and including the term in $x^{5}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Maclaurin form",
          "workingLatex": "\\sin x = x - \\frac{x^{3}}{3!} + \\frac{x^{5}}{5!} - \\cdots",
          "explanation": "Standard sine series.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Odd powers only",
          "workingLatex": "\\text{Only odd powers of } x \\text{ appear}",
          "explanation": "Sine is an odd function, so even powers vanish.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Alternating signs",
          "workingLatex": "\\text{Signs alternate starting with } +",
          "explanation": "Pattern: $+,-,+,-,\\ldots$",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write terms",
          "workingLatex": "\\sin x = x + -\\frac{x^{3}}{3!} + \\frac{x^{5}}{5!} + \\cdots",
          "explanation": "Up to the required order.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check $x=0$",
          "workingLatex": "\\sin 0 = 0",
          "explanation": "No constant term.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "x + -\\frac{x^{3}}{3!} + \\frac{x^{5}}{5!} + \\cdots",
          "explanation": "Expansion of $\\sin x$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sin x = x + -\\frac{x^{3}}{3!} + \\frac{x^{5}}{5!} + \\cdots$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Maclaurin series",
    "subtopicId": "fm.y2.pure.maclaurin",
    "questionDiagram": null,
    "id": "fm.y2.pure.maclaurin.q003",
    "tags": [
      "cosine"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Write down the Maclaurin series for $\\cos x$ up to and including the term in $x^{4}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Maclaurin form",
          "workingLatex": "\\cos x = 1 - \\frac{x^{2}}{2!} + \\frac{x^{4}}{4!} - \\cdots",
          "explanation": "Standard cosine series.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Even powers only",
          "workingLatex": "\\text{Only even powers of } x",
          "explanation": "Cosine is an even function.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write terms",
          "workingLatex": "\\cos x = 1 + -\\frac{x^{2}}{2!} + \\frac{x^{4}}{4!} + \\cdots",
          "explanation": "Include terms to required order.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check $x=0$",
          "workingLatex": "\\cos 0 = 1",
          "explanation": "Constant term is 1.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "No $x$ term",
          "workingLatex": "f'(0)=0",
          "explanation": "First derivative at zero is zero.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "1 + -\\frac{x^{2}}{2!} + \\frac{x^{4}}{4!} + \\cdots",
          "explanation": "Expansion of $\\cos x$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\cos x = 1 + -\\frac{x^{2}}{2!} + \\frac{x^{4}}{4!} + \\cdots$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Maclaurin series",
    "subtopicId": "fm.y2.pure.maclaurin",
    "questionDiagram": null,
    "id": "fm.y2.pure.maclaurin.q004",
    "tags": [
      "logarithm",
      "validity"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Write down the Maclaurin series for $\\ln(1+x)$ up to and including the term in $x^{3}$, and state the range of validity.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Maclaurin form",
          "workingLatex": "\\ln(1+x) = x - \\frac{x^{2}}{2} + \\frac{x^{3}}{3} - \\cdots",
          "explanation": "Standard logarithm series.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Validity",
          "workingLatex": "|x| < 1",
          "explanation": "Series converges only inside this interval.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Alternating signs",
          "workingLatex": "\\text{Coefficients } 1, -\\tfrac{1}{2}, \\tfrac{1}{3}, \\ldots",
          "explanation": "Denominator increases; signs alternate.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write terms",
          "workingLatex": "\\ln(1+x) = x + -\\frac{x^{2}}{2} + \\frac{x^{3}}{3} + \\cdots",
          "explanation": "Up to required order.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check $x=0$",
          "workingLatex": "\\ln 1 = 0",
          "explanation": "No constant term.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "x + -\\frac{x^{2}}{2} + \\frac{x^{3}}{3} + \\cdots",
          "explanation": "Expansion with validity stated.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\ln(1+x) = x + -\\frac{x^{2}}{2} + \\frac{x^{3}}{3} + \\cdots$, valid for |x| < 1."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Maclaurin series",
    "subtopicId": "fm.y2.pure.maclaurin",
    "questionDiagram": null,
    "id": "fm.y2.pure.maclaurin.q005",
    "tags": [
      "integer-power",
      "binomial",
      "validity"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Find the Maclaurin series for $(1+x)^{2}$ up to and including the term in $x^{3}$, and state the range of validity.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "General binomial series",
          "workingLatex": "(1+x)^{n} = 1 + nx + \\frac{n(n-1)}{2!}x^{2} + \\cdots",
          "explanation": "Valid for $|x|<1$ when $n$ is not a positive integer.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute $n=2$",
          "workingLatex": "\\text{Use } n=2 \\text{ in each coefficient}",
          "explanation": "Compute successive binomial coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write terms",
          "workingLatex": "(1+x)^{2} = 1 + 2x + x^{2} + \\cdots",
          "explanation": "Up to required order.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Validity",
          "workingLatex": "|x| < 1",
          "explanation": "Range where the series converges.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check $x=0$",
          "workingLatex": "(1)^{2} = 1",
          "explanation": "Constant term is 1.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "1 + 2x + x^{2} + \\cdots",
          "explanation": "Binomial Maclaurin series.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(1+x)^{2} = 1 + 2x + x^{2} + \\cdots$, valid for |x| < 1."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Maclaurin series",
    "subtopicId": "fm.y2.pure.maclaurin",
    "questionDiagram": null,
    "id": "fm.y2.pure.maclaurin.q006",
    "tags": [
      "fractional",
      "binomial",
      "validity"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Find the Maclaurin series for $(1+x)^{\\frac{1}{2}}$ up to and including the term in $x^{3}$, and state the range of validity.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "General binomial series",
          "workingLatex": "(1+x)^{n} = 1 + nx + \\frac{n(n-1)}{2!}x^{2} + \\cdots",
          "explanation": "Valid for $|x|<1$ when $n$ is not a positive integer.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute $n=\\frac{1}{2}$",
          "workingLatex": "\\text{Use } n=\\frac{1}{2} \\text{ in each coefficient}",
          "explanation": "Compute successive binomial coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write terms",
          "workingLatex": "(1+x)^{\\frac{1}{2}} = 1 + \\frac{x}{2} + -\\frac{x^{2}}{8} + \\frac{x^{3}}{16} + \\cdots",
          "explanation": "Up to required order.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Validity",
          "workingLatex": "|x| < 1",
          "explanation": "Range where the series converges.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check $x=0$",
          "workingLatex": "(1)^{\\frac{1}{2}} = 1",
          "explanation": "Constant term is 1.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "1 + \\frac{x}{2} + -\\frac{x^{2}}{8} + \\frac{x^{3}}{16} + \\cdots",
          "explanation": "Binomial Maclaurin series.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(1+x)^{\\frac{1}{2}} = 1 + \\frac{x}{2} + -\\frac{x^{2}}{8} + \\frac{x^{3}}{16} + \\cdots$, valid for |x| < 1."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Maclaurin series",
    "subtopicId": "fm.y2.pure.maclaurin",
    "questionDiagram": null,
    "id": "fm.y2.pure.maclaurin.q007",
    "tags": [
      "negative",
      "binomial",
      "validity"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Find the Maclaurin series for $(1+x)^{-1}$ up to and including the term in $x^{3}$, and state the range of validity.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "General binomial series",
          "workingLatex": "(1+x)^{n} = 1 + nx + \\frac{n(n-1)}{2!}x^{2} + \\cdots",
          "explanation": "Valid for $|x|<1$ when $n$ is not a positive integer.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute $n=-1$",
          "workingLatex": "\\text{Use } n=-1 \\text{ in each coefficient}",
          "explanation": "Compute successive binomial coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write terms",
          "workingLatex": "(1+x)^{-1} = 1 + -x + x^{2} + -x^{3} + \\cdots",
          "explanation": "Up to required order.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Validity",
          "workingLatex": "|x| < 1",
          "explanation": "Range where the series converges.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check $x=0$",
          "workingLatex": "(1)^{-1} = 1",
          "explanation": "Constant term is 1.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "1 + -x + x^{2} + -x^{3} + \\cdots",
          "explanation": "Binomial Maclaurin series.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(1+x)^{-1} = 1 + -x + x^{2} + -x^{3} + \\cdots$, valid for |x| < 1."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Maclaurin series",
    "subtopicId": "fm.y2.pure.maclaurin",
    "questionDiagram": null,
    "id": "fm.y2.pure.maclaurin.q008",
    "tags": [
      "integer-power",
      "binomial",
      "validity"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Find the Maclaurin series for $(1+x)^{3}$ up to and including the term in $x^{3}$, and state the range of validity.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "General binomial series",
          "workingLatex": "(1+x)^{n} = 1 + nx + \\frac{n(n-1)}{2!}x^{2} + \\cdots",
          "explanation": "Valid for $|x|<1$ when $n$ is not a positive integer.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute $n=3$",
          "workingLatex": "\\text{Use } n=3 \\text{ in each coefficient}",
          "explanation": "Compute successive binomial coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write terms",
          "workingLatex": "(1+x)^{3} = 1 + 3x + 3x^{2} + x^{3} + \\cdots",
          "explanation": "Up to required order.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Validity",
          "workingLatex": "|x| < 1",
          "explanation": "Range where the series converges.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check $x=0$",
          "workingLatex": "(1)^{3} = 1",
          "explanation": "Constant term is 1.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "1 + 3x + 3x^{2} + x^{3} + \\cdots",
          "explanation": "Binomial Maclaurin series.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(1+x)^{3} = 1 + 3x + 3x^{2} + x^{3} + \\cdots$, valid for |x| < 1."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Maclaurin series",
    "subtopicId": "fm.y2.pure.maclaurin",
    "questionDiagram": null,
    "id": "fm.y2.pure.maclaurin.q009",
    "tags": [
      "validity"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "State the range of validity for the Maclaurin series of $\\ln(1+x)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify series type",
          "workingLatex": "$\\ln(1+x)$",
          "explanation": "Recognise the standard Maclaurin form.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Convergence condition",
          "workingLatex": "$|x| < 1$",
          "explanation": "Standard validity from the formula booklet.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Reason",
          "workingLatex": "Logarithm series converges only when $|x|<1$ (and $x>-1$ for the function).",
          "explanation": "Why the condition is needed.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Endpoint note",
          "workingLatex": "\\text{Check endpoints separately if required}",
          "explanation": "Boundary behaviour may differ.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Example",
          "workingLatex": "\\text{Test a value inside the interval}",
          "explanation": "Confirm a point where the series works.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "$|x| < 1$",
          "explanation": "Range of validity.",
          "diagram": null
        }
      ],
      "finalAnswer": "$|x| < 1$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Maclaurin series",
    "subtopicId": "fm.y2.pure.maclaurin",
    "questionDiagram": null,
    "id": "fm.y2.pure.maclaurin.q010",
    "tags": [
      "validity"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "State the range of validity for the Maclaurin series of $(1+x)^{n}$ for non-integer $n$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify series type",
          "workingLatex": "$(1+x)^{n}$ for non-integer $n$",
          "explanation": "Recognise the standard Maclaurin form.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Convergence condition",
          "workingLatex": "$|x| < 1$",
          "explanation": "Standard validity from the formula booklet.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Reason",
          "workingLatex": "Binomial series for general $n$ converges inside the unit interval.",
          "explanation": "Why the condition is needed.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Endpoint note",
          "workingLatex": "\\text{Check endpoints separately if required}",
          "explanation": "Boundary behaviour may differ.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Example",
          "workingLatex": "\\text{Test a value inside the interval}",
          "explanation": "Confirm a point where the series works.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "$|x| < 1$",
          "explanation": "Range of validity.",
          "diagram": null
        }
      ],
      "finalAnswer": "$|x| < 1$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Maclaurin series",
    "subtopicId": "fm.y2.pure.maclaurin",
    "questionDiagram": null,
    "id": "fm.y2.pure.maclaurin.q011",
    "tags": [
      "validity"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "State the range of validity for the Maclaurin series of $e^{x}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify series type",
          "workingLatex": "$e^{x}$",
          "explanation": "Recognise the standard Maclaurin form.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Convergence condition",
          "workingLatex": "$\\text{all real } x$",
          "explanation": "Standard validity from the formula booklet.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Reason",
          "workingLatex": "Exponential series has infinite radius of convergence.",
          "explanation": "Why the condition is needed.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Endpoint note",
          "workingLatex": "\\text{Check endpoints separately if required}",
          "explanation": "Boundary behaviour may differ.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Example",
          "workingLatex": "\\text{Test a value inside the interval}",
          "explanation": "Confirm a point where the series works.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "$\\text{all real } x$",
          "explanation": "Range of validity.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\text{all real } x$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Maclaurin series",
    "subtopicId": "fm.y2.pure.maclaurin",
    "questionDiagram": null,
    "id": "fm.y2.pure.maclaurin.q012",
    "tags": [
      "validity"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "State the range of validity for the Maclaurin series of $\\sin x$ and $\\cos x$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify series type",
          "workingLatex": "$\\sin x$ and $\\cos x$",
          "explanation": "Recognise the standard Maclaurin form.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Convergence condition",
          "workingLatex": "$\\text{all real } x$",
          "explanation": "Standard validity from the formula booklet.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Reason",
          "workingLatex": "Trig Maclaurin series converge for every real $x$.",
          "explanation": "Why the condition is needed.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Endpoint note",
          "workingLatex": "\\text{Check endpoints separately if required}",
          "explanation": "Boundary behaviour may differ.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Example",
          "workingLatex": "\\text{Test a value inside the interval}",
          "explanation": "Confirm a point where the series works.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "$\\text{all real } x$",
          "explanation": "Range of validity.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\text{all real } x$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Maclaurin series",
    "subtopicId": "fm.y2.pure.maclaurin",
    "questionDiagram": null,
    "id": "fm.y2.pure.maclaurin.q013",
    "tags": [
      "recall",
      "exponential"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Write down the Maclaurin series for $e^{x}$ up to and including the term in $x^{3}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Maclaurin form",
          "workingLatex": "e^{x} = 1 + x + \\frac{x^{2}}{2!} + \\frac{x^{3}}{3!} + \\cdots",
          "explanation": "Standard result from the formula booklet.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Pattern",
          "workingLatex": "\\text{Term in } x^{n} \\text{ is } \\frac{x^{n}}{n!}",
          "explanation": "Each power is divided by its factorial.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write requested terms",
          "workingLatex": "e^{x} = 1 + x + \\frac{x^{2}}{2!} + \\frac{x^{3}}{3!} + \\cdots",
          "explanation": "Include terms up to the required order.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check $x=0$",
          "workingLatex": "e^{0} = 1",
          "explanation": "The constant term must be 1.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check first derivative at 0",
          "workingLatex": "\\frac{d}{dx}(e^{x})\\big|_{0} = 1",
          "explanation": "Coefficient of $x$ matches $f'(0)$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "1 + x + \\frac{x^{2}}{2!} + \\frac{x^{3}}{3!} + \\cdots",
          "explanation": "Maclaurin expansion of $e^{x}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$e^{x} = 1 + x + \\frac{x^{2}}{2!} + \\frac{x^{3}}{3!} + \\cdots$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Maclaurin series",
    "subtopicId": "fm.y2.pure.maclaurin",
    "questionDiagram": null,
    "id": "fm.y2.pure.maclaurin.q014",
    "tags": [
      "recall",
      "cosine"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Write down the Maclaurin series for $\\cos x$ up to and including the term in $x^{4}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Maclaurin form",
          "workingLatex": "\\cos x = 1 - \\frac{x^{2}}{2!} + \\frac{x^{4}}{4!} - \\cdots",
          "explanation": "Standard cosine series.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Even powers only",
          "workingLatex": "\\text{Only even powers of } x",
          "explanation": "Cosine is an even function.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write terms",
          "workingLatex": "\\cos x = 1 + -\\frac{x^{2}}{2!} + \\frac{x^{4}}{4!} + \\cdots",
          "explanation": "Include terms to required order.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check $x=0$",
          "workingLatex": "\\cos 0 = 1",
          "explanation": "Constant term is 1.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "No $x$ term",
          "workingLatex": "f'(0)=0",
          "explanation": "First derivative at zero is zero.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "1 + -\\frac{x^{2}}{2!} + \\frac{x^{4}}{4!} + \\cdots",
          "explanation": "Expansion of $\\cos x$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\cos x = 1 + -\\frac{x^{2}}{2!} + \\frac{x^{4}}{4!} + \\cdots$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Maclaurin series",
    "subtopicId": "fm.y2.pure.maclaurin",
    "questionDiagram": null,
    "id": "fm.y2.pure.maclaurin.q015",
    "tags": [
      "recall",
      "sine"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Write down the Maclaurin series for $\\sin x$ up to and including the term in $x^{5}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Maclaurin form",
          "workingLatex": "\\sin x = x - \\frac{x^{3}}{3!} + \\frac{x^{5}}{5!} - \\cdots",
          "explanation": "Standard sine series.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Odd powers only",
          "workingLatex": "\\text{Only odd powers of } x \\text{ appear}",
          "explanation": "Sine is an odd function, so even powers vanish.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Alternating signs",
          "workingLatex": "\\text{Signs alternate starting with } +",
          "explanation": "Pattern: $+,-,+,-,\\ldots$",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write terms",
          "workingLatex": "\\sin x = x + -\\frac{x^{3}}{3!} + \\frac{x^{5}}{5!} + \\cdots",
          "explanation": "Up to the required order.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check $x=0$",
          "workingLatex": "\\sin 0 = 0",
          "explanation": "No constant term.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "x + -\\frac{x^{3}}{3!} + \\frac{x^{5}}{5!} + \\cdots",
          "explanation": "Expansion of $\\sin x$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sin x = x + -\\frac{x^{3}}{3!} + \\frac{x^{5}}{5!} + \\cdots$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Maclaurin series",
    "subtopicId": "fm.y2.pure.maclaurin",
    "questionDiagram": null,
    "id": "fm.y2.pure.maclaurin.q016",
    "tags": [
      "composite",
      "exponential"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find the Maclaurin series for $e^{2x}$ up to and including the term in $x^{3}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Start from $e^{x}$",
          "workingLatex": "e^{x} = 1 + x + \\frac{x^{2}}{2!} + \\frac{x^{3}}{3!} + \\cdots",
          "explanation": "Standard series.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "\\text{Replace } x \\text{ by } 2x",
          "explanation": "The composite argument here is $2x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Replace each power",
          "workingLatex": "(2x)^{2} = 4x^{2},\\; (2x)^{3} = 8x^{3}",
          "explanation": "Square and cube the inner factor.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write series",
          "workingLatex": "e^{2x} = 1 + 2x + 2x^{2} + \\frac{4x^{3}}{3} + \\cdots",
          "explanation": "Collect terms in ascending powers.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check constant",
          "workingLatex": "e^{0} = 1",
          "explanation": "Matches when $x=0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Validity",
          "workingLatex": "\\text{Valid for all } x",
          "explanation": "Exponential series converges for all real $x$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Pattern",
          "workingLatex": "\\text{Coefficient of } x^{n} \\text{ is } \\frac{2^{n}}{n!}",
          "explanation": "General term structure.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "1 + 2x + 2x^{2} + \\frac{4x^{3}}{3} + \\cdots",
          "explanation": "Maclaurin series for $e^{2x}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify linear term",
          "workingLatex": "\\frac{d}{dx}(e^{2x})\\big|_{0} = 2",
          "explanation": "First derivative at zero.",
          "diagram": null
        }
      ],
      "finalAnswer": "$e^{2x} = 1 + 2x + 2x^{2} + \\frac{4x^{3}}{3} + \\cdots$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Maclaurin series",
    "subtopicId": "fm.y2.pure.maclaurin",
    "questionDiagram": null,
    "id": "fm.y2.pure.maclaurin.q017",
    "tags": [
      "composite",
      "exponential"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find the Maclaurin series for $e^{-1x}$ up to and including the term in $x^{3}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Start from $e^{x}$",
          "workingLatex": "e^{x} = 1 + x + \\frac{x^{2}}{2!} + \\frac{x^{3}}{3!} + \\cdots",
          "explanation": "Standard series.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "\\text{Replace } x \\text{ by } -1x",
          "explanation": "The composite argument here is $-x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Replace each power",
          "workingLatex": "(-1x)^{2} = 1x^{2},\\; (-1x)^{3} = -1x^{3}",
          "explanation": "Square and cube the inner factor.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write series",
          "workingLatex": "e^{-1x} = 1 + -x + \\frac{x^{2}}{2!} + -\\frac{x^{3}}{3!} + \\cdots",
          "explanation": "Collect terms in ascending powers.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check constant",
          "workingLatex": "e^{0} = 1",
          "explanation": "Matches when $x=0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Validity",
          "workingLatex": "\\text{Valid for all } x",
          "explanation": "Exponential series converges for all real $x$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Pattern",
          "workingLatex": "\\text{Coefficient of } x^{n} \\text{ is } \\frac{-1^{n}}{n!}",
          "explanation": "General term structure.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "1 + -x + \\frac{x^{2}}{2!} + -\\frac{x^{3}}{3!} + \\cdots",
          "explanation": "Maclaurin series for $e^{-1x}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify linear term",
          "workingLatex": "\\frac{d}{dx}(e^{-1x})\\big|_{0} = -1",
          "explanation": "First derivative at zero.",
          "diagram": null
        }
      ],
      "finalAnswer": "$e^{-1x} = 1 + -x + \\frac{x^{2}}{2!} + -\\frac{x^{3}}{3!} + \\cdots$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Maclaurin series",
    "subtopicId": "fm.y2.pure.maclaurin",
    "questionDiagram": null,
    "id": "fm.y2.pure.maclaurin.q018",
    "tags": [
      "composite",
      "exponential"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find the Maclaurin series for $e^{3x}$ up to and including the term in $x^{3}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Start from $e^{x}$",
          "workingLatex": "e^{x} = 1 + x + \\frac{x^{2}}{2!} + \\frac{x^{3}}{3!} + \\cdots",
          "explanation": "Standard series.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "\\text{Replace } x \\text{ by } 3x",
          "explanation": "The composite argument here is $3x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Replace each power",
          "workingLatex": "(3x)^{2} = 9x^{2},\\; (3x)^{3} = 27x^{3}",
          "explanation": "Square and cube the inner factor.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write series",
          "workingLatex": "e^{3x} = 1 + 3x + \\frac{9x^{2}}{2} + \\frac{27x^{3}}{6} + \\cdots",
          "explanation": "Collect terms in ascending powers.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check constant",
          "workingLatex": "e^{0} = 1",
          "explanation": "Matches when $x=0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Validity",
          "workingLatex": "\\text{Valid for all } x",
          "explanation": "Exponential series converges for all real $x$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Pattern",
          "workingLatex": "\\text{Coefficient of } x^{n} \\text{ is } \\frac{3^{n}}{n!}",
          "explanation": "General term structure.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "1 + 3x + \\frac{9x^{2}}{2} + \\frac{27x^{3}}{6} + \\cdots",
          "explanation": "Maclaurin series for $e^{3x}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify linear term",
          "workingLatex": "\\frac{d}{dx}(e^{3x})\\big|_{0} = 3",
          "explanation": "First derivative at zero.",
          "diagram": null
        }
      ],
      "finalAnswer": "$e^{3x} = 1 + 3x + \\frac{9x^{2}}{2} + \\frac{27x^{3}}{6} + \\cdots$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Maclaurin series",
    "subtopicId": "fm.y2.pure.maclaurin",
    "questionDiagram": null,
    "id": "fm.y2.pure.maclaurin.q019",
    "tags": [
      "composite",
      "exponential"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find the Maclaurin series for $e^{\\tfrac{1}{2}x}$ up to and including the term in $x^{3}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Start from $e^{x}$",
          "workingLatex": "e^{x} = 1 + x + \\frac{x^{2}}{2!} + \\frac{x^{3}}{3!} + \\cdots",
          "explanation": "Standard series.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "\\text{Replace } x \\text{ by } \\tfrac{1}{2}x",
          "explanation": "The composite argument here is $\\tfrac{1}{2}x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Replace each power",
          "workingLatex": "(\\tfrac{1}{2}x)^{2} = NaNx^{2},\\; (\\tfrac{1}{2}x)^{3} = NaNx^{3}",
          "explanation": "Square and cube the inner factor.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write series",
          "workingLatex": "e^{\\tfrac{1}{2}x} = 1 + \\tfrac{x}{2} + \\tfrac{x^{2}}{8} + \\tfrac{x^{3}}{48} + \\cdots",
          "explanation": "Collect terms in ascending powers.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check constant",
          "workingLatex": "e^{0} = 1",
          "explanation": "Matches when $x=0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Validity",
          "workingLatex": "\\text{Valid for all } x",
          "explanation": "Exponential series converges for all real $x$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Pattern",
          "workingLatex": "\\text{Coefficient of } x^{n} \\text{ is } \\frac{\\tfrac{1}{2}^{n}}{n!}",
          "explanation": "General term structure.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "1 + \\tfrac{x}{2} + \\tfrac{x^{2}}{8} + \\tfrac{x^{3}}{48} + \\cdots",
          "explanation": "Maclaurin series for $e^{\\tfrac{1}{2}x}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify linear term",
          "workingLatex": "\\frac{d}{dx}(e^{\\tfrac{1}{2}x})\\big|_{0} = \\tfrac{1}{2}",
          "explanation": "First derivative at zero.",
          "diagram": null
        }
      ],
      "finalAnswer": "$e^{\\tfrac{1}{2}x} = 1 + \\tfrac{x}{2} + \\tfrac{x^{2}}{8} + \\tfrac{x^{3}}{48} + \\cdots$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Maclaurin series",
    "subtopicId": "fm.y2.pure.maclaurin",
    "questionDiagram": null,
    "id": "fm.y2.pure.maclaurin.q020",
    "tags": [
      "composite",
      "sine"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find the Maclaurin series for $\\sin(2x)$ up to and including the term in $x^{5}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Standard series",
          "workingLatex": "\\sin x = x - \\frac{x^{3}}{3!} + \\cdots",
          "explanation": "Start from $\\sin x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute $x \\mapsto 2x$",
          "workingLatex": "\\sin(2x)",
          "explanation": "Replace $x$ by $2x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand powers",
          "workingLatex": "(2x)^{3} = 8x^{3}",
          "explanation": "Cube the factor.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write series",
          "workingLatex": "\\sin(2x) = 2x + -\\frac{8x^{3}}{6} + \\frac{32x^{5}}{120} + \\cdots",
          "explanation": "Collect terms.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Odd function",
          "workingLatex": "\\text{Only odd powers}",
          "explanation": "Symmetry preserved.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check $x=0$",
          "workingLatex": "\\sin 0 = 0",
          "explanation": "No constant term.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Validity",
          "workingLatex": "\\text{Valid for all } x",
          "explanation": "Sine series converges everywhere.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "2x + -\\frac{8x^{3}}{6} + \\frac{32x^{5}}{120} + \\cdots",
          "explanation": "Final expansion.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Coefficient pattern",
          "workingLatex": "\\text{Coeff of } x^{2r+1} \\text{ involves } 2^{2r+1}",
          "explanation": "Powers of $k$ in each term.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sin(2x) = 2x + -\\frac{8x^{3}}{6} + \\frac{32x^{5}}{120} + \\cdots$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Maclaurin series",
    "subtopicId": "fm.y2.pure.maclaurin",
    "questionDiagram": null,
    "id": "fm.y2.pure.maclaurin.q021",
    "tags": [
      "composite",
      "sine"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find the Maclaurin series for $\\sin(3x)$ up to and including the term in $x^{5}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Standard series",
          "workingLatex": "\\sin x = x - \\frac{x^{3}}{3!} + \\cdots",
          "explanation": "Start from $\\sin x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute $x \\mapsto 3x$",
          "workingLatex": "\\sin(3x)",
          "explanation": "Replace $x$ by $3x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand powers",
          "workingLatex": "(3x)^{3} = 27x^{3}",
          "explanation": "Cube the factor.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write series",
          "workingLatex": "\\sin(3x) = 3x + -\\frac{27x^{3}}{6} + \\frac{243x^{5}}{120} + \\cdots",
          "explanation": "Collect terms.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Odd function",
          "workingLatex": "\\text{Only odd powers}",
          "explanation": "Symmetry preserved.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check $x=0$",
          "workingLatex": "\\sin 0 = 0",
          "explanation": "No constant term.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Validity",
          "workingLatex": "\\text{Valid for all } x",
          "explanation": "Sine series converges everywhere.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "3x + -\\frac{27x^{3}}{6} + \\frac{243x^{5}}{120} + \\cdots",
          "explanation": "Final expansion.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Coefficient pattern",
          "workingLatex": "\\text{Coeff of } x^{2r+1} \\text{ involves } 3^{2r+1}",
          "explanation": "Powers of $k$ in each term.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sin(3x) = 3x + -\\frac{27x^{3}}{6} + \\frac{243x^{5}}{120} + \\cdots$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Maclaurin series",
    "subtopicId": "fm.y2.pure.maclaurin",
    "questionDiagram": null,
    "id": "fm.y2.pure.maclaurin.q022",
    "tags": [
      "composite",
      "sine"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find the Maclaurin series for $\\sin(-1x)$ up to and including the term in $x^{5}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Standard series",
          "workingLatex": "\\sin x = x - \\frac{x^{3}}{3!} + \\cdots",
          "explanation": "Start from $\\sin x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute $x \\mapsto -x$",
          "workingLatex": "\\sin(-1x)",
          "explanation": "Replace $x$ by $-x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand powers",
          "workingLatex": "(-1x)^{3} = -1x^{3}",
          "explanation": "Cube the factor.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write series",
          "workingLatex": "\\sin(-1x) = -x + \\frac{x^{3}}{6} + -\\frac{x^{5}}{120} + \\cdots",
          "explanation": "Collect terms.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Odd function",
          "workingLatex": "\\text{Only odd powers}",
          "explanation": "Symmetry preserved.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check $x=0$",
          "workingLatex": "\\sin 0 = 0",
          "explanation": "No constant term.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Validity",
          "workingLatex": "\\text{Valid for all } x",
          "explanation": "Sine series converges everywhere.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "-x + \\frac{x^{3}}{6} + -\\frac{x^{5}}{120} + \\cdots",
          "explanation": "Final expansion.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Coefficient pattern",
          "workingLatex": "\\text{Coeff of } x^{2r+1} \\text{ involves } -1^{2r+1}",
          "explanation": "Powers of $k$ in each term.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sin(-1x) = -x + \\frac{x^{3}}{6} + -\\frac{x^{5}}{120} + \\cdots$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Maclaurin series",
    "subtopicId": "fm.y2.pure.maclaurin",
    "questionDiagram": null,
    "id": "fm.y2.pure.maclaurin.q023",
    "tags": [
      "composite",
      "cosine"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find the Maclaurin series for $\\cos(2x)$ up to and including the term in $x^{4}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Standard series",
          "workingLatex": "\\cos x = 1 - \\frac{x^{2}}{2!} + \\frac{x^{4}}{4!} - \\cdots",
          "explanation": "Start from $\\cos x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "\\cos(2x)",
          "explanation": "Replace $x$ by $2x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand",
          "workingLatex": "(2x)^{2} = 4x^{2},\\; (2x)^{4} = 16x^{4}",
          "explanation": "Even powers only.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write series",
          "workingLatex": "\\cos(2x) = 1 + -2x^{2} + \\frac{16x^{4}}{24} + \\cdots",
          "explanation": "Collect terms.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check $x=0$",
          "workingLatex": "\\cos 0 = 1",
          "explanation": "Constant term 1.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Even function",
          "workingLatex": "\\text{Only even powers}",
          "explanation": "Cosine symmetry.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Validity",
          "workingLatex": "\\text{Valid for all } x",
          "explanation": "Cosine series converges everywhere.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "1 + -2x^{2} + \\frac{16x^{4}}{24} + \\cdots",
          "explanation": "Final expansion.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify quadratic",
          "workingLatex": "\\text{Coeff of } x^{2} \\text{ is } -\\frac{2^{2}}{2}",
          "explanation": "From substitution.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\cos(2x) = 1 + -2x^{2} + \\frac{16x^{4}}{24} + \\cdots$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Maclaurin series",
    "subtopicId": "fm.y2.pure.maclaurin",
    "questionDiagram": null,
    "id": "fm.y2.pure.maclaurin.q024",
    "tags": [
      "composite",
      "cosine"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find the Maclaurin series for $\\cos(3x)$ up to and including the term in $x^{4}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Standard series",
          "workingLatex": "\\cos x = 1 - \\frac{x^{2}}{2!} + \\frac{x^{4}}{4!} - \\cdots",
          "explanation": "Start from $\\cos x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "\\cos(3x)",
          "explanation": "Replace $x$ by $3x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand",
          "workingLatex": "(3x)^{2} = 9x^{2},\\; (3x)^{4} = 81x^{4}",
          "explanation": "Even powers only.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write series",
          "workingLatex": "\\cos(3x) = 1 + -\\frac{9x^{2}}{2} + \\frac{81x^{4}}{24} + \\cdots",
          "explanation": "Collect terms.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check $x=0$",
          "workingLatex": "\\cos 0 = 1",
          "explanation": "Constant term 1.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Even function",
          "workingLatex": "\\text{Only even powers}",
          "explanation": "Cosine symmetry.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Validity",
          "workingLatex": "\\text{Valid for all } x",
          "explanation": "Cosine series converges everywhere.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "1 + -\\frac{9x^{2}}{2} + \\frac{81x^{4}}{24} + \\cdots",
          "explanation": "Final expansion.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify quadratic",
          "workingLatex": "\\text{Coeff of } x^{2} \\text{ is } -\\frac{3^{2}}{2}",
          "explanation": "From substitution.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\cos(3x) = 1 + -\\frac{9x^{2}}{2} + \\frac{81x^{4}}{24} + \\cdots$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Maclaurin series",
    "subtopicId": "fm.y2.pure.maclaurin",
    "questionDiagram": null,
    "id": "fm.y2.pure.maclaurin.q025",
    "tags": [
      "composite",
      "cosine"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find the Maclaurin series for $\\cos(\\tfrac{1}{2}x)$ up to and including the term in $x^{4}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Standard series",
          "workingLatex": "\\cos x = 1 - \\frac{x^{2}}{2!} + \\frac{x^{4}}{4!} - \\cdots",
          "explanation": "Start from $\\cos x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "\\cos(\\tfrac{1}{2}x)",
          "explanation": "Replace $x$ by $\\tfrac{1}{2}x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand",
          "workingLatex": "(\\tfrac{1}{2}x)^{2} = NaNx^{2},\\; (\\tfrac{1}{2}x)^{4} = NaNx^{4}",
          "explanation": "Even powers only.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write series",
          "workingLatex": "\\cos(\\tfrac{1}{2}x) = 1 + -\\frac{x^{2}}{8} + \\frac{x^{4}}{384} + \\cdots",
          "explanation": "Collect terms.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check $x=0$",
          "workingLatex": "\\cos 0 = 1",
          "explanation": "Constant term 1.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Even function",
          "workingLatex": "\\text{Only even powers}",
          "explanation": "Cosine symmetry.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Validity",
          "workingLatex": "\\text{Valid for all } x",
          "explanation": "Cosine series converges everywhere.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "1 + -\\frac{x^{2}}{8} + \\frac{x^{4}}{384} + \\cdots",
          "explanation": "Final expansion.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify quadratic",
          "workingLatex": "\\text{Coeff of } x^{2} \\text{ is } -\\frac{\\tfrac{1}{2}^{2}}{2}",
          "explanation": "From substitution.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\cos(\\tfrac{1}{2}x) = 1 + -\\frac{x^{2}}{8} + \\frac{x^{4}}{384} + \\cdots$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Maclaurin series",
    "subtopicId": "fm.y2.pure.maclaurin",
    "questionDiagram": null,
    "id": "fm.y2.pure.maclaurin.q026",
    "tags": [
      "composite",
      "logarithm",
      "validity"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find the Maclaurin series for $\\ln(1+2x)$ up to and including the term in $x^{3}$, and state the range of validity.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Standard series",
          "workingLatex": "\\ln(1+x) = x - \\frac{x^{2}}{2} + \\frac{x^{3}}{3} - \\cdots",
          "explanation": "Start from $\\ln(1+x)$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "\\ln(1 + 2x)",
          "explanation": "Replace $x$ by $2x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand powers",
          "workingLatex": "\\text{Compute } (2x)^{2}, (2x)^{3}",
          "explanation": "Substitute into each term.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write series",
          "workingLatex": "\\ln(1+2x) = 2x + -2x^{2} + \\frac{8x^{3}}{3} + \\cdots",
          "explanation": "Collect ascending powers.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Validity",
          "workingLatex": "|x| < \\tfrac{1}{2}",
          "explanation": "Requires $|2x| < 1$ for convergence.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check $x=0$",
          "workingLatex": "\\ln 1 = 0",
          "explanation": "No constant term.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Interpret validity",
          "workingLatex": "\\text{Simplify the inequality}",
          "explanation": "Give range in terms of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "2x + -2x^{2} + \\frac{8x^{3}}{3} + \\cdots",
          "explanation": "Series with validity.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Domain note",
          "workingLatex": "\\text{Also need } 1+2x > 0",
          "explanation": "Logarithm requires positive argument.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\ln(1+2x) = 2x + -2x^{2} + \\frac{8x^{3}}{3} + \\cdots$, valid for |x| < \\tfrac{1}{2}."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Maclaurin series",
    "subtopicId": "fm.y2.pure.maclaurin",
    "questionDiagram": null,
    "id": "fm.y2.pure.maclaurin.q027",
    "tags": [
      "composite",
      "logarithm",
      "validity"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find the Maclaurin series for $\\ln(1+-1x)$ up to and including the term in $x^{3}$, and state the range of validity.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Standard series",
          "workingLatex": "\\ln(1+x) = x - \\frac{x^{2}}{2} + \\frac{x^{3}}{3} - \\cdots",
          "explanation": "Start from $\\ln(1+x)$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "\\ln(1 + -1x)",
          "explanation": "Replace $x$ by $-x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand powers",
          "workingLatex": "\\text{Compute } (-1x)^{2}, (-1x)^{3}",
          "explanation": "Substitute into each term.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write series",
          "workingLatex": "\\ln(1+-1x) = -x + -\\frac{x^{2}}{2} + -\\frac{x^{3}}{3} + \\cdots",
          "explanation": "Collect ascending powers.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Validity",
          "workingLatex": "|x| < 1",
          "explanation": "Requires $|-x| < 1$ for convergence.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check $x=0$",
          "workingLatex": "\\ln 1 = 0",
          "explanation": "No constant term.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Interpret validity",
          "workingLatex": "\\text{Simplify the inequality}",
          "explanation": "Give range in terms of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "-x + -\\frac{x^{2}}{2} + -\\frac{x^{3}}{3} + \\cdots",
          "explanation": "Series with validity.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Domain note",
          "workingLatex": "\\text{Also need } 1+-1x > 0",
          "explanation": "Logarithm requires positive argument.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\ln(1+-1x) = -x + -\\frac{x^{2}}{2} + -\\frac{x^{3}}{3} + \\cdots$, valid for |x| < 1."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Maclaurin series",
    "subtopicId": "fm.y2.pure.maclaurin",
    "questionDiagram": null,
    "id": "fm.y2.pure.maclaurin.q028",
    "tags": [
      "composite",
      "logarithm",
      "validity"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find the Maclaurin series for $\\ln(1+3x)$ up to and including the term in $x^{3}$, and state the range of validity.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Standard series",
          "workingLatex": "\\ln(1+x) = x - \\frac{x^{2}}{2} + \\frac{x^{3}}{3} - \\cdots",
          "explanation": "Start from $\\ln(1+x)$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "\\ln(1 + 3x)",
          "explanation": "Replace $x$ by $3x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand powers",
          "workingLatex": "\\text{Compute } (3x)^{2}, (3x)^{3}",
          "explanation": "Substitute into each term.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write series",
          "workingLatex": "\\ln(1+3x) = 3x + -\\frac{9x^{2}}{2} + 9x^{3} + \\cdots",
          "explanation": "Collect ascending powers.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Validity",
          "workingLatex": "|x| < \\tfrac{1}{3}",
          "explanation": "Requires $|3x| < 1$ for convergence.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check $x=0$",
          "workingLatex": "\\ln 1 = 0",
          "explanation": "No constant term.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Interpret validity",
          "workingLatex": "\\text{Simplify the inequality}",
          "explanation": "Give range in terms of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "3x + -\\frac{9x^{2}}{2} + 9x^{3} + \\cdots",
          "explanation": "Series with validity.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Domain note",
          "workingLatex": "\\text{Also need } 1+3x > 0",
          "explanation": "Logarithm requires positive argument.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\ln(1+3x) = 3x + -\\frac{9x^{2}}{2} + 9x^{3} + \\cdots$, valid for |x| < \\tfrac{1}{3}."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Maclaurin series",
    "subtopicId": "fm.y2.pure.maclaurin",
    "questionDiagram": null,
    "id": "fm.y2.pure.maclaurin.q029",
    "tags": [
      "composite",
      "binomial",
      "validity"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find the Maclaurin series for $(1+2x)^{\\tfrac{1}{2}}$ up to and including the term in $x^{3}$, and state the range of validity.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write as $(1+2x)^{\\tfrac{1}{2}}$",
          "workingLatex": "\\text{Use binomial Maclaurin series}",
          "explanation": "Standard form $(1+x)^{n}$ with substitution.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "General coefficients",
          "workingLatex": "\\frac{n(n-1)\\cdots(n-r+1)}{r!}(2x)^{r}",
          "explanation": "Binomial coefficient times power.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute terms",
          "workingLatex": "1 + x + -x^{2} + 2x^{3}",
          "explanation": "Up to $x^{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Validity",
          "workingLatex": "|x| < \\tfrac{1}{2}",
          "explanation": "Convergence condition.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check $x=0$",
          "workingLatex": "1^{\\tfrac{1}{2}} = 1",
          "explanation": "Constant term.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare with $(1+x)^{n}$",
          "workingLatex": "\\text{Replace } x \\text{ by } 2x",
          "explanation": "Substitution method.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "1 + x + -x^{2} + 2x^{3} + \\cdots",
          "explanation": "Final series.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Special case",
          "workingLatex": "\\text{If } n \\in \\mathbb{Z}^{+}, \\text{ series terminates}",
          "explanation": "Note when applicable.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Validity simplified",
          "workingLatex": "|x| < \\tfrac{1}{2}",
          "explanation": "Range for $x$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(1+2x)^{\\tfrac{1}{2}} = 1 + x + -x^{2} + 2x^{3} + \\cdots$, valid for |x| < \\tfrac{1}{2}."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Maclaurin series",
    "subtopicId": "fm.y2.pure.maclaurin",
    "questionDiagram": null,
    "id": "fm.y2.pure.maclaurin.q030",
    "tags": [
      "composite",
      "binomial",
      "validity"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find the Maclaurin series for $(1+-1x)^{2}$ up to and including the term in $x^{3}$, and state the range of validity.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write as $(1+-1x)^{2}$",
          "workingLatex": "\\text{Use binomial Maclaurin series}",
          "explanation": "Standard form $(1+x)^{n}$ with substitution.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "General coefficients",
          "workingLatex": "\\frac{n(n-1)\\cdots(n-r+1)}{r!}(-1x)^{r}",
          "explanation": "Binomial coefficient times power.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute terms",
          "workingLatex": "1 + -2x + 3x^{2} + -4x^{3}",
          "explanation": "Up to $x^{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Validity",
          "workingLatex": "|x| < 1",
          "explanation": "Convergence condition.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check $x=0$",
          "workingLatex": "1^{2} = 1",
          "explanation": "Constant term.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare with $(1+x)^{n}$",
          "workingLatex": "\\text{Replace } x \\text{ by } -1x",
          "explanation": "Substitution method.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "1 + -2x + 3x^{2} + -4x^{3} + \\cdots",
          "explanation": "Final series.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Special case",
          "workingLatex": "\\text{If } n \\in \\mathbb{Z}^{+}, \\text{ series terminates}",
          "explanation": "Note when applicable.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Validity simplified",
          "workingLatex": "|x| < 1",
          "explanation": "Range for $x$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(1+-1x)^{2} = 1 + -2x + 3x^{2} + -4x^{3} + \\cdots$, valid for |x| < 1."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Maclaurin series",
    "subtopicId": "fm.y2.pure.maclaurin",
    "questionDiagram": null,
    "id": "fm.y2.pure.maclaurin.q031",
    "tags": [
      "composite",
      "binomial",
      "validity"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find the Maclaurin series for $(1+3x)^{-1}$ up to and including the term in $x^{3}$, and state the range of validity.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write as $(1+3x)^{-1}$",
          "workingLatex": "\\text{Use binomial Maclaurin series}",
          "explanation": "Standard form $(1+x)^{n}$ with substitution.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "General coefficients",
          "workingLatex": "\\frac{n(n-1)\\cdots(n-r+1)}{r!}(3x)^{r}",
          "explanation": "Binomial coefficient times power.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute terms",
          "workingLatex": "1 + -3x + 6x^{2} + -10x^{3}",
          "explanation": "Up to $x^{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Validity",
          "workingLatex": "|x| < \\tfrac{1}{3}",
          "explanation": "Convergence condition.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check $x=0$",
          "workingLatex": "1^{-1} = 1",
          "explanation": "Constant term.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare with $(1+x)^{n}$",
          "workingLatex": "\\text{Replace } x \\text{ by } 3x",
          "explanation": "Substitution method.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "1 + -3x + 6x^{2} + -10x^{3} + \\cdots",
          "explanation": "Final series.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Special case",
          "workingLatex": "\\text{If } n \\in \\mathbb{Z}^{+}, \\text{ series terminates}",
          "explanation": "Note when applicable.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Validity simplified",
          "workingLatex": "|x| < \\tfrac{1}{3}",
          "explanation": "Range for $x$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(1+3x)^{-1} = 1 + -3x + 6x^{2} + -10x^{3} + \\cdots$, valid for |x| < \\tfrac{1}{3}."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Maclaurin series",
    "subtopicId": "fm.y2.pure.maclaurin",
    "questionDiagram": null,
    "id": "fm.y2.pure.maclaurin.q032",
    "tags": [
      "composite",
      "binomial",
      "validity"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find the Maclaurin series for $(1+\\tfrac{1}{2}x)^{3}$ up to and including the term in $x^{3}$, and state the range of validity.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write as $(1+\\tfrac{1}{2}x)^{3}$",
          "workingLatex": "\\text{Use binomial Maclaurin series}",
          "explanation": "Standard form $(1+x)^{n}$ with substitution.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "General coefficients",
          "workingLatex": "\\frac{n(n-1)\\cdots(n-r+1)}{r!}(\\tfrac{1}{2}x)^{r}",
          "explanation": "Binomial coefficient times power.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute terms",
          "workingLatex": "1 + \\tfrac{3x}{2} + \\tfrac{3x^{2}}{8} + -\\tfrac{x^{3}}{16}",
          "explanation": "Up to $x^{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Validity",
          "workingLatex": "|x| < 2",
          "explanation": "Convergence condition.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check $x=0$",
          "workingLatex": "1^{3} = 1",
          "explanation": "Constant term.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare with $(1+x)^{n}$",
          "workingLatex": "\\text{Replace } x \\text{ by } \\tfrac{1}{2}x",
          "explanation": "Substitution method.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "1 + \\tfrac{3x}{2} + \\tfrac{3x^{2}}{8} + -\\tfrac{x^{3}}{16} + \\cdots",
          "explanation": "Final series.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Special case",
          "workingLatex": "\\text{If } n \\in \\mathbb{Z}^{+}, \\text{ series terminates}",
          "explanation": "Note when applicable.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Validity simplified",
          "workingLatex": "|x| < 2",
          "explanation": "Range for $x$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(1+\\tfrac{1}{2}x)^{3} = 1 + \\tfrac{3x}{2} + \\tfrac{3x^{2}}{8} + -\\tfrac{x^{3}}{16} + \\cdots$, valid for |x| < 2."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Maclaurin series",
    "subtopicId": "fm.y2.pure.maclaurin",
    "questionDiagram": null,
    "id": "fm.y2.pure.maclaurin.q033",
    "tags": [
      "negative",
      "composite",
      "exponential"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find the Maclaurin series for $e^{-2x}$ up to and including the term in $x^{3}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Start from $e^{x}$",
          "workingLatex": "e^{x} = 1 + x + \\frac{x^{2}}{2!} + \\frac{x^{3}}{3!} + \\cdots",
          "explanation": "Standard series.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "\\text{Replace } x \\text{ by } -2x",
          "explanation": "The composite argument here is $-2x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Replace each power",
          "workingLatex": "(-2x)^{2} = 4x^{2},\\; (-2x)^{3} = -8x^{3}",
          "explanation": "Square and cube the inner factor.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write series",
          "workingLatex": "e^{-2x} = 1 + -2x + 2x^{2} + -\\frac{4x^{3}}{3} + \\cdots",
          "explanation": "Collect terms in ascending powers.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check constant",
          "workingLatex": "e^{0} = 1",
          "explanation": "Matches when $x=0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Validity",
          "workingLatex": "\\text{Valid for all } x",
          "explanation": "Exponential series converges for all real $x$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Pattern",
          "workingLatex": "\\text{Coefficient of } x^{n} \\text{ is } \\frac{-2^{n}}{n!}",
          "explanation": "General term structure.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "1 + -2x + 2x^{2} + -\\frac{4x^{3}}{3} + \\cdots",
          "explanation": "Maclaurin series for $e^{-2x}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify linear term",
          "workingLatex": "\\frac{d}{dx}(e^{-2x})\\big|_{0} = -2",
          "explanation": "First derivative at zero.",
          "diagram": null
        }
      ],
      "finalAnswer": "$e^{-2x} = 1 + -2x + 2x^{2} + -\\frac{4x^{3}}{3} + \\cdots$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Maclaurin series",
    "subtopicId": "fm.y2.pure.maclaurin",
    "questionDiagram": null,
    "id": "fm.y2.pure.maclaurin.q034",
    "tags": [
      "composite",
      "sine"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find the Maclaurin series for $\\sin(4x)$ up to and including the term in $x^{5}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Standard series",
          "workingLatex": "\\sin x = x - \\frac{x^{3}}{3!} + \\cdots",
          "explanation": "Start from $\\sin x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute $x \\mapsto 4x$",
          "workingLatex": "\\sin(4x)",
          "explanation": "Replace $x$ by $4x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand powers",
          "workingLatex": "(4x)^{3} = 64x^{3}",
          "explanation": "Cube the factor.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write series",
          "workingLatex": "\\sin(4x) = 4x + -\\frac{64x^{3}}{6} + \\frac{1024x^{5}}{120} + \\cdots",
          "explanation": "Collect terms.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Odd function",
          "workingLatex": "\\text{Only odd powers}",
          "explanation": "Symmetry preserved.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check $x=0$",
          "workingLatex": "\\sin 0 = 0",
          "explanation": "No constant term.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Validity",
          "workingLatex": "\\text{Valid for all } x",
          "explanation": "Sine series converges everywhere.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "4x + -\\frac{64x^{3}}{6} + \\frac{1024x^{5}}{120} + \\cdots",
          "explanation": "Final expansion.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Coefficient pattern",
          "workingLatex": "\\text{Coeff of } x^{2r+1} \\text{ involves } 4^{2r+1}",
          "explanation": "Powers of $k$ in each term.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sin(4x) = 4x + -\\frac{64x^{3}}{6} + \\frac{1024x^{5}}{120} + \\cdots$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Maclaurin series",
    "subtopicId": "fm.y2.pure.maclaurin",
    "questionDiagram": null,
    "id": "fm.y2.pure.maclaurin.q035",
    "tags": [
      "composite",
      "cosine"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find the Maclaurin series for $\\cos(-2x)$ up to and including the term in $x^{4}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Standard series",
          "workingLatex": "\\cos x = 1 - \\frac{x^{2}}{2!} + \\frac{x^{4}}{4!} - \\cdots",
          "explanation": "Start from $\\cos x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "\\cos(-2x)",
          "explanation": "Replace $x$ by $-2x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand",
          "workingLatex": "(-2x)^{2} = 4x^{2},\\; (-2x)^{4} = 16x^{4}",
          "explanation": "Even powers only.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write series",
          "workingLatex": "\\cos(-2x) = 1 + -2x^{2} + \\frac{16x^{4}}{24} + \\cdots",
          "explanation": "Collect terms.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check $x=0$",
          "workingLatex": "\\cos 0 = 1",
          "explanation": "Constant term 1.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Even function",
          "workingLatex": "\\text{Only even powers}",
          "explanation": "Cosine symmetry.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Validity",
          "workingLatex": "\\text{Valid for all } x",
          "explanation": "Cosine series converges everywhere.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "1 + -2x^{2} + \\frac{16x^{4}}{24} + \\cdots",
          "explanation": "Final expansion.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify quadratic",
          "workingLatex": "\\text{Coeff of } x^{2} \\text{ is } -\\frac{-2^{2}}{2}",
          "explanation": "From substitution.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\cos(-2x) = 1 + -2x^{2} + \\frac{16x^{4}}{24} + \\cdots$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Maclaurin series",
    "subtopicId": "fm.y2.pure.maclaurin",
    "questionDiagram": null,
    "id": "fm.y2.pure.maclaurin.q036",
    "tags": [
      "exponential",
      "approximation"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Use the Maclaurin series for e^{x} up to the term in $x^{3}$ to find an approximation to e^{0.1}.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Maclaurin series",
          "workingLatex": "e^{x} = 1 + x + \\frac{x^{2}}{2} + \\frac{x^{3}}{6} + \\cdots",
          "explanation": "Use expansion up to required order.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "x = 0.1",
          "explanation": "Insert the given small value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate each term",
          "workingLatex": "\\text{Compute powers of } 0.1",
          "explanation": "Keep sufficient decimal accuracy.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Sum terms",
          "workingLatex": "\\approx 1.10517",
          "explanation": "Add the retained terms.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Reason for accuracy",
          "workingLatex": "\\text{Small } x \\text{ makes higher-order terms negligible}",
          "explanation": "Truncation error is small.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare",
          "workingLatex": "\\text{Calculator value close to } 1.10517",
          "explanation": "Sanity check.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "1.10517",
          "explanation": "Approximation.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "More terms",
          "workingLatex": "\\text{Adding terms improves accuracy}",
          "explanation": "Trade-off between effort and precision.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Validity",
          "workingLatex": "\\text{Ensure } 0.1 \\text{ lies in valid range}",
          "explanation": "Check convergence condition.",
          "diagram": null
        }
      ],
      "finalAnswer": "$1.10517$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Maclaurin series",
    "subtopicId": "fm.y2.pure.maclaurin",
    "questionDiagram": null,
    "id": "fm.y2.pure.maclaurin.q037",
    "tags": [
      "sine",
      "approximation"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Use the Maclaurin series for \\sin x up to the term in $x^{3}$ to find an approximation to \\sin 0.2.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Maclaurin series",
          "workingLatex": "\\sin x = x + -\\frac{x^{3}}{6} + \\cdots",
          "explanation": "Use expansion up to required order.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "x = 0.2",
          "explanation": "Insert the given small value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate each term",
          "workingLatex": "\\text{Compute powers of } 0.2",
          "explanation": "Keep sufficient decimal accuracy.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Sum terms",
          "workingLatex": "\\approx 0.19867",
          "explanation": "Add the retained terms.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Reason for accuracy",
          "workingLatex": "\\text{Small } x \\text{ makes higher-order terms negligible}",
          "explanation": "Truncation error is small.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare",
          "workingLatex": "\\text{Calculator value close to } 0.19867",
          "explanation": "Sanity check.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "0.19867",
          "explanation": "Approximation.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "More terms",
          "workingLatex": "\\text{Adding terms improves accuracy}",
          "explanation": "Trade-off between effort and precision.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Validity",
          "workingLatex": "\\text{Ensure } 0.2 \\text{ lies in valid range}",
          "explanation": "Check convergence condition.",
          "diagram": null
        }
      ],
      "finalAnswer": "$0.19867$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Maclaurin series",
    "subtopicId": "fm.y2.pure.maclaurin",
    "questionDiagram": null,
    "id": "fm.y2.pure.maclaurin.q038",
    "tags": [
      "cosine",
      "approximation"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Use the Maclaurin series for \\cos x up to the term in $x^{3}$ to find an approximation to \\cos 0.1.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Maclaurin series",
          "workingLatex": "\\cos x = 1 + -\\frac{x^{2}}{2} + \\cdots",
          "explanation": "Use expansion up to required order.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "x = 0.1",
          "explanation": "Insert the given small value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate each term",
          "workingLatex": "\\text{Compute powers of } 0.1",
          "explanation": "Keep sufficient decimal accuracy.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Sum terms",
          "workingLatex": "\\approx 0.995",
          "explanation": "Add the retained terms.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Reason for accuracy",
          "workingLatex": "\\text{Small } x \\text{ makes higher-order terms negligible}",
          "explanation": "Truncation error is small.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare",
          "workingLatex": "\\text{Calculator value close to } 0.995",
          "explanation": "Sanity check.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "0.995",
          "explanation": "Approximation.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "More terms",
          "workingLatex": "\\text{Adding terms improves accuracy}",
          "explanation": "Trade-off between effort and precision.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Validity",
          "workingLatex": "\\text{Ensure } 0.1 \\text{ lies in valid range}",
          "explanation": "Check convergence condition.",
          "diagram": null
        }
      ],
      "finalAnswer": "$0.995$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Maclaurin series",
    "subtopicId": "fm.y2.pure.maclaurin",
    "questionDiagram": null,
    "id": "fm.y2.pure.maclaurin.q039",
    "tags": [
      "logarithm",
      "approximation"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Use the Maclaurin series for \\ln(1+x) up to the term in $x^{3}$ to find an approximation to \\ln(1+0.1).",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Maclaurin series",
          "workingLatex": "\\ln(1+x) = x + -\\frac{x^{2}}{2} + \\frac{x^{3}}{3} + \\cdots",
          "explanation": "Use expansion up to required order.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "x = 0.1",
          "explanation": "Insert the given small value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate each term",
          "workingLatex": "\\text{Compute powers of } 0.1",
          "explanation": "Keep sufficient decimal accuracy.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Sum terms",
          "workingLatex": "\\approx 0.095833",
          "explanation": "Add the retained terms.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Reason for accuracy",
          "workingLatex": "\\text{Small } x \\text{ makes higher-order terms negligible}",
          "explanation": "Truncation error is small.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare",
          "workingLatex": "\\text{Calculator value close to } 0.095833",
          "explanation": "Sanity check.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "0.095833",
          "explanation": "Approximation.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "More terms",
          "workingLatex": "\\text{Adding terms improves accuracy}",
          "explanation": "Trade-off between effort and precision.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Validity",
          "workingLatex": "\\text{Ensure } 0.1 \\text{ lies in valid range}",
          "explanation": "Check convergence condition.",
          "diagram": null
        }
      ],
      "finalAnswer": "$0.095833$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Maclaurin series",
    "subtopicId": "fm.y2.pure.maclaurin",
    "questionDiagram": null,
    "id": "fm.y2.pure.maclaurin.q040",
    "tags": [
      "exponential",
      "coefficient"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find the coefficient of $x^{3}$ in the Maclaurin series for $e^{2x}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write Maclaurin series",
          "workingLatex": "$e^{2x}$",
          "explanation": "Standard or composite expansion.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify power",
          "workingLatex": "\\text{Coefficient of } x^{3}",
          "explanation": "Locate the required term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Extract coefficient",
          "workingLatex": "\\frac{8}{6}",
          "explanation": "Read off the multiplier of $x^{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Verify via derivatives",
          "workingLatex": "\\frac{f^{(3)}(0)}{3!}",
          "explanation": "Alternative: Maclaurin coefficient formula.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check",
          "workingLatex": "\\frac{8}{6}",
          "explanation": "Confirm by substitution or pattern.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\frac{8}{6}",
          "explanation": "Required coefficient.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Maclaurin series",
          "workingLatex": "f(x)=\\sum_{n=0}^{\\infty}\\frac{f^{(n)}(0)}{n!}x^{n}",
          "explanation": "Taylor series centred at $x=0$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Standard results",
          "workingLatex": "e^{x},\\;\\ln(1+x),\\;\\sin x,\\;\\cos x,\\;(1+x)^{n}",
          "explanation": "Know these from the formula booklet.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Substitution",
          "workingLatex": "\\text{Replace } x \\text{ by } ax,\\; x^{2},\\; \\text{etc.}",
          "explanation": "Build composite expansions.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{8}{6}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Maclaurin series",
    "subtopicId": "fm.y2.pure.maclaurin",
    "questionDiagram": null,
    "id": "fm.y2.pure.maclaurin.q041",
    "tags": [
      "sine",
      "coefficient"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find the coefficient of $x^{5}$ in the Maclaurin series for $\\sin(3x)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write Maclaurin series",
          "workingLatex": "$\\sin(3x)$",
          "explanation": "Standard or composite expansion.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify power",
          "workingLatex": "\\text{Coefficient of } x^{5}",
          "explanation": "Locate the required term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Extract coefficient",
          "workingLatex": "\\frac{243}{120}",
          "explanation": "Read off the multiplier of $x^{5}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Verify via derivatives",
          "workingLatex": "\\frac{f^{(5)}(0)}{5!}",
          "explanation": "Alternative: Maclaurin coefficient formula.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check",
          "workingLatex": "\\frac{243}{120}",
          "explanation": "Confirm by substitution or pattern.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\frac{243}{120}",
          "explanation": "Required coefficient.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Maclaurin series",
          "workingLatex": "f(x)=\\sum_{n=0}^{\\infty}\\frac{f^{(n)}(0)}{n!}x^{n}",
          "explanation": "Taylor series centred at $x=0$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Standard results",
          "workingLatex": "e^{x},\\;\\ln(1+x),\\;\\sin x,\\;\\cos x,\\;(1+x)^{n}",
          "explanation": "Know these from the formula booklet.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Substitution",
          "workingLatex": "\\text{Replace } x \\text{ by } ax,\\; x^{2},\\; \\text{etc.}",
          "explanation": "Build composite expansions.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{243}{120}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Maclaurin series",
    "subtopicId": "fm.y2.pure.maclaurin",
    "questionDiagram": null,
    "id": "fm.y2.pure.maclaurin.q042",
    "tags": [
      "binomial",
      "coefficient"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find the coefficient of $x^{2}$ in the Maclaurin series for $(1+x)^{-2}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write Maclaurin series",
          "workingLatex": "$(1+x)^{-2}$",
          "explanation": "Standard or composite expansion.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify power",
          "workingLatex": "\\text{Coefficient of } x^{2}",
          "explanation": "Locate the required term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Extract coefficient",
          "workingLatex": "3",
          "explanation": "Read off the multiplier of $x^{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Verify via derivatives",
          "workingLatex": "\\frac{f^{(2)}(0)}{2!}",
          "explanation": "Alternative: Maclaurin coefficient formula.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check",
          "workingLatex": "3",
          "explanation": "Confirm by substitution or pattern.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "3",
          "explanation": "Required coefficient.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Maclaurin series",
          "workingLatex": "f(x)=\\sum_{n=0}^{\\infty}\\frac{f^{(n)}(0)}{n!}x^{n}",
          "explanation": "Taylor series centred at $x=0$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Standard results",
          "workingLatex": "e^{x},\\;\\ln(1+x),\\;\\sin x,\\;\\cos x,\\;(1+x)^{n}",
          "explanation": "Know these from the formula booklet.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Substitution",
          "workingLatex": "\\text{Replace } x \\text{ by } ax,\\; x^{2},\\; \\text{etc.}",
          "explanation": "Build composite expansions.",
          "diagram": null
        }
      ],
      "finalAnswer": "$3$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Maclaurin series",
    "subtopicId": "fm.y2.pure.maclaurin",
    "questionDiagram": null,
    "id": "fm.y2.pure.maclaurin.q043",
    "tags": [
      "logarithm",
      "coefficient"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find the coefficient of $x^{3}$ in the Maclaurin series for $\\ln(1+2x)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write Maclaurin series",
          "workingLatex": "$\\ln(1+2x)$",
          "explanation": "Standard or composite expansion.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify power",
          "workingLatex": "\\text{Coefficient of } x^{3}",
          "explanation": "Locate the required term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Extract coefficient",
          "workingLatex": "\\frac{8}{3}",
          "explanation": "Read off the multiplier of $x^{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Verify via derivatives",
          "workingLatex": "\\frac{f^{(3)}(0)}{3!}",
          "explanation": "Alternative: Maclaurin coefficient formula.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check",
          "workingLatex": "\\frac{8}{3}",
          "explanation": "Confirm by substitution or pattern.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\frac{8}{3}",
          "explanation": "Required coefficient.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Maclaurin series",
          "workingLatex": "f(x)=\\sum_{n=0}^{\\infty}\\frac{f^{(n)}(0)}{n!}x^{n}",
          "explanation": "Taylor series centred at $x=0$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Standard results",
          "workingLatex": "e^{x},\\;\\ln(1+x),\\;\\sin x,\\;\\cos x,\\;(1+x)^{n}",
          "explanation": "Know these from the formula booklet.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Substitution",
          "workingLatex": "\\text{Replace } x \\text{ by } ax,\\; x^{2},\\; \\text{etc.}",
          "explanation": "Build composite expansions.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{8}{3}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Maclaurin series",
    "subtopicId": "fm.y2.pure.maclaurin",
    "questionDiagram": null,
    "id": "fm.y2.pure.maclaurin.q044",
    "tags": [
      "cosine",
      "coefficient"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find the coefficient of $x^{4}$ in the Maclaurin series for $\\cos(2x)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write Maclaurin series",
          "workingLatex": "$\\cos(2x)$",
          "explanation": "Standard or composite expansion.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify power",
          "workingLatex": "\\text{Coefficient of } x^{4}",
          "explanation": "Locate the required term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Extract coefficient",
          "workingLatex": "\\frac{16}{24}",
          "explanation": "Read off the multiplier of $x^{4}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Verify via derivatives",
          "workingLatex": "\\frac{f^{(4)}(0)}{4!}",
          "explanation": "Alternative: Maclaurin coefficient formula.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check",
          "workingLatex": "\\frac{16}{24}",
          "explanation": "Confirm by substitution or pattern.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\frac{16}{24}",
          "explanation": "Required coefficient.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Maclaurin series",
          "workingLatex": "f(x)=\\sum_{n=0}^{\\infty}\\frac{f^{(n)}(0)}{n!}x^{n}",
          "explanation": "Taylor series centred at $x=0$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Standard results",
          "workingLatex": "e^{x},\\;\\ln(1+x),\\;\\sin x,\\;\\cos x,\\;(1+x)^{n}",
          "explanation": "Know these from the formula booklet.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Substitution",
          "workingLatex": "\\text{Replace } x \\text{ by } ax,\\; x^{2},\\; \\text{etc.}",
          "explanation": "Build composite expansions.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{16}{24}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Maclaurin series",
    "subtopicId": "fm.y2.pure.maclaurin",
    "questionDiagram": null,
    "id": "fm.y2.pure.maclaurin.q045",
    "tags": [
      "binomial",
      "coefficient"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find the coefficient of $x^{3}$ in the Maclaurin series for $(1- x)^{\\frac{1}{2}}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write Maclaurin series",
          "workingLatex": "$(1- x)^{\\frac{1}{2}}$",
          "explanation": "Standard or composite expansion.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify power",
          "workingLatex": "\\text{Coefficient of } x^{3}",
          "explanation": "Locate the required term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Extract coefficient",
          "workingLatex": "-\\frac{1}{16}",
          "explanation": "Read off the multiplier of $x^{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Verify via derivatives",
          "workingLatex": "\\frac{f^{(3)}(0)}{3!}",
          "explanation": "Alternative: Maclaurin coefficient formula.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check",
          "workingLatex": "-\\frac{1}{16}",
          "explanation": "Confirm by substitution or pattern.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "-\\frac{1}{16}",
          "explanation": "Required coefficient.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Maclaurin series",
          "workingLatex": "f(x)=\\sum_{n=0}^{\\infty}\\frac{f^{(n)}(0)}{n!}x^{n}",
          "explanation": "Taylor series centred at $x=0$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Standard results",
          "workingLatex": "e^{x},\\;\\ln(1+x),\\;\\sin x,\\;\\cos x,\\;(1+x)^{n}",
          "explanation": "Know these from the formula booklet.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Substitution",
          "workingLatex": "\\text{Replace } x \\text{ by } ax,\\; x^{2},\\; \\text{etc.}",
          "explanation": "Build composite expansions.",
          "diagram": null
        }
      ],
      "finalAnswer": "$-\\frac{1}{16}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Maclaurin series",
    "subtopicId": "fm.y2.pure.maclaurin",
    "questionDiagram": null,
    "id": "fm.y2.pure.maclaurin.q046",
    "tags": [
      "validity",
      "composite"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find the Maclaurin series for $\\sqrt{1+4x}$ up to the term in $x^{3}$, and state the range of validity.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rewrite",
          "workingLatex": "\\sqrt{1+4x} = (1+4x)^{1/2}",
          "explanation": "Binomial form.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Series",
          "workingLatex": "(1+4x)^{1/2} = 1 + 2x - 4x^{2} + 8x^{3} + \\cdots",
          "explanation": "Use $(1+x)^{1/2}$ with $x \\mapsto 4x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Coefficients",
          "workingLatex": "1,\\; \\tfrac{1}{2}(4),\\; \\tfrac{(1/2)(-1/2)}{2!}(4)^{2},\\; \\tfrac{(1/2)(-1/2)(-3/2)}{3!}(4)^{3}",
          "explanation": "Binomial coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify",
          "workingLatex": "1 + 2x - 4x^{2} + 8x^{3}",
          "explanation": "Up to $x^{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Validity",
          "workingLatex": "|4x| < 1 \\Rightarrow |x| < \\tfrac{1}{4}",
          "explanation": "Convergence condition.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Domain",
          "workingLatex": "1+4x \\geq 0",
          "explanation": "Square root requires non-negative argument.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Combined",
          "workingLatex": "|x| < \\tfrac{1}{4}",
          "explanation": "Series validity.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check $x=0$",
          "workingLatex": "\\sqrt{1} = 1",
          "explanation": "Constant term.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "1 + 2x - 4x^{2} + 8x^{3}",
          "explanation": "Expansion.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sqrt{1+4x} = 1 + 2x - 4x^{2} + 8x^{3} + \\cdots$, valid for $|x| < \\tfrac{1}{4}$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Maclaurin series",
    "subtopicId": "fm.y2.pure.maclaurin",
    "questionDiagram": null,
    "id": "fm.y2.pure.maclaurin.q047",
    "tags": [
      "composite",
      "exponential"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find the Maclaurin series for $e^{-x^{2}}$ up to and including the term in $x^{4}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Start from $e^{u}$",
          "workingLatex": "e^{u} = 1 + u + \\frac{u^{2}}{2!} + \\cdots",
          "explanation": "Standard exponential.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute $u = -x^{2}$",
          "workingLatex": "e^{-x^{2}}",
          "explanation": "Composite argument.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Powers",
          "workingLatex": "u^{2} = x^{4}",
          "explanation": "Only even powers of $x$ appear.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Series",
          "workingLatex": "e^{-x^{2}} = 1 - x^{2} + \\frac{x^{4}}{2} + \\cdots",
          "explanation": "Substitute and simplify.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Even function",
          "workingLatex": "\\text{No odd powers}",
          "explanation": "Symmetry about $x=0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check $x=0$",
          "workingLatex": "e^{0} = 1",
          "explanation": "Constant term.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Validity",
          "workingLatex": "\\text{All real } x",
          "explanation": "Exponential converges everywhere.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Application",
          "workingLatex": "\\text{Used in Gaussian integrals}",
          "explanation": "Important in statistics.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "1 - x^{2} + \\frac{x^{4}}{2}",
          "explanation": "Up to $x^{4}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$e^{-x^{2}} = 1 - x^{2} + \\dfrac{x^{4}}{2} + \\cdots$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Maclaurin series",
    "subtopicId": "fm.y2.pure.maclaurin",
    "questionDiagram": null,
    "id": "fm.y2.pure.maclaurin.q048",
    "tags": [
      "integration"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Given that $\\dfrac{1}{1+x} = 1 - x + x^{2} - x^{3} + \\cdots$ for $|x|<1$, find the Maclaurin series for $\\tan^{-1}(x)$ up to the term in $x^{5}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate",
          "workingLatex": "\\frac{d}{dx}(\\tan^{-1}x) = \\frac{1}{1+x^{2}}",
          "explanation": "Standard derivative.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Geometric series",
          "workingLatex": "\\frac{1}{1+x^{2}} = 1 - x^{2} + x^{4} - \\cdots",
          "explanation": "Replace $x$ by $x^{2}$ in $\\frac{1}{1+x}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate term-by-term",
          "workingLatex": "\\tan^{-1}x = x - \\frac{x^{3}}{3} + \\frac{x^{5}}{5} - \\cdots",
          "explanation": "Integrate each power.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Constant",
          "workingLatex": "C = 0 \\text{ since } \\tan^{-1}0 = 0",
          "explanation": "Fix the constant of integration.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Validity",
          "workingLatex": "|x| < 1",
          "explanation": "Inherited from geometric series.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check $x=0$",
          "workingLatex": "\\tan^{-1}0 = 0",
          "explanation": "No constant term.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Odd function",
          "workingLatex": "\\text{Only odd powers}",
          "explanation": "Consistent with symmetry.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify derivative",
          "workingLatex": "\\frac{d}{dx}\\left(x - \\frac{x^{3}}{3} + \\frac{x^{5}}{5}\\right) = 1 - x^{2} + x^{4}",
          "explanation": "Differentiate back.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "x - \\frac{x^{3}}{3} + \\frac{x^{5}}{5}",
          "explanation": "Up to $x^{5}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\tan^{-1}(x) = x - \\dfrac{x^{3}}{3} + \\dfrac{x^{5}}{5} + \\cdots$ for $|x| < 1$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Maclaurin series",
    "subtopicId": "fm.y2.pure.maclaurin",
    "questionDiagram": null,
    "id": "fm.y2.pure.maclaurin.q049",
    "tags": [
      "differentiation"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "The Maclaurin series for $\\ln(1+x)$ is $\\ln(1+x) = x - \\frac{x^{2}}{2} + \\frac{x^{3}}{3} - \\cdots$. Use differentiation to find the series for $\\dfrac{1}{1+x}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate $\\ln(1+x)$",
          "workingLatex": "\\frac{1}{1+x}",
          "explanation": "Derivative of the log series.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate term-by-term",
          "workingLatex": "1 - x + x^{2} - x^{3} + \\cdots",
          "explanation": "Differentiate each power.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Pattern",
          "workingLatex": "(-1)^{r} x^{r}",
          "explanation": "Alternating signs.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Geometric series",
          "workingLatex": "\\frac{1}{1+x} = \\sum_{r=0}^{\\infty}(-x)^{r}",
          "explanation": "Infinite geometric sum.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Validity",
          "workingLatex": "|x| < 1",
          "explanation": "Same as $\\ln(1+x)$ series.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check $x=0$",
          "workingLatex": "\\frac{1}{1} = 1",
          "explanation": "Constant term.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Alternative",
          "workingLatex": "\\text{Replace } x \\text{ by } -x \\text{ in } \\frac{1}{1-x}",
          "explanation": "Related series.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "1 - x + x^{2} - x^{3} + \\cdots",
          "explanation": "Expansion.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Use",
          "workingLatex": "\\text{Foundation for other expansions}",
          "explanation": "Key building block.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{1}{1+x} = 1 - x + x^{2} - x^{3} + \\cdots$ for $|x| < 1$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Maclaurin series",
    "subtopicId": "fm.y2.pure.maclaurin",
    "questionDiagram": null,
    "id": "fm.y2.pure.maclaurin.q050",
    "tags": [
      "approximation"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Use the first three non-zero terms of the Maclaurin series for $(1+x)^{-1}$ to estimate $(1.05)^{-1}$, and comment on the accuracy.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Series",
          "workingLatex": "(1+x)^{-1} = 1 - x + x^{2} - \\cdots",
          "explanation": "Binomial with $n=-1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute $x=0.05$",
          "workingLatex": "(1.05)^{-1} \\approx 1 - 0.05 + 0.0025",
          "explanation": "Small $x$ for good accuracy.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate",
          "workingLatex": "= 0.9525",
          "explanation": "Sum the terms.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Exact value",
          "workingLatex": "\\frac{1}{1.05} \\approx 0.95238",
          "explanation": "Calculator comparison.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Error",
          "workingLatex": "\\approx 0.00012",
          "explanation": "Very small truncation error.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Comment",
          "workingLatex": "\\text{Good approximation because } x=0.05 \\text{ is small}",
          "explanation": "Validity $|x|<1$ satisfied.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Next term",
          "workingLatex": "-x^{3} \\approx -0.000125",
          "explanation": "Would improve slightly.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "0.9525",
          "explanation": "Estimate.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Validity check",
          "workingLatex": "|0.05| < 1",
          "explanation": "Series converges.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(1.05)^{-1} \\approx 0.9525$ (exact value $\\approx 0.95238$; good accuracy since $x=0.05$ is small)."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Maclaurin series",
    "subtopicId": "fm.y2.pure.maclaurin",
    "questionDiagram": null,
    "id": "fm.y2.pure.maclaurin.q051",
    "tags": [
      "exponential",
      "binomial",
      "product"
    ],
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "written",
    "questionText": "By multiplying appropriate Maclaurin series, find the expansion of the given product up to and including the term in $x^{3}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "First series",
          "workingLatex": "e^{x} = 1 + x + \\frac{x^{2}}{2} + \\frac{x^{3}}{6}",
          "explanation": "Maclaurin expansion of first function.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Second series",
          "workingLatex": "1 + x - \\frac{x^{2}}{2}",
          "explanation": "Maclaurin expansion of second function.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Multiply",
          "workingLatex": "\\text{Collect terms up to required order}",
          "explanation": "Only low-order products contribute.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Constant $\\times$ constant",
          "workingLatex": "\\text{Contributes to constant term}",
          "explanation": "Start with lowest powers.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Cross terms",
          "workingLatex": "\\text{Linear $\\times$ linear, etc.}",
          "explanation": "Build up systematically.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Ignore higher orders",
          "workingLatex": "\\text{Drop terms beyond required degree}",
          "explanation": "Maclaurin approximation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Result",
          "workingLatex": "1 + 2x + \\frac{x^{2}}{2} + -\\frac{x^{3}}{6} + \\cdots",
          "explanation": "Product series.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check $x=0$",
          "workingLatex": "\\text{Product of constants}",
          "explanation": "Verify constant term.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Validity",
          "workingLatex": "\\text{Intersection of individual valid ranges}",
          "explanation": "Both series must converge.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Answer",
          "workingLatex": "1 + 2x + \\frac{x^{2}}{2} + -\\frac{x^{3}}{6} + \\cdots",
          "explanation": "Final expansion.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Alternative",
          "workingLatex": "\\text{Differentiate and evaluate at 0}",
          "explanation": "Could find coefficients via derivatives.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Application",
          "workingLatex": "\\text{Useful for } e^{x}\\sin x \\text{ type products}",
          "explanation": "Common exam technique.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Verify linear term",
          "workingLatex": "\\text{Match } (fg)'(0)",
          "explanation": "First derivative check.",
          "diagram": null
        }
      ],
      "finalAnswer": "$1 + 2x + \\frac{x^{2}}{2} + -\\frac{x^{3}}{6} + \\cdots$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Maclaurin series",
    "subtopicId": "fm.y2.pure.maclaurin",
    "questionDiagram": null,
    "id": "fm.y2.pure.maclaurin.q052",
    "tags": [
      "exponential",
      "sine",
      "product"
    ],
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "written",
    "questionText": "By multiplying appropriate Maclaurin series, find the expansion of the given product up to and including the term in $x^{3}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "First series",
          "workingLatex": "e^{x} = 1 + x + \\frac{x^{2}}{2}",
          "explanation": "Maclaurin expansion of first function.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Second series",
          "workingLatex": "\\sin x = x - \\frac{x^{3}}{6}",
          "explanation": "Maclaurin expansion of second function.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Multiply",
          "workingLatex": "\\text{Collect terms up to required order}",
          "explanation": "Only low-order products contribute.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Constant $\\times$ constant",
          "workingLatex": "\\text{Contributes to constant term}",
          "explanation": "Start with lowest powers.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Cross terms",
          "workingLatex": "\\text{Linear $\\times$ linear, etc.}",
          "explanation": "Build up systematically.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Ignore higher orders",
          "workingLatex": "\\text{Drop terms beyond required degree}",
          "explanation": "Maclaurin approximation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Result",
          "workingLatex": "x + x^{2} + \\frac{x^{3}}{3} + \\cdots",
          "explanation": "Product series.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check $x=0$",
          "workingLatex": "\\text{Product of constants}",
          "explanation": "Verify constant term.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Validity",
          "workingLatex": "\\text{Intersection of individual valid ranges}",
          "explanation": "Both series must converge.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Answer",
          "workingLatex": "x + x^{2} + \\frac{x^{3}}{3} + \\cdots",
          "explanation": "Final expansion.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Alternative",
          "workingLatex": "\\text{Differentiate and evaluate at 0}",
          "explanation": "Could find coefficients via derivatives.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Application",
          "workingLatex": "\\text{Useful for } e^{x}\\sin x \\text{ type products}",
          "explanation": "Common exam technique.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Verify linear term",
          "workingLatex": "\\text{Match } (fg)'(0)",
          "explanation": "First derivative check.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x + x^{2} + \\frac{x^{3}}{3} + \\cdots$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Maclaurin series",
    "subtopicId": "fm.y2.pure.maclaurin",
    "questionDiagram": null,
    "id": "fm.y2.pure.maclaurin.q053",
    "tags": [
      "cosine",
      "exponential",
      "product"
    ],
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "written",
    "questionText": "By multiplying appropriate Maclaurin series, find the expansion of the given product up to and including the term in $x^{3}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "First series",
          "workingLatex": "\\cos x = 1 - \\frac{x^{2}}{2}",
          "explanation": "Maclaurin expansion of first function.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Second series",
          "workingLatex": "1 + x + \\frac{x^{2}}{2}",
          "explanation": "Maclaurin expansion of second function.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Multiply",
          "workingLatex": "\\text{Collect terms up to required order}",
          "explanation": "Only low-order products contribute.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Constant $\\times$ constant",
          "workingLatex": "\\text{Contributes to constant term}",
          "explanation": "Start with lowest powers.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Cross terms",
          "workingLatex": "\\text{Linear $\\times$ linear, etc.}",
          "explanation": "Build up systematically.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Ignore higher orders",
          "workingLatex": "\\text{Drop terms beyond required degree}",
          "explanation": "Maclaurin approximation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Result",
          "workingLatex": "1 + x + -\\frac{x^{2}}{2} + \\cdots",
          "explanation": "Product series.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check $x=0$",
          "workingLatex": "\\text{Product of constants}",
          "explanation": "Verify constant term.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Validity",
          "workingLatex": "\\text{Intersection of individual valid ranges}",
          "explanation": "Both series must converge.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Answer",
          "workingLatex": "1 + x + -\\frac{x^{2}}{2} + \\cdots",
          "explanation": "Final expansion.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Alternative",
          "workingLatex": "\\text{Differentiate and evaluate at 0}",
          "explanation": "Could find coefficients via derivatives.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Application",
          "workingLatex": "\\text{Useful for } e^{x}\\sin x \\text{ type products}",
          "explanation": "Common exam technique.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Verify linear term",
          "workingLatex": "\\text{Match } (fg)'(0)",
          "explanation": "First derivative check.",
          "diagram": null
        }
      ],
      "finalAnswer": "$1 + x + -\\frac{x^{2}}{2} + \\cdots$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Maclaurin series",
    "subtopicId": "fm.y2.pure.maclaurin",
    "questionDiagram": null,
    "id": "fm.y2.pure.maclaurin.q054",
    "tags": [
      "quotient"
    ],
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "questionText": "Find the Maclaurin series for $\\dfrac{\\sin x}{x}$ up to the term in $x^{4}$, and state the value of the constant term.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Divide series",
          "workingLatex": "\\frac{\\sin x}{x} = \\frac{x - \\frac{x^{3}}{6} + \\frac{x^{5}}{120} - \\cdots}{x}",
          "explanation": "Divide $\\sin x$ by $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Cancel $x$",
          "workingLatex": "= 1 - \\frac{x^{2}}{6} + \\frac{x^{4}}{120} - \\cdots",
          "explanation": "Term-by-term division.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Constant term",
          "workingLatex": "1",
          "explanation": "Value at $x=0$ (using limit).",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Even powers only",
          "workingLatex": "\\text{Only even powers remain}",
          "explanation": "Quotient of odd/even.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Limit check",
          "workingLatex": "\\lim_{x\\to 0}\\frac{\\sin x}{x} = 1",
          "explanation": "Confirms constant term.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Validity",
          "workingLatex": "\\text{All real } x \\text{ (} x \\neq 0 \\text{ for function)}",
          "explanation": "Series converges everywhere.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Application",
          "workingLatex": "\\text{sinc function in signal processing}",
          "explanation": "Important in applications.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Up to $x^{4}$",
          "workingLatex": "1 - \\frac{x^{2}}{6} + \\frac{x^{4}}{120}",
          "explanation": "Required terms.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify $x^{2}$ coeff",
          "workingLatex": "\\text{From } -\\frac{1}{6}",
          "explanation": "Direct read-off.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Alternative",
          "workingLatex": "\\text{Use } \\frac{d^{n}}{dx^{n}}\\big|_{0}",
          "explanation": "Maclaurin coefficient formula.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Note",
          "workingLatex": "\\text{Function undefined at } x=0 \\text{ but series defines limit}",
          "explanation": "Removable singularity.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Compare with $\\cos$",
          "workingLatex": "\\text{Related but not identical}",
          "explanation": "Different series.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Answer",
          "workingLatex": "1 - \\frac{x^{2}}{6} + \\frac{x^{4}}{120}",
          "explanation": "Series and constant $1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{\\sin x}{x} = 1 - \\dfrac{x^{2}}{6} + \\dfrac{x^{4}}{120} + \\cdots$; constant term $= 1$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Maclaurin series",
    "subtopicId": "fm.y2.pure.maclaurin",
    "questionDiagram": null,
    "id": "fm.y2.pure.maclaurin.q055",
    "tags": [
      "product"
    ],
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "questionText": "Find the Maclaurin expansion of $e^{x}\\cos x$ up to and including the term in $x^{4}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "$e^{x}$ series",
          "workingLatex": "1 + x + \\frac{x^{2}}{2} + \\frac{x^{3}}{6} + \\frac{x^{4}}{24}",
          "explanation": "Up to $x^{4}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "$\\cos x$ series",
          "workingLatex": "1 - \\frac{x^{2}}{2} + \\frac{x^{4}}{24}",
          "explanation": "Up to $x^{4}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Multiply constants",
          "workingLatex": "1 \\times 1 = 1",
          "explanation": "Constant term.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Linear cross terms",
          "workingLatex": "x \\cdot 1 + 1 \\cdot 0 = x",
          "explanation": "Coefficient of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "$x^{2}$ terms",
          "workingLatex": "\\frac{x^{2}}{2} \\cdot 1 + x \\cdot 0 + 1 \\cdot \\left(-\\frac{x^{2}}{2}\\right) = 0",
          "explanation": "Cancels!",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "$x^{3}$ terms",
          "workingLatex": "\\frac{x^{3}}{6} \\cdot 1 + \\frac{x^{2}}{2} \\cdot 0 + x \\cdot \\left(-\\frac{x^{2}}{2}\\right) = -\\frac{x^{3}}{3}",
          "explanation": "Collect carefully.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "$x^{4}$ terms",
          "workingLatex": "\\frac{x^{4}}{24} - \\frac{x^{2}}{2} \\cdot \\frac{x^{2}}{2} + \\cdots = -\\frac{x^{4}}{6}",
          "explanation": "Include all contributing products.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Result",
          "workingLatex": "1 + x - \\frac{x^{3}}{3} - \\frac{x^{4}}{6}",
          "explanation": "Combined series.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check $x=0$",
          "workingLatex": "e^{0}\\cos 0 = 1",
          "explanation": "Constant term correct.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check derivative at 0",
          "workingLatex": "(e^{x}\\cos x)'|_{0} = 1",
          "explanation": "Linear term correct.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Validity",
          "workingLatex": "\\text{All real } x",
          "explanation": "Both series converge everywhere.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Alternative",
          "workingLatex": "\\text{Use } e^{x+ix} \\text{ and take real part}",
          "explanation": "Complex exponential method.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Answer",
          "workingLatex": "1 + x - \\frac{x^{3}}{3} - \\frac{x^{4}}{6}",
          "explanation": "Final expansion.",
          "diagram": null
        }
      ],
      "finalAnswer": "$e^{x}\\cos x = 1 + x - \\dfrac{x^{3}}{3} - \\dfrac{x^{4}}{6} + \\cdots$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Maclaurin series",
    "subtopicId": "fm.y2.pure.maclaurin",
    "questionDiagram": null,
    "id": "fm.y2.pure.maclaurin.q056",
    "tags": [
      "logarithm",
      "proof"
    ],
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "questionText": "Show that the Maclaurin series for $\\ln\\left(\\dfrac{1+x}{1-x}\\right)$ up to $x^{5}$ is $2x + \\frac{2x^{3}}{3} + \\frac{2x^{5}}{5}$, and state the range of validity.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Split logarithm",
          "workingLatex": "\\ln\\left(\\frac{1+x}{1-x}\\right) = \\ln(1+x) - \\ln(1-x)",
          "explanation": "Log quotient rule.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "$\\ln(1+x)$",
          "workingLatex": "x - \\frac{x^{2}}{2} + \\frac{x^{3}}{3} - \\frac{x^{4}}{4} + \\frac{x^{5}}{5}",
          "explanation": "Standard series.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "$\\ln(1-x)$",
          "workingLatex": "-x - \\frac{x^{2}}{2} - \\frac{x^{3}}{3} - \\frac{x^{4}}{4} - \\frac{x^{5}}{5}",
          "explanation": "Replace $x$ by $-x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Subtract",
          "workingLatex": "2x + \\frac{2x^{3}}{3} + \\frac{2x^{5}}{5}",
          "explanation": "Even powers cancel.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Odd function",
          "workingLatex": "\\text{Only odd powers}",
          "explanation": "Expected from symmetry.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Validity for $\\ln(1+x)$",
          "workingLatex": "|x| < 1",
          "explanation": "First series.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Validity for $\\ln(1-x)$",
          "workingLatex": "|x| < 1",
          "explanation": "Second series.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Combined",
          "workingLatex": "|x| < 1",
          "explanation": "Both must converge.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check $x=0$",
          "workingLatex": "\\ln 1 = 0",
          "explanation": "No constant term.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Connection",
          "workingLatex": "= 2\\tanh^{-1}(x)",
          "explanation": "Related to inverse hyperbolic tangent.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Verify $x^{3}$",
          "workingLatex": "\\frac{2}{3}",
          "explanation": "Coefficient check.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Application",
          "workingLatex": "\\text{Useful for approximating logs of ratios near 1}",
          "explanation": "Numerical use.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Answer",
          "workingLatex": "2x + \\frac{2x^{3}}{3} + \\frac{2x^{5}}{5},\\; |x|<1",
          "explanation": "Series and validity.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\ln\\left(\\dfrac{1+x}{1-x}\\right) = 2x + \\dfrac{2x^{3}}{3} + \\dfrac{2x^{5}}{5} + \\cdots$ for $|x| < 1$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Maclaurin series",
    "subtopicId": "fm.y2.pure.maclaurin",
    "questionDiagram": null,
    "id": "fm.y2.pure.maclaurin.q057",
    "tags": [
      "reciprocal"
    ],
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "questionText": "Find the first four non-zero terms of the Maclaurin series for $\\sec x$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Use $\\sec x = \\frac{1}{\\cos x}$",
          "workingLatex": "\\text{Divide 1 by cosine series}",
          "explanation": "Reciprocal of $\\cos x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "$\\cos x$",
          "workingLatex": "1 - \\frac{x^{2}}{2} + \\frac{x^{4}}{24} - \\cdots",
          "explanation": "Denominator series.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Long division / equating",
          "workingLatex": "\\sec x = 1 + \\frac{x^{2}}{2} + \\frac{5x^{4}}{24} + \\cdots",
          "explanation": "Standard result.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Even function",
          "workingLatex": "\\text{Only even powers}",
          "explanation": "Secant is even.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Constant term",
          "workingLatex": "\\sec 0 = 1",
          "explanation": "Verify.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "$x^{2}$ coefficient",
          "workingLatex": "\\frac{1}{2}",
          "explanation": "From division.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "$x^{4}$ coefficient",
          "workingLatex": "\\frac{5}{24}",
          "explanation": "Next term.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Validity",
          "workingLatex": "\\text{Near } x=0",
          "explanation": "Local convergence where $\\cos x \\neq 0$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Alternative",
          "workingLatex": "\\text{Differentiate and use Maclaurin formula}",
          "explanation": "Could find via derivatives.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check derivative",
          "workingLatex": "(\\sec x)'|_{0} = 0",
          "explanation": "No $x$ term.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Related series",
          "workingLatex": "\\tan x = x + \\frac{x^{3}}{3} + \\cdots",
          "explanation": "Companion expansion.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Application",
          "workingLatex": "\\text{Used in advanced integration}",
          "explanation": "Occasional FM question.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Answer",
          "workingLatex": "1 + \\frac{x^{2}}{2} + \\frac{5x^{4}}{24}",
          "explanation": "First four non-zero terms.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sec x = 1 + \\dfrac{x^{2}}{2} + \\dfrac{5x^{4}}{24} + \\cdots$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Maclaurin series",
    "subtopicId": "fm.y2.pure.maclaurin",
    "questionDiagram": null,
    "id": "fm.y2.pure.maclaurin.q058",
    "tags": [
      "derivatives",
      "product"
    ],
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "questionText": "Given $f(x) = e^{x}\\sin x$, find $f''(0)$ and hence the coefficient of $x^{2}$ in the Maclaurin series for $f(x)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Product rule",
          "workingLatex": "f'(x) = e^{x}\\sin x + e^{x}\\cos x = e^{x}(\\sin x + \\cos x)",
          "explanation": "Differentiate product.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Second derivative",
          "workingLatex": "f''(x) = e^{x}(\\sin x + \\cos x) + e^{x}(\\cos x - \\sin x) = 2e^{x}\\cos x",
          "explanation": "Simplify.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate at 0",
          "workingLatex": "f''(0) = 2e^{0}\\cos 0 = 2",
          "explanation": "Substitute $x=0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Maclaurin coefficient",
          "workingLatex": "\\text{Coeff of } x^{2} = \\frac{f''(0)}{2!} = 1",
          "explanation": "Standard formula.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify via series product",
          "workingLatex": "e^{x}\\sin x = (1+x+\\cdots)(x-\\cdots) = x + x^{2} + \\cdots",
          "explanation": "Series multiplication confirms.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Constant term",
          "workingLatex": "f(0) = 0",
          "explanation": "No constant.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Linear term",
          "workingLatex": "f'(0) = 1",
          "explanation": "Coefficient of $x$ is 1.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Pattern",
          "workingLatex": "\\text{Alternating-type product series}",
          "explanation": "Higher terms need more work.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "f''(0)=2,\\; \\text{coeff of } x^{2} = 1",
          "explanation": "Both parts.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Series start",
          "workingLatex": "e^{x}\\sin x = x + x^{2} + \\cdots",
          "explanation": "Beginning of expansion.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Validity",
          "workingLatex": "\\text{All real } x",
          "explanation": "Both factors converge everywhere.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Application",
          "workingLatex": "\\text{Modelling damped oscillations}",
          "explanation": "Physical interpretation.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Check",
          "workingLatex": "\\frac{f''(0)}{2} = 1",
          "explanation": "Consistent.",
          "diagram": null
        }
      ],
      "finalAnswer": "$f''(0) = 2$; coefficient of $x^{2}$ is $1$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Maclaurin series",
    "subtopicId": "fm.y2.pure.maclaurin",
    "questionDiagram": null,
    "id": "fm.y2.pure.maclaurin.q059",
    "tags": [
      "product",
      "verification"
    ],
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "questionText": "Expand $(1+x)^{\\frac{1}{2}}(1+x)^{\\frac{1}{2}}$ in two ways and hence verify the binomial series for $(1+x)$ up to $x^{3}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Product of series",
          "workingLatex": "(1+x)^{1/2}(1+x)^{1/2}",
          "explanation": "Same binomial twice.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Each factor",
          "workingLatex": "1 + \\frac{x}{2} - \\frac{x^{2}}{8} + \\frac{x^{3}}{16}",
          "explanation": "Binomial to $x^{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Multiply",
          "workingLatex": "1 + x + 0\\cdot x^{2} + 0\\cdot x^{3}",
          "explanation": "Careful multiplication.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Result",
          "workingLatex": "1 + x",
          "explanation": "Product simplifies.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Direct expansion",
          "workingLatex": "(1+x)^{1} = 1 + x",
          "explanation": "Exact, not just series.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify",
          "workingLatex": "\\text{Both methods agree}",
          "explanation": "Confirms binomial coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Validity",
          "workingLatex": "|x| < 1",
          "explanation": "For each binomial factor.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Insight",
          "workingLatex": "\\text{Multiplying series must give exact product}",
          "explanation": "Consistency check.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Higher terms",
          "workingLatex": "\\text{All higher terms cancel in this case}",
          "explanation": "Special because exponents sum to 1.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "General lesson",
          "workingLatex": "\\text{Series multiplication is self-checking}",
          "explanation": "Exam technique.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Coefficients",
          "workingLatex": "1, 1, 0, 0",
          "explanation": "Up to $x^{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Answer",
          "workingLatex": "1 + x",
          "explanation": "Verified expansion.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Conclusion",
          "workingLatex": "\\text{Binomial series consistent}",
          "explanation": "Verification complete.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(1+x)^{\\frac{1}{2}}(1+x)^{\\frac{1}{2}} = 1 + x + \\cdots$, verifying the binomial series."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Maclaurin series",
    "subtopicId": "fm.y2.pure.maclaurin",
    "questionDiagram": null,
    "id": "fm.y2.pure.maclaurin.q060",
    "tags": [
      "integration",
      "inverse-trig"
    ],
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "questionText": "Find the Maclaurin series for $\\arcsin x$ up to the term in $x^{5}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate",
          "workingLatex": "\\frac{d}{dx}(\\arcsin x) = \\frac{1}{\\sqrt{1-x^{2}}}",
          "explanation": "Standard derivative.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Binomial expansion",
          "workingLatex": "(1-x^{2})^{-1/2} = 1 + \\frac{x^{2}}{2} + \\frac{3x^{4}}{8} + \\cdots",
          "explanation": "Replace $x$ by $x^{2}$ in $(1+x)^{-1/2}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate",
          "workingLatex": "\\arcsin x = x + \\frac{x^{3}}{6} + \\frac{3x^{5}}{40} + \\cdots",
          "explanation": "Term-by-term integration.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Constant",
          "workingLatex": "C=0",
          "explanation": "Since $\\arcsin 0 = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Odd function",
          "workingLatex": "\\text{Only odd powers}",
          "explanation": "Expected symmetry.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Validity",
          "workingLatex": "|x| < 1",
          "explanation": "From binomial convergence.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check $x^{3}$",
          "workingLatex": "\\frac{1}{6}",
          "explanation": "Coefficient verification.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check $x^{5}$",
          "workingLatex": "\\frac{3}{40}",
          "explanation": "Next term.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify derivative",
          "workingLatex": "1 + \\frac{x^{2}}{2} + \\frac{3x^{4}}{8}",
          "explanation": "Differentiate back.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Related",
          "workingLatex": "\\arccos x = \\frac{\\pi}{2} - \\arcsin x",
          "explanation": "Companion series.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Application",
          "workingLatex": "\\text{Small-angle approximations}",
          "explanation": "Numerical use.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Answer",
          "workingLatex": "x + \\frac{x^{3}}{6} + \\frac{3x^{5}}{40}",
          "explanation": "Up to $x^{5}$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Validity stated",
          "workingLatex": "|x| < 1",
          "explanation": "Range.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\arcsin x = x + \\dfrac{x^{3}}{6} + \\dfrac{3x^{5}}{40} + \\cdots$ for $|x| < 1$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Maclaurin series",
    "subtopicId": "fm.y2.pure.maclaurin",
    "questionDiagram": null,
    "id": "fm.y2.pure.maclaurin.q061",
    "tags": [
      "validity",
      "reciprocal"
    ],
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "questionText": "The function $f(x) = \\dfrac{x}{1-x}$ has Maclaurin series $x + x^{2} + x^{3} + \\cdots$ for $|x|<1$. Find the series for $\\dfrac{1}{f(x)}$ and comment on its validity.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Reciprocal",
          "workingLatex": "\\frac{1}{f(x)} = \\frac{1-x}{x}",
          "explanation": "Algebraic form.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Not Maclaurin at 0",
          "workingLatex": "\\text{Undefined at } x=0",
          "explanation": "Function blows up.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "From geometric series",
          "workingLatex": "\\frac{x}{1-x} = x(1+x+x^{2}+\\cdots) = x + x^{2} + x^{3} + \\cdots",
          "explanation": "Given expansion.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Divide",
          "workingLatex": "\\frac{1}{f(x)} = \\frac{1}{x} \\cdot \\frac{1-x}{1}",
          "explanation": "Not a standard Maclaurin series.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Alternative view",
          "workingLatex": "\\frac{1-x}{x} = \\frac{1}{x} - 1",
          "explanation": "Laurent-type, not Maclaurin.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Validity of $f$",
          "workingLatex": "|x| < 1",
          "explanation": "Original series.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Lesson",
          "workingLatex": "\\text{Reciprocal may not have Maclaurin series}",
          "explanation": "Need $f(0) \\neq 0$ for reciprocal expansion.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Key point",
          "workingLatex": "f(0)=0 \\Rightarrow \\frac{1}{f} \\text{ has no Maclaurin series}",
          "explanation": "Important constraint.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\frac{1}{f(x)} = \\frac{1-x}{x}; \\text{ no Maclaurin series at 0}",
          "explanation": "Conclusion.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Related",
          "workingLatex": "\\text{Use partial fractions instead}",
          "explanation": "Alternative techniques.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check",
          "workingLatex": "f(x) \\cdot \\frac{1-x}{x} = 1",
          "explanation": "Algebraic identity.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Series of $f$ valid",
          "workingLatex": "|x|<1",
          "explanation": "Given.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Application",
          "workingLatex": "\\text{Highlights validity constraints}",
          "explanation": "Exam awareness.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Final",
          "workingLatex": "\\text{Maclaurin requires } f(0) \\neq 0 \\text{ for } 1/f",
          "explanation": "General rule.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{1}{f(x)} = \\dfrac{1-x}{x}$, which has no Maclaurin series at $x=0$ since $f(0)=0$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Maclaurin series",
    "subtopicId": "fm.y2.pure.maclaurin",
    "questionDiagram": null,
    "id": "fm.y2.pure.maclaurin.q062",
    "tags": [
      "identity",
      "sine-cosine"
    ],
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "questionText": "Find the Maclaurin expansion of $\\cos^{2}x$ up to the term in $x^{4}$, using the identity $\\cos^{2}x = \\frac{1}{2}(1 + \\cos 2x)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identity",
          "workingLatex": "\\cos^{2}x = \\frac{1}{2}(1 + \\cos 2x)",
          "explanation": "Double-angle form.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "$\\cos 2x$ series",
          "workingLatex": "1 - 2x^{2} + \\frac{16x^{4}}{24}",
          "explanation": "Substitute $2x$ into $\\cos x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Add 1",
          "workingLatex": "1 + \\cos 2x = 2 - 2x^{2} + \\frac{2x^{4}}{3}",
          "explanation": "Inside parentheses.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Halve",
          "workingLatex": "\\cos^{2}x = 1 - x^{2} + \\frac{x^{4}}{3}",
          "explanation": "Multiply by $\\frac{1}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Even powers only",
          "workingLatex": "\\text{Expected}",
          "explanation": "Square of even function.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check $x=0$",
          "workingLatex": "\\cos^{2}0 = 1",
          "explanation": "Constant term.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Alternative",
          "workingLatex": "\\text{Square } (1 - \\frac{x^{2}}{2}+\\cdots)",
          "explanation": "Direct multiplication.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Validity",
          "workingLatex": "\\text{All real } x",
          "explanation": "Cosine series everywhere.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "1 - x^{2} + \\frac{x^{4}}{3}",
          "explanation": "Up to $x^{4}$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Verify $x^{2}$",
          "workingLatex": "-1",
          "explanation": "Coefficient check.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Application",
          "workingLatex": "\\text{Power-reduction in integration}",
          "explanation": "Useful identity.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Compare",
          "workingLatex": "\\text{Matches squaring cosine series}",
          "explanation": "Self-check.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Final",
          "workingLatex": "1 - x^{2} + \\frac{x^{4}}{3}",
          "explanation": "Expansion.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\cos^{2}x = 1 - x^{2} + \\dfrac{x^{4}}{3} + \\cdots$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Maclaurin series",
    "subtopicId": "fm.y2.pure.maclaurin",
    "questionDiagram": null,
    "id": "fm.y2.pure.maclaurin.q063",
    "tags": [
      "limits"
    ],
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "questionText": "Use Maclaurin series to evaluate $\\displaystyle\\lim_{x\\to 0}\\dfrac{e^{x}-1-x}{x^{2}}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Expand $e^{x}$",
          "workingLatex": "e^{x} = 1 + x + \\frac{x^{2}}{2} + \\frac{x^{3}}{6} + \\cdots",
          "explanation": "Standard series.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Numerator",
          "workingLatex": "e^{x}-1-x = \\frac{x^{2}}{2} + \\frac{x^{3}}{6} + \\cdots",
          "explanation": "Subtract.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Divide by $x^{2}$",
          "workingLatex": "\\frac{e^{x}-1-x}{x^{2}} = \\frac{1}{2} + \\frac{x}{6} + \\cdots",
          "explanation": "Cancel $x^{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Limit as $x\\to 0$",
          "workingLatex": "\\frac{1}{2}",
          "explanation": "Higher-order terms vanish.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "L'Hôpital alternative",
          "workingLatex": "\\text{Could use twice}",
          "explanation": "Calculus method.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "First derivative check",
          "workingLatex": "f'(0)=0",
          "explanation": "Numerator starts at $x^{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Second derivative",
          "workingLatex": "f''(0)=1",
          "explanation": "Confirms limit $\\frac{1}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Validity",
          "workingLatex": "\\text{All real } x",
          "explanation": "Series valid near 0.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\frac{1}{2}",
          "explanation": "Limit value.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "General technique",
          "workingLatex": "\\text{Series for indeterminate forms}",
          "explanation": "Powerful method.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Related limits",
          "workingLatex": "\\frac{\\sin x - x}{x^{3}} \\to -\\frac{1}{6}",
          "explanation": "Similar style.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Exam tip",
          "workingLatex": "\\text{Expand to lowest sufficient order}",
          "explanation": "Efficiency.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Final",
          "workingLatex": "\\frac{1}{2}",
          "explanation": "Result.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\lim_{x\\to 0}\\dfrac{e^{x}-1-x}{x^{2}} = \\dfrac{1}{2}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Maclaurin series",
    "subtopicId": "fm.y2.pure.maclaurin",
    "questionDiagram": null,
    "id": "fm.y2.pure.maclaurin.q064",
    "tags": [
      "composite",
      "logarithm"
    ],
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "questionText": "Find the Maclaurin series for $\\ln(1+x+x^{2})$ up to the term in $x^{3}$, and state the range of validity.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Not standard form",
          "workingLatex": "\\text{Cannot use } \\ln(1+u) \\text{ directly with simple } u",
          "explanation": "Need substitution or composition.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Factor (approximate)",
          "workingLatex": "1+x+x^{2} \\text{ near 0 is } \\approx 1+x",
          "explanation": "For small $x$, dominant term inside log.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Let $u = x + x^{2}$",
          "workingLatex": "\\ln(1+u) = u - \\frac{u^{2}}{2} + \\frac{u^{3}}{3}",
          "explanation": "Standard log series.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute",
          "workingLatex": "\\ln(1+x+x^{2}) = (x+x^{2}) - \\frac{(x+x^{2})^{2}}{2} + \\frac{(x+x^{2})^{3}}{3}",
          "explanation": "Expand.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Expand $(x+x^{2})^{2}$",
          "workingLatex": "x^{2} + 2x^{3} + \\cdots",
          "explanation": "Up to required order.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Collect $x$ terms",
          "workingLatex": "x",
          "explanation": "Linear coefficient.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Collect $x^{2}$",
          "workingLatex": "x^{2} - \\frac{x^{2}}{2} = \\frac{x^{2}}{2}",
          "explanation": "Quadratic.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Collect $x^{3}$",
          "workingLatex": "-\\frac{2x^{3}}{2} + \\frac{x^{3}}{3} = -\\frac{2x^{3}}{3}",
          "explanation": "Cubic.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Result",
          "workingLatex": "x + \\frac{x^{2}}{2} - \\frac{2x^{3}}{3}",
          "explanation": "Up to $x^{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Validity",
          "workingLatex": "|x+x^{2}| < 1",
          "explanation": "From $\\ln(1+u)$ with $|u|<1$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Near 0",
          "workingLatex": "|x| \\text{ small enough}",
          "explanation": "Local validity.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Check $x=0$",
          "workingLatex": "\\ln 1 = 0",
          "explanation": "No constant term.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Answer",
          "workingLatex": "x + \\frac{x^{2}}{2} - \\frac{2x^{3}}{3}",
          "explanation": "Series.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\ln(1+x+x^{2}) = x + \\dfrac{x^{2}}{2} - \\dfrac{2x^{3}}{3} + \\cdots$, valid when $|x+x^{2}| < 1$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Maclaurin series",
    "subtopicId": "fm.y2.pure.maclaurin",
    "questionDiagram": null,
    "id": "fm.y2.pure.maclaurin.q065",
    "tags": [
      "hard",
      "composite",
      "exponential"
    ],
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find the Maclaurin series for $e^{5x}$ up to and including the term in $x^{3}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Start from $e^{x}$",
          "workingLatex": "e^{x} = 1 + x + \\frac{x^{2}}{2!} + \\frac{x^{3}}{3!} + \\cdots",
          "explanation": "Standard series.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "\\text{Replace } x \\text{ by } 5x",
          "explanation": "The composite argument here is $5x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Replace each power",
          "workingLatex": "(5x)^{2} = 25x^{2},\\; (5x)^{3} = 125x^{3}",
          "explanation": "Square and cube the inner factor.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write series",
          "workingLatex": "e^{5x} = 1 + 5x + \\frac{25x^{2}}{2} + \\frac{125x^{3}}{6} + \\cdots",
          "explanation": "Collect terms in ascending powers.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check constant",
          "workingLatex": "e^{0} = 1",
          "explanation": "Matches when $x=0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Validity",
          "workingLatex": "\\text{Valid for all } x",
          "explanation": "Exponential series converges for all real $x$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Pattern",
          "workingLatex": "\\text{Coefficient of } x^{n} \\text{ is } \\frac{5^{n}}{n!}",
          "explanation": "General term structure.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "1 + 5x + \\frac{25x^{2}}{2} + \\frac{125x^{3}}{6} + \\cdots",
          "explanation": "Maclaurin series for $e^{5x}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify linear term",
          "workingLatex": "\\frac{d}{dx}(e^{5x})\\big|_{0} = 5",
          "explanation": "First derivative at zero.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Maclaurin series",
          "workingLatex": "f(x)=\\sum_{n=0}^{\\infty}\\frac{f^{(n)}(0)}{n!}x^{n}",
          "explanation": "Taylor series centred at $x=0$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Standard results",
          "workingLatex": "e^{x},\\;\\ln(1+x),\\;\\sin x,\\;\\cos x,\\;(1+x)^{n}",
          "explanation": "Know these from the formula booklet.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Substitution",
          "workingLatex": "\\text{Replace } x \\text{ by } ax,\\; x^{2},\\; \\text{etc.}",
          "explanation": "Build composite expansions.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Validity",
          "workingLatex": "\\text{State convergence interval}",
          "explanation": "Essential for $\\ln(1+x)$ and binomial series.",
          "diagram": null
        }
      ],
      "finalAnswer": "$e^{5x} = 1 + 5x + \\frac{25x^{2}}{2} + \\frac{125x^{3}}{6} + \\cdots$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Maclaurin series",
    "subtopicId": "fm.y2.pure.maclaurin",
    "questionDiagram": null,
    "id": "fm.y2.pure.maclaurin.q066",
    "tags": [
      "hard",
      "composite",
      "binomial",
      "validity"
    ],
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "written",
    "questionText": "Find the Maclaurin series for $(1+4x)^{\\tfrac{1}{2}}$ up to and including the term in $x^{3}$, and state the range of validity.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write as $(1+4x)^{\\tfrac{1}{2}}$",
          "workingLatex": "\\text{Use binomial Maclaurin series}",
          "explanation": "Standard form $(1+x)^{n}$ with substitution.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "General coefficients",
          "workingLatex": "\\frac{n(n-1)\\cdots(n-r+1)}{r!}(4x)^{r}",
          "explanation": "Binomial coefficient times power.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute terms",
          "workingLatex": "1 + 2x + -4x^{2} + 8x^{3}",
          "explanation": "Up to $x^{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Validity",
          "workingLatex": "|x| < \\tfrac{1}{4}",
          "explanation": "Convergence condition.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check $x=0$",
          "workingLatex": "1^{\\tfrac{1}{2}} = 1",
          "explanation": "Constant term.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare with $(1+x)^{n}$",
          "workingLatex": "\\text{Replace } x \\text{ by } 4x",
          "explanation": "Substitution method.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "1 + 2x + -4x^{2} + 8x^{3} + \\cdots",
          "explanation": "Final series.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Special case",
          "workingLatex": "\\text{If } n \\in \\mathbb{Z}^{+}, \\text{ series terminates}",
          "explanation": "Note when applicable.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Validity simplified",
          "workingLatex": "|x| < \\tfrac{1}{4}",
          "explanation": "Range for $x$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Maclaurin series",
          "workingLatex": "f(x)=\\sum_{n=0}^{\\infty}\\frac{f^{(n)}(0)}{n!}x^{n}",
          "explanation": "Taylor series centred at $x=0$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Standard results",
          "workingLatex": "e^{x},\\;\\ln(1+x),\\;\\sin x,\\;\\cos x,\\;(1+x)^{n}",
          "explanation": "Know these from the formula booklet.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Substitution",
          "workingLatex": "\\text{Replace } x \\text{ by } ax,\\; x^{2},\\; \\text{etc.}",
          "explanation": "Build composite expansions.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Validity",
          "workingLatex": "\\text{State convergence interval}",
          "explanation": "Essential for $\\ln(1+x)$ and binomial series.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(1+4x)^{\\tfrac{1}{2}} = 1 + 2x + -4x^{2} + 8x^{3} + \\cdots$, valid for |x| < \\tfrac{1}{4}."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Maclaurin series",
    "subtopicId": "fm.y2.pure.maclaurin",
    "questionDiagram": null,
    "id": "fm.y2.pure.maclaurin.q067",
    "tags": [
      "hard",
      "approximation"
    ],
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "written",
    "questionText": "Use the Maclaurin series for e^{-x} up to the term in $x^{3}$ to find an approximation to e^{-0.1}.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Maclaurin series",
          "workingLatex": "e^{-x} = 1 + -x + \\frac{x^{2}}{2} + -\\frac{x^{3}}{6} + \\cdots",
          "explanation": "Use expansion up to required order.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "x = 0.1",
          "explanation": "Insert the given small value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate each term",
          "workingLatex": "\\text{Compute powers of } 0.1",
          "explanation": "Keep sufficient decimal accuracy.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Sum terms",
          "workingLatex": "\\approx 0.90483",
          "explanation": "Add the retained terms.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Reason for accuracy",
          "workingLatex": "\\text{Small } x \\text{ makes higher-order terms negligible}",
          "explanation": "Truncation error is small.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare",
          "workingLatex": "\\text{Calculator value close to } 0.90483",
          "explanation": "Sanity check.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "0.90483",
          "explanation": "Approximation.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "More terms",
          "workingLatex": "\\text{Adding terms improves accuracy}",
          "explanation": "Trade-off between effort and precision.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Validity",
          "workingLatex": "\\text{Ensure } 0.1 \\text{ lies in valid range}",
          "explanation": "Check convergence condition.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Maclaurin series",
          "workingLatex": "f(x)=\\sum_{n=0}^{\\infty}\\frac{f^{(n)}(0)}{n!}x^{n}",
          "explanation": "Taylor series centred at $x=0$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Standard results",
          "workingLatex": "e^{x},\\;\\ln(1+x),\\;\\sin x,\\;\\cos x,\\;(1+x)^{n}",
          "explanation": "Know these from the formula booklet.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Substitution",
          "workingLatex": "\\text{Replace } x \\text{ by } ax,\\; x^{2},\\; \\text{etc.}",
          "explanation": "Build composite expansions.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Validity",
          "workingLatex": "\\text{State convergence interval}",
          "explanation": "Essential for $\\ln(1+x)$ and binomial series.",
          "diagram": null
        }
      ],
      "finalAnswer": "$0.90483$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Maclaurin series",
    "subtopicId": "fm.y2.pure.maclaurin",
    "questionDiagram": null,
    "id": "fm.y2.pure.maclaurin.q068",
    "tags": [
      "hard",
      "coefficient"
    ],
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "written",
    "questionText": "Find the coefficient of $x^{3}$ in the Maclaurin series for $e^{-x}\\cos x$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write Maclaurin series",
          "workingLatex": "$e^{-x}\\cos x$",
          "explanation": "Standard or composite expansion.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify power",
          "workingLatex": "\\text{Coefficient of } x^{3}",
          "explanation": "Locate the required term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Extract coefficient",
          "workingLatex": "-\\frac{2}{3}",
          "explanation": "Read off the multiplier of $x^{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Verify via derivatives",
          "workingLatex": "\\frac{f^{(3)}(0)}{3!}",
          "explanation": "Alternative: Maclaurin coefficient formula.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check",
          "workingLatex": "-\\frac{2}{3}",
          "explanation": "Confirm by substitution or pattern.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "-\\frac{2}{3}",
          "explanation": "Required coefficient.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Maclaurin series",
          "workingLatex": "f(x)=\\sum_{n=0}^{\\infty}\\frac{f^{(n)}(0)}{n!}x^{n}",
          "explanation": "Taylor series centred at $x=0$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Standard results",
          "workingLatex": "e^{x},\\;\\ln(1+x),\\;\\sin x,\\;\\cos x,\\;(1+x)^{n}",
          "explanation": "Know these from the formula booklet.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Substitution",
          "workingLatex": "\\text{Replace } x \\text{ by } ax,\\; x^{2},\\; \\text{etc.}",
          "explanation": "Build composite expansions.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Validity",
          "workingLatex": "\\text{State convergence interval}",
          "explanation": "Essential for $\\ln(1+x)$ and binomial series.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Term-by-term",
          "workingLatex": "\\text{Differentiate or integrate series inside validity}",
          "explanation": "Calculus on power series.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Multiply series",
          "workingLatex": "\\text{Collect terms up to required order}",
          "explanation": "Product of two expansions.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Small-$x$ approximation",
          "workingLatex": "\\text{Higher powers negligible}",
          "explanation": "Truncation for numerical estimates.",
          "diagram": null
        }
      ],
      "finalAnswer": "$-\\frac{2}{3}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Maclaurin series",
    "subtopicId": "fm.y2.pure.maclaurin",
    "questionDiagram": null,
    "id": "fm.y2.pure.maclaurin.q069",
    "tags": [
      "hard",
      "product"
    ],
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "questionText": "Find the Maclaurin series for $\\sinh x = \\frac{e^{x}-e^{-x}}{2}$ up to the term in $x^{5}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Definition",
          "workingLatex": "\\sinh x = \\frac{e^{x}-e^{-x}}{2}",
          "explanation": "Hyperbolic sine.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "$e^{x}$",
          "workingLatex": "1 + x + \\frac{x^{2}}{2} + \\frac{x^{3}}{6} + \\frac{x^{4}}{24} + \\frac{x^{5}}{120}",
          "explanation": "Exponential series.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "$e^{-x}$",
          "workingLatex": "1 - x + \\frac{x^{2}}{2} - \\frac{x^{3}}{6} + \\frac{x^{4}}{24} - \\frac{x^{5}}{120}",
          "explanation": "Replace $x$ by $-x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Subtract",
          "workingLatex": "e^{x}-e^{-x} = 2x + \\frac{2x^{3}}{6} + \\frac{2x^{5}}{120}",
          "explanation": "Even terms cancel.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Halve",
          "workingLatex": "\\sinh x = x + \\frac{x^{3}}{6} + \\frac{x^{5}}{120}",
          "explanation": "Divide by 2.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Odd function",
          "workingLatex": "\\text{Only odd powers}",
          "explanation": "Expected symmetry.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compare with $\\sin x$",
          "workingLatex": "\\text{Same series!}",
          "explanation": "Maclaurin series identical.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Validity",
          "workingLatex": "\\text{All real } x",
          "explanation": "Exponential converges everywhere.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "x + \\frac{x^{3}}{6} + \\frac{x^{5}}{120}",
          "explanation": "Up to $x^{5}$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check $x=0$",
          "workingLatex": "\\sinh 0 = 0",
          "explanation": "No constant term.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Derivative check",
          "workingLatex": "\\cosh 0 = 1",
          "explanation": "Coeff of $x$ correct.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Application",
          "workingLatex": "\\text{Hyperbolic functions in FM}",
          "explanation": "Standard result.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Final",
          "workingLatex": "\\sinh x = x + \\frac{x^{3}}{6} + \\frac{x^{5}}{120}",
          "explanation": "Complete.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sinh x = x + \\dfrac{x^{3}}{6} + \\dfrac{x^{5}}{120} + \\cdots$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Maclaurin series",
    "subtopicId": "fm.y2.pure.maclaurin",
    "questionDiagram": null,
    "id": "fm.y2.pure.maclaurin.q070",
    "tags": [
      "calculus-on-series"
    ],
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "questionText": "Given the Maclaurin series for $f(x)$ is $f(x) = 1 + 2x + 3x^{2} + 4x^{3} + \\cdots$, find the series for $f'(x)$ and $ \\int f(x)\\,dx$ up to the term in $x^{3}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate term-by-term",
          "workingLatex": "f'(x) = 2 + 6x + 12x^{2} + \\cdots",
          "explanation": "Differentiate each power.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Pattern for $f'$",
          "workingLatex": "\\text{Coeff of } x^{n} \\text{ is } (n+1)(n+2)",
          "explanation": "From original coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Up to $x^{2}$",
          "workingLatex": "f'(x) = 2 + 6x + 12x^{2}",
          "explanation": "Requested order.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate term-by-term",
          "workingLatex": "\\int f(x)\\,dx = C + x + x^{2} + x^{3} + \\cdots",
          "explanation": "Integrate each term.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Constant",
          "workingLatex": "C \\text{ arbitrary}",
          "explanation": "Indefinite integral.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Set $C=0$",
          "workingLatex": "\\int f(x)\\,dx = x + x^{2} + x^{3}",
          "explanation": "Up to $x^{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify $f'(0)=2$",
          "workingLatex": "\\text{Matches coeff of } x \\text{ in } f",
          "explanation": "Consistency.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Validity",
          "workingLatex": "\\text{Same as } f(x) \\text{ series}",
          "explanation": "Term-by-term valid inside radius of convergence.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check integration",
          "workingLatex": "\\frac{d}{dx}(x+x^{2}+x^{3}) = 1+2x+3x^{2}",
          "explanation": "Matches $f$ up to $x^{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "General rule",
          "workingLatex": "\\text{Integration increases powers; differentiation decreases}",
          "explanation": "Calculus on series.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Application",
          "workingLatex": "\\text{Generate new series from known ones}",
          "explanation": "Powerful technique.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Answer $f'$",
          "workingLatex": "2 + 6x + 12x^{2}",
          "explanation": "Derivative series.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Answer integral",
          "workingLatex": "x + x^{2} + x^{3}",
          "explanation": "Integral series ($C=0$).",
          "diagram": null
        }
      ],
      "finalAnswer": "$f'(x) = 2 + 6x + 12x^{2} + \\cdots$; $\\displaystyle\\int f(x)\\,dx = x + x^{2} + x^{3} + \\cdots$ (constant zero)."
    }
  }
];
