import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "id": "al.y1.pure.optimisation.q001",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Optimisation",
    "subtopicId": "al.y1.pure.optimisation",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "optimisation",
      "maximum",
      "product",
      "second-derivative-test"
    ],
    "questionText": "Two positive numbers have a sum of $20$. Their product is given by $P = x(20 - x)$, where $x$ is one of the numbers. Find the value of $x$ that maximises $P$, and state this maximum product.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Expand the product function",
          "workingLatex": "P = x(20 - x) = 20x - x^{2}",
          "explanation": "Writing $P$ as a polynomial in $x$ makes it easy to differentiate. Multiplying out $x(20-x)$ gives $20x - x^{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate P with respect to x",
          "workingLatex": "\\frac{dP}{dx} = 20 - 2x",
          "explanation": "The greatest product occurs where the curve is momentarily flat, so we find the gradient function $\\frac{dP}{dx}$ first.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set the derivative equal to zero",
          "workingLatex": "20 - 2x = 0",
          "explanation": "At a maximum the gradient is zero, so we set $\\frac{dP}{dx} = 0$ to locate the stationary point.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for x",
          "workingLatex": "2x = 20 \\Rightarrow x = 10",
          "explanation": "Rearranging gives the value of $x$ at the stationary point.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the second derivative",
          "workingLatex": "\\frac{d^2P}{dx^2} = -2",
          "explanation": "The sign of the second derivative tells us whether the stationary point is a maximum or a minimum.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Classify the stationary point",
          "workingLatex": "\\frac{d^2P}{dx^2} = -2 < 0 \\Rightarrow \\text{maximum}",
          "explanation": "A negative second derivative means the curve bends downwards, confirming $x = 10$ gives a maximum product.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Calculate the maximum product",
          "workingLatex": "P = 10(20 - 10) = 100",
          "explanation": "Substituting $x = 10$ back into $P$ gives the largest possible product; the two numbers are both $10$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The product is maximised when $x = 10$ (both numbers equal $10$), giving a maximum product of $P = 100$."
    }
  },
  {
    "id": "al.y1.pure.optimisation.q002",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Optimisation",
    "subtopicId": "al.y1.pure.optimisation",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "optimisation",
      "minimum",
      "cost",
      "reciprocal-rewrite"
    ],
    "questionText": "The cost of producing a component is modelled by $C = x + \\dfrac{16}{x}$ for $x > 0$. Find the value of $x$ that minimises the cost, and state the minimum cost.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rewrite the cost using index notation",
          "workingLatex": "C = x + 16x^{-1}",
          "explanation": "Writing $\\frac{16}{x}$ as $16x^{-1}$ lets us differentiate the term with the power rule.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate C with respect to x",
          "workingLatex": "\\frac{dC}{dx} = 1 - 16x^{-2}",
          "explanation": "Differentiating each term: the derivative of $x$ is $1$, and $16x^{-1}$ becomes $-16x^{-2}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite the derivative as a fraction",
          "workingLatex": "\\frac{dC}{dx} = 1 - \\frac{16}{x^{2}}",
          "explanation": "Converting $-16x^{-2}$ back to a fraction makes the equation easier to solve.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set the derivative to zero",
          "workingLatex": "1 - \\frac{16}{x^{2}} = 0",
          "explanation": "The minimum cost occurs at a stationary point, where the gradient is $0$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for x",
          "workingLatex": "x^{2} = 16 \\Rightarrow x = 4",
          "explanation": "Since $x > 0$, we take the positive root $x = 4$ and reject $x = -4$ as it lies outside the domain.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the second derivative",
          "workingLatex": "\\frac{d^2C}{dx^2} = 32x^{-3} = \\frac{32}{x^{3}}",
          "explanation": "Differentiating $-16x^{-2}$ gives $32x^{-3}$; its sign classifies the stationary point.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Classify the stationary point",
          "workingLatex": "\\frac{32}{4^{3}} = 0.5 > 0 \\Rightarrow \\text{minimum}",
          "explanation": "A positive second derivative means the curve bends upwards, so $x = 4$ gives a minimum cost.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Calculate the minimum cost",
          "workingLatex": "C = 4 + \\frac{16}{4} = 8",
          "explanation": "Substituting $x = 4$ into the original cost function gives the least possible cost.",
          "diagram": null
        }
      ],
      "finalAnswer": "The cost is minimised when $x = 4$, giving a minimum cost of $C = 8$."
    }
  },
  {
    "id": "al.y1.pure.optimisation.q003",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Optimisation",
    "subtopicId": "al.y1.pure.optimisation",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "optimisation",
      "minimum",
      "cost",
      "reciprocal-rewrite"
    ],
    "questionText": "A company's running cost is $C = 2x + \\dfrac{50}{x}$ for $x > 0$. Find the value of $x$ that minimises $C$, and state the minimum cost.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rewrite the cost using index notation",
          "workingLatex": "C = 2x + 50x^{-1}",
          "explanation": "Writing $\\frac{50}{x}$ as $50x^{-1}$ allows the power rule to be used when differentiating.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate C with respect to x",
          "workingLatex": "\\frac{dC}{dx} = 2 - 50x^{-2}",
          "explanation": "The derivative of $2x$ is $2$, and $50x^{-1}$ differentiates to $-50x^{-2}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite the derivative as a fraction",
          "workingLatex": "\\frac{dC}{dx} = 2 - \\frac{50}{x^{2}}",
          "explanation": "Converting back to a fraction makes the resulting equation simpler to solve.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set the derivative to zero",
          "workingLatex": "2 - \\frac{50}{x^{2}} = 0",
          "explanation": "The minimum cost is a stationary point, so the gradient must be $0$ there.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for x",
          "workingLatex": "x^{2} = 25 \\Rightarrow x = 5",
          "explanation": "Multiplying up gives $2x^{2} = 50$, so $x^{2} = 25$. As $x > 0$ we take $x = 5$ and reject $x = -5$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the second derivative",
          "workingLatex": "\\frac{d^2C}{dx^2} = 100x^{-3} = \\frac{100}{x^{3}}",
          "explanation": "Differentiating $-50x^{-2}$ gives $100x^{-3}$, whose sign classifies the point.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Classify the stationary point",
          "workingLatex": "\\frac{100}{5^{3}} = 0.8 > 0 \\Rightarrow \\text{minimum}",
          "explanation": "A positive second derivative means the curve is concave up, so $x = 5$ gives a minimum.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Calculate the minimum cost",
          "workingLatex": "C = 2(5) + \\frac{50}{5} = 20",
          "explanation": "Substituting $x = 5$ into the cost function gives the smallest possible cost.",
          "diagram": null
        }
      ],
      "finalAnswer": "The cost is minimised when $x = 5$, giving a minimum cost of $C = 20$."
    }
  },
  {
    "id": "al.y1.pure.optimisation.q004",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Optimisation",
    "subtopicId": "al.y1.pure.optimisation",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "optimisation",
      "maximum",
      "volume",
      "second-derivative-test"
    ],
    "questionText": "The volume of a container is modelled by $V = 12x^{2} - x^{3}$ for $0 < x < 12$, where $x$ is a length in centimetres. Find the value of $x$ that maximises the volume, and state the maximum volume.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate V with respect to x",
          "workingLatex": "\\frac{dV}{dx} = 24x - 3x^{2}",
          "explanation": "The maximum volume occurs at a stationary point, so we begin by finding the gradient function.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set the derivative to zero",
          "workingLatex": "24x - 3x^{2} = 0",
          "explanation": "At the maximum the curve is momentarily flat, so $\\frac{dV}{dx} = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Factorise",
          "workingLatex": "3x(8 - x) = 0",
          "explanation": "Taking out the common factor $3x$ makes the roots easy to read off.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve and choose the valid root",
          "workingLatex": "x = 0 \\text{ or } x = 8; \\; x = 8",
          "explanation": "The root $x = 0$ gives no container at all, so within the domain the stationary point of interest is $x = 8$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the second derivative",
          "workingLatex": "\\frac{d^2V}{dx^2} = 24 - 6x",
          "explanation": "The sign of the second derivative at $x = 8$ will tell us whether it is a maximum.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Classify the stationary point",
          "workingLatex": "24 - 6(8) = -24 < 0 \\Rightarrow \\text{maximum}",
          "explanation": "A negative second derivative confirms the curve bends downwards, so $x = 8$ gives a maximum volume.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Calculate the maximum volume",
          "workingLatex": "V = 12(8)^{2} - (8)^{3} = 768 - 512 = 256",
          "explanation": "Substituting $x = 8$ into the volume function gives the greatest possible volume.",
          "diagram": null
        }
      ],
      "finalAnswer": "The volume is maximised when $x = 8$ cm, giving a maximum volume of $V = 256$ cm$^{3}$."
    }
  },
  {
    "id": "al.y1.pure.optimisation.q005",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Optimisation",
    "subtopicId": "al.y1.pure.optimisation",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "optimisation",
      "minimum",
      "surface-area",
      "reciprocal-rewrite"
    ],
    "questionText": "The surface area of a box is given by $A = 2x^{2} + \\dfrac{32}{x}$ for $x > 0$, where $x$ is a length in metres. Find the value of $x$ that minimises the surface area, and state this minimum area.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rewrite the area using index notation",
          "workingLatex": "A = 2x^{2} + 32x^{-1}",
          "explanation": "Writing $\\frac{32}{x}$ as $32x^{-1}$ lets us differentiate using the power rule.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate A with respect to x",
          "workingLatex": "\\frac{dA}{dx} = 4x - 32x^{-2}",
          "explanation": "Differentiating $2x^{2}$ gives $4x$, and $32x^{-1}$ becomes $-32x^{-2}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite the derivative as a fraction",
          "workingLatex": "\\frac{dA}{dx} = 4x - \\frac{32}{x^{2}}",
          "explanation": "Converting back to a fraction makes the equation easier to rearrange.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set the derivative to zero",
          "workingLatex": "4x - \\frac{32}{x^{2}} = 0",
          "explanation": "The minimum surface area is a stationary point, so the gradient is $0$ there.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for x",
          "workingLatex": "4x^{3} = 32 \\Rightarrow x^{3} = 8 \\Rightarrow x = 2",
          "explanation": "Multiplying through by $x^{2}$ gives $4x^{3} = 32$; taking the cube root gives the positive length $x = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the second derivative",
          "workingLatex": "\\frac{d^2A}{dx^2} = 4 + 64x^{-3} = 4 + \\frac{64}{x^{3}}",
          "explanation": "Differentiating $-32x^{-2}$ gives $64x^{-3}$; its sign classifies the stationary point.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Classify the stationary point",
          "workingLatex": "4 + \\frac{64}{2^{3}} = 12 > 0 \\Rightarrow \\text{minimum}",
          "explanation": "A positive second derivative shows the curve is concave up, so $x = 2$ gives a minimum area.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Calculate the minimum surface area",
          "workingLatex": "A = 2(2)^{2} + \\frac{32}{2} = 8 + 16 = 24",
          "explanation": "Substituting $x = 2$ into the area function gives the smallest possible surface area.",
          "diagram": null
        }
      ],
      "finalAnswer": "The surface area is minimised when $x = 2$ m, giving a minimum area of $A = 24$ m$^{2}$."
    }
  },
  {
    "id": "al.y1.pure.optimisation.q006",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Optimisation",
    "subtopicId": "al.y1.pure.optimisation",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "optimisation",
      "maximum",
      "profit",
      "second-derivative-test"
    ],
    "questionText": "A firm's daily profit, in hundreds of pounds, is modelled by $P = 60x - 3x^{2}$, where $x$ is the number of units sold in thousands. Find the value of $x$ that maximises the profit, and state the maximum profit.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate P with respect to x",
          "workingLatex": "\\frac{dP}{dx} = 60 - 6x",
          "explanation": "The greatest profit occurs at a stationary point, so we first find the gradient function.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set the derivative to zero",
          "workingLatex": "60 - 6x = 0",
          "explanation": "At the maximum the gradient is zero, so we set $\\frac{dP}{dx} = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for x",
          "workingLatex": "6x = 60 \\Rightarrow x = 10",
          "explanation": "Rearranging gives the number of units (in thousands) at the stationary point.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the second derivative",
          "workingLatex": "\\frac{d^2P}{dx^2} = -6",
          "explanation": "The sign of the second derivative determines whether the point is a maximum or a minimum.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Classify the stationary point",
          "workingLatex": "\\frac{d^2P}{dx^2} = -6 < 0 \\Rightarrow \\text{maximum}",
          "explanation": "A negative second derivative means the curve bends downwards, confirming a maximum profit at $x = 10$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Calculate the maximum profit",
          "workingLatex": "P = 60(10) - 3(10)^{2} = 600 - 300 = 300",
          "explanation": "Substituting $x = 10$ gives the largest profit, measured in hundreds of pounds.",
          "diagram": null
        }
      ],
      "finalAnswer": "The profit is maximised when $x = 10$ (thousand units), giving a maximum profit of $P = 300$ (i.e. £30{,}000)."
    }
  },
  {
    "id": "al.y1.pure.optimisation.q007",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Optimisation",
    "subtopicId": "al.y1.pure.optimisation",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "optimisation",
      "minimum",
      "cylinder",
      "surface-area"
    ],
    "questionText": "The surface area of a closed cylinder is $A = 2\\pi r^{2} + \\dfrac{108\\pi}{r}$ for $r > 0$, where $r$ is the radius in centimetres. Find the radius that minimises the surface area, and state the minimum area in terms of $\\pi$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rewrite the area using index notation",
          "workingLatex": "A = 2\\pi r^{2} + 108\\pi r^{-1}",
          "explanation": "Writing $\\frac{108\\pi}{r}$ as $108\\pi r^{-1}$ lets us differentiate the second term with the power rule.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate A with respect to r",
          "workingLatex": "\\frac{dA}{dr} = 4\\pi r - 108\\pi r^{-2}",
          "explanation": "Differentiating $2\\pi r^{2}$ gives $4\\pi r$, and $108\\pi r^{-1}$ becomes $-108\\pi r^{-2}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite the derivative as a fraction",
          "workingLatex": "\\frac{dA}{dr} = 4\\pi r - \\frac{108\\pi}{r^{2}}",
          "explanation": "Converting back to a fraction makes the equation easier to solve.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set the derivative to zero",
          "workingLatex": "4\\pi r - \\frac{108\\pi}{r^{2}} = 0",
          "explanation": "The minimum surface area is a stationary point, so its gradient is $0$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for r",
          "workingLatex": "4r^{3} = 108 \\Rightarrow r^{3} = 27 \\Rightarrow r = 3",
          "explanation": "Dividing by $\\pi$ and multiplying by $r^{2}$ gives $4r^{3} = 108$; the cube root gives the positive radius $r = 3$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the second derivative",
          "workingLatex": "\\frac{d^2A}{dr^2} = 4\\pi + 216\\pi r^{-3} = 4\\pi + \\frac{216\\pi}{r^{3}}",
          "explanation": "Differentiating $-108\\pi r^{-2}$ gives $216\\pi r^{-3}$; its sign classifies the stationary point.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Classify the stationary point",
          "workingLatex": "4\\pi + \\frac{216\\pi}{3^{3}} = 12\\pi > 0 \\Rightarrow \\text{minimum}",
          "explanation": "A positive second derivative means the curve is concave up, so $r = 3$ gives a minimum surface area.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Calculate the minimum surface area",
          "workingLatex": "A = 2\\pi(3)^{2} + \\frac{108\\pi}{3} = 18\\pi + 36\\pi = 54\\pi",
          "explanation": "Substituting $r = 3$ into the area function gives the least surface area, left in terms of $\\pi$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The surface area is minimised when $r = 3$ cm, giving a minimum area of $A = 54\\pi$ cm$^{2}$ (about $169.6$ cm$^{2}$)."
    }
  },
  {
    "id": "al.y1.pure.optimisation.q008",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Optimisation",
    "subtopicId": "al.y1.pure.optimisation",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "optimisation",
      "maximum",
      "projectile",
      "second-derivative-test"
    ],
    "questionText": "A ball is thrown so that its height in metres after $t$ seconds is $h = 30t - 5t^{2}$. Find the time at which the ball reaches its greatest height, and state that maximum height.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate h with respect to t",
          "workingLatex": "\\frac{dh}{dt} = 30 - 10t",
          "explanation": "The greatest height is a stationary point of $h$, so we first find the rate of change of height, $\\frac{dh}{dt}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set the derivative to zero",
          "workingLatex": "30 - 10t = 0",
          "explanation": "At the top of its flight the ball's velocity is zero, so $\\frac{dh}{dt} = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for t",
          "workingLatex": "10t = 30 \\Rightarrow t = 3",
          "explanation": "Rearranging gives the time at which the ball reaches its highest point.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the second derivative",
          "workingLatex": "\\frac{d^2h}{dt^2} = -10",
          "explanation": "The sign of the second derivative tells us whether this stationary point is a maximum or minimum.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Classify the stationary point",
          "workingLatex": "\\frac{d^2h}{dt^2} = -10 < 0 \\Rightarrow \\text{maximum}",
          "explanation": "A negative second derivative confirms the height curve bends downwards, so $t = 3$ gives the greatest height.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Calculate the maximum height",
          "workingLatex": "h = 30(3) - 5(3)^{2} = 90 - 45 = 45",
          "explanation": "Substituting $t = 3$ into $h$ gives the greatest height the ball reaches.",
          "diagram": null
        }
      ],
      "finalAnswer": "The ball reaches its greatest height after $t = 3$ seconds, at a maximum height of $h = 45$ m."
    }
  },
  {
    "id": "al.y1.pure.optimisation.q009",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Optimisation",
    "subtopicId": "al.y1.pure.optimisation",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "optimisation",
      "minimum",
      "distance",
      "second-derivative-test"
    ],
    "questionText": "The square of the distance from a fixed point to a moving object is given by $S = 2x^{2} - 8x + 11$. Find the value of $x$ that minimises $S$, and state the minimum value.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate S with respect to x",
          "workingLatex": "\\frac{dS}{dx} = 4x - 8",
          "explanation": "The smallest value of $S$ is a stationary point, so we first find the gradient function.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set the derivative to zero",
          "workingLatex": "4x - 8 = 0",
          "explanation": "At a minimum the gradient is zero, so we set $\\frac{dS}{dx} = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for x",
          "workingLatex": "4x = 8 \\Rightarrow x = 2",
          "explanation": "Rearranging gives the value of $x$ at the stationary point.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the second derivative",
          "workingLatex": "\\frac{d^2S}{dx^2} = 4",
          "explanation": "The sign of the second derivative tells us whether the point is a minimum or maximum.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Classify the stationary point",
          "workingLatex": "\\frac{d^2S}{dx^2} = 4 > 0 \\Rightarrow \\text{minimum}",
          "explanation": "A positive second derivative means the curve is concave up, so $x = 2$ gives a minimum value.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Calculate the minimum value",
          "workingLatex": "S = 2(2)^{2} - 8(2) + 11 = 8 - 16 + 11 = 3",
          "explanation": "Substituting $x = 2$ into $S$ gives the smallest value of the squared distance.",
          "diagram": null
        }
      ],
      "finalAnswer": "The value $S$ is minimised when $x = 2$, giving a minimum value of $S = 3$."
    }
  },
  {
    "id": "al.y1.pure.optimisation.q010",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Optimisation",
    "subtopicId": "al.y1.pure.optimisation",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "optimisation",
      "minimum",
      "sum-of-squares",
      "second-derivative-test"
    ],
    "questionText": "Two positive numbers have a sum of $12$. The sum of their squares is $S = x^{2} + (12 - x)^{2}$, where $x$ is one of the numbers. Find the value of $x$ that minimises $S$, and state the minimum value.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Expand the function",
          "workingLatex": "S = x^{2} + (12 - x)^{2} = 2x^{2} - 24x + 144",
          "explanation": "Expanding $(12 - x)^{2} = 144 - 24x + x^{2}$ and adding $x^{2}$ gives a quadratic in $x$ that is easy to differentiate.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate S with respect to x",
          "workingLatex": "\\frac{dS}{dx} = 4x - 24",
          "explanation": "The smallest sum of squares is a stationary point, so we find the gradient function.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set the derivative to zero",
          "workingLatex": "4x - 24 = 0",
          "explanation": "At a minimum the gradient is zero, so $\\frac{dS}{dx} = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for x",
          "workingLatex": "4x = 24 \\Rightarrow x = 6",
          "explanation": "Rearranging gives the value of $x$ at the stationary point.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the second derivative",
          "workingLatex": "\\frac{d^2S}{dx^2} = 4",
          "explanation": "The sign of the second derivative classifies the stationary point.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Classify the stationary point",
          "workingLatex": "\\frac{d^2S}{dx^2} = 4 > 0 \\Rightarrow \\text{minimum}",
          "explanation": "A positive second derivative means the curve is concave up, so $x = 6$ gives a minimum.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Calculate the minimum value",
          "workingLatex": "S = 6^{2} + (12 - 6)^{2} = 36 + 36 = 72",
          "explanation": "Substituting $x = 6$ shows both numbers equal $6$, giving the smallest possible sum of squares.",
          "diagram": null
        }
      ],
      "finalAnswer": "The sum of squares is minimised when $x = 6$ (both numbers equal $6$), giving a minimum value of $S = 72$."
    }
  },
  {
    "id": "al.y1.pure.optimisation.q011",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Optimisation",
    "subtopicId": "al.y1.pure.optimisation",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "optimisation",
      "maximum",
      "volume",
      "open-box"
    ],
    "questionText": "An open box is made from a square sheet of card by cutting squares of side $x$ cm from each corner and folding up the sides. Its volume is $V = x(12 - 2x)^{2}$ for $0 < x < 6$. Find the value of $x$ that maximises the volume, and state the maximum volume.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Expand the volume function",
          "workingLatex": "V = x(12 - 2x)^{2} = 4x^{3} - 48x^{2} + 144x",
          "explanation": "Expanding $(12 - 2x)^{2} = 144 - 48x + 4x^{2}$ and multiplying by $x$ gives a cubic that is easy to differentiate.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate V with respect to x",
          "workingLatex": "\\frac{dV}{dx} = 12x^{2} - 96x + 144",
          "explanation": "The maximum volume is a stationary point, so we differentiate term by term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set the derivative to zero and simplify",
          "workingLatex": "12(x^{2} - 8x + 12) = 0",
          "explanation": "Setting $\\frac{dV}{dx} = 0$ and taking out the factor $12$ leaves a simpler quadratic to solve.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Factorise the quadratic",
          "workingLatex": "12(x - 2)(x - 6) = 0",
          "explanation": "Factorising gives the two possible values of $x$ at the stationary points.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Choose the valid root",
          "workingLatex": "x = 2 \\text{ or } x = 6; \\; x = 2",
          "explanation": "At $x = 6$ the side $(12 - 2x)$ is zero, giving no box, so the valid stationary point in the domain is $x = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the second derivative",
          "workingLatex": "\\frac{d^2V}{dx^2} = 24x - 96",
          "explanation": "The sign of the second derivative at $x = 2$ classifies the stationary point.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Classify the stationary point",
          "workingLatex": "24(2) - 96 = -48 < 0 \\Rightarrow \\text{maximum}",
          "explanation": "A negative second derivative confirms the curve bends downwards, so $x = 2$ gives a maximum volume.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Calculate the maximum volume",
          "workingLatex": "V = 2(12 - 4)^{2} = 2 \\times 64 = 128",
          "explanation": "Substituting $x = 2$ into the volume function gives the greatest possible volume.",
          "diagram": null
        }
      ],
      "finalAnswer": "The volume is maximised when $x = 2$ cm, giving a maximum volume of $V = 128$ cm$^{3}$."
    }
  },
  {
    "id": "al.y1.pure.optimisation.q012",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Optimisation",
    "subtopicId": "al.y1.pure.optimisation",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "optimisation",
      "maximum-area",
      "rectangle",
      "perimeter-constraint"
    ],
    "questionText": "A rectangle has a perimeter of $40$ cm. Find the dimensions that give the maximum area, and state this maximum area.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Introduce variables and the perimeter constraint",
          "workingLatex": "2x + 2y = 40",
          "explanation": "Let the rectangle have width $x$ and length $y$. The perimeter is the total distance around all four sides, so $2x+2y$ must equal the fixed $40$ cm. This constraint links the two variables, which is what lets us reduce the problem to one variable.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Make y the subject",
          "workingLatex": "y = 20 - x",
          "explanation": "Dividing the constraint by $2$ gives $x+y=20$, so $y=20-x$. Writing one dimension in terms of the other is the key move: it means the area can be expressed using $x$ alone.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the area as a function of x",
          "workingLatex": "A = x(20 - x) = 20x - x^{2}",
          "explanation": "The area of a rectangle is width times length, $A=xy$. Substituting $y=20-x$ turns the area into a single-variable function of $x$, which we can now differentiate.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Differentiate the area",
          "workingLatex": "\\frac{dA}{dx} = 20 - 2x",
          "explanation": "The derivative measures how the area changes as $x$ changes. At the largest area the curve momentarily levels off, so the gradient there must be zero.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set the derivative to zero and solve",
          "workingLatex": "20 - 2x = 0 \\implies x = 10",
          "explanation": "Setting $\\frac{dA}{dx}=0$ locates the stationary point where the area stops rising. Solving gives $x=10$ cm.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Confirm it is a maximum",
          "workingLatex": "\\frac{d^2A}{dx^2} = -2 < 0",
          "explanation": "The second derivative is negative, so the curve is concave down and the stationary point is a maximum, not a minimum. This confirms $x=10$ gives the greatest area.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the dimensions and maximum area",
          "workingLatex": "y = 20 - 10 = 10, \\quad A = 10 \\times 10 = 100",
          "explanation": "Substituting back gives $y=10$ cm, so the rectangle is a $10$ cm by $10$ cm square. This matches the well-known fact that a fixed perimeter encloses the most area as a square.",
          "diagram": null
        }
      ],
      "finalAnswer": "The area is greatest when the rectangle is a $10\\,\\text{cm} \\times 10\\,\\text{cm}$ square, giving a maximum area of $100\\,\\text{cm}^2$."
    }
  },
  {
    "id": "al.y1.pure.optimisation.q013",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Optimisation",
    "subtopicId": "al.y1.pure.optimisation",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "optimisation",
      "maximum-product",
      "two-numbers"
    ],
    "questionText": "Two positive numbers have a sum of $24$. Find the two numbers that make their product as large as possible, and state this maximum product.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Introduce variables and the sum constraint",
          "workingLatex": "x + y = 24",
          "explanation": "Let the two numbers be $x$ and $y$. Their sum is fixed at $24$, giving one equation that connects them so the problem can be written in terms of a single variable.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Make y the subject",
          "workingLatex": "y = 24 - x",
          "explanation": "Rearranging the constraint expresses $y$ in terms of $x$. This is the standard first step: use the fixed relationship to remove one variable.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the product as a function of x",
          "workingLatex": "P = x(24 - x) = 24x - x^{2}",
          "explanation": "The quantity to maximise is the product $P=xy$. Substituting $y=24-x$ gives $P$ as a function of $x$ only, ready to differentiate.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Differentiate the product",
          "workingLatex": "\\frac{dP}{dx} = 24 - 2x",
          "explanation": "The derivative tells us the rate at which the product changes with $x$. At the maximum the product stops increasing, so this gradient equals zero.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set the derivative to zero and solve",
          "workingLatex": "24 - 2x = 0 \\implies x = 12",
          "explanation": "Solving $\\frac{dP}{dx}=0$ finds the stationary point, giving $x=12$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Confirm it is a maximum",
          "workingLatex": "\\frac{d^2P}{dx^2} = -2 < 0",
          "explanation": "A negative second derivative means the graph curves downward, so the stationary point is a maximum. This guarantees we have the largest product rather than the smallest.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the numbers and maximum product",
          "workingLatex": "y = 24 - 12 = 12, \\quad P = 12 \\times 12 = 144",
          "explanation": "Both numbers are $12$, so the product is largest when the sum is split equally. The greatest product is $144$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The product is greatest when both numbers are $12$, giving a maximum product of $144$."
    }
  },
  {
    "id": "al.y1.pure.optimisation.q014",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Optimisation",
    "subtopicId": "al.y1.pure.optimisation",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "optimisation",
      "maximum-area",
      "enclosure",
      "fencing"
    ],
    "questionText": "A farmer uses $80$ m of fencing to make a rectangular enclosure against a straight wall. The wall forms one complete side, so only the other three sides are fenced. Find the dimensions that maximise the enclosed area, and state this maximum area.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Introduce variables and the fencing constraint",
          "workingLatex": "2x + y = 80",
          "explanation": "Let $x$ be the length of each side perpendicular to the wall and $y$ the side parallel to the wall. Because the wall replaces one long side, only two widths and one length are fenced, so $2x+y=80$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Make y the subject",
          "workingLatex": "y = 80 - 2x",
          "explanation": "Rearranging the fencing equation gives the side parallel to the wall in terms of $x$. This removes $y$ so the area can be written with one variable.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the area as a function of x",
          "workingLatex": "A = x(80 - 2x) = 80x - 2x^{2}",
          "explanation": "The enclosed area is $A=xy$. Substituting $y=80-2x$ expresses the area purely in terms of $x$, valid for $0<x<40$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Differentiate the area",
          "workingLatex": "\\frac{dA}{dx} = 80 - 4x",
          "explanation": "Differentiating shows how the area responds to changes in $x$. The maximum occurs where this rate of change is zero.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set the derivative to zero and solve",
          "workingLatex": "80 - 4x = 0 \\implies x = 20",
          "explanation": "Setting $\\frac{dA}{dx}=0$ and solving gives $x=20$ m, the depth that turns the area's rise into a peak.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Confirm it is a maximum",
          "workingLatex": "\\frac{d^2A}{dx^2} = -4 < 0",
          "explanation": "The second derivative is negative, so the curve is concave down and $x=20$ gives a maximum area rather than a minimum.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the dimensions and maximum area",
          "workingLatex": "y = 80 - 2(20) = 40, \\quad A = 20 \\times 40 = 800",
          "explanation": "The side along the wall is $40$ m and each perpendicular side is $20$ m, giving a maximum area of $800$ square metres. Note the wall lets the long side be twice the depth.",
          "diagram": null
        }
      ],
      "finalAnswer": "The area is greatest with sides of $20\\,\\text{m}$ (perpendicular to the wall) and $40\\,\\text{m}$ (along the wall), giving a maximum area of $800\\,\\text{m}^2$."
    }
  },
  {
    "id": "al.y1.pure.optimisation.q015",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Optimisation",
    "subtopicId": "al.y1.pure.optimisation",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "optimisation",
      "minimum-perimeter",
      "rectangle",
      "fixed-area"
    ],
    "questionText": "A rectangle has a fixed area of $36\\,\\text{cm}^2$. Find the dimensions that give the minimum perimeter, and state this minimum perimeter.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Introduce variables and the area constraint",
          "workingLatex": "xy = 36",
          "explanation": "Let the rectangle have width $x$ and length $y$. The area is fixed at $36$, so $xy=36$. This constraint ties the two dimensions together so we can work with one variable.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Make y the subject",
          "workingLatex": "y = \\frac{36}{x}",
          "explanation": "Dividing the area constraint by $x$ expresses the length in terms of the width. This lets the perimeter be written using $x$ alone.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the perimeter as a function of x",
          "workingLatex": "P = 2x + 2y = 2x + \\frac{72}{x}",
          "explanation": "The perimeter is $P=2x+2y$. Substituting $y=\\frac{36}{x}$ gives $2y=\\frac{72}{x}$, so the perimeter depends only on $x$ (with $x>0$).",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Differentiate the perimeter",
          "workingLatex": "\\frac{dP}{dx} = 2 - \\frac{72}{x^{2}}",
          "explanation": "Rewriting $\\frac{72}{x}$ as $72x^{-1}$ and differentiating gives $-72x^{-2}=-\\frac{72}{x^{2}}$. The minimum perimeter occurs where this gradient is zero.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set the derivative to zero and solve",
          "workingLatex": "2 - \\frac{72}{x^{2}} = 0 \\implies x^{2} = 36 \\implies x = 6",
          "explanation": "Solving gives $x^2=36$, so $x=6$. We reject $x=-6$ because a length cannot be negative, leaving $x=6$ cm as the only valid value.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Confirm it is a minimum",
          "workingLatex": "\\frac{d^2P}{dx^2} = \\frac{144}{x^{3}} > 0",
          "explanation": "For $x>0$ the second derivative is positive, so the curve is concave up and the stationary point is a minimum. This confirms we have the smallest possible perimeter.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the dimensions and minimum perimeter",
          "workingLatex": "y = \\frac{36}{6} = 6, \\quad P = 2(6) + 2(6) = 24",
          "explanation": "Both sides are $6$ cm, so a square minimises the perimeter for a fixed area. The minimum perimeter is $24$ cm.",
          "diagram": null
        }
      ],
      "finalAnswer": "The perimeter is least when the rectangle is a $6\\,\\text{cm} \\times 6\\,\\text{cm}$ square, giving a minimum perimeter of $24\\,\\text{cm}$."
    }
  },
  {
    "id": "al.y1.pure.optimisation.q016",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Optimisation",
    "subtopicId": "al.y1.pure.optimisation",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "optimisation",
      "maximum-area",
      "rectangle",
      "perimeter-constraint"
    ],
    "questionText": "A rectangular garden is to be enclosed using $100$ m of fencing on all four sides. Find the dimensions that maximise the area, and state the maximum area.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Introduce variables and the perimeter constraint",
          "workingLatex": "2x + 2y = 100",
          "explanation": "Let the garden have width $x$ and length $y$. All four sides are fenced, so $2x+2y$ equals the fixed $100$ m of fencing. This constraint connects the two dimensions.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Make y the subject",
          "workingLatex": "y = 50 - x",
          "explanation": "Dividing by $2$ gives $x+y=50$, so $y=50-x$. Expressing $y$ through $x$ allows the area to be written with a single variable.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the area as a function of x",
          "workingLatex": "A = x(50 - x) = 50x - x^{2}",
          "explanation": "The area is $A=xy$. Substituting $y=50-x$ gives a single-variable expression to optimise, valid for $0<x<50$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Differentiate the area",
          "workingLatex": "\\frac{dA}{dx} = 50 - 2x",
          "explanation": "Differentiating gives the rate of change of area with $x$. At the maximum area this rate is zero.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set the derivative to zero and solve",
          "workingLatex": "50 - 2x = 0 \\implies x = 25",
          "explanation": "Solving $\\frac{dA}{dx}=0$ gives $x=25$ m at the stationary point.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Confirm it is a maximum",
          "workingLatex": "\\frac{d^2A}{dx^2} = -2 < 0",
          "explanation": "The negative second derivative shows the curve is concave down, so $x=25$ gives a maximum area.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the dimensions and maximum area",
          "workingLatex": "y = 50 - 25 = 25, \\quad A = 25 \\times 25 = 625",
          "explanation": "The garden is a $25$ m by $25$ m square, giving the greatest area of $625$ square metres, as expected for a fixed perimeter.",
          "diagram": null
        }
      ],
      "finalAnswer": "The area is greatest when the garden is a $25\\,\\text{m} \\times 25\\,\\text{m}$ square, giving a maximum area of $625\\,\\text{m}^2$."
    }
  },
  {
    "id": "al.y1.pure.optimisation.q017",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Optimisation",
    "subtopicId": "al.y1.pure.optimisation",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "optimisation",
      "maximum-product",
      "two-numbers"
    ],
    "questionText": "Two positive numbers add up to $30$. Find the maximum possible value of their product.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Introduce variables and the sum constraint",
          "workingLatex": "x + y = 30",
          "explanation": "Let the numbers be $x$ and $y$. Their sum is fixed at $30$, giving one equation linking them so the product can be written in one variable.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Make y the subject",
          "workingLatex": "y = 30 - x",
          "explanation": "Rearranging the constraint gives $y$ in terms of $x$, which is what we substitute into the product.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the product as a function of x",
          "workingLatex": "P = x(30 - x) = 30x - x^{2}",
          "explanation": "The product is $P=xy$. Replacing $y$ with $30-x$ makes $P$ a function of $x$ alone, ready to differentiate.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Differentiate the product",
          "workingLatex": "\\frac{dP}{dx} = 30 - 2x",
          "explanation": "The derivative gives the slope of the product function. The maximum sits where this slope is zero.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set the derivative to zero and solve",
          "workingLatex": "30 - 2x = 0 \\implies x = 15",
          "explanation": "Solving $\\frac{dP}{dx}=0$ gives $x=15$ at the stationary point.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Confirm it is a maximum",
          "workingLatex": "\\frac{d^2P}{dx^2} = -2 < 0",
          "explanation": "The second derivative is negative, so the stationary point is a maximum and gives the largest product.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the maximum product",
          "workingLatex": "y = 30 - 15 = 15, \\quad P = 15 \\times 15 = 225",
          "explanation": "Both numbers equal $15$, so splitting the sum equally maximises the product, giving $225$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The product is greatest when both numbers are $15$, giving a maximum product of $225$."
    }
  },
  {
    "id": "al.y1.pure.optimisation.q018",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Optimisation",
    "subtopicId": "al.y1.pure.optimisation",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "optimisation",
      "maximum-area",
      "enclosure",
      "fencing"
    ],
    "questionText": "A rectangular sheep pen is built against a long barn wall, using $120$ m of fencing for the three sides not covered by the wall. Find the dimensions that give the greatest area, and state that area.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Introduce variables and the fencing constraint",
          "workingLatex": "2x + y = 120",
          "explanation": "Let $x$ be each side perpendicular to the barn wall and $y$ the side parallel to it. The wall covers one long side, so the fencing covers two widths and one length: $2x+y=120$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Make y the subject",
          "workingLatex": "y = 120 - 2x",
          "explanation": "Rearranging expresses the side along the wall in terms of $x$, removing $y$ so the area becomes a one-variable function.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the area as a function of x",
          "workingLatex": "A = x(120 - 2x) = 120x - 2x^{2}",
          "explanation": "The pen's area is $A=xy$. Substituting $y=120-2x$ gives the area in terms of $x$ only, valid for $0<x<60$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Differentiate the area",
          "workingLatex": "\\frac{dA}{dx} = 120 - 4x",
          "explanation": "Differentiating shows how the area changes as the depth $x$ changes. The greatest area is where this derivative equals zero.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set the derivative to zero and solve",
          "workingLatex": "120 - 4x = 0 \\implies x = 30",
          "explanation": "Solving $\\frac{dA}{dx}=0$ gives $x=30$ m, the depth at the stationary point.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Confirm it is a maximum",
          "workingLatex": "\\frac{d^2A}{dx^2} = -4 < 0",
          "explanation": "The negative second derivative confirms the curve is concave down, so $x=30$ gives the maximum area.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the dimensions and maximum area",
          "workingLatex": "y = 120 - 2(30) = 60, \\quad A = 30 \\times 60 = 1800",
          "explanation": "The side along the wall is $60$ m and each depth is $30$ m, giving a maximum area of $1800$ square metres.",
          "diagram": null
        }
      ],
      "finalAnswer": "The area is greatest with depths of $30\\,\\text{m}$ and a wall side of $60\\,\\text{m}$, giving a maximum area of $1800\\,\\text{m}^2$."
    }
  },
  {
    "id": "al.y1.pure.optimisation.q019",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Optimisation",
    "subtopicId": "al.y1.pure.optimisation",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "optimisation",
      "minimum-perimeter",
      "rectangle",
      "fixed-area"
    ],
    "questionText": "A rectangle must have an area of $144\\,\\text{m}^2$. Find the dimensions that minimise its perimeter, and state the minimum perimeter.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Introduce variables and the area constraint",
          "workingLatex": "xy = 144",
          "explanation": "Let the rectangle have width $x$ and length $y$. The area is fixed at $144$, so $xy=144$. This ties the dimensions together so the perimeter can be written in one variable.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Make y the subject",
          "workingLatex": "y = \\frac{144}{x}",
          "explanation": "Dividing the area equation by $x$ gives the length in terms of the width, ready to substitute into the perimeter.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the perimeter as a function of x",
          "workingLatex": "P = 2x + \\frac{288}{x}",
          "explanation": "The perimeter is $P=2x+2y$. Since $2y=\\frac{288}{x}$, the perimeter depends only on $x$ for $x>0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Differentiate the perimeter",
          "workingLatex": "\\frac{dP}{dx} = 2 - \\frac{288}{x^{2}}",
          "explanation": "Writing $\\frac{288}{x}$ as $288x^{-1}$ and differentiating gives $-288x^{-2}=-\\frac{288}{x^{2}}$. The minimum perimeter is where this is zero.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set the derivative to zero and solve",
          "workingLatex": "2 - \\frac{288}{x^{2}} = 0 \\implies x^{2} = 144 \\implies x = 12",
          "explanation": "Solving gives $x^2=144$, so $x=12$. The negative root is rejected because a side length must be positive.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Confirm it is a minimum",
          "workingLatex": "\\frac{d^2P}{dx^2} = \\frac{576}{x^{3}} > 0",
          "explanation": "For $x>0$ the second derivative is positive, so the curve is concave up and the stationary point is a minimum perimeter.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the dimensions and minimum perimeter",
          "workingLatex": "y = \\frac{144}{12} = 12, \\quad P = 2(12) + 2(12) = 48",
          "explanation": "Both sides are $12$ m, so a square gives the smallest perimeter for the fixed area, namely $48$ m.",
          "diagram": null
        }
      ],
      "finalAnswer": "The perimeter is least when the rectangle is a $12\\,\\text{m} \\times 12\\,\\text{m}$ square, giving a minimum perimeter of $48\\,\\text{m}$."
    }
  },
  {
    "id": "al.y1.pure.optimisation.q020",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Optimisation",
    "subtopicId": "al.y1.pure.optimisation",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "optimisation",
      "minimum-sum",
      "two-numbers"
    ],
    "questionText": "Two positive numbers have a product of $64$. Find the two numbers that make their sum as small as possible, and state this minimum sum.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Introduce variables and the product constraint",
          "workingLatex": "xy = 64",
          "explanation": "Let the numbers be $x$ and $y$. Their product is fixed at $64$, so $xy=64$. This constraint links them so the sum can be expressed in one variable.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Make y the subject",
          "workingLatex": "y = \\frac{64}{x}",
          "explanation": "Dividing the product equation by $x$ gives $y$ in terms of $x$, which we substitute into the sum.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the sum as a function of x",
          "workingLatex": "S = x + \\frac{64}{x}",
          "explanation": "The quantity to minimise is the sum $S=x+y$. Substituting $y=\\frac{64}{x}$ gives $S$ as a function of $x$ only, for $x>0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Differentiate the sum",
          "workingLatex": "\\frac{dS}{dx} = 1 - \\frac{64}{x^{2}}",
          "explanation": "Writing $\\frac{64}{x}$ as $64x^{-1}$ and differentiating gives $-64x^{-2}=-\\frac{64}{x^{2}}$. The smallest sum occurs where this derivative is zero.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set the derivative to zero and solve",
          "workingLatex": "1 - \\frac{64}{x^{2}} = 0 \\implies x^{2} = 64 \\implies x = 8",
          "explanation": "Solving gives $x^2=64$, so $x=8$. We reject $x=-8$ since the numbers are positive.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Confirm it is a minimum",
          "workingLatex": "\\frac{d^2S}{dx^2} = \\frac{128}{x^{3}} > 0",
          "explanation": "For $x>0$ the second derivative is positive, so the curve is concave up and $x=8$ gives a minimum sum.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the numbers and minimum sum",
          "workingLatex": "y = \\frac{64}{8} = 8, \\quad S = 8 + 8 = 16",
          "explanation": "Both numbers equal $8$, so the sum is smallest when the equal factors are chosen, giving a minimum sum of $16$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The sum is least when both numbers are $8$, giving a minimum sum of $16$."
    }
  },
  {
    "id": "al.y1.pure.optimisation.q021",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Optimisation",
    "subtopicId": "al.y1.pure.optimisation",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "optimisation",
      "maximum-area",
      "enclosure"
    ],
    "questionText": "The area of a rectangular enclosure built against a wall is modelled by $A = x(100 - 2x)$, where $x$ metres is the length of each of the two sides perpendicular to the wall. Find the value of $x$ that maximises the area, and state the maximum area.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the given area function",
          "workingLatex": "A = x(100 - 2x)",
          "explanation": "Here $x$ is the depth of the enclosure and $100-2x$ is the side along the wall (the remaining fence after two depths are used). We maximise $A$ over the valid range $0<x<50$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expand the brackets",
          "workingLatex": "A = 100x - 2x^{2}",
          "explanation": "Multiplying out turns the area into a standard quadratic in $x$, which is easy to differentiate term by term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate the area",
          "workingLatex": "\\frac{dA}{dx} = 100 - 4x",
          "explanation": "The derivative gives the rate of change of area with the depth $x$. The maximum area is where this equals zero.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set the derivative to zero and solve",
          "workingLatex": "100 - 4x = 0 \\implies x = 25",
          "explanation": "Solving $\\frac{dA}{dx}=0$ gives $x=25$ m, which lies inside the valid range.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Confirm it is a maximum",
          "workingLatex": "\\frac{d^2A}{dx^2} = -4 < 0",
          "explanation": "The second derivative is negative, so the graph is concave down and $x=25$ gives a maximum area, not a minimum.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the maximum area",
          "workingLatex": "A = 25(100 - 50) = 25 \\times 50 = 1250",
          "explanation": "Substituting $x=25$ back into the area function gives the largest possible area, $1250$ square metres.",
          "diagram": null
        }
      ],
      "finalAnswer": "The area is greatest when $x = 25\\,\\text{m}$, giving a maximum area of $1250\\,\\text{m}^2$."
    }
  },
  {
    "id": "al.y1.pure.optimisation.q022",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Optimisation",
    "subtopicId": "al.y1.pure.optimisation",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "optimisation",
      "maximum-area",
      "rectangle",
      "show-that"
    ],
    "questionText": "A rectangle has a perimeter of $24$ cm. Show that its area is greatest when the rectangle is a square, and find this greatest area.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Introduce variables and the perimeter constraint",
          "workingLatex": "2x + 2y = 24",
          "explanation": "Let the rectangle have width $x$ and length $y$. The four sides total the fixed perimeter $24$ cm, so $2x+2y=24$. This links the two dimensions.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Make y the subject",
          "workingLatex": "y = 12 - x",
          "explanation": "Dividing by $2$ gives $x+y=12$, so $y=12-x$. Using the constraint this way lets us write the area with a single variable.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the area as a function of x",
          "workingLatex": "A = x(12 - x) = 12x - x^{2}",
          "explanation": "The area is $A=xy$. Substituting $y=12-x$ gives a quadratic in $x$ that we can differentiate to find the greatest area.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Differentiate the area",
          "workingLatex": "\\frac{dA}{dx} = 12 - 2x",
          "explanation": "The derivative measures how the area changes with $x$; the maximum occurs where this gradient is zero.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set the derivative to zero and solve",
          "workingLatex": "12 - 2x = 0 \\implies x = 6",
          "explanation": "Solving $\\frac{dA}{dx}=0$ gives $x=6$ cm at the stationary point.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Confirm it is a maximum",
          "workingLatex": "\\frac{d^2A}{dx^2} = -2 < 0",
          "explanation": "The negative second derivative shows the curve is concave down, so $x=6$ gives the greatest area.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Show it is a square and state the area",
          "workingLatex": "y = 12 - 6 = 6, \\quad A = 6 \\times 6 = 36",
          "explanation": "Since $x=y=6$ cm, the rectangle of greatest area is a square, as required. Its area is $36$ square centimetres.",
          "diagram": null
        }
      ],
      "finalAnswer": "The area is greatest when $x=y=6\\,\\text{cm}$, so the rectangle is a square, giving a greatest area of $36\\,\\text{cm}^2$."
    }
  },
  {
    "id": "al.y1.pure.optimisation.q023",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Optimisation",
    "subtopicId": "al.y1.pure.optimisation",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "optimisation",
      "open-box",
      "maximum-volume",
      "second-derivative"
    ],
    "questionText": "A rectangular sheet of metal measures 8 cm by 5 cm. Equal squares of side $x$ cm are cut from each corner, and the sides are folded up to make an open box. The volume is $V = x(8-2x)(5-2x)$. Find the value of $x$ that maximises the volume, and state this maximum volume.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Understand the volume expression",
          "workingLatex": "V = x(8-2x)(5-2x)",
          "explanation": "Cutting a square of side $x$ from each corner leaves a base measuring $(8-2x)$ by $(5-2x)$, and the folded-up flaps give a height of $x$. Volume is base area times height, so $V = x(8-2x)(5-2x)$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the valid domain",
          "workingLatex": "0 < x < 2.5",
          "explanation": "Every length must stay positive. The shorter side is the tighter limit: $5-2x>0$ gives $x<2.5$, and $x>0$ because we must cut a real square. So only $0<x<2.5$ is physically possible.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand the two brackets",
          "workingLatex": "(8-2x)(5-2x) = 40 - 26x + 4x^{2}",
          "explanation": "Multiplying out: $8\\times5=40$, the $x$ terms $-16x-10x=-26x$, and $(-2x)(-2x)=4x^{2}$. Expanding first makes the differentiation that follows straightforward.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the volume as a cubic",
          "workingLatex": "V = 4x^{3} - 26x^{2} + 40x",
          "explanation": "Multiplying every term inside by the outer $x$ turns the product into a single polynomial, which can be differentiated term by term.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Differentiate the volume",
          "workingLatex": "\\frac{dV}{dx} = 12x^{2} - 52x + 40",
          "explanation": "Applying the power rule to each term gives the rate at which volume changes with $x$. At a turning point this rate is momentarily zero.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Set the derivative to zero",
          "workingLatex": "12x^{2} - 52x + 40 = 0 \\;\\Rightarrow\\; 3x^{2} - 13x + 10 = 0",
          "explanation": "Stationary points occur where the gradient is zero. Dividing through by the common factor $4$ keeps the numbers small and easier to factorise.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve the quadratic",
          "workingLatex": "(3x-10)(x-1)=0 \\;\\Rightarrow\\; x = \\tfrac{10}{3} \\text{ or } x = 1",
          "explanation": "Factorising gives the two candidate values of $x$ where the volume could turn.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Reject the invalid root",
          "workingLatex": "\\tfrac{10}{3} \\approx 3.33 \\notin (0, 2.5) \\;\\Rightarrow\\; x = 1",
          "explanation": "The root $x=\\tfrac{10}{3}$ lies outside the domain; it would need a corner larger than half the short side, collapsing the box. Only $x=1$ is physically valid.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the second derivative",
          "workingLatex": "\\frac{d^{2}V}{dx^{2}} = 24x - 52",
          "explanation": "Differentiating again lets us test the nature of the stationary point by checking the concavity of the curve there.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Confirm it is a maximum",
          "workingLatex": "\\left.\\frac{d^{2}V}{dx^{2}}\\right|_{x=1} = 24(1) - 52 = -28 < 0",
          "explanation": "A negative second derivative means the curve is concave down at $x=1$, so this stationary point is a maximum: the volume is at its greatest here.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Calculate the maximum volume",
          "workingLatex": "V = 1(8-2)(5-2) = 1 \\times 6 \\times 3 = 18",
          "explanation": "Substituting $x=1$ back into the original volume gives the largest box volume the sheet can produce.",
          "diagram": null
        }
      ],
      "finalAnswer": "The volume is maximised when $x = 1$ cm, giving a maximum volume of $18\\text{ cm}^{3}$."
    }
  },
  {
    "id": "al.y1.pure.optimisation.q024",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Optimisation",
    "subtopicId": "al.y1.pure.optimisation",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "optimisation",
      "open-box",
      "maximum-volume",
      "second-derivative"
    ],
    "questionText": "A square sheet of card measures 12 cm by 12 cm. Equal squares of side $x$ cm are cut from each corner, and the sides are folded up to form an open box. Find the value of $x$ that gives the maximum volume, and state this maximum volume.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the volume expression",
          "workingLatex": "V = x(12-2x)^{2}",
          "explanation": "Removing a square of side $x$ from each corner of the square sheet leaves a square base of side $(12-2x)$, and the flaps give a height of $x$. Since the base is square the two factors are equal, so $V = x(12-2x)^{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the valid domain",
          "workingLatex": "0 < x < 6",
          "explanation": "The base length $12-2x$ must be positive, giving $x<6$, and $x>0$ for a real cut. So $0<x<6$ is the physically sensible range.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand the squared bracket",
          "workingLatex": "(12-2x)^{2} = 144 - 48x + 4x^{2}",
          "explanation": "Squaring the bracket: $12^{2}=144$, the cross terms $2\\times12\\times(-2x)=-48x$, and $(-2x)^{2}=4x^{2}$. Expanding prepares the expression for differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the volume as a cubic",
          "workingLatex": "V = 4x^{3} - 48x^{2} + 144x",
          "explanation": "Multiplying each term by the outer $x$ gives a single polynomial in $x$ that is easy to differentiate.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Differentiate the volume",
          "workingLatex": "\\frac{dV}{dx} = 12x^{2} - 96x + 144",
          "explanation": "The power rule on each term gives the gradient of the volume curve, which is zero at a turning point.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Set the derivative to zero",
          "workingLatex": "12x^{2} - 96x + 144 = 0 \\;\\Rightarrow\\; x^{2} - 8x + 12 = 0",
          "explanation": "Stationary points need a zero gradient. Dividing through by $12$ simplifies the quadratic before factorising.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve the quadratic",
          "workingLatex": "(x-2)(x-6) = 0 \\;\\Rightarrow\\; x = 2 \\text{ or } x = 6",
          "explanation": "Factorising gives the two candidate values of $x$ at which the volume could turn.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Reject the invalid root",
          "workingLatex": "x = 6 \\notin (0,6) \\;\\Rightarrow\\; x = 2",
          "explanation": "At $x=6$ the base length $12-2x$ would be zero, so the box has no base and no volume. This root lies on the boundary and is rejected, leaving $x=2$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the second derivative",
          "workingLatex": "\\frac{d^{2}V}{dx^{2}} = 24x - 96",
          "explanation": "Differentiating again allows a check of whether $x=2$ gives a maximum or a minimum by testing the concavity there.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Confirm it is a maximum",
          "workingLatex": "\\left.\\frac{d^{2}V}{dx^{2}}\\right|_{x=2} = 24(2) - 96 = -48 < 0",
          "explanation": "The negative second derivative shows the curve is concave down at $x=2$, confirming a maximum.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Calculate the maximum volume",
          "workingLatex": "V = 2(12-4)^{2} = 2 \\times 64 = 128",
          "explanation": "Substituting $x=2$ into the original volume gives the greatest volume achievable from the sheet.",
          "diagram": null
        }
      ],
      "finalAnswer": "The volume is maximised when $x = 2$ cm, giving a maximum volume of $128\\text{ cm}^{3}$."
    }
  },
  {
    "id": "al.y1.pure.optimisation.q025",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Optimisation",
    "subtopicId": "al.y1.pure.optimisation",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "optimisation",
      "open-box",
      "maximum-volume",
      "second-derivative"
    ],
    "questionText": "A rectangular sheet of cardboard measures 16 cm by 10 cm. Equal squares of side $x$ cm are removed from the corners and the sides folded up to form an open box. Find the value of $x$ that maximises the volume, and state this maximum volume.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the volume expression",
          "workingLatex": "V = x(16-2x)(10-2x)",
          "explanation": "Each corner square of side $x$ removes $x$ from both ends of a side, so the base is $(16-2x)$ by $(10-2x)$, with height $x$. Volume is base area times height.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the valid domain",
          "workingLatex": "0 < x < 5",
          "explanation": "The shorter side controls the limit: $10-2x>0$ gives $x<5$, together with $x>0$. So only $0<x<5$ describes a real box.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand the two brackets",
          "workingLatex": "(16-2x)(10-2x) = 160 - 52x + 4x^{2}",
          "explanation": "Multiplying out: $16\\times10=160$, the $x$ terms $-32x-20x=-52x$, and $(-2x)(-2x)=4x^{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the volume as a cubic",
          "workingLatex": "V = 4x^{3} - 52x^{2} + 160x",
          "explanation": "Multiplying through by the outer $x$ gives a polynomial ready to differentiate.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Differentiate the volume",
          "workingLatex": "\\frac{dV}{dx} = 12x^{2} - 104x + 160",
          "explanation": "Differentiating term by term gives the gradient of the volume, which vanishes at a stationary point.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Set the derivative to zero",
          "workingLatex": "12x^{2} - 104x + 160 = 0 \\;\\Rightarrow\\; 3x^{2} - 26x + 40 = 0",
          "explanation": "The gradient is zero at a turning point. Dividing by the common factor $4$ makes the quadratic simpler to factorise.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve the quadratic",
          "workingLatex": "(3x-20)(x-2) = 0 \\;\\Rightarrow\\; x = \\tfrac{20}{3} \\text{ or } x = 2",
          "explanation": "Factorising yields the two candidate stationary values.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Reject the invalid root",
          "workingLatex": "\\tfrac{20}{3} \\approx 6.67 \\notin (0,5) \\;\\Rightarrow\\; x = 2",
          "explanation": "The value $x=\\tfrac{20}{3}$ exceeds the domain limit of $5$, so it cannot form a box. Only $x=2$ is valid.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the second derivative",
          "workingLatex": "\\frac{d^{2}V}{dx^{2}} = 24x - 104",
          "explanation": "The second derivative classifies the stationary point through the sign of the concavity.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Confirm it is a maximum",
          "workingLatex": "\\left.\\frac{d^{2}V}{dx^{2}}\\right|_{x=2} = 24(2) - 104 = -56 < 0",
          "explanation": "Being negative, the second derivative shows a concave-down curve at $x=2$, so this is a maximum.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Calculate the maximum volume",
          "workingLatex": "V = 2(16-4)(10-4) = 2 \\times 12 \\times 6 = 144",
          "explanation": "Substituting $x=2$ back gives the largest possible volume for this sheet.",
          "diagram": null
        }
      ],
      "finalAnswer": "The volume is maximised when $x = 2$ cm, giving a maximum volume of $144\\text{ cm}^{3}$."
    }
  },
  {
    "id": "al.y1.pure.optimisation.q026",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Optimisation",
    "subtopicId": "al.y1.pure.optimisation",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "optimisation",
      "open-box",
      "maximum-volume",
      "second-derivative"
    ],
    "questionText": "A rectangular metal sheet measures 21 cm by 16 cm. Equal squares of side $x$ cm are cut from each corner and the sides folded up to make an open box. Find the value of $x$ that maximises the volume, and state this maximum volume.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the volume expression",
          "workingLatex": "V = x(21-2x)(16-2x)",
          "explanation": "Cutting a corner square of side $x$ shortens each side by $2x$, so the base is $(21-2x)$ by $(16-2x)$ and the height is $x$. Volume is base area times height.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the valid domain",
          "workingLatex": "0 < x < 8",
          "explanation": "The shorter side gives the binding constraint: $16-2x>0$ means $x<8$, with $x>0$. Hence $0<x<8$ for a genuine box.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand the two brackets",
          "workingLatex": "(21-2x)(16-2x) = 336 - 74x + 4x^{2}",
          "explanation": "Multiplying out: $21\\times16=336$, the $x$ terms $-42x-32x=-74x$, and $(-2x)(-2x)=4x^{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the volume as a cubic",
          "workingLatex": "V = 4x^{3} - 74x^{2} + 336x",
          "explanation": "Distributing the outer $x$ across the expansion gives a single polynomial to differentiate.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Differentiate the volume",
          "workingLatex": "\\frac{dV}{dx} = 12x^{2} - 148x + 336",
          "explanation": "The power rule gives the gradient of the volume, which is zero at any turning point.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Set the derivative to zero",
          "workingLatex": "12x^{2} - 148x + 336 = 0 \\;\\Rightarrow\\; 3x^{2} - 37x + 84 = 0",
          "explanation": "Setting the gradient to zero locates the stationary points. Dividing by $4$ simplifies the quadratic.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve the quadratic",
          "workingLatex": "(3x-28)(x-3) = 0 \\;\\Rightarrow\\; x = \\tfrac{28}{3} \\text{ or } x = 3",
          "explanation": "Factorising gives the two candidate values of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Reject the invalid root",
          "workingLatex": "\\tfrac{28}{3} \\approx 9.33 \\notin (0,8) \\;\\Rightarrow\\; x = 3",
          "explanation": "The root $x=\\tfrac{28}{3}$ is larger than the domain limit of $8$, so it is impossible. Only $x=3$ is valid.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the second derivative",
          "workingLatex": "\\frac{d^{2}V}{dx^{2}} = 24x - 148",
          "explanation": "Differentiating a second time tests the nature of the stationary point via its concavity.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Confirm it is a maximum",
          "workingLatex": "\\left.\\frac{d^{2}V}{dx^{2}}\\right|_{x=3} = 24(3) - 148 = -76 < 0",
          "explanation": "The second derivative is negative, so the curve is concave down at $x=3$: this is a maximum.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Calculate the maximum volume",
          "workingLatex": "V = 3(21-6)(16-6) = 3 \\times 15 \\times 10 = 450",
          "explanation": "Substituting $x=3$ into the original expression gives the maximum possible volume.",
          "diagram": null
        }
      ],
      "finalAnswer": "The volume is maximised when $x = 3$ cm, giving a maximum volume of $450\\text{ cm}^{3}$."
    }
  },
  {
    "id": "al.y1.pure.optimisation.q027",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Optimisation",
    "subtopicId": "al.y1.pure.optimisation",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "optimisation",
      "open-box",
      "maximum-volume",
      "second-derivative"
    ],
    "questionText": "A rectangular sheet of tin plate measures 32 cm by 20 cm. Equal squares of side $x$ cm are cut from the corners and the sides folded up to form an open box. Find the value of $x$ that maximises the volume, and state this maximum volume.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the volume expression",
          "workingLatex": "V = x(32-2x)(20-2x)",
          "explanation": "Removing a corner square of side $x$ takes $2x$ off each dimension, so the base is $(32-2x)$ by $(20-2x)$ with height $x$. Volume is base area times height.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the valid domain",
          "workingLatex": "0 < x < 10",
          "explanation": "The shorter side gives the constraint: $20-2x>0$ means $x<10$, with $x>0$. So $0<x<10$ for a real box.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand the two brackets",
          "workingLatex": "(32-2x)(20-2x) = 640 - 104x + 4x^{2}",
          "explanation": "Multiplying out: $32\\times20=640$, the $x$ terms $-64x-40x=-104x$, and $(-2x)(-2x)=4x^{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the volume as a cubic",
          "workingLatex": "V = 4x^{3} - 104x^{2} + 640x",
          "explanation": "Multiplying the expansion by the outer $x$ produces one polynomial to differentiate.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Differentiate the volume",
          "workingLatex": "\\frac{dV}{dx} = 12x^{2} - 208x + 640",
          "explanation": "Differentiating each term gives the gradient of the volume, which is zero at a turning point.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Set the derivative to zero",
          "workingLatex": "12x^{2} - 208x + 640 = 0 \\;\\Rightarrow\\; 3x^{2} - 52x + 160 = 0",
          "explanation": "The stationary points satisfy a zero gradient. Dividing by $4$ keeps the coefficients manageable.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve the quadratic",
          "workingLatex": "(3x-40)(x-4) = 0 \\;\\Rightarrow\\; x = \\tfrac{40}{3} \\text{ or } x = 4",
          "explanation": "Factorising provides the two candidate values of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Reject the invalid root",
          "workingLatex": "\\tfrac{40}{3} \\approx 13.33 \\notin (0,10) \\;\\Rightarrow\\; x = 4",
          "explanation": "The value $x=\\tfrac{40}{3}$ is beyond the domain limit of $10$, so it cannot be built. Only $x=4$ is valid.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the second derivative",
          "workingLatex": "\\frac{d^{2}V}{dx^{2}} = 24x - 208",
          "explanation": "The second derivative classifies the stationary point by the sign of the concavity there.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Confirm it is a maximum",
          "workingLatex": "\\left.\\frac{d^{2}V}{dx^{2}}\\right|_{x=4} = 24(4) - 208 = -112 < 0",
          "explanation": "The second derivative is negative, so the curve is concave down at $x=4$, confirming a maximum.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Calculate the maximum volume",
          "workingLatex": "V = 4(32-8)(20-8) = 4 \\times 24 \\times 12 = 1152",
          "explanation": "Substituting $x=4$ gives the greatest volume the sheet can form.",
          "diagram": null
        }
      ],
      "finalAnswer": "The volume is maximised when $x = 4$ cm, giving a maximum volume of $1152\\text{ cm}^{3}$."
    }
  },
  {
    "id": "al.y1.pure.optimisation.q028",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Optimisation",
    "subtopicId": "al.y1.pure.optimisation",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "optimisation",
      "maximum-area",
      "fencing",
      "second-derivative"
    ],
    "questionText": "A rectangular enclosure is built against a long straight wall, so fencing is needed on only three sides. There is 60 m of fencing available. The two sides perpendicular to the wall each have length $x$ m and the side parallel to the wall has length $y$ m. Find the value of $x$ that maximises the enclosed area, and state this maximum area.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the constraint equation",
          "workingLatex": "2x + y = 60",
          "explanation": "The wall replaces one long side, so the fencing covers the two $x$ sides and the single $y$ side. Their total length is the fixed $60$ m available.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the quantity to maximise",
          "workingLatex": "A = xy",
          "explanation": "The area of a rectangle is length times width. This is the quantity we want to make as large as possible.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use the constraint to eliminate y",
          "workingLatex": "y = 60 - 2x",
          "explanation": "Rearranging the constraint gives $y$ in terms of $x$. Substituting this lets the area depend on a single variable, which is what differentiation needs.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the area in terms of x",
          "workingLatex": "A = x(60 - 2x) = 60x - 2x^{2}",
          "explanation": "Replacing $y$ with $60-2x$ and expanding gives the area as a function of $x$ alone.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the valid domain",
          "workingLatex": "0 < x < 30",
          "explanation": "Both dimensions must be positive: $x>0$ and $y=60-2x>0$ gives $x<30$. So $0<x<30$ is the sensible range.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Differentiate the area",
          "workingLatex": "\\frac{dA}{dx} = 60 - 4x",
          "explanation": "Differentiating gives the rate of change of area with $x$; at the maximum this rate is zero.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Set the derivative to zero",
          "workingLatex": "60 - 4x = 0 \\;\\Rightarrow\\; x = 15",
          "explanation": "Solving $\\frac{dA}{dx}=0$ locates the stationary value of $x$, which lies inside the domain.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find the second derivative",
          "workingLatex": "\\frac{d^{2}A}{dx^{2}} = -4",
          "explanation": "Differentiating again gives a constant, whose sign tells us the type of stationary point.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Confirm it is a maximum",
          "workingLatex": "\\frac{d^{2}A}{dx^{2}} = -4 < 0",
          "explanation": "The second derivative is negative everywhere, so the curve is concave down and $x=15$ gives a maximum area.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Find the dimensions and area",
          "workingLatex": "y = 60 - 2(15) = 30, \\quad A = 15 \\times 30 = 450",
          "explanation": "Substituting $x=15$ gives $y=30$ and the maximum enclosed area.",
          "diagram": null
        }
      ],
      "finalAnswer": "The area is maximised when $x = 15$ m (so $y = 30$ m), giving a maximum area of $450\\text{ m}^{2}$."
    }
  },
  {
    "id": "al.y1.pure.optimisation.q029",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Optimisation",
    "subtopicId": "al.y1.pure.optimisation",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "optimisation",
      "minimum-perimeter",
      "fixed-area",
      "second-derivative"
    ],
    "questionText": "A rectangular field of area 400 m$^{2}$ is to be enclosed by fencing. The sides have lengths $x$ m and $y$ m. Find the dimensions that minimise the total length of fencing, and state this minimum length.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the constraint equation",
          "workingLatex": "xy = 400",
          "explanation": "The area is fixed at $400\\text{ m}^{2}$, so the product of the two sides is constant. This is the constraint linking $x$ and $y$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the quantity to minimise",
          "workingLatex": "P = 2x + 2y",
          "explanation": "The total fencing is the perimeter of the rectangle. This is the quantity we want to make as small as possible.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use the constraint to eliminate y",
          "workingLatex": "y = \\frac{400}{x}",
          "explanation": "Rearranging the fixed-area equation gives $y$ in terms of $x$, so the perimeter can be written using only one variable.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the perimeter in terms of x",
          "workingLatex": "P = 2x + \\frac{800}{x} = 2x + 800x^{-1}",
          "explanation": "Substituting $y=\\frac{400}{x}$ gives $2y=\\frac{800}{x}$. Writing the fraction as $800x^{-1}$ prepares it for the power rule.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the valid domain",
          "workingLatex": "x > 0",
          "explanation": "A side length must be positive, and any $x>0$ gives a valid positive $y$, so the domain is $x>0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Differentiate the perimeter",
          "workingLatex": "\\frac{dP}{dx} = 2 - 800x^{-2} = 2 - \\frac{800}{x^{2}}",
          "explanation": "Differentiating term by term gives the gradient of the perimeter, which is zero at the minimum.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Set the derivative to zero and solve",
          "workingLatex": "2 - \\frac{800}{x^{2}} = 0 \\;\\Rightarrow\\; x^{2} = 400 \\;\\Rightarrow\\; x = 20",
          "explanation": "Solving gives $x^{2}=400$, so $x=20$. The negative root $x=-20$ is rejected because a length cannot be negative.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find the second derivative",
          "workingLatex": "\\frac{d^{2}P}{dx^{2}} = 1600x^{-3} = \\frac{1600}{x^{3}}",
          "explanation": "Differentiating again gives the concavity, whose sign classifies the stationary point.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Confirm it is a minimum",
          "workingLatex": "\\left.\\frac{d^{2}P}{dx^{2}}\\right|_{x=20} = \\frac{1600}{8000} = 0.2 > 0",
          "explanation": "The second derivative is positive at $x=20$, so the curve is concave up and this stationary point is a minimum.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Find the dimensions and perimeter",
          "workingLatex": "y = \\frac{400}{20} = 20, \\quad P = 2(20) + 2(20) = 80",
          "explanation": "Substituting $x=20$ gives $y=20$ (a square) and the least fencing required.",
          "diagram": null
        }
      ],
      "finalAnswer": "The fencing is minimised when the field is $20$ m by $20$ m (a square), needing a minimum of $80$ m of fencing."
    }
  },
  {
    "id": "al.y1.pure.optimisation.q030",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Optimisation",
    "subtopicId": "al.y1.pure.optimisation",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "optimisation",
      "minimum-surface-area",
      "volume-constraint",
      "second-derivative"
    ],
    "questionText": "An open-topped tank has a square base of side $x$ m and a height of $h$ m. It must hold 32 m$^{3}$ of water. Find the value of $x$ that minimises the surface area of metal used, and state this minimum surface area.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the volume constraint",
          "workingLatex": "x^{2}h = 32",
          "explanation": "The tank holds a fixed $32\\text{ m}^{3}$. Its volume is the square base area $x^{2}$ times the height $h$, giving the constraint linking $x$ and $h$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the quantity to minimise",
          "workingLatex": "A = x^{2} + 4xh",
          "explanation": "With no top, the metal covers the square base ($x^{2}$) and the four rectangular sides (each $x\\times h$), so $A = x^{2} + 4xh$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use the constraint to eliminate h",
          "workingLatex": "h = \\frac{32}{x^{2}}",
          "explanation": "Rearranging the volume equation gives $h$ in terms of $x$, so the surface area can be written using a single variable.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the area in terms of x",
          "workingLatex": "A = x^{2} + 4x\\cdot\\frac{32}{x^{2}} = x^{2} + \\frac{128}{x}",
          "explanation": "Substituting $h=\\frac{32}{x^{2}}$ into the side term $4xh$ gives $\\frac{128}{x}$, leaving the area as a function of $x$ only.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rewrite ready to differentiate",
          "workingLatex": "A = x^{2} + 128x^{-1}, \\quad x > 0",
          "explanation": "Writing $\\frac{128}{x}$ as $128x^{-1}$ lets the power rule be applied. A length must be positive, so the domain is $x>0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Differentiate the area",
          "workingLatex": "\\frac{dA}{dx} = 2x - 128x^{-2} = 2x - \\frac{128}{x^{2}}",
          "explanation": "Differentiating each term gives the gradient of the surface area, which is zero at the minimum.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Set the derivative to zero and solve",
          "workingLatex": "2x = \\frac{128}{x^{2}} \\;\\Rightarrow\\; x^{3} = 64 \\;\\Rightarrow\\; x = 4",
          "explanation": "Setting the gradient to zero and multiplying through by $x^{2}$ gives $x^{3}=64$, so $x=4$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find the second derivative",
          "workingLatex": "\\frac{d^{2}A}{dx^{2}} = 2 + 256x^{-3} = 2 + \\frac{256}{x^{3}}",
          "explanation": "Differentiating again gives the concavity, whose sign at $x=4$ classifies the stationary point.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Confirm it is a minimum",
          "workingLatex": "\\left.\\frac{d^{2}A}{dx^{2}}\\right|_{x=4} = 2 + \\frac{256}{64} = 6 > 0",
          "explanation": "The second derivative is positive at $x=4$, so the curve is concave up and this is a minimum surface area.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Find the height and surface area",
          "workingLatex": "h = \\frac{32}{16} = 2, \\quad A = 16 + \\frac{128}{4} = 48",
          "explanation": "Substituting $x=4$ gives height $h=2$ m and the minimum area of metal needed.",
          "diagram": null
        }
      ],
      "finalAnswer": "The surface area is minimised when $x = 4$ m (height $h = 2$ m), giving a minimum surface area of $48\\text{ m}^{2}$."
    }
  },
  {
    "id": "al.y1.pure.optimisation.q031",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Optimisation",
    "subtopicId": "al.y1.pure.optimisation",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "optimisation",
      "minimum-surface-area",
      "show-that",
      "second-derivative"
    ],
    "questionText": "A closed box has a square base of side $x$ cm, height $h$ cm, and a volume of 216 cm$^{3}$. Show that the surface area is minimised when the box is a cube, and find this minimum surface area.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the volume constraint",
          "workingLatex": "x^{2}h = 216",
          "explanation": "The volume is fixed at $216\\text{ cm}^{3}$, equal to the square base area $x^{2}$ times the height $h$. This links $x$ and $h$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the quantity to minimise",
          "workingLatex": "A = 2x^{2} + 4xh",
          "explanation": "A closed box has two square faces (top and base, $2x^{2}$) and four rectangular sides (each $x\\times h$), so the total surface area is $A = 2x^{2} + 4xh$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use the constraint to eliminate h",
          "workingLatex": "h = \\frac{216}{x^{2}}",
          "explanation": "Rearranging the volume equation gives $h$ in terms of $x$, so the surface area depends on a single variable.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the area in terms of x",
          "workingLatex": "A = 2x^{2} + \\frac{864}{x} = 2x^{2} + 864x^{-1}, \\quad x > 0",
          "explanation": "Substituting $h=\\frac{216}{x^{2}}$ into $4xh$ gives $\\frac{864}{x}$. Writing it as $864x^{-1}$ prepares for differentiation, with $x>0$ since a side is positive.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Differentiate the area",
          "workingLatex": "\\frac{dA}{dx} = 4x - 864x^{-2} = 4x - \\frac{864}{x^{2}}",
          "explanation": "Differentiating term by term gives the gradient of the surface area, which is zero at the minimum.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Set the derivative to zero and solve",
          "workingLatex": "4x = \\frac{864}{x^{2}} \\;\\Rightarrow\\; x^{3} = 216 \\;\\Rightarrow\\; x = 6",
          "explanation": "Setting the gradient to zero and multiplying by $x^{2}$ gives $x^{3}=216$, so $x=6$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Show the box is a cube",
          "workingLatex": "h = \\frac{216}{6^{2}} = \\frac{216}{36} = 6 = x",
          "explanation": "Substituting $x=6$ back gives $h=6$, which equals $x$. Since base and height are equal, the box is a cube, as required.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find the second derivative",
          "workingLatex": "\\frac{d^{2}A}{dx^{2}} = 4 + 1728x^{-3} = 4 + \\frac{1728}{x^{3}}",
          "explanation": "Differentiating again gives the concavity, whose sign at $x=6$ confirms the type of stationary point.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Confirm it is a minimum",
          "workingLatex": "\\left.\\frac{d^{2}A}{dx^{2}}\\right|_{x=6} = 4 + \\frac{1728}{216} = 12 > 0",
          "explanation": "The second derivative is positive at $x=6$, so the curve is concave up and the surface area is a minimum.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Find the minimum surface area",
          "workingLatex": "A = 2(6)^{2} + \\frac{864}{6} = 72 + 144 = 216",
          "explanation": "Substituting $x=6$ gives the least surface area for the required volume.",
          "diagram": null
        }
      ],
      "finalAnswer": "The surface area is minimised when $x = h = 6$ cm, i.e. the box is a $6\\times6\\times6$ cube, giving a minimum surface area of $216\\text{ cm}^{2}$."
    }
  },
  {
    "id": "al.y1.pure.optimisation.q032",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Optimisation",
    "subtopicId": "al.y1.pure.optimisation",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "optimisation",
      "minimum-surface-area",
      "volume-constraint",
      "second-derivative"
    ],
    "questionText": "An open-topped box has a rectangular base whose length is twice its width. The width is $x$ m, the height is $h$ m, and the box must hold 36 m$^{3}$. Find the value of $x$ that minimises the area of material used, and state this minimum area.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the volume constraint",
          "workingLatex": "(2x)(x)(h) = 2x^{2}h = 36",
          "explanation": "The length is twice the width, so length $=2x$ and width $=x$. Volume is length times width times height, which is fixed at $36\\text{ m}^{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the quantity to minimise",
          "workingLatex": "A = 2x^{2} + 6xh",
          "explanation": "With no lid, the material is the base ($2x\\times x = 2x^{2}$) plus four sides: two of area $2x\\times h$ and two of area $x\\times h$, giving side area $4xh+2xh=6xh$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use the constraint to eliminate h",
          "workingLatex": "h = \\frac{36}{2x^{2}} = \\frac{18}{x^{2}}",
          "explanation": "Rearranging the volume equation gives $h$ in terms of $x$, so the area can be written with one variable.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the area in terms of x",
          "workingLatex": "A = 2x^{2} + 6x\\cdot\\frac{18}{x^{2}} = 2x^{2} + \\frac{108}{x}",
          "explanation": "Substituting $h=\\frac{18}{x^{2}}$ into the side term $6xh$ gives $\\frac{108}{x}$, leaving the area in terms of $x$ only.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rewrite ready to differentiate",
          "workingLatex": "A = 2x^{2} + 108x^{-1}, \\quad x > 0",
          "explanation": "Writing $\\frac{108}{x}$ as $108x^{-1}$ allows the power rule. The width must be positive, so $x>0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Differentiate the area",
          "workingLatex": "\\frac{dA}{dx} = 4x - 108x^{-2} = 4x - \\frac{108}{x^{2}}",
          "explanation": "Differentiating term by term gives the gradient of the material area, which is zero at the minimum.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Set the derivative to zero and solve",
          "workingLatex": "4x = \\frac{108}{x^{2}} \\;\\Rightarrow\\; x^{3} = 27 \\;\\Rightarrow\\; x = 3",
          "explanation": "Setting the gradient to zero and multiplying by $x^{2}$ gives $x^{3}=27$, so $x=3$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find the second derivative",
          "workingLatex": "\\frac{d^{2}A}{dx^{2}} = 4 + 216x^{-3} = 4 + \\frac{216}{x^{3}}",
          "explanation": "Differentiating again gives the concavity, whose sign at $x=3$ classifies the stationary point.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Confirm it is a minimum",
          "workingLatex": "\\left.\\frac{d^{2}A}{dx^{2}}\\right|_{x=3} = 4 + \\frac{216}{27} = 12 > 0",
          "explanation": "The second derivative is positive at $x=3$, so the curve is concave up and this gives a minimum area.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Find the dimensions and area",
          "workingLatex": "\\text{length} = 6, \\; h = \\frac{18}{9} = 2, \\quad A = 2(9) + \\frac{108}{3} = 54",
          "explanation": "Substituting $x=3$ gives length $6$ m, height $2$ m, and the least material required.",
          "diagram": null
        }
      ],
      "finalAnswer": "The material is minimised when the width $x = 3$ m (length $6$ m, height $2$ m), giving a minimum area of $54\\text{ m}^{2}$."
    }
  },
  {
    "id": "al.y1.pure.optimisation.q033",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Optimisation",
    "subtopicId": "al.y1.pure.optimisation",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "optimisation",
      "cylinder",
      "surface-area",
      "calculus"
    ],
    "questionText": "A closed cylindrical can has a volume of $500\\text{ cm}^3$. Its radius is $r\\text{ cm}$ and its height is $h\\text{ cm}$. Find the value of $r$ that minimises the total surface area of the can, and hence find the minimum surface area.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the volume constraint",
          "workingLatex": "V = \\pi r^2 h = 500",
          "explanation": "The can is a cylinder, so its volume is $\\pi r^2 h$. We are told this fixed volume is $500\\text{ cm}^3$, which gives a constraint linking $r$ and $h$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Make h the subject",
          "workingLatex": "h = \\frac{500}{\\pi r^2}",
          "explanation": "The surface area involves both $r$ and $h$, but we can only differentiate with respect to one variable. Rearranging the constraint lets us replace $h$ in terms of $r$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the total surface area",
          "workingLatex": "A = 2\\pi r^2 + 2\\pi r h",
          "explanation": "A closed can has two circular ends, each of area $\\pi r^2$, plus a curved side that unrolls into a rectangle of area $2\\pi r h$. Adding these gives the metal used.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute to get area in terms of r only",
          "workingLatex": "A = 2\\pi r^2 + 2\\pi r\\cdot\\frac{500}{\\pi r^2} = 2\\pi r^2 + \\frac{1000}{r}",
          "explanation": "Replacing $h$ using the constraint turns $A$ into a function of the single variable $r$. The $\\pi$ cancels neatly, leaving a clean expression to differentiate.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rewrite ready to differentiate",
          "workingLatex": "A = 2\\pi r^2 + 1000 r^{-1}",
          "explanation": "Writing $\\frac{1000}{r}$ as $1000r^{-1}$ lets us use the power rule on every term, which is the easiest way to differentiate.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Differentiate with respect to r",
          "workingLatex": "\\frac{dA}{dr} = 4\\pi r - \\frac{1000}{r^2}",
          "explanation": "This gives the rate at which the surface area changes as the radius grows. At the best radius this rate is momentarily zero.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Set the derivative to zero",
          "workingLatex": "4\\pi r - \\frac{1000}{r^2} = 0 \\;\\Rightarrow\\; 4\\pi r = \\frac{1000}{r^2}",
          "explanation": "A minimum occurs where the surface area stops decreasing and starts increasing, so the gradient is zero. Setting $\\frac{dA}{dr}=0$ locates that stationary point.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for r",
          "workingLatex": "4\\pi r^3 = 1000 \\;\\Rightarrow\\; r^3 = \\frac{250}{\\pi} \\;\\Rightarrow\\; r = \\sqrt[3]{\\frac{250}{\\pi}} \\approx 4.30",
          "explanation": "Multiplying through by $r^2$ clears the fraction, and the cube root gives the radius. We keep only the positive root because a radius must be a positive length.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Confirm it is a minimum",
          "workingLatex": "\\frac{d^2A}{dr^2} = 4\\pi + \\frac{2000}{r^3} > 0",
          "explanation": "The second derivative is positive for every positive $r$, so the curve bends upwards and the stationary point is a minimum — exactly the least surface area we want.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Find the height",
          "workingLatex": "h = \\frac{500}{\\pi (4.301)^2} \\approx 8.60",
          "explanation": "Substituting the optimal radius into the constraint gives the matching height. Notice $h \\approx 2r$: a closed can uses least metal when its height equals its diameter.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Find the minimum surface area",
          "workingLatex": "A = 2\\pi(4.301)^2 + \\frac{1000}{4.301} \\approx 348.7",
          "explanation": "Putting the optimal radius into the area formula gives the smallest possible amount of metal, which is the value the question asks for.",
          "diagram": null
        }
      ],
      "finalAnswer": "The surface area is minimised when $r \\approx 4.30\\text{ cm}$, giving height $h \\approx 8.60\\text{ cm}$ (so $h = 2r$) and a minimum surface area of about $348.7\\text{ cm}^2$."
    }
  },
  {
    "id": "al.y1.pure.optimisation.q034",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Optimisation",
    "subtopicId": "al.y1.pure.optimisation",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "description",
    "tags": [
      "optimisation",
      "cylinder",
      "show-that",
      "surface-area"
    ],
    "questionText": "A closed cylinder has a fixed volume $V$. Its radius is $r$ and its height is $h$. Show that its total surface area is $A = 2\\pi r^2 + \\dfrac{2V}{r}$, and prove that this area is least when $h = 2r$ (the height equals the diameter).",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the volume constraint",
          "workingLatex": "V = \\pi r^2 h",
          "explanation": "The volume of a cylinder is base area times height. Because $V$ is fixed, this equation ties $h$ to $r$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Make h the subject",
          "workingLatex": "h = \\frac{V}{\\pi r^2}",
          "explanation": "We isolate $h$ so it can be removed from the surface-area formula, leaving everything in terms of $r$ alone.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the surface area",
          "workingLatex": "A = 2\\pi r^2 + 2\\pi r h",
          "explanation": "Two circular ends contribute $2\\pi r^2$ and the curved surface contributes $2\\pi r h$. Together they make the total area of material.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute to show the required form",
          "workingLatex": "A = 2\\pi r^2 + 2\\pi r\\cdot\\frac{V}{\\pi r^2} = 2\\pi r^2 + \\frac{2V}{r}",
          "explanation": "Substituting $h$ and cancelling $\\pi r$ produces the stated formula, now written as a function of $r$ only. This is the 'show that' result.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rewrite ready to differentiate",
          "workingLatex": "A = 2\\pi r^2 + 2V r^{-1}",
          "explanation": "Expressing $\\frac{2V}{r}$ as $2Vr^{-1}$ lets the power rule handle every term. Remember $V$ is a constant here.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Differentiate with respect to r",
          "workingLatex": "\\frac{dA}{dr} = 4\\pi r - \\frac{2V}{r^2}",
          "explanation": "This gives the gradient of the area curve. The minimum area sits where this gradient is zero.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Set the derivative to zero and solve",
          "workingLatex": "4\\pi r = \\frac{2V}{r^2} \\;\\Rightarrow\\; 4\\pi r^3 = 2V \\;\\Rightarrow\\; r^3 = \\frac{V}{2\\pi}",
          "explanation": "Setting $\\frac{dA}{dr}=0$ finds the stationary radius. Clearing the fraction leaves a simple equation for $r^3$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Confirm it is a minimum",
          "workingLatex": "\\frac{d^2A}{dr^2} = 4\\pi + \\frac{4V}{r^3} > 0",
          "explanation": "Since $V$ and $r$ are positive, the second derivative is positive, so the stationary point is a genuine minimum of the surface area.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Substitute back to compare h and r",
          "workingLatex": "h = \\frac{V}{\\pi r^2} = \\frac{2\\pi r^3}{\\pi r^2} = 2r",
          "explanation": "From $r^3 = \\frac{V}{2\\pi}$ we have $V = 2\\pi r^3$. Substituting into $h = \\frac{V}{\\pi r^2}$ makes the powers of $r$ cancel, leaving $h = 2r$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the conclusion",
          "workingLatex": "h = 2r \\quad(\\text{height} = \\text{diameter})",
          "explanation": "The minimum-surface-area cylinder has its height equal to twice the radius, i.e. equal to the diameter. This is the classic most-economical can shape.",
          "diagram": null
        }
      ],
      "finalAnswer": "$A = 2\\pi r^2 + \\dfrac{2V}{r}$, and the surface area is minimised when $h = 2r$; that is, when the height equals the diameter of the can."
    }
  },
  {
    "id": "al.y1.pure.optimisation.q035",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Optimisation",
    "subtopicId": "al.y1.pure.optimisation",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "optimisation",
      "cylinder",
      "open-top",
      "surface-area"
    ],
    "questionText": "An open-topped cylindrical water tank (no lid) is to hold $1000\\text{ cm}^3$. Its radius is $r\\text{ cm}$ and its height is $h\\text{ cm}$. Find the radius that minimises the surface area of metal used, and find this minimum area.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the volume constraint",
          "workingLatex": "V = \\pi r^2 h = 1000",
          "explanation": "The tank is a cylinder, so its volume is $\\pi r^2 h$. The fixed capacity of $1000\\text{ cm}^3$ gives a constraint between $r$ and $h$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Make h the subject",
          "workingLatex": "h = \\frac{1000}{\\pi r^2}",
          "explanation": "Isolating $h$ lets us later remove it from the area formula so that $A$ depends only on $r$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the surface area of an open tank",
          "workingLatex": "A = \\pi r^2 + 2\\pi r h",
          "explanation": "An open tank has just one circular base ($\\pi r^2$) and the curved side ($2\\pi r h$) — there is no lid, so we do not double the base.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute to get area in terms of r only",
          "workingLatex": "A = \\pi r^2 + 2\\pi r\\cdot\\frac{1000}{\\pi r^2} = \\pi r^2 + \\frac{2000}{r}",
          "explanation": "Replacing $h$ with the constraint turns $A$ into a function of $r$ alone, and the $\\pi r$ cancels neatly in the second term.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rewrite ready to differentiate",
          "workingLatex": "A = \\pi r^2 + 2000 r^{-1}",
          "explanation": "Writing $\\frac{2000}{r}$ as $2000r^{-1}$ lets the power rule apply to both terms.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Differentiate with respect to r",
          "workingLatex": "\\frac{dA}{dr} = 2\\pi r - \\frac{2000}{r^2}",
          "explanation": "This is the gradient of the area curve; the least metal is used where this gradient is zero.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Set the derivative to zero and solve",
          "workingLatex": "2\\pi r = \\frac{2000}{r^2} \\;\\Rightarrow\\; 2\\pi r^3 = 2000 \\;\\Rightarrow\\; r^3 = \\frac{1000}{\\pi} \\;\\Rightarrow\\; r = \\sqrt[3]{\\frac{1000}{\\pi}} \\approx 6.83",
          "explanation": "Setting $\\frac{dA}{dr}=0$ and clearing the fraction gives $r^3$, and the cube root gives the positive radius (a length must be positive).",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Confirm it is a minimum",
          "workingLatex": "\\frac{d^2A}{dr^2} = 2\\pi + \\frac{4000}{r^3} > 0",
          "explanation": "The second derivative is positive for every positive $r$, so the stationary point is a minimum — the surface area really is at its smallest.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the height",
          "workingLatex": "h = \\frac{1000}{\\pi (6.828)^2} \\approx 6.83",
          "explanation": "Substituting the optimal radius into the constraint gives the height. Here $h \\approx r$: an open tank uses least metal when its height equals its radius.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Find the minimum surface area",
          "workingLatex": "A = \\pi(6.828)^2 + \\frac{2000}{6.828} \\approx 439.4",
          "explanation": "Substituting the optimal radius into the area formula gives the least amount of metal needed to make the tank.",
          "diagram": null
        }
      ],
      "finalAnswer": "The surface area is minimised when $r \\approx 6.83\\text{ cm}$ (with $h \\approx 6.83\\text{ cm}$, so $h = r$), giving a minimum surface area of about $439.4\\text{ cm}^2$."
    }
  },
  {
    "id": "al.y1.pure.optimisation.q036",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Optimisation",
    "subtopicId": "al.y1.pure.optimisation",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "optimisation",
      "box",
      "surface-area",
      "calculus"
    ],
    "questionText": "A closed box has a square base of side $x\\text{ cm}$ and height $h\\text{ cm}$. Its volume is $2000\\text{ cm}^3$. Find the value of $x$ that minimises the total surface area, and find the minimum surface area.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the volume constraint",
          "workingLatex": "V = x^2 h = 2000",
          "explanation": "The box has a square base of side $x$ and height $h$, so its volume is $x^2 h$. This equals the fixed $2000\\text{ cm}^3$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Make h the subject",
          "workingLatex": "h = \\frac{2000}{x^2}",
          "explanation": "Rearranging the constraint lets us replace $h$ later so the surface area depends on $x$ only.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the total surface area",
          "workingLatex": "A = 2x^2 + 4xh",
          "explanation": "The top and bottom are two squares giving $2x^2$; the four upright sides are each $x \\times h$, giving $4xh$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute to get area in terms of x only",
          "workingLatex": "A = 2x^2 + 4x\\cdot\\frac{2000}{x^2} = 2x^2 + \\frac{8000}{x}",
          "explanation": "Substituting $h$ turns $A$ into a function of $x$ alone; one factor of $x$ cancels in the second term.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rewrite ready to differentiate",
          "workingLatex": "A = 2x^2 + 8000 x^{-1}",
          "explanation": "Writing $\\frac{8000}{x}$ as $8000x^{-1}$ lets us apply the power rule to both terms.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Differentiate with respect to x",
          "workingLatex": "\\frac{dA}{dx} = 4x - \\frac{8000}{x^2}",
          "explanation": "This gives the gradient of the area curve; the minimum surface area occurs where this gradient is zero.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Set the derivative to zero and solve",
          "workingLatex": "4x = \\frac{8000}{x^2} \\;\\Rightarrow\\; 4x^3 = 8000 \\;\\Rightarrow\\; x^3 = 2000 \\;\\Rightarrow\\; x = \\sqrt[3]{2000} \\approx 12.60",
          "explanation": "Setting $\\frac{dA}{dx}=0$ and clearing the fraction gives $x^3$; the cube root gives the positive side length.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Confirm it is a minimum",
          "workingLatex": "\\frac{d^2A}{dx^2} = 4 + \\frac{16000}{x^3} > 0",
          "explanation": "The second derivative is positive for every positive $x$, so the stationary point is a minimum, as required.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the height",
          "workingLatex": "h = \\frac{2000}{(12.60)^2} \\approx 12.60",
          "explanation": "Substituting the optimal side into the constraint gives $h = x$: the most economical closed box is a cube.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Find the minimum surface area",
          "workingLatex": "A = 2(12.599)^2 + \\frac{8000}{12.599} \\approx 952.4",
          "explanation": "Substituting the optimal side length into the area formula gives the smallest possible surface area.",
          "diagram": null
        }
      ],
      "finalAnswer": "The surface area is minimised when $x \\approx 12.60\\text{ cm}$ with $h \\approx 12.60\\text{ cm}$ (a cube), giving a minimum surface area of about $952.4\\text{ cm}^2$."
    }
  },
  {
    "id": "al.y1.pure.optimisation.q037",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Optimisation",
    "subtopicId": "al.y1.pure.optimisation",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "optimisation",
      "box",
      "open-top",
      "surface-area"
    ],
    "questionText": "An open box (no lid) has a square base of side $x\\text{ cm}$ and height $h\\text{ cm}$, and must hold $4000\\text{ cm}^3$. Find the dimensions that use the least material, and find the minimum surface area.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the volume constraint",
          "workingLatex": "V = x^2 h = 4000",
          "explanation": "The box has a square base $x \\times x$ and height $h$, so its volume is $x^2 h$, which is fixed at $4000\\text{ cm}^3$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Make h the subject",
          "workingLatex": "h = \\frac{4000}{x^2}",
          "explanation": "Rearranging the constraint lets us later write the surface area in terms of $x$ only.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the surface area of an open box",
          "workingLatex": "A = x^2 + 4xh",
          "explanation": "With no lid there is one square base ($x^2$) plus four rectangular sides ($4xh$). We do not include a top.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute to get area in terms of x only",
          "workingLatex": "A = x^2 + 4x\\cdot\\frac{4000}{x^2} = x^2 + \\frac{16000}{x}",
          "explanation": "Substituting $h$ reduces $A$ to a single-variable function, with one factor of $x$ cancelling.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rewrite ready to differentiate",
          "workingLatex": "A = x^2 + 16000 x^{-1}",
          "explanation": "Writing $\\frac{16000}{x}$ as $16000x^{-1}$ lets us differentiate each term with the power rule.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Differentiate with respect to x",
          "workingLatex": "\\frac{dA}{dx} = 2x - \\frac{16000}{x^2}",
          "explanation": "This is the gradient of the area curve; the least material is used where this gradient is zero.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Set the derivative to zero and solve",
          "workingLatex": "2x = \\frac{16000}{x^2} \\;\\Rightarrow\\; 2x^3 = 16000 \\;\\Rightarrow\\; x^3 = 8000 \\;\\Rightarrow\\; x = \\sqrt[3]{8000} = 20",
          "explanation": "Setting $\\frac{dA}{dx}=0$ and clearing the fraction gives $x^3 = 8000$, whose cube root is exactly $20$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Confirm it is a minimum",
          "workingLatex": "\\frac{d^2A}{dx^2} = 2 + \\frac{32000}{x^3} > 0",
          "explanation": "The second derivative is positive for every positive $x$, so this stationary point is a minimum.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the height",
          "workingLatex": "h = \\frac{4000}{20^2} = \\frac{4000}{400} = 10",
          "explanation": "Substituting $x = 20$ into the constraint gives $h = 10$. Here $h = \\tfrac{1}{2}x$: for an open box the best height is half the base width.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Find the minimum surface area",
          "workingLatex": "A = 20^2 + \\frac{16000}{20} = 400 + 800 = 1200",
          "explanation": "Substituting the optimal side into the area formula gives the least material needed to make the box.",
          "diagram": null
        }
      ],
      "finalAnswer": "The least material is used when $x = 20\\text{ cm}$ and $h = 10\\text{ cm}$, giving a minimum surface area of $1200\\text{ cm}^2$."
    }
  },
  {
    "id": "al.y1.pure.optimisation.q038",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Optimisation",
    "subtopicId": "al.y1.pure.optimisation",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "optimisation",
      "cylinder",
      "open-top",
      "surface-area"
    ],
    "questionText": "An open-topped cylindrical container (no lid) has volume $500\\text{ cm}^3$, radius $r\\text{ cm}$ and height $h\\text{ cm}$. Find the radius that minimises the surface area, and find that minimum surface area.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the volume constraint",
          "workingLatex": "V = \\pi r^2 h = 500",
          "explanation": "The container is a cylinder, so its volume is $\\pi r^2 h$, fixed at $500\\text{ cm}^3$. This links $r$ and $h$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Make h the subject",
          "workingLatex": "h = \\frac{500}{\\pi r^2}",
          "explanation": "Isolating $h$ lets us remove it from the area formula so $A$ depends on $r$ only.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the surface area of an open cylinder",
          "workingLatex": "A = \\pi r^2 + 2\\pi r h",
          "explanation": "With no lid there is one circular base ($\\pi r^2$) plus the curved side ($2\\pi r h$).",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute to get area in terms of r only",
          "workingLatex": "A = \\pi r^2 + 2\\pi r\\cdot\\frac{500}{\\pi r^2} = \\pi r^2 + \\frac{1000}{r}",
          "explanation": "Replacing $h$ turns $A$ into a single-variable function, with the $\\pi r$ cancelling in the second term.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rewrite ready to differentiate",
          "workingLatex": "A = \\pi r^2 + 1000 r^{-1}",
          "explanation": "Writing $\\frac{1000}{r}$ as $1000r^{-1}$ lets the power rule apply to both terms.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Differentiate with respect to r",
          "workingLatex": "\\frac{dA}{dr} = 2\\pi r - \\frac{1000}{r^2}",
          "explanation": "This gives the gradient of the area curve; the minimum area occurs where this gradient is zero.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Set the derivative to zero and solve",
          "workingLatex": "2\\pi r = \\frac{1000}{r^2} \\;\\Rightarrow\\; 2\\pi r^3 = 1000 \\;\\Rightarrow\\; r^3 = \\frac{500}{\\pi} \\;\\Rightarrow\\; r = \\sqrt[3]{\\frac{500}{\\pi}} \\approx 5.42",
          "explanation": "Setting $\\frac{dA}{dr}=0$ and clearing the fraction gives $r^3$; the cube root gives the positive radius.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Confirm it is a minimum",
          "workingLatex": "\\frac{d^2A}{dr^2} = 2\\pi + \\frac{2000}{r^3} > 0",
          "explanation": "The second derivative is positive for every positive $r$, so the stationary point is a minimum.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the height",
          "workingLatex": "h = \\frac{500}{\\pi (5.419)^2} \\approx 5.42",
          "explanation": "Substituting the optimal radius into the constraint gives $h \\approx r$: an open cylinder uses least metal when its height equals its radius.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Find the minimum surface area",
          "workingLatex": "A = \\pi(5.419)^2 + \\frac{1000}{5.419} \\approx 276.8",
          "explanation": "Substituting the optimal radius into the area formula gives the least material needed.",
          "diagram": null
        }
      ],
      "finalAnswer": "The surface area is minimised when $r \\approx 5.42\\text{ cm}$ (with $h \\approx 5.42\\text{ cm}$, so $h = r$), giving a minimum surface area of about $276.8\\text{ cm}^2$."
    }
  },
  {
    "id": "al.y1.pure.optimisation.q039",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Optimisation",
    "subtopicId": "al.y1.pure.optimisation",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "description",
    "tags": [
      "optimisation",
      "box",
      "show-that",
      "surface-area"
    ],
    "questionText": "A closed box has a square base of side $x$ and height $h$, and a fixed volume $V$. Show that its surface area is $A = 2x^2 + \\dfrac{4V}{x}$, and prove that the material used is least when the box is a cube, i.e. when $h = x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the volume constraint",
          "workingLatex": "V = x^2 h",
          "explanation": "A box with a square base of side $x$ and height $h$ has volume $x^2 h$. Because $V$ is fixed, this ties $h$ to $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Make h the subject",
          "workingLatex": "h = \\frac{V}{x^2}",
          "explanation": "We isolate $h$ so it can be removed from the surface-area formula, leaving everything in terms of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the surface area",
          "workingLatex": "A = 2x^2 + 4xh",
          "explanation": "The top and bottom are two squares giving $2x^2$; the four upright sides give $4xh$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute to show the required form",
          "workingLatex": "A = 2x^2 + 4x\\cdot\\frac{V}{x^2} = 2x^2 + \\frac{4V}{x}",
          "explanation": "Substituting $h$ and cancelling one factor of $x$ gives the stated formula, now a function of $x$ only. This is the 'show that' result.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rewrite ready to differentiate",
          "workingLatex": "A = 2x^2 + 4V x^{-1}",
          "explanation": "Writing $\\frac{4V}{x}$ as $4Vx^{-1}$ lets the power rule handle every term; $V$ is a constant.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Differentiate with respect to x",
          "workingLatex": "\\frac{dA}{dx} = 4x - \\frac{4V}{x^2}",
          "explanation": "This gives the gradient of the area curve; the minimum sits where the gradient is zero.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Set the derivative to zero and solve",
          "workingLatex": "4x = \\frac{4V}{x^2} \\;\\Rightarrow\\; x^3 = V",
          "explanation": "Setting $\\frac{dA}{dx}=0$ and clearing the fraction gives the neat stationary condition $x^3 = V$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Confirm it is a minimum",
          "workingLatex": "\\frac{d^2A}{dx^2} = 4 + \\frac{8V}{x^3} > 0",
          "explanation": "Since $V$ and $x$ are positive, the second derivative is positive, so the stationary point is a genuine minimum.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Substitute back to find h",
          "workingLatex": "h = \\frac{V}{x^2} = \\frac{x^3}{x^2} = x",
          "explanation": "Since $x^3 = V$, substituting into $h = \\frac{V}{x^2}$ gives $h = x$: all edges are equal, so the box is a cube.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the conclusion",
          "workingLatex": "h = x \\quad(\\text{a cube})",
          "explanation": "The least-material closed box with a square base is a cube, with height equal to the base side. This mirrors the 'height equals diameter' result for the closed cylinder.",
          "diagram": null
        }
      ],
      "finalAnswer": "$A = 2x^2 + \\dfrac{4V}{x}$, and the surface area is least when $x^3 = V$, giving $h = x$ — the box is a cube."
    }
  },
  {
    "id": "al.y1.pure.optimisation.q040",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Optimisation",
    "subtopicId": "al.y1.pure.optimisation",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "optimisation",
      "cylinder",
      "surface-area",
      "modelling"
    ],
    "questionText": "A drinks can is a closed cylinder holding $355\\text{ cm}^3$. To use as little aluminium as possible, find the radius $r\\text{ cm}$ that minimises its surface area, and state this minimum area.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the volume constraint",
          "workingLatex": "V = \\pi r^2 h = 355",
          "explanation": "The can is a cylinder of volume $\\pi r^2 h$, fixed at $355\\text{ cm}^3$. This gives a constraint linking $r$ and $h$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Make h the subject",
          "workingLatex": "h = \\frac{355}{\\pi r^2}",
          "explanation": "Rearranging lets us replace $h$ so the amount of metal depends on $r$ alone.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the total surface area",
          "workingLatex": "A = 2\\pi r^2 + 2\\pi r h",
          "explanation": "A closed can has two circular ends ($2\\pi r^2$) and a curved side ($2\\pi r h$); together these are the aluminium used.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute to get area in terms of r only",
          "workingLatex": "A = 2\\pi r^2 + 2\\pi r\\cdot\\frac{355}{\\pi r^2} = 2\\pi r^2 + \\frac{710}{r}",
          "explanation": "Substituting $h$ makes $A$ a function of $r$ alone; the $\\pi r$ cancels and $2 \\times 355 = 710$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rewrite ready to differentiate",
          "workingLatex": "A = 2\\pi r^2 + 710 r^{-1}",
          "explanation": "Writing $\\frac{710}{r}$ as $710r^{-1}$ lets us differentiate both terms with the power rule.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Differentiate with respect to r",
          "workingLatex": "\\frac{dA}{dr} = 4\\pi r - \\frac{710}{r^2}",
          "explanation": "This is the gradient of the area curve; the minimum metal occurs where this gradient is zero.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Set the derivative to zero and solve",
          "workingLatex": "4\\pi r = \\frac{710}{r^2} \\;\\Rightarrow\\; 4\\pi r^3 = 710 \\;\\Rightarrow\\; r^3 = \\frac{355}{2\\pi} \\;\\Rightarrow\\; r = \\sqrt[3]{\\frac{355}{2\\pi}} \\approx 3.84",
          "explanation": "Setting $\\frac{dA}{dr}=0$ and clearing the fraction gives $r^3$; the cube root gives the positive radius.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Confirm it is a minimum",
          "workingLatex": "\\frac{d^2A}{dr^2} = 4\\pi + \\frac{1420}{r^3} > 0",
          "explanation": "The second derivative is positive for every positive $r$, so this stationary point is a minimum.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the height",
          "workingLatex": "h = \\frac{355}{\\pi (3.837)^2} \\approx 7.67",
          "explanation": "Substituting the optimal radius gives the height. Note $h \\approx 2r$: the least-metal can has height equal to its diameter.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Find the minimum surface area",
          "workingLatex": "A = 2\\pi(3.837)^2 + \\frac{710}{3.837} \\approx 277.5",
          "explanation": "Substituting the optimal radius into the area formula gives the least aluminium needed to make the can.",
          "diagram": null
        }
      ],
      "finalAnswer": "The metal used is minimised when $r \\approx 3.84\\text{ cm}$ (with $h \\approx 7.67\\text{ cm}$, so $h = 2r$), giving a minimum surface area of about $277.5\\text{ cm}^2$."
    }
  },
  {
    "id": "al.y1.pure.optimisation.q041",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Optimisation",
    "subtopicId": "al.y1.pure.optimisation",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "optimisation",
      "box",
      "open-top",
      "surface-area"
    ],
    "questionText": "An open metal tray (no lid) has a square base of side $x\\text{ cm}$ and height $h\\text{ cm}$, and must hold $2000\\text{ cm}^3$. Find the value of $x$ that minimises the surface area, and find the minimum surface area.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the volume constraint",
          "workingLatex": "V = x^2 h = 2000",
          "explanation": "The tray has a square base $x \\times x$ and height $h$, so its volume is $x^2 h$, fixed at $2000\\text{ cm}^3$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Make h the subject",
          "workingLatex": "h = \\frac{2000}{x^2}",
          "explanation": "Rearranging the constraint lets us write the surface area in terms of $x$ only.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the surface area of an open tray",
          "workingLatex": "A = x^2 + 4xh",
          "explanation": "With no lid there is one square base ($x^2$) and four rectangular sides ($4xh$).",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute to get area in terms of x only",
          "workingLatex": "A = x^2 + 4x\\cdot\\frac{2000}{x^2} = x^2 + \\frac{8000}{x}",
          "explanation": "Substituting $h$ reduces $A$ to a single-variable function, with one factor of $x$ cancelling.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rewrite ready to differentiate",
          "workingLatex": "A = x^2 + 8000 x^{-1}",
          "explanation": "Writing $\\frac{8000}{x}$ as $8000x^{-1}$ lets the power rule apply to both terms.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Differentiate with respect to x",
          "workingLatex": "\\frac{dA}{dx} = 2x - \\frac{8000}{x^2}",
          "explanation": "This is the gradient of the area curve; the least metal is used where this gradient is zero.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Set the derivative to zero and solve",
          "workingLatex": "2x = \\frac{8000}{x^2} \\;\\Rightarrow\\; 2x^3 = 8000 \\;\\Rightarrow\\; x^3 = 4000 \\;\\Rightarrow\\; x = \\sqrt[3]{4000} \\approx 15.87",
          "explanation": "Setting $\\frac{dA}{dx}=0$ and clearing the fraction gives $x^3 = 4000$; the cube root gives the positive side length.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Confirm it is a minimum",
          "workingLatex": "\\frac{d^2A}{dx^2} = 2 + \\frac{16000}{x^3} > 0",
          "explanation": "The second derivative is positive for every positive $x$, so this stationary point is a minimum.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the height",
          "workingLatex": "h = \\frac{2000}{(15.874)^2} \\approx 7.94",
          "explanation": "Substituting the optimal side into the constraint gives the height. Here $h \\approx \\tfrac{1}{2}x$: an open tray is best when its height is half the base width.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Find the minimum surface area",
          "workingLatex": "A = (15.874)^2 + \\frac{8000}{15.874} \\approx 756.0",
          "explanation": "Substituting the optimal side length into the area formula gives the least metal needed to make the tray.",
          "diagram": null
        }
      ],
      "finalAnswer": "The surface area is minimised when $x \\approx 15.87\\text{ cm}$ and $h \\approx 7.94\\text{ cm}$ (so $h = \\tfrac{1}{2}x$), giving a minimum surface area of about $756.0\\text{ cm}^2$."
    }
  },
  {
    "id": "al.y1.pure.optimisation.q042",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Optimisation",
    "subtopicId": "al.y1.pure.optimisation",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "optimisation",
      "minimisation",
      "cost",
      "volume-constraint"
    ],
    "questionText": "A closed water tank has a square base of side $x$ metres and height $h$ metres. Its volume must be $24\\text{ m}^3$. The top and base are made from material costing £6 per m², and the four sides from material costing £2 per m². Find the value of $x$ that minimises the total cost of the material, and state that minimum cost.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the variables and the constraint",
          "workingLatex": "V = x^2 h = 24",
          "explanation": "The tank has a square base of side $x$ and height $h$. Its fixed volume gives one equation linking $x$ and $h$, which we will use to eliminate $h$ later.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the cost of the top and base",
          "workingLatex": "\\text{top + base cost} = 6(2x^2) = 12x^2",
          "explanation": "The top and base are each squares of area $x^2$, so $2x^2$ together. At £6 per m² this costs $12x^2$ pounds.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the cost of the four sides",
          "workingLatex": "\\text{side cost} = 2(4xh) = 8xh",
          "explanation": "The four vertical faces each have area $xh$, giving $4xh$ in total. At £2 per m² this is $8xh$ pounds.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Form the total cost",
          "workingLatex": "C = 12x^2 + 8xh",
          "explanation": "Adding the two contributions gives the total cost $C$ (in pounds) as a function of both $x$ and $h$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Use the constraint to remove h",
          "workingLatex": "h = \\frac{24}{x^2} \\Rightarrow C = 12x^2 + \\frac{192}{x}",
          "explanation": "Rearranging the volume equation gives $h=\\frac{24}{x^2}$. Substituting turns the two-variable cost into a function of $x$ only, valid for $x>0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Differentiate the cost",
          "workingLatex": "\\frac{dC}{dx} = 24x - \\frac{192}{x^2}",
          "explanation": "Writing $\\frac{192}{x}$ as $192x^{-1}$ and differentiating term by term gives the rate of change of cost with $x$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Set the derivative to zero",
          "workingLatex": "24x - \\frac{192}{x^2} = 0",
          "explanation": "At a minimum the gradient is zero, so we set the derivative equal to zero to locate the stationary value.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for x",
          "workingLatex": "24x^3 = 192 \\Rightarrow x^3 = 8 \\Rightarrow x = 2",
          "explanation": "Multiplying through by $x^2$ and rearranging gives $x^3=8$, so $x=2$ m. We take the positive root because $x$ is a length.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the height",
          "workingLatex": "h = \\frac{24}{2^2} = 6",
          "explanation": "Substituting $x=2$ back into the constraint gives the matching height.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Confirm it is a minimum",
          "workingLatex": "\\frac{d^2C}{dx^2} = 24 + \\frac{384}{x^3} = 72 > 0",
          "explanation": "A positive second derivative means the curve is concave up here, so this stationary point is a minimum — the cheapest design.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the minimum cost",
          "workingLatex": "C = 12(2)^2 + \\frac{192}{2} = 144",
          "explanation": "Substituting $x=2$ into the cost gives the least possible cost of the material.",
          "diagram": null
        }
      ],
      "finalAnswer": "The cost is minimised when $x=2$ m and $h=6$ m, giving a minimum cost of £144."
    }
  },
  {
    "id": "al.y1.pure.optimisation.q043",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Optimisation",
    "subtopicId": "al.y1.pure.optimisation",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "optimisation",
      "minimisation",
      "cost",
      "surface-area"
    ],
    "questionText": "An open-topped storage box has a square base of side $x$ metres and height $h$ metres. It must hold $27\\text{ m}^3$. The base is made from reinforced material costing £10 per m² and the four sides from material costing £5 per m². Find the value of $x$ that minimises the total cost, and state that minimum cost.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the variables and the constraint",
          "workingLatex": "V = x^2 h = 27",
          "explanation": "The open box has a square base of side $x$ (m) and height $h$ (m). Its fixed volume of $27\\text{ m}^3$ links $x$ and $h$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the cost of the base",
          "workingLatex": "\\text{base cost} = 10x^2",
          "explanation": "The base is a square of area $x^2$; at £10 per m² it costs $10x^2$ pounds. There is no lid because the box is open-topped.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the cost of the sides",
          "workingLatex": "\\text{side cost} = 5(4xh) = 20xh",
          "explanation": "The four sides each have area $xh$, so $4xh$ altogether; at £5 per m² this is $20xh$ pounds.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Form the total cost",
          "workingLatex": "C = 10x^2 + 20xh",
          "explanation": "Adding the base and side costs gives the total cost in terms of $x$ and $h$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Reduce to one variable",
          "workingLatex": "h = \\frac{27}{x^2} \\Rightarrow C = 10x^2 + \\frac{540}{x}",
          "explanation": "From the volume, $h=\\frac{27}{x^2}$; substituting removes $h$, giving cost as a function of $x$ only for $x>0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Differentiate",
          "workingLatex": "\\frac{dC}{dx} = 20x - \\frac{540}{x^2}",
          "explanation": "Differentiating term by term, with $\\frac{540}{x}=540x^{-1}$, gives the gradient of the cost curve.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Set the derivative to zero",
          "workingLatex": "20x - \\frac{540}{x^2} = 0",
          "explanation": "The minimum cost occurs where the gradient is zero.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for x",
          "workingLatex": "20x^3 = 540 \\Rightarrow x^3 = 27 \\Rightarrow x = 3",
          "explanation": "Multiplying by $x^2$ and simplifying gives $x^3=27$, so $x=3$ m, taking the positive length.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the height",
          "workingLatex": "h = \\frac{27}{3^2} = 3",
          "explanation": "Substituting $x=3$ into the constraint gives the height.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Confirm a minimum",
          "workingLatex": "\\frac{d^2C}{dx^2} = 20 + \\frac{1080}{x^3} = 60 > 0",
          "explanation": "The second derivative is positive, so the stationary point is a minimum.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the minimum cost",
          "workingLatex": "C = 10(3)^2 + \\frac{540}{3} = 270",
          "explanation": "Substituting back gives the least cost.",
          "diagram": null
        }
      ],
      "finalAnswer": "The cost is minimised when $x=3$ m and $h=3$ m, giving a minimum cost of £270."
    }
  },
  {
    "id": "al.y1.pure.optimisation.q044",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Optimisation",
    "subtopicId": "al.y1.pure.optimisation",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "optimisation",
      "minimisation",
      "fencing",
      "area-constraint"
    ],
    "questionText": "A rectangular paddock of area $200\\text{ m}^2$ is to be fenced. One side runs along an existing straight wall and needs no fence, so only the other three sides are fenced. The two sides perpendicular to the wall have length $x$ metres. Find the value of $x$ that minimises the total length of fencing, and state that minimum length.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the variables",
          "workingLatex": "A = xy = 200",
          "explanation": "Let the two sides perpendicular to the wall be $x$ m and the side parallel to the wall be $y$ m. The fixed area gives $xy=200$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the length of fencing",
          "workingLatex": "L = 2x + y",
          "explanation": "Only three sides are fenced, since the wall forms the fourth. Two sides have length $x$ and one has length $y$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Reduce to one variable",
          "workingLatex": "y = \\frac{200}{x} \\Rightarrow L = 2x + \\frac{200}{x}",
          "explanation": "Rearranging the area gives $y=\\frac{200}{x}$; substituting expresses the fence length using $x$ only, for $x>0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Differentiate",
          "workingLatex": "\\frac{dL}{dx} = 2 - \\frac{200}{x^2}",
          "explanation": "Differentiating, with $\\frac{200}{x}=200x^{-1}$, gives the rate of change of fence length.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set the derivative to zero",
          "workingLatex": "2 - \\frac{200}{x^2} = 0",
          "explanation": "The least fencing occurs at a stationary point, where the gradient is zero.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for x",
          "workingLatex": "x^2 = 100 \\Rightarrow x = 10",
          "explanation": "Rearranging gives $x^2=100$, so $x=10$ m, the positive root since $x$ is a length.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find y",
          "workingLatex": "y = \\frac{200}{10} = 20",
          "explanation": "Substituting back into the constraint gives the side parallel to the wall.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Confirm a minimum",
          "workingLatex": "\\frac{d^2L}{dx^2} = \\frac{400}{x^3} = 0.4 > 0",
          "explanation": "A positive second derivative confirms this is a minimum, not a maximum.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the minimum length",
          "workingLatex": "L = 2(10) + \\frac{200}{10} = 40",
          "explanation": "Substituting $x=10$ gives the shortest total fence.",
          "diagram": null
        }
      ],
      "finalAnswer": "The fencing is minimised when $x=10$ m and $y=20$ m, needing a minimum of $40$ m of fence."
    }
  },
  {
    "id": "al.y1.pure.optimisation.q045",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Optimisation",
    "subtopicId": "al.y1.pure.optimisation",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "optimisation",
      "minimisation",
      "fencing",
      "perimeter"
    ],
    "questionText": "A rectangular field of area $200\\text{ m}^2$ is to be divided into three equal pens by two internal fences running parallel to one pair of sides. Let $x$ metres be the length of the sides to which the internal fences are parallel. Find the value of $x$ that minimises the total length of fencing used, and state that minimum length.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the variables",
          "workingLatex": "A = xy = 200",
          "explanation": "Let the field be $x$ m by $y$ m, where the two internal fences run parallel to the sides of length $x$. The area is fixed at $200\\text{ m}^2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Count the fencing",
          "workingLatex": "F = 4x + 2y",
          "explanation": "There are four fence segments of length $x$ (two outer sides plus two internal dividers) and two of length $y$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Reduce to one variable",
          "workingLatex": "y = \\frac{200}{x} \\Rightarrow F = 4x + \\frac{400}{x}",
          "explanation": "From the area, $y=\\frac{200}{x}$; substituting gives total fencing as a function of $x$ only, for $x>0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Differentiate",
          "workingLatex": "\\frac{dF}{dx} = 4 - \\frac{400}{x^2}",
          "explanation": "Differentiating term by term, with $\\frac{400}{x}=400x^{-1}$, gives the gradient of the fencing function.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set the derivative to zero",
          "workingLatex": "4 - \\frac{400}{x^2} = 0",
          "explanation": "Minimum fencing occurs where the gradient is zero.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for x",
          "workingLatex": "x^2 = 100 \\Rightarrow x = 10",
          "explanation": "Rearranging gives $x^2=100$, so $x=10$ m, the positive length.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find y",
          "workingLatex": "y = \\frac{200}{10} = 20",
          "explanation": "Substituting into the constraint gives the other dimension of the field.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Confirm a minimum",
          "workingLatex": "\\frac{d^2F}{dx^2} = \\frac{800}{x^3} = 0.8 > 0",
          "explanation": "The positive second derivative confirms a minimum.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the minimum fencing",
          "workingLatex": "F = 4(10) + \\frac{400}{10} = 80",
          "explanation": "Substituting $x=10$ gives the least total fencing.",
          "diagram": null
        }
      ],
      "finalAnswer": "The fencing is minimised when the field is $10$ m by $20$ m, using a minimum of $80$ m of fence."
    }
  },
  {
    "id": "al.y1.pure.optimisation.q046",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Optimisation",
    "subtopicId": "al.y1.pure.optimisation",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "coordinates",
    "tags": [
      "optimisation",
      "distance",
      "minimisation",
      "coordinate-geometry"
    ],
    "questionText": "Find the coordinates of the point on the curve $y = \\dfrac{12}{x}$, for $x>0$, that is closest to the origin, and state that minimum distance.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the distance to minimise",
          "workingLatex": "D^2 = x^2 + y^2",
          "explanation": "The distance from the origin to a point $(x,y)$ is $\\sqrt{x^2+y^2}$. Minimising $D^2$ is easier and gives the same point, since $D$ increases with $D^2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Use the curve equation",
          "workingLatex": "y = \\frac{12}{x}",
          "explanation": "The point lies on $y=\\frac{12}{x}$ with $x>0$, which links $y$ to $x$ and lets us reduce to one variable.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write D squared in one variable",
          "workingLatex": "S = x^2 + \\frac{144}{x^2}",
          "explanation": "Substituting $y=\\frac{12}{x}$ gives $y^2=\\frac{144}{x^2}$, so $S=D^2$ depends on $x$ only.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Differentiate",
          "workingLatex": "\\frac{dS}{dx} = 2x - \\frac{288}{x^3}",
          "explanation": "Writing $\\frac{144}{x^2}=144x^{-2}$ and differentiating gives the gradient of $S$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set the derivative to zero",
          "workingLatex": "2x - \\frac{288}{x^3} = 0",
          "explanation": "The closest point occurs at a stationary value of $S$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for x",
          "workingLatex": "2x^4 = 288 \\Rightarrow x^4 = 144 \\Rightarrow x^2 = 12",
          "explanation": "Multiplying by $x^3$ gives $x^4=144$; since $x>0$, $x^2=12$ and $x=2\\sqrt{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find y",
          "workingLatex": "y = \\frac{12}{2\\sqrt{3}} = 2\\sqrt{3}",
          "explanation": "Substituting $x=2\\sqrt{3}$ into the curve gives the matching $y$-coordinate.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Confirm a minimum",
          "workingLatex": "\\frac{d^2S}{dx^2} = 2 + \\frac{864}{x^4} = 8 > 0",
          "explanation": "The positive second derivative shows $S$, and hence the distance, is least here.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the minimum distance",
          "workingLatex": "D = \\sqrt{12 + 12} = 2\\sqrt{6}",
          "explanation": "Substituting $x^2=12$ and $y^2=12$ into $D=\\sqrt{x^2+y^2}$ gives the shortest distance.",
          "diagram": null
        }
      ],
      "finalAnswer": "The closest point is $(2\\sqrt{3},\\,2\\sqrt{3})$, at a minimum distance of $2\\sqrt{6}\\approx 4.90$ from the origin."
    }
  },
  {
    "id": "al.y1.pure.optimisation.q047",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Optimisation",
    "subtopicId": "al.y1.pure.optimisation",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "optimisation",
      "minimisation",
      "area",
      "materials"
    ],
    "questionText": "A printed page must contain $50\\text{ cm}^2$ of printed material. It has margins of $2\\text{ cm}$ at the top and bottom and $1\\text{ cm}$ at each side. If the page is $x$ cm wide, find the value of $x$ that minimises the total area of paper used, and state that minimum area.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the page dimensions",
          "workingLatex": "A = xy",
          "explanation": "Let the page be $x$ cm wide and $y$ cm tall. We want to minimise the paper area $A=xy$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the printed area",
          "workingLatex": "(x-2)(y-4) = 50",
          "explanation": "The side margins remove $2\\times1=2$ cm from the width and the top and bottom margins remove $2\\times2=4$ cm from the height. The printed region must equal $50\\text{ cm}^2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Make y the subject",
          "workingLatex": "y = 4 + \\frac{50}{x-2}",
          "explanation": "Rearranging the print-area constraint isolates $y$, valid for $x>2$ so the printed width is positive.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Express area in one variable",
          "workingLatex": "A = 4x + \\frac{50x}{x-2}",
          "explanation": "Substituting for $y$ gives the page area as a function of $x$ only.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Differentiate using the quotient rule",
          "workingLatex": "\\frac{dA}{dx} = 4 - \\frac{100}{(x-2)^2}",
          "explanation": "Differentiating $\\frac{50x}{x-2}$ by the quotient rule gives $\\frac{50(x-2)-50x}{(x-2)^2}=\\frac{-100}{(x-2)^2}$; adding the derivative of $4x$ gives the gradient.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Set the derivative to zero",
          "workingLatex": "4 - \\frac{100}{(x-2)^2} = 0",
          "explanation": "The minimum paper area occurs where the gradient is zero.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for x",
          "workingLatex": "(x-2)^2 = 25 \\Rightarrow x = 7",
          "explanation": "So $x-2=5$, taking the positive root since $x>2$, which gives $x=7$ cm.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find y",
          "workingLatex": "y = 4 + \\frac{50}{5} = 14",
          "explanation": "Substituting $x=7$ into the constraint gives the page height.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Confirm a minimum",
          "workingLatex": "\\frac{d^2A}{dx^2} = \\frac{200}{(x-2)^3} = 1.6 > 0",
          "explanation": "The positive second derivative confirms the paper area is least here.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the minimum area",
          "workingLatex": "A = 7 \\times 14 = 98",
          "explanation": "Multiplying the optimal dimensions gives the smallest page area.",
          "diagram": null
        }
      ],
      "finalAnswer": "The paper is minimised by a page $7$ cm wide and $14$ cm tall, with area $98\\text{ cm}^2$."
    }
  },
  {
    "id": "al.y1.pure.optimisation.q048",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Optimisation",
    "subtopicId": "al.y1.pure.optimisation",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "optimisation",
      "maximisation",
      "revenue"
    ],
    "questionText": "A shop finds that the number of a certain item sold each week is $n = 400 - 25p$, where £$p$ is the selling price. Find the price $p$ that maximises the weekly revenue, and state that maximum revenue.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the variables",
          "workingLatex": "R = pn",
          "explanation": "Let the selling price be £$p$ and $n$ the number sold each week. Weekly revenue is price times quantity, $R=pn$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the demand relationship",
          "workingLatex": "n = 400 - 25p",
          "explanation": "The number sold falls as the price rises; this linear demand links $n$ to $p$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form revenue in one variable",
          "workingLatex": "R = p(400 - 25p) = 400p - 25p^2",
          "explanation": "Substituting the demand gives revenue as a function of price alone.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the sensible domain",
          "workingLatex": "0 \\le p \\le 16",
          "explanation": "Price cannot be negative, and $n\\ge0$ requires $p\\le16$, so revenue is only meaningful on this interval.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Differentiate",
          "workingLatex": "\\frac{dR}{dp} = 400 - 50p",
          "explanation": "Differentiating the quadratic gives the rate of change of revenue with price.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Set the derivative to zero",
          "workingLatex": "400 - 50p = 0",
          "explanation": "Maximum revenue occurs at the stationary point, where the gradient is zero.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for p",
          "workingLatex": "p = 8",
          "explanation": "Solving gives the optimal price of £8, which lies inside the valid domain.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find the quantity",
          "workingLatex": "n = 400 - 25(8) = 200",
          "explanation": "Substituting the price into the demand gives the number sold each week.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Confirm a maximum",
          "workingLatex": "\\frac{d^2R}{dp^2} = -50 < 0",
          "explanation": "A negative second derivative means the curve bends downwards, so this is a maximum.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the maximum revenue",
          "workingLatex": "R = 8 \\times 200 = 1600",
          "explanation": "Multiplying price by quantity gives the greatest weekly revenue.",
          "diagram": null
        }
      ],
      "finalAnswer": "Revenue is maximised at a price of £8, selling $200$ items for a maximum weekly revenue of £1600."
    }
  },
  {
    "id": "al.y1.pure.optimisation.q049",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Optimisation",
    "subtopicId": "al.y1.pure.optimisation",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "optimisation",
      "maximisation",
      "profit"
    ],
    "questionText": "A firm makes and sells $x$ items each week. The price it can charge per item is £$(60 - x)$, and its total weekly cost is £$(100 + 20x)$. Find the number of items $x$ that maximises the weekly profit, and state that maximum profit.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the profit",
          "workingLatex": "P = R - C",
          "explanation": "Let $x$ be the number of items made and sold each week. Profit is revenue minus cost, $P=R-C$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the revenue",
          "workingLatex": "R = x(60 - x) = 60x - x^2",
          "explanation": "The price per item is £$(60-x)$, so revenue is price times quantity.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the cost",
          "workingLatex": "C = 100 + 20x",
          "explanation": "There is a fixed cost of £100 plus £20 for each item produced.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Form profit in one variable",
          "workingLatex": "P = 60x - x^2 - (100 + 20x) = -x^2 + 40x - 100",
          "explanation": "Subtracting cost from revenue gives profit as a function of $x$ only.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the sensible domain",
          "workingLatex": "0 \\le x \\le 60",
          "explanation": "The number sold cannot be negative, and the price $60-x$ must be non-negative, so $x\\le60$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Differentiate",
          "workingLatex": "\\frac{dP}{dx} = -2x + 40",
          "explanation": "Differentiating the quadratic gives the marginal profit.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Set the derivative to zero",
          "workingLatex": "-2x + 40 = 0",
          "explanation": "Maximum profit occurs where the gradient is zero.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for x",
          "workingLatex": "x = 20",
          "explanation": "Solving gives 20 items, which lies inside the valid range.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the price",
          "workingLatex": "p = 60 - 20 = 40",
          "explanation": "Substituting into the price expression gives the selling price per item.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Confirm a maximum",
          "workingLatex": "\\frac{d^2P}{dx^2} = -2 < 0",
          "explanation": "The negative second derivative confirms a maximum.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the maximum profit",
          "workingLatex": "P = -(20)^2 + 40(20) - 100 = 300",
          "explanation": "Substituting $x=20$ gives the greatest weekly profit.",
          "diagram": null
        }
      ],
      "finalAnswer": "Profit is maximised by selling $20$ items at £40 each, giving a maximum profit of £300."
    }
  },
  {
    "id": "al.y1.pure.optimisation.q050",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Optimisation",
    "subtopicId": "al.y1.pure.optimisation",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "optimisation",
      "minimisation",
      "surface-area",
      "volume-constraint"
    ],
    "questionText": "A closed cuboidal crate has a rectangular base whose length is twice its width. The width is $x$ metres and the height is $h$ metres, and the crate must hold $72\\text{ m}^3$. Find the value of $x$ that minimises the total surface area (the material used), and state that minimum surface area.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the variables and the constraint",
          "workingLatex": "V = 2x^2 h = 72",
          "explanation": "Let the base width be $x$ (m), so the length is $2x$ (m), and let the height be $h$ (m). The fixed volume gives $2x^2h=72$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the surface area",
          "workingLatex": "A = 4x^2 + 6xh",
          "explanation": "The top and base contribute $2(2x\\cdot x)=4x^2$; the four sides contribute $2(2x\\cdot h)+2(x\\cdot h)=6xh$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Reduce to one variable",
          "workingLatex": "h = \\frac{36}{x^2} \\Rightarrow A = 4x^2 + \\frac{216}{x}",
          "explanation": "From the volume, $h=\\frac{36}{x^2}$; substituting removes $h$, giving area in terms of $x$ only for $x>0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Differentiate",
          "workingLatex": "\\frac{dA}{dx} = 8x - \\frac{216}{x^2}",
          "explanation": "Writing $\\frac{216}{x}=216x^{-1}$ and differentiating gives the gradient of the surface-area function.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set the derivative to zero",
          "workingLatex": "8x - \\frac{216}{x^2} = 0",
          "explanation": "Least material is used at a stationary point, where the gradient is zero.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for x",
          "workingLatex": "8x^3 = 216 \\Rightarrow x^3 = 27 \\Rightarrow x = 3",
          "explanation": "Multiplying by $x^2$ gives $x^3=27$, so $x=3$ m, the positive length.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the remaining dimensions",
          "workingLatex": "2x = 6, \\quad h = \\frac{36}{3^2} = 4",
          "explanation": "The length is $2x=6$ m and, from the constraint, the height is $4$ m.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Confirm a minimum",
          "workingLatex": "\\frac{d^2A}{dx^2} = 8 + \\frac{432}{x^3} = 24 > 0",
          "explanation": "A positive second derivative confirms this stationary point is a minimum.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the minimum surface area",
          "workingLatex": "A = 4(3)^2 + \\frac{216}{3} = 108",
          "explanation": "Substituting $x=3$ gives the least surface area, and hence the least material.",
          "diagram": null
        }
      ],
      "finalAnswer": "The material is minimised when the crate is $3$ m wide, $6$ m long and $4$ m high, with surface area $108\\text{ m}^2$."
    }
  },
  {
    "id": "al.y1.pure.optimisation.q051",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Optimisation",
    "subtopicId": "al.y1.pure.optimisation",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "optimisation",
      "cylinder",
      "surface-area",
      "second-derivative"
    ],
    "questionText": "A closed cylindrical tin is to be made to hold a volume of $500\\text{ cm}^3$. The tin has radius $r$ cm and height $h$ cm. Find the radius that minimises the total surface area of the tin, and determine this minimum surface area. Give your answers to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the volume constraint",
          "workingLatex": "V = \\pi r^2 h = 500",
          "explanation": "The tin is a closed cylinder, so its capacity is the cylinder volume $\\pi r^2 h$. This must equal the required $500\\text{ cm}^3$, giving a fixed link between $r$ and $h$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the surface area to minimise",
          "workingLatex": "A = 2\\pi r^2 + 2\\pi r h",
          "explanation": "The surface area is the two circular ends $2\\pi r^2$ plus the curved side $2\\pi r h$. This is the quantity we want to make as small as possible.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Make h the subject of the constraint",
          "workingLatex": "h = \\frac{500}{\\pi r^2}",
          "explanation": "To optimise we need $A$ in terms of one variable. Rearranging the volume equation gives $h$ in terms of $r$, ready to substitute.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute h into the area",
          "workingLatex": "A = 2\\pi r^2 + 2\\pi r\\left(\\frac{500}{\\pi r^2}\\right)",
          "explanation": "Replacing $h$ removes the second variable, so $A$ now depends only on $r$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify to a function of r",
          "workingLatex": "A = 2\\pi r^2 + \\frac{1000}{r}",
          "explanation": "The $\\pi$ and one power of $r$ cancel in the second term, leaving $A(r)=2\\pi r^2+1000r^{-1}$, valid for $r>0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the domain",
          "workingLatex": "r > 0",
          "explanation": "A radius must be positive, and any positive $r$ gives a valid tin (with $h$ found from the constraint), so the domain is all $r>0$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Differentiate the area with respect to r",
          "workingLatex": "\\frac{dA}{dr} = 4\\pi r - \\frac{1000}{r^2}",
          "explanation": "Writing $1000/r$ as $1000r^{-1}$, the power rule gives $-1000r^{-2}$. At a turning point this rate of change is zero.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Set the derivative to zero",
          "workingLatex": "4\\pi r - \\frac{1000}{r^2} = 0",
          "explanation": "The minimum surface area occurs where the gradient of $A(r)$ is zero, so we solve this equation.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Rearrange for r cubed",
          "workingLatex": "4\\pi r = \\frac{1000}{r^2} \\;\\Rightarrow\\; r^3 = \\frac{1000}{4\\pi} = \\frac{250}{\\pi}",
          "explanation": "Multiplying both sides by $r^2$ and dividing by $4\\pi$ isolates $r^3$; collecting the constants gives $r^3=250/\\pi$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Solve for r",
          "workingLatex": "r = \\sqrt[3]{\\frac{250}{\\pi}} \\approx 4.301",
          "explanation": "Taking the cube root gives the only positive solution, $r\\approx 4.30\\text{ cm}$, which lies in the domain.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Find the second derivative",
          "workingLatex": "\\frac{d^2A}{dr^2} = 4\\pi + \\frac{2000}{r^3}",
          "explanation": "Differentiating again tests the nature of the turning point. Both terms are positive for $r>0$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Confirm it is a minimum",
          "workingLatex": "\\frac{d^2A}{dr^2} > 0",
          "explanation": "A positive second derivative means the curve is concave up, so this stationary point is a minimum of the surface area.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Find the height",
          "workingLatex": "h = \\frac{500}{\\pi (4.301)^2} \\approx 8.602",
          "explanation": "Substituting $r$ back into the constraint gives $h\\approx 8.60\\text{ cm}$; note $h=2r$, the classic shape for a minimal-surface closed can.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Compute the minimum surface area",
          "workingLatex": "A = 2\\pi (4.301)^2 + \\frac{1000}{4.301} \\approx 348.7",
          "explanation": "Substituting $r$ into $A(r)$ gives the least possible surface area. Exactly, $A=\\dfrac{1500}{r}=1500\\sqrt[3]{\\dfrac{\\pi}{250}}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The surface area is minimised when $r=\\sqrt[3]{\\dfrac{250}{\\pi}}\\approx 4.30\\text{ cm}$ (with $h\\approx 8.60\\text{ cm}$, so $h=2r$). The minimum surface area is $1500\\sqrt[3]{\\dfrac{\\pi}{250}}\\approx 349\\text{ cm}^2$ (3 s.f.)."
    }
  },
  {
    "id": "al.y1.pure.optimisation.q052",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Optimisation",
    "subtopicId": "al.y1.pure.optimisation",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "optimisation",
      "area",
      "perimeter",
      "second-derivative"
    ],
    "questionText": "A window is in the shape of a rectangle with a semicircle on top (a Norman window). The rectangle's width equals the diameter of the semicircle. The total perimeter of the window is $8\\text{ m}$. Taking the radius of the semicircle as $r$ metres, find the value of $r$ that maximises the area of the window, and find this maximum area. Give answers to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Describe the dimensions",
          "workingLatex": "\\text{width} = 2r, \\quad \\text{rectangle height} = h",
          "explanation": "The flat base of the window is the diameter $2r$; call the vertical sides $h$. The curved top is a semicircle of radius $r$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the perimeter constraint",
          "workingLatex": "2r + 2h + \\pi r = 8",
          "explanation": "Going round the outside: the base $2r$, two straight sides $2h$, and the semicircular arc $\\pi r$ (half of $2\\pi r$). This fixed total is $8\\text{ m}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the area to maximise",
          "workingLatex": "A = 2r\\,h + \\tfrac{1}{2}\\pi r^2",
          "explanation": "The area is the rectangle ($\\text{width}\\times\\text{height}=2rh$) plus the semicircle ($\\tfrac12\\pi r^2$). This is what we maximise.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Make h the subject",
          "workingLatex": "h = \\frac{8 - 2r - \\pi r}{2}",
          "explanation": "Rearranging the perimeter equation isolates $h$, so we can remove it from the area and work with $r$ alone.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute h into the area",
          "workingLatex": "A = 2r\\left(\\frac{8 - 2r - \\pi r}{2}\\right) + \\tfrac{1}{2}\\pi r^2",
          "explanation": "Substituting expresses the area using only $r$, the single variable we will optimise.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify the area function",
          "workingLatex": "A = 8r - 2r^2 - \\tfrac{1}{2}\\pi r^2",
          "explanation": "Expanding gives $8r-2r^2-\\pi r^2+\\tfrac12\\pi r^2$, and the $\\pi r^2$ terms combine to $-\\tfrac12\\pi r^2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the domain",
          "workingLatex": "0 < r < \\frac{8}{2 + \\pi}",
          "explanation": "The radius is positive, and $h>0$ requires $2r+\\pi r<8$, i.e. $r<8/(2+\\pi)\\approx 1.56$. The optimum must lie in this range.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Differentiate with respect to r",
          "workingLatex": "\\frac{dA}{dr} = 8 - 4r - \\pi r",
          "explanation": "Differentiating term by term; the maximum area occurs where this gradient is zero.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Set the derivative to zero",
          "workingLatex": "8 - (4 + \\pi)r = 0",
          "explanation": "Factor out $r$ from the two linear terms. Setting the gradient to zero locates the turning point.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Solve for r",
          "workingLatex": "r = \\frac{8}{4 + \\pi} \\approx 1.120",
          "explanation": "Dividing gives $r\\approx 1.12\\text{ m}$, which lies inside the valid domain, so it is a genuine candidate.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Find the second derivative",
          "workingLatex": "\\frac{d^2A}{dr^2} = -(4 + \\pi)",
          "explanation": "Differentiating again gives a constant. Since $4+\\pi>0$, this value is negative.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Confirm it is a maximum",
          "workingLatex": "\\frac{d^2A}{dr^2} < 0",
          "explanation": "A negative second derivative means the graph is concave down, confirming the stationary point maximises the area.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Find the rectangle height",
          "workingLatex": "h = \\frac{8 - 2r - \\pi r}{2} \\approx 1.120",
          "explanation": "Substituting $r$ back gives $h\\approx 1.12\\text{ m}$; here $h=r$, so the straight sides equal the radius.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Compute the maximum area",
          "workingLatex": "A = \\frac{8^2}{2(4 + \\pi)} = \\frac{32}{4 + \\pi} \\approx 4.48",
          "explanation": "Substituting $r$ simplifies neatly to $A_{\\max}=\\dfrac{32}{4+\\pi}$, giving about $4.48\\text{ m}^2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The area is greatest when $r=\\dfrac{8}{4+\\pi}\\approx 1.12\\text{ m}$ (with rectangle height $h\\approx 1.12\\text{ m}$). The maximum area is $\\dfrac{32}{4+\\pi}\\approx 4.48\\text{ m}^2$ (3 s.f.)."
    }
  },
  {
    "id": "al.y1.pure.optimisation.q053",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Optimisation",
    "subtopicId": "al.y1.pure.optimisation",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "optimisation",
      "cost",
      "volume",
      "second-derivative"
    ],
    "questionText": "An open-topped tank with a square base of side $x$ metres and height $h$ metres must hold $64\\text{ m}^3$ of water. The base is made from material costing $\\pounds 6$ per square metre and the four sides from material costing $\\pounds 3$ per square metre. Find the value of $x$ that minimises the total cost, and state this minimum cost.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the volume constraint",
          "workingLatex": "x^2 h = 64",
          "explanation": "The tank's capacity is base area times height, $x^2h$, and this must equal the required $64\\text{ m}^3$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the cost function",
          "workingLatex": "C = 6x^2 + 3(4xh)",
          "explanation": "The square base has area $x^2$ at $\\pounds 6/\\text{m}^2$; the four sides have total area $4xh$ at $\\pounds 3/\\text{m}^2$. There is no top.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify the cost",
          "workingLatex": "C = 6x^2 + 12xh",
          "explanation": "Multiplying out the side cost gives $12xh$. This is the total cost we want to minimise.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Make h the subject",
          "workingLatex": "h = \\frac{64}{x^2}",
          "explanation": "We reduce to one variable by expressing $h$ from the volume constraint, ready to substitute into the cost.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute h into the cost",
          "workingLatex": "C = 6x^2 + 12x\\left(\\frac{64}{x^2}\\right)",
          "explanation": "Substituting removes $h$, so the cost depends only on the base side $x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify to a function of x",
          "workingLatex": "C = 6x^2 + \\frac{768}{x}",
          "explanation": "The side term simplifies to $768/x$. So $C(x)=6x^2+768x^{-1}$ for $x>0$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the domain",
          "workingLatex": "x > 0",
          "explanation": "The base side must be positive; every positive $x$ gives a valid tank via $h=64/x^2$, so the domain is $x>0$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Differentiate with respect to x",
          "workingLatex": "\\frac{dC}{dx} = 12x - \\frac{768}{x^2}",
          "explanation": "Writing $768/x$ as $768x^{-1}$ and differentiating gives $-768x^{-2}$. The cheapest tank has zero gradient here.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Set the derivative to zero",
          "workingLatex": "12x - \\frac{768}{x^2} = 0",
          "explanation": "The minimum cost occurs at a stationary point, so we set the derivative equal to zero and solve.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Solve for x",
          "workingLatex": "12x = \\frac{768}{x^2} \\;\\Rightarrow\\; x^3 = 64 \\;\\Rightarrow\\; x = 4",
          "explanation": "Multiplying by $x^2$ and dividing by $12$ gives $x^3=64$, so $x=4\\text{ m}$ (the positive cube root).",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Find the second derivative",
          "workingLatex": "\\frac{d^2C}{dx^2} = 12 + \\frac{1536}{x^3}",
          "explanation": "Differentiating again; for $x>0$ both terms are positive.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Confirm it is a minimum",
          "workingLatex": "\\frac{d^2C}{dx^2} = 12 + \\frac{1536}{64} = 36 > 0",
          "explanation": "A positive second derivative shows the cost curve is concave up, so $x=4$ gives the minimum cost.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Find the height",
          "workingLatex": "h = \\frac{64}{4^2} = 4",
          "explanation": "Substituting $x=4$ into the constraint gives $h=4\\text{ m}$, so the optimal tank has a square base of side $4\\text{ m}$ and equal height.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Compute the minimum cost",
          "workingLatex": "C = 6(4)^2 + \\frac{768}{4} = 96 + 192 = 288",
          "explanation": "The base costs $\\pounds 96$ and the sides $\\pounds 192$, giving a least total cost of $\\pounds 288$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The cost is minimised when the base side is $x=4\\text{ m}$ (with height $h=4\\text{ m}$). The minimum cost is $\\pounds 288$."
    }
  },
  {
    "id": "al.y1.pure.optimisation.q054",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Optimisation",
    "subtopicId": "al.y1.pure.optimisation",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "optimisation",
      "volume",
      "open-box",
      "second-derivative"
    ],
    "questionText": "An open box is made from a rectangular sheet of card measuring $20\\text{ cm}$ by $12\\text{ cm}$ by cutting a square of side $x$ cm from each corner and folding up the sides. Find the value of $x$ that maximises the volume of the box, giving your answer to $3$ significant figures, and find the maximum volume.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the base dimensions",
          "workingLatex": "\\text{length} = 20 - 2x, \\quad \\text{width} = 12 - 2x",
          "explanation": "Cutting $x$ from both ends of each side shortens the $20\\text{ cm}$ edge to $20-2x$ and the $12\\text{ cm}$ edge to $12-2x$. The folded-up flaps give height $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the volume",
          "workingLatex": "V = x(20 - 2x)(12 - 2x)",
          "explanation": "Volume is height times base area. This is the quantity to maximise, already in one variable $x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the domain",
          "workingLatex": "0 < x < 6",
          "explanation": "Both base dimensions must stay positive; $12-2x>0$ gives $x<6$, the tighter limit. So $0<x<6$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Expand the bracket product",
          "workingLatex": "(20 - 2x)(12 - 2x) = 240 - 64x + 4x^2",
          "explanation": "Expanding first makes differentiation straightforward: $240-40x-24x+4x^2=240-64x+4x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write V as a cubic",
          "workingLatex": "V = 4x^3 - 64x^2 + 240x",
          "explanation": "Multiplying through by $x$ gives a cubic in $x$, easy to differentiate term by term.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Differentiate with respect to x",
          "workingLatex": "\\frac{dV}{dx} = 12x^2 - 128x + 240",
          "explanation": "The maximum volume occurs where the gradient is zero, so we differentiate the cubic.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Set the derivative to zero",
          "workingLatex": "12x^2 - 128x + 240 = 0",
          "explanation": "Setting $dV/dx=0$ gives the stationary points of the volume.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Simplify the quadratic",
          "workingLatex": "3x^2 - 32x + 60 = 0",
          "explanation": "Dividing through by $4$ gives a simpler quadratic with the same roots.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Apply the quadratic formula",
          "workingLatex": "x = \\frac{32 \\pm \\sqrt{(-32)^2 - 4(3)(60)}}{2(3)} = \\frac{32 \\pm \\sqrt{304}}{6}",
          "explanation": "The quadratic does not factor nicely, so we use the formula. The discriminant is $1024-720=304$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Find the two roots",
          "workingLatex": "x \\approx 8.24 \\quad \\text{or} \\quad x \\approx 2.427",
          "explanation": "Evaluating gives roughly $8.24$ and $2.43$; only the second lies in the domain $0<x<6$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Reject the invalid root",
          "workingLatex": "x \\approx 8.24 > 6 \\;\\Rightarrow\\; \\text{rejected}",
          "explanation": "A cut of $8.24\\text{ cm}$ exceeds half the shorter side, which is impossible, so we keep $x\\approx 2.43\\text{ cm}$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Find the second derivative",
          "workingLatex": "\\frac{d^2V}{dx^2} = 24x - 128",
          "explanation": "Differentiating again lets us classify the surviving stationary point.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Confirm it is a maximum",
          "workingLatex": "24(2.427) - 128 \\approx -69.8 < 0",
          "explanation": "The second derivative is negative at $x\\approx 2.43$, so the volume curve is concave down and this is a maximum.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Compute the maximum volume",
          "workingLatex": "V = 2.427(20 - 4.854)(12 - 4.854) \\approx 263",
          "explanation": "Substituting $x\\approx 2.427$ gives base $15.15\\times 7.15$ and height $2.43$, so $V\\approx 263\\text{ cm}^3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The volume is greatest when $x\\approx 2.43\\text{ cm}$ (exactly $x=\\dfrac{16-2\\sqrt{19}}{3}$). The maximum volume is about $263\\text{ cm}^3$ (3 s.f.)."
    }
  },
  {
    "id": "al.y1.pure.optimisation.q055",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Optimisation",
    "subtopicId": "al.y1.pure.optimisation",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "optimisation",
      "cylinder",
      "volume",
      "second-derivative"
    ],
    "questionText": "A closed cylinder has radius $r$ cm and height $h$ cm. Its total surface area is fixed at $150\\pi\\text{ cm}^2$. Find the radius that maximises the volume of the cylinder, and find this maximum volume, giving an exact answer in terms of $\\pi$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the surface area constraint",
          "workingLatex": "2\\pi r^2 + 2\\pi r h = 150\\pi",
          "explanation": "The closed cylinder's surface is two ends plus the curved side. This total is fixed at $150\\pi\\text{ cm}^2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the volume to maximise",
          "workingLatex": "V = \\pi r^2 h",
          "explanation": "The volume of the cylinder is $\\pi r^2 h$; this is the quantity we want to make as large as possible.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Divide the constraint by two pi",
          "workingLatex": "r^2 + r h = 75",
          "explanation": "Every term shares a factor $2\\pi$; cancelling it simplifies the constraint to $r^2+rh=75$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Make h the subject",
          "workingLatex": "h = \\frac{75 - r^2}{r} = \\frac{75}{r} - r",
          "explanation": "Rearranging for $h$ lets us remove it from the volume so $V$ depends on $r$ alone.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute h into the volume",
          "workingLatex": "V = \\pi r^2\\left(\\frac{75}{r} - r\\right)",
          "explanation": "Substituting expresses the volume using only $r$, ready to differentiate.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify to a function of r",
          "workingLatex": "V = \\pi(75r - r^3)",
          "explanation": "Expanding gives $\\pi(75r-r^3)$. The bracket is a simple cubic in $r$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the domain",
          "workingLatex": "0 < r < \\sqrt{75}",
          "explanation": "We need $h>0$, i.e. $75/r>r$, so $r^2<75$. Thus $0<r<\\sqrt{75}\\approx 8.66$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Differentiate with respect to r",
          "workingLatex": "\\frac{dV}{dr} = \\pi(75 - 3r^2)",
          "explanation": "Differentiating the bracket; the maximum volume occurs where this gradient is zero.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Set the derivative to zero",
          "workingLatex": "\\pi(75 - 3r^2) = 0",
          "explanation": "Since $\\pi\\neq 0$, the stationary point satisfies $75-3r^2=0$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Solve for r",
          "workingLatex": "3r^2 = 75 \\;\\Rightarrow\\; r^2 = 25 \\;\\Rightarrow\\; r = 5",
          "explanation": "Solving gives $r=5\\text{ cm}$ (rejecting $r=-5$), which lies inside the valid domain.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Find the second derivative",
          "workingLatex": "\\frac{d^2V}{dr^2} = -6\\pi r",
          "explanation": "Differentiating again; for $r>0$ this is negative.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Confirm it is a maximum",
          "workingLatex": "-6\\pi(5) = -30\\pi < 0",
          "explanation": "The negative second derivative shows the volume curve is concave down, so $r=5$ gives the maximum.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Find the height",
          "workingLatex": "h = \\frac{75}{5} - 5 = 10",
          "explanation": "Substituting $r=5$ gives $h=10\\text{ cm}$; note $h=2r$, the optimal proportion for a closed cylinder.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Compute the maximum volume",
          "workingLatex": "V = \\pi\\big(75(5) - 5^3\\big) = \\pi(375 - 125) = 250\\pi",
          "explanation": "Substituting $r=5$ gives an exact maximum volume of $250\\pi\\text{ cm}^3\\approx 785\\text{ cm}^3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The volume is greatest when $r=5\\text{ cm}$ (with $h=10\\text{ cm}$, so $h=2r$). The maximum volume is $250\\pi\\text{ cm}^3\\approx 785\\text{ cm}^3$."
    }
  },
  {
    "id": "al.y1.pure.optimisation.q056",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Optimisation",
    "subtopicId": "al.y1.pure.optimisation",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "optimisation",
      "surface-area",
      "volume",
      "second-derivative"
    ],
    "questionText": "A closed box has a square base of side $x$ cm and height $h$ cm, and must have a volume of $2000\\text{ cm}^3$. Show that the surface area is minimised when the box is a cube, and find the dimensions and minimum surface area, giving values to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the volume constraint",
          "workingLatex": "x^2 h = 2000",
          "explanation": "A square-based box has volume base area times height, $x^2h$, fixed here at $2000\\text{ cm}^3$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the surface area",
          "workingLatex": "A = 2x^2 + 4xh",
          "explanation": "A closed box has a top and base ($2x^2$) and four rectangular sides ($4xh$). We minimise this total.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Make h the subject",
          "workingLatex": "h = \\frac{2000}{x^2}",
          "explanation": "Rearranging the constraint gives $h$ in terms of $x$, so we can reduce the surface area to one variable.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute h into the area",
          "workingLatex": "A = 2x^2 + 4x\\left(\\frac{2000}{x^2}\\right)",
          "explanation": "Substituting removes $h$, leaving the surface area as a function of $x$ only.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify to a function of x",
          "workingLatex": "A = 2x^2 + \\frac{8000}{x}",
          "explanation": "The side term becomes $8000/x$, so $A(x)=2x^2+8000x^{-1}$ for $x>0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the domain",
          "workingLatex": "x > 0",
          "explanation": "The base side must be positive, and any $x>0$ gives a valid box, so the domain is $x>0$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Differentiate with respect to x",
          "workingLatex": "\\frac{dA}{dx} = 4x - \\frac{8000}{x^2}",
          "explanation": "Writing $8000/x$ as $8000x^{-1}$ and differentiating gives $-8000x^{-2}$. A minimum has zero gradient.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Set the derivative to zero",
          "workingLatex": "4x - \\frac{8000}{x^2} = 0",
          "explanation": "The least surface area occurs at a stationary point, so we set the derivative to zero.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solve for x",
          "workingLatex": "4x = \\frac{8000}{x^2} \\;\\Rightarrow\\; x^3 = 2000 \\;\\Rightarrow\\; x = \\sqrt[3]{2000} \\approx 12.6",
          "explanation": "Multiplying by $x^2$ and dividing by $4$ gives $x^3=2000$, so $x=\\sqrt[3]{2000}\\approx 12.6\\text{ cm}$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Show the box is a cube",
          "workingLatex": "h = \\frac{2000}{x^2} = \\frac{x^3}{x^2} = x",
          "explanation": "Since $x^3=2000$, the height $h=2000/x^2=x^3/x^2=x$. The height equals the base side, so the box is a cube.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Find the second derivative",
          "workingLatex": "\\frac{d^2A}{dx^2} = 4 + \\frac{16000}{x^3}",
          "explanation": "Differentiating again; both terms are positive for $x>0$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Confirm it is a minimum",
          "workingLatex": "\\frac{d^2A}{dx^2} = 4 + \\frac{16000}{2000} = 12 > 0",
          "explanation": "The positive second derivative shows the area curve is concave up, confirming a minimum at the cube.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the dimensions",
          "workingLatex": "x = h = \\sqrt[3]{2000} \\approx 12.6",
          "explanation": "All edges equal $\\sqrt[3]{2000}\\approx 12.6\\text{ cm}$, confirming the minimal-surface box is a cube.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Compute the minimum surface area",
          "workingLatex": "A = 6x^2 = 6(2000)^{2/3} \\approx 952",
          "explanation": "For a cube the surface area is $6x^2$; with $x^2=(2000)^{2/3}$ this is $6\\sqrt[3]{2000^2}\\approx 952\\text{ cm}^2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The surface area is least when $x=h=\\sqrt[3]{2000}\\approx 12.6\\text{ cm}$ (a cube). The minimum surface area is $6\\sqrt[3]{2000^{2}}\\approx 952\\text{ cm}^2$ (3 s.f.)."
    }
  },
  {
    "id": "al.y1.pure.optimisation.q057",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Optimisation",
    "subtopicId": "al.y1.pure.optimisation",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "optimisation",
      "cylinder",
      "hemisphere",
      "second-derivative"
    ],
    "questionText": "A solid is formed from a cylinder of radius $r$ cm and height $h$ cm with a hemisphere of radius $r$ cm on top; the base is a flat circular disc. The solid has a fixed volume of $1000\\text{ cm}^3$. Find the radius that minimises the total surface area of the solid, and find this minimum surface area. Give answers to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the volume constraint",
          "workingLatex": "\\pi r^2 h + \\tfrac{2}{3}\\pi r^3 = 1000",
          "explanation": "The volume is the cylinder $\\pi r^2h$ plus a hemisphere $\\tfrac{2}{3}\\pi r^3$. This total is fixed at $1000\\text{ cm}^3$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the surface area",
          "workingLatex": "S = 2\\pi r h + \\pi r^2 + 2\\pi r^2",
          "explanation": "The outside is the curved cylinder $2\\pi rh$, the flat base $\\pi r^2$, and the curved hemisphere $2\\pi r^2$ (the cylinder's top is hidden inside).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify the surface area",
          "workingLatex": "S = 2\\pi r h + 3\\pi r^2",
          "explanation": "Combining the two circular contributions $\\pi r^2+2\\pi r^2=3\\pi r^2$ gives the quantity we minimise.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Make h the subject",
          "workingLatex": "h = \\frac{1000}{\\pi r^2} - \\frac{2}{3}r",
          "explanation": "From the volume: $\\pi r^2h=1000-\\tfrac23\\pi r^3$, so dividing by $\\pi r^2$ gives $h$ in terms of $r$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute h into the surface area",
          "workingLatex": "S = 2\\pi r\\left(\\frac{1000}{\\pi r^2} - \\frac{2}{3}r\\right) + 3\\pi r^2",
          "explanation": "Substituting removes $h$, leaving the surface area as a function of $r$ only.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify to a function of r",
          "workingLatex": "S = \\frac{2000}{r} - \\frac{4}{3}\\pi r^2 + 3\\pi r^2 = \\frac{2000}{r} + \\frac{5}{3}\\pi r^2",
          "explanation": "The first term gives $2000/r$; combining $-\\tfrac43\\pi r^2+3\\pi r^2=\\tfrac53\\pi r^2$. So $S=2000r^{-1}+\\tfrac53\\pi r^2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the domain",
          "workingLatex": "0 < r < \\sqrt[3]{\\tfrac{1500}{\\pi}}",
          "explanation": "We need $h>0$, i.e. $1000>\\tfrac23\\pi r^3$, giving $r^3<1500/\\pi$. So $r$ is positive and below this bound.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Differentiate with respect to r",
          "workingLatex": "\\frac{dS}{dr} = -\\frac{2000}{r^2} + \\frac{10}{3}\\pi r",
          "explanation": "Differentiating $2000r^{-1}$ gives $-2000r^{-2}$; differentiating $\\tfrac53\\pi r^2$ gives $\\tfrac{10}{3}\\pi r$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Set the derivative to zero",
          "workingLatex": "\\frac{10}{3}\\pi r = \\frac{2000}{r^2}",
          "explanation": "At the minimum the gradient is zero, so the two terms balance.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Solve for r cubed",
          "workingLatex": "r^3 = \\frac{3 \\times 2000}{10\\pi} = \\frac{600}{\\pi}",
          "explanation": "Multiplying by $r^2$ and rearranging isolates $r^3=6000/(10\\pi)=600/\\pi$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Solve for r",
          "workingLatex": "r = \\sqrt[3]{\\frac{600}{\\pi}} \\approx 5.76",
          "explanation": "The cube root gives the only positive solution, $r\\approx 5.76\\text{ cm}$, within the domain.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Find the second derivative",
          "workingLatex": "\\frac{d^2S}{dr^2} = \\frac{4000}{r^3} + \\frac{10}{3}\\pi",
          "explanation": "Differentiating again; both terms are positive for $r>0$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Confirm it is a minimum",
          "workingLatex": "\\frac{d^2S}{dr^2} > 0",
          "explanation": "A positive second derivative means the surface-area curve is concave up, so this stationary point is a minimum.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Find the height",
          "workingLatex": "h = \\frac{1000}{\\pi(5.76)^2} - \\frac{2}{3}(5.76) \\approx 5.76",
          "explanation": "Substituting $r$ gives $h\\approx 5.76\\text{ cm}$; in fact $h=r$ at the optimum for this solid.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Compute the minimum surface area",
          "workingLatex": "S = \\frac{2000}{5.76} + \\frac{5}{3}\\pi(5.76)^2 \\approx 521",
          "explanation": "Substituting $r$ gives the least surface area; using $S=5\\pi r^2$ at the optimum, $S\\approx 521\\text{ cm}^2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The surface area is minimised when $r=\\sqrt[3]{\\dfrac{600}{\\pi}}\\approx 5.76\\text{ cm}$ (with $h\\approx 5.76\\text{ cm}$, so $h=r$). The minimum surface area is about $521\\text{ cm}^2$ (3 s.f.)."
    }
  },
  {
    "id": "al.y1.pure.optimisation.q058",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Optimisation",
    "subtopicId": "al.y1.pure.optimisation",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "optimisation",
      "area",
      "second-derivative"
    ],
    "questionText": "A piece of wire of length $100\\text{ cm}$ is cut into two parts. One part is bent into a circle and the other into a square. Let $x$ cm be the length used for the circle. Find the value of $x$ that minimises the total area enclosed by the two shapes, and find this minimum total area. Give answers to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the two lengths",
          "workingLatex": "\\text{circle: } x, \\qquad \\text{square: } 100 - x",
          "explanation": "The wire splits into a length $x$ for the circle's circumference and $100-x$ for the square's perimeter.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the circle's area",
          "workingLatex": "2\\pi \\rho = x \\;\\Rightarrow\\; \\rho = \\frac{x}{2\\pi}, \\quad A_{\\text{circle}} = \\frac{x^2}{4\\pi}",
          "explanation": "The circumference $2\\pi\\rho=x$ gives radius $\\rho=x/2\\pi$; its area $\\pi\\rho^2=\\pi\\cdot x^2/4\\pi^2=x^2/4\\pi$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the square's area",
          "workingLatex": "\\text{side} = \\frac{100 - x}{4}, \\quad A_{\\text{square}} = \\frac{(100 - x)^2}{16}",
          "explanation": "The perimeter $100-x$ gives side $(100-x)/4$; squaring gives area $(100-x)^2/16$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the total area",
          "workingLatex": "A = \\frac{x^2}{4\\pi} + \\frac{(100 - x)^2}{16}",
          "explanation": "Adding the two areas gives the total area as a single function of $x$, the quantity to minimise.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the domain",
          "workingLatex": "0 \\le x \\le 100",
          "explanation": "The circle length cannot be negative or exceed the whole wire, so $0\\le x\\le 100$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Differentiate with respect to x",
          "workingLatex": "\\frac{dA}{dx} = \\frac{2x}{4\\pi} - \\frac{2(100 - x)}{16} = \\frac{x}{2\\pi} - \\frac{100 - x}{8}",
          "explanation": "Using the chain rule on $(100-x)^2$ brings down a factor $-1$. The minimum has zero gradient.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Set the derivative to zero",
          "workingLatex": "\\frac{x}{2\\pi} = \\frac{100 - x}{8}",
          "explanation": "Setting the gradient to zero balances the two rates; we now clear the fractions.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Clear the fractions",
          "workingLatex": "8x = 2\\pi(100 - x)",
          "explanation": "Cross-multiplying by $8$ and $2\\pi$ removes the denominators, giving a linear equation in $x$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Collect the x terms",
          "workingLatex": "8x + 2\\pi x = 200\\pi \\;\\Rightarrow\\; x(8 + 2\\pi) = 200\\pi",
          "explanation": "Expanding and gathering the $x$ terms on one side prepares to solve for $x$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Solve for x",
          "workingLatex": "x = \\frac{200\\pi}{8 + 2\\pi} = \\frac{100\\pi}{4 + \\pi} \\approx 44.0",
          "explanation": "Dividing (and cancelling $2$) gives $x=\\dfrac{100\\pi}{4+\\pi}\\approx 44.0\\text{ cm}$ for the circle, leaving about $56.0\\text{ cm}$ for the square.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Find the second derivative",
          "workingLatex": "\\frac{d^2A}{dx^2} = \\frac{1}{2\\pi} + \\frac{1}{8}",
          "explanation": "Differentiating again gives a positive constant, since both terms are positive.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Confirm it is a minimum",
          "workingLatex": "\\frac{d^2A}{dx^2} > 0",
          "explanation": "The positive second derivative shows the total-area curve is concave up, so this stationary point is a minimum.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Compute the minimum total area",
          "workingLatex": "A = \\frac{(44.0)^2}{4\\pi} + \\frac{(56.0)^2}{16} \\approx 154 + 196 = 350",
          "explanation": "Substituting gives circle area $\\approx 154\\text{ cm}^2$ and square area $\\approx 196\\text{ cm}^2$, a least total of about $350\\text{ cm}^2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The total area is least when $x=\\dfrac{100\\pi}{4+\\pi}\\approx 44.0\\text{ cm}$ is used for the circle (and about $56.0\\text{ cm}$ for the square). The minimum total area is about $350\\text{ cm}^2$ (3 s.f.)."
    }
  },
  {
    "id": "al.y1.pure.optimisation.q059",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Optimisation",
    "subtopicId": "al.y1.pure.optimisation",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "optimisation",
      "cylinder",
      "surface-area",
      "second-derivative"
    ],
    "questionText": "An open-topped cylindrical container (with a base but no lid) has radius $r$ cm and height $h$ cm and must hold $1500\\text{ cm}^3$. Show that the surface area is minimised when $h=r$, and find the radius and the minimum surface area to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the volume constraint",
          "workingLatex": "\\pi r^2 h = 1500",
          "explanation": "The container is a cylinder of capacity $\\pi r^2h$, fixed at $1500\\text{ cm}^3$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the surface area",
          "workingLatex": "S = \\pi r^2 + 2\\pi r h",
          "explanation": "With no lid, the surface is the circular base $\\pi r^2$ plus the curved side $2\\pi rh$. This is what we minimise.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Make h the subject",
          "workingLatex": "h = \\frac{1500}{\\pi r^2}",
          "explanation": "Rearranging the volume constraint gives $h$ in terms of $r$, so the surface area can be written in one variable.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute h into the surface area",
          "workingLatex": "S = \\pi r^2 + 2\\pi r\\left(\\frac{1500}{\\pi r^2}\\right)",
          "explanation": "Substituting removes $h$, leaving $S$ as a function of $r$ only.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify to a function of r",
          "workingLatex": "S = \\pi r^2 + \\frac{3000}{r}",
          "explanation": "The side term simplifies to $3000/r$, so $S(r)=\\pi r^2+3000r^{-1}$ for $r>0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the domain",
          "workingLatex": "r > 0",
          "explanation": "The radius must be positive; any positive $r$ gives a valid container, so the domain is $r>0$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Differentiate with respect to r",
          "workingLatex": "\\frac{dS}{dr} = 2\\pi r - \\frac{3000}{r^2}",
          "explanation": "Writing $3000/r$ as $3000r^{-1}$ and differentiating gives $-3000r^{-2}$. A minimum has zero gradient.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Set the derivative to zero",
          "workingLatex": "2\\pi r - \\frac{3000}{r^2} = 0",
          "explanation": "The least surface area occurs at a stationary point, so we solve this equation.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solve for r",
          "workingLatex": "2\\pi r = \\frac{3000}{r^2} \\;\\Rightarrow\\; r^3 = \\frac{1500}{\\pi} \\;\\Rightarrow\\; r = \\sqrt[3]{\\frac{1500}{\\pi}} \\approx 7.82",
          "explanation": "Multiplying by $r^2$ and dividing by $2\\pi$ gives $r^3=1500/\\pi$, so $r\\approx 7.82\\text{ cm}$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Show that h equals r",
          "workingLatex": "h = \\frac{1500}{\\pi r^2} = \\frac{r^3}{r^2} = r",
          "explanation": "Since $\\pi r^3=1500$, we have $h=1500/(\\pi r^2)=r^3/r^2=r$. So the optimum has $h=r$ as required.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Find the second derivative",
          "workingLatex": "\\frac{d^2S}{dr^2} = 2\\pi + \\frac{6000}{r^3}",
          "explanation": "Differentiating again; both terms are positive for $r>0$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Confirm it is a minimum",
          "workingLatex": "\\frac{d^2S}{dr^2} > 0",
          "explanation": "The positive second derivative shows the curve is concave up, confirming a minimum surface area.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Compute the minimum surface area",
          "workingLatex": "S = \\pi(7.82)^2 + \\frac{3000}{7.82} \\approx 576",
          "explanation": "Substituting $r$ gives $S\\approx 576\\text{ cm}^2$. Exactly, $S=3\\sqrt[3]{\\pi(1500)^2}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The surface area is least when $r=\\sqrt[3]{\\dfrac{1500}{\\pi}}\\approx 7.82\\text{ cm}$, at which $h=r$. The minimum surface area is about $576\\text{ cm}^2$ (3 s.f.)."
    }
  },
  {
    "id": "al.y1.pure.optimisation.q060",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Optimisation",
    "subtopicId": "al.y1.pure.optimisation",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "optimisation",
      "volume",
      "surface-area",
      "second-derivative"
    ],
    "questionText": "An open-topped box has a square base of side $x$ cm and height $h$ cm. The total surface area of the box (base and four sides, no top) is $108\\text{ cm}^2$. Find the value of $x$ that maximises the volume of the box, and find this maximum volume.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the surface area constraint",
          "workingLatex": "x^2 + 4xh = 108",
          "explanation": "With no top, the surface is the square base $x^2$ plus the four sides $4xh$, fixed at $108\\text{ cm}^2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the volume to maximise",
          "workingLatex": "V = x^2 h",
          "explanation": "The box's volume is base area times height, $x^2h$; this is the quantity we maximise.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Make h the subject",
          "workingLatex": "h = \\frac{108 - x^2}{4x}",
          "explanation": "Rearranging the surface-area constraint gives $h$ in terms of $x$, so $V$ can be reduced to one variable.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute h into the volume",
          "workingLatex": "V = x^2 \\cdot \\frac{108 - x^2}{4x}",
          "explanation": "Substituting removes $h$, leaving the volume as a function of $x$ only.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify to a function of x",
          "workingLatex": "V = \\frac{x(108 - x^2)}{4} = 27x - \\frac{x^3}{4}",
          "explanation": "Cancelling one $x$ and expanding gives $V=27x-\\tfrac14x^3$, a simple cubic in $x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the domain",
          "workingLatex": "0 < x < \\sqrt{108}",
          "explanation": "We need $h>0$, i.e. $108-x^2>0$, so $0<x<\\sqrt{108}\\approx 10.4$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Differentiate with respect to x",
          "workingLatex": "\\frac{dV}{dx} = 27 - \\frac{3x^2}{4}",
          "explanation": "Differentiating term by term; the maximum volume occurs where this gradient is zero.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Set the derivative to zero",
          "workingLatex": "27 - \\frac{3x^2}{4} = 0",
          "explanation": "Setting the gradient to zero locates the stationary point of the volume.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solve for x",
          "workingLatex": "\\frac{3x^2}{4} = 27 \\;\\Rightarrow\\; x^2 = 36 \\;\\Rightarrow\\; x = 6",
          "explanation": "Solving gives $x^2=36$, so $x=6\\text{ cm}$ (rejecting $x=-6$), which lies in the domain.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Find the second derivative",
          "workingLatex": "\\frac{d^2V}{dx^2} = -\\frac{3x}{2}",
          "explanation": "Differentiating again; for $x>0$ this is negative.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Confirm it is a maximum",
          "workingLatex": "-\\frac{3(6)}{2} = -9 < 0",
          "explanation": "The negative second derivative shows the volume curve is concave down, so $x=6$ gives a maximum.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Find the height",
          "workingLatex": "h = \\frac{108 - 36}{4(6)} = \\frac{72}{24} = 3",
          "explanation": "Substituting $x=6$ gives $h=3\\text{ cm}$; note $h=\\tfrac12x$ for an open-top box of maximum volume.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Compute the maximum volume",
          "workingLatex": "V = 6^2 \\times 3 = 108",
          "explanation": "Substituting $x=6$ and $h=3$ gives the greatest volume, $V=108\\text{ cm}^3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The volume is greatest when the base side is $x=6\\text{ cm}$ (with height $h=3\\text{ cm}$). The maximum volume is $108\\text{ cm}^3$."
    }
  },
  {
    "id": "al.y1.pure.optimisation.q061",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Optimisation",
    "subtopicId": "al.y1.pure.optimisation",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "optimisation",
      "cylinder",
      "surface-area",
      "show-that"
    ],
    "questionText": "A closed cylindrical can has a fixed volume of $500\\text{ cm}^3$. Its radius is $r$ cm and its height is $h$ cm. (a) Show that the total surface area is given by $A = 2\\pi r^2 + \\dfrac{1000}{r}$. (b) Find the value of $r$ that minimises the surface area, and hence find the minimum surface area, justifying that it is a minimum.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the volume constraint",
          "workingLatex": "V = \\pi r^2 h = 500",
          "explanation": "The volume is fixed at $500\\text{ cm}^3$, and a cylinder's volume is $\\pi r^2 h$. This equation links $r$ and $h$, so it is our constraint.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Make h the subject",
          "workingLatex": "h = \\frac{500}{\\pi r^2}",
          "explanation": "We want the area in terms of $r$ only, so we rearrange the constraint to give $h$ in terms of $r$, ready to substitute.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the surface area of a closed cylinder",
          "workingLatex": "A = 2\\pi r^2 + 2\\pi r h",
          "explanation": "A closed cylinder has two circular ends (total area $2\\pi r^2$) plus the curved side, which unrolls into a rectangle of area $2\\pi r h$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute for h",
          "workingLatex": "A = 2\\pi r^2 + 2\\pi r\\left(\\frac{500}{\\pi r^2}\\right)",
          "explanation": "Replacing $h$ using the constraint turns $A$ into a function of the single variable $r$, which is what we can differentiate.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify to complete part a",
          "workingLatex": "A = 2\\pi r^2 + \\frac{1000}{r}",
          "explanation": "The $\\pi$ cancels and $\\dfrac{2\\pi r \\cdot 500}{\\pi r^2} = \\dfrac{1000}{r}$, giving the required form. Part (a) is done.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the domain",
          "workingLatex": "r > 0",
          "explanation": "$r$ is a physical radius, so it must be positive; the algebra puts no upper limit, so the valid domain is $r>0$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Rewrite ready to differentiate",
          "workingLatex": "A = 2\\pi r^2 + 1000 r^{-1}",
          "explanation": "Writing $\\dfrac{1000}{r}$ as $1000r^{-1}$ lets us apply the power rule to each term.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Differentiate",
          "workingLatex": "\\frac{dA}{dr} = 4\\pi r - 1000 r^{-2}",
          "explanation": "Term by term: $\\dfrac{d}{dr}(2\\pi r^2)=4\\pi r$ and $\\dfrac{d}{dr}(1000r^{-1})=-1000r^{-2}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Set the derivative to zero",
          "workingLatex": "4\\pi r - \\frac{1000}{r^2} = 0",
          "explanation": "At a stationary point the gradient is zero. The minimum surface area occurs where $A$ stops changing with $r$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Rearrange to a cubic",
          "workingLatex": "4\\pi r^3 = 1000",
          "explanation": "Multiplying through by $r^2$ clears the fraction and gathers the $r$ terms into a simple cubic.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Solve for r",
          "workingLatex": "r = \\sqrt[3]{\\frac{250}{\\pi}} \\approx 4.301",
          "explanation": "Dividing by $4\\pi$ gives $r^3 = \\dfrac{250}{\\pi}$; the cube root gives $r\\approx 4.30\\text{ cm}$, which is positive and so lies in the domain.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Differentiate again",
          "workingLatex": "\\frac{d^2A}{dr^2} = 4\\pi + 2000 r^{-3}",
          "explanation": "Differentiating $\\dfrac{dA}{dr}$ once more: $\\dfrac{d}{dr}(-1000r^{-2}) = 2000r^{-3}$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Confirm it is a minimum",
          "workingLatex": "\\frac{d^2A}{dr^2} = 4\\pi + \\frac{2000}{r^3} > 0",
          "explanation": "For any $r>0$ both terms are positive, so the second derivative is positive. This confirms the stationary point is a minimum.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Find the height",
          "workingLatex": "h = \\frac{500}{\\pi r^2} \\approx 8.60",
          "explanation": "Substituting $r\\approx4.301$ into the constraint gives $h\\approx 8.60\\text{ cm}$; note $h\\approx 2r$, the classic result for a minimal closed can.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Find the minimum surface area",
          "workingLatex": "A = 2\\pi r^2 + \\frac{1000}{r} \\approx 348.7",
          "explanation": "Substituting $r\\approx4.301$ into $A$ gives the minimum surface area, about $349\\text{ cm}^2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$r \\approx 4.30\\text{ cm}$ gives the minimum surface area $A \\approx 349\\text{ cm}^2$ (with $h \\approx 8.60\\text{ cm}$). Since $\\dfrac{d^2A}{dr^2} = 4\\pi + \\dfrac{2000}{r^3} > 0$, this is a minimum."
    }
  },
  {
    "id": "al.y1.pure.optimisation.q062",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Optimisation",
    "subtopicId": "al.y1.pure.optimisation",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "description",
    "tags": [
      "optimisation",
      "cylinder",
      "surface-area",
      "proof"
    ],
    "questionText": "A closed cylinder has a fixed volume $V$. Its radius is $r$ and its height is $h$. Show that the total surface area is least when $h = 2r$, and justify that this gives a minimum.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the volume constraint",
          "workingLatex": "V = \\pi r^2 h",
          "explanation": "$V$ is a fixed constant. The volume of a cylinder is $\\pi r^2 h$; this is the constraint linking $r$ and $h$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Make h the subject",
          "workingLatex": "h = \\frac{V}{\\pi r^2}",
          "explanation": "To reduce to one variable we express $h$ in terms of $r$, treating $V$ as a constant.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the surface area",
          "workingLatex": "A = 2\\pi r^2 + 2\\pi r h",
          "explanation": "Two circular ends plus the curved side make up the surface of a closed cylinder.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute for h",
          "workingLatex": "A = 2\\pi r^2 + 2\\pi r \\cdot \\frac{V}{\\pi r^2}",
          "explanation": "Using the constraint makes $A$ a function of $r$ alone (with $V$ constant).",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "A = 2\\pi r^2 + \\frac{2V}{r}",
          "explanation": "The $\\pi$ cancels, leaving $A$ in terms of $r$ and the fixed volume $V$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the domain",
          "workingLatex": "r > 0",
          "explanation": "$r$ is a radius, so it must be positive.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Rewrite for differentiation",
          "workingLatex": "A = 2\\pi r^2 + 2V r^{-1}",
          "explanation": "Writing $\\dfrac{2V}{r}$ as $2Vr^{-1}$ lets us use the power rule.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Differentiate",
          "workingLatex": "\\frac{dA}{dr} = 4\\pi r - 2V r^{-2}",
          "explanation": "Differentiating term by term, remembering $V$ is a constant.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Set the derivative to zero",
          "workingLatex": "4\\pi r - \\frac{2V}{r^2} = 0",
          "explanation": "The least surface area occurs at a stationary point, where the gradient is zero.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Rearrange",
          "workingLatex": "4\\pi r^3 = 2V",
          "explanation": "Multiplying through by $r^2$ clears the fraction.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Solve for V in terms of r",
          "workingLatex": "V = 2\\pi r^3",
          "explanation": "This gives the volume at the stationary point in terms of $r$; we feed it back into the expression for $h$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Substitute into h",
          "workingLatex": "h = \\frac{V}{\\pi r^2} = \\frac{2\\pi r^3}{\\pi r^2}",
          "explanation": "Replacing $V$ with $2\\pi r^3$ in the expression for $h$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Simplify to the required result",
          "workingLatex": "h = 2r",
          "explanation": "The surface area is stationary exactly when the height equals the diameter, as required.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Differentiate again",
          "workingLatex": "\\frac{d^2A}{dr^2} = 4\\pi + 4V r^{-3}",
          "explanation": "Differentiating $\\dfrac{dA}{dr}$ once more: $\\dfrac{d}{dr}(-2Vr^{-2}) = 4Vr^{-3}$.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Confirm it is a minimum",
          "workingLatex": "\\frac{d^2A}{dr^2} = 4\\pi + \\frac{4V}{r^3} > 0",
          "explanation": "With $V>0$ and $r>0$ the second derivative is positive, so the stationary point is a minimum. Hence minimum surface area occurs at $h=2r$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The surface area is minimised when $h = 2r$. Since $\\dfrac{d^2A}{dr^2} = 4\\pi + \\dfrac{4V}{r^3} > 0$ for all $r>0$, this stationary point is a minimum, as required."
    }
  },
  {
    "id": "al.y1.pure.optimisation.q063",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Optimisation",
    "subtopicId": "al.y1.pure.optimisation",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "optimisation",
      "volume",
      "open-box",
      "show-that"
    ],
    "questionText": "An open box is made from a square sheet of card of side $12$ cm by cutting a square of side $x$ cm from each corner and folding up the sides. (a) Show that the volume is $V = 4x^3 - 48x^2 + 144x$. (b) Find the value of $x$ that maximises the volume, and find this maximum volume, justifying it is a maximum.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the base dimensions",
          "workingLatex": "\\text{base} = (12 - 2x) \\times (12 - 2x)",
          "explanation": "Cutting $x$ from both ends of each side removes $2x$ in total, so each base edge is $12-2x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the height",
          "workingLatex": "\\text{height} = x",
          "explanation": "The flaps that fold up have height equal to the size of the cut square, $x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the volume",
          "workingLatex": "V = x(12 - 2x)^2",
          "explanation": "Volume equals base area times height, that is $(12-2x)^2 \\times x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Expand the square",
          "workingLatex": "(12 - 2x)^2 = 144 - 48x + 4x^2",
          "explanation": "Using $(a-b)^2 = a^2 - 2ab + b^2$ with $a=12$ and $b=2x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Multiply out by x",
          "workingLatex": "V = x(144 - 48x + 4x^2)",
          "explanation": "Substituting the expanded bracket back into the volume expression.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Complete part a",
          "workingLatex": "V = 4x^3 - 48x^2 + 144x",
          "explanation": "Distributing the $x$ gives the required cubic. Part (a) is done.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the domain",
          "workingLatex": "0 < x < 6",
          "explanation": "We need $x>0$ to cut a corner and $12-2x>0$ for a positive base, which gives $x<6$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Differentiate",
          "workingLatex": "\\frac{dV}{dx} = 12x^2 - 96x + 144",
          "explanation": "Differentiating the cubic term by term with the power rule.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Set the derivative to zero",
          "workingLatex": "12x^2 - 96x + 144 = 0",
          "explanation": "The maximum volume occurs at a stationary point, where the gradient is zero.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Simplify the equation",
          "workingLatex": "x^2 - 8x + 12 = 0",
          "explanation": "Dividing through by 12 makes the quadratic easier to factorise.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Factorise",
          "workingLatex": "(x - 2)(x - 6) = 0",
          "explanation": "Two numbers multiplying to $12$ and adding to $-8$ are $-2$ and $-6$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Solve and reject the invalid root",
          "workingLatex": "x = 2 \\quad (\\text{reject } x = 6)",
          "explanation": "$x=6$ sits at the edge of the domain and gives a base of zero size (no box), so we reject it; $x=2$ is valid.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Differentiate again",
          "workingLatex": "\\frac{d^2V}{dx^2} = 24x - 96",
          "explanation": "Differentiating $\\dfrac{dV}{dx}$ to prepare the second-derivative test.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Confirm it is a maximum",
          "workingLatex": "\\frac{d^2V}{dx^2} = 24(2) - 96 = -48 < 0",
          "explanation": "A negative second derivative means the curve bends downward, so $x=2$ gives a maximum.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Find the maximum volume",
          "workingLatex": "V = 2(12 - 4)^2 = 2(64) = 128",
          "explanation": "With $x=2$ the base is $8\\times8$ and the height is $2$, giving a volume of $128\\text{ cm}^3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = 2\\text{ cm}$ gives the maximum volume $V = 128\\text{ cm}^3$. Since $\\dfrac{d^2V}{dx^2} = 24x - 96 = -48 < 0$ at $x=2$, this is a maximum."
    }
  },
  {
    "id": "al.y1.pure.optimisation.q064",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Optimisation",
    "subtopicId": "al.y1.pure.optimisation",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "description",
    "tags": [
      "optimisation",
      "area",
      "rectangle",
      "proof"
    ],
    "questionText": "A rectangle has a fixed perimeter $P$. Show that its area is greatest when the rectangle is a square, and justify that this is a maximum.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Label the sides",
          "workingLatex": "\\text{sides } x \\text{ and } y",
          "explanation": "Let one side be $x$ and the adjacent side $y$. The area depends on both, so we need the perimeter to link them.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the perimeter constraint",
          "workingLatex": "2x + 2y = P",
          "explanation": "The perimeter is fixed at $P$, and a rectangle's perimeter is twice the sum of its two side lengths.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Make y the subject",
          "workingLatex": "y = \\frac{P}{2} - x",
          "explanation": "Solving the constraint for $y$ lets us write the area in terms of $x$ only.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the area",
          "workingLatex": "A = xy = x\\left(\\frac{P}{2} - x\\right)",
          "explanation": "Area of a rectangle is length times width; substituting for $y$ reduces it to one variable.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Expand",
          "workingLatex": "A = \\frac{P}{2}x - x^2",
          "explanation": "Now $A$ is a function of the single variable $x$, with $P$ a constant.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the domain",
          "workingLatex": "0 < x < \\frac{P}{2}",
          "explanation": "Both sides must be positive: $x>0$ and $y=\\dfrac{P}{2}-x>0$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Differentiate",
          "workingLatex": "\\frac{dA}{dx} = \\frac{P}{2} - 2x",
          "explanation": "Differentiating each term, treating $P$ as a constant.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Set the derivative to zero",
          "workingLatex": "\\frac{P}{2} - 2x = 0",
          "explanation": "The area is stationary where its gradient is zero.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solve for x",
          "workingLatex": "x = \\frac{P}{4}",
          "explanation": "Rearranging gives the stationary side length.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Find the other side",
          "workingLatex": "y = \\frac{P}{2} - \\frac{P}{4} = \\frac{P}{4}",
          "explanation": "Substituting back shows the other side is also $\\dfrac{P}{4}$, so $x=y$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Interpret the result",
          "workingLatex": "x = y = \\frac{P}{4}",
          "explanation": "Since both sides are equal, the rectangle is a square. This is the claimed result.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Differentiate again",
          "workingLatex": "\\frac{d^2A}{dx^2} = -2",
          "explanation": "Differentiating $\\dfrac{dA}{dx}$ gives a constant second derivative.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Confirm it is a maximum",
          "workingLatex": "\\frac{d^2A}{dx^2} = -2 < 0",
          "explanation": "The second derivative is negative everywhere, so the stationary point is a maximum. Hence the square gives the greatest area.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the maximum area",
          "workingLatex": "A = \\left(\\frac{P}{4}\\right)^2 = \\frac{P^2}{16}",
          "explanation": "The greatest area of a rectangle with perimeter $P$ is $\\dfrac{P^2}{16}$, achieved by the square.",
          "diagram": null
        }
      ],
      "finalAnswer": "The area is greatest when $x = y = \\dfrac{P}{4}$, i.e. a square, giving maximum area $\\dfrac{P^2}{16}$. Since $\\dfrac{d^2A}{dx^2} = -2 < 0$, this is a maximum."
    }
  },
  {
    "id": "al.y1.pure.optimisation.q065",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Optimisation",
    "subtopicId": "al.y1.pure.optimisation",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "optimisation",
      "sum-of-squares",
      "numbers",
      "show-that"
    ],
    "questionText": "Two positive numbers have a sum of $12$. (a) Show that the sum of their squares is $S = 2x^2 - 24x + 144$, where $x$ is one of the numbers. (b) Find the value of $x$ that makes $S$ least, and state this least value, justifying it is a minimum.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Name the two numbers",
          "workingLatex": "x + y = 12",
          "explanation": "Let the numbers be $x$ and $y$. Their fixed sum is the constraint linking them.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Express y in terms of x",
          "workingLatex": "y = 12 - x",
          "explanation": "Rearranging the constraint lets us write everything in terms of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the sum of squares",
          "workingLatex": "S = x^2 + y^2",
          "explanation": "The quantity to minimise is the sum of the squares of the two numbers.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute for y",
          "workingLatex": "S = x^2 + (12 - x)^2",
          "explanation": "Replacing $y$ makes $S$ a function of the single variable $x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Expand the square",
          "workingLatex": "(12 - x)^2 = 144 - 24x + x^2",
          "explanation": "Using $(a-b)^2 = a^2 - 2ab + b^2$ with $a=12$ and $b=x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Complete part a",
          "workingLatex": "S = 2x^2 - 24x + 144",
          "explanation": "Adding the $x^2$ term gives the required expression. Part (a) is done.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the domain",
          "workingLatex": "0 < x < 12",
          "explanation": "Both numbers are positive, so $x>0$ and $y = 12-x>0$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Differentiate",
          "workingLatex": "\\frac{dS}{dx} = 4x - 24",
          "explanation": "Differentiating the quadratic term by term.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Set the derivative to zero",
          "workingLatex": "4x - 24 = 0",
          "explanation": "$S$ is stationary where its gradient is zero.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Solve for x",
          "workingLatex": "x = 6",
          "explanation": "Rearranging gives the stationary value of $x$, which lies inside the domain.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Find the other number",
          "workingLatex": "y = 12 - 6 = 6",
          "explanation": "The other number is also $6$; the sum is split evenly.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Differentiate again",
          "workingLatex": "\\frac{d^2S}{dx^2} = 4",
          "explanation": "Differentiating $\\dfrac{dS}{dx}$ gives a constant.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Confirm it is a minimum",
          "workingLatex": "\\frac{d^2S}{dx^2} = 4 > 0",
          "explanation": "A positive second derivative means the curve is concave up, so $x=6$ gives a minimum.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the least value",
          "workingLatex": "S = 6^2 + 6^2 = 72",
          "explanation": "The least possible sum of squares is $72$, achieved when both numbers equal $6$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = 6$ (and the other number is $6$) gives the least sum of squares $S = 72$. Since $\\dfrac{d^2S}{dx^2} = 4 > 0$, this is a minimum."
    }
  },
  {
    "id": "al.y1.pure.optimisation.q066",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Optimisation",
    "subtopicId": "al.y1.pure.optimisation",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "optimisation",
      "surface-area",
      "open-box",
      "show-that"
    ],
    "questionText": "A box with a square base of side $x$ cm and no lid is to have a volume of $500\\text{ cm}^3$. (a) Show that the area of card needed is $A = x^2 + \\dfrac{2000}{x}$. (b) Find the value of $x$ that minimises the area, and find the minimum area, justifying it is a minimum.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the volume constraint",
          "workingLatex": "V = x^2 h = 500",
          "explanation": "The base is a square of side $x$ and the height is $h$, so the volume is $x^2 h$, fixed at $500\\text{ cm}^3$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Make h the subject",
          "workingLatex": "h = \\frac{500}{x^2}",
          "explanation": "Rearranging the constraint gives $h$ in terms of $x$, ready to substitute.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the surface area with no lid",
          "workingLatex": "A = x^2 + 4xh",
          "explanation": "One square base ($x^2$) plus four rectangular sides (each $x$ by $h$); there is no top.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute for h",
          "workingLatex": "A = x^2 + 4x \\cdot \\frac{500}{x^2}",
          "explanation": "Using the constraint makes $A$ a function of $x$ alone.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify to complete part a",
          "workingLatex": "A = x^2 + \\frac{2000}{x}",
          "explanation": "$\\dfrac{4 \\cdot 500 x}{x^2} = \\dfrac{2000}{x}$, giving the required form. Part (a) is done.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the domain",
          "workingLatex": "x > 0",
          "explanation": "$x$ is a length, so it must be positive.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Rewrite for differentiation",
          "workingLatex": "A = x^2 + 2000 x^{-1}",
          "explanation": "Writing $\\dfrac{2000}{x}$ as $2000x^{-1}$ lets us use the power rule.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Differentiate",
          "workingLatex": "\\frac{dA}{dx} = 2x - 2000 x^{-2}",
          "explanation": "Differentiating term by term.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Set the derivative to zero",
          "workingLatex": "2x - \\frac{2000}{x^2} = 0",
          "explanation": "The least area occurs at a stationary point, where the gradient is zero.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Rearrange",
          "workingLatex": "2x^3 = 2000",
          "explanation": "Multiplying through by $x^2$ clears the fraction.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Solve for x",
          "workingLatex": "x^3 = 1000 \\;\\Rightarrow\\; x = 10",
          "explanation": "Cube-rooting gives $x=10\\text{ cm}$, which is positive and valid.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Differentiate again",
          "workingLatex": "\\frac{d^2A}{dx^2} = 2 + 4000 x^{-3}",
          "explanation": "Differentiating $\\dfrac{dA}{dx}$ once more.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Confirm it is a minimum",
          "workingLatex": "\\frac{d^2A}{dx^2} = 2 + \\frac{4000}{x^3} > 0",
          "explanation": "Both terms are positive for $x>0$, so the stationary point is a minimum.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Find the height",
          "workingLatex": "h = \\frac{500}{10^2} = 5",
          "explanation": "Substituting $x=10$ into the constraint gives a height of $5\\text{ cm}$.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Find the minimum area",
          "workingLatex": "A = 10^2 + \\frac{2000}{10} = 300",
          "explanation": "The least card needed is $300\\text{ cm}^2$ (base $100$, sides $200$).",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = 10\\text{ cm}$ (with $h = 5\\text{ cm}$) minimises the card used, giving minimum area $A = 300\\text{ cm}^2$. Since $\\dfrac{d^2A}{dx^2} = 2 + \\dfrac{4000}{x^3} > 0$, this is a minimum."
    }
  },
  {
    "id": "al.y1.pure.optimisation.q067",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Optimisation",
    "subtopicId": "al.y1.pure.optimisation",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "description",
    "tags": [
      "optimisation",
      "surface-area",
      "box",
      "proof"
    ],
    "questionText": "A closed box has a square base of side $x$ and height $h$, and a fixed volume $V$. Show that its surface area is least when the box is a cube, and justify that this is a minimum.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the volume constraint",
          "workingLatex": "V = x^2 h",
          "explanation": "A square base of area $x^2$ times the height $h$ gives the volume, which is fixed at $V$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Make h the subject",
          "workingLatex": "h = \\frac{V}{x^2}",
          "explanation": "Rearranging lets us write the surface area in terms of $x$ only.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the surface area of a closed box",
          "workingLatex": "A = 2x^2 + 4xh",
          "explanation": "Top and bottom squares give $2x^2$, and the four sides give $4xh$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute for h",
          "workingLatex": "A = 2x^2 + 4x \\cdot \\frac{V}{x^2}",
          "explanation": "Using the constraint makes $A$ a function of $x$ alone.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "A = 2x^2 + \\frac{4V}{x}",
          "explanation": "$\\dfrac{4Vx}{x^2} = \\dfrac{4V}{x}$, leaving $A$ in terms of $x$ and the constant $V$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the domain",
          "workingLatex": "x > 0",
          "explanation": "$x$ is a length, so it must be positive.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Rewrite for differentiation",
          "workingLatex": "A = 2x^2 + 4V x^{-1}",
          "explanation": "Writing $\\dfrac{4V}{x}$ as $4Vx^{-1}$ lets us use the power rule.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Differentiate",
          "workingLatex": "\\frac{dA}{dx} = 4x - 4V x^{-2}",
          "explanation": "Differentiating term by term, with $V$ constant.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Set the derivative to zero",
          "workingLatex": "4x - \\frac{4V}{x^2} = 0",
          "explanation": "The least surface area occurs where the gradient is zero.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Rearrange",
          "workingLatex": "4x^3 = 4V \\;\\Rightarrow\\; x^3 = V",
          "explanation": "Multiplying by $x^2$ and dividing by 4 gives the volume at the stationary point in terms of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Relate h back to x",
          "workingLatex": "h = \\frac{V}{x^2} = \\frac{x^3}{x^2}",
          "explanation": "Replacing $V$ with $x^3$ in the expression for $h$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Simplify to the required result",
          "workingLatex": "h = x",
          "explanation": "The height equals the base side, so all edges are equal and the box is a cube, as claimed.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Differentiate again",
          "workingLatex": "\\frac{d^2A}{dx^2} = 4 + 8V x^{-3}",
          "explanation": "Differentiating $\\dfrac{dA}{dx}$ once more.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Confirm it is a minimum",
          "workingLatex": "\\frac{d^2A}{dx^2} = 4 + \\frac{8V}{x^3} > 0",
          "explanation": "Positive for all $x>0$, so the stationary point is a minimum. Hence the cube minimises the surface area.",
          "diagram": null
        }
      ],
      "finalAnswer": "The surface area is least when $h = x$, i.e. a cube (with $x = \\sqrt[3]{V}$). Since $\\dfrac{d^2A}{dx^2} = 4 + \\dfrac{8V}{x^3} > 0$, this is a minimum."
    }
  },
  {
    "id": "al.y1.pure.optimisation.q068",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Optimisation",
    "subtopicId": "al.y1.pure.optimisation",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "optimisation",
      "cost",
      "box",
      "show-that"
    ],
    "questionText": "A closed tank has a square base of side $x$ metres and a volume of $4\\text{ m}^3$. The base and top are made of material costing $\\pounds 3$ per $\\text{m}^2$, and the four sides cost $\\pounds 2$ per $\\text{m}^2$. (a) Show that the total cost is $C = 6x^2 + \\dfrac{32}{x}$ pounds. (b) Find the value of $x$ that minimises the cost, and find this minimum cost, justifying it is a minimum.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the volume constraint",
          "workingLatex": "V = x^2 h = 4",
          "explanation": "The square base $x^2$ times the height $h$ equals the fixed volume of $4\\text{ m}^3$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Make h the subject",
          "workingLatex": "h = \\frac{4}{x^2}",
          "explanation": "Rearranging the constraint gives $h$ in terms of $x$, ready to substitute.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Cost of the base and top",
          "workingLatex": "3(2x^2) = 6x^2",
          "explanation": "Base and top are each $x^2$, a total area of $2x^2$, at $\\pounds3$ per $\\text{m}^2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Cost of the four sides",
          "workingLatex": "2(4xh) = 8xh",
          "explanation": "Four sides, each $x$ by $h$, give total area $4xh$, at $\\pounds2$ per $\\text{m}^2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the total cost",
          "workingLatex": "C = 6x^2 + 8xh",
          "explanation": "Adding the cost of the base and top to the cost of the sides.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute for h",
          "workingLatex": "C = 6x^2 + 8x \\cdot \\frac{4}{x^2}",
          "explanation": "Using the constraint makes the cost a function of $x$ alone.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify to complete part a",
          "workingLatex": "C = 6x^2 + \\frac{32}{x}",
          "explanation": "$\\dfrac{8 \\cdot 4 x}{x^2} = \\dfrac{32}{x}$, giving the required form. Part (a) is done.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the domain",
          "workingLatex": "x > 0",
          "explanation": "$x$ is a length, so it must be positive.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Rewrite for differentiation",
          "workingLatex": "C = 6x^2 + 32 x^{-1}",
          "explanation": "Writing $\\dfrac{32}{x}$ as $32x^{-1}$ lets us use the power rule.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Differentiate",
          "workingLatex": "\\frac{dC}{dx} = 12x - 32 x^{-2}",
          "explanation": "Differentiating term by term.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Set the derivative to zero",
          "workingLatex": "12x - \\frac{32}{x^2} = 0",
          "explanation": "The minimum cost occurs at a stationary point, where the gradient is zero.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Rearrange",
          "workingLatex": "12x^3 = 32 \\;\\Rightarrow\\; x^3 = \\frac{8}{3}",
          "explanation": "Multiplying by $x^2$ then dividing by 12 gives a cubic in $x$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Solve for x",
          "workingLatex": "x = \\sqrt[3]{\\frac{8}{3}} \\approx 1.387",
          "explanation": "The cube root gives $x\\approx1.39\\text{ m}$, positive and valid.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Differentiate again",
          "workingLatex": "\\frac{d^2C}{dx^2} = 12 + 64 x^{-3}",
          "explanation": "Differentiating $\\dfrac{dC}{dx}$ once more.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Confirm it is a minimum",
          "workingLatex": "\\frac{d^2C}{dx^2} = 12 + \\frac{64}{x^3} > 0",
          "explanation": "Positive for all $x>0$, so the cost is minimised at this stationary point.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "Find the minimum cost",
          "workingLatex": "C = 6x^2 + \\frac{32}{x} \\approx 34.61",
          "explanation": "Substituting $x\\approx1.387$ gives the least cost, about $\\pounds34.61$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x \\approx 1.39\\text{ m}$ minimises the cost, giving a minimum cost of about $\\pounds34.61$. Since $\\dfrac{d^2C}{dx^2} = 12 + \\dfrac{64}{x^3} > 0$, this is a minimum."
    }
  },
  {
    "id": "al.y1.pure.optimisation.q069",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Optimisation",
    "subtopicId": "al.y1.pure.optimisation",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "optimisation",
      "area",
      "semicircle",
      "show-that"
    ],
    "questionText": "A window is in the shape of a rectangle with a semicircle on top. The semicircle has radius $r$ metres, so the rectangle is $2r$ metres wide, and the rectangle has height $h$ metres. The perimeter of the whole window is $8$ metres. (a) Show that the area is $A = 8r - \\left(2 + \\dfrac{\\pi}{2}\\right)r^2$. (b) Find the value of $r$ that maximises the area, and find the maximum area, justifying it is a maximum.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the parts of the perimeter",
          "workingLatex": "P = 2h + 2r + \\pi r",
          "explanation": "The frame is the two vertical sides ($2h$), the base of width $2r$, and the semicircular arc of length $\\pi r$; the top of the rectangle is inside the shape, so it is not counted.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set the perimeter equal to 8",
          "workingLatex": "2h + 2r + \\pi r = 8",
          "explanation": "This fixed-perimeter equation is the constraint linking $h$ and $r$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Make h the subject",
          "workingLatex": "h = 4 - r - \\frac{\\pi}{2}r",
          "explanation": "Solving for $h$ lets us write the area in terms of $r$ only.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the total area",
          "workingLatex": "A = 2rh + \\tfrac{1}{2}\\pi r^2",
          "explanation": "The rectangle has area (width $2r$) times (height $h$), and the semicircle has area $\\tfrac{1}{2}\\pi r^2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute for h",
          "workingLatex": "A = 2r\\left(4 - r - \\frac{\\pi}{2}r\\right) + \\tfrac{1}{2}\\pi r^2",
          "explanation": "Using the constraint makes $A$ a function of $r$ alone.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Expand the bracket",
          "workingLatex": "A = 8r - 2r^2 - \\pi r^2 + \\tfrac{1}{2}\\pi r^2",
          "explanation": "Distributing $2r$ across the bracket, then adding the semicircle term.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify to complete part a",
          "workingLatex": "A = 8r - \\left(2 + \\frac{\\pi}{2}\\right)r^2",
          "explanation": "Combining $-\\pi r^2 + \\tfrac{1}{2}\\pi r^2 = -\\tfrac{1}{2}\\pi r^2$ gives the required form. Part (a) is done.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the domain",
          "workingLatex": "0 < r < \\frac{8}{2 + \\pi}",
          "explanation": "We need $r>0$ and $h>0$; setting $h=0$ gives $r=\\dfrac{8}{2+\\pi}\\approx1.56$, so $r$ must be below this.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Differentiate",
          "workingLatex": "\\frac{dA}{dr} = 8 - (4 + \\pi)r",
          "explanation": "The derivative of $\\left(2+\\tfrac{\\pi}{2}\\right)r^2$ is $2\\left(2+\\tfrac{\\pi}{2}\\right)r = (4+\\pi)r$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Set the derivative to zero",
          "workingLatex": "8 - (4 + \\pi)r = 0",
          "explanation": "The maximum area occurs at a stationary point, where the gradient is zero.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Solve for r",
          "workingLatex": "r = \\frac{8}{4 + \\pi} \\approx 1.120",
          "explanation": "This value is positive and inside the domain, so it is valid.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Differentiate again",
          "workingLatex": "\\frac{d^2A}{dr^2} = -(4 + \\pi)",
          "explanation": "Differentiating $\\dfrac{dA}{dr}$ gives a constant negative value.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Confirm it is a maximum",
          "workingLatex": "\\frac{d^2A}{dr^2} = -(4 + \\pi) < 0",
          "explanation": "The second derivative is negative, so the area is maximised at this stationary point.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Find the maximum area",
          "workingLatex": "A = 8r - \\left(2 + \\frac{\\pi}{2}\\right)r^2 \\approx 4.48",
          "explanation": "Substituting $r\\approx1.120$ gives the maximum area, about $4.48\\text{ m}^2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$r \\approx 1.12\\text{ m}$ maximises the area, giving a maximum area of about $4.48\\text{ m}^2$. Since $\\dfrac{d^2A}{dr^2} = -(4+\\pi) < 0$, this is a maximum."
    }
  },
  {
    "id": "al.y1.pure.optimisation.q070",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Optimisation",
    "subtopicId": "al.y1.pure.optimisation",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "optimisation",
      "cylinder",
      "surface-area",
      "show-that"
    ],
    "questionText": "An open-top cylindrical container is to hold $1000\\text{ cm}^3$ of liquid. Its radius is $r$ cm and its height is $h$ cm. (a) Show that the area of material needed (base and curved side) is $A = \\pi r^2 + \\dfrac{2000}{r}$. (b) Find the value of $r$ that minimises the material used, and find the minimum area, justifying it is a minimum.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the volume constraint",
          "workingLatex": "V = \\pi r^2 h = 1000",
          "explanation": "The container is a cylinder of volume $\\pi r^2 h$, fixed at $1000\\text{ cm}^3$. This links $r$ and $h$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Make h the subject",
          "workingLatex": "h = \\frac{1000}{\\pi r^2}",
          "explanation": "Rearranging the constraint gives $h$ in terms of $r$, ready to substitute.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the area with no top",
          "workingLatex": "A = \\pi r^2 + 2\\pi r h",
          "explanation": "One circular base ($\\pi r^2$) plus the curved side, which unrolls into a rectangle of area $2\\pi r h$; there is no top.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute for h",
          "workingLatex": "A = \\pi r^2 + 2\\pi r \\cdot \\frac{1000}{\\pi r^2}",
          "explanation": "Using the constraint makes $A$ a function of $r$ alone.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify to complete part a",
          "workingLatex": "A = \\pi r^2 + \\frac{2000}{r}",
          "explanation": "The $\\pi$ cancels and $\\dfrac{2\\pi r \\cdot 1000}{\\pi r^2} = \\dfrac{2000}{r}$. Part (a) is done.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the domain",
          "workingLatex": "r > 0",
          "explanation": "$r$ is a radius, so it must be positive.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Rewrite for differentiation",
          "workingLatex": "A = \\pi r^2 + 2000 r^{-1}",
          "explanation": "Writing $\\dfrac{2000}{r}$ as $2000r^{-1}$ lets us use the power rule.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Differentiate",
          "workingLatex": "\\frac{dA}{dr} = 2\\pi r - 2000 r^{-2}",
          "explanation": "Differentiating term by term.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Set the derivative to zero",
          "workingLatex": "2\\pi r - \\frac{2000}{r^2} = 0",
          "explanation": "The least material is used at a stationary point, where the gradient is zero.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Rearrange",
          "workingLatex": "2\\pi r^3 = 2000 \\;\\Rightarrow\\; r^3 = \\frac{1000}{\\pi}",
          "explanation": "Multiplying by $r^2$ then dividing by $2\\pi$ gives a cubic in $r$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Solve for r",
          "workingLatex": "r = \\sqrt[3]{\\frac{1000}{\\pi}} \\approx 6.828",
          "explanation": "The cube root gives $r\\approx6.83\\text{ cm}$, positive and valid.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Differentiate again",
          "workingLatex": "\\frac{d^2A}{dr^2} = 2\\pi + 4000 r^{-3}",
          "explanation": "Differentiating $\\dfrac{dA}{dr}$ once more.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Confirm it is a minimum",
          "workingLatex": "\\frac{d^2A}{dr^2} = 2\\pi + \\frac{4000}{r^3} > 0",
          "explanation": "Positive for all $r>0$, so the material is minimised at this stationary point.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Find the height",
          "workingLatex": "h = \\frac{1000}{\\pi r^2} \\approx 6.828",
          "explanation": "Substituting $r\\approx6.828$ gives $h\\approx r$: for a minimal open-top cylinder the height equals the radius.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Find the minimum area",
          "workingLatex": "A = \\pi r^2 + \\frac{2000}{r} \\approx 439",
          "explanation": "Substituting $r\\approx6.828$ gives the least material, about $439\\text{ cm}^2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$r \\approx 6.83\\text{ cm}$ (with $h \\approx 6.83\\text{ cm}$) minimises the material, giving minimum area $A \\approx 439\\text{ cm}^2$. Since $\\dfrac{d^2A}{dr^2} = 2\\pi + \\dfrac{4000}{r^3} > 0$, this is a minimum."
    }
  }
];
