import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q001",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["reciprocal trig", "secant", "definition"],
    "questionText": "Write down the definition of $\\sec\\theta$ in terms of $\\cos\\theta$, and state the values of $\\theta$ for which it is undefined.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the three reciprocal trig functions",
          "workingLatex": "\\sec\\theta = \\frac{1}{\\cos\\theta}, \\quad \\csc\\theta = \\frac{1}{\\sin\\theta}, \\quad \\cot\\theta = \\frac{1}{\\tan\\theta}",
          "explanation": "Listing all three reciprocal functions together helps you see the pattern: each one is simply one divided by a standard trig function. This makes it easy to pick out the one you need.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify which cofunction secant reciprocates",
          "workingLatex": "\\sec\\theta = \\frac{1}{\\cos\\theta}",
          "explanation": "A useful memory aid is that secant pairs with cosine, even though it starts with the same letters as sine. The third letters line up: se-C-ant with C-osine.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Determine when the definition breaks down",
          "workingLatex": "\\cos\\theta = 0 \\;\\Rightarrow\\; \\sec\\theta \\text{ undefined}",
          "explanation": "Because secant is one over cosine, it has no value wherever the denominator cosine is zero. Division by zero is not allowed, so those angles must be excluded.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the angles where cosine is zero",
          "workingLatex": "\\cos\\theta = 0 \\;\\Rightarrow\\; \\theta = 90^\\circ + 180^\\circ n = \\tfrac{\\pi}{2} + \\pi n",
          "explanation": "Cosine crosses zero at $90^\\circ$ and then every $180^\\circ$ after that. Writing this with an integer $n$ captures all such angles in one compact statement.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Note the size of secant near these angles",
          "workingLatex": "|\\cos\\theta| \\le 1 \\;\\Rightarrow\\; |\\sec\\theta| \\ge 1",
          "explanation": "Since cosine never exceeds $1$ in size, its reciprocal never drops below $1$ in size. This tells you secant always lives outside the band between $-1$ and $1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the final definition and restriction",
          "workingLatex": "\\sec\\theta = \\frac{1}{\\cos\\theta}, \\quad \\theta \\ne \\tfrac{\\pi}{2} + \\pi n",
          "explanation": "This gives the complete answer: the definition together with the excluded angles, which is exactly what the question asks for.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sec\\theta = \\dfrac{1}{\\cos\\theta}$, undefined when $\\theta = \\tfrac{\\pi}{2} + \\pi n$ (i.e. $\\cos\\theta = 0$)."
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q002",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["reciprocal trig", "cosecant", "definition"],
    "questionText": "Write down the definition of $\\csc\\theta$ in terms of $\\sin\\theta$, and state the values of $\\theta$ for which it is undefined.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the reciprocal trig functions",
          "workingLatex": "\\csc\\theta = \\frac{1}{\\sin\\theta}, \\quad \\sec\\theta = \\frac{1}{\\cos\\theta}, \\quad \\cot\\theta = \\frac{1}{\\tan\\theta}",
          "explanation": "Writing the family out first makes it clear that cosecant is the reciprocal of sine, so any statement about sine transfers directly to cosecant.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Select the cosecant definition",
          "workingLatex": "\\csc\\theta = \\frac{1}{\\sin\\theta}",
          "explanation": "The name cosecant pairs with sine: the third letters match, co-S-ecant with S-ine, which is a reliable way to avoid mixing it up with secant.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find when the denominator is zero",
          "workingLatex": "\\sin\\theta = 0 \\;\\Rightarrow\\; \\csc\\theta \\text{ undefined}",
          "explanation": "Cosecant is one over sine, so it fails to exist exactly where sine is zero, because we cannot divide by zero.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the angles where sine is zero",
          "workingLatex": "\\sin\\theta = 0 \\;\\Rightarrow\\; \\theta = 180^\\circ n = \\pi n",
          "explanation": "Sine is zero at $0^\\circ$ and every $180^\\circ$ thereafter, so all the excluded angles are integer multiples of $\\pi$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Note the range restriction on cosecant",
          "workingLatex": "|\\sin\\theta| \\le 1 \\;\\Rightarrow\\; |\\csc\\theta| \\ge 1",
          "explanation": "As sine is bounded between $-1$ and $1$, its reciprocal is always at least $1$ in magnitude, so cosecant never takes a value strictly between $-1$ and $1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the final definition and restriction",
          "workingLatex": "\\csc\\theta = \\frac{1}{\\sin\\theta}, \\quad \\theta \\ne \\pi n",
          "explanation": "This is the complete answer, giving both the definition and the angles that must be excluded.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\csc\\theta = \\dfrac{1}{\\sin\\theta}$, undefined when $\\theta = \\pi n$ (i.e. $\\sin\\theta = 0$)."
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
    "questionText": "Write down two equivalent expressions for $\\cot\\theta$: one in terms of $\\tan\\theta$, and one in terms of $\\cos\\theta$ and $\\sin\\theta$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the definition of cotangent as a reciprocal",
          "workingLatex": "\\cot\\theta = \\frac{1}{\\tan\\theta}",
          "explanation": "Cotangent is the reciprocal of tangent, which is the most direct definition and the first expression the question asks for.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the quotient form of tangent",
          "workingLatex": "\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta}",
          "explanation": "Tangent itself can be written as sine over cosine, and we will invert this to get the second required form.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Take the reciprocal of the quotient",
          "workingLatex": "\\cot\\theta = \\frac{1}{\\tan\\theta} = \\frac{1}{\\;\\frac{\\sin\\theta}{\\cos\\theta}\\;}",
          "explanation": "Substituting the quotient form into the reciprocal gives a fraction divided by a fraction, which we can now simplify.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the compound fraction",
          "workingLatex": "\\cot\\theta = \\frac{\\cos\\theta}{\\sin\\theta}",
          "explanation": "Dividing by $\\frac{\\sin\\theta}{\\cos\\theta}$ is the same as multiplying by its flip, so the cosine rises to the top and the sine drops to the bottom.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State when cotangent is undefined",
          "workingLatex": "\\sin\\theta = 0 \\;\\Rightarrow\\; \\cot\\theta \\text{ undefined}",
          "explanation": "From the form $\\frac{\\cos\\theta}{\\sin\\theta}$ we see the denominator is sine, so cotangent is undefined wherever sine is zero, at $\\theta = \\pi n$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State both equivalent expressions",
          "workingLatex": "\\cot\\theta = \\frac{1}{\\tan\\theta} = \\frac{\\cos\\theta}{\\sin\\theta}",
          "explanation": "This presents both requested forms side by side, confirming they describe the same function.",
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
    "marks": 3,
    "answerType": "value",
    "tags": ["reciprocal trig", "secant", "exact values"],
    "questionText": "Find the exact value of $\\sec 60^\\circ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write secant as one over cosine",
          "workingLatex": "\\sec 60^\\circ = \\frac{1}{\\cos 60^\\circ}",
          "explanation": "To find an exact value of secant, first convert it to a cosine problem, because the exact values of cosine are the ones we know from the special triangles.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the exact value of cosine 60 degrees",
          "workingLatex": "\\cos 60^\\circ = \\frac{1}{2}",
          "explanation": "This is a standard exact value from the $30$-$60$-$90$ triangle, one you are expected to recall without a calculator.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the value",
          "workingLatex": "\\sec 60^\\circ = \\frac{1}{\\;\\frac{1}{2}\\;}",
          "explanation": "Replacing cosine with its exact value turns the problem into a simple reciprocal of a fraction.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the reciprocal",
          "workingLatex": "\\frac{1}{\\;\\frac{1}{2}\\;} = 2",
          "explanation": "The reciprocal of a half is two, since dividing $1$ by $\\frac{1}{2}$ means asking how many halves fit into one whole.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check the answer is sensible",
          "workingLatex": "|\\sec\\theta| \\ge 1 \\;\\checkmark",
          "explanation": "Secant should always be at least $1$ in size, and $2$ satisfies this, which gives us confidence the value is right.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the final value",
          "workingLatex": "\\sec 60^\\circ = 2",
          "explanation": "This is the exact value requested, with no rounding involved.",
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
    "marks": 3,
    "answerType": "value",
    "tags": ["reciprocal trig", "cosecant", "exact values"],
    "questionText": "Find the exact value of $\\csc 30^\\circ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write cosecant as one over sine",
          "workingLatex": "\\csc 30^\\circ = \\frac{1}{\\sin 30^\\circ}",
          "explanation": "Converting cosecant into a sine expression lets us use the exact values we already know from the special triangles.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the exact value of sine 30 degrees",
          "workingLatex": "\\sin 30^\\circ = \\frac{1}{2}",
          "explanation": "This exact value comes from the $30$-$60$-$90$ triangle and is one of the standard results to memorise.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the value",
          "workingLatex": "\\csc 30^\\circ = \\frac{1}{\\;\\frac{1}{2}\\;}",
          "explanation": "Replacing sine with a half reduces the problem to a reciprocal of a simple fraction.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the reciprocal",
          "workingLatex": "\\frac{1}{\\;\\frac{1}{2}\\;} = 2",
          "explanation": "The reciprocal of one half is two, so the calculation resolves cleanly to a whole number.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check the answer is sensible",
          "workingLatex": "|\\csc\\theta| \\ge 1 \\;\\checkmark",
          "explanation": "Cosecant is always at least $1$ in magnitude, and $2$ meets this requirement, confirming the result is plausible.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the final value",
          "workingLatex": "\\csc 30^\\circ = 2",
          "explanation": "This is the exact answer, needing no decimal approximation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\csc 30^\\circ = 2$"
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q006",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": ["reciprocal trig", "cotangent", "exact values"],
    "questionText": "Find the exact value of $\\cot 45^\\circ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write cotangent as one over tangent",
          "workingLatex": "\\cot 45^\\circ = \\frac{1}{\\tan 45^\\circ}",
          "explanation": "Cotangent is the reciprocal of tangent, so we begin by turning the problem into a tangent calculation whose exact value we know.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the exact value of tangent 45 degrees",
          "workingLatex": "\\tan 45^\\circ = 1",
          "explanation": "In the $45$-$45$-$90$ triangle the opposite and adjacent sides are equal, so their ratio is exactly $1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the value",
          "workingLatex": "\\cot 45^\\circ = \\frac{1}{1}",
          "explanation": "Replacing tangent with $1$ leaves a very simple reciprocal to evaluate.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the reciprocal",
          "workingLatex": "\\frac{1}{1} = 1",
          "explanation": "The reciprocal of $1$ is itself $1$, so no further work is needed.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Confirm using the sine-cosine form",
          "workingLatex": "\\cot 45^\\circ = \\frac{\\cos 45^\\circ}{\\sin 45^\\circ} = \\frac{\\frac{\\sqrt{2}}{2}}{\\frac{\\sqrt{2}}{2}} = 1",
          "explanation": "Checking with the alternative definition, cosine over sine, gives the same answer, which reassures us the result is correct.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the final value",
          "workingLatex": "\\cot 45^\\circ = 1",
          "explanation": "This is the exact value requested.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\cot 45^\\circ = 1$"
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
    "answerType": "value",
    "tags": ["reciprocal trig", "secant", "exact values", "surds"],
    "questionText": "Find the exact value of $\\sec 45^\\circ$, giving your answer in the form $a\\sqrt{2}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write secant as one over cosine",
          "workingLatex": "\\sec 45^\\circ = \\frac{1}{\\cos 45^\\circ}",
          "explanation": "As always with secant, the first move is to rewrite it in terms of cosine so the standard exact values apply.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the exact value of cosine 45 degrees",
          "workingLatex": "\\cos 45^\\circ = \\frac{\\sqrt{2}}{2}",
          "explanation": "This exact value comes from the isosceles right-angled triangle, and it is often equivalently written as $\\frac{1}{\\sqrt{2}}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the value",
          "workingLatex": "\\sec 45^\\circ = \\frac{1}{\\;\\frac{\\sqrt{2}}{2}\\;}",
          "explanation": "Substituting gives a reciprocal of a surd fraction, which we will simplify to reach the required form.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Invert the fraction",
          "workingLatex": "\\sec 45^\\circ = \\frac{2}{\\sqrt{2}}",
          "explanation": "Taking the reciprocal simply flips the fraction, turning $\\frac{\\sqrt{2}}{2}$ into $\\frac{2}{\\sqrt{2}}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rationalise the denominator",
          "workingLatex": "\\frac{2}{\\sqrt{2}} \\times \\frac{\\sqrt{2}}{\\sqrt{2}} = \\frac{2\\sqrt{2}}{2}",
          "explanation": "Multiplying top and bottom by $\\sqrt{2}$ clears the root from the denominator, which is the standard way to tidy a surd fraction.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify to the required form",
          "workingLatex": "\\frac{2\\sqrt{2}}{2} = \\sqrt{2}",
          "explanation": "The twos cancel, leaving $\\sqrt{2}$, which is $1\\sqrt{2}$ in the requested form $a\\sqrt{2}$ with $a = 1$.",
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
    "answerType": "value",
    "tags": ["reciprocal trig", "cosecant", "exact values", "surds"],
    "questionText": "Find the exact value of $\\csc 60^\\circ$, giving your answer with a rational denominator.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write cosecant as one over sine",
          "workingLatex": "\\csc 60^\\circ = \\frac{1}{\\sin 60^\\circ}",
          "explanation": "Cosecant reciprocates sine, so we rewrite it in terms of sine to use the known exact value.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the exact value of sine 60 degrees",
          "workingLatex": "\\sin 60^\\circ = \\frac{\\sqrt{3}}{2}",
          "explanation": "This exact value is taken from the $30$-$60$-$90$ triangle and is a standard result.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute and invert",
          "workingLatex": "\\csc 60^\\circ = \\frac{1}{\\;\\frac{\\sqrt{3}}{2}\\;} = \\frac{2}{\\sqrt{3}}",
          "explanation": "Taking the reciprocal flips the fraction to $\\frac{2}{\\sqrt{3}}$, which still has a surd in the denominator.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rationalise the denominator",
          "workingLatex": "\\frac{2}{\\sqrt{3}} \\times \\frac{\\sqrt{3}}{\\sqrt{3}} = \\frac{2\\sqrt{3}}{3}",
          "explanation": "Multiplying top and bottom by $\\sqrt{3}$ removes the root from the denominator, giving the rational denominator the question asks for.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check the size of the answer",
          "workingLatex": "\\frac{2\\sqrt{3}}{3} \\approx 1.155 \\ge 1 \\;\\checkmark",
          "explanation": "Cosecant must be at least $1$ in size, and the decimal value $1.155$ confirms this, so the answer is reasonable.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the final value",
          "workingLatex": "\\csc 60^\\circ = \\frac{2\\sqrt{3}}{3}",
          "explanation": "This is the exact value with a rationalised denominator, as required.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\csc 60^\\circ = \\dfrac{2\\sqrt{3}}{3}$"
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q009",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": ["reciprocal trig", "cotangent", "exact values", "surds"],
    "questionText": "Find the exact value of $\\cot 30^\\circ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Use the sine-cosine form of cotangent",
          "workingLatex": "\\cot 30^\\circ = \\frac{\\cos 30^\\circ}{\\sin 30^\\circ}",
          "explanation": "Writing cotangent as cosine over sine is convenient here because both exact values are simple to substitute.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the exact value of cosine 30 degrees",
          "workingLatex": "\\cos 30^\\circ = \\frac{\\sqrt{3}}{2}",
          "explanation": "This is a standard exact value from the $30$-$60$-$90$ triangle.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall the exact value of sine 30 degrees",
          "workingLatex": "\\sin 30^\\circ = \\frac{1}{2}",
          "explanation": "This is the matching exact value from the same special triangle.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute both values",
          "workingLatex": "\\cot 30^\\circ = \\frac{\\;\\frac{\\sqrt{3}}{2}\\;}{\\;\\frac{1}{2}\\;}",
          "explanation": "Placing cosine over sine gives a fraction divided by a fraction, ready to simplify.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the compound fraction",
          "workingLatex": "\\frac{\\sqrt{3}}{2} \\times \\frac{2}{1} = \\sqrt{3}",
          "explanation": "Dividing by $\\frac{1}{2}$ is the same as multiplying by $2$, and the twos cancel to leave $\\sqrt{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the final value",
          "workingLatex": "\\cot 30^\\circ = \\sqrt{3}",
          "explanation": "This is the exact value; note it is already in simplest surd form with no denominator to rationalise.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\cot 30^\\circ = \\sqrt{3}$"
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q010",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": ["reciprocal trig", "secant", "radians", "exact values"],
    "questionText": "Find the exact value of $\\sec\\dfrac{\\pi}{3}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Convert the radian angle to degrees if helpful",
          "workingLatex": "\\frac{\\pi}{3} = 60^\\circ",
          "explanation": "Recognising that $\\frac{\\pi}{3}$ radians equals $60^\\circ$ lets us use the exact values we know most comfortably.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write secant as one over cosine",
          "workingLatex": "\\sec\\frac{\\pi}{3} = \\frac{1}{\\cos\\frac{\\pi}{3}}",
          "explanation": "Secant is one over cosine, so we set up the reciprocal of the cosine of this angle.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall the cosine value",
          "workingLatex": "\\cos\\frac{\\pi}{3} = \\frac{1}{2}",
          "explanation": "The cosine of $60^\\circ$, or $\\frac{\\pi}{3}$, is exactly one half.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the value",
          "workingLatex": "\\sec\\frac{\\pi}{3} = \\frac{1}{\\;\\frac{1}{2}\\;}",
          "explanation": "The problem now reduces to the reciprocal of one half.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the reciprocal",
          "workingLatex": "\\frac{1}{\\;\\frac{1}{2}\\;} = 2",
          "explanation": "The reciprocal of a half is two.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the final value",
          "workingLatex": "\\sec\\frac{\\pi}{3} = 2",
          "explanation": "This is the exact value; working in radians gives the same result as degrees, as expected.",
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
    "marks": 3,
    "answerType": "value",
    "tags": ["reciprocal trig", "cosecant", "radians", "exact values"],
    "questionText": "Find the exact value of $\\csc\\dfrac{\\pi}{6}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Convert the radian angle to degrees",
          "workingLatex": "\\frac{\\pi}{6} = 30^\\circ",
          "explanation": "Recognising $\\frac{\\pi}{6}$ as $30^\\circ$ makes the standard exact values easy to apply.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write cosecant as one over sine",
          "workingLatex": "\\csc\\frac{\\pi}{6} = \\frac{1}{\\sin\\frac{\\pi}{6}}",
          "explanation": "Cosecant is the reciprocal of sine, so we set up one over the sine of the angle.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall the sine value",
          "workingLatex": "\\sin\\frac{\\pi}{6} = \\frac{1}{2}",
          "explanation": "The sine of $30^\\circ$ is one half, a standard exact value.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the value",
          "workingLatex": "\\csc\\frac{\\pi}{6} = \\frac{1}{\\;\\frac{1}{2}\\;}",
          "explanation": "The problem reduces to the reciprocal of one half.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the reciprocal",
          "workingLatex": "\\frac{1}{\\;\\frac{1}{2}\\;} = 2",
          "explanation": "The reciprocal of a half is two.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the final value",
          "workingLatex": "\\csc\\frac{\\pi}{6} = 2",
          "explanation": "This is the exact value requested.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\csc\\dfrac{\\pi}{6} = 2$"
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q012",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": ["inverse trig", "arcsin", "exact values", "radians"],
    "questionText": "Find the exact value of $\\arcsin\\left(\\dfrac{1}{2}\\right)$, giving your answer in radians.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the inverse sine",
          "workingLatex": "\\arcsin\\left(\\tfrac{1}{2}\\right) = \\theta \\;\\Leftrightarrow\\; \\sin\\theta = \\tfrac{1}{2}",
          "explanation": "The inverse sine asks the question: which angle has a sine of one half? So we look for $\\theta$ with $\\sin\\theta = \\frac{1}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the principal range of arcsin",
          "workingLatex": "-\\frac{\\pi}{2} \\le \\theta \\le \\frac{\\pi}{2}",
          "explanation": "The arcsine function only returns angles in this range, so that each input gives exactly one output. We must pick our answer from within this interval.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall which standard angle has sine one half",
          "workingLatex": "\\sin\\frac{\\pi}{6} = \\frac{1}{2}",
          "explanation": "From the special triangles, the angle $30^\\circ$, or $\\frac{\\pi}{6}$, has a sine of one half.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check the angle lies in range",
          "workingLatex": "-\\frac{\\pi}{2} \\le \\frac{\\pi}{6} \\le \\frac{\\pi}{2} \\;\\checkmark",
          "explanation": "Since $\\frac{\\pi}{6}$ sits comfortably inside the principal range, it is the valid output of arcsine.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Reject any other candidate",
          "workingLatex": "\\sin\\frac{5\\pi}{6} = \\frac{1}{2}, \\text{ but } \\frac{5\\pi}{6} > \\frac{\\pi}{2}",
          "explanation": "Although $\\frac{5\\pi}{6}$ also has sine one half, it falls outside the principal range, so arcsine does not return it.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the final value",
          "workingLatex": "\\arcsin\\left(\\tfrac{1}{2}\\right) = \\frac{\\pi}{6}",
          "explanation": "The unique answer in the correct range is $\\frac{\\pi}{6}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\arcsin\\left(\\dfrac{1}{2}\\right) = \\dfrac{\\pi}{6}$"
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
    "answerType": "value",
    "tags": ["inverse trig", "arccos", "exact values", "radians"],
    "questionText": "Find the exact value of $\\arccos\\left(\\dfrac{\\sqrt{3}}{2}\\right)$, giving your answer in radians.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the inverse cosine",
          "workingLatex": "\\arccos\\left(\\tfrac{\\sqrt{3}}{2}\\right) = \\theta \\;\\Leftrightarrow\\; \\cos\\theta = \\tfrac{\\sqrt{3}}{2}",
          "explanation": "Inverse cosine asks which angle has a cosine of $\\frac{\\sqrt{3}}{2}$, so we search for the matching $\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the principal range of arccos",
          "workingLatex": "0 \\le \\theta \\le \\pi",
          "explanation": "Arccosine returns angles only in this interval, ensuring a single, unambiguous output for each input.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall which standard angle has this cosine",
          "workingLatex": "\\cos\\frac{\\pi}{6} = \\frac{\\sqrt{3}}{2}",
          "explanation": "From the $30$-$60$-$90$ triangle, the cosine of $30^\\circ$, or $\\frac{\\pi}{6}$, is $\\frac{\\sqrt{3}}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check the angle lies in range",
          "workingLatex": "0 \\le \\frac{\\pi}{6} \\le \\pi \\;\\checkmark",
          "explanation": "The angle $\\frac{\\pi}{6}$ is within the arccosine range, so it is a valid output.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Confirm it is the unique answer",
          "workingLatex": "\\cos\\theta = \\tfrac{\\sqrt{3}}{2} \\text{ once on } [0,\\pi]",
          "explanation": "Cosine is decreasing across $[0,\\pi]$, so it takes each value exactly once there, guaranteeing $\\frac{\\pi}{6}$ is the only answer.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the final value",
          "workingLatex": "\\arccos\\left(\\tfrac{\\sqrt{3}}{2}\\right) = \\frac{\\pi}{6}",
          "explanation": "This is the exact value in the required range.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\arccos\\left(\\dfrac{\\sqrt{3}}{2}\\right) = \\dfrac{\\pi}{6}$"
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q014",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": ["inverse trig", "arctan", "exact values", "radians"],
    "questionText": "Find the exact value of $\\arctan(1)$, giving your answer in radians.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the inverse tangent",
          "workingLatex": "\\arctan(1) = \\theta \\;\\Leftrightarrow\\; \\tan\\theta = 1",
          "explanation": "Inverse tangent asks which angle has a tangent of $1$, so we look for the angle $\\theta$ satisfying $\\tan\\theta = 1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the principal range of arctan",
          "workingLatex": "-\\frac{\\pi}{2} < \\theta < \\frac{\\pi}{2}",
          "explanation": "Arctangent returns angles strictly between $-\\frac{\\pi}{2}$ and $\\frac{\\pi}{2}$, so we must choose our answer from this open interval.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall which standard angle has tangent one",
          "workingLatex": "\\tan\\frac{\\pi}{4} = 1",
          "explanation": "In the $45$-$45$-$90$ triangle opposite equals adjacent, so the tangent of $45^\\circ$, or $\\frac{\\pi}{4}$, is exactly $1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check the angle lies in range",
          "workingLatex": "-\\frac{\\pi}{2} < \\frac{\\pi}{4} < \\frac{\\pi}{2} \\;\\checkmark",
          "explanation": "The angle $\\frac{\\pi}{4}$ lies inside the arctangent range, so it is the valid output.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Note the uniqueness",
          "workingLatex": "\\tan\\theta \\text{ increasing on } \\left(-\\tfrac{\\pi}{2}, \\tfrac{\\pi}{2}\\right)",
          "explanation": "Tangent rises steadily across this interval, hitting each value only once, so $\\frac{\\pi}{4}$ is the unique answer.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the final value",
          "workingLatex": "\\arctan(1) = \\frac{\\pi}{4}",
          "explanation": "This is the exact value in radians.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\arctan(1) = \\dfrac{\\pi}{4}$"
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q015",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": ["inverse trig", "arcsin", "negative", "radians"],
    "questionText": "Find the exact value of $\\arcsin\\left(-\\dfrac{1}{2}\\right)$, giving your answer in radians.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the inverse sine",
          "workingLatex": "\\arcsin\\left(-\\tfrac{1}{2}\\right) = \\theta \\;\\Leftrightarrow\\; \\sin\\theta = -\\tfrac{1}{2}",
          "explanation": "We need the angle whose sine is $-\\frac{1}{2}$, chosen from the principal range of arcsine.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the principal range of arcsin",
          "workingLatex": "-\\frac{\\pi}{2} \\le \\theta \\le \\frac{\\pi}{2}",
          "explanation": "Arcsine outputs angles in this range, which includes negative angles, so a negative answer is possible here.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use the odd symmetry of arcsine",
          "workingLatex": "\\arcsin(-x) = -\\arcsin(x)",
          "explanation": "Arcsine is an odd function, so a negative input simply flips the sign of the output. This lets us reuse the positive case.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Recall the positive case",
          "workingLatex": "\\arcsin\\left(\\tfrac{1}{2}\\right) = \\frac{\\pi}{6}",
          "explanation": "We already know the angle with sine one half is $\\frac{\\pi}{6}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply the sign flip",
          "workingLatex": "\\arcsin\\left(-\\tfrac{1}{2}\\right) = -\\frac{\\pi}{6}",
          "explanation": "Flipping the sign gives $-\\frac{\\pi}{6}$, which indeed lies in the principal range.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify by checking the sine",
          "workingLatex": "\\sin\\left(-\\tfrac{\\pi}{6}\\right) = -\\tfrac{1}{2} \\;\\checkmark",
          "explanation": "Substituting back confirms the sine of $-\\frac{\\pi}{6}$ is $-\\frac{1}{2}$, so our answer is correct.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\arcsin\\left(-\\dfrac{1}{2}\\right) = -\\dfrac{\\pi}{6}$"
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q016",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": ["inverse trig", "arctan", "exact values", "radians"],
    "questionText": "Find the exact value of $\\arctan\\left(\\sqrt{3}\\right)$, giving your answer in radians.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the inverse tangent",
          "workingLatex": "\\arctan\\left(\\sqrt{3}\\right) = \\theta \\;\\Leftrightarrow\\; \\tan\\theta = \\sqrt{3}",
          "explanation": "We seek the angle whose tangent is $\\sqrt{3}$, taken from the principal range of arctangent.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the principal range of arctan",
          "workingLatex": "-\\frac{\\pi}{2} < \\theta < \\frac{\\pi}{2}",
          "explanation": "Arctangent gives angles strictly inside this interval, so the answer must be chosen from here.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall which standard angle has tangent root three",
          "workingLatex": "\\tan\\frac{\\pi}{3} = \\sqrt{3}",
          "explanation": "From the $30$-$60$-$90$ triangle, the tangent of $60^\\circ$, or $\\frac{\\pi}{3}$, is $\\sqrt{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check the angle lies in range",
          "workingLatex": "-\\frac{\\pi}{2} < \\frac{\\pi}{3} < \\frac{\\pi}{2} \\;\\checkmark",
          "explanation": "The angle $\\frac{\\pi}{3}$ sits inside the arctangent range, so it is the valid output.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Note that the input is positive",
          "workingLatex": "\\sqrt{3} > 0 \\;\\Rightarrow\\; \\theta > 0",
          "explanation": "A positive tangent in the principal range corresponds to a positive angle, consistent with our answer.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the final value",
          "workingLatex": "\\arctan\\left(\\sqrt{3}\\right) = \\frac{\\pi}{3}",
          "explanation": "This is the exact value in radians.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\arctan\\left(\\sqrt{3}\\right) = \\dfrac{\\pi}{3}$"
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
    "answerType": "value",
    "tags": ["inverse trig", "arccos", "exact values", "radians"],
    "questionText": "Find the exact value of $\\arccos(0)$, giving your answer in radians.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the inverse cosine",
          "workingLatex": "\\arccos(0) = \\theta \\;\\Leftrightarrow\\; \\cos\\theta = 0",
          "explanation": "We need the angle whose cosine is zero, chosen from the arccosine range.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the principal range of arccos",
          "workingLatex": "0 \\le \\theta \\le \\pi",
          "explanation": "Arccosine outputs angles in this interval, so the answer lies somewhere between $0$ and $\\pi$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall where cosine is zero",
          "workingLatex": "\\cos\\frac{\\pi}{2} = 0",
          "explanation": "Cosine is zero at $90^\\circ$, which is $\\frac{\\pi}{2}$ radians.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check the angle lies in range",
          "workingLatex": "0 \\le \\frac{\\pi}{2} \\le \\pi \\;\\checkmark",
          "explanation": "The angle $\\frac{\\pi}{2}$ is within the range, so it is the valid output.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the final value",
          "workingLatex": "\\arccos(0) = \\frac{\\pi}{2}",
          "explanation": "This is the exact value in radians.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Note the geometric meaning",
          "workingLatex": "\\cos\\tfrac{\\pi}{2} = 0 \\text{ (quarter turn)}",
          "explanation": "A quarter turn points straight up, where the horizontal cosine component vanishes, which is why the cosine there is zero.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\arccos(0) = \\dfrac{\\pi}{2}$"
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q018",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "statement",
    "tags": ["inverse trig", "arcsin", "domain", "range"],
    "questionText": "State the domain and range of $y = \\arcsin x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall what arcsine inverts",
          "workingLatex": "y = \\arcsin x \\;\\Leftrightarrow\\; x = \\sin y",
          "explanation": "Arcsine is the inverse of sine, so its inputs and outputs are the swapped versions of sine's outputs and inputs.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the range of sine",
          "workingLatex": "-1 \\le \\sin y \\le 1",
          "explanation": "Sine only ever produces values between $-1$ and $1$, so those are the only values arcsine can be given as inputs.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Deduce the domain of arcsine",
          "workingLatex": "\\text{domain: } -1 \\le x \\le 1",
          "explanation": "Because the range of sine becomes the domain of its inverse, arcsine accepts inputs only from $-1$ to $1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Recall the restricted domain of sine used for inversion",
          "workingLatex": "-\\frac{\\pi}{2} \\le y \\le \\frac{\\pi}{2}",
          "explanation": "To make sine invertible we restrict it to this interval, where it takes each value once. This restricted domain becomes the range of arcsine.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Deduce the range of arcsine",
          "workingLatex": "\\text{range: } -\\frac{\\pi}{2} \\le y \\le \\frac{\\pi}{2}",
          "explanation": "The outputs of arcsine are precisely the angles in the restricted sine domain, giving this range.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State both together",
          "workingLatex": "-1 \\le x \\le 1, \\quad -\\frac{\\pi}{2} \\le \\arcsin x \\le \\frac{\\pi}{2}",
          "explanation": "This summarises the domain and range in one line, exactly as the question requires.",
          "diagram": null
        }
      ],
      "finalAnswer": "Domain: $-1 \\le x \\le 1$; Range: $-\\dfrac{\\pi}{2} \\le y \\le \\dfrac{\\pi}{2}$."
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q019",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "statement",
    "tags": ["inverse trig", "arccos", "domain", "range"],
    "questionText": "State the domain and range of $y = \\arccos x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall what arccosine inverts",
          "workingLatex": "y = \\arccos x \\;\\Leftrightarrow\\; x = \\cos y",
          "explanation": "Arccosine is the inverse of cosine, so its domain and range come from swapping cosine's range and restricted domain.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the range of cosine",
          "workingLatex": "-1 \\le \\cos y \\le 1",
          "explanation": "Cosine only outputs values between $-1$ and $1$, so those are the permitted inputs to arccosine.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Deduce the domain of arccosine",
          "workingLatex": "\\text{domain: } -1 \\le x \\le 1",
          "explanation": "The range of cosine becomes the domain of its inverse, so arccosine accepts inputs from $-1$ to $1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Recall the restricted domain of cosine used for inversion",
          "workingLatex": "0 \\le y \\le \\pi",
          "explanation": "Cosine is made invertible by restricting it to $[0,\\pi]$, where it decreases through every value once. This becomes the range of arccosine.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Deduce the range of arccosine",
          "workingLatex": "\\text{range: } 0 \\le y \\le \\pi",
          "explanation": "The outputs of arccosine are exactly the angles in that restricted domain.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State both together",
          "workingLatex": "-1 \\le x \\le 1, \\quad 0 \\le \\arccos x \\le \\pi",
          "explanation": "This gives the domain and range in a single summary, as required. Note the range differs from arcsine's, being $[0,\\pi]$ rather than symmetric about zero.",
          "diagram": null
        }
      ],
      "finalAnswer": "Domain: $-1 \\le x \\le 1$; Range: $0 \\le y \\le \\pi$."
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q020",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": ["reciprocal trig", "secant", "exact values", "obtuse"],
    "questionText": "Find the exact value of $\\sec\\dfrac{2\\pi}{3}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Convert the angle to degrees",
          "workingLatex": "\\frac{2\\pi}{3} = 120^\\circ",
          "explanation": "Recognising this angle as $120^\\circ$ helps us place it in the second quadrant and recall the relevant exact value.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write secant as one over cosine",
          "workingLatex": "\\sec\\frac{2\\pi}{3} = \\frac{1}{\\cos\\frac{2\\pi}{3}}",
          "explanation": "Secant is one over cosine, so we first evaluate the cosine of this angle.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Determine the sign in the second quadrant",
          "workingLatex": "120^\\circ \\text{ in quadrant II} \\;\\Rightarrow\\; \\cos < 0",
          "explanation": "In the second quadrant cosine is negative, so we expect a negative value here.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Use the related acute angle",
          "workingLatex": "\\cos\\frac{2\\pi}{3} = -\\cos\\frac{\\pi}{3} = -\\frac{1}{2}",
          "explanation": "The related acute angle is $60^\\circ$, whose cosine is one half; applying the negative sign for quadrant II gives $-\\frac{1}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute into the reciprocal",
          "workingLatex": "\\sec\\frac{2\\pi}{3} = \\frac{1}{-\\frac{1}{2}}",
          "explanation": "We now take the reciprocal of $-\\frac{1}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the reciprocal",
          "workingLatex": "\\frac{1}{-\\frac{1}{2}} = -2",
          "explanation": "The reciprocal of $-\\frac{1}{2}$ is $-2$; the negative sign is retained throughout.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the final value",
          "workingLatex": "\\sec\\frac{2\\pi}{3} = -2",
          "explanation": "This is the exact value; its size exceeds $1$ as required for secant, and it is negative as expected in the second quadrant.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sec\\dfrac{2\\pi}{3} = -2$"
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q021",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "proof",
    "tags": ["identities", "secant", "tangent", "pythagorean"],
    "questionText": "Prove that $1 + \\tan^2\\theta \\equiv \\sec^2\\theta$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Start from the fundamental Pythagorean identity",
          "workingLatex": "\\sin^2\\theta + \\cos^2\\theta \\equiv 1",
          "explanation": "The reciprocal identities all descend from the basic Pythagorean identity, so this is the natural starting point.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Decide what to divide by",
          "workingLatex": "\\text{divide every term by } \\cos^2\\theta",
          "explanation": "Since we are aiming for $\\sec^2\\theta = \\frac{1}{\\cos^2\\theta}$ on the right, dividing through by $\\cos^2\\theta$ will manufacture the reciprocal terms we want.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Divide each term by cosine squared",
          "workingLatex": "\\frac{\\sin^2\\theta}{\\cos^2\\theta} + \\frac{\\cos^2\\theta}{\\cos^2\\theta} \\equiv \\frac{1}{\\cos^2\\theta}",
          "explanation": "Dividing every term keeps the equation balanced, and each fraction is now ready to be rewritten using a reciprocal or quotient identity.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rewrite the first term as tangent squared",
          "workingLatex": "\\frac{\\sin^2\\theta}{\\cos^2\\theta} = \\tan^2\\theta",
          "explanation": "Since $\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta}$, squaring gives $\\tan^2\\theta$, converting the first fraction.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the middle term",
          "workingLatex": "\\frac{\\cos^2\\theta}{\\cos^2\\theta} = 1",
          "explanation": "Any nonzero quantity divided by itself is $1$, so the middle term collapses to a constant.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Rewrite the right-hand side as secant squared",
          "workingLatex": "\\frac{1}{\\cos^2\\theta} = \\sec^2\\theta",
          "explanation": "By definition $\\sec\\theta = \\frac{1}{\\cos\\theta}$, so its square is $\\frac{1}{\\cos^2\\theta}$, giving the target form.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Assemble the identity",
          "workingLatex": "\\tan^2\\theta + 1 \\equiv \\sec^2\\theta",
          "explanation": "Collecting the rewritten terms produces exactly the required identity, completing the proof.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the conclusion",
          "workingLatex": "1 + \\tan^2\\theta \\equiv \\sec^2\\theta \\;\\blacksquare",
          "explanation": "The identity holds for all $\\theta$ where the functions are defined, which is what we set out to prove.",
          "diagram": null
        }
      ],
      "finalAnswer": "$1 + \\tan^2\\theta \\equiv \\sec^2\\theta$, proved by dividing $\\sin^2\\theta + \\cos^2\\theta \\equiv 1$ through by $\\cos^2\\theta$."
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q022",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "proof",
    "tags": ["identities", "cosecant", "cotangent", "pythagorean"],
    "questionText": "Prove that $1 + \\cot^2\\theta \\equiv \\csc^2\\theta$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Start from the fundamental Pythagorean identity",
          "workingLatex": "\\sin^2\\theta + \\cos^2\\theta \\equiv 1",
          "explanation": "As before, this second reciprocal identity is derived from the core Pythagorean identity.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Decide what to divide by",
          "workingLatex": "\\text{divide every term by } \\sin^2\\theta",
          "explanation": "We want $\\csc^2\\theta = \\frac{1}{\\sin^2\\theta}$ on the right, so dividing by $\\sin^2\\theta$ will produce the cosecant and cotangent terms.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Divide each term by sine squared",
          "workingLatex": "\\frac{\\sin^2\\theta}{\\sin^2\\theta} + \\frac{\\cos^2\\theta}{\\sin^2\\theta} \\equiv \\frac{1}{\\sin^2\\theta}",
          "explanation": "Dividing every term preserves the equality and sets up each fraction for rewriting.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the first term",
          "workingLatex": "\\frac{\\sin^2\\theta}{\\sin^2\\theta} = 1",
          "explanation": "This fraction is a quantity over itself, so it equals $1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rewrite the second term as cotangent squared",
          "workingLatex": "\\frac{\\cos^2\\theta}{\\sin^2\\theta} = \\cot^2\\theta",
          "explanation": "Since $\\cot\\theta = \\frac{\\cos\\theta}{\\sin\\theta}$, squaring gives $\\cot^2\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Rewrite the right-hand side as cosecant squared",
          "workingLatex": "\\frac{1}{\\sin^2\\theta} = \\csc^2\\theta",
          "explanation": "By definition $\\csc\\theta = \\frac{1}{\\sin\\theta}$, so its square is $\\frac{1}{\\sin^2\\theta}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Assemble the identity",
          "workingLatex": "1 + \\cot^2\\theta \\equiv \\csc^2\\theta \\;\\blacksquare",
          "explanation": "Collecting the rewritten terms gives exactly the identity we were asked to prove.",
          "diagram": null
        }
      ],
      "finalAnswer": "$1 + \\cot^2\\theta \\equiv \\csc^2\\theta$, proved by dividing $\\sin^2\\theta + \\cos^2\\theta \\equiv 1$ through by $\\sin^2\\theta$."
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q023",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": ["equations", "secant", "solving"],
    "questionText": "Solve $\\sec\\theta = 2$ for $0^\\circ \\le \\theta < 360^\\circ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Convert secant to cosine",
          "workingLatex": "\\sec\\theta = 2 \\;\\Rightarrow\\; \\frac{1}{\\cos\\theta} = 2",
          "explanation": "Equations in secant are easiest to solve once rewritten in cosine, whose behaviour and values we know well.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rearrange for cosine",
          "workingLatex": "\\cos\\theta = \\frac{1}{2}",
          "explanation": "Taking the reciprocal of both sides turns the secant equation into a standard cosine equation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the principal value",
          "workingLatex": "\\theta = \\cos^{-1}\\left(\\tfrac{1}{2}\\right) = 60^\\circ",
          "explanation": "The first solution comes from the inverse cosine of one half, which is the familiar $60^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify the quadrants where cosine is positive",
          "workingLatex": "\\cos\\theta > 0 \\text{ in quadrants I and IV}",
          "explanation": "Cosine is positive in the first and fourth quadrants, so there is a second solution in the fourth quadrant.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the second solution",
          "workingLatex": "\\theta = 360^\\circ - 60^\\circ = 300^\\circ",
          "explanation": "The fourth-quadrant solution is found by subtracting the acute angle from $360^\\circ$, giving $300^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check both lie in the interval",
          "workingLatex": "60^\\circ, 300^\\circ \\in [0^\\circ, 360^\\circ) \\;\\checkmark",
          "explanation": "Both values fall inside the required range, so both are kept.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the solutions",
          "workingLatex": "\\theta = 60^\\circ \\text{ or } \\theta = 300^\\circ",
          "explanation": "These are the two solutions of the original secant equation in the given interval.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify one solution",
          "workingLatex": "\\sec 60^\\circ = \\frac{1}{\\cos 60^\\circ} = \\frac{1}{1/2} = 2 \\;\\checkmark",
          "explanation": "Substituting $60^\\circ$ back reproduces $\\sec\\theta = 2$, confirming the method.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta = 60^\\circ \\text{ or } 300^\\circ$"
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q024",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": ["equations", "cosecant", "solving", "surds"],
    "questionText": "Solve $\\csc\\theta = \\sqrt{2}$ for $0^\\circ \\le \\theta < 360^\\circ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Convert cosecant to sine",
          "workingLatex": "\\csc\\theta = \\sqrt{2} \\;\\Rightarrow\\; \\frac{1}{\\sin\\theta} = \\sqrt{2}",
          "explanation": "Rewriting in sine gives an equation whose solutions we can find with standard exact values.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rearrange for sine",
          "workingLatex": "\\sin\\theta = \\frac{1}{\\sqrt{2}} = \\frac{\\sqrt{2}}{2}",
          "explanation": "Taking the reciprocal and rationalising gives sine equal to $\\frac{\\sqrt{2}}{2}$, a recognisable exact value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the principal value",
          "workingLatex": "\\theta = \\sin^{-1}\\left(\\tfrac{\\sqrt{2}}{2}\\right) = 45^\\circ",
          "explanation": "The inverse sine of $\\frac{\\sqrt{2}}{2}$ is $45^\\circ$, giving the first solution.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify the quadrants where sine is positive",
          "workingLatex": "\\sin\\theta > 0 \\text{ in quadrants I and II}",
          "explanation": "Sine is positive in the first and second quadrants, so a second solution exists in quadrant II.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the second solution",
          "workingLatex": "\\theta = 180^\\circ - 45^\\circ = 135^\\circ",
          "explanation": "The second-quadrant solution uses $180^\\circ$ minus the acute angle, giving $135^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check both lie in the interval",
          "workingLatex": "45^\\circ, 135^\\circ \\in [0^\\circ, 360^\\circ) \\;\\checkmark",
          "explanation": "Both solutions fall within the required range and are retained.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the solutions",
          "workingLatex": "\\theta = 45^\\circ \\text{ or } \\theta = 135^\\circ",
          "explanation": "These are the two solutions of the cosecant equation in the given interval.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta = 45^\\circ \\text{ or } 135^\\circ$"
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q025",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": ["equations", "cotangent", "solving"],
    "questionText": "Solve $\\cot\\theta = \\sqrt{3}$ for $0^\\circ \\le \\theta < 360^\\circ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Convert cotangent to tangent",
          "workingLatex": "\\cot\\theta = \\sqrt{3} \\;\\Rightarrow\\; \\frac{1}{\\tan\\theta} = \\sqrt{3}",
          "explanation": "Cotangent equations become manageable once rewritten in tangent, whose inverse we can evaluate directly.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rearrange for tangent",
          "workingLatex": "\\tan\\theta = \\frac{1}{\\sqrt{3}} = \\frac{\\sqrt{3}}{3}",
          "explanation": "Taking the reciprocal gives tangent equal to $\\frac{1}{\\sqrt{3}}$, a known exact value corresponding to $30^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the principal value",
          "workingLatex": "\\theta = \\tan^{-1}\\left(\\tfrac{1}{\\sqrt{3}}\\right) = 30^\\circ",
          "explanation": "The inverse tangent of $\\frac{1}{\\sqrt{3}}$ is $30^\\circ$, the first solution.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Use the period of tangent",
          "workingLatex": "\\tan\\theta \\text{ has period } 180^\\circ",
          "explanation": "Tangent repeats every $180^\\circ$, so further solutions are found by adding multiples of $180^\\circ$ to the principal value.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the second solution",
          "workingLatex": "\\theta = 30^\\circ + 180^\\circ = 210^\\circ",
          "explanation": "Adding one period gives the second solution at $210^\\circ$, which is still inside the interval.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check for further solutions",
          "workingLatex": "30^\\circ + 360^\\circ = 390^\\circ > 360^\\circ",
          "explanation": "Adding another period exceeds the interval, so there are no more solutions to include.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the solutions",
          "workingLatex": "\\theta = 30^\\circ \\text{ or } \\theta = 210^\\circ",
          "explanation": "These are the two solutions of the cotangent equation in the given interval.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta = 30^\\circ \\text{ or } 210^\\circ$"
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
    "answerType": "expression",
    "tags": ["simplify", "reciprocal trig", "identities"],
    "questionText": "Simplify $\\sec\\theta \\cos\\theta + \\csc\\theta \\sin\\theta$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rewrite secant as a reciprocal",
          "workingLatex": "\\sec\\theta = \\frac{1}{\\cos\\theta}",
          "explanation": "Converting the reciprocal functions back to sine and cosine is the standard first move when simplifying expressions like this.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rewrite cosecant as a reciprocal",
          "workingLatex": "\\csc\\theta = \\frac{1}{\\sin\\theta}",
          "explanation": "Similarly, cosecant becomes one over sine, so every term is now expressed in the basic functions.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute into the first product",
          "workingLatex": "\\sec\\theta\\cos\\theta = \\frac{1}{\\cos\\theta}\\cdot\\cos\\theta",
          "explanation": "Substituting shows the cosine multiplying its own reciprocal, which is set up to cancel.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Cancel the first product",
          "workingLatex": "\\frac{\\cos\\theta}{\\cos\\theta} = 1",
          "explanation": "A function times its reciprocal is $1$, so the first product simplifies to a constant.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute and cancel the second product",
          "workingLatex": "\\csc\\theta\\sin\\theta = \\frac{1}{\\sin\\theta}\\cdot\\sin\\theta = 1",
          "explanation": "The same reasoning applies to the second product, which also collapses to $1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Add the results",
          "workingLatex": "1 + 1 = 2",
          "explanation": "Combining the two simplified products gives a constant value of $2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the simplified expression",
          "workingLatex": "\\sec\\theta\\cos\\theta + \\csc\\theta\\sin\\theta = 2",
          "explanation": "The whole expression simplifies to the constant $2$, valid wherever the functions are defined.",
          "diagram": null
        }
      ],
      "finalAnswer": "$2$"
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q027",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": ["simplify", "identities", "cotangent"],
    "questionText": "Show that $\\dfrac{\\cot\\theta}{\\csc\\theta}$ simplifies to $\\cos\\theta$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rewrite cotangent in sine and cosine",
          "workingLatex": "\\cot\\theta = \\frac{\\cos\\theta}{\\sin\\theta}",
          "explanation": "Expressing everything in sine and cosine is the reliable way to simplify a quotient of reciprocal functions.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rewrite cosecant in sine",
          "workingLatex": "\\csc\\theta = \\frac{1}{\\sin\\theta}",
          "explanation": "Cosecant becomes one over sine, so both parts of the fraction are now in basic form.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute into the fraction",
          "workingLatex": "\\frac{\\cot\\theta}{\\csc\\theta} = \\frac{\\;\\frac{\\cos\\theta}{\\sin\\theta}\\;}{\\;\\frac{1}{\\sin\\theta}\\;}",
          "explanation": "The expression is now a fraction divided by a fraction, ready to be simplified by flipping the denominator.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Divide by multiplying by the reciprocal",
          "workingLatex": "= \\frac{\\cos\\theta}{\\sin\\theta} \\times \\frac{\\sin\\theta}{1}",
          "explanation": "Dividing by $\\frac{1}{\\sin\\theta}$ is the same as multiplying by $\\sin\\theta$, which will cancel the denominator.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Cancel the sine factors",
          "workingLatex": "= \\frac{\\cos\\theta \\cdot \\sin\\theta}{\\sin\\theta}",
          "explanation": "The sine in the numerator and denominator cancel, since they are the same nonzero quantity.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the simplified result",
          "workingLatex": "= \\cos\\theta",
          "explanation": "After cancelling, only cosine remains, which is exactly what we were asked to show.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{\\cot\\theta}{\\csc\\theta} = \\cos\\theta$"
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q028",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": ["equations", "secant", "quadratic", "solving"],
    "questionText": "Solve $\\sec^2\\theta = 4$ for $0^\\circ \\le \\theta < 360^\\circ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Take square roots of both sides",
          "workingLatex": "\\sec\\theta = \\pm 2",
          "explanation": "Since the equation involves secant squared, taking the square root introduces both a positive and a negative possibility, and both must be considered.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Convert to cosine",
          "workingLatex": "\\frac{1}{\\cos\\theta} = \\pm 2 \\;\\Rightarrow\\; \\cos\\theta = \\pm\\frac{1}{2}",
          "explanation": "Rewriting in cosine gives cosine equal to plus or minus one half, a set of standard values.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve the positive case",
          "workingLatex": "\\cos\\theta = \\tfrac{1}{2} \\;\\Rightarrow\\; \\theta = 60^\\circ, 300^\\circ",
          "explanation": "Cosine is one half at $60^\\circ$ and at $300^\\circ$ (the fourth-quadrant partner), both positive-cosine solutions.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve the negative case",
          "workingLatex": "\\cos\\theta = -\\tfrac{1}{2} \\;\\Rightarrow\\; \\theta = 120^\\circ, 240^\\circ",
          "explanation": "Cosine is negative one half at $120^\\circ$ and $240^\\circ$, the two second- and third-quadrant solutions.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Collect all solutions",
          "workingLatex": "\\theta = 60^\\circ, 120^\\circ, 240^\\circ, 300^\\circ",
          "explanation": "Combining both cases gives four solutions, evenly spaced, as expected from a squared equation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check all lie in the interval",
          "workingLatex": "\\text{all four} \\in [0^\\circ, 360^\\circ) \\;\\checkmark",
          "explanation": "Every solution falls within the required range, so all are kept.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify one solution",
          "workingLatex": "\\sec^2 120^\\circ = \\left(\\tfrac{1}{-1/2}\\right)^2 = (-2)^2 = 4 \\;\\checkmark",
          "explanation": "Substituting $120^\\circ$ back gives $4$, confirming the negative-case solutions are valid.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta = 60^\\circ, 120^\\circ, 240^\\circ, 300^\\circ$"
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q029",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": ["equations", "identities", "secant", "tangent"],
    "questionText": "Solve $\\sec^2\\theta = 3 + \\tan\\theta$ for $0^\\circ \\le \\theta < 360^\\circ$, giving answers to the nearest degree where necessary.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Use the Pythagorean identity for secant",
          "workingLatex": "\\sec^2\\theta = 1 + \\tan^2\\theta",
          "explanation": "Replacing secant squared with $1 + \\tan^2\\theta$ turns the equation into one involving only tangent, which we can treat as a quadratic.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute into the equation",
          "workingLatex": "1 + \\tan^2\\theta = 3 + \\tan\\theta",
          "explanation": "After substitution every term is in tangent, setting up a standard quadratic.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange to standard form",
          "workingLatex": "\\tan^2\\theta - \\tan\\theta - 2 = 0",
          "explanation": "Bringing all terms to one side gives a quadratic in $\\tan\\theta$, ready to factorise.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Factorise the quadratic",
          "workingLatex": "(\\tan\\theta - 2)(\\tan\\theta + 1) = 0",
          "explanation": "The quadratic factorises neatly, since $-2$ and $+1$ multiply to $-2$ and add to $-1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve the first factor",
          "workingLatex": "\\tan\\theta = 2 \\;\\Rightarrow\\; \\theta = 63.4^\\circ, 243.4^\\circ",
          "explanation": "The inverse tangent of $2$ is about $63.4^\\circ$, and adding the $180^\\circ$ period gives the second solution.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve the second factor",
          "workingLatex": "\\tan\\theta = -1 \\;\\Rightarrow\\; \\theta = 135^\\circ, 315^\\circ",
          "explanation": "Tangent is $-1$ at $135^\\circ$ and $315^\\circ$, the two solutions in the interval.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Collect all solutions",
          "workingLatex": "\\theta = 63^\\circ, 135^\\circ, 243^\\circ, 315^\\circ",
          "explanation": "Combining both factors and rounding to the nearest degree gives the full solution set.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Confirm the interval",
          "workingLatex": "\\text{all} \\in [0^\\circ, 360^\\circ) \\;\\checkmark",
          "explanation": "Each solution lies within the required range, so all are valid.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta \\approx 63^\\circ, 135^\\circ, 243^\\circ, 315^\\circ$"
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q030",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": ["equations", "cotangent", "negative", "solving"],
    "questionText": "Solve $\\cot\\theta = -1$ for $0^\\circ \\le \\theta < 360^\\circ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Convert cotangent to tangent",
          "workingLatex": "\\cot\\theta = -1 \\;\\Rightarrow\\; \\tan\\theta = -1",
          "explanation": "Since cotangent is the reciprocal of tangent, and the reciprocal of $-1$ is $-1$, the equation becomes $\\tan\\theta = -1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the reference angle",
          "workingLatex": "\\tan^{-1}(1) = 45^\\circ",
          "explanation": "Ignoring the sign for a moment, the acute angle with tangent $1$ is $45^\\circ$, which serves as the reference angle.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify the quadrants where tangent is negative",
          "workingLatex": "\\tan\\theta < 0 \\text{ in quadrants II and IV}",
          "explanation": "Tangent is negative in the second and fourth quadrants, so the solutions lie there.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the second-quadrant solution",
          "workingLatex": "\\theta = 180^\\circ - 45^\\circ = 135^\\circ",
          "explanation": "Subtracting the reference angle from $180^\\circ$ gives the quadrant II solution.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the fourth-quadrant solution",
          "workingLatex": "\\theta = 360^\\circ - 45^\\circ = 315^\\circ",
          "explanation": "Subtracting the reference angle from $360^\\circ$ gives the quadrant IV solution.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the solutions",
          "workingLatex": "\\theta = 135^\\circ \\text{ or } \\theta = 315^\\circ",
          "explanation": "These are the two solutions in the required interval.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify one solution",
          "workingLatex": "\\cot 135^\\circ = \\frac{\\cos 135^\\circ}{\\sin 135^\\circ} = \\frac{-\\frac{\\sqrt2}{2}}{\\frac{\\sqrt2}{2}} = -1 \\;\\checkmark",
          "explanation": "Substituting $135^\\circ$ back confirms cotangent is $-1$, validating the answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta = 135^\\circ \\text{ or } 315^\\circ$"
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
    "answerType": "proof",
    "tags": ["identities", "proof", "secant"],
    "questionText": "Prove that $\\sec\\theta - \\cos\\theta \\equiv \\sin\\theta\\tan\\theta$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Start with the left-hand side",
          "workingLatex": "\\text{LHS} = \\sec\\theta - \\cos\\theta",
          "explanation": "Working from one side towards the other is the cleanest way to prove an identity; we choose the left-hand side.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rewrite secant as a reciprocal",
          "workingLatex": "= \\frac{1}{\\cos\\theta} - \\cos\\theta",
          "explanation": "Converting secant into one over cosine puts both terms in cosine, ready to be combined.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form a common denominator",
          "workingLatex": "= \\frac{1 - \\cos^2\\theta}{\\cos\\theta}",
          "explanation": "Combining over the common denominator $\\cos\\theta$ merges the two terms into a single fraction.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the Pythagorean identity",
          "workingLatex": "1 - \\cos^2\\theta = \\sin^2\\theta",
          "explanation": "The numerator is exactly the Pythagorean identity rearranged, so it becomes $\\sin^2\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the numerator",
          "workingLatex": "= \\frac{\\sin^2\\theta}{\\cos\\theta}",
          "explanation": "The fraction now has $\\sin^2\\theta$ on top, which we will split to reveal a tangent.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Split off a tangent",
          "workingLatex": "= \\sin\\theta \\cdot \\frac{\\sin\\theta}{\\cos\\theta}",
          "explanation": "Separating one factor of sine leaves $\\frac{\\sin\\theta}{\\cos\\theta}$, which is tangent.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Recognise the tangent and conclude",
          "workingLatex": "= \\sin\\theta\\tan\\theta = \\text{RHS} \\;\\blacksquare",
          "explanation": "This matches the right-hand side exactly, so the identity is proved.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sec\\theta - \\cos\\theta \\equiv \\sin\\theta\\tan\\theta$"
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q032",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "proof",
    "tags": ["identities", "proof", "cosecant"],
    "questionText": "Prove that $\\csc\\theta - \\sin\\theta \\equiv \\cos\\theta\\cot\\theta$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Start with the left-hand side",
          "workingLatex": "\\text{LHS} = \\csc\\theta - \\sin\\theta",
          "explanation": "We work from the left-hand side towards the right, using the reciprocal definition.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rewrite cosecant as a reciprocal",
          "workingLatex": "= \\frac{1}{\\sin\\theta} - \\sin\\theta",
          "explanation": "Converting cosecant to one over sine puts both terms over sine.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form a common denominator",
          "workingLatex": "= \\frac{1 - \\sin^2\\theta}{\\sin\\theta}",
          "explanation": "Combining over $\\sin\\theta$ merges the terms into one fraction.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the Pythagorean identity",
          "workingLatex": "1 - \\sin^2\\theta = \\cos^2\\theta",
          "explanation": "The numerator rearranges the Pythagorean identity, becoming $\\cos^2\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the numerator",
          "workingLatex": "= \\frac{\\cos^2\\theta}{\\sin\\theta}",
          "explanation": "The fraction now has cosine squared on top, ready to be split.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Split off a cotangent",
          "workingLatex": "= \\cos\\theta \\cdot \\frac{\\cos\\theta}{\\sin\\theta}",
          "explanation": "Separating one cosine leaves $\\frac{\\cos\\theta}{\\sin\\theta}$, which is cotangent.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Recognise the cotangent and conclude",
          "workingLatex": "= \\cos\\theta\\cot\\theta = \\text{RHS} \\;\\blacksquare",
          "explanation": "This is precisely the right-hand side, so the identity holds.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\csc\\theta - \\sin\\theta \\equiv \\cos\\theta\\cot\\theta$"
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q033",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "proof",
    "tags": ["identities", "proof", "difference of squares"],
    "questionText": "Prove that $(\\sec\\theta - 1)(\\sec\\theta + 1) \\equiv \\tan^2\\theta$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Start with the left-hand side",
          "workingLatex": "\\text{LHS} = (\\sec\\theta - 1)(\\sec\\theta + 1)",
          "explanation": "The bracketed product is a difference of two squares, which is a strong hint about the first step.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expand as a difference of squares",
          "workingLatex": "= \\sec^2\\theta - 1",
          "explanation": "Multiplying $(a-1)(a+1)$ gives $a^2 - 1$, so the product collapses to $\\sec^2\\theta - 1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall the relevant Pythagorean identity",
          "workingLatex": "\\sec^2\\theta = 1 + \\tan^2\\theta",
          "explanation": "We use the identity linking secant and tangent, which directly involves $\\sec^2\\theta - 1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rearrange the identity",
          "workingLatex": "\\sec^2\\theta - 1 = \\tan^2\\theta",
          "explanation": "Subtracting $1$ from both sides isolates $\\tan^2\\theta$, exactly the expression we have.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute into the working",
          "workingLatex": "= \\tan^2\\theta = \\text{RHS} \\;\\blacksquare",
          "explanation": "Replacing $\\sec^2\\theta - 1$ with $\\tan^2\\theta$ matches the right-hand side, completing the proof.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Note the domain",
          "workingLatex": "\\theta \\ne 90^\\circ + 180^\\circ n",
          "explanation": "The identity holds wherever secant and tangent are defined, i.e. away from odd multiples of $90^\\circ$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(\\sec\\theta - 1)(\\sec\\theta + 1) \\equiv \\tan^2\\theta$"
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q034",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "proof",
    "tags": ["identities", "proof", "secant", "cosecant"],
    "questionText": "Prove that $\\tan\\theta + \\cot\\theta \\equiv \\sec\\theta\\csc\\theta$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Start with the left-hand side",
          "workingLatex": "\\text{LHS} = \\tan\\theta + \\cot\\theta",
          "explanation": "We begin on the left and rewrite both terms in sine and cosine so they can be combined.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rewrite in sine and cosine",
          "workingLatex": "= \\frac{\\sin\\theta}{\\cos\\theta} + \\frac{\\cos\\theta}{\\sin\\theta}",
          "explanation": "Tangent is sine over cosine and cotangent is cosine over sine, giving two fractions to add.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form a common denominator",
          "workingLatex": "= \\frac{\\sin^2\\theta + \\cos^2\\theta}{\\cos\\theta\\sin\\theta}",
          "explanation": "The common denominator is $\\cos\\theta\\sin\\theta$; adding the numerators produces $\\sin^2\\theta + \\cos^2\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the Pythagorean identity",
          "workingLatex": "\\sin^2\\theta + \\cos^2\\theta = 1",
          "explanation": "The numerator is the Pythagorean identity, which equals $1$, dramatically simplifying the fraction.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the numerator",
          "workingLatex": "= \\frac{1}{\\cos\\theta\\sin\\theta}",
          "explanation": "With the top equal to $1$, the expression becomes a single reciprocal of a product.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Split the reciprocal into two factors",
          "workingLatex": "= \\frac{1}{\\cos\\theta}\\cdot\\frac{1}{\\sin\\theta}",
          "explanation": "A reciprocal of a product is the product of the reciprocals, separating cosine and sine.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Recognise secant and cosecant",
          "workingLatex": "= \\sec\\theta\\csc\\theta = \\text{RHS} \\;\\blacksquare",
          "explanation": "Each reciprocal is a named function, giving $\\sec\\theta\\csc\\theta$, exactly the right-hand side.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\tan\\theta + \\cot\\theta \\equiv \\sec\\theta\\csc\\theta$"
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q035",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": ["given ratio", "secant", "quadrant"],
    "questionText": "Given that $\\tan\\theta = \\dfrac{3}{4}$ and $\\theta$ is acute, find the exact values of $\\sec\\theta$ and $\\cos\\theta$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the appropriate identity",
          "workingLatex": "\\sec^2\\theta = 1 + \\tan^2\\theta",
          "explanation": "This identity connects tangent directly to secant, so it lets us find secant from the given tangent without first finding sine and cosine.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute the given tangent",
          "workingLatex": "\\sec^2\\theta = 1 + \\left(\\tfrac{3}{4}\\right)^2",
          "explanation": "We insert the value $\\frac{3}{4}$ for tangent, ready to compute the square.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate the square",
          "workingLatex": "= 1 + \\frac{9}{16}",
          "explanation": "Squaring $\\frac{3}{4}$ gives $\\frac{9}{16}$, which we add to $1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Combine into a single fraction",
          "workingLatex": "= \\frac{16}{16} + \\frac{9}{16} = \\frac{25}{16}",
          "explanation": "Writing $1$ as $\\frac{16}{16}$ allows the fractions to be added, giving $\\frac{25}{16}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Take the square root",
          "workingLatex": "\\sec\\theta = \\pm\\frac{5}{4}",
          "explanation": "Square-rooting $\\frac{25}{16}$ gives $\\frac{5}{4}$, with a sign still to be decided.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Choose the sign using the quadrant",
          "workingLatex": "\\theta \\text{ acute} \\;\\Rightarrow\\; \\sec\\theta > 0 \\;\\Rightarrow\\; \\sec\\theta = \\frac{5}{4}",
          "explanation": "For an acute angle cosine is positive, so secant is positive too, selecting the positive root.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find cosine as the reciprocal",
          "workingLatex": "\\cos\\theta = \\frac{1}{\\sec\\theta} = \\frac{4}{5}",
          "explanation": "Cosine is the reciprocal of secant, so it is $\\frac{4}{5}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the results",
          "workingLatex": "\\sec\\theta = \\frac{5}{4}, \\quad \\cos\\theta = \\frac{4}{5}",
          "explanation": "These are the exact values, consistent with the classic $3$-$4$-$5$ right triangle.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sec\\theta = \\dfrac{5}{4}, \\quad \\cos\\theta = \\dfrac{4}{5}$"
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q036",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": ["given ratio", "cosecant", "cotangent", "obtuse"],
    "questionText": "Given that $\\sin\\theta = \\dfrac{5}{13}$ and $\\theta$ is obtuse, find the exact values of $\\csc\\theta$ and $\\cot\\theta$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find cosecant directly",
          "workingLatex": "\\csc\\theta = \\frac{1}{\\sin\\theta} = \\frac{13}{5}",
          "explanation": "Cosecant is simply the reciprocal of the given sine, so it is found immediately as $\\frac{13}{5}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up the Pythagorean identity for cosine",
          "workingLatex": "\\cos^2\\theta = 1 - \\sin^2\\theta",
          "explanation": "To find cotangent we need cosine, and this identity gives cosine from the known sine.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the sine value",
          "workingLatex": "\\cos^2\\theta = 1 - \\left(\\tfrac{5}{13}\\right)^2 = 1 - \\frac{25}{169}",
          "explanation": "Squaring $\\frac{5}{13}$ gives $\\frac{25}{169}$, which we subtract from $1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify to a single fraction",
          "workingLatex": "\\cos^2\\theta = \\frac{169 - 25}{169} = \\frac{144}{169}",
          "explanation": "Writing $1$ as $\\frac{169}{169}$ and subtracting gives $\\frac{144}{169}$, a perfect-square fraction.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Take the square root and choose the sign",
          "workingLatex": "\\theta \\text{ obtuse} \\;\\Rightarrow\\; \\cos\\theta = -\\frac{12}{13}",
          "explanation": "The root of $\\frac{144}{169}$ is $\\frac{12}{13}$; since $\\theta$ is obtuse (quadrant II), cosine is negative, so we take the negative value.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Form cotangent from cosine and sine",
          "workingLatex": "\\cot\\theta = \\frac{\\cos\\theta}{\\sin\\theta} = \\frac{-\\frac{12}{13}}{\\frac{5}{13}}",
          "explanation": "Cotangent is cosine over sine; substituting both values sets up the division.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify the compound fraction",
          "workingLatex": "\\cot\\theta = -\\frac{12}{13}\\times\\frac{13}{5} = -\\frac{12}{5}",
          "explanation": "The thirteens cancel, leaving $-\\frac{12}{5}$; the sign is negative, consistent with an obtuse angle.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the results",
          "workingLatex": "\\csc\\theta = \\frac{13}{5}, \\quad \\cot\\theta = -\\frac{12}{5}",
          "explanation": "These are the exact values; cosecant stays positive since sine is positive in quadrant II, while cotangent is negative.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\csc\\theta = \\dfrac{13}{5}, \\quad \\cot\\theta = -\\dfrac{12}{5}$"
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q037",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Intermediate",
    "marks": 7,
    "answerType": "value",
    "tags": ["equations", "cosecant", "cotangent", "quadratic"],
    "questionText": "Solve $\\csc^2\\theta + \\cot\\theta = 3$ for $0^\\circ \\le \\theta < 360^\\circ$, giving answers to the nearest degree where necessary.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Replace cosecant squared using the identity",
          "workingLatex": "\\csc^2\\theta = 1 + \\cot^2\\theta",
          "explanation": "Using this identity converts the equation into one purely in cotangent, which we can treat as a quadratic.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute into the equation",
          "workingLatex": "1 + \\cot^2\\theta + \\cot\\theta = 3",
          "explanation": "After substitution the equation is entirely in cotangent.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange to standard quadratic form",
          "workingLatex": "\\cot^2\\theta + \\cot\\theta - 2 = 0",
          "explanation": "Moving everything to one side gives a neat quadratic in $\\cot\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Factorise",
          "workingLatex": "(\\cot\\theta + 2)(\\cot\\theta - 1) = 0",
          "explanation": "The numbers $+2$ and $-1$ multiply to $-2$ and add to $+1$, giving the factorisation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve the first factor",
          "workingLatex": "\\cot\\theta = 1 \\;\\Rightarrow\\; \\tan\\theta = 1 \\;\\Rightarrow\\; \\theta = 45^\\circ, 225^\\circ",
          "explanation": "Converting to tangent, $\\tan\\theta = 1$ gives $45^\\circ$ and, one period later, $225^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve the second factor",
          "workingLatex": "\\cot\\theta = -2 \\;\\Rightarrow\\; \\tan\\theta = -\\tfrac{1}{2} \\;\\Rightarrow\\; \\theta = 153.4^\\circ, 333.4^\\circ",
          "explanation": "Here $\\tan\\theta = -\\frac{1}{2}$; the reference angle is $26.6^\\circ$, and negative tangent gives quadrant II and IV solutions.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Collect and round the solutions",
          "workingLatex": "\\theta = 45^\\circ, 153^\\circ, 225^\\circ, 333^\\circ",
          "explanation": "Combining both factors and rounding to the nearest degree gives four solutions in the interval.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta = 45^\\circ, 153^\\circ, 225^\\circ, 333^\\circ$"
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q038",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": ["equations", "secant", "cosine", "solving"],
    "questionText": "Solve $2\\sec\\theta + 3 = 0$ for $0^\\circ \\le \\theta < 360^\\circ$, giving answers to the nearest degree.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Isolate the secant",
          "workingLatex": "\\sec\\theta = -\\frac{3}{2}",
          "explanation": "Rearranging the linear equation gives secant equal to $-\\frac{3}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Convert to cosine",
          "workingLatex": "\\cos\\theta = -\\frac{2}{3}",
          "explanation": "Cosine is the reciprocal of secant, so it equals $-\\frac{2}{3}$; note this is within the valid range for cosine.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the reference angle",
          "workingLatex": "\\cos^{-1}\\left(\\tfrac{2}{3}\\right) \\approx 48.19^\\circ",
          "explanation": "Ignoring the sign, the acute angle with cosine $\\frac{2}{3}$ is about $48.19^\\circ$, our reference angle.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify the quadrants where cosine is negative",
          "workingLatex": "\\cos\\theta < 0 \\text{ in quadrants II and III}",
          "explanation": "Cosine is negative in the second and third quadrants, so the solutions lie there.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the second-quadrant solution",
          "workingLatex": "\\theta = 180^\\circ - 48.19^\\circ \\approx 131.8^\\circ",
          "explanation": "Subtracting the reference angle from $180^\\circ$ gives the quadrant II solution.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the third-quadrant solution",
          "workingLatex": "\\theta = 180^\\circ + 48.19^\\circ \\approx 228.2^\\circ",
          "explanation": "Adding the reference angle to $180^\\circ$ gives the quadrant III solution.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the solutions to the nearest degree",
          "workingLatex": "\\theta \\approx 132^\\circ, 228^\\circ",
          "explanation": "Rounding both values gives the two solutions in the required interval.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta \\approx 132^\\circ, 228^\\circ$"
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q039",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": ["simplify", "identities", "factorising"],
    "questionText": "Simplify $\\dfrac{\\sec^2\\theta - 1}{\\sec^2\\theta}$, giving your answer as a single trigonometric function squared.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Replace the numerator using an identity",
          "workingLatex": "\\sec^2\\theta - 1 = \\tan^2\\theta",
          "explanation": "The identity $\\sec^2\\theta = 1 + \\tan^2\\theta$ rearranges so the numerator becomes $\\tan^2\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rewrite the expression",
          "workingLatex": "\\frac{\\tan^2\\theta}{\\sec^2\\theta}",
          "explanation": "Substituting simplifies the numerator, leaving a ratio of two squared functions.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write tangent and secant in sine and cosine",
          "workingLatex": "= \\frac{\\frac{\\sin^2\\theta}{\\cos^2\\theta}}{\\frac{1}{\\cos^2\\theta}}",
          "explanation": "Converting both to sine and cosine makes the cancellation visible.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Divide by multiplying by the reciprocal",
          "workingLatex": "= \\frac{\\sin^2\\theta}{\\cos^2\\theta}\\times\\frac{\\cos^2\\theta}{1}",
          "explanation": "Dividing by $\\frac{1}{\\cos^2\\theta}$ is multiplying by $\\cos^2\\theta$, which will cancel the denominator.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Cancel the cosine-squared factors",
          "workingLatex": "= \\sin^2\\theta",
          "explanation": "The $\\cos^2\\theta$ terms cancel, leaving just $\\sin^2\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the simplified result",
          "workingLatex": "\\frac{\\sec^2\\theta - 1}{\\sec^2\\theta} = \\sin^2\\theta",
          "explanation": "The expression reduces to $\\sin^2\\theta$, a single trigonometric function squared as required.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sin^2\\theta$"
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q040",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": ["inverse trig", "composite", "exact values"],
    "questionText": "Find the exact value of $\\cos\\left(\\arcsin\\dfrac{3}{5}\\right)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Name the inner angle",
          "workingLatex": "\\text{let } \\alpha = \\arcsin\\tfrac{3}{5}, \\text{ so } \\sin\\alpha = \\tfrac{3}{5}",
          "explanation": "Giving the inner inverse function a name turns the composite into a clear two-step problem: find $\\alpha$'s sine, then its cosine.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the range of the inner angle",
          "workingLatex": "-\\frac{\\pi}{2} \\le \\alpha \\le \\frac{\\pi}{2}",
          "explanation": "Since $\\alpha$ comes from arcsine, it lies in this range, where cosine is never negative. This will fix the sign later.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use the Pythagorean identity",
          "workingLatex": "\\cos^2\\alpha = 1 - \\sin^2\\alpha",
          "explanation": "To get cosine from the known sine, we use the fundamental identity.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the sine value",
          "workingLatex": "\\cos^2\\alpha = 1 - \\left(\\tfrac{3}{5}\\right)^2 = 1 - \\frac{9}{25}",
          "explanation": "Squaring $\\frac{3}{5}$ gives $\\frac{9}{25}$, which we subtract from $1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "\\cos^2\\alpha = \\frac{25 - 9}{25} = \\frac{16}{25}",
          "explanation": "Combining over a common denominator gives $\\frac{16}{25}$, another perfect-square fraction.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Take the square root with the correct sign",
          "workingLatex": "\\cos\\alpha = +\\frac{4}{5}",
          "explanation": "Because $\\alpha$ is in the arcsine range where cosine is non-negative, we take the positive root, giving $\\frac{4}{5}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the final value",
          "workingLatex": "\\cos\\left(\\arcsin\\tfrac{3}{5}\\right) = \\frac{4}{5}",
          "explanation": "This is the exact value, recognisable from the $3$-$4$-$5$ triangle.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\cos\\left(\\arcsin\\dfrac{3}{5}\\right) = \\dfrac{4}{5}$"
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q041",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": ["inverse trig", "composite", "tangent"],
    "questionText": "Find the exact value of $\\tan\\left(\\arccos\\dfrac{5}{13}\\right)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Name the inner angle",
          "workingLatex": "\\text{let } \\alpha = \\arccos\\tfrac{5}{13}, \\text{ so } \\cos\\alpha = \\tfrac{5}{13}",
          "explanation": "Naming the inner arccosine gives an angle $\\alpha$ whose cosine we know; we then need its tangent.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the range of the inner angle",
          "workingLatex": "0 \\le \\alpha \\le \\pi, \\text{ and } \\cos\\alpha > 0 \\Rightarrow 0 \\le \\alpha < \\tfrac{\\pi}{2}",
          "explanation": "Arccosine gives $\\alpha$ in $[0,\\pi]$; a positive cosine narrows it to the first quadrant, where sine and tangent are positive.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find sine using the Pythagorean identity",
          "workingLatex": "\\sin^2\\alpha = 1 - \\left(\\tfrac{5}{13}\\right)^2 = 1 - \\frac{25}{169}",
          "explanation": "We need sine to build the tangent; the identity gives it from the known cosine.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the sine squared",
          "workingLatex": "\\sin^2\\alpha = \\frac{144}{169} \\;\\Rightarrow\\; \\sin\\alpha = \\frac{12}{13}",
          "explanation": "The difference is $\\frac{144}{169}$, whose positive root is $\\frac{12}{13}$, positive because $\\alpha$ is in the first quadrant.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Form the tangent",
          "workingLatex": "\\tan\\alpha = \\frac{\\sin\\alpha}{\\cos\\alpha} = \\frac{\\frac{12}{13}}{\\frac{5}{13}}",
          "explanation": "Tangent is sine over cosine; substituting both fractions sets up the division.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify",
          "workingLatex": "\\tan\\alpha = \\frac{12}{13}\\times\\frac{13}{5} = \\frac{12}{5}",
          "explanation": "The thirteens cancel, giving $\\frac{12}{5}$, matching the $5$-$12$-$13$ triangle.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the final value",
          "workingLatex": "\\tan\\left(\\arccos\\tfrac{5}{13}\\right) = \\frac{12}{5}",
          "explanation": "This is the exact value requested.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\tan\\left(\\arccos\\dfrac{5}{13}\\right) = \\dfrac{12}{5}$"
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
    "answerType": "proof",
    "tags": ["identities", "proof", "difference of squares"],
    "questionText": "Prove that $(\\csc\\theta - \\cot\\theta)(\\csc\\theta + \\cot\\theta) \\equiv 1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Start with the left-hand side",
          "workingLatex": "\\text{LHS} = (\\csc\\theta - \\cot\\theta)(\\csc\\theta + \\cot\\theta)",
          "explanation": "The product of a difference and a sum of the same terms signals a difference of squares.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expand as a difference of squares",
          "workingLatex": "= \\csc^2\\theta - \\cot^2\\theta",
          "explanation": "Applying $(a-b)(a+b) = a^2 - b^2$ collapses the product neatly.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall the relevant identity",
          "workingLatex": "\\csc^2\\theta = 1 + \\cot^2\\theta",
          "explanation": "This identity relates cosecant squared and cotangent squared, exactly the two terms present.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute for cosecant squared",
          "workingLatex": "= (1 + \\cot^2\\theta) - \\cot^2\\theta",
          "explanation": "Replacing $\\csc^2\\theta$ shows the cotangent-squared terms are about to cancel.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Cancel and simplify",
          "workingLatex": "= 1",
          "explanation": "The $\\cot^2\\theta$ terms cancel, leaving the constant $1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclude",
          "workingLatex": "(\\csc\\theta - \\cot\\theta)(\\csc\\theta + \\cot\\theta) \\equiv 1 \\;\\blacksquare",
          "explanation": "The left-hand side equals $1$, matching the right-hand side, so the identity is proved.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(\\csc\\theta - \\cot\\theta)(\\csc\\theta + \\cot\\theta) \\equiv 1$"
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q043",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": ["inverse trig", "equation", "solving"],
    "questionText": "Solve $\\arcsin(2x - 1) = \\dfrac{\\pi}{6}$ for $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Apply sine to both sides",
          "workingLatex": "2x - 1 = \\sin\\frac{\\pi}{6}",
          "explanation": "Taking the sine of both sides undoes the arcsine on the left, isolating the expression inside it.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate the right-hand side",
          "workingLatex": "\\sin\\frac{\\pi}{6} = \\frac{1}{2}",
          "explanation": "The sine of $\\frac{\\pi}{6}$ is the standard exact value one half.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form a linear equation",
          "workingLatex": "2x - 1 = \\frac{1}{2}",
          "explanation": "We now have a simple linear equation in $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add one to both sides",
          "workingLatex": "2x = \\frac{3}{2}",
          "explanation": "Adding $1$ (as $\\frac{2}{2}$) to $\\frac{1}{2}$ gives $\\frac{3}{2}$ on the right.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Divide by two",
          "workingLatex": "x = \\frac{3}{4}",
          "explanation": "Dividing both sides by $2$ isolates $x$ as $\\frac{3}{4}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check validity of the input",
          "workingLatex": "2x - 1 = \\tfrac{1}{2}, \\quad -1 \\le \\tfrac{1}{2} \\le 1 \\;\\checkmark",
          "explanation": "The argument $\\frac{1}{2}$ lies in the domain $[-1,1]$ of arcsine, so the solution is valid.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = \\dfrac{3}{4}$"
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
    "answerType": "expression",
    "tags": ["simplify", "identities", "cotangent"],
    "questionText": "Express $\\cot\\theta\\sec\\theta$ as a single reciprocal trigonometric function.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rewrite cotangent in sine and cosine",
          "workingLatex": "\\cot\\theta = \\frac{\\cos\\theta}{\\sin\\theta}",
          "explanation": "Expressing in basic functions is the standard route to combining a product like this.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rewrite secant in cosine",
          "workingLatex": "\\sec\\theta = \\frac{1}{\\cos\\theta}",
          "explanation": "Secant becomes one over cosine, so both factors are in basic form.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Multiply the two",
          "workingLatex": "\\cot\\theta\\sec\\theta = \\frac{\\cos\\theta}{\\sin\\theta}\\cdot\\frac{1}{\\cos\\theta}",
          "explanation": "Writing the product shows a cosine in the numerator and denominator, poised to cancel.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Cancel the cosine",
          "workingLatex": "= \\frac{\\cos\\theta}{\\sin\\theta\\cos\\theta} = \\frac{1}{\\sin\\theta}",
          "explanation": "The cosine factors cancel, leaving one over sine.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Recognise the reciprocal function",
          "workingLatex": "\\frac{1}{\\sin\\theta} = \\csc\\theta",
          "explanation": "One over sine is by definition cosecant, giving a single reciprocal function.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the result",
          "workingLatex": "\\cot\\theta\\sec\\theta = \\csc\\theta",
          "explanation": "The product simplifies to $\\csc\\theta$, as required.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\cot\\theta\\sec\\theta = \\csc\\theta$"
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q045",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": ["equations", "secant", "quadratic", "solving"],
    "questionText": "Solve $\\sec^2\\theta - 3\\sec\\theta + 2 = 0$ for $0^\\circ \\le \\theta < 360^\\circ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Treat as a quadratic in secant",
          "workingLatex": "\\text{let } s = \\sec\\theta: \\quad s^2 - 3s + 2 = 0",
          "explanation": "Substituting $s = \\sec\\theta$ reveals a standard quadratic, which is easier to factorise.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Factorise",
          "workingLatex": "(s - 1)(s - 2) = 0",
          "explanation": "The factors of $2$ that add to $3$ are $1$ and $2$, giving this factorisation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Read off the two secant values",
          "workingLatex": "\\sec\\theta = 1 \\quad \\text{or} \\quad \\sec\\theta = 2",
          "explanation": "Setting each factor to zero gives the possible secant values, both with magnitude at least $1$, so both are attainable.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve the first case",
          "workingLatex": "\\sec\\theta = 1 \\;\\Rightarrow\\; \\cos\\theta = 1 \\;\\Rightarrow\\; \\theta = 0^\\circ",
          "explanation": "Cosine equals $1$ only at $0^\\circ$ in the interval, giving a single solution.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve the second case",
          "workingLatex": "\\sec\\theta = 2 \\;\\Rightarrow\\; \\cos\\theta = \\tfrac{1}{2} \\;\\Rightarrow\\; \\theta = 60^\\circ, 300^\\circ",
          "explanation": "Cosine equals one half at $60^\\circ$ and $300^\\circ$, giving two more solutions.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Collect all solutions",
          "workingLatex": "\\theta = 0^\\circ, 60^\\circ, 300^\\circ",
          "explanation": "Combining both cases gives three solutions in the interval.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Confirm the interval",
          "workingLatex": "0^\\circ, 60^\\circ, 300^\\circ \\in [0^\\circ, 360^\\circ) \\;\\checkmark",
          "explanation": "All solutions lie in the required range and are retained.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta = 0^\\circ, 60^\\circ, 300^\\circ$"
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q046",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "proof",
    "tags": ["identities", "proof", "secant", "tangent"],
    "questionText": "Prove that $\\sec\\theta + \\tan\\theta \\equiv \\dfrac{\\cos\\theta}{1 - \\sin\\theta}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Start with the left-hand side",
          "workingLatex": "\\text{LHS} = \\sec\\theta + \\tan\\theta",
          "explanation": "We begin with the left side and rewrite both terms in sine and cosine so they can be combined into one fraction.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rewrite in sine and cosine",
          "workingLatex": "= \\frac{1}{\\cos\\theta} + \\frac{\\sin\\theta}{\\cos\\theta}",
          "explanation": "Secant is one over cosine and tangent is sine over cosine, so both terms already share the denominator $\\cos\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Combine over the common denominator",
          "workingLatex": "= \\frac{1 + \\sin\\theta}{\\cos\\theta}",
          "explanation": "Adding the two fractions gives a single fraction with numerator $1 + \\sin\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Decide on a strategy to reach the target",
          "workingLatex": "\\text{target has } (1 - \\sin\\theta) \\text{ in the denominator}",
          "explanation": "The right-hand side has $1 - \\sin\\theta$ below, so we aim to introduce that factor by multiplying cleverly by a form of $1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Multiply top and bottom by the conjugate",
          "workingLatex": "= \\frac{1 + \\sin\\theta}{\\cos\\theta}\\times\\frac{1 - \\sin\\theta}{1 - \\sin\\theta}",
          "explanation": "Multiplying by $\\frac{1 - \\sin\\theta}{1 - \\sin\\theta}$, which equals $1$, is legitimate and will create a difference of squares on top.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Expand the numerator as a difference of squares",
          "workingLatex": "(1 + \\sin\\theta)(1 - \\sin\\theta) = 1 - \\sin^2\\theta",
          "explanation": "The product of a sum and difference collapses to $1 - \\sin^2\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Apply the Pythagorean identity",
          "workingLatex": "1 - \\sin^2\\theta = \\cos^2\\theta",
          "explanation": "The numerator is exactly $\\cos^2\\theta$ by the Pythagorean identity, which is the key simplification.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the fraction with the new numerator",
          "workingLatex": "= \\frac{\\cos^2\\theta}{\\cos\\theta\\,(1 - \\sin\\theta)}",
          "explanation": "Substituting shows a $\\cos^2\\theta$ over a product that includes a single $\\cos\\theta$, ready to cancel.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Cancel one factor of cosine",
          "workingLatex": "= \\frac{\\cos\\theta}{1 - \\sin\\theta}",
          "explanation": "Cancelling one cosine from top and bottom leaves exactly the right-hand side.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Conclude the proof",
          "workingLatex": "\\sec\\theta + \\tan\\theta \\equiv \\frac{\\cos\\theta}{1 - \\sin\\theta} \\;\\blacksquare",
          "explanation": "The left-hand side has been transformed into the right-hand side, completing the proof for all valid $\\theta$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sec\\theta + \\tan\\theta \\equiv \\dfrac{\\cos\\theta}{1 - \\sin\\theta}$"
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q047",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "proof",
    "tags": ["identities", "proof", "cosecant", "cotangent"],
    "questionText": "Prove that $\\dfrac{1}{\\csc\\theta - \\cot\\theta} \\equiv \\csc\\theta + \\cot\\theta$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Start with the left-hand side",
          "workingLatex": "\\text{LHS} = \\frac{1}{\\csc\\theta - \\cot\\theta}",
          "explanation": "We work from the left, and the presence of $\\csc\\theta - \\cot\\theta$ suggests multiplying by its conjugate.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Multiply top and bottom by the conjugate",
          "workingLatex": "= \\frac{1}{\\csc\\theta - \\cot\\theta}\\times\\frac{\\csc\\theta + \\cot\\theta}{\\csc\\theta + \\cot\\theta}",
          "explanation": "Multiplying by $\\frac{\\csc\\theta + \\cot\\theta}{\\csc\\theta + \\cot\\theta}$ equals multiplying by $1$, and it produces a difference of squares in the denominator.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand the denominator",
          "workingLatex": "(\\csc\\theta - \\cot\\theta)(\\csc\\theta + \\cot\\theta) = \\csc^2\\theta - \\cot^2\\theta",
          "explanation": "The conjugate product gives a difference of squares, exactly the combination that a Pythagorean identity simplifies.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Recall the relevant identity",
          "workingLatex": "\\csc^2\\theta = 1 + \\cot^2\\theta",
          "explanation": "This identity connects the two squared terms in the denominator.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the denominator",
          "workingLatex": "\\csc^2\\theta - \\cot^2\\theta = (1 + \\cot^2\\theta) - \\cot^2\\theta = 1",
          "explanation": "Substituting shows the cotangent-squared terms cancel, leaving the denominator equal to $1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Rewrite the fraction",
          "workingLatex": "= \\frac{\\csc\\theta + \\cot\\theta}{1}",
          "explanation": "With the denominator equal to $1$, only the numerator remains.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify",
          "workingLatex": "= \\csc\\theta + \\cot\\theta",
          "explanation": "Dividing by $1$ leaves the numerator unchanged.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Conclude the proof",
          "workingLatex": "\\frac{1}{\\csc\\theta - \\cot\\theta} \\equiv \\csc\\theta + \\cot\\theta \\;\\blacksquare",
          "explanation": "The left-hand side equals the right-hand side, completing the proof wherever the functions are defined.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{1}{\\csc\\theta - \\cot\\theta} \\equiv \\csc\\theta + \\cot\\theta$"
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q048",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "value",
    "tags": ["equations", "cotangent", "cosecant", "quadratic"],
    "questionText": "Solve $2\\cot^2\\theta = 3\\csc\\theta$ for $0^\\circ \\le \\theta < 360^\\circ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Replace cotangent squared using an identity",
          "workingLatex": "\\cot^2\\theta = \\csc^2\\theta - 1",
          "explanation": "The equation mixes cotangent and cosecant; converting cotangent squared into cosecant terms lets us work in a single function.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute into the equation",
          "workingLatex": "2(\\csc^2\\theta - 1) = 3\\csc\\theta",
          "explanation": "After substitution the whole equation is in cosecant.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand the bracket",
          "workingLatex": "2\\csc^2\\theta - 2 = 3\\csc\\theta",
          "explanation": "Multiplying out prepares the equation for rearrangement into a quadratic.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rearrange to standard form",
          "workingLatex": "2\\csc^2\\theta - 3\\csc\\theta - 2 = 0",
          "explanation": "Bringing all terms to one side gives a quadratic in $\\csc\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Factorise the quadratic",
          "workingLatex": "(2\\csc\\theta + 1)(\\csc\\theta - 2) = 0",
          "explanation": "Factorising gives two linear factors; checking, the cross terms $-4\\csc\\theta + \\csc\\theta = -3\\csc\\theta$ confirm it.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Read off the two cases",
          "workingLatex": "\\csc\\theta = -\\tfrac{1}{2} \\quad \\text{or} \\quad \\csc\\theta = 2",
          "explanation": "Each factor gives a value of cosecant to examine.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Reject the impossible case",
          "workingLatex": "|\\csc\\theta| \\ge 1 \\;\\Rightarrow\\; \\csc\\theta = -\\tfrac{1}{2} \\text{ rejected}",
          "explanation": "Cosecant can never lie strictly between $-1$ and $1$, so $-\\frac{1}{2}$ has no solutions and is discarded.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Convert the valid case to sine",
          "workingLatex": "\\csc\\theta = 2 \\;\\Rightarrow\\; \\sin\\theta = \\tfrac{1}{2}",
          "explanation": "The reciprocal of $2$ is one half, giving a standard sine equation.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the principal solution",
          "workingLatex": "\\theta = \\sin^{-1}\\left(\\tfrac{1}{2}\\right) = 30^\\circ",
          "explanation": "The inverse sine of one half gives the first-quadrant solution $30^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Find the second solution",
          "workingLatex": "\\theta = 180^\\circ - 30^\\circ = 150^\\circ",
          "explanation": "Sine is also positive in quadrant II, giving $150^\\circ$ from $180^\\circ$ minus the reference angle.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the solutions",
          "workingLatex": "\\theta = 30^\\circ \\text{ or } 150^\\circ",
          "explanation": "These are the only solutions in the interval, since the other factor was rejected.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Check a solution",
          "workingLatex": "2\\cot^2 30^\\circ = 2(\\sqrt3)^2 = 6, \\quad 3\\csc 30^\\circ = 3(2) = 6 \\;\\checkmark",
          "explanation": "Substituting $30^\\circ$ makes both sides equal $6$, confirming the solution is correct.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta = 30^\\circ \\text{ or } 150^\\circ$"
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q049",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "value",
    "tags": ["equations", "secant", "tangent", "quadratic"],
    "questionText": "Solve $3\\tan^2\\theta - \\sec\\theta = 1$ for $0^\\circ \\le \\theta < 360^\\circ$, giving answers to the nearest degree where necessary.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Replace tangent squared using an identity",
          "workingLatex": "\\tan^2\\theta = \\sec^2\\theta - 1",
          "explanation": "The equation mixes tangent and secant; converting tangent squared into secant terms gives a single-function equation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute into the equation",
          "workingLatex": "3(\\sec^2\\theta - 1) - \\sec\\theta = 1",
          "explanation": "After substitution the equation is entirely in secant.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand the bracket",
          "workingLatex": "3\\sec^2\\theta - 3 - \\sec\\theta = 1",
          "explanation": "Multiplying out prepares the equation for rearrangement.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rearrange to standard quadratic form",
          "workingLatex": "3\\sec^2\\theta - \\sec\\theta - 4 = 0",
          "explanation": "Collecting all terms on one side gives a quadratic in $\\sec\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Factorise",
          "workingLatex": "(3\\sec\\theta - 4)(\\sec\\theta + 1) = 0",
          "explanation": "Factorising gives two linear factors; the cross terms $3\\sec\\theta - 4\\sec\\theta = -\\sec\\theta$ confirm the split.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Read off the two cases",
          "workingLatex": "\\sec\\theta = \\tfrac{4}{3} \\quad \\text{or} \\quad \\sec\\theta = -1",
          "explanation": "Each factor yields a secant value; both have magnitude at least $1$, so both are attainable.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve the first case",
          "workingLatex": "\\sec\\theta = \\tfrac{4}{3} \\;\\Rightarrow\\; \\cos\\theta = \\tfrac{3}{4}",
          "explanation": "Taking reciprocals gives cosine equal to $\\frac{3}{4}$, which is positive.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find the angles for the first case",
          "workingLatex": "\\theta \\approx 41.4^\\circ, \\; 318.6^\\circ",
          "explanation": "The reference angle is $\\cos^{-1}\\frac{3}{4} \\approx 41.4^\\circ$; positive cosine gives quadrant I and IV solutions.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solve the second case",
          "workingLatex": "\\sec\\theta = -1 \\;\\Rightarrow\\; \\cos\\theta = -1 \\;\\Rightarrow\\; \\theta = 180^\\circ",
          "explanation": "Cosine equals $-1$ only at $180^\\circ$ in the interval.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Collect all solutions",
          "workingLatex": "\\theta \\approx 41^\\circ, 180^\\circ, 319^\\circ",
          "explanation": "Combining both cases and rounding gives three solutions in the interval.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Confirm the interval",
          "workingLatex": "\\text{all} \\in [0^\\circ, 360^\\circ) \\;\\checkmark",
          "explanation": "Every solution lies within the required range.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta \\approx 41^\\circ, 180^\\circ, 319^\\circ$"
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q050",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": ["equations", "cosecant", "sine", "solving"],
    "questionText": "Solve $\\csc\\theta = 2\\sin\\theta$ for $0^\\circ \\le \\theta < 360^\\circ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rewrite cosecant in sine",
          "workingLatex": "\\frac{1}{\\sin\\theta} = 2\\sin\\theta",
          "explanation": "Converting cosecant to one over sine puts the whole equation in a single function.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Clear the denominator",
          "workingLatex": "1 = 2\\sin^2\\theta",
          "explanation": "Multiplying both sides by $\\sin\\theta$ removes the fraction (valid since $\\sin\\theta \\ne 0$ for cosecant to exist).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange for sine squared",
          "workingLatex": "\\sin^2\\theta = \\frac{1}{2}",
          "explanation": "Dividing by $2$ isolates $\\sin^2\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Take square roots",
          "workingLatex": "\\sin\\theta = \\pm\\frac{1}{\\sqrt{2}} = \\pm\\frac{\\sqrt{2}}{2}",
          "explanation": "Square-rooting introduces both signs, giving the recognisable exact value for $45^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve the positive case",
          "workingLatex": "\\sin\\theta = \\tfrac{\\sqrt2}{2} \\;\\Rightarrow\\; \\theta = 45^\\circ, 135^\\circ",
          "explanation": "Positive sine gives solutions in quadrants I and II.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve the negative case",
          "workingLatex": "\\sin\\theta = -\\tfrac{\\sqrt2}{2} \\;\\Rightarrow\\; \\theta = 225^\\circ, 315^\\circ",
          "explanation": "Negative sine gives solutions in quadrants III and IV.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State all solutions",
          "workingLatex": "\\theta = 45^\\circ, 135^\\circ, 225^\\circ, 315^\\circ",
          "explanation": "Combining both cases gives four evenly spaced solutions, all with nonzero sine so cosecant is defined.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta = 45^\\circ, 135^\\circ, 225^\\circ, 315^\\circ$"
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q051",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "proof",
    "tags": ["identities", "proof", "secant", "cosecant"],
    "questionText": "Prove that $(\\tan\\theta + \\cot\\theta)^2 \\equiv \\sec^2\\theta + \\csc^2\\theta$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Start with the left-hand side",
          "workingLatex": "\\text{LHS} = (\\tan\\theta + \\cot\\theta)^2",
          "explanation": "We expand the square first, then simplify towards the right-hand side.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expand the square",
          "workingLatex": "= \\tan^2\\theta + 2\\tan\\theta\\cot\\theta + \\cot^2\\theta",
          "explanation": "Using $(a+b)^2 = a^2 + 2ab + b^2$ gives three terms.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify the middle product",
          "workingLatex": "\\tan\\theta\\cot\\theta = \\tan\\theta\\cdot\\frac{1}{\\tan\\theta} = 1",
          "explanation": "Tangent and cotangent are reciprocals, so their product is $1$, making the middle term $2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rewrite the expansion",
          "workingLatex": "= \\tan^2\\theta + \\cot^2\\theta + 2",
          "explanation": "Substituting the middle term gives this cleaner expression.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Split the constant to prepare two identities",
          "workingLatex": "= (\\tan^2\\theta + 1) + (\\cot^2\\theta + 1)",
          "explanation": "Writing $2$ as $1 + 1$ and pairing each with a squared term sets up the two Pythagorean identities.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply the secant identity",
          "workingLatex": "\\tan^2\\theta + 1 = \\sec^2\\theta",
          "explanation": "The first bracket is exactly the identity for secant squared.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Apply the cosecant identity",
          "workingLatex": "\\cot^2\\theta + 1 = \\csc^2\\theta",
          "explanation": "The second bracket is the identity for cosecant squared.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Conclude the proof",
          "workingLatex": "= \\sec^2\\theta + \\csc^2\\theta = \\text{RHS} \\;\\blacksquare",
          "explanation": "Combining both identities gives exactly the right-hand side, completing the proof.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(\\tan\\theta + \\cot\\theta)^2 \\equiv \\sec^2\\theta + \\csc^2\\theta$"
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q052",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "proof",
    "tags": ["identities", "proof", "fractions", "secant"],
    "questionText": "Prove that $\\dfrac{1}{\\sec\\theta - 1} + \\dfrac{1}{\\sec\\theta + 1} \\equiv 2\\cot\\theta\\csc\\theta$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Start with the left-hand side",
          "workingLatex": "\\text{LHS} = \\frac{1}{\\sec\\theta - 1} + \\frac{1}{\\sec\\theta + 1}",
          "explanation": "We add the two fractions first, which requires a common denominator.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Use the common denominator",
          "workingLatex": "= \\frac{(\\sec\\theta + 1) + (\\sec\\theta - 1)}{(\\sec\\theta - 1)(\\sec\\theta + 1)}",
          "explanation": "The common denominator is the product of the two denominators; the numerator sums the cross terms.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify the numerator",
          "workingLatex": "= \\frac{2\\sec\\theta}{(\\sec\\theta - 1)(\\sec\\theta + 1)}",
          "explanation": "The $+1$ and $-1$ cancel in the numerator, leaving $2\\sec\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Expand the denominator as a difference of squares",
          "workingLatex": "(\\sec\\theta - 1)(\\sec\\theta + 1) = \\sec^2\\theta - 1",
          "explanation": "The conjugate product gives a difference of squares.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply the Pythagorean identity",
          "workingLatex": "\\sec^2\\theta - 1 = \\tan^2\\theta",
          "explanation": "This difference is exactly $\\tan^2\\theta$, a key simplification.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Rewrite the fraction",
          "workingLatex": "= \\frac{2\\sec\\theta}{\\tan^2\\theta}",
          "explanation": "Substituting the denominator gives a single, cleaner fraction.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Convert to sine and cosine",
          "workingLatex": "= \\frac{2\\cdot\\frac{1}{\\cos\\theta}}{\\frac{\\sin^2\\theta}{\\cos^2\\theta}}",
          "explanation": "Writing secant and tangent in basic functions exposes how the cosines will combine.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Simplify the compound fraction",
          "workingLatex": "= \\frac{2}{\\cos\\theta}\\times\\frac{\\cos^2\\theta}{\\sin^2\\theta} = \\frac{2\\cos\\theta}{\\sin^2\\theta}",
          "explanation": "Multiplying by the reciprocal and cancelling one cosine leaves $\\frac{2\\cos\\theta}{\\sin^2\\theta}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Split into reciprocal functions",
          "workingLatex": "= 2\\cdot\\frac{\\cos\\theta}{\\sin\\theta}\\cdot\\frac{1}{\\sin\\theta} = 2\\cot\\theta\\csc\\theta",
          "explanation": "Separating the factors reveals cotangent (cosine over sine) times cosecant (one over sine), which is the right-hand side.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Conclude the proof",
          "workingLatex": "\\frac{1}{\\sec\\theta - 1} + \\frac{1}{\\sec\\theta + 1} \\equiv 2\\cot\\theta\\csc\\theta \\;\\blacksquare",
          "explanation": "The transformed left-hand side matches the right-hand side exactly.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{1}{\\sec\\theta - 1} + \\dfrac{1}{\\sec\\theta + 1} \\equiv 2\\cot\\theta\\csc\\theta$"
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q053",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "proof",
    "tags": ["identities", "proof", "secant", "tangent"],
    "questionText": "Prove that $\\sec^4\\theta - \\tan^4\\theta \\equiv \\sec^2\\theta + \\tan^2\\theta$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Start with the left-hand side",
          "workingLatex": "\\text{LHS} = \\sec^4\\theta - \\tan^4\\theta",
          "explanation": "The fourth powers form a difference of two squares if we view them as $(\\sec^2\\theta)^2 - (\\tan^2\\theta)^2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write as a difference of squares",
          "workingLatex": "= (\\sec^2\\theta)^2 - (\\tan^2\\theta)^2",
          "explanation": "Recognising the structure lets us factorise using $a^2 - b^2 = (a-b)(a+b)$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Factorise",
          "workingLatex": "= (\\sec^2\\theta - \\tan^2\\theta)(\\sec^2\\theta + \\tan^2\\theta)",
          "explanation": "Applying the difference-of-squares factorisation gives two brackets.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Recall the Pythagorean identity",
          "workingLatex": "\\sec^2\\theta = 1 + \\tan^2\\theta",
          "explanation": "This identity will simplify the first bracket dramatically.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the first bracket",
          "workingLatex": "\\sec^2\\theta - \\tan^2\\theta = (1 + \\tan^2\\theta) - \\tan^2\\theta = 1",
          "explanation": "The tangent-squared terms cancel, so the first bracket equals $1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute back",
          "workingLatex": "= 1\\cdot(\\sec^2\\theta + \\tan^2\\theta)",
          "explanation": "With the first bracket equal to $1$, only the second bracket survives.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclude the proof",
          "workingLatex": "= \\sec^2\\theta + \\tan^2\\theta = \\text{RHS} \\;\\blacksquare",
          "explanation": "This matches the right-hand side, completing the proof.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sec^4\\theta - \\tan^4\\theta \\equiv \\sec^2\\theta + \\tan^2\\theta$"
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q054",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "value",
    "tags": ["equations", "secant", "tangent", "quadratic"],
    "questionText": "Solve $2\\sec^2\\theta - \\tan\\theta - 3 = 0$ for $0^\\circ \\le \\theta < 360^\\circ$, giving answers to the nearest degree where necessary.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Replace secant squared using an identity",
          "workingLatex": "\\sec^2\\theta = 1 + \\tan^2\\theta",
          "explanation": "Converting to tangent gives a single-function quadratic equation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute into the equation",
          "workingLatex": "2(1 + \\tan^2\\theta) - \\tan\\theta - 3 = 0",
          "explanation": "The equation is now entirely in tangent.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand and simplify",
          "workingLatex": "2 + 2\\tan^2\\theta - \\tan\\theta - 3 = 0",
          "explanation": "Multiplying out the bracket prepares for collecting terms.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write in standard quadratic form",
          "workingLatex": "2\\tan^2\\theta - \\tan\\theta - 1 = 0",
          "explanation": "Combining the constants $2 - 3 = -1$ gives a tidy quadratic in $\\tan\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Factorise",
          "workingLatex": "(2\\tan\\theta + 1)(\\tan\\theta - 1) = 0",
          "explanation": "The factorisation checks out since the cross terms $2\\tan\\theta - \\tan\\theta = \\tan\\theta$ but with signs give $-\\tan\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve the first factor",
          "workingLatex": "\\tan\\theta = 1 \\;\\Rightarrow\\; \\theta = 45^\\circ, 225^\\circ",
          "explanation": "Tangent equals $1$ at $45^\\circ$ and one period later at $225^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve the second factor",
          "workingLatex": "\\tan\\theta = -\\tfrac{1}{2} \\;\\Rightarrow\\; \\theta \\approx 153.4^\\circ, 333.4^\\circ",
          "explanation": "The reference angle is $\\tan^{-1}\\frac{1}{2} \\approx 26.6^\\circ$; negative tangent gives quadrant II and IV solutions.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the solutions",
          "workingLatex": "\\theta = 45^\\circ, 153^\\circ, 225^\\circ, 333^\\circ",
          "explanation": "Combining both factors and rounding gives four solutions in the interval.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta \\approx 45^\\circ, 153^\\circ, 225^\\circ, 333^\\circ$"
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q055",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "proof",
    "tags": ["identities", "proof", "secant", "tangent"],
    "questionText": "Prove that $(\\sec\\theta - \\tan\\theta)^2 \\equiv \\dfrac{1 - \\sin\\theta}{1 + \\sin\\theta}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Start with the left-hand side",
          "workingLatex": "\\text{LHS} = (\\sec\\theta - \\tan\\theta)^2",
          "explanation": "We convert to sine and cosine and then square, aiming for the fractional form on the right.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rewrite inside the bracket",
          "workingLatex": "= \\left(\\frac{1}{\\cos\\theta} - \\frac{\\sin\\theta}{\\cos\\theta}\\right)^2",
          "explanation": "Both secant and tangent share the denominator cosine, making the subtraction straightforward.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Combine the bracket into one fraction",
          "workingLatex": "= \\left(\\frac{1 - \\sin\\theta}{\\cos\\theta}\\right)^2",
          "explanation": "Subtracting the numerators over the common denominator gives a single fraction inside the square.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Square the fraction",
          "workingLatex": "= \\frac{(1 - \\sin\\theta)^2}{\\cos^2\\theta}",
          "explanation": "Squaring applies to both numerator and denominator.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Replace cosine squared using the identity",
          "workingLatex": "\\cos^2\\theta = 1 - \\sin^2\\theta",
          "explanation": "Rewriting the denominator in terms of sine lets us factorise it against the numerator.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Factorise the denominator",
          "workingLatex": "1 - \\sin^2\\theta = (1 - \\sin\\theta)(1 + \\sin\\theta)",
          "explanation": "The denominator is a difference of squares, which factorises to reveal a common factor with the numerator.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Rewrite the whole fraction",
          "workingLatex": "= \\frac{(1 - \\sin\\theta)^2}{(1 - \\sin\\theta)(1 + \\sin\\theta)}",
          "explanation": "Now both numerator and denominator contain the factor $1 - \\sin\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Cancel the common factor",
          "workingLatex": "= \\frac{1 - \\sin\\theta}{1 + \\sin\\theta}",
          "explanation": "Cancelling one factor of $1 - \\sin\\theta$ from top and bottom leaves the target fraction.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conclude the proof",
          "workingLatex": "(\\sec\\theta - \\tan\\theta)^2 \\equiv \\frac{1 - \\sin\\theta}{1 + \\sin\\theta} \\;\\blacksquare",
          "explanation": "The left-hand side equals the right-hand side, so the identity is proved.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(\\sec\\theta - \\tan\\theta)^2 \\equiv \\dfrac{1 - \\sin\\theta}{1 + \\sin\\theta}$"
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q056",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "value",
    "tags": ["equations", "cotangent", "tangent", "double angle"],
    "questionText": "Solve $\\tan\\theta + \\cot\\theta = 2$ for $0^\\circ \\le \\theta < 360^\\circ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rewrite both terms in sine and cosine",
          "workingLatex": "\\frac{\\sin\\theta}{\\cos\\theta} + \\frac{\\cos\\theta}{\\sin\\theta} = 2",
          "explanation": "Converting to basic functions allows the two fractions to be combined over a common denominator.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Combine into a single fraction",
          "workingLatex": "\\frac{\\sin^2\\theta + \\cos^2\\theta}{\\sin\\theta\\cos\\theta} = 2",
          "explanation": "Adding over the common denominator produces the Pythagorean expression on top.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the Pythagorean identity",
          "workingLatex": "\\frac{1}{\\sin\\theta\\cos\\theta} = 2",
          "explanation": "Since $\\sin^2\\theta + \\cos^2\\theta = 1$, the numerator becomes $1$, greatly simplifying the equation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rearrange for the product",
          "workingLatex": "\\sin\\theta\\cos\\theta = \\frac{1}{2}",
          "explanation": "Taking reciprocals gives the product of sine and cosine equal to one half.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Use the double-angle identity",
          "workingLatex": "\\sin 2\\theta = 2\\sin\\theta\\cos\\theta",
          "explanation": "The double-angle formula lets us fold the product into a single sine, which is easy to solve.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute",
          "workingLatex": "\\sin 2\\theta = 2\\times\\frac{1}{2} = 1",
          "explanation": "Multiplying the product by $2$ gives $\\sin 2\\theta = 1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for the double angle",
          "workingLatex": "2\\theta = 90^\\circ, 450^\\circ",
          "explanation": "Since $\\theta$ ranges over $[0^\\circ,360^\\circ)$, the double angle $2\\theta$ ranges over $[0^\\circ,720^\\circ)$, where sine equals $1$ at $90^\\circ$ and $450^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Halve to find theta",
          "workingLatex": "\\theta = 45^\\circ, 225^\\circ",
          "explanation": "Dividing each value of $2\\theta$ by $2$ gives the solutions in the required interval.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta = 45^\\circ, 225^\\circ$"
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q057",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "proof",
    "tags": ["identities", "proof", "reciprocal trig"],
    "questionText": "Prove that $(\\sin\\theta + \\csc\\theta)^2 + (\\cos\\theta + \\sec\\theta)^2 \\equiv 7 + \\tan^2\\theta + \\cot^2\\theta$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Start with the left-hand side",
          "workingLatex": "\\text{LHS} = (\\sin\\theta + \\csc\\theta)^2 + (\\cos\\theta + \\sec\\theta)^2",
          "explanation": "We expand both squares and then gather the pieces carefully.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expand the first square",
          "workingLatex": "(\\sin\\theta + \\csc\\theta)^2 = \\sin^2\\theta + 2\\sin\\theta\\csc\\theta + \\csc^2\\theta",
          "explanation": "Using $(a+b)^2$ gives three terms; the middle one will simplify because sine and cosecant are reciprocals.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify the first middle term",
          "workingLatex": "2\\sin\\theta\\csc\\theta = 2\\sin\\theta\\cdot\\frac{1}{\\sin\\theta} = 2",
          "explanation": "Sine times cosecant is $1$, so the middle term is $2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Expand the second square",
          "workingLatex": "(\\cos\\theta + \\sec\\theta)^2 = \\cos^2\\theta + 2\\cos\\theta\\sec\\theta + \\sec^2\\theta",
          "explanation": "The same expansion applies, with cosine and secant as reciprocals in the middle term.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the second middle term",
          "workingLatex": "2\\cos\\theta\\sec\\theta = 2\\cos\\theta\\cdot\\frac{1}{\\cos\\theta} = 2",
          "explanation": "Cosine times secant is $1$, so this middle term is also $2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Add the two expansions",
          "workingLatex": "= \\sin^2\\theta + \\cos^2\\theta + \\csc^2\\theta + \\sec^2\\theta + 4",
          "explanation": "Collecting all terms, the two middle $2$s add to $4$, and the squared terms group together.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Apply the Pythagorean identity",
          "workingLatex": "\\sin^2\\theta + \\cos^2\\theta = 1",
          "explanation": "The sine-cosine pair collapses to $1$, trimming the expression.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Expand the reciprocal squares",
          "workingLatex": "\\csc^2\\theta = 1 + \\cot^2\\theta, \\quad \\sec^2\\theta = 1 + \\tan^2\\theta",
          "explanation": "Each reciprocal-squared term splits into $1$ plus a squared function via the Pythagorean identities.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Substitute everything",
          "workingLatex": "= 1 + (1 + \\cot^2\\theta) + (1 + \\tan^2\\theta) + 4",
          "explanation": "Replacing each piece assembles all the constants and the two squared functions.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Collect the constants",
          "workingLatex": "= 7 + \\tan^2\\theta + \\cot^2\\theta = \\text{RHS} \\;\\blacksquare",
          "explanation": "The constants $1 + 1 + 1 + 4$ total $7$, giving exactly the right-hand side and completing the proof.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(\\sin\\theta + \\csc\\theta)^2 + (\\cos\\theta + \\sec\\theta)^2 \\equiv 7 + \\tan^2\\theta + \\cot^2\\theta$"
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q058",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "proof",
    "tags": ["inverse trig", "proof", "arcsin", "arccos"],
    "questionText": "Prove that $\\arcsin x + \\arccos x = \\dfrac{\\pi}{2}$ for all $x$ with $-1 \\le x \\le 1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Name the arcsine angle",
          "workingLatex": "\\text{let } \\alpha = \\arcsin x, \\text{ so } \\sin\\alpha = x",
          "explanation": "Naming the arcsine gives an angle $\\alpha$ whose sine is $x$, which is the key relationship to exploit.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the range of alpha",
          "workingLatex": "-\\frac{\\pi}{2} \\le \\alpha \\le \\frac{\\pi}{2}",
          "explanation": "Arcsine always returns an angle in this principal range, which we will need to check the final angle is valid.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use the cofunction identity",
          "workingLatex": "\\sin\\alpha = \\cos\\left(\\frac{\\pi}{2} - \\alpha\\right)",
          "explanation": "The cofunction identity converts a sine into a cosine of the complementary angle, linking the problem to arccosine.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the value of sine",
          "workingLatex": "\\cos\\left(\\frac{\\pi}{2} - \\alpha\\right) = x",
          "explanation": "Since $\\sin\\alpha = x$, the complementary cosine also equals $x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check the complementary angle lies in the arccos range",
          "workingLatex": "-\\frac{\\pi}{2} \\le \\alpha \\le \\frac{\\pi}{2} \\;\\Rightarrow\\; 0 \\le \\frac{\\pi}{2} - \\alpha \\le \\pi",
          "explanation": "Subtracting the bounds shows $\\frac{\\pi}{2} - \\alpha$ lies in $[0,\\pi]$, exactly the range where arccosine is defined and single-valued.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply arccosine",
          "workingLatex": "\\arccos x = \\frac{\\pi}{2} - \\alpha",
          "explanation": "Because the complementary angle is in the valid range and has cosine $x$, it must be $\\arccos x$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute back for alpha",
          "workingLatex": "\\arccos x = \\frac{\\pi}{2} - \\arcsin x",
          "explanation": "Replacing $\\alpha$ with its definition rewrites the relationship in terms of the two inverse functions.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Rearrange to conclude",
          "workingLatex": "\\arcsin x + \\arccos x = \\frac{\\pi}{2} \\;\\blacksquare",
          "explanation": "Adding $\\arcsin x$ to both sides gives the required identity, valid for all $x$ in $[-1,1]$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\arcsin x + \\arccos x = \\dfrac{\\pi}{2}$"
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q059",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": ["equations", "secant", "cosecant", "tangent"],
    "questionText": "Solve $\\sec\\theta = 2\\csc\\theta$ for $0^\\circ \\le \\theta < 360^\\circ$, giving answers to the nearest degree.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rewrite both sides in sine and cosine",
          "workingLatex": "\\frac{1}{\\cos\\theta} = \\frac{2}{\\sin\\theta}",
          "explanation": "Converting the reciprocal functions makes it possible to cross-multiply and reach a tangent equation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Cross-multiply",
          "workingLatex": "\\sin\\theta = 2\\cos\\theta",
          "explanation": "Multiplying both sides by $\\sin\\theta\\cos\\theta$ clears the fractions.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Divide by cosine to form a tangent",
          "workingLatex": "\\frac{\\sin\\theta}{\\cos\\theta} = 2 \\;\\Rightarrow\\; \\tan\\theta = 2",
          "explanation": "Dividing by $\\cos\\theta$ turns the equation into a simple tangent equation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the principal value",
          "workingLatex": "\\theta = \\tan^{-1}(2) \\approx 63.4^\\circ",
          "explanation": "The inverse tangent of $2$ gives the first-quadrant solution, about $63.4^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Use the period of tangent",
          "workingLatex": "\\theta = 63.4^\\circ + 180^\\circ = 243.4^\\circ",
          "explanation": "Tangent repeats every $180^\\circ$, giving a second solution in the third quadrant.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check both keep the functions defined",
          "workingLatex": "\\sin\\theta \\ne 0, \\cos\\theta \\ne 0 \\;\\checkmark",
          "explanation": "Neither solution makes sine or cosine zero, so both secant and cosecant are defined and the solutions are valid.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the solutions",
          "workingLatex": "\\theta \\approx 63^\\circ, 243^\\circ",
          "explanation": "Rounding gives the two solutions in the required interval.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta \\approx 63^\\circ, 243^\\circ$"
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q060",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "proof",
    "tags": ["identities", "proof", "cosecant", "cotangent"],
    "questionText": "Prove that $(1 + \\cot\\theta)^2 + (1 - \\cot\\theta)^2 \\equiv 2\\csc^2\\theta$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Start with the left-hand side",
          "workingLatex": "\\text{LHS} = (1 + \\cot\\theta)^2 + (1 - \\cot\\theta)^2",
          "explanation": "We expand both squares; the cross terms should cancel, which is the point of this structure.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expand the first square",
          "workingLatex": "(1 + \\cot\\theta)^2 = 1 + 2\\cot\\theta + \\cot^2\\theta",
          "explanation": "The first bracket expands with a positive cross term $+2\\cot\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand the second square",
          "workingLatex": "(1 - \\cot\\theta)^2 = 1 - 2\\cot\\theta + \\cot^2\\theta",
          "explanation": "The second bracket expands with a negative cross term $-2\\cot\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add the two expansions",
          "workingLatex": "= 1 + 2\\cot\\theta + \\cot^2\\theta + 1 - 2\\cot\\theta + \\cot^2\\theta",
          "explanation": "Writing both out side by side shows the cross terms are equal and opposite.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Cancel the cross terms and collect",
          "workingLatex": "= 2 + 2\\cot^2\\theta",
          "explanation": "The $+2\\cot\\theta$ and $-2\\cot\\theta$ cancel, leaving a constant and a cotangent-squared term.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Factor out the common factor of two",
          "workingLatex": "= 2(1 + \\cot^2\\theta)",
          "explanation": "Taking out $2$ prepares the bracket to be replaced by a Pythagorean identity.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Apply the identity and conclude",
          "workingLatex": "= 2\\csc^2\\theta = \\text{RHS} \\;\\blacksquare",
          "explanation": "Since $1 + \\cot^2\\theta = \\csc^2\\theta$, the expression becomes $2\\csc^2\\theta$, matching the right-hand side.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(1 + \\cot\\theta)^2 + (1 - \\cot\\theta)^2 \\equiv 2\\csc^2\\theta$"
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q061",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "value",
    "tags": ["equations", "secant", "tangent", "conjugate"],
    "questionText": "Solve $\\sec\\theta + \\tan\\theta = 3$ for $0^\\circ \\le \\theta < 360^\\circ$, giving answers to the nearest degree. You must check each candidate.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the conjugate identity",
          "workingLatex": "\\sec^2\\theta - \\tan^2\\theta = 1",
          "explanation": "The difference of squares of secant and tangent is always $1$, which lets us pair the given equation with a partner equation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Factor the identity",
          "workingLatex": "(\\sec\\theta - \\tan\\theta)(\\sec\\theta + \\tan\\theta) = 1",
          "explanation": "Factorising the difference of squares links the sum we are given to the corresponding difference.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the given sum",
          "workingLatex": "(\\sec\\theta - \\tan\\theta)\\times 3 = 1",
          "explanation": "Replacing $\\sec\\theta + \\tan\\theta$ with $3$ turns the identity into an equation for the difference.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for the difference",
          "workingLatex": "\\sec\\theta - \\tan\\theta = \\frac{1}{3}",
          "explanation": "Dividing by $3$ gives the value of the conjugate expression.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Add the sum and difference equations",
          "workingLatex": "2\\sec\\theta = 3 + \\frac{1}{3} = \\frac{10}{3}",
          "explanation": "Adding the two equations eliminates tangent, leaving an equation in secant alone.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for secant then cosine",
          "workingLatex": "\\sec\\theta = \\frac{5}{3} \\;\\Rightarrow\\; \\cos\\theta = \\frac{3}{5}",
          "explanation": "Halving gives secant, and its reciprocal gives cosine equal to $\\frac{3}{5}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the candidate angles",
          "workingLatex": "\\theta \\approx 53.1^\\circ \\text{ or } 306.9^\\circ",
          "explanation": "Positive cosine $\\frac{3}{5}$ gives one solution in quadrant I and one in quadrant IV.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check the first candidate",
          "workingLatex": "\\theta = 53.1^\\circ: \\; \\sec\\theta + \\tan\\theta = \\tfrac{5}{3} + \\tfrac{4}{3} = 3 \\;\\checkmark",
          "explanation": "In quadrant I tangent is positive, so the sum is $3$, matching the equation. This candidate is valid.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check the second candidate",
          "workingLatex": "\\theta = 306.9^\\circ: \\; \\sec\\theta + \\tan\\theta = \\tfrac{5}{3} - \\tfrac{4}{3} = \\tfrac{1}{3} \\ne 3",
          "explanation": "In quadrant IV tangent is negative, so the sum is only $\\frac{1}{3}$. Squaring-type manipulations introduced this false root, so we reject it.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the solution",
          "workingLatex": "\\theta \\approx 53^\\circ",
          "explanation": "Only the first candidate satisfies the original equation, so it is the sole solution.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta \\approx 53^\\circ$"
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q062",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "value",
    "tags": ["given ratio", "secant", "cotangent", "quadrant"],
    "questionText": "Given that $\\csc\\theta = -2$ and $180^\\circ < \\theta < 270^\\circ$, find the exact values of $\\sec\\theta$ and $\\cot\\theta$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find sine from cosecant",
          "workingLatex": "\\sin\\theta = \\frac{1}{\\csc\\theta} = -\\frac{1}{2}",
          "explanation": "Sine is the reciprocal of cosecant, so $\\sin\\theta = -\\frac{1}{2}$; the negative sign fits the third quadrant.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the quadrant signs",
          "workingLatex": "180^\\circ < \\theta < 270^\\circ \\;\\Rightarrow\\; \\sin < 0, \\cos < 0",
          "explanation": "In the third quadrant both sine and cosine are negative, which will determine the sign of every value we compute.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use the Pythagorean identity for cosine",
          "workingLatex": "\\cos^2\\theta = 1 - \\sin^2\\theta = 1 - \\frac{1}{4}",
          "explanation": "We find cosine from sine using the fundamental identity.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify cosine squared",
          "workingLatex": "\\cos^2\\theta = \\frac{3}{4}",
          "explanation": "Subtracting gives $\\frac{3}{4}$ for cosine squared.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Take the root with the correct sign",
          "workingLatex": "\\cos\\theta = -\\frac{\\sqrt{3}}{2}",
          "explanation": "The root is $\\frac{\\sqrt3}{2}$, and the third quadrant forces the negative sign.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find secant",
          "workingLatex": "\\sec\\theta = \\frac{1}{\\cos\\theta} = -\\frac{2}{\\sqrt{3}} = -\\frac{2\\sqrt{3}}{3}",
          "explanation": "Secant is the reciprocal of cosine; rationalising gives $-\\frac{2\\sqrt3}{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find cotangent",
          "workingLatex": "\\cot\\theta = \\frac{\\cos\\theta}{\\sin\\theta} = \\frac{-\\frac{\\sqrt3}{2}}{-\\frac{1}{2}} = \\sqrt{3}",
          "explanation": "Cotangent is cosine over sine; the two negatives cancel, giving a positive $\\sqrt{3}$, consistent with the third quadrant where cotangent is positive.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the results",
          "workingLatex": "\\sec\\theta = -\\frac{2\\sqrt{3}}{3}, \\quad \\cot\\theta = \\sqrt{3}",
          "explanation": "These are the exact values, with signs matching the third-quadrant position.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sec\\theta = -\\dfrac{2\\sqrt{3}}{3}, \\quad \\cot\\theta = \\sqrt{3}$"
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q063",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "value",
    "tags": ["equations", "cotangent", "cosecant", "quadratic"],
    "questionText": "Solve $\\cot^2\\theta - \\csc\\theta = 1$ for $0^\\circ \\le \\theta < 360^\\circ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Replace cotangent squared using an identity",
          "workingLatex": "\\cot^2\\theta = \\csc^2\\theta - 1",
          "explanation": "Converting cotangent squared into cosecant terms produces an equation in one function.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute into the equation",
          "workingLatex": "\\csc^2\\theta - 1 - \\csc\\theta = 1",
          "explanation": "The equation is now entirely in cosecant.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange to standard quadratic form",
          "workingLatex": "\\csc^2\\theta - \\csc\\theta - 2 = 0",
          "explanation": "Collecting terms gives a quadratic in $\\csc\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Factorise",
          "workingLatex": "(\\csc\\theta - 2)(\\csc\\theta + 1) = 0",
          "explanation": "The factors of $-2$ that add to $-1$ are $-2$ and $+1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve the first case",
          "workingLatex": "\\csc\\theta = 2 \\;\\Rightarrow\\; \\sin\\theta = \\tfrac{1}{2} \\;\\Rightarrow\\; \\theta = 30^\\circ, 150^\\circ",
          "explanation": "Cosecant $2$ gives sine one half, with solutions in quadrants I and II.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve the second case",
          "workingLatex": "\\csc\\theta = -1 \\;\\Rightarrow\\; \\sin\\theta = -1 \\;\\Rightarrow\\; \\theta = 270^\\circ",
          "explanation": "Cosecant $-1$ gives sine $-1$, which occurs only at $270^\\circ$; note this is allowed since $|{-1}| \\ge 1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Collect all solutions",
          "workingLatex": "\\theta = 30^\\circ, 150^\\circ, 270^\\circ",
          "explanation": "Combining both cases gives three solutions in the interval.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify the tricky solution",
          "workingLatex": "\\theta = 270^\\circ: \\cot^2\\theta - \\csc\\theta = 0 - (-1) = 1 \\;\\checkmark",
          "explanation": "At $270^\\circ$, cotangent is $0$ and cosecant is $-1$, so the left side is $1$, confirming the solution.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta = 30^\\circ, 150^\\circ, 270^\\circ$"
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
    "answerType": "value",
    "tags": ["inverse trig", "equation", "arccos"],
    "questionText": "Solve $2\\arccos x = \\dfrac{\\pi}{3}$ for $x$, giving your answer in exact form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Isolate the inverse function",
          "workingLatex": "\\arccos x = \\frac{\\pi}{6}",
          "explanation": "Dividing both sides by $2$ leaves a single arccosine equal to a known angle.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply cosine to both sides",
          "workingLatex": "x = \\cos\\frac{\\pi}{6}",
          "explanation": "Taking the cosine of both sides undoes the arccosine, isolating $x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate the cosine",
          "workingLatex": "\\cos\\frac{\\pi}{6} = \\frac{\\sqrt{3}}{2}",
          "explanation": "This is the standard exact value for the cosine of $30^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State x",
          "workingLatex": "x = \\frac{\\sqrt{3}}{2}",
          "explanation": "So the value of $x$ is $\\frac{\\sqrt3}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check the domain and range",
          "workingLatex": "-1 \\le \\tfrac{\\sqrt3}{2} \\le 1, \\quad \\tfrac{\\pi}{6} \\in [0,\\pi]",
          "explanation": "The value lies in the domain of arccosine and the angle $\\frac{\\pi}{6}$ is in its range, so the solution is valid.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the final answer",
          "workingLatex": "x = \\frac{\\sqrt{3}}{2}",
          "explanation": "This is the exact solution.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = \\dfrac{\\sqrt{3}}{2}$"
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q065",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "proof",
    "tags": ["identities", "proof", "fractions", "cosecant"],
    "questionText": "Prove that $\\dfrac{\\sec\\theta + \\csc\\theta}{1 + \\tan\\theta} \\equiv \\csc\\theta$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rewrite the numerator in sine and cosine",
          "workingLatex": "\\sec\\theta + \\csc\\theta = \\frac{1}{\\cos\\theta} + \\frac{1}{\\sin\\theta}",
          "explanation": "Converting the reciprocal functions is the first step towards combining the fraction.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Combine the numerator over a common denominator",
          "workingLatex": "= \\frac{\\sin\\theta + \\cos\\theta}{\\sin\\theta\\cos\\theta}",
          "explanation": "Adding the two fractions gives a single numerator $\\sin\\theta + \\cos\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite the denominator of the main fraction",
          "workingLatex": "1 + \\tan\\theta = 1 + \\frac{\\sin\\theta}{\\cos\\theta} = \\frac{\\cos\\theta + \\sin\\theta}{\\cos\\theta}",
          "explanation": "Expressing the denominator over cosine reveals the same $\\sin\\theta + \\cos\\theta$ factor that appears in the numerator.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the whole expression as a division",
          "workingLatex": "\\frac{\\sec\\theta + \\csc\\theta}{1 + \\tan\\theta} = \\frac{\\;\\frac{\\sin\\theta + \\cos\\theta}{\\sin\\theta\\cos\\theta}\\;}{\\;\\frac{\\cos\\theta + \\sin\\theta}{\\cos\\theta}\\;}",
          "explanation": "Substituting both rewritten parts sets up a division of two fractions.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Divide by multiplying by the reciprocal",
          "workingLatex": "= \\frac{\\sin\\theta + \\cos\\theta}{\\sin\\theta\\cos\\theta}\\times\\frac{\\cos\\theta}{\\cos\\theta + \\sin\\theta}",
          "explanation": "Dividing by a fraction means multiplying by its reciprocal.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Cancel the common sum factor",
          "workingLatex": "= \\frac{\\cos\\theta}{\\sin\\theta\\cos\\theta}",
          "explanation": "Since $\\sin\\theta + \\cos\\theta = \\cos\\theta + \\sin\\theta$, that factor cancels top and bottom.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Cancel the cosine",
          "workingLatex": "= \\frac{1}{\\sin\\theta}",
          "explanation": "The remaining cosine cancels, leaving one over sine.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Recognise the reciprocal and conclude",
          "workingLatex": "= \\csc\\theta = \\text{RHS} \\;\\blacksquare",
          "explanation": "One over sine is cosecant, matching the right-hand side and completing the proof.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{\\sec\\theta + \\csc\\theta}{1 + \\tan\\theta} \\equiv \\csc\\theta$"
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q066",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "value",
    "tags": ["equations", "secant", "tangent", "quadratic"],
    "questionText": "Solve $\\sec^2\\theta + \\tan\\theta = 3$ for $0^\\circ \\le \\theta < 360^\\circ$, giving answers to the nearest degree where necessary.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Replace secant squared using an identity",
          "workingLatex": "\\sec^2\\theta = 1 + \\tan^2\\theta",
          "explanation": "This converts the equation into one purely in tangent.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute into the equation",
          "workingLatex": "1 + \\tan^2\\theta + \\tan\\theta = 3",
          "explanation": "The equation is now in tangent only.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange to standard form",
          "workingLatex": "\\tan^2\\theta + \\tan\\theta - 2 = 0",
          "explanation": "Moving all terms to one side gives a quadratic in $\\tan\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Factorise",
          "workingLatex": "(\\tan\\theta + 2)(\\tan\\theta - 1) = 0",
          "explanation": "The factors of $-2$ that add to $+1$ are $+2$ and $-1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve the first factor",
          "workingLatex": "\\tan\\theta = 1 \\;\\Rightarrow\\; \\theta = 45^\\circ, 225^\\circ",
          "explanation": "Tangent equals $1$ at $45^\\circ$ and one period later at $225^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve the second factor",
          "workingLatex": "\\tan\\theta = -2 \\;\\Rightarrow\\; \\theta \\approx 116.6^\\circ, 296.6^\\circ",
          "explanation": "The reference angle is $\\tan^{-1}2 \\approx 63.4^\\circ$; negative tangent gives quadrant II and IV solutions.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Collect and round the solutions",
          "workingLatex": "\\theta = 45^\\circ, 117^\\circ, 225^\\circ, 297^\\circ",
          "explanation": "Combining both factors and rounding gives four solutions in the interval.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Confirm the interval",
          "workingLatex": "\\text{all} \\in [0^\\circ, 360^\\circ) \\;\\checkmark",
          "explanation": "Every solution lies within the required range.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta \\approx 45^\\circ, 117^\\circ, 225^\\circ, 297^\\circ$"
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q067",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "value",
    "tags": ["given ratio", "secant", "cosecant", "surds"],
    "questionText": "Given that $\\tan\\theta = -2$ and $90^\\circ < \\theta < 180^\\circ$, find the exact values of $\\sec\\theta$ and $\\csc\\theta$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the identity linking tangent and secant",
          "workingLatex": "\\sec^2\\theta = 1 + \\tan^2\\theta",
          "explanation": "This identity gives secant directly from the given tangent.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute the tangent",
          "workingLatex": "\\sec^2\\theta = 1 + (-2)^2 = 1 + 4 = 5",
          "explanation": "Squaring $-2$ gives $4$; adding $1$ yields $5$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Take the square root",
          "workingLatex": "\\sec\\theta = \\pm\\sqrt{5}",
          "explanation": "Square-rooting gives $\\pm\\sqrt5$, with the sign still to be fixed.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Choose the sign using the quadrant",
          "workingLatex": "90^\\circ < \\theta < 180^\\circ \\;\\Rightarrow\\; \\cos < 0 \\;\\Rightarrow\\; \\sec\\theta = -\\sqrt{5}",
          "explanation": "In the second quadrant cosine is negative, so secant is negative, selecting $-\\sqrt5$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find cosine",
          "workingLatex": "\\cos\\theta = \\frac{1}{\\sec\\theta} = -\\frac{1}{\\sqrt{5}}",
          "explanation": "Cosine is the reciprocal of secant.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find sine using tangent times cosine",
          "workingLatex": "\\sin\\theta = \\tan\\theta\\cos\\theta = (-2)\\left(-\\frac{1}{\\sqrt5}\\right) = \\frac{2}{\\sqrt{5}}",
          "explanation": "Since $\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta}$, multiplying tangent by cosine recovers sine; the result is positive, correct for quadrant II.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find cosecant",
          "workingLatex": "\\csc\\theta = \\frac{1}{\\sin\\theta} = \\frac{\\sqrt{5}}{2}",
          "explanation": "Cosecant is the reciprocal of sine, giving $\\frac{\\sqrt5}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the results",
          "workingLatex": "\\sec\\theta = -\\sqrt{5}, \\quad \\csc\\theta = \\frac{\\sqrt{5}}{2}",
          "explanation": "These are the exact values; secant is negative and cosecant positive, matching the second quadrant.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sec\\theta = -\\sqrt{5}, \\quad \\csc\\theta = \\dfrac{\\sqrt{5}}{2}$"
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q068",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "proof",
    "tags": ["identities", "proof", "cosecant", "cotangent"],
    "questionText": "Prove that $\\dfrac{\\csc\\theta}{\\cot\\theta + \\tan\\theta} \\equiv \\cos\\theta$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rewrite the denominator in sine and cosine",
          "workingLatex": "\\cot\\theta + \\tan\\theta = \\frac{\\cos\\theta}{\\sin\\theta} + \\frac{\\sin\\theta}{\\cos\\theta}",
          "explanation": "Converting to basic functions lets us combine the denominator into a single fraction.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Combine over a common denominator",
          "workingLatex": "= \\frac{\\cos^2\\theta + \\sin^2\\theta}{\\sin\\theta\\cos\\theta}",
          "explanation": "Adding the fractions produces the Pythagorean expression on top.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the Pythagorean identity",
          "workingLatex": "= \\frac{1}{\\sin\\theta\\cos\\theta}",
          "explanation": "Since $\\cos^2\\theta + \\sin^2\\theta = 1$, the denominator simplifies to $\\frac{1}{\\sin\\theta\\cos\\theta}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the whole expression",
          "workingLatex": "\\frac{\\csc\\theta}{\\cot\\theta + \\tan\\theta} = \\frac{\\csc\\theta}{\\;\\frac{1}{\\sin\\theta\\cos\\theta}\\;}",
          "explanation": "Substituting the simplified denominator sets up a division by a fraction.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Divide by multiplying by the reciprocal",
          "workingLatex": "= \\csc\\theta\\times\\sin\\theta\\cos\\theta",
          "explanation": "Dividing by $\\frac{1}{\\sin\\theta\\cos\\theta}$ is multiplying by $\\sin\\theta\\cos\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Rewrite cosecant",
          "workingLatex": "= \\frac{1}{\\sin\\theta}\\times\\sin\\theta\\cos\\theta",
          "explanation": "Replacing cosecant with one over sine exposes the cancellation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Cancel the sine and conclude",
          "workingLatex": "= \\cos\\theta = \\text{RHS} \\;\\blacksquare",
          "explanation": "The sine terms cancel, leaving cosine, which matches the right-hand side and completes the proof.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{\\csc\\theta}{\\cot\\theta + \\tan\\theta} \\equiv \\cos\\theta$"
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q069",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "value",
    "tags": ["equations", "cotangent", "factorising", "solving"],
    "questionText": "Solve $2\\cos\\theta = \\cot\\theta$ for $0^\\circ \\le \\theta < 360^\\circ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rewrite cotangent in sine and cosine",
          "workingLatex": "2\\cos\\theta = \\frac{\\cos\\theta}{\\sin\\theta}",
          "explanation": "Expressing cotangent in basic functions lets us clear the fraction carefully without dividing away solutions.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Multiply both sides by sine",
          "workingLatex": "2\\cos\\theta\\sin\\theta = \\cos\\theta",
          "explanation": "Multiplying by $\\sin\\theta$ removes the denominator; this is valid since cotangent requires $\\sin\\theta \\ne 0$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Move everything to one side",
          "workingLatex": "2\\cos\\theta\\sin\\theta - \\cos\\theta = 0",
          "explanation": "Rearranging prepares the equation for factorising, rather than dividing by cosine (which could lose solutions).",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Factor out cosine",
          "workingLatex": "\\cos\\theta(2\\sin\\theta - 1) = 0",
          "explanation": "Taking out the common factor $\\cos\\theta$ splits the problem into two independent cases.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve the first factor",
          "workingLatex": "\\cos\\theta = 0 \\;\\Rightarrow\\; \\theta = 90^\\circ, 270^\\circ",
          "explanation": "Cosine is zero at $90^\\circ$ and $270^\\circ$; both keep sine nonzero, so cotangent is defined.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve the second factor",
          "workingLatex": "2\\sin\\theta - 1 = 0 \\;\\Rightarrow\\; \\sin\\theta = \\tfrac{1}{2}",
          "explanation": "Setting the bracket to zero gives sine equal to one half.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find those angles",
          "workingLatex": "\\theta = 30^\\circ, 150^\\circ",
          "explanation": "Sine one half occurs at $30^\\circ$ and $150^\\circ$ in the interval.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Collect all solutions",
          "workingLatex": "\\theta = 30^\\circ, 90^\\circ, 150^\\circ, 270^\\circ",
          "explanation": "Combining both cases gives four solutions; factoring rather than dividing ensured the $\\cos\\theta = 0$ solutions were not lost.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify a cosine-zero solution",
          "workingLatex": "\\theta = 90^\\circ: 2\\cos 90^\\circ = 0, \\; \\cot 90^\\circ = 0 \\;\\checkmark",
          "explanation": "At $90^\\circ$ both sides are $0$, confirming these easily-missed solutions are genuine.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta = 30^\\circ, 90^\\circ, 150^\\circ, 270^\\circ$"
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q070",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "proof",
    "tags": ["identities", "proof", "cosecant", "cotangent"],
    "questionText": "Prove that $\\dfrac{\\sin\\theta}{1 - \\cos\\theta} \\equiv \\csc\\theta + \\cot\\theta$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Start with the left-hand side",
          "workingLatex": "\\text{LHS} = \\frac{\\sin\\theta}{1 - \\cos\\theta}",
          "explanation": "The denominator $1 - \\cos\\theta$ suggests multiplying by the conjugate $1 + \\cos\\theta$ to create a difference of squares.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Multiply top and bottom by the conjugate",
          "workingLatex": "= \\frac{\\sin\\theta}{1 - \\cos\\theta}\\times\\frac{1 + \\cos\\theta}{1 + \\cos\\theta}",
          "explanation": "Multiplying by $\\frac{1 + \\cos\\theta}{1 + \\cos\\theta}$ equals multiplying by $1$ and will simplify the denominator.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand the denominator",
          "workingLatex": "(1 - \\cos\\theta)(1 + \\cos\\theta) = 1 - \\cos^2\\theta",
          "explanation": "The conjugate product is a difference of squares.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the Pythagorean identity",
          "workingLatex": "1 - \\cos^2\\theta = \\sin^2\\theta",
          "explanation": "The denominator becomes $\\sin^2\\theta$, which will cancel against the sine on top.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rewrite the fraction",
          "workingLatex": "= \\frac{\\sin\\theta(1 + \\cos\\theta)}{\\sin^2\\theta}",
          "explanation": "The numerator is $\\sin\\theta(1 + \\cos\\theta)$ and the denominator is $\\sin^2\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Cancel one factor of sine",
          "workingLatex": "= \\frac{1 + \\cos\\theta}{\\sin\\theta}",
          "explanation": "Cancelling a common sine leaves a single sine in the denominator.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Split the fraction",
          "workingLatex": "= \\frac{1}{\\sin\\theta} + \\frac{\\cos\\theta}{\\sin\\theta}",
          "explanation": "Separating the numerator into two fractions exposes the two reciprocal functions.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Recognise the functions and conclude",
          "workingLatex": "= \\csc\\theta + \\cot\\theta = \\text{RHS} \\;\\blacksquare",
          "explanation": "One over sine is cosecant and cosine over sine is cotangent, giving exactly the right-hand side and completing the proof.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{\\sin\\theta}{1 - \\cos\\theta} \\equiv \\csc\\theta + \\cot\\theta$"
    }
  }
];
