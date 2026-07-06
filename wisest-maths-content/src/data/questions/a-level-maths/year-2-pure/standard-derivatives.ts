import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "id": "al.y2.pure.standard-derivatives.q001",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard derivatives",
    "subtopicId": "al.y2.pure.standard-derivatives",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": [
      "standard derivatives",
      "exponential"
    ],
    "questionText": "Differentiate $y = e^{x}$ with respect to $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the function and the goal",
          "workingLatex": "y = e^{x}",
          "explanation": "We want $\\frac{dy}{dx}$, the gradient function of $y=e^{x}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recognise this is a standard result, not the power rule",
          "workingLatex": "y = e^{x} \\quad (\\text{variable in the exponent})",
          "explanation": "The power rule applies to $x^{n}$, where the base is the variable. Here the variable $x$ sits in the exponent of a fixed base $e$, so we instead use the standard exponential result.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall the standard derivative of the exponential function",
          "workingLatex": "\\frac{d}{dx}\\left(e^{x}\\right) = e^{x}",
          "explanation": "The function $e^{x}$ is special: it is equal to its own derivative. This self-replicating property is exactly what defines the number $e$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the result",
          "workingLatex": "\\frac{dy}{dx} = e^{x}",
          "explanation": "Differentiating $e^{x}$ simply returns $e^{x}$, so the gradient function is $e^{x}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Sanity-check the result",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{x=0} = e^{0} = 1",
          "explanation": "At $x=0$ the gradient is $1$, matching the familiar slope of $y=e^{x}$ where it crosses the $y$-axis. Since $e^{x}>0$ for all $x$, the curve is always increasing.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the derivative",
          "workingLatex": "\\frac{dy}{dx} = e^{x}",
          "explanation": "This is the required gradient function.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dy}{dx} = e^{x}$."
    }
  },
  {
    "id": "al.y2.pure.standard-derivatives.q002",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard derivatives",
    "subtopicId": "al.y2.pure.standard-derivatives",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": [
      "standard derivatives",
      "exponential"
    ],
    "questionText": "Find $\\dfrac{dy}{dx}$ given that $y = e^{3x}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the function and the goal",
          "workingLatex": "y = e^{3x}",
          "explanation": "We need $\\frac{dy}{dx}$ for the exponential $y=e^{3x}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Match to the standard form",
          "workingLatex": "y = e^{kx} \\quad \\text{with } k = 3",
          "explanation": "This is the standard linear-exponential form $e^{kx}$, where $k$ is the constant multiplying $x$ in the exponent. Here $k=3$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall the standard derivative of $e^{kx}$",
          "workingLatex": "\\frac{d}{dx}\\left(e^{kx}\\right) = k\\,e^{kx}",
          "explanation": "Differentiating $e^{kx}$ reproduces $e^{kx}$ and brings out a factor of $k$, the constant from the exponent. We quote this as a standard result.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute $k = 3$",
          "workingLatex": "\\frac{dy}{dx} = 3\\,e^{3x}",
          "explanation": "Putting $k=3$ into $k\\,e^{kx}$ gives the gradient function directly.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret the factor",
          "workingLatex": "\\frac{dy}{dx} = 3e^{3x} > 0",
          "explanation": "The extra factor of $3$ reflects how the exponent grows three times as fast; the derivative is positive everywhere, so the curve is always increasing.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the derivative",
          "workingLatex": "\\frac{dy}{dx} = 3e^{3x}",
          "explanation": "This is the required gradient function.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dy}{dx} = 3e^{3x}$."
    }
  },
  {
    "id": "al.y2.pure.standard-derivatives.q003",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard derivatives",
    "subtopicId": "al.y2.pure.standard-derivatives",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": [
      "standard derivatives",
      "logarithm"
    ],
    "questionText": "Differentiate $y = \\ln x$ with respect to $x$, stating any restriction on $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the function and the goal",
          "workingLatex": "y = \\ln x, \\quad x > 0",
          "explanation": "We want $\\frac{dy}{dx}$ for the natural logarithm. Note $\\ln x$ is only defined for $x>0$, so that restriction carries through.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recognise this as a new standard result",
          "workingLatex": "y = \\ln x \\quad (\\text{a standard derivative to learn})",
          "explanation": "Unlike a power of $x$, the logarithm cannot be differentiated with the power rule; its derivative is a separate standard result worth memorising.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall the standard derivative of the natural logarithm",
          "workingLatex": "\\frac{d}{dx}\\left(\\ln x\\right) = \\frac{1}{x}",
          "explanation": "The derivative of $\\ln x$ is the standard result $\\tfrac{1}{x}$; this is one of the key new results to memorise.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the result",
          "workingLatex": "\\frac{dy}{dx} = \\frac{1}{x}",
          "explanation": "So the gradient function of $y=\\ln x$ is simply $\\tfrac{1}{x}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Note the sign and behaviour",
          "workingLatex": "\\frac{1}{x} > 0 \\quad \\text{for } x > 0",
          "explanation": "For every allowed $x$ the gradient is positive, so $\\ln x$ is always increasing, but the slope shrinks as $x$ grows.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the restriction",
          "workingLatex": "\\frac{dy}{dx} = \\frac{1}{x}, \\quad x > 0",
          "explanation": "The derivative inherits the domain of the original function, so we keep the condition $x>0$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dy}{dx} = \\dfrac{1}{x}$, valid for $x>0$."
    }
  },
  {
    "id": "al.y2.pure.standard-derivatives.q004",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard derivatives",
    "subtopicId": "al.y2.pure.standard-derivatives",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": [
      "standard derivatives",
      "constant multiple",
      "exponential"
    ],
    "questionText": "Find $\\dfrac{dy}{dx}$ given that $y = 5e^{x}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the function and the goal",
          "workingLatex": "y = 5e^{x}",
          "explanation": "We need $\\frac{dy}{dx}$ for a constant multiple of $e^{x}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Use the constant-multiple rule",
          "workingLatex": "\\frac{d}{dx}\\left(5e^{x}\\right) = 5\\,\\frac{d}{dx}\\left(e^{x}\\right)",
          "explanation": "A constant factor simply rides along through differentiation: we differentiate $e^{x}$ and keep the $5$ out in front.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall the standard derivative of $e^{x}$",
          "workingLatex": "\\frac{d}{dx}\\left(e^{x}\\right) = e^{x}",
          "explanation": "The exponential $e^{x}$ is its own derivative.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Multiply by the constant",
          "workingLatex": "\\frac{dy}{dx} = 5e^{x}",
          "explanation": "Multiplying the derivative $e^{x}$ by the constant $5$ gives the gradient function.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Comment on the result",
          "workingLatex": "\\frac{dy}{dx} = 5e^{x} = y",
          "explanation": "Interestingly, $y=5e^{x}$ is also equal to its own derivative; scaling $e^{x}$ by a constant does not change that self-replicating property.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the derivative",
          "workingLatex": "\\frac{dy}{dx} = 5e^{x}",
          "explanation": "This is the required gradient function.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dy}{dx} = 5e^{x}$."
    }
  },
  {
    "id": "al.y2.pure.standard-derivatives.q005",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard derivatives",
    "subtopicId": "al.y2.pure.standard-derivatives",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "standard derivatives",
      "exponential",
      "a^x"
    ],
    "questionText": "Differentiate $y = 2^{x}$ with respect to $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the function and the goal",
          "workingLatex": "y = 2^{x}",
          "explanation": "We want $\\frac{dy}{dx}$ for an exponential with base $2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recognise the form and avoid the power rule",
          "workingLatex": "y = a^{x} \\quad \\text{with } a = 2",
          "explanation": "This is $a^{x}$: a constant base $a$ raised to the variable $x$. The power rule does not apply, because the variable is in the exponent, not the base.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall the standard derivative of $a^{x}$",
          "workingLatex": "\\frac{d}{dx}\\left(a^{x}\\right) = a^{x}\\ln a",
          "explanation": "Differentiating $a^{x}$ reproduces $a^{x}$ and multiplies it by $\\ln a$, the natural logarithm of the base. This is the standard result for a general exponential.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute $a = 2$",
          "workingLatex": "\\frac{dy}{dx} = 2^{x}\\ln 2",
          "explanation": "Putting $a=2$ into $a^{x}\\ln a$ gives the gradient function.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Note that $\\ln 2$ is a constant",
          "workingLatex": "\\ln 2 \\approx 0.693",
          "explanation": "Here $\\ln 2$ is just a fixed number (about $0.693$), so the derivative is a constant multiple of the original $2^{x}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the derivative",
          "workingLatex": "\\frac{dy}{dx} = 2^{x}\\ln 2",
          "explanation": "This is the required gradient function; it is positive for all $x$, so $y=2^{x}$ is always increasing.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dy}{dx} = 2^{x}\\ln 2$."
    }
  },
  {
    "id": "al.y2.pure.standard-derivatives.q006",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard derivatives",
    "subtopicId": "al.y2.pure.standard-derivatives",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "standard derivatives",
      "sum rule",
      "exponential"
    ],
    "questionText": "Find $\\dfrac{dy}{dx}$ given that $y = e^{x} + x^{3}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the function and the goal",
          "workingLatex": "y = e^{x} + x^{3}",
          "explanation": "We need $\\frac{dy}{dx}$ for a sum of two familiar functions.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Use linearity to differentiate term by term",
          "workingLatex": "\\frac{dy}{dx} = \\frac{d}{dx}\\left(e^{x}\\right) + \\frac{d}{dx}\\left(x^{3}\\right)",
          "explanation": "Differentiation is linear, so the derivative of a sum is the sum of the derivatives. We can handle each term separately.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate the exponential term",
          "workingLatex": "\\frac{d}{dx}\\left(e^{x}\\right) = e^{x}",
          "explanation": "The exponential $e^{x}$ is its own derivative, by the standard result.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Differentiate the power term",
          "workingLatex": "\\frac{d}{dx}\\left(x^{3}\\right) = 3x^{2}",
          "explanation": "For $x^{3}$ we use the power rule: multiply by the index $3$ and reduce the index by one.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Combine the two derivatives",
          "workingLatex": "\\frac{dy}{dx} = e^{x} + 3x^{2}",
          "explanation": "Adding the results gives the full gradient function; the two pieces stay separate because there is nothing to simplify.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the derivative",
          "workingLatex": "\\frac{dy}{dx} = e^{x} + 3x^{2}",
          "explanation": "This is the required gradient function.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dy}{dx} = e^{x} + 3x^{2}$."
    }
  },
  {
    "id": "al.y2.pure.standard-derivatives.q007",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard derivatives",
    "subtopicId": "al.y2.pure.standard-derivatives",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "standard derivatives",
      "trigonometry",
      "sum rule"
    ],
    "questionText": "Differentiate $y = \\sin x + \\cos x$ with respect to $x$, where $x$ is measured in radians.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the function and the goal",
          "workingLatex": "y = \\sin x + \\cos x",
          "explanation": "We need $\\frac{dy}{dx}$ for a sum of the two basic trigonometric functions. The standard trig derivatives assume $x$ is in radians.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Use linearity to differentiate term by term",
          "workingLatex": "\\frac{dy}{dx} = \\frac{d}{dx}\\left(\\sin x\\right) + \\frac{d}{dx}\\left(\\cos x\\right)",
          "explanation": "Differentiation is linear, so we differentiate $\\sin x$ and $\\cos x$ separately and add the results.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate the sine term",
          "workingLatex": "\\frac{d}{dx}\\left(\\sin x\\right) = \\cos x",
          "explanation": "The standard result is that the derivative of $\\sin x$ is $\\cos x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Differentiate the cosine term",
          "workingLatex": "\\frac{d}{dx}\\left(\\cos x\\right) = -\\sin x",
          "explanation": "The standard result is that the derivative of $\\cos x$ is $-\\sin x$; note the minus sign that appears here.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Combine the two derivatives",
          "workingLatex": "\\frac{dy}{dx} = \\cos x - \\sin x",
          "explanation": "Adding the pieces gives the gradient function.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Note the radian assumption",
          "workingLatex": "\\frac{dy}{dx} = \\cos x - \\sin x \\quad (x \\text{ in radians})",
          "explanation": "These derivative formulas only hold when the angle is in radians, so we record that condition.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dy}{dx} = \\cos x - \\sin x$ (with $x$ in radians)."
    }
  },
  {
    "id": "al.y2.pure.standard-derivatives.q008",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard derivatives",
    "subtopicId": "al.y2.pure.standard-derivatives",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "standard derivatives",
      "trigonometry",
      "constant multiple"
    ],
    "questionText": "Find $\\dfrac{dy}{dx}$ given that $y = 3\\sin x - 4\\cos x$, where $x$ is in radians.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the function and the goal",
          "workingLatex": "y = 3\\sin x - 4\\cos x",
          "explanation": "We need $\\frac{dy}{dx}$ for a difference of constant multiples of $\\sin x$ and $\\cos x$, with $x$ in radians.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply linearity and pull out the constants",
          "workingLatex": "\\frac{dy}{dx} = 3\\,\\frac{d}{dx}\\left(\\sin x\\right) - 4\\,\\frac{d}{dx}\\left(\\cos x\\right)",
          "explanation": "Differentiation is linear, so each constant factor stays in front while we differentiate its trig function.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate the sine term",
          "workingLatex": "3\\,\\frac{d}{dx}\\left(\\sin x\\right) = 3\\cos x",
          "explanation": "Since the derivative of $\\sin x$ is $\\cos x$, the first term becomes $3\\cos x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Differentiate the cosine term carefully",
          "workingLatex": "-4\\,\\frac{d}{dx}\\left(\\cos x\\right) = -4(-\\sin x) = 4\\sin x",
          "explanation": "The derivative of $\\cos x$ is $-\\sin x$. Multiplying by the $-4$ flips that sign again, so this term becomes $+4\\sin x$. Watch the two sign changes.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Combine the two derivatives",
          "workingLatex": "\\frac{dy}{dx} = 3\\cos x + 4\\sin x",
          "explanation": "Putting the terms together gives the gradient function; the double sign flip has turned the subtraction into an addition.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Note the radian assumption and state the answer",
          "workingLatex": "\\frac{dy}{dx} = 3\\cos x + 4\\sin x \\quad (x \\text{ in radians})",
          "explanation": "The trig derivative results assume radians, so we record that. This is the required gradient function.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dy}{dx} = 3\\cos x + 4\\sin x$ (with $x$ in radians)."
    }
  },
  {
    "id": "al.y2.pure.standard-derivatives.q009",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard derivatives",
    "subtopicId": "al.y2.pure.standard-derivatives",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "standard derivatives",
      "logarithm",
      "difference"
    ],
    "questionText": "Differentiate $y = 2\\ln x - x^{2}$ with respect to $x$, stating any restriction on $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the function and the goal",
          "workingLatex": "y = 2\\ln x - x^{2}, \\quad x > 0",
          "explanation": "We need $\\frac{dy}{dx}$. Because $\\ln x$ requires $x>0$, the whole function is only defined for $x>0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Use linearity to differentiate term by term",
          "workingLatex": "\\frac{dy}{dx} = 2\\,\\frac{d}{dx}\\left(\\ln x\\right) - \\frac{d}{dx}\\left(x^{2}\\right)",
          "explanation": "Differentiation is linear, so we handle each term separately and keep the constant $2$ out in front of the log term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate the logarithm term",
          "workingLatex": "2\\,\\frac{d}{dx}\\left(\\ln x\\right) = 2 \\cdot \\frac{1}{x} = \\frac{2}{x}",
          "explanation": "The derivative of $\\ln x$ is $\\tfrac{1}{x}$, and multiplying by the constant $2$ gives $\\tfrac{2}{x}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Differentiate the power term",
          "workingLatex": "\\frac{d}{dx}\\left(x^{2}\\right) = 2x",
          "explanation": "For $x^{2}$ the power rule gives $2x$; this term is subtracted.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Combine the two derivatives",
          "workingLatex": "\\frac{dy}{dx} = \\frac{2}{x} - 2x",
          "explanation": "Putting the pieces together gives the full gradient function.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the derivative with its restriction",
          "workingLatex": "\\frac{dy}{dx} = \\frac{2}{x} - 2x, \\quad x > 0",
          "explanation": "The derivative keeps the domain of the original function, so we retain $x>0$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dy}{dx} = \\dfrac{2}{x} - 2x$, valid for $x>0$."
    }
  },
  {
    "id": "al.y2.pure.standard-derivatives.q010",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard derivatives",
    "subtopicId": "al.y2.pure.standard-derivatives",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": [
      "standard derivatives",
      "trigonometry",
      "recall"
    ],
    "questionText": "Write down the derivative of $\\tan x$, and state the assumption that must hold about the angle $x$ for this result to be valid.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the function",
          "workingLatex": "y = \\tan x",
          "explanation": "This is a recall question: we quote the standard derivative of $\\tan x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down the standard result",
          "workingLatex": "\\frac{d}{dx}\\left(\\tan x\\right) = \\sec^{2} x",
          "explanation": "The derivative of $\\tan x$ is the standard result $\\sec^{2}x$; this is one of the key trig results to memorise.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Interpret the secant notation",
          "workingLatex": "\\sec^{2} x = \\frac{1}{\\cos^{2} x}",
          "explanation": "Recall that $\\sec x=\\tfrac{1}{\\cos x}$, so $\\sec^{2}x$ is just $\\tfrac{1}{\\cos^{2}x}$; this makes clear the derivative is undefined where $\\cos x=0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the required assumption",
          "workingLatex": "x \\text{ measured in radians}",
          "explanation": "All the standard trig derivatives, including this one, are only valid when the angle is measured in radians rather than degrees.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Comment on the behaviour",
          "workingLatex": "\\sec^{2} x \\ge 1 > 0",
          "explanation": "Because $\\sec^{2}x$ is never less than $1$, the gradient is always positive, so $\\tan x$ is increasing on each branch of its graph.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the final result",
          "workingLatex": "\\frac{d}{dx}\\left(\\tan x\\right) = \\sec^{2} x \\quad (x \\text{ in radians})",
          "explanation": "This is the required derivative together with its radian condition.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{d}{dx}(\\tan x) = \\sec^{2}x$, valid when $x$ is in radians."
    }
  },
  {
    "id": "al.y2.pure.standard-derivatives.q011",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard derivatives",
    "subtopicId": "al.y2.pure.standard-derivatives",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "standard derivatives",
      "constant multiple",
      "exponential"
    ],
    "questionText": "Find $\\dfrac{dy}{dx}$ given that $y = 6e^{2x}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the function and the goal",
          "workingLatex": "y = 6e^{2x}",
          "explanation": "We need $\\frac{dy}{dx}$ for a constant multiple of the linear exponential $e^{2x}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Pull the constant out using the constant-multiple rule",
          "workingLatex": "\\frac{dy}{dx} = 6\\,\\frac{d}{dx}\\left(e^{2x}\\right)",
          "explanation": "The factor $6$ stays out in front while we differentiate $e^{2x}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall the standard derivative of $e^{kx}$",
          "workingLatex": "\\frac{d}{dx}\\left(e^{kx}\\right) = k\\,e^{kx}, \\quad k = 2",
          "explanation": "Differentiating $e^{kx}$ reproduces $e^{kx}$ and brings out the constant $k$. Here $k=2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Differentiate the exponential",
          "workingLatex": "\\frac{d}{dx}\\left(e^{2x}\\right) = 2e^{2x}",
          "explanation": "Substituting $k=2$ gives $2e^{2x}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Multiply by the constant",
          "workingLatex": "\\frac{dy}{dx} = 6 \\cdot 2e^{2x} = 12e^{2x}",
          "explanation": "Multiplying the derivative $2e^{2x}$ by the constant $6$ gives $12e^{2x}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the derivative",
          "workingLatex": "\\frac{dy}{dx} = 12e^{2x}",
          "explanation": "This is the required gradient function; it is positive for all $x$, so the curve is always increasing.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dy}{dx} = 12e^{2x}$."
    }
  },
  {
    "id": "al.y2.pure.standard-derivatives.q012",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard derivatives",
    "subtopicId": "al.y2.pure.standard-derivatives",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": [
      "standard derivatives",
      "e^x",
      "gradient"
    ],
    "questionText": "Find $\\dfrac{dy}{dx}$ for $y = e^x + 2x$, and hence find the gradient of the curve at $x = 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise the structure and use linearity",
          "workingLatex": "y = e^x + 2x",
          "explanation": "The function is a sum of two standard terms, so we can differentiate each one separately and add the results (linearity of differentiation).",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate the exponential term",
          "workingLatex": "\\frac{d}{dx}(e^x) = e^x",
          "explanation": "$e^x$ is special: it is its own derivative, so this term is unchanged.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate the linear term",
          "workingLatex": "\\frac{d}{dx}(2x) = 2",
          "explanation": "By the power rule the derivative of $x$ is $1$, and the constant multiple $2$ carries through, giving $2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Combine to form the gradient function",
          "workingLatex": "\\frac{dy}{dx} = e^x + 2",
          "explanation": "Adding the two derivatives gives the gradient function for the whole curve.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the required x-value",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{x=0} = e^{0} + 2",
          "explanation": "The gradient at a particular point is found by substituting that $x$-value into the derivative.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the exponential",
          "workingLatex": "e^{0} + 2 = 1 + 2",
          "explanation": "Any nonzero base raised to the power $0$ equals $1$, so $e^{0}=1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the gradient",
          "workingLatex": "\\frac{dy}{dx} = 3",
          "explanation": "So the curve rises with gradient $3$ at $x=0$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dy}{dx} = e^x + 2$, and the gradient at $x=0$ is $3$."
    }
  },
  {
    "id": "al.y2.pure.standard-derivatives.q013",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard derivatives",
    "subtopicId": "al.y2.pure.standard-derivatives",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": [
      "standard derivatives",
      "trigonometry",
      "radians"
    ],
    "questionText": "The curve $y = 3\\sin x + 2\\cos x$ is defined with $x$ in radians. Find the gradient of the curve at $x = \\dfrac{\\pi}{2}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up and note the angle units",
          "workingLatex": "y = 3\\sin x + 2\\cos x",
          "explanation": "We differentiate each term separately. The standard trig derivatives are only valid when $x$ is measured in radians, which it is here.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate the sine term",
          "workingLatex": "\\frac{d}{dx}(3\\sin x) = 3\\cos x",
          "explanation": "The derivative of $\\sin x$ is $\\cos x$, and the constant $3$ multiplies through.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate the cosine term",
          "workingLatex": "\\frac{d}{dx}(2\\cos x) = -2\\sin x",
          "explanation": "The derivative of $\\cos x$ is $-\\sin x$ (note the minus sign), and the constant $2$ multiplies through.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Combine to form the gradient function",
          "workingLatex": "\\frac{dy}{dx} = 3\\cos x - 2\\sin x",
          "explanation": "Adding the derivatives of the two terms gives the gradient function.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the required x-value",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{x=\\frac{\\pi}{2}} = 3\\cos\\tfrac{\\pi}{2} - 2\\sin\\tfrac{\\pi}{2}",
          "explanation": "Substitute $x=\\tfrac{\\pi}{2}$ radians into the gradient function.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the trig values",
          "workingLatex": "= 3(0) - 2(1)",
          "explanation": "In radians $\\cos\\tfrac{\\pi}{2}=0$ and $\\sin\\tfrac{\\pi}{2}=1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the gradient",
          "workingLatex": "\\frac{dy}{dx} = -2",
          "explanation": "So the curve is falling at $x=\\tfrac{\\pi}{2}$, with gradient $-2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The gradient at $x=\\tfrac{\\pi}{2}$ is $-2$."
    }
  },
  {
    "id": "al.y2.pure.standard-derivatives.q014",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard derivatives",
    "subtopicId": "al.y2.pure.standard-derivatives",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": [
      "standard derivatives",
      "ln",
      "gradient"
    ],
    "questionText": "Given $y = \\ln x + x^2$, find $\\dfrac{dy}{dx}$ and evaluate the gradient at $x = 2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up and use linearity",
          "workingLatex": "y = \\ln x + x^2",
          "explanation": "The function is a sum of a logarithm term and a power term; differentiate each separately.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate the logarithm term",
          "workingLatex": "\\frac{d}{dx}(\\ln x) = \\frac{1}{x}",
          "explanation": "The standard result for the natural logarithm is that its derivative is $\\tfrac{1}{x}$ (valid for $x>0$).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate the power term",
          "workingLatex": "\\frac{d}{dx}(x^2) = 2x",
          "explanation": "By the power rule, multiply by the index $2$ and reduce the power by one.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Combine to form the gradient function",
          "workingLatex": "\\frac{dy}{dx} = \\frac{1}{x} + 2x",
          "explanation": "Adding the two derivatives gives the gradient function.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the required x-value",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{x=2} = \\frac{1}{2} + 2(2)",
          "explanation": "Substitute $x=2$ into the gradient function.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate",
          "workingLatex": "= \\frac{1}{2} + 4 = \\frac{9}{2}",
          "explanation": "Compute each part and add: $\\tfrac{1}{2}+4=\\tfrac{9}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the gradient",
          "workingLatex": "\\frac{dy}{dx} = \\frac{9}{2} = 4.5",
          "explanation": "So the gradient of the curve at $x=2$ is $\\tfrac{9}{2}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dy}{dx} = \\dfrac{1}{x} + 2x$, and at $x=2$ the gradient is $\\dfrac{9}{2}$ (that is, $4.5$)."
    }
  },
  {
    "id": "al.y2.pure.standard-derivatives.q015",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard derivatives",
    "subtopicId": "al.y2.pure.standard-derivatives",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": [
      "standard derivatives",
      "exponential",
      "gradient"
    ],
    "questionText": "Find the gradient of the curve $y = 4e^{2x} - x$ at the point where $x = 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up and use linearity",
          "workingLatex": "y = 4e^{2x} - x",
          "explanation": "Differentiate the exponential term and the linear term separately, then combine.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate the exponential term",
          "workingLatex": "\\frac{d}{dx}(4e^{2x}) = 4 \\cdot 2 e^{2x} = 8e^{2x}",
          "explanation": "The standard result $\\tfrac{d}{dx}(e^{kx}) = k e^{kx}$ with $k=2$ brings down a factor of $2$, and the constant $4$ multiplies through.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate the linear term",
          "workingLatex": "\\frac{d}{dx}(-x) = -1",
          "explanation": "The derivative of $x$ is $1$, so with the minus sign this term differentiates to $-1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Combine to form the gradient function",
          "workingLatex": "\\frac{dy}{dx} = 8e^{2x} - 1",
          "explanation": "Adding the two derivatives gives the gradient function.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the required x-value",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{x=0} = 8e^{0} - 1",
          "explanation": "Substitute $x=0$ to find the gradient there.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate",
          "workingLatex": "= 8(1) - 1 = 7",
          "explanation": "Since $e^{0}=1$, we get $8-1=7$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the gradient",
          "workingLatex": "\\frac{dy}{dx} = 7",
          "explanation": "So the gradient of the curve at $x=0$ is $7$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The gradient at $x=0$ is $7$."
    }
  },
  {
    "id": "al.y2.pure.standard-derivatives.q016",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard derivatives",
    "subtopicId": "al.y2.pure.standard-derivatives",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "numeric",
    "tags": [
      "standard derivatives",
      "e^x",
      "gradient"
    ],
    "questionText": "Given $y = x^3 + e^x$, find $\\dfrac{dy}{dx}$ and hence the gradient of the curve at $x = 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up and use linearity",
          "workingLatex": "y = x^3 + e^x",
          "explanation": "Differentiate the power term and the exponential term separately.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate the power term",
          "workingLatex": "\\frac{d}{dx}(x^3) = 3x^2",
          "explanation": "By the power rule, multiply by the index $3$ and reduce the power by one.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate the exponential term",
          "workingLatex": "\\frac{d}{dx}(e^x) = e^x",
          "explanation": "$e^x$ is its own derivative, so this term is unchanged.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Combine to form the gradient function",
          "workingLatex": "\\frac{dy}{dx} = 3x^2 + e^x",
          "explanation": "Adding the two derivatives gives the gradient function.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the required x-value",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{x=0} = 3(0)^2 + e^{0}",
          "explanation": "Substitute $x=0$ into the gradient function.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate",
          "workingLatex": "= 0 + 1 = 1",
          "explanation": "The first term vanishes and $e^{0}=1$, leaving a gradient of $1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the gradient",
          "workingLatex": "\\frac{dy}{dx} = 1",
          "explanation": "So the curve has gradient $1$ at $x=0$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{dy}{dx} = 3x^2 + e^x$, and at $x=0$ the gradient is $1$."
    }
  },
  {
    "id": "al.y2.pure.standard-derivatives.q017",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard derivatives",
    "subtopicId": "al.y2.pure.standard-derivatives",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": [
      "standard derivatives",
      "trigonometry",
      "radians"
    ],
    "questionText": "The curve $y = 5\\cos x - \\sin x$ has $x$ in radians. Find the gradient of the curve at $x = \\pi$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up and note the angle units",
          "workingLatex": "y = 5\\cos x - \\sin x",
          "explanation": "Differentiate each trig term separately. The standard derivatives require $x$ in radians, as given.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate the cosine term",
          "workingLatex": "\\frac{d}{dx}(5\\cos x) = -5\\sin x",
          "explanation": "The derivative of $\\cos x$ is $-\\sin x$, and the constant $5$ multiplies through.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate the sine term",
          "workingLatex": "\\frac{d}{dx}(-\\sin x) = -\\cos x",
          "explanation": "The derivative of $\\sin x$ is $\\cos x$; the leading minus sign makes this $-\\cos x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Combine to form the gradient function",
          "workingLatex": "\\frac{dy}{dx} = -5\\sin x - \\cos x",
          "explanation": "Adding the derivatives of the two terms gives the gradient function.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the required x-value",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{x=\\pi} = -5\\sin\\pi - \\cos\\pi",
          "explanation": "Substitute $x=\\pi$ radians into the gradient function.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the trig values",
          "workingLatex": "= -5(0) - (-1)",
          "explanation": "In radians $\\sin\\pi = 0$ and $\\cos\\pi = -1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the gradient",
          "workingLatex": "\\frac{dy}{dx} = 1",
          "explanation": "The first term is $0$ and $-(-1)=1$, so the gradient at $x=\\pi$ is $1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The gradient at $x=\\pi$ is $1$."
    }
  },
  {
    "id": "al.y2.pure.standard-derivatives.q018",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard derivatives",
    "subtopicId": "al.y2.pure.standard-derivatives",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "exact",
    "tags": [
      "standard derivatives",
      "exponential",
      "logarithm"
    ],
    "questionText": "The curve $y = 2^x$ is given. Find the gradient of the curve at $x = 0$, giving your answer exactly.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the standard result for a general exponential",
          "workingLatex": "\\frac{d}{dx}(a^x) = a^x \\ln a",
          "explanation": "For a general exponential $a^x$ (with base $a>0$), the standard result introduces a factor of $\\ln a$ when differentiating.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the base",
          "workingLatex": "a = 2",
          "explanation": "Here the base of the exponential is $2$, so the factor $\\ln a$ becomes $\\ln 2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the standard result",
          "workingLatex": "\\frac{dy}{dx} = 2^x \\ln 2",
          "explanation": "Substituting $a=2$ into the standard result gives the gradient function.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the required x-value",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{x=0} = 2^{0}\\ln 2",
          "explanation": "Substitute $x=0$ to find the gradient at that point.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the exponential factor",
          "workingLatex": "= 1 \\cdot \\ln 2",
          "explanation": "Since $2^{0}=1$, the exponential factor becomes $1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify to the exact gradient",
          "workingLatex": "\\frac{dy}{dx} = \\ln 2",
          "explanation": "This leaves the exact gradient $\\ln 2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the gradient",
          "workingLatex": "\\ln 2 \\approx 0.693",
          "explanation": "So at $x=0$ the curve $y=2^x$ has gradient $\\ln 2$; the exact form is preferred.",
          "diagram": null
        }
      ],
      "finalAnswer": "The gradient at $x=0$ is $\\ln 2$ (about $0.693$)."
    }
  },
  {
    "id": "al.y2.pure.standard-derivatives.q019",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard derivatives",
    "subtopicId": "al.y2.pure.standard-derivatives",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": [
      "standard derivatives",
      "tangent function",
      "radians"
    ],
    "questionText": "Find the gradient of the curve $y = \\tan x$ at the point where $x = \\dfrac{\\pi}{4}$, where $x$ is in radians.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the standard derivative of tan x",
          "workingLatex": "\\frac{d}{dx}(\\tan x) = \\sec^2 x",
          "explanation": "The standard derivative of $\\tan x$ is $\\sec^2 x$, valid when $x$ is in radians.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the gradient function",
          "workingLatex": "\\frac{dy}{dx} = \\sec^2 x",
          "explanation": "So the gradient function of the curve is $\\sec^2 x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the required x-value",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{x=\\frac{\\pi}{4}} = \\sec^2\\tfrac{\\pi}{4}",
          "explanation": "Substitute $x=\\tfrac{\\pi}{4}$ radians into the gradient function.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rewrite secant using cosine",
          "workingLatex": "\\sec^2\\tfrac{\\pi}{4} = \\frac{1}{\\cos^2\\tfrac{\\pi}{4}}",
          "explanation": "Recall $\\sec\\theta = \\tfrac{1}{\\cos\\theta}$, so $\\sec^2\\theta = \\tfrac{1}{\\cos^2\\theta}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the cosine",
          "workingLatex": "\\cos\\tfrac{\\pi}{4} = \\frac{\\sqrt{2}}{2}",
          "explanation": "In radians $\\cos\\tfrac{\\pi}{4} = \\tfrac{\\sqrt{2}}{2}$, an exact standard value.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute the reciprocal of the square",
          "workingLatex": "\\frac{1}{\\left(\\frac{\\sqrt{2}}{2}\\right)^2} = \\frac{1}{\\frac{1}{2}} = 2",
          "explanation": "Squaring $\\tfrac{\\sqrt{2}}{2}$ gives $\\tfrac{1}{2}$, and the reciprocal of $\\tfrac{1}{2}$ is $2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the gradient",
          "workingLatex": "\\frac{dy}{dx} = 2",
          "explanation": "So the gradient of $y=\\tan x$ at $x=\\tfrac{\\pi}{4}$ is $2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The gradient at $x=\\tfrac{\\pi}{4}$ is $2$."
    }
  },
  {
    "id": "al.y2.pure.standard-derivatives.q020",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard derivatives",
    "subtopicId": "al.y2.pure.standard-derivatives",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "exact",
    "tags": [
      "standard derivatives",
      "e^x",
      "ln"
    ],
    "questionText": "Find the gradient of the curve $y = e^x + \\ln x$ at the point where $x = 1$. Give your answer exactly.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up and use linearity",
          "workingLatex": "y = e^x + \\ln x",
          "explanation": "Differentiate the exponential term and the logarithm term separately.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate the exponential term",
          "workingLatex": "\\frac{d}{dx}(e^x) = e^x",
          "explanation": "$e^x$ is its own derivative, so this term is unchanged.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate the logarithm term",
          "workingLatex": "\\frac{d}{dx}(\\ln x) = \\frac{1}{x}",
          "explanation": "The standard derivative of $\\ln x$ is $\\tfrac{1}{x}$ (for $x>0$).",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Combine to form the gradient function",
          "workingLatex": "\\frac{dy}{dx} = e^x + \\frac{1}{x}",
          "explanation": "Adding the two derivatives gives the gradient function.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the required x-value",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{x=1} = e^{1} + \\frac{1}{1}",
          "explanation": "Substitute $x=1$ into the gradient function.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate",
          "workingLatex": "= e + 1",
          "explanation": "Since $e^{1}=e$ and $\\tfrac{1}{1}=1$, the exact gradient is $e+1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the gradient",
          "workingLatex": "\\frac{dy}{dx} = e + 1 \\approx 3.718",
          "explanation": "So the gradient at $x=1$ is the exact value $e+1$ (about $3.718$).",
          "diagram": null
        }
      ],
      "finalAnswer": "The gradient at $x=1$ is $e+1$ (approximately $3.718$)."
    }
  },
  {
    "id": "al.y2.pure.standard-derivatives.q021",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard derivatives",
    "subtopicId": "al.y2.pure.standard-derivatives",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": [
      "standard derivatives",
      "trigonometry",
      "radians"
    ],
    "questionText": "The curve $y = 2\\sin x + 3x$ has $x$ in radians. Find the gradient of the curve at $x = \\dfrac{\\pi}{3}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up and note the angle units",
          "workingLatex": "y = 2\\sin x + 3x",
          "explanation": "Differentiate the trig term and the linear term separately; the trig derivative needs $x$ in radians.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate the sine term",
          "workingLatex": "\\frac{d}{dx}(2\\sin x) = 2\\cos x",
          "explanation": "The derivative of $\\sin x$ is $\\cos x$, and the constant $2$ multiplies through.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate the linear term",
          "workingLatex": "\\frac{d}{dx}(3x) = 3",
          "explanation": "The derivative of $x$ is $1$, so $3x$ differentiates to $3$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Combine to form the gradient function",
          "workingLatex": "\\frac{dy}{dx} = 2\\cos x + 3",
          "explanation": "Adding the two derivatives gives the gradient function.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the required x-value",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{x=\\frac{\\pi}{3}} = 2\\cos\\tfrac{\\pi}{3} + 3",
          "explanation": "Substitute $x=\\tfrac{\\pi}{3}$ radians into the gradient function.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate",
          "workingLatex": "= 2\\left(\\tfrac{1}{2}\\right) + 3 = 1 + 3",
          "explanation": "In radians $\\cos\\tfrac{\\pi}{3}=\\tfrac{1}{2}$, so $2\\times\\tfrac{1}{2}=1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the gradient",
          "workingLatex": "\\frac{dy}{dx} = 4",
          "explanation": "So the gradient at $x=\\tfrac{\\pi}{3}$ is $4$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The gradient at $x=\\tfrac{\\pi}{3}$ is $4$."
    }
  },
  {
    "id": "al.y2.pure.standard-derivatives.q022",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard derivatives",
    "subtopicId": "al.y2.pure.standard-derivatives",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": [
      "standard derivatives",
      "exponential",
      "gradient"
    ],
    "questionText": "Find the gradient of the curve $y = e^{3x} - 4x$ at the point where $x = 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up and use linearity",
          "workingLatex": "y = e^{3x} - 4x",
          "explanation": "Differentiate the exponential term and the linear term separately.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate the exponential term",
          "workingLatex": "\\frac{d}{dx}(e^{3x}) = 3e^{3x}",
          "explanation": "The standard result $\\tfrac{d}{dx}(e^{kx})=ke^{kx}$ with $k=3$ brings down a factor of $3$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate the linear term",
          "workingLatex": "\\frac{d}{dx}(-4x) = -4",
          "explanation": "The derivative of $x$ is $1$, so $-4x$ differentiates to $-4$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Combine to form the gradient function",
          "workingLatex": "\\frac{dy}{dx} = 3e^{3x} - 4",
          "explanation": "Adding the two derivatives gives the gradient function.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the required x-value",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{x=0} = 3e^{0} - 4",
          "explanation": "Substitute $x=0$ into the gradient function.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate",
          "workingLatex": "= 3(1) - 4 = -1",
          "explanation": "Since $e^{0}=1$, we get $3-4=-1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the gradient",
          "workingLatex": "\\frac{dy}{dx} = -1",
          "explanation": "So the curve is falling at $x=0$, with gradient $-1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The gradient at $x=0$ is $-1$."
    }
  },
  {
    "id": "al.y2.pure.standard-derivatives.q023",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard derivatives",
    "subtopicId": "al.y2.pure.standard-derivatives",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "standard derivatives",
      "tangent",
      "exponential"
    ],
    "questionText": "Find an equation of the tangent to the curve $y = e^x + x$ at the point where $x = 1$. Give your answer in an exact form involving $e$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise that the tangent's gradient is the value of the derivative",
          "workingLatex": "m = \\left.\\frac{dy}{dx}\\right|_{x=1}",
          "explanation": "The tangent touches the curve with the same steepness at the point of contact, so its gradient is the derivative of $y$ evaluated at that point. We differentiate first, then substitute $x=1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down the standard derivatives needed",
          "workingLatex": "\\frac{d}{dx}(e^x) = e^x, \\qquad \\frac{d}{dx}(x) = 1",
          "explanation": "$e^x$ is the function that is its own derivative, and the derivative of $x$ is $1$ by the power rule. These are the two building blocks of this curve.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate term by term",
          "workingLatex": "\\frac{dy}{dx} = e^x + 1",
          "explanation": "Differentiation is linear, so we differentiate $e^x$ and $x$ separately and add the results.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the gradient at x = 1",
          "workingLatex": "m = e^1 + 1 = e + 1",
          "explanation": "Substituting $x=1$ into the derivative gives the exact gradient of the tangent at the point of contact.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the y-coordinate of the point of contact",
          "workingLatex": "y = e^1 + 1 = e + 1",
          "explanation": "The tangent meets the curve at $x=1$, so we substitute into the original equation $y=e^x+x$ to obtain the point $(1,\\ e+1)$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Collect the point and gradient",
          "workingLatex": "(1,\\ e+1), \\qquad m = e+1",
          "explanation": "We now have everything the line needs: a point it passes through and its gradient.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Use the point–gradient form of a straight line",
          "workingLatex": "y - (e+1) = (e+1)(x - 1)",
          "explanation": "Substituting the point $(1,\\ e+1)$ and gradient $e+1$ into $y - y_1 = m(x - x_1)$ builds the tangent line.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Expand the bracket",
          "workingLatex": "y = (e+1)x - (e+1) + (e+1)",
          "explanation": "Multiplying out $(e+1)(x-1)$ gives $(e+1)x-(e+1)$, and we add the $(e+1)$ from the left-hand side.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Simplify",
          "workingLatex": "y = (e+1)x",
          "explanation": "The constant terms $-(e+1)$ and $+(e+1)$ cancel, leaving a tangent that passes through the origin.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the tangent and check it passes through the point",
          "workingLatex": "y = (e+1)x; \\quad x=1 \\Rightarrow (e+1)(1) = e+1 \\ \\checkmark",
          "explanation": "The line $y=(e+1)x$ has the required gradient and passes through $(1,\\ e+1)$, confirming it is the tangent.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = (e+1)x$."
    }
  },
  {
    "id": "al.y2.pure.standard-derivatives.q024",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard derivatives",
    "subtopicId": "al.y2.pure.standard-derivatives",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "standard derivatives",
      "tangent",
      "intercept"
    ],
    "questionText": "The curve $C$ has equation $y = \\ln x + x^2$, $x > 0$. Find an equation of the tangent to $C$ at the point where $x = 1$, and hence find the coordinates of the point where this tangent crosses the $x$-axis.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up: the tangent's gradient is the derivative at the point",
          "workingLatex": "m = \\left.\\frac{dy}{dx}\\right|_{x=1}",
          "explanation": "A tangent shares the curve's gradient at the point of contact, so we differentiate and evaluate the derivative at $x=1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down the standard derivatives",
          "workingLatex": "\\frac{d}{dx}(\\ln x) = \\frac{1}{x}, \\qquad \\frac{d}{dx}(x^2) = 2x",
          "explanation": "The derivative of $\\ln x$ is the standard result $\\tfrac{1}{x}$, and $x^2$ differentiates to $2x$ by the power rule.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate term by term",
          "workingLatex": "\\frac{dy}{dx} = \\frac{1}{x} + 2x",
          "explanation": "By linearity we differentiate each term separately and add the results.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the gradient at x = 1",
          "workingLatex": "m = \\frac{1}{1} + 2(1) = 3",
          "explanation": "Substituting $x=1$ into the derivative gives the gradient of the tangent.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the y-coordinate of the point of contact",
          "workingLatex": "y = \\ln 1 + 1^2 = 0 + 1 = 1",
          "explanation": "On the curve at $x=1$; since $\\ln 1 = 0$, the point of contact is $(1,\\ 1)$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Collect the point and gradient",
          "workingLatex": "(1,\\ 1), \\qquad m = 3",
          "explanation": "These are the ingredients for the tangent line.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Apply the point–gradient form",
          "workingLatex": "y - 1 = 3(x - 1)",
          "explanation": "Substitute the point $(1,1)$ and gradient $3$ into $y - y_1 = m(x - x_1)$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Simplify to the tangent equation",
          "workingLatex": "y = 3x - 2",
          "explanation": "Expanding $3(x-1)=3x-3$ and adding $1$ gives $y = 3x - 2$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Set y = 0 to find the x-axis crossing",
          "workingLatex": "0 = 3x - 2",
          "explanation": "A point on the $x$-axis has $y=0$, so we substitute this into the tangent equation.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Solve for x",
          "workingLatex": "3x = 2 \\Rightarrow x = \\frac{2}{3}",
          "explanation": "Rearranging gives the $x$-coordinate where the tangent cuts the axis.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the results",
          "workingLatex": "y = 3x - 2, \\qquad \\left(\\tfrac{2}{3},\\ 0\\right)",
          "explanation": "The tangent is $y = 3x - 2$ and it crosses the $x$-axis at $\\left(\\tfrac{2}{3},\\ 0\\right)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Tangent: $y = 3x - 2$; it crosses the $x$-axis at $\\left(\\dfrac{2}{3},\\ 0\\right)$."
    }
  },
  {
    "id": "al.y2.pure.standard-derivatives.q025",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard derivatives",
    "subtopicId": "al.y2.pure.standard-derivatives",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "standard derivatives",
      "tangent",
      "trigonometry"
    ],
    "questionText": "The curve has equation $y = \\sin x + \\cos x$, where $x$ is in radians. Find an equation of the tangent to the curve at the point where $x = \\dfrac{\\pi}{2}$, giving your answer in exact form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall that the tangent gradient equals the derivative (in radians)",
          "workingLatex": "m = \\left.\\frac{dy}{dx}\\right|_{x=\\pi/2}",
          "explanation": "The gradient of the tangent is the derivative at the point. Because these are trigonometric derivatives, $x$ must be measured in radians.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down the standard trig derivatives",
          "workingLatex": "\\frac{d}{dx}(\\sin x) = \\cos x, \\qquad \\frac{d}{dx}(\\cos x) = -\\sin x",
          "explanation": "These are the standard results: $\\sin$ differentiates to $\\cos$, and $\\cos$ differentiates to $-\\sin$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate the sum",
          "workingLatex": "\\frac{dy}{dx} = \\cos x - \\sin x",
          "explanation": "Differentiating each term and adding, using the linearity of differentiation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the required trig values at x = π/2",
          "workingLatex": "\\cos\\tfrac{\\pi}{2} = 0, \\qquad \\sin\\tfrac{\\pi}{2} = 1",
          "explanation": "At the quarter-turn $x=\\tfrac{\\pi}{2}$ radians, cosine is $0$ and sine is $1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the gradient",
          "workingLatex": "m = \\cos\\tfrac{\\pi}{2} - \\sin\\tfrac{\\pi}{2} = 0 - 1 = -1",
          "explanation": "Substituting the values gives a tangent gradient of $-1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the y-coordinate of the point of contact",
          "workingLatex": "y = \\sin\\tfrac{\\pi}{2} + \\cos\\tfrac{\\pi}{2} = 1 + 0 = 1",
          "explanation": "On the curve at $x=\\tfrac{\\pi}{2}$, giving the point $\\left(\\tfrac{\\pi}{2},\\ 1\\right)$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Collect the point and gradient",
          "workingLatex": "\\left(\\tfrac{\\pi}{2},\\ 1\\right), \\qquad m = -1",
          "explanation": "We are ready to build the tangent line.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Use the point–gradient form",
          "workingLatex": "y - 1 = -1\\left(x - \\tfrac{\\pi}{2}\\right)",
          "explanation": "Substitute the point and gradient into $y - y_1 = m(x - x_1)$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Expand the bracket",
          "workingLatex": "y - 1 = -x + \\tfrac{\\pi}{2}",
          "explanation": "Multiplying $-1$ through the bracket changes both signs inside.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Rearrange to state the tangent",
          "workingLatex": "y = -x + \\tfrac{\\pi}{2} + 1",
          "explanation": "Adding $1$ to both sides gives the tangent line in exact form.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check the line passes through the point",
          "workingLatex": "x=\\tfrac{\\pi}{2}:\\ -\\tfrac{\\pi}{2} + \\tfrac{\\pi}{2} + 1 = 1 \\ \\checkmark",
          "explanation": "The tangent gives $y=1$ at $x=\\tfrac{\\pi}{2}$, matching the point of contact.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = -x + \\dfrac{\\pi}{2} + 1$ (equivalently $y = \\dfrac{\\pi}{2} + 1 - x$)."
    }
  },
  {
    "id": "al.y2.pure.standard-derivatives.q026",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard derivatives",
    "subtopicId": "al.y2.pure.standard-derivatives",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "standard derivatives",
      "gradient",
      "logarithm"
    ],
    "questionText": "A curve has equation $y = e^x + 3x$. Find, in exact form, the coordinates of the point on the curve at which the gradient is equal to $5$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise that the gradient is given by the derivative",
          "workingLatex": "\\text{gradient} = \\frac{dy}{dx}",
          "explanation": "The gradient at any point of the curve is the value of $\\tfrac{dy}{dx}$ there, so we differentiate first, then impose the condition.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down the standard derivatives",
          "workingLatex": "\\frac{d}{dx}(e^x) = e^x, \\qquad \\frac{d}{dx}(3x) = 3",
          "explanation": "$e^x$ is its own derivative, and the constant multiple $3x$ differentiates to $3$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate",
          "workingLatex": "\\frac{dy}{dx} = e^x + 3",
          "explanation": "Adding the derivatives of the two terms gives the gradient function.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set the gradient equal to 5",
          "workingLatex": "e^x + 3 = 5",
          "explanation": "We want the point where the gradient is $5$, so we set the derivative equal to $5$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Isolate the exponential",
          "workingLatex": "e^x = 2",
          "explanation": "Subtracting $3$ from both sides leaves a simple exponential equation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve by taking natural logarithms",
          "workingLatex": "x = \\ln 2",
          "explanation": "Since $\\ln$ is the inverse of $e^x$, taking $\\ln$ of both sides gives the exact $x$-coordinate.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the y-coordinate",
          "workingLatex": "y = e^{\\ln 2} + 3\\ln 2",
          "explanation": "Substitute $x=\\ln 2$ into the original curve equation $y=e^x+3x$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Simplify using e^{ln 2} = 2",
          "workingLatex": "y = 2 + 3\\ln 2",
          "explanation": "Because $e$ and $\\ln$ are inverse operations, $e^{\\ln 2}=2$, leaving the exact $y$-coordinate.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the coordinates",
          "workingLatex": "(\\ln 2,\\ 2 + 3\\ln 2)",
          "explanation": "This is the required point in exact form.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check the gradient at this point",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{x=\\ln 2} = e^{\\ln 2} + 3 = 2 + 3 = 5 \\ \\checkmark",
          "explanation": "The gradient is indeed $5$, confirming the point is correct.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(\\ln 2,\\ 2 + 3\\ln 2)$."
    }
  },
  {
    "id": "al.y2.pure.standard-derivatives.q027",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard derivatives",
    "subtopicId": "al.y2.pure.standard-derivatives",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "standard derivatives",
      "tangent",
      "parallel"
    ],
    "questionText": "The curve $C$ has equation $y = e^{2x}$. The tangent to $C$ at a point $P$ is parallel to the line $y = 4x - 1$. Find the coordinates of $P$ and an equation of this tangent, giving your answers in exact form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Use that parallel lines share the same gradient",
          "workingLatex": "m = 4",
          "explanation": "The line $y=4x-1$ has gradient $4$. A tangent parallel to it must also have gradient $4$, so we look for where $\\tfrac{dy}{dx}=4$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the standard derivative of e^{2x}",
          "workingLatex": "\\frac{d}{dx}\\left(e^{2x}\\right) = 2e^{2x}",
          "explanation": "This is the standard result $\\tfrac{d}{dx}(e^{kx})=k\\,e^{kx}$ with $k=2$; it is quoted directly, not derived from a chain rule.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the gradient function",
          "workingLatex": "\\frac{dy}{dx} = 2e^{2x}",
          "explanation": "This gives the gradient of the curve at any value of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set the gradient equal to 4",
          "workingLatex": "2e^{2x} = 4",
          "explanation": "We require the point $P$ where the tangent gradient is $4$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the exponential equation",
          "workingLatex": "e^{2x} = 2",
          "explanation": "Dividing both sides by $2$ isolates the exponential.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Take natural logarithms",
          "workingLatex": "2x = \\ln 2",
          "explanation": "Applying $\\ln$ to both sides undoes the exponential.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for x",
          "workingLatex": "x = \\tfrac{1}{2}\\ln 2",
          "explanation": "Dividing by $2$ gives the exact $x$-coordinate of $P$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find the y-coordinate",
          "workingLatex": "y = e^{2x} = 2",
          "explanation": "From step $5$, $e^{2x}=2$ at this point, so the $y$-coordinate is exactly $2$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the point P",
          "workingLatex": "P\\left(\\tfrac{1}{2}\\ln 2,\\ 2\\right)",
          "explanation": "This is where the curve has gradient $4$, matching the given line.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Use the point–gradient form",
          "workingLatex": "y - 2 = 4\\left(x - \\tfrac{1}{2}\\ln 2\\right)",
          "explanation": "Substitute $P$ and $m=4$ into $y - y_1 = m(x - x_1)$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Expand and simplify",
          "workingLatex": "y = 4x - 2\\ln 2 + 2",
          "explanation": "Multiplying out: $4 \\times \\tfrac{1}{2}\\ln 2 = 2\\ln 2$, giving the tangent in exact form.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Check the tangent passes through P",
          "workingLatex": "x=\\tfrac{1}{2}\\ln 2:\\ 4\\left(\\tfrac{1}{2}\\ln 2\\right) - 2\\ln 2 + 2 = 2 \\ \\checkmark",
          "explanation": "The line gives $y=2$ at $P$ and has gradient $4$, so it is the required tangent.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P\\left(\\dfrac{1}{2}\\ln 2,\\ 2\\right)$; tangent $y = 4x - 2\\ln 2 + 2$."
    }
  },
  {
    "id": "al.y2.pure.standard-derivatives.q028",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard derivatives",
    "subtopicId": "al.y2.pure.standard-derivatives",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "standard derivatives",
      "tangent",
      "exponential"
    ],
    "questionText": "Find an equation of the tangent to the curve $y = 2^x$ at the point where $x = 1$. Give your answer in exact form, leaving the gradient in terms of $\\ln 2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "The tangent gradient is the derivative at the point",
          "workingLatex": "m = \\left.\\frac{dy}{dx}\\right|_{x=1}",
          "explanation": "We differentiate to get the gradient function, then evaluate it at $x=1$ to find the tangent's gradient.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down the standard derivative of a^x",
          "workingLatex": "\\frac{d}{dx}\\left(a^x\\right) = a^x \\ln a",
          "explanation": "The standard result for an exponential with base $a$ brings in a factor of $\\ln a$. Here the base is $a=2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate",
          "workingLatex": "\\frac{dy}{dx} = 2^x \\ln 2",
          "explanation": "Applying the rule with $a=2$ gives the gradient function.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the gradient at x = 1",
          "workingLatex": "m = 2^1 \\ln 2 = 2\\ln 2",
          "explanation": "Substituting $x=1$; since $2^1=2$, the exact gradient is $2\\ln 2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the y-coordinate of the point of contact",
          "workingLatex": "y = 2^1 = 2",
          "explanation": "On the curve at $x=1$, giving the point $(1,\\ 2)$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Collect the point and gradient",
          "workingLatex": "(1,\\ 2), \\qquad m = 2\\ln 2",
          "explanation": "We are ready to form the tangent line.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Use the point–gradient form",
          "workingLatex": "y - 2 = 2\\ln 2\\,(x - 1)",
          "explanation": "Substitute the point and gradient into $y - y_1 = m(x - x_1)$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Expand the bracket",
          "workingLatex": "y = 2\\ln 2 \\cdot x - 2\\ln 2 + 2",
          "explanation": "Multiplying $2\\ln 2$ through $(x-1)$ and adding the $2$ from the left-hand side.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Write the tangent tidily",
          "workingLatex": "y = (2\\ln 2)\\,x + 2 - 2\\ln 2",
          "explanation": "Grouping the constant terms gives the tangent in a clean exact form.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check it passes through (1, 2)",
          "workingLatex": "x=1:\\ (2\\ln 2)(1) + 2 - 2\\ln 2 = 2 \\ \\checkmark",
          "explanation": "The line gives $y=2$ at $x=1$, confirming it is the tangent.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = (2\\ln 2)\\,x + 2 - 2\\ln 2$ (equivalently $y = 2\\ln 2\\,(x - 1) + 2$)."
    }
  },
  {
    "id": "al.y2.pure.standard-derivatives.q029",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard derivatives",
    "subtopicId": "al.y2.pure.standard-derivatives",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "standard derivatives",
      "gradient",
      "trigonometry"
    ],
    "questionText": "The curve has equation $y = \\sin x$ for $0 \\le x \\le 2\\pi$, where $x$ is in radians. Find the exact coordinates of the points on the curve at which the gradient equals $\\tfrac{1}{2}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "The gradient is the derivative; work in radians",
          "workingLatex": "\\text{gradient} = \\frac{dy}{dx}",
          "explanation": "We want where the gradient equals $\\tfrac{1}{2}$, so we differentiate and set the derivative equal to $\\tfrac{1}{2}$. Trig derivatives require $x$ in radians.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the standard derivative of sin x",
          "workingLatex": "\\frac{d}{dx}(\\sin x) = \\cos x",
          "explanation": "The derivative of $\\sin x$ is the standard result $\\cos x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the gradient function",
          "workingLatex": "\\frac{dy}{dx} = \\cos x",
          "explanation": "This gives the gradient of the curve at any value of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set the gradient equal to 1/2",
          "workingLatex": "\\cos x = \\tfrac{1}{2}",
          "explanation": "This equation locates every point on the curve with the required gradient.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the first solution in the interval",
          "workingLatex": "x = \\frac{\\pi}{3}",
          "explanation": "In the first quadrant $\\cos\\tfrac{\\pi}{3}=\\tfrac{1}{2}$, giving the principal solution.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the second solution in the interval",
          "workingLatex": "x = 2\\pi - \\frac{\\pi}{3} = \\frac{5\\pi}{3}",
          "explanation": "Cosine is also positive in the fourth quadrant; the symmetry $\\cos(2\\pi-\\theta)=\\cos\\theta$ gives the second solution within $0 \\le x \\le 2\\pi$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate y at x = π/3",
          "workingLatex": "y = \\sin\\frac{\\pi}{3} = \\frac{\\sqrt{3}}{2}",
          "explanation": "The $y$-coordinate of the first point.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Evaluate y at x = 5π/3",
          "workingLatex": "y = \\sin\\frac{5\\pi}{3} = -\\frac{\\sqrt{3}}{2}",
          "explanation": "In the fourth quadrant sine is negative, giving $-\\tfrac{\\sqrt{3}}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the two points",
          "workingLatex": "\\left(\\frac{\\pi}{3},\\ \\frac{\\sqrt{3}}{2}\\right), \\qquad \\left(\\frac{5\\pi}{3},\\ -\\frac{\\sqrt{3}}{2}\\right)",
          "explanation": "Both points lie in the interval and both have gradient $\\tfrac{1}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check the gradients",
          "workingLatex": "\\cos\\frac{\\pi}{3} = \\tfrac{1}{2}, \\qquad \\cos\\frac{5\\pi}{3} = \\tfrac{1}{2} \\ \\checkmark",
          "explanation": "Both evaluate to a gradient of $\\tfrac{1}{2}$, confirming the answers.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\left(\\dfrac{\\pi}{3},\\ \\dfrac{\\sqrt{3}}{2}\\right)$ and $\\left(\\dfrac{5\\pi}{3},\\ -\\dfrac{\\sqrt{3}}{2}\\right)$."
    }
  },
  {
    "id": "al.y2.pure.standard-derivatives.q030",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard derivatives",
    "subtopicId": "al.y2.pure.standard-derivatives",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "standard derivatives",
      "tangent",
      "intercept"
    ],
    "questionText": "Find an equation of the tangent to the curve $y = e^x$ at the point where $x = 2$. Hence find, in exact form, the coordinates of the point where this tangent crosses the $y$-axis.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "The tangent gradient is the derivative at the point",
          "workingLatex": "m = \\left.\\frac{dy}{dx}\\right|_{x=2}",
          "explanation": "We differentiate to get the gradient function, then evaluate at $x=2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the standard derivative",
          "workingLatex": "\\frac{d}{dx}(e^x) = e^x",
          "explanation": "$e^x$ is its own derivative — a defining property of the exponential function.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the gradient function",
          "workingLatex": "\\frac{dy}{dx} = e^x",
          "explanation": "The gradient at any point equals the height $e^x$ there.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the gradient at x = 2",
          "workingLatex": "m = e^2",
          "explanation": "Substituting $x=2$ gives the exact gradient of the tangent.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the y-coordinate of the point of contact",
          "workingLatex": "y = e^2",
          "explanation": "On the curve at $x=2$, so the point of contact is $(2,\\ e^2)$. Here the height and gradient happen to be equal.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Collect the point and gradient",
          "workingLatex": "(2,\\ e^2), \\qquad m = e^2",
          "explanation": "Ready to form the tangent line.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Use the point–gradient form",
          "workingLatex": "y - e^2 = e^2(x - 2)",
          "explanation": "Substitute into $y - y_1 = m(x - x_1)$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Expand the bracket",
          "workingLatex": "y = e^2 x - 2e^2 + e^2",
          "explanation": "Multiplying $e^2$ through $(x-2)$, then adding the $e^2$ from the left-hand side.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Simplify and factor",
          "workingLatex": "y = e^2 x - e^2 = e^2(x - 1)",
          "explanation": "Combining $-2e^2+e^2=-e^2$ gives a neat factored form of the tangent.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Find the y-axis crossing by setting x = 0",
          "workingLatex": "y = e^2(0 - 1) = -e^2",
          "explanation": "A point on the $y$-axis has $x=0$; substituting gives the exact $y$-intercept.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the results",
          "workingLatex": "y = e^2(x - 1), \\qquad (0,\\ -e^2)",
          "explanation": "The tangent is $y = e^2(x-1)$ and it crosses the $y$-axis at $(0,\\ -e^2)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Tangent: $y = e^2(x - 1)$; it crosses the $y$-axis at $(0,\\ -e^2)$."
    }
  },
  {
    "id": "al.y2.pure.standard-derivatives.q031",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard derivatives",
    "subtopicId": "al.y2.pure.standard-derivatives",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "standard derivatives",
      "tangent",
      "trigonometry"
    ],
    "questionText": "The curve has equation $y = \\tan x$, where $x$ is in radians. Find an equation of the tangent to the curve at the point where $x = \\dfrac{\\pi}{4}$, giving your answer in exact form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "The tangent gradient is the derivative at the point (in radians)",
          "workingLatex": "m = \\left.\\frac{dy}{dx}\\right|_{x=\\pi/4}",
          "explanation": "We differentiate to find the gradient function, then evaluate at $x=\\tfrac{\\pi}{4}$. Trig derivatives need $x$ in radians.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the standard derivative of tan x",
          "workingLatex": "\\frac{d}{dx}(\\tan x) = \\sec^2 x",
          "explanation": "The derivative of $\\tan x$ is the standard result $\\sec^2 x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the gradient function",
          "workingLatex": "\\frac{dy}{dx} = \\sec^2 x",
          "explanation": "This gives the gradient at any $x$ where $\\tan x$ is defined.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate sec² at x = π/4",
          "workingLatex": "\\sec^2\\tfrac{\\pi}{4} = \\frac{1}{\\cos^2\\tfrac{\\pi}{4}} = \\frac{1}{\\left(\\tfrac{\\sqrt{2}}{2}\\right)^2} = \\frac{1}{\\tfrac{1}{2}} = 2",
          "explanation": "Since $\\sec x = \\tfrac{1}{\\cos x}$ and $\\cos\\tfrac{\\pi}{4}=\\tfrac{\\sqrt{2}}{2}$, squaring gives $\\sec^2\\tfrac{\\pi}{4}=2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the gradient",
          "workingLatex": "m = 2",
          "explanation": "The tangent's gradient at this point is $2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the y-coordinate of the point of contact",
          "workingLatex": "y = \\tan\\tfrac{\\pi}{4} = 1",
          "explanation": "On the curve at $x=\\tfrac{\\pi}{4}$; since $\\tan\\tfrac{\\pi}{4}=1$, the point is $\\left(\\tfrac{\\pi}{4},\\ 1\\right)$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Collect the point and gradient",
          "workingLatex": "\\left(\\tfrac{\\pi}{4},\\ 1\\right), \\qquad m = 2",
          "explanation": "Ready to build the tangent line.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Use the point–gradient form",
          "workingLatex": "y - 1 = 2\\left(x - \\tfrac{\\pi}{4}\\right)",
          "explanation": "Substitute the point and gradient into $y - y_1 = m(x - x_1)$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Expand the bracket",
          "workingLatex": "y - 1 = 2x - \\tfrac{\\pi}{2}",
          "explanation": "Multiplying $2$ through the bracket: $2 \\times \\tfrac{\\pi}{4} = \\tfrac{\\pi}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Rearrange to the tangent equation",
          "workingLatex": "y = 2x - \\tfrac{\\pi}{2} + 1",
          "explanation": "Adding $1$ to both sides gives the tangent in exact form.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check it passes through the point",
          "workingLatex": "x=\\tfrac{\\pi}{4}:\\ 2\\left(\\tfrac{\\pi}{4}\\right) - \\tfrac{\\pi}{2} + 1 = 1 \\ \\checkmark",
          "explanation": "The line gives $y=1$ at $x=\\tfrac{\\pi}{4}$, confirming the tangent.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = 2x - \\dfrac{\\pi}{2} + 1$."
    }
  },
  {
    "id": "al.y2.pure.standard-derivatives.q032",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard derivatives",
    "subtopicId": "al.y2.pure.standard-derivatives",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "standard derivatives",
      "normal",
      "exponential"
    ],
    "questionText": "Find an equation of the normal to the curve $y = e^{2x}$ at the point where $x = 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the standard derivative of e^{kx}",
          "workingLatex": "\\frac{d}{dx}\\left(e^{kx}\\right) = k\\,e^{kx}",
          "explanation": "The exponential $e^{kx}$ differentiates to $k\\,e^{kx}$, where $k$ is the constant multiplying $x$. Here $k=2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate the curve",
          "workingLatex": "\\frac{dy}{dx} = 2e^{2x}",
          "explanation": "Applying the standard result with $k=2$ gives the gradient function of the curve at any value of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the gradient of the curve at x = 0",
          "workingLatex": "m = \\left.\\frac{dy}{dx}\\right|_{x=0} = 2e^{0} = 2",
          "explanation": "Substituting $x=0$ into the derivative gives the gradient of the tangent at that point. Since $e^{0}=1$, the tangent gradient is $m=2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the y-coordinate of the point",
          "workingLatex": "y = e^{2(0)} = e^{0} = 1",
          "explanation": "The point lies on the curve, so we evaluate $y=e^{2x}$ at $x=0$. The point of contact is $(0,\\,1)$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the gradient of the normal",
          "workingLatex": "m_n = -\\frac{1}{m} = -\\frac{1}{2}",
          "explanation": "The normal is perpendicular to the tangent, so its gradient is $-1$ divided by the tangent gradient. With $m=2$ this gives $-\\tfrac{1}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Collect the point and the normal gradient",
          "workingLatex": "(0,\\,1), \\quad m_n = -\\frac{1}{2}",
          "explanation": "Gathering the point of contact and the normal's gradient gives everything the line needs.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Use the point-gradient form of a line",
          "workingLatex": "y - 1 = -\\frac{1}{2}(x - 0)",
          "explanation": "Substitute the point $(0,1)$ and gradient $-\\tfrac{1}{2}$ into $y-y_1=m(x-x_1)$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Simplify to the form y = mx + c",
          "workingLatex": "y = -\\frac{1}{2}x + 1",
          "explanation": "Expanding the bracket and keeping the $+1$ gives the normal written explicitly for $y$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Give a tidy rearranged form",
          "workingLatex": "x + 2y - 2 = 0",
          "explanation": "Multiplying through by $2$ and collecting terms gives an equivalent equation with integer coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the equation of the normal",
          "workingLatex": "y = 1 - \\tfrac{1}{2}x",
          "explanation": "This is the normal to $y=e^{2x}$ at the point $(0,1)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = 1 - \\dfrac{1}{2}x$ (equivalently $x + 2y - 2 = 0$)."
    }
  },
  {
    "id": "al.y2.pure.standard-derivatives.q033",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard derivatives",
    "subtopicId": "al.y2.pure.standard-derivatives",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "standard derivatives",
      "normal",
      "ln"
    ],
    "questionText": "Find an equation of the normal to the curve $y = \\ln x$ at the point where $x = e$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the standard derivative of ln x",
          "workingLatex": "\\frac{d}{dx}(\\ln x) = \\frac{1}{x}",
          "explanation": "The natural logarithm has the standard derivative $\\tfrac{1}{x}$, valid for $x>0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the gradient function",
          "workingLatex": "\\frac{dy}{dx} = \\frac{1}{x}",
          "explanation": "This gives the gradient of the curve, and hence of the tangent, at any point.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the gradient of the curve at x = e",
          "workingLatex": "m = \\left.\\frac{dy}{dx}\\right|_{x=e} = \\frac{1}{e}",
          "explanation": "Substituting $x=e$ into the derivative gives the tangent gradient at the point.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the y-coordinate of the point",
          "workingLatex": "y = \\ln e = 1",
          "explanation": "The point lies on the curve; since $\\ln e = 1$, the point of contact is $(e,\\,1)$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the gradient of the normal",
          "workingLatex": "m_n = -\\frac{1}{m} = -\\frac{1}{\\,1/e\\,} = -e",
          "explanation": "The normal gradient is $-1$ divided by the tangent gradient. Dividing by $\\tfrac{1}{e}$ multiplies by $e$, giving $-e$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Collect the point and the normal gradient",
          "workingLatex": "(e,\\,1), \\quad m_n = -e",
          "explanation": "We now have the point the normal passes through and its gradient.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Use the point-gradient form of a line",
          "workingLatex": "y - 1 = -e(x - e)",
          "explanation": "Substitute $(e,1)$ and gradient $-e$ into $y-y_1=m(x-x_1)$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Expand the bracket",
          "workingLatex": "y - 1 = -ex + e^{2}",
          "explanation": "Multiplying $-e$ through the bracket: $-e\\cdot x = -ex$ and $-e\\cdot(-e)=e^{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Make y the subject",
          "workingLatex": "y = -ex + e^{2} + 1",
          "explanation": "Adding $1$ to both sides isolates $y$ and gives the normal in explicit form.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the equation of the normal",
          "workingLatex": "y = -ex + e^{2} + 1",
          "explanation": "This is the normal to $y=\\ln x$ at the point $(e,1)$; the constant $e^{2}+1$ is exact.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = -ex + e^{2} + 1$."
    }
  },
  {
    "id": "al.y2.pure.standard-derivatives.q034",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard derivatives",
    "subtopicId": "al.y2.pure.standard-derivatives",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "standard derivatives",
      "normal",
      "trigonometry"
    ],
    "questionText": "The curve $y = \\cos x$ is defined for $x$ in radians. Find an equation of the normal to the curve at the point where $x = \\dfrac{\\pi}{2}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the standard derivative of cos x",
          "workingLatex": "\\frac{d}{dx}(\\cos x) = -\\sin x",
          "explanation": "The standard result for $\\cos x$ is $-\\sin x$. This holds only when $x$ is measured in radians, as stated.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the gradient function",
          "workingLatex": "\\frac{dy}{dx} = -\\sin x",
          "explanation": "This gives the gradient of the tangent to the curve at any value of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the gradient of the curve at x = pi/2",
          "workingLatex": "m = \\left.\\frac{dy}{dx}\\right|_{x=\\pi/2} = -\\sin\\frac{\\pi}{2} = -1",
          "explanation": "Substituting $x=\\tfrac{\\pi}{2}$ and using $\\sin\\tfrac{\\pi}{2}=1$ gives the tangent gradient $m=-1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the y-coordinate of the point",
          "workingLatex": "y = \\cos\\frac{\\pi}{2} = 0",
          "explanation": "The point lies on the curve; since $\\cos\\tfrac{\\pi}{2}=0$, the point of contact is $\\left(\\tfrac{\\pi}{2},\\,0\\right)$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the gradient of the normal",
          "workingLatex": "m_n = -\\frac{1}{m} = -\\frac{1}{-1} = 1",
          "explanation": "The normal gradient is $-1$ divided by the tangent gradient. With $m=-1$ this gives $1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Collect the point and the normal gradient",
          "workingLatex": "\\left(\\frac{\\pi}{2},\\,0\\right), \\quad m_n = 1",
          "explanation": "We now have the point the normal passes through and its gradient.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Use the point-gradient form of a line",
          "workingLatex": "y - 0 = 1\\left(x - \\frac{\\pi}{2}\\right)",
          "explanation": "Substitute the point $\\left(\\tfrac{\\pi}{2},0\\right)$ and gradient $1$ into $y-y_1=m(x-x_1)$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Simplify",
          "workingLatex": "y = x - \\frac{\\pi}{2}",
          "explanation": "With a gradient of $1$ the bracket opens directly, leaving a clean equation for the normal.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the equation of the normal",
          "workingLatex": "y = x - \\frac{\\pi}{2}",
          "explanation": "This is the normal to $y=\\cos x$ at the point $\\left(\\tfrac{\\pi}{2},0\\right)$, with $x$ in radians.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = x - \\dfrac{\\pi}{2}$."
    }
  },
  {
    "id": "al.y2.pure.standard-derivatives.q035",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard derivatives",
    "subtopicId": "al.y2.pure.standard-derivatives",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "standard derivatives",
      "stationary point",
      "exponential"
    ],
    "questionText": "The curve $y = e^{x} - x$ has a single stationary point. Find its coordinates and determine its nature.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the standard derivatives needed",
          "workingLatex": "\\frac{d}{dx}\\left(e^{x}\\right) = e^{x}, \\qquad \\frac{d}{dx}(x) = 1",
          "explanation": "The exponential $e^{x}$ is its own derivative, and the linear term $x$ differentiates to $1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate the curve",
          "workingLatex": "\\frac{dy}{dx} = e^{x} - 1",
          "explanation": "Differentiating term by term using linearity gives the gradient function of the curve.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set the derivative equal to zero",
          "workingLatex": "e^{x} - 1 = 0",
          "explanation": "At a stationary point the tangent is horizontal, so the gradient is zero.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rearrange",
          "workingLatex": "e^{x} = 1",
          "explanation": "Moving the constant to the other side isolates the exponential.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for x",
          "workingLatex": "x = \\ln 1 = 0",
          "explanation": "Taking natural logs of both sides; since $\\ln 1 = 0$, the only solution is $x=0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the y-coordinate",
          "workingLatex": "y = e^{0} - 0 = 1",
          "explanation": "Substituting $x=0$ into the curve gives the height of the stationary point: the coordinates are $(0,\\,1)$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Differentiate again for the second derivative",
          "workingLatex": "\\frac{d^{2}y}{dx^{2}} = e^{x}",
          "explanation": "The derivative of $e^{x}-1$ is $e^{x}$; the constant $-1$ differentiates to $0$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Evaluate the second derivative at x = 0",
          "workingLatex": "\\left.\\frac{d^{2}y}{dx^{2}}\\right|_{x=0} = e^{0} = 1 > 0",
          "explanation": "The second derivative is positive at the stationary point, which tells us about the concavity there.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Classify the stationary point",
          "workingLatex": "\\frac{d^{2}y}{dx^{2}} > 0 \\;\\Rightarrow\\; \\text{minimum}",
          "explanation": "A positive second derivative means the curve is concave up, so the stationary point is a local minimum.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the result",
          "workingLatex": "(0,\\,1) \\;\\text{is a minimum}",
          "explanation": "The curve $y=e^{x}-x$ has a single stationary point, a minimum at $(0,1)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The stationary point is $(0,\\,1)$, and it is a local minimum."
    }
  },
  {
    "id": "al.y2.pure.standard-derivatives.q036",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard derivatives",
    "subtopicId": "al.y2.pure.standard-derivatives",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "standard derivatives",
      "stationary point",
      "trigonometry"
    ],
    "questionText": "The curve $y = 2\\sin x + x$ is defined for $0 \\le x \\le 2\\pi$, with $x$ in radians. Find the exact coordinates of the stationary points of the curve on this interval.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the standard derivatives needed",
          "workingLatex": "\\frac{d}{dx}(\\sin x) = \\cos x, \\qquad \\frac{d}{dx}(x) = 1",
          "explanation": "The derivative of $\\sin x$ is $\\cos x$ (with $x$ in radians), and $x$ differentiates to $1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate the curve",
          "workingLatex": "\\frac{dy}{dx} = 2\\cos x + 1",
          "explanation": "Differentiating term by term: the constant multiple $2$ carries through onto $\\cos x$, and $x$ gives $1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set the derivative equal to zero",
          "workingLatex": "2\\cos x + 1 = 0",
          "explanation": "Stationary points occur where the gradient is zero, so we solve this equation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for cos x",
          "workingLatex": "\\cos x = -\\frac{1}{2}",
          "explanation": "Rearranging isolates $\\cos x$; we now find all angles in the interval with this cosine.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the solutions in [0, 2pi]",
          "workingLatex": "x = \\frac{2\\pi}{3}, \\quad x = \\frac{4\\pi}{3}",
          "explanation": "Cosine is $-\\tfrac{1}{2}$ in the second and third quadrants. The related angle is $\\tfrac{\\pi}{3}$, giving $\\pi-\\tfrac{\\pi}{3}=\\tfrac{2\\pi}{3}$ and $\\pi+\\tfrac{\\pi}{3}=\\tfrac{4\\pi}{3}$. Both lie in $[0,2\\pi]$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find y at x = 2pi/3",
          "workingLatex": "y = 2\\sin\\frac{2\\pi}{3} + \\frac{2\\pi}{3} = 2\\left(\\frac{\\sqrt{3}}{2}\\right) + \\frac{2\\pi}{3} = \\sqrt{3} + \\frac{2\\pi}{3}",
          "explanation": "Substitute back into the curve. Since $\\sin\\tfrac{2\\pi}{3}=\\tfrac{\\sqrt{3}}{2}$, the $2$ cancels the denominator to give the exact height.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find y at x = 4pi/3",
          "workingLatex": "y = 2\\sin\\frac{4\\pi}{3} + \\frac{4\\pi}{3} = 2\\left(-\\frac{\\sqrt{3}}{2}\\right) + \\frac{4\\pi}{3} = -\\sqrt{3} + \\frac{4\\pi}{3}",
          "explanation": "Here $\\sin\\tfrac{4\\pi}{3}=-\\tfrac{\\sqrt{3}}{2}$, so the first term is negative, giving the second exact height.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Collect the coordinates",
          "workingLatex": "\\left(\\frac{2\\pi}{3},\\; \\sqrt{3} + \\frac{2\\pi}{3}\\right), \\quad \\left(\\frac{4\\pi}{3},\\; -\\sqrt{3} + \\frac{4\\pi}{3}\\right)",
          "explanation": "Pairing each $x$ with its $y$ gives the two stationary points.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the result",
          "workingLatex": "\\text{Two stationary points on } [0,\\,2\\pi]",
          "explanation": "These are the exact coordinates of both stationary points on the given interval.",
          "diagram": null
        }
      ],
      "finalAnswer": "The stationary points are $\\left(\\dfrac{2\\pi}{3},\\; \\sqrt{3} + \\dfrac{2\\pi}{3}\\right)$ and $\\left(\\dfrac{4\\pi}{3},\\; -\\sqrt{3} + \\dfrac{4\\pi}{3}\\right)$."
    }
  },
  {
    "id": "al.y2.pure.standard-derivatives.q037",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard derivatives",
    "subtopicId": "al.y2.pure.standard-derivatives",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "standard derivatives",
      "stationary point",
      "ln"
    ],
    "questionText": "The curve $y = x - \\ln x$ is defined for $x > 0$. Find the coordinates of its stationary point and determine its nature.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the standard derivatives needed",
          "workingLatex": "\\frac{d}{dx}(x) = 1, \\qquad \\frac{d}{dx}(\\ln x) = \\frac{1}{x}",
          "explanation": "The linear term $x$ differentiates to $1$, and $\\ln x$ has the standard derivative $\\tfrac{1}{x}$ for $x>0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate the curve",
          "workingLatex": "\\frac{dy}{dx} = 1 - \\frac{1}{x}",
          "explanation": "Differentiating term by term with linearity gives the gradient function.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set the derivative equal to zero",
          "workingLatex": "1 - \\frac{1}{x} = 0",
          "explanation": "A stationary point occurs where the gradient is zero, so we solve this equation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for x",
          "workingLatex": "\\frac{1}{x} = 1 \\;\\Rightarrow\\; x = 1",
          "explanation": "Rearranging gives $\\tfrac{1}{x}=1$, so $x=1$. This satisfies the domain $x>0$, so it is valid.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the y-coordinate",
          "workingLatex": "y = 1 - \\ln 1 = 1",
          "explanation": "Substituting $x=1$; since $\\ln 1 = 0$, the stationary point is $(1,\\,1)$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Rewrite the derivative ready to differentiate again",
          "workingLatex": "\\frac{dy}{dx} = 1 - x^{-1}",
          "explanation": "Writing $\\tfrac{1}{x}$ as $x^{-1}$ lets us use the power rule for the second derivative.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the second derivative",
          "workingLatex": "\\frac{d^{2}y}{dx^{2}} = x^{-2} = \\frac{1}{x^{2}}",
          "explanation": "Differentiating $-x^{-1}$ gives $+x^{-2}$ by the power rule, and the constant $1$ gives $0$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Evaluate the second derivative at x = 1",
          "workingLatex": "\\left.\\frac{d^{2}y}{dx^{2}}\\right|_{x=1} = \\frac{1}{1^{2}} = 1 > 0",
          "explanation": "The second derivative is positive at the stationary point, indicating the concavity there.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Classify the stationary point",
          "workingLatex": "\\frac{d^{2}y}{dx^{2}} > 0 \\;\\Rightarrow\\; \\text{minimum}",
          "explanation": "A positive second derivative means the curve is concave up, so the point is a local minimum.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the result",
          "workingLatex": "(1,\\,1) \\;\\text{is a minimum}",
          "explanation": "The curve $y=x-\\ln x$ has a single stationary point, a minimum at $(1,1)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The stationary point is $(1,\\,1)$, and it is a local minimum."
    }
  },
  {
    "id": "al.y2.pure.standard-derivatives.q038",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard derivatives",
    "subtopicId": "al.y2.pure.standard-derivatives",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "standard derivatives",
      "stationary point",
      "exponential"
    ],
    "questionText": "The curve $y = e^{x} + e^{-x}$ has one stationary point. Find its coordinates and determine its nature.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the standard derivatives needed",
          "workingLatex": "\\frac{d}{dx}\\left(e^{x}\\right) = e^{x}, \\qquad \\frac{d}{dx}\\left(e^{-x}\\right) = -e^{-x}",
          "explanation": "The result $\\tfrac{d}{dx}(e^{kx})=k\\,e^{kx}$ gives $e^{x}$ for $k=1$ and $-e^{-x}$ for $k=-1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate the curve",
          "workingLatex": "\\frac{dy}{dx} = e^{x} - e^{-x}",
          "explanation": "Adding the two derivatives gives the gradient function of the curve.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set the derivative equal to zero",
          "workingLatex": "e^{x} - e^{-x} = 0",
          "explanation": "Stationary points occur where the gradient is zero.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rearrange",
          "workingLatex": "e^{x} = e^{-x}",
          "explanation": "Moving one term across sets the two exponentials equal.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Multiply through by e^x",
          "workingLatex": "e^{2x} = 1",
          "explanation": "Multiplying both sides by $e^{x}$ uses $e^{x}\\cdot e^{x}=e^{2x}$ and $e^{x}\\cdot e^{-x}=1$, clearing the negative exponent.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for x",
          "workingLatex": "2x = \\ln 1 = 0 \\;\\Rightarrow\\; x = 0",
          "explanation": "Taking natural logs; since $\\ln 1 = 0$, the only solution is $x=0$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the y-coordinate",
          "workingLatex": "y = e^{0} + e^{-0} = 1 + 1 = 2",
          "explanation": "Substituting $x=0$ into the curve gives the height; the stationary point is $(0,\\,2)$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find the second derivative",
          "workingLatex": "\\frac{d^{2}y}{dx^{2}} = e^{x} + e^{-x}",
          "explanation": "Differentiating $e^{x}-e^{-x}$ again: $e^{x}$ stays, and $-e^{-x}$ differentiates to $+e^{-x}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Evaluate the second derivative at x = 0",
          "workingLatex": "\\left.\\frac{d^{2}y}{dx^{2}}\\right|_{x=0} = 1 + 1 = 2 > 0",
          "explanation": "The second derivative is positive at the stationary point.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Classify and state the result",
          "workingLatex": "\\frac{d^{2}y}{dx^{2}} > 0 \\;\\Rightarrow\\; (0,\\,2) \\text{ is a minimum}",
          "explanation": "A positive second derivative means concave up, so $(0,2)$ is a local minimum.",
          "diagram": null
        }
      ],
      "finalAnswer": "The stationary point is $(0,\\,2)$, and it is a local minimum."
    }
  },
  {
    "id": "al.y2.pure.standard-derivatives.q039",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard derivatives",
    "subtopicId": "al.y2.pure.standard-derivatives",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "standard derivatives",
      "horizontal tangent",
      "ln"
    ],
    "questionText": "The curve $y = x^{2} - 4\\ln x$ is defined for $x > 0$. Find the exact coordinates of the point on the curve where the tangent is horizontal.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the condition",
          "workingLatex": "\\text{horizontal tangent} \\;\\Rightarrow\\; \\frac{dy}{dx} = 0",
          "explanation": "A horizontal tangent has gradient zero, so we differentiate and set the derivative equal to zero.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the standard derivatives needed",
          "workingLatex": "\\frac{d}{dx}\\left(x^{2}\\right) = 2x, \\qquad \\frac{d}{dx}(\\ln x) = \\frac{1}{x}",
          "explanation": "The power rule gives $2x$, and $\\ln x$ has the standard derivative $\\tfrac{1}{x}$ for $x>0$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate the curve",
          "workingLatex": "\\frac{dy}{dx} = 2x - \\frac{4}{x}",
          "explanation": "The constant multiple $4$ carries onto $\\tfrac{1}{x}$, giving $\\tfrac{4}{x}$, subtracted from $2x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set the derivative equal to zero",
          "workingLatex": "2x - \\frac{4}{x} = 0",
          "explanation": "This locates the point where the tangent is horizontal.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Multiply through by x",
          "workingLatex": "2x^{2} - 4 = 0",
          "explanation": "Multiplying every term by $x$ (valid since $x>0$) clears the fraction and gives a simple quadratic in $x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for x",
          "workingLatex": "x^{2} = 2 \\;\\Rightarrow\\; x = \\pm\\sqrt{2}",
          "explanation": "Dividing by $2$ and square-rooting gives two candidate values.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Reject the invalid solution",
          "workingLatex": "x = -\\sqrt{2}\\;\\text{rejected}, \\qquad x = \\sqrt{2}",
          "explanation": "The curve is only defined for $x>0$ (because of $\\ln x$), so $x=-\\sqrt{2}$ is not allowed. Keep $x=\\sqrt{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Simplify the logarithm at x = sqrt(2)",
          "workingLatex": "\\ln\\sqrt{2} = \\ln 2^{1/2} = \\tfrac{1}{2}\\ln 2",
          "explanation": "Using $\\sqrt{2}=2^{1/2}$ and the power law of logs brings the exponent to the front.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the y-coordinate",
          "workingLatex": "y = (\\sqrt{2})^{2} - 4\\left(\\tfrac{1}{2}\\ln 2\\right) = 2 - 2\\ln 2",
          "explanation": "Since $(\\sqrt{2})^{2}=2$ and $4\\cdot\\tfrac{1}{2}=2$, the exact height is $2-2\\ln 2$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the result",
          "workingLatex": "\\left(\\sqrt{2},\\; 2 - 2\\ln 2\\right)",
          "explanation": "This is the exact point on $y=x^{2}-4\\ln x$ where the tangent is horizontal.",
          "diagram": null
        }
      ],
      "finalAnswer": "The tangent is horizontal at $\\left(\\sqrt{2},\\; 2 - 2\\ln 2\\right)$."
    }
  },
  {
    "id": "al.y2.pure.standard-derivatives.q040",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard derivatives",
    "subtopicId": "al.y2.pure.standard-derivatives",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "standard derivatives",
      "tangent",
      "normal"
    ],
    "questionText": "The curve $y = e^{x} + 2x$ passes through the point where $x = 0$. Find equations of both the tangent and the normal to the curve at this point.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the standard derivatives needed",
          "workingLatex": "\\frac{d}{dx}\\left(e^{x}\\right) = e^{x}, \\qquad \\frac{d}{dx}(2x) = 2",
          "explanation": "The exponential $e^{x}$ is its own derivative, and $2x$ differentiates to the constant $2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate the curve",
          "workingLatex": "\\frac{dy}{dx} = e^{x} + 2",
          "explanation": "Adding the derivatives of the two terms gives the gradient function.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the gradient at x = 0",
          "workingLatex": "m = \\left.\\frac{dy}{dx}\\right|_{x=0} = e^{0} + 2 = 3",
          "explanation": "Substituting $x=0$ and using $e^{0}=1$ gives the tangent gradient $m=3$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the y-coordinate of the point",
          "workingLatex": "y = e^{0} + 2(0) = 1",
          "explanation": "The point lies on the curve; evaluating at $x=0$ gives the point of contact $(0,\\,1)$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the tangent using point-gradient form",
          "workingLatex": "y - 1 = 3(x - 0)",
          "explanation": "Substitute the point $(0,1)$ and gradient $3$ into $y-y_1=m(x-x_1)$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify the tangent",
          "workingLatex": "y = 3x + 1",
          "explanation": "Expanding and adding $1$ gives the equation of the tangent.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the gradient of the normal",
          "workingLatex": "m_n = -\\frac{1}{m} = -\\frac{1}{3}",
          "explanation": "The normal is perpendicular to the tangent, so its gradient is $-1$ divided by $m=3$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the normal using point-gradient form",
          "workingLatex": "y - 1 = -\\frac{1}{3}(x - 0)",
          "explanation": "The normal passes through the same point $(0,1)$ but with gradient $-\\tfrac{1}{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Simplify the normal",
          "workingLatex": "y = 1 - \\frac{1}{3}x",
          "explanation": "Expanding the bracket and keeping the $+1$ gives the normal in explicit form.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Give a tidy rearranged form of the normal",
          "workingLatex": "x + 3y - 3 = 0",
          "explanation": "Multiplying through by $3$ and collecting terms gives an equivalent equation with integer coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State both lines",
          "workingLatex": "\\text{tangent: } y = 3x + 1, \\quad \\text{normal: } y = 1 - \\tfrac{1}{3}x",
          "explanation": "Both the tangent and the normal pass through $(0,1)$ with perpendicular gradients $3$ and $-\\tfrac{1}{3}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Tangent: $y = 3x + 1$. Normal: $y = 1 - \\dfrac{1}{3}x$ (equivalently $x + 3y - 3 = 0$)."
    }
  },
  {
    "id": "al.y2.pure.standard-derivatives.q041",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard derivatives",
    "subtopicId": "al.y2.pure.standard-derivatives",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "tags": [
      "increasing decreasing",
      "exponential",
      "standard derivatives"
    ],
    "questionText": "The curve $C$ has equation $y = e^{x} - x$. Determine the set of values of $x$ for which $C$ is increasing, and the set for which it is decreasing, justifying your answer.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the function and the strategy",
          "workingLatex": "y = e^{x} - x",
          "explanation": "A curve is increasing where its gradient $\\frac{dy}{dx}$ is positive and decreasing where it is negative, so the whole question is decided by the sign of the derivative.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate term by term",
          "workingLatex": "\\frac{dy}{dx} = e^{x} - 1",
          "explanation": "Using the standard result $\\frac{d}{dx}(e^{x})=e^{x}$ and $\\frac{d}{dx}(x)=1$; linearity lets us differentiate each term separately.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Note the behaviour of the exponential",
          "workingLatex": "e^{x} > 0 \\text{ for all } x",
          "explanation": "The exponential is always positive, so the sign of $e^{x}-1$ is controlled entirely by whether $e^{x}$ is above or below $1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Condition for increasing",
          "workingLatex": "\\text{increasing} \\iff \\frac{dy}{dx} > 0 \\iff e^{x} - 1 > 0",
          "explanation": "Increasing means a positive gradient, so we require $e^{x}-1>0$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve the increasing inequality",
          "workingLatex": "e^{x} > 1 \\iff x > 0",
          "explanation": "Since $e^{x}$ is an increasing function and $e^{0}=1$, $e^{x}>1$ exactly when $x>0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Condition for decreasing",
          "workingLatex": "\\text{decreasing} \\iff e^{x} - 1 < 0 \\iff e^{x} < 1",
          "explanation": "Decreasing means a negative gradient, so we need $e^{x}<1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve the decreasing inequality",
          "workingLatex": "e^{x} < 1 \\iff x < 0",
          "explanation": "Again using that $e^{x}$ is increasing with $e^{0}=1$, $e^{x}<1$ exactly when $x<0$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Locate the turning point",
          "workingLatex": "\\frac{dy}{dx} = 0 \\iff e^{x} = 1 \\iff x = 0",
          "explanation": "At $x=0$ the gradient is zero; this is the single point separating the decreasing and increasing parts.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check a test value on each side",
          "workingLatex": "x=1:\\ e^{1}-1 \\approx 1.72 > 0, \\quad x=-1:\\ e^{-1}-1 \\approx -0.63 < 0",
          "explanation": "Substituting a point from each region confirms the gradient is positive to the right of $0$ and negative to the left, as expected.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the conclusion",
          "workingLatex": "\\text{increasing for } x>0, \\qquad \\text{decreasing for } x<0",
          "explanation": "So $C$ falls until $x=0$ and rises thereafter, with a minimum turning point at $x=0$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$C$ is increasing for $x>0$ and decreasing for $x<0$ (with a stationary point at $x=0$)."
    }
  },
  {
    "id": "al.y2.pure.standard-derivatives.q042",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard derivatives",
    "subtopicId": "al.y2.pure.standard-derivatives",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "stationary point",
      "second derivative",
      "exponential"
    ],
    "questionText": "The curve $y = e^{x} + e^{-x}$ has a single stationary point. Find its coordinates and use the second derivative to determine its nature.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the function",
          "workingLatex": "y = e^{x} + e^{-x}",
          "explanation": "We first differentiate to locate the stationary point, which is where the gradient is zero.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate",
          "workingLatex": "\\frac{dy}{dx} = e^{x} - e^{-x}",
          "explanation": "Using $\\frac{d}{dx}(e^{x})=e^{x}$ and $\\frac{d}{dx}(e^{-x})=-e^{-x}$ (the standard result $\\frac{d}{dx}(e^{kx})=ke^{kx}$ with $k=-1$).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set the gradient to zero",
          "workingLatex": "e^{x} - e^{-x} = 0",
          "explanation": "Stationary points occur exactly where the gradient vanishes.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rearrange",
          "workingLatex": "e^{x} = e^{-x}",
          "explanation": "Move the second term across; both sides are positive so we can safely compare the exponents.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve",
          "workingLatex": "e^{2x} = 1 \\iff 2x = 0 \\iff x = 0",
          "explanation": "Multiplying both sides by $e^{x}$ gives $e^{2x}=1$; since $e^{0}=1$ the only solution is $x=0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the y-coordinate",
          "workingLatex": "y = e^{0} + e^{-0} = 1 + 1 = 2",
          "explanation": "Substituting $x=0$ back into the curve gives the height of the stationary point, so it is $(0,2)$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Differentiate again",
          "workingLatex": "\\frac{d^{2}y}{dx^{2}} = e^{x} + e^{-x}",
          "explanation": "Differentiating $e^{x}-e^{-x}$ once more: $\\frac{d}{dx}(-e^{-x})=+e^{-x}$, giving $e^{x}+e^{-x}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Evaluate the second derivative at the stationary point",
          "workingLatex": "\\left.\\frac{d^{2}y}{dx^{2}}\\right|_{x=0} = e^{0}+e^{-0} = 2",
          "explanation": "We test the sign of the second derivative at $x=0$ to decide the nature of the point.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Interpret the sign",
          "workingLatex": "\\frac{d^{2}y}{dx^{2}} = 2 > 0",
          "explanation": "A positive second derivative means the curve is concave up there, so the stationary point is a minimum.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the conclusion",
          "workingLatex": "\\text{minimum at } (0,\\ 2)",
          "explanation": "The curve has a single minimum turning point at $(0,2)$; this matches the fact that $e^{x}+e^{-x}\\ge 2$ for all $x$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Minimum turning point at $(0,\\ 2)$, confirmed by $\\dfrac{d^{2}y}{dx^{2}}=2>0$."
    }
  },
  {
    "id": "al.y2.pure.standard-derivatives.q043",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard derivatives",
    "subtopicId": "al.y2.pure.standard-derivatives",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "find constant",
      "stationary point",
      "trigonometric"
    ],
    "questionText": "The curve $y = a\\sin x + \\cos x$, where $a$ is a constant and $x$ is in radians, has a stationary point at $x = \\dfrac{\\pi}{4}$. Find the value of $a$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the function",
          "workingLatex": "y = a\\sin x + \\cos x",
          "explanation": "A stationary point occurs where the gradient is zero, so we differentiate first. (Trig derivatives require $x$ in radians.)",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate",
          "workingLatex": "\\frac{dy}{dx} = a\\cos x - \\sin x",
          "explanation": "Using $\\frac{d}{dx}(\\sin x)=\\cos x$ and $\\frac{d}{dx}(\\cos x)=-\\sin x$; the constant $a$ simply multiplies through.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the stationary condition",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{x=\\pi/4} = 0",
          "explanation": "We are told the gradient is zero at $x=\\frac{\\pi}{4}$, so we substitute that value into the derivative and set it equal to zero.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the given x-value",
          "workingLatex": "a\\cos\\frac{\\pi}{4} - \\sin\\frac{\\pi}{4} = 0",
          "explanation": "Replacing $x$ by $\\frac{\\pi}{4}$ in the derivative.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Insert exact values",
          "workingLatex": "\\cos\\frac{\\pi}{4} = \\sin\\frac{\\pi}{4} = \\frac{\\sqrt{2}}{2}",
          "explanation": "Both $\\sin\\frac{\\pi}{4}$ and $\\cos\\frac{\\pi}{4}$ equal $\\frac{\\sqrt{2}}{2}$ (equivalently $\\frac{1}{\\sqrt{2}}$).",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Rewrite the equation",
          "workingLatex": "a\\cdot\\frac{\\sqrt{2}}{2} - \\frac{\\sqrt{2}}{2} = 0",
          "explanation": "Substituting those exact values into the stationary condition.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Factor out the common value",
          "workingLatex": "\\frac{\\sqrt{2}}{2}\\,(a - 1) = 0",
          "explanation": "Both terms share the factor $\\frac{\\sqrt{2}}{2}$, which is non-zero.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for a",
          "workingLatex": "a - 1 = 0 \\iff a = 1",
          "explanation": "Since $\\frac{\\sqrt{2}}{2}\\neq 0$, the bracket must be zero, giving $a=1$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check",
          "workingLatex": "\\frac{dy}{dx} = \\cos x - \\sin x, \\quad \\left.\\frac{dy}{dx}\\right|_{x=\\pi/4} = \\frac{\\sqrt{2}}{2}-\\frac{\\sqrt{2}}{2}=0",
          "explanation": "With $a=1$ the derivative is $\\cos x-\\sin x$, which is indeed zero at $x=\\frac{\\pi}{4}$, confirming the answer.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the result",
          "workingLatex": "a = 1",
          "explanation": "So the constant that places a stationary point at $x=\\frac{\\pi}{4}$ is $a=1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a = 1$."
    }
  },
  {
    "id": "al.y2.pure.standard-derivatives.q044",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard derivatives",
    "subtopicId": "al.y2.pure.standard-derivatives",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "proof",
    "tags": [
      "stationary point",
      "exponential",
      "proof"
    ],
    "questionText": "Show that the curve $y = e^{x} + x$ has no stationary points.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State what must be shown",
          "workingLatex": "\\text{stationary} \\iff \\frac{dy}{dx} = 0",
          "explanation": "A stationary point exists only where the gradient is zero, so it is enough to show the derivative is never zero.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate",
          "workingLatex": "\\frac{dy}{dx} = e^{x} + 1",
          "explanation": "Using $\\frac{d}{dx}(e^{x})=e^{x}$ and $\\frac{d}{dx}(x)=1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall the range of the exponential",
          "workingLatex": "e^{x} > 0 \\text{ for all real } x",
          "explanation": "The exponential function is strictly positive everywhere; it never reaches zero or a negative value.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Bound the derivative below",
          "workingLatex": "e^{x} + 1 > 0 + 1 = 1",
          "explanation": "Adding $1$ to a positive quantity gives something greater than $1$, so the gradient is always at least $1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Deduce the gradient is never zero",
          "workingLatex": "\\frac{dy}{dx} = e^{x} + 1 \\ge 1 > 0",
          "explanation": "Since the gradient is always strictly positive, it can never equal zero.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Confirm by trying to solve the stationary condition",
          "workingLatex": "e^{x} + 1 = 0 \\iff e^{x} = -1",
          "explanation": "Setting the gradient to zero would force $e^{x}=-1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Show this is impossible",
          "workingLatex": "e^{x} = -1 \\text{ has no solution since } e^{x} > 0",
          "explanation": "An exponential can never be negative, so no value of $x$ satisfies the stationary condition.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Conclude the derivative is never zero",
          "workingLatex": "\\therefore \\frac{dy}{dx} \\neq 0 \\text{ for all } x",
          "explanation": "As the derivative is positive for every $x$, the curve has no point where the gradient is zero.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the result",
          "workingLatex": "\\text{no stationary points} \\quad \\blacksquare",
          "explanation": "Therefore $y=e^{x}+x$ has no stationary points; in fact it is strictly increasing everywhere.",
          "diagram": null
        }
      ],
      "finalAnswer": "Since $\\dfrac{dy}{dx}=e^{x}+1\\ge 1>0$ for all $x$, the gradient is never zero, so the curve has no stationary points."
    }
  },
  {
    "id": "al.y2.pure.standard-derivatives.q045",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard derivatives",
    "subtopicId": "al.y2.pure.standard-derivatives",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "tags": [
      "increasing decreasing",
      "logarithm",
      "standard derivatives"
    ],
    "questionText": "A curve has equation $y = x - \\ln x$ for $x > 0$. Determine the values of $x$ for which the curve is increasing and the values for which it is decreasing.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the function and domain",
          "workingLatex": "y = x - \\ln x, \\quad x > 0",
          "explanation": "The term $\\ln x$ is only defined for $x>0$, so we work on that domain; increasing/decreasing is decided by the sign of the gradient.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate",
          "workingLatex": "\\frac{dy}{dx} = 1 - \\frac{1}{x}",
          "explanation": "Using $\\frac{d}{dx}(x)=1$ and the standard result $\\frac{d}{dx}(\\ln x)=\\frac{1}{x}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write as a single fraction",
          "workingLatex": "\\frac{dy}{dx} = \\frac{x - 1}{x}",
          "explanation": "Combining over a common denominator makes the sign of the gradient easy to read off.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Note the denominator is positive",
          "workingLatex": "x > 0 \\Rightarrow \\frac{1}{x} > 0",
          "explanation": "On the domain $x>0$ the denominator is positive, so the sign of the gradient is the sign of the numerator $x-1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Condition for increasing",
          "workingLatex": "\\frac{x-1}{x} > 0 \\iff x - 1 > 0",
          "explanation": "With a positive denominator, the fraction is positive exactly when $x-1>0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve the increasing case",
          "workingLatex": "x - 1 > 0 \\iff x > 1",
          "explanation": "So the curve is increasing for $x>1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Condition for decreasing",
          "workingLatex": "\\frac{x-1}{x} < 0 \\iff x - 1 < 0",
          "explanation": "Similarly the gradient is negative when the numerator is negative.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve the decreasing case",
          "workingLatex": "x - 1 < 0 \\text{ and } x > 0 \\iff 0 < x < 1",
          "explanation": "Combining $x<1$ with the domain $x>0$ gives the interval $0<x<1$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Identify the turning point",
          "workingLatex": "\\frac{dy}{dx} = 0 \\iff x = 1",
          "explanation": "At $x=1$ the gradient is zero, separating the decreasing and increasing regions (a minimum).",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the conclusion",
          "workingLatex": "\\text{decreasing on } 0<x<1, \\quad \\text{increasing on } x>1",
          "explanation": "So the curve falls on $0<x<1$ and rises for $x>1$, with a minimum turning point at $x=1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Decreasing for $0<x<1$ and increasing for $x>1$ (minimum at $x=1$)."
    }
  },
  {
    "id": "al.y2.pure.standard-derivatives.q046",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard derivatives",
    "subtopicId": "al.y2.pure.standard-derivatives",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "find constant",
      "exponential",
      "gradient"
    ],
    "questionText": "The curve $y = a e^{3x} - 2x$, where $a$ is a constant, has gradient $7$ at the point where $x = 0$. Find the value of $a$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the function",
          "workingLatex": "y = a e^{3x} - 2x",
          "explanation": "The gradient at a point is the value of the derivative there, so we differentiate first.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate",
          "workingLatex": "\\frac{dy}{dx} = 3a e^{3x} - 2",
          "explanation": "Using the standard result $\\frac{d}{dx}(e^{3x})=3e^{3x}$ (i.e. $\\frac{d}{dx}(e^{kx})=ke^{kx}$ with $k=3$) and $\\frac{d}{dx}(2x)=2$; the constant $a$ carries through.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate the gradient at x = 0",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{x=0} = 3a e^{0} - 2",
          "explanation": "Substitute $x=0$ into the derivative to obtain the gradient at that point.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify using the exponential value",
          "workingLatex": "3a e^{0} - 2 = 3a - 2",
          "explanation": "Since $e^{0}=1$, the exponential factor becomes $1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set equal to the given gradient",
          "workingLatex": "3a - 2 = 7",
          "explanation": "We are told this gradient equals $7$, which gives a linear equation for $a$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Add 2 to both sides",
          "workingLatex": "3a = 9",
          "explanation": "Isolating the term containing $a$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Divide by 3",
          "workingLatex": "a = 3",
          "explanation": "Solving the linear equation gives the constant.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check",
          "workingLatex": "\\frac{dy}{dx} = 9 e^{3x} - 2, \\quad \\left.\\frac{dy}{dx}\\right|_{x=0} = 9 - 2 = 7",
          "explanation": "With $a=3$ the derivative at $x=0$ is $9-2=7$, matching the condition, so the value is confirmed.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the result",
          "workingLatex": "a = 3",
          "explanation": "So the constant giving gradient $7$ at $x=0$ is $a=3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a = 3$."
    }
  },
  {
    "id": "al.y2.pure.standard-derivatives.q047",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard derivatives",
    "subtopicId": "al.y2.pure.standard-derivatives",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "stationary point",
      "second derivative",
      "logarithm"
    ],
    "questionText": "The curve $y = x^{2} - \\ln x$, for $x > 0$, has one stationary point. Find its exact coordinates and use the second derivative to classify it.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the function and domain",
          "workingLatex": "y = x^{2} - \\ln x, \\quad x > 0",
          "explanation": "The logarithm restricts us to $x>0$. Stationary points occur where the first derivative is zero.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate",
          "workingLatex": "\\frac{dy}{dx} = 2x - \\frac{1}{x}",
          "explanation": "Using the power rule on $x^{2}$ and the standard result $\\frac{d}{dx}(\\ln x)=\\frac{1}{x}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set the gradient to zero",
          "workingLatex": "2x - \\frac{1}{x} = 0",
          "explanation": "At a stationary point the gradient vanishes.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Clear the fraction",
          "workingLatex": "2x = \\frac{1}{x} \\iff 2x^{2} = 1",
          "explanation": "Multiplying through by $x$ (valid since $x>0$) removes the fraction.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for x",
          "workingLatex": "x^{2} = \\frac{1}{2} \\iff x = \\frac{1}{\\sqrt{2}}",
          "explanation": "Taking the positive square root only, because the domain is $x>0$; equivalently $x=\\frac{\\sqrt{2}}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the y-coordinate",
          "workingLatex": "y = \\left(\\frac{1}{\\sqrt{2}}\\right)^{2} - \\ln\\frac{1}{\\sqrt{2}} = \\frac{1}{2} - \\ln\\frac{1}{\\sqrt{2}}",
          "explanation": "Substituting $x=\\frac{1}{\\sqrt{2}}$ into the curve; note $\\left(\\frac{1}{\\sqrt{2}}\\right)^{2}=\\frac{1}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify the logarithm",
          "workingLatex": "\\ln\\frac{1}{\\sqrt{2}} = -\\frac{1}{2}\\ln 2 \\ \\Rightarrow\\ y = \\frac{1}{2} + \\frac{1}{2}\\ln 2",
          "explanation": "Since $\\frac{1}{\\sqrt{2}}=2^{-1/2}$, its logarithm is $-\\frac{1}{2}\\ln 2$; subtracting a negative adds it back.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Differentiate again",
          "workingLatex": "\\frac{d^{2}y}{dx^{2}} = 2 + \\frac{1}{x^{2}}",
          "explanation": "Writing the derivative as $2x - x^{-1}$ and differentiating gives $2 - (-1)x^{-2} = 2 + \\frac{1}{x^{2}}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Evaluate the second derivative",
          "workingLatex": "\\left.\\frac{d^{2}y}{dx^{2}}\\right|_{x=1/\\sqrt{2}} = 2 + \\frac{1}{1/2} = 2 + 2 = 4",
          "explanation": "At the stationary point $x^{2}=\\frac{1}{2}$, so $\\frac{1}{x^{2}}=2$, giving a value of $4$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Classify the point",
          "workingLatex": "\\frac{d^{2}y}{dx^{2}} = 4 > 0 \\Rightarrow \\text{minimum}",
          "explanation": "A positive second derivative means the curve is concave up there, so the stationary point is a minimum.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the conclusion",
          "workingLatex": "\\text{minimum at } \\left(\\frac{1}{\\sqrt{2}},\\ \\frac{1}{2} + \\frac{1}{2}\\ln 2\\right)",
          "explanation": "So the curve has a single minimum turning point at these exact coordinates.",
          "diagram": null
        }
      ],
      "finalAnswer": "Minimum at $\\left(\\dfrac{1}{\\sqrt{2}},\\ \\dfrac{1}{2}+\\dfrac{1}{2}\\ln 2\\right)$, since $\\dfrac{d^{2}y}{dx^{2}}=4>0$."
    }
  },
  {
    "id": "al.y2.pure.standard-derivatives.q048",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard derivatives",
    "subtopicId": "al.y2.pure.standard-derivatives",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "find constant",
      "stationary point",
      "exponential"
    ],
    "questionText": "The curve $y = e^{x} - a x$, where $a$ is a constant, has a stationary point at $x = \\ln 5$. Find the value of $a$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the function",
          "workingLatex": "y = e^{x} - a x",
          "explanation": "A stationary point occurs where the gradient is zero, so we differentiate and then use the given $x$-value.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate",
          "workingLatex": "\\frac{dy}{dx} = e^{x} - a",
          "explanation": "Using $\\frac{d}{dx}(e^{x})=e^{x}$ and $\\frac{d}{dx}(ax)=a$ (a constant multiple of $x$).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the stationary condition",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{x=\\ln 5} = 0",
          "explanation": "The gradient is zero at the stationary point $x=\\ln 5$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the given x-value",
          "workingLatex": "e^{\\ln 5} - a = 0",
          "explanation": "Replacing $x$ by $\\ln 5$ in the derivative.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the exponential",
          "workingLatex": "e^{\\ln 5} = 5",
          "explanation": "The exponential and natural logarithm are inverse functions, so $e^{\\ln 5}=5$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Form the equation",
          "workingLatex": "5 - a = 0",
          "explanation": "Substituting that value into the stationary condition.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for a",
          "workingLatex": "a = 5",
          "explanation": "Rearranging gives the constant directly.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check",
          "workingLatex": "\\frac{dy}{dx} = e^{x} - 5 = 0 \\iff e^{x} = 5 \\iff x = \\ln 5",
          "explanation": "With $a=5$ the gradient is zero exactly at $x=\\ln 5$, confirming the answer.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the result",
          "workingLatex": "a = 5",
          "explanation": "So the constant placing a stationary point at $x=\\ln 5$ is $a=5$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a = 5$."
    }
  },
  {
    "id": "al.y2.pure.standard-derivatives.q049",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard derivatives",
    "subtopicId": "al.y2.pure.standard-derivatives",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "increasing decreasing",
      "trigonometric",
      "interval"
    ],
    "questionText": "The curve $y = 2\\sin x + x$ is defined for $0 \\le x \\le 2\\pi$, with $x$ in radians. Determine the intervals on which the curve is increasing and the interval on which it is decreasing.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the function and interval",
          "workingLatex": "y = 2\\sin x + x, \\quad 0 \\le x \\le 2\\pi",
          "explanation": "Increasing/decreasing is governed by the sign of the derivative; trig derivatives use $x$ in radians.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate",
          "workingLatex": "\\frac{dy}{dx} = 2\\cos x + 1",
          "explanation": "Using $\\frac{d}{dx}(\\sin x)=\\cos x$ (so $\\frac{d}{dx}(2\\sin x)=2\\cos x$) and $\\frac{d}{dx}(x)=1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find where the gradient is zero",
          "workingLatex": "2\\cos x + 1 = 0 \\iff \\cos x = -\\frac{1}{2}",
          "explanation": "The gradient can only change sign where it is zero, so we solve this equation first.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve on the interval",
          "workingLatex": "\\cos x = -\\frac{1}{2} \\iff x = \\frac{2\\pi}{3}, \\ \\frac{4\\pi}{3}",
          "explanation": "On $[0,2\\pi]$ the cosine equals $-\\frac{1}{2}$ at these two values (in the second and third quadrants).",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Condition for increasing",
          "workingLatex": "\\text{increasing} \\iff 2\\cos x + 1 > 0 \\iff \\cos x > -\\frac{1}{2}",
          "explanation": "Increasing means a positive gradient, i.e. $\\cos x$ lying above $-\\frac{1}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Identify where cosine exceeds the threshold",
          "workingLatex": "\\cos x > -\\frac{1}{2} \\iff 0 \\le x < \\frac{2\\pi}{3} \\ \\text{ or } \\ \\frac{4\\pi}{3} < x \\le 2\\pi",
          "explanation": "Cosine starts at $1$, drops below $-\\frac{1}{2}$ between the two solutions, then rises back above it, so it exceeds $-\\frac{1}{2}$ outside $\\left(\\frac{2\\pi}{3},\\frac{4\\pi}{3}\\right)$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Condition for decreasing",
          "workingLatex": "\\text{decreasing} \\iff \\cos x < -\\frac{1}{2}",
          "explanation": "Decreasing means a negative gradient, i.e. $\\cos x$ below $-\\frac{1}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Identify the decreasing interval",
          "workingLatex": "\\cos x < -\\frac{1}{2} \\iff \\frac{2\\pi}{3} < x < \\frac{4\\pi}{3}",
          "explanation": "Between the two solutions the cosine dips below $-\\frac{1}{2}$, so the curve decreases there.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check a test value",
          "workingLatex": "x=\\pi:\\ 2\\cos\\pi + 1 = 2(-1)+1 = -1 < 0",
          "explanation": "At $x=\\pi$ (inside the middle interval) the gradient is negative, confirming the curve is decreasing there.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the conclusion",
          "workingLatex": "\\text{increasing on } \\left[0,\\frac{2\\pi}{3}\\right) \\cup \\left(\\frac{4\\pi}{3},2\\pi\\right], \\quad \\text{decreasing on } \\left(\\frac{2\\pi}{3},\\frac{4\\pi}{3}\\right)",
          "explanation": "So the curve rises, falls between the two turning points, then rises again.",
          "diagram": null
        }
      ],
      "finalAnswer": "Increasing on $\\left[0,\\dfrac{2\\pi}{3}\\right)$ and $\\left(\\dfrac{4\\pi}{3},2\\pi\\right]$; decreasing on $\\left(\\dfrac{2\\pi}{3},\\dfrac{4\\pi}{3}\\right)$."
    }
  },
  {
    "id": "al.y2.pure.standard-derivatives.q050",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard derivatives",
    "subtopicId": "al.y2.pure.standard-derivatives",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "stationary point",
      "second derivative",
      "trigonometric"
    ],
    "questionText": "The curve $y = \\sin x + \\cos x$ is defined for $0 \\le x \\le 2\\pi$, with $x$ in radians. Find the stationary points and use the second derivative to classify each one.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the function and interval",
          "workingLatex": "y = \\sin x + \\cos x, \\quad 0 \\le x \\le 2\\pi",
          "explanation": "Stationary points occur where the gradient is zero, so we differentiate first (with $x$ in radians).",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate",
          "workingLatex": "\\frac{dy}{dx} = \\cos x - \\sin x",
          "explanation": "Using $\\frac{d}{dx}(\\sin x)=\\cos x$ and $\\frac{d}{dx}(\\cos x)=-\\sin x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set the gradient to zero",
          "workingLatex": "\\cos x - \\sin x = 0 \\iff \\cos x = \\sin x",
          "explanation": "At a stationary point the gradient is zero, so sine and cosine must be equal.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve",
          "workingLatex": "\\tan x = 1 \\iff x = \\frac{\\pi}{4}, \\ \\frac{5\\pi}{4}",
          "explanation": "Dividing by $\\cos x$ gives $\\tan x=1$; on $[0,2\\pi]$ this holds at $\\frac{\\pi}{4}$ and $\\frac{5\\pi}{4}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the second derivative",
          "workingLatex": "\\frac{d^{2}y}{dx^{2}} = -\\sin x - \\cos x",
          "explanation": "Differentiating $\\cos x-\\sin x$ again: $\\frac{d}{dx}(\\cos x)=-\\sin x$ and $\\frac{d}{dx}(-\\sin x)=-\\cos x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Classify the first stationary point",
          "workingLatex": "\\left.\\frac{d^{2}y}{dx^{2}}\\right|_{x=\\pi/4} = -\\frac{\\sqrt{2}}{2} - \\frac{\\sqrt{2}}{2} = -\\sqrt{2} < 0",
          "explanation": "At $x=\\frac{\\pi}{4}$ both $\\sin$ and $\\cos$ equal $\\frac{\\sqrt{2}}{2}$; the negative second derivative means a maximum.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find its y-coordinate",
          "workingLatex": "y = \\sin\\frac{\\pi}{4} + \\cos\\frac{\\pi}{4} = \\frac{\\sqrt{2}}{2} + \\frac{\\sqrt{2}}{2} = \\sqrt{2}",
          "explanation": "Substituting $x=\\frac{\\pi}{4}$ into the curve gives the height of the maximum.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Classify the second stationary point",
          "workingLatex": "\\left.\\frac{d^{2}y}{dx^{2}}\\right|_{x=5\\pi/4} = -\\left(-\\frac{\\sqrt{2}}{2}\\right) - \\left(-\\frac{\\sqrt{2}}{2}\\right) = \\sqrt{2} > 0",
          "explanation": "At $x=\\frac{5\\pi}{4}$ both $\\sin$ and $\\cos$ equal $-\\frac{\\sqrt{2}}{2}$; the positive second derivative means a minimum.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find its y-coordinate",
          "workingLatex": "y = \\sin\\frac{5\\pi}{4} + \\cos\\frac{5\\pi}{4} = -\\frac{\\sqrt{2}}{2} - \\frac{\\sqrt{2}}{2} = -\\sqrt{2}",
          "explanation": "Substituting $x=\\frac{5\\pi}{4}$ into the curve gives the height of the minimum.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the conclusion",
          "workingLatex": "\\text{max } \\left(\\frac{\\pi}{4},\\ \\sqrt{2}\\right), \\quad \\text{min } \\left(\\frac{5\\pi}{4},\\ -\\sqrt{2}\\right)",
          "explanation": "So the curve has a maximum at $\\left(\\frac{\\pi}{4},\\sqrt{2}\\right)$ and a minimum at $\\left(\\frac{5\\pi}{4},-\\sqrt{2}\\right)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Maximum at $\\left(\\dfrac{\\pi}{4},\\ \\sqrt{2}\\right)$; minimum at $\\left(\\dfrac{5\\pi}{4},\\ -\\sqrt{2}\\right)$."
    }
  },
  {
    "id": "al.y2.pure.standard-derivatives.q051",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard derivatives",
    "subtopicId": "al.y2.pure.standard-derivatives",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "exact",
    "tags": [
      "standard derivatives",
      "tangent",
      "triangle area",
      "exponential"
    ],
    "questionText": "The tangent to the curve $y = e^{2x}$ at the point where $x = 1$ crosses the $x$-axis at $A$ and the $y$-axis at $B$. Find the exact coordinates of $A$ and $B$, and hence the exact area of triangle $OAB$, where $O$ is the origin.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate using the standard result for e^{kx}",
          "workingLatex": "\\frac{dy}{dx} = 2e^{2x}",
          "explanation": "The standard result $\\dfrac{d}{dx}(e^{kx}) = k\\,e^{kx}$ with $k=2$ gives the gradient of the curve at any point.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the gradient of the tangent at x = 1",
          "workingLatex": "m = \\left.\\frac{dy}{dx}\\right|_{x=1} = 2e^{2}",
          "explanation": "Substituting $x=1$ into the derivative gives the exact gradient of the tangent at that point.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the point of contact",
          "workingLatex": "y = e^{2(1)} = e^{2} \\quad\\Rightarrow\\quad (1,\\, e^{2})",
          "explanation": "The tangent touches the curve, so we evaluate $y=e^{2x}$ at $x=1$ to get the point it passes through.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the tangent in point-gradient form",
          "workingLatex": "y - e^{2} = 2e^{2}(x - 1)",
          "explanation": "Substituting the point $(1,e^{2})$ and gradient $2e^{2}$ into $y-y_1=m(x-x_1)$ gives the tangent line.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Expand and simplify",
          "workingLatex": "y = 2e^{2}x - 2e^{2} + e^{2} = 2e^{2}x - e^{2}",
          "explanation": "Multiplying out the bracket and collecting the constant terms $-2e^{2}+e^{2}=-e^{2}$ tidies the equation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Factorise the tangent equation",
          "workingLatex": "y = e^{2}(2x - 1)",
          "explanation": "Taking out the common factor $e^{2}$ makes the axis intercepts very quick to read off.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find A, the x-axis intercept",
          "workingLatex": "y = 0:\\quad e^{2}(2x - 1) = 0 \\Rightarrow x = \\tfrac{1}{2} \\quad\\Rightarrow\\quad A\\left(\\tfrac{1}{2},\\, 0\\right)",
          "explanation": "On the $x$-axis $y=0$. Since $e^{2}\\ne 0$, the bracket must be zero, giving $x=\\tfrac{1}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find B, the y-axis intercept",
          "workingLatex": "x = 0:\\quad y = e^{2}(2(0) - 1) = -e^{2} \\quad\\Rightarrow\\quad B(0,\\, -e^{2})",
          "explanation": "On the $y$-axis $x=0$; substituting gives $y=-e^{2}$, so the line crosses below the origin.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Identify the lengths of the two legs",
          "workingLatex": "\\text{base } OA = \\tfrac{1}{2}, \\quad \\text{height } OB = |-e^{2}| = e^{2}",
          "explanation": "The triangle $OAB$ is right-angled at the origin, so its legs are the distances from $O$ along each axis.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Compute the area of the triangle",
          "workingLatex": "\\text{Area} = \\tfrac{1}{2}\\times \\tfrac{1}{2}\\times e^{2} = \\frac{e^{2}}{4}",
          "explanation": "For a right-angled triangle the area is $\\tfrac{1}{2}\\times\\text{base}\\times\\text{height}$, using the two axis lengths.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Verify the tangent passes through the point of contact",
          "workingLatex": "2e^{2}(1) - e^{2} = e^{2} \\;\\checkmark",
          "explanation": "Substituting $x=1$ back into the tangent gives $y=e^{2}$, matching the point $(1,e^{2})$ as it should.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Numerical check of the gradient",
          "workingLatex": "m = 2e^{2} \\approx 14.78",
          "explanation": "A positive, steep gradient is consistent with the fast growth of $e^{2x}$ near $x=1$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Numerical check of the area",
          "workingLatex": "\\text{Area} = \\frac{e^{2}}{4} \\approx 1.847",
          "explanation": "Evaluating the exact answer as a decimal gives a sensible, small positive area.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the final results",
          "workingLatex": "A\\left(\\tfrac{1}{2},0\\right),\\ B(0,-e^{2}),\\ \\text{Area} = \\dfrac{e^{2}}{4}",
          "explanation": "Collecting the intercepts and the area gives the complete answer in exact form.",
          "diagram": null
        }
      ],
      "finalAnswer": "$A\\left(\\tfrac{1}{2},\\,0\\right)$, $B\\left(0,\\,-e^{2}\\right)$, and the area of triangle $OAB$ is $\\dfrac{e^{2}}{4} \\approx 1.847$ square units."
    }
  },
  {
    "id": "al.y2.pure.standard-derivatives.q052",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard derivatives",
    "subtopicId": "al.y2.pure.standard-derivatives",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "exact",
    "tags": [
      "standard derivatives",
      "normal",
      "triangle area",
      "ln"
    ],
    "questionText": "The normal to the curve $y = \\ln x$ at the point $(e, 1)$ meets the $x$-axis at $P$ and the $y$-axis at $Q$. Find the exact coordinates of $P$ and $Q$, and show that the area of triangle $OPQ$ is $\\dfrac{(e^{2}+1)^{2}}{2e}$, where $O$ is the origin.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate using the standard result for ln x",
          "workingLatex": "\\frac{dy}{dx} = \\frac{1}{x}",
          "explanation": "The derivative of $\\ln x$ is the standard result $\\tfrac{1}{x}$, giving the gradient of the curve for $x>0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the gradient of the curve (the tangent gradient) at x = e",
          "workingLatex": "m_{t} = \\left.\\frac{dy}{dx}\\right|_{x=e} = \\frac{1}{e}",
          "explanation": "Substituting $x=e$ gives the tangent gradient at the point $(e,1)$; the normal is perpendicular to this.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Confirm the point lies on the curve",
          "workingLatex": "y = \\ln e = 1 \\quad\\Rightarrow\\quad (e,\\, 1)",
          "explanation": "Since $\\ln e = 1$, the given point $(e,1)$ does indeed lie on the curve.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the gradient of the normal",
          "workingLatex": "m_{n} = -\\frac{1}{m_{t}} = -e",
          "explanation": "The normal is perpendicular to the tangent, so its gradient is the negative reciprocal of $\\tfrac{1}{e}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the normal in point-gradient form",
          "workingLatex": "y - 1 = -e(x - e)",
          "explanation": "Substituting the point $(e,1)$ and gradient $-e$ into $y-y_1=m(x-x_1)$ gives the normal line.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Expand the normal equation",
          "workingLatex": "y = -ex + e^{2} + 1",
          "explanation": "Multiplying out $-e(x-e)=-ex+e^{2}$ and adding $1$ puts the normal in a convenient form.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find P, the x-axis intercept",
          "workingLatex": "y = 0:\\quad ex = e^{2}+1 \\Rightarrow x = \\frac{e^{2}+1}{e} = e + \\frac{1}{e}",
          "explanation": "Setting $y=0$ and solving for $x$ gives where the normal crosses the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find Q, the y-axis intercept",
          "workingLatex": "x = 0:\\quad y = e^{2}+1 \\quad\\Rightarrow\\quad Q(0,\\, e^{2}+1)",
          "explanation": "Setting $x=0$ gives the $y$-intercept directly from the expanded equation.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Identify the lengths of the two legs",
          "workingLatex": "OP = \\frac{e^{2}+1}{e}, \\quad OQ = e^{2}+1",
          "explanation": "Triangle $OPQ$ is right-angled at the origin, so its legs are the distances along each axis; both intercepts are positive.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Compute the area of the triangle",
          "workingLatex": "\\text{Area} = \\frac{1}{2}\\cdot\\frac{e^{2}+1}{e}\\cdot(e^{2}+1) = \\frac{(e^{2}+1)^{2}}{2e}",
          "explanation": "Using $\\tfrac{1}{2}\\times\\text{base}\\times\\text{height}$ and combining the two factors of $(e^{2}+1)$ gives the required exact area.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Verify the normal passes through (e, 1)",
          "workingLatex": "-e(e) + e^{2} + 1 = -e^{2} + e^{2} + 1 = 1 \\;\\checkmark",
          "explanation": "Substituting $x=e$ into the normal returns $y=1$, confirming it passes through the given point.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Numerical check of the intercepts",
          "workingLatex": "e + \\tfrac{1}{e} \\approx 3.086, \\quad e^{2}+1 \\approx 8.389",
          "explanation": "Both intercepts are positive, so the triangle sits in the first quadrant as expected for a steep negative normal.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Numerical check of the area",
          "workingLatex": "\\text{Area} \\approx \\frac{(8.389)^{2}}{2(2.718)} \\approx 12.94",
          "explanation": "Evaluating the exact expression as a decimal gives a reasonable positive area.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the final results",
          "workingLatex": "P\\left(e+\\tfrac{1}{e},\\,0\\right),\\ Q(0,\\,e^{2}+1),\\ \\text{Area} = \\dfrac{(e^{2}+1)^{2}}{2e}",
          "explanation": "Collecting the intercepts and the area completes the exact answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P\\left(e+\\tfrac{1}{e},\\,0\\right)$ and $Q\\left(0,\\,e^{2}+1\\right)$; the area of triangle $OPQ$ is $\\dfrac{(e^{2}+1)^{2}}{2e} \\approx 12.94$ square units."
    }
  },
  {
    "id": "al.y2.pure.standard-derivatives.q053",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard derivatives",
    "subtopicId": "al.y2.pure.standard-derivatives",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "exact",
    "tags": [
      "standard derivatives",
      "tangent",
      "intersection",
      "exponential"
    ],
    "questionText": "The tangent to the curve $y = e^{x}$ at the point where $x = 0$ is $T_1$, and the tangent at the point where $x = 1$ is $T_2$. Find the equations of $T_1$ and $T_2$, and hence the exact coordinates of the point where the two tangents intersect.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate the curve",
          "workingLatex": "\\frac{dy}{dx} = e^{x}",
          "explanation": "The standard result $\\dfrac{d}{dx}(e^{x}) = e^{x}$ means the gradient at any point equals the $y$-value there.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the gradient and point of contact at x = 0",
          "workingLatex": "m_{1} = e^{0} = 1, \\quad y = e^{0} = 1 \\Rightarrow (0,\\,1)",
          "explanation": "At $x=0$ both the gradient and the $y$-coordinate equal $1$, so $T_1$ has gradient $1$ through $(0,1)$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the equation of T_1",
          "workingLatex": "T_{1}:\\ y - 1 = 1(x - 0) \\Rightarrow y = x + 1",
          "explanation": "Using point-gradient form with $(0,1)$ and gradient $1$ gives the first tangent.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the gradient and point of contact at x = 1",
          "workingLatex": "m_{2} = e^{1} = e, \\quad y = e^{1} = e \\Rightarrow (1,\\, e)",
          "explanation": "At $x=1$ the gradient and $y$-coordinate both equal $e$, so $T_2$ has gradient $e$ through $(1,e)$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the equation of T_2",
          "workingLatex": "T_{2}:\\ y - e = e(x - 1) \\Rightarrow y = ex",
          "explanation": "Expanding $e(x-1)+e = ex - e + e = ex$ gives a very clean tangent through the origin.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Set the two tangents equal to find the intersection",
          "workingLatex": "x + 1 = ex",
          "explanation": "At the intersection both lines share the same $x$ and $y$, so we set their right-hand sides equal.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for x",
          "workingLatex": "1 = ex - x = x(e - 1) \\Rightarrow x = \\frac{1}{e-1}",
          "explanation": "Collecting the $x$ terms and factoring gives the exact $x$-coordinate of the intersection.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find the y-coordinate",
          "workingLatex": "y = x + 1 = \\frac{1}{e-1} + 1 = \\frac{1 + (e-1)}{e-1} = \\frac{e}{e-1}",
          "explanation": "Substituting back into $T_1$ and writing over a common denominator gives the exact $y$-coordinate.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the intersection point",
          "workingLatex": "\\left(\\frac{1}{e-1},\\ \\frac{e}{e-1}\\right)",
          "explanation": "This is the single point at which the two tangents cross.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check the point also lies on T_2",
          "workingLatex": "y = ex = e\\cdot\\frac{1}{e-1} = \\frac{e}{e-1} \\;\\checkmark",
          "explanation": "Substituting the $x$-coordinate into $T_2$ gives the same $y$, confirming the point lies on both lines.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check T_1 passes through its point of contact",
          "workingLatex": "T_{1}\\text{ at }(0,1):\\ 0 + 1 = 1 \\;\\checkmark",
          "explanation": "Verifying the point of tangency lies on $T_1$ guards against an arithmetic slip.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Check T_2 passes through its point of contact",
          "workingLatex": "T_{2}\\text{ at }(1,e):\\ e(1) = e \\;\\checkmark",
          "explanation": "Likewise the point $(1,e)$ satisfies $T_2$, confirming that tangent too.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Numerical value of the intersection",
          "workingLatex": "x \\approx \\frac{1}{1.718} \\approx 0.582, \\quad y \\approx 1.582",
          "explanation": "Since $e-1\\approx 1.718$, the intersection lies between the two points of contact, which is geometrically sensible.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Confirm both tangents agree numerically there",
          "workingLatex": "T_{1}:\\ 0.582 + 1 = 1.582; \\quad T_{2}:\\ e(0.582) \\approx 1.582 \\;\\checkmark",
          "explanation": "Both tangents give the same $y$ at $x\\approx 0.582$, confirming the intersection.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "State the final answer",
          "workingLatex": "T_{1}:\\ y = x+1, \\quad T_{2}:\\ y = ex, \\quad \\left(\\dfrac{1}{e-1},\\ \\dfrac{e}{e-1}\\right)",
          "explanation": "Collecting the tangent equations and the intersection completes the solution in exact form.",
          "diagram": null
        }
      ],
      "finalAnswer": "$T_1: y = x+1$ and $T_2: y = ex$; they intersect at $\\left(\\dfrac{1}{e-1},\\ \\dfrac{e}{e-1}\\right) \\approx (0.582,\\ 1.582)$."
    }
  },
  {
    "id": "al.y2.pure.standard-derivatives.q054",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard derivatives",
    "subtopicId": "al.y2.pure.standard-derivatives",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "exact",
    "tags": [
      "standard derivatives",
      "stationary points",
      "second derivative",
      "trigonometry"
    ],
    "questionText": "The curve $y = 2\\sin x + x$ is defined for $0 \\le x \\le 2\\pi$, where $x$ is in radians. Find the exact coordinates of the stationary points and use the second derivative to classify each as a maximum or a minimum.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate the curve",
          "workingLatex": "\\frac{dy}{dx} = 2\\cos x + 1",
          "explanation": "Using the standard results $\\dfrac{d}{dx}(\\sin x)=\\cos x$ (with $x$ in radians) and $\\dfrac{d}{dx}(x)=1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set the derivative to zero",
          "workingLatex": "2\\cos x + 1 = 0 \\Rightarrow \\cos x = -\\tfrac{1}{2}",
          "explanation": "Stationary points occur where the gradient is zero, giving an equation for $\\cos x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for x in the interval",
          "workingLatex": "x \\in [0, 2\\pi]:\\quad x = \\frac{2\\pi}{3}, \\ \\frac{4\\pi}{3}",
          "explanation": "The reference angle is $\\tfrac{\\pi}{3}$; cosine is negative in the second and third quadrants, giving these two solutions in the interval.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the y-coordinate at x = 2pi/3",
          "workingLatex": "y = 2\\sin\\tfrac{2\\pi}{3} + \\tfrac{2\\pi}{3} = 2\\cdot\\tfrac{\\sqrt{3}}{2} + \\tfrac{2\\pi}{3} = \\sqrt{3} + \\tfrac{2\\pi}{3}",
          "explanation": "Substituting into the original curve with $\\sin\\tfrac{2\\pi}{3}=\\tfrac{\\sqrt{3}}{2}$ gives the exact height.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the y-coordinate at x = 4pi/3",
          "workingLatex": "y = 2\\sin\\tfrac{4\\pi}{3} + \\tfrac{4\\pi}{3} = 2\\left(-\\tfrac{\\sqrt{3}}{2}\\right) + \\tfrac{4\\pi}{3} = \\tfrac{4\\pi}{3} - \\sqrt{3}",
          "explanation": "Here $\\sin\\tfrac{4\\pi}{3}=-\\tfrac{\\sqrt{3}}{2}$, so the exact height is $\\tfrac{4\\pi}{3}-\\sqrt{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Differentiate again for the second derivative",
          "workingLatex": "\\frac{d^{2}y}{dx^{2}} = -2\\sin x",
          "explanation": "Differentiating $2\\cos x + 1$ uses $\\dfrac{d}{dx}(\\cos x)=-\\sin x$; the constant differentiates to zero.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Classify the point at x = 2pi/3",
          "workingLatex": "x=\\tfrac{2\\pi}{3}:\\ \\frac{d^{2}y}{dx^{2}} = -2\\cdot\\tfrac{\\sqrt{3}}{2} = -\\sqrt{3} < 0 \\Rightarrow \\text{maximum}",
          "explanation": "A negative second derivative means the curve bends downward, so this is a local maximum.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Classify the point at x = 4pi/3",
          "workingLatex": "x=\\tfrac{4\\pi}{3}:\\ \\frac{d^{2}y}{dx^{2}} = -2\\left(-\\tfrac{\\sqrt{3}}{2}\\right) = \\sqrt{3} > 0 \\Rightarrow \\text{minimum}",
          "explanation": "A positive second derivative means the curve bends upward, so this is a local minimum.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the two stationary points",
          "workingLatex": "\\text{max } \\left(\\tfrac{2\\pi}{3},\\ \\sqrt{3}+\\tfrac{2\\pi}{3}\\right), \\quad \\text{min } \\left(\\tfrac{4\\pi}{3},\\ \\tfrac{4\\pi}{3}-\\sqrt{3}\\right)",
          "explanation": "Collecting the coordinates with their classifications gives the exact stationary points.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Numerical value of the maximum",
          "workingLatex": "\\left(\\tfrac{2\\pi}{3},\\ \\sqrt{3}+\\tfrac{2\\pi}{3}\\right) \\approx (2.094,\\ 3.826)",
          "explanation": "Evaluating as decimals gives a sensible high point on the curve.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Numerical value of the minimum",
          "workingLatex": "\\left(\\tfrac{4\\pi}{3},\\ \\tfrac{4\\pi}{3}-\\sqrt{3}\\right) \\approx (4.189,\\ 2.457)",
          "explanation": "The minimum sits lower and to the right of the maximum, as expected from the shape.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Verify the gradient is zero at x = 2pi/3",
          "workingLatex": "2\\cos\\tfrac{2\\pi}{3} + 1 = 2\\left(-\\tfrac{1}{2}\\right) + 1 = 0 \\;\\checkmark",
          "explanation": "Substituting back confirms the derivative vanishes at the maximum.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Verify the gradient is zero at x = 4pi/3",
          "workingLatex": "2\\cos\\tfrac{4\\pi}{3} + 1 = 2\\left(-\\tfrac{1}{2}\\right) + 1 = 0 \\;\\checkmark",
          "explanation": "Likewise the derivative vanishes at the minimum, confirming both stationary points.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the final answer",
          "workingLatex": "\\text{Max at } \\left(\\tfrac{2\\pi}{3},\\ \\sqrt{3}+\\tfrac{2\\pi}{3}\\right); \\quad \\text{Min at } \\left(\\tfrac{4\\pi}{3},\\ \\tfrac{4\\pi}{3}-\\sqrt{3}\\right)",
          "explanation": "This gives the exact coordinates and correct classification of each stationary point.",
          "diagram": null
        }
      ],
      "finalAnswer": "Maximum at $\\left(\\tfrac{2\\pi}{3},\\ \\sqrt{3}+\\tfrac{2\\pi}{3}\\right) \\approx (2.094,\\,3.826)$ and minimum at $\\left(\\tfrac{4\\pi}{3},\\ \\tfrac{4\\pi}{3}-\\sqrt{3}\\right) \\approx (4.189,\\,2.457)$."
    }
  },
  {
    "id": "al.y2.pure.standard-derivatives.q055",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard derivatives",
    "subtopicId": "al.y2.pure.standard-derivatives",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "standard derivatives",
      "stationary points",
      "second derivative",
      "exponential"
    ],
    "questionText": "Find the exact coordinates of the stationary point of the curve $y = e^{x} - 3x$, and determine, with justification, whether it is a maximum or a minimum.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate the curve",
          "workingLatex": "\\frac{dy}{dx} = e^{x} - 3",
          "explanation": "Using $\\dfrac{d}{dx}(e^{x})=e^{x}$ and $\\dfrac{d}{dx}(3x)=3$; linearity lets us differentiate each term separately.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set the derivative to zero",
          "workingLatex": "e^{x} - 3 = 0 \\Rightarrow e^{x} = 3",
          "explanation": "Stationary points occur where the gradient is zero, giving an exponential equation for $x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve the exponential equation",
          "workingLatex": "x = \\ln 3",
          "explanation": "Taking natural logarithms of both sides gives the exact $x$-coordinate; $e^{x}=3$ has exactly one solution.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the y-coordinate",
          "workingLatex": "y = e^{\\ln 3} - 3\\ln 3 = 3 - 3\\ln 3",
          "explanation": "Since $e^{\\ln 3}=3$, substituting gives the exact height of the stationary point.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the stationary point",
          "workingLatex": "(\\ln 3,\\ 3 - 3\\ln 3)",
          "explanation": "These are the exact coordinates of the single stationary point.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Differentiate again for the second derivative",
          "workingLatex": "\\frac{d^{2}y}{dx^{2}} = e^{x}",
          "explanation": "The derivative of $e^{x}-3$ is again $e^{x}$, since the constant $-3$ differentiates to zero.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the second derivative",
          "workingLatex": "x=\\ln 3:\\ \\frac{d^{2}y}{dx^{2}} = e^{\\ln 3} = 3 > 0 \\Rightarrow \\text{minimum}",
          "explanation": "A positive second derivative means the curve is concave up here, so the point is a minimum.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Confirm with a sign argument for x < ln 3",
          "workingLatex": "x < \\ln 3:\\ e^{x} < 3 \\Rightarrow \\frac{dy}{dx} < 0 \\ (\\text{decreasing})",
          "explanation": "To the left of the stationary point the exponential is below $3$, so the curve is falling.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Confirm with a sign argument for x > ln 3",
          "workingLatex": "x > \\ln 3:\\ e^{x} > 3 \\Rightarrow \\frac{dy}{dx} > 0 \\ (\\text{increasing})",
          "explanation": "To the right the exponential exceeds $3$, so the curve rises; falling then rising confirms a minimum.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Numerical value of x",
          "workingLatex": "\\ln 3 \\approx 1.099",
          "explanation": "The stationary point occurs a little past $x=1$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Numerical value of y",
          "workingLatex": "3 - 3\\ln 3 \\approx 3 - 3.296 = -0.296",
          "explanation": "The minimum value is slightly below the $x$-axis, a sensible small negative number.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Verify the gradient is zero",
          "workingLatex": "e^{1.099} - 3 \\approx 3.000 - 3 = 0 \\;\\checkmark",
          "explanation": "Substituting the numerical $x$ back into the derivative gives zero, confirming the stationary point.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Note it is the global minimum",
          "workingLatex": "\\text{only stationary point} \\Rightarrow \\text{global minimum value} = 3 - 3\\ln 3",
          "explanation": "Because the curve falls then rises with a single turning point, this minimum is the lowest value overall.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the final answer",
          "workingLatex": "\\text{Minimum at } (\\ln 3,\\ 3 - 3\\ln 3)",
          "explanation": "This gives the exact coordinates and the confirmed classification.",
          "diagram": null
        }
      ],
      "finalAnswer": "There is a minimum at $(\\ln 3,\\ 3 - 3\\ln 3) \\approx (1.099,\\,-0.296)$, confirmed by $\\dfrac{d^{2}y}{dx^{2}}=3>0$."
    }
  },
  {
    "id": "al.y2.pure.standard-derivatives.q056",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard derivatives",
    "subtopicId": "al.y2.pure.standard-derivatives",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "exact",
    "tags": [
      "standard derivatives",
      "stationary points",
      "second derivative",
      "trigonometry"
    ],
    "questionText": "The curve $y = x + 2\\cos x$ is defined for $0 \\le x \\le 2\\pi$, where $x$ is in radians. Find the exact coordinates of the stationary points and use the second derivative to classify each as a maximum or a minimum.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate the curve",
          "workingLatex": "\\frac{dy}{dx} = 1 - 2\\sin x",
          "explanation": "Using $\\dfrac{d}{dx}(x)=1$ and $\\dfrac{d}{dx}(\\cos x)=-\\sin x$ (with $x$ in radians), so the $2\\cos x$ term gives $-2\\sin x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set the derivative to zero",
          "workingLatex": "1 - 2\\sin x = 0 \\Rightarrow \\sin x = \\tfrac{1}{2}",
          "explanation": "Stationary points occur where the gradient is zero, giving an equation for $\\sin x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for x in the interval",
          "workingLatex": "x \\in [0, 2\\pi]:\\quad x = \\frac{\\pi}{6}, \\ \\frac{5\\pi}{6}",
          "explanation": "The reference angle is $\\tfrac{\\pi}{6}$; sine is positive in the first and second quadrants, giving these two solutions.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the y-coordinate at x = pi/6",
          "workingLatex": "y = \\tfrac{\\pi}{6} + 2\\cos\\tfrac{\\pi}{6} = \\tfrac{\\pi}{6} + 2\\cdot\\tfrac{\\sqrt{3}}{2} = \\tfrac{\\pi}{6} + \\sqrt{3}",
          "explanation": "Substituting into the curve with $\\cos\\tfrac{\\pi}{6}=\\tfrac{\\sqrt{3}}{2}$ gives the exact height.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the y-coordinate at x = 5pi/6",
          "workingLatex": "y = \\tfrac{5\\pi}{6} + 2\\cos\\tfrac{5\\pi}{6} = \\tfrac{5\\pi}{6} + 2\\left(-\\tfrac{\\sqrt{3}}{2}\\right) = \\tfrac{5\\pi}{6} - \\sqrt{3}",
          "explanation": "Here $\\cos\\tfrac{5\\pi}{6}=-\\tfrac{\\sqrt{3}}{2}$, giving the exact height at the second stationary point.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Differentiate again for the second derivative",
          "workingLatex": "\\frac{d^{2}y}{dx^{2}} = -2\\cos x",
          "explanation": "Differentiating $1 - 2\\sin x$ uses $\\dfrac{d}{dx}(\\sin x)=\\cos x$; the constant differentiates to zero.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Classify the point at x = pi/6",
          "workingLatex": "x=\\tfrac{\\pi}{6}:\\ -2\\cos\\tfrac{\\pi}{6} = -2\\cdot\\tfrac{\\sqrt{3}}{2} = -\\sqrt{3} < 0 \\Rightarrow \\text{maximum}",
          "explanation": "A negative second derivative means the curve bends downward, so this point is a local maximum.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Classify the point at x = 5pi/6",
          "workingLatex": "x=\\tfrac{5\\pi}{6}:\\ -2\\cos\\tfrac{5\\pi}{6} = -2\\left(-\\tfrac{\\sqrt{3}}{2}\\right) = \\sqrt{3} > 0 \\Rightarrow \\text{minimum}",
          "explanation": "A positive second derivative means the curve bends upward, so this point is a local minimum.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the two stationary points",
          "workingLatex": "\\text{max } \\left(\\tfrac{\\pi}{6},\\ \\tfrac{\\pi}{6}+\\sqrt{3}\\right), \\quad \\text{min } \\left(\\tfrac{5\\pi}{6},\\ \\tfrac{5\\pi}{6}-\\sqrt{3}\\right)",
          "explanation": "Collecting the coordinates with their classifications gives the exact stationary points.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Numerical value of the maximum",
          "workingLatex": "\\left(\\tfrac{\\pi}{6},\\ \\tfrac{\\pi}{6}+\\sqrt{3}\\right) \\approx (0.524,\\ 2.256)",
          "explanation": "Evaluating as decimals gives a sensible high point near the start of the interval.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Numerical value of the minimum",
          "workingLatex": "\\left(\\tfrac{5\\pi}{6},\\ \\tfrac{5\\pi}{6}-\\sqrt{3}\\right) \\approx (2.618,\\ 0.886)",
          "explanation": "The minimum sits lower and to the right of the maximum, consistent with the shape.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Verify the gradient is zero at x = pi/6",
          "workingLatex": "1 - 2\\sin\\tfrac{\\pi}{6} = 1 - 2\\cdot\\tfrac{1}{2} = 0 \\;\\checkmark",
          "explanation": "Substituting back confirms the derivative vanishes at the maximum.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Verify the gradient is zero at x = 5pi/6",
          "workingLatex": "1 - 2\\sin\\tfrac{5\\pi}{6} = 1 - 2\\cdot\\tfrac{1}{2} = 0 \\;\\checkmark",
          "explanation": "Likewise the derivative vanishes at the minimum, confirming both stationary points.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the final answer",
          "workingLatex": "\\text{Max at } \\left(\\tfrac{\\pi}{6},\\ \\tfrac{\\pi}{6}+\\sqrt{3}\\right); \\quad \\text{Min at } \\left(\\tfrac{5\\pi}{6},\\ \\tfrac{5\\pi}{6}-\\sqrt{3}\\right)",
          "explanation": "This gives the exact coordinates and correct classification of each stationary point.",
          "diagram": null
        }
      ],
      "finalAnswer": "Maximum at $\\left(\\tfrac{\\pi}{6},\\ \\tfrac{\\pi}{6}+\\sqrt{3}\\right) \\approx (0.524,\\,2.256)$ and minimum at $\\left(\\tfrac{5\\pi}{6},\\ \\tfrac{5\\pi}{6}-\\sqrt{3}\\right) \\approx (2.618,\\,0.886)$."
    }
  },
  {
    "id": "al.y2.pure.standard-derivatives.q057",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard derivatives",
    "subtopicId": "al.y2.pure.standard-derivatives",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "exact",
    "tags": [
      "standard derivatives",
      "stationary points",
      "second derivative",
      "exponential"
    ],
    "questionText": "Find the exact coordinates of the stationary point of the curve $y = 4^{x} - x\\ln 4$, and use the second derivative to show that it is a minimum. Hence state the minimum value of $y$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate the curve",
          "workingLatex": "\\frac{dy}{dx} = 4^{x}\\ln 4 - \\ln 4",
          "explanation": "Using the standard result $\\dfrac{d}{dx}(a^{x})=a^{x}\\ln a$ with $a=4$, and $\\dfrac{d}{dx}(x\\ln 4)=\\ln 4$ since $\\ln 4$ is a constant.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Factorise the derivative",
          "workingLatex": "\\frac{dy}{dx} = \\ln 4\\,(4^{x} - 1)",
          "explanation": "Both terms share the factor $\\ln 4$; taking it out makes the stationary condition easy to solve.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set the derivative to zero",
          "workingLatex": "\\ln 4 \\ne 0 \\Rightarrow 4^{x} - 1 = 0 \\Rightarrow 4^{x} = 1",
          "explanation": "Since $\\ln 4$ is a positive constant, the gradient is zero only when the bracket is zero.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for x",
          "workingLatex": "4^{x} = 4^{0} \\Rightarrow x = 0",
          "explanation": "Any nonzero base raised to the power $0$ equals $1$, so $4^{x}=1$ gives $x=0$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the y-coordinate",
          "workingLatex": "y = 4^{0} - 0\\cdot\\ln 4 = 1 \\quad\\Rightarrow\\quad (0,\\, 1)",
          "explanation": "Substituting $x=0$ into the curve gives the exact coordinates of the stationary point.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Differentiate again for the second derivative",
          "workingLatex": "\\frac{d^{2}y}{dx^{2}} = \\ln 4\\,(4^{x}\\ln 4) = (\\ln 4)^{2}\\,4^{x}",
          "explanation": "Differentiating $\\ln 4\\,(4^{x}-1)$ gives $\\ln 4$ times $4^{x}\\ln 4$; the constant $-1$ contributes nothing.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the second derivative",
          "workingLatex": "x=0:\\ (\\ln 4)^{2}\\cdot 4^{0} = (\\ln 4)^{2} > 0 \\Rightarrow \\text{minimum}",
          "explanation": "A squared quantity times a positive power is positive, so the curve is concave up and the point is a minimum.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Confirm with a sign argument",
          "workingLatex": "x < 0:\\ 4^{x} < 1 \\Rightarrow \\frac{dy}{dx} < 0; \\quad x > 0:\\ 4^{x} > 1 \\Rightarrow \\frac{dy}{dx} > 0",
          "explanation": "The curve falls before $x=0$ and rises after it, which independently confirms a minimum.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the minimum value",
          "workingLatex": "\\text{minimum value } y = 1, \\ \\text{so } y \\ge 1 \\ \\text{for all } x",
          "explanation": "Because there is a single turning point and the curve falls then rises, $y=1$ is the lowest value the curve reaches.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Numerical check of the second derivative",
          "workingLatex": "\\ln 4 \\approx 1.386, \\quad (\\ln 4)^{2} \\approx 1.922 > 0",
          "explanation": "The second derivative is comfortably positive, consistent with a minimum.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Verify the gradient is zero at x = 0",
          "workingLatex": "\\ln 4\\,(4^{0} - 1) = \\ln 4\\,(0) = 0 \\;\\checkmark",
          "explanation": "Substituting $x=0$ into the factorised derivative gives zero, confirming the stationary point.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Note an equivalent tidy form",
          "workingLatex": "\\ln 4 = 2\\ln 2 \\ \\Rightarrow\\ \\frac{dy}{dx} = 2\\ln 2\\,(4^{x}-1)",
          "explanation": "Writing $\\ln 4 = 2\\ln 2$ is a neat equivalent form and a useful sanity check on the constant.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Restate the classified stationary point",
          "workingLatex": "\\text{minimum at } (0,\\, 1)",
          "explanation": "The point $(0,1)$ is the global minimum of the curve.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the final answer",
          "workingLatex": "\\text{Minimum } (0,\\,1), \\quad y_{\\min} = 1",
          "explanation": "This gives the exact coordinates, the confirmed classification, and the minimum value.",
          "diagram": null
        }
      ],
      "finalAnswer": "The stationary point is $(0,\\,1)$; since $\\dfrac{d^{2}y}{dx^{2}}=(\\ln 4)^{2}>0$ it is a minimum, and the minimum value of $y$ is $1$."
    }
  },
  {
    "id": "al.y2.pure.standard-derivatives.q058",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard derivatives",
    "subtopicId": "al.y2.pure.standard-derivatives",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "exact",
    "tags": [
      "standard derivatives",
      "unknown constants",
      "simultaneous equations",
      "stationary point"
    ],
    "questionText": "The curve $y = a\\,e^{x} + b\\,e^{-x}$ passes through the point $(0, 5)$ and has gradient $1$ at that point. (a) Find the values of the constants $a$ and $b$. (b) Find the exact coordinates of the stationary point of the resulting curve and classify it.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Use the point condition (0, 5)",
          "workingLatex": "y = a e^{x} + b e^{-x}; \\quad (0,5):\\ a e^{0} + b e^{0} = a + b = 5",
          "explanation": "Since $e^{0}=1$, substituting the point on the curve gives a first equation linking $a$ and $b$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate the curve",
          "workingLatex": "\\frac{dy}{dx} = a e^{x} - b e^{-x}",
          "explanation": "Using $\\dfrac{d}{dx}(e^{x})=e^{x}$ and the standard result $\\dfrac{d}{dx}(e^{-x})=-e^{-x}$ (that is $e^{kx}$ with $k=-1$).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use the gradient condition at x = 0",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{x=0} = a - b = 1",
          "explanation": "Substituting $x=0$ into the derivative and setting it equal to $1$ gives a second equation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the simultaneous equations",
          "workingLatex": "a + b = 5, \\quad a - b = 1",
          "explanation": "These two linear equations can be solved together for the constants.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve the simultaneous equations",
          "workingLatex": "2a = 6 \\Rightarrow a = 3, \\quad b = 5 - 3 = 2",
          "explanation": "Adding the equations eliminates $b$ to give $a=3$, and back-substituting gives $b=2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the curve and its derivative",
          "workingLatex": "y = 3e^{x} + 2e^{-x}, \\quad \\frac{dy}{dx} = 3e^{x} - 2e^{-x}",
          "explanation": "Substituting the constants gives the specific curve whose stationary point we now find.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Set the derivative to zero",
          "workingLatex": "3e^{x} - 2e^{-x} = 0 \\Rightarrow 3e^{x} = 2e^{-x}",
          "explanation": "Stationary points occur where the gradient is zero, giving an equation in $e^{x}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Multiply through by e^{x}",
          "workingLatex": "3e^{2x} = 2 \\Rightarrow e^{2x} = \\tfrac{2}{3}",
          "explanation": "Multiplying by $e^{x}$ clears the negative exponent, since $e^{x}\\cdot e^{-x}=1$ and $e^{x}\\cdot e^{x}=e^{2x}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solve for x",
          "workingLatex": "2x = \\ln\\tfrac{2}{3} \\Rightarrow x = \\tfrac{1}{2}\\ln\\tfrac{2}{3}",
          "explanation": "Taking natural logarithms gives the exact $x$-coordinate (equivalently $x=-\\tfrac{1}{2}\\ln\\tfrac{3}{2}$, a small negative value).",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Express the exponentials at this point",
          "workingLatex": "e^{x} = \\left(\\tfrac{2}{3}\\right)^{1/2}, \\quad e^{-x} = \\left(\\tfrac{3}{2}\\right)^{1/2}",
          "explanation": "From $e^{2x}=\\tfrac{2}{3}$ we get $e^{x}=\\sqrt{\\tfrac{2}{3}}$, and $e^{-x}$ is its reciprocal $\\sqrt{\\tfrac{3}{2}}$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Simplify the first term of y",
          "workingLatex": "3\\left(\\tfrac{2}{3}\\right)^{1/2} = \\frac{3\\sqrt{2}}{\\sqrt{3}} = \\sqrt{3}\\cdot\\sqrt{2} = \\sqrt{6}",
          "explanation": "Rationalising, $\\dfrac{3}{\\sqrt{3}}=\\sqrt{3}$, so the term collapses neatly to $\\sqrt{6}$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Simplify the second term of y",
          "workingLatex": "2\\left(\\tfrac{3}{2}\\right)^{1/2} = \\frac{2\\sqrt{3}}{\\sqrt{2}} = \\sqrt{2}\\cdot\\sqrt{3} = \\sqrt{6}",
          "explanation": "Similarly $\\dfrac{2}{\\sqrt{2}}=\\sqrt{2}$, so this term is also exactly $\\sqrt{6}$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Find the y-coordinate",
          "workingLatex": "y = \\sqrt{6} + \\sqrt{6} = 2\\sqrt{6}",
          "explanation": "Adding the two equal terms gives a very clean exact height for the stationary point.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Classify using the second derivative",
          "workingLatex": "\\frac{d^{2}y}{dx^{2}} = 3e^{x} + 2e^{-x} > 0 \\Rightarrow \\text{minimum}",
          "explanation": "Both exponential terms are always positive, so the second derivative is positive everywhere; the point is a minimum.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Numerical check",
          "workingLatex": "x \\approx -0.203, \\ y = 2\\sqrt{6} \\approx 4.899; \\quad 3e^{-0.203} - 2e^{0.203} \\approx 2.449 - 2.449 = 0 \\;\\checkmark",
          "explanation": "The gradient is zero at $x\\approx-0.203$ and the height matches $2\\sqrt{6}$, confirming the stationary point.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "State the final answer",
          "workingLatex": "a = 3,\\ b = 2; \\quad \\text{minimum at } \\left(\\tfrac{1}{2}\\ln\\tfrac{2}{3},\\ 2\\sqrt{6}\\right)",
          "explanation": "This gives the constants and the exact, classified stationary point.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $a = 3$ and $b = 2$. (b) The curve $y = 3e^{x}+2e^{-x}$ has a minimum at $\\left(\\tfrac{1}{2}\\ln\\tfrac{2}{3},\\ 2\\sqrt{6}\\right) \\approx (-0.203,\\ 4.899)$."
    }
  },
  {
    "id": "al.y2.pure.standard-derivatives.q059",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard derivatives",
    "subtopicId": "al.y2.pure.standard-derivatives",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "exact",
    "tags": [
      "standard derivatives",
      "show that",
      "tangent",
      "exponential"
    ],
    "questionText": "The curve has equation $y = 2^{x}$. (a) Show that $\\dfrac{dy}{dx} = 2^{x}\\ln 2$. (b) Find the equation of the tangent to the curve at the point where $x = 3$, and hence find the exact coordinates of the point where this tangent crosses the $x$-axis.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Apply the standard result for a^x",
          "workingLatex": "\\frac{d}{dx}(a^{x}) = a^{x}\\ln a",
          "explanation": "This is the standard derivative of an exponential with base $a$; here the base is $a=2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute a = 2 to show the required result",
          "workingLatex": "\\frac{dy}{dx} = 2^{x}\\ln 2 \\quad\\checkmark",
          "explanation": "Putting $a=2$ into the standard result gives exactly $2^{x}\\ln 2$, as required in part (a).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the gradient of the tangent at x = 3",
          "workingLatex": "m = \\left.\\frac{dy}{dx}\\right|_{x=3} = 2^{3}\\ln 2 = 8\\ln 2",
          "explanation": "Substituting $x=3$ into the derivative gives the exact gradient of the tangent.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the point of contact",
          "workingLatex": "y = 2^{3} = 8 \\quad\\Rightarrow\\quad (3,\\, 8)",
          "explanation": "The tangent touches the curve at $x=3$, where $y=2^{3}=8$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the tangent in point-gradient form",
          "workingLatex": "y - 8 = 8\\ln 2\\,(x - 3)",
          "explanation": "Substituting the point $(3,8)$ and gradient $8\\ln 2$ into $y-y_1=m(x-x_1)$ gives the tangent.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the tangent in slope-intercept form",
          "workingLatex": "y = 8\\ln 2\\,x - 24\\ln 2 + 8",
          "explanation": "Expanding the bracket gives a tidy form of the tangent line.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Set y = 0 to find the x-axis crossing",
          "workingLatex": "y = 0:\\quad -8 = 8\\ln 2\\,(x - 3)",
          "explanation": "On the $x$-axis $y=0$; substituting into the point-gradient form isolates the bracket.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for x",
          "workingLatex": "x - 3 = \\frac{-8}{8\\ln 2} = -\\frac{1}{\\ln 2} \\Rightarrow x = 3 - \\frac{1}{\\ln 2}",
          "explanation": "Dividing by $8\\ln 2$ and rearranging gives the exact $x$-coordinate of the crossing.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the crossing point",
          "workingLatex": "\\left(3 - \\frac{1}{\\ln 2},\\ 0\\right)",
          "explanation": "This is where the tangent meets the $x$-axis, in exact form.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Numerical value of the crossing",
          "workingLatex": "\\ln 2 \\approx 0.6931, \\ \\frac{1}{\\ln 2} \\approx 1.4427, \\ x \\approx 1.557",
          "explanation": "Evaluating gives a crossing to the left of the point of contact, which is sensible for a positive gradient.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Verify the tangent gives y = 0 there",
          "workingLatex": "8 + 8\\ln 2\\,(1.557 - 3) \\approx 8 + 8(0.6931)(-1.443) \\approx 8 - 8.00 = 0 \\;\\checkmark",
          "explanation": "Substituting the numerical $x$ back into the tangent gives $y\\approx 0$, confirming the crossing.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Numerical value of the gradient",
          "workingLatex": "m = 8\\ln 2 \\approx 5.545",
          "explanation": "The tangent has a steep positive gradient, consistent with the rapid growth of $2^{x}$ at $x=3$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Confirm the point of contact lies on the tangent",
          "workingLatex": "8\\ln 2(3) - 24\\ln 2 + 8 = 24\\ln 2 - 24\\ln 2 + 8 = 8 \\;\\checkmark",
          "explanation": "Substituting $x=3$ into the slope-intercept form returns $y=8$, matching the point of contact.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the final answer",
          "workingLatex": "y = 8\\ln 2\\,(x - 3) + 8, \\quad \\left(3 - \\tfrac{1}{\\ln 2},\\ 0\\right)",
          "explanation": "This gives the tangent equation and the exact $x$-axis crossing.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\dfrac{dy}{dx}=2^{x}\\ln 2$. (b) The tangent is $y = 8\\ln 2\\,(x-3) + 8$, crossing the $x$-axis at $\\left(3 - \\tfrac{1}{\\ln 2},\\ 0\\right) \\approx (1.557,\\ 0)$."
    }
  },
  {
    "id": "al.y2.pure.standard-derivatives.q060",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard derivatives",
    "subtopicId": "al.y2.pure.standard-derivatives",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "proof",
    "tags": [
      "standard derivatives",
      "increasing function",
      "proof",
      "trigonometry"
    ],
    "questionText": "The function is defined by $y = 2x - \\cos x$, where $x$ is in radians. (a) Prove that $y$ is an increasing function for all real values of $x$. (b) Hence explain why the equation $2x - \\cos x = 0$ has exactly one real root, and state an interval of unit length that contains it.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate the function",
          "workingLatex": "\\frac{dy}{dx} = 2 + \\sin x",
          "explanation": "Using $\\dfrac{d}{dx}(2x)=2$ and $\\dfrac{d}{dx}(\\cos x)=-\\sin x$, so $-\\cos x$ differentiates to $+\\sin x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the range of sin x",
          "workingLatex": "-1 \\le \\sin x \\le 1 \\ \\text{for all } x",
          "explanation": "The sine function is bounded between $-1$ and $1$ everywhere, which will bound the gradient.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Bound the derivative",
          "workingLatex": "2 + (-1) \\le 2 + \\sin x \\le 2 + 1 \\Rightarrow 1 \\le \\frac{dy}{dx} \\le 3",
          "explanation": "Adding $2$ throughout the inequality shifts the bounds, so the gradient lies between $1$ and $3$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Deduce the derivative is always positive",
          "workingLatex": "\\frac{dy}{dx} \\ge 1 > 0 \\ \\text{for all } x",
          "explanation": "The smallest possible gradient is $1$, so the derivative can never be zero or negative.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Conclude the function is increasing",
          "workingLatex": "\\frac{dy}{dx} > 0 \\ \\text{for all } x \\Rightarrow y \\text{ is increasing on } \\mathbb{R}",
          "explanation": "A function whose derivative is positive everywhere is strictly increasing across its whole domain, proving part (a).",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Note there are no stationary points",
          "workingLatex": "\\frac{dy}{dx} \\ge 1 \\ne 0 \\Rightarrow \\text{no stationary points}",
          "explanation": "Since the gradient is never zero, the curve never levels off; it rises steadily throughout.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State continuity for the root argument",
          "workingLatex": "y = 2x - \\cos x \\ \\text{is continuous for all } x",
          "explanation": "Sums of a polynomial and a cosine are continuous everywhere, which lets us use a sign-change argument.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Evaluate y at x = 0",
          "workingLatex": "y(0) = 2(0) - \\cos 0 = -1 < 0",
          "explanation": "At $x=0$ the function is negative, since $\\cos 0 = 1$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Evaluate y at x = 1",
          "workingLatex": "y(1) = 2 - \\cos 1 \\approx 2 - 0.540 = 1.460 > 0",
          "explanation": "At $x=1$ (radians) the function is positive, since $\\cos 1 \\approx 0.540$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Apply the change-of-sign argument",
          "workingLatex": "y(0) < 0 < y(1) \\Rightarrow \\text{a root lies in } (0, 1)",
          "explanation": "A continuous function changing sign between $0$ and $1$ must cross zero somewhere in that interval (at least one root).",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Use monotonicity for uniqueness",
          "workingLatex": "y \\text{ strictly increasing} \\Rightarrow \\text{at most one root}",
          "explanation": "A strictly increasing function can equal any value, including zero, at most once, so there cannot be a second root.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Combine existence and uniqueness",
          "workingLatex": "\\Rightarrow \\text{exactly one real root, and it lies in } (0, 1)",
          "explanation": "At least one root plus at most one root means precisely one real root, located in the interval $(0,1)$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the minimum gradient explicitly",
          "workingLatex": "\\min \\frac{dy}{dx} = 1 \\ \\text{at } \\sin x = -1 \\ \\left(x = -\\tfrac{\\pi}{2} + 2k\\pi\\right)",
          "explanation": "Even at its flattest the curve still has gradient $1$, reinforcing that it never stops increasing.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the conclusion",
          "workingLatex": "y \\text{ increasing on } \\mathbb{R}; \\quad 2x - \\cos x = 0 \\text{ has one root in } (0,1)",
          "explanation": "This completes both parts: the function increases everywhere and the equation has exactly one real solution.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\dfrac{dy}{dx} = 2 + \\sin x \\ge 1 > 0$ for all $x$, so $y$ is strictly increasing on $\\mathbb{R}$. (b) $y$ is continuous with $y(0) = -1 < 0$ and $y(1) \\approx 1.460 > 0$, so there is a root in $(0,1)$; strict monotonicity makes it the only one, hence exactly one real root."
    }
  },
  {
    "id": "al.y2.pure.standard-derivatives.q061",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard derivatives",
    "subtopicId": "al.y2.pure.standard-derivatives",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "exact",
    "tags": [
      "standard derivatives",
      "exponential",
      "stationary point",
      "tangent"
    ],
    "questionText": "A curve has equation $y = e^{2x} - 8x$.\n(a) Find $\\dfrac{dy}{dx}$.\n(b) Find the gradient of the curve at the point where $x=0$.\n(c) Find the exact coordinates of the stationary point and determine its nature.\n(d) Find where the tangent to the curve at $x=0$ meets the $x$-axis.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the standard results needed",
          "workingLatex": "\\frac{d}{dx}(e^{2x}) = 2e^{2x}, \\quad \\frac{d}{dx}(8x) = 8",
          "explanation": "The term $e^{2x}$ has the standard form $e^{kx}$ with $k=2$, so its derivative is $2e^{2x}$. The term $8x$ is linear, so its derivative is the constant $8$. Because differentiation is linear, we may treat each term separately.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate to find dy/dx (part a)",
          "workingLatex": "\\frac{dy}{dx} = 2e^{2x} - 8",
          "explanation": "Combining the two term derivatives gives the gradient function. This single expression tells us the slope of the curve at every value of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate the gradient at x = 0 (part b)",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{x=0} = 2e^{0} - 8 = 2 - 8 = -6",
          "explanation": "Substituting $x=0$ into the gradient function gives the slope there. Since $e^{0}=1$, the gradient is $-6$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Interpret the gradient",
          "workingLatex": "\\frac{dy}{dx} = -6 < 0 \\quad \\text{at } x=0",
          "explanation": "A negative gradient means the curve is falling as it crosses $x=0$; this slope of $-6$ will also be the slope of the tangent we need in part (d).",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set the derivative to zero for stationary points (part c)",
          "workingLatex": "2e^{2x} - 8 = 0 \\;\\Rightarrow\\; e^{2x} = 4",
          "explanation": "Stationary points occur where the tangent is horizontal, i.e. where $\\dfrac{dy}{dx}=0$. Rearranging isolates the exponential term.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for x using logarithms",
          "workingLatex": "2x = \\ln 4 \\;\\Rightarrow\\; x = \\tfrac{1}{2}\\ln 4 = \\ln 2",
          "explanation": "Taking natural logs undoes the exponential. Using $\\ln 4 = 2\\ln 2$, the factor of $\\tfrac{1}{2}$ cancels to give the clean value $x=\\ln 2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the y-coordinate of the stationary point",
          "workingLatex": "y = e^{2\\ln 2} - 8\\ln 2 = e^{\\ln 4} - 8\\ln 2 = 4 - 8\\ln 2",
          "explanation": "We substitute back into the original equation. Since $2\\ln 2 = \\ln 4$ and $e^{\\ln 4}=4$, the exact height is $4 - 8\\ln 2 \\approx -1.545$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Differentiate again for the second derivative",
          "workingLatex": "\\frac{d^2y}{dx^2} = 4e^{2x}",
          "explanation": "Differentiating $2e^{2x}-8$ once more: the standard result gives $2\\cdot 2e^{2x}=4e^{2x}$, and the constant $-8$ vanishes. The sign of this tells us the nature of the stationary point.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Evaluate the second derivative at the stationary point",
          "workingLatex": "\\left.\\frac{d^2y}{dx^2}\\right|_{x=\\ln 2} = 4e^{2\\ln 2} = 4 \\times 4 = 16 > 0",
          "explanation": "A positive second derivative means the curve is concave up there, so the stationary point is a minimum.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the stationary point",
          "workingLatex": "\\text{Minimum at } \\left(\\ln 2,\\; 4 - 8\\ln 2\\right)",
          "explanation": "Collecting the coordinates and their nature: the curve has a single minimum turning point at approximately $(0.693,\\,-1.545)$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Find the point of contact for the tangent at x = 0 (part d)",
          "workingLatex": "x=0:\\; y = e^{0} - 8(0) = 1 \\;\\Rightarrow\\; (0,\\,1)",
          "explanation": "The tangent touches the curve at $x=0$, so we need the curve's height there. This gives the point $(0,1)$, and from part (b) the gradient is $-6$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Write the tangent line",
          "workingLatex": "y - 1 = -6(x - 0) \\;\\Rightarrow\\; y = 1 - 6x",
          "explanation": "Using the point-gradient form $y-y_1 = m(x-x_1)$ with $(0,1)$ and $m=-6$ gives the equation of the tangent.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Find where the tangent meets the x-axis",
          "workingLatex": "y = 0:\\; 0 = 1 - 6x \\;\\Rightarrow\\; x = \\tfrac{1}{6}",
          "explanation": "The $x$-axis is the line $y=0$. Setting the tangent equal to zero and solving locates the crossing point.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the intersection with the x-axis",
          "workingLatex": "\\left(\\tfrac{1}{6},\\; 0\\right)",
          "explanation": "So the tangent at $x=0$ cuts the $x$-axis at $\\left(\\tfrac{1}{6},0\\right)$.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Summarise the results",
          "workingLatex": "\\frac{dy}{dx} = 2e^{2x} - 8, \\quad m|_{0} = -6, \\quad \\min\\left(\\ln 2, 4-8\\ln 2\\right), \\quad \\left(\\tfrac{1}{6},0\\right)",
          "explanation": "All four parts are now complete: the derivative, the gradient at $x=0$, the exact minimum, and the intercept of the tangent with the $x$-axis.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\dfrac{dy}{dx}=2e^{2x}-8$. (b) Gradient $=-6$. (c) Minimum at $(\\ln 2,\\;4-8\\ln 2)$. (d) The tangent $y=1-6x$ meets the $x$-axis at $\\left(\\tfrac{1}{6},0\\right)$."
    }
  },
  {
    "id": "al.y2.pure.standard-derivatives.q062",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard derivatives",
    "subtopicId": "al.y2.pure.standard-derivatives",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "exact",
    "tags": [
      "standard derivatives",
      "trigonometry",
      "stationary point",
      "parallel tangents"
    ],
    "questionText": "The curve $C$ has equation $y = x + 2\\cos x$ for $0 \\le x \\le 2\\pi$, where $x$ is in radians.\n(a) Find $\\dfrac{dy}{dx}$.\n(b) Find the gradient of $C$ at $x=0$.\n(c) Find the coordinates of the stationary points on $C$ and determine the nature of each.\n(d) Find another value of $x$ in the interval at which the tangent to $C$ is parallel to the tangent at $x=0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the standard results (radians)",
          "workingLatex": "\\frac{d}{dx}(x) = 1, \\quad \\frac{d}{dx}(2\\cos x) = -2\\sin x",
          "explanation": "The derivative of $\\cos x$ is $-\\sin x$ provided $x$ is in radians, so $2\\cos x$ differentiates to $-2\\sin x$. The linear term $x$ differentiates to $1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate to find dy/dx (part a)",
          "workingLatex": "\\frac{dy}{dx} = 1 - 2\\sin x",
          "explanation": "Adding the term derivatives gives the gradient function of the curve for all $x$ in the interval.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate the gradient at x = 0 (part b)",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{x=0} = 1 - 2\\sin 0 = 1",
          "explanation": "Substituting $x=0$ and using $\\sin 0 = 0$ gives a gradient of $1$ at the start of the interval.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set the derivative to zero (part c)",
          "workingLatex": "1 - 2\\sin x = 0 \\;\\Rightarrow\\; \\sin x = \\tfrac{1}{2}",
          "explanation": "Stationary points occur where the tangent is horizontal. Rearranging gives a simple trigonometric equation to solve.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for x in the interval",
          "workingLatex": "x = \\frac{\\pi}{6} \\quad \\text{or} \\quad x = \\frac{5\\pi}{6} \\qquad (0 \\le x \\le 2\\pi)",
          "explanation": "In $[0,2\\pi]$ the equation $\\sin x = \\tfrac{1}{2}$ has the two solutions $\\tfrac{\\pi}{6}$ and $\\tfrac{5\\pi}{6}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the y-coordinate at x = pi/6",
          "workingLatex": "y = \\frac{\\pi}{6} + 2\\cos\\frac{\\pi}{6} = \\frac{\\pi}{6} + 2\\cdot\\frac{\\sqrt{3}}{2} = \\frac{\\pi}{6} + \\sqrt{3}",
          "explanation": "Substituting back into the curve; using $\\cos\\tfrac{\\pi}{6}=\\tfrac{\\sqrt{3}}{2}$ gives the exact height $\\tfrac{\\pi}{6}+\\sqrt{3}\\approx 2.256$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the y-coordinate at x = 5pi/6",
          "workingLatex": "y = \\frac{5\\pi}{6} + 2\\cos\\frac{5\\pi}{6} = \\frac{5\\pi}{6} - \\sqrt{3}",
          "explanation": "Here $\\cos\\tfrac{5\\pi}{6}=-\\tfrac{\\sqrt{3}}{2}$, so the height is $\\tfrac{5\\pi}{6}-\\sqrt{3}\\approx 0.886$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Differentiate again",
          "workingLatex": "\\frac{d^2y}{dx^2} = -2\\cos x",
          "explanation": "Differentiating $1 - 2\\sin x$: the constant vanishes and $-2\\sin x$ becomes $-2\\cos x$. Its sign classifies each stationary point.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Classify the point at x = pi/6",
          "workingLatex": "\\left.\\frac{d^2y}{dx^2}\\right|_{x=\\pi/6} = -2\\cos\\frac{\\pi}{6} = -\\sqrt{3} < 0",
          "explanation": "A negative second derivative means the curve is concave down, so this stationary point is a maximum.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Classify the point at x = 5pi/6",
          "workingLatex": "\\left.\\frac{d^2y}{dx^2}\\right|_{x=5\\pi/6} = -2\\cos\\frac{5\\pi}{6} = \\sqrt{3} > 0",
          "explanation": "A positive second derivative means concave up, so this stationary point is a minimum.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the stationary points",
          "workingLatex": "\\text{Max } \\left(\\tfrac{\\pi}{6},\\, \\tfrac{\\pi}{6}+\\sqrt{3}\\right), \\quad \\text{Min } \\left(\\tfrac{5\\pi}{6},\\, \\tfrac{5\\pi}{6}-\\sqrt{3}\\right)",
          "explanation": "Collecting the results: a maximum at $x=\\tfrac{\\pi}{6}$ and a minimum at $x=\\tfrac{5\\pi}{6}$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Set the gradient equal to the gradient at x = 0 (part d)",
          "workingLatex": "1 - 2\\sin x = 1 \\;\\Rightarrow\\; \\sin x = 0",
          "explanation": "Tangents are parallel when their gradients are equal. The gradient at $x=0$ was $1$, so we solve where the gradient function again equals $1$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Solve for x in the interval",
          "workingLatex": "x = 0,\\; \\pi,\\; 2\\pi",
          "explanation": "In $[0,2\\pi]$, $\\sin x = 0$ at these three values. Apart from the given $x=0$ (and the endpoint $2\\pi$), the interesting new value is $x=\\pi$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Find the point at x = pi",
          "workingLatex": "y = \\pi + 2\\cos\\pi = \\pi - 2",
          "explanation": "At $x=\\pi$, $\\cos\\pi = -1$, so the curve passes through $(\\pi,\\,\\pi-2)$, where the tangent again has gradient $1$.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "State the conclusion",
          "workingLatex": "\\text{Tangent at } x=\\pi \\text{ (gradient } 1) \\parallel \\text{ tangent at } x=0",
          "explanation": "So the tangent at $x=\\pi$ is parallel to the tangent at $x=0$, both having gradient $1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\dfrac{dy}{dx}=1-2\\sin x$. (b) Gradient $=1$. (c) Maximum at $\\left(\\tfrac{\\pi}{6},\\tfrac{\\pi}{6}+\\sqrt{3}\\right)$, minimum at $\\left(\\tfrac{5\\pi}{6},\\tfrac{5\\pi}{6}-\\sqrt{3}\\right)$. (d) The tangent at $x=\\pi$ (gradient $1$) is parallel to the tangent at $x=0$."
    }
  },
  {
    "id": "al.y2.pure.standard-derivatives.q063",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard derivatives",
    "subtopicId": "al.y2.pure.standard-derivatives",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "exact",
    "tags": [
      "standard derivatives",
      "exponential",
      "two curves",
      "equal gradient"
    ],
    "questionText": "Two curves are defined by $C_1:\\; y = 3e^{x}$ and $C_2:\\; y = e^{2x} + 2$.\n(a) Find $\\dfrac{dy}{dx}$ for each curve.\n(b) Find the exact value of $x$ at which the two curves have equal gradient, and state that common gradient.\n(c) Find the coordinates of the points where $C_1$ and $C_2$ intersect.\n(d) Find the gradient of each curve at the intersection point where $x=\\ln 2$, and hence explain what happens there.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate C1 (part a)",
          "workingLatex": "C_1:\\; \\frac{dy}{dx} = 3e^{x}",
          "explanation": "The derivative of $e^{x}$ is $e^{x}$, so the constant multiple $3e^{x}$ differentiates to $3e^{x}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate C2 (part a)",
          "workingLatex": "C_2:\\; \\frac{dy}{dx} = 2e^{2x}",
          "explanation": "Here $e^{2x}$ is the standard form $e^{kx}$ with $k=2$, giving $2e^{2x}$, and the constant $+2$ vanishes.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set the two gradients equal (part b)",
          "workingLatex": "3e^{x} = 2e^{2x}",
          "explanation": "The curves have the same slope where their gradient functions are equal. This equation locates that $x$-value.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify using a positive factor",
          "workingLatex": "3 = 2e^{x} \\;\\Rightarrow\\; e^{x} = \\tfrac{3}{2}",
          "explanation": "Dividing both sides by $e^{x}$ (which is always positive, so never zero) removes one exponential and leaves a simple equation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for x",
          "workingLatex": "x = \\ln\\tfrac{3}{2}",
          "explanation": "Taking natural logs gives the exact $x$-value where the gradients match, approximately $0.405$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the common gradient",
          "workingLatex": "m = 3e^{x} = 3 \\cdot \\tfrac{3}{2} = \\tfrac{9}{2}",
          "explanation": "Substituting $e^{x}=\\tfrac{3}{2}$ into either gradient function gives the shared slope $\\tfrac{9}{2}$. (Check: $2e^{2x}=2(\\tfrac{3}{2})^2=\\tfrac{9}{2}$.)",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Set the curves equal for intersections (part c)",
          "workingLatex": "3e^{x} = e^{2x} + 2",
          "explanation": "The curves meet where they have the same $y$-value, so we equate the two expressions.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute to form a quadratic",
          "workingLatex": "u^2 - 3u + 2 = 0 \\qquad (u = e^{x})",
          "explanation": "Writing $u=e^{x}$ turns $e^{2x}-3e^{x}+2=0$ into a standard quadratic in $u$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Factorise the quadratic",
          "workingLatex": "(u-1)(u-2) = 0 \\;\\Rightarrow\\; u = 1 \\text{ or } u = 2",
          "explanation": "Factorising gives two positive roots, both acceptable since $e^{x}>0$ always.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Return to x",
          "workingLatex": "e^{x} = 1 \\Rightarrow x = 0, \\qquad e^{x} = 2 \\Rightarrow x = \\ln 2",
          "explanation": "Undoing the substitution gives the two $x$-values of intersection.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Find the intersection coordinates",
          "workingLatex": "(0,\\,3) \\quad \\text{and} \\quad (\\ln 2,\\,6)",
          "explanation": "At $x=0$: $y=3e^{0}=3$. At $x=\\ln 2$: $y=3e^{\\ln 2}=6$ (and $C_2$ gives $e^{2\\ln 2}+2=4+2=6$, confirming the point).",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Find each gradient at x = ln 2 (part d)",
          "workingLatex": "C_1':\\, 3e^{\\ln 2} = 6, \\qquad C_2':\\, 2e^{2\\ln 2} = 2 \\times 4 = 8",
          "explanation": "Substituting $x=\\ln 2$ into each gradient function gives $6$ for $C_1$ and $8$ for $C_2$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Interpret the gradients",
          "workingLatex": "6 \\ne 8",
          "explanation": "Because the gradients differ at $(\\ln 2, 6)$, the curves genuinely cross there (they meet at different angles) rather than touching.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Contrast with the equal-gradient point",
          "workingLatex": "\\text{At } x=\\ln\\tfrac{3}{2}:\\; \\text{equal gradient } \\tfrac{9}{2}, \\text{ but } C_1, C_2 \\text{ at different heights}",
          "explanation": "At $x=\\ln\\tfrac{3}{2}$ the curves have parallel tangents (equal gradient) yet are not at the same point, so those tangents are parallel but distinct lines.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Summarise",
          "workingLatex": "\\text{Equal gradient at } \\ln\\tfrac{3}{2};\\; \\text{cross at } (0,3), (\\ln 2, 6)",
          "explanation": "This distinguishes the two ideas: equal gradient (parallel tangents) versus intersection (equal $y$-value).",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\dfrac{dy}{dx}=3e^{x}$ and $\\dfrac{dy}{dx}=2e^{2x}$. (b) Equal gradients at $x=\\ln\\tfrac{3}{2}$, common gradient $\\tfrac{9}{2}$. (c) The curves meet at $(0,3)$ and $(\\ln 2,6)$. (d) At $(\\ln 2,6)$ the gradients are $6$ and $8$, so the curves cross there."
    }
  },
  {
    "id": "al.y2.pure.standard-derivatives.q064",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard derivatives",
    "subtopicId": "al.y2.pure.standard-derivatives",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "exact",
    "tags": [
      "standard derivatives",
      "exponential",
      "rate of change",
      "modelling"
    ],
    "questionText": "The number of bacteria, $P$ thousand, in a culture after $t$ hours is modelled by $P = 5e^{0.4t}$, $t \\ge 0$.\n(a) Find $\\dfrac{dP}{dt}$.\n(b) Find the initial rate of growth.\n(c) Find, in exact form, the time at which the rate of growth is $8$ thousand bacteria per hour, and the population at that time.\n(d) Show that the rate of growth is proportional to $P$, and find the time taken for the population to double from its initial value.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the standard result",
          "workingLatex": "\\frac{d}{dt}(e^{0.4t}) = 0.4\\,e^{0.4t}",
          "explanation": "The model uses the standard form $e^{kt}$ with $k=0.4$, whose derivative is $k$ times itself, i.e. $0.4e^{0.4t}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate the model (part a)",
          "workingLatex": "\\frac{dP}{dt} = 5 \\cdot 0.4\\,e^{0.4t} = 2e^{0.4t}",
          "explanation": "Multiplying the constant $5$ by the derivative gives the rate of change of the population.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Interpret the derivative",
          "workingLatex": "\\frac{dP}{dt} = 2e^{0.4t} \\quad (\\text{thousand per hour})",
          "explanation": "This expression gives the instantaneous growth rate at any time $t$, measured in thousand bacteria per hour.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the initial rate (part b)",
          "workingLatex": "\\left.\\frac{dP}{dt}\\right|_{t=0} = 2e^{0} = 2",
          "explanation": "At $t=0$ the exponential is $1$, so the initial rate of growth is $2$ thousand bacteria per hour.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set the rate equal to 8 (part c)",
          "workingLatex": "2e^{0.4t} = 8 \\;\\Rightarrow\\; e^{0.4t} = 4",
          "explanation": "We want the moment the growth rate reaches $8$ thousand per hour, so we set the derivative equal to $8$ and isolate the exponential.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Take natural logarithms",
          "workingLatex": "0.4t = \\ln 4",
          "explanation": "Applying $\\ln$ to both sides removes the exponential and gives a linear equation in $t$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for t exactly",
          "workingLatex": "t = \\frac{\\ln 4}{0.4} = \\frac{2\\ln 2}{0.4} = 5\\ln 2 \\approx 3.47",
          "explanation": "Using $\\ln 4 = 2\\ln 2$ simplifies the answer to $5\\ln 2$ hours, about $3.47$ hours.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find the population at that time",
          "workingLatex": "P = 5e^{0.4t} = 5 \\times 4 = 20",
          "explanation": "Since $e^{0.4t}=4$ at this instant, the population is $5\\times 4 = 20$ thousand bacteria.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Show the rate is proportional to P (part d)",
          "workingLatex": "\\frac{dP}{dt} = 2e^{0.4t} = 0.4\\bigl(5e^{0.4t}\\bigr) = 0.4P",
          "explanation": "Factoring the rate reveals it equals $0.4$ times the population itself, so the growth rate is proportional to $P$ with constant $0.4$ per hour.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Verify the proportionality against earlier answers",
          "workingLatex": "0.4 \\times 5 = 2, \\qquad 0.4 \\times 20 = 8",
          "explanation": "This matches part (b) (population $5$, rate $2$) and part (c) (population $20$, rate $8$), confirming $\\dfrac{dP}{dt}=0.4P$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Set up the doubling condition",
          "workingLatex": "5e^{0.4t} = 10 \\;\\Rightarrow\\; e^{0.4t} = 2",
          "explanation": "The initial value is $5$ thousand, so doubling means reaching $10$ thousand. We solve for the time this takes.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Take logarithms",
          "workingLatex": "0.4t = \\ln 2",
          "explanation": "Applying $\\ln$ again isolates $t$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Solve for the doubling time",
          "workingLatex": "t = \\frac{\\ln 2}{0.4} = \\tfrac{5}{2}\\ln 2 \\approx 1.73",
          "explanation": "The population doubles from its initial value after $\\tfrac{5}{2}\\ln 2$ hours, about $1.73$ hours.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Summarise the results",
          "workingLatex": "\\frac{dP}{dt} = 2e^{0.4t}, \\quad t = 5\\ln 2,\\; P=20, \\quad \\frac{dP}{dt}=0.4P, \\quad t_{2\\times} = \\tfrac{5}{2}\\ln 2",
          "explanation": "All parts are complete: the rate, the initial rate, the exact time and population at rate $8$, the proportionality, and the doubling time.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\dfrac{dP}{dt}=2e^{0.4t}$. (b) $2$ thousand per hour. (c) $t=5\\ln 2\\approx 3.47$ hours, when $P=20$ thousand. (d) $\\dfrac{dP}{dt}=0.4P$; the population doubles from its initial value after $t=\\tfrac{5}{2}\\ln 2\\approx 1.73$ hours."
    }
  },
  {
    "id": "al.y2.pure.standard-derivatives.q065",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard derivatives",
    "subtopicId": "al.y2.pure.standard-derivatives",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "exact",
    "tags": [
      "standard derivatives",
      "trigonometry",
      "stationary point",
      "second derivative"
    ],
    "questionText": "The curve $C$ has equation $y = 2\\sin x + \\cos 2x$ for $0 \\le x \\le \\pi$, where $x$ is in radians.\n(a) Find $\\dfrac{dy}{dx}$.\n(b) Show that $x = \\dfrac{\\pi}{6}$ is a stationary point of $C$.\n(c) Determine the nature of the stationary point at $x=\\dfrac{\\pi}{6}$ and find its exact $y$-value.\n(d) Find the coordinates of all the stationary points of $C$ on the interval, classifying each.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the standard results (radians)",
          "workingLatex": "\\frac{d}{dx}(2\\sin x) = 2\\cos x, \\quad \\frac{d}{dx}(\\cos 2x) = -2\\sin 2x",
          "explanation": "For $x$ in radians, $\\sin x$ differentiates to $\\cos x$, and $\\cos 2x$ is the standard form $\\cos kx$ with $k=2$, giving $-2\\sin 2x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate to find dy/dx (part a)",
          "workingLatex": "\\frac{dy}{dx} = 2\\cos x - 2\\sin 2x",
          "explanation": "Adding the two term derivatives gives the gradient function of the curve.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Show x = pi/6 is stationary (part b)",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{x=\\pi/6} = 2\\cos\\frac{\\pi}{6} - 2\\sin\\frac{\\pi}{3} = 2\\cdot\\frac{\\sqrt{3}}{2} - 2\\cdot\\frac{\\sqrt{3}}{2} = 0",
          "explanation": "Substituting $x=\\tfrac{\\pi}{6}$ gives $2\\sin\\tfrac{\\pi}{3}$ for the second term. Both terms equal $\\sqrt{3}$, so the gradient is $0$; hence $x=\\tfrac{\\pi}{6}$ is a stationary point.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Differentiate again (part c)",
          "workingLatex": "\\frac{d^2y}{dx^2} = -2\\sin x - 4\\cos 2x",
          "explanation": "Differentiating once more: $2\\cos x$ gives $-2\\sin x$, and $-2\\sin 2x$ gives $-4\\cos 2x$. Its sign classifies the point.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the second derivative at x = pi/6",
          "workingLatex": "\\left.\\frac{d^2y}{dx^2}\\right|_{x=\\pi/6} = -2\\sin\\frac{\\pi}{6} - 4\\cos\\frac{\\pi}{3} = -1 - 2 = -3 < 0",
          "explanation": "Using $\\sin\\tfrac{\\pi}{6}=\\tfrac12$ and $\\cos\\tfrac{\\pi}{3}=\\tfrac12$. A negative value means concave down, so $x=\\tfrac{\\pi}{6}$ is a maximum.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the exact stationary value",
          "workingLatex": "y = 2\\sin\\frac{\\pi}{6} + \\cos\\frac{\\pi}{3} = 2\\cdot\\tfrac{1}{2} + \\tfrac{1}{2} = \\tfrac{3}{2}",
          "explanation": "Substituting into the curve: $2\\sin\\tfrac{\\pi}{6}=1$ and $\\cos\\tfrac{\\pi}{3}=\\tfrac12$, giving the exact maximum value $\\tfrac{3}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the maximum point",
          "workingLatex": "\\text{Maximum at } \\left(\\tfrac{\\pi}{6},\\, \\tfrac{3}{2}\\right)",
          "explanation": "So the stationary point at $x=\\tfrac{\\pi}{6}$ is a maximum with height $\\tfrac{3}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Set the derivative to zero for all stationary points (part d)",
          "workingLatex": "2\\cos x - 2\\sin 2x = 0 \\;\\Rightarrow\\; \\cos x - \\sin 2x = 0",
          "explanation": "To find every stationary point in the interval we solve $\\dfrac{dy}{dx}=0$; dividing by $2$ simplifies the equation.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Use the double-angle identity and factorise",
          "workingLatex": "\\cos x - 2\\sin x\\cos x = 0 \\;\\Rightarrow\\; \\cos x(1 - 2\\sin x) = 0",
          "explanation": "Replacing $\\sin 2x$ with $2\\sin x\\cos x$ lets us factor out $\\cos x$, turning one equation into two simpler ones.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Solve each factor in the interval",
          "workingLatex": "\\cos x = 0 \\Rightarrow x = \\tfrac{\\pi}{2}; \\quad \\sin x = \\tfrac{1}{2} \\Rightarrow x = \\tfrac{\\pi}{6},\\, \\tfrac{5\\pi}{6}",
          "explanation": "In $[0,\\pi]$, $\\cos x=0$ gives $x=\\tfrac{\\pi}{2}$, while $\\sin x=\\tfrac12$ gives $x=\\tfrac{\\pi}{6}$ and $x=\\tfrac{5\\pi}{6}$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Find y at x = pi/2",
          "workingLatex": "y = 2\\sin\\frac{\\pi}{2} + \\cos\\pi = 2 - 1 = 1",
          "explanation": "At $x=\\tfrac{\\pi}{2}$: $\\sin\\tfrac{\\pi}{2}=1$ and $\\cos\\pi=-1$, giving the point $\\left(\\tfrac{\\pi}{2},1\\right)$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Find y at x = 5pi/6",
          "workingLatex": "y = 2\\sin\\frac{5\\pi}{6} + \\cos\\frac{5\\pi}{3} = 1 + \\tfrac{1}{2} = \\tfrac{3}{2}",
          "explanation": "Using $\\sin\\tfrac{5\\pi}{6}=\\tfrac12$ and $\\cos\\tfrac{5\\pi}{3}=\\tfrac12$, the point is $\\left(\\tfrac{5\\pi}{6},\\tfrac{3}{2}\\right)$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Classify x = pi/2",
          "workingLatex": "\\left.\\frac{d^2y}{dx^2}\\right|_{x=\\pi/2} = -2\\sin\\frac{\\pi}{2} - 4\\cos\\pi = -2 + 4 = 2 > 0 \\;(\\text{min})",
          "explanation": "Positive second derivative means concave up, so $x=\\tfrac{\\pi}{2}$ is a minimum.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Classify x = 5pi/6",
          "workingLatex": "\\left.\\frac{d^2y}{dx^2}\\right|_{x=5\\pi/6} = -2\\sin\\frac{5\\pi}{6} - 4\\cos\\frac{5\\pi}{3} = -1 - 2 = -3 < 0 \\;(\\text{max})",
          "explanation": "Negative second derivative means concave down, so $x=\\tfrac{5\\pi}{6}$ is a maximum.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Summarise all stationary points",
          "workingLatex": "\\text{Max }\\left(\\tfrac{\\pi}{6},\\tfrac{3}{2}\\right),\\; \\text{Min }\\left(\\tfrac{\\pi}{2},1\\right),\\; \\text{Max }\\left(\\tfrac{5\\pi}{6},\\tfrac{3}{2}\\right)",
          "explanation": "On $[0,\\pi]$ the curve has two equal maxima at height $\\tfrac{3}{2}$ and one minimum at height $1$ between them.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\dfrac{dy}{dx}=2\\cos x-2\\sin 2x$. (b)/(c) $x=\\tfrac{\\pi}{6}$ is a maximum with value $\\tfrac{3}{2}$. (d) Stationary points on $[0,\\pi]$: maxima $\\left(\\tfrac{\\pi}{6},\\tfrac{3}{2}\\right)$ and $\\left(\\tfrac{5\\pi}{6},\\tfrac{3}{2}\\right)$, minimum $\\left(\\tfrac{\\pi}{2},1\\right)$."
    }
  },
  {
    "id": "al.y2.pure.standard-derivatives.q066",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard derivatives",
    "subtopicId": "al.y2.pure.standard-derivatives",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "exact",
    "tags": [
      "standard derivatives",
      "logarithm",
      "increasing decreasing",
      "tangent"
    ],
    "questionText": "The curve $C$ has equation $y = x - \\ln x$, $x>0$.\n(a) Find $\\dfrac{dy}{dx}$.\n(b) Determine the intervals on which $C$ is increasing and decreasing.\n(c) Find the coordinates of the stationary point and determine its nature.\n(d) Show that the tangent to $C$ at $x=e$ passes through the origin.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the standard results",
          "workingLatex": "\\frac{d}{dx}(x) = 1, \\quad \\frac{d}{dx}(\\ln x) = \\frac{1}{x} \\quad (x>0)",
          "explanation": "The derivative of $x$ is $1$, and the standard result for $\\ln x$ is $\\tfrac{1}{x}$, valid only for $x>0$ (the domain of the curve).",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate to find dy/dx (part a)",
          "workingLatex": "\\frac{dy}{dx} = 1 - \\frac{1}{x}",
          "explanation": "Subtracting the derivative of $\\ln x$ from that of $x$ gives the gradient function.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find where the curve is increasing (part b)",
          "workingLatex": "1 - \\frac{1}{x} > 0 \\;\\Rightarrow\\; \\frac{1}{x} < 1 \\;\\Rightarrow\\; x > 1",
          "explanation": "A curve is increasing where its gradient is positive. Since $x>0$, multiplying through keeps the inequality direction, giving $x>1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find where the curve is decreasing",
          "workingLatex": "1 - \\frac{1}{x} < 0 \\;\\Rightarrow\\; 0 < x < 1",
          "explanation": "Where the gradient is negative the curve falls. Combined with the domain $x>0$, this gives $0<x<1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the stationary point (part c)",
          "workingLatex": "1 - \\frac{1}{x} = 0 \\;\\Rightarrow\\; x = 1",
          "explanation": "The turning point sits between the decreasing and increasing regions, where the gradient is zero: this gives $x=1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the y-coordinate",
          "workingLatex": "y = 1 - \\ln 1 = 1 \\;\\Rightarrow\\; (1,\\,1)",
          "explanation": "Since $\\ln 1 = 0$, the height there is $1$, so the stationary point is $(1,1)$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Differentiate again",
          "workingLatex": "\\frac{d^2y}{dx^2} = \\frac{1}{x^2}",
          "explanation": "Writing $-\\tfrac{1}{x}=-x^{-1}$ and differentiating gives $+x^{-2}=\\tfrac{1}{x^2}$. This is always positive.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Classify the stationary point",
          "workingLatex": "\\left.\\frac{d^2y}{dx^2}\\right|_{x=1} = 1 > 0 \\;(\\text{minimum})",
          "explanation": "A positive second derivative confirms a minimum, consistent with the curve decreasing then increasing across $x=1$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the point of contact at x = e (part d)",
          "workingLatex": "x=e:\\; y = e - \\ln e = e - 1 \\;\\Rightarrow\\; (e,\\, e-1)",
          "explanation": "Since $\\ln e = 1$, the curve passes through $(e,\\,e-1)$ at $x=e$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Find the gradient at x = e",
          "workingLatex": "m = 1 - \\frac{1}{e} = \\frac{e-1}{e}",
          "explanation": "Substituting $x=e$ into the gradient function gives the slope of the tangent there.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Write the tangent line",
          "workingLatex": "y - (e-1) = \\frac{e-1}{e}(x - e)",
          "explanation": "Using point-gradient form with the point $(e,\\,e-1)$ and gradient $\\tfrac{e-1}{e}$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Expand and simplify",
          "workingLatex": "y = \\frac{e-1}{e}x - (e-1) + (e-1) = \\frac{e-1}{e}x",
          "explanation": "Expanding the bracket gives $-\\tfrac{e-1}{e}\\cdot e = -(e-1)$, which cancels the $+(e-1)$, leaving a line with no constant term.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Show it passes through the origin",
          "workingLatex": "y = \\frac{e-1}{e}x \\;\\Rightarrow\\; x=0 \\text{ gives } y=0",
          "explanation": "The tangent has zero constant term, so setting $x=0$ gives $y=0$: it passes through the origin, as required.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Summarise",
          "workingLatex": "\\text{Min }(1,1);\\; \\text{inc } x>1,\\; \\text{dec } 0<x<1;\\; \\text{tangent } y=\\tfrac{e-1}{e}x",
          "explanation": "All parts complete: derivative, monotonic intervals, the minimum, and the tangent at $x=e$ through the origin.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\dfrac{dy}{dx}=1-\\dfrac{1}{x}$. (b) Increasing for $x>1$, decreasing for $0<x<1$. (c) Minimum at $(1,1)$. (d) The tangent at $x=e$ is $y=\\dfrac{e-1}{e}\\,x$, which passes through the origin."
    }
  },
  {
    "id": "al.y2.pure.standard-derivatives.q067",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard derivatives",
    "subtopicId": "al.y2.pure.standard-derivatives",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "exact",
    "tags": [
      "standard derivatives",
      "tangent",
      "stationary point",
      "sign test"
    ],
    "questionText": "The curve $C$ has equation $y = \\tan x - 2x$ for $-\\dfrac{\\pi}{2} < x < \\dfrac{\\pi}{2}$, where $x$ is in radians.\n(a) Find $\\dfrac{dy}{dx}$.\n(b) Find the equation of the tangent to $C$ at the origin.\n(c) Find the exact coordinates of the stationary points of $C$ and, using the sign of $\\dfrac{dy}{dx}$, determine the nature of each.\n(d) Find the coordinates of the points on $C$ where the gradient equals $2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the standard results (radians)",
          "workingLatex": "\\frac{d}{dx}(\\tan x) = \\sec^2 x, \\quad \\frac{d}{dx}(2x) = 2",
          "explanation": "For $x$ in radians the derivative of $\\tan x$ is the standard result $\\sec^2 x$, and $2x$ differentiates to $2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate to find dy/dx (part a)",
          "workingLatex": "\\frac{dy}{dx} = \\sec^2 x - 2",
          "explanation": "Subtracting the two derivatives gives the gradient function of the curve.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the tangent at the origin (part b)",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{x=0} = \\sec^2 0 - 2 = 1 - 2 = -1; \\quad (0,0) \\Rightarrow y = -x",
          "explanation": "At $x=0$, $\\sec^2 0 = 1$, so the gradient is $-1$. The curve passes through $(0,\\tan 0 - 0)=(0,0)$, so the tangent is $y=-x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set the derivative to zero (part c)",
          "workingLatex": "\\sec^2 x - 2 = 0 \\;\\Rightarrow\\; \\sec^2 x = 2 \\;\\Rightarrow\\; \\cos^2 x = \\tfrac{1}{2}",
          "explanation": "Stationary points need $\\dfrac{dy}{dx}=0$. Since $\\sec^2 x = \\tfrac{1}{\\cos^2 x}$, the condition becomes $\\cos^2 x=\\tfrac12$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for x in the interval",
          "workingLatex": "\\cos x = \\pm\\frac{1}{\\sqrt{2}} \\;\\Rightarrow\\; x = \\frac{\\pi}{4},\\; -\\frac{\\pi}{4}",
          "explanation": "In $\\left(-\\tfrac{\\pi}{2},\\tfrac{\\pi}{2}\\right)$, $\\cos^2 x=\\tfrac12$ gives $x=\\tfrac{\\pi}{4}$ and $x=-\\tfrac{\\pi}{4}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find y at x = pi/4",
          "workingLatex": "y = \\tan\\frac{\\pi}{4} - 2\\cdot\\frac{\\pi}{4} = 1 - \\frac{\\pi}{2}",
          "explanation": "Using $\\tan\\tfrac{\\pi}{4}=1$ gives the exact height $1-\\tfrac{\\pi}{2}\\approx -0.571$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find y at x = -pi/4",
          "workingLatex": "y = \\tan\\left(-\\frac{\\pi}{4}\\right) + \\frac{\\pi}{2} = -1 + \\frac{\\pi}{2}",
          "explanation": "Using $\\tan\\left(-\\tfrac{\\pi}{4}\\right)=-1$ gives $\\tfrac{\\pi}{2}-1\\approx 0.571$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Choose a classification method",
          "workingLatex": "\\frac{d}{dx}(\\sec^2 x) \\text{ needs the chain rule; use the sign of } \\frac{dy}{dx}",
          "explanation": "Differentiating $\\sec^2 x$ again would require the chain rule, so instead we classify each point by how the sign of $\\dfrac{dy}{dx}$ changes across it.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Sign test around x = pi/4",
          "workingLatex": "x=0:\\; -1<0; \\quad x=\\tfrac{\\pi}{3}:\\; \\sec^2\\tfrac{\\pi}{3} - 2 = 4 - 2 = 2>0 \\;\\Rightarrow\\; \\text{min}",
          "explanation": "Just left of $\\tfrac{\\pi}{4}$ the gradient is negative and just right it is positive, so the curve turns from falling to rising: a minimum.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Sign test around x = -pi/4",
          "workingLatex": "x=-\\tfrac{\\pi}{3}:\\; 4 - 2 = 2>0; \\quad x=0:\\; -1<0 \\;\\Rightarrow\\; \\text{max}",
          "explanation": "Just left of $-\\tfrac{\\pi}{4}$ the gradient is positive and just right it is negative, so the curve turns from rising to falling: a maximum.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the stationary points",
          "workingLatex": "\\text{Min }\\left(\\tfrac{\\pi}{4},\\, 1-\\tfrac{\\pi}{2}\\right), \\quad \\text{Max }\\left(-\\tfrac{\\pi}{4},\\, \\tfrac{\\pi}{2}-1\\right)",
          "explanation": "Collecting the results: a minimum at $x=\\tfrac{\\pi}{4}$ and a maximum at $x=-\\tfrac{\\pi}{4}$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Set the gradient equal to 2 (part d)",
          "workingLatex": "\\sec^2 x - 2 = 2 \\;\\Rightarrow\\; \\sec^2 x = 4 \\;\\Rightarrow\\; \\cos^2 x = \\tfrac{1}{4}",
          "explanation": "We want the points where the tangent has gradient $2$, so we set the gradient function equal to $2$ and simplify.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Solve for x in the interval",
          "workingLatex": "\\cos x = \\pm\\tfrac{1}{2} \\;\\Rightarrow\\; x = \\frac{\\pi}{3},\\; -\\frac{\\pi}{3}",
          "explanation": "In $\\left(-\\tfrac{\\pi}{2},\\tfrac{\\pi}{2}\\right)$, $\\cos^2 x=\\tfrac14$ gives $x=\\pm\\tfrac{\\pi}{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Find the corresponding y-values",
          "workingLatex": "x=\\tfrac{\\pi}{3}:\\; y=\\sqrt{3}-\\tfrac{2\\pi}{3}; \\qquad x=-\\tfrac{\\pi}{3}:\\; y=\\tfrac{2\\pi}{3}-\\sqrt{3}",
          "explanation": "Using $\\tan\\tfrac{\\pi}{3}=\\sqrt{3}$ gives the exact heights, approximately $-0.362$ and $0.362$.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Summarise",
          "workingLatex": "\\text{Tangent } y=-x;\\; \\min\\left(\\tfrac{\\pi}{4},1-\\tfrac{\\pi}{2}\\right),\\, \\max\\left(-\\tfrac{\\pi}{4},\\tfrac{\\pi}{2}-1\\right);\\; \\text{grad }2 \\text{ at } x=\\pm\\tfrac{\\pi}{3}",
          "explanation": "All parts complete: the tangent at the origin, both stationary points classified by sign, and the two points of gradient $2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\dfrac{dy}{dx}=\\sec^2 x-2$. (b) Tangent at the origin: $y=-x$. (c) Minimum at $\\left(\\tfrac{\\pi}{4},1-\\tfrac{\\pi}{2}\\right)$, maximum at $\\left(-\\tfrac{\\pi}{4},\\tfrac{\\pi}{2}-1\\right)$. (d) Gradient $=2$ at $\\left(\\tfrac{\\pi}{3},\\sqrt{3}-\\tfrac{2\\pi}{3}\\right)$ and $\\left(-\\tfrac{\\pi}{3},\\tfrac{2\\pi}{3}-\\sqrt{3}\\right)$."
    }
  },
  {
    "id": "al.y2.pure.standard-derivatives.q068",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard derivatives",
    "subtopicId": "al.y2.pure.standard-derivatives",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "exact",
    "tags": [
      "standard derivatives",
      "exponential base a",
      "stationary point",
      "second derivative"
    ],
    "questionText": "The curve $C$ has equation $y = 2^{x} + 2^{-x}$.\n(a) Find $\\dfrac{dy}{dx}$.\n(b) Find the exact gradient of $C$ at $x=1$.\n(c) Find the coordinates of the stationary point and use the second derivative to determine its nature.\n(d) Determine the intervals on which $C$ is increasing and decreasing.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the standard results",
          "workingLatex": "\\frac{d}{dx}(2^{x}) = 2^{x}\\ln 2, \\quad \\frac{d}{dx}(2^{-x}) = -2^{-x}\\ln 2",
          "explanation": "The standard result $\\dfrac{d}{dx}(a^{x})=a^{x}\\ln a$ gives $2^{x}\\ln 2$. For $2^{-x}$ this is the form $a^{kx}$ with $k=-1$, giving $-2^{-x}\\ln 2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate to find dy/dx (part a)",
          "workingLatex": "\\frac{dy}{dx} = 2^{x}\\ln 2 - 2^{-x}\\ln 2 = (\\ln 2)\\left(2^{x} - 2^{-x}\\right)",
          "explanation": "Adding the term derivatives and factoring out $\\ln 2$ gives a tidy gradient function.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the gradient at x = 1 (part b)",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{x=1} = (\\ln 2)\\left(2 - \\tfrac{1}{2}\\right) = \\tfrac{3}{2}\\ln 2",
          "explanation": "Substituting $x=1$: $2^{1}=2$ and $2^{-1}=\\tfrac12$, so the exact gradient is $\\tfrac{3}{2}\\ln 2\\approx 1.04$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set the derivative to zero (part c)",
          "workingLatex": "(\\ln 2)\\left(2^{x} - 2^{-x}\\right) = 0 \\;\\Rightarrow\\; 2^{x} = 2^{-x}",
          "explanation": "Since $\\ln 2 \\ne 0$, the gradient is zero only when the bracket is zero, i.e. $2^{x}=2^{-x}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for x",
          "workingLatex": "x = -x \\;\\Rightarrow\\; x = 0",
          "explanation": "Equal powers of the same base require equal exponents, so $x=-x$, giving the single solution $x=0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the y-coordinate",
          "workingLatex": "y = 2^{0} + 2^{0} = 1 + 1 = 2 \\;\\Rightarrow\\; (0,\\,2)",
          "explanation": "At $x=0$ both terms equal $1$, so the stationary point is $(0,2)$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Differentiate again",
          "workingLatex": "\\frac{d^2y}{dx^2} = (\\ln 2)^2\\left(2^{x} + 2^{-x}\\right)",
          "explanation": "Differentiating $(\\ln 2)(2^{x}-2^{-x})$: each term brings down another $\\ln 2$, and $-2^{-x}$ becomes $+2^{-x}$, giving $(\\ln 2)^2(2^{x}+2^{-x})$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Evaluate the second derivative",
          "workingLatex": "\\left.\\frac{d^2y}{dx^2}\\right|_{x=0} = (\\ln 2)^2(1+1) = 2(\\ln 2)^2 > 0",
          "explanation": "This is positive, so the curve is concave up at $x=0$: the stationary point is a minimum.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the stationary point",
          "workingLatex": "\\text{Minimum at } (0,\\,2)",
          "explanation": "So the curve has a single minimum turning point at $(0,2)$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Consider the sign of the gradient (part d)",
          "workingLatex": "\\text{sign of } \\frac{dy}{dx} = \\text{sign of } \\left(2^{x} - 2^{-x}\\right) \\quad (\\ln 2 > 0)",
          "explanation": "Because $\\ln 2$ is positive, the sign of the gradient is controlled entirely by the bracket $2^{x}-2^{-x}$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Find where the curve is increasing",
          "workingLatex": "2^{x} > 2^{-x} \\iff x > -x \\iff x > 0",
          "explanation": "The gradient is positive, so the curve increases, exactly when $x>0$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Find where the curve is decreasing",
          "workingLatex": "2^{x} < 2^{-x} \\iff x < 0",
          "explanation": "By the same reasoning the gradient is negative, so the curve decreases, when $x<0$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Note the symmetry",
          "workingLatex": "y(-x) = 2^{-x} + 2^{x} = y(x)",
          "explanation": "Replacing $x$ by $-x$ leaves the equation unchanged, so the curve is even (symmetric about the $y$-axis), consistent with a minimum sitting on that axis.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Summarise",
          "workingLatex": "\\frac{dy}{dx} = (\\ln 2)(2^{x}-2^{-x}),\\; m|_{1}=\\tfrac{3}{2}\\ln 2,\\; \\min(0,2),\\; \\text{inc } x>0",
          "explanation": "All parts complete: the derivative, the gradient at $x=1$, the minimum, and the increasing/decreasing intervals.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\dfrac{dy}{dx}=(\\ln 2)\\left(2^{x}-2^{-x}\\right)$. (b) Gradient $=\\tfrac{3}{2}\\ln 2$. (c) Minimum at $(0,2)$. (d) Increasing for $x>0$, decreasing for $x<0$."
    }
  },
  {
    "id": "al.y2.pure.standard-derivatives.q069",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard derivatives",
    "subtopicId": "al.y2.pure.standard-derivatives",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "exact",
    "tags": [
      "standard derivatives",
      "logarithm",
      "stationary point",
      "tangent area"
    ],
    "questionText": "The curve $C$ has equation $y = x^2 - 8\\ln x$, $x>0$.\n(a) Find $\\dfrac{dy}{dx}$.\n(b) Find the gradient of $C$ at $x=1$.\n(c) Find the exact coordinates of the stationary point and determine its nature.\n(d) The tangent to $C$ at $x=1$ meets the coordinate axes at two points. Find the area of the triangle formed by this tangent and the axes.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the standard results",
          "workingLatex": "\\frac{d}{dx}(x^2) = 2x, \\quad \\frac{d}{dx}(8\\ln x) = \\frac{8}{x} \\quad (x>0)",
          "explanation": "The power rule gives $2x$, and the standard result for $\\ln x$ scaled by $8$ gives $\\tfrac{8}{x}$, valid for $x>0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate to find dy/dx (part a)",
          "workingLatex": "\\frac{dy}{dx} = 2x - \\frac{8}{x}",
          "explanation": "Subtracting the derivative of $8\\ln x$ from that of $x^2$ gives the gradient function.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the gradient at x = 1 (part b)",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{x=1} = 2(1) - \\frac{8}{1} = 2 - 8 = -6",
          "explanation": "Substituting $x=1$ gives a gradient of $-6$; this slope will be reused for the tangent in part (d).",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set the derivative to zero (part c)",
          "workingLatex": "2x - \\frac{8}{x} = 0 \\;\\Rightarrow\\; 2x = \\frac{8}{x} \\;\\Rightarrow\\; x^2 = 4",
          "explanation": "Stationary points need $\\dfrac{dy}{dx}=0$. Multiplying through by $x$ turns this into a simple quadratic.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for x in the domain",
          "workingLatex": "x = 2 \\quad (x>0)",
          "explanation": "$x^2=4$ gives $x=\\pm 2$, but the domain is $x>0$, so only $x=2$ is valid.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the y-coordinate",
          "workingLatex": "y = 2^2 - 8\\ln 2 = 4 - 8\\ln 2",
          "explanation": "Substituting into the curve gives the exact height $4 - 8\\ln 2 \\approx -1.545$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Differentiate again",
          "workingLatex": "\\frac{d^2y}{dx^2} = 2 + \\frac{8}{x^2}",
          "explanation": "Differentiating $2x - 8x^{-1}$ gives $2 + 8x^{-2} = 2 + \\tfrac{8}{x^2}$, which is positive for every $x$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Classify the stationary point",
          "workingLatex": "\\left.\\frac{d^2y}{dx^2}\\right|_{x=2} = 2 + \\frac{8}{4} = 2 + 2 = 4 > 0 \\;(\\text{minimum})",
          "explanation": "A positive second derivative confirms the point $(2,\\,4-8\\ln 2)$ is a minimum.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the point of contact at x = 1 (part d)",
          "workingLatex": "x=1:\\; y = 1^2 - 8\\ln 1 = 1 \\;\\Rightarrow\\; (1,\\,1)",
          "explanation": "Since $\\ln 1 = 0$, the curve passes through $(1,1)$, and from part (b) the gradient there is $-6$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Write the tangent line",
          "workingLatex": "y - 1 = -6(x - 1) \\;\\Rightarrow\\; y = 7 - 6x",
          "explanation": "Point-gradient form with $(1,1)$ and $m=-6$; expanding gives $y=7-6x$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Find the x-intercept of the tangent",
          "workingLatex": "y = 0:\\; 0 = 7 - 6x \\;\\Rightarrow\\; x = \\tfrac{7}{6} \\;\\Rightarrow\\; \\left(\\tfrac{7}{6},\\,0\\right)",
          "explanation": "Setting $y=0$ locates where the tangent crosses the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Find the y-intercept of the tangent",
          "workingLatex": "x = 0:\\; y = 7 \\;\\Rightarrow\\; (0,\\,7)",
          "explanation": "Setting $x=0$ gives the crossing of the $y$-axis. These two intercepts and the origin form a right-angled triangle.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Find the area of the triangle",
          "workingLatex": "A = \\tfrac{1}{2} \\times \\tfrac{7}{6} \\times 7 = \\tfrac{49}{12}",
          "explanation": "The legs of the right triangle are the intercept lengths $\\tfrac{7}{6}$ and $7$, so the area is $\\tfrac12\\times\\tfrac{7}{6}\\times 7 = \\tfrac{49}{12}\\approx 4.08$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Summarise",
          "workingLatex": "\\min\\left(2, 4-8\\ln 2\\right);\\quad \\text{tangent } y=7-6x;\\quad A = \\tfrac{49}{12}",
          "explanation": "All parts complete: the derivative, the gradient at $x=1$, the minimum, and the triangle area $\\tfrac{49}{12}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\dfrac{dy}{dx}=2x-\\dfrac{8}{x}$. (b) Gradient $=-6$. (c) Minimum at $(2,\\;4-8\\ln 2)$. (d) The tangent $y=7-6x$ forms a triangle of area $\\dfrac{49}{12}$ with the axes."
    }
  },
  {
    "id": "al.y2.pure.standard-derivatives.q070",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Standard derivatives",
    "subtopicId": "al.y2.pure.standard-derivatives",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "exact",
    "tags": [
      "standard derivatives",
      "exponential",
      "tangent",
      "through origin"
    ],
    "questionText": "A curve has equation $y = e^{x}$.\n(a) Write down $\\dfrac{dy}{dx}$ and hence the gradient of the curve at the point where $x=a$.\n(b) Find the equation of the tangent to the curve at the point where $x=a$, in terms of $a$.\n(c) Show that there is exactly one tangent to the curve that passes through the origin, and find its equation.\n(d) Find the equation of the tangent to the curve that is parallel to the line $y = e^{3}x$, and the point where this tangent meets the $x$-axis.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate and state the gradient at x = a (part a)",
          "workingLatex": "\\frac{dy}{dx} = e^{x}; \\quad \\text{gradient at } x=a \\text{ is } e^{a}",
          "explanation": "The derivative of $e^{x}$ is itself, so the gradient at any point $x=a$ is $e^{a}$ — the same as the height there.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the point of contact",
          "workingLatex": "\\text{At } x=a:\\; (a,\\, e^{a})",
          "explanation": "The tangent touches the curve at $x=a$, where the height is $e^{a}$, giving the point $(a,\\,e^{a})$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the general tangent (part b)",
          "workingLatex": "y - e^{a} = e^{a}(x - a)",
          "explanation": "Using point-gradient form with point $(a,\\,e^{a})$ and gradient $e^{a}$ gives the tangent in terms of $a$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Impose passing through the origin (part c)",
          "workingLatex": "0 - e^{a} = e^{a}(0 - a) \\;\\Rightarrow\\; -e^{a} = -a e^{a}",
          "explanation": "A tangent through the origin must satisfy the equation when $(x,y)=(0,0)$; substituting gives a condition on $a$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for a",
          "workingLatex": "1 = a \\;\\Rightarrow\\; a = 1",
          "explanation": "Dividing both sides by $-e^{a}$ (never zero, since $e^{a}>0$) leaves $1=a$, the only solution.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the tangent at a = 1",
          "workingLatex": "(1,\\, e); \\quad y - e = e(x - 1)",
          "explanation": "The point of contact is $(1,\\,e)$ with gradient $e$, giving this tangent line.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify the tangent",
          "workingLatex": "y = ex - e + e = ex",
          "explanation": "Expanding, the $-e$ and $+e$ cancel, leaving the clean line $y=ex$ with no constant term.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify it passes through the origin",
          "workingLatex": "y = ex:\\; x=0 \\Rightarrow y=0; \\quad \\text{gradient } e = e^{1} \\;\\checkmark",
          "explanation": "The line $y=ex$ has zero constant term, so it passes through $(0,0)$, and its gradient $e$ matches $e^{a}$ at $a=1$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Confirm uniqueness",
          "workingLatex": "a = 1 \\text{ is the only solution } \\Rightarrow \\text{exactly one such tangent}",
          "explanation": "Since the condition gave a single value $a=1$, there is exactly one tangent to the curve through the origin, as required.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Set the gradient parallel to y = e^3 x (part d)",
          "workingLatex": "e^{a} = e^{3} \\;\\Rightarrow\\; a = 3",
          "explanation": "Parallel lines share a gradient. The line $y=e^{3}x$ has gradient $e^{3}$, so we need $e^{a}=e^{3}$, giving $a=3$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Write the tangent at a = 3",
          "workingLatex": "(3,\\, e^{3}); \\quad y - e^{3} = e^{3}(x - 3)",
          "explanation": "The point of contact is $(3,\\,e^{3})$ with gradient $e^{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Simplify the tangent",
          "workingLatex": "y = e^{3}x - 3e^{3} + e^{3} = e^{3}(x - 2)",
          "explanation": "Expanding gives $y=e^{3}x - 2e^{3}$, which factors neatly as $e^{3}(x-2)$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Find where it meets the x-axis",
          "workingLatex": "y = 0:\\; e^{3}(x-2) = 0 \\;\\Rightarrow\\; x = 2 \\;\\Rightarrow\\; (2,\\,0)",
          "explanation": "Since $e^{3}\\ne 0$, the tangent crosses the $x$-axis where $x-2=0$, at $(2,0)$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Summarise",
          "workingLatex": "\\text{Through origin: } y = ex \\text{ at } (1,e); \\quad \\parallel y=e^{3}x: \\; y=e^{3}(x-2),\\; (2,0)",
          "explanation": "All parts complete: the general tangent, the unique tangent through the origin, and the tangent parallel to $y=e^{3}x$ with its $x$-axis crossing.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\dfrac{dy}{dx}=e^{x}$, gradient $e^{a}$. (b) $y-e^{a}=e^{a}(x-a)$. (c) The only tangent through the origin is $y=ex$ (contact at $(1,e)$). (d) The tangent parallel to $y=e^{3}x$ is $y=e^{3}(x-2)$, meeting the $x$-axis at $(2,0)$."
    }
  }
];
