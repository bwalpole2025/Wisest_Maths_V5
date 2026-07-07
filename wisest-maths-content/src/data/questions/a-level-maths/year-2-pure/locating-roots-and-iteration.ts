import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "id": "al.y2.pure.roots-iteration.q001",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "tags": [
      "change of sign",
      "definition"
    ],
    "questionText": "Explain how the change of sign method is used to show that a root of $f(x) = 0$ lies in an interval $[a, b]$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State what we need to find",
          "workingLatex": "f(x) = 0 \\text{ has a root in } [a,b]",
          "explanation": "We want to locate an $x$-value where the function crosses the $x$-axis, without finding the exact root.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate at the endpoints",
          "workingLatex": "f(a) \\text{ and } f(b)",
          "explanation": "Substitute both ends of the interval into $f(x)$ to see whether the outputs are positive or negative.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Check for a sign change",
          "workingLatex": "f(a) \\cdot f(b) < 0",
          "explanation": "If the two values have opposite signs, the graph must cross the $x$-axis somewhere between $a$ and $b$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Require continuity",
          "workingLatex": "f \\text{ continuous on } [a,b]",
          "explanation": "The function must be continuous on the closed interval so that it cannot 'jump' across the axis without passing through zero.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply the Intermediate Value Theorem",
          "workingLatex": "\\exists\\, c \\in (a,b) \\text{ with } f(c) = 0",
          "explanation": "A continuous function that changes sign on $[a,b]$ is guaranteed to take every value between $f(a)$ and $f(b)$, including zero.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclude",
          "workingLatex": "\\text{A root lies in } (a,b)",
          "explanation": "The sign change together with continuity confirms a root inside the interval, though it does not give its exact value.",
          "diagram": null
        }
      ],
      "finalAnswer": "Evaluate $f(a)$ and $f(b)$. If $f(a)f(b) < 0$ and $f$ is continuous on $[a,b]$, then a root of $f(x)=0$ lies in $(a,b)$."
    }
  },
  {
    "id": "al.y2.pure.roots-iteration.q002",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "tags": [
      "change of sign",
      "cubic"
    ],
    "questionText": "Show that $f(x) = x^3 - 2x - 5$ has a root in the interval $[2, 3]$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Evaluate $f(2)$",
          "workingLatex": "f(2) = 2^3 - 2(2) - 5 = 8 - 4 - 5 = -1",
          "explanation": "Substitute $x = 2$ into the cubic.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Note the sign of $f(2)$",
          "workingLatex": "f(2) = -1 < 0",
          "explanation": "The function value is negative at the left endpoint.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate $f(3)$",
          "workingLatex": "f(3) = 3^3 - 2(3) - 5 = 27 - 6 - 5 = 16",
          "explanation": "Substitute $x = 3$ into the cubic.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Note the sign of $f(3)$",
          "workingLatex": "f(3) = 16 > 0",
          "explanation": "The function value is positive at the right endpoint.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check the product",
          "workingLatex": "f(2) \\cdot f(3) = (-1)(16) = -16 < 0",
          "explanation": "Opposite signs mean the product is negative.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State continuity",
          "workingLatex": "f \\text{ is a polynomial, so continuous on } [2,3]",
          "explanation": "Polynomials are continuous everywhere.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclude",
          "workingLatex": "\\text{A root lies in } (2,3)",
          "explanation": "By the change of sign method, a root of $f(x)=0$ lies between $2$ and $3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Since $f(2) = -1 < 0$, $f(3) = 16 > 0$, and $f$ is continuous on $[2,3]$, a root lies in $(2,3)$."
    }
  },
  {
    "id": "al.y2.pure.roots-iteration.q003",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "tags": [
      "change of sign",
      "quadratic"
    ],
    "questionText": "Show that $f(x) = x^2 - 3$ has a root in the interval $[1, 2]$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Evaluate $f(1)$",
          "workingLatex": "f(1) = 1^2 - 3 = -2",
          "explanation": "Substitute $x = 1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Sign at $x = 1$",
          "workingLatex": "f(1) = -2 < 0",
          "explanation": "The output is negative.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate $f(2)$",
          "workingLatex": "f(2) = 2^2 - 3 = 1",
          "explanation": "Substitute $x = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Sign at $x = 2$",
          "workingLatex": "f(2) = 1 > 0",
          "explanation": "The output is positive.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Product of endpoint values",
          "workingLatex": "f(1) \\cdot f(2) = (-2)(1) = -2 < 0",
          "explanation": "A sign change confirms the graph crosses the axis between $1$ and $2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclude",
          "workingLatex": "\\text{Root in } (1,2)",
          "explanation": "The quadratic is continuous on $[1,2]$, so a root lies in the open interval.",
          "diagram": null
        }
      ],
      "finalAnswer": "$f(1) = -2 < 0$ and $f(2) = 1 > 0$, so a root lies in $(1,2)$."
    }
  },
  {
    "id": "al.y2.pure.roots-iteration.q004",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "tags": [
      "change of sign",
      "cubic"
    ],
    "questionText": "Show that $f(x) = 2x^3 - 3x - 1$ has a root in $[1, 2]$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Evaluate $f(1)$",
          "workingLatex": "f(1) = 2(1)^3 - 3(1) - 1 = 2 - 3 - 1 = -2",
          "explanation": "Substitute the left endpoint.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Sign at $x = 1$",
          "workingLatex": "f(1) = -2 < 0",
          "explanation": "Negative at the left end.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate $f(2)$",
          "workingLatex": "f(2) = 2(8) - 6 - 1 = 16 - 7 = 9",
          "explanation": "Substitute the right endpoint.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Sign at $x = 2$",
          "workingLatex": "f(2) = 9 > 0",
          "explanation": "Positive at the right end.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check $f(1)f(2)$",
          "workingLatex": "f(1)f(2) = (-2)(9) = -18 < 0",
          "explanation": "Opposite signs give a negative product.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclude",
          "workingLatex": "\\text{Root in } (1,2)",
          "explanation": "Continuity on $[1,2]$ together with the sign change guarantees a root inside the interval.",
          "diagram": null
        }
      ],
      "finalAnswer": "$f(1) = -2 < 0$ and $f(2) = 9 > 0$, so a root lies in $(1,2)$."
    }
  },
  {
    "id": "al.y2.pure.roots-iteration.q005",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "tags": [
      "change of sign",
      "exponential"
    ],
    "questionText": "Show that $f(x) = e^x - 3$ has a root in the interval $[1, 2]$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Evaluate $f(1)$",
          "workingLatex": "f(1) = e^1 - 3 \\approx 2.718 - 3 = -0.282",
          "explanation": "Use $e \\approx 2.718$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Sign at $x = 1$",
          "workingLatex": "f(1) < 0",
          "explanation": "The exponential curve is below $y = 3$ at $x = 1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate $f(2)$",
          "workingLatex": "f(2) = e^2 - 3 \\approx 7.389 - 3 = 4.389",
          "explanation": "At $x = 2$, $e^2$ is well above $3$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Sign at $x = 2$",
          "workingLatex": "f(2) > 0",
          "explanation": "The function is positive at the right endpoint.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Product",
          "workingLatex": "f(1)f(2) < 0",
          "explanation": "The values have opposite signs.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Continuity",
          "workingLatex": "e^x \\text{ is continuous for all } x",
          "explanation": "Exponential functions are continuous on any interval.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclude",
          "workingLatex": "\\text{Root in } (1,2)",
          "explanation": "A root of $e^x = 3$, i.e.\\ $x = \\ln 3$, lies between $1$ and $2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$f(1) \\approx -0.282 < 0$ and $f(2) \\approx 4.389 > 0$, so a root lies in $(1,2)$."
    }
  },
  {
    "id": "al.y2.pure.roots-iteration.q006",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "tags": [
      "change of sign",
      "trigonometric"
    ],
    "questionText": "Show that $f(x) = \\sin x - 0.5$ has a root in the interval $[0.5, 1]$ (radians).",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Evaluate $f(0.5)$",
          "workingLatex": "f(0.5) = \\sin(0.5) - 0.5 \\approx 0.479 - 0.5 = -0.021",
          "explanation": "Use radians throughout.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Sign at $x = 0.5$",
          "workingLatex": "f(0.5) \\approx -0.021 < 0",
          "explanation": "Sine is still slightly below $0.5$ at this angle.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate $f(1)$",
          "workingLatex": "f(1) = \\sin(1) - 0.5 \\approx 0.841 - 0.5 = 0.341",
          "explanation": "Substitute $x = 1$ radian.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Sign at $x = 1$",
          "workingLatex": "f(1) \\approx 0.341 > 0",
          "explanation": "Sine has risen above $0.5$ by $x = 1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Product",
          "workingLatex": "f(0.5)f(1) < 0",
          "explanation": "Opposite signs on the interval endpoints.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Continuity",
          "workingLatex": "\\sin x \\text{ is continuous on } [0.5,1]",
          "explanation": "Sine is continuous everywhere.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclude",
          "workingLatex": "\\text{Root in } (0.5,1)",
          "explanation": "There is an angle in $(0.5,1)$ radians where $\\sin x = 0.5$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$f(0.5) \\approx -0.021 < 0$ and $f(1) \\approx 0.341 > 0$, so a root lies in $(0.5,1)$."
    }
  },
  {
    "id": "al.y2.pure.roots-iteration.q007",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": [
      "change of sign",
      "cubic"
    ],
    "questionText": "For $f(x) = x^3 - x - 1$, find $f(1)$ and $f(2)$ and state whether a root lies in $[1, 2]$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Evaluate $f(1)$",
          "workingLatex": "f(1) = 1^3 - 1 - 1 = -1",
          "explanation": "Substitute $x = 1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate $f(2)$",
          "workingLatex": "f(2) = 8 - 2 - 1 = 5",
          "explanation": "Substitute $x = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare signs",
          "workingLatex": "f(1) = -1 < 0,\\quad f(2) = 5 > 0",
          "explanation": "The function changes sign across the interval.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Product",
          "workingLatex": "f(1)f(2) = -5 < 0",
          "explanation": "A negative product confirms opposite signs.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Continuity",
          "workingLatex": "f \\text{ is a polynomial on } [1,2]",
          "explanation": "No breaks or asymptotes on this interval.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclude",
          "workingLatex": "\\text{Yes: a root lies in } (1,2)",
          "explanation": "The change of sign method applies, so a root is trapped between $1$ and $2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$f(1) = -1$, $f(2) = 5$. Since $f(1)f(2) < 0$ and $f$ is continuous on $[1,2]$, a root lies in $(1,2)$."
    }
  },
  {
    "id": "al.y2.pure.roots-iteration.q008",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "tags": [
      "change of sign",
      "conditions"
    ],
    "questionText": "State the two conditions required for the change of sign method to guarantee a root of $f(x)=0$ in $[a,b]$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "First condition: continuity",
          "workingLatex": "f \\text{ is continuous on } [a,b]",
          "explanation": "The graph must be unbroken on the whole closed interval — no jumps, holes, or asymptotes inside $[a,b]$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Why continuity matters",
          "workingLatex": "\\text{No gap means the curve cannot skip zero}",
          "explanation": "Without continuity, the function could jump from negative to positive without ever equalling zero.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Second condition: sign change",
          "workingLatex": "f(a) \\cdot f(b) < 0",
          "explanation": "The function values at the endpoints must have opposite signs.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Interpret the sign change",
          "workingLatex": "f(a) < 0 < f(b) \\text{ or } f(a) > 0 > f(b)",
          "explanation": "One endpoint is above the axis and the other is below.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Link to the graph",
          "workingLatex": "\\text{The curve crosses the } x\\text{-axis between } a \\text{ and } b",
          "explanation": "A continuous curve that goes from below to above the axis (or vice versa) must pass through zero.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State both conditions",
          "workingLatex": "f \\text{ continuous on } [a,b] \\text{ and } f(a)f(b) < 0",
          "explanation": "Both are needed: neither condition alone is sufficient.",
          "diagram": null
        }
      ],
      "finalAnswer": "Require (1) $f$ continuous on $[a,b]$ and (2) $f(a)f(b) < 0$."
    }
  },
  {
    "id": "al.y2.pure.roots-iteration.q009",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "tags": [
      "change of sign",
      "asymptote",
      "failure"
    ],
    "questionText": "Explain why the change of sign method cannot be used on $[1, 3]$ to locate a root of $f(x) = \\dfrac{1}{x-2}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Evaluate $f(1)$",
          "workingLatex": "f(1) = \\frac{1}{1-2} = -1",
          "explanation": "The left endpoint gives a negative value.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate $f(3)$",
          "workingLatex": "f(3) = \\frac{1}{3-2} = 1",
          "explanation": "The right endpoint gives a positive value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apparent sign change",
          "workingLatex": "f(1) = -1 < 0,\\quad f(3) = 1 > 0",
          "explanation": "The endpoint values do change sign.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify the asymptote",
          "workingLatex": "x = 2 \\text{ is a vertical asymptote}",
          "explanation": "As $x \\to 2$, $|f(x)| \\to \\infty$; the function is undefined at $x = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check continuity",
          "workingLatex": "f \\text{ is not continuous on } [1,3]",
          "explanation": "The asymptote at $x = 2$ lies inside the interval, breaking continuity.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Graph behaviour",
          "workingLatex": "\\text{Curve jumps from } -\\infty \\text{ to } +\\infty \\text{ at } x=2",
          "explanation": "The graph never crosses $y = 0$; it only appears to change sign because of the discontinuity.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclude",
          "workingLatex": "\\text{Method invalid — no root in } [1,3]",
          "explanation": "In fact $f(x) = 0$ has no solution; the sign change is caused by the asymptote, not a root.",
          "diagram": null
        }
      ],
      "finalAnswer": "Although $f(1) < 0$ and $f(3) > 0$, $f$ is not continuous on $[1,3]$ because of the vertical asymptote at $x = 2$. The method does not apply, and $f(x)=0$ has no root."
    }
  },
  {
    "id": "al.y2.pure.roots-iteration.q010",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "tags": [
      "change of sign",
      "repeated root",
      "failure"
    ],
    "questionText": "For $f(x) = (x-2)^2$, find $f(1)$ and $f(3)$. Explain why the change of sign method fails to locate the root at $x = 2$ using $[1, 3]$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Expand (optional)",
          "workingLatex": "f(x) = x^2 - 4x + 4",
          "explanation": "The function is a quadratic with a repeated factor.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate $f(1)$",
          "workingLatex": "f(1) = (1-2)^2 = 1",
          "explanation": "Positive at the left endpoint.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate $f(3)$",
          "workingLatex": "f(3) = (3-2)^2 = 1",
          "explanation": "Also positive at the right endpoint.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Product",
          "workingLatex": "f(1)f(3) = 1 > 0",
          "explanation": "Both values have the same sign, so there is no sign change.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Graph shape at $x = 2$",
          "workingLatex": "f(x) \\geq 0 \\text{ touches the axis at } x=2",
          "explanation": "A repeated root means the curve touches the $x$-axis but does not cross it.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Why the method fails",
          "workingLatex": "f(a)f(b) > 0 \\Rightarrow \\text{no sign change}",
          "explanation": "Without opposite signs at the endpoints, the change of sign argument gives no information about a root inside the interval.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclude",
          "workingLatex": "\\text{Method fails on } [1,3]",
          "explanation": "Even though $x = 2$ is a root, the curve stays on one side of the axis throughout $[1,3]$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$f(1) = f(3) = 1 > 0$, so $f(1)f(3) > 0$. The repeated root at $x = 2$ means the graph touches but does not cross the axis, so the change of sign method fails on $[1,3]$."
    }
  },
  {
    "id": "al.y2.pure.roots-iteration.q011",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "tags": [
      "change of sign",
      "discontinuity",
      "failure"
    ],
    "questionText": "For $f(x) = \\dfrac{1}{x}$ on $[-1, 1]$, show that $f(-1)$ and $f(1)$ have opposite signs but explain why this does not prove a root in $[-1, 1]$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Evaluate $f(-1)$",
          "workingLatex": "f(-1) = \\frac{1}{-1} = -1",
          "explanation": "Negative at the left endpoint.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate $f(1)$",
          "workingLatex": "f(1) = \\frac{1}{1} = 1",
          "explanation": "Positive at the right endpoint.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Sign change at endpoints",
          "workingLatex": "f(-1) < 0 < f(1)",
          "explanation": "The endpoint values do have opposite signs.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Locate the discontinuity",
          "workingLatex": "f \\text{ undefined at } x = 0",
          "explanation": "Division by zero breaks the function at the centre of the interval.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Continuity check",
          "workingLatex": "f \\text{ is not continuous on } [-1,1]",
          "explanation": "The graph has separate branches for $x < 0$ and $x > 0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Graph behaviour",
          "workingLatex": "f(x) \\text{ never equals zero}",
          "explanation": "The hyperbola $y = 1/x$ lies entirely below the axis for $x < 0$ and above for $x > 0$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclude",
          "workingLatex": "\\text{Sign change does not imply a root}",
          "explanation": "Continuity is essential: the apparent sign change is caused by the asymptote at $x = 0$, not a zero of $f$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$f(-1) = -1 < 0$ and $f(1) = 1 > 0$, but $f$ is not continuous on $[-1,1]$ because of the discontinuity at $x = 0$. No root exists, so the method cannot be applied."
    }
  },
  {
    "id": "al.y2.pure.roots-iteration.q012",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "iteration",
      "rearrangement"
    ],
    "questionText": "Rearrange $x^3 + 2x - 6 = 0$ into the iterative form $x_{n+1} = g(x_n)$ where $g(x) = \\sqrt[3]{6 - 2x}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Start from the equation",
          "workingLatex": "x^3 + 2x - 6 = 0",
          "explanation": "We need to isolate $x$ on one side.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rearrange to isolate $x^3$",
          "workingLatex": "x^3 = 6 - 2x",
          "explanation": "Subtract $2x$ and add $6$ to both sides.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Take the cube root",
          "workingLatex": "x = \\sqrt[3]{6 - 2x}",
          "explanation": "Cube roots undo cubes, giving $x$ as a function of itself.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the iteration",
          "workingLatex": "x_{n+1} = \\sqrt[3]{6 - 2x_n}",
          "explanation": "Replace $x$ with $x_{n+1}$ on the left and $x_n$ on the right for fixed-point iteration.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Identify $g(x)$",
          "workingLatex": "g(x) = \\sqrt[3]{6 - 2x}",
          "explanation": "This is the fixed-point function whose fixed points solve the original equation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify (optional)",
          "workingLatex": "g(x) = x \\Leftrightarrow x^3 + 2x - 6 = 0",
          "explanation": "Fixed points of $g$ correspond exactly to roots of the original equation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_{n+1} = \\sqrt[3]{6 - 2x_n}$, i.e.\\ $g(x) = \\sqrt[3]{6 - 2x}$."
    }
  },
  {
    "id": "al.y2.pure.roots-iteration.q013",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "change of sign",
      "cubic",
      "interval refinement"
    ],
    "questionText": "Given $f(x) = x^3 - 4x + 1$, show a root lies in $[1, 2]$, then use $f(1.5)$ to find a smaller interval containing the root.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Evaluate $f(1)$",
          "workingLatex": "f(1) = 1 - 4 + 1 = -2",
          "explanation": "Negative at the left endpoint.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate $f(2)$",
          "workingLatex": "f(2) = 8 - 8 + 1 = 1",
          "explanation": "Positive at the right endpoint.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Root in $[1,2]$",
          "workingLatex": "f(1)f(2) = -2 < 0 \\Rightarrow \\text{root in } (1,2)",
          "explanation": "Sign change with continuity traps a root between $1$ and $2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate $f(1.5)$",
          "workingLatex": "f(1.5) = (1.5)^3 - 4(1.5) + 1 = 3.375 - 6 + 1 = -1.625",
          "explanation": "Test the midpoint of the interval.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Sign at $x = 1.5$",
          "workingLatex": "f(1.5) = -1.625 < 0",
          "explanation": "Still negative at $x = 1.5$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare with $f(2)$",
          "workingLatex": "f(1.5) < 0 < f(2)",
          "explanation": "The sign change now occurs between $1.5$ and $2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Narrower interval",
          "workingLatex": "f(1.5) \\cdot f(2) < 0",
          "explanation": "The product is negative.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Bisection idea",
          "workingLatex": "\\text{Test an interior point to halve the bracket}",
          "explanation": "Evaluating $f$ at an interior point replaces a wide bracket with a shorter one that still contains the root.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conclude",
          "workingLatex": "\\text{Root in } (1.5, 2)",
          "explanation": "Halving the search interval gives a root trapped in $(1.5, 2)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Root in $(1,2)$ since $f(1) = -2 < 0$ and $f(2) = 1 > 0$. Since $f(1.5) = -1.625 < 0$, the root lies in $(1.5, 2)$."
    }
  },
  {
    "id": "al.y2.pure.roots-iteration.q014",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "iteration",
      "rearrangement",
      "convergence"
    ],
    "questionText": "For $x^3 - x - 4 = 0$, write two rearrangements $x = g(x)$ as $x_{n+1} = g(x_n)$. State which is more suitable for fixed-point iteration starting near the root.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Original equation",
          "workingLatex": "x^3 - x - 4 = 0",
          "explanation": "We seek rearrangements of the form $x = g(x)$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rearrangement A",
          "workingLatex": "x^3 = x + 4 \\Rightarrow x = \\sqrt[3]{x + 4}",
          "explanation": "Isolate $x^3$ and take the cube root.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Iteration A",
          "workingLatex": "x_{n+1} = \\sqrt[3]{x_n + 4}",
          "explanation": "Write in subscript form for iteration.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rearrangement B",
          "workingLatex": "x = x^3 - 4",
          "explanation": "Alternatively, move $x$ alone to the right-hand side.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Iteration B",
          "workingLatex": "x_{n+1} = x_n^3 - 4",
          "explanation": "This gives a different fixed-point function.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Derivative test for A",
          "workingLatex": "g(x) = \\sqrt[3]{x+4},\\quad g'(x) = \\frac{1}{3(x+4)^{2/3}}",
          "explanation": "Near the root ($x \\approx 1.8$), $|g'(x)| \\approx 0.2 < 1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Derivative test for B",
          "workingLatex": "g(x) = x^3 - 4,\\quad g'(x) = 3x^2",
          "explanation": "Near the root, $|g'(x)| \\approx 3(1.8)^2 \\approx 9.7 > 1$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Same fixed points",
          "workingLatex": "g(x) = x \\text{ for both rearrangements} \\Leftrightarrow x^3 - x - 4 = 0",
          "explanation": "Both iterations target the same root, but convergence depends on the gradient of $g$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Convergence criterion",
          "workingLatex": "|g'(x)| < 1 \\text{ near the root } \\Rightarrow \\text{convergence}",
          "explanation": "When the magnitude of the gradient is less than $1$, errors shrink at each step.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Conclude",
          "workingLatex": "x_{n+1} = \\sqrt[3]{x_n + 4} \\text{ is more suitable}",
          "explanation": "Rearrangement A satisfies $|g'(x)| < 1$ near the root; rearrangement B diverges.",
          "diagram": null
        }
      ],
      "finalAnswer": "Rearrangements: $x_{n+1} = \\sqrt[3]{x_n + 4}$ and $x_{n+1} = x_n^3 - 4$. The cube-root form is more suitable because $|g'(x)| < 1$ near the root."
    }
  },
  {
    "id": "al.y2.pure.roots-iteration.q015",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "iteration",
      "fixed point",
      "trigonometric"
    ],
    "questionText": "Use the iteration $x_{n+1} = \\cos x_n$ with $x_0 = 0.5$ to find $x_1$ and $x_2$ (give values to 4 decimal places).",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the iteration",
          "workingLatex": "x_{n+1} = \\cos x_n, \\quad x_0 = 0.5",
          "explanation": "Each new value is the cosine of the previous one (radians).",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find $x_1$",
          "workingLatex": "x_1 = \\cos(0.5) \\approx 0.8776",
          "explanation": "Substitute $x_0 = 0.5$ into the formula.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find $x_2$",
          "workingLatex": "x_2 = \\cos(x_1) = \\cos(0.8776) \\approx 0.6390",
          "explanation": "Use the result for $x_1$ as the next input.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Use radians on the calculator",
          "workingLatex": "\\cos(0.5) \\text{ with calculator in radian mode}",
          "explanation": "Trigonometric iteration requires radian mode throughout.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Fixed-point idea",
          "workingLatex": "x = \\cos x \\Leftrightarrow \\text{root of } x - \\cos x = 0",
          "explanation": "A limit of this iteration would solve $x = \\cos x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check convergence trend",
          "workingLatex": "x_0 = 0.5000,\\; x_1 \\approx 0.8776,\\; x_2 \\approx 0.6390",
          "explanation": "The values oscillate and move toward the intersection of $y = x$ and $y = \\cos x$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Next iterate (optional check)",
          "workingLatex": "x_3 = \\cos(x_2) \\approx 0.8027",
          "explanation": "Further iteration continues to close in on the fixed point.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Magnitude of $g'(x)$",
          "workingLatex": "g(x) = \\cos x,\\quad g'(x) = -\\sin x",
          "explanation": "Near the root ($x \\approx 0.739$), $|g'(x)| \\approx 0.67 < 1$, so the iteration converges.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State values",
          "workingLatex": "x_1 \\approx 0.8776,\\quad x_2 \\approx 0.6390",
          "explanation": "These are the first two iterates from the given starting value.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_1 \\approx 0.8776$, $x_2 \\approx 0.6390$."
    }
  },
  {
    "id": "al.y2.pure.roots-iteration.q016",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "change of sign",
      "logarithm"
    ],
    "questionText": "Show that $f(x) = \\ln x + x - 2$ has a root in the interval $[1, 2]$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Domain",
          "workingLatex": "x > 0",
          "explanation": "The natural logarithm is defined only for positive $x$; both endpoints are valid.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate $f(1)$",
          "workingLatex": "f(1) = \\ln 1 + 1 - 2 = 0 + 1 - 2 = -1",
          "explanation": "At $x = 1$, the output is $-1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Sign at $x = 1$",
          "workingLatex": "f(1) = -1 < 0",
          "explanation": "Negative at the left endpoint.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate $f(2)$",
          "workingLatex": "f(2) = \\ln 2 + 2 - 2 = \\ln 2 \\approx 0.693",
          "explanation": "The logarithmic term alone is positive here.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Sign at $x = 2$",
          "workingLatex": "f(2) = \\ln 2 > 0",
          "explanation": "Positive at the right endpoint.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Product",
          "workingLatex": "f(1)f(2) < 0",
          "explanation": "Opposite signs confirm a sign change.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Monotonicity (optional)",
          "workingLatex": "f'(x) = \\frac{1}{x} + 1 > 0 \\text{ for } x > 0",
          "explanation": "The function is strictly increasing, so there is at most one root.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Continuity",
          "workingLatex": "\\ln x + x - 2 \\text{ is continuous on } [1,2]",
          "explanation": "Sums of continuous functions are continuous.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Apply change of sign",
          "workingLatex": "f(1)f(2) < 0 \\text{ with continuity}",
          "explanation": "The conditions for the method are satisfied.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Conclude",
          "workingLatex": "\\text{Root in } (1,2)",
          "explanation": "A solution of $\\ln x + x = 2$ lies strictly between $1$ and $2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$f(1) = -1 < 0$ and $f(2) = \\ln 2 \\approx 0.693 > 0$, so a root lies in $(1,2)$."
    }
  },
  {
    "id": "al.y2.pure.roots-iteration.q017",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "change of sign",
      "cubic",
      "interval refinement"
    ],
    "questionText": "For $f(x) = x^3 - 2x - 5$, given that a root lies in $[2, 3]$, evaluate $f(2)$ and $f(2.5)$ to find a smaller interval containing the root.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Known bracket",
          "workingLatex": "f(2) < 0,\\; f(3) > 0",
          "explanation": "A root is already known to lie in $(2, 3)$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate $f(2)$",
          "workingLatex": "f(2) = 8 - 4 - 5 = -1",
          "explanation": "Confirm the left endpoint is negative.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate $f(2.5)$",
          "workingLatex": "f(2.5) = (2.5)^3 - 2(2.5) - 5 = 15.625 - 5 - 5 = 5.625",
          "explanation": "Test a point partway along the interval.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Sign at $x = 2.5$",
          "workingLatex": "f(2.5) = 5.625 > 0",
          "explanation": "Positive at $x = 2.5$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare signs",
          "workingLatex": "f(2) < 0 < f(2.5)",
          "explanation": "The sign change now occurs between $2$ and $2.5$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Product",
          "workingLatex": "f(2) \\cdot f(2.5) < 0",
          "explanation": "Negative product confirms opposite signs.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Continuity",
          "workingLatex": "f \\text{ is a polynomial on } [2, 2.5]",
          "explanation": "No discontinuities on the sub-interval.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Why $2.5$ was chosen",
          "workingLatex": "2.5 \\text{ lies between } 2 \\text{ and } 3",
          "explanation": "Testing an interior point of the original bracket refines the interval.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conclude",
          "workingLatex": "\\text{Root in } (2, 2.5)",
          "explanation": "The root is trapped in the smaller interval $(2, 2.5)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$f(2) = -1 < 0$ and $f(2.5) = 5.625 > 0$, so the root lies in $(2, 2.5)$."
    }
  },
  {
    "id": "al.y2.pure.roots-iteration.q018",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "tags": [
      "iteration",
      "divergence",
      "cubic"
    ],
    "questionText": "For $x^3 - x - 1 = 0$, compare the iterations $x_{n+1} = \\sqrt[3]{1 + x_n}$ and $x_{n+1} = x_n^3 - 1$ starting from $x_0 = 1.2$. Find $x_1$ for each and explain which iteration is suitable.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Iteration 1 setup",
          "workingLatex": "x_{n+1} = \\sqrt[3]{1 + x_n}, \\quad x_0 = 1.2",
          "explanation": "Cube-root rearrangement of $x^3 = 1 + x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "First iterate (form 1)",
          "workingLatex": "x_1 = \\sqrt[3]{1 + 1.2} = \\sqrt[3]{2.2} \\approx 1.3006",
          "explanation": "Substitute $x_0 = 1.2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Iteration 2 setup",
          "workingLatex": "x_{n+1} = x_n^3 - 1, \\quad x_0 = 1.2",
          "explanation": "Alternative rearrangement $x = x^3 - 1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "First iterate (form 2)",
          "workingLatex": "x_1 = (1.2)^3 - 1 = 1.728 - 1 = 0.7280",
          "explanation": "Substitute $x_0 = 1.2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Derivative of form 1",
          "workingLatex": "g(x) = \\sqrt[3]{1+x},\\quad g'(x) = \\frac{1}{3(1+x)^{2/3}}",
          "explanation": "Differentiate the cube-root function.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Magnitude near root",
          "workingLatex": "|g'(x)| \\approx 0.21 < 1 \\text{ near the root } x \\approx 1.32",
          "explanation": "Small gradient magnitude means the iteration contracts toward the fixed point.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Derivative of form 2",
          "workingLatex": "g(x) = x^3 - 1,\\quad g'(x) = 3x^2",
          "explanation": "Differentiate the cubic.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Magnitude near root (form 2)",
          "workingLatex": "|g'(x)| \\approx 3(1.32)^2 \\approx 5.2 > 1",
          "explanation": "Large gradient means each step overshoots and the iteration diverges.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conclude",
          "workingLatex": "x_{n+1} = \\sqrt[3]{1 + x_n} \\text{ is suitable}",
          "explanation": "Only the cube-root rearrangement has $|g'(x)| < 1$ near the root, so it converges.",
          "diagram": null
        }
      ],
      "finalAnswer": "Form 1: $x_1 \\approx 1.3006$ (convergent). Form 2: $x_1 = 0.7280$ (divergent). Use $x_{n+1} = \\sqrt[3]{1 + x_n}$ because $|g'(x)| < 1$ near the root."
    }
  },
  {
    "id": "al.y2.pure.roots-iteration.q019",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": [
      "fixed-point iteration",
      "calculating terms"
    ],
    "questionText": "The iterative formula $x_{n+1} = \\sqrt{x_n + 5}$ is used with $x_0 = 3$. Find $x_1$ and $x_2$, giving your answers correct to $3$ decimal places.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Substitute $x_0$ into the formula",
          "workingLatex": "x_1 = \\sqrt{x_0 + 5} = \\sqrt{3 + 5} = \\sqrt{8}",
          "explanation": "Fixed-point iteration replaces $x_n$ with the previous value; here we plug $x_0 = 3$ into $x_{n+1} = \\sqrt{x_n + 5}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate $x_1$",
          "workingLatex": "x_1 = \\sqrt{8} \\approx 2.828",
          "explanation": "Squaring root $8$ gives the first iterate; to three decimal places $x_1 = 2.828$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute $x_1$ to find $x_2$",
          "workingLatex": "x_2 = \\sqrt{x_1 + 5} = \\sqrt{2.828 + 5} = \\sqrt{7.828}",
          "explanation": "The same rule is applied again, now using the value just found for $x_1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate $x_2$",
          "workingLatex": "x_2 = \\sqrt{7.828} \\approx 2.798",
          "explanation": "Carrying out the square root gives the second iterate $x_2 = 2.798$ (3 d.p.).",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check the values are reasonable",
          "workingLatex": "2.828 \\text{ and } 2.798 \\text{ are close to a fixed point near } 2.8",
          "explanation": "Successive terms are moving closer together, which is what we expect when an iteration converges toward a root of $x = \\sqrt{x + 5}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answers",
          "workingLatex": "x_1 = 2.828, \\quad x_2 = 2.798",
          "explanation": "Both iterates are found by repeated substitution into the same formula, keeping full calculator accuracy until the final rounding.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_1 = 2.828$, $x_2 = 2.798$ (3 d.p.)."
    }
  },
  {
    "id": "al.y2.pure.roots-iteration.q020",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "fixed-point iteration",
      "calculating terms",
      "rational formula"
    ],
    "questionText": "Use the iterative formula $x_{n+1} = \\dfrac{2x_n + 7}{x_n + 3}$ with $x_0 = 4$ to find $x_1$, $x_2$ and $x_3$. Give each answer as an exact fraction.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Calculate $x_1$ from $x_0 = 4$",
          "workingLatex": "x_1 = \\frac{2(4) + 7}{4 + 3} = \\frac{15}{7}",
          "explanation": "Substituting $x_0 = 4$ into the fraction gives the first iterate exactly as $\\dfrac{15}{7}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate $x_2$ using $x_1 = \\dfrac{15}{7}$",
          "workingLatex": "x_2 = \\frac{2\\left(\\frac{15}{7}\\right) + 7}{\\frac{15}{7} + 3} = \\frac{\\frac{30}{7} + \\frac{49}{7}}{\\frac{15}{7} + \\frac{21}{7}} = \\frac{79}{36}",
          "explanation": "Working with fractions avoids rounding errors: combine numerators and denominators before dividing.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate $x_3$ using $x_2 = \\dfrac{79}{36}$",
          "workingLatex": "x_3 = \\frac{2\\left(\\frac{79}{36}\\right) + 7}{\\frac{79}{36} + 3} = \\frac{\\frac{158}{36} + \\frac{252}{36}}{\\frac{79}{36} + \\frac{108}{36}} = \\frac{410}{187}",
          "explanation": "Each step feeds the previous exact answer back into the same rearrangement.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Verify $x_2$ and $x_3$ are close",
          "workingLatex": "\\frac{79}{36} \\approx 2.194, \\quad \\frac{410}{187} \\approx 2.193",
          "explanation": "The decimal forms differ only in the third decimal place, suggesting convergence toward a fixed point.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret the pattern",
          "workingLatex": "x_n \\text{ approaches the value where } x = \\frac{2x + 7}{x + 3}",
          "explanation": "A fixed point satisfies $x = g(x)$; the iteration homes in on that value when $|g'(x)| < 1$ near the root.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the three iterates",
          "workingLatex": "x_1 = \\frac{15}{7}, \\quad x_2 = \\frac{79}{36}, \\quad x_3 = \\frac{410}{187}",
          "explanation": "These are the exact fractional forms of the first three iterates after $x_0 = 4$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_1 = \\dfrac{15}{7}$, $x_2 = \\dfrac{79}{36}$, $x_3 = \\dfrac{410}{187}$."
    }
  },
  {
    "id": "al.y2.pure.roots-iteration.q021",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": [
      "fixed-point iteration",
      "calculating terms",
      "cube root"
    ],
    "questionText": "The equation $x^3 - 2x - 5 = 0$ has a root near $x = 2$. Using $x_{n+1} = \\sqrt[3]{2x_n + 5}$ with $x_0 = 2.1$, find $x_1$ and $x_2$ correct to $3$ decimal places.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Confirm the rearrangement",
          "workingLatex": "x^3 - 2x - 5 = 0 \\Rightarrow x^3 = 2x + 5 \\Rightarrow x = \\sqrt[3]{2x + 5}",
          "explanation": "Isolating $x$ on the left gives an iterative formula of the form $x_{n+1} = g(x_n)$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute $x_0 = 2.1$",
          "workingLatex": "x_1 = \\sqrt[3]{2(2.1) + 5} = \\sqrt[3]{9.2}",
          "explanation": "Double $x_0$, add $5$, then take the cube root to obtain $x_1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate $x_1$",
          "workingLatex": "x_1 = \\sqrt[3]{9.2} \\approx 2.096",
          "explanation": "To three decimal places the first iterate is $x_1 = 2.096$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute $x_1$ to find $x_2$",
          "workingLatex": "x_2 = \\sqrt[3]{2(2.096) + 5} = \\sqrt[3]{9.192}",
          "explanation": "The same rule is applied using the value just found for $x_1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate $x_2$",
          "workingLatex": "x_2 = \\sqrt[3]{9.192} \\approx 2.095",
          "explanation": "The second iterate is $x_2 = 2.095$ to three decimal places.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Note convergence",
          "workingLatex": "x_1 \\text{ and } x_2 \\text{ differ only in the third decimal place}",
          "explanation": "Successive values are settling down, which is the hallmark of a convergent fixed-point iteration near a root.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answers",
          "workingLatex": "x_1 = 2.096, \\quad x_2 = 2.095",
          "explanation": "Both iterates are obtained by repeated substitution into $x_{n+1} = \\sqrt[3]{2x + 5}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_1 = 2.096$, $x_2 = 2.095$ (3 d.p.)."
    }
  },
  {
    "id": "al.y2.pure.roots-iteration.q022",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "written",
    "tags": [
      "staircase convergence",
      "iteration behaviour"
    ],
    "questionText": "A fixed-point iteration produces the values $x_0 = 1$, $x_1 = 1.8$, $x_2 = 2.04$, $x_3 = 2.008$, $x_4 = 2.002$. Describe the type of convergence shown on a cobweb diagram.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Compare successive terms",
          "workingLatex": "x_1 - x_0 = 0.8, \\quad x_2 - x_1 = 0.24, \\quad x_3 - x_2 = -0.032, \\quad x_4 - x_3 = -0.006",
          "explanation": "The gaps between consecutive iterates are shrinking, so the sequence is homing in on a limit.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the limit",
          "workingLatex": "x_n \\to 2 \\text{ as } n \\to \\infty",
          "explanation": "The values oscillate slightly around $2$ but get closer each time, so the fixed point is approximately $x = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall cobweb terminology",
          "workingLatex": "\\text{Staircase: same side of } y = x \\text{ each step; Cobweb: alternate sides}",
          "explanation": "On a cobweb diagram, whether iterates stay on one side of the line $y = x$ or bounce across it determines the name.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check the side of $y = x$",
          "workingLatex": "x_0 < 2,\\ x_1 > 2,\\ x_2 > 2,\\ x_3 < 2,\\ x_4 < 2",
          "explanation": "The iterates cross from below to above the fixed point and back, but with decreasing amplitude.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Classify the behaviour",
          "workingLatex": "\\text{Alternating sides with shrinking steps} \\Rightarrow \\text{cobweb convergence}",
          "explanation": "Because each new $x$-value lands on the opposite side of the fixed point from the previous one, the path spirals inward in a cobweb pattern.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the description",
          "workingLatex": "\\text{Cobweb convergence to } x = 2",
          "explanation": "The iteration converges in a cobweb (spiral) fashion toward the fixed point at $x = 2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Cobweb convergence toward the fixed point $x = 2$ (iterates alternate sides of $y = x$ while approaching the root)."
    }
  },
  {
    "id": "al.y2.pure.roots-iteration.q023",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "rearrangement",
      "iterative formula"
    ],
    "questionText": "Show that $x^3 + x - 10 = 0$ can be written in the form $x = g(x)$ and write down a suitable iterative formula $x_{n+1} = g(x_n)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rearrange to isolate $x$",
          "workingLatex": "x^3 + x - 10 = 0 \\Rightarrow x^3 = 10 - x",
          "explanation": "Moving the $x$ term to the right-hand side prepares us to take a root.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Take the cube root of both sides",
          "workingLatex": "x = \\sqrt[3]{10 - x}",
          "explanation": "Cube-rooting both sides leaves $x$ alone on the left, giving $x = g(x)$ with $g(x) = \\sqrt[3]{10 - x}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the iterative formula",
          "workingLatex": "x_{n+1} = \\sqrt[3]{10 - x_n}",
          "explanation": "Replacing $x$ by $x_n$ on the right and $x_{n+1}$ on the left gives the fixed-point iteration.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Verify at a trial value",
          "workingLatex": "g(2) = \\sqrt[3]{8} = 2",
          "explanation": "At $x = 2$, $g(2) = \\sqrt[3]{8} = 2$, confirming that $x = 2$ is a fixed point of this rearrangement.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check $g'(x)$ for convergence",
          "workingLatex": "g'(x) = -\\frac{1}{3}(10 - x)^{-2/3}",
          "explanation": "Differentiating: the cube root gives a factor of $-\\dfrac{1}{3}(10-x)^{-2/3}$, whose magnitude is less than $1$ near $x = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate $|g'(2)|$",
          "workingLatex": "|g'(2)| = \\frac{1}{3}(8)^{-2/3} = \\frac{1}{3} \\times \\frac{1}{4} = \\frac{1}{12} < 1",
          "explanation": "Since $|g'(x)| < 1$ at the root, the iteration is expected to converge when started sufficiently close.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the iterative formula",
          "workingLatex": "x_{n+1} = \\sqrt[3]{10 - x_n}",
          "explanation": "This is a valid rearrangement of $x^3 + x - 10 = 0$ suitable for fixed-point iteration.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_{n+1} = \\sqrt[3]{10 - x_n}$, from $x = \\sqrt[3]{10 - x}$."
    }
  },
  {
    "id": "al.y2.pure.roots-iteration.q024",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": [
      "Newton-Raphson",
      "iterative formula"
    ],
    "questionText": "Use one step of the Newton–Raphson method with $x_0 = 2$ to find an approximation to a root of $f(x) = x^2 - 5$. Give $x_1$ as an exact fraction.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the Newton–Raphson formula",
          "workingLatex": "x_{n+1} = x_n - \\frac{f(x_n)}{f'(x_n)}",
          "explanation": "Newton's method adjusts $x_n$ by subtracting the ratio of the function value to its gradient at that point.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find $f(x_0)$ and $f'(x_0)$",
          "workingLatex": "f(2) = 4 - 5 = -1, \\quad f'(x) = 2x \\Rightarrow f'(2) = 4",
          "explanation": "At $x_0 = 2$, the curve is $1$ unit below the axis and the gradient is $4$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute into the formula",
          "workingLatex": "x_1 = 2 - \\frac{-1}{4} = 2 + \\frac{1}{4}",
          "explanation": "A negative $f$ value and positive gradient moves the next guess to the right of $x_0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify",
          "workingLatex": "x_1 = \\frac{9}{4}",
          "explanation": "Adding $\\dfrac{1}{4}$ to $2$ gives the exact first iterate $\\dfrac{9}{4}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret the result",
          "workingLatex": "\\frac{9}{4} = 2.25 \\text{ is closer to } \\sqrt{5} \\approx 2.236",
          "explanation": "The new estimate is nearer the positive root $\\sqrt{5}$ than the starting value $2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State $x_1$",
          "workingLatex": "x_1 = \\frac{9}{4}",
          "explanation": "One Newton step from $x_0 = 2$ gives $x_1 = \\dfrac{9}{4}$ exactly.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_1 = \\dfrac{9}{4}$."
    }
  },
  {
    "id": "al.y2.pure.roots-iteration.q025",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "tags": [
      "convergence",
      "derivative test",
      "g'(x)"
    ],
    "questionText": "A fixed-point iteration uses $g(x) = \\cos x$. The root $\\alpha$ satisfies $\\cos \\alpha = \\alpha$ and lies in $(0, 1)$. Show that $|g'(\\alpha)| < 1$ and hence explain why the iteration converges.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate $g(x)$",
          "workingLatex": "g(x) = \\cos x \\Rightarrow g'(x) = -\\sin x",
          "explanation": "The derivative tells us how steeply $g(x)$ crosses the line $y = x$ at the fixed point.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the convergence condition",
          "workingLatex": "|g'(\\alpha)| < 1 \\Rightarrow \\text{local convergence}",
          "explanation": "When the magnitude of the gradient of $g$ at the fixed point is less than $1$, errors shrink by that factor each iteration.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Bound $\\alpha$",
          "workingLatex": "0 < \\alpha < 1 \\Rightarrow 0 < \\sin \\alpha < \\sin 1",
          "explanation": "Because $\\alpha$ lies between $0$ and $1$ radian, $\\sin \\alpha$ is positive and less than $\\sin 1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate an upper bound",
          "workingLatex": "\\sin 1 \\approx 0.841 < 1",
          "explanation": "Since $\\sin 1 < 1$, we know $\\sin \\alpha < 1$ throughout the interval.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute $|g'(\\alpha)|$",
          "workingLatex": "|g'(\\alpha)| = |-\\sin \\alpha| = \\sin \\alpha < 1",
          "explanation": "The absolute gradient at the fixed point is strictly less than $1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Link to cobweb geometry",
          "workingLatex": "\\text{Gradient of } g \\text{ at } \\alpha \\text{ is shallower than } y = x",
          "explanation": "When $|g'(\\alpha)| < 1$, the graph of $g$ is less steep than the identity line, so iterates move toward $\\alpha$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Describe the convergence type",
          "workingLatex": "g'(\\alpha) < 0 \\Rightarrow \\text{cobweb (alternating) convergence}",
          "explanation": "Because $g'(\\alpha) = -\\sin \\alpha$ is negative, iterates bounce across the fixed point while closing in.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Conclude",
          "workingLatex": "|g'(\\alpha)| < 1, \\text{ so the iteration converges to } \\alpha",
          "explanation": "The derivative test confirms that fixed-point iteration with $g(x) = \\cos x$ converges to the root in $(0, 1)$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Numerical value of $\\alpha$",
          "workingLatex": "\\alpha \\approx 0.739 \\text{ (known as the Dottie number)}",
          "explanation": "The unique solution to $\\cos x = x$ in $(0,1)$ is approximately $0.739$, and the iteration $x_{n+1} = \\cos x_n$ converges to it from any $x_0 \\in [0,1]$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$|g'(\\alpha)| = \\sin\\alpha < 1$, so the iteration converges (cobweb convergence because $g'(\\alpha) < 0$)."
    }
  },
  {
    "id": "al.y2.pure.roots-iteration.q026",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "tags": [
      "divergence",
      "derivative test",
      "g'(x)"
    ],
    "questionText": "Consider the iterative formula $x_{n+1} = x_n^2 - 2$ with a fixed point at $\\alpha = 2$. Show that $|g'(\\alpha)| > 1$ and explain why the iteration diverges when $x_0$ is close to $2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify $g(x)$",
          "workingLatex": "g(x) = x^2 - 2",
          "explanation": "The iteration has the standard form $x_{n+1} = g(x_n)$ with this quadratic function.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Verify $\\alpha = 2$ is a fixed point",
          "workingLatex": "g(2) = 4 - 2 = 2",
          "explanation": "Substituting $x = 2$ returns $2$, confirming it is a fixed point of the iteration.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate",
          "workingLatex": "g'(x) = 2x",
          "explanation": "Differentiating $x^2 - 2$ gives a linear gradient function.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate at the fixed point",
          "workingLatex": "g'(2) = 2(2) = 4",
          "explanation": "At $\\alpha = 2$, the gradient of $g$ is $4$, steeper than the line $y = x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check the magnitude",
          "workingLatex": "|g'(2)| = 4 > 1",
          "explanation": "Because $|g'(\\alpha)| > 1$, each iteration amplifies the error rather than reducing it.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Illustrate with one step from $x_0 = 2.1$",
          "workingLatex": "x_1 = (2.1)^2 - 2 = 4.41 - 2 = 2.41",
          "explanation": "Starting just above $2$, one step moves the iterate further away to $2.41$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Explain geometrically",
          "workingLatex": "\\text{Steeper than } y = x \\Rightarrow \\text{iterates move away from } \\alpha",
          "explanation": "On a cobweb diagram, the path spirals outward instead of inward when $|g'(\\alpha)| > 1$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the conclusion",
          "workingLatex": "|g'(2)| = 4 > 1 \\Rightarrow \\text{divergence}",
          "explanation": "The derivative test shows this rearrangement is unsuitable for finding the root at $x = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Give a convergent alternative",
          "workingLatex": "x^2 - 2 = x \\Rightarrow x = \\sqrt{x + 2}, \\quad g'(2) = \\frac{1}{2\\sqrt{4}} = \\frac{1}{4} < 1",
          "explanation": "Rearranging to $x = \\sqrt{x + 2}$ gives $|g'(2)| = \\dfrac{1}{4} < 1$, so that formula would converge to $\\alpha = 2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$|g'(2)| = 4 > 1$, so errors grow each step and the iteration diverges away from $\\alpha = 2$."
    }
  },
  {
    "id": "al.y2.pure.roots-iteration.q027",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "choosing g(x)",
      "rearrangement",
      "convergence"
    ],
    "questionText": "The equation $x^3 - x - 1 = 0$ has a root $\\alpha \\approx 1.32$ in the interval $[1, 2]$. Two rearrangements are proposed:\n\n(A) $x_{n+1} = x_n^3 - 1$\n\n(B) $x_{n+1} = \\sqrt[3]{x_n + 1}$\n\nDetermine which formula is suitable for finding $\\alpha$, giving reasons.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify $g(x)$ for each option",
          "workingLatex": "g_A(x) = x^3 - 1, \\quad g_B(x) = \\sqrt[3]{x + 1}",
          "explanation": "Each rearrangement corresponds to a different function $g$ in the fixed-point form $x = g(x)$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate option (A)",
          "workingLatex": "g_A'(x) = 3x^2",
          "explanation": "The gradient of rearrangement (A) is a parabola opening upward.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Test (A) at $\\alpha \\approx 1.32$",
          "workingLatex": "g_A'(1.32) = 3(1.32)^2 \\approx 5.23 > 1",
          "explanation": "Near the root, $|g_A'(\\alpha)| > 1$, so iteration (A) would diverge.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Differentiate option (B)",
          "workingLatex": "g_B'(x) = \\frac{1}{3}(x + 1)^{-2/3}",
          "explanation": "The cube-root rearrangement has a gentler gradient near the root.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Test (B) at $\\alpha \\approx 1.32$",
          "workingLatex": "g_B'(1.32) = \\frac{1}{3}(2.32)^{-2/3} \\approx 0.22 < 1",
          "explanation": "Here $|g_B'(\\alpha)| < 1$, satisfying the convergence condition.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check fixed point for (B)",
          "workingLatex": "g_B(\\alpha) = \\alpha \\Leftrightarrow \\alpha^3 = \\alpha + 1",
          "explanation": "Option (B) is derived directly from the original equation, so its fixed point is the required root.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compare starting values",
          "workingLatex": "x_0 = 1.5 \\Rightarrow g_B(1.5) = \\sqrt[3]{2.5} \\approx 1.36",
          "explanation": "A trial step from $x_0 = 1.5$ stays near $\\alpha$, whereas (A) would send $1.5$ to $2.375$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Conclude",
          "workingLatex": "\\text{Use (B): } x_{n+1} = \\sqrt[3]{x_n + 1}",
          "explanation": "Only rearrangement (B) has $|g'(\\alpha)| < 1$ and keeps iterates near the root in $[1, 2]$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Summarise the derivative test",
          "workingLatex": "|g_A'(\\alpha)| \\approx 5.23 > 1 \\text{ (diverges)}, \\quad |g_B'(\\alpha)| \\approx 0.22 < 1 \\text{ (converges)}",
          "explanation": "Comparing $|g'(\\alpha)|$ at the same root is the standard way to decide between competing rearrangements.",
          "diagram": null
        }
      ],
      "finalAnswer": "Use (B) $x_{n+1} = \\sqrt[3]{x_n + 1}$ because $|g'(\\alpha)| \\approx 0.22 < 1$; (A) has $|g'(\\alpha)| > 1$ and diverges."
    }
  },
  {
    "id": "al.y2.pure.roots-iteration.q028",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "tags": [
      "staircase convergence",
      "cobweb convergence",
      "iteration behaviour"
    ],
    "questionText": "Explain the difference between staircase and cobweb convergence when illustrated on a cobweb diagram for $x_{n+1} = g(x_n)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the diagram",
          "workingLatex": "\\text{Plot } y = g(x) \\text{ and } y = x \\text{ on the same axes}",
          "explanation": "The cobweb diagram tracks how each iterate moves between the curve $y = g(x)$ and the line $y = x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Describe one iteration step",
          "workingLatex": "x_{n+1} = g(x_n) \\Rightarrow \\text{vertical to curve, then horizontal to } y = x",
          "explanation": "From $(x_n, x_n)$ on the line $y = x$, move vertically to the graph of $g$, then horizontally back to $y = x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Define staircase convergence",
          "workingLatex": "0 < g'(\\alpha) < 1 \\Rightarrow \\text{iterates stay on the same side of } \\alpha",
          "explanation": "When $g'(\\alpha)$ is positive but less than $1$, each new $x$-value lies between the previous one and $\\alpha$ on the same side.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Sketch staircase behaviour",
          "workingLatex": "\\text{Steps march along one side of } y = x \\text{ toward } \\alpha",
          "explanation": "The path looks like a staircase climbing or descending directly toward the fixed point without crossing it.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Define cobweb convergence",
          "workingLatex": "g'(\\alpha) < 0 \\Rightarrow \\text{iterates alternate sides of } \\alpha",
          "explanation": "A negative gradient at the fixed point means each iterate overshoots to the opposite side of $\\alpha$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Sketch cobweb behaviour",
          "workingLatex": "\\text{Path spirals inward, crossing } y = x \\text{ repeatedly}",
          "explanation": "The name comes from the web-like pattern formed when iterates bounce back and forth while closing in.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Link to $|g'(\\alpha)|$",
          "workingLatex": "|g'(\\alpha)| < 1 \\Rightarrow \\text{convergence; } > 1 \\Rightarrow \\text{divergence}",
          "explanation": "The sign of $g'(\\alpha)$ decides staircase vs cobweb; the magnitude decides whether the pattern shrinks or grows.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Summarise",
          "workingLatex": "\\text{Staircase: same side; Cobweb: alternate sides}",
          "explanation": "Both can converge when $|g'(\\alpha)| < 1$, but the geometry of the cobweb path differs according to the sign of $g'(\\alpha)$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Give an example of each",
          "workingLatex": "g(x) = \\sqrt{x+1}: \\text{staircase}; \\quad g(x) = \\cos x: \\text{cobweb}",
          "explanation": "The square-root rearrangement has positive gradient near its root; the cosine iteration has negative gradient.",
          "diagram": null
        }
      ],
      "finalAnswer": "Staircase: $0 < g'(\\alpha) < 1$, iterates stay on one side of $\\alpha$. Cobweb: $g'(\\alpha) < 0$ with $|g'(\\alpha)| < 1$, iterates alternate sides while converging."
    }
  },
  {
    "id": "al.y2.pure.roots-iteration.q029",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "fixed-point iteration",
      "calculating terms"
    ],
    "questionText": "Use $x_{n+1} = 1 + \\dfrac{2}{x_n^2}$ with $x_0 = 1.5$ to find $x_1$, $x_2$ and $x_3$, giving answers correct to $4$ decimal places.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Calculate $x_1$",
          "workingLatex": "x_1 = 1 + \\frac{2}{(1.5)^2} = 1 + \\frac{2}{2.25} = 1 + 0.888\\ldots",
          "explanation": "Square $x_0$, divide $2$ by the result, then add $1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate $x_1$",
          "workingLatex": "x_1 = 1.8889 \\text{ (4 d.p.)}",
          "explanation": "To four decimal places $x_1 = 1.8889$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate $x_2$",
          "workingLatex": "x_2 = 1 + \\frac{2}{(1.8889)^2} = 1 + \\frac{2}{3.5680} \\approx 1.5605",
          "explanation": "Substitute the rounded $x_1$ and repeat the same operations.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate $x_3$",
          "workingLatex": "x_3 = 1 + \\frac{2}{(1.5605)^2} = 1 + \\frac{2}{2.4352} \\approx 1.8213",
          "explanation": "A third application of the formula gives $x_3 = 1.8213$ to four decimal places.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Note the oscillation",
          "workingLatex": "x_1 \\approx 1.89,\\ x_2 \\approx 1.56,\\ x_3 \\approx 1.82",
          "explanation": "Values bounce above and below a limit near $1.7$, indicating cobweb convergence.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Identify the fixed point",
          "workingLatex": "x = 1 + \\frac{2}{x^2} \\Rightarrow x^3 = x + 2",
          "explanation": "The limit satisfies this cubic, which is related to finding roots of $x^3 - x - 2 = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check $|g'(x)|$ at the root",
          "workingLatex": "g'(x) = -\\frac{4}{x^3} \\Rightarrow |g'(\\alpha)| < 1 \\text{ near } \\alpha \\approx 1.65",
          "explanation": "The negative gradient confirms cobweb behaviour while $|g'(\\alpha)| < 1$ ensures convergence.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the three iterates",
          "workingLatex": "x_1 = 1.8889, \\quad x_2 = 1.5605, \\quad x_3 = 1.8213",
          "explanation": "These are the first three iterates after $x_0 = 1.5$, each to four decimal places.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Comment on accuracy",
          "workingLatex": "\\text{Keep extra digits during working to minimise rounding drift}",
          "explanation": "Using stored calculator values rather than rounded intermediates would give slightly more accurate later terms.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_1 = 1.8889$, $x_2 = 1.5605$, $x_3 = 1.8213$ (4 d.p.)."
    }
  },
  {
    "id": "al.y2.pure.roots-iteration.q030",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "tags": [
      "convergence",
      "derivative test",
      "fixed point"
    ],
    "questionText": "The iterative formula $x_{n+1} = \\dfrac{x_n^3 + 1}{4}$ has a fixed point $\\alpha$ in the interval $(0, 1)$. Find $g'(x)$ and use it to show that the iteration converges to this $\\alpha$ when $x_0$ is sufficiently close.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify $g(x)$",
          "workingLatex": "g(x) = \\frac{x^3 + 1}{4}",
          "explanation": "The iteration is $x_{n+1} = g(x_n)$ with this cubic function scaled by $\\dfrac{1}{4}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find fixed points",
          "workingLatex": "x = \\frac{x^3 + 1}{4} \\Rightarrow x^3 - 4x + 1 = 0",
          "explanation": "Fixed points satisfy this cubic equation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Locate the root in $(0, 1)$",
          "workingLatex": "f(0) = 1 > 0,\\ f(1) = -2 < 0 \\Rightarrow \\alpha \\in (0, 1)",
          "explanation": "Sign change confirms a root between $0$ and $1$; numerically $\\alpha \\approx 0.254$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Differentiate $g(x)$",
          "workingLatex": "g'(x) = \\frac{3x^2}{4}",
          "explanation": "The gradient of $g$ at any point depends only on $x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate $|g'(\\alpha)|$",
          "workingLatex": "g'(0.254) = \\frac{3(0.254)^2}{4} \\approx 0.048",
          "explanation": "At the root in $(0,1)$, the magnitude of the gradient is much less than $1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply the convergence theorem",
          "workingLatex": "|g'(\\alpha)| \\approx 0.05 < 1 \\Rightarrow \\text{local convergence}",
          "explanation": "Each iteration reduces the error to roughly $5\\%$ of its previous size.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Classify the cobweb type",
          "workingLatex": "g'(\\alpha) > 0 \\Rightarrow \\text{staircase convergence}",
          "explanation": "A positive gradient means iterates stay on the same side of $\\alpha$ as they approach it.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Conclude",
          "workingLatex": "g'(x) = \\frac{3x^2}{4},\\ |g'(\\alpha)| < 1 \\Rightarrow \\text{converges to } \\alpha \\approx 0.254",
          "explanation": "The derivative test confirms convergence to the fixed point in $(0, 1)$ when $x_0$ starts nearby.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Trial iteration from $x_0 = 0.3$",
          "workingLatex": "x_1 = \\frac{0.027 + 1}{4} = 0.257, \\quad x_2 \\approx 0.254",
          "explanation": "Starting just above $\\alpha$, two steps already reach the fixed point to three decimal places, confirming fast staircase convergence.",
          "diagram": null
        }
      ],
      "finalAnswer": "$g'(x) = \\dfrac{3x^2}{4}$. At $\\alpha \\approx 0.254$, $|g'(\\alpha)| \\approx 0.05 < 1$, so the iteration converges (staircase)."
    }
  },
  {
    "id": "al.y2.pure.roots-iteration.q031",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "Newton-Raphson",
      "calculating terms"
    ],
    "questionText": "The equation $x^3 - 3x - 1 = 0$ has a root near $x = 2$. Use Newton–Raphson with $x_0 = 2$ to find $x_1$ and $x_2$, giving answers correct to $3$ decimal places.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define $f(x)$ and $f'(x)$",
          "workingLatex": "f(x) = x^3 - 3x - 1, \\quad f'(x) = 3x^2 - 3",
          "explanation": "Newton's method needs both the function and its derivative.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate at $x_0 = 2$",
          "workingLatex": "f(2) = 8 - 6 - 1 = 1, \\quad f'(2) = 12 - 3 = 9",
          "explanation": "At $x_0 = 2$ the curve is $1$ unit above the axis with gradient $9$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate $x_1$",
          "workingLatex": "x_1 = 2 - \\frac{1}{9} = \\frac{17}{9} \\approx 1.889",
          "explanation": "Subtracting $\\dfrac{f(2)}{f'(2)}$ moves the estimate left toward the root.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate at $x_1 \\approx 1.889$",
          "workingLatex": "f(1.889) \\approx 0.089, \\quad f'(1.889) \\approx 7.71",
          "explanation": "The function value is now much smaller, showing progress toward a root.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Calculate $x_2$",
          "workingLatex": "x_2 = 1.889 - \\frac{0.089}{7.71} \\approx 1.877",
          "explanation": "A second Newton step refines the estimate to $x_2 = 1.877$ (3 d.p.).",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare with the true root",
          "workingLatex": "\\alpha \\approx 1.879 \\Rightarrow x_2 \\text{ is already very close}",
          "explanation": "Newton's method typically converges much faster than simple fixed-point iteration.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Note the quadratic convergence",
          "workingLatex": "\\text{Error roughly squares each step near a simple root}",
          "explanation": "This rapid improvement is why Newton–Raphson is preferred when it is safe to use.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the iterates",
          "workingLatex": "x_1 = 1.889, \\quad x_2 = 1.877",
          "explanation": "These are the first two Newton iterates from $x_0 = 2$, to three decimal places.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check $f(x_2)$",
          "workingLatex": "f(1.877) \\approx 0.003",
          "explanation": "The function value at $x_2$ is already near zero, confirming a good approximation to the root.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_1 = 1.889$, $x_2 = 1.877$ (3 d.p.)."
    }
  },
  {
    "id": "al.y2.pure.roots-iteration.q032",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "choosing g(x)",
      "comparing formulae",
      "convergence"
    ],
    "questionText": "For the equation $e^x = 4x$, two iterative formulae are suggested:\n\n(P) $x_{n+1} = \\dfrac{e^{x_n}}{4}$\n\n(Q) $x_{n+1} = \\ln(4x_n)$\n\nThe root $\\alpha \\approx 0.77$ lies in $[0, 1]$. By finding $g'(\\alpha)$ for each, decide which iteration converges more quickly near $\\alpha$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the functions",
          "workingLatex": "g_P(x) = \\frac{e^x}{4}, \\quad g_Q(x) = \\ln(4x)",
          "explanation": "Each rearrangement of $e^x = 4x$ gives a different fixed-point map.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate (P)",
          "workingLatex": "g_P'(x) = \\frac{e^x}{4}",
          "explanation": "The exponential derivative matches the original numerator scaled by $\\dfrac{1}{4}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate $g_P'(\\alpha)$",
          "workingLatex": "g_P'(0.77) = \\frac{e^{0.77}}{4} \\approx \\frac{2.16}{4} \\approx 0.54",
          "explanation": "At the root, $|g_P'(\\alpha)| \\approx 0.54 < 1$, so (P) converges.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Differentiate (Q)",
          "workingLatex": "g_Q'(x) = \\frac{1}{x}",
          "explanation": "The derivative of $\\ln(4x)$ simplifies to $\\dfrac{1}{x}$ because $\\ln 4$ is constant.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate $g_Q'(\\alpha)$",
          "workingLatex": "g_Q'(0.77) = \\frac{1}{0.77} \\approx 1.30 > 1",
          "explanation": "Here $|g_Q'(\\alpha)| > 1$, so iteration (Q) diverges near $\\alpha$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare magnitudes",
          "workingLatex": "|g_P'(\\alpha)| \\approx 0.54 < 1, \\quad |g_Q'(\\alpha)| \\approx 1.30 > 1",
          "explanation": "Only (P) satisfies the convergence condition at the root.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Interpret speed of convergence",
          "workingLatex": "\\text{Smaller } |g'(\\alpha)| \\Rightarrow \\text{faster convergence}",
          "explanation": "With $|g_P'(\\alpha)| \\approx 0.54$, errors shrink to about $54\\%$ each step — moderate speed.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Test one step from $x_0 = 0.8$",
          "workingLatex": "g_P(0.8) = \\frac{e^{0.8}}{4} \\approx 0.55, \\quad g_Q(0.8) = \\ln(3.2) \\approx 1.16",
          "explanation": "Formula (P) moves toward $\\alpha$; (Q) overshoots above $1$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conclude",
          "workingLatex": "\\text{Use (P); it converges while (Q) diverges}",
          "explanation": "Formula (P) $x_{n+1} = \\dfrac{e^{x_n}}{4}$ is the suitable choice near $\\alpha \\approx 0.77$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Use (P): $|g_P'(\\alpha)| \\approx 0.54 < 1$ (converges). (Q) has $|g_Q'(\\alpha)| \\approx 1.30 > 1$ (diverges)."
    }
  },
  {
    "id": "al.y2.pure.roots-iteration.q033",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "tags": [
      "divergence",
      "derivative test",
      "predicting behaviour"
    ],
    "questionText": "Let $g(x) = 2x - x^2$. The iterative formula $x_{n+1} = g(x_n)$ has fixed points at $x = 0$ and $x = 1$. Determine whether the iteration converges to $\\alpha = 1$ when $x_0 = 0.5$, explaining your reasoning.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate $g(x)$",
          "workingLatex": "g'(x) = 2 - 2x",
          "explanation": "The gradient of $g$ is linear, decreasing as $x$ increases.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate $g'(1)$",
          "workingLatex": "g'(1) = 2 - 2 = 0",
          "explanation": "At $\\alpha = 1$, the gradient is exactly zero — a special case of $|g'(\\alpha)| < 1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the convergence test",
          "workingLatex": "|g'(1)| = 0 < 1 \\Rightarrow \\text{convergence to } \\alpha = 1",
          "explanation": "With zero gradient at the fixed point, convergence is especially fast (second order).",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute the first few iterates from $x_0 = 0.5$",
          "workingLatex": "x_1 = 2(0.5) - 0.25 = 0.75, \\quad x_2 = 2(0.75) - 0.5625 = 0.9375",
          "explanation": "Each step moves noticeably closer to $1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Continue to $x_3$",
          "workingLatex": "x_3 = 2(0.9375) - (0.9375)^2 = 1.875 - 0.8799 \\approx 0.9951",
          "explanation": "By the third iterate we are within $0.005$ of $\\alpha = 1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Classify the cobweb pattern",
          "workingLatex": "g'(\\alpha) = 0 > 0 \\Rightarrow \\text{staircase convergence}",
          "explanation": "Iterates approach from one side without oscillation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check the other fixed point",
          "workingLatex": "g'(0) = 2 > 1 \\Rightarrow \\text{divergence from } x = 0",
          "explanation": "The iteration converges to $\\alpha = 1$, not to the other fixed point at $0$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Conclude",
          "workingLatex": "x_0 = 0.5 \\Rightarrow x_n \\to 1 \\text{ (staircase, fast convergence)}",
          "explanation": "Starting at $0.5$, the iteration converges rapidly to $\\alpha = 1$ because $g'(1) = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compare error reduction",
          "workingLatex": "|x_3 - 1| \\approx 0.005 \\text{ after only three steps}",
          "explanation": "With $g'(1) = 0$, errors shrink much faster than when $|g'(\\alpha)|$ is merely less than $1$ — this is called superlinear convergence.",
          "diagram": null
        }
      ],
      "finalAnswer": "Converges to $\\alpha = 1$: $g'(1) = 0 < 1$ gives fast staircase convergence; $x_1 = 0.75$, $x_2 = 0.9375$, $x_3 \\approx 0.995$."
    }
  },
  {
    "id": "al.y2.pure.roots-iteration.q034",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "fixed-point iteration",
      "interval",
      "calculating terms"
    ],
    "questionText": "Show that $f(x) = x^3 - 5x + 1$ changes sign on $[2, 3]$, and use $x_{n+1} = \\sqrt{\\dfrac{5x_n - 1}{x_n}}$ with $x_0 = 2.2$ to find $x_1$ and $x_2$ correct to $3$ decimal places.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Evaluate $f$ at the endpoints",
          "workingLatex": "f(2) = 8 - 10 + 1 = -1, \\quad f(3) = 27 - 15 + 1 = 13",
          "explanation": "A sign change from negative to positive confirms a root in $[2, 3]$ by the Intermediate Value Theorem.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Derive the iterative formula",
          "workingLatex": "x^3 - 5x + 1 = 0 \\Rightarrow x^3 = 5x - 1 \\Rightarrow x = \\sqrt{\\frac{5x - 1}{x}}",
          "explanation": "Dividing by $x$ (valid for $x \\neq 0$) and taking the square root gives the stated rearrangement.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute $x_0 = 2.2$",
          "workingLatex": "x_1 = \\sqrt{\\frac{5(2.2) - 1}{2.2}} = \\sqrt{\\frac{10}{2.2}} = \\sqrt{4.545\\ldots}",
          "explanation": "Multiply $x_0$ by $5$, subtract $1$, divide by $x_0$, then take the square root.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate $x_1$",
          "workingLatex": "x_1 = \\sqrt{4.545\\ldots} \\approx 2.132",
          "explanation": "To three decimal places $x_1 = 2.132$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute $x_1$ to find $x_2$",
          "workingLatex": "x_2 = \\sqrt{\\frac{5(2.132) - 1}{2.132}} = \\sqrt{\\frac{9.660}{2.132}} = \\sqrt{4.531}",
          "explanation": "Repeat the same procedure with the new iterate.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate $x_2$",
          "workingLatex": "x_2 = \\sqrt{4.531} \\approx 2.128",
          "explanation": "The second iterate is $x_2 = 2.128$ to three decimal places.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check convergence",
          "workingLatex": "x_1 - x_2 \\approx 0.004 \\Rightarrow \\text{settling toward a root near } 2.13",
          "explanation": "The small change between $x_1$ and $x_2$ suggests the iteration is converging in $[2, 3]$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify $|g'(x)|$ near the root",
          "workingLatex": "g(x) = \\sqrt{\\frac{5x-1}{x}} \\Rightarrow |g'(\\alpha)| < 1 \\text{ for the root in } [2,3]",
          "explanation": "The derivative test confirms this rearrangement is suitable for the root located by sign change.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answers",
          "workingLatex": "x_1 = 2.132, \\quad x_2 = 2.128",
          "explanation": "A root exists in $[2, 3]$ by sign change; the iterates from $x_0 = 2.2$ converge toward it.",
          "diagram": null
        }
      ],
      "finalAnswer": "Sign change: $f(2) = -1$, $f(3) = 13$. $x_1 = 2.132$, $x_2 = 2.128$ (3 d.p.)."
    }
  },
  {
    "id": "al.y2.pure.roots-iteration.q035",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "tags": [
      "convergence",
      "choosing g(x)",
      "Newton-Raphson",
      "iterative formula"
    ],
    "questionText": "The equation $x^2 - 3x - 1 = 0$ has a positive root $\\alpha = \\dfrac{3 + \\sqrt{13}}{2} \\approx 3.303$. (a) Show that $x = \\dfrac{x^2 - 1}{3}$ is a valid rearrangement. (b) Find $g'(x)$ and decide whether fixed-point iteration converges to $\\alpha$. (c) State one advantage of Newton–Raphson over this fixed-point method.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rearrange the equation (part a)",
          "workingLatex": "x^2 - 3x - 1 = 0 \\Rightarrow x^2 = 3x + 1 \\Rightarrow x = \\frac{x^2 - 1}{3}",
          "explanation": "Subtracting $1$ from both sides of $x^2 = 3x + 1$ and dividing by $3$ isolates $x$ on the left.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Confirm the fixed point",
          "workingLatex": "g(x) = \\frac{x^2 - 1}{3} \\Rightarrow g(\\alpha) = \\frac{\\alpha^2 - 1}{3}",
          "explanation": "At the root, $\\alpha^2 = 3\\alpha + 1$, so $g(\\alpha) = \\dfrac{3\\alpha + 1 - 1}{3} = \\alpha$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate $g(x)$ (part b)",
          "workingLatex": "g'(x) = \\frac{2x}{3}",
          "explanation": "The gradient of the iterative function grows linearly with $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate at $\\alpha \\approx 3.303$",
          "workingLatex": "g'(\\alpha) = \\frac{2(3.303)}{3} \\approx 2.20",
          "explanation": "At the positive root, the gradient exceeds $1$ in magnitude.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply the convergence test",
          "workingLatex": "|g'(\\alpha)| \\approx 2.20 > 1 \\Rightarrow \\text{divergence}",
          "explanation": "Fixed-point iteration with this rearrangement does not converge to $\\alpha$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Explain geometrically",
          "workingLatex": "\\text{Graph of } g \\text{ is steeper than } y = x \\text{ at } \\alpha",
          "explanation": "Iterates starting near $\\alpha$ are pushed away rather than drawn in.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Suggest a better rearrangement",
          "workingLatex": "x_{n+1} = \\sqrt{3x_n + 1} \\Rightarrow g'(\\alpha) = \\frac{3}{2\\sqrt{3\\alpha+1}} \\approx 0.45 < 1",
          "explanation": "The square-root form $x = \\sqrt{3x+1}$ would converge, illustrating the importance of choosing $g(x)$ carefully.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Newton–Raphson advantage (part c)",
          "workingLatex": "f(x) = x^2 - 3x - 1, \\quad x_{n+1} = x_n - \\frac{f(x_n)}{f'(x_n)}",
          "explanation": "Newton's method uses local gradient information to adjust each step optimally.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compare convergence rates",
          "workingLatex": "\\text{Newton: quadratic convergence near a simple root}",
          "explanation": "Newton–Raphson typically doubles the number of correct digits each step, far faster than a linearly convergent fixed-point map with small $|g'(\\alpha)|$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State when fixed-point is preferred",
          "workingLatex": "\\text{Fixed-point: simpler arithmetic; Newton: fewer steps}",
          "explanation": "Fixed-point iteration avoids computing derivatives but may need a carefully chosen rearrangement; Newton converges faster when $f'(\\alpha) \\neq 0$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Summarise parts (a)–(c)",
          "workingLatex": "\\text{(a) Valid rearrangement; (b) diverges since } |g'(\\alpha)| > 1; \\text{ (c) Newton is faster}",
          "explanation": "The chosen $g(x)$ fails the derivative test at $\\alpha$, while Newton–Raphson would succeed with rapid convergence.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Final check on $\\alpha$",
          "workingLatex": "\\alpha = \\frac{3 + \\sqrt{13}}{2} \\approx 3.303",
          "explanation": "This is the positive root from the quadratic formula applied to $x^2 - 3x - 1 = 0$.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $x = \\dfrac{x^2-1}{3}$ from $x^2 = 3x+1$. (b) $g'(x)=\\dfrac{2x}{3}$; $|g'(\\alpha)|\\approx 2.20>1$, so this iteration diverges. (c) Newton–Raphson converges quadratically (much faster) when $f'(\\alpha)\\neq 0$."
    }
  },
  {
    "id": "al.y2.pure.roots-iteration.q036",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "change of sign",
      "limitations",
      "double root"
    ],
    "questionText": "The function $f(x) = (x - 2)^2$ has a root at $x = 2$. Explain why evaluating $f(1)$ and $f(3)$ does **not** demonstrate a sign change, and state what this reveals about the limitations of the sign-change method.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Evaluate $f(1)$",
          "workingLatex": "f(1) = (1-2)^2 = 1",
          "explanation": "Substituting $x = 1$ gives a positive value because the squared term is never negative.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate $f(3)$",
          "workingLatex": "f(3) = (3-2)^2 = 1",
          "explanation": "Substituting $x = 3$ also gives $1$, so both endpoints share the same sign.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare the signs",
          "workingLatex": "f(1) > 0 \\text{ and } f(3) > 0",
          "explanation": "There is no sign change across the interval $[1,3]$, even though a root exists at $x = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Explain the graph behaviour at the root",
          "workingLatex": "f(x) \\text{ touches the } x\\text{-axis at } x=2 \\text{ but does not cross it}",
          "explanation": "At a repeated root the curve meets the axis tangentially, so the function stays on one side of zero near the root.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the method's requirement",
          "workingLatex": "\\text{Sign-change method requires } f(a)\\,f(b) < 0",
          "explanation": "The method is built on the Intermediate Value Theorem for continuous functions that actually cross the axis.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Identify the failure type",
          "workingLatex": "\\text{Failure: root of even multiplicity (touching, not crossing)}",
          "explanation": "A double root produces a 'touch' rather than a 'cross', so the function may remain non-negative (or non-positive) throughout an interval containing the root.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Contrast with a simple crossing root",
          "workingLatex": "\\text{e.g. } f(x)=x-2 \\Rightarrow f(1)<0,\\; f(3)>0",
          "explanation": "When the graph crosses the axis, the function values on either side must have opposite signs — that is the situation the method is designed for.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Note continuity is still satisfied here",
          "workingLatex": "f \\text{ is continuous on } [1,3]",
          "explanation": "Continuity alone is not enough; the sign must also change, which fails at a tangent touch.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Summarise the limitation",
          "workingLatex": "\\text{No sign change } \\not\\Rightarrow \\text{ no root; sign change needed to locate via IVT}",
          "explanation": "Students must recognise that absence of a sign change does not prove absence of a root, and presence of a root does not guarantee a detectable sign change.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Conclusion",
          "workingLatex": "\\text{Double roots can invalidate sign-change location}",
          "explanation": "Always inspect the graph or algebra when a root is suspected but endpoint values have the same sign.",
          "diagram": null
        }
      ],
      "finalAnswer": "Both $f(1) = 1$ and $f(3) = 1$ are positive, so there is no sign change. The sign-change method fails here because the root at $x = 2$ is a double root: the curve touches the $x$-axis without crossing, so $f(x)$ does not change sign in any interval containing the root."
    }
  },
  {
    "id": "al.y2.pure.roots-iteration.q037",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "tags": [
      "change of sign",
      "interval",
      "cubic"
    ],
    "questionText": "Show that the equation $x^3 - 4x - 1 = 0$ has a root in the interval $[2, 3]$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the function",
          "workingLatex": "f(x) = x^3 - 4x - 1",
          "explanation": "Rewriting the equation as $f(x) = 0$ lets us test endpoint values for a sign change.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate at the left endpoint",
          "workingLatex": "f(2) = 8 - 8 - 1 = -1",
          "explanation": "At $x = 2$ the value is negative.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate at the right endpoint",
          "workingLatex": "f(3) = 27 - 12 - 1 = 14",
          "explanation": "At $x = 3$ the value is positive.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compare signs",
          "workingLatex": "f(2) = -1 < 0 \\quad\\text{and}\\quad f(3) = 14 > 0",
          "explanation": "The endpoints have opposite signs.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check continuity",
          "workingLatex": "f \\text{ is a polynomial, hence continuous on } [2,3]",
          "explanation": "Polynomials are continuous everywhere, so the Intermediate Value Theorem applies on this closed interval.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply the sign-change principle",
          "workingLatex": "f(2)\\,f(3) < 0",
          "explanation": "A continuous function that changes sign over an interval must cross zero at least once inside that interval.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the IVT conclusion",
          "workingLatex": "\\exists\\, \\alpha \\in (2,3) \\text{ such that } f(\\alpha) = 0",
          "explanation": "Therefore the equation has at least one root strictly between $2$ and $3$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret for the original equation",
          "workingLatex": "x^3 - 4x - 1 = 0 \\text{ has a root in } (2,3)",
          "explanation": "This is the standard A-level 'show that' argument for locating a root.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Optional refinement note",
          "workingLatex": "f'(x) = 3x^2 - 4 > 0 \\text{ for } x \\ge 2",
          "explanation": "The function is increasing on $[2,3]$, so there is exactly one root in the interval — a useful extra observation in exams.",
          "diagram": null
        }
      ],
      "finalAnswer": "Since $f(2) = -1 < 0$ and $f(3) = 14 > 0$, with $f$ continuous on $[2,3]$, there is a root of $x^3 - 4x - 1 = 0$ in the interval $(2, 3)$."
    }
  },
  {
    "id": "al.y2.pure.roots-iteration.q038",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "iteration",
      "cobweb",
      "staircase",
      "convergence"
    ],
    "questionText": "The iteration $x_{n+1} = \\cos(x_n)$ with $x_0 = 0.5$ converges to the root of $x = \\cos x$. (a) Calculate $x_1$, $x_2$ and $x_3$ to 3 decimal places. (b) Classify the convergence as cobweb or staircase, giving a reason.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Compute $x_1$",
          "workingLatex": "x_1 = \\cos(0.5) \\approx 0.878",
          "explanation": "Substitute $x_0 = 0.5$ into the iteration formula.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Compute $x_2$",
          "workingLatex": "x_2 = \\cos(0.878) \\approx 0.639",
          "explanation": "Each new value is obtained by applying $\\cos$ to the previous iterate.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute $x_3$",
          "workingLatex": "x_3 = \\cos(0.639) \\approx 0.803",
          "explanation": "The values are moving toward the fixed point $\\alpha \\approx 0.739$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify the iteration function",
          "workingLatex": "g(x) = \\cos x",
          "explanation": "Fixed points satisfy $\\alpha = \\cos\\alpha$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Differentiate $g$",
          "workingLatex": "g'(x) = -\\sin x",
          "explanation": "The derivative at the root controls whether iterates overshoot (cobweb) or approach from one side (staircase).",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate $|g'(\\alpha)|$ at the root",
          "workingLatex": "|g'(\\alpha)| = |-\\sin\\alpha| = \\sin\\alpha \\approx 0.694 < 1",
          "explanation": "Since $\\sin\\alpha < 1$ at the root, the gradient magnitude is less than $1$, which is the condition for convergence.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check the sign of $g'(\\alpha)$",
          "workingLatex": "g'(\\alpha) = -\\sin\\alpha < 0",
          "explanation": "A negative gradient at the fixed point means successive iterates alternate above and below $\\alpha$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Observe the iterate pattern",
          "workingLatex": "x_0 < \\alpha < x_1,\\; x_2 < \\alpha < x_3,\\; \\ldots",
          "explanation": "The sequence oscillates around the root while narrowing — the hallmark of cobweb convergence.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the classification",
          "workingLatex": "\\text{Cobweb convergence because } g'(\\alpha) < 0 \\text{ and } |g'(\\alpha)| < 1",
          "explanation": "Staircase convergence occurs when $0 < g'(\\alpha) < 1$, so iterates approach from one side only.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Summarise",
          "workingLatex": "x_1 \\approx 0.878,\\; x_2 \\approx 0.639,\\; x_3 \\approx 0.803; \\text{ cobweb}",
          "explanation": "The negative gradient causes alternating overshoots that spiral inward to the root.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $x_1 \\approx 0.878$, $x_2 \\approx 0.639$, $x_3 \\approx 0.803$. (b) Cobweb convergence: $g'(\\alpha) = -\\sin\\alpha < 0$ with $|g'(\\alpha)| < 1$, so iterates alternate above and below the root while converging."
    }
  },
  {
    "id": "al.y2.pure.roots-iteration.q039",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "tags": [
      "iteration",
      "gradient",
      "classification"
    ],
    "questionText": "For the iteration $x_{n+1} = \\sqrt{4 - x_n}$, the fixed point $\\alpha$ satisfies $\\alpha = \\sqrt{4 - \\alpha}$. Find $\\alpha$ and determine whether convergence is cobweb or staircase.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the fixed-point equation",
          "workingLatex": "\\alpha = \\sqrt{4 - \\alpha}",
          "explanation": "Squaring is valid here because both sides are non-negative for the convergent root in context.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Square both sides",
          "workingLatex": "\\alpha^2 = 4 - \\alpha",
          "explanation": "This removes the square root and gives a quadratic.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange to standard form",
          "workingLatex": "\\alpha^2 + \\alpha - 4 = 0",
          "explanation": "Collect terms on one side.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve the quadratic",
          "workingLatex": "\\alpha = \\frac{-1 + \\sqrt{17}}{2} \\approx 1.562",
          "explanation": "Take the positive root because $\\sqrt{4-\\alpha}$ is non-negative.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write $g(x)$",
          "workingLatex": "g(x) = \\sqrt{4 - x}",
          "explanation": "The iteration is $x_{n+1} = g(x_n)$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Differentiate",
          "workingLatex": "g'(x) = -\\frac{1}{2\\sqrt{4-x}}",
          "explanation": "Use the chain rule on $(4-x)^{1/2}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate $g'(\\alpha)$",
          "workingLatex": "g'(\\alpha) = -\\frac{1}{2\\alpha} \\approx -0.320",
          "explanation": "At the fixed point, $g'(\\alpha)$ is negative.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check convergence condition",
          "workingLatex": "|g'(\\alpha)| \\approx 0.320 < 1",
          "explanation": "A magnitude less than $1$ guarantees local convergence to the fixed point.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Classify the convergence type",
          "workingLatex": "g'(\\alpha) < 0 \\Rightarrow \\text{cobweb convergence}",
          "explanation": "Negative gradient means iterates bounce from one side of $\\alpha$ to the other while closing in.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the answer",
          "workingLatex": "\\alpha \\approx 1.562,\\; \\text{cobweb}",
          "explanation": "If $g'(\\alpha)$ were positive with $|g'(\\alpha)| < 1$, the pattern would be a staircase instead.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\alpha = \\dfrac{-1 + \\sqrt{17}}{2} \\approx 1.562$. Since $g'(\\alpha) = -\\dfrac{1}{2\\alpha} < 0$ and $|g'(\\alpha)| < 1$, convergence is **cobweb**."
    }
  },
  {
    "id": "al.y2.pure.roots-iteration.q040",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "iteration",
      "fixed point",
      "square root"
    ],
    "questionText": "Use the iteration $x_{n+1} = \\sqrt{5 - x_n}$ with $x_0 = 1.5$ to find $x_1$, $x_2$ and $x_3$, each correct to 3 decimal places.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the iteration",
          "workingLatex": "x_{n+1} = \\sqrt{5 - x_n}, \\quad x_0 = 1.5",
          "explanation": "Each step substitutes the previous value into the square-root formula.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate $x_1$",
          "workingLatex": "x_1 = \\sqrt{5 - 1.5} = \\sqrt{3.5} \\approx 1.871",
          "explanation": "Under the square root we need a non-negative value; $5 - 1.5 = 3.5 > 0$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate $x_2$",
          "workingLatex": "x_2 = \\sqrt{5 - 1.871} = \\sqrt{3.129} \\approx 1.769",
          "explanation": "The iterates are approaching the fixed point from above.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate $x_3$",
          "workingLatex": "x_3 = \\sqrt{5 - 1.769} = \\sqrt{3.231} \\approx 1.798",
          "explanation": "Small adjustments show the sequence is converging.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Identify the fixed point (for context)",
          "workingLatex": "\\alpha^2 = 5 - \\alpha \\Rightarrow \\alpha \\approx 1.791",
          "explanation": "The true root of $\\alpha = \\sqrt{5-\\alpha}$ is about $1.791$, consistent with our iterates.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check $g'(\\alpha)$ for convergence",
          "workingLatex": "g'(\\alpha) = -\\frac{1}{2\\alpha} \\approx -0.279,\\; |g'(\\alpha)| < 1",
          "explanation": "The gradient condition confirms the iteration converges locally.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Note the convergence pattern",
          "workingLatex": "x_0 < \\alpha < x_1,\\; x_2 < \\alpha < x_3",
          "explanation": "Alternating above and below indicates cobweb behaviour.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Round consistently",
          "workingLatex": "\\text{All values to 3 d.p.: } 1.871,\\; 1.769,\\; 1.798",
          "explanation": "Keep the same rounding at each stage as required by the question.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Present the final iterates",
          "workingLatex": "x_1 \\approx 1.871,\\; x_2 \\approx 1.769,\\; x_3 \\approx 1.798",
          "explanation": "These are the required three iterations from the given starting value.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_1 \\approx 1.871$, $x_2 \\approx 1.769$, $x_3 \\approx 1.798$ (3 d.p.)."
    }
  },
  {
    "id": "al.y2.pure.roots-iteration.q041",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "change of sign",
      "iteration",
      "cube root"
    ],
    "questionText": "(a) Show that $x^3 + x - 5 = 0$ has a root in $[1, 2]$. (b) Use $x_{n+1} = \\sqrt[3]{5 - x_n}$ with $x_0 = 1.5$ to find $x_1$ and $x_2$ to 3 decimal places.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define $f(x)$ for part (a)",
          "workingLatex": "f(x) = x^3 + x - 5",
          "explanation": "Locating a root begins by testing convenient interval endpoints.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate $f(1)$",
          "workingLatex": "f(1) = 1 + 1 - 5 = -3",
          "explanation": "The left endpoint gives a negative value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate $f(2)$",
          "workingLatex": "f(2) = 8 + 2 - 5 = 5",
          "explanation": "The right endpoint gives a positive value.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply sign-change argument",
          "workingLatex": "f(1) < 0,\\; f(2) > 0,\\; f \\text{ continuous} \\Rightarrow \\text{root in } (1,2)",
          "explanation": "Opposite signs with continuity guarantee at least one root in the open interval.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rearrange for the iteration",
          "workingLatex": "x^3 + x = 5 \\Rightarrow x = \\sqrt[3]{5 - x}",
          "explanation": "Part (b) uses this rearrangement as the fixed-point formula.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute $x_1$",
          "workingLatex": "x_1 = \\sqrt[3]{5 - 1.5} = \\sqrt[3]{3.5} \\approx 1.518",
          "explanation": "Substitute $x_0 = 1.5$ into the cube-root formula.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compute $x_2$",
          "workingLatex": "x_2 = \\sqrt[3]{5 - 1.518} = \\sqrt[3]{3.482} \\approx 1.516",
          "explanation": "The second iterate moves slightly closer to the fixed point.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Estimate the fixed point",
          "workingLatex": "\\alpha \\approx 1.516",
          "explanation": "The iterates stabilise near $\\alpha \\approx 1.516$, confirming the method.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check convergence via $g'(\\alpha)$",
          "workingLatex": "g(x)=\\sqrt[3]{5-x},\\; g'(\\alpha) = -(5-\\alpha)^{-2/3} \\approx -0.30",
          "explanation": "With $|g'(\\alpha)| < 1$ and $g'(\\alpha) < 0$, convergence is cobweb.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State part (a) and (b) answers",
          "workingLatex": "\\text{Root in } (1,2);\\; x_1 \\approx 1.518,\\; x_2 \\approx 1.516",
          "explanation": "This combined style mirrors typical exam questions linking location and iteration.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $f(1) = -3 < 0$ and $f(2) = 5 > 0$, so there is a root in $(1, 2)$. (b) $x_1 \\approx 1.518$, $x_2 \\approx 1.516$."
    }
  },
  {
    "id": "al.y2.pure.roots-iteration.q042",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "tags": [
      "iteration",
      "gradient",
      "convergence"
    ],
    "questionText": "For the iteration $x_{n+1} = 0.5x + 2$, find the fixed point $\\alpha$ and the value of $g'(\\alpha)$. Explain why the iteration converges for any starting value near $\\alpha$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the iteration function",
          "workingLatex": "g(x) = 0.5x + 2",
          "explanation": "Fixed points satisfy $x = g(x)$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Solve for the fixed point",
          "workingLatex": "\\alpha = 0.5\\alpha + 2 \\Rightarrow 0.5\\alpha = 2 \\Rightarrow \\alpha = 4",
          "explanation": "Rearranging the linear equation gives a unique fixed point.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate $g$",
          "workingLatex": "g'(x) = 0.5",
          "explanation": "The derivative is constant for a linear iteration function.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate at the root",
          "workingLatex": "g'(\\alpha) = 0.5",
          "explanation": "At the fixed point the gradient equals $0.5$ everywhere.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check the convergence condition",
          "workingLatex": "|g'(\\alpha)| = 0.5 < 1",
          "explanation": "When the magnitude of the gradient at the root is less than $1$, errors shrink by a factor of about $0.5$ each step.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Note the sign of $g'(\\alpha)$",
          "workingLatex": "g'(\\alpha) = 0.5 > 0",
          "explanation": "A positive gradient less than $1$ in magnitude produces staircase convergence.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Explain error reduction",
          "workingLatex": "|x_{n+1} - \\alpha| \\approx |g'(\\alpha)|\\,|x_n - \\alpha|",
          "explanation": "Each iterate is roughly half as far from $\\alpha$ as the previous one — a strong convergence rate.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Comment on starting values",
          "workingLatex": "\\text{Linear } g \\text{ with } |g'| < 1 \\Rightarrow \\text{convergence from any } x_0",
          "explanation": "Because $g'(x) = 0.5$ everywhere, the contraction property holds globally, not just near $\\alpha$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Summarise",
          "workingLatex": "\\alpha = 4,\\; g'(\\alpha) = 0.5,\\; \\text{staircase convergence}",
          "explanation": "The iteration is well-behaved: fixed point $4$, gradient $0.5$, guaranteed convergence.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\alpha = 4$ and $g'(\\alpha) = 0.5$. Since $|g'(\\alpha)| = 0.5 < 1$ and $g'(\\alpha) > 0$, the iteration converges in a staircase pattern; the constant gradient less than $1$ in magnitude ensures convergence from any reasonable starting value."
    }
  },
  {
    "id": "al.y2.pure.roots-iteration.q043",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "change of sign",
      "limitations",
      "discontinuity"
    ],
    "questionText": "Let $f(x) = \\dfrac{1}{x - 2} + 1$. (a) Show that $f(1.5) < 0$ and $f(2.5) > 0$. (b) Explain why this does **not** prove a root of $f(x) = 0$ lies in $[1.5, 2.5]$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Evaluate $f(1.5)$",
          "workingLatex": "f(1.5) = \\frac{1}{-0.5} + 1 = -2 + 1 = -1",
          "explanation": "Below $x = 2$ the fraction $\\frac{1}{x-2}$ is negative.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate $f(2.5)$",
          "workingLatex": "f(2.5) = \\frac{1}{0.5} + 1 = 2 + 1 = 3",
          "explanation": "Above $x = 2$ the fraction is positive.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Record the sign change",
          "workingLatex": "f(1.5) < 0 \\quad\\text{and}\\quad f(2.5) > 0",
          "explanation": "Superficially, the endpoint values have opposite signs.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify the discontinuity",
          "workingLatex": "f \\text{ is undefined at } x = 2",
          "explanation": "The denominator $x - 2$ equals zero at $x = 2$, which lies inside $[1.5, 2.5]$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Describe the asymptotic behaviour",
          "workingLatex": "x \\to 2^- \\Rightarrow f(x) \\to -\\infty;\\quad x \\to 2^+ \\Rightarrow f(x) \\to +\\infty",
          "explanation": "The function jumps from $-\\infty$ to $+\\infty$ across the vertical asymptote — it never equals zero.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve $f(x) = 0$ directly",
          "workingLatex": "\\frac{1}{x-2} + 1 = 0 \\Rightarrow \\frac{1}{x-2} = -1 \\Rightarrow x - 2 = -1 \\Rightarrow x = 1",
          "explanation": "The only root is at $x = 1$, which lies **outside** the interval $[1.5, 2.5]$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the IVT requirement",
          "workingLatex": "\\text{IVT requires continuity on the whole interval } [a,b]",
          "explanation": "A sign change across endpoints is only valid for locating roots when the function is continuous throughout.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Explain the false conclusion",
          "workingLatex": "\\text{Sign change across a discontinuity can mislead}",
          "explanation": "The graph does not cross the axis between $1.5$ and $2.5$; it shoots to $\\pm\\infty$ at the asymptote instead.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "General lesson",
          "workingLatex": "\\text{Always check for asymptotes and breaks before applying sign-change}",
          "explanation": "This is a standard failure case students must be able to explain in exams.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $f(1.5) = -1 < 0$ and $f(2.5) = 3 > 0$. (b) $f$ is not continuous on $[1.5, 2.5]$ because of the vertical asymptote at $x = 2$. The IVT does not apply, and the actual root is at $x = 1$, outside the interval."
    }
  },
  {
    "id": "al.y2.pure.roots-iteration.q044",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "Newton-Raphson",
      "iteration",
      "staircase"
    ],
    "questionText": "Use the Newton–Raphson formula $x_{n+1} = \\dfrac{1}{2}\\left(x_n + \\dfrac{5}{x_n}\\right)$ with $x_0 = 2$ to find $x_1$ and $x_2$. Briefly explain why convergence is staircase.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall Newton's method structure",
          "workingLatex": "x_{n+1} = x_n - \\frac{f(x_n)}{f'(x_n)}",
          "explanation": "This iteration targets a root of $f(x) = x^2 - 5$, i.e. $x = \\sqrt{5}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Compute $x_1$",
          "workingLatex": "x_1 = \\tfrac{1}{2}\\left(2 + \\tfrac{5}{2}\\right) = \\tfrac{1}{2}(2 + 2.5) = 2.25",
          "explanation": "Substitute $x_0 = 2$ into the formula.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute $x_2$",
          "workingLatex": "x_2 = \\tfrac{1}{2}\\left(2.25 + \\tfrac{5}{2.25}\\right) = \\tfrac{1}{2}(2.25 + 2.\\overline{2}) \\approx 2.236",
          "explanation": "Each step refines the estimate of $\\sqrt{5} \\approx 2.236$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify $g(x)$",
          "workingLatex": "g(x) = \\tfrac{1}{2}\\left(x + \\tfrac{5}{x}\\right)",
          "explanation": "The iteration function is $g(x_n)$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Differentiate $g$",
          "workingLatex": "g'(x) = \\tfrac{1}{2}\\left(1 - \\tfrac{5}{x^2}\\right)",
          "explanation": "Differentiate term by term.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate at $\\alpha = \\sqrt{5}$",
          "workingLatex": "g'(\\sqrt{5}) = \\tfrac{1}{2}\\left(1 - \\tfrac{5}{5}\\right) = 0",
          "explanation": "At the root, $g'(\\alpha) = 0$, which is well inside $(-1, 1)$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Explain staircase behaviour",
          "workingLatex": "x_0 < \\sqrt{5} < x_1,\\; x_2 \\text{ closer but still } > \\sqrt{5}",
          "explanation": "All iterates stay on one side of $\\alpha$ because $g'(\\alpha) = 0 > -1$ and locally $g'(x) > 0$ near the root.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Link to quadratic convergence",
          "workingLatex": "g'(\\alpha) = 0 \\Rightarrow \\text{very fast convergence}",
          "explanation": "Newton's method typically squares the error near a simple root, which is faster than linear fixed-point iteration.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Classify",
          "workingLatex": "g'(\\alpha) = 0 \\geq 0 \\Rightarrow \\text{staircase (no alternation)}",
          "explanation": "No negative gradient means iterates do not bounce above and below the root.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Final values",
          "workingLatex": "x_1 = 2.25,\\; x_2 \\approx 2.236",
          "explanation": "Staircase convergence toward $\\sqrt{5}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_1 = 2.25$ and $x_2 \\approx 2.236$. Convergence is staircase because $g'(\\alpha) = 0 \\geq 0$ at $\\alpha = \\sqrt{5}$, so iterates approach from one side without alternating."
    }
  },
  {
    "id": "al.y2.pure.roots-iteration.q045",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "tags": [
      "change of sign",
      "exponential",
      "interval"
    ],
    "questionText": "Show that the equation $e^x = 3x$ has a root in the interval $[0, 1]$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rearrange to $f(x) = 0$",
          "workingLatex": "f(x) = e^x - 3x",
          "explanation": "A single function makes sign testing straightforward.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate at $x = 0$",
          "workingLatex": "f(0) = e^0 - 0 = 1",
          "explanation": "At the origin, the exponential term dominates and the value is positive.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate at $x = 1$",
          "workingLatex": "f(1) = e - 3 \\approx 2.718 - 3 = -0.282",
          "explanation": "At $x = 1$, the linear term $3x$ overtakes $e^x$, giving a negative value.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compare signs",
          "workingLatex": "f(0) > 0 \\quad\\text{and}\\quad f(1) < 0",
          "explanation": "The endpoints have opposite signs.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Confirm continuity",
          "workingLatex": "f \\text{ is continuous on } [0,1]",
          "explanation": "Both $e^x$ and $3x$ are continuous, so their difference is too.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply the sign-change / IVT argument",
          "workingLatex": "f(0)\\,f(1) < 0 \\Rightarrow \\exists\\, \\alpha \\in (0,1) \\text{ with } f(\\alpha) = 0",
          "explanation": "A continuous sign change forces at least one crossing of the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Translate back to the original equation",
          "workingLatex": "f(\\alpha) = 0 \\Leftrightarrow e^\\alpha = 3\\alpha",
          "explanation": "The root of $f$ is exactly a solution of the given equation.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Note there is another root for large $x$",
          "workingLatex": "f(2) = e^2 - 6 > 0",
          "explanation": "For $x$ large, $e^x$ grows faster than $3x$, so another root exists for $x > 1$ — but that does not affect the $[0,1]$ argument.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conclude",
          "workingLatex": "\\text{A root of } e^x = 3x \\text{ lies in } (0,1)",
          "explanation": "This is the required 'show that' result for the specified interval.",
          "diagram": null
        }
      ],
      "finalAnswer": "Since $f(0) = 1 > 0$ and $f(1) = e - 3 < 0$, with $f$ continuous on $[0,1]$, there is a root of $e^x - 3x = 0$, i.e. a solution of $e^x = 3x$, in $(0, 1)$."
    }
  },
  {
    "id": "al.y2.pure.roots-iteration.q046",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "numeric",
    "tags": [
      "change of sign",
      "iteration",
      "classification",
      "exam-style"
    ],
    "questionText": "Let $f(x) = x^3 - 3x - 1$.\n\n(a) Show that $f(x) = 0$ has a root $\\alpha$ in $[1, 2]$.\n(b) Show that the rearrangement $x = \\sqrt[3]{3x + 1}$ leads to the iteration $x_{n+1} = \\sqrt[3]{3x_n + 1}$.\n(c) Starting with $x_0 = 2$, find $x_1$, $x_2$ and $x_3$ to 3 decimal places.\n(d) Find $g'(\\alpha)$ where $g(x) = \\sqrt[3]{3x + 1}$ and classify the convergence.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Part (a): evaluate $f(1)$",
          "workingLatex": "f(1) = 1 - 3 - 1 = -3",
          "explanation": "The left endpoint is negative.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Part (a): evaluate $f(2)$",
          "workingLatex": "f(2) = 8 - 6 - 1 = 1",
          "explanation": "The right endpoint is positive.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Part (a): sign-change conclusion",
          "workingLatex": "f(1) < 0,\\; f(2) > 0,\\; f \\text{ continuous} \\Rightarrow \\alpha \\in (1,2)",
          "explanation": "Standard IVT argument locates the root.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Part (b): rearrange $x^3 - 3x - 1 = 0$",
          "workingLatex": "x^3 = 3x + 1",
          "explanation": "Isolate $x^3$ on one side.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Part (b): take cube roots",
          "workingLatex": "x = \\sqrt[3]{3x + 1} \\Rightarrow x_{n+1} = \\sqrt[3]{3x_n + 1}",
          "explanation": "Replacing $x$ with $x_n$ gives the stated iteration.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Part (c): compute $x_1$",
          "workingLatex": "x_1 = \\sqrt[3]{3(2) + 1} = \\sqrt[3]{7} \\approx 1.913",
          "explanation": "Substitute $x_0 = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Part (c): compute $x_2$",
          "workingLatex": "x_2 = \\sqrt[3]{3(1.913) + 1} = \\sqrt[3]{6.739} \\approx 1.889",
          "explanation": "Each iterate uses the previous result.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Part (c): compute $x_3$",
          "workingLatex": "x_3 = \\sqrt[3]{3(1.889) + 1} = \\sqrt[3]{6.667} \\approx 1.881",
          "explanation": "Values approach $\\alpha \\approx 1.879$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Part (d): differentiate $g(x) = (3x+1)^{1/3}$",
          "workingLatex": "g'(x) = \\tfrac{1}{3}(3x+1)^{-2/3}",
          "explanation": "Power rule on the cube-root expression.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Part (d): evaluate at $\\alpha \\approx 1.879$",
          "workingLatex": "3\\alpha + 1 \\approx 6.637,\\quad g'(\\alpha) \\approx \\tfrac{1}{3}(6.637)^{-2/3} \\approx 0.27",
          "explanation": "The gradient at the root is positive and less than $1$ in magnitude.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Part (d): classify convergence",
          "workingLatex": "0 < g'(\\alpha) < 1 \\Rightarrow \\text{staircase convergence}",
          "explanation": "Positive gradient below $1$ means iterates approach $\\alpha$ from one side without alternating.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Part (d): interpret the iterate pattern",
          "workingLatex": "x_0 > \\alpha > x_1 > x_2 > x_3",
          "explanation": "Each successive value decreases toward $\\alpha$ from above — consistent with staircase convergence.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Summarise all parts",
          "workingLatex": "\\alpha \\in (1,2);\\; x_1 \\approx 1.913,\\; x_2 \\approx 1.889,\\; x_3 \\approx 1.881;\\; \\text{staircase}",
          "explanation": "This multi-part structure is typical of harder exam questions on numerical methods.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $f(1) = -3 < 0$, $f(2) = 1 > 0$ $\\Rightarrow$ root in $(1,2)$. (b) From $x^3 = 3x + 1$, $x_{n+1} = \\sqrt[3]{3x_n + 1}$. (c) $x_1 \\approx 1.913$, $x_2 \\approx 1.889$, $x_3 \\approx 1.881$. (d) $g'(\\alpha) \\approx 0.27$; staircase convergence since $0 < g'(\\alpha) < 1$."
    }
  },
  {
    "id": "al.y2.pure.roots-iteration.q047",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "written",
    "tags": [
      "change of sign",
      "asymptote",
      "limitations"
    ],
    "questionText": "A student claims that because $f(0.5) = -1 < 0$ and $f(3.5) = 1 > 0$ for $f(x) = \\dfrac{x^2 - 4}{x - 2}$, a root of $f(x) = 0$ must lie in $[0.5, 3.5]$. Explain in detail why this reasoning is flawed, simplifying $f(x)$ where possible.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factor the numerator",
          "workingLatex": "x^2 - 4 = (x-2)(x+2)",
          "explanation": "Difference of two squares factorisation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Simplify for $x \\neq 2$",
          "workingLatex": "f(x) = \\frac{(x-2)(x+2)}{x-2} = x + 2",
          "explanation": "Cancellation is valid only where the denominator is non-zero.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the domain restriction",
          "workingLatex": "f \\text{ undefined at } x = 2",
          "explanation": "The original rational function has a removable discontinuity (hole) or needs care at $x = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Analyse the simplified function",
          "workingLatex": "f(x) = x + 2 \\quad (x \\neq 2)",
          "explanation": "Away from $x = 2$, the graph is a straight line with no zero crossings.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find any actual roots",
          "workingLatex": "x + 2 = 0 \\Rightarrow x = -2",
          "explanation": "The only root of the simplified form is at $x = -2$, outside $[0.5, 3.5]$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify endpoint signs using the original form",
          "workingLatex": "f(0.5) = \\frac{0.25 - 4}{-1.5} = \\frac{-3.75}{-1.5} = 2.5 > 0",
          "explanation": "Direct substitution gives a positive value; the student's claim that $f(0.5) = -1$ is arithmetically incorrect.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Correct evaluation at both ends",
          "workingLatex": "f(0.5) = 2.5 > 0,\\; f(3.5) = 5.5 > 0",
          "explanation": "There is in fact **no** sign change when evaluated correctly.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Explain the conceptual flaw",
          "workingLatex": "\\text{Sign-change method requires a continuous } f \\text{ on } [a,b]",
          "explanation": "Even if signs were opposite, a discontinuity or asymptote inside the interval invalidates the IVT conclusion.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Describe what happens at $x = 2$",
          "workingLatex": "\\lim_{x \\to 2} f(x) = 4 \\text{ (hole at } (2,4)\\text{)}",
          "explanation": "The function can be extended continuously to $x+2$, but the original rational form is undefined at $x=2$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Address the student's arithmetic error",
          "workingLatex": "\\text{Incorrect endpoint evaluation led to a false sign change}",
          "explanation": "Always simplify carefully and re-check arithmetic before applying the sign-change rule.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the correct conclusion",
          "workingLatex": "\\text{No root in } [0.5, 3.5]; \\text{ student's argument fails on arithmetic and reasoning}",
          "explanation": "The only root is at $x = -2$; within $[0.5, 3.5]$ the simplified function $x+2$ is always positive.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "General warning",
          "workingLatex": "\\text{Simplify, check continuity, verify signs}",
          "explanation": "Three checks prevent the common exam trap of misapplying the sign-change method.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Final exam-style response",
          "workingLatex": "\\text{Reject the student's claim with corrected arithmetic and continuity reasoning}",
          "explanation": "A complete answer cites the simplification, correct endpoint values, and the continuity requirement of the sign-change method.",
          "diagram": null
        }
      ],
      "finalAnswer": "Simplifying, $f(x) = x + 2$ for $x \\neq 2$, which has root $x = -2$ only. Correct evaluation gives $f(0.5) = 2.5 > 0$ and $f(3.5) = 5.5 > 0$ — no sign change. The student's claim fails due to arithmetic error and because sign-change requires continuity on the whole interval."
    }
  },
  {
    "id": "al.y2.pure.roots-iteration.q048",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "written",
    "tags": [
      "iteration",
      "divergence",
      "cobweb",
      "gradient"
    ],
    "questionText": "Consider $x_{n+1} = 2x_n - 3$ with fixed point $\\alpha$.\n\n(a) Find $\\alpha$. (b) Find $g'(x)$ and explain why the iteration diverges for $x_0 \\neq \\alpha$. (c) With $x_0 = 2.5$, find $x_1$, $x_2$, $x_3$ and describe the cobweb behaviour.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Part (a): set up fixed-point equation",
          "workingLatex": "\\alpha = 2\\alpha - 3",
          "explanation": "At a fixed point the input equals the output.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Part (a): solve for $\\alpha$",
          "workingLatex": "-\\alpha = -3 \\Rightarrow \\alpha = 3",
          "explanation": "Linear rearrangement gives the unique fixed point.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Part (b): identify $g(x)$",
          "workingLatex": "g(x) = 2x - 3",
          "explanation": "The iteration function is linear.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Part (b): differentiate",
          "workingLatex": "g'(x) = 2",
          "explanation": "The gradient is constant everywhere.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Part (b): convergence criterion",
          "workingLatex": "|g'(\\alpha)| = 2 > 1 \\Rightarrow \\text{divergence}",
          "explanation": "When the magnitude of the gradient at the root exceeds $1$, small errors grow instead of shrink.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Part (b): explain cobweb divergence",
          "workingLatex": "g'(\\alpha) = 2 > 0 \\Rightarrow \\text{iterates move away on one side}",
          "explanation": "Positive gradient greater than $1$ produces a diverging staircase; if negative and $|g'|>1$, cobweb divergence occurs.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Part (c): compute $x_1$",
          "workingLatex": "x_1 = 2(2.5) - 3 = 2",
          "explanation": "First step moves toward $\\alpha = 3$ from below.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Part (c): compute $x_2$",
          "workingLatex": "x_2 = 2(2) - 3 = 1",
          "explanation": "Now the iterate has crossed to the other side and is moving away.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Part (c): compute $x_3$",
          "workingLatex": "x_3 = 2(1) - 3 = -1",
          "explanation": "Values spiral further from $\\alpha$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Part (c): describe cobweb pattern",
          "workingLatex": "x_0 = 2.5,\\; x_1 = 2,\\; x_2 = 1,\\; x_3 = -1 \\text{ — increasing distance from } \\alpha",
          "explanation": "Although $g' > 0$ here gives monotone divergence (diverging staircase), the key exam point is $|g'| > 1$ prevents convergence.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Link to exam language",
          "workingLatex": "|g'(\\alpha)| > 1 \\Rightarrow \\text{iteration not suitable}",
          "explanation": "Before iterating, always check whether the rearrangement gives $|g'(\\alpha)| < 1$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Final summary",
          "workingLatex": "\\alpha = 3,\\; g'(\\alpha) = 2,\\; \\text{divergent iteration}",
          "explanation": "This illustrates the failure case when the gradient condition is violated.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Exam takeaway",
          "workingLatex": "\\text{Always verify } |g'(\\alpha)| < 1 \\text{ before choosing an iteration}",
          "explanation": "A rearrangement that algebraically works may still produce a divergent sequence if the gradient at the root is too large.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\alpha = 3$. (b) $g'(x) = 2$, so $|g'(\\alpha)| = 2 > 1$ and the iteration diverges. (c) $x_1 = 2$, $x_2 = 1$, $x_3 = -1$; iterates move increasingly far from $\\alpha$ (diverging staircase)."
    }
  },
  {
    "id": "al.y2.pure.roots-iteration.q049",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "numeric",
    "tags": [
      "change of sign",
      "iteration",
      "exam-style",
      "classification"
    ],
    "questionText": "Consider $f(x) = x^3 - x - 1$.\n\n(a) Show that $f(x) = 0$ has a root in $[1, 2]$.\n(b) Verify that $x = \\sqrt[3]{x + 1}$ is a valid rearrangement and use $x_{n+1} = \\sqrt[3]{x_n + 1}$ with $x_0 = 1.5$ to find $x_1$, $x_2$, $x_3$ to 3 d.p.\n(c) Find $g'(\\alpha)$ and classify the convergence pattern.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Part (a): $f(1)$",
          "workingLatex": "f(1) = 1 - 1 - 1 = -1",
          "explanation": "Negative at the left endpoint.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Part (a): $f(2)$",
          "workingLatex": "f(2) = 8 - 2 - 1 = 5",
          "explanation": "Positive at the right endpoint.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Part (a): conclude root location",
          "workingLatex": "f(1) < 0,\\; f(2) > 0 \\Rightarrow \\text{root } \\alpha \\in (1,2)",
          "explanation": "Continuous sign change on $[1,2]$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Part (b): verify rearrangement",
          "workingLatex": "x^3 - x - 1 = 0 \\Rightarrow x^3 = x + 1 \\Rightarrow x = \\sqrt[3]{x+1}",
          "explanation": "Cube-rooting both sides is valid because $x^3$ and $x+1$ share the same sign at the root.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Part (b): $x_1$",
          "workingLatex": "x_1 = \\sqrt[3]{1.5 + 1} = \\sqrt[3]{2.5} \\approx 1.357",
          "explanation": "Substitute $x_0 = 1.5$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Part (b): $x_2$",
          "workingLatex": "x_2 = \\sqrt[3]{1.357 + 1} = \\sqrt[3]{2.357} \\approx 1.328",
          "explanation": "Iterates decrease toward $\\alpha$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Part (b): $x_3$",
          "workingLatex": "x_3 = \\sqrt[3]{1.328 + 1} = \\sqrt[3]{2.328} \\approx 1.325",
          "explanation": "Close to $\\alpha \\approx 1.325$ (the plastic number).",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Part (c): $g(x) = (x+1)^{1/3}$",
          "workingLatex": "g'(x) = \\tfrac{1}{3}(x+1)^{-2/3}",
          "explanation": "Differentiate using the power rule.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Part (c): evaluate $g'(\\alpha)$",
          "workingLatex": "g'(\\alpha) = \\tfrac{1}{3}(\\alpha+1)^{-2/3} = \\tfrac{1}{3\\alpha^2} \\approx 0.19",
          "explanation": "Using $\\alpha^3 = \\alpha + 1$ at the fixed point to simplify.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Part (c): classify",
          "workingLatex": "0 < g'(\\alpha) < 1 \\Rightarrow \\text{staircase convergence}",
          "explanation": "Iterates approach from one side without oscillation.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Comment on suitability",
          "workingLatex": "|g'(\\alpha)| \\approx 0.19 \\ll 1 \\Rightarrow \\text{good convergence rate}",
          "explanation": "This rearrangement is well suited for fixed-point iteration near $\\alpha$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Full answer summary",
          "workingLatex": "\\alpha \\in (1,2);\\; x_1 \\approx 1.357,\\; x_2 \\approx 1.328,\\; x_3 \\approx 1.325;\\; \\text{staircase}",
          "explanation": "Combined location, iteration, and classification in one exam-style question.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Link parts (a)–(c)",
          "workingLatex": "\\text{Interval location justifies starting near } \\alpha; \\text{ gradient confirms method choice}",
          "explanation": "Exam questions often chain these three skills: locate, iterate, then justify convergence.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) Root in $(1,2)$ since $f(1) < 0$ and $f(2) > 0$. (b) $x_1 \\approx 1.357$, $x_2 \\approx 1.328$, $x_3 \\approx 1.325$. (c) $g'(\\alpha) \\approx 0.19$; staircase convergence."
    }
  },
  {
    "id": "al.y2.pure.roots-iteration.q050",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "written",
    "tags": [
      "rearrangement",
      "convergence",
      "gradient"
    ],
    "questionText": "The equation $x^2 = x + 2$ has positive root $\\alpha = 2$.\n\n(a) Show that $x_{n+1} = \\sqrt{x_n + 2}$ is a valid iteration.\n(b) Find $g'(x)$ for $g(x) = \\sqrt{x + 2}$ and show that $|g'(\\alpha)| < 1$.\n(c) Hence state the type of convergence and whether the iteration is suitable.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Part (a): rearrange the equation",
          "workingLatex": "x^2 = x + 2 \\Rightarrow x = \\sqrt{x + 2}",
          "explanation": "Taking the positive square root is appropriate for the positive root $\\alpha = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Part (a): write the iteration",
          "workingLatex": "x_{n+1} = \\sqrt{x_n + 2}",
          "explanation": "Replace $x$ with $x_n$ to obtain the iterative scheme.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Part (a): verify $\\alpha$ is a fixed point",
          "workingLatex": "\\sqrt{2 + 2} = \\sqrt{4} = 2 = \\alpha",
          "explanation": "The positive root satisfies the fixed-point equation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Part (b): differentiate $g(x) = (x+2)^{1/2}$",
          "workingLatex": "g'(x) = \\frac{1}{2\\sqrt{x+2}}",
          "explanation": "Chain rule on the square-root expression.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Part (b): evaluate at $\\alpha = 2$",
          "workingLatex": "g'(2) = \\frac{1}{2\\sqrt{4}} = \\frac{1}{4}",
          "explanation": "Substitute $x = 2$ directly.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Part (b): check magnitude",
          "workingLatex": "|g'(\\alpha)| = \\tfrac{1}{4} = 0.25 < 1",
          "explanation": "The gradient condition for local convergence is satisfied.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Part (b): note the sign",
          "workingLatex": "g'(\\alpha) = \\tfrac{1}{4} > 0",
          "explanation": "Positive gradient less than $1$ in magnitude.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Part (c): classify convergence type",
          "workingLatex": "0 < g'(\\alpha) < 1 \\Rightarrow \\text{staircase convergence}",
          "explanation": "Iterates will approach $\\alpha = 2$ from one side, narrowing each step.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Part (c): assess suitability",
          "workingLatex": "|g'(\\alpha)| = 0.25 \\Rightarrow \\text{errors shrink by factor } \\approx 4 \\text{ each step}",
          "explanation": "A small gradient magnitude means fast, reliable convergence — the iteration is suitable.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Optional: domain note",
          "workingLatex": "x_n + 2 > 0 \\text{ required}",
          "explanation": "Starting near $\\alpha = 2$ keeps the square root defined.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Contrast with a poor rearrangement",
          "workingLatex": "x = x^2 - 2 \\Rightarrow g'(x) = 2x,\\; g'(2) = 4 > 1",
          "explanation": "Not all rearrangements converge; choosing $g'(\\alpha) < 1$ is essential.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Conclude",
          "workingLatex": "\\text{Suitable iteration with staircase convergence to } \\alpha = 2",
          "explanation": "This question tests the full convergence argument expected at A-level.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Numerical illustration",
          "workingLatex": "x_0 = 1.5 \\Rightarrow x_1 = \\sqrt{3.5} \\approx 1.871 \\Rightarrow x_2 \\approx 1.937 \\Rightarrow x_3 \\approx 1.984",
          "explanation": "A quick calculation shows iterates climbing the staircase toward $2$ from below.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) From $x^2 = x + 2$, $x_{n+1} = \\sqrt{x_n + 2}$. (b) $g'(\\alpha) = \\tfrac{1}{4}$, so $|g'(\\alpha)| < 1$. (c) Staircase convergence; the iteration is suitable."
    }
  },
  {
    "id": "al.y2.pure.roots-iteration.q051",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "written",
    "tags": [
      "change of sign",
      "limitations",
      "multiple roots"
    ],
    "questionText": "Let $f(x) = x^4 - 5x^2 + 4$.\n\n(a) Factorise $f(x)$ and state all real roots.\n(b) Show that $f(0) > 0$ and $f(1.5) < 0$.\n(c) Explain why a single sign change on $[0, 1.5]$ does not tell you how many roots lie in that interval.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Part (a): factorise as quadratic in $x^2$",
          "workingLatex": "f(x) = x^4 - 5x^2 + 4 = (x^2 - 1)(x^2 - 4)",
          "explanation": "Treat $x^2$ as a single variable to factorise the quartic.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Part (a): factor further",
          "workingLatex": "(x^2-1)(x^2-4) = (x-1)(x+1)(x-2)(x+2)",
          "explanation": "Difference of squares on each quadratic factor.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Part (a): list real roots",
          "workingLatex": "x = -2,\\; -1,\\; 1,\\; 2",
          "explanation": "Four distinct real roots from the linear factors.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Part (b): evaluate $f(0)$",
          "workingLatex": "f(0) = 0 - 0 + 4 = 4 > 0",
          "explanation": "The constant term gives the value at the origin.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Part (b): evaluate $f(1.5)$",
          "workingLatex": "f(1.5) = (1.5)^4 - 5(1.5)^2 + 4 = 5.0625 - 11.25 + 4 = -2.1875 < 0",
          "explanation": "At $x = 1.5$ the function is negative.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Part (b): sign change confirmed",
          "workingLatex": "f(0) > 0,\\; f(1.5) < 0",
          "explanation": "There is a sign change on $[0, 1.5]$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Part (c): identify roots in the interval",
          "workingLatex": "x = 1 \\in (0, 1.5) \\text{ and the graph crosses between } 0 \\text{ and } 1.5",
          "explanation": "Actually $f(1) = 0$ exactly, and there is a crossing between $1$ and $1.5$ as well? f(1)=0, f(1.5)<0 — only the root at $x=1$ lies in $[0,1.5]$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Part (c): wider interval illustration",
          "workingLatex": "\\text{On } [0,3]: f(0)>0, f(1.5)<0, f(2)=0, f(2.5)>0",
          "explanation": "Multiple sign changes correspond to multiple roots — one sign change does not count them.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Part (c): key limitation",
          "workingLatex": "\\text{One sign change } \\Rightarrow \\text{ at least one root, not exactly one}",
          "explanation": "The IVT guarantees existence, not uniqueness.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Part (c): even multiplicity note",
          "workingLatex": "f(x) = (x-1)(x+1)(x-2)(x+2) \\text{ — all simple roots}",
          "explanation": "At $x=1$ the graph crosses; no touch-without-cross issue here.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Part (c): exam advice",
          "workingLatex": "\\text{Refine interval or sketch graph to count roots}",
          "explanation": "Narrow the interval or use factorisation to determine how many roots are present.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Summarise",
          "workingLatex": "\\text{Sign change proves } \\geq 1 \\text{ root; factorisation shows exactly which}",
          "explanation": "Understanding this distinction is essential for harder numerical methods questions.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Apply to the given interval",
          "workingLatex": "f(1) = 0 \\text{ and } f \\text{ crosses once between } 0 \\text{ and } 1.5",
          "explanation": "On $[0,1.5]$ there is exactly one root at $x=1$, but the sign-change argument alone would not distinguish this from multiple crossings without further analysis.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $f(x) = (x-1)(x+1)(x-2)(x+2)$; roots $x = \\pm 1, \\pm 2$. (b) $f(0) = 4 > 0$, $f(1.5) \\approx -2.19 < 0$. (c) A single sign change only proves at least one root; it does not prove uniqueness — factorisation shows $x = 1$ is in $[0,1.5]$."
    }
  },
  {
    "id": "al.y2.pure.roots-iteration.q052",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "numeric",
    "tags": [
      "iteration",
      "cobweb",
      "exponential",
      "exam-style"
    ],
    "questionText": "The equation $x = e^{-x}$ has root $\\alpha$.\n\n(a) Show that $\\alpha$ lies in $[0.5, 0.7]$.\n(b) Use $x_{n+1} = e^{-x_n}$ with $x_0 = 0.5$ to find $x_1$, $x_2$, $x_3$ to 3 d.p.\n(c) Find $g'(\\alpha)$ and classify the convergence.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Part (a): define $f(x) = x - e^{-x}$",
          "workingLatex": "f(x) = 0 \\Leftrightarrow x = e^{-x}",
          "explanation": "Standard sign-change setup.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Part (a): $f(0.5)$",
          "workingLatex": "f(0.5) = 0.5 - e^{-0.5} \\approx 0.5 - 0.607 = -0.107",
          "explanation": "Negative at the left endpoint.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Part (a): $f(0.7)$",
          "workingLatex": "f(0.7) = 0.7 - e^{-0.7} \\approx 0.7 - 0.497 = 0.203",
          "explanation": "Positive at the right endpoint.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Part (a): conclude",
          "workingLatex": "f(0.5) < 0,\\; f(0.7) > 0 \\Rightarrow \\alpha \\in (0.5, 0.7)",
          "explanation": "Sign change with continuity locates the root.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Part (b): $x_1$",
          "workingLatex": "x_1 = e^{-0.5} \\approx 0.607",
          "explanation": "First iteration jumps above $\\alpha$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Part (b): $x_2$",
          "workingLatex": "x_2 = e^{-0.607} \\approx 0.545",
          "explanation": "Second iterate drops below $\\alpha$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Part (b): $x_3$",
          "workingLatex": "x_3 = e^{-0.545} \\approx 0.580",
          "explanation": "Third iterate rises again — clear oscillation.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Part (c): $g(x) = e^{-x}$",
          "workingLatex": "g'(x) = -e^{-x}",
          "explanation": "Differentiate the exponential.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Part (c): evaluate at fixed point",
          "workingLatex": "g'(\\alpha) = -e^{-\\alpha} = -\\alpha \\approx -0.567",
          "explanation": "At the root, $e^{-\\alpha} = \\alpha$, so $g'(\\alpha) = -\\alpha$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Part (c): check magnitude",
          "workingLatex": "|g'(\\alpha)| = \\alpha \\approx 0.567 < 1",
          "explanation": "Magnitude less than $1$ ensures convergence.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Part (c): classify",
          "workingLatex": "g'(\\alpha) < 0 \\Rightarrow \\text{cobweb convergence}",
          "explanation": "Alternating above and below $\\alpha$ with narrowing envelope.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Note $\\alpha$ value",
          "workingLatex": "\\alpha \\approx 0.567",
          "explanation": "The iterates converge to this well-known fixed point of $x = e^{-x}$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Visualise cobweb pattern",
          "workingLatex": "x_0 < \\alpha < x_1,\\; x_2 < \\alpha < x_3",
          "explanation": "Plotting $y=x$ and $y=e^{-x}$ shows iterates bouncing between the curves toward the intersection.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $f(0.5) < 0$, $f(0.7) > 0$ $\\Rightarrow$ $\\alpha \\in (0.5, 0.7)$. (b) $x_1 \\approx 0.607$, $x_2 \\approx 0.545$, $x_3 \\approx 0.580$. (c) $g'(\\alpha) = -\\alpha \\approx -0.567$; cobweb convergence."
    }
  },
  {
    "id": "al.y2.pure.roots-iteration.q053",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "numeric",
    "tags": [
      "Newton-Raphson",
      "change of sign",
      "exam-style",
      "combined"
    ],
    "questionText": "Let $f(x) = x^2 \\ln x - 1$ for $x > 0$.\n\n(a) Show that $f(x) = 0$ has a root in $[1, 2]$.\n(b) The Newton–Raphson formula is $x_{n+1} = x_n - \\dfrac{f(x_n)}{f'(x_n)}$ where $f'(x) = 2x\\ln x + x$. Starting with $x_0 = 1.5$, find $x_1$ to 3 decimal places.\n(c) Explain why Newton's method typically converges faster than a simple rearrangement iteration near a simple root.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Part (a): $f(1)$",
          "workingLatex": "f(1) = 1^2 \\cdot \\ln 1 - 1 = 0 - 1 = -1",
          "explanation": "Since $\\ln 1 = 0$, the value is $-1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Part (a): $f(2)$",
          "workingLatex": "f(2) = 4 \\ln 2 - 1 \\approx 4(0.693) - 1 = 1.772",
          "explanation": "At $x = 2$ the logarithmic term dominates.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Part (a): sign-change argument",
          "workingLatex": "f(1) < 0,\\; f(2) > 0,\\; f \\text{ continuous on } [1,2] \\Rightarrow \\text{root in } (1,2)",
          "explanation": "Standard location of a root.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Part (b): evaluate $f(1.5)$",
          "workingLatex": "f(1.5) = 2.25 \\ln 1.5 - 1 \\approx 2.25(0.405) - 1 = -0.089",
          "explanation": "The starting value is close to the root.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Part (b): evaluate $f'(1.5)$",
          "workingLatex": "f'(1.5) = 2(1.5)\\ln 1.5 + 1.5 = 3(0.405) + 1.5 \\approx 2.715",
          "explanation": "Substitute into the derivative formula.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Part (b): apply Newton's formula",
          "workingLatex": "x_1 = 1.5 - \\frac{-0.089}{2.715} = 1.5 + 0.033 \\approx 1.533",
          "explanation": "The correction moves the estimate toward the root.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Part (b): interpret the step",
          "workingLatex": "\\text{Tangent at } x_0 \\text{ crosses axis near } x_1",
          "explanation": "Newton's method follows the tangent line to approximate the root.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Part (c): fixed-point iteration order",
          "workingLatex": "x_{n+1} = g(x_n) \\Rightarrow \\text{error } \\propto |g'(\\alpha)|^n",
          "explanation": "Linear convergence when $|g'(\\alpha)| < 1$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Part (c): Newton's order at simple root",
          "workingLatex": "g'(\\alpha) = 0 \\Rightarrow \\text{quadratic convergence}",
          "explanation": "For Newton applied to a simple root, $g'(\\alpha) = 0$, so errors roughly square each step.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Part (c): practical meaning",
          "workingLatex": "\\text{Newton reaches high accuracy in fewer steps}",
          "explanation": "Near a simple root, doubling correct digits per step beats the linear shrinkage of fixed-point iteration.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Part (c): caveat",
          "workingLatex": "f'(\\alpha) \\neq 0 \\text{ required (simple root)}",
          "explanation": "At repeated roots Newton slows to linear convergence — the simple-root condition matters.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Part (c): compare with rearrangement",
          "workingLatex": "|g'(\\alpha)| \\text{ may be close to } 1 \\Rightarrow \\text{slow fixed-point iteration}",
          "explanation": "Newton is often preferred when derivatives are available and the root is simple.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Verify $f'(x)$ form",
          "workingLatex": "f'(x) = 2x\\ln x + x \\text{ (product rule on } x^2 \\ln x\\text{)}",
          "explanation": "Confirms the given derivative is correct.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Summarise all parts",
          "workingLatex": "\\text{Root in } (1,2);\\; x_1 \\approx 1.533;\\; \\text{Newton quadratic vs linear fixed-point}",
          "explanation": "Full exam-style question combining location, Newton iteration, and method comparison.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $f(1) = -1 < 0$, $f(2) \\approx 1.772 > 0$ $\\Rightarrow$ root in $(1,2)$. (b) $x_1 \\approx 1.533$. (c) At a simple root, Newton has $g'(\\alpha) = 0$, giving quadratic convergence — much faster than linear fixed-point iteration where errors shrink by a constant factor $|g'(\\alpha)|$ each step."
    }
  },
  {
    "id": "al.y2.pure.roots-iteration.q054",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "exact",
    "tags": [
      "change of sign",
      "iteration",
      "cubic root"
    ],
    "questionText": "The equation $x^{3} - x - 1 = 0$ has a root $\\alpha$ in the interval $[1,\\,2]$.\n\n**(a)** Verify this using the change-of-sign method.\n\n**(b)** Use the iterative formula $x_{n+1} = \\sqrt[3]{x_{n} + 1}$ with $x_{0} = 1.5$ to find $x_{1}$, $x_{2}$ and $x_{3}$, giving each value to $4$ decimal places.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Evaluate $f(1)$",
          "workingLatex": "f(1) = 1^{3} - 1 - 1 = -1",
          "explanation": "Substituting $x = 1$ into $f(x) = x^{3} - x - 1$ gives a negative value.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate $f(2)$",
          "workingLatex": "f(2) = 2^{3} - 2 - 1 = 8 - 3 = 5",
          "explanation": "At $x = 2$ the function is positive.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the change-of-sign rule",
          "workingLatex": "f(1) < 0 \\text{ and } f(2) > 0 \\Rightarrow \\text{root in } [1,\\,2]",
          "explanation": "Because $f$ is continuous and the sign changes between $x = 1$ and $x = 2$, there must be at least one root in that interval.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the iterative formula",
          "workingLatex": "x_{n+1} = \\sqrt[3]{x_{n} + 1}",
          "explanation": "Rearranging $x^{3} = x + 1$ gives a fixed-point iteration that targets the same root.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute $x_{1}$ from $x_{0} = 1.5$",
          "workingLatex": "x_{1} = \\sqrt[3]{1.5 + 1} = \\sqrt[3]{2.5} = 1.3572",
          "explanation": "Raise $2.5$ to the power $\\frac{1}{3}$ to obtain the first iterate.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute $x_{2}$",
          "workingLatex": "x_{2} = \\sqrt[3]{1.3572 + 1} = \\sqrt[3]{2.3572} = 1.3300",
          "explanation": "Each new value replaces $x_{n}$ in the formula.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compute $x_{3}$",
          "workingLatex": "x_{3} = \\sqrt[3]{1.3300 + 1} = \\sqrt[3]{2.3300} = 1.3257",
          "explanation": "The iterates are moving closer together, which suggests convergence toward $\\alpha$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check the size of successive changes",
          "workingLatex": "|x_{2} - x_{1}| = 0.0272, \\qquad |x_{3} - x_{2}| = 0.0043",
          "explanation": "The gap between consecutive iterates is shrinking, a practical sign that the method is converging.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the final answers",
          "workingLatex": "\\text{(a) Root in } [1,\\,2]; \\quad \\text{(b) } x_{1} = 1.3572,\\; x_{2} = 1.3300,\\; x_{3} = 1.3257",
          "explanation": "Part (a) is justified by the sign change; part (b) gives three iterates to $4$ decimal places.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $f(1) < 0$ and $f(2) > 0$, so a root lies in $[1,\\,2]$. (b) $x_{1} = 1.3572$, $x_{2} = 1.3300$, $x_{3} = 1.3257$."
    }
  },
  {
    "id": "al.y2.pure.roots-iteration.q055",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "change of sign",
      "exponential",
      "interval"
    ],
    "questionText": "Show that the equation $2^{x} = 3x$ has a root in the interval $[0,\\,1]$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rewrite the equation as $f(x) = 0$",
          "workingLatex": "f(x) = 2^{x} - 3x",
          "explanation": "Collecting all terms on one side lets us test for a sign change.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate $f(0)$",
          "workingLatex": "f(0) = 2^{0} - 3(0) = 1 - 0 = 1",
          "explanation": "At $x = 0$ the exponential term is $1$ and the linear term is $0$, so $f(0) > 0$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate $f(1)$",
          "workingLatex": "f(1) = 2^{1} - 3(1) = 2 - 3 = -1",
          "explanation": "At $x = 1$ the linear term $3x$ exceeds $2^{x}$, so $f(1) < 0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Note continuity of $f$",
          "workingLatex": "f(x) = 2^{x} - 3x \\text{ is continuous for all real } x",
          "explanation": "Both $2^{x}$ and $3x$ are continuous, so their difference is continuous on $[0,\\,1]$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Identify the sign change",
          "workingLatex": "f(0) = 1 > 0 \\quad \\text{and} \\quad f(1) = -1 < 0",
          "explanation": "The function changes from positive to negative across the interval.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply the change-of-sign principle",
          "workingLatex": "\\text{A continuous function that changes sign on } [a,\\,b] \\text{ has a root in } (a,\\,b)",
          "explanation": "This is the core numerical-method result: a sign change guarantees at least one crossing of the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Confirm the interval endpoints",
          "workingLatex": "a = 0, \\quad b = 1",
          "explanation": "We tested exactly the endpoints requested.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Rule out a trivial root at an endpoint",
          "workingLatex": "f(0) \\neq 0 \\text{ and } f(1) \\neq 0",
          "explanation": "The root lies strictly inside $(0,\\,1)$, not at either endpoint.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Interpret the graphs",
          "workingLatex": "y = 2^{x} \\text{ starts above } y = 3x \\text{ at } x = 0 \\text{ and is below at } x = 1",
          "explanation": "Geometrically, the exponential and line graphs cross once between $0$ and $1$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the conclusion",
          "workingLatex": "\\text{There is a root of } 2^{x} = 3x \\text{ in } [0,\\,1]",
          "explanation": "The change-of-sign method locates the root without solving the equation algebraically.",
          "diagram": null
        }
      ],
      "finalAnswer": "Since $f(0) = 1 > 0$ and $f(1) = -1 < 0$ with $f$ continuous, a root of $2^{x} = 3x$ lies in $[0,\\,1]$."
    }
  },
  {
    "id": "al.y2.pure.roots-iteration.q056",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "decimal",
    "tags": [
      "iteration",
      "stopping criterion",
      "square root"
    ],
    "questionText": "Use the iterative formula $x_{n+1} = \\dfrac{1}{2}\\!\\left(x_{n} + \\dfrac{6}{x_{n}}\\right)$ with $x_{0} = 2$ to approximate $\\sqrt{6}$. Stop when $|x_{n+1} - x_{n}| < 0.01$. State the value of $n$ when you stop and give the approximation to $3$ decimal places.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the target",
          "workingLatex": "x_{n+1} = \\frac{1}{2}\\!\\left(x_{n} + \\frac{6}{x_{n}}\\right) \\text{ converges to } \\sqrt{6}",
          "explanation": "This is the Babylonian (Newton-type) method for finding square roots.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Compute $x_{1}$",
          "workingLatex": "x_{1} = \\frac{1}{2}\\!\\left(2 + \\frac{6}{2}\\right) = \\frac{1}{2}(2 + 3) = 2.5",
          "explanation": "The first iterate averages $x_{0}$ with $\\frac{6}{x_{0}}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute $x_{2}$",
          "workingLatex": "x_{2} = \\frac{1}{2}\\!\\left(2.5 + \\frac{6}{2.5}\\right) = \\frac{1}{2}(2.5 + 2.4) = 2.45",
          "explanation": "Each step refines the estimate by balancing the current value with its reciprocal partner.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Test the stopping condition after $x_{2}$",
          "workingLatex": "|x_{2} - x_{1}| = |2.45 - 2.5| = 0.05 > 0.01",
          "explanation": "The change is still too large, so we continue iterating.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute $x_{3}$",
          "workingLatex": "x_{3} = \\frac{1}{2}\\!\\left(2.45 + \\frac{6}{2.45}\\right) = \\frac{1}{2}(2.45 + 2.44898\\ldots) = 2.44949\\ldots",
          "explanation": "The correction from $x_{2}$ to $x_{3}$ is much smaller than before.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Test the stopping condition after $x_{3}$",
          "workingLatex": "|x_{3} - x_{2}| = |2.44949 - 2.45| = 0.00051 < 0.01",
          "explanation": "The successive difference now falls below the threshold $0.01$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Identify when to stop",
          "workingLatex": "n = 3",
          "explanation": "We stop after computing $x_{3}$ because $|x_{3} - x_{2}| < 0.01$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare with the exact value",
          "workingLatex": "\\sqrt{6} = 2.44949\\ldots",
          "explanation": "The approximation $x_{3} \\approx 2.449$ matches $\\sqrt{6}$ to three decimal places.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the final answer",
          "workingLatex": "n = 3, \\qquad x_{3} \\approx 2.449",
          "explanation": "After three iterations the stopping criterion is met and the approximation is $2.449$ to $3$ d.p.",
          "diagram": null
        }
      ],
      "finalAnswer": "Stop at $n = 3$ with approximation $x_{3} \\approx 2.449$."
    }
  },
  {
    "id": "al.y2.pure.roots-iteration.q057",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "tags": [
      "iteration",
      "comparison",
      "convergence rate"
    ],
    "questionText": "The equation $x^{3} - x - 2 = 0$ can be solved using either $x_{n+1} = \\sqrt[3]{x_{n} + 2}$ or $x_{n+1} = \\sqrt{x_{n} + 2}$. Starting from $x_{0} = 2$ in each case, compute $x_{1}$ and $x_{2}$ for both formulae (to $4$ d.p.) and state which appears to converge more quickly toward the root.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Record both iterative formulae",
          "workingLatex": "g_{1}(x) = \\sqrt[3]{x + 2}, \\qquad g_{2}(x) = \\sqrt{x + 2}",
          "explanation": "Both rearrangements target the same root of $x^{3} - x - 2 = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Compute $x_{1}$ using $g_{1}$",
          "workingLatex": "x_{1} = \\sqrt[3]{2 + 2} = \\sqrt[3]{4} = 1.5874",
          "explanation": "The cube-root rearrangement pulls the value down from $2$ toward the root near $1.769$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute $x_{2}$ using $g_{1}$",
          "workingLatex": "x_{2} = \\sqrt[3]{1.5874 + 2} = \\sqrt[3]{3.5874} = 1.5326",
          "explanation": "The second iterate moves closer to the expected root.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute $x_{1}$ using $g_{2}$",
          "workingLatex": "x_{1} = \\sqrt{2 + 2} = \\sqrt{4} = 2.0000",
          "explanation": "The square-root rearrangement leaves $x_{1}$ at exactly $2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute $x_{2}$ using $g_{2}$",
          "workingLatex": "x_{2} = \\sqrt{2.0000 + 2} = 2.0000",
          "explanation": "The sequence is stuck at $2$ and is not approaching the root.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Measure progress for $g_{1}$",
          "workingLatex": "|x_{2} - x_{1}| = |1.5326 - 1.5874| = 0.0548",
          "explanation": "The cube-root formula produces a clear movement toward the root.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Measure progress for $g_{2}$",
          "workingLatex": "|x_{2} - x_{1}| = 0",
          "explanation": "The square-root formula makes no progress from the starting value $x_{0} = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare the gradient magnitudes near the root",
          "workingLatex": "|g_{1}'(x)| = \\frac{1}{3\\sqrt[3]{(x+2)^{2}}} < 1 \\text{ near the root}",
          "explanation": "A gradient magnitude less than $1$ near the fixed point supports convergence.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Explain why $g_{2}$ fails here",
          "workingLatex": "g_{2}(2) = 2 \\text{, so } x_{0} = 2 \\text{ is a fixed point of } g_{2}",
          "explanation": "Starting at a spurious fixed point means the iteration never moves toward the true root.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the conclusion",
          "workingLatex": "g_{1} \\text{ converges more quickly; } g_{2} \\text{ does not move from } x_{0} = 2",
          "explanation": "The cube-root rearrangement is effective from this starting value; the square-root one is not.",
          "diagram": null
        }
      ],
      "finalAnswer": "$g_{1}$: $x_{1} = 1.5874$, $x_{2} = 1.5326$. $g_{2}$: $x_{1} = x_{2} = 2.0000$. The cube-root formula $g_{1}$ converges more quickly."
    }
  },
  {
    "id": "al.y2.pure.roots-iteration.q058",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "change of sign",
      "show that",
      "iteration"
    ],
    "questionText": "**(a)** Show that the equation $x^{3} + x - 1 = 0$ has a root in the interval $[0,\\,1]$.\n\n**(b)** Use $x_{n+1} = \\sqrt[3]{1 - x_{n}}$ with $x_{0} = 0.5$ to find $x_{1}$, giving your answer to $4$ decimal places.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define $f(x)$ for part (a)",
          "workingLatex": "f(x) = x^{3} + x - 1",
          "explanation": "Writing the equation as $f(x) = 0$ prepares us for the change-of-sign test.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate $f(0)$",
          "workingLatex": "f(0) = 0^{3} + 0 - 1 = -1",
          "explanation": "At $x = 0$ the value is negative.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate $f(1)$",
          "workingLatex": "f(1) = 1^{3} + 1 - 1 = 1",
          "explanation": "At $x = 1$ the value is positive.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Conclude part (a)",
          "workingLatex": "f(0) < 0,\\; f(1) > 0 \\Rightarrow \\text{root in } [0,\\,1]",
          "explanation": "A continuous function changing sign on $[0,\\,1]$ must cross the axis inside the interval.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set up part (b)",
          "workingLatex": "x_{n+1} = \\sqrt[3]{1 - x_{n}}, \\quad x_{0} = 0.5",
          "explanation": "Rearranging $x^{3} + x = 1$ to $x^{3} = 1 - x$ gives this iterative formula.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute $x_{0}$",
          "workingLatex": "x_{1} = \\sqrt[3]{1 - 0.5} = \\sqrt[3]{0.5}",
          "explanation": "We need the cube root of $0.5$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the cube root",
          "workingLatex": "x_{1} = 0.7937",
          "explanation": "Using a calculator, $\\sqrt[3]{0.5} \\approx 0.7937$ to $4$ decimal places.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check the direction of movement",
          "workingLatex": "x_{1} = 0.7937 > x_{0} = 0.5",
          "explanation": "The iterate moves upward toward the root in $(0,\\,1)$, which is consistent with convergence.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State both answers",
          "workingLatex": "\\text{(a) Root in } [0,\\,1]; \\quad \\text{(b) } x_{1} = 0.7937",
          "explanation": "Part (a) uses change of sign; part (b) gives the first iterate.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $f(0) < 0$ and $f(1) > 0$, so a root lies in $[0,\\,1]$. (b) $x_{1} = 0.7937$."
    }
  },
  {
    "id": "al.y2.pure.roots-iteration.q059",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "decimal",
    "tags": [
      "change of sign",
      "iteration",
      "engineering",
      "context"
    ],
    "questionText": "In a structural engineering model, the deflection $\\delta$ (in cm) of a loaded beam satisfies $\\delta^{3} - 10\\delta + 8 = 0$.\n\n**(a)** Show that a physically meaningful root lies in $[2,\\,3]$.\n\n**(b)** Use $x_{n+1} = \\sqrt[3]{10x_{n} - 8}$ with $x_{0} = 2.5$ to find $x_{1}$, $x_{2}$ and $x_{3}$ (to $4$ d.p.).\n\n**(c)** State the deflection to $2$ decimal places.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the model function",
          "workingLatex": "f(\\delta) = \\delta^{3} - 10\\delta + 8",
          "explanation": "The deflection $\\delta$ must satisfy $f(\\delta) = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate at $\\delta = 2$",
          "workingLatex": "f(2) = 8 - 20 + 8 = -4",
          "explanation": "At $\\delta = 2$ cm the model gives a negative value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate at $\\delta = 3$",
          "workingLatex": "f(3) = 27 - 30 + 8 = 5",
          "explanation": "At $\\delta = 3$ cm the model gives a positive value.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Conclude part (a)",
          "workingLatex": "f(2) < 0,\\; f(3) > 0 \\Rightarrow \\text{root in } [2,\\,3]",
          "explanation": "A positive deflection root exists between $2$ and $3$ cm.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set up the iteration for part (b)",
          "workingLatex": "x_{n+1} = \\sqrt[3]{10x_{n} - 8}, \\quad x_{0} = 2.5",
          "explanation": "Rearranging $\\delta^{3} = 10\\delta - 8$ gives the iterative formula.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute $x_{1}$",
          "workingLatex": "x_{1} = \\sqrt[3]{10(2.5) - 8} = \\sqrt[3]{17} = 2.5713",
          "explanation": "The first iterate moves upward from $2.5$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compute $x_{2}$",
          "workingLatex": "x_{2} = \\sqrt[3]{10(2.5713) - 8} = \\sqrt[3]{17.713} = 2.8048",
          "explanation": "The sequence continues to adjust toward the root.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compute $x_{3}$",
          "workingLatex": "x_{3} = \\sqrt[3]{10(2.8048) - 8} = \\sqrt[3]{20.048} = 2.7146",
          "explanation": "Note the iterates oscillate before settling — this can happen when the gradient is close to $1$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Continue to a stable value",
          "workingLatex": "x_{4} = 2.7320, \\quad x_{5} = 2.7321",
          "explanation": "Further iterations stabilise near $2.73$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Compare successive values for convergence",
          "workingLatex": "|x_{5} - x_{4}| < 0.0001",
          "explanation": "Once successive differences are tiny, we can quote the root to the required accuracy.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the deflection for part (c)",
          "workingLatex": "\\delta \\approx 2.73 \\text{ cm}",
          "explanation": "Rounded to $2$ decimal places, the physically meaningful deflection is $2.73$ cm.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Check the answer is in the original interval",
          "workingLatex": "2 < 2.73 < 3",
          "explanation": "The result lies in the interval established in part (a).",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Interpret in context",
          "workingLatex": "\\text{The beam deflects by approximately } 2.73 \\text{ cm under the modelled load}",
          "explanation": "The numerical method gives an engineering estimate without solving the cubic algebraically.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $f(2) < 0$, $f(3) > 0$. (b) $x_{1} = 2.5713$, $x_{2} = 2.8048$, $x_{3} = 2.7146$. (c) $\\delta \\approx 2.73$ cm."
    }
  },
  {
    "id": "al.y2.pure.roots-iteration.q060",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "written",
    "tags": [
      "iteration failure",
      "divergence",
      "gradient condition"
    ],
    "questionText": "Consider solving $x^{3} - x - 2 = 0$ using the iterative formula $x_{n+1} = x_{n}^{3} - 2$ with $x_{0} = 2$.\n\nCompute $x_{1}$, $x_{2}$ and $x_{3}$, and explain why this iteration diverges rather than converging to the root near $1.769$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the iteration function",
          "workingLatex": "g(x) = x^{3} - 2",
          "explanation": "Each step applies $g$ to the previous value.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Compute $x_{1}$",
          "workingLatex": "x_{1} = 2^{3} - 2 = 8 - 2 = 6",
          "explanation": "Starting from $x_{0} = 2$, the first iterate jumps to $6$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute $x_{2}$",
          "workingLatex": "x_{2} = 6^{3} - 2 = 216 - 2 = 214",
          "explanation": "The values are growing rapidly.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute $x_{3}$",
          "workingLatex": "x_{3} = 214^{3} - 2 = 9\\,798\\,092",
          "explanation": "The sequence is diverging to very large numbers.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Differentiate $g(x)$",
          "workingLatex": "g'(x) = 3x^{2}",
          "explanation": "The gradient of the iteration function controls local convergence behaviour.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate $|g'(x)|$ at $x_{0} = 2$",
          "workingLatex": "|g'(2)| = 3(2)^{2} = 12",
          "explanation": "At the starting point the gradient magnitude is $12$, which is much greater than $1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the convergence condition",
          "workingLatex": "|g'(x)| < 1 \\text{ near the fixed point is needed for convergence}",
          "explanation": "When the gradient magnitude exceeds $1$, small errors are amplified rather than reduced.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Evaluate near the true root $\\alpha \\approx 1.769$",
          "workingLatex": "|g'(1.769)| = 3(1.769)^{2} \\approx 9.38",
          "explanation": "Even near the actual root, $|g'(\\alpha)| \\gg 1$, so this rearrangement cannot converge there.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Describe the cobweb behaviour",
          "workingLatex": "\\text{The iterates move away from the intersection line, producing a divergent cobweb}",
          "explanation": "Graphically, the gradient of $y = g(x)$ being steeper than $y = x$ causes the path to spiral outward.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Note $x_{0} = 2$ is a fixed point of a different equation",
          "workingLatex": "g(2) = 6 \\neq 2",
          "explanation": "The starting value is not a fixed point, but the large gradient immediately sends iterates away from any root.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Contrast with a valid rearrangement",
          "workingLatex": "x_{n+1} = \\sqrt[3]{x_{n} + 2} \\text{ has } |g'(x)| < 1 \\text{ near the root}",
          "explanation": "A cube-root rearrangement satisfies the convergence condition; the cubic one does not.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Explain the mathematical reason",
          "workingLatex": "g'(x) = 3x^{2} \\geq 0 \\text{ and grows with } |x|",
          "explanation": "The larger $|x|$, the faster the iteration escapes — explaining the explosive growth seen.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the conclusion",
          "workingLatex": "\\text{The iteration diverges because } |g'(x)| > 1",
          "explanation": "The rearrangement $x = x^{3} - 2$ is unsuitable for finding the root of $x^{3} - x - 2 = 0$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_{1} = 6$, $x_{2} = 214$, $x_{3} \\approx 9.8 \\times 10^{6}$. The iteration diverges because $|g'(x)| = 3x^{2} \\gg 1$, so errors are amplified."
    }
  },
  {
    "id": "al.y2.pure.roots-iteration.q061",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "tags": [
      "iteration",
      "comparison",
      "gradient",
      "convergence rate"
    ],
    "questionText": "For the equation $x^{3} - x - 2 = 0$, two rearrangements are proposed:\n$$g_{1}(x) = \\sqrt[3]{x + 2}, \\qquad g_{2}(x) = \\sqrt{x + 2}.$$\n\nThe root is $\\alpha \\approx 1.769$. Find $|g_{1}'(\\alpha)|$ and $|g_{2}'(\\alpha)|$ and hence explain which formula converges faster when the iteration is close to the root.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the root value",
          "workingLatex": "\\alpha \\approx 1.769",
          "explanation": "We evaluate gradient magnitudes at the known approximate root.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate $g_{1}(x) = \\sqrt[3]{x + 2}$",
          "workingLatex": "g_{1}'(x) = \\frac{1}{3\\sqrt[3]{(x+2)^{2}}}",
          "explanation": "Using the chain rule on the cube-root function.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate $g_{1}'(\\alpha)$",
          "workingLatex": "g_{1}'(1.769) = \\frac{1}{3\\sqrt[3]{(3.769)^{2}}} = \\frac{1}{3 \\times 2.153} \\approx 0.155",
          "explanation": "At the root, $|g_{1}'(\\alpha)| \\approx 0.155$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Differentiate $g_{2}(x) = \\sqrt{x + 2}$",
          "workingLatex": "g_{2}'(x) = \\frac{1}{2\\sqrt{x + 2}}",
          "explanation": "The square-root gives a different gradient expression.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate $g_{2}'(\\alpha)$",
          "workingLatex": "g_{2}'(1.769) = \\frac{1}{2\\sqrt{3.769}} = \\frac{1}{2 \\times 1.941} \\approx 0.258",
          "explanation": "At the root, $|g_{2}'(\\alpha)| \\approx 0.258$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare the two magnitudes",
          "workingLatex": "0.155 < 0.258 < 1",
          "explanation": "Both satisfy the convergence condition $|g'(\\alpha)| < 1$, but $g_{1}$ has the smaller gradient.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Interpret smaller gradient magnitude",
          "workingLatex": "\\text{Smaller } |g'(\\alpha)| \\Rightarrow \\text{ faster convergence near the root}",
          "explanation": "The closer $|g'(\\alpha)|$ is to $0$, the more quickly successive errors shrink.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Relate to error reduction",
          "workingLatex": "|x_{n+1} - \\alpha| \\approx |g'(\\alpha)| \\cdot |x_{n} - \\alpha|",
          "explanation": "This linearisation shows each error is scaled by $|g'(\\alpha)|$ near the fixed point.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Estimate error reduction per step for $g_{1}$",
          "workingLatex": "\\text{Error multiplied by } \\approx 0.155",
          "explanation": "Each iterate reduces the error to about $15\\%$ of its previous size.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Estimate error reduction per step for $g_{2}$",
          "workingLatex": "\\text{Error multiplied by } \\approx 0.258",
          "explanation": "Each iterate reduces the error to about $26\\%$ of its previous size — slower than $g_{1}$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Note both converge from suitable starts",
          "workingLatex": "|g_{1}'(\\alpha)| < 1 \\text{ and } |g_{2}'(\\alpha)| < 1",
          "explanation": "Either formula can converge if the starting value is close enough, but at different rates.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Warn about unsuitable starting values for $g_{2}$",
          "workingLatex": "g_{2}(2) = 2 \\text{ so } x_{0} = 2 \\text{ is a spurious fixed point}",
          "explanation": "Convergence rate analysis near $\\alpha$ does not help if the iteration never reaches that neighbourhood.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State which converges faster",
          "workingLatex": "g_{1} \\text{ converges faster because } |g_{1}'(\\alpha)| < |g_{2}'(\\alpha)|",
          "explanation": "The cube-root rearrangement has a smaller gradient magnitude at the root.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Summarise the key principle",
          "workingLatex": "\\text{Compare } |g'(\\alpha)| \\text{ to rank convergence speeds}",
          "explanation": "This gradient test is the standard way to compare iterative formulae near a root.",
          "diagram": null
        }
      ],
      "finalAnswer": "$|g_{1}'(\\alpha)| \\approx 0.155$ and $|g_{2}'(\\alpha)| \\approx 0.258$. Since $0.155 < 0.258$, $g_{1}$ converges faster near the root."
    }
  },
  {
    "id": "al.y2.pure.roots-iteration.q062",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "written",
    "tags": [
      "change of sign",
      "iteration",
      "staircase",
      "logarithm"
    ],
    "questionText": "The equation $\\ln x + x = 2$ has a root $\\alpha$.\n\n**(a)** Show that $\\alpha$ lies in $[1,\\,2]$.\n\n**(b)** Use $x_{n+1} = 2 - \\ln x_{n}$ with $x_{0} = 1.5$ to find $x_{1}$, $x_{2}$, $x_{3}$ and $x_{4}$ (to $4$ d.p.).\n\n**(c)** Describe the cobweb pattern and explain why the iteration converges.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define $f(x) = \\ln x + x - 2$",
          "workingLatex": "f(x) = \\ln x + x - 2",
          "explanation": "This combines the logarithmic and linear terms from the equation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate $f(1)$",
          "workingLatex": "f(1) = \\ln 1 + 1 - 2 = 0 + 1 - 2 = -1",
          "explanation": "At $x = 1$ the value is negative.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate $f(2)$",
          "workingLatex": "f(2) = \\ln 2 + 2 - 2 = \\ln 2 \\approx 0.693 > 0",
          "explanation": "At $x = 2$ the value is positive.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Conclude part (a)",
          "workingLatex": "\\alpha \\in [1,\\,2]",
          "explanation": "Change of sign on a continuous function guarantees a root in the interval.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set up the iteration",
          "workingLatex": "x_{n+1} = 2 - \\ln x_{n}, \\quad x_{0} = 1.5",
          "explanation": "Rearranging $\\ln x = 2 - x$ gives the fixed-point formula.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute $x_{1}$",
          "workingLatex": "x_{1} = 2 - \\ln(1.5) = 2 - 0.4055 = 1.5945",
          "explanation": "The first iterate moves upward from $1.5$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compute $x_{2}$",
          "workingLatex": "x_{2} = 2 - \\ln(1.5945) = 2 - 0.4677 = 1.5323",
          "explanation": "The value steps back down, but not as far as before.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compute $x_{3}$",
          "workingLatex": "x_{3} = 2 - \\ln(1.5323) = 2 - 0.4265 = 1.5735",
          "explanation": "The iterates alternate above and below the root in decreasing steps.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compute $x_{4}$",
          "workingLatex": "x_{4} = 2 - \\ln(1.5735) = 2 - 0.4531 = 1.5469",
          "explanation": "Each successive value is closer to the previous one.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Identify the cobweb pattern",
          "workingLatex": "\\text{Staircase/cobweb converging inward toward } y = x",
          "explanation": "Because $0 < g'(x) < 1$ near the root, the cobweb steps monotonically or in a narrowing staircase toward the intersection.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Verify the gradient condition",
          "workingLatex": "g(x) = 2 - \\ln x, \\quad g'(x) = -\\frac{1}{x}",
          "explanation": "Near $\\alpha \\approx 1.56$, $|g'(\\alpha)| = \\frac{1}{1.56} \\approx 0.64 < 1$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Explain convergence",
          "workingLatex": "0 < |g'(\\alpha)| < 1 \\Rightarrow \\text{ errors shrink at each step}",
          "explanation": "The gradient magnitude less than $1$ ensures the iteration converges to the fixed point.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the approximate root",
          "workingLatex": "\\alpha \\approx 1.56",
          "explanation": "The iterates are closing in on $\\alpha \\approx 1.56$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Summarise all parts",
          "workingLatex": "\\text{(a) } [1,2]; \\text{ (b) } x_{4} = 1.5469; \\text{ (c) staircase convergence}",
          "explanation": "Change of sign locates the root; iteration with $|g'| < 1$ converges in a staircase pattern.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $f(1) < 0$, $f(2) > 0$. (b) $x_{1} = 1.5945$, $x_{2} = 1.5323$, $x_{3} = 1.5735$, $x_{4} = 1.5469$. (c) Staircase cobweb converges because $|g'(\\alpha)| \\approx 0.64 < 1$."
    }
  },
  {
    "id": "al.y2.pure.roots-iteration.q063",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "decimal",
    "tags": [
      "iteration",
      "context",
      "science",
      "equilibrium"
    ],
    "questionText": "In a chemical reactor, the equilibrium concentration $c$ (in mol/L) satisfies $c^{3} - 7c + 2 = 0$. Only the root in $[2,\\,3]$ is physically meaningful.\n\n**(a)** Verify this root exists using the change-of-sign method.\n\n**(b)** Use $c_{n+1} = \\sqrt[3]{7c_{n} - 2}$ with $c_{0} = 2.5$ to find $c_{1}$, $c_{2}$ and $c_{3}$ (to $4$ d.p.).\n\n**(c)** Give the equilibrium concentration to $2$ d.p.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define $f(c) = c^{3} - 7c + 2$",
          "workingLatex": "f(c) = c^{3} - 7c + 2",
          "explanation": "The equilibrium concentration solves $f(c) = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate $f(2)$",
          "workingLatex": "f(2) = 8 - 14 + 2 = -4",
          "explanation": "At $c = 2$ the model output is negative.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate $f(3)$",
          "workingLatex": "f(3) = 27 - 21 + 2 = 8",
          "explanation": "At $c = 3$ the model output is positive.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Conclude part (a)",
          "workingLatex": "f(2) < 0,\\; f(3) > 0 \\Rightarrow \\text{root in } [2,\\,3]",
          "explanation": "A physically meaningful positive concentration root exists in this interval.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set up the iteration",
          "workingLatex": "c_{n+1} = \\sqrt[3]{7c_{n} - 2}, \\quad c_{0} = 2.5",
          "explanation": "Rearranging $c^{3} = 7c - 2$ gives the iterative formula.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute $c_{1}$",
          "workingLatex": "c_{1} = \\sqrt[3]{7(2.5) - 2} = \\sqrt[3]{15.5} = 2.4906",
          "explanation": "The first iterate is slightly below the starting value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compute $c_{2}$",
          "workingLatex": "c_{2} = \\sqrt[3]{7(2.4906) - 2} = \\sqrt[3]{15.434} = 2.4886",
          "explanation": "The values are converging slowly.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compute $c_{3}$",
          "workingLatex": "c_{3} = \\sqrt[3]{7(2.4886) - 2} = \\sqrt[3]{15.420} = 2.4882",
          "explanation": "Successive changes are becoming very small.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Continue to confirm stability",
          "workingLatex": "c_{4} = 2.4881, \\quad c_{5} = 2.4881",
          "explanation": "The sequence stabilises at $2.4881$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check the result satisfies the original equation",
          "workingLatex": "f(2.4881) = (2.4881)^{3} - 7(2.4881) + 2 \\approx 0",
          "explanation": "Substituting back confirms this is a valid root.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the equilibrium concentration",
          "workingLatex": "c \\approx 2.49 \\text{ mol/L}",
          "explanation": "To $2$ decimal places, the equilibrium concentration is $2.49$ mol/L.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Confirm physical meaningfulness",
          "workingLatex": "c > 0 \\text{ and } c \\in [2,\\,3]",
          "explanation": "The result is a positive concentration within the expected range.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Relate to the chemical context",
          "workingLatex": "\\text{At equilibrium, the concentration settles at approximately } 2.49 \\text{ mol/L}",
          "explanation": "The iterative method estimates the equilibrium without solving the cubic exactly.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Note the convergence speed",
          "workingLatex": "|g'(c)| = \\frac{7}{3\\sqrt[3]{(7c-2)^{2}}} \\approx 0.94 \\text{ near the root}",
          "explanation": "A gradient close to $1$ explains the slow but steady convergence observed.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $f(2) < 0$, $f(3) > 0$. (b) $c_{1} = 2.4906$, $c_{2} = 2.4886$, $c_{3} = 2.4882$. (c) $c \\approx 2.49$ mol/L."
    }
  },
  {
    "id": "al.y2.pure.roots-iteration.q064",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "decimal",
    "tags": [
      "iteration",
      "precision",
      "stopping criterion",
      "square root"
    ],
    "questionText": "Use $x_{n+1} = \\dfrac{1}{2}\\!\\left(x_{n} + \\dfrac{3}{x_{n}}\\right)$ with $x_{0} = 2$ to approximate $\\sqrt{3}$.\n\nHow many iterations are needed until $x_{n}$ and $x_{n+1}$ agree to $4$ decimal places? State the final approximation.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the method",
          "workingLatex": "x_{n+1} = \\frac{1}{2}\\!\\left(x_{n} + \\frac{3}{x_{n}}\\right) \\text{ finds } \\sqrt{3}",
          "explanation": "This Babylonian formula converges quadratically to the square root.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Compute $x_{1}$",
          "workingLatex": "x_{1} = \\frac{1}{2}\\!\\left(2 + \\frac{3}{2}\\right) = 1.75",
          "explanation": "The first iterate improves on the initial guess $x_{0} = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute $x_{2}$",
          "workingLatex": "x_{2} = \\frac{1}{2}\\!\\left(1.75 + \\frac{3}{1.75}\\right) = \\frac{1}{2}(1.75 + 1.7143) = 1.7321",
          "explanation": "Already very close to $\\sqrt{3} \\approx 1.7321$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check agreement to $4$ d.p. after $x_{2}$",
          "workingLatex": "x_{2} = 1.7321 \\text{ (to 4 d.p.)}",
          "explanation": "We need to verify whether $x_{3}$ changes the fourth decimal place.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute $x_{3}$",
          "workingLatex": "x_{3} = \\frac{1}{2}\\!\\left(1.7321 + \\frac{3}{1.7321}\\right) = 1.7320508\\ldots",
          "explanation": "The value is $1.7320508\\ldots$, which rounds to $1.7321$ at $4$ d.p.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare $x_{2}$ and $x_{3}$ to $4$ d.p.",
          "workingLatex": "x_{2} = 1.7321, \\quad x_{3} = 1.7321 \\text{ (both to 4 d.p.)}",
          "explanation": "The fourth decimal place agrees between $x_{2}$ and $x_{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Count the iterations",
          "workingLatex": "n = 2",
          "explanation": "Two iterations (from $x_{0}$ to $x_{2}$) are sufficient for $4$-d.p. agreement.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify against $\\sqrt{3}$",
          "workingLatex": "\\sqrt{3} = 1.7320508\\ldots",
          "explanation": "The approximation $1.7321$ is correct to $4$ decimal places.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Explain the rapid convergence",
          "workingLatex": "\\text{Babylonian method: error roughly squared each step}",
          "explanation": "Near the root, the number of correct digits approximately doubles with each iteration.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the stopping rule used",
          "workingLatex": "x_{n} \\text{ and } x_{n+1} \\text{ agree when rounded to 4 d.p.}",
          "explanation": "This is a practical stopping criterion based on successive agreement.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Compute $x_{4}$ to confirm stability",
          "workingLatex": "x_{4} = 1.732050807\\ldots",
          "explanation": "Further iteration does not change the $4$-d.p. value.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Note $|x_{3} - x_{2}|$",
          "workingLatex": "|x_{3} - x_{2}| = 0.00005",
          "explanation": "The difference is $5 \\times 10^{-5}$, just at the boundary of $4$-d.p. agreement.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the final answer",
          "workingLatex": "n = 2, \\quad \\sqrt{3} \\approx 1.7321",
          "explanation": "Two iterations give $\\sqrt{3} \\approx 1.7321$ to $4$ decimal places.",
          "diagram": null
        }
      ],
      "finalAnswer": "$n = 2$ iterations needed; $\\sqrt{3} \\approx 1.7321$ to $4$ decimal places."
    }
  },
  {
    "id": "al.y2.pure.roots-iteration.q065",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "exact",
    "tags": [
      "show that",
      "gradient condition",
      "convergence"
    ],
    "questionText": "The equation $x^{3} - 4x + 1 = 0$ is rearranged to $x = \\sqrt[3]{4x - 1}$, giving $g(x) = \\sqrt[3]{4x - 1}$.\n\nShow that $|g'(x)| < 1$ for all $x$ in the interval $[1,\\,2]$, and hence explain why iteration converges to the root in that interval.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate $g(x)$",
          "workingLatex": "g(x) = \\sqrt[3]{4x - 1}, \\quad g'(x) = \\frac{4}{3\\sqrt[3]{(4x-1)^{2}}}",
          "explanation": "The chain rule gives the gradient of the iteration function.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Note the denominator is always positive",
          "workingLatex": "\\sqrt[3]{(4x-1)^{2}} > 0 \\text{ for } x \\geq 1",
          "explanation": "For $x \\geq 1$ we have $4x - 1 \\geq 3 > 0$, so the cube root is well-defined and positive.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find where $|g'(x)|$ is largest on $[1,\\,2]$",
          "workingLatex": "|g'(x)| \\text{ is largest when } (4x-1)^{2} \\text{ is smallest}",
          "explanation": "Since $|g'(x)|$ is inversely proportional to $\\sqrt[3]{(4x-1)^{2}}$, the maximum occurs at the left endpoint.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate $4x - 1$ at $x = 1$",
          "workingLatex": "4(1) - 1 = 3",
          "explanation": "At the left endpoint, $4x - 1 = 3$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute $|g'(1)|$",
          "workingLatex": "|g'(1)| = \\frac{4}{3\\sqrt[3]{9}} = \\frac{4}{3 \\times 2.080} \\approx 0.641",
          "explanation": "This is the maximum gradient magnitude on $[1,\\,2]$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate at $x = 2$ for comparison",
          "workingLatex": "|g'(2)| = \\frac{4}{3\\sqrt[3]{49}} = \\frac{4}{3 \\times 3.659} \\approx 0.364",
          "explanation": "The gradient magnitude decreases as $x$ increases across the interval.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclude the gradient bound",
          "workingLatex": "|g'(x)| \\leq 0.641 < 1 \\text{ for all } x \\in [1,\\,2]",
          "explanation": "The convergence condition $|g'(x)| < 1$ holds throughout the interval.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify a root exists in $[1,\\,2]$",
          "workingLatex": "f(x) = x^{3} - 4x + 1; \\quad f(1) = -2, \\quad f(2) = 1",
          "explanation": "Change of sign confirms a root in $[1,\\,2]$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Link the two results",
          "workingLatex": "\\text{Root exists in } [1,\\,2] \\text{ and } |g'(x)| < 1 \\text{ on } [1,\\,2]",
          "explanation": "Both conditions needed for successful fixed-point iteration are satisfied.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Explain the contraction property",
          "workingLatex": "|x_{n+1} - \\alpha| \\approx |g'(\\alpha)| \\cdot |x_{n} - \\alpha|",
          "explanation": "Near the root $\\alpha$, each error is scaled by a factor less than $1$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Describe the cobweb behaviour",
          "workingLatex": "\\text{Staircase convergence because } 0 < g'(x) < 1",
          "explanation": "A positive gradient less than $1$ produces a narrowing staircase toward the fixed point.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State why iteration converges",
          "workingLatex": "|g'(x)| < 1 \\Rightarrow \\text{ successive approximations move closer to the root}",
          "explanation": "The gradient bound guarantees that the iteration contracts toward the fixed point.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the conclusion",
          "workingLatex": "\\text{Shown: } |g'(x)| < 1 \\text{ on } [1,\\,2], \\text{ so iteration converges to the root}",
          "explanation": "The rearrangement is valid for finding the root in this interval.",
          "diagram": null
        }
      ],
      "finalAnswer": "Shown: $|g'(x)| \\leq \\frac{4}{3\\sqrt[3]{9}} \\approx 0.641 < 1$ on $[1,\\,2]$, so iteration converges to the root in that interval."
    }
  },
  {
    "id": "al.y2.pure.roots-iteration.q066",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "written",
    "tags": [
      "iteration",
      "oscillation",
      "cobweb",
      "negative gradient"
    ],
    "questionText": "The equation $x^{2} + x - 5 = 0$ has a positive root $\\alpha$. Consider the iterative formula $x_{n+1} = \\dfrac{5}{x_{n} + 1}$ with $x_{0} = 2$.\n\nFind $x_{1}$, $x_{2}$, $x_{3}$ and $x_{4}$ (to $4$ d.p.), describe the cobweb pattern, and explain why the iteration still converges despite oscillating above and below $\\alpha$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the positive root for reference",
          "workingLatex": "x = \\frac{-1 + \\sqrt{21}}{2} \\approx 1.7913",
          "explanation": "The quadratic formula gives the positive root $\\alpha \\approx 1.7913$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Compute $x_{1}$",
          "workingLatex": "x_{1} = \\frac{5}{2 + 1} = \\frac{5}{3} = 1.6667",
          "explanation": "The first iterate falls below the root.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute $x_{2}$",
          "workingLatex": "x_{2} = \\frac{5}{1.6667 + 1} = \\frac{5}{2.6667} = 1.8750",
          "explanation": "The second iterate overshoots above the root.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute $x_{3}$",
          "workingLatex": "x_{3} = \\frac{5}{1.8750 + 1} = \\frac{5}{2.8750} = 1.7391",
          "explanation": "The third iterate drops below the root again.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute $x_{4}$",
          "workingLatex": "x_{4} = \\frac{5}{1.7391 + 1} = \\frac{5}{2.7391} = 1.8221",
          "explanation": "The fourth iterate rises above the root, but the overshoot is smaller than before.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Observe the oscillation",
          "workingLatex": "x_{1} < \\alpha < x_{2}, \\quad x_{3} < \\alpha < x_{4}",
          "explanation": "Successive iterates alternate below and above the root.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Measure the shrinking envelope",
          "workingLatex": "|x_{2} - x_{1}| = 0.2083, \\quad |x_{4} - x_{3}| = 0.0830",
          "explanation": "The gap between successive values is decreasing.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Differentiate $g(x) = \\dfrac{5}{x+1}$",
          "workingLatex": "g'(x) = -\\frac{5}{(x+1)^{2}}",
          "explanation": "The gradient is always negative on the domain.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Evaluate $|g'(\\alpha)|$",
          "workingLatex": "|g'(1.7913)| = \\frac{5}{(2.7913)^{2}} = \\frac{5}{7.791} \\approx 0.642",
          "explanation": "The magnitude is less than $1$, satisfying the convergence condition.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Explain the cobweb pattern",
          "workingLatex": "g'(x) < 0 \\Rightarrow \\text{ oscillating cobweb converging inward}",
          "explanation": "A negative gradient causes the cobweb to bounce above and below the line $y = x$, but $|g'| < 1$ makes each bounce smaller.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Relate oscillation to convergence",
          "workingLatex": "|x_{n+1} - \\alpha| \\approx 0.642 \\cdot |x_{n} - \\alpha|",
          "explanation": "Each error is reduced by a factor of about $0.642$, even though the sign alternates.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Note the iteration is valid for $x > 0$",
          "workingLatex": "x_{n} + 1 > 0 \\text{ when } x_{0} = 2 > 0",
          "explanation": "All iterates remain positive, keeping the formula well-defined.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the cobweb description",
          "workingLatex": "\\text{Oscillating cobweb narrowing toward } \\alpha \\approx 1.79",
          "explanation": "The iteration converges despite oscillation because $|g'(\\alpha)| < 1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_{1} = 1.6667$, $x_{2} = 1.8750$, $x_{3} = 1.7391$, $x_{4} = 1.8221$. Oscillating cobweb converges because $|g'(\\alpha)| \\approx 0.642 < 1$."
    }
  },
  {
    "id": "al.y2.pure.roots-iteration.q067",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "decimal",
    "tags": [
      "change of sign",
      "iteration",
      "exponential",
      "comprehensive"
    ],
    "questionText": "The equation $e^{x} = x + 3$ arises in a population model.\n\n**(a)** Show that a root lies in $[1,\\,2]$.\n\n**(b)** Use $x_{n+1} = \\ln(x_{n} + 3)$ with $x_{0} = 1.5$ to find $x_{1}$, $x_{2}$, $x_{3}$ and $x_{4}$ (to $4$ d.p.).\n\n**(c)** Comment on the convergence of this iteration.\n\n**(d)** State the root to $2$ d.p.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define $f(x) = e^{x} - x - 3$",
          "workingLatex": "f(x) = e^{x} - x - 3",
          "explanation": "Collecting terms gives a function suitable for the change-of-sign test.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate $f(1)$",
          "workingLatex": "f(1) = e - 1 - 3 = e - 4 \\approx -1.282 < 0",
          "explanation": "At $x = 1$ the exponential is outweighed by $x + 3$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate $f(2)$",
          "workingLatex": "f(2) = e^{2} - 2 - 3 = e^{2} - 5 \\approx 2.389 > 0",
          "explanation": "At $x = 2$ the exponential exceeds $x + 3$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Conclude part (a)",
          "workingLatex": "f(1) < 0,\\; f(2) > 0 \\Rightarrow \\text{root in } [1,\\,2]",
          "explanation": "A continuous sign change guarantees a root in the interval.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set up the iteration for part (b)",
          "workingLatex": "x_{n+1} = \\ln(x_{n} + 3), \\quad x_{0} = 1.5",
          "explanation": "Taking logarithms of $e^{x} = x + 3$ gives the fixed-point formula.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute $x_{1}$",
          "workingLatex": "x_{1} = \\ln(1.5 + 3) = \\ln(4.5) = 1.5041",
          "explanation": "The first iterate is very close to $x_{0}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compute $x_{2}$",
          "workingLatex": "x_{2} = \\ln(1.5041 + 3) = \\ln(4.5041) = 1.5050",
          "explanation": "The change is already very small.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compute $x_{3}$",
          "workingLatex": "x_{3} = \\ln(1.5050 + 3) = \\ln(4.5050) = 1.5052",
          "explanation": "The iterates are stabilising.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compute $x_{4}$",
          "workingLatex": "x_{4} = \\ln(1.5052 + 3) = \\ln(4.5052) = 1.5052",
          "explanation": "No change to $4$ d.p. — convergence is essentially complete.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Differentiate $g(x) = \\ln(x + 3)$ for part (c)",
          "workingLatex": "g'(x) = \\frac{1}{x + 3}",
          "explanation": "The gradient of the iteration function controls convergence speed.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Evaluate $|g'(\\alpha)|$ near the root",
          "workingLatex": "|g'(1.505)| = \\frac{1}{4.505} \\approx 0.222",
          "explanation": "A gradient magnitude of about $0.22$ means rapid convergence.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Comment on convergence",
          "workingLatex": "\\text{Fast staircase convergence because } |g'(\\alpha)| \\approx 0.22 \\ll 1",
          "explanation": "Each error shrinks to about $22\\%$ of its previous value, so the iteration converges quickly.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the root for part (d)",
          "workingLatex": "\\alpha \\approx 1.51",
          "explanation": "To $2$ decimal places, the root is $1.51$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Verify in context",
          "workingLatex": "e^{1.51} \\approx 4.53, \\quad 1.51 + 3 = 4.51",
          "explanation": "The values agree to $2$ d.p., confirming the population-model root.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Summarise all parts",
          "workingLatex": "\\text{(a) } [1,2]; \\text{ (b) } x_{4} = 1.5052; \\text{ (c) fast convergence; (d) } \\alpha = 1.51",
          "explanation": "Change of sign locates the root; logarithmic rearrangement converges rapidly.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) Root in $[1,\\,2]$. (b) $x_{4} = 1.5052$. (c) Fast convergence since $|g'(\\alpha)| \\approx 0.22$. (d) $\\alpha \\approx 1.51$."
    }
  },
  {
    "id": "al.y2.pure.roots-iteration.q068",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "decimal",
    "tags": [
      "iteration",
      "engineering",
      "context",
      "cubic"
    ],
    "questionText": "In an electrical circuit, the current $I$ (in amps) satisfies $I^{3} - 10I + 8 = 0$. The operating current is the root in $[2,\\,3]$.\n\n**(a)** Verify this root exists.\n\n**(b)** Use $I_{n+1} = \\sqrt[3]{10I_{n} - 8}$ with $I_{0} = 2.5$ to find $I_{1}$, $I_{2}$ and $I_{3}$ (to $4$ d.p.).\n\n**(c)** Give the operating current to $2$ d.p.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define $f(I) = I^{3} - 10I + 8$",
          "workingLatex": "f(I) = I^{3} - 10I + 8",
          "explanation": "The operating current satisfies $f(I) = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate $f(2)$",
          "workingLatex": "f(2) = 8 - 20 + 8 = -4",
          "explanation": "At $I = 2$ A the function is negative.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate $f(3)$",
          "workingLatex": "f(3) = 27 - 30 + 8 = 5",
          "explanation": "At $I = 3$ A the function is positive.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Conclude part (a)",
          "workingLatex": "f(2) < 0,\\; f(3) > 0 \\Rightarrow \\text{root in } [2,\\,3]",
          "explanation": "Change of sign confirms an operating current root in $[2,\\,3]$ A.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set up the iteration for part (b)",
          "workingLatex": "I_{n+1} = \\sqrt[3]{10I_{n} - 8}, \\quad I_{0} = 2.5",
          "explanation": "Rearranging $I^{3} = 10I - 8$ gives the iterative formula.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute $I_{1}$",
          "workingLatex": "I_{1} = \\sqrt[3]{10(2.5) - 8} = \\sqrt[3]{17} = 2.5713",
          "explanation": "The first iterate moves above the starting value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compute $I_{2}$",
          "workingLatex": "I_{2} = \\sqrt[3]{10(2.5713) - 8} = \\sqrt[3]{17.713} = 2.8048",
          "explanation": "The second iterate overshoots before correcting.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compute $I_{3}$",
          "workingLatex": "I_{3} = \\sqrt[3]{10(2.8048) - 8} = \\sqrt[3]{20.048} = 2.7146",
          "explanation": "The iterates are converging toward the root.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Continue to a stable value",
          "workingLatex": "I_{4} = 2.7320, \\quad I_{5} = 2.7321",
          "explanation": "Further iterations stabilise near $2.73$ A.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the operating current for part (c)",
          "workingLatex": "I \\approx 2.73 \\text{ A}",
          "explanation": "To $2$ decimal places, the operating current is $2.73$ A.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Verify the answer",
          "workingLatex": "f(2.73) = (2.73)^{3} - 10(2.73) + 8 \\approx 0",
          "explanation": "Substituting back confirms this is a valid root.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Check the gradient condition",
          "workingLatex": "g(I) = \\sqrt[3]{10I - 8}, \\quad |g'(I)| = \\frac{10}{3\\sqrt[3]{(10I-8)^{2}}} < 1 \\text{ near the root}",
          "explanation": "The convergence condition is satisfied, explaining why the iteration works.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Interpret in the circuit context",
          "workingLatex": "\\text{The circuit operates at approximately } 2.73 \\text{ A}",
          "explanation": "The iterative method estimates the physical operating point without solving the cubic algebraically.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $f(2) < 0$, $f(3) > 0$. (b) $I_{1} = 2.5713$, $I_{2} = 2.8048$, $I_{3} = 2.7146$. (c) $I \\approx 2.73$ A."
    }
  },
  {
    "id": "al.y2.pure.roots-iteration.q069",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "exact",
    "tags": [
      "show that",
      "convergence",
      "trigonometric",
      "fixed point"
    ],
    "questionText": "Show that the iterative formula $x_{n+1} = \\cos x_{n}$ converges to the root of $x = \\cos x$ in $[0,\\,1]$, by proving that $|g'(x)| < 1$ for $g(x) = \\cos x$ on this interval.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the iteration function",
          "workingLatex": "g(x) = \\cos x",
          "explanation": "The fixed-point equation $x = \\cos x$ is solved by iterating $g$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate $g(x)$",
          "workingLatex": "g'(x) = -\\sin x",
          "explanation": "The derivative of $\\cos x$ is $-\\sin x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find $|g'(x)|$ on $[0,\\,1]$",
          "workingLatex": "|g'(x)| = |-\\sin x| = \\sin x",
          "explanation": "Since $\\sin x \\geq 0$ on $[0,\\,1]$, the absolute value equals $\\sin x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Determine the maximum of $\\sin x$ on $[0,\\,1]$",
          "workingLatex": "\\sin x \\text{ is increasing on } [0,\\,1]",
          "explanation": "The sine function increases from $0$ to $\\sin 1$ on this interval.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the maximum",
          "workingLatex": "\\max_{[0,\\,1]} |g'(x)| = \\sin 1 \\approx 0.841",
          "explanation": "The largest gradient magnitude on $[0,\\,1]$ is $\\sin 1 \\approx 0.841$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclude the gradient bound",
          "workingLatex": "|g'(x)| \\leq 0.841 < 1 \\text{ for all } x \\in [0,\\,1]",
          "explanation": "The convergence condition is satisfied throughout the interval.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify a fixed point exists in $[0,\\,1]$",
          "workingLatex": "h(x) = x - \\cos x; \\quad h(0) = -1, \\quad h(1) = 1 - \\cos 1 \\approx 0.460 > 0",
          "explanation": "By the Intermediate Value Theorem, a root of $x = \\cos x$ lies in $(0,\\,1)$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Explain the contraction mapping",
          "workingLatex": "|x_{n+1} - \\alpha| \\approx |g'(\\alpha)| \\cdot |x_{n} - \\alpha|",
          "explanation": "Near the fixed point $\\alpha$, each error is multiplied by a factor less than $1$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Describe the cobweb for positive gradient",
          "workingLatex": "g'(\\alpha) = -\\sin\\alpha < 0 \\Rightarrow \\text{ oscillating cobweb}",
          "explanation": "Although $|g'| < 1$, the negative gradient means iterates bounce above and below the root.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Note $\\alpha \\approx 0.7391$",
          "workingLatex": "\\cos(0.7391) \\approx 0.7391",
          "explanation": "The fixed point is approximately $0.7391$, within $[0,\\,1]$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Confirm $|g'(\\alpha)| < 1$ at the fixed point",
          "workingLatex": "|g'(0.7391)| = \\sin(0.7391) \\approx 0.673 < 1",
          "explanation": "At the actual fixed point, the gradient magnitude confirms convergence.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State why starting in $[0,\\,1]$ works",
          "workingLatex": "g([0,\\,1]) = [\\cos 1,\\, 1] \\approx [0.54,\\, 1] \\subset [0,\\, 1]",
          "explanation": "The iteration maps $[0,\\,1]$ into itself, so iterates remain in the convergence region.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the conclusion",
          "workingLatex": "\\text{Shown: } |g'(x)| < 1 \\text{ on } [0,\\,1], \\text{ so } x_{n+1} = \\cos x_{n} \\text{ converges}",
          "explanation": "The gradient bound proves convergence of the iterative formula to the root of $x = \\cos x$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Shown: $|g'(x)| = \\sin x \\leq \\sin 1 \\approx 0.841 < 1$ on $[0,\\,1]$, so $x_{n+1} = \\cos x_{n}$ converges to the root of $x = \\cos x$."
    }
  },
  {
    "id": "al.y2.pure.roots-iteration.q070",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Locating roots and iteration",
    "subtopicId": "al.y2.pure.roots-iteration",
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "decimal",
    "tags": [
      "change of sign",
      "iteration",
      "comparison",
      "stopping criterion",
      "comprehensive"
    ],
    "questionText": "Consider $f(x) = x^{3} - 2x - 5$.\n\n**(a)** Show that $f(x) = 0$ has a root $\\alpha$ in $[2,\\,3]$.\n\n**(b)** Use $x_{n+1} = \\sqrt[3]{2x_{n} + 5}$ with $x_{0} = 2.5$ to find $x_{1}$, $x_{2}$, $x_{3}$ and $x_{4}$ (to $4$ d.p.).\n\n**(c)** Show that $|g'(x)| < 1$ where $g(x) = \\sqrt[3]{2x + 5}$, and comment on convergence.\n\n**(d)** State $\\alpha$ to $2$ d.p. and describe when you would stop iterating in an exam.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Evaluate $f(2)$ for part (a)",
          "workingLatex": "f(2) = 8 - 4 - 5 = -1",
          "explanation": "At $x = 2$ the function is negative.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate $f(3)$",
          "workingLatex": "f(3) = 27 - 6 - 5 = 16",
          "explanation": "At $x = 3$ the function is positive.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Conclude part (a)",
          "workingLatex": "f(2) < 0,\\; f(3) > 0 \\Rightarrow \\alpha \\in [2,\\,3]",
          "explanation": "Change of sign on a continuous function guarantees a root.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set up the iteration for part (b)",
          "workingLatex": "x_{n+1} = \\sqrt[3]{2x_{n} + 5}, \\quad x_{0} = 2.5",
          "explanation": "Rearranging $x^{3} = 2x + 5$ gives the iterative formula.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute $x_{1}$",
          "workingLatex": "x_{1} = \\sqrt[3]{2(2.5) + 5} = \\sqrt[3]{10} = 2.1544",
          "explanation": "The first iterate moves down from $2.5$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute $x_{2}$",
          "workingLatex": "x_{2} = \\sqrt[3]{2(2.1544) + 5} = \\sqrt[3]{9.3088} = 2.1039",
          "explanation": "The sequence approaches the root from above.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compute $x_{3}$",
          "workingLatex": "x_{3} = \\sqrt[3]{2(2.1039) + 5} = \\sqrt[3]{9.2078} = 2.0946",
          "explanation": "The iterates are very close to the known root $2.0946\\ldots$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compute $x_{4}$",
          "workingLatex": "x_{4} = \\sqrt[3]{2(2.0946) + 5} = \\sqrt[3]{9.1892} = 2.0940",
          "explanation": "Further iteration refines the estimate.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Differentiate $g(x) = \\sqrt[3]{2x + 5}$ for part (c)",
          "workingLatex": "g'(x) = \\frac{2}{3\\sqrt[3]{(2x+5)^{2}}}",
          "explanation": "The chain rule gives the gradient of the iteration function.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Bound $|g'(x)|$ on $[2,\\,3]$",
          "workingLatex": "x = 2: |g'(2)| = \\frac{2}{3\\sqrt[3]{81}} \\approx 0.154; \\quad x = 3: |g'(3)| = \\frac{2}{3\\sqrt[3]{121}} \\approx 0.126",
          "explanation": "Both values are well below $1$, so $|g'(x)| < 1$ on $[2,\\,3]$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Comment on convergence",
          "workingLatex": "|g'(\\alpha)| \\approx 0.13 \\Rightarrow \\text{ fast staircase convergence}",
          "explanation": "A small gradient magnitude means errors shrink quickly at each step.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State $\\alpha$ for part (d)",
          "workingLatex": "\\alpha \\approx 2.09",
          "explanation": "To $2$ decimal places, the root is $2.09$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Describe exam stopping criteria",
          "workingLatex": "\\text{Stop when successive iterates agree to required accuracy}",
          "explanation": "In an exam, stop when $|x_{n+1} - x_{n}|$ is less than half the unit of the last decimal place required, or when $x_{n}$ and $x_{n+1}$ round to the same value.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Apply the stopping rule here",
          "workingLatex": "|x_{4} - x_{3}| = 0.0006 < 0.005",
          "explanation": "For $2$ d.p., successive iterates agree after $4$ steps.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Verify $f(2.09) \\approx 0$",
          "workingLatex": "f(2.09) = (2.09)^{3} - 2(2.09) - 5 \\approx -0.03",
          "explanation": "Close to zero, confirming $\\alpha \\approx 2.09$ to $2$ d.p.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "Summarise all parts",
          "workingLatex": "\\text{(a) } [2,3]; \\text{ (b) } x_{4} = 2.0940; \\text{ (c) } |g'| < 1; \\text{ (d) } \\alpha = 2.09",
          "explanation": "This question combines location, iteration, convergence analysis, and stopping criteria.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $f(2) < 0$, $f(3) > 0$. (b) $x_{4} = 2.0940$. (c) $|g'(x)| < 1$ on $[2,\\,3]$, fast convergence. (d) $\\alpha \\approx 2.09$; stop when successive iterates agree to required d.p."
    }
  }
];
