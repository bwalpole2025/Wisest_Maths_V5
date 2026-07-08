import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "questionDiagram": null,
    "id": "al.y2.pure.parametric-differentiation.q001",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "parametric differentiation",
      "gradient"
    ],
    "questionText": "A curve $C$ has parametric equations $x = t^{2}$ and $y = 3t$. Find $\\dfrac{dy}{dx}$ in terms of $t$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate x with respect to t",
          "workingLatex": "\\dot{x} = \\dfrac{dx}{dt} = 2t",
          "explanation": "The curve is given parametrically, so we first find how $x$ changes as the parameter $t$ changes. This is written $\\dot{x}$ or $\\dfrac{dx}{dt}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate y with respect to t",
          "workingLatex": "\\dot{y} = \\dfrac{dy}{dt} = 3",
          "explanation": "In the same way, differentiate the formula for $y$ with respect to $t$ to obtain $\\dot{y}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the parametric gradient formula",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{\\dot{y}}{\\dot{x}}",
          "explanation": "Because both $x$ and $y$ depend on $t$, the chain rule gives $\\dfrac{dy}{dx} = \\dfrac{dy/dt}{dx/dt}$, provided $\\dot{x} \\neq 0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the derivatives",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{3}{2t}",
          "explanation": "Replace $\\dot{y}$ and $\\dot{x}$ with the expressions just found.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the gradient",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{3}{2t}",
          "explanation": "Cancel common factors where possible so the gradient is in its simplest form in terms of $t$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the result",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{3}{2t}",
          "explanation": "This gives the slope of the tangent to the curve at any value of $t$ for which $\\dot{x} \\neq 0$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dy}{dx} = \\dfrac{3}{2t}$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "questionDiagram": null,
    "id": "al.y2.pure.parametric-differentiation.q002",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "parametric differentiation",
      "gradient"
    ],
    "questionText": "A curve $C$ has parametric equations $x = 4t$ and $y = t^{3} - 2$. Find $\\dfrac{dy}{dx}$ in terms of $t$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate x with respect to t",
          "workingLatex": "\\dot{x} = \\dfrac{dx}{dt} = 4",
          "explanation": "The curve is given parametrically, so we first find how $x$ changes as the parameter $t$ changes. This is written $\\dot{x}$ or $\\dfrac{dx}{dt}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate y with respect to t",
          "workingLatex": "\\dot{y} = \\dfrac{dy}{dt} = 3t^{2}",
          "explanation": "In the same way, differentiate the formula for $y$ with respect to $t$ to obtain $\\dot{y}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the parametric gradient formula",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{\\dot{y}}{\\dot{x}}",
          "explanation": "Because both $x$ and $y$ depend on $t$, the chain rule gives $\\dfrac{dy}{dx} = \\dfrac{dy/dt}{dx/dt}$, provided $\\dot{x} \\neq 0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the derivatives",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{3t^{2}}{4}",
          "explanation": "Replace $\\dot{y}$ and $\\dot{x}$ with the expressions just found.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the gradient",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{3t^{2}}{4}",
          "explanation": "Cancel common factors where possible so the gradient is in its simplest form in terms of $t$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the result",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{3t^{2}}{4}",
          "explanation": "This gives the slope of the tangent to the curve at any value of $t$ for which $\\dot{x} \\neq 0$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dy}{dx} = \\dfrac{3t^{2}}{4}$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "questionDiagram": null,
    "id": "al.y2.pure.parametric-differentiation.q003",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "parametric differentiation",
      "gradient"
    ],
    "questionText": "A curve $C$ has parametric equations $x = t^{2} + 1$ and $y = 2t^{3}$. Find $\\dfrac{dy}{dx}$ in terms of $t$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate x with respect to t",
          "workingLatex": "\\dot{x} = \\dfrac{dx}{dt} = 2t",
          "explanation": "The curve is given parametrically, so we first find how $x$ changes as the parameter $t$ changes. This is written $\\dot{x}$ or $\\dfrac{dx}{dt}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate y with respect to t",
          "workingLatex": "\\dot{y} = \\dfrac{dy}{dt} = 6t^{2}",
          "explanation": "In the same way, differentiate the formula for $y$ with respect to $t$ to obtain $\\dot{y}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the parametric gradient formula",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{\\dot{y}}{\\dot{x}}",
          "explanation": "Because both $x$ and $y$ depend on $t$, the chain rule gives $\\dfrac{dy}{dx} = \\dfrac{dy/dt}{dx/dt}$, provided $\\dot{x} \\neq 0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the derivatives",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{6t^{2}}{2t}",
          "explanation": "Replace $\\dot{y}$ and $\\dot{x}$ with the expressions just found.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the gradient",
          "workingLatex": "\\dfrac{dy}{dx} = 3t",
          "explanation": "Cancel common factors where possible so the gradient is in its simplest form in terms of $t$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the result",
          "workingLatex": "\\dfrac{dy}{dx} = 3t",
          "explanation": "This gives the slope of the tangent to the curve at any value of $t$ for which $\\dot{x} \\neq 0$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dy}{dx} = 3t$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "questionDiagram": null,
    "id": "al.y2.pure.parametric-differentiation.q004",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "parametric differentiation",
      "gradient"
    ],
    "questionText": "A curve $C$ has parametric equations $x = 3t - 1$ and $y = t^{2} + 4t$. Find $\\dfrac{dy}{dx}$ in terms of $t$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate x with respect to t",
          "workingLatex": "\\dot{x} = \\dfrac{dx}{dt} = 3",
          "explanation": "The curve is given parametrically, so we first find how $x$ changes as the parameter $t$ changes. This is written $\\dot{x}$ or $\\dfrac{dx}{dt}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate y with respect to t",
          "workingLatex": "\\dot{y} = \\dfrac{dy}{dt} = 2t + 4",
          "explanation": "In the same way, differentiate the formula for $y$ with respect to $t$ to obtain $\\dot{y}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the parametric gradient formula",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{\\dot{y}}{\\dot{x}}",
          "explanation": "Because both $x$ and $y$ depend on $t$, the chain rule gives $\\dfrac{dy}{dx} = \\dfrac{dy/dt}{dx/dt}$, provided $\\dot{x} \\neq 0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the derivatives",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{2t + 4}{3}",
          "explanation": "Replace $\\dot{y}$ and $\\dot{x}$ with the expressions just found.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the gradient",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{2t + 4}{3}",
          "explanation": "Cancel common factors where possible so the gradient is in its simplest form in terms of $t$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the result",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{2t + 4}{3}",
          "explanation": "This gives the slope of the tangent to the curve at any value of $t$ for which $\\dot{x} \\neq 0$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dy}{dx} = \\dfrac{2t + 4}{3}$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "questionDiagram": null,
    "id": "al.y2.pure.parametric-differentiation.q005",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "parametric differentiation",
      "gradient"
    ],
    "questionText": "A curve $C$ has parametric equations $x = t^{3}$ and $y = t^{2}$. Find $\\dfrac{dy}{dx}$ in terms of $t$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate x with respect to t",
          "workingLatex": "\\dot{x} = \\dfrac{dx}{dt} = 3t^{2}",
          "explanation": "The curve is given parametrically, so we first find how $x$ changes as the parameter $t$ changes. This is written $\\dot{x}$ or $\\dfrac{dx}{dt}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate y with respect to t",
          "workingLatex": "\\dot{y} = \\dfrac{dy}{dt} = 2t",
          "explanation": "In the same way, differentiate the formula for $y$ with respect to $t$ to obtain $\\dot{y}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the parametric gradient formula",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{\\dot{y}}{\\dot{x}}",
          "explanation": "Because both $x$ and $y$ depend on $t$, the chain rule gives $\\dfrac{dy}{dx} = \\dfrac{dy/dt}{dx/dt}$, provided $\\dot{x} \\neq 0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the derivatives",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{2t}{3t^{2}}",
          "explanation": "Replace $\\dot{y}$ and $\\dot{x}$ with the expressions just found.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the gradient",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{2}{3t}",
          "explanation": "Cancel common factors where possible so the gradient is in its simplest form in terms of $t$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the result",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{2}{3t}",
          "explanation": "This gives the slope of the tangent to the curve at any value of $t$ for which $\\dot{x} \\neq 0$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dy}{dx} = \\dfrac{2}{3t}$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "questionDiagram": null,
    "id": "al.y2.pure.parametric-differentiation.q006",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "parametric differentiation",
      "gradient"
    ],
    "questionText": "A curve $C$ has parametric equations $x = 2t^{2}$ and $y = 5t - 1$. Find $\\dfrac{dy}{dx}$ in terms of $t$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate x with respect to t",
          "workingLatex": "\\dot{x} = \\dfrac{dx}{dt} = 4t",
          "explanation": "The curve is given parametrically, so we first find how $x$ changes as the parameter $t$ changes. This is written $\\dot{x}$ or $\\dfrac{dx}{dt}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate y with respect to t",
          "workingLatex": "\\dot{y} = \\dfrac{dy}{dt} = 5",
          "explanation": "In the same way, differentiate the formula for $y$ with respect to $t$ to obtain $\\dot{y}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the parametric gradient formula",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{\\dot{y}}{\\dot{x}}",
          "explanation": "Because both $x$ and $y$ depend on $t$, the chain rule gives $\\dfrac{dy}{dx} = \\dfrac{dy/dt}{dx/dt}$, provided $\\dot{x} \\neq 0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the derivatives",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{5}{4t}",
          "explanation": "Replace $\\dot{y}$ and $\\dot{x}$ with the expressions just found.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the gradient",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{5}{4t}",
          "explanation": "Cancel common factors where possible so the gradient is in its simplest form in terms of $t$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the result",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{5}{4t}",
          "explanation": "This gives the slope of the tangent to the curve at any value of $t$ for which $\\dot{x} \\neq 0$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dy}{dx} = \\dfrac{5}{4t}$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "questionDiagram": null,
    "id": "al.y2.pure.parametric-differentiation.q007",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "parametric differentiation",
      "gradient"
    ],
    "questionText": "A curve $C$ has parametric equations $x = t$ and $y = t^{4}$. Find $\\dfrac{dy}{dx}$ in terms of $t$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate x with respect to t",
          "workingLatex": "\\dot{x} = \\dfrac{dx}{dt} = 1",
          "explanation": "The curve is given parametrically, so we first find how $x$ changes as the parameter $t$ changes. This is written $\\dot{x}$ or $\\dfrac{dx}{dt}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate y with respect to t",
          "workingLatex": "\\dot{y} = \\dfrac{dy}{dt} = 4t^{3}",
          "explanation": "In the same way, differentiate the formula for $y$ with respect to $t$ to obtain $\\dot{y}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the parametric gradient formula",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{\\dot{y}}{\\dot{x}}",
          "explanation": "Because both $x$ and $y$ depend on $t$, the chain rule gives $\\dfrac{dy}{dx} = \\dfrac{dy/dt}{dx/dt}$, provided $\\dot{x} \\neq 0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the derivatives",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{4t^{3}}{1}",
          "explanation": "Replace $\\dot{y}$ and $\\dot{x}$ with the expressions just found.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the gradient",
          "workingLatex": "\\dfrac{dy}{dx} = 4t^{3}",
          "explanation": "Cancel common factors where possible so the gradient is in its simplest form in terms of $t$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the result",
          "workingLatex": "\\dfrac{dy}{dx} = 4t^{3}",
          "explanation": "This gives the slope of the tangent to the curve at any value of $t$ for which $\\dot{x} \\neq 0$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dy}{dx} = 4t^{3}$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "questionDiagram": null,
    "id": "al.y2.pure.parametric-differentiation.q008",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "parametric differentiation",
      "gradient"
    ],
    "questionText": "A curve $C$ has parametric equations $x = t^{2} - 3t$ and $y = t + 2$. Find $\\dfrac{dy}{dx}$ in terms of $t$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate x with respect to t",
          "workingLatex": "\\dot{x} = \\dfrac{dx}{dt} = 2t - 3",
          "explanation": "The curve is given parametrically, so we first find how $x$ changes as the parameter $t$ changes. This is written $\\dot{x}$ or $\\dfrac{dx}{dt}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate y with respect to t",
          "workingLatex": "\\dot{y} = \\dfrac{dy}{dt} = 1",
          "explanation": "In the same way, differentiate the formula for $y$ with respect to $t$ to obtain $\\dot{y}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the parametric gradient formula",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{\\dot{y}}{\\dot{x}}",
          "explanation": "Because both $x$ and $y$ depend on $t$, the chain rule gives $\\dfrac{dy}{dx} = \\dfrac{dy/dt}{dx/dt}$, provided $\\dot{x} \\neq 0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the derivatives",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{1}{2t - 3}",
          "explanation": "Replace $\\dot{y}$ and $\\dot{x}$ with the expressions just found.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the gradient",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{1}{2t - 3}",
          "explanation": "Cancel common factors where possible so the gradient is in its simplest form in terms of $t$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the result",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{1}{2t - 3}",
          "explanation": "This gives the slope of the tangent to the curve at any value of $t$ for which $\\dot{x} \\neq 0$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dy}{dx} = \\dfrac{1}{2t - 3}$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "questionDiagram": null,
    "id": "al.y2.pure.parametric-differentiation.q009",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "parametric differentiation",
      "gradient"
    ],
    "questionText": "A curve $C$ has parametric equations $x = 5t$ and $y = t^{2} - t$. Find $\\dfrac{dy}{dx}$ in terms of $t$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate x with respect to t",
          "workingLatex": "\\dot{x} = \\dfrac{dx}{dt} = 5",
          "explanation": "The curve is given parametrically, so we first find how $x$ changes as the parameter $t$ changes. This is written $\\dot{x}$ or $\\dfrac{dx}{dt}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate y with respect to t",
          "workingLatex": "\\dot{y} = \\dfrac{dy}{dt} = 2t - 1",
          "explanation": "In the same way, differentiate the formula for $y$ with respect to $t$ to obtain $\\dot{y}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the parametric gradient formula",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{\\dot{y}}{\\dot{x}}",
          "explanation": "Because both $x$ and $y$ depend on $t$, the chain rule gives $\\dfrac{dy}{dx} = \\dfrac{dy/dt}{dx/dt}$, provided $\\dot{x} \\neq 0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the derivatives",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{2t - 1}{5}",
          "explanation": "Replace $\\dot{y}$ and $\\dot{x}$ with the expressions just found.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the gradient",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{2t - 1}{5}",
          "explanation": "Cancel common factors where possible so the gradient is in its simplest form in terms of $t$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the result",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{2t - 1}{5}",
          "explanation": "This gives the slope of the tangent to the curve at any value of $t$ for which $\\dot{x} \\neq 0$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dy}{dx} = \\dfrac{2t - 1}{5}$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "questionDiagram": null,
    "id": "al.y2.pure.parametric-differentiation.q010",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "parametric differentiation",
      "gradient"
    ],
    "questionText": "A curve $C$ has parametric equations $x = t^{3} - t$ and $y = 2t^{2}$. Find $\\dfrac{dy}{dx}$ in terms of $t$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate x with respect to t",
          "workingLatex": "\\dot{x} = \\dfrac{dx}{dt} = 3t^{2} - 1",
          "explanation": "The curve is given parametrically, so we first find how $x$ changes as the parameter $t$ changes. This is written $\\dot{x}$ or $\\dfrac{dx}{dt}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate y with respect to t",
          "workingLatex": "\\dot{y} = \\dfrac{dy}{dt} = 4t",
          "explanation": "In the same way, differentiate the formula for $y$ with respect to $t$ to obtain $\\dot{y}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the parametric gradient formula",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{\\dot{y}}{\\dot{x}}",
          "explanation": "Because both $x$ and $y$ depend on $t$, the chain rule gives $\\dfrac{dy}{dx} = \\dfrac{dy/dt}{dx/dt}$, provided $\\dot{x} \\neq 0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the derivatives",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{4t}{3t^{2} - 1}",
          "explanation": "Replace $\\dot{y}$ and $\\dot{x}$ with the expressions just found.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the gradient",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{4t}{3t^{2} - 1}",
          "explanation": "Cancel common factors where possible so the gradient is in its simplest form in terms of $t$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the result",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{4t}{3t^{2} - 1}",
          "explanation": "This gives the slope of the tangent to the curve at any value of $t$ for which $\\dot{x} \\neq 0$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dy}{dx} = \\dfrac{4t}{3t^{2} - 1}$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "questionDiagram": null,
    "id": "al.y2.pure.parametric-differentiation.q011",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "parametric differentiation",
      "gradient"
    ],
    "questionText": "A curve $C$ has parametric equations $x = t^{2} + 2t$ and $y = t^{3} - 1$. Find $\\dfrac{dy}{dx}$ in terms of $t$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate x with respect to t",
          "workingLatex": "\\dot{x} = \\dfrac{dx}{dt} = 2t + 2",
          "explanation": "The curve is given parametrically, so we first find how $x$ changes as the parameter $t$ changes. This is written $\\dot{x}$ or $\\dfrac{dx}{dt}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate y with respect to t",
          "workingLatex": "\\dot{y} = \\dfrac{dy}{dt} = 3t^{2}",
          "explanation": "In the same way, differentiate the formula for $y$ with respect to $t$ to obtain $\\dot{y}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the parametric gradient formula",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{\\dot{y}}{\\dot{x}}",
          "explanation": "Because both $x$ and $y$ depend on $t$, the chain rule gives $\\dfrac{dy}{dx} = \\dfrac{dy/dt}{dx/dt}$, provided $\\dot{x} \\neq 0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the derivatives",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{3t^{2}}{2t + 2}",
          "explanation": "Replace $\\dot{y}$ and $\\dot{x}$ with the expressions just found.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the gradient",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{3t^{2}}{2(t + 1)}",
          "explanation": "Cancel common factors where possible so the gradient is in its simplest form in terms of $t$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the result",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{3t^{2}}{2(t + 1)}",
          "explanation": "This gives the slope of the tangent to the curve at any value of $t$ for which $\\dot{x} \\neq 0$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dy}{dx} = \\dfrac{3t^{2}}{2(t + 1)}$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "questionDiagram": null,
    "id": "al.y2.pure.parametric-differentiation.q012",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "parametric differentiation",
      "gradient"
    ],
    "questionText": "A curve $C$ has parametric equations $x = t - 2$ and $y = t^{2} + 3t$. Find $\\dfrac{dy}{dx}$ in terms of $t$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate x with respect to t",
          "workingLatex": "\\dot{x} = \\dfrac{dx}{dt} = 1",
          "explanation": "The curve is given parametrically, so we first find how $x$ changes as the parameter $t$ changes. This is written $\\dot{x}$ or $\\dfrac{dx}{dt}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate y with respect to t",
          "workingLatex": "\\dot{y} = \\dfrac{dy}{dt} = 2t + 3",
          "explanation": "In the same way, differentiate the formula for $y$ with respect to $t$ to obtain $\\dot{y}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the parametric gradient formula",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{\\dot{y}}{\\dot{x}}",
          "explanation": "Because both $x$ and $y$ depend on $t$, the chain rule gives $\\dfrac{dy}{dx} = \\dfrac{dy/dt}{dx/dt}$, provided $\\dot{x} \\neq 0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the derivatives",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{2t + 3}{1}",
          "explanation": "Replace $\\dot{y}$ and $\\dot{x}$ with the expressions just found.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the gradient",
          "workingLatex": "\\dfrac{dy}{dx} = 2t + 3",
          "explanation": "Cancel common factors where possible so the gradient is in its simplest form in terms of $t$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the result",
          "workingLatex": "\\dfrac{dy}{dx} = 2t + 3",
          "explanation": "This gives the slope of the tangent to the curve at any value of $t$ for which $\\dot{x} \\neq 0$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dy}{dx} = 2t + 3$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "questionDiagram": null,
    "id": "al.y2.pure.parametric-differentiation.q013",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "parametric differentiation",
      "gradient",
      "direction"
    ],
    "questionText": "A curve has parametric equations $x = 2t$ and $y = t^{2} - 3t$. Find the gradient of the curve when $t = 1$, and state whether the curve is rising or falling there.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate x with respect to t",
          "workingLatex": "\\dot{x} = 2",
          "explanation": "Start by differentiating the expression for $x$ with respect to $t$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate y with respect to t",
          "workingLatex": "\\dot{y} = 2t - 3",
          "explanation": "Differentiate $y$ in the same way to find $\\dot{y}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form the gradient",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{2t - 3}{2} = \\dfrac{2t - 3}{2}",
          "explanation": "The gradient of the curve is the ratio $\\dfrac{\\dot{y}}{\\dot{x}}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute t = 1",
          "workingLatex": "\\dfrac{dy}{dx}\\bigg|_{t=1} = -\\dfrac{1}{2}",
          "explanation": "Putting $t = 1$ into the gradient formula gives its value at that point on the curve.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret the sign",
          "workingLatex": "\\dfrac{dy}{dx} < 0",
          "explanation": "A negative gradient means the curve is falling as $x$ increases through that point.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the conclusion",
          "workingLatex": "\\dfrac{dy}{dx} = -\\dfrac{1}{2} \\text{ (falling)}",
          "explanation": "At $t = 1$ the gradient is -\\dfrac{1}{2} and the curve is falling there.",
          "diagram": null
        }
      ],
      "finalAnswer": "At $t = 1$ the gradient is -\\dfrac{1}{2}, so the curve is falling there."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "questionDiagram": null,
    "id": "al.y2.pure.parametric-differentiation.q014",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "parametric differentiation",
      "gradient",
      "direction"
    ],
    "questionText": "A curve has parametric equations $x = t^{2}$ and $y = 3t + 1$. Find the gradient of the curve when $t = 2$, and state whether the curve is rising or falling there.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate x with respect to t",
          "workingLatex": "\\dot{x} = 2t",
          "explanation": "Start by differentiating the expression for $x$ with respect to $t$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate y with respect to t",
          "workingLatex": "\\dot{y} = 3",
          "explanation": "Differentiate $y$ in the same way to find $\\dot{y}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form the gradient",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{3}{2t} = \\dfrac{3}{2t}",
          "explanation": "The gradient of the curve is the ratio $\\dfrac{\\dot{y}}{\\dot{x}}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute t = 2",
          "workingLatex": "\\dfrac{dy}{dx}\\bigg|_{t=2} = \\dfrac{3}{4}",
          "explanation": "Putting $t = 2$ into the gradient formula gives its value at that point on the curve.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret the sign",
          "workingLatex": "\\dfrac{dy}{dx} > 0",
          "explanation": "A positive gradient means the curve is rising as $x$ increases through that point.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the conclusion",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{3}{4} \\text{ (rising)}",
          "explanation": "At $t = 2$ the gradient is \\dfrac{3}{4} and the curve is rising there.",
          "diagram": null
        }
      ],
      "finalAnswer": "At $t = 2$ the gradient is \\dfrac{3}{4}, so the curve is rising there."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "questionDiagram": null,
    "id": "al.y2.pure.parametric-differentiation.q015",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "parametric differentiation",
      "gradient",
      "direction"
    ],
    "questionText": "A curve has parametric equations $x = 3t$ and $y = t^{2}$. Find the gradient of the curve when $t = 3$, and state whether the curve is rising or falling there.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate x with respect to t",
          "workingLatex": "\\dot{x} = 3",
          "explanation": "Start by differentiating the expression for $x$ with respect to $t$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate y with respect to t",
          "workingLatex": "\\dot{y} = 2t",
          "explanation": "Differentiate $y$ in the same way to find $\\dot{y}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form the gradient",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{2t}{3} = \\dfrac{2t}{3}",
          "explanation": "The gradient of the curve is the ratio $\\dfrac{\\dot{y}}{\\dot{x}}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute t = 3",
          "workingLatex": "\\dfrac{dy}{dx}\\bigg|_{t=3} = 2",
          "explanation": "Putting $t = 3$ into the gradient formula gives its value at that point on the curve.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret the sign",
          "workingLatex": "\\dfrac{dy}{dx} > 0",
          "explanation": "A positive gradient means the curve is rising as $x$ increases through that point.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the conclusion",
          "workingLatex": "\\dfrac{dy}{dx} = 2 \\text{ (rising)}",
          "explanation": "At $t = 3$ the gradient is 2 and the curve is rising there.",
          "diagram": null
        }
      ],
      "finalAnswer": "At $t = 3$ the gradient is 2, so the curve is rising there."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "questionDiagram": null,
    "id": "al.y2.pure.parametric-differentiation.q016",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "parametric differentiation",
      "gradient",
      "direction"
    ],
    "questionText": "A curve has parametric equations $x = t + 1$ and $y = t^{2} - 4$. Find the gradient of the curve when $t = 2$, and state whether the curve is rising or falling there.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate x with respect to t",
          "workingLatex": "\\dot{x} = 1",
          "explanation": "Start by differentiating the expression for $x$ with respect to $t$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate y with respect to t",
          "workingLatex": "\\dot{y} = 2t",
          "explanation": "Differentiate $y$ in the same way to find $\\dot{y}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form the gradient",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{2t}{1} = 2t",
          "explanation": "The gradient of the curve is the ratio $\\dfrac{\\dot{y}}{\\dot{x}}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute t = 2",
          "workingLatex": "\\dfrac{dy}{dx}\\bigg|_{t=2} = 4",
          "explanation": "Putting $t = 2$ into the gradient formula gives its value at that point on the curve.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret the sign",
          "workingLatex": "\\dfrac{dy}{dx} > 0",
          "explanation": "A positive gradient means the curve is rising as $x$ increases through that point.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the conclusion",
          "workingLatex": "\\dfrac{dy}{dx} = 4 \\text{ (rising)}",
          "explanation": "At $t = 2$ the gradient is 4 and the curve is rising there.",
          "diagram": null
        }
      ],
      "finalAnswer": "At $t = 2$ the gradient is 4, so the curve is rising there."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "questionDiagram": null,
    "id": "al.y2.pure.parametric-differentiation.q017",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "parametric differentiation",
      "gradient",
      "direction"
    ],
    "questionText": "A curve has parametric equations $x = t^{2}$ and $y = t^{3} - t$. Find the gradient of the curve when $t = 1$, and state whether the curve is rising or falling there.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate x with respect to t",
          "workingLatex": "\\dot{x} = 2t",
          "explanation": "Start by differentiating the expression for $x$ with respect to $t$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate y with respect to t",
          "workingLatex": "\\dot{y} = 3t^{2} - 1",
          "explanation": "Differentiate $y$ in the same way to find $\\dot{y}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form the gradient",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{3t^{2} - 1}{2t} = \\dfrac{3t^{2} - 1}{2t}",
          "explanation": "The gradient of the curve is the ratio $\\dfrac{\\dot{y}}{\\dot{x}}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute t = 1",
          "workingLatex": "\\dfrac{dy}{dx}\\bigg|_{t=1} = 1",
          "explanation": "Putting $t = 1$ into the gradient formula gives its value at that point on the curve.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret the sign",
          "workingLatex": "\\dfrac{dy}{dx} > 0",
          "explanation": "A positive gradient means the curve is rising as $x$ increases through that point.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the conclusion",
          "workingLatex": "\\dfrac{dy}{dx} = 1 \\text{ (rising)}",
          "explanation": "At $t = 1$ the gradient is 1 and the curve is rising there.",
          "diagram": null
        }
      ],
      "finalAnswer": "At $t = 1$ the gradient is 1, so the curve is rising there."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "questionDiagram": null,
    "id": "al.y2.pure.parametric-differentiation.q018",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "parametric differentiation",
      "gradient",
      "direction"
    ],
    "questionText": "A curve has parametric equations $x = 4t - 1$ and $y = t^{2} + 2$. Find the gradient of the curve when $t = 4$, and state whether the curve is rising or falling there.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate x with respect to t",
          "workingLatex": "\\dot{x} = 4",
          "explanation": "Start by differentiating the expression for $x$ with respect to $t$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate y with respect to t",
          "workingLatex": "\\dot{y} = 2t",
          "explanation": "Differentiate $y$ in the same way to find $\\dot{y}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form the gradient",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{2t}{4} = \\dfrac{t}{2}",
          "explanation": "The gradient of the curve is the ratio $\\dfrac{\\dot{y}}{\\dot{x}}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute t = 4",
          "workingLatex": "\\dfrac{dy}{dx}\\bigg|_{t=4} = 2",
          "explanation": "Putting $t = 4$ into the gradient formula gives its value at that point on the curve.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret the sign",
          "workingLatex": "\\dfrac{dy}{dx} > 0",
          "explanation": "A positive gradient means the curve is rising as $x$ increases through that point.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the conclusion",
          "workingLatex": "\\dfrac{dy}{dx} = 2 \\text{ (rising)}",
          "explanation": "At $t = 4$ the gradient is 2 and the curve is rising there.",
          "diagram": null
        }
      ],
      "finalAnswer": "At $t = 4$ the gradient is 2, so the curve is rising there."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "questionDiagram": null,
    "id": "al.y2.pure.parametric-differentiation.q019",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "parametric differentiation",
      "gradient",
      "direction"
    ],
    "questionText": "A curve has parametric equations $x = t^{3}$ and $y = 2t^{2} - 5$. Find the gradient of the curve when $t = 2$, and state whether the curve is rising or falling there.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate x with respect to t",
          "workingLatex": "\\dot{x} = 3t^{2}",
          "explanation": "Start by differentiating the expression for $x$ with respect to $t$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate y with respect to t",
          "workingLatex": "\\dot{y} = 4t",
          "explanation": "Differentiate $y$ in the same way to find $\\dot{y}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form the gradient",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{4t}{3t^{2}} = \\dfrac{4}{3t}",
          "explanation": "The gradient of the curve is the ratio $\\dfrac{\\dot{y}}{\\dot{x}}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute t = 2",
          "workingLatex": "\\dfrac{dy}{dx}\\bigg|_{t=2} = \\dfrac{2}{3}",
          "explanation": "Putting $t = 2$ into the gradient formula gives its value at that point on the curve.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret the sign",
          "workingLatex": "\\dfrac{dy}{dx} > 0",
          "explanation": "A positive gradient means the curve is rising as $x$ increases through that point.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the conclusion",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{2}{3} \\text{ (rising)}",
          "explanation": "At $t = 2$ the gradient is \\dfrac{2}{3} and the curve is rising there.",
          "diagram": null
        }
      ],
      "finalAnswer": "At $t = 2$ the gradient is \\dfrac{2}{3}, so the curve is rising there."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "questionDiagram": null,
    "id": "al.y2.pure.parametric-differentiation.q020",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "parametric differentiation",
      "gradient",
      "direction"
    ],
    "questionText": "A curve has parametric equations $x = 2t^{2}$ and $y = t - 6$. Find the gradient of the curve when $t = 1$, and state whether the curve is rising or falling there.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate x with respect to t",
          "workingLatex": "\\dot{x} = 4t",
          "explanation": "Start by differentiating the expression for $x$ with respect to $t$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate y with respect to t",
          "workingLatex": "\\dot{y} = 1",
          "explanation": "Differentiate $y$ in the same way to find $\\dot{y}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form the gradient",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{1}{4t} = \\dfrac{1}{4t}",
          "explanation": "The gradient of the curve is the ratio $\\dfrac{\\dot{y}}{\\dot{x}}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute t = 1",
          "workingLatex": "\\dfrac{dy}{dx}\\bigg|_{t=1} = \\dfrac{1}{4}",
          "explanation": "Putting $t = 1$ into the gradient formula gives its value at that point on the curve.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret the sign",
          "workingLatex": "\\dfrac{dy}{dx} > 0",
          "explanation": "A positive gradient means the curve is rising as $x$ increases through that point.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the conclusion",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{1}{4} \\text{ (rising)}",
          "explanation": "At $t = 1$ the gradient is \\dfrac{1}{4} and the curve is rising there.",
          "diagram": null
        }
      ],
      "finalAnswer": "At $t = 1$ the gradient is \\dfrac{1}{4}, so the curve is rising there."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "questionDiagram": null,
    "id": "al.y2.pure.parametric-differentiation.q021",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "parametric differentiation",
      "gradient",
      "direction"
    ],
    "questionText": "A curve has parametric equations $x = t^{2} + 1$ and $y = 4t$. Find the gradient of the curve when $t = 2$, and state whether the curve is rising or falling there.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate x with respect to t",
          "workingLatex": "\\dot{x} = 2t",
          "explanation": "Start by differentiating the expression for $x$ with respect to $t$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate y with respect to t",
          "workingLatex": "\\dot{y} = 4",
          "explanation": "Differentiate $y$ in the same way to find $\\dot{y}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form the gradient",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{4}{2t} = \\dfrac{2}{t}",
          "explanation": "The gradient of the curve is the ratio $\\dfrac{\\dot{y}}{\\dot{x}}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute t = 2",
          "workingLatex": "\\dfrac{dy}{dx}\\bigg|_{t=2} = 1",
          "explanation": "Putting $t = 2$ into the gradient formula gives its value at that point on the curve.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret the sign",
          "workingLatex": "\\dfrac{dy}{dx} > 0",
          "explanation": "A positive gradient means the curve is rising as $x$ increases through that point.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the conclusion",
          "workingLatex": "\\dfrac{dy}{dx} = 1 \\text{ (rising)}",
          "explanation": "At $t = 2$ the gradient is 1 and the curve is rising there.",
          "diagram": null
        }
      ],
      "finalAnswer": "At $t = 2$ the gradient is 1, so the curve is rising there."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "questionDiagram": null,
    "id": "al.y2.pure.parametric-differentiation.q022",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "parametric differentiation",
      "gradient",
      "direction"
    ],
    "questionText": "A curve has parametric equations $x = 5t$ and $y = t^{3} - 3t$. Find the gradient of the curve when $t = 0$, and state whether the curve is rising or falling there.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate x with respect to t",
          "workingLatex": "\\dot{x} = 5",
          "explanation": "Start by differentiating the expression for $x$ with respect to $t$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate y with respect to t",
          "workingLatex": "\\dot{y} = 3t^{2} - 3",
          "explanation": "Differentiate $y$ in the same way to find $\\dot{y}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form the gradient",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{3t^{2} - 3}{5} = \\dfrac{3t^{2} - 3}{5}",
          "explanation": "The gradient of the curve is the ratio $\\dfrac{\\dot{y}}{\\dot{x}}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute t = 0",
          "workingLatex": "\\dfrac{dy}{dx}\\bigg|_{t=0} = -\\dfrac{3}{5}",
          "explanation": "Putting $t = 0$ into the gradient formula gives its value at that point on the curve.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret the sign",
          "workingLatex": "\\dfrac{dy}{dx} < 0",
          "explanation": "A negative gradient means the curve is falling as $x$ increases through that point.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the conclusion",
          "workingLatex": "\\dfrac{dy}{dx} = -\\dfrac{3}{5} \\text{ (falling)}",
          "explanation": "At $t = 0$ the gradient is -\\dfrac{3}{5} and the curve is falling there.",
          "diagram": null
        }
      ],
      "finalAnswer": "At $t = 0$ the gradient is -\\dfrac{3}{5}, so the curve is falling there."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "questionDiagram": null,
    "id": "al.y2.pure.parametric-differentiation.q023",
    "difficulty": "Easy",
    "marks": 5,
    "answerType": "equation",
    "tags": [
      "parametric differentiation",
      "tangent"
    ],
    "questionText": "A curve $C$ has parametric equations $x = t^{2}$ and $y = 2t$. Find the equation of the tangent to $C$ at the point where $t = 1$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate both coordinates",
          "workingLatex": "\\dot{x} = 2t, \\qquad \\dot{y} = 2",
          "explanation": "To find the tangent we need the gradient, which comes from differentiating $x$ and $y$ with respect to $t$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find dy/dx",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{2}{2t} = t",
          "explanation": "Divide $\\dot{y}$ by $\\dot{x}$ to obtain the slope of the tangent in terms of $t$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate the point at t = 1",
          "workingLatex": "x = 1, \\qquad y = 2",
          "explanation": "Substitute $t = 1$ into both parametric equations to locate the point of tangency.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the gradient at t = 1",
          "workingLatex": "m = 1",
          "explanation": "Put the same value of $t$ into $\\dfrac{dy}{dx}$ to get the tangent's slope at that point.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the tangent equation",
          "workingLatex": "y - 2 = 1(x - 1)",
          "explanation": "Use point–gradient form with the coordinates and slope just found.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify",
          "workingLatex": "y = x + 1",
          "explanation": "Expand and collect terms to give the tangent in a tidy form.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the tangent",
          "workingLatex": "y = x + 1",
          "explanation": "This is the equation of the tangent to the curve at the required point.",
          "diagram": null
        }
      ],
      "finalAnswer": "y = x + 1"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "questionDiagram": null,
    "id": "al.y2.pure.parametric-differentiation.q024",
    "difficulty": "Easy",
    "marks": 5,
    "answerType": "equation",
    "tags": [
      "parametric differentiation",
      "tangent"
    ],
    "questionText": "A curve $C$ has parametric equations $x = 2t$ and $y = t^{2} - 1$. Find the equation of the tangent to $C$ at the point where $t = 2$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate both coordinates",
          "workingLatex": "\\dot{x} = 2, \\qquad \\dot{y} = 2t",
          "explanation": "To find the tangent we need the gradient, which comes from differentiating $x$ and $y$ with respect to $t$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find dy/dx",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{2t}{2} = t",
          "explanation": "Divide $\\dot{y}$ by $\\dot{x}$ to obtain the slope of the tangent in terms of $t$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate the point at t = 2",
          "workingLatex": "x = 4, \\qquad y = 3",
          "explanation": "Substitute $t = 2$ into both parametric equations to locate the point of tangency.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the gradient at t = 2",
          "workingLatex": "m = 2",
          "explanation": "Put the same value of $t$ into $\\dfrac{dy}{dx}$ to get the tangent's slope at that point.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the tangent equation",
          "workingLatex": "y - 3 = 2(x - 4)",
          "explanation": "Use point–gradient form with the coordinates and slope just found.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify",
          "workingLatex": "y = 2x - 5",
          "explanation": "Expand and collect terms to give the tangent in a tidy form.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the tangent",
          "workingLatex": "y = 2x - 5",
          "explanation": "This is the equation of the tangent to the curve at the required point.",
          "diagram": null
        }
      ],
      "finalAnswer": "y = 2x - 5"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "questionDiagram": null,
    "id": "al.y2.pure.parametric-differentiation.q025",
    "difficulty": "Easy",
    "marks": 5,
    "answerType": "equation",
    "tags": [
      "parametric differentiation",
      "tangent"
    ],
    "questionText": "A curve $C$ has parametric equations $x = t$ and $y = t^{2} + 3$. Find the equation of the tangent to $C$ at the point where $t = 3$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate both coordinates",
          "workingLatex": "\\dot{x} = 1, \\qquad \\dot{y} = 2t",
          "explanation": "To find the tangent we need the gradient, which comes from differentiating $x$ and $y$ with respect to $t$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find dy/dx",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{2t}{1} = 2t",
          "explanation": "Divide $\\dot{y}$ by $\\dot{x}$ to obtain the slope of the tangent in terms of $t$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate the point at t = 3",
          "workingLatex": "x = 3, \\qquad y = 12",
          "explanation": "Substitute $t = 3$ into both parametric equations to locate the point of tangency.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the gradient at t = 3",
          "workingLatex": "m = 6",
          "explanation": "Put the same value of $t$ into $\\dfrac{dy}{dx}$ to get the tangent's slope at that point.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the tangent equation",
          "workingLatex": "y - 12 = 6(x - 3)",
          "explanation": "Use point–gradient form with the coordinates and slope just found.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify",
          "workingLatex": "y = 6x - 6",
          "explanation": "Expand and collect terms to give the tangent in a tidy form.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the tangent",
          "workingLatex": "y = 6x - 6",
          "explanation": "This is the equation of the tangent to the curve at the required point.",
          "diagram": null
        }
      ],
      "finalAnswer": "y = 6x - 6"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "questionDiagram": null,
    "id": "al.y2.pure.parametric-differentiation.q026",
    "difficulty": "Easy",
    "marks": 5,
    "answerType": "equation",
    "tags": [
      "parametric differentiation",
      "tangent"
    ],
    "questionText": "A curve $C$ has parametric equations $x = t^{2} + 1$ and $y = t^{3}$. Find the equation of the tangent to $C$ at the point where $t = 2$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate both coordinates",
          "workingLatex": "\\dot{x} = 2t, \\qquad \\dot{y} = 3t^{2}",
          "explanation": "To find the tangent we need the gradient, which comes from differentiating $x$ and $y$ with respect to $t$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find dy/dx",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{3t^{2}}{2t} = \\dfrac{3t}{2}",
          "explanation": "Divide $\\dot{y}$ by $\\dot{x}$ to obtain the slope of the tangent in terms of $t$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate the point at t = 2",
          "workingLatex": "x = 5, \\qquad y = 8",
          "explanation": "Substitute $t = 2$ into both parametric equations to locate the point of tangency.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the gradient at t = 2",
          "workingLatex": "m = 3",
          "explanation": "Put the same value of $t$ into $\\dfrac{dy}{dx}$ to get the tangent's slope at that point.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the tangent equation",
          "workingLatex": "y - 8 = 3(x - 5)",
          "explanation": "Use point–gradient form with the coordinates and slope just found.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify",
          "workingLatex": "y = 3x - 7",
          "explanation": "Expand and collect terms to give the tangent in a tidy form.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the tangent",
          "workingLatex": "y = 3x - 7",
          "explanation": "This is the equation of the tangent to the curve at the required point.",
          "diagram": null
        }
      ],
      "finalAnswer": "y = 3x - 7"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "questionDiagram": null,
    "id": "al.y2.pure.parametric-differentiation.q027",
    "difficulty": "Easy",
    "marks": 5,
    "answerType": "equation",
    "tags": [
      "parametric differentiation",
      "tangent"
    ],
    "questionText": "A curve $C$ has parametric equations $x = 3t$ and $y = t^{2}$. Find the equation of the tangent to $C$ at the point where $t = 3$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate both coordinates",
          "workingLatex": "\\dot{x} = 3, \\qquad \\dot{y} = 2t",
          "explanation": "To find the tangent we need the gradient, which comes from differentiating $x$ and $y$ with respect to $t$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find dy/dx",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{2t}{3} = \\dfrac{2t}{3}",
          "explanation": "Divide $\\dot{y}$ by $\\dot{x}$ to obtain the slope of the tangent in terms of $t$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate the point at t = 3",
          "workingLatex": "x = 9, \\qquad y = 9",
          "explanation": "Substitute $t = 3$ into both parametric equations to locate the point of tangency.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the gradient at t = 3",
          "workingLatex": "m = 2",
          "explanation": "Put the same value of $t$ into $\\dfrac{dy}{dx}$ to get the tangent's slope at that point.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the tangent equation",
          "workingLatex": "y - 9 = 2(x - 9)",
          "explanation": "Use point–gradient form with the coordinates and slope just found.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify",
          "workingLatex": "y = 2x - 9",
          "explanation": "Expand and collect terms to give the tangent in a tidy form.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the tangent",
          "workingLatex": "y = 2x - 9",
          "explanation": "This is the equation of the tangent to the curve at the required point.",
          "diagram": null
        }
      ],
      "finalAnswer": "y = 2x - 9"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "questionDiagram": null,
    "id": "al.y2.pure.parametric-differentiation.q028",
    "difficulty": "Easy",
    "marks": 5,
    "answerType": "equation",
    "tags": [
      "parametric differentiation",
      "tangent"
    ],
    "questionText": "A curve $C$ has parametric equations $x = t^{3}$ and $y = t^{2}$. Find the equation of the tangent to $C$ at the point where $t = 1$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate both coordinates",
          "workingLatex": "\\dot{x} = 3t^{2}, \\qquad \\dot{y} = 2t",
          "explanation": "To find the tangent we need the gradient, which comes from differentiating $x$ and $y$ with respect to $t$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find dy/dx",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{2t}{3t^{2}} = \\dfrac{2}{3t}",
          "explanation": "Divide $\\dot{y}$ by $\\dot{x}$ to obtain the slope of the tangent in terms of $t$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate the point at t = 1",
          "workingLatex": "x = 1, \\qquad y = 1",
          "explanation": "Substitute $t = 1$ into both parametric equations to locate the point of tangency.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the gradient at t = 1",
          "workingLatex": "m = \\dfrac{2}{3}",
          "explanation": "Put the same value of $t$ into $\\dfrac{dy}{dx}$ to get the tangent's slope at that point.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the tangent equation",
          "workingLatex": "y - 1 = \\dfrac{2}{3}(x - 1)",
          "explanation": "Use point–gradient form with the coordinates and slope just found.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify",
          "workingLatex": "y = \\dfrac{2}{3}x + \\dfrac{1}{3}",
          "explanation": "Expand and collect terms to give the tangent in a tidy form.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the tangent",
          "workingLatex": "y = \\dfrac{2}{3}x + \\dfrac{1}{3}",
          "explanation": "This is the equation of the tangent to the curve at the required point.",
          "diagram": null
        }
      ],
      "finalAnswer": "y = \\dfrac{2}{3}x + \\dfrac{1}{3}"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "questionDiagram": null,
    "id": "al.y2.pure.parametric-differentiation.q029",
    "difficulty": "Easy",
    "marks": 5,
    "answerType": "equation",
    "tags": [
      "parametric differentiation",
      "tangent"
    ],
    "questionText": "A curve $C$ has parametric equations $x = t + 2$ and $y = t^{2} - 4t$. Find the equation of the tangent to $C$ at the point where $t = 3$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate both coordinates",
          "workingLatex": "\\dot{x} = 1, \\qquad \\dot{y} = 2t - 4",
          "explanation": "To find the tangent we need the gradient, which comes from differentiating $x$ and $y$ with respect to $t$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find dy/dx",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{2t - 4}{1} = 2t - 4",
          "explanation": "Divide $\\dot{y}$ by $\\dot{x}$ to obtain the slope of the tangent in terms of $t$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate the point at t = 3",
          "workingLatex": "x = 5, \\qquad y = -3",
          "explanation": "Substitute $t = 3$ into both parametric equations to locate the point of tangency.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the gradient at t = 3",
          "workingLatex": "m = 2",
          "explanation": "Put the same value of $t$ into $\\dfrac{dy}{dx}$ to get the tangent's slope at that point.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the tangent equation",
          "workingLatex": "y - -3 = 2(x - 5)",
          "explanation": "Use point–gradient form with the coordinates and slope just found.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify",
          "workingLatex": "y = 2x - 13",
          "explanation": "Expand and collect terms to give the tangent in a tidy form.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the tangent",
          "workingLatex": "y = 2x - 13",
          "explanation": "This is the equation of the tangent to the curve at the required point.",
          "diagram": null
        }
      ],
      "finalAnswer": "y = 2x - 13"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "questionDiagram": null,
    "id": "al.y2.pure.parametric-differentiation.q030",
    "difficulty": "Easy",
    "marks": 5,
    "answerType": "equation",
    "tags": [
      "parametric differentiation",
      "tangent"
    ],
    "questionText": "A curve $C$ has parametric equations $x = t^{2}$ and $y = 4t - 1$. Find the equation of the tangent to $C$ at the point where $t = 2$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate both coordinates",
          "workingLatex": "\\dot{x} = 2t, \\qquad \\dot{y} = 4",
          "explanation": "To find the tangent we need the gradient, which comes from differentiating $x$ and $y$ with respect to $t$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find dy/dx",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{4}{2t} = \\dfrac{2}{t}",
          "explanation": "Divide $\\dot{y}$ by $\\dot{x}$ to obtain the slope of the tangent in terms of $t$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate the point at t = 2",
          "workingLatex": "x = 4, \\qquad y = 7",
          "explanation": "Substitute $t = 2$ into both parametric equations to locate the point of tangency.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the gradient at t = 2",
          "workingLatex": "m = 1",
          "explanation": "Put the same value of $t$ into $\\dfrac{dy}{dx}$ to get the tangent's slope at that point.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the tangent equation",
          "workingLatex": "y - 7 = 1(x - 4)",
          "explanation": "Use point–gradient form with the coordinates and slope just found.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify",
          "workingLatex": "y = x + 3",
          "explanation": "Expand and collect terms to give the tangent in a tidy form.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the tangent",
          "workingLatex": "y = x + 3",
          "explanation": "This is the equation of the tangent to the curve at the required point.",
          "diagram": null
        }
      ],
      "finalAnswer": "y = x + 3"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "questionDiagram": null,
    "id": "al.y2.pure.parametric-differentiation.q031",
    "difficulty": "Easy",
    "marks": 5,
    "answerType": "equation",
    "tags": [
      "parametric differentiation",
      "tangent"
    ],
    "questionText": "A curve $C$ has parametric equations $x = 4t$ and $y = t^{3} + 1$. Find the equation of the tangent to $C$ at the point where $t = 2$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate both coordinates",
          "workingLatex": "\\dot{x} = 4, \\qquad \\dot{y} = 3t^{2}",
          "explanation": "To find the tangent we need the gradient, which comes from differentiating $x$ and $y$ with respect to $t$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find dy/dx",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{3t^{2}}{4} = \\dfrac{3t^{2}}{4}",
          "explanation": "Divide $\\dot{y}$ by $\\dot{x}$ to obtain the slope of the tangent in terms of $t$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate the point at t = 2",
          "workingLatex": "x = 8, \\qquad y = 9",
          "explanation": "Substitute $t = 2$ into both parametric equations to locate the point of tangency.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the gradient at t = 2",
          "workingLatex": "m = 3",
          "explanation": "Put the same value of $t$ into $\\dfrac{dy}{dx}$ to get the tangent's slope at that point.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the tangent equation",
          "workingLatex": "y - 9 = 3(x - 8)",
          "explanation": "Use point–gradient form with the coordinates and slope just found.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify",
          "workingLatex": "y = 3x - 15",
          "explanation": "Expand and collect terms to give the tangent in a tidy form.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the tangent",
          "workingLatex": "y = 3x - 15",
          "explanation": "This is the equation of the tangent to the curve at the required point.",
          "diagram": null
        }
      ],
      "finalAnswer": "y = 3x - 15"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "questionDiagram": null,
    "id": "al.y2.pure.parametric-differentiation.q032",
    "difficulty": "Easy",
    "marks": 5,
    "answerType": "equation",
    "tags": [
      "parametric differentiation",
      "tangent"
    ],
    "questionText": "A curve $C$ has parametric equations $x = t^{2} - 1$ and $y = 2t$. Find the equation of the tangent to $C$ at the point where $t = 2$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate both coordinates",
          "workingLatex": "\\dot{x} = 2t, \\qquad \\dot{y} = 2",
          "explanation": "To find the tangent we need the gradient, which comes from differentiating $x$ and $y$ with respect to $t$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find dy/dx",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{2}{2t} = \\dfrac{1}{t}",
          "explanation": "Divide $\\dot{y}$ by $\\dot{x}$ to obtain the slope of the tangent in terms of $t$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate the point at t = 2",
          "workingLatex": "x = 3, \\qquad y = 4",
          "explanation": "Substitute $t = 2$ into both parametric equations to locate the point of tangency.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the gradient at t = 2",
          "workingLatex": "m = \\dfrac{1}{2}",
          "explanation": "Put the same value of $t$ into $\\dfrac{dy}{dx}$ to get the tangent's slope at that point.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the tangent equation",
          "workingLatex": "y - 4 = \\dfrac{1}{2}(x - 3)",
          "explanation": "Use point–gradient form with the coordinates and slope just found.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify",
          "workingLatex": "y = \\dfrac{1}{2}x + \\dfrac{5}{2}",
          "explanation": "Expand and collect terms to give the tangent in a tidy form.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the tangent",
          "workingLatex": "y = \\dfrac{1}{2}x + \\dfrac{5}{2}",
          "explanation": "This is the equation of the tangent to the curve at the required point.",
          "diagram": null
        }
      ],
      "finalAnswer": "y = \\dfrac{1}{2}x + \\dfrac{5}{2}"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "questionDiagram": null,
    "id": "al.y2.pure.parametric-differentiation.q033",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "equation",
    "tags": [
      "parametric differentiation",
      "normal",
      "tangent"
    ],
    "questionText": "A curve has parametric equations $x = t^{2}$ and $y = 2t$. Find the equation of the normal to the curve at the point where $t = 2$, and the coordinates where this normal crosses the $x$-axis.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate both coordinates",
          "workingLatex": "\\dot{x} = 2t, \\qquad \\dot{y} = 2",
          "explanation": "The normal is perpendicular to the tangent, so we begin by finding the rates of change of $x$ and $y$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the tangent gradient",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{2}{2t} = \\dfrac{1}{t}",
          "explanation": "The tangent slope is $\\dfrac{\\dot{y}}{\\dot{x}}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the point at t = 2",
          "workingLatex": "(4,\\, 4)",
          "explanation": "Substitute $t$ into the parametric equations to fix the point on the curve.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the tangent gradient at t = 2",
          "workingLatex": "m_{\\text{tangent}} = \\dfrac{1}{2}",
          "explanation": "This is the slope of the curve itself at the required point.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the normal gradient",
          "workingLatex": "m_{\\text{normal}} = -\\dfrac{1}{m_{\\text{tangent}}} = -2",
          "explanation": "Perpendicular lines have gradients that multiply to $-1$, so the normal gradient is the negative reciprocal.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the normal equation",
          "workingLatex": "y - 4 = -2(x - 4)",
          "explanation": "Use point–gradient form with the point and normal slope.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify the normal",
          "workingLatex": "y = -2x + 12",
          "explanation": "Rearrange to a convenient form.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find where the normal meets the x-axis",
          "workingLatex": "y = 0 \\;\\Rightarrow\\; $(6,\\, 0)$",
          "explanation": "On the $x$-axis we have $y = 0$; substitute into the normal equation and solve for $x$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the crossing point",
          "workingLatex": "$(6,\\, 0)$",
          "explanation": "This is where the normal line cuts the $x$-axis.",
          "diagram": null
        }
      ],
      "finalAnswer": "The normal is y = -2x + 12, and it crosses the $x$-axis at $(6,\\, 0)$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "questionDiagram": null,
    "id": "al.y2.pure.parametric-differentiation.q034",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "equation",
    "tags": [
      "parametric differentiation",
      "normal",
      "tangent"
    ],
    "questionText": "A curve has parametric equations $x = 2t$ and $y = t^{2}$. Find the equation of the normal to the curve at the point where $t = 3$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate both coordinates",
          "workingLatex": "\\dot{x} = 2, \\qquad \\dot{y} = 2t",
          "explanation": "The normal is perpendicular to the tangent, so we begin by finding the rates of change of $x$ and $y$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the tangent gradient",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{2t}{2} = t",
          "explanation": "The tangent slope is $\\dfrac{\\dot{y}}{\\dot{x}}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the point at t = 3",
          "workingLatex": "(6,\\, 9)",
          "explanation": "Substitute $t$ into the parametric equations to fix the point on the curve.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the tangent gradient at t = 3",
          "workingLatex": "m_{\\text{tangent}} = 3",
          "explanation": "This is the slope of the curve itself at the required point.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the normal gradient",
          "workingLatex": "m_{\\text{normal}} = -\\dfrac{1}{m_{\\text{tangent}}} = -\\dfrac{1}{3}",
          "explanation": "Perpendicular lines have gradients that multiply to $-1$, so the normal gradient is the negative reciprocal.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the normal equation",
          "workingLatex": "y - 9 = -\\dfrac{1}{3}(x - 6)",
          "explanation": "Use point–gradient form with the point and normal slope.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify the normal",
          "workingLatex": "y = -\\dfrac{1}{3}x + 11",
          "explanation": "Rearrange to a convenient form.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the normal",
          "workingLatex": "y = -\\dfrac{1}{3}x + 11",
          "explanation": "This line is perpendicular to the tangent at the given point on the curve.",
          "diagram": null
        }
      ],
      "finalAnswer": "y = -\\dfrac{1}{3}x + 11"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "questionDiagram": null,
    "id": "al.y2.pure.parametric-differentiation.q035",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "equation",
    "tags": [
      "parametric differentiation",
      "normal",
      "tangent"
    ],
    "questionText": "A curve has parametric equations $x = t^{3}$ and $y = t^{2}$. Find the equation of the normal to the curve at the point where $t = 1$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate both coordinates",
          "workingLatex": "\\dot{x} = 3t^{2}, \\qquad \\dot{y} = 2t",
          "explanation": "The normal is perpendicular to the tangent, so we begin by finding the rates of change of $x$ and $y$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the tangent gradient",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{2t}{3t^{2}} = \\dfrac{2}{3t}",
          "explanation": "The tangent slope is $\\dfrac{\\dot{y}}{\\dot{x}}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the point at t = 1",
          "workingLatex": "(1,\\, 1)",
          "explanation": "Substitute $t$ into the parametric equations to fix the point on the curve.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the tangent gradient at t = 1",
          "workingLatex": "m_{\\text{tangent}} = \\dfrac{2}{3}",
          "explanation": "This is the slope of the curve itself at the required point.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the normal gradient",
          "workingLatex": "m_{\\text{normal}} = -\\dfrac{1}{m_{\\text{tangent}}} = -\\dfrac{3}{2}",
          "explanation": "Perpendicular lines have gradients that multiply to $-1$, so the normal gradient is the negative reciprocal.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the normal equation",
          "workingLatex": "y - 1 = -\\dfrac{3}{2}(x - 1)",
          "explanation": "Use point–gradient form with the point and normal slope.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify the normal",
          "workingLatex": "y = -\\dfrac{3}{2}x + \\dfrac{5}{2}",
          "explanation": "Rearrange to a convenient form.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the normal",
          "workingLatex": "y = -\\dfrac{3}{2}x + \\dfrac{5}{2}",
          "explanation": "This line is perpendicular to the tangent at the given point on the curve.",
          "diagram": null
        }
      ],
      "finalAnswer": "y = -\\dfrac{3}{2}x + \\dfrac{5}{2}"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "questionDiagram": null,
    "id": "al.y2.pure.parametric-differentiation.q036",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "equation",
    "tags": [
      "parametric differentiation",
      "normal",
      "tangent"
    ],
    "questionText": "A curve has parametric equations $x = t$ and $y = t^{2} + 1$. Find the equation of the normal to the curve at the point where $t = 2$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate both coordinates",
          "workingLatex": "\\dot{x} = 1, \\qquad \\dot{y} = 2t",
          "explanation": "The normal is perpendicular to the tangent, so we begin by finding the rates of change of $x$ and $y$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the tangent gradient",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{2t}{1} = 2t",
          "explanation": "The tangent slope is $\\dfrac{\\dot{y}}{\\dot{x}}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the point at t = 2",
          "workingLatex": "(2,\\, 5)",
          "explanation": "Substitute $t$ into the parametric equations to fix the point on the curve.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the tangent gradient at t = 2",
          "workingLatex": "m_{\\text{tangent}} = 4",
          "explanation": "This is the slope of the curve itself at the required point.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the normal gradient",
          "workingLatex": "m_{\\text{normal}} = -\\dfrac{1}{m_{\\text{tangent}}} = -\\dfrac{1}{4}",
          "explanation": "Perpendicular lines have gradients that multiply to $-1$, so the normal gradient is the negative reciprocal.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the normal equation",
          "workingLatex": "y - 5 = -\\dfrac{1}{4}(x - 2)",
          "explanation": "Use point–gradient form with the point and normal slope.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify the normal",
          "workingLatex": "y = -\\dfrac{1}{4}x + \\dfrac{11}{2}",
          "explanation": "Rearrange to a convenient form.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the normal",
          "workingLatex": "y = -\\dfrac{1}{4}x + \\dfrac{11}{2}",
          "explanation": "This line is perpendicular to the tangent at the given point on the curve.",
          "diagram": null
        }
      ],
      "finalAnswer": "y = -\\dfrac{1}{4}x + \\dfrac{11}{2}"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "questionDiagram": null,
    "id": "al.y2.pure.parametric-differentiation.q037",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "equation",
    "tags": [
      "parametric differentiation",
      "normal",
      "tangent"
    ],
    "questionText": "A curve has parametric equations $x = t^{2} + 2$ and $y = t^{3} - t$. Find the equation of the normal to the curve at the point where $t = 1$, and the coordinates where this normal crosses the $x$-axis.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate both coordinates",
          "workingLatex": "\\dot{x} = 2t, \\qquad \\dot{y} = 3t^{2} - 1",
          "explanation": "The normal is perpendicular to the tangent, so we begin by finding the rates of change of $x$ and $y$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the tangent gradient",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{3t^{2} - 1}{2t} = \\dfrac{3t^{2} - 1}{2t}",
          "explanation": "The tangent slope is $\\dfrac{\\dot{y}}{\\dot{x}}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the point at t = 1",
          "workingLatex": "(3,\\, 0)",
          "explanation": "Substitute $t$ into the parametric equations to fix the point on the curve.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the tangent gradient at t = 1",
          "workingLatex": "m_{\\text{tangent}} = 1",
          "explanation": "This is the slope of the curve itself at the required point.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the normal gradient",
          "workingLatex": "m_{\\text{normal}} = -\\dfrac{1}{m_{\\text{tangent}}} = -1",
          "explanation": "Perpendicular lines have gradients that multiply to $-1$, so the normal gradient is the negative reciprocal.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the normal equation",
          "workingLatex": "y - 0 = -1(x - 3)",
          "explanation": "Use point–gradient form with the point and normal slope.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify the normal",
          "workingLatex": "y = -x + 3",
          "explanation": "Rearrange to a convenient form.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find where the normal meets the x-axis",
          "workingLatex": "y = 0 \\;\\Rightarrow\\; $(3,\\, 0)$",
          "explanation": "On the $x$-axis we have $y = 0$; substitute into the normal equation and solve for $x$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the crossing point",
          "workingLatex": "$(3,\\, 0)$",
          "explanation": "This is where the normal line cuts the $x$-axis.",
          "diagram": null
        }
      ],
      "finalAnswer": "The normal is y = -x + 3, and it crosses the $x$-axis at $(3,\\, 0)$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "questionDiagram": null,
    "id": "al.y2.pure.parametric-differentiation.q038",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "equation",
    "tags": [
      "parametric differentiation",
      "normal",
      "tangent"
    ],
    "questionText": "A curve has parametric equations $x = 3t - 1$ and $y = t^{2} + 4$. Find the equation of the normal to the curve at the point where $t = 2$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate both coordinates",
          "workingLatex": "\\dot{x} = 3, \\qquad \\dot{y} = 2t",
          "explanation": "The normal is perpendicular to the tangent, so we begin by finding the rates of change of $x$ and $y$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the tangent gradient",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{2t}{3} = \\dfrac{2t}{3}",
          "explanation": "The tangent slope is $\\dfrac{\\dot{y}}{\\dot{x}}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the point at t = 2",
          "workingLatex": "(5,\\, 8)",
          "explanation": "Substitute $t$ into the parametric equations to fix the point on the curve.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the tangent gradient at t = 2",
          "workingLatex": "m_{\\text{tangent}} = \\dfrac{4}{3}",
          "explanation": "This is the slope of the curve itself at the required point.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the normal gradient",
          "workingLatex": "m_{\\text{normal}} = -\\dfrac{1}{m_{\\text{tangent}}} = -\\dfrac{3}{4}",
          "explanation": "Perpendicular lines have gradients that multiply to $-1$, so the normal gradient is the negative reciprocal.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the normal equation",
          "workingLatex": "y - 8 = -\\dfrac{3}{4}(x - 5)",
          "explanation": "Use point–gradient form with the point and normal slope.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify the normal",
          "workingLatex": "y = -\\dfrac{3}{4}x + \\dfrac{47}{4}",
          "explanation": "Rearrange to a convenient form.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the normal",
          "workingLatex": "y = -\\dfrac{3}{4}x + \\dfrac{47}{4}",
          "explanation": "This line is perpendicular to the tangent at the given point on the curve.",
          "diagram": null
        }
      ],
      "finalAnswer": "y = -\\dfrac{3}{4}x + \\dfrac{47}{4}"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "questionDiagram": null,
    "id": "al.y2.pure.parametric-differentiation.q039",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "equation",
    "tags": [
      "parametric differentiation",
      "normal",
      "tangent"
    ],
    "questionText": "A curve has parametric equations $x = t^{2}$ and $y = t^{3} - 3t$. Find the equation of the normal to the curve at the point where $t = 2$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate both coordinates",
          "workingLatex": "\\dot{x} = 2t, \\qquad \\dot{y} = 3t^{2} - 3",
          "explanation": "The normal is perpendicular to the tangent, so we begin by finding the rates of change of $x$ and $y$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the tangent gradient",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{3t^{2} - 3}{2t} = \\dfrac{3t^{2} - 3}{2t}",
          "explanation": "The tangent slope is $\\dfrac{\\dot{y}}{\\dot{x}}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the point at t = 2",
          "workingLatex": "(4,\\, 2)",
          "explanation": "Substitute $t$ into the parametric equations to fix the point on the curve.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the tangent gradient at t = 2",
          "workingLatex": "m_{\\text{tangent}} = \\dfrac{9}{4}",
          "explanation": "This is the slope of the curve itself at the required point.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the normal gradient",
          "workingLatex": "m_{\\text{normal}} = -\\dfrac{1}{m_{\\text{tangent}}} = -\\dfrac{4}{9}",
          "explanation": "Perpendicular lines have gradients that multiply to $-1$, so the normal gradient is the negative reciprocal.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the normal equation",
          "workingLatex": "y - 2 = -\\dfrac{4}{9}(x - 4)",
          "explanation": "Use point–gradient form with the point and normal slope.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify the normal",
          "workingLatex": "y = -\\dfrac{4}{9}x + \\dfrac{34}{9}",
          "explanation": "Rearrange to a convenient form.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the normal",
          "workingLatex": "y = -\\dfrac{4}{9}x + \\dfrac{34}{9}",
          "explanation": "This line is perpendicular to the tangent at the given point on the curve.",
          "diagram": null
        }
      ],
      "finalAnswer": "y = -\\dfrac{4}{9}x + \\dfrac{34}{9}"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "questionDiagram": null,
    "id": "al.y2.pure.parametric-differentiation.q040",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "equation",
    "tags": [
      "parametric differentiation",
      "normal",
      "tangent"
    ],
    "questionText": "A curve has parametric equations $x = t + 1$ and $y = t^{2} - 2t$. Find the equation of the normal to the curve at the point where $t = 3$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate both coordinates",
          "workingLatex": "\\dot{x} = 1, \\qquad \\dot{y} = 2t - 2",
          "explanation": "The normal is perpendicular to the tangent, so we begin by finding the rates of change of $x$ and $y$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the tangent gradient",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{2t - 2}{1} = 2t - 2",
          "explanation": "The tangent slope is $\\dfrac{\\dot{y}}{\\dot{x}}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the point at t = 3",
          "workingLatex": "(4,\\, 3)",
          "explanation": "Substitute $t$ into the parametric equations to fix the point on the curve.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the tangent gradient at t = 3",
          "workingLatex": "m_{\\text{tangent}} = 4",
          "explanation": "This is the slope of the curve itself at the required point.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the normal gradient",
          "workingLatex": "m_{\\text{normal}} = -\\dfrac{1}{m_{\\text{tangent}}} = -\\dfrac{1}{4}",
          "explanation": "Perpendicular lines have gradients that multiply to $-1$, so the normal gradient is the negative reciprocal.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the normal equation",
          "workingLatex": "y - 3 = -\\dfrac{1}{4}(x - 4)",
          "explanation": "Use point–gradient form with the point and normal slope.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify the normal",
          "workingLatex": "y = -\\dfrac{1}{4}x + 4",
          "explanation": "Rearrange to a convenient form.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the normal",
          "workingLatex": "y = -\\dfrac{1}{4}x + 4",
          "explanation": "This line is perpendicular to the tangent at the given point on the curve.",
          "diagram": null
        }
      ],
      "finalAnswer": "y = -\\dfrac{1}{4}x + 4"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "questionDiagram": null,
    "id": "al.y2.pure.parametric-differentiation.q041",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "equation",
    "tags": [
      "parametric differentiation",
      "normal",
      "tangent"
    ],
    "questionText": "A curve has parametric equations $x = 2t^{2}$ and $y = t^{3}$. Find the equation of the normal to the curve at the point where $t = 2$, and the coordinates where this normal crosses the $x$-axis.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate both coordinates",
          "workingLatex": "\\dot{x} = 4t, \\qquad \\dot{y} = 3t^{2}",
          "explanation": "The normal is perpendicular to the tangent, so we begin by finding the rates of change of $x$ and $y$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the tangent gradient",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{3t^{2}}{4t} = \\dfrac{3t}{4}",
          "explanation": "The tangent slope is $\\dfrac{\\dot{y}}{\\dot{x}}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the point at t = 2",
          "workingLatex": "(8,\\, 8)",
          "explanation": "Substitute $t$ into the parametric equations to fix the point on the curve.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the tangent gradient at t = 2",
          "workingLatex": "m_{\\text{tangent}} = \\dfrac{3}{2}",
          "explanation": "This is the slope of the curve itself at the required point.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the normal gradient",
          "workingLatex": "m_{\\text{normal}} = -\\dfrac{1}{m_{\\text{tangent}}} = -\\dfrac{2}{3}",
          "explanation": "Perpendicular lines have gradients that multiply to $-1$, so the normal gradient is the negative reciprocal.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the normal equation",
          "workingLatex": "y - 8 = -\\dfrac{2}{3}(x - 8)",
          "explanation": "Use point–gradient form with the point and normal slope.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify the normal",
          "workingLatex": "y = -\\dfrac{2}{3}x + \\dfrac{40}{3}",
          "explanation": "Rearrange to a convenient form.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find where the normal meets the x-axis",
          "workingLatex": "y = 0 \\;\\Rightarrow\\; $(20,\\, 0)$",
          "explanation": "On the $x$-axis we have $y = 0$; substitute into the normal equation and solve for $x$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the crossing point",
          "workingLatex": "$(20,\\, 0)$",
          "explanation": "This is where the normal line cuts the $x$-axis.",
          "diagram": null
        }
      ],
      "finalAnswer": "The normal is y = -\\dfrac{2}{3}x + \\dfrac{40}{3}, and it crosses the $x$-axis at $(20,\\, 0)$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "questionDiagram": null,
    "id": "al.y2.pure.parametric-differentiation.q042",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "equation",
    "tags": [
      "parametric differentiation",
      "normal",
      "tangent"
    ],
    "questionText": "A curve has parametric equations $x = t^{3}$ and $y = 2t^{2}$. Find the equation of the normal to the curve at the point where $t = 1$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate both coordinates",
          "workingLatex": "\\dot{x} = 3t^{2}, \\qquad \\dot{y} = 4t",
          "explanation": "The normal is perpendicular to the tangent, so we begin by finding the rates of change of $x$ and $y$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the tangent gradient",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{4t}{3t^{2}} = \\dfrac{4}{3t}",
          "explanation": "The tangent slope is $\\dfrac{\\dot{y}}{\\dot{x}}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the point at t = 1",
          "workingLatex": "(1,\\, 2)",
          "explanation": "Substitute $t$ into the parametric equations to fix the point on the curve.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the tangent gradient at t = 1",
          "workingLatex": "m_{\\text{tangent}} = \\dfrac{4}{3}",
          "explanation": "This is the slope of the curve itself at the required point.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the normal gradient",
          "workingLatex": "m_{\\text{normal}} = -\\dfrac{1}{m_{\\text{tangent}}} = -\\dfrac{3}{4}",
          "explanation": "Perpendicular lines have gradients that multiply to $-1$, so the normal gradient is the negative reciprocal.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the normal equation",
          "workingLatex": "y - 2 = -\\dfrac{3}{4}(x - 1)",
          "explanation": "Use point–gradient form with the point and normal slope.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify the normal",
          "workingLatex": "y = -\\dfrac{3}{4}x + \\dfrac{11}{4}",
          "explanation": "Rearrange to a convenient form.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the normal",
          "workingLatex": "y = -\\dfrac{3}{4}x + \\dfrac{11}{4}",
          "explanation": "This line is perpendicular to the tangent at the given point on the curve.",
          "diagram": null
        }
      ],
      "finalAnswer": "y = -\\dfrac{3}{4}x + \\dfrac{11}{4}"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "questionDiagram": null,
    "id": "al.y2.pure.parametric-differentiation.q043",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "exact",
    "tags": [
      "parametric differentiation",
      "gradient",
      "solving"
    ],
    "questionText": "A curve has parametric equations $x = t^{2}$ and $y = 3t - 1$. The tangent to the curve has gradient 2. Find the value(s) of $t$ and the coordinates of the corresponding point(s).",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate x with respect to t",
          "workingLatex": "\\dot{x} = 2t",
          "explanation": "Differentiate the $x$-equation to obtain $\\dot{x}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate y with respect to t",
          "workingLatex": "\\dot{y} = 3",
          "explanation": "Differentiate the $y$-equation to obtain $\\dot{y}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write dy/dx in terms of t",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{3}{2t} = \\dfrac{3}{2t}",
          "explanation": "Form the gradient using $\\dfrac{\\dot{y}}{\\dot{x}}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set the gradient equal to the target value",
          "workingLatex": "\\dfrac{dy}{dx} = 2",
          "explanation": "We want the values of $t$ where the tangent has the specified slope.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for t",
          "workingLatex": "t = \\dfrac{3}{4}",
          "explanation": "Clear fractions and solve the resulting equation for $t$, checking that $\\dot{x} \\neq 0$ at each solution.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify each solution",
          "workingLatex": "t = \\dfrac{3}{4}",
          "explanation": "Substitute each value of $t$ back into $\\dfrac{dy}{dx}$ to confirm it gives the required gradient.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the corresponding point",
          "workingLatex": "$(\\tfrac{9}{16},\\, \\tfrac{5}{4})$",
          "explanation": "Substitute the valid value(s) of $t$ into the parametric equations to locate the point(s) on the curve.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the answer",
          "workingLatex": "$(\\tfrac{9}{16},\\, \\tfrac{5}{4})$",
          "explanation": "These are the point(s) where the curve has the required gradient.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(\\tfrac{9}{16},\\, \\tfrac{5}{4})$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "questionDiagram": null,
    "id": "al.y2.pure.parametric-differentiation.q044",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "exact",
    "tags": [
      "parametric differentiation",
      "gradient",
      "solving"
    ],
    "questionText": "A curve has parametric equations $x = 2t$ and $y = t^{2} + 1$. The tangent to the curve has gradient 3. Find the value(s) of $t$ and the coordinates of the corresponding point(s).",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate x with respect to t",
          "workingLatex": "\\dot{x} = 2",
          "explanation": "Differentiate the $x$-equation to obtain $\\dot{x}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate y with respect to t",
          "workingLatex": "\\dot{y} = 2t",
          "explanation": "Differentiate the $y$-equation to obtain $\\dot{y}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write dy/dx in terms of t",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{2t}{2} = t",
          "explanation": "Form the gradient using $\\dfrac{\\dot{y}}{\\dot{x}}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set the gradient equal to the target value",
          "workingLatex": "\\dfrac{dy}{dx} = 3",
          "explanation": "We want the values of $t$ where the tangent has the specified slope.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for t",
          "workingLatex": "t = 3",
          "explanation": "Clear fractions and solve the resulting equation for $t$, checking that $\\dot{x} \\neq 0$ at each solution.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify each solution",
          "workingLatex": "t = 3",
          "explanation": "Substitute each value of $t$ back into $\\dfrac{dy}{dx}$ to confirm it gives the required gradient.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the corresponding point",
          "workingLatex": "$(6,\\, 10)$",
          "explanation": "Substitute the valid value(s) of $t$ into the parametric equations to locate the point(s) on the curve.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the answer",
          "workingLatex": "$(6,\\, 10)$",
          "explanation": "These are the point(s) where the curve has the required gradient.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(6,\\, 10)$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "questionDiagram": null,
    "id": "al.y2.pure.parametric-differentiation.q045",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "exact",
    "tags": [
      "parametric differentiation",
      "gradient",
      "solving"
    ],
    "questionText": "A curve has parametric equations $x = t^{3}$ and $y = t^{2}$. The tangent to the curve has gradient 1. Find the value(s) of $t$ and the coordinates of the corresponding point(s).",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate x with respect to t",
          "workingLatex": "\\dot{x} = 3t^{2}",
          "explanation": "Differentiate the $x$-equation to obtain $\\dot{x}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate y with respect to t",
          "workingLatex": "\\dot{y} = 2t",
          "explanation": "Differentiate the $y$-equation to obtain $\\dot{y}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write dy/dx in terms of t",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{2t}{3t^{2}} = \\dfrac{2}{3t}",
          "explanation": "Form the gradient using $\\dfrac{\\dot{y}}{\\dot{x}}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set the gradient equal to the target value",
          "workingLatex": "\\dfrac{dy}{dx} = 1",
          "explanation": "We want the values of $t$ where the tangent has the specified slope.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for t",
          "workingLatex": "t = \\dfrac{2}{3}",
          "explanation": "Clear fractions and solve the resulting equation for $t$, checking that $\\dot{x} \\neq 0$ at each solution.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify each solution",
          "workingLatex": "t = \\dfrac{2}{3}",
          "explanation": "Substitute each value of $t$ back into $\\dfrac{dy}{dx}$ to confirm it gives the required gradient.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the corresponding point",
          "workingLatex": "$(\\tfrac{8}{27},\\, \\tfrac{4}{9})$",
          "explanation": "Substitute the valid value(s) of $t$ into the parametric equations to locate the point(s) on the curve.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the answer",
          "workingLatex": "$(\\tfrac{8}{27},\\, \\tfrac{4}{9})$",
          "explanation": "These are the point(s) where the curve has the required gradient.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(\\tfrac{8}{27},\\, \\tfrac{4}{9})$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "questionDiagram": null,
    "id": "al.y2.pure.parametric-differentiation.q046",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "exact",
    "tags": [
      "parametric differentiation",
      "gradient",
      "solving"
    ],
    "questionText": "A curve has parametric equations $x = t$ and $y = t^{3} - 6t$. The tangent to the curve has gradient 3. Find the value(s) of $t$ and the coordinates of the corresponding point(s).",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate x with respect to t",
          "workingLatex": "\\dot{x} = 1",
          "explanation": "Differentiate the $x$-equation to obtain $\\dot{x}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate y with respect to t",
          "workingLatex": "\\dot{y} = 3t^{2} - 6",
          "explanation": "Differentiate the $y$-equation to obtain $\\dot{y}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write dy/dx in terms of t",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{3t^{2} - 6}{1} = 3t^{2} - 6",
          "explanation": "Form the gradient using $\\dfrac{\\dot{y}}{\\dot{x}}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set the gradient equal to the target value",
          "workingLatex": "\\dfrac{dy}{dx} = 3",
          "explanation": "We want the values of $t$ where the tangent has the specified slope.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for t",
          "workingLatex": "t = 3",
          "explanation": "Clear fractions and solve the resulting equation for $t$, checking that $\\dot{x} \\neq 0$ at each solution.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify each solution",
          "workingLatex": "t = 3",
          "explanation": "Substitute each value of $t$ back into $\\dfrac{dy}{dx}$ to confirm it gives the required gradient.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the corresponding point",
          "workingLatex": "$(3,\\, 9)$",
          "explanation": "Substitute the valid value(s) of $t$ into the parametric equations to locate the point(s) on the curve.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the answer",
          "workingLatex": "$(3,\\, 9)$",
          "explanation": "These are the point(s) where the curve has the required gradient.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(3,\\, 9)$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "questionDiagram": null,
    "id": "al.y2.pure.parametric-differentiation.q047",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "exact",
    "tags": [
      "parametric differentiation",
      "gradient",
      "solving"
    ],
    "questionText": "A curve has parametric equations $x = t^{2} + 1$ and $y = 2t$. The tangent to the curve has gradient -2. Find the value(s) of $t$ and the coordinates of the corresponding point(s).",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate x with respect to t",
          "workingLatex": "\\dot{x} = 2t",
          "explanation": "Differentiate the $x$-equation to obtain $\\dot{x}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate y with respect to t",
          "workingLatex": "\\dot{y} = 2",
          "explanation": "Differentiate the $y$-equation to obtain $\\dot{y}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write dy/dx in terms of t",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{2}{2t} = \\dfrac{1}{t}",
          "explanation": "Form the gradient using $\\dfrac{\\dot{y}}{\\dot{x}}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set the gradient equal to the target value",
          "workingLatex": "\\dfrac{dy}{dx} = -2",
          "explanation": "We want the values of $t$ where the tangent has the specified slope.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for t",
          "workingLatex": "t = -\\dfrac{1}{2}",
          "explanation": "Clear fractions and solve the resulting equation for $t$, checking that $\\dot{x} \\neq 0$ at each solution.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify each solution",
          "workingLatex": "t = -\\dfrac{1}{2}",
          "explanation": "Substitute each value of $t$ back into $\\dfrac{dy}{dx}$ to confirm it gives the required gradient.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the corresponding point",
          "workingLatex": "$(\\tfrac{5}{4},\\, -1)$",
          "explanation": "Substitute the valid value(s) of $t$ into the parametric equations to locate the point(s) on the curve.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the answer",
          "workingLatex": "$(\\tfrac{5}{4},\\, -1)$",
          "explanation": "These are the point(s) where the curve has the required gradient.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(\\tfrac{5}{4},\\, -1)$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "questionDiagram": null,
    "id": "al.y2.pure.parametric-differentiation.q048",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "exact",
    "tags": [
      "parametric differentiation",
      "gradient",
      "solving"
    ],
    "questionText": "A curve has parametric equations $x = 3t$ and $y = t^{2} - 5$. The tangent to the curve has gradient 4. Find the value(s) of $t$ and the coordinates of the corresponding point(s).",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate x with respect to t",
          "workingLatex": "\\dot{x} = 3",
          "explanation": "Differentiate the $x$-equation to obtain $\\dot{x}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate y with respect to t",
          "workingLatex": "\\dot{y} = 2t",
          "explanation": "Differentiate the $y$-equation to obtain $\\dot{y}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write dy/dx in terms of t",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{2t}{3} = \\dfrac{2t}{3}",
          "explanation": "Form the gradient using $\\dfrac{\\dot{y}}{\\dot{x}}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set the gradient equal to the target value",
          "workingLatex": "\\dfrac{dy}{dx} = 4",
          "explanation": "We want the values of $t$ where the tangent has the specified slope.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for t",
          "workingLatex": "t = 6",
          "explanation": "Clear fractions and solve the resulting equation for $t$, checking that $\\dot{x} \\neq 0$ at each solution.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify each solution",
          "workingLatex": "t = 6",
          "explanation": "Substitute each value of $t$ back into $\\dfrac{dy}{dx}$ to confirm it gives the required gradient.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the corresponding point",
          "workingLatex": "$(18,\\, 31)$",
          "explanation": "Substitute the valid value(s) of $t$ into the parametric equations to locate the point(s) on the curve.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the answer",
          "workingLatex": "$(18,\\, 31)$",
          "explanation": "These are the point(s) where the curve has the required gradient.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(18,\\, 31)$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "questionDiagram": null,
    "id": "al.y2.pure.parametric-differentiation.q049",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "exact",
    "tags": [
      "parametric differentiation",
      "gradient",
      "solving"
    ],
    "questionText": "A curve has parametric equations $x = t^{2}$ and $y = 4t - t^{2}$. The tangent to the curve has gradient 0. Find the value(s) of $t$ and the coordinates of the corresponding point(s).",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate x with respect to t",
          "workingLatex": "\\dot{x} = 2t",
          "explanation": "Differentiate the $x$-equation to obtain $\\dot{x}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate y with respect to t",
          "workingLatex": "\\dot{y} = 4 - 2t",
          "explanation": "Differentiate the $y$-equation to obtain $\\dot{y}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write dy/dx in terms of t",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{4 - 2t}{2t} = \\dfrac{4 - 2t}{2t} = \\dfrac{2 - t}{t}",
          "explanation": "Form the gradient using $\\dfrac{\\dot{y}}{\\dot{x}}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set the gradient equal to the target value",
          "workingLatex": "\\dfrac{dy}{dx} = 0",
          "explanation": "We want the values of $t$ where the tangent has the specified slope.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for t",
          "workingLatex": "t = 2",
          "explanation": "Clear fractions and solve the resulting equation for $t$, checking that $\\dot{x} \\neq 0$ at each solution.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify each solution",
          "workingLatex": "t = 2",
          "explanation": "Substitute each value of $t$ back into $\\dfrac{dy}{dx}$ to confirm it gives the required gradient.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the corresponding point",
          "workingLatex": "$(4,\\, 4)$",
          "explanation": "Substitute the valid value(s) of $t$ into the parametric equations to locate the point(s) on the curve.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the answer",
          "workingLatex": "$(4,\\, 4)$",
          "explanation": "These are the point(s) where the curve has the required gradient.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(4,\\, 4)$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "questionDiagram": null,
    "id": "al.y2.pure.parametric-differentiation.q050",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "exact",
    "tags": [
      "parametric differentiation",
      "gradient",
      "solving"
    ],
    "questionText": "A curve has parametric equations $x = t - 1$ and $y = t^{2} + 2t$. The tangent to the curve has gradient 6. Find the value(s) of $t$ and the coordinates of the corresponding point(s).",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate x with respect to t",
          "workingLatex": "\\dot{x} = 1",
          "explanation": "Differentiate the $x$-equation to obtain $\\dot{x}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate y with respect to t",
          "workingLatex": "\\dot{y} = 2t + 2",
          "explanation": "Differentiate the $y$-equation to obtain $\\dot{y}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write dy/dx in terms of t",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{2t + 2}{1} = 2t + 2",
          "explanation": "Form the gradient using $\\dfrac{\\dot{y}}{\\dot{x}}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set the gradient equal to the target value",
          "workingLatex": "\\dfrac{dy}{dx} = 6",
          "explanation": "We want the values of $t$ where the tangent has the specified slope.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for t",
          "workingLatex": "t = 2",
          "explanation": "Clear fractions and solve the resulting equation for $t$, checking that $\\dot{x} \\neq 0$ at each solution.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify each solution",
          "workingLatex": "t = 2",
          "explanation": "Substitute each value of $t$ back into $\\dfrac{dy}{dx}$ to confirm it gives the required gradient.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the corresponding point",
          "workingLatex": "$(1,\\, 8)$",
          "explanation": "Substitute the valid value(s) of $t$ into the parametric equations to locate the point(s) on the curve.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the answer",
          "workingLatex": "$(1,\\, 8)$",
          "explanation": "These are the point(s) where the curve has the required gradient.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(1,\\, 8)$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "questionDiagram": null,
    "id": "al.y2.pure.parametric-differentiation.q051",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "coordinates",
    "tags": [
      "parametric differentiation",
      "stationary point",
      "horizontal tangent"
    ],
    "questionText": "A curve has parametric equations $x = t^{2}$ and $y = t^{3} - 12t$. Find the coordinates of the stationary point on the curve and describe its nature.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the stationary-point condition",
          "workingLatex": "\\dfrac{dy}{dx} = 0",
          "explanation": "On a parametric curve, the gradient is zero when the tangent is horizontal, which requires $\\dot{y} = 0$ (and $\\dot{x} \\neq 0$).",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate both coordinates",
          "workingLatex": "\\dot{x} = 2t, \\qquad \\dot{y} = 3t^{2} - 12",
          "explanation": "Find $\\dot{x}$ and $\\dot{y}$ so we can locate where the tangent is horizontal.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set dy/dt equal to zero",
          "workingLatex": "\\dot{y} = 3t^{2} - 12 = 0",
          "explanation": "A horizontal tangent occurs when the vertical rate of change is zero.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for t",
          "workingLatex": "t = 2",
          "explanation": "Solve the equation $\\dot{y} = 0$ for $t$, and check that $\\dot{x} \\neq 0$ at each solution.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the coordinates",
          "workingLatex": "$(4,\\, -16)$",
          "explanation": "Substitute each valid $t$ into the parametric equations.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Confirm the gradient is zero",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{3t^{2} - 12}{2t} = 0",
          "explanation": "With $\\dot{y} = 0$ and $\\dot{x} \\neq 0$, the gradient is indeed zero.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Describe the stationary point",
          "workingLatex": "The curve has a local minimum at this point.",
          "explanation": "Use the sign of $\\dot{y}$ on either side of the solution, or a quick sketch, to classify the point.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the stationary point",
          "workingLatex": "$(4,\\, -16)$",
          "explanation": "This is where the curve has a horizontal tangent.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(4,\\, -16)$. The curve has a local minimum at this point."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "questionDiagram": null,
    "id": "al.y2.pure.parametric-differentiation.q052",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "coordinates",
    "tags": [
      "parametric differentiation",
      "stationary point",
      "horizontal tangent"
    ],
    "questionText": "A curve has parametric equations $x = t + 3$ and $y = t^{2} - 6t + 5$. Find the coordinates of the stationary point on the curve and describe its nature.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the stationary-point condition",
          "workingLatex": "\\dfrac{dy}{dx} = 0",
          "explanation": "On a parametric curve, the gradient is zero when the tangent is horizontal, which requires $\\dot{y} = 0$ (and $\\dot{x} \\neq 0$).",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate both coordinates",
          "workingLatex": "\\dot{x} = 1, \\qquad \\dot{y} = 2t - 6",
          "explanation": "Find $\\dot{x}$ and $\\dot{y}$ so we can locate where the tangent is horizontal.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set dy/dt equal to zero",
          "workingLatex": "\\dot{y} = 2t - 6 = 0",
          "explanation": "A horizontal tangent occurs when the vertical rate of change is zero.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for t",
          "workingLatex": "t = 3",
          "explanation": "Solve the equation $\\dot{y} = 0$ for $t$, and check that $\\dot{x} \\neq 0$ at each solution.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the coordinates",
          "workingLatex": "$(6,\\, -4)$",
          "explanation": "Substitute each valid $t$ into the parametric equations.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Confirm the gradient is zero",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{2t - 6}{1} = 0",
          "explanation": "With $\\dot{y} = 0$ and $\\dot{x} \\neq 0$, the gradient is indeed zero.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Describe the stationary point",
          "workingLatex": "The curve has a local minimum at this point.",
          "explanation": "Use the sign of $\\dot{y}$ on either side of the solution, or a quick sketch, to classify the point.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the stationary point",
          "workingLatex": "$(6,\\, -4)$",
          "explanation": "This is where the curve has a horizontal tangent.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(6,\\, -4)$. The curve has a local minimum at this point."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "questionDiagram": null,
    "id": "al.y2.pure.parametric-differentiation.q053",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "coordinates",
    "tags": [
      "parametric differentiation",
      "stationary point",
      "horizontal tangent"
    ],
    "questionText": "A curve has parametric equations $x = t^{3}$ and $y = t^{2} - 4$. Find the coordinates of the stationary point on the curve and describe its nature.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the stationary-point condition",
          "workingLatex": "\\dfrac{dy}{dx} = 0",
          "explanation": "On a parametric curve, the gradient is zero when the tangent is horizontal, which requires $\\dot{y} = 0$ (and $\\dot{x} \\neq 0$).",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate both coordinates",
          "workingLatex": "\\dot{x} = 3t^{2}, \\qquad \\dot{y} = 2t",
          "explanation": "Find $\\dot{x}$ and $\\dot{y}$ so we can locate where the tangent is horizontal.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set dy/dt equal to zero",
          "workingLatex": "\\dot{y} = 2t = 0",
          "explanation": "A horizontal tangent occurs when the vertical rate of change is zero.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for t",
          "workingLatex": "t = 0",
          "explanation": "Solve the equation $\\dot{y} = 0$ for $t$, and check that $\\dot{x} \\neq 0$ at each solution.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the coordinates",
          "workingLatex": "$(0,\\, -4)$",
          "explanation": "Substitute each valid $t$ into the parametric equations.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Confirm the gradient is zero",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{2t}{3t^{2}} = 0",
          "explanation": "With $\\dot{y} = 0$ and $\\dot{x} \\neq 0$, the gradient is indeed zero.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Describe the stationary point",
          "workingLatex": "The curve has a local maximum at this point.",
          "explanation": "Use the sign of $\\dot{y}$ on either side of the solution, or a quick sketch, to classify the point.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the stationary point",
          "workingLatex": "$(0,\\, -4)$",
          "explanation": "This is where the curve has a horizontal tangent.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(0,\\, -4)$. The curve has a local maximum at this point."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "questionDiagram": null,
    "id": "al.y2.pure.parametric-differentiation.q054",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "coordinates",
    "tags": [
      "parametric differentiation",
      "stationary point",
      "horizontal tangent"
    ],
    "questionText": "A curve has parametric equations $x = 2t$ and $y = t^{2} - 8t + 15$. Find the coordinates of the stationary point on the curve and describe its nature.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the stationary-point condition",
          "workingLatex": "\\dfrac{dy}{dx} = 0",
          "explanation": "On a parametric curve, the gradient is zero when the tangent is horizontal, which requires $\\dot{y} = 0$ (and $\\dot{x} \\neq 0$).",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate both coordinates",
          "workingLatex": "\\dot{x} = 2, \\qquad \\dot{y} = 2t - 8",
          "explanation": "Find $\\dot{x}$ and $\\dot{y}$ so we can locate where the tangent is horizontal.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set dy/dt equal to zero",
          "workingLatex": "\\dot{y} = 2t - 8 = 0",
          "explanation": "A horizontal tangent occurs when the vertical rate of change is zero.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for t",
          "workingLatex": "t = 4",
          "explanation": "Solve the equation $\\dot{y} = 0$ for $t$, and check that $\\dot{x} \\neq 0$ at each solution.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the coordinates",
          "workingLatex": "$(8,\\, -1)$",
          "explanation": "Substitute each valid $t$ into the parametric equations.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Confirm the gradient is zero",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{2t - 8}{2} = 0",
          "explanation": "With $\\dot{y} = 0$ and $\\dot{x} \\neq 0$, the gradient is indeed zero.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Describe the stationary point",
          "workingLatex": "The curve has a local minimum at this point.",
          "explanation": "Use the sign of $\\dot{y}$ on either side of the solution, or a quick sketch, to classify the point.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the stationary point",
          "workingLatex": "$(8,\\, -1)$",
          "explanation": "This is where the curve has a horizontal tangent.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(8,\\, -1)$. The curve has a local minimum at this point."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "questionDiagram": null,
    "id": "al.y2.pure.parametric-differentiation.q055",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "coordinates",
    "tags": [
      "parametric differentiation",
      "stationary point",
      "horizontal tangent"
    ],
    "questionText": "A curve has parametric equations $x = t^{2} + 1$ and $y = t^{3} - 3t$. Find the coordinates of the stationary point on the curve and describe its nature.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the stationary-point condition",
          "workingLatex": "\\dfrac{dy}{dx} = 0",
          "explanation": "On a parametric curve, the gradient is zero when the tangent is horizontal, which requires $\\dot{y} = 0$ (and $\\dot{x} \\neq 0$).",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate both coordinates",
          "workingLatex": "\\dot{x} = 2t, \\qquad \\dot{y} = 3t^{2} - 3",
          "explanation": "Find $\\dot{x}$ and $\\dot{y}$ so we can locate where the tangent is horizontal.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set dy/dt equal to zero",
          "workingLatex": "\\dot{y} = 3t^{2} - 3 = 0",
          "explanation": "A horizontal tangent occurs when the vertical rate of change is zero.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for t",
          "workingLatex": "t = 1",
          "explanation": "Solve the equation $\\dot{y} = 0$ for $t$, and check that $\\dot{x} \\neq 0$ at each solution.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the coordinates",
          "workingLatex": "$(2,\\, -2)$",
          "explanation": "Substitute each valid $t$ into the parametric equations.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Confirm the gradient is zero",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{3t^{2} - 3}{2t} = 0",
          "explanation": "With $\\dot{y} = 0$ and $\\dot{x} \\neq 0$, the gradient is indeed zero.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Describe the stationary point",
          "workingLatex": "The curve has a local minimum at this point.",
          "explanation": "Use the sign of $\\dot{y}$ on either side of the solution, or a quick sketch, to classify the point.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the stationary point",
          "workingLatex": "$(2,\\, -2)$",
          "explanation": "This is where the curve has a horizontal tangent.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(2,\\, -2)$. The curve has a local minimum at this point."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "questionDiagram": null,
    "id": "al.y2.pure.parametric-differentiation.q056",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "coordinates",
    "tags": [
      "parametric differentiation",
      "stationary point",
      "horizontal tangent"
    ],
    "questionText": "A curve has parametric equations $x = t$ and $y = t^{2} - 4t + 7$. Find the coordinates of the stationary point on the curve and describe its nature.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the stationary-point condition",
          "workingLatex": "\\dfrac{dy}{dx} = 0",
          "explanation": "On a parametric curve, the gradient is zero when the tangent is horizontal, which requires $\\dot{y} = 0$ (and $\\dot{x} \\neq 0$).",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate both coordinates",
          "workingLatex": "\\dot{x} = 1, \\qquad \\dot{y} = 2t - 4",
          "explanation": "Find $\\dot{x}$ and $\\dot{y}$ so we can locate where the tangent is horizontal.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set dy/dt equal to zero",
          "workingLatex": "\\dot{y} = 2t - 4 = 0",
          "explanation": "A horizontal tangent occurs when the vertical rate of change is zero.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for t",
          "workingLatex": "t = 2",
          "explanation": "Solve the equation $\\dot{y} = 0$ for $t$, and check that $\\dot{x} \\neq 0$ at each solution.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the coordinates",
          "workingLatex": "$(2,\\, 3)$",
          "explanation": "Substitute each valid $t$ into the parametric equations.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Confirm the gradient is zero",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{2t - 4}{1} = 0",
          "explanation": "With $\\dot{y} = 0$ and $\\dot{x} \\neq 0$, the gradient is indeed zero.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Describe the stationary point",
          "workingLatex": "The curve has a local minimum at this point.",
          "explanation": "Use the sign of $\\dot{y}$ on either side of the solution, or a quick sketch, to classify the point.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the stationary point",
          "workingLatex": "$(2,\\, 3)$",
          "explanation": "This is where the curve has a horizontal tangent.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(2,\\, 3)$. The curve has a local minimum at this point."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "questionDiagram": null,
    "id": "al.y2.pure.parametric-differentiation.q057",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "parametric differentiation",
      "trigonometry",
      "gradient"
    ],
    "questionText": "A curve has parametric equations $x = \\cos t$ and $y = \\sin t$. Find $\\dfrac{dy}{dx}$ in terms of $t$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate x with respect to t",
          "workingLatex": "\\dot{x} = -\\sin t",
          "explanation": "Differentiate the trigonometric expression for $x$; remember $\\dfrac{d}{dt}(\\sin t) = \\cos t$ and $\\dfrac{d}{dt}(\\cos t) = -\\sin t$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate y with respect to t",
          "workingLatex": "\\dot{y} = \\cos t",
          "explanation": "Differentiate $y$ using the same trigonometric rules.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the gradient formula",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{\\dot{y}}{\\dot{x}}",
          "explanation": "Combine the derivatives using the parametric chain rule.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute and simplify",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{\\cos t}{-\\sin t}",
          "explanation": "Put in the expressions for $\\dot{x}$ and $\\dot{y}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Use trigonometric identities if helpful",
          "workingLatex": "\\dfrac{dy}{dx} = -\\cot t",
          "explanation": "Simplify using identities such as $\\tan t = \\dfrac{\\sin t}{\\cos t}$ where appropriate.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Note restrictions on t",
          "workingLatex": "\\dot{x} = 0 \\text{ when } t = \\dfrac{\\pi}{2},\\, \\dfrac{3\\pi}{2},\\, \\ldots",
          "explanation": "The formula is valid only where $\\dot{x} \\neq 0$, so exclude values of $t$ that make the denominator zero.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the gradient",
          "workingLatex": "\\dfrac{dy}{dx} = -\\cot t",
          "explanation": "This gives the slope of the tangent for admissible values of $t$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dy}{dx} = -\\cot t$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "questionDiagram": null,
    "id": "al.y2.pure.parametric-differentiation.q058",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "parametric differentiation",
      "trigonometry",
      "gradient"
    ],
    "questionText": "A curve has parametric equations $x = 2\\cos t$ and $y = 3\\sin t$. Find $\\dfrac{dy}{dx}$ in terms of $t$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate x with respect to t",
          "workingLatex": "\\dot{x} = -2\\sin t",
          "explanation": "Differentiate the trigonometric expression for $x$; remember $\\dfrac{d}{dt}(\\sin t) = \\cos t$ and $\\dfrac{d}{dt}(\\cos t) = -\\sin t$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate y with respect to t",
          "workingLatex": "\\dot{y} = 3\\cos t",
          "explanation": "Differentiate $y$ using the same trigonometric rules.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the gradient formula",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{\\dot{y}}{\\dot{x}}",
          "explanation": "Combine the derivatives using the parametric chain rule.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute and simplify",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{3\\cos t}{-2\\sin t}",
          "explanation": "Put in the expressions for $\\dot{x}$ and $\\dot{y}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Use trigonometric identities if helpful",
          "workingLatex": "\\dfrac{dy}{dx} = -\\dfrac{3}{2}\\tan t",
          "explanation": "Simplify using identities such as $\\tan t = \\dfrac{\\sin t}{\\cos t}$ where appropriate.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Note restrictions on t",
          "workingLatex": "\\dot{x} \\neq 0",
          "explanation": "The formula is valid only where $\\dot{x} \\neq 0$, so exclude values of $t$ that make the denominator zero.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the gradient",
          "workingLatex": "\\dfrac{dy}{dx} = -\\dfrac{3}{2}\\tan t",
          "explanation": "This gives the slope of the tangent for admissible values of $t$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dy}{dx} = -\\dfrac{3}{2}\\tan t$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "questionDiagram": null,
    "id": "al.y2.pure.parametric-differentiation.q059",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "parametric differentiation",
      "trigonometry",
      "gradient"
    ],
    "questionText": "A curve has parametric equations $x = \\cos 2t$ and $y = \\sin 2t$. Find $\\dfrac{dy}{dx}$ in terms of $t$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate x with respect to t",
          "workingLatex": "\\dot{x} = -2\\sin 2t",
          "explanation": "Differentiate the trigonometric expression for $x$; remember $\\dfrac{d}{dt}(\\sin t) = \\cos t$ and $\\dfrac{d}{dt}(\\cos t) = -\\sin t$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate y with respect to t",
          "workingLatex": "\\dot{y} = 2\\cos 2t",
          "explanation": "Differentiate $y$ using the same trigonometric rules.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the gradient formula",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{\\dot{y}}{\\dot{x}}",
          "explanation": "Combine the derivatives using the parametric chain rule.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute and simplify",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{2\\cos 2t}{-2\\sin 2t}",
          "explanation": "Put in the expressions for $\\dot{x}$ and $\\dot{y}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Use trigonometric identities if helpful",
          "workingLatex": "\\dfrac{dy}{dx} = -\\tan 2t",
          "explanation": "Simplify using identities such as $\\tan t = \\dfrac{\\sin t}{\\cos t}$ where appropriate.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Note restrictions on t",
          "workingLatex": "\\dot{x} \\neq 0",
          "explanation": "The formula is valid only where $\\dot{x} \\neq 0$, so exclude values of $t$ that make the denominator zero.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the gradient",
          "workingLatex": "\\dfrac{dy}{dx} = -\\tan 2t",
          "explanation": "This gives the slope of the tangent for admissible values of $t$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dy}{dx} = -\\tan 2t$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "questionDiagram": null,
    "id": "al.y2.pure.parametric-differentiation.q060",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "parametric differentiation",
      "trigonometry",
      "gradient"
    ],
    "questionText": "A curve has parametric equations $x = 1 + \\cos t$ and $y = \\sin t$. Find $\\dfrac{dy}{dx}$ in terms of $t$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate x with respect to t",
          "workingLatex": "\\dot{x} = -\\sin t",
          "explanation": "Differentiate the trigonometric expression for $x$; remember $\\dfrac{d}{dt}(\\sin t) = \\cos t$ and $\\dfrac{d}{dt}(\\cos t) = -\\sin t$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate y with respect to t",
          "workingLatex": "\\dot{y} = \\cos t",
          "explanation": "Differentiate $y$ using the same trigonometric rules.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the gradient formula",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{\\dot{y}}{\\dot{x}}",
          "explanation": "Combine the derivatives using the parametric chain rule.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute and simplify",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{\\cos t}{-\\sin t}",
          "explanation": "Put in the expressions for $\\dot{x}$ and $\\dot{y}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Use trigonometric identities if helpful",
          "workingLatex": "\\dfrac{dy}{dx} = -\\dfrac{\\cos t}{\\sin t} = -\\cot t",
          "explanation": "Simplify using identities such as $\\tan t = \\dfrac{\\sin t}{\\cos t}$ where appropriate.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Note restrictions on t",
          "workingLatex": "\\dot{x} \\neq 0",
          "explanation": "The formula is valid only where $\\dot{x} \\neq 0$, so exclude values of $t$ that make the denominator zero.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the gradient",
          "workingLatex": "\\dfrac{dy}{dx} = -\\dfrac{\\cos t}{\\sin t} = -\\cot t",
          "explanation": "This gives the slope of the tangent for admissible values of $t$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dy}{dx} = -\\dfrac{\\cos t}{\\sin t} = -\\cot t$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "questionDiagram": null,
    "id": "al.y2.pure.parametric-differentiation.q061",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "parametric differentiation",
      "trigonometry",
      "gradient"
    ],
    "questionText": "A curve has parametric equations $x = 4\\cos t$ and $y = 4\\sin t$. Find $\\dfrac{dy}{dx}$ in terms of $t$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate x with respect to t",
          "workingLatex": "\\dot{x} = -4\\sin t",
          "explanation": "Differentiate the trigonometric expression for $x$; remember $\\dfrac{d}{dt}(\\sin t) = \\cos t$ and $\\dfrac{d}{dt}(\\cos t) = -\\sin t$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate y with respect to t",
          "workingLatex": "\\dot{y} = 4\\cos t",
          "explanation": "Differentiate $y$ using the same trigonometric rules.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the gradient formula",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{\\dot{y}}{\\dot{x}}",
          "explanation": "Combine the derivatives using the parametric chain rule.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute and simplify",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{4\\cos t}{-4\\sin t}",
          "explanation": "Put in the expressions for $\\dot{x}$ and $\\dot{y}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Use trigonometric identities if helpful",
          "workingLatex": "\\dfrac{dy}{dx} = -\\tan t",
          "explanation": "Simplify using identities such as $\\tan t = \\dfrac{\\sin t}{\\cos t}$ where appropriate.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Note restrictions on t",
          "workingLatex": "\\dot{x} \\neq 0",
          "explanation": "The formula is valid only where $\\dot{x} \\neq 0$, so exclude values of $t$ that make the denominator zero.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the gradient",
          "workingLatex": "\\dfrac{dy}{dx} = -\\tan t",
          "explanation": "This gives the slope of the tangent for admissible values of $t$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dy}{dx} = -\\tan t$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "questionDiagram": null,
    "id": "al.y2.pure.parametric-differentiation.q062",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "parametric differentiation",
      "trigonometry",
      "gradient"
    ],
    "questionText": "A curve has parametric equations $x = \\sec t$ and $y = \\tan t$. Find $\\dfrac{dy}{dx}$ in terms of $t$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate x with respect to t",
          "workingLatex": "\\dot{x} = \\sec t \\tan t",
          "explanation": "Differentiate the trigonometric expression for $x$; remember $\\dfrac{d}{dt}(\\sin t) = \\cos t$ and $\\dfrac{d}{dt}(\\cos t) = -\\sin t$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate y with respect to t",
          "workingLatex": "\\dot{y} = \\sec^{2} t",
          "explanation": "Differentiate $y$ using the same trigonometric rules.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the gradient formula",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{\\dot{y}}{\\dot{x}}",
          "explanation": "Combine the derivatives using the parametric chain rule.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute and simplify",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{\\sec^{2} t}{\\sec t \\tan t}",
          "explanation": "Put in the expressions for $\\dot{x}$ and $\\dot{y}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Use trigonometric identities if helpful",
          "workingLatex": "\\dfrac{dy}{dx} = \\sec t",
          "explanation": "Simplify using identities such as $\\tan t = \\dfrac{\\sin t}{\\cos t}$ where appropriate.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Note restrictions on t",
          "workingLatex": "\\dot{x} \\neq 0",
          "explanation": "The formula is valid only where $\\dot{x} \\neq 0$, so exclude values of $t$ that make the denominator zero.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the gradient",
          "workingLatex": "\\dfrac{dy}{dx} = \\sec t",
          "explanation": "This gives the slope of the tangent for admissible values of $t$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dy}{dx} = \\sec t$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "questionDiagram": null,
    "id": "al.y2.pure.parametric-differentiation.q063",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "coordinates",
    "tags": [
      "parametric differentiation",
      "vertical tangent"
    ],
    "questionText": "A curve has parametric equations $x = t^{3} - 3t$ and $y = t^{2}$. Find the coordinates of the point where the tangent to the curve is vertical.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate both coordinates",
          "workingLatex": "\\dot{x} = 3t^{2} - 3, \\qquad \\dot{y} = 2t",
          "explanation": "A vertical tangent occurs when $\\dot{x} = 0$ but $\\dot{y} \\neq 0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set dx/dt equal to zero",
          "workingLatex": "\\dot{x} = 3t^{2} - 3 = 0",
          "explanation": "Solve $\\dot{x} = 0$ to find where the curve has a vertical tangent.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for t",
          "workingLatex": "t = 1",
          "explanation": "Find the parameter value(s) that make the horizontal rate of change zero.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check dy/dt is non-zero",
          "workingLatex": "\\dot{y} \\neq 0 \\text{ at } t = 1",
          "explanation": "Confirm $\\dot{y}$ is not also zero, otherwise the point would be a cusp rather than a vertical tangent.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the coordinates",
          "workingLatex": "$(-2,\\, 1)$",
          "explanation": "Substitute into the parametric equations.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Describe the tangent",
          "workingLatex": "x = \\text{constant}",
          "explanation": "When $\\dot{x} = 0$, the tangent is vertical: its equation has the form $x = k$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the vertical tangent",
          "workingLatex": "$(-2,\\, 1)$",
          "explanation": "At this point the tangent line is vertical.",
          "diagram": null
        }
      ],
      "finalAnswer": "The tangent is vertical at $(-2,\\, 1)$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "questionDiagram": null,
    "id": "al.y2.pure.parametric-differentiation.q064",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "coordinates",
    "tags": [
      "parametric differentiation",
      "vertical tangent"
    ],
    "questionText": "A curve has parametric equations $x = t^{2} - 4t + 3$ and $y = t^{3}$. Find the coordinates of the point where the tangent to the curve is vertical.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate both coordinates",
          "workingLatex": "\\dot{x} = 2t - 4, \\qquad \\dot{y} = 3t^{2}",
          "explanation": "A vertical tangent occurs when $\\dot{x} = 0$ but $\\dot{y} \\neq 0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set dx/dt equal to zero",
          "workingLatex": "\\dot{x} = 2t - 4 = 0",
          "explanation": "Solve $\\dot{x} = 0$ to find where the curve has a vertical tangent.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for t",
          "workingLatex": "t = 2",
          "explanation": "Find the parameter value(s) that make the horizontal rate of change zero.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check dy/dt is non-zero",
          "workingLatex": "\\dot{y} \\neq 0 \\text{ at } t = 2",
          "explanation": "Confirm $\\dot{y}$ is not also zero, otherwise the point would be a cusp rather than a vertical tangent.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the coordinates",
          "workingLatex": "$(-1,\\, 8)$",
          "explanation": "Substitute into the parametric equations.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Describe the tangent",
          "workingLatex": "x = \\text{constant}",
          "explanation": "When $\\dot{x} = 0$, the tangent is vertical: its equation has the form $x = k$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the vertical tangent",
          "workingLatex": "$(-1,\\, 8)$",
          "explanation": "At this point the tangent line is vertical.",
          "diagram": null
        }
      ],
      "finalAnswer": "The tangent is vertical at $(-1,\\, 8)$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "questionDiagram": null,
    "id": "al.y2.pure.parametric-differentiation.q065",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "parametric differentiation",
      "exponential",
      "gradient"
    ],
    "questionText": "A curve has parametric equations $x = e^{t}$ and $y = e^{2t}$. Find the gradient of the curve when $t = 0$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate x with respect to t",
          "workingLatex": "\\dot{x} = e^{t}",
          "explanation": "For exponential terms, $\\dfrac{d}{dt}(e^{kt}) = ke^{kt}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate y with respect to t",
          "workingLatex": "\\dot{y} = 2e^{2t}",
          "explanation": "Apply the same exponential differentiation rule to $y$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form dy/dx",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{2e^{2t}}{e^{t}} = 2e^{t}",
          "explanation": "Divide the derivatives and cancel common exponential factors where possible.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute t = 0",
          "workingLatex": "\\dfrac{dy}{dx} = 2",
          "explanation": "Evaluate the gradient at $t = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the numerical value",
          "workingLatex": "2",
          "explanation": "Carry out the arithmetic to obtain the gradient at that point.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the gradient",
          "workingLatex": "2",
          "explanation": "This is the slope of the tangent at the specified value of $t$.",
          "diagram": null
        }
      ],
      "finalAnswer": "At $t = 0$, $\\dfrac{dy}{dx} = 2$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "questionDiagram": null,
    "id": "al.y2.pure.parametric-differentiation.q066",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "parametric differentiation",
      "exponential",
      "gradient"
    ],
    "questionText": "A curve has parametric equations $x = e^{2t}$ and $y = e^{t}$. Find the gradient of the curve when $t = 0$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate x with respect to t",
          "workingLatex": "\\dot{x} = 2e^{2t}",
          "explanation": "For exponential terms, $\\dfrac{d}{dt}(e^{kt}) = ke^{kt}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate y with respect to t",
          "workingLatex": "\\dot{y} = e^{t}",
          "explanation": "Apply the same exponential differentiation rule to $y$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form dy/dx",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{e^{t}}{2e^{2t}} = \\dfrac{1}{2e^{t}}",
          "explanation": "Divide the derivatives and cancel common exponential factors where possible.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute t = 0",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{1}{2}",
          "explanation": "Evaluate the gradient at $t = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the numerical value",
          "workingLatex": "\\dfrac{1}{2}",
          "explanation": "Carry out the arithmetic to obtain the gradient at that point.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the gradient",
          "workingLatex": "\\dfrac{1}{2}",
          "explanation": "This is the slope of the tangent at the specified value of $t$.",
          "diagram": null
        }
      ],
      "finalAnswer": "At $t = 0$, $\\dfrac{dy}{dx} = \\dfrac{1}{2}$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "questionDiagram": null,
    "id": "al.y2.pure.parametric-differentiation.q067",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "exact",
    "tags": [
      "parametric differentiation",
      "second derivative",
      "concavity"
    ],
    "questionText": "A curve has parametric equations $x = t^{2}$ and $y = t^{3}$. Find $\\dfrac{d^{2}y}{dx^{2}}$ in terms of $t$, and hence find its value when $t = 2$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate x with respect to t",
          "workingLatex": "\\dot{x} = 2t",
          "explanation": "Begin with the first derivatives of the parametric equations.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate y with respect to t",
          "workingLatex": "\\dot{y} = 3t^{2}",
          "explanation": "Differentiate $y$ with respect to $t$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the first derivative dy/dx",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{3t^{2}}{2t} = \\dfrac{3t}{2}",
          "explanation": "The first derivative is $\\dfrac{\\dot{y}}{\\dot{x}}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the second-derivative formula",
          "workingLatex": "\\dfrac{d^{2}y}{dx^{2}} = \\dfrac{\\dfrac{d}{dt}\\!\\left(\\dfrac{dy}{dx}\\right)}{\\dfrac{dx}{dt}}",
          "explanation": "To differentiate with respect to $x$ we differentiate with respect to $t$ and divide by $\\dfrac{dx}{dt}$, because $\\dfrac{d}{dx} = \\dfrac{1}{\\dot{x}}\\dfrac{d}{dt}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Differentiate dy/dx with respect to t",
          "workingLatex": "\\dfrac{d}{dt}\\!\\left(\\dfrac{dy}{dx}\\right) = \\dfrac{3}{4t}",
          "explanation": "Differentiate the expression for $\\dfrac{dy}{dx}$ using standard rules.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Form d²y/dx²",
          "workingLatex": "\\dfrac{d^{2}y}{dx^{2}} = \\dfrac{3}{4t}",
          "explanation": "Divide the result of step 5 by $\\dot{x}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate at t = 2",
          "workingLatex": "\\dfrac{d^{2}y}{dx^{2}} = \\dfrac{3}{8}",
          "explanation": "Substitute $t = 2$ into the second derivative.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret the sign",
          "workingLatex": "\\dfrac{d^{2}y}{dx^{2}} > 0",
          "explanation": "A negative second derivative indicates the curve is concave down; a positive value indicates concave up.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the second derivative",
          "workingLatex": "\\dfrac{d^{2}y}{dx^{2}} = \\dfrac{3}{8}",
          "explanation": "This measures how the gradient is changing at the given point.",
          "diagram": null
        }
      ],
      "finalAnswer": "\\dfrac{d^{2}y}{dx^{2}} = \\dfrac{3}{8}"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "questionDiagram": null,
    "id": "al.y2.pure.parametric-differentiation.q068",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "exact",
    "tags": [
      "parametric differentiation",
      "second derivative",
      "concavity"
    ],
    "questionText": "A curve has parametric equations $x = 2t$ and $y = t^{2}$. Find $\\dfrac{d^{2}y}{dx^{2}}$ in terms of $t$, and hence find its value when $t = 1$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate x with respect to t",
          "workingLatex": "\\dot{x} = 2",
          "explanation": "Begin with the first derivatives of the parametric equations.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate y with respect to t",
          "workingLatex": "\\dot{y} = 2t",
          "explanation": "Differentiate $y$ with respect to $t$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the first derivative dy/dx",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{2t}{2} = t",
          "explanation": "The first derivative is $\\dfrac{\\dot{y}}{\\dot{x}}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the second-derivative formula",
          "workingLatex": "\\dfrac{d^{2}y}{dx^{2}} = \\dfrac{\\dfrac{d}{dt}\\!\\left(\\dfrac{dy}{dx}\\right)}{\\dfrac{dx}{dt}}",
          "explanation": "To differentiate with respect to $x$ we differentiate with respect to $t$ and divide by $\\dfrac{dx}{dt}$, because $\\dfrac{d}{dx} = \\dfrac{1}{\\dot{x}}\\dfrac{d}{dt}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Differentiate dy/dx with respect to t",
          "workingLatex": "\\dfrac{d}{dt}\\!\\left(\\dfrac{dy}{dx}\\right) = \\dfrac{1}{2}",
          "explanation": "Differentiate the expression for $\\dfrac{dy}{dx}$ using standard rules.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Form d²y/dx²",
          "workingLatex": "\\dfrac{d^{2}y}{dx^{2}} = \\dfrac{1}{2}",
          "explanation": "Divide the result of step 5 by $\\dot{x}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate at t = 1",
          "workingLatex": "\\dfrac{d^{2}y}{dx^{2}} = \\dfrac{1}{4}",
          "explanation": "Substitute $t = 1$ into the second derivative.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret the sign",
          "workingLatex": "\\dfrac{d^{2}y}{dx^{2}} > 0",
          "explanation": "A negative second derivative indicates the curve is concave down; a positive value indicates concave up.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the second derivative",
          "workingLatex": "\\dfrac{d^{2}y}{dx^{2}} = \\dfrac{1}{4}",
          "explanation": "This measures how the gradient is changing at the given point.",
          "diagram": null
        }
      ],
      "finalAnswer": "\\dfrac{d^{2}y}{dx^{2}} = \\dfrac{1}{4}"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "questionDiagram": null,
    "id": "al.y2.pure.parametric-differentiation.q069",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "equation",
    "tags": [
      "parametric differentiation",
      "tangent",
      "parallel lines"
    ],
    "questionText": "A curve has parametric equations $x = t$ and $y = t^{2}$. Find the equation of the tangent to the curve that is parallel to the line $y = 3x$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate both coordinates",
          "workingLatex": "\\dot{x} = 1, \\qquad \\dot{y} = 2t",
          "explanation": "Parallel tangents share the same gradient, so we need $\\dfrac{dy}{dx}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Form dy/dx",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{2t}{1} = 2t",
          "explanation": "Write the gradient in terms of $t$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set the gradient equal to the given slope",
          "workingLatex": "\\dfrac{dy}{dx} = 3",
          "explanation": "A tangent parallel to a line with gradient $m$ has slope $m$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for t",
          "workingLatex": "t = \\dfrac{3}{2}",
          "explanation": "Solve for $t$, discarding any values where $\\dot{x} = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the point on the curve",
          "workingLatex": "$(\\tfrac{3}{2},\\, \\tfrac{9}{4})$",
          "explanation": "Substitute the valid $t$ into the parametric equations.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the tangent equation",
          "workingLatex": "y = 3x - \\dfrac{9}{4}",
          "explanation": "Use the point and the known parallel gradient.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify parallelism",
          "workingLatex": "m = 3",
          "explanation": "The tangent gradient matches the required slope, confirming the line is parallel.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Confirm the point lies on the curve",
          "workingLatex": "$(\\tfrac{3}{2},\\, \\tfrac{9}{4})$",
          "explanation": "Substituting back into the parametric equations checks the point is correct.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the tangent",
          "workingLatex": "y = 3x - \\dfrac{9}{4}",
          "explanation": "This tangent is parallel to the given line and touches the curve at the found point.",
          "diagram": null
        }
      ],
      "finalAnswer": "y = 3x - \\dfrac{9}{4}"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Parametric differentiation",
    "subtopicId": "al.y2.pure.parametric-differentiation",
    "questionDiagram": null,
    "id": "al.y2.pure.parametric-differentiation.q070",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "equation",
    "tags": [
      "parametric differentiation",
      "tangent",
      "parallel lines"
    ],
    "questionText": "A curve has parametric equations $x = t$ and $y = t^{2}$. Find the equation of the tangent to the curve that is parallel to the line $y = -\\dfrac{1}{2}x$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate both coordinates",
          "workingLatex": "\\dot{x} = 1, \\qquad \\dot{y} = 2t",
          "explanation": "Parallel tangents share the same gradient, so we need $\\dfrac{dy}{dx}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Form dy/dx",
          "workingLatex": "\\dfrac{dy}{dx} = \\dfrac{2t}{1} = 2t",
          "explanation": "Write the gradient in terms of $t$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set the gradient equal to the given slope",
          "workingLatex": "\\dfrac{dy}{dx} = -\\dfrac{1}{2}",
          "explanation": "A tangent parallel to a line with gradient $m$ has slope $m$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for t",
          "workingLatex": "t = -\\dfrac{1}{4}",
          "explanation": "Solve for $t$, discarding any values where $\\dot{x} = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the point on the curve",
          "workingLatex": "$(-\\tfrac{1}{4},\\, \\tfrac{1}{16})$",
          "explanation": "Substitute the valid $t$ into the parametric equations.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the tangent equation",
          "workingLatex": "y = -\\dfrac{1}{2}x + \\dfrac{1}{32}",
          "explanation": "Use the point and the known parallel gradient.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify parallelism",
          "workingLatex": "m = -\\dfrac{1}{2}",
          "explanation": "The tangent gradient matches the required slope, confirming the line is parallel.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Confirm the point lies on the curve",
          "workingLatex": "$(-\\tfrac{1}{4},\\, \\tfrac{1}{16})$",
          "explanation": "Substituting back into the parametric equations checks the point is correct.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the tangent",
          "workingLatex": "y = -\\dfrac{1}{2}x + \\dfrac{1}{32}",
          "explanation": "This tangent is parallel to the given line and touches the curve at the found point.",
          "diagram": null
        }
      ],
      "finalAnswer": "y = -\\dfrac{1}{2}x + \\dfrac{1}{32}"
    }
  }
];
