import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "id": "al.y2.pure.integration-by-parts.q001",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "tags": [
      "integration by parts",
      "formula"
    ],
    "questionText": "State the integration by parts formula for an indefinite integral.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Start from the product rule",
          "workingLatex": "\\frac{d}{dx}(uv) = u\\frac{dv}{dx} + v\\frac{du}{dx}",
          "explanation": "Differentiating a product gives two terms — one involving $u$ and one involving $v$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rearrange",
          "workingLatex": "u\\frac{dv}{dx} = \\frac{d}{dx}(uv) - v\\frac{du}{dx}",
          "explanation": "Isolate the term $u\\dfrac{dv}{dx}$, which matches the integrand structure we need.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate both sides",
          "workingLatex": "\\int u\\,dv = uv - \\int v\\,du",
          "explanation": "Integrating reverses differentiation; the integral of a derivative is $uv$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Interpret $u$ and $dv$",
          "workingLatex": "u \\text{ is differentiated; } dv \\text{ is integrated}",
          "explanation": "Choose $u$ to become simpler when differentiated, and $dv$ to be easy to integrate.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Definite integral form",
          "workingLatex": "\\int_a^b u\\,dv = \\left[uv\\right]_a^b - \\int_a^b v\\,du",
          "explanation": "For definite integrals, evaluate $uv$ at the limits before integrating $v\\,du$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the formula",
          "workingLatex": "\\int u\\,dv = uv - \\int v\\,du",
          "explanation": "This is the standard integration by parts formula used at A-Level.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int u\\,dv = uv - \\int v\\,du$."
    }
  },
  {
    "id": "al.y2.pure.integration-by-parts.q002",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "tags": [
      "integration by parts",
      "LIATE"
    ],
    "questionText": "Explain the LIATE rule for choosing $u$ in integration by parts.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Purpose of LIATE",
          "workingLatex": "\\text{Choose } u \\text{ so that } du \\text{ is simpler than } u",
          "explanation": "Integration by parts works best when differentiating $u$ makes the problem easier.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the priority order",
          "workingLatex": "\\textbf{L}ogarithmic, \\textbf{I}nverse trig, \\textbf{A}lgebraic, \\textbf{T}rigonometric, \\textbf{E}xponential",
          "explanation": "LIATE lists types of function in the order they should be chosen as $u$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Logarithmic and inverse trig first",
          "workingLatex": "u = \\ln x \\text{ or } u = \\arctan x",
          "explanation": "These become simpler (or become algebraic) when differentiated.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Algebraic next",
          "workingLatex": "u = x, \\; x^2, \\; \\text{polynomials}",
          "explanation": "Differentiating a polynomial reduces its power.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Trig and exponential last",
          "workingLatex": "dv = \\sin x\\,dx \\text{ or } dv = e^x\\,dx",
          "explanation": "Trig and exponential functions do not simplify on differentiation, so they are usually integrated as $dv$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Example",
          "workingLatex": "\\int x e^x\\,dx: \\quad u = x, \\; dv = e^x\\,dx",
          "explanation": "The polynomial $x$ is algebraic and comes before exponential in LIATE.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Summary",
          "workingLatex": "\\text{Pick } u \\text{ from the earliest LIATE category present}",
          "explanation": "Following LIATE gives a reliable first choice for $u$ and $dv$.",
          "diagram": null
        }
      ],
      "finalAnswer": "LIATE: choose $u$ in order Logarithmic, Inverse trig, Algebraic, Trigonometric, Exponential — pick the type that appears earliest in the integrand."
    }
  },
  {
    "id": "al.y2.pure.integration-by-parts.q003",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "integration by parts",
      "exponential",
      "LIATE"
    ],
    "questionText": "Find $\\displaystyle\\int x e^x\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall integration by parts",
          "workingLatex": "\\int u\\,dv = uv - \\int v\\,du",
          "explanation": "Integration by parts transfers differentiation from one factor to the other.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose $u$ and $dv$ (LIATE)",
          "workingLatex": "u = x, \\quad dv = e^{1x}\\,dx",
          "explanation": "For a polynomial times an exponential, let $u$ be the polynomial so it simplifies on differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find $du$ and $v$",
          "workingLatex": "du = dx, \\quad v = \\dfrac{1}{1}e^{1x}",
          "explanation": "Integrate $dv$ using the standard exponential rule.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the formula",
          "workingLatex": "uv - \\int v\\,du = x \\cdot \\dfrac{1}{1}e^{1x} - \\int \\dfrac{1}{1}e^{1x}\\,dx",
          "explanation": "Substitute $u$, $v$, $du$, and $dv$ into $\\int u\\,dv = uv - \\int v\\,du$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the remaining integral",
          "workingLatex": "\\dfrac{x}{1}e^{1x} - \\dfrac{1}{1^2}e^{1x} + c",
          "explanation": "The second integral is a standard exponential, so the polynomial factor disappears.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Factor the answer",
          "workingLatex": "e^x(x-1)",
          "explanation": "Factor out $e^{1x}$ to write the answer in a compact form.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Add $+c$",
          "workingLatex": "e^x(x-1) + c",
          "explanation": "Include the constant of integration for an indefinite integral.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check by differentiating",
          "workingLatex": "\\frac{d}{dx}\\left(e^x(x-1)\\right)",
          "explanation": "Differentiating should recover the original integrand.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int x e^x\\,dx = e^x(x-1) + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-by-parts.q004",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "integration by parts",
      "trigonometry",
      "LIATE"
    ],
    "questionText": "Find $\\displaystyle\\int x\\sin x\\,dx$, where $x$ is in radians.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the formula",
          "workingLatex": "\\int u\\,dv = uv - \\int v\\,du",
          "explanation": "Integration by parts is the product rule reversed.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose $u$ and $dv$",
          "workingLatex": "u = x, \\quad dv = \\sin(1x)\\,dx",
          "explanation": "LIATE suggests the algebraic factor $x$ should be $u$ so $du = dx$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate and integrate",
          "workingLatex": "du = dx, \\quad v = -\\dfrac{1}{1}\\cos(1x)",
          "explanation": "Integrate $\\sin(1x)$ using the chain rule in reverse.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply integration by parts",
          "workingLatex": "x \\cdot \\left(-\\dfrac{1}{1}\\cos(1x)\\right) - \\int -\\dfrac{1}{1}\\cos(1x)\\,dx",
          "explanation": "Substitute into $uv - \\int v\\,du$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate the second term",
          "workingLatex": "-x\\cos x",
          "explanation": "The remaining integral is a standard trigonometric antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Collect terms",
          "workingLatex": "-x\\cos x + \\sin x",
          "explanation": "Combine like terms and simplify any coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the final answer",
          "workingLatex": "-x\\cos x + \\sin x + c",
          "explanation": "State the antiderivative with $+c$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify",
          "workingLatex": "\\frac{d}{dx}\\left(-x\\cos x + \\sin x\\right) = x\\sin x",
          "explanation": "Differentiation confirms the result.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int x\\sin x\\,dx = -x\\cos x + \\sin x + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-by-parts.q005",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "integration by parts",
      "trigonometry",
      "LIATE"
    ],
    "questionText": "Find $\\displaystyle\\int x\\cos x\\,dx$, where $x$ is in radians.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the formula",
          "workingLatex": "\\int u\\,dv = uv - \\int v\\,du",
          "explanation": "Integration by parts is the product rule reversed.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose $u$ and $dv$",
          "workingLatex": "u = x, \\quad dv = \\cos(1x)\\,dx",
          "explanation": "LIATE suggests the algebraic factor $x$ should be $u$ so $du = dx$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate and integrate",
          "workingLatex": "du = dx, \\quad v = \\dfrac{1}{1}\\sin(1x)",
          "explanation": "Integrate $\\cos(1x)$ using the chain rule in reverse.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply integration by parts",
          "workingLatex": "x \\cdot \\left(\\dfrac{1}{1}\\sin(1x)\\right) - \\int \\dfrac{1}{1}\\sin(1x)\\,dx",
          "explanation": "Substitute into $uv - \\int v\\,du$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate the second term",
          "workingLatex": "x\\sin x",
          "explanation": "The remaining integral is a standard trigonometric antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Collect terms",
          "workingLatex": "x\\sin x + \\cos x",
          "explanation": "Combine like terms and simplify any coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the final answer",
          "workingLatex": "x\\sin x + \\cos x + c",
          "explanation": "State the antiderivative with $+c$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify",
          "workingLatex": "\\frac{d}{dx}\\left(x\\sin x + \\cos x\\right) = x\\cos x",
          "explanation": "Differentiation confirms the result.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int x\\cos x\\,dx = x\\sin x + \\cos x + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-by-parts.q006",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "integration by parts",
      "logarithm",
      "LIATE"
    ],
    "questionText": "Find $\\displaystyle\\int \\ln x\\,dx$ for $x > 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose $u$ and $dv$",
          "workingLatex": "u = \\ln x, \\quad dv = dx",
          "explanation": "LIATE puts logarithmic functions first — $\\ln x$ becomes simpler when differentiated.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find $du$ and $v$",
          "workingLatex": "du = \\dfrac{1}{x}\\,dx, \\quad v = x",
          "explanation": "Differentiate $\\ln x$ and integrate $dx$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the formula",
          "workingLatex": "x\\ln x - \\int x \\cdot \\dfrac{1}{x}\\,dx",
          "explanation": "Substitute into $\\int u\\,dv = uv - \\int v\\,du$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the integrand",
          "workingLatex": "x\\ln x - \\int 1\\,dx",
          "explanation": "The $x$ and $\\dfrac{1}{x}$ cancel, leaving a constant integrand.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate",
          "workingLatex": "x\\ln x - x + c",
          "explanation": "The integral of $1$ is $x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "x\\ln x - x + c",
          "explanation": "This is the standard result for $\\int \\ln x\\,dx$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify",
          "workingLatex": "\\frac{d}{dx}(x\\ln x - x) = \\ln x + 1 - 1 = \\ln x",
          "explanation": "Differentiation confirms the antiderivative.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\ln x\\,dx = x\\ln x - x + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-by-parts.q007",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "integration by parts",
      "logarithm",
      "LIATE"
    ],
    "questionText": "Find $\\displaystyle\\int x\\ln x\\,dx$ for $x > 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Apply LIATE",
          "workingLatex": "u = \\ln x, \\quad dv = x\\,dx",
          "explanation": "Logarithmic beats algebraic, so $u = \\ln x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find $du$ and $v$",
          "workingLatex": "du = \\dfrac{1}{x}\\,dx, \\quad v = \\dfrac{x^2}{2}",
          "explanation": "Integrate $x$ to get $\\dfrac{x^2}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the formula",
          "workingLatex": "\\dfrac{x^2}{2}\\ln x - \\int \\dfrac{x^2}{2} \\cdot \\dfrac{1}{x}\\,dx",
          "explanation": "Substitute into $uv - \\int v\\,du$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify",
          "workingLatex": "\\dfrac{x^2}{2}\\ln x - \\dfrac{1}{2}\\int x\\,dx",
          "explanation": "Cancel one power of $x$ in the remaining integral.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate",
          "workingLatex": "\\dfrac{x^2}{2}\\ln x - \\dfrac{x^2}{4} + c",
          "explanation": "Integrate $\\dfrac{x}{2}$ to get $\\dfrac{x^2}{4}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Factor (optional)",
          "workingLatex": "\\dfrac{x^2}{4}(2\\ln x - 1) + c",
          "explanation": "The factored form can make the structure clearer.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check",
          "workingLatex": "\\frac{d}{dx}\\left(\\dfrac{x^2}{2}\\ln x - \\dfrac{x^2}{4}\\right) = x\\ln x",
          "explanation": "Differentiation recovers the integrand.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int x\\ln x\\,dx = \\dfrac{x^2}{2}\\ln x - \\dfrac{x^2}{4} + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-by-parts.q008",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "tags": [
      "integration by parts",
      "LIATE",
      "choosing u"
    ],
    "questionText": "For $\\displaystyle\\int x e^{2x}\\,dx$, state a suitable choice of $u$ and $dv$ and briefly justify it.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the factor types",
          "workingLatex": "x \\text{ is algebraic; } e^{2x} \\text{ is exponential}",
          "explanation": "The integrand is a product of two different function types.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply LIATE",
          "workingLatex": "A \\text{ (algebraic) before } E \\text{ (exponential)}",
          "explanation": "Algebraic functions should be chosen as $u$ before exponential ones.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set $u$ and $dv$",
          "workingLatex": "u = x, \\quad dv = e^{2x}\\,dx",
          "explanation": "Let the polynomial be differentiated and the exponential be integrated.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find $du$ and $v$",
          "workingLatex": "du = dx, \\quad v = \\dfrac{1}{2}e^{2x}",
          "explanation": "Differentiating $x$ simplifies it; integrating $e^{2x}$ is standard.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Predict the outcome",
          "workingLatex": "uv - \\int v\\,du \\text{ leaves } \\int e^{2x}\\,dx",
          "explanation": "After one application, the remaining integral has no polynomial factor.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclusion",
          "workingLatex": "u = x, \\; dv = e^{2x}\\,dx",
          "explanation": "This choice follows LIATE and leads to a straightforward second integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "Take $u = x$ and $dv = e^{2x}\\,dx$ — algebraic before exponential in LIATE."
    }
  },
  {
    "id": "al.y2.pure.integration-by-parts.q009",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "tags": [
      "integration by parts",
      "LIATE",
      "trigonometry"
    ],
    "questionText": "For $\\displaystyle\\int x\\sin(2x)\\,dx$, state a suitable choice of $u$ and $dv$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Classify the factors",
          "workingLatex": "x \\text{ — algebraic; } \\sin(2x) \\text{ — trigonometric}",
          "explanation": "Both factors are of types listed in LIATE.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Compare in LIATE",
          "workingLatex": "A \\text{ comes before } T",
          "explanation": "Algebraic functions are chosen as $u$ before trigonometric ones.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Assign $u$ and $dv$",
          "workingLatex": "u = x, \\quad dv = \\sin(2x)\\,dx",
          "explanation": "Differentiate the polynomial; integrate the trig function.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute $du$ and $v$",
          "workingLatex": "du = dx, \\quad v = -\\dfrac{1}{2}\\cos(2x)",
          "explanation": "The integral of $\\sin(2x)$ introduces a factor $\\dfrac{1}{2}$ and a minus sign.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Next step preview",
          "workingLatex": "uv - \\int v\\,du \\Rightarrow \\int \\cos(2x)\\,dx",
          "explanation": "The remaining integral is a standard cosine integral.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "u = x, \\; dv = \\sin(2x)\\,dx",
          "explanation": "This is the standard LIATE choice for polynomial–trig products.",
          "diagram": null
        }
      ],
      "finalAnswer": "$u = x$, $dv = \\sin(2x)\\,dx$."
    }
  },
  {
    "id": "al.y2.pure.integration-by-parts.q010",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "integration by parts",
      "exponential",
      "LIATE"
    ],
    "questionText": "Find $\\displaystyle\\int x e^{-x}\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall integration by parts",
          "workingLatex": "\\int u\\,dv = uv - \\int v\\,du",
          "explanation": "Integration by parts transfers differentiation from one factor to the other.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose $u$ and $dv$ (LIATE)",
          "workingLatex": "u = x, \\quad dv = e^{-1x}\\,dx",
          "explanation": "For a polynomial times an exponential, let $u$ be the polynomial so it simplifies on differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find $du$ and $v$",
          "workingLatex": "du = dx, \\quad v = \\dfrac{1}{-1}e^{-1x}",
          "explanation": "Integrate $dv$ using the standard exponential rule.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the formula",
          "workingLatex": "uv - \\int v\\,du = x \\cdot \\dfrac{1}{-1}e^{-1x} - \\int \\dfrac{1}{-1}e^{-1x}\\,dx",
          "explanation": "Substitute $u$, $v$, $du$, and $dv$ into $\\int u\\,dv = uv - \\int v\\,du$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the remaining integral",
          "workingLatex": "\\dfrac{x}{-1}e^{-1x} - \\dfrac{1}{-1^2}e^{-1x} + c",
          "explanation": "The second integral is a standard exponential, so the polynomial factor disappears.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Factor the answer",
          "workingLatex": "-e^{-x}(x+1)",
          "explanation": "Factor out $e^{-1x}$ to write the answer in a compact form.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Add $+c$",
          "workingLatex": "-e^{-x}(x+1) + c",
          "explanation": "Include the constant of integration for an indefinite integral.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check by differentiating",
          "workingLatex": "\\frac{d}{dx}\\left(-e^{-x}(x+1)\\right)",
          "explanation": "Differentiating should recover the original integrand.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int x e^{-x}\\,dx = -e^{-x}(x+1) + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-by-parts.q011",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "integration by parts",
      "trigonometry",
      "LIATE"
    ],
    "questionText": "Find $\\displaystyle\\int x\\cos(2x)\\,dx$, where $x$ is in radians.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the formula",
          "workingLatex": "\\int u\\,dv = uv - \\int v\\,du",
          "explanation": "Integration by parts is the product rule reversed.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose $u$ and $dv$",
          "workingLatex": "u = x, \\quad dv = \\cos(2x)\\,dx",
          "explanation": "LIATE suggests the algebraic factor $x$ should be $u$ so $du = dx$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate and integrate",
          "workingLatex": "du = dx, \\quad v = \\dfrac{1}{2}\\sin(2x)",
          "explanation": "Integrate $\\cos(2x)$ using the chain rule in reverse.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply integration by parts",
          "workingLatex": "x \\cdot \\left(\\dfrac{1}{2}\\sin(2x)\\right) - \\int \\dfrac{1}{2}\\sin(2x)\\,dx",
          "explanation": "Substitute into $uv - \\int v\\,du$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate the second term",
          "workingLatex": "\\dfrac{x}{2}\\sin(2x)",
          "explanation": "The remaining integral is a standard trigonometric antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Collect terms",
          "workingLatex": "\\dfrac{x}{2}\\sin(2x) + \\dfrac{1}{4}\\cos(2x)",
          "explanation": "Combine like terms and simplify any coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the final answer",
          "workingLatex": "\\dfrac{x}{2}\\sin(2x) + \\dfrac{1}{4}\\cos(2x) + c",
          "explanation": "State the antiderivative with $+c$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify",
          "workingLatex": "\\frac{d}{dx}\\left(\\dfrac{x}{2}\\sin(2x) + \\dfrac{1}{4}\\cos(2x)\\right) = x\\cos(2x)",
          "explanation": "Differentiation confirms the result.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int x\\cos(2x)\\,dx = \\dfrac{x}{2}\\sin(2x) + \\dfrac{1}{4}\\cos(2x) + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-by-parts.q012",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "integration by parts",
      "exponential",
      "LIATE"
    ],
    "questionText": "Find $\\displaystyle\\int 3x e^x\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall integration by parts",
          "workingLatex": "\\int u\\,dv = uv - \\int v\\,du",
          "explanation": "Integration by parts transfers differentiation from one factor to the other.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose $u$ and $dv$ (LIATE)",
          "workingLatex": "u = x, \\quad dv = e^{1x}\\,dx",
          "explanation": "For a polynomial times an exponential, let $u$ be the polynomial so it simplifies on differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find $du$ and $v$",
          "workingLatex": "du = dx, \\quad v = \\dfrac{1}{1}e^{1x}",
          "explanation": "Integrate $dv$ using the standard exponential rule.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the formula",
          "workingLatex": "uv - \\int v\\,du = x \\cdot \\dfrac{1}{1}e^{1x} - \\int \\dfrac{1}{1}e^{1x}\\,dx",
          "explanation": "Substitute $u$, $v$, $du$, and $dv$ into $\\int u\\,dv = uv - \\int v\\,du$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the remaining integral",
          "workingLatex": "\\dfrac{x}{1}e^{1x} - \\dfrac{1}{1^2}e^{1x} + c",
          "explanation": "The second integral is a standard exponential, so the polynomial factor disappears.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Factor the answer",
          "workingLatex": "3e^x(x-1)",
          "explanation": "Factor out $e^{1x}$ to write the answer in a compact form.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Add $+c$",
          "workingLatex": "3e^x(x-1) + c",
          "explanation": "Include the constant of integration for an indefinite integral.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check by differentiating",
          "workingLatex": "\\frac{d}{dx}\\left(3e^x(x-1)\\right)",
          "explanation": "Differentiating should recover the original integrand.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int 3x e^x\\,dx = 3e^x(x-1) + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-by-parts.q013",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "integration by parts",
      "trigonometry",
      "LIATE"
    ],
    "questionText": "Find $\\displaystyle\\int 3x\\sin x\\,dx$, where $x$ is in radians.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the formula",
          "workingLatex": "\\int u\\,dv = uv - \\int v\\,du",
          "explanation": "Integration by parts is the product rule reversed.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose $u$ and $dv$",
          "workingLatex": "u = x, \\quad dv = \\sin(1x)\\,dx",
          "explanation": "LIATE suggests the algebraic factor $x$ should be $u$ so $du = dx$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate and integrate",
          "workingLatex": "du = dx, \\quad v = -\\dfrac{1}{1}\\cos(1x)",
          "explanation": "Integrate $\\sin(1x)$ using the chain rule in reverse.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply integration by parts",
          "workingLatex": "x \\cdot \\left(-\\dfrac{1}{1}\\cos(1x)\\right) - \\int -\\dfrac{1}{1}\\cos(1x)\\,dx",
          "explanation": "Substitute into $uv - \\int v\\,du$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate the second term",
          "workingLatex": "-3x\\cos x",
          "explanation": "The remaining integral is a standard trigonometric antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Collect terms",
          "workingLatex": "-3x\\cos x + 3\\sin x",
          "explanation": "Combine like terms and simplify any coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the final answer",
          "workingLatex": "-3x\\cos x + 3\\sin x + c",
          "explanation": "State the antiderivative with $+c$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify",
          "workingLatex": "\\frac{d}{dx}\\left(-3x\\cos x + 3\\sin x\\right) = 3x\\sin x",
          "explanation": "Differentiation confirms the result.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int 3x\\sin x\\,dx = -3x\\cos x + 3\\sin x + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-by-parts.q014",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "tags": [
      "integration by parts",
      "verification"
    ],
    "questionText": "Given that $\\displaystyle\\int x e^x\\,dx = e^x(x-1) + c$, verify this result by differentiation.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the claimed antiderivative",
          "workingLatex": "F(x) = e^x(x-1) + c",
          "explanation": "We check whether $F'(x)$ equals the integrand $x e^x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the product structure",
          "workingLatex": "F(x) = e^x \\cdot (x-1) + c",
          "explanation": "Use the product rule on $e^x$ and $(x-1)$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate using the product rule",
          "workingLatex": "F'(x) = e^x(x-1) + e^x \\cdot 1",
          "explanation": "Differentiate $e^x$ to get $e^x$, and $(x-1)$ to get $1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify",
          "workingLatex": "F'(x) = e^x(x-1) + e^x = e^x \\cdot x",
          "explanation": "Factor $e^x$ to combine the terms.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare with the integrand",
          "workingLatex": "F'(x) = x e^x",
          "explanation": "The derivative matches the original integrand.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclusion",
          "workingLatex": "\\text{The antiderivative is correct}",
          "explanation": "Verification by differentiation confirms the integration by parts result.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{d}{dx}[e^x(x-1)] = x e^x$, so the antiderivative is correct."
    }
  },
  {
    "id": "al.y2.pure.integration-by-parts.q015",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "integration by parts",
      "trigonometry",
      "LIATE"
    ],
    "questionText": "Find $\\displaystyle\\int x\\sin(3x)\\,dx$, where $x$ is in radians.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the formula",
          "workingLatex": "\\int u\\,dv = uv - \\int v\\,du",
          "explanation": "Integration by parts is the product rule reversed.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose $u$ and $dv$",
          "workingLatex": "u = x, \\quad dv = \\sin(3x)\\,dx",
          "explanation": "LIATE suggests the algebraic factor $x$ should be $u$ so $du = dx$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate and integrate",
          "workingLatex": "du = dx, \\quad v = -\\dfrac{1}{3}\\cos(3x)",
          "explanation": "Integrate $\\sin(3x)$ using the chain rule in reverse.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply integration by parts",
          "workingLatex": "x \\cdot \\left(-\\dfrac{1}{3}\\cos(3x)\\right) - \\int -\\dfrac{1}{3}\\cos(3x)\\,dx",
          "explanation": "Substitute into $uv - \\int v\\,du$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate the second term",
          "workingLatex": "-\\dfrac{x}{3}\\cos(3x)",
          "explanation": "The remaining integral is a standard trigonometric antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Collect terms",
          "workingLatex": "-\\dfrac{x}{3}\\cos(3x) + \\dfrac{1}{9}\\sin(3x)",
          "explanation": "Combine like terms and simplify any coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the final answer",
          "workingLatex": "-\\dfrac{x}{3}\\cos(3x) + \\dfrac{1}{9}\\sin(3x) + c",
          "explanation": "State the antiderivative with $+c$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify",
          "workingLatex": "\\frac{d}{dx}\\left(-\\dfrac{x}{3}\\cos(3x) + \\dfrac{1}{9}\\sin(3x)\\right) = x\\sin(3x)",
          "explanation": "Differentiation confirms the result.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int x\\sin(3x)\\,dx = -\\dfrac{x}{3}\\cos(3x) + \\dfrac{1}{9}\\sin(3x) + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-by-parts.q016",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "integration by parts",
      "exponential",
      "LIATE"
    ],
    "questionText": "Find $\\displaystyle\\int x e^{3x}\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall integration by parts",
          "workingLatex": "\\int u\\,dv = uv - \\int v\\,du",
          "explanation": "Integration by parts transfers differentiation from one factor to the other.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose $u$ and $dv$ (LIATE)",
          "workingLatex": "u = x, \\quad dv = e^{3x}\\,dx",
          "explanation": "For a polynomial times an exponential, let $u$ be the polynomial so it simplifies on differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find $du$ and $v$",
          "workingLatex": "du = dx, \\quad v = \\dfrac{1}{3}e^{3x}",
          "explanation": "Integrate $dv$ using the standard exponential rule.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the formula",
          "workingLatex": "uv - \\int v\\,du = x \\cdot \\dfrac{1}{3}e^{3x} - \\int \\dfrac{1}{3}e^{3x}\\,dx",
          "explanation": "Substitute $u$, $v$, $du$, and $dv$ into $\\int u\\,dv = uv - \\int v\\,du$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the remaining integral",
          "workingLatex": "\\dfrac{x}{3}e^{3x} - \\dfrac{1}{3^2}e^{3x} + c",
          "explanation": "The second integral is a standard exponential, so the polynomial factor disappears.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Factor the answer",
          "workingLatex": "\\dfrac{1}{9}e^{3x}(3x-1)",
          "explanation": "Factor out $e^{3x}$ to write the answer in a compact form.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Add $+c$",
          "workingLatex": "\\dfrac{1}{9}e^{3x}(3x-1) + c",
          "explanation": "Include the constant of integration for an indefinite integral.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check by differentiating",
          "workingLatex": "\\frac{d}{dx}\\left(\\dfrac{1}{9}e^{3x}(3x-1)\\right)",
          "explanation": "Differentiating should recover the original integrand.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int x e^{3x}\\,dx = \\dfrac{1}{9}e^{3x}(3x-1) + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-by-parts.q017",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "integration by parts",
      "logarithm"
    ],
    "questionText": "Find $\\displaystyle\\int \\ln(2x)\\,dx$ for $x > 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rewrite using log laws",
          "workingLatex": "\\ln(2x) = \\ln 2 + \\ln x",
          "explanation": "Splitting the logarithm separates the constant part from the standard form.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Split the integral",
          "workingLatex": "\\int \\ln 2\\,dx + \\int \\ln x\\,dx",
          "explanation": "The integral of a sum is the sum of integrals.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate the constant",
          "workingLatex": "\\ln 2 \\cdot x",
          "explanation": "The integral of a constant is the constant times $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate $\\ln x$ by parts",
          "workingLatex": "u = \\ln x, \\; dv = dx \\Rightarrow x\\ln x - x",
          "explanation": "Use $u = \\ln x$ so differentiation removes the logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Combine",
          "workingLatex": "x\\ln(2x) - x + c",
          "explanation": "Since $x\\ln x + x\\ln 2 = x\\ln(2x)$, the answer simplifies neatly.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Alternative: direct choice",
          "workingLatex": "u = \\ln(2x), \\; dv = dx",
          "explanation": "Differentiating $\\ln(2x)$ gives $\\dfrac{1}{x}$, same as for $\\ln x$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify",
          "workingLatex": "\\frac{d}{dx}(x\\ln(2x) - x) = \\ln(2x)",
          "explanation": "Differentiation confirms the result.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\ln(2x)\\,dx = x\\ln(2x) - x + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-by-parts.q018",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "integration by parts",
      "trigonometry",
      "LIATE"
    ],
    "questionText": "Find $\\displaystyle\\int 2x\\cos x\\,dx$, where $x$ is in radians.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the formula",
          "workingLatex": "\\int u\\,dv = uv - \\int v\\,du",
          "explanation": "Integration by parts is the product rule reversed.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose $u$ and $dv$",
          "workingLatex": "u = x, \\quad dv = \\cos(1x)\\,dx",
          "explanation": "LIATE suggests the algebraic factor $x$ should be $u$ so $du = dx$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate and integrate",
          "workingLatex": "du = dx, \\quad v = \\dfrac{1}{1}\\sin(1x)",
          "explanation": "Integrate $\\cos(1x)$ using the chain rule in reverse.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply integration by parts",
          "workingLatex": "x \\cdot \\left(\\dfrac{1}{1}\\sin(1x)\\right) - \\int \\dfrac{1}{1}\\sin(1x)\\,dx",
          "explanation": "Substitute into $uv - \\int v\\,du$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate the second term",
          "workingLatex": "2x\\sin x",
          "explanation": "The remaining integral is a standard trigonometric antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Collect terms",
          "workingLatex": "2x\\sin x + 2\\cos x",
          "explanation": "Combine like terms and simplify any coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the final answer",
          "workingLatex": "2x\\sin x + 2\\cos x + c",
          "explanation": "State the antiderivative with $+c$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify",
          "workingLatex": "\\frac{d}{dx}\\left(2x\\sin x + 2\\cos x\\right) = 2x\\cos x",
          "explanation": "Differentiation confirms the result.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int 2x\\cos x\\,dx = 2x\\sin x + 2\\cos x + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-by-parts.q019",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "tags": [
      "integration by parts",
      "LIATE",
      "cyclic"
    ],
    "questionText": "For $\\displaystyle\\int e^x\\sin x\\,dx$, explain which factor should be $u$ and why the integral is called cyclic.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify factor types",
          "workingLatex": "e^x \\text{ — exponential; } \\sin x \\text{ — trigonometric}",
          "explanation": "Both are at the end of the LIATE list, so either could be $u$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Standard choice",
          "workingLatex": "u = \\sin x, \\quad dv = e^x\\,dx",
          "explanation": "Either choice works; taking $u = \\sin x$ is a common convention.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "First application",
          "workingLatex": "I = e^x\\sin x - \\int e^x\\cos x\\,dx",
          "explanation": "Integration by parts produces a related integral with $\\cos x$ instead of $\\sin x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Second application",
          "workingLatex": "\\text{Apply parts again to } \\int e^x\\cos x\\,dx",
          "explanation": "A second application brings back $\\int e^x\\sin x\\,dx$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Cyclic nature",
          "workingLatex": "I = \\ldots - I \\Rightarrow 2I = \\ldots",
          "explanation": "The original integral reappears, allowing us to solve for $I$ algebraically.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Summary",
          "workingLatex": "\\text{Cyclic: two applications of parts returns the starting integral}",
          "explanation": "Cyclic integrals require applying parts twice and then solving an equation for $I$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Choose $u = \\sin x$, $dv = e^x\\,dx$; applying parts twice returns $\\int e^x\\sin x\\,dx$, making it cyclic."
    }
  },
  {
    "id": "al.y2.pure.integration-by-parts.q020",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "integration by parts",
      "algebraic"
    ],
    "questionText": "Find $\\displaystyle\\int x(1+x)\\,dx$ by expanding first, then comment on when integration by parts would be used instead.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Expand the integrand",
          "workingLatex": "x(1+x) = x + x^2",
          "explanation": "For a simple product of polynomials, expanding is often quickest.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate term by term",
          "workingLatex": "\\dfrac{x^2}{2} + \\dfrac{x^3}{3} + c",
          "explanation": "Use the power rule on each term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "When to use parts instead",
          "workingLatex": "u = x, \\; dv = (1+x)\\,dx",
          "explanation": "Integration by parts is needed when one factor is not a polynomial, e.g. $x e^x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply parts to confirm",
          "workingLatex": "uv - \\int v\\,du = x\\left(x + \\dfrac{x^2}{2}\\right) - \\int\\left(x + \\dfrac{x^2}{2}\\right)dx",
          "explanation": "Parts also works here but is longer than expanding.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the parts result",
          "workingLatex": "\\dfrac{x^2}{2} + \\dfrac{x^3}{3} + c",
          "explanation": "Both methods give the same answer.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclusion",
          "workingLatex": "\\dfrac{x^2}{2} + \\dfrac{x^3}{3} + c",
          "explanation": "Expand when both factors are polynomials; use parts for mixed types.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int x(1+x)\\,dx = \\dfrac{x^2}{2} + \\dfrac{x^3}{3} + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-by-parts.q021",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "integration by parts",
      "inverse trigonometry"
    ],
    "questionText": "Find $\\displaystyle\\int \\arctan x\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose $u$ using LIATE",
          "workingLatex": "u = \\arctan x, \\quad dv = dx",
          "explanation": "Inverse trigonometric functions come before algebraic in LIATE.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find $du$ and $v$",
          "workingLatex": "du = \\dfrac{1}{1+x^2}\\,dx, \\quad v = x",
          "explanation": "The derivative of $\\arctan x$ is $\\dfrac{1}{1+x^2}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the formula",
          "workingLatex": "x\\arctan x - \\int \\dfrac{x}{1+x^2}\\,dx",
          "explanation": "Substitute into $uv - \\int v\\,du$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Spot the substitution for the remaining integral",
          "workingLatex": "u_2 = 1+x^2, \\quad du_2 = 2x\\,dx",
          "explanation": "The numerator $x\\,dx$ is (up to a factor) the derivative of $1+x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate",
          "workingLatex": "x\\arctan x - \\dfrac{1}{2}\\ln(1+x^2) + c",
          "explanation": "$\\int \\dfrac{x}{1+x^2}\\,dx = \\dfrac{1}{2}\\ln(1+x^2)$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "x\\arctan x - \\dfrac{1}{2}\\ln(1+x^2) + c",
          "explanation": "This is the standard result for $\\int \\arctan x\\,dx$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify structure",
          "workingLatex": "\\text{Differentiate to confirm}",
          "explanation": "The answer combines an inverse trig term and a logarithm — typical of inverse trig integrals.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\arctan x\\,dx = x\\arctan x - \\dfrac{1}{2}\\ln(1+x^2) + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-by-parts.q022",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "integration by parts",
      "repeated"
    ],
    "questionText": "Find $\\displaystyle\\int x^2 e^x\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "First application: choose $u$ and $dv$",
          "workingLatex": "u = x^2, \\quad dv = e^x\\,dx",
          "explanation": "The algebraic factor has degree $2$, so parts will be needed twice.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "First parts step",
          "workingLatex": "x^2 e^x - 2\\int x e^x\\,dx",
          "explanation": "Differentiating $x^2$ gives $2x$; the power of $x$ drops by one.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Second application on $\\int x e^x\\,dx$",
          "workingLatex": "u = x, \\; dv = e^x\\,dx \\Rightarrow e^x(x-1)",
          "explanation": "Apply parts again to the remaining integral.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute back",
          "workingLatex": "x^2 e^x - 2e^x(x-1) + c",
          "explanation": "Replace $\\int x e^x\\,dx$ with its antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Expand and collect",
          "workingLatex": "e^x(x^2 - 2x + 2) + c",
          "explanation": "Factor $e^x$ for a tidy final form.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check the degree pattern",
          "workingLatex": "\\text{Two applications for } x^2",
          "explanation": "A polynomial of degree $n$ typically needs $n$ applications of parts.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify",
          "workingLatex": "\\frac{d}{dx}[e^x(x^2-2x+2)] = x^2 e^x",
          "explanation": "Differentiation confirms the answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int x^2 e^x\\,dx = e^x(x^2 - 2x + 2) + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-by-parts.q023",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "integration by parts",
      "definite integral"
    ],
    "questionText": "Evaluate $\\displaystyle\\int_0^1 x e^x\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up parts",
          "workingLatex": "u = x, \\quad dv = e^x\\,dx",
          "explanation": "Use LIATE: algebraic $u$, exponential $dv$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find $du$ and $v$",
          "workingLatex": "du = dx, \\quad v = e^x",
          "explanation": "Standard derivatives and integrals.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply definite parts formula",
          "workingLatex": "\\left[x e^x\\right]_0^1 - \\int_0^1 e^x\\,dx",
          "explanation": "For definite integrals: $\\int_a^b u\\,dv = [uv]_a^b - \\int_a^b v\\,du$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate $[uv]_0^1$",
          "workingLatex": "1 \\cdot e^1 - 0 \\cdot e^0 = e",
          "explanation": "Substitute the limits into $uv$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate $\\int_0^1 e^x\\,dx$",
          "workingLatex": "\\left[e^x\\right]_0^1 = e - 1",
          "explanation": "Integrate $e^x$ and evaluate at the limits.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine",
          "workingLatex": "e - (e - 1) = 1",
          "explanation": "Subtract the second part from the first.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "1",
          "explanation": "The definite integral equals $1$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Note",
          "workingLatex": "\\text{No } +c \\text{ for definite integrals}",
          "explanation": "Constants cancel when evaluating between limits.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_0^1 x e^x\\,dx = 1$."
    }
  },
  {
    "id": "al.y2.pure.integration-by-parts.q024",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "integration by parts",
      "trigonometry"
    ],
    "questionText": "Find $\\displaystyle\\int x\\sin(2x)\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose $u$ and $dv$",
          "workingLatex": "u = x, \\quad dv = \\sin(2x)\\,dx",
          "explanation": "Algebraic before trigonometric in LIATE.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find $du$ and $v$",
          "workingLatex": "du = dx, \\quad v = -\\dfrac{1}{2}\\cos(2x)",
          "explanation": "Integrate $\\sin(2x)$ with the chain rule.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the formula",
          "workingLatex": "-\\dfrac{x}{2}\\cos(2x) + \\dfrac{1}{2}\\int \\cos(2x)\\,dx",
          "explanation": "The remaining integral is $\\int \\cos(2x)\\,dx$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate $\\cos(2x)$",
          "workingLatex": "-\\dfrac{x}{2}\\cos(2x) + \\dfrac{1}{4}\\sin(2x) + c",
          "explanation": "$\\int \\cos(2x)\\,dx = \\dfrac{1}{2}\\sin(2x)$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the answer",
          "workingLatex": "-\\dfrac{x}{2}\\cos(2x) + \\dfrac{1}{4}\\sin(2x) + c",
          "explanation": "Collect terms with a common structure.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify",
          "workingLatex": "\\frac{d}{dx}\\left(-\\dfrac{x}{2}\\cos(2x) + \\dfrac{1}{4}\\sin(2x)\\right) = x\\sin(2x)",
          "explanation": "Differentiation recovers the integrand.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int x\\sin(2x)\\,dx = -\\dfrac{x}{2}\\cos(2x) + \\dfrac{1}{4}\\sin(2x) + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-by-parts.q025",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "integration by parts",
      "exponential",
      "LIATE"
    ],
    "questionText": "Find $\\displaystyle\\int x^2 e^x\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall integration by parts",
          "workingLatex": "\\int u\\,dv = uv - \\int v\\,du",
          "explanation": "Integration by parts transfers differentiation from one factor to the other.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose $u$ and $dv$ (LIATE)",
          "workingLatex": "u = x, \\quad dv = e^{1x}\\,dx",
          "explanation": "For a polynomial times an exponential, let $u$ be the polynomial so it simplifies on differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find $du$ and $v$",
          "workingLatex": "du = dx, \\quad v = \\dfrac{1}{1}e^{1x}",
          "explanation": "Integrate $dv$ using the standard exponential rule.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the formula",
          "workingLatex": "uv - \\int v\\,du = x \\cdot \\dfrac{1}{1}e^{1x} - \\int \\dfrac{1}{1}e^{1x}\\,dx",
          "explanation": "Substitute $u$, $v$, $du$, and $dv$ into $\\int u\\,dv = uv - \\int v\\,du$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the remaining integral",
          "workingLatex": "\\dfrac{x}{1}e^{1x} - \\dfrac{1}{1^2}e^{1x} + c",
          "explanation": "The second integral is a standard exponential, so the polynomial factor disappears.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Factor the answer",
          "workingLatex": "e^x(x^2 - 2x + 2)",
          "explanation": "Factor out $e^{1x}$ to write the answer in a compact form.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Add $+c$",
          "workingLatex": "e^x(x^2 - 2x + 2) + c",
          "explanation": "Include the constant of integration for an indefinite integral.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check by differentiating",
          "workingLatex": "\\frac{d}{dx}\\left(e^x(x^2 - 2x + 2)\\right)",
          "explanation": "Differentiating should recover the original integrand.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Link to the product rule",
          "workingLatex": "\\frac{d}{dx}(uv) = u\\dfrac{dv}{dx} + v\\dfrac{du}{dx}",
          "explanation": "Integration by parts reverses the product rule for differentiation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int x^2 e^x\\,dx = e^x(x^2 - 2x + 2) + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-by-parts.q026",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "integration by parts",
      "trigonometry",
      "LIATE"
    ],
    "questionText": "Find $\\displaystyle\\int x^2\\sin x\\,dx$, where $x$ is in radians.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the formula",
          "workingLatex": "\\int u\\,dv = uv - \\int v\\,du",
          "explanation": "Integration by parts is the product rule reversed.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose $u$ and $dv$",
          "workingLatex": "u = x, \\quad dv = \\sin(1x)\\,dx",
          "explanation": "LIATE suggests the algebraic factor $x$ should be $u$ so $du = dx$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate and integrate",
          "workingLatex": "du = dx, \\quad v = -\\dfrac{1}{1}\\cos(1x)",
          "explanation": "Integrate $\\sin(1x)$ using the chain rule in reverse.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply integration by parts",
          "workingLatex": "x \\cdot \\left(-\\dfrac{1}{1}\\cos(1x)\\right) - \\int -\\dfrac{1}{1}\\cos(1x)\\,dx",
          "explanation": "Substitute into $uv - \\int v\\,du$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate the second term",
          "workingLatex": "-x^2\\cos x",
          "explanation": "The remaining integral is a standard trigonometric antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Collect terms",
          "workingLatex": "-x^2\\cos x + 2x\\sin x + 2\\cos x",
          "explanation": "Combine like terms and simplify any coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the final answer",
          "workingLatex": "-x^2\\cos x + 2x\\sin x + 2\\cos x + c",
          "explanation": "State the antiderivative with $+c$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify",
          "workingLatex": "\\frac{d}{dx}\\left(-x^2\\cos x + 2x\\sin x + 2\\cos x\\right) = x^2\\sin x",
          "explanation": "Differentiation confirms the result.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Link to the product rule",
          "workingLatex": "\\frac{d}{dx}(uv) = u\\dfrac{dv}{dx} + v\\dfrac{du}{dx}",
          "explanation": "Integration by parts reverses the product rule for differentiation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int x^2\\sin x\\,dx = -x^2\\cos x + 2x\\sin x + 2\\cos x + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-by-parts.q027",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "integration by parts",
      "repeated",
      "exponential"
    ],
    "questionText": "Find $\\displaystyle\\int x^3 e^x\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Plan repeated parts",
          "workingLatex": "u = x^3 \\Rightarrow \\text{three applications needed}",
          "explanation": "Each application of parts reduces the power of $x$ by one.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "First application",
          "workingLatex": "x^3 e^x - 3\\int x^2 e^x\\,dx",
          "explanation": "Differentiate $x^3$ to get $3x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Second: $\\int x^2 e^x\\,dx$",
          "workingLatex": "e^x(x^2 - 2x + 2)",
          "explanation": "Two applications on $x^2 e^x$ give this standard result.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute",
          "workingLatex": "x^3 e^x - 3e^x(x^2 - 2x + 2) + c",
          "explanation": "Replace the inner integral.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Expand inside the bracket",
          "workingLatex": "e^x(x^3 - 3x^2 + 6x - 6) + c",
          "explanation": "Distribute $-3$ and factor $e^x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Pattern check",
          "workingLatex": "\\text{Degree } 3 \\Rightarrow \\text{three applications}",
          "explanation": "The polynomial in front of $e^x$ has the same degree as the original power of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify by differentiating",
          "workingLatex": "\\frac{d}{dx}[e^x(x^3-3x^2+6x-6)] = x^3 e^x",
          "explanation": "Differentiation confirms the result.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Alternative tabular method",
          "workingLatex": "\\text{Repeated differentiation of } x^3",
          "explanation": "Tabular integration by parts is efficient for polynomial–exponential products.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Final answer",
          "workingLatex": "e^x(x^3 - 3x^2 + 6x - 6) + c",
          "explanation": "State the antiderivative in factored form.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int x^3 e^x\\,dx = e^x(x^3 - 3x^2 + 6x - 6) + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-by-parts.q028",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "integration by parts",
      "logarithm"
    ],
    "questionText": "Find $\\displaystyle\\int x^2\\ln x\\,dx$ for $x > 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Apply LIATE",
          "workingLatex": "u = \\ln x, \\quad dv = x^2\\,dx",
          "explanation": "Logarithmic before algebraic.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find $du$ and $v$",
          "workingLatex": "du = \\dfrac{1}{x}\\,dx, \\quad v = \\dfrac{x^3}{3}",
          "explanation": "Integrate $x^2$ using the power rule.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the formula",
          "workingLatex": "\\dfrac{x^3}{3}\\ln x - \\dfrac{1}{3}\\int x^2\\,dx",
          "explanation": "The $x$ and $\\dfrac{1}{x}$ cancel one power.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate $x^2$",
          "workingLatex": "\\dfrac{x^3}{3}\\ln x - \\dfrac{x^3}{9} + c",
          "explanation": "$\\int x^2\\,dx = \\dfrac{x^3}{3}$, then divide by $3$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Factor",
          "workingLatex": "\\dfrac{x^3}{9}(3\\ln x - 1) + c",
          "explanation": "Optional factored form.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Domain",
          "workingLatex": "x > 0",
          "explanation": "$\\ln x$ is defined only for positive $x$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify",
          "workingLatex": "\\frac{d}{dx}\\left(\\dfrac{x^3}{3}\\ln x - \\dfrac{x^3}{9}\\right) = x^2\\ln x",
          "explanation": "Differentiation recovers the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare with $\\int x\\ln x\\,dx$",
          "workingLatex": "\\text{Same LIATE choice pattern}",
          "explanation": "Higher powers of $x$ in $dv$ increase the polynomial degree in the answer.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Final answer",
          "workingLatex": "\\dfrac{x^3}{3}\\ln x - \\dfrac{x^3}{9} + c",
          "explanation": "Required antiderivative.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int x^2\\ln x\\,dx = \\dfrac{x^3}{3}\\ln x - \\dfrac{x^3}{9} + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-by-parts.q029",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "integration by parts",
      "definite integral"
    ],
    "questionText": "Evaluate $\\displaystyle\\int_{0}^{1} x e^x\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose $u$ and $dv$ using LIATE",
          "workingLatex": "\\text{Identify algebraic, log, or trig factors}",
          "explanation": "Pick $u$ to simplify on differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find $du$ and $v$",
          "workingLatex": "\\text{Compute derivatives and antiderivatives}",
          "explanation": "Prepare for the definite parts formula.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply definite integration by parts",
          "workingLatex": "\\left[uv\\right]_{0}^{1} - \\int_{0}^{1} v\\,du",
          "explanation": "Evaluate $uv$ at the limits before integrating $v\\,du$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate $[uv]$ at the limits",
          "workingLatex": "\\text{substitute } x = 1 \\text{ and } x = 0",
          "explanation": "Substitute each limit into the product $uv$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the remaining definite integral",
          "workingLatex": "\\int v\\,du \\text{ between the same limits}",
          "explanation": "Integrate $v\\,du$ and evaluate at the limits.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine and simplify",
          "workingLatex": "e - 2",
          "explanation": "Subtract and simplify to an exact value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check signs",
          "workingLatex": "\\text{Watch for minus signs from } v",
          "explanation": "Trig integrals often introduce negative coefficients in $v$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "No $+c$ needed",
          "workingLatex": "\\text{Definite integral}",
          "explanation": "Constants of integration cancel in definite evaluation.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "e - 2",
          "explanation": "Final exact value of the definite integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{0}^{1} x e^x\\,dx = e - 2$."
    }
  },
  {
    "id": "al.y2.pure.integration-by-parts.q030",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "integration by parts",
      "definite integral"
    ],
    "questionText": "Evaluate $\\displaystyle\\int_{0}^{\\pi} x\\sin x\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose $u$ and $dv$ using LIATE",
          "workingLatex": "\\text{Identify algebraic, log, or trig factors}",
          "explanation": "Pick $u$ to simplify on differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find $du$ and $v$",
          "workingLatex": "\\text{Compute derivatives and antiderivatives}",
          "explanation": "Prepare for the definite parts formula.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply definite integration by parts",
          "workingLatex": "\\left[uv\\right]_{0}^{\\pi} - \\int_{0}^{\\pi} v\\,du",
          "explanation": "Evaluate $uv$ at the limits before integrating $v\\,du$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate $[uv]$ at the limits",
          "workingLatex": "\\text{substitute } x = \\pi \\text{ and } x = 0",
          "explanation": "Substitute each limit into the product $uv$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the remaining definite integral",
          "workingLatex": "\\int v\\,du \\text{ between the same limits}",
          "explanation": "Integrate $v\\,du$ and evaluate at the limits.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine and simplify",
          "workingLatex": "1",
          "explanation": "Subtract and simplify to an exact value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check signs",
          "workingLatex": "\\text{Watch for minus signs from } v",
          "explanation": "Trig integrals often introduce negative coefficients in $v$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "No $+c$ needed",
          "workingLatex": "\\text{Definite integral}",
          "explanation": "Constants of integration cancel in definite evaluation.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "1",
          "explanation": "Final exact value of the definite integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{0}^{\\pi} x\\sin x\\,dx = 1$."
    }
  },
  {
    "id": "al.y2.pure.integration-by-parts.q031",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "integration by parts",
      "definite integral"
    ],
    "questionText": "Evaluate $\\displaystyle\\int_{0}^{\\dfrac{\\pi}{2}} x\\cos x\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose $u$ and $dv$ using LIATE",
          "workingLatex": "\\text{Identify algebraic, log, or trig factors}",
          "explanation": "Pick $u$ to simplify on differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find $du$ and $v$",
          "workingLatex": "\\text{Compute derivatives and antiderivatives}",
          "explanation": "Prepare for the definite parts formula.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply definite integration by parts",
          "workingLatex": "\\left[uv\\right]_{0}^{\\dfrac{\\pi}{2}} - \\int_{0}^{\\dfrac{\\pi}{2}} v\\,du",
          "explanation": "Evaluate $uv$ at the limits before integrating $v\\,du$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate $[uv]$ at the limits",
          "workingLatex": "\\text{substitute } x = \\dfrac{\\pi}{2} \\text{ and } x = 0",
          "explanation": "Substitute each limit into the product $uv$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the remaining definite integral",
          "workingLatex": "\\int v\\,du \\text{ between the same limits}",
          "explanation": "Integrate $v\\,du$ and evaluate at the limits.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine and simplify",
          "workingLatex": "1",
          "explanation": "Subtract and simplify to an exact value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check signs",
          "workingLatex": "\\text{Watch for minus signs from } v",
          "explanation": "Trig integrals often introduce negative coefficients in $v$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "No $+c$ needed",
          "workingLatex": "\\text{Definite integral}",
          "explanation": "Constants of integration cancel in definite evaluation.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "1",
          "explanation": "Final exact value of the definite integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{0}^{\\dfrac{\\pi}{2}} x\\cos x\\,dx = 1$."
    }
  },
  {
    "id": "al.y2.pure.integration-by-parts.q032",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "integration by parts",
      "definite integral"
    ],
    "questionText": "Evaluate $\\displaystyle\\int_{1}^{e} \\ln x\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose $u$ and $dv$ using LIATE",
          "workingLatex": "\\text{Identify algebraic, log, or trig factors}",
          "explanation": "Pick $u$ to simplify on differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find $du$ and $v$",
          "workingLatex": "\\text{Compute derivatives and antiderivatives}",
          "explanation": "Prepare for the definite parts formula.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply definite integration by parts",
          "workingLatex": "\\left[uv\\right]_{1}^{e} - \\int_{1}^{e} v\\,du",
          "explanation": "Evaluate $uv$ at the limits before integrating $v\\,du$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate $[uv]$ at the limits",
          "workingLatex": "\\text{substitute } x = e \\text{ and } x = 1",
          "explanation": "Substitute each limit into the product $uv$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the remaining definite integral",
          "workingLatex": "\\int v\\,du \\text{ between the same limits}",
          "explanation": "Integrate $v\\,du$ and evaluate at the limits.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine and simplify",
          "workingLatex": "1",
          "explanation": "Subtract and simplify to an exact value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check signs",
          "workingLatex": "\\text{Watch for minus signs from } v",
          "explanation": "Trig integrals often introduce negative coefficients in $v$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "No $+c$ needed",
          "workingLatex": "\\text{Definite integral}",
          "explanation": "Constants of integration cancel in definite evaluation.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "1",
          "explanation": "Final exact value of the definite integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{1}^{e} \\ln x\\,dx = 1$."
    }
  },
  {
    "id": "al.y2.pure.integration-by-parts.q033",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "integration by parts",
      "definite integral"
    ],
    "questionText": "Evaluate $\\displaystyle\\int_{0}^{1} x e^{-x}\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose $u$ and $dv$ using LIATE",
          "workingLatex": "\\text{Identify algebraic, log, or trig factors}",
          "explanation": "Pick $u$ to simplify on differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find $du$ and $v$",
          "workingLatex": "\\text{Compute derivatives and antiderivatives}",
          "explanation": "Prepare for the definite parts formula.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply definite integration by parts",
          "workingLatex": "\\left[uv\\right]_{0}^{1} - \\int_{0}^{1} v\\,du",
          "explanation": "Evaluate $uv$ at the limits before integrating $v\\,du$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate $[uv]$ at the limits",
          "workingLatex": "\\text{substitute } x = 1 \\text{ and } x = 0",
          "explanation": "Substitute each limit into the product $uv$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the remaining definite integral",
          "workingLatex": "\\int v\\,du \\text{ between the same limits}",
          "explanation": "Integrate $v\\,du$ and evaluate at the limits.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine and simplify",
          "workingLatex": "1 - \\dfrac{2}{e}",
          "explanation": "Subtract and simplify to an exact value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check signs",
          "workingLatex": "\\text{Watch for minus signs from } v",
          "explanation": "Trig integrals often introduce negative coefficients in $v$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "No $+c$ needed",
          "workingLatex": "\\text{Definite integral}",
          "explanation": "Constants of integration cancel in definite evaluation.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "1 - \\dfrac{2}{e}",
          "explanation": "Final exact value of the definite integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{0}^{1} x e^{-x}\\,dx = 1 - \\dfrac{2}{e}$."
    }
  },
  {
    "id": "al.y2.pure.integration-by-parts.q034",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "integration by parts",
      "definite integral"
    ],
    "questionText": "Evaluate $\\displaystyle\\int_{0}^{\\dfrac{\\pi}{4}} x\\sin(2x)\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose $u$ and $dv$ using LIATE",
          "workingLatex": "\\text{Identify algebraic, log, or trig factors}",
          "explanation": "Pick $u$ to simplify on differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find $du$ and $v$",
          "workingLatex": "\\text{Compute derivatives and antiderivatives}",
          "explanation": "Prepare for the definite parts formula.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply definite integration by parts",
          "workingLatex": "\\left[uv\\right]_{0}^{\\dfrac{\\pi}{4}} - \\int_{0}^{\\dfrac{\\pi}{4}} v\\,du",
          "explanation": "Evaluate $uv$ at the limits before integrating $v\\,du$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate $[uv]$ at the limits",
          "workingLatex": "\\text{substitute } x = \\dfrac{\\pi}{4} \\text{ and } x = 0",
          "explanation": "Substitute each limit into the product $uv$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the remaining definite integral",
          "workingLatex": "\\int v\\,du \\text{ between the same limits}",
          "explanation": "Integrate $v\\,du$ and evaluate at the limits.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine and simplify",
          "workingLatex": "\\dfrac{\\pi}{4\\sqrt{2}} - \\dfrac{1}{4}",
          "explanation": "Subtract and simplify to an exact value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check signs",
          "workingLatex": "\\text{Watch for minus signs from } v",
          "explanation": "Trig integrals often introduce negative coefficients in $v$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "No $+c$ needed",
          "workingLatex": "\\text{Definite integral}",
          "explanation": "Constants of integration cancel in definite evaluation.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "\\dfrac{\\pi}{4\\sqrt{2}} - \\dfrac{1}{4}",
          "explanation": "Final exact value of the definite integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{0}^{\\dfrac{\\pi}{4}} x\\sin(2x)\\,dx = \\dfrac{\\pi}{4\\sqrt{2}} - \\dfrac{1}{4}$."
    }
  },
  {
    "id": "al.y2.pure.integration-by-parts.q035",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "integration by parts",
      "inverse trigonometry"
    ],
    "questionText": "Find $\\displaystyle\\int \\arcsin x\\,dx$ for $|x| \\le 1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose $u$ and $dv$",
          "workingLatex": "u = \\arcsin x, \\quad dv = dx",
          "explanation": "Inverse trig is highest priority in LIATE.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find $du$ and $v$",
          "workingLatex": "du = \\dfrac{1}{\\sqrt{1-x^2}}\\,dx, \\quad v = x",
          "explanation": "Standard derivative of $\\arcsin x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the formula",
          "workingLatex": "x\\arcsin x - \\int \\dfrac{x}{\\sqrt{1-x^2}}\\,dx",
          "explanation": "The remaining integral has $x$ over $\\sqrt{1-x^2}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitution for the second integral",
          "workingLatex": "w = 1 - x^2, \\quad dw = -2x\\,dx",
          "explanation": "The numerator is (up to sign) the derivative of $1-x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate",
          "workingLatex": "x\\arcsin x + \\dfrac{1}{2}\\sqrt{1-x^2} + c",
          "explanation": "$\\int \\dfrac{x}{\\sqrt{1-x^2}}\\,dx = -\\sqrt{1-x^2}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "x\\arcsin x + \\dfrac{1}{2}\\sqrt{1-x^2} + c",
          "explanation": "Standard result for $\\int \\arcsin x\\,dx$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Domain",
          "workingLatex": "|x| \\le 1",
          "explanation": "$\\arcsin x$ is defined on $[-1,1]$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify at $x=0$",
          "workingLatex": "\\int_0^0 \\arcsin x\\,dx = 0",
          "explanation": "The antiderivative gives $0$ at $x=0$, as expected.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Differentiate to check",
          "workingLatex": "\\frac{d}{dx}\\left(x\\arcsin x + \\dfrac{1}{2}\\sqrt{1-x^2}\\right) = \\arcsin x",
          "explanation": "Confirmation by differentiation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\arcsin x\\,dx = x\\arcsin x + \\dfrac{1}{2}\\sqrt{1-x^2} + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-by-parts.q036",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "integration by parts",
      "cyclic",
      "exponential",
      "trigonometry"
    ],
    "questionText": "Find $\\displaystyle\\int e^x\\sin x\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Let $I = \\int e^x\\sin x\\,dx$",
          "workingLatex": "I = \\int e^x\\sin x\\,dx",
          "explanation": "Name the integral so we can solve for it algebraically.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "First application",
          "workingLatex": "u = \\sin x, \\; dv = e^x\\,dx",
          "explanation": "Choose $u = \\sin x$; either trig or exponential works.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "After first parts",
          "workingLatex": "I = e^x\\sin x - \\int e^x\\cos x\\,dx",
          "explanation": "The cosine integral appears.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Second application on $\\int e^x\\cos x\\,dx$",
          "workingLatex": "u = \\cos x, \\; dv = e^x\\,dx",
          "explanation": "Apply parts again with $u = \\cos x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Result of second parts",
          "workingLatex": "\\int e^x\\cos x\\,dx = e^x\\cos x + I",
          "explanation": "The original integral $I$ reappears — this is the cyclic property.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute back",
          "workingLatex": "I = e^x\\sin x - e^x\\cos x - I",
          "explanation": "Replace $\\int e^x\\cos x\\,dx$ in the expression for $I$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for $I$",
          "workingLatex": "2I = e^x(\\sin x - \\cos x)",
          "explanation": "Collect $I$ terms on one side.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Final answer",
          "workingLatex": "I = \\dfrac{e^x}{2}(\\sin x - \\cos x) + c",
          "explanation": "Divide by $2$ and add the constant.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify structure",
          "workingLatex": "\\text{Differentiate to confirm}",
          "explanation": "Cyclic integrals always produce a factor $\\dfrac{1}{2}$ after solving.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int e^x\\sin x\\,dx = \\dfrac{e^x}{2}(\\sin x - \\cos x) + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-by-parts.q037",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "integration by parts",
      "cyclic",
      "exponential",
      "trigonometry"
    ],
    "questionText": "Find $\\displaystyle\\int e^x\\cos x\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Let $J = \\int e^x\\cos x\\,dx$",
          "workingLatex": "J = \\int e^x\\cos x\\,dx",
          "explanation": "Label the integral for algebraic solution.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "First application",
          "workingLatex": "u = \\cos x, \\; dv = e^x\\,dx",
          "explanation": "Standard choice for cyclic integrals.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "After first parts",
          "workingLatex": "J = e^x\\cos x + \\int e^x\\sin x\\,dx",
          "explanation": "Note the plus sign from differentiating $\\cos x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Second application",
          "workingLatex": "u = \\sin x, \\; dv = e^x\\,dx \\Rightarrow \\int e^x\\sin x\\,dx = e^x\\sin x - J",
          "explanation": "Parts on the sine integral brings back $J$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute",
          "workingLatex": "J = e^x\\cos x + e^x\\sin x - J",
          "explanation": "The original integral reappears.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for $J$",
          "workingLatex": "2J = e^x(\\cos x + \\sin x)",
          "explanation": "Collect $J$ terms.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Divide by $2$",
          "workingLatex": "J = \\dfrac{e^x}{2}(\\cos x + \\sin x) + c",
          "explanation": "Final antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Link to $\\int e^x\\sin x\\,dx$",
          "workingLatex": "\\text{Same technique, different sign pattern}",
          "explanation": "Sine and cosine cyclic integrals differ by signs in the bracket.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify",
          "workingLatex": "\\frac{d}{dx}\\left[\\dfrac{e^x}{2}(\\cos x + \\sin x)\\right] = e^x\\cos x",
          "explanation": "Differentiation confirms.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int e^x\\cos x\\,dx = \\dfrac{e^x}{2}(\\cos x + \\sin x) + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-by-parts.q038",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "integration by parts",
      "exponential",
      "LIATE"
    ],
    "questionText": "Find $\\displaystyle\\int x e^{2x}\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall integration by parts",
          "workingLatex": "\\int u\\,dv = uv - \\int v\\,du",
          "explanation": "Integration by parts transfers differentiation from one factor to the other.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose $u$ and $dv$ (LIATE)",
          "workingLatex": "u = x, \\quad dv = e^{2x}\\,dx",
          "explanation": "For a polynomial times an exponential, let $u$ be the polynomial so it simplifies on differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find $du$ and $v$",
          "workingLatex": "du = dx, \\quad v = \\dfrac{1}{2}e^{2x}",
          "explanation": "Integrate $dv$ using the standard exponential rule.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the formula",
          "workingLatex": "uv - \\int v\\,du = x \\cdot \\dfrac{1}{2}e^{2x} - \\int \\dfrac{1}{2}e^{2x}\\,dx",
          "explanation": "Substitute $u$, $v$, $du$, and $dv$ into $\\int u\\,dv = uv - \\int v\\,du$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the remaining integral",
          "workingLatex": "\\dfrac{x}{2}e^{2x} - \\dfrac{1}{2^2}e^{2x} + c",
          "explanation": "The second integral is a standard exponential, so the polynomial factor disappears.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Factor the answer",
          "workingLatex": "\\dfrac{1}{4}e^{2x}(2x-1)",
          "explanation": "Factor out $e^{2x}$ to write the answer in a compact form.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Add $+c$",
          "workingLatex": "\\dfrac{1}{4}e^{2x}(2x-1) + c",
          "explanation": "Include the constant of integration for an indefinite integral.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check by differentiating",
          "workingLatex": "\\frac{d}{dx}\\left(\\dfrac{1}{4}e^{2x}(2x-1)\\right)",
          "explanation": "Differentiating should recover the original integrand.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Link to the product rule",
          "workingLatex": "\\frac{d}{dx}(uv) = u\\dfrac{dv}{dx} + v\\dfrac{du}{dx}",
          "explanation": "Integration by parts reverses the product rule for differentiation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int x e^{2x}\\,dx = \\dfrac{1}{4}e^{2x}(2x-1) + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-by-parts.q039",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "integration by parts",
      "trigonometry",
      "LIATE"
    ],
    "questionText": "Find $\\displaystyle\\int x^2\\cos x\\,dx$, where $x$ is in radians.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the formula",
          "workingLatex": "\\int u\\,dv = uv - \\int v\\,du",
          "explanation": "Integration by parts is the product rule reversed.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose $u$ and $dv$",
          "workingLatex": "u = x, \\quad dv = \\cos(1x)\\,dx",
          "explanation": "LIATE suggests the algebraic factor $x$ should be $u$ so $du = dx$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate and integrate",
          "workingLatex": "du = dx, \\quad v = \\dfrac{1}{1}\\sin(1x)",
          "explanation": "Integrate $\\cos(1x)$ using the chain rule in reverse.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply integration by parts",
          "workingLatex": "x \\cdot \\left(\\dfrac{1}{1}\\sin(1x)\\right) - \\int \\dfrac{1}{1}\\sin(1x)\\,dx",
          "explanation": "Substitute into $uv - \\int v\\,du$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate the second term",
          "workingLatex": "x^2\\sin x",
          "explanation": "The remaining integral is a standard trigonometric antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Collect terms",
          "workingLatex": "x^2\\sin x + 2x\\cos x - 2\\sin x",
          "explanation": "Combine like terms and simplify any coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the final answer",
          "workingLatex": "x^2\\sin x + 2x\\cos x - 2\\sin x + c",
          "explanation": "State the antiderivative with $+c$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify",
          "workingLatex": "\\frac{d}{dx}\\left(x^2\\sin x + 2x\\cos x - 2\\sin x\\right) = x^2\\cos x",
          "explanation": "Differentiation confirms the result.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Link to the product rule",
          "workingLatex": "\\frac{d}{dx}(uv) = u\\dfrac{dv}{dx} + v\\dfrac{du}{dx}",
          "explanation": "Integration by parts reverses the product rule for differentiation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int x^2\\cos x\\,dx = x^2\\sin x + 2x\\cos x - 2\\sin x + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-by-parts.q040",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "integration by parts",
      "logarithm",
      "definite"
    ],
    "questionText": "Evaluate $\\displaystyle\\int_1^e x\\ln x\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose $u$ and $dv$",
          "workingLatex": "u = \\ln x, \\quad dv = x\\,dx",
          "explanation": "LIATE: logarithmic before algebraic.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find $du$ and $v$",
          "workingLatex": "du = \\dfrac{1}{x}\\,dx, \\quad v = \\dfrac{x^2}{2}",
          "explanation": "Standard preparation for parts.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Definite parts formula",
          "workingLatex": "\\left[\\dfrac{x^2}{2}\\ln x\\right]_1^e - \\int_1^e \\dfrac{x}{2}\\,dx",
          "explanation": "Apply $[uv]_a^b - \\int_a^b v\\,du$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate $[uv]$",
          "workingLatex": "\\dfrac{e^2}{2} \\cdot 1 - \\dfrac{1}{2} \\cdot 0 = \\dfrac{e^2}{2}",
          "explanation": "At $x=e$, $\\ln e = 1$; at $x=1$, $\\ln 1 = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate $\\int_1^e \\dfrac{x}{2}\\,dx$",
          "workingLatex": "\\left[\\dfrac{x^2}{4}\\right]_1^e = \\dfrac{e^2 - 1}{4}",
          "explanation": "Integrate $\\dfrac{x}{2}$ and evaluate.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine",
          "workingLatex": "\\dfrac{e^2}{2} - \\dfrac{e^2 - 1}{4} = \\dfrac{e^2 + 1}{4}",
          "explanation": "Common denominator $4$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Exact answer",
          "workingLatex": "\\dfrac{e^2 + 1}{4}",
          "explanation": "Leave in exact form.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpretation",
          "workingLatex": "\\text{Area under } x\\ln x \\text{ from } 1 \\text{ to } e",
          "explanation": "The integral represents a signed area on $[1,e]$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check $x=1$ boundary",
          "workingLatex": "\\dfrac{1}{2}\\ln 1 = 0",
          "explanation": "The lower boundary term vanishes.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_1^e x\\ln x\\,dx = \\dfrac{e^2 + 1}{4}$."
    }
  },
  {
    "id": "al.y2.pure.integration-by-parts.q041",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "integration by parts",
      "exponential",
      "LIATE"
    ],
    "questionText": "Find $\\displaystyle\\int x e^{-2x}\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall integration by parts",
          "workingLatex": "\\int u\\,dv = uv - \\int v\\,du",
          "explanation": "Integration by parts transfers differentiation from one factor to the other.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose $u$ and $dv$ (LIATE)",
          "workingLatex": "u = x, \\quad dv = e^{-2x}\\,dx",
          "explanation": "For a polynomial times an exponential, let $u$ be the polynomial so it simplifies on differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find $du$ and $v$",
          "workingLatex": "du = dx, \\quad v = \\dfrac{1}{-2}e^{-2x}",
          "explanation": "Integrate $dv$ using the standard exponential rule.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the formula",
          "workingLatex": "uv - \\int v\\,du = x \\cdot \\dfrac{1}{-2}e^{-2x} - \\int \\dfrac{1}{-2}e^{-2x}\\,dx",
          "explanation": "Substitute $u$, $v$, $du$, and $dv$ into $\\int u\\,dv = uv - \\int v\\,du$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the remaining integral",
          "workingLatex": "\\dfrac{x}{-2}e^{-2x} - \\dfrac{1}{-2^2}e^{-2x} + c",
          "explanation": "The second integral is a standard exponential, so the polynomial factor disappears.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Factor the answer",
          "workingLatex": "-\\dfrac{1}{4}e^{-2x}(2x+1)",
          "explanation": "Factor out $e^{-2x}$ to write the answer in a compact form.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Add $+c$",
          "workingLatex": "-\\dfrac{1}{4}e^{-2x}(2x+1) + c",
          "explanation": "Include the constant of integration for an indefinite integral.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check by differentiating",
          "workingLatex": "\\frac{d}{dx}\\left(-\\dfrac{1}{4}e^{-2x}(2x+1)\\right)",
          "explanation": "Differentiating should recover the original integrand.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Link to the product rule",
          "workingLatex": "\\frac{d}{dx}(uv) = u\\dfrac{dv}{dx} + v\\dfrac{du}{dx}",
          "explanation": "Integration by parts reverses the product rule for differentiation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int x e^{-2x}\\,dx = -\\dfrac{1}{4}e^{-2x}(2x+1) + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-by-parts.q042",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "integration by parts",
      "trigonometry",
      "LIATE"
    ],
    "questionText": "Find $\\displaystyle\\int x\\sin(3x)\\,dx$, where $x$ is in radians.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the formula",
          "workingLatex": "\\int u\\,dv = uv - \\int v\\,du",
          "explanation": "Integration by parts is the product rule reversed.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose $u$ and $dv$",
          "workingLatex": "u = x, \\quad dv = \\sin(3x)\\,dx",
          "explanation": "LIATE suggests the algebraic factor $x$ should be $u$ so $du = dx$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate and integrate",
          "workingLatex": "du = dx, \\quad v = -\\dfrac{1}{3}\\cos(3x)",
          "explanation": "Integrate $\\sin(3x)$ using the chain rule in reverse.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply integration by parts",
          "workingLatex": "x \\cdot \\left(-\\dfrac{1}{3}\\cos(3x)\\right) - \\int -\\dfrac{1}{3}\\cos(3x)\\,dx",
          "explanation": "Substitute into $uv - \\int v\\,du$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate the second term",
          "workingLatex": "-\\dfrac{x}{3}\\cos(3x)",
          "explanation": "The remaining integral is a standard trigonometric antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Collect terms",
          "workingLatex": "-\\dfrac{x}{3}\\cos(3x) + \\dfrac{1}{9}\\sin(3x)",
          "explanation": "Combine like terms and simplify any coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the final answer",
          "workingLatex": "-\\dfrac{x}{3}\\cos(3x) + \\dfrac{1}{9}\\sin(3x) + c",
          "explanation": "State the antiderivative with $+c$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify",
          "workingLatex": "\\frac{d}{dx}\\left(-\\dfrac{x}{3}\\cos(3x) + \\dfrac{1}{9}\\sin(3x)\\right) = x\\sin(3x)",
          "explanation": "Differentiation confirms the result.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Link to the product rule",
          "workingLatex": "\\frac{d}{dx}(uv) = u\\dfrac{dv}{dx} + v\\dfrac{du}{dx}",
          "explanation": "Integration by parts reverses the product rule for differentiation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int x\\sin(3x)\\,dx = -\\dfrac{x}{3}\\cos(3x) + \\dfrac{1}{9}\\sin(3x) + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-by-parts.q043",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "integration by parts",
      "trigonometry",
      "LIATE"
    ],
    "questionText": "Find $\\displaystyle\\int x\\cos(3x)\\,dx$, where $x$ is in radians.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the formula",
          "workingLatex": "\\int u\\,dv = uv - \\int v\\,du",
          "explanation": "Integration by parts is the product rule reversed.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose $u$ and $dv$",
          "workingLatex": "u = x, \\quad dv = \\cos(3x)\\,dx",
          "explanation": "LIATE suggests the algebraic factor $x$ should be $u$ so $du = dx$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate and integrate",
          "workingLatex": "du = dx, \\quad v = \\dfrac{1}{3}\\sin(3x)",
          "explanation": "Integrate $\\cos(3x)$ using the chain rule in reverse.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply integration by parts",
          "workingLatex": "x \\cdot \\left(\\dfrac{1}{3}\\sin(3x)\\right) - \\int \\dfrac{1}{3}\\sin(3x)\\,dx",
          "explanation": "Substitute into $uv - \\int v\\,du$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate the second term",
          "workingLatex": "\\dfrac{x}{3}\\sin(3x)",
          "explanation": "The remaining integral is a standard trigonometric antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Collect terms",
          "workingLatex": "\\dfrac{x}{3}\\sin(3x) + \\dfrac{1}{9}\\cos(3x)",
          "explanation": "Combine like terms and simplify any coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the final answer",
          "workingLatex": "\\dfrac{x}{3}\\sin(3x) + \\dfrac{1}{9}\\cos(3x) + c",
          "explanation": "State the antiderivative with $+c$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify",
          "workingLatex": "\\frac{d}{dx}\\left(\\dfrac{x}{3}\\sin(3x) + \\dfrac{1}{9}\\cos(3x)\\right) = x\\cos(3x)",
          "explanation": "Differentiation confirms the result.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Link to the product rule",
          "workingLatex": "\\frac{d}{dx}(uv) = u\\dfrac{dv}{dx} + v\\dfrac{du}{dx}",
          "explanation": "Integration by parts reverses the product rule for differentiation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int x\\cos(3x)\\,dx = \\dfrac{x}{3}\\sin(3x) + \\dfrac{1}{9}\\cos(3x) + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-by-parts.q044",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "integration by parts",
      "inverse trigonometry"
    ],
    "questionText": "Find $\\displaystyle\\int x\\arctan x\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Apply LIATE",
          "workingLatex": "u = \\arctan x, \\quad dv = x\\,dx",
          "explanation": "Inverse trig before algebraic.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find $du$ and $v$",
          "workingLatex": "du = \\dfrac{1}{1+x^2}\\,dx, \\quad v = \\dfrac{x^2}{2}",
          "explanation": "Standard derivatives and integrals.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply parts",
          "workingLatex": "\\dfrac{x^2}{2}\\arctan x - \\dfrac{1}{2}\\int \\dfrac{x^2}{1+x^2}\\,dx",
          "explanation": "Substitute into $uv - \\int v\\,du$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rewrite the fraction",
          "workingLatex": "\\dfrac{x^2}{1+x^2} = 1 - \\dfrac{1}{1+x^2}",
          "explanation": "Split to create a standard $\\arctan$ integral.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate both parts",
          "workingLatex": "\\dfrac{x^2}{2}\\arctan x - \\dfrac{x}{2} + \\dfrac{1}{2}\\arctan x + c",
          "explanation": "$\\int \\dfrac{1}{1+x^2}\\,dx = \\arctan x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Collect $\\arctan$ terms",
          "workingLatex": "\\dfrac{1}{2}(x^2+1)\\arctan x - \\dfrac{x}{2} + c",
          "explanation": "Factor where helpful.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify at $x=0$",
          "workingLatex": "F(0) = \\dfrac{1}{2}\\arctan 0 = 0",
          "explanation": "Antiderivative passes a quick check.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Differentiate to confirm",
          "workingLatex": "\\frac{d}{dx}\\left[\\dfrac{x^2}{2}\\arctan x - \\dfrac{x}{2} + \\dfrac{1}{2}\\arctan x\\right] = x\\arctan x",
          "explanation": "Full differentiation confirms.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Final answer",
          "workingLatex": "\\dfrac{1}{2}(x^2+1)\\arctan x - \\dfrac{x}{2} + c",
          "explanation": "Required antiderivative.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int x\\arctan x\\,dx = \\dfrac{1}{2}(x^2+1)\\arctan x - \\dfrac{x}{2} + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-by-parts.q045",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "integration by parts",
      "verification",
      "exam"
    ],
    "questionText": "(a) Find $\\displaystyle\\int x e^x\\,dx$. (b) Hence verify your answer by differentiating.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Part (a): choose $u$ and $dv$",
          "workingLatex": "u = x, \\quad dv = e^x\\,dx",
          "explanation": "LIATE gives $u = x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply parts",
          "workingLatex": "x e^x - \\int e^x\\,dx",
          "explanation": "Standard first application.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate",
          "workingLatex": "e^x(x-1) + c",
          "explanation": "The remaining integral is $e^x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Part (a) answer",
          "workingLatex": "e^x(x-1) + c",
          "explanation": "State the antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Part (b): set $F(x) = e^x(x-1)$",
          "workingLatex": "F(x) = e^x(x-1)",
          "explanation": "Differentiate the answer from part (a).",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Product rule",
          "workingLatex": "F'(x) = e^x(x-1) + e^x",
          "explanation": "Differentiate $e^x$ and $(x-1)$ separately.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify",
          "workingLatex": "F'(x) = x e^x",
          "explanation": "Factor $e^x$ to recover the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Conclusion for (b)",
          "workingLatex": "\\text{Verified}",
          "explanation": "Differentiation confirms part (a).",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Exam tip",
          "workingLatex": "\\text{Always verify if asked}",
          "explanation": "Verification by differentiation is a common exam requirement.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\displaystyle\\int x e^x\\,dx = e^x(x-1) + c$. (b) $\\dfrac{d}{dx}[e^x(x-1)] = x e^x$, verified."
    }
  },
  {
    "id": "al.y2.pure.integration-by-parts.q046",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "integration by parts",
      "definite integral",
      "cyclic"
    ],
    "questionText": "Evaluate $\\displaystyle\\int_0^{\\pi/2} e^x\\sin x\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the indefinite form first",
          "workingLatex": "I = \\dfrac{e^x}{2}(\\sin x - \\cos x) + c",
          "explanation": "Use the cyclic integration by parts result.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up definite evaluation",
          "workingLatex": "\\left[\\dfrac{e^x}{2}(\\sin x - \\cos x)\\right]_0^{\\pi/2}",
          "explanation": "Evaluate the antiderivative at the limits.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "At $x = \\dfrac{\\pi}{2}$",
          "workingLatex": "\\dfrac{e^{\\pi/2}}{2}(1 - 0) = \\dfrac{e^{\\pi/2}}{2}",
          "explanation": "$\\sin\\dfrac{\\pi}{2}=1$ and $\\cos\\dfrac{\\pi}{2}=0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "At $x = 0$",
          "workingLatex": "\\dfrac{1}{2}(0 - 1) = -\\dfrac{1}{2}",
          "explanation": "$\\sin 0 = 0$ and $\\cos 0 = 1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Subtract",
          "workingLatex": "\\dfrac{e^{\\pi/2}}{2} + \\dfrac{1}{2} = \\dfrac{e^{\\pi/2}+1}{2}",
          "explanation": "Upper minus lower.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Exact answer",
          "workingLatex": "\\dfrac{e^{\\pi/2}+1}{2}",
          "explanation": "Leave in exact form.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Alternative: parts directly on definite integral",
          "workingLatex": "\\text{Same cyclic algebra with limits}",
          "explanation": "You can also apply parts twice before evaluating.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check magnitude",
          "workingLatex": "\\text{Positive area}",
          "explanation": "$e^x\\sin x > 0$ on $(0, \\pi/2)$, so the integral is positive.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Final value",
          "workingLatex": "\\dfrac{e^{\\pi/2}+1}{2}",
          "explanation": "Required definite integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_0^{\\pi/2} e^x\\sin x\\,dx = \\dfrac{e^{\\pi/2}+1}{2}$."
    }
  },
  {
    "id": "al.y2.pure.integration-by-parts.q047",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "integration by parts",
      "logarithm"
    ],
    "questionText": "Find $\\displaystyle\\int (\\ln x)^2\\,dx$ for $x > 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose $u$ and $dv$",
          "workingLatex": "u = (\\ln x)^2, \\quad dv = dx",
          "explanation": "Logarithmic squared still prioritises $u$ in LIATE.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find $du$",
          "workingLatex": "du = \\dfrac{2\\ln x}{x}\\,dx",
          "explanation": "Chain rule on $(\\ln x)^2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply parts",
          "workingLatex": "x(\\ln x)^2 - 2\\int \\ln x\\,dx",
          "explanation": "The remaining integral is $\\int \\ln x\\,dx$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Use $\\int \\ln x\\,dx = x\\ln x - x$",
          "workingLatex": "x(\\ln x)^2 - 2(x\\ln x - x) + c",
          "explanation": "Substitute the known logarithm result.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Expand",
          "workingLatex": "x(\\ln x)^2 - 2x\\ln x + 2x + c",
          "explanation": "Distribute the $-2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Factor (optional)",
          "workingLatex": "x\\left[(\\ln x)^2 - 2\\ln x + 2\\right] + c",
          "explanation": "Factored form highlights the structure.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Repeated parts pattern",
          "workingLatex": "\\text{Two applications for } (\\ln x)^2",
          "explanation": "Each power of $\\ln x$ needs another application of parts.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify at $x=1$",
          "workingLatex": "F(1) = 2",
          "explanation": "Quick check: integrand zero at $x=1$ but antiderivative need not be.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Final answer",
          "workingLatex": "x(\\ln x)^2 - 2x\\ln x + 2x + c",
          "explanation": "Required antiderivative.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int (\\ln x)^2\\,dx = x(\\ln x)^2 - 2x\\ln x + 2x + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-by-parts.q048",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "integration by parts",
      "repeated",
      "trigonometry"
    ],
    "questionText": "Find $\\displaystyle\\int x^2\\sin(2x)\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "First application",
          "workingLatex": "u = x^2, \\; dv = \\sin(2x)\\,dx",
          "explanation": "Algebraic factor with degree $2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "After first parts",
          "workingLatex": "-\\dfrac{x^2}{2}\\cos(2x) + x\\int \\cos(2x)\\,dx",
          "explanation": "Differentiating $x^2$ gives $2x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Correct first step",
          "workingLatex": "-\\dfrac{x^2}{2}\\cos(2x) + x\\int \\cos(2x)\\,dx \\Rightarrow -\\dfrac{x^2}{2}\\cos(2x) + \\dfrac{x}{2}\\sin(2x) - \\int \\sin(2x)\\,dx",
          "explanation": "Apply parts again to $\\int x\\cos(2x)\\,dx$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate $\\int \\sin(2x)\\,dx$",
          "workingLatex": "-\\dfrac{1}{2}\\cos(2x)",
          "explanation": "Standard trig integral.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Collect terms",
          "workingLatex": "-\\dfrac{x^2}{2}\\cos(2x) + \\dfrac{x}{2}\\sin(2x) + \\dfrac{1}{4}\\cos(2x) + c",
          "explanation": "Combine like terms.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Factor $\\cos(2x)$",
          "workingLatex": "\\dfrac{1}{4}\\cos(2x)(2 - 4x^2) + \\dfrac{x}{2}\\sin(2x) + c",
          "explanation": "Optional factored form.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Two applications needed",
          "workingLatex": "\\text{Degree } 2 \\Rightarrow 2 \\text{ parts}",
          "explanation": "Pattern matches polynomial–trig products.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify",
          "workingLatex": "\\frac{d}{dx}\\left(-\\dfrac{x^2}{2}\\cos(2x) + \\dfrac{x}{2}\\sin(2x) + \\dfrac{1}{4}\\cos(2x)\\right) = x^2\\sin(2x)",
          "explanation": "Differentiation confirms.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Final answer",
          "workingLatex": "-\\dfrac{x^2}{2}\\cos(2x) + \\dfrac{x}{2}\\sin(2x) + \\dfrac{1}{4}\\cos(2x) + c",
          "explanation": "Required antiderivative.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int x^2\\sin(2x)\\,dx = -\\dfrac{x^2}{2}\\cos(2x) + \\dfrac{x}{2}\\sin(2x) + \\dfrac{1}{4}\\cos(2x) + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-by-parts.q049",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "integration by parts",
      "exponential"
    ],
    "questionText": "Find $\\displaystyle\\int x^2 e^{-x}\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "First application",
          "workingLatex": "u = x^2, \\; dv = e^{-x}\\,dx",
          "explanation": "Polynomial degree $2$ requires two applications.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "After first parts",
          "workingLatex": "-x^2 e^{-x} + 2\\int x e^{-x}\\,dx",
          "explanation": "$v = -e^{-x}$ introduces a minus sign.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use $\\int x e^{-x}\\,dx = -e^{-x}(x+1)$",
          "workingLatex": "-x^2 e^{-x} - 2e^{-x}(x+1) + c",
          "explanation": "Substitute the standard result.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Factor $e^{-x}$",
          "workingLatex": "-e^{-x}(x^2 + 2x + 2) + c",
          "explanation": "Collect inside the bracket.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check signs",
          "workingLatex": "\\text{Careful with } v = -e^{-x}",
          "explanation": "Negative exponential integrals often accumulate minus signs.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Pattern",
          "workingLatex": "e^{-x}(\\text{polynomial of degree } 2)",
          "explanation": "Same structure as $x^2 e^x$ but with sign changes.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify",
          "workingLatex": "\\frac{d}{dx}[-e^{-x}(x^2+2x+2)] = x^2 e^{-x}",
          "explanation": "Differentiation confirms.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Definite version",
          "workingLatex": "\\text{Can evaluate between limits using this antiderivative}",
          "explanation": "The indefinite result enables definite calculations.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Final answer",
          "workingLatex": "-e^{-x}(x^2 + 2x + 2) + c",
          "explanation": "Required antiderivative.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int x^2 e^{-x}\\,dx = -e^{-x}(x^2 + 2x + 2) + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-by-parts.q050",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "tags": [
      "integration by parts",
      "exam",
      "multi-part"
    ],
    "questionText": "(a) State the integration by parts formula. (b) Use it to find $\\displaystyle\\int x\\cos x\\,dx$. (c) Verify by differentiation.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Part (a)",
          "workingLatex": "\\int u\\,dv = uv - \\int v\\,du",
          "explanation": "The fundamental integration by parts formula.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Part (b): choose $u$ and $dv$",
          "workingLatex": "u = x, \\quad dv = \\cos x\\,dx",
          "explanation": "LIATE: algebraic before trigonometric.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find $du$ and $v$",
          "workingLatex": "du = dx, \\quad v = \\sin x",
          "explanation": "Standard preparation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply parts",
          "workingLatex": "x\\sin x - \\int \\sin x\\,dx",
          "explanation": "Substitute into the formula.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate",
          "workingLatex": "x\\sin x + \\cos x + c",
          "explanation": "$\\int \\sin x\\,dx = -\\cos x$, so minus minus gives plus.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Part (b) answer",
          "workingLatex": "x\\sin x + \\cos x + c",
          "explanation": "State the antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Part (c): differentiate",
          "workingLatex": "F'(x) = \\sin x + x\\cos x - \\sin x = x\\cos x",
          "explanation": "Product rule on $x\\sin x$; derivative of $\\cos x$ is $-\\sin x$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verification complete",
          "workingLatex": "F'(x) = x\\cos x",
          "explanation": "Matches the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Summary",
          "workingLatex": "(a) formula, (b) $x\\sin x + \\cos x + c$, (c) verified",
          "explanation": "Full exam-style response.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\displaystyle\\int u\\,dv = uv - \\int v\\,du$. (b) $\\displaystyle\\int x\\cos x\\,dx = x\\sin x + \\cos x + c$. (c) Verified."
    }
  },
  {
    "id": "al.y2.pure.integration-by-parts.q051",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "integration by parts",
      "cyclic",
      "definite"
    ],
    "questionText": "Evaluate $\\displaystyle\\int_0^{\\pi} e^x\\sin x\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Indefinite form",
          "workingLatex": "I = \\dfrac{e^x}{2}(\\sin x - \\cos x) + c",
          "explanation": "Use the cyclic parts result.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate at $x = \\pi$",
          "workingLatex": "\\dfrac{e^{\\pi}}{2}(0 - (-1)) = \\dfrac{e^{\\pi}}{2}",
          "explanation": "$\\sin\\pi = 0$, $\\cos\\pi = -1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate at $x = 0$",
          "workingLatex": "\\dfrac{1}{2}(0 - 1) = -\\dfrac{1}{2}",
          "explanation": "At $x=0$: $\\sin 0 = 0$, $\\cos 0 = 1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Subtract",
          "workingLatex": "\\dfrac{e^{\\pi}}{2} + \\dfrac{1}{2} = \\dfrac{e^{\\pi}+1}{2}",
          "explanation": "Upper minus lower.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpretation",
          "workingLatex": "\\text{Signed area over } [0,\\pi]",
          "explanation": "The integrand changes sign but the net integral is positive.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Alternative method",
          "workingLatex": "\\text{Apply parts twice with limits}",
          "explanation": "Direct definite cyclic integration is longer but equivalent.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Exact form",
          "workingLatex": "\\dfrac{e^{\\pi}+1}{2}",
          "explanation": "Leave exact — do not decimalise.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Magnitude check",
          "workingLatex": "\\dfrac{e^{\\pi}+1}{2} > 0",
          "explanation": "Consistent with net positive area.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Related result",
          "workingLatex": "\\int_0^{\\pi/2} e^x\\sin x\\,dx = \\dfrac{e^{\\pi/2}+1}{2}",
          "explanation": "Same technique on a shorter interval.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Final answer",
          "workingLatex": "\\dfrac{e^{\\pi}+1}{2}",
          "explanation": "Required value.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Link to the product rule",
          "workingLatex": "\\frac{d}{dx}(uv) = u\\dfrac{dv}{dx} + v\\dfrac{du}{dx}",
          "explanation": "Integration by parts reverses the product rule for differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Comment on LIATE",
          "workingLatex": "\\text{LIATE guides the choice of } u",
          "explanation": "Choosing $u$ from the earliest LIATE category usually simplifies the second integral.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Watch for sign errors",
          "workingLatex": "\\text{Track minus signs when finding } v",
          "explanation": "Trig integrals and negative exponentials often introduce sign changes.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_0^{\\pi} e^x\\sin x\\,dx = \\dfrac{e^{\\pi}+1}{2}$."
    }
  },
  {
    "id": "al.y2.pure.integration-by-parts.q052",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "tags": [
      "integration by parts",
      "repeated",
      "exponential"
    ],
    "questionText": "Find $\\displaystyle\\int x^3 e^{2x}\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Plan",
          "workingLatex": "u = x^3 \\Rightarrow 3 \\text{ applications of parts}",
          "explanation": "Degree $3$ polynomial needs three reductions.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "First application",
          "workingLatex": "x^3 e^{2x} - 3\\int x^2 e^{2x}\\,dx",
          "explanation": "Differentiate $x^3$ to get $3x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Second: $\\int x^2 e^{2x}\\,dx$",
          "workingLatex": "\\dfrac{1}{4}e^{2x}(4x^2 - 4x + 2)",
          "explanation": "Two applications on $x^2 e^{2x}$ with factor $2$ in the exponent.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute",
          "workingLatex": "x^3 e^{2x} - \\dfrac{3}{4}e^{2x}(4x^2 - 4x + 2) + c",
          "explanation": "Replace the inner integral.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Expand",
          "workingLatex": "e^{2x}\\left(x^3 - 3x^2 + 3x - \\dfrac{3}{2}\\right) + c",
          "explanation": "Distribute and factor $e^{2x}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Tabular alternative",
          "workingLatex": "\\text{Differentiate } x^3 \\text{ three times; integrate } e^{2x}",
          "explanation": "Tabular method is efficient for this type.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Sign pattern",
          "workingLatex": "\\text{Alternating signs in the polynomial}",
          "explanation": "Matches the pattern for $x^n e^{kx}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify",
          "workingLatex": "\\frac{d}{dx}\\left[e^{2x}\\left(x^3 - 3x^2 + 3x - \\dfrac{3}{2}\\right)\\right] = x^3 e^{2x}",
          "explanation": "Differentiation confirms.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "General rule",
          "workingLatex": "\\int x^n e^{kx}\\,dx \\text{ needs } n \\text{ applications}",
          "explanation": "Power of polynomial determines the number of parts.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Final answer",
          "workingLatex": "e^{2x}\\left(x^3 - 3x^2 + 3x - \\dfrac{3}{2}\\right) + c",
          "explanation": "Required antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Link to the product rule",
          "workingLatex": "\\frac{d}{dx}(uv) = u\\dfrac{dv}{dx} + v\\dfrac{du}{dx}",
          "explanation": "Integration by parts reverses the product rule for differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Comment on LIATE",
          "workingLatex": "\\text{LIATE guides the choice of } u",
          "explanation": "Choosing $u$ from the earliest LIATE category usually simplifies the second integral.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Watch for sign errors",
          "workingLatex": "\\text{Track minus signs when finding } v",
          "explanation": "Trig integrals and negative exponentials often introduce sign changes.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int x^3 e^{2x}\\,dx = e^{2x}\\left(x^3 - 3x^2 + 3x - \\dfrac{3}{2}\\right) + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-by-parts.q053",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "tags": [
      "integration by parts",
      "inverse trigonometry"
    ],
    "questionText": "Find $\\displaystyle\\int x\\arcsin x\\,dx$ for $|x| \\le 1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose $u$ and $dv$",
          "workingLatex": "u = \\arcsin x, \\quad dv = x\\,dx",
          "explanation": "Inverse trig before algebraic in LIATE.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find $du$ and $v$",
          "workingLatex": "du = \\dfrac{1}{\\sqrt{1-x^2}}\\,dx, \\quad v = \\dfrac{x^2}{2}",
          "explanation": "Standard preparation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply parts",
          "workingLatex": "\\dfrac{x^2}{2}\\arcsin x - \\dfrac{1}{2}\\int \\dfrac{x^2}{\\sqrt{1-x^2}}\\,dx",
          "explanation": "Remaining integral needs algebraic manipulation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rewrite fraction",
          "workingLatex": "\\dfrac{x^2}{\\sqrt{1-x^2}} = \\dfrac{1-x^2+1-1}{\\sqrt{1-x^2}} = \\sqrt{1-x^2} - \\dfrac{1}{\\sqrt{1-x^2}}",
          "explanation": "Split to create integrable forms.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate each part",
          "workingLatex": "\\dfrac{x^2}{2}\\arcsin x - \\dfrac{x\\sqrt{1-x^2}}{4} + \\dfrac{1}{4}\\arcsin x + c",
          "explanation": "Use standard results for each term.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Collect",
          "workingLatex": "\\dfrac{2x^2+1}{4}\\arcsin x - \\dfrac{x\\sqrt{1-x^2}}{4} + c",
          "explanation": "Combine $\\arcsin$ terms.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Domain",
          "workingLatex": "|x| \\le 1",
          "explanation": "Required for $\\arcsin x$ and $\\sqrt{1-x^2}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check $x=0$",
          "workingLatex": "F(0) = 0",
          "explanation": "Antiderivative vanishes at the origin.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Differentiate to verify",
          "workingLatex": "\\frac{d}{dx}\\left[\\dfrac{x^2}{2}\\arcsin x - \\dfrac{x\\sqrt{1-x^2}}{4} + \\dfrac{1}{4}\\arcsin x\\right] = x\\arcsin x",
          "explanation": "Confirmation by differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Final answer",
          "workingLatex": "\\dfrac{2x^2+1}{4}\\arcsin x - \\dfrac{x\\sqrt{1-x^2}}{4} + c",
          "explanation": "Required antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Link to the product rule",
          "workingLatex": "\\frac{d}{dx}(uv) = u\\dfrac{dv}{dx} + v\\dfrac{du}{dx}",
          "explanation": "Integration by parts reverses the product rule for differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Comment on LIATE",
          "workingLatex": "\\text{LIATE guides the choice of } u",
          "explanation": "Choosing $u$ from the earliest LIATE category usually simplifies the second integral.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Watch for sign errors",
          "workingLatex": "\\text{Track minus signs when finding } v",
          "explanation": "Trig integrals and negative exponentials often introduce sign changes.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int x\\arcsin x\\,dx = \\dfrac{2x^2+1}{4}\\arcsin x - \\dfrac{x\\sqrt{1-x^2}}{4} + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-by-parts.q054",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "integration by parts",
      "definite integral",
      "logarithm"
    ],
    "questionText": "Evaluate $\\displaystyle\\int_0^1 \\arctan x\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose $u$ and $dv$",
          "workingLatex": "u = \\arctan x, \\quad dv = dx",
          "explanation": "Inverse trig as $u$ in LIATE.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Indefinite antiderivative",
          "workingLatex": "x\\arctan x - \\dfrac{1}{2}\\ln(1+x^2)",
          "explanation": "Standard result from integration by parts.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate at $x = 1$",
          "workingLatex": "1 \\cdot \\dfrac{\\pi}{4} - \\dfrac{1}{2}\\ln 2 = \\dfrac{\\pi}{4} - \\dfrac{1}{2}\\ln 2",
          "explanation": "$\\arctan 1 = \\dfrac{\\pi}{4}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate at $x = 0$",
          "workingLatex": "0 - 0 = 0",
          "explanation": "$\\arctan 0 = 0$ and $\\ln 1 = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Subtract",
          "workingLatex": "\\dfrac{\\pi}{4} - \\dfrac{1}{2}\\ln 2",
          "explanation": "Upper minus lower.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Exact form",
          "workingLatex": "\\dfrac{\\pi}{4} - \\dfrac{1}{2}\\ln 2",
          "explanation": "Leave in exact logarithmic form.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Geometric meaning",
          "workingLatex": "\\text{Area under } \\arctan x \\text{ on } [0,1]",
          "explanation": "Positive since $\\arctan x \\ge 0$ on $[0,1]$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Alternative",
          "workingLatex": "\\text{Parts directly on the definite integral}",
          "explanation": "$[x\\arctan x]_0^1 - \\int_0^1 \\dfrac{x}{1+x^2}\\,dx$ gives the same result.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Numerical sense",
          "workingLatex": "\\approx 0.439",
          "explanation": "Positive and less than $\\dfrac{\\pi}{4}$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Final answer",
          "workingLatex": "\\dfrac{\\pi}{4} - \\dfrac{1}{2}\\ln 2",
          "explanation": "Required exact value.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Link to the product rule",
          "workingLatex": "\\frac{d}{dx}(uv) = u\\dfrac{dv}{dx} + v\\dfrac{du}{dx}",
          "explanation": "Integration by parts reverses the product rule for differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Comment on LIATE",
          "workingLatex": "\\text{LIATE guides the choice of } u",
          "explanation": "Choosing $u$ from the earliest LIATE category usually simplifies the second integral.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Watch for sign errors",
          "workingLatex": "\\text{Track minus signs when finding } v",
          "explanation": "Trig integrals and negative exponentials often introduce sign changes.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_0^1 \\arctan x\\,dx = \\dfrac{\\pi}{4} - \\dfrac{1}{2}\\ln 2$."
    }
  },
  {
    "id": "al.y2.pure.integration-by-parts.q055",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "tags": [
      "integration by parts",
      "exam",
      "multi-part",
      "cyclic"
    ],
    "questionText": "(a) Show that $\\displaystyle\\int e^x\\sin x\\,dx = \\dfrac{e^x}{2}(\\sin x - \\cos x) + c$. (b) Hence evaluate $\\displaystyle\\int_0^{\\pi/4} e^x\\sin x\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Part (a): let $I = \\int e^x\\sin x\\,dx$",
          "workingLatex": "I = \\int e^x\\sin x\\,dx",
          "explanation": "Name the integral for cyclic solution.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "First application",
          "workingLatex": "u = \\sin x, \\; dv = e^x\\,dx",
          "explanation": "Standard choice.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "After first parts",
          "workingLatex": "I = e^x\\sin x - \\int e^x\\cos x\\,dx",
          "explanation": "Cosine integral appears.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Second application",
          "workingLatex": "\\int e^x\\cos x\\,dx = e^x\\cos x + I",
          "explanation": "Original integral returns.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve",
          "workingLatex": "I = \\dfrac{e^x}{2}(\\sin x - \\cos x) + c",
          "explanation": "Part (a) shown.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Part (b): evaluate at limits",
          "workingLatex": "\\left[\\dfrac{e^x}{2}(\\sin x - \\cos x)\\right]_0^{\\pi/4}",
          "explanation": "Use the result from part (a).",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "At $x = \\pi/4$",
          "workingLatex": "\\dfrac{e^{\\pi/4}}{2}\\left(\\dfrac{1}{\\sqrt{2}} - \\dfrac{1}{\\sqrt{2}}\\right) = 0",
          "explanation": "Sine and cosine are equal at $\\pi/4$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "At $x = 0$",
          "workingLatex": "\\dfrac{1}{2}(0 - 1) = -\\dfrac{1}{2}",
          "explanation": "Lower limit contribution.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Subtract",
          "workingLatex": "0 - (-\\dfrac{1}{2}) = \\dfrac{1}{2}",
          "explanation": "Part (b) answer.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Hence link",
          "workingLatex": "\\text{Part (a) antiderivative used directly in (b)}",
          "explanation": "Exam 'hence' questions reward using the earlier result.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check",
          "workingLatex": "\\dfrac{1}{2} > 0",
          "explanation": "Small positive interval integral.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Final answers",
          "workingLatex": "(a)\\ \\dfrac{e^x}{2}(\\sin x - \\cos x) + c, \\quad (b)\\ \\dfrac{1}{2}",
          "explanation": "Both parts complete.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Link to the product rule",
          "workingLatex": "\\frac{d}{dx}(uv) = u\\dfrac{dv}{dx} + v\\dfrac{du}{dx}",
          "explanation": "Integration by parts reverses the product rule for differentiation.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\displaystyle\\int e^x\\sin x\\,dx = \\dfrac{e^x}{2}(\\sin x - \\cos x) + c$. (b) $\\displaystyle\\int_0^{\\pi/4} e^x\\sin x\\,dx = \\dfrac{1}{2}$."
    }
  },
  {
    "id": "al.y2.pure.integration-by-parts.q056",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "tags": [
      "integration by parts",
      "repeated",
      "trigonometry"
    ],
    "questionText": "Find $\\displaystyle\\int x^3\\sin x\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Plan three applications",
          "workingLatex": "u = x^3 \\Rightarrow \\text{three parts}",
          "explanation": "Cubic polynomial needs three reductions.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "First application",
          "workingLatex": "x^3(-\\cos x) + 3\\int x^2\\cos x\\,dx",
          "explanation": "Differentiate $x^3$ to $3x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Second: $\\int x^2\\cos x\\,dx$",
          "workingLatex": "x^2\\sin x + 2x\\cos x - 2\\sin x",
          "explanation": "Known result from two applications.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute",
          "workingLatex": "-x^3\\cos x + 3x^2\\sin x + 6x\\cos x - 6\\sin x + c",
          "explanation": "Multiply the inner result by $3$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Collect trig terms",
          "workingLatex": "(3x^2-6)\\sin x + (6x - x^3)\\cos x + c",
          "explanation": "Group sines and cosines.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Tabular method",
          "workingLatex": "\\text{Efficient for } x^3\\sin x",
          "explanation": "Differentiate $x^3$ three times; integrate $\\sin x$ three times.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Sign alternation",
          "workingLatex": "\\text{Alternating signs in tabular method}",
          "explanation": "Careful tracking prevents sign errors.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify",
          "workingLatex": "\\frac{d}{dx}[(3x^2-6)\\sin x + (6x-x^3)\\cos x] = x^3\\sin x",
          "explanation": "Differentiation confirms.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Pattern",
          "workingLatex": "n \\text{ applications for } x^n\\sin x",
          "explanation": "General rule for polynomial–trig.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Final answer",
          "workingLatex": "(3x^2-6)\\sin x + (6x - x^3)\\cos x + c",
          "explanation": "Required antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Link to the product rule",
          "workingLatex": "\\frac{d}{dx}(uv) = u\\dfrac{dv}{dx} + v\\dfrac{du}{dx}",
          "explanation": "Integration by parts reverses the product rule for differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Comment on LIATE",
          "workingLatex": "\\text{LIATE guides the choice of } u",
          "explanation": "Choosing $u$ from the earliest LIATE category usually simplifies the second integral.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Watch for sign errors",
          "workingLatex": "\\text{Track minus signs when finding } v",
          "explanation": "Trig integrals and negative exponentials often introduce sign changes.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int x^3\\sin x\\,dx = (3x^2-6)\\sin x + (6x - x^3)\\cos x + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-by-parts.q057",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "tags": [
      "integration by parts",
      "cyclic",
      "exponential"
    ],
    "questionText": "Find $\\displaystyle\\int e^{2x}\\sin(3x)\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Let $I = \\int e^{2x}\\sin(3x)\\,dx$",
          "workingLatex": "I = \\int e^{2x}\\sin(3x)\\,dx",
          "explanation": "Cyclic integral with scaled arguments.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "First application",
          "workingLatex": "u = \\sin(3x), \\; dv = e^{2x}\\,dx",
          "explanation": "Either factor can be $u$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "After first parts",
          "workingLatex": "I = \\dfrac{e^{2x}}{2}\\sin(3x) - \\dfrac{3}{2}\\int e^{2x}\\cos(3x)\\,dx",
          "explanation": "Factor $\\dfrac{3}{2}$ from differentiating $\\sin(3x)$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Second application on cosine integral",
          "workingLatex": "\\int e^{2x}\\cos(3x)\\,dx = \\dfrac{e^{2x}}{2}\\cos(3x) + \\dfrac{3}{2}I",
          "explanation": "Original $I$ reappears.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute",
          "workingLatex": "I = \\dfrac{e^{2x}}{2}\\sin(3x) - \\dfrac{3}{2}\\left(\\dfrac{e^{2x}}{2}\\cos(3x) + \\dfrac{3}{2}I\\right)",
          "explanation": "Replace the cosine integral.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Collect $I$ terms",
          "workingLatex": "I\\left(1 + \\dfrac{9}{4}\\right) = e^{2x}\\left(\\dfrac{\\sin(3x)}{2} - \\dfrac{3\\cos(3x)}{4}\\right)",
          "explanation": "Solve algebraically.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify coefficient",
          "workingLatex": "I = \\dfrac{4}{13}e^{2x}\\left(\\dfrac{\\sin(3x)}{2} - \\dfrac{3\\cos(3x)}{4}\\right) + c",
          "explanation": "Divide by $\\dfrac{13}{4}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Tidy form",
          "workingLatex": "I = \\dfrac{e^{2x}}{13}(2\\sin(3x) - 3\\cos(3x)) + c",
          "explanation": "Standard final form.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "General pattern",
          "workingLatex": "a^2+b^2 \\text{ in denominator for } e^{ax}\\sin(bx)",
          "explanation": "Here $4+9=13$ appears in the denominator.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Verify",
          "workingLatex": "\\text{Differentiate the answer}",
          "explanation": "Confirmation by differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Link to the product rule",
          "workingLatex": "\\frac{d}{dx}(uv) = u\\dfrac{dv}{dx} + v\\dfrac{du}{dx}",
          "explanation": "Integration by parts reverses the product rule for differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Comment on LIATE",
          "workingLatex": "\\text{LIATE guides the choice of } u",
          "explanation": "Choosing $u$ from the earliest LIATE category usually simplifies the second integral.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Watch for sign errors",
          "workingLatex": "\\text{Track minus signs when finding } v",
          "explanation": "Trig integrals and negative exponentials often introduce sign changes.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int e^{2x}\\sin(3x)\\,dx = \\dfrac{e^{2x}}{13}(2\\sin(3x) - 3\\cos(3x)) + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-by-parts.q058",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "value",
    "tags": [
      "integration by parts",
      "definite integral",
      "exam"
    ],
    "questionText": "(a) Find $\\displaystyle\\int x^2 e^x\\,dx$. (b) Hence evaluate $\\displaystyle\\int_0^1 x^2 e^x\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Part (a): first application",
          "workingLatex": "u = x^2, \\; dv = e^x\\,dx",
          "explanation": "Degree $2$ needs two applications.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Second application",
          "workingLatex": "e^x(x^2 - 2x + 2) + c",
          "explanation": "Standard repeated parts result.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Part (a) complete",
          "workingLatex": "e^x(x^2 - 2x + 2) + c",
          "explanation": "Indefinite antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Part (b): evaluate at $x=1$",
          "workingLatex": "e(1 - 2 + 2) = e",
          "explanation": "Substitute $x=1$ into $e^x(x^2-2x+2)$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate at $x=0$",
          "workingLatex": "1(0 - 0 + 2) = 2",
          "explanation": "Substitute $x=0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Subtract",
          "workingLatex": "e - 2",
          "explanation": "Upper minus lower.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Hence justification",
          "workingLatex": "\\text{Used antiderivative from (a)}",
          "explanation": "Direct use of part (a) — no need to redo parts.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check sign",
          "workingLatex": "e - 2 > 0",
          "explanation": "$x^2 e^x > 0$ on $(0,1)$, so integral is positive.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Numerical",
          "workingLatex": "e - 2 \\approx 0.718",
          "explanation": "Reasonable magnitude.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Final answers",
          "workingLatex": "(a)\\ e^x(x^2-2x+2)+c, \\quad (b)\\ e-2",
          "explanation": "Both parts answered.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Alternative for (b)",
          "workingLatex": "\\text{Parts twice with limits}",
          "explanation": "Longer but valid without part (a).",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Exam structure",
          "workingLatex": "\\text{Indefinite first, definite hence}",
          "explanation": "Typical A-Level multi-part integration question.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Link to the product rule",
          "workingLatex": "\\frac{d}{dx}(uv) = u\\dfrac{dv}{dx} + v\\dfrac{du}{dx}",
          "explanation": "Integration by parts reverses the product rule for differentiation.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\displaystyle\\int x^2 e^x\\,dx = e^x(x^2 - 2x + 2) + c$. (b) $\\displaystyle\\int_0^1 x^2 e^x\\,dx = e - 2$."
    }
  },
  {
    "id": "al.y2.pure.integration-by-parts.q059",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "tags": [
      "integration by parts",
      "logarithm",
      "definite"
    ],
    "questionText": "Evaluate $\\displaystyle\\int_1^{e^2} \\dfrac{\\ln x}{x}\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise form",
          "workingLatex": "u = \\ln x, \\; dv = \\dfrac{1}{x}\\,dx",
          "explanation": "Alternatively substitute $w = \\ln x$ directly.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitution method",
          "workingLatex": "w = \\ln x, \\; dw = \\dfrac{1}{x}\\,dx",
          "explanation": "This is $\\int w\\,dw$ after substitution.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Change limits",
          "workingLatex": "x=1 \\Rightarrow w=0, \\quad x=e^2 \\Rightarrow w=2",
          "explanation": "Convert to $w$-limits.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate",
          "workingLatex": "\\int_0^2 w\\,dw = \\left[\\dfrac{w^2}{2}\\right]_0^2 = 2",
          "explanation": "Simple power integral.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Parts viewpoint",
          "workingLatex": "u = \\ln x, \\; dv = \\dfrac{dx}{x} \\Rightarrow v = \\ln x",
          "explanation": "Parts gives $\\dfrac{1}{2}(\\ln x)^2$ — same result.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "2",
          "explanation": "Exact value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check",
          "workingLatex": "\\dfrac{1}{2}(\\ln e^2)^2 - \\dfrac{1}{2}(\\ln 1)^2 = 2",
          "explanation": "Using the antiderivative $\\dfrac{1}{2}(\\ln x)^2$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Domain",
          "workingLatex": "x > 0",
          "explanation": "Logarithm requires positive $x$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Connection",
          "workingLatex": "\\int \\dfrac{\\ln x}{x}\\,dx = \\dfrac{1}{2}(\\ln x)^2 + c",
          "explanation": "Standard logarithmic integral.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Final answer",
          "workingLatex": "2",
          "explanation": "Required definite value.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Link to the product rule",
          "workingLatex": "\\frac{d}{dx}(uv) = u\\dfrac{dv}{dx} + v\\dfrac{du}{dx}",
          "explanation": "Integration by parts reverses the product rule for differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Comment on LIATE",
          "workingLatex": "\\text{LIATE guides the choice of } u",
          "explanation": "Choosing $u$ from the earliest LIATE category usually simplifies the second integral.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Watch for sign errors",
          "workingLatex": "\\text{Track minus signs when finding } v",
          "explanation": "Trig integrals and negative exponentials often introduce sign changes.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_1^{e^2} \\dfrac{\\ln x}{x}\\,dx = 2$."
    }
  },
  {
    "id": "al.y2.pure.integration-by-parts.q060",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "tags": [
      "integration by parts",
      "verification",
      "exam"
    ],
    "questionText": "(a) Use integration by parts to show $\\displaystyle\\int \\ln x\\,dx = x\\ln x - x + c$. (b) Differentiate your answer to verify. (c) Evaluate $\\displaystyle\\int_1^e \\ln x\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Part (a): set up",
          "workingLatex": "u = \\ln x, \\; dv = dx",
          "explanation": "LIATE prioritises logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply parts",
          "workingLatex": "x\\ln x - \\int x \\cdot \\dfrac{1}{x}\\,dx = x\\ln x - x + c",
          "explanation": "The integral simplifies to $\\int 1\\,dx$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Part (a) shown",
          "workingLatex": "x\\ln x - x + c",
          "explanation": "As required.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Part (b): differentiate",
          "workingLatex": "F'(x) = \\ln x + 1 - 1 = \\ln x",
          "explanation": "Product rule on $x\\ln x$; derivative of $-x$ is $-1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verification",
          "workingLatex": "F'(x) = \\ln x",
          "explanation": "Confirmed.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Part (c): evaluate antiderivative",
          "workingLatex": "\\left[x\\ln x - x\\right]_1^e",
          "explanation": "Use part (a) result.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "At $x=e$",
          "workingLatex": "e - e = 0",
          "explanation": "$\\ln e = 1$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "At $x=1$",
          "workingLatex": "0 - 1 = -1",
          "explanation": "$\\ln 1 = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Subtract",
          "workingLatex": "0 - (-1) = 1",
          "explanation": "Part (c) answer.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Interpretation",
          "workingLatex": "\\int_1^e \\ln x\\,dx = 1",
          "explanation": "Area under $\\ln x$ from $1$ to $e$ equals $1$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Exam marks",
          "workingLatex": "\\text{Show, verify, evaluate}",
          "explanation": "Three linked skills in one question.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Summary",
          "workingLatex": "(a) shown, (b) verified, (c) $1$",
          "explanation": "Complete response.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Link to the product rule",
          "workingLatex": "\\frac{d}{dx}(uv) = u\\dfrac{dv}{dx} + v\\dfrac{du}{dx}",
          "explanation": "Integration by parts reverses the product rule for differentiation.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\displaystyle\\int \\ln x\\,dx = x\\ln x - x + c$. (b) Verified. (c) $\\displaystyle\\int_1^e \\ln x\\,dx = 1$."
    }
  },
  {
    "id": "al.y2.pure.integration-by-parts.q061",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "tags": [
      "integration by parts",
      "inverse trigonometry",
      "definite"
    ],
    "questionText": "Evaluate $\\displaystyle\\int_0^1 x\\arctan x\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Antiderivative from parts",
          "workingLatex": "\\dfrac{1}{2}(x^2+1)\\arctan x - \\dfrac{x}{2}",
          "explanation": "Standard result for $\\int x\\arctan x\\,dx$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "At $x=1$",
          "workingLatex": "\\dfrac{1}{2}(2)\\cdot\\dfrac{\\pi}{4} - \\dfrac{1}{2} = \\dfrac{\\pi}{4} - \\dfrac{1}{2}",
          "explanation": "$\\arctan 1 = \\dfrac{\\pi}{4}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "At $x=0$",
          "workingLatex": "\\dfrac{1}{2}(1)(0) - 0 = 0",
          "explanation": "Lower limit vanishes.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Answer",
          "workingLatex": "\\dfrac{\\pi}{4} - \\dfrac{1}{2}",
          "explanation": "Exact value.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Positive check",
          "workingLatex": "\\dfrac{\\pi}{4} - \\dfrac{1}{2} > 0",
          "explanation": "$x\\arctan x \\ge 0$ on $[0,1]$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Parts directly",
          "workingLatex": "u = \\arctan x, \\; dv = x\\,dx \\text{ with limits}",
          "explanation": "Can apply parts on the definite integral without finding indefinite form first.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Remaining integral",
          "workingLatex": "\\int_0^1 \\dfrac{x^2}{1+x^2}\\,dx = 1 - \\dfrac{\\pi}{4}",
          "explanation": "After splitting the fraction.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Combine",
          "workingLatex": "\\dfrac{\\pi}{4} - \\dfrac{1}{2}",
          "explanation": "Same result via direct method.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Exact form",
          "workingLatex": "\\dfrac{\\pi}{4} - \\dfrac{1}{2}",
          "explanation": "Do not decimalise.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Final answer",
          "workingLatex": "\\dfrac{\\pi}{4} - \\dfrac{1}{2}",
          "explanation": "Required value.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Link to the product rule",
          "workingLatex": "\\frac{d}{dx}(uv) = u\\dfrac{dv}{dx} + v\\dfrac{du}{dx}",
          "explanation": "Integration by parts reverses the product rule for differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Comment on LIATE",
          "workingLatex": "\\text{LIATE guides the choice of } u",
          "explanation": "Choosing $u$ from the earliest LIATE category usually simplifies the second integral.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Watch for sign errors",
          "workingLatex": "\\text{Track minus signs when finding } v",
          "explanation": "Trig integrals and negative exponentials often introduce sign changes.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_0^1 x\\arctan x\\,dx = \\dfrac{\\pi}{4} - \\dfrac{1}{2}$."
    }
  },
  {
    "id": "al.y2.pure.integration-by-parts.q062",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "expression",
    "tags": [
      "integration by parts",
      "cyclic",
      "definite"
    ],
    "questionText": "Evaluate $\\displaystyle\\int_0^{\\pi} e^x\\cos x\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Indefinite form",
          "workingLatex": "J = \\dfrac{e^x}{2}(\\cos x + \\sin x) + c",
          "explanation": "Cyclic parts result for cosine.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "At $x = \\pi$",
          "workingLatex": "\\dfrac{e^{\\pi}}{2}(-1 + 0) = -\\dfrac{e^{\\pi}}{2}",
          "explanation": "$\\cos\\pi = -1$, $\\sin\\pi = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "At $x = 0$",
          "workingLatex": "\\dfrac{1}{2}(1 + 0) = \\dfrac{1}{2}",
          "explanation": "At origin: $\\cos 0 = 1$, $\\sin 0 = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Subtract",
          "workingLatex": "-\\dfrac{e^{\\pi}}{2} - \\dfrac{1}{2} = -\\dfrac{e^{\\pi}+1}{2}",
          "explanation": "Upper minus lower.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Sign interpretation",
          "workingLatex": "\\text{Negative net area}",
          "explanation": "$e^x\\cos x$ is negative for most of $[0,\\pi]$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare to sine version",
          "workingLatex": "\\int_0^{\\pi} e^x\\sin x\\,dx = \\dfrac{e^{\\pi}+1}{2}",
          "explanation": "Cosine and sine versions differ by sign pattern.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Exact answer",
          "workingLatex": "-\\dfrac{e^{\\pi}+1}{2}",
          "explanation": "Leave exact.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Magnitude",
          "workingLatex": "\\dfrac{e^{\\pi}+1}{2}",
          "explanation": "Absolute value matches the sine integral.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Alternative",
          "workingLatex": "\\text{Parts twice on definite integral}",
          "explanation": "Direct method with limits.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Final answer",
          "workingLatex": "-\\dfrac{e^{\\pi}+1}{2}",
          "explanation": "Required value.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Link to the product rule",
          "workingLatex": "\\frac{d}{dx}(uv) = u\\dfrac{dv}{dx} + v\\dfrac{du}{dx}",
          "explanation": "Integration by parts reverses the product rule for differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Comment on LIATE",
          "workingLatex": "\\text{LIATE guides the choice of } u",
          "explanation": "Choosing $u$ from the earliest LIATE category usually simplifies the second integral.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Watch for sign errors",
          "workingLatex": "\\text{Track minus signs when finding } v",
          "explanation": "Trig integrals and negative exponentials often introduce sign changes.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_0^{\\pi} e^x\\cos x\\,dx = -\\dfrac{e^{\\pi}+1}{2}$."
    }
  },
  {
    "id": "al.y2.pure.integration-by-parts.q063",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "tags": [
      "integration by parts",
      "repeated"
    ],
    "questionText": "Find $\\displaystyle\\int x^4 e^x\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Four applications needed",
          "workingLatex": "u = x^4",
          "explanation": "Degree $4$ polynomial.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Pattern for $\\int x^n e^x\\,dx$",
          "workingLatex": "e^x \\cdot P_n(x) \\text{ where } \\deg P = n",
          "explanation": "Result is $e^x$ times a degree-$n$ polynomial.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Systematic reduction",
          "workingLatex": "x^4 e^x - 4\\int x^3 e^x\\,dx",
          "explanation": "First step.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Use known results iteratively",
          "workingLatex": "e^x(x^4 - 4x^3 + 12x^2 - 24x + 24) + c",
          "explanation": "Apply reduction down to $\\int e^x\\,dx$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Factor",
          "workingLatex": "e^x(x^4 - 4x^3 + 12x^2 - 24x + 24) + c",
          "explanation": "Factored form.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Coefficient pattern",
          "workingLatex": "1, -4, 12, -24, 24",
          "explanation": "Related to factorial-like coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Tabular method recommended",
          "workingLatex": "\\text{Fastest for degree } 4",
          "explanation": "Differentiate $x^4$ four times; integrate $e^x$ four times.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify",
          "workingLatex": "\\frac{d}{dx}[e^x(x^4-4x^3+12x^2-24x+24)] = x^4 e^x",
          "explanation": "Differentiation confirms.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Generalisation",
          "workingLatex": "\\int x^n e^x\\,dx \\text{ needs } n \\text{ parts}",
          "explanation": "Pattern for all positive integers $n$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Final answer",
          "workingLatex": "e^x(x^4 - 4x^3 + 12x^2 - 24x + 24) + c",
          "explanation": "Required antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Link to the product rule",
          "workingLatex": "\\frac{d}{dx}(uv) = u\\dfrac{dv}{dx} + v\\dfrac{du}{dx}",
          "explanation": "Integration by parts reverses the product rule for differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Comment on LIATE",
          "workingLatex": "\\text{LIATE guides the choice of } u",
          "explanation": "Choosing $u$ from the earliest LIATE category usually simplifies the second integral.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Watch for sign errors",
          "workingLatex": "\\text{Track minus signs when finding } v",
          "explanation": "Trig integrals and negative exponentials often introduce sign changes.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int x^4 e^x\\,dx = e^x(x^4 - 4x^3 + 12x^2 - 24x + 24) + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-by-parts.q064",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "tags": [
      "integration by parts",
      "exam",
      "LIATE"
    ],
    "questionText": "(a) Explain why $u = \\ln x$ is chosen for $\\displaystyle\\int x\\ln x\\,dx$. (b) Find the integral. (c) Verify by differentiating.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Part (a): identify types",
          "workingLatex": "x \\text{ algebraic; } \\ln x \\text{ logarithmic}",
          "explanation": "Both appear in LIATE.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "LIATE comparison",
          "workingLatex": "L \\text{ before } A",
          "explanation": "Logarithmic has higher priority.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Consequence",
          "workingLatex": "u = \\ln x \\Rightarrow du = \\dfrac{1}{x}\\,dx",
          "explanation": "Differentiating removes the log; $dv = x\\,dx$ integrates easily.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Part (b): apply parts",
          "workingLatex": "\\dfrac{x^2}{2}\\ln x - \\dfrac{x^2}{4} + c",
          "explanation": "Standard evaluation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Part (b) answer",
          "workingLatex": "\\dfrac{x^2}{2}\\ln x - \\dfrac{x^2}{4} + c",
          "explanation": "Antiderivative stated.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Part (c): differentiate",
          "workingLatex": "F'(x) = x\\ln x",
          "explanation": "Product rule confirms.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Wrong choice?",
          "workingLatex": "u = x \\text{ also works but is not LIATE-optimal}",
          "explanation": "LIATE gives the most efficient route.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Domain",
          "workingLatex": "x > 0",
          "explanation": "Required for $\\ln x$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Exam marks",
          "workingLatex": "\\text{Explain, integrate, verify}",
          "explanation": "Three skills tested.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Summary",
          "workingLatex": "(a) LIATE, (b) $\\dfrac{x^2}{2}\\ln x - \\dfrac{x^2}{4} + c$, (c) verified",
          "explanation": "Complete.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Hence use",
          "workingLatex": "\\text{Enables } \\int_1^e x\\ln x\\,dx",
          "explanation": "Definite integrals follow from the antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Final response",
          "workingLatex": "\\text{All three parts complete}",
          "explanation": "Full marks structure.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Link to the product rule",
          "workingLatex": "\\frac{d}{dx}(uv) = u\\dfrac{dv}{dx} + v\\dfrac{du}{dx}",
          "explanation": "Integration by parts reverses the product rule for differentiation.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) LIATE: logarithmic before algebraic, so $u = \\ln x$. (b) $\\displaystyle\\int x\\ln x\\,dx = \\dfrac{x^2}{2}\\ln x - \\dfrac{x^2}{4} + c$. (c) Verified."
    }
  },
  {
    "id": "al.y2.pure.integration-by-parts.q065",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "integration by parts",
      "definite integral"
    ],
    "questionText": "Evaluate $\\displaystyle\\int_0^{\\pi/2} x\\sin x\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Antiderivative",
          "workingLatex": "-x\\cos x + \\sin x",
          "explanation": "From integration by parts with $u=x$, $dv=\\sin x\\,dx$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "At $x = \\pi/2$",
          "workingLatex": "-\\dfrac{\\pi}{2}(0) + 1 = 1",
          "explanation": "$\\cos\\dfrac{\\pi}{2}=0$, $\\sin\\dfrac{\\pi}{2}=1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "At $x = 0$",
          "workingLatex": "0 + 0 = 0",
          "explanation": "Both terms vanish.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Answer",
          "workingLatex": "1",
          "explanation": "Exact value.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Geometric sense",
          "workingLatex": "\\text{Positive area}",
          "explanation": "$x\\sin x \\ge 0$ on $[0, \\pi/2]$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Parts on definite integral",
          "workingLatex": "\\left[-x\\cos x\\right]_0^{\\pi/2} + \\int_0^{\\pi/2}\\cos x\\,dx",
          "explanation": "Direct evaluation with limits.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Confirm $\\int_0^{\\pi/2}\\cos x\\,dx = 1$",
          "workingLatex": "\\left[\\sin x\\right]_0^{\\pi/2} = 1",
          "explanation": "Standard trig integral.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "No $+c$",
          "workingLatex": "\\text{Definite integral}",
          "explanation": "Constants cancel.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Comparison",
          "workingLatex": "\\int_0^{\\pi} x\\sin x\\,dx = \\pi",
          "explanation": "Longer interval gives larger value.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Final answer",
          "workingLatex": "1",
          "explanation": "Required value.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Link to the product rule",
          "workingLatex": "\\frac{d}{dx}(uv) = u\\dfrac{dv}{dx} + v\\dfrac{du}{dx}",
          "explanation": "Integration by parts reverses the product rule for differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Comment on LIATE",
          "workingLatex": "\\text{LIATE guides the choice of } u",
          "explanation": "Choosing $u$ from the earliest LIATE category usually simplifies the second integral.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Watch for sign errors",
          "workingLatex": "\\text{Track minus signs when finding } v",
          "explanation": "Trig integrals and negative exponentials often introduce sign changes.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_0^{\\pi/2} x\\sin x\\,dx = 1$."
    }
  },
  {
    "id": "al.y2.pure.integration-by-parts.q066",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "expression",
    "tags": [
      "integration by parts",
      "inverse trigonometry"
    ],
    "questionText": "Find $\\displaystyle\\int \\arccos x\\,dx$ for $|x| \\le 1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose $u$ and $dv$",
          "workingLatex": "u = \\arccos x, \\quad dv = dx",
          "explanation": "Inverse trig in LIATE.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find $du$ and $v$",
          "workingLatex": "du = -\\dfrac{1}{\\sqrt{1-x^2}}\\,dx, \\quad v = x",
          "explanation": "Derivative of $\\arccos x$ has a minus sign.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply parts",
          "workingLatex": "x\\arccos x + \\int \\dfrac{x}{\\sqrt{1-x^2}}\\,dx",
          "explanation": "Minus from $du$ becomes plus.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate remaining",
          "workingLatex": "x\\arccos x - \\sqrt{1-x^2} + c",
          "explanation": "$\\int \\dfrac{x}{\\sqrt{1-x^2}}\\,dx = -\\sqrt{1-x^2}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Alternative via identity",
          "workingLatex": "\\arccos x = \\dfrac{\\pi}{2} - \\arcsin x",
          "explanation": "Relates to $\\int \\arcsin x\\,dx$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Consistency check",
          "workingLatex": "x\\arccos x - \\sqrt{1-x^2}",
          "explanation": "Standard result.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Domain",
          "workingLatex": "|x| \\le 1",
          "explanation": "Required for inverse cosine.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "At $x=0$",
          "workingLatex": "0 - 1 = -1",
          "explanation": "Quick evaluation check.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Differentiate",
          "workingLatex": "\\frac{d}{dx}[x\\arccos x - \\sqrt{1-x^2}] = \\arccos x",
          "explanation": "Verification.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Final answer",
          "workingLatex": "x\\arccos x - \\sqrt{1-x^2} + c",
          "explanation": "Required antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Link to the product rule",
          "workingLatex": "\\frac{d}{dx}(uv) = u\\dfrac{dv}{dx} + v\\dfrac{du}{dx}",
          "explanation": "Integration by parts reverses the product rule for differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Comment on LIATE",
          "workingLatex": "\\text{LIATE guides the choice of } u",
          "explanation": "Choosing $u$ from the earliest LIATE category usually simplifies the second integral.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Watch for sign errors",
          "workingLatex": "\\text{Track minus signs when finding } v",
          "explanation": "Trig integrals and negative exponentials often introduce sign changes.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int \\arccos x\\,dx = x\\arccos x - \\sqrt{1-x^2} + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-by-parts.q067",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "tags": [
      "integration by parts",
      "exam",
      "cyclic",
      "verification"
    ],
    "questionText": "(a) Find $\\displaystyle\\int e^x\\cos x\\,dx$. (b) Verify by differentiating. (c) Evaluate $\\displaystyle\\int_0^{\\pi/2} e^x\\cos x\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Part (a): let $J = \\int e^x\\cos x\\,dx$",
          "workingLatex": "J = \\int e^x\\cos x\\,dx",
          "explanation": "Cyclic integral.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply parts twice",
          "workingLatex": "J = \\dfrac{e^x}{2}(\\cos x + \\sin x) + c",
          "explanation": "Standard cyclic result.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Part (b): differentiate",
          "workingLatex": "F'(x) = e^x\\cos x",
          "explanation": "Product rule on $\\dfrac{e^x}{2}(\\cos x + \\sin x)$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Verification complete",
          "workingLatex": "F'(x) = e^x\\cos x",
          "explanation": "Confirmed.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Part (c): at $x = \\pi/2$",
          "workingLatex": "\\dfrac{e^{\\pi/2}}{2}(0 + 1) = \\dfrac{e^{\\pi/2}}{2}",
          "explanation": "Cosine zero, sine one.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "At $x = 0$",
          "workingLatex": "\\dfrac{1}{2}(1 + 0) = \\dfrac{1}{2}",
          "explanation": "Cosine one, sine zero.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Subtract",
          "workingLatex": "\\dfrac{e^{\\pi/2}-1}{2}",
          "explanation": "Part (c) answer.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Positive check",
          "workingLatex": "\\dfrac{e^{\\pi/2}-1}{2} > 0",
          "explanation": "$e^x\\cos x \\ge 0$ on $[0, \\pi/2]$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Exam structure",
          "workingLatex": "\\text{Indefinite, verify, definite}",
          "explanation": "Full integration by parts assessment.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Hence link",
          "workingLatex": "\\text{Part (c) uses (a)}",
          "explanation": "No need to redo cyclic algebra.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Exact form",
          "workingLatex": "\\dfrac{e^{\\pi/2}-1}{2}",
          "explanation": "Leave exact.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Summary",
          "workingLatex": "(a) $\\dfrac{e^x}{2}(\\cos x+\\sin x)+c$, (b) verified, (c) $\\dfrac{e^{\\pi/2}-1}{2}$",
          "explanation": "All parts complete.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Link to the product rule",
          "workingLatex": "\\frac{d}{dx}(uv) = u\\dfrac{dv}{dx} + v\\dfrac{du}{dx}",
          "explanation": "Integration by parts reverses the product rule for differentiation.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\displaystyle\\int e^x\\cos x\\,dx = \\dfrac{e^x}{2}(\\cos x + \\sin x) + c$. (b) Verified. (c) $\\displaystyle\\int_0^{\\pi/2} e^x\\cos x\\,dx = \\dfrac{e^{\\pi/2}-1}{2}$."
    }
  },
  {
    "id": "al.y2.pure.integration-by-parts.q068",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "tags": [
      "integration by parts",
      "logarithm",
      "repeated"
    ],
    "questionText": "Find $\\displaystyle\\int x(\\ln x)^2\\,dx$ for $x > 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose $u$ and $dv$",
          "workingLatex": "u = (\\ln x)^2, \\quad dv = x\\,dx",
          "explanation": "Logarithmic squared still leads LIATE.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find $du$ and $v$",
          "workingLatex": "du = \\dfrac{2\\ln x}{x}\\,dx, \\quad v = \\dfrac{x^2}{2}",
          "explanation": "Chain rule on $(\\ln x)^2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply parts",
          "workingLatex": "\\dfrac{x^2}{2}(\\ln x)^2 - \\int x\\ln x\\,dx",
          "explanation": "Reduces to $\\int x\\ln x\\,dx$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute $\\int x\\ln x\\,dx$",
          "workingLatex": "\\dfrac{x^2}{2}(\\ln x)^2 - \\dfrac{x^2}{2}\\ln x + \\dfrac{x^2}{4} + c",
          "explanation": "Use the known result.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Factor $x^2$",
          "workingLatex": "\\dfrac{x^2}{4}\\left[2(\\ln x)^2 - 2\\ln x + 1\\right] + c",
          "explanation": "Optional factored form.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Two applications conceptually",
          "workingLatex": "\\text{One for } (\\ln x)^2, \\text{ one implicit in } x\\ln x",
          "explanation": "Repeated logarithmic parts.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify",
          "workingLatex": "\\frac{d}{dx}\\left[\\dfrac{x^2}{2}(\\ln x)^2 - \\dfrac{x^2}{2}\\ln x + \\dfrac{x^2}{4}\\right] = x(\\ln x)^2",
          "explanation": "Differentiation confirms.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Domain",
          "workingLatex": "x > 0",
          "explanation": "Logarithm requires positive $x$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Pattern",
          "workingLatex": "\\int x(\\ln x)^n\\,dx \\text{ needs } n \\text{ reductions}",
          "explanation": "Generalisation.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Final answer",
          "workingLatex": "\\dfrac{x^2}{2}(\\ln x)^2 - \\dfrac{x^2}{2}\\ln x + \\dfrac{x^2}{4} + c",
          "explanation": "Required antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Link to the product rule",
          "workingLatex": "\\frac{d}{dx}(uv) = u\\dfrac{dv}{dx} + v\\dfrac{du}{dx}",
          "explanation": "Integration by parts reverses the product rule for differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Comment on LIATE",
          "workingLatex": "\\text{LIATE guides the choice of } u",
          "explanation": "Choosing $u$ from the earliest LIATE category usually simplifies the second integral.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Watch for sign errors",
          "workingLatex": "\\text{Track minus signs when finding } v",
          "explanation": "Trig integrals and negative exponentials often introduce sign changes.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int x(\\ln x)^2\\,dx = \\dfrac{x^2}{2}(\\ln x)^2 - \\dfrac{x^2}{2}\\ln x + \\dfrac{x^2}{4} + c$."
    }
  },
  {
    "id": "al.y2.pure.integration-by-parts.q069",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "tags": [
      "integration by parts",
      "exam",
      "multi-part"
    ],
    "questionText": "(a) State LIATE. (b) Find $\\displaystyle\\int x^2\\ln x\\,dx$. (c) Hence evaluate $\\displaystyle\\int_1^e x^2\\ln x\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Part (a): LIATE",
          "workingLatex": "L — Logarithmic, I — Inverse trig, A — Algebraic, T — Trig, E — Exponential",
          "explanation": "Priority order for choosing $u$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Part (b): apply LIATE",
          "workingLatex": "u = \\ln x, \\; dv = x^2\\,dx",
          "explanation": "Logarithm before algebraic.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find $du$ and $v$",
          "workingLatex": "du = \\dfrac{1}{x}\\,dx, \\; v = \\dfrac{x^3}{3}",
          "explanation": "Standard preparation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply parts",
          "workingLatex": "\\dfrac{x^3}{3}\\ln x - \\dfrac{x^3}{9} + c",
          "explanation": "Integrate $\\dfrac{x^2}{3}$ after simplification.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Part (b) answer",
          "workingLatex": "\\dfrac{x^3}{3}\\ln x - \\dfrac{x^3}{9} + c",
          "explanation": "Indefinite integral.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Part (c): at $x=e$",
          "workingLatex": "\\dfrac{e^3}{3} - \\dfrac{e^3}{9} = \\dfrac{2e^3}{9}",
          "explanation": "$\\ln e = 1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "At $x=1$",
          "workingLatex": "0 - \\dfrac{1}{9} = -\\dfrac{1}{9}",
          "explanation": "$\\ln 1 = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Subtract",
          "workingLatex": "\\dfrac{2e^3}{9} + \\dfrac{1}{9} = \\dfrac{2e^3+1}{9}",
          "explanation": "Part (c) answer.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Hence",
          "workingLatex": "\\text{Used antiderivative from (b)}",
          "explanation": "Direct evaluation.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Exact form",
          "workingLatex": "\\dfrac{2e^3+1}{9}",
          "explanation": "Leave exact.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Exam tip",
          "workingLatex": "\\text{State LIATE, integrate, use hence}",
          "explanation": "Structured response.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Summary",
          "workingLatex": "(a) LIATE stated, (b) antiderivative found, (c) $\\dfrac{2e^3+1}{9}$",
          "explanation": "Complete exam question.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Link to the product rule",
          "workingLatex": "\\frac{d}{dx}(uv) = u\\dfrac{dv}{dx} + v\\dfrac{du}{dx}",
          "explanation": "Integration by parts reverses the product rule for differentiation.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) LIATE: Logarithmic, Inverse trig, Algebraic, Trigonometric, Exponential. (b) $\\displaystyle\\int x^2\\ln x\\,dx = \\dfrac{x^3}{3}\\ln x - \\dfrac{x^3}{9} + c$. (c) $\\displaystyle\\int_1^e x^2\\ln x\\,dx = \\dfrac{2e^3+1}{9}$."
    }
  },
  {
    "id": "al.y2.pure.integration-by-parts.q070",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Integration by parts",
    "subtopicId": "al.y2.pure.integration-by-parts",
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "written",
    "tags": [
      "integration by parts",
      "exam",
      "multi-part",
      "verification"
    ],
    "questionText": "(a) Show that $\\displaystyle\\int x e^x\\,dx = e^x(x-1)+c$. (b) Show that $\\displaystyle\\int x^2 e^x\\,dx = e^x(x^2-2x+2)+c$. (c) Verify part (b) by differentiating. (d) Evaluate $\\displaystyle\\int_0^1 x^2 e^x\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Part (a): one application",
          "workingLatex": "u = x, \\; dv = e^x\\,dx \\Rightarrow e^x(x-1)+c",
          "explanation": "Basic integration by parts.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Part (a) shown",
          "workingLatex": "e^x(x-1)+c",
          "explanation": "As required.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Part (b): first application",
          "workingLatex": "u = x^2, \\; dv = e^x\\,dx",
          "explanation": "Degree $2$ needs two applications.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute part (a)",
          "workingLatex": "x^2 e^x - 2e^x(x-1)+c = e^x(x^2-2x+2)+c",
          "explanation": "Use the result from part (a) for $\\int x e^x\\,dx$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Part (b) shown",
          "workingLatex": "e^x(x^2-2x+2)+c",
          "explanation": "As required.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Part (c): differentiate",
          "workingLatex": "F'(x) = e^x(x^2-2x+2) + e^x(2x-2) = x^2 e^x",
          "explanation": "Product rule on $e^x$ times the polynomial.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verification complete",
          "workingLatex": "F'(x) = x^2 e^x",
          "explanation": "Part (c) confirmed.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Part (d): evaluate at limits",
          "workingLatex": "\\left[e^x(x^2-2x+2)\\right]_0^1",
          "explanation": "Use part (b) antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "At $x=1$",
          "workingLatex": "e(1-2+2) = e",
          "explanation": "Upper limit.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "At $x=0$",
          "workingLatex": "1(2) = 2",
          "explanation": "Lower limit.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Subtract",
          "workingLatex": "e - 2",
          "explanation": "Part (d) answer.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Exam summary",
          "workingLatex": "(a)–(d) complete with hence links",
          "explanation": "Full marks: show, show, verify, evaluate.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Technique recap",
          "workingLatex": "\\text{Repeated parts for } x^n e^x",
          "explanation": "Each power reduction uses the previous result.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Pattern",
          "workingLatex": "\\int x^n e^x\\,dx \\text{ gives degree-}n \\text{ polynomial times } e^x",
          "explanation": "General structure.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Final answers",
          "workingLatex": "(a)–(d) as above",
          "explanation": "Complete multi-part response.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\displaystyle\\int x e^x\\,dx = e^x(x-1)+c$. (b) $\\displaystyle\\int x^2 e^x\\,dx = e^x(x^2-2x+2)+c$. (c) Verified. (d) $\\displaystyle\\int_0^1 x^2 e^x\\,dx = e-2$."
    }
  }
];
