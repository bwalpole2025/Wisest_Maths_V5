import { Question } from "@/lib/types";

/**
 * A-Level Maths · Year 2 Pure · Rates of change
 * Connected rates via the chain rule; growth and decay; geometry (ladder, sphere, cone).
 * 70 questions.
 */
export const questions: Question[] = 
[
  {
    "id": "al.y2.pure.connected-rates.q001",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "tags": [
      "chain rule",
      "related rates",
      "definition"
    ],
    "questionText": "A quantity $y$ depends on $x$, and $x$ changes with time $t$. Explain how to find $\\dfrac{dy}{dt}$ when you know $\\dfrac{dy}{dx}$ and $\\dfrac{dx}{dt}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the chain rule for related rates",
          "workingLatex": "\\frac{dy}{dt} = \\frac{dy}{dx} \\cdot \\frac{dx}{dt}",
          "explanation": "When $y$ depends on $x$ and $x$ depends on $t$, the overall rate of change of $y$ is found by multiplying how fast $y$ changes with $x$ by how fast $x$ changes with time.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the two rates needed",
          "workingLatex": "\\frac{dy}{dx} \\text{ and } \\frac{dx}{dt}",
          "explanation": "$\\dfrac{dy}{dx}$ comes from differentiating the relationship $y = f(x)$; $\\dfrac{dx}{dt}$ is given by the problem.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Multiply the rates",
          "workingLatex": "\\frac{dy}{dt} = \\frac{dy}{dx} \\times \\frac{dx}{dt}",
          "explanation": "The chain rule links the three rates: the time rate equals the spatial rate times the time rate of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Units check",
          "workingLatex": "\\text{units of } \\frac{dy}{dt} = \\text{units of } y \\text{ per unit time}",
          "explanation": "The answer must have correct dimensions — e.g. cm s$^{-1}$ if $y$ is in cm and $t$ in seconds.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "When to use this",
          "workingLatex": "\\text{Given } \\frac{dx}{dt} \\text{ and a formula linking } y \\text{ to } x",
          "explanation": "Connected rates problems always give one time rate and ask for another, linked through an equation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Summary",
          "workingLatex": "\\frac{dy}{dt} = \\frac{dy}{dx}\\cdot\\frac{dx}{dt}",
          "explanation": "Differentiate $y$ with respect to $x$, then multiply by $\\dfrac{dx}{dt}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dy}{dt} = \\dfrac{dy}{dx} \\cdot \\dfrac{dx}{dt}$."
    }
  },
  {
    "id": "al.y2.pure.connected-rates.q002",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": [
      "chain rule",
      "polynomial"
    ],
    "questionText": "Given that $y = x^2$ and $\\dfrac{dx}{dt} = 3$, find $\\dfrac{dy}{dt}$ when $x = 4$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the chain rule",
          "workingLatex": "\\frac{dy}{dt} = \\frac{dy}{dx}\\cdot\\frac{dx}{dt}",
          "explanation": "We link the time rate of $y$ to the time rate of $x$ through the derivative $\\dfrac{dy}{dx}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate $y$ with respect to $x$",
          "workingLatex": "\\frac{dy}{dx} = 2x",
          "explanation": "Differentiating $y = x^2$ gives $\\dfrac{dy}{dx} = 2x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute $x = 4$",
          "workingLatex": "\\frac{dy}{dx}\\bigg|_{x=4} = 24",
          "explanation": "At $x = 4$, evaluate the derivative.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate $\\dfrac{dy}{dx}$ at the point",
          "workingLatex": "\\frac{dy}{dx} = 8",
          "explanation": "Substituting $x = 4$ into $\\dfrac{dy}{dx} = 2x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Multiply by $\\dfrac{dx}{dt}$",
          "workingLatex": "\\frac{dy}{dt} = 8 \\times 3",
          "explanation": "Given $\\dfrac{dx}{dt} = 3$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Calculate the result",
          "workingLatex": "\\frac{dy}{dt} = 24",
          "explanation": "$\\dfrac{dy}{dt} = 24$ at $x = 4$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dy}{dt} = 24$"
    }
  },
  {
    "id": "al.y2.pure.connected-rates.q003",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": [
      "chain rule",
      "polynomial"
    ],
    "questionText": "Given that $y = x^3$ and $\\dfrac{dx}{dt} = 5$, find $\\dfrac{dy}{dt}$ when $x = 2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the chain rule",
          "workingLatex": "\\frac{dy}{dt} = \\frac{dy}{dx}\\cdot\\frac{dx}{dt}",
          "explanation": "We link the time rate of $y$ to the time rate of $x$ through the derivative $\\dfrac{dy}{dx}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate $y$ with respect to $x$",
          "workingLatex": "\\frac{dy}{dx} = 3x^2",
          "explanation": "Differentiating $y = x^3$ gives $\\dfrac{dy}{dx} = 3x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute $x = 2$",
          "workingLatex": "\\frac{dy}{dx}\\bigg|_{x=2} = 32^2",
          "explanation": "At $x = 2$, evaluate the derivative.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate $\\dfrac{dy}{dx}$ at the point",
          "workingLatex": "\\frac{dy}{dx} = 12",
          "explanation": "Substituting $x = 2$ into $\\dfrac{dy}{dx} = 3x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Multiply by $\\dfrac{dx}{dt}$",
          "workingLatex": "\\frac{dy}{dt} = 12 \\times 5",
          "explanation": "Given $\\dfrac{dx}{dt} = 5$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Calculate the result",
          "workingLatex": "\\frac{dy}{dt} = 60",
          "explanation": "$\\dfrac{dy}{dt} = 60$ at $x = 2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dy}{dt} = 60$"
    }
  },
  {
    "id": "al.y2.pure.connected-rates.q004",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": [
      "chain rule",
      "polynomial"
    ],
    "questionText": "Given that $y = 5x$ and $\\dfrac{dx}{dt} = 2$, find $\\dfrac{dy}{dt}$ when $x = 6$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the chain rule",
          "workingLatex": "\\frac{dy}{dt} = \\frac{dy}{dx}\\cdot\\frac{dx}{dt}",
          "explanation": "We link the time rate of $y$ to the time rate of $x$ through the derivative $\\dfrac{dy}{dx}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate $y$ with respect to $x$",
          "workingLatex": "\\frac{dy}{dx} = 5",
          "explanation": "Differentiating $y = 5x$ gives $\\dfrac{dy}{dx} = 5$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute $x = 6$",
          "workingLatex": "\\frac{dy}{dx}\\bigg|_{x=6} = 5",
          "explanation": "At $x = 6$, evaluate the derivative.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate $\\dfrac{dy}{dx}$ at the point",
          "workingLatex": "\\frac{dy}{dx} = 5",
          "explanation": "Substituting $x = 6$ into $\\dfrac{dy}{dx} = 5$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Multiply by $\\dfrac{dx}{dt}$",
          "workingLatex": "\\frac{dy}{dt} = 5 \\times 2",
          "explanation": "Given $\\dfrac{dx}{dt} = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Calculate the result",
          "workingLatex": "\\frac{dy}{dt} = 10",
          "explanation": "$\\dfrac{dy}{dt} = 10$ at $x = 6$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dy}{dt} = 10$"
    }
  },
  {
    "id": "al.y2.pure.connected-rates.q005",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": [
      "chain rule",
      "polynomial"
    ],
    "questionText": "Given that $y = x^2 + 3x$ and $\\dfrac{dx}{dt} = 4$, find $\\dfrac{dy}{dt}$ when $x = 5$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the chain rule",
          "workingLatex": "\\frac{dy}{dt} = \\frac{dy}{dx}\\cdot\\frac{dx}{dt}",
          "explanation": "We link the time rate of $y$ to the time rate of $x$ through the derivative $\\dfrac{dy}{dx}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate $y$ with respect to $x$",
          "workingLatex": "\\frac{dy}{dx} = 2x + 3",
          "explanation": "Differentiating $y = x^2 + 3x$ gives $\\dfrac{dy}{dx} = 2x + 3$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute $x = 5$",
          "workingLatex": "\\frac{dy}{dx}\\bigg|_{x=5} = 25 + 3",
          "explanation": "At $x = 5$, evaluate the derivative.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate $\\dfrac{dy}{dx}$ at the point",
          "workingLatex": "\\frac{dy}{dx} = 13",
          "explanation": "Substituting $x = 5$ into $\\dfrac{dy}{dx} = 2x + 3$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Multiply by $\\dfrac{dx}{dt}$",
          "workingLatex": "\\frac{dy}{dt} = 13 \\times 4",
          "explanation": "Given $\\dfrac{dx}{dt} = 4$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Calculate the result",
          "workingLatex": "\\frac{dy}{dt} = 52",
          "explanation": "$\\dfrac{dy}{dt} = 52$ at $x = 5$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dy}{dt} = 52$"
    }
  },
  {
    "id": "al.y2.pure.connected-rates.q006",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": [
      "chain rule",
      "polynomial"
    ],
    "questionText": "Given that $y = 2x^2$ and $\\dfrac{dx}{dt} = 6$, find $\\dfrac{dy}{dt}$ when $x = 3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the chain rule",
          "workingLatex": "\\frac{dy}{dt} = \\frac{dy}{dx}\\cdot\\frac{dx}{dt}",
          "explanation": "We link the time rate of $y$ to the time rate of $x$ through the derivative $\\dfrac{dy}{dx}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate $y$ with respect to $x$",
          "workingLatex": "\\frac{dy}{dx} = 4x",
          "explanation": "Differentiating $y = 2x^2$ gives $\\dfrac{dy}{dx} = 4x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute $x = 3$",
          "workingLatex": "\\frac{dy}{dx}\\bigg|_{x=3} = 43",
          "explanation": "At $x = 3$, evaluate the derivative.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate $\\dfrac{dy}{dx}$ at the point",
          "workingLatex": "\\frac{dy}{dx} = 12",
          "explanation": "Substituting $x = 3$ into $\\dfrac{dy}{dx} = 4x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Multiply by $\\dfrac{dx}{dt}$",
          "workingLatex": "\\frac{dy}{dt} = 12 \\times 6",
          "explanation": "Given $\\dfrac{dx}{dt} = 6$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Calculate the result",
          "workingLatex": "\\frac{dy}{dt} = 72",
          "explanation": "$\\dfrac{dy}{dt} = 72$ at $x = 3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dy}{dt} = 72$"
    }
  },
  {
    "id": "al.y2.pure.connected-rates.q007",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": [
      "chain rule",
      "polynomial"
    ],
    "questionText": "Given that $y = x^4$ and $\\dfrac{dx}{dt} = 1$, find $\\dfrac{dy}{dt}$ when $x = 2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the chain rule",
          "workingLatex": "\\frac{dy}{dt} = \\frac{dy}{dx}\\cdot\\frac{dx}{dt}",
          "explanation": "We link the time rate of $y$ to the time rate of $x$ through the derivative $\\dfrac{dy}{dx}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate $y$ with respect to $x$",
          "workingLatex": "\\frac{dy}{dx} = 4x^3",
          "explanation": "Differentiating $y = x^4$ gives $\\dfrac{dy}{dx} = 4x^3$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute $x = 2$",
          "workingLatex": "\\frac{dy}{dx}\\bigg|_{x=2} = 42^3",
          "explanation": "At $x = 2$, evaluate the derivative.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate $\\dfrac{dy}{dx}$ at the point",
          "workingLatex": "\\frac{dy}{dx} = 32",
          "explanation": "Substituting $x = 2$ into $\\dfrac{dy}{dx} = 4x^3$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Multiply by $\\dfrac{dx}{dt}$",
          "workingLatex": "\\frac{dy}{dt} = 32 \\times 1",
          "explanation": "Given $\\dfrac{dx}{dt} = 1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Calculate the result",
          "workingLatex": "\\frac{dy}{dt} = 32",
          "explanation": "$\\dfrac{dy}{dt} = 32$ at $x = 2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dy}{dt} = 32$"
    }
  },
  {
    "id": "al.y2.pure.connected-rates.q008",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": [
      "chain rule",
      "polynomial"
    ],
    "questionText": "Given that $y = 3x^2 - x$ and $\\dfrac{dx}{dt} = 2$, find $\\dfrac{dy}{dt}$ when $x = 4$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the chain rule",
          "workingLatex": "\\frac{dy}{dt} = \\frac{dy}{dx}\\cdot\\frac{dx}{dt}",
          "explanation": "We link the time rate of $y$ to the time rate of $x$ through the derivative $\\dfrac{dy}{dx}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate $y$ with respect to $x$",
          "workingLatex": "\\frac{dy}{dx} = 6x - 1",
          "explanation": "Differentiating $y = 3x^2 - x$ gives $\\dfrac{dy}{dx} = 6x - 1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute $x = 4$",
          "workingLatex": "\\frac{dy}{dx}\\bigg|_{x=4} = 64 - 1",
          "explanation": "At $x = 4$, evaluate the derivative.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate $\\dfrac{dy}{dx}$ at the point",
          "workingLatex": "\\frac{dy}{dx} = 23",
          "explanation": "Substituting $x = 4$ into $\\dfrac{dy}{dx} = 6x - 1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Multiply by $\\dfrac{dx}{dt}$",
          "workingLatex": "\\frac{dy}{dt} = 23 \\times 2",
          "explanation": "Given $\\dfrac{dx}{dt} = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Calculate the result",
          "workingLatex": "\\frac{dy}{dt} = 46",
          "explanation": "$\\dfrac{dy}{dt} = 46$ at $x = 4$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dy}{dt} = 46$"
    }
  },
  {
    "id": "al.y2.pure.connected-rates.q009",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "geometry",
      "circle",
      "area"
    ],
    "questionText": "The radius of a circular oil spill is increasing at $\\dfrac{dr}{dt} = 2$ cm s$^{-1}$. The area is $A = \\pi r^2$. Find $\\dfrac{dA}{dt}$ when $r = 5$ cm.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the area formula",
          "workingLatex": "A = \\pi r^2",
          "explanation": "Area depends on radius, so we differentiate $A$ with respect to $r$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate with respect to $r$",
          "workingLatex": "\\frac{dA}{dr} = 2\\pi r",
          "explanation": "Power rule: derivative of $r^2$ is $2r$, times $\\pi$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute $r = 5$",
          "workingLatex": "\\frac{dA}{dr} = 2\\pi \\times 5 = 10\\pi",
          "explanation": "At $r = 5$ cm, $\\dfrac{dA}{dr} = 10\\pi$ cm$^2$ per cm.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the chain rule",
          "workingLatex": "\\frac{dA}{dt} = \\frac{dA}{dr}\\cdot\\frac{dr}{dt}",
          "explanation": "The rate of change of area with time equals the rate w.r.t. radius times the rate of radius.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute $\\dfrac{dr}{dt} = 2$",
          "workingLatex": "\\frac{dA}{dt} = 10\\pi \\times 2",
          "explanation": "Given $\\dfrac{dr}{dt} = 2$ cm s$^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify",
          "workingLatex": "\\frac{dA}{dt} = 62.83\\pi \\text{ cm}^2\\text{ s}^{-1}",
          "explanation": "The spill area grows at $62.83\\pi$ cm$^2$ s$^{-1}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dA}{dt} = 20\\pi$ cm$^2$ s$^{-1}$"
    }
  },
  {
    "id": "al.y2.pure.connected-rates.q010",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "geometry",
      "circle",
      "area"
    ],
    "questionText": "The radius of a circular oil spill is increasing at $\\dfrac{dr}{dt} = 0.5$ cm s$^{-1}$. The area is $A = \\pi r^2$. Find $\\dfrac{dA}{dt}$ when $r = 8$ cm.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the area formula",
          "workingLatex": "A = \\pi r^2",
          "explanation": "Area depends on radius, so we differentiate $A$ with respect to $r$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate with respect to $r$",
          "workingLatex": "\\frac{dA}{dr} = 2\\pi r",
          "explanation": "Power rule: derivative of $r^2$ is $2r$, times $\\pi$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute $r = 8$",
          "workingLatex": "\\frac{dA}{dr} = 2\\pi \\times 8 = 16\\pi",
          "explanation": "At $r = 8$ cm, $\\dfrac{dA}{dr} = 16\\pi$ cm$^2$ per cm.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the chain rule",
          "workingLatex": "\\frac{dA}{dt} = \\frac{dA}{dr}\\cdot\\frac{dr}{dt}",
          "explanation": "The rate of change of area with time equals the rate w.r.t. radius times the rate of radius.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute $\\dfrac{dr}{dt} = 0.5$",
          "workingLatex": "\\frac{dA}{dt} = 16\\pi \\times 0.5",
          "explanation": "Given $\\dfrac{dr}{dt} = 0.5$ cm s$^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify",
          "workingLatex": "\\frac{dA}{dt} = 25.13\\pi \\text{ cm}^2\\text{ s}^{-1}",
          "explanation": "The spill area grows at $25.13\\pi$ cm$^2$ s$^{-1}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dA}{dt} = 8.0\\pi$ cm$^2$ s$^{-1}$"
    }
  },
  {
    "id": "al.y2.pure.connected-rates.q011",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "geometry",
      "circle",
      "area"
    ],
    "questionText": "The radius of a circular oil spill is increasing at $\\dfrac{dr}{dt} = 4$ cm s$^{-1}$. The area is $A = \\pi r^2$. Find $\\dfrac{dA}{dt}$ when $r = 3$ cm.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the area formula",
          "workingLatex": "A = \\pi r^2",
          "explanation": "Area depends on radius, so we differentiate $A$ with respect to $r$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate with respect to $r$",
          "workingLatex": "\\frac{dA}{dr} = 2\\pi r",
          "explanation": "Power rule: derivative of $r^2$ is $2r$, times $\\pi$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute $r = 3$",
          "workingLatex": "\\frac{dA}{dr} = 2\\pi \\times 3 = 6\\pi",
          "explanation": "At $r = 3$ cm, $\\dfrac{dA}{dr} = 6\\pi$ cm$^2$ per cm.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the chain rule",
          "workingLatex": "\\frac{dA}{dt} = \\frac{dA}{dr}\\cdot\\frac{dr}{dt}",
          "explanation": "The rate of change of area with time equals the rate w.r.t. radius times the rate of radius.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute $\\dfrac{dr}{dt} = 4$",
          "workingLatex": "\\frac{dA}{dt} = 6\\pi \\times 4",
          "explanation": "Given $\\dfrac{dr}{dt} = 4$ cm s$^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify",
          "workingLatex": "\\frac{dA}{dt} = 75.40\\pi \\text{ cm}^2\\text{ s}^{-1}",
          "explanation": "The spill area grows at $75.40\\pi$ cm$^2$ s$^{-1}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dA}{dt} = 24\\pi$ cm$^2$ s$^{-1}$"
    }
  },
  {
    "id": "al.y2.pure.connected-rates.q012",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "geometry",
      "circle",
      "area"
    ],
    "questionText": "The radius of a circular oil spill is increasing at $\\dfrac{dr}{dt} = 1$ cm s$^{-1}$. The area is $A = \\pi r^2$. Find $\\dfrac{dA}{dt}$ when $r = 10$ cm.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the area formula",
          "workingLatex": "A = \\pi r^2",
          "explanation": "Area depends on radius, so we differentiate $A$ with respect to $r$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate with respect to $r$",
          "workingLatex": "\\frac{dA}{dr} = 2\\pi r",
          "explanation": "Power rule: derivative of $r^2$ is $2r$, times $\\pi$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute $r = 10$",
          "workingLatex": "\\frac{dA}{dr} = 2\\pi \\times 10 = 20\\pi",
          "explanation": "At $r = 10$ cm, $\\dfrac{dA}{dr} = 20\\pi$ cm$^2$ per cm.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the chain rule",
          "workingLatex": "\\frac{dA}{dt} = \\frac{dA}{dr}\\cdot\\frac{dr}{dt}",
          "explanation": "The rate of change of area with time equals the rate w.r.t. radius times the rate of radius.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute $\\dfrac{dr}{dt} = 1$",
          "workingLatex": "\\frac{dA}{dt} = 20\\pi \\times 1",
          "explanation": "Given $\\dfrac{dr}{dt} = 1$ cm s$^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify",
          "workingLatex": "\\frac{dA}{dt} = 62.83\\pi \\text{ cm}^2\\text{ s}^{-1}",
          "explanation": "The spill area grows at $62.83\\pi$ cm$^2$ s$^{-1}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dA}{dt} = 20\\pi$ cm$^2$ s$^{-1}$"
    }
  },
  {
    "id": "al.y2.pure.connected-rates.q013",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": [
      "volume",
      "chain rule"
    ],
    "questionText": "A cube-shaped container has volume $V = r^3$ (in m$^3$) where $r$ is the side length in metres. If $\\dfrac{dr}{dt} = 3$ m s$^{-1}$ when $r = 4$ m, find $\\dfrac{dV}{dt}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate the volume formula",
          "workingLatex": "\\frac{dV}{dr} = 3r^2",
          "explanation": "Derivative of $r^3$ is $3r^2$ by the power rule.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate at $r = 4$",
          "workingLatex": "\\frac{dV}{dr} = 3 \\times 4^2 = 48",
          "explanation": "At $r = 4$ m, $\\dfrac{dV}{dr} = 48$ m$^2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the chain rule",
          "workingLatex": "\\frac{dV}{dt} = \\frac{dV}{dr}\\cdot\\frac{dr}{dt}",
          "explanation": "Connect the time rate of volume to the time rate of side length.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute known values",
          "workingLatex": "\\frac{dV}{dt} = 48 \\times 3",
          "explanation": "With $\\dfrac{dr}{dt} = 3$ m s$^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Calculate",
          "workingLatex": "\\frac{dV}{dt} = 48",
          "explanation": "Volume increases at $48$ m$^3$ s$^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret",
          "workingLatex": "\\text{The container fills at } 48 \\text{ m}^3\\text{ s}^{-1}",
          "explanation": "A positive rate means the volume is growing.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dV}{dt} = 48$ m$^3$ s$^{-1}$"
    }
  },
  {
    "id": "al.y2.pure.connected-rates.q014",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": [
      "volume",
      "chain rule"
    ],
    "questionText": "A cube-shaped container has volume $V = r^3$ (in m$^3$) where $r$ is the side length in metres. If $\\dfrac{dr}{dt} = 2$ m s$^{-1}$ when $r = 5$ m, find $\\dfrac{dV}{dt}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate the volume formula",
          "workingLatex": "\\frac{dV}{dr} = 3r^2",
          "explanation": "Derivative of $r^3$ is $3r^2$ by the power rule.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate at $r = 5$",
          "workingLatex": "\\frac{dV}{dr} = 3 \\times 5^2 = 75",
          "explanation": "At $r = 5$ m, $\\dfrac{dV}{dr} = 75$ m$^2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the chain rule",
          "workingLatex": "\\frac{dV}{dt} = \\frac{dV}{dr}\\cdot\\frac{dr}{dt}",
          "explanation": "Connect the time rate of volume to the time rate of side length.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute known values",
          "workingLatex": "\\frac{dV}{dt} = 75 \\times 2",
          "explanation": "With $\\dfrac{dr}{dt} = 2$ m s$^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Calculate",
          "workingLatex": "\\frac{dV}{dt} = 150",
          "explanation": "Volume increases at $150$ m$^3$ s$^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret",
          "workingLatex": "\\text{The container fills at } 150 \\text{ m}^3\\text{ s}^{-1}",
          "explanation": "A positive rate means the volume is growing.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dV}{dt} = 150$ m$^3$ s$^{-1}$"
    }
  },
  {
    "id": "al.y2.pure.connected-rates.q015",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": [
      "volume",
      "chain rule"
    ],
    "questionText": "A cube-shaped container has volume $V = r^3$ (in m$^3$) where $r$ is the side length in metres. If $\\dfrac{dr}{dt} = 5$ m s$^{-1}$ when $r = 3$ m, find $\\dfrac{dV}{dt}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate the volume formula",
          "workingLatex": "\\frac{dV}{dr} = 3r^2",
          "explanation": "Derivative of $r^3$ is $3r^2$ by the power rule.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate at $r = 3$",
          "workingLatex": "\\frac{dV}{dr} = 3 \\times 3^2 = 27",
          "explanation": "At $r = 3$ m, $\\dfrac{dV}{dr} = 27$ m$^2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the chain rule",
          "workingLatex": "\\frac{dV}{dt} = \\frac{dV}{dr}\\cdot\\frac{dr}{dt}",
          "explanation": "Connect the time rate of volume to the time rate of side length.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute known values",
          "workingLatex": "\\frac{dV}{dt} = 27 \\times 5",
          "explanation": "With $\\dfrac{dr}{dt} = 5$ m s$^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Calculate",
          "workingLatex": "\\frac{dV}{dt} = 135",
          "explanation": "Volume increases at $135$ m$^3$ s$^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret",
          "workingLatex": "\\text{The container fills at } 135 \\text{ m}^3\\text{ s}^{-1}",
          "explanation": "A positive rate means the volume is growing.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dV}{dt} = 135$ m$^3$ s$^{-1}$"
    }
  },
  {
    "id": "al.y2.pure.connected-rates.q016",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": [
      "volume",
      "chain rule"
    ],
    "questionText": "A cube-shaped container has volume $V = r^3$ (in m$^3$) where $r$ is the side length in metres. If $\\dfrac{dr}{dt} = 1$ m s$^{-1}$ when $r = 6$ m, find $\\dfrac{dV}{dt}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate the volume formula",
          "workingLatex": "\\frac{dV}{dr} = 3r^2",
          "explanation": "Derivative of $r^3$ is $3r^2$ by the power rule.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate at $r = 6$",
          "workingLatex": "\\frac{dV}{dr} = 3 \\times 6^2 = 108",
          "explanation": "At $r = 6$ m, $\\dfrac{dV}{dr} = 108$ m$^2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the chain rule",
          "workingLatex": "\\frac{dV}{dt} = \\frac{dV}{dr}\\cdot\\frac{dr}{dt}",
          "explanation": "Connect the time rate of volume to the time rate of side length.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute known values",
          "workingLatex": "\\frac{dV}{dt} = 108 \\times 1",
          "explanation": "With $\\dfrac{dr}{dt} = 1$ m s$^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Calculate",
          "workingLatex": "\\frac{dV}{dt} = 108",
          "explanation": "Volume increases at $108$ m$^3$ s$^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret",
          "workingLatex": "\\text{The container fills at } 108 \\text{ m}^3\\text{ s}^{-1}",
          "explanation": "A positive rate means the volume is growing.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dV}{dt} = 108$ m$^3$ s$^{-1}$"
    }
  },
  {
    "id": "al.y2.pure.connected-rates.q017",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "chain rule",
      "surds"
    ],
    "questionText": "Given $y = \\sqrt{x}$ and $\\dfrac{dx}{dt} = 8$, find $\\dfrac{dy}{dt}$ when $x = 16$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rewrite as a power",
          "workingLatex": "y = x^{1/2}",
          "explanation": "Square root is the same as power $\\frac{1}{2}$, which is easier to differentiate.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate",
          "workingLatex": "\\frac{dy}{dx} = \\frac{1}{2}x^{-1/2} = \\frac{1}{2\\sqrt{x}}",
          "explanation": "Power rule: bring down $\\frac{1}{2}$ and reduce the exponent.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute $x = 16$",
          "workingLatex": "\\frac{dy}{dx} = \\frac{1}{2\\sqrt{16}} = \\frac{1}{8}",
          "explanation": "$\\sqrt{16} = 4$, so $\\dfrac{dy}{dx} = \\frac{1}{8}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the chain rule",
          "workingLatex": "\\frac{dy}{dt} = \\frac{dy}{dx}\\cdot\\frac{dx}{dt}",
          "explanation": "Multiply by the given rate $\\dfrac{dx}{dt}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute $\\dfrac{dx}{dt} = 8$",
          "workingLatex": "\\frac{dy}{dt} = \\frac{1}{8} \\times 8 = 1",
          "explanation": "The rates combine to give $\\dfrac{dy}{dt} = 1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check units",
          "workingLatex": "\\text{units of } y \\text{ per unit time}",
          "explanation": "If $x$ and $y$ share units, the rate has consistent dimensions.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dy}{dt} = 1$"
    }
  },
  {
    "id": "al.y2.pure.connected-rates.q018",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "chain rule",
      "reciprocal"
    ],
    "questionText": "Given $y = \\dfrac{1}{x}$ and $\\dfrac{dx}{dt} = -2$, find $\\dfrac{dy}{dt}$ when $x = 5$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rewrite",
          "workingLatex": "y = x^{-1}",
          "explanation": "Reciprocal form makes differentiation straightforward.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate",
          "workingLatex": "\\frac{dy}{dx} = -x^{-2} = -\\frac{1}{x^2}",
          "explanation": "Power rule gives $-1 \\cdot x^{-2}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute $x = 5$",
          "workingLatex": "\\frac{dy}{dx} = -\\frac{1}{25}",
          "explanation": "At $x = 5$, the spatial rate is $-\\frac{1}{25}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Chain rule",
          "workingLatex": "\\frac{dy}{dt} = \\frac{dy}{dx}\\cdot\\frac{dx}{dt}",
          "explanation": "Link to the time rate.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute $\\dfrac{dx}{dt} = -2$",
          "workingLatex": "\\frac{dy}{dt} = -\\frac{1}{25} \\times (-2) = \\frac{2}{25}",
          "explanation": "Negative times negative gives positive.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Decimal form",
          "workingLatex": "\\frac{dy}{dt} = 0.08",
          "explanation": "$\\dfrac{2}{25} = 0.08$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dy}{dt} = \\dfrac{2}{25}$ (or $0.08$)"
    }
  },
  {
    "id": "al.y2.pure.connected-rates.q019",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "ladder",
      "Pythagoras",
      "implicit"
    ],
    "questionText": "A $10$ m ladder leans against a vertical wall. The foot of the ladder slides away from the wall at $0.5$ m s$^{-1}$. How fast is the top sliding down when the foot is $6$ m from the wall?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Draw and label",
          "workingLatex": "x = \\text{distance from wall},\\; y = \\text{height on wall}",
          "explanation": "Let $x$ be horizontal distance and $y$ vertical height; both change with time.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Pythagoras",
          "workingLatex": "x^2 + y^2 = 100",
          "explanation": "The ladder length $10$ m is fixed, so $x^2 + y^2 = 10^2 = 100$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find $y$ when $x = 6$",
          "workingLatex": "y^2 = 100 - 36 = 64 \\Rightarrow y = 8",
          "explanation": "The top is $8$ m up the wall.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Differentiate implicitly w.r.t. $t$",
          "workingLatex": "2x\\frac{dx}{dt} + 2y\\frac{dy}{dt} = 0",
          "explanation": "Both $x$ and $y$ depend on $t$, so we differentiate the whole equation with respect to time.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for $\\dfrac{dy}{dt}$",
          "workingLatex": "\\frac{dy}{dt} = -\\frac{x}{y}\\cdot\\frac{dx}{dt}",
          "explanation": "Rearrange: the vertical rate is proportional to the horizontal rate, scaled by $-x/y$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute $x = 6$, $y = 8$, $\\dfrac{dx}{dt} = 0.5$",
          "workingLatex": "\\frac{dy}{dt} = -\\frac{6}{8} \\times 0.5 = -\\frac{3}{8}",
          "explanation": "Negative means the top moves down.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Interpret",
          "workingLatex": "\\frac{dy}{dt} = -0.375 \\text{ m s}^{-1}",
          "explanation": "The top slides down at $0.375$ m s$^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Why negative?",
          "workingLatex": "\\text{height decreasing}",
          "explanation": "A downward motion gives a negative rate for $y$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check magnitude",
          "workingLatex": "|\\frac{dy}{dt}| < |\\frac{dx}{dt}|",
          "explanation": "When the ladder is shallow, vertical motion is slower than horizontal.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dy}{dt} = -0.375$ m s$^{-1}$ (top slides down at $0.375$ m s$^{-1}$)"
    }
  },
  {
    "id": "al.y2.pure.connected-rates.q020",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "ladder",
      "related rates"
    ],
    "questionText": "A $13$ m ladder slides with its foot moving away from a wall at $\\dfrac{dx}{dt} = 1.5$ m s$^{-1}$. Find $\\dfrac{dy}{dt}$ when the foot is $5$ m from the wall.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up",
          "workingLatex": "x^2 + y^2 = 169",
          "explanation": "Fixed ladder length $13$ m gives $x^2 + y^2 = 169$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find $y$ when $x = 5$",
          "workingLatex": "y = \\sqrt{169 - 25} = 12",
          "explanation": "Height on wall is $12$ m.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate w.r.t. $t$",
          "workingLatex": "2x\\frac{dx}{dt} + 2y\\frac{dy}{dt} = 0",
          "explanation": "Implicit differentiation links the two time rates.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rearrange",
          "workingLatex": "\\frac{dy}{dt} = -\\frac{x}{y}\\cdot\\frac{dx}{dt}",
          "explanation": "Solve for the vertical rate.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute values",
          "workingLatex": "\\frac{dy}{dt} = -\\frac{5}{12} \\times 1.5",
          "explanation": "With $x = 5$, $y = 12$, $\\dfrac{dx}{dt} = 1.5$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Calculate",
          "workingLatex": "\\frac{dy}{dt} = -0.62",
          "explanation": "$\\dfrac{dy}{dt} = -0.62$ m s$^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Sign interpretation",
          "workingLatex": "\\text{negative} \\Rightarrow \\text{top moves down}",
          "explanation": "The top descends as the foot moves out.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Units",
          "workingLatex": "\\text{m s}^{-1}",
          "explanation": "Rate of change of height in metres per second.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Magnitude",
          "workingLatex": "|\\frac{dy}{dt}| = 0.62",
          "explanation": "Speed of descent is $0.62$ m s$^{-1}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dy}{dt} = -0.62$ m s$^{-1}$"
    }
  },
  {
    "id": "al.y2.pure.connected-rates.q021",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "ladder",
      "related rates"
    ],
    "questionText": "A $5$ m ladder slides with its foot moving away from a wall at $\\dfrac{dx}{dt} = 2$ m s$^{-1}$. Find $\\dfrac{dy}{dt}$ when the foot is $3$ m from the wall.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up",
          "workingLatex": "x^2 + y^2 = 25",
          "explanation": "Fixed ladder length $5$ m gives $x^2 + y^2 = 25$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find $y$ when $x = 3$",
          "workingLatex": "y = \\sqrt{25 - 9} = 4",
          "explanation": "Height on wall is $4$ m.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate w.r.t. $t$",
          "workingLatex": "2x\\frac{dx}{dt} + 2y\\frac{dy}{dt} = 0",
          "explanation": "Implicit differentiation links the two time rates.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rearrange",
          "workingLatex": "\\frac{dy}{dt} = -\\frac{x}{y}\\cdot\\frac{dx}{dt}",
          "explanation": "Solve for the vertical rate.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute values",
          "workingLatex": "\\frac{dy}{dt} = -\\frac{3}{4} \\times 2",
          "explanation": "With $x = 3$, $y = 4$, $\\dfrac{dx}{dt} = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Calculate",
          "workingLatex": "\\frac{dy}{dt} = -1.50",
          "explanation": "$\\dfrac{dy}{dt} = -1.50$ m s$^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Sign interpretation",
          "workingLatex": "\\text{negative} \\Rightarrow \\text{top moves down}",
          "explanation": "The top descends as the foot moves out.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Units",
          "workingLatex": "\\text{m s}^{-1}",
          "explanation": "Rate of change of height in metres per second.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Magnitude",
          "workingLatex": "|\\frac{dy}{dt}| = 1.50",
          "explanation": "Speed of descent is $1.50$ m s$^{-1}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dy}{dt} = -1.50$ m s$^{-1}$"
    }
  },
  {
    "id": "al.y2.pure.connected-rates.q022",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "ladder",
      "related rates"
    ],
    "questionText": "A $8$ m ladder slides with its foot moving away from a wall at $\\dfrac{dx}{dt} = 0.4$ m s$^{-1}$. Find $\\dfrac{dy}{dt}$ when the foot is $6$ m from the wall.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up",
          "workingLatex": "x^2 + y^2 = 64",
          "explanation": "Fixed ladder length $8$ m gives $x^2 + y^2 = 64$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find $y$ when $x = 6$",
          "workingLatex": "y = \\sqrt{64 - 36} = 5.29",
          "explanation": "Height on wall is $5.29$ m.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate w.r.t. $t$",
          "workingLatex": "2x\\frac{dx}{dt} + 2y\\frac{dy}{dt} = 0",
          "explanation": "Implicit differentiation links the two time rates.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rearrange",
          "workingLatex": "\\frac{dy}{dt} = -\\frac{x}{y}\\cdot\\frac{dx}{dt}",
          "explanation": "Solve for the vertical rate.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute values",
          "workingLatex": "\\frac{dy}{dt} = -\\frac{6}{5.29} \\times 0.4",
          "explanation": "With $x = 6$, $y = 5.29$, $\\dfrac{dx}{dt} = 0.4$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Calculate",
          "workingLatex": "\\frac{dy}{dt} = -0.24",
          "explanation": "$\\dfrac{dy}{dt} = -0.24$ m s$^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Sign interpretation",
          "workingLatex": "\\text{negative} \\Rightarrow \\text{top moves down}",
          "explanation": "The top descends as the foot moves out.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Units",
          "workingLatex": "\\text{m s}^{-1}",
          "explanation": "Rate of change of height in metres per second.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Magnitude",
          "workingLatex": "|\\frac{dy}{dt}| = 0.24",
          "explanation": "Speed of descent is $0.24$ m s$^{-1}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dy}{dt} = -0.24$ m s$^{-1}$"
    }
  },
  {
    "id": "al.y2.pure.connected-rates.q023",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "ladder",
      "related rates"
    ],
    "questionText": "A $15$ m ladder slides with its foot moving away from a wall at $\\dfrac{dx}{dt} = 1$ m s$^{-1}$. Find $\\dfrac{dy}{dt}$ when the foot is $9$ m from the wall.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up",
          "workingLatex": "x^2 + y^2 = 225",
          "explanation": "Fixed ladder length $15$ m gives $x^2 + y^2 = 225$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find $y$ when $x = 9$",
          "workingLatex": "y = \\sqrt{225 - 81} = 12",
          "explanation": "Height on wall is $12$ m.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate w.r.t. $t$",
          "workingLatex": "2x\\frac{dx}{dt} + 2y\\frac{dy}{dt} = 0",
          "explanation": "Implicit differentiation links the two time rates.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rearrange",
          "workingLatex": "\\frac{dy}{dt} = -\\frac{x}{y}\\cdot\\frac{dx}{dt}",
          "explanation": "Solve for the vertical rate.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute values",
          "workingLatex": "\\frac{dy}{dt} = -\\frac{9}{12} \\times 1",
          "explanation": "With $x = 9$, $y = 12$, $\\dfrac{dx}{dt} = 1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Calculate",
          "workingLatex": "\\frac{dy}{dt} = -0.75",
          "explanation": "$\\dfrac{dy}{dt} = -0.75$ m s$^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Sign interpretation",
          "workingLatex": "\\text{negative} \\Rightarrow \\text{top moves down}",
          "explanation": "The top descends as the foot moves out.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Units",
          "workingLatex": "\\text{m s}^{-1}",
          "explanation": "Rate of change of height in metres per second.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Magnitude",
          "workingLatex": "|\\frac{dy}{dt}| = 0.75",
          "explanation": "Speed of descent is $0.75$ m s$^{-1}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dy}{dt} = -0.75$ m s$^{-1}$"
    }
  },
  {
    "id": "al.y2.pure.connected-rates.q024",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "ladder",
      "related rates"
    ],
    "questionText": "A $10$ m ladder slides with its foot moving away from a wall at $\\dfrac{dx}{dt} = 0.25$ m s$^{-1}$. Find $\\dfrac{dy}{dt}$ when the foot is $8$ m from the wall.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up",
          "workingLatex": "x^2 + y^2 = 100",
          "explanation": "Fixed ladder length $10$ m gives $x^2 + y^2 = 100$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find $y$ when $x = 8$",
          "workingLatex": "y = \\sqrt{100 - 64} = 6",
          "explanation": "Height on wall is $6$ m.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate w.r.t. $t$",
          "workingLatex": "2x\\frac{dx}{dt} + 2y\\frac{dy}{dt} = 0",
          "explanation": "Implicit differentiation links the two time rates.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rearrange",
          "workingLatex": "\\frac{dy}{dt} = -\\frac{x}{y}\\cdot\\frac{dx}{dt}",
          "explanation": "Solve for the vertical rate.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute values",
          "workingLatex": "\\frac{dy}{dt} = -\\frac{8}{6} \\times 0.25",
          "explanation": "With $x = 8$, $y = 6$, $\\dfrac{dx}{dt} = 0.25$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Calculate",
          "workingLatex": "\\frac{dy}{dt} = -0.33",
          "explanation": "$\\dfrac{dy}{dt} = -0.33$ m s$^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Sign interpretation",
          "workingLatex": "\\text{negative} \\Rightarrow \\text{top moves down}",
          "explanation": "The top descends as the foot moves out.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Units",
          "workingLatex": "\\text{m s}^{-1}",
          "explanation": "Rate of change of height in metres per second.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Magnitude",
          "workingLatex": "|\\frac{dy}{dt}| = 0.33",
          "explanation": "Speed of descent is $0.33$ m s$^{-1}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dy}{dt} = -0.33$ m s$^{-1}$"
    }
  },
  {
    "id": "al.y2.pure.connected-rates.q025",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "sphere",
      "volume"
    ],
    "questionText": "A spherical balloon is being inflated. Its volume is $V = \\dfrac{4}{3}\\pi r^3$. When $r = 3$ cm, $\\dfrac{dr}{dt} = 0.2$ cm s$^{-1}$. Find $\\dfrac{dV}{dt}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Volume formula",
          "workingLatex": "V = \\frac{4}{3}\\pi r^3",
          "explanation": "Standard volume of a sphere.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate w.r.t. $r$",
          "workingLatex": "\\frac{dV}{dr} = 4\\pi r^2",
          "explanation": "Derivative of $r^3$ is $3r^2$; $\\frac{4}{3}\\pi \\times 3r^2 = 4\\pi r^2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "At $r = 3$",
          "workingLatex": "\\frac{dV}{dr} = 4\\pi \\times 3^2 = 36\\pi",
          "explanation": "Surface-area-like factor $36\\pi$ at this radius.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Chain rule",
          "workingLatex": "\\frac{dV}{dt} = \\frac{dV}{dr}\\cdot\\frac{dr}{dt}",
          "explanation": "Link volume rate to radius rate.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute $\\dfrac{dr}{dt} = 0.2$",
          "workingLatex": "\\frac{dV}{dt} = 36\\pi \\times 0.2",
          "explanation": "Multiply the two rates.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify",
          "workingLatex": "\\frac{dV}{dt} = 7.20\\pi \\text{ cm}^3\\text{ s}^{-1}",
          "explanation": "Volume grows at $7.20\\pi$ cm$^3$ s$^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Physical meaning",
          "workingLatex": "\\text{inflation rate}",
          "explanation": "How fast the balloon's volume is increasing.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Units check",
          "workingLatex": "\\text{cm}^3\\text{ s}^{-1}",
          "explanation": "Volume per unit time.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compare to surface",
          "workingLatex": "4\\pi r^2 \\times \\frac{dr}{dt}",
          "explanation": "Volume rate equals surface area times radial expansion rate.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dV}{dt} = 7.2\\pi$ cm$^3$ s$^{-1}$"
    }
  },
  {
    "id": "al.y2.pure.connected-rates.q026",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "sphere",
      "volume"
    ],
    "questionText": "A spherical balloon is being inflated. Its volume is $V = \\dfrac{4}{3}\\pi r^3$. When $r = 5$ cm, $\\dfrac{dr}{dt} = 0.1$ cm s$^{-1}$. Find $\\dfrac{dV}{dt}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Volume formula",
          "workingLatex": "V = \\frac{4}{3}\\pi r^3",
          "explanation": "Standard volume of a sphere.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate w.r.t. $r$",
          "workingLatex": "\\frac{dV}{dr} = 4\\pi r^2",
          "explanation": "Derivative of $r^3$ is $3r^2$; $\\frac{4}{3}\\pi \\times 3r^2 = 4\\pi r^2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "At $r = 5$",
          "workingLatex": "\\frac{dV}{dr} = 4\\pi \\times 5^2 = 100\\pi",
          "explanation": "Surface-area-like factor $100\\pi$ at this radius.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Chain rule",
          "workingLatex": "\\frac{dV}{dt} = \\frac{dV}{dr}\\cdot\\frac{dr}{dt}",
          "explanation": "Link volume rate to radius rate.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute $\\dfrac{dr}{dt} = 0.1$",
          "workingLatex": "\\frac{dV}{dt} = 100\\pi \\times 0.1",
          "explanation": "Multiply the two rates.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify",
          "workingLatex": "\\frac{dV}{dt} = 10\\pi \\text{ cm}^3\\text{ s}^{-1}",
          "explanation": "Volume grows at $10\\pi$ cm$^3$ s$^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Physical meaning",
          "workingLatex": "\\text{inflation rate}",
          "explanation": "How fast the balloon's volume is increasing.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Units check",
          "workingLatex": "\\text{cm}^3\\text{ s}^{-1}",
          "explanation": "Volume per unit time.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compare to surface",
          "workingLatex": "4\\pi r^2 \\times \\frac{dr}{dt}",
          "explanation": "Volume rate equals surface area times radial expansion rate.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dV}{dt} = 10.0\\pi$ cm$^3$ s$^{-1}$"
    }
  },
  {
    "id": "al.y2.pure.connected-rates.q027",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "sphere",
      "volume"
    ],
    "questionText": "A spherical balloon is being inflated. Its volume is $V = \\dfrac{4}{3}\\pi r^3$. When $r = 2$ cm, $\\dfrac{dr}{dt} = 1.5$ cm s$^{-1}$. Find $\\dfrac{dV}{dt}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Volume formula",
          "workingLatex": "V = \\frac{4}{3}\\pi r^3",
          "explanation": "Standard volume of a sphere.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate w.r.t. $r$",
          "workingLatex": "\\frac{dV}{dr} = 4\\pi r^2",
          "explanation": "Derivative of $r^3$ is $3r^2$; $\\frac{4}{3}\\pi \\times 3r^2 = 4\\pi r^2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "At $r = 2$",
          "workingLatex": "\\frac{dV}{dr} = 4\\pi \\times 2^2 = 16\\pi",
          "explanation": "Surface-area-like factor $16\\pi$ at this radius.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Chain rule",
          "workingLatex": "\\frac{dV}{dt} = \\frac{dV}{dr}\\cdot\\frac{dr}{dt}",
          "explanation": "Link volume rate to radius rate.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute $\\dfrac{dr}{dt} = 1.5$",
          "workingLatex": "\\frac{dV}{dt} = 16\\pi \\times 1.5",
          "explanation": "Multiply the two rates.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify",
          "workingLatex": "\\frac{dV}{dt} = 24\\pi \\text{ cm}^3\\text{ s}^{-1}",
          "explanation": "Volume grows at $24\\pi$ cm$^3$ s$^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Physical meaning",
          "workingLatex": "\\text{inflation rate}",
          "explanation": "How fast the balloon's volume is increasing.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Units check",
          "workingLatex": "\\text{cm}^3\\text{ s}^{-1}",
          "explanation": "Volume per unit time.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compare to surface",
          "workingLatex": "4\\pi r^2 \\times \\frac{dr}{dt}",
          "explanation": "Volume rate equals surface area times radial expansion rate.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dV}{dt} = 24.0\\pi$ cm$^3$ s$^{-1}$"
    }
  },
  {
    "id": "al.y2.pure.connected-rates.q028",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "sphere",
      "volume"
    ],
    "questionText": "A spherical balloon is being inflated. Its volume is $V = \\dfrac{4}{3}\\pi r^3$. When $r = 4$ cm, $\\dfrac{dr}{dt} = 0.5$ cm s$^{-1}$. Find $\\dfrac{dV}{dt}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Volume formula",
          "workingLatex": "V = \\frac{4}{3}\\pi r^3",
          "explanation": "Standard volume of a sphere.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate w.r.t. $r$",
          "workingLatex": "\\frac{dV}{dr} = 4\\pi r^2",
          "explanation": "Derivative of $r^3$ is $3r^2$; $\\frac{4}{3}\\pi \\times 3r^2 = 4\\pi r^2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "At $r = 4$",
          "workingLatex": "\\frac{dV}{dr} = 4\\pi \\times 4^2 = 64\\pi",
          "explanation": "Surface-area-like factor $64\\pi$ at this radius.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Chain rule",
          "workingLatex": "\\frac{dV}{dt} = \\frac{dV}{dr}\\cdot\\frac{dr}{dt}",
          "explanation": "Link volume rate to radius rate.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute $\\dfrac{dr}{dt} = 0.5$",
          "workingLatex": "\\frac{dV}{dt} = 64\\pi \\times 0.5",
          "explanation": "Multiply the two rates.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify",
          "workingLatex": "\\frac{dV}{dt} = 32\\pi \\text{ cm}^3\\text{ s}^{-1}",
          "explanation": "Volume grows at $32\\pi$ cm$^3$ s$^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Physical meaning",
          "workingLatex": "\\text{inflation rate}",
          "explanation": "How fast the balloon's volume is increasing.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Units check",
          "workingLatex": "\\text{cm}^3\\text{ s}^{-1}",
          "explanation": "Volume per unit time.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compare to surface",
          "workingLatex": "4\\pi r^2 \\times \\frac{dr}{dt}",
          "explanation": "Volume rate equals surface area times radial expansion rate.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dV}{dt} = 32.0\\pi$ cm$^3$ s$^{-1}$"
    }
  },
  {
    "id": "al.y2.pure.connected-rates.q029",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "sphere",
      "volume"
    ],
    "questionText": "A spherical balloon is being inflated. Its volume is $V = \\dfrac{4}{3}\\pi r^3$. When $r = 6$ cm, $\\dfrac{dr}{dt} = 0.3$ cm s$^{-1}$. Find $\\dfrac{dV}{dt}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Volume formula",
          "workingLatex": "V = \\frac{4}{3}\\pi r^3",
          "explanation": "Standard volume of a sphere.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate w.r.t. $r$",
          "workingLatex": "\\frac{dV}{dr} = 4\\pi r^2",
          "explanation": "Derivative of $r^3$ is $3r^2$; $\\frac{4}{3}\\pi \\times 3r^2 = 4\\pi r^2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "At $r = 6$",
          "workingLatex": "\\frac{dV}{dr} = 4\\pi \\times 6^2 = 144\\pi",
          "explanation": "Surface-area-like factor $144\\pi$ at this radius.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Chain rule",
          "workingLatex": "\\frac{dV}{dt} = \\frac{dV}{dr}\\cdot\\frac{dr}{dt}",
          "explanation": "Link volume rate to radius rate.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute $\\dfrac{dr}{dt} = 0.3$",
          "workingLatex": "\\frac{dV}{dt} = 144\\pi \\times 0.3",
          "explanation": "Multiply the two rates.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify",
          "workingLatex": "\\frac{dV}{dt} = 43.20\\pi \\text{ cm}^3\\text{ s}^{-1}",
          "explanation": "Volume grows at $43.20\\pi$ cm$^3$ s$^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Physical meaning",
          "workingLatex": "\\text{inflation rate}",
          "explanation": "How fast the balloon's volume is increasing.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Units check",
          "workingLatex": "\\text{cm}^3\\text{ s}^{-1}",
          "explanation": "Volume per unit time.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compare to surface",
          "workingLatex": "4\\pi r^2 \\times \\frac{dr}{dt}",
          "explanation": "Volume rate equals surface area times radial expansion rate.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dV}{dt} = 43.199999999999996\\pi$ cm$^3$ s$^{-1}$"
    }
  },
  {
    "id": "al.y2.pure.connected-rates.q030",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "sphere",
      "volume"
    ],
    "questionText": "A spherical balloon is being inflated. Its volume is $V = \\dfrac{4}{3}\\pi r^3$. When $r = 10$ cm, $\\dfrac{dr}{dt} = 0.05$ cm s$^{-1}$. Find $\\dfrac{dV}{dt}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Volume formula",
          "workingLatex": "V = \\frac{4}{3}\\pi r^3",
          "explanation": "Standard volume of a sphere.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate w.r.t. $r$",
          "workingLatex": "\\frac{dV}{dr} = 4\\pi r^2",
          "explanation": "Derivative of $r^3$ is $3r^2$; $\\frac{4}{3}\\pi \\times 3r^2 = 4\\pi r^2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "At $r = 10$",
          "workingLatex": "\\frac{dV}{dr} = 4\\pi \\times 10^2 = 400\\pi",
          "explanation": "Surface-area-like factor $400\\pi$ at this radius.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Chain rule",
          "workingLatex": "\\frac{dV}{dt} = \\frac{dV}{dr}\\cdot\\frac{dr}{dt}",
          "explanation": "Link volume rate to radius rate.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute $\\dfrac{dr}{dt} = 0.05$",
          "workingLatex": "\\frac{dV}{dt} = 400\\pi \\times 0.05",
          "explanation": "Multiply the two rates.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify",
          "workingLatex": "\\frac{dV}{dt} = 20\\pi \\text{ cm}^3\\text{ s}^{-1}",
          "explanation": "Volume grows at $20\\pi$ cm$^3$ s$^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Physical meaning",
          "workingLatex": "\\text{inflation rate}",
          "explanation": "How fast the balloon's volume is increasing.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Units check",
          "workingLatex": "\\text{cm}^3\\text{ s}^{-1}",
          "explanation": "Volume per unit time.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compare to surface",
          "workingLatex": "4\\pi r^2 \\times \\frac{dr}{dt}",
          "explanation": "Volume rate equals surface area times radial expansion rate.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dV}{dt} = 20.0\\pi$ cm$^3$ s$^{-1}$"
    }
  },
  {
    "id": "al.y2.pure.connected-rates.q031",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "rectangle",
      "area",
      "product rule"
    ],
    "questionText": "A rectangle has fixed width $x = 4$ m and length $y$ increasing at $\\dfrac{dy}{dt} = 2$ m s$^{-1}$. The area is $A = xy$. Find $\\dfrac{dA}{dt}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Area formula",
          "workingLatex": "A = xy",
          "explanation": "Product of length and width.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate (product rule or direct)",
          "workingLatex": "\\frac{dA}{dt} = x\\frac{dy}{dt} + y\\frac{dx}{dt}",
          "explanation": "When both dimensions can change, use the product rule for $A = xy$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Since $x = 4$ is fixed",
          "workingLatex": "\\frac{dx}{dt} = 0",
          "explanation": "Fixed width means no change in $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify",
          "workingLatex": "\\frac{dA}{dt} = 4 \\times 2",
          "explanation": "Only the length contributes: $\\dfrac{dA}{dt} = x \\cdot \\dfrac{dy}{dt}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Calculate",
          "workingLatex": "\\frac{dA}{dt} = 12",
          "explanation": "Area increases at $12$ m$^2$ s$^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret",
          "workingLatex": "\\text{area grows as length extends}",
          "explanation": "Extending one side at constant rate gives linear area growth.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Units",
          "workingLatex": "\\text{m}^2\\text{ s}^{-1}",
          "explanation": "Area per second.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check",
          "workingLatex": "4 \\times 2 = 12",
          "explanation": "Consistent arithmetic.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Model assumption",
          "workingLatex": "\\text{other dimension constant}",
          "explanation": "Real rectangles may deform; here only one side changes.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dA}{dt} = 12$ m$^2$ s$^{-1}$"
    }
  },
  {
    "id": "al.y2.pure.connected-rates.q032",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "rectangle",
      "area",
      "product rule"
    ],
    "questionText": "A rectangle has fixed width $x = 5$ m and length $y$ increasing at $\\dfrac{dy}{dt} = 3$ m s$^{-1}$. The area is $A = xy$. Find $\\dfrac{dA}{dt}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Area formula",
          "workingLatex": "A = xy",
          "explanation": "Product of length and width.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate (product rule or direct)",
          "workingLatex": "\\frac{dA}{dt} = x\\frac{dy}{dt} + y\\frac{dx}{dt}",
          "explanation": "When both dimensions can change, use the product rule for $A = xy$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Since $x = 5$ is fixed",
          "workingLatex": "\\frac{dx}{dt} = 0",
          "explanation": "Fixed width means no change in $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify",
          "workingLatex": "\\frac{dA}{dt} = 5 \\times 3",
          "explanation": "Only the length contributes: $\\dfrac{dA}{dt} = x \\cdot \\dfrac{dy}{dt}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Calculate",
          "workingLatex": "\\frac{dA}{dt} = 40",
          "explanation": "Area increases at $40$ m$^2$ s$^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret",
          "workingLatex": "\\text{area grows as length extends}",
          "explanation": "Extending one side at constant rate gives linear area growth.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Units",
          "workingLatex": "\\text{m}^2\\text{ s}^{-1}",
          "explanation": "Area per second.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check",
          "workingLatex": "5 \\times 3 = 40",
          "explanation": "Consistent arithmetic.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Model assumption",
          "workingLatex": "\\text{other dimension constant}",
          "explanation": "Real rectangles may deform; here only one side changes.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dA}{dt} = 40$ m$^2$ s$^{-1}$"
    }
  },
  {
    "id": "al.y2.pure.connected-rates.q033",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "rectangle",
      "area",
      "product rule"
    ],
    "questionText": "A rectangle has fixed width $x = 3$ m and length $y$ increasing at $\\dfrac{dy}{dt} = 1.5$ m s$^{-1}$. The area is $A = xy$. Find $\\dfrac{dA}{dt}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Area formula",
          "workingLatex": "A = xy",
          "explanation": "Product of length and width.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate (product rule or direct)",
          "workingLatex": "\\frac{dA}{dt} = x\\frac{dy}{dt} + y\\frac{dx}{dt}",
          "explanation": "When both dimensions can change, use the product rule for $A = xy$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Since $x = 3$ is fixed",
          "workingLatex": "\\frac{dx}{dt} = 0",
          "explanation": "Fixed width means no change in $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify",
          "workingLatex": "\\frac{dA}{dt} = 3 \\times 1.5",
          "explanation": "Only the length contributes: $\\dfrac{dA}{dt} = x \\cdot \\dfrac{dy}{dt}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Calculate",
          "workingLatex": "\\frac{dA}{dt} = 30",
          "explanation": "Area increases at $30$ m$^2$ s$^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret",
          "workingLatex": "\\text{area grows as length extends}",
          "explanation": "Extending one side at constant rate gives linear area growth.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Units",
          "workingLatex": "\\text{m}^2\\text{ s}^{-1}",
          "explanation": "Area per second.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check",
          "workingLatex": "3 \\times 1.5 = 30",
          "explanation": "Consistent arithmetic.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Model assumption",
          "workingLatex": "\\text{other dimension constant}",
          "explanation": "Real rectangles may deform; here only one side changes.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dA}{dt} = 30$ m$^2$ s$^{-1}$"
    }
  },
  {
    "id": "al.y2.pure.connected-rates.q034",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "rectangle",
      "area",
      "product rule"
    ],
    "questionText": "A rectangle has $x = 7$ m, $y = 4$ m with $\\dfrac{dx}{dt} = 0.5$ m s$^{-1}$ and $\\dfrac{dy}{dt} = 2$ m s$^{-1}$. Find $\\dfrac{dA}{dt}$ when $A = xy$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Area",
          "workingLatex": "A = xy",
          "explanation": "Product of sides.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate",
          "workingLatex": "\\frac{dA}{dt} = y\\frac{dx}{dt} + x\\frac{dy}{dt}",
          "explanation": "Both sides change, so both terms contribute.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute rates",
          "workingLatex": "\\frac{dA}{dt} = 4 \\times 0.5 + 7 \\times 2",
          "explanation": "Plug in given values.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "First term",
          "workingLatex": "2.0",
          "explanation": "$4 \\times 0.5 = 2.0$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Second term",
          "workingLatex": "14",
          "explanation": "$7 \\times 2 = 14$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Add",
          "workingLatex": "\\frac{dA}{dt} = 16.0",
          "explanation": "Total area rate $16.0$ m$^2$ s$^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Interpret",
          "workingLatex": "\\text{both dimensions growing}",
          "explanation": "Area grows faster when both length and width increase.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Units",
          "workingLatex": "\\text{m}^2\\text{ s}^{-1}",
          "explanation": "Area rate.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compare",
          "workingLatex": "\\text{sum of two strip contributions}",
          "explanation": "Each changing side adds its own contribution.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dA}{dt} = 16.0$ m$^2$ s$^{-1}$"
    }
  },
  {
    "id": "al.y2.pure.connected-rates.q035",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "rectangle",
      "area",
      "product rule"
    ],
    "questionText": "A rectangle has $x = 6$ m, $y = 9$ m with $\\dfrac{dx}{dt} = 2$ m s$^{-1}$ and $\\dfrac{dy}{dt} = 2$ m s$^{-1}$. Find $\\dfrac{dA}{dt}$ when $A = xy$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Area",
          "workingLatex": "A = xy",
          "explanation": "Product of sides.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate",
          "workingLatex": "\\frac{dA}{dt} = y\\frac{dx}{dt} + x\\frac{dy}{dt}",
          "explanation": "Both sides change, so both terms contribute.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute rates",
          "workingLatex": "\\frac{dA}{dt} = 9 \\times 2 + 6 \\times 2",
          "explanation": "Plug in given values.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "First term",
          "workingLatex": "18",
          "explanation": "$9 \\times 2 = 18$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Second term",
          "workingLatex": "12",
          "explanation": "$6 \\times 2 = 12$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Add",
          "workingLatex": "\\frac{dA}{dt} = 30",
          "explanation": "Total area rate $30$ m$^2$ s$^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Interpret",
          "workingLatex": "\\text{both dimensions growing}",
          "explanation": "Area grows faster when both length and width increase.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Units",
          "workingLatex": "\\text{m}^2\\text{ s}^{-1}",
          "explanation": "Area rate.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compare",
          "workingLatex": "\\text{sum of two strip contributions}",
          "explanation": "Each changing side adds its own contribution.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dA}{dt} = 30$ m$^2$ s$^{-1}$"
    }
  },
  {
    "id": "al.y2.pure.connected-rates.q036",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "exponential",
      "growth"
    ],
    "questionText": "A population is modelled by $N = N_0 e^{0.05t}$ with $N_0 = 1000$. Show that $\\dfrac{dN}{dt} = kN$ and find $\\dfrac{dN}{dt}$ when $t = 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the model",
          "workingLatex": "N = 1000e^{0.05t}",
          "explanation": "Exponential growth with initial value $N_0$ and rate constant $k$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate w.r.t. $t$",
          "workingLatex": "\\frac{dN}{dt} = 1000 \\times 0.05 e^{0.05t}",
          "explanation": "Derivative of $e^{kt}$ is $ke^{kt}$; constant $N_0$ stays.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Factor",
          "workingLatex": "\\frac{dN}{dt} = 0.05 \\times 1000e^{0.05t} = 0.05N",
          "explanation": "This confirms $\\dfrac{dN}{dt} = kN$: rate proportional to current size.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "At $t = 0$",
          "workingLatex": "N = 1000e^0 = 1000",
          "explanation": "Population at start is $1000$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rate at $t = 0$",
          "workingLatex": "\\frac{dN}{dt} = 0.05 \\times 1000 = 50",
          "explanation": "Initial growth rate is $50$ per unit time.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Percentage interpretation",
          "workingLatex": "5.0\\% \\text{ growth per unit time}",
          "explanation": "$k = 0.05$ means 5.0% growth rate.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Units",
          "workingLatex": "\\text{same as } N \\text{ per unit time}",
          "explanation": "Population units per year (or whatever $t$ measures).",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Why proportional?",
          "workingLatex": "\\text{larger population grows faster}",
          "explanation": "Exponential model: more individuals means more growth.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Sign of $k$",
          "workingLatex": "k = 0.05 > 0 \\Rightarrow \\text{growth}",
          "explanation": "Positive $k$ means increase.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dN}{dt} = 0.05N$; at $t = 0$, $\\dfrac{dN}{dt} = 50$"
    }
  },
  {
    "id": "al.y2.pure.connected-rates.q037",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "exponential",
      "growth"
    ],
    "questionText": "A population is modelled by $N = N_0 e^{0.08t}$ with $N_0 = 500$. Show that $\\dfrac{dN}{dt} = kN$ and find $\\dfrac{dN}{dt}$ when $t = 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the model",
          "workingLatex": "N = 500e^{0.08t}",
          "explanation": "Exponential growth with initial value $N_0$ and rate constant $k$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate w.r.t. $t$",
          "workingLatex": "\\frac{dN}{dt} = 500 \\times 0.08 e^{0.08t}",
          "explanation": "Derivative of $e^{kt}$ is $ke^{kt}$; constant $N_0$ stays.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Factor",
          "workingLatex": "\\frac{dN}{dt} = 0.08 \\times 500e^{0.08t} = 0.08N",
          "explanation": "This confirms $\\dfrac{dN}{dt} = kN$: rate proportional to current size.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "At $t = 0$",
          "workingLatex": "N = 500e^0 = 500",
          "explanation": "Population at start is $500$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rate at $t = 0$",
          "workingLatex": "\\frac{dN}{dt} = 0.08 \\times 500 = 40",
          "explanation": "Initial growth rate is $40$ per unit time.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Percentage interpretation",
          "workingLatex": "8.0\\% \\text{ growth per unit time}",
          "explanation": "$k = 0.08$ means 8.0% growth rate.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Units",
          "workingLatex": "\\text{same as } N \\text{ per unit time}",
          "explanation": "Population units per year (or whatever $t$ measures).",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Why proportional?",
          "workingLatex": "\\text{larger population grows faster}",
          "explanation": "Exponential model: more individuals means more growth.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Sign of $k$",
          "workingLatex": "k = 0.08 > 0 \\Rightarrow \\text{growth}",
          "explanation": "Positive $k$ means increase.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dN}{dt} = 0.08N$; at $t = 0$, $\\dfrac{dN}{dt} = 40$"
    }
  },
  {
    "id": "al.y2.pure.connected-rates.q038",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "exponential",
      "growth"
    ],
    "questionText": "A population is modelled by $N = N_0 e^{0.03t}$ with $N_0 = 2000$. Show that $\\dfrac{dN}{dt} = kN$ and find $\\dfrac{dN}{dt}$ when $t = 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the model",
          "workingLatex": "N = 2000e^{0.03t}",
          "explanation": "Exponential growth with initial value $N_0$ and rate constant $k$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate w.r.t. $t$",
          "workingLatex": "\\frac{dN}{dt} = 2000 \\times 0.03 e^{0.03t}",
          "explanation": "Derivative of $e^{kt}$ is $ke^{kt}$; constant $N_0$ stays.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Factor",
          "workingLatex": "\\frac{dN}{dt} = 0.03 \\times 2000e^{0.03t} = 0.03N",
          "explanation": "This confirms $\\dfrac{dN}{dt} = kN$: rate proportional to current size.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "At $t = 0$",
          "workingLatex": "N = 2000e^0 = 2000",
          "explanation": "Population at start is $2000$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rate at $t = 0$",
          "workingLatex": "\\frac{dN}{dt} = 0.03 \\times 2000 = 60",
          "explanation": "Initial growth rate is $60$ per unit time.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Percentage interpretation",
          "workingLatex": "3.0\\% \\text{ growth per unit time}",
          "explanation": "$k = 0.03$ means 3.0% growth rate.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Units",
          "workingLatex": "\\text{same as } N \\text{ per unit time}",
          "explanation": "Population units per year (or whatever $t$ measures).",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Why proportional?",
          "workingLatex": "\\text{larger population grows faster}",
          "explanation": "Exponential model: more individuals means more growth.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Sign of $k$",
          "workingLatex": "k = 0.03 > 0 \\Rightarrow \\text{growth}",
          "explanation": "Positive $k$ means increase.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dN}{dt} = 0.03N$; at $t = 0$, $\\dfrac{dN}{dt} = 60$"
    }
  },
  {
    "id": "al.y2.pure.connected-rates.q039",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "exponential",
      "growth"
    ],
    "questionText": "A population is modelled by $N = N_0 e^{0.1t}$ with $N_0 = 800$. Show that $\\dfrac{dN}{dt} = kN$ and find $\\dfrac{dN}{dt}$ when $t = 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the model",
          "workingLatex": "N = 800e^{0.1t}",
          "explanation": "Exponential growth with initial value $N_0$ and rate constant $k$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate w.r.t. $t$",
          "workingLatex": "\\frac{dN}{dt} = 800 \\times 0.1 e^{0.1t}",
          "explanation": "Derivative of $e^{kt}$ is $ke^{kt}$; constant $N_0$ stays.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Factor",
          "workingLatex": "\\frac{dN}{dt} = 0.1 \\times 800e^{0.1t} = 0.1N",
          "explanation": "This confirms $\\dfrac{dN}{dt} = kN$: rate proportional to current size.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "At $t = 0$",
          "workingLatex": "N = 800e^0 = 800",
          "explanation": "Population at start is $800$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rate at $t = 0$",
          "workingLatex": "\\frac{dN}{dt} = 0.1 \\times 800 = 80",
          "explanation": "Initial growth rate is $80$ per unit time.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Percentage interpretation",
          "workingLatex": "10.0\\% \\text{ growth per unit time}",
          "explanation": "$k = 0.1$ means 10.0% growth rate.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Units",
          "workingLatex": "\\text{same as } N \\text{ per unit time}",
          "explanation": "Population units per year (or whatever $t$ measures).",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Why proportional?",
          "workingLatex": "\\text{larger population grows faster}",
          "explanation": "Exponential model: more individuals means more growth.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Sign of $k$",
          "workingLatex": "k = 0.1 > 0 \\Rightarrow \\text{growth}",
          "explanation": "Positive $k$ means increase.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dN}{dt} = 0.1N$; at $t = 0$, $\\dfrac{dN}{dt} = 80$"
    }
  },
  {
    "id": "al.y2.pure.connected-rates.q040",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "exponential",
      "growth"
    ],
    "questionText": "A population is modelled by $N = N_0 e^{0.04t}$ with $N_0 = 1500$. Show that $\\dfrac{dN}{dt} = kN$ and find $\\dfrac{dN}{dt}$ when $t = 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the model",
          "workingLatex": "N = 1500e^{0.04t}",
          "explanation": "Exponential growth with initial value $N_0$ and rate constant $k$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate w.r.t. $t$",
          "workingLatex": "\\frac{dN}{dt} = 1500 \\times 0.04 e^{0.04t}",
          "explanation": "Derivative of $e^{kt}$ is $ke^{kt}$; constant $N_0$ stays.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Factor",
          "workingLatex": "\\frac{dN}{dt} = 0.04 \\times 1500e^{0.04t} = 0.04N",
          "explanation": "This confirms $\\dfrac{dN}{dt} = kN$: rate proportional to current size.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "At $t = 0$",
          "workingLatex": "N = 1500e^0 = 1500",
          "explanation": "Population at start is $1500$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rate at $t = 0$",
          "workingLatex": "\\frac{dN}{dt} = 0.04 \\times 1500 = 60",
          "explanation": "Initial growth rate is $60$ per unit time.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Percentage interpretation",
          "workingLatex": "4.0\\% \\text{ growth per unit time}",
          "explanation": "$k = 0.04$ means 4.0% growth rate.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Units",
          "workingLatex": "\\text{same as } N \\text{ per unit time}",
          "explanation": "Population units per year (or whatever $t$ measures).",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Why proportional?",
          "workingLatex": "\\text{larger population grows faster}",
          "explanation": "Exponential model: more individuals means more growth.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Sign of $k$",
          "workingLatex": "k = 0.04 > 0 \\Rightarrow \\text{growth}",
          "explanation": "Positive $k$ means increase.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dN}{dt} = 0.04N$; at $t = 0$, $\\dfrac{dN}{dt} = 60$"
    }
  },
  {
    "id": "al.y2.pure.connected-rates.q041",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "exponential",
      "decay"
    ],
    "questionText": "A radioactive substance has mass $M = 500e^{-0.02t}$ grams. Find $\\dfrac{dM}{dt}$ when $t = 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Model",
          "workingLatex": "M = 500e^{-0.02t}",
          "explanation": "Exponential decay with negative rate constant.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate",
          "workingLatex": "\\frac{dM}{dt} = 500 \\times -0.02 e^{-0.02t} = -0.02M",
          "explanation": "Same form as growth: $\\dfrac{dM}{dt} = kM$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "At $t = 0$",
          "workingLatex": "M = 500",
          "explanation": "Initial mass $500$ g.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rate at start",
          "workingLatex": "\\frac{dM}{dt} = -0.02 \\times 500 = -10",
          "explanation": "Mass decreases at $10$ g per unit time initially.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Sign",
          "workingLatex": "-10 < 0 \\Rightarrow \\text{decay}",
          "explanation": "Negative rate means mass is falling.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Magnitude",
          "workingLatex": "|\\frac{dM}{dt}| = 10 \\text{ g per unit time}",
          "explanation": "Speed of decay at $t = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Half-life link",
          "workingLatex": "\\text{larger } |k| \\Rightarrow \\text{faster decay}",
          "explanation": "$k = -0.02$ controls how quickly the substance disappears.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Units",
          "workingLatex": "\\text{g per unit time}",
          "explanation": "Mass rate.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Model validity",
          "workingLatex": "\\text{exponential decay assumption}",
          "explanation": "Real decay follows this model well for many substances.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dM}{dt} = -10$ g per unit time at $t = 0$"
    }
  },
  {
    "id": "al.y2.pure.connected-rates.q042",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "exponential",
      "decay"
    ],
    "questionText": "A radioactive substance has mass $M = 1200e^{-0.05t}$ grams. Find $\\dfrac{dM}{dt}$ when $t = 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Model",
          "workingLatex": "M = 1200e^{-0.05t}",
          "explanation": "Exponential decay with negative rate constant.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate",
          "workingLatex": "\\frac{dM}{dt} = 1200 \\times -0.05 e^{-0.05t} = -0.05M",
          "explanation": "Same form as growth: $\\dfrac{dM}{dt} = kM$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "At $t = 0$",
          "workingLatex": "M = 1200",
          "explanation": "Initial mass $1200$ g.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rate at start",
          "workingLatex": "\\frac{dM}{dt} = -0.05 \\times 1200 = -60",
          "explanation": "Mass decreases at $60$ g per unit time initially.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Sign",
          "workingLatex": "-60 < 0 \\Rightarrow \\text{decay}",
          "explanation": "Negative rate means mass is falling.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Magnitude",
          "workingLatex": "|\\frac{dM}{dt}| = 60 \\text{ g per unit time}",
          "explanation": "Speed of decay at $t = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Half-life link",
          "workingLatex": "\\text{larger } |k| \\Rightarrow \\text{faster decay}",
          "explanation": "$k = -0.05$ controls how quickly the substance disappears.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Units",
          "workingLatex": "\\text{g per unit time}",
          "explanation": "Mass rate.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Model validity",
          "workingLatex": "\\text{exponential decay assumption}",
          "explanation": "Real decay follows this model well for many substances.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dM}{dt} = -60$ g per unit time at $t = 0$"
    }
  },
  {
    "id": "al.y2.pure.connected-rates.q043",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "exponential",
      "decay"
    ],
    "questionText": "A radioactive substance has mass $M = 800e^{-0.03t}$ grams. Find $\\dfrac{dM}{dt}$ when $t = 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Model",
          "workingLatex": "M = 800e^{-0.03t}",
          "explanation": "Exponential decay with negative rate constant.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate",
          "workingLatex": "\\frac{dM}{dt} = 800 \\times -0.03 e^{-0.03t} = -0.03M",
          "explanation": "Same form as growth: $\\dfrac{dM}{dt} = kM$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "At $t = 0$",
          "workingLatex": "M = 800",
          "explanation": "Initial mass $800$ g.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rate at start",
          "workingLatex": "\\frac{dM}{dt} = -0.03 \\times 800 = -24",
          "explanation": "Mass decreases at $24$ g per unit time initially.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Sign",
          "workingLatex": "-24 < 0 \\Rightarrow \\text{decay}",
          "explanation": "Negative rate means mass is falling.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Magnitude",
          "workingLatex": "|\\frac{dM}{dt}| = 24 \\text{ g per unit time}",
          "explanation": "Speed of decay at $t = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Half-life link",
          "workingLatex": "\\text{larger } |k| \\Rightarrow \\text{faster decay}",
          "explanation": "$k = -0.03$ controls how quickly the substance disappears.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Units",
          "workingLatex": "\\text{g per unit time}",
          "explanation": "Mass rate.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Model validity",
          "workingLatex": "\\text{exponential decay assumption}",
          "explanation": "Real decay follows this model well for many substances.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dM}{dt} = -24$ g per unit time at $t = 0$"
    }
  },
  {
    "id": "al.y2.pure.connected-rates.q044",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "exponential",
      "decay"
    ],
    "questionText": "A radioactive substance has mass $M = 2000e^{-0.01t}$ grams. Find $\\dfrac{dM}{dt}$ when $t = 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Model",
          "workingLatex": "M = 2000e^{-0.01t}",
          "explanation": "Exponential decay with negative rate constant.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate",
          "workingLatex": "\\frac{dM}{dt} = 2000 \\times -0.01 e^{-0.01t} = -0.01M",
          "explanation": "Same form as growth: $\\dfrac{dM}{dt} = kM$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "At $t = 0$",
          "workingLatex": "M = 2000",
          "explanation": "Initial mass $2000$ g.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rate at start",
          "workingLatex": "\\frac{dM}{dt} = -0.01 \\times 2000 = -20",
          "explanation": "Mass decreases at $20$ g per unit time initially.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Sign",
          "workingLatex": "-20 < 0 \\Rightarrow \\text{decay}",
          "explanation": "Negative rate means mass is falling.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Magnitude",
          "workingLatex": "|\\frac{dM}{dt}| = 20 \\text{ g per unit time}",
          "explanation": "Speed of decay at $t = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Half-life link",
          "workingLatex": "\\text{larger } |k| \\Rightarrow \\text{faster decay}",
          "explanation": "$k = -0.01$ controls how quickly the substance disappears.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Units",
          "workingLatex": "\\text{g per unit time}",
          "explanation": "Mass rate.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Model validity",
          "workingLatex": "\\text{exponential decay assumption}",
          "explanation": "Real decay follows this model well for many substances.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dM}{dt} = -20$ g per unit time at $t = 0$"
    }
  },
  {
    "id": "al.y2.pure.connected-rates.q045",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "exponential",
      "decay"
    ],
    "questionText": "A radioactive substance has mass $M = 350e^{-0.08t}$ grams. Find $\\dfrac{dM}{dt}$ when $t = 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Model",
          "workingLatex": "M = 350e^{-0.08t}",
          "explanation": "Exponential decay with negative rate constant.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate",
          "workingLatex": "\\frac{dM}{dt} = 350 \\times -0.08 e^{-0.08t} = -0.08M",
          "explanation": "Same form as growth: $\\dfrac{dM}{dt} = kM$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "At $t = 0$",
          "workingLatex": "M = 350",
          "explanation": "Initial mass $350$ g.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rate at start",
          "workingLatex": "\\frac{dM}{dt} = -0.08 \\times 350 = -28",
          "explanation": "Mass decreases at $28$ g per unit time initially.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Sign",
          "workingLatex": "-28 < 0 \\Rightarrow \\text{decay}",
          "explanation": "Negative rate means mass is falling.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Magnitude",
          "workingLatex": "|\\frac{dM}{dt}| = 28 \\text{ g per unit time}",
          "explanation": "Speed of decay at $t = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Half-life link",
          "workingLatex": "\\text{larger } |k| \\Rightarrow \\text{faster decay}",
          "explanation": "$k = -0.08$ controls how quickly the substance disappears.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Units",
          "workingLatex": "\\text{g per unit time}",
          "explanation": "Mass rate.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Model validity",
          "workingLatex": "\\text{exponential decay assumption}",
          "explanation": "Real decay follows this model well for many substances.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dM}{dt} = -28$ g per unit time at $t = 0$"
    }
  },
  {
    "id": "al.y2.pure.connected-rates.q046",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "cone",
      "volume",
      "similar shapes"
    ],
    "questionText": "Water pours into a cone with fixed shape (radius $r = 0.75h$ at height $h$). When $h = 8$ cm, $\\dfrac{dh}{dt} = 0.1$ cm s$^{-1}$. Given $V = \\dfrac{1}{3}\\pi r^2 h$ and $r = 0.75h$, find $\\dfrac{dV}{dt}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Substitute $r$ in terms of $h$",
          "workingLatex": "r = 0.75h",
          "explanation": "Similar cones: radius proportional to height.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Volume in one variable",
          "workingLatex": "V = \\frac{1}{3}\\pi (0.75h)^2 h = \\frac{1}{3}\\pi \\times 0.5625 h^3",
          "explanation": "$V = \\frac{1}{3}\\pi \\cdot 0.5625 \\cdot h^3$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate w.r.t. $t$",
          "workingLatex": "\\frac{dV}{dt} = \\pi \\times 0.5625 h^2 \\frac{dh}{dt}",
          "explanation": "Power rule on $h^3$, then chain rule.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute $h = 8$",
          "workingLatex": "h^2 = 64",
          "explanation": "At height $8$ cm.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute $\\dfrac{dh}{dt} = 0.1$",
          "workingLatex": "\\frac{dV}{dt} = \\pi \\times 0.5625 \\times 64 \\times 0.1",
          "explanation": "Plug in all values.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Calculate",
          "workingLatex": "\\frac{dV}{dt} \\approx 11.31",
          "explanation": "Volume rate $\\approx 11.31$ cm$^3$ s$^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Why $h^2$?",
          "workingLatex": "\\text{cross-section area scales with } h^2",
          "explanation": "Filling rate depends on surface area at current level.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Units",
          "workingLatex": "\\text{cm}^3\\text{ s}^{-1}",
          "explanation": "Volume per second.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Tank problem classic",
          "workingLatex": "\\text{cone gets wider as it fills}",
          "explanation": "Standard related rates application.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check reasonableness",
          "workingLatex": "\\text{positive } \\frac{dV}{dt}",
          "explanation": "Water entering means volume increasing.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dV}{dt} \\approx 11.31$ cm$^3$ s$^{-1}$"
    }
  },
  {
    "id": "al.y2.pure.connected-rates.q047",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "cone",
      "volume",
      "similar shapes"
    ],
    "questionText": "Water pours into a cone with fixed shape (radius $r = 0.4h$ at height $h$). When $h = 10$ cm, $\\dfrac{dh}{dt} = 0.2$ cm s$^{-1}$. Given $V = \\dfrac{1}{3}\\pi r^2 h$ and $r = 0.4h$, find $\\dfrac{dV}{dt}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Substitute $r$ in terms of $h$",
          "workingLatex": "r = 0.4h",
          "explanation": "Similar cones: radius proportional to height.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Volume in one variable",
          "workingLatex": "V = \\frac{1}{3}\\pi (0.4h)^2 h = \\frac{1}{3}\\pi \\times 0.16 h^3",
          "explanation": "$V = \\frac{1}{3}\\pi \\cdot 0.16 \\cdot h^3$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate w.r.t. $t$",
          "workingLatex": "\\frac{dV}{dt} = \\pi \\times 0.16 h^2 \\frac{dh}{dt}",
          "explanation": "Power rule on $h^3$, then chain rule.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute $h = 10$",
          "workingLatex": "h^2 = 100",
          "explanation": "At height $10$ cm.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute $\\dfrac{dh}{dt} = 0.2$",
          "workingLatex": "\\frac{dV}{dt} = \\pi \\times 0.16 \\times 100 \\times 0.2",
          "explanation": "Plug in all values.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Calculate",
          "workingLatex": "\\frac{dV}{dt} \\approx 10.05",
          "explanation": "Volume rate $\\approx 10.05$ cm$^3$ s$^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Why $h^2$?",
          "workingLatex": "\\text{cross-section area scales with } h^2",
          "explanation": "Filling rate depends on surface area at current level.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Units",
          "workingLatex": "\\text{cm}^3\\text{ s}^{-1}",
          "explanation": "Volume per second.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Tank problem classic",
          "workingLatex": "\\text{cone gets wider as it fills}",
          "explanation": "Standard related rates application.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check reasonableness",
          "workingLatex": "\\text{positive } \\frac{dV}{dt}",
          "explanation": "Water entering means volume increasing.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dV}{dt} \\approx 10.05$ cm$^3$ s$^{-1}$"
    }
  },
  {
    "id": "al.y2.pure.connected-rates.q048",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "cone",
      "volume",
      "similar shapes"
    ],
    "questionText": "Water pours into a cone with fixed shape (radius $r = 0.42h$ at height $h$). When $h = 12$ cm, $\\dfrac{dh}{dt} = 0.05$ cm s$^{-1}$. Given $V = \\dfrac{1}{3}\\pi r^2 h$ and $r = 0.42h$, find $\\dfrac{dV}{dt}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Substitute $r$ in terms of $h$",
          "workingLatex": "r = 0.42h",
          "explanation": "Similar cones: radius proportional to height.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Volume in one variable",
          "workingLatex": "V = \\frac{1}{3}\\pi (0.42h)^2 h = \\frac{1}{3}\\pi \\times 0.1736 h^3",
          "explanation": "$V = \\frac{1}{3}\\pi \\cdot 0.1736 \\cdot h^3$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate w.r.t. $t$",
          "workingLatex": "\\frac{dV}{dt} = \\pi \\times 0.1736 h^2 \\frac{dh}{dt}",
          "explanation": "Power rule on $h^3$, then chain rule.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute $h = 12$",
          "workingLatex": "h^2 = 144",
          "explanation": "At height $12$ cm.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute $\\dfrac{dh}{dt} = 0.05$",
          "workingLatex": "\\frac{dV}{dt} = \\pi \\times 0.1736 \\times 144 \\times 0.05",
          "explanation": "Plug in all values.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Calculate",
          "workingLatex": "\\frac{dV}{dt} \\approx 3.93",
          "explanation": "Volume rate $\\approx 3.93$ cm$^3$ s$^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Why $h^2$?",
          "workingLatex": "\\text{cross-section area scales with } h^2",
          "explanation": "Filling rate depends on surface area at current level.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Units",
          "workingLatex": "\\text{cm}^3\\text{ s}^{-1}",
          "explanation": "Volume per second.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Tank problem classic",
          "workingLatex": "\\text{cone gets wider as it fills}",
          "explanation": "Standard related rates application.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check reasonableness",
          "workingLatex": "\\text{positive } \\frac{dV}{dt}",
          "explanation": "Water entering means volume increasing.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dV}{dt} \\approx 3.93$ cm$^3$ s$^{-1}$"
    }
  },
  {
    "id": "al.y2.pure.connected-rates.q049",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "cone",
      "volume",
      "similar shapes"
    ],
    "questionText": "Water pours into a cone with fixed shape (radius $r = 0.33h$ at height $h$). When $h = 9$ cm, $\\dfrac{dh}{dt} = 0.3$ cm s$^{-1}$. Given $V = \\dfrac{1}{3}\\pi r^2 h$ and $r = 0.33h$, find $\\dfrac{dV}{dt}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Substitute $r$ in terms of $h$",
          "workingLatex": "r = 0.33h",
          "explanation": "Similar cones: radius proportional to height.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Volume in one variable",
          "workingLatex": "V = \\frac{1}{3}\\pi (0.33h)^2 h = \\frac{1}{3}\\pi \\times 0.1111 h^3",
          "explanation": "$V = \\frac{1}{3}\\pi \\cdot 0.1111 \\cdot h^3$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate w.r.t. $t$",
          "workingLatex": "\\frac{dV}{dt} = \\pi \\times 0.1111 h^2 \\frac{dh}{dt}",
          "explanation": "Power rule on $h^3$, then chain rule.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute $h = 9$",
          "workingLatex": "h^2 = 81",
          "explanation": "At height $9$ cm.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute $\\dfrac{dh}{dt} = 0.3$",
          "workingLatex": "\\frac{dV}{dt} = \\pi \\times 0.1111 \\times 81 \\times 0.3",
          "explanation": "Plug in all values.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Calculate",
          "workingLatex": "\\frac{dV}{dt} \\approx 8.48",
          "explanation": "Volume rate $\\approx 8.48$ cm$^3$ s$^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Why $h^2$?",
          "workingLatex": "\\text{cross-section area scales with } h^2",
          "explanation": "Filling rate depends on surface area at current level.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Units",
          "workingLatex": "\\text{cm}^3\\text{ s}^{-1}",
          "explanation": "Volume per second.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Tank problem classic",
          "workingLatex": "\\text{cone gets wider as it fills}",
          "explanation": "Standard related rates application.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check reasonableness",
          "workingLatex": "\\text{positive } \\frac{dV}{dt}",
          "explanation": "Water entering means volume increasing.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dV}{dt} \\approx 8.48$ cm$^3$ s$^{-1}$"
    }
  },
  {
    "id": "al.y2.pure.connected-rates.q050",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "cone",
      "volume",
      "similar shapes"
    ],
    "questionText": "Water pours into a cone with fixed shape (radius $r = 1.3h$ at height $h$). When $h = 6$ cm, $\\dfrac{dh}{dt} = 0.08$ cm s$^{-1}$. Given $V = \\dfrac{1}{3}\\pi r^2 h$ and $r = 1.3h$, find $\\dfrac{dV}{dt}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Substitute $r$ in terms of $h$",
          "workingLatex": "r = 1.3h",
          "explanation": "Similar cones: radius proportional to height.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Volume in one variable",
          "workingLatex": "V = \\frac{1}{3}\\pi (1.3h)^2 h = \\frac{1}{3}\\pi \\times 1.778 h^3",
          "explanation": "$V = \\frac{1}{3}\\pi \\cdot 1.778 \\cdot h^3$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate w.r.t. $t$",
          "workingLatex": "\\frac{dV}{dt} = \\pi \\times 1.778 h^2 \\frac{dh}{dt}",
          "explanation": "Power rule on $h^3$, then chain rule.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute $h = 6$",
          "workingLatex": "h^2 = 36",
          "explanation": "At height $6$ cm.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute $\\dfrac{dh}{dt} = 0.08$",
          "workingLatex": "\\frac{dV}{dt} = \\pi \\times 1.778 \\times 36 \\times 0.08",
          "explanation": "Plug in all values.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Calculate",
          "workingLatex": "\\frac{dV}{dt} \\approx 16.08",
          "explanation": "Volume rate $\\approx 16.08$ cm$^3$ s$^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Why $h^2$?",
          "workingLatex": "\\text{cross-section area scales with } h^2",
          "explanation": "Filling rate depends on surface area at current level.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Units",
          "workingLatex": "\\text{cm}^3\\text{ s}^{-1}",
          "explanation": "Volume per second.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Tank problem classic",
          "workingLatex": "\\text{cone gets wider as it fills}",
          "explanation": "Standard related rates application.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check reasonableness",
          "workingLatex": "\\text{positive } \\frac{dV}{dt}",
          "explanation": "Water entering means volume increasing.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dV}{dt} \\approx 16.08$ cm$^3$ s$^{-1}$"
    }
  },
  {
    "id": "al.y2.pure.connected-rates.q051",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "angle",
      "trigonometry",
      "ladder"
    ],
    "questionText": "A searchlight at the origin tracks a car at $(5, 12)$ moving with $\\dfrac{dx}{dt} = 1$ m s$^{-1}$ and $\\dfrac{dy}{dt} = 0$. If $\\theta = \\arctan\\left(\\dfrac{y}{x}\\right)$, find $\\dfrac{d\\theta}{dt}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Relationship",
          "workingLatex": "\\tan\\theta = \\frac{y}{x}",
          "explanation": "Angle depends on coordinates.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate implicitly",
          "workingLatex": "\\sec^2\\theta \\frac{d\\theta}{dt} = \\frac{x\\frac{dy}{dt} - y\\frac{dx}{dt}}{x^2}",
          "explanation": "Quotient rule on $\\dfrac{y}{x}$, then chain rule on $\\tan\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Or use the standard formula",
          "workingLatex": "\\frac{d\\theta}{dt} = \\frac{x\\dot{y} - y\\dot{x}}{x^2 + y^2}",
          "explanation": "Standard formula for angle rate in polar-like setup.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "With $\\dfrac{dy}{dt} = 0$",
          "workingLatex": "\\frac{d\\theta}{dt} = \\frac{-12 \\times 1}{169}",
          "explanation": "Only horizontal motion contributes.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Calculate denominator",
          "workingLatex": "x^2 + y^2 = 169",
          "explanation": "Distance squared from origin.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Calculate",
          "workingLatex": "\\frac{d\\theta}{dt} = -0.92",
          "explanation": "$\\dfrac{d\\theta}{dt} = -0.92$ rad s$^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Sign",
          "workingLatex": "\\text{negative} \\Rightarrow \\text{angle decreasing}",
          "explanation": "As car moves right, bearing angle from x-axis decreases.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Units",
          "workingLatex": "\\text{rad s}^{-1}",
          "explanation": "Radians per second.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Application",
          "workingLatex": "\\text{tracking, radar}",
          "explanation": "How fast to rotate the searchlight.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "At this instant",
          "workingLatex": "\\theta \\approx 67.4^\\circ",
          "explanation": "Current angle about $67.4^\\circ$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{d\\theta}{dt} = -0.92$ rad s$^{-1}$"
    }
  },
  {
    "id": "al.y2.pure.connected-rates.q052",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "angle",
      "trigonometry",
      "ladder"
    ],
    "questionText": "A searchlight at the origin tracks a car at $(8, 15)$ moving with $\\dfrac{dx}{dt} = 0.5$ m s$^{-1}$ and $\\dfrac{dy}{dt} = 0$. If $\\theta = \\arctan\\left(\\dfrac{y}{x}\\right)$, find $\\dfrac{d\\theta}{dt}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Relationship",
          "workingLatex": "\\tan\\theta = \\frac{y}{x}",
          "explanation": "Angle depends on coordinates.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate implicitly",
          "workingLatex": "\\sec^2\\theta \\frac{d\\theta}{dt} = \\frac{x\\frac{dy}{dt} - y\\frac{dx}{dt}}{x^2}",
          "explanation": "Quotient rule on $\\dfrac{y}{x}$, then chain rule on $\\tan\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Or use the standard formula",
          "workingLatex": "\\frac{d\\theta}{dt} = \\frac{x\\dot{y} - y\\dot{x}}{x^2 + y^2}",
          "explanation": "Standard formula for angle rate in polar-like setup.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "With $\\dfrac{dy}{dt} = 0$",
          "workingLatex": "\\frac{d\\theta}{dt} = \\frac{-15 \\times 0.5}{289}",
          "explanation": "Only horizontal motion contributes.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Calculate denominator",
          "workingLatex": "x^2 + y^2 = 289",
          "explanation": "Distance squared from origin.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Calculate",
          "workingLatex": "\\frac{d\\theta}{dt} = -0.35",
          "explanation": "$\\dfrac{d\\theta}{dt} = -0.35$ rad s$^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Sign",
          "workingLatex": "\\text{negative} \\Rightarrow \\text{angle decreasing}",
          "explanation": "As car moves right, bearing angle from x-axis decreases.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Units",
          "workingLatex": "\\text{rad s}^{-1}",
          "explanation": "Radians per second.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Application",
          "workingLatex": "\\text{tracking, radar}",
          "explanation": "How fast to rotate the searchlight.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "At this instant",
          "workingLatex": "\\theta \\approx 61.9^\\circ",
          "explanation": "Current angle about $61.9^\\circ$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{d\\theta}{dt} = -0.35$ rad s$^{-1}$"
    }
  },
  {
    "id": "al.y2.pure.connected-rates.q053",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "angle",
      "trigonometry",
      "ladder"
    ],
    "questionText": "A searchlight at the origin tracks a car at $(3, 4)$ moving with $\\dfrac{dx}{dt} = 2$ m s$^{-1}$ and $\\dfrac{dy}{dt} = 0$. If $\\theta = \\arctan\\left(\\dfrac{y}{x}\\right)$, find $\\dfrac{d\\theta}{dt}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Relationship",
          "workingLatex": "\\tan\\theta = \\frac{y}{x}",
          "explanation": "Angle depends on coordinates.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate implicitly",
          "workingLatex": "\\sec^2\\theta \\frac{d\\theta}{dt} = \\frac{x\\frac{dy}{dt} - y\\frac{dx}{dt}}{x^2}",
          "explanation": "Quotient rule on $\\dfrac{y}{x}$, then chain rule on $\\tan\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Or use the standard formula",
          "workingLatex": "\\frac{d\\theta}{dt} = \\frac{x\\dot{y} - y\\dot{x}}{x^2 + y^2}",
          "explanation": "Standard formula for angle rate in polar-like setup.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "With $\\dfrac{dy}{dt} = 0$",
          "workingLatex": "\\frac{d\\theta}{dt} = \\frac{-4 \\times 2}{25}",
          "explanation": "Only horizontal motion contributes.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Calculate denominator",
          "workingLatex": "x^2 + y^2 = 25",
          "explanation": "Distance squared from origin.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Calculate",
          "workingLatex": "\\frac{d\\theta}{dt} = -1.50",
          "explanation": "$\\dfrac{d\\theta}{dt} = -1.50$ rad s$^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Sign",
          "workingLatex": "\\text{negative} \\Rightarrow \\text{angle decreasing}",
          "explanation": "As car moves right, bearing angle from x-axis decreases.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Units",
          "workingLatex": "\\text{rad s}^{-1}",
          "explanation": "Radians per second.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Application",
          "workingLatex": "\\text{tracking, radar}",
          "explanation": "How fast to rotate the searchlight.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "At this instant",
          "workingLatex": "\\theta \\approx 53.1^\\circ",
          "explanation": "Current angle about $53.1^\\circ$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{d\\theta}{dt} = -1.50$ rad s$^{-1}$"
    }
  },
  {
    "id": "al.y2.pure.connected-rates.q054",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "ladder",
      "reverse"
    ],
    "questionText": "A $13$ m ladder has its top sliding down a wall at $1.2$ m s$^{-1}$ when the top is $5$ m high. How fast is the foot moving away from the wall?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up",
          "workingLatex": "x^2 + y^2 = 169",
          "explanation": "Pythagoras with ladder $13$ m.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find $x$ when $y = 5$",
          "workingLatex": "x = \\sqrt{169 - 25} = 12",
          "explanation": "Foot is $12$ m from wall.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate",
          "workingLatex": "2x\\frac{dx}{dt} + 2y\\frac{dy}{dt} = 0",
          "explanation": "Implicit differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for $\\dfrac{dx}{dt}$",
          "workingLatex": "\\frac{dx}{dt} = -\\frac{y}{x}\\cdot\\frac{dy}{dt}",
          "explanation": "Rearrange for horizontal rate.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute $\\dfrac{dy}{dt} = -1.2$",
          "workingLatex": "\\frac{dx}{dt} = -\\frac{5}{12} \\times (-1.2)",
          "explanation": "Top sliding down means $\\dfrac{dy}{dt}$ is negative.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Calculate",
          "workingLatex": "\\frac{dx}{dt} = \\frac{5}{12} \\times 1.2 = 0.5",
          "explanation": "Foot moves away at $0.5$ m s$^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Interpret sign",
          "workingLatex": "\\frac{dx}{dt} > 0 \\Rightarrow \\text{foot moves away}",
          "explanation": "Positive horizontal rate confirms outward motion.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify geometry",
          "workingLatex": "x = 12, y = 5, \\sqrt{144+25} = 13",
          "explanation": "Consistent triangle.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Rate comparison",
          "workingLatex": "|\\frac{dy}{dt}| > |\\frac{dx}{dt}|",
          "explanation": "Near the top, vertical motion dominates.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Units",
          "workingLatex": "\\text{m s}^{-1}",
          "explanation": "Speed of foot.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Safety context",
          "workingLatex": "\\text{ladder slipping}",
          "explanation": "Classic related rates scenario.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Alternative check",
          "workingLatex": "\\frac{dx}{dt} = \\frac{12}{5} \\times 0.5",
          "explanation": "Ratio $x/y$ method.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Final answer",
          "workingLatex": "\\frac{dx}{dt} = 0.5 \\text{ m s}^{-1}",
          "explanation": "Foot speed $0.5$ m s$^{-1}$ away from wall.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dx}{dt} = 0.5$ m s$^{-1}$"
    }
  },
  {
    "id": "al.y2.pure.connected-rates.q055",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "expression",
    "tags": [
      "sphere",
      "surface area",
      "multi-part"
    ],
    "questionText": "A spherical cell has radius $r$ cm. When $r = 4$ cm, $\\dfrac{dr}{dt} = 0.3$ cm s$^{-1}$. (a) Find $\\dfrac{dV}{dt}$ where $V = \\dfrac{4}{3}\\pi r^3$. (b) Find $\\dfrac{dS}{dt}$ where $S = 4\\pi r^2$ is the surface area.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Part (a): volume rate",
          "workingLatex": "\\frac{dV}{dt} = \\frac{dV}{dr}\\cdot\\frac{dr}{dt}",
          "explanation": "Chain rule for volume.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate volume",
          "workingLatex": "\\frac{dV}{dr} = 4\\pi r^2",
          "explanation": "Derivative of sphere volume.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "At $r = 4$",
          "workingLatex": "\\frac{dV}{dr} = 64\\pi",
          "explanation": "$\\dfrac{dV}{dr} = 64\\pi$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Volume rate",
          "workingLatex": "\\frac{dV}{dt} = 64\\pi \\times 0.3 = 19.20\\pi",
          "explanation": "(a) $\\dfrac{dV}{dt} = 19.2\\pi$ cm$^3$ s$^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Part (b): surface area",
          "workingLatex": "S = 4\\pi r^2",
          "explanation": "Surface area formula.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Differentiate",
          "workingLatex": "\\frac{dS}{dr} = 8\\pi r",
          "explanation": "Derivative of $4\\pi r^2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "At $r = 4$",
          "workingLatex": "\\frac{dS}{dt} = 8\\pi \\times 4 \\times 0.3 = 9.60\\pi",
          "explanation": "(b) $\\dfrac{dS}{dt} = 9.6\\pi$ cm$^2$ s$^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare rates",
          "workingLatex": "\\frac{dS}{dt} / \\frac{dV}{dt} = \\frac{2}{r}",
          "explanation": "Surface grows slower relative to volume at larger $r$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Biological meaning",
          "workingLatex": "\\text{membrane vs volume growth}",
          "explanation": "Cells balance surface and volume growth.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Units (a)",
          "workingLatex": "\\text{cm}^3\\text{ s}^{-1}",
          "explanation": "Volume rate.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Units (b)",
          "workingLatex": "\\text{cm}^2\\text{ s}^{-1}",
          "explanation": "Area rate.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Both use same $\\dfrac{dr}{dt}$",
          "workingLatex": "\\frac{dr}{dt} = 0.3",
          "explanation": "Single expansion rate drives both.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Summary",
          "workingLatex": "(a) $\\dfrac{dV}{dt} = 19.2\\pi$; (b) $\\dfrac{dS}{dt} = 9.6\\pi$",
          "explanation": "Both answers in terms of $\\pi$.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\dfrac{dV}{dt} = 19.2\\pi$ cm$^3$ s$^{-1}$; (b) $\\dfrac{dS}{dt} = 9.6\\pi$ cm$^2$ s$^{-1}$"
    }
  },
  {
    "id": "al.y2.pure.connected-rates.q056",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "expression",
    "tags": [
      "sphere",
      "surface area",
      "multi-part"
    ],
    "questionText": "A spherical cell has radius $r$ cm. When $r = 6$ cm, $\\dfrac{dr}{dt} = 0.15$ cm s$^{-1}$. (a) Find $\\dfrac{dV}{dt}$ where $V = \\dfrac{4}{3}\\pi r^3$. (b) Find $\\dfrac{dS}{dt}$ where $S = 4\\pi r^2$ is the surface area.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Part (a): volume rate",
          "workingLatex": "\\frac{dV}{dt} = \\frac{dV}{dr}\\cdot\\frac{dr}{dt}",
          "explanation": "Chain rule for volume.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate volume",
          "workingLatex": "\\frac{dV}{dr} = 4\\pi r^2",
          "explanation": "Derivative of sphere volume.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "At $r = 6$",
          "workingLatex": "\\frac{dV}{dr} = 144\\pi",
          "explanation": "$\\dfrac{dV}{dr} = 144\\pi$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Volume rate",
          "workingLatex": "\\frac{dV}{dt} = 144\\pi \\times 0.15 = 21.60\\pi",
          "explanation": "(a) $\\dfrac{dV}{dt} = 21.599999999999998\\pi$ cm$^3$ s$^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Part (b): surface area",
          "workingLatex": "S = 4\\pi r^2",
          "explanation": "Surface area formula.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Differentiate",
          "workingLatex": "\\frac{dS}{dr} = 8\\pi r",
          "explanation": "Derivative of $4\\pi r^2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "At $r = 6$",
          "workingLatex": "\\frac{dS}{dt} = 8\\pi \\times 6 \\times 0.15 = 7.20\\pi",
          "explanation": "(b) $\\dfrac{dS}{dt} = 7.199999999999999\\pi$ cm$^2$ s$^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare rates",
          "workingLatex": "\\frac{dS}{dt} / \\frac{dV}{dt} = \\frac{2}{r}",
          "explanation": "Surface grows slower relative to volume at larger $r$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Biological meaning",
          "workingLatex": "\\text{membrane vs volume growth}",
          "explanation": "Cells balance surface and volume growth.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Units (a)",
          "workingLatex": "\\text{cm}^3\\text{ s}^{-1}",
          "explanation": "Volume rate.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Units (b)",
          "workingLatex": "\\text{cm}^2\\text{ s}^{-1}",
          "explanation": "Area rate.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Both use same $\\dfrac{dr}{dt}$",
          "workingLatex": "\\frac{dr}{dt} = 0.15",
          "explanation": "Single expansion rate drives both.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Summary",
          "workingLatex": "(a) $\\dfrac{dV}{dt} = 21.599999999999998\\pi$; (b) $\\dfrac{dS}{dt} = 7.199999999999999\\pi$",
          "explanation": "Both answers in terms of $\\pi$.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\dfrac{dV}{dt} = 21.599999999999998\\pi$ cm$^3$ s$^{-1}$; (b) $\\dfrac{dS}{dt} = 7.199999999999999\\pi$ cm$^2$ s$^{-1}$"
    }
  },
  {
    "id": "al.y2.pure.connected-rates.q057",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "expression",
    "tags": [
      "sphere",
      "surface area",
      "multi-part"
    ],
    "questionText": "A spherical cell has radius $r$ cm. When $r = 3$ cm, $\\dfrac{dr}{dt} = 0.5$ cm s$^{-1}$. (a) Find $\\dfrac{dV}{dt}$ where $V = \\dfrac{4}{3}\\pi r^3$. (b) Find $\\dfrac{dS}{dt}$ where $S = 4\\pi r^2$ is the surface area.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Part (a): volume rate",
          "workingLatex": "\\frac{dV}{dt} = \\frac{dV}{dr}\\cdot\\frac{dr}{dt}",
          "explanation": "Chain rule for volume.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate volume",
          "workingLatex": "\\frac{dV}{dr} = 4\\pi r^2",
          "explanation": "Derivative of sphere volume.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "At $r = 3$",
          "workingLatex": "\\frac{dV}{dr} = 36\\pi",
          "explanation": "$\\dfrac{dV}{dr} = 36\\pi$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Volume rate",
          "workingLatex": "\\frac{dV}{dt} = 36\\pi \\times 0.5 = 18\\pi",
          "explanation": "(a) $\\dfrac{dV}{dt} = 18.0\\pi$ cm$^3$ s$^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Part (b): surface area",
          "workingLatex": "S = 4\\pi r^2",
          "explanation": "Surface area formula.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Differentiate",
          "workingLatex": "\\frac{dS}{dr} = 8\\pi r",
          "explanation": "Derivative of $4\\pi r^2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "At $r = 3$",
          "workingLatex": "\\frac{dS}{dt} = 8\\pi \\times 3 \\times 0.5 = 12\\pi",
          "explanation": "(b) $\\dfrac{dS}{dt} = 12.0\\pi$ cm$^2$ s$^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare rates",
          "workingLatex": "\\frac{dS}{dt} / \\frac{dV}{dt} = \\frac{2}{r}",
          "explanation": "Surface grows slower relative to volume at larger $r$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Biological meaning",
          "workingLatex": "\\text{membrane vs volume growth}",
          "explanation": "Cells balance surface and volume growth.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Units (a)",
          "workingLatex": "\\text{cm}^3\\text{ s}^{-1}",
          "explanation": "Volume rate.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Units (b)",
          "workingLatex": "\\text{cm}^2\\text{ s}^{-1}",
          "explanation": "Area rate.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Both use same $\\dfrac{dr}{dt}$",
          "workingLatex": "\\frac{dr}{dt} = 0.5",
          "explanation": "Single expansion rate drives both.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Summary",
          "workingLatex": "(a) $\\dfrac{dV}{dt} = 18.0\\pi$; (b) $\\dfrac{dS}{dt} = 12.0\\pi$",
          "explanation": "Both answers in terms of $\\pi$.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\dfrac{dV}{dt} = 18.0\\pi$ cm$^3$ s$^{-1}$; (b) $\\dfrac{dS}{dt} = 12.0\\pi$ cm$^2$ s$^{-1}$"
    }
  },
  {
    "id": "al.y2.pure.connected-rates.q058",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "expression",
    "tags": [
      "sphere",
      "surface area",
      "multi-part"
    ],
    "questionText": "A spherical cell has radius $r$ cm. When $r = 8$ cm, $\\dfrac{dr}{dt} = 0.08$ cm s$^{-1}$. (a) Find $\\dfrac{dV}{dt}$ where $V = \\dfrac{4}{3}\\pi r^3$. (b) Find $\\dfrac{dS}{dt}$ where $S = 4\\pi r^2$ is the surface area.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Part (a): volume rate",
          "workingLatex": "\\frac{dV}{dt} = \\frac{dV}{dr}\\cdot\\frac{dr}{dt}",
          "explanation": "Chain rule for volume.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate volume",
          "workingLatex": "\\frac{dV}{dr} = 4\\pi r^2",
          "explanation": "Derivative of sphere volume.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "At $r = 8$",
          "workingLatex": "\\frac{dV}{dr} = 256\\pi",
          "explanation": "$\\dfrac{dV}{dr} = 256\\pi$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Volume rate",
          "workingLatex": "\\frac{dV}{dt} = 256\\pi \\times 0.08 = 20.48\\pi",
          "explanation": "(a) $\\dfrac{dV}{dt} = 20.48\\pi$ cm$^3$ s$^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Part (b): surface area",
          "workingLatex": "S = 4\\pi r^2",
          "explanation": "Surface area formula.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Differentiate",
          "workingLatex": "\\frac{dS}{dr} = 8\\pi r",
          "explanation": "Derivative of $4\\pi r^2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "At $r = 8$",
          "workingLatex": "\\frac{dS}{dt} = 8\\pi \\times 8 \\times 0.08 = 5.12\\pi",
          "explanation": "(b) $\\dfrac{dS}{dt} = 5.12\\pi$ cm$^2$ s$^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare rates",
          "workingLatex": "\\frac{dS}{dt} / \\frac{dV}{dt} = \\frac{2}{r}",
          "explanation": "Surface grows slower relative to volume at larger $r$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Biological meaning",
          "workingLatex": "\\text{membrane vs volume growth}",
          "explanation": "Cells balance surface and volume growth.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Units (a)",
          "workingLatex": "\\text{cm}^3\\text{ s}^{-1}",
          "explanation": "Volume rate.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Units (b)",
          "workingLatex": "\\text{cm}^2\\text{ s}^{-1}",
          "explanation": "Area rate.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Both use same $\\dfrac{dr}{dt}$",
          "workingLatex": "\\frac{dr}{dt} = 0.08",
          "explanation": "Single expansion rate drives both.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Summary",
          "workingLatex": "(a) $\\dfrac{dV}{dt} = 20.48\\pi$; (b) $\\dfrac{dS}{dt} = 5.12\\pi$",
          "explanation": "Both answers in terms of $\\pi$.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\dfrac{dV}{dt} = 20.48\\pi$ cm$^3$ s$^{-1}$; (b) $\\dfrac{dS}{dt} = 5.12\\pi$ cm$^2$ s$^{-1}$"
    }
  },
  {
    "id": "al.y2.pure.connected-rates.q059",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "expression",
    "tags": [
      "sphere",
      "surface area",
      "multi-part"
    ],
    "questionText": "A spherical cell has radius $r$ cm. When $r = 5$ cm, $\\dfrac{dr}{dt} = 0.25$ cm s$^{-1}$. (a) Find $\\dfrac{dV}{dt}$ where $V = \\dfrac{4}{3}\\pi r^3$. (b) Find $\\dfrac{dS}{dt}$ where $S = 4\\pi r^2$ is the surface area.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Part (a): volume rate",
          "workingLatex": "\\frac{dV}{dt} = \\frac{dV}{dr}\\cdot\\frac{dr}{dt}",
          "explanation": "Chain rule for volume.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate volume",
          "workingLatex": "\\frac{dV}{dr} = 4\\pi r^2",
          "explanation": "Derivative of sphere volume.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "At $r = 5$",
          "workingLatex": "\\frac{dV}{dr} = 100\\pi",
          "explanation": "$\\dfrac{dV}{dr} = 100\\pi$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Volume rate",
          "workingLatex": "\\frac{dV}{dt} = 100\\pi \\times 0.25 = 25\\pi",
          "explanation": "(a) $\\dfrac{dV}{dt} = 25.0\\pi$ cm$^3$ s$^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Part (b): surface area",
          "workingLatex": "S = 4\\pi r^2",
          "explanation": "Surface area formula.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Differentiate",
          "workingLatex": "\\frac{dS}{dr} = 8\\pi r",
          "explanation": "Derivative of $4\\pi r^2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "At $r = 5$",
          "workingLatex": "\\frac{dS}{dt} = 8\\pi \\times 5 \\times 0.25 = 10\\pi",
          "explanation": "(b) $\\dfrac{dS}{dt} = 10.0\\pi$ cm$^2$ s$^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare rates",
          "workingLatex": "\\frac{dS}{dt} / \\frac{dV}{dt} = \\frac{2}{r}",
          "explanation": "Surface grows slower relative to volume at larger $r$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Biological meaning",
          "workingLatex": "\\text{membrane vs volume growth}",
          "explanation": "Cells balance surface and volume growth.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Units (a)",
          "workingLatex": "\\text{cm}^3\\text{ s}^{-1}",
          "explanation": "Volume rate.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Units (b)",
          "workingLatex": "\\text{cm}^2\\text{ s}^{-1}",
          "explanation": "Area rate.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Both use same $\\dfrac{dr}{dt}$",
          "workingLatex": "\\frac{dr}{dt} = 0.25",
          "explanation": "Single expansion rate drives both.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Summary",
          "workingLatex": "(a) $\\dfrac{dV}{dt} = 25.0\\pi$; (b) $\\dfrac{dS}{dt} = 10.0\\pi$",
          "explanation": "Both answers in terms of $\\pi$.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\dfrac{dV}{dt} = 25.0\\pi$ cm$^3$ s$^{-1}$; (b) $\\dfrac{dS}{dt} = 10.0\\pi$ cm$^2$ s$^{-1}$"
    }
  },
  {
    "id": "al.y2.pure.connected-rates.q060",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "exponential",
      "modelling"
    ],
    "questionText": "A population $N = 100e^{0.05t}$ grows according to the model. At what time does $\\dfrac{dN}{dt}$ first equal $k \\times N$ with $N = 150$? Find $t$ when $N = 150$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Growth rate formula",
          "workingLatex": "\\frac{dN}{dt} = kN",
          "explanation": "Always true for this model.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "At any time",
          "workingLatex": "\\frac{dN}{dt} = 0.05N",
          "explanation": "Rate is $0.05$ times current population.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find $t$ when $N = {N_target}$",
          "workingLatex": "100e^{0.05t} = 150",
          "explanation": "Set model equal to target population.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Divide by initial",
          "workingLatex": "e^{0.05t} = 1.5",
          "explanation": "Growth factor $1.5$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Take natural log",
          "workingLatex": "0.05t = \\ln\\left(1.5\\right)",
          "explanation": "Log both sides.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for $t$",
          "workingLatex": "t = \\frac{\\ln(1.5)}{0.05} \\approx 8.11",
          "explanation": "$t \\approx 8.11$ time units.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Rate at that time",
          "workingLatex": "\\frac{dN}{dt} = 0.05 \\times 150 = 7.5",
          "explanation": "Growth rate then is $7.5$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check substitution",
          "workingLatex": "N = 100e^{0.05 \\times 8.11} \\approx 150",
          "explanation": "Verify population at this time.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Model assumption",
          "workingLatex": "\\text{continuous exponential growth}",
          "explanation": "Real populations may deviate.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Units of $t$",
          "workingLatex": "\\text{same as in model}",
          "explanation": "Years, hours, etc. as defined.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Increasing rate?",
          "workingLatex": "kN \\text{ increases as } N \\text{ grows}",
          "explanation": "Bigger population means faster absolute growth.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Log laws",
          "workingLatex": "\\ln(a/b) = \\ln a - \\ln b",
          "explanation": "Useful for rearranging.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Final",
          "workingLatex": "t \\approx 8.11",
          "explanation": "Population reaches $150$ at $t \\approx 8.11$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$t \\approx 8.11$; at this time $\\dfrac{dN}{dt} = 7.5$"
    }
  },
  {
    "id": "al.y2.pure.connected-rates.q061",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "exponential",
      "modelling"
    ],
    "questionText": "A mass $M = 200e^{-0.03t}$ decays. Find $t$ when $M = 100$ and state $\\dfrac{dM}{dt}$ at that instant.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Decay model",
          "workingLatex": "M = 200e^{-0.03t}",
          "explanation": "$k = -0.03$ negative.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rate formula",
          "workingLatex": "\\frac{dM}{dt} = kM",
          "explanation": "Proportional to current mass.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for $t$",
          "workingLatex": "200e^{-0.03t} = 100",
          "explanation": "Set mass equal to target.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Exponential factor",
          "workingLatex": "e^{-0.03t} = 0.5",
          "explanation": "Ratio of masses.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Logarithm",
          "workingLatex": "-0.03t = \\ln\\left(0.5\\right)",
          "explanation": "Natural log of both sides.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve",
          "workingLatex": "t = \\frac{\\ln(0.5)}{-0.03} \\approx 23.10",
          "explanation": "$t \\approx 23.10$ (positive time).",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Rate at that time",
          "workingLatex": "\\frac{dM}{dt} = -0.03 \\times 100 = -3.0",
          "explanation": "Decay rate $-3.0$ g per unit time.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Still negative",
          "workingLatex": "-3.0 < 0",
          "explanation": "Mass still decreasing.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Half-life connection",
          "workingLatex": "\\text{each step loses fixed fraction}",
          "explanation": "Exponential decay loses constant percentage.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Verify",
          "workingLatex": "M = 200e^{-0.03 \\times 23.10} \\approx 100",
          "explanation": "Check mass at $t$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Physical meaning",
          "workingLatex": "\\text{time to reach given mass}",
          "explanation": "When substance has decayed to target.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Units",
          "workingLatex": "\\text{consistent with model}",
          "explanation": "Time units as defined.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Answer",
          "workingLatex": "t \\approx 23.10",
          "explanation": "Mass is $100$ at $t \\approx 23.10$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$t \\approx 23.10$; $\\dfrac{dM}{dt} = -3.0$ at that time"
    }
  },
  {
    "id": "al.y2.pure.connected-rates.q062",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "exponential",
      "modelling"
    ],
    "questionText": "A population $N = 50e^{0.08t}$ grows according to the model. At what time does $\\dfrac{dN}{dt}$ first equal $k \\times N$ with $N = 80$? Find $t$ when $N = 80$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Growth rate formula",
          "workingLatex": "\\frac{dN}{dt} = kN",
          "explanation": "Always true for this model.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "At any time",
          "workingLatex": "\\frac{dN}{dt} = 0.08N",
          "explanation": "Rate is $0.08$ times current population.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find $t$ when $N = {N_target}$",
          "workingLatex": "50e^{0.08t} = 80",
          "explanation": "Set model equal to target population.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Divide by initial",
          "workingLatex": "e^{0.08t} = 1.6",
          "explanation": "Growth factor $1.6$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Take natural log",
          "workingLatex": "0.08t = \\ln\\left(1.6\\right)",
          "explanation": "Log both sides.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for $t$",
          "workingLatex": "t = \\frac{\\ln(1.6)}{0.08} \\approx 5.88",
          "explanation": "$t \\approx 5.88$ time units.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Rate at that time",
          "workingLatex": "\\frac{dN}{dt} = 0.08 \\times 80 = 6.4",
          "explanation": "Growth rate then is $6.4$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check substitution",
          "workingLatex": "N = 50e^{0.08 \\times 5.88} \\approx 80",
          "explanation": "Verify population at this time.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Model assumption",
          "workingLatex": "\\text{continuous exponential growth}",
          "explanation": "Real populations may deviate.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Units of $t$",
          "workingLatex": "\\text{same as in model}",
          "explanation": "Years, hours, etc. as defined.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Increasing rate?",
          "workingLatex": "kN \\text{ increases as } N \\text{ grows}",
          "explanation": "Bigger population means faster absolute growth.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Log laws",
          "workingLatex": "\\ln(a/b) = \\ln a - \\ln b",
          "explanation": "Useful for rearranging.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Final",
          "workingLatex": "t \\approx 5.88",
          "explanation": "Population reaches $80$ at $t \\approx 5.88$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$t \\approx 5.88$; at this time $\\dfrac{dN}{dt} = 6.4$"
    }
  },
  {
    "id": "al.y2.pure.connected-rates.q063",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "exponential",
      "modelling"
    ],
    "questionText": "A mass $M = 1000e^{-0.02t}$ decays. Find $t$ when $M = 500$ and state $\\dfrac{dM}{dt}$ at that instant.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Decay model",
          "workingLatex": "M = 1000e^{-0.02t}",
          "explanation": "$k = -0.02$ negative.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rate formula",
          "workingLatex": "\\frac{dM}{dt} = kM",
          "explanation": "Proportional to current mass.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for $t$",
          "workingLatex": "1000e^{-0.02t} = 500",
          "explanation": "Set mass equal to target.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Exponential factor",
          "workingLatex": "e^{-0.02t} = 0.5",
          "explanation": "Ratio of masses.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Logarithm",
          "workingLatex": "-0.02t = \\ln\\left(0.5\\right)",
          "explanation": "Natural log of both sides.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve",
          "workingLatex": "t = \\frac{\\ln(0.5)}{-0.02} \\approx 34.66",
          "explanation": "$t \\approx 34.66$ (positive time).",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Rate at that time",
          "workingLatex": "\\frac{dM}{dt} = -0.02 \\times 500 = -10.0",
          "explanation": "Decay rate $-10.0$ g per unit time.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Still negative",
          "workingLatex": "-10.0 < 0",
          "explanation": "Mass still decreasing.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Half-life connection",
          "workingLatex": "\\text{each step loses fixed fraction}",
          "explanation": "Exponential decay loses constant percentage.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Verify",
          "workingLatex": "M = 1000e^{-0.02 \\times 34.66} \\approx 500",
          "explanation": "Check mass at $t$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Physical meaning",
          "workingLatex": "\\text{time to reach given mass}",
          "explanation": "When substance has decayed to target.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Units",
          "workingLatex": "\\text{consistent with model}",
          "explanation": "Time units as defined.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Answer",
          "workingLatex": "t \\approx 34.66",
          "explanation": "Mass is $500$ at $t \\approx 34.66$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$t \\approx 34.66$; $\\dfrac{dM}{dt} = -10.0$ at that time"
    }
  },
  {
    "id": "al.y2.pure.connected-rates.q064",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "numeric",
    "tags": [
      "shadow",
      "similar triangles"
    ],
    "questionText": "A $2$ m tall person walks directly away from a $10$ m tall street lamp at $5$ m s$^{-1}$. Their shadow length is $s$ m. Using similar triangles, $\\dfrac{s}{8} = \\dfrac{x}{L}$ where $x$ is distance from lamp, show $\\dfrac{ds}{dt} = \\dfrac{h}{L} \\cdot \\dfrac{dx}{dt}$ and find $\\dfrac{ds}{dt}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Similar triangles",
          "workingLatex": "\\frac{s}{L - h} = \\frac{x}{L}",
          "explanation": "Shadow geometry relates $s$ and $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Solve for $s$",
          "workingLatex": "s = \\frac{L-h}{L} x = \\frac{8}{10}x",
          "explanation": "$s = \\frac{8}{10}x$ — linear in $x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate w.r.t. $t$",
          "workingLatex": "\\frac{ds}{dt} = \\frac{8}{10} \\cdot \\frac{dx}{dt}",
          "explanation": "Constant ratio times walking rate.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify coefficient",
          "workingLatex": "\\frac{ds}{dt} = \\frac{2}{10} \\cdot \\frac{dx}{dt}",
          "explanation": "Since $L - h + h = L$, ratio simplifies to $\\dfrac{h}{L}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute $\\dfrac{dx}{dt} = 5$",
          "workingLatex": "\\frac{ds}{dt} = \\frac{2}{10} \\times 5",
          "explanation": "Walking speed $5$ m s$^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Calculate",
          "workingLatex": "\\frac{ds}{dt} = 1",
          "explanation": "Shadow lengthens at $1$ m s$^-1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Why less than 5?",
          "workingLatex": "\\frac{h}{L} < 1",
          "explanation": "Shadow tip moves slower than the person.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "As person moves",
          "workingLatex": "\\text{shadow length increases}",
          "explanation": "Moving away from lamp lengthens shadow.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Similar triangles proof",
          "workingLatex": "\\frac{h}{L} = \\frac{s}{x+s}",
          "explanation": "Alternative setup gives same result.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Units",
          "workingLatex": "\\text{m s}^{-1}",
          "explanation": "Shadow tip speed.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Limiting case",
          "workingLatex": "h \\to L \\Rightarrow \\frac{ds}{dt} \\to \\frac{dx}{dt}",
          "explanation": "Tall person: shadow tip tracks walking speed.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Geometric insight",
          "workingLatex": "\\text{shadow tip always on ground line}",
          "explanation": "Light ray geometry.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Final",
          "workingLatex": "\\frac{ds}{dt} = 1 \\text{ m s}^{-1}",
          "explanation": "Shadow lengthens at $1$ m s$^-1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{ds}{dt} = \\dfrac{2}{10} \\times 5 = 1$ m s$^-1$"
    }
  },
  {
    "id": "al.y2.pure.connected-rates.q065",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "numeric",
    "tags": [
      "shadow",
      "similar triangles"
    ],
    "questionText": "A $1.8$ m tall person walks directly away from a $10$ m tall street lamp at $5$ m s$^{-1}$. Their shadow length is $s$ m. Using similar triangles, $\\dfrac{s}{8.2} = \\dfrac{x}{L}$ where $x$ is distance from lamp, show $\\dfrac{ds}{dt} = \\dfrac{h}{L} \\cdot \\dfrac{dx}{dt}$ and find $\\dfrac{ds}{dt}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Similar triangles",
          "workingLatex": "\\frac{s}{L - h} = \\frac{x}{L}",
          "explanation": "Shadow geometry relates $s$ and $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Solve for $s$",
          "workingLatex": "s = \\frac{L-h}{L} x = \\frac{8.2}{10}x",
          "explanation": "$s = \\frac{8.2}{10}x$ — linear in $x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate w.r.t. $t$",
          "workingLatex": "\\frac{ds}{dt} = \\frac{8.2}{10} \\cdot \\frac{dx}{dt}",
          "explanation": "Constant ratio times walking rate.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify coefficient",
          "workingLatex": "\\frac{ds}{dt} = \\frac{1.8}{10} \\cdot \\frac{dx}{dt}",
          "explanation": "Since $L - h + h = L$, ratio simplifies to $\\dfrac{h}{L}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute $\\dfrac{dx}{dt} = 5$",
          "workingLatex": "\\frac{ds}{dt} = \\frac{1.8}{10} \\times 5",
          "explanation": "Walking speed $5$ m s$^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Calculate",
          "workingLatex": "\\frac{ds}{dt} = 0.90",
          "explanation": "Shadow lengthens at $0.90$ m s$^-1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Why less than 5?",
          "workingLatex": "\\frac{h}{L} < 1",
          "explanation": "Shadow tip moves slower than the person.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "As person moves",
          "workingLatex": "\\text{shadow length increases}",
          "explanation": "Moving away from lamp lengthens shadow.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Similar triangles proof",
          "workingLatex": "\\frac{h}{L} = \\frac{s}{x+s}",
          "explanation": "Alternative setup gives same result.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Units",
          "workingLatex": "\\text{m s}^{-1}",
          "explanation": "Shadow tip speed.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Limiting case",
          "workingLatex": "h \\to L \\Rightarrow \\frac{ds}{dt} \\to \\frac{dx}{dt}",
          "explanation": "Tall person: shadow tip tracks walking speed.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Geometric insight",
          "workingLatex": "\\text{shadow tip always on ground line}",
          "explanation": "Light ray geometry.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Final",
          "workingLatex": "\\frac{ds}{dt} = 0.90 \\text{ m s}^{-1}",
          "explanation": "Shadow lengthens at $0.90$ m s$^-1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{ds}{dt} = \\dfrac{1.8}{10} \\times 5 = 0.90$ m s$^-1$"
    }
  },
  {
    "id": "al.y2.pure.connected-rates.q066",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "numeric",
    "tags": [
      "shadow",
      "similar triangles"
    ],
    "questionText": "A $3$ m tall person walks directly away from a $10$ m tall street lamp at $5$ m s$^{-1}$. Their shadow length is $s$ m. Using similar triangles, $\\dfrac{s}{7} = \\dfrac{x}{L}$ where $x$ is distance from lamp, show $\\dfrac{ds}{dt} = \\dfrac{h}{L} \\cdot \\dfrac{dx}{dt}$ and find $\\dfrac{ds}{dt}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Similar triangles",
          "workingLatex": "\\frac{s}{L - h} = \\frac{x}{L}",
          "explanation": "Shadow geometry relates $s$ and $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Solve for $s$",
          "workingLatex": "s = \\frac{L-h}{L} x = \\frac{7}{10}x",
          "explanation": "$s = \\frac{7}{10}x$ — linear in $x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate w.r.t. $t$",
          "workingLatex": "\\frac{ds}{dt} = \\frac{7}{10} \\cdot \\frac{dx}{dt}",
          "explanation": "Constant ratio times walking rate.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify coefficient",
          "workingLatex": "\\frac{ds}{dt} = \\frac{3}{10} \\cdot \\frac{dx}{dt}",
          "explanation": "Since $L - h + h = L$, ratio simplifies to $\\dfrac{h}{L}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute $\\dfrac{dx}{dt} = 5$",
          "workingLatex": "\\frac{ds}{dt} = \\frac{3}{10} \\times 5",
          "explanation": "Walking speed $5$ m s$^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Calculate",
          "workingLatex": "\\frac{ds}{dt} = 1.50",
          "explanation": "Shadow lengthens at $1.50$ m s$^-1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Why less than 5?",
          "workingLatex": "\\frac{h}{L} < 1",
          "explanation": "Shadow tip moves slower than the person.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "As person moves",
          "workingLatex": "\\text{shadow length increases}",
          "explanation": "Moving away from lamp lengthens shadow.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Similar triangles proof",
          "workingLatex": "\\frac{h}{L} = \\frac{s}{x+s}",
          "explanation": "Alternative setup gives same result.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Units",
          "workingLatex": "\\text{m s}^{-1}",
          "explanation": "Shadow tip speed.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Limiting case",
          "workingLatex": "h \\to L \\Rightarrow \\frac{ds}{dt} \\to \\frac{dx}{dt}",
          "explanation": "Tall person: shadow tip tracks walking speed.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Geometric insight",
          "workingLatex": "\\text{shadow tip always on ground line}",
          "explanation": "Light ray geometry.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Final",
          "workingLatex": "\\frac{ds}{dt} = 1.50 \\text{ m s}^{-1}",
          "explanation": "Shadow lengthens at $1.50$ m s$^-1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{ds}{dt} = \\dfrac{3}{10} \\times 5 = 1.50$ m s$^-1$"
    }
  },
  {
    "id": "al.y2.pure.connected-rates.q067",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "numeric",
    "tags": [
      "shadow",
      "similar triangles"
    ],
    "questionText": "A $2.5$ m tall person walks directly away from a $10$ m tall street lamp at $5$ m s$^{-1}$. Their shadow length is $s$ m. Using similar triangles, $\\dfrac{s}{7.5} = \\dfrac{x}{L}$ where $x$ is distance from lamp, show $\\dfrac{ds}{dt} = \\dfrac{h}{L} \\cdot \\dfrac{dx}{dt}$ and find $\\dfrac{ds}{dt}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Similar triangles",
          "workingLatex": "\\frac{s}{L - h} = \\frac{x}{L}",
          "explanation": "Shadow geometry relates $s$ and $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Solve for $s$",
          "workingLatex": "s = \\frac{L-h}{L} x = \\frac{7.5}{10}x",
          "explanation": "$s = \\frac{7.5}{10}x$ — linear in $x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate w.r.t. $t$",
          "workingLatex": "\\frac{ds}{dt} = \\frac{7.5}{10} \\cdot \\frac{dx}{dt}",
          "explanation": "Constant ratio times walking rate.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify coefficient",
          "workingLatex": "\\frac{ds}{dt} = \\frac{2.5}{10} \\cdot \\frac{dx}{dt}",
          "explanation": "Since $L - h + h = L$, ratio simplifies to $\\dfrac{h}{L}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute $\\dfrac{dx}{dt} = 5$",
          "workingLatex": "\\frac{ds}{dt} = \\frac{2.5}{10} \\times 5",
          "explanation": "Walking speed $5$ m s$^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Calculate",
          "workingLatex": "\\frac{ds}{dt} = 1.25",
          "explanation": "Shadow lengthens at $1.25$ m s$^-1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Why less than 5?",
          "workingLatex": "\\frac{h}{L} < 1",
          "explanation": "Shadow tip moves slower than the person.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "As person moves",
          "workingLatex": "\\text{shadow length increases}",
          "explanation": "Moving away from lamp lengthens shadow.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Similar triangles proof",
          "workingLatex": "\\frac{h}{L} = \\frac{s}{x+s}",
          "explanation": "Alternative setup gives same result.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Units",
          "workingLatex": "\\text{m s}^{-1}",
          "explanation": "Shadow tip speed.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Limiting case",
          "workingLatex": "h \\to L \\Rightarrow \\frac{ds}{dt} \\to \\frac{dx}{dt}",
          "explanation": "Tall person: shadow tip tracks walking speed.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Geometric insight",
          "workingLatex": "\\text{shadow tip always on ground line}",
          "explanation": "Light ray geometry.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Final",
          "workingLatex": "\\frac{ds}{dt} = 1.25 \\text{ m s}^{-1}",
          "explanation": "Shadow lengthens at $1.25$ m s$^-1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{ds}{dt} = \\dfrac{2.5}{10} \\times 5 = 1.25$ m s$^-1$"
    }
  },
  {
    "id": "al.y2.pure.connected-rates.q068",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "numeric",
    "tags": [
      "cone",
      "inverted",
      "draining"
    ],
    "questionText": "An inverted cone of height $12$ cm and base radius $6$ cm is draining. When the water depth is $8$ cm, the water level drops at $0.2$ cm s$^{-1}$. Find the rate at which the volume is decreasing. (Use $V = \\frac{1}{3}\\pi r^2 h$ with $r = \\frac{h}{2}$.)",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Similar triangles for radius",
          "workingLatex": "r = \\frac{h}{2}",
          "explanation": "At full height $12$ cm, $r = 6$ cm, so $r/h = 1/2$ always.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Volume in terms of $h$",
          "workingLatex": "V = \\frac{1}{3}\\pi \\left(\\frac{h}{2}\\right)^2 h = \\frac{\\pi}{12}h^3",
          "explanation": "Substitute $r = h/2$ into volume formula.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate",
          "workingLatex": "\\frac{dV}{dt} = \\frac{\\pi}{4}h^2 \\frac{dh}{dt}",
          "explanation": "Chain rule on $h^3$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute $h = 8$",
          "workingLatex": "h^2 = 64",
          "explanation": "At depth $8$ cm.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute $\\dfrac{dh}{dt} = -0.2$",
          "workingLatex": "\\frac{dV}{dt} = \\frac{\\pi}{4} \\times 64 \\times (-0.2)",
          "explanation": "Negative because water level falling.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Calculate",
          "workingLatex": "\\frac{dV}{dt} = -3.2\\pi",
          "explanation": "Volume decreases at $3.2\\pi$ cm$^3$ s$^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Magnitude",
          "workingLatex": "|\\frac{dV}{dt}| = 3.2\\pi \\approx 10.1",
          "explanation": "About $10.1$ cm$^3$ s$^{-1}$ draining.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Why negative?",
          "workingLatex": "\\text{draining} \\Rightarrow \\frac{dV}{dt} < 0",
          "explanation": "Volume leaving the cone.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check dimensions",
          "workingLatex": "\\text{cm}^3\\text{ s}^{-1}",
          "explanation": "Correct units.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Compare to inflow",
          "workingLatex": "\\text{outflow problem}",
          "explanation": "Classic draining tank.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Radius at $h = 8$",
          "workingLatex": "r = 4 \\text{ cm}",
          "explanation": "Water surface radius $4$ cm.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Cross-section",
          "workingLatex": "\\pi r^2 = 16\\pi",
          "explanation": "Area of water surface.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Rate intuition",
          "workingLatex": "\\text{larger opening at deeper level}",
          "explanation": "More volume lost per cm drop when cone is wider.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Alternative form",
          "workingLatex": "\\frac{dV}{dt} = \\pi r^2 \\frac{dh}{dt}",
          "explanation": "Base area times depth rate.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Verify",
          "workingLatex": "16\\pi \\times (-0.2) = -3.2\\pi",
          "explanation": "Consistent with step 6.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dV}{dt} = -3.2\\pi$ cm$^3$ s$^{-1}$ (volume decreasing at $3.2\\pi$ cm$^3$ s$^{-1}$)"
    }
  },
  {
    "id": "al.y2.pure.connected-rates.q069",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "numeric",
    "tags": [
      "distance",
      "particle",
      "parametric"
    ],
    "questionText": "A particle moves along $y = x^2$. Its $x$-coordinate increases at $3$ m s$^{-1}$ when $x = 2$ m. (a) Find $\\dfrac{dy}{dt}$. (b) Find the speed of the particle.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Path equation",
          "workingLatex": "y = x^2",
          "explanation": "Parabolic path.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Part (a): chain rule",
          "workingLatex": "\\frac{dy}{dt} = \\frac{dy}{dx}\\cdot\\frac{dx}{dt} = 2x\\cdot\\frac{dx}{dt}",
          "explanation": "Differentiate path w.r.t. $x$, then chain.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute $x = 2$, $\\dfrac{dx}{dt} = 3$",
          "workingLatex": "\\frac{dy}{dt} = 2(2)(3) = 12",
          "explanation": "(a) $\\dfrac{dy}{dt} = 12$ m s$^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Velocity components",
          "workingLatex": "v_x = 3,\\; v_y = 12",
          "explanation": "Horizontal and vertical components.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Part (b): speed",
          "workingLatex": "|\\mathbf{v}| = \\sqrt{v_x^2 + v_y^2}",
          "explanation": "Pythagoras on velocity components.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Calculate",
          "workingLatex": "|\\mathbf{v}| = \\sqrt{9 + 144} = \\sqrt{153}",
          "explanation": "Speed $\\sqrt{153}$ m s$^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify surd",
          "workingLatex": "\\sqrt{153} = 3\\sqrt{17} \\approx 12.37",
          "explanation": "Exact form $3\\sqrt{17}$ m s$^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Direction",
          "workingLatex": "\\tan\\theta = \\frac{v_y}{v_x} = 4",
          "explanation": "Steep upward motion on parabola.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Why speed > $|v_x|$?",
          "workingLatex": "v_y \\neq 0",
          "explanation": "Vertical motion adds to speed.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "At $x = 2$",
          "workingLatex": "y = 4",
          "explanation": "Position $(2, 4)$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Tangent gradient",
          "workingLatex": "\\frac{dy}{dx} = 4",
          "explanation": "Slope of path at this point.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Connection",
          "workingLatex": "\\frac{v_y}{v_x} = \\frac{dy}{dx}",
          "explanation": "Velocity direction matches tangent.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Summary",
          "workingLatex": "(a) 12 \\text{ m s}^{-1}; (b) 3\\sqrt{17} \\text{ m s}^{-1}",
          "explanation": "Both parts answered.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\dfrac{dy}{dt} = 12$ m s$^{-1}$; (b) speed $= 3\\sqrt{17}$ m s$^{-1}$ (approx. $12.4$ m s$^{-1}$)"
    }
  },
  {
    "id": "al.y2.pure.connected-rates.q070",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Rates of change",
    "subtopicId": "al.y2.pure.connected-rates",
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "numeric",
    "tags": [
      "modelling",
      "combined",
      "cylinder"
    ],
    "questionText": "A cylindrical tank of radius $4$ m is being filled with oil. The oil depth $h$ increases at $0.3$ m min$^{-1}$ when $h = 5$ m. (a) Find $\\dfrac{dV}{dt}$ where $V = \\pi r^2 h$. (b) If the tank is also being widened so $\\dfrac{dr}{dt} = 0.05$ m min$^{-1}$ at this instant, recalculate $\\dfrac{dV}{dt}$ using the full product rule.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Volume formula",
          "workingLatex": "V = \\pi r^2 h",
          "explanation": "Cylinder volume.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Part (a): fixed radius",
          "workingLatex": "r = 4 \\text{ m fixed}",
          "explanation": "Only depth changes.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate (fixed $r$)",
          "workingLatex": "\\frac{dV}{dt} = \\pi r^2 \\frac{dh}{dt}",
          "explanation": "Radius constant, so $\\dfrac{dV}{dt} = \\pi r^2 \\dfrac{dh}{dt}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute",
          "workingLatex": "\\frac{dV}{dt} = \\pi \\times 16 \\times 0.3 = 4.8\\pi",
          "explanation": "(a) $\\dfrac{dV}{dt} = 4.8\\pi$ m$^3$ min$^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Part (b): both change",
          "workingLatex": "\\frac{dV}{dt} = \\pi\\left(2r\\frac{dr}{dt}h + r^2\\frac{dh}{dt}\\right)",
          "explanation": "Product rule on $\\pi r^2 h$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "First term",
          "workingLatex": "2r\\frac{dr}{dt}h = 2(4)(0.05)(5) = 2",
          "explanation": "Contribution from widening: $2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Second term",
          "workingLatex": "r^2\\frac{dh}{dt} = 16 \\times 0.3 = 4.8",
          "explanation": "Contribution from rising level: $4.8$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Sum inside brackets",
          "workingLatex": "2 + 4.8 = 6.8",
          "explanation": "Total coefficient before $\\pi$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Part (b) answer",
          "workingLatex": "\\frac{dV}{dt} = 6.8\\pi \\text{ m}^3\\text{ min}^{-1}",
          "explanation": "(b) $\\dfrac{dV}{dt} = 6.8\\pi$ m$^3$ min$^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Compare (a) and (b)",
          "workingLatex": "6.8\\pi > 4.8\\pi",
          "explanation": "Widening adds extra volume rate.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Units",
          "workingLatex": "\\text{m}^3\\text{ min}^{-1}",
          "explanation": "Volume per minute.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Physical scenario",
          "workingLatex": "\\text{unusual to widen while filling}",
          "explanation": "Hypothetical combined change.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Product rule form",
          "workingLatex": "\\frac{dV}{dt} = \\frac{\\partial V}{\\partial r}\\frac{dr}{dt} + \\frac{\\partial V}{\\partial h}\\frac{dh}{dt}",
          "explanation": "General multivariable chain idea.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Numerical (a)",
          "workingLatex": "4.8\\pi \\approx 15.1",
          "explanation": "About $15.1$ m$^3$ min$^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Numerical (b)",
          "workingLatex": "6.8\\pi \\approx 21.4",
          "explanation": "About $21.4$ m$^3$ min$^{-1}$ with widening.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "Exam tip",
          "workingLatex": "\\text{read whether all dimensions change}",
          "explanation": "Check if radius is fixed or not.",
          "diagram": null
        },
        {
          "stepNumber": 17,
          "description": "Final summary",
          "workingLatex": "(a) $4.8\\pi$; (b) $6.8\\pi$ m$^3$ min$^{-1}$",
          "explanation": "Both parts complete.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\dfrac{dV}{dt} = 4.8\\pi$ m$^3$ min$^{-1}$; (b) $\\dfrac{dV}{dt} = 6.8\\pi$ m$^3$ min$^{-1}$"
    }
  }
];
