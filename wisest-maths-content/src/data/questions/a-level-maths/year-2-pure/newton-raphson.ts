import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "id": "al.y2.pure.newton-raphson.q001",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "tags": [
      "Newton-Raphson",
      "formula"
    ],
    "questionText": "State the Newton–Raphson iterative formula for approximating a root of $f(x) = 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Start from the tangent line",
          "workingLatex": "y - f(x_n) = f'(x_n)(x - x_n)",
          "explanation": "At $x = x_n$, the tangent to $y = f(x)$ has gradient $f'(x_n)$ and passes through $(x_n, f(x_n))$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find where the tangent crosses the $x$-axis",
          "workingLatex": "0 - f(x_n) = f'(x_n)(x_{n+1} - x_n)",
          "explanation": "Set $y = 0$ in the tangent equation to locate where the straight line meets the horizontal axis.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange for $x_{n+1}$",
          "workingLatex": "x_{n+1} = x_n - \\dfrac{f(x_n)}{f'(x_n)}",
          "explanation": "Solve for the $x$-coordinate of the intercept; this becomes the next approximation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Interpret the correction term",
          "workingLatex": "\\dfrac{f(x_n)}{f'(x_n)} = \\text{horizontal shift along the tangent}",
          "explanation": "The fraction measures how far to move along the tangent to reach the axis.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Repeat the process",
          "workingLatex": "x_0 \\to x_1 \\to x_2 \\to \\cdots",
          "explanation": "Each new $x$-value is found by drawing a tangent at the previous point and reading off its $x$-intercept.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the formula",
          "workingLatex": "x_{n+1} = x_n - \\dfrac{f(x_n)}{f'(x_n)}",
          "explanation": "This is the standard Newton–Raphson iteration used at A-Level.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_{n+1} = x_n - \\dfrac{f(x_n)}{f'(x_n)}$, provided $f'(x_n) \\neq 0$."
    }
  },
  {
    "id": "al.y2.pure.newton-raphson.q002",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "tags": [
      "geometric interpretation",
      "tangent"
    ],
    "questionText": "Describe the geometric meaning of one step of the Newton–Raphson method.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose a starting value",
          "workingLatex": "x_n",
          "explanation": "Begin with an approximation $x_n$ on the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Mark the point on the curve",
          "workingLatex": "(x_n, f(x_n))",
          "explanation": "Evaluate $f(x_n)$ to locate where the graph is at this $x$-value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Draw the tangent at that point",
          "workingLatex": "gradient = f'(x_n)",
          "explanation": "The tangent is the best local straight-line approximation to the curve.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the tangent's $x$-intercept",
          "workingLatex": "x_{n+1}",
          "explanation": "The intercept is where the tangent line crosses $y = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Use this as the next guess",
          "workingLatex": "x_{n+1} \\text{ replaces } x_n",
          "explanation": "The intercept is taken as a better estimate of the root because the tangent points toward the axis.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Repeat with a new tangent",
          "workingLatex": "\\text{new tangent at } (x_{n+1}, f(x_{n+1}))",
          "explanation": "Each iteration replaces the curve locally with a tangent and reads off where that tangent hits the axis.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Summary",
          "workingLatex": "x_{n+1} = x_n - \\dfrac{f(x_n)}{f'(x_n)}",
          "explanation": "Geometrically, Newton–Raphson follows tangents to the $x$-axis, refining the root estimate each time.",
          "diagram": null
        }
      ],
      "finalAnswer": "At $x_n$, draw the tangent to $y = f(x)$. Its $x$-intercept is $x_{n+1}$; repeat to refine the root."
    }
  },
  {
    "id": "al.y2.pure.newton-raphson.q003",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "tags": [
      "Babylonian method",
      "square root"
    ],
    "questionText": "Show that applying Newton–Raphson to $f(x) = x^2 - N$ with $x_0 > 0$ gives the Babylonian (Heron's) formula $x_{n+1} = \\dfrac{1}{2}\\left(x_n + \\dfrac{N}{x_n}\\right)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down $f(x)$ and $f'(x)$",
          "workingLatex": "f(x) = x^2 - N, \\quad f'(x) = 2x",
          "explanation": "To find $\\sqrt{N}$, we solve $x^2 - N = 0$ using Newton's method.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute into the NR formula",
          "workingLatex": "x_{n+1} = x_n - \\dfrac{x_n^2 - N}{2x_n}",
          "explanation": "Replace $f(x_n)$ and $f'(x_n)$ in $x_{n+1} = x_n - f(x_n)/f'(x_n)$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Combine over a common denominator",
          "workingLatex": "x_{n+1} = \\dfrac{2x_n^2 - (x_n^2 - N)}{2x_n}",
          "explanation": "Write $x_n$ as $2x_n^2/(2x_n)$ so everything shares the denominator $2x_n$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the numerator",
          "workingLatex": "2x_n^2 - x_n^2 + N = x_n^2 + N",
          "explanation": "The $x_n^2$ terms combine, leaving $x_n^2 + N$ on top.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Split the fraction",
          "workingLatex": "x_{n+1} = \\dfrac{x_n^2}{2x_n} + \\dfrac{N}{2x_n} = \\dfrac{x_n}{2} + \\dfrac{N}{2x_n}",
          "explanation": "Separate into two simpler fractions.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Factor out $\\dfrac{1}{2}$",
          "workingLatex": "x_{n+1} = \\dfrac{1}{2}\\left(x_n + \\dfrac{N}{x_n}\\right)",
          "explanation": "This is the classical Babylonian square-root iteration.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Interpret",
          "workingLatex": "\\text{Average of } x_n \\text{ and } N/x_n",
          "explanation": "Each step replaces $x_n$ by the arithmetic mean of $x_n$ and $N/x_n$, which converges rapidly to $\\sqrt{N}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_{n+1} = \\dfrac{1}{2}\\left(x_n + \\dfrac{N}{x_n}\\right)$ — the Babylonian formula for $\\sqrt{N}$."
    }
  },
  {
    "id": "al.y2.pure.newton-raphson.q004",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "tags": [
      "convergence",
      "simple root"
    ],
    "questionText": "State one condition under which Newton–Raphson converges quickly to a root $\\alpha$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the target",
          "workingLatex": "\\alpha \\text{ with } f(\\alpha) = 0",
          "explanation": "We want iterates $x_n$ to approach the actual root.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Simple root condition",
          "workingLatex": "f'(\\alpha) \\neq 0",
          "explanation": "At a simple root the curve crosses the axis with non-zero gradient, not merely touches it.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Why this matters",
          "workingLatex": "f'(\\alpha) \\neq 0 \\Rightarrow \\text{tangent not horizontal at the root}",
          "explanation": "A non-horizontal tangent gives a well-defined intercept direction toward the root.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Local convergence",
          "workingLatex": "x_0 \\text{ sufficiently close to } \\alpha",
          "explanation": "Newton's method is local: a good starting value in the basin of attraction is needed.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rate of convergence",
          "workingLatex": "\\text{Quadratic convergence near a simple root}",
          "explanation": "When $f'(\\alpha) \\neq 0$, the number of correct digits typically doubles each step.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the condition",
          "workingLatex": "f'(\\alpha) \\neq 0 \\text{ and } x_0 \\text{ close to } \\alpha",
          "explanation": "A simple root with a nearby starting value gives rapid Newton–Raphson convergence.",
          "diagram": null
        }
      ],
      "finalAnswer": "Newton–Raphson converges quickly when $\\alpha$ is a simple root ($f'(\\alpha) \\neq 0$) and $x_0$ is sufficiently close to $\\alpha$."
    }
  },
  {
    "id": "al.y2.pure.newton-raphson.q005",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "Newton-Raphson",
      "one step",
      "quadratic"
    ],
    "questionText": "Use one step of Newton–Raphson with $x_0 = 2$ to approximate a root of $f(x) = x^2 - 5$. Give $x_1$ as an exact fraction.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the formula",
          "workingLatex": "x_{n+1} = x_n - \\dfrac{f(x_n)}{f'(x_n)}",
          "explanation": "Newton's method moves along the tangent to the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate",
          "workingLatex": "f'(x) = 2x",
          "explanation": "Differentiate $f(x) = x^2 - 5$ term by term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate at $x_0 = 2$",
          "workingLatex": "f(2) = -1, \\quad f'(2) = 4",
          "explanation": "Substitute the starting value into $f$ and $f'$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the formula",
          "workingLatex": "x_1 = 2 - \\dfrac{(-1)}{4} = \\dfrac{9}{4}",
          "explanation": "The sign of $f(x_0)$ and $f'(x_0)$ determines whether the next guess moves left or right.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify exactly",
          "workingLatex": "x_1 = \\dfrac{9}{4}",
          "explanation": "Write the first iterate as an exact fraction.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret",
          "workingLatex": "x_1 = \\dfrac{9}{4} \\text{ is closer to the root}",
          "explanation": "One Newton step refines the starting approximation toward the true root.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_1 = \\dfrac{9}{4}$."
    }
  },
  {
    "id": "al.y2.pure.newton-raphson.q006",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "Newton-Raphson",
      "one step",
      "quadratic"
    ],
    "questionText": "Use one step of Newton–Raphson with $x_0 = 1$ to approximate a root of $f(x) = x^2 - 2$. Give $x_1$ as an exact fraction.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the formula",
          "workingLatex": "x_{n+1} = x_n - \\dfrac{f(x_n)}{f'(x_n)}",
          "explanation": "Newton's method moves along the tangent to the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate",
          "workingLatex": "f'(x) = 2x",
          "explanation": "Differentiate $f(x) = x^2 - 2$ term by term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate at $x_0 = 1$",
          "workingLatex": "f(1) = -1, \\quad f'(1) = 2",
          "explanation": "Substitute the starting value into $f$ and $f'$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the formula",
          "workingLatex": "x_1 = 1 - \\dfrac{(-1)}{2} = \\dfrac{3}{2}",
          "explanation": "The sign of $f(x_0)$ and $f'(x_0)$ determines whether the next guess moves left or right.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify exactly",
          "workingLatex": "x_1 = \\dfrac{3}{2}",
          "explanation": "Write the first iterate as an exact fraction.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret",
          "workingLatex": "x_1 = \\dfrac{3}{2} \\text{ is closer to the root}",
          "explanation": "One Newton step refines the starting approximation toward the true root.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_1 = \\dfrac{3}{2}$."
    }
  },
  {
    "id": "al.y2.pure.newton-raphson.q007",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "Newton-Raphson",
      "one step",
      "quadratic"
    ],
    "questionText": "Use one step of Newton–Raphson with $x_0 = 2$ to approximate a root of $f(x) = x^2 - 3$. Give $x_1$ as an exact fraction.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the formula",
          "workingLatex": "x_{n+1} = x_n - \\dfrac{f(x_n)}{f'(x_n)}",
          "explanation": "Newton's method moves along the tangent to the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate",
          "workingLatex": "f'(x) = 2x",
          "explanation": "Differentiate $f(x) = x^2 - 3$ term by term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate at $x_0 = 2$",
          "workingLatex": "f(2) = 1, \\quad f'(2) = 4",
          "explanation": "Substitute the starting value into $f$ and $f'$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the formula",
          "workingLatex": "x_1 = 2 - \\dfrac{(1)}{4} = \\dfrac{7}{4}",
          "explanation": "The sign of $f(x_0)$ and $f'(x_0)$ determines whether the next guess moves left or right.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify exactly",
          "workingLatex": "x_1 = \\dfrac{7}{4}",
          "explanation": "Write the first iterate as an exact fraction.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret",
          "workingLatex": "x_1 = \\dfrac{7}{4} \\text{ is closer to the root}",
          "explanation": "One Newton step refines the starting approximation toward the true root.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_1 = \\dfrac{7}{4}$."
    }
  },
  {
    "id": "al.y2.pure.newton-raphson.q008",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "Newton-Raphson",
      "one step",
      "quadratic"
    ],
    "questionText": "Use one step of Newton–Raphson with $x_0 = 3$ to approximate a root of $f(x) = x^2 - 7$. Give $x_1$ as an exact fraction.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the formula",
          "workingLatex": "x_{n+1} = x_n - \\dfrac{f(x_n)}{f'(x_n)}",
          "explanation": "Newton's method moves along the tangent to the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate",
          "workingLatex": "f'(x) = 2x",
          "explanation": "Differentiate $f(x) = x^2 - 7$ term by term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate at $x_0 = 3$",
          "workingLatex": "f(3) = 2, \\quad f'(3) = 6",
          "explanation": "Substitute the starting value into $f$ and $f'$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the formula",
          "workingLatex": "x_1 = 3 - \\dfrac{(2)}{6} = \\dfrac{8}{3}",
          "explanation": "The sign of $f(x_0)$ and $f'(x_0)$ determines whether the next guess moves left or right.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify exactly",
          "workingLatex": "x_1 = \\dfrac{8}{3}",
          "explanation": "Write the first iterate as an exact fraction.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret",
          "workingLatex": "x_1 = \\dfrac{8}{3} \\text{ is closer to the root}",
          "explanation": "One Newton step refines the starting approximation toward the true root.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_1 = \\dfrac{8}{3}$."
    }
  },
  {
    "id": "al.y2.pure.newton-raphson.q009",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "Newton-Raphson",
      "one step",
      "quadratic"
    ],
    "questionText": "Use one step of Newton–Raphson with $x_0 = 2$ to approximate a root of $f(x) = 2x^2 - 9$. Give $x_1$ as an exact fraction.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the formula",
          "workingLatex": "x_{n+1} = x_n - \\dfrac{f(x_n)}{f'(x_n)}",
          "explanation": "Newton's method moves along the tangent to the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate",
          "workingLatex": "f'(x) = 4x",
          "explanation": "Differentiate $f(x) = 2x^2 - 9$ term by term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate at $x_0 = 2$",
          "workingLatex": "f(2) = -1, \\quad f'(2) = 8",
          "explanation": "Substitute the starting value into $f$ and $f'$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the formula",
          "workingLatex": "x_1 = 2 - \\dfrac{(-1)}{8} = \\dfrac{17}{8}",
          "explanation": "The sign of $f(x_0)$ and $f'(x_0)$ determines whether the next guess moves left or right.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify exactly",
          "workingLatex": "x_1 = \\dfrac{17}{8}",
          "explanation": "Write the first iterate as an exact fraction.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret",
          "workingLatex": "x_1 = \\dfrac{17}{8} \\text{ is closer to the root}",
          "explanation": "One Newton step refines the starting approximation toward the true root.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_1 = \\dfrac{17}{8}$."
    }
  },
  {
    "id": "al.y2.pure.newton-raphson.q010",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "Newton-Raphson",
      "one step",
      "cubic"
    ],
    "questionText": "Use one step of Newton–Raphson with $x_0 = 1$ to approximate a root of $f(x) = x^3 - 2$. Give $x_1$ as an exact fraction.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the formula",
          "workingLatex": "x_{n+1} = x_n - \\dfrac{f(x_n)}{f'(x_n)}",
          "explanation": "Newton's method moves along the tangent to the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate",
          "workingLatex": "f'(x) = 3x^2",
          "explanation": "Differentiate $f(x) = x^3 - 2$ term by term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate at $x_0 = 1$",
          "workingLatex": "f(1) = -1, \\quad f'(1) = 3",
          "explanation": "Substitute the starting value into $f$ and $f'$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the formula",
          "workingLatex": "x_1 = 1 - \\dfrac{(-1)}{3} = \\dfrac{4}{3}",
          "explanation": "The sign of $f(x_0)$ and $f'(x_0)$ determines whether the next guess moves left or right.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify exactly",
          "workingLatex": "x_1 = \\dfrac{4}{3}",
          "explanation": "Write the first iterate as an exact fraction.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret",
          "workingLatex": "x_1 = \\dfrac{4}{3} \\text{ is closer to the root}",
          "explanation": "One Newton step refines the starting approximation toward the true root.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_1 = \\dfrac{4}{3}$."
    }
  },
  {
    "id": "al.y2.pure.newton-raphson.q011",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "Newton-Raphson",
      "one step",
      "cubic"
    ],
    "questionText": "Use one step of Newton–Raphson with $x_0 = 2$ for $f(x) = x^3 - x - 1$. Give $x_1$ correct to $3$ decimal places.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Formula",
          "workingLatex": "x_{n+1} = x_n - \\dfrac{f(x_n)}{f'(x_n)}",
          "explanation": "Apply the standard Newton–Raphson iteration.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Derivative",
          "workingLatex": "f'(x) = 3x^2 - 1",
          "explanation": "Differentiate $f(x) = x^3 - x - 1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Values at $x_0 = 2$",
          "workingLatex": "f(2) = 5, \\quad f'(2) = 11",
          "explanation": "Evaluate the function and its gradient at the starting point.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute $x_1$",
          "workingLatex": "x_1 = 2 - \\dfrac{5.0000}{11} = 1.5455",
          "explanation": "Substitute into the iterative formula.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Round to 3 d.p.",
          "workingLatex": "x_1 = 1.545",
          "explanation": "Give the answer to the required accuracy.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Sense check",
          "workingLatex": "x_1 = 1.545 \\text{ refines } x_0 = 2",
          "explanation": "The new estimate should move toward the root near this starting value.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_1 = 1.545$."
    }
  },
  {
    "id": "al.y2.pure.newton-raphson.q012",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "Newton-Raphson",
      "one step",
      "cubic"
    ],
    "questionText": "Use one step of Newton–Raphson with $x_0 = 2$ for $f(x) = x^3 - 2x - 5$. Give $x_1$ correct to $3$ decimal places.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Formula",
          "workingLatex": "x_{n+1} = x_n - \\dfrac{f(x_n)}{f'(x_n)}",
          "explanation": "Apply the standard Newton–Raphson iteration.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Derivative",
          "workingLatex": "f'(x) = 3x^2 - 2",
          "explanation": "Differentiate $f(x) = x^3 - 2x - 5$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Values at $x_0 = 2$",
          "workingLatex": "f(2) = -1, \\quad f'(2) = 10",
          "explanation": "Evaluate the function and its gradient at the starting point.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute $x_1$",
          "workingLatex": "x_1 = 2 - \\dfrac{-1.0000}{10} = 2.1000",
          "explanation": "Substitute into the iterative formula.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Round to 3 d.p.",
          "workingLatex": "x_1 = 2.100",
          "explanation": "Give the answer to the required accuracy.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Sense check",
          "workingLatex": "x_1 = 2.100 \\text{ refines } x_0 = 2",
          "explanation": "The new estimate should move toward the root near this starting value.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_1 = 2.100$."
    }
  },
  {
    "id": "al.y2.pure.newton-raphson.q013",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "Newton-Raphson",
      "one step",
      "cubic"
    ],
    "questionText": "Use one step of Newton–Raphson with $x_0 = 1$ for $f(x) = x^3 + x - 3$. Give $x_1$ correct to $3$ decimal places.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Formula",
          "workingLatex": "x_{n+1} = x_n - \\dfrac{f(x_n)}{f'(x_n)}",
          "explanation": "Apply the standard Newton–Raphson iteration.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Derivative",
          "workingLatex": "f'(x) = 3x^2 + 1",
          "explanation": "Differentiate $f(x) = x^3 + x - 3$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Values at $x_0 = 1$",
          "workingLatex": "f(1) = -1, \\quad f'(1) = 4",
          "explanation": "Evaluate the function and its gradient at the starting point.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute $x_1$",
          "workingLatex": "x_1 = 1 - \\dfrac{-1.0000}{4} = 1.2500",
          "explanation": "Substitute into the iterative formula.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Round to 3 d.p.",
          "workingLatex": "x_1 = 1.250",
          "explanation": "Give the answer to the required accuracy.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Sense check",
          "workingLatex": "x_1 = 1.250 \\text{ refines } x_0 = 1",
          "explanation": "The new estimate should move toward the root near this starting value.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_1 = 1.250$."
    }
  },
  {
    "id": "al.y2.pure.newton-raphson.q014",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "Newton-Raphson",
      "one step",
      "cubic"
    ],
    "questionText": "Use one step of Newton–Raphson with $x_0 = 2$ for $f(x) = x^3 - 3x + 1$. Give $x_1$ correct to $3$ decimal places.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Formula",
          "workingLatex": "x_{n+1} = x_n - \\dfrac{f(x_n)}{f'(x_n)}",
          "explanation": "Apply the standard Newton–Raphson iteration.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Derivative",
          "workingLatex": "f'(x) = 3x^2 - 3",
          "explanation": "Differentiate $f(x) = x^3 - 3x + 1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Values at $x_0 = 2$",
          "workingLatex": "f(2) = 3, \\quad f'(2) = 9",
          "explanation": "Evaluate the function and its gradient at the starting point.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute $x_1$",
          "workingLatex": "x_1 = 2 - \\dfrac{3.0000}{9} = 1.6667",
          "explanation": "Substitute into the iterative formula.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Round to 3 d.p.",
          "workingLatex": "x_1 = 1.667",
          "explanation": "Give the answer to the required accuracy.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Sense check",
          "workingLatex": "x_1 = 1.667 \\text{ refines } x_0 = 2",
          "explanation": "The new estimate should move toward the root near this starting value.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_1 = 1.667$."
    }
  },
  {
    "id": "al.y2.pure.newton-raphson.q015",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "derivative",
      "polynomial"
    ],
    "questionText": "Given $f(x) = x^4 - 3x^2 + 2x - 1$, find $f'(x)$ for use in Newton–Raphson.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate term by term",
          "workingLatex": "f'(x) = 4x^3 - 6x + 2",
          "explanation": "Apply the power rule to each term of the quartic.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Check the $x^3$ term",
          "workingLatex": "4x^3",
          "explanation": "The derivative of $x^4$ is $4x^3$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Check the $x^2$ term",
          "workingLatex": "-6x",
          "explanation": "The derivative of $-3x^2$ is $-6x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check the linear term",
          "workingLatex": "+2",
          "explanation": "The derivative of $2x$ is $2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Constant term",
          "workingLatex": "0",
          "explanation": "The derivative of a constant is zero.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State $f'(x)$",
          "workingLatex": "f'(x) = 4x^3 - 6x + 2",
          "explanation": "This expression is substituted into the Newton–Raphson formula.",
          "diagram": null
        }
      ],
      "finalAnswer": "$f'(x) = 4x^3 - 6x + 2$."
    }
  },
  {
    "id": "al.y2.pure.newton-raphson.q016",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "derivative",
      "polynomial"
    ],
    "questionText": "Given $f(x) = 2x^3 - 5x + 4$, find $f'(x)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate",
          "workingLatex": "f'(x) = 6x^2 - 5",
          "explanation": "Differentiate each term using the power rule.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "$x^3$ term",
          "workingLatex": "6x^2",
          "explanation": "$2x^3$ differentiates to $6x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "$x$ term",
          "workingLatex": "-5",
          "explanation": "The derivative of $-5x$ is $-5$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Constant",
          "workingLatex": "0",
          "explanation": "The constant $4$ vanishes on differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "f'(x) = 6x^2 - 5",
          "explanation": "Collect the surviving terms.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Role in NR",
          "workingLatex": "f'(x_n) \\text{ in denominator of iteration}",
          "explanation": "This derivative appears in every Newton–Raphson step.",
          "diagram": null
        }
      ],
      "finalAnswer": "$f'(x) = 6x^2 - 5$."
    }
  },
  {
    "id": "al.y2.pure.newton-raphson.q017",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "derivative",
      "polynomial"
    ],
    "questionText": "Given $f(x) = x^5 - 2x^3 + x$, find $f'(x)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Power rule on $x^5$",
          "workingLatex": "5x^4",
          "explanation": "Bring the power down and reduce the index by one.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Power rule on $-2x^3$",
          "workingLatex": "-6x^2",
          "explanation": "Differentiate $-2x^3$ to get $-6x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Power rule on $x$",
          "workingLatex": "1",
          "explanation": "The derivative of $x$ is $1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Combine",
          "workingLatex": "f'(x) = 5x^4 - 6x^2 + 1",
          "explanation": "Write the full derivative.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Factor (optional)",
          "workingLatex": "f'(x) = (x^2 - 1)(5x^2 - 1) + \\cdots",
          "explanation": "Factoring can help locate where $f'(x) = 0$, which stops Newton's method.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State answer",
          "workingLatex": "f'(x) = 5x^4 - 6x^2 + 1",
          "explanation": "This is required for Newton–Raphson on the quintic.",
          "diagram": null
        }
      ],
      "finalAnswer": "$f'(x) = 5x^4 - 6x^2 + 1$."
    }
  },
  {
    "id": "al.y2.pure.newton-raphson.q018",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "derivative",
      "exponential"
    ],
    "questionText": "Given $f(x) = e^{2x} - 5x$, find $f'(x)$ for Newton–Raphson.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate $e^{2x}$",
          "workingLatex": "\\dfrac{d}{dx}(e^{2x}) = 2e^{2x}",
          "explanation": "For $e^{kx}$, the derivative is $k e^{kx}$ by the chain rule.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate $-5x$",
          "workingLatex": "-5",
          "explanation": "The linear term differentiates to its coefficient.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Combine",
          "workingLatex": "f'(x) = 2e^{2x} - 5",
          "explanation": "Add the derivative of each term.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check at a sample point",
          "workingLatex": "f'(0) = 2(1) - 5 = -3",
          "explanation": "Substituting $x = 0$ gives a quick arithmetic check.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Note always positive exponential part",
          "workingLatex": "2e^{2x} > 0 \\text{ for all } x",
          "explanation": "The exponential term is always positive; $f'$ can still change sign because of $-5$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State $f'(x)$",
          "workingLatex": "f'(x) = 2e^{2x} - 5",
          "explanation": "Use this in $x_{n+1} = x_n - f(x_n)/f'(x_n)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$f'(x) = 2e^{2x} - 5$."
    }
  },
  {
    "id": "al.y2.pure.newton-raphson.q019",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "derivative",
      "logarithm"
    ],
    "questionText": "Given $f(x) = \\ln x - x + 2$, find $f'(x)$ (domain $x > 0$).",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate $\\ln x$",
          "workingLatex": "\\dfrac{1}{x}",
          "explanation": "The derivative of $\\ln x$ is $1/x$ for $x > 0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate $-x$",
          "workingLatex": "-1",
          "explanation": "The linear term gives $-1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Constant term",
          "workingLatex": "0",
          "explanation": "The $+2$ differentiates to zero.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Combine",
          "workingLatex": "f'(x) = \\dfrac{1}{x} - 1",
          "explanation": "Write the derivative as a single expression.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Domain reminder",
          "workingLatex": "x > 0",
          "explanation": "Both $f$ and $f'$ require $x$ to be positive.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State answer",
          "workingLatex": "f'(x) = \\dfrac{1}{x} - 1",
          "explanation": "This is substituted into the Newton–Raphson formula on $(0, \\infty)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$f'(x) = \\dfrac{1}{x} - 1$ for $x > 0$."
    }
  },
  {
    "id": "al.y2.pure.newton-raphson.q020",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "derivative",
      "trigonometric"
    ],
    "questionText": "Given $f(x) = \\sin x - \\dfrac{x}{2}$, find $f'(x)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate $\\sin x$",
          "workingLatex": "\\cos x",
          "explanation": "The derivative of $\\sin x$ is $\\cos x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate $x/2$",
          "workingLatex": "\\dfrac{1}{2}",
          "explanation": "The derivative of $\\dfrac{x}{2}$ is $\\dfrac{1}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Combine with sign",
          "workingLatex": "f'(x) = \\cos x - \\dfrac{1}{2}",
          "explanation": "Subtract the derivative of the linear term.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check at $x = 0$",
          "workingLatex": "f'(0) = 1 - \\dfrac{1}{2} = \\dfrac{1}{2}",
          "explanation": "A quick substitution verifies the expression.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Role in NR",
          "workingLatex": "f'(x_n) \\text{ must be non-zero}",
          "explanation": "If $f'(x_n) = 0$, Newton's method cannot proceed at that step.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State answer",
          "workingLatex": "f'(x) = \\cos x - \\dfrac{1}{2}",
          "explanation": "Use this when iterating with Newton–Raphson on the transcendental equation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$f'(x) = \\cos x - \\dfrac{1}{2}$."
    }
  },
  {
    "id": "al.y2.pure.newton-raphson.q021",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "tags": [
      "failure",
      "zero derivative"
    ],
    "questionText": "Explain why Newton–Raphson fails at a starting value $x_0$ if $f'(x_0) = 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the formula",
          "workingLatex": "x_{n+1} = x_n - \\dfrac{f(x_n)}{f'(x_n)}",
          "explanation": "The derivative appears in the denominator of each Newton step.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Horizontal tangent",
          "workingLatex": "f'(x_0) = 0 \\Rightarrow \\text{tangent is horizontal}",
          "explanation": "Zero gradient means the tangent line is parallel to the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "No $x$-intercept (unless on axis)",
          "workingLatex": "\\text{Horizontal tangent may not cross } y = 0",
          "explanation": "If the tangent is horizontal and $f(x_0) \\neq 0$, it never meets the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Division by zero",
          "workingLatex": "f'(x_0) = 0 \\Rightarrow \\dfrac{f(x_0)}{f'(x_0)} \\text{ undefined}",
          "explanation": "The iterative formula breaks down because we cannot divide by zero.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Geometric picture",
          "workingLatex": "\\text{Tangent does not point toward a root}",
          "explanation": "Without a finite intercept, there is no next iterate from the tangent construction.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclusion",
          "workingLatex": "\\text{Choose a different } x_0",
          "explanation": "Pick a starting value where the tangent is not horizontal, i.e.\\ $f'(x_0) \\neq 0$.",
          "diagram": null
        }
      ],
      "finalAnswer": "If $f'(x_0) = 0$, the tangent is horizontal, the formula divides by zero, and no valid next iterate exists."
    }
  },
  {
    "id": "al.y2.pure.newton-raphson.q022",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "tags": [
      "failure",
      "poor starting value"
    ],
    "questionText": "Give one reason why a poor choice of $x_0$ can cause Newton–Raphson to fail or diverge.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Newton is a local method",
          "workingLatex": "x_0 \\text{ must lie in the basin of attraction}",
          "explanation": "Convergence is only guaranteed near the root, not from every starting point.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Far starting value",
          "workingLatex": "x_0 \\text{ far from } \\alpha \\Rightarrow \\text{tangent may miss the root}",
          "explanation": "A tangent drawn far from the root can intercept the axis at an unhelpful location.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Jump to wrong root",
          "workingLatex": "\\text{Multiple roots } \\Rightarrow \\text{may converge elsewhere}",
          "explanation": "The method follows the local tangent, which may lead toward a different root.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Oscillation",
          "workingLatex": "x_n \\text{ may bounce between values}",
          "explanation": "Poor $x_0$ can cause iterates to alternate without approaching any root.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Divergence",
          "workingLatex": "|x_n| \\to \\infty",
          "explanation": "In some cases iterates move increasingly far from the root.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Practical advice",
          "workingLatex": "\\text{Use a graph or sign-change interval to choose } x_0",
          "explanation": "A sketch or change-of-sign argument helps pick a sensible starting value near the target root.",
          "diagram": null
        }
      ],
      "finalAnswer": "A poor $x_0$ may lie outside the basin of attraction, causing divergence, oscillation, or convergence to the wrong root."
    }
  },
  {
    "id": "al.y2.pure.newton-raphson.q023",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "tags": [
      "convergence",
      "simple root"
    ],
    "questionText": "The root $\\alpha$ of $f(x) = 0$ satisfies $f(\\alpha) = 0$ and $f'(\\alpha) = 4$. Explain why Newton–Raphson is expected to converge quickly near $\\alpha$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Simple root",
          "workingLatex": "f'(\\alpha) = 4 \\neq 0",
          "explanation": "A non-zero derivative at the root means the curve crosses the axis at a finite angle.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Tangent direction",
          "workingLatex": "\\text{Tangent at nearby points points toward } \\alpha",
          "explanation": "Near a simple root, tangents have intercepts that pull iterates inward.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Quadratic convergence",
          "workingLatex": "\\text{Error roughly squares each step}",
          "explanation": "Close to a simple root, Newton's method typically doubles correct digits per iteration.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compare to bisection",
          "workingLatex": "\\text{Newton: fast; bisection: steady but slow}",
          "explanation": "Newton trades robustness for speed when conditions are favourable.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Need a good $x_0$",
          "workingLatex": "x_0 \\text{ close enough to } \\alpha",
          "explanation": "Fast convergence still requires a starting value in the local convergence zone.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclusion",
          "workingLatex": "f'(\\alpha) \\neq 0 \\Rightarrow \\text{rapid local convergence}",
          "explanation": "The simple-root condition is the key reason Newton–Raphson is so efficient near $\\alpha$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Because $f'(\\alpha) \\neq 0$, $\\alpha$ is a simple root and Newton–Raphson has quadratic convergence for $x_0$ sufficiently close to $\\alpha$."
    }
  },
  {
    "id": "al.y2.pure.newton-raphson.q024",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "Newton-Raphson",
      "one step",
      "quadratic"
    ],
    "questionText": "Use one Newton–Raphson step with $x_0 = 3$ on $f(x) = x^2 - 10$. Give $x_1$ as an exact fraction.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate",
          "workingLatex": "f'(x) = 2x",
          "explanation": "The derivative of $x^2 - 10$ is $2x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate at $x_0 = 3$",
          "workingLatex": "f(3) = -1, \\quad f'(3) = 6",
          "explanation": "Substitute $x_0 = 3$ into $f$ and $f'$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the formula",
          "workingLatex": "x_1 = 3 - \\dfrac{-1}{6} = 3 + \\dfrac{1}{6}",
          "explanation": "Subtracting a negative fraction moves the estimate to the right.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify",
          "workingLatex": "x_1 = \\dfrac{19}{6}",
          "explanation": "Combine over a common denominator.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Decimal check",
          "workingLatex": "\\dfrac{19}{6} \\approx 3.167",
          "explanation": "This is close to $\\sqrt{10} \\approx 3.162$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State $x_1$",
          "workingLatex": "x_1 = \\dfrac{19}{6}",
          "explanation": "The exact first iterate is $\\dfrac{19}{6}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_1 = \\dfrac{19}{6}$."
    }
  },
  {
    "id": "al.y2.pure.newton-raphson.q025",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "Newton-Raphson",
      "two steps",
      "cubic"
    ],
    "questionText": "Use Newton–Raphson with $x_0 = 2$ on $f(x) = x^3 - 3x - 1$. Find $x_1$ and $x_2$, correct to $3$ decimal places.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Formula and derivative",
          "workingLatex": "f'(x) = 3x^2 - 3",
          "explanation": "State the Newton formula and differentiate $f$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "First iteration from $x_0 = 2$",
          "workingLatex": "f(2) = 1.000000, \\; f'(2) = 9.000000",
          "explanation": "Evaluate $f$ and $f'$ at the starting value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute $x_1$",
          "workingLatex": "x_1 = 1.888889 \\approx 1.889",
          "explanation": "Substitute into $x_{n+1} = x_n - f(x_n)/f'(x_n)$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Second iteration from $x_1$",
          "workingLatex": "f(1.888889) = 0.072702, \\; f'(1.888889) = 7.703704",
          "explanation": "Use $x_1$ as the input for the next Newton step.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute $x_2$",
          "workingLatex": "x_2 = 1.879452 \\approx 1.879",
          "explanation": "The second iterate refines the approximation further.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare with $x_0$",
          "workingLatex": "x_0 = 2, \\; x_1 = 1.889, \\; x_2 = 1.879",
          "explanation": "Each step should move closer to the root.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Accuracy note",
          "workingLatex": "|x_2 - x_1| \\approx 0.0094",
          "explanation": "When successive iterates agree to the required d.p., the method has effectively converged.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State answers",
          "workingLatex": "x_1 = 1.889, \\quad x_2 = 1.879",
          "explanation": "Both iterates rounded to 3 decimal places.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_1 = 1.889$, $x_2 = 1.879$."
    }
  },
  {
    "id": "al.y2.pure.newton-raphson.q026",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "Newton-Raphson",
      "two steps",
      "cubic"
    ],
    "questionText": "Use Newton–Raphson with $x_0 = 2$ on $f(x) = x^3 - 2x - 5$. Find $x_1$ and $x_2$, correct to $3$ decimal places.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Formula and derivative",
          "workingLatex": "f'(x) = 3x^2 - 2",
          "explanation": "State the Newton formula and differentiate $f$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "First iteration from $x_0 = 2$",
          "workingLatex": "f(2) = -1.000000, \\; f'(2) = 10.000000",
          "explanation": "Evaluate $f$ and $f'$ at the starting value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute $x_1$",
          "workingLatex": "x_1 = 2.100000 \\approx 2.100",
          "explanation": "Substitute into $x_{n+1} = x_n - f(x_n)/f'(x_n)$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Second iteration from $x_1$",
          "workingLatex": "f(2.100000) = 0.061000, \\; f'(2.100000) = 11.230000",
          "explanation": "Use $x_1$ as the input for the next Newton step.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute $x_2$",
          "workingLatex": "x_2 = 2.094568 \\approx 2.095",
          "explanation": "The second iterate refines the approximation further.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare with $x_0$",
          "workingLatex": "x_0 = 2, \\; x_1 = 2.100, \\; x_2 = 2.095",
          "explanation": "Each step should move closer to the root.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Accuracy note",
          "workingLatex": "|x_2 - x_1| \\approx 0.0054",
          "explanation": "When successive iterates agree to the required d.p., the method has effectively converged.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State answers",
          "workingLatex": "x_1 = 2.100, \\quad x_2 = 2.095",
          "explanation": "Both iterates rounded to 3 decimal places.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_1 = 2.100$, $x_2 = 2.095$."
    }
  },
  {
    "id": "al.y2.pure.newton-raphson.q027",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "Newton-Raphson",
      "two steps",
      "cubic"
    ],
    "questionText": "Use Newton–Raphson with $x_0 = 1$ on $f(x) = x^3 + x - 1$. Find $x_1$ and $x_2$, correct to $3$ decimal places.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Formula and derivative",
          "workingLatex": "f'(x) = 3x^2 + 1",
          "explanation": "State the Newton formula and differentiate $f$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "First iteration from $x_0 = 1$",
          "workingLatex": "f(1) = 1.000000, \\; f'(1) = 4.000000",
          "explanation": "Evaluate $f$ and $f'$ at the starting value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute $x_1$",
          "workingLatex": "x_1 = 0.750000 \\approx 0.750",
          "explanation": "Substitute into $x_{n+1} = x_n - f(x_n)/f'(x_n)$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Second iteration from $x_1$",
          "workingLatex": "f(0.750000) = 0.171875, \\; f'(0.750000) = 2.687500",
          "explanation": "Use $x_1$ as the input for the next Newton step.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute $x_2$",
          "workingLatex": "x_2 = 0.686047 \\approx 0.686",
          "explanation": "The second iterate refines the approximation further.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare with $x_0$",
          "workingLatex": "x_0 = 1, \\; x_1 = 0.750, \\; x_2 = 0.686",
          "explanation": "Each step should move closer to the root.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Accuracy note",
          "workingLatex": "|x_2 - x_1| \\approx 0.0640",
          "explanation": "When successive iterates agree to the required d.p., the method has effectively converged.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State answers",
          "workingLatex": "x_1 = 0.750, \\quad x_2 = 0.686",
          "explanation": "Both iterates rounded to 3 decimal places.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_1 = 0.750$, $x_2 = 0.686$."
    }
  },
  {
    "id": "al.y2.pure.newton-raphson.q028",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "Newton-Raphson",
      "two steps",
      "cubic"
    ],
    "questionText": "Use Newton–Raphson with $x_0 = 1$ on $f(x) = x^3 - x^2 - 1$. Find $x_1$ and $x_2$, correct to $3$ decimal places.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Formula and derivative",
          "workingLatex": "f'(x) = 3x^2 - 2x",
          "explanation": "State the Newton formula and differentiate $f$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "First iteration from $x_0 = 1$",
          "workingLatex": "f(1) = -1.000000, \\; f'(1) = 1.000000",
          "explanation": "Evaluate $f$ and $f'$ at the starting value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute $x_1$",
          "workingLatex": "x_1 = 2.000000 \\approx 2.000",
          "explanation": "Substitute into $x_{n+1} = x_n - f(x_n)/f'(x_n)$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Second iteration from $x_1$",
          "workingLatex": "f(2.000000) = 3.000000, \\; f'(2.000000) = 8.000000",
          "explanation": "Use $x_1$ as the input for the next Newton step.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute $x_2$",
          "workingLatex": "x_2 = 1.625000 \\approx 1.625",
          "explanation": "The second iterate refines the approximation further.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare with $x_0$",
          "workingLatex": "x_0 = 1, \\; x_1 = 2.000, \\; x_2 = 1.625",
          "explanation": "Each step should move closer to the root.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Accuracy note",
          "workingLatex": "|x_2 - x_1| \\approx 0.3750",
          "explanation": "When successive iterates agree to the required d.p., the method has effectively converged.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State answers",
          "workingLatex": "x_1 = 2.000, \\quad x_2 = 1.625",
          "explanation": "Both iterates rounded to 3 decimal places.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_1 = 2.000$, $x_2 = 1.625$."
    }
  },
  {
    "id": "al.y2.pure.newton-raphson.q029",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "Newton-Raphson",
      "two steps",
      "quadratic"
    ],
    "questionText": "Use Newton–Raphson with $x_0 = 2$ on $f(x) = x^2 - 5$. Find $x_1$ and $x_2$, correct to $3$ decimal places.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Formula and derivative",
          "workingLatex": "f'(x) = 2x",
          "explanation": "State the Newton formula and differentiate $f$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "First iteration from $x_0 = 2$",
          "workingLatex": "f(2) = -1.000000, \\; f'(2) = 4.000000",
          "explanation": "Evaluate $f$ and $f'$ at the starting value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute $x_1$",
          "workingLatex": "x_1 = 2.250000 \\approx 2.250",
          "explanation": "Substitute into $x_{n+1} = x_n - f(x_n)/f'(x_n)$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Second iteration from $x_1$",
          "workingLatex": "f(2.250000) = 0.062500, \\; f'(2.250000) = 4.500000",
          "explanation": "Use $x_1$ as the input for the next Newton step.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute $x_2$",
          "workingLatex": "x_2 = 2.236111 \\approx 2.236",
          "explanation": "The second iterate refines the approximation further.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare with $x_0$",
          "workingLatex": "x_0 = 2, \\; x_1 = 2.250, \\; x_2 = 2.236",
          "explanation": "Each step should move closer to the root.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Accuracy note",
          "workingLatex": "|x_2 - x_1| \\approx 0.0139",
          "explanation": "When successive iterates agree to the required d.p., the method has effectively converged.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State answers",
          "workingLatex": "x_1 = 2.250, \\quad x_2 = 2.236",
          "explanation": "Both iterates rounded to 3 decimal places.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_1 = 2.250$, $x_2 = 2.236$."
    }
  },
  {
    "id": "al.y2.pure.newton-raphson.q030",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "Newton-Raphson",
      "two steps",
      "cubic"
    ],
    "questionText": "Use Newton–Raphson with $x_0 = 1$ on $f(x) = 2x^3 - 3x - 1$. Find $x_1$ and $x_2$, correct to $3$ decimal places.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Formula and derivative",
          "workingLatex": "f'(x) = 6x^2 - 3",
          "explanation": "State the Newton formula and differentiate $f$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "First iteration from $x_0 = 1$",
          "workingLatex": "f(1) = -2.000000, \\; f'(1) = 3.000000",
          "explanation": "Evaluate $f$ and $f'$ at the starting value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute $x_1$",
          "workingLatex": "x_1 = 1.666667 \\approx 1.667",
          "explanation": "Substitute into $x_{n+1} = x_n - f(x_n)/f'(x_n)$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Second iteration from $x_1$",
          "workingLatex": "f(1.666667) = 3.259259, \\; f'(1.666667) = 13.666667",
          "explanation": "Use $x_1$ as the input for the next Newton step.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute $x_2$",
          "workingLatex": "x_2 = 1.428184 \\approx 1.428",
          "explanation": "The second iterate refines the approximation further.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare with $x_0$",
          "workingLatex": "x_0 = 1, \\; x_1 = 1.667, \\; x_2 = 1.428",
          "explanation": "Each step should move closer to the root.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Accuracy note",
          "workingLatex": "|x_2 - x_1| \\approx 0.2385",
          "explanation": "When successive iterates agree to the required d.p., the method has effectively converged.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State answers",
          "workingLatex": "x_1 = 1.667, \\quad x_2 = 1.428",
          "explanation": "Both iterates rounded to 3 decimal places.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_1 = 1.667$, $x_2 = 1.428$."
    }
  },
  {
    "id": "al.y2.pure.newton-raphson.q031",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "Newton-Raphson",
      "two steps",
      "cubic"
    ],
    "questionText": "Use Newton–Raphson with $x_0 = 2$ on $f(x) = x^3 - 6x + 2$. Find $x_1$ and $x_2$, correct to $3$ decimal places.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Formula and derivative",
          "workingLatex": "f'(x) = 3x^2 - 6",
          "explanation": "State the Newton formula and differentiate $f$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "First iteration from $x_0 = 2$",
          "workingLatex": "f(2) = -2.000000, \\; f'(2) = 6.000000",
          "explanation": "Evaluate $f$ and $f'$ at the starting value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute $x_1$",
          "workingLatex": "x_1 = 2.333333 \\approx 2.333",
          "explanation": "Substitute into $x_{n+1} = x_n - f(x_n)/f'(x_n)$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Second iteration from $x_1$",
          "workingLatex": "f(2.333333) = 0.703704, \\; f'(2.333333) = 10.333333",
          "explanation": "Use $x_1$ as the input for the next Newton step.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute $x_2$",
          "workingLatex": "x_2 = 2.265233 \\approx 2.265",
          "explanation": "The second iterate refines the approximation further.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare with $x_0$",
          "workingLatex": "x_0 = 2, \\; x_1 = 2.333, \\; x_2 = 2.265",
          "explanation": "Each step should move closer to the root.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Accuracy note",
          "workingLatex": "|x_2 - x_1| \\approx 0.0681",
          "explanation": "When successive iterates agree to the required d.p., the method has effectively converged.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State answers",
          "workingLatex": "x_1 = 2.333, \\quad x_2 = 2.265",
          "explanation": "Both iterates rounded to 3 decimal places.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_1 = 2.333$, $x_2 = 2.265$."
    }
  },
  {
    "id": "al.y2.pure.newton-raphson.q032",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "Newton-Raphson",
      "two steps",
      "quartic"
    ],
    "questionText": "Use Newton–Raphson with $x_0 = 1$ on $f(x) = x^4 - 3x - 1$. Find $x_1$ and $x_2$, correct to $3$ decimal places.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Formula and derivative",
          "workingLatex": "f'(x) = 4x^3 - 3",
          "explanation": "State the Newton formula and differentiate $f$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "First iteration from $x_0 = 1$",
          "workingLatex": "f(1) = -3.000000, \\; f'(1) = 1.000000",
          "explanation": "Evaluate $f$ and $f'$ at the starting value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute $x_1$",
          "workingLatex": "x_1 = 4.000000 \\approx 4.000",
          "explanation": "Substitute into $x_{n+1} = x_n - f(x_n)/f'(x_n)$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Second iteration from $x_1$",
          "workingLatex": "f(4.000000) = 243.000000, \\; f'(4.000000) = 253.000000",
          "explanation": "Use $x_1$ as the input for the next Newton step.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute $x_2$",
          "workingLatex": "x_2 = 3.039526 \\approx 3.040",
          "explanation": "The second iterate refines the approximation further.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare with $x_0$",
          "workingLatex": "x_0 = 1, \\; x_1 = 4.000, \\; x_2 = 3.040",
          "explanation": "Each step should move closer to the root.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Accuracy note",
          "workingLatex": "|x_2 - x_1| \\approx 0.9605",
          "explanation": "When successive iterates agree to the required d.p., the method has effectively converged.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State answers",
          "workingLatex": "x_1 = 4.000, \\quad x_2 = 3.040",
          "explanation": "Both iterates rounded to 3 decimal places.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_1 = 4.000$, $x_2 = 3.040$."
    }
  },
  {
    "id": "al.y2.pure.newton-raphson.q033",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "Newton-Raphson",
      "exponential"
    ],
    "questionText": "Use Newton–Raphson with $x_0 = 1$ on $f(x) = e^x - 3$. Find $x_1$ and $x_2$ correct to $3$ decimal places.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up",
          "workingLatex": "f(x) = e^x - 3, \\quad f'(x) = e^x",
          "explanation": "The derivative of $e^x$ is $e^x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "First step at $x_0 = 1$",
          "workingLatex": "f(1) = e - 3 \\approx -0.282, \\; f'(1) = e \\approx 2.718",
          "explanation": "Evaluate at the starting point using $e \\approx 2.718$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute $x_1$",
          "workingLatex": "x_1 = 1 - \\dfrac{e-3}{e} \\approx 1.104",
          "explanation": "Substitute into the Newton formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Second step",
          "workingLatex": "f(1.104) \\approx -0.051, \\; f'(1.104) \\approx 3.016",
          "explanation": "Re-evaluate $f$ and $f'$ at $x_1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute $x_2$",
          "workingLatex": "x_2 \\approx 1.121",
          "explanation": "A second Newton step refines toward $\\ln 3 \\approx 1.099$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare",
          "workingLatex": "x_0 = 1, \\; x_1 \\approx 1.104, \\; x_2 \\approx 1.121",
          "explanation": "Track how the iterates approach the root.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Note rapid improvement",
          "workingLatex": "|x_2 - \\ln 3| < |x_1 - \\ln 3|",
          "explanation": "Newton's method typically converges quickly for simple roots.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Final values",
          "workingLatex": "x_1 = 1.104, \\; x_2 = 1.121",
          "explanation": "Answers to $3$ decimal places.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Further iteration would refine",
          "workingLatex": "x_3 \\approx 1.099",
          "explanation": "One more step would give $\\ln 3$ to greater accuracy.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_1 = 1.104$, $x_2 = 1.121$ (3 d.p.)."
    }
  },
  {
    "id": "al.y2.pure.newton-raphson.q034",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "Newton-Raphson",
      "logarithm"
    ],
    "questionText": "Use Newton–Raphson with $x_0 = 1.5$ on $f(x) = \\ln x + x - 2$. Find $x_1$ and $x_2$ correct to $3$ decimal places.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Derivative",
          "workingLatex": "f'(x) = \\dfrac{1}{x} + 1",
          "explanation": "Differentiate $\\ln x + x - 2$ term by term.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "At $x_0 = 1.5$",
          "workingLatex": "f(1.5) = -0.0945, \\; f'(1.5) = 1.6667",
          "explanation": "Evaluate at the starting value ($x > 0$ required).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "First iterate",
          "workingLatex": "x_1 = 1.5567",
          "explanation": "Apply the Newton formula once.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "At $x_1$",
          "workingLatex": "f(1.5567) = -0.0007, \\; f'(1.5567) = 1.6424",
          "explanation": "Substitute $x_1$ into $f$ and $f'$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Second iterate",
          "workingLatex": "x_2 = 1.5571",
          "explanation": "Second Newton step.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Round",
          "workingLatex": "x_1 = 1.557, \\; x_2 = 1.557",
          "explanation": "Give answers to $3$ decimal places.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Sense check",
          "workingLatex": "\\text{Root near } x = 1",
          "explanation": "Since $f(1) = -1 < 0$ and $f(2) > 0$, the root lies between $1$ and $2$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Convergence",
          "workingLatex": "x_2 = 1.557 \\text{ closer to root}",
          "explanation": "Successive iterates move toward the solution.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_1 = 1.557$, $x_2 = 1.557$."
    }
  },
  {
    "id": "al.y2.pure.newton-raphson.q035",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "Newton-Raphson",
      "trigonometric"
    ],
    "questionText": "Use Newton–Raphson with $x_0 = 0.5$ (radians) on $f(x) = \\sin x - 0.25$. Find $x_1$ and $x_2$ correct to $3$ decimal places.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Setup",
          "workingLatex": "f'(x) = \\cos x",
          "explanation": "Differentiate $\\sin x - 0.25$ to get $\\cos x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "At $x_0 = 0.5$",
          "workingLatex": "f(0.5) = 0.2294, \\; f'(0.5) = 0.8776",
          "explanation": "Use radians throughout.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "$x_1$",
          "workingLatex": "x_1 = 0.2386",
          "explanation": "First Newton iterate.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "At $x_1$",
          "workingLatex": "f(0.2386) = -0.0137",
          "explanation": "Re-evaluate the function at $x_1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "$x_2$",
          "workingLatex": "x_2 = 0.2527",
          "explanation": "Second iterate.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "3 d.p. answers",
          "workingLatex": "x_1 = 0.239, \\; x_2 = 0.253",
          "explanation": "Round to the required accuracy.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Interpretation",
          "workingLatex": "\\sin x = 0.25",
          "explanation": "We are approximating an angle whose sine is $0.25$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check",
          "workingLatex": "x_2 \\approx 0.253 \\text{ near } \\arcsin(0.25)",
          "explanation": "The result should be consistent with the inverse sine.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_1 = 0.239$, $x_2 = 0.253$."
    }
  },
  {
    "id": "al.y2.pure.newton-raphson.q036",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "Newton-Raphson",
      "transcendental"
    ],
    "questionText": "Use Newton–Raphson with $x_0 = 0.8$ on $f(x) = \\cos x - x$. Find $x_1$ and $x_2$ correct to $3$ decimal places.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Derivative",
          "workingLatex": "f'(x) = -\\sin x - 1",
          "explanation": "Differentiate $\\cos x - x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "At $x_0 = 0.8$",
          "workingLatex": "f(0.8) = -0.1033, \\; f'(0.8) = -1.7174",
          "explanation": "Evaluate at the starting point.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "$x_1$",
          "workingLatex": "x_1 = 0.7399",
          "explanation": "First Newton step toward the Dottie number $\\alpha \\approx 0.739$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Second step",
          "workingLatex": "x_2 = 0.7391",
          "explanation": "Continue iterating.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "3 d.p.",
          "workingLatex": "x_1 = 0.740, \\; x_2 = 0.739",
          "explanation": "Round both answers.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Known root",
          "workingLatex": "\\alpha \\approx 0.739 \\text{ satisfies } \\cos\\alpha = \\alpha",
          "explanation": "This famous fixed point lies in $(0,1)$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Convergence type",
          "workingLatex": "f'(\\alpha) = -\\sin\\alpha - 1 < 0",
          "explanation": "Negative gradient at the root gives cobweb-style convergence.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare iterates",
          "workingLatex": "x_2 = 0.739 \\text{ nearer } 0.739",
          "explanation": "Each step closes in on the fixed point.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_1 = 0.740$, $x_2 = 0.739$."
    }
  },
  {
    "id": "al.y2.pure.newton-raphson.q037",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "difficulty": "Intermediate",
    "marks": 7,
    "answerType": "written",
    "tags": [
      "change of sign",
      "Newton-Raphson",
      "multi-part"
    ],
    "questionText": "$f(x) = x^3 - 2x - 5$.\n\n(a) Show that a root lies in $[2, 3]$.\n\n(b) Use Newton–Raphson with $x_0 = 2$ to find $x_1$, correct to $3$ decimal places.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Part (a): evaluate $f(2)$",
          "workingLatex": "f(2) = 8 - 4 - 5 = -1 < 0",
          "explanation": "Substitute the left endpoint.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate $f(3)$",
          "workingLatex": "f(3) = 27 - 6 - 5 = 16 > 0",
          "explanation": "Substitute the right endpoint.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Sign change",
          "workingLatex": "f(2) \\cdot f(3) < 0",
          "explanation": "Opposite signs confirm a root in $(2,3)$ by continuity.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Part (b): differentiate",
          "workingLatex": "f'(x) = 3x^2 - 2",
          "explanation": "Newton's method needs the derivative.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "At $x_0 = 2$",
          "workingLatex": "f(2) = -1, \\; f'(2) = 10",
          "explanation": "Evaluate at the given starting value.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute $x_1$",
          "workingLatex": "x_1 = 2 - \\dfrac{-1}{10} = 2.1",
          "explanation": "One Newton step from $x_0 = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "3 d.p.",
          "workingLatex": "x_1 = 2.100",
          "explanation": "State the answer to three decimal places.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Link parts",
          "workingLatex": "\\text{Root in } (2,3) \\text{ and } x_1 = 2.1 \\text{ refines toward it}",
          "explanation": "The sign-change interval justifies choosing $x_0 = 2$ near the root.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Summary",
          "workingLatex": "\\text{(a) Root in } (2,3); \\text{ (b) } x_1 = 2.100",
          "explanation": "Complete answer to both parts.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $f(2) = -1 < 0$, $f(3) = 16 > 0$, so a root lies in $(2,3)$. (b) $x_1 = 2.100$."
    }
  },
  {
    "id": "al.y2.pure.newton-raphson.q038",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "difficulty": "Intermediate",
    "marks": 7,
    "answerType": "written",
    "tags": [
      "change of sign",
      "Newton-Raphson",
      "multi-part"
    ],
    "questionText": "$f(x) = x^3 + x - 1$.\n\n(a) Show that $f(x) = 0$ has a root in $[0, 1]$.\n\n(b) Use Newton–Raphson with $x_0 = 1$ to find $x_1$ and $x_2$, correct to $3$ decimal places.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Part (a): $f(0)$",
          "workingLatex": "f(0) = -1 < 0",
          "explanation": "At $x = 0$ the cubic is negative.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "$f(1)$",
          "workingLatex": "f(1) = 1 > 0",
          "explanation": "At $x = 1$ the cubic is positive.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Conclude (a)",
          "workingLatex": "\\text{Root in } (0,1)",
          "explanation": "Continuous $f$ with a sign change traps a root in the open interval.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Part (b): $f'(x)$",
          "workingLatex": "f'(x) = 3x^2 + 1",
          "explanation": "The derivative is always positive, so $f'(x_n) \\neq 0$ always.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "From $x_0 = 1$",
          "workingLatex": "x_1 = 1 - \\dfrac{1}{4} = 0.75",
          "explanation": "First Newton iterate.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "From $x_1 = 0.75$",
          "workingLatex": "x_2 \\approx 0.694",
          "explanation": "Second iterate, computed numerically.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "3 d.p.",
          "workingLatex": "x_1 = 0.750, \\; x_2 = 0.694",
          "explanation": "Round to three decimal places.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check interval",
          "workingLatex": "0.694 \\in (0,1)",
          "explanation": "The iterates remain in the bracket from part (a).",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Summary",
          "workingLatex": "\\text{(a) Root in } (0,1); \\text{ (b) } x_1 = 0.750,\\; x_2 = 0.694",
          "explanation": "Full solution to the multi-part question.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $f(0) < 0$, $f(1) > 0$, so a root lies in $(0,1)$. (b) $x_1 = 0.750$, $x_2 = 0.694$."
    }
  },
  {
    "id": "al.y2.pure.newton-raphson.q039",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "failure",
      "oscillation"
    ],
    "questionText": "For $f(x) = x^3 - 2x + 2$, explain why Newton–Raphson with $x_0 = 0$ may produce oscillating iterates.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Compute $f'(x)$",
          "workingLatex": "f'(x) = 3x^2 - 2",
          "explanation": "The derivative controls the slope of each tangent.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate near $x_0 = 0$",
          "workingLatex": "f(0) = 2, \\; f'(0) = -2",
          "explanation": "At the origin the function is above the axis with negative gradient.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "First step",
          "workingLatex": "x_1 = 0 - \\dfrac{2}{-2} = 1",
          "explanation": "The first iterate jumps to $x = 1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Second step from $x_1 = 1$",
          "workingLatex": "f(1) = 1, \\; f'(1) = 1 \\Rightarrow x_2 = 0",
          "explanation": "From $x = 1$ the method returns to $x = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Oscillation",
          "workingLatex": "x_0 = 0 \\to x_1 = 1 \\to x_2 = 0 \\to \\cdots",
          "explanation": "The iterates alternate between $0$ and $1$ without converging.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Geometric reason",
          "workingLatex": "\\text{Tangents overshoot and bounce}",
          "explanation": "Each tangent intercept lands on the opposite side, causing a 2-cycle.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Remedy",
          "workingLatex": "\\text{Choose } x_0 \\text{ closer to the actual root}",
          "explanation": "A better starting value avoids this periodic behaviour.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "General lesson",
          "workingLatex": "\\text{NR can cycle without converging}",
          "explanation": "Oscillation is a known failure mode for poorly chosen $x_0$.",
          "diagram": null
        }
      ],
      "finalAnswer": "With $x_0 = 0$, Newton iterates alternate $0 \\leftrightarrow 1$ because tangents overshoot, producing a 2-cycle (oscillation)."
    }
  },
  {
    "id": "al.y2.pure.newton-raphson.q040",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "failure",
      "divergence"
    ],
    "questionText": "The equation $x^3 - 3x + 1 = 0$ has a root near $x = 2$. Explain why starting Newton–Raphson at $x_0 = -3$ might fail to find this root.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Multiple roots",
          "workingLatex": "f(x) = 0 \\text{ has three real roots}",
          "explanation": "A cubic can have more than one root; Newton follows the local tangent.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate at $x_0 = -3$",
          "workingLatex": "f(-3) = -27 + 9 + 1 = -17",
          "explanation": "The function is negative far to the left.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Derivative at $x_0$",
          "workingLatex": "f'(-3) = 27 - 3 = 24",
          "explanation": "The tangent slope is positive and steep.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Tangent intercept",
          "workingLatex": "x_1 = -3 + \\dfrac{17}{24} \\approx -2.29",
          "explanation": "The first step moves rightward but may not head toward the root near $2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Local basin",
          "workingLatex": "\\text{Each root has its own attraction zone}",
          "explanation": "Newton converges to whichever root its iterates are drawn toward.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Wrong basin",
          "workingLatex": "x_0 = -3 \\text{ likely converges to the negative root}",
          "explanation": "Starting far left typically finds the root near $x \\approx -1.88$, not $x \\approx 2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Practical fix",
          "workingLatex": "\\text{Use sign change on } [1,3] \\text{ and } x_0 = 2",
          "explanation": "Bracket the desired root and start nearby.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Conclusion",
          "workingLatex": "\\text{Poor } x_0 \\Rightarrow \\text{wrong root or slow progress}",
          "explanation": "Newton is local; a distant $x_0$ may converge elsewhere.",
          "diagram": null
        }
      ],
      "finalAnswer": "Starting at $x_0 = -3$ lies in the basin of attraction of a different root; Newton will not find the root near $x = 2$."
    }
  },
  {
    "id": "al.y2.pure.newton-raphson.q041",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "Newton-Raphson",
      "three steps",
      "cubic"
    ],
    "questionText": "Apply Newton–Raphson to $f(x) = x^3 - 3x - 1$ with $x_0 = 2$. Find $x_1$, $x_2$, and $x_3$ correct to $3$ decimal places.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Derivative",
          "workingLatex": "f'(x) = 3x^2 - 3",
          "explanation": "Differentiate before iterating.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "$x_0$ to $x_1$",
          "workingLatex": "x_1 = 1.889",
          "explanation": "First Newton step from $x_0 = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "$x_1$ to $x_2$",
          "workingLatex": "x_2 = 1.879",
          "explanation": "Second iteration.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "$x_2$ to $x_3$",
          "workingLatex": "x_3 = 1.879",
          "explanation": "Third iteration.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Monitor convergence",
          "workingLatex": "|x_3 - x_2| = 0.00007",
          "explanation": "Successive differences shrink as the method converges.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare all iterates",
          "workingLatex": "x_0 = 2,\\; x_1 = 1.889,\\; x_2 = 1.879,\\; x_3 = 1.879",
          "explanation": "List the sequence of approximations.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Accuracy",
          "workingLatex": "x_3 = 1.879 \\text{ (3 d.p.)}",
          "explanation": "State the third iterate to the required accuracy.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Comment",
          "workingLatex": "\\text{Typically } |x_{n+1} - \\alpha| \\ll |x_n - \\alpha|",
          "explanation": "Near a simple root, errors decrease very rapidly.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Final answer",
          "workingLatex": "x_1 = 1.889,\\; x_2 = 1.879,\\; x_3 = 1.879",
          "explanation": "All three iterates to the required d.p.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_1 = 1.889$, $x_2 = 1.879$, $x_3 = 1.879$."
    }
  },
  {
    "id": "al.y2.pure.newton-raphson.q042",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "Newton-Raphson",
      "three steps",
      "cubic"
    ],
    "questionText": "Apply Newton–Raphson to $f(x) = x^3 - x - 1$ with $x_0 = 1$. Find $x_1$, $x_2$, and $x_3$ correct to $3$ decimal places.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Derivative",
          "workingLatex": "f'(x) = 3x^2 - 1",
          "explanation": "Differentiate before iterating.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "$x_0$ to $x_1$",
          "workingLatex": "x_1 = 1.500",
          "explanation": "First Newton step from $x_0 = 1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "$x_1$ to $x_2$",
          "workingLatex": "x_2 = 1.348",
          "explanation": "Second iteration.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "$x_2$ to $x_3$",
          "workingLatex": "x_3 = 1.325",
          "explanation": "Third iteration.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Monitor convergence",
          "workingLatex": "|x_3 - x_2| = 0.02263",
          "explanation": "Successive differences shrink as the method converges.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare all iterates",
          "workingLatex": "x_0 = 1,\\; x_1 = 1.500,\\; x_2 = 1.348,\\; x_3 = 1.325",
          "explanation": "List the sequence of approximations.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Accuracy",
          "workingLatex": "x_3 = 1.325 \\text{ (3 d.p.)}",
          "explanation": "State the third iterate to the required accuracy.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Comment",
          "workingLatex": "\\text{Typically } |x_{n+1} - \\alpha| \\ll |x_n - \\alpha|",
          "explanation": "Near a simple root, errors decrease very rapidly.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Final answer",
          "workingLatex": "x_1 = 1.500,\\; x_2 = 1.348,\\; x_3 = 1.325",
          "explanation": "All three iterates to the required d.p.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_1 = 1.500$, $x_2 = 1.348$, $x_3 = 1.325$."
    }
  },
  {
    "id": "al.y2.pure.newton-raphson.q043",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "Newton-Raphson",
      "three steps",
      "cubic"
    ],
    "questionText": "Apply Newton–Raphson to $f(x) = x^3 - 5x + 1$ with $x_0 = 2$. Find $x_1$, $x_2$, and $x_3$ correct to $3$ decimal places.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Derivative",
          "workingLatex": "f'(x) = 3x^2 - 5",
          "explanation": "Differentiate before iterating.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "$x_0$ to $x_1$",
          "workingLatex": "x_1 = 2.143",
          "explanation": "First Newton step from $x_0 = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "$x_1$ to $x_2$",
          "workingLatex": "x_2 = 2.129",
          "explanation": "Second iteration.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "$x_2$ to $x_3$",
          "workingLatex": "x_3 = 2.128",
          "explanation": "Third iteration.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Monitor convergence",
          "workingLatex": "|x_3 - x_2| = 0.00015",
          "explanation": "Successive differences shrink as the method converges.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare all iterates",
          "workingLatex": "x_0 = 2,\\; x_1 = 2.143,\\; x_2 = 2.129,\\; x_3 = 2.128",
          "explanation": "List the sequence of approximations.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Accuracy",
          "workingLatex": "x_3 = 2.128 \\text{ (3 d.p.)}",
          "explanation": "State the third iterate to the required accuracy.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Comment",
          "workingLatex": "\\text{Typically } |x_{n+1} - \\alpha| \\ll |x_n - \\alpha|",
          "explanation": "Near a simple root, errors decrease very rapidly.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Final answer",
          "workingLatex": "x_1 = 2.143,\\; x_2 = 2.129,\\; x_3 = 2.128",
          "explanation": "All three iterates to the required d.p.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_1 = 2.143$, $x_2 = 2.129$, $x_3 = 2.128$."
    }
  },
  {
    "id": "al.y2.pure.newton-raphson.q044",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "Newton-Raphson",
      "three steps",
      "quadratic"
    ],
    "questionText": "Apply Newton–Raphson to $f(x) = x^2 - 3$ with $x_0 = 2$. Find $x_1$, $x_2$, and $x_3$ correct to $3$ decimal places.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Derivative",
          "workingLatex": "f'(x) = 2x",
          "explanation": "Differentiate before iterating.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "$x_0$ to $x_1$",
          "workingLatex": "x_1 = 1.750",
          "explanation": "First Newton step from $x_0 = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "$x_1$ to $x_2$",
          "workingLatex": "x_2 = 1.732",
          "explanation": "Second iteration.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "$x_2$ to $x_3$",
          "workingLatex": "x_3 = 1.732",
          "explanation": "Third iteration.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Monitor convergence",
          "workingLatex": "|x_3 - x_2| = 0.00009",
          "explanation": "Successive differences shrink as the method converges.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare all iterates",
          "workingLatex": "x_0 = 2,\\; x_1 = 1.750,\\; x_2 = 1.732,\\; x_3 = 1.732",
          "explanation": "List the sequence of approximations.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Accuracy",
          "workingLatex": "x_3 = 1.732 \\text{ (3 d.p.)}",
          "explanation": "State the third iterate to the required accuracy.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Comment",
          "workingLatex": "\\text{Typically } |x_{n+1} - \\alpha| \\ll |x_n - \\alpha|",
          "explanation": "Near a simple root, errors decrease very rapidly.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Final answer",
          "workingLatex": "x_1 = 1.750,\\; x_2 = 1.732,\\; x_3 = 1.732",
          "explanation": "All three iterates to the required d.p.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_1 = 1.750$, $x_2 = 1.732$, $x_3 = 1.732$."
    }
  },
  {
    "id": "al.y2.pure.newton-raphson.q045",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "Babylonian method",
      "square root"
    ],
    "questionText": "Use one step of the Babylonian formula with $N = 50$ and $x_0 = 7$ to estimate $\\sqrt{50}$. Give $x_1$ correct to $4$ decimal places.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Babylonian formula",
          "workingLatex": "x_{n+1} = \\dfrac{1}{2}\\left(x_n + \\dfrac{N}{x_n}\\right)",
          "explanation": "This is Newton–Raphson applied to $f(x) = x^2 - N$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Compute $N/x_0$",
          "workingLatex": "50/7 \\approx 7.1429",
          "explanation": "Divide $N$ by the current estimate.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Average",
          "workingLatex": "x_1 = \\dfrac{1}{2}(7 + 50/7) = \\dfrac{99}{14}",
          "explanation": "Take the arithmetic mean of $x_0$ and $N/x_0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Decimal value",
          "workingLatex": "x_1 \\approx 7.0714",
          "explanation": "Evaluate the fraction numerically.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare with $\\sqrt{50}$",
          "workingLatex": "\\sqrt{50} = 5\\sqrt{2} \\approx 7.0711",
          "explanation": "One Babylonian step is already very accurate.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Why it works",
          "workingLatex": "f(x) = x^2 - N, \\; f'(x) = 2x",
          "explanation": "Newton on this $f$ reproduces the Babylonian iteration.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "4 d.p. answer",
          "workingLatex": "x_1 = 7.0714",
          "explanation": "Round to four decimal places.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Remark",
          "workingLatex": "\\text{Quadratic convergence for square roots}",
          "explanation": "The Babylonian method is one of the fastest manual root-finding schemes.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_1 = 7.0714$."
    }
  },
  {
    "id": "al.y2.pure.newton-raphson.q046",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "Babylonian method",
      "square root"
    ],
    "questionText": "Starting with $x_0 = 2$, apply the Babylonian formula twice to estimate $\\sqrt{7}$. Give $x_2$ correct to $4$ decimal places.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "First step",
          "workingLatex": "x_1 = \\dfrac{1}{2}\\left(2 + \\dfrac{7}{2}\\right) = \\dfrac{11}{4} = 2.75",
          "explanation": "Average $x_0$ with $N/x_0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Second step setup",
          "workingLatex": "N/x_1 = 7/(11/4) = 28/11",
          "explanation": "Divide $N$ by the updated estimate.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Second step",
          "workingLatex": "x_2 = \\dfrac{1}{2}\\left(\\dfrac{11}{4} + \\dfrac{28}{11}\\right) = \\dfrac{163}{44}",
          "explanation": "Average again.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Decimal",
          "workingLatex": "x_2 \\approx 2.7045",
          "explanation": "Convert to decimal form.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Exact root",
          "workingLatex": "\\sqrt{7} \\approx 2.6458",
          "explanation": "Compare with the true value.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Note",
          "workingLatex": "x_2 = 2.7045 \\text{ overshoots slightly}",
          "explanation": "Even Newton-type methods need a few steps for full accuracy.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Third step would improve",
          "workingLatex": "x_3 \\approx 2.6460",
          "explanation": "Another iteration corrects the small error.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "4 d.p. answer",
          "workingLatex": "x_2 = 2.7045",
          "explanation": "State $x_2$ to four decimal places as requested.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_2 = 2.7045$."
    }
  },
  {
    "id": "al.y2.pure.newton-raphson.q047",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "Newton-Raphson",
      "comparison",
      "fixed-point"
    ],
    "questionText": "State one advantage and one disadvantage of Newton–Raphson compared with simple fixed-point iteration $x_{n+1} = g(x_n)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Advantage: speed",
          "workingLatex": "\\text{Quadratic convergence near a simple root}",
          "explanation": "Newton typically doubles correct digits per step when $f'(\\alpha) \\neq 0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Advantage detail",
          "workingLatex": "|x_{n+1} - \\alpha| \\approx C|x_n - \\alpha|^2",
          "explanation": "Errors shrink much faster than the linear factor $|g'(\\alpha)|$ of fixed-point methods.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Disadvantage: derivative needed",
          "workingLatex": "f'(x) \\text{ must be computed each step}",
          "explanation": "Fixed-point iteration only needs $g(x)$, which may be simpler.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Disadvantage: local",
          "workingLatex": "x_0 \\text{ must be chosen carefully}",
          "explanation": "Newton can diverge or find the wrong root; fixed-point methods also need $|g'(\\alpha)| < 1$ but may be more forgiving.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Disadvantage: $f' = 0$",
          "workingLatex": "f'(x_n) = 0 \\text{ stops the method}",
          "explanation": "Horizontal tangents break Newton; fixed-point has its own failure modes.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "When to prefer Newton",
          "workingLatex": "\\text{Smooth } f,\\; f'(\\alpha) \\neq 0,\\; good x_0",
          "explanation": "Newton excels when high accuracy is needed quickly.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "When to prefer fixed-point",
          "workingLatex": "g(x) \\text{ easy to evaluate, derivative awkward}",
          "explanation": "If $f'$ is messy but a rearrangement $x = g(x)$ is simple, fixed-point may be easier.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Summary",
          "workingLatex": "\\text{Advantage: fast; Disadvantage: needs } f' \\text{ and good } x_0",
          "explanation": "Both methods have trade-offs in exam contexts.",
          "diagram": null
        }
      ],
      "finalAnswer": "**Advantage:** quadratic (very fast) convergence near a simple root. **Disadvantage:** requires $f'(x)$ each step and a well-chosen $x_0$."
    }
  },
  {
    "id": "al.y2.pure.newton-raphson.q048",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "geometric interpretation",
      "tangent"
    ],
    "questionText": "Sketch reasoning (no graph required): for $f(x) = x^2 - 2$ and $x_0 = 1$, explain how the tangent at $(1, f(1))$ gives $x_1 = \\dfrac{3}{2}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Point on curve",
          "workingLatex": "(1, -1)",
          "explanation": "At $x_0 = 1$, $f(1) = 1 - 2 = -1$, so the point is one unit below the axis.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Gradient",
          "workingLatex": "f'(1) = 2",
          "explanation": "The tangent has slope $2$ at $x = 1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Tangent equation",
          "workingLatex": "y + 1 = 2(x - 1)",
          "explanation": "Use point-gradient form through $(1,-1)$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set $y = 0$",
          "workingLatex": "1 = 2(x - 1)",
          "explanation": "The $x$-intercept satisfies $y = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve",
          "workingLatex": "x = 1 + \\dfrac{1}{2} = \\dfrac{3}{2}",
          "explanation": "The intercept is at $x = \\dfrac{3}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "NR formula check",
          "workingLatex": "x_1 = 1 - \\dfrac{-1}{2} = \\dfrac{3}{2}",
          "explanation": "The algebraic formula gives the same result.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Toward $\\sqrt{2}$",
          "workingLatex": "\\sqrt{2} \\approx 1.414",
          "explanation": "$\\dfrac{3}{2} = 1.5$ is closer to $\\sqrt{2}$ than $x_0 = 1$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Geometric summary",
          "workingLatex": "\\text{Tangent at } (1,-1) \\text{ hits axis at } \\dfrac{3}{2}",
          "explanation": "This is the geometric meaning of one Newton step.",
          "diagram": null
        }
      ],
      "finalAnswer": "The tangent at $(1,-1)$ with slope $2$ crosses the $x$-axis at $x = \\dfrac{3}{2}$, which equals $x_1$."
    }
  },
  {
    "id": "al.y2.pure.newton-raphson.q049",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "Newton-Raphson",
      "exponential"
    ],
    "questionText": "Solve $xe^x = 2$ using Newton–Raphson on $f(x) = xe^x - 2$ with $x_0 = 1$. Find $x_1$ and $x_2$ correct to $4$ decimal places.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Product rule",
          "workingLatex": "f'(x) = e^x + xe^x = e^x(1 + x)",
          "explanation": "Differentiate $xe^x - 2$ using the product rule.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "At $x_0 = 1$",
          "workingLatex": "f(1) = e - 2 \\approx 0.718, \\; f'(1) = 2e \\approx 5.437",
          "explanation": "Evaluate at the starting point.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "$x_1$",
          "workingLatex": "x_1 = 1 - \\dfrac{e-2}{2e} \\approx 0.8680",
          "explanation": "First Newton iterate.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "At $x_1$",
          "workingLatex": "f(0.868) \\approx 0.045, \\; f'(0.868) \\approx 4.32",
          "explanation": "Re-evaluate for the second step.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "$x_2$",
          "workingLatex": "x_2 \\approx 0.8577",
          "explanation": "Second iterate.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "4 d.p.",
          "workingLatex": "x_1 = 0.8680, \\; x_2 = 0.8577",
          "explanation": "Round to four decimal places.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check",
          "workingLatex": "0.858 \\times e^{0.858} \\approx 2",
          "explanation": "Substitute back into the original equation.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Convergence",
          "workingLatex": "|x_2 - x_1| \\approx 0.010",
          "explanation": "The iterates are settling toward the solution.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "x_1 = 0.8680, \\; x_2 = 0.8577",
          "explanation": "Both values to $4$ d.p.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_1 = 0.8680$, $x_2 = 0.8577$."
    }
  },
  {
    "id": "al.y2.pure.newton-raphson.q050",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "tags": [
      "Newton-Raphson",
      "cubic",
      "multi-part"
    ],
    "questionText": "$f(x) = x^3 - 4x + 1$.\n\n(a) Show there is a root in $[0, 1]$.\n\n(b) Explain why $f'(x) = 0$ for some $x$ in $(0,1)$ does not prevent Newton–Raphson from working with $x_0 = 0.5$.\n\n(c) Find $x_1$ with $x_0 = 0.5$, correct to $3$ d.p.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Part (a): $f(0)$",
          "workingLatex": "f(0) = 1 > 0",
          "explanation": "The constant term is positive.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "$f(1)$",
          "workingLatex": "f(1) = 1 - 4 + 1 = -2 < 0",
          "explanation": "Sign change across $[0,1]$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Conclude (a)",
          "workingLatex": "\\text{Root in } (0,1)",
          "explanation": "By continuity and change of sign.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Part (b): $f'(x) = 3x^2 - 4$",
          "workingLatex": "f'(x) = 0 \\Rightarrow x = \\dfrac{2}{\\sqrt{3}}",
          "explanation": "Turning points of $f$ exist, but we need $f'(x_0) \\neq 0$ at the iterate used.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "At $x_0 = 0.5$",
          "workingLatex": "f'(0.5) = 0.75 - 4 = -3.25 \\neq 0",
          "explanation": "The starting value is not a stationary point.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Clarify",
          "workingLatex": "f'(\\xi) = 0 \\text{ somewhere} \\not\\Rightarrow f'(x_0) = 0",
          "explanation": "Having a zero derivative somewhere on $(0,1)$ is different from $f'(x_0) = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Part (c): $f(0.5)$",
          "workingLatex": "f(0.5) = 0.125 - 2 + 1 = -0.875",
          "explanation": "Evaluate at the starting point.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compute $x_1$",
          "workingLatex": "x_1 = 0.5 - \\dfrac{-0.875}{-3.25} \\approx 0.231",
          "explanation": "One Newton step.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\text{(a) Root in } (0,1); \\text{ (b) } f'(0.5) \\neq 0; \\text{ (c) } x_1 = 0.231",
          "explanation": "Complete solution.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $f(0) > 0$, $f(1) < 0$, root in $(0,1)$. (b) $f'(0.5) = -3.25 \\neq 0$, so NR proceeds. (c) $x_1 = 0.231$."
    }
  },
  {
    "id": "al.y2.pure.newton-raphson.q051",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "written",
    "tags": [
      "failure",
      "zero derivative",
      "stationary point"
    ],
    "questionText": "$f(x) = x^3 - 3x^2 + 3$.\n\n(a) Show that $f$ has a stationary point at $x = 2$.\n\n(b) Explain why Newton–Raphson with $x_0 = 2$ cannot proceed.\n\n(c) Suggest a valid starting value near a root of $f(x) = 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Part (a): differentiate",
          "workingLatex": "f'(x) = 3x^2 - 6x",
          "explanation": "Find the derivative to locate stationary points.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Solve $f'(x) = 0$",
          "workingLatex": "3x(x - 2) = 0 \\Rightarrow x = 0, 2",
          "explanation": "Set the derivative equal to zero.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Confirm $x = 2$",
          "workingLatex": "f'(2) = 12 - 12 = 0",
          "explanation": "Verify the stationary point at $x = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Part (b): value at $x_0 = 2$",
          "workingLatex": "f(2) = 8 - 12 + 3 = -1 \\neq 0",
          "explanation": "The stationary point is not a root.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Horizontal tangent",
          "workingLatex": "f'(2) = 0 \\Rightarrow \\text{tangent horizontal}",
          "explanation": "The tangent at $x = 2$ is parallel to the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Division by zero",
          "workingLatex": "x_1 = 2 - \\dfrac{f(2)}{f'(2)} \\text{ undefined}",
          "explanation": "Newton's formula fails because $f'(2) = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Part (c): locate a root",
          "workingLatex": "f(0) = 3 > 0, \\; f(1) = 1 > 0, \\; f(3) = 27 - 27 + 3 = 3 > 0",
          "explanation": "Test values to find where $f$ changes sign.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Try negative",
          "workingLatex": "f(-1) = -1 - 3 + 3 = -1 < 0",
          "explanation": "A sign change occurs between $x = -1$ and $x = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Suggest $x_0$",
          "workingLatex": "x_0 = -0.5 \\text{ (or any value with } f'(x_0) \\neq 0 \\text{ near the root)}",
          "explanation": "Choose a starting point near the root in $(-1,0)$ where the tangent is not horizontal.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check $f'(-0.5)$",
          "workingLatex": "f'(-0.5) = 0.75 + 3 = 3.75 \\neq 0",
          "explanation": "Verify the derivative is non-zero at the suggested start.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Summary",
          "workingLatex": "\\text{(a) Stationary at } x=2; \\text{ (b) } f'(2)=0; \\text{ (c) e.g. } x_0=-0.5",
          "explanation": "Complete answer to all parts.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $f'(2) = 0$. (b) $f'(2) = 0$ makes the NR formula undefined. (c) Use e.g.\\ $x_0 = -0.5$ near the root in $(-1,0)$."
    }
  },
  {
    "id": "al.y2.pure.newton-raphson.q052",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "written",
    "tags": [
      "failure",
      "divergence"
    ],
    "questionText": "For $f(x) = \\arctan x$ and $x_0 = 1.5$, explain why Newton–Raphson iterates can diverge.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Setup",
          "workingLatex": "f'(x) = \\dfrac{1}{1 + x^2}",
          "explanation": "The derivative of $\\arctan x$ is always positive and decreasing.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Newton formula",
          "workingLatex": "x_{n+1} = x_n - (1 + x_n^2)\\arctan(x_n)",
          "explanation": "Substitute $f$ and $f'$ into the iteration.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "At $x_0 = 1.5$",
          "workingLatex": "f(1.5) \\approx 0.983, \\; f'(1.5) = 1/3.25 \\approx 0.308",
          "explanation": "Evaluate at the starting point.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Large correction",
          "workingLatex": "x_1 = 1.5 - 0.983/0.308 \\approx -1.69",
          "explanation": "The first step overshoots far to the left of the root at $x = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Subsequent behaviour",
          "workingLatex": "x_1 < 0 \\Rightarrow \\text{ further large jumps}",
          "explanation": "Negative starting values for the next step can produce even larger corrections.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Magnitude grows",
          "workingLatex": "|x_n| \\to \\infty",
          "explanation": "Iterates can increase without bound — classic divergence.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Inflection and curvature",
          "workingLatex": "\\arctan x \\text{ has decreasing gradient but NR still overshoots}",
          "explanation": "Even smooth functions can diverge if $x_0$ is outside the basin of attraction.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Only root",
          "workingLatex": "f(x) = 0 \\Leftrightarrow x = 0",
          "explanation": "The sole root is at the origin, but iterates from $x_0 = 1.5$ move away.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Remedy",
          "workingLatex": "x_0 \\in (-1, 1) \\text{ typically converges}",
          "explanation": "Choose $x_0$ closer to $0$ within the convergence region.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Lesson",
          "workingLatex": "\\text{NR is not globally convergent}",
          "explanation": "Always check that iterates are approaching, not escaping, the expected root.",
          "diagram": null
        }
      ],
      "finalAnswer": "From $x_0 = 1.5$, Newton overshoots to large negative values and iterates diverge ($|x_n| \\to \\infty$) instead of converging to the root $x = 0$."
    }
  },
  {
    "id": "al.y2.pure.newton-raphson.q053",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "written",
    "tags": [
      "failure",
      "oscillation",
      "cubic"
    ],
    "questionText": "Show that Newton–Raphson applied to $f(x) = x^3 - 5x + 1$ with $x_0 = 0$ produces $x_1 = 0.2$ and $x_2 = 0.1996\\ldots$, but explain why starting at $x_0 = \\sqrt{5/3}$ would fail.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Derivative",
          "workingLatex": "f'(x) = 3x^2 - 5",
          "explanation": "Needed for every Newton step.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "At $x_0 = 0$",
          "workingLatex": "f(0) = 1, \\; f'(0) = -5",
          "explanation": "The origin is not a root but the derivative is non-zero.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "$x_1$",
          "workingLatex": "x_1 = 0 - \\dfrac{1}{-5} = 0.2",
          "explanation": "First iterate is $0.2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "$x_2$",
          "workingLatex": "x_2 = 0.2 - \\dfrac{f(0.2)}{f'(0.2)} \\approx 0.1996",
          "explanation": "Second iterate barely changes — near convergence to a nearby root.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Stationary point",
          "workingLatex": "f'(x) = 0 \\Rightarrow x = \\pm\\sqrt{5/3}",
          "explanation": "Solve $3x^2 - 5 = 0$ for turning points.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "At $x_0 = \\sqrt{5/3}$",
          "workingLatex": "f'(x_0) = 0",
          "explanation": "Starting at a turning point gives a horizontal tangent.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Failure",
          "workingLatex": "x_1 \\text{ undefined}",
          "explanation": "Division by $f'(x_0) = 0$ stops the method immediately.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Distinction",
          "workingLatex": "x_0 = 0 \\text{ works; } x_0 = \\sqrt{5/3} \\text{ fails}",
          "explanation": "A zero derivative at the start — not merely somewhere on the domain — causes failure.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "General point",
          "workingLatex": "f'(\\xi) = 0 \\not\\Leftrightarrow \\text{ NR fails}",
          "explanation": "Only $f'(x_n) = 0$ at the current iterate blocks the next step.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Practical check",
          "workingLatex": "f'(x_0) \\neq 0 \\text{ before iterating}",
          "explanation": "Always verify the starting value is not a stationary point.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_1 = 0.2$, $x_2 \\approx 0.200$; but $x_0 = \\sqrt{5/3}$ gives $f'(x_0) = 0$, so Newton cannot proceed."
    }
  },
  {
    "id": "al.y2.pure.newton-raphson.q054",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "tags": [
      "failure",
      "multiple roots"
    ],
    "questionText": "$f(x) = x^3 - 6x^2 + 11x - 6 = (x-1)(x-2)(x-3)$.\n\n(a) State the three roots.\n\n(b) With $x_0 = 0$, find $x_1$ and state which root the iteration is heading toward.\n\n(c) With $x_0 = 4$, find $x_1$ and state which root is approached.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Part (a): factorise",
          "workingLatex": "f(x) = (x-1)(x-2)(x-3)",
          "explanation": "The cubic splits into linear factors.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Roots",
          "workingLatex": "\\alpha_1 = 1,\\; \\alpha_2 = 2,\\; \\alpha_3 = 3",
          "explanation": "Set each factor to zero.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Derivative",
          "workingLatex": "f'(x) = 3x^2 - 12x + 11",
          "explanation": "Differentiate for Newton's formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Part (b): at $x_0 = 0$",
          "workingLatex": "f(0) = -6, \\; f'(0) = 11",
          "explanation": "Evaluate below the smallest root.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "$x_1$ from $0$",
          "workingLatex": "x_1 = 0 + \\dfrac{6}{11} \\approx 0.545",
          "explanation": "First iterate is between $0$ and $1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Basin of root $1$",
          "workingLatex": "x_1 \\approx 0.545 \\Rightarrow \\text{ converges to } \\alpha_1 = 1",
          "explanation": "Starting left of $1$ typically finds the root at $x = 1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Part (c): at $x_0 = 4$",
          "workingLatex": "f(4) = 64 - 96 + 44 - 6 = 6, \\; f'(4) = 48 - 48 + 11 = 11",
          "explanation": "Evaluate to the right of the largest root.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "$x_1$ from $4$",
          "workingLatex": "x_1 = 4 - \\dfrac{6}{11} \\approx 3.455",
          "explanation": "First step moves leftward.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Basin of root $3$",
          "workingLatex": "x_1 \\approx 3.455 \\Rightarrow \\text{ converges to } \\alpha_3 = 3",
          "explanation": "Starting right of $3$ leads to the root at $x = 3$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Voronoi intuition",
          "workingLatex": "\\text{Each root has a basin of attraction}",
          "explanation": "Newton converges to whichever root its iterates fall toward.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Exam tip",
          "workingLatex": "\\text{Bracket the desired root before choosing } x_0",
          "explanation": "Use change of sign on an interval containing only the target root.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Summary",
          "workingLatex": "\\text{(a) } 1,2,3; \\text{ (b) } x_1 \\approx 0.545 \\to 1; \\text{ (c) } x_1 \\approx 3.455 \\to 3",
          "explanation": "Complete solution.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) Roots $1$, $2$, $3$. (b) $x_1 \\approx 0.545$, heading to root $1$. (c) $x_1 \\approx 3.455$, heading to root $3$."
    }
  },
  {
    "id": "al.y2.pure.newton-raphson.q055",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "written",
    "tags": [
      "convergence",
      "repeated root"
    ],
    "questionText": "Explain why Newton–Raphson converges only linearly (not quadratically) if $f'(\\alpha) = 0$ at a root $\\alpha$ (a repeated root).",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Repeated root",
          "workingLatex": "f(x) = (x - \\alpha)^k g(x), \\; k \\geq 2",
          "explanation": "At a repeated root the curve touches the axis without crossing cleanly.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Derivative at $\\alpha$",
          "workingLatex": "f'(\\alpha) = 0",
          "explanation": "A repeated root forces $f'(\\alpha) = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Taylor expansion near $\\alpha$",
          "workingLatex": "f(x) \\approx \\dfrac{f''(\\alpha)}{2}(x - \\alpha)^2",
          "explanation": "Near the root, $f$ behaves like a quadratic in $(x - \\alpha)$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Newton error relation",
          "workingLatex": "x_{n+1} - \\alpha \\approx C(x_n - \\alpha)^2 \\text{ only if } f'(\\alpha) \\neq 0",
          "explanation": "Quadratic convergence requires a simple root.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "When $f'(\\alpha) = 0$",
          "workingLatex": "x_{n+1} - \\alpha \\approx k_n (x_n - \\alpha) \\text{ with } k_n \\not\\to 0 \\text{ as fast}",
          "explanation": "The error multiplier does not square each step — convergence is linear at best.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Geometric picture",
          "workingLatex": "\\text{Tangent parallel to axis near } \\alpha",
          "explanation": "Near a repeated root tangents are nearly horizontal, giving tiny corrections.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Slow approach",
          "workingLatex": "\\text{Many steps needed for high accuracy}",
          "explanation": "Exam questions often warn about repeated roots for this reason.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Modified Newton",
          "workingLatex": "x_{n+1} = x_n - \\dfrac{f(x_n)f'(x_n)}{[f'(x_n)]^2 - f(x_n)f''(x_n)}",
          "explanation": "Advanced variants restore quadratic speed, but A-Level uses standard NR.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Simple-root test",
          "workingLatex": "f'(\\alpha) \\neq 0 \\Leftrightarrow \\text{quadratic convergence}",
          "explanation": "Always check whether the target root is simple.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Conclusion",
          "workingLatex": "f'(\\alpha) = 0 \\Rightarrow \\text{at most linear convergence}",
          "explanation": "Repeated roots slow Newton–Raphson dramatically.",
          "diagram": null
        }
      ],
      "finalAnswer": "If $f'(\\alpha) = 0$ (repeated root), tangents are nearly flat at $\\alpha$ and errors shrink linearly, not quadratically."
    }
  },
  {
    "id": "al.y2.pure.newton-raphson.q056",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "numeric",
    "tags": [
      "Newton-Raphson",
      "four steps",
      "cubic"
    ],
    "questionText": "Apply Newton–Raphson to $f(x) = x^3 - 3x - 1$ with $x_0 = 2$. Find $x_1$ through $x_4$ correct to $4$ decimal places.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up",
          "workingLatex": "f(x) = x^3 - 3x - 1, \\quad f'(x) = 3x^2 - 3",
          "explanation": "State the function and its derivative.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Iterate from $x_0$",
          "workingLatex": "x_0 = 2",
          "explanation": "Record the starting value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute $x_1$",
          "workingLatex": "x_1 = 1.8889",
          "explanation": "Newton step 1 from $x_{0}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute $x_2$",
          "workingLatex": "x_2 = 1.8795",
          "explanation": "Newton step 2 from $x_{1}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute $x_3$",
          "workingLatex": "x_3 = 1.8794",
          "explanation": "Newton step 3 from $x_{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute $x_4$",
          "workingLatex": "x_4 = 1.8794",
          "explanation": "Newton step 4 from $x_{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Convergence check",
          "workingLatex": "|x_4 - x_3| = 0.000000",
          "explanation": "Successive iterates should agree to the required accuracy.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Sequence",
          "workingLatex": "x_1 = 1.8889,\\; x_2 = 1.8795,\\; x_3 = 1.8794,\\; x_4 = 1.8794",
          "explanation": "List all four iterates.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Comment",
          "workingLatex": "\\text{Quadratic convergence near a simple root}",
          "explanation": "Each step typically adds correct digits rapidly.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Final",
          "workingLatex": "x_4 = 1.8794",
          "explanation": "The fourth iterate to ${dp}$ d.p.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_1 = 1.8889$, $x_2 = 1.8795$, $x_3 = 1.8794$, $x_4 = 1.8794$."
    }
  },
  {
    "id": "al.y2.pure.newton-raphson.q057",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "numeric",
    "tags": [
      "Newton-Raphson",
      "four steps",
      "cubic"
    ],
    "questionText": "Apply Newton–Raphson to $f(x) = x^3 - 2x - 5$ with $x_0 = 2$. Find $x_1$ through $x_4$ correct to $4$ decimal places.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up",
          "workingLatex": "f(x) = x^3 - 2x - 5, \\quad f'(x) = 3x^2 - 2",
          "explanation": "State the function and its derivative.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Iterate from $x_0$",
          "workingLatex": "x_0 = 2",
          "explanation": "Record the starting value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute $x_1$",
          "workingLatex": "x_1 = 2.1000",
          "explanation": "Newton step 1 from $x_{0}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute $x_2$",
          "workingLatex": "x_2 = 2.0946",
          "explanation": "Newton step 2 from $x_{1}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute $x_3$",
          "workingLatex": "x_3 = 2.0946",
          "explanation": "Newton step 3 from $x_{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute $x_4$",
          "workingLatex": "x_4 = 2.0946",
          "explanation": "Newton step 4 from $x_{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Convergence check",
          "workingLatex": "|x_4 - x_3| = 0.000000",
          "explanation": "Successive iterates should agree to the required accuracy.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Sequence",
          "workingLatex": "x_1 = 2.1000,\\; x_2 = 2.0946,\\; x_3 = 2.0946,\\; x_4 = 2.0946",
          "explanation": "List all four iterates.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Comment",
          "workingLatex": "\\text{Quadratic convergence near a simple root}",
          "explanation": "Each step typically adds correct digits rapidly.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Final",
          "workingLatex": "x_4 = 2.0946",
          "explanation": "The fourth iterate to ${dp}$ d.p.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_1 = 2.1000$, $x_2 = 2.0946$, $x_3 = 2.0946$, $x_4 = 2.0946$."
    }
  },
  {
    "id": "al.y2.pure.newton-raphson.q058",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "numeric",
    "tags": [
      "Newton-Raphson",
      "four steps",
      "cubic"
    ],
    "questionText": "Apply Newton–Raphson to $f(x) = x^3 + x - 1$ with $x_0 = 1$. Find $x_1$ through $x_4$ correct to $4$ decimal places.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up",
          "workingLatex": "f(x) = x^3 + x - 1, \\quad f'(x) = 3x^2 + 1",
          "explanation": "State the function and its derivative.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Iterate from $x_0$",
          "workingLatex": "x_0 = 1",
          "explanation": "Record the starting value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute $x_1$",
          "workingLatex": "x_1 = 0.7500",
          "explanation": "Newton step 1 from $x_{0}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute $x_2$",
          "workingLatex": "x_2 = 0.6860",
          "explanation": "Newton step 2 from $x_{1}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute $x_3$",
          "workingLatex": "x_3 = 0.6823",
          "explanation": "Newton step 3 from $x_{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute $x_4$",
          "workingLatex": "x_4 = 0.6823",
          "explanation": "Newton step 4 from $x_{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Convergence check",
          "workingLatex": "|x_4 - x_3| = 0.000012",
          "explanation": "Successive iterates should agree to the required accuracy.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Sequence",
          "workingLatex": "x_1 = 0.7500,\\; x_2 = 0.6860,\\; x_3 = 0.6823,\\; x_4 = 0.6823",
          "explanation": "List all four iterates.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Comment",
          "workingLatex": "\\text{Quadratic convergence near a simple root}",
          "explanation": "Each step typically adds correct digits rapidly.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Final",
          "workingLatex": "x_4 = 0.6823",
          "explanation": "The fourth iterate to ${dp}$ d.p.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_1 = 0.7500$, $x_2 = 0.6860$, $x_3 = 0.6823$, $x_4 = 0.6823$."
    }
  },
  {
    "id": "al.y2.pure.newton-raphson.q059",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "numeric",
    "tags": [
      "Newton-Raphson",
      "four steps",
      "quartic"
    ],
    "questionText": "Apply Newton–Raphson to $f(x) = x^4 - 8x + 1$ with $x_0 = 2$. Find $x_1$ through $x_4$ correct to $4$ decimal places.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up",
          "workingLatex": "f(x) = x^4 - 8x + 1, \\quad f'(x) = 4x^3 - 8",
          "explanation": "State the function and its derivative.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Iterate from $x_0$",
          "workingLatex": "x_0 = 2",
          "explanation": "Record the starting value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute $x_1$",
          "workingLatex": "x_1 = 1.9583",
          "explanation": "Newton step 1 from $x_{0}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute $x_2$",
          "workingLatex": "x_2 = 1.9565",
          "explanation": "Newton step 2 from $x_{1}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute $x_3$",
          "workingLatex": "x_3 = 1.9565",
          "explanation": "Newton step 3 from $x_{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute $x_4$",
          "workingLatex": "x_4 = 1.9565",
          "explanation": "Newton step 4 from $x_{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Convergence check",
          "workingLatex": "|x_4 - x_3| = 0.000000",
          "explanation": "Successive iterates should agree to the required accuracy.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Sequence",
          "workingLatex": "x_1 = 1.9583,\\; x_2 = 1.9565,\\; x_3 = 1.9565,\\; x_4 = 1.9565",
          "explanation": "List all four iterates.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Comment",
          "workingLatex": "\\text{Quadratic convergence near a simple root}",
          "explanation": "Each step typically adds correct digits rapidly.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Final",
          "workingLatex": "x_4 = 1.9565",
          "explanation": "The fourth iterate to ${dp}$ d.p.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_1 = 1.9583$, $x_2 = 1.9565$, $x_3 = 1.9565$, $x_4 = 1.9565$."
    }
  },
  {
    "id": "al.y2.pure.newton-raphson.q060",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "numeric",
    "tags": [
      "Newton-Raphson",
      "four steps",
      "cubic"
    ],
    "questionText": "Apply Newton–Raphson to $f(x) = x^3 - 5x + 2$ with $x_0 = 2$. Find $x_1$ through $x_4$ correct to $4$ decimal places.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up",
          "workingLatex": "f(x) = x^3 - 5x + 2, \\quad f'(x) = 3x^2 - 5",
          "explanation": "State the function and its derivative.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Iterate from $x_0$",
          "workingLatex": "x_0 = 2",
          "explanation": "Record the starting value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute $x_1$",
          "workingLatex": "x_1 = 2.0000",
          "explanation": "Newton step 1 from $x_{0}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute $x_2$",
          "workingLatex": "x_2 = 2.0000",
          "explanation": "Newton step 2 from $x_{1}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute $x_3$",
          "workingLatex": "x_3 = 2.0000",
          "explanation": "Newton step 3 from $x_{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute $x_4$",
          "workingLatex": "x_4 = 2.0000",
          "explanation": "Newton step 4 from $x_{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Convergence check",
          "workingLatex": "|x_4 - x_3| = 0.000000",
          "explanation": "Successive iterates should agree to the required accuracy.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Sequence",
          "workingLatex": "x_1 = 2.0000,\\; x_2 = 2.0000,\\; x_3 = 2.0000,\\; x_4 = 2.0000",
          "explanation": "List all four iterates.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Comment",
          "workingLatex": "\\text{Quadratic convergence near a simple root}",
          "explanation": "Each step typically adds correct digits rapidly.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Final",
          "workingLatex": "x_4 = 2.0000",
          "explanation": "The fourth iterate to ${dp}$ d.p.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_1 = 2.0000$, $x_2 = 2.0000$, $x_3 = 2.0000$, $x_4 = 2.0000$."
    }
  },
  {
    "id": "al.y2.pure.newton-raphson.q061",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "written",
    "tags": [
      "change of sign",
      "Newton-Raphson",
      "multi-part",
      "cubic"
    ],
    "questionText": "$f(x) = 2x^3 - 9x^2 + 12x - 3$.\n\n(a) Show that $f(x) = 0$ has a root in $[0, 1]$.\n\n(b) Show that $f'(x) > 0$ on $[2, 3]$.\n\n(c) Use Newton–Raphson with $x_0 = 2.5$ to find $x_1$ and $x_2$, correct to $4$ d.p.\n\n(d) Explain why the result in (b) supports stable iteration on $[2, 3]$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Part (a): $f(0)$",
          "workingLatex": "f(0) = -3 < 0",
          "explanation": "Substitute the left endpoint.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "$f(1)$",
          "workingLatex": "f(1) = 2 - 9 + 12 - 3 = 2 > 0",
          "explanation": "Substitute the right endpoint.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Sign change",
          "workingLatex": "f(0) \\cdot f(1) < 0",
          "explanation": "Opposite signs on a continuous polynomial guarantee a root in $(0,1)$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Conclude (a)",
          "workingLatex": "\\text{Root in } (0,1)",
          "explanation": "By the change of sign method.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Part (b): $f'(x)$",
          "workingLatex": "f'(x) = 6x^2 - 18x + 12 = 6(x-1)(x-2)",
          "explanation": "Differentiate and factorise.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "On $[2,3]$",
          "workingLatex": "x \\geq 2 \\Rightarrow (x-1)(x-2) \\geq 0",
          "explanation": "Both factors are non-negative when $x \\geq 2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Therefore",
          "workingLatex": "f'(x) \\geq 0 \\text{ on } [2,3]",
          "explanation": "The function is increasing on this interval.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Part (c): at $x_0 = 2.5$",
          "workingLatex": "f(2.5) = 2, \\; f'(2.5) = 4.5",
          "explanation": "Evaluate at the starting value.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "$x_1$",
          "workingLatex": "x_1 = 2.5 - \\dfrac{2}{4.5} \\approx 2.0556",
          "explanation": "First Newton iterate.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "$x_2$",
          "workingLatex": "x_2 \\approx 1.2345",
          "explanation": "Second iterate moves toward the root in $(0,1)$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Part (d)",
          "workingLatex": "f' > 0 \\Rightarrow f \\text{ is increasing on } [2,3]",
          "explanation": "An increasing function cannot oscillate on this interval, aiding predictable iteration.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Summary",
          "workingLatex": "\\text{(a) Root in } (0,1); \\text{ (b) } f' \\geq 0; \\text{ (c) } x_1 = 2.0556,\\; x_2 = 1.2345",
          "explanation": "Complete multi-part solution.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $f(0) < 0$, $f(1) > 0$, root in $(0,1)$. (b) $f'(x) = 6(x-1)(x-2) \\geq 0$ on $[2,3]$. (c) $x_1 = 2.0556$, $x_2 = 1.2345$. (d) Increasing $f$ prevents oscillation on $[2,3]$."
    }
  },
  {
    "id": "al.y2.pure.newton-raphson.q062",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "numeric",
    "tags": [
      "Newton-Raphson",
      "transcendental",
      "exponential"
    ],
    "questionText": "Find the positive root of $e^x = 5x$ using Newton–Raphson on $f(x) = e^x - 5x$ with $x_0 = 2$. Give $x_1$, $x_2$, and $x_3$ correct to $4$ decimal places.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Derivative",
          "workingLatex": "f'(x) = e^x - 5",
          "explanation": "Differentiate the exponential-linear combination.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "At $x_0 = 2$",
          "workingLatex": "f(2) = e^2 - 10 \\approx -2.610, \\; f'(2) = e^2 - 5 \\approx 2.389",
          "explanation": "Evaluate at the start.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "$x_1$",
          "workingLatex": "x_1 \\approx 3.093",
          "explanation": "First Newton step overshoots slightly.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "At $x_1$",
          "workingLatex": "f(3.093) \\approx 0.456, \\; f'(3.093) \\approx 17.1",
          "explanation": "Re-evaluate.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "$x_2$",
          "workingLatex": "x_2 \\approx 3.066",
          "explanation": "Second iterate corrects the overshoot.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "At $x_2$",
          "workingLatex": "f(3.066) \\approx 0.006",
          "explanation": "Function value is now very small.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "$x_3$",
          "workingLatex": "x_3 \\approx 3.0656",
          "explanation": "Third iterate to high accuracy.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "4 d.p.",
          "workingLatex": "x_1 = 3.0931, \\; x_2 = 3.0664, \\; x_3 = 3.0656",
          "explanation": "Round all three.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify",
          "workingLatex": "e^{3.0656} \\approx 5 \\times 3.0656",
          "explanation": "Check in the original equation.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Note two roots",
          "workingLatex": "e^x = 5x \\text{ has two positive roots}",
          "explanation": "Newton from $x_0 = 2$ finds the larger one near $x \\approx 3.07$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_1 = 3.0931$, $x_2 = 3.0664$, $x_3 = 3.0656$."
    }
  },
  {
    "id": "al.y2.pure.newton-raphson.q063",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "numeric",
    "tags": [
      "Newton-Raphson",
      "logarithm"
    ],
    "questionText": "Solve $\\ln x = 3 - x$ using Newton–Raphson on $f(x) = \\ln x + x - 3$ with $x_0 = 2$. Find $x_1$, $x_2$, and $x_3$ correct to $4$ decimal places.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Domain",
          "workingLatex": "x > 0",
          "explanation": "Logarithm requires a positive argument.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Derivative",
          "workingLatex": "f'(x) = \\dfrac{1}{x} + 1",
          "explanation": "Always positive on $(0, \\infty)$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "At $x_0 = 2$",
          "workingLatex": "f(2) = \\ln 2 - 1 \\approx -0.307, \\; f'(2) = 1.5",
          "explanation": "Starting below the root.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "$x_1$",
          "workingLatex": "x_1 \\approx 2.205",
          "explanation": "First iterate moves right.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "$x_2$",
          "workingLatex": "x_2 \\approx 2.1984",
          "explanation": "Second iterate refines.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "$x_3$",
          "workingLatex": "x_3 \\approx 2.1981",
          "explanation": "Third iterate stabilises.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "4 d.p.",
          "workingLatex": "x_1 = 2.2049, \\; x_2 = 2.1984, \\; x_3 = 2.1981",
          "explanation": "Round to four decimal places.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check",
          "workingLatex": "\\ln(2.1981) + 2.1981 \\approx 3",
          "explanation": "Verify in the original equation.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Bracket",
          "workingLatex": "f(1) = -2 < 0, \\; f(3) = \\ln 3 > 0",
          "explanation": "Root lies between $1$ and $3$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Convergence",
          "workingLatex": "|x_3 - x_2| < 0.001",
          "explanation": "Rapid agreement by the third step.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_1 = 2.2049$, $x_2 = 2.1984$, $x_3 = 2.1981$."
    }
  },
  {
    "id": "al.y2.pure.newton-raphson.q064",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "numeric",
    "tags": [
      "Newton-Raphson",
      "trigonometric"
    ],
    "questionText": "Solve $\\cos x = x$ for $x$ in $[0, \\pi/2]$ using Newton–Raphson with $x_0 = 1$. Find $x_1$ through $x_4$ correct to $5$ decimal places.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Formulation",
          "workingLatex": "f(x) = \\cos x - x, \\quad f'(x) = -\\sin x - 1",
          "explanation": "Standard transcendental equation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "$x_1$",
          "workingLatex": "x_1 \\approx 0.7504",
          "explanation": "First Newton step from $x_0 = 1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "$x_2$",
          "workingLatex": "x_2 \\approx 0.7391",
          "explanation": "Approaching the Dottie number.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "$x_3$",
          "workingLatex": "x_3 \\approx 0.7390851",
          "explanation": "High accuracy by the third step.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "$x_4$",
          "workingLatex": "x_4 \\approx 0.7390851",
          "explanation": "Fourth iterate agrees to $5$ d.p.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "5 d.p. answers",
          "workingLatex": "x_1 = 0.75036, \\; x_2 = 0.73911, \\; x_3 = 0.73909, \\; x_4 = 0.73909",
          "explanation": "List all four to five decimal places.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify",
          "workingLatex": "\\cos(0.73909) \\approx 0.73909",
          "explanation": "Check the fixed point.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Uniqueness on interval",
          "workingLatex": "\\text{Only one solution in } [0, \\pi/2]",
          "explanation": "$\\cos x$ decreases from $1$ to $0$ while $x$ increases.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Cobweb convergence",
          "workingLatex": "f'(\\alpha) < 0",
          "explanation": "Alternating approach to the fixed point.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Final",
          "workingLatex": "x_4 = 0.73909",
          "explanation": "Answer to $5$ d.p.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_1 = 0.75036$, $x_2 = 0.73911$, $x_3 = 0.73909$, $x_4 = 0.73909$."
    }
  },
  {
    "id": "al.y2.pure.newton-raphson.q065",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "written",
    "tags": [
      "Newton-Raphson",
      "multi-part",
      "quadratic"
    ],
    "questionText": "$f(x) = x^2 - 5x + 3$.\n\n(a) Find the roots exactly using the quadratic formula.\n\n(b) Show that Newton–Raphson with $x_0 = 5$ converges to the larger root.\n\n(c) Find $x_1$ and $x_2$ exactly as fractions.\n\n(d) Explain why convergence is rapid.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Part (a): quadratic formula",
          "workingLatex": "x = \\dfrac{5 \\pm \\sqrt{25 - 12}}{2} = \\dfrac{5 \\pm \\sqrt{13}}{2}",
          "explanation": "Apply the standard formula.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Larger root",
          "workingLatex": "\\alpha = \\dfrac{5 + \\sqrt{13}}{2} \\approx 4.303",
          "explanation": "The plus sign gives the larger root.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Smaller root",
          "workingLatex": "\\dfrac{5 - \\sqrt{13}}{2} \\approx 0.697",
          "explanation": "The minus sign gives the smaller root.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Part (b): $f(5) = 3$",
          "workingLatex": "f(5) = 25 - 25 + 3 = 3 > 0",
          "explanation": "Evaluate at the starting point.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "$f'(5) = 5$",
          "workingLatex": "f'(5) = 10 - 5 = 5 \\neq 0",
          "explanation": "Non-zero derivative ensures the iteration can proceed.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "$x_1$ from $5$",
          "workingLatex": "x_1 = 5 - \\dfrac{3}{5} = \\dfrac{22}{5}",
          "explanation": "First iterate moves left toward the larger root.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Direction",
          "workingLatex": "x_1 = 4.4 > \\alpha \\approx 4.303",
          "explanation": "Iterate approaches from above.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Part (c): $x_2$",
          "workingLatex": "x_2 = \\dfrac{22}{5} - \\dfrac{f(22/5)}{f'(22/5)} = \\dfrac{143}{32}",
          "explanation": "Second exact iterate (after simplification).",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Part (d): simple root",
          "workingLatex": "f'(\\alpha) = 5 + \\sqrt{13} \\neq 0",
          "explanation": "The larger root is simple, giving quadratic convergence.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Fraction values",
          "workingLatex": "x_1 = \\dfrac{22}{5}, \\; x_2 = \\dfrac{143}{32}",
          "explanation": "Exact fractional answers.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Decimal check",
          "workingLatex": "x_2 = 4.46875 \\to 4.303",
          "explanation": "Rapid approach to $\\alpha$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Summary",
          "workingLatex": "\\text{Converges to } \\dfrac{5+\\sqrt{13}}{2}",
          "explanation": "Newton from $x_0 = 5$ finds the larger root quickly.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $x = \\dfrac{5 \\pm \\sqrt{13}}{2}$. (b) Iterates decrease toward the larger root. (c) $x_1 = \\dfrac{22}{5}$, $x_2 = \\dfrac{143}{32}$. (d) Simple root $\\Rightarrow$ quadratic convergence."
    }
  },
  {
    "id": "al.y2.pure.newton-raphson.q066",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "written",
    "tags": [
      "Babylonian method",
      "Newton-Raphson",
      "multi-part"
    ],
    "questionText": "(a) Derive the Babylonian formula for $\\sqrt{N}$ from Newton–Raphson on $f(x) = x^2 - N$.\n\n(b) Starting with $x_0 = 1$, find $x_1$ and $x_2$ for $N = 2$ as exact fractions.\n\n(c) Show $x_2$ is closer to $\\sqrt{2}$ than $x_1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Part (a): $f'(x) = 2x$",
          "workingLatex": "x_{n+1} = x_n - \\dfrac{x_n^2 - N}{2x_n}",
          "explanation": "Substitute into Newton's formula.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Simplify",
          "workingLatex": "x_{n+1} = \\dfrac{x_n^2 + N}{2x_n} = \\dfrac{1}{2}\\left(x_n + \\dfrac{N}{x_n}\\right)",
          "explanation": "Recover the Babylonian iteration.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Part (b): $x_1$",
          "workingLatex": "x_1 = \\dfrac{1}{2}(1 + 2) = \\dfrac{3}{2}",
          "explanation": "First Babylonian step for $\\sqrt{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "$x_2$",
          "workingLatex": "x_2 = \\dfrac{1}{2}\\left(\\dfrac{3}{2} + \\dfrac{4}{3}\\right) = \\dfrac{17}{12}",
          "explanation": "Second step as an exact fraction.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Part (c): compare errors",
          "workingLatex": "|\\dfrac{3}{2} - \\sqrt{2}| \\approx 0.086",
          "explanation": "Error after one step.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Error at $x_2$",
          "workingLatex": "|\\dfrac{17}{12} - \\sqrt{2}| \\approx 0.002",
          "explanation": "Much smaller error after two steps.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Quadratic convergence",
          "workingLatex": "\\text{Correct digits roughly double}",
          "explanation": "Babylonian/Newton on $x^2 - N$ converges quadratically.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Decimal values",
          "workingLatex": "x_1 = 1.5, \\; x_2 \\approx 1.4167, \\; \\sqrt{2} \\approx 1.4142",
          "explanation": "Numerical comparison confirms improvement.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conclusion",
          "workingLatex": "x_2 \\text{ is significantly closer to } \\sqrt{2}",
          "explanation": "Two Babylonian steps give excellent accuracy.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) Babylonian formula derived. (b) $x_1 = \\dfrac{3}{2}$, $x_2 = \\dfrac{17}{12}$. (c) $|x_2 - \\sqrt{2}| \\ll |x_1 - \\sqrt{2}|$."
    }
  },
  {
    "id": "al.y2.pure.newton-raphson.q067",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "tags": [
      "failure",
      "oscillation",
      "divergence"
    ],
    "questionText": "Compare three failure modes of Newton–Raphson: (i) $f'(x_n) = 0$, (ii) oscillation, (iii) divergence. Give an example equation and starting value for each.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Failure (i): zero derivative",
          "workingLatex": "f'(x_n) = 0",
          "explanation": "The formula divides by $f'(x_n)$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Example (i)",
          "workingLatex": "f(x) = x^3 - 3x^2 + 3, \\; x_0 = 2",
          "explanation": "$f'(2) = 0$ at a non-root stationary point.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Effect (i)",
          "workingLatex": "x_{n+1} \\text{ undefined}",
          "explanation": "The iteration cannot continue.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Failure (ii): oscillation",
          "workingLatex": "x_n \\text{ alternates without converging}",
          "explanation": "Iterates bounce between values.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Example (ii)",
          "workingLatex": "f(x) = x^3 - 2x + 2, \\; x_0 = 0",
          "explanation": "Produces the 2-cycle $0 \\leftrightarrow 1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Effect (ii)",
          "workingLatex": "x_0 \\to x_1 \\to x_2 = x_0 \\to \\cdots",
          "explanation": "No progress toward any root.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Failure (iii): divergence",
          "workingLatex": "|x_n| \\to \\infty",
          "explanation": "Iterates escape to infinity.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Example (iii)",
          "workingLatex": "f(x) = \\arctan x, \\; x_0 = 1.5",
          "explanation": "First step jumps to large negative values.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Effect (iii)",
          "workingLatex": "|x_n| \\text{ grows without bound}",
          "explanation": "No root is approached.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Common theme",
          "workingLatex": "x_0 \\text{ poorly chosen or } f'(x_n) = 0",
          "explanation": "All three stem from unfavourable geometry or starting conditions.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Prevention",
          "workingLatex": "\\text{Sketch, bracket, check } f'(x_0)",
          "explanation": "Exam strategy: verify before iterating.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Summary table",
          "workingLatex": "(i) zero $f'$; (ii) oscillation; (iii) divergence",
          "explanation": "Three distinct failure modes with examples.",
          "diagram": null
        }
      ],
      "finalAnswer": "(i) $f(x)=x^3-3x^2+3$, $x_0=2$: $f'(2)=0$. (ii) $f(x)=x^3-2x+2$, $x_0=0$: oscillates $0\\leftrightarrow1$. (iii) $f(x)=\\arctan x$, $x_0=1.5$: diverges."
    }
  },
  {
    "id": "al.y2.pure.newton-raphson.q068",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "numeric",
    "tags": [
      "Newton-Raphson",
      "cubic"
    ],
    "questionText": "The equation $x^3 - 4x^2 + x + 2 = 0$ has a root near $x = 3$. Use Newton–Raphson with $x_0 = 3$ to find $x_1$ through $x_4$ correct to $5$ decimal places.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Derivative",
          "workingLatex": "f'(x) = 3x^2 - 8x + 1",
          "explanation": "Differentiate the cubic.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Verify root neighbourhood",
          "workingLatex": "f(3) = 27 - 36 + 3 + 2 = -4",
          "explanation": "Function is negative at $x_0 = 3$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "$f'(3) = 27 - 24 + 1 = 4$",
          "workingLatex": "f'(3) = 4 \\neq 0",
          "explanation": "Safe to iterate.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "$x_1$",
          "workingLatex": "x_1 = 3 + 1 = 4",
          "explanation": "First step lands at $x = 4$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "$x_2$",
          "workingLatex": "x_2 \\approx 3.6875",
          "explanation": "Moving back toward the root.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "$x_3$",
          "workingLatex": "x_3 \\approx 3.4277",
          "explanation": "Continuing to converge.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "$x_4$",
          "workingLatex": "x_4 \\approx 3.41421",
          "explanation": "Near the root (close to $3 + \\sqrt{2}$).",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "5 d.p.",
          "workingLatex": "x_1 = 4.00000, \\; x_2 = 3.68750, \\; x_3 = 3.42773, \\; x_4 = 3.41421",
          "explanation": "All four iterates to five decimal places.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check $f(x_4)$",
          "workingLatex": "f(3.41421) \\approx 0",
          "explanation": "Function value near zero confirms accuracy.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Note initial overshoot",
          "workingLatex": "x_1 = 4 > \\text{root}",
          "explanation": "Newton can overshoot before converging.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x_1 = 4.00000$, $x_2 = 3.68750$, $x_3 = 3.42773$, $x_4 = 3.41421$."
    }
  },
  {
    "id": "al.y2.pure.newton-raphson.q069",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "written",
    "tags": [
      "Newton-Raphson",
      "multi-part",
      "transcendental"
    ],
    "questionText": "$f(x) = x\\ln x - 1$ for $x > 0$.\n\n(a) Show that $f(x) = 0$ has a root in $[1, 2]$.\n\n(b) Find $f'(x)$.\n\n(c) Use Newton–Raphson with $x_0 = 1.5$ to find $x_1$ and $x_2$ correct to $4$ d.p.\n\n(d) Explain why $f''(x) > 0$ for $x > 0$ implies the curve is concave up.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Part (a): $f(1)$",
          "workingLatex": "f(1) = 0 - 1 = -1 < 0",
          "explanation": "At $x = 1$, $\\ln 1 = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "$f(2)$",
          "workingLatex": "f(2) = 2\\ln 2 - 1 \\approx 0.386 > 0",
          "explanation": "Positive at $x = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Conclude (a)",
          "workingLatex": "\\text{Root in } (1,2)",
          "explanation": "Sign change with continuity.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Part (b): product rule",
          "workingLatex": "f'(x) = \\ln x + 1",
          "explanation": "Differentiate $x \\ln x - 1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Part (c): at $x_0 = 1.5$",
          "workingLatex": "f(1.5) = 1.5\\ln(1.5) - 1 \\approx -0.392, \\; f'(1.5) \\approx 1.405",
          "explanation": "Evaluate for Newton steps.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "$x_1$",
          "workingLatex": "x_1 \\approx 1.779",
          "explanation": "First iterate.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "$x_2$",
          "workingLatex": "x_2 \\approx 1.7632",
          "explanation": "Second iterate.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "4 d.p.",
          "workingLatex": "x_1 = 1.7789, \\; x_2 = 1.7632",
          "explanation": "Round to four decimal places.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Part (d): $f''(x)$",
          "workingLatex": "f''(x) = \\dfrac{1}{x} > 0 \\text{ for } x > 0",
          "explanation": "Second derivative positive means gradient increases as $x$ grows.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Concave up",
          "workingLatex": "f'' > 0 \\Rightarrow \\text{curve bends upward}",
          "explanation": "The graph lies above its tangents locally.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Implication for NR",
          "workingLatex": "\\text{Tangents lie below a concave-up curve}",
          "explanation": "This can help predict the direction of Newton corrections.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Summary",
          "workingLatex": "\\text{Root in } (1,2); \\; x_1 = 1.7789,\\; x_2 = 1.7632",
          "explanation": "Complete solution.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $f(1) < 0$, $f(2) > 0$, root in $(1,2)$. (b) $f'(x) = \\ln x + 1$. (c) $x_1 = 1.7789$, $x_2 = 1.7632$. (d) $f''(x) = 1/x > 0$ so the curve is concave up."
    }
  },
  {
    "id": "al.y2.pure.newton-raphson.q070",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Newton–Raphson",
    "subtopicId": "al.y2.pure.newton-raphson",
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "tags": [
      "Newton-Raphson",
      "summary",
      "multi-part"
    ],
    "questionText": "A student must solve $f(x) = x^3 - 3x - 1 = 0$ numerically.\n\n(a) Show there is a root in $[1, 2]$.\n\n(b) Explain why Newton–Raphson is suitable with $x_0 = 2$.\n\n(c) Find $x_1$, $x_2$, and $x_3$ correct to $4$ d.p.\n\n(d) State one limitation of Newton–Raphson the student should remember.\n\n(e) Give the approximate root to $4$ d.p.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Part (a): $f(1)$",
          "workingLatex": "f(1) = 1 - 3 - 1 = -3 < 0",
          "explanation": "Negative at the left endpoint.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "$f(2)$",
          "workingLatex": "f(2) = 8 - 6 - 1 = 1 > 0",
          "explanation": "Positive at the right endpoint.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Conclude (a)",
          "workingLatex": "\\text{Root in } (1, 2)",
          "explanation": "Continuous $f$ with a sign change traps a root in the open interval.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Part (b): $f'(x) = 3x^2 - 3$",
          "workingLatex": "f'(2) = 9 \\neq 0",
          "explanation": "The derivative is non-zero at the starting value.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simple root",
          "workingLatex": "f'(\\alpha) \\neq 0 \\text{ at the root in } (1,2)",
          "explanation": "Expects rapid quadratic convergence near a simple root.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Part (c): $f(2) = 1$",
          "workingLatex": "f(2) = 1, \\; f'(2) = 9",
          "explanation": "Evaluate at $x_0 = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "$x_1$",
          "workingLatex": "x_1 = 2 - \\dfrac{1}{9} \\approx 1.8889",
          "explanation": "First Newton step.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "$x_2$",
          "workingLatex": "x_2 \\approx 1.8795",
          "explanation": "Second iterate.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "$x_3$",
          "workingLatex": "x_3 \\approx 1.8794",
          "explanation": "Third iterate stabilises.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "4 d.p.",
          "workingLatex": "x_1 = 1.8889, \\; x_2 = 1.8795, \\; x_3 = 1.8794",
          "explanation": "Three iterates to four decimal places.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Part (d): limitation",
          "workingLatex": "f'(x_n) = 0, \\text{ poor } x_0, \\text{ or divergence}",
          "explanation": "Any valid limitation: needs a good start and can fail at stationary points.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Part (e): root",
          "workingLatex": "\\alpha \\approx 1.8794",
          "explanation": "The root to $4$ d.p.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Verify",
          "workingLatex": "f(1.8794) \\approx 0",
          "explanation": "Substitute back to confirm.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Exam checklist",
          "workingLatex": "\\text{Bracket} \\to \\text{check } f'(x_0) \\to \\text{iterate} \\to \\text{verify}",
          "explanation": "Systematic approach for full marks.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $f(1) < 0$, $f(2) > 0$, root in $(1,2)$. (b) $f'(2) \\neq 0$, simple root, fast convergence. (c) $x_1 = 1.8889$, $x_2 = 1.8795$, $x_3 = 1.8794$. (d) Requires good $x_0$; fails if $f'(x_n)=0$. (e) Root $\\approx 1.8794$."
    }
  }
];
