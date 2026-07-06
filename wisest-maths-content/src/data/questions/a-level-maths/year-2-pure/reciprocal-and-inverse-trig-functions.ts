import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q001",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "tags": [
      "reciprocal trig",
      "definitions",
      "cot"
    ],
    "questionText": "Write down the definitions of the three reciprocal trigonometric functions $\\sec\\theta$, $\\operatorname{cosec}\\theta$ and $\\cot\\theta$ in terms of $\\cos\\theta$, $\\sin\\theta$ and $\\tan\\theta$. Give also the alternative form of $\\cot\\theta$ in terms of $\\sin\\theta$ and $\\cos\\theta$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the definition of secant",
          "workingLatex": "\\sec\\theta = \\frac{1}{\\cos\\theta}",
          "explanation": "Secant is the reciprocal of cosine. A helpful memory aid is that the third letter of $\\sec$ is the 'c' of $\\cos$, telling us which ratio it pairs with.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the definition of cosecant",
          "workingLatex": "\\operatorname{cosec}\\theta = \\frac{1}{\\sin\\theta}",
          "explanation": "Cosecant is the reciprocal of sine. The third letter of $\\operatorname{cosec}$ is the 's' of $\\sin$, so it pairs with the sine ratio.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the definition of cotangent",
          "workingLatex": "\\cot\\theta = \\frac{1}{\\tan\\theta}",
          "explanation": "Cotangent is the reciprocal of tangent, matching the pattern of the other two: the 't' of $\\cot$ pairs it with $\\tan$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rewrite cot using sine and cosine",
          "workingLatex": "\\cot\\theta = \\frac{1}{\\tan\\theta} = \\frac{1}{\\tfrac{\\sin\\theta}{\\cos\\theta}} = \\frac{\\cos\\theta}{\\sin\\theta}",
          "explanation": "Because $\\tan\\theta=\\tfrac{\\sin\\theta}{\\cos\\theta}$, taking its reciprocal simply flips the fraction. This gives the very useful second form $\\cot\\theta=\\tfrac{\\cos\\theta}{\\sin\\theta}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Summarise the pairing",
          "workingLatex": "\\sec\\theta \\leftrightarrow \\cos\\theta, \\quad \\operatorname{cosec}\\theta \\leftrightarrow \\sin\\theta, \\quad \\cot\\theta \\leftrightarrow \\tan\\theta",
          "explanation": "Grouping the three reciprocal relationships together makes the structure clear: each new function is just one divided by an old one.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Note where each is undefined",
          "workingLatex": "\\cos\\theta = 0 \\Rightarrow \\sec\\theta \\text{ undefined}; \\quad \\sin\\theta = 0 \\Rightarrow \\operatorname{cosec}\\theta, \\ \\cot\\theta \\text{ undefined}",
          "explanation": "A reciprocal is undefined wherever its denominator is zero. So $\\sec\\theta$ fails when $\\cos\\theta=0$, while $\\operatorname{cosec}\\theta$ and $\\cot\\theta$ fail when $\\sin\\theta=0$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the collected definitions",
          "workingLatex": "\\sec\\theta = \\frac{1}{\\cos\\theta}, \\quad \\operatorname{cosec}\\theta = \\frac{1}{\\sin\\theta}, \\quad \\cot\\theta = \\frac{1}{\\tan\\theta} = \\frac{\\cos\\theta}{\\sin\\theta}",
          "explanation": "These are the definitions to memorise; every later result about reciprocal trig functions is built directly from them.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sec\\theta=\\dfrac{1}{\\cos\\theta}$, $\\operatorname{cosec}\\theta=\\dfrac{1}{\\sin\\theta}$, and $\\cot\\theta=\\dfrac{1}{\\tan\\theta}=\\dfrac{\\cos\\theta}{\\sin\\theta}$."
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
    "answerType": "exact",
    "tags": [
      "reciprocal trig",
      "sec",
      "exact values",
      "degrees"
    ],
    "questionText": "Find the exact value of $\\sec 60^\\circ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the definition of secant",
          "workingLatex": "\\sec\\theta = \\frac{1}{\\cos\\theta}",
          "explanation": "There is no separate 'sec button' in the exact-value work; we always convert $\\sec$ back to a cosine and evaluate that instead.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply the definition at 60 degrees",
          "workingLatex": "\\sec 60^\\circ = \\frac{1}{\\cos 60^\\circ}",
          "explanation": "Substituting $\\theta=60^\\circ$ turns the problem into finding one over $\\cos 60^\\circ$, a standard exact value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall the exact value of cos 60",
          "workingLatex": "\\cos 60^\\circ = \\frac{1}{2}",
          "explanation": "The angle $60^\\circ$ comes from the half of an equilateral triangle, one of the two standard triangles, giving $\\cos 60^\\circ=\\tfrac12$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the cosine value",
          "workingLatex": "\\sec 60^\\circ = \\frac{1}{\\tfrac{1}{2}}",
          "explanation": "Replacing $\\cos 60^\\circ$ by $\\tfrac12$ leaves a single division: one divided by a half.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the reciprocal of a fraction",
          "workingLatex": "\\frac{1}{\\tfrac{1}{2}} = 1 \\times \\frac{2}{1} = 2",
          "explanation": "Dividing by a fraction means multiplying by its reciprocal, so dividing by $\\tfrac12$ is the same as multiplying by $2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Sanity check the size",
          "workingLatex": "|\\cos 60^\\circ| \\le 1 \\Rightarrow |\\sec 60^\\circ| \\ge 1 \\; \\checkmark",
          "explanation": "Since a cosine never exceeds $1$ in size, its reciprocal can never be smaller than $1$ in size. A value of $2$ is comfortably consistent with this.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the exact value",
          "workingLatex": "\\sec 60^\\circ = 2",
          "explanation": "This is an exact result, not a rounded decimal, which is exactly what the question asks for.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sec 60^\\circ = 2$."
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
    "answerType": "exact",
    "tags": [
      "reciprocal trig",
      "cosec",
      "exact values",
      "degrees"
    ],
    "questionText": "Find the exact value of $\\operatorname{cosec} 30^\\circ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the definition of cosecant",
          "workingLatex": "\\operatorname{cosec}\\theta = \\frac{1}{\\sin\\theta}",
          "explanation": "Cosecant is the reciprocal of sine, so we evaluate it by first finding the relevant sine value.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply the definition at 30 degrees",
          "workingLatex": "\\operatorname{cosec} 30^\\circ = \\frac{1}{\\sin 30^\\circ}",
          "explanation": "Substituting $\\theta=30^\\circ$ reduces the task to finding one over $\\sin 30^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall the exact value of sin 30",
          "workingLatex": "\\sin 30^\\circ = \\frac{1}{2}",
          "explanation": "From the half-equilateral triangle, the side opposite $30^\\circ$ is half the hypotenuse, giving $\\sin 30^\\circ=\\tfrac12$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the sine value",
          "workingLatex": "\\operatorname{cosec} 30^\\circ = \\frac{1}{\\tfrac{1}{2}}",
          "explanation": "Replacing $\\sin 30^\\circ$ by $\\tfrac12$ leaves one divided by a half.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the reciprocal of a fraction",
          "workingLatex": "\\frac{1}{\\tfrac{1}{2}} = 2",
          "explanation": "Dividing by $\\tfrac12$ is the same as multiplying by $2$, so the reciprocal of a half is two.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Sanity check the size",
          "workingLatex": "|\\sin 30^\\circ| \\le 1 \\Rightarrow |\\operatorname{cosec} 30^\\circ| \\ge 1 \\; \\checkmark",
          "explanation": "A sine never exceeds $1$ in size, so its reciprocal is at least $1$ in size. The answer $2$ fits this comfortably.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the exact value",
          "workingLatex": "\\operatorname{cosec} 30^\\circ = 2",
          "explanation": "This exact value is what the question requires, and notice it equals $\\sec 60^\\circ$ because $\\sin 30^\\circ=\\cos 60^\\circ$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\operatorname{cosec} 30^\\circ = 2$."
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
    "answerType": "exact",
    "tags": [
      "reciprocal trig",
      "cot",
      "exact values",
      "degrees"
    ],
    "questionText": "Find the exact value of $\\cot 45^\\circ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the definition of cotangent",
          "workingLatex": "\\cot\\theta = \\frac{1}{\\tan\\theta} = \\frac{\\cos\\theta}{\\sin\\theta}",
          "explanation": "Cotangent can be found either as one over tangent or as cosine over sine; both forms give the same value, which is useful for checking.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply the definition at 45 degrees",
          "workingLatex": "\\cot 45^\\circ = \\frac{1}{\\tan 45^\\circ}",
          "explanation": "Substituting $\\theta=45^\\circ$ means we just need the value of $\\tan 45^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall the exact value of tan 45",
          "workingLatex": "\\tan 45^\\circ = 1",
          "explanation": "In an isosceles right-angled triangle the two shorter sides are equal, so opposite over adjacent equals $1$, giving $\\tan 45^\\circ=1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the tangent value",
          "workingLatex": "\\cot 45^\\circ = \\frac{1}{1}",
          "explanation": "Replacing $\\tan 45^\\circ$ by $1$ leaves one divided by one.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "\\cot 45^\\circ = 1",
          "explanation": "One divided by one is simply $1$, so cotangent of $45^\\circ$ equals its own tangent here.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Confirm using the cos over sin form",
          "workingLatex": "\\cot 45^\\circ = \\frac{\\cos 45^\\circ}{\\sin 45^\\circ} = \\frac{\\tfrac{\\sqrt{2}}{2}}{\\tfrac{\\sqrt{2}}{2}} = 1 \\; \\checkmark",
          "explanation": "Using the alternative definition gives an independent check: cosine and sine of $45^\\circ$ are equal, so their ratio is $1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the exact value",
          "workingLatex": "\\cot 45^\\circ = 1",
          "explanation": "Both methods agree, confirming the exact value of $1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\cot 45^\\circ = 1$."
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
    "answerType": "exact",
    "tags": [
      "reciprocal trig",
      "cot",
      "exact values",
      "surd"
    ],
    "questionText": "Find the exact value of $\\cot 60^\\circ$, giving your answer as a surd with a rational denominator.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the definition of cotangent",
          "workingLatex": "\\cot\\theta = \\frac{1}{\\tan\\theta}",
          "explanation": "Cotangent is one over tangent, so we start from the tangent of the angle.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply the definition at 60 degrees",
          "workingLatex": "\\cot 60^\\circ = \\frac{1}{\\tan 60^\\circ}",
          "explanation": "Substituting $\\theta=60^\\circ$ leaves us needing the exact value of $\\tan 60^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall the exact value of tan 60",
          "workingLatex": "\\tan 60^\\circ = \\sqrt{3}",
          "explanation": "From the half-equilateral triangle, the side opposite $60^\\circ$ is $\\sqrt{3}$ times the adjacent side, so $\\tan 60^\\circ=\\sqrt{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the tangent value",
          "workingLatex": "\\cot 60^\\circ = \\frac{1}{\\sqrt{3}}",
          "explanation": "The reciprocal of $\\sqrt{3}$ gives $\\tfrac{1}{\\sqrt{3}}$, but a surd in the denominator is not yet in the required form.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rationalise the denominator",
          "workingLatex": "\\frac{1}{\\sqrt{3}} = \\frac{1}{\\sqrt{3}} \\times \\frac{\\sqrt{3}}{\\sqrt{3}} = \\frac{\\sqrt{3}}{3}",
          "explanation": "Multiplying top and bottom by $\\sqrt{3}$ clears the surd from the denominator, since $\\sqrt{3}\\times\\sqrt{3}=3$. This is the standard exact form.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Confirm using the cos over sin form",
          "workingLatex": "\\cot 60^\\circ = \\frac{\\cos 60^\\circ}{\\sin 60^\\circ} = \\frac{\\tfrac{1}{2}}{\\tfrac{\\sqrt{3}}{2}} = \\frac{1}{\\sqrt{3}} \\; \\checkmark",
          "explanation": "The alternative definition confirms the result: the halves cancel to leave $\\tfrac{1}{\\sqrt{3}}$, matching our rationalised answer.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check the approximate size",
          "workingLatex": "\\frac{\\sqrt{3}}{3} \\approx 0.577",
          "explanation": "Since $60^\\circ$ is larger than $45^\\circ$, its cotangent should be less than $1$; a value of about $0.58$ is reasonable.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the exact value",
          "workingLatex": "\\cot 60^\\circ = \\frac{\\sqrt{3}}{3}",
          "explanation": "This is the exact value with a rational denominator, as requested.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\cot 60^\\circ = \\dfrac{\\sqrt{3}}{3}$ (equivalently $\\tfrac{1}{\\sqrt{3}}$)."
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
    "answerType": "exact",
    "tags": [
      "reciprocal trig",
      "sec",
      "exact values",
      "radians"
    ],
    "questionText": "Find the exact value of $\\sec\\dfrac{\\pi}{3}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the definition of secant",
          "workingLatex": "\\sec\\theta = \\frac{1}{\\cos\\theta}",
          "explanation": "As always, secant is handled by converting it to a cosine and evaluating that.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Convert the radian angle to degrees",
          "workingLatex": "\\frac{\\pi}{3} \\text{ rad} = 60^\\circ",
          "explanation": "Since $\\pi$ radians is $180^\\circ$, a third of $\\pi$ is $60^\\circ$. Recognising this lets us reuse the familiar standard value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the definition",
          "workingLatex": "\\sec\\frac{\\pi}{3} = \\frac{1}{\\cos\\tfrac{\\pi}{3}}",
          "explanation": "Substituting the angle gives one over $\\cos\\tfrac{\\pi}{3}$, which we now evaluate.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Recall the exact value of cos of pi over 3",
          "workingLatex": "\\cos\\frac{\\pi}{3} = \\frac{1}{2}",
          "explanation": "Because $\\tfrac{\\pi}{3}$ is $60^\\circ$, its cosine is $\\tfrac12$, exactly as for $\\cos 60^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute and simplify",
          "workingLatex": "\\sec\\frac{\\pi}{3} = \\frac{1}{\\tfrac{1}{2}} = 2",
          "explanation": "Dividing by $\\tfrac12$ is multiplying by $2$, so the secant equals $2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Sanity check the size",
          "workingLatex": "\\left|\\cos\\tfrac{\\pi}{3}\\right| \\le 1 \\Rightarrow \\left|\\sec\\tfrac{\\pi}{3}\\right| \\ge 1 \\; \\checkmark",
          "explanation": "A cosine never exceeds $1$ in size, so its reciprocal is at least $1$ in size; a value of $2$ is consistent.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the exact value",
          "workingLatex": "\\sec\\frac{\\pi}{3} = 2",
          "explanation": "This is the required exact value, working in radians throughout.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sec\\dfrac{\\pi}{3} = 2$."
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
    "answerType": "exact",
    "tags": [
      "reciprocal trig",
      "cosec",
      "exact values",
      "radians"
    ],
    "questionText": "Find the exact value of $\\operatorname{cosec}\\dfrac{\\pi}{4}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the definition of cosecant",
          "workingLatex": "\\operatorname{cosec}\\theta = \\frac{1}{\\sin\\theta}",
          "explanation": "Cosecant is the reciprocal of sine, so we first find the sine of the angle.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Convert the radian angle to degrees",
          "workingLatex": "\\frac{\\pi}{4} \\text{ rad} = 45^\\circ",
          "explanation": "A quarter of $\\pi$ radians is $45^\\circ$, one of the standard angles, so we can quote its sine exactly.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the definition",
          "workingLatex": "\\operatorname{cosec}\\frac{\\pi}{4} = \\frac{1}{\\sin\\tfrac{\\pi}{4}}",
          "explanation": "Substituting the angle leaves one over $\\sin\\tfrac{\\pi}{4}$ to evaluate.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Recall the exact value of sin of pi over 4",
          "workingLatex": "\\sin\\frac{\\pi}{4} = \\frac{\\sqrt{2}}{2}",
          "explanation": "In the isosceles right-angled triangle the sine of $45^\\circ$ is $\\tfrac{1}{\\sqrt{2}}$, written in rationalised form as $\\tfrac{\\sqrt{2}}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the sine value",
          "workingLatex": "\\operatorname{cosec}\\frac{\\pi}{4} = \\frac{1}{\\tfrac{\\sqrt{2}}{2}}",
          "explanation": "We now have one divided by $\\tfrac{\\sqrt{2}}{2}$, which we simplify by flipping the fraction.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Flip the fraction",
          "workingLatex": "\\frac{1}{\\tfrac{\\sqrt{2}}{2}} = \\frac{2}{\\sqrt{2}}",
          "explanation": "Dividing by $\\tfrac{\\sqrt{2}}{2}$ means multiplying by its reciprocal $\\tfrac{2}{\\sqrt{2}}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Rationalise the denominator",
          "workingLatex": "\\frac{2}{\\sqrt{2}} = \\frac{2}{\\sqrt{2}} \\times \\frac{\\sqrt{2}}{\\sqrt{2}} = \\frac{2\\sqrt{2}}{2} = \\sqrt{2}",
          "explanation": "Multiplying top and bottom by $\\sqrt{2}$ clears the surd, and the twos cancel to leave the tidy exact value $\\sqrt{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the exact value",
          "workingLatex": "\\operatorname{cosec}\\frac{\\pi}{4} = \\sqrt{2}",
          "explanation": "This is the required exact value; note it matches $\\sec\\tfrac{\\pi}{4}$ because sine and cosine are equal at $45^\\circ$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\operatorname{cosec}\\dfrac{\\pi}{4} = \\sqrt{2}$."
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
    "answerType": "exact",
    "tags": [
      "reciprocal trig",
      "cot",
      "exact values",
      "radians"
    ],
    "questionText": "Find the exact value of $\\cot\\dfrac{\\pi}{6}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the definition of cotangent",
          "workingLatex": "\\cot\\theta = \\frac{1}{\\tan\\theta}",
          "explanation": "Cotangent is one over tangent, so we begin with the tangent of the angle.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Convert the radian angle to degrees",
          "workingLatex": "\\frac{\\pi}{6} \\text{ rad} = 30^\\circ",
          "explanation": "A sixth of $\\pi$ radians is $30^\\circ$, a standard angle, so we can quote its tangent exactly.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the definition",
          "workingLatex": "\\cot\\frac{\\pi}{6} = \\frac{1}{\\tan\\tfrac{\\pi}{6}}",
          "explanation": "Substituting the angle leaves one over $\\tan\\tfrac{\\pi}{6}$ to simplify.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Recall the exact value of tan of pi over 6",
          "workingLatex": "\\tan\\frac{\\pi}{6} = \\frac{1}{\\sqrt{3}}",
          "explanation": "From the half-equilateral triangle, $\\tan 30^\\circ=\\tfrac{1}{\\sqrt{3}}$, and $\\tfrac{\\pi}{6}$ is exactly $30^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the tangent value",
          "workingLatex": "\\cot\\frac{\\pi}{6} = \\frac{1}{\\tfrac{1}{\\sqrt{3}}}",
          "explanation": "We now have one divided by $\\tfrac{1}{\\sqrt{3}}$, the reciprocal of a reciprocal.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify the reciprocal of a reciprocal",
          "workingLatex": "\\frac{1}{\\tfrac{1}{\\sqrt{3}}} = \\sqrt{3}",
          "explanation": "Flipping $\\tfrac{1}{\\sqrt{3}}$ returns $\\sqrt{3}$: taking a reciprocal twice brings you back to the original number.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Confirm using the cos over sin form",
          "workingLatex": "\\cot\\frac{\\pi}{6} = \\frac{\\cos\\tfrac{\\pi}{6}}{\\sin\\tfrac{\\pi}{6}} = \\frac{\\tfrac{\\sqrt{3}}{2}}{\\tfrac{1}{2}} = \\sqrt{3} \\; \\checkmark",
          "explanation": "The alternative definition confirms the answer: the halves cancel to leave $\\sqrt{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the exact value",
          "workingLatex": "\\cot\\frac{\\pi}{6} = \\sqrt{3}",
          "explanation": "This is the required exact value, and it is greater than $1$ as expected for an angle below $45^\\circ$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\cot\\dfrac{\\pi}{6} = \\sqrt{3}$."
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q009",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "reciprocal trig",
      "sec",
      "quadrant",
      "exact values"
    ],
    "questionText": "Find the exact value of $\\sec 120^\\circ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the definition of secant",
          "workingLatex": "\\sec 120^\\circ = \\frac{1}{\\cos 120^\\circ}",
          "explanation": "As before, we turn the secant into a cosine; the only new feature here is that $120^\\circ$ is not one of the acute standard angles.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the quadrant",
          "workingLatex": "90^\\circ < 120^\\circ < 180^\\circ \\Rightarrow \\theta \\text{ in quadrant 2}",
          "explanation": "Angles between $90^\\circ$ and $180^\\circ$ lie in the second quadrant, which tells us the sign of the cosine to expect.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the reference angle",
          "workingLatex": "180^\\circ - 120^\\circ = 60^\\circ",
          "explanation": "The reference angle is the acute angle to the horizontal axis. For a second-quadrant angle it is $180^\\circ$ minus the angle, giving $60^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Determine the sign of cosine",
          "workingLatex": "\\cos 120^\\circ = -\\cos 60^\\circ",
          "explanation": "In the second quadrant cosine is negative (only sine is positive there), so the value carries a minus sign in front of the reference-angle cosine.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the reference value",
          "workingLatex": "\\cos 120^\\circ = -\\frac{1}{2}",
          "explanation": "Since $\\cos 60^\\circ=\\tfrac12$, applying the negative sign gives $\\cos 120^\\circ=-\\tfrac12$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute into the secant definition",
          "workingLatex": "\\sec 120^\\circ = \\frac{1}{-\\tfrac{1}{2}}",
          "explanation": "Now we take one over the negative cosine value we found.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify",
          "workingLatex": "\\frac{1}{-\\tfrac{1}{2}} = -2",
          "explanation": "Dividing by $-\\tfrac12$ multiplies by $-2$, so the reciprocal of $-\\tfrac12$ is $-2$; the sign is inherited from the cosine.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the exact value",
          "workingLatex": "\\sec 120^\\circ = -2",
          "explanation": "The negative sign is essential: $\\sec 120^\\circ=-2$, not $2$, because $120^\\circ$ sits in the second quadrant.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sec 120^\\circ = -2$."
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q010",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "reciprocal trig",
      "cot",
      "quadrant",
      "exact values"
    ],
    "questionText": "Find the exact value of $\\cot 135^\\circ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the definition of cotangent",
          "workingLatex": "\\cot 135^\\circ = \\frac{1}{\\tan 135^\\circ}",
          "explanation": "Cotangent is one over tangent, so we first find $\\tan 135^\\circ$, taking care with its sign.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the quadrant",
          "workingLatex": "90^\\circ < 135^\\circ < 180^\\circ \\Rightarrow \\theta \\text{ in quadrant 2}",
          "explanation": "An angle between $90^\\circ$ and $180^\\circ$ is in the second quadrant, which fixes the sign of the tangent.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the reference angle",
          "workingLatex": "180^\\circ - 135^\\circ = 45^\\circ",
          "explanation": "The reference angle for a second-quadrant angle is $180^\\circ$ minus the angle, here giving the familiar $45^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Determine the sign of tangent",
          "workingLatex": "\\tan 135^\\circ = -\\tan 45^\\circ",
          "explanation": "In the second quadrant tangent is negative (sine positive, cosine negative give a negative ratio), so a minus sign appears in front.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the reference value",
          "workingLatex": "\\tan 135^\\circ = -1",
          "explanation": "Because $\\tan 45^\\circ=1$, applying the negative sign gives $\\tan 135^\\circ=-1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute into the cotangent definition",
          "workingLatex": "\\cot 135^\\circ = \\frac{1}{-1}",
          "explanation": "We now take one over the tangent value just found.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify",
          "workingLatex": "\\cot 135^\\circ = -1",
          "explanation": "One divided by $-1$ is $-1$, so the cotangent keeps the negative sign of the tangent.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the exact value",
          "workingLatex": "\\cot 135^\\circ = -1",
          "explanation": "The answer is $-1$; the negative sign reflects that $135^\\circ$ lies in the second quadrant.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\cot 135^\\circ = -1$."
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
    "answerType": "exact",
    "tags": [
      "reciprocal trig",
      "sec",
      "given ratio"
    ],
    "questionText": "Given that $\\cos\\theta = \\dfrac{3}{7}$, find the exact value of $\\sec\\theta$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the definition of secant",
          "workingLatex": "\\sec\\theta = \\frac{1}{\\cos\\theta}",
          "explanation": "Secant is the reciprocal of cosine, so once we know the cosine we simply invert it. No identities or quadrants are needed here.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute the given cosine",
          "workingLatex": "\\sec\\theta = \\frac{1}{\\tfrac{3}{7}}",
          "explanation": "Replacing $\\cos\\theta$ by the given value $\\tfrac{3}{7}$ leaves one divided by that fraction.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Flip the fraction",
          "workingLatex": "\\frac{1}{\\tfrac{3}{7}} = \\frac{7}{3}",
          "explanation": "The reciprocal of a fraction is found by swapping its numerator and denominator, so $\\tfrac{3}{7}$ inverts to $\\tfrac{7}{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check the sign",
          "workingLatex": "\\cos\\theta > 0 \\Rightarrow \\sec\\theta > 0",
          "explanation": "Since the given cosine is positive, its reciprocal is also positive, so no sign change occurs.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify the reciprocal relationship",
          "workingLatex": "\\cos\\theta \\times \\sec\\theta = \\frac{3}{7} \\times \\frac{7}{3} = 1 \\; \\checkmark",
          "explanation": "A quick check: a number times its reciprocal must equal $1$, and here the product is indeed $1$, confirming the value.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the exact value",
          "workingLatex": "\\sec\\theta = \\frac{7}{3}",
          "explanation": "The exact value of the secant is $\\tfrac{7}{3}$, obtained purely by inverting the given cosine.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sec\\theta = \\dfrac{7}{3}$."
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
    "answerType": "written",
    "tags": [
      "reciprocal trig",
      "sec",
      "cosec",
      "period"
    ],
    "questionText": "State the exact period of $y = \\sec x$ and of $y = \\operatorname{cosec} x$, and explain briefly why they share this period.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the reciprocal definitions",
          "workingLatex": "\\sec x = \\frac{1}{\\cos x}, \\qquad \\operatorname{cosec} x = \\frac{1}{\\sin x}",
          "explanation": "Secant and cosecant are built directly from cosine and sine by taking reciprocals, so their repeating behaviour is inherited from $\\cos x$ and $\\sin x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the period of the parent functions",
          "workingLatex": "\\cos(x + 360^\\circ) = \\cos x, \\qquad \\sin(x + 360^\\circ) = \\sin x",
          "explanation": "Both $\\cos x$ and $\\sin x$ repeat every $360^\\circ$ (that is $2\\pi$ radians); this is the smallest shift that returns every value, so their period is $360^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the shift to secant",
          "workingLatex": "\\sec(x + 360^\\circ) = \\frac{1}{\\cos(x + 360^\\circ)} = \\frac{1}{\\cos x} = \\sec x",
          "explanation": "Replacing $x$ with $x+360^\\circ$ leaves the cosine unchanged, so its reciprocal is unchanged too. Secant therefore repeats after $360^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the shift to cosecant",
          "workingLatex": "\\operatorname{cosec}(x + 360^\\circ) = \\frac{1}{\\sin(x + 360^\\circ)} = \\frac{1}{\\sin x} = \\operatorname{cosec} x",
          "explanation": "The same reasoning works for cosecant: since sine is unchanged by a $360^\\circ$ shift, so is its reciprocal.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check nothing smaller works",
          "workingLatex": "\\cos 0^\\circ = 1, \\quad \\cos 180^\\circ = -1",
          "explanation": "A shift of $180^\\circ$ does not return cosine to the same value — here it turns $1$ into $-1$ — so no interval shorter than $360^\\circ$ makes sec or cosec repeat. Hence $360^\\circ$ is genuinely the period.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Give the period in both units",
          "workingLatex": "\\text{period} = 360^\\circ \\ \\text{(i.e. } 2\\pi \\text{ radians)}",
          "explanation": "Expressing the period in degrees and radians makes it usable in either convention.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the conclusion",
          "workingLatex": "y = \\sec x \\text{ and } y = \\operatorname{cosec} x \\text{ both have period } 360^\\circ",
          "explanation": "Both graphs are copies of one $360^\\circ$-wide block repeated forever, which is exactly what having period $360^\\circ$ means.",
          "diagram": null
        }
      ],
      "finalAnswer": "Both $y=\\sec x$ and $y=\\operatorname{cosec} x$ have period $360^\\circ$ (that is $2\\pi$ radians), inherited from the $360^\\circ$ period of $\\cos x$ and $\\sin x$."
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
    "answerType": "written",
    "tags": [
      "reciprocal trig",
      "cot",
      "period"
    ],
    "questionText": "State the exact period of $y = \\cot x$, and explain why it is different from the period of $y = \\sec x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the definition of cot",
          "workingLatex": "\\cot x = \\frac{\\cos x}{\\sin x}",
          "explanation": "Cotangent is cosine over sine (equivalently the reciprocal of tangent), so its repeating pattern comes from how $\\cos x$ and $\\sin x$ behave together.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Use the half-turn related-angle facts",
          "workingLatex": "\\cos(x + 180^\\circ) = -\\cos x, \\qquad \\sin(x + 180^\\circ) = -\\sin x",
          "explanation": "Moving $180^\\circ$ around the unit circle sends a point to the diametrically opposite point, which flips the sign of both cosine and sine. These are standard related-angle results.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form cot of the shifted angle",
          "workingLatex": "\\cot(x + 180^\\circ) = \\frac{\\cos(x + 180^\\circ)}{\\sin(x + 180^\\circ)} = \\frac{-\\cos x}{-\\sin x}",
          "explanation": "Building the ratio for the shifted angle, both the numerator and the denominator pick up a minus sign.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Cancel the two minus signs",
          "workingLatex": "\\frac{-\\cos x}{-\\sin x} = \\frac{\\cos x}{\\sin x} = \\cot x",
          "explanation": "The two minus signs cancel, so a $180^\\circ$ shift leaves cotangent completely unchanged. This is why its period is only half that of sine and cosine.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Contrast with secant",
          "workingLatex": "\\sec(x + 180^\\circ) = \\frac{1}{\\cos(x + 180^\\circ)} = \\frac{1}{-\\cos x} = -\\sec x \\ne \\sec x",
          "explanation": "For secant there is only one cosine, so the single minus sign survives and the value changes sign. Secant therefore does not repeat after $180^\\circ$; it needs the full $360^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the period in both units",
          "workingLatex": "\\text{period of } \\cot x = 180^\\circ \\ \\text{(i.e. } \\pi \\text{ radians)}",
          "explanation": "In radians $180^\\circ$ is $\\pi$, so the period of cotangent is $\\pi$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compare the two periods",
          "workingLatex": "180^\\circ \\ (\\cot) \\; < \\; 360^\\circ \\ (\\sec)",
          "explanation": "Cotangent repeats twice as often as secant because the paired sign-changes in $\\dfrac{\\cos x}{\\sin x}$ cancel, whereas the lone cosine in $\\sec x$ does not.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y=\\cot x$ has period $180^\\circ$ (that is $\\pi$ radians) — half the $360^\\circ$ period of $\\sec x$ — because the sign changes in $\\dfrac{\\cos x}{\\sin x}$ cancel after a $180^\\circ$ shift, while the single cosine in $\\sec x$ does not."
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
    "answerType": "written",
    "tags": [
      "reciprocal trig",
      "sec",
      "range"
    ],
    "questionText": "State the range of the function $y = \\sec x$, and explain why no values of $y$ lie strictly between $-1$ and $1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the definition",
          "workingLatex": "\\sec x = \\frac{1}{\\cos x}",
          "explanation": "Secant is one divided by cosine, so its possible outputs are controlled entirely by the possible values of $\\cos x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the values cosine can take",
          "workingLatex": "-1 \\le \\cos x \\le 1, \\quad \\cos x \\ne 0",
          "explanation": "Cosine only ever takes values between $-1$ and $1$. We must also exclude $\\cos x = 0$, since dividing by zero is undefined (those points give the asymptotes).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Reciprocate the positive part",
          "workingLatex": "0 < \\cos x \\le 1 \\;\\Rightarrow\\; \\sec x = \\frac{1}{\\cos x} \\ge 1",
          "explanation": "When cosine is positive but at most $1$, its reciprocal is at least $1$: dividing $1$ by a number no bigger than $1$ can never give an answer below $1$. So all positive secant values are $\\ge 1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Reciprocate the negative part",
          "workingLatex": "-1 \\le \\cos x < 0 \\;\\Rightarrow\\; \\sec x = \\frac{1}{\\cos x} \\le -1",
          "explanation": "Similarly, when cosine is negative but no smaller than $-1$, its reciprocal is at most $-1$. So all negative secant values are $\\le -1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Explain the gap around zero",
          "workingLatex": "|\\cos x| \\le 1 \\;\\Rightarrow\\; |\\sec x| = \\frac{1}{|\\cos x|} \\ge 1",
          "explanation": "Because $|\\cos x|$ never exceeds $1$, its reciprocal is never smaller than $1$ in size. That is exactly why secant can never land strictly between $-1$ and $1$ — there is a gap around $0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine the two pieces",
          "workingLatex": "\\sec x \\le -1 \\quad \\text{or} \\quad \\sec x \\ge 1",
          "explanation": "Putting the two pieces together, every secant value is either at most $-1$ or at least $1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the range",
          "workingLatex": "\\text{range: } \\{\\, y : y \\le -1 \\ \\text{or} \\ y \\ge 1 \\,\\}",
          "explanation": "This describes all outputs of $y=\\sec x$: everything from $1$ upward together with everything from $-1$ downward.",
          "diagram": null
        }
      ],
      "finalAnswer": "The range of $y=\\sec x$ is $y \\le -1$ or $y \\ge 1$; no output lies strictly between $-1$ and $1$ because $|\\sec x| = \\dfrac{1}{|\\cos x|} \\ge 1$."
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
    "answerType": "written",
    "tags": [
      "reciprocal trig",
      "cot",
      "range"
    ],
    "questionText": "State the range of the function $y = \\cot x$, and explain why every real number is a possible value.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the definition",
          "workingLatex": "\\cot x = \\frac{\\cos x}{\\sin x}",
          "explanation": "Cotangent is the ratio of cosine to sine, so its outputs depend on how these two vary relative to each other.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find where cot is zero",
          "workingLatex": "\\cot x = 0 \\iff \\cos x = 0 \\quad (\\text{e.g. } x = 90^\\circ)",
          "explanation": "A fraction is zero exactly when its numerator is zero, so cotangent hits $0$ whenever $\\cos x = 0$ (with $\\sin x \\ne 0$). So $0$ is in the range.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Show large positive values occur",
          "workingLatex": "\\sin x \\to 0^+, \\ \\cos x \\to 1 \\;\\Rightarrow\\; \\cot x = \\frac{\\cos x}{\\sin x} \\to +\\infty",
          "explanation": "As $x$ approaches $0^\\circ$ from above, sine is a tiny positive number and cosine is near $1$; dividing by something tiny makes cotangent grow without bound. So arbitrarily large positive values occur.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Show large negative values occur",
          "workingLatex": "\\sin x \\to 0^+, \\ \\cos x \\to -1 \\;\\Rightarrow\\; \\cot x \\to -\\infty",
          "explanation": "Approaching $180^\\circ$ from below, sine is tiny and positive while cosine is near $-1$, so the ratio is large and negative. Arbitrarily large negative values occur too.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Note continuity between asymptotes",
          "workingLatex": "\\cot x \\text{ is continuous on } 0^\\circ < x < 180^\\circ",
          "explanation": "Between two consecutive asymptotes cotangent moves smoothly and without breaks from $+\\infty$ down to $-\\infty$, so it must pass through every value on the way.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclude every value is attained",
          "workingLatex": "+\\infty \\;\\longrightarrow\\; -\\infty \\;\\Rightarrow\\; \\text{every } y \\in \\mathbb{R} \\text{ is attained}",
          "explanation": "Sweeping continuously from very large positive to very large negative, the graph cannot skip any height, so it takes every real value on a single branch.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the range",
          "workingLatex": "\\text{range: } y \\in \\mathbb{R} \\quad (\\text{all real numbers})",
          "explanation": "Unlike sec and cosec, cotangent has no gap: its range is the whole set of real numbers.",
          "diagram": null
        }
      ],
      "finalAnswer": "The range of $y=\\cot x$ is all real numbers, $y \\in \\mathbb{R}$; on each branch it runs continuously from $+\\infty$ to $-\\infty$, so no value is missed."
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
    "answerType": "exact",
    "tags": [
      "reciprocal trig",
      "sec",
      "asymptotes"
    ],
    "questionText": "Find, in degrees, the values of $x$ at which the graph of $y = \\sec x$ has vertical asymptotes.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the definition",
          "workingLatex": "\\sec x = \\frac{1}{\\cos x}",
          "explanation": "Secant is one over cosine, so it becomes undefined precisely where the denominator $\\cos x$ is zero.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set the denominator to zero",
          "workingLatex": "\\cos x = 0",
          "explanation": "A vertical asymptote appears where the function shoots off to infinity, which happens when we divide by zero — that is, where cosine equals zero.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve over one revolution",
          "workingLatex": "\\cos x = 0 \\;\\Rightarrow\\; x = 90^\\circ, \\ 270^\\circ \\quad (0^\\circ \\le x < 360^\\circ)",
          "explanation": "Within one full revolution, cosine is zero at $90^\\circ$ and $270^\\circ$ — the top and bottom of the unit circle.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Spot the spacing",
          "workingLatex": "270^\\circ - 90^\\circ = 180^\\circ",
          "explanation": "These two solutions are $180^\\circ$ apart, so the zeros of cosine — and hence the asymptotes — are evenly spaced every $180^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the general solution",
          "workingLatex": "x = 90^\\circ + 180^\\circ k, \\quad k \\in \\mathbb{Z}",
          "explanation": "Adding any whole number of $180^\\circ$ steps to $90^\\circ$ reaches every place where cosine vanishes, in both directions.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check a negative value of k",
          "workingLatex": "k = -1: \\ x = 90^\\circ - 180^\\circ = -90^\\circ, \\quad \\cos(-90^\\circ) = 0 \\ \\checkmark",
          "explanation": "Testing $k=-1$ gives $-90^\\circ$, where cosine is indeed zero, confirming the formula works for negative $k$ as well.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the asymptotes",
          "workingLatex": "\\text{asymptotes at } x = 90^\\circ + 180^\\circ k",
          "explanation": "The graph of $y=\\sec x$ has a vertical asymptote at each of these $x$-values, spaced $180^\\circ$ apart.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y=\\sec x$ has vertical asymptotes at $x = 90^\\circ + 180^\\circ k$ for integer $k$ (i.e. $\\ldots, -90^\\circ, 90^\\circ, 270^\\circ, \\ldots$), because these are exactly where $\\cos x = 0$."
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
    "answerType": "exact",
    "tags": [
      "reciprocal trig",
      "cosec",
      "asymptotes"
    ],
    "questionText": "The graph of $y = \\operatorname{cosec} x$ has vertical asymptotes wherever the function is undefined. Find these values of $x$ in degrees.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the definition",
          "workingLatex": "\\operatorname{cosec} x = \\frac{1}{\\sin x}",
          "explanation": "Cosecant is one over sine, so it is undefined exactly where the denominator $\\sin x$ equals zero.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set the denominator to zero",
          "workingLatex": "\\sin x = 0",
          "explanation": "Dividing by zero has no meaning, so the function breaks — and the graph has a vertical asymptote — wherever sine is zero.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve over one revolution",
          "workingLatex": "\\sin x = 0 \\;\\Rightarrow\\; x = 0^\\circ, \\ 180^\\circ, \\ 360^\\circ",
          "explanation": "Over one revolution sine is zero at $0^\\circ$, $180^\\circ$ and $360^\\circ$ — where the unit-circle point sits on the horizontal axis.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Spot the spacing",
          "workingLatex": "180^\\circ - 0^\\circ = 180^\\circ",
          "explanation": "Consecutive zeros of sine are $180^\\circ$ apart, so the asymptotes repeat every $180^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the general solution",
          "workingLatex": "x = 180^\\circ k, \\quad k \\in \\mathbb{Z}",
          "explanation": "Every multiple of $180^\\circ$ is a zero of sine, so this single expression captures all of them.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check a value",
          "workingLatex": "k = 2: \\ x = 360^\\circ, \\quad \\sin 360^\\circ = 0 \\ \\checkmark",
          "explanation": "Testing $k=2$ gives $360^\\circ$, where sine is zero as expected, confirming the general formula.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the asymptotes",
          "workingLatex": "\\text{asymptotes at } x = 180^\\circ k = \\ldots, -180^\\circ, 0^\\circ, 180^\\circ, \\ldots",
          "explanation": "So $y=\\operatorname{cosec} x$ is undefined, with a vertical asymptote, at every integer multiple of $180^\\circ$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y=\\operatorname{cosec} x$ is undefined at $x = 180^\\circ k$ for integer $k$ (i.e. $\\ldots, -180^\\circ, 0^\\circ, 180^\\circ, 360^\\circ, \\ldots$), the points where $\\sin x = 0$; the graph has a vertical asymptote at each."
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
    "answerType": "written",
    "tags": [
      "reciprocal trig",
      "cot",
      "symmetry"
    ],
    "questionText": "Show that $y = \\cot x$ is an odd function, and state what this tells you about the symmetry of its graph.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall what odd means",
          "workingLatex": "f \\text{ is odd} \\iff f(-x) = -f(x)",
          "explanation": "A function is odd when replacing $x$ by $-x$ simply flips the sign of the output. Graphically this means rotational symmetry of order $2$ about the origin.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write cot of the negative angle",
          "workingLatex": "\\cot(-x) = \\frac{\\cos(-x)}{\\sin(-x)}",
          "explanation": "We test the odd condition by feeding in $-x$, using the definition of cotangent as cosine over sine.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use the parities of cos and sin",
          "workingLatex": "\\cos(-x) = \\cos x, \\qquad \\sin(-x) = -\\sin x",
          "explanation": "Cosine is even (a reflection in the $y$-axis leaves it unchanged) while sine is odd (it flips sign). These are standard facts from the unit circle.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the parities",
          "workingLatex": "\\cot(-x) = \\frac{\\cos x}{-\\sin x}",
          "explanation": "Putting the two parities in, the numerator is unchanged and the denominator gains a minus sign.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Pull out the minus sign",
          "workingLatex": "\\frac{\\cos x}{-\\sin x} = -\\frac{\\cos x}{\\sin x} = -\\cot x",
          "explanation": "Pulling the minus sign out front turns the ratio back into $\\cot x$ with a negative sign attached.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Confirm the odd condition",
          "workingLatex": "\\cot(-x) = -\\cot x",
          "explanation": "We have shown exactly the odd condition $f(-x) = -f(x)$, so cotangent is an odd function.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Interpret the graph",
          "workingLatex": "\\text{graph has } 180^\\circ \\text{ rotational symmetry about the origin}",
          "explanation": "Being odd means the curve looks the same after a half-turn about the origin: the branch on one side is the point-reflection of the branch on the other.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\cot(-x) = \\dfrac{\\cos(-x)}{\\sin(-x)} = \\dfrac{\\cos x}{-\\sin x} = -\\cot x$, so $y=\\cot x$ is odd; its graph has rotational symmetry of order $2$ about the origin."
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q019",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "tags": [
      "inverse trig",
      "arcsin",
      "domain and range"
    ],
    "questionText": "State the domain and range of the inverse function $y = \\arcsin x$, and explain why the domain of $\\sin$ must be restricted before it can have an inverse.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the one-to-one requirement",
          "workingLatex": "\\text{inverse exists} \\iff \\text{function is one-to-one}",
          "explanation": "A function can only be reversed if each output comes from exactly one input. Otherwise the reverse process would not know which input to return.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Show sine is many-to-one",
          "workingLatex": "\\sin 30^\\circ = \\sin 150^\\circ = \\tfrac{1}{2}",
          "explanation": "Over its full domain sine repeats values — for instance $\\tfrac12$ is produced by both $30^\\circ$ and $150^\\circ$ — so as it stands sine is not one-to-one and has no inverse.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Restrict the domain of sine",
          "workingLatex": "-\\tfrac{\\pi}{2} \\le x \\le \\tfrac{\\pi}{2}",
          "explanation": "We cut sine down to the interval from $-\\tfrac{\\pi}{2}$ to $\\tfrac{\\pi}{2}$ (that is $-90^\\circ$ to $90^\\circ$), where it increases steadily and so hits each value only once.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Note the values it covers",
          "workingLatex": "\\sin\\!\\left(-\\tfrac{\\pi}{2}\\right) = -1, \\qquad \\sin\\!\\left(\\tfrac{\\pi}{2}\\right) = 1",
          "explanation": "On this restricted piece sine climbs from $-1$ up to $1$, taking every value in between exactly once — perfect for defining an inverse.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Read off the domain of arcsin",
          "workingLatex": "\\text{domain of } \\arcsin: \\ -1 \\le x \\le 1",
          "explanation": "The inputs of the inverse are the outputs of sine, so $\\arcsin$ accepts exactly the numbers from $-1$ to $1$. Asking for $\\arcsin 2$ is meaningless — no angle has sine $2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Read off the range of arcsin",
          "workingLatex": "\\text{range of } \\arcsin: \\ -\\tfrac{\\pi}{2} \\le y \\le \\tfrac{\\pi}{2}",
          "explanation": "The outputs of the inverse are the restricted inputs of sine, so $\\arcsin$ returns exactly one angle between $-\\tfrac{\\pi}{2}$ and $\\tfrac{\\pi}{2}$ — its principal value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the result",
          "workingLatex": "\\arcsin: [-1, 1] \\to \\left[-\\tfrac{\\pi}{2}, \\tfrac{\\pi}{2}\\right]",
          "explanation": "So $\\arcsin$ has domain $[-1,1]$ and range $[-\\tfrac{\\pi}{2}, \\tfrac{\\pi}{2}]$, a direct consequence of restricting sine to make it reversible.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y=\\arcsin x$ has domain $-1 \\le x \\le 1$ and range $-\\tfrac{\\pi}{2} \\le y \\le \\tfrac{\\pi}{2}$. Sine must first be restricted to $[-\\tfrac{\\pi}{2}, \\tfrac{\\pi}{2}]$ so that it is one-to-one; otherwise repeated outputs would make the inverse ambiguous."
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
    "answerType": "written",
    "tags": [
      "inverse trig",
      "arccos",
      "arctan",
      "domain and range"
    ],
    "questionText": "State the domain and range of $y = \\arccos x$ and of $y = \\arctan x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Restrict the domain of cosine",
          "workingLatex": "\\cos x \\text{ restricted to } 0 \\le x \\le \\pi",
          "explanation": "To make cosine one-to-one it is restricted to the interval from $0$ to $\\pi$ (that is $0^\\circ$ to $180^\\circ$), where it decreases steadily from $1$ to $-1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Read off the domain of arccos",
          "workingLatex": "\\text{domain of } \\arccos: \\ -1 \\le x \\le 1",
          "explanation": "The inputs of $\\arccos$ are the possible values of $\\cos x$, which lie between $-1$ and $1$; no number outside this range has a cosine.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Read off the range of arccos",
          "workingLatex": "\\text{range of } \\arccos: \\ 0 \\le y \\le \\pi",
          "explanation": "The outputs are the restricted angles, so $\\arccos$ returns a single angle between $0$ and $\\pi$ — note this is a different interval from arcsin.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Restrict the domain of tangent",
          "workingLatex": "\\tan x \\text{ restricted to } -\\tfrac{\\pi}{2} < x < \\tfrac{\\pi}{2}",
          "explanation": "Tangent is restricted to the open interval between $-\\tfrac{\\pi}{2}$ and $\\tfrac{\\pi}{2}$; the ends are excluded because tangent has asymptotes there.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Read off the domain of arctan",
          "workingLatex": "\\text{domain of } \\arctan: \\ x \\in \\mathbb{R}",
          "explanation": "Tangent stretches out to every real value, so its inverse accepts every real number — there is no restriction on the input of $\\arctan$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Read off the range of arctan",
          "workingLatex": "\\text{range of } \\arctan: \\ -\\tfrac{\\pi}{2} < y < \\tfrac{\\pi}{2}",
          "explanation": "The outputs are the restricted angles, strictly between $-\\tfrac{\\pi}{2}$ and $\\tfrac{\\pi}{2}$. The strict inequalities reflect that these values are approached but never reached.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Collect the results",
          "workingLatex": "\\arccos: [-1, 1] \\to [0, \\pi], \\qquad \\arctan: \\mathbb{R} \\to \\left(-\\tfrac{\\pi}{2}, \\tfrac{\\pi}{2}\\right)",
          "explanation": "Gathering everything: arccos maps $[-1,1]$ onto $[0,\\pi]$, while arctan maps all of $\\mathbb{R}$ onto the open interval $(-\\tfrac{\\pi}{2}, \\tfrac{\\pi}{2})$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y=\\arccos x$: domain $-1 \\le x \\le 1$, range $0 \\le y \\le \\pi$. $y=\\arctan x$: domain all real $x$, range $-\\tfrac{\\pi}{2} < y < \\tfrac{\\pi}{2}$."
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q021",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "exact",
    "tags": [
      "inverse trig",
      "exact values",
      "radians"
    ],
    "questionText": "Find the exact values, in radians, of $\\arcsin\\tfrac{1}{2}$, $\\arccos\\tfrac{1}{2}$ and $\\arctan 1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State what arcsin asks for",
          "workingLatex": "\\arcsin\\tfrac{1}{2} = \\theta \\iff \\sin\\theta = \\tfrac{1}{2}, \\ -\\tfrac{\\pi}{2} \\le \\theta \\le \\tfrac{\\pi}{2}",
          "explanation": "Evaluating an inverse means asking: which angle in the allowed range has this sine? For arcsin the answer must lie between $-\\tfrac{\\pi}{2}$ and $\\tfrac{\\pi}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the arcsin value",
          "workingLatex": "\\sin\\tfrac{\\pi}{6} = \\tfrac{1}{2} \\;\\Rightarrow\\; \\arcsin\\tfrac{1}{2} = \\tfrac{\\pi}{6}",
          "explanation": "From the standard $30^\\circ$ triangle, $\\sin\\tfrac{\\pi}{6} = \\tfrac12$, and $\\tfrac{\\pi}{6}$ sits inside the arcsin range, so it is the principal value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State what arccos asks for",
          "workingLatex": "\\arccos\\tfrac{1}{2} = \\theta \\iff \\cos\\theta = \\tfrac{1}{2}, \\ 0 \\le \\theta \\le \\pi",
          "explanation": "For arccos we want the angle between $0$ and $\\pi$ whose cosine is $\\tfrac12$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify the arccos value",
          "workingLatex": "\\cos\\tfrac{\\pi}{3} = \\tfrac{1}{2} \\;\\Rightarrow\\; \\arccos\\tfrac{1}{2} = \\tfrac{\\pi}{3}",
          "explanation": "The $60^\\circ$ angle has cosine $\\tfrac12$, and $\\tfrac{\\pi}{3}$ lies in $[0,\\pi]$, so it is the required value.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State what arctan asks for",
          "workingLatex": "\\arctan 1 = \\theta \\iff \\tan\\theta = 1, \\ -\\tfrac{\\pi}{2} < \\theta < \\tfrac{\\pi}{2}",
          "explanation": "For arctan we seek the angle strictly between $-\\tfrac{\\pi}{2}$ and $\\tfrac{\\pi}{2}$ whose tangent is $1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Identify the arctan value",
          "workingLatex": "\\tan\\tfrac{\\pi}{4} = 1 \\;\\Rightarrow\\; \\arctan 1 = \\tfrac{\\pi}{4}",
          "explanation": "In the $45^\\circ$ right triangle the two legs are equal, so $\\tan\\tfrac{\\pi}{4}=1$; this angle lies in the arctan range.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the three values",
          "workingLatex": "\\arcsin\\tfrac{1}{2} = \\tfrac{\\pi}{6}, \\quad \\arccos\\tfrac{1}{2} = \\tfrac{\\pi}{3}, \\quad \\arctan 1 = \\tfrac{\\pi}{4}",
          "explanation": "Collecting the principal values gives the three exact answers in radians.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\arcsin\\tfrac{1}{2} = \\tfrac{\\pi}{6}$, $\\arccos\\tfrac{1}{2} = \\tfrac{\\pi}{3}$, $\\arctan 1 = \\tfrac{\\pi}{4}$."
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q022",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "inverse trig",
      "exact values",
      "negative inputs"
    ],
    "questionText": "Find the exact values, in radians, of $\\arcsin\\!\\left(-\\tfrac{1}{2}\\right)$, $\\arccos\\!\\left(-\\tfrac{1}{2}\\right)$ and $\\arctan\\sqrt{3}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State what arcsin asks for",
          "workingLatex": "\\arcsin\\!\\left(-\\tfrac{1}{2}\\right) = \\theta \\iff \\sin\\theta = -\\tfrac{1}{2}, \\ -\\tfrac{\\pi}{2} \\le \\theta \\le \\tfrac{\\pi}{2}",
          "explanation": "We need the angle in $[-\\tfrac{\\pi}{2}, \\tfrac{\\pi}{2}]$ with sine $-\\tfrac12$. A negative sine forces a negative angle, in the lower half of the range.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Use the oddness of sine",
          "workingLatex": "\\sin\\tfrac{\\pi}{6} = \\tfrac{1}{2} \\;\\Rightarrow\\; \\sin\\!\\left(-\\tfrac{\\pi}{6}\\right) = -\\tfrac{1}{2}",
          "explanation": "Since sine is odd, the angle with sine $-\\tfrac12$ is just the negative of the angle with sine $\\tfrac12$. So the answer is $-\\tfrac{\\pi}{6}$, which lies in range.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the first value",
          "workingLatex": "\\arcsin\\!\\left(-\\tfrac{1}{2}\\right) = -\\tfrac{\\pi}{6}",
          "explanation": "This confirms the principal value; note it is negative, unlike an arccos result.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State what arccos asks for",
          "workingLatex": "\\arccos\\!\\left(-\\tfrac{1}{2}\\right) = \\theta \\iff \\cos\\theta = -\\tfrac{1}{2}, \\ 0 \\le \\theta \\le \\pi",
          "explanation": "We need the angle in $[0,\\pi]$ with cosine $-\\tfrac12$. A negative cosine puts the angle in the second quadrant, between $\\tfrac{\\pi}{2}$ and $\\pi$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find it from the related acute angle",
          "workingLatex": "\\cos\\tfrac{\\pi}{3} = \\tfrac{1}{2}, \\quad \\pi - \\tfrac{\\pi}{3} = \\tfrac{2\\pi}{3}, \\quad \\cos\\tfrac{2\\pi}{3} = -\\tfrac{1}{2}",
          "explanation": "The acute angle with cosine $\\tfrac12$ is $\\tfrac{\\pi}{3}$; its second-quadrant partner $\\pi-\\tfrac{\\pi}{3}=\\tfrac{2\\pi}{3}$ has cosine $-\\tfrac12$ and lies in $[0,\\pi]$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the second value",
          "workingLatex": "\\arccos\\!\\left(-\\tfrac{1}{2}\\right) = \\tfrac{2\\pi}{3}",
          "explanation": "So the principal value is $\\tfrac{2\\pi}{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the arctan value",
          "workingLatex": "\\tan\\tfrac{\\pi}{3} = \\sqrt{3} \\;\\Rightarrow\\; \\arctan\\sqrt{3} = \\tfrac{\\pi}{3}, \\quad -\\tfrac{\\pi}{2} < \\tfrac{\\pi}{3} < \\tfrac{\\pi}{2}",
          "explanation": "From the $60^\\circ$ triangle $\\tan\\tfrac{\\pi}{3}=\\sqrt3$, and $\\tfrac{\\pi}{3}$ lies in the arctan range, so it is the required value.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the three values",
          "workingLatex": "\\arcsin\\!\\left(-\\tfrac{1}{2}\\right) = -\\tfrac{\\pi}{6}, \\quad \\arccos\\!\\left(-\\tfrac{1}{2}\\right) = \\tfrac{2\\pi}{3}, \\quad \\arctan\\sqrt{3} = \\tfrac{\\pi}{3}",
          "explanation": "Collecting the three principal values completes the answer; note how the negative input gives a negative arcsin but a second-quadrant arccos.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\arcsin\\!\\left(-\\tfrac{1}{2}\\right) = -\\tfrac{\\pi}{6}$, $\\arccos\\!\\left(-\\tfrac{1}{2}\\right) = \\tfrac{2\\pi}{3}$, $\\arctan\\sqrt{3} = \\tfrac{\\pi}{3}$."
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q023",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "proof",
    "tags": [
      "pythagorean identity",
      "sec",
      "tan",
      "proof"
    ],
    "questionText": "Starting from the identity $\\sin^2\\theta + \\cos^2\\theta \\equiv 1$, prove that $1 + \\tan^2\\theta \\equiv \\sec^2\\theta$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the identity to start from",
          "workingLatex": "\\sin^2\\theta + \\cos^2\\theta \\equiv 1",
          "explanation": "Every Pythagorean identity in trigonometry grows from this one relationship between $\\sin\\theta$ and $\\cos\\theta$, so it is our natural starting point.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Decide to divide through by cos squared theta",
          "workingLatex": "\\frac{\\sin^2\\theta}{\\cos^2\\theta} + \\frac{\\cos^2\\theta}{\\cos^2\\theta} \\equiv \\frac{1}{\\cos^2\\theta}",
          "explanation": "We are aiming for $\\tan\\theta$ and $\\sec\\theta$, and both of those come from dividing by $\\cos\\theta$. Dividing every term by $\\cos^2\\theta$ keeps the identity true and steers each term towards the functions we want.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify the first term to tan squared",
          "workingLatex": "\\frac{\\sin^2\\theta}{\\cos^2\\theta} = \\left(\\frac{\\sin\\theta}{\\cos\\theta}\\right)^2 = \\tan^2\\theta",
          "explanation": "The ratio $\\dfrac{\\sin\\theta}{\\cos\\theta}$ is exactly $\\tan\\theta$, so squaring it gives $\\tan^2\\theta$. This is where the tangent enters the identity.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the middle term to 1",
          "workingLatex": "\\frac{\\cos^2\\theta}{\\cos^2\\theta} = 1",
          "explanation": "Any non-zero quantity divided by itself is $1$, so this term collapses to a simple constant.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the right-hand side to sec squared",
          "workingLatex": "\\frac{1}{\\cos^2\\theta} = \\left(\\frac{1}{\\cos\\theta}\\right)^2 = \\sec^2\\theta",
          "explanation": "Since $\\sec\\theta = \\dfrac{1}{\\cos\\theta}$, the right-hand side is $\\sec\\theta$ squared. This is where the secant appears.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Put the simplified terms back together",
          "workingLatex": "\\tan^2\\theta + 1 \\equiv \\sec^2\\theta",
          "explanation": "Replacing each term by its simplified form turns the divided identity into a relationship purely between $\\tan\\theta$ and $\\sec\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Rearrange into the standard order",
          "workingLatex": "1 + \\tan^2\\theta \\equiv \\sec^2\\theta",
          "explanation": "Writing the constant first gives the identity in the form it is normally quoted and used.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State where the identity is valid",
          "workingLatex": "\\cos\\theta \\neq 0",
          "explanation": "We divided by $\\cos^2\\theta$, which is only allowed when $\\cos\\theta \\neq 0$. This matches the fact that $\\tan\\theta$ and $\\sec\\theta$ are themselves undefined wherever $\\cos\\theta = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check with a known angle",
          "workingLatex": "1 + \\tan^2 60^\\circ = 1 + 3 = 4, \\qquad \\sec^2 60^\\circ = 2^2 = 4",
          "explanation": "Testing $\\theta = 60^\\circ$ gives $4$ on both sides, which is a quick reassurance that the identity we derived behaves correctly.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the conclusion",
          "workingLatex": "1 + \\tan^2\\theta \\equiv \\sec^2\\theta \\quad \\text{as required.}",
          "explanation": "Each step followed from the previous by a valid operation, so the identity is proved for all $\\theta$ where $\\cos\\theta \\neq 0$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Dividing $\\sin^2\\theta + \\cos^2\\theta \\equiv 1$ through by $\\cos^2\\theta$ gives $\\tan^2\\theta + 1 \\equiv \\sec^2\\theta$, that is $1 + \\tan^2\\theta \\equiv \\sec^2\\theta$, valid whenever $\\cos\\theta \\neq 0$."
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q024",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "proof",
    "tags": [
      "pythagorean identity",
      "cosec",
      "cot",
      "proof"
    ],
    "questionText": "Starting from the identity $\\sin^2\\theta + \\cos^2\\theta \\equiv 1$, prove that $1 + \\cot^2\\theta \\equiv \\operatorname{cosec}^2\\theta$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the identity to start from",
          "workingLatex": "\\sin^2\\theta + \\cos^2\\theta \\equiv 1",
          "explanation": "As with the secant version, this fundamental identity is the seed from which the cotangent–cosecant identity grows.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose to divide through by sin squared theta",
          "workingLatex": "\\text{divide every term by } \\sin^2\\theta",
          "explanation": "This time we want $\\cot\\theta$ and $\\operatorname{cosec}\\theta$, and both arise from dividing by $\\sin\\theta$. So dividing every term by $\\sin^2\\theta$ is the right move to bring them out.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Carry out the division",
          "workingLatex": "\\frac{\\sin^2\\theta}{\\sin^2\\theta} + \\frac{\\cos^2\\theta}{\\sin^2\\theta} \\equiv \\frac{1}{\\sin^2\\theta}",
          "explanation": "Dividing each of the three terms by the same non-zero quantity keeps the identity balanced and true.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the first term to 1",
          "workingLatex": "\\frac{\\sin^2\\theta}{\\sin^2\\theta} = 1",
          "explanation": "A quantity divided by itself is $1$, so this term becomes a simple constant.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the middle term to cot squared",
          "workingLatex": "\\frac{\\cos^2\\theta}{\\sin^2\\theta} = \\left(\\frac{\\cos\\theta}{\\sin\\theta}\\right)^2 = \\cot^2\\theta",
          "explanation": "Because $\\cot\\theta = \\dfrac{\\cos\\theta}{\\sin\\theta}$, squaring that ratio produces $\\cot^2\\theta$. This is where the cotangent enters.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify the right-hand side to cosec squared",
          "workingLatex": "\\frac{1}{\\sin^2\\theta} = \\left(\\frac{1}{\\sin\\theta}\\right)^2 = \\operatorname{cosec}^2\\theta",
          "explanation": "Since $\\operatorname{cosec}\\theta = \\dfrac{1}{\\sin\\theta}$, the right-hand side is the cosecant squared. This is where the cosecant appears.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Combine into the identity",
          "workingLatex": "1 + \\cot^2\\theta \\equiv \\operatorname{cosec}^2\\theta",
          "explanation": "Substituting the simplified pieces back in gives a relationship purely between $\\cot\\theta$ and $\\operatorname{cosec}\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State where the identity is valid",
          "workingLatex": "\\sin\\theta \\neq 0",
          "explanation": "We divided by $\\sin^2\\theta$, so we need $\\sin\\theta \\neq 0$. This matches the fact that $\\cot\\theta$ and $\\operatorname{cosec}\\theta$ are undefined wherever $\\sin\\theta = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check with a known angle",
          "workingLatex": "1 + \\cot^2 30^\\circ = 1 + 3 = 4, \\qquad \\operatorname{cosec}^2 30^\\circ = 2^2 = 4",
          "explanation": "Testing $\\theta = 30^\\circ$ gives $4$ on both sides, a quick confirmation that the identity is consistent.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the conclusion",
          "workingLatex": "1 + \\cot^2\\theta \\equiv \\operatorname{cosec}^2\\theta \\quad \\text{as required.}",
          "explanation": "Each line followed by a valid step, so the identity holds for every $\\theta$ with $\\sin\\theta \\neq 0$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Dividing $\\sin^2\\theta + \\cos^2\\theta \\equiv 1$ through by $\\sin^2\\theta$ gives $1 + \\cot^2\\theta \\equiv \\operatorname{cosec}^2\\theta$, valid whenever $\\sin\\theta \\neq 0$."
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
    "answerType": "exact",
    "tags": [
      "given one ratio",
      "quadrant",
      "sec",
      "cosec",
      "cot"
    ],
    "questionText": "Given that $\\sin\\theta = \\tfrac{5}{13}$ and that $\\theta$ lies in the second quadrant, find the exact values of $\\sec\\theta$, $\\operatorname{cosec}\\theta$ and $\\cot\\theta$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Note the signs in the second quadrant",
          "workingLatex": "\\text{Q2:}\\quad \\sin\\theta > 0, \\quad \\cos\\theta < 0, \\quad \\tan\\theta < 0",
          "explanation": "In the second quadrant only sine is positive; cosine and tangent are negative. Fixing the signs now means we can attach the correct sign to each value as we find it.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find cosec from its definition",
          "workingLatex": "\\operatorname{cosec}\\theta = \\frac{1}{\\sin\\theta} = \\frac{1}{\\tfrac{5}{13}} = \\frac{13}{5}",
          "explanation": "Cosecant is just the reciprocal of sine, so we flip the given fraction. It is positive, matching the fact that sine is positive here.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use the Pythagorean identity to find cos squared",
          "workingLatex": "\\cos^2\\theta = 1 - \\sin^2\\theta = 1 - \\tfrac{25}{169} = \\tfrac{144}{169}",
          "explanation": "To reach $\\sec\\theta$ and $\\cot\\theta$ we need $\\cos\\theta$. Rearranging $\\sin^2\\theta + \\cos^2\\theta \\equiv 1$ isolates $\\cos^2\\theta$, and substituting the known sine gives its value.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Take the root with the correct sign",
          "workingLatex": "\\cos\\theta = -\\sqrt{\\tfrac{144}{169}} = -\\tfrac{12}{13}",
          "explanation": "Cosine is negative in the second quadrant, so we take the negative square root. Choosing the sign from the quadrant is the key modelling decision.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find sec from its definition",
          "workingLatex": "\\sec\\theta = \\frac{1}{\\cos\\theta} = \\frac{1}{-\\tfrac{12}{13}} = -\\tfrac{13}{12}",
          "explanation": "Secant is the reciprocal of cosine, so we flip the fraction just found. The negative sign carries through because cosine is negative.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find tan as sin over cos",
          "workingLatex": "\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta} = \\frac{\\tfrac{5}{13}}{-\\tfrac{12}{13}} = -\\tfrac{5}{12}",
          "explanation": "Tangent is sine divided by cosine; the thirteenths cancel, leaving a simple fraction. It is negative because sine and cosine have opposite signs here.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find cot as the reciprocal of tan",
          "workingLatex": "\\cot\\theta = \\frac{1}{\\tan\\theta} = \\frac{1}{-\\tfrac{5}{12}} = -\\tfrac{12}{5}",
          "explanation": "Cotangent is the reciprocal of tangent, so we flip the fraction. It stays negative, consistent with a second-quadrant angle.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check with the identity 1 + tan^2 = sec^2",
          "workingLatex": "1 + \\left(-\\tfrac{5}{12}\\right)^2 = 1 + \\tfrac{25}{144} = \\tfrac{169}{144} = \\left(-\\tfrac{13}{12}\\right)^2",
          "explanation": "A quick check that $1 + \\tan^2\\theta$ equals $\\sec^2\\theta$: both sides give $\\tfrac{169}{144}$, confirming the tangent and secant are consistent.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check with the identity 1 + cot^2 = cosec^2",
          "workingLatex": "1 + \\left(-\\tfrac{12}{5}\\right)^2 = 1 + \\tfrac{144}{25} = \\tfrac{169}{25} = \\left(\\tfrac{13}{5}\\right)^2",
          "explanation": "Similarly $1 + \\cot^2\\theta$ should equal $\\operatorname{cosec}^2\\theta$, and both sides give $\\tfrac{169}{25}$, so all three values agree.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the results",
          "workingLatex": "\\sec\\theta = -\\tfrac{13}{12}, \\quad \\operatorname{cosec}\\theta = \\tfrac{13}{5}, \\quad \\cot\\theta = -\\tfrac{12}{5}",
          "explanation": "Collecting the three exact values completes the answer, with signs consistent with a second-quadrant angle.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sec\\theta = -\\tfrac{13}{12}$, $\\operatorname{cosec}\\theta = \\tfrac{13}{5}$, $\\cot\\theta = -\\tfrac{12}{5}$."
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q026",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "given one ratio",
      "quadrant",
      "tan",
      "sec"
    ],
    "questionText": "Given that $\\tan\\theta = \\tfrac{4}{3}$ and that $\\theta$ lies in the third quadrant, find the exact values of $\\sec\\theta$, $\\cos\\theta$, $\\sin\\theta$, $\\operatorname{cosec}\\theta$ and $\\cot\\theta$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Note the signs in the third quadrant",
          "workingLatex": "\\text{Q3:}\\quad \\sin\\theta < 0, \\quad \\cos\\theta < 0, \\quad \\tan\\theta > 0",
          "explanation": "In the third quadrant both sine and cosine are negative, so tangent is positive. A positive $\\tan\\theta = \\tfrac{4}{3}$ is consistent with this, and the signs will guide our square-root choices.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find cot as the reciprocal of tan",
          "workingLatex": "\\cot\\theta = \\frac{1}{\\tan\\theta} = \\frac{1}{\\tfrac{4}{3}} = \\tfrac{3}{4}",
          "explanation": "Cotangent is the reciprocal of tangent, so we simply flip the given fraction. It is positive, matching the positive tangent.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use the identity sec^2 = 1 + tan^2",
          "workingLatex": "\\sec^2\\theta = 1 + \\tan^2\\theta = 1 + \\tfrac{16}{9} = \\tfrac{25}{9}",
          "explanation": "Knowing $\\tan\\theta$, the identity $1 + \\tan^2\\theta \\equiv \\sec^2\\theta$ gives $\\sec\\theta$ directly, which then unlocks $\\cos\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Take the square root",
          "workingLatex": "\\sec\\theta = \\pm\\sqrt{\\tfrac{25}{9}} = \\pm\\tfrac{5}{3}",
          "explanation": "Squaring lost the sign, so both a positive and a negative root are possible until we use the quadrant to decide.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Choose the sign from the quadrant",
          "workingLatex": "\\cos\\theta < 0 \\ \\Rightarrow\\ \\sec\\theta < 0 \\ \\Rightarrow\\ \\sec\\theta = -\\tfrac{5}{3}",
          "explanation": "Since cosine is negative in the third quadrant and secant is its reciprocal, secant is also negative. This selects the negative root.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find cos from sec",
          "workingLatex": "\\cos\\theta = \\frac{1}{\\sec\\theta} = \\frac{1}{-\\tfrac{5}{3}} = -\\tfrac{3}{5}",
          "explanation": "Cosine is the reciprocal of secant, so we flip the fraction. The negative sign is exactly what we expected in this quadrant.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find sin using tan = sin over cos",
          "workingLatex": "\\sin\\theta = \\tan\\theta \\cdot \\cos\\theta = \\tfrac{4}{3} \\cdot \\left(-\\tfrac{3}{5}\\right) = -\\tfrac{4}{5}",
          "explanation": "Rearranging $\\tan\\theta = \\dfrac{\\sin\\theta}{\\cos\\theta}$ gives $\\sin\\theta = \\tan\\theta\\cos\\theta$. Multiplying gives a negative value, as required in the third quadrant.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find cosec from its definition",
          "workingLatex": "\\operatorname{cosec}\\theta = \\frac{1}{\\sin\\theta} = \\frac{1}{-\\tfrac{4}{5}} = -\\tfrac{5}{4}",
          "explanation": "Cosecant is the reciprocal of sine, so flipping the fraction gives its value, which is negative like the sine.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check that sin and cos satisfy the Pythagorean identity",
          "workingLatex": "\\left(-\\tfrac{4}{5}\\right)^2 + \\left(-\\tfrac{3}{5}\\right)^2 = \\tfrac{16}{25} + \\tfrac{9}{25} = \\tfrac{25}{25} = 1",
          "explanation": "A reliable check: $\\sin^2\\theta + \\cos^2\\theta$ should equal $1$, and it does, confirming our sine and cosine are a valid pair.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the results",
          "workingLatex": "\\sec\\theta = -\\tfrac{5}{3},\\ \\cos\\theta = -\\tfrac{3}{5},\\ \\sin\\theta = -\\tfrac{4}{5},\\ \\operatorname{cosec}\\theta = -\\tfrac{5}{4},\\ \\cot\\theta = \\tfrac{3}{4}",
          "explanation": "Collecting every value gives the complete answer, with the sign pattern of a third-quadrant angle throughout.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sec\\theta = -\\tfrac{5}{3}$, $\\cos\\theta = -\\tfrac{3}{5}$, $\\sin\\theta = -\\tfrac{4}{5}$, $\\operatorname{cosec}\\theta = -\\tfrac{5}{4}$, $\\cot\\theta = \\tfrac{3}{4}$."
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
    "answerType": "exact",
    "tags": [
      "given sec",
      "pythagorean identity",
      "tan",
      "quadrant"
    ],
    "questionText": "Given that $\\sec\\theta = \\sqrt{10}$ and that $\\theta$ lies in the fourth quadrant, use the identity $1 + \\tan^2\\theta \\equiv \\sec^2\\theta$ to find the exact value of $\\tan\\theta$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Note the signs in the fourth quadrant",
          "workingLatex": "\\text{Q4:}\\quad \\cos\\theta > 0, \\quad \\sin\\theta < 0, \\quad \\tan\\theta < 0",
          "explanation": "In the fourth quadrant cosine is positive while sine is negative, so tangent is negative. This tells us in advance which sign $\\tan\\theta$ must take.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Check the given secant is consistent",
          "workingLatex": "\\sec\\theta = \\frac{1}{\\cos\\theta} > 0",
          "explanation": "Because cosine is positive here, its reciprocal $\\sec\\theta$ should be positive, and $\\sqrt{10}$ is indeed positive, so the data is consistent.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the identity linking sec and tan",
          "workingLatex": "1 + \\tan^2\\theta \\equiv \\sec^2\\theta",
          "explanation": "This Pythagorean identity connects the quantity we know, $\\sec\\theta$, with the quantity we want, $\\tan\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rearrange to make tan squared the subject",
          "workingLatex": "\\tan^2\\theta = \\sec^2\\theta - 1",
          "explanation": "Subtracting $1$ from both sides isolates $\\tan^2\\theta$, ready for us to substitute the known secant.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the value of sec",
          "workingLatex": "\\tan^2\\theta = \\left(\\sqrt{10}\\right)^2 - 1 = 10 - 1 = 9",
          "explanation": "Squaring $\\sqrt{10}$ gives $10$, and subtracting $1$ leaves a clean perfect square, which will give an exact root.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Take the square root",
          "workingLatex": "\\tan\\theta = \\pm\\sqrt{9} = \\pm 3",
          "explanation": "The square root gives two possibilities, $+3$ and $-3$; the quadrant will decide which one is correct.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Choose the sign from the quadrant",
          "workingLatex": "\\tan\\theta < 0 \\ \\Rightarrow\\ \\tan\\theta = -3",
          "explanation": "Tangent is negative in the fourth quadrant, so we discard $+3$ and keep the negative root.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find cos and sin to verify",
          "workingLatex": "\\cos\\theta = \\frac{1}{\\sqrt{10}} = \\tfrac{\\sqrt{10}}{10}, \\qquad \\sin\\theta = \\tan\\theta\\cos\\theta = -\\tfrac{3\\sqrt{10}}{10}",
          "explanation": "Finding $\\cos\\theta$ from the secant and then $\\sin\\theta$ from $\\sin\\theta = \\tan\\theta\\cos\\theta$ lets us test our answer against the fundamental identity.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Confirm with sin^2 + cos^2 = 1",
          "workingLatex": "\\left(-\\tfrac{3\\sqrt{10}}{10}\\right)^2 + \\left(\\tfrac{\\sqrt{10}}{10}\\right)^2 = \\tfrac{90}{100} + \\tfrac{10}{100} = 1",
          "explanation": "The two squares add to $1$, which confirms the value $\\tan\\theta = -3$ is consistent with a genuine angle.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the answer",
          "workingLatex": "\\tan\\theta = -3",
          "explanation": "The identity gave the size and the quadrant fixed the sign, so the exact value is $-3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\tan\\theta = -3$."
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
    "answerType": "exact",
    "tags": [
      "given cot",
      "pythagorean identity",
      "cosec",
      "quadrant"
    ],
    "questionText": "Given that $\\cot\\theta = -\\tfrac{5}{12}$ and that $\\theta$ lies in the second quadrant, use the identity $1 + \\cot^2\\theta \\equiv \\operatorname{cosec}^2\\theta$ to find the exact values of $\\operatorname{cosec}\\theta$ and $\\sin\\theta$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Note the signs in the second quadrant",
          "workingLatex": "\\text{Q2:}\\quad \\sin\\theta > 0, \\quad \\cos\\theta < 0, \\quad \\cot\\theta < 0",
          "explanation": "In the second quadrant sine is positive and cosine is negative, so $\\cot\\theta = \\dfrac{\\cos\\theta}{\\sin\\theta}$ is negative. A negative $\\cot\\theta = -\\tfrac{5}{12}$ is consistent with this.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the identity linking cot and cosec",
          "workingLatex": "\\operatorname{cosec}^2\\theta = 1 + \\cot^2\\theta",
          "explanation": "This Pythagorean identity connects the given $\\cot\\theta$ directly to $\\operatorname{cosec}\\theta$, which is what we need.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the value of cot",
          "workingLatex": "\\operatorname{cosec}^2\\theta = 1 + \\left(-\\tfrac{5}{12}\\right)^2 = 1 + \\tfrac{25}{144}",
          "explanation": "Squaring the given cotangent removes its sign and gives a fraction we can add to $1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the right-hand side",
          "workingLatex": "\\operatorname{cosec}^2\\theta = \\tfrac{144}{144} + \\tfrac{25}{144} = \\tfrac{169}{144}",
          "explanation": "Writing $1$ as $\\tfrac{144}{144}$ lets us add the fractions to a single value that is a perfect square over a perfect square.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Take the square root",
          "workingLatex": "\\operatorname{cosec}\\theta = \\pm\\sqrt{\\tfrac{169}{144}} = \\pm\\tfrac{13}{12}",
          "explanation": "Both roots are possible after squaring, so we hold on to the $\\pm$ until the quadrant tells us the sign.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Choose the sign from the quadrant",
          "workingLatex": "\\sin\\theta > 0 \\ \\Rightarrow\\ \\operatorname{cosec}\\theta > 0 \\ \\Rightarrow\\ \\operatorname{cosec}\\theta = \\tfrac{13}{12}",
          "explanation": "Sine is positive in the second quadrant and cosecant is its reciprocal, so cosecant is positive too. This selects the positive root.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find sin from cosec",
          "workingLatex": "\\sin\\theta = \\frac{1}{\\operatorname{cosec}\\theta} = \\frac{1}{\\tfrac{13}{12}} = \\tfrac{12}{13}",
          "explanation": "Sine is the reciprocal of cosecant, so we flip the fraction. It is positive, as expected in this quadrant.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find cos to prepare a check",
          "workingLatex": "\\cos\\theta = \\cot\\theta\\cdot\\sin\\theta = \\left(-\\tfrac{5}{12}\\right)\\cdot\\tfrac{12}{13} = -\\tfrac{5}{13}",
          "explanation": "Rearranging $\\cot\\theta = \\dfrac{\\cos\\theta}{\\sin\\theta}$ gives $\\cos\\theta = \\cot\\theta\\sin\\theta$. The result is negative, matching a second-quadrant cosine.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify with sin^2 + cos^2 = 1",
          "workingLatex": "\\left(\\tfrac{12}{13}\\right)^2 + \\left(-\\tfrac{5}{13}\\right)^2 = \\tfrac{144}{169} + \\tfrac{25}{169} = 1",
          "explanation": "The squares of the sine and cosine add to $1$, confirming that our cosecant and sine are consistent with a genuine angle.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the results",
          "workingLatex": "\\operatorname{cosec}\\theta = \\tfrac{13}{12}, \\qquad \\sin\\theta = \\tfrac{12}{13}",
          "explanation": "The identity gave the magnitudes and the quadrant fixed the signs, completing the answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\operatorname{cosec}\\theta = \\tfrac{13}{12}$ and $\\sin\\theta = \\tfrac{12}{13}$."
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
    "answerType": "exact",
    "tags": [
      "given one ratio",
      "quadrant",
      "sec",
      "cosec",
      "cot"
    ],
    "questionText": "Given that $\\cos\\theta = -\\tfrac{4}{5}$ and that $\\theta$ lies in the third quadrant, find the exact values of $\\sec\\theta$, $\\operatorname{cosec}\\theta$ and $\\cot\\theta$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Note the signs in the third quadrant",
          "workingLatex": "\\text{Q3:}\\quad \\sin\\theta < 0, \\quad \\cos\\theta < 0, \\quad \\tan\\theta > 0",
          "explanation": "In the third quadrant both sine and cosine are negative, so tangent is positive. Recording this first tells us which square roots to take later.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find sec from its definition",
          "workingLatex": "\\sec\\theta = \\frac{1}{\\cos\\theta} = \\frac{1}{-\\tfrac{4}{5}} = -\\tfrac{5}{4}",
          "explanation": "Secant is the reciprocal of cosine, so we flip the given fraction and keep the negative sign.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use the Pythagorean identity to find sin squared",
          "workingLatex": "\\sin^2\\theta = 1 - \\cos^2\\theta = 1 - \\tfrac{16}{25} = \\tfrac{9}{25}",
          "explanation": "To reach cosecant and cotangent we need $\\sin\\theta$. Rearranging $\\sin^2\\theta + \\cos^2\\theta \\equiv 1$ and substituting the known cosine gives $\\sin^2\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Take the root with the correct sign",
          "workingLatex": "\\sin\\theta = -\\sqrt{\\tfrac{9}{25}} = -\\tfrac{3}{5}",
          "explanation": "Sine is negative in the third quadrant, so we take the negative square root. The quadrant is what fixes this sign.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find cosec from its definition",
          "workingLatex": "\\operatorname{cosec}\\theta = \\frac{1}{\\sin\\theta} = \\frac{1}{-\\tfrac{3}{5}} = -\\tfrac{5}{3}",
          "explanation": "Cosecant is the reciprocal of sine, so flipping the fraction gives its value, which is negative like the sine.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find tan as sin over cos",
          "workingLatex": "\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta} = \\frac{-\\tfrac{3}{5}}{-\\tfrac{4}{5}} = \\tfrac{3}{4}",
          "explanation": "Tangent is sine over cosine; the fifths cancel and the two negatives divide to a positive, as expected in the third quadrant.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find cot as the reciprocal of tan",
          "workingLatex": "\\cot\\theta = \\frac{1}{\\tan\\theta} = \\frac{1}{\\tfrac{3}{4}} = \\tfrac{4}{3}",
          "explanation": "Cotangent is the reciprocal of tangent, so we flip the fraction; it is positive, matching the positive tangent.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check with the identity 1 + tan^2 = sec^2",
          "workingLatex": "1 + \\left(\\tfrac{3}{4}\\right)^2 = 1 + \\tfrac{9}{16} = \\tfrac{25}{16} = \\left(-\\tfrac{5}{4}\\right)^2",
          "explanation": "Confirming $1 + \\tan^2\\theta = \\sec^2\\theta$: both sides give $\\tfrac{25}{16}$, so the tangent and secant agree.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check with the identity 1 + cot^2 = cosec^2",
          "workingLatex": "1 + \\left(\\tfrac{4}{3}\\right)^2 = 1 + \\tfrac{16}{9} = \\tfrac{25}{9} = \\left(-\\tfrac{5}{3}\\right)^2",
          "explanation": "Confirming $1 + \\cot^2\\theta = \\operatorname{cosec}^2\\theta$: both sides give $\\tfrac{25}{9}$, so all values are consistent.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the results",
          "workingLatex": "\\sec\\theta = -\\tfrac{5}{4}, \\quad \\operatorname{cosec}\\theta = -\\tfrac{5}{3}, \\quad \\cot\\theta = \\tfrac{4}{3}",
          "explanation": "Collecting the three exact values gives the final answer, with the sign pattern of a third-quadrant angle.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sec\\theta = -\\tfrac{5}{4}$, $\\operatorname{cosec}\\theta = -\\tfrac{5}{3}$, $\\cot\\theta = \\tfrac{4}{3}$."
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
    "answerType": "exact",
    "tags": [
      "given cosec",
      "pythagorean identity",
      "cot",
      "surds"
    ],
    "questionText": "Given that $\\operatorname{cosec}\\theta = -3$ and that $\\theta$ lies in the fourth quadrant, find the exact values of $\\cot\\theta$, $\\tan\\theta$ and $\\sec\\theta$, giving your answers in surd form where appropriate.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Note the signs in the fourth quadrant",
          "workingLatex": "\\text{Q4:}\\quad \\cos\\theta > 0, \\quad \\sin\\theta < 0, \\quad \\tan\\theta < 0",
          "explanation": "In the fourth quadrant cosine is positive and sine is negative. Since $\\operatorname{cosec}\\theta$ is the reciprocal of sine, a negative value $-3$ is consistent with this.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find sin from cosec",
          "workingLatex": "\\sin\\theta = \\frac{1}{\\operatorname{cosec}\\theta} = \\frac{1}{-3} = -\\tfrac{1}{3}",
          "explanation": "Sine is the reciprocal of cosecant, so flipping the value gives $\\sin\\theta$ directly, and it is negative as expected.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the identity linking cot and cosec",
          "workingLatex": "\\cot^2\\theta = \\operatorname{cosec}^2\\theta - 1",
          "explanation": "Rearranging $1 + \\cot^2\\theta \\equiv \\operatorname{cosec}^2\\theta$ isolates $\\cot^2\\theta$, letting us use the given cosecant.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the value of cosec",
          "workingLatex": "\\cot^2\\theta = (-3)^2 - 1 = 9 - 1 = 8",
          "explanation": "Squaring $-3$ gives $9$, and subtracting $1$ leaves $8$; this is not a perfect square, so a surd will appear.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Take the square root and simplify the surd",
          "workingLatex": "\\cot\\theta = \\pm\\sqrt{8} = \\pm 2\\sqrt{2}",
          "explanation": "Since $8 = 4 \\times 2$, the root simplifies to $2\\sqrt{2}$. The $\\pm$ stays until the quadrant fixes the sign.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Choose the sign from the quadrant",
          "workingLatex": "\\cot\\theta = \\frac{\\cos\\theta}{\\sin\\theta} = \\frac{(+)}{(-)} < 0 \\ \\Rightarrow\\ \\cot\\theta = -2\\sqrt{2}",
          "explanation": "In the fourth quadrant cosine is positive and sine is negative, so their ratio $\\cot\\theta$ is negative. This selects the negative root.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find tan as the reciprocal of cot",
          "workingLatex": "\\tan\\theta = \\frac{1}{\\cot\\theta} = \\frac{1}{-2\\sqrt{2}} = -\\tfrac{\\sqrt{2}}{4}",
          "explanation": "Tangent is the reciprocal of cotangent; rationalising $\\dfrac{1}{2\\sqrt{2}}$ by multiplying top and bottom by $\\sqrt{2}$ gives $\\dfrac{\\sqrt{2}}{4}$, with the negative sign carried through.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find cos using cot = cos over sin",
          "workingLatex": "\\cos\\theta = \\cot\\theta\\cdot\\sin\\theta = \\left(-2\\sqrt{2}\\right)\\left(-\\tfrac{1}{3}\\right) = \\tfrac{2\\sqrt{2}}{3}",
          "explanation": "Rearranging $\\cot\\theta = \\dfrac{\\cos\\theta}{\\sin\\theta}$ gives $\\cos\\theta = \\cot\\theta\\sin\\theta$. The two negatives multiply to a positive, matching a fourth-quadrant cosine.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find sec from cos",
          "workingLatex": "\\sec\\theta = \\frac{1}{\\cos\\theta} = \\frac{3}{2\\sqrt{2}} = \\tfrac{3\\sqrt{2}}{4}",
          "explanation": "Secant is the reciprocal of cosine; rationalising the denominator gives $\\dfrac{3\\sqrt{2}}{4}$, which is positive as expected here.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Verify with sin^2 + cos^2 = 1",
          "workingLatex": "\\left(-\\tfrac{1}{3}\\right)^2 + \\left(\\tfrac{2\\sqrt{2}}{3}\\right)^2 = \\tfrac{1}{9} + \\tfrac{8}{9} = 1",
          "explanation": "The squares of sine and cosine add to $1$, confirming that all of our values fit together consistently.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the results",
          "workingLatex": "\\cot\\theta = -2\\sqrt{2}, \\quad \\tan\\theta = -\\tfrac{\\sqrt{2}}{4}, \\quad \\sec\\theta = \\tfrac{3\\sqrt{2}}{4}",
          "explanation": "Collecting the exact surd values completes the answer, with signs matching a fourth-quadrant angle.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\cot\\theta = -2\\sqrt{2}$, $\\tan\\theta = -\\tfrac{\\sqrt{2}}{4}$ and $\\sec\\theta = \\tfrac{3\\sqrt{2}}{4}$."
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
    "answerType": "exact",
    "tags": [
      "pythagorean identity",
      "sec",
      "cosec",
      "recognise identity"
    ],
    "questionText": "Given that $\\tan\\theta = \\tfrac{2}{3}$ and that $\\theta$ is acute, work out the exact values of $\\sec^2\\theta - \\tan^2\\theta$ and $\\operatorname{cosec}^2\\theta - \\cot^2\\theta$, and explain why each result does not depend on the value of $\\theta$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the identity for sec squared",
          "workingLatex": "\\sec^2\\theta = 1 + \\tan^2\\theta",
          "explanation": "The Pythagorean identity $1 + \\tan^2\\theta \\equiv \\sec^2\\theta$ lets us turn the known $\\tan\\theta$ into $\\sec^2\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Compute tan squared",
          "workingLatex": "\\tan^2\\theta = \\left(\\tfrac{2}{3}\\right)^2 = \\tfrac{4}{9}",
          "explanation": "Squaring the given tangent gives the value we will substitute into the identity.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find sec squared",
          "workingLatex": "\\sec^2\\theta = 1 + \\tfrac{4}{9} = \\tfrac{13}{9}",
          "explanation": "Adding $1$ to $\\tan^2\\theta$ gives $\\sec^2\\theta$ as a single fraction.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate sec squared minus tan squared",
          "workingLatex": "\\sec^2\\theta - \\tan^2\\theta = \\tfrac{13}{9} - \\tfrac{4}{9} = \\tfrac{9}{9} = 1",
          "explanation": "Subtracting the two fractions leaves exactly $1$. The $\\tfrac{4}{9}$ we added to make $\\sec^2\\theta$ is removed again by the subtraction.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Recognise this as the identity rearranged",
          "workingLatex": "\\sec^2\\theta - \\tan^2\\theta \\equiv 1",
          "explanation": "This is just $1 + \\tan^2\\theta \\equiv \\sec^2\\theta$ rearranged, so the answer is $1$ for every valid $\\theta$, not only this one. The specific value of $\\tan\\theta$ never mattered.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find cot for the second expression",
          "workingLatex": "\\cot\\theta = \\frac{1}{\\tan\\theta} = \\frac{1}{\\tfrac{2}{3}} = \\tfrac{3}{2}",
          "explanation": "Cotangent is the reciprocal of tangent, giving the value we need for the cosecant identity.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compute cot squared",
          "workingLatex": "\\cot^2\\theta = \\left(\\tfrac{3}{2}\\right)^2 = \\tfrac{9}{4}",
          "explanation": "Squaring the cotangent prepares it for the identity $1 + \\cot^2\\theta \\equiv \\operatorname{cosec}^2\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find cosec squared",
          "workingLatex": "\\operatorname{cosec}^2\\theta = 1 + \\cot^2\\theta = 1 + \\tfrac{9}{4} = \\tfrac{13}{4}",
          "explanation": "Adding $1$ to $\\cot^2\\theta$ gives $\\operatorname{cosec}^2\\theta$ as a single fraction.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Evaluate cosec squared minus cot squared",
          "workingLatex": "\\operatorname{cosec}^2\\theta - \\cot^2\\theta = \\tfrac{13}{4} - \\tfrac{9}{4} = \\tfrac{4}{4} = 1",
          "explanation": "Once again the difference is exactly $1$, because subtracting $\\cot^2\\theta$ undoes the $\\cot^2\\theta$ that was added to build $\\operatorname{cosec}^2\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Recognise the second identity",
          "workingLatex": "\\operatorname{cosec}^2\\theta - \\cot^2\\theta \\equiv 1",
          "explanation": "This is $1 + \\cot^2\\theta \\equiv \\operatorname{cosec}^2\\theta$ rearranged, so it also equals $1$ for every valid $\\theta$, independent of the particular angle.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the results",
          "workingLatex": "\\sec^2\\theta - \\tan^2\\theta = 1, \\qquad \\operatorname{cosec}^2\\theta - \\cot^2\\theta = 1",
          "explanation": "Both expressions equal $1$, and because each is simply a Pythagorean identity written in a different order, the value of $\\theta$ used to check it makes no difference.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sec^2\\theta - \\tan^2\\theta = 1$ and $\\operatorname{cosec}^2\\theta - \\cot^2\\theta = 1$. Each is a Pythagorean identity ($1+\\tan^2\\theta\\equiv\\sec^2\\theta$ and $1+\\cot^2\\theta\\equiv\\operatorname{cosec}^2\\theta$) rearranged, so the result is $1$ for every valid $\\theta$, regardless of its value."
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q032",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "proof",
    "tags": [
      "identities",
      "sec",
      "tan",
      "pythagorean identity"
    ],
    "questionText": "Prove that $\\sec^2\\theta - 1 \\equiv \\tan^2\\theta$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the identity and choose a side to work on",
          "workingLatex": "\\text{Prove: } \\sec^2\\theta - 1 \\equiv \\tan^2\\theta \\qquad \\text{Start with LHS} = \\sec^2\\theta - 1",
          "explanation": "We prove an identity by transforming one side into the other. The left-hand side is the busier expression, so we start there and aim to reach $\\tan^2\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the definition of secant",
          "workingLatex": "\\sec\\theta = \\frac{1}{\\cos\\theta}",
          "explanation": "Reciprocal functions are easiest to handle once written through $\\sin$ and $\\cos$, and $\\sec\\theta$ is by definition the reciprocal of $\\cos\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Square the definition",
          "workingLatex": "\\sec^2\\theta = \\frac{1}{\\cos^2\\theta}",
          "explanation": "Squaring both sides turns $\\sec\\theta$ into the $\\sec^2\\theta$ that appears in the identity, giving us $\\dfrac{1}{\\cos^2\\theta}$ to substitute.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the LHS",
          "workingLatex": "\\text{LHS} = \\frac{1}{\\cos^2\\theta} - 1",
          "explanation": "Replacing $\\sec^2\\theta$ with $\\dfrac{1}{\\cos^2\\theta}$ leaves the whole side written purely in cosine, ready to combine.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write over a common denominator",
          "workingLatex": "\\frac{1}{\\cos^2\\theta} - 1 = \\frac{1 - \\cos^2\\theta}{\\cos^2\\theta}",
          "explanation": "Writing the $1$ as $\\dfrac{\\cos^2\\theta}{\\cos^2\\theta}$ lets us subtract the two terms as a single fraction over $\\cos^2\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply the Pythagorean identity",
          "workingLatex": "\\sin^2\\theta + \\cos^2\\theta \\equiv 1 \\implies 1 - \\cos^2\\theta \\equiv \\sin^2\\theta",
          "explanation": "The numerator $1-\\cos^2\\theta$ is exactly what the Pythagorean identity rearranges to $\\sin^2\\theta$, the key step that introduces sine.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute the numerator",
          "workingLatex": "\\text{LHS} = \\frac{\\sin^2\\theta}{\\cos^2\\theta}",
          "explanation": "Swapping the numerator for $\\sin^2\\theta$ gives a ratio of squares of sine and cosine, which is very close to a tangent.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Recognise the tangent ratio",
          "workingLatex": "\\frac{\\sin^2\\theta}{\\cos^2\\theta} = \\left(\\frac{\\sin\\theta}{\\cos\\theta}\\right)^2 = \\tan^2\\theta",
          "explanation": "Since $\\tan\\theta = \\dfrac{\\sin\\theta}{\\cos\\theta}$, squaring that ratio is $\\tan^2\\theta$, so the LHS has become the RHS.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check at a convenient angle",
          "workingLatex": "\\sec^2 60^\\circ - 1 = 2^2 - 1 = 3, \\qquad \\tan^2 60^\\circ = (\\sqrt{3})^2 = 3",
          "explanation": "A quick numerical test at $60^\\circ$ gives $3$ on both sides, which supports the algebra.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the conclusion",
          "workingLatex": "\\sec^2\\theta - 1 \\equiv \\tan^2\\theta \\qquad \\text{(LHS} \\equiv \\text{RHS, QED)}",
          "explanation": "The left-hand side has been transformed into the right-hand side using only definitions and the Pythagorean identity, so the identity is proved.",
          "diagram": null
        }
      ],
      "finalAnswer": "Starting from the left, $\\sec^2\\theta-1=\\dfrac{1}{\\cos^2\\theta}-1=\\dfrac{1-\\cos^2\\theta}{\\cos^2\\theta}=\\dfrac{\\sin^2\\theta}{\\cos^2\\theta}=\\tan^2\\theta$, so $\\sec^2\\theta-1\\equiv\\tan^2\\theta$ as required."
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
    "answerType": "proof",
    "tags": [
      "identities",
      "sec",
      "tan",
      "difference of squares"
    ],
    "questionText": "Prove that $(\\sec\\theta + \\tan\\theta)(\\sec\\theta - \\tan\\theta) \\equiv 1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the identity and plan",
          "workingLatex": "\\text{Prove: } (\\sec\\theta + \\tan\\theta)(\\sec\\theta - \\tan\\theta) \\equiv 1 \\qquad \\text{Start with LHS}",
          "explanation": "We start with the product on the left and expand it, aiming to reach the constant $1$ on the right.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recognise a difference of two squares",
          "workingLatex": "(a+b)(a-b) = a^2 - b^2 \\quad\\text{with } a=\\sec\\theta,\\ b=\\tan\\theta",
          "explanation": "The two brackets are a sum and a difference of the same pair, so they multiply as a difference of two squares and the cross terms will cancel.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand the product in full",
          "workingLatex": "(\\sec\\theta+\\tan\\theta)(\\sec\\theta-\\tan\\theta) = \\sec^2\\theta - \\sec\\theta\\tan\\theta + \\tan\\theta\\sec\\theta - \\tan^2\\theta",
          "explanation": "Multiplying out all four terms shows the two middle terms $-\\sec\\theta\\tan\\theta$ and $+\\tan\\theta\\sec\\theta$ are equal and opposite.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Cancel the cross terms",
          "workingLatex": "= \\sec^2\\theta - \\tan^2\\theta",
          "explanation": "The middle terms cancel exactly, leaving the clean difference $\\sec^2\\theta-\\tan^2\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Start from the fundamental identity",
          "workingLatex": "\\sin^2\\theta + \\cos^2\\theta \\equiv 1",
          "explanation": "To handle $\\sec^2\\theta-\\tan^2\\theta$ we need a link between them, which comes from the fundamental Pythagorean identity.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Divide through by cos^2",
          "workingLatex": "\\frac{\\sin^2\\theta}{\\cos^2\\theta} + \\frac{\\cos^2\\theta}{\\cos^2\\theta} = \\frac{1}{\\cos^2\\theta}",
          "explanation": "Dividing every term by $\\cos^2\\theta$ converts each piece into a reciprocal-function square.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify to the standard identity",
          "workingLatex": "\\tan^2\\theta + 1 = \\sec^2\\theta",
          "explanation": "Since $\\dfrac{\\sin^2\\theta}{\\cos^2\\theta}=\\tan^2\\theta$ and $\\dfrac{1}{\\cos^2\\theta}=\\sec^2\\theta$, this is the standard identity $1+\\tan^2\\theta\\equiv\\sec^2\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Rearrange to the needed form",
          "workingLatex": "\\sec^2\\theta - \\tan^2\\theta = 1",
          "explanation": "Subtracting $\\tan^2\\theta$ from both sides isolates exactly the expression we reached after expanding, and it equals $1$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check at a convenient angle",
          "workingLatex": "(\\sec 45^\\circ + \\tan 45^\\circ)(\\sec 45^\\circ - \\tan 45^\\circ) = (\\sqrt{2}+1)(\\sqrt{2}-1) = 2 - 1 = 1",
          "explanation": "Testing at $45^\\circ$ gives $1$, matching the right-hand side and supporting the proof.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the conclusion",
          "workingLatex": "(\\sec\\theta + \\tan\\theta)(\\sec\\theta - \\tan\\theta) \\equiv 1 \\qquad \\text{(LHS} \\equiv \\text{RHS, QED)}",
          "explanation": "The product simplifies to $1$ using the difference of squares and the identity $1+\\tan^2\\theta\\equiv\\sec^2\\theta$, so the identity holds.",
          "diagram": null
        }
      ],
      "finalAnswer": "Expanding gives $\\sec^2\\theta-\\tan^2\\theta$, and since $1+\\tan^2\\theta\\equiv\\sec^2\\theta$ we have $\\sec^2\\theta-\\tan^2\\theta=1$, so $(\\sec\\theta+\\tan\\theta)(\\sec\\theta-\\tan\\theta)\\equiv1$."
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q034",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "simplify",
      "cot",
      "cosec",
      "pythagorean identity"
    ],
    "questionText": "Simplify fully $(1 + \\cot^2\\theta)\\sin^2\\theta$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the expression and strategy",
          "workingLatex": "(1 + \\cot^2\\theta)\\sin^2\\theta",
          "explanation": "We simplify by recognising the bracket as a Pythagorean identity, then cancelling with the $\\sin^2\\theta$ outside.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Start from the fundamental identity",
          "workingLatex": "\\sin^2\\theta + \\cos^2\\theta \\equiv 1",
          "explanation": "The bracket $1+\\cot^2\\theta$ comes from the Pythagorean identity, so we begin there and adapt it.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Divide through by sin^2",
          "workingLatex": "\\frac{\\sin^2\\theta}{\\sin^2\\theta} + \\frac{\\cos^2\\theta}{\\sin^2\\theta} = \\frac{1}{\\sin^2\\theta}",
          "explanation": "Dividing every term by $\\sin^2\\theta$ turns the identity into one involving $\\cot\\theta$ and $\\operatorname{cosec}\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify to the standard identity",
          "workingLatex": "1 + \\cot^2\\theta = \\operatorname{cosec}^2\\theta",
          "explanation": "Because $\\dfrac{\\cos^2\\theta}{\\sin^2\\theta}=\\cot^2\\theta$ and $\\dfrac{1}{\\sin^2\\theta}=\\operatorname{cosec}^2\\theta$, the bracket equals $\\operatorname{cosec}^2\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Replace the bracket",
          "workingLatex": "(1 + \\cot^2\\theta)\\sin^2\\theta = \\operatorname{cosec}^2\\theta\\,\\sin^2\\theta",
          "explanation": "Substituting the identity replaces the bracket with $\\operatorname{cosec}^2\\theta$, which is a reciprocal of $\\sin^2\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write cosec^2 as a reciprocal",
          "workingLatex": "\\operatorname{cosec}^2\\theta = \\frac{1}{\\sin^2\\theta}",
          "explanation": "Writing $\\operatorname{cosec}^2\\theta$ as $\\dfrac{1}{\\sin^2\\theta}$ exposes the cancellation with the $\\sin^2\\theta$ factor.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute and multiply",
          "workingLatex": "\\operatorname{cosec}^2\\theta\\,\\sin^2\\theta = \\frac{1}{\\sin^2\\theta}\\cdot \\sin^2\\theta = \\frac{\\sin^2\\theta}{\\sin^2\\theta}",
          "explanation": "Replacing $\\operatorname{cosec}^2\\theta$ and multiplying gathers the terms into a single fraction with matching numerator and denominator.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Cancel the common factor",
          "workingLatex": "\\frac{\\sin^2\\theta}{\\sin^2\\theta} = 1 \\qquad (\\sin\\theta \\neq 0)",
          "explanation": "The $\\sin^2\\theta$ terms cancel wherever $\\sin\\theta\\neq0$, leaving the constant $1$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check at a convenient angle",
          "workingLatex": "(1 + \\cot^2 30^\\circ)\\sin^2 30^\\circ = (1 + 3)\\left(\\tfrac{1}{2}\\right)^2 = 4 \\cdot \\tfrac{1}{4} = 1",
          "explanation": "Testing at $30^\\circ$ gives $1$, confirming the simplification.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the result",
          "workingLatex": "(1 + \\cot^2\\theta)\\sin^2\\theta = 1",
          "explanation": "The expression simplifies completely to the constant $1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Using $1+\\cot^2\\theta\\equiv\\operatorname{cosec}^2\\theta$ gives $(1+\\cot^2\\theta)\\sin^2\\theta=\\operatorname{cosec}^2\\theta\\,\\sin^2\\theta=\\dfrac{\\sin^2\\theta}{\\sin^2\\theta}=1$."
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
    "tags": [
      "identities",
      "cot",
      "sec",
      "cosec"
    ],
    "questionText": "Prove that $\\cot\\theta\\,\\sec\\theta \\equiv \\operatorname{cosec}\\theta$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the identity and strategy",
          "workingLatex": "\\text{Prove: } \\cot\\theta\\,\\sec\\theta \\equiv \\operatorname{cosec}\\theta \\qquad \\text{Start with LHS}",
          "explanation": "We rewrite each reciprocal function on the left in terms of $\\sin\\theta$ and $\\cos\\theta$, then simplify to reach $\\operatorname{cosec}\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the definition of cot",
          "workingLatex": "\\cot\\theta = \\frac{\\cos\\theta}{\\sin\\theta}",
          "explanation": "Cotangent is cosine over sine, which is the most convenient form for combining with another ratio.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall the definition of sec",
          "workingLatex": "\\sec\\theta = \\frac{1}{\\cos\\theta}",
          "explanation": "Secant is the reciprocal of cosine, so it contributes a $\\cos\\theta$ in the denominator that we expect to cancel.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the LHS",
          "workingLatex": "\\cot\\theta\\,\\sec\\theta = \\frac{\\cos\\theta}{\\sin\\theta}\\cdot \\frac{1}{\\cos\\theta}",
          "explanation": "Replacing both functions writes the whole product using only sine and cosine.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Multiply the fractions",
          "workingLatex": "= \\frac{\\cos\\theta}{\\sin\\theta\\,\\cos\\theta}",
          "explanation": "Multiplying numerators and denominators gathers everything into a single fraction, ready to cancel.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Cancel the common cosine",
          "workingLatex": "= \\frac{1}{\\sin\\theta} \\qquad (\\cos\\theta \\neq 0)",
          "explanation": "The $\\cos\\theta$ appears in both numerator and denominator, so it cancels wherever $\\cos\\theta\\neq0$, leaving $\\dfrac{1}{\\sin\\theta}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Recognise cosec",
          "workingLatex": "\\frac{1}{\\sin\\theta} = \\operatorname{cosec}\\theta",
          "explanation": "By definition $\\operatorname{cosec}\\theta=\\dfrac{1}{\\sin\\theta}$, so the LHS has become the RHS.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the intermediate result",
          "workingLatex": "\\cot\\theta\\,\\sec\\theta = \\operatorname{cosec}\\theta",
          "explanation": "The left-hand side now matches the right-hand side exactly.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check at a convenient angle",
          "workingLatex": "\\cot 30^\\circ\\,\\sec 30^\\circ = \\sqrt{3}\\cdot \\frac{2}{\\sqrt{3}} = 2, \\qquad \\operatorname{cosec}30^\\circ = 2",
          "explanation": "At $30^\\circ$ both sides equal $2$, supporting the identity.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the conclusion",
          "workingLatex": "\\cot\\theta\\,\\sec\\theta \\equiv \\operatorname{cosec}\\theta \\qquad \\text{(LHS} \\equiv \\text{RHS, QED)}",
          "explanation": "Using only the definitions of cotangent, secant and cosecant the identity is established.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\cot\\theta\\,\\sec\\theta=\\dfrac{\\cos\\theta}{\\sin\\theta}\\cdot\\dfrac{1}{\\cos\\theta}=\\dfrac{1}{\\sin\\theta}=\\operatorname{cosec}\\theta$, so $\\cot\\theta\\,\\sec\\theta\\equiv\\operatorname{cosec}\\theta$."
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
    "tags": [
      "identities",
      "sec",
      "tan",
      "pythagorean identity"
    ],
    "questionText": "Prove that $\\sec\\theta - \\cos\\theta \\equiv \\sin\\theta\\,\\tan\\theta$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the identity and strategy",
          "workingLatex": "\\text{Prove: } \\sec\\theta - \\cos\\theta \\equiv \\sin\\theta\\,\\tan\\theta \\qquad \\text{Start with LHS}",
          "explanation": "The left side mixes a reciprocal function with a cosine, so we convert $\\sec\\theta$ to $\\dfrac{1}{\\cos\\theta}$ and combine.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the definition of sec",
          "workingLatex": "\\sec\\theta = \\frac{1}{\\cos\\theta}",
          "explanation": "Writing secant as $\\dfrac{1}{\\cos\\theta}$ puts the whole left side in terms of cosine, and later sine.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute into the LHS",
          "workingLatex": "\\sec\\theta - \\cos\\theta = \\frac{1}{\\cos\\theta} - \\cos\\theta",
          "explanation": "Now the left side is a simple difference of two cosine terms that we can combine over one denominator.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Combine over a common denominator",
          "workingLatex": "= \\frac{1 - \\cos^2\\theta}{\\cos\\theta}",
          "explanation": "Writing $\\cos\\theta$ as $\\dfrac{\\cos^2\\theta}{\\cos\\theta}$ lets the two terms combine into a single fraction.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply the Pythagorean identity",
          "workingLatex": "1 - \\cos^2\\theta \\equiv \\sin^2\\theta",
          "explanation": "The numerator is exactly the rearrangement of $\\sin^2\\theta+\\cos^2\\theta\\equiv1$, which brings sine into the expression.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute the numerator",
          "workingLatex": "= \\frac{\\sin^2\\theta}{\\cos\\theta}",
          "explanation": "Replacing $1-\\cos^2\\theta$ with $\\sin^2\\theta$ gives a fraction we can split into a product.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Split into a product",
          "workingLatex": "\\frac{\\sin^2\\theta}{\\cos\\theta} = \\sin\\theta\\cdot \\frac{\\sin\\theta}{\\cos\\theta}",
          "explanation": "Peeling off one factor of $\\sin\\theta$ leaves $\\dfrac{\\sin\\theta}{\\cos\\theta}$, which is a tangent.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Recall the definition of tan",
          "workingLatex": "\\frac{\\sin\\theta}{\\cos\\theta} = \\tan\\theta",
          "explanation": "By definition $\\tan\\theta=\\dfrac{\\sin\\theta}{\\cos\\theta}$, so the remaining factor is $\\tan\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Combine to the RHS",
          "workingLatex": "\\sin\\theta\\cdot \\frac{\\sin\\theta}{\\cos\\theta} = \\sin\\theta\\,\\tan\\theta",
          "explanation": "The product is now exactly $\\sin\\theta\\,\\tan\\theta$, the right-hand side.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check at a convenient angle",
          "workingLatex": "\\sec 60^\\circ - \\cos 60^\\circ = 2 - \\tfrac{1}{2} = \\tfrac{3}{2}, \\qquad \\sin 60^\\circ\\,\\tan 60^\\circ = \\frac{\\sqrt{3}}{2}\\cdot \\sqrt{3} = \\tfrac{3}{2}",
          "explanation": "Both sides give $\\tfrac{3}{2}$ at $60^\\circ$, supporting the algebra.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the conclusion",
          "workingLatex": "\\sec\\theta - \\cos\\theta \\equiv \\sin\\theta\\,\\tan\\theta \\qquad \\text{(LHS} \\equiv \\text{RHS, QED)}",
          "explanation": "The left side has been transformed into $\\sin\\theta\\,\\tan\\theta$ using the definition of secant, the Pythagorean identity and the definition of tangent.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sec\\theta-\\cos\\theta=\\dfrac{1}{\\cos\\theta}-\\cos\\theta=\\dfrac{1-\\cos^2\\theta}{\\cos\\theta}=\\dfrac{\\sin^2\\theta}{\\cos\\theta}=\\sin\\theta\\tan\\theta$, so $\\sec\\theta-\\cos\\theta\\equiv\\sin\\theta\\,\\tan\\theta$."
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q037",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "proof",
    "tags": [
      "identities",
      "cosec",
      "combining fractions"
    ],
    "questionText": "Prove that $\\dfrac{1}{1+\\cos\\theta} + \\dfrac{1}{1-\\cos\\theta} \\equiv 2\\operatorname{cosec}^2\\theta$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the identity and strategy",
          "workingLatex": "\\text{Prove: } \\frac{1}{1+\\cos\\theta} + \\frac{1}{1-\\cos\\theta} \\equiv 2\\operatorname{cosec}^2\\theta \\qquad \\text{Start with LHS}",
          "explanation": "The left side is a sum of two fractions, so we combine them over a common denominator and simplify towards $2\\operatorname{cosec}^2\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose a common denominator",
          "workingLatex": "\\text{common denominator} = (1+\\cos\\theta)(1-\\cos\\theta)",
          "explanation": "The product of the two different denominators is the natural common denominator for adding the fractions.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Combine over that denominator",
          "workingLatex": "\\frac{1}{1+\\cos\\theta} + \\frac{1}{1-\\cos\\theta} = \\frac{(1-\\cos\\theta) + (1+\\cos\\theta)}{(1+\\cos\\theta)(1-\\cos\\theta)}",
          "explanation": "Each numerator is multiplied by the other bracket, then the two results are added over the shared denominator.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the numerator",
          "workingLatex": "(1-\\cos\\theta) + (1+\\cos\\theta) = 2",
          "explanation": "The $-\\cos\\theta$ and $+\\cos\\theta$ cancel, leaving a simple numerator of $2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Expand the denominator",
          "workingLatex": "(1+\\cos\\theta)(1-\\cos\\theta) = 1 - \\cos^2\\theta",
          "explanation": "The denominator is a difference of two squares, so it multiplies out to $1-\\cos^2\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Assemble the single fraction",
          "workingLatex": "= \\frac{2}{1 - \\cos^2\\theta}",
          "explanation": "Putting the simplified numerator over the expanded denominator gives one tidy fraction.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Apply the Pythagorean identity",
          "workingLatex": "1 - \\cos^2\\theta \\equiv \\sin^2\\theta",
          "explanation": "The denominator is exactly $\\sin^2\\theta$ by the rearranged Pythagorean identity, which introduces sine.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute the denominator",
          "workingLatex": "= \\frac{2}{\\sin^2\\theta}",
          "explanation": "Replacing $1-\\cos^2\\theta$ with $\\sin^2\\theta$ gives $\\dfrac{2}{\\sin^2\\theta}$, a multiple of a reciprocal square.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Recognise cosec^2",
          "workingLatex": "\\frac{2}{\\sin^2\\theta} = 2\\cdot \\frac{1}{\\sin^2\\theta} = 2\\operatorname{cosec}^2\\theta",
          "explanation": "Since $\\dfrac{1}{\\sin^2\\theta}=\\operatorname{cosec}^2\\theta$, the fraction is $2\\operatorname{cosec}^2\\theta$, the right-hand side.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check at a convenient angle",
          "workingLatex": "\\frac{1}{1+0} + \\frac{1}{1-0} = 2, \\qquad 2\\operatorname{cosec}^2 90^\\circ = 2\\cdot 1^2 = 2",
          "explanation": "At $90^\\circ$, where $\\cos\\theta=0$ and $\\operatorname{cosec}\\theta=1$, both sides equal $2$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the conclusion",
          "workingLatex": "\\frac{1}{1+\\cos\\theta} + \\frac{1}{1-\\cos\\theta} \\equiv 2\\operatorname{cosec}^2\\theta \\qquad \\text{(LHS} \\equiv \\text{RHS, QED)}",
          "explanation": "Combining the fractions and using the Pythagorean identity turns the left side into $2\\operatorname{cosec}^2\\theta$, proving the identity.",
          "diagram": null
        }
      ],
      "finalAnswer": "Combining gives $\\dfrac{2}{(1+\\cos\\theta)(1-\\cos\\theta)}=\\dfrac{2}{1-\\cos^2\\theta}=\\dfrac{2}{\\sin^2\\theta}=2\\operatorname{cosec}^2\\theta$, so the identity holds."
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q038",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "proof",
    "tags": [
      "identities",
      "cot",
      "tan",
      "sec",
      "cosec"
    ],
    "questionText": "Prove that $\\cot\\theta + \\tan\\theta \\equiv \\sec\\theta\\,\\operatorname{cosec}\\theta$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the identity and strategy",
          "workingLatex": "\\text{Prove: } \\cot\\theta + \\tan\\theta \\equiv \\sec\\theta\\,\\operatorname{cosec}\\theta \\qquad \\text{Start with LHS}",
          "explanation": "We convert both $\\cot\\theta$ and $\\tan\\theta$ into sine and cosine, add them, and simplify towards $\\sec\\theta\\,\\operatorname{cosec}\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the two definitions",
          "workingLatex": "\\cot\\theta = \\frac{\\cos\\theta}{\\sin\\theta}, \\qquad \\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta}",
          "explanation": "Both functions are ratios of sine and cosine, so writing them out prepares the sum for a common denominator.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute into the LHS",
          "workingLatex": "\\cot\\theta + \\tan\\theta = \\frac{\\cos\\theta}{\\sin\\theta} + \\frac{\\sin\\theta}{\\cos\\theta}",
          "explanation": "The left side is now a sum of two fractions with denominators $\\sin\\theta$ and $\\cos\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Combine over a common denominator",
          "workingLatex": "= \\frac{\\cos\\theta\\cdot \\cos\\theta + \\sin\\theta\\cdot \\sin\\theta}{\\sin\\theta\\,\\cos\\theta}",
          "explanation": "The common denominator is $\\sin\\theta\\cos\\theta$; each numerator is multiplied by the missing factor.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the numerator",
          "workingLatex": "= \\frac{\\cos^2\\theta + \\sin^2\\theta}{\\sin\\theta\\,\\cos\\theta}",
          "explanation": "The numerator collects into $\\cos^2\\theta+\\sin^2\\theta$, which is ripe for the Pythagorean identity.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply the Pythagorean identity",
          "workingLatex": "\\cos^2\\theta + \\sin^2\\theta \\equiv 1",
          "explanation": "The numerator is exactly $1$ by the fundamental identity, which dramatically simplifies the fraction.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute the numerator",
          "workingLatex": "= \\frac{1}{\\sin\\theta\\,\\cos\\theta}",
          "explanation": "With numerator $1$, the whole side is $\\dfrac{1}{\\sin\\theta\\cos\\theta}$, a single reciprocal product.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Split into a product of reciprocals",
          "workingLatex": "\\frac{1}{\\sin\\theta\\,\\cos\\theta} = \\frac{1}{\\sin\\theta}\\cdot \\frac{1}{\\cos\\theta}",
          "explanation": "A reciprocal of a product is the product of the reciprocals, which separates the sine and cosine parts.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Recognise cosec and sec",
          "workingLatex": "\\frac{1}{\\sin\\theta}\\cdot \\frac{1}{\\cos\\theta} = \\operatorname{cosec}\\theta\\,\\sec\\theta = \\sec\\theta\\,\\operatorname{cosec}\\theta",
          "explanation": "Each reciprocal is a named function: $\\dfrac{1}{\\sin\\theta}=\\operatorname{cosec}\\theta$ and $\\dfrac{1}{\\cos\\theta}=\\sec\\theta$, giving the right-hand side.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check at a convenient angle",
          "workingLatex": "\\cot 45^\\circ + \\tan 45^\\circ = 1 + 1 = 2, \\qquad \\sec 45^\\circ\\,\\operatorname{cosec}45^\\circ = \\sqrt{2}\\cdot \\sqrt{2} = 2",
          "explanation": "At $45^\\circ$ both sides equal $2$, supporting the identity.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the conclusion",
          "workingLatex": "\\cot\\theta + \\tan\\theta \\equiv \\sec\\theta\\,\\operatorname{cosec}\\theta \\qquad \\text{(LHS} \\equiv \\text{RHS, QED)}",
          "explanation": "Adding the two ratios and using $\\sin^2\\theta+\\cos^2\\theta\\equiv1$ turns the left side into $\\sec\\theta\\,\\operatorname{cosec}\\theta$, proving the identity.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\cot\\theta+\\tan\\theta=\\dfrac{\\cos^2\\theta+\\sin^2\\theta}{\\sin\\theta\\cos\\theta}=\\dfrac{1}{\\sin\\theta\\cos\\theta}=\\operatorname{cosec}\\theta\\,\\sec\\theta$, so $\\cot\\theta+\\tan\\theta\\equiv\\sec\\theta\\,\\operatorname{cosec}\\theta$."
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q039",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "proof",
    "tags": [
      "identities",
      "cosec",
      "cot",
      "pythagorean identity"
    ],
    "questionText": "Prove that $\\operatorname{cosec}\\theta - \\sin\\theta \\equiv \\cos\\theta\\,\\cot\\theta$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the identity and strategy",
          "workingLatex": "\\text{Prove: } \\operatorname{cosec}\\theta - \\sin\\theta \\equiv \\cos\\theta\\,\\cot\\theta \\qquad \\text{Start with LHS}",
          "explanation": "We rewrite $\\operatorname{cosec}\\theta$ as $\\dfrac{1}{\\sin\\theta}$ and combine with $\\sin\\theta$, aiming for $\\cos\\theta\\,\\cot\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the definition of cosec",
          "workingLatex": "\\operatorname{cosec}\\theta = \\frac{1}{\\sin\\theta}",
          "explanation": "Cosecant is the reciprocal of sine, so the left side becomes a difference of sine terms.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute into the LHS",
          "workingLatex": "\\operatorname{cosec}\\theta - \\sin\\theta = \\frac{1}{\\sin\\theta} - \\sin\\theta",
          "explanation": "Now both terms are expressed through sine, ready to be combined over one denominator.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Combine over a common denominator",
          "workingLatex": "= \\frac{1 - \\sin^2\\theta}{\\sin\\theta}",
          "explanation": "Writing $\\sin\\theta$ as $\\dfrac{\\sin^2\\theta}{\\sin\\theta}$ lets the two terms merge into a single fraction.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply the Pythagorean identity",
          "workingLatex": "1 - \\sin^2\\theta \\equiv \\cos^2\\theta",
          "explanation": "The numerator is the rearranged Pythagorean identity, which introduces cosine into the expression.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute the numerator",
          "workingLatex": "= \\frac{\\cos^2\\theta}{\\sin\\theta}",
          "explanation": "Replacing $1-\\sin^2\\theta$ with $\\cos^2\\theta$ gives a fraction we can split into a product.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Split into a product",
          "workingLatex": "\\frac{\\cos^2\\theta}{\\sin\\theta} = \\cos\\theta\\cdot \\frac{\\cos\\theta}{\\sin\\theta}",
          "explanation": "Peeling off one factor of $\\cos\\theta$ leaves $\\dfrac{\\cos\\theta}{\\sin\\theta}$, which is a cotangent.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Recall the definition of cot",
          "workingLatex": "\\frac{\\cos\\theta}{\\sin\\theta} = \\cot\\theta",
          "explanation": "By definition $\\cot\\theta=\\dfrac{\\cos\\theta}{\\sin\\theta}$, so the second factor is $\\cot\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Combine to the RHS",
          "workingLatex": "\\cos\\theta\\cdot \\frac{\\cos\\theta}{\\sin\\theta} = \\cos\\theta\\,\\cot\\theta",
          "explanation": "The product is exactly $\\cos\\theta\\,\\cot\\theta$, the right-hand side.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check at a convenient angle",
          "workingLatex": "\\operatorname{cosec}30^\\circ - \\sin 30^\\circ = 2 - \\tfrac{1}{2} = \\tfrac{3}{2}, \\qquad \\cos 30^\\circ\\,\\cot 30^\\circ = \\frac{\\sqrt{3}}{2}\\cdot \\sqrt{3} = \\tfrac{3}{2}",
          "explanation": "Both sides equal $\\tfrac{3}{2}$ at $30^\\circ$, supporting the proof.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the conclusion",
          "workingLatex": "\\operatorname{cosec}\\theta - \\sin\\theta \\equiv \\cos\\theta\\,\\cot\\theta \\qquad \\text{(LHS} \\equiv \\text{RHS, QED)}",
          "explanation": "Using the definition of cosecant, the Pythagorean identity and the definition of cotangent, the left side becomes $\\cos\\theta\\,\\cot\\theta$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\operatorname{cosec}\\theta-\\sin\\theta=\\dfrac{1}{\\sin\\theta}-\\sin\\theta=\\dfrac{1-\\sin^2\\theta}{\\sin\\theta}=\\dfrac{\\cos^2\\theta}{\\sin\\theta}=\\cos\\theta\\cot\\theta$, so $\\operatorname{cosec}\\theta-\\sin\\theta\\equiv\\cos\\theta\\,\\cot\\theta$."
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q040",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "simplify",
      "tan",
      "cosec",
      "sec"
    ],
    "questionText": "Simplify fully $\\tan\\theta\\,\\operatorname{cosec}\\theta$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the expression and strategy",
          "workingLatex": "\\tan\\theta\\,\\operatorname{cosec}\\theta",
          "explanation": "We simplify by writing each function in terms of sine and cosine, then cancelling the common factor.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the definition of tan",
          "workingLatex": "\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta}",
          "explanation": "Tangent is sine over cosine, the standard way to express it through the basic ratios.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall the definition of cosec",
          "workingLatex": "\\operatorname{cosec}\\theta = \\frac{1}{\\sin\\theta}",
          "explanation": "Cosecant is the reciprocal of sine, contributing a $\\sin\\theta$ in the denominator that should cancel.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute both definitions",
          "workingLatex": "\\tan\\theta\\,\\operatorname{cosec}\\theta = \\frac{\\sin\\theta}{\\cos\\theta}\\cdot \\frac{1}{\\sin\\theta}",
          "explanation": "Replacing both functions writes the product using only sine and cosine.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Multiply the fractions",
          "workingLatex": "= \\frac{\\sin\\theta}{\\cos\\theta\\,\\sin\\theta}",
          "explanation": "Multiplying numerators and denominators gathers everything into one fraction, ready to cancel.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Identify the common factor",
          "workingLatex": "\\frac{\\sin\\theta}{\\cos\\theta\\,\\sin\\theta}, \\qquad \\sin\\theta \\neq 0",
          "explanation": "A factor of $\\sin\\theta$ appears in both numerator and denominator, and it may be cancelled wherever $\\sin\\theta\\neq0$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Cancel the common sine",
          "workingLatex": "= \\frac{1}{\\cos\\theta}",
          "explanation": "Cancelling the shared $\\sin\\theta$ leaves $\\dfrac{1}{\\cos\\theta}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Recognise sec",
          "workingLatex": "\\frac{1}{\\cos\\theta} = \\sec\\theta",
          "explanation": "By definition $\\sec\\theta=\\dfrac{1}{\\cos\\theta}$, so the expression is simply $\\sec\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check at a convenient angle",
          "workingLatex": "\\tan 60^\\circ\\,\\operatorname{cosec}60^\\circ = \\sqrt{3}\\cdot \\frac{2}{\\sqrt{3}} = 2, \\qquad \\sec 60^\\circ = 2",
          "explanation": "At $60^\\circ$ both the original expression and $\\sec\\theta$ equal $2$, confirming the result.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the result",
          "workingLatex": "\\tan\\theta\\,\\operatorname{cosec}\\theta = \\sec\\theta",
          "explanation": "The expression simplifies fully to $\\sec\\theta$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\tan\\theta\\,\\operatorname{cosec}\\theta=\\dfrac{\\sin\\theta}{\\cos\\theta}\\cdot\\dfrac{1}{\\sin\\theta}=\\dfrac{1}{\\cos\\theta}=\\sec\\theta$."
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q041",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "reciprocal trig",
      "sec",
      "solving equations",
      "degrees"
    ],
    "questionText": "Solve the equation $\\sec x = 2$ for $0^\\circ \\le x < 360^\\circ$, giving all solutions in the interval.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rewrite secant using its definition",
          "workingLatex": "\\sec x = \\frac{1}{\\cos x}",
          "explanation": "Secant is defined as the reciprocal of cosine, so the fastest route to a solution is to turn the secant equation back into a cosine equation, where the standard exact angles are familiar.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Form a cosine equation",
          "workingLatex": "\\frac{1}{\\cos x} = 2 \\;\\Rightarrow\\; \\cos x = \\frac{1}{2}",
          "explanation": "Setting the definition equal to the given value and taking the reciprocal of both sides gives $\\cos x = \\tfrac12$, a standard equation we can solve directly.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Check that solutions can exist",
          "workingLatex": "\\left|\\tfrac{1}{2}\\right| \\le 1",
          "explanation": "Cosine only outputs values between $-1$ and $1$, so before solving we confirm the target $\\tfrac12$ lies in that range. It does, so real solutions exist.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the reference angle",
          "workingLatex": "\\cos 60^\\circ = \\tfrac{1}{2} \\;\\Rightarrow\\; \\text{reference angle} = 60^\\circ",
          "explanation": "The reference angle is the acute angle whose cosine has the same size. From the standard exact values, $\\cos 60^\\circ = \\tfrac12$, so $60^\\circ$ is our reference angle.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Decide which quadrants apply",
          "workingLatex": "\\cos x > 0 \\text{ in quadrants I and IV}",
          "explanation": "Because the cosine value is positive, $x$ must lie where cosine is positive. Using the CAST diagram, that is the first and fourth quadrants.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the first-quadrant solution",
          "workingLatex": "x = 60^\\circ",
          "explanation": "In the first quadrant the angle equals the reference angle directly, giving $x = 60^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the fourth-quadrant solution",
          "workingLatex": "x = 360^\\circ - 60^\\circ = 300^\\circ",
          "explanation": "In the fourth quadrant we measure back from a full turn, so we subtract the reference angle from $360^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Confirm both lie in the interval",
          "workingLatex": "0^\\circ \\le 60^\\circ, \\; 300^\\circ < 360^\\circ",
          "explanation": "The interval is $0^\\circ \\le x < 360^\\circ$; both angles satisfy it, so neither is rejected and no extra full-turn copies are needed.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check a solution in the original equation",
          "workingLatex": "\\sec 60^\\circ = \\frac{1}{\\cos 60^\\circ} = \\frac{1}{\\tfrac12} = 2",
          "explanation": "Substituting back confirms $\\sec 60^\\circ = 2$; the same holds at $300^\\circ$ since $\\cos 300^\\circ = \\tfrac12$ too. The solutions are valid.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the full solution set",
          "workingLatex": "x = 60^\\circ, \\; 300^\\circ",
          "explanation": "Collecting the valid answers gives the complete solution set in the required interval.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = 60^\\circ$ or $x = 300^\\circ$."
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
    "answerType": "numeric",
    "tags": [
      "reciprocal trig",
      "sec",
      "solving equations"
    ],
    "questionText": "Solve $\\sec x = -\\sqrt{2}$ for $0^\\circ \\le x \\le 360^\\circ$. Give all solutions in degrees.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rewrite secant using its definition",
          "workingLatex": "\\sec x = \\frac{1}{\\cos x}",
          "explanation": "Secant is the reciprocal of cosine, so we convert the equation into a cosine equation that uses the standard exact values.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Form a cosine equation",
          "workingLatex": "\\frac{1}{\\cos x} = -\\sqrt{2} \\;\\Rightarrow\\; \\cos x = -\\frac{1}{\\sqrt{2}} = -\\frac{\\sqrt{2}}{2}",
          "explanation": "Taking reciprocals of both sides gives $\\cos x = -\\tfrac{1}{\\sqrt2}$, which we rationalise to $-\\tfrac{\\sqrt2}{2}$ to compare with standard values.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Check that solutions can exist",
          "workingLatex": "\\left|-\\tfrac{\\sqrt{2}}{2}\\right| = \\tfrac{\\sqrt{2}}{2} \\approx 0.707 \\le 1",
          "explanation": "The required cosine has magnitude about $0.707$, which is within the range $[-1,1]$, so solutions do exist.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the reference angle",
          "workingLatex": "\\cos 45^\\circ = \\tfrac{\\sqrt{2}}{2} \\;\\Rightarrow\\; \\text{reference angle} = 45^\\circ",
          "explanation": "Ignoring the sign, the acute angle whose cosine is $\\tfrac{\\sqrt2}{2}$ is $45^\\circ$, so that is the reference angle.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Decide which quadrants apply",
          "workingLatex": "\\cos x < 0 \\text{ in quadrants II and III}",
          "explanation": "The cosine value is negative, and cosine is negative in the second and third quadrants, so the solutions live there.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the second-quadrant solution",
          "workingLatex": "x = 180^\\circ - 45^\\circ = 135^\\circ",
          "explanation": "In the second quadrant we subtract the reference angle from $180^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the third-quadrant solution",
          "workingLatex": "x = 180^\\circ + 45^\\circ = 225^\\circ",
          "explanation": "In the third quadrant we add the reference angle to $180^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Confirm both lie in the interval",
          "workingLatex": "0^\\circ \\le 135^\\circ, \\; 225^\\circ \\le 360^\\circ",
          "explanation": "Both angles fall inside the closed interval $0^\\circ \\le x \\le 360^\\circ$, so both are kept.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check a solution in the original equation",
          "workingLatex": "\\sec 135^\\circ = \\frac{1}{\\cos 135^\\circ} = \\frac{1}{-\\tfrac{\\sqrt{2}}{2}} = -\\frac{2}{\\sqrt{2}} = -\\sqrt{2}",
          "explanation": "Substituting back reproduces $-\\sqrt{2}$, confirming the working; $225^\\circ$ checks the same way since $\\cos 225^\\circ = -\\tfrac{\\sqrt2}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the full solution set",
          "workingLatex": "x = 135^\\circ, \\; 225^\\circ",
          "explanation": "These two angles are the complete set of solutions in the given interval.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = 135^\\circ$ or $x = 225^\\circ$."
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q043",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "reciprocal trig",
      "cosec",
      "solving equations"
    ],
    "questionText": "Solve $\\operatorname{cosec} x = 2$ for $0^\\circ \\le x < 360^\\circ$, giving every solution in the interval.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rewrite cosec using its definition",
          "workingLatex": "\\operatorname{cosec} x = \\frac{1}{\\sin x}",
          "explanation": "Cosec is the reciprocal of sine, so we turn the equation into a sine equation where the standard angles are known.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Form a sine equation",
          "workingLatex": "\\frac{1}{\\sin x} = 2 \\;\\Rightarrow\\; \\sin x = \\frac{1}{2}",
          "explanation": "Taking reciprocals of both sides gives $\\sin x = \\tfrac12$, a standard equation with well-known solutions.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Check that solutions can exist",
          "workingLatex": "\\left|\\tfrac{1}{2}\\right| \\le 1",
          "explanation": "Sine only takes values in $[-1,1]$, and $\\tfrac12$ lies in that range, so real solutions exist.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the reference angle",
          "workingLatex": "\\sin 30^\\circ = \\tfrac{1}{2} \\;\\Rightarrow\\; \\text{reference angle} = 30^\\circ",
          "explanation": "The acute angle whose sine is $\\tfrac12$ is $30^\\circ$, so that is our reference angle.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Decide which quadrants apply",
          "workingLatex": "\\sin x > 0 \\text{ in quadrants I and II}",
          "explanation": "The sine value is positive, and sine is positive in the first and second quadrants, so the solutions come from there.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the first-quadrant solution",
          "workingLatex": "x = 30^\\circ",
          "explanation": "In the first quadrant the angle is exactly the reference angle, giving $x = 30^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the second-quadrant solution",
          "workingLatex": "x = 180^\\circ - 30^\\circ = 150^\\circ",
          "explanation": "In the second quadrant we subtract the reference angle from $180^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Confirm both lie in the interval",
          "workingLatex": "0^\\circ \\le 30^\\circ, \\; 150^\\circ < 360^\\circ",
          "explanation": "Both angles satisfy $0^\\circ \\le x < 360^\\circ$, so both are valid solutions.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check a solution in the original equation",
          "workingLatex": "\\operatorname{cosec} 30^\\circ = \\frac{1}{\\sin 30^\\circ} = \\frac{1}{\\tfrac12} = 2",
          "explanation": "Substituting back gives $2$, confirming the answer; $150^\\circ$ works the same way because $\\sin 150^\\circ = \\tfrac12$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the full solution set",
          "workingLatex": "x = 30^\\circ, \\; 150^\\circ",
          "explanation": "These two angles are the complete set of solutions in the interval.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = 30^\\circ$ or $x = 150^\\circ$."
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
    "answerType": "numeric",
    "tags": [
      "reciprocal trig",
      "cot",
      "radians",
      "solving equations"
    ],
    "questionText": "Solve $\\cot x = \\sqrt{3}$ for $0 \\le x \\le 2\\pi$, giving your answers in radians in terms of $\\pi$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rewrite cot using its definition",
          "workingLatex": "\\cot x = \\frac{1}{\\tan x}",
          "explanation": "Cotangent is the reciprocal of tangent, so we convert the equation into a tangent equation whose standard radian angles are familiar.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Form a tangent equation",
          "workingLatex": "\\frac{1}{\\tan x} = \\sqrt{3} \\;\\Rightarrow\\; \\tan x = \\frac{1}{\\sqrt{3}}",
          "explanation": "Taking reciprocals of both sides turns the problem into $\\tan x = \\tfrac{1}{\\sqrt3}$. Tangent can take any real value, so we do not need a range check here.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the reference angle",
          "workingLatex": "\\tan \\tfrac{\\pi}{6} = \\frac{1}{\\sqrt{3}} \\;\\Rightarrow\\; \\text{reference angle} = \\tfrac{\\pi}{6}",
          "explanation": "The acute angle whose tangent is $\\tfrac{1}{\\sqrt3}$ is $\\tfrac{\\pi}{6}$, so that is our reference angle.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Decide which quadrants apply",
          "workingLatex": "\\tan x > 0 \\text{ in quadrants I and III}",
          "explanation": "The tangent value is positive, and tangent is positive in the first and third quadrants, so the solutions sit there.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the first-quadrant solution",
          "workingLatex": "x = \\tfrac{\\pi}{6}",
          "explanation": "In the first quadrant the angle equals the reference angle directly.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the third-quadrant solution",
          "workingLatex": "x = \\pi + \\tfrac{\\pi}{6} = \\tfrac{7\\pi}{6}",
          "explanation": "In the third quadrant we add $\\pi$ to the reference angle, using the fact that tangent has period $\\pi$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Confirm no further solutions in the interval",
          "workingLatex": "\\tfrac{7\\pi}{6} + \\pi = \\tfrac{13\\pi}{6} > 2\\pi",
          "explanation": "Adding another period $\\pi$ takes us past $2\\pi$, so there are no more solutions inside the interval.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Confirm both lie in the interval",
          "workingLatex": "0 \\le \\tfrac{\\pi}{6}, \\; \\tfrac{7\\pi}{6} \\le 2\\pi",
          "explanation": "Both radian values satisfy $0 \\le x \\le 2\\pi$, so both are kept.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check a solution in the original equation",
          "workingLatex": "\\cot \\tfrac{\\pi}{6} = \\frac{1}{\\tan \\tfrac{\\pi}{6}} = \\frac{1}{\\tfrac{1}{\\sqrt{3}}} = \\sqrt{3}",
          "explanation": "Substituting back returns $\\sqrt{3}$, confirming the answer; $\\tfrac{7\\pi}{6}$ has the same tangent, so it checks too.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the full solution set",
          "workingLatex": "x = \\tfrac{\\pi}{6}, \\; \\tfrac{7\\pi}{6}",
          "explanation": "These two radian values form the complete set of solutions in the interval.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = \\dfrac{\\pi}{6}$ or $x = \\dfrac{7\\pi}{6}$."
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q045",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "reciprocal trig",
      "cot",
      "solving equations"
    ],
    "questionText": "Solve $\\cot x = -1$ for $0^\\circ \\le x < 360^\\circ$. List all solutions.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rewrite cot using its definition",
          "workingLatex": "\\cot x = \\frac{1}{\\tan x}",
          "explanation": "Cotangent is the reciprocal of tangent, so we convert to a tangent equation whose standard angles we know.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Form a tangent equation",
          "workingLatex": "\\frac{1}{\\tan x} = -1 \\;\\Rightarrow\\; \\tan x = -1",
          "explanation": "Taking reciprocals of both sides gives $\\tan x = -1$; the reciprocal of $-1$ is again $-1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the reference angle",
          "workingLatex": "\\tan 45^\\circ = 1 \\;\\Rightarrow\\; \\text{reference angle} = 45^\\circ",
          "explanation": "Ignoring the sign, the acute angle whose tangent has size $1$ is $45^\\circ$, so that is the reference angle.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Decide which quadrants apply",
          "workingLatex": "\\tan x < 0 \\text{ in quadrants II and IV}",
          "explanation": "The tangent value is negative, and tangent is negative in the second and fourth quadrants, so the solutions come from there.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the second-quadrant solution",
          "workingLatex": "x = 180^\\circ - 45^\\circ = 135^\\circ",
          "explanation": "In the second quadrant we subtract the reference angle from $180^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the fourth-quadrant solution",
          "workingLatex": "x = 360^\\circ - 45^\\circ = 315^\\circ",
          "explanation": "In the fourth quadrant we subtract the reference angle from $360^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Note the period of tangent",
          "workingLatex": "135^\\circ + 180^\\circ = 315^\\circ",
          "explanation": "Tangent repeats every $180^\\circ$, and indeed the two solutions differ by exactly $180^\\circ$, which confirms we have found them all in one turn.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Confirm both lie in the interval",
          "workingLatex": "0^\\circ \\le 135^\\circ, \\; 315^\\circ < 360^\\circ",
          "explanation": "Both angles satisfy $0^\\circ \\le x < 360^\\circ$, so both are valid.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check a solution in the original equation",
          "workingLatex": "\\cot 135^\\circ = \\frac{1}{\\tan 135^\\circ} = \\frac{1}{-1} = -1",
          "explanation": "Substituting back returns $-1$, confirming the answer; $315^\\circ$ has the same tangent, so it checks too.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the full solution set",
          "workingLatex": "x = 135^\\circ, \\; 315^\\circ",
          "explanation": "These two angles are the complete set of solutions in the interval.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = 135^\\circ$ or $x = 315^\\circ$."
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q046",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "reciprocal trig",
      "cosec",
      "solving equations"
    ],
    "questionText": "Solve $\\operatorname{cosec} x = -\\dfrac{2}{\\sqrt{3}}$ for $0^\\circ \\le x < 360^\\circ$, giving all solutions in degrees.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rewrite cosec using its definition",
          "workingLatex": "\\operatorname{cosec} x = \\frac{1}{\\sin x}",
          "explanation": "Cosec is the reciprocal of sine, so we convert into a sine equation to use the standard exact values.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Form a sine equation",
          "workingLatex": "\\frac{1}{\\sin x} = -\\frac{2}{\\sqrt{3}} \\;\\Rightarrow\\; \\sin x = -\\frac{\\sqrt{3}}{2}",
          "explanation": "Taking reciprocals of both sides flips $-\\tfrac{2}{\\sqrt3}$ to $-\\tfrac{\\sqrt3}{2}$, giving a standard sine value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Check that solutions can exist",
          "workingLatex": "\\left|-\\tfrac{\\sqrt{3}}{2}\\right| = \\tfrac{\\sqrt{3}}{2} \\approx 0.866 \\le 1",
          "explanation": "The required sine has magnitude about $0.866$, which lies within $[-1,1]$, so solutions exist.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the reference angle",
          "workingLatex": "\\sin 60^\\circ = \\tfrac{\\sqrt{3}}{2} \\;\\Rightarrow\\; \\text{reference angle} = 60^\\circ",
          "explanation": "Ignoring the sign, the acute angle whose sine is $\\tfrac{\\sqrt3}{2}$ is $60^\\circ$, so that is the reference angle.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Decide which quadrants apply",
          "workingLatex": "\\sin x < 0 \\text{ in quadrants III and IV}",
          "explanation": "The sine value is negative, and sine is negative in the third and fourth quadrants, so the solutions live there.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the third-quadrant solution",
          "workingLatex": "x = 180^\\circ + 60^\\circ = 240^\\circ",
          "explanation": "In the third quadrant we add the reference angle to $180^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the fourth-quadrant solution",
          "workingLatex": "x = 360^\\circ - 60^\\circ = 300^\\circ",
          "explanation": "In the fourth quadrant we subtract the reference angle from $360^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Confirm both lie in the interval",
          "workingLatex": "0^\\circ \\le 240^\\circ, \\; 300^\\circ < 360^\\circ",
          "explanation": "Both angles satisfy $0^\\circ \\le x < 360^\\circ$, so both are kept.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check a solution in the original equation",
          "workingLatex": "\\operatorname{cosec} 240^\\circ = \\frac{1}{\\sin 240^\\circ} = \\frac{1}{-\\tfrac{\\sqrt{3}}{2}} = -\\frac{2}{\\sqrt{3}}",
          "explanation": "Substituting back reproduces $-\\tfrac{2}{\\sqrt3}$, confirming the answer; $300^\\circ$ checks the same way since $\\sin 300^\\circ = -\\tfrac{\\sqrt3}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the full solution set",
          "workingLatex": "x = 240^\\circ, \\; 300^\\circ",
          "explanation": "These two angles are the complete set of solutions in the interval.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = 240^\\circ$ or $x = 300^\\circ$."
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q047",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "reciprocal trig",
      "cot",
      "radians"
    ],
    "questionText": "Solve $\\cot x = 0$ for $0 \\le x \\le 2\\pi$, giving your answers in radians. Take care over where $\\cot x$ is defined.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the right form of cot",
          "workingLatex": "\\cot x = \\frac{1}{\\tan x} = \\frac{\\cos x}{\\sin x}",
          "explanation": "Writing $\\cot x = \\tfrac{1}{\\tan x}$ would force $\\tan x$ to be infinite, which is awkward. The form $\\tfrac{\\cos x}{\\sin x}$ is much cleaner for setting the expression to zero.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set the fraction equal to zero",
          "workingLatex": "\\frac{\\cos x}{\\sin x} = 0 \\;\\Rightarrow\\; \\cos x = 0",
          "explanation": "A fraction is zero exactly when its numerator is zero, so $\\cot x = 0$ requires $\\cos x = 0$. This is the key idea: cot is zero where cosine, not sine, vanishes.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Record the requirement on the denominator",
          "workingLatex": "\\sin x \\neq 0",
          "explanation": "For $\\cot x$ to be defined the denominator $\\sin x$ must be non-zero, so any candidate solution must also satisfy $\\sin x \\neq 0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Locate where cosine is zero",
          "workingLatex": "\\cos x = 0 \\text{ at } x = \\tfrac{\\pi}{2}, \\; \\tfrac{3\\pi}{2} \\text{ in } [0, 2\\pi]",
          "explanation": "Cosine is zero at the top and bottom of the unit circle, which in the interval $[0,2\\pi]$ occurs at $\\tfrac{\\pi}{2}$ and $\\tfrac{3\\pi}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the first solution",
          "workingLatex": "x = \\tfrac{\\pi}{2}",
          "explanation": "The first place cosine reaches zero in the interval is $\\tfrac{\\pi}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the second solution",
          "workingLatex": "x = \\tfrac{3\\pi}{2}",
          "explanation": "The second place cosine is zero in the interval is $\\tfrac{3\\pi}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check the denominator is non-zero",
          "workingLatex": "\\sin \\tfrac{\\pi}{2} = 1 \\neq 0, \\quad \\sin \\tfrac{3\\pi}{2} = -1 \\neq 0",
          "explanation": "At both angles the sine is $\\pm 1$, so the denominator is non-zero and $\\cot x$ is genuinely defined there. Neither solution is rejected.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Confirm both lie in the interval",
          "workingLatex": "0 \\le \\tfrac{\\pi}{2}, \\; \\tfrac{3\\pi}{2} \\le 2\\pi",
          "explanation": "Both radian values fall inside $0 \\le x \\le 2\\pi$, so both are kept.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check the solutions in the original equation",
          "workingLatex": "\\cot \\tfrac{\\pi}{2} = \\frac{\\cos \\tfrac{\\pi}{2}}{\\sin \\tfrac{\\pi}{2}} = \\frac{0}{1} = 0, \\quad \\cot \\tfrac{3\\pi}{2} = \\frac{0}{-1} = 0",
          "explanation": "Substituting back gives $0$ in both cases, confirming that these are the correct solutions.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the full solution set",
          "workingLatex": "x = \\tfrac{\\pi}{2}, \\; \\tfrac{3\\pi}{2}",
          "explanation": "These two radian values are the complete set of solutions in the interval.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = \\dfrac{\\pi}{2}$ or $x = \\dfrac{3\\pi}{2}$."
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q048",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "tags": [
      "reciprocal trig",
      "sec",
      "range",
      "no solution"
    ],
    "questionText": "Explain why the equation $\\sec x = \\tfrac{1}{2}$ has no solutions for $0^\\circ \\le x < 360^\\circ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rewrite secant using its definition",
          "workingLatex": "\\sec x = \\frac{1}{\\cos x}",
          "explanation": "As usual we express secant as the reciprocal of cosine, so the equation can be tested against what cosine is able to do.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Form the cosine equation",
          "workingLatex": "\\frac{1}{\\cos x} = \\tfrac{1}{2} \\;\\Rightarrow\\; \\cos x = 2",
          "explanation": "Taking reciprocals of both sides gives $\\cos x = 2$; this is the value cosine would have to reach.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall the range of cosine",
          "workingLatex": "-1 \\le \\cos x \\le 1",
          "explanation": "Cosine is always between $-1$ and $1$ for every real angle $x$; this bound is the heart of the argument.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compare the required value with the range",
          "workingLatex": "\\cos x = 2 > 1",
          "explanation": "The value $2$ lies outside the interval $[-1,1]$, so no angle can have a cosine of $2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Conclude cos x = 2 is impossible",
          "workingLatex": "\\cos x = 2 \\text{ has no real solution}",
          "explanation": "Since cosine can never exceed $1$, the equation $\\cos x = 2$ has no solutions at all, in any interval.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Look at it through the range of secant",
          "workingLatex": "|\\cos x| \\le 1 \\;\\Rightarrow\\; \\left|\\frac{1}{\\cos x}\\right| \\ge 1 \\;\\Rightarrow\\; |\\sec x| \\ge 1",
          "explanation": "Because cosine has magnitude at most $1$, its reciprocal has magnitude at least $1$. This gives the useful fact that $|\\sec x|$ is always $\\ge 1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the range restriction on secant",
          "workingLatex": "\\sec x \\le -1 \\;\\text{ or }\\; \\sec x \\ge 1",
          "explanation": "Secant never takes any value strictly between $-1$ and $1$; its outputs sit outside that gap.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare the target with that restriction",
          "workingLatex": "\\left|\\tfrac{1}{2}\\right| = \\tfrac{1}{2} < 1",
          "explanation": "The target value $\\tfrac12$ has magnitude less than $1$, so it falls inside the forbidden gap and cannot be a secant value.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Note the interval does not matter",
          "workingLatex": "\\text{no } x \\text{ works, so none in } 0^\\circ \\le x < 360^\\circ",
          "explanation": "Since there is no solution for any $x$ at all, there is certainly none in the stated interval; restricting the interval cannot create a solution.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the conclusion",
          "workingLatex": "\\sec x = \\tfrac{1}{2} \\text{ has no solutions}",
          "explanation": "Both viewpoints agree: because $|\\sec x| \\ge 1$ always, the equation $\\sec x = \\tfrac12$ has no solutions in the given interval.",
          "diagram": null
        }
      ],
      "finalAnswer": "There are no solutions. Rearranging gives $\\cos x = 2$, which is impossible since $-1 \\le \\cos x \\le 1$. Equivalently $|\\sec x| \\ge 1$ for all $x$, so $\\sec x$ can never equal $\\tfrac12$."
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q049",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "reciprocal trig",
      "sec",
      "inverse trig",
      "solving equations"
    ],
    "questionText": "Solve $\\sec x = 4$ for $0^\\circ \\le x < 360^\\circ$, giving your answers to one decimal place.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rewrite secant using its definition",
          "workingLatex": "\\sec x = \\frac{1}{\\cos x}",
          "explanation": "Secant is the reciprocal of cosine, so we convert the equation into one for cosine.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Form a cosine equation",
          "workingLatex": "\\frac{1}{\\cos x} = 4 \\;\\Rightarrow\\; \\cos x = \\frac{1}{4} = 0.25",
          "explanation": "Taking reciprocals of both sides gives $\\cos x = 0.25$; this is not a standard exact angle, so we will use the inverse cosine.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Check that solutions can exist",
          "workingLatex": "\\left|0.25\\right| \\le 1",
          "explanation": "The value $0.25$ lies within $[-1,1]$, so real solutions exist.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the principal value with arccos",
          "workingLatex": "x = \\arccos(0.25) \\approx 75.5^\\circ",
          "explanation": "The inverse cosine returns the principal value, an angle in $[0^\\circ,180^\\circ]$. Here $\\arccos(0.25) \\approx 75.5^\\circ$ to one decimal place.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret the principal value",
          "workingLatex": "75.5^\\circ \\in \\text{quadrant I}",
          "explanation": "Since $75.5^\\circ$ is acute it lies in the first quadrant, giving our first solution and also serving as the reference angle.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Decide which quadrants apply",
          "workingLatex": "\\cos x > 0 \\text{ in quadrants I and IV}",
          "explanation": "The cosine value is positive, and cosine is positive in the first and fourth quadrants, so there is a second solution in quadrant IV.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the first-quadrant solution",
          "workingLatex": "x \\approx 75.5^\\circ",
          "explanation": "The first-quadrant solution is the principal value itself.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the fourth-quadrant solution",
          "workingLatex": "x = 360^\\circ - 75.5^\\circ = 284.5^\\circ",
          "explanation": "In the fourth quadrant we subtract the reference angle from $360^\\circ$, giving about $284.5^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Confirm both lie in the interval",
          "workingLatex": "0^\\circ \\le 75.5^\\circ, \\; 284.5^\\circ < 360^\\circ",
          "explanation": "Both angles satisfy $0^\\circ \\le x < 360^\\circ$, so both are kept.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check a solution in the original equation",
          "workingLatex": "\\sec 75.5^\\circ = \\frac{1}{\\cos 75.5^\\circ} \\approx \\frac{1}{0.25} = 4",
          "explanation": "Substituting back gives approximately $4$, confirming the answer; $284.5^\\circ$ checks the same way since it has the same cosine.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the full solution set",
          "workingLatex": "x \\approx 75.5^\\circ, \\; 284.5^\\circ",
          "explanation": "These two angles, to one decimal place, are the complete set of solutions in the interval.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x \\approx 75.5^\\circ$ or $x \\approx 284.5^\\circ$."
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
    "answerType": "numeric",
    "tags": [
      "reciprocal trig",
      "cosec",
      "inverse trig",
      "radians"
    ],
    "questionText": "Solve $\\operatorname{cosec} x = 3$ for $0 \\le x \\le 2\\pi$, giving your answers in radians to three decimal places.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rewrite cosec using its definition",
          "workingLatex": "\\operatorname{cosec} x = \\frac{1}{\\sin x}",
          "explanation": "Cosec is the reciprocal of sine, so we convert the equation into one for sine.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Form a sine equation",
          "workingLatex": "\\frac{1}{\\sin x} = 3 \\;\\Rightarrow\\; \\sin x = \\frac{1}{3}",
          "explanation": "Taking reciprocals of both sides gives $\\sin x = \\tfrac13$; this is not a standard exact angle, so we will use the inverse sine.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Check that solutions can exist",
          "workingLatex": "\\left|\\tfrac{1}{3}\\right| \\le 1",
          "explanation": "The value $\\tfrac13$ lies within $[-1,1]$, so real solutions exist.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the principal value with arcsin",
          "workingLatex": "x = \\arcsin\\!\\left(\\tfrac{1}{3}\\right) \\approx 0.340",
          "explanation": "The inverse sine returns the principal value, an angle in $[-\\tfrac{\\pi}{2},\\tfrac{\\pi}{2}]$. Here $\\arcsin(\\tfrac13) \\approx 0.340$ radians to three decimal places.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret the principal value",
          "workingLatex": "0.340 \\in \\text{quadrant I}",
          "explanation": "Since $0.340$ radians is a positive acute angle, it lies in the first quadrant, giving our first solution and the reference angle.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Decide which quadrants apply",
          "workingLatex": "\\sin x > 0 \\text{ in quadrants I and II}",
          "explanation": "The sine value is positive, and sine is positive in the first and second quadrants, so there is a second solution in quadrant II.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the first-quadrant solution",
          "workingLatex": "x \\approx 0.340",
          "explanation": "The first-quadrant solution is the principal value itself.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the second-quadrant solution",
          "workingLatex": "x = \\pi - 0.340 \\approx 2.802",
          "explanation": "In the second quadrant we subtract the reference angle from $\\pi$, giving about $2.802$ radians.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Confirm both lie in the interval",
          "workingLatex": "0 \\le 0.340, \\; 2.802 \\le 2\\pi",
          "explanation": "Both radian values satisfy $0 \\le x \\le 2\\pi$ (note $2\\pi \\approx 6.283$), so both are kept.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check a solution in the original equation",
          "workingLatex": "\\operatorname{cosec}(0.340) = \\frac{1}{\\sin(0.340)} \\approx \\frac{1}{0.333} \\approx 3",
          "explanation": "Substituting back gives approximately $3$, confirming the answer; $2.802$ checks the same way since it has the same sine.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the full solution set",
          "workingLatex": "x \\approx 0.340, \\; 2.802",
          "explanation": "These two radian values, to three decimal places, are the complete set of solutions in the interval.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x \\approx 0.340$ or $x \\approx 2.802$ (radians)."
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q051",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "solving equations",
      "sec",
      "quadratic"
    ],
    "questionText": "Solve the equation $\\tan^2 x = 3\\sec x - 3$ for $0 \\le x < 360^\\circ$, giving all solutions in degrees.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the equation and interval",
          "workingLatex": "\\tan^2 x = 3\\sec x - 3, \\qquad 0 \\le x < 360^\\circ",
          "explanation": "The equation mixes $\\tan^2 x$ with $\\sec x$. To solve it we first turn it into a single trigonometric ratio, and the Pythagorean identity linking $\\tan$ and $\\sec$ is the tool for that.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the relevant Pythagorean identity",
          "workingLatex": "1 + \\tan^2 x \\equiv \\sec^2 x \\;\\Rightarrow\\; \\tan^2 x = \\sec^2 x - 1",
          "explanation": "Since only $\\tan^2 x$ appears (not $\\tan x$ on its own), we can replace it entirely using $1+\\tan^2 x \\equiv \\sec^2 x$. Rearranging gives $\\tan^2 x$ in terms of $\\sec x$, so the whole equation will be about $\\sec x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute to get an equation in sec only",
          "workingLatex": "\\sec^2 x - 1 = 3\\sec x - 3",
          "explanation": "Replacing $\\tan^2 x$ by $\\sec^2 x - 1$ leaves every term written with $\\sec x$. A single ratio is exactly what we need to form a quadratic.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rearrange to a quadratic equal to zero",
          "workingLatex": "\\sec^2 x - 3\\sec x + 2 = 0",
          "explanation": "Bringing all terms to one side and simplifying $-1+3$ produces a standard quadratic in $\\sec x$. Setting it equal to zero lets us factorise.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Introduce a substitution",
          "workingLatex": "u^2 - 3u + 2 = 0, \\quad \\text{where } u = \\sec x",
          "explanation": "Writing $u = \\sec x$ makes the structure obvious: it is just an ordinary quadratic, which we can factorise like any other.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Factorise the quadratic",
          "workingLatex": "(u - 1)(u - 2) = 0",
          "explanation": "We need two numbers multiplying to $2$ and adding to $-3$; those are $-1$ and $-2$. This factorisation gives the two possible values of $u$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Read off the two roots",
          "workingLatex": "u = 1 \\quad \\text{or} \\quad u = 2",
          "explanation": "Each bracket set to zero gives one root. These are the two candidate values of $\\sec x$ that we now test and solve.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Return to sec x and check attainability",
          "workingLatex": "\\sec x = 1 \\;\\Rightarrow\\; \\cos x = 1, \\qquad \\sec x = 2 \\;\\Rightarrow\\; \\cos x = \\tfrac{1}{2}",
          "explanation": "Because $\\sec x = \\tfrac{1}{\\cos x}$, we invert each value to get $\\cos x$. Both $1$ and $\\tfrac12$ satisfy $|\\cos x| \\le 1$, so both roots are attainable and neither is rejected.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solve cos x = 1",
          "workingLatex": "\\cos x = 1 \\;\\Rightarrow\\; x = 0^\\circ",
          "explanation": "Cosine equals $1$ only at the start of the cycle. Within $0 \\le x < 360^\\circ$ the single solution is $x = 0^\\circ$ (the value $360^\\circ$ is excluded by the interval).",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Find the base angle for cos x = 1/2",
          "workingLatex": "\\cos^{-1}\\left(\\tfrac{1}{2}\\right) = 60^\\circ",
          "explanation": "The acute angle whose cosine is $\\tfrac12$ is $60^\\circ$. This base angle generates every solution in the interval once we account for the quadrants where cosine is positive.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Find all angles with cos x = 1/2",
          "workingLatex": "x = 60^\\circ \\quad \\text{or} \\quad x = 360^\\circ - 60^\\circ = 300^\\circ",
          "explanation": "Cosine is positive in the first and fourth quadrants, so alongside $60^\\circ$ we also get $360^\\circ - 60^\\circ = 300^\\circ$. Both lie inside the interval.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Collect the full solution set",
          "workingLatex": "x = 0^\\circ,\\; 60^\\circ,\\; 300^\\circ",
          "explanation": "Gathering the solution from each root gives three angles in total. This is the complete set for $0 \\le x < 360^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Verify a solution in the original equation",
          "workingLatex": "\\tan^2 60^\\circ = (\\sqrt{3})^2 = 3, \\qquad 3\\sec 60^\\circ - 3 = 3(2) - 3 = 3",
          "explanation": "Substituting $x = 60^\\circ$ back into the untouched equation gives $3$ on each side, confirming the identity work introduced no errors.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the final answer",
          "workingLatex": "x = 0^\\circ,\\; 60^\\circ,\\; 300^\\circ",
          "explanation": "These are all the solutions in the required interval, each of which satisfies the original equation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = 0^\\circ,\\ 60^\\circ,\\ 300^\\circ$."
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q052",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "solving equations",
      "cosec",
      "quadratic"
    ],
    "questionText": "Solve $2\\cot^2 x + 5\\operatorname{cosec} x = 10$ for $0 \\le x < 360^\\circ$, giving your answers to one decimal place.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the equation and note the domain",
          "workingLatex": "2\\cot^2 x + 5\\operatorname{cosec} x = 10, \\qquad 0 \\le x < 360^\\circ, \\;\\; \\sin x \\neq 0",
          "explanation": "The equation involves $\\cot^2 x$ and $\\operatorname{cosec} x$, both undefined where $\\sin x = 0$. We keep the interval in mind and aim to reduce everything to $\\operatorname{cosec} x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose the identity linking cot and cosec",
          "workingLatex": "1 + \\cot^2 x \\equiv \\operatorname{cosec}^2 x \\;\\Rightarrow\\; \\cot^2 x = \\operatorname{cosec}^2 x - 1",
          "explanation": "Because $\\cot^2 x$ appears, we swap it out using $1 + \\cot^2 x \\equiv \\operatorname{cosec}^2 x$. This is the correct Pythagorean identity for these two ratios and leaves only $\\operatorname{cosec} x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute into the equation",
          "workingLatex": "2\\left(\\operatorname{cosec}^2 x - 1\\right) + 5\\operatorname{cosec} x = 10",
          "explanation": "Replacing $\\cot^2 x$ makes the equation depend on a single ratio, $\\operatorname{cosec} x$, which is what we need to form a quadratic.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Expand and simplify",
          "workingLatex": "2\\operatorname{cosec}^2 x - 2 + 5\\operatorname{cosec} x = 10",
          "explanation": "Multiplying out the bracket prepares the expression so that all terms can be gathered onto one side.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rearrange to a quadratic equal to zero",
          "workingLatex": "2\\operatorname{cosec}^2 x + 5\\operatorname{cosec} x - 12 = 0",
          "explanation": "Moving the $10$ across and combining constants ($-2 - 10 = -12$) gives a standard quadratic in $\\operatorname{cosec} x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Introduce a substitution",
          "workingLatex": "2u^2 + 5u - 12 = 0, \\quad \\text{where } u = \\operatorname{cosec} x",
          "explanation": "Letting $u = \\operatorname{cosec} x$ shows this is just a quadratic to be factorised, keeping the algebra tidy.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Factorise the quadratic",
          "workingLatex": "(2u - 3)(u + 4) = 0",
          "explanation": "Splitting the middle term ($5u = 8u - 3u$) leads to this factorisation. A quick expansion confirms it returns $2u^2 + 5u - 12$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Read off the two roots",
          "workingLatex": "u = \\tfrac{3}{2} \\quad \\text{or} \\quad u = -4",
          "explanation": "Each factor set to zero gives one value of $\\operatorname{cosec} x$. These are the two cases to solve.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Convert to sine and check attainability",
          "workingLatex": "\\operatorname{cosec} x = \\tfrac{3}{2} \\Rightarrow \\sin x = \\tfrac{2}{3}, \\qquad \\operatorname{cosec} x = -4 \\Rightarrow \\sin x = -\\tfrac{1}{4}",
          "explanation": "Since $\\operatorname{cosec} x = \\tfrac{1}{\\sin x}$, we invert each value. Both $|\\tfrac23| \\le 1$ and $|-\\tfrac14| \\le 1$, so both are valid sines and neither root is rejected.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Solve sin x = 2/3",
          "workingLatex": "\\sin^{-1}\\left(\\tfrac{2}{3}\\right) = 41.8103^\\circ",
          "explanation": "The calculator gives the acute base angle. Sine is positive in the first and second quadrants, so we build both solutions from this angle.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "All angles for sin x = 2/3",
          "workingLatex": "x = 41.8^\\circ \\quad \\text{or} \\quad x = 180^\\circ - 41.8^\\circ = 138.2^\\circ",
          "explanation": "The second-quadrant partner is $180^\\circ$ minus the base angle. Both values lie in the interval, rounded to one decimal place.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Solve sin x = -1/4",
          "workingLatex": "\\sin^{-1}\\left(\\tfrac{1}{4}\\right) = 14.4775^\\circ \\;\\text{(acute reference angle)}",
          "explanation": "We take the acute angle from the positive value $\\tfrac14$ first, then place the solutions in the quadrants where sine is negative.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "All angles for sin x = -1/4",
          "workingLatex": "x = 180^\\circ + 14.4775^\\circ = 194.5^\\circ, \\qquad x = 360^\\circ - 14.4775^\\circ = 345.5^\\circ",
          "explanation": "Sine is negative in the third and fourth quadrants, giving $180^\\circ + \\text{ref}$ and $360^\\circ - \\text{ref}$. Both fall inside the interval.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Collect all solutions",
          "workingLatex": "x = 41.8^\\circ,\\; 138.2^\\circ,\\; 194.5^\\circ,\\; 345.5^\\circ",
          "explanation": "Combining the results from both roots gives four solutions in the interval.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Verify a solution",
          "workingLatex": "\\sin 41.8^\\circ \\approx \\tfrac{2}{3} \\Rightarrow \\cot^2 x = \\operatorname{cosec}^2 x - 1 = \\tfrac{9}{4} - 1 = \\tfrac{5}{4}; \\;\\; 2\\left(\\tfrac{5}{4}\\right) + 5\\left(\\tfrac{3}{2}\\right) = \\tfrac{5}{2} + \\tfrac{15}{2} = 10",
          "explanation": "Using the exact values behind $x \\approx 41.8^\\circ$, the left-hand side evaluates to $10$, matching the right-hand side and confirming the working.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "State the final answer",
          "workingLatex": "x = 41.8^\\circ,\\; 138.2^\\circ,\\; 194.5^\\circ,\\; 345.5^\\circ",
          "explanation": "These are all solutions in $0 \\le x < 360^\\circ$, to one decimal place.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = 41.8^\\circ,\\ 138.2^\\circ,\\ 194.5^\\circ,\\ 345.5^\\circ$ (to 1 d.p.)."
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
    "answerType": "numeric",
    "tags": [
      "solving equations",
      "tan",
      "quadratic"
    ],
    "questionText": "Solve $\\sec^2 x = 3 + \\tan x$ for $0 \\le x < 360^\\circ$. Give any non-exact answers to one decimal place.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the equation and interval",
          "workingLatex": "\\sec^2 x = 3 + \\tan x, \\qquad 0 \\le x < 360^\\circ",
          "explanation": "The equation contains $\\sec^2 x$ and $\\tan x$. Converting $\\sec^2 x$ into a $\\tan$ expression will collapse everything to a single ratio.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the Pythagorean identity",
          "workingLatex": "\\sec^2 x \\equiv 1 + \\tan^2 x",
          "explanation": "The identity $1 + \\tan^2 x \\equiv \\sec^2 x$ lets us replace $\\sec^2 x$ directly, leaving an equation entirely in $\\tan x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute into the equation",
          "workingLatex": "1 + \\tan^2 x = 3 + \\tan x",
          "explanation": "After the substitution every term is written with $\\tan x$, ready to be rearranged into a quadratic.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rearrange to a quadratic equal to zero",
          "workingLatex": "\\tan^2 x - \\tan x - 2 = 0",
          "explanation": "Collecting terms on one side ($1 - 3 = -2$) gives a clean quadratic in $\\tan x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Introduce a substitution",
          "workingLatex": "u^2 - u - 2 = 0, \\quad \\text{where } u = \\tan x",
          "explanation": "Setting $u = \\tan x$ exposes the ordinary quadratic beneath the trigonometry.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Factorise",
          "workingLatex": "(u - 2)(u + 1) = 0",
          "explanation": "Two numbers with product $-2$ and sum $-1$ are $-2$ and $+1$, giving this factorisation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Read off the roots",
          "workingLatex": "\\tan x = 2 \\quad \\text{or} \\quad \\tan x = -1",
          "explanation": "Each factor gives a value of $\\tan x$. Unlike $\\sec$ or $\\operatorname{cosec}$, the tangent can take any real value, so both roots are attainable with nothing to reject.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve tan x = 2",
          "workingLatex": "\\tan^{-1}(2) = 63.4^\\circ \\;\\text{(base angle)}",
          "explanation": "The calculator gives the first-quadrant base angle. Tangent is positive in the first and third quadrants, so the solutions are a half-turn apart.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "All angles for tan x = 2",
          "workingLatex": "x = 63.4^\\circ \\quad \\text{or} \\quad x = 63.4^\\circ + 180^\\circ = 243.4^\\circ",
          "explanation": "Because $\\tan$ has period $180^\\circ$, adding $180^\\circ$ to the base angle gives the third-quadrant solution. Both lie in the interval.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Solve tan x = -1",
          "workingLatex": "\\tan^{-1}(1) = 45^\\circ \\;\\text{(reference angle)}",
          "explanation": "Taking the acute reference angle from the positive value $1$, we then place solutions where tangent is negative.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "All angles for tan x = -1",
          "workingLatex": "x = 180^\\circ - 45^\\circ = 135^\\circ, \\qquad x = 360^\\circ - 45^\\circ = 315^\\circ",
          "explanation": "Tangent is negative in the second and fourth quadrants, giving $135^\\circ$ and $315^\\circ$; these are exact.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Collect all solutions",
          "workingLatex": "x = 63.4^\\circ,\\; 135^\\circ,\\; 243.4^\\circ,\\; 315^\\circ",
          "explanation": "Merging the two cases gives four solutions in the interval.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Verify a solution",
          "workingLatex": "\\tan 135^\\circ = -1: \\quad \\sec^2 135^\\circ = 1 + (-1)^2 = 2, \\qquad 3 + \\tan 135^\\circ = 3 + (-1) = 2",
          "explanation": "Substituting $x = 135^\\circ$ into the original equation gives $2$ on both sides, confirming the solution.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the final answer",
          "workingLatex": "x = 63.4^\\circ,\\; 135^\\circ,\\; 243.4^\\circ,\\; 315^\\circ",
          "explanation": "These four angles are the complete solution set for $0 \\le x < 360^\\circ$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = 63.4^\\circ,\\ 135^\\circ,\\ 243.4^\\circ,\\ 315^\\circ$ (non-exact values to 1 d.p.)."
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
    "answerType": "numeric",
    "tags": [
      "solving equations",
      "cosec",
      "reject root"
    ],
    "questionText": "Solve $2\\cot^2 x + 4 = 5\\operatorname{cosec} x$ for $0 \\le x < 360^\\circ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the equation and note the domain",
          "workingLatex": "2\\cot^2 x + 4 = 5\\operatorname{cosec} x, \\qquad 0 \\le x < 360^\\circ, \\;\\; \\sin x \\neq 0",
          "explanation": "The equation contains $\\cot^2 x$ and $\\operatorname{cosec} x$, so we will convert $\\cot^2 x$ to $\\operatorname{cosec} x$ using the matching Pythagorean identity.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose the identity",
          "workingLatex": "1 + \\cot^2 x \\equiv \\operatorname{cosec}^2 x \\;\\Rightarrow\\; \\cot^2 x = \\operatorname{cosec}^2 x - 1",
          "explanation": "Replacing $\\cot^2 x$ with $\\operatorname{cosec}^2 x - 1$ leaves a single ratio, $\\operatorname{cosec} x$, throughout the equation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute",
          "workingLatex": "2\\left(\\operatorname{cosec}^2 x - 1\\right) + 4 = 5\\operatorname{cosec} x",
          "explanation": "The substitution turns the equation into one purely about $\\operatorname{cosec} x$, which we can shape into a quadratic.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Expand and simplify",
          "workingLatex": "2\\operatorname{cosec}^2 x + 2 = 5\\operatorname{cosec} x",
          "explanation": "Expanding gives $2\\operatorname{cosec}^2 x - 2 + 4$, and $-2 + 4 = 2$, tidying the left-hand side.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rearrange to a quadratic equal to zero",
          "workingLatex": "2\\operatorname{cosec}^2 x - 5\\operatorname{cosec} x + 2 = 0",
          "explanation": "Moving the $5\\operatorname{cosec} x$ across sets the quadratic to zero, ready for factorising.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Introduce a substitution",
          "workingLatex": "2u^2 - 5u + 2 = 0, \\quad \\text{where } u = \\operatorname{cosec} x",
          "explanation": "The substitution $u = \\operatorname{cosec} x$ makes the quadratic structure explicit.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Factorise",
          "workingLatex": "(2u - 1)(u - 2) = 0",
          "explanation": "Splitting the middle term ($-5u = -u - 4u$) gives this factorisation, which expands back to $2u^2 - 5u + 2$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Read off the roots",
          "workingLatex": "u = \\tfrac{1}{2} \\quad \\text{or} \\quad u = 2",
          "explanation": "These are the two candidate values of $\\operatorname{cosec} x$. Each must now be tested against the possible range of $\\operatorname{cosec}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Reject the impossible root",
          "workingLatex": "\\operatorname{cosec} x = \\tfrac{1}{2} \\;\\Rightarrow\\; \\sin x = 2 \\;\\; (\\text{impossible, since } |\\sin x| \\le 1)",
          "explanation": "Because $\\operatorname{cosec} x = \\tfrac{1}{\\sin x}$, the value $\\tfrac12$ would need $\\sin x = 2$, which no angle achieves. Equivalently $|\\operatorname{cosec} x| \\ge 1$ always, so this root is rejected outright.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Keep the valid root",
          "workingLatex": "\\operatorname{cosec} x = 2 \\;\\Rightarrow\\; \\sin x = \\tfrac{1}{2}",
          "explanation": "The second root gives $\\sin x = \\tfrac12$, which satisfies $|\\sin x| \\le 1$, so it is genuine and we solve it.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Find the base angle",
          "workingLatex": "\\sin^{-1}\\left(\\tfrac{1}{2}\\right) = 30^\\circ",
          "explanation": "The acute angle whose sine is $\\tfrac12$ is $30^\\circ$, the reference angle for all solutions.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Find all angles with sin x = 1/2",
          "workingLatex": "x = 30^\\circ \\quad \\text{or} \\quad x = 180^\\circ - 30^\\circ = 150^\\circ",
          "explanation": "Sine is positive in the first and second quadrants, so the solutions are $30^\\circ$ and $180^\\circ - 30^\\circ = 150^\\circ$, both within the interval.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Verify a solution",
          "workingLatex": "\\sin 30^\\circ = \\tfrac{1}{2}: \\;\\; \\cot^2 30^\\circ = 3, \\;\\; 2(3) + 4 = 10, \\;\\; 5\\operatorname{cosec} 30^\\circ = 5(2) = 10",
          "explanation": "At $x = 30^\\circ$ both sides equal $10$, confirming the surviving root really does solve the original equation.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the final answer",
          "workingLatex": "x = 30^\\circ,\\; 150^\\circ",
          "explanation": "Only the root $\\operatorname{cosec} x = 2$ produced solutions; the rejected root contributed none.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = 30^\\circ,\\ 150^\\circ$. The root $\\operatorname{cosec} x = \\tfrac12$ is rejected because it needs $\\sin x = 2$, which is impossible."
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q055",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "exact",
    "tags": [
      "solving equations",
      "sec",
      "radians"
    ],
    "questionText": "Solve $2\\tan^2 x = 5\\sec x - 4$ for $0 \\le x \\le 2\\pi$, giving your answers in radians in terms of $\\pi$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the equation and interval",
          "workingLatex": "2\\tan^2 x = 5\\sec x - 4, \\qquad 0 \\le x \\le 2\\pi",
          "explanation": "The equation mixes $\\tan^2 x$ and $\\sec x$, so we convert the $\\tan^2 x$ term into $\\sec x$ using the Pythagorean identity and work in radians throughout.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the identity",
          "workingLatex": "1 + \\tan^2 x \\equiv \\sec^2 x \\;\\Rightarrow\\; \\tan^2 x = \\sec^2 x - 1",
          "explanation": "Only $\\tan^2 x$ appears, so it can be replaced wholesale using $1 + \\tan^2 x \\equiv \\sec^2 x$, leaving an equation in $\\sec x$ alone.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute",
          "workingLatex": "2\\left(\\sec^2 x - 1\\right) = 5\\sec x - 4",
          "explanation": "Replacing $\\tan^2 x$ leaves a single ratio. From here it is ordinary algebra.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Expand",
          "workingLatex": "2\\sec^2 x - 2 = 5\\sec x - 4",
          "explanation": "Multiplying out the bracket prepares all terms to be gathered on one side.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rearrange to a quadratic equal to zero",
          "workingLatex": "2\\sec^2 x - 5\\sec x + 2 = 0",
          "explanation": "Collecting terms ($-2 + 4 = 2$) gives a standard quadratic in $\\sec x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Introduce a substitution",
          "workingLatex": "2u^2 - 5u + 2 = 0, \\quad \\text{where } u = \\sec x",
          "explanation": "Letting $u = \\sec x$ makes the quadratic easy to factorise.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Factorise",
          "workingLatex": "(2u - 1)(u - 2) = 0",
          "explanation": "The middle term splits as $-5u = -u - 4u$, giving these factors, which expand back correctly.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Read off the roots",
          "workingLatex": "u = \\tfrac{1}{2} \\quad \\text{or} \\quad u = 2",
          "explanation": "These are the two candidate values of $\\sec x$; each must be checked against the range of $\\sec$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Reject the impossible root",
          "workingLatex": "\\sec x = \\tfrac{1}{2} \\;\\Rightarrow\\; \\cos x = 2 \\;\\; (\\text{impossible, since } |\\cos x| \\le 1)",
          "explanation": "As $\\sec x = \\tfrac{1}{\\cos x}$, this root needs $\\cos x = 2$, which cannot happen. Since $|\\sec x| \\ge 1$ always, we reject $\\sec x = \\tfrac12$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Keep the valid root",
          "workingLatex": "\\sec x = 2 \\;\\Rightarrow\\; \\cos x = \\tfrac{1}{2}",
          "explanation": "The other root gives $\\cos x = \\tfrac12$, which is attainable, so we solve this over $0 \\le x \\le 2\\pi$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Find the base angle in radians",
          "workingLatex": "\\cos^{-1}\\left(\\tfrac{1}{2}\\right) = \\frac{\\pi}{3}",
          "explanation": "In radians, the angle in $[0,\\pi]$ with cosine $\\tfrac12$ is $\\tfrac{\\pi}{3}$, the reference angle for the solutions.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Find all angles with cos x = 1/2",
          "workingLatex": "x = \\frac{\\pi}{3} \\quad \\text{or} \\quad x = 2\\pi - \\frac{\\pi}{3} = \\frac{5\\pi}{3}",
          "explanation": "Cosine is positive in the first and fourth quadrants, so the second solution is $2\\pi - \\tfrac{\\pi}{3} = \\tfrac{5\\pi}{3}$. Both lie in the interval.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Verify a solution",
          "workingLatex": "\\sec \\tfrac{\\pi}{3} = 2: \\;\\; 2\\tan^2 \\tfrac{\\pi}{3} = 2(3) = 6, \\;\\; 5\\sec \\tfrac{\\pi}{3} - 4 = 5(2) - 4 = 6",
          "explanation": "At $x = \\tfrac{\\pi}{3}$, where $\\tan^2 x = 3$, both sides equal $6$, confirming the solution.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the final answer",
          "workingLatex": "x = \\frac{\\pi}{3},\\; \\frac{5\\pi}{3}",
          "explanation": "These are the only solutions in $0 \\le x \\le 2\\pi$; the rejected root gave none.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = \\dfrac{\\pi}{3},\\ \\dfrac{5\\pi}{3}$. The root $\\sec x = \\tfrac12$ is rejected because it requires $\\cos x = 2$."
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
    "answerType": "numeric",
    "tags": [
      "solving equations",
      "cot",
      "quadratic"
    ],
    "questionText": "Solve $\\operatorname{cosec}^2 x - 3\\cot x - 5 = 0$ for $0 \\le x < 360^\\circ$. Give any non-exact answers to one decimal place.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the equation and note the domain",
          "workingLatex": "\\operatorname{cosec}^2 x - 3\\cot x - 5 = 0, \\qquad 0 \\le x < 360^\\circ, \\;\\; \\sin x \\neq 0",
          "explanation": "Here $\\operatorname{cosec}^2 x$ and $\\cot x$ appear together. Converting $\\operatorname{cosec}^2 x$ into $\\cot x$ will make the whole equation a quadratic in $\\cot x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose the identity",
          "workingLatex": "\\operatorname{cosec}^2 x \\equiv 1 + \\cot^2 x",
          "explanation": "The identity $1 + \\cot^2 x \\equiv \\operatorname{cosec}^2 x$ lets us replace $\\operatorname{cosec}^2 x$ so that only $\\cot x$ remains.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute",
          "workingLatex": "1 + \\cot^2 x - 3\\cot x - 5 = 0",
          "explanation": "After substituting, the equation involves only $\\cot x$, which is exactly the single ratio we want.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify to a quadratic",
          "workingLatex": "\\cot^2 x - 3\\cot x - 4 = 0",
          "explanation": "Combining the constants ($1 - 5 = -4$) gives a tidy quadratic in $\\cot x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Introduce a substitution",
          "workingLatex": "u^2 - 3u - 4 = 0, \\quad \\text{where } u = \\cot x",
          "explanation": "Letting $u = \\cot x$ reveals a standard quadratic to factorise.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Factorise",
          "workingLatex": "(u - 4)(u + 1) = 0",
          "explanation": "Two numbers with product $-4$ and sum $-3$ are $-4$ and $+1$, giving this factorisation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Read off the roots",
          "workingLatex": "\\cot x = 4 \\quad \\text{or} \\quad \\cot x = -1",
          "explanation": "The cotangent, like the tangent, can take any real value, so both roots are attainable; nothing is rejected here.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Convert cot to tan",
          "workingLatex": "\\cot x = 4 \\Rightarrow \\tan x = \\tfrac{1}{4}, \\qquad \\cot x = -1 \\Rightarrow \\tan x = -1",
          "explanation": "Since $\\cot x = \\tfrac{1}{\\tan x}$, we invert each value to work with $\\tan x$, which is easier to solve on a calculator.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solve tan x = 1/4",
          "workingLatex": "\\tan^{-1}\\left(\\tfrac{1}{4}\\right) = 14.0^\\circ \\;\\text{(base angle)}",
          "explanation": "The base angle comes from the calculator. Tangent is positive in the first and third quadrants, so solutions are $180^\\circ$ apart.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "All angles for tan x = 1/4",
          "workingLatex": "x = 14.0^\\circ \\quad \\text{or} \\quad x = 14.0^\\circ + 180^\\circ = 194.0^\\circ",
          "explanation": "Adding the period $180^\\circ$ to the base angle gives the third-quadrant solution. Both lie in the interval.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Solve tan x = -1",
          "workingLatex": "x = 180^\\circ - 45^\\circ = 135^\\circ, \\qquad x = 360^\\circ - 45^\\circ = 315^\\circ",
          "explanation": "The reference angle is $45^\\circ$; tangent is negative in the second and fourth quadrants, giving the exact solutions $135^\\circ$ and $315^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Collect all solutions",
          "workingLatex": "x = 14.0^\\circ,\\; 135^\\circ,\\; 194.0^\\circ,\\; 315^\\circ",
          "explanation": "Combining the two cases gives four solutions across the interval.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Verify a solution",
          "workingLatex": "\\cot 135^\\circ = -1: \\;\\; \\operatorname{cosec}^2 135^\\circ = 1 + (-1)^2 = 2, \\;\\; 2 - 3(-1) - 5 = 2 + 3 - 5 = 0",
          "explanation": "At $x = 135^\\circ$ the left-hand side evaluates to $0$, matching the equation and confirming the working.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the final answer",
          "workingLatex": "x = 14.0^\\circ,\\; 135^\\circ,\\; 194.0^\\circ,\\; 315^\\circ",
          "explanation": "These four angles are the full solution set in $0 \\le x < 360^\\circ$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = 14.0^\\circ,\\ 135^\\circ,\\ 194.0^\\circ,\\ 315^\\circ$ (non-exact values to 1 d.p.)."
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q057",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "solving equations",
      "sec",
      "quadratic"
    ],
    "questionText": "Solve $3\\tan^2 x = \\sec x + 1$ for $0 \\le x < 360^\\circ$. Give any non-exact answers to one decimal place.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the equation and interval",
          "workingLatex": "3\\tan^2 x = \\sec x + 1, \\qquad 0 \\le x < 360^\\circ",
          "explanation": "The equation contains $\\tan^2 x$ and $\\sec x$. Converting $\\tan^2 x$ to $\\sec x$ produces a quadratic in the single ratio $\\sec x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the identity",
          "workingLatex": "\\tan^2 x = \\sec^2 x - 1",
          "explanation": "From $1 + \\tan^2 x \\equiv \\sec^2 x$ we get $\\tan^2 x = \\sec^2 x - 1$, ready to substitute.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute",
          "workingLatex": "3\\left(\\sec^2 x - 1\\right) = \\sec x + 1",
          "explanation": "The substitution rewrites the left-hand side in terms of $\\sec x$, so the equation involves one ratio only.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Expand",
          "workingLatex": "3\\sec^2 x - 3 = \\sec x + 1",
          "explanation": "Multiplying out the bracket prepares the terms for collecting onto one side.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rearrange to a quadratic equal to zero",
          "workingLatex": "3\\sec^2 x - \\sec x - 4 = 0",
          "explanation": "Moving $\\sec x + 1$ across and combining constants ($-3 - 1 = -4$) gives a quadratic in $\\sec x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Introduce a substitution",
          "workingLatex": "3u^2 - u - 4 = 0, \\quad \\text{where } u = \\sec x",
          "explanation": "Setting $u = \\sec x$ makes the quadratic clear so it can be factorised.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Factorise",
          "workingLatex": "(3u - 4)(u + 1) = 0",
          "explanation": "Splitting $-u = 3u - 4u$ gives this factorisation, which expands back to $3u^2 - u - 4$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Read off the roots and check attainability",
          "workingLatex": "\\sec x = \\tfrac{4}{3} \\Rightarrow \\cos x = \\tfrac{3}{4}, \\qquad \\sec x = -1 \\Rightarrow \\cos x = -1",
          "explanation": "Inverting each value of $\\sec x$ gives $\\cos x = \\tfrac34$ and $\\cos x = -1$. Both satisfy $|\\cos x| \\le 1$, so both roots are valid; neither is rejected.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solve cos x = 3/4",
          "workingLatex": "\\cos^{-1}\\left(\\tfrac{3}{4}\\right) = 41.4^\\circ \\;\\text{(base angle)}",
          "explanation": "The base angle comes from the calculator. Cosine is positive in the first and fourth quadrants.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "All angles for cos x = 3/4",
          "workingLatex": "x = 41.4^\\circ \\quad \\text{or} \\quad x = 360^\\circ - 41.4^\\circ = 318.6^\\circ",
          "explanation": "The fourth-quadrant partner is $360^\\circ$ minus the base angle. Both values lie in the interval.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Solve cos x = -1",
          "workingLatex": "\\cos x = -1 \\;\\Rightarrow\\; x = 180^\\circ",
          "explanation": "Cosine equals $-1$ only at the half-turn, so the single solution here is the exact value $180^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Collect all solutions",
          "workingLatex": "x = 41.4^\\circ,\\; 180^\\circ,\\; 318.6^\\circ",
          "explanation": "Merging both roots gives three solutions in the interval.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Verify a solution",
          "workingLatex": "\\cos 180^\\circ = -1: \\;\\; 3\\tan^2 180^\\circ = 3(0) = 0, \\;\\; \\sec 180^\\circ + 1 = -1 + 1 = 0",
          "explanation": "At $x = 180^\\circ$, where $\\tan x = 0$, both sides equal $0$, confirming the solution.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the final answer",
          "workingLatex": "x = 41.4^\\circ,\\; 180^\\circ,\\; 318.6^\\circ",
          "explanation": "These are all the solutions in $0 \\le x < 360^\\circ$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = 41.4^\\circ,\\ 180^\\circ,\\ 318.6^\\circ$ (non-exact values to 1 d.p.)."
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
    "answerType": "exact",
    "tags": [
      "solving equations",
      "cosec",
      "radians"
    ],
    "questionText": "Solve $\\cot^2 x = \\operatorname{cosec} x + 1$ for $0 \\le x \\le 2\\pi$, giving your answers in radians in terms of $\\pi$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the equation and note the domain",
          "workingLatex": "\\cot^2 x = \\operatorname{cosec} x + 1, \\qquad 0 \\le x \\le 2\\pi, \\;\\; \\sin x \\neq 0",
          "explanation": "The equation contains $\\cot^2 x$ and $\\operatorname{cosec} x$. Converting $\\cot^2 x$ into $\\operatorname{cosec} x$ makes it a quadratic in $\\operatorname{cosec} x$, and we work in radians.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose the identity",
          "workingLatex": "1 + \\cot^2 x \\equiv \\operatorname{cosec}^2 x \\;\\Rightarrow\\; \\cot^2 x = \\operatorname{cosec}^2 x - 1",
          "explanation": "Replacing $\\cot^2 x$ with $\\operatorname{cosec}^2 x - 1$ leaves the single ratio $\\operatorname{cosec} x$ throughout.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute",
          "workingLatex": "\\operatorname{cosec}^2 x - 1 = \\operatorname{cosec} x + 1",
          "explanation": "After substituting, every term is written with $\\operatorname{cosec} x$, ready to be rearranged into a quadratic.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rearrange to a quadratic equal to zero",
          "workingLatex": "\\operatorname{cosec}^2 x - \\operatorname{cosec} x - 2 = 0",
          "explanation": "Bringing all terms to one side ($-1 - 1 = -2$) gives a standard quadratic in $\\operatorname{cosec} x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Introduce a substitution",
          "workingLatex": "u^2 - u - 2 = 0, \\quad \\text{where } u = \\operatorname{cosec} x",
          "explanation": "Letting $u = \\operatorname{cosec} x$ exposes an ordinary quadratic to factorise.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Factorise",
          "workingLatex": "(u - 2)(u + 1) = 0",
          "explanation": "Two numbers with product $-2$ and sum $-1$ are $-2$ and $+1$, giving this factorisation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Read off the roots and check attainability",
          "workingLatex": "u = 2 \\Rightarrow \\sin x = \\tfrac{1}{2}, \\qquad u = -1 \\Rightarrow \\sin x = -1",
          "explanation": "Inverting each value gives $\\sin x = \\tfrac12$ and $\\sin x = -1$. Both satisfy $|\\sin x| \\le 1$ (equivalently $|\\operatorname{cosec} x| \\ge 1$), so both roots are valid.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find the base angle for sin x = 1/2",
          "workingLatex": "\\sin^{-1}\\left(\\tfrac{1}{2}\\right) = \\frac{\\pi}{6}",
          "explanation": "In radians, the angle in $[0,\\tfrac{\\pi}{2}]$ with sine $\\tfrac12$ is $\\tfrac{\\pi}{6}$, the reference angle.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "All angles for sin x = 1/2",
          "workingLatex": "x = \\frac{\\pi}{6} \\quad \\text{or} \\quad x = \\pi - \\frac{\\pi}{6} = \\frac{5\\pi}{6}",
          "explanation": "Sine is positive in the first and second quadrants, so the second solution is $\\pi - \\tfrac{\\pi}{6} = \\tfrac{5\\pi}{6}$. Both lie in the interval.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Solve sin x = -1",
          "workingLatex": "\\sin x = -1 \\;\\Rightarrow\\; x = \\frac{3\\pi}{2}",
          "explanation": "Sine reaches its minimum $-1$ at the single angle $\\tfrac{3\\pi}{2}$ within $0 \\le x \\le 2\\pi$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Collect all solutions",
          "workingLatex": "x = \\frac{\\pi}{6},\\; \\frac{5\\pi}{6},\\; \\frac{3\\pi}{2}",
          "explanation": "Combining both roots gives three solutions in the interval.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Verify a solution",
          "workingLatex": "\\sin \\tfrac{3\\pi}{2} = -1: \\;\\; \\cot^2 \\tfrac{3\\pi}{2} = 0, \\;\\; \\operatorname{cosec} \\tfrac{3\\pi}{2} + 1 = -1 + 1 = 0",
          "explanation": "At $x = \\tfrac{3\\pi}{2}$, where $\\cos x = 0$ so $\\cot x = 0$, both sides equal $0$, confirming the solution.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the final answer",
          "workingLatex": "x = \\frac{\\pi}{6},\\; \\frac{5\\pi}{6},\\; \\frac{3\\pi}{2}",
          "explanation": "These are all solutions in $0 \\le x \\le 2\\pi$, expressed exactly in terms of $\\pi$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = \\dfrac{\\pi}{6},\\ \\dfrac{5\\pi}{6},\\ \\dfrac{3\\pi}{2}$."
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q059",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "solving equations",
      "cosec",
      "reciprocal trig"
    ],
    "questionText": "Solve $2\\sin x = \\operatorname{cosec} x$ for $0 \\le x < 360^\\circ$, giving all solutions in degrees.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the equation and interval",
          "workingLatex": "2\\sin x = \\operatorname{cosec} x, \\qquad 0 \\le x < 360^\\circ",
          "explanation": "The equation links $\\sin x$ with its reciprocal $\\operatorname{cosec} x$. Writing $\\operatorname{cosec} x$ as $\\tfrac{1}{\\sin x}$ will turn it into a quadratic in $\\sin x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Note the domain restriction",
          "workingLatex": "\\operatorname{cosec} x = \\frac{1}{\\sin x} \\;\\text{ is defined only when } \\sin x \\neq 0",
          "explanation": "Because $\\operatorname{cosec} x$ is a reciprocal of $\\sin x$, any solution with $\\sin x = 0$ would be invalid. We note this before multiplying through.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Replace cosec with its reciprocal definition",
          "workingLatex": "2\\sin x = \\frac{1}{\\sin x}",
          "explanation": "Substituting the definition of $\\operatorname{cosec} x$ gives an equation purely in $\\sin x$, which we can clear of fractions.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Clear the fraction",
          "workingLatex": "2\\sin^2 x = 1",
          "explanation": "Multiplying both sides by $\\sin x$ (allowed since $\\sin x \\neq 0$) removes the fraction and produces a quadratic in $\\sin x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write as a quadratic in sin x",
          "workingLatex": "2\\sin^2 x - 1 = 0, \\quad \\text{where the unknown is } \\sin x",
          "explanation": "Moving everything to one side shows the equation is a quadratic in $\\sin x$ (with no linear term). Recognising this structure is what makes the reciprocal equation solvable.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Isolate sin squared",
          "workingLatex": "\\sin^2 x = \\frac{1}{2}",
          "explanation": "Rearranging isolates $\\sin^2 x$, ready to take square roots.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Take square roots with both signs",
          "workingLatex": "\\sin x = \\pm\\frac{1}{\\sqrt{2}} = \\pm\\frac{\\sqrt{2}}{2}",
          "explanation": "Because squaring hides the sign, both the positive and negative roots must be kept. Both have modulus less than $1$ and are non-zero, so both are attainable.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find the base angle",
          "workingLatex": "\\sin^{-1}\\left(\\frac{\\sqrt{2}}{2}\\right) = 45^\\circ",
          "explanation": "The acute angle whose sine is $\\tfrac{\\sqrt2}{2}$ is $45^\\circ$, the reference angle for every solution.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solve the positive case",
          "workingLatex": "\\sin x = \\frac{\\sqrt{2}}{2}: \\quad x = 45^\\circ \\;\\text{ or }\\; x = 180^\\circ - 45^\\circ = 135^\\circ",
          "explanation": "Sine is positive in the first and second quadrants, giving $45^\\circ$ and $135^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Solve the negative case",
          "workingLatex": "\\sin x = -\\frac{\\sqrt{2}}{2}: \\quad x = 180^\\circ + 45^\\circ = 225^\\circ \\;\\text{ or }\\; x = 360^\\circ - 45^\\circ = 315^\\circ",
          "explanation": "Sine is negative in the third and fourth quadrants, giving $225^\\circ$ and $315^\\circ$, both built from the same $45^\\circ$ reference angle.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Collect all solutions",
          "workingLatex": "x = 45^\\circ,\\; 135^\\circ,\\; 225^\\circ,\\; 315^\\circ",
          "explanation": "Together the two cases give four solutions, all with $\\sin x \\neq 0$ as required.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Verify a solution",
          "workingLatex": "\\sin 45^\\circ = \\frac{\\sqrt{2}}{2}: \\;\\; 2\\sin 45^\\circ = \\sqrt{2}, \\;\\; \\operatorname{cosec} 45^\\circ = \\frac{1}{\\tfrac{\\sqrt{2}}{2}} = \\sqrt{2}",
          "explanation": "At $x = 45^\\circ$ both sides equal $\\sqrt{2}$, confirming the solution and the clearing of the fraction.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the final answer",
          "workingLatex": "x = 45^\\circ,\\; 135^\\circ,\\; 225^\\circ,\\; 315^\\circ",
          "explanation": "These are all the solutions in $0 \\le x < 360^\\circ$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = 45^\\circ,\\ 135^\\circ,\\ 225^\\circ,\\ 315^\\circ$."
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q060",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "solving equations",
      "sec",
      "reject root"
    ],
    "questionText": "Solve $2\\tan^2 x + 7\\sec x + 2 = 0$ for $0 \\le x < 360^\\circ$, giving your answers to one decimal place.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the equation and interval",
          "workingLatex": "2\\tan^2 x + 7\\sec x + 2 = 0, \\qquad 0 \\le x < 360^\\circ",
          "explanation": "The equation mixes $\\tan^2 x$ and $\\sec x$. Converting $\\tan^2 x$ into $\\sec x$ will reduce it to a quadratic in $\\sec x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the identity",
          "workingLatex": "\\tan^2 x = \\sec^2 x - 1",
          "explanation": "From $1 + \\tan^2 x \\equiv \\sec^2 x$ we replace $\\tan^2 x$, leaving everything in $\\sec x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute",
          "workingLatex": "2\\left(\\sec^2 x - 1\\right) + 7\\sec x + 2 = 0",
          "explanation": "The substitution turns the equation into one about the single ratio $\\sec x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Expand",
          "workingLatex": "2\\sec^2 x - 2 + 7\\sec x + 2 = 0",
          "explanation": "Multiplying out the bracket exposes the constant terms so they can be combined.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "2\\sec^2 x + 7\\sec x = 0",
          "explanation": "The constants cancel ($-2 + 2 = 0$), leaving a quadratic with no constant term, which factorises very cleanly.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Factorise",
          "workingLatex": "\\sec x\\left(2\\sec x + 7\\right) = 0",
          "explanation": "Since both terms share a factor of $\\sec x$, we take it out. The product is zero when either factor is zero.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Read off the roots",
          "workingLatex": "\\sec x = 0 \\quad \\text{or} \\quad \\sec x = -\\tfrac{7}{2}",
          "explanation": "Each factor set to zero gives a candidate value of $\\sec x$, which we must now test.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Reject the impossible root",
          "workingLatex": "\\sec x = \\frac{1}{\\cos x} = 0 \\;\\; \\text{has no solution, since } |\\sec x| \\ge 1",
          "explanation": "A reciprocal $\\tfrac{1}{\\cos x}$ can never equal $0$: that would need $\\cos x$ to be infinite. The secant always satisfies $|\\sec x| \\ge 1$, so $\\sec x = 0$ is rejected.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Keep the valid root",
          "workingLatex": "\\sec x = -\\tfrac{7}{2} \\;\\Rightarrow\\; \\cos x = -\\tfrac{2}{7}",
          "explanation": "Inverting the surviving value gives $\\cos x = -\\tfrac{2}{7}$, and $\\left|-\\tfrac{2}{7}\\right| \\le 1$, so this root is attainable.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Find the reference angle",
          "workingLatex": "\\cos^{-1}\\left(\\tfrac{2}{7}\\right) = 73.4^\\circ \\;\\text{(acute reference angle)}",
          "explanation": "Taking the acute angle from the size of the cosine gives the reference angle. Because $\\cos x$ is negative, solutions sit in the second and third quadrants.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Find all angles with cos x = -2/7",
          "workingLatex": "x = 180^\\circ - 73.4^\\circ = 106.6^\\circ, \\qquad x = 180^\\circ + 73.4^\\circ = 253.4^\\circ",
          "explanation": "For a negative cosine the solutions are $180^\\circ \\mp$ the reference angle, placing them in the second and third quadrants. Both lie in the interval.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Collect the solutions",
          "workingLatex": "x = 106.6^\\circ,\\; 253.4^\\circ",
          "explanation": "Only the root $\\sec x = -\\tfrac72$ produced solutions; the rejected root gave none.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Verify a solution",
          "workingLatex": "\\sec x = -\\tfrac{7}{2}: \\;\\; \\tan^2 x = \\sec^2 x - 1 = \\tfrac{49}{4} - 1 = \\tfrac{45}{4}; \\;\\; 2\\left(\\tfrac{45}{4}\\right) + 7\\left(-\\tfrac{7}{2}\\right) + 2 = \\tfrac{45}{2} - \\tfrac{49}{2} + 2 = 0",
          "explanation": "Using the exact values behind $x \\approx 106.6^\\circ$, the left-hand side collapses to $0$, matching the equation and confirming the working.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the final answer",
          "workingLatex": "x = 106.6^\\circ,\\; 253.4^\\circ",
          "explanation": "These are the only solutions in $0 \\le x < 360^\\circ$, to one decimal place.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = 106.6^\\circ,\\ 253.4^\\circ$ (to 1 d.p.). The root $\\sec x = 0$ is rejected because $|\\sec x| \\ge 1$."
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
    "answerType": "proof",
    "tags": [
      "identity proof",
      "sec",
      "tan",
      "difference of squares"
    ],
    "questionText": "Prove the identity $\\sec\\theta + \\tan\\theta \\equiv \\dfrac{1}{\\sec\\theta - \\tan\\theta}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set out what must be proved",
          "workingLatex": "\\text{Prove that }\\ \\sec\\theta + \\tan\\theta \\equiv \\frac{1}{\\sec\\theta - \\tan\\theta}",
          "explanation": "It helps to keep the target in view. We will build a bridge from the fundamental identity $\\sin^2\\theta+\\cos^2\\theta\\equiv1$ to a difference of two squares, which is exactly $\\sec\\theta-\\tan\\theta$ multiplied by $\\sec\\theta+\\tan\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the fundamental Pythagorean identity",
          "workingLatex": "\\sin^2\\theta + \\cos^2\\theta \\equiv 1",
          "explanation": "Every identity in this chapter grows from this single fact, so it is the natural starting point.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Divide every term by cos squared theta",
          "workingLatex": "\\frac{\\sin^2\\theta}{\\cos^2\\theta} + \\frac{\\cos^2\\theta}{\\cos^2\\theta} \\equiv \\frac{1}{\\cos^2\\theta}",
          "explanation": "Dividing by $\\cos^2\\theta$ turns the ratios into the functions we want: $\\dfrac{\\sin\\theta}{\\cos\\theta}$ is $\\tan\\theta$ and $\\dfrac{1}{\\cos\\theta}$ is $\\sec\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Read off the reciprocal identity",
          "workingLatex": "\\tan^2\\theta + 1 \\equiv \\sec^2\\theta",
          "explanation": "Each term simplifies: the first is $\\tan^2\\theta$, the middle is $1$, and the right becomes $\\sec^2\\theta$. This is the standard identity linking tangent and secant.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rearrange into a difference of squares",
          "workingLatex": "\\sec^2\\theta - \\tan^2\\theta \\equiv 1",
          "explanation": "Moving $\\tan^2\\theta$ across gives a difference of two squares equal to $1$, which is precisely the product we are aiming to create.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Factorise the difference of two squares",
          "workingLatex": "\\sec^2\\theta - \\tan^2\\theta \\equiv (\\sec\\theta + \\tan\\theta)(\\sec\\theta - \\tan\\theta)",
          "explanation": "Using $a^2-b^2=(a+b)(a-b)$ with $a=\\sec\\theta$ and $b=\\tan\\theta$ exposes both factors that appear in the statement we must prove.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Start from the left-hand side",
          "workingLatex": "\\text{LHS} = \\sec\\theta + \\tan\\theta",
          "explanation": "We now work on the left-hand side alone and aim to reach the right-hand side, which keeps the proof clean and one-directional.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Multiply top and bottom by the conjugate",
          "workingLatex": "\\sec\\theta + \\tan\\theta = \\frac{(\\sec\\theta + \\tan\\theta)(\\sec\\theta - \\tan\\theta)}{\\sec\\theta - \\tan\\theta}",
          "explanation": "Multiplying by $\\dfrac{\\sec\\theta-\\tan\\theta}{\\sec\\theta-\\tan\\theta}$ is multiplying by $1$, so the value is unchanged, but it manufactures the difference of squares in the numerator.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Replace the numerator using the factorisation",
          "workingLatex": "= \\frac{\\sec^2\\theta - \\tan^2\\theta}{\\sec\\theta - \\tan\\theta}",
          "explanation": "The numerator is exactly the product from Step 6, so it collapses to $\\sec^2\\theta-\\tan^2\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Use the identity to simplify the numerator",
          "workingLatex": "= \\frac{1}{\\sec\\theta - \\tan\\theta}",
          "explanation": "From Step 5 the numerator $\\sec^2\\theta-\\tan^2\\theta$ equals $1$, leaving a single clean fraction.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Identify the right-hand side",
          "workingLatex": "\\frac{1}{\\sec\\theta - \\tan\\theta} = \\text{RHS}",
          "explanation": "This is precisely the expression on the right of the statement, so the left-hand side has been transformed into the right-hand side.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State the validity condition",
          "workingLatex": "\\sec\\theta - \\tan\\theta \\neq 0",
          "explanation": "The manipulation divides by $\\sec\\theta-\\tan\\theta$, so the identity holds wherever this is non-zero and wherever $\\sec\\theta$ and $\\tan\\theta$ are themselves defined.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Numerical sanity check at 45 degrees",
          "workingLatex": "\\sec 45^\\circ + \\tan 45^\\circ = \\sqrt{2} + 1, \\qquad \\frac{1}{\\sec 45^\\circ - \\tan 45^\\circ} = \\frac{1}{\\sqrt{2} - 1} = \\sqrt{2} + 1",
          "explanation": "Testing one convenient angle guards against slips. Both sides give $\\sqrt{2}+1$ (rationalising $\\dfrac{1}{\\sqrt2-1}$ by multiplying by $\\dfrac{\\sqrt2+1}{\\sqrt2+1}$), so the identity checks out.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Conclude the proof",
          "workingLatex": "\\sec\\theta + \\tan\\theta \\equiv \\frac{1}{\\sec\\theta - \\tan\\theta} \\quad \\blacksquare",
          "explanation": "The left-hand side has been rewritten exactly as the right-hand side using only the Pythagorean identity, so the identity is proved.",
          "diagram": null
        }
      ],
      "finalAnswer": "Starting from $\\sec^2\\theta-\\tan^2\\theta\\equiv1$ and factorising, $\\sec\\theta+\\tan\\theta=\\dfrac{(\\sec\\theta+\\tan\\theta)(\\sec\\theta-\\tan\\theta)}{\\sec\\theta-\\tan\\theta}=\\dfrac{1}{\\sec\\theta-\\tan\\theta}$, as required."
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
    "answerType": "proof",
    "tags": [
      "identity proof",
      "cosec",
      "sec",
      "tan"
    ],
    "questionText": "Prove the identity $\\dfrac{1 + \\sec\\theta}{\\sin\\theta + \\tan\\theta} \\equiv \\operatorname{cosec}\\theta$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set out what must be proved",
          "workingLatex": "\\text{Prove that }\\ \\frac{1 + \\sec\\theta}{\\sin\\theta + \\tan\\theta} \\equiv \\operatorname{cosec}\\theta",
          "explanation": "The right-hand side is a single reciprocal function, so the plan is to write every function on the left in terms of $\\sin\\theta$ and $\\cos\\theta$, simplify, and watch the common factors cancel.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the reciprocal definitions",
          "workingLatex": "\\sec\\theta = \\frac{1}{\\cos\\theta}, \\qquad \\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta}, \\qquad \\operatorname{cosec}\\theta = \\frac{1}{\\sin\\theta}",
          "explanation": "Converting to sine and cosine is the most reliable way to simplify a mixed expression, because everything is then built from just two quantities.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify the numerator",
          "workingLatex": "1 + \\sec\\theta = 1 + \\frac{1}{\\cos\\theta} = \\frac{\\cos\\theta + 1}{\\cos\\theta}",
          "explanation": "Writing $1$ as $\\dfrac{\\cos\\theta}{\\cos\\theta}$ lets the two terms combine over the common denominator $\\cos\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Expand the denominator",
          "workingLatex": "\\sin\\theta + \\tan\\theta = \\sin\\theta + \\frac{\\sin\\theta}{\\cos\\theta}",
          "explanation": "Replacing $\\tan\\theta$ by $\\dfrac{\\sin\\theta}{\\cos\\theta}$ prepares the denominator for the same common-denominator treatment.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Combine the denominator over a common denominator",
          "workingLatex": "\\sin\\theta + \\frac{\\sin\\theta}{\\cos\\theta} = \\frac{\\sin\\theta\\cos\\theta + \\sin\\theta}{\\cos\\theta}",
          "explanation": "Both terms are placed over $\\cos\\theta$, ready to be factorised.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Factorise the denominator",
          "workingLatex": "\\frac{\\sin\\theta\\cos\\theta + \\sin\\theta}{\\cos\\theta} = \\frac{\\sin\\theta(\\cos\\theta + 1)}{\\cos\\theta}",
          "explanation": "Taking out the common factor $\\sin\\theta$ reveals a $(\\cos\\theta+1)$ bracket that matches the numerator, which is the key to the cancellation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Assemble the whole fraction",
          "workingLatex": "\\frac{1 + \\sec\\theta}{\\sin\\theta + \\tan\\theta} = \\frac{\\dfrac{\\cos\\theta + 1}{\\cos\\theta}}{\\dfrac{\\sin\\theta(\\cos\\theta + 1)}{\\cos\\theta}}",
          "explanation": "Substituting the simplified numerator and denominator gives a fraction divided by a fraction.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Divide by multiplying by the reciprocal",
          "workingLatex": "= \\frac{\\cos\\theta + 1}{\\cos\\theta} \\times \\frac{\\cos\\theta}{\\sin\\theta(\\cos\\theta + 1)}",
          "explanation": "Dividing by a fraction is the same as multiplying by its reciprocal, which lines up the matching factors for cancelling.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Cancel the cosine factors",
          "workingLatex": "= \\frac{\\cos\\theta + 1}{\\sin\\theta(\\cos\\theta + 1)}",
          "explanation": "The $\\cos\\theta$ in the denominator of the first fraction cancels the $\\cos\\theta$ in the numerator of the second.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Cancel the common bracket",
          "workingLatex": "= \\frac{1}{\\sin\\theta}",
          "explanation": "The factor $(\\cos\\theta+1)$ appears top and bottom, so it cancels, leaving just $\\dfrac{1}{\\sin\\theta}$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Recognise the result",
          "workingLatex": "\\frac{1}{\\sin\\theta} = \\operatorname{cosec}\\theta = \\text{RHS}",
          "explanation": "By definition $\\dfrac{1}{\\sin\\theta}$ is $\\operatorname{cosec}\\theta$, which is exactly the right-hand side.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State the validity conditions",
          "workingLatex": "\\sin\\theta \\neq 0, \\quad \\cos\\theta \\neq 0, \\quad \\cos\\theta \\neq -1",
          "explanation": "The cancellations require these quantities to be non-zero, so the identity holds everywhere both sides are defined.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Numerical check at 60 degrees",
          "workingLatex": "\\frac{1 + \\sec 60^\\circ}{\\sin 60^\\circ + \\tan 60^\\circ} = \\frac{1 + 2}{\\tfrac{\\sqrt3}{2} + \\sqrt3} = \\frac{3}{\\tfrac{3\\sqrt3}{2}} = \\frac{2}{\\sqrt3} = \\operatorname{cosec} 60^\\circ",
          "explanation": "At $60^\\circ$ the left-hand side evaluates to $\\dfrac{2}{\\sqrt3}$, and $\\operatorname{cosec} 60^\\circ=\\dfrac{1}{\\sin 60^\\circ}=\\dfrac{2}{\\sqrt3}$ agrees, confirming the algebra.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Conclude the proof",
          "workingLatex": "\\frac{1 + \\sec\\theta}{\\sin\\theta + \\tan\\theta} \\equiv \\operatorname{cosec}\\theta \\quad \\blacksquare",
          "explanation": "The left-hand side simplifies exactly to $\\operatorname{cosec}\\theta$ using only reciprocal definitions and factorising, so the identity is proved.",
          "diagram": null
        }
      ],
      "finalAnswer": "Writing everything over $\\sin\\theta$ and $\\cos\\theta$ gives $\\dfrac{(\\cos\\theta+1)/\\cos\\theta}{\\sin\\theta(\\cos\\theta+1)/\\cos\\theta}=\\dfrac{1}{\\sin\\theta}=\\operatorname{cosec}\\theta$, as required."
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
    "answerType": "proof",
    "tags": [
      "identity proof",
      "tan",
      "cot",
      "sec cosec"
    ],
    "questionText": "Prove the identity $(\\tan\\theta + \\cot\\theta)^2 \\equiv \\sec^2\\theta + \\operatorname{cosec}^2\\theta$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set out what must be proved",
          "workingLatex": "\\text{Prove that }\\ (\\tan\\theta + \\cot\\theta)^2 \\equiv \\sec^2\\theta + \\operatorname{cosec}^2\\theta",
          "explanation": "Expanding the square will produce $\\tan^2\\theta$ and $\\cot^2\\theta$ terms; the plan is to pair each with a $+1$ so the two Pythagorean identities can finish the job.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expand the square",
          "workingLatex": "(\\tan\\theta + \\cot\\theta)^2 = \\tan^2\\theta + 2\\tan\\theta\\cot\\theta + \\cot^2\\theta",
          "explanation": "Using $(a+b)^2=a^2+2ab+b^2$ with $a=\\tan\\theta$ and $b=\\cot\\theta$ writes the square out in full.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify the middle term",
          "workingLatex": "\\tan\\theta\\cot\\theta = \\tan\\theta \\cdot \\frac{1}{\\tan\\theta} = 1",
          "explanation": "Cotangent is the reciprocal of tangent, so their product is $1$; this is what makes the cross term so simple.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the middle term",
          "workingLatex": "= \\tan^2\\theta + 2 + \\cot^2\\theta",
          "explanation": "The cross term $2\\tan\\theta\\cot\\theta$ becomes $2\\times1=2$, leaving a tidy three-term expression.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Split the constant to make two pairs",
          "workingLatex": "= (\\tan^2\\theta + 1) + (\\cot^2\\theta + 1)",
          "explanation": "Writing $2$ as $1+1$ and regrouping deliberately builds the exact left-hand sides of the two Pythagorean identities.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Recall the first Pythagorean identity",
          "workingLatex": "1 + \\tan^2\\theta \\equiv \\sec^2\\theta",
          "explanation": "Dividing $\\sin^2\\theta+\\cos^2\\theta\\equiv1$ by $\\cos^2\\theta$ gives this link between tangent and secant.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Recall the second Pythagorean identity",
          "workingLatex": "1 + \\cot^2\\theta \\equiv \\operatorname{cosec}^2\\theta",
          "explanation": "Dividing the same fundamental identity by $\\sin^2\\theta$ instead gives the matching link between cotangent and cosecant.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute the first pair",
          "workingLatex": "\\tan^2\\theta + 1 = \\sec^2\\theta",
          "explanation": "The first bracket is exactly $1+\\tan^2\\theta$, which the identity replaces with $\\sec^2\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Substitute the second pair",
          "workingLatex": "\\cot^2\\theta + 1 = \\operatorname{cosec}^2\\theta",
          "explanation": "Likewise the second bracket is $1+\\cot^2\\theta$, which becomes $\\operatorname{cosec}^2\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Combine the results",
          "workingLatex": "(\\tan\\theta + \\cot\\theta)^2 = \\sec^2\\theta + \\operatorname{cosec}^2\\theta",
          "explanation": "Adding the two replaced brackets gives precisely the right-hand side of the statement.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Identify the right-hand side",
          "workingLatex": "\\sec^2\\theta + \\operatorname{cosec}^2\\theta = \\text{RHS}",
          "explanation": "The transformed left-hand side matches the target expression exactly.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State the validity condition",
          "workingLatex": "\\sin\\theta \\neq 0, \\quad \\cos\\theta \\neq 0",
          "explanation": "Tangent, cotangent, secant and cosecant all require non-zero sine and cosine, so the identity holds wherever every function is defined.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Numerical check at 45 degrees",
          "workingLatex": "(\\tan 45^\\circ + \\cot 45^\\circ)^2 = (1 + 1)^2 = 4, \\qquad \\sec^2 45^\\circ + \\operatorname{cosec}^2 45^\\circ = 2 + 2 = 4",
          "explanation": "At $45^\\circ$ both sides equal $4$, a quick confirmation that the identity balances.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Conclude the proof",
          "workingLatex": "(\\tan\\theta + \\cot\\theta)^2 \\equiv \\sec^2\\theta + \\operatorname{cosec}^2\\theta \\quad \\blacksquare",
          "explanation": "Expanding and applying the two Pythagorean identities turns the left-hand side into the right-hand side, completing the proof.",
          "diagram": null
        }
      ],
      "finalAnswer": "Expanding gives $\\tan^2\\theta+2+\\cot^2\\theta=(1+\\tan^2\\theta)+(1+\\cot^2\\theta)=\\sec^2\\theta+\\operatorname{cosec}^2\\theta$, as required."
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q064",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "proof",
    "tags": [
      "identity proof",
      "sec",
      "cos"
    ],
    "questionText": "Prove the identity $\\dfrac{\\sec\\theta - 1}{\\sec\\theta + 1} \\equiv \\dfrac{1 - \\cos\\theta}{1 + \\cos\\theta}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set out what must be proved",
          "workingLatex": "\\text{Prove that }\\ \\frac{\\sec\\theta - 1}{\\sec\\theta + 1} \\equiv \\frac{1 - \\cos\\theta}{1 + \\cos\\theta}",
          "explanation": "The right-hand side is written purely in $\\cos\\theta$, so the natural strategy is to replace $\\sec\\theta$ with $\\dfrac{1}{\\cos\\theta}$ and simplify the resulting compound fraction.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the reciprocal definition",
          "workingLatex": "\\sec\\theta = \\frac{1}{\\cos\\theta}",
          "explanation": "Secant is the reciprocal of cosine; substituting this is the only tool needed here.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute into the numerator",
          "workingLatex": "\\sec\\theta - 1 = \\frac{1}{\\cos\\theta} - 1",
          "explanation": "Substituting the reciprocal definition into the numerator is the first move toward a single fraction.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Give the numerator a common denominator",
          "workingLatex": "\\frac{1}{\\cos\\theta} - 1 = \\frac{1}{\\cos\\theta} - \\frac{\\cos\\theta}{\\cos\\theta}",
          "explanation": "Rewriting $1$ as $\\dfrac{\\cos\\theta}{\\cos\\theta}$ gives both terms the same denominator so they can be merged.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Combine the numerator",
          "workingLatex": "= \\frac{1 - \\cos\\theta}{\\cos\\theta}",
          "explanation": "Subtracting over the common denominator produces the factor $1-\\cos\\theta$ that we are aiming for.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute into the denominator",
          "workingLatex": "\\sec\\theta + 1 = \\frac{1}{\\cos\\theta} + 1",
          "explanation": "The denominator of the original fraction is handled in exactly the same way.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Give the denominator a common denominator",
          "workingLatex": "\\frac{1}{\\cos\\theta} + 1 = \\frac{1}{\\cos\\theta} + \\frac{\\cos\\theta}{\\cos\\theta}",
          "explanation": "Again $1$ becomes $\\dfrac{\\cos\\theta}{\\cos\\theta}$ so the two terms share a denominator.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Combine the denominator",
          "workingLatex": "= \\frac{1 + \\cos\\theta}{\\cos\\theta}",
          "explanation": "Adding over the common denominator gives $1+\\cos\\theta$ on top.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Assemble the compound fraction",
          "workingLatex": "\\frac{\\sec\\theta - 1}{\\sec\\theta + 1} = \\frac{\\dfrac{1 - \\cos\\theta}{\\cos\\theta}}{\\dfrac{1 + \\cos\\theta}{\\cos\\theta}}",
          "explanation": "Stacking the two simplified expressions gives a fraction divided by a fraction, both over $\\cos\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Divide by multiplying by the reciprocal",
          "workingLatex": "= \\frac{1 - \\cos\\theta}{\\cos\\theta} \\times \\frac{\\cos\\theta}{1 + \\cos\\theta}",
          "explanation": "Dividing by a fraction means multiplying by its reciprocal, which brings a $\\cos\\theta$ to both numerator and denominator.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Show the shared factor",
          "workingLatex": "= \\frac{(1 - \\cos\\theta)\\cos\\theta}{\\cos\\theta(1 + \\cos\\theta)}",
          "explanation": "Multiplying the fractions displays the common $\\cos\\theta$ factor explicitly before cancelling.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Cancel the cosine factor",
          "workingLatex": "= \\frac{1 - \\cos\\theta}{1 + \\cos\\theta}",
          "explanation": "The common factor $\\cos\\theta$ cancels top and bottom, leaving an expression purely in cosine.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Identify the right-hand side",
          "workingLatex": "\\frac{1 - \\cos\\theta}{1 + \\cos\\theta} = \\text{RHS}",
          "explanation": "This matches the right-hand side of the statement exactly.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the validity conditions",
          "workingLatex": "\\cos\\theta \\neq 0, \\quad \\cos\\theta \\neq -1",
          "explanation": "Division by $\\cos\\theta$ and by $1+\\cos\\theta$ requires both to be non-zero, so the identity holds wherever it is defined.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Numerical check at 60 degrees",
          "workingLatex": "\\frac{\\sec 60^\\circ - 1}{\\sec 60^\\circ + 1} = \\frac{2 - 1}{2 + 1} = \\frac{1}{3}, \\qquad \\frac{1 - \\cos 60^\\circ}{1 + \\cos 60^\\circ} = \\frac{1 - \\tfrac12}{1 + \\tfrac12} = \\frac{1}{3}",
          "explanation": "Both sides give $\\dfrac13$ at $60^\\circ$, confirming the identity numerically.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "Conclude the proof",
          "workingLatex": "\\frac{\\sec\\theta - 1}{\\sec\\theta + 1} \\equiv \\frac{1 - \\cos\\theta}{1 + \\cos\\theta} \\quad \\blacksquare",
          "explanation": "Replacing $\\sec\\theta$ by $\\dfrac{1}{\\cos\\theta}$ and cancelling turns the left-hand side into the right-hand side, proving the identity.",
          "diagram": null
        }
      ],
      "finalAnswer": "Replacing $\\sec\\theta$ with $\\dfrac{1}{\\cos\\theta}$ gives $\\dfrac{(1-\\cos\\theta)/\\cos\\theta}{(1+\\cos\\theta)/\\cos\\theta}=\\dfrac{1-\\cos\\theta}{1+\\cos\\theta}$, as required."
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
    "tags": [
      "identity proof",
      "cot",
      "cos"
    ],
    "questionText": "Prove the identity $\\cot^2\\theta - \\cos^2\\theta \\equiv \\cot^2\\theta\\,\\cos^2\\theta$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set out what must be proved",
          "workingLatex": "\\text{Prove that }\\ \\cot^2\\theta - \\cos^2\\theta \\equiv \\cot^2\\theta\\,\\cos^2\\theta",
          "explanation": "Both sides involve $\\cot^2\\theta$ and $\\cos^2\\theta$, so the plan is to simplify each side to a single fraction in $\\sin\\theta$ and $\\cos\\theta$ and check they agree.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Express cot squared in sine and cosine",
          "workingLatex": "\\cot\\theta = \\frac{\\cos\\theta}{\\sin\\theta} \\ \\Rightarrow\\ \\cot^2\\theta = \\frac{\\cos^2\\theta}{\\sin^2\\theta}",
          "explanation": "Cotangent is cosine over sine, so squaring gives $\\dfrac{\\cos^2\\theta}{\\sin^2\\theta}$; this converts everything to the two basic functions.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute into the left-hand side",
          "workingLatex": "\\text{LHS} = \\frac{\\cos^2\\theta}{\\sin^2\\theta} - \\cos^2\\theta",
          "explanation": "We work on the left-hand side first, replacing $\\cot^2\\theta$ with its sine-cosine form.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Factor out cos squared",
          "workingLatex": "= \\cos^2\\theta\\left(\\frac{1}{\\sin^2\\theta} - 1\\right)",
          "explanation": "Both terms contain $\\cos^2\\theta$, so taking it out as a common factor isolates a simpler bracket to work on.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Combine the bracket over a common denominator",
          "workingLatex": "= \\cos^2\\theta\\left(\\frac{1 - \\sin^2\\theta}{\\sin^2\\theta}\\right)",
          "explanation": "Writing $1$ as $\\dfrac{\\sin^2\\theta}{\\sin^2\\theta}$ lets the bracket combine into a single fraction.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply the Pythagorean identity",
          "workingLatex": "1 - \\sin^2\\theta = \\cos^2\\theta",
          "explanation": "Rearranging $\\sin^2\\theta+\\cos^2\\theta\\equiv1$ replaces $1-\\sin^2\\theta$ with $\\cos^2\\theta$, which is the crucial simplification.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute back into the bracket",
          "workingLatex": "\\text{LHS} = \\cos^2\\theta \\cdot \\frac{\\cos^2\\theta}{\\sin^2\\theta}",
          "explanation": "Replacing the numerator of the bracket turns the left-hand side into a clean product of squares.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Simplify the left-hand side",
          "workingLatex": "\\text{LHS} = \\frac{\\cos^4\\theta}{\\sin^2\\theta}",
          "explanation": "Multiplying the two cosine factors gives $\\cos^4\\theta$ over $\\sin^2\\theta$, a single tidy fraction.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Now simplify the right-hand side",
          "workingLatex": "\\text{RHS} = \\cot^2\\theta\\,\\cos^2\\theta = \\frac{\\cos^2\\theta}{\\sin^2\\theta}\\cdot\\cos^2\\theta",
          "explanation": "We treat the right-hand side independently, again writing $\\cot^2\\theta$ as $\\dfrac{\\cos^2\\theta}{\\sin^2\\theta}$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Simplify the right-hand side",
          "workingLatex": "\\text{RHS} = \\frac{\\cos^4\\theta}{\\sin^2\\theta}",
          "explanation": "Multiplying gives the same fraction $\\dfrac{\\cos^4\\theta}{\\sin^2\\theta}$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Compare the two sides",
          "workingLatex": "\\text{LHS} = \\frac{\\cos^4\\theta}{\\sin^2\\theta} = \\text{RHS}",
          "explanation": "Both sides reduce to the identical expression, which establishes the identity.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State the validity condition",
          "workingLatex": "\\sin\\theta \\neq 0",
          "explanation": "Because $\\cot\\theta$ and the denominators require $\\sin\\theta\\neq0$, the identity holds for all $\\theta$ where it is defined.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Numerical check at 60 degrees",
          "workingLatex": "\\cot^2 60^\\circ - \\cos^2 60^\\circ = \\tfrac{1}{3} - \\tfrac{1}{4} = \\tfrac{1}{12}, \\qquad \\cot^2 60^\\circ\\,\\cos^2 60^\\circ = \\tfrac{1}{3}\\cdot\\tfrac{1}{4} = \\tfrac{1}{12}",
          "explanation": "With $\\cot^2 60^\\circ=\\tfrac13$ and $\\cos^2 60^\\circ=\\tfrac14$, both sides equal $\\tfrac{1}{12}$, confirming the result.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Conclude the proof",
          "workingLatex": "\\cot^2\\theta - \\cos^2\\theta \\equiv \\cot^2\\theta\\,\\cos^2\\theta \\quad \\blacksquare",
          "explanation": "Each side simplifies to $\\dfrac{\\cos^4\\theta}{\\sin^2\\theta}$, so the identity is proved.",
          "diagram": null
        }
      ],
      "finalAnswer": "Both sides simplify to $\\dfrac{\\cos^4\\theta}{\\sin^2\\theta}$: the left via $\\cos^2\\theta\\big(\\tfrac{1}{\\sin^2\\theta}-1\\big)=\\cos^2\\theta\\cdot\\tfrac{\\cos^2\\theta}{\\sin^2\\theta}$, so $\\cot^2\\theta-\\cos^2\\theta\\equiv\\cot^2\\theta\\cos^2\\theta$."
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
    "answerType": "exact",
    "tags": [
      "inverse trig",
      "composition",
      "arccos",
      "arctan"
    ],
    "questionText": "Find the exact values of (a) $\\sin\\!\\left(\\arccos\\tfrac{3}{5}\\right)$ and (b) $\\cos\\!\\left(\\arctan\\tfrac{5}{12}\\right)$, justifying the sign of each answer.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall what arccos and arctan mean",
          "workingLatex": "\\alpha = \\arccos\\!\\left(\\tfrac{3}{5}\\right) \\ \\text{means}\\ \\cos\\alpha = \\tfrac{3}{5}, \\quad \\alpha \\in [0, \\pi]",
          "explanation": "The inverse cosine returns the unique angle in $[0,\\pi]$ whose cosine is $\\tfrac35$. Naming that angle $\\alpha$ turns the composition into an ordinary trigonometry problem.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up part (a)",
          "workingLatex": "\\text{Part (a): find } \\sin\\alpha, \\quad \\cos\\alpha = \\tfrac{3}{5}",
          "explanation": "We want $\\sin\\!\\big(\\arccos\\tfrac35\\big)=\\sin\\alpha$, so the task reduces to finding $\\sin\\alpha$ from the known cosine.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Fix the sign of sin alpha",
          "workingLatex": "\\cos\\alpha > 0 \\ \\Rightarrow\\ \\alpha \\in \\left[0, \\tfrac{\\pi}{2}\\right), \\quad \\sin\\alpha \\ge 0",
          "explanation": "Since $\\cos\\alpha$ is positive and $\\alpha$ lies in $[0,\\pi]$, the angle is in the first quadrant, where sine is non-negative. This is why we will take the positive root.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the Pythagorean identity",
          "workingLatex": "\\sin^2\\alpha = 1 - \\cos^2\\alpha = 1 - \\tfrac{9}{25} = \\tfrac{16}{25}",
          "explanation": "Rearranging $\\sin^2\\alpha+\\cos^2\\alpha\\equiv1$ gives $\\sin^2\\alpha$ directly from the known cosine.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Take the positive square root",
          "workingLatex": "\\sin\\alpha = +\\sqrt{\\tfrac{16}{25}} = \\tfrac{4}{5}",
          "explanation": "The sign reasoning in Step 3 tells us to keep the positive root, giving $\\sin\\alpha=\\tfrac45$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer to part (a)",
          "workingLatex": "\\sin\\!\\left(\\arccos\\tfrac{3}{5}\\right) = \\tfrac{4}{5}",
          "explanation": "This is the exact value of the first composition; the $3$-$4$-$5$ triangle is visible in the working.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Set up part (b)",
          "workingLatex": "\\beta = \\arctan\\!\\left(\\tfrac{5}{12}\\right) \\ \\text{means}\\ \\tan\\beta = \\tfrac{5}{12}, \\quad \\beta \\in \\left(-\\tfrac{\\pi}{2}, \\tfrac{\\pi}{2}\\right)",
          "explanation": "Inverse tangent returns the unique angle in $\\left(-\\tfrac\\pi2,\\tfrac\\pi2\\right)$ with the given tangent. We want $\\cos\\beta$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Fix the sign of cos beta",
          "workingLatex": "\\tan\\beta > 0 \\ \\Rightarrow\\ \\beta \\in \\left(0, \\tfrac{\\pi}{2}\\right), \\quad \\cos\\beta > 0",
          "explanation": "A positive tangent in the principal range forces $\\beta$ into the first quadrant, where cosine is positive.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Model with a right triangle",
          "workingLatex": "\\text{opposite} = 5, \\quad \\text{adjacent} = 12",
          "explanation": "Because $\\tan\\beta=\\dfrac{\\text{opposite}}{\\text{adjacent}}=\\dfrac{5}{12}$, a right triangle with legs $5$ and $12$ captures the angle $\\beta$ exactly.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Find the hypotenuse",
          "workingLatex": "\\text{hypotenuse} = \\sqrt{5^2 + 12^2} = \\sqrt{169} = 13",
          "explanation": "Pythagoras' theorem gives the hypotenuse; the sides form the familiar $5$-$12$-$13$ triangle.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Read off cos beta",
          "workingLatex": "\\cos\\beta = \\frac{\\text{adjacent}}{\\text{hypotenuse}} = \\tfrac{12}{13}",
          "explanation": "Cosine is adjacent over hypotenuse, and it is positive as anticipated in Step 8.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State the answer to part (b)",
          "workingLatex": "\\cos\\!\\left(\\arctan\\tfrac{5}{12}\\right) = \\tfrac{12}{13}",
          "explanation": "This is the exact value of the second composition.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Cross-check with an identity",
          "workingLatex": "\\sec^2\\beta = 1 + \\tan^2\\beta = 1 + \\tfrac{25}{144} = \\tfrac{169}{144}",
          "explanation": "As a check we use $1+\\tan^2\\beta\\equiv\\sec^2\\beta$, avoiding the triangle entirely.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Confirm cos beta from the check",
          "workingLatex": "\\sec\\beta = \\tfrac{13}{12} \\ \\Rightarrow\\ \\cos\\beta = \\tfrac{12}{13}",
          "explanation": "Taking the positive root (cosine positive) and reciprocating agrees with the triangle result, confirming part (b).",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "State both exact values",
          "workingLatex": "\\sin\\!\\left(\\arccos\\tfrac{3}{5}\\right) = \\tfrac{4}{5}, \\qquad \\cos\\!\\left(\\arctan\\tfrac{5}{12}\\right) = \\tfrac{12}{13}",
          "explanation": "Collecting the two results gives the final exact answers.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sin\\!\\big(\\arccos\\tfrac35\\big)=\\tfrac45$ and $\\cos\\!\\big(\\arctan\\tfrac{5}{12}\\big)=\\tfrac{12}{13}$ (both positive because each inner angle lies in the first quadrant)."
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
    "answerType": "expression",
    "tags": [
      "inverse trig",
      "arcsin",
      "expression",
      "domain"
    ],
    "questionText": "Show that $\\tan(\\arcsin x) = \\dfrac{x}{\\sqrt{1 - x^2}}$, stating the values of $x$ for which the result is valid and explaining why the positive root is taken.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Introduce the inner angle",
          "workingLatex": "\\text{Let } \\alpha = \\arcsin x, \\quad \\sin\\alpha = x, \\quad \\alpha \\in \\left[-\\tfrac{\\pi}{2}, \\tfrac{\\pi}{2}\\right]",
          "explanation": "Naming the inverse-sine output $\\alpha$ converts the composition $\\tan(\\arcsin x)$ into $\\tan\\alpha$, an ordinary trigonometric ratio to simplify.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the goal",
          "workingLatex": "\\text{Find } \\tan\\alpha \\text{ in terms of } x",
          "explanation": "Since $\\tan\\alpha=\\dfrac{\\sin\\alpha}{\\cos\\alpha}$ and we already know $\\sin\\alpha=x$, the only missing piece is $\\cos\\alpha$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Fix the sign of cos alpha",
          "workingLatex": "\\alpha \\in \\left[-\\tfrac{\\pi}{2}, \\tfrac{\\pi}{2}\\right] \\ \\Rightarrow\\ \\cos\\alpha \\ge 0",
          "explanation": "Across the whole range of $\\arcsin$, the angle lies in the right half of the circle where cosine is never negative. This is why the positive root is the correct choice.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the Pythagorean identity",
          "workingLatex": "\\cos^2\\alpha = 1 - \\sin^2\\alpha = 1 - x^2",
          "explanation": "Rearranging $\\sin^2\\alpha+\\cos^2\\alpha\\equiv1$ and substituting $\\sin\\alpha=x$ gives $\\cos^2\\alpha$ in terms of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Take the non-negative root",
          "workingLatex": "\\cos\\alpha = +\\sqrt{1 - x^2}",
          "explanation": "The sign result from Step 3 selects the positive square root, so $\\cos\\alpha=\\sqrt{1-x^2}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Right-triangle picture",
          "workingLatex": "\\text{For } 0 < x < 1:\\ \\text{opposite} = x, \\ \\text{hypotenuse} = 1, \\ \\text{adjacent} = \\sqrt{1 - x^2}",
          "explanation": "For positive $x$ the angle sits in a right triangle with opposite side $x$ and hypotenuse $1$, so the adjacent side is $\\sqrt{1-x^2}$, matching the algebra.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write tan as sin over cos",
          "workingLatex": "\\tan\\alpha = \\frac{\\sin\\alpha}{\\cos\\alpha}",
          "explanation": "Tangent is defined as the ratio of sine to cosine, so we now assemble the two pieces.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute the known values",
          "workingLatex": "\\tan\\alpha = \\frac{x}{\\sqrt{1 - x^2}}",
          "explanation": "Putting $\\sin\\alpha=x$ over $\\cos\\alpha=\\sqrt{1-x^2}$ gives the expression entirely in $x$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the composition result",
          "workingLatex": "\\tan(\\arcsin x) = \\frac{x}{\\sqrt{1 - x^2}}",
          "explanation": "This is the required simplified form of the composition.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Domain: where arcsin is defined",
          "workingLatex": "-1 \\le x \\le 1",
          "explanation": "The inner function $\\arcsin x$ only accepts inputs in $[-1,1]$, so the composition can only be considered there.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Exclude the endpoints",
          "workingLatex": "x = \\pm 1 \\ \\Rightarrow\\ \\sqrt{1 - x^2} = 0",
          "explanation": "At $x=\\pm1$ the denominator is zero (and $\\tan\\!\\big(\\pm\\tfrac\\pi2\\big)$ is undefined), so these endpoints must be removed.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State the valid domain",
          "workingLatex": "-1 < x < 1",
          "explanation": "Combining both conditions, the result is valid on the open interval $-1<x<1$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Sign sense-check",
          "workingLatex": "x > 0 \\Rightarrow \\tan\\alpha > 0, \\qquad x < 0 \\Rightarrow \\tan\\alpha < 0",
          "explanation": "The formula $\\dfrac{x}{\\sqrt{1-x^2}}$ has the same sign as $x$, matching that $\\arcsin x$ is positive for positive $x$ and negative for negative $x$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Numerical check",
          "workingLatex": "x = \\tfrac{3}{5}: \\ \\frac{\\tfrac{3}{5}}{\\sqrt{1 - \\tfrac{9}{25}}} = \\frac{\\tfrac{3}{5}}{\\tfrac{4}{5}} = \\tfrac{3}{4}",
          "explanation": "With $\\sin\\alpha=\\tfrac35$ the $3$-$4$-$5$ triangle gives $\\tan\\alpha=\\tfrac34$, exactly what the formula produces.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "State the final result with domain",
          "workingLatex": "\\tan(\\arcsin x) = \\frac{x}{\\sqrt{1 - x^2}}, \\quad -1 < x < 1",
          "explanation": "The simplified expression together with its domain is the complete answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\tan(\\arcsin x)=\\dfrac{x}{\\sqrt{1-x^2}}$, valid for $-1<x<1$; the positive root is taken because $\\cos\\alpha\\ge0$ across the whole range of $\\arcsin$."
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
    "answerType": "proof",
    "tags": [
      "inverse trig",
      "arcsin",
      "arccos",
      "proof"
    ],
    "questionText": "Prove that $\\arcsin x + \\arccos x = \\dfrac{\\pi}{2}$ for all $x \\in [-1, 1]$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set out what must be proved",
          "workingLatex": "\\text{Prove that }\\ \\arcsin x + \\arccos x = \\tfrac{\\pi}{2}, \\quad x \\in [-1, 1]",
          "explanation": "The plan is to prove it first for $x\\in[0,1]$ using a right triangle whose two acute angles are $\\arcsin x$ and $\\arccos x$, then extend to negative $x$ using the reflection properties of the inverse functions.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Introduce the angle for non-negative x",
          "workingLatex": "\\text{Let } x \\in [0,1], \\quad \\alpha = \\arcsin x, \\quad \\sin\\alpha = x, \\quad \\alpha \\in \\left[0, \\tfrac{\\pi}{2}\\right]",
          "explanation": "For non-negative $x$ the inverse sine gives an angle in the first quadrant, which can be drawn as an acute angle in a right triangle.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Build a right triangle",
          "workingLatex": "\\text{hypotenuse} = 1, \\quad \\text{opposite}(\\alpha) = x",
          "explanation": "Choosing hypotenuse $1$ makes $\\sin\\alpha=\\dfrac{\\text{opposite}}{1}=x$ automatically, so the side opposite $\\alpha$ has length $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the adjacent side",
          "workingLatex": "\\text{adjacent}(\\alpha) = \\sqrt{1 - x^2}",
          "explanation": "Pythagoras gives the remaining side; it is real because $x\\in[0,1]$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Name the other acute angle",
          "workingLatex": "\\gamma = \\tfrac{\\pi}{2} - \\alpha",
          "explanation": "In any right triangle the two non-right angles add to $\\tfrac{\\pi}{2}$, because the three angles sum to $\\pi$ and one of them is the right angle. Call the second one $\\gamma$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Relate gamma to the sides",
          "workingLatex": "\\cos\\gamma = \\frac{\\text{adjacent}(\\gamma)}{\\text{hypotenuse}} = \\frac{x}{1} = x",
          "explanation": "The side opposite $\\alpha$ is the side adjacent to $\\gamma$, so $\\cos\\gamma=\\dfrac{x}{1}=x$. This is the bridge to the inverse cosine.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Identify gamma as arccos x",
          "workingLatex": "\\gamma \\in \\left[0, \\tfrac{\\pi}{2}\\right] \\subseteq [0, \\pi], \\quad \\cos\\gamma = x \\ \\Rightarrow\\ \\gamma = \\arccos x",
          "explanation": "Since $\\gamma$ lies inside the range $[0,\\pi]$ of $\\arccos$ and has cosine $x$, it must be exactly $\\arccos x$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Add the two angles",
          "workingLatex": "\\arcsin x + \\arccos x = \\alpha + \\gamma = \\alpha + \\left(\\tfrac{\\pi}{2} - \\alpha\\right) = \\tfrac{\\pi}{2}",
          "explanation": "Adding the two acute angles, the $\\alpha$ terms cancel and the sum is $\\tfrac\\pi2$, proving the identity for $x\\in[0,1]$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check the endpoints",
          "workingLatex": "x=0:\\ 0 + \\tfrac{\\pi}{2} = \\tfrac{\\pi}{2}; \\qquad x=1:\\ \\tfrac{\\pi}{2} + 0 = \\tfrac{\\pi}{2}",
          "explanation": "The boundary values behave correctly, confirming the triangle argument covers the whole interval $[0,1]$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Prepare to extend to negative x",
          "workingLatex": "\\text{Now take } x \\in [0,1] \\text{ and consider the argument } -x",
          "explanation": "To reach negative inputs we use the known symmetry (reflection) properties of the two inverse functions, which are standard graph features.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Use the odd symmetry of arcsin",
          "workingLatex": "\\arcsin(-x) = -\\arcsin x",
          "explanation": "The graph of $\\arcsin$ has rotational symmetry about the origin, so it is an odd function.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Use the reflection property of arccos",
          "workingLatex": "\\arccos(-x) = \\pi - \\arccos x",
          "explanation": "The graph of $\\arccos$ is symmetric about the point $\\big(0,\\tfrac\\pi2\\big)$, giving this reflection relationship.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Add the two for the argument minus x",
          "workingLatex": "\\arcsin(-x) + \\arccos(-x) = -\\arcsin x + \\pi - \\arccos x",
          "explanation": "Substituting the two symmetry results sets up a sum that can be simplified using the positive-$x$ case already proved.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Simplify using the proved case",
          "workingLatex": "= \\pi - (\\arcsin x + \\arccos x) = \\pi - \\tfrac{\\pi}{2} = \\tfrac{\\pi}{2}",
          "explanation": "Since $\\arcsin x+\\arccos x=\\tfrac\\pi2$ for $x\\in[0,1]$, the bracket is $\\tfrac\\pi2$, and the sum for negative arguments is also $\\tfrac\\pi2$.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Conclude for the whole domain",
          "workingLatex": "\\arcsin x + \\arccos x = \\tfrac{\\pi}{2} \\quad \\text{for all } x \\in [-1, 1] \\quad \\blacksquare",
          "explanation": "The identity holds for non-negative $x$ by the triangle argument and for negative $x$ by symmetry, so it is true across the entire domain.",
          "diagram": null
        }
      ],
      "finalAnswer": "For $x\\in[0,1]$ the two acute angles of a right triangle with hypotenuse $1$ are $\\arcsin x$ and $\\arccos x$, which sum to $\\tfrac\\pi2$; the odd symmetry of $\\arcsin$ and $\\arccos(-x)=\\pi-\\arccos x$ extend this to $[-1,1]$. Hence $\\arcsin x+\\arccos x=\\tfrac\\pi2$."
    }
  },
  {
    "id": "al.y2.pure.reciprocal-inverse-trig.q069",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Reciprocal and inverse trig functions",
    "subtopicId": "al.y2.pure.reciprocal-inverse-trig",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "inverse trig",
      "arcsin",
      "solve equation"
    ],
    "questionText": "Solve the equation $\\arcsin(2x - 1) = \\dfrac{\\pi}{6}$, giving the exact value of $x$ and checking it lies in the valid domain.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Understand the equation",
          "workingLatex": "\\arcsin(2x - 1) = \\tfrac{\\pi}{6}",
          "explanation": "The unknown $x$ sits inside an inverse sine. The strategy is to undo $\\arcsin$ by applying $\\sin$ to both sides, then solve the resulting linear equation, but first we check the equation can have a solution.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Domain of the inner expression",
          "workingLatex": "-1 \\le 2x - 1 \\le 1",
          "explanation": "The inverse sine only accepts inputs between $-1$ and $1$, so the expression $2x-1$ must lie in that range for the left-hand side to be defined.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve the domain inequality",
          "workingLatex": "0 \\le 2x \\le 2 \\ \\Rightarrow\\ 0 \\le x \\le 1",
          "explanation": "Adding $1$ throughout and dividing by $2$ shows any valid solution must lie in $[0,1]$; we will confirm our answer against this.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Range check on the right-hand side",
          "workingLatex": "\\tfrac{\\pi}{6} \\in \\left[-\\tfrac{\\pi}{2}, \\tfrac{\\pi}{2}\\right]",
          "explanation": "The output of $\\arcsin$ always lies in $\\left[-\\tfrac\\pi2,\\tfrac\\pi2\\right]$; since $\\tfrac\\pi6$ is inside this range, a solution is possible.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply sine to both sides",
          "workingLatex": "\\sin\\big(\\arcsin(2x - 1)\\big) = \\sin\\tfrac{\\pi}{6}",
          "explanation": "Applying $\\sin$ is the inverse operation to $\\arcsin$, so it will free the unknown from inside the inverse function.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify the left-hand side",
          "workingLatex": "\\sin\\big(\\arcsin(2x - 1)\\big) = 2x - 1",
          "explanation": "Because $2x-1\\in[-1,1]$, the composition $\\sin(\\arcsin u)$ returns $u$ exactly, leaving $2x-1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Recall the special triangle value",
          "workingLatex": "\\tfrac{\\pi}{6} = 30^\\circ",
          "explanation": "The angle $\\tfrac\\pi6$ is $30^\\circ$, one of the standard angles whose sine is known exactly from half of an equilateral triangle.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Evaluate sin of pi over six",
          "workingLatex": "\\sin\\tfrac{\\pi}{6} = \\tfrac{1}{2}",
          "explanation": "From the $30$-$60$-$90$ triangle, $\\sin 30^\\circ=\\tfrac12$, giving the exact right-hand side.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Form the linear equation",
          "workingLatex": "2x - 1 = \\tfrac{1}{2}",
          "explanation": "Equating the two simplified sides leaves a straightforward linear equation in $x$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Add one to both sides",
          "workingLatex": "2x = \\tfrac{3}{2}",
          "explanation": "Adding $1$ (which is $\\tfrac22$) to $\\tfrac12$ gives $\\tfrac32$, isolating the $2x$ term.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Divide by two",
          "workingLatex": "x = \\tfrac{3}{4}",
          "explanation": "Dividing both sides by $2$ gives the candidate solution.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Check against the domain",
          "workingLatex": "x = \\tfrac{3}{4} \\in [0, 1]",
          "explanation": "The value lies in the allowed interval from Step 3, so it is a genuine solution rather than an extraneous one.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Substitute back to verify",
          "workingLatex": "2\\cdot\\tfrac{3}{4} - 1 = \\tfrac{1}{2}, \\qquad \\arcsin\\tfrac{1}{2} = \\tfrac{\\pi}{6}",
          "explanation": "Feeding $x=\\tfrac34$ back in gives $\\arcsin\\tfrac12$, which is indeed $\\tfrac\\pi6$, confirming the solution.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Note uniqueness",
          "workingLatex": "\\arcsin \\text{ is one-to-one} \\ \\Rightarrow\\ x = \\tfrac{3}{4} \\text{ is the only solution}",
          "explanation": "Because $\\arcsin$ is a one-to-one function, applying $\\sin$ did not introduce extra solutions, so $x=\\tfrac34$ is unique.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "State the answer",
          "workingLatex": "x = \\tfrac{3}{4}",
          "explanation": "This is the exact and only solution of the equation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x=\\tfrac34$, which lies in the required interval $[0,1]$ and satisfies $\\arcsin\\tfrac12=\\tfrac\\pi6$."
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
    "answerType": "expression",
    "tags": [
      "inverse trig",
      "arctan",
      "sec",
      "expression"
    ],
    "questionText": "Show that $\\sec(\\arctan x) = \\sqrt{1 + x^2}$ for all real $x$, and hence find the exact value of $\\sec\\!\\left(\\arctan\\tfrac{3}{4}\\right)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Introduce the inner angle",
          "workingLatex": "\\text{Let } \\beta = \\arctan x, \\quad \\tan\\beta = x, \\quad \\beta \\in \\left(-\\tfrac{\\pi}{2}, \\tfrac{\\pi}{2}\\right)",
          "explanation": "Naming the inverse-tangent output $\\beta$ turns $\\sec(\\arctan x)$ into $\\sec\\beta$, an ordinary secant to evaluate.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the goal",
          "workingLatex": "\\text{Find } \\sec\\beta \\text{ in terms of } x",
          "explanation": "Since $\\tan\\beta=x$ is known, the Pythagorean identity linking tangent and secant is the natural tool.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Fix the sign of sec beta",
          "workingLatex": "\\beta \\in \\left(-\\tfrac{\\pi}{2}, \\tfrac{\\pi}{2}\\right) \\ \\Rightarrow\\ \\cos\\beta > 0 \\ \\Rightarrow\\ \\sec\\beta > 0",
          "explanation": "Across the whole range of $\\arctan$, cosine is positive, so its reciprocal secant is positive too. This tells us which square root to keep later.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Recall the Pythagorean identity",
          "workingLatex": "1 + \\tan^2\\beta \\equiv \\sec^2\\beta",
          "explanation": "Dividing $\\sin^2\\beta+\\cos^2\\beta\\equiv1$ by $\\cos^2\\beta$ produces the identity connecting $\\tan\\beta$ and $\\sec\\beta$ directly.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute tan beta equals x",
          "workingLatex": "\\sec^2\\beta = 1 + x^2",
          "explanation": "Replacing $\\tan\\beta$ with $x$ expresses $\\sec^2\\beta$ purely in terms of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Take the positive root",
          "workingLatex": "\\sec\\beta = +\\sqrt{1 + x^2}",
          "explanation": "The sign reasoning in Step 3 selects the positive root, so $\\sec\\beta=\\sqrt{1+x^2}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the composition result",
          "workingLatex": "\\sec(\\arctan x) = \\sqrt{1 + x^2}",
          "explanation": "This is the required simplified form of the composition.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the domain",
          "workingLatex": "x \\in \\mathbb{R}",
          "explanation": "The inner function $\\arctan x$ accepts every real number, and $1+x^2\\ge1>0$ always, so the result is valid for all real $x$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Note the even symmetry",
          "workingLatex": "\\sec(\\arctan(-x)) = \\sqrt{1 + x^2} = \\sec(\\arctan x)",
          "explanation": "The expression $\\sqrt{1+x^2}$ is unchanged by replacing $x$ with $-x$, consistent with $\\sec\\beta$ being an even function of $\\beta$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Right-triangle picture",
          "workingLatex": "\\text{For } x > 0:\\ \\text{opposite} = x, \\ \\text{adjacent} = 1, \\ \\text{hypotenuse} = \\sqrt{1 + x^2}",
          "explanation": "For positive $x$, $\\tan\\beta=\\dfrac{x}{1}$ fits a right triangle with legs $x$ and $1$, whose hypotenuse is $\\sqrt{1+x^2}$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Confirm sec from the triangle",
          "workingLatex": "\\sec\\beta = \\frac{\\text{hypotenuse}}{\\text{adjacent}} = \\frac{\\sqrt{1 + x^2}}{1} = \\sqrt{1 + x^2}",
          "explanation": "Secant is hypotenuse over adjacent, which agrees with the identity-based result.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Evaluate at x equals three quarters",
          "workingLatex": "\\sec\\!\\left(\\arctan\\tfrac{3}{4}\\right) = \\sqrt{1 + \\left(\\tfrac{3}{4}\\right)^2}",
          "explanation": "Substituting $x=\\tfrac34$ into the general formula gives a specific value to compute.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Simplify inside the root",
          "workingLatex": "= \\sqrt{1 + \\tfrac{9}{16}} = \\sqrt{\\tfrac{25}{16}}",
          "explanation": "Adding $1=\\tfrac{16}{16}$ to $\\tfrac{9}{16}$ gives $\\tfrac{25}{16}$, a perfect square over a perfect square.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Take the root",
          "workingLatex": "= \\tfrac{5}{4}",
          "explanation": "Both numerator and denominator are perfect squares, so the root is exact: $\\sec\\!\\big(\\arctan\\tfrac34\\big)=\\tfrac54$. The $3$-$4$-$5$ triangle confirms this.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "State the results",
          "workingLatex": "\\sec(\\arctan x) = \\sqrt{1 + x^2} \\ (x \\in \\mathbb{R}), \\qquad \\sec\\!\\left(\\arctan\\tfrac{3}{4}\\right) = \\tfrac{5}{4}",
          "explanation": "The general identity and the specific value together form the complete answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sec(\\arctan x)=\\sqrt{1+x^2}$ for all real $x$ (the positive root is taken since $\\cos\\beta>0$ on the range of $\\arctan$), and $\\sec\\!\\big(\\arctan\\tfrac34\\big)=\\tfrac54$."
    }
  }
];
