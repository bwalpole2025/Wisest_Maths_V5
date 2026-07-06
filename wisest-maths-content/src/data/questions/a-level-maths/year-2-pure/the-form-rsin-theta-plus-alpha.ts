import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "id": "al.y2.pure.rsin-form.q001",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": ["harmonic form", "Rsin", "surds"],
    "questionText": "Express $3\\sin\\theta + 4\\cos\\theta$ in the form $R\\sin(\\theta + \\alpha)$ where $R > 0$ and $0 < \\alpha < 90^\\circ$, giving $\\alpha$ to the nearest degree.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the target expanded form",
          "workingLatex": "R\\sin(\\theta + \\alpha) = R\\cos\\alpha\\sin\\theta + R\\sin\\alpha\\cos\\theta",
          "explanation": "Expanding the target with the addition formula lets us compare it term by term with the given expression.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Compare coefficients of sine",
          "workingLatex": "R\\cos\\alpha = 3",
          "explanation": "Matching the $\\sin\\theta$ terms links $R$ and $\\alpha$ to the coefficient $3$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare coefficients of cosine",
          "workingLatex": "R\\sin\\alpha = 4",
          "explanation": "Matching the $\\cos\\theta$ terms gives the second equation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find R using the sum of squares",
          "workingLatex": "R^2 = 3^2 + 4^2 = 25 \\;\\Rightarrow\\; R = 5",
          "explanation": "Squaring and adding the two equations uses $\\cos^2\\alpha + \\sin^2\\alpha = 1$, leaving $R^2$ as the sum of the squared coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find alpha using the ratio",
          "workingLatex": "\\tan\\alpha = \\frac{R\\sin\\alpha}{R\\cos\\alpha} = \\frac{4}{3}",
          "explanation": "Dividing the two equations cancels $R$, leaving a tangent equation for $\\alpha$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate alpha",
          "workingLatex": "\\alpha = \\tan^{-1}\\frac{4}{3} \\approx 53^\\circ",
          "explanation": "The inverse tangent gives $\\alpha$, which lies in the required range $0$ to $90^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the final form",
          "workingLatex": "3\\sin\\theta + 4\\cos\\theta = 5\\sin(\\theta + 53^\\circ)",
          "explanation": "Combining $R$ and $\\alpha$ gives the required harmonic form.",
          "diagram": null
        }
      ],
      "finalAnswer": "$3\\sin\\theta + 4\\cos\\theta = 5\\sin(\\theta + 53^\\circ)$"
    }
  },
  {
    "id": "al.y2.pure.rsin-form.q002",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": ["harmonic form", "Rcos", "surds"],
    "questionText": "Express $5\\cos\\theta + 12\\sin\\theta$ in the form $R\\sin(\\theta + \\alpha)$ where $R > 0$ and $0 < \\alpha < 90^\\circ$, giving $\\alpha$ to the nearest degree.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Reorder to match the sine-first form",
          "workingLatex": "5\\cos\\theta + 12\\sin\\theta = 12\\sin\\theta + 5\\cos\\theta",
          "explanation": "Writing the sine term first makes the comparison with $R\\sin(\\theta + \\alpha)$ cleaner.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expand the target form",
          "workingLatex": "R\\sin(\\theta + \\alpha) = R\\cos\\alpha\\sin\\theta + R\\sin\\alpha\\cos\\theta",
          "explanation": "The expansion sets up the coefficient comparison.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare coefficients",
          "workingLatex": "R\\cos\\alpha = 12, \\quad R\\sin\\alpha = 5",
          "explanation": "Matching the sine and cosine terms gives two equations.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find R",
          "workingLatex": "R^2 = 12^2 + 5^2 = 169 \\;\\Rightarrow\\; R = 13",
          "explanation": "The sum of squares gives $R = 13$ (a $5$-$12$-$13$ triangle).",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find alpha",
          "workingLatex": "\\tan\\alpha = \\frac{5}{12} \\;\\Rightarrow\\; \\alpha \\approx 23^\\circ",
          "explanation": "The ratio gives the tangent of $\\alpha$, and the inverse tangent gives about $23^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the final form",
          "workingLatex": "5\\cos\\theta + 12\\sin\\theta = 13\\sin(\\theta + 23^\\circ)",
          "explanation": "Combining $R$ and $\\alpha$ gives the required form.",
          "diagram": null
        }
      ],
      "finalAnswer": "$5\\cos\\theta + 12\\sin\\theta = 13\\sin(\\theta + 23^\\circ)$"
    }
  },
  {
    "id": "al.y2.pure.rsin-form.q003",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Easy",
    "marks": 5,
    "answerType": "expression",
    "tags": ["harmonic form", "Rcos", "exact", "surds"],
    "questionText": "Express $\\sin\\theta + \\sqrt{3}\\cos\\theta$ in the form $R\\sin(\\theta + \\alpha)$ where $R > 0$ and $0 < \\alpha < 90^\\circ$, giving exact values of $R$ and $\\alpha$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Expand the target form",
          "workingLatex": "R\\sin(\\theta + \\alpha) = R\\cos\\alpha\\sin\\theta + R\\sin\\alpha\\cos\\theta",
          "explanation": "The expansion prepares the coefficient comparison.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Compare coefficients",
          "workingLatex": "R\\cos\\alpha = 1, \\quad R\\sin\\alpha = \\sqrt3",
          "explanation": "Matching the sine and cosine coefficients from the given expression.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find R",
          "workingLatex": "R^2 = 1^2 + (\\sqrt3)^2 = 4 \\;\\Rightarrow\\; R = 2",
          "explanation": "The sum of squares is $1 + 3 = 4$, so $R = 2$ exactly.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find alpha",
          "workingLatex": "\\tan\\alpha = \\frac{\\sqrt3}{1} = \\sqrt3",
          "explanation": "The ratio gives $\\tan\\alpha = \\sqrt3$, a standard exact value.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Identify the exact angle",
          "workingLatex": "\\alpha = 60^\\circ = \\frac{\\pi}{3}",
          "explanation": "The angle with tangent $\\sqrt3$ in the required range is $60^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the final form",
          "workingLatex": "\\sin\\theta + \\sqrt3\\cos\\theta = 2\\sin(\\theta + 60^\\circ)",
          "explanation": "Both $R$ and $\\alpha$ are exact, giving a clean harmonic form.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sin\\theta + \\sqrt3\\cos\\theta = 2\\sin(\\theta + 60^\\circ)$"
    }
  },
  {
    "id": "al.y2.pure.rsin-form.q004",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Easy",
    "marks": 5,
    "answerType": "expression",
    "tags": ["harmonic form", "Rcos", "exact"],
    "questionText": "Express $\\cos\\theta - \\sin\\theta$ in the form $R\\cos(\\theta + \\alpha)$ where $R > 0$ and $0 < \\alpha < 90^\\circ$, giving exact values.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Expand the target form",
          "workingLatex": "R\\cos(\\theta + \\alpha) = R\\cos\\alpha\\cos\\theta - R\\sin\\alpha\\sin\\theta",
          "explanation": "For the cosine form, the expansion has a minus sign between the terms, matching the given expression.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Compare coefficients",
          "workingLatex": "R\\cos\\alpha = 1, \\quad R\\sin\\alpha = 1",
          "explanation": "Matching the $\\cos\\theta$ term gives $R\\cos\\alpha = 1$, and matching the $\\sin\\theta$ term (both sides have $-$) gives $R\\sin\\alpha = 1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find R",
          "workingLatex": "R^2 = 1^2 + 1^2 = 2 \\;\\Rightarrow\\; R = \\sqrt2",
          "explanation": "The sum of squares gives $R = \\sqrt2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find alpha",
          "workingLatex": "\\tan\\alpha = \\frac{1}{1} = 1 \\;\\Rightarrow\\; \\alpha = 45^\\circ",
          "explanation": "Equal components give $\\tan\\alpha = 1$, so $\\alpha = 45^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the final form",
          "workingLatex": "\\cos\\theta - \\sin\\theta = \\sqrt2\\cos(\\theta + 45^\\circ)",
          "explanation": "Both values are exact, giving a clean harmonic form.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check with a value",
          "workingLatex": "\\theta = 0: \\text{ LHS} = 1, \\; \\sqrt2\\cos 45^\\circ = 1 \\;\\checkmark",
          "explanation": "Testing $\\theta = 0$ gives $1$ on both sides, confirming the result.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\cos\\theta - \\sin\\theta = \\sqrt2\\cos(\\theta + 45^\\circ)$"
    }
  },
  {
    "id": "al.y2.pure.rsin-form.q005",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Easy",
    "marks": 5,
    "answerType": "expression",
    "tags": ["harmonic form", "Rsin", "difference"],
    "questionText": "Express $\\sqrt{3}\\sin\\theta - \\cos\\theta$ in the form $R\\sin(\\theta - \\alpha)$ where $R > 0$ and $0 < \\alpha < 90^\\circ$, giving exact values.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Expand the target form",
          "workingLatex": "R\\sin(\\theta - \\alpha) = R\\cos\\alpha\\sin\\theta - R\\sin\\alpha\\cos\\theta",
          "explanation": "The minus form expands with a minus between the terms, matching the given difference.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Compare coefficients",
          "workingLatex": "R\\cos\\alpha = \\sqrt3, \\quad R\\sin\\alpha = 1",
          "explanation": "Matching the sine term gives $R\\cos\\alpha = \\sqrt3$; matching the cosine term (both sides negative) gives $R\\sin\\alpha = 1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find R",
          "workingLatex": "R^2 = (\\sqrt3)^2 + 1^2 = 4 \\;\\Rightarrow\\; R = 2",
          "explanation": "The sum of squares gives $R = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find alpha",
          "workingLatex": "\\tan\\alpha = \\frac{1}{\\sqrt3} \\;\\Rightarrow\\; \\alpha = 30^\\circ",
          "explanation": "The ratio gives $\\tan\\alpha = \\frac{1}{\\sqrt3}$, so $\\alpha = 30^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the final form",
          "workingLatex": "\\sqrt3\\sin\\theta - \\cos\\theta = 2\\sin(\\theta - 30^\\circ)",
          "explanation": "Both values are exact, giving the required harmonic form.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sqrt3\\sin\\theta - \\cos\\theta = 2\\sin(\\theta - 30^\\circ)$"
    }
  },
  {
    "id": "al.y2.pure.rsin-form.q006",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": ["harmonic form", "Rsin", "surds"],
    "questionText": "Express $2\\sin\\theta + 2\\cos\\theta$ in the form $R\\sin(\\theta + \\alpha)$ where $R > 0$ and $0 < \\alpha < 90^\\circ$, giving exact values.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Expand the target form",
          "workingLatex": "R\\sin(\\theta + \\alpha) = R\\cos\\alpha\\sin\\theta + R\\sin\\alpha\\cos\\theta",
          "explanation": "The expansion prepares the coefficient comparison.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Compare coefficients",
          "workingLatex": "R\\cos\\alpha = 2, \\quad R\\sin\\alpha = 2",
          "explanation": "Both coefficients are $2$, which will make $\\alpha$ a familiar angle.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find R",
          "workingLatex": "R^2 = 2^2 + 2^2 = 8 \\;\\Rightarrow\\; R = 2\\sqrt2",
          "explanation": "The sum of squares is $8$, whose root is $2\\sqrt2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find alpha",
          "workingLatex": "\\tan\\alpha = \\frac{2}{2} = 1 \\;\\Rightarrow\\; \\alpha = 45^\\circ",
          "explanation": "Equal components give $\\tan\\alpha = 1$, so $\\alpha = 45^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the final form",
          "workingLatex": "2\\sin\\theta + 2\\cos\\theta = 2\\sqrt2\\sin(\\theta + 45^\\circ)",
          "explanation": "Combining the exact $R$ and $\\alpha$ gives the harmonic form.",
          "diagram": null
        }
      ],
      "finalAnswer": "$2\\sin\\theta + 2\\cos\\theta = 2\\sqrt2\\sin(\\theta + 45^\\circ)$"
    }
  },
  {
    "id": "al.y2.pure.rsin-form.q007",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": ["harmonic form", "Rcos"],
    "questionText": "Express $7\\cos\\theta - 24\\sin\\theta$ in the form $R\\cos(\\theta + \\alpha)$ where $R > 0$ and $0 < \\alpha < 90^\\circ$, giving $\\alpha$ to the nearest degree.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Expand the target form",
          "workingLatex": "R\\cos(\\theta + \\alpha) = R\\cos\\alpha\\cos\\theta - R\\sin\\alpha\\sin\\theta",
          "explanation": "The cosine form has a minus between the terms, matching the given expression.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Compare coefficients",
          "workingLatex": "R\\cos\\alpha = 7, \\quad R\\sin\\alpha = 24",
          "explanation": "Matching the cosine term gives $7$; matching the sine term (both negative) gives $24$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find R",
          "workingLatex": "R^2 = 7^2 + 24^2 = 625 \\;\\Rightarrow\\; R = 25",
          "explanation": "The sum of squares is $625$ (a $7$-$24$-$25$ triangle), so $R = 25$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find alpha",
          "workingLatex": "\\tan\\alpha = \\frac{24}{7} \\;\\Rightarrow\\; \\alpha \\approx 74^\\circ",
          "explanation": "The ratio gives the tangent of $\\alpha$; the inverse tangent is about $74^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the final form",
          "workingLatex": "7\\cos\\theta - 24\\sin\\theta = 25\\cos(\\theta + 74^\\circ)",
          "explanation": "Combining $R$ and $\\alpha$ gives the required form.",
          "diagram": null
        }
      ],
      "finalAnswer": "$7\\cos\\theta - 24\\sin\\theta = 25\\cos(\\theta + 74^\\circ)$"
    }
  },
  {
    "id": "al.y2.pure.rsin-form.q008",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": ["harmonic form", "maximum", "minimum"],
    "questionText": "The expression $3\\sin\\theta + 4\\cos\\theta$ can be written as $5\\sin(\\theta + 53.13^\\circ)$. Write down its maximum and minimum values.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the range of sine",
          "workingLatex": "-1 \\le \\sin(\\theta + 53.13^\\circ) \\le 1",
          "explanation": "Whatever the angle, the sine function is bounded between $-1$ and $1$; this controls the whole expression.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Multiply through by R",
          "workingLatex": "-5 \\le 5\\sin(\\theta + 53.13^\\circ) \\le 5",
          "explanation": "Multiplying the bounds by the positive amplitude $R = 5$ scales the range.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify the maximum",
          "workingLatex": "\\text{max} = 5",
          "explanation": "The largest value occurs when the sine equals $1$, giving $5$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify the minimum",
          "workingLatex": "\\text{min} = -5",
          "explanation": "The smallest value occurs when the sine equals $-1$, giving $-5$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Note when the maximum occurs",
          "workingLatex": "\\sin(\\theta + 53.13^\\circ) = 1 \\;\\Rightarrow\\; \\theta + 53.13^\\circ = 90^\\circ",
          "explanation": "The maximum happens when the bracket equals $90^\\circ$, i.e. $\\theta \\approx 36.87^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the results",
          "workingLatex": "\\text{max} = 5, \\quad \\text{min} = -5",
          "explanation": "The amplitude $R$ directly gives the maximum and minimum of any harmonic expression.",
          "diagram": null
        }
      ],
      "finalAnswer": "Maximum $= 5$, minimum $= -5$."
    }
  },
  {
    "id": "al.y2.pure.rsin-form.q009",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": ["harmonic form", "R value"],
    "questionText": "Find the exact value of $R$ when $6\\sin\\theta - 8\\cos\\theta$ is written in the form $R\\sin(\\theta - \\alpha)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the coefficients",
          "workingLatex": "a = 6, \\quad b = 8",
          "explanation": "The amplitude depends only on the sizes of the two coefficients, regardless of the signs.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Use the amplitude formula",
          "workingLatex": "R = \\sqrt{a^2 + b^2}",
          "explanation": "For any expression $a\\sin\\theta \\pm b\\cos\\theta$, the amplitude is the root of the sum of the squared coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute",
          "workingLatex": "R = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64}",
          "explanation": "Squaring and adding the coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify",
          "workingLatex": "R = \\sqrt{100} = 10",
          "explanation": "The sum is $100$, a perfect square, so $R = 10$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the value",
          "workingLatex": "R = 10",
          "explanation": "This is the exact amplitude, a $6$-$8$-$10$ (i.e. $3$-$4$-$5$ scaled) triangle.",
          "diagram": null
        }
      ],
      "finalAnswer": "$R = 10$"
    }
  },
  {
    "id": "al.y2.pure.rsin-form.q010",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Easy",
    "marks": 5,
    "answerType": "expression",
    "tags": ["harmonic form", "radians", "exact"],
    "questionText": "Express $\\cos\\theta + \\sin\\theta$ in the form $R\\sin(\\theta + \\alpha)$ where $R > 0$ and $0 < \\alpha < \\dfrac{\\pi}{2}$, giving exact values in radians.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Reorder the expression",
          "workingLatex": "\\cos\\theta + \\sin\\theta = \\sin\\theta + \\cos\\theta",
          "explanation": "Writing the sine term first aligns with the $R\\sin(\\theta + \\alpha)$ template.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Compare coefficients",
          "workingLatex": "R\\cos\\alpha = 1, \\quad R\\sin\\alpha = 1",
          "explanation": "Both coefficients are $1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find R",
          "workingLatex": "R = \\sqrt{1^2 + 1^2} = \\sqrt2",
          "explanation": "The sum of squares gives $R = \\sqrt2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find alpha in radians",
          "workingLatex": "\\tan\\alpha = 1 \\;\\Rightarrow\\; \\alpha = \\frac{\\pi}{4}",
          "explanation": "Equal components give $\\tan\\alpha = 1$, so $\\alpha = \\frac{\\pi}{4}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the final form",
          "workingLatex": "\\cos\\theta + \\sin\\theta = \\sqrt2\\sin\\left(\\theta + \\frac{\\pi}{4}\\right)",
          "explanation": "Combining the exact values gives the harmonic form in radians.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\cos\\theta + \\sin\\theta = \\sqrt2\\sin\\left(\\theta + \\dfrac{\\pi}{4}\\right)$"
    }
  },
  {
    "id": "al.y2.pure.rsin-form.q011",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": ["harmonic form", "maximum", "value of theta"],
    "questionText": "Given that $\\sin\\theta + \\sqrt3\\cos\\theta = 2\\sin(\\theta + 60^\\circ)$, find the value of $\\theta$ in $0^\\circ \\le \\theta < 360^\\circ$ at which the maximum occurs.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the maximum condition",
          "workingLatex": "\\text{max when } \\sin(\\theta + 60^\\circ) = 1",
          "explanation": "The expression is largest when the sine reaches its peak value of $1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Solve for the bracket",
          "workingLatex": "\\theta + 60^\\circ = 90^\\circ",
          "explanation": "Sine equals $1$ when its argument is $90^\\circ$ (within one revolution).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Isolate theta",
          "workingLatex": "\\theta = 90^\\circ - 60^\\circ = 30^\\circ",
          "explanation": "Subtracting the phase shift gives $\\theta = 30^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check the interval",
          "workingLatex": "30^\\circ \\in [0^\\circ, 360^\\circ) \\;\\checkmark",
          "explanation": "The value lies in the required range, so it is valid.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the answer",
          "workingLatex": "\\theta = 30^\\circ, \\quad \\text{max value} = 2",
          "explanation": "At $\\theta = 30^\\circ$ the expression reaches its maximum of $R = 2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta = 30^\\circ$ (maximum value $2$)."
    }
  },
  {
    "id": "al.y2.pure.rsin-form.q012",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Easy",
    "marks": 5,
    "answerType": "expression",
    "tags": ["harmonic form", "Rcos", "difference"],
    "questionText": "Express $\\cos\\theta - \\sqrt3\\sin\\theta$ in the form $R\\cos(\\theta + \\alpha)$ where $R > 0$ and $0 < \\alpha < 90^\\circ$, giving exact values.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Expand the target form",
          "workingLatex": "R\\cos(\\theta + \\alpha) = R\\cos\\alpha\\cos\\theta - R\\sin\\alpha\\sin\\theta",
          "explanation": "The cosine form has a minus between the terms, matching the given expression.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Compare coefficients",
          "workingLatex": "R\\cos\\alpha = 1, \\quad R\\sin\\alpha = \\sqrt3",
          "explanation": "Matching the cosine and sine terms gives two equations.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find R",
          "workingLatex": "R = \\sqrt{1^2 + (\\sqrt3)^2} = \\sqrt4 = 2",
          "explanation": "The sum of squares gives $R = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find alpha",
          "workingLatex": "\\tan\\alpha = \\frac{\\sqrt3}{1} = \\sqrt3 \\;\\Rightarrow\\; \\alpha = 60^\\circ",
          "explanation": "The ratio gives $\\tan\\alpha = \\sqrt3$, so $\\alpha = 60^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the final form",
          "workingLatex": "\\cos\\theta - \\sqrt3\\sin\\theta = 2\\cos(\\theta + 60^\\circ)",
          "explanation": "Combining the exact values gives the harmonic form.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\cos\\theta - \\sqrt3\\sin\\theta = 2\\cos(\\theta + 60^\\circ)$"
    }
  },
  {
    "id": "al.y2.pure.rsin-form.q013",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": ["harmonic form", "equations", "solving"],
    "questionText": "Solve $\\sqrt3\\sin\\theta - \\cos\\theta = 1$ for $0^\\circ \\le \\theta < 360^\\circ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write in harmonic form",
          "workingLatex": "\\sqrt3\\sin\\theta - \\cos\\theta = 2\\sin(\\theta - 30^\\circ)",
          "explanation": "From $R = 2$ and $\\tan\\alpha = \\frac{1}{\\sqrt3}$, the expression becomes a single sine, which is far easier to solve.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rewrite the equation",
          "workingLatex": "2\\sin(\\theta - 30^\\circ) = 1",
          "explanation": "Substituting the harmonic form turns the equation into a standard sine equation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Isolate the sine",
          "workingLatex": "\\sin(\\theta - 30^\\circ) = \\frac{1}{2}",
          "explanation": "Dividing by $2$ gives a recognisable value.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set the shifted interval",
          "workingLatex": "-30^\\circ \\le \\theta - 30^\\circ < 330^\\circ",
          "explanation": "Subtracting $30^\\circ$ from the bounds gives the interval for the shifted angle.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for the shifted angle",
          "workingLatex": "\\theta - 30^\\circ = 30^\\circ, 150^\\circ",
          "explanation": "Sine one half occurs at $30^\\circ$ and $150^\\circ$ in this interval.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Add the shift back",
          "workingLatex": "\\theta = 60^\\circ, 180^\\circ",
          "explanation": "Adding $30^\\circ$ to each solution recovers $\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the solutions",
          "workingLatex": "\\theta = 60^\\circ, 180^\\circ",
          "explanation": "Both lie in the required range.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta = 60^\\circ, 180^\\circ$"
    }
  },
  {
    "id": "al.y2.pure.rsin-form.q014",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Intermediate",
    "marks": 7,
    "answerType": "value",
    "tags": ["harmonic form", "equations", "solving"],
    "questionText": "Solve $3\\sin\\theta + 4\\cos\\theta = 2$ for $0^\\circ \\le \\theta < 360^\\circ$, giving answers to the nearest degree. Use $3\\sin\\theta + 4\\cos\\theta = 5\\sin(\\theta + 53.13^\\circ)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Substitute the harmonic form",
          "workingLatex": "5\\sin(\\theta + 53.13^\\circ) = 2",
          "explanation": "Using the given harmonic form replaces the two-term expression with a single sine.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Isolate the sine",
          "workingLatex": "\\sin(\\theta + 53.13^\\circ) = 0.4",
          "explanation": "Dividing by $5$ gives the sine equal to $0.4$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set the shifted interval",
          "workingLatex": "53.13^\\circ \\le \\theta + 53.13^\\circ < 413.13^\\circ",
          "explanation": "Adding the shift to the bounds gives the interval for the shifted angle.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the base solutions",
          "workingLatex": "\\theta + 53.13^\\circ = 23.58^\\circ, 156.42^\\circ, 383.58^\\circ",
          "explanation": "The principal value is $23.58^\\circ$; the second-quadrant partner is $156.42^\\circ$; adding $360^\\circ$ to the first gives $383.58^\\circ$, all needed to cover the shifted interval.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Discard out-of-range values",
          "workingLatex": "23.58^\\circ < 53.13^\\circ \\text{ so reject}",
          "explanation": "The value $23.58^\\circ$ is below the start of the shifted interval, so it is discarded; the other two are kept.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Subtract the shift",
          "workingLatex": "\\theta = 156.42^\\circ - 53.13^\\circ, \\; 383.58^\\circ - 53.13^\\circ",
          "explanation": "Subtracting $53.13^\\circ$ recovers $\\theta$ from each valid solution.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the solutions",
          "workingLatex": "\\theta \\approx 103^\\circ, 330^\\circ",
          "explanation": "Rounding gives the two solutions in the required range.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta \\approx 103^\\circ, 330^\\circ$"
    }
  },
  {
    "id": "al.y2.pure.rsin-form.q015",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": ["harmonic form", "maximum", "minimum", "constant"],
    "questionText": "The function $f(\\theta) = 3\\sin\\theta + 4\\cos\\theta + 7$ is defined for all $\\theta$. Find its maximum and minimum values and the value of $\\theta$ (to the nearest degree) at which the maximum occurs, using $3\\sin\\theta + 4\\cos\\theta = 5\\sin(\\theta + 53^\\circ)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rewrite the function",
          "workingLatex": "f(\\theta) = 5\\sin(\\theta + 53^\\circ) + 7",
          "explanation": "Replacing the two-term part with the harmonic form makes the range obvious.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Bound the sine term",
          "workingLatex": "-5 \\le 5\\sin(\\theta + 53^\\circ) \\le 5",
          "explanation": "The amplitude $5$ scales the sine's range from $[-1,1]$ to $[-5,5]$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Add the constant",
          "workingLatex": "2 \\le f(\\theta) \\le 12",
          "explanation": "Adding $7$ shifts the whole range up by $7$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State max and min",
          "workingLatex": "\\text{max} = 12, \\quad \\text{min} = 2",
          "explanation": "The constant offset moves the extremes to $12$ and $2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find theta for the maximum",
          "workingLatex": "\\sin(\\theta + 53^\\circ) = 1 \\;\\Rightarrow\\; \\theta + 53^\\circ = 90^\\circ",
          "explanation": "The maximum needs the sine at its peak, i.e. the bracket equal to $90^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for theta",
          "workingLatex": "\\theta = 37^\\circ",
          "explanation": "Subtracting the phase shift gives $\\theta = 37^\\circ$ to the nearest degree.",
          "diagram": null
        }
      ],
      "finalAnswer": "Maximum $12$ at $\\theta \\approx 37^\\circ$; minimum $2$."
    }
  },
  {
    "id": "al.y2.pure.rsin-form.q016",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": ["harmonic form", "maximum", "reciprocal"],
    "questionText": "Find the maximum value of $\\dfrac{10}{5\\sin\\theta + 12\\cos\\theta + 15}$ and state the value it takes, given $5\\sin\\theta + 12\\cos\\theta = 13\\sin(\\theta + \\alpha)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rewrite the denominator",
          "workingLatex": "5\\sin\\theta + 12\\cos\\theta + 15 = 13\\sin(\\theta + \\alpha) + 15",
          "explanation": "Using the harmonic form makes the denominator's range easy to determine.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Bound the denominator",
          "workingLatex": "-13 + 15 \\le 13\\sin(\\theta + \\alpha) + 15 \\le 13 + 15",
          "explanation": "The sine ranges over $[-13,13]$, so the denominator ranges over $[2, 28]$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the denominator range",
          "workingLatex": "2 \\le \\text{denominator} \\le 28",
          "explanation": "Both bounds are positive, so the fraction is always defined and positive.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Recognise where the fraction is largest",
          "workingLatex": "\\text{fraction max when denominator is smallest}",
          "explanation": "For a positive numerator, a fraction is largest when its denominator is smallest.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Use the smallest denominator",
          "workingLatex": "\\text{min denominator} = 2",
          "explanation": "The denominator's least value is $2$, attained when the sine equals $-1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute the maximum",
          "workingLatex": "\\frac{10}{2} = 5",
          "explanation": "Dividing the numerator by the smallest denominator gives the maximum value $5$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Maximum value $= 5$."
    }
  },
  {
    "id": "al.y2.pure.rsin-form.q017",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Intermediate",
    "marks": 7,
    "answerType": "value",
    "tags": ["harmonic form", "equations", "solving", "cosine"],
    "questionText": "Solve $\\cos\\theta - \\sin\\theta = 1$ for $0^\\circ \\le \\theta < 360^\\circ$, using the form $R\\cos(\\theta + \\alpha)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write in harmonic form",
          "workingLatex": "\\cos\\theta - \\sin\\theta = \\sqrt2\\cos(\\theta + 45^\\circ)",
          "explanation": "From $R = \\sqrt2$ and $\\alpha = 45^\\circ$, the expression becomes a single cosine.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rewrite the equation",
          "workingLatex": "\\sqrt2\\cos(\\theta + 45^\\circ) = 1",
          "explanation": "Substituting turns the equation into a standard cosine equation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Isolate the cosine",
          "workingLatex": "\\cos(\\theta + 45^\\circ) = \\frac{1}{\\sqrt2}",
          "explanation": "Dividing by $\\sqrt2$ gives a recognisable exact value.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set the shifted interval",
          "workingLatex": "45^\\circ \\le \\theta + 45^\\circ < 405^\\circ",
          "explanation": "Adding the shift to the bounds gives the interval for the shifted angle.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for the shifted angle",
          "workingLatex": "\\theta + 45^\\circ = 45^\\circ, 315^\\circ",
          "explanation": "Cosine $\\frac{1}{\\sqrt2}$ occurs at $45^\\circ$ and $315^\\circ$ within the interval.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Subtract the shift",
          "workingLatex": "\\theta = 0^\\circ, 270^\\circ",
          "explanation": "Subtracting $45^\\circ$ from each gives the solutions for $\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify one solution",
          "workingLatex": "\\theta = 0: \\cos 0 - \\sin 0 = 1 \\;\\checkmark",
          "explanation": "Substituting $\\theta = 0$ gives $1$, confirming the solution.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta = 0^\\circ, 270^\\circ$"
    }
  },
  {
    "id": "al.y2.pure.rsin-form.q018",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Intermediate",
    "marks": 7,
    "answerType": "value",
    "tags": ["harmonic form", "equations", "solving"],
    "questionText": "Solve $\\sin\\theta + \\sqrt3\\cos\\theta = \\sqrt3$ for $0^\\circ \\le \\theta < 360^\\circ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write in harmonic form",
          "workingLatex": "\\sin\\theta + \\sqrt3\\cos\\theta = 2\\sin(\\theta + 60^\\circ)",
          "explanation": "From $R = 2$ and $\\alpha = 60^\\circ$, the expression becomes a single sine.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rewrite the equation",
          "workingLatex": "2\\sin(\\theta + 60^\\circ) = \\sqrt3",
          "explanation": "Substituting gives a standard sine equation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Isolate the sine",
          "workingLatex": "\\sin(\\theta + 60^\\circ) = \\frac{\\sqrt3}{2}",
          "explanation": "Dividing by $2$ gives a recognisable exact value.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set the shifted interval",
          "workingLatex": "60^\\circ \\le \\theta + 60^\\circ < 420^\\circ",
          "explanation": "Adding the shift to the bounds gives the interval for the shifted angle.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for the shifted angle",
          "workingLatex": "\\theta + 60^\\circ = 60^\\circ, 120^\\circ, 420^\\circ",
          "explanation": "Sine $\\frac{\\sqrt3}{2}$ occurs at $60^\\circ$ and $120^\\circ$; adding $360^\\circ$ to $60^\\circ$ gives $420^\\circ$, at the very edge, which we test.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Discard the out-of-range value",
          "workingLatex": "420^\\circ \\not< 420^\\circ \\text{ so reject}",
          "explanation": "The value $420^\\circ$ is not strictly less than the upper bound, so it is discarded.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Subtract the shift",
          "workingLatex": "\\theta = 0^\\circ, 60^\\circ",
          "explanation": "Subtracting $60^\\circ$ from the two valid solutions gives $\\theta = 0^\\circ$ and $60^\\circ$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta = 0^\\circ, 60^\\circ$"
    }
  },
  {
    "id": "al.y2.pure.rsin-form.q019",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": ["harmonic form", "minimum", "constant"],
    "questionText": "Find the minimum value of $6\\sin\\theta + 8\\cos\\theta - 3$ and the value of $\\theta$ (to the nearest degree) at which it occurs, using $6\\sin\\theta + 8\\cos\\theta = 10\\sin(\\theta + 53.13^\\circ)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rewrite the expression",
          "workingLatex": "6\\sin\\theta + 8\\cos\\theta - 3 = 10\\sin(\\theta + 53.13^\\circ) - 3",
          "explanation": "The harmonic form makes the range of the whole expression clear.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Bound the sine term",
          "workingLatex": "-10 \\le 10\\sin(\\theta + 53.13^\\circ) \\le 10",
          "explanation": "The amplitude $10$ scales the sine range to $[-10, 10]$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Subtract the constant",
          "workingLatex": "-13 \\le \\text{expression} \\le 7",
          "explanation": "Subtracting $3$ shifts the range down.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify the minimum",
          "workingLatex": "\\text{min} = -13",
          "explanation": "The least value occurs when the sine equals $-1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find theta for the minimum",
          "workingLatex": "\\sin(\\theta + 53.13^\\circ) = -1 \\;\\Rightarrow\\; \\theta + 53.13^\\circ = 270^\\circ",
          "explanation": "The sine reaches $-1$ when its argument is $270^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for theta",
          "workingLatex": "\\theta = 270^\\circ - 53.13^\\circ \\approx 217^\\circ",
          "explanation": "Subtracting the phase shift gives $\\theta \\approx 217^\\circ$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Minimum $= -13$ at $\\theta \\approx 217^\\circ$."
    }
  },
  {
    "id": "al.y2.pure.rsin-form.q020",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Intermediate",
    "marks": 7,
    "answerType": "value",
    "tags": ["harmonic form", "equations", "solving"],
    "questionText": "Solve $5\\sin\\theta - 12\\cos\\theta = 6.5$ for $0^\\circ \\le \\theta < 360^\\circ$, giving answers to the nearest degree. Use $5\\sin\\theta - 12\\cos\\theta = 13\\sin(\\theta - 67.38^\\circ)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Substitute the harmonic form",
          "workingLatex": "13\\sin(\\theta - 67.38^\\circ) = 6.5",
          "explanation": "Replacing the two-term expression gives a single sine equation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Isolate the sine",
          "workingLatex": "\\sin(\\theta - 67.38^\\circ) = 0.5",
          "explanation": "Dividing by $13$ gives sine equal to $0.5$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set the shifted interval",
          "workingLatex": "-67.38^\\circ \\le \\theta - 67.38^\\circ < 292.62^\\circ",
          "explanation": "Subtracting the shift from the bounds gives the interval for the shifted angle.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for the shifted angle",
          "workingLatex": "\\theta - 67.38^\\circ = 30^\\circ, 150^\\circ",
          "explanation": "Sine $0.5$ occurs at $30^\\circ$ and $150^\\circ$, both within the shifted interval.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Add the shift",
          "workingLatex": "\\theta = 97.38^\\circ, 217.38^\\circ",
          "explanation": "Adding $67.38^\\circ$ to each recovers $\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Round the solutions",
          "workingLatex": "\\theta \\approx 97^\\circ, 217^\\circ",
          "explanation": "Rounding to the nearest degree gives the final answers.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta \\approx 97^\\circ, 217^\\circ$"
    }
  },
  {
    "id": "al.y2.pure.rsin-form.q021",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Intermediate",
    "marks": 8,
    "answerType": "value",
    "tags": ["harmonic form", "modelling", "maximum"],
    "questionText": "A big-wheel car's height above the ground is modelled by $h(t) = 8\\sin(30t)^\\circ + 15\\cos(30t)^\\circ + 20$ metres, where $t$ is in minutes. Using an R-form for $8\\sin x + 15\\cos x$, find the maximum height and the smallest positive $t$ at which it first occurs.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the R-form for the varying part",
          "workingLatex": "8\\sin x + 15\\cos x = R\\sin(x + \\alpha), \\quad x = 30t",
          "explanation": "Combining the two oscillating terms into one sine reveals the amplitude and hence the maximum height.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find R",
          "workingLatex": "R = \\sqrt{8^2 + 15^2} = \\sqrt{289} = 17",
          "explanation": "The amplitude is the root of the sum of squares (an $8$-$15$-$17$ triangle).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find alpha",
          "workingLatex": "\\tan\\alpha = \\frac{15}{8} \\;\\Rightarrow\\; \\alpha \\approx 61.93^\\circ",
          "explanation": "The ratio gives the phase angle.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the height model",
          "workingLatex": "h = 17\\sin(30t + 61.93^\\circ) + 20",
          "explanation": "Substituting the R-form gives a single-sine model with a vertical shift of $20$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the maximum height",
          "workingLatex": "h_{\\max} = 17 + 20 = 37 \\text{ m}",
          "explanation": "The maximum occurs when the sine equals $1$, adding the amplitude to the offset.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Set the sine to its peak",
          "workingLatex": "30t + 61.93^\\circ = 90^\\circ",
          "explanation": "The first maximum occurs when the argument first equals $90^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for t",
          "workingLatex": "30t = 28.07^\\circ \\;\\Rightarrow\\; t \\approx 0.94 \\text{ min}",
          "explanation": "Dividing by $30$ gives the smallest positive time, about $0.94$ minutes.",
          "diagram": null
        }
      ],
      "finalAnswer": "Maximum height $37$ m, first at $t \\approx 0.94$ minutes."
    }
  },
  {
    "id": "al.y2.pure.rsin-form.q022",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": ["harmonic form", "equations", "single solution"],
    "questionText": "Solve $7\\sin\\theta + 24\\cos\\theta = 25$ for $0^\\circ \\le \\theta < 360^\\circ$, giving your answer to the nearest degree.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find R",
          "workingLatex": "R = \\sqrt{7^2 + 24^2} = 25",
          "explanation": "The amplitude is $25$ (a $7$-$24$-$25$ triangle), which equals the right-hand side.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find alpha and write the form",
          "workingLatex": "7\\sin\\theta + 24\\cos\\theta = 25\\sin(\\theta + 73.74^\\circ)",
          "explanation": "With $\\tan\\alpha = \\frac{24}{7}$, the phase angle is about $73.74^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite the equation",
          "workingLatex": "25\\sin(\\theta + 73.74^\\circ) = 25",
          "explanation": "Substituting the harmonic form.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Isolate the sine",
          "workingLatex": "\\sin(\\theta + 73.74^\\circ) = 1",
          "explanation": "Since the right side equals the amplitude, the sine must be at its maximum of $1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for the bracket",
          "workingLatex": "\\theta + 73.74^\\circ = 90^\\circ",
          "explanation": "Sine equals $1$ only at $90^\\circ$ within one revolution, so there is a single solution.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for theta",
          "workingLatex": "\\theta = 90^\\circ - 73.74^\\circ \\approx 16^\\circ",
          "explanation": "Subtracting the phase shift gives the unique solution near $16^\\circ$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta \\approx 16^\\circ$"
    }
  },
  {
    "id": "al.y2.pure.rsin-form.q023",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": ["harmonic form", "equations", "exact"],
    "questionText": "Solve $\\sqrt2\\sin\\theta + \\sqrt2\\cos\\theta = 1$ for $0^\\circ \\le \\theta < 360^\\circ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find R",
          "workingLatex": "R = \\sqrt{(\\sqrt2)^2 + (\\sqrt2)^2} = \\sqrt4 = 2",
          "explanation": "The sum of squares is $2 + 2 = 4$, so $R = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find alpha",
          "workingLatex": "\\tan\\alpha = \\frac{\\sqrt2}{\\sqrt2} = 1 \\;\\Rightarrow\\; \\alpha = 45^\\circ",
          "explanation": "Equal components give $\\alpha = 45^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the equation in harmonic form",
          "workingLatex": "2\\sin(\\theta + 45^\\circ) = 1 \\;\\Rightarrow\\; \\sin(\\theta + 45^\\circ) = \\tfrac{1}{2}",
          "explanation": "Substituting and dividing by $2$ gives a standard sine equation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set the shifted interval",
          "workingLatex": "45^\\circ \\le \\theta + 45^\\circ < 405^\\circ",
          "explanation": "Adding the shift to the bounds.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for the shifted angle",
          "workingLatex": "\\theta + 45^\\circ = 150^\\circ, 390^\\circ",
          "explanation": "Sine one half occurs at $30^\\circ$ and $150^\\circ$; but $30^\\circ < 45^\\circ$ is out of range, so we use $150^\\circ$ and $30^\\circ + 360^\\circ = 390^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Subtract the shift",
          "workingLatex": "\\theta = 105^\\circ, 345^\\circ",
          "explanation": "Subtracting $45^\\circ$ from each valid solution gives the answers.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta = 105^\\circ, 345^\\circ$"
    }
  },
  {
    "id": "al.y2.pure.rsin-form.q024",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Intermediate",
    "marks": 8,
    "answerType": "value",
    "tags": ["harmonic form", "equations", "solving"],
    "questionText": "Express $6\\sin\\theta - 8\\cos\\theta$ as $R\\sin(\\theta - \\alpha)$ and hence solve $6\\sin\\theta - 8\\cos\\theta = 5$ for $0^\\circ \\le \\theta < 360^\\circ$, to the nearest degree.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find R",
          "workingLatex": "R = \\sqrt{6^2 + 8^2} = 10",
          "explanation": "The amplitude is $10$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find alpha",
          "workingLatex": "\\tan\\alpha = \\frac{8}{6} = \\frac{4}{3} \\;\\Rightarrow\\; \\alpha \\approx 53.13^\\circ",
          "explanation": "The ratio of the cosine to the sine coefficient gives the phase angle.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the harmonic form",
          "workingLatex": "6\\sin\\theta - 8\\cos\\theta = 10\\sin(\\theta - 53.13^\\circ)",
          "explanation": "Combining $R$ and $\\alpha$ gives the single-sine form.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rewrite the equation",
          "workingLatex": "10\\sin(\\theta - 53.13^\\circ) = 5 \\;\\Rightarrow\\; \\sin(\\theta - 53.13^\\circ) = 0.5",
          "explanation": "Substituting and dividing by $10$ gives a standard sine equation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set the shifted interval",
          "workingLatex": "-53.13^\\circ \\le \\theta - 53.13^\\circ < 306.87^\\circ",
          "explanation": "Subtracting the shift from the bounds.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for the shifted angle",
          "workingLatex": "\\theta - 53.13^\\circ = 30^\\circ, 150^\\circ",
          "explanation": "Sine $0.5$ occurs at $30^\\circ$ and $150^\\circ$, both within the interval.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Add the shift and round",
          "workingLatex": "\\theta \\approx 83^\\circ, 203^\\circ",
          "explanation": "Adding $53.13^\\circ$ and rounding gives the two solutions.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta \\approx 83^\\circ, 203^\\circ$"
    }
  },
  {
    "id": "al.y2.pure.rsin-form.q025",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": ["harmonic form", "range", "function"],
    "questionText": "State the range of the function $f(\\theta) = 9\\sin\\theta - 12\\cos\\theta + 4$ for $\\theta \\in \\mathbb{R}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the amplitude",
          "workingLatex": "R = \\sqrt{9^2 + 12^2} = \\sqrt{225} = 15",
          "explanation": "The oscillating part has amplitude $15$ (a $9$-$12$-$15$ triangle).",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the harmonic form",
          "workingLatex": "f(\\theta) = 15\\sin(\\theta - \\alpha) + 4",
          "explanation": "The exact phase angle is not needed for the range, only the amplitude and the constant.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Bound the sine term",
          "workingLatex": "-15 \\le 15\\sin(\\theta - \\alpha) \\le 15",
          "explanation": "The amplitude scales the sine range.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add the constant",
          "workingLatex": "-11 \\le f(\\theta) \\le 19",
          "explanation": "Adding $4$ shifts the range up.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the range",
          "workingLatex": "-11 \\le f(\\theta) \\le 19",
          "explanation": "Since sine attains both $\\pm 1$, every value in this interval is achieved.",
          "diagram": null
        }
      ],
      "finalAnswer": "$-11 \\le f(\\theta) \\le 19$"
    }
  },
  {
    "id": "al.y2.pure.rsin-form.q026",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Intermediate",
    "marks": 7,
    "answerType": "value",
    "tags": ["harmonic form", "equations", "cosine"],
    "questionText": "Express $3\\cos\\theta - 4\\sin\\theta$ as $R\\cos(\\theta + \\alpha)$ and hence solve $3\\cos\\theta - 4\\sin\\theta = 2$ for $0^\\circ \\le \\theta < 360^\\circ$, to the nearest degree.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find R",
          "workingLatex": "R = \\sqrt{3^2 + 4^2} = 5",
          "explanation": "The amplitude is $5$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find alpha",
          "workingLatex": "\\tan\\alpha = \\frac{4}{3} \\;\\Rightarrow\\; \\alpha \\approx 53.13^\\circ",
          "explanation": "For the cosine form, $\\tan\\alpha$ is the sine coefficient over the cosine coefficient.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the harmonic form",
          "workingLatex": "3\\cos\\theta - 4\\sin\\theta = 5\\cos(\\theta + 53.13^\\circ)",
          "explanation": "Combining gives the single-cosine form.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rewrite the equation",
          "workingLatex": "5\\cos(\\theta + 53.13^\\circ) = 2 \\;\\Rightarrow\\; \\cos(\\theta + 53.13^\\circ) = 0.4",
          "explanation": "Substituting and dividing by $5$ gives a standard cosine equation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set the shifted interval and solve",
          "workingLatex": "\\theta + 53.13^\\circ = 66.42^\\circ, 293.58^\\circ",
          "explanation": "Within the shifted interval $[53.13^\\circ, 413.13^\\circ)$, cosine $0.4$ occurs at $66.42^\\circ$ and $293.58^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Subtract the shift and round",
          "workingLatex": "\\theta \\approx 13^\\circ, 240^\\circ",
          "explanation": "Subtracting $53.13^\\circ$ and rounding gives the two solutions.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta \\approx 13^\\circ, 240^\\circ$"
    }
  },
  {
    "id": "al.y2.pure.rsin-form.q027",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Intermediate",
    "marks": 7,
    "answerType": "value",
    "tags": ["harmonic form", "equations", "radians"],
    "questionText": "Solve $\\sin\\theta - \\cos\\theta = 1$ for $0 \\le \\theta < 2\\pi$, using the form $R\\sin(\\theta - \\alpha)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find R and alpha",
          "workingLatex": "R = \\sqrt2, \\quad \\tan\\alpha = 1 \\;\\Rightarrow\\; \\alpha = \\frac{\\pi}{4}",
          "explanation": "Equal components give $R = \\sqrt2$ and phase $\\frac{\\pi}{4}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the harmonic form",
          "workingLatex": "\\sin\\theta - \\cos\\theta = \\sqrt2\\sin\\left(\\theta - \\frac{\\pi}{4}\\right)",
          "explanation": "The difference becomes a single sine with a phase shift.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite the equation",
          "workingLatex": "\\sqrt2\\sin\\left(\\theta - \\frac{\\pi}{4}\\right) = 1 \\;\\Rightarrow\\; \\sin\\left(\\theta - \\frac{\\pi}{4}\\right) = \\frac{1}{\\sqrt2}",
          "explanation": "Dividing by $\\sqrt2$ gives a recognisable exact value.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set the shifted interval",
          "workingLatex": "-\\frac{\\pi}{4} \\le \\theta - \\frac{\\pi}{4} < \\frac{7\\pi}{4}",
          "explanation": "Subtracting $\\frac{\\pi}{4}$ from the bounds.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for the shifted angle",
          "workingLatex": "\\theta - \\frac{\\pi}{4} = \\frac{\\pi}{4}, \\frac{3\\pi}{4}",
          "explanation": "Sine $\\frac{1}{\\sqrt2}$ occurs at $\\frac{\\pi}{4}$ and $\\frac{3\\pi}{4}$ within the interval.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Add the shift",
          "workingLatex": "\\theta = \\frac{\\pi}{2}, \\pi",
          "explanation": "Adding $\\frac{\\pi}{4}$ to each gives the solutions.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta = \\dfrac{\\pi}{2}, \\pi$"
    }
  },
  {
    "id": "al.y2.pure.rsin-form.q028",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": ["harmonic form", "maximum", "square"],
    "questionText": "Find the maximum value of $(3\\sin\\theta + 4\\cos\\theta)^2$ and state one value of $\\theta$ where it occurs.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the inner expression in R-form",
          "workingLatex": "3\\sin\\theta + 4\\cos\\theta = 5\\sin(\\theta + \\alpha), \\quad \\alpha \\approx 53.13^\\circ",
          "explanation": "The amplitude is $5$, which bounds the inner expression.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Bound the inner expression",
          "workingLatex": "-5 \\le 5\\sin(\\theta + \\alpha) \\le 5",
          "explanation": "The inner expression ranges between $-5$ and $5$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Square the bounds",
          "workingLatex": "0 \\le (5\\sin(\\theta + \\alpha))^2 \\le 25",
          "explanation": "Squaring a quantity in $[-5,5]$ gives values in $[0,25]$; the largest square comes from the largest magnitude.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify the maximum",
          "workingLatex": "\\text{max} = 25",
          "explanation": "The maximum of the square is $5^2 = 25$, occurring when the inner expression is $\\pm 5$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find a value of theta",
          "workingLatex": "\\sin(\\theta + 53.13^\\circ) = 1 \\;\\Rightarrow\\; \\theta \\approx 36.87^\\circ",
          "explanation": "One place the maximum occurs is where the inner sine equals $1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the result",
          "workingLatex": "\\text{max} = 25 \\text{ at } \\theta \\approx 37^\\circ",
          "explanation": "The maximum square value is $25$, attained near $37^\\circ$ (and also where the inner expression is $-5$).",
          "diagram": null
        }
      ],
      "finalAnswer": "Maximum $= 25$ (e.g. at $\\theta \\approx 37^\\circ$)."
    }
  },
  {
    "id": "al.y2.pure.rsin-form.q029",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Intermediate",
    "marks": 7,
    "answerType": "value",
    "tags": ["harmonic form", "equations", "solving"],
    "questionText": "Express $2\\sin\\theta + \\cos\\theta$ as $R\\sin(\\theta + \\alpha)$ and hence solve $2\\sin\\theta + \\cos\\theta = 1$ for $0^\\circ \\le \\theta < 360^\\circ$, to the nearest degree.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find R",
          "workingLatex": "R = \\sqrt{2^2 + 1^2} = \\sqrt5",
          "explanation": "The amplitude is $\\sqrt5$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find alpha",
          "workingLatex": "\\tan\\alpha = \\frac{1}{2} \\;\\Rightarrow\\; \\alpha \\approx 26.57^\\circ",
          "explanation": "The ratio of the cosine to the sine coefficient gives the phase angle.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the harmonic form",
          "workingLatex": "2\\sin\\theta + \\cos\\theta = \\sqrt5\\sin(\\theta + 26.57^\\circ)",
          "explanation": "Combining gives the single-sine form.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rewrite the equation",
          "workingLatex": "\\sqrt5\\sin(\\theta + 26.57^\\circ) = 1 \\;\\Rightarrow\\; \\sin(\\theta + 26.57^\\circ) = \\frac{1}{\\sqrt5}",
          "explanation": "Dividing by $\\sqrt5$ gives sine equal to about $0.447$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve within the shifted interval",
          "workingLatex": "\\theta + 26.57^\\circ = 26.57^\\circ, 153.43^\\circ",
          "explanation": "The principal value $26.57^\\circ$ and its partner $153.43^\\circ$ both lie in $[26.57^\\circ, 386.57^\\circ)$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Subtract the shift",
          "workingLatex": "\\theta = 0^\\circ, 126.87^\\circ",
          "explanation": "Subtracting $26.57^\\circ$ from each gives the solutions.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Round the solutions",
          "workingLatex": "\\theta \\approx 0^\\circ, 127^\\circ",
          "explanation": "Rounding to the nearest degree gives the final answers.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta \\approx 0^\\circ, 127^\\circ$"
    }
  },
  {
    "id": "al.y2.pure.rsin-form.q030",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": ["harmonic form", "minimum", "reciprocal"],
    "questionText": "Find the minimum value of $\\dfrac{20}{2\\sin\\theta + \\sqrt5\\cos\\theta + 6}$, given that $2\\sin\\theta + \\sqrt5\\cos\\theta = 3\\sin(\\theta + \\alpha)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Confirm the amplitude",
          "workingLatex": "R = \\sqrt{2^2 + (\\sqrt5)^2} = \\sqrt{9} = 3",
          "explanation": "The amplitude of the oscillating part is $3$, as stated.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Bound the denominator",
          "workingLatex": "-3 + 6 \\le 3\\sin(\\theta + \\alpha) + 6 \\le 3 + 6",
          "explanation": "The sine part ranges over $[-3,3]$, so the denominator ranges over $[3, 9]$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the denominator range",
          "workingLatex": "3 \\le \\text{denominator} \\le 9",
          "explanation": "Both bounds are positive, so the fraction is always positive.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Recognise where the fraction is smallest",
          "workingLatex": "\\text{fraction min when denominator is largest}",
          "explanation": "For a positive numerator, the fraction is smallest when its denominator is largest.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Use the largest denominator",
          "workingLatex": "\\frac{20}{9}",
          "explanation": "Dividing the numerator by the largest denominator $9$ gives the minimum.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the minimum",
          "workingLatex": "\\text{min} = \\frac{20}{9}",
          "explanation": "This is the least value the fraction can take.",
          "diagram": null
        }
      ],
      "finalAnswer": "Minimum value $= \\dfrac{20}{9}$."
    }
  },
  {
    "id": "al.y2.pure.rsin-form.q031",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Intermediate",
    "marks": 7,
    "answerType": "value",
    "tags": ["harmonic form", "equations", "exact", "solving"],
    "questionText": "Solve $\\sqrt3\\cos\\theta + \\sin\\theta = \\sqrt2$ for $0^\\circ \\le \\theta < 360^\\circ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Reorder and identify coefficients",
          "workingLatex": "\\sin\\theta + \\sqrt3\\cos\\theta",
          "explanation": "Writing the sine term first, the coefficients are $1$ and $\\sqrt3$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find R and alpha",
          "workingLatex": "R = \\sqrt{1 + 3} = 2, \\quad \\tan\\alpha = \\sqrt3 \\;\\Rightarrow\\; \\alpha = 60^\\circ",
          "explanation": "The amplitude is $2$ and the phase is $60^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the equation in harmonic form",
          "workingLatex": "2\\sin(\\theta + 60^\\circ) = \\sqrt2 \\;\\Rightarrow\\; \\sin(\\theta + 60^\\circ) = \\frac{\\sqrt2}{2}",
          "explanation": "Dividing by $2$ gives a standard exact value.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set the shifted interval",
          "workingLatex": "60^\\circ \\le \\theta + 60^\\circ < 420^\\circ",
          "explanation": "Adding the shift to the bounds.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for the shifted angle",
          "workingLatex": "\\theta + 60^\\circ = 135^\\circ, 405^\\circ",
          "explanation": "Sine $\\frac{\\sqrt2}{2}$ occurs at $45^\\circ$ and $135^\\circ$; since $45^\\circ$ is out of range, we use $135^\\circ$ and $45^\\circ + 360^\\circ = 405^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Subtract the shift",
          "workingLatex": "\\theta = 75^\\circ, 345^\\circ",
          "explanation": "Subtracting $60^\\circ$ from each gives the solutions.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta = 75^\\circ, 345^\\circ$"
    }
  },
  {
    "id": "al.y2.pure.rsin-form.q032",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": ["harmonic form", "turning points", "graph"],
    "questionText": "The curve $y = 8\\sin\\theta + 6\\cos\\theta$ has a maximum turning point in $0^\\circ \\le \\theta < 360^\\circ$. Find its coordinates to the nearest degree.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write in R-form",
          "workingLatex": "8\\sin\\theta + 6\\cos\\theta = 10\\sin(\\theta + \\alpha)",
          "explanation": "The amplitude $R = \\sqrt{64 + 36} = 10$ gives the maximum $y$-value directly.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find alpha",
          "workingLatex": "\\tan\\alpha = \\frac{6}{8} = \\frac{3}{4} \\;\\Rightarrow\\; \\alpha \\approx 36.87^\\circ",
          "explanation": "The phase angle comes from the ratio of coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the maximum y-value",
          "workingLatex": "y_{\\max} = 10",
          "explanation": "The maximum equals the amplitude $R$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the theta at the maximum",
          "workingLatex": "\\sin(\\theta + 36.87^\\circ) = 1 \\;\\Rightarrow\\; \\theta + 36.87^\\circ = 90^\\circ",
          "explanation": "The maximum of the sine occurs when its argument is $90^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for theta",
          "workingLatex": "\\theta = 53.13^\\circ \\approx 53^\\circ",
          "explanation": "Subtracting the phase gives the $\\theta$-coordinate.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the coordinates",
          "workingLatex": "(53^\\circ, 10)",
          "explanation": "The maximum turning point is at approximately $(53^\\circ, 10)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Maximum turning point at $(53^\\circ, 10)$."
    }
  },
  {
    "id": "al.y2.pure.rsin-form.q033",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": ["harmonic form", "equations", "no solutions"],
    "questionText": "Explain why the equation $3\\sin\\theta + 4\\cos\\theta = 6$ has no solutions.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write in R-form",
          "workingLatex": "3\\sin\\theta + 4\\cos\\theta = 5\\sin(\\theta + \\alpha)",
          "explanation": "The amplitude is $R = \\sqrt{9 + 16} = 5$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the range of the expression",
          "workingLatex": "-5 \\le 5\\sin(\\theta + \\alpha) \\le 5",
          "explanation": "The expression can never exceed its amplitude of $5$ in size.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare with the target value",
          "workingLatex": "6 > 5",
          "explanation": "The required value $6$ lies outside the achievable range.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rewrite the equation",
          "workingLatex": "\\sin(\\theta + \\alpha) = \\frac{6}{5} = 1.2",
          "explanation": "Dividing by $5$ would need the sine to equal $1.2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Conclude",
          "workingLatex": "\\sin(\\theta + \\alpha) = 1.2 \\text{ is impossible}",
          "explanation": "Since sine can never exceed $1$, no angle satisfies the equation, so there are no solutions.",
          "diagram": null
        }
      ],
      "finalAnswer": "No solutions, because the maximum of $3\\sin\\theta + 4\\cos\\theta$ is $5 < 6$."
    }
  },
  {
    "id": "al.y2.pure.rsin-form.q034",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Intermediate",
    "marks": 7,
    "answerType": "value",
    "tags": ["harmonic form", "equations", "double angle argument"],
    "questionText": "Solve $5\\sin 2\\theta + 12\\cos 2\\theta = 6.5$ for $0^\\circ \\le \\theta < 180^\\circ$, giving answers to the nearest degree. Use $5\\sin x + 12\\cos x = 13\\sin(x + 67.38^\\circ)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Apply the R-form with x = 2θ",
          "workingLatex": "13\\sin(2\\theta + 67.38^\\circ) = 6.5",
          "explanation": "Treating the argument as $2\\theta$ turns the equation into a single sine equation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Isolate the sine",
          "workingLatex": "\\sin(2\\theta + 67.38^\\circ) = 0.5",
          "explanation": "Dividing by $13$ gives sine equal to $0.5$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set the interval for the argument",
          "workingLatex": "67.38^\\circ \\le 2\\theta + 67.38^\\circ < 427.38^\\circ",
          "explanation": "Since $\\theta \\in [0^\\circ, 180^\\circ)$, the quantity $2\\theta$ spans $[0^\\circ, 360^\\circ)$, so the shifted argument spans this interval.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for the argument",
          "workingLatex": "2\\theta + 67.38^\\circ = 150^\\circ, 390^\\circ",
          "explanation": "Sine $0.5$ occurs at $30^\\circ$ and $150^\\circ$; $30^\\circ$ is out of range, so we use $150^\\circ$ and $30^\\circ + 360^\\circ = 390^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for 2θ",
          "workingLatex": "2\\theta = 82.62^\\circ, 322.62^\\circ",
          "explanation": "Subtracting the phase shift from each.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Halve to find theta",
          "workingLatex": "\\theta \\approx 41^\\circ, 161^\\circ",
          "explanation": "Dividing by $2$ and rounding gives the two solutions in the required range.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta \\approx 41^\\circ, 161^\\circ$"
    }
  },
  {
    "id": "al.y2.pure.rsin-form.q035",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "value",
    "tags": ["harmonic form", "equations", "full method"],
    "questionText": "Express $8\\sin\\theta - 6\\cos\\theta$ in the form $R\\sin(\\theta - \\alpha)$ with $R > 0$ and $0 < \\alpha < 90^\\circ$, and hence solve $8\\sin\\theta - 6\\cos\\theta = 5$ for $0^\\circ \\le \\theta < 360^\\circ$, to the nearest degree.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Expand the target form",
          "workingLatex": "R\\sin(\\theta - \\alpha) = R\\cos\\alpha\\sin\\theta - R\\sin\\alpha\\cos\\theta",
          "explanation": "The minus form matches the given difference of terms.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Compare coefficients",
          "workingLatex": "R\\cos\\alpha = 8, \\quad R\\sin\\alpha = 6",
          "explanation": "Matching the sine and cosine coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find R",
          "workingLatex": "R = \\sqrt{8^2 + 6^2} = 10",
          "explanation": "The amplitude is $10$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find alpha",
          "workingLatex": "\\tan\\alpha = \\frac{6}{8} = 0.75 \\;\\Rightarrow\\; \\alpha \\approx 36.87^\\circ",
          "explanation": "The ratio gives the phase angle.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the harmonic form",
          "workingLatex": "8\\sin\\theta - 6\\cos\\theta = 10\\sin(\\theta - 36.87^\\circ)",
          "explanation": "Combining $R$ and $\\alpha$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Set up the equation",
          "workingLatex": "10\\sin(\\theta - 36.87^\\circ) = 5 \\;\\Rightarrow\\; \\sin(\\theta - 36.87^\\circ) = 0.5",
          "explanation": "Dividing by $10$ gives a standard sine equation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Set the shifted interval",
          "workingLatex": "-36.87^\\circ \\le \\theta - 36.87^\\circ < 323.13^\\circ",
          "explanation": "Subtracting the shift from the bounds.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for the shifted angle",
          "workingLatex": "\\theta - 36.87^\\circ = 30^\\circ, 150^\\circ",
          "explanation": "Sine $0.5$ occurs at $30^\\circ$ and $150^\\circ$, both within the interval.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Add the shift and round",
          "workingLatex": "\\theta \\approx 67^\\circ, 187^\\circ",
          "explanation": "Adding $36.87^\\circ$ and rounding gives the two solutions.",
          "diagram": null
        }
      ],
      "finalAnswer": "$8\\sin\\theta - 6\\cos\\theta = 10\\sin(\\theta - 36.87^\\circ)$; $\\theta \\approx 67^\\circ, 187^\\circ$."
    }
  },
  {
    "id": "al.y2.pure.rsin-form.q036",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "proof",
    "tags": ["harmonic form", "proof", "derivation"],
    "questionText": "Prove that for constants $a, b > 0$, $a\\sin\\theta + b\\cos\\theta \\equiv R\\sin(\\theta + \\alpha)$ where $R = \\sqrt{a^2 + b^2}$ and $\\tan\\alpha = \\dfrac{b}{a}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Expand the proposed right-hand side",
          "workingLatex": "R\\sin(\\theta + \\alpha) = R(\\sin\\theta\\cos\\alpha + \\cos\\theta\\sin\\alpha)",
          "explanation": "We start from the target form and expand using the addition formula, aiming to match the left-hand side.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Distribute R",
          "workingLatex": "= (R\\cos\\alpha)\\sin\\theta + (R\\sin\\alpha)\\cos\\theta",
          "explanation": "Grouping the constants shows the coefficients that must match $a$ and $b$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Require equality with the left-hand side",
          "workingLatex": "R\\cos\\alpha = a, \\quad R\\sin\\alpha = b",
          "explanation": "For the identity to hold for all $\\theta$, the coefficients of $\\sin\\theta$ and $\\cos\\theta$ must be equal on both sides.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Square both equations",
          "workingLatex": "R^2\\cos^2\\alpha = a^2, \\quad R^2\\sin^2\\alpha = b^2",
          "explanation": "Squaring prepares to eliminate $\\alpha$ using the Pythagorean identity.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Add the squared equations",
          "workingLatex": "R^2(\\cos^2\\alpha + \\sin^2\\alpha) = a^2 + b^2",
          "explanation": "Adding groups the trig terms into a Pythagorean sum.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify to find R",
          "workingLatex": "R^2 = a^2 + b^2 \\;\\Rightarrow\\; R = \\sqrt{a^2 + b^2}",
          "explanation": "Since $\\cos^2\\alpha + \\sin^2\\alpha = 1$, and $R > 0$, we take the positive root.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Divide the equations to find alpha",
          "workingLatex": "\\frac{R\\sin\\alpha}{R\\cos\\alpha} = \\frac{b}{a} \\;\\Rightarrow\\; \\tan\\alpha = \\frac{b}{a}",
          "explanation": "Dividing cancels $R$, leaving the tangent of the phase angle.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Conclude",
          "workingLatex": "a\\sin\\theta + b\\cos\\theta \\equiv \\sqrt{a^2+b^2}\\,\\sin(\\theta + \\alpha) \\;\\blacksquare",
          "explanation": "With $R$ and $\\alpha$ chosen this way, the expanded right-hand side equals the left, proving the identity.",
          "diagram": null
        }
      ],
      "finalAnswer": "$R = \\sqrt{a^2 + b^2}$ and $\\tan\\alpha = \\dfrac{b}{a}$."
    }
  },
  {
    "id": "al.y2.pure.rsin-form.q037",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "value",
    "tags": ["harmonic form", "modelling", "inequality"],
    "questionText": "The depth of water in a harbour is $D(t) = 6\\sin(30t)^\\circ + 8\\cos(30t)^\\circ + 12$ metres, where $t$ is the time in hours after midnight. Using an R-form, find the maximum depth and the values of $t$ in $0 \\le t < 12$ for which $D \\ge 17$ m.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the oscillating part in R-form",
          "workingLatex": "6\\sin x + 8\\cos x = 10\\sin(x + \\alpha), \\quad x = 30t",
          "explanation": "Combining the two terms simplifies both the maximum and the inequality.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find R and alpha",
          "workingLatex": "R = \\sqrt{6^2 + 8^2} = 10, \\quad \\tan\\alpha = \\frac{8}{6} \\;\\Rightarrow\\; \\alpha \\approx 53.13^\\circ",
          "explanation": "The amplitude is $10$ and the phase is about $53.13^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the depth model",
          "workingLatex": "D = 10\\sin(30t + 53.13^\\circ) + 12",
          "explanation": "Substituting the R-form gives a single-sine model.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the maximum depth",
          "workingLatex": "D_{\\max} = 10 + 12 = 22 \\text{ m}",
          "explanation": "The maximum occurs when the sine equals $1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set up the inequality",
          "workingLatex": "10\\sin(30t + 53.13^\\circ) + 12 \\ge 17",
          "explanation": "We want the times when the depth is at least $17$ m.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify",
          "workingLatex": "\\sin(30t + 53.13^\\circ) \\ge 0.5",
          "explanation": "Subtracting $12$ and dividing by $10$ isolates the sine.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve the boundary equation",
          "workingLatex": "30t + 53.13^\\circ = 30^\\circ, 150^\\circ, 390^\\circ, \\ldots",
          "explanation": "Sine equals $0.5$ at these angles; the sine is at or above $0.5$ between $30^\\circ$ and $150^\\circ$ in each cycle.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Use the relevant cycle",
          "workingLatex": "30t + 53.13^\\circ \\in [150^\\circ, 390^\\circ] \\text{ (first valid band with } t \\ge 0)",
          "explanation": "Since $30t + 53.13^\\circ$ starts at $53.13^\\circ$, the first band where the sine is $\\ge 0.5$ runs from $150^\\circ$ up to $390^\\circ$ (i.e. $30^\\circ$ of the next cycle).",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solve for t",
          "workingLatex": "30t \\in [96.87^\\circ, 336.87^\\circ] \\;\\Rightarrow\\; t \\in [3.23, 11.23]",
          "explanation": "Subtracting the phase and dividing by $30$ gives the time window when the depth is at least $17$ m.",
          "diagram": null
        }
      ],
      "finalAnswer": "Maximum depth $22$ m; $D \\ge 17$ m for approximately $3.23 \\le t \\le 11.23$ hours."
    }
  },
  {
    "id": "al.y2.pure.rsin-form.q038",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "value",
    "tags": ["harmonic form", "equations", "solving"],
    "questionText": "Solve $2\\cos\\theta + 3\\sin\\theta = 1$ for $0^\\circ \\le \\theta < 360^\\circ$, giving answers to the nearest degree.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Reorder and find R",
          "workingLatex": "3\\sin\\theta + 2\\cos\\theta, \\quad R = \\sqrt{3^2 + 2^2} = \\sqrt{13}",
          "explanation": "Writing sine first, the amplitude is $\\sqrt{13}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find alpha",
          "workingLatex": "\\tan\\alpha = \\frac{2}{3} \\;\\Rightarrow\\; \\alpha \\approx 33.69^\\circ",
          "explanation": "The ratio of coefficients gives the phase angle.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the harmonic form",
          "workingLatex": "3\\sin\\theta + 2\\cos\\theta = \\sqrt{13}\\sin(\\theta + 33.69^\\circ)",
          "explanation": "Combining $R$ and $\\alpha$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set up the equation",
          "workingLatex": "\\sqrt{13}\\sin(\\theta + 33.69^\\circ) = 1 \\;\\Rightarrow\\; \\sin(\\theta + 33.69^\\circ) = \\frac{1}{\\sqrt{13}}",
          "explanation": "Dividing by $\\sqrt{13}$ gives sine equal to about $0.277$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the base angles",
          "workingLatex": "\\theta + 33.69^\\circ = 16.10^\\circ, 163.90^\\circ, 376.10^\\circ",
          "explanation": "The principal value is $16.10^\\circ$; its partner is $163.90^\\circ$; adding $360^\\circ$ gives $376.10^\\circ$, needed to cover the shifted interval $[33.69^\\circ, 393.69^\\circ)$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Discard the out-of-range value",
          "workingLatex": "16.10^\\circ < 33.69^\\circ \\text{ so reject}",
          "explanation": "The first value is below the interval start, so it is discarded.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Subtract the shift",
          "workingLatex": "\\theta = 163.90^\\circ - 33.69^\\circ, \\; 376.10^\\circ - 33.69^\\circ",
          "explanation": "Subtracting the phase from each valid solution.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the solutions",
          "workingLatex": "\\theta \\approx 130^\\circ, 342^\\circ",
          "explanation": "Rounding gives the two solutions in the required range.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta \\approx 130^\\circ, 342^\\circ$"
    }
  },
  {
    "id": "al.y2.pure.rsin-form.q039",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "value",
    "tags": ["harmonic form", "equations", "radians", "exact"],
    "questionText": "Solve $\\cos\\theta + \\sqrt3\\sin\\theta = 1$ for $0 \\le \\theta < 2\\pi$, giving exact answers in radians.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Reorder and identify coefficients",
          "workingLatex": "\\sqrt3\\sin\\theta + \\cos\\theta",
          "explanation": "Writing sine first, the coefficients are $\\sqrt3$ and $1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find R and alpha",
          "workingLatex": "R = \\sqrt{3 + 1} = 2, \\quad \\tan\\alpha = \\frac{1}{\\sqrt3} \\;\\Rightarrow\\; \\alpha = \\frac{\\pi}{6}",
          "explanation": "The amplitude is $2$ and the phase is $\\frac{\\pi}{6}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the harmonic form",
          "workingLatex": "\\sqrt3\\sin\\theta + \\cos\\theta = 2\\sin\\left(\\theta + \\frac{\\pi}{6}\\right)",
          "explanation": "Combining gives the single-sine form.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set up the equation",
          "workingLatex": "2\\sin\\left(\\theta + \\frac{\\pi}{6}\\right) = 1 \\;\\Rightarrow\\; \\sin\\left(\\theta + \\frac{\\pi}{6}\\right) = \\frac{1}{2}",
          "explanation": "Dividing by $2$ gives a standard exact value.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set the shifted interval",
          "workingLatex": "\\frac{\\pi}{6} \\le \\theta + \\frac{\\pi}{6} < 2\\pi + \\frac{\\pi}{6}",
          "explanation": "Adding the shift to the bounds.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for the shifted angle",
          "workingLatex": "\\theta + \\frac{\\pi}{6} = \\frac{5\\pi}{6}, \\; \\frac{13\\pi}{6}",
          "explanation": "Sine one half occurs at $\\frac{\\pi}{6}$ and $\\frac{5\\pi}{6}$; the value $\\frac{\\pi}{6}$ is at the boundary giving $\\theta = 0$, and adding $2\\pi$ to it gives $\\frac{13\\pi}{6}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Include the boundary solution and subtract the shift",
          "workingLatex": "\\theta = 0, \\; \\frac{2\\pi}{3}",
          "explanation": "From $\\frac{\\pi}{6} \\to \\theta = 0$, from $\\frac{5\\pi}{6} \\to \\theta = \\frac{2\\pi}{3}$; the value $\\frac{13\\pi}{6}$ gives $\\theta = 2\\pi$, which is out of range.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta = 0, \\dfrac{2\\pi}{3}$"
    }
  },
  {
    "id": "al.y2.pure.rsin-form.q040",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "value",
    "tags": ["harmonic form", "equations", "cosine"],
    "questionText": "Express $5\\cos\\theta - 2\\sin\\theta$ as $R\\cos(\\theta + \\alpha)$ and hence solve $5\\cos\\theta - 2\\sin\\theta = 3$ for $0^\\circ \\le \\theta < 360^\\circ$, to the nearest degree.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Expand the target form",
          "workingLatex": "R\\cos(\\theta + \\alpha) = R\\cos\\alpha\\cos\\theta - R\\sin\\alpha\\sin\\theta",
          "explanation": "The cosine form matches the given expression with its minus sign.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Compare coefficients",
          "workingLatex": "R\\cos\\alpha = 5, \\quad R\\sin\\alpha = 2",
          "explanation": "Matching the cosine and sine terms.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find R and alpha",
          "workingLatex": "R = \\sqrt{29}, \\quad \\tan\\alpha = \\frac{2}{5} \\;\\Rightarrow\\; \\alpha \\approx 21.80^\\circ",
          "explanation": "The amplitude is $\\sqrt{29}$ and the phase about $21.80^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the harmonic form",
          "workingLatex": "5\\cos\\theta - 2\\sin\\theta = \\sqrt{29}\\cos(\\theta + 21.80^\\circ)",
          "explanation": "Combining gives the single-cosine form.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set up the equation",
          "workingLatex": "\\cos(\\theta + 21.80^\\circ) = \\frac{3}{\\sqrt{29}} \\approx 0.557",
          "explanation": "Dividing by $\\sqrt{29}$ gives the cosine value.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve within the shifted interval",
          "workingLatex": "\\theta + 21.80^\\circ = 56.15^\\circ, 303.85^\\circ",
          "explanation": "Within $[21.80^\\circ, 381.80^\\circ)$, cosine $0.557$ occurs at these two angles.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Subtract the shift and round",
          "workingLatex": "\\theta \\approx 34^\\circ, 282^\\circ",
          "explanation": "Subtracting the phase and rounding gives the solutions.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta \\approx 34^\\circ, 282^\\circ$"
    }
  },
  {
    "id": "al.y2.pure.rsin-form.q041",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "value",
    "tags": ["harmonic form", "range", "reciprocal"],
    "questionText": "Find the greatest and least values of $\\dfrac{1}{4 + \\sin\\theta + \\cos\\theta}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the varying part in R-form",
          "workingLatex": "\\sin\\theta + \\cos\\theta = \\sqrt2\\sin(\\theta + 45^\\circ)",
          "explanation": "Combining the two terms gives amplitude $\\sqrt2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Bound the denominator",
          "workingLatex": "4 - \\sqrt2 \\le 4 + \\sqrt2\\sin(\\theta + 45^\\circ) \\le 4 + \\sqrt2",
          "explanation": "The sine part ranges over $[-\\sqrt2, \\sqrt2]$, shifting the denominator around $4$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Note the denominator stays positive",
          "workingLatex": "4 - \\sqrt2 \\approx 2.59 > 0",
          "explanation": "Since the smallest denominator is positive, the fraction is always defined and positive.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Greatest value of the fraction",
          "workingLatex": "\\frac{1}{4 - \\sqrt2}",
          "explanation": "The fraction is greatest when the denominator is smallest.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Least value of the fraction",
          "workingLatex": "\\frac{1}{4 + \\sqrt2}",
          "explanation": "The fraction is least when the denominator is largest.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the results",
          "workingLatex": "\\text{greatest} = \\frac{1}{4 - \\sqrt2}, \\quad \\text{least} = \\frac{1}{4 + \\sqrt2}",
          "explanation": "These exact fractions are the extreme values; rationalising is optional.",
          "diagram": null
        }
      ],
      "finalAnswer": "Greatest $= \\dfrac{1}{4 - \\sqrt2}$, least $= \\dfrac{1}{4 + \\sqrt2}$."
    }
  },
  {
    "id": "al.y2.pure.rsin-form.q042",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": ["harmonic form", "reverse", "coefficients"],
    "questionText": "It is given that $a\\sin\\theta + b\\cos\\theta = 13\\sin(\\theta + \\alpha)$ where $\\tan\\alpha = \\dfrac{5}{12}$ and $a, b > 0$. Find $a$ and $b$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Expand the right-hand side",
          "workingLatex": "13\\sin(\\theta + \\alpha) = 13\\cos\\alpha\\sin\\theta + 13\\sin\\alpha\\cos\\theta",
          "explanation": "Expanding lets us read off $a$ and $b$ as the coefficients of $\\sin\\theta$ and $\\cos\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Match the coefficients",
          "workingLatex": "a = 13\\cos\\alpha, \\quad b = 13\\sin\\alpha",
          "explanation": "So we need $\\cos\\alpha$ and $\\sin\\alpha$ from the given tangent.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Build the reference triangle",
          "workingLatex": "\\tan\\alpha = \\frac{5}{12} \\;\\Rightarrow\\; \\text{hypotenuse} = \\sqrt{5^2 + 12^2} = 13",
          "explanation": "A tangent of $\\frac{5}{12}$ gives a $5$-$12$-$13$ triangle.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Read off sine and cosine",
          "workingLatex": "\\cos\\alpha = \\frac{12}{13}, \\quad \\sin\\alpha = \\frac{5}{13}",
          "explanation": "From the triangle, cosine is adjacent over hypotenuse and sine is opposite over hypotenuse.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute a",
          "workingLatex": "a = 13\\cdot\\frac{12}{13} = 12",
          "explanation": "The $13$s cancel, giving $a = 12$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute b",
          "workingLatex": "b = 13\\cdot\\frac{5}{13} = 5",
          "explanation": "Similarly $b = 5$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "a = 12, \\quad b = 5",
          "explanation": "So the original expression was $12\\sin\\theta + 5\\cos\\theta$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a = 12, \\quad b = 5$"
    }
  },
  {
    "id": "al.y2.pure.rsin-form.q043",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "value",
    "tags": ["harmonic form", "equations", "solving"],
    "questionText": "Solve $4\\sin\\theta - 3\\cos\\theta = 4$ for $0^\\circ \\le \\theta < 360^\\circ$, giving answers to the nearest degree.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find R and alpha",
          "workingLatex": "R = \\sqrt{4^2 + 3^2} = 5, \\quad \\tan\\alpha = \\frac{3}{4} \\;\\Rightarrow\\; \\alpha \\approx 36.87^\\circ",
          "explanation": "For $R\\sin(\\theta - \\alpha)$, amplitude is $5$ and phase about $36.87^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the harmonic form",
          "workingLatex": "4\\sin\\theta - 3\\cos\\theta = 5\\sin(\\theta - 36.87^\\circ)",
          "explanation": "Combining gives the single-sine form.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set up the equation",
          "workingLatex": "5\\sin(\\theta - 36.87^\\circ) = 4 \\;\\Rightarrow\\; \\sin(\\theta - 36.87^\\circ) = 0.8",
          "explanation": "Dividing by $5$ gives sine equal to $0.8$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set the shifted interval",
          "workingLatex": "-36.87^\\circ \\le \\theta - 36.87^\\circ < 323.13^\\circ",
          "explanation": "Subtracting the shift from the bounds.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for the shifted angle",
          "workingLatex": "\\theta - 36.87^\\circ = 53.13^\\circ, 126.87^\\circ",
          "explanation": "Sine $0.8$ gives principal value $53.13^\\circ$ and partner $126.87^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Add the shift and round",
          "workingLatex": "\\theta \\approx 90^\\circ, 164^\\circ",
          "explanation": "Adding $36.87^\\circ$ and rounding gives the two solutions.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta \\approx 90^\\circ, 164^\\circ$"
    }
  },
  {
    "id": "al.y2.pure.rsin-form.q044",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "proof",
    "tags": ["harmonic form", "proof", "minimum"],
    "questionText": "Prove that the least value of $a\\sin\\theta + b\\cos\\theta + c$ (with $a, b > 0$) is $c - \\sqrt{a^2 + b^2}$, and state the value of $\\sin(\\theta + \\alpha)$ where it occurs.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the varying part in R-form",
          "workingLatex": "a\\sin\\theta + b\\cos\\theta = R\\sin(\\theta + \\alpha), \\quad R = \\sqrt{a^2 + b^2}",
          "explanation": "The R-form collapses the two oscillating terms into one sine of amplitude $R$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rewrite the whole expression",
          "workingLatex": "a\\sin\\theta + b\\cos\\theta + c = R\\sin(\\theta + \\alpha) + c",
          "explanation": "The constant $c$ simply shifts the whole thing vertically.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the range of the sine",
          "workingLatex": "-1 \\le \\sin(\\theta + \\alpha) \\le 1",
          "explanation": "The sine is bounded between $-1$ and $1$ for every angle.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Scale by R and shift by c",
          "workingLatex": "c - R \\le R\\sin(\\theta + \\alpha) + c \\le c + R",
          "explanation": "Multiplying by the positive $R$ and adding $c$ gives the range of the full expression.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Identify the least value",
          "workingLatex": "\\text{least} = c - R = c - \\sqrt{a^2 + b^2}",
          "explanation": "The minimum of the expression is its lower bound.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State when it occurs",
          "workingLatex": "\\sin(\\theta + \\alpha) = -1",
          "explanation": "The least value is attained exactly when the sine reaches its minimum of $-1$, completing the proof.",
          "diagram": null
        }
      ],
      "finalAnswer": "Least value $= c - \\sqrt{a^2 + b^2}$, when $\\sin(\\theta + \\alpha) = -1$."
    }
  },
  {
    "id": "al.y2.pure.rsin-form.q045",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": ["harmonic form", "equations", "boundary"],
    "questionText": "Solve $3\\sin\\theta - 4\\cos\\theta = -5$ for $0^\\circ \\le \\theta < 360^\\circ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find R and alpha",
          "workingLatex": "R = \\sqrt{3^2 + 4^2} = 5, \\quad \\tan\\alpha = \\frac{4}{3} \\;\\Rightarrow\\; \\alpha \\approx 53.13^\\circ",
          "explanation": "For $R\\sin(\\theta - \\alpha)$, amplitude is $5$ and phase about $53.13^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the harmonic form",
          "workingLatex": "3\\sin\\theta - 4\\cos\\theta = 5\\sin(\\theta - 53.13^\\circ)",
          "explanation": "Combining gives the single-sine form.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set up the equation",
          "workingLatex": "5\\sin(\\theta - 53.13^\\circ) = -5 \\;\\Rightarrow\\; \\sin(\\theta - 53.13^\\circ) = -1",
          "explanation": "The right side equals the negative amplitude, so the sine must be at its minimum.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for the bracket",
          "workingLatex": "\\theta - 53.13^\\circ = -90^\\circ \\text{ or } 270^\\circ",
          "explanation": "Sine equals $-1$ at $270^\\circ$ (and $-90^\\circ$); we pick the one giving $\\theta$ in range.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for theta",
          "workingLatex": "\\theta = 270^\\circ + 53.13^\\circ = 323.13^\\circ",
          "explanation": "Using $270^\\circ$ gives a single valid solution; $-90^\\circ$ would give $\\theta = -36.87^\\circ$, out of range.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the solution",
          "workingLatex": "\\theta \\approx 323^\\circ",
          "explanation": "Because the value equals the minimum, there is exactly one solution in the interval.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta \\approx 323^\\circ$"
    }
  },
  {
    "id": "al.y2.pure.rsin-form.q046",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "value",
    "tags": ["harmonic form", "equations", "extended interval"],
    "questionText": "Solve $6\\cos\\theta + 8\\sin\\theta = 5$ for $0^\\circ \\le \\theta < 720^\\circ$, giving answers to the nearest degree.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Reorder and find R",
          "workingLatex": "8\\sin\\theta + 6\\cos\\theta, \\quad R = \\sqrt{8^2 + 6^2} = 10",
          "explanation": "Writing sine first, the amplitude is $10$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find alpha",
          "workingLatex": "\\tan\\alpha = \\frac{6}{8} = 0.75 \\;\\Rightarrow\\; \\alpha \\approx 36.87^\\circ",
          "explanation": "The ratio gives the phase angle.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set up the equation",
          "workingLatex": "10\\sin(\\theta + 36.87^\\circ) = 5 \\;\\Rightarrow\\; \\sin(\\theta + 36.87^\\circ) = 0.5",
          "explanation": "Substituting and dividing by $10$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set the extended shifted interval",
          "workingLatex": "36.87^\\circ \\le \\theta + 36.87^\\circ < 756.87^\\circ",
          "explanation": "Because $\\theta$ goes up to $720^\\circ$, the shifted angle spans nearly two full revolutions.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "List all solutions of the sine equation",
          "workingLatex": "\\theta + 36.87^\\circ = 150^\\circ, 390^\\circ, 510^\\circ, 750^\\circ",
          "explanation": "Sine $0.5$ occurs at $30^\\circ$ and $150^\\circ$ each cycle; within the interval the valid ones are $150^\\circ, 390^\\circ (=30^\\circ+360^\\circ), 510^\\circ (=150^\\circ+360^\\circ), 750^\\circ (=30^\\circ+720^\\circ)$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Subtract the shift",
          "workingLatex": "\\theta \\approx 113^\\circ, 353^\\circ, 473^\\circ, 713^\\circ",
          "explanation": "Subtracting $36.87^\\circ$ from each and rounding gives four solutions.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the solutions",
          "workingLatex": "\\theta \\approx 113^\\circ, 353^\\circ, 473^\\circ, 713^\\circ",
          "explanation": "The wider interval yields twice as many solutions as the usual $0$ to $360^\\circ$ range.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta \\approx 113^\\circ, 353^\\circ, 473^\\circ, 713^\\circ$"
    }
  },
  {
    "id": "al.y2.pure.rsin-form.q047",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "value",
    "tags": ["harmonic form", "equations", "exact", "radians"],
    "questionText": "Solve $\\cos\\theta - \\sqrt3\\sin\\theta = 1$ for $0 \\le \\theta < 2\\pi$, giving exact answers in radians.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the cosine form",
          "workingLatex": "\\cos\\theta - \\sqrt3\\sin\\theta = R\\cos(\\theta + \\alpha)",
          "explanation": "The expression starts with cosine and has a minus, matching $R\\cos(\\theta + \\alpha)$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find R and alpha",
          "workingLatex": "R = \\sqrt{1 + 3} = 2, \\quad \\tan\\alpha = \\frac{\\sqrt3}{1} \\;\\Rightarrow\\; \\alpha = \\frac{\\pi}{3}",
          "explanation": "The amplitude is $2$ and the phase is $\\frac{\\pi}{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the harmonic form",
          "workingLatex": "\\cos\\theta - \\sqrt3\\sin\\theta = 2\\cos\\left(\\theta + \\frac{\\pi}{3}\\right)",
          "explanation": "Combining gives a single cosine.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set up the equation",
          "workingLatex": "2\\cos\\left(\\theta + \\frac{\\pi}{3}\\right) = 1 \\;\\Rightarrow\\; \\cos\\left(\\theta + \\frac{\\pi}{3}\\right) = \\frac{1}{2}",
          "explanation": "Dividing by $2$ gives a standard exact value.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set the shifted interval",
          "workingLatex": "\\frac{\\pi}{3} \\le \\theta + \\frac{\\pi}{3} < 2\\pi + \\frac{\\pi}{3}",
          "explanation": "Adding the shift to the bounds.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for the shifted angle",
          "workingLatex": "\\theta + \\frac{\\pi}{3} = \\frac{5\\pi}{3}, \\; \\frac{7\\pi}{3}",
          "explanation": "Cosine one half occurs at $\\frac{\\pi}{3}$ and $\\frac{5\\pi}{3}$ each cycle; within range these are $\\frac{5\\pi}{3}$ and $\\frac{\\pi}{3} + 2\\pi = \\frac{7\\pi}{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Subtract the shift",
          "workingLatex": "\\theta = \\frac{4\\pi}{3}, \\; 2\\pi",
          "explanation": "Subtracting $\\frac{\\pi}{3}$; but $2\\pi$ is out of range, so it is rejected.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Include the boundary solution",
          "workingLatex": "\\theta = 0, \\; \\frac{4\\pi}{3}",
          "explanation": "The value $\\frac{\\pi}{3}$ for the shifted angle gives $\\theta = 0$, which is in range, so the solutions are $0$ and $\\frac{4\\pi}{3}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta = 0, \\dfrac{4\\pi}{3}$"
    }
  },
  {
    "id": "al.y2.pure.rsin-form.q048",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "value",
    "tags": ["harmonic form", "equations", "solving"],
    "questionText": "Express $9\\sin\\theta - 40\\cos\\theta$ as $R\\sin(\\theta - \\alpha)$ and hence solve $9\\sin\\theta - 40\\cos\\theta = 20$ for $0^\\circ \\le \\theta < 360^\\circ$, to the nearest degree.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find R",
          "workingLatex": "R = \\sqrt{9^2 + 40^2} = \\sqrt{1681} = 41",
          "explanation": "The amplitude is $41$ (a $9$-$40$-$41$ triangle).",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find alpha",
          "workingLatex": "\\tan\\alpha = \\frac{40}{9} \\;\\Rightarrow\\; \\alpha \\approx 77.32^\\circ",
          "explanation": "The ratio gives the phase angle.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the harmonic form",
          "workingLatex": "9\\sin\\theta - 40\\cos\\theta = 41\\sin(\\theta - 77.32^\\circ)",
          "explanation": "Combining $R$ and $\\alpha$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set up the equation",
          "workingLatex": "\\sin(\\theta - 77.32^\\circ) = \\frac{20}{41} \\approx 0.4878",
          "explanation": "Dividing by $41$ gives the sine value.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set the shifted interval and solve",
          "workingLatex": "\\theta - 77.32^\\circ = 29.20^\\circ, 150.80^\\circ",
          "explanation": "Within $[-77.32^\\circ, 282.68^\\circ)$, the sine equation gives these two values.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Add the shift and round",
          "workingLatex": "\\theta \\approx 107^\\circ, 228^\\circ",
          "explanation": "Adding $77.32^\\circ$ and rounding gives the two solutions.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta \\approx 107^\\circ, 228^\\circ$"
    }
  },
  {
    "id": "al.y2.pure.rsin-form.q049",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "value",
    "tags": ["harmonic form", "modelling", "spring"],
    "questionText": "The displacement of an oscillating particle is $x = 3\\cos(2t) + 4\\sin(2t)$ (metres), where $t$ is in seconds. Find the amplitude of the motion and the smallest positive $t$ at which $x = 0$, in radians.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Reorder to sine-first",
          "workingLatex": "x = 4\\sin(2t) + 3\\cos(2t)",
          "explanation": "Writing the sine term first aligns with the $R\\sin$ template.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the amplitude",
          "workingLatex": "R = \\sqrt{4^2 + 3^2} = 5",
          "explanation": "The amplitude of the oscillation is $R = 5$ metres.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the phase",
          "workingLatex": "\\tan\\alpha = \\frac{3}{4} \\;\\Rightarrow\\; \\alpha \\approx 0.6435 \\text{ rad}",
          "explanation": "The phase angle in radians is $\\arctan\\frac{3}{4} \\approx 0.6435$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the displacement",
          "workingLatex": "x = 5\\sin(2t + 0.6435)",
          "explanation": "The motion is a single sinusoid of amplitude $5$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set x = 0",
          "workingLatex": "\\sin(2t + 0.6435) = 0 \\;\\Rightarrow\\; 2t + 0.6435 = \\pi",
          "explanation": "The displacement is zero when the sine is zero; the first value giving positive $t$ is $\\pi$ (since $0$ would need negative $t$).",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for t",
          "workingLatex": "2t = \\pi - 0.6435 \\approx 2.498 \\;\\Rightarrow\\; t \\approx 1.25 \\text{ s}",
          "explanation": "Dividing by $2$ gives the smallest positive time at which the particle passes through the origin.",
          "diagram": null
        }
      ],
      "finalAnswer": "Amplitude $5$ m; first at $t \\approx 1.25$ s."
    }
  },
  {
    "id": "al.y2.pure.rsin-form.q050",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": ["harmonic form", "range", "square"],
    "questionText": "Find the maximum and minimum values of $(5\\sin\\theta + 12\\cos\\theta)^2 + 3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the inner expression in R-form",
          "workingLatex": "5\\sin\\theta + 12\\cos\\theta = 13\\sin(\\theta + \\alpha)",
          "explanation": "The amplitude is $13$, bounding the inner expression.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Bound the inner expression",
          "workingLatex": "-13 \\le 13\\sin(\\theta + \\alpha) \\le 13",
          "explanation": "The inner expression ranges from $-13$ to $13$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Square the bounds",
          "workingLatex": "0 \\le (13\\sin(\\theta + \\alpha))^2 \\le 169",
          "explanation": "Squaring a value in $[-13,13]$ gives a value in $[0,169]$; zero occurs when the inner expression is $0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add the constant",
          "workingLatex": "3 \\le (5\\sin\\theta + 12\\cos\\theta)^2 + 3 \\le 172",
          "explanation": "Adding $3$ shifts the range up by $3$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State max and min",
          "workingLatex": "\\text{max} = 172, \\quad \\text{min} = 3",
          "explanation": "The maximum is $169 + 3$ and the minimum is $0 + 3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Maximum $= 172$, minimum $= 3$."
    }
  },
  {
    "id": "al.y2.pure.rsin-form.q051",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "value",
    "tags": ["harmonic form", "equations", "solving"],
    "questionText": "Solve $\\sin\\theta + \\cos\\theta = \\dfrac{1}{2}$ for $0^\\circ \\le \\theta < 360^\\circ$, giving answers to the nearest degree.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write in R-form",
          "workingLatex": "\\sin\\theta + \\cos\\theta = \\sqrt2\\sin(\\theta + 45^\\circ)",
          "explanation": "Equal unit coefficients give amplitude $\\sqrt2$ and phase $45^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up the equation",
          "workingLatex": "\\sqrt2\\sin(\\theta + 45^\\circ) = \\frac{1}{2} \\;\\Rightarrow\\; \\sin(\\theta + 45^\\circ) = \\frac{1}{2\\sqrt2}",
          "explanation": "Dividing by $\\sqrt2$ gives sine equal to about $0.3536$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the base angle",
          "workingLatex": "\\sin^{-1}(0.3536) \\approx 20.70^\\circ",
          "explanation": "The principal value of the inverse sine.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "List solutions in the shifted interval",
          "workingLatex": "\\theta + 45^\\circ = 159.30^\\circ, 380.70^\\circ",
          "explanation": "Within $[45^\\circ, 405^\\circ)$, the values are the second-quadrant $159.30^\\circ$ and $20.70^\\circ + 360^\\circ = 380.70^\\circ$; the bare $20.70^\\circ$ is below the interval.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Subtract the shift",
          "workingLatex": "\\theta = 114.30^\\circ, 335.70^\\circ",
          "explanation": "Subtracting $45^\\circ$ from each valid value.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Round the solutions",
          "workingLatex": "\\theta \\approx 114^\\circ, 336^\\circ",
          "explanation": "Rounding to the nearest degree gives the final answers.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta \\approx 114^\\circ, 336^\\circ$"
    }
  },
  {
    "id": "al.y2.pure.rsin-form.q052",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "value",
    "tags": ["harmonic form", "reverse", "maximum"],
    "questionText": "The expression $a\\sin\\theta + b\\cos\\theta$ (with $a, b > 0$) has a maximum value of $10$, which first occurs at $\\theta = 30^\\circ$. Find $a$ and $b$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Relate the maximum to R",
          "workingLatex": "a\\sin\\theta + b\\cos\\theta = R\\sin(\\theta + \\alpha), \\quad R = 10",
          "explanation": "The maximum value of a harmonic expression equals its amplitude, so $R = 10$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Use the location of the maximum",
          "workingLatex": "\\text{max at } \\theta = 30^\\circ \\;\\Rightarrow\\; 30^\\circ + \\alpha = 90^\\circ",
          "explanation": "The maximum of $\\sin(\\theta + \\alpha)$ occurs when its argument is $90^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find alpha",
          "workingLatex": "\\alpha = 60^\\circ",
          "explanation": "Solving gives the phase angle $\\alpha = 60^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Recover a",
          "workingLatex": "a = R\\cos\\alpha = 10\\cos 60^\\circ = 10\\cdot\\frac{1}{2} = 5",
          "explanation": "From the standard relations, $a = R\\cos\\alpha$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Recover b",
          "workingLatex": "b = R\\sin\\alpha = 10\\sin 60^\\circ = 10\\cdot\\frac{\\sqrt3}{2} = 5\\sqrt3",
          "explanation": "Similarly, $b = R\\sin\\alpha$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "a = 5, \\quad b = 5\\sqrt3",
          "explanation": "Check: $\\sqrt{5^2 + (5\\sqrt3)^2} = \\sqrt{25 + 75} = 10$, consistent with the maximum.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a = 5, \\quad b = 5\\sqrt3$"
    }
  },
  {
    "id": "al.y2.pure.rsin-form.q053",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "proof",
    "tags": ["harmonic form", "proof", "equivalent forms"],
    "questionText": "Show that $3\\sin\\theta + 4\\cos\\theta$ can be written as both $5\\sin(\\theta + \\alpha)$ and $5\\cos(\\theta - \\beta)$, and find the relationship between $\\alpha$ and $\\beta$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the sine form",
          "workingLatex": "3\\sin\\theta + 4\\cos\\theta = 5\\sin(\\theta + \\alpha), \\quad \\tan\\alpha = \\frac{4}{3}",
          "explanation": "The standard sine form has amplitude $5$ and $\\tan\\alpha = \\frac{4}{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Use the sine-cosine shift identity",
          "workingLatex": "\\sin X = \\cos(X - 90^\\circ)",
          "explanation": "A sine can always be rewritten as a cosine shifted by $90^\\circ$; this converts the form.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply with X = θ + α",
          "workingLatex": "5\\sin(\\theta + \\alpha) = 5\\cos(\\theta + \\alpha - 90^\\circ)",
          "explanation": "Substituting the shift gives a cosine form.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rearrange to match the target",
          "workingLatex": "5\\cos(\\theta + \\alpha - 90^\\circ) = 5\\cos(\\theta - (90^\\circ - \\alpha))",
          "explanation": "Writing the phase as a subtraction matches the required $5\\cos(\\theta - \\beta)$ form.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Identify beta",
          "workingLatex": "\\beta = 90^\\circ - \\alpha",
          "explanation": "Comparing gives the relationship: the cosine phase is the complement of the sine phase.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State numerical values",
          "workingLatex": "\\alpha \\approx 53.13^\\circ, \\quad \\beta \\approx 36.87^\\circ",
          "explanation": "The two phase angles are complementary, summing to $90^\\circ$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\beta = 90^\\circ - \\alpha$ (so $\\alpha \\approx 53.13^\\circ$, $\\beta \\approx 36.87^\\circ$)."
    }
  },
  {
    "id": "al.y2.pure.rsin-form.q054",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "value",
    "tags": ["harmonic form", "equations", "solving", "cosine"],
    "questionText": "Solve $5\\cos\\theta + 12\\sin\\theta + 4 = 0$ for $0^\\circ \\le \\theta < 360^\\circ$, giving answers to the nearest degree.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Reorder and find R",
          "workingLatex": "12\\sin\\theta + 5\\cos\\theta, \\quad R = \\sqrt{12^2 + 5^2} = 13",
          "explanation": "Writing sine first, the amplitude is $13$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find alpha",
          "workingLatex": "\\tan\\alpha = \\frac{5}{12} \\;\\Rightarrow\\; \\alpha \\approx 22.62^\\circ",
          "explanation": "The ratio gives the phase angle.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite the equation",
          "workingLatex": "13\\sin(\\theta + 22.62^\\circ) + 4 = 0",
          "explanation": "Substituting the harmonic form.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Isolate the sine",
          "workingLatex": "\\sin(\\theta + 22.62^\\circ) = -\\frac{4}{13} \\approx -0.3077",
          "explanation": "Subtracting $4$ and dividing by $13$ gives a negative sine value.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the base angles",
          "workingLatex": "\\theta + 22.62^\\circ = 197.92^\\circ, 342.08^\\circ",
          "explanation": "A negative sine gives third- and fourth-quadrant solutions; within the shifted interval these are the relevant values.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Subtract the shift",
          "workingLatex": "\\theta \\approx 175^\\circ, 319^\\circ",
          "explanation": "Subtracting $22.62^\\circ$ and rounding gives the two solutions.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta \\approx 175^\\circ, 319^\\circ$"
    }
  },
  {
    "id": "al.y2.pure.rsin-form.q055",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": ["harmonic form", "range", "values of k"],
    "questionText": "Find the set of values of $k$ for which the equation $7\\sin\\theta + 24\\cos\\theta = k$ has at least one solution.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write in R-form",
          "workingLatex": "7\\sin\\theta + 24\\cos\\theta = 25\\sin(\\theta + \\alpha)",
          "explanation": "The amplitude is $R = \\sqrt{49 + 576} = 25$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the range of the expression",
          "workingLatex": "-25 \\le 25\\sin(\\theta + \\alpha) \\le 25",
          "explanation": "The expression takes every value between $-25$ and $25$ as $\\theta$ varies.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Relate to k",
          "workingLatex": "k = 25\\sin(\\theta + \\alpha)",
          "explanation": "A solution exists precisely when $k$ is an achievable value of the expression.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the condition",
          "workingLatex": "-25 \\le k \\le 25",
          "explanation": "Any $k$ in this closed interval is attained, since sine is continuous and reaches every value in $[-1,1]$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Note the boundary cases",
          "workingLatex": "k = \\pm 25 \\text{ give exactly one solution each}",
          "explanation": "At the extremes the sine touches $\\pm 1$ once per revolution, so those values still count as having a solution.",
          "diagram": null
        }
      ],
      "finalAnswer": "$-25 \\le k \\le 25$"
    }
  },
  {
    "id": "al.y2.pure.rsin-form.q056",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "value",
    "tags": ["harmonic form", "equations", "solving"],
    "questionText": "Solve $\\sqrt3\\sin 2\\theta - \\cos 2\\theta = 1$ for $0^\\circ \\le \\theta < 180^\\circ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the varying part in R-form",
          "workingLatex": "\\sqrt3\\sin 2\\theta - \\cos 2\\theta = 2\\sin(2\\theta - 30^\\circ)",
          "explanation": "With coefficients $\\sqrt3$ and $1$, the amplitude is $2$ and $\\tan\\alpha = \\frac{1}{\\sqrt3}$, so $\\alpha = 30^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rewrite the equation",
          "workingLatex": "2\\sin(2\\theta - 30^\\circ) = 1 \\;\\Rightarrow\\; \\sin(2\\theta - 30^\\circ) = \\frac{1}{2}",
          "explanation": "Substituting and dividing by $2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set the interval for the argument",
          "workingLatex": "-30^\\circ \\le 2\\theta - 30^\\circ < 330^\\circ",
          "explanation": "Since $\\theta \\in [0^\\circ, 180^\\circ)$, the quantity $2\\theta$ spans $[0^\\circ, 360^\\circ)$, so the shifted argument spans this interval.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for the argument",
          "workingLatex": "2\\theta - 30^\\circ = 30^\\circ, 150^\\circ",
          "explanation": "Sine one half occurs at $30^\\circ$ and $150^\\circ$ within the interval.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for 2θ",
          "workingLatex": "2\\theta = 60^\\circ, 180^\\circ",
          "explanation": "Adding $30^\\circ$ to each.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Halve to find theta",
          "workingLatex": "\\theta = 30^\\circ, 90^\\circ",
          "explanation": "Dividing by $2$ gives the solutions in the required range.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta = 30^\\circ, 90^\\circ$"
    }
  },
  {
    "id": "al.y2.pure.rsin-form.q057",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "value",
    "tags": ["harmonic form", "equations", "solving"],
    "questionText": "Solve $2\\sin\\theta - 5\\cos\\theta = 3$ for $0^\\circ \\le \\theta < 360^\\circ$, giving answers to the nearest degree.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find R and alpha",
          "workingLatex": "R = \\sqrt{2^2 + 5^2} = \\sqrt{29}, \\quad \\tan\\alpha = \\frac{5}{2} \\;\\Rightarrow\\; \\alpha \\approx 68.20^\\circ",
          "explanation": "For $R\\sin(\\theta - \\alpha)$, amplitude is $\\sqrt{29}$ and phase about $68.20^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the harmonic form",
          "workingLatex": "2\\sin\\theta - 5\\cos\\theta = \\sqrt{29}\\sin(\\theta - 68.20^\\circ)",
          "explanation": "Combining $R$ and $\\alpha$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set up the equation",
          "workingLatex": "\\sin(\\theta - 68.20^\\circ) = \\frac{3}{\\sqrt{29}} \\approx 0.5571",
          "explanation": "Dividing by $\\sqrt{29}$ gives the sine value.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve within the shifted interval",
          "workingLatex": "\\theta - 68.20^\\circ = 33.86^\\circ, 146.14^\\circ",
          "explanation": "Within $[-68.20^\\circ, 291.80^\\circ)$, the sine equation gives these two values.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Add the shift and round",
          "workingLatex": "\\theta \\approx 102^\\circ, 214^\\circ",
          "explanation": "Adding $68.20^\\circ$ and rounding gives the two solutions.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify plausibility",
          "workingLatex": "3 < \\sqrt{29} \\approx 5.39 \\;\\checkmark",
          "explanation": "Since $3$ is within the amplitude, two solutions are expected, matching our answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta \\approx 102^\\circ, 214^\\circ$"
    }
  },
  {
    "id": "al.y2.pure.rsin-form.q058",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "value",
    "tags": ["harmonic form", "modelling", "current"],
    "questionText": "An alternating current is modelled by $I = 5\\sin(100t) + 12\\cos(100t)$ amps, where $t$ is in seconds. Find the peak current and the smallest positive $t$ at which the current first reaches its peak (in seconds, to 3 significant figures).",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write in R-form",
          "workingLatex": "5\\sin(100t) + 12\\cos(100t) = 13\\sin(100t + \\alpha)",
          "explanation": "The amplitude $R = \\sqrt{25 + 144} = 13$ is the peak current.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the peak current",
          "workingLatex": "I_{\\max} = 13 \\text{ A}",
          "explanation": "The peak of any harmonic expression is its amplitude.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find alpha in radians",
          "workingLatex": "\\tan\\alpha = \\frac{12}{5} \\;\\Rightarrow\\; \\alpha \\approx 1.176 \\text{ rad}",
          "explanation": "The phase angle in radians is $\\arctan\\frac{12}{5}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set the sine to its peak",
          "workingLatex": "100t + 1.176 = \\frac{\\pi}{2}",
          "explanation": "The current first peaks when the argument first equals $\\frac{\\pi}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for t",
          "workingLatex": "100t = \\frac{\\pi}{2} - 1.176 \\approx 0.3948",
          "explanation": "Subtracting the phase gives the value of $100t$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Divide by 100",
          "workingLatex": "t \\approx 0.00395 \\text{ s}",
          "explanation": "Dividing by $100$ gives the smallest positive time, to 3 significant figures.",
          "diagram": null
        }
      ],
      "finalAnswer": "Peak current $13$ A, first at $t \\approx 0.00395$ s."
    }
  },
  {
    "id": "al.y2.pure.rsin-form.q059",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "value",
    "tags": ["harmonic form", "equations", "exact"],
    "questionText": "Solve $\\cos\\theta + \\sin\\theta = -1$ for $0^\\circ \\le \\theta < 360^\\circ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write in R-form",
          "workingLatex": "\\sin\\theta + \\cos\\theta = \\sqrt2\\sin(\\theta + 45^\\circ)",
          "explanation": "Equal unit coefficients give amplitude $\\sqrt2$ and phase $45^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up the equation",
          "workingLatex": "\\sqrt2\\sin(\\theta + 45^\\circ) = -1 \\;\\Rightarrow\\; \\sin(\\theta + 45^\\circ) = -\\frac{1}{\\sqrt2}",
          "explanation": "Dividing by $\\sqrt2$ gives a standard negative exact value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set the shifted interval",
          "workingLatex": "45^\\circ \\le \\theta + 45^\\circ < 405^\\circ",
          "explanation": "Adding the shift to the bounds.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for the shifted angle",
          "workingLatex": "\\theta + 45^\\circ = 225^\\circ, 315^\\circ",
          "explanation": "A negative sine of $\\frac{1}{\\sqrt2}$ gives third- and fourth-quadrant angles $225^\\circ$ and $315^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Subtract the shift",
          "workingLatex": "\\theta = 180^\\circ, 270^\\circ",
          "explanation": "Subtracting $45^\\circ$ from each gives the solutions.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify one solution",
          "workingLatex": "\\theta = 180^\\circ: \\cos 180^\\circ + \\sin 180^\\circ = -1 + 0 = -1 \\;\\checkmark",
          "explanation": "Substituting confirms the solution.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta = 180^\\circ, 270^\\circ$"
    }
  },
  {
    "id": "al.y2.pure.rsin-form.q060",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "value",
    "tags": ["harmonic form", "equations", "solving"],
    "questionText": "Express $8\\cos\\theta - 15\\sin\\theta$ as $R\\cos(\\theta + \\alpha)$ and hence solve $8\\cos\\theta - 15\\sin\\theta = 8.5$ for $0^\\circ \\le \\theta < 360^\\circ$, to the nearest degree.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find R",
          "workingLatex": "R = \\sqrt{8^2 + 15^2} = 17",
          "explanation": "The amplitude is $17$ (an $8$-$15$-$17$ triangle).",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find alpha",
          "workingLatex": "\\tan\\alpha = \\frac{15}{8} \\;\\Rightarrow\\; \\alpha \\approx 61.93^\\circ",
          "explanation": "For the cosine form, $\\tan\\alpha$ is the sine coefficient over the cosine coefficient.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the harmonic form",
          "workingLatex": "8\\cos\\theta - 15\\sin\\theta = 17\\cos(\\theta + 61.93^\\circ)",
          "explanation": "Combining gives the single-cosine form.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set up the equation",
          "workingLatex": "\\cos(\\theta + 61.93^\\circ) = \\frac{8.5}{17} = 0.5",
          "explanation": "Dividing by $17$ gives cosine equal to $0.5$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve within the shifted interval",
          "workingLatex": "\\theta + 61.93^\\circ = 60^\\circ, 300^\\circ, 420^\\circ",
          "explanation": "Cosine $0.5$ occurs at $60^\\circ$ and $300^\\circ$; within $[61.93^\\circ, 421.93^\\circ)$ the valid values are $300^\\circ$ and $60^\\circ + 360^\\circ = 420^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Subtract the shift and round",
          "workingLatex": "\\theta \\approx 238^\\circ, 358^\\circ",
          "explanation": "Subtracting $61.93^\\circ$ from the valid values and rounding gives the solutions.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta \\approx 238^\\circ, 358^\\circ$"
    }
  },
  {
    "id": "al.y2.pure.rsin-form.q061",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": ["harmonic form", "equations", "exact"],
    "questionText": "Solve $\\sqrt2\\sin\\theta - \\sqrt2\\cos\\theta = 1$ for $0^\\circ \\le \\theta < 360^\\circ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find R and alpha",
          "workingLatex": "R = \\sqrt{(\\sqrt2)^2 + (\\sqrt2)^2} = 2, \\quad \\tan\\alpha = 1 \\;\\Rightarrow\\; \\alpha = 45^\\circ",
          "explanation": "For $R\\sin(\\theta - \\alpha)$, equal magnitudes give amplitude $2$ and phase $45^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the harmonic form",
          "workingLatex": "\\sqrt2\\sin\\theta - \\sqrt2\\cos\\theta = 2\\sin(\\theta - 45^\\circ)",
          "explanation": "Combining gives the single-sine form.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set up the equation",
          "workingLatex": "2\\sin(\\theta - 45^\\circ) = 1 \\;\\Rightarrow\\; \\sin(\\theta - 45^\\circ) = \\frac{1}{2}",
          "explanation": "Dividing by $2$ gives a standard exact value.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set the shifted interval",
          "workingLatex": "-45^\\circ \\le \\theta - 45^\\circ < 315^\\circ",
          "explanation": "Subtracting the shift from the bounds.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for the shifted angle",
          "workingLatex": "\\theta - 45^\\circ = 30^\\circ, 150^\\circ",
          "explanation": "Sine one half occurs at $30^\\circ$ and $150^\\circ$, both within the interval.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Add the shift",
          "workingLatex": "\\theta = 75^\\circ, 195^\\circ",
          "explanation": "Adding $45^\\circ$ to each gives the solutions.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta = 75^\\circ, 195^\\circ$"
    }
  },
  {
    "id": "al.y2.pure.rsin-form.q062",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": ["harmonic form", "minimum", "constant"],
    "questionText": "Find the minimum value of $3 + 4\\cos\\theta - 3\\sin\\theta$ and the value of $\\theta$ (to the nearest degree) at which it occurs.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the varying part in R-form",
          "workingLatex": "4\\cos\\theta - 3\\sin\\theta = R\\cos(\\theta + \\alpha)",
          "explanation": "Starting with cosine and a minus sign, the $R\\cos(\\theta + \\alpha)$ form fits.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find R and alpha",
          "workingLatex": "R = \\sqrt{4^2 + 3^2} = 5, \\quad \\tan\\alpha = \\frac{3}{4} \\;\\Rightarrow\\; \\alpha \\approx 36.87^\\circ",
          "explanation": "Amplitude $5$ and phase about $36.87^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite the expression",
          "workingLatex": "3 + 5\\cos(\\theta + 36.87^\\circ)",
          "explanation": "The constant $3$ shifts the whole expression up.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the minimum value",
          "workingLatex": "\\text{min} = 3 - 5 = -2",
          "explanation": "The least value occurs when the cosine equals $-1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the theta",
          "workingLatex": "\\cos(\\theta + 36.87^\\circ) = -1 \\;\\Rightarrow\\; \\theta + 36.87^\\circ = 180^\\circ",
          "explanation": "Cosine is $-1$ when its argument is $180^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for theta",
          "workingLatex": "\\theta = 143.13^\\circ \\approx 143^\\circ",
          "explanation": "Subtracting the phase gives the location of the minimum.",
          "diagram": null
        }
      ],
      "finalAnswer": "Minimum $= -2$ at $\\theta \\approx 143^\\circ$."
    }
  },
  {
    "id": "al.y2.pure.rsin-form.q063",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "value",
    "tags": ["harmonic form", "equations", "exact", "radians"],
    "questionText": "Solve $\\sqrt3\\cos\\theta - \\sin\\theta = 1$ for $0 \\le \\theta < 2\\pi$, giving exact answers in radians.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the cosine form",
          "workingLatex": "\\sqrt3\\cos\\theta - \\sin\\theta = R\\cos(\\theta + \\alpha)",
          "explanation": "Cosine first with a minus sign matches $R\\cos(\\theta + \\alpha)$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find R and alpha",
          "workingLatex": "R = \\sqrt{3 + 1} = 2, \\quad \\tan\\alpha = \\frac{1}{\\sqrt3} \\;\\Rightarrow\\; \\alpha = \\frac{\\pi}{6}",
          "explanation": "Amplitude $2$ and phase $\\frac{\\pi}{6}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the harmonic form",
          "workingLatex": "\\sqrt3\\cos\\theta - \\sin\\theta = 2\\cos\\left(\\theta + \\frac{\\pi}{6}\\right)",
          "explanation": "Combining gives a single cosine.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set up the equation",
          "workingLatex": "2\\cos\\left(\\theta + \\frac{\\pi}{6}\\right) = 1 \\;\\Rightarrow\\; \\cos\\left(\\theta + \\frac{\\pi}{6}\\right) = \\frac{1}{2}",
          "explanation": "Dividing by $2$ gives a standard exact value.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set the shifted interval and solve",
          "workingLatex": "\\theta + \\frac{\\pi}{6} = \\frac{\\pi}{3}, \\frac{5\\pi}{3}, \\frac{7\\pi}{3}",
          "explanation": "Within $[\\frac{\\pi}{6}, 2\\pi + \\frac{\\pi}{6})$, cosine one half occurs at $\\frac{\\pi}{3}$, $\\frac{5\\pi}{3}$ and $\\frac{7\\pi}{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Subtract the shift",
          "workingLatex": "\\theta = \\frac{\\pi}{6}, \\frac{3\\pi}{2}, \\frac{13\\pi}{6}",
          "explanation": "Subtracting $\\frac{\\pi}{6}$ from each; the last, $\\frac{13\\pi}{6}$, exceeds $2\\pi$ and is rejected.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the solutions",
          "workingLatex": "\\theta = \\frac{\\pi}{6}, \\frac{3\\pi}{2}",
          "explanation": "These are the exact solutions in the required range.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta = \\dfrac{\\pi}{6}, \\dfrac{3\\pi}{2}$"
    }
  },
  {
    "id": "al.y2.pure.rsin-form.q064",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "value",
    "tags": ["harmonic form", "equations", "solving"],
    "questionText": "Solve $12\\sin\\theta - 5\\cos\\theta = 6.5$ for $0^\\circ \\le \\theta < 360^\\circ$, giving answers to the nearest degree.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find R and alpha",
          "workingLatex": "R = \\sqrt{12^2 + 5^2} = 13, \\quad \\tan\\alpha = \\frac{5}{12} \\;\\Rightarrow\\; \\alpha \\approx 22.62^\\circ",
          "explanation": "For $R\\sin(\\theta - \\alpha)$, amplitude is $13$ and phase about $22.62^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the harmonic form",
          "workingLatex": "12\\sin\\theta - 5\\cos\\theta = 13\\sin(\\theta - 22.62^\\circ)",
          "explanation": "Combining $R$ and $\\alpha$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set up the equation",
          "workingLatex": "13\\sin(\\theta - 22.62^\\circ) = 6.5 \\;\\Rightarrow\\; \\sin(\\theta - 22.62^\\circ) = 0.5",
          "explanation": "Dividing by $13$ gives sine equal to $0.5$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve within the shifted interval",
          "workingLatex": "\\theta - 22.62^\\circ = 30^\\circ, 150^\\circ",
          "explanation": "Sine $0.5$ gives principal value $30^\\circ$ and partner $150^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Add the shift and round",
          "workingLatex": "\\theta \\approx 53^\\circ, 173^\\circ",
          "explanation": "Adding $22.62^\\circ$ and rounding gives the two solutions.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta \\approx 53^\\circ, 173^\\circ$"
    }
  },
  {
    "id": "al.y2.pure.rsin-form.q065",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "value",
    "tags": ["harmonic form", "modelling", "temperature"],
    "questionText": "The temperature in a greenhouse is modelled by $T = 18 + 4\\sin(15t)^\\circ + 3\\cos(15t)^\\circ$ degrees Celsius, where $t$ is the number of hours after 06:00. Find the maximum temperature and the time (to the nearest quarter hour) when it first occurs.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the oscillating part in R-form",
          "workingLatex": "4\\sin x + 3\\cos x = R\\sin(x + \\alpha), \\quad x = 15t",
          "explanation": "Combining the terms gives amplitude and phase for the temperature swing.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find R and alpha",
          "workingLatex": "R = \\sqrt{4^2 + 3^2} = 5, \\quad \\tan\\alpha = \\frac{3}{4} \\;\\Rightarrow\\; \\alpha \\approx 36.87^\\circ",
          "explanation": "Amplitude $5$ and phase about $36.87^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the temperature model",
          "workingLatex": "T = 18 + 5\\sin(15t + 36.87^\\circ)",
          "explanation": "The model is a single sinusoid oscillating about $18$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the maximum temperature",
          "workingLatex": "T_{\\max} = 18 + 5 = 23^\\circ\\text{C}",
          "explanation": "The maximum occurs when the sine equals $1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set the sine to its peak",
          "workingLatex": "15t + 36.87^\\circ = 90^\\circ",
          "explanation": "The first maximum occurs when the argument first equals $90^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for t",
          "workingLatex": "15t = 53.13^\\circ \\;\\Rightarrow\\; t \\approx 3.54 \\text{ hours}",
          "explanation": "Dividing by $15$ gives the time after 06:00.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Convert to a clock time",
          "workingLatex": "t \\approx 3.5 \\text{ h} \\;\\Rightarrow\\; 09{:}30",
          "explanation": "Rounding to the nearest quarter hour, the maximum first occurs at about 09:30.",
          "diagram": null
        }
      ],
      "finalAnswer": "Maximum $23^\\circ$C, first at about 09:30."
    }
  },
  {
    "id": "al.y2.pure.rsin-form.q066",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "value",
    "tags": ["harmonic form", "range", "reciprocal", "max min"],
    "questionText": "Find the maximum and minimum values of $\\dfrac{1}{10 + 6\\sin\\theta - 8\\cos\\theta}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the varying part in R-form",
          "workingLatex": "6\\sin\\theta - 8\\cos\\theta = 10\\sin(\\theta - \\alpha)",
          "explanation": "The amplitude is $\\sqrt{36 + 64} = 10$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Bound the denominator",
          "workingLatex": "10 - 10 \\le 10 + 10\\sin(\\theta - \\alpha) \\le 10 + 10",
          "explanation": "The sine part ranges over $[-10,10]$, so the denominator ranges over $[0, 20]$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Note the denominator reaches zero",
          "workingLatex": "\\text{denominator} = 0 \\text{ is possible}",
          "explanation": "When the sine equals $-1$, the denominator is $0$, so the fraction is undefined there and can grow without bound nearby.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Conclude about the maximum",
          "workingLatex": "\\text{no finite maximum}",
          "explanation": "As the denominator approaches $0$ from above, the fraction tends to $+\\infty$, so there is no finite maximum.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the minimum",
          "workingLatex": "\\text{min} = \\frac{1}{20}",
          "explanation": "The smallest positive fraction comes from the largest denominator $20$, giving $\\frac{1}{20}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the result",
          "workingLatex": "\\text{min} = \\frac{1}{20}, \\quad \\text{no maximum}",
          "explanation": "This example highlights why checking whether the denominator can vanish matters.",
          "diagram": null
        }
      ],
      "finalAnswer": "Minimum $= \\dfrac{1}{20}$; there is no finite maximum (denominator can reach $0$)."
    }
  },
  {
    "id": "al.y2.pure.rsin-form.q067",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "value",
    "tags": ["harmonic form", "equations", "solving"],
    "questionText": "Solve $\\sin\\theta - 2\\cos\\theta = 1$ for $0^\\circ \\le \\theta < 360^\\circ$, giving answers to the nearest degree.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find R and alpha",
          "workingLatex": "R = \\sqrt{1^2 + 2^2} = \\sqrt5, \\quad \\tan\\alpha = \\frac{2}{1} \\;\\Rightarrow\\; \\alpha \\approx 63.43^\\circ",
          "explanation": "For $R\\sin(\\theta - \\alpha)$, amplitude is $\\sqrt5$ and phase about $63.43^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the harmonic form",
          "workingLatex": "\\sin\\theta - 2\\cos\\theta = \\sqrt5\\sin(\\theta - 63.43^\\circ)",
          "explanation": "Combining $R$ and $\\alpha$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set up the equation",
          "workingLatex": "\\sin(\\theta - 63.43^\\circ) = \\frac{1}{\\sqrt5} \\approx 0.4472",
          "explanation": "Dividing by $\\sqrt5$ gives the sine value.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the base angles",
          "workingLatex": "\\theta - 63.43^\\circ = 26.57^\\circ, 153.43^\\circ",
          "explanation": "The principal value is $26.57^\\circ$ with partner $153.43^\\circ$; both lie in the shifted interval.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Add the shift and round",
          "workingLatex": "\\theta \\approx 90^\\circ, 217^\\circ",
          "explanation": "Adding $63.43^\\circ$ and rounding gives the two solutions.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta \\approx 90^\\circ, 217^\\circ$"
    }
  },
  {
    "id": "al.y2.pure.rsin-form.q068",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "value",
    "tags": ["harmonic form", "equations", "quadratic-like"],
    "questionText": "Solve $\\sin\\theta + \\cos\\theta = \\sqrt2\\sin 2\\theta$ for $0^\\circ \\le \\theta < 360^\\circ$ is difficult directly; instead solve the related equation $\\sin\\theta + \\cos\\theta = 1$ for $0^\\circ \\le \\theta < 360^\\circ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write in R-form",
          "workingLatex": "\\sin\\theta + \\cos\\theta = \\sqrt2\\sin(\\theta + 45^\\circ)",
          "explanation": "Equal unit coefficients give amplitude $\\sqrt2$ and phase $45^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up the equation",
          "workingLatex": "\\sqrt2\\sin(\\theta + 45^\\circ) = 1 \\;\\Rightarrow\\; \\sin(\\theta + 45^\\circ) = \\frac{1}{\\sqrt2}",
          "explanation": "Dividing by $\\sqrt2$ gives a standard exact value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set the shifted interval",
          "workingLatex": "45^\\circ \\le \\theta + 45^\\circ < 405^\\circ",
          "explanation": "Adding the shift to the bounds.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for the shifted angle",
          "workingLatex": "\\theta + 45^\\circ = 45^\\circ, 135^\\circ",
          "explanation": "Sine $\\frac{1}{\\sqrt2}$ occurs at $45^\\circ$ and $135^\\circ$ within the interval.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Subtract the shift",
          "workingLatex": "\\theta = 0^\\circ, 90^\\circ",
          "explanation": "Subtracting $45^\\circ$ from each gives the solutions.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify",
          "workingLatex": "\\theta = 90^\\circ: \\sin 90^\\circ + \\cos 90^\\circ = 1 + 0 = 1 \\;\\checkmark",
          "explanation": "Substituting confirms the solution.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta = 0^\\circ, 90^\\circ$"
    }
  },
  {
    "id": "al.y2.pure.rsin-form.q069",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "value",
    "tags": ["harmonic form", "equations", "solving", "full method"],
    "questionText": "Express $2\\sin\\theta - \\sqrt5\\cos\\theta$ as $R\\sin(\\theta - \\alpha)$ and hence solve $2\\sin\\theta - \\sqrt5\\cos\\theta = 1.5$ for $0^\\circ \\le \\theta < 360^\\circ$, to the nearest degree.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find R",
          "workingLatex": "R = \\sqrt{2^2 + (\\sqrt5)^2} = \\sqrt{4 + 5} = 3",
          "explanation": "The sum of squares is $9$, so $R = 3$ exactly.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find alpha",
          "workingLatex": "\\tan\\alpha = \\frac{\\sqrt5}{2} \\;\\Rightarrow\\; \\alpha \\approx 48.19^\\circ",
          "explanation": "The ratio gives the phase angle.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the harmonic form",
          "workingLatex": "2\\sin\\theta - \\sqrt5\\cos\\theta = 3\\sin(\\theta - 48.19^\\circ)",
          "explanation": "Combining $R$ and $\\alpha$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set up the equation",
          "workingLatex": "3\\sin(\\theta - 48.19^\\circ) = 1.5 \\;\\Rightarrow\\; \\sin(\\theta - 48.19^\\circ) = 0.5",
          "explanation": "Dividing by $3$ gives a standard value.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set the shifted interval",
          "workingLatex": "-48.19^\\circ \\le \\theta - 48.19^\\circ < 311.81^\\circ",
          "explanation": "Subtracting the shift from the bounds.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for the shifted angle",
          "workingLatex": "\\theta - 48.19^\\circ = 30^\\circ, 150^\\circ",
          "explanation": "Sine $0.5$ gives $30^\\circ$ and $150^\\circ$, both within the interval.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Add the shift and round",
          "workingLatex": "\\theta \\approx 78^\\circ, 198^\\circ",
          "explanation": "Adding $48.19^\\circ$ and rounding gives the two solutions.",
          "diagram": null
        }
      ],
      "finalAnswer": "$2\\sin\\theta - \\sqrt5\\cos\\theta = 3\\sin(\\theta - 48.19^\\circ)$; $\\theta \\approx 78^\\circ, 198^\\circ$."
    }
  },
  {
    "id": "al.y2.pure.rsin-form.q070",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "value",
    "tags": ["harmonic form", "modelling", "inequality"],
    "questionText": "A Ferris wheel car's height is $h = 12 - 5\\cos(6t)^\\circ - 12\\sin(6t)^\\circ$ metres, where $t$ is in seconds. Find the minimum height and the values of $t$ in $0 \\le t < 60$ for which $h \\le 6$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Group the oscillating terms",
          "workingLatex": "h = 12 - (5\\cos(6t)^\\circ + 12\\sin(6t)^\\circ)",
          "explanation": "Factoring out the minus lets us combine the bracket into one sine.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the bracket in R-form",
          "workingLatex": "12\\sin x + 5\\cos x = 13\\sin(x + \\alpha), \\quad x = 6t, \\; \\tan\\alpha = \\tfrac{5}{12}",
          "explanation": "The amplitude is $13$ and $\\alpha \\approx 22.62^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the height model",
          "workingLatex": "h = 12 - 13\\sin(6t + 22.62^\\circ)",
          "explanation": "Substituting gives a single-sine model with a leading minus.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the minimum height",
          "workingLatex": "h_{\\min} = 12 - 13 = -1",
          "explanation": "The height is least when the sine is at its maximum of $1$; here the model gives $-1$, so in practice the wheel would be offset, but mathematically the minimum of the expression is $-1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set up the inequality",
          "workingLatex": "12 - 13\\sin(6t + 22.62^\\circ) \\le 6",
          "explanation": "We want the times when the height is at most $6$ m.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Rearrange",
          "workingLatex": "\\sin(6t + 22.62^\\circ) \\ge \\frac{6}{13} \\approx 0.4615",
          "explanation": "Subtracting $12$, dividing by $-13$ (which flips the inequality) isolates the sine.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve the boundary",
          "workingLatex": "6t + 22.62^\\circ = 27.49^\\circ, 152.51^\\circ",
          "explanation": "The sine equals $0.4615$ at these angles; it is above between them.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Form the inequality band for the argument",
          "workingLatex": "27.49^\\circ \\le 6t + 22.62^\\circ \\le 152.51^\\circ",
          "explanation": "Within the first cycle the sine is at or above $0.4615$ across this band.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solve for t",
          "workingLatex": "6t \\in [4.87^\\circ, 129.89^\\circ] \\;\\Rightarrow\\; t \\in [0.81, 21.6]",
          "explanation": "Subtracting the phase and dividing by $6$ gives the first time window (in seconds) when the height is at most $6$ m.",
          "diagram": null
        }
      ],
      "finalAnswer": "Minimum height $-1$ m; $h \\le 6$ for approximately $0.81 \\le t \\le 21.6$ s (repeating each $60$ s)."
    }
  }
];
