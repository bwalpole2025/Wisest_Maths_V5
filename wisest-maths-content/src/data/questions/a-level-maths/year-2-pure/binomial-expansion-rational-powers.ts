import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "id": "al.y2.pure.binomial-rational.q001",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Binomial expansion (rational powers)",
    "subtopicId": "al.y2.pure.binomial-rational",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "binomial expansion",
      "negative index",
      "ascending powers"
    ],
    "questionText": "Find the first four terms, in ascending powers of $x$, in the expansion of $(1+x)^{-2}$, and state the range of values of $x$ for which the expansion is valid.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the general binomial series",
          "workingLatex": "(1+x)^n = 1 + nx + \\dfrac{n(n-1)}{2!}x^2 + \\dfrac{n(n-1)(n-2)}{3!}x^3 + \\cdots",
          "explanation": "For a rational power $n$ the binomial theorem becomes an infinite series. Each coefficient is built by continuing the pattern $n$, then $n(n-1)$, then $n(n-1)(n-2)$, divided by the matching factorial, so it works even when $n$ is negative or fractional.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the value of n",
          "workingLatex": "n = -2",
          "explanation": "Comparing $(1+x)^{-2}$ with $(1+x)^n$, the power we substitute everywhere is $n = -2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the term in x",
          "workingLatex": "nx = (-2)x = -2x",
          "explanation": "The first variable term is simply $n$ times $x$; here that is $-2x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the term in x^2",
          "workingLatex": "\\dfrac{n(n-1)}{2!}x^2 = \\dfrac{(-2)(-3)}{2}x^2 = 3x^2",
          "explanation": "Substituting $n=-2$ gives $(-2)(-3)=6$ on top and $2!=2$ underneath, and $6\\div 2 = 3$, so the coefficient of $x^2$ is $3$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the term in x^3",
          "workingLatex": "\\dfrac{n(n-1)(n-2)}{3!}x^3 = \\dfrac{(-2)(-3)(-4)}{6}x^3 = -4x^3",
          "explanation": "Now the top is $(-2)(-3)(-4) = -24$ and the bottom is $3! = 6$, giving $-24\\div 6 = -4$ as the coefficient of $x^3$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Assemble the first four terms",
          "workingLatex": "(1+x)^{-2} = 1 - 2x + 3x^2 - 4x^3 + \\cdots",
          "explanation": "Collecting the constant $1$ with the three terms just found gives the required start of the expansion.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the range of validity",
          "workingLatex": "\\left| x \\right| < 1",
          "explanation": "An expansion of $(1+x)^n$ only converges when the term being raised stays small, which for $(1+x)$ means $\\left| x \\right| < 1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(1+x)^{-2} = 1 - 2x + 3x^2 - 4x^3 + \\cdots$, valid for $\\left| x \\right| < 1$."
    }
  },
  {
    "id": "al.y2.pure.binomial-rational.q002",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Binomial expansion (rational powers)",
    "subtopicId": "al.y2.pure.binomial-rational",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "binomial expansion",
      "negative index",
      "ascending powers"
    ],
    "questionText": "Find the first four terms, in ascending powers of $x$, in the expansion of $(1+x)^{-1}$, and state the range of values of $x$ for which the expansion is valid.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the general binomial series",
          "workingLatex": "(1+x)^n = 1 + nx + \\dfrac{n(n-1)}{2!}x^2 + \\dfrac{n(n-1)(n-2)}{3!}x^3 + \\cdots",
          "explanation": "For a rational power $n$ the binomial theorem becomes an infinite series. Each coefficient continues the pattern $n$, then $n(n-1)$, then $n(n-1)(n-2)$, divided by the matching factorial, so it works even when $n$ is negative.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the value of n",
          "workingLatex": "n = -1",
          "explanation": "Comparing $(1+x)^{-1}$ with $(1+x)^n$, the power we substitute everywhere is $n = -1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the term in x",
          "workingLatex": "nx = (-1)x = -x",
          "explanation": "The first variable term is just $n$ times $x$, which here gives $-x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the term in x^2",
          "workingLatex": "\\dfrac{n(n-1)}{2!}x^2 = \\dfrac{(-1)(-2)}{2}x^2 = x^2",
          "explanation": "Substituting $n=-1$ gives $(-1)(-2)=2$ on top and $2! = 2$ underneath, and $2\\div 2 = 1$, so the coefficient of $x^2$ is $1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the term in x^3",
          "workingLatex": "\\dfrac{n(n-1)(n-2)}{3!}x^3 = \\dfrac{(-1)(-2)(-3)}{6}x^3 = -x^3",
          "explanation": "The top is $(-1)(-2)(-3) = -6$ and the bottom is $3! = 6$, giving $-6\\div 6 = -1$ as the coefficient of $x^3$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Assemble the first four terms",
          "workingLatex": "(1+x)^{-1} = 1 - x + x^2 - x^3 + \\cdots",
          "explanation": "Collecting the constant $1$ with the three terms just found gives the required start of the expansion, a familiar alternating pattern.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the range of validity",
          "workingLatex": "\\left| x \\right| < 1",
          "explanation": "An expansion of $(1+x)^n$ only converges when the term being raised stays small, which for $(1+x)$ means $\\left| x \\right| < 1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(1+x)^{-1} = 1 - x + x^2 - x^3 + \\cdots$, valid for $\\left| x \\right| < 1$."
    }
  },
  {
    "id": "al.y2.pure.binomial-rational.q003",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Binomial expansion (rational powers)",
    "subtopicId": "al.y2.pure.binomial-rational",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "binomial expansion",
      "negative index",
      "substitution"
    ],
    "questionText": "Find the first four terms, in ascending powers of $x$, in the expansion of $(1-x)^{-1}$, and state the range of values of $x$ for which the expansion is valid.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the general binomial series",
          "workingLatex": "(1+X)^n = 1 + nX + \\dfrac{n(n-1)}{2!}X^2 + \\dfrac{n(n-1)(n-2)}{3!}X^3 + \\cdots",
          "explanation": "The series is stated in a placeholder $X$ so we can substitute whatever sits inside the bracket, which here will be $-x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rewrite the bracket and identify n",
          "workingLatex": "(1-x)^{-1} = (1+(-x))^{-1}, \\quad n = -1, \\quad X = -x",
          "explanation": "Writing $1-x$ as $1+(-x)$ shows the quantity being raised is $-x$, so we set $X=-x$ and $n=-1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the term in x",
          "workingLatex": "nX = (-1)(-x) = x",
          "explanation": "The first variable term is $n$ times $X$; with two negatives multiplying together the result is the positive $+x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the term in x^2",
          "workingLatex": "\\dfrac{n(n-1)}{2!}X^2 = \\dfrac{(-1)(-2)}{2}(-x)^2 = 1 \\times x^2 = x^2",
          "explanation": "The coefficient is $(-1)(-2)\\div 2 = 1$, and $(-x)^2 = x^2$ because squaring removes the minus sign, so the term is $+x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the term in x^3",
          "workingLatex": "\\dfrac{n(n-1)(n-2)}{3!}X^3 = \\dfrac{(-1)(-2)(-3)}{6}(-x)^3 = (-1)(-x^3) = x^3",
          "explanation": "The coefficient is $-6\\div 6 = -1$ and $(-x)^3 = -x^3$; multiplying these two negatives gives $+x^3$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Assemble the first four terms",
          "workingLatex": "(1-x)^{-1} = 1 + x + x^2 + x^3 + \\cdots",
          "explanation": "Every term comes out positive, giving the well-known geometric series $1+x+x^2+x^3+\\cdots$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the range of validity",
          "workingLatex": "\\left| -x \\right| < 1 \\;\\Rightarrow\\; \\left| x \\right| < 1",
          "explanation": "The expansion converges when the quantity inside the bracket is small, i.e. $\\left| -x \\right| < 1$, and since $\\left| -x \\right| = \\left| x \\right|$ this is simply $\\left| x \\right| < 1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(1-x)^{-1} = 1 + x + x^2 + x^3 + \\cdots$, valid for $\\left| x \\right| < 1$."
    }
  },
  {
    "id": "al.y2.pure.binomial-rational.q004",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Binomial expansion (rational powers)",
    "subtopicId": "al.y2.pure.binomial-rational",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "binomial expansion",
      "fractional index",
      "square root"
    ],
    "questionText": "Find the first four terms, in ascending powers of $x$, in the expansion of $(1+x)^{\\frac{1}{2}}$, and state the range of values of $x$ for which the expansion is valid.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the general binomial series",
          "workingLatex": "(1+x)^n = 1 + nx + \\dfrac{n(n-1)}{2!}x^2 + \\dfrac{n(n-1)(n-2)}{3!}x^3 + \\cdots",
          "explanation": "The same infinite series works for a fractional power; we just substitute the fraction for $n$ and simplify each coefficient carefully.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the value of n",
          "workingLatex": "n = \\dfrac{1}{2}",
          "explanation": "Since $(1+x)^{\\frac{1}{2}}$ means the square root of $1+x$, the power is $n = \\tfrac{1}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the term in x",
          "workingLatex": "nx = \\dfrac{1}{2}x",
          "explanation": "The first variable term is $n$ times $x$, giving $\\tfrac{1}{2}x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the term in x^2",
          "workingLatex": "\\dfrac{n(n-1)}{2!}x^2 = \\dfrac{\\frac{1}{2}\\left(-\\frac{1}{2}\\right)}{2}x^2 = \\dfrac{-\\frac{1}{4}}{2}x^2 = -\\dfrac{1}{8}x^2",
          "explanation": "Here $n-1 = \\tfrac{1}{2}-1 = -\\tfrac{1}{2}$, so the top is $\\tfrac{1}{2}\\times(-\\tfrac{1}{2}) = -\\tfrac{1}{4}$; dividing by $2$ gives $-\\tfrac{1}{8}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the term in x^3",
          "workingLatex": "\\dfrac{n(n-1)(n-2)}{3!}x^3 = \\dfrac{\\frac{1}{2}\\left(-\\frac{1}{2}\\right)\\left(-\\frac{3}{2}\\right)}{6}x^3 = \\dfrac{\\frac{3}{8}}{6}x^3 = \\dfrac{1}{16}x^3",
          "explanation": "Now $n-2 = -\\tfrac{3}{2}$; the top is $\\tfrac{1}{2}\\times(-\\tfrac{1}{2})\\times(-\\tfrac{3}{2}) = \\tfrac{3}{8}$, and dividing by $6$ gives $\\tfrac{3}{48} = \\tfrac{1}{16}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Assemble the first four terms",
          "workingLatex": "(1+x)^{\\frac{1}{2}} = 1 + \\dfrac{1}{2}x - \\dfrac{1}{8}x^2 + \\dfrac{1}{16}x^3 + \\cdots",
          "explanation": "Collecting the constant $1$ with the three terms just found gives the start of the expansion of $\\sqrt{1+x}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the range of validity",
          "workingLatex": "\\left| x \\right| < 1",
          "explanation": "As with every $(1+x)^n$ expansion, convergence requires the quantity in the bracket to be small, so $\\left| x \\right| < 1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(1+x)^{\\frac{1}{2}} = 1 + \\dfrac{1}{2}x - \\dfrac{1}{8}x^2 + \\dfrac{1}{16}x^3 + \\cdots$, valid for $\\left| x \\right| < 1$."
    }
  },
  {
    "id": "al.y2.pure.binomial-rational.q005",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Binomial expansion (rational powers)",
    "subtopicId": "al.y2.pure.binomial-rational",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "binomial expansion",
      "negative index",
      "ascending powers"
    ],
    "questionText": "Find the first four terms, in ascending powers of $x$, in the expansion of $(1+x)^{-3}$, and state the range of values of $x$ for which the expansion is valid.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the general binomial series",
          "workingLatex": "(1+x)^n = 1 + nx + \\dfrac{n(n-1)}{2!}x^2 + \\dfrac{n(n-1)(n-2)}{3!}x^3 + \\cdots",
          "explanation": "For a negative power the binomial theorem is an infinite series; each coefficient follows the same rising pattern divided by a factorial.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the value of n",
          "workingLatex": "n = -3",
          "explanation": "Comparing $(1+x)^{-3}$ with $(1+x)^n$ gives $n = -3$ to substitute everywhere.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the term in x",
          "workingLatex": "nx = (-3)x = -3x",
          "explanation": "The first variable term is simply $n$ times $x$, giving $-3x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the term in x^2",
          "workingLatex": "\\dfrac{n(n-1)}{2!}x^2 = \\dfrac{(-3)(-4)}{2}x^2 = 6x^2",
          "explanation": "Substituting $n=-3$ gives $(-3)(-4)=12$ on top and $2! = 2$ underneath, and $12\\div 2 = 6$, so the coefficient of $x^2$ is $6$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the term in x^3",
          "workingLatex": "\\dfrac{n(n-1)(n-2)}{3!}x^3 = \\dfrac{(-3)(-4)(-5)}{6}x^3 = -10x^3",
          "explanation": "The top is $(-3)(-4)(-5) = -60$ and the bottom is $3! = 6$, giving $-60\\div 6 = -10$ as the coefficient of $x^3$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Assemble the first four terms",
          "workingLatex": "(1+x)^{-3} = 1 - 3x + 6x^2 - 10x^3 + \\cdots",
          "explanation": "Collecting the constant $1$ with the three terms just found gives the required start of the expansion.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the range of validity",
          "workingLatex": "\\left| x \\right| < 1",
          "explanation": "The expansion of $(1+x)^n$ converges only when the quantity in the bracket is small, so $\\left| x \\right| < 1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(1+x)^{-3} = 1 - 3x + 6x^2 - 10x^3 + \\cdots$, valid for $\\left| x \\right| < 1$."
    }
  },
  {
    "id": "al.y2.pure.binomial-rational.q006",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Binomial expansion (rational powers)",
    "subtopicId": "al.y2.pure.binomial-rational",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "binomial expansion",
      "fractional index",
      "cube root"
    ],
    "questionText": "Find the first three terms, in ascending powers of $x$, in the expansion of $(1+x)^{\\frac{1}{3}}$, and state the range of values of $x$ for which the expansion is valid.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the general binomial series",
          "workingLatex": "(1+x)^n = 1 + nx + \\dfrac{n(n-1)}{2!}x^2 + \\cdots",
          "explanation": "Only three terms are asked for, so we need the series up to and including the $x^2$ term.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the value of n",
          "workingLatex": "n = \\dfrac{1}{3}",
          "explanation": "Since $(1+x)^{\\frac{1}{3}}$ is the cube root of $1+x$, the power is $n = \\tfrac{1}{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the term in x",
          "workingLatex": "nx = \\dfrac{1}{3}x",
          "explanation": "The first variable term is $n$ times $x$, giving $\\tfrac{1}{3}x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the term in x^2",
          "workingLatex": "\\dfrac{n(n-1)}{2!}x^2 = \\dfrac{\\frac{1}{3}\\left(-\\frac{2}{3}\\right)}{2}x^2 = \\dfrac{-\\frac{2}{9}}{2}x^2 = -\\dfrac{1}{9}x^2",
          "explanation": "Here $n-1 = \\tfrac{1}{3}-1 = -\\tfrac{2}{3}$, so the top is $\\tfrac{1}{3}\\times(-\\tfrac{2}{3}) = -\\tfrac{2}{9}$; dividing by $2$ gives $-\\tfrac{1}{9}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Assemble the first three terms",
          "workingLatex": "(1+x)^{\\frac{1}{3}} = 1 + \\dfrac{1}{3}x - \\dfrac{1}{9}x^2 + \\cdots",
          "explanation": "Collecting the constant $1$ with the two variable terms gives the required start of the expansion of $\\sqrt[3]{1+x}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the range of validity",
          "workingLatex": "\\left| x \\right| < 1",
          "explanation": "The expansion converges only when the quantity in the bracket is small, so $\\left| x \\right| < 1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(1+x)^{\\frac{1}{3}} = 1 + \\dfrac{1}{3}x - \\dfrac{1}{9}x^2 + \\cdots$, valid for $\\left| x \\right| < 1$."
    }
  },
  {
    "id": "al.y2.pure.binomial-rational.q007",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Binomial expansion (rational powers)",
    "subtopicId": "al.y2.pure.binomial-rational",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "binomial expansion",
      "negative index",
      "substitution"
    ],
    "questionText": "Find the first four terms, in ascending powers of $x$, in the expansion of $(1-x)^{-2}$, and state the range of values of $x$ for which the expansion is valid.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the general binomial series",
          "workingLatex": "(1+X)^n = 1 + nX + \\dfrac{n(n-1)}{2!}X^2 + \\dfrac{n(n-1)(n-2)}{3!}X^3 + \\cdots",
          "explanation": "The series is written with a placeholder $X$ so we can substitute the quantity inside the bracket, which will be $-x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rewrite the bracket and identify n",
          "workingLatex": "(1-x)^{-2} = (1+(-x))^{-2}, \\quad n = -2, \\quad X = -x",
          "explanation": "Writing $1-x$ as $1+(-x)$ shows the quantity being raised is $-x$, so we set $X=-x$ and $n=-2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the term in x",
          "workingLatex": "nX = (-2)(-x) = 2x",
          "explanation": "The first variable term is $n$ times $X$; two negatives multiply to give the positive $+2x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the term in x^2",
          "workingLatex": "\\dfrac{n(n-1)}{2!}X^2 = \\dfrac{(-2)(-3)}{2}(-x)^2 = 3 \\times x^2 = 3x^2",
          "explanation": "The coefficient is $(-2)(-3)\\div 2 = 3$, and $(-x)^2 = x^2$, so the term is $+3x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the term in x^3",
          "workingLatex": "\\dfrac{n(n-1)(n-2)}{3!}X^3 = \\dfrac{(-2)(-3)(-4)}{6}(-x)^3 = (-4)(-x^3) = 4x^3",
          "explanation": "The coefficient is $-24\\div 6 = -4$ and $(-x)^3 = -x^3$; multiplying these two negatives gives $+4x^3$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Assemble the first four terms",
          "workingLatex": "(1-x)^{-2} = 1 + 2x + 3x^2 + 4x^3 + \\cdots",
          "explanation": "Every term is positive, giving the neat pattern of increasing whole-number coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the range of validity",
          "workingLatex": "\\left| -x \\right| < 1 \\;\\Rightarrow\\; \\left| x \\right| < 1",
          "explanation": "Convergence requires the bracket quantity to be small, $\\left| -x \\right| < 1$, and since $\\left| -x \\right| = \\left| x \\right|$ this is $\\left| x \\right| < 1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(1-x)^{-2} = 1 + 2x + 3x^2 + 4x^3 + \\cdots$, valid for $\\left| x \\right| < 1$."
    }
  },
  {
    "id": "al.y2.pure.binomial-rational.q008",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Binomial expansion (rational powers)",
    "subtopicId": "al.y2.pure.binomial-rational",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "binomial expansion",
      "fractional index",
      "coefficient"
    ],
    "questionText": "Find the coefficient of $x^2$ in the expansion of $(1+x)^{\\frac{1}{2}}$ in ascending powers of $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the coefficient formula for x^2",
          "workingLatex": "\\text{coefficient of } x^2 = \\dfrac{n(n-1)}{2!}",
          "explanation": "In the series $(1+x)^n = 1 + nx + \\tfrac{n(n-1)}{2!}x^2 + \\cdots$, the number multiplying $x^2$ is $\\tfrac{n(n-1)}{2!}$, so we only need that one piece.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the value of n",
          "workingLatex": "n = \\dfrac{1}{2}",
          "explanation": "Since $(1+x)^{\\frac{1}{2}}$ is the square root of $1+x$, the power is $n = \\tfrac{1}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Work out n - 1",
          "workingLatex": "n - 1 = \\dfrac{1}{2} - 1 = -\\dfrac{1}{2}",
          "explanation": "The formula needs $n-1$; subtracting $1$ from $\\tfrac{1}{2}$ gives $-\\tfrac{1}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Multiply the numerator",
          "workingLatex": "n(n-1) = \\dfrac{1}{2}\\times\\left(-\\dfrac{1}{2}\\right) = -\\dfrac{1}{4}",
          "explanation": "Multiplying the two fractions on the top gives $-\\tfrac{1}{4}$ (a positive times a negative is negative).",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Divide by 2 factorial",
          "workingLatex": "\\dfrac{n(n-1)}{2!} = \\dfrac{-\\frac{1}{4}}{2} = -\\dfrac{1}{8}",
          "explanation": "Since $2! = 2$, dividing $-\\tfrac{1}{4}$ by $2$ halves it to $-\\tfrac{1}{8}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the coefficient",
          "workingLatex": "\\text{coefficient of } x^2 = -\\dfrac{1}{8}",
          "explanation": "This single number is the required coefficient of $x^2$ in the expansion.",
          "diagram": null
        }
      ],
      "finalAnswer": "The coefficient of $x^2$ is $-\\dfrac{1}{8}$."
    }
  },
  {
    "id": "al.y2.pure.binomial-rational.q009",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Binomial expansion (rational powers)",
    "subtopicId": "al.y2.pure.binomial-rational",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "binomial expansion",
      "negative index",
      "scaled term",
      "validity"
    ],
    "questionText": "Find the first four terms, in ascending powers of $x$, in the expansion of $(1+2x)^{-1}$, and state the range of values of $x$ for which the expansion is valid.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the general binomial series",
          "workingLatex": "(1+X)^n = 1 + nX + \\dfrac{n(n-1)}{2!}X^2 + \\dfrac{n(n-1)(n-2)}{3!}X^3 + \\cdots",
          "explanation": "Because the bracket contains $2x$ rather than $x$, we use a placeholder $X$ and will substitute $X = 2x$ at the end of each term.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify n and the substitution",
          "workingLatex": "n = -1, \\quad X = 2x",
          "explanation": "Comparing $(1+2x)^{-1}$ with $(1+X)^n$, the power is $n=-1$ and the quantity replacing $X$ is $2x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the term in x",
          "workingLatex": "nX = (-1)(2x) = -2x",
          "explanation": "The first variable term is $n$ times $X$; here $(-1)\\times 2x = -2x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the x^2 binomial coefficient",
          "workingLatex": "\\dfrac{n(n-1)}{2!} = \\dfrac{(-1)(-2)}{2} = 1",
          "explanation": "First evaluate the coefficient on its own: $(-1)(-2)=2$ over $2! = 2$ gives $1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Multiply by (2x)^2",
          "workingLatex": "1 \\times (2x)^2 = 1 \\times 4x^2 = 4x^2",
          "explanation": "Substituting $X=2x$ means squaring $2x$: $(2x)^2 = 4x^2$, so the term in $x^2$ is $4x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the x^3 binomial coefficient",
          "workingLatex": "\\dfrac{n(n-1)(n-2)}{3!} = \\dfrac{(-1)(-2)(-3)}{6} = -1",
          "explanation": "The top is $(-1)(-2)(-3) = -6$ and the bottom is $3! = 6$, so the coefficient is $-1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Multiply by (2x)^3",
          "workingLatex": "-1 \\times (2x)^3 = -1 \\times 8x^3 = -8x^3",
          "explanation": "Cubing $2x$ gives $(2x)^3 = 8x^3$, and multiplying by $-1$ gives the term $-8x^3$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Assemble the first four terms",
          "workingLatex": "(1+2x)^{-1} = 1 - 2x + 4x^2 - 8x^3 + \\cdots",
          "explanation": "Collecting the constant $1$ with the three terms found gives an alternating series whose coefficients are powers of $2$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the range of validity",
          "workingLatex": "\\left| 2x \\right| < 1 \\;\\Rightarrow\\; \\left| x \\right| < \\dfrac{1}{2}",
          "explanation": "Convergence needs the whole bracket quantity to be small, so $\\left| 2x \\right| < 1$; dividing by $2$ gives $\\left| x \\right| < \\tfrac{1}{2}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(1+2x)^{-1} = 1 - 2x + 4x^2 - 8x^3 + \\cdots$, valid for $\\left| x \\right| < \\dfrac{1}{2}$."
    }
  },
  {
    "id": "al.y2.pure.binomial-rational.q010",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Binomial expansion (rational powers)",
    "subtopicId": "al.y2.pure.binomial-rational",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "binomial expansion",
      "fractional index",
      "scaled term",
      "validity"
    ],
    "questionText": "Find the first three terms, in ascending powers of $x$, in the expansion of $(1+3x)^{\\frac{1}{2}}$, and state the range of values of $x$ for which the expansion is valid.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the general binomial series",
          "workingLatex": "(1+X)^n = 1 + nX + \\dfrac{n(n-1)}{2!}X^2 + \\cdots",
          "explanation": "Three terms are required, so we need the series up to $X^2$, using a placeholder $X$ that will become $3x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify n and the substitution",
          "workingLatex": "n = \\dfrac{1}{2}, \\quad X = 3x",
          "explanation": "Comparing $(1+3x)^{\\frac{1}{2}}$ with $(1+X)^n$, the power is $n=\\tfrac{1}{2}$ and the quantity replacing $X$ is $3x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the term in x",
          "workingLatex": "nX = \\dfrac{1}{2}(3x) = \\dfrac{3}{2}x",
          "explanation": "The first variable term is $n$ times $X$; here $\\tfrac{1}{2}\\times 3x = \\tfrac{3}{2}x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Work out the x^2 coefficient's numerator",
          "workingLatex": "n(n-1) = \\dfrac{1}{2}\\times\\left(-\\dfrac{1}{2}\\right) = -\\dfrac{1}{4}",
          "explanation": "Since $n-1 = \\tfrac{1}{2}-1 = -\\tfrac{1}{2}$, the top of the coefficient is $\\tfrac{1}{2}\\times(-\\tfrac{1}{2}) = -\\tfrac{1}{4}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Divide by 2 factorial",
          "workingLatex": "\\dfrac{n(n-1)}{2!} = \\dfrac{-\\frac{1}{4}}{2} = -\\dfrac{1}{8}",
          "explanation": "Dividing $-\\tfrac{1}{4}$ by $2! = 2$ gives the binomial coefficient $-\\tfrac{1}{8}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Square the substitution term",
          "workingLatex": "(3x)^2 = 9x^2",
          "explanation": "Because the whole of $3x$ was substituted for $X$, the $x^2$ term carries $(3x)^2$, and squaring both the $3$ and the $x$ gives $9x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Form the term in x^2",
          "workingLatex": "-\\dfrac{1}{8} \\times 9x^2 = -\\dfrac{9}{8}x^2",
          "explanation": "Multiplying the binomial coefficient $-\\tfrac{1}{8}$ by $9$ gives $-\\tfrac{9}{8}$, so the $x^2$ term is $-\\tfrac{9}{8}x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Assemble the first three terms",
          "workingLatex": "(1+3x)^{\\frac{1}{2}} = 1 + \\dfrac{3}{2}x - \\dfrac{9}{8}x^2 + \\cdots",
          "explanation": "Collecting the constant $1$ with the two variable terms gives the required start of the expansion.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the range of validity",
          "workingLatex": "\\left| 3x \\right| < 1 \\;\\Rightarrow\\; \\left| x \\right| < \\dfrac{1}{3}",
          "explanation": "Convergence requires the bracket quantity to be small, so $\\left| 3x \\right| < 1$; dividing by $3$ gives $\\left| x \\right| < \\tfrac{1}{3}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(1+3x)^{\\frac{1}{2}} = 1 + \\dfrac{3}{2}x - \\dfrac{9}{8}x^2 + \\cdots$, valid for $\\left| x \\right| < \\dfrac{1}{3}$."
    }
  },
  {
    "id": "al.y2.pure.binomial-rational.q011",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Binomial expansion (rational powers)",
    "subtopicId": "al.y2.pure.binomial-rational",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "binomial expansion",
      "negative index",
      "range of validity"
    ],
    "questionText": "Find the first four terms, in ascending powers of $x$, in the expansion of $(1-2x)^{-1}$, and state the range of values of $x$ for which the expansion is valid.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the general binomial series",
          "workingLatex": "(1+x)^n = 1 + nx + \\dfrac{n(n-1)}{2!}x^2 + \\dfrac{n(n-1)(n-2)}{3!}x^3 + \\cdots",
          "explanation": "For a rational power $n$ the binomial theorem becomes an infinite series. Each coefficient continues the pattern $n$, $n(n-1)$, $n(n-1)(n-2)$, divided by the matching factorial, so it works even when $n$ is negative.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify n and the quantity replacing x",
          "workingLatex": "n = -1, \\qquad x \\to -2x",
          "explanation": "Comparing $(1-2x)^{-1}$ with $(1+x)^n$, the power is $n=-1$ and the quantity added to $1$ is $-2x$. So wherever the formula shows $x$ we substitute $-2x$, taking care to raise $-2x$ to the matching power each time.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the term in x",
          "workingLatex": "n(-2x) = (-1)(-2x) = 2x",
          "explanation": "The first variable term is $n$ times the substituted quantity. Here $(-1)\\times(-2x)$ gives $+2x$, since a negative times a negative is positive.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the term in x^2",
          "workingLatex": "\\dfrac{n(n-1)}{2!}(-2x)^2 = \\dfrac{(-1)(-2)}{2}(-2x)^2 = (1)(4x^2) = 4x^2",
          "explanation": "The coefficient is $\\dfrac{(-1)(-2)}{2}=1$, and squaring $-2x$ gives $4x^2$ (the sign disappears because the power is even). Multiplying leaves $4x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the term in x^3",
          "workingLatex": "\\dfrac{n(n-1)(n-2)}{3!}(-2x)^3 = \\dfrac{(-1)(-2)(-3)}{6}(-2x)^3 = (-1)(-8x^3) = 8x^3",
          "explanation": "The coefficient is $\\dfrac{(-1)(-2)(-3)}{6}=\\dfrac{-6}{6}=-1$, and cubing $-2x$ gives $-8x^3$. Multiplying the two negatives gives $+8x^3$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Assemble the first four terms",
          "workingLatex": "(1-2x)^{-1} = 1 + 2x + 4x^2 + 8x^3 + \\cdots",
          "explanation": "Collecting the constant $1$ with the three terms just found gives the first four terms of the expansion.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the range of validity",
          "workingLatex": "\\left| -2x \\right| < 1 \\implies 2\\left| x \\right| < 1 \\implies \\left| x \\right| < \\dfrac{1}{2}",
          "explanation": "The series only converges while the substituted quantity stays smaller than $1$ in size. Since $\\left| -2x \\right| = 2\\left| x \\right|$, this requires $\\left| x \\right| < \\dfrac{1}{2}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(1-2x)^{-1} = 1 + 2x + 4x^2 + 8x^3 + \\cdots$, valid for $\\left| x \\right| < \\dfrac{1}{2}$."
    }
  },
  {
    "id": "al.y2.pure.binomial-rational.q012",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Binomial expansion (rational powers)",
    "subtopicId": "al.y2.pure.binomial-rational",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "binomial expansion",
      "fractional index",
      "square root"
    ],
    "questionText": "Find the first three terms, in ascending powers of $x$, in the expansion of $(1+4x)^{\\frac{1}{2}}$, and state the range of values of $x$ for which the expansion is valid.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the general binomial series",
          "workingLatex": "(1+x)^n = 1 + nx + \\dfrac{n(n-1)}{2!}x^2 + \\cdots",
          "explanation": "For a fractional power the binomial theorem still applies, giving an infinite series whose coefficients follow the pattern $n$, then $\\dfrac{n(n-1)}{2!}$, and so on.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify n and the quantity replacing x",
          "workingLatex": "n = \\tfrac{1}{2}, \\qquad x \\to 4x",
          "explanation": "Comparing $(1+4x)^{\\frac{1}{2}}$ with $(1+x)^n$, the power is $n=\\tfrac{1}{2}$ and the quantity added to $1$ is $4x$, so we replace $x$ by $4x$ and raise it to the correct power in each term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the term in x",
          "workingLatex": "n(4x) = \\tfrac{1}{2}(4x) = 2x",
          "explanation": "The first variable term is $n$ times $4x$. Half of $4x$ is $2x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute the coefficient of the x^2 term",
          "workingLatex": "\\dfrac{n(n-1)}{2!} = \\dfrac{\\left(\\tfrac{1}{2}\\right)\\left(-\\tfrac{1}{2}\\right)}{2} = \\dfrac{-\\tfrac{1}{4}}{2} = -\\dfrac{1}{8}",
          "explanation": "Here $n-1 = \\tfrac{1}{2}-1 = -\\tfrac{1}{2}$, so the top is $-\\tfrac{1}{4}$; dividing by $2!=2$ gives $-\\dfrac{1}{8}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the term in x^2",
          "workingLatex": "-\\dfrac{1}{8}(4x)^2 = -\\dfrac{1}{8}(16x^2) = -2x^2",
          "explanation": "Squaring $4x$ gives $16x^2$; multiplying by $-\\dfrac{1}{8}$ gives $-2x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Assemble the first three terms",
          "workingLatex": "(1+4x)^{\\frac{1}{2}} = 1 + 2x - 2x^2 + \\cdots",
          "explanation": "Collecting the constant $1$ with the two variable terms gives the required start of the expansion.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the range of validity",
          "workingLatex": "\\left| 4x \\right| < 1 \\implies \\left| x \\right| < \\dfrac{1}{4}",
          "explanation": "The expansion is valid while the substituted quantity $4x$ stays smaller than $1$ in size, which means $\\left| x \\right| < \\dfrac{1}{4}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(1+4x)^{\\frac{1}{2}} = 1 + 2x - 2x^2 + \\cdots$, valid for $\\left| x \\right| < \\dfrac{1}{4}$."
    }
  },
  {
    "id": "al.y2.pure.binomial-rational.q013",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Binomial expansion (rational powers)",
    "subtopicId": "al.y2.pure.binomial-rational",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "binomial expansion",
      "negative index",
      "coefficient"
    ],
    "questionText": "Find the coefficient of $x^2$ in the expansion of $(1+x)^{-4}$ in ascending powers of $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the general binomial series",
          "workingLatex": "(1+x)^n = 1 + nx + \\dfrac{n(n-1)}{2!}x^2 + \\cdots",
          "explanation": "The coefficient of $x^2$ is always the third term of the rational-power expansion, namely $\\dfrac{n(n-1)}{2!}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the value of n",
          "workingLatex": "n = -4",
          "explanation": "Comparing $(1+x)^{-4}$ with $(1+x)^n$, the power we substitute is $n = -4$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the formula for the x^2 coefficient",
          "workingLatex": "\\text{coeff of } x^2 = \\dfrac{n(n-1)}{2!}",
          "explanation": "We only need the third term, so we focus on $\\dfrac{n(n-1)}{2!}$ rather than expanding fully.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute n = -4",
          "workingLatex": "\\dfrac{n(n-1)}{2!} = \\dfrac{(-4)(-4-1)}{2!} = \\dfrac{(-4)(-5)}{2}",
          "explanation": "Here $n-1 = -4-1 = -5$, so the numerator is $(-4)(-5)$ and the denominator is $2! = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the numerator",
          "workingLatex": "(-4)(-5) = 20",
          "explanation": "A negative times a negative is positive, so $(-4)(-5) = 20$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Divide by the factorial",
          "workingLatex": "\\dfrac{20}{2} = 10",
          "explanation": "Dividing $20$ by $2! = 2$ gives $10$, so the term is $10x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the coefficient",
          "workingLatex": "\\text{coefficient of } x^2 = 10",
          "explanation": "The number multiplying $x^2$ is the required coefficient, $10$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The coefficient of $x^2$ is $10$."
    }
  },
  {
    "id": "al.y2.pure.binomial-rational.q014",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Binomial expansion (rational powers)",
    "subtopicId": "al.y2.pure.binomial-rational",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "binomial expansion",
      "negative index",
      "range of validity"
    ],
    "questionText": "Find the first three terms, in ascending powers of $x$, in the expansion of $(1-3x)^{-2}$, and state the range of values of $x$ for which the expansion is valid.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the general binomial series",
          "workingLatex": "(1+x)^n = 1 + nx + \\dfrac{n(n-1)}{2!}x^2 + \\cdots",
          "explanation": "For a negative power the expansion is an infinite series with coefficients $n$, then $\\dfrac{n(n-1)}{2!}$, continuing the usual pattern.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify n and the quantity replacing x",
          "workingLatex": "n = -2, \\qquad x \\to -3x",
          "explanation": "Comparing $(1-3x)^{-2}$ with $(1+x)^n$, the power is $n=-2$ and the quantity added to $1$ is $-3x$, so we replace $x$ by $-3x$ and raise it to the correct power each time.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the term in x",
          "workingLatex": "n(-3x) = (-2)(-3x) = 6x",
          "explanation": "The first variable term is $n$ times $-3x$. Two negatives multiply to a positive, giving $+6x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute the coefficient of the x^2 term",
          "workingLatex": "\\dfrac{n(n-1)}{2!} = \\dfrac{(-2)(-3)}{2} = \\dfrac{6}{2} = 3",
          "explanation": "Substituting $n=-2$ gives $(-2)(-3)=6$ on top and $2!=2$ underneath, so the coefficient is $3$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the term in x^2",
          "workingLatex": "3(-3x)^2 = 3(9x^2) = 27x^2",
          "explanation": "Squaring $-3x$ gives $9x^2$ (the sign vanishes for an even power); multiplying by $3$ gives $27x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Assemble the first three terms",
          "workingLatex": "(1-3x)^{-2} = 1 + 6x + 27x^2 + \\cdots",
          "explanation": "Collecting the constant $1$ with the two variable terms gives the required start of the expansion.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the range of validity",
          "workingLatex": "\\left| -3x \\right| < 1 \\implies 3\\left| x \\right| < 1 \\implies \\left| x \\right| < \\dfrac{1}{3}",
          "explanation": "The series converges only while the substituted quantity stays smaller than $1$ in size, so $\\left| x \\right| < \\dfrac{1}{3}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(1-3x)^{-2} = 1 + 6x + 27x^2 + \\cdots$, valid for $\\left| x \\right| < \\dfrac{1}{3}$."
    }
  },
  {
    "id": "al.y2.pure.binomial-rational.q015",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Binomial expansion (rational powers)",
    "subtopicId": "al.y2.pure.binomial-rational",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "interval",
    "tags": [
      "binomial expansion",
      "range of validity",
      "negative index"
    ],
    "questionText": "State the range of values of $x$ for which the expansion of $(1+5x)^{-1}$ is valid, and justify your answer.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the validity condition for the series",
          "workingLatex": "(1+x)^n \\text{ is valid for } \\left| x \\right| < 1",
          "explanation": "The infinite binomial series only adds up to the function when the term being raised stays small; for $(1+x)^n$ this means $\\left| x \\right| < 1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the quantity playing the role of x",
          "workingLatex": "(1+5x)^{-1}: \\quad \\text{quantity added to } 1 \\text{ is } 5x",
          "explanation": "In $(1+5x)^{-1}$ it is $5x$, not $x$, that sits in the place of $x$ in the standard form, so the condition applies to $5x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the condition to 5x",
          "workingLatex": "\\left| 5x \\right| < 1",
          "explanation": "Replacing $x$ by $5x$ in $\\left| x \\right| < 1$ gives the requirement $\\left| 5x \\right| < 1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the modulus",
          "workingLatex": "\\left| 5x \\right| = 5\\left| x \\right| \\implies 5\\left| x \\right| < 1",
          "explanation": "A positive constant can be pulled out of a modulus, so $\\left| 5x \\right| = 5\\left| x \\right|$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for the modulus of x",
          "workingLatex": "\\left| x \\right| < \\dfrac{1}{5}",
          "explanation": "Dividing both sides by $5$ isolates $\\left| x \\right|$, giving $\\left| x \\right| < \\dfrac{1}{5}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the answer as an interval",
          "workingLatex": "-\\dfrac{1}{5} < x < \\dfrac{1}{5}",
          "explanation": "The statement $\\left| x \\right| < \\dfrac{1}{5}$ means $x$ lies strictly between $-\\dfrac{1}{5}$ and $\\dfrac{1}{5}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The expansion is valid for $-\\dfrac{1}{5} < x < \\dfrac{1}{5}$, that is $\\left| x \\right| < \\dfrac{1}{5}$."
    }
  },
  {
    "id": "al.y2.pure.binomial-rational.q016",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Binomial expansion (rational powers)",
    "subtopicId": "al.y2.pure.binomial-rational",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "binomial expansion",
      "fractional index",
      "coefficient"
    ],
    "questionText": "Find the coefficient of $x^3$ in the expansion of $(1-x)^{\\frac{1}{2}}$ in ascending powers of $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the general binomial series",
          "workingLatex": "(1+x)^n = 1 + nx + \\dfrac{n(n-1)}{2!}x^2 + \\dfrac{n(n-1)(n-2)}{3!}x^3 + \\cdots",
          "explanation": "The coefficient of $x^3$ comes from the fourth term of the rational-power expansion, namely $\\dfrac{n(n-1)(n-2)}{3!}$ multiplied by whatever replaces $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify n and the quantity replacing x",
          "workingLatex": "n = \\tfrac{1}{2}, \\qquad x \\to -x",
          "explanation": "Comparing $(1-x)^{\\frac{1}{2}}$ with $(1+x)^n$, the power is $n=\\tfrac{1}{2}$ and the quantity added to $1$ is $-x$, so we must raise $-x$ to the third power.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the x^3 term",
          "workingLatex": "\\dfrac{n(n-1)(n-2)}{3!}(-x)^3",
          "explanation": "This is the only term that produces $x^3$, so we evaluate its numeric factor and then include $(-x)^3$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute n = 1/2 into the coefficient",
          "workingLatex": "\\dfrac{n(n-1)(n-2)}{3!} = \\dfrac{\\left(\\tfrac{1}{2}\\right)\\left(-\\tfrac{1}{2}\\right)\\left(-\\tfrac{3}{2}\\right)}{6}",
          "explanation": "Here $n-1 = -\\tfrac{1}{2}$ and $n-2 = -\\tfrac{3}{2}$, and $3! = 6$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the numerator",
          "workingLatex": "\\left(\\tfrac{1}{2}\\right)\\left(-\\tfrac{1}{2}\\right)\\left(-\\tfrac{3}{2}\\right) = \\dfrac{3}{8}",
          "explanation": "Multiplying the three fractions: $\\tfrac{1}{2}\\times\\left(-\\tfrac{1}{2}\\right) = -\\tfrac{1}{4}$, then $-\\tfrac{1}{4}\\times\\left(-\\tfrac{3}{2}\\right) = \\tfrac{3}{8}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Divide by the factorial",
          "workingLatex": "\\dfrac{\\tfrac{3}{8}}{6} = \\dfrac{3}{48} = \\dfrac{1}{16}",
          "explanation": "Dividing $\\tfrac{3}{8}$ by $6$ gives $\\tfrac{3}{48}$, which simplifies to $\\tfrac{1}{16}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Include the (-x)^3 factor",
          "workingLatex": "\\dfrac{1}{16}(-x)^3 = \\dfrac{1}{16}(-x^3) = -\\dfrac{1}{16}x^3",
          "explanation": "Cubing $-x$ gives $-x^3$ because an odd power keeps the negative sign, so the term becomes $-\\dfrac{1}{16}x^3$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the coefficient",
          "workingLatex": "\\text{coefficient of } x^3 = -\\dfrac{1}{16}",
          "explanation": "The number multiplying $x^3$ is $-\\dfrac{1}{16}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The coefficient of $x^3$ is $-\\dfrac{1}{16}$."
    }
  },
  {
    "id": "al.y2.pure.binomial-rational.q017",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Binomial expansion (rational powers)",
    "subtopicId": "al.y2.pure.binomial-rational",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "binomial expansion",
      "negative index",
      "range of validity"
    ],
    "questionText": "Find the first four terms, in ascending powers of $x$, in the expansion of $(1+2x)^{-3}$, and state the range of values of $x$ for which the expansion is valid.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the general binomial series",
          "workingLatex": "(1+x)^n = 1 + nx + \\dfrac{n(n-1)}{2!}x^2 + \\dfrac{n(n-1)(n-2)}{3!}x^3 + \\cdots",
          "explanation": "For a negative power the expansion is an infinite series; the coefficients follow the pattern $n$, $\\dfrac{n(n-1)}{2!}$, $\\dfrac{n(n-1)(n-2)}{3!}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify n and the quantity replacing x",
          "workingLatex": "n = -3, \\qquad x \\to 2x",
          "explanation": "Comparing $(1+2x)^{-3}$ with $(1+x)^n$, the power is $n=-3$ and the quantity added to $1$ is $2x$, so we replace $x$ by $2x$ and raise it to the correct power in each term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Note the constant term",
          "workingLatex": "\\text{constant term} = 1",
          "explanation": "Every such expansion begins with $1$, since substituting $x=0$ gives $1^n = 1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the term in x",
          "workingLatex": "n(2x) = (-3)(2x) = -6x",
          "explanation": "The first variable term is $n$ times $2x$, giving $-6x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute the coefficient of the x^2 term",
          "workingLatex": "\\dfrac{n(n-1)}{2!} = \\dfrac{(-3)(-4)}{2} = \\dfrac{12}{2} = 6",
          "explanation": "Substituting $n=-3$ gives $(-3)(-4)=12$ on top and $2!=2$ underneath, so the coefficient is $6$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the term in x^2",
          "workingLatex": "6(2x)^2 = 6(4x^2) = 24x^2",
          "explanation": "Squaring $2x$ gives $4x^2$; multiplying by $6$ gives $24x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compute the coefficient of the x^3 term",
          "workingLatex": "\\dfrac{n(n-1)(n-2)}{3!} = \\dfrac{(-3)(-4)(-5)}{6} = \\dfrac{-60}{6} = -10",
          "explanation": "The numerator $(-3)(-4)(-5) = -60$ (three negatives give a negative), and dividing by $3!=6$ gives $-10$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find the term in x^3",
          "workingLatex": "-10(2x)^3 = -10(8x^3) = -80x^3",
          "explanation": "Cubing $2x$ gives $8x^3$; multiplying by $-10$ gives $-80x^3$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Assemble the first four terms",
          "workingLatex": "(1+2x)^{-3} = 1 - 6x + 24x^2 - 80x^3 + \\cdots",
          "explanation": "Collecting the constant with the three variable terms gives the required start of the expansion.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the range of validity",
          "workingLatex": "\\left| 2x \\right| < 1 \\implies 2\\left| x \\right| < 1 \\implies \\left| x \\right| < \\dfrac{1}{2}",
          "explanation": "The series converges only while the substituted quantity $2x$ stays smaller than $1$ in size, so $\\left| x \\right| < \\dfrac{1}{2}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(1+2x)^{-3} = 1 - 6x + 24x^2 - 80x^3 + \\cdots$, valid for $\\left| x \\right| < \\dfrac{1}{2}$."
    }
  },
  {
    "id": "al.y2.pure.binomial-rational.q018",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Binomial expansion (rational powers)",
    "subtopicId": "al.y2.pure.binomial-rational",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "binomial expansion",
      "cube root",
      "fractional index"
    ],
    "questionText": "Find the first three terms, in ascending powers of $x$, in the expansion of $(1+6x)^{\\frac{1}{3}}$, and state the range of values of $x$ for which the expansion is valid.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the general binomial series",
          "workingLatex": "(1+x)^n = 1 + nx + \\dfrac{n(n-1)}{2!}x^2 + \\cdots",
          "explanation": "A cube root is the power $\\tfrac{1}{3}$, so the same rational-power series applies with coefficients $n$ and $\\dfrac{n(n-1)}{2!}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify n and the quantity replacing x",
          "workingLatex": "n = \\tfrac{1}{3}, \\qquad x \\to 6x",
          "explanation": "Comparing $(1+6x)^{\\frac{1}{3}}$ with $(1+x)^n$, the power is $n=\\tfrac{1}{3}$ and the quantity added to $1$ is $6x$, so we replace $x$ by $6x$ and raise it to the correct power.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Note the constant term",
          "workingLatex": "\\text{constant term} = 1",
          "explanation": "Setting $x=0$ gives $1^{1/3}=1$, so the expansion starts at $1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the term in x",
          "workingLatex": "n(6x) = \\tfrac{1}{3}(6x) = 2x",
          "explanation": "The first variable term is $n$ times $6x$; one third of $6x$ is $2x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set up the coefficient of the x^2 term",
          "workingLatex": "\\dfrac{n(n-1)}{2!} = \\dfrac{\\left(\\tfrac{1}{3}\\right)\\left(-\\tfrac{2}{3}\\right)}{2}",
          "explanation": "Here $n-1 = \\tfrac{1}{3}-1 = -\\tfrac{2}{3}$, and the denominator is $2! = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify the numerator",
          "workingLatex": "\\left(\\tfrac{1}{3}\\right)\\left(-\\tfrac{2}{3}\\right) = -\\dfrac{2}{9}",
          "explanation": "Multiplying $\\tfrac{1}{3}$ by $-\\tfrac{2}{3}$ gives $-\\tfrac{2}{9}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Divide by the factorial",
          "workingLatex": "\\dfrac{-\\tfrac{2}{9}}{2} = -\\dfrac{1}{9}",
          "explanation": "Dividing $-\\tfrac{2}{9}$ by $2$ gives $-\\tfrac{1}{9}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find the term in x^2",
          "workingLatex": "-\\dfrac{1}{9}(6x)^2 = -\\dfrac{1}{9}(36x^2) = -4x^2",
          "explanation": "Squaring $6x$ gives $36x^2$; multiplying by $-\\tfrac{1}{9}$ gives $-4x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Assemble the first three terms",
          "workingLatex": "(1+6x)^{\\frac{1}{3}} = 1 + 2x - 4x^2 + \\cdots",
          "explanation": "Collecting the constant with the two variable terms gives the required start of the expansion.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the range of validity",
          "workingLatex": "\\left| 6x \\right| < 1 \\implies \\left| x \\right| < \\dfrac{1}{6}",
          "explanation": "The expansion is valid while the substituted quantity $6x$ stays smaller than $1$ in size, giving $\\left| x \\right| < \\dfrac{1}{6}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(1+6x)^{\\frac{1}{3}} = 1 + 2x - 4x^2 + \\cdots$, valid for $\\left| x \\right| < \\dfrac{1}{6}$."
    }
  },
  {
    "id": "al.y2.pure.binomial-rational.q019",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Binomial expansion (rational powers)",
    "subtopicId": "al.y2.pure.binomial-rational",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "binomial expansion",
      "fractional index",
      "coefficient"
    ],
    "questionText": "Find the coefficient of $x^2$ in the expansion of $(1+2x)^{\\frac{1}{2}}$ in ascending powers of $x$, and state the range of values of $x$ for which the expansion is valid.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the general binomial series",
          "workingLatex": "(1+x)^n = 1 + nx + \\dfrac{n(n-1)}{2!}x^2 + \\cdots",
          "explanation": "The $x^2$ term comes from the third term of the series, $\\dfrac{n(n-1)}{2!}$ multiplied by the square of whatever replaces $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify n and the quantity replacing x",
          "workingLatex": "n = \\tfrac{1}{2}, \\qquad x \\to 2x",
          "explanation": "Comparing $(1+2x)^{\\frac{1}{2}}$ with $(1+x)^n$, the power is $n=\\tfrac{1}{2}$ and the quantity added to $1$ is $2x$, which must be squared for the $x^2$ term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the x^2 term",
          "workingLatex": "\\dfrac{n(n-1)}{2!}(2x)^2",
          "explanation": "We evaluate the numeric coefficient and then include $(2x)^2$, since only this term produces $x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set up the numeric coefficient",
          "workingLatex": "\\dfrac{n(n-1)}{2!} = \\dfrac{\\left(\\tfrac{1}{2}\\right)\\left(-\\tfrac{1}{2}\\right)}{2}",
          "explanation": "Here $n-1 = \\tfrac{1}{2}-1 = -\\tfrac{1}{2}$, and the denominator is $2! = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the numerator",
          "workingLatex": "\\left(\\tfrac{1}{2}\\right)\\left(-\\tfrac{1}{2}\\right) = -\\dfrac{1}{4}",
          "explanation": "Multiplying $\\tfrac{1}{2}$ by $-\\tfrac{1}{2}$ gives $-\\tfrac{1}{4}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Divide by the factorial",
          "workingLatex": "\\dfrac{-\\tfrac{1}{4}}{2} = -\\dfrac{1}{8}",
          "explanation": "Dividing $-\\tfrac{1}{4}$ by $2$ gives $-\\tfrac{1}{8}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Include the (2x)^2 factor",
          "workingLatex": "-\\dfrac{1}{8}(2x)^2 = -\\dfrac{1}{8}(4x^2) = -\\dfrac{1}{2}x^2",
          "explanation": "Squaring $2x$ gives $4x^2$; multiplying by $-\\tfrac{1}{8}$ gives $-\\tfrac{1}{2}x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Read off the coefficient",
          "workingLatex": "\\text{coefficient of } x^2 = -\\dfrac{1}{2}",
          "explanation": "The number multiplying $x^2$ is $-\\dfrac{1}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the range of validity",
          "workingLatex": "\\left| 2x \\right| < 1 \\implies \\left| x \\right| < \\dfrac{1}{2}",
          "explanation": "The expansion is valid while the substituted quantity $2x$ stays smaller than $1$ in size, giving $\\left| x \\right| < \\dfrac{1}{2}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The coefficient of $x^2$ is $-\\dfrac{1}{2}$, and the expansion is valid for $\\left| x \\right| < \\dfrac{1}{2}$."
    }
  },
  {
    "id": "al.y2.pure.binomial-rational.q020",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Binomial expansion (rational powers)",
    "subtopicId": "al.y2.pure.binomial-rational",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "binomial expansion",
      "fractional index",
      "range of validity"
    ],
    "questionText": "Find the first four terms, in ascending powers of $x$, in the expansion of $(1-4x)^{-\\frac{1}{2}}$, and state the range of values of $x$ for which the expansion is valid.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the general binomial series",
          "workingLatex": "(1+x)^n = 1 + nx + \\dfrac{n(n-1)}{2!}x^2 + \\dfrac{n(n-1)(n-2)}{3!}x^3 + \\cdots",
          "explanation": "A negative fractional power still uses the same infinite series, with coefficients $n$, $\\dfrac{n(n-1)}{2!}$ and $\\dfrac{n(n-1)(n-2)}{3!}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify n and the quantity replacing x",
          "workingLatex": "n = -\\tfrac{1}{2}, \\qquad x \\to -4x",
          "explanation": "Comparing $(1-4x)^{-\\frac{1}{2}}$ with $(1+x)^n$, the power is $n=-\\tfrac{1}{2}$ and the quantity added to $1$ is $-4x$, so we replace $x$ by $-4x$ and raise it to the correct power each time.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Note the constant term",
          "workingLatex": "\\text{constant term} = 1",
          "explanation": "Setting $x=0$ gives $1^{-1/2}=1$, so the expansion starts at $1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the term in x",
          "workingLatex": "n(-4x) = \\left(-\\tfrac{1}{2}\\right)(-4x) = 2x",
          "explanation": "The first variable term is $n$ times $-4x$; two negatives multiply to a positive, and $\\tfrac{1}{2}\\times 4 = 2$, giving $+2x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute the coefficient of the x^2 term",
          "workingLatex": "\\dfrac{n(n-1)}{2!} = \\dfrac{\\left(-\\tfrac{1}{2}\\right)\\left(-\\tfrac{3}{2}\\right)}{2} = \\dfrac{\\tfrac{3}{4}}{2} = \\dfrac{3}{8}",
          "explanation": "Here $n-1 = -\\tfrac{1}{2}-1 = -\\tfrac{3}{2}$, so the top is $\\left(-\\tfrac{1}{2}\\right)\\left(-\\tfrac{3}{2}\\right)=\\tfrac{3}{4}$; dividing by $2$ gives $\\tfrac{3}{8}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the term in x^2",
          "workingLatex": "\\dfrac{3}{8}(-4x)^2 = \\dfrac{3}{8}(16x^2) = 6x^2",
          "explanation": "Squaring $-4x$ gives $16x^2$ (the sign vanishes for an even power); multiplying by $\\tfrac{3}{8}$ gives $6x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compute the coefficient of the x^3 term",
          "workingLatex": "\\dfrac{n(n-1)(n-2)}{3!} = \\dfrac{\\left(-\\tfrac{1}{2}\\right)\\left(-\\tfrac{3}{2}\\right)\\left(-\\tfrac{5}{2}\\right)}{6}",
          "explanation": "Now $n-2 = -\\tfrac{1}{2}-2 = -\\tfrac{5}{2}$, and the denominator is $3! = 6$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Simplify that coefficient",
          "workingLatex": "\\dfrac{-\\tfrac{15}{8}}{6} = -\\dfrac{15}{48} = -\\dfrac{5}{16}",
          "explanation": "The numerator is $\\left(-\\tfrac{1}{2}\\right)\\left(-\\tfrac{3}{2}\\right)\\left(-\\tfrac{5}{2}\\right) = -\\tfrac{15}{8}$ (three negatives give a negative); dividing by $6$ gives $-\\tfrac{15}{48}=-\\tfrac{5}{16}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the term in x^3",
          "workingLatex": "-\\dfrac{5}{16}(-4x)^3 = -\\dfrac{5}{16}(-64x^3) = 20x^3",
          "explanation": "Cubing $-4x$ gives $-64x^3$; multiplying by $-\\tfrac{5}{16}$ gives $+20x^3$, since $\\tfrac{5}{16}\\times 64 = 20$ and the two negatives cancel.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Assemble the first four terms",
          "workingLatex": "(1-4x)^{-\\frac{1}{2}} = 1 + 2x + 6x^2 + 20x^3 + \\cdots",
          "explanation": "Collecting the constant with the three variable terms gives the required start of the expansion.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the range of validity",
          "workingLatex": "\\left| -4x \\right| < 1 \\implies 4\\left| x \\right| < 1 \\implies \\left| x \\right| < \\dfrac{1}{4}",
          "explanation": "The series converges only while the substituted quantity stays smaller than $1$ in size, and $\\left| -4x \\right| = 4\\left| x \\right|$, so $\\left| x \\right| < \\dfrac{1}{4}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(1-4x)^{-\\frac{1}{2}} = 1 + 2x + 6x^2 + 20x^3 + \\cdots$, valid for $\\left| x \\right| < \\dfrac{1}{4}$."
    }
  },
  {
    "id": "al.y2.pure.binomial-rational.q021",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Binomial expansion (rational powers)",
    "subtopicId": "al.y2.pure.binomial-rational",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "binomial expansion",
      "fractional index",
      "factor out a^n",
      "range of validity"
    ],
    "questionText": "Find the first three terms, in ascending powers of $x$, in the expansion of $(4+x)^{\\frac{1}{2}}$, by first writing it as $2\\left(1+\\dfrac{x}{4}\\right)^{\\frac{1}{2}}$, and state the range of values of $x$ for which the expansion is valid.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factor the constant out of the bracket",
          "workingLatex": "(4+x)^{\\frac{1}{2}} = 4^{\\frac{1}{2}}\\left(1 + \\dfrac{x}{4}\\right)^{\\frac{1}{2}} = 2\\left(1 + \\dfrac{x}{4}\\right)^{\\frac{1}{2}}",
          "explanation": "The binomial series only works on a bracket that starts with $1$. Taking the $4$ out of $(4+x)$ leaves $4\\left(1+\\dfrac{x}{4}\\right)$, and because the power is $\\tfrac{1}{2}$ the $4$ comes out as $4^{\\frac{1}{2}} = 2$. Now the $\\left(1+\\dfrac{x}{4}\\right)^{\\frac{1}{2}}$ part is ready to expand.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down the general binomial series",
          "workingLatex": "(1+u)^n = 1 + nu + \\dfrac{n(n-1)}{2!}u^2 + \\cdots",
          "explanation": "For a fractional power the theorem becomes an infinite series, each coefficient following the pattern $n$, then $n(n-1)$, divided by the matching factorial. Here $u = \\dfrac{x}{4}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify the power and the variable part",
          "workingLatex": "n = \\dfrac{1}{2}, \\quad u = \\dfrac{x}{4}",
          "explanation": "Comparing $\\left(1+\\dfrac{x}{4}\\right)^{\\frac{1}{2}}$ with $(1+u)^n$ we read off $n = \\tfrac{1}{2}$ and $u = \\dfrac{x}{4}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the coefficient of u",
          "workingLatex": "nu = \\dfrac{1}{2}u",
          "explanation": "The first variable term is $n$ times $u$, which is simply $\\tfrac{1}{2}u$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the coefficient of u squared",
          "workingLatex": "\\dfrac{n(n-1)}{2!}u^2 = \\dfrac{\\frac{1}{2}\\left(-\\frac{1}{2}\\right)}{2}u^2 = -\\dfrac{1}{8}u^2",
          "explanation": "With $n = \\tfrac{1}{2}$ the top is $\\tfrac{1}{2}\\times\\left(-\\tfrac{1}{2}\\right) = -\\tfrac{1}{4}$ and the bottom is $2! = 2$, so $-\\tfrac{1}{4}\\div 2 = -\\tfrac{1}{8}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Expand the bracket in terms of x",
          "workingLatex": "\\left(1+\\dfrac{x}{4}\\right)^{\\frac{1}{2}} = 1 + \\dfrac{1}{2}\\left(\\dfrac{x}{4}\\right) - \\dfrac{1}{8}\\left(\\dfrac{x}{4}\\right)^2 = 1 + \\dfrac{x}{8} - \\dfrac{x^2}{128}",
          "explanation": "Replacing $u$ by $\\dfrac{x}{4}$ gives $\\tfrac{1}{2}\\cdot\\dfrac{x}{4} = \\dfrac{x}{8}$, and $-\\tfrac{1}{8}\\cdot\\dfrac{x^2}{16} = -\\dfrac{x^2}{128}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Multiply through by the factor 2",
          "workingLatex": "2\\left(1 + \\dfrac{x}{8} - \\dfrac{x^2}{128}\\right) = 2 + \\dfrac{x}{4} - \\dfrac{x^2}{64}",
          "explanation": "The factor $2$ taken out at the start must multiply every term: $2\\times\\dfrac{x}{8} = \\dfrac{x}{4}$ and $2\\times\\left(-\\dfrac{x^2}{128}\\right) = -\\dfrac{x^2}{64}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the range of validity",
          "workingLatex": "\\left| \\dfrac{x}{4} \\right| < 1 \\;\\Longrightarrow\\; \\left| x \\right| < 4",
          "explanation": "The expansion of $\\left(1+\\dfrac{x}{4}\\right)^{\\frac{1}{2}}$ converges only while $\\left|\\dfrac{x}{4}\\right| < 1$, which rearranges to $\\left| x \\right| < 4$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(4+x)^{\\frac{1}{2}} = 2 + \\dfrac{1}{4}x - \\dfrac{1}{64}x^2 + \\cdots$, valid for $\\left| x \\right| < 4$."
    }
  },
  {
    "id": "al.y2.pure.binomial-rational.q022",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Binomial expansion (rational powers)",
    "subtopicId": "al.y2.pure.binomial-rational",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "binomial expansion",
      "negative index",
      "factor out a^n",
      "range of validity"
    ],
    "questionText": "Find the first three terms, in ascending powers of $x$, in the expansion of $(2+x)^{-1}$, by first writing it as $\\dfrac{1}{2}\\left(1+\\dfrac{x}{2}\\right)^{-1}$, and state the range of values of $x$ for which the expansion is valid.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factor the constant out of the bracket",
          "workingLatex": "(2+x)^{-1} = 2^{-1}\\left(1 + \\dfrac{x}{2}\\right)^{-1} = \\dfrac{1}{2}\\left(1 + \\dfrac{x}{2}\\right)^{-1}",
          "explanation": "The series needs a bracket beginning with $1$, so take the $2$ out of $(2+x)$. Because the power is $-1$, the $2$ leaves as $2^{-1} = \\dfrac{1}{2}$, and $\\left(1+\\dfrac{x}{2}\\right)^{-1}$ is ready to expand.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down the general binomial series",
          "workingLatex": "(1+u)^n = 1 + nu + \\dfrac{n(n-1)}{2!}u^2 + \\cdots",
          "explanation": "For a negative power the theorem is an infinite series; each coefficient continues the pattern $n$, then $n(n-1)$, over the matching factorial. Here $u = \\dfrac{x}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify the power and the variable part",
          "workingLatex": "n = -1, \\quad u = \\dfrac{x}{2}",
          "explanation": "Comparing $\\left(1+\\dfrac{x}{2}\\right)^{-1}$ with $(1+u)^n$ gives $n = -1$ and $u = \\dfrac{x}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the coefficient of u",
          "workingLatex": "nu = (-1)u = -u",
          "explanation": "The term in $u$ is $n\\,u = -1\\times u = -u$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the coefficient of u squared",
          "workingLatex": "\\dfrac{n(n-1)}{2!}u^2 = \\dfrac{(-1)(-2)}{2}u^2 = u^2",
          "explanation": "The top is $(-1)(-2) = 2$ and the bottom is $2! = 2$, so $2\\div 2 = 1$ and the coefficient of $u^2$ is $1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Expand the bracket in terms of x",
          "workingLatex": "\\left(1+\\dfrac{x}{2}\\right)^{-1} = 1 - \\dfrac{x}{2} + \\left(\\dfrac{x}{2}\\right)^2 = 1 - \\dfrac{x}{2} + \\dfrac{x^2}{4}",
          "explanation": "Replacing $u$ by $\\dfrac{x}{2}$: the middle term is $-\\dfrac{x}{2}$ and the last is $\\left(\\dfrac{x}{2}\\right)^2 = \\dfrac{x^2}{4}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Multiply through by the factor one half",
          "workingLatex": "\\dfrac{1}{2}\\left(1 - \\dfrac{x}{2} + \\dfrac{x^2}{4}\\right) = \\dfrac{1}{2} - \\dfrac{x}{4} + \\dfrac{x^2}{8}",
          "explanation": "Multiplying every term by the $\\dfrac{1}{2}$ taken out earlier gives $\\dfrac{1}{2}$, then $-\\dfrac{x}{4}$, then $\\dfrac{x^2}{8}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the range of validity",
          "workingLatex": "\\left| \\dfrac{x}{2} \\right| < 1 \\;\\Longrightarrow\\; \\left| x \\right| < 2",
          "explanation": "The expansion of $\\left(1+\\dfrac{x}{2}\\right)^{-1}$ is valid only when $\\left|\\dfrac{x}{2}\\right| < 1$, that is $\\left| x \\right| < 2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(2+x)^{-1} = \\dfrac{1}{2} - \\dfrac{1}{4}x + \\dfrac{1}{8}x^2 - \\cdots$, valid for $\\left| x \\right| < 2$."
    }
  },
  {
    "id": "al.y2.pure.binomial-rational.q023",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Binomial expansion (rational powers)",
    "subtopicId": "al.y2.pure.binomial-rational",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "binomial expansion",
      "fractional index",
      "factor out a^n",
      "range of validity"
    ],
    "questionText": "Find the first three terms, in ascending powers of $x$, in the expansion of $(9+x)^{\\frac{1}{2}}$, and state the range of values of $x$ for which the expansion is valid.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factor the constant out of the bracket",
          "workingLatex": "(9+x)^{\\frac{1}{2}} = 9^{\\frac{1}{2}}\\left(1 + \\dfrac{x}{9}\\right)^{\\frac{1}{2}} = 3\\left(1 + \\dfrac{x}{9}\\right)^{\\frac{1}{2}}",
          "explanation": "Take the $9$ out of $(9+x)$ so the bracket begins with $1$. Since the power is $\\tfrac{1}{2}$, the $9$ comes out as $9^{\\frac{1}{2}} = 3$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down the general binomial series",
          "workingLatex": "(1+u)^n = 1 + nu + \\dfrac{n(n-1)}{2!}u^2 + \\cdots",
          "explanation": "The rational-power series continues the pattern $n$, then $n(n-1)$, over the matching factorial. Here $u = \\dfrac{x}{9}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify the power and the variable part",
          "workingLatex": "n = \\dfrac{1}{2}, \\quad u = \\dfrac{x}{9}",
          "explanation": "Comparing $\\left(1+\\dfrac{x}{9}\\right)^{\\frac{1}{2}}$ with $(1+u)^n$ gives $n = \\tfrac{1}{2}$ and $u = \\dfrac{x}{9}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the coefficient of u",
          "workingLatex": "nu = \\dfrac{1}{2}u",
          "explanation": "The first variable term is $n u = \\tfrac{1}{2}u$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the coefficient of u squared",
          "workingLatex": "\\dfrac{n(n-1)}{2!}u^2 = \\dfrac{\\frac{1}{2}\\left(-\\frac{1}{2}\\right)}{2}u^2 = -\\dfrac{1}{8}u^2",
          "explanation": "Top $\\tfrac{1}{2}\\times\\left(-\\tfrac{1}{2}\\right) = -\\tfrac{1}{4}$, bottom $2! = 2$, so $-\\tfrac{1}{4}\\div 2 = -\\tfrac{1}{8}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Expand the bracket in terms of x",
          "workingLatex": "\\left(1+\\dfrac{x}{9}\\right)^{\\frac{1}{2}} = 1 + \\dfrac{1}{2}\\left(\\dfrac{x}{9}\\right) - \\dfrac{1}{8}\\left(\\dfrac{x}{9}\\right)^2 = 1 + \\dfrac{x}{18} - \\dfrac{x^2}{648}",
          "explanation": "$\\tfrac{1}{2}\\cdot\\dfrac{x}{9} = \\dfrac{x}{18}$, and $-\\tfrac{1}{8}\\cdot\\dfrac{x^2}{81} = -\\dfrac{x^2}{648}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Multiply through by the factor 3",
          "workingLatex": "3\\left(1 + \\dfrac{x}{18} - \\dfrac{x^2}{648}\\right) = 3 + \\dfrac{x}{6} - \\dfrac{x^2}{216}",
          "explanation": "Multiplying every term by $3$: $3\\times\\dfrac{x}{18} = \\dfrac{x}{6}$ and $3\\times\\left(-\\dfrac{x^2}{648}\\right) = -\\dfrac{x^2}{216}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the range of validity",
          "workingLatex": "\\left| \\dfrac{x}{9} \\right| < 1 \\;\\Longrightarrow\\; \\left| x \\right| < 9",
          "explanation": "The series converges only while $\\left|\\dfrac{x}{9}\\right| < 1$, i.e. $\\left| x \\right| < 9$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(9+x)^{\\frac{1}{2}} = 3 + \\dfrac{1}{6}x - \\dfrac{1}{216}x^2 + \\cdots$, valid for $\\left| x \\right| < 9$."
    }
  },
  {
    "id": "al.y2.pure.binomial-rational.q024",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Binomial expansion (rational powers)",
    "subtopicId": "al.y2.pure.binomial-rational",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "binomial expansion",
      "cube root",
      "factor out a^n",
      "range of validity"
    ],
    "questionText": "Find the first three terms, in ascending powers of $x$, in the expansion of $(8+x)^{\\frac{1}{3}}$, by first writing it as $2\\left(1+\\dfrac{x}{8}\\right)^{\\frac{1}{3}}$, and state the range of values of $x$ for which the expansion is valid.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factor the constant out of the bracket",
          "workingLatex": "(8+x)^{\\frac{1}{3}} = 8^{\\frac{1}{3}}\\left(1 + \\dfrac{x}{8}\\right)^{\\frac{1}{3}} = 2\\left(1 + \\dfrac{x}{8}\\right)^{\\frac{1}{3}}",
          "explanation": "Factor the $8$ out so the bracket starts with $1$. As the power is $\\tfrac{1}{3}$, the $8$ leaves as $8^{\\frac{1}{3}} = 2$, the cube root of $8$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down the general binomial series",
          "workingLatex": "(1+u)^n = 1 + nu + \\dfrac{n(n-1)}{2!}u^2 + \\cdots",
          "explanation": "The rational-power series continues the pattern $n$, then $n(n-1)$, over the matching factorial. Here $u = \\dfrac{x}{8}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify the power and the variable part",
          "workingLatex": "n = \\dfrac{1}{3}, \\quad u = \\dfrac{x}{8}",
          "explanation": "Comparing $\\left(1+\\dfrac{x}{8}\\right)^{\\frac{1}{3}}$ with $(1+u)^n$ gives $n = \\tfrac{1}{3}$ and $u = \\dfrac{x}{8}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the coefficient of u",
          "workingLatex": "nu = \\dfrac{1}{3}u",
          "explanation": "The first variable term is $n u = \\tfrac{1}{3}u$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the coefficient of u squared",
          "workingLatex": "\\dfrac{n(n-1)}{2!}u^2 = \\dfrac{\\frac{1}{3}\\left(-\\frac{2}{3}\\right)}{2}u^2 = -\\dfrac{1}{9}u^2",
          "explanation": "Top $\\tfrac{1}{3}\\times\\left(-\\tfrac{2}{3}\\right) = -\\tfrac{2}{9}$, bottom $2! = 2$, so $-\\tfrac{2}{9}\\div 2 = -\\tfrac{1}{9}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Expand the bracket in terms of x",
          "workingLatex": "\\left(1+\\dfrac{x}{8}\\right)^{\\frac{1}{3}} = 1 + \\dfrac{1}{3}\\left(\\dfrac{x}{8}\\right) - \\dfrac{1}{9}\\left(\\dfrac{x}{8}\\right)^2 = 1 + \\dfrac{x}{24} - \\dfrac{x^2}{576}",
          "explanation": "$\\tfrac{1}{3}\\cdot\\dfrac{x}{8} = \\dfrac{x}{24}$, and $-\\tfrac{1}{9}\\cdot\\dfrac{x^2}{64} = -\\dfrac{x^2}{576}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Multiply through by the factor 2",
          "workingLatex": "2\\left(1 + \\dfrac{x}{24} - \\dfrac{x^2}{576}\\right) = 2 + \\dfrac{x}{12} - \\dfrac{x^2}{288}",
          "explanation": "Multiplying every term by $2$: $2\\times\\dfrac{x}{24} = \\dfrac{x}{12}$ and $2\\times\\left(-\\dfrac{x^2}{576}\\right) = -\\dfrac{x^2}{288}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the range of validity",
          "workingLatex": "\\left| \\dfrac{x}{8} \\right| < 1 \\;\\Longrightarrow\\; \\left| x \\right| < 8",
          "explanation": "The series converges only while $\\left|\\dfrac{x}{8}\\right| < 1$, i.e. $\\left| x \\right| < 8$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(8+x)^{\\frac{1}{3}} = 2 + \\dfrac{1}{12}x - \\dfrac{1}{288}x^2 + \\cdots$, valid for $\\left| x \\right| < 8$."
    }
  },
  {
    "id": "al.y2.pure.binomial-rational.q025",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Binomial expansion (rational powers)",
    "subtopicId": "al.y2.pure.binomial-rational",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "binomial expansion",
      "negative index",
      "factor out a^n",
      "range of validity"
    ],
    "questionText": "Find the first four terms, in ascending powers of $x$, in the expansion of $(4-x)^{-1}$, and state the range of values of $x$ for which the expansion is valid.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factor the constant out of the bracket",
          "workingLatex": "(4-x)^{-1} = 4^{-1}\\left(1 - \\dfrac{x}{4}\\right)^{-1} = \\dfrac{1}{4}\\left(1 - \\dfrac{x}{4}\\right)^{-1}",
          "explanation": "Take the $4$ out of $(4-x)$ so the bracket starts with $1$. With power $-1$, the $4$ leaves as $4^{-1} = \\dfrac{1}{4}$. Notice the inside is $1 - \\dfrac{x}{4}$, so the quantity playing the role of $u$ is $-\\dfrac{x}{4}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down the general binomial series to four terms",
          "workingLatex": "(1+u)^n = 1 + nu + \\dfrac{n(n-1)}{2!}u^2 + \\dfrac{n(n-1)(n-2)}{3!}u^3 + \\cdots",
          "explanation": "We need four terms, so keep the constant together with the terms in $u$, $u^2$ and $u^3$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify the power and the variable part",
          "workingLatex": "n = -1, \\quad u = -\\dfrac{x}{4}",
          "explanation": "Matching $\\left(1+u\\right)^{-1}$ gives $n = -1$, and since the bracket is $1 - \\dfrac{x}{4}$ the value of $u$ is $-\\dfrac{x}{4}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the coefficient of u",
          "workingLatex": "nu = (-1)u = -u",
          "explanation": "The term in $u$ is $n u = -1\\times u = -u$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the coefficient of u squared",
          "workingLatex": "\\dfrac{n(n-1)}{2!}u^2 = \\dfrac{(-1)(-2)}{2}u^2 = u^2",
          "explanation": "Top $(-1)(-2) = 2$, bottom $2! = 2$, giving coefficient $1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the coefficient of u cubed",
          "workingLatex": "\\dfrac{n(n-1)(n-2)}{3!}u^3 = \\dfrac{(-1)(-2)(-3)}{6}u^3 = -u^3",
          "explanation": "Top $(-1)(-2)(-3) = -6$, bottom $3! = 6$, so $-6\\div 6 = -1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the series in terms of u",
          "workingLatex": "(1+u)^{-1} = 1 - u + u^2 - u^3 + \\cdots",
          "explanation": "Collecting the coefficients just found gives the standard expansion of $(1+u)^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute u equals minus x over 4",
          "workingLatex": "= 1 - \\left(-\\dfrac{x}{4}\\right) + \\left(-\\dfrac{x}{4}\\right)^2 - \\left(-\\dfrac{x}{4}\\right)^3",
          "explanation": "Replace $u$ by $-\\dfrac{x}{4}$; watch the signs carefully, because $u$ itself is negative and the powers alternate its sign.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Simplify the bracket",
          "workingLatex": "= 1 + \\dfrac{x}{4} + \\dfrac{x^2}{16} + \\dfrac{x^3}{64}",
          "explanation": "Since $\\left(-\\dfrac{x}{4}\\right)^2 = \\dfrac{x^2}{16}$ and $\\left(-\\dfrac{x}{4}\\right)^3 = -\\dfrac{x^3}{64}$, combining with the leading signs makes every term positive.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Multiply through by the factor one quarter",
          "workingLatex": "\\dfrac{1}{4}\\left(1 + \\dfrac{x}{4} + \\dfrac{x^2}{16} + \\dfrac{x^3}{64}\\right) = \\dfrac{1}{4} + \\dfrac{x}{16} + \\dfrac{x^2}{64} + \\dfrac{x^3}{256}",
          "explanation": "Multiply each term by the $\\dfrac{1}{4}$ taken out at the start to finish the expansion.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the range of validity",
          "workingLatex": "\\left| \\dfrac{x}{4} \\right| < 1 \\;\\Longrightarrow\\; \\left| x \\right| < 4",
          "explanation": "The expansion converges only while $\\left|\\dfrac{x}{4}\\right| < 1$, that is $\\left| x \\right| < 4$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(4-x)^{-1} = \\dfrac{1}{4} + \\dfrac{1}{16}x + \\dfrac{1}{64}x^2 + \\dfrac{1}{256}x^3 + \\cdots$, valid for $\\left| x \\right| < 4$."
    }
  },
  {
    "id": "al.y2.pure.binomial-rational.q026",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Binomial expansion (rational powers)",
    "subtopicId": "al.y2.pure.binomial-rational",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "binomial expansion",
      "negative index",
      "factor out a^n",
      "range of validity"
    ],
    "questionText": "Find the first three terms, in ascending powers of $x$, in the expansion of $(2+3x)^{-2}$, and state the range of values of $x$ for which the expansion is valid.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factor the constant out of the bracket",
          "workingLatex": "(2+3x)^{-2} = 2^{-2}\\left(1 + \\dfrac{3x}{2}\\right)^{-2} = \\dfrac{1}{4}\\left(1 + \\dfrac{3}{2}x\\right)^{-2}",
          "explanation": "Take the $2$ out of $(2+3x)$: dividing $3x$ by $2$ leaves $\\dfrac{3}{2}x$ inside. Because the power is $-2$, the $2$ comes out as $2^{-2} = \\dfrac{1}{4}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down the general binomial series",
          "workingLatex": "(1+u)^n = 1 + nu + \\dfrac{n(n-1)}{2!}u^2 + \\cdots",
          "explanation": "For a negative power the series is infinite; each coefficient continues the pattern $n$, then $n(n-1)$, over the matching factorial. Here $u = \\dfrac{3}{2}x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify the power and the variable part",
          "workingLatex": "n = -2, \\quad u = \\dfrac{3}{2}x",
          "explanation": "Comparing $\\left(1+\\dfrac{3}{2}x\\right)^{-2}$ with $(1+u)^n$ gives $n = -2$ and $u = \\dfrac{3}{2}x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the coefficient of u",
          "workingLatex": "nu = (-2)u = -2u",
          "explanation": "The term in $u$ is $n u = -2u$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the coefficient of u squared",
          "workingLatex": "\\dfrac{n(n-1)}{2!}u^2 = \\dfrac{(-2)(-3)}{2}u^2 = 3u^2",
          "explanation": "Top $(-2)(-3) = 6$, bottom $2! = 2$, so the coefficient of $u^2$ is $3$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the series in terms of u",
          "workingLatex": "(1+u)^{-2} = 1 - 2u + 3u^2 - \\cdots",
          "explanation": "Collecting the coefficients just found gives the expansion of $(1+u)^{-2}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute u equals three over two x",
          "workingLatex": "= 1 - 2\\left(\\dfrac{3}{2}x\\right) + 3\\left(\\dfrac{3}{2}x\\right)^2 = 1 - 3x + \\dfrac{27}{4}x^2",
          "explanation": "Replace $u$ by $\\dfrac{3}{2}x$: $-2\\times\\dfrac{3}{2}x = -3x$, and $3\\times\\left(\\dfrac{3}{2}x\\right)^2 = 3\\times\\dfrac{9}{4}x^2 = \\dfrac{27}{4}x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Multiply through by the factor one quarter",
          "workingLatex": "\\dfrac{1}{4}\\left(1 - 3x + \\dfrac{27}{4}x^2\\right) = \\dfrac{1}{4} - \\dfrac{3}{4}x + \\dfrac{27}{16}x^2",
          "explanation": "Multiply each term by $\\dfrac{1}{4}$: $\\dfrac{1}{4}\\times(-3x) = -\\dfrac{3}{4}x$ and $\\dfrac{1}{4}\\times\\dfrac{27}{4}x^2 = \\dfrac{27}{16}x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Write the first three terms",
          "workingLatex": "(2+3x)^{-2} = \\dfrac{1}{4} - \\dfrac{3}{4}x + \\dfrac{27}{16}x^2 - \\cdots",
          "explanation": "These are the first three terms in ascending powers of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the range of validity",
          "workingLatex": "\\left| \\dfrac{3}{2}x \\right| < 1 \\;\\Longrightarrow\\; \\left| x \\right| < \\dfrac{2}{3}",
          "explanation": "Convergence needs $\\left|\\dfrac{3}{2}x\\right| < 1$; dividing by $\\dfrac{3}{2}$ gives $\\left| x \\right| < \\dfrac{2}{3}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(2+3x)^{-2} = \\dfrac{1}{4} - \\dfrac{3}{4}x + \\dfrac{27}{16}x^2 - \\cdots$, valid for $\\left| x \\right| < \\dfrac{2}{3}$."
    }
  },
  {
    "id": "al.y2.pure.binomial-rational.q027",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Binomial expansion (rational powers)",
    "subtopicId": "al.y2.pure.binomial-rational",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "binomial expansion",
      "fractional index",
      "factor out a^n",
      "range of validity"
    ],
    "questionText": "Find the first three terms, in ascending powers of $x$, in the expansion of $(3+2x)^{\\frac{1}{2}}$, by first writing it as $\\sqrt{3}\\left(1+\\dfrac{2x}{3}\\right)^{\\frac{1}{2}}$, and state the range of values of $x$ for which the expansion is valid.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factor the constant out of the bracket",
          "workingLatex": "(3+2x)^{\\frac{1}{2}} = 3^{\\frac{1}{2}}\\left(1 + \\dfrac{2x}{3}\\right)^{\\frac{1}{2}} = \\sqrt{3}\\left(1 + \\dfrac{2}{3}x\\right)^{\\frac{1}{2}}",
          "explanation": "Take the $3$ out of $(3+2x)$: dividing $2x$ by $3$ leaves $\\dfrac{2}{3}x$ inside. As the power is $\\tfrac{1}{2}$, the $3$ comes out as $3^{\\frac{1}{2}} = \\sqrt{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down the general binomial series",
          "workingLatex": "(1+u)^n = 1 + nu + \\dfrac{n(n-1)}{2!}u^2 + \\cdots",
          "explanation": "The rational-power series continues the pattern $n$, then $n(n-1)$, over the matching factorial. Here $u = \\dfrac{2}{3}x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify the power and the variable part",
          "workingLatex": "n = \\dfrac{1}{2}, \\quad u = \\dfrac{2}{3}x",
          "explanation": "Comparing $\\left(1+\\dfrac{2}{3}x\\right)^{\\frac{1}{2}}$ with $(1+u)^n$ gives $n = \\tfrac{1}{2}$ and $u = \\dfrac{2}{3}x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the coefficient of u",
          "workingLatex": "nu = \\dfrac{1}{2}u",
          "explanation": "The first variable term is $n u = \\tfrac{1}{2}u$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the coefficient of u squared",
          "workingLatex": "\\dfrac{n(n-1)}{2!}u^2 = \\dfrac{\\frac{1}{2}\\left(-\\frac{1}{2}\\right)}{2}u^2 = -\\dfrac{1}{8}u^2",
          "explanation": "Top $\\tfrac{1}{2}\\times\\left(-\\tfrac{1}{2}\\right) = -\\tfrac{1}{4}$, bottom $2! = 2$, so $-\\tfrac{1}{4}\\div 2 = -\\tfrac{1}{8}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the series in terms of u",
          "workingLatex": "(1+u)^{\\frac{1}{2}} = 1 + \\dfrac{1}{2}u - \\dfrac{1}{8}u^2 + \\cdots",
          "explanation": "Collecting the coefficients just found gives the expansion of $(1+u)^{\\frac{1}{2}}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute u equals two over three x",
          "workingLatex": "= 1 + \\dfrac{1}{2}\\left(\\dfrac{2}{3}x\\right) - \\dfrac{1}{8}\\left(\\dfrac{2}{3}x\\right)^2 = 1 + \\dfrac{1}{3}x - \\dfrac{1}{18}x^2",
          "explanation": "$\\tfrac{1}{2}\\times\\dfrac{2}{3}x = \\dfrac{1}{3}x$, and $-\\tfrac{1}{8}\\times\\dfrac{4}{9}x^2 = -\\dfrac{4}{72}x^2 = -\\dfrac{1}{18}x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Multiply through by the factor root three",
          "workingLatex": "\\sqrt{3}\\left(1 + \\dfrac{1}{3}x - \\dfrac{1}{18}x^2\\right) = \\sqrt{3} + \\dfrac{\\sqrt{3}}{3}x - \\dfrac{\\sqrt{3}}{18}x^2",
          "explanation": "Multiply each term by $\\sqrt{3}$ from the front: this gives $\\sqrt{3}$, then $\\dfrac{\\sqrt{3}}{3}x$, then $-\\dfrac{\\sqrt{3}}{18}x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Write the first three terms",
          "workingLatex": "(3+2x)^{\\frac{1}{2}} = \\sqrt{3} + \\dfrac{\\sqrt{3}}{3}x - \\dfrac{\\sqrt{3}}{18}x^2 + \\cdots",
          "explanation": "These are the first three terms in ascending powers of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the range of validity",
          "workingLatex": "\\left| \\dfrac{2}{3}x \\right| < 1 \\;\\Longrightarrow\\; \\left| x \\right| < \\dfrac{3}{2}",
          "explanation": "Convergence requires $\\left|\\dfrac{2}{3}x\\right| < 1$; multiplying by $\\dfrac{3}{2}$ gives $\\left| x \\right| < \\dfrac{3}{2}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(3+2x)^{\\frac{1}{2}} = \\sqrt{3} + \\dfrac{\\sqrt{3}}{3}x - \\dfrac{\\sqrt{3}}{18}x^2 + \\cdots$, valid for $\\left| x \\right| < \\dfrac{3}{2}$."
    }
  },
  {
    "id": "al.y2.pure.binomial-rational.q028",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Binomial expansion (rational powers)",
    "subtopicId": "al.y2.pure.binomial-rational",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "binomial expansion",
      "negative index",
      "coefficient",
      "factor out a^n"
    ],
    "questionText": "Find the coefficient of $x^2$ in the expansion of $\\dfrac{1}{(2+x)^2}$ in ascending powers of $x$, and state the range of values of $x$ for which the expansion is valid.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rewrite the fraction as a power",
          "workingLatex": "\\dfrac{1}{(2+x)^2} = (2+x)^{-2}",
          "explanation": "A reciprocal of a power is the same as a negative power, so $\\dfrac{1}{(2+x)^2} = (2+x)^{-2}$, which the binomial series can expand.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Factor the constant out of the bracket",
          "workingLatex": "(2+x)^{-2} = 2^{-2}\\left(1 + \\dfrac{x}{2}\\right)^{-2} = \\dfrac{1}{4}\\left(1 + \\dfrac{x}{2}\\right)^{-2}",
          "explanation": "Take the $2$ out so the bracket starts with $1$. Since the power is $-2$, the $2$ leaves as $2^{-2} = \\dfrac{1}{4}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write down the general binomial series",
          "workingLatex": "(1+u)^n = 1 + nu + \\dfrac{n(n-1)}{2!}u^2 + \\cdots",
          "explanation": "We only need up to the $u^2$ term because the question asks for the coefficient of $x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify the power and the variable part",
          "workingLatex": "n = -2, \\quad u = \\dfrac{x}{2}",
          "explanation": "Comparing $\\left(1+\\dfrac{x}{2}\\right)^{-2}$ with $(1+u)^n$ gives $n = -2$ and $u = \\dfrac{x}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the coefficient of u squared",
          "workingLatex": "\\dfrac{n(n-1)}{2!}u^2 = \\dfrac{(-2)(-3)}{2}u^2 = 3u^2",
          "explanation": "With $n = -2$: top $(-2)(-3) = 6$, bottom $2! = 2$, so the coefficient of $u^2$ is $3$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute u equals x over 2",
          "workingLatex": "3u^2 = 3\\left(\\dfrac{x}{2}\\right)^2 = 3\\cdot\\dfrac{x^2}{4} = \\dfrac{3}{4}x^2",
          "explanation": "Replace $u$ by $\\dfrac{x}{2}$; squaring gives $\\dfrac{x^2}{4}$, so the $u^2$ term becomes $\\dfrac{3}{4}x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Multiply by the factor one quarter",
          "workingLatex": "\\dfrac{1}{4}\\times\\dfrac{3}{4}x^2 = \\dfrac{3}{16}x^2",
          "explanation": "The factor $\\dfrac{1}{4}$ taken out at the start multiplies this term: $\\dfrac{1}{4}\\times\\dfrac{3}{4} = \\dfrac{3}{16}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the coefficient",
          "workingLatex": "\\text{coefficient of } x^2 = \\dfrac{3}{16}",
          "explanation": "So the number multiplying $x^2$ in the expansion is $\\dfrac{3}{16}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the range of validity",
          "workingLatex": "\\left| \\dfrac{x}{2} \\right| < 1 \\;\\Longrightarrow\\; \\left| x \\right| < 2",
          "explanation": "The expansion is valid only while $\\left|\\dfrac{x}{2}\\right| < 1$, i.e. $\\left| x \\right| < 2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The coefficient of $x^2$ is $\\dfrac{3}{16}$; the expansion is valid for $\\left| x \\right| < 2$."
    }
  },
  {
    "id": "al.y2.pure.binomial-rational.q029",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Binomial expansion (rational powers)",
    "subtopicId": "al.y2.pure.binomial-rational",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "binomial expansion",
      "fourth root",
      "factor out a^n",
      "range of validity"
    ],
    "questionText": "Find the first three terms, in ascending powers of $x$, in the expansion of $(16+x)^{\\frac{1}{4}}$, by first writing it as $2\\left(1+\\dfrac{x}{16}\\right)^{\\frac{1}{4}}$, and state the range of values of $x$ for which the expansion is valid.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factor the constant out of the bracket",
          "workingLatex": "(16+x)^{\\frac{1}{4}} = 16^{\\frac{1}{4}}\\left(1 + \\dfrac{x}{16}\\right)^{\\frac{1}{4}} = 2\\left(1 + \\dfrac{x}{16}\\right)^{\\frac{1}{4}}",
          "explanation": "Factor the $16$ out so the bracket starts with $1$. Because the power is $\\tfrac{1}{4}$, the $16$ leaves as $16^{\\frac{1}{4}} = 2$, the fourth root of $16$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down the general binomial series",
          "workingLatex": "(1+u)^n = 1 + nu + \\dfrac{n(n-1)}{2!}u^2 + \\cdots",
          "explanation": "The rational-power series continues the pattern $n$, then $n(n-1)$, over the matching factorial. Here $u = \\dfrac{x}{16}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify the power and the variable part",
          "workingLatex": "n = \\dfrac{1}{4}, \\quad u = \\dfrac{x}{16}",
          "explanation": "Comparing $\\left(1+\\dfrac{x}{16}\\right)^{\\frac{1}{4}}$ with $(1+u)^n$ gives $n = \\tfrac{1}{4}$ and $u = \\dfrac{x}{16}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the coefficient of u",
          "workingLatex": "nu = \\dfrac{1}{4}u",
          "explanation": "The first variable term is $n u = \\tfrac{1}{4}u$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the coefficient of u squared",
          "workingLatex": "\\dfrac{n(n-1)}{2!}u^2 = \\dfrac{\\frac{1}{4}\\left(-\\frac{3}{4}\\right)}{2}u^2 = -\\dfrac{3}{32}u^2",
          "explanation": "Top $\\tfrac{1}{4}\\times\\left(-\\tfrac{3}{4}\\right) = -\\tfrac{3}{16}$, bottom $2! = 2$, so $-\\tfrac{3}{16}\\div 2 = -\\tfrac{3}{32}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the series in terms of u",
          "workingLatex": "(1+u)^{\\frac{1}{4}} = 1 + \\dfrac{1}{4}u - \\dfrac{3}{32}u^2 + \\cdots",
          "explanation": "Collecting the coefficients just found gives the expansion of $(1+u)^{\\frac{1}{4}}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute u equals x over 16",
          "workingLatex": "= 1 + \\dfrac{1}{4}\\left(\\dfrac{x}{16}\\right) - \\dfrac{3}{32}\\left(\\dfrac{x}{16}\\right)^2 = 1 + \\dfrac{x}{64} - \\dfrac{3x^2}{8192}",
          "explanation": "$\\tfrac{1}{4}\\cdot\\dfrac{x}{16} = \\dfrac{x}{64}$, and $-\\tfrac{3}{32}\\cdot\\dfrac{x^2}{256} = -\\dfrac{3x^2}{8192}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Multiply through by the factor 2",
          "workingLatex": "2\\left(1 + \\dfrac{x}{64} - \\dfrac{3x^2}{8192}\\right) = 2 + \\dfrac{x}{32} - \\dfrac{3x^2}{4096}",
          "explanation": "Multiply each term by $2$: $2\\times\\dfrac{x}{64} = \\dfrac{x}{32}$ and $2\\times\\left(-\\dfrac{3x^2}{8192}\\right) = -\\dfrac{3x^2}{4096}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Write the first three terms",
          "workingLatex": "(16+x)^{\\frac{1}{4}} = 2 + \\dfrac{1}{32}x - \\dfrac{3}{4096}x^2 + \\cdots",
          "explanation": "These are the first three terms in ascending powers of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the range of validity",
          "workingLatex": "\\left| \\dfrac{x}{16} \\right| < 1 \\;\\Longrightarrow\\; \\left| x \\right| < 16",
          "explanation": "The series converges only while $\\left|\\dfrac{x}{16}\\right| < 1$, i.e. $\\left| x \\right| < 16$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(16+x)^{\\frac{1}{4}} = 2 + \\dfrac{1}{32}x - \\dfrac{3}{4096}x^2 + \\cdots$, valid for $\\left| x \\right| < 16$."
    }
  },
  {
    "id": "al.y2.pure.binomial-rational.q030",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Binomial expansion (rational powers)",
    "subtopicId": "al.y2.pure.binomial-rational",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "binomial expansion",
      "negative fractional index",
      "factor out a^n",
      "range of validity"
    ],
    "questionText": "Find the first three terms, in ascending powers of $x$, in the expansion of $\\dfrac{1}{\\sqrt{4+x}}$, by first writing it as $\\dfrac{1}{2}\\left(1+\\dfrac{x}{4}\\right)^{-\\frac{1}{2}}$, and state the range of values of $x$ for which the expansion is valid.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rewrite the expression as a power",
          "workingLatex": "\\dfrac{1}{\\sqrt{4+x}} = (4+x)^{-\\frac{1}{2}}",
          "explanation": "A reciprocal square root is a power of $-\\tfrac{1}{2}$, so $\\dfrac{1}{\\sqrt{4+x}} = (4+x)^{-\\frac{1}{2}}$, which the binomial series can expand.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Factor the constant out of the bracket",
          "workingLatex": "(4+x)^{-\\frac{1}{2}} = 4^{-\\frac{1}{2}}\\left(1 + \\dfrac{x}{4}\\right)^{-\\frac{1}{2}} = \\dfrac{1}{2}\\left(1 + \\dfrac{x}{4}\\right)^{-\\frac{1}{2}}",
          "explanation": "Factor the $4$ out so the bracket starts with $1$. With power $-\\tfrac{1}{2}$, the $4$ leaves as $4^{-\\frac{1}{2}} = \\dfrac{1}{\\sqrt{4}} = \\dfrac{1}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write down the general binomial series",
          "workingLatex": "(1+u)^n = 1 + nu + \\dfrac{n(n-1)}{2!}u^2 + \\cdots",
          "explanation": "For a negative fractional power the series is infinite; each coefficient continues the pattern $n$, then $n(n-1)$, over the matching factorial. Here $u = \\dfrac{x}{4}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify the power and the variable part",
          "workingLatex": "n = -\\dfrac{1}{2}, \\quad u = \\dfrac{x}{4}",
          "explanation": "Comparing $\\left(1+\\dfrac{x}{4}\\right)^{-\\frac{1}{2}}$ with $(1+u)^n$ gives $n = -\\tfrac{1}{2}$ and $u = \\dfrac{x}{4}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the coefficient of u",
          "workingLatex": "nu = -\\dfrac{1}{2}u",
          "explanation": "The first variable term is $n u = -\\tfrac{1}{2}u$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the coefficient of u squared",
          "workingLatex": "\\dfrac{n(n-1)}{2!}u^2 = \\dfrac{\\left(-\\frac{1}{2}\\right)\\left(-\\frac{3}{2}\\right)}{2}u^2 = \\dfrac{3}{8}u^2",
          "explanation": "Top $\\left(-\\tfrac{1}{2}\\right)\\times\\left(-\\tfrac{3}{2}\\right) = \\tfrac{3}{4}$, bottom $2! = 2$, so $\\tfrac{3}{4}\\div 2 = \\tfrac{3}{8}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the series in terms of u",
          "workingLatex": "(1+u)^{-\\frac{1}{2}} = 1 - \\dfrac{1}{2}u + \\dfrac{3}{8}u^2 - \\cdots",
          "explanation": "Collecting the coefficients just found gives the expansion of $(1+u)^{-\\frac{1}{2}}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute u equals x over 4",
          "workingLatex": "= 1 - \\dfrac{1}{2}\\left(\\dfrac{x}{4}\\right) + \\dfrac{3}{8}\\left(\\dfrac{x}{4}\\right)^2 = 1 - \\dfrac{x}{8} + \\dfrac{3x^2}{128}",
          "explanation": "$-\\tfrac{1}{2}\\cdot\\dfrac{x}{4} = -\\dfrac{x}{8}$, and $\\tfrac{3}{8}\\cdot\\dfrac{x^2}{16} = \\dfrac{3x^2}{128}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Multiply through by the factor one half",
          "workingLatex": "\\dfrac{1}{2}\\left(1 - \\dfrac{x}{8} + \\dfrac{3x^2}{128}\\right) = \\dfrac{1}{2} - \\dfrac{x}{16} + \\dfrac{3x^2}{256}",
          "explanation": "Multiply each term by the $\\dfrac{1}{2}$ taken out at the start: $\\dfrac{1}{2}\\times\\left(-\\dfrac{x}{8}\\right) = -\\dfrac{x}{16}$ and $\\dfrac{1}{2}\\times\\dfrac{3x^2}{128} = \\dfrac{3x^2}{256}$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the range of validity",
          "workingLatex": "\\left| \\dfrac{x}{4} \\right| < 1 \\;\\Longrightarrow\\; \\left| x \\right| < 4",
          "explanation": "The expansion converges only while $\\left|\\dfrac{x}{4}\\right| < 1$, that is $\\left| x \\right| < 4$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{1}{\\sqrt{4+x}} = \\dfrac{1}{2} - \\dfrac{1}{16}x + \\dfrac{3}{256}x^2 - \\cdots$, valid for $\\left| x \\right| < 4$."
    }
  },
  {
    "id": "al.y2.pure.binomial-rational.q031",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Binomial expansion (rational powers)",
    "subtopicId": "al.y2.pure.binomial-rational",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "binomial expansion",
      "approximation",
      "square root",
      "fractional index"
    ],
    "questionText": "Use the binomial expansion of $(1+x)^{\\frac{1}{2}}$, up to and including the term in $x^2$, with $x=0.02$ to estimate $\\sqrt{1.02}$. Give your answer to 4 decimal places.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Match the surd to a binomial",
          "workingLatex": "\\sqrt{1.02} = (1+0.02)^{\\frac{1}{2}} = (1+x)^{\\frac{1}{2}}, \\quad x = 0.02",
          "explanation": "The number under the root is just a little more than $1$, so writing it as $1+0.02$ lets us treat the square root as $(1+x)^{\\frac{1}{2}}$ with a small $x$. A small $x$ is exactly what makes the binomial series a good approximation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the general series and identify n",
          "workingLatex": "(1+x)^n = 1 + nx + \\dfrac{n(n-1)}{2!}x^2 + \\cdots, \\quad n = \\dfrac{1}{2}",
          "explanation": "For a fractional power the binomial theorem becomes an infinite series. Comparing $(1+x)^{\\frac{1}{2}}$ with $(1+x)^n$ tells us to substitute $n=\\dfrac{1}{2}$ everywhere.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the coefficient of x",
          "workingLatex": "nx = \\dfrac{1}{2}x",
          "explanation": "The first variable term is simply $n$ times $x$, so with $n=\\dfrac{1}{2}$ the term is $\\dfrac{1}{2}x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the coefficient of x squared",
          "workingLatex": "\\dfrac{n(n-1)}{2!}x^2 = \\dfrac{\\frac{1}{2}\\left(-\\frac{1}{2}\\right)}{2}x^2 = -\\dfrac{1}{8}x^2",
          "explanation": "On top, $\\dfrac{1}{2}\\times\\left(-\\dfrac{1}{2}\\right) = -\\dfrac{1}{4}$, and dividing by $2! = 2$ gives $-\\dfrac{1}{8}$, so the coefficient of $x^2$ is $-\\dfrac{1}{8}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the expansion up to the x squared term",
          "workingLatex": "(1+x)^{\\frac{1}{2}} \\approx 1 + \\dfrac{1}{2}x - \\dfrac{1}{8}x^2",
          "explanation": "Collecting the constant and the two terms just found gives the quadratic approximation we will use. Three terms are plenty here because $x$ is very small.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute x = 0.02",
          "workingLatex": "\\approx 1 + \\dfrac{1}{2}(0.02) - \\dfrac{1}{8}(0.02)^2 = 1 + 0.01 - 0.00005",
          "explanation": "The linear term contributes $0.01$, while the $x^2$ term contributes only $-0.00005$ because squaring a small number makes it much smaller. This is why later terms barely matter.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Add the terms",
          "workingLatex": "= 1.00995",
          "explanation": "Adding the three contributions gives the raw estimate $1.00995$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Round to 4 decimal places",
          "workingLatex": "\\sqrt{1.02} \\approx 1.0100",
          "explanation": "The fifth decimal digit is $5$, so we round the fourth decimal up: $1.00995$ becomes $1.0100$. This matches the true value $1.0099505\\ldots$ to 4 decimal places.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sqrt{1.02} \\approx 1.00995$, which is $1.0100$ to 4 decimal places."
    }
  },
  {
    "id": "al.y2.pure.binomial-rational.q032",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Binomial expansion (rational powers)",
    "subtopicId": "al.y2.pure.binomial-rational",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "binomial expansion",
      "approximation",
      "negative index",
      "reciprocal"
    ],
    "questionText": "Use the binomial expansion of $(1-x)^{-1}$ with $x=0.02$ to estimate $\\dfrac{1}{0.98}$. Give your answer to 4 decimal places.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rewrite the reciprocal as a binomial",
          "workingLatex": "\\dfrac{1}{0.98} = (0.98)^{-1} = (1-x)^{-1}, \\quad x = 0.02",
          "explanation": "Dividing by $0.98$ is the same as raising it to the power $-1$. Since $0.98 = 1-0.02$, the expression has the form $(1-x)^{-1}$ with the small value $x=0.02$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply the general series with n = -1",
          "workingLatex": "(1+u)^{-1} = 1 + (-1)u + \\dfrac{(-1)(-2)}{2!}u^2 + \\cdots",
          "explanation": "We use the binomial series with $n=-1$. Because our bracket is $1-x$, we are really substituting $u=-x$ into the standard $(1+u)^n$ form.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify the coefficients for (1 - x)",
          "workingLatex": "(1-x)^{-1} = 1 + x + x^2 + x^3 + \\cdots",
          "explanation": "Each minus sign in the coefficients cancels with the minus in $u=-x$: for instance the $x^2$ coefficient is $\\dfrac{(-1)(-2)}{2}=1$ acting on $(-x)^2=x^2$. So every term comes out positive.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the range of validity",
          "workingLatex": "\\left| x \\right| < 1, \\quad x = 0.02 \\ \\checkmark",
          "explanation": "The series only converges when $\\left| x \\right| < 1$. Here $x=0.02$ is comfortably inside that range, so the expansion is safe to use.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute x = 0.02",
          "workingLatex": "\\dfrac{1}{0.98} \\approx 1 + 0.02 + (0.02)^2 + (0.02)^3 = 1 + 0.02 + 0.0004 + 0.000008",
          "explanation": "Each successive term is $0.02$ times the previous one, so they shrink quickly. Four terms are more than enough for 4 decimal places.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Add the terms",
          "workingLatex": "= 1.020408",
          "explanation": "Summing the contributions gives $1.020408$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Round to 4 decimal places",
          "workingLatex": "\\dfrac{1}{0.98} \\approx 1.0204",
          "explanation": "Rounding $1.020408$ to four decimal places gives $1.0204$, which agrees with the exact value $1.020408\\ldots$",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{1}{0.98} \\approx 1.0204$ (to 4 decimal places)."
    }
  },
  {
    "id": "al.y2.pure.binomial-rational.q033",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Binomial expansion (rational powers)",
    "subtopicId": "al.y2.pure.binomial-rational",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "binomial expansion",
      "approximation",
      "negative fractional index",
      "reciprocal root"
    ],
    "questionText": "Use the binomial expansion of $(1+x)^{-\\frac{1}{2}}$, up to and including the term in $x^2$, to estimate $\\dfrac{1}{\\sqrt{1.04}}$. Give your answer to 4 decimal places.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rewrite the expression as a binomial",
          "workingLatex": "\\dfrac{1}{\\sqrt{1.04}} = (1.04)^{-\\frac{1}{2}} = (1+x)^{-\\frac{1}{2}}, \\quad x = 0.04",
          "explanation": "A reciprocal square root is a power of $-\\dfrac{1}{2}$. Since $1.04 = 1+0.04$, the expression is $(1+x)^{-\\frac{1}{2}}$ with the small value $x=0.04$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify n in the general series",
          "workingLatex": "(1+x)^n = 1 + nx + \\dfrac{n(n-1)}{2!}x^2 + \\cdots, \\quad n = -\\dfrac{1}{2}",
          "explanation": "Comparing with $(1+x)^n$ shows we substitute $n=-\\dfrac{1}{2}$ into every coefficient.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the coefficient of x",
          "workingLatex": "nx = -\\dfrac{1}{2}x",
          "explanation": "The term in $x$ is $n$ times $x$, giving $-\\dfrac{1}{2}x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the coefficient of x squared",
          "workingLatex": "\\dfrac{n(n-1)}{2!}x^2 = \\dfrac{\\left(-\\frac{1}{2}\\right)\\left(-\\frac{3}{2}\\right)}{2}x^2 = \\dfrac{3}{8}x^2",
          "explanation": "The numerator is $\\left(-\\dfrac{1}{2}\\right)\\left(-\\dfrac{3}{2}\\right) = \\dfrac{3}{4}$, and dividing by $2! = 2$ gives $\\dfrac{3}{8}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the quadratic approximation",
          "workingLatex": "(1+x)^{-\\frac{1}{2}} \\approx 1 - \\dfrac{1}{2}x + \\dfrac{3}{8}x^2",
          "explanation": "These first three terms are the approximation we will substitute into. Because $x$ is small, they capture the value very accurately.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute x = 0.04",
          "workingLatex": "\\approx 1 - \\dfrac{1}{2}(0.04) + \\dfrac{3}{8}(0.04)^2 = 1 - 0.02 + 0.0006",
          "explanation": "The linear term gives $-0.02$; the $x^2$ term gives $\\dfrac{3}{8}\\times 0.0016 = 0.0006$, a small positive correction.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Add and round",
          "workingLatex": "= 0.9806",
          "explanation": "Adding gives $0.9806$, which matches the true value $0.980581\\ldots$ to 4 decimal places.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{1}{\\sqrt{1.04}} \\approx 0.9806$ (to 4 decimal places)."
    }
  },
  {
    "id": "al.y2.pure.binomial-rational.q034",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Binomial expansion (rational powers)",
    "subtopicId": "al.y2.pure.binomial-rational",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "binomial expansion",
      "approximation",
      "cube root",
      "fractional index"
    ],
    "questionText": "Use the binomial expansion of $(1+x)^{\\frac{1}{3}}$, up to and including the term in $x^2$, to estimate $\\sqrt[3]{1.03}$. Give your answer to 4 decimal places.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rewrite the cube root as a binomial",
          "workingLatex": "\\sqrt[3]{1.03} = (1.03)^{\\frac{1}{3}} = (1+x)^{\\frac{1}{3}}, \\quad x = 0.03",
          "explanation": "A cube root is a power of $\\dfrac{1}{3}$. Writing $1.03$ as $1+0.03$ turns the problem into $(1+x)^{\\frac{1}{3}}$ with the small value $x=0.03$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify n in the general series",
          "workingLatex": "(1+x)^n = 1 + nx + \\dfrac{n(n-1)}{2!}x^2 + \\cdots, \\quad n = \\dfrac{1}{3}",
          "explanation": "We substitute $n=\\dfrac{1}{3}$ into the standard rational-power series.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the coefficient of x",
          "workingLatex": "nx = \\dfrac{1}{3}x",
          "explanation": "The term in $x$ is $n$ times $x$, which is $\\dfrac{1}{3}x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the coefficient of x squared",
          "workingLatex": "\\dfrac{n(n-1)}{2!}x^2 = \\dfrac{\\frac{1}{3}\\left(-\\frac{2}{3}\\right)}{2}x^2 = -\\dfrac{1}{9}x^2",
          "explanation": "The numerator is $\\dfrac{1}{3}\\times\\left(-\\dfrac{2}{3}\\right) = -\\dfrac{2}{9}$, and dividing by $2! = 2$ gives $-\\dfrac{1}{9}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the quadratic approximation",
          "workingLatex": "(1+x)^{\\frac{1}{3}} \\approx 1 + \\dfrac{1}{3}x - \\dfrac{1}{9}x^2",
          "explanation": "These three terms give an accurate approximation for small $x$; the next term would involve $x^3$ and be negligible here.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute x = 0.03",
          "workingLatex": "\\approx 1 + \\dfrac{1}{3}(0.03) - \\dfrac{1}{9}(0.03)^2 = 1 + 0.01 - 0.0001",
          "explanation": "The linear term gives $\\dfrac{0.03}{3}=0.01$; the $x^2$ term gives $\\dfrac{0.0009}{9}=0.0001$, a tiny correction.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Add and round",
          "workingLatex": "= 1.0099",
          "explanation": "Adding gives $1.0099$, which agrees with the true value $1.009902\\ldots$ to 4 decimal places.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sqrt[3]{1.03} \\approx 1.0099$ (to 4 decimal places)."
    }
  },
  {
    "id": "al.y2.pure.binomial-rational.q035",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Binomial expansion (rational powers)",
    "subtopicId": "al.y2.pure.binomial-rational",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "binomial expansion",
      "approximation",
      "percentage error",
      "square root"
    ],
    "questionText": "Expand $(1+x)^{\\frac{1}{2}}$ in ascending powers of $x$, up to and including the term in $x^3$. Hence, by substituting $x=0.08$, estimate $\\sqrt{1.08}$, and find the percentage error compared with the true value $\\sqrt{1.08}=1.03923048$ (to 8 decimal places).",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the general series with n = 1/2",
          "workingLatex": "(1+x)^n = 1 + nx + \\dfrac{n(n-1)}{2!}x^2 + \\dfrac{n(n-1)(n-2)}{3!}x^3 + \\cdots, \\quad n = \\dfrac{1}{2}",
          "explanation": "Because $\\sqrt{1+x} = (1+x)^{\\frac{1}{2}}$, we use the rational-power series with $n=\\dfrac{1}{2}$ and keep terms up to $x^3$ as requested.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Coefficient of x",
          "workingLatex": "nx = \\dfrac{1}{2}x",
          "explanation": "The first variable term is $n$ times $x$, giving $\\dfrac{1}{2}x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Coefficient of x squared",
          "workingLatex": "\\dfrac{n(n-1)}{2!}x^2 = \\dfrac{\\frac{1}{2}\\left(-\\frac{1}{2}\\right)}{2}x^2 = -\\dfrac{1}{8}x^2",
          "explanation": "The numerator $\\dfrac{1}{2}\\times\\left(-\\dfrac{1}{2}\\right)=-\\dfrac{1}{4}$ divided by $2!=2$ gives $-\\dfrac{1}{8}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Coefficient of x cubed",
          "workingLatex": "\\dfrac{n(n-1)(n-2)}{3!}x^3 = \\dfrac{\\frac{1}{2}\\left(-\\frac{1}{2}\\right)\\left(-\\frac{3}{2}\\right)}{6}x^3 = \\dfrac{1}{16}x^3",
          "explanation": "The numerator is $\\dfrac{1}{2}\\times\\left(-\\dfrac{1}{2}\\right)\\times\\left(-\\dfrac{3}{2}\\right)=\\dfrac{3}{8}$, and dividing by $3!=6$ gives $\\dfrac{3}{48}=\\dfrac{1}{16}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Assemble the expansion",
          "workingLatex": "(1+x)^{\\frac{1}{2}} \\approx 1 + \\dfrac{1}{2}x - \\dfrac{1}{8}x^2 + \\dfrac{1}{16}x^3",
          "explanation": "Collecting the four terms gives the cubic approximation, valid for $\\left| x \\right| < 1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute x = 0.08",
          "workingLatex": "\\sqrt{1.08} \\approx 1 + \\dfrac{1}{2}(0.08) - \\dfrac{1}{8}(0.08)^2 + \\dfrac{1}{16}(0.08)^3",
          "explanation": "Since $1.08 = 1+0.08$, substituting $x=0.08$ into the series estimates $\\sqrt{1.08}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate each term",
          "workingLatex": "= 1 + 0.04 - 0.0008 + 0.000032",
          "explanation": "Term by term: $\\dfrac{1}{2}(0.08)=0.04$; $\\dfrac{1}{8}(0.0064)=0.0008$; $\\dfrac{1}{16}(0.000512)=0.000032$. Each is much smaller than the last, showing the series settling down.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Add to get the estimate",
          "workingLatex": "\\sqrt{1.08} \\approx 1.039232",
          "explanation": "Summing the four contributions gives the approximation $1.039232$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the size of the error",
          "workingLatex": "\\left| \\text{approx} - \\text{true} \\right| = \\left| 1.039232 - 1.03923048 \\right| = 0.00000152",
          "explanation": "The approximation is only about $0.0000015$ away from the true value — remarkably close for just four terms, because $x=0.08$ is small.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Apply the percentage error formula",
          "workingLatex": "\\text{percentage error} = \\dfrac{\\left| \\text{approx} - \\text{true} \\right|}{\\text{true}} \\times 100\\% = \\dfrac{0.00000152}{1.03923048} \\times 100\\%",
          "explanation": "Percentage error compares the size of the error with the true value, so we divide the error by the true value and multiply by $100$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Evaluate the percentage error",
          "workingLatex": "\\approx 0.000146\\%",
          "explanation": "Carrying out the division gives about $0.000146\\%$, confirming the cubic approximation is extremely accurate here.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State the results",
          "workingLatex": "\\sqrt{1.08} \\approx 1.039232, \\quad \\text{percentage error} \\approx 0.000146\\%",
          "explanation": "We report both the estimate and how far it is from the true value in percentage terms.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sqrt{1.08} \\approx 1.039232$, with a percentage error of approximately $0.000146\\%$."
    }
  },
  {
    "id": "al.y2.pure.binomial-rational.q036",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Binomial expansion (rational powers)",
    "subtopicId": "al.y2.pure.binomial-rational",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "binomial expansion",
      "approximation",
      "factor out a^n",
      "square root"
    ],
    "questionText": "By first writing $(4+x)^{\\frac{1}{2}} = 2\\left(1+\\dfrac{x}{4}\\right)^{\\frac{1}{2}}$ and expanding up to and including the term in $x^2$, estimate $\\sqrt{4.08}$ by choosing a suitable value of $x$. Give your answer to 4 decimal places.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose x to target 4.08",
          "workingLatex": "\\sqrt{4.08} = (4+x)^{\\frac{1}{2}} \\ \\text{with} \\ x = 0.08",
          "explanation": "We want $4+x = 4.08$, so we take $x=0.08$. Keeping $x$ small keeps the expansion accurate.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Factor out the constant term",
          "workingLatex": "(4+x)^{\\frac{1}{2}} = 4^{\\frac{1}{2}}\\left(1+\\dfrac{x}{4}\\right)^{\\frac{1}{2}} = 2\\left(1+\\dfrac{x}{4}\\right)^{\\frac{1}{2}}",
          "explanation": "The binomial series only works on a bracket that starts with $1$. Taking out $4^{\\frac{1}{2}}=2$ turns the bracket into $1+\\dfrac{x}{4}$, which is now in the right form.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand the standard bracket",
          "workingLatex": "\\left(1+u\\right)^{\\frac{1}{2}} \\approx 1 + \\dfrac{1}{2}u - \\dfrac{1}{8}u^2, \\quad u = \\dfrac{x}{4}",
          "explanation": "Using $n=\\dfrac{1}{2}$, the coefficients are $\\dfrac{1}{2}$ and $-\\dfrac{1}{8}$. We will replace $u$ by $\\dfrac{x}{4}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute u = x/4",
          "workingLatex": "\\left(1+\\dfrac{x}{4}\\right)^{\\frac{1}{2}} \\approx 1 + \\dfrac{1}{2}\\cdot\\dfrac{x}{4} - \\dfrac{1}{8}\\cdot\\dfrac{x^2}{16} = 1 + \\dfrac{x}{8} - \\dfrac{x^2}{128}",
          "explanation": "Substituting and simplifying: $\\dfrac{1}{2}\\cdot\\dfrac{1}{4}=\\dfrac{1}{8}$ for the $x$ term, and $\\dfrac{1}{8}\\cdot\\dfrac{1}{16}=\\dfrac{1}{128}$ for the $x^2$ term.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Multiply through by 2",
          "workingLatex": "(4+x)^{\\frac{1}{2}} \\approx 2 + \\dfrac{x}{4} - \\dfrac{x^2}{64}",
          "explanation": "Multiplying the bracket expansion by the $2$ we factored out gives the expansion of $(4+x)^{\\frac{1}{2}}$ directly.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Note the range of validity",
          "workingLatex": "\\left| \\dfrac{x}{4} \\right| < 1 \\ \\Rightarrow \\ \\left| x \\right| < 4, \\quad x = 0.08 \\ \\checkmark",
          "explanation": "The expansion is valid when the quantity inside the bracket stays small, i.e. $\\left| x \\right| < 4$. Our $x=0.08$ is well within range.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute x = 0.08",
          "workingLatex": "\\sqrt{4.08} \\approx 2 + \\dfrac{0.08}{4} - \\dfrac{(0.08)^2}{64} = 2 + 0.02 - 0.0001",
          "explanation": "The linear term gives $0.02$; the $x^2$ term gives $\\dfrac{0.0064}{64}=0.0001$, a tiny correction.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Add the terms",
          "workingLatex": "= 2.0199",
          "explanation": "Summing gives $2.0199$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the estimate",
          "workingLatex": "\\sqrt{4.08} \\approx 2.0199",
          "explanation": "This matches the true value $2.019901\\ldots$ to 4 decimal places, confirming the method.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sqrt{4.08} \\approx 2.0199$ (to 4 decimal places)."
    }
  },
  {
    "id": "al.y2.pure.binomial-rational.q037",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Binomial expansion (rational powers)",
    "subtopicId": "al.y2.pure.binomial-rational",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "binomial expansion",
      "approximation",
      "rewriting a surd",
      "square root"
    ],
    "questionText": "By writing $\\sqrt{98} = 10\\sqrt{0.98} = 10(1-0.02)^{\\frac{1}{2}}$ and using the binomial expansion up to and including the term in $x^3$, estimate $\\sqrt{98}$. Give your answer to 4 decimal places.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rewrite the surd near 1",
          "workingLatex": "\\sqrt{98} = \\sqrt{100 \\times 0.98} = 10\\sqrt{0.98}",
          "explanation": "The binomial series needs a bracket close to $1$. Pulling out $\\sqrt{100}=10$ leaves $\\sqrt{0.98}$, where the number is now just below $1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write 0.98 as a binomial",
          "workingLatex": "\\sqrt{0.98} = (1-0.02)^{\\frac{1}{2}} = (1+X)^{\\frac{1}{2}}, \\quad X = -0.02",
          "explanation": "Writing $0.98 = 1+(-0.02)$ puts it in the form $(1+X)^{\\frac{1}{2}}$ with $X=-0.02$, a small negative value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the coefficients for n = 1/2",
          "workingLatex": "(1+X)^{\\frac{1}{2}} \\approx 1 + \\dfrac{1}{2}X - \\dfrac{1}{8}X^2 + \\dfrac{1}{16}X^3",
          "explanation": "With $n=\\dfrac{1}{2}$ the coefficients are $\\dfrac{1}{2}$, $-\\dfrac{1}{8}$ and $\\dfrac{1}{16}$; these come from $\\dfrac{\\frac{1}{2}\\left(-\\frac{1}{2}\\right)}{2}$ and $\\dfrac{\\frac{1}{2}\\left(-\\frac{1}{2}\\right)\\left(-\\frac{3}{2}\\right)}{6}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check validity",
          "workingLatex": "\\left| X \\right| = 0.02 < 1 \\ \\checkmark",
          "explanation": "Since $\\left| X \\right| < 1$, the expansion converges, so it is valid to use here.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute X = -0.02",
          "workingLatex": "\\approx 1 + \\dfrac{1}{2}(-0.02) - \\dfrac{1}{8}(-0.02)^2 + \\dfrac{1}{16}(-0.02)^3",
          "explanation": "Care with signs: $X$ is negative, so the linear term becomes $-0.01$ and the cube term is also negative.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate each term",
          "workingLatex": "= 1 - 0.01 - 0.00005 - 0.0000005",
          "explanation": "Term by term: $\\dfrac{1}{2}(-0.02)=-0.01$; $-\\dfrac{1}{8}(0.0004)=-0.00005$; $\\dfrac{1}{16}(-0.000008)=-0.0000005$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Add inside the bracket",
          "workingLatex": "\\sqrt{0.98} \\approx 0.9899495",
          "explanation": "Summing the four contributions gives the estimate of $\\sqrt{0.98}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Multiply by 10",
          "workingLatex": "\\sqrt{98} = 10\\sqrt{0.98} \\approx 10 \\times 0.9899495 = 9.899495",
          "explanation": "Restoring the factor of $10$ we took out at the start converts the estimate of $\\sqrt{0.98}$ into $\\sqrt{98}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Round to 4 decimal places",
          "workingLatex": "\\sqrt{98} \\approx 9.8995",
          "explanation": "Rounding $9.899495$ gives $9.8995$, which agrees with the true value $9.8994949\\ldots$ to 4 decimal places.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sqrt{98} \\approx 9.8995$ (to 4 decimal places)."
    }
  },
  {
    "id": "al.y2.pure.binomial-rational.q038",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Binomial expansion (rational powers)",
    "subtopicId": "al.y2.pure.binomial-rational",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "binomial expansion",
      "approximation",
      "negative index",
      "error"
    ],
    "questionText": "Use the binomial expansion of $(1+x)^{-3}$ up to and including the term in $x^2$, with $x=0.02$, to estimate $\\dfrac{1}{(1.02)^3}$. Given that the true value is $0.9423223$ (to 7 decimal places), find the error in your approximation, giving your answer to 1 significant figure.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rewrite the expression as a binomial",
          "workingLatex": "\\dfrac{1}{(1.02)^3} = (1.02)^{-3} = (1+x)^{-3}, \\quad x = 0.02",
          "explanation": "A reciprocal cube is a power of $-3$. Since $1.02 = 1+0.02$, the expression is $(1+x)^{-3}$ with the small value $x=0.02$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the general series with n = -3",
          "workingLatex": "(1+x)^n = 1 + nx + \\dfrac{n(n-1)}{2!}x^2 + \\cdots, \\quad n = -3",
          "explanation": "We substitute $n=-3$ into the rational-power series and keep terms up to $x^2$ as asked.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Coefficient of x",
          "workingLatex": "nx = -3x",
          "explanation": "The term in $x$ is $n$ times $x$, giving $-3x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Coefficient of x squared",
          "workingLatex": "\\dfrac{n(n-1)}{2!}x^2 = \\dfrac{(-3)(-4)}{2}x^2 = 6x^2",
          "explanation": "The numerator $(-3)(-4)=12$ divided by $2!=2$ gives $6$, so the coefficient of $x^2$ is $6$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the quadratic approximation",
          "workingLatex": "(1+x)^{-3} \\approx 1 - 3x + 6x^2",
          "explanation": "These three terms form the approximation. It is valid for $\\left| x \\right| < 1$, and $x=0.02$ is well inside that range.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute x = 0.02",
          "workingLatex": "\\approx 1 - 3(0.02) + 6(0.02)^2 = 1 - 0.06 + 0.0024",
          "explanation": "The linear term gives $-0.06$; the $x^2$ term gives $6\\times 0.0004 = 0.0024$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Add to get the estimate",
          "workingLatex": "\\dfrac{1}{(1.02)^3} \\approx 0.9424",
          "explanation": "Summing gives the approximation $0.9424$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compute the error",
          "workingLatex": "\\text{error} = \\left| 0.9424 - 0.9423223 \\right| = 0.0000777",
          "explanation": "The error is the gap between our estimate and the true value. Here it is about $0.0000777$, a positive difference because dropping the $x^3$ term left the estimate slightly high.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Round to 1 significant figure",
          "workingLatex": "\\text{error} \\approx 0.00008",
          "explanation": "To 1 significant figure the error is $0.00008$, confirming the two-decimal-place estimate is very accurate for this small $x$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{1}{(1.02)^3} \\approx 0.9424$, with an error of approximately $0.00008$ (to 1 significant figure)."
    }
  },
  {
    "id": "al.y2.pure.binomial-rational.q039",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Binomial expansion (rational powers)",
    "subtopicId": "al.y2.pure.binomial-rational",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "binomial expansion",
      "approximation",
      "accuracy",
      "range of validity"
    ],
    "questionText": "(a) Expand $(1+x)^{\\frac{1}{2}}$ up to and including the term in $x^2$, and use it to estimate $\\sqrt{1.1}$. (b) The linear (two-term) approximation is $1+\\dfrac{1}{2}x$. Find the set of values of $x$ for which the magnitude of the $x^2$ term is less than $0.005$, so that the linear approximation is accurate to within $0.005$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the general series with n = 1/2",
          "workingLatex": "(1+x)^n = 1 + nx + \\dfrac{n(n-1)}{2!}x^2 + \\cdots, \\quad n = \\dfrac{1}{2}",
          "explanation": "Since $\\sqrt{1+x} = (1+x)^{\\frac{1}{2}}$, we use the rational-power series with $n=\\dfrac{1}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Coefficient of x",
          "workingLatex": "nx = \\dfrac{1}{2}x",
          "explanation": "The term in $x$ is $n$ times $x$, giving $\\dfrac{1}{2}x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Coefficient of x squared",
          "workingLatex": "\\dfrac{n(n-1)}{2!}x^2 = \\dfrac{\\frac{1}{2}\\left(-\\frac{1}{2}\\right)}{2}x^2 = -\\dfrac{1}{8}x^2",
          "explanation": "The numerator $\\dfrac{1}{2}\\times\\left(-\\dfrac{1}{2}\\right)=-\\dfrac{1}{4}$ divided by $2!=2$ gives $-\\dfrac{1}{8}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the quadratic approximation",
          "workingLatex": "(1+x)^{\\frac{1}{2}} \\approx 1 + \\dfrac{1}{2}x - \\dfrac{1}{8}x^2",
          "explanation": "These three terms give the approximation for part (a); it is valid for $\\left| x \\right| < 1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set up the estimate of root 1.1",
          "workingLatex": "\\sqrt{1.1} = (1+0.1)^{\\frac{1}{2}}, \\quad x = 0.1",
          "explanation": "Writing $1.1 = 1+0.1$ lets us substitute $x=0.1$ into the expansion.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute x = 0.1",
          "workingLatex": "\\approx 1 + \\dfrac{1}{2}(0.1) - \\dfrac{1}{8}(0.1)^2 = 1 + 0.05 - 0.00125",
          "explanation": "The linear term gives $0.05$; the $x^2$ term gives $\\dfrac{1}{8}(0.01)=0.00125$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Add to get the estimate",
          "workingLatex": "\\sqrt{1.1} \\approx 1.04875",
          "explanation": "Summing gives $1.04875$. The true value is $1.0488088\\ldots$, so the estimate is correct to 4 decimal places ($1.0488$).",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Identify the neglected term",
          "workingLatex": "\\text{linear approx: } 1 + \\dfrac{1}{2}x \\quad\\Rightarrow\\quad \\text{neglected term} = -\\dfrac{1}{8}x^2",
          "explanation": "Dropping to the two-term (linear) approximation throws away the $x^2$ term. The accuracy of the linear model is therefore governed by the size of that term.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Set up the tolerance inequality",
          "workingLatex": "\\left| -\\dfrac{1}{8}x^2 \\right| < 0.005",
          "explanation": "To be accurate to within $0.005$, the piece we ignored must itself be smaller than $0.005$ in size.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Simplify the modulus",
          "workingLatex": "\\dfrac{1}{8}x^2 < 0.005",
          "explanation": "Because $x^2 \\ge 0$, the term $\\dfrac{1}{8}x^2$ is never negative, so the modulus just removes the sign.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Solve for x squared",
          "workingLatex": "x^2 < 0.005 \\times 8 = 0.04",
          "explanation": "Multiplying both sides by $8$ isolates $x^2$ and gives the threshold $0.04$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Take square roots",
          "workingLatex": "\\left| x \\right| < \\sqrt{0.04} = 0.2",
          "explanation": "Taking the positive square root of both sides turns $x^2 < 0.04$ into $\\left| x \\right| < 0.2$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Combine with the validity condition",
          "workingLatex": "\\left| x \\right| < 0.2 \\quad (\\text{which lies inside } \\left| x \\right| < 1)",
          "explanation": "The expansion needs $\\left| x \\right| < 1$, but the stricter tolerance condition $\\left| x \\right| < 0.2$ is the binding one, so it is the final answer.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the results",
          "workingLatex": "\\sqrt{1.1} \\approx 1.04875; \\qquad -0.2 < x < 0.2",
          "explanation": "The estimate is $1.04875$, and the linear approximation is accurate to within $0.005$ precisely when $\\left| x \\right| < 0.2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sqrt{1.1} \\approx 1.04875$ (i.e. $1.0488$ to 4 d.p.); the linear approximation $1+\\dfrac{1}{2}x$ is within $0.005$ for $\\left| x \\right| < 0.2$."
    }
  },
  {
    "id": "al.y2.pure.binomial-rational.q040",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Binomial expansion (rational powers)",
    "subtopicId": "al.y2.pure.binomial-rational",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "binomial expansion",
      "approximation",
      "rewriting a surd",
      "error"
    ],
    "questionText": "By writing $\\sqrt{50} = 7\\sqrt{1+\\dfrac{1}{49}} = 7\\left(1+\\dfrac{1}{49}\\right)^{\\frac{1}{2}}$ and expanding up to and including the term in $x^3$, estimate $\\sqrt{50}$. Given that $\\sqrt{50} = 7.0710678119$ (to 10 decimal places), comment on the size of the error.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rewrite 50 near a perfect square",
          "workingLatex": "50 = 49 \\times \\dfrac{50}{49} = 49\\left(1+\\dfrac{1}{49}\\right)",
          "explanation": "The nearest perfect square below $50$ is $49$. Pulling it out leaves a bracket $1+\\dfrac{1}{49}$ that is very close to $1$ — ideal for the binomial series.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Take the square root",
          "workingLatex": "\\sqrt{50} = 7\\left(1+\\dfrac{1}{49}\\right)^{\\frac{1}{2}} = 7(1+x)^{\\frac{1}{2}}, \\quad x = \\dfrac{1}{49}",
          "explanation": "Since $\\sqrt{49}=7$, the surd becomes $7$ times $(1+x)^{\\frac{1}{2}}$ with $x=\\dfrac{1}{49}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Note how small x is",
          "workingLatex": "x = \\dfrac{1}{49} \\approx 0.020408, \\quad \\left| x \\right| < 1 \\ \\checkmark",
          "explanation": "Because $x$ is tiny, the powers $x^2$ and $x^3$ shrink extremely fast, so only a few terms are needed for high accuracy, and the series certainly converges.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the coefficients for n = 1/2",
          "workingLatex": "(1+x)^{\\frac{1}{2}} \\approx 1 + \\dfrac{1}{2}x - \\dfrac{1}{8}x^2 + \\dfrac{1}{16}x^3",
          "explanation": "With $n=\\dfrac{1}{2}$ the coefficients are $\\dfrac{1}{2}$, $-\\dfrac{1}{8}$ and $\\dfrac{1}{16}$, obtained from the standard rational-power series.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Show where the coefficients come from",
          "workingLatex": "-\\dfrac{1}{8} = \\dfrac{\\frac{1}{2}\\left(-\\frac{1}{2}\\right)}{2!}, \\qquad \\dfrac{1}{16} = \\dfrac{\\frac{1}{2}\\left(-\\frac{1}{2}\\right)\\left(-\\frac{3}{2}\\right)}{3!}",
          "explanation": "It is worth checking the coefficients: the $x^2$ coefficient is $\\dfrac{1}{2}\\times\\left(-\\dfrac{1}{2}\\right)$ over $2!=2$, which is $-\\dfrac{1}{8}$; the $x^3$ coefficient is that numerator times $\\left(-\\dfrac{3}{2}\\right)$ over $3!=6$, giving $\\dfrac{3}{8}\\div 6=\\dfrac{1}{16}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the term in x",
          "workingLatex": "\\dfrac{1}{2}x = \\dfrac{1}{2}\\cdot\\dfrac{1}{49} = \\dfrac{1}{98} \\approx 0.0102040816",
          "explanation": "Halving $\\dfrac{1}{49}$ gives $\\dfrac{1}{98}$, the dominant correction to the leading $1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the term in x squared",
          "workingLatex": "-\\dfrac{1}{8}x^2 = -\\dfrac{1}{8}\\cdot\\dfrac{1}{2401} = -\\dfrac{1}{19208} \\approx -0.0000520616",
          "explanation": "Here $x^2 = \\dfrac{1}{49^2} = \\dfrac{1}{2401}$, and dividing by $8$ gives a term of only about $5\\times 10^{-5}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Evaluate the term in x cubed",
          "workingLatex": "\\dfrac{1}{16}x^3 = \\dfrac{1}{16}\\cdot\\dfrac{1}{117649} = \\dfrac{1}{1882384} \\approx 0.0000005313",
          "explanation": "With $x^3 = \\dfrac{1}{49^3} = \\dfrac{1}{117649}$, this term is around $5\\times 10^{-7}$ — already almost negligible.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Add inside the bracket",
          "workingLatex": "\\left(1+\\dfrac{1}{49}\\right)^{\\frac{1}{2}} \\approx 1 + 0.0102040816 - 0.0000520616 + 0.0000005313 = 1.0101525513",
          "explanation": "Summing the four contributions gives the bracket's value to ten decimal places.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Multiply by 7",
          "workingLatex": "\\sqrt{50} \\approx 7 \\times 1.0101525513 = 7.0710678591",
          "explanation": "Restoring the factor of $7$ (from $\\sqrt{49}$) converts the bracket estimate into an estimate of $\\sqrt{50}$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Compare with the true value",
          "workingLatex": "\\text{approx} = 7.0710678591, \\quad \\text{true} = 7.0710678119",
          "explanation": "Lining up the two values shows they agree all the way to the sixth decimal place.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Compute the error",
          "workingLatex": "\\text{error} = \\left| 7.0710678591 - 7.0710678119 \\right| \\approx 0.0000000472",
          "explanation": "The error is only about $5\\times 10^{-8}$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Comment on the accuracy",
          "workingLatex": "\\text{error} \\approx 4.7\\times 10^{-8} \\ \\Rightarrow \\ \\text{correct to 6 decimal places}",
          "explanation": "Because $x=\\dfrac{1}{49}$ is so small, just four terms give an error of under $5\\times 10^{-8}$, so the estimate $7.0710679$ is reliable to about six decimal places. Rewriting the surd this way makes the binomial method extremely powerful.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sqrt{50} \\approx 7.0710679$; the error is only about $4.7\\times 10^{-8}$, so the estimate is correct to 6 decimal places."
    }
  },
  {
    "id": "al.y2.pure.binomial-rational.q041",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Binomial expansion (rational powers)",
    "subtopicId": "al.y2.pure.binomial-rational",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "partial fractions",
      "binomial expansion",
      "range of validity"
    ],
    "questionText": "Express $\\dfrac{3x+5}{(1+x)(1-2x)}$ in partial fractions, then find its expansion as a series in ascending powers of $x$ up to and including the term in $x^2$, and state the range of values of $x$ for which the expansion is valid.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the partial fraction form",
          "workingLatex": "\\dfrac{3x+5}{(1+x)(1-2x)} = \\dfrac{A}{1+x} + \\dfrac{B}{1-2x}",
          "explanation": "The two distinct linear factors in the denominator each contribute a separate fraction with an unknown constant on top. Splitting the quotient this way turns one awkward fraction into two simple pieces we can expand individually.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Clear the denominators",
          "workingLatex": "3x+5 = A(1-2x) + B(1+x)",
          "explanation": "Multiplying both sides by $(1+x)(1-2x)$ removes every denominator, leaving an identity that must hold for all $x$. We can now choose convenient values of $x$ to isolate each unknown.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find A by letting x = -1",
          "workingLatex": "x=-1:\\quad 3(-1)+5 = A(1-2(-1)) \\Rightarrow 2 = 3A \\Rightarrow A = \\dfrac{2}{3}",
          "explanation": "Substituting $x=-1$ makes the $B$ term vanish because $1+x=0$, so only $A$ survives and we read it off directly.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find B by letting x = 1/2",
          "workingLatex": "x=\\tfrac{1}{2}:\\quad 3(\\tfrac{1}{2})+5 = B(1+\\tfrac{1}{2}) \\Rightarrow \\dfrac{13}{2} = \\dfrac{3}{2}B \\Rightarrow B = \\dfrac{13}{3}",
          "explanation": "Choosing $x=\\tfrac{1}{2}$ kills the $A$ term because $1-2x=0$, leaving $B$ alone. Dividing then gives its value.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the partial fractions",
          "workingLatex": "\\dfrac{3x+5}{(1+x)(1-2x)} = \\dfrac{2}{3}\\cdot\\dfrac{1}{1+x} + \\dfrac{13}{3}\\cdot\\dfrac{1}{1-2x}",
          "explanation": "Placing the constants back over their factors gives the fully split form. Each piece is now a standard $(1+\\text{something})^{-1}$, ready for the binomial series.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Expand the first fraction",
          "workingLatex": "(1+x)^{-1} = 1 - x + x^2 - \\cdots \\Rightarrow \\dfrac{2}{3}(1 - x + x^2) = \\dfrac{2}{3} - \\dfrac{2}{3}x + \\dfrac{2}{3}x^2",
          "explanation": "With $n=-1$ the coefficients are $1$, then $-1$, then $\\dfrac{(-1)(-2)}{2!}=1$, giving $1-x+x^2$. Multiplying through by $\\tfrac{2}{3}$ scales every term.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Expand the second fraction",
          "workingLatex": "(1-2x)^{-1} = 1 + 2x + 4x^2 + \\cdots \\Rightarrow \\dfrac{13}{3}(1 + 2x + 4x^2) = \\dfrac{13}{3} + \\dfrac{26}{3}x + \\dfrac{52}{3}x^2",
          "explanation": "Replacing $X$ by $-2x$ in $(1+X)^{-1}=1-X+X^2$ gives $1+2x+4x^2$; the $x^2$ term is $(-2x)^2=4x^2$. Scaling by $\\tfrac{13}{3}$ produces the second series.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Add the two series",
          "workingLatex": "\\left(\\dfrac{2}{3}+\\dfrac{13}{3}\\right) + \\left(-\\dfrac{2}{3}+\\dfrac{26}{3}\\right)x + \\left(\\dfrac{2}{3}+\\dfrac{52}{3}\\right)x^2 = 5 + 8x + 18x^2",
          "explanation": "Adding matching powers: the constants give $\\tfrac{15}{3}=5$, the $x$ terms give $\\tfrac{24}{3}=8$, and the $x^2$ terms give $\\tfrac{54}{3}=18$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the range of validity",
          "workingLatex": "\\left| x \\right| < 1 \\ \\text{and}\\ \\left| x \\right| < \\tfrac{1}{2} \\ \\Rightarrow\\ \\left| x \\right| < \\tfrac{1}{2}",
          "explanation": "The first series needs $\\left| x \\right|<1$ and the second needs $\\left| 2x \\right|<1$, i.e. $\\left| x \\right|<\\tfrac{1}{2}$. Both must hold together, so we take the more restrictive intersection.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{3x+5}{(1+x)(1-2x)} = \\dfrac{2}{3(1+x)} + \\dfrac{13}{3(1-2x)} = 5 + 8x + 18x^2 + \\cdots$, valid for $\\left| x \\right| < \\dfrac{1}{2}$."
    }
  },
  {
    "id": "al.y2.pure.binomial-rational.q042",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Binomial expansion (rational powers)",
    "subtopicId": "al.y2.pure.binomial-rational",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "partial fractions",
      "binomial expansion",
      "distinct linear factors"
    ],
    "questionText": "Express $\\dfrac{5x+4}{(1+2x)(1-x)}$ in partial fractions, and hence find its series expansion in ascending powers of $x$ up to and including the term in $x^2$. State the range of validity.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the partial fraction form",
          "workingLatex": "\\dfrac{5x+4}{(1+2x)(1-x)} = \\dfrac{A}{1+2x} + \\dfrac{B}{1-x}",
          "explanation": "Each distinct linear factor gets its own fraction with a constant numerator. This breaks the single quotient into two pieces that each match a standard binomial series.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Clear the denominators",
          "workingLatex": "5x+4 = A(1-x) + B(1+2x)",
          "explanation": "Multiplying up by $(1+2x)(1-x)$ leaves a polynomial identity true for every $x$; substituting well-chosen values of $x$ will expose $A$ and $B$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find B by letting x = 1",
          "workingLatex": "x=1:\\quad 5(1)+4 = B(1+2) \\Rightarrow 9 = 3B \\Rightarrow B = 3",
          "explanation": "At $x=1$ the factor $1-x$ is zero, so the $A$ term disappears and $B$ is found immediately.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find A by letting x = -1/2",
          "workingLatex": "x=-\\tfrac{1}{2}:\\quad 5(-\\tfrac{1}{2})+4 = A(1+\\tfrac{1}{2}) \\Rightarrow \\dfrac{3}{2} = \\dfrac{3}{2}A \\Rightarrow A = 1",
          "explanation": "At $x=-\\tfrac{1}{2}$ the factor $1+2x$ is zero, removing the $B$ term and leaving $A$ alone.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the partial fractions",
          "workingLatex": "\\dfrac{5x+4}{(1+2x)(1-x)} = \\dfrac{1}{1+2x} + \\dfrac{3}{1-x}",
          "explanation": "Substituting the constants back gives the split form, with each piece ready for a binomial expansion.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Expand the first fraction",
          "workingLatex": "(1+2x)^{-1} = 1 - 2x + 4x^2 - \\cdots",
          "explanation": "Here $n=-1$ and $X=2x$: the coefficients $1,-1,1$ act on powers of $2x$, giving $1-2x+4x^2$. The $x^2$ term is $\\dfrac{(-1)(-2)}{2!}(2x)^2 = 1\\cdot 4x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Expand the second fraction",
          "workingLatex": "\\dfrac{3}{1-x} = 3(1 + x + x^2 + \\cdots) = 3 + 3x + 3x^2",
          "explanation": "$(1-x)^{-1}$ is the familiar geometric series $1+x+x^2+\\cdots$; multiplying by $3$ scales each term.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Add the two series",
          "workingLatex": "(1+3) + (-2+3)x + (4+3)x^2 = 4 + x + 7x^2",
          "explanation": "Collecting like powers: constants $1+3=4$, the $x$ terms $-2+3=1$, and the $x^2$ terms $4+3=7$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the range of validity",
          "workingLatex": "\\left| x \\right| < \\tfrac{1}{2} \\ \\text{and}\\ \\left| x \\right| < 1 \\ \\Rightarrow\\ \\left| x \\right| < \\tfrac{1}{2}",
          "explanation": "The first expansion needs $\\left| 2x \\right|<1$, i.e. $\\left| x \\right|<\\tfrac{1}{2}$; the second needs $\\left| x \\right|<1$. The combined series is valid only where both hold, so $\\left| x \\right|<\\tfrac{1}{2}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{5x+4}{(1+2x)(1-x)} = \\dfrac{1}{1+2x} + \\dfrac{3}{1-x} = 4 + x + 7x^2 + \\cdots$, valid for $\\left| x \\right| < \\dfrac{1}{2}$."
    }
  },
  {
    "id": "al.y2.pure.binomial-rational.q043",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Binomial expansion (rational powers)",
    "subtopicId": "al.y2.pure.binomial-rational",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "partial fractions",
      "binomial expansion",
      "range of validity"
    ],
    "questionText": "Express $\\dfrac{2+x}{(1-x)(1+2x)}$ in partial fractions, and hence expand it as a series in ascending powers of $x$ up to and including the term in $x^2$, stating the range of validity.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the partial fraction form",
          "workingLatex": "\\dfrac{2+x}{(1-x)(1+2x)} = \\dfrac{A}{1-x} + \\dfrac{B}{1+2x}",
          "explanation": "Two distinct linear factors mean two separate fractions with unknown constant numerators. Splitting like this lets us expand each factor with the binomial series separately.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Clear the denominators",
          "workingLatex": "2+x = A(1+2x) + B(1-x)",
          "explanation": "Multiplying by $(1-x)(1+2x)$ clears the fractions, giving an identity valid for all $x$ that we can solve by substitution.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find A by letting x = 1",
          "workingLatex": "x=1:\\quad 2+1 = A(1+2) \\Rightarrow 3 = 3A \\Rightarrow A = 1",
          "explanation": "At $x=1$ the factor $1-x$ is zero, so the $B$ term drops out and $A$ is found straight away.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find B by letting x = -1/2",
          "workingLatex": "x=-\\tfrac{1}{2}:\\quad 2-\\tfrac{1}{2} = B(1+\\tfrac{1}{2}) \\Rightarrow \\dfrac{3}{2} = \\dfrac{3}{2}B \\Rightarrow B = 1",
          "explanation": "At $x=-\\tfrac{1}{2}$ the factor $1+2x$ is zero, so the $A$ term disappears and $B$ is isolated.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the partial fractions",
          "workingLatex": "\\dfrac{2+x}{(1-x)(1+2x)} = \\dfrac{1}{1-x} + \\dfrac{1}{1+2x}",
          "explanation": "With both constants equal to $1$, the function is now a sum of two standard binomial forms.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Expand the first fraction",
          "workingLatex": "\\dfrac{1}{1-x} = 1 + x + x^2 + \\cdots",
          "explanation": "$(1-x)^{-1}$ is the geometric series with every coefficient equal to $1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Expand the second fraction",
          "workingLatex": "\\dfrac{1}{1+2x} = (1+2x)^{-1} = 1 - 2x + 4x^2 - \\cdots",
          "explanation": "With $n=-1$ and $X=2x$, the signs alternate and the powers of $2$ grow: the $x^2$ term is $(2x)^2 = 4x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Add the two series",
          "workingLatex": "(1+1) + (1-2)x + (1+4)x^2 = 2 - x + 5x^2",
          "explanation": "Combining like powers: constants $1+1=2$, the $x$ terms $1-2=-1$, and the $x^2$ terms $1+4=5$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the range of validity",
          "workingLatex": "\\left| x \\right| < 1 \\ \\text{and}\\ \\left| x \\right| < \\tfrac{1}{2} \\ \\Rightarrow\\ \\left| x \\right| < \\tfrac{1}{2}",
          "explanation": "The first series needs $\\left| x \\right|<1$ and the second needs $\\left| 2x \\right|<1$, i.e. $\\left| x \\right|<\\tfrac{1}{2}$. The tighter condition governs the sum, so $\\left| x \\right|<\\tfrac{1}{2}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{2+x}{(1-x)(1+2x)} = \\dfrac{1}{1-x} + \\dfrac{1}{1+2x} = 2 - x + 5x^2 + \\cdots$, valid for $\\left| x \\right| < \\dfrac{1}{2}$."
    }
  },
  {
    "id": "al.y2.pure.binomial-rational.q044",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Binomial expansion (rational powers)",
    "subtopicId": "al.y2.pure.binomial-rational",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "partial fractions",
      "binomial expansion",
      "coefficient"
    ],
    "questionText": "Express $\\dfrac{1-5x}{(1+x)(1-2x)}$ in partial fractions, and hence find the coefficient of $x^3$ in its expansion as a series in ascending powers of $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the partial fraction form",
          "workingLatex": "\\dfrac{1-5x}{(1+x)(1-2x)} = \\dfrac{A}{1+x} + \\dfrac{B}{1-2x}",
          "explanation": "Splitting over the two distinct linear factors gives two simple fractions. This is essential because the $x^3$ coefficient is much easier to read off each piece than from the original quotient.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Clear the denominators",
          "workingLatex": "1-5x = A(1-2x) + B(1+x)",
          "explanation": "Multiplying by $(1+x)(1-2x)$ removes the fractions, leaving an identity we solve by substituting convenient values of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find A by letting x = -1",
          "workingLatex": "x=-1:\\quad 1-5(-1) = A(1-2(-1)) \\Rightarrow 6 = 3A \\Rightarrow A = 2",
          "explanation": "At $x=-1$ the factor $1+x$ is zero, so only the $A$ term remains and its value follows at once.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find B by letting x = 1/2",
          "workingLatex": "x=\\tfrac{1}{2}:\\quad 1-5(\\tfrac{1}{2}) = B(1+\\tfrac{1}{2}) \\Rightarrow -\\dfrac{3}{2} = \\dfrac{3}{2}B \\Rightarrow B = -1",
          "explanation": "At $x=\\tfrac{1}{2}$ the factor $1-2x$ is zero, isolating $B$; the negative left-hand side makes $B=-1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the partial fractions",
          "workingLatex": "\\dfrac{1-5x}{(1+x)(1-2x)} = \\dfrac{2}{1+x} - \\dfrac{1}{1-2x}",
          "explanation": "With $A=2$ and $B=-1$ we now have two standard binomial forms whose $x^3$ terms we can compute directly.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Expand the first fraction to x^3",
          "workingLatex": "\\dfrac{2}{1+x} = 2(1 - x + x^2 - x^3 + \\cdots) = 2 - 2x + 2x^2 - 2x^3",
          "explanation": "With $n=-1$ the coefficients alternate as $\\pm 1$, so the $x^3$ term of $(1+x)^{-1}$ is $-x^3$. Multiplying by $2$ makes its coefficient $-2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Expand the second fraction to x^3",
          "workingLatex": "-\\dfrac{1}{1-2x} = -(1 + 2x + 4x^2 + 8x^3 + \\cdots) = -1 - 2x - 4x^2 - 8x^3",
          "explanation": "$(1-2x)^{-1}=1+2x+4x^2+8x^3+\\cdots$, so the $x^3$ term is $8x^3$; the leading minus sign makes its coefficient $-8$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Combine the x^3 coefficients",
          "workingLatex": "[x^3]:\\quad (-2) + (-8) = -10",
          "explanation": "Add the two contributions to the $x^3$ term: $-2$ from the first series and $-8$ from the second give a total of $-10$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the coefficient",
          "workingLatex": "\\text{coefficient of } x^3 = -10",
          "explanation": "This is the required value. (The expansion is valid for $\\left| x \\right|<\\tfrac{1}{2}$, the intersection of the two ranges.)",
          "diagram": null
        }
      ],
      "finalAnswer": "The coefficient of $x^3$ is $-10$."
    }
  },
  {
    "id": "al.y2.pure.binomial-rational.q045",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Binomial expansion (rational powers)",
    "subtopicId": "al.y2.pure.binomial-rational",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "partial fractions",
      "repeated factor",
      "binomial expansion"
    ],
    "questionText": "Express $\\dfrac{3-x}{(1-x)^2(1+x)}$ in partial fractions, and hence find its series expansion up to and including the term in $x^2$, stating the range of validity.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the partial fraction form",
          "workingLatex": "\\dfrac{3-x}{(1-x)^2(1+x)} = \\dfrac{A}{1-x} + \\dfrac{B}{(1-x)^2} + \\dfrac{C}{1+x}",
          "explanation": "A repeated factor $(1-x)^2$ needs two fractions — one over $(1-x)$ and one over $(1-x)^2$ — while the separate factor $(1+x)$ contributes its own. Including both powers is essential to capture every part of the decomposition.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Clear the denominators",
          "workingLatex": "3-x = A(1-x)(1+x) + B(1+x) + C(1-x)^2",
          "explanation": "Multiplying through by the full denominator $(1-x)^2(1+x)$ clears all fractions and gives an identity valid for every $x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find B by letting x = 1",
          "workingLatex": "x=1:\\quad 3-1 = B(1+1) \\Rightarrow 2 = 2B \\Rightarrow B = 1",
          "explanation": "At $x=1$ both the $A$ and $C$ terms carry a factor $(1-x)=0$, so only $B(1+x)$ survives and $B$ follows immediately.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find C by letting x = -1",
          "workingLatex": "x=-1:\\quad 3-(-1) = C(1-(-1))^2 \\Rightarrow 4 = 4C \\Rightarrow C = 1",
          "explanation": "At $x=-1$ the factor $(1+x)=0$ removes the $A$ and $B$ terms, leaving $C(1-x)^2 = 4C$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find A by comparing x^2 coefficients",
          "workingLatex": "\\text{coeff of } x^2:\\quad 0 = -A + C \\Rightarrow A = C = 1",
          "explanation": "There is no $x^2$ term on the left. On the right $A(1-x^2)$ gives $-A$ and $C(1-2x+x^2)$ gives $+C$ as the $x^2$ coefficients (the $B$ term has none), so $-A+C=0$ and hence $A=1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the partial fractions",
          "workingLatex": "\\dfrac{3-x}{(1-x)^2(1+x)} = \\dfrac{1}{1-x} + \\dfrac{1}{(1-x)^2} + \\dfrac{1}{1+x}",
          "explanation": "Substituting $A=B=C=1$ gives three standard pieces, each expandable by the binomial series.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Expand the first fraction",
          "workingLatex": "\\dfrac{1}{1-x} = 1 + x + x^2 + \\cdots",
          "explanation": "This is the geometric series, with every coefficient equal to $1$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Expand the repeated-factor fraction",
          "workingLatex": "\\dfrac{1}{(1-x)^2} = (1-x)^{-2} = 1 + 2x + 3x^2 + \\cdots",
          "explanation": "With $n=-2$ and $X=-x$: the $x$ coefficient is $(-2)(-1)=2$, and the $x^2$ coefficient is $\\dfrac{(-2)(-3)}{2!}(-1)^2 = 3$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Expand the third fraction",
          "workingLatex": "\\dfrac{1}{1+x} = 1 - x + x^2 - \\cdots",
          "explanation": "With $n=-1$ the signs alternate, giving $1-x+x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Add the three series",
          "workingLatex": "(1+1+1) + (1+2-1)x + (1+3+1)x^2 = 3 + 2x + 5x^2",
          "explanation": "Adding term by term: constants $1+1+1=3$, the $x$ terms $1+2-1=2$, and the $x^2$ terms $1+3+1=5$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the range of validity",
          "workingLatex": "\\left| x \\right| < 1",
          "explanation": "Every factor is of the form $(1\\pm x)$, so each series requires $\\left| x \\right|<1$; the common range is therefore simply $\\left| x \\right|<1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{3-x}{(1-x)^2(1+x)} = \\dfrac{1}{1-x} + \\dfrac{1}{(1-x)^2} + \\dfrac{1}{1+x} = 3 + 2x + 5x^2 + \\cdots$, valid for $\\left| x \\right| < 1$."
    }
  },
  {
    "id": "al.y2.pure.binomial-rational.q046",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Binomial expansion (rational powers)",
    "subtopicId": "al.y2.pure.binomial-rational",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "partial fractions",
      "binomial expansion",
      "ascending powers"
    ],
    "questionText": "Given that $f(x) = \\dfrac{3}{1+x} + \\dfrac{2}{1-x}$, find the series expansion of $f(x)$ in ascending powers of $x$ up to and including the term in $x^3$, and state the range of validity.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Note the function is already split",
          "workingLatex": "f(x) = \\dfrac{3}{1+x} + \\dfrac{2}{1-x}",
          "explanation": "The function is already written in partial fractions, so we can expand each piece separately as a binomial series and then add the results.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the binomial series for a rational power",
          "workingLatex": "(1+X)^{n} = 1 + nX + \\dfrac{n(n-1)}{2!}X^2 + \\dfrac{n(n-1)(n-2)}{3!}X^3 + \\cdots",
          "explanation": "Each fraction is a power $(1\\pm x)^{-1}$, so we use the general series with $n=-1$ applied to the appropriate $X$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand the first fraction to x^3",
          "workingLatex": "\\dfrac{3}{1+x} = 3(1 - x + x^2 - x^3 + \\cdots) = 3 - 3x + 3x^2 - 3x^3",
          "explanation": "With $n=-1$, $(1+x)^{-1}=1-x+x^2-x^3+\\cdots$ with coefficients alternating as $\\pm 1$; multiplying by $3$ scales every term.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Expand the second fraction to x^3",
          "workingLatex": "\\dfrac{2}{1-x} = 2(1 + x + x^2 + x^3 + \\cdots) = 2 + 2x + 2x^2 + 2x^3",
          "explanation": "$(1-x)^{-1}$ is the geometric series with all coefficients $1$; multiplying by $2$ gives $2+2x+2x^2+2x^3$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Add the constant terms",
          "workingLatex": "3 + 2 = 5",
          "explanation": "Combine the two constant terms to get the constant of $f(x)$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Add the x terms",
          "workingLatex": "-3x + 2x = -x",
          "explanation": "The coefficient of $x$ is $-3+2=-1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Add the x^2 terms",
          "workingLatex": "3x^2 + 2x^2 = 5x^2",
          "explanation": "The coefficient of $x^2$ is $3+2=5$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Add the x^3 terms",
          "workingLatex": "-3x^3 + 2x^3 = -x^3",
          "explanation": "The coefficient of $x^3$ is $-3+2=-1$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Assemble the series",
          "workingLatex": "f(x) = 5 - x + 5x^2 - x^3 + \\cdots",
          "explanation": "Collecting the combined coefficients gives the expansion up to and including $x^3$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the range of validity",
          "workingLatex": "\\left| x \\right| < 1",
          "explanation": "Both $(1+x)^{-1}$ and $(1-x)^{-1}$ require $\\left| x \\right|<1$, so their sum is valid on exactly the same interval.",
          "diagram": null
        }
      ],
      "finalAnswer": "$f(x) = 5 - x + 5x^2 - x^3 + \\cdots$, valid for $\\left| x \\right| < 1$."
    }
  },
  {
    "id": "al.y2.pure.binomial-rational.q047",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Binomial expansion (rational powers)",
    "subtopicId": "al.y2.pure.binomial-rational",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "tags": [
      "partial fractions",
      "binomial expansion",
      "range of validity"
    ],
    "questionText": "Express $\\dfrac{3+4x}{(1-2x)(1+3x)}$ in partial fractions, and hence find its expansion as a series in ascending powers of $x$ up to and including the term in $x^3$. State the range of values of $x$ for which the expansion is valid.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the partial fraction form",
          "workingLatex": "\\dfrac{3+4x}{(1-2x)(1+3x)} = \\dfrac{A}{1-2x} + \\dfrac{B}{1+3x}",
          "explanation": "The two distinct linear factors each give a fraction with a constant numerator. Splitting first lets us expand each factor with the binomial series and then combine.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Clear the denominators",
          "workingLatex": "3+4x = A(1+3x) + B(1-2x)",
          "explanation": "Multiplying by $(1-2x)(1+3x)$ removes the fractions, leaving an identity we solve by substituting the values that zero each factor.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find A by letting x = 1/2",
          "workingLatex": "x=\\tfrac{1}{2}:\\quad 3+4(\\tfrac{1}{2}) = A(1+3(\\tfrac{1}{2})) \\Rightarrow 5 = \\dfrac{5}{2}A \\Rightarrow A = 2",
          "explanation": "At $x=\\tfrac{1}{2}$ the factor $1-2x$ is zero, so the $B$ term vanishes and $A$ is found directly.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find B by letting x = -1/3",
          "workingLatex": "x=-\\tfrac{1}{3}:\\quad 3+4(-\\tfrac{1}{3}) = B(1-2(-\\tfrac{1}{3})) \\Rightarrow \\dfrac{5}{3} = \\dfrac{5}{3}B \\Rightarrow B = 1",
          "explanation": "At $x=-\\tfrac{1}{3}$ the factor $1+3x$ is zero, removing the $A$ term and isolating $B$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the partial fractions",
          "workingLatex": "\\dfrac{3+4x}{(1-2x)(1+3x)} = \\dfrac{2}{1-2x} + \\dfrac{1}{1+3x}",
          "explanation": "Substituting the constants back gives two standard binomial forms ready to expand to $x^3$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Recall the series for an inverse linear factor",
          "workingLatex": "(1+X)^{-1} = 1 - X + X^2 - X^3 + \\cdots",
          "explanation": "This is the $n=-1$ case of the binomial series; substituting the correct $X$ into it generates each expansion.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Expand the first fraction to x^3",
          "workingLatex": "\\dfrac{2}{1-2x} = 2(1 + 2x + 4x^2 + 8x^3 + \\cdots) = 2 + 4x + 8x^2 + 16x^3",
          "explanation": "Put $X=-2x$: the powers of $2x$ all become positive, giving $1+2x+4x^2+8x^3$; e.g. the $x^3$ term is $(-2x)^3\\times(-1)^3=8x^3$. Multiplying by $2$ doubles each coefficient.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Expand the second fraction to x^3",
          "workingLatex": "\\dfrac{1}{1+3x} = 1 - 3x + 9x^2 - 27x^3 + \\cdots",
          "explanation": "Put $X=3x$: the signs alternate and the powers of $3$ grow, giving $1-3x+9x^2-27x^3$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Combine the constant terms",
          "workingLatex": "2 + 1 = 3",
          "explanation": "Add the constants from the two expansions.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Combine the x terms",
          "workingLatex": "4x - 3x = x",
          "explanation": "The coefficient of $x$ is $4-3=1$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Combine the x^2 terms",
          "workingLatex": "8x^2 + 9x^2 = 17x^2",
          "explanation": "The coefficient of $x^2$ is $8+9=17$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Combine the x^3 terms",
          "workingLatex": "16x^3 - 27x^3 = -11x^3",
          "explanation": "The coefficient of $x^3$ is $16-27=-11$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Assemble the series",
          "workingLatex": "\\dfrac{3+4x}{(1-2x)(1+3x)} = 3 + x + 17x^2 - 11x^3 + \\cdots",
          "explanation": "Collecting the combined coefficients gives the expansion up to and including $x^3$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the range of validity",
          "workingLatex": "\\left| x \\right| < \\tfrac{1}{2} \\ \\text{and}\\ \\left| x \\right| < \\tfrac{1}{3} \\ \\Rightarrow\\ \\left| x \\right| < \\tfrac{1}{3}",
          "explanation": "The first series needs $\\left| 2x \\right|<1$ ($\\left| x \\right|<\\tfrac{1}{2}$) and the second needs $\\left| 3x \\right|<1$ ($\\left| x \\right|<\\tfrac{1}{3}$). Both must hold, so the tighter bound $\\left| x \\right|<\\tfrac{1}{3}$ wins.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{3+4x}{(1-2x)(1+3x)} = \\dfrac{2}{1-2x} + \\dfrac{1}{1+3x} = 3 + x + 17x^2 - 11x^3 + \\cdots$, valid for $\\left| x \\right| < \\dfrac{1}{3}$."
    }
  },
  {
    "id": "al.y2.pure.binomial-rational.q048",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Binomial expansion (rational powers)",
    "subtopicId": "al.y2.pure.binomial-rational",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "tags": [
      "partial fractions",
      "binomial expansion",
      "general term"
    ],
    "questionText": "Express $\\dfrac{5+x}{(1-x)(1+2x)}$ in partial fractions, and hence find, in terms of $n$, the coefficient of $x^n$ in its expansion as a series in ascending powers of $x$. State the range of validity.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the partial fraction form",
          "workingLatex": "\\dfrac{5+x}{(1-x)(1+2x)} = \\dfrac{A}{1-x} + \\dfrac{B}{1+2x}",
          "explanation": "Splitting over the two linear factors is what makes a general term possible: each piece has a clean, known pattern for the coefficient of $x^n$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Clear the denominators",
          "workingLatex": "5+x = A(1+2x) + B(1-x)",
          "explanation": "Multiplying by $(1-x)(1+2x)$ clears the fractions, giving an identity we solve by substitution.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find A by letting x = 1",
          "workingLatex": "x=1:\\quad 5+1 = A(1+2) \\Rightarrow 6 = 3A \\Rightarrow A = 2",
          "explanation": "At $x=1$ the factor $1-x$ is zero, so only the $A$ term survives.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find B by letting x = -1/2",
          "workingLatex": "x=-\\tfrac{1}{2}:\\quad 5-\\tfrac{1}{2} = B(1+\\tfrac{1}{2}) \\Rightarrow \\dfrac{9}{2} = \\dfrac{3}{2}B \\Rightarrow B = 3",
          "explanation": "At $x=-\\tfrac{1}{2}$ the factor $1+2x$ is zero, so only the $B$ term survives.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the partial fractions",
          "workingLatex": "\\dfrac{5+x}{(1-x)(1+2x)} = \\dfrac{2}{1-x} + \\dfrac{3}{1+2x}",
          "explanation": "Each fraction is now a standard $(1\\pm kx)^{-1}$ form, for which the general coefficient is known.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Recall the general term of an inverse linear factor",
          "workingLatex": "(1+X)^{-1} = \\sum_{r=0}^{\\infty} (-1)^r X^r",
          "explanation": "For $n=-1$ the general coefficient simplifies: $\\dfrac{(-1)(-2)\\cdots(-r)}{r!} = (-1)^r$, so the term in $X^r$ is $(-1)^r X^r$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the coefficient of x^n in the first fraction",
          "workingLatex": "\\dfrac{2}{1-x} = 2\\sum (-1)^r(-x)^r = 2\\sum x^r \\Rightarrow [x^n]\\ \\text{is}\\ 2",
          "explanation": "With $X=-x$, the coefficient of $x^r$ is $(-1)^r(-1)^r = 1$; times $2$ gives $2$ for every power. So $\\dfrac{2}{1-x}$ contributes $2$ to the coefficient of $x^n$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find the coefficient of x^n in the second fraction",
          "workingLatex": "\\dfrac{3}{1+2x} = 3\\sum (-1)^r(2x)^r = 3\\sum (-2)^r x^r \\Rightarrow [x^n]\\ \\text{is}\\ 3(-2)^n",
          "explanation": "With $X=2x$, the coefficient of $x^r$ is $(-1)^r 2^r = (-2)^r$; times $3$ gives $3(-2)^r$. So $\\dfrac{3}{1+2x}$ contributes $3(-2)^n$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Add the two contributions",
          "workingLatex": "[x^n] = 2 + 3(-2)^n",
          "explanation": "The coefficient of $x^n$ in the whole function is the sum of the two individual contributions.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Write the general term",
          "workingLatex": "\\text{general term} = \\left(2 + 3(-2)^n\\right)x^n",
          "explanation": "Attaching the coefficient to $x^n$ gives the general term of the whole expansion.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check the formula at n = 0",
          "workingLatex": "n=0:\\quad 2 + 3(-2)^0 = 2+3 = 5",
          "explanation": "This matches the constant term, since $f(0)=\\dfrac{5}{1\\cdot 1}=5$ — a reassuring sanity check.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Check the formula at n = 1",
          "workingLatex": "n=1:\\quad 2 + 3(-2)^1 = 2-6 = -4",
          "explanation": "So the coefficient of $x$ is $-4$, which agrees with a direct expansion of the two fractions.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the range of validity",
          "workingLatex": "\\left| x \\right| < 1 \\ \\text{and}\\ \\left| x \\right| < \\tfrac{1}{2} \\ \\Rightarrow\\ \\left| x \\right| < \\tfrac{1}{2}",
          "explanation": "The series for $\\dfrac{2}{1-x}$ needs $\\left| x \\right|<1$ and that for $\\dfrac{3}{1+2x}$ needs $\\left| x \\right|<\\tfrac{1}{2}$; the general-term formula is valid only where both converge, so $\\left| x \\right|<\\tfrac{1}{2}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{5+x}{(1-x)(1+2x)} = \\dfrac{2}{1-x} + \\dfrac{3}{1+2x}$; the coefficient of $x^n$ is $2 + 3(-2)^n$, so the general term is $\\left(2+3(-2)^n\\right)x^n$, valid for $\\left| x \\right| < \\dfrac{1}{2}$."
    }
  },
  {
    "id": "al.y2.pure.binomial-rational.q049",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Binomial expansion (rational powers)",
    "subtopicId": "al.y2.pure.binomial-rational",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "expression",
    "tags": [
      "improper fraction",
      "partial fractions",
      "binomial expansion"
    ],
    "questionText": "Express $\\dfrac{4-7x-3x^2}{(1+x)(1-3x)}$ as the sum of a constant and partial fractions, and hence find its expansion as a series in ascending powers of $x$ up to and including the term in $x^2$. State the range of validity.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise that the fraction is improper",
          "workingLatex": "\\text{degree of numerator} = 2 = \\text{degree of denominator}",
          "explanation": "The top and bottom have the same degree, so the fraction is improper. Before using partial fractions we must first divide out the constant part, otherwise the decomposition would be incomplete.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expand the denominator",
          "workingLatex": "(1+x)(1-3x) = 1 - 2x - 3x^2",
          "explanation": "Multiplying the factors writes the denominator as a single quadratic, which we need to carry out the division.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Divide to find the constant part",
          "workingLatex": "\\dfrac{4-7x-3x^2}{1-2x-3x^2} = 1 + \\dfrac{3-5x}{1-2x-3x^2}",
          "explanation": "Numerator and denominator share the same $x^2$ coefficient $(-3)$, so subtracting one copy of the denominator from the numerator removes the $x^2$ term: $(4-7x-3x^2)-(1-2x-3x^2)=3-5x$. The quotient is $1$ with remainder $3-5x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rewrite with the factored denominator",
          "workingLatex": "f(x) = 1 + \\dfrac{3-5x}{(1+x)(1-3x)}",
          "explanation": "Putting the denominator back in factored form prepares the proper remainder for a partial fraction split.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set up the partial fraction form",
          "workingLatex": "\\dfrac{3-5x}{(1+x)(1-3x)} = \\dfrac{A}{1+x} + \\dfrac{B}{1-3x}",
          "explanation": "The proper remainder splits over its two distinct linear factors, each with a constant numerator.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Clear the denominators",
          "workingLatex": "3-5x = A(1-3x) + B(1+x)",
          "explanation": "Multiplying up by $(1+x)(1-3x)$ leaves an identity we solve by substituting the values that zero each factor.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find A by letting x = -1",
          "workingLatex": "x=-1:\\quad 3-5(-1) = A(1-3(-1)) \\Rightarrow 8 = 4A \\Rightarrow A = 2",
          "explanation": "At $x=-1$ the factor $1+x$ is zero, so the $B$ term vanishes and $A$ follows directly.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find B by letting x = 1/3",
          "workingLatex": "x=\\tfrac{1}{3}:\\quad 3-5(\\tfrac{1}{3}) = B(1+\\tfrac{1}{3}) \\Rightarrow \\dfrac{4}{3} = \\dfrac{4}{3}B \\Rightarrow B = 1",
          "explanation": "At $x=\\tfrac{1}{3}$ the factor $1-3x$ is zero, isolating $B$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Write the full decomposition",
          "workingLatex": "f(x) = 1 + \\dfrac{2}{1+x} + \\dfrac{1}{1-3x}",
          "explanation": "Combining the constant from the division with the two partial fractions gives the function in fully expandable form.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Expand the first fraction to x^2",
          "workingLatex": "\\dfrac{2}{1+x} = 2(1 - x + x^2 - \\cdots) = 2 - 2x + 2x^2",
          "explanation": "With $n=-1$ the coefficients alternate as $\\pm 1$; multiplying by $2$ gives $2-2x+2x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Expand the second fraction to x^2",
          "workingLatex": "\\dfrac{1}{1-3x} = 1 + 3x + 9x^2 + \\cdots",
          "explanation": "With $X=3x$ and $n=-1$, replacing $X$ by $-3x$ makes every term positive: the $x^2$ term is $(3x)^2 = 9x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Combine the constant, series and constant terms",
          "workingLatex": "1 + (2 - 2x + 2x^2) + (1 + 3x + 9x^2) = 4 + x + 11x^2",
          "explanation": "Add the constant $1$, then collect like powers: constants $1+2+1=4$, the $x$ terms $-2+3=1$, and the $x^2$ terms $2+9=11$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the expansion",
          "workingLatex": "f(x) = 4 + x + 11x^2 + \\cdots",
          "explanation": "This is the required series up to and including the term in $x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the range of validity",
          "workingLatex": "\\left| x \\right| < 1 \\ \\text{and}\\ \\left| x \\right| < \\tfrac{1}{3} \\ \\Rightarrow\\ \\left| x \\right| < \\tfrac{1}{3}",
          "explanation": "The constant term is valid everywhere; $\\dfrac{2}{1+x}$ needs $\\left| x \\right|<1$ and $\\dfrac{1}{1-3x}$ needs $\\left| x \\right|<\\tfrac{1}{3}$. The whole expansion is valid only where all parts converge, i.e. $\\left| x \\right|<\\tfrac{1}{3}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{4-7x-3x^2}{(1+x)(1-3x)} = 1 + \\dfrac{2}{1+x} + \\dfrac{1}{1-3x} = 4 + x + 11x^2 + \\cdots$, valid for $\\left| x \\right| < \\dfrac{1}{3}$."
    }
  },
  {
    "id": "al.y2.pure.binomial-rational.q050",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Binomial expansion (rational powers)",
    "subtopicId": "al.y2.pure.binomial-rational",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "tags": [
      "partial fractions",
      "binomial approximation",
      "range of validity"
    ],
    "questionText": "Express $\\dfrac{4-x}{(1-x)(1+2x)}$ in partial fractions, and hence show that, for small $x$, $\\dfrac{4-x}{(1-x)(1+2x)} \\approx 4 - 5x + 13x^2$. State the range of validity of the full expansion.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the partial fraction form",
          "workingLatex": "\\dfrac{4-x}{(1-x)(1+2x)} = \\dfrac{A}{1-x} + \\dfrac{B}{1+2x}",
          "explanation": "Splitting over the two linear factors turns the quotient into two standard binomial forms whose small-$x$ behaviour is easy to approximate.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Clear the denominators",
          "workingLatex": "4-x = A(1+2x) + B(1-x)",
          "explanation": "Multiplying by $(1-x)(1+2x)$ removes the fractions, leaving an identity valid for all $x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find A by letting x = 1",
          "workingLatex": "x=1:\\quad 4-1 = A(1+2) \\Rightarrow 3 = 3A \\Rightarrow A = 1",
          "explanation": "At $x=1$ the factor $1-x$ is zero, so the $B$ term vanishes and $A$ is found immediately.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find B by letting x = -1/2",
          "workingLatex": "x=-\\tfrac{1}{2}:\\quad 4+\\tfrac{1}{2} = B(1+\\tfrac{1}{2}) \\Rightarrow \\dfrac{9}{2} = \\dfrac{3}{2}B \\Rightarrow B = 3",
          "explanation": "At $x=-\\tfrac{1}{2}$ the factor $1+2x$ is zero, isolating $B$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the partial fractions",
          "workingLatex": "\\dfrac{4-x}{(1-x)(1+2x)} = \\dfrac{1}{1-x} + \\dfrac{3}{1+2x}",
          "explanation": "With $A=1$ and $B=3$, the function is a sum of two standard binomial forms.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Recall the series for an inverse linear factor",
          "workingLatex": "(1+X)^{-1} = 1 - X + X^2 - \\cdots",
          "explanation": "This is the $n=-1$ binomial series; substituting the right $X$ gives each expansion.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Expand the first fraction to x^2",
          "workingLatex": "\\dfrac{1}{1-x} = 1 + x + x^2 + \\cdots",
          "explanation": "$(1-x)^{-1}$ is the geometric series with every coefficient equal to $1$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Expand the second fraction to x^2",
          "workingLatex": "\\dfrac{3}{1+2x} = 3(1 - 2x + 4x^2 - \\cdots) = 3 - 6x + 12x^2",
          "explanation": "With $X=2x$ and $n=-1$: $1-2x+4x^2$, where the $x^2$ term is $(2x)^2=4x^2$. Scaling by $3$ gives $3-6x+12x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Combine the constant terms",
          "workingLatex": "1 + 3 = 4",
          "explanation": "Add the two constants.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Combine the x terms",
          "workingLatex": "x - 6x = -5x",
          "explanation": "The coefficient of $x$ is $1-6=-5$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Combine the x^2 terms",
          "workingLatex": "x^2 + 12x^2 = 13x^2",
          "explanation": "The coefficient of $x^2$ is $1+12=13$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State the approximation",
          "workingLatex": "\\dfrac{4-x}{(1-x)(1+2x)} \\approx 4 - 5x + 13x^2",
          "explanation": "For small $x$ the terms in $x^3$ and higher are tiny compared with these, so truncating after $x^2$ gives a good approximation — as required.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the range of validity",
          "workingLatex": "\\left| x \\right| < 1 \\ \\text{and}\\ \\left| x \\right| < \\tfrac{1}{2} \\ \\Rightarrow\\ \\left| x \\right| < \\tfrac{1}{2}",
          "explanation": "$\\dfrac{1}{1-x}$ needs $\\left| x \\right|<1$ and $\\dfrac{3}{1+2x}$ needs $\\left| x \\right|<\\tfrac{1}{2}$; the full series converges only where both do, so $\\left| x \\right|<\\tfrac{1}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Confirm with a small value",
          "workingLatex": "x=0.05:\\quad \\text{approx} = 3.7825, \\quad \\text{true} = \\dfrac{3.95}{0.95 \\times 1.1} \\approx 3.7799",
          "explanation": "Testing a small value confirms the approximation: at $x=0.05$ the quadratic gives $3.7825$ against the true $3.7799$, an error of well under $0.1\\%$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{4-x}{(1-x)(1+2x)} = \\dfrac{1}{1-x} + \\dfrac{3}{1+2x} \\approx 4 - 5x + 13x^2$ for small $x$, with the full series valid for $\\left| x \\right| < \\dfrac{1}{2}$."
    }
  },
  {
    "id": "al.y2.pure.binomial-rational.q051",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Binomial expansion (rational powers)",
    "subtopicId": "al.y2.pure.binomial-rational",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "binomial expansion",
      "unknown constants",
      "simultaneous equations"
    ],
    "questionText": "In the expansion of $(1+ax)^n$, where $n$ is a constant, the coefficient of $x$ is $6$ and the coefficient of $x^2$ is $27$. Find the value of $a$ and the value of $n$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the general binomial series",
          "workingLatex": "(1+ax)^n = 1 + n(ax) + \\dfrac{n(n-1)}{2!}(ax)^2 + \\cdots = 1 + nax + \\dfrac{n(n-1)}{2}a^2x^2 + \\cdots",
          "explanation": "For a rational power the binomial theorem gives an infinite series. Because the bracket contains $ax$ rather than $x$, we substitute $ax$ everywhere, so each power of $x$ also picks up a matching power of $a$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Read off the coefficient of x",
          "workingLatex": "\\text{coefficient of } x = na",
          "explanation": "The single term in $x$ comes from $n(ax)=nax$, so its coefficient is $na$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form the first equation",
          "workingLatex": "na = 6",
          "explanation": "We are told this coefficient equals $6$, which gives our first equation linking $a$ and $n$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Read off the coefficient of x squared",
          "workingLatex": "\\text{coefficient of } x^2 = \\dfrac{n(n-1)}{2}a^2",
          "explanation": "The $x^2$ term comes from $\\dfrac{n(n-1)}{2!}(ax)^2$, and $(ax)^2=a^2x^2$, so the coefficient is $\\dfrac{n(n-1)}{2}a^2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Form the second equation",
          "workingLatex": "\\dfrac{n(n-1)}{2}a^2 = 27",
          "explanation": "Setting this equal to the given value $27$ gives a second equation, so we now have two equations in the two unknowns.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Make a the subject of the first equation",
          "workingLatex": "a = \\dfrac{6}{n}",
          "explanation": "Rearranging $na=6$ lets us substitute for $a$ and reduce the problem to a single equation in $n$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute into the second equation",
          "workingLatex": "\\dfrac{n(n-1)}{2}\\left(\\dfrac{6}{n}\\right)^2 = 27 \\;\\Rightarrow\\; \\dfrac{n(n-1)}{2}\\cdot\\dfrac{36}{n^2} = 27",
          "explanation": "Replacing $a$ with $\\dfrac{6}{n}$ turns the second equation into one that only involves $n$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Simplify the equation",
          "workingLatex": "\\dfrac{18(n-1)}{n} = 27 \\;\\Rightarrow\\; 18(n-1) = 27n",
          "explanation": "One factor of $n$ cancels with $n^2$, and $\\dfrac{36}{2}=18$; multiplying both sides by $n$ clears the fraction.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solve for n",
          "workingLatex": "18n - 18 = 27n \\;\\Rightarrow\\; -18 = 9n \\;\\Rightarrow\\; n = -2",
          "explanation": "Expanding and collecting the $n$ terms leaves a simple linear equation, giving $n=-2$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Find a",
          "workingLatex": "a = \\dfrac{6}{n} = \\dfrac{6}{-2} = -3",
          "explanation": "Substituting $n=-2$ back into $a=\\dfrac{6}{n}$ gives the matching value of $a$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check both coefficients",
          "workingLatex": "na = (-2)(-3) = 6, \\qquad \\dfrac{n(n-1)}{2}a^2 = \\dfrac{(-2)(-3)}{2}(-3)^2 = 3\\times 9 = 27",
          "explanation": "Both given coefficients are reproduced exactly, confirming the solution is correct.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State the values",
          "workingLatex": "a = -3, \\quad n = -2",
          "explanation": "These are the required constants.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a = -3$ and $n = -2$."
    }
  },
  {
    "id": "al.y2.pure.binomial-rational.q052",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Binomial expansion (rational powers)",
    "subtopicId": "al.y2.pure.binomial-rational",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "binomial expansion",
      "fractional index",
      "unknown constant"
    ],
    "questionText": "The coefficient of $x^2$ in the expansion of $(1+ax)^{\\frac{1}{2}}$ is $-2$. Find the possible values of the constant $a$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the general binomial series",
          "workingLatex": "(1+ax)^n = 1 + nax + \\dfrac{n(n-1)}{2}a^2x^2 + \\cdots, \\quad n = \\tfrac{1}{2}",
          "explanation": "With a fractional power we use the infinite binomial series, substituting $ax$ for the variable. Here $n=\\dfrac{1}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the coefficient of x squared",
          "workingLatex": "\\text{coefficient of } x^2 = \\dfrac{n(n-1)}{2}a^2",
          "explanation": "The $x^2$ term is $\\dfrac{n(n-1)}{2!}(ax)^2$, so its coefficient is $\\dfrac{n(n-1)}{2}a^2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate the numerical part for n equals a half",
          "workingLatex": "\\dfrac{n(n-1)}{2} = \\dfrac{\\tfrac{1}{2}\\left(\\tfrac{1}{2}-1\\right)}{2} = \\dfrac{\\tfrac{1}{2}\\left(-\\tfrac{1}{2}\\right)}{2} = \\dfrac{-\\tfrac{1}{4}}{2} = -\\tfrac{1}{8}",
          "explanation": "Substituting $n=\\dfrac{1}{2}$ gives $\\dfrac{1}{2}\\times\\left(-\\dfrac{1}{2}\\right)=-\\dfrac{1}{4}$ on top, and dividing by $2$ gives $-\\dfrac{1}{8}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the coefficient in terms of a",
          "workingLatex": "\\text{coefficient of } x^2 = -\\tfrac{1}{8}a^2",
          "explanation": "Only $a^2$ remains attached to the numerical coefficient $-\\dfrac{1}{8}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Form the equation",
          "workingLatex": "-\\tfrac{1}{8}a^2 = -2",
          "explanation": "We set the coefficient equal to the given value $-2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for a squared",
          "workingLatex": "a^2 = -2 \\times (-8) = 16",
          "explanation": "Multiplying both sides by $-8$ isolates $a^2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Take square roots",
          "workingLatex": "a = \\pm\\sqrt{16} = \\pm 4",
          "explanation": "Because $a$ appears only as $a^2$, both a positive and a negative value satisfy the equation.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Confirm both signs work",
          "workingLatex": "a = 4:\\quad -\\tfrac{1}{8}(16) = -2\\quad\\checkmark \\qquad a = -4:\\quad -\\tfrac{1}{8}(16) = -2\\quad\\checkmark",
          "explanation": "The coefficient depends only on $a^2$, so $a=4$ and $a=-4$ both give the required $-2$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the values",
          "workingLatex": "a = 4 \\quad\\text{or}\\quad a = -4",
          "explanation": "Both values are acceptable answers.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a = 4$ or $a = -4$."
    }
  },
  {
    "id": "al.y2.pure.binomial-rational.q053",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Binomial expansion (rational powers)",
    "subtopicId": "al.y2.pure.binomial-rational",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "binomial expansion",
      "unknown constants",
      "first three terms"
    ],
    "questionText": "The first three terms, in ascending powers of $x$, in the expansion of $(1+ax)^n$ are $1 - 6x + 24x^2$. Find the value of $a$ and the value of $n$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the general binomial series",
          "workingLatex": "(1+ax)^n = 1 + nax + \\dfrac{n(n-1)}{2}a^2x^2 + \\cdots",
          "explanation": "For a rational power we use the infinite series, substituting $ax$ for the variable so each power of $x$ carries a power of $a$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Match the coefficient of x",
          "workingLatex": "na = -6",
          "explanation": "The term in $x$ is $nax$, and comparing with $-6x$ gives $na=-6$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Match the coefficient of x squared",
          "workingLatex": "\\dfrac{n(n-1)}{2}a^2 = 24",
          "explanation": "The $x^2$ coefficient $\\dfrac{n(n-1)}{2}a^2$ must equal the given $24$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Divide the second equation by the first",
          "workingLatex": "\\dfrac{\\tfrac{n(n-1)}{2}a^2}{na} = \\dfrac{24}{-6} = -4",
          "explanation": "Dividing eliminates one factor of $n$ and one factor of $a$, which is the quickest route to the answer.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the left-hand side",
          "workingLatex": "\\dfrac{(n-1)a}{2} = -4 \\;\\Rightarrow\\; (n-1)a = -8",
          "explanation": "The $n$ cancels with $n(n-1)$ leaving $n-1$, and one $a$ cancels from $a^2$; then multiply by $2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Subtract the first equation",
          "workingLatex": "(n-1)a - na = -8 - (-6) \\;\\Rightarrow\\; -a = -2",
          "explanation": "Both $(n-1)a$ and $na$ are known, so subtracting removes the $n$ term and isolates $a$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find a",
          "workingLatex": "a = 2",
          "explanation": "Dividing $-a=-2$ by $-1$ gives $a=2$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find n",
          "workingLatex": "na = -6 \\;\\Rightarrow\\; 2n = -6 \\;\\Rightarrow\\; n = -3",
          "explanation": "Substituting $a=2$ into the first equation gives $n=-3$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check the coefficient of x",
          "workingLatex": "na = (-3)(2) = -6 \\quad\\checkmark",
          "explanation": "This matches the given $-6x$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check the coefficient of x squared",
          "workingLatex": "\\dfrac{n(n-1)}{2}a^2 = \\dfrac{(-3)(-4)}{2}(2)^2 = 6\\times 4 = 24 \\quad\\checkmark",
          "explanation": "This matches the given $24x^2$, confirming the values are correct.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the values",
          "workingLatex": "a = 2, \\quad n = -3",
          "explanation": "These are the required constants.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a = 2$ and $n = -3$."
    }
  },
  {
    "id": "al.y2.pure.binomial-rational.q054",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Binomial expansion (rational powers)",
    "subtopicId": "al.y2.pure.binomial-rational",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "binomial expansion",
      "product of series",
      "range of validity"
    ],
    "questionText": "Find the first three terms, in ascending powers of $x$, in the expansion of $(1+x)^{\\frac{1}{2}}(1-2x)^{-1}$, and state the range of values of $x$ for which the expansion is valid.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Plan the method",
          "workingLatex": "(1+x)^{\\tfrac{1}{2}}(1-2x)^{-1} = \\Big[(1+x)^{\\tfrac{1}{2}}\\Big]\\Big[(1-2x)^{-1}\\Big]",
          "explanation": "To find the first three terms of a product, expand each bracket up to $x^2$, then multiply and collect powers up to $x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expand the first bracket",
          "workingLatex": "(1+x)^{\\tfrac{1}{2}} = 1 + \\tfrac{1}{2}x + \\dfrac{\\tfrac{1}{2}\\left(-\\tfrac{1}{2}\\right)}{2}x^2 + \\cdots = 1 + \\tfrac{1}{2}x - \\tfrac{1}{8}x^2 + \\cdots",
          "explanation": "Using $n=\\dfrac{1}{2}$: the $x$ coefficient is $\\dfrac{1}{2}$, and the $x^2$ coefficient is $\\dfrac{\\frac{1}{2}\\left(-\\frac{1}{2}\\right)}{2}=-\\dfrac{1}{8}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand the second bracket",
          "workingLatex": "(1-2x)^{-1} = 1 + (-1)(-2x) + \\dfrac{(-1)(-2)}{2}(-2x)^2 + \\cdots = 1 + 2x + 4x^2 + \\cdots",
          "explanation": "With $n=-1$ and the variable $-2x$: the $x$ term is $(-1)(-2x)=2x$, and the $x^2$ term is $\\dfrac{(-1)(-2)}{2}(4x^2)=4x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set up the product",
          "workingLatex": "\\left(1 + \\tfrac{1}{2}x - \\tfrac{1}{8}x^2\\right)\\left(1 + 2x + 4x^2\\right)",
          "explanation": "We now multiply the two truncated series, keeping only terms up to $x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Constant term",
          "workingLatex": "1 \\times 1 = 1",
          "explanation": "The only way to make a constant is $1\\times 1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Coefficient of x",
          "workingLatex": "1(2x) + \\tfrac{1}{2}x(1) = 2x + \\tfrac{1}{2}x = \\tfrac{5}{2}x",
          "explanation": "An $x$ term is formed by pairing a constant with an $x$, in either order, then adding: $2+\\dfrac{1}{2}=\\dfrac{5}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Coefficient of x squared",
          "workingLatex": "1(4x^2) + \\tfrac{1}{2}x(2x) + \\left(-\\tfrac{1}{8}x^2\\right)(1) = 4x^2 + x^2 - \\tfrac{1}{8}x^2",
          "explanation": "Every pairing whose powers add to $2$ contributes: $\\text{const}\\times x^2$, $x\\times x$, and $x^2\\times\\text{const}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Combine the x squared terms",
          "workingLatex": "4 + 1 - \\tfrac{1}{8} = \\tfrac{32}{8} + \\tfrac{8}{8} - \\tfrac{1}{8} = \\tfrac{39}{8}",
          "explanation": "Writing each number over $8$ makes the addition straightforward, giving $\\dfrac{39}{8}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Write the first three terms",
          "workingLatex": "(1+x)^{\\tfrac{1}{2}}(1-2x)^{-1} = 1 + \\tfrac{5}{2}x + \\tfrac{39}{8}x^2 + \\cdots",
          "explanation": "Collecting the constant and the two coefficients gives the required start of the series.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Validity of each factor",
          "workingLatex": "(1+x)^{\\tfrac{1}{2}}:\\ \\left| x \\right| < 1, \\qquad (1-2x)^{-1}:\\ \\left| 2x \\right| < 1 \\Rightarrow \\left| x \\right| < \\tfrac{1}{2}",
          "explanation": "Each expansion is valid only when its bracket's variable part is smaller than $1$ in size.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Combine the ranges",
          "workingLatex": "\\left| x \\right| < \\tfrac{1}{2}",
          "explanation": "The product is valid only where both expansions are valid, so we take the more restrictive range.",
          "diagram": null
        }
      ],
      "finalAnswer": "$1 + \\dfrac{5}{2}x + \\dfrac{39}{8}x^2 + \\cdots$, valid for $\\left| x \\right| < \\dfrac{1}{2}$."
    }
  },
  {
    "id": "al.y2.pure.binomial-rational.q055",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Binomial expansion (rational powers)",
    "subtopicId": "al.y2.pure.binomial-rational",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "binomial expansion",
      "unknown constants",
      "coefficient extraction"
    ],
    "questionText": "In the expansion of $(1+ax)^n$, the coefficient of $x$ is $-2$ and the coefficient of $x^2$ is $6$. Given that $n$ is not a positive integer, find the values of $a$ and $n$, and hence find the coefficient of $x^3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the general series up to x cubed",
          "workingLatex": "(1+ax)^n = 1 + nax + \\dfrac{n(n-1)}{2}a^2x^2 + \\dfrac{n(n-1)(n-2)}{6}a^3x^3 + \\cdots",
          "explanation": "We will need terms up to $x^3$, so we write the series that far, substituting $ax$ for the variable.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Match the coefficient of x",
          "workingLatex": "na = -2",
          "explanation": "The $x$ term is $nax$, so its coefficient $na$ equals the given $-2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Match the coefficient of x squared",
          "workingLatex": "\\dfrac{n(n-1)}{2}a^2 = 6",
          "explanation": "The $x^2$ coefficient must equal the given $6$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Divide the second equation by the first",
          "workingLatex": "\\dfrac{\\tfrac{n(n-1)}{2}a^2}{na} = \\dfrac{6}{-2} = -3 \\;\\Rightarrow\\; \\dfrac{(n-1)a}{2} = -3",
          "explanation": "Dividing removes a factor of $n$ and a factor of $a$, giving a simpler relation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "(n-1)a = -6",
          "explanation": "Multiplying both sides by $2$ clears the fraction.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Subtract the first equation",
          "workingLatex": "(n-1)a - na = -6 - (-2) \\;\\Rightarrow\\; -a = -4 \\;\\Rightarrow\\; a = 4",
          "explanation": "Subtracting the known values of $(n-1)a$ and $na$ eliminates $n$ and gives $a$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find n",
          "workingLatex": "na = -2 \\;\\Rightarrow\\; 4n = -2 \\;\\Rightarrow\\; n = -\\tfrac{1}{2}",
          "explanation": "Substituting $a=4$ into $na=-2$ gives $n=-\\dfrac{1}{2}$. This is not a positive integer, as required.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check the coefficient of x",
          "workingLatex": "na = \\left(-\\tfrac{1}{2}\\right)(4) = -2 \\quad\\checkmark",
          "explanation": "This reproduces the given $-2$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check the coefficient of x squared",
          "workingLatex": "\\dfrac{n(n-1)}{2}a^2 = \\dfrac{\\left(-\\tfrac{1}{2}\\right)\\left(-\\tfrac{3}{2}\\right)}{2}(16) = \\tfrac{3}{8}\\times 16 = 6 \\quad\\checkmark",
          "explanation": "The value $6$ is reproduced, confirming $a=4$ and $n=-\\dfrac{1}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Write the coefficient of x cubed",
          "workingLatex": "\\text{coefficient of } x^3 = \\dfrac{n(n-1)(n-2)}{6}a^3",
          "explanation": "The $x^3$ term follows the same pattern, continuing the numerator to three factors and dividing by $3!=6$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Evaluate the numerator product",
          "workingLatex": "n(n-1)(n-2) = \\left(-\\tfrac{1}{2}\\right)\\left(-\\tfrac{3}{2}\\right)\\left(-\\tfrac{5}{2}\\right) = -\\tfrac{15}{8}",
          "explanation": "The first two factors give $\\dfrac{3}{4}$, and multiplying by $-\\dfrac{5}{2}$ gives $-\\dfrac{15}{8}$ (an odd number of negatives, so the result is negative).",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Divide by 3 factorial",
          "workingLatex": "\\dfrac{-\\tfrac{15}{8}}{6} = -\\dfrac{15}{48} = -\\dfrac{5}{16}",
          "explanation": "Dividing $-\\dfrac{15}{8}$ by $6$ and cancelling gives $-\\dfrac{5}{16}$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Multiply by a cubed",
          "workingLatex": "a^3 = 4^3 = 64, \\qquad -\\dfrac{5}{16}\\times 64 = -20",
          "explanation": "The $x^3$ coefficient also carries $a^3=64$; multiplying gives $-20$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the results",
          "workingLatex": "a = 4, \\quad n = -\\tfrac{1}{2}, \\quad \\text{coefficient of } x^3 = -20",
          "explanation": "These are the required values.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a = 4$, $n = -\\dfrac{1}{2}$, and the coefficient of $x^3$ is $-20$."
    }
  },
  {
    "id": "al.y2.pure.binomial-rational.q056",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Binomial expansion (rational powers)",
    "subtopicId": "al.y2.pure.binomial-rational",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "tags": [
      "binomial expansion",
      "product of series",
      "coefficient extraction"
    ],
    "questionText": "Find the first three terms, in ascending powers of $x$, in the expansion of $(1+4x)^{\\frac{1}{2}}(1-x)^{-1}$. Hence find the coefficient of $x^3$, and state the range of values of $x$ for which the expansion is valid.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Plan the method",
          "workingLatex": "(1+4x)^{\\tfrac{1}{2}}(1-x)^{-1}",
          "explanation": "Since we also need the coefficient of $x^3$, expand each bracket up to $x^3$, then multiply and collect powers up to $x^3$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expand the first bracket up to x cubed",
          "workingLatex": "(1+4x)^{\\tfrac{1}{2}} = 1 + \\tfrac{1}{2}(4x) + \\dfrac{\\tfrac{1}{2}\\left(-\\tfrac{1}{2}\\right)}{2}(4x)^2 + \\dfrac{\\tfrac{1}{2}\\left(-\\tfrac{1}{2}\\right)\\left(-\\tfrac{3}{2}\\right)}{6}(4x)^3 + \\cdots",
          "explanation": "Using $n=\\dfrac{1}{2}$ and substituting $4x$, each term picks up a power of $4$ from $(4x)^k$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify the first bracket",
          "workingLatex": "= 1 + 2x - 2x^2 + 4x^3 + \\cdots",
          "explanation": "The coefficients work out as $\\dfrac{1}{2}\\times4=2$, then $-\\dfrac{1}{8}\\times16=-2$, and finally $\\dfrac{1}{16}\\times64=4$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Expand the second bracket",
          "workingLatex": "(1-x)^{-1} = 1 + x + x^2 + x^3 + \\cdots",
          "explanation": "With $n=-1$ and variable $-x$, this is the familiar series $\\dfrac{1}{1-x}=1+x+x^2+x^3+\\cdots$; every coefficient is $1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set up the product",
          "workingLatex": "\\left(1 + 2x - 2x^2 + 4x^3\\right)\\left(1 + x + x^2 + x^3\\right)",
          "explanation": "We multiply the two truncated series, keeping terms up to $x^3$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Constant term",
          "workingLatex": "1 \\times 1 = 1",
          "explanation": "Only $1\\times 1$ gives a constant.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Coefficient of x",
          "workingLatex": "1(1) + 2(1) = 3",
          "explanation": "Pair each term of the first bracket with a term of the second whose powers add to $1$: $1\\times x$ and $2x\\times 1$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Coefficient of x squared",
          "workingLatex": "1(1) + 2(1) + (-2)(1) = 1",
          "explanation": "The pairings giving $x^2$ are $1\\times x^2$, $2x\\times x$, and $-2x^2\\times 1$; their coefficients sum to $1$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Coefficient of x cubed",
          "workingLatex": "1(1) + 2(1) + (-2)(1) + 4(1) = 5",
          "explanation": "The pairings giving $x^3$ are $1\\times x^3$, $2x\\times x^2$, $-2x^2\\times x$, and $4x^3\\times 1$; since the second bracket's coefficients are all $1$, we just add $1+2-2+4=5$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Write the first three terms",
          "workingLatex": "1 + 3x + x^2 + \\cdots",
          "explanation": "Collecting the constant and the $x$ and $x^2$ coefficients gives the required start of the series.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the coefficient of x cubed",
          "workingLatex": "\\text{coefficient of } x^3 = 5",
          "explanation": "This is the value found in step 9.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Validity of each factor",
          "workingLatex": "(1+4x)^{\\tfrac{1}{2}}:\\ \\left| 4x \\right| < 1 \\Rightarrow \\left| x \\right| < \\tfrac{1}{4}, \\qquad (1-x)^{-1}:\\ \\left| x \\right| < 1",
          "explanation": "Each expansion converges only while its variable part is smaller than $1$ in magnitude.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Combine the ranges",
          "workingLatex": "\\left| x \\right| < \\tfrac{1}{4}",
          "explanation": "The product is valid only where both series converge, so we take the more restrictive range $\\left|x\\right|<\\dfrac{1}{4}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$1 + 3x + x^2 + \\cdots$; the coefficient of $x^3$ is $5$; valid for $\\left| x \\right| < \\dfrac{1}{4}$."
    }
  },
  {
    "id": "al.y2.pure.binomial-rational.q057",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Binomial expansion (rational powers)",
    "subtopicId": "al.y2.pure.binomial-rational",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "value",
    "tags": [
      "binomial expansion",
      "a plus bx",
      "unknown constants"
    ],
    "questionText": "The first three terms, in ascending powers of $x$, in the expansion of $(a+bx)^n$ are $2 + \\dfrac{3}{4}x - \\dfrac{9}{64}x^2$, where $a>0$. Find the values of $a$, $b$ and $n$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factor out a to the power n",
          "workingLatex": "(a+bx)^n = a^n\\left(1 + \\dfrac{b}{a}x\\right)^n",
          "explanation": "The binomial series only applies to a bracket that starts with $1$, so we take out $a^n$ first, leaving $\\left(1+\\dfrac{b}{a}x\\right)^n$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the expansion",
          "workingLatex": "= a^n\\left[1 + n\\dfrac{b}{a}x + \\dfrac{n(n-1)}{2}\\dfrac{b^2}{a^2}x^2 + \\cdots\\right]",
          "explanation": "Applying the series to $\\left(1+\\dfrac{b}{a}x\\right)^n$ and keeping the outer factor $a^n$ gives the terms up to $x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Match the constant term",
          "workingLatex": "a^n = 2",
          "explanation": "The constant term of the expansion is $a^n$, which must equal the given constant $2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Match the coefficient of x",
          "workingLatex": "a^n\\, n\\dfrac{b}{a} = \\dfrac{3}{4}",
          "explanation": "The $x$ coefficient is $a^n n\\dfrac{b}{a}$, set equal to $\\dfrac{3}{4}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Match the coefficient of x squared",
          "workingLatex": "a^n\\,\\dfrac{n(n-1)}{2}\\dfrac{b^2}{a^2} = -\\dfrac{9}{64}",
          "explanation": "The $x^2$ coefficient is $a^n\\dfrac{n(n-1)}{2}\\dfrac{b^2}{a^2}$, set equal to $-\\dfrac{9}{64}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Divide the x coefficient by the constant",
          "workingLatex": "\\dfrac{a^n n\\frac{b}{a}}{a^n} = \\dfrac{3/4}{2} \\;\\Rightarrow\\; n\\dfrac{b}{a} = \\dfrac{3}{8}",
          "explanation": "Dividing by the constant term cancels the awkward $a^n$, leaving a neat relation between $n$ and $\\dfrac{b}{a}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Divide the x squared coefficient by the x coefficient",
          "workingLatex": "\\dfrac{a^n\\frac{n(n-1)}{2}\\frac{b^2}{a^2}}{a^n n\\frac{b}{a}} = \\dfrac{-9/64}{3/4} \\;\\Rightarrow\\; \\dfrac{(n-1)}{2}\\dfrac{b}{a} = -\\dfrac{3}{16}",
          "explanation": "Dividing consecutive coefficients cancels $a^n$ and one factor of $n\\dfrac{b}{a}$. Note $\\dfrac{-9/64}{3/4}=-\\dfrac{9}{64}\\times\\dfrac{4}{3}=-\\dfrac{3}{16}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Simplify the second relation",
          "workingLatex": "(n-1)\\dfrac{b}{a} = -\\dfrac{3}{8}",
          "explanation": "Multiplying both sides by $2$ gives $(n-1)\\dfrac{b}{a}=-\\dfrac{3}{8}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Subtract to find b over a",
          "workingLatex": "n\\dfrac{b}{a} - (n-1)\\dfrac{b}{a} = \\dfrac{3}{8} - \\left(-\\dfrac{3}{8}\\right) \\;\\Rightarrow\\; \\dfrac{b}{a} = \\dfrac{3}{4}",
          "explanation": "Subtracting the two relations removes $n$, since $n-(n-1)=1$, leaving $\\dfrac{b}{a}$ directly.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Find n",
          "workingLatex": "n\\dfrac{b}{a} = \\dfrac{3}{8} \\;\\Rightarrow\\; n\\cdot\\dfrac{3}{4} = \\dfrac{3}{8} \\;\\Rightarrow\\; n = \\dfrac{1}{2}",
          "explanation": "Substituting $\\dfrac{b}{a}=\\dfrac{3}{4}$ into the first relation gives $n=\\dfrac{1}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Find a",
          "workingLatex": "a^n = 2 \\;\\Rightarrow\\; a^{1/2} = 2 \\;\\Rightarrow\\; a = 4",
          "explanation": "Since $a^{1/2}=\\sqrt{a}=2$, squaring gives $a=4$. We take the positive root because $a>0$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Find b",
          "workingLatex": "\\dfrac{b}{a} = \\dfrac{3}{4} \\;\\Rightarrow\\; b = \\dfrac{3}{4}\\times 4 = 3",
          "explanation": "With $a=4$ known, $\\dfrac{b}{a}=\\dfrac{3}{4}$ gives $b=3$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Check the constant term",
          "workingLatex": "a^n = 4^{1/2} = 2 \\quad\\checkmark",
          "explanation": "This matches the given constant $2$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Check the coefficient of x",
          "workingLatex": "a^n n\\dfrac{b}{a} = 2\\times\\tfrac{1}{2}\\times\\tfrac{3}{4} = \\dfrac{3}{4} \\quad\\checkmark",
          "explanation": "This matches the given coefficient $\\dfrac{3}{4}$.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Check the coefficient of x squared",
          "workingLatex": "a^n\\dfrac{n(n-1)}{2}\\dfrac{b^2}{a^2} = 2\\times\\left(-\\tfrac{1}{8}\\right)\\times\\dfrac{9}{16} = -\\dfrac{9}{64} \\quad\\checkmark",
          "explanation": "With $\\dfrac{n(n-1)}{2}=-\\dfrac{1}{8}$ and $\\dfrac{b^2}{a^2}=\\dfrac{9}{16}$, the product is $-\\dfrac{9}{64}$, matching the given value.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "State the values",
          "workingLatex": "a = 4, \\quad b = 3, \\quad n = \\tfrac{1}{2}",
          "explanation": "All three constants are found and verified.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a = 4$, $b = 3$ and $n = \\dfrac{1}{2}$."
    }
  },
  {
    "id": "al.y2.pure.binomial-rational.q058",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Binomial expansion (rational powers)",
    "subtopicId": "al.y2.pure.binomial-rational",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "binomial expansion",
      "partial fractions",
      "range of validity"
    ],
    "questionText": "Given that $f(x) = \\dfrac{3}{(1-2x)(1+x)}$, express $f(x)$ in partial fractions, and hence find the coefficient of $x^3$ in the expansion of $f(x)$ in ascending powers of $x$. State the range of values of $x$ for which the expansion is valid.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up partial fractions",
          "workingLatex": "\\dfrac{3}{(1-2x)(1+x)} \\equiv \\dfrac{A}{1-2x} + \\dfrac{B}{1+x}",
          "explanation": "A product of two distinct linear brackets splits into two simpler fractions; finding $A$ and $B$ lets us expand each part separately.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Clear the denominators",
          "workingLatex": "3 = A(1+x) + B(1-2x)",
          "explanation": "Multiplying both sides by $(1-2x)(1+x)$ removes the fractions.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find B",
          "workingLatex": "x = -1:\\quad 3 = B\\big(1-2(-1)\\big) = 3B \\;\\Rightarrow\\; B = 1",
          "explanation": "Substituting $x=-1$ makes the $A$ term vanish, isolating $B$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find A",
          "workingLatex": "x = \\tfrac{1}{2}:\\quad 3 = A\\left(1+\\tfrac{1}{2}\\right) = \\tfrac{3}{2}A \\;\\Rightarrow\\; A = 2",
          "explanation": "Substituting $x=\\dfrac{1}{2}$ makes the $B$ term vanish, isolating $A$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write f(x) in partial fractions",
          "workingLatex": "f(x) = \\dfrac{2}{1-2x} + \\dfrac{1}{1+x}",
          "explanation": "These are the two pieces we will each expand as a binomial series.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Expand the first fraction",
          "workingLatex": "\\dfrac{2}{1-2x} = 2(1-2x)^{-1} = 2\\left(1 + 2x + 4x^2 + 8x^3 + \\cdots\\right) = 2 + 4x + 8x^2 + 16x^3 + \\cdots",
          "explanation": "With $n=-1$ and variable $-2x$, the coefficient of $x^r$ in $(1-2x)^{-1}$ is $2^r$; multiplying by the $2$ out front doubles each.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Expand the second fraction",
          "workingLatex": "\\dfrac{1}{1+x} = (1+x)^{-1} = 1 - x + x^2 - x^3 + \\cdots",
          "explanation": "With $n=-1$, the coefficients alternate in sign: $1,-1,1,-1,\\dots$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Add the two series",
          "workingLatex": "f(x) = (2+1) + (4-1)x + (8+1)x^2 + (16-1)x^3 + \\cdots = 3 + 3x + 9x^2 + 15x^3 + \\cdots",
          "explanation": "Adding the fractions means adding their series term by term.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Read off the coefficient of x cubed",
          "workingLatex": "\\text{coefficient of } x^3 = 16 + (-1) = 15",
          "explanation": "From the first series the $x^3$ coefficient is $16$ and from the second it is $-1$; together they give $15$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Validity of the first expansion",
          "workingLatex": "(1-2x)^{-1}:\\ \\left| 2x \\right| < 1 \\Rightarrow \\left| x \\right| < \\tfrac{1}{2}",
          "explanation": "This series converges only when $\\left|2x\\right|<1$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Validity of the second expansion",
          "workingLatex": "(1+x)^{-1}:\\ \\left| x \\right| < 1",
          "explanation": "This series converges only when $\\left|x\\right|<1$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Combine the ranges",
          "workingLatex": "\\left| x \\right| < \\tfrac{1}{2}",
          "explanation": "The full expansion needs both series to converge, so the valid range is the more restrictive $\\left|x\\right|<\\dfrac{1}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the answer",
          "workingLatex": "\\text{coefficient of } x^3 = 15, \\quad \\text{valid for } \\left| x \\right| < \\tfrac{1}{2}",
          "explanation": "This is the required coefficient together with the range of validity.",
          "diagram": null
        }
      ],
      "finalAnswer": "$f(x) = \\dfrac{2}{1-2x} + \\dfrac{1}{1+x}$; the coefficient of $x^3$ is $15$, valid for $\\left| x \\right| < \\dfrac{1}{2}$."
    }
  },
  {
    "id": "al.y2.pure.binomial-rational.q059",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Binomial expansion (rational powers)",
    "subtopicId": "al.y2.pure.binomial-rational",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "binomial expansion",
      "product of series",
      "range of validity"
    ],
    "questionText": "Find the first three terms, in ascending powers of $x$, in the expansion of $\\dfrac{(1+x)^{\\frac{1}{2}}}{1-x}$, and state the range of values of $x$ for which the expansion is valid.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rewrite the division as a product",
          "workingLatex": "\\dfrac{(1+x)^{\\tfrac{1}{2}}}{1-x} = (1+x)^{\\tfrac{1}{2}}(1-x)^{-1}",
          "explanation": "Dividing by $(1-x)$ is the same as multiplying by $(1-x)^{-1}$, which we can expand as a binomial series.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Plan the method",
          "workingLatex": "\\text{expand each factor up to } x^2, \\text{ then multiply}",
          "explanation": "For the first three terms of a product, we only need each factor expanded as far as $x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Coefficient of x in the first factor",
          "workingLatex": "\\text{term in } x:\\ \\tfrac{1}{2}x",
          "explanation": "For $(1+x)^{1/2}$ with $n=\\dfrac{1}{2}$, the $x$ coefficient is simply $n=\\dfrac{1}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Coefficient of x squared in the first factor",
          "workingLatex": "\\dfrac{\\tfrac{1}{2}\\left(-\\tfrac{1}{2}\\right)}{2} = -\\tfrac{1}{8}",
          "explanation": "Substituting $n=\\dfrac{1}{2}$ gives $\\dfrac{1}{2}\\times\\left(-\\dfrac{1}{2}\\right)=-\\dfrac{1}{4}$ over $2$, which is $-\\dfrac{1}{8}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the first factor",
          "workingLatex": "(1+x)^{\\tfrac{1}{2}} = 1 + \\tfrac{1}{2}x - \\tfrac{1}{8}x^2 + \\cdots",
          "explanation": "Collecting the constant and the two coefficients gives the expansion of the numerator.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Expand the second factor",
          "workingLatex": "(1-x)^{-1} = 1 + x + x^2 + \\cdots",
          "explanation": "With $n=-1$ and variable $-x$, this is the standard series $\\dfrac{1}{1-x}=1+x+x^2+\\cdots$; every coefficient is $1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Set up the product",
          "workingLatex": "\\left(1 + \\tfrac{1}{2}x - \\tfrac{1}{8}x^2\\right)\\left(1 + x + x^2\\right)",
          "explanation": "We multiply the two truncated series and keep terms up to $x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Constant term",
          "workingLatex": "1 \\times 1 = 1",
          "explanation": "Only $1\\times 1$ produces a constant.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Coefficient of x",
          "workingLatex": "\\tfrac{1}{2}(1) + 1(1) = \\tfrac{1}{2} + 1 = \\tfrac{3}{2}",
          "explanation": "The $x$ term comes from $\\dfrac{1}{2}x\\times 1$ and $1\\times x$; adding gives $\\dfrac{3}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Coefficient of x squared",
          "workingLatex": "-\\tfrac{1}{8}(1) + \\tfrac{1}{2}(1) + 1(1) = -\\tfrac{1}{8} + \\tfrac{1}{2} + 1",
          "explanation": "The pairings giving $x^2$ are $-\\dfrac{1}{8}x^2\\times 1$, $\\dfrac{1}{2}x\\times x$, and $1\\times x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Combine the x squared terms",
          "workingLatex": "-\\tfrac{1}{8} + \\tfrac{4}{8} + \\tfrac{8}{8} = \\tfrac{11}{8}",
          "explanation": "Writing everything over $8$ gives $\\dfrac{-1+4+8}{8}=\\dfrac{11}{8}$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Write the first three terms",
          "workingLatex": "1 + \\tfrac{3}{2}x + \\tfrac{11}{8}x^2 + \\cdots",
          "explanation": "Collecting the results gives the start of the series.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the range of validity",
          "workingLatex": "(1+x)^{\\tfrac{1}{2}}:\\ \\left| x \\right| < 1, \\quad (1-x)^{-1}:\\ \\left| x \\right| < 1 \\;\\Rightarrow\\; \\left| x \\right| < 1",
          "explanation": "Both factors are valid for $\\left|x\\right|<1$, so their product is too; the ranges coincide.",
          "diagram": null
        }
      ],
      "finalAnswer": "$1 + \\dfrac{3}{2}x + \\dfrac{11}{8}x^2 + \\cdots$, valid for $\\left| x \\right| < 1$."
    }
  },
  {
    "id": "al.y2.pure.binomial-rational.q060",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Binomial expansion (rational powers)",
    "subtopicId": "al.y2.pure.binomial-rational",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "binomial expansion",
      "substitution",
      "range of validity"
    ],
    "questionText": "By writing $\\dfrac{1}{\\sqrt{1-2x^2}}$ as $(1-2x^2)^{-\\frac{1}{2}}$ and using the substitution $u=-2x^2$ in the expansion of $(1+u)^{-\\frac{1}{2}}$, find the first three non-zero terms, in ascending powers of $x$, in the series expansion of $\\dfrac{1}{\\sqrt{1-2x^2}}$. State the range of values of $x$ for which the expansion is valid.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rewrite with a rational index",
          "workingLatex": "\\dfrac{1}{\\sqrt{1-2x^2}} = (1-2x^2)^{-\\tfrac{1}{2}}",
          "explanation": "A reciprocal square root is a power of $-\\dfrac{1}{2}$, which lets us use the binomial series.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the power and the substitution",
          "workingLatex": "n = -\\tfrac{1}{2}, \\qquad u = -2x^2",
          "explanation": "Comparing $(1-2x^2)^{-1/2}$ with $(1+u)^n$, the power is $n=-\\dfrac{1}{2}$ and the variable part is $u=-2x^2$; we first expand in $u$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the series in u",
          "workingLatex": "(1+u)^{-\\tfrac{1}{2}} = 1 + nu + \\dfrac{n(n-1)}{2}u^2 + \\cdots",
          "explanation": "This is the standard binomial series in a single variable $u$; we will substitute for $u$ once the coefficients are simplified.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the u coefficient",
          "workingLatex": "n = -\\tfrac{1}{2}",
          "explanation": "The coefficient of $u$ is just $n=-\\dfrac{1}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the u squared coefficient",
          "workingLatex": "\\dfrac{n(n-1)}{2} = \\dfrac{\\left(-\\tfrac{1}{2}\\right)\\left(-\\tfrac{3}{2}\\right)}{2} = \\dfrac{\\tfrac{3}{4}}{2} = \\tfrac{3}{8}",
          "explanation": "With $n=-\\dfrac{1}{2}$, the product $\\left(-\\dfrac{1}{2}\\right)\\left(-\\dfrac{3}{2}\\right)=\\dfrac{3}{4}$, and dividing by $2$ gives $\\dfrac{3}{8}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the simplified series in u",
          "workingLatex": "(1+u)^{-\\tfrac{1}{2}} = 1 - \\tfrac{1}{2}u + \\tfrac{3}{8}u^2 + \\cdots",
          "explanation": "These are the first three terms of the expansion written in terms of $u$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Apply the substitution",
          "workingLatex": "u = -2x^2",
          "explanation": "The given function matches $(1+u)^{-1/2}$ when $u=-2x^2$, so we replace $u$ by $-2x^2$ in each term.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Constant term",
          "workingLatex": "1",
          "explanation": "The constant term is unaffected by the substitution.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Term from minus a half u",
          "workingLatex": "-\\tfrac{1}{2}u = -\\tfrac{1}{2}(-2x^2) = x^2",
          "explanation": "Substituting $u=-2x^2$ into $-\\dfrac{1}{2}u$ gives $+x^2$, since the two minus signs cancel.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Term from three eighths u squared",
          "workingLatex": "\\tfrac{3}{8}u^2 = \\tfrac{3}{8}(-2x^2)^2 = \\tfrac{3}{8}(4x^4) = \\tfrac{3}{2}x^4",
          "explanation": "Squaring $-2x^2$ gives $4x^4$, and $\\dfrac{3}{8}\\times 4=\\dfrac{3}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Write the first three non-zero terms",
          "workingLatex": "(1-2x^2)^{-\\tfrac{1}{2}} = 1 + x^2 + \\tfrac{3}{2}x^4 + \\cdots",
          "explanation": "The substitution turns the series in $u$ into a series in even powers of $x$; the first three non-zero terms are $1$, $x^2$ and $\\dfrac{3}{2}x^4$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Set up the validity condition",
          "workingLatex": "\\left| u \\right| < 1 \\;\\Rightarrow\\; \\left| -2x^2 \\right| < 1",
          "explanation": "The series for $(1+u)^{-1/2}$ is valid for $\\left|u\\right|<1$; we translate this back into a condition on $x$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Simplify the inequality",
          "workingLatex": "2x^2 < 1 \\;\\Rightarrow\\; x^2 < \\tfrac{1}{2}",
          "explanation": "Since $\\left|-2x^2\\right|=2x^2$, the condition becomes $2x^2<1$, i.e. $x^2<\\dfrac{1}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Take square roots",
          "workingLatex": "\\left| x \\right| < \\dfrac{1}{\\sqrt{2}}",
          "explanation": "Taking the positive square root of $x^2<\\dfrac{1}{2}$ gives $\\left|x\\right|<\\dfrac{1}{\\sqrt{2}}$.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "State the answer",
          "workingLatex": "1 + x^2 + \\tfrac{3}{2}x^4 + \\cdots, \\quad \\left| x \\right| < \\dfrac{1}{\\sqrt{2}}",
          "explanation": "This is the required series together with its range of validity.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{1}{\\sqrt{1-2x^2}} = 1 + x^2 + \\dfrac{3}{2}x^4 + \\cdots$, valid for $\\left| x \\right| < \\dfrac{1}{\\sqrt{2}}$."
    }
  },
  {
    "id": "al.y2.pure.binomial-rational.q061",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Binomial expansion (rational powers)",
    "subtopicId": "al.y2.pure.binomial-rational",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "binomial expansion",
      "product of expansions",
      "coefficient"
    ],
    "questionText": "Find the coefficient of $x^3$ in the expansion of $(1-x)^{-2}(1+2x)^{-1}$ in ascending powers of $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Plan the calculation",
          "workingLatex": "\\left(1-x\\right)^{-2}\\left(1+2x\\right)^{-1}",
          "explanation": "To pick out a single coefficient from a product, expand each factor far enough (here up to $x^3$) and then collect every way the two powers can multiply together to give $x^3$. We do not need any terms beyond $x^3$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the general binomial series",
          "workingLatex": "\\left(1+u\\right)^{n} = 1 + nu + \\dfrac{n(n-1)}{2!}u^2 + \\dfrac{n(n-1)(n-2)}{3!}u^3 + \\cdots",
          "explanation": "For rational powers the binomial theorem is an infinite series; each new coefficient continues the pattern $n$, $n(n-1)$, $n(n-1)(n-2)$ over the matching factorial. We apply it to each bracket in turn.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand the first factor to x^3",
          "workingLatex": "\\left(1-x\\right)^{-2} = 1 + (-2)(-x) + \\dfrac{(-2)(-3)}{2}(-x)^2 + \\dfrac{(-2)(-3)(-4)}{6}(-x)^3 = 1 + 2x + 3x^2 + 4x^3 + \\cdots",
          "explanation": "Here $n=-2$ and $u=-x$. Each pair of minus signs (one from $n$ being negative, one from $u=-x$) cancels, so every coefficient comes out positive, giving the tidy pattern $1,2,3,4$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Expand the second factor to x^3",
          "workingLatex": "\\left(1+2x\\right)^{-1} = 1 + (-1)(2x) + \\dfrac{(-1)(-2)}{2}(2x)^2 + \\dfrac{(-1)(-2)(-3)}{6}(2x)^3 = 1 - 2x + 4x^2 - 8x^3 + \\cdots",
          "explanation": "Now $n=-1$ and $u=2x$. Squaring and cubing $2x$ brings in the powers of $2$, so the coefficients grow as $1,-2,4,-8$ with alternating signs.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Identify which products give x^3",
          "workingLatex": "\\left[x^3\\right]:\\quad a_0 b_3 + a_1 b_2 + a_2 b_1 + a_3 b_0",
          "explanation": "Writing the first factor's coefficients as $a_0,a_1,a_2,a_3 = 1,2,3,4$ and the second's as $b_0,b_1,b_2,b_3 = 1,-2,4,-8$, an $x^3$ term appears whenever the two indices add to $3$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Multiply the matching pairs",
          "workingLatex": "(1)(-8) + (2)(4) + (3)(-2) + (4)(1)",
          "explanation": "Substituting the coefficients into each of the four pairings gives the individual contributions to the $x^3$ term.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate each product",
          "workingLatex": "= -8 + 8 - 6 + 4",
          "explanation": "Working out each product separately keeps the signs under control before we add them.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Add the contributions",
          "workingLatex": "= -2",
          "explanation": "The positive and negative parts almost cancel, leaving $-2$ as the total.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the coefficient",
          "workingLatex": "\\left[x^3\\right]\\ \\left(1-x\\right)^{-2}\\left(1+2x\\right)^{-1} = -2",
          "explanation": "Collecting the four pairings gives the required coefficient of $x^3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The coefficient of $x^3$ is $-2$."
    }
  },
  {
    "id": "al.y2.pure.binomial-rational.q062",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Binomial expansion (rational powers)",
    "subtopicId": "al.y2.pure.binomial-rational",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "binomial expansion",
      "general term",
      "negative index"
    ],
    "questionText": "Find, in its simplest form, the general term (the coefficient of $x^r$) in the expansion of $(1+x)^{-2}$ in ascending powers of $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the general binomial series",
          "workingLatex": "\\left(1+x\\right)^{n} = 1 + nx + \\dfrac{n(n-1)}{2!}x^2 + \\cdots + \\dfrac{n(n-1)(n-2)\\cdots(n-r+1)}{r!}x^r + \\cdots",
          "explanation": "The term in $x^r$ has a numerator that is a falling product starting at $n$ and containing exactly $r$ factors, all divided by $r!$. Finding a general formula just means simplifying that expression.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify n and the general coefficient",
          "workingLatex": "n = -2, \\qquad \\left[x^r\\right] = \\dfrac{n(n-1)(n-2)\\cdots(n-r+1)}{r!}",
          "explanation": "Comparing $(1+x)^{-2}$ with $(1+x)^n$ we substitute $n=-2$ into the general coefficient, so every factor in the numerator drops by one starting from $-2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write out the numerator with n = -2",
          "workingLatex": "n(n-1)\\cdots(n-r+1) = (-2)(-3)(-4)\\cdots(-(r+1))",
          "explanation": "Starting at $-2$ and stepping down one at a time for $r$ factors, the last factor is $-2-(r-1) = -(r+1)$. So the numerator runs from $-2$ down to $-(r+1)$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Extract the sign",
          "workingLatex": "= (-1)^r \\left[\\,2 \\cdot 3 \\cdot 4 \\cdots (r+1)\\,\\right]",
          "explanation": "There are $r$ negative factors, so factoring out a minus sign from each contributes $(-1)^r$, leaving the positive product $2 \\cdot 3 \\cdots (r+1)$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the positive product",
          "workingLatex": "2 \\cdot 3 \\cdot 4 \\cdots (r+1) = \\dfrac{(r+1)!}{1!} = (r+1)!",
          "explanation": "The product of the whole numbers from $2$ up to $r+1$ is just $(r+1)!$ with the factor $1$ removed, and removing a factor of $1$ changes nothing, so it equals $(r+1)!$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine numerator over r!",
          "workingLatex": "\\left[x^r\\right] = \\dfrac{(-1)^r (r+1)!}{r!}",
          "explanation": "Putting the simplified numerator back over the $r!$ gives the coefficient as a ratio of factorials, ready to cancel.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Cancel the factorials",
          "workingLatex": "\\dfrac{(r+1)!}{r!} = r+1 \\;\\Rightarrow\\; \\left[x^r\\right] = (-1)^r (r+1)",
          "explanation": "Since $(r+1)! = (r+1)\\cdot r!$, the $r!$ cancels top and bottom, leaving the neat coefficient $(-1)^r(r+1)$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check against the first few terms",
          "workingLatex": "r=0:1,\\ \\ r=1:-2,\\ \\ r=2:3,\\ \\ r=3:-4 \\;\\Rightarrow\\; 1 - 2x + 3x^2 - 4x^3 + \\cdots",
          "explanation": "Testing $r=0,1,2,3$ reproduces the familiar expansion $1-2x+3x^2-4x^3+\\cdots$, confirming the formula is correct.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the general term",
          "workingLatex": "\\left[x^r\\right] = (-1)^r (r+1), \\qquad \\text{general term } (-1)^r (r+1)x^r",
          "explanation": "This single expression gives the coefficient of every power of $x$ in one formula.",
          "diagram": null
        }
      ],
      "finalAnswer": "The coefficient of $x^r$ is $(-1)^r(r+1)$, so the general term is $(-1)^r(r+1)x^r$ (valid for $\\left| x \\right| < 1$)."
    }
  },
  {
    "id": "al.y2.pure.binomial-rational.q063",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Binomial expansion (rational powers)",
    "subtopicId": "al.y2.pure.binomial-rational",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "tags": [
      "partial fractions",
      "binomial expansion",
      "general term",
      "validity"
    ],
    "questionText": "Express $\\dfrac{1}{(1-x)(1-2x)}$ in partial fractions. Hence find the general term (the coefficient of $x^n$) in its expansion in ascending powers of $x$, and state the range of values of $x$ for which the expansion is valid.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set out the strategy",
          "workingLatex": "\\dfrac{1}{(1-x)(1-2x)} = \\dfrac{A}{1-x} + \\dfrac{B}{1-2x}",
          "explanation": "Each linear bracket has a known series expansion, but the product does not. Splitting the fraction into simple pieces lets us expand each piece separately and then add the series.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Clear the denominators",
          "workingLatex": "1 = A(1-2x) + B(1-x)",
          "explanation": "Multiplying both sides by $(1-x)(1-2x)$ removes the fractions, leaving an identity that must hold for every value of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find A by substituting x = 1",
          "workingLatex": "x=1:\\quad 1 = A(1-2) = -A \\;\\Rightarrow\\; A = -1",
          "explanation": "Choosing $x=1$ makes the $B$ term vanish, isolating $A$ instantly.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find B by substituting x = 1/2",
          "workingLatex": "x=\\tfrac{1}{2}:\\quad 1 = B\\left(1-\\tfrac{1}{2}\\right) = \\tfrac{1}{2}B \\;\\Rightarrow\\; B = 2",
          "explanation": "Choosing $x=\\tfrac{1}{2}$ kills the $A$ term, so $B$ drops out directly.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the decomposition",
          "workingLatex": "\\dfrac{1}{(1-x)(1-2x)} = \\dfrac{-1}{1-x} + \\dfrac{2}{1-2x}",
          "explanation": "With $A=-1$ and $B=2$ the awkward product becomes a sum of two standard fractions, each easy to expand.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Recall the standard series",
          "workingLatex": "\\dfrac{1}{1-u} = 1 + u + u^2 + \\cdots = \\sum_{n=0}^{\\infty} u^n",
          "explanation": "The expansion of $(1-u)^{-1}$ has every coefficient equal to $1$; substituting the right $u$ into each fraction gives its general term.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Expand the first fraction",
          "workingLatex": "\\dfrac{-1}{1-x} = -\\sum_{n=0}^{\\infty} x^n \\;\\Rightarrow\\; \\left[x^n\\right] = -1",
          "explanation": "Here $u=x$, so each coefficient is $1$; the leading $-1$ makes every coefficient of this piece equal to $-1$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Expand the second fraction",
          "workingLatex": "\\dfrac{2}{1-2x} = 2\\sum_{n=0}^{\\infty} (2x)^n = \\sum_{n=0}^{\\infty} 2^{n+1} x^n \\;\\Rightarrow\\; \\left[x^n\\right] = 2^{n+1}",
          "explanation": "With $u=2x$ each coefficient is $2^n$; multiplying by the outside $2$ gives $2 \\cdot 2^n = 2^{n+1}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Add the two general terms",
          "workingLatex": "\\left[x^n\\right] = 2^{n+1} + (-1) = 2^{n+1} - 1",
          "explanation": "Since the full expansion is the sum of the two series, the coefficient of $x^n$ is simply the sum of the two individual coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check against the first few terms",
          "workingLatex": "n=0:1,\\ n=1:3,\\ n=2:7,\\ n=3:15 \\;\\Rightarrow\\; 1 + 3x + 7x^2 + 15x^3 + \\cdots",
          "explanation": "Testing $n=0,1,2,3$ gives $1,3,7,15$, matching a direct multiplication of the two series and confirming the formula.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the validity of each piece",
          "workingLatex": "\\left| x \\right| < 1 \\quad \\text{and} \\quad \\left| 2x \\right| < 1 \\;\\Rightarrow\\; \\left| x \\right| < \\dfrac{1}{2}",
          "explanation": "Each series only converges when its bracket stays small: the first needs $\\left| x \\right| < 1$ and the second needs $\\left| 2x \\right| < 1$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Take the intersection",
          "workingLatex": "\\left| x \\right| < 1 \\ \\cap\\ \\left| x \\right| < \\dfrac{1}{2} \\;=\\; \\left| x \\right| < \\dfrac{1}{2}",
          "explanation": "Both series must converge at once, so the overall range is the more restrictive of the two conditions.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the general term and validity",
          "workingLatex": "\\left[x^n\\right] = 2^{n+1} - 1, \\qquad \\left| x \\right| < \\dfrac{1}{2}",
          "explanation": "This gives the coefficient of every power in one formula together with the region where the expansion is meaningful.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{1}{(1-x)(1-2x)} = \\dfrac{-1}{1-x} + \\dfrac{2}{1-2x}$; the coefficient of $x^n$ is $2^{n+1}-1$, so the general term is $\\left(2^{n+1}-1\\right)x^n$, valid for $\\left| x \\right| < \\dfrac{1}{2}$."
    }
  },
  {
    "id": "al.y2.pure.binomial-rational.q064",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Binomial expansion (rational powers)",
    "subtopicId": "al.y2.pure.binomial-rational",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "description",
    "tags": [
      "binomial expansion",
      "geometric series",
      "proof",
      "validity"
    ],
    "questionText": "Show that the binomial expansion of $(1-x)^{-1}$ produces the geometric series $1 + x + x^2 + x^3 + \\cdots$, and explain how this result is connected to the sum to infinity of a geometric series. State the range of values of $x$ for which it is valid.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State what is to be shown",
          "workingLatex": "\\left(1-x\\right)^{-1} \\overset{?}{=} 1 + x + x^2 + x^3 + \\cdots",
          "explanation": "We will expand $(1-x)^{-1}$ with the binomial theorem, simplify the general coefficient, and see that it equals $1$ for every power, which is exactly the geometric series.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write in binomial form",
          "workingLatex": "\\left(1-x\\right)^{-1} = \\left(1 + (-x)\\right)^{n}, \\quad n = -1",
          "explanation": "Rewriting $1-x$ as $1+(-x)$ lets us apply the standard form $(1+u)^n$ with $u=-x$ and $n=-1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the general coefficient of u^r",
          "workingLatex": "\\left[u^r\\right] = \\dfrac{n(n-1)\\cdots(n-r+1)}{r!} = \\dfrac{(-1)(-2)(-3)\\cdots(-r)}{r!}",
          "explanation": "Substituting $n=-1$, the numerator steps down from $-1$ through $r$ consecutive negative integers, ending at $-r$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify that coefficient",
          "workingLatex": "\\dfrac{(-1)(-2)\\cdots(-r)}{r!} = \\dfrac{(-1)^r\\, r!}{r!} = (-1)^r",
          "explanation": "The $r$ negative factors contribute $(-1)^r$, and their magnitudes $1\\cdot 2\\cdots r = r!$ cancel the $r!$ underneath, leaving just $(-1)^r$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Multiply by (-x)^r",
          "workingLatex": "\\left[x^r\\right] = (-1)^r \\cdot (-x)^r / x^r \\cdot x^r = (-1)^r (-1)^r x^r = x^r",
          "explanation": "The term is $(-1)^r(-x)^r$. Writing $(-x)^r = (-1)^r x^r$ produces $(-1)^r(-1)^r x^r = (-1)^{2r}x^r = x^r$, since $(-1)^{2r}=1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Read off every coefficient",
          "workingLatex": "\\left(1-x\\right)^{-1} = \\sum_{r=0}^{\\infty} x^r = 1 + x + x^2 + x^3 + \\cdots",
          "explanation": "Because the coefficient of $x^r$ is $1$ for every $r$, the expansion is the series with all coefficients equal to $1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Confirm with the first few terms",
          "workingLatex": "1,\\ (-1)(-x)=x,\\ \\tfrac{(-1)(-2)}{2}x^2 = x^2,\\ \\tfrac{(-1)(-2)(-3)}{6}(-x)^3 = x^3",
          "explanation": "Working the first four terms out directly also gives $1,x,x^2,x^3$, agreeing with the general result and guarding against sign slips.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Recognise a geometric series",
          "workingLatex": "1 + x + x^2 + x^3 + \\cdots, \\qquad a = 1,\\ \\ r = x",
          "explanation": "Each term is the previous one multiplied by $x$, so this is a geometric series with first term $a=1$ and common ratio $r=x$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Apply the sum to infinity",
          "workingLatex": "S_{\\infty} = \\dfrac{a}{1-r} = \\dfrac{1}{1-x}",
          "explanation": "A convergent geometric series sums to $\\dfrac{a}{1-r}$; with $a=1$ and $r=x$ this is exactly $\\dfrac{1}{1-x}$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Identify the sum with the original function",
          "workingLatex": "\\dfrac{1}{1-x} = \\left(1-x\\right)^{-1}",
          "explanation": "The sum of the geometric series is precisely the function we started with, so the binomial expansion and the geometric series are two names for the same thing.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the convergence condition",
          "workingLatex": "\\left| r \\right| < 1 \\;\\Rightarrow\\; \\left| x \\right| < 1",
          "explanation": "A geometric series only has a finite sum when $\\left| r \\right| < 1$; here that means $\\left| x \\right| < 1$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Compare with the binomial validity",
          "workingLatex": "\\left(1+u\\right)^n \\text{ valid for } \\left| u \\right| < 1 \\;\\Rightarrow\\; \\left| -x \\right| = \\left| x \\right| < 1",
          "explanation": "The binomial expansion of $(1+u)^n$ requires $\\left| u \\right| < 1$; with $u=-x$ this is again $\\left| x \\right| < 1$, so both viewpoints demand the same condition.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Draw the conclusion",
          "workingLatex": "\\left(1-x\\right)^{-1} = 1 + x + x^2 + \\cdots, \\qquad \\left| x \\right| < 1",
          "explanation": "The binomial expansion of $(1-x)^{-1}$ is the geometric series, and the geometric sum to infinity returns the original function, both valid exactly when $\\left| x \\right| < 1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The binomial expansion of $(1-x)^{-1}$ has every coefficient equal to $1$, giving $1 + x + x^2 + x^3 + \\cdots$. This is the geometric series with first term $1$ and common ratio $x$, whose sum to infinity $\\dfrac{1}{1-x}$ reproduces the original function. Both require $\\left| x \\right| < 1$, so the binomial theorem and the geometric-series formula are the same statement."
    }
  },
  {
    "id": "al.y2.pure.binomial-rational.q065",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Binomial expansion (rational powers)",
    "subtopicId": "al.y2.pure.binomial-rational",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "value",
    "tags": [
      "binomial expansion",
      "approximation",
      "error estimate",
      "square root"
    ],
    "questionText": "Show that $\\sqrt{2} = \\dfrac{10}{7}\\sqrt{0.98}$. Hence, by substituting a suitable value of $x$ into the first four terms of the binomial expansion of $(1+x)^{\\frac{1}{2}}$, find an approximation to $\\sqrt{2}$ correct to $6$ decimal places, and estimate the size of the error by considering the first neglected term.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Establish the given identity",
          "workingLatex": "0.98 = \\dfrac{98}{100} = \\dfrac{2 \\times 49}{100} \\;\\Rightarrow\\; \\sqrt{0.98} = \\dfrac{7\\sqrt{2}}{10} \\;\\Rightarrow\\; \\sqrt{2} = \\dfrac{10}{7}\\sqrt{0.98}",
          "explanation": "Writing $0.98$ as $\\dfrac{2 \\times 49}{100}$ makes the $49$ a perfect square, so $\\sqrt{0.98} = \\dfrac{7\\sqrt{2}}{10}$; rearranging gives $\\sqrt{2}$ in terms of $\\sqrt{0.98}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose the value of x",
          "workingLatex": "\\sqrt{0.98} = (1-0.02)^{\\frac{1}{2}} \\;\\Rightarrow\\; x = -0.02",
          "explanation": "We want $1+x = 0.98$, so $x = -0.02$. This is tiny compared with $1$, which is exactly why the series will converge very quickly and give high accuracy.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the general series",
          "workingLatex": "(1+x)^{\\frac{1}{2}} = 1 + \\tfrac{1}{2}x + \\dfrac{\\tfrac{1}{2}\\left(-\\tfrac{1}{2}\\right)}{2!}x^2 + \\dfrac{\\tfrac{1}{2}\\left(-\\tfrac{1}{2}\\right)\\left(-\\tfrac{3}{2}\\right)}{3!}x^3 + \\cdots",
          "explanation": "With $n=\\tfrac{1}{2}$ the numerators step down by $1$ each time from $\\tfrac{1}{2}$, over the matching factorials.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the coefficients",
          "workingLatex": "(1+x)^{\\frac{1}{2}} = 1 + \\tfrac{1}{2}x - \\tfrac{1}{8}x^2 + \\tfrac{1}{16}x^3 + \\cdots",
          "explanation": "Evaluating gives $\\dfrac{-\\tfrac{1}{4}}{2} = -\\tfrac{1}{8}$ for $x^2$ and $\\dfrac{\\tfrac{3}{8}}{6} = \\tfrac{1}{16}$ for $x^3$, the standard square-root expansion.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute x = -0.02",
          "workingLatex": "\\sqrt{0.98} \\approx 1 + \\tfrac{1}{2}(-0.02) - \\tfrac{1}{8}(-0.02)^2 + \\tfrac{1}{16}(-0.02)^3",
          "explanation": "Putting $x=-0.02$ into the four-term expansion turns the algebra into a short arithmetic sum.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute the linear term",
          "workingLatex": "\\tfrac{1}{2}(-0.02) = -0.01",
          "explanation": "Half of $-0.02$ is $-0.01$; this is the largest correction to the leading $1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compute the quadratic term",
          "workingLatex": "-\\tfrac{1}{8}(-0.02)^2 = -\\tfrac{1}{8}(0.0004) = -0.00005",
          "explanation": "Squaring $-0.02$ gives $0.0004$; one eighth of that is $0.00005$, taken negative.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compute the cubic term",
          "workingLatex": "\\tfrac{1}{16}(-0.02)^3 = \\tfrac{1}{16}(-0.000008) = -0.0000005",
          "explanation": "Cubing $-0.02$ gives $-0.000008$; one sixteenth of that is $-0.0000005$, already very small.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Add to approximate the root of 0.98",
          "workingLatex": "\\sqrt{0.98} \\approx 1 - 0.01 - 0.00005 - 0.0000005 = 0.9899495",
          "explanation": "Summing the four contributions gives a very accurate value for $\\sqrt{0.98}$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Scale up to sqrt(2)",
          "workingLatex": "\\sqrt{2} \\approx \\dfrac{10}{7} \\times 0.9899495 = \\dfrac{9.899495}{7} = 1.4142136\\ldots",
          "explanation": "Multiplying by $\\dfrac{10}{7}$ from Step 1 converts the estimate of $\\sqrt{0.98}$ into an estimate of $\\sqrt{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Round to 6 decimal places",
          "workingLatex": "\\sqrt{2} \\approx 1.414214",
          "explanation": "The true value is $1.41421356\\ldots$, so to six decimal places our estimate $1.4142135\\ldots$ rounds to $1.414214$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Find the first neglected coefficient",
          "workingLatex": "\\left[x^4\\right] = \\dfrac{\\tfrac{1}{2}\\left(-\\tfrac{1}{2}\\right)\\left(-\\tfrac{3}{2}\\right)\\left(-\\tfrac{5}{2}\\right)}{4!} = \\dfrac{-\\tfrac{15}{16}}{24} = -\\tfrac{5}{128}",
          "explanation": "The next term dropped from the series is the one in $x^4$; its coefficient is $-\\tfrac{5}{128}$, which controls the leading error.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Estimate the size of the error",
          "workingLatex": "\\left| -\\tfrac{5}{128}(-0.02)^4 \\right| \\times \\dfrac{10}{7} \\approx 6.25 \\times 10^{-9} \\times 1.4286 \\approx 9 \\times 10^{-9}",
          "explanation": "The neglected term is about $6.25 \\times 10^{-9}$; after scaling by $\\dfrac{10}{7}$ the error in $\\sqrt{2}$ is roughly $9 \\times 10^{-9}$ — far smaller than $5 \\times 10^{-7}$, so six-decimal accuracy is guaranteed.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the result",
          "workingLatex": "\\sqrt{2} \\approx 1.414214 \\quad (\\text{error} \\approx 9 \\times 10^{-9})",
          "explanation": "The clever small choice $x=-0.02$ gives $\\sqrt{2}$ correct to six decimal places with an error of only a few parts in a billion.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sqrt{2} \\approx 1.414214$ (correct to $6$ decimal places). The first neglected term is about $6.25 \\times 10^{-9}$, so after scaling by $\\dfrac{10}{7}$ the error is roughly $9 \\times 10^{-9}$ — comfortably accurate to $6$ decimal places (in fact about $8$)."
    }
  },
  {
    "id": "al.y2.pure.binomial-rational.q066",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Binomial expansion (rational powers)",
    "subtopicId": "al.y2.pure.binomial-rational",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "tags": [
      "binomial expansion",
      "general term",
      "proof",
      "negative index"
    ],
    "questionText": "Prove that the coefficient of $x^r$ in the expansion of $(1-x)^{-3}$ is $\\dfrac{(r+1)(r+2)}{2}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the aim",
          "workingLatex": "\\text{Show } \\left[x^r\\right]\\left(1-x\\right)^{-3} = \\dfrac{(r+1)(r+2)}{2}",
          "explanation": "We will build the general coefficient from the binomial theorem, simplify the falling product into factorials, and cancel to reach the stated formula.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write in binomial form",
          "workingLatex": "\\left(1-x\\right)^{-3} = \\left(1+(-x)\\right)^{n}, \\quad n = -3",
          "explanation": "Rewriting $1-x$ as $1+(-x)$ lets us use the standard series $(1+u)^n$ with $u=-x$ and $n=-3$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the general coefficient of u^r",
          "workingLatex": "\\left[u^r\\right] = \\dfrac{n(n-1)\\cdots(n-r+1)}{r!} = \\dfrac{(-3)(-4)(-5)\\cdots(-(r+2))}{r!}",
          "explanation": "With $n=-3$ the numerator steps down for $r$ factors, from $-3$ to $-3-(r-1) = -(r+2)$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Extract the sign",
          "workingLatex": "= \\dfrac{(-1)^r\\left[\\,3 \\cdot 4 \\cdot 5 \\cdots (r+2)\\,\\right]}{r!}",
          "explanation": "There are $r$ negative factors, so pulling out a minus from each gives $(-1)^r$ times the positive product $3 \\cdot 4 \\cdots (r+2)$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Turn the product into factorials",
          "workingLatex": "3 \\cdot 4 \\cdot 5 \\cdots (r+2) = \\dfrac{(r+2)!}{2!} = \\dfrac{(r+2)!}{2}",
          "explanation": "The product of the integers from $3$ up to $r+2$ is $(r+2)!$ with the factors $1$ and $2$ removed, i.e. divided by $2! = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Assemble the coefficient of u^r",
          "workingLatex": "\\left[u^r\\right] = (-1)^r \\dfrac{(r+2)!}{2\\, r!}",
          "explanation": "Combining the sign and the factorial form gives a compact expression for the coefficient of $u^r$ in $(1+u)^{-3}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Account for u = -x",
          "workingLatex": "u^r = (-x)^r = (-1)^r x^r",
          "explanation": "Because $u=-x$, each power carries an extra factor $(-1)^r$, which we must fold in to reach the coefficient of $x^r$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Multiply the two sign factors",
          "workingLatex": "\\left[x^r\\right] = (-1)^r \\dfrac{(r+2)!}{2\\, r!} \\times (-1)^r = (-1)^{2r}\\dfrac{(r+2)!}{2\\, r!} = \\dfrac{(r+2)!}{2\\, r!}",
          "explanation": "The two factors of $(-1)^r$ combine to $(-1)^{2r}=1$, so the coefficient of $x^r$ is positive — matching the fact that $(1-x)^{-3}$ has all-positive coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Cancel the factorials",
          "workingLatex": "\\dfrac{(r+2)!}{r!} = (r+1)(r+2) \\;\\Rightarrow\\; \\left[x^r\\right] = \\dfrac{(r+1)(r+2)}{2}",
          "explanation": "Since $(r+2)! = (r+2)(r+1)\\, r!$, the $r!$ cancels, leaving $\\dfrac{(r+1)(r+2)}{2}$ as required.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Write the general term",
          "workingLatex": "\\text{general term} = \\dfrac{(r+1)(r+2)}{2}\\,x^r",
          "explanation": "Attaching the power $x^r$ to the coefficient gives the complete general term of the expansion, which we now sanity-check.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check the first few coefficients",
          "workingLatex": "r=0:1,\\ r=1:3,\\ r=2:6,\\ r=3:10",
          "explanation": "Substituting $r=0,1,2,3$ gives $1,3,6,10$ — the triangular numbers — which is a reassuring, memorable pattern.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Cross-check by direct expansion",
          "workingLatex": "\\left(1-x\\right)^{-3} = 1 + 3x + 6x^2 + 10x^3 + \\cdots",
          "explanation": "Expanding the first few terms directly from the binomial series reproduces the same coefficients, confirming the proof.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the result",
          "workingLatex": "\\left[x^r\\right]\\left(1-x\\right)^{-3} = \\dfrac{(r+1)(r+2)}{2} \\quad \\text{for } \\left| x \\right| < 1",
          "explanation": "The general coefficient is exactly the required formula, valid throughout the interval of convergence.",
          "diagram": null
        }
      ],
      "finalAnswer": "The coefficient of $x^r$ in $(1-x)^{-3}$ is $\\dfrac{(r+1)(r+2)}{2}$, so the general term is $\\dfrac{(r+1)(r+2)}{2}\\,x^r$ (valid for $\\left| x \\right| < 1$)."
    }
  },
  {
    "id": "al.y2.pure.binomial-rational.q067",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Binomial expansion (rational powers)",
    "subtopicId": "al.y2.pure.binomial-rational",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "expression",
    "tags": [
      "partial fractions",
      "three factors",
      "binomial expansion",
      "validity"
    ],
    "questionText": "Express $\\dfrac{1}{(1-x)(1-2x)(1-3x)}$ in partial fractions, and hence find its expansion in ascending powers of $x$ up to and including the term in $x^2$. State the range of values of $x$ for which the expansion is valid.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set out the strategy",
          "workingLatex": "\\dfrac{1}{(1-x)(1-2x)(1-3x)} = \\dfrac{A}{1-x} + \\dfrac{B}{1-2x} + \\dfrac{C}{1-3x}",
          "explanation": "Three linear factors give three simple fractions, each with a known binomial expansion. Splitting first, then expanding, avoids a messy triple product.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Clear the denominators",
          "workingLatex": "1 = A(1-2x)(1-3x) + B(1-x)(1-3x) + C(1-x)(1-2x)",
          "explanation": "Multiplying through by the full denominator produces an identity valid for all $x$, ready for the cover-up substitutions.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find A at x = 1",
          "workingLatex": "x=1:\\quad 1 = A(1-2)(1-3) = A(-1)(-2) = 2A \\;\\Rightarrow\\; A = \\tfrac{1}{2}",
          "explanation": "Setting $x=1$ zeroes the $B$ and $C$ brackets, leaving $A$ alone.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find B at x = 1/2",
          "workingLatex": "x=\\tfrac{1}{2}:\\quad 1 = B\\left(1-\\tfrac{1}{2}\\right)\\left(1-\\tfrac{3}{2}\\right) = B\\left(\\tfrac{1}{2}\\right)\\left(-\\tfrac{1}{2}\\right) = -\\tfrac{1}{4}B \\;\\Rightarrow\\; B = -4",
          "explanation": "Setting $x=\\tfrac{1}{2}$ isolates $B$; the product $\\tfrac{1}{2}\\times\\left(-\\tfrac{1}{2}\\right) = -\\tfrac{1}{4}$ gives $B=-4$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find C at x = 1/3",
          "workingLatex": "x=\\tfrac{1}{3}:\\quad 1 = C\\left(1-\\tfrac{1}{3}\\right)\\left(1-\\tfrac{2}{3}\\right) = C\\left(\\tfrac{2}{3}\\right)\\left(\\tfrac{1}{3}\\right) = \\tfrac{2}{9}C \\;\\Rightarrow\\; C = \\tfrac{9}{2}",
          "explanation": "Setting $x=\\tfrac{1}{3}$ isolates $C$; the product $\\tfrac{2}{3}\\times\\tfrac{1}{3} = \\tfrac{2}{9}$ gives $C=\\tfrac{9}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the decomposition",
          "workingLatex": "\\dfrac{1}{(1-x)(1-2x)(1-3x)} = \\dfrac{\\tfrac{1}{2}}{1-x} - \\dfrac{4}{1-2x} + \\dfrac{\\tfrac{9}{2}}{1-3x}",
          "explanation": "Collecting $A,B,C$ turns the triple product into three standard fractions.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Expand the first fraction to x^2",
          "workingLatex": "\\dfrac{\\tfrac{1}{2}}{1-x} = \\tfrac{1}{2}\\left(1 + x + x^2 + \\cdots\\right) = \\tfrac{1}{2} + \\tfrac{1}{2}x + \\tfrac{1}{2}x^2 + \\cdots",
          "explanation": "Using $\\dfrac{1}{1-x} = 1 + x + x^2 + \\cdots$ and scaling by $\\tfrac{1}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Expand the second fraction to x^2",
          "workingLatex": "-\\dfrac{4}{1-2x} = -4\\left(1 + 2x + 4x^2 + \\cdots\\right) = -4 - 8x - 16x^2 + \\cdots",
          "explanation": "Here $\\dfrac{1}{1-2x} = 1 + 2x + 4x^2 + \\cdots$; multiplying by $-4$ scales every term.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Expand the third fraction to x^2",
          "workingLatex": "\\dfrac{\\tfrac{9}{2}}{1-3x} = \\tfrac{9}{2}\\left(1 + 3x + 9x^2 + \\cdots\\right) = \\tfrac{9}{2} + \\tfrac{27}{2}x + \\tfrac{81}{2}x^2 + \\cdots",
          "explanation": "Here $\\dfrac{1}{1-3x} = 1 + 3x + 9x^2 + \\cdots$; multiplying by $\\tfrac{9}{2}$ gives these terms.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Collect the constant term",
          "workingLatex": "\\tfrac{1}{2} - 4 + \\tfrac{9}{2} = \\tfrac{1}{2} + \\tfrac{9}{2} - 4 = 5 - 4 = 1",
          "explanation": "Adding the constant parts of the three series; a good check is that this equals the original function's value at $x=0$, which is $1$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Collect the x term",
          "workingLatex": "\\tfrac{1}{2} - 8 + \\tfrac{27}{2} = \\tfrac{28}{2} - 8 = 14 - 8 = 6",
          "explanation": "Adding the coefficients of $x$ from the three series gives $6$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Collect the x^2 term",
          "workingLatex": "\\tfrac{1}{2} - 16 + \\tfrac{81}{2} = \\tfrac{82}{2} - 16 = 41 - 16 = 25",
          "explanation": "Adding the coefficients of $x^2$ gives $25$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Write the expansion",
          "workingLatex": "\\dfrac{1}{(1-x)(1-2x)(1-3x)} = 1 + 6x + 25x^2 + \\cdots",
          "explanation": "Collecting the three collected coefficients gives the expansion up to $x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Determine the validity",
          "workingLatex": "\\left| x \\right| < 1,\\ \\left| x \\right| < \\tfrac{1}{2},\\ \\left| x \\right| < \\tfrac{1}{3} \\;\\Rightarrow\\; \\left| x \\right| < \\dfrac{1}{3}",
          "explanation": "Each fraction needs its own bracket to be small; all three must hold together, so the range is the most restrictive, $\\left| x \\right| < \\tfrac{1}{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "State the result",
          "workingLatex": "1 + 6x + 25x^2 + \\cdots, \\qquad \\left| x \\right| < \\dfrac{1}{3}",
          "explanation": "This is the required expansion together with its interval of validity.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{1}{(1-x)(1-2x)(1-3x)} = \\dfrac{\\tfrac{1}{2}}{1-x} - \\dfrac{4}{1-2x} + \\dfrac{\\tfrac{9}{2}}{1-3x} = 1 + 6x + 25x^2 + \\cdots$, valid for $\\left| x \\right| < \\dfrac{1}{3}$."
    }
  },
  {
    "id": "al.y2.pure.binomial-rational.q068",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Binomial expansion (rational powers)",
    "subtopicId": "al.y2.pure.binomial-rational",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "expression",
    "tags": [
      "improper fraction",
      "polynomial division",
      "partial fractions",
      "binomial expansion"
    ],
    "questionText": "Express $\\dfrac{2x^2 + x + 3}{(1-x)(1-2x)}$ in the form of a series in ascending powers of $x$ up to and including the term in $x^2$, and state the range of values of $x$ for which the expansion is valid.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise an improper fraction",
          "workingLatex": "\\deg(2x^2 + x + 3) = 2 = \\deg\\big[(1-x)(1-2x)\\big]",
          "explanation": "The numerator has the same degree as the denominator, so the fraction is improper. We must divide out a whole part before splitting into partial fractions.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expand the denominator",
          "workingLatex": "(1-x)(1-2x) = 2x^2 - 3x + 1",
          "explanation": "Writing the denominator as a single quadratic makes the division straightforward.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Divide to find the whole part",
          "workingLatex": "\\dfrac{2x^2 + x + 3}{2x^2 - 3x + 1}:\\quad 2x^2 + x + 3 = 1\\cdot(2x^2 - 3x + 1) + (4x + 2)",
          "explanation": "The leading terms match ($2x^2$ over $2x^2$) so the quotient is the constant $1$; subtracting $1\\times(2x^2-3x+1)$ leaves the remainder $4x+2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the split form",
          "workingLatex": "\\dfrac{2x^2 + x + 3}{(1-x)(1-2x)} = 1 + \\dfrac{4x + 2}{(1-x)(1-2x)}",
          "explanation": "The improper fraction becomes a constant $1$ plus a proper fraction whose numerator degree is now less than the denominator's.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set up partial fractions",
          "workingLatex": "\\dfrac{4x + 2}{(1-x)(1-2x)} = \\dfrac{A}{1-x} + \\dfrac{B}{1-2x}",
          "explanation": "Now the proper part can be split into two standard fractions ready for expansion.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Clear denominators",
          "workingLatex": "4x + 2 = A(1-2x) + B(1-x)",
          "explanation": "Multiplying up gives an identity in $x$ for the cover-up method.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find A at x = 1",
          "workingLatex": "x=1:\\quad 6 = A(1-2) = -A \\;\\Rightarrow\\; A = -6",
          "explanation": "Setting $x=1$ removes $B$, giving $A=-6$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find B at x = 1/2",
          "workingLatex": "x=\\tfrac{1}{2}:\\quad 4 = B\\left(1-\\tfrac{1}{2}\\right) = \\tfrac{1}{2}B \\;\\Rightarrow\\; B = 8",
          "explanation": "Setting $x=\\tfrac{1}{2}$ removes $A$, giving $B=8$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Write the full decomposition",
          "workingLatex": "\\dfrac{2x^2 + x + 3}{(1-x)(1-2x)} = 1 - \\dfrac{6}{1-x} + \\dfrac{8}{1-2x}",
          "explanation": "Combining the whole part with the two fractions gives a form where every piece has a simple series.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Expand the first fraction to x^2",
          "workingLatex": "-\\dfrac{6}{1-x} = -6\\left(1 + x + x^2 + \\cdots\\right) = -6 - 6x - 6x^2 + \\cdots",
          "explanation": "Using $\\dfrac{1}{1-x} = 1 + x + x^2 + \\cdots$ and scaling by $-6$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Expand the second fraction to x^2",
          "workingLatex": "\\dfrac{8}{1-2x} = 8\\left(1 + 2x + 4x^2 + \\cdots\\right) = 8 + 16x + 32x^2 + \\cdots",
          "explanation": "Using $\\dfrac{1}{1-2x} = 1 + 2x + 4x^2 + \\cdots$ and scaling by $8$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Collect the constant term",
          "workingLatex": "1 - 6 + 8 = 3",
          "explanation": "Adding the whole part $1$ to the constants of the two series; note this equals the original value at $x=0$, $\\dfrac{3}{1}=3$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Collect the x and x^2 terms",
          "workingLatex": "\\left[x\\right]: -6 + 16 = 10, \\qquad \\left[x^2\\right]: -6 + 32 = 26",
          "explanation": "The constant $1$ contributes nothing to $x$ or $x^2$, so we just add the corresponding coefficients of the two series.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the validity",
          "workingLatex": "\\left| x \\right| < 1 \\ \\cap\\ \\left| x \\right| < \\tfrac{1}{2} \\;=\\; \\left| x \\right| < \\dfrac{1}{2}",
          "explanation": "Both series must converge together; the tighter condition $\\left| x \\right| < \\tfrac{1}{2}$ wins.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "State the result",
          "workingLatex": "\\dfrac{2x^2 + x + 3}{(1-x)(1-2x)} = 3 + 10x + 26x^2 + \\cdots, \\qquad \\left| x \\right| < \\dfrac{1}{2}",
          "explanation": "This is the required series to the term in $x^2$, together with its interval of validity.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{2x^2 + x + 3}{(1-x)(1-2x)} = 3 + 10x + 26x^2 + \\cdots$, valid for $\\left| x \\right| < \\dfrac{1}{2}$."
    }
  },
  {
    "id": "al.y2.pure.binomial-rational.q069",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Binomial expansion (rational powers)",
    "subtopicId": "al.y2.pure.binomial-rational",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "binomial expansion",
      "unknown constants",
      "simultaneous equations",
      "validity"
    ],
    "questionText": "The expansion of $(1 + ax)^{n}$ in ascending powers of $x$ begins $1 + 6x + 27x^2 + \\cdots$, where $a$ and $n$ are constants. Find the values of $a$ and $n$, and state the range of values of $x$ for which the expansion is valid.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the general expansion",
          "workingLatex": "(1+ax)^{n} = 1 + n(ax) + \\dfrac{n(n-1)}{2!}(ax)^2 + \\cdots = 1 + nax + \\dfrac{n(n-1)}{2}a^2x^2 + \\cdots",
          "explanation": "Expanding $(1+ax)^n$ keeps $a$ and $n$ as symbols so we can match coefficients against the given series.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Match the coefficient of x",
          "workingLatex": "na = 6",
          "explanation": "The coefficient of $x$ in the expansion is $na$, and the given series has $6$, giving our first equation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Match the coefficient of x^2",
          "workingLatex": "\\dfrac{n(n-1)}{2}a^2 = 27",
          "explanation": "The coefficient of $x^2$ is $\\dfrac{n(n-1)}{2}a^2$, set equal to the given $27$; two equations for two unknowns.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Make a the subject of the first equation",
          "workingLatex": "a = \\dfrac{6}{n}",
          "explanation": "Rearranging $na=6$ expresses $a$ in terms of $n$ so we can eliminate it from the second equation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute into the second equation",
          "workingLatex": "\\dfrac{n(n-1)}{2}\\left(\\dfrac{6}{n}\\right)^2 = 27 \\;\\Rightarrow\\; \\dfrac{n(n-1)}{2}\\cdot\\dfrac{36}{n^2} = 27",
          "explanation": "Replacing $a^2$ with $\\dfrac{36}{n^2}$ leaves an equation in $n$ alone.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify the left-hand side",
          "workingLatex": "\\dfrac{36\\,n(n-1)}{2n^2} = \\dfrac{18(n-1)}{n} = 27",
          "explanation": "Cancelling one factor of $n$ and dividing $36$ by $2$ tidies the equation to a single fraction.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Clear the fraction",
          "workingLatex": "18(n-1) = 27n",
          "explanation": "Multiplying both sides by $n$ removes the denominator, giving a linear equation.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Expand and rearrange",
          "workingLatex": "18n - 18 = 27n \\;\\Rightarrow\\; -18 = 9n",
          "explanation": "Bringing the $n$ terms together isolates $n$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solve for n",
          "workingLatex": "n = -2",
          "explanation": "Dividing by $9$ gives $n=-2$, a genuine negative power that produces an infinite series.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Find a",
          "workingLatex": "a = \\dfrac{6}{n} = \\dfrac{6}{-2} = -3",
          "explanation": "Substituting $n=-2$ back into $a=\\dfrac{6}{n}$ gives $a=-3$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Write the function",
          "workingLatex": "(1+ax)^{n} = (1-3x)^{-2}",
          "explanation": "With $a=-3$ and $n=-2$ the function is $(1-3x)^{-2}$; a quick expansion confirms our values.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Check the coefficient of x",
          "workingLatex": "na = (-2)(-3) = 6 \\ \\checkmark",
          "explanation": "The coefficient of $x$ comes out as $6$, matching the given series.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Check the coefficient of x^2",
          "workingLatex": "\\dfrac{n(n-1)}{2}a^2 = \\dfrac{(-2)(-3)}{2}(-3)^2 = 3 \\times 9 = 27 \\ \\checkmark",
          "explanation": "The coefficient of $x^2$ comes out as $27$, confirming both constants are correct.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the validity",
          "workingLatex": "\\left| ax \\right| < 1 \\;\\Rightarrow\\; \\left| -3x \\right| < 1 \\;\\Rightarrow\\; \\left| x \\right| < \\dfrac{1}{3}",
          "explanation": "The expansion of $(1+ax)^n$ converges only while $\\left| ax \\right| < 1$; with $a=-3$ this is $\\left| x \\right| < \\tfrac{1}{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "State the answer",
          "workingLatex": "a = -3, \\quad n = -2, \\quad \\left| x \\right| < \\dfrac{1}{3}",
          "explanation": "These values reproduce the given series and fix the interval of validity.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a = -3$ and $n = -2$ (so the function is $(1-3x)^{-2}$), valid for $\\left| x \\right| < \\dfrac{1}{3}$."
    }
  },
  {
    "id": "al.y2.pure.binomial-rational.q070",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Binomial expansion (rational powers)",
    "subtopicId": "al.y2.pure.binomial-rational",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "expression",
    "tags": [
      "partial fractions",
      "binomial expansion",
      "general term",
      "validity",
      "exam-style"
    ],
    "questionText": "The function is defined by $f(x) = \\dfrac{2 + x}{(1-x)(1+2x)}$. (a) Express $f(x)$ in partial fractions. (b) Hence find the expansion of $f(x)$ in ascending powers of $x$, up to and including the term in $x^3$. (c) Find the coefficient of $x^n$ in the expansion. (d) State the range of values of $x$ for which the expansion is valid.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up partial fractions for part (a)",
          "workingLatex": "\\dfrac{2 + x}{(1-x)(1+2x)} = \\dfrac{A}{1-x} + \\dfrac{B}{1+2x}",
          "explanation": "The two distinct linear factors give two simple fractions. Splitting first lets each piece be expanded with a standard series.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Clear the denominators",
          "workingLatex": "2 + x = A(1+2x) + B(1-x)",
          "explanation": "Multiplying up gives an identity valid for all $x$, ready for the cover-up substitutions.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find A at x = 1",
          "workingLatex": "x=1:\\quad 3 = A(1+2) = 3A \\;\\Rightarrow\\; A = 1",
          "explanation": "Setting $x=1$ removes $B$ and gives $A=1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find B at x = -1/2",
          "workingLatex": "x=-\\tfrac{1}{2}:\\quad \\tfrac{3}{2} = B\\left(1+\\tfrac{1}{2}\\right) = \\tfrac{3}{2}B \\;\\Rightarrow\\; B = 1",
          "explanation": "Setting $x=-\\tfrac{1}{2}$ removes $A$; the left side is $2-\\tfrac{1}{2}=\\tfrac{3}{2}$, giving $B=1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the partial fractions",
          "workingLatex": "f(x) = \\dfrac{1}{1-x} + \\dfrac{1}{1+2x}",
          "explanation": "This completes part (a): the function is a sum of two standard fractions.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Expand the first fraction",
          "workingLatex": "\\dfrac{1}{1-x} = 1 + x + x^2 + x^3 + \\cdots",
          "explanation": "This is the geometric-type series $(1-x)^{-1}$, with every coefficient equal to $1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Expand the second fraction",
          "workingLatex": "\\dfrac{1}{1+2x} = 1 + (-1)(2x) + \\dfrac{(-1)(-2)}{2}(2x)^2 + \\dfrac{(-1)(-2)(-3)}{6}(2x)^3 + \\cdots = 1 - 2x + 4x^2 - 8x^3 + \\cdots",
          "explanation": "For $(1+2x)^{-1}$ each coefficient is $(-2)^k$, giving the alternating series $1 - 2x + 4x^2 - 8x^3$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Add the two series (part b)",
          "workingLatex": "f(x) = (1+1) + (1-2)x + (1+4)x^2 + (1-8)x^3 + \\cdots",
          "explanation": "Because $f(x)$ is the sum of the two fractions, we add the series term by term.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Simplify to the term in x^3",
          "workingLatex": "f(x) = 2 - x + 5x^2 - 7x^3 + \\cdots",
          "explanation": "Collecting each pair of coefficients gives the expansion required in part (b).",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "General coefficient of the first fraction (part c)",
          "workingLatex": "\\left[x^n\\right]\\dfrac{1}{1-x} = 1",
          "explanation": "Every power of $x$ in $(1-x)^{-1}$ has coefficient $1$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "General coefficient of the second fraction",
          "workingLatex": "\\left[x^n\\right]\\dfrac{1}{1+2x} = (-2)^n",
          "explanation": "Since $\\dfrac{1}{1+2x} = \\sum (-2x)^n$, the coefficient of $x^n$ is $(-2)^n$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Add for the general term",
          "workingLatex": "\\left[x^n\\right]f(x) = 1 + (-2)^n",
          "explanation": "Adding the two general coefficients gives one formula for the coefficient of every power.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Check against part (b)",
          "workingLatex": "n=0:2,\\ n=1:-1,\\ n=2:5,\\ n=3:-7",
          "explanation": "Substituting $n=0,1,2,3$ into $1+(-2)^n$ reproduces $2,-1,5,-7$, matching the expansion found earlier.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Validity of each series (part d)",
          "workingLatex": "\\left| x \\right| < 1 \\quad \\text{and} \\quad \\left| 2x \\right| < 1 \\;\\Rightarrow\\; \\left| x \\right| < \\dfrac{1}{2}",
          "explanation": "The first series needs $\\left| x \\right| < 1$, the second needs $\\left| 2x \\right| < 1$; both must hold, so the tighter one governs.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "State the full result",
          "workingLatex": "f(x) = 2 - x + 5x^2 - 7x^3 + \\cdots, \\quad \\left[x^n\\right] = 1 + (-2)^n, \\quad \\left| x \\right| < \\dfrac{1}{2}",
          "explanation": "This collects all four parts: the partial fractions, the expansion, the general coefficient, and the range of validity.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $f(x) = \\dfrac{1}{1-x} + \\dfrac{1}{1+2x}$. (b) $f(x) = 2 - x + 5x^2 - 7x^3 + \\cdots$. (c) The coefficient of $x^n$ is $1 + (-2)^n$. (d) Valid for $\\left| x \\right| < \\dfrac{1}{2}$."
    }
  }
];
