import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "id": "al.y2.pure.product-quotient-chain.q001",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Product, quotient and chain rules",
    "subtopicId": "al.y2.pure.product-quotient-chain",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "chain rule",
      "polynomial",
      "differentiation"
    ],
    "questionText": "Given that $y = (2x+3)^4$, find $\\dfrac{dy}{dx}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise the composite structure",
          "workingLatex": "y = (2x+3)^4",
          "explanation": "The expression is a power of a bracket, so it is a 'function of a function': the bracket $2x+3$ is fed into the fourth-power operation. Whenever we have a function inside another function, we differentiate using the chain rule.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Introduce the inner function as $u$",
          "workingLatex": "u = 2x+3 \\quad \\Rightarrow \\quad y = u^4",
          "explanation": "We give the inside of the bracket its own name, $u$. This turns the problem into a simple power $y=u^4$ built on top of $u$, which is exactly the structure the chain rule is designed for.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate the inner function",
          "workingLatex": "\\frac{du}{dx} = 2",
          "explanation": "Differentiating $u=2x+3$ with respect to $x$ gives $2$, since the derivative of $2x$ is $2$ and the constant $3$ disappears.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Differentiate the outer function",
          "workingLatex": "\\frac{dy}{du} = 4u^3",
          "explanation": "Treating $y=u^4$ as a standard power, the power rule brings the $4$ down and reduces the exponent by one to give $4u^3$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply the chain rule",
          "workingLatex": "\\frac{dy}{dx} = \\frac{dy}{du}\\cdot\\frac{du}{dx} = 4u^3 \\cdot 2",
          "explanation": "The chain rule says the overall rate of change is the product of the two separate rates: how fast $y$ changes with $u$, multiplied by how fast $u$ changes with $x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify the constant",
          "workingLatex": "\\frac{dy}{dx} = 8u^3",
          "explanation": "Multiplying the constants gives $4\\times 2 = 8$, so the derivative is $8u^3$, still written in terms of $u$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute the inner function back in",
          "workingLatex": "\\frac{dy}{dx} = 8(2x+3)^3",
          "explanation": "Replacing $u$ with $2x+3$ writes the answer entirely in terms of the original variable $x$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dy}{dx} = 8(2x+3)^3$."
    }
  },
  {
    "id": "al.y2.pure.product-quotient-chain.q002",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Product, quotient and chain rules",
    "subtopicId": "al.y2.pure.product-quotient-chain",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "chain rule",
      "polynomial",
      "differentiation"
    ],
    "questionText": "Differentiate $y = (x^2+1)^5$ with respect to $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise the composite structure",
          "workingLatex": "y = (x^2+1)^5",
          "explanation": "Here a whole expression, $x^2+1$, is raised to the fifth power. Because one function ($x^2+1$) sits inside another (the fifth power), this is a composite and calls for the chain rule.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Introduce the inner function as $u$",
          "workingLatex": "u = x^2+1 \\quad \\Rightarrow \\quad y = u^5",
          "explanation": "Naming the inside $u$ separates the problem into a manageable outer power $y=u^5$ and an inner function $u=x^2+1$ that we can each differentiate on their own.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate the inner function",
          "workingLatex": "\\frac{du}{dx} = 2x",
          "explanation": "Differentiating $u=x^2+1$ gives $2x$ by the power rule, and the constant $1$ contributes nothing.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Differentiate the outer function",
          "workingLatex": "\\frac{dy}{du} = 5u^4",
          "explanation": "For the outer power $y=u^5$ the power rule brings the $5$ down and lowers the exponent by one, giving $5u^4$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply the chain rule",
          "workingLatex": "\\frac{dy}{dx} = \\frac{dy}{du}\\cdot\\frac{du}{dx} = 5u^4 \\cdot 2x",
          "explanation": "The chain rule multiplies the two rates of change together, linking how $y$ responds to $u$ with how $u$ responds to $x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify the coefficient",
          "workingLatex": "\\frac{dy}{dx} = 10x\\,u^4",
          "explanation": "Multiplying $5\\times 2x$ gives $10x$, so the derivative is $10x\\,u^4$ while still written in terms of $u$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute the inner function back in",
          "workingLatex": "\\frac{dy}{dx} = 10x(x^2+1)^4",
          "explanation": "Replacing $u$ with $x^2+1$ gives the derivative purely in terms of $x$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dy}{dx} = 10x(x^2+1)^4$."
    }
  },
  {
    "id": "al.y2.pure.product-quotient-chain.q003",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Product, quotient and chain rules",
    "subtopicId": "al.y2.pure.product-quotient-chain",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "chain rule",
      "surds",
      "differentiation"
    ],
    "questionText": "Find $\\dfrac{dy}{dx}$ for $y = \\sqrt{4x+1}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rewrite the root as a power",
          "workingLatex": "y = \\sqrt{4x+1} = (4x+1)^{1/2}",
          "explanation": "A square root is the same as raising to the power $\\tfrac12$. Writing it this way lets us use the power rule and see clearly that a bracket $4x+1$ is sitting inside the power.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Introduce the inner function as $u$",
          "workingLatex": "u = 4x+1 \\quad \\Rightarrow \\quad y = u^{1/2}",
          "explanation": "The inside of the root is the inner function, so we call it $u$. The outer operation is then the simple half-power $y=u^{1/2}$, ready for the chain rule.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate the inner function",
          "workingLatex": "\\frac{du}{dx} = 4",
          "explanation": "Differentiating $u=4x+1$ gives $4$, since the derivative of $4x$ is $4$ and the constant drops out.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Differentiate the outer function",
          "workingLatex": "\\frac{dy}{du} = \\tfrac{1}{2}u^{-1/2}",
          "explanation": "Applying the power rule to $y=u^{1/2}$ brings the $\\tfrac12$ down and reduces the exponent to $-\\tfrac12$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply the chain rule",
          "workingLatex": "\\frac{dy}{dx} = \\frac{dy}{du}\\cdot\\frac{du}{dx} = \\tfrac{1}{2}u^{-1/2}\\cdot 4",
          "explanation": "Multiplying the outer rate by the inner rate combines the two effects into the single derivative with respect to $x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify the constant",
          "workingLatex": "\\frac{dy}{dx} = 2u^{-1/2}",
          "explanation": "The constants combine as $\\tfrac12\\times 4 = 2$, tidying the expression before we return to $x$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute back and write as a surd",
          "workingLatex": "\\frac{dy}{dx} = 2(4x+1)^{-1/2} = \\frac{2}{\\sqrt{4x+1}}",
          "explanation": "Replacing $u$ with $4x+1$ and rewriting the negative power as a fraction over the root gives the cleanest final form.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dy}{dx} = \\dfrac{2}{\\sqrt{4x+1}}$."
    }
  },
  {
    "id": "al.y2.pure.product-quotient-chain.q004",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Product, quotient and chain rules",
    "subtopicId": "al.y2.pure.product-quotient-chain",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "chain rule",
      "exponential",
      "differentiation"
    ],
    "questionText": "Differentiate $y = e^{x^2}$ with respect to $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise the composite structure",
          "workingLatex": "y = e^{x^2}",
          "explanation": "The exponent here is not just $x$ but the expression $x^2$. So $x^2$ is fed into the exponential function, making this a composite that needs the chain rule.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Introduce the inner function as $u$",
          "workingLatex": "u = x^2 \\quad \\Rightarrow \\quad y = e^{u}",
          "explanation": "We let $u$ stand for the exponent $x^2$. The outer function is then the standard exponential $y=e^u$, whose derivative we know exactly.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate the inner function",
          "workingLatex": "\\frac{du}{dx} = 2x",
          "explanation": "Differentiating $u=x^2$ with respect to $x$ gives $2x$ by the power rule.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Differentiate the outer function",
          "workingLatex": "\\frac{dy}{du} = e^{u}",
          "explanation": "The exponential function is special: it is its own derivative, so $\\tfrac{d}{du}e^u = e^u$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply the chain rule",
          "workingLatex": "\\frac{dy}{dx} = \\frac{dy}{du}\\cdot\\frac{du}{dx} = e^{u}\\cdot 2x",
          "explanation": "The chain rule multiplies the derivative of the exponential by the derivative of its exponent, joining the two rates of change.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute the inner function back in",
          "workingLatex": "\\frac{dy}{dx} = e^{x^2}\\cdot 2x",
          "explanation": "Replacing $u$ with $x^2$ returns the answer to the original variable $x$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write in tidy form",
          "workingLatex": "\\frac{dy}{dx} = 2x\\,e^{x^2}",
          "explanation": "It is neat to place the $2x$ factor in front of the exponential, giving the standard way of writing the derivative.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dy}{dx} = 2x\\,e^{x^2}$."
    }
  },
  {
    "id": "al.y2.pure.product-quotient-chain.q005",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Product, quotient and chain rules",
    "subtopicId": "al.y2.pure.product-quotient-chain",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "chain rule",
      "logarithm",
      "differentiation"
    ],
    "questionText": "Given that $y = \\ln(2x+1)$, find $\\dfrac{dy}{dx}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise the composite structure",
          "workingLatex": "y = \\ln(2x+1)",
          "explanation": "We are taking the natural logarithm of the expression $2x+1$, not just of $x$. Because a function sits inside the logarithm, this is a composite and the chain rule applies.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Introduce the inner function as $u$",
          "workingLatex": "u = 2x+1 \\quad \\Rightarrow \\quad y = \\ln u",
          "explanation": "Letting $u$ be the argument of the logarithm turns the outer function into the standard $y=\\ln u$, whose derivative is a known result.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate the inner function",
          "workingLatex": "\\frac{du}{dx} = 2",
          "explanation": "Differentiating $u=2x+1$ gives $2$, as the derivative of $2x$ is $2$ and the constant vanishes.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Differentiate the outer function",
          "workingLatex": "\\frac{dy}{du} = \\frac{1}{u}",
          "explanation": "The derivative of $\\ln u$ with respect to $u$ is the standard result $\\tfrac{1}{u}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply the chain rule",
          "workingLatex": "\\frac{dy}{dx} = \\frac{dy}{du}\\cdot\\frac{du}{dx} = \\frac{1}{u}\\cdot 2",
          "explanation": "Multiplying the two derivatives together links the rate of change of the logarithm with the rate of change of its inside.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine into a single fraction",
          "workingLatex": "\\frac{dy}{dx} = \\frac{2}{u}",
          "explanation": "Multiplying $\\tfrac{1}{u}$ by $2$ places the $2$ on the numerator, giving $\\tfrac{2}{u}$, still in terms of $u$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute the inner function back in",
          "workingLatex": "\\frac{dy}{dx} = \\frac{2}{2x+1}",
          "explanation": "Replacing $u$ with $2x+1$ gives the derivative in terms of $x$. This matches the useful pattern $\\tfrac{d}{dx}\\ln(ax+b)=\\tfrac{a}{ax+b}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dy}{dx} = \\dfrac{2}{2x+1}$."
    }
  },
  {
    "id": "al.y2.pure.product-quotient-chain.q006",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Product, quotient and chain rules",
    "subtopicId": "al.y2.pure.product-quotient-chain",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "chain rule",
      "trigonometry",
      "substitution"
    ],
    "questionText": "For the curve $y = \\sin(3x^2)$: (a) write down a suitable substitution $u$ and find $\\dfrac{du}{dx}$; (b) write down $\\dfrac{dy}{du}$; (c) hence use the chain rule to find $\\dfrac{dy}{dx}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify why the chain rule is needed",
          "workingLatex": "y = \\sin(3x^2)",
          "explanation": "The sine is applied to the expression $3x^2$ rather than to $x$ alone. One function is nested inside another, which is exactly the signal to reach for the chain rule.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose the substitution (part a)",
          "workingLatex": "u = 3x^2",
          "explanation": "The natural choice for $u$ is the inner function — the thing inside the sine. This is the quantity that must be differentiated separately.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate the inner function (part a)",
          "workingLatex": "\\frac{du}{dx} = 6x",
          "explanation": "Differentiating $u=3x^2$ using the power rule brings the $2$ down and multiplies by the coefficient: $3\\times 2 = 6$, giving $6x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rewrite $y$ in terms of $u$",
          "workingLatex": "y = \\sin u",
          "explanation": "With the substitution in place, the outer function is simply $y=\\sin u$, a standard function we can differentiate directly.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Differentiate the outer function (part b)",
          "workingLatex": "\\frac{dy}{du} = \\cos u",
          "explanation": "The derivative of $\\sin u$ with respect to $u$ is $\\cos u$, a standard result (with $u$ measured in radians).",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply the chain rule (part c)",
          "workingLatex": "\\frac{dy}{dx} = \\frac{dy}{du}\\cdot\\frac{du}{dx} = \\cos u \\cdot 6x",
          "explanation": "The chain rule multiplies the two rates of change: how $y$ varies with $u$ and how $u$ varies with $x$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute the inner function back in",
          "workingLatex": "\\frac{dy}{dx} = 6x\\cos(3x^2)",
          "explanation": "Replacing $u$ with $3x^2$ and writing the $6x$ factor at the front gives the tidy final derivative in terms of $x$.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $u = 3x^2$, $\\dfrac{du}{dx} = 6x$. (b) $\\dfrac{dy}{du} = \\cos u$. (c) $\\dfrac{dy}{dx} = 6x\\cos(3x^2)$."
    }
  },
  {
    "id": "al.y2.pure.product-quotient-chain.q007",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Product, quotient and chain rules",
    "subtopicId": "al.y2.pure.product-quotient-chain",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "chain rule",
      "polynomial",
      "differentiation"
    ],
    "questionText": "Find $\\dfrac{dy}{dx}$ given that $y = (3x-1)^6$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise the composite structure",
          "workingLatex": "y = (3x-1)^6",
          "explanation": "A bracket $3x-1$ is raised to the sixth power, so a function is nested inside a power. That nesting is the cue to use the chain rule rather than expanding the bracket.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Introduce the inner function as $u$",
          "workingLatex": "u = 3x-1 \\quad \\Rightarrow \\quad y = u^6",
          "explanation": "We name the inside of the bracket $u$, leaving a clean outer power $y=u^6$ to differentiate on its own.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate the inner function",
          "workingLatex": "\\frac{du}{dx} = 3",
          "explanation": "Differentiating $u=3x-1$ gives $3$, since the derivative of $3x$ is $3$ and the constant disappears.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Differentiate the outer function",
          "workingLatex": "\\frac{dy}{du} = 6u^5",
          "explanation": "The power rule on $y=u^6$ brings the $6$ down and reduces the exponent by one to give $6u^5$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply the chain rule",
          "workingLatex": "\\frac{dy}{dx} = \\frac{dy}{du}\\cdot\\frac{du}{dx} = 6u^5 \\cdot 3",
          "explanation": "The chain rule multiplies the outer rate of change by the inner one, combining them into a single derivative in $x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify the constant",
          "workingLatex": "\\frac{dy}{dx} = 18u^5",
          "explanation": "Multiplying the constants gives $6\\times 3 = 18$, so the derivative is $18u^5$, still in terms of $u$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute the inner function back in",
          "workingLatex": "\\frac{dy}{dx} = 18(3x-1)^5",
          "explanation": "Replacing $u$ with $3x-1$ produces the final answer in terms of $x$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dy}{dx} = 18(3x-1)^5$."
    }
  },
  {
    "id": "al.y2.pure.product-quotient-chain.q008",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Product, quotient and chain rules",
    "subtopicId": "al.y2.pure.product-quotient-chain",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "chain rule",
      "logarithm",
      "differentiation"
    ],
    "questionText": "Differentiate $y = \\ln(x^2+4)$ with respect to $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise the composite structure",
          "workingLatex": "y = \\ln(x^2+4)",
          "explanation": "The logarithm is taken of the expression $x^2+4$, so a function is nested inside the $\\ln$. A function inside a function means the chain rule is required.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Introduce the inner function as $u$",
          "workingLatex": "u = x^2+4 \\quad \\Rightarrow \\quad y = \\ln u",
          "explanation": "Calling the argument of the logarithm $u$ leaves the standard outer function $y=\\ln u$, which we know how to differentiate.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate the inner function",
          "workingLatex": "\\frac{du}{dx} = 2x",
          "explanation": "Differentiating $u=x^2+4$ gives $2x$ by the power rule, with the constant $4$ contributing nothing.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Differentiate the outer function",
          "workingLatex": "\\frac{dy}{du} = \\frac{1}{u}",
          "explanation": "The derivative of $\\ln u$ with respect to $u$ is the standard result $\\tfrac{1}{u}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply the chain rule",
          "workingLatex": "\\frac{dy}{dx} = \\frac{dy}{du}\\cdot\\frac{du}{dx} = \\frac{1}{u}\\cdot 2x",
          "explanation": "The chain rule multiplies the derivative of the logarithm by the derivative of its inside to link the two rates of change.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine into a single fraction",
          "workingLatex": "\\frac{dy}{dx} = \\frac{2x}{u}",
          "explanation": "Multiplying $\\tfrac{1}{u}$ by $2x$ places the $2x$ on the numerator, giving $\\tfrac{2x}{u}$, still in terms of $u$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute the inner function back in",
          "workingLatex": "\\frac{dy}{dx} = \\frac{2x}{x^2+4}",
          "explanation": "Replacing $u$ with $x^2+4$ gives the derivative in $x$. This shows the pattern $\\tfrac{d}{dx}\\ln(f(x)) = \\tfrac{f'(x)}{f(x)}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dy}{dx} = \\dfrac{2x}{x^2+4}$."
    }
  },
  {
    "id": "al.y2.pure.product-quotient-chain.q009",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Product, quotient and chain rules",
    "subtopicId": "al.y2.pure.product-quotient-chain",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "chain rule",
      "exponential",
      "differentiation"
    ],
    "questionText": "Given that $y = (e^{x}+1)^3$, find $\\dfrac{dy}{dx}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise the composite structure",
          "workingLatex": "y = (e^{x}+1)^3",
          "explanation": "The expression $e^x+1$ is raised to the third power, so a function is nested inside a cube. This nesting means we differentiate with the chain rule.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Introduce the inner function as $u$",
          "workingLatex": "u = e^{x}+1 \\quad \\Rightarrow \\quad y = u^3",
          "explanation": "We let $u$ be the contents of the bracket, so the outer function becomes the simple cube $y=u^3$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate the inner function",
          "workingLatex": "\\frac{du}{dx} = e^{x}",
          "explanation": "Differentiating $u=e^x+1$ gives $e^x$, because $e^x$ is its own derivative and the constant $1$ disappears.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Differentiate the outer function",
          "workingLatex": "\\frac{dy}{du} = 3u^2",
          "explanation": "The power rule on $y=u^3$ brings the $3$ down and lowers the exponent by one to give $3u^2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply the chain rule",
          "workingLatex": "\\frac{dy}{dx} = \\frac{dy}{du}\\cdot\\frac{du}{dx} = 3u^2 \\cdot e^{x}",
          "explanation": "The chain rule multiplies the outer rate $3u^2$ by the inner rate $e^x$ to give the derivative with respect to $x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute the inner function back in",
          "workingLatex": "\\frac{dy}{dx} = 3(e^{x}+1)^2\\, e^{x}",
          "explanation": "Replacing $u$ with $e^x+1$ returns the answer to the original variable $x$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write in tidy form",
          "workingLatex": "\\frac{dy}{dx} = 3e^{x}(e^{x}+1)^2",
          "explanation": "Placing the $3e^x$ factor in front of the squared bracket gives the cleanest way of writing the derivative.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dy}{dx} = 3e^{x}(e^{x}+1)^2$."
    }
  },
  {
    "id": "al.y2.pure.product-quotient-chain.q010",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Product, quotient and chain rules",
    "subtopicId": "al.y2.pure.product-quotient-chain",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "chain rule",
      "trigonometry",
      "differentiation"
    ],
    "questionText": "Differentiate $y = \\cos(2x+1)$ with respect to $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise the composite structure",
          "workingLatex": "y = \\cos(2x+1)",
          "explanation": "The cosine is applied to the expression $2x+1$ rather than to $x$ alone, so a function is nested inside the cosine. This is a composite, so we use the chain rule.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Introduce the inner function as $u$",
          "workingLatex": "u = 2x+1 \\quad \\Rightarrow \\quad y = \\cos u",
          "explanation": "Naming the angle $u$ turns the outer function into the standard $y=\\cos u$, whose derivative is a known result.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate the inner function",
          "workingLatex": "\\frac{du}{dx} = 2",
          "explanation": "Differentiating $u=2x+1$ gives $2$, since the derivative of $2x$ is $2$ and the constant vanishes.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Differentiate the outer function",
          "workingLatex": "\\frac{dy}{du} = -\\sin u",
          "explanation": "The derivative of $\\cos u$ with respect to $u$ is $-\\sin u$, a standard result (with $u$ in radians). The minus sign is essential.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply the chain rule",
          "workingLatex": "\\frac{dy}{dx} = \\frac{dy}{du}\\cdot\\frac{du}{dx} = -\\sin u \\cdot 2",
          "explanation": "The chain rule multiplies the derivative of the cosine by the derivative of the angle, joining the two rates of change.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify the constant",
          "workingLatex": "\\frac{dy}{dx} = -2\\sin u",
          "explanation": "Collecting the factor of $2$ in front of the sine gives $-2\\sin u$, still written in terms of $u$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute the inner function back in",
          "workingLatex": "\\frac{dy}{dx} = -2\\sin(2x+1)",
          "explanation": "Replacing $u$ with $2x+1$ gives the final derivative in terms of $x$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dy}{dx} = -2\\sin(2x+1)$."
    }
  },
  {
    "id": "al.y2.pure.product-quotient-chain.q011",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Product, quotient and chain rules",
    "subtopicId": "al.y2.pure.product-quotient-chain",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "chain rule",
      "surds",
      "differentiation"
    ],
    "questionText": "Find $\\dfrac{dy}{dx}$ for $y = \\sqrt{x^2+3}$, giving your answer as a single fraction.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rewrite the root as a power",
          "workingLatex": "y = \\sqrt{x^2+3} = (x^2+3)^{1/2}",
          "explanation": "A square root is a power of $\\tfrac12$. Rewriting it this way exposes the inner expression $x^2+3$ sitting inside the half-power, so we can apply the power rule and chain rule.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Introduce the inner function as $u$",
          "workingLatex": "u = x^2+3 \\quad \\Rightarrow \\quad y = u^{1/2}",
          "explanation": "We name the inside of the root $u$, leaving the clean outer function $y=u^{1/2}$ to differentiate on its own.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate the inner function",
          "workingLatex": "\\frac{du}{dx} = 2x",
          "explanation": "Differentiating $u=x^2+3$ gives $2x$ by the power rule, and the constant $3$ contributes nothing.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Differentiate the outer function",
          "workingLatex": "\\frac{dy}{du} = \\tfrac{1}{2}u^{-1/2}",
          "explanation": "Applying the power rule to $y=u^{1/2}$ brings the $\\tfrac12$ down and reduces the exponent to $-\\tfrac12$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply the chain rule",
          "workingLatex": "\\frac{dy}{dx} = \\frac{dy}{du}\\cdot\\frac{du}{dx} = \\tfrac{1}{2}u^{-1/2}\\cdot 2x",
          "explanation": "The chain rule multiplies the outer rate by the inner rate to combine them into one derivative with respect to $x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify the constants",
          "workingLatex": "\\frac{dy}{dx} = x\\,u^{-1/2}",
          "explanation": "The factor $\\tfrac12\\times 2x$ simplifies to $x$, tidying the expression before we return to $x$ inside $u$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute back and write as a single fraction",
          "workingLatex": "\\frac{dy}{dx} = \\frac{x}{(x^2+3)^{1/2}} = \\frac{x}{\\sqrt{x^2+3}}",
          "explanation": "Replacing $u$ with $x^2+3$ and rewriting the negative power as a denominator gives the answer as a single tidy fraction.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dy}{dx} = \\dfrac{x}{\\sqrt{x^2+3}}$."
    }
  },
  {
    "id": "al.y2.pure.product-quotient-chain.q012",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Product, quotient and chain rules",
    "subtopicId": "al.y2.pure.product-quotient-chain",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "product rule",
      "exponential",
      "differentiation"
    ],
    "questionText": "Given that $y = x e^x$, find $\\dfrac{dy}{dx}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise a product and state the rule",
          "workingLatex": "\\frac{d}{dx}(uv) = u'v + uv'",
          "explanation": "$y = x e^x$ is a product of the two functions $x$ and $e^x$. Because one factor is not simply a constant multiple of the other, we differentiate it with the product rule.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Label the two factors",
          "workingLatex": "u = x, \\qquad v = e^x",
          "explanation": "Naming the factors $u$ and $v$ lets us track each piece cleanly as we apply the rule. For a product the order does not matter.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate each factor",
          "workingLatex": "u' = 1, \\qquad v' = e^x",
          "explanation": "Differentiating $x$ gives $1$ by the power rule, and $e^x$ is its own derivative — a standard result worth remembering.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the product rule",
          "workingLatex": "\\frac{dy}{dx} = u'v + uv' = (1)e^x + x e^x",
          "explanation": "Substituting into $u'v + uv'$ keeps one factor differentiated and the other unchanged in each term, then adds the two contributions.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Tidy the terms",
          "workingLatex": "\\frac{dy}{dx} = e^x + x e^x",
          "explanation": "The first term $(1)e^x$ is simply $e^x$, so we can write the derivative more neatly.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Factorise out the common term",
          "workingLatex": "\\frac{dy}{dx} = e^x(1 + x)",
          "explanation": "Both terms share a factor of $e^x$, so we take it outside a bracket. A factorised derivative is easier to read and to use later.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the derivative",
          "workingLatex": "\\frac{dy}{dx} = (1 + x)e^x",
          "explanation": "This is the fully simplified derivative of $y = x e^x$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dy}{dx} = (1 + x)e^x$."
    }
  },
  {
    "id": "al.y2.pure.product-quotient-chain.q013",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Product, quotient and chain rules",
    "subtopicId": "al.y2.pure.product-quotient-chain",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "exact",
    "tags": [
      "product rule",
      "trigonometry",
      "gradient"
    ],
    "questionText": "A curve has equation $y = x\\sin x$, where $x$ is in radians. (a) Find $\\dfrac{dy}{dx}$. (b) Find the gradient of the curve at $x = \\dfrac{\\pi}{2}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise a product and state the rule",
          "workingLatex": "\\frac{d}{dx}(uv) = u'v + uv'",
          "explanation": "$y = x\\sin x$ is a product of $x$ and $\\sin x$, so the product rule is the right tool.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Label the two factors",
          "workingLatex": "u = x, \\qquad v = \\sin x",
          "explanation": "We name the factors $u$ and $v$ so we can substitute them carefully into the rule.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate each factor",
          "workingLatex": "u' = 1, \\qquad v' = \\cos x",
          "explanation": "The derivative of $x$ is $1$, and the derivative of $\\sin x$ is $\\cos x$ — a standard trigonometric derivative in radians.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the product rule",
          "workingLatex": "\\frac{dy}{dx} = (1)\\sin x + x\\cos x",
          "explanation": "Substituting into $u'v + uv'$ gives one term with $\\sin x$ differentiated only through the first factor, and one with $\\cos x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the derivative",
          "workingLatex": "\\frac{dy}{dx} = \\sin x + x\\cos x",
          "explanation": "This tidies the answer for part (a); it is already in its simplest form.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute the given value of x",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{x=\\pi/2} = \\sin\\frac{\\pi}{2} + \\frac{\\pi}{2}\\cos\\frac{\\pi}{2}",
          "explanation": "The gradient at a point is the value of the derivative there, so we put $x = \\dfrac{\\pi}{2}$ into the expression from part (a).",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the trigonometric values",
          "workingLatex": "= 1 + \\frac{\\pi}{2}(0)",
          "explanation": "In radians $\\sin\\dfrac{\\pi}{2} = 1$ and $\\cos\\dfrac{\\pi}{2} = 0$, so the second term vanishes.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the gradient",
          "workingLatex": "\\frac{dy}{dx} = 1",
          "explanation": "The gradient of the curve at $x = \\dfrac{\\pi}{2}$ is $1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\dfrac{dy}{dx} = \\sin x + x\\cos x$. (b) The gradient at $x = \\dfrac{\\pi}{2}$ is $1$."
    }
  },
  {
    "id": "al.y2.pure.product-quotient-chain.q014",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Product, quotient and chain rules",
    "subtopicId": "al.y2.pure.product-quotient-chain",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "product rule",
      "trigonometry",
      "factorising"
    ],
    "questionText": "Given that $y = x^2\\cos x$, where $x$ is in radians, find $\\dfrac{dy}{dx}$, giving your answer in a fully factorised form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise a product and state the rule",
          "workingLatex": "\\frac{d}{dx}(uv) = u'v + uv'",
          "explanation": "$y = x^2\\cos x$ is a product of $x^2$ and $\\cos x$, so we differentiate with the product rule.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Label the two factors",
          "workingLatex": "u = x^2, \\qquad v = \\cos x",
          "explanation": "We set $u = x^2$ and $v = \\cos x$ so that each part can be differentiated separately.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate each factor",
          "workingLatex": "u' = 2x, \\qquad v' = -\\sin x",
          "explanation": "The power rule gives $u' = 2x$, and the derivative of $\\cos x$ is $-\\sin x$. The minus sign is easy to forget, so we note it carefully.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the product rule",
          "workingLatex": "\\frac{dy}{dx} = 2x\\cos x + x^2(-\\sin x)",
          "explanation": "Substituting into $u'v + uv'$ gives a first term from differentiating $x^2$ and a second term from differentiating $\\cos x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Tidy the signs",
          "workingLatex": "\\frac{dy}{dx} = 2x\\cos x - x^2\\sin x",
          "explanation": "Writing $+ x^2(-\\sin x)$ as $- x^2\\sin x$ removes the awkward double sign.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Factorise the derivative",
          "workingLatex": "\\frac{dy}{dx} = x(2\\cos x - x\\sin x)",
          "explanation": "Both terms contain a factor of $x$, so we take it outside a bracket to present the answer in fully factorised form.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the derivative",
          "workingLatex": "\\frac{dy}{dx} = x(2\\cos x - x\\sin x)",
          "explanation": "This is the fully factorised derivative of $y = x^2\\cos x$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dy}{dx} = x(2\\cos x - x\\sin x)$."
    }
  },
  {
    "id": "al.y2.pure.product-quotient-chain.q015",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Product, quotient and chain rules",
    "subtopicId": "al.y2.pure.product-quotient-chain",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "quotient rule",
      "rational function",
      "differentiation"
    ],
    "questionText": "Given that $y = \\dfrac{x}{x+1}$, find $\\dfrac{dy}{dx}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise a quotient and state the rule",
          "workingLatex": "\\frac{d}{dx}\\!\\left(\\frac{u}{v}\\right) = \\frac{u'v - uv'}{v^2}",
          "explanation": "$y = \\dfrac{x}{x+1}$ is one function divided by another, so we use the quotient rule.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Label the numerator and denominator",
          "workingLatex": "u = x, \\qquad v = x + 1",
          "explanation": "The numerator is $u$ and the denominator is $v$. Keeping this order matters, because the quotient rule is not symmetric.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate each part",
          "workingLatex": "u' = 1, \\qquad v' = 1",
          "explanation": "Both $x$ and $x + 1$ differentiate to $1$ by the power rule, since the constant $+1$ disappears.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the quotient rule",
          "workingLatex": "\\frac{dy}{dx} = \\frac{(1)(x+1) - x(1)}{(x+1)^2}",
          "explanation": "Substituting into $\\dfrac{u'v - uv'}{v^2}$ builds the numerator from the two products and squares the denominator.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the numerator",
          "workingLatex": "\\frac{dy}{dx} = \\frac{x + 1 - x}{(x+1)^2}",
          "explanation": "Expanding the top gives $x + 1 - x$, where the $x$ terms are about to cancel.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine the numerator",
          "workingLatex": "\\frac{dy}{dx} = \\frac{1}{(x+1)^2}",
          "explanation": "The $+x$ and $-x$ cancel, leaving just $1$ on top — a pleasingly simple result.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the derivative",
          "workingLatex": "\\frac{dy}{dx} = \\frac{1}{(x+1)^2}",
          "explanation": "This is the simplified derivative; note it is positive everywhere the function is defined, so the curve is always increasing.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dy}{dx} = \\dfrac{1}{(x+1)^2}$."
    }
  },
  {
    "id": "al.y2.pure.product-quotient-chain.q016",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Product, quotient and chain rules",
    "subtopicId": "al.y2.pure.product-quotient-chain",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "quotient rule",
      "exponential",
      "factorising"
    ],
    "questionText": "Given that $y = \\dfrac{e^x}{x}$, find $\\dfrac{dy}{dx}$, giving your answer as a single fraction in a fully factorised form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise a quotient and state the rule",
          "workingLatex": "\\frac{d}{dx}\\!\\left(\\frac{u}{v}\\right) = \\frac{u'v - uv'}{v^2}",
          "explanation": "$y = \\dfrac{e^x}{x}$ is a function divided by a function, so the quotient rule applies.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Label the numerator and denominator",
          "workingLatex": "u = e^x, \\qquad v = x",
          "explanation": "The numerator $e^x$ is $u$ and the denominator $x$ is $v$; keeping this order correct is essential for the quotient rule.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate each part",
          "workingLatex": "u' = e^x, \\qquad v' = 1",
          "explanation": "$e^x$ is its own derivative, and the derivative of $x$ is $1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the quotient rule",
          "workingLatex": "\\frac{dy}{dx} = \\frac{e^x\\cdot x - e^x\\cdot 1}{x^2}",
          "explanation": "Substituting into $\\dfrac{u'v - uv'}{v^2}$ places $u'v$ then $-uv'$ on top and squares the denominator.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the numerator",
          "workingLatex": "\\frac{dy}{dx} = \\frac{x e^x - e^x}{x^2}",
          "explanation": "We write the two products more simply as $x e^x$ and $e^x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Factorise the numerator",
          "workingLatex": "\\frac{dy}{dx} = \\frac{e^x(x - 1)}{x^2}",
          "explanation": "Both terms on top share a factor of $e^x$, so we take it outside a bracket to present a single factorised fraction.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the derivative",
          "workingLatex": "\\frac{dy}{dx} = \\frac{e^x(x - 1)}{x^2}",
          "explanation": "This is the fully factorised derivative of $y = \\dfrac{e^x}{x}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dy}{dx} = \\dfrac{e^x(x - 1)}{x^2}$."
    }
  },
  {
    "id": "al.y2.pure.product-quotient-chain.q017",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Product, quotient and chain rules",
    "subtopicId": "al.y2.pure.product-quotient-chain",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "exact",
    "tags": [
      "product rule",
      "logarithm",
      "gradient"
    ],
    "questionText": "A curve has equation $y = x\\ln x$ for $x>0$. (a) Find $\\dfrac{dy}{dx}$. (b) Find the gradient of the curve at the point where $x=1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise a product and state the rule",
          "workingLatex": "\\frac{d}{dx}(uv) = u'v + uv'",
          "explanation": "$y = x\\ln x$ is a product of $x$ and $\\ln x$, so we differentiate with the product rule.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Label the two factors",
          "workingLatex": "u = x, \\qquad v = \\ln x",
          "explanation": "We set $u = x$ and $v = \\ln x$ ready to substitute into the rule.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate each factor",
          "workingLatex": "u' = 1, \\qquad v' = \\frac{1}{x}",
          "explanation": "The derivative of $x$ is $1$, and the derivative of $\\ln x$ is $\\dfrac{1}{x}$ — a standard result valid for $x>0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the product rule",
          "workingLatex": "\\frac{dy}{dx} = (1)\\ln x + x\\cdot\\frac{1}{x}",
          "explanation": "Substituting into $u'v + uv'$ gives one term with $\\ln x$ and one term where $x$ multiplies $\\dfrac{1}{x}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the derivative",
          "workingLatex": "\\frac{dy}{dx} = \\ln x + 1",
          "explanation": "The product $x\\cdot\\dfrac{1}{x}$ equals $1$, giving the neat derivative for part (a).",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute the given value of x",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{x=1} = \\ln 1 + 1",
          "explanation": "The gradient at a point is the derivative evaluated there, so we put $x = 1$ into $\\ln x + 1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the logarithm",
          "workingLatex": "= 0 + 1",
          "explanation": "Since $\\ln 1 = 0$ (because $e^0 = 1$), the logarithm term disappears.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the gradient",
          "workingLatex": "\\frac{dy}{dx} = 1",
          "explanation": "The gradient of the curve at $x = 1$ is $1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\dfrac{dy}{dx} = \\ln x + 1$. (b) The gradient at $x = 1$ is $1$."
    }
  },
  {
    "id": "al.y2.pure.product-quotient-chain.q018",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Product, quotient and chain rules",
    "subtopicId": "al.y2.pure.product-quotient-chain",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "quotient rule",
      "rational function",
      "differentiation"
    ],
    "questionText": "Given that $y = \\dfrac{2x+1}{x-3}$, find $\\dfrac{dy}{dx}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise a quotient and state the rule",
          "workingLatex": "\\frac{d}{dx}\\!\\left(\\frac{u}{v}\\right) = \\frac{u'v - uv'}{v^2}",
          "explanation": "$y = \\dfrac{2x+1}{x-3}$ is one linear expression divided by another, so we use the quotient rule.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Label the numerator and denominator",
          "workingLatex": "u = 2x + 1, \\qquad v = x - 3",
          "explanation": "The numerator is $u$ and the denominator is $v$. The order matters because the quotient rule has a subtraction on top.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate each part",
          "workingLatex": "u' = 2, \\qquad v' = 1",
          "explanation": "Differentiating $2x + 1$ gives $2$, and differentiating $x - 3$ gives $1$; the constants disappear.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the quotient rule",
          "workingLatex": "\\frac{dy}{dx} = \\frac{2(x-3) - (2x+1)(1)}{(x-3)^2}",
          "explanation": "Substituting into $\\dfrac{u'v - uv'}{v^2}$ builds the numerator as $u'v$ minus $uv'$, over the square of the denominator.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Expand the numerator",
          "workingLatex": "\\frac{dy}{dx} = \\frac{2x - 6 - 2x - 1}{(x-3)^2}",
          "explanation": "We multiply out both brackets, being careful that the minus sign applies to all of $(2x+1)$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify the numerator",
          "workingLatex": "\\frac{dy}{dx} = \\frac{-7}{(x-3)^2}",
          "explanation": "The $2x$ and $-2x$ cancel, leaving $-6 - 1 = -7$ on top.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the derivative",
          "workingLatex": "\\frac{dy}{dx} = -\\frac{7}{(x-3)^2}",
          "explanation": "This is the simplified derivative; it is negative wherever the function is defined, so the curve is always decreasing.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dy}{dx} = -\\dfrac{7}{(x-3)^2}$."
    }
  },
  {
    "id": "al.y2.pure.product-quotient-chain.q019",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Product, quotient and chain rules",
    "subtopicId": "al.y2.pure.product-quotient-chain",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "product rule",
      "exponential",
      "factorising"
    ],
    "questionText": "Given that $y = (x+1)e^x$, find $\\dfrac{dy}{dx}$, giving your answer in a fully factorised form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise a product and state the rule",
          "workingLatex": "\\frac{d}{dx}(uv) = u'v + uv'",
          "explanation": "$y = (x+1)e^x$ is a product of $(x+1)$ and $e^x$, so we differentiate with the product rule.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Label the two factors",
          "workingLatex": "u = x + 1, \\qquad v = e^x",
          "explanation": "We set $u = x + 1$ and $v = e^x$ so each factor can be differentiated on its own.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate each factor",
          "workingLatex": "u' = 1, \\qquad v' = e^x",
          "explanation": "The derivative of $x + 1$ is $1$, and $e^x$ is its own derivative.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the product rule",
          "workingLatex": "\\frac{dy}{dx} = (1)e^x + (x+1)e^x",
          "explanation": "Substituting into $u'v + uv'$ gives one term from differentiating the bracket and one from differentiating $e^x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Tidy the terms",
          "workingLatex": "\\frac{dy}{dx} = e^x + (x+1)e^x",
          "explanation": "The first term $(1)e^x$ is simply $e^x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Factorise out the common term",
          "workingLatex": "\\frac{dy}{dx} = e^x(1 + x + 1) = e^x(x + 2)",
          "explanation": "Both terms share a factor of $e^x$; taking it out and collecting the constants $1 + 1 = 2$ inside the bracket gives $x + 2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the derivative",
          "workingLatex": "\\frac{dy}{dx} = (x + 2)e^x",
          "explanation": "This is the fully factorised derivative of $y = (x+1)e^x$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dy}{dx} = (x + 2)e^x$."
    }
  },
  {
    "id": "al.y2.pure.product-quotient-chain.q020",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Product, quotient and chain rules",
    "subtopicId": "al.y2.pure.product-quotient-chain",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "quotient rule",
      "rational function",
      "differentiation"
    ],
    "questionText": "Given that $y = \\dfrac{x}{x^2+1}$, find $\\dfrac{dy}{dx}$, giving your answer as a single simplified fraction.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise a quotient and state the rule",
          "workingLatex": "\\frac{d}{dx}\\!\\left(\\frac{u}{v}\\right) = \\frac{u'v - uv'}{v^2}",
          "explanation": "$y = \\dfrac{x}{x^2+1}$ is a function divided by a function, so the quotient rule applies.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Label the numerator and denominator",
          "workingLatex": "u = x, \\qquad v = x^2 + 1",
          "explanation": "The numerator is $u = x$ and the denominator is $v = x^2 + 1$; keeping this order right is important.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate each part",
          "workingLatex": "u' = 1, \\qquad v' = 2x",
          "explanation": "The derivative of $x$ is $1$, and the power rule gives the derivative of $x^2 + 1$ as $2x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the quotient rule",
          "workingLatex": "\\frac{dy}{dx} = \\frac{(1)(x^2+1) - x(2x)}{(x^2+1)^2}",
          "explanation": "Substituting into $\\dfrac{u'v - uv'}{v^2}$ places $u'v$ minus $uv'$ on top and squares the denominator.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Expand the numerator",
          "workingLatex": "\\frac{dy}{dx} = \\frac{x^2 + 1 - 2x^2}{(x^2+1)^2}",
          "explanation": "Multiplying out gives $x^2 + 1$ from the first product and $-2x^2$ from the second.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify the numerator",
          "workingLatex": "\\frac{dy}{dx} = \\frac{1 - x^2}{(x^2+1)^2}",
          "explanation": "Combining $x^2 - 2x^2$ gives $-x^2$, leaving $1 - x^2$ on top.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the derivative",
          "workingLatex": "\\frac{dy}{dx} = \\frac{1 - x^2}{(x^2+1)^2}",
          "explanation": "This is the derivative as a single simplified fraction.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dy}{dx} = \\dfrac{1 - x^2}{(x^2+1)^2}$."
    }
  },
  {
    "id": "al.y2.pure.product-quotient-chain.q021",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Product, quotient and chain rules",
    "subtopicId": "al.y2.pure.product-quotient-chain",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "product rule",
      "trigonometry",
      "differentiation"
    ],
    "questionText": "Given that $y = (2x-1)\\cos x$, where $x$ is in radians, find $\\dfrac{dy}{dx}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise a product and state the rule",
          "workingLatex": "\\frac{d}{dx}(uv) = u'v + uv'",
          "explanation": "$y = (2x-1)\\cos x$ is a product of $(2x-1)$ and $\\cos x$, so we differentiate with the product rule.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Label the two factors",
          "workingLatex": "u = 2x - 1, \\qquad v = \\cos x",
          "explanation": "We set $u = 2x - 1$ and $v = \\cos x$ ready to substitute into the rule.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate the first factor",
          "workingLatex": "u' = 2",
          "explanation": "Differentiating $2x - 1$ gives $2$, since the constant $-1$ disappears.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Differentiate the second factor",
          "workingLatex": "v' = -\\sin x",
          "explanation": "The derivative of $\\cos x$ is $-\\sin x$; the minus sign is important to carry through.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply the product rule",
          "workingLatex": "\\frac{dy}{dx} = (2)\\cos x + (2x-1)(-\\sin x)",
          "explanation": "Substituting into $u'v + uv'$ gives one term from differentiating the bracket and one from differentiating $\\cos x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Tidy the signs",
          "workingLatex": "\\frac{dy}{dx} = 2\\cos x - (2x-1)\\sin x",
          "explanation": "Writing $+ (2x-1)(-\\sin x)$ as $- (2x-1)\\sin x$ removes the double sign.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the derivative",
          "workingLatex": "\\frac{dy}{dx} = 2\\cos x - (2x-1)\\sin x",
          "explanation": "This is the fully simplified derivative of $y = (2x-1)\\cos x$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dy}{dx} = 2\\cos x - (2x-1)\\sin x$."
    }
  },
  {
    "id": "al.y2.pure.product-quotient-chain.q022",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Product, quotient and chain rules",
    "subtopicId": "al.y2.pure.product-quotient-chain",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "exact",
    "tags": [
      "quotient rule",
      "rational function",
      "gradient"
    ],
    "questionText": "A curve has equation $y = \\dfrac{x-1}{x+2}$. (a) Find $\\dfrac{dy}{dx}$. (b) Find the gradient of the curve at the point where $x=0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise a quotient and state the rule",
          "workingLatex": "\\frac{d}{dx}\\!\\left(\\frac{u}{v}\\right) = \\frac{u'v - uv'}{v^2}",
          "explanation": "$y = \\dfrac{x-1}{x+2}$ is one linear expression divided by another, so we use the quotient rule.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Label the numerator and denominator",
          "workingLatex": "u = x - 1, \\qquad v = x + 2",
          "explanation": "The numerator is $u$ and the denominator is $v$. The subtraction on top of the rule means this order matters.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate each part",
          "workingLatex": "u' = 1, \\qquad v' = 1",
          "explanation": "Both $x - 1$ and $x + 2$ differentiate to $1$, since the constants disappear.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the quotient rule",
          "workingLatex": "\\frac{dy}{dx} = \\frac{(1)(x+2) - (x-1)(1)}{(x+2)^2}",
          "explanation": "Substituting into $\\dfrac{u'v - uv'}{v^2}$ builds the numerator as $u'v$ minus $uv'$, over the square of the denominator.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Expand the numerator",
          "workingLatex": "\\frac{dy}{dx} = \\frac{x + 2 - x + 1}{(x+2)^2}",
          "explanation": "We multiply out, taking care that the minus sign turns $-(x-1)$ into $-x + 1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify the numerator",
          "workingLatex": "\\frac{dy}{dx} = \\frac{3}{(x+2)^2}",
          "explanation": "The $+x$ and $-x$ cancel, leaving $2 + 1 = 3$ on top.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute the given value of x",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{x=0} = \\frac{3}{(0+2)^2} = \\frac{3}{4}",
          "explanation": "The gradient at a point is the derivative evaluated there, so we put $x = 0$ into $\\dfrac{3}{(x+2)^2}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the gradient",
          "workingLatex": "\\frac{dy}{dx} = \\frac{3}{4}",
          "explanation": "The gradient of the curve at $x = 0$ is $\\dfrac{3}{4}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\dfrac{dy}{dx} = \\dfrac{3}{(x+2)^2}$. (b) The gradient at $x = 0$ is $\\dfrac{3}{4}$."
    }
  },
  {
    "id": "al.y2.pure.product-quotient-chain.q023",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Product, quotient and chain rules",
    "subtopicId": "al.y2.pure.product-quotient-chain",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "chain rule",
      "exponential",
      "gradient"
    ],
    "questionText": "The curve $C$ has equation $y = e^{3x^2}$. (a) Find $\\dfrac{dy}{dx}$. (b) Hence find the exact gradient of $C$ at the point where $x = 1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise the composite structure",
          "workingLatex": "y = e^{3x^2}",
          "explanation": "The exponent $3x^2$ is itself a function of $x$, so $y=e^{3x^2}$ is a composite function. That tells us to use the chain rule $\\dfrac{dy}{dx}=\\dfrac{dy}{du}\\cdot\\dfrac{du}{dx}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose the inner substitution",
          "workingLatex": "u = 3x^2",
          "explanation": "We let $u$ be the inner function, the exponent $3x^2$. Naming it $u$ lets us peel the composite apart into two simple pieces.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the outer function in terms of u",
          "workingLatex": "y = e^{u}",
          "explanation": "With $u=3x^2$ the outer function is just $y=e^{u}$, one of the standard functions we can differentiate directly.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Differentiate the outer function",
          "workingLatex": "\\frac{dy}{du} = e^{u}",
          "explanation": "The exponential $e^{u}$ is its own derivative with respect to $u$, so $\\dfrac{dy}{du}=e^{u}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Differentiate the inner function",
          "workingLatex": "\\frac{du}{dx} = 6x",
          "explanation": "Differentiating $u=3x^2$ by the power rule brings the $2$ down and reduces the power, giving $6x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply the chain rule",
          "workingLatex": "\\frac{dy}{dx} = \\frac{dy}{du}\\cdot\\frac{du}{dx} = e^{u}\\cdot 6x",
          "explanation": "The chain rule multiplies the two rates of change together: how fast $y$ changes with $u$, times how fast $u$ changes with $x$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute u back in terms of x",
          "workingLatex": "\\frac{dy}{dx} = 6x\\,e^{3x^2}",
          "explanation": "Replacing $u$ with $3x^2$ writes the derivative purely in terms of $x$. This is the answer to part (a).",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute x = 1 to find the gradient",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{x=1} = 6(1)\\,e^{3(1)^2}",
          "explanation": "The gradient at a point is simply the value of the derivative there, so we substitute $x=1$ into $\\dfrac{dy}{dx}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Simplify the exponent and coefficient",
          "workingLatex": "= 6\\,e^{3}",
          "explanation": "Since $3(1)^2=3$ and $6(1)=6$, the gradient collapses to the exact value $6e^{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Interpret the exact value",
          "workingLatex": "6e^{3} \\approx 120.5",
          "explanation": "Leaving the answer as $6e^{3}$ keeps it exact; numerically it is about $120.5$, a steep positive gradient at $x=1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\dfrac{dy}{dx} = 6x\\,e^{3x^2}$. (b) The exact gradient at $x=1$ is $6e^{3}\\ (\\approx 120.5)$."
    }
  },
  {
    "id": "al.y2.pure.product-quotient-chain.q024",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Product, quotient and chain rules",
    "subtopicId": "al.y2.pure.product-quotient-chain",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "chain rule",
      "stationary points",
      "polynomial"
    ],
    "questionText": "A curve has equation $y = (2x^2 - 1)^4$. Find the coordinates of the stationary points of the curve.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise the composite and choose the chain rule",
          "workingLatex": "y = (2x^2 - 1)^4",
          "explanation": "A bracket raised to a power, where the bracket contains $x$, is a composite function. We differentiate it with the chain rule.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose the inner substitution",
          "workingLatex": "u = 2x^2 - 1, \\qquad y = u^4",
          "explanation": "Let $u$ be the inside of the bracket. Then $y=u^4$ is a simple power of $u$, ready for the power rule.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate the outer function",
          "workingLatex": "\\frac{dy}{du} = 4u^{3}",
          "explanation": "Differentiating $u^4$ with respect to $u$ brings the $4$ down and lowers the power to $3$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Differentiate the inner function",
          "workingLatex": "\\frac{du}{dx} = 4x",
          "explanation": "Differentiating $u=2x^2-1$ gives $4x$; the constant $-1$ disappears.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply the chain rule",
          "workingLatex": "\\frac{dy}{dx} = 4u^{3}\\cdot 4x = 16x\\,(2x^2 - 1)^{3}",
          "explanation": "Multiplying the two derivatives and substituting $u=2x^2-1$ back gives the gradient function in terms of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Set the derivative equal to zero",
          "workingLatex": "16x\\,(2x^2 - 1)^{3} = 0",
          "explanation": "Stationary points occur where the gradient is zero. The derivative is already a product, so it is zero exactly when one of its factors is zero.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve the first factor",
          "workingLatex": "16x = 0 \\;\\Rightarrow\\; x = 0",
          "explanation": "The factor $16x$ vanishes only when $x=0$, giving one candidate.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve the second factor",
          "workingLatex": "2x^2 - 1 = 0 \\;\\Rightarrow\\; x^2 = \\tfrac{1}{2} \\;\\Rightarrow\\; x = \\pm\\frac{1}{\\sqrt{2}}",
          "explanation": "The cubed bracket is zero when $2x^2-1=0$. Solving gives $x=\\pm\\dfrac{1}{\\sqrt{2}}=\\pm\\dfrac{\\sqrt{2}}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the y-coordinate at x = 0",
          "workingLatex": "y = (2(0)^2 - 1)^4 = (-1)^4 = 1",
          "explanation": "Substituting $x=0$ into $y=(2x^2-1)^4$ gives $y=1$, so one stationary point is $(0,1)$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Find the y-coordinates at x = \\pm 1/\\sqrt 2",
          "workingLatex": "y = \\left(2\\cdot\\tfrac{1}{2} - 1\\right)^4 = 0^4 = 0",
          "explanation": "At $x=\\pm\\dfrac{1}{\\sqrt{2}}$ the bracket $2x^2-1$ equals $0$, so $y=0$ for both.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the stationary points",
          "workingLatex": "(0,\\,1), \\quad \\left(\\tfrac{1}{\\sqrt{2}},\\,0\\right), \\quad \\left(-\\tfrac{1}{\\sqrt{2}},\\,0\\right)",
          "explanation": "Collecting the results, the curve has three stationary points: one at $(0,1)$ and two on the $x$-axis at $x=\\pm\\dfrac{1}{\\sqrt{2}}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Stationary points at $(0,1)$, $\\left(\\dfrac{1}{\\sqrt{2}},0\\right)$ and $\\left(-\\dfrac{1}{\\sqrt{2}},0\\right)$ (with $\\dfrac{dy}{dx}=16x(2x^2-1)^3$)."
    }
  },
  {
    "id": "al.y2.pure.product-quotient-chain.q025",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Product, quotient and chain rules",
    "subtopicId": "al.y2.pure.product-quotient-chain",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "chain rule",
      "logarithm",
      "tangent"
    ],
    "questionText": "The curve $C$ has equation $y = \\ln(x^2 + 3)$. Find the equation of the tangent to $C$ at the point where $x = 1$, giving your answer in the form $y = mx + c$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise the composite and choose the chain rule",
          "workingLatex": "y = \\ln(x^2 + 3)",
          "explanation": "We are taking $\\ln$ of a function of $x$, so $y$ is a composite. Differentiate with the chain rule.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose the inner substitution",
          "workingLatex": "u = x^2 + 3, \\qquad y = \\ln u",
          "explanation": "Let $u$ be the argument of the logarithm. Then $y=\\ln u$ is a standard function of $u$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate the outer function",
          "workingLatex": "\\frac{dy}{du} = \\frac{1}{u}",
          "explanation": "The derivative of $\\ln u$ with respect to $u$ is $\\dfrac{1}{u}$, a standard result.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Differentiate the inner function",
          "workingLatex": "\\frac{du}{dx} = 2x",
          "explanation": "Differentiating $u=x^2+3$ gives $2x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply the chain rule",
          "workingLatex": "\\frac{dy}{dx} = \\frac{1}{u}\\cdot 2x = \\frac{2x}{x^2 + 3}",
          "explanation": "Multiplying the derivatives and substituting $u=x^2+3$ back gives the gradient function.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the gradient at x = 1",
          "workingLatex": "m = \\frac{2(1)}{(1)^2 + 3} = \\frac{2}{4} = \\frac{1}{2}",
          "explanation": "Substituting $x=1$ into the derivative gives the gradient of the tangent, $m=\\tfrac{1}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the y-coordinate at x = 1",
          "workingLatex": "y = \\ln((1)^2 + 3) = \\ln 4",
          "explanation": "Substituting $x=1$ into the curve gives the point of contact $(1,\\ln 4)$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the point-gradient form of the tangent",
          "workingLatex": "y - \\ln 4 = \\tfrac{1}{2}(x - 1)",
          "explanation": "A straight line through $(1,\\ln 4)$ with gradient $\\tfrac{1}{2}$ has equation $y-y_1=m(x-x_1)$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Expand the bracket",
          "workingLatex": "y = \\tfrac{1}{2}x - \\tfrac{1}{2} + \\ln 4",
          "explanation": "Multiplying out $\\tfrac{1}{2}(x-1)$ and moving $\\ln 4$ across rearranges the line towards $y=mx+c$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the tangent equation",
          "workingLatex": "y = \\tfrac{1}{2}x + \\left(\\ln 4 - \\tfrac{1}{2}\\right)",
          "explanation": "In the form $y=mx+c$ the gradient is $\\tfrac{1}{2}$ and the exact intercept is $c=\\ln 4-\\tfrac{1}{2}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dy}{dx}=\\dfrac{2x}{x^2+3}$, and the tangent at $x=1$ is $y = \\tfrac{1}{2}x + \\left(\\ln 4 - \\tfrac{1}{2}\\right)$."
    }
  },
  {
    "id": "al.y2.pure.product-quotient-chain.q026",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Product, quotient and chain rules",
    "subtopicId": "al.y2.pure.product-quotient-chain",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "chain rule",
      "surd",
      "gradient"
    ],
    "questionText": "The curve $C$ has equation $y = \\sqrt{x^2 + 1}$. (a) Find $\\dfrac{dy}{dx}$. (b) Find the exact gradient of $C$ at the point where $x = 2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rewrite the surd as a power",
          "workingLatex": "y = (x^2 + 1)^{1/2}",
          "explanation": "Writing the square root as a power of $\\tfrac{1}{2}$ lets us use the power rule together with the chain rule.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose the inner substitution",
          "workingLatex": "u = x^2 + 1, \\qquad y = u^{1/2}",
          "explanation": "Let $u$ be the inside of the root; then $y=u^{1/2}$ is a simple power of $u$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate the outer function",
          "workingLatex": "\\frac{dy}{du} = \\tfrac{1}{2}u^{-1/2}",
          "explanation": "Differentiating $u^{1/2}$ brings the $\\tfrac{1}{2}$ down and lowers the power to $-\\tfrac{1}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Differentiate the inner function",
          "workingLatex": "\\frac{du}{dx} = 2x",
          "explanation": "Differentiating $u=x^2+1$ gives $2x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply the chain rule",
          "workingLatex": "\\frac{dy}{dx} = \\tfrac{1}{2}u^{-1/2}\\cdot 2x = x\\,u^{-1/2}",
          "explanation": "Multiplying the two derivatives, the $\\tfrac{1}{2}$ and the $2$ cancel, leaving $x\\,u^{-1/2}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute u back and rewrite as a fraction",
          "workingLatex": "\\frac{dy}{dx} = \\frac{x}{\\sqrt{x^2 + 1}}",
          "explanation": "Replacing $u=x^2+1$ and turning the negative power back into a root gives the derivative for part (a).",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute x = 2",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{x=2} = \\frac{2}{\\sqrt{(2)^2 + 1}} = \\frac{2}{\\sqrt{5}}",
          "explanation": "The gradient at $x=2$ is the derivative evaluated there; $2^2+1=5$ inside the root.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Rationalise the denominator",
          "workingLatex": "\\frac{2}{\\sqrt{5}} = \\frac{2\\sqrt{5}}{5}",
          "explanation": "Multiplying top and bottom by $\\sqrt{5}$ clears the surd from the denominator, giving the exact gradient.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the exact gradient",
          "workingLatex": "\\frac{dy}{dx} = \\frac{2\\sqrt{5}}{5} \\approx 0.894",
          "explanation": "So the exact gradient at $x=2$ is $\\dfrac{2\\sqrt{5}}{5}$, about $0.894$.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\dfrac{dy}{dx} = \\dfrac{x}{\\sqrt{x^2+1}}$. (b) At $x=2$ the exact gradient is $\\dfrac{2\\sqrt{5}}{5}\\ (\\approx 0.894)$."
    }
  },
  {
    "id": "al.y2.pure.product-quotient-chain.q027",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Product, quotient and chain rules",
    "subtopicId": "al.y2.pure.product-quotient-chain",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "chain rule",
      "stationary points",
      "exponential"
    ],
    "questionText": "The curve $C$ has equation $y = e^{-x^2}$. (a) Find the coordinates of the stationary point of $C$. (b) Determine its nature.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the chain rule",
          "workingLatex": "u = -x^2, \\qquad y = e^{u}",
          "explanation": "The exponent $-x^2$ is a function of $x$, so $y=e^{-x^2}$ is composite. Let $u=-x^2$ and $y=e^{u}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate outer and inner",
          "workingLatex": "\\frac{dy}{du} = e^{u}, \\qquad \\frac{du}{dx} = -2x",
          "explanation": "The exponential is its own derivative, and differentiating $u=-x^2$ gives $-2x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the chain rule",
          "workingLatex": "\\frac{dy}{dx} = e^{u}\\cdot(-2x) = -2x\\,e^{-x^2}",
          "explanation": "Multiplying the two derivatives and substituting $u=-x^2$ back gives the gradient function.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set the derivative to zero",
          "workingLatex": "-2x\\,e^{-x^2} = 0",
          "explanation": "Stationary points occur where the gradient is zero, so we solve $-2x\\,e^{-x^2}=0$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Use that the exponential is never zero",
          "workingLatex": "e^{-x^2} > 0 \\;\\Rightarrow\\; -2x = 0 \\;\\Rightarrow\\; x = 0",
          "explanation": "Since $e^{-x^2}$ is always positive it can never be zero, so only the factor $-2x$ can vanish, giving $x=0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the y-coordinate",
          "workingLatex": "y = e^{-(0)^2} = e^{0} = 1",
          "explanation": "Substituting $x=0$ into $y=e^{-x^2}$ gives $y=1$, so the stationary point is $(0,1)$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Differentiate again using the product rule",
          "workingLatex": "\\frac{d^2y}{dx^2} = \\frac{d}{dx}\\!\\left(-2x\\,e^{-x^2}\\right), \\quad a=-2x,\\; b=e^{-x^2}",
          "explanation": "To classify the point we need the second derivative. The first derivative is a product $-2x$ times $e^{-x^2}$, so we use the product rule with $a=-2x$ and $b=e^{-x^2}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Differentiate each factor",
          "workingLatex": "a' = -2, \\qquad b' = -2x\\,e^{-x^2}",
          "explanation": "Differentiating $a=-2x$ gives $-2$; differentiating $b=e^{-x^2}$ repeats the earlier chain-rule result $-2x\\,e^{-x^2}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Assemble the second derivative",
          "workingLatex": "\\frac{d^2y}{dx^2} = a'b + ab' = -2e^{-x^2} + 4x^2 e^{-x^2} = (4x^2 - 2)e^{-x^2}",
          "explanation": "Combining $a'b+ab'$ and factoring out $e^{-x^2}$ gives $(4x^2-2)e^{-x^2}$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Evaluate the second derivative at x = 0",
          "workingLatex": "\\left.\\frac{d^2y}{dx^2}\\right|_{x=0} = (4(0)^2 - 2)e^{0} = -2 < 0",
          "explanation": "At $x=0$ the second derivative is $-2$, which is negative.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Classify the stationary point",
          "workingLatex": "\\frac{d^2y}{dx^2} < 0 \\;\\Rightarrow\\; \\text{maximum at } (0,1)",
          "explanation": "A negative second derivative means the curve is concave down, so $(0,1)$ is a maximum point.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) The stationary point is $(0,1)$. (b) Since $\\dfrac{d^2y}{dx^2}=-2<0$ there, it is a maximum."
    }
  },
  {
    "id": "al.y2.pure.product-quotient-chain.q028",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Product, quotient and chain rules",
    "subtopicId": "al.y2.pure.product-quotient-chain",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "proof",
    "tags": [
      "chain rule",
      "trigonometry",
      "proof"
    ],
    "questionText": "Given that $y = \\sin^2 x$, show that $\\dfrac{dy}{dx} = \\sin 2x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rewrite the function to expose the composite",
          "workingLatex": "y = \\sin^2 x = (\\sin x)^2",
          "explanation": "Writing $\\sin^2 x$ as $(\\sin x)^2$ shows it is a squared function of $\\sin x$, so it is a composite and the chain rule applies.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose the inner substitution",
          "workingLatex": "u = \\sin x, \\qquad y = u^2",
          "explanation": "Let $u=\\sin x$ be the inner function; then $y=u^2$ is a simple square, ready for the power rule.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate the outer function",
          "workingLatex": "\\frac{dy}{du} = 2u",
          "explanation": "Differentiating $y=u^2$ with respect to $u$ gives $2u$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Differentiate the inner function",
          "workingLatex": "\\frac{du}{dx} = \\cos x",
          "explanation": "The derivative of $\\sin x$ (in radians) is $\\cos x$, a standard result.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply the chain rule",
          "workingLatex": "\\frac{dy}{dx} = \\frac{dy}{du}\\cdot\\frac{du}{dx} = 2u\\cos x",
          "explanation": "The chain rule multiplies the two derivatives: $2u$ from the outer square and $\\cos x$ from the inner sine.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute u back in terms of x",
          "workingLatex": "\\frac{dy}{dx} = 2\\sin x\\cos x",
          "explanation": "Replacing $u=\\sin x$ writes the derivative purely in terms of $x$ as $2\\sin x\\cos x$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Recall the double-angle identity",
          "workingLatex": "\\sin 2x = 2\\sin x\\cos x",
          "explanation": "The double-angle formula for sine states $\\sin 2x = 2\\sin x\\cos x$; the right-hand side is exactly what we obtained.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the derivative in double-angle form",
          "workingLatex": "\\frac{dy}{dx} = 2\\sin x\\cos x = \\sin 2x",
          "explanation": "Replacing $2\\sin x\\cos x$ by $\\sin 2x$ writes the derivative as a single compact term, which is exactly the form we were asked to reach.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify with a sample value",
          "workingLatex": "x=\\tfrac{\\pi}{6}:\\quad 2\\sin\\tfrac{\\pi}{6}\\cos\\tfrac{\\pi}{6} = 2\\cdot\\tfrac{1}{2}\\cdot\\tfrac{\\sqrt{3}}{2} = \\tfrac{\\sqrt{3}}{2}, \\qquad \\sin\\tfrac{\\pi}{3} = \\tfrac{\\sqrt{3}}{2} ;\\checkmark",
          "explanation": "As a check, at $x=\\tfrac{\\pi}{6}$ both $2\\sin x\\cos x$ and $\\sin 2x$ evaluate to $\\tfrac{\\sqrt{3}}{2}$, confirming the double-angle step and completing the proof.",
          "diagram": null
        }
      ],
      "finalAnswer": "Using the chain rule, $\\dfrac{dy}{dx}=2\\sin x\\cos x$, and by the double-angle identity this equals $\\sin 2x$, as required."
    }
  },
  {
    "id": "al.y2.pure.product-quotient-chain.q029",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Product, quotient and chain rules",
    "subtopicId": "al.y2.pure.product-quotient-chain",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "chain rule",
      "trigonometry",
      "gradient"
    ],
    "questionText": "The curve $C$ has equation $y = \\cos^3 x$, where $x$ is measured in radians. (a) Find $\\dfrac{dy}{dx}$. (b) Find the exact gradient of $C$ at the point where $x = \\dfrac{\\pi}{3}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rewrite the function to expose the composite",
          "workingLatex": "y = \\cos^3 x = (\\cos x)^3",
          "explanation": "Writing $\\cos^3 x$ as $(\\cos x)^3$ shows it is a cube of a function of $x$, a composite that needs the chain rule.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose the inner substitution",
          "workingLatex": "u = \\cos x, \\qquad y = u^3",
          "explanation": "Let $u=\\cos x$; then $y=u^3$ is a simple power of $u$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate the outer function",
          "workingLatex": "\\frac{dy}{du} = 3u^2",
          "explanation": "Differentiating $u^3$ with respect to $u$ gives $3u^2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Differentiate the inner function",
          "workingLatex": "\\frac{du}{dx} = -\\sin x",
          "explanation": "The derivative of $\\cos x$ (in radians) is $-\\sin x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply the chain rule",
          "workingLatex": "\\frac{dy}{dx} = 3u^2\\cdot(-\\sin x) = -3\\cos^2 x\\,\\sin x",
          "explanation": "Multiplying the two derivatives and substituting $u=\\cos x$ gives the gradient function for part (a).",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute x = pi/3",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{x=\\pi/3} = -3\\cos^2\\!\\left(\\tfrac{\\pi}{3}\\right)\\sin\\!\\left(\\tfrac{\\pi}{3}\\right)",
          "explanation": "The gradient at the point is the derivative evaluated at $x=\\tfrac{\\pi}{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Insert the exact trig values",
          "workingLatex": "\\cos\\tfrac{\\pi}{3} = \\tfrac{1}{2}, \\qquad \\sin\\tfrac{\\pi}{3} = \\tfrac{\\sqrt{3}}{2}",
          "explanation": "From the standard exact values, $\\cos\\tfrac{\\pi}{3}=\\tfrac{1}{2}$ and $\\sin\\tfrac{\\pi}{3}=\\tfrac{\\sqrt{3}}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute the values",
          "workingLatex": "= -3\\left(\\tfrac{1}{2}\\right)^2\\left(\\tfrac{\\sqrt{3}}{2}\\right) = -3\\cdot\\tfrac{1}{4}\\cdot\\tfrac{\\sqrt{3}}{2}",
          "explanation": "Squaring $\\tfrac{1}{2}$ gives $\\tfrac{1}{4}$; now multiply the three factors together.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Simplify to the exact gradient",
          "workingLatex": "= -\\frac{3\\sqrt{3}}{8}",
          "explanation": "Multiplying $3\\cdot\\tfrac{1}{4}\\cdot\\tfrac{\\sqrt{3}}{2}$ gives $\\dfrac{3\\sqrt{3}}{8}$, and the sign is negative.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the exact gradient",
          "workingLatex": "\\frac{dy}{dx} = -\\frac{3\\sqrt{3}}{8} \\approx -0.650",
          "explanation": "So the exact gradient at $x=\\tfrac{\\pi}{3}$ is $-\\dfrac{3\\sqrt{3}}{8}$, about $-0.650$ (the curve is falling there).",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\dfrac{dy}{dx} = -3\\cos^2 x\\,\\sin x$. (b) At $x=\\tfrac{\\pi}{3}$ the exact gradient is $-\\dfrac{3\\sqrt{3}}{8}\\ (\\approx -0.650)$."
    }
  },
  {
    "id": "al.y2.pure.product-quotient-chain.q030",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Product, quotient and chain rules",
    "subtopicId": "al.y2.pure.product-quotient-chain",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "chain rule",
      "exponential",
      "tangent"
    ],
    "questionText": "The curve $C$ has equation $y = e^{\\sin x}$. Find the equation of the tangent to $C$ at the point where $x = 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise the composite and set up the chain rule",
          "workingLatex": "u = \\sin x, \\qquad y = e^{u}",
          "explanation": "The exponent $\\sin x$ is a function of $x$, so $y=e^{\\sin x}$ is composite. Let $u=\\sin x$ and $y=e^{u}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate the outer function",
          "workingLatex": "\\frac{dy}{du} = e^{u}",
          "explanation": "The exponential $e^{u}$ is its own derivative with respect to $u$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate the inner function",
          "workingLatex": "\\frac{du}{dx} = \\cos x",
          "explanation": "The derivative of $\\sin x$ (radians) is $\\cos x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the chain rule",
          "workingLatex": "\\frac{dy}{dx} = e^{u}\\cos x = \\cos x\\,e^{\\sin x}",
          "explanation": "Multiplying the derivatives and substituting $u=\\sin x$ back gives the gradient function.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the gradient at x = 0",
          "workingLatex": "m = \\cos(0)\\,e^{\\sin(0)} = 1\\cdot e^{0} = 1",
          "explanation": "Substituting $x=0$: $\\cos 0=1$ and $\\sin 0=0$ so $e^{\\sin 0}=e^{0}=1$, giving gradient $m=1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the y-coordinate at x = 0",
          "workingLatex": "y = e^{\\sin(0)} = e^{0} = 1",
          "explanation": "Substituting $x=0$ into the curve gives $y=1$, so the point of contact is $(0,1)$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the point-gradient form of the tangent",
          "workingLatex": "y - 1 = 1\\,(x - 0)",
          "explanation": "A line through $(0,1)$ with gradient $1$ has equation $y-y_1=m(x-x_1)$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Simplify",
          "workingLatex": "y = x + 1",
          "explanation": "Expanding and tidying gives the tangent line $y=x+1$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the tangent equation",
          "workingLatex": "y = x + 1",
          "explanation": "So the tangent to $C$ at $x=0$ is the straight line $y=x+1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dy}{dx}=\\cos x\\,e^{\\sin x}$, and the tangent at $x=0$ is $y = x + 1$."
    }
  },
  {
    "id": "al.y2.pure.product-quotient-chain.q031",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Product, quotient and chain rules",
    "subtopicId": "al.y2.pure.product-quotient-chain",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "chain rule",
      "polynomial",
      "gradient"
    ],
    "questionText": "The curve $C$ has equation $y = (x^3 - 2x)^5$. (a) Find $\\dfrac{dy}{dx}$. (b) Hence find the gradient of $C$ at the point where $x = 1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise the composite and choose the chain rule",
          "workingLatex": "y = (x^3 - 2x)^5",
          "explanation": "A bracket containing $x$ raised to a power is a composite function, so we differentiate with the chain rule.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose the inner substitution",
          "workingLatex": "u = x^3 - 2x, \\qquad y = u^5",
          "explanation": "Let $u$ be the inside of the bracket; then $y=u^5$ is a simple power of $u$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate the outer function",
          "workingLatex": "\\frac{dy}{du} = 5u^4",
          "explanation": "Differentiating $u^5$ with respect to $u$ gives $5u^4$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Differentiate the inner function",
          "workingLatex": "\\frac{du}{dx} = 3x^2 - 2",
          "explanation": "Differentiating $u=x^3-2x$ term by term gives $3x^2-2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply the chain rule",
          "workingLatex": "\\frac{dy}{dx} = 5u^4(3x^2 - 2) = 5(x^3 - 2x)^4(3x^2 - 2)",
          "explanation": "Multiplying the two derivatives and substituting $u=x^3-2x$ gives the derivative for part (a).",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute x = 1",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{x=1} = 5\\big((1)^3 - 2(1)\\big)^4\\big(3(1)^2 - 2\\big)",
          "explanation": "The gradient at $x=1$ is the derivative evaluated there, so substitute $x=1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the inner brackets",
          "workingLatex": "(1 - 2) = -1, \\qquad (3 - 2) = 1",
          "explanation": "The base of the power is $x^3-2x=1-2=-1$, and the other factor $3x^2-2=1$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Simplify the power",
          "workingLatex": "(-1)^4 = 1",
          "explanation": "Since $-1$ is raised to an even power, $(-1)^4=1$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compute the gradient",
          "workingLatex": "\\frac{dy}{dx} = 5\\cdot 1\\cdot 1 = 5",
          "explanation": "Multiplying the pieces together, $5\\cdot 1\\cdot 1 = 5$, so the gradient at $x=1$ is $5$.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\dfrac{dy}{dx} = 5(x^3 - 2x)^4(3x^2 - 2)$. (b) The gradient at $x=1$ is $5$."
    }
  },
  {
    "id": "al.y2.pure.product-quotient-chain.q032",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Product, quotient and chain rules",
    "subtopicId": "al.y2.pure.product-quotient-chain",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "product rule",
      "stationary points",
      "exponential"
    ],
    "questionText": "The curve $C$ has equation $y = x e^{x}$. (a) Find $\\dfrac{dy}{dx}$. (b) Find the exact coordinates of the stationary point of $C$ and determine its nature.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the two factors for the product rule",
          "workingLatex": "u = x, \\qquad v = e^{x}",
          "explanation": "The function is a product of $x$ and $e^{x}$, so the product rule $\\tfrac{d}{dx}(uv)=u'v+uv'$ applies. We label the factors $u$ and $v$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate each factor",
          "workingLatex": "u' = 1, \\qquad v' = e^{x}",
          "explanation": "Differentiating $x$ gives $1$ by the power rule, and $e^{x}$ is its own derivative — both are standard results.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the product rule",
          "workingLatex": "\\frac{dy}{dx} = u'v + uv' = e^{x} + x e^{x}",
          "explanation": "Substituting into $u'v+uv'$ keeps one factor differentiated and the other unchanged in each term, then adds the two pieces.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Factorise the derivative",
          "workingLatex": "\\frac{dy}{dx} = e^{x}(1 + x)",
          "explanation": "Both terms share the common factor $e^{x}$. Taking it out makes the derivative easy to set to zero, because a product is zero only when one factor is zero.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set the derivative to zero",
          "workingLatex": "e^{x}(1 + x) = 0",
          "explanation": "Stationary points occur where the gradient is zero, so we solve $\\tfrac{dy}{dx}=0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for x",
          "workingLatex": "e^{x} > 0 \\ \\text{always} \\ \\Rightarrow\\ 1 + x = 0 \\ \\Rightarrow\\ x = -1",
          "explanation": "Since $e^{x}$ is never zero, only the bracket can vanish. This leaves a single stationary point at $x=-1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the y-coordinate",
          "workingLatex": "y = (-1)e^{-1} = -\\frac{1}{e}",
          "explanation": "Substituting $x=-1$ back into $y=xe^{x}$ gives the height of the stationary point.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the stationary point",
          "workingLatex": "\\left(-1, \\ -\\frac{1}{e}\\right)",
          "explanation": "So the curve has one stationary point, at $\\left(-1,-\\tfrac{1}{e}\\right)$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the second derivative",
          "workingLatex": "\\frac{d^2y}{dx^2} = \\frac{d}{dx}\\left[e^{x}(1+x)\\right] = e^{x}(1+x) + e^{x} = e^{x}(2 + x)",
          "explanation": "To classify the point we use the second-derivative test, differentiating $e^{x}(1+x)$ again with the product rule.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Evaluate the second derivative at the stationary point",
          "workingLatex": "\\left.\\frac{d^2y}{dx^2}\\right|_{x=-1} = e^{-1}(2 - 1) = \\frac{1}{e} > 0",
          "explanation": "We test the sign of the second derivative at $x=-1$. A positive value means the curve is concave up there.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Conclude the nature of the stationary point",
          "workingLatex": "\\frac{d^2y}{dx^2} > 0 \\ \\Rightarrow\\ \\text{minimum}",
          "explanation": "Because the second derivative is positive, the stationary point $\\left(-1,-\\tfrac{1}{e}\\right)$ is a local minimum.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\dfrac{dy}{dx} = e^{x}(1+x)$. (b) A minimum at $\\left(-1, -\\dfrac{1}{e}\\right)$."
    }
  },
  {
    "id": "al.y2.pure.product-quotient-chain.q033",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Product, quotient and chain rules",
    "subtopicId": "al.y2.pure.product-quotient-chain",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "product rule",
      "stationary points",
      "exponential"
    ],
    "questionText": "The curve $C$ has equation $y = x^{2} e^{-x}$. (a) Show that $\\dfrac{dy}{dx} = x e^{-x}(2 - x)$. (b) Find the coordinates of the two stationary points of $C$ and determine the nature of each.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the two factors for the product rule",
          "workingLatex": "u = x^{2}, \\qquad v = e^{-x}",
          "explanation": "The function is a product of $x^{2}$ and $e^{-x}$, so the product rule applies. We label the factors ready for $u'v+uv'$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate each factor",
          "workingLatex": "u' = 2x, \\qquad v' = -e^{-x}",
          "explanation": "The power rule gives $u'=2x$. For $v=e^{-x}$ the chain rule gives $v'=-e^{-x}$, since the derivative of the inner $-x$ is $-1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the product rule",
          "workingLatex": "\\frac{dy}{dx} = u'v + uv' = 2x e^{-x} + x^{2}(-e^{-x}) = 2x e^{-x} - x^{2} e^{-x}",
          "explanation": "Substituting into $u'v+uv'$ gives the two terms; the second is negative because $v'=-e^{-x}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Factorise the derivative",
          "workingLatex": "\\frac{dy}{dx} = x e^{-x}(2 - x)",
          "explanation": "Both terms share $x e^{-x}$. Factoring it out gives the required form and makes the equation $\\tfrac{dy}{dx}=0$ easy to solve.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set the derivative to zero",
          "workingLatex": "x e^{-x}(2 - x) = 0",
          "explanation": "Stationary points occur where the gradient is zero, so we solve this product equal to zero.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for x",
          "workingLatex": "e^{-x} > 0 \\ \\text{always} \\ \\Rightarrow\\ x = 0 \\quad \\text{or} \\quad x = 2",
          "explanation": "Since $e^{-x}$ is never zero, we discard it. The remaining factors give $x=0$ and $2-x=0$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the y-coordinates",
          "workingLatex": "x=0: y = 0; \\qquad x=2: y = 4 e^{-2} = \\frac{4}{e^{2}}",
          "explanation": "Substituting each $x$ into $y=x^{2}e^{-x}$ gives the heights: $0$ and $(2)^{2}e^{-2}=4e^{-2}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the stationary points",
          "workingLatex": "(0, 0) \\quad \\text{and} \\quad \\left(2, \\frac{4}{e^{2}}\\right)",
          "explanation": "So there are stationary points at the origin and at $\\left(2,\\tfrac{4}{e^{2}}\\right)$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the second derivative",
          "workingLatex": "\\frac{d^2y}{dx^2} = \\frac{d}{dx}\\left[e^{-x}(2x - x^{2})\\right] = -e^{-x}(2x - x^{2}) + e^{-x}(2 - 2x) = e^{-x}(x^{2} - 4x + 2)",
          "explanation": "We differentiate $\\tfrac{dy}{dx}=e^{-x}(2x-x^{2})$ again with the product rule, ready to apply the second-derivative test at each point.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Test the point at x = 0",
          "workingLatex": "\\left.\\frac{d^2y}{dx^2}\\right|_{x=0} = e^{0}(0 - 0 + 2) = 2 > 0 \\ \\Rightarrow\\ \\text{minimum}",
          "explanation": "A positive second derivative at $x=0$ means the curve is concave up, so $(0,0)$ is a local minimum.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Test the point at x = 2",
          "workingLatex": "\\left.\\frac{d^2y}{dx^2}\\right|_{x=2} = e^{-2}(4 - 8 + 2) = -2 e^{-2} < 0 \\ \\Rightarrow\\ \\text{maximum}",
          "explanation": "A negative second derivative at $x=2$ means the curve is concave down, so $\\left(2,\\tfrac{4}{e^{2}}\\right)$ is a local maximum.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) Shown: $\\dfrac{dy}{dx} = x e^{-x}(2-x)$. (b) Minimum at $(0,0)$ and maximum at $\\left(2, \\dfrac{4}{e^{2}}\\right)$."
    }
  },
  {
    "id": "al.y2.pure.product-quotient-chain.q034",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Product, quotient and chain rules",
    "subtopicId": "al.y2.pure.product-quotient-chain",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "product rule",
      "stationary points",
      "logarithm"
    ],
    "questionText": "The curve $C$ has equation $y = x \\ln x$ for $x > 0$. (a) Find $\\dfrac{dy}{dx}$. (b) Find the exact coordinates of the stationary point of $C$ and determine its nature.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the domain and identify the factors",
          "workingLatex": "x > 0, \\qquad u = x, \\qquad v = \\ln x",
          "explanation": "The function is a product of $x$ and $\\ln x$, so the product rule applies. Note $\\ln x$ requires $x>0$, which we keep in mind throughout.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate each factor",
          "workingLatex": "u' = 1, \\qquad v' = \\frac{1}{x}",
          "explanation": "Differentiating $x$ gives $1$, and the derivative of $\\ln x$ is $\\tfrac{1}{x}$ — both standard results.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the product rule",
          "workingLatex": "\\frac{dy}{dx} = u'v + uv' = \\ln x + x \\cdot \\frac{1}{x}",
          "explanation": "Substituting into $u'v+uv'$ gives $\\ln x$ from the first piece and $x\\cdot\\tfrac{1}{x}$ from the second.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify",
          "workingLatex": "\\frac{dy}{dx} = \\ln x + 1",
          "explanation": "The product $x\\cdot\\tfrac{1}{x}$ simplifies to $1$, leaving a clean derivative.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set the derivative to zero",
          "workingLatex": "\\ln x + 1 = 0",
          "explanation": "Stationary points occur where the gradient is zero, so we solve $\\tfrac{dy}{dx}=0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for x",
          "workingLatex": "\\ln x = -1 \\ \\Rightarrow\\ x = e^{-1} = \\frac{1}{e}",
          "explanation": "Rearranging gives $\\ln x=-1$; undoing the logarithm gives $x=e^{-1}$, which is positive and so lies in the domain.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the y-coordinate",
          "workingLatex": "y = \\frac{1}{e}\\ln\\!\\left(\\frac{1}{e}\\right) = \\frac{1}{e}(-1) = -\\frac{1}{e}",
          "explanation": "Substituting $x=\\tfrac{1}{e}$ into $y=x\\ln x$ and using $\\ln(e^{-1})=-1$ gives the height.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the stationary point",
          "workingLatex": "\\left(\\frac{1}{e}, \\ -\\frac{1}{e}\\right)",
          "explanation": "So the curve has a single stationary point at $\\left(\\tfrac{1}{e},-\\tfrac{1}{e}\\right)$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the second derivative",
          "workingLatex": "\\frac{d^2y}{dx^2} = \\frac{d}{dx}(\\ln x + 1) = \\frac{1}{x}",
          "explanation": "Differentiating $\\ln x+1$ again gives $\\tfrac{1}{x}$, ready for the second-derivative test.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Evaluate the second derivative at the stationary point",
          "workingLatex": "\\left.\\frac{d^2y}{dx^2}\\right|_{x=1/e} = \\frac{1}{1/e} = e > 0",
          "explanation": "Substituting $x=\\tfrac{1}{e}$ gives $e$, which is positive, so the curve is concave up there.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Conclude the nature of the stationary point",
          "workingLatex": "\\frac{d^2y}{dx^2} > 0 \\ \\Rightarrow\\ \\text{minimum}",
          "explanation": "A positive second derivative means the stationary point $\\left(\\tfrac{1}{e},-\\tfrac{1}{e}\\right)$ is a local minimum.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\dfrac{dy}{dx} = \\ln x + 1$. (b) A minimum at $\\left(\\dfrac{1}{e}, -\\dfrac{1}{e}\\right)$."
    }
  },
  {
    "id": "al.y2.pure.product-quotient-chain.q035",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Product, quotient and chain rules",
    "subtopicId": "al.y2.pure.product-quotient-chain",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "product rule",
      "stationary points",
      "exponential"
    ],
    "questionText": "The curve $C$ has equation $y = (x - 1)e^{x}$. (a) Show that $\\dfrac{dy}{dx} = x e^{x}$. (b) Hence find the coordinates of the stationary point of $C$ and determine its nature.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the two factors for the product rule",
          "workingLatex": "u = x - 1, \\qquad v = e^{x}",
          "explanation": "The function is a product of $(x-1)$ and $e^{x}$, so we use the product rule with these as $u$ and $v$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate each factor",
          "workingLatex": "u' = 1, \\qquad v' = e^{x}",
          "explanation": "Differentiating $x-1$ gives $1$, and $e^{x}$ is its own derivative.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the product rule",
          "workingLatex": "\\frac{dy}{dx} = u'v + uv' = e^{x} + (x - 1)e^{x}",
          "explanation": "Substituting into $u'v+uv'$ gives $e^{x}$ from the first piece and $(x-1)e^{x}$ from the second.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify to the required form",
          "workingLatex": "\\frac{dy}{dx} = e^{x}\\big(1 + (x - 1)\\big) = x e^{x}",
          "explanation": "Factoring out $e^{x}$ and simplifying the bracket $1+x-1=x$ gives the required result $x e^{x}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set the derivative to zero",
          "workingLatex": "x e^{x} = 0",
          "explanation": "Stationary points occur where the gradient is zero, so we solve $\\tfrac{dy}{dx}=0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for x",
          "workingLatex": "e^{x} > 0 \\ \\text{always} \\ \\Rightarrow\\ x = 0",
          "explanation": "Since $e^{x}$ is never zero, the only solution comes from $x=0$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the y-coordinate",
          "workingLatex": "y = (0 - 1)e^{0} = -1",
          "explanation": "Substituting $x=0$ into $y=(x-1)e^{x}$ gives $(-1)(1)=-1$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the stationary point",
          "workingLatex": "(0, \\ -1)",
          "explanation": "So the curve has one stationary point, at $(0,-1)$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the second derivative",
          "workingLatex": "\\frac{d^2y}{dx^2} = \\frac{d}{dx}(x e^{x}) = e^{x} + x e^{x} = e^{x}(1 + x)",
          "explanation": "We differentiate $\\tfrac{dy}{dx}=xe^{x}$ again with the product rule, ready for the second-derivative test.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Evaluate the second derivative and conclude",
          "workingLatex": "\\left.\\frac{d^2y}{dx^2}\\right|_{x=0} = e^{0}(1) = 1 > 0 \\ \\Rightarrow\\ \\text{minimum}",
          "explanation": "At $x=0$ the second derivative is $1$, which is positive, so $(0,-1)$ is a local minimum.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) Shown: $\\dfrac{dy}{dx} = x e^{x}$. (b) A minimum at $(0, -1)$."
    }
  },
  {
    "id": "al.y2.pure.product-quotient-chain.q036",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Product, quotient and chain rules",
    "subtopicId": "al.y2.pure.product-quotient-chain",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "product rule",
      "trigonometry",
      "stationary points"
    ],
    "questionText": "The curve $C$ has equation $y = e^{x}\\cos x$. (a) Show that $\\dfrac{dy}{dx} = e^{x}(\\cos x - \\sin x)$. (b) Find the exact coordinates of the stationary points of $C$ for $0 \\le x \\le 2\\pi$. (Work in radians.)",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the two factors for the product rule",
          "workingLatex": "u = e^{x}, \\qquad v = \\cos x",
          "explanation": "The function is a product of $e^{x}$ and $\\cos x$, so the product rule $\\tfrac{d}{dx}(uv)=u'v+uv'$ applies.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate each factor",
          "workingLatex": "u' = e^{x}, \\qquad v' = -\\sin x",
          "explanation": "$e^{x}$ is its own derivative, and the derivative of $\\cos x$ is $-\\sin x$ — both standard results in radians.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the product rule",
          "workingLatex": "\\frac{dy}{dx} = u'v + uv' = e^{x}\\cos x + e^{x}(-\\sin x)",
          "explanation": "Substituting into $u'v+uv'$ gives $e^{x}\\cos x$ from the first term and $-e^{x}\\sin x$ from the second.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Factorise to the required form",
          "workingLatex": "\\frac{dy}{dx} = e^{x}(\\cos x - \\sin x)",
          "explanation": "Taking out the common factor $e^{x}$ gives the required expression and makes it easy to set the gradient to zero.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set the derivative to zero",
          "workingLatex": "e^{x}(\\cos x - \\sin x) = 0",
          "explanation": "Stationary points occur where the gradient is zero, so we solve $\\tfrac{dy}{dx}=0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Eliminate the exponential factor",
          "workingLatex": "e^{x} > 0 \\ \\text{always} \\ \\Rightarrow\\ \\cos x - \\sin x = 0",
          "explanation": "Since $e^{x}$ is never zero, the stationary points come entirely from the trigonometric bracket.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Form a tangent equation",
          "workingLatex": "\\cos x = \\sin x \\ \\Rightarrow\\ \\tan x = 1",
          "explanation": "Dividing both sides by $\\cos x$ turns the equation into $\\tan x=1$, which is easy to solve.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve over the interval",
          "workingLatex": "x = \\frac{\\pi}{4} \\quad \\text{or} \\quad x = \\frac{5\\pi}{4} \\qquad (0 \\le x \\le 2\\pi)",
          "explanation": "$\\tan x$ has period $\\pi$, and its reference angle for $1$ is $\\tfrac{\\pi}{4}$, giving these two solutions in the interval.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the y-coordinate at the first solution",
          "workingLatex": "x=\\frac{\\pi}{4}: \\ y = e^{\\pi/4}\\cos\\frac{\\pi}{4} = \\frac{\\sqrt{2}}{2}\\,e^{\\pi/4}",
          "explanation": "Substituting into $y=e^{x}\\cos x$ and using $\\cos\\tfrac{\\pi}{4}=\\tfrac{\\sqrt{2}}{2}$ gives the exact height.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Find the y-coordinate at the second solution",
          "workingLatex": "x=\\frac{5\\pi}{4}: \\ y = e^{5\\pi/4}\\cos\\frac{5\\pi}{4} = -\\frac{\\sqrt{2}}{2}\\,e^{5\\pi/4}",
          "explanation": "Here $\\cos\\tfrac{5\\pi}{4}=-\\tfrac{\\sqrt{2}}{2}$, so the height is negative.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the stationary points",
          "workingLatex": "\\left(\\frac{\\pi}{4}, \\ \\frac{\\sqrt{2}}{2}e^{\\pi/4}\\right) \\quad \\text{and} \\quad \\left(\\frac{5\\pi}{4}, \\ -\\frac{\\sqrt{2}}{2}e^{5\\pi/4}\\right)",
          "explanation": "These are the two stationary points of $C$ on $0\\le x\\le 2\\pi$.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) Shown: $\\dfrac{dy}{dx} = e^{x}(\\cos x - \\sin x)$. (b) Stationary points at $\\left(\\dfrac{\\pi}{4}, \\dfrac{\\sqrt{2}}{2}e^{\\pi/4}\\right)$ and $\\left(\\dfrac{5\\pi}{4}, -\\dfrac{\\sqrt{2}}{2}e^{5\\pi/4}\\right)$."
    }
  },
  {
    "id": "al.y2.pure.product-quotient-chain.q037",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Product, quotient and chain rules",
    "subtopicId": "al.y2.pure.product-quotient-chain",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "product rule",
      "stationary points",
      "logarithm"
    ],
    "questionText": "The curve $C$ has equation $y = x^{2}\\ln x$ for $x > 0$. (a) Show that $\\dfrac{dy}{dx} = x(2\\ln x + 1)$. (b) Find the exact coordinates of the stationary point of $C$ and determine its nature.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the domain and identify the factors",
          "workingLatex": "x > 0, \\qquad u = x^{2}, \\qquad v = \\ln x",
          "explanation": "The function is a product of $x^{2}$ and $\\ln x$, so the product rule applies. The logarithm requires $x>0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate each factor",
          "workingLatex": "u' = 2x, \\qquad v' = \\frac{1}{x}",
          "explanation": "The power rule gives $u'=2x$, and the derivative of $\\ln x$ is $\\tfrac{1}{x}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the product rule",
          "workingLatex": "\\frac{dy}{dx} = u'v + uv' = 2x\\ln x + x^{2}\\cdot\\frac{1}{x}",
          "explanation": "Substituting into $u'v+uv'$ gives $2x\\ln x$ from the first piece and $x^{2}\\cdot\\tfrac{1}{x}$ from the second.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify",
          "workingLatex": "\\frac{dy}{dx} = 2x\\ln x + x",
          "explanation": "The second term simplifies because $x^{2}\\cdot\\tfrac{1}{x}=x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Factorise to the required form",
          "workingLatex": "\\frac{dy}{dx} = x(2\\ln x + 1)",
          "explanation": "Both terms share a factor of $x$; taking it out gives the required form and isolates the logarithmic bracket.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Set the derivative to zero",
          "workingLatex": "x(2\\ln x + 1) = 0",
          "explanation": "Stationary points occur where the gradient is zero, so we solve this equation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for x",
          "workingLatex": "x > 0 \\ \\Rightarrow\\ 2\\ln x + 1 = 0 \\ \\Rightarrow\\ \\ln x = -\\frac{1}{2}",
          "explanation": "The domain excludes $x=0$, so only the bracket can be zero. Rearranging gives $\\ln x=-\\tfrac{1}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve the logarithmic equation",
          "workingLatex": "x = e^{-1/2} = \\frac{1}{\\sqrt{e}}",
          "explanation": "Undoing the logarithm gives $x=e^{-1/2}$, which is positive and so lies in the domain.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the y-coordinate",
          "workingLatex": "y = \\left(e^{-1/2}\\right)^{2}\\ln\\!\\left(e^{-1/2}\\right) = e^{-1}\\cdot\\left(-\\frac{1}{2}\\right) = -\\frac{1}{2e}",
          "explanation": "Here $\\left(e^{-1/2}\\right)^{2}=e^{-1}$ and $\\ln\\!\\left(e^{-1/2}\\right)=-\\tfrac{1}{2}$, so the product is $-\\tfrac{1}{2e}$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the stationary point",
          "workingLatex": "\\left(e^{-1/2}, \\ -\\frac{1}{2e}\\right)",
          "explanation": "So the curve has one stationary point, at $\\left(e^{-1/2},-\\tfrac{1}{2e}\\right)$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Find the second derivative",
          "workingLatex": "\\frac{d^2y}{dx^2} = \\frac{d}{dx}\\left(2x\\ln x + x\\right) = 2\\ln x + 2x\\cdot\\frac{1}{x} + 1 = 2\\ln x + 3",
          "explanation": "Differentiating $2x\\ln x$ needs the product rule again, giving $2\\ln x+2$; adding the derivative of $x$ gives $2\\ln x+3$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Evaluate the second derivative and conclude",
          "workingLatex": "\\left.\\frac{d^2y}{dx^2}\\right|_{x=e^{-1/2}} = 2\\left(-\\frac{1}{2}\\right) + 3 = 2 > 0 \\ \\Rightarrow\\ \\text{minimum}",
          "explanation": "Using $\\ln\\!\\left(e^{-1/2}\\right)=-\\tfrac{1}{2}$ gives $2>0$, so the stationary point is a local minimum.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) Shown: $\\dfrac{dy}{dx} = x(2\\ln x + 1)$. (b) A minimum at $\\left(e^{-1/2}, -\\dfrac{1}{2e}\\right)$."
    }
  },
  {
    "id": "al.y2.pure.product-quotient-chain.q038",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Product, quotient and chain rules",
    "subtopicId": "al.y2.pure.product-quotient-chain",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "product rule",
      "tangent",
      "exponential"
    ],
    "questionText": "The curve $C$ has equation $y = (x + 1)e^{x}$. Find an equation of the tangent to $C$ at the point where $x = 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the two factors for the product rule",
          "workingLatex": "u = x + 1, \\qquad v = e^{x}",
          "explanation": "The function is a product of $(x+1)$ and $e^{x}$, so we differentiate using the product rule.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate each factor",
          "workingLatex": "u' = 1, \\qquad v' = e^{x}",
          "explanation": "Differentiating $x+1$ gives $1$, and $e^{x}$ is its own derivative.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the product rule",
          "workingLatex": "\\frac{dy}{dx} = u'v + uv' = e^{x} + (x + 1)e^{x}",
          "explanation": "Substituting into $u'v+uv'$ gives $e^{x}$ from the first term and $(x+1)e^{x}$ from the second.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Factorise the derivative",
          "workingLatex": "\\frac{dy}{dx} = e^{x}(x + 2)",
          "explanation": "Taking out the common factor $e^{x}$ and simplifying $1+(x+1)=x+2$ gives a tidy derivative to evaluate.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the gradient at x = 0",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{x=0} = e^{0}(0 + 2) = 2",
          "explanation": "The gradient of the tangent equals the value of the derivative at the point of contact, here $x=0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the gradient",
          "workingLatex": "m = 2",
          "explanation": "So the tangent line has gradient $m=2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the y-coordinate of the point of contact",
          "workingLatex": "y = (0 + 1)e^{0} = 1",
          "explanation": "Substituting $x=0$ into $y=(x+1)e^{x}$ gives the height of the point where the tangent touches.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the point of contact",
          "workingLatex": "(0, \\ 1)",
          "explanation": "The tangent touches the curve at $(0,1)$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Write the tangent line formula",
          "workingLatex": "y - y_{1} = m(x - x_{1})",
          "explanation": "A straight line through $(x_{1},y_{1})$ with gradient $m$ has this equation.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Substitute the known values",
          "workingLatex": "y - 1 = 2(x - 0)",
          "explanation": "Substituting $m=2$ and the point $(0,1)$ gives the tangent in point-gradient form.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Simplify to the final equation",
          "workingLatex": "y = 2x + 1",
          "explanation": "Expanding and rearranging gives the tangent line in the form $y=mx+c$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The tangent to $C$ at $x=0$ is $y = 2x + 1$."
    }
  },
  {
    "id": "al.y2.pure.product-quotient-chain.q039",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Product, quotient and chain rules",
    "subtopicId": "al.y2.pure.product-quotient-chain",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "product rule",
      "chain rule",
      "stationary points"
    ],
    "questionText": "The curve $C$ has equation $y = x e^{-2x}$. (a) Show that $\\dfrac{dy}{dx} = e^{-2x}(1 - 2x)$. (b) Find the exact coordinates of the stationary point of $C$ and determine its nature.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the two factors for the product rule",
          "workingLatex": "u = x, \\qquad v = e^{-2x}",
          "explanation": "The function is a product of $x$ and $e^{-2x}$, so the product rule applies; the second factor will also need the chain rule.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate each factor",
          "workingLatex": "u' = 1, \\qquad v' = -2 e^{-2x}",
          "explanation": "Differentiating $x$ gives $1$. For $v=e^{-2x}$ the chain rule multiplies by the derivative of the inner $-2x$, giving $v'=-2e^{-2x}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the product rule",
          "workingLatex": "\\frac{dy}{dx} = u'v + uv' = e^{-2x} + x(-2 e^{-2x}) = e^{-2x} - 2x e^{-2x}",
          "explanation": "Substituting into $u'v+uv'$ gives $e^{-2x}$ from the first term and $-2xe^{-2x}$ from the second.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Factorise to the required form",
          "workingLatex": "\\frac{dy}{dx} = e^{-2x}(1 - 2x)",
          "explanation": "Both terms share $e^{-2x}$; factoring it out gives the required result and isolates the linear bracket.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set the derivative to zero",
          "workingLatex": "e^{-2x}(1 - 2x) = 0",
          "explanation": "Stationary points occur where the gradient is zero, so we solve $\\tfrac{dy}{dx}=0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for x",
          "workingLatex": "e^{-2x} > 0 \\ \\text{always} \\ \\Rightarrow\\ 1 - 2x = 0 \\ \\Rightarrow\\ x = \\frac{1}{2}",
          "explanation": "Since $e^{-2x}$ is never zero, only the bracket can vanish, giving $x=\\tfrac{1}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the y-coordinate",
          "workingLatex": "y = \\frac{1}{2}e^{-2(1/2)} = \\frac{1}{2}e^{-1} = \\frac{1}{2e}",
          "explanation": "Substituting $x=\\tfrac{1}{2}$ into $y=xe^{-2x}$ gives $\\tfrac{1}{2}e^{-1}=\\tfrac{1}{2e}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the stationary point",
          "workingLatex": "\\left(\\frac{1}{2}, \\ \\frac{1}{2e}\\right)",
          "explanation": "So the curve has one stationary point, at $\\left(\\tfrac{1}{2},\\tfrac{1}{2e}\\right)$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the second derivative",
          "workingLatex": "\\frac{d^2y}{dx^2} = \\frac{d}{dx}\\left[e^{-2x}(1 - 2x)\\right] = -2 e^{-2x}(1 - 2x) + e^{-2x}(-2) = e^{-2x}(4x - 4)",
          "explanation": "We differentiate $\\tfrac{dy}{dx}=e^{-2x}(1-2x)$ again with the product and chain rules, then simplify the bracket.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Evaluate the second derivative and conclude",
          "workingLatex": "\\left.\\frac{d^2y}{dx^2}\\right|_{x=1/2} = e^{-1}(2 - 4) = -\\frac{2}{e} < 0 \\ \\Rightarrow\\ \\text{maximum}",
          "explanation": "At $x=\\tfrac{1}{2}$ the second derivative is negative, so the curve is concave down and $\\left(\\tfrac{1}{2},\\tfrac{1}{2e}\\right)$ is a local maximum.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) Shown: $\\dfrac{dy}{dx} = e^{-2x}(1 - 2x)$. (b) A maximum at $\\left(\\dfrac{1}{2}, \\dfrac{1}{2e}\\right)$."
    }
  },
  {
    "id": "al.y2.pure.product-quotient-chain.q040",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Product, quotient and chain rules",
    "subtopicId": "al.y2.pure.product-quotient-chain",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "product rule",
      "trigonometry",
      "stationary points"
    ],
    "questionText": "The curve $C$ has equation $y = e^{x}\\sin x$. (a) Show that $\\dfrac{dy}{dx} = e^{x}(\\sin x + \\cos x)$. (b) Find the exact coordinates of the stationary points of $C$ for $0 \\le x \\le 2\\pi$. (Work in radians.)",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the two factors for the product rule",
          "workingLatex": "u = e^{x}, \\qquad v = \\sin x",
          "explanation": "The function is a product of $e^{x}$ and $\\sin x$, so the product rule $\\tfrac{d}{dx}(uv)=u'v+uv'$ applies.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate each factor",
          "workingLatex": "u' = e^{x}, \\qquad v' = \\cos x",
          "explanation": "$e^{x}$ is its own derivative, and the derivative of $\\sin x$ is $\\cos x$ — both standard results in radians.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the product rule",
          "workingLatex": "\\frac{dy}{dx} = u'v + uv' = e^{x}\\sin x + e^{x}\\cos x",
          "explanation": "Substituting into $u'v+uv'$ gives $e^{x}\\sin x$ from the first term and $e^{x}\\cos x$ from the second.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Factorise to the required form",
          "workingLatex": "\\frac{dy}{dx} = e^{x}(\\sin x + \\cos x)",
          "explanation": "Taking out the common factor $e^{x}$ gives the required expression and makes the gradient easy to set to zero.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set the derivative to zero",
          "workingLatex": "e^{x}(\\sin x + \\cos x) = 0",
          "explanation": "Stationary points occur where the gradient is zero, so we solve $\\tfrac{dy}{dx}=0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Eliminate the exponential factor",
          "workingLatex": "e^{x} > 0 \\ \\text{always} \\ \\Rightarrow\\ \\sin x + \\cos x = 0",
          "explanation": "Since $e^{x}$ is never zero, the stationary points come entirely from the trigonometric bracket.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Form a tangent equation",
          "workingLatex": "\\sin x = -\\cos x \\ \\Rightarrow\\ \\tan x = -1",
          "explanation": "Dividing both sides by $\\cos x$ turns the equation into $\\tan x=-1$, which is straightforward to solve.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve over the interval",
          "workingLatex": "x = \\frac{3\\pi}{4} \\quad \\text{or} \\quad x = \\frac{7\\pi}{4} \\qquad (0 \\le x \\le 2\\pi)",
          "explanation": "$\\tan x=-1$ has reference angle $\\tfrac{\\pi}{4}$ and is negative in the second and fourth quadrants, giving these two solutions.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the y-coordinate at the first solution",
          "workingLatex": "x=\\frac{3\\pi}{4}: \\ y = e^{3\\pi/4}\\sin\\frac{3\\pi}{4} = \\frac{\\sqrt{2}}{2}\\,e^{3\\pi/4}",
          "explanation": "Substituting into $y=e^{x}\\sin x$ and using $\\sin\\tfrac{3\\pi}{4}=\\tfrac{\\sqrt{2}}{2}$ gives the exact height.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Find the y-coordinate at the second solution",
          "workingLatex": "x=\\frac{7\\pi}{4}: \\ y = e^{7\\pi/4}\\sin\\frac{7\\pi}{4} = -\\frac{\\sqrt{2}}{2}\\,e^{7\\pi/4}",
          "explanation": "Here $\\sin\\tfrac{7\\pi}{4}=-\\tfrac{\\sqrt{2}}{2}$, so the height is negative.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the stationary points",
          "workingLatex": "\\left(\\frac{3\\pi}{4}, \\ \\frac{\\sqrt{2}}{2}e^{3\\pi/4}\\right) \\quad \\text{and} \\quad \\left(\\frac{7\\pi}{4}, \\ -\\frac{\\sqrt{2}}{2}e^{7\\pi/4}\\right)",
          "explanation": "These are the two stationary points of $C$ on $0\\le x\\le 2\\pi$.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) Shown: $\\dfrac{dy}{dx} = e^{x}(\\sin x + \\cos x)$. (b) Stationary points at $\\left(\\dfrac{3\\pi}{4}, \\dfrac{\\sqrt{2}}{2}e^{3\\pi/4}\\right)$ and $\\left(\\dfrac{7\\pi}{4}, -\\dfrac{\\sqrt{2}}{2}e^{7\\pi/4}\\right)$."
    }
  },
  {
    "id": "al.y2.pure.product-quotient-chain.q041",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Product, quotient and chain rules",
    "subtopicId": "al.y2.pure.product-quotient-chain",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "proof",
    "tags": [
      "quotient rule",
      "reciprocal trig",
      "proof"
    ],
    "questionText": "Show that $\\dfrac{d}{dx}(\\tan x) = \\sec^2 x$, using the quotient rule together with the fact that $\\tan x = \\dfrac{\\sin x}{\\cos x}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write tan as a quotient",
          "workingLatex": "\\tan x = \\frac{\\sin x}{\\cos x}",
          "explanation": "The tangent function is defined as the ratio $\\dfrac{\\sin x}{\\cos x}$, so differentiating it is a job for the quotient rule.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Label the numerator and denominator",
          "workingLatex": "u = \\sin x, \\qquad v = \\cos x",
          "explanation": "We name the top $u$ and the bottom $v$ so we can drop them into the quotient rule $\\dfrac{d}{dx}\\!\\left(\\dfrac{u}{v}\\right)=\\dfrac{u'v-uv'}{v^2}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate each part",
          "workingLatex": "u' = \\cos x, \\qquad v' = -\\sin x",
          "explanation": "Both are standard derivatives: $\\sin x$ differentiates to $\\cos x$, and $\\cos x$ differentiates to $-\\sin x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the quotient rule",
          "workingLatex": "\\frac{d}{dx}(\\tan x) = \\frac{u'v - uv'}{v^2}",
          "explanation": "The quotient rule keeps the denominator squared underneath and takes 'derivative of top times bottom minus top times derivative of bottom' on top.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the four pieces",
          "workingLatex": "= \\frac{\\cos x\\,\\cos x - \\sin x\\,(-\\sin x)}{\\cos^2 x}",
          "explanation": "Putting $u,u',v,v'$ into the formula. Notice the double negative coming from $v'=-\\sin x$ is about to turn into a plus.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify the numerator",
          "workingLatex": "= \\frac{\\cos^2 x + \\sin^2 x}{\\cos^2 x}",
          "explanation": "The two products give $\\cos^2 x$ and $+\\sin^2 x$, since subtracting a negative adds.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Apply the Pythagorean identity",
          "workingLatex": "\\cos^2 x + \\sin^2 x = 1",
          "explanation": "The identity $\\sin^2 x+\\cos^2 x=1$ collapses the entire numerator to $1$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Rewrite the fraction",
          "workingLatex": "\\frac{d}{dx}(\\tan x) = \\frac{1}{\\cos^2 x}",
          "explanation": "With the numerator equal to $1$, only $\\dfrac{1}{\\cos^2 x}$ remains.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Convert to secant",
          "workingLatex": "\\frac{1}{\\cos^2 x} = \\sec^2 x",
          "explanation": "Since $\\sec x=\\dfrac{1}{\\cos x}$, squaring gives $\\dfrac{1}{\\cos^2 x}=\\sec^2 x$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Conclude",
          "workingLatex": "\\frac{d}{dx}(\\tan x) = \\sec^2 x \\qquad \\blacksquare",
          "explanation": "This is exactly the required result, so the derivative of $\\tan x$ is $\\sec^2 x$, as claimed.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{d}{dx}(\\tan x) = \\sec^2 x$, obtained from $\\dfrac{\\cos^2 x+\\sin^2 x}{\\cos^2 x}=\\dfrac{1}{\\cos^2 x}$."
    }
  },
  {
    "id": "al.y2.pure.product-quotient-chain.q042",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Product, quotient and chain rules",
    "subtopicId": "al.y2.pure.product-quotient-chain",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "proof",
    "tags": [
      "chain rule",
      "reciprocal trig",
      "proof"
    ],
    "questionText": "Show that $\\dfrac{d}{dx}(\\sec x) = \\sec x\\tan x$, by writing $\\sec x = (\\cos x)^{-1}$ and using the chain rule.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write sec x as a power",
          "workingLatex": "\\sec x = \\frac{1}{\\cos x} = (\\cos x)^{-1}",
          "explanation": "Writing $\\sec x$ as $(\\cos x)^{-1}$ turns it into 'something to a power', which is the ideal shape for the chain rule.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose the inside function",
          "workingLatex": "u = \\cos x, \\qquad y = u^{-1}",
          "explanation": "We let the inside be $u=\\cos x$, so the whole function becomes $y=u^{-1}$, a simple power of $u$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate the outer function",
          "workingLatex": "\\frac{dy}{du} = -u^{-2}",
          "explanation": "Using the power rule on $u^{-1}$ brings the $-1$ down and reduces the power by one to give $-u^{-2}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Differentiate the inner function",
          "workingLatex": "\\frac{du}{dx} = -\\sin x",
          "explanation": "The derivative of $\\cos x$ is $-\\sin x$, a standard result.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the chain rule",
          "workingLatex": "\\frac{dy}{dx} = \\frac{dy}{du}\\cdot\\frac{du}{dx}",
          "explanation": "The chain rule multiplies the rate of change of the outer function by the rate of change of the inner function.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute both derivatives",
          "workingLatex": "\\frac{dy}{dx} = (-u^{-2})(-\\sin x) = u^{-2}\\sin x",
          "explanation": "Multiplying two negatives gives a positive, leaving $u^{-2}\\sin x$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Replace u with cos x",
          "workingLatex": "= \\frac{\\sin x}{\\cos^2 x}",
          "explanation": "Substituting $u=\\cos x$ back in, and using $u^{-2}=\\dfrac{1}{\\cos^2 x}$, gives $\\dfrac{\\sin x}{\\cos^2 x}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Split into two familiar factors",
          "workingLatex": "\\frac{\\sin x}{\\cos^2 x} = \\frac{1}{\\cos x}\\cdot\\frac{\\sin x}{\\cos x}",
          "explanation": "Separating one factor of $\\cos x$ lets us recognise two standard ratios.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Recognise sec and tan",
          "workingLatex": "\\frac{1}{\\cos x} = \\sec x, \\qquad \\frac{\\sin x}{\\cos x} = \\tan x",
          "explanation": "These are exactly the definitions of $\\sec x$ and $\\tan x$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Conclude",
          "workingLatex": "\\frac{d}{dx}(\\sec x) = \\sec x\\tan x \\qquad \\blacksquare",
          "explanation": "Combining the two factors gives the required derivative $\\sec x\\tan x$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{d}{dx}(\\sec x)=\\dfrac{\\sin x}{\\cos^2 x}=\\sec x\\tan x$."
    }
  },
  {
    "id": "al.y2.pure.product-quotient-chain.q043",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Product, quotient and chain rules",
    "subtopicId": "al.y2.pure.product-quotient-chain",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "proof",
    "tags": [
      "quotient rule",
      "reciprocal trig",
      "proof"
    ],
    "questionText": "Show that $\\dfrac{d}{dx}(\\cot x) = -\\operatorname{cosec}^2 x$, using the quotient rule together with $\\cot x = \\dfrac{\\cos x}{\\sin x}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write cot as a quotient",
          "workingLatex": "\\cot x = \\frac{\\cos x}{\\sin x}",
          "explanation": "Cotangent is the ratio $\\dfrac{\\cos x}{\\sin x}$, so the quotient rule is the natural tool.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Label the numerator and denominator",
          "workingLatex": "u = \\cos x, \\qquad v = \\sin x",
          "explanation": "We set $u=\\cos x$ on top and $v=\\sin x$ underneath, ready for the quotient rule.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate each part",
          "workingLatex": "u' = -\\sin x, \\qquad v' = \\cos x",
          "explanation": "Standard derivatives: $\\cos x\\to-\\sin x$ and $\\sin x\\to\\cos x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the quotient rule",
          "workingLatex": "\\frac{d}{dx}(\\cot x) = \\frac{u'v - uv'}{v^2}",
          "explanation": "Derivative of top times bottom minus top times derivative of bottom, all over the bottom squared.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the pieces",
          "workingLatex": "= \\frac{(-\\sin x)(\\sin x) - (\\cos x)(\\cos x)}{\\sin^2 x}",
          "explanation": "Placing each part into the formula; both products in the numerator turn out negative.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify the numerator",
          "workingLatex": "= \\frac{-\\sin^2 x - \\cos^2 x}{\\sin^2 x}",
          "explanation": "Multiplying out gives $-\\sin^2 x$ and $-\\cos^2 x$ on top.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Factor out the minus sign",
          "workingLatex": "= \\frac{-(\\sin^2 x + \\cos^2 x)}{\\sin^2 x}",
          "explanation": "Taking out $-1$ reveals the Pythagorean combination inside the bracket.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Apply the identity",
          "workingLatex": "\\sin^2 x + \\cos^2 x = 1",
          "explanation": "The bracket equals $1$, so the numerator becomes $-1$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Rewrite the fraction",
          "workingLatex": "\\frac{d}{dx}(\\cot x) = -\\frac{1}{\\sin^2 x}",
          "explanation": "Only $-\\dfrac{1}{\\sin^2 x}$ is left after the numerator collapses.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Convert to cosec",
          "workingLatex": "-\\frac{1}{\\sin^2 x} = -\\operatorname{cosec}^2 x \\qquad \\blacksquare",
          "explanation": "Since $\\operatorname{cosec} x=\\dfrac{1}{\\sin x}$, squaring gives $-\\operatorname{cosec}^2 x$, exactly as required.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{d}{dx}(\\cot x) = -\\dfrac{1}{\\sin^2 x} = -\\operatorname{cosec}^2 x$."
    }
  },
  {
    "id": "al.y2.pure.product-quotient-chain.q044",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Product, quotient and chain rules",
    "subtopicId": "al.y2.pure.product-quotient-chain",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "quotient rule",
      "stationary points",
      "logarithm"
    ],
    "questionText": "The curve $C$ has equation $y = \\dfrac{\\ln x}{x}$ for $x>0$. (a) Find $\\dfrac{dy}{dx}$. (b) Hence find the exact coordinates of the stationary point of $C$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the quotient rule",
          "workingLatex": "u = \\ln x, \\qquad v = x",
          "explanation": "The curve is a quotient of $\\ln x$ and $x$, so we use the quotient rule with $u$ on top and $v$ underneath.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate each part",
          "workingLatex": "u' = \\frac{1}{x}, \\qquad v' = 1",
          "explanation": "The derivative of $\\ln x$ is $\\dfrac{1}{x}$, and the derivative of $x$ is $1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the quotient rule",
          "workingLatex": "\\frac{dy}{dx} = \\frac{u'v - uv'}{v^2}",
          "explanation": "This gives derivative of top times bottom minus top times derivative of bottom, all over the bottom squared.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the pieces",
          "workingLatex": "= \\frac{\\frac{1}{x}\\cdot x - \\ln x\\cdot 1}{x^2}",
          "explanation": "Slotting $u,u',v,v'$ into the formula.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the numerator",
          "workingLatex": "= \\frac{1 - \\ln x}{x^2}",
          "explanation": "Here $\\dfrac{1}{x}\\cdot x=1$, leaving $1-\\ln x$ on top.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the derivative",
          "workingLatex": "\\frac{dy}{dx} = \\frac{1 - \\ln x}{x^2}",
          "explanation": "This is the gradient function of the curve.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Set the derivative to zero",
          "workingLatex": "\\frac{1 - \\ln x}{x^2} = 0",
          "explanation": "Stationary points occur where the gradient is zero.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "A zero fraction needs a zero numerator",
          "workingLatex": "1 - \\ln x = 0",
          "explanation": "A fraction is zero only when its numerator is zero; since $x^2>0$ can never be zero, we set the top to zero.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solve for x",
          "workingLatex": "\\ln x = 1 \\;\\Rightarrow\\; x = e",
          "explanation": "Undoing the natural logarithm gives $x=e$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Find the y-coordinate",
          "workingLatex": "y = \\frac{\\ln e}{e} = \\frac{1}{e}",
          "explanation": "Substituting $x=e$ and using $\\ln e=1$ gives the height $\\dfrac{1}{e}$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the stationary point",
          "workingLatex": "\\left(e, \\; \\frac{1}{e}\\right)",
          "explanation": "So the single stationary point of $C$ is $\\left(e,\\dfrac{1}{e}\\right)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\dfrac{dy}{dx} = \\dfrac{1-\\ln x}{x^2}$. (b) Stationary point at $\\left(e, \\dfrac{1}{e}\\right)$."
    }
  },
  {
    "id": "al.y2.pure.product-quotient-chain.q045",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Product, quotient and chain rules",
    "subtopicId": "al.y2.pure.product-quotient-chain",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "quotient rule",
      "stationary points",
      "exponential"
    ],
    "questionText": "The curve $C$ has equation $y = \\dfrac{x}{e^x}$. (a) Find $\\dfrac{dy}{dx}$. (b) Hence find the exact coordinates of the stationary point of $C$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the quotient rule",
          "workingLatex": "u = x, \\qquad v = e^x",
          "explanation": "The curve is a quotient of $x$ and $e^x$, so we use the quotient rule with $u$ on top and $v$ underneath.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate each part",
          "workingLatex": "u' = 1, \\qquad v' = e^x",
          "explanation": "The derivative of $x$ is $1$, and $e^x$ is its own derivative.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the quotient rule",
          "workingLatex": "\\frac{dy}{dx} = \\frac{u'v - uv'}{v^2}",
          "explanation": "Derivative of top times bottom minus top times derivative of bottom, all over the bottom squared.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the pieces",
          "workingLatex": "= \\frac{1\\cdot e^x - x\\cdot e^x}{(e^x)^2}",
          "explanation": "Placing $u,u',v,v'$ into the formula.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Factor the numerator",
          "workingLatex": "= \\frac{e^x(1 - x)}{e^{2x}}",
          "explanation": "Both terms on top share a factor of $e^x$, and $(e^x)^2=e^{2x}$ underneath.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Cancel a factor of e^x",
          "workingLatex": "\\frac{dy}{dx} = \\frac{1 - x}{e^x}",
          "explanation": "Dividing top and bottom by $e^x$ leaves the tidy gradient function $\\dfrac{1-x}{e^x}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Set the derivative to zero",
          "workingLatex": "\\frac{1 - x}{e^x} = 0",
          "explanation": "Stationary points occur where the gradient is zero.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "A zero fraction needs a zero numerator",
          "workingLatex": "1 - x = 0",
          "explanation": "Since $e^x$ is never zero, only the numerator can make the fraction vanish.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solve for x",
          "workingLatex": "x = 1",
          "explanation": "Rearranging $1-x=0$ gives $x=1$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Find the y-coordinate",
          "workingLatex": "y = \\frac{1}{e^1} = \\frac{1}{e}",
          "explanation": "Substituting $x=1$ into $y=\\dfrac{x}{e^x}$ gives the height $\\dfrac{1}{e}$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the stationary point",
          "workingLatex": "\\left(1, \\; \\frac{1}{e}\\right)",
          "explanation": "So the single stationary point of $C$ is $\\left(1,\\dfrac{1}{e}\\right)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\dfrac{dy}{dx} = \\dfrac{1-x}{e^x}$. (b) Stationary point at $\\left(1, \\dfrac{1}{e}\\right)$."
    }
  },
  {
    "id": "al.y2.pure.product-quotient-chain.q046",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Product, quotient and chain rules",
    "subtopicId": "al.y2.pure.product-quotient-chain",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "quotient rule",
      "stationary points"
    ],
    "questionText": "The curve $C$ has equation $y = \\dfrac{x}{x^2+1}$. (a) Find $\\dfrac{dy}{dx}$. (b) Hence find the exact coordinates of the two stationary points of $C$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the quotient rule",
          "workingLatex": "u = x, \\qquad v = x^2+1",
          "explanation": "The curve is a quotient, so we use the quotient rule with $u$ on top and $v$ underneath.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate each part",
          "workingLatex": "u' = 1, \\qquad v' = 2x",
          "explanation": "The derivative of $x$ is $1$, and the derivative of $x^2+1$ is $2x$ by the power rule.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the quotient rule",
          "workingLatex": "\\frac{dy}{dx} = \\frac{u'v - uv'}{v^2}",
          "explanation": "Derivative of top times bottom minus top times derivative of bottom, all over the bottom squared.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the pieces",
          "workingLatex": "= \\frac{1\\cdot(x^2+1) - x\\cdot 2x}{(x^2+1)^2}",
          "explanation": "Placing $u,u',v,v'$ into the formula.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Expand the numerator",
          "workingLatex": "= \\frac{x^2 + 1 - 2x^2}{(x^2+1)^2}",
          "explanation": "Multiplying out $x\\cdot 2x=2x^2$, ready to collect like terms.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify",
          "workingLatex": "\\frac{dy}{dx} = \\frac{1 - x^2}{(x^2+1)^2}",
          "explanation": "Combining $x^2-2x^2=-x^2$ leaves $1-x^2$ on top.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Set the derivative to zero",
          "workingLatex": "\\frac{1 - x^2}{(x^2+1)^2} = 0",
          "explanation": "Stationary points occur where the gradient is zero.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "A zero fraction needs a zero numerator",
          "workingLatex": "1 - x^2 = 0",
          "explanation": "The denominator $(x^2+1)^2$ is always positive, so only the numerator can make the fraction zero.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solve for x",
          "workingLatex": "x^2 = 1 \\;\\Rightarrow\\; x = \\pm 1",
          "explanation": "Taking square roots gives the two solutions $x=1$ and $x=-1$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Find the y-coordinates",
          "workingLatex": "x=1:\\; y = \\tfrac{1}{2}; \\qquad x=-1:\\; y = -\\tfrac{1}{2}",
          "explanation": "Substituting each $x$ into $y=\\dfrac{x}{x^2+1}$: $\\dfrac{1}{2}$ and $\\dfrac{-1}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the stationary points",
          "workingLatex": "\\left(1, \\tfrac{1}{2}\\right) \\quad \\text{and} \\quad \\left(-1, -\\tfrac{1}{2}\\right)",
          "explanation": "So the two stationary points of $C$ are $\\left(1,\\tfrac{1}{2}\\right)$ and $\\left(-1,-\\tfrac{1}{2}\\right)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\dfrac{dy}{dx} = \\dfrac{1-x^2}{(x^2+1)^2}$. (b) Stationary points at $\\left(1,\\dfrac{1}{2}\\right)$ and $\\left(-1,-\\dfrac{1}{2}\\right)$."
    }
  },
  {
    "id": "al.y2.pure.product-quotient-chain.q047",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Product, quotient and chain rules",
    "subtopicId": "al.y2.pure.product-quotient-chain",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "quotient rule",
      "stationary points"
    ],
    "questionText": "The curve $C$ has equation $y = \\dfrac{x^2}{x-1}$, $x\\neq 1$. (a) Find $\\dfrac{dy}{dx}$. (b) Hence find the coordinates of the two stationary points of $C$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the quotient rule",
          "workingLatex": "u = x^2, \\qquad v = x-1",
          "explanation": "The curve is a quotient, so we use the quotient rule with $u$ on top and $v$ underneath.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate each part",
          "workingLatex": "u' = 2x, \\qquad v' = 1",
          "explanation": "The derivative of $x^2$ is $2x$, and the derivative of $x-1$ is $1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the quotient rule",
          "workingLatex": "\\frac{dy}{dx} = \\frac{u'v - uv'}{v^2}",
          "explanation": "Derivative of top times bottom minus top times derivative of bottom, all over the bottom squared.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the pieces",
          "workingLatex": "= \\frac{2x(x-1) - x^2\\cdot 1}{(x-1)^2}",
          "explanation": "Placing $u,u',v,v'$ into the formula.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Expand the numerator",
          "workingLatex": "= \\frac{2x^2 - 2x - x^2}{(x-1)^2}",
          "explanation": "Multiplying out $2x(x-1)=2x^2-2x$, then subtracting $x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify the numerator",
          "workingLatex": "= \\frac{x^2 - 2x}{(x-1)^2}",
          "explanation": "Collecting $2x^2-x^2=x^2$ leaves $x^2-2x$ on top.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Factorise the numerator",
          "workingLatex": "\\frac{dy}{dx} = \\frac{x(x-2)}{(x-1)^2}",
          "explanation": "Taking out the common factor $x$ makes the numerator easy to set to zero.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Set the derivative to zero",
          "workingLatex": "\\frac{x(x-2)}{(x-1)^2} = 0 \\;\\Rightarrow\\; x(x-2) = 0",
          "explanation": "The denominator $(x-1)^2$ cannot be zero on the curve, so we set the numerator to zero.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solve for x",
          "workingLatex": "x = 0 \\quad \\text{or} \\quad x = 2",
          "explanation": "A product is zero when one of its factors is zero.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Find the y-coordinates",
          "workingLatex": "x=0:\\; y = 0; \\qquad x=2:\\; y = \\frac{4}{1} = 4",
          "explanation": "Substituting each $x$ into $y=\\dfrac{x^2}{x-1}$ gives the heights $0$ and $4$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the stationary points",
          "workingLatex": "(0, 0) \\quad \\text{and} \\quad (2, 4)",
          "explanation": "So the two stationary points of $C$ are $(0,0)$ and $(2,4)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\dfrac{dy}{dx} = \\dfrac{x(x-2)}{(x-1)^2}$. (b) Stationary points at $(0,0)$ and $(2,4)$."
    }
  },
  {
    "id": "al.y2.pure.product-quotient-chain.q048",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Product, quotient and chain rules",
    "subtopicId": "al.y2.pure.product-quotient-chain",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "quotient rule",
      "stationary points",
      "exponential"
    ],
    "questionText": "The curve $C$ has equation $y = \\dfrac{e^x}{x^2}$, $x\\neq 0$. (a) Find $\\dfrac{dy}{dx}$. (b) Hence find the exact coordinates of the stationary point of $C$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the quotient rule",
          "workingLatex": "u = e^x, \\qquad v = x^2",
          "explanation": "The curve is a quotient of $e^x$ and $x^2$, so we use the quotient rule with $u$ on top and $v$ underneath.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate each part",
          "workingLatex": "u' = e^x, \\qquad v' = 2x",
          "explanation": "The function $e^x$ is its own derivative, and the derivative of $x^2$ is $2x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the quotient rule",
          "workingLatex": "\\frac{dy}{dx} = \\frac{u'v - uv'}{v^2}",
          "explanation": "Derivative of top times bottom minus top times derivative of bottom, all over the bottom squared.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the pieces",
          "workingLatex": "= \\frac{e^x\\cdot x^2 - e^x\\cdot 2x}{(x^2)^2}",
          "explanation": "Placing $u,u',v,v'$ into the formula.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write out the denominator",
          "workingLatex": "= \\frac{e^x x^2 - 2x e^x}{x^4}",
          "explanation": "Squaring the denominator gives $(x^2)^2=x^4$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Factor the numerator",
          "workingLatex": "= \\frac{x e^x(x - 2)}{x^4}",
          "explanation": "Both terms on top share the common factor $x e^x$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Cancel a factor of x",
          "workingLatex": "\\frac{dy}{dx} = \\frac{e^x(x-2)}{x^3}",
          "explanation": "Dividing top and bottom by $x$ reduces $x^4$ to $x^3$ and tidies the gradient function.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Set the derivative to zero",
          "workingLatex": "\\frac{e^x(x-2)}{x^3} = 0",
          "explanation": "Stationary points occur where the gradient is zero.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "A zero fraction needs a zero numerator",
          "workingLatex": "x - 2 = 0",
          "explanation": "The factor $e^x$ is never zero and $x=0$ is excluded, so only $x-2=0$ can give a stationary point.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Solve for x",
          "workingLatex": "x = 2",
          "explanation": "Rearranging $x-2=0$ gives $x=2$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Find the y-coordinate",
          "workingLatex": "y = \\frac{e^2}{2^2} = \\frac{e^2}{4}",
          "explanation": "Substituting $x=2$ into $y=\\dfrac{e^x}{x^2}$ gives the exact height $\\dfrac{e^2}{4}$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State the stationary point",
          "workingLatex": "\\left(2, \\; \\frac{e^2}{4}\\right)",
          "explanation": "So the single stationary point of $C$ is $\\left(2,\\dfrac{e^2}{4}\\right)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\dfrac{dy}{dx} = \\dfrac{e^x(x-2)}{x^3}$. (b) Stationary point at $\\left(2, \\dfrac{e^2}{4}\\right)$."
    }
  },
  {
    "id": "al.y2.pure.product-quotient-chain.q049",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Product, quotient and chain rules",
    "subtopicId": "al.y2.pure.product-quotient-chain",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "quotient rule",
      "gradient",
      "trigonometry"
    ],
    "questionText": "A curve has equation $y = \\dfrac{\\sin x}{x}$ for $x>0$, where $x$ is measured in radians. (a) Find $\\dfrac{dy}{dx}$. (b) Find the exact gradient of the curve at the point where $x=\\pi$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise the quotient rule",
          "workingLatex": "y = \\frac{\\sin x}{x}, \\qquad u = \\sin x, \\; v = x",
          "explanation": "The curve is a quotient of $\\sin x$ and $x$, so we use the quotient rule with $u$ on top and $v$ underneath.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate each part",
          "workingLatex": "u' = \\cos x, \\qquad v' = 1",
          "explanation": "The derivative of $\\sin x$ is $\\cos x$, and the derivative of $x$ is $1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the quotient rule",
          "workingLatex": "\\frac{dy}{dx} = \\frac{u'v - uv'}{v^2}",
          "explanation": "Derivative of top times bottom minus top times derivative of bottom, all over the bottom squared.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the pieces",
          "workingLatex": "= \\frac{\\cos x\\cdot x - \\sin x\\cdot 1}{x^2}",
          "explanation": "Placing $u,u',v,v'$ into the formula.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the derivative",
          "workingLatex": "\\frac{dy}{dx} = \\frac{x\\cos x - \\sin x}{x^2}",
          "explanation": "This is the gradient function of the curve.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute x = pi",
          "workingLatex": "\\frac{dy}{dx}\\bigg|_{x=\\pi} = \\frac{\\pi\\cos\\pi - \\sin\\pi}{\\pi^2}",
          "explanation": "To find the gradient at $x=\\pi$ we put $x=\\pi$ into the gradient function.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the trig values",
          "workingLatex": "\\cos\\pi = -1, \\qquad \\sin\\pi = 0",
          "explanation": "Working in radians, $\\cos\\pi=-1$ and $\\sin\\pi=0$ are standard exact values.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute these values",
          "workingLatex": "= \\frac{\\pi(-1) - 0}{\\pi^2}",
          "explanation": "Replacing the trig terms with their exact values.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Simplify the numerator",
          "workingLatex": "= \\frac{-\\pi}{\\pi^2}",
          "explanation": "The numerator is just $-\\pi$ since the $\\sin\\pi$ term vanishes.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Cancel to get the gradient",
          "workingLatex": "\\frac{dy}{dx}\\bigg|_{x=\\pi} = -\\frac{1}{\\pi}",
          "explanation": "Cancelling one factor of $\\pi$ gives the exact gradient $-\\dfrac{1}{\\pi}$, so the curve is falling there.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\dfrac{dy}{dx} = \\dfrac{x\\cos x - \\sin x}{x^2}$. (b) The gradient at $x=\\pi$ is $-\\dfrac{1}{\\pi}$."
    }
  },
  {
    "id": "al.y2.pure.product-quotient-chain.q050",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Product, quotient and chain rules",
    "subtopicId": "al.y2.pure.product-quotient-chain",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "quotient rule",
      "tangent"
    ],
    "questionText": "The curve $C$ has equation $y = \\dfrac{2x+1}{x-1}$, $x\\neq 1$. Find an equation of the tangent to $C$ at the point where $x=2$, giving your answer in the form $y=mx+c$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the quotient rule",
          "workingLatex": "u = 2x+1, \\qquad v = x-1",
          "explanation": "To find the tangent we first need the gradient function, and the curve is a quotient, so we use the quotient rule.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate each part",
          "workingLatex": "u' = 2, \\qquad v' = 1",
          "explanation": "The derivative of $2x+1$ is $2$, and the derivative of $x-1$ is $1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the quotient rule",
          "workingLatex": "\\frac{dy}{dx} = \\frac{u'v - uv'}{v^2}",
          "explanation": "Derivative of top times bottom minus top times derivative of bottom, all over the bottom squared.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the pieces",
          "workingLatex": "= \\frac{2(x-1) - (2x+1)(1)}{(x-1)^2}",
          "explanation": "Placing $u,u',v,v'$ into the formula.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Expand the numerator",
          "workingLatex": "= \\frac{2x - 2 - 2x - 1}{(x-1)^2}",
          "explanation": "Multiplying out both brackets, being careful with the subtraction of $(2x+1)$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify",
          "workingLatex": "\\frac{dy}{dx} = \\frac{-3}{(x-1)^2}",
          "explanation": "The $2x$ terms cancel, leaving the constant $-3$ on top.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the gradient at x = 2",
          "workingLatex": "m = \\frac{-3}{(2-1)^2} = -3",
          "explanation": "Substituting $x=2$ into the gradient function gives the slope of the tangent, $m=-3$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find the y-coordinate at x = 2",
          "workingLatex": "y = \\frac{2(2)+1}{2-1} = \\frac{5}{1} = 5",
          "explanation": "Substituting $x=2$ into the curve equation gives the height where the tangent touches.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the point of contact",
          "workingLatex": "(2, \\; 5)",
          "explanation": "So the tangent passes through the point $(2,5)$ on the curve.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Use the point-slope form",
          "workingLatex": "y - 5 = -3(x - 2)",
          "explanation": "A straight line through $(x_1,y_1)$ with gradient $m$ has equation $y-y_1=m(x-x_1)$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Rearrange into y = mx + c",
          "workingLatex": "y = -3x + 11",
          "explanation": "Expanding $-3(x-2)=-3x+6$ and adding $5$ gives the tangent in the required form.",
          "diagram": null
        }
      ],
      "finalAnswer": "The tangent at $x=2$ is $y = -3x + 11$ (gradient $-3$, touching $C$ at $(2,5)$)."
    }
  },
  {
    "id": "al.y2.pure.product-quotient-chain.q051",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Product, quotient and chain rules",
    "subtopicId": "al.y2.pure.product-quotient-chain",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "exact",
    "tags": [
      "product rule",
      "chain rule",
      "stationary points"
    ],
    "questionText": "The curve $C$ has equation $y = x^2 e^{3x}$. (a) Find $\\dfrac{dy}{dx}$, simplifying your answer. (b) Find the exact coordinates of the stationary points of $C$. (c) Determine the nature of each stationary point.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise a product and label the factors",
          "workingLatex": "u = x^2, \\qquad v = e^{3x}",
          "explanation": "$y$ is the product of $x^2$ and $e^{3x}$, so the product rule $\\dfrac{d}{dx}(uv)=u'v+uv'$ applies. Because $e^{3x}$ is itself a composition, differentiating it will also need the chain rule.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate the first factor",
          "workingLatex": "u' = 2x",
          "explanation": "Differentiating $x^2$ by the power rule brings the power down and reduces it by one, giving $2x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate the second factor with the chain rule",
          "workingLatex": "v = e^{3x},\\quad w = 3x,\\quad \\frac{dw}{dx}=3,\\quad v' = e^{w}\\cdot 3 = 3e^{3x}",
          "explanation": "Set $w=3x$ so $v=e^{w}$. The chain rule gives $\\dfrac{dv}{dx}=e^{w}\\cdot\\dfrac{dw}{dx}=e^{3x}\\cdot 3$; the extra factor of $3$ comes from the inner function.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the product rule",
          "workingLatex": "\\frac{dy}{dx} = u'v + uv' = 2x e^{3x} + 3x^2 e^{3x}",
          "explanation": "Substitute into $u'v+uv'$: the first term differentiates $x^2$ and keeps $e^{3x}$; the second keeps $x^2$ and uses $v'=3e^{3x}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Factorise the derivative",
          "workingLatex": "\\frac{dy}{dx} = x e^{3x}(3x + 2)",
          "explanation": "Both terms share the common factor $x e^{3x}$. Taking it out makes the derivative easy to set to zero, since a product is zero only when one of its factors is zero.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Set the derivative equal to zero",
          "workingLatex": "x e^{3x}(3x + 2) = 0",
          "explanation": "Stationary points occur where the gradient is zero, so we solve $\\dfrac{dy}{dx}=0$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Use the fact that the exponential is never zero",
          "workingLatex": "e^{3x} > 0 \\ \\text{for all } x",
          "explanation": "An exponential is always positive, so the factor $e^{3x}$ can never make the product vanish. Only the other factors can.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for x",
          "workingLatex": "x = 0 \\qquad \\text{or} \\qquad 3x + 2 = 0 \\ \\Rightarrow\\ x = -\\tfrac{2}{3}",
          "explanation": "Setting each remaining factor to zero gives the two $x$-coordinates of the stationary points.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the y-coordinates",
          "workingLatex": "x=0:\\ y = 0; \\qquad x=-\\tfrac{2}{3}:\\ y = \\left(-\\tfrac{2}{3}\\right)^2 e^{-2} = \\tfrac{4}{9}e^{-2}",
          "explanation": "Substitute each $x$ back into $y=x^2 e^{3x}$. At $x=-\\tfrac23$ the exponent is $3x=-2$, so $y=\\tfrac49 e^{-2}$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the stationary points",
          "workingLatex": "(0,\\,0) \\qquad \\text{and} \\qquad \\left(-\\tfrac{2}{3},\\ \\tfrac{4}{9}e^{-2}\\right)",
          "explanation": "These are the two points at which the curve is momentarily flat.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Differentiate again for the second-derivative test",
          "workingLatex": "\\frac{dy}{dx}=e^{3x}(3x^2+2x) \\ \\Rightarrow\\ \\frac{d^2y}{dx^2}=3e^{3x}(3x^2+2x)+e^{3x}(6x+2)=e^{3x}(9x^2+12x+2)",
          "explanation": "Differentiate $\\dfrac{dy}{dx}$ as a product (again using the chain rule on $e^{3x}$). Expanding and collecting like terms gives $e^{3x}(9x^2+12x+2)$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Test the point x = 0",
          "workingLatex": "\\left.\\frac{d^2y}{dx^2}\\right|_{x=0}=e^{0}(0+0+2)=2>0",
          "explanation": "A positive second derivative means the curve is concave up there, so $(0,0)$ is a local minimum.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Test the point x = -2/3",
          "workingLatex": "\\left.\\frac{d^2y}{dx^2}\\right|_{x=-2/3}=e^{-2}\\left(9\\cdot\\tfrac{4}{9}-8+2\\right)=e^{-2}(4-8+2)=-2e^{-2}<0",
          "explanation": "A negative second derivative means the curve is concave down there, so $\\left(-\\tfrac23,\\tfrac49 e^{-2}\\right)$ is a local maximum.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the nature of each point",
          "workingLatex": "(0,0)\\ \\text{minimum}, \\qquad \\left(-\\tfrac{2}{3},\\tfrac{4}{9}e^{-2}\\right)\\ \\text{maximum}",
          "explanation": "Combining the two tests: the origin is a local minimum and the other stationary point is a local maximum.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\dfrac{dy}{dx}=x e^{3x}(3x+2)$. (b) Stationary points at $(0,0)$ and $\\left(-\\tfrac{2}{3},\\tfrac{4}{9}e^{-2}\\right)$. (c) $(0,0)$ is a local minimum and $\\left(-\\tfrac{2}{3},\\tfrac{4}{9}e^{-2}\\right)$ is a local maximum."
    }
  },
  {
    "id": "al.y2.pure.product-quotient-chain.q052",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Product, quotient and chain rules",
    "subtopicId": "al.y2.pure.product-quotient-chain",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "exact",
    "tags": [
      "product rule",
      "chain rule",
      "stationary points"
    ],
    "questionText": "The curve $C$ has equation $y = (2x+1)^3 e^{x}$. (a) Show that $\\dfrac{dy}{dx}=(2x+1)^2 e^{x}(2x+7)$. (b) Find the coordinates of the stationary points of $C$. (c) Determine the nature of each stationary point.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise a product and label the factors",
          "workingLatex": "u = (2x+1)^3, \\qquad v = e^{x}",
          "explanation": "$y$ is a product of $(2x+1)^3$ and $e^{x}$, so the product rule applies. The first factor is a composition, so its derivative needs the chain rule.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate the first factor with the chain rule",
          "workingLatex": "u = (2x+1)^3,\\quad w = 2x+1,\\quad \\frac{dw}{dx}=2,\\quad u' = 3(2x+1)^2\\cdot 2 = 6(2x+1)^2",
          "explanation": "With $w=2x+1$ we have $u=w^3$, so $u'=3w^2\\cdot\\dfrac{dw}{dx}=3(2x+1)^2\\cdot 2$. The $2$ from the inner function gives $6(2x+1)^2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate the second factor",
          "workingLatex": "v' = e^{x}",
          "explanation": "$e^{x}$ is its own derivative.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the product rule",
          "workingLatex": "\\frac{dy}{dx} = u'v + uv' = 6(2x+1)^2 e^{x} + (2x+1)^3 e^{x}",
          "explanation": "Substituting into $u'v+uv'$ gives two terms; each keeps one factor differentiated and the other unchanged.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Factorise to reach the required form",
          "workingLatex": "\\frac{dy}{dx} = (2x+1)^2 e^{x}\\big[6 + (2x+1)\\big] = (2x+1)^2 e^{x}(2x+7)",
          "explanation": "The common factor is $(2x+1)^2 e^{x}$. Inside the bracket $6+(2x+1)=2x+7$, which matches the form we were asked to show.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Set the derivative equal to zero",
          "workingLatex": "(2x+1)^2 e^{x}(2x+7) = 0",
          "explanation": "Stationary points occur where the gradient is zero.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Discard the exponential factor",
          "workingLatex": "e^{x} > 0 \\ \\text{for all } x",
          "explanation": "Since $e^{x}$ is never zero, only the polynomial factors can make the product vanish.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for x",
          "workingLatex": "(2x+1)^2 = 0 \\ \\Rightarrow\\ x = -\\tfrac12 \\qquad \\text{or} \\qquad 2x+7 = 0 \\ \\Rightarrow\\ x = -\\tfrac72",
          "explanation": "Each factor is set to zero. Note $(2x+1)^2$ gives a repeated root at $x=-\\tfrac12$, which is a hint about its nature.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the y-coordinates",
          "workingLatex": "x=-\\tfrac72:\\ y=(2(-\\tfrac72)+1)^3 e^{-7/2}=(-6)^3 e^{-7/2}=-216e^{-7/2}; \\qquad x=-\\tfrac12:\\ y=0^3 e^{-1/2}=0",
          "explanation": "Substitute each $x$ into $y=(2x+1)^3 e^{x}$. At $x=-\\tfrac12$ the bracket is zero, so $y=0$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the stationary points",
          "workingLatex": "\\left(-\\tfrac72,\\ -216e^{-7/2}\\right) \\qquad \\text{and} \\qquad \\left(-\\tfrac12,\\ 0\\right)",
          "explanation": "These are the two stationary points of the curve.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Set up a sign test using the factored derivative",
          "workingLatex": "\\text{sign of } \\frac{dy}{dx} = \\text{sign of }(2x+7), \\quad \\text{since } (2x+1)^2 \\ge 0 \\ \\text{and}\\ e^{x} > 0",
          "explanation": "Because $(2x+1)^2$ is a square (never negative) and $e^{x}>0$, the sign of the gradient is controlled entirely by the factor $(2x+7)$. This is quicker than a second-derivative test.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Examine the gradient either side of x = -7/2",
          "workingLatex": "x=-4:\\ 2x+7=-1<0\\ \\Rightarrow\\ \\tfrac{dy}{dx}<0; \\qquad x=-2:\\ 2x+7=3>0\\ \\Rightarrow\\ \\tfrac{dy}{dx}>0",
          "explanation": "The gradient changes from negative to positive as $x$ increases through $-\\tfrac72$, so $\\left(-\\tfrac72,-216e^{-7/2}\\right)$ is a local minimum.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Examine the gradient either side of x = -1/2",
          "workingLatex": "x=-1:\\ \\tfrac{dy}{dx}>0; \\qquad x=0:\\ \\tfrac{dy}{dx}>0 \\quad (\\text{no sign change})",
          "explanation": "Because $(2x+1)^2$ keeps the gradient positive on both sides of $-\\tfrac12$, the gradient touches zero without changing sign, so this is a stationary point of inflection.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the nature of each point",
          "workingLatex": "\\left(-\\tfrac72,-216e^{-7/2}\\right)\\ \\text{minimum}, \\qquad \\left(-\\tfrac12,0\\right)\\ \\text{stationary point of inflection}",
          "explanation": "The sign analysis classifies the two points: a minimum where the gradient reverses, and a stationary point of inflection where it does not.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\dfrac{dy}{dx}=(2x+1)^2 e^{x}(2x+7)$ (shown). (b) Stationary points at $\\left(-\\tfrac72,-216e^{-7/2}\\right)$ and $\\left(-\\tfrac12,0\\right)$. (c) $\\left(-\\tfrac72,-216e^{-7/2}\\right)$ is a local minimum and $\\left(-\\tfrac12,0\\right)$ is a stationary point of inflection."
    }
  },
  {
    "id": "al.y2.pure.product-quotient-chain.q053",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Product, quotient and chain rules",
    "subtopicId": "al.y2.pure.product-quotient-chain",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "exact",
    "tags": [
      "product rule",
      "chain rule",
      "second derivative"
    ],
    "questionText": "The curve $C$ has equation $y = x e^{-x^2}$. (a) Find $\\dfrac{dy}{dx}$. (b) Find the exact coordinates of the stationary points of $C$. (c) Use the second derivative to determine the nature of each stationary point.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise a product and label the factors",
          "workingLatex": "u = x, \\qquad v = e^{-x^2}",
          "explanation": "$y$ is the product of $x$ and $e^{-x^2}$. The exponential has $-x^2$ inside, so its derivative needs the chain rule.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate the first factor",
          "workingLatex": "u' = 1",
          "explanation": "The derivative of $x$ is $1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate the second factor with the chain rule",
          "workingLatex": "v = e^{-x^2},\\quad w = -x^2,\\quad \\frac{dw}{dx}=-2x,\\quad v' = e^{-x^2}\\cdot(-2x) = -2x e^{-x^2}",
          "explanation": "With $w=-x^2$ we have $v=e^{w}$, so $v'=e^{w}\\cdot\\dfrac{dw}{dx}=e^{-x^2}\\cdot(-2x)$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the product rule",
          "workingLatex": "\\frac{dy}{dx} = u'v + uv' = 1\\cdot e^{-x^2} + x\\left(-2x e^{-x^2}\\right) = e^{-x^2} - 2x^2 e^{-x^2}",
          "explanation": "Substituting into $u'v+uv'$ gives the two terms shown.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Factorise the derivative",
          "workingLatex": "\\frac{dy}{dx} = e^{-x^2}\\left(1 - 2x^2\\right)",
          "explanation": "Both terms share $e^{-x^2}$; taking it out leaves the simple bracket $1-2x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Set the derivative to zero",
          "workingLatex": "e^{-x^2} > 0 \\ \\Rightarrow\\ 1 - 2x^2 = 0",
          "explanation": "The exponential is always positive, so the gradient is zero exactly when the bracket is zero.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for x",
          "workingLatex": "x^2 = \\tfrac12 \\ \\Rightarrow\\ x = \\pm\\tfrac{1}{\\sqrt2} = \\pm\\tfrac{\\sqrt2}{2}",
          "explanation": "Rearranging $1-2x^2=0$ gives $x^2=\\tfrac12$, so there are two symmetric stationary points.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find the y-coordinates",
          "workingLatex": "x=\\tfrac{1}{\\sqrt2}:\\ y=\\tfrac{1}{\\sqrt2}e^{-1/2}; \\qquad x=-\\tfrac{1}{\\sqrt2}:\\ y=-\\tfrac{1}{\\sqrt2}e^{-1/2}",
          "explanation": "At each point the exponent is $-x^2=-\\tfrac12$, so $y=x e^{-1/2}$. The heights are equal in size but opposite in sign.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the stationary points",
          "workingLatex": "\\left(\\tfrac{1}{\\sqrt2},\\ \\tfrac{1}{\\sqrt2}e^{-1/2}\\right) \\qquad \\text{and} \\qquad \\left(-\\tfrac{1}{\\sqrt2},\\ -\\tfrac{1}{\\sqrt2}e^{-1/2}\\right)",
          "explanation": "These are the two stationary points, symmetric through the origin.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Differentiate again for the second-derivative test",
          "workingLatex": "\\frac{d^2y}{dx^2}=\\frac{d}{dx}\\left[e^{-x^2}(1-2x^2)\\right]=(-2x e^{-x^2})(1-2x^2)+e^{-x^2}(-4x)=e^{-x^2}(4x^3-6x)",
          "explanation": "Differentiate $\\dfrac{dy}{dx}$ as a product, using the chain rule again on $e^{-x^2}$. Combining the terms gives $e^{-x^2}(4x^3-6x)$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Factorise the second derivative",
          "workingLatex": "\\frac{d^2y}{dx^2}=2x e^{-x^2}(2x^2-3)",
          "explanation": "Taking out $2x e^{-x^2}$ makes the sign easy to read at each stationary point.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Test x = 1/sqrt(2)",
          "workingLatex": "2\\cdot\\tfrac{1}{\\sqrt2}e^{-1/2}\\left(2\\cdot\\tfrac12-3\\right)=\\sqrt2\\,e^{-1/2}(1-3)=-2\\sqrt2\\,e^{-1/2}<0",
          "explanation": "The second derivative is negative here, so the curve is concave down and $\\left(\\tfrac{1}{\\sqrt2},\\tfrac{1}{\\sqrt2}e^{-1/2}\\right)$ is a local maximum.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Test x = -1/sqrt(2)",
          "workingLatex": "2\\cdot\\left(-\\tfrac{1}{\\sqrt2}\\right)e^{-1/2}(1-3)=-\\sqrt2\\,e^{-1/2}(-2)=2\\sqrt2\\,e^{-1/2}>0",
          "explanation": "The second derivative is positive here, so the curve is concave up and $\\left(-\\tfrac{1}{\\sqrt2},-\\tfrac{1}{\\sqrt2}e^{-1/2}\\right)$ is a local minimum.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the nature of each point",
          "workingLatex": "\\left(\\tfrac{1}{\\sqrt2},\\tfrac{1}{\\sqrt2}e^{-1/2}\\right)\\ \\text{maximum}, \\qquad \\left(-\\tfrac{1}{\\sqrt2},-\\tfrac{1}{\\sqrt2}e^{-1/2}\\right)\\ \\text{minimum}",
          "explanation": "The second-derivative test classifies the right-hand point as a maximum and the left-hand point as a minimum.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\dfrac{dy}{dx}=e^{-x^2}(1-2x^2)$. (b) Stationary points at $\\left(\\tfrac{1}{\\sqrt2},\\tfrac{1}{\\sqrt2}e^{-1/2}\\right)$ and $\\left(-\\tfrac{1}{\\sqrt2},-\\tfrac{1}{\\sqrt2}e^{-1/2}\\right)$. (c) The first is a local maximum, the second a local minimum."
    }
  },
  {
    "id": "al.y2.pure.product-quotient-chain.q054",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Product, quotient and chain rules",
    "subtopicId": "al.y2.pure.product-quotient-chain",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "exact",
    "tags": [
      "product rule",
      "chain rule",
      "tangent and normal"
    ],
    "questionText": "The curve $C$ has equation $y = e^{x}\\sin 2x$, where $x$ is measured in radians. (a) Find $\\dfrac{dy}{dx}$. (b) Find the equation of the tangent to $C$ at the origin. (c) Find the equation of the normal to $C$ at the origin. (d) Find the exact value of the gradient of $C$ at $x=\\dfrac{\\pi}{4}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise a product and label the factors",
          "workingLatex": "u = e^{x}, \\qquad v = \\sin 2x",
          "explanation": "$y$ is the product of $e^{x}$ and $\\sin 2x$, so the product rule applies. The factor $\\sin 2x$ is a composition, so its derivative needs the chain rule.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate the first factor",
          "workingLatex": "u' = e^{x}",
          "explanation": "$e^{x}$ is its own derivative.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate the second factor with the chain rule",
          "workingLatex": "v = \\sin 2x,\\quad w = 2x,\\quad \\frac{dw}{dx}=2,\\quad v' = \\cos(2x)\\cdot 2 = 2\\cos 2x",
          "explanation": "With $w=2x$, $v=\\sin w$ and $v'=\\cos w\\cdot\\dfrac{dw}{dx}=\\cos 2x\\cdot 2$. The inner derivative supplies the factor $2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the product rule",
          "workingLatex": "\\frac{dy}{dx} = e^{x}\\sin 2x + e^{x}\\cdot 2\\cos 2x",
          "explanation": "Substitute into $u'v+uv'$: the first term keeps $\\sin 2x$, the second uses $v'=2\\cos 2x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Factorise the derivative",
          "workingLatex": "\\frac{dy}{dx} = e^{x}\\left(\\sin 2x + 2\\cos 2x\\right)",
          "explanation": "Both terms share $e^{x}$; factoring it out gives a tidy expression that is easy to evaluate.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Confirm the origin lies on C",
          "workingLatex": "x=0:\\ y = e^{0}\\sin 0 = 0 \\ \\Rightarrow\\ (0,0) \\in C",
          "explanation": "Before finding a tangent at the origin, we check the point is actually on the curve: at $x=0$, $y=0$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the gradient at the origin",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{x=0}=e^{0}(\\sin 0 + 2\\cos 0)=1(0+2)=2",
          "explanation": "Substituting $x=0$: $\\sin 0=0$ and $\\cos 0=1$, so the gradient of the tangent is $2$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the equation of the tangent",
          "workingLatex": "y - 0 = 2(x - 0) \\ \\Rightarrow\\ y = 2x",
          "explanation": "Using $y-y_1=m(x-x_1)$ with $(0,0)$ and gradient $2$ gives the tangent line $y=2x$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the gradient of the normal",
          "workingLatex": "m_{\\text{normal}} = -\\frac{1}{2}",
          "explanation": "The normal is perpendicular to the tangent, so its gradient is the negative reciprocal of $2$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Write the equation of the normal",
          "workingLatex": "y - 0 = -\\tfrac12(x - 0) \\ \\Rightarrow\\ y = -\\tfrac12 x",
          "explanation": "Using the same point $(0,0)$ with gradient $-\\tfrac12$ gives the normal line.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the tangent and normal",
          "workingLatex": "\\text{Tangent: } y = 2x \\qquad \\text{Normal: } y = -\\tfrac12 x",
          "explanation": "These two lines meet the curve at the origin at right angles to one another.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Prepare to evaluate the gradient at x = pi/4",
          "workingLatex": "x=\\tfrac{\\pi}{4} \\ \\Rightarrow\\ 2x = \\tfrac{\\pi}{2}",
          "explanation": "For part (d) we substitute $x=\\tfrac{\\pi}{4}$; the inner angle becomes $2x=\\tfrac{\\pi}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Evaluate the trigonometric values",
          "workingLatex": "\\sin\\tfrac{\\pi}{2}=1, \\qquad \\cos\\tfrac{\\pi}{2}=0",
          "explanation": "At $\\tfrac{\\pi}{2}$ radians the sine is $1$ and the cosine is $0$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Compute the exact gradient",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{x=\\pi/4}=e^{\\pi/4}\\left(1 + 2\\cdot 0\\right)=e^{\\pi/4}",
          "explanation": "The bracket collapses to $1$, leaving the exact gradient $e^{\\pi/4}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\dfrac{dy}{dx}=e^{x}(\\sin 2x + 2\\cos 2x)$. (b) Tangent: $y=2x$. (c) Normal: $y=-\\tfrac12 x$. (d) Gradient at $x=\\tfrac{\\pi}{4}$ is $e^{\\pi/4}$."
    }
  },
  {
    "id": "al.y2.pure.product-quotient-chain.q055",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Product, quotient and chain rules",
    "subtopicId": "al.y2.pure.product-quotient-chain",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "exact",
    "tags": [
      "product rule",
      "chain rule",
      "tangent and normal"
    ],
    "questionText": "The curve $C$ has equation $y = x^2\\cos 3x$, where $x$ is measured in radians. (a) Find $\\dfrac{dy}{dx}$. (b) Find the exact gradient of $C$ at the point where $x=\\pi$. (c) Find the equations of the tangent and the normal to $C$ at the point where $x=\\pi$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise a product and label the factors",
          "workingLatex": "u = x^2, \\qquad v = \\cos 3x",
          "explanation": "$y$ is the product of $x^2$ and $\\cos 3x$, so the product rule applies. The factor $\\cos 3x$ is a composition, needing the chain rule.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate the first factor",
          "workingLatex": "u' = 2x",
          "explanation": "Differentiating $x^2$ by the power rule gives $2x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate the second factor with the chain rule",
          "workingLatex": "v = \\cos 3x,\\quad w = 3x,\\quad \\frac{dw}{dx}=3,\\quad v' = -\\sin(3x)\\cdot 3 = -3\\sin 3x",
          "explanation": "With $w=3x$, $v=\\cos w$ so $v'=-\\sin w\\cdot\\dfrac{dw}{dx}=-\\sin 3x\\cdot 3$. The inner derivative gives the factor $3$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the product rule",
          "workingLatex": "\\frac{dy}{dx} = 2x\\cos 3x + x^2(-3\\sin 3x) = 2x\\cos 3x - 3x^2\\sin 3x",
          "explanation": "Substituting into $u'v+uv'$ gives the derivative as a difference of two terms.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the trig functions at x = pi",
          "workingLatex": "x=\\pi \\ \\Rightarrow\\ 3x=3\\pi;\\qquad \\cos 3\\pi = -1,\\quad \\sin 3\\pi = 0",
          "explanation": "Since $3\\pi=\\pi+2\\pi$, it is coterminal with $\\pi$, so $\\cos 3\\pi=\\cos\\pi=-1$ and $\\sin 3\\pi=\\sin\\pi=0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute the gradient at x = pi",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{x=\\pi}=2\\pi(-1)-3\\pi^2(0)=-2\\pi",
          "explanation": "The $\\sin$ term vanishes, leaving the exact gradient $-2\\pi$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the point of contact",
          "workingLatex": "y = \\pi^2\\cos 3\\pi = \\pi^2(-1) = -\\pi^2 \\ \\Rightarrow\\ (\\pi,\\ -\\pi^2)",
          "explanation": "Substituting $x=\\pi$ into $y=x^2\\cos 3x$ gives the $y$-coordinate, so the tangent touches at $(\\pi,-\\pi^2)$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the tangent in point-gradient form",
          "workingLatex": "y - (-\\pi^2) = -2\\pi(x - \\pi)",
          "explanation": "Use $y-y_1=m(x-x_1)$ with the point $(\\pi,-\\pi^2)$ and gradient $-2\\pi$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Simplify the tangent equation",
          "workingLatex": "y + \\pi^2 = -2\\pi x + 2\\pi^2 \\ \\Rightarrow\\ y = -2\\pi x + \\pi^2",
          "explanation": "Expanding the bracket and subtracting $\\pi^2$ from both sides gives the tangent in the form $y=\\pi^2-2\\pi x$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the tangent",
          "workingLatex": "y = \\pi^2 - 2\\pi x",
          "explanation": "This is the equation of the tangent at $x=\\pi$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Find the gradient of the normal",
          "workingLatex": "m_{\\text{normal}} = -\\frac{1}{-2\\pi} = \\frac{1}{2\\pi}",
          "explanation": "The normal's gradient is the negative reciprocal of $-2\\pi$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Write the normal in point-gradient form",
          "workingLatex": "y - (-\\pi^2) = \\frac{1}{2\\pi}(x - \\pi)",
          "explanation": "Use the same contact point $(\\pi,-\\pi^2)$ with the normal gradient $\\tfrac{1}{2\\pi}$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Simplify the normal equation",
          "workingLatex": "y = \\frac{x}{2\\pi} - \\frac{\\pi}{2\\pi} - \\pi^2 = \\frac{x}{2\\pi} - \\frac{1}{2} - \\pi^2",
          "explanation": "Expanding $\\tfrac{1}{2\\pi}(x-\\pi)$ gives $\\tfrac{x}{2\\pi}-\\tfrac12$; then subtract $\\pi^2$ from the point.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the tangent and normal",
          "workingLatex": "\\text{Tangent: } y = \\pi^2 - 2\\pi x \\qquad \\text{Normal: } y = \\frac{x}{2\\pi} - \\frac{1}{2} - \\pi^2",
          "explanation": "These are the required tangent and normal at the point $(\\pi,-\\pi^2)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\dfrac{dy}{dx}=2x\\cos 3x - 3x^2\\sin 3x$. (b) Gradient at $x=\\pi$ is $-2\\pi$. (c) Tangent: $y=\\pi^2-2\\pi x$; Normal: $y=\\dfrac{x}{2\\pi}-\\dfrac12-\\pi^2$."
    }
  },
  {
    "id": "al.y2.pure.product-quotient-chain.q056",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Product, quotient and chain rules",
    "subtopicId": "al.y2.pure.product-quotient-chain",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "exact",
    "tags": [
      "quotient rule",
      "chain rule",
      "stationary points"
    ],
    "questionText": "The curve $C$ has equation $y = \\dfrac{\\sin 2x}{x}$, $x\\ne 0$, where $x$ is measured in radians. (a) Find $\\dfrac{dy}{dx}$. (b) Find the exact gradient of $C$ at $x=\\dfrac{\\pi}{4}$. (c) Show that the $x$-coordinates of the stationary points of $C$ satisfy $\\tan 2x = 2x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise a quotient and label the parts",
          "workingLatex": "u = \\sin 2x, \\qquad v = x",
          "explanation": "$y$ is a quotient, so the quotient rule $\\dfrac{d}{dx}\\!\\left(\\dfrac{u}{v}\\right)=\\dfrac{u'v-uv'}{v^2}$ applies. The numerator $\\sin 2x$ is a composition, so it also needs the chain rule.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate the numerator with the chain rule",
          "workingLatex": "u = \\sin 2x,\\quad w = 2x,\\quad \\frac{dw}{dx}=2,\\quad u' = \\cos(2x)\\cdot 2 = 2\\cos 2x",
          "explanation": "With $w=2x$, $u=\\sin w$ and $u'=\\cos w\\cdot\\dfrac{dw}{dx}=\\cos 2x\\cdot 2$. The inner derivative gives the factor $2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate the denominator",
          "workingLatex": "v' = 1",
          "explanation": "The derivative of $x$ is $1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the quotient rule",
          "workingLatex": "\\frac{dy}{dx} = \\frac{u'v - uv'}{v^2}",
          "explanation": "We substitute our four pieces into this standard formula.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute and simplify",
          "workingLatex": "\\frac{dy}{dx} = \\frac{2\\cos 2x\\cdot x - \\sin 2x\\cdot 1}{x^2} = \\frac{2x\\cos 2x - \\sin 2x}{x^2}",
          "explanation": "Placing $u'v-uv'$ over $v^2=x^2$ gives the derivative in a single tidy fraction.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Prepare to evaluate at x = pi/4",
          "workingLatex": "x=\\tfrac{\\pi}{4} \\ \\Rightarrow\\ 2x = \\tfrac{\\pi}{2}",
          "explanation": "For part (b) substitute $x=\\tfrac{\\pi}{4}$; the inner angle becomes $2x=\\tfrac{\\pi}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the trigonometric values",
          "workingLatex": "\\cos\\tfrac{\\pi}{2}=0, \\qquad \\sin\\tfrac{\\pi}{2}=1",
          "explanation": "At $\\tfrac{\\pi}{2}$ radians the cosine is $0$ and the sine is $1$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compute the exact gradient",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{x=\\pi/4} = \\frac{2\\cdot\\tfrac{\\pi}{4}\\cdot 0 - 1}{\\left(\\tfrac{\\pi}{4}\\right)^2} = \\frac{-1}{\\pi^2/16} = -\\frac{16}{\\pi^2}",
          "explanation": "The first term of the numerator vanishes, and dividing by $\\tfrac{\\pi^2}{16}$ is the same as multiplying by $\\tfrac{16}{\\pi^2}$, giving $-\\tfrac{16}{\\pi^2}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Set the derivative to zero for stationary points",
          "workingLatex": "\\frac{dy}{dx}=0 \\ \\Rightarrow\\ \\frac{2x\\cos 2x - \\sin 2x}{x^2} = 0",
          "explanation": "Stationary points occur where the gradient is zero. A fraction is zero only when its numerator is zero (and here $x\\ne 0$, so the denominator is fine).",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Set the numerator to zero",
          "workingLatex": "2x\\cos 2x - \\sin 2x = 0",
          "explanation": "Since $x^2\\ne 0$, the whole fraction is zero exactly when the numerator is zero.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Rearrange the equation",
          "workingLatex": "2x\\cos 2x = \\sin 2x",
          "explanation": "Move the sine term to the other side to prepare for dividing.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Divide through by cos 2x",
          "workingLatex": "2x = \\frac{\\sin 2x}{\\cos 2x} = \\tan 2x",
          "explanation": "Dividing both sides by $\\cos 2x$ turns the right-hand side into $\\tan 2x$ (valid where $\\cos 2x\\ne 0$).",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the required result",
          "workingLatex": "\\tan 2x = 2x",
          "explanation": "So the $x$-coordinates of the stationary points satisfy $\\tan 2x = 2x$, as required.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\dfrac{dy}{dx}=\\dfrac{2x\\cos 2x - \\sin 2x}{x^2}$. (b) Gradient at $x=\\tfrac{\\pi}{4}$ is $-\\dfrac{16}{\\pi^2}$. (c) Setting the numerator to zero and dividing by $\\cos 2x$ gives $\\tan 2x = 2x$ (shown)."
    }
  },
  {
    "id": "al.y2.pure.product-quotient-chain.q057",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Product, quotient and chain rules",
    "subtopicId": "al.y2.pure.product-quotient-chain",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "proof",
    "tags": [
      "quotient rule",
      "chain rule",
      "increasing function"
    ],
    "questionText": "The curve $C$ has equation $y = \\dfrac{e^{2x}}{x^2+1}$. (a) Find $\\dfrac{dy}{dx}$, giving your answer as a single fraction. (b) Show that $C$ has no stationary points, and hence prove that $C$ is increasing for all real values of $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise a quotient and label the parts",
          "workingLatex": "u = e^{2x}, \\qquad v = x^2 + 1",
          "explanation": "$y$ is a quotient, so the quotient rule applies. The numerator $e^{2x}$ is a composition, so it also needs the chain rule.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate the numerator with the chain rule",
          "workingLatex": "u = e^{2x},\\quad w = 2x,\\quad \\frac{dw}{dx}=2,\\quad u' = e^{2x}\\cdot 2 = 2e^{2x}",
          "explanation": "With $w=2x$, $u=e^{w}$ and $u'=e^{w}\\cdot\\dfrac{dw}{dx}=e^{2x}\\cdot 2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate the denominator",
          "workingLatex": "v' = 2x",
          "explanation": "Differentiating $x^2+1$ gives $2x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the quotient rule",
          "workingLatex": "\\frac{dy}{dx} = \\frac{u'v - uv'}{v^2}",
          "explanation": "We substitute the four pieces into this standard formula.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the pieces",
          "workingLatex": "\\frac{dy}{dx} = \\frac{2e^{2x}(x^2+1) - e^{2x}(2x)}{(x^2+1)^2}",
          "explanation": "Place $u'v-uv'$ over $v^2=(x^2+1)^2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Factor the exponential out of the numerator",
          "workingLatex": "\\frac{dy}{dx} = \\frac{e^{2x}\\big[2(x^2+1) - 2x\\big]}{(x^2+1)^2}",
          "explanation": "Both numerator terms contain $e^{2x}$, so we take it outside the bracket.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify the bracket",
          "workingLatex": "\\frac{dy}{dx} = \\frac{2e^{2x}\\left(x^2 - x + 1\\right)}{(x^2+1)^2}",
          "explanation": "Inside the bracket $2x^2+2-2x = 2(x^2-x+1)$, so the derivative simplifies to this single fraction.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Consider when the derivative can be zero",
          "workingLatex": "\\frac{dy}{dx}=0 \\ \\Rightarrow\\ \\text{numerator} = 2e^{2x}(x^2-x+1)=0",
          "explanation": "A fraction is zero only when its numerator is zero, so stationary points require the numerator to vanish.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Rule out the exponential and denominator",
          "workingLatex": "e^{2x} > 0 \\ \\text{for all } x, \\qquad (x^2+1)^2 > 0",
          "explanation": "The exponential is always positive, so it cannot make the numerator zero; the denominator is also strictly positive, so the fraction is always defined.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Test the remaining quadratic factor",
          "workingLatex": "x^2 - x + 1 = 0 \\ \\Rightarrow\\ \\Delta = (-1)^2 - 4(1)(1) = 1 - 4 = -3 < 0",
          "explanation": "For a stationary point we would need $x^2-x+1=0$, but its discriminant is negative, so it has no real roots.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Conclude there are no stationary points",
          "workingLatex": "x^2 - x + 1 \\ne 0 \\ \\text{for all real } x \\ \\Rightarrow\\ \\frac{dy}{dx} \\ne 0",
          "explanation": "Since the numerator can never be zero, the gradient is never zero, so $C$ has no stationary points.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Complete the square to show the quadratic is positive",
          "workingLatex": "x^2 - x + 1 = \\left(x - \\tfrac12\\right)^2 + \\tfrac34 > 0",
          "explanation": "Completing the square shows the quadratic is a square plus $\\tfrac34$, so it is strictly positive for every $x$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Determine the sign of the derivative",
          "workingLatex": "\\frac{dy}{dx} = \\frac{2e^{2x}\\left[\\left(x-\\frac12\\right)^2+\\frac34\\right]}{(x^2+1)^2} > 0 \\ \\text{for all } x",
          "explanation": "Every factor is positive: $2e^{2x}>0$, the bracket $>0$, and $(x^2+1)^2>0$. A positive over positive is positive.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the conclusion",
          "workingLatex": "\\frac{dy}{dx} > 0 \\ \\text{for all } x \\ \\Rightarrow\\ C \\text{ is increasing for all real } x",
          "explanation": "A gradient that is positive everywhere means the curve rises everywhere, so $C$ is an increasing function with no stationary points.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\dfrac{dy}{dx}=\\dfrac{2e^{2x}(x^2-x+1)}{(x^2+1)^2}$. (b) The numerator is $2e^{2x}\\left[\\left(x-\\tfrac12\\right)^2+\\tfrac34\\right]$, which is strictly positive, so $\\dfrac{dy}{dx}>0$ for all $x$: $C$ has no stationary points and is increasing everywhere."
    }
  },
  {
    "id": "al.y2.pure.product-quotient-chain.q058",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Product, quotient and chain rules",
    "subtopicId": "al.y2.pure.product-quotient-chain",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "exact",
    "tags": [
      "quotient rule",
      "chain rule",
      "gradient"
    ],
    "questionText": "The curve $C$ has equation $y = \\dfrac{x}{\\sqrt{x^2+1}}$. (a) Show that $\\dfrac{dy}{dx}=\\dfrac{1}{(x^2+1)^{3/2}}$. (b) Hence explain why $C$ is increasing for all $x$. (c) Find the exact $x$-coordinates of the points on $C$ where the gradient is $\\dfrac{1}{8}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise a quotient and label the parts",
          "workingLatex": "u = x, \\qquad v = (x^2+1)^{1/2}",
          "explanation": "Writing the surd as a power, $y=\\dfrac{u}{v}$ with $v=(x^2+1)^{1/2}$. The quotient rule applies, and $v$ is a composition needing the chain rule.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate the numerator",
          "workingLatex": "u' = 1",
          "explanation": "The derivative of $x$ is $1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate the denominator with the chain rule",
          "workingLatex": "v = (x^2+1)^{1/2},\\quad w = x^2+1,\\quad \\frac{dw}{dx}=2x,\\quad v' = \\tfrac12(x^2+1)^{-1/2}(2x) = \\frac{x}{\\sqrt{x^2+1}}",
          "explanation": "With $w=x^2+1$, $v=w^{1/2}$ so $v'=\\tfrac12 w^{-1/2}\\cdot\\dfrac{dw}{dx}$. The factor $2x$ cancels the $\\tfrac12$, leaving $\\dfrac{x}{\\sqrt{x^2+1}}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the quotient rule and the value of v squared",
          "workingLatex": "\\frac{dy}{dx} = \\frac{u'v - uv'}{v^2}, \\qquad v^2 = x^2+1",
          "explanation": "Note that squaring the surd removes it: $v^2=x^2+1$. This will keep the denominator simple.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the pieces",
          "workingLatex": "\\frac{dy}{dx} = \\frac{1\\cdot\\sqrt{x^2+1} - x\\cdot\\dfrac{x}{\\sqrt{x^2+1}}}{x^2+1}",
          "explanation": "Place $u'v-uv'$ over $v^2=x^2+1$. The numerator still contains a surd we must tidy.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine the numerator over a common surd",
          "workingLatex": "\\text{numerator} = \\frac{(x^2+1) - x^2}{\\sqrt{x^2+1}} = \\frac{1}{\\sqrt{x^2+1}}",
          "explanation": "Writing $\\sqrt{x^2+1}=\\dfrac{x^2+1}{\\sqrt{x^2+1}}$ lets us combine the two terms; the $x^2$ terms cancel, leaving $\\dfrac{1}{\\sqrt{x^2+1}}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Divide by the denominator to finish",
          "workingLatex": "\\frac{dy}{dx} = \\frac{1}{\\sqrt{x^2+1}}\\cdot\\frac{1}{x^2+1} = \\frac{1}{(x^2+1)^{3/2}}",
          "explanation": "Dividing by $x^2+1$ means multiplying the surd power $\\tfrac12$ by adding $1$, giving $(x^2+1)^{3/2}$ in the denominator, as required.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Explain why C is increasing",
          "workingLatex": "(x^2+1)^{3/2} > 0 \\ \\text{for all } x \\ \\Rightarrow\\ \\frac{dy}{dx} > 0",
          "explanation": "The denominator is a positive quantity raised to a power, so it is always positive; hence the gradient is positive for every $x$ and $C$ is increasing everywhere.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Set the gradient equal to 1/8",
          "workingLatex": "\\frac{1}{(x^2+1)^{3/2}} = \\frac{1}{8}",
          "explanation": "For part (c) we want the points where the gradient equals $\\tfrac18$, so we set the derivative equal to that value.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Take reciprocals",
          "workingLatex": "(x^2+1)^{3/2} = 8",
          "explanation": "Since both sides are reciprocals of each other, the equation simplifies to $(x^2+1)^{3/2}=8$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Raise both sides to the power 2/3",
          "workingLatex": "x^2+1 = 8^{2/3} = \\left(8^{1/3}\\right)^2 = 2^2 = 4",
          "explanation": "Raising to the power $\\tfrac23$ undoes the power $\\tfrac32$. Here $8^{1/3}=2$, so $8^{2/3}=4$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Solve for x squared",
          "workingLatex": "x^2 = 3",
          "explanation": "Subtracting $1$ from both sides gives $x^2=3$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Solve for x",
          "workingLatex": "x = \\pm\\sqrt{3}",
          "explanation": "Taking square roots gives two symmetric solutions.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the answer",
          "workingLatex": "x = \\sqrt{3} \\quad \\text{and} \\quad x = -\\sqrt{3}",
          "explanation": "So the gradient equals $\\tfrac18$ at the two points with $x=\\pm\\sqrt3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\dfrac{dy}{dx}=\\dfrac{1}{(x^2+1)^{3/2}}$ (shown). (b) The denominator is always positive, so $\\dfrac{dy}{dx}>0$ for all $x$ and $C$ is increasing everywhere. (c) The gradient is $\\tfrac18$ at $x=\\pm\\sqrt3$."
    }
  },
  {
    "id": "al.y2.pure.product-quotient-chain.q059",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Product, quotient and chain rules",
    "subtopicId": "al.y2.pure.product-quotient-chain",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "exact",
    "tags": [
      "quotient rule",
      "chain rule",
      "tangent"
    ],
    "questionText": "The curve $C$ has equation $y = \\dfrac{\\ln(x^2+1)}{x}$, $x\\ne 0$. (a) Find $\\dfrac{dy}{dx}$, giving your answer as a single fraction. (b) Find the exact gradient of $C$ at $x=1$. (c) Find the equation of the tangent to $C$ at the point where $x=1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise a quotient and label the parts",
          "workingLatex": "u = \\ln(x^2+1), \\qquad v = x",
          "explanation": "$y$ is a quotient, so the quotient rule applies. The numerator $\\ln(x^2+1)$ is a composition, so it needs the chain rule.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate the numerator with the chain rule",
          "workingLatex": "u = \\ln(x^2+1),\\quad w = x^2+1,\\quad \\frac{du}{dw}=\\frac{1}{w},\\quad \\frac{dw}{dx}=2x,\\quad u' = \\frac{2x}{x^2+1}",
          "explanation": "For $\\ln w$ the derivative is $\\dfrac{1}{w}\\cdot\\dfrac{dw}{dx}$. With $w=x^2+1$ and $\\dfrac{dw}{dx}=2x$, this gives $\\dfrac{2x}{x^2+1}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate the denominator",
          "workingLatex": "v' = 1",
          "explanation": "The derivative of $x$ is $1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the quotient rule",
          "workingLatex": "\\frac{dy}{dx} = \\frac{u'v - uv'}{v^2}",
          "explanation": "We substitute the four pieces into this standard formula, with $v^2=x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the pieces",
          "workingLatex": "\\frac{dy}{dx} = \\frac{\\dfrac{2x}{x^2+1}\\cdot x - \\ln(x^2+1)\\cdot 1}{x^2}",
          "explanation": "Placing $u'v-uv'$ over $x^2$ gives this expression, which still contains a fraction inside a fraction.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify the numerator",
          "workingLatex": "\\frac{dy}{dx} = \\frac{\\dfrac{2x^2}{x^2+1} - \\ln(x^2+1)}{x^2}",
          "explanation": "Multiplying $\\dfrac{2x}{x^2+1}$ by $x$ gives $\\dfrac{2x^2}{x^2+1}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write as a single fraction",
          "workingLatex": "\\frac{dy}{dx} = \\frac{2x^2 - (x^2+1)\\ln(x^2+1)}{x^2(x^2+1)}",
          "explanation": "Multiplying top and bottom by $(x^2+1)$ clears the inner fraction and gives a single tidy fraction.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute x = 1",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{x=1} = \\frac{2(1) - (1+1)\\ln 2}{1\\cdot(1+1)} = \\frac{2 - 2\\ln 2}{2}",
          "explanation": "At $x=1$: $x^2=1$ and $x^2+1=2$, and $\\ln(x^2+1)=\\ln 2$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Simplify the gradient",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{x=1} = 1 - \\ln 2",
          "explanation": "Dividing $2-2\\ln 2$ by $2$ gives the exact gradient $1-\\ln 2$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Find the point of contact",
          "workingLatex": "y = \\frac{\\ln(1+1)}{1} = \\ln 2 \\ \\Rightarrow\\ (1,\\ \\ln 2)",
          "explanation": "Substituting $x=1$ into $y=\\dfrac{\\ln(x^2+1)}{x}$ gives $y=\\ln 2$, so the tangent touches at $(1,\\ln 2)$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Write the tangent in point-gradient form",
          "workingLatex": "y - \\ln 2 = (1 - \\ln 2)(x - 1)",
          "explanation": "Use $y-y_1=m(x-x_1)$ with the point $(1,\\ln 2)$ and gradient $1-\\ln 2$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Expand the bracket",
          "workingLatex": "y = (1 - \\ln 2)x - (1 - \\ln 2) + \\ln 2",
          "explanation": "Multiply out $(1-\\ln 2)(x-1)$ and add $\\ln 2$ from moving it across.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Simplify the constant term",
          "workingLatex": "y = (1 - \\ln 2)x + 2\\ln 2 - 1",
          "explanation": "The constants combine: $-(1-\\ln 2)+\\ln 2 = -1+\\ln 2+\\ln 2 = 2\\ln 2 - 1$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the gradient and tangent",
          "workingLatex": "\\text{Gradient } = 1 - \\ln 2, \\qquad \\text{Tangent: } y = (1 - \\ln 2)x + 2\\ln 2 - 1",
          "explanation": "These are the exact gradient at $x=1$ and the equation of the tangent there.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\dfrac{dy}{dx}=\\dfrac{2x^2 - (x^2+1)\\ln(x^2+1)}{x^2(x^2+1)}$. (b) Gradient at $x=1$ is $1-\\ln 2$. (c) Tangent: $y=(1-\\ln 2)x + 2\\ln 2 - 1$."
    }
  },
  {
    "id": "al.y2.pure.product-quotient-chain.q060",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Product, quotient and chain rules",
    "subtopicId": "al.y2.pure.product-quotient-chain",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "exact",
    "tags": [
      "product rule",
      "chain rule",
      "stationary points"
    ],
    "questionText": "The curve $C$ has equation $y = (x-1)^2 e^{2x}$. (a) Show that $\\dfrac{dy}{dx}=2x(x-1)e^{2x}$. (b) Find the coordinates of the stationary points of $C$. (c) Determine the nature of each stationary point.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise a product and label the factors",
          "workingLatex": "u = (x-1)^2, \\qquad v = e^{2x}",
          "explanation": "$y$ is a product of two composite functions, so the product rule applies and each factor needs the chain rule.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate the first factor with the chain rule",
          "workingLatex": "u = (x-1)^2,\\quad w = x-1,\\quad \\frac{dw}{dx}=1,\\quad u' = 2(x-1)\\cdot 1 = 2(x-1)",
          "explanation": "With $w=x-1$, $u=w^2$ so $u'=2w\\cdot\\dfrac{dw}{dx}=2(x-1)$; the inner derivative is just $1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate the second factor with the chain rule",
          "workingLatex": "v = e^{2x},\\quad w = 2x,\\quad \\frac{dw}{dx}=2,\\quad v' = e^{2x}\\cdot 2 = 2e^{2x}",
          "explanation": "With $w=2x$, $v=e^{w}$ so $v'=e^{2x}\\cdot 2$; the inner derivative supplies the factor $2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the product rule",
          "workingLatex": "\\frac{dy}{dx} = u'v + uv' = 2(x-1)e^{2x} + (x-1)^2\\cdot 2e^{2x}",
          "explanation": "Substitute into $u'v+uv'$; both terms contain $e^{2x}$ and a power of $(x-1)$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Factorise to reach the required form",
          "workingLatex": "\\frac{dy}{dx} = 2(x-1)e^{2x}\\big[1 + (x-1)\\big] = 2(x-1)e^{2x}\\cdot x = 2x(x-1)e^{2x}",
          "explanation": "The common factor is $2(x-1)e^{2x}$. Inside the bracket $1+(x-1)=x$, giving the clean product $2x(x-1)e^{2x}$, as required.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Set the derivative to zero",
          "workingLatex": "2x(x-1)e^{2x} = 0",
          "explanation": "Stationary points occur where the gradient is zero.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Discard the exponential factor",
          "workingLatex": "e^{2x} > 0 \\ \\text{for all } x",
          "explanation": "The exponential is never zero, so only the factors $x$ and $(x-1)$ can make the product vanish.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for x",
          "workingLatex": "x = 0 \\qquad \\text{or} \\qquad x - 1 = 0 \\ \\Rightarrow\\ x = 1",
          "explanation": "Setting each remaining factor to zero gives the two stationary $x$-values.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the y-coordinates",
          "workingLatex": "x=0:\\ y=(-1)^2 e^{0}=1; \\qquad x=1:\\ y=0^2 e^{2}=0",
          "explanation": "Substitute each $x$ into $y=(x-1)^2 e^{2x}$: at $x=0$, $y=1$; at $x=1$ the squared bracket is zero, so $y=0$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the stationary points",
          "workingLatex": "(0,\\,1) \\qquad \\text{and} \\qquad (1,\\,0)",
          "explanation": "These are the two stationary points of the curve.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Set up a sign test",
          "workingLatex": "\\text{sign of } \\frac{dy}{dx} = \\text{sign of } x(x-1), \\quad \\text{since } e^{2x} > 0",
          "explanation": "Because $e^{2x}$ is always positive, the sign of the gradient is decided by the product $x(x-1)$, whose roots are $0$ and $1$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Examine the gradient either side of x = 0",
          "workingLatex": "x=-\\tfrac12:\\ (-)(-)=+\\ \\Rightarrow\\ \\tfrac{dy}{dx}>0; \\qquad x=\\tfrac12:\\ (+)(-)=-\\ \\Rightarrow\\ \\tfrac{dy}{dx}<0",
          "explanation": "The gradient changes from positive to negative as $x$ increases through $0$, so $(0,1)$ is a local maximum.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Examine the gradient either side of x = 1",
          "workingLatex": "x=\\tfrac12:\\ (+)(-)=-\\ \\Rightarrow\\ \\tfrac{dy}{dx}<0; \\qquad x=\\tfrac32:\\ (+)(+)=+\\ \\Rightarrow\\ \\tfrac{dy}{dx}>0",
          "explanation": "The gradient changes from negative to positive as $x$ increases through $1$, so $(1,0)$ is a local minimum.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the nature of each point",
          "workingLatex": "(0,1)\\ \\text{maximum}, \\qquad (1,0)\\ \\text{minimum}",
          "explanation": "The sign analysis classifies $(0,1)$ as a local maximum and $(1,0)$ as a local minimum.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\dfrac{dy}{dx}=2x(x-1)e^{2x}$ (shown). (b) Stationary points at $(0,1)$ and $(1,0)$. (c) $(0,1)$ is a local maximum and $(1,0)$ is a local minimum."
    }
  },
  {
    "id": "al.y2.pure.product-quotient-chain.q061",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Product, quotient and chain rules",
    "subtopicId": "al.y2.pure.product-quotient-chain",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "exact",
    "tags": [
      "product rule",
      "chain rule",
      "stationary points"
    ],
    "questionText": "The curve $C$ has equation $y = x^2 e^{-x}$. (a) Show that $\\dfrac{dy}{dx} = x(2-x)e^{-x}$. (b) Find the equation of the tangent to $C$ at the point where $x = 1$. (c) Find the coordinates of the two stationary points of $C$ and determine their nature. (d) State the set of values of $x$ for which $C$ is increasing.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the factors for the product rule",
          "workingLatex": "u = x^2, \\qquad v = e^{-x}",
          "explanation": "The function is a product of $x^2$ and $e^{-x}$, so we use $\\tfrac{d}{dx}(uv)=u'v+uv'$. The second factor $e^{-x}$ is itself a composite, so the chain rule will be needed to differentiate it.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate each factor",
          "workingLatex": "u' = 2x, \\qquad v' = -e^{-x}",
          "explanation": "Differentiating $x^2$ gives $2x$. For $e^{-x}$ the chain rule with inner function $-x$ gives $e^{-x}\\times(-1)=-e^{-x}$: the exponential is unchanged but we multiply by the derivative of the exponent.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the product rule",
          "workingLatex": "\\frac{dy}{dx} = u'v + uv' = 2x e^{-x} - x^2 e^{-x}",
          "explanation": "Substituting into $u'v+uv'$ keeps one factor differentiated and the other unchanged in each term.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Factorise the derivative",
          "workingLatex": "\\frac{dy}{dx} = x e^{-x}(2 - x) = x(2-x)e^{-x}",
          "explanation": "Taking out the common factor $x e^{-x}$ gives the required form and makes it easy to set the gradient to zero later, since a product is zero exactly when one factor is zero. This proves the result in (a).",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the gradient at x = 1",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{x=1} = 1\\,(2-1)e^{-1} = e^{-1}",
          "explanation": "Substituting $x=1$ into the factorised derivative gives the slope of the tangent at that point.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the y-coordinate at x = 1",
          "workingLatex": "y = 1^2 e^{-1} = e^{-1} \\quad\\Rightarrow\\quad (1,\\, e^{-1})",
          "explanation": "The tangent touches the curve, so it passes through the point on $C$ with $x=1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Form the tangent equation",
          "workingLatex": "y - e^{-1} = e^{-1}(x - 1) \\;\\Rightarrow\\; y = e^{-1}x = \\frac{x}{e}",
          "explanation": "Using $y-y_1=m(x-x_1)$ and simplifying, the constant terms cancel, so the tangent is $y=\\tfrac{x}{e}$ — a line through the origin.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Set the derivative to zero",
          "workingLatex": "x(2-x)e^{-x} = 0",
          "explanation": "Stationary points occur where the gradient is zero. Since $e^{-x}$ is never zero, only the other factors can vanish.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solve for x",
          "workingLatex": "x = 0 \\quad \\text{or} \\quad x = 2",
          "explanation": "The factor $e^{-x}>0$ always, so we discard it and solve $x=0$ and $2-x=0$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Find the y-coordinates",
          "workingLatex": "x=0:\\; y=0; \\qquad x=2:\\; y = 4e^{-2}",
          "explanation": "Substituting each $x$ into $y=x^2e^{-x}$ gives the heights of the two stationary points.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Compute the second derivative",
          "workingLatex": "\\frac{d^2y}{dx^2} = e^{-x}\\big(x^2 - 4x + 2\\big)",
          "explanation": "Differentiating $(2x-x^2)e^{-x}$ with the product rule gives $(2-2x)e^{-x}-(2x-x^2)e^{-x}=e^{-x}(x^2-4x+2)$. The sign of this determines the nature of each stationary point.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Classify the point at x = 0",
          "workingLatex": "\\left.\\frac{d^2y}{dx^2}\\right|_{x=0} = e^{0}(0-0+2) = 2 > 0",
          "explanation": "A positive second derivative means the curve is concave up, so $(0,0)$ is a local minimum.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Classify the point at x = 2",
          "workingLatex": "\\left.\\frac{d^2y}{dx^2}\\right|_{x=2} = e^{-2}(4-8+2) = -2e^{-2} < 0",
          "explanation": "A negative second derivative means concave down, so $\\left(2,\\tfrac{4}{e^2}\\right)$ is a local maximum.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State where C is increasing",
          "workingLatex": "x(2-x) > 0 \\;\\Rightarrow\\; 0 < x < 2",
          "explanation": "The curve increases where $\\tfrac{dy}{dx}>0$. Since $e^{-x}>0$ always, the sign is governed by $x(2-x)$, which is positive precisely between its roots $0$ and $2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\dfrac{dy}{dx}=x(2-x)e^{-x}$. (b) $y=\\dfrac{x}{e}$. (c) $(0,0)$ is a minimum and $\\left(2,\\dfrac{4}{e^2}\\right)$ is a maximum. (d) $C$ is increasing for $0<x<2$."
    }
  },
  {
    "id": "al.y2.pure.product-quotient-chain.q062",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Product, quotient and chain rules",
    "subtopicId": "al.y2.pure.product-quotient-chain",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "exact",
    "tags": [
      "quotient rule",
      "stationary points",
      "range"
    ],
    "questionText": "The curve $C$ has equation $y = \\dfrac{x}{x^2+1}$. (a) Show that $\\dfrac{dy}{dx} = \\dfrac{1-x^2}{(x^2+1)^2}$. (b) Find the equation of the tangent to $C$ at the origin. (c) Find the coordinates of the stationary points of $C$ and determine their nature. (d) Deduce the greatest and least values of $y$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the parts for the quotient rule",
          "workingLatex": "u = x, \\qquad v = x^2 + 1",
          "explanation": "The function is a single fraction, so we use the quotient rule $\\tfrac{d}{dx}\\!\\left(\\tfrac{u}{v}\\right)=\\tfrac{u'v-uv'}{v^2}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate each part",
          "workingLatex": "u' = 1, \\qquad v' = 2x",
          "explanation": "Both are standard power-rule derivatives.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the quotient rule",
          "workingLatex": "\\frac{dy}{dx} = \\frac{u'v - uv'}{v^2} = \\frac{1\\cdot(x^2+1) - x\\cdot 2x}{(x^2+1)^2}",
          "explanation": "Substituting into the quotient rule; the order $u'v-uv'$ matters, so we keep it exact.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the numerator",
          "workingLatex": "\\frac{dy}{dx} = \\frac{x^2 + 1 - 2x^2}{(x^2+1)^2} = \\frac{1 - x^2}{(x^2+1)^2}",
          "explanation": "Collecting the $x^2$ terms gives $1-x^2$, proving the result in (a).",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the gradient at the origin",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{x=0} = \\frac{1-0}{(0+1)^2} = 1",
          "explanation": "The origin lies on $C$ because $y=0$ when $x=0$; substituting $x=0$ gives the slope there.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Form the tangent at the origin",
          "workingLatex": "y - 0 = 1\\,(x - 0) \\;\\Rightarrow\\; y = x",
          "explanation": "With gradient $1$ through $(0,0)$, the tangent is simply $y=x$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Set the derivative to zero",
          "workingLatex": "\\frac{1 - x^2}{(x^2+1)^2} = 0 \\;\\Rightarrow\\; 1 - x^2 = 0",
          "explanation": "A fraction is zero only when its numerator is zero. The denominator $(x^2+1)^2$ is always positive, so it can never make the gradient zero.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for x",
          "workingLatex": "x^2 = 1 \\;\\Rightarrow\\; x = 1 \\ \\text{or}\\ x = -1",
          "explanation": "These are the only $x$-values where the tangent is horizontal.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the y-coordinates",
          "workingLatex": "x=1:\\ y = \\tfrac{1}{2}; \\qquad x=-1:\\ y = -\\tfrac{1}{2}",
          "explanation": "Substituting into $y=\\tfrac{x}{x^2+1}$ gives the two stationary points $\\left(1,\\tfrac12\\right)$ and $\\left(-1,-\\tfrac12\\right)$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Set up the sign test",
          "workingLatex": "\\operatorname{sign}\\!\\left(\\frac{dy}{dx}\\right) = \\operatorname{sign}(1 - x^2)",
          "explanation": "Since $(x^2+1)^2>0$ for all $x$, the sign of the gradient is controlled entirely by the numerator $1-x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Classify the point at x = 1",
          "workingLatex": "1 - x^2:\\ \\ (+)\\ \\to\\ (-) \\ \\text{as } x \\text{ increases through } 1",
          "explanation": "The gradient changes from positive to negative, so $\\left(1,\\tfrac12\\right)$ is a local maximum.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Classify the point at x = -1",
          "workingLatex": "1 - x^2:\\ \\ (-)\\ \\to\\ (+) \\ \\text{as } x \\text{ increases through } -1",
          "explanation": "The gradient changes from negative to positive, so $\\left(-1,-\\tfrac12\\right)$ is a local minimum.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Consider the behaviour for large x",
          "workingLatex": "\\text{as } x \\to \\pm\\infty,\\quad y = \\frac{x}{x^2+1} \\to 0",
          "explanation": "The denominator grows faster than the numerator, so the curve flattens towards the $x$-axis at both ends. The turning values are therefore the extreme heights of the whole curve.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Deduce the greatest and least values",
          "workingLatex": "-\\tfrac{1}{2} \\le y \\le \\tfrac{1}{2}",
          "explanation": "With the curve tending to $0$ at both ends, the maximum $\\tfrac12$ is the greatest value of $y$ and the minimum $-\\tfrac12$ is the least.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\dfrac{dy}{dx}=\\dfrac{1-x^2}{(x^2+1)^2}$. (b) $y=x$. (c) $\\left(1,\\tfrac12\\right)$ is a maximum and $\\left(-1,-\\tfrac12\\right)$ is a minimum. (d) Greatest value $\\tfrac12$, least value $-\\tfrac12$."
    }
  },
  {
    "id": "al.y2.pure.product-quotient-chain.q063",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Product, quotient and chain rules",
    "subtopicId": "al.y2.pure.product-quotient-chain",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "exact",
    "tags": [
      "product rule",
      "reciprocal trig",
      "stationary points"
    ],
    "questionText": "The curve $C$ has equation $y = e^x \\sec x$ for $-\\dfrac{\\pi}{2} < x < \\dfrac{\\pi}{2}$. (a) Show that $\\dfrac{dy}{dx} = e^x \\sec x\\,(1 + \\tan x)$. (b) Find the equation of the tangent to $C$ at the point where $x = 0$. (c) Find the exact coordinates of the stationary point of $C$. (d) Determine the nature of this stationary point.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the factors for the product rule",
          "workingLatex": "u = e^x, \\qquad v = \\sec x",
          "explanation": "The function is a product, so we use $\\tfrac{d}{dx}(uv)=u'v+uv'$. Recall the reciprocal-trig result $\\tfrac{d}{dx}\\sec x=\\sec x\\tan x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate each factor",
          "workingLatex": "u' = e^x, \\qquad v' = \\sec x \\tan x",
          "explanation": "The exponential is its own derivative, and $\\sec x$ differentiates to $\\sec x\\tan x$ (a standard result from applying the quotient/chain rule to $1/\\cos x$).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the product rule",
          "workingLatex": "\\frac{dy}{dx} = e^x \\sec x + e^x \\sec x \\tan x",
          "explanation": "Substituting into $u'v+uv'$ gives the two terms.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Factorise the derivative",
          "workingLatex": "\\frac{dy}{dx} = e^x \\sec x\\,(1 + \\tan x)",
          "explanation": "Both terms share the factor $e^x\\sec x$; taking it out gives the required form and isolates the part that can be zero. This proves (a).",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the gradient at x = 0",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{x=0} = e^{0}\\sec 0\\,(1 + \\tan 0) = 1\\cdot 1\\cdot 1 = 1",
          "explanation": "Using $\\sec 0=1$ and $\\tan 0=0$, the slope of the tangent at the $y$-axis is $1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the y-coordinate at x = 0",
          "workingLatex": "y = e^{0}\\sec 0 = 1 \\quad\\Rightarrow\\quad (0,\\,1)",
          "explanation": "The curve crosses the $y$-axis at height $1$, which is where the tangent touches.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Form the tangent equation",
          "workingLatex": "y - 1 = 1\\,(x - 0) \\;\\Rightarrow\\; y = x + 1",
          "explanation": "Using $y-y_1=m(x-x_1)$ with gradient $1$ through $(0,1)$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Set the derivative to zero",
          "workingLatex": "e^x \\sec x\\,(1 + \\tan x) = 0",
          "explanation": "Stationary points need a zero gradient, so we set the factorised derivative to zero.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Eliminate the non-zero factors",
          "workingLatex": "e^x > 0,\\ \\ \\sec x \\ne 0 \\;\\Rightarrow\\; 1 + \\tan x = 0",
          "explanation": "On this interval $e^x$ is always positive and $\\sec x=\\tfrac{1}{\\cos x}$ can never be zero, so only $1+\\tan x$ can vanish.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Solve for x in the interval",
          "workingLatex": "\\tan x = -1 \\;\\Rightarrow\\; x = -\\frac{\\pi}{4}",
          "explanation": "On $-\\tfrac{\\pi}{2}<x<\\tfrac{\\pi}{2}$ the only solution of $\\tan x=-1$ is $x=-\\tfrac{\\pi}{4}$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Find the y-coordinate",
          "workingLatex": "y = e^{-\\pi/4}\\sec\\!\\left(-\\tfrac{\\pi}{4}\\right) = \\sqrt{2}\\,e^{-\\pi/4}",
          "explanation": "Since $\\sec\\!\\left(-\\tfrac{\\pi}{4}\\right)=\\tfrac{1}{\\cos(\\pi/4)}=\\sqrt2$, the stationary point is $\\left(-\\tfrac{\\pi}{4},\\,\\sqrt2\\,e^{-\\pi/4}\\right)$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Set up a sign test for the gradient",
          "workingLatex": "e^x \\sec x > 0 \\ \\text{on the interval} \\;\\Rightarrow\\; \\operatorname{sign}\\!\\left(\\frac{dy}{dx}\\right) = \\operatorname{sign}(1 + \\tan x)",
          "explanation": "Both $e^x>0$ and $\\sec x>0$ here (as $\\cos x>0$), so the sign of the gradient follows $1+\\tan x$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Examine the sign either side of the point",
          "workingLatex": "x < -\\tfrac{\\pi}{4}:\\ \\tan x < -1 \\Rightarrow (-); \\qquad x > -\\tfrac{\\pi}{4}:\\ \\tan x > -1 \\Rightarrow (+)",
          "explanation": "Just left of $-\\tfrac{\\pi}{4}$ the gradient is negative and just right it is positive.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the nature",
          "workingLatex": "(-)\\ \\to\\ (+) \\;\\Rightarrow\\; \\text{minimum at } \\left(-\\tfrac{\\pi}{4},\\, \\sqrt{2}\\,e^{-\\pi/4}\\right)",
          "explanation": "The gradient turns from negative to positive, so the stationary point is a local minimum with value $\\sqrt2\\,e^{-\\pi/4}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\dfrac{dy}{dx}=e^x\\sec x\\,(1+\\tan x)$. (b) $y=x+1$. (c) $\\left(-\\dfrac{\\pi}{4},\\,\\sqrt{2}\\,e^{-\\pi/4}\\right)$. (d) A local minimum."
    }
  },
  {
    "id": "al.y2.pure.product-quotient-chain.q064",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Product, quotient and chain rules",
    "subtopicId": "al.y2.pure.product-quotient-chain",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "exact",
    "tags": [
      "product rule",
      "stationary points",
      "second derivative"
    ],
    "questionText": "The curve $C$ has equation $y = e^x \\cos x$ for $0 \\le x \\le 2\\pi$. (a) Find $\\dfrac{dy}{dx}$. (b) Find the equation of the tangent to $C$ at the point where $x = \\dfrac{\\pi}{2}$. (c) Find the exact coordinates of the two stationary points of $C$ and use the second derivative to determine their nature. (d) Hence determine the set of values of $x$ for which $C$ is decreasing.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the factors for the product rule",
          "workingLatex": "u = e^x, \\qquad v = \\cos x",
          "explanation": "The function is a product of $e^x$ and $\\cos x$, so we use $\\tfrac{d}{dx}(uv)=u'v+uv'$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate each factor",
          "workingLatex": "u' = e^x, \\qquad v' = -\\sin x",
          "explanation": "The exponential is unchanged and $\\cos x$ differentiates to $-\\sin x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the product rule and factorise",
          "workingLatex": "\\frac{dy}{dx} = e^x \\cos x - e^x \\sin x = e^x(\\cos x - \\sin x)",
          "explanation": "Taking out $e^x$ leaves the trigonometric part $\\cos x-\\sin x$, which controls where the gradient is zero.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the gradient at x = pi/2",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{x=\\pi/2} = e^{\\pi/2}\\big(\\cos\\tfrac{\\pi}{2} - \\sin\\tfrac{\\pi}{2}\\big) = e^{\\pi/2}(0 - 1) = -e^{\\pi/2}",
          "explanation": "Using $\\cos\\tfrac{\\pi}{2}=0$ and $\\sin\\tfrac{\\pi}{2}=1$ gives the slope of the tangent.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the y-coordinate at x = pi/2",
          "workingLatex": "y = e^{\\pi/2}\\cos\\tfrac{\\pi}{2} = 0 \\quad\\Rightarrow\\quad \\left(\\tfrac{\\pi}{2},\\,0\\right)",
          "explanation": "The curve meets the $x$-axis here, and the tangent touches at this point.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Form the tangent equation",
          "workingLatex": "y - 0 = -e^{\\pi/2}\\left(x - \\tfrac{\\pi}{2}\\right) \\;\\Rightarrow\\; y = -e^{\\pi/2}\\left(x - \\tfrac{\\pi}{2}\\right)",
          "explanation": "Using $y-y_1=m(x-x_1)$ with the gradient found above.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Set the derivative to zero",
          "workingLatex": "e^x(\\cos x - \\sin x) = 0 \\;\\Rightarrow\\; \\cos x - \\sin x = 0",
          "explanation": "Since $e^x$ is never zero, stationary points occur where $\\cos x=\\sin x$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for x in the interval",
          "workingLatex": "\\tan x = 1 \\;\\Rightarrow\\; x = \\frac{\\pi}{4}, \\ \\frac{5\\pi}{4}",
          "explanation": "Dividing by $\\cos x$ gives $\\tan x=1$; within $0\\le x\\le 2\\pi$ this has two solutions.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the y-coordinates",
          "workingLatex": "y\\!\\left(\\tfrac{\\pi}{4}\\right) = \\frac{e^{\\pi/4}}{\\sqrt{2}}, \\qquad y\\!\\left(\\tfrac{5\\pi}{4}\\right) = -\\frac{e^{5\\pi/4}}{\\sqrt{2}}",
          "explanation": "Using $\\cos\\tfrac{\\pi}{4}=\\tfrac{1}{\\sqrt2}$ and $\\cos\\tfrac{5\\pi}{4}=-\\tfrac{1}{\\sqrt2}$ gives the two stationary heights.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Compute the second derivative",
          "workingLatex": "\\frac{d^2y}{dx^2} = e^x(\\cos x - \\sin x) + e^x(-\\sin x - \\cos x) = -2e^x \\sin x",
          "explanation": "Differentiating $e^x(\\cos x-\\sin x)$ with the product rule and simplifying, the cosine terms cancel and the sine terms add, leaving $-2e^x\\sin x$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Classify the point at x = pi/4",
          "workingLatex": "\\left.\\frac{d^2y}{dx^2}\\right|_{x=\\pi/4} = -2e^{\\pi/4}\\sin\\tfrac{\\pi}{4} < 0",
          "explanation": "With $\\sin\\tfrac{\\pi}{4}>0$ the second derivative is negative, so $\\left(\\tfrac{\\pi}{4},\\tfrac{e^{\\pi/4}}{\\sqrt2}\\right)$ is a maximum.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Classify the point at x = 5pi/4",
          "workingLatex": "\\left.\\frac{d^2y}{dx^2}\\right|_{x=5\\pi/4} = -2e^{5\\pi/4}\\sin\\tfrac{5\\pi}{4} > 0",
          "explanation": "Here $\\sin\\tfrac{5\\pi}{4}<0$, so the second derivative is positive and $\\left(\\tfrac{5\\pi}{4},-\\tfrac{e^{5\\pi/4}}{\\sqrt2}\\right)$ is a minimum.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Rewrite the gradient using a single cosine",
          "workingLatex": "\\cos x - \\sin x = \\sqrt{2}\\,\\cos\\!\\left(x + \\tfrac{\\pi}{4}\\right)",
          "explanation": "The harmonic form makes the sign of the gradient transparent, since $e^x>0$ means $\\tfrac{dy}{dx}<0$ exactly when $\\cos\\!\\left(x+\\tfrac{\\pi}{4}\\right)<0$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State where C is decreasing",
          "workingLatex": "\\cos\\!\\left(x + \\tfrac{\\pi}{4}\\right) < 0 \\;\\Rightarrow\\; \\frac{\\pi}{2} < x + \\frac{\\pi}{4} < \\frac{3\\pi}{2} \\;\\Rightarrow\\; \\frac{\\pi}{4} < x < \\frac{5\\pi}{4}",
          "explanation": "Cosine is negative between $\\tfrac{\\pi}{2}$ and $\\tfrac{3\\pi}{2}$; subtracting $\\tfrac{\\pi}{4}$ gives the interval where $C$ is decreasing, which fits with a maximum at $\\tfrac{\\pi}{4}$ and a minimum at $\\tfrac{5\\pi}{4}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\dfrac{dy}{dx}=e^x(\\cos x-\\sin x)$. (b) $y=-e^{\\pi/2}\\left(x-\\tfrac{\\pi}{2}\\right)$. (c) $\\left(\\tfrac{\\pi}{4},\\tfrac{e^{\\pi/4}}{\\sqrt2}\\right)$ is a maximum and $\\left(\\tfrac{5\\pi}{4},-\\tfrac{e^{5\\pi/4}}{\\sqrt2}\\right)$ is a minimum. (d) $C$ is decreasing for $\\tfrac{\\pi}{4}<x<\\tfrac{5\\pi}{4}$."
    }
  },
  {
    "id": "al.y2.pure.product-quotient-chain.q065",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Product, quotient and chain rules",
    "subtopicId": "al.y2.pure.product-quotient-chain",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "exact",
    "tags": [
      "chain rule",
      "logarithm",
      "stationary points"
    ],
    "questionText": "The curve $C$ has equation $y = \\ln(\\sin x)$ for $0 < x < \\pi$. (a) Show that $\\dfrac{dy}{dx} = \\cot x$. (b) Find the equation of the tangent to $C$ at the point where $x = \\dfrac{\\pi}{6}$. (c) Find the coordinates of the stationary point of $C$ and use the second derivative to determine its nature. (d) Hence explain why $\\ln(\\sin x) \\le 0$ for all $x$ in the interval.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the chain rule",
          "workingLatex": "y = \\ln u, \\qquad u = \\sin x",
          "explanation": "The function is a composite: $\\ln$ of $\\sin x$. We use $\\tfrac{dy}{dx}=\\tfrac{dy}{du}\\cdot\\tfrac{du}{dx}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate the outer function",
          "workingLatex": "\\frac{dy}{du} = \\frac{1}{u} = \\frac{1}{\\sin x}",
          "explanation": "The derivative of $\\ln u$ is $\\tfrac{1}{u}$; we will substitute $u=\\sin x$ back afterwards.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate the inner function",
          "workingLatex": "\\frac{du}{dx} = \\cos x",
          "explanation": "The inner function $\\sin x$ differentiates to $\\cos x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Combine with the chain rule",
          "workingLatex": "\\frac{dy}{dx} = \\frac{1}{\\sin x}\\cdot \\cos x = \\frac{\\cos x}{\\sin x}",
          "explanation": "Multiplying the outer and inner derivatives gives the ratio $\\tfrac{\\cos x}{\\sin x}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write in reciprocal-trig form",
          "workingLatex": "\\frac{dy}{dx} = \\cot x",
          "explanation": "By definition $\\cot x=\\tfrac{\\cos x}{\\sin x}$, which proves the result in (a).",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the gradient at x = pi/6",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{x=\\pi/6} = \\cot\\tfrac{\\pi}{6} = \\frac{\\cos(\\pi/6)}{\\sin(\\pi/6)} = \\frac{\\sqrt{3}/2}{1/2} = \\sqrt{3}",
          "explanation": "Substituting the exact values of cosine and sine at $\\tfrac{\\pi}{6}$ gives a gradient of $\\sqrt3$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the y-coordinate at x = pi/6",
          "workingLatex": "y = \\ln\\!\\left(\\sin\\tfrac{\\pi}{6}\\right) = \\ln\\tfrac{1}{2} = -\\ln 2 \\quad\\Rightarrow\\quad \\left(\\tfrac{\\pi}{6},\\,-\\ln 2\\right)",
          "explanation": "Since $\\sin\\tfrac{\\pi}{6}=\\tfrac12$ and $\\ln\\tfrac12=-\\ln2$, this is the point of tangency.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Form the tangent equation",
          "workingLatex": "y = \\sqrt{3}\\left(x - \\tfrac{\\pi}{6}\\right) - \\ln 2",
          "explanation": "Using $y-y_1=m(x-x_1)$ with gradient $\\sqrt3$ through $\\left(\\tfrac{\\pi}{6},-\\ln2\\right)$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Set the derivative to zero",
          "workingLatex": "\\cot x = 0 \\;\\Rightarrow\\; \\cos x = 0",
          "explanation": "A stationary point needs zero gradient; $\\cot x=\\tfrac{\\cos x}{\\sin x}$ is zero when its numerator $\\cos x$ is zero (and $\\sin x\\ne 0$).",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Solve for x in the interval",
          "workingLatex": "x = \\frac{\\pi}{2} \\quad (0 < x < \\pi)",
          "explanation": "Within $(0,\\pi)$ the only place $\\cos x=0$ is $x=\\tfrac{\\pi}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Find the y-coordinate",
          "workingLatex": "y = \\ln\\!\\left(\\sin\\tfrac{\\pi}{2}\\right) = \\ln 1 = 0 \\quad\\Rightarrow\\quad \\left(\\tfrac{\\pi}{2},\\,0\\right)",
          "explanation": "Since $\\sin\\tfrac{\\pi}{2}=1$ and $\\ln 1=0$, the stationary point sits on the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Compute the second derivative",
          "workingLatex": "\\frac{d^2y}{dx^2} = \\frac{d}{dx}(\\cot x) = -\\operatorname{cosec}^2 x",
          "explanation": "The derivative of $\\cot x$ is $-\\operatorname{cosec}^2 x$, a standard reciprocal-trig result.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Classify the stationary point",
          "workingLatex": "\\left.\\frac{d^2y}{dx^2}\\right|_{x=\\pi/2} = -\\operatorname{cosec}^2\\tfrac{\\pi}{2} = -1 < 0",
          "explanation": "A negative second derivative means concave down, so $\\left(\\tfrac{\\pi}{2},0\\right)$ is a local maximum.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Deduce the inequality",
          "workingLatex": "y_{\\max} = 0 \\;\\Rightarrow\\; \\ln(\\sin x) \\le 0 \\ \\text{ for } 0 < x < \\pi",
          "explanation": "This maximum of $0$ is the greatest value the curve reaches, so $y\\le 0$ everywhere on the interval. It matches the fact that $\\sin x\\le 1$, hence $\\ln(\\sin x)\\le\\ln 1=0$, with equality only at $x=\\tfrac{\\pi}{2}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\dfrac{dy}{dx}=\\cot x$. (b) $y=\\sqrt{3}\\left(x-\\tfrac{\\pi}{6}\\right)-\\ln 2$. (c) $\\left(\\tfrac{\\pi}{2},0\\right)$, a maximum. (d) The maximum value of $y$ is $0$, so $\\ln(\\sin x)\\le 0$ throughout the interval."
    }
  },
  {
    "id": "al.y2.pure.product-quotient-chain.q066",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Product, quotient and chain rules",
    "subtopicId": "al.y2.pure.product-quotient-chain",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "exact",
    "tags": [
      "quotient rule",
      "stationary points",
      "asymptote"
    ],
    "questionText": "The curve $C$ has equation $y = \\dfrac{x^2}{x-1}$, $x \\ne 1$. (a) Show that $\\dfrac{dy}{dx} = \\dfrac{x(x-2)}{(x-1)^2}$. (b) Find the equation of the tangent to $C$ at the point where $x = 3$. (c) Find the coordinates of the stationary points of $C$ and determine their nature. (d) Hence show that $C$ has no points for which $0 < y < 4$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the parts for the quotient rule",
          "workingLatex": "u = x^2, \\qquad v = x - 1",
          "explanation": "The function is a single fraction, so we use $\\tfrac{d}{dx}\\!\\left(\\tfrac{u}{v}\\right)=\\tfrac{u'v-uv'}{v^2}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate each part",
          "workingLatex": "u' = 2x, \\qquad v' = 1",
          "explanation": "Both come straight from the power rule.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the quotient rule",
          "workingLatex": "\\frac{dy}{dx} = \\frac{2x(x-1) - x^2\\cdot 1}{(x-1)^2}",
          "explanation": "Substituting into $\\tfrac{u'v-uv'}{v^2}$, keeping the order of the numerator exact.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the numerator",
          "workingLatex": "\\frac{dy}{dx} = \\frac{2x^2 - 2x - x^2}{(x-1)^2} = \\frac{x^2 - 2x}{(x-1)^2} = \\frac{x(x-2)}{(x-1)^2}",
          "explanation": "Collecting terms gives $x^2-2x$, which factorises as $x(x-2)$. This proves (a).",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the gradient at x = 3",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{x=3} = \\frac{3(3-2)}{(3-1)^2} = \\frac{3}{4}",
          "explanation": "Substituting $x=3$ into the factorised derivative gives the tangent's slope.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the y-coordinate at x = 3",
          "workingLatex": "y = \\frac{3^2}{3-1} = \\frac{9}{2} \\quad\\Rightarrow\\quad \\left(3,\\,\\tfrac{9}{2}\\right)",
          "explanation": "The tangent touches $C$ at this point.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Form the tangent equation",
          "workingLatex": "y - \\tfrac{9}{2} = \\tfrac{3}{4}(x - 3) \\;\\Rightarrow\\; y = \\tfrac{3}{4}x + \\tfrac{9}{4}",
          "explanation": "Using $y-y_1=m(x-x_1)$ and simplifying the constants.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Set the derivative to zero",
          "workingLatex": "\\frac{x(x-2)}{(x-1)^2} = 0 \\;\\Rightarrow\\; x(x-2) = 0",
          "explanation": "A fraction is zero only when its numerator is zero; the denominator $(x-1)^2$ is positive wherever the curve is defined, so it cannot make the gradient zero.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solve for x",
          "workingLatex": "x = 0 \\quad \\text{or} \\quad x = 2",
          "explanation": "Both values are allowed since neither equals the excluded value $x=1$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Find the y-coordinates",
          "workingLatex": "y(0) = 0, \\qquad y(2) = \\frac{4}{1} = 4",
          "explanation": "Substituting gives the stationary points $(0,0)$ and $(2,4)$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Set up the sign test",
          "workingLatex": "\\operatorname{sign}\\!\\left(\\frac{dy}{dx}\\right) = \\operatorname{sign}\\big(x(x-2)\\big),\\quad (x-1)^2 > 0",
          "explanation": "Because the denominator is always positive (away from $x=1$), the sign of the gradient is controlled by $x(x-2)$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Classify the point at x = 0",
          "workingLatex": "x(x-2):\\ \\ (+)\\ \\to\\ (-) \\ \\text{through } x=0",
          "explanation": "For $x<0$ the product is positive and for $0<x<1$ it is negative, so the gradient turns from positive to negative: $(0,0)$ is a local maximum.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Classify the point at x = 2",
          "workingLatex": "x(x-2):\\ \\ (-)\\ \\to\\ (+) \\ \\text{through } x=2",
          "explanation": "For $1<x<2$ the product is negative and for $x>2$ it is positive, so the gradient turns from negative to positive: $(2,4)$ is a local minimum.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Show the gap in the y-values",
          "workingLatex": "y = k:\\ \\ x^2 = k(x-1) \\;\\Rightarrow\\; x^2 - kx + k = 0,\\quad \\Delta = k^2 - 4k = k(k-4)",
          "explanation": "To reach a height $y=k$ we need a real $x$. The discriminant $k(k-4)$ is negative for $0<k<4$, so no real $x$ exists there. This matches the local maximum value $0$ (for the branch $x<1$) and the local minimum value $4$ (for the branch $x>1$): $C$ has no points with $0<y<4$.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\dfrac{dy}{dx}=\\dfrac{x(x-2)}{(x-1)^2}$. (b) $y=\\tfrac{3}{4}x+\\tfrac{9}{4}$. (c) $(0,0)$ is a maximum and $(2,4)$ is a minimum. (d) Since $x^2-kx+k=0$ has no real root for $0<k<4$, $C$ has no points with $0<y<4$."
    }
  },
  {
    "id": "al.y2.pure.product-quotient-chain.q067",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Product, quotient and chain rules",
    "subtopicId": "al.y2.pure.product-quotient-chain",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "exact",
    "tags": [
      "product rule",
      "reciprocal trig",
      "second derivative"
    ],
    "questionText": "The curve $C$ has equation $y = x\\tan x$ for $-\\dfrac{\\pi}{2} < x < \\dfrac{\\pi}{2}$. (a) Find $\\dfrac{dy}{dx}$. (b) Find the equation of the tangent to $C$ at the point where $x = \\dfrac{\\pi}{4}$. (c) Show that $C$ has a stationary point at the origin and use the second derivative to determine its nature. (d) Hence explain why $x\\tan x \\ge 0$ throughout the interval.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the factors for the product rule",
          "workingLatex": "u = x, \\qquad v = \\tan x",
          "explanation": "The function is a product, so we use $\\tfrac{d}{dx}(uv)=u'v+uv'$. Recall $\\tfrac{d}{dx}\\tan x=\\sec^2 x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate each factor",
          "workingLatex": "u' = 1, \\qquad v' = \\sec^2 x",
          "explanation": "The derivative of $\\tan x$ is $\\sec^2 x$, a standard reciprocal-trig result.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the product rule",
          "workingLatex": "\\frac{dy}{dx} = \\tan x + x\\sec^2 x",
          "explanation": "Substituting into $u'v+uv'$ gives the derivative; this answers (a).",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the gradient at x = pi/4",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{x=\\pi/4} = \\tan\\tfrac{\\pi}{4} + \\tfrac{\\pi}{4}\\sec^2\\tfrac{\\pi}{4} = 1 + \\tfrac{\\pi}{4}(2) = 1 + \\frac{\\pi}{2}",
          "explanation": "Using $\\tan\\tfrac{\\pi}{4}=1$ and $\\sec^2\\tfrac{\\pi}{4}=2$ gives the slope.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the y-coordinate at x = pi/4",
          "workingLatex": "y = \\tfrac{\\pi}{4}\\tan\\tfrac{\\pi}{4} = \\frac{\\pi}{4} \\quad\\Rightarrow\\quad \\left(\\tfrac{\\pi}{4},\\,\\tfrac{\\pi}{4}\\right)",
          "explanation": "The tangent touches $C$ at this point.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Form the tangent equation",
          "workingLatex": "y - \\frac{\\pi}{4} = \\left(1 + \\frac{\\pi}{2}\\right)\\!\\left(x - \\frac{\\pi}{4}\\right)",
          "explanation": "Using $y-y_1=m(x-x_1)$ with the gradient from step 4.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check the origin is stationary",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{x=0} = \\tan 0 + 0\\cdot\\sec^2 0 = 0",
          "explanation": "Both terms vanish at $x=0$, and $y=0\\cdot\\tan 0=0$, so the origin lies on $C$ and the gradient there is zero: it is a stationary point.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Differentiate sec-squared for the second derivative",
          "workingLatex": "\\frac{d}{dx}\\big(\\sec^2 x\\big) = 2\\sec x\\,(\\sec x\\tan x) = 2\\sec^2 x\\tan x",
          "explanation": "Treating $\\sec^2 x$ as $(\\sec x)^2$ and using the chain rule with $\\tfrac{d}{dx}\\sec x=\\sec x\\tan x$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compute the second derivative",
          "workingLatex": "\\frac{d^2y}{dx^2} = \\sec^2 x + \\big(\\sec^2 x + x\\cdot 2\\sec^2 x\\tan x\\big)",
          "explanation": "Differentiate $\\tan x+x\\sec^2 x$: the first term gives $\\sec^2 x$, and the product $x\\sec^2 x$ gives $\\sec^2 x + 2x\\sec^2 x\\tan x$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Simplify the second derivative",
          "workingLatex": "\\frac{d^2y}{dx^2} = 2\\sec^2 x\\,(1 + x\\tan x)",
          "explanation": "Collecting terms and factoring out $2\\sec^2 x$ gives a compact form.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Classify the stationary point",
          "workingLatex": "\\left.\\frac{d^2y}{dx^2}\\right|_{x=0} = 2\\sec^2 0\\,(1 + 0) = 2 > 0",
          "explanation": "A positive second derivative means the curve is concave up at the origin, so $(0,0)$ is a local minimum.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Show the curve increases for positive x",
          "workingLatex": "0 < x < \\tfrac{\\pi}{2}:\\ \\tan x > 0 \\ \\text{and}\\ x\\sec^2 x > 0 \\;\\Rightarrow\\; \\frac{dy}{dx} > 0",
          "explanation": "On the right of the origin both terms of the gradient are positive, so $C$ rises away from the minimum.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Use the symmetry of the function",
          "workingLatex": "(-x)\\tan(-x) = (-x)(-\\tan x) = x\\tan x",
          "explanation": "The function is even, so its graph is symmetric about the $y$-axis; therefore it falls towards the origin as $x$ increases through negative values.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Deduce the inequality",
          "workingLatex": "y_{\\min} = 0 \\;\\Rightarrow\\; x\\tan x \\ge 0 \\ \\text{ for } -\\tfrac{\\pi}{2} < x < \\tfrac{\\pi}{2}",
          "explanation": "The origin is the lowest point of the curve, with value $0$, and the curve rises on both sides, so $x\\tan x$ never drops below $0$.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\dfrac{dy}{dx}=\\tan x + x\\sec^2 x$. (b) $y-\\tfrac{\\pi}{4}=\\left(1+\\tfrac{\\pi}{2}\\right)\\!\\left(x-\\tfrac{\\pi}{4}\\right)$. (c) $(0,0)$ is a minimum since $\\tfrac{d^2y}{dx^2}=2>0$ there. (d) The minimum value of $y$ is $0$, so $x\\tan x\\ge 0$ throughout the interval."
    }
  },
  {
    "id": "al.y2.pure.product-quotient-chain.q068",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Product, quotient and chain rules",
    "subtopicId": "al.y2.pure.product-quotient-chain",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "exact",
    "tags": [
      "quotient rule",
      "tangent",
      "stationary points"
    ],
    "questionText": "The curve $C$ has equation $y = \\dfrac{\\ln x}{x}$, $x > 0$. (a) Show that $\\dfrac{dy}{dx} = \\dfrac{1 - \\ln x}{x^2}$. (b) Find the coordinates of the stationary point of $C$ and determine its nature. (c) The tangent to $C$ at the point $P$ passes through the origin. Find the exact coordinates of $P$. (d) Find the equation of this tangent.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the parts for the quotient rule",
          "workingLatex": "u = \\ln x, \\qquad v = x",
          "explanation": "The function is a fraction, so we use $\\tfrac{d}{dx}\\!\\left(\\tfrac{u}{v}\\right)=\\tfrac{u'v-uv'}{v^2}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate each part",
          "workingLatex": "u' = \\frac{1}{x}, \\qquad v' = 1",
          "explanation": "The derivative of $\\ln x$ is $\\tfrac1x$ and the derivative of $x$ is $1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the quotient rule and simplify",
          "workingLatex": "\\frac{dy}{dx} = \\frac{\\frac{1}{x}\\cdot x - \\ln x\\cdot 1}{x^2} = \\frac{1 - \\ln x}{x^2}",
          "explanation": "The term $\\tfrac1x\\cdot x$ simplifies to $1$, giving the required derivative and proving (a).",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set the derivative to zero",
          "workingLatex": "\\frac{1 - \\ln x}{x^2} = 0 \\;\\Rightarrow\\; 1 - \\ln x = 0",
          "explanation": "A fraction is zero only when its numerator is zero; $x^2>0$ for $x>0$, so it cannot make the gradient zero.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for the stationary point",
          "workingLatex": "\\ln x = 1 \\;\\Rightarrow\\; x = e, \\qquad y = \\frac{\\ln e}{e} = \\frac{1}{e}",
          "explanation": "Solving $\\ln x=1$ gives $x=e$; substituting back gives the height $\\tfrac1e$, so the stationary point is $\\left(e,\\tfrac1e\\right)$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Determine its nature",
          "workingLatex": "\\operatorname{sign}\\!\\left(\\frac{dy}{dx}\\right) = \\operatorname{sign}(1 - \\ln x):\\ \\ (+)\\ \\to\\ (-) \\ \\text{through } x=e",
          "explanation": "Since $x^2>0$, the gradient follows $1-\\ln x$, which is positive for $x<e$ and negative for $x>e$. The gradient turns from positive to negative, so $\\left(e,\\tfrac1e\\right)$ is a maximum.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the tangent-through-origin condition",
          "workingLatex": "\\text{At } P=(a,f(a)):\\ \\ y = f(a) + f'(a)(x - a)",
          "explanation": "The tangent at $P$ has the point-slope form using the gradient $f'(a)$ at $x=a$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Impose that it passes through the origin",
          "workingLatex": "0 = f(a) + f'(a)(0 - a) \\;\\Rightarrow\\; f(a) = a\\,f'(a)",
          "explanation": "Substituting $(0,0)$ into the tangent equation gives the condition linking $f(a)$ and $f'(a)$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Substitute the function and its derivative",
          "workingLatex": "\\frac{\\ln a}{a} = a\\cdot\\frac{1 - \\ln a}{a^2} = \\frac{1 - \\ln a}{a}",
          "explanation": "Using $f(a)=\\tfrac{\\ln a}{a}$ and $f'(a)=\\tfrac{1-\\ln a}{a^2}$ turns the condition into an equation in $a$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Solve for a",
          "workingLatex": "\\ln a = 1 - \\ln a \\;\\Rightarrow\\; 2\\ln a = 1 \\;\\Rightarrow\\; \\ln a = \\tfrac{1}{2} \\;\\Rightarrow\\; a = \\sqrt{e}",
          "explanation": "Multiplying through by $a$ removes the denominators; solving gives $\\ln a=\\tfrac12$, so $a=e^{1/2}=\\sqrt e$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Find the coordinates of P",
          "workingLatex": "y = \\frac{\\ln\\sqrt{e}}{\\sqrt{e}} = \\frac{1/2}{\\sqrt{e}} = \\frac{1}{2\\sqrt{e}} \\;\\Rightarrow\\; P = \\left(\\sqrt{e},\\, \\frac{1}{2\\sqrt{e}}\\right)",
          "explanation": "Since $\\ln\\sqrt e=\\tfrac12$, the height at $P$ is $\\tfrac{1}{2\\sqrt e}$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Find the gradient at P",
          "workingLatex": "f'(\\sqrt{e}) = \\frac{1 - \\ln\\sqrt{e}}{(\\sqrt{e})^2} = \\frac{1 - \\tfrac12}{e} = \\frac{1}{2e}",
          "explanation": "Substituting $a=\\sqrt e$ into $f'(x)=\\tfrac{1-\\ln x}{x^2}$, and using $(\\sqrt e)^2=e$, gives the slope of the tangent.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Write the tangent equation",
          "workingLatex": "y = \\frac{1}{2e}\\,x = \\frac{x}{2e}",
          "explanation": "The tangent passes through the origin with gradient $\\tfrac{1}{2e}$, so its equation is $y=\\tfrac{x}{2e}$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Check consistency at P",
          "workingLatex": "x = \\sqrt{e}:\\ \\ y = \\frac{\\sqrt{e}}{2e} = \\frac{1}{2\\sqrt{e}} \\ \\checkmark",
          "explanation": "Substituting $x=\\sqrt e$ into the tangent reproduces the $y$-coordinate of $P$, confirming the line is correct.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\dfrac{dy}{dx}=\\dfrac{1-\\ln x}{x^2}$. (b) $\\left(e,\\tfrac{1}{e}\\right)$, a maximum. (c) $P=\\left(\\sqrt{e},\\,\\dfrac{1}{2\\sqrt{e}}\\right)$. (d) $y=\\dfrac{x}{2e}$."
    }
  },
  {
    "id": "al.y2.pure.product-quotient-chain.q069",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Product, quotient and chain rules",
    "subtopicId": "al.y2.pure.product-quotient-chain",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "exact",
    "tags": [
      "product rule",
      "chain rule",
      "stationary points"
    ],
    "questionText": "The curve $C$ has equation $y = x\\sqrt{4 - x^2}$ for $-2 \\le x \\le 2$. (a) Show that $\\dfrac{dy}{dx} = \\dfrac{4 - 2x^2}{\\sqrt{4 - x^2}}$. (b) Find the equation of the tangent to $C$ at the origin. (c) Find the exact coordinates of the stationary points of $C$ and determine their nature. (d) State the greatest and least values of $y$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the factors for the product rule",
          "workingLatex": "u = x, \\qquad v = (4 - x^2)^{1/2}",
          "explanation": "The function is a product of $x$ and a square root; the square root is a composite, so we will need the chain rule for $v$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up the chain rule for the square root",
          "workingLatex": "v = w^{1/2},\\quad w = 4 - x^2:\\qquad \\frac{dv}{dw} = \\tfrac{1}{2}w^{-1/2}, \\quad \\frac{dw}{dx} = -2x",
          "explanation": "Writing the root as a power with inner function $w=4-x^2$ prepares the chain rule.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate the square root",
          "workingLatex": "v' = \\tfrac{1}{2}(4 - x^2)^{-1/2}(-2x) = \\frac{-x}{\\sqrt{4 - x^2}}",
          "explanation": "Multiplying the outer and inner derivatives and simplifying gives $v'$; also $u'=1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the product rule",
          "workingLatex": "\\frac{dy}{dx} = 1\\cdot\\sqrt{4 - x^2} + x\\cdot\\frac{-x}{\\sqrt{4 - x^2}} = \\sqrt{4 - x^2} - \\frac{x^2}{\\sqrt{4 - x^2}}",
          "explanation": "Substituting into $u'v+uv'$ gives two terms, one of which is a fraction.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Combine over a common denominator",
          "workingLatex": "\\frac{dy}{dx} = \\frac{(4 - x^2) - x^2}{\\sqrt{4 - x^2}} = \\frac{4 - 2x^2}{\\sqrt{4 - x^2}}",
          "explanation": "Writing the first term as $\\tfrac{4-x^2}{\\sqrt{4-x^2}}$ and combining gives the required single fraction, proving (a).",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the gradient at the origin",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{x=0} = \\frac{4 - 0}{\\sqrt{4}} = \\frac{4}{2} = 2",
          "explanation": "The origin lies on $C$ since $y=0$ when $x=0$; substituting gives the slope there.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Form the tangent at the origin",
          "workingLatex": "y - 0 = 2(x - 0) \\;\\Rightarrow\\; y = 2x",
          "explanation": "With gradient $2$ through $(0,0)$, the tangent is $y=2x$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Set the derivative to zero",
          "workingLatex": "\\frac{4 - 2x^2}{\\sqrt{4 - x^2}} = 0 \\;\\Rightarrow\\; 4 - 2x^2 = 0",
          "explanation": "A fraction is zero only when its numerator is zero; the denominator $\\sqrt{4-x^2}>0$ for $-2<x<2$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solve for x",
          "workingLatex": "x^2 = 2 \\;\\Rightarrow\\; x = \\sqrt{2} \\ \\text{ or }\\ x = -\\sqrt{2}",
          "explanation": "Both lie strictly inside the domain $-2<x<2$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Find the y-coordinates",
          "workingLatex": "y(\\sqrt{2}) = \\sqrt{2}\\cdot\\sqrt{2} = 2, \\qquad y(-\\sqrt{2}) = -\\sqrt{2}\\cdot\\sqrt{2} = -2",
          "explanation": "Since $\\sqrt{4-2}=\\sqrt2$, the stationary points are $(\\sqrt2,2)$ and $(-\\sqrt2,-2)$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Set up the sign test",
          "workingLatex": "\\operatorname{sign}\\!\\left(\\frac{dy}{dx}\\right) = \\operatorname{sign}(4 - 2x^2),\\quad \\sqrt{4 - x^2} > 0",
          "explanation": "On $(-2,2)$ the denominator is positive, so the gradient's sign follows the numerator $4-2x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Classify the point at x = sqrt2",
          "workingLatex": "4 - 2x^2:\\ \\ (+)\\ \\to\\ (-) \\ \\text{through } x=\\sqrt{2}",
          "explanation": "The gradient turns from positive to negative, so $(\\sqrt2,2)$ is a local maximum.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Classify the point at x = -sqrt2",
          "workingLatex": "4 - 2x^2:\\ \\ (-)\\ \\to\\ (+) \\ \\text{through } x=-\\sqrt{2}",
          "explanation": "The gradient turns from negative to positive, so $(-\\sqrt2,-2)$ is a local minimum.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the greatest and least values",
          "workingLatex": "y(\\pm 2) = 0 \\;\\Rightarrow\\; \\text{greatest } y = 2,\\quad \\text{least } y = -2",
          "explanation": "At the endpoints $x=\\pm2$ the curve returns to $0$, so the maximum $2$ is the greatest value and the minimum $-2$ is the least value over the whole domain.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\dfrac{dy}{dx}=\\dfrac{4-2x^2}{\\sqrt{4-x^2}}$. (b) $y=2x$. (c) $(\\sqrt2,2)$ is a maximum and $(-\\sqrt2,-2)$ is a minimum. (d) Greatest value $2$, least value $-2$."
    }
  },
  {
    "id": "al.y2.pure.product-quotient-chain.q070",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Product, quotient and chain rules",
    "subtopicId": "al.y2.pure.product-quotient-chain",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "exact",
    "tags": [
      "product rule",
      "stationary points",
      "second derivative"
    ],
    "questionText": "The curve $C_1$ has equation $y = x^2\\ln x$, $x > 0$. (a) Show that $\\dfrac{dy}{dx} = x(2\\ln x + 1)$. (b) Find the equation of the tangent to $C_1$ at the point where $x = 1$. (c) Find the exact coordinates of the stationary point of $C_1$ and use the second derivative to determine its nature. (d) The curve $C_2$ has equation $y = x^2$. Find the exact coordinates of the point on $C_1$ at which $C_1$ and $C_2$ have equal gradient.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the factors for the product rule",
          "workingLatex": "u = x^2, \\qquad v = \\ln x",
          "explanation": "The function is a product of $x^2$ and $\\ln x$, so we use $\\tfrac{d}{dx}(uv)=u'v+uv'$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate each factor",
          "workingLatex": "u' = 2x, \\qquad v' = \\frac{1}{x}",
          "explanation": "The power rule gives $2x$, and the derivative of $\\ln x$ is $\\tfrac1x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the product rule",
          "workingLatex": "\\frac{dy}{dx} = 2x\\ln x + x^2\\cdot\\frac{1}{x} = 2x\\ln x + x",
          "explanation": "The second term $x^2\\cdot\\tfrac1x$ simplifies to $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Factorise the derivative",
          "workingLatex": "\\frac{dy}{dx} = x(2\\ln x + 1)",
          "explanation": "Taking out the common factor $x$ gives the required form and makes the equation easy to solve later. This proves (a).",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the gradient at x = 1",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{x=1} = 1\\,(2\\ln 1 + 1) = 1\\,(0 + 1) = 1",
          "explanation": "Using $\\ln 1=0$ gives a slope of $1$ at $x=1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the point and tangent at x = 1",
          "workingLatex": "y = 1^2\\ln 1 = 0 \\;\\Rightarrow\\; (1,0);\\qquad y - 0 = 1(x-1) \\;\\Rightarrow\\; y = x - 1",
          "explanation": "The curve passes through $(1,0)$, and the tangent there has gradient $1$, giving $y=x-1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Set the derivative to zero",
          "workingLatex": "x(2\\ln x + 1) = 0 \\;\\Rightarrow\\; 2\\ln x + 1 = 0",
          "explanation": "For $x>0$ the factor $x$ is never zero, so the stationary point comes from $2\\ln x+1=0$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for x",
          "workingLatex": "\\ln x = -\\tfrac{1}{2} \\;\\Rightarrow\\; x = e^{-1/2} = \\frac{1}{\\sqrt{e}}",
          "explanation": "Solving the logarithmic equation gives $x=e^{-1/2}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the y-coordinate",
          "workingLatex": "y = \\left(e^{-1/2}\\right)^2 \\ln\\!\\left(e^{-1/2}\\right) = e^{-1}\\left(-\\tfrac{1}{2}\\right) = -\\frac{1}{2e}",
          "explanation": "Squaring gives $e^{-1}$ and $\\ln(e^{-1/2})=-\\tfrac12$, so the stationary point is $\\left(\\tfrac{1}{\\sqrt e},-\\tfrac{1}{2e}\\right)$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Compute the second derivative",
          "workingLatex": "\\frac{d^2y}{dx^2} = \\frac{d}{dx}\\big(2x\\ln x + x\\big) = 2\\ln x + 2 + 1 = 2\\ln x + 3",
          "explanation": "Differentiating $2x\\ln x$ by the product rule gives $2\\ln x+2$, and the derivative of $x$ adds $1$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Classify the stationary point",
          "workingLatex": "\\left.\\frac{d^2y}{dx^2}\\right|_{x=e^{-1/2}} = 2\\left(-\\tfrac{1}{2}\\right) + 3 = 2 > 0",
          "explanation": "A positive second derivative means the curve is concave up, so $\\left(\\tfrac{1}{\\sqrt e},-\\tfrac{1}{2e}\\right)$ is a local minimum.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Write the equal-gradient condition",
          "workingLatex": "\\frac{d}{dx}(x^2) = 2x:\\qquad x(2\\ln x + 1) = 2x",
          "explanation": "The gradient of $C_2$ is $2x$. Equal gradients means setting the derivative of $C_1$ equal to $2x$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Solve for x",
          "workingLatex": "2\\ln x + 1 = 2 \\;\\Rightarrow\\; \\ln x = \\tfrac{1}{2} \\;\\Rightarrow\\; x = \\sqrt{e}",
          "explanation": "Since $x>0$ we may divide both sides by $x$; solving the resulting equation gives $x=e^{1/2}=\\sqrt e$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Find the point on C1",
          "workingLatex": "y = \\left(\\sqrt{e}\\right)^2 \\ln\\sqrt{e} = e\\cdot\\tfrac{1}{2} = \\frac{e}{2} \\;\\Rightarrow\\; \\left(\\sqrt{e},\\, \\tfrac{e}{2}\\right)",
          "explanation": "Substituting $x=\\sqrt e$ into $y=x^2\\ln x$, with $(\\sqrt e)^2=e$ and $\\ln\\sqrt e=\\tfrac12$, gives the point on $C_1$ where the two curves have equal gradient.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\dfrac{dy}{dx}=x(2\\ln x+1)$. (b) $y=x-1$. (c) $\\left(\\dfrac{1}{\\sqrt{e}},-\\dfrac{1}{2e}\\right)$, a minimum. (d) $\\left(\\sqrt{e},\\,\\dfrac{e}{2}\\right)$."
    }
  }
];
