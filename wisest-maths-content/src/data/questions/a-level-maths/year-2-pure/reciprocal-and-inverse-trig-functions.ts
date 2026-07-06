import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q001",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "expression",
    "tags": ["reciprocal trig", "secant", "definition"],
    "questionText": "Write down the definition of $\\sec\\theta$ in terms of $\\cos\\theta$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall what 'reciprocal function' means",
          "workingLatex": "\\text{reciprocal of } x = \\frac{1}{x}",
          "explanation": "The three reciprocal trig functions are just 'one over' one of the usual functions. Fixing this idea first makes all three definitions easy to reconstruct.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Match secant to cosine",
          "workingLatex": "\\sec\\theta \\leftrightarrow \\cos\\theta",
          "explanation": "A useful memory aid: the third letter of each reciprocal name points to its partner. Se(c)ant pairs with (c)osine, so secant is built from cosine.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the definition",
          "workingLatex": "\\sec\\theta = \\frac{1}{\\cos\\theta}",
          "explanation": "Taking one over cosine gives the secant. This is valid wherever $\\cos\\theta \\neq 0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Note where it is undefined",
          "workingLatex": "\\cos\\theta = 0 \\;\\Rightarrow\\; \\sec\\theta \\text{ undefined}",
          "explanation": "Because we cannot divide by zero, secant has no value wherever cosine is zero, for example at $\\theta = 90^\\circ$. This is worth stating so later graphs and equations make sense.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the final result",
          "workingLatex": "\\sec\\theta = \\frac{1}{\\cos\\theta}",
          "explanation": "This is the required definition.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sec\\theta = \\dfrac{1}{\\cos\\theta}$"
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q002",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "expression",
    "tags": ["reciprocal trig", "cosecant", "definition"],
    "questionText": "Write down the definition of $\\operatorname{cosec}\\theta$ in terms of $\\sin\\theta$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the reciprocal idea",
          "workingLatex": "\\text{reciprocal of } x = \\frac{1}{x}",
          "explanation": "Each reciprocal trig function is 'one over' a standard function, so we just need to identify which standard function cosecant partners with.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Match cosecant to sine",
          "workingLatex": "\\operatorname{cosec}\\theta \\leftrightarrow \\sin\\theta",
          "explanation": "Using the 'third letter' aid: co(s)ecant pairs with (s)ine. So cosecant is built from sine.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the definition",
          "workingLatex": "\\operatorname{cosec}\\theta = \\frac{1}{\\sin\\theta}",
          "explanation": "One over sine gives the cosecant, valid wherever $\\sin\\theta \\neq 0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Note where it is undefined",
          "workingLatex": "\\sin\\theta = 0 \\;\\Rightarrow\\; \\operatorname{cosec}\\theta \\text{ undefined}",
          "explanation": "Cosecant has no value where sine is zero, for example at $\\theta = 0^\\circ$ and $\\theta = 180^\\circ$, because we cannot divide by zero.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the final result",
          "workingLatex": "\\operatorname{cosec}\\theta = \\frac{1}{\\sin\\theta}",
          "explanation": "This is the required definition.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\operatorname{cosec}\\theta = \\dfrac{1}{\\sin\\theta}$"
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q003",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["reciprocal trig", "cotangent", "definition"],
    "questionText": "Write down two equivalent expressions for $\\cot\\theta$: one in terms of $\\tan\\theta$, and one in terms of $\\sin\\theta$ and $\\cos\\theta$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Match cotangent to tangent",
          "workingLatex": "\\cot\\theta \\leftrightarrow \\tan\\theta",
          "explanation": "Cotangent is the reciprocal of tangent, so the first form comes straight from 'one over tangent'.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the first form",
          "workingLatex": "\\cot\\theta = \\frac{1}{\\tan\\theta}",
          "explanation": "This is valid wherever $\\tan\\theta$ is defined and non-zero.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall the definition of tangent",
          "workingLatex": "\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta}",
          "explanation": "Tangent itself is sine over cosine, so its reciprocal simply flips this fraction.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Take the reciprocal",
          "workingLatex": "\\cot\\theta = \\frac{1}{\\tan\\theta} = \\frac{\\cos\\theta}{\\sin\\theta}",
          "explanation": "Flipping $\\dfrac{\\sin\\theta}{\\cos\\theta}$ gives $\\dfrac{\\cos\\theta}{\\sin\\theta}$. This second form is often the more useful one in proofs.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State both results",
          "workingLatex": "\\cot\\theta = \\frac{1}{\\tan\\theta} = \\frac{\\cos\\theta}{\\sin\\theta}",
          "explanation": "Both expressions describe the same function and are the required answers.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\cot\\theta = \\dfrac{1}{\\tan\\theta} = \\dfrac{\\cos\\theta}{\\sin\\theta}$"
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q004",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "exact value",
    "tags": ["reciprocal trig", "secant", "exact values"],
    "questionText": "Find the exact value of $\\sec 60^\\circ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Use the definition of secant",
          "workingLatex": "\\sec 60^\\circ = \\frac{1}{\\cos 60^\\circ}",
          "explanation": "Secant is one over cosine, so we first need the exact value of $\\cos 60^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the exact cosine",
          "workingLatex": "\\cos 60^\\circ = \\frac{1}{2}",
          "explanation": "This is a standard exact value from the special angles, worth memorising.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute",
          "workingLatex": "\\sec 60^\\circ = \\frac{1}{\\tfrac{1}{2}}",
          "explanation": "Replacing $\\cos 60^\\circ$ with $\\tfrac{1}{2}$ turns the problem into a simple reciprocal of a fraction.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the reciprocal",
          "workingLatex": "\\frac{1}{\\tfrac{1}{2}} = 2",
          "explanation": "Dividing $1$ by $\\tfrac{1}{2}$ is the same as multiplying by $2$, giving the exact answer.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the result",
          "workingLatex": "\\sec 60^\\circ = 2",
          "explanation": "This is the required exact value.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sec 60^\\circ = 2$"
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q005",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "exact value",
    "tags": ["reciprocal trig", "cosecant", "exact values"],
    "questionText": "Find the exact value of $\\operatorname{cosec} 30^\\circ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Use the definition of cosecant",
          "workingLatex": "\\operatorname{cosec} 30^\\circ = \\frac{1}{\\sin 30^\\circ}",
          "explanation": "Cosecant is one over sine, so we need $\\sin 30^\\circ$ first.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the exact sine",
          "workingLatex": "\\sin 30^\\circ = \\frac{1}{2}",
          "explanation": "This is a standard special-angle value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute",
          "workingLatex": "\\operatorname{cosec} 30^\\circ = \\frac{1}{\\tfrac{1}{2}}",
          "explanation": "Replacing sine with its exact value leaves a reciprocal of a half.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify",
          "workingLatex": "\\frac{1}{\\tfrac{1}{2}} = 2",
          "explanation": "One over a half is two, giving the exact value.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the result",
          "workingLatex": "\\operatorname{cosec} 30^\\circ = 2",
          "explanation": "This is the required exact value.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\operatorname{cosec} 30^\\circ = 2$"
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q006",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "exact value",
    "tags": ["reciprocal trig", "cotangent", "exact values"],
    "questionText": "Find the exact value of $\\cot 30^\\circ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Use the definition of cotangent",
          "workingLatex": "\\cot 30^\\circ = \\frac{1}{\\tan 30^\\circ}",
          "explanation": "Cotangent is one over tangent, so we begin with the exact value of $\\tan 30^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the exact tangent",
          "workingLatex": "\\tan 30^\\circ = \\frac{1}{\\sqrt{3}}",
          "explanation": "This is the standard special-angle value for tangent.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Take the reciprocal",
          "workingLatex": "\\cot 30^\\circ = \\frac{1}{\\tfrac{1}{\\sqrt{3}}} = \\sqrt{3}",
          "explanation": "Flipping $\\tfrac{1}{\\sqrt3}$ gives $\\sqrt3$ directly.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the result",
          "workingLatex": "\\cot 30^\\circ = \\sqrt{3}",
          "explanation": "This is the required exact value, already in simplest surd form.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\cot 30^\\circ = \\sqrt{3}$"
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q007",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "exact value",
    "tags": ["reciprocal trig", "secant", "rationalising"],
    "questionText": "Find the exact value of $\\sec 45^\\circ$, giving your answer with a rational denominator.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Use the definition of secant",
          "workingLatex": "\\sec 45^\\circ = \\frac{1}{\\cos 45^\\circ}",
          "explanation": "Secant is one over cosine, so we start from $\\cos 45^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the exact cosine",
          "workingLatex": "\\cos 45^\\circ = \\frac{\\sqrt{2}}{2}",
          "explanation": "This is the standard exact value; equivalently it is $\\tfrac{1}{\\sqrt2}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Take the reciprocal",
          "workingLatex": "\\sec 45^\\circ = \\frac{1}{\\tfrac{\\sqrt2}{2}} = \\frac{2}{\\sqrt{2}}",
          "explanation": "Flipping the fraction $\\tfrac{\\sqrt2}{2}$ gives $\\tfrac{2}{\\sqrt2}$, which still has a surd on the bottom.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rationalise the denominator",
          "workingLatex": "\\frac{2}{\\sqrt{2}} \\times \\frac{\\sqrt{2}}{\\sqrt{2}} = \\frac{2\\sqrt{2}}{2}",
          "explanation": "Multiplying top and bottom by $\\sqrt2$ removes the surd from the denominator without changing the value.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "\\frac{2\\sqrt{2}}{2} = \\sqrt{2}",
          "explanation": "The factor of $2$ cancels, leaving a clean surd answer.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the result",
          "workingLatex": "\\sec 45^\\circ = \\sqrt{2}",
          "explanation": "This is the required exact value with a rational denominator.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sec 45^\\circ = \\sqrt{2}$"
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q008",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "exact value",
    "tags": ["reciprocal trig", "cosecant", "rationalising"],
    "questionText": "Find the exact value of $\\operatorname{cosec} 60^\\circ$, giving your answer with a rational denominator.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Use the definition of cosecant",
          "workingLatex": "\\operatorname{cosec} 60^\\circ = \\frac{1}{\\sin 60^\\circ}",
          "explanation": "Cosecant is one over sine, so we begin with $\\sin 60^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the exact sine",
          "workingLatex": "\\sin 60^\\circ = \\frac{\\sqrt{3}}{2}",
          "explanation": "A standard special-angle value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Take the reciprocal",
          "workingLatex": "\\operatorname{cosec} 60^\\circ = \\frac{2}{\\sqrt{3}}",
          "explanation": "Flipping $\\tfrac{\\sqrt3}{2}$ gives $\\tfrac{2}{\\sqrt3}$, which has a surd denominator.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rationalise the denominator",
          "workingLatex": "\\frac{2}{\\sqrt{3}} \\times \\frac{\\sqrt{3}}{\\sqrt{3}} = \\frac{2\\sqrt{3}}{3}",
          "explanation": "Multiplying top and bottom by $\\sqrt3$ clears the surd from the denominator.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the result",
          "workingLatex": "\\operatorname{cosec} 60^\\circ = \\frac{2\\sqrt{3}}{3}",
          "explanation": "This is the required exact value with a rational denominator.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\operatorname{cosec} 60^\\circ = \\dfrac{2\\sqrt{3}}{3}$"
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q009",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "exact value",
    "tags": ["reciprocal trig", "cotangent", "radians"],
    "questionText": "Find the exact value of $\\cot\\dfrac{\\pi}{4}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the angle",
          "workingLatex": "\\frac{\\pi}{4} = 45^\\circ",
          "explanation": "It helps to recognise $\\tfrac{\\pi}{4}$ radians as $45^\\circ$, a familiar special angle.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Use the definition of cotangent",
          "workingLatex": "\\cot\\frac{\\pi}{4} = \\frac{1}{\\tan\\frac{\\pi}{4}}",
          "explanation": "Cotangent is one over tangent, so we need $\\tan\\tfrac{\\pi}{4}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall the exact tangent",
          "workingLatex": "\\tan\\frac{\\pi}{4} = 1",
          "explanation": "At $45^\\circ$ the tangent equals exactly $1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Take the reciprocal",
          "workingLatex": "\\cot\\frac{\\pi}{4} = \\frac{1}{1} = 1",
          "explanation": "One over one is one, so cotangent also equals $1$ here.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the result",
          "workingLatex": "\\cot\\frac{\\pi}{4} = 1",
          "explanation": "This is the required exact value.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\cot\\dfrac{\\pi}{4} = 1$"
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q010",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "exact value",
    "tags": ["reciprocal trig", "secant", "radians"],
    "questionText": "Find the exact value of $\\sec\\dfrac{\\pi}{3}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the angle",
          "workingLatex": "\\frac{\\pi}{3} = 60^\\circ",
          "explanation": "Recognising $\\tfrac{\\pi}{3}$ as $60^\\circ$ lets us use familiar exact values.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Use the definition of secant",
          "workingLatex": "\\sec\\frac{\\pi}{3} = \\frac{1}{\\cos\\frac{\\pi}{3}}",
          "explanation": "Secant is one over cosine.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall the exact cosine",
          "workingLatex": "\\cos\\frac{\\pi}{3} = \\frac{1}{2}",
          "explanation": "The cosine of $60^\\circ$ is a half.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Take the reciprocal",
          "workingLatex": "\\sec\\frac{\\pi}{3} = \\frac{1}{\\tfrac{1}{2}} = 2",
          "explanation": "One over a half is two.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the result",
          "workingLatex": "\\sec\\frac{\\pi}{3} = 2",
          "explanation": "This is the required exact value.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sec\\dfrac{\\pi}{3} = 2$"
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q011",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "exact value",
    "tags": ["reciprocal trig", "secant", "exact values"],
    "questionText": "Find the exact value of $\\sec 0^\\circ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Use the definition of secant",
          "workingLatex": "\\sec 0^\\circ = \\frac{1}{\\cos 0^\\circ}",
          "explanation": "Secant is one over cosine, so we begin with $\\cos 0^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the cosine of zero",
          "workingLatex": "\\cos 0^\\circ = 1",
          "explanation": "At $0^\\circ$ the cosine is at its maximum value of $1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute",
          "workingLatex": "\\sec 0^\\circ = \\frac{1}{1}",
          "explanation": "Replacing cosine with $1$ leaves one over one.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify",
          "workingLatex": "\\frac{1}{1} = 1",
          "explanation": "The reciprocal of $1$ is simply $1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Sense-check against the graph",
          "workingLatex": "\\sec\\theta \\ge 1 \\text{ near } \\theta = 0",
          "explanation": "The secant curve has a minimum of $1$ where cosine peaks, so a value of exactly $1$ at $0^\\circ$ is exactly what we expect.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the result",
          "workingLatex": "\\sec 0^\\circ = 1",
          "explanation": "This is the required exact value.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sec 0^\\circ = 1$"
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q012",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "exact value",
    "tags": ["reciprocal trig", "cosecant", "exact values"],
    "questionText": "Find the exact value of $\\operatorname{cosec} 90^\\circ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Use the definition of cosecant",
          "workingLatex": "\\operatorname{cosec} 90^\\circ = \\frac{1}{\\sin 90^\\circ}",
          "explanation": "Cosecant is one over sine, so we start from $\\sin 90^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the sine of ninety degrees",
          "workingLatex": "\\sin 90^\\circ = 1",
          "explanation": "Sine reaches its maximum value of $1$ at $90^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute",
          "workingLatex": "\\operatorname{cosec} 90^\\circ = \\frac{1}{1}",
          "explanation": "Replacing sine with $1$ gives one over one.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify",
          "workingLatex": "\\frac{1}{1} = 1",
          "explanation": "The reciprocal of $1$ is $1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Sense-check against the graph",
          "workingLatex": "\\operatorname{cosec}\\theta \\ge 1 \\text{ near } \\theta = 90^\\circ",
          "explanation": "The cosecant curve dips to a minimum of $1$ where sine peaks, confirming the value of $1$ at $90^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the result",
          "workingLatex": "\\operatorname{cosec} 90^\\circ = 1",
          "explanation": "This is the required exact value.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\operatorname{cosec} 90^\\circ = 1$"
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q013",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "exact value",
    "tags": ["reciprocal trig", "cotangent", "rationalising"],
    "questionText": "Find the exact value of $\\cot 60^\\circ$, giving your answer with a rational denominator.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Use the definition of cotangent",
          "workingLatex": "\\cot 60^\\circ = \\frac{1}{\\tan 60^\\circ}",
          "explanation": "Cotangent is one over tangent, so we begin with $\\tan 60^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the exact tangent",
          "workingLatex": "\\tan 60^\\circ = \\sqrt{3}",
          "explanation": "This is a standard special-angle value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Take the reciprocal",
          "workingLatex": "\\cot 60^\\circ = \\frac{1}{\\sqrt{3}}",
          "explanation": "One over $\\sqrt3$ still has a surd in the denominator, so we tidy it next.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rationalise the denominator",
          "workingLatex": "\\frac{1}{\\sqrt{3}} \\times \\frac{\\sqrt{3}}{\\sqrt{3}} = \\frac{\\sqrt{3}}{3}",
          "explanation": "Multiplying top and bottom by $\\sqrt3$ removes the surd from the denominator.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Cross-check with cotangent as cos over sin",
          "workingLatex": "\\cot 60^\\circ = \\frac{\\cos 60^\\circ}{\\sin 60^\\circ} = \\frac{\\tfrac12}{\\tfrac{\\sqrt3}{2}} = \\frac{1}{\\sqrt3}",
          "explanation": "Using the alternative form $\\cot\\theta = \\tfrac{\\cos\\theta}{\\sin\\theta}$ gives the same result, a reassuring check.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the result",
          "workingLatex": "\\cot 60^\\circ = \\frac{\\sqrt{3}}{3}",
          "explanation": "This is the required exact value with a rational denominator.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\cot 60^\\circ = \\dfrac{\\sqrt{3}}{3}$"
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q014",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["identities", "secant", "Pythagorean identity"],
    "questionText": "Write down the Pythagorean identity that connects $\\tan\\theta$ and $\\sec\\theta$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Start from the fundamental identity",
          "workingLatex": "\\sin^2\\theta + \\cos^2\\theta = 1",
          "explanation": "Every reciprocal identity in this topic grows out of this one core Pythagorean identity.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Divide through by cos squared",
          "workingLatex": "\\frac{\\sin^2\\theta}{\\cos^2\\theta} + \\frac{\\cos^2\\theta}{\\cos^2\\theta} = \\frac{1}{\\cos^2\\theta}",
          "explanation": "Choosing to divide by $\\cos^2\\theta$ is deliberate: it will create $\\tan$ and $\\sec$ terms, which is exactly what the question asks for.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify each term",
          "workingLatex": "\\tan^2\\theta + 1 = \\sec^2\\theta",
          "explanation": "The first term becomes $\\tan^2\\theta$, the second becomes $1$, and the right-hand side becomes $\\sec^2\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write in the usual order",
          "workingLatex": "1 + \\tan^2\\theta = \\sec^2\\theta",
          "explanation": "It is conventional to lead with the $1$, matching how the identity appears in the formula book.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Note the natural companion",
          "workingLatex": "1 + \\cot^2\\theta = \\operatorname{cosec}^2\\theta",
          "explanation": "Dividing the same starting identity by $\\sin^2\\theta$ instead gives the partner identity, worth recalling together.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the required identity",
          "workingLatex": "1 + \\tan^2\\theta = \\sec^2\\theta",
          "explanation": "This is the identity linking tangent and secant.",
          "diagram": null
        }
      ],
      "finalAnswer": "$1 + \\tan^2\\theta = \\sec^2\\theta$"
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q015",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["identities", "cotangent", "Pythagorean identity"],
    "questionText": "Write down the Pythagorean identity that connects $\\cot\\theta$ and $\\operatorname{cosec}\\theta$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Start from the fundamental identity",
          "workingLatex": "\\sin^2\\theta + \\cos^2\\theta = 1",
          "explanation": "As before, we begin from the core Pythagorean identity.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Divide through by sin squared",
          "workingLatex": "\\frac{\\sin^2\\theta}{\\sin^2\\theta} + \\frac{\\cos^2\\theta}{\\sin^2\\theta} = \\frac{1}{\\sin^2\\theta}",
          "explanation": "Dividing by $\\sin^2\\theta$ this time will produce $\\cot$ and $\\operatorname{cosec}$ terms.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify each term",
          "workingLatex": "1 + \\cot^2\\theta = \\operatorname{cosec}^2\\theta",
          "explanation": "The first term is $1$, the second is $\\cot^2\\theta$, and the right-hand side is $\\operatorname{cosec}^2\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Confirm the structure",
          "workingLatex": "\\cot\\theta = \\frac{\\cos\\theta}{\\sin\\theta}, \\quad \\operatorname{cosec}\\theta = \\frac{1}{\\sin\\theta}",
          "explanation": "Checking the definitions confirms the middle and right terms are exactly $\\cot^2\\theta$ and $\\operatorname{cosec}^2\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Note the companion identity",
          "workingLatex": "1 + \\tan^2\\theta = \\sec^2\\theta",
          "explanation": "This is the partner identity, obtained by dividing by $\\cos^2\\theta$ instead.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the required identity",
          "workingLatex": "1 + \\cot^2\\theta = \\operatorname{cosec}^2\\theta",
          "explanation": "This is the identity linking cotangent and cosecant.",
          "diagram": null
        }
      ],
      "finalAnswer": "$1 + \\cot^2\\theta = \\operatorname{cosec}^2\\theta$"
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q016",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "interval",
    "tags": ["inverse trig", "arcsin", "range"],
    "questionText": "State the range of the principal-value inverse function $\\arcsin x$, giving your answer in radians.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall why a restriction is needed",
          "workingLatex": "\\sin\\theta \\text{ is many-to-one}",
          "explanation": "Sine repeats, so infinitely many angles share the same sine. To make an inverse function we must restrict sine to a stretch where it takes each value exactly once.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose the principal domain of sine",
          "workingLatex": "-\\frac{\\pi}{2} \\le \\theta \\le \\frac{\\pi}{2}",
          "explanation": "On this interval sine rises steadily from $-1$ to $1$, hitting every output once, which makes it invertible.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Swap roles for the inverse",
          "workingLatex": "y = \\arcsin x \\iff x = \\sin y",
          "explanation": "The inverse undoes sine, so the output angle $y$ of $\\arcsin$ lives in the restricted domain we just chose.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Read off the range",
          "workingLatex": "-\\frac{\\pi}{2} \\le \\arcsin x \\le \\frac{\\pi}{2}",
          "explanation": "The set of possible output angles becomes the range of the inverse function.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Note the domain for completeness",
          "workingLatex": "-1 \\le x \\le 1",
          "explanation": "Since sine only produces outputs between $-1$ and $1$, the inverse only accepts inputs in that interval.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the range",
          "workingLatex": "\\arcsin x \\in \\left[-\\tfrac{\\pi}{2}, \\tfrac{\\pi}{2}\\right]",
          "explanation": "This closed interval is the required range.",
          "diagram": null
        }
      ],
      "finalAnswer": "$-\\dfrac{\\pi}{2} \\le \\arcsin x \\le \\dfrac{\\pi}{2}$"
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q017",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "interval",
    "tags": ["inverse trig", "arccos", "range"],
    "questionText": "State the range of the principal-value inverse function $\\arccos x$, giving your answer in radians.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall why a restriction is needed",
          "workingLatex": "\\cos\\theta \\text{ is many-to-one}",
          "explanation": "Like sine, cosine repeats, so we must restrict it to a stretch where each output occurs once before we can invert it.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose the principal domain of cosine",
          "workingLatex": "0 \\le \\theta \\le \\pi",
          "explanation": "On this interval cosine falls steadily from $1$ to $-1$, taking each value exactly once. Note it is different from the sine choice.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Swap roles for the inverse",
          "workingLatex": "y = \\arccos x \\iff x = \\cos y",
          "explanation": "The output angle of $\\arccos$ must lie in the restricted domain of cosine.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Read off the range",
          "workingLatex": "0 \\le \\arccos x \\le \\pi",
          "explanation": "The restricted domain of cosine becomes the range of its inverse.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Note the domain for completeness",
          "workingLatex": "-1 \\le x \\le 1",
          "explanation": "Cosine outputs lie between $-1$ and $1$, so those are the only valid inputs to $\\arccos$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the range",
          "workingLatex": "\\arccos x \\in [0, \\pi]",
          "explanation": "This closed interval is the required range.",
          "diagram": null
        }
      ],
      "finalAnswer": "$0 \\le \\arccos x \\le \\pi$"
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q018",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "interval",
    "tags": ["inverse trig", "arctan", "range"],
    "questionText": "State the range of the principal-value inverse function $\\arctan x$, giving your answer in radians.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall why a restriction is needed",
          "workingLatex": "\\tan\\theta \\text{ is many-to-one}",
          "explanation": "Tangent repeats every $\\pi$, so we restrict it to one branch to obtain a one-to-one function that can be inverted.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose the principal domain of tangent",
          "workingLatex": "-\\frac{\\pi}{2} < \\theta < \\frac{\\pi}{2}",
          "explanation": "On this open interval tangent increases from $-\\infty$ to $\\infty$, covering every real value exactly once. The ends are excluded because tangent is undefined there.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Swap roles for the inverse",
          "workingLatex": "y = \\arctan x \\iff x = \\tan y",
          "explanation": "The output angle of $\\arctan$ lives in this open interval.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Read off the range",
          "workingLatex": "-\\frac{\\pi}{2} < \\arctan x < \\frac{\\pi}{2}",
          "explanation": "The restricted domain of tangent becomes the range of the inverse, with strict inequalities.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Note the domain for completeness",
          "workingLatex": "x \\in \\mathbb{R}",
          "explanation": "Tangent produces every real output, so $\\arctan$ accepts any real input, unlike arcsin and arccos.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the range",
          "workingLatex": "\\arctan x \\in \\left(-\\tfrac{\\pi}{2}, \\tfrac{\\pi}{2}\\right)",
          "explanation": "This open interval is the required range.",
          "diagram": null
        }
      ],
      "finalAnswer": "$-\\dfrac{\\pi}{2} < \\arctan x < \\dfrac{\\pi}{2}$"
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q019",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "exact value",
    "tags": ["inverse trig", "arcsin", "exact values"],
    "questionText": "Find the exact value of $\\arcsin\\dfrac{1}{2}$, giving your answer in radians.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rewrite as a sine equation",
          "workingLatex": "\\arcsin\\tfrac{1}{2} = \\theta \\iff \\sin\\theta = \\tfrac{1}{2}",
          "explanation": "The inverse asks: which angle has sine equal to $\\tfrac12$? Turning it into an equation makes it concrete.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the required range",
          "workingLatex": "-\\frac{\\pi}{2} \\le \\theta \\le \\frac{\\pi}{2}",
          "explanation": "The answer must be the principal value, so it has to lie in the range of arcsin.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall the special angle",
          "workingLatex": "\\sin\\frac{\\pi}{6} = \\tfrac{1}{2}",
          "explanation": "From the exact values, $30^\\circ$, i.e. $\\tfrac{\\pi}{6}$, has sine $\\tfrac12$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check it lies in range",
          "workingLatex": "0 \\le \\frac{\\pi}{6} \\le \\frac{\\pi}{2}",
          "explanation": "Since $\\tfrac{\\pi}{6}$ is inside the arcsin range, it is the correct principal value.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Reject the second-quadrant angle",
          "workingLatex": "\\theta = \\frac{5\\pi}{6} \\text{ also has } \\sin\\theta = \\tfrac12, \\text{ but is out of range}",
          "explanation": "Although $\\tfrac{5\\pi}{6}$ also satisfies the equation, it is outside the principal range, so arcsin does not return it.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the result",
          "workingLatex": "\\arcsin\\tfrac{1}{2} = \\frac{\\pi}{6}",
          "explanation": "This is the required exact principal value.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\arcsin\\dfrac{1}{2} = \\dfrac{\\pi}{6}$"
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q020",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "exact value",
    "tags": ["inverse trig", "arccos", "exact values"],
    "questionText": "Find the exact value of $\\arccos 0$, giving your answer in radians.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rewrite as a cosine equation",
          "workingLatex": "\\arccos 0 = \\theta \\iff \\cos\\theta = 0",
          "explanation": "We are looking for the angle whose cosine is $0$, within the arccos range.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the required range",
          "workingLatex": "0 \\le \\theta \\le \\pi",
          "explanation": "The principal value must lie in the range of arccos.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall where cosine is zero",
          "workingLatex": "\\cos\\frac{\\pi}{2} = 0",
          "explanation": "Cosine is zero at $90^\\circ$, i.e. $\\tfrac{\\pi}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check it lies in range",
          "workingLatex": "0 \\le \\frac{\\pi}{2} \\le \\pi",
          "explanation": "As $\\tfrac{\\pi}{2}$ is inside the arccos range, it is the correct value.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Note there is no other in-range solution",
          "workingLatex": "\\text{only } \\tfrac{\\pi}{2} \\text{ in } [0,\\pi] \\text{ gives } \\cos\\theta = 0",
          "explanation": "Within $[0,\\pi]$ cosine hits zero exactly once, so the answer is unique.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the result",
          "workingLatex": "\\arccos 0 = \\frac{\\pi}{2}",
          "explanation": "This is the required exact principal value.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\arccos 0 = \\dfrac{\\pi}{2}$"
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q021",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "exact value",
    "tags": ["inverse trig", "arctan", "exact values"],
    "questionText": "Find the exact value of $\\arctan 1$, giving your answer in radians.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rewrite as a tangent equation",
          "workingLatex": "\\arctan 1 = \\theta \\iff \\tan\\theta = 1",
          "explanation": "We need the angle whose tangent is $1$, within the arctan range.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the required range",
          "workingLatex": "-\\frac{\\pi}{2} < \\theta < \\frac{\\pi}{2}",
          "explanation": "The principal value must sit in the open range of arctan.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall the special angle",
          "workingLatex": "\\tan\\frac{\\pi}{4} = 1",
          "explanation": "At $45^\\circ$, i.e. $\\tfrac{\\pi}{4}$, tangent equals exactly $1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check it lies in range",
          "workingLatex": "-\\frac{\\pi}{2} < \\frac{\\pi}{4} < \\frac{\\pi}{2}",
          "explanation": "Since $\\tfrac{\\pi}{4}$ is inside the arctan range, it is the correct value.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Note positivity is consistent",
          "workingLatex": "\\tan\\theta = 1 > 0 \\Rightarrow \\theta \\text{ in first quadrant}",
          "explanation": "A positive tangent within the principal range forces a first-quadrant angle, matching $\\tfrac{\\pi}{4}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the result",
          "workingLatex": "\\arctan 1 = \\frac{\\pi}{4}",
          "explanation": "This is the required exact principal value.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\arctan 1 = \\dfrac{\\pi}{4}$"
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q022",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "exact value",
    "tags": ["inverse trig", "arcsin", "exact values"],
    "questionText": "Find the exact value of $\\arcsin 1$, giving your answer in radians.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rewrite as a sine equation",
          "workingLatex": "\\arcsin 1 = \\theta \\iff \\sin\\theta = 1",
          "explanation": "We seek the angle in the arcsin range whose sine is $1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the required range",
          "workingLatex": "-\\frac{\\pi}{2} \\le \\theta \\le \\frac{\\pi}{2}",
          "explanation": "The answer must be the principal value inside this interval.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall where sine is one",
          "workingLatex": "\\sin\\frac{\\pi}{2} = 1",
          "explanation": "Sine reaches its maximum of $1$ at $\\tfrac{\\pi}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check it lies in range",
          "workingLatex": "\\frac{\\pi}{2} \\text{ is the right endpoint of } \\left[-\\tfrac{\\pi}{2}, \\tfrac{\\pi}{2}\\right]",
          "explanation": "The value $\\tfrac{\\pi}{2}$ is included in the closed range, so it is valid.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Note it is the boundary maximum",
          "workingLatex": "\\sin\\theta \\le 1 \\text{ for all } \\theta",
          "explanation": "Because $1$ is the largest possible sine, the answer naturally sits at the top of the range.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the result",
          "workingLatex": "\\arcsin 1 = \\frac{\\pi}{2}",
          "explanation": "This is the required exact principal value.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\arcsin 1 = \\dfrac{\\pi}{2}$"
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q023",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "exact value",
    "tags": ["inverse trig", "arccos", "exact values"],
    "questionText": "Find the exact value of $\\arccos\\dfrac{1}{2}$, giving your answer in radians.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rewrite as a cosine equation",
          "workingLatex": "\\arccos\\tfrac{1}{2} = \\theta \\iff \\cos\\theta = \\tfrac{1}{2}",
          "explanation": "We need the angle in the arccos range whose cosine is $\\tfrac12$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the required range",
          "workingLatex": "0 \\le \\theta \\le \\pi",
          "explanation": "The principal value must lie in the range of arccos.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall the special angle",
          "workingLatex": "\\cos\\frac{\\pi}{3} = \\tfrac{1}{2}",
          "explanation": "From the exact values, $60^\\circ$, i.e. $\\tfrac{\\pi}{3}$, has cosine $\\tfrac12$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check it lies in range",
          "workingLatex": "0 \\le \\frac{\\pi}{3} \\le \\pi",
          "explanation": "As $\\tfrac{\\pi}{3}$ is inside the arccos range, it is correct.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Confirm the sign fits the quadrant",
          "workingLatex": "\\cos\\theta = \\tfrac12 > 0 \\Rightarrow \\theta \\text{ in first quadrant}",
          "explanation": "A positive cosine within $[0,\\pi]$ points to a first-quadrant angle, consistent with $\\tfrac{\\pi}{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the result",
          "workingLatex": "\\arccos\\tfrac{1}{2} = \\frac{\\pi}{3}",
          "explanation": "This is the required exact principal value.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\arccos\\dfrac{1}{2} = \\dfrac{\\pi}{3}$"
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q024",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "exact value",
    "tags": ["inverse trig", "arctan", "exact values"],
    "questionText": "Find the exact value of $\\arctan\\sqrt{3}$, giving your answer in radians.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rewrite as a tangent equation",
          "workingLatex": "\\arctan\\sqrt{3} = \\theta \\iff \\tan\\theta = \\sqrt{3}",
          "explanation": "We want the angle in the arctan range whose tangent is $\\sqrt3$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the required range",
          "workingLatex": "-\\frac{\\pi}{2} < \\theta < \\frac{\\pi}{2}",
          "explanation": "The answer must be the principal value in this open interval.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall the special angle",
          "workingLatex": "\\tan\\frac{\\pi}{3} = \\sqrt{3}",
          "explanation": "From the exact values, $60^\\circ$, i.e. $\\tfrac{\\pi}{3}$, has tangent $\\sqrt3$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check it lies in range",
          "workingLatex": "-\\frac{\\pi}{2} < \\frac{\\pi}{3} < \\frac{\\pi}{2}",
          "explanation": "Since $\\tfrac{\\pi}{3}$ is inside the arctan range, it is the correct value.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Confirm the sign fits the quadrant",
          "workingLatex": "\\tan\\theta = \\sqrt3 > 0 \\Rightarrow \\theta \\text{ in first quadrant}",
          "explanation": "A positive tangent within the principal range means a first-quadrant angle, matching $\\tfrac{\\pi}{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the result",
          "workingLatex": "\\arctan\\sqrt{3} = \\frac{\\pi}{3}",
          "explanation": "This is the required exact principal value.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\arctan\\sqrt{3} = \\dfrac{\\pi}{3}$"
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q025",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "angle(s)",
    "tags": ["reciprocal trig", "secant", "solving equations"],
    "questionText": "Solve $\\sec\\theta = 2$ for $0^\\circ \\le \\theta < 360^\\circ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Convert to a cosine equation",
          "workingLatex": "\\sec\\theta = 2 \\;\\Rightarrow\\; \\frac{1}{\\cos\\theta} = 2",
          "explanation": "Reciprocal equations are almost always easier once rewritten in terms of sine, cosine or tangent, because those are the functions we can solve directly.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rearrange for cosine",
          "workingLatex": "\\cos\\theta = \\frac{1}{2}",
          "explanation": "Taking the reciprocal of both sides turns $\\sec\\theta = 2$ into a standard cosine equation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the principal value",
          "workingLatex": "\\theta = \\cos^{-1}\\tfrac{1}{2} = 60^\\circ",
          "explanation": "The first-quadrant angle with cosine $\\tfrac12$ is $60^\\circ$; this is our base angle.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Decide which quadrants apply",
          "workingLatex": "\\cos\\theta > 0 \\text{ in quadrants 1 and 4}",
          "explanation": "Cosine is positive in the first and fourth quadrants, so solutions occur there within one revolution.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the fourth-quadrant solution",
          "workingLatex": "\\theta = 360^\\circ - 60^\\circ = 300^\\circ",
          "explanation": "The fourth-quadrant partner of a base angle $60^\\circ$ is $360^\\circ - 60^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Collect solutions in range",
          "workingLatex": "\\theta = 60^\\circ, \\; 300^\\circ",
          "explanation": "Both lie in the required interval $0^\\circ \\le \\theta < 360^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check the first solution",
          "workingLatex": "\\cos 60^\\circ = \\tfrac12 \\;\\Rightarrow\\; \\sec 60^\\circ = 2",
          "explanation": "Substituting back confirms $60^\\circ$ satisfies the original secant equation.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check the second solution",
          "workingLatex": "\\cos 300^\\circ = \\tfrac12 \\;\\Rightarrow\\; \\sec 300^\\circ = 2",
          "explanation": "The second value also checks out, so no valid solution has been lost or gained.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the solutions",
          "workingLatex": "\\theta = 60^\\circ, \\; 300^\\circ",
          "explanation": "These are the required solutions in the given interval.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta = 60^\\circ, \\; 300^\\circ$"
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q026",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "angle(s)",
    "tags": ["reciprocal trig", "cosecant", "solving equations"],
    "questionText": "Solve $\\operatorname{cosec}\\theta = 2$ for $0^\\circ \\le \\theta < 360^\\circ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Convert to a sine equation",
          "workingLatex": "\\operatorname{cosec}\\theta = 2 \\;\\Rightarrow\\; \\frac{1}{\\sin\\theta} = 2",
          "explanation": "Rewriting cosecant in terms of sine lets us solve a familiar equation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rearrange for sine",
          "workingLatex": "\\sin\\theta = \\frac{1}{2}",
          "explanation": "Taking reciprocals of both sides gives a standard sine equation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the principal value",
          "workingLatex": "\\theta = \\sin^{-1}\\tfrac{1}{2} = 30^\\circ",
          "explanation": "The base angle with sine $\\tfrac12$ is $30^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Decide which quadrants apply",
          "workingLatex": "\\sin\\theta > 0 \\text{ in quadrants 1 and 2}",
          "explanation": "Sine is positive in the first and second quadrants.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the second-quadrant solution",
          "workingLatex": "\\theta = 180^\\circ - 30^\\circ = 150^\\circ",
          "explanation": "The second-quadrant partner of base angle $30^\\circ$ is $180^\\circ - 30^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Collect solutions in range",
          "workingLatex": "\\theta = 30^\\circ, \\; 150^\\circ",
          "explanation": "Both lie within the required interval.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check the first solution",
          "workingLatex": "\\sin 30^\\circ = \\tfrac12 \\;\\Rightarrow\\; \\operatorname{cosec} 30^\\circ = 2",
          "explanation": "Substituting back confirms $30^\\circ$ works.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check the second solution",
          "workingLatex": "\\sin 150^\\circ = \\tfrac12 \\;\\Rightarrow\\; \\operatorname{cosec} 150^\\circ = 2",
          "explanation": "The second value also satisfies the original equation.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the solutions",
          "workingLatex": "\\theta = 30^\\circ, \\; 150^\\circ",
          "explanation": "These are the required solutions.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta = 30^\\circ, \\; 150^\\circ$"
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q027",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "angle(s)",
    "tags": ["reciprocal trig", "cotangent", "solving equations"],
    "questionText": "Solve $\\cot\\theta = \\sqrt{3}$ for $0^\\circ \\le \\theta < 360^\\circ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Convert to a tangent equation",
          "workingLatex": "\\cot\\theta = \\sqrt{3} \\;\\Rightarrow\\; \\frac{1}{\\tan\\theta} = \\sqrt{3}",
          "explanation": "Rewriting cotangent in terms of tangent turns this into an equation we can solve directly.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rearrange for tangent",
          "workingLatex": "\\tan\\theta = \\frac{1}{\\sqrt{3}}",
          "explanation": "Taking the reciprocal of both sides isolates $\\tan\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the principal value",
          "workingLatex": "\\theta = \\tan^{-1}\\tfrac{1}{\\sqrt3} = 30^\\circ",
          "explanation": "The base angle with tangent $\\tfrac{1}{\\sqrt3}$ is $30^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Use the period of tangent",
          "workingLatex": "\\tan\\theta \\text{ repeats every } 180^\\circ",
          "explanation": "Tangent has period $180^\\circ$, so the next solution is found by adding $180^\\circ$ rather than reflecting.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the second solution",
          "workingLatex": "\\theta = 30^\\circ + 180^\\circ = 210^\\circ",
          "explanation": "Adding a full period gives the third-quadrant solution, where tangent is again positive.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Collect solutions in range",
          "workingLatex": "\\theta = 30^\\circ, \\; 210^\\circ",
          "explanation": "Both lie within $0^\\circ \\le \\theta < 360^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check the first solution",
          "workingLatex": "\\tan 30^\\circ = \\tfrac{1}{\\sqrt3} \\;\\Rightarrow\\; \\cot 30^\\circ = \\sqrt3",
          "explanation": "Substituting back confirms $30^\\circ$ satisfies the original equation.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check the second solution",
          "workingLatex": "\\tan 210^\\circ = \\tfrac{1}{\\sqrt3} \\;\\Rightarrow\\; \\cot 210^\\circ = \\sqrt3",
          "explanation": "The second value also works.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the solutions",
          "workingLatex": "\\theta = 30^\\circ, \\; 210^\\circ",
          "explanation": "These are the required solutions.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta = 30^\\circ, \\; 210^\\circ$"
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q028",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "angle(s)",
    "tags": ["reciprocal trig", "secant", "solving equations"],
    "questionText": "Solve $\\sec\\theta = -2$ for $0^\\circ \\le \\theta < 360^\\circ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Convert to a cosine equation",
          "workingLatex": "\\sec\\theta = -2 \\;\\Rightarrow\\; \\cos\\theta = -\\frac{1}{2}",
          "explanation": "Rewriting in terms of cosine and taking reciprocals gives a standard equation with a negative value.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the base angle",
          "workingLatex": "\\cos^{-1}\\tfrac{1}{2} = 60^\\circ",
          "explanation": "We work with the positive value first to get the acute reference angle $60^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Decide which quadrants apply",
          "workingLatex": "\\cos\\theta < 0 \\text{ in quadrants 2 and 3}",
          "explanation": "A negative cosine places the solutions in the second and third quadrants.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Second-quadrant solution",
          "workingLatex": "\\theta = 180^\\circ - 60^\\circ = 120^\\circ",
          "explanation": "Reflecting the reference angle into the second quadrant gives $120^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Third-quadrant solution",
          "workingLatex": "\\theta = 180^\\circ + 60^\\circ = 240^\\circ",
          "explanation": "Adding the reference angle to $180^\\circ$ gives the third-quadrant solution.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Collect solutions in range",
          "workingLatex": "\\theta = 120^\\circ, \\; 240^\\circ",
          "explanation": "Both lie within the required interval.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check the first solution",
          "workingLatex": "\\cos 120^\\circ = -\\tfrac12 \\;\\Rightarrow\\; \\sec 120^\\circ = -2",
          "explanation": "Substituting back confirms $120^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check the second solution",
          "workingLatex": "\\cos 240^\\circ = -\\tfrac12 \\;\\Rightarrow\\; \\sec 240^\\circ = -2",
          "explanation": "The second value also satisfies the equation.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the solutions",
          "workingLatex": "\\theta = 120^\\circ, \\; 240^\\circ",
          "explanation": "These are the required solutions.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta = 120^\\circ, \\; 240^\\circ$"
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q029",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact value",
    "tags": ["identities", "secant", "right-angled triangle"],
    "questionText": "Given that $\\tan\\theta = \\dfrac{3}{4}$ and $\\theta$ is acute, find the exact value of $\\sec\\theta$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the connecting identity",
          "workingLatex": "1 + \\tan^2\\theta = \\sec^2\\theta",
          "explanation": "This identity links tangent directly to secant, so it is the efficient route from the given information to the target.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute the given tangent",
          "workingLatex": "1 + \\left(\\tfrac{3}{4}\\right)^2 = \\sec^2\\theta",
          "explanation": "Replacing $\\tan\\theta$ with $\\tfrac34$ gives an equation in $\\sec^2\\theta$ alone.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate the square",
          "workingLatex": "1 + \\frac{9}{16} = \\sec^2\\theta",
          "explanation": "Squaring $\\tfrac34$ gives $\\tfrac{9}{16}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add the fractions",
          "workingLatex": "\\sec^2\\theta = \\frac{16}{16} + \\frac{9}{16} = \\frac{25}{16}",
          "explanation": "Writing $1$ as $\\tfrac{16}{16}$ makes the addition straightforward.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Take the square root",
          "workingLatex": "\\sec\\theta = \\pm\\sqrt{\\frac{25}{16}} = \\pm\\frac{5}{4}",
          "explanation": "Square-rooting introduces a plus-or-minus, which we resolve using the quadrant next.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Use the fact that theta is acute",
          "workingLatex": "\\theta \\text{ acute} \\Rightarrow \\cos\\theta > 0 \\Rightarrow \\sec\\theta > 0",
          "explanation": "For an acute angle cosine is positive, so its reciprocal secant is positive too. We keep the positive root.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Select the correct sign",
          "workingLatex": "\\sec\\theta = \\frac{5}{4}",
          "explanation": "Discarding the negative root leaves a single value.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Sense-check with a 3-4-5 triangle",
          "workingLatex": "\\text{opp}=3,\\ \\text{adj}=4,\\ \\text{hyp}=5 \\Rightarrow \\sec\\theta = \\tfrac{\\text{hyp}}{\\text{adj}} = \\tfrac54",
          "explanation": "A right triangle with legs $3$ and $4$ has hypotenuse $5$, and $\\sec\\theta = \\tfrac{1}{\\cos\\theta} = \\tfrac{5}{4}$, matching our answer.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the result",
          "workingLatex": "\\sec\\theta = \\frac{5}{4}",
          "explanation": "This is the required exact value.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sec\\theta = \\dfrac{5}{4}$"
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q030",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "exact value",
    "tags": ["identities", "right-angled triangle", "reciprocal trig"],
    "questionText": "Given that $\\cos\\theta = \\dfrac{5}{13}$ and $\\theta$ is acute, find the exact values of $\\operatorname{cosec}\\theta$, $\\sec\\theta$ and $\\cot\\theta$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find sine from the Pythagorean identity",
          "workingLatex": "\\sin^2\\theta = 1 - \\cos^2\\theta = 1 - \\tfrac{25}{169}",
          "explanation": "We need sine to build the reciprocal functions, and the Pythagorean identity gives it from the known cosine.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Simplify",
          "workingLatex": "\\sin^2\\theta = \\frac{144}{169}",
          "explanation": "Subtracting $\\tfrac{25}{169}$ from $1 = \\tfrac{169}{169}$ leaves $\\tfrac{144}{169}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Take the positive root",
          "workingLatex": "\\sin\\theta = \\frac{12}{13}",
          "explanation": "Because $\\theta$ is acute, sine is positive, so we take the positive square root.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute cosecant",
          "workingLatex": "\\operatorname{cosec}\\theta = \\frac{1}{\\sin\\theta} = \\frac{13}{12}",
          "explanation": "Cosecant is one over sine.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute secant",
          "workingLatex": "\\sec\\theta = \\frac{1}{\\cos\\theta} = \\frac{13}{5}",
          "explanation": "Secant is one over the given cosine.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute cotangent",
          "workingLatex": "\\cot\\theta = \\frac{\\cos\\theta}{\\sin\\theta} = \\frac{5/13}{12/13} = \\frac{5}{12}",
          "explanation": "Using $\\cot\\theta = \\tfrac{\\cos\\theta}{\\sin\\theta}$, the thirteenths cancel to leave $\\tfrac{5}{12}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Sense-check with a 5-12-13 triangle",
          "workingLatex": "\\text{adj}=5,\\ \\text{opp}=12,\\ \\text{hyp}=13",
          "explanation": "The classic $5$-$12$-$13$ triangle matches all three reciprocal ratios, confirming the values.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the results",
          "workingLatex": "\\operatorname{cosec}\\theta = \\tfrac{13}{12}, \\quad \\sec\\theta = \\tfrac{13}{5}, \\quad \\cot\\theta = \\tfrac{5}{12}",
          "explanation": "These are the three required exact values.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\operatorname{cosec}\\theta = \\dfrac{13}{12}, \\; \\sec\\theta = \\dfrac{13}{5}, \\; \\cot\\theta = \\dfrac{5}{12}$"
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q031",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "angle(s)",
    "tags": ["reciprocal trig", "secant", "solving equations"],
    "questionText": "Solve $\\sqrt{2}\\,\\sec\\theta = 2$ for $0^\\circ \\le \\theta < 360^\\circ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Isolate the secant",
          "workingLatex": "\\sec\\theta = \\frac{2}{\\sqrt{2}} = \\sqrt{2}",
          "explanation": "Dividing by $\\sqrt2$ and simplifying $\\tfrac{2}{\\sqrt2} = \\sqrt2$ leaves a clean secant equation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Convert to cosine",
          "workingLatex": "\\cos\\theta = \\frac{1}{\\sqrt{2}} = \\frac{\\sqrt{2}}{2}",
          "explanation": "Taking the reciprocal turns $\\sec\\theta = \\sqrt2$ into a standard cosine equation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the base angle",
          "workingLatex": "\\cos^{-1}\\tfrac{\\sqrt2}{2} = 45^\\circ",
          "explanation": "The acute angle with cosine $\\tfrac{\\sqrt2}{2}$ is $45^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Decide which quadrants apply",
          "workingLatex": "\\cos\\theta > 0 \\text{ in quadrants 1 and 4}",
          "explanation": "A positive cosine gives first- and fourth-quadrant solutions.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Fourth-quadrant solution",
          "workingLatex": "\\theta = 360^\\circ - 45^\\circ = 315^\\circ",
          "explanation": "The fourth-quadrant partner of $45^\\circ$ is $315^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Collect solutions in range",
          "workingLatex": "\\theta = 45^\\circ, \\; 315^\\circ",
          "explanation": "Both lie within the interval.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check the first solution",
          "workingLatex": "\\cos 45^\\circ = \\tfrac{\\sqrt2}{2} \\Rightarrow \\sqrt2\\sec 45^\\circ = \\sqrt2\\cdot\\sqrt2 = 2",
          "explanation": "Substituting back into the original equation confirms $45^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check the second solution",
          "workingLatex": "\\cos 315^\\circ = \\tfrac{\\sqrt2}{2} \\Rightarrow \\sqrt2\\sec 315^\\circ = 2",
          "explanation": "The second value also satisfies the original equation.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the solutions",
          "workingLatex": "\\theta = 45^\\circ, \\; 315^\\circ",
          "explanation": "These are the required solutions.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta = 45^\\circ, \\; 315^\\circ$"
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q032",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "exact value",
    "tags": ["identities", "reciprocal trig", "quadrants"],
    "questionText": "Given that $\\sin\\theta = \\dfrac{2}{3}$ and $\\theta$ is obtuse, find the exact values of $\\operatorname{cosec}\\theta$, $\\sec\\theta$ and $\\cot\\theta$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write cosecant immediately",
          "workingLatex": "\\operatorname{cosec}\\theta = \\frac{1}{\\sin\\theta} = \\frac{3}{2}",
          "explanation": "Cosecant depends only on sine, which is given, so it is unaffected by the quadrant.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find cosine squared",
          "workingLatex": "\\cos^2\\theta = 1 - \\sin^2\\theta = 1 - \\tfrac{4}{9} = \\tfrac{5}{9}",
          "explanation": "The Pythagorean identity gives $\\cos^2\\theta$ from the known sine.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Take the root",
          "workingLatex": "\\cos\\theta = \\pm\\frac{\\sqrt{5}}{3}",
          "explanation": "Square-rooting gives two possibilities; the quadrant decides the sign.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Use the obtuse condition",
          "workingLatex": "\\theta \\text{ obtuse} \\Rightarrow \\cos\\theta < 0 \\Rightarrow \\cos\\theta = -\\frac{\\sqrt{5}}{3}",
          "explanation": "An obtuse angle lies in the second quadrant where cosine is negative, so we take the negative root.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute secant",
          "workingLatex": "\\sec\\theta = \\frac{1}{\\cos\\theta} = -\\frac{3}{\\sqrt{5}} = -\\frac{3\\sqrt{5}}{5}",
          "explanation": "Secant is one over cosine; we rationalise the denominator to finish.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute cotangent",
          "workingLatex": "\\cot\\theta = \\frac{\\cos\\theta}{\\sin\\theta} = \\frac{-\\tfrac{\\sqrt5}{3}}{\\tfrac{2}{3}} = -\\frac{\\sqrt{5}}{2}",
          "explanation": "Dividing cosine by sine, the thirds cancel to leave $-\\tfrac{\\sqrt5}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check the signs are consistent",
          "workingLatex": "\\text{Q2: } \\sin > 0, \\ \\cos < 0, \\ \\tan < 0",
          "explanation": "In the second quadrant sine is positive while cosine and tangent are negative, matching our positive cosecant and negative secant and cotangent.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the results",
          "workingLatex": "\\operatorname{cosec}\\theta = \\tfrac32, \\ \\sec\\theta = -\\tfrac{3\\sqrt5}{5}, \\ \\cot\\theta = -\\tfrac{\\sqrt5}{2}",
          "explanation": "These are the three required exact values.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\operatorname{cosec}\\theta = \\dfrac32, \\; \\sec\\theta = -\\dfrac{3\\sqrt5}{5}, \\; \\cot\\theta = -\\dfrac{\\sqrt5}{2}$"
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q033",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "angle(s)",
    "tags": ["reciprocal trig", "secant", "solving equations"],
    "questionText": "Solve $\\sec^2\\theta = 4$ for $0^\\circ \\le \\theta < 360^\\circ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Square-root both sides",
          "workingLatex": "\\sec\\theta = \\pm 2",
          "explanation": "Because the equation involves $\\sec^2\\theta$, both the positive and negative roots must be considered.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Convert to cosine",
          "workingLatex": "\\cos\\theta = \\pm\\frac{1}{2}",
          "explanation": "Taking reciprocals of $\\pm2$ gives $\\cos\\theta = \\pm\\tfrac12$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the base angle",
          "workingLatex": "\\cos^{-1}\\tfrac12 = 60^\\circ",
          "explanation": "The reference angle for cosine magnitude $\\tfrac12$ is $60^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve the positive case",
          "workingLatex": "\\cos\\theta = \\tfrac12 \\Rightarrow \\theta = 60^\\circ, \\ 300^\\circ",
          "explanation": "Positive cosine gives first- and fourth-quadrant solutions.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve the negative case",
          "workingLatex": "\\cos\\theta = -\\tfrac12 \\Rightarrow \\theta = 120^\\circ, \\ 240^\\circ",
          "explanation": "Negative cosine gives second- and third-quadrant solutions.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Collect all solutions",
          "workingLatex": "\\theta = 60^\\circ, \\ 120^\\circ, \\ 240^\\circ, \\ 300^\\circ",
          "explanation": "Combining both cases gives four solutions in the interval.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Note the symmetry",
          "workingLatex": "\\{60,120,240,300\\} \\text{ symmetric about } 180^\\circ",
          "explanation": "The four solutions are evenly placed, a useful check that none has been missed.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify one value",
          "workingLatex": "\\sec^2 120^\\circ = (-2)^2 = 4",
          "explanation": "Checking $120^\\circ$ confirms the negative-root solutions are genuine, since squaring removes the sign.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the solutions",
          "workingLatex": "\\theta = 60^\\circ, \\ 120^\\circ, \\ 240^\\circ, \\ 300^\\circ",
          "explanation": "These are the required solutions.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta = 60^\\circ, \\ 120^\\circ, \\ 240^\\circ, \\ 300^\\circ$"
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q034",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "angle(s)",
    "tags": ["reciprocal trig", "cotangent", "solving equations"],
    "questionText": "Solve $\\cot^2\\theta = 3$ for $0^\\circ \\le \\theta < 360^\\circ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Square-root both sides",
          "workingLatex": "\\cot\\theta = \\pm\\sqrt{3}",
          "explanation": "The squared term means both signs are possible.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Convert to tangent",
          "workingLatex": "\\tan\\theta = \\pm\\frac{1}{\\sqrt{3}}",
          "explanation": "Taking reciprocals turns $\\cot\\theta = \\pm\\sqrt3$ into $\\tan\\theta = \\pm\\tfrac{1}{\\sqrt3}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the base angle",
          "workingLatex": "\\tan^{-1}\\tfrac{1}{\\sqrt3} = 30^\\circ",
          "explanation": "The reference angle for tangent magnitude $\\tfrac{1}{\\sqrt3}$ is $30^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve the positive case",
          "workingLatex": "\\tan\\theta = \\tfrac{1}{\\sqrt3} \\Rightarrow \\theta = 30^\\circ, \\ 210^\\circ",
          "explanation": "Positive tangent gives solutions $30^\\circ$ apart from the axis in quadrants 1 and 3, using the $180^\\circ$ period.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve the negative case",
          "workingLatex": "\\tan\\theta = -\\tfrac{1}{\\sqrt3} \\Rightarrow \\theta = 150^\\circ, \\ 330^\\circ",
          "explanation": "Negative tangent gives second- and fourth-quadrant solutions, again a period apart.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Collect all solutions",
          "workingLatex": "\\theta = 30^\\circ, \\ 150^\\circ, \\ 210^\\circ, \\ 330^\\circ",
          "explanation": "Combining both cases gives four solutions in the interval.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify one value",
          "workingLatex": "\\cot^2 150^\\circ = (-\\sqrt3)^2 = 3",
          "explanation": "Checking $150^\\circ$ confirms the negative-root solutions are valid.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Confirm none is excluded",
          "workingLatex": "\\sin\\theta \\ne 0 \\text{ at all four angles}",
          "explanation": "Cotangent needs $\\sin\\theta \\ne 0$; all four solutions satisfy this, so none must be rejected.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the solutions",
          "workingLatex": "\\theta = 30^\\circ, \\ 150^\\circ, \\ 210^\\circ, \\ 330^\\circ",
          "explanation": "These are the required solutions.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta = 30^\\circ, \\ 150^\\circ, \\ 210^\\circ, \\ 330^\\circ$"
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q035",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "proof",
    "tags": ["identities", "proof", "reciprocal trig"],
    "questionText": "Prove that $\\cot\\theta \\, \\sec\\theta \\equiv \\operatorname{cosec}\\theta$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose a side to work on",
          "workingLatex": "\\text{LHS} = \\cot\\theta \\, \\sec\\theta",
          "explanation": "The left-hand side is the more complicated, so we simplify it towards the right-hand side.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rewrite in sine and cosine",
          "workingLatex": "= \\frac{\\cos\\theta}{\\sin\\theta} \\times \\frac{1}{\\cos\\theta}",
          "explanation": "Converting everything to sine and cosine is the standard first move in reciprocal-identity proofs, because it exposes cancellations.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Multiply the fractions",
          "workingLatex": "= \\frac{\\cos\\theta}{\\sin\\theta \\, \\cos\\theta}",
          "explanation": "Combining into a single fraction puts the cancelling factor in view.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Cancel the common factor",
          "workingLatex": "= \\frac{1}{\\sin\\theta}",
          "explanation": "The $\\cos\\theta$ on top and bottom cancels, valid where $\\cos\\theta \\ne 0$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Recognise the reciprocal function",
          "workingLatex": "= \\operatorname{cosec}\\theta",
          "explanation": "One over sine is exactly cosecant.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclude the proof",
          "workingLatex": "\\cot\\theta \\, \\sec\\theta = \\operatorname{cosec}\\theta \\quad \\blacksquare",
          "explanation": "The left-hand side has been shown identical to the right-hand side, completing the proof.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\cot\\theta \\, \\sec\\theta \\equiv \\operatorname{cosec}\\theta$ (proved)"
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q036",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "proof",
    "tags": ["identities", "proof", "secant"],
    "questionText": "Prove that $\\sec\\theta - \\cos\\theta \\equiv \\sin\\theta \\tan\\theta$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Start from the left-hand side",
          "workingLatex": "\\text{LHS} = \\sec\\theta - \\cos\\theta",
          "explanation": "We simplify the left-hand side, aiming to reach the right-hand side.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rewrite secant",
          "workingLatex": "= \\frac{1}{\\cos\\theta} - \\cos\\theta",
          "explanation": "Expressing secant as $\\tfrac{1}{\\cos\\theta}$ lets us combine the two terms over a common denominator.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Combine over a common denominator",
          "workingLatex": "= \\frac{1 - \\cos^2\\theta}{\\cos\\theta}",
          "explanation": "Writing $\\cos\\theta$ as $\\tfrac{\\cos^2\\theta}{\\cos\\theta}$ allows the subtraction into one fraction.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the Pythagorean identity",
          "workingLatex": "1 - \\cos^2\\theta = \\sin^2\\theta",
          "explanation": "Recognising the numerator as $\\sin^2\\theta$ is the key step that connects to the target.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute",
          "workingLatex": "= \\frac{\\sin^2\\theta}{\\cos\\theta}",
          "explanation": "Replacing the numerator gives a fraction ready to split.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Split off a tangent",
          "workingLatex": "= \\sin\\theta \\times \\frac{\\sin\\theta}{\\cos\\theta}",
          "explanation": "Peeling off one $\\sin\\theta$ reveals $\\tfrac{\\sin\\theta}{\\cos\\theta}$, which is $\\tan\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Recognise tangent",
          "workingLatex": "= \\sin\\theta \\tan\\theta",
          "explanation": "This is exactly the right-hand side.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Conclude the proof",
          "workingLatex": "\\sec\\theta - \\cos\\theta = \\sin\\theta \\tan\\theta \\quad \\blacksquare",
          "explanation": "The two sides are identical, so the identity is proved.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sec\\theta - \\cos\\theta \\equiv \\sin\\theta \\tan\\theta$ (proved)"
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q037",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "exact value",
    "tags": ["inverse trig", "arcsin", "negative argument"],
    "questionText": "Find the exact value of $\\arcsin\\left(-\\dfrac{1}{2}\\right)$, giving your answer in radians.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rewrite as a sine equation",
          "workingLatex": "\\arcsin\\left(-\\tfrac12\\right) = \\theta \\iff \\sin\\theta = -\\tfrac12",
          "explanation": "We seek the principal angle whose sine is $-\\tfrac12$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the range",
          "workingLatex": "-\\frac{\\pi}{2} \\le \\theta \\le \\frac{\\pi}{2}",
          "explanation": "The answer must lie in the arcsin range, which includes negative angles.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the reference angle",
          "workingLatex": "\\sin\\tfrac{\\pi}{6} = \\tfrac12",
          "explanation": "Ignoring the sign for a moment, the base angle with sine $\\tfrac12$ is $\\tfrac{\\pi}{6}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Use the odd symmetry of sine",
          "workingLatex": "\\sin(-\\phi) = -\\sin\\phi",
          "explanation": "Sine is an odd function, so a negative output comes from a negative input of the same reference angle.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply the symmetry",
          "workingLatex": "\\sin\\left(-\\tfrac{\\pi}{6}\\right) = -\\tfrac12",
          "explanation": "Negating the base angle gives the required negative sine.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check it lies in range",
          "workingLatex": "-\\frac{\\pi}{2} \\le -\\frac{\\pi}{6} \\le \\frac{\\pi}{2}",
          "explanation": "The candidate $-\\tfrac{\\pi}{6}$ sits inside the arcsin range, so it is valid.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Reject the out-of-range option",
          "workingLatex": "\\theta = \\tfrac{7\\pi}{6} \\text{ also has } \\sin\\theta = -\\tfrac12 \\text{ but is out of range}",
          "explanation": "Although $\\tfrac{7\\pi}{6}$ has the right sine, it is outside the principal range and so is not returned by arcsin.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the result",
          "workingLatex": "\\arcsin\\left(-\\tfrac12\\right) = -\\frac{\\pi}{6}",
          "explanation": "This is the required exact principal value.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\arcsin\\left(-\\dfrac{1}{2}\\right) = -\\dfrac{\\pi}{6}$"
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q038",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "exact value",
    "tags": ["inverse trig", "arccos", "negative argument"],
    "questionText": "Find the exact value of $\\arccos\\left(-\\dfrac{1}{2}\\right)$, giving your answer in radians.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rewrite as a cosine equation",
          "workingLatex": "\\arccos\\left(-\\tfrac12\\right) = \\theta \\iff \\cos\\theta = -\\tfrac12",
          "explanation": "We seek the principal angle whose cosine is $-\\tfrac12$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the range",
          "workingLatex": "0 \\le \\theta \\le \\pi",
          "explanation": "The answer must lie in the arccos range, which covers the first and second quadrants.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the reference angle",
          "workingLatex": "\\cos\\tfrac{\\pi}{3} = \\tfrac12",
          "explanation": "The base angle for cosine magnitude $\\tfrac12$ is $\\tfrac{\\pi}{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Choose the correct quadrant",
          "workingLatex": "\\cos\\theta < 0 \\Rightarrow \\theta \\text{ in the second quadrant}",
          "explanation": "Within $[0,\\pi]$, cosine is negative only in the second quadrant, so that is where the solution lies.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Reflect the reference angle",
          "workingLatex": "\\theta = \\pi - \\frac{\\pi}{3} = \\frac{2\\pi}{3}",
          "explanation": "The second-quadrant angle with reference $\\tfrac{\\pi}{3}$ is $\\pi - \\tfrac{\\pi}{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify the cosine",
          "workingLatex": "\\cos\\frac{2\\pi}{3} = -\\tfrac12",
          "explanation": "Checking confirms the candidate has the required cosine.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Confirm it is in range",
          "workingLatex": "0 \\le \\frac{2\\pi}{3} \\le \\pi",
          "explanation": "The value sits inside the arccos range, so it is the principal value.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the result",
          "workingLatex": "\\arccos\\left(-\\tfrac12\\right) = \\frac{2\\pi}{3}",
          "explanation": "This is the required exact principal value.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\arccos\\left(-\\dfrac{1}{2}\\right) = \\dfrac{2\\pi}{3}$"
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q039",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "exact value",
    "tags": ["inverse trig", "arctan", "negative argument"],
    "questionText": "Find the exact value of $\\arctan(-1)$, giving your answer in radians.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rewrite as a tangent equation",
          "workingLatex": "\\arctan(-1) = \\theta \\iff \\tan\\theta = -1",
          "explanation": "We seek the principal angle whose tangent is $-1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the range",
          "workingLatex": "-\\frac{\\pi}{2} < \\theta < \\frac{\\pi}{2}",
          "explanation": "The answer must lie in the open arctan range.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the reference angle",
          "workingLatex": "\\tan\\tfrac{\\pi}{4} = 1",
          "explanation": "The base angle for tangent magnitude $1$ is $\\tfrac{\\pi}{4}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Use the odd symmetry of tangent",
          "workingLatex": "\\tan(-\\phi) = -\\tan\\phi",
          "explanation": "Tangent is odd, so a negative value comes from negating the input angle.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply the symmetry",
          "workingLatex": "\\tan\\left(-\\tfrac{\\pi}{4}\\right) = -1",
          "explanation": "Negating the reference angle gives the required tangent.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check it lies in range",
          "workingLatex": "-\\frac{\\pi}{2} < -\\frac{\\pi}{4} < \\frac{\\pi}{2}",
          "explanation": "The candidate $-\\tfrac{\\pi}{4}$ is inside the arctan range.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the result",
          "workingLatex": "\\arctan(-1) = -\\frac{\\pi}{4}",
          "explanation": "This is the required exact principal value.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\arctan(-1) = -\\dfrac{\\pi}{4}$"
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q040",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact value",
    "tags": ["inverse trig", "composite", "right-angled triangle"],
    "questionText": "Find the exact value of $\\sin\\left(\\arccos\\dfrac{3}{5}\\right)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Name the inner angle",
          "workingLatex": "\\text{let } \\alpha = \\arccos\\tfrac{3}{5}, \\quad \\cos\\alpha = \\tfrac{3}{5}",
          "explanation": "Giving the inner inverse a name turns a nested expression into a clear two-step problem.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the range of alpha",
          "workingLatex": "0 \\le \\alpha \\le \\pi",
          "explanation": "As the output of arccos, $\\alpha$ lies in the first or second quadrant.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Deduce the sign of sine",
          "workingLatex": "0 \\le \\alpha \\le \\pi \\Rightarrow \\sin\\alpha \\ge 0",
          "explanation": "Sine is non-negative across the whole arccos range, so the final answer must be positive.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Use the Pythagorean identity",
          "workingLatex": "\\sin^2\\alpha = 1 - \\cos^2\\alpha = 1 - \\tfrac{9}{25}",
          "explanation": "We find sine from the known cosine using the identity.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "\\sin^2\\alpha = \\frac{16}{25}",
          "explanation": "Subtracting $\\tfrac{9}{25}$ from $1$ leaves $\\tfrac{16}{25}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Take the positive root",
          "workingLatex": "\\sin\\alpha = \\frac{4}{5}",
          "explanation": "Since sine is non-negative here, we take the positive root.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Sense-check with a 3-4-5 triangle",
          "workingLatex": "\\text{adj}=3, \\ \\text{hyp}=5 \\Rightarrow \\text{opp}=4, \\ \\sin\\alpha = \\tfrac45",
          "explanation": "A right triangle with adjacent $3$ and hypotenuse $5$ has opposite $4$, confirming the answer.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the result",
          "workingLatex": "\\sin\\left(\\arccos\\tfrac{3}{5}\\right) = \\frac{4}{5}",
          "explanation": "This is the required exact value.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sin\\left(\\arccos\\dfrac{3}{5}\\right) = \\dfrac{4}{5}$"
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q041",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact value",
    "tags": ["inverse trig", "composite", "right-angled triangle"],
    "questionText": "Find the exact value of $\\tan\\left(\\arcsin\\dfrac{5}{13}\\right)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Name the inner angle",
          "workingLatex": "\\text{let } \\alpha = \\arcsin\\tfrac{5}{13}, \\quad \\sin\\alpha = \\tfrac{5}{13}",
          "explanation": "Naming the inner inverse turns the nested expression into a clear problem.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the range of alpha",
          "workingLatex": "-\\frac{\\pi}{2} \\le \\alpha \\le \\frac{\\pi}{2}",
          "explanation": "As the output of arcsin, $\\alpha$ lies in the fourth or first quadrant.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Deduce the sign of cosine",
          "workingLatex": "\\cos\\alpha \\ge 0 \\text{ on this range}",
          "explanation": "Cosine is non-negative across the arcsin range, which fixes the sign we need next.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find cosine",
          "workingLatex": "\\cos\\alpha = \\sqrt{1 - \\tfrac{25}{169}} = \\frac{12}{13}",
          "explanation": "The Pythagorean identity gives $\\cos^2\\alpha = \\tfrac{144}{169}$, and we take the positive root.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Form the tangent",
          "workingLatex": "\\tan\\alpha = \\frac{\\sin\\alpha}{\\cos\\alpha} = \\frac{5/13}{12/13}",
          "explanation": "Tangent is sine over cosine.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify",
          "workingLatex": "\\tan\\alpha = \\frac{5}{12}",
          "explanation": "The thirteenths cancel to leave $\\tfrac{5}{12}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Sense-check with a 5-12-13 triangle",
          "workingLatex": "\\text{opp}=5, \\ \\text{hyp}=13 \\Rightarrow \\text{adj}=12, \\ \\tan\\alpha = \\tfrac{5}{12}",
          "explanation": "The $5$-$12$-$13$ triangle confirms the ratio.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the result",
          "workingLatex": "\\tan\\left(\\arcsin\\tfrac{5}{13}\\right) = \\frac{5}{12}",
          "explanation": "This is the required exact value.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\tan\\left(\\arcsin\\dfrac{5}{13}\\right) = \\dfrac{5}{12}$"
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q042",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact value",
    "tags": ["inverse trig", "composite", "right-angled triangle"],
    "questionText": "Find the exact value of $\\cos\\left(\\arctan\\dfrac{3}{4}\\right)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Name the inner angle",
          "workingLatex": "\\text{let } \\alpha = \\arctan\\tfrac{3}{4}, \\quad \\tan\\alpha = \\tfrac{3}{4}",
          "explanation": "Naming the inner inverse makes the nested expression easier to handle.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the range of alpha",
          "workingLatex": "-\\frac{\\pi}{2} < \\alpha < \\frac{\\pi}{2}",
          "explanation": "As the output of arctan, $\\alpha$ lies in this open interval; here the positive tangent places it in the first quadrant.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Model with a right triangle",
          "workingLatex": "\\text{opp}=3, \\ \\text{adj}=4",
          "explanation": "Since $\\tan\\alpha = \\tfrac{\\text{opp}}{\\text{adj}}$, a triangle with opposite $3$ and adjacent $4$ captures the angle.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the hypotenuse",
          "workingLatex": "\\text{hyp} = \\sqrt{3^2 + 4^2} = 5",
          "explanation": "Pythagoras gives the hypotenuse, completing the familiar $3$-$4$-$5$ triangle.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Read off the cosine",
          "workingLatex": "\\cos\\alpha = \\frac{\\text{adj}}{\\text{hyp}} = \\frac{4}{5}",
          "explanation": "Cosine is adjacent over hypotenuse.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Confirm the sign",
          "workingLatex": "\\alpha \\text{ in Q1} \\Rightarrow \\cos\\alpha > 0",
          "explanation": "A first-quadrant angle has positive cosine, consistent with our positive answer.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the result",
          "workingLatex": "\\cos\\left(\\arctan\\tfrac{3}{4}\\right) = \\frac{4}{5}",
          "explanation": "This is the required exact value.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\cos\\left(\\arctan\\dfrac{3}{4}\\right) = \\dfrac{4}{5}$"
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q043",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "angle(s)",
    "tags": ["reciprocal trig", "cotangent", "solving equations"],
    "questionText": "Solve $\\cot\\theta = 3\\tan\\theta$ for $0^\\circ \\le \\theta < 360^\\circ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rewrite cotangent in terms of tangent",
          "workingLatex": "\\frac{1}{\\tan\\theta} = 3\\tan\\theta",
          "explanation": "Writing cotangent as one over tangent puts the whole equation in a single function.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Clear the fraction",
          "workingLatex": "1 = 3\\tan^2\\theta",
          "explanation": "Multiplying both sides by $\\tan\\theta$ removes the denominator, valid where $\\tan\\theta \\ne 0$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Isolate tan squared",
          "workingLatex": "\\tan^2\\theta = \\frac{1}{3}",
          "explanation": "Dividing by $3$ isolates the squared term.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Square-root",
          "workingLatex": "\\tan\\theta = \\pm\\frac{1}{\\sqrt{3}}",
          "explanation": "Both signs must be kept from the square root.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the base angle",
          "workingLatex": "\\tan^{-1}\\tfrac{1}{\\sqrt3} = 30^\\circ",
          "explanation": "The reference angle for tangent magnitude $\\tfrac{1}{\\sqrt3}$ is $30^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve the positive case",
          "workingLatex": "\\tan\\theta = \\tfrac{1}{\\sqrt3} \\Rightarrow \\theta = 30^\\circ, \\ 210^\\circ",
          "explanation": "Using the $180^\\circ$ period gives the quadrant-1 and quadrant-3 solutions.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve the negative case",
          "workingLatex": "\\tan\\theta = -\\tfrac{1}{\\sqrt3} \\Rightarrow \\theta = 150^\\circ, \\ 330^\\circ",
          "explanation": "The negative case gives the quadrant-2 and quadrant-4 solutions.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check none was excluded",
          "workingLatex": "\\tan\\theta \\ne 0 \\text{ at all four angles}",
          "explanation": "Multiplying by $\\tan\\theta$ earlier required it to be non-zero; all four solutions respect this.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the solutions",
          "workingLatex": "\\theta = 30^\\circ, \\ 150^\\circ, \\ 210^\\circ, \\ 330^\\circ",
          "explanation": "These are the required solutions.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta = 30^\\circ, \\ 150^\\circ, \\ 210^\\circ, \\ 330^\\circ$"
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q044",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "proof",
    "tags": ["identities", "proof", "cosecant"],
    "questionText": "Prove that $\\operatorname{cosec}\\theta - \\sin\\theta \\equiv \\cos\\theta \\cot\\theta$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Start from the left-hand side",
          "workingLatex": "\\text{LHS} = \\operatorname{cosec}\\theta - \\sin\\theta",
          "explanation": "We simplify the left-hand side towards the right.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rewrite cosecant",
          "workingLatex": "= \\frac{1}{\\sin\\theta} - \\sin\\theta",
          "explanation": "Expressing cosecant as $\\tfrac{1}{\\sin\\theta}$ prepares a common denominator.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Combine over a common denominator",
          "workingLatex": "= \\frac{1 - \\sin^2\\theta}{\\sin\\theta}",
          "explanation": "Writing $\\sin\\theta = \\tfrac{\\sin^2\\theta}{\\sin\\theta}$ merges the terms into one fraction.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the Pythagorean identity",
          "workingLatex": "1 - \\sin^2\\theta = \\cos^2\\theta",
          "explanation": "Recognising the numerator as $\\cos^2\\theta$ links to the target.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute",
          "workingLatex": "= \\frac{\\cos^2\\theta}{\\sin\\theta}",
          "explanation": "The fraction is now ready to split.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Split off a cotangent",
          "workingLatex": "= \\cos\\theta \\times \\frac{\\cos\\theta}{\\sin\\theta}",
          "explanation": "Peeling off one $\\cos\\theta$ leaves $\\tfrac{\\cos\\theta}{\\sin\\theta} = \\cot\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Recognise cotangent",
          "workingLatex": "= \\cos\\theta \\cot\\theta",
          "explanation": "This is exactly the right-hand side.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Conclude the proof",
          "workingLatex": "\\operatorname{cosec}\\theta - \\sin\\theta = \\cos\\theta \\cot\\theta \\quad \\blacksquare",
          "explanation": "The identity is proved.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\operatorname{cosec}\\theta - \\sin\\theta \\equiv \\cos\\theta \\cot\\theta$ (proved)"
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q045",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "proof",
    "tags": ["identities", "proof", "cotangent"],
    "questionText": "Prove that $\\dfrac{1 + \\cot\\theta}{1 + \\tan\\theta} \\equiv \\cot\\theta$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Start from the left-hand side",
          "workingLatex": "\\text{LHS} = \\frac{1 + \\cot\\theta}{1 + \\tan\\theta}",
          "explanation": "We simplify this compound fraction to reach $\\cot\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rewrite in sine and cosine",
          "workingLatex": "= \\frac{1 + \\tfrac{\\cos\\theta}{\\sin\\theta}}{1 + \\tfrac{\\sin\\theta}{\\cos\\theta}}",
          "explanation": "Converting the reciprocal functions to sine and cosine is the reliable route through fraction-heavy identities.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Combine each part into a single fraction",
          "workingLatex": "= \\frac{\\tfrac{\\sin\\theta + \\cos\\theta}{\\sin\\theta}}{\\tfrac{\\cos\\theta + \\sin\\theta}{\\cos\\theta}}",
          "explanation": "Adding within the numerator and the denominator separately gives two tidy fractions.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Divide by multiplying by the reciprocal",
          "workingLatex": "= \\frac{\\sin\\theta + \\cos\\theta}{\\sin\\theta} \\times \\frac{\\cos\\theta}{\\cos\\theta + \\sin\\theta}",
          "explanation": "Dividing fractions means multiplying by the reciprocal of the lower one.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Cancel the common bracket",
          "workingLatex": "= \\frac{\\cos\\theta}{\\sin\\theta}",
          "explanation": "The factor $(\\sin\\theta + \\cos\\theta)$ appears top and bottom and cancels, provided it is non-zero.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Recognise cotangent",
          "workingLatex": "= \\cot\\theta",
          "explanation": "The remaining fraction is exactly $\\cot\\theta$, the right-hand side.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclude the proof",
          "workingLatex": "\\frac{1 + \\cot\\theta}{1 + \\tan\\theta} = \\cot\\theta \\quad \\blacksquare",
          "explanation": "The identity is proved.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{1 + \\cot\\theta}{1 + \\tan\\theta} \\equiv \\cot\\theta$ (proved)"
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q046",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "angle(s)",
    "tags": ["reciprocal trig", "secant", "solving equations"],
    "questionText": "Solve $2\\cos\\theta = \\sec\\theta$ for $0^\\circ \\le \\theta < 360^\\circ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Replace secant",
          "workingLatex": "2\\cos\\theta = \\frac{1}{\\cos\\theta}",
          "explanation": "Writing secant as $\\tfrac{1}{\\cos\\theta}$ turns the equation into one purely in cosine.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Clear the fraction",
          "workingLatex": "2\\cos^2\\theta = 1",
          "explanation": "Multiplying both sides by $\\cos\\theta$ removes the denominator; this is valid because $\\cos\\theta = 0$ cannot solve the equation anyway.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Isolate cos squared",
          "workingLatex": "\\cos^2\\theta = \\frac{1}{2}",
          "explanation": "Dividing by $2$ isolates the squared term.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Square-root",
          "workingLatex": "\\cos\\theta = \\pm\\frac{1}{\\sqrt{2}} = \\pm\\frac{\\sqrt2}{2}",
          "explanation": "Both signs are kept from the square root.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the base angle",
          "workingLatex": "\\cos^{-1}\\tfrac{\\sqrt2}{2} = 45^\\circ",
          "explanation": "The reference angle for cosine magnitude $\\tfrac{\\sqrt2}{2}$ is $45^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve the positive case",
          "workingLatex": "\\cos\\theta = \\tfrac{\\sqrt2}{2} \\Rightarrow \\theta = 45^\\circ, \\ 315^\\circ",
          "explanation": "Positive cosine gives quadrant-1 and quadrant-4 solutions.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve the negative case",
          "workingLatex": "\\cos\\theta = -\\tfrac{\\sqrt2}{2} \\Rightarrow \\theta = 135^\\circ, \\ 225^\\circ",
          "explanation": "Negative cosine gives quadrant-2 and quadrant-3 solutions.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Collect all solutions",
          "workingLatex": "\\theta = 45^\\circ, \\ 135^\\circ, \\ 225^\\circ, \\ 315^\\circ",
          "explanation": "All four lie in the interval.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the solutions",
          "workingLatex": "\\theta = 45^\\circ, \\ 135^\\circ, \\ 225^\\circ, \\ 315^\\circ",
          "explanation": "These are the required solutions.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta = 45^\\circ, \\ 135^\\circ, \\ 225^\\circ, \\ 315^\\circ$"
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q047",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "exact value",
    "tags": ["inverse trig", "arccos", "negative argument"],
    "questionText": "Find the exact value of $\\arccos\\left(-\\dfrac{\\sqrt{3}}{2}\\right)$, giving your answer in radians.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rewrite as a cosine equation",
          "workingLatex": "\\arccos\\left(-\\tfrac{\\sqrt3}{2}\\right) = \\theta \\iff \\cos\\theta = -\\tfrac{\\sqrt3}{2}",
          "explanation": "We seek the principal angle whose cosine is $-\\tfrac{\\sqrt3}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the range",
          "workingLatex": "0 \\le \\theta \\le \\pi",
          "explanation": "The answer lies in the arccos range.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the reference angle",
          "workingLatex": "\\cos\\tfrac{\\pi}{6} = \\tfrac{\\sqrt3}{2}",
          "explanation": "The base angle for cosine magnitude $\\tfrac{\\sqrt3}{2}$ is $\\tfrac{\\pi}{6}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Choose the quadrant",
          "workingLatex": "\\cos\\theta < 0 \\Rightarrow \\theta \\text{ in the second quadrant}",
          "explanation": "Within $[0,\\pi]$, cosine is negative only in the second quadrant.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Reflect the reference angle",
          "workingLatex": "\\theta = \\pi - \\frac{\\pi}{6} = \\frac{5\\pi}{6}",
          "explanation": "The second-quadrant angle with reference $\\tfrac{\\pi}{6}$ is $\\pi - \\tfrac{\\pi}{6}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify",
          "workingLatex": "\\cos\\frac{5\\pi}{6} = -\\tfrac{\\sqrt3}{2}",
          "explanation": "The candidate has the required cosine and lies in range.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the result",
          "workingLatex": "\\arccos\\left(-\\tfrac{\\sqrt3}{2}\\right) = \\frac{5\\pi}{6}",
          "explanation": "This is the required exact principal value.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\arccos\\left(-\\dfrac{\\sqrt{3}}{2}\\right) = \\dfrac{5\\pi}{6}$"
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q048",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "exact value",
    "tags": ["inverse trig", "arcsin", "negative argument"],
    "questionText": "Find the exact value of $\\arcsin\\left(-\\dfrac{\\sqrt{2}}{2}\\right)$, giving your answer in radians.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rewrite as a sine equation",
          "workingLatex": "\\arcsin\\left(-\\tfrac{\\sqrt2}{2}\\right) = \\theta \\iff \\sin\\theta = -\\tfrac{\\sqrt2}{2}",
          "explanation": "We seek the principal angle whose sine is $-\\tfrac{\\sqrt2}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the range",
          "workingLatex": "-\\frac{\\pi}{2} \\le \\theta \\le \\frac{\\pi}{2}",
          "explanation": "The answer lies in the arcsin range, which includes negative angles.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the reference angle",
          "workingLatex": "\\sin\\tfrac{\\pi}{4} = \\tfrac{\\sqrt2}{2}",
          "explanation": "The base angle for sine magnitude $\\tfrac{\\sqrt2}{2}$ is $\\tfrac{\\pi}{4}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Use odd symmetry",
          "workingLatex": "\\sin\\left(-\\tfrac{\\pi}{4}\\right) = -\\tfrac{\\sqrt2}{2}",
          "explanation": "Because sine is odd, negating the input gives the negative output we need.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check it lies in range",
          "workingLatex": "-\\frac{\\pi}{2} \\le -\\frac{\\pi}{4} \\le \\frac{\\pi}{2}",
          "explanation": "The candidate is inside the arcsin range.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the result",
          "workingLatex": "\\arcsin\\left(-\\tfrac{\\sqrt2}{2}\\right) = -\\frac{\\pi}{4}",
          "explanation": "This is the required exact principal value.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\arcsin\\left(-\\dfrac{\\sqrt{2}}{2}\\right) = -\\dfrac{\\pi}{4}$"
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q049",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "angle(s)",
    "tags": ["reciprocal trig", "secant", "solving equations", "negative interval"],
    "questionText": "Solve $\\sec\\theta = 2$ for $-180^\\circ \\le \\theta < 180^\\circ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Convert to cosine",
          "workingLatex": "\\cos\\theta = \\frac{1}{2}",
          "explanation": "Taking the reciprocal gives a standard cosine equation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the principal value",
          "workingLatex": "\\theta = \\cos^{-1}\\tfrac12 = 60^\\circ",
          "explanation": "The base angle with cosine $\\tfrac12$ is $60^\\circ$, which is already inside the interval.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use the even symmetry of cosine",
          "workingLatex": "\\cos(-\\theta) = \\cos\\theta",
          "explanation": "Cosine is even, so replacing $\\theta$ by $-\\theta$ leaves the value unchanged — a natural source of a second solution in a symmetric interval.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the negative solution",
          "workingLatex": "\\theta = -60^\\circ",
          "explanation": "Since cosine is even, $-60^\\circ$ also has cosine $\\tfrac12$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check both lie in the interval",
          "workingLatex": "-180^\\circ \\le -60^\\circ, \\ 60^\\circ < 180^\\circ",
          "explanation": "Both candidates fall inside the required interval.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Confirm there are no others",
          "workingLatex": "\\cos\\theta = \\tfrac12 \\text{ twice per } 360^\\circ",
          "explanation": "Cosine reaches $\\tfrac12$ exactly twice in any full turn, so these two solutions are complete.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the solutions",
          "workingLatex": "\\theta = -60^\\circ, \\ 60^\\circ",
          "explanation": "These are the required solutions.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta = -60^\\circ, \\ 60^\\circ$"
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q050",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact value",
    "tags": ["reciprocal trig", "right-angled triangle", "cotangent"],
    "questionText": "Given that $\\cot\\theta = \\dfrac{8}{15}$ and $\\theta$ is acute, find the exact values of $\\operatorname{cosec}\\theta$ and $\\sec\\theta$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret cotangent as a ratio",
          "workingLatex": "\\cot\\theta = \\frac{\\text{adjacent}}{\\text{opposite}} = \\frac{8}{15}",
          "explanation": "For an acute angle, $\\cot\\theta = \\tfrac{\\cos\\theta}{\\sin\\theta} = \\tfrac{\\text{adj}}{\\text{opp}}$, so we can model it with a right triangle.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Label the triangle",
          "workingLatex": "\\text{adj} = 8, \\quad \\text{opp} = 15",
          "explanation": "We assign the adjacent and opposite sides directly from the ratio.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the hypotenuse",
          "workingLatex": "\\text{hyp} = \\sqrt{8^2 + 15^2} = \\sqrt{289} = 17",
          "explanation": "Pythagoras gives the hypotenuse; $8$-$15$-$17$ is a standard triple.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find sine and cosine",
          "workingLatex": "\\sin\\theta = \\tfrac{15}{17}, \\quad \\cos\\theta = \\tfrac{8}{17}",
          "explanation": "Sine is opposite over hypotenuse and cosine is adjacent over hypotenuse; both positive as $\\theta$ is acute.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute cosecant",
          "workingLatex": "\\operatorname{cosec}\\theta = \\frac{1}{\\sin\\theta} = \\frac{17}{15}",
          "explanation": "Cosecant is one over sine.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute secant",
          "workingLatex": "\\sec\\theta = \\frac{1}{\\cos\\theta} = \\frac{17}{8}",
          "explanation": "Secant is one over cosine.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the results",
          "workingLatex": "\\operatorname{cosec}\\theta = \\tfrac{17}{15}, \\quad \\sec\\theta = \\tfrac{17}{8}",
          "explanation": "These are the required exact values.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\operatorname{cosec}\\theta = \\dfrac{17}{15}, \\; \\sec\\theta = \\dfrac{17}{8}$"
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q051",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "angle(s)",
    "tags": ["reciprocal trig", "secant", "radians", "solving equations"],
    "questionText": "Solve $\\sec\\theta = \\sqrt{2}$ for $0 \\le \\theta < 2\\pi$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Convert to cosine",
          "workingLatex": "\\cos\\theta = \\frac{1}{\\sqrt2} = \\frac{\\sqrt2}{2}",
          "explanation": "Taking the reciprocal gives a cosine equation; rationalising is optional but tidy.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the principal value",
          "workingLatex": "\\theta = \\cos^{-1}\\tfrac{\\sqrt2}{2} = \\frac{\\pi}{4}",
          "explanation": "In radians, the base angle with this cosine is $\\tfrac{\\pi}{4}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Decide which quadrants apply",
          "workingLatex": "\\cos\\theta > 0 \\text{ in quadrants 1 and 4}",
          "explanation": "Positive cosine places solutions in the first and fourth quadrants.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the fourth-quadrant solution",
          "workingLatex": "\\theta = 2\\pi - \\frac{\\pi}{4} = \\frac{7\\pi}{4}",
          "explanation": "The fourth-quadrant partner is $2\\pi$ minus the base angle.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Collect solutions in range",
          "workingLatex": "\\theta = \\frac{\\pi}{4}, \\ \\frac{7\\pi}{4}",
          "explanation": "Both lie within $0 \\le \\theta < 2\\pi$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify",
          "workingLatex": "\\cos\\tfrac{\\pi}{4} = \\cos\\tfrac{7\\pi}{4} = \\tfrac{\\sqrt2}{2} \\Rightarrow \\sec = \\sqrt2",
          "explanation": "Both check out against the original secant equation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the solutions",
          "workingLatex": "\\theta = \\frac{\\pi}{4}, \\ \\frac{7\\pi}{4}",
          "explanation": "These are the required solutions in radians.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta = \\dfrac{\\pi}{4}, \\ \\dfrac{7\\pi}{4}$"
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q052",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "angle(s)",
    "tags": ["reciprocal trig", "cosecant", "solving equations"],
    "questionText": "Solve $\\operatorname{cosec}\\theta = -2$ for $0^\\circ \\le \\theta < 360^\\circ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Convert to sine",
          "workingLatex": "\\sin\\theta = -\\frac{1}{2}",
          "explanation": "Taking the reciprocal gives a sine equation with a negative value.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the base angle",
          "workingLatex": "\\sin^{-1}\\tfrac12 = 30^\\circ",
          "explanation": "Working with the positive value gives the reference angle $30^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Decide which quadrants apply",
          "workingLatex": "\\sin\\theta < 0 \\text{ in quadrants 3 and 4}",
          "explanation": "A negative sine puts the solutions in the third and fourth quadrants.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Third-quadrant solution",
          "workingLatex": "\\theta = 180^\\circ + 30^\\circ = 210^\\circ",
          "explanation": "Adding the reference angle to $180^\\circ$ gives the third-quadrant solution.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Fourth-quadrant solution",
          "workingLatex": "\\theta = 360^\\circ - 30^\\circ = 330^\\circ",
          "explanation": "Subtracting the reference angle from $360^\\circ$ gives the fourth-quadrant solution.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify",
          "workingLatex": "\\sin 210^\\circ = \\sin 330^\\circ = -\\tfrac12 \\Rightarrow \\operatorname{cosec} = -2",
          "explanation": "Both satisfy the original cosecant equation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the solutions",
          "workingLatex": "\\theta = 210^\\circ, \\ 330^\\circ",
          "explanation": "These are the required solutions.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta = 210^\\circ, \\ 330^\\circ$"
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q053",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "angle(s)",
    "tags": ["reciprocal trig", "secant", "quadratic equation", "solving equations"],
    "questionText": "Solve $2\\sec^2\\theta - 3\\sec\\theta - 2 = 0$ for $0^\\circ \\le \\theta < 360^\\circ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise a quadratic in secant",
          "workingLatex": "2(\\sec\\theta)^2 - 3(\\sec\\theta) - 2 = 0",
          "explanation": "Treating $\\sec\\theta$ as a single variable reveals an ordinary quadratic, which we can factorise.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Factorise",
          "workingLatex": "(2\\sec\\theta + 1)(\\sec\\theta - 2) = 0",
          "explanation": "The factors multiply back to the original quadratic, splitting the problem into two simple equations.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set each factor to zero",
          "workingLatex": "\\sec\\theta = -\\tfrac{1}{2} \\quad \\text{or} \\quad \\sec\\theta = 2",
          "explanation": "A product is zero when a factor is zero, giving two candidate values.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Recall the range of secant",
          "workingLatex": "|\\cos\\theta| \\le 1 \\Rightarrow |\\sec\\theta| \\ge 1",
          "explanation": "Because cosine never exceeds $1$ in size, its reciprocal secant can never lie strictly between $-1$ and $1$. This is a crucial check.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Reject the impossible value",
          "workingLatex": "\\sec\\theta = -\\tfrac12 \\text{ is impossible}",
          "explanation": "Since $|-\\tfrac12| < 1$, no angle has this secant, so we discard it entirely.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Keep the valid value",
          "workingLatex": "\\sec\\theta = 2",
          "explanation": "Only the second value can produce solutions.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Convert to cosine",
          "workingLatex": "\\cos\\theta = \\frac{1}{2}",
          "explanation": "Taking the reciprocal gives a standard cosine equation.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find the base angle",
          "workingLatex": "\\cos^{-1}\\tfrac12 = 60^\\circ",
          "explanation": "The reference angle with cosine $\\tfrac12$ is $60^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Decide which quadrants apply",
          "workingLatex": "\\cos\\theta > 0 \\text{ in quadrants 1 and 4}",
          "explanation": "A positive cosine gives first- and fourth-quadrant solutions.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Fourth-quadrant solution",
          "workingLatex": "\\theta = 360^\\circ - 60^\\circ = 300^\\circ",
          "explanation": "The fourth-quadrant partner of $60^\\circ$ is $300^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Collect solutions",
          "workingLatex": "\\theta = 60^\\circ, \\ 300^\\circ",
          "explanation": "Both lie in the interval.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Verify in the original equation",
          "workingLatex": "2(2)^2 - 3(2) - 2 = 8 - 6 - 2 = 0",
          "explanation": "Substituting $\\sec\\theta = 2$ back gives zero, confirming the surviving root is correct.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the solutions",
          "workingLatex": "\\theta = 60^\\circ, \\ 300^\\circ",
          "explanation": "These are the required solutions.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta = 60^\\circ, \\ 300^\\circ$"
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q054",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "angle(s)",
    "tags": ["reciprocal trig", "cosecant", "quadratic equation", "solving equations"],
    "questionText": "Solve $\\operatorname{cosec}^2\\theta - 3\\operatorname{cosec}\\theta + 2 = 0$ for $0^\\circ \\le \\theta < 360^\\circ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise a quadratic in cosecant",
          "workingLatex": "(\\operatorname{cosec}\\theta)^2 - 3(\\operatorname{cosec}\\theta) + 2 = 0",
          "explanation": "Treating $\\operatorname{cosec}\\theta$ as the variable exposes a quadratic.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Factorise",
          "workingLatex": "(\\operatorname{cosec}\\theta - 1)(\\operatorname{cosec}\\theta - 2) = 0",
          "explanation": "The quadratic factorises neatly into two brackets.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set each factor to zero",
          "workingLatex": "\\operatorname{cosec}\\theta = 1 \\quad \\text{or} \\quad \\operatorname{cosec}\\theta = 2",
          "explanation": "Both values are at least $1$ in size, so both are possible for cosecant.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Convert the first to sine",
          "workingLatex": "\\operatorname{cosec}\\theta = 1 \\Rightarrow \\sin\\theta = 1",
          "explanation": "Taking reciprocals gives a sine equation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve the first case",
          "workingLatex": "\\sin\\theta = 1 \\Rightarrow \\theta = 90^\\circ",
          "explanation": "Sine equals $1$ only at $90^\\circ$ in the interval.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Convert the second to sine",
          "workingLatex": "\\operatorname{cosec}\\theta = 2 \\Rightarrow \\sin\\theta = \\tfrac12",
          "explanation": "The reciprocal gives a familiar sine equation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the base angle",
          "workingLatex": "\\sin^{-1}\\tfrac12 = 30^\\circ",
          "explanation": "The reference angle is $30^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve the second case",
          "workingLatex": "\\sin\\theta = \\tfrac12 \\Rightarrow \\theta = 30^\\circ, \\ 150^\\circ",
          "explanation": "Positive sine gives first- and second-quadrant solutions.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Collect all solutions",
          "workingLatex": "\\theta = 30^\\circ, \\ 90^\\circ, \\ 150^\\circ",
          "explanation": "Combining both cases gives three solutions.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Confirm all are valid",
          "workingLatex": "\\sin\\theta \\ne 0 \\text{ at each}",
          "explanation": "Cosecant requires non-zero sine; all three solutions satisfy this.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Verify a value",
          "workingLatex": "\\theta = 90^\\circ: \\ 1 - 3 + 2 = 0",
          "explanation": "Substituting $\\operatorname{cosec}90^\\circ = 1$ gives zero, confirming that root.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State the solutions",
          "workingLatex": "\\theta = 30^\\circ, \\ 90^\\circ, \\ 150^\\circ",
          "explanation": "These are the required solutions.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta = 30^\\circ, \\ 90^\\circ, \\ 150^\\circ$"
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q055",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "angle(s)",
    "tags": ["identities", "secant", "tangent", "quadratic equation"],
    "questionText": "Solve $3\\tan^2\\theta = \\sec^2\\theta + 1$ for $0^\\circ \\le \\theta < 360^\\circ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the connecting identity",
          "workingLatex": "\\sec^2\\theta = 1 + \\tan^2\\theta",
          "explanation": "The equation mixes $\\tan^2$ and $\\sec^2$; the identity lets us write everything in one function.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute for sec squared",
          "workingLatex": "3\\tan^2\\theta = (1 + \\tan^2\\theta) + 1",
          "explanation": "Replacing $\\sec^2\\theta$ removes it in favour of $\\tan^2\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify the right side",
          "workingLatex": "3\\tan^2\\theta = \\tan^2\\theta + 2",
          "explanation": "Combining the constant terms tidies the equation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Collect terms",
          "workingLatex": "2\\tan^2\\theta = 2",
          "explanation": "Subtracting $\\tan^2\\theta$ from both sides gathers the like terms.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Isolate tan squared",
          "workingLatex": "\\tan^2\\theta = 1",
          "explanation": "Dividing by $2$ leaves a simple squared equation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Square-root",
          "workingLatex": "\\tan\\theta = \\pm 1",
          "explanation": "Both signs are retained from the square root.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve the positive case",
          "workingLatex": "\\tan\\theta = 1 \\Rightarrow \\theta = 45^\\circ, \\ 225^\\circ",
          "explanation": "Using the $180^\\circ$ period gives quadrant-1 and quadrant-3 solutions.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve the negative case",
          "workingLatex": "\\tan\\theta = -1 \\Rightarrow \\theta = 135^\\circ, \\ 315^\\circ",
          "explanation": "The negative case gives quadrant-2 and quadrant-4 solutions.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Collect all solutions",
          "workingLatex": "\\theta = 45^\\circ, \\ 135^\\circ, \\ 225^\\circ, \\ 315^\\circ",
          "explanation": "The four solutions are spaced $90^\\circ$ apart, a good consistency check.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check secant is defined",
          "workingLatex": "\\cos\\theta \\ne 0 \\text{ at each}",
          "explanation": "The original equation involves $\\sec\\theta$, so cosine must be non-zero; all four solutions satisfy this.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Verify a value",
          "workingLatex": "\\theta = 45^\\circ: \\ 3(1) = 2 + 1 \\checkmark",
          "explanation": "At $45^\\circ$, $\\tan^2 = 1$ and $\\sec^2 = 2$, so both sides equal $3$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State the solutions",
          "workingLatex": "\\theta = 45^\\circ, \\ 135^\\circ, \\ 225^\\circ, \\ 315^\\circ",
          "explanation": "These are the required solutions.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta = 45^\\circ, \\ 135^\\circ, \\ 225^\\circ, \\ 315^\\circ$"
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q056",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "angle(s)",
    "tags": ["identities", "cosecant", "cotangent", "solving equations"],
    "questionText": "Solve $3\\operatorname{cosec}^2\\theta - 4\\cot^2\\theta = 2$ for $0^\\circ \\le \\theta < 360^\\circ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the connecting identity",
          "workingLatex": "\\operatorname{cosec}^2\\theta = 1 + \\cot^2\\theta",
          "explanation": "The equation mixes $\\operatorname{cosec}^2$ and $\\cot^2$, so we rewrite one in terms of the other.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "3(1 + \\cot^2\\theta) - 4\\cot^2\\theta = 2",
          "explanation": "Replacing $\\operatorname{cosec}^2\\theta$ leaves an equation purely in $\\cot^2\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand",
          "workingLatex": "3 + 3\\cot^2\\theta - 4\\cot^2\\theta = 2",
          "explanation": "Multiplying out the bracket prepares for collecting like terms.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify",
          "workingLatex": "3 - \\cot^2\\theta = 2",
          "explanation": "The cotangent-squared terms combine to $-\\cot^2\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Isolate cot squared",
          "workingLatex": "\\cot^2\\theta = 1",
          "explanation": "Rearranging leaves a simple squared equation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Convert to tangent",
          "workingLatex": "\\tan^2\\theta = 1 \\Rightarrow \\tan\\theta = \\pm 1",
          "explanation": "Since $\\cot^2\\theta = 1$ means $\\tan^2\\theta = 1$, we solve the simpler tangent form.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve the positive case",
          "workingLatex": "\\tan\\theta = 1 \\Rightarrow \\theta = 45^\\circ, \\ 225^\\circ",
          "explanation": "Quadrant-1 and quadrant-3 solutions from the $180^\\circ$ period.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve the negative case",
          "workingLatex": "\\tan\\theta = -1 \\Rightarrow \\theta = 135^\\circ, \\ 315^\\circ",
          "explanation": "Quadrant-2 and quadrant-4 solutions.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Confirm all are valid",
          "workingLatex": "\\sin\\theta \\ne 0 \\text{ at each}",
          "explanation": "Cosecant and cotangent need non-zero sine; all four solutions satisfy this.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Verify a value",
          "workingLatex": "\\theta = 45^\\circ: \\ 3(2) - 4(1) = 2 \\checkmark",
          "explanation": "At $45^\\circ$, $\\operatorname{cosec}^2 = 2$ and $\\cot^2 = 1$, giving $6 - 4 = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the solutions",
          "workingLatex": "\\theta = 45^\\circ, \\ 135^\\circ, \\ 225^\\circ, \\ 315^\\circ",
          "explanation": "These are the required solutions.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta = 45^\\circ, \\ 135^\\circ, \\ 225^\\circ, \\ 315^\\circ$"
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q057",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "proof",
    "tags": ["identities", "proof", "secant", "tangent"],
    "questionText": "Prove that $(\\sec\\theta - \\tan\\theta)(\\sec\\theta + \\tan\\theta) \\equiv 1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Start from the left-hand side",
          "workingLatex": "\\text{LHS} = (\\sec\\theta - \\tan\\theta)(\\sec\\theta + \\tan\\theta)",
          "explanation": "The bracketed product has the shape of a difference of two squares, which we exploit.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply difference of two squares",
          "workingLatex": "= \\sec^2\\theta - \\tan^2\\theta",
          "explanation": "Expanding $(a-b)(a+b) = a^2 - b^2$ removes the cross terms cleanly.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall the Pythagorean identity",
          "workingLatex": "1 + \\tan^2\\theta = \\sec^2\\theta",
          "explanation": "This identity directly relates the two squared terms we have.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rearrange the identity",
          "workingLatex": "\\sec^2\\theta - \\tan^2\\theta = 1",
          "explanation": "Subtracting $\\tan^2\\theta$ from both sides of the identity gives exactly our expression.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute",
          "workingLatex": "\\text{LHS} = 1",
          "explanation": "The whole product collapses to $1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclude the proof",
          "workingLatex": "(\\sec\\theta - \\tan\\theta)(\\sec\\theta + \\tan\\theta) = 1 \\quad \\blacksquare",
          "explanation": "The left-hand side equals the right-hand side, so the identity holds.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(\\sec\\theta - \\tan\\theta)(\\sec\\theta + \\tan\\theta) \\equiv 1$ (proved)"
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q058",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "proof",
    "tags": ["identities", "proof", "secant", "tangent"],
    "questionText": "Prove that $\\sec^4\\theta - \\sec^2\\theta \\equiv \\tan^4\\theta + \\tan^2\\theta$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Start from the left-hand side",
          "workingLatex": "\\text{LHS} = \\sec^4\\theta - \\sec^2\\theta",
          "explanation": "We work with the left-hand side, aiming to reach the tangent expression.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Factor out sec squared",
          "workingLatex": "= \\sec^2\\theta(\\sec^2\\theta - 1)",
          "explanation": "Taking out the common factor $\\sec^2\\theta$ prepares for a Pythagorean substitution.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use the identity on the bracket",
          "workingLatex": "\\sec^2\\theta - 1 = \\tan^2\\theta",
          "explanation": "Rearranging $1 + \\tan^2\\theta = \\sec^2\\theta$ gives the bracket as $\\tan^2\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the bracket",
          "workingLatex": "= \\sec^2\\theta \\cdot \\tan^2\\theta",
          "explanation": "Replacing the bracket connects the expression to tangents.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Replace the remaining sec squared",
          "workingLatex": "= (1 + \\tan^2\\theta)\\tan^2\\theta",
          "explanation": "Using the identity again on $\\sec^2\\theta$ writes everything in tangent.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Expand",
          "workingLatex": "= \\tan^2\\theta + \\tan^4\\theta",
          "explanation": "Multiplying out the bracket gives two tangent powers.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Reorder",
          "workingLatex": "= \\tan^4\\theta + \\tan^2\\theta",
          "explanation": "Writing the higher power first matches the right-hand side exactly.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Conclude the proof",
          "workingLatex": "\\sec^4\\theta - \\sec^2\\theta = \\tan^4\\theta + \\tan^2\\theta \\quad \\blacksquare",
          "explanation": "The identity is proved.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sec^4\\theta - \\sec^2\\theta \\equiv \\tan^4\\theta + \\tan^2\\theta$ (proved)"
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q059",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "proof",
    "tags": ["identities", "proof", "cosecant", "cotangent"],
    "questionText": "Prove that $\\operatorname{cosec}^4\\theta - \\cot^4\\theta \\equiv \\operatorname{cosec}^2\\theta + \\cot^2\\theta$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Start from the left-hand side",
          "workingLatex": "\\text{LHS} = \\operatorname{cosec}^4\\theta - \\cot^4\\theta",
          "explanation": "The left-hand side is a difference of two fourth powers, i.e. a difference of squares of squares.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply difference of two squares",
          "workingLatex": "= (\\operatorname{cosec}^2\\theta - \\cot^2\\theta)(\\operatorname{cosec}^2\\theta + \\cot^2\\theta)",
          "explanation": "Treating $\\operatorname{cosec}^2\\theta$ and $\\cot^2\\theta$ as the squared quantities factorises the difference.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall the Pythagorean identity",
          "workingLatex": "1 + \\cot^2\\theta = \\operatorname{cosec}^2\\theta",
          "explanation": "This is the identity linking cosecant and cotangent.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the first bracket",
          "workingLatex": "\\operatorname{cosec}^2\\theta - \\cot^2\\theta = 1",
          "explanation": "Rearranging the identity shows the first bracket is simply $1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute",
          "workingLatex": "= 1 \\cdot (\\operatorname{cosec}^2\\theta + \\cot^2\\theta)",
          "explanation": "Replacing the first bracket by $1$ leaves only the second factor.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify",
          "workingLatex": "= \\operatorname{cosec}^2\\theta + \\cot^2\\theta",
          "explanation": "Multiplying by $1$ leaves the required expression.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclude the proof",
          "workingLatex": "\\operatorname{cosec}^4\\theta - \\cot^4\\theta = \\operatorname{cosec}^2\\theta + \\cot^2\\theta \\quad \\blacksquare",
          "explanation": "The identity is proved.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\operatorname{cosec}^4\\theta - \\cot^4\\theta \\equiv \\operatorname{cosec}^2\\theta + \\cot^2\\theta$ (proved)"
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q060",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "proof",
    "tags": ["identities", "proof", "reciprocal trig"],
    "questionText": "Prove that $\\tan\\theta + \\cot\\theta \\equiv \\sec\\theta \\operatorname{cosec}\\theta$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Start from the left-hand side",
          "workingLatex": "\\text{LHS} = \\tan\\theta + \\cot\\theta",
          "explanation": "We simplify the sum of tangent and cotangent towards the product on the right.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rewrite in sine and cosine",
          "workingLatex": "= \\frac{\\sin\\theta}{\\cos\\theta} + \\frac{\\cos\\theta}{\\sin\\theta}",
          "explanation": "Expressing both terms in sine and cosine is the natural way to add them.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use a common denominator",
          "workingLatex": "= \\frac{\\sin^2\\theta + \\cos^2\\theta}{\\sin\\theta \\cos\\theta}",
          "explanation": "Combining over $\\sin\\theta\\cos\\theta$ brings the two fractions together.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the Pythagorean identity",
          "workingLatex": "\\sin^2\\theta + \\cos^2\\theta = 1",
          "explanation": "The numerator collapses to $1$, which is the key simplification.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute",
          "workingLatex": "= \\frac{1}{\\sin\\theta \\cos\\theta}",
          "explanation": "The expression is now a single reciprocal ready to split.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Split the reciprocal",
          "workingLatex": "= \\frac{1}{\\cos\\theta} \\cdot \\frac{1}{\\sin\\theta}",
          "explanation": "Separating the product of denominators reveals the two reciprocal functions.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Recognise secant and cosecant",
          "workingLatex": "= \\sec\\theta \\operatorname{cosec}\\theta",
          "explanation": "This is exactly the right-hand side.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Conclude the proof",
          "workingLatex": "\\tan\\theta + \\cot\\theta = \\sec\\theta \\operatorname{cosec}\\theta \\quad \\blacksquare",
          "explanation": "The identity is proved.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\tan\\theta + \\cot\\theta \\equiv \\sec\\theta \\operatorname{cosec}\\theta$ (proved)"
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q061",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "exact value",
    "tags": ["reciprocal trig", "quadrants", "exact value"],
    "questionText": "Given that $\\sec\\theta = \\dfrac{13}{5}$ and $\\theta$ lies in the fourth quadrant ($270^\\circ < \\theta < 360^\\circ$), find the exact values of $\\sin\\theta$ and $\\tan\\theta$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Convert secant to cosine",
          "workingLatex": "\\cos\\theta = \\frac{1}{\\sec\\theta} = \\frac{5}{13}",
          "explanation": "Cosine is the reciprocal of the given secant; note it is positive, consistent with the fourth quadrant.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find sine squared",
          "workingLatex": "\\sin^2\\theta = 1 - \\cos^2\\theta = 1 - \\frac{25}{169}",
          "explanation": "The Pythagorean identity gives sine from the known cosine.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify",
          "workingLatex": "\\sin^2\\theta = \\frac{144}{169}",
          "explanation": "Subtracting the fractions leaves $\\tfrac{144}{169}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Take the root",
          "workingLatex": "\\sin\\theta = \\pm\\frac{12}{13}",
          "explanation": "The square root gives two possibilities; the quadrant resolves the sign.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Use the quadrant to fix the sign",
          "workingLatex": "\\text{Q4} \\Rightarrow \\sin\\theta < 0 \\Rightarrow \\sin\\theta = -\\frac{12}{13}",
          "explanation": "In the fourth quadrant sine is negative, so we take the negative root.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Form the tangent",
          "workingLatex": "\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta} = \\frac{-12/13}{5/13}",
          "explanation": "Tangent is sine over cosine.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify the tangent",
          "workingLatex": "\\tan\\theta = -\\frac{12}{5}",
          "explanation": "The thirteenths cancel and the sign is negative, as expected for the fourth quadrant.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the results",
          "workingLatex": "\\sin\\theta = -\\tfrac{12}{13}, \\quad \\tan\\theta = -\\tfrac{12}{5}",
          "explanation": "These are the required exact values.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sin\\theta = -\\dfrac{12}{13}, \\; \\tan\\theta = -\\dfrac{12}{5}$"
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q062",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "exact value",
    "tags": ["reciprocal trig", "quadrants", "exact value"],
    "questionText": "Given that $\\tan\\theta = -\\sqrt{3}$ and $\\theta$ lies in the second quadrant, find the exact values of $\\sec\\theta$ and $\\operatorname{cosec}\\theta$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find secant squared from the identity",
          "workingLatex": "\\sec^2\\theta = 1 + \\tan^2\\theta = 1 + 3 = 4",
          "explanation": "The identity links tangent to secant directly, avoiding the need to find cosine first.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Take the root",
          "workingLatex": "\\sec\\theta = \\pm 2",
          "explanation": "Square-rooting gives two possibilities to resolve by quadrant.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use the quadrant for secant",
          "workingLatex": "\\text{Q2} \\Rightarrow \\cos\\theta < 0 \\Rightarrow \\sec\\theta = -2",
          "explanation": "In the second quadrant cosine is negative, so its reciprocal secant is negative too.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Recover cosine",
          "workingLatex": "\\cos\\theta = \\frac{1}{\\sec\\theta} = -\\frac{1}{2}",
          "explanation": "Cosine is the reciprocal of secant.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find sine squared",
          "workingLatex": "\\sin^2\\theta = 1 - \\cos^2\\theta = 1 - \\tfrac14 = \\tfrac34",
          "explanation": "The Pythagorean identity gives sine from cosine.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Fix the sign of sine",
          "workingLatex": "\\text{Q2} \\Rightarrow \\sin\\theta > 0 \\Rightarrow \\sin\\theta = \\frac{\\sqrt3}{2}",
          "explanation": "In the second quadrant sine is positive, so we take the positive root.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compute cosecant",
          "workingLatex": "\\operatorname{cosec}\\theta = \\frac{1}{\\sin\\theta} = \\frac{2}{\\sqrt3} = \\frac{2\\sqrt3}{3}",
          "explanation": "Cosecant is one over sine; we rationalise the denominator.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the results",
          "workingLatex": "\\sec\\theta = -2, \\quad \\operatorname{cosec}\\theta = \\frac{2\\sqrt3}{3}",
          "explanation": "These are the required exact values.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sec\\theta = -2, \\; \\operatorname{cosec}\\theta = \\dfrac{2\\sqrt3}{3}$"
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q063",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "exact value",
    "tags": ["inverse trig", "composite", "double angle"],
    "questionText": "Find the exact value of $\\sin\\left(2\\arctan\\dfrac{1}{3}\\right)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Name the inner angle",
          "workingLatex": "\\text{let } \\alpha = \\arctan\\tfrac{1}{3}, \\quad \\tan\\alpha = \\tfrac{1}{3}",
          "explanation": "The expression is $\\sin 2\\alpha$, so first pin down the angle $\\alpha$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Locate the angle",
          "workingLatex": "-\\frac{\\pi}{2} < \\alpha < \\frac{\\pi}{2}, \\ \\tan\\alpha > 0 \\Rightarrow \\alpha \\text{ in Q1}",
          "explanation": "A positive tangent in the arctan range means $\\alpha$ is a first-quadrant angle, so its sine and cosine are positive.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Choose the double-angle formula",
          "workingLatex": "\\sin 2\\alpha = 2\\sin\\alpha\\cos\\alpha",
          "explanation": "The double-angle identity turns $\\sin 2\\alpha$ into something built from $\\sin\\alpha$ and $\\cos\\alpha$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Model with a right triangle",
          "workingLatex": "\\text{opp} = 1, \\ \\text{adj} = 3",
          "explanation": "Since $\\tan\\alpha = \\tfrac{\\text{opp}}{\\text{adj}} = \\tfrac13$, a triangle with these legs captures $\\alpha$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the hypotenuse",
          "workingLatex": "\\text{hyp} = \\sqrt{1^2 + 3^2} = \\sqrt{10}",
          "explanation": "Pythagoras gives the hypotenuse.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Read off sine and cosine",
          "workingLatex": "\\sin\\alpha = \\frac{1}{\\sqrt{10}}, \\quad \\cos\\alpha = \\frac{3}{\\sqrt{10}}",
          "explanation": "Both are positive, as expected for a first-quadrant angle.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute into the formula",
          "workingLatex": "\\sin 2\\alpha = 2 \\cdot \\frac{1}{\\sqrt{10}} \\cdot \\frac{3}{\\sqrt{10}}",
          "explanation": "Putting the values into the double-angle identity.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Simplify",
          "workingLatex": "= \\frac{6}{10} = \\frac{3}{5}",
          "explanation": "The product of the roots gives $10$ in the denominator, and the fraction reduces to $\\tfrac35$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the result",
          "workingLatex": "\\sin\\left(2\\arctan\\tfrac{1}{3}\\right) = \\frac{3}{5}",
          "explanation": "This is the required exact value.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sin\\left(2\\arctan\\dfrac{1}{3}\\right) = \\dfrac{3}{5}$"
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q064",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "proof",
    "tags": ["inverse trig", "proof", "arcsin"],
    "questionText": "Show that $\\cos(\\arcsin x) = \\sqrt{1 - x^2}$ for $-1 \\le x \\le 1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Name the inner angle",
          "workingLatex": "\\text{let } \\alpha = \\arcsin x, \\quad \\sin\\alpha = x",
          "explanation": "Setting the inverse equal to an angle turns the identity into a statement about $\\cos\\alpha$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the range of alpha",
          "workingLatex": "-\\frac{\\pi}{2} \\le \\alpha \\le \\frac{\\pi}{2}",
          "explanation": "As the output of arcsin, $\\alpha$ lies in this interval.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Deduce the sign of cosine",
          "workingLatex": "-\\frac{\\pi}{2} \\le \\alpha \\le \\frac{\\pi}{2} \\Rightarrow \\cos\\alpha \\ge 0",
          "explanation": "Cosine is non-negative throughout the arcsin range, which is what justifies the positive square root at the end.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the Pythagorean identity",
          "workingLatex": "\\cos^2\\alpha = 1 - \\sin^2\\alpha = 1 - x^2",
          "explanation": "Substituting $\\sin\\alpha = x$ expresses $\\cos^2\\alpha$ in terms of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Take the non-negative root",
          "workingLatex": "\\cos\\alpha = \\sqrt{1 - x^2}",
          "explanation": "Because $\\cos\\alpha \\ge 0$, only the positive root is valid.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Rewrite in terms of x",
          "workingLatex": "\\cos(\\arcsin x) = \\sqrt{1 - x^2}",
          "explanation": "Replacing $\\alpha$ by $\\arcsin x$ restates the result.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclude",
          "workingLatex": "\\cos(\\arcsin x) = \\sqrt{1 - x^2} \\quad \\blacksquare",
          "explanation": "The identity holds for all $x$ in $[-1, 1]$, as required.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\cos(\\arcsin x) = \\sqrt{1 - x^2}$ (shown)"
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q065",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "proof",
    "tags": ["inverse trig", "proof", "arccos"],
    "questionText": "Show that $\\tan(\\arccos x) = \\dfrac{\\sqrt{1 - x^2}}{x}$ for $-1 \\le x \\le 1$, $x \\neq 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Name the inner angle",
          "workingLatex": "\\text{let } \\alpha = \\arccos x, \\quad \\cos\\alpha = x",
          "explanation": "Introducing $\\alpha$ converts the identity into a statement about $\\tan\\alpha$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the range of alpha",
          "workingLatex": "0 \\le \\alpha \\le \\pi",
          "explanation": "As the output of arccos, $\\alpha$ lies here; we exclude $x = 0$ so that $\\alpha \\neq \\tfrac{\\pi}{2}$ and the tangent is defined.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Deduce the sign of sine",
          "workingLatex": "0 \\le \\alpha \\le \\pi \\Rightarrow \\sin\\alpha \\ge 0",
          "explanation": "Sine is non-negative across the arccos range, fixing the sign of the root.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find sine",
          "workingLatex": "\\sin\\alpha = \\sqrt{1 - \\cos^2\\alpha} = \\sqrt{1 - x^2}",
          "explanation": "The Pythagorean identity with the non-negative root gives sine in terms of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Form the tangent",
          "workingLatex": "\\tan\\alpha = \\frac{\\sin\\alpha}{\\cos\\alpha} = \\frac{\\sqrt{1 - x^2}}{x}",
          "explanation": "Tangent is sine over cosine; the sign of the whole expression is carried by $x$ in the denominator.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Rewrite in terms of x",
          "workingLatex": "\\tan(\\arccos x) = \\frac{\\sqrt{1 - x^2}}{x}",
          "explanation": "Replacing $\\alpha$ by $\\arccos x$ restates the result.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclude",
          "workingLatex": "\\tan(\\arccos x) = \\frac{\\sqrt{1 - x^2}}{x} \\quad \\blacksquare",
          "explanation": "The identity holds for all valid $x$, as required.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\tan(\\arccos x) = \\dfrac{\\sqrt{1 - x^2}}{x}$ (shown)"
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q066",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "exact value",
    "tags": ["inverse trig", "arcsin", "arccos", "solving equations"],
    "questionText": "Solve $\\arcsin x = \\arccos x$, giving the exact value of $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Note the shared domain",
          "workingLatex": "-1 \\le x \\le 1",
          "explanation": "Both inverse functions require inputs in this interval, so any solution must lie here.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the complementary identity",
          "workingLatex": "\\arcsin x + \\arccos x = \\frac{\\pi}{2}",
          "explanation": "This standard identity links the two inverse functions and turns the equation into something solvable.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use the equality to substitute",
          "workingLatex": "\\arccos x = \\arcsin x",
          "explanation": "The equation tells us the two inverses are equal, so we can replace one by the other in the identity.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the identity",
          "workingLatex": "\\arcsin x + \\arcsin x = \\frac{\\pi}{2}",
          "explanation": "Replacing $\\arccos x$ by $\\arcsin x$ leaves a single unknown.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for the inverse",
          "workingLatex": "2\\arcsin x = \\frac{\\pi}{2} \\Rightarrow \\arcsin x = \\frac{\\pi}{4}",
          "explanation": "Dividing by $2$ isolates $\\arcsin x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Undo the arcsine",
          "workingLatex": "x = \\sin\\frac{\\pi}{4} = \\frac{\\sqrt{2}}{2}",
          "explanation": "Applying sine to both sides recovers $x$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify",
          "workingLatex": "\\arccos\\tfrac{\\sqrt2}{2} = \\frac{\\pi}{4} = \\arcsin\\tfrac{\\sqrt2}{2}",
          "explanation": "Both inverses give $\\tfrac{\\pi}{4}$, so the equation is satisfied.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the result",
          "workingLatex": "x = \\frac{\\sqrt{2}}{2}",
          "explanation": "This is the required exact solution.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = \\dfrac{\\sqrt{2}}{2}$"
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q067",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "proof",
    "tags": ["inverse trig", "proof", "arcsin", "arccos"],
    "questionText": "Prove that $\\arcsin x + \\arccos x = \\dfrac{\\pi}{2}$ for $-1 \\le x \\le 1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Name the arcsine",
          "workingLatex": "\\text{let } \\alpha = \\arcsin x, \\quad \\sin\\alpha = x",
          "explanation": "Naming the arcsine lets us reason about a concrete angle rather than the inverse notation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State its range",
          "workingLatex": "-\\frac{\\pi}{2} \\le \\alpha \\le \\frac{\\pi}{2}",
          "explanation": "This is the principal range of arcsin.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Consider the complementary angle",
          "workingLatex": "\\cos\\left(\\frac{\\pi}{2} - \\alpha\\right) = \\sin\\alpha = x",
          "explanation": "The co-function identity converts a sine into the cosine of the complementary angle, which is exactly what arccos needs.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check the complementary angle is in the arccos range",
          "workingLatex": "-\\frac{\\pi}{2} \\le \\alpha \\le \\frac{\\pi}{2} \\Rightarrow 0 \\le \\frac{\\pi}{2} - \\alpha \\le \\pi",
          "explanation": "This range check is essential: only because $\\tfrac{\\pi}{2} - \\alpha$ lies in $[0,\\pi]$ can we identify it as the principal arccos value.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Identify the arccosine",
          "workingLatex": "\\arccos x = \\frac{\\pi}{2} - \\alpha",
          "explanation": "Since the complementary angle has cosine $x$ and lies in the arccos range, it is precisely $\\arccos x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Add the two inverses",
          "workingLatex": "\\arcsin x + \\arccos x = \\alpha + \\left(\\frac{\\pi}{2} - \\alpha\\right)",
          "explanation": "Substituting both expressions sets up the cancellation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify",
          "workingLatex": "= \\frac{\\pi}{2}",
          "explanation": "The $\\alpha$ terms cancel, leaving the constant.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Conclude the proof",
          "workingLatex": "\\arcsin x + \\arccos x = \\frac{\\pi}{2} \\quad \\blacksquare",
          "explanation": "The identity holds for all $x$ in $[-1, 1]$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\arcsin x + \\arccos x = \\dfrac{\\pi}{2}$ (proved)"
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q068",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "angle(s)",
    "tags": ["identities", "cosecant", "cotangent", "solving equations"],
    "questionText": "Solve $\\operatorname{cosec}^2\\theta = 1 + \\cot\\theta$ for $0^\\circ \\le \\theta < 360^\\circ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Replace cosec squared using the identity",
          "workingLatex": "1 + \\cot^2\\theta = 1 + \\cot\\theta",
          "explanation": "Using $\\operatorname{cosec}^2\\theta = 1 + \\cot^2\\theta$ writes everything in terms of $\\cot\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Cancel the constant",
          "workingLatex": "\\cot^2\\theta = \\cot\\theta",
          "explanation": "Subtracting $1$ from both sides removes the constants.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Move to one side",
          "workingLatex": "\\cot^2\\theta - \\cot\\theta = 0",
          "explanation": "Bringing everything to one side prepares for factorising, rather than dividing by $\\cot\\theta$ and losing solutions.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Factorise",
          "workingLatex": "\\cot\\theta(\\cot\\theta - 1) = 0",
          "explanation": "Taking out the common factor gives two cases.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve the first case",
          "workingLatex": "\\cot\\theta = 0 \\Rightarrow \\cos\\theta = 0 \\Rightarrow \\theta = 90^\\circ, \\ 270^\\circ",
          "explanation": "Cotangent is zero where cosine is zero, giving these two angles.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve the second case",
          "workingLatex": "\\cot\\theta = 1 \\Rightarrow \\tan\\theta = 1 \\Rightarrow \\theta = 45^\\circ, \\ 225^\\circ",
          "explanation": "Cotangent one means tangent one, giving quadrant-1 and quadrant-3 angles.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check the equation is defined",
          "workingLatex": "\\sin\\theta \\ne 0 \\text{ at } 45^\\circ, 90^\\circ, 225^\\circ, 270^\\circ",
          "explanation": "Both $\\operatorname{cosec}$ and $\\cot$ need non-zero sine; all four solutions satisfy this.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Collect the solutions",
          "workingLatex": "\\theta = 45^\\circ, \\ 90^\\circ, \\ 225^\\circ, \\ 270^\\circ",
          "explanation": "Combining both cases gives four solutions.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the solutions",
          "workingLatex": "\\theta = 45^\\circ, \\ 90^\\circ, \\ 225^\\circ, \\ 270^\\circ",
          "explanation": "These are the required solutions.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta = 45^\\circ, \\ 90^\\circ, \\ 225^\\circ, \\ 270^\\circ$"
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q069",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "angle(s)",
    "tags": ["reciprocal trig", "cosecant", "solving equations"],
    "questionText": "Solve $2\\sin\\theta = \\operatorname{cosec}\\theta$ for $0^\\circ \\le \\theta < 360^\\circ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Replace cosecant",
          "workingLatex": "2\\sin\\theta = \\frac{1}{\\sin\\theta}",
          "explanation": "Writing cosecant as $\\tfrac{1}{\\sin\\theta}$ gives an equation purely in sine.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Clear the fraction",
          "workingLatex": "2\\sin^2\\theta = 1",
          "explanation": "Multiplying by $\\sin\\theta$ removes the denominator; a zero sine cannot satisfy the equation, so nothing is lost.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Isolate sin squared",
          "workingLatex": "\\sin^2\\theta = \\frac{1}{2}",
          "explanation": "Dividing by $2$ isolates the squared term.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Square-root",
          "workingLatex": "\\sin\\theta = \\pm\\frac{1}{\\sqrt{2}} = \\pm\\frac{\\sqrt2}{2}",
          "explanation": "Both signs are retained.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the base angle",
          "workingLatex": "\\sin^{-1}\\tfrac{\\sqrt2}{2} = 45^\\circ",
          "explanation": "The reference angle for sine magnitude $\\tfrac{\\sqrt2}{2}$ is $45^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve the positive case",
          "workingLatex": "\\sin\\theta = \\tfrac{\\sqrt2}{2} \\Rightarrow \\theta = 45^\\circ, \\ 135^\\circ",
          "explanation": "Positive sine gives quadrant-1 and quadrant-2 solutions.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve the negative case",
          "workingLatex": "\\sin\\theta = -\\tfrac{\\sqrt2}{2} \\Rightarrow \\theta = 225^\\circ, \\ 315^\\circ",
          "explanation": "Negative sine gives quadrant-3 and quadrant-4 solutions.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Collect all solutions",
          "workingLatex": "\\theta = 45^\\circ, \\ 135^\\circ, \\ 225^\\circ, \\ 315^\\circ",
          "explanation": "All four lie in the interval.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the solutions",
          "workingLatex": "\\theta = 45^\\circ, \\ 135^\\circ, \\ 225^\\circ, \\ 315^\\circ",
          "explanation": "These are the required solutions.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta = 45^\\circ, \\ 135^\\circ, \\ 225^\\circ, \\ 315^\\circ$"
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q070",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "proof",
    "tags": ["identities", "proof", "cosecant"],
    "questionText": "Prove that $\\dfrac{\\sin\\theta}{1 - \\cos\\theta} + \\dfrac{\\sin\\theta}{1 + \\cos\\theta} \\equiv 2\\operatorname{cosec}\\theta$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Start from the left-hand side",
          "workingLatex": "\\text{LHS} = \\frac{\\sin\\theta}{1 - \\cos\\theta} + \\frac{\\sin\\theta}{1 + \\cos\\theta}",
          "explanation": "We combine the two fractions and simplify towards $2\\operatorname{cosec}\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Use a common denominator",
          "workingLatex": "= \\frac{\\sin\\theta(1 + \\cos\\theta) + \\sin\\theta(1 - \\cos\\theta)}{(1 - \\cos\\theta)(1 + \\cos\\theta)}",
          "explanation": "The common denominator is the product of the two denominators, which is a difference of squares.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand the numerator",
          "workingLatex": "= \\frac{\\sin\\theta + \\sin\\theta\\cos\\theta + \\sin\\theta - \\sin\\theta\\cos\\theta}{(1 - \\cos\\theta)(1 + \\cos\\theta)}",
          "explanation": "Multiplying out shows the cosine terms are equal and opposite.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the numerator",
          "workingLatex": "= \\frac{2\\sin\\theta}{(1 - \\cos\\theta)(1 + \\cos\\theta)}",
          "explanation": "The $\\pm\\sin\\theta\\cos\\theta$ terms cancel, leaving $2\\sin\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Expand the denominator",
          "workingLatex": "= \\frac{2\\sin\\theta}{1 - \\cos^2\\theta}",
          "explanation": "The difference of squares multiplies out to $1 - \\cos^2\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply the Pythagorean identity",
          "workingLatex": "1 - \\cos^2\\theta = \\sin^2\\theta",
          "explanation": "This turns the denominator into $\\sin^2\\theta$, ready to cancel.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Cancel a sine",
          "workingLatex": "= \\frac{2\\sin\\theta}{\\sin^2\\theta} = \\frac{2}{\\sin\\theta}",
          "explanation": "One factor of $\\sin\\theta$ cancels from top and bottom.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Recognise the reciprocal",
          "workingLatex": "= 2\\operatorname{cosec}\\theta",
          "explanation": "Since $\\tfrac{1}{\\sin\\theta} = \\operatorname{cosec}\\theta$, this is the right-hand side.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conclude the proof",
          "workingLatex": "\\frac{\\sin\\theta}{1 - \\cos\\theta} + \\frac{\\sin\\theta}{1 + \\cos\\theta} = 2\\operatorname{cosec}\\theta \\quad \\blacksquare",
          "explanation": "The identity is proved.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{\\sin\\theta}{1 - \\cos\\theta} + \\dfrac{\\sin\\theta}{1 + \\cos\\theta} \\equiv 2\\operatorname{cosec}\\theta$ (proved)"
    }
  }
];
