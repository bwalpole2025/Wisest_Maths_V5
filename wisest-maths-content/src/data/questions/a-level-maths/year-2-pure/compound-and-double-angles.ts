import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "id": "al.y2.pure.compound-double-angles.q001",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Compound and double angles",
    "subtopicId": "al.y2.pure.compound-double-angles",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["compound angles", "sine", "formula recall"],
    "questionText": "Write down the compound angle formula for $\\sin(A + B)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the pair of sine addition formulae",
          "workingLatex": "\\sin(A \\pm B) = \\sin A\\cos B \\pm \\cos A\\sin B",
          "explanation": "Learning the plus and minus versions together helps, because they share the same terms and only the middle sign changes. This makes each one easy to recall correctly.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Note the structure of the sine formula",
          "workingLatex": "\\text{pattern: } \\sin\\cos + \\cos\\sin",
          "explanation": "The sine formula mixes the functions: a sine times a cosine, added to a cosine times a sine. Unlike the cosine formula, the two functions are never multiplied by themselves.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Select the plus version",
          "workingLatex": "\\sin(A + B) = \\sin A\\cos B + \\cos A\\sin B",
          "explanation": "The question asks for $A + B$, so we take the version with the plus sign in the middle.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check the sign convention",
          "workingLatex": "+B \\;\\Rightarrow\\; + \\text{ in the formula}",
          "explanation": "For sine the sign inside the bracket carries straight through to the sign in the expansion, which is a helpful consistency check.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Sanity check with a known value",
          "workingLatex": "\\sin(90^\\circ + 0^\\circ) = \\sin 90^\\circ\\cos 0^\\circ + \\cos 90^\\circ\\sin 0^\\circ = 1",
          "explanation": "Testing with $A = 90^\\circ, B = 0^\\circ$ gives $1$, which matches $\\sin 90^\\circ$, confirming the formula is written correctly.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the final formula",
          "workingLatex": "\\sin(A + B) = \\sin A\\cos B + \\cos A\\sin B",
          "explanation": "This is the required compound angle formula for sine.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sin(A + B) = \\sin A\\cos B + \\cos A\\sin B$"
    }
  },
  {
    "id": "al.y2.pure.compound-double-angles.q002",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Compound and double angles",
    "subtopicId": "al.y2.pure.compound-double-angles",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["compound angles", "cosine", "formula recall"],
    "questionText": "Write down the compound angle formula for $\\cos(A - B)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the pair of cosine addition formulae",
          "workingLatex": "\\cos(A \\pm B) = \\cos A\\cos B \\mp \\sin A\\sin B",
          "explanation": "The cosine formulae keep like functions together: cosine times cosine, then sine times sine. Crucially, the sign flips compared with the bracket.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Note the sign reversal",
          "workingLatex": "\\cos(A - B) \\;\\Rightarrow\\; + \\text{ between the terms}",
          "explanation": "For cosine the sign inside the bracket is reversed in the expansion. So a minus inside becomes a plus between the two products.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the minus version",
          "workingLatex": "\\cos(A - B) = \\cos A\\cos B + \\sin A\\sin B",
          "explanation": "Applying the sign reversal to $A - B$ gives a plus sign linking the two products.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Sanity check with a known value",
          "workingLatex": "\\cos(90^\\circ - 0^\\circ) = \\cos 90^\\circ\\cos 0^\\circ + \\sin 90^\\circ\\sin 0^\\circ = 0",
          "explanation": "Testing with $A = 90^\\circ, B = 0^\\circ$ gives $0$, matching $\\cos 90^\\circ$, which confirms the formula.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Cross-check the cofunction result",
          "workingLatex": "\\cos(90^\\circ - B) = \\sin B",
          "explanation": "Setting $A = 90^\\circ$ gives $\\cos(90^\\circ - B) = \\sin B$, a familiar identity, which reassures us the formula is right.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the final formula",
          "workingLatex": "\\cos(A - B) = \\cos A\\cos B + \\sin A\\sin B",
          "explanation": "This is the required compound angle formula for cosine of a difference.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\cos(A - B) = \\cos A\\cos B + \\sin A\\sin B$"
    }
  },
  {
    "id": "al.y2.pure.compound-double-angles.q003",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Compound and double angles",
    "subtopicId": "al.y2.pure.compound-double-angles",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": ["double angle", "sine", "formula recall"],
    "questionText": "Write down the double angle formula for $\\sin 2A$ and explain how it follows from $\\sin(A + B)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Start from the sine addition formula",
          "workingLatex": "\\sin(A + B) = \\sin A\\cos B + \\cos A\\sin B",
          "explanation": "Double angle formulae are just addition formulae with the two angles made equal, so we begin here.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set B equal to A",
          "workingLatex": "\\sin(A + A) = \\sin A\\cos A + \\cos A\\sin A",
          "explanation": "Replacing $B$ with $A$ turns the compound angle into $2A$ and duplicates the terms.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify the left-hand side",
          "workingLatex": "\\sin(A + A) = \\sin 2A",
          "explanation": "Adding $A$ to $A$ gives $2A$, so the left side becomes $\\sin 2A$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Combine the identical terms",
          "workingLatex": "\\sin A\\cos A + \\cos A\\sin A = 2\\sin A\\cos A",
          "explanation": "The two products are identical, so they add to give twice one of them.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the double angle formula",
          "workingLatex": "\\sin 2A = 2\\sin A\\cos A",
          "explanation": "This is the standard double angle formula for sine.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Sanity check with a known value",
          "workingLatex": "\\sin 60^\\circ = 2\\sin 30^\\circ\\cos 30^\\circ = 2\\cdot\\tfrac{1}{2}\\cdot\\tfrac{\\sqrt3}{2} = \\tfrac{\\sqrt3}{2} \\;\\checkmark",
          "explanation": "Using $A = 30^\\circ$ reproduces the exact value of $\\sin 60^\\circ$, confirming the formula.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sin 2A = 2\\sin A\\cos A$"
    }
  },
  {
    "id": "al.y2.pure.compound-double-angles.q004",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Compound and double angles",
    "subtopicId": "al.y2.pure.compound-double-angles",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": ["double angle", "cosine", "formula recall"],
    "questionText": "Write down the three equivalent forms of the double angle formula for $\\cos 2A$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Start from the cosine addition formula",
          "workingLatex": "\\cos(A + B) = \\cos A\\cos B - \\sin A\\sin B",
          "explanation": "As with sine, the cosine double angle formula comes from setting the two angles equal in the addition formula.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set B equal to A",
          "workingLatex": "\\cos 2A = \\cos^2 A - \\sin^2 A",
          "explanation": "Putting $B = A$ gives the first form directly: cosine squared minus sine squared.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use the Pythagorean identity to remove sine",
          "workingLatex": "\\sin^2 A = 1 - \\cos^2 A",
          "explanation": "Substituting for $\\sin^2 A$ will give a form purely in cosine, which is useful for integration and equations.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Derive the cosine-only form",
          "workingLatex": "\\cos 2A = \\cos^2 A - (1 - \\cos^2 A) = 2\\cos^2 A - 1",
          "explanation": "Simplifying gives the second form, written entirely in terms of cosine.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Use the Pythagorean identity to remove cosine",
          "workingLatex": "\\cos^2 A = 1 - \\sin^2 A \\;\\Rightarrow\\; \\cos 2A = 1 - 2\\sin^2 A",
          "explanation": "Substituting the other way gives the third form, written entirely in terms of sine.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "List all three forms",
          "workingLatex": "\\cos 2A = \\cos^2 A - \\sin^2 A = 2\\cos^2 A - 1 = 1 - 2\\sin^2 A",
          "explanation": "Having all three forms lets you choose the one that best matches a given problem.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Sanity check with a known value",
          "workingLatex": "\\cos 60^\\circ = 2\\cos^2 30^\\circ - 1 = 2\\cdot\\tfrac{3}{4} - 1 = \\tfrac{1}{2} \\;\\checkmark",
          "explanation": "Using $A = 30^\\circ$ in the second form reproduces $\\cos 60^\\circ = \\frac{1}{2}$, confirming the formulae.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\cos 2A = \\cos^2 A - \\sin^2 A = 2\\cos^2 A - 1 = 1 - 2\\sin^2 A$"
    }
  },
  {
    "id": "al.y2.pure.compound-double-angles.q005",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Compound and double angles",
    "subtopicId": "al.y2.pure.compound-double-angles",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": ["compound angles", "exact values", "surds"],
    "questionText": "Use the compound angle formula to find the exact value of $\\cos 75^\\circ$, writing $75^\\circ = 45^\\circ + 30^\\circ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Split the angle into known parts",
          "workingLatex": "75^\\circ = 45^\\circ + 30^\\circ",
          "explanation": "Breaking $75^\\circ$ into two standard angles lets us use exact values we already know.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply the cosine addition formula",
          "workingLatex": "\\cos 75^\\circ = \\cos 45^\\circ\\cos 30^\\circ - \\sin 45^\\circ\\sin 30^\\circ",
          "explanation": "Using $\\cos(A + B)$ with $A = 45^\\circ$ and $B = 30^\\circ$ sets up the calculation with the minus sign for the plus inside.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the exact values",
          "workingLatex": "= \\frac{\\sqrt2}{2}\\cdot\\frac{\\sqrt3}{2} - \\frac{\\sqrt2}{2}\\cdot\\frac{1}{2}",
          "explanation": "Inserting the standard exact values for each function prepares the arithmetic.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Multiply out each product",
          "workingLatex": "= \\frac{\\sqrt6}{4} - \\frac{\\sqrt2}{4}",
          "explanation": "Multiplying the surds gives $\\frac{\\sqrt6}{4}$ and $\\frac{\\sqrt2}{4}$, both over a denominator of $4$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Combine over the common denominator",
          "workingLatex": "= \\frac{\\sqrt6 - \\sqrt2}{4}",
          "explanation": "With matching denominators, the numerators combine into a single surd expression.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check the value is reasonable",
          "workingLatex": "\\frac{\\sqrt6 - \\sqrt2}{4} \\approx 0.259",
          "explanation": "The decimal $0.259$ is small and positive, exactly what we expect for the cosine of an angle close to $90^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the exact value",
          "workingLatex": "\\cos 75^\\circ = \\frac{\\sqrt6 - \\sqrt2}{4}",
          "explanation": "This is the exact value in simplest surd form.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\cos 75^\\circ = \\dfrac{\\sqrt6 - \\sqrt2}{4}$"
    }
  },
  {
    "id": "al.y2.pure.compound-double-angles.q006",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Compound and double angles",
    "subtopicId": "al.y2.pure.compound-double-angles",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": ["compound angles", "exact values", "surds", "sine"],
    "questionText": "Use the compound angle formula to find the exact value of $\\sin 75^\\circ$, writing $75^\\circ = 45^\\circ + 30^\\circ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Split the angle into known parts",
          "workingLatex": "75^\\circ = 45^\\circ + 30^\\circ",
          "explanation": "Writing $75^\\circ$ as a sum of two standard angles lets us use known exact values.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply the sine addition formula",
          "workingLatex": "\\sin 75^\\circ = \\sin 45^\\circ\\cos 30^\\circ + \\cos 45^\\circ\\sin 30^\\circ",
          "explanation": "The sine addition formula mixes the functions, with a plus sign matching the plus inside the bracket.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the exact values",
          "workingLatex": "= \\frac{\\sqrt2}{2}\\cdot\\frac{\\sqrt3}{2} + \\frac{\\sqrt2}{2}\\cdot\\frac{1}{2}",
          "explanation": "Inserting the standard exact values sets up the arithmetic.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Multiply out each product",
          "workingLatex": "= \\frac{\\sqrt6}{4} + \\frac{\\sqrt2}{4}",
          "explanation": "Each product simplifies to a surd over $4$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Combine over the common denominator",
          "workingLatex": "= \\frac{\\sqrt6 + \\sqrt2}{4}",
          "explanation": "The matching denominators let the numerators combine into a single expression.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check against a related value",
          "workingLatex": "\\sin 75^\\circ = \\cos 15^\\circ \\approx 0.966",
          "explanation": "The value is close to $1$, as expected for an angle near $90^\\circ$, and equals $\\cos 15^\\circ$ by the cofunction relationship.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the exact value",
          "workingLatex": "\\sin 75^\\circ = \\frac{\\sqrt6 + \\sqrt2}{4}",
          "explanation": "This is the exact value in simplest surd form.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sin 75^\\circ = \\dfrac{\\sqrt6 + \\sqrt2}{4}$"
    }
  },
  {
    "id": "al.y2.pure.compound-double-angles.q007",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Compound and double angles",
    "subtopicId": "al.y2.pure.compound-double-angles",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["compound angles", "tangent", "formula recall"],
    "questionText": "Write down the compound angle formula for $\\tan(A + B)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the tangent addition formula",
          "workingLatex": "\\tan(A + B) = \\frac{\\tan A + \\tan B}{1 - \\tan A\\tan B}",
          "explanation": "The tangent formula is a fraction, with the sum of tangents on top and $1$ minus their product on the bottom.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Note where the formula comes from",
          "workingLatex": "\\tan(A + B) = \\frac{\\sin(A + B)}{\\cos(A + B)}",
          "explanation": "It is derived by dividing the sine addition formula by the cosine addition formula, then dividing top and bottom by $\\cos A\\cos B$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Note the sign pattern",
          "workingLatex": "+B: \\; \\text{top } +, \\text{ bottom } -",
          "explanation": "For a plus inside the bracket, the numerator has a plus and the denominator has a minus. The denominator sign is always opposite to the numerator sign.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Sanity check with a known value",
          "workingLatex": "\\tan(45^\\circ + 0^\\circ) = \\frac{1 + 0}{1 - 0} = 1 \\;\\checkmark",
          "explanation": "Testing with $A = 45^\\circ, B = 0^\\circ$ gives $1$, matching $\\tan 45^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Note the restriction",
          "workingLatex": "1 - \\tan A\\tan B \\ne 0",
          "explanation": "The formula is undefined when the denominator is zero, which corresponds to $A + B$ being an odd multiple of $90^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the final formula",
          "workingLatex": "\\tan(A + B) = \\frac{\\tan A + \\tan B}{1 - \\tan A\\tan B}",
          "explanation": "This is the required compound angle formula for tangent.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\tan(A + B) = \\dfrac{\\tan A + \\tan B}{1 - \\tan A\\tan B}$"
    }
  },
  {
    "id": "al.y2.pure.compound-double-angles.q008",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Compound and double angles",
    "subtopicId": "al.y2.pure.compound-double-angles",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": ["compound angles", "exact values", "tangent", "surds"],
    "questionText": "Find the exact value of $\\tan 75^\\circ$, writing $75^\\circ = 45^\\circ + 30^\\circ$. Give your answer in the form $a + b\\sqrt{3}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Apply the tangent addition formula",
          "workingLatex": "\\tan 75^\\circ = \\frac{\\tan 45^\\circ + \\tan 30^\\circ}{1 - \\tan 45^\\circ\\tan 30^\\circ}",
          "explanation": "Using the tangent formula with $A = 45^\\circ$ and $B = 30^\\circ$ sets up the calculation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute the exact values",
          "workingLatex": "= \\frac{1 + \\frac{1}{\\sqrt3}}{1 - 1\\cdot\\frac{1}{\\sqrt3}}",
          "explanation": "We use $\\tan 45^\\circ = 1$ and $\\tan 30^\\circ = \\frac{1}{\\sqrt3}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Clear the inner fractions",
          "workingLatex": "= \\frac{\\sqrt3 + 1}{\\sqrt3 - 1}",
          "explanation": "Multiplying numerator and denominator by $\\sqrt3$ removes the nested fractions.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rationalise the denominator",
          "workingLatex": "= \\frac{\\sqrt3 + 1}{\\sqrt3 - 1}\\times\\frac{\\sqrt3 + 1}{\\sqrt3 + 1}",
          "explanation": "Multiplying by the conjugate of the denominator will clear the surd from the bottom.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Expand the numerator",
          "workingLatex": "(\\sqrt3 + 1)^2 = 3 + 2\\sqrt3 + 1 = 4 + 2\\sqrt3",
          "explanation": "Squaring the numerator gives $4 + 2\\sqrt3$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Expand the denominator",
          "workingLatex": "(\\sqrt3 - 1)(\\sqrt3 + 1) = 3 - 1 = 2",
          "explanation": "The conjugate product is a difference of squares, giving a rational $2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify the fraction",
          "workingLatex": "= \\frac{4 + 2\\sqrt3}{2} = 2 + \\sqrt3",
          "explanation": "Dividing each term by $2$ gives the simplified exact value.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the answer in the required form",
          "workingLatex": "\\tan 75^\\circ = 2 + \\sqrt3",
          "explanation": "This is in the form $a + b\\sqrt3$ with $a = 2$ and $b = 1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\tan 75^\\circ = 2 + \\sqrt3$"
    }
  },
  {
    "id": "al.y2.pure.compound-double-angles.q009",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Compound and double angles",
    "subtopicId": "al.y2.pure.compound-double-angles",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": ["double angle", "tangent", "formula recall"],
    "questionText": "Write down the double angle formula for $\\tan 2A$ and state when it is undefined.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Start from the tangent addition formula",
          "workingLatex": "\\tan(A + B) = \\frac{\\tan A + \\tan B}{1 - \\tan A\\tan B}",
          "explanation": "The double angle formula follows by setting the two angles equal.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set B equal to A",
          "workingLatex": "\\tan 2A = \\frac{\\tan A + \\tan A}{1 - \\tan A\\tan A}",
          "explanation": "Putting $B = A$ turns the compound angle into $2A$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify numerator and denominator",
          "workingLatex": "\\tan 2A = \\frac{2\\tan A}{1 - \\tan^2 A}",
          "explanation": "The numerator doubles and the denominator becomes $1 - \\tan^2 A$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify when the denominator is zero",
          "workingLatex": "1 - \\tan^2 A = 0 \\;\\Rightarrow\\; \\tan A = \\pm 1",
          "explanation": "The formula fails when the denominator vanishes, which happens when $\\tan A = \\pm 1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State those angles",
          "workingLatex": "A = 45^\\circ + 90^\\circ n",
          "explanation": "Tangent is $\\pm 1$ at $45^\\circ$ and every $90^\\circ$ after, so the formula is undefined there (and also where $\\tan A$ itself is undefined).",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the final formula and restriction",
          "workingLatex": "\\tan 2A = \\frac{2\\tan A}{1 - \\tan^2 A}, \\quad \\tan A \\ne \\pm 1",
          "explanation": "This gives the double angle formula together with its restriction.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\tan 2A = \\dfrac{2\\tan A}{1 - \\tan^2 A}$, undefined when $\\tan A = \\pm 1$."
    }
  },
  {
    "id": "al.y2.pure.compound-double-angles.q010",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Compound and double angles",
    "subtopicId": "al.y2.pure.compound-double-angles",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": ["double angle", "given ratio", "sine"],
    "questionText": "Given that $\\sin A = \\dfrac{3}{5}$ and $A$ is acute, find the exact value of $\\sin 2A$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the double angle formula",
          "workingLatex": "\\sin 2A = 2\\sin A\\cos A",
          "explanation": "We need both sine and cosine of $A$; sine is given, so we must find cosine first.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Use the Pythagorean identity for cosine",
          "workingLatex": "\\cos^2 A = 1 - \\sin^2 A = 1 - \\frac{9}{25}",
          "explanation": "The identity gives cosine from the known sine.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify",
          "workingLatex": "\\cos^2 A = \\frac{16}{25}",
          "explanation": "Subtracting gives a perfect-square fraction.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Take the root with the correct sign",
          "workingLatex": "A \\text{ acute} \\;\\Rightarrow\\; \\cos A = \\frac{4}{5}",
          "explanation": "Since $A$ is acute, cosine is positive, so we take the positive root.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute into the double angle formula",
          "workingLatex": "\\sin 2A = 2\\cdot\\frac{3}{5}\\cdot\\frac{4}{5}",
          "explanation": "We now have both values needed for the formula.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate",
          "workingLatex": "\\sin 2A = \\frac{24}{25}",
          "explanation": "Multiplying the fractions and the factor of $2$ gives $\\frac{24}{25}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check the value is valid",
          "workingLatex": "\\left|\\frac{24}{25}\\right| \\le 1 \\;\\checkmark",
          "explanation": "The result lies between $-1$ and $1$, as any sine value must, confirming it is plausible.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sin 2A = \\dfrac{24}{25}$"
    }
  },
  {
    "id": "al.y2.pure.compound-double-angles.q011",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Compound and double angles",
    "subtopicId": "al.y2.pure.compound-double-angles",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": ["double angle", "given ratio", "cosine"],
    "questionText": "Given that $\\cos A = \\dfrac{4}{5}$ and $A$ is acute, find the exact value of $\\cos 2A$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the most convenient form",
          "workingLatex": "\\cos 2A = 2\\cos^2 A - 1",
          "explanation": "Because we are given cosine, the cosine-only form of the double angle formula needs no extra work to find sine.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute the given cosine",
          "workingLatex": "\\cos 2A = 2\\left(\\frac{4}{5}\\right)^2 - 1",
          "explanation": "Inserting $\\cos A = \\frac{4}{5}$ prepares the calculation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Square the fraction",
          "workingLatex": "= 2\\cdot\\frac{16}{25} - 1",
          "explanation": "Squaring $\\frac{4}{5}$ gives $\\frac{16}{25}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Multiply",
          "workingLatex": "= \\frac{32}{25} - 1",
          "explanation": "Doubling gives $\\frac{32}{25}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Subtract",
          "workingLatex": "= \\frac{32}{25} - \\frac{25}{25} = \\frac{7}{25}",
          "explanation": "Writing $1$ as $\\frac{25}{25}$ allows the subtraction, giving $\\frac{7}{25}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check the value is valid",
          "workingLatex": "\\left|\\frac{7}{25}\\right| \\le 1 \\;\\checkmark",
          "explanation": "The result is within the valid range for cosine, confirming it is reasonable.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\cos 2A = \\dfrac{7}{25}$"
    }
  },
  {
    "id": "al.y2.pure.compound-double-angles.q012",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Compound and double angles",
    "subtopicId": "al.y2.pure.compound-double-angles",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": ["compound angles", "exact values", "tangent"],
    "questionText": "Find the exact value of $\\tan 15^\\circ$, writing $15^\\circ = 45^\\circ - 30^\\circ$. Give your answer in the form $a - b\\sqrt{3}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Apply the tangent subtraction formula",
          "workingLatex": "\\tan 15^\\circ = \\frac{\\tan 45^\\circ - \\tan 30^\\circ}{1 + \\tan 45^\\circ\\tan 30^\\circ}",
          "explanation": "For a difference the numerator has a minus and the denominator a plus, the reverse of the addition case.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute the exact values",
          "workingLatex": "= \\frac{1 - \\frac{1}{\\sqrt3}}{1 + \\frac{1}{\\sqrt3}}",
          "explanation": "Using $\\tan 45^\\circ = 1$ and $\\tan 30^\\circ = \\frac{1}{\\sqrt3}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Clear the inner fractions",
          "workingLatex": "= \\frac{\\sqrt3 - 1}{\\sqrt3 + 1}",
          "explanation": "Multiplying top and bottom by $\\sqrt3$ removes the nested fractions.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rationalise using the conjugate",
          "workingLatex": "= \\frac{(\\sqrt3 - 1)^2}{(\\sqrt3 + 1)(\\sqrt3 - 1)}",
          "explanation": "Multiplying by the conjugate $\\sqrt3 - 1$ over itself clears the surd from the denominator.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Expand numerator and denominator",
          "workingLatex": "= \\frac{4 - 2\\sqrt3}{2}",
          "explanation": "The numerator squares to $4 - 2\\sqrt3$ and the denominator is $3 - 1 = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify",
          "workingLatex": "= 2 - \\sqrt3",
          "explanation": "Dividing each term by $2$ gives the exact value in the required form.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\tan 15^\\circ = 2 - \\sqrt3$"
    }
  },
  {
    "id": "al.y2.pure.compound-double-angles.q013",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Compound and double angles",
    "subtopicId": "al.y2.pure.compound-double-angles",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": ["compound angles", "exact values", "surds", "sine"],
    "questionText": "Find the exact value of $\\sin 15^\\circ$, writing $15^\\circ = 45^\\circ - 30^\\circ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Split the angle",
          "workingLatex": "15^\\circ = 45^\\circ - 30^\\circ",
          "explanation": "Writing $15^\\circ$ as a difference of standard angles lets us use exact values.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply the sine subtraction formula",
          "workingLatex": "\\sin 15^\\circ = \\sin 45^\\circ\\cos 30^\\circ - \\cos 45^\\circ\\sin 30^\\circ",
          "explanation": "For sine, the minus inside the bracket gives a minus between the two products.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the exact values",
          "workingLatex": "= \\frac{\\sqrt2}{2}\\cdot\\frac{\\sqrt3}{2} - \\frac{\\sqrt2}{2}\\cdot\\frac{1}{2}",
          "explanation": "Inserting the standard exact values prepares the arithmetic.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Multiply out",
          "workingLatex": "= \\frac{\\sqrt6}{4} - \\frac{\\sqrt2}{4}",
          "explanation": "Each product simplifies to a surd over $4$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Combine",
          "workingLatex": "= \\frac{\\sqrt6 - \\sqrt2}{4}",
          "explanation": "The matching denominators allow the numerators to combine.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Relate to a known value",
          "workingLatex": "\\sin 15^\\circ = \\cos 75^\\circ \\approx 0.259",
          "explanation": "The value matches $\\cos 75^\\circ$ found earlier, a good consistency check via the cofunction relationship.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sin 15^\\circ = \\dfrac{\\sqrt6 - \\sqrt2}{4}$"
    }
  },
  {
    "id": "al.y2.pure.compound-double-angles.q014",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Compound and double angles",
    "subtopicId": "al.y2.pure.compound-double-angles",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": ["compound angles", "exact values", "surds", "cosine"],
    "questionText": "Find the exact value of $\\cos 105^\\circ$, writing $105^\\circ = 60^\\circ + 45^\\circ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Split the angle",
          "workingLatex": "105^\\circ = 60^\\circ + 45^\\circ",
          "explanation": "Writing $105^\\circ$ as a sum of two standard angles lets us use known exact values.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply the cosine addition formula",
          "workingLatex": "\\cos 105^\\circ = \\cos 60^\\circ\\cos 45^\\circ - \\sin 60^\\circ\\sin 45^\\circ",
          "explanation": "For cosine the plus inside the bracket gives a minus between the products.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the exact values",
          "workingLatex": "= \\frac{1}{2}\\cdot\\frac{\\sqrt2}{2} - \\frac{\\sqrt3}{2}\\cdot\\frac{\\sqrt2}{2}",
          "explanation": "Inserting the standard values prepares the arithmetic.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Multiply out",
          "workingLatex": "= \\frac{\\sqrt2}{4} - \\frac{\\sqrt6}{4}",
          "explanation": "Each product simplifies to a surd over $4$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Combine",
          "workingLatex": "= \\frac{\\sqrt2 - \\sqrt6}{4}",
          "explanation": "The numerators combine over the common denominator.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check the sign",
          "workingLatex": "\\frac{\\sqrt2 - \\sqrt6}{4} \\approx -0.259 < 0",
          "explanation": "The result is negative, as expected since $105^\\circ$ is obtuse and cosine is negative in the second quadrant.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\cos 105^\\circ = \\dfrac{\\sqrt2 - \\sqrt6}{4}$"
    }
  },
  {
    "id": "al.y2.pure.compound-double-angles.q015",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Compound and double angles",
    "subtopicId": "al.y2.pure.compound-double-angles",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": ["double angle", "simplify", "sine"],
    "questionText": "Write $2\\sin 3\\theta\\cos 3\\theta$ as a single trigonometric term.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the double angle formula for sine",
          "workingLatex": "\\sin 2X = 2\\sin X\\cos X",
          "explanation": "The expression matches the right-hand side of the sine double angle formula, read in reverse.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the inner angle",
          "workingLatex": "X = 3\\theta",
          "explanation": "Comparing $2\\sin 3\\theta\\cos 3\\theta$ with $2\\sin X\\cos X$ shows $X = 3\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the formula",
          "workingLatex": "2\\sin 3\\theta\\cos 3\\theta = \\sin(2\\cdot 3\\theta)",
          "explanation": "Substituting $X = 3\\theta$ folds the product into a single sine of the doubled angle.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the angle",
          "workingLatex": "= \\sin 6\\theta",
          "explanation": "Doubling $3\\theta$ gives $6\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check with a value",
          "workingLatex": "\\theta = 15^\\circ: 2\\sin 45^\\circ\\cos 45^\\circ = 1 = \\sin 90^\\circ \\;\\checkmark",
          "explanation": "Testing $\\theta = 15^\\circ$ gives $1$ on both sides, confirming the simplification.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the result",
          "workingLatex": "2\\sin 3\\theta\\cos 3\\theta = \\sin 6\\theta",
          "explanation": "The product simplifies to a single sine term.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sin 6\\theta$"
    }
  },
  {
    "id": "al.y2.pure.compound-double-angles.q016",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Compound and double angles",
    "subtopicId": "al.y2.pure.compound-double-angles",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": ["double angle", "simplify", "cosine"],
    "questionText": "Write $1 - 2\\sin^2 4\\theta$ as a single trigonometric term.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the relevant form of the cosine double angle formula",
          "workingLatex": "\\cos 2X = 1 - 2\\sin^2 X",
          "explanation": "The expression exactly matches the sine form of the cosine double angle formula.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the inner angle",
          "workingLatex": "X = 4\\theta",
          "explanation": "Comparing $1 - 2\\sin^2 4\\theta$ with $1 - 2\\sin^2 X$ gives $X = 4\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the formula",
          "workingLatex": "1 - 2\\sin^2 4\\theta = \\cos(2\\cdot 4\\theta)",
          "explanation": "Substituting folds the expression into a single cosine of the doubled angle.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the angle",
          "workingLatex": "= \\cos 8\\theta",
          "explanation": "Doubling $4\\theta$ gives $8\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check with a value",
          "workingLatex": "\\theta = 0: 1 - 0 = 1 = \\cos 0 \\;\\checkmark",
          "explanation": "At $\\theta = 0$ both sides equal $1$, confirming the result.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the result",
          "workingLatex": "1 - 2\\sin^2 4\\theta = \\cos 8\\theta",
          "explanation": "The expression simplifies to a single cosine term.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\cos 8\\theta$"
    }
  },
  {
    "id": "al.y2.pure.compound-double-angles.q017",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Compound and double angles",
    "subtopicId": "al.y2.pure.compound-double-angles",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": ["compound angles", "given ratios", "sine"],
    "questionText": "Given that $\\sin A = \\dfrac{3}{5}$ with $A$ acute, and $\\cos B = \\dfrac{5}{13}$ with $B$ acute, find the exact value of $\\sin(A + B)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the compound angle formula",
          "workingLatex": "\\sin(A + B) = \\sin A\\cos B + \\cos A\\sin B",
          "explanation": "We will need all four of $\\sin A, \\cos A, \\sin B, \\cos B$, so we find the two that are missing.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find cos A",
          "workingLatex": "\\cos A = \\sqrt{1 - \\tfrac{9}{25}} = \\frac{4}{5}",
          "explanation": "Using the Pythagorean identity with acute $A$ gives a positive cosine of $\\frac{4}{5}$ (a $3$-$4$-$5$ triangle).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find sin B",
          "workingLatex": "\\sin B = \\sqrt{1 - \\tfrac{25}{169}} = \\frac{12}{13}",
          "explanation": "Similarly, acute $B$ gives a positive sine of $\\frac{12}{13}$ (a $5$-$12$-$13$ triangle).",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute all values",
          "workingLatex": "\\sin(A + B) = \\frac{3}{5}\\cdot\\frac{5}{13} + \\frac{4}{5}\\cdot\\frac{12}{13}",
          "explanation": "Inserting the four values sets up the arithmetic.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Multiply out each product",
          "workingLatex": "= \\frac{15}{65} + \\frac{48}{65}",
          "explanation": "Both products share the denominator $65$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Add the fractions",
          "workingLatex": "= \\frac{63}{65}",
          "explanation": "Adding the numerators gives $\\frac{63}{65}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check the value is valid",
          "workingLatex": "\\left|\\frac{63}{65}\\right| \\le 1 \\;\\checkmark",
          "explanation": "The value is within the valid range for sine, confirming it is reasonable.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sin(A + B) = \\dfrac{63}{65}$"
    }
  },
  {
    "id": "al.y2.pure.compound-double-angles.q018",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Compound and double angles",
    "subtopicId": "al.y2.pure.compound-double-angles",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": ["compound angles", "given ratios", "cosine"],
    "questionText": "Given that $\\sin A = \\dfrac{3}{5}$ with $A$ acute, and $\\cos B = \\dfrac{5}{13}$ with $B$ acute, find the exact value of $\\cos(A - B)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the compound angle formula",
          "workingLatex": "\\cos(A - B) = \\cos A\\cos B + \\sin A\\sin B",
          "explanation": "For a difference the two products are added. We reuse the values found from the triangles.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the needed values",
          "workingLatex": "\\cos A = \\frac{4}{5}, \\quad \\sin B = \\frac{12}{13}",
          "explanation": "As before, acute angles give positive $\\cos A = \\frac{4}{5}$ and $\\sin B = \\frac{12}{13}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute all values",
          "workingLatex": "\\cos(A - B) = \\frac{4}{5}\\cdot\\frac{5}{13} + \\frac{3}{5}\\cdot\\frac{12}{13}",
          "explanation": "Inserting the four values sets up the calculation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Multiply out",
          "workingLatex": "= \\frac{20}{65} + \\frac{36}{65}",
          "explanation": "Both products share the denominator $65$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Add the fractions",
          "workingLatex": "= \\frac{56}{65}",
          "explanation": "Adding the numerators gives $\\frac{56}{65}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check the value is valid",
          "workingLatex": "\\left|\\frac{56}{65}\\right| \\le 1 \\;\\checkmark",
          "explanation": "The value lies within the valid cosine range, confirming it is reasonable.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\cos(A - B) = \\dfrac{56}{65}$"
    }
  },
  {
    "id": "al.y2.pure.compound-double-angles.q019",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Compound and double angles",
    "subtopicId": "al.y2.pure.compound-double-angles",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": ["compound angles", "tangent", "given ratios"],
    "questionText": "Given that $\\tan A = \\dfrac{1}{2}$ and $\\tan B = \\dfrac{1}{3}$, show that $\\tan(A + B) = 1$ and hence state $A + B$ for acute $A, B$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the tangent addition formula",
          "workingLatex": "\\tan(A + B) = \\frac{\\tan A + \\tan B}{1 - \\tan A\\tan B}",
          "explanation": "Both tangents are given, so this formula can be applied directly.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute the given values",
          "workingLatex": "= \\frac{\\frac{1}{2} + \\frac{1}{3}}{1 - \\frac{1}{2}\\cdot\\frac{1}{3}}",
          "explanation": "Inserting $\\tan A = \\frac{1}{2}$ and $\\tan B = \\frac{1}{3}$ sets up the fraction.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify the numerator",
          "workingLatex": "\\frac{1}{2} + \\frac{1}{3} = \\frac{5}{6}",
          "explanation": "Adding over the common denominator $6$ gives $\\frac{5}{6}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the denominator",
          "workingLatex": "1 - \\frac{1}{6} = \\frac{5}{6}",
          "explanation": "The product $\\frac{1}{6}$ subtracted from $1$ leaves $\\frac{5}{6}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Divide",
          "workingLatex": "\\tan(A + B) = \\frac{5/6}{5/6} = 1",
          "explanation": "The equal numerator and denominator give exactly $1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret for acute angles",
          "workingLatex": "A + B = 45^\\circ",
          "explanation": "Since $A$ and $B$ are acute, their sum is between $0$ and $180^\\circ$; the angle with tangent $1$ in that range is $45^\\circ$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\tan(A + B) = 1$, so $A + B = 45^\\circ$."
    }
  },
  {
    "id": "al.y2.pure.compound-double-angles.q020",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Compound and double angles",
    "subtopicId": "al.y2.pure.compound-double-angles",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": ["double angle", "given ratio", "obtuse", "quadrant"],
    "questionText": "Given that $\\cos\\theta = -\\dfrac{3}{5}$ and $\\theta$ is obtuse, find the exact values of $\\sin 2\\theta$ and $\\cos 2\\theta$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find sine using the identity",
          "workingLatex": "\\sin^2\\theta = 1 - \\left(-\\tfrac{3}{5}\\right)^2 = \\frac{16}{25}",
          "explanation": "We need sine for the $\\sin 2\\theta$ formula; the identity gives its square.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose the sign of sine",
          "workingLatex": "\\theta \\text{ obtuse} \\;\\Rightarrow\\; \\sin\\theta = +\\frac{4}{5}",
          "explanation": "In the second quadrant sine is positive, so we take the positive root.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the sine double angle formula",
          "workingLatex": "\\sin 2\\theta = 2\\sin\\theta\\cos\\theta = 2\\cdot\\frac{4}{5}\\cdot\\left(-\\frac{3}{5}\\right)",
          "explanation": "Substituting the sine and cosine values into the formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate sin 2θ",
          "workingLatex": "\\sin 2\\theta = -\\frac{24}{25}",
          "explanation": "The product is negative because cosine is negative, giving $-\\frac{24}{25}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply the cosine double angle formula",
          "workingLatex": "\\cos 2\\theta = 2\\cos^2\\theta - 1 = 2\\cdot\\frac{9}{25} - 1",
          "explanation": "The cosine-only form is convenient since cosine is given directly.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate cos 2θ",
          "workingLatex": "\\cos 2\\theta = \\frac{18}{25} - 1 = -\\frac{7}{25}",
          "explanation": "Simplifying gives $-\\frac{7}{25}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Sanity check with the Pythagorean identity",
          "workingLatex": "\\left(\\tfrac{24}{25}\\right)^2 + \\left(\\tfrac{7}{25}\\right)^2 = \\frac{576 + 49}{625} = 1 \\;\\checkmark",
          "explanation": "Since $\\sin^2 2\\theta + \\cos^2 2\\theta = 1$, the two answers are mutually consistent.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sin 2\\theta = -\\dfrac{24}{25}, \\quad \\cos 2\\theta = -\\dfrac{7}{25}$"
    }
  },
  {
    "id": "al.y2.pure.compound-double-angles.q021",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Compound and double angles",
    "subtopicId": "al.y2.pure.compound-double-angles",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": ["double angle", "equations", "factorising"],
    "questionText": "Solve $\\sin 2\\theta = \\sin\\theta$ for $0^\\circ \\le \\theta < 360^\\circ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Replace the double angle",
          "workingLatex": "2\\sin\\theta\\cos\\theta = \\sin\\theta",
          "explanation": "Expanding $\\sin 2\\theta$ writes everything in terms of $\\theta$, which lets us factorise rather than divide.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Move everything to one side",
          "workingLatex": "2\\sin\\theta\\cos\\theta - \\sin\\theta = 0",
          "explanation": "Rearranging prepares for factorising; dividing by $\\sin\\theta$ here would lose solutions.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Factor out sine",
          "workingLatex": "\\sin\\theta(2\\cos\\theta - 1) = 0",
          "explanation": "Taking out the common factor splits the equation into two independent cases.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve the first factor",
          "workingLatex": "\\sin\\theta = 0 \\;\\Rightarrow\\; \\theta = 0^\\circ, 180^\\circ",
          "explanation": "Sine is zero at $0^\\circ$ and $180^\\circ$ in the interval.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve the second factor",
          "workingLatex": "2\\cos\\theta - 1 = 0 \\;\\Rightarrow\\; \\cos\\theta = \\tfrac{1}{2}",
          "explanation": "Setting the bracket to zero gives cosine equal to one half.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find those angles",
          "workingLatex": "\\theta = 60^\\circ, 300^\\circ",
          "explanation": "Cosine one half occurs at $60^\\circ$ and $300^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Collect all solutions",
          "workingLatex": "\\theta = 0^\\circ, 60^\\circ, 180^\\circ, 300^\\circ",
          "explanation": "Combining both cases gives four solutions; factoring ensured the $\\sin\\theta = 0$ roots were kept.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta = 0^\\circ, 60^\\circ, 180^\\circ, 300^\\circ$"
    }
  },
  {
    "id": "al.y2.pure.compound-double-angles.q022",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Compound and double angles",
    "subtopicId": "al.y2.pure.compound-double-angles",
    "difficulty": "Intermediate",
    "marks": 7,
    "answerType": "value",
    "tags": ["double angle", "equations", "quadratic", "cosine"],
    "questionText": "Solve $\\cos 2\\theta + \\cos\\theta = 0$ for $0^\\circ \\le \\theta < 360^\\circ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the cosine-only double angle form",
          "workingLatex": "\\cos 2\\theta = 2\\cos^2\\theta - 1",
          "explanation": "Using the form in cosine only makes the equation a quadratic in $\\cos\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "2\\cos^2\\theta - 1 + \\cos\\theta = 0",
          "explanation": "The equation is now entirely in cosine.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write in standard quadratic form",
          "workingLatex": "2\\cos^2\\theta + \\cos\\theta - 1 = 0",
          "explanation": "Reordering gives a familiar quadratic shape.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Factorise",
          "workingLatex": "(2\\cos\\theta - 1)(\\cos\\theta + 1) = 0",
          "explanation": "The factorisation checks out since the cross terms give $+\\cos\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve the first factor",
          "workingLatex": "\\cos\\theta = \\tfrac{1}{2} \\;\\Rightarrow\\; \\theta = 60^\\circ, 300^\\circ",
          "explanation": "Cosine one half gives solutions in quadrants I and IV.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve the second factor",
          "workingLatex": "\\cos\\theta = -1 \\;\\Rightarrow\\; \\theta = 180^\\circ",
          "explanation": "Cosine equals $-1$ only at $180^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Collect all solutions",
          "workingLatex": "\\theta = 60^\\circ, 180^\\circ, 300^\\circ",
          "explanation": "Combining both cases gives three solutions in the interval.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta = 60^\\circ, 180^\\circ, 300^\\circ$"
    }
  },
  {
    "id": "al.y2.pure.compound-double-angles.q023",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Compound and double angles",
    "subtopicId": "al.y2.pure.compound-double-angles",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "proof",
    "tags": ["double angle", "identities", "proof", "tangent"],
    "questionText": "Prove that $\\dfrac{\\sin 2\\theta}{1 + \\cos 2\\theta} \\equiv \\tan\\theta$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Expand the numerator",
          "workingLatex": "\\sin 2\\theta = 2\\sin\\theta\\cos\\theta",
          "explanation": "We rewrite each double angle in terms of $\\theta$, choosing forms that will cancel.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose the useful form of the denominator",
          "workingLatex": "1 + \\cos 2\\theta = 1 + (2\\cos^2\\theta - 1)",
          "explanation": "Using the form $\\cos 2\\theta = 2\\cos^2\\theta - 1$ is deliberate: the $+1$ and $-1$ will cancel.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify the denominator",
          "workingLatex": "1 + \\cos 2\\theta = 2\\cos^2\\theta",
          "explanation": "The constants cancel, leaving a clean $2\\cos^2\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Form the fraction",
          "workingLatex": "\\frac{\\sin 2\\theta}{1 + \\cos 2\\theta} = \\frac{2\\sin\\theta\\cos\\theta}{2\\cos^2\\theta}",
          "explanation": "Substituting both rewritten parts gives a fraction ready to cancel.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Cancel common factors",
          "workingLatex": "= \\frac{\\sin\\theta}{\\cos\\theta}",
          "explanation": "Cancelling the factor of $2$ and one cosine leaves sine over cosine.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Recognise the result",
          "workingLatex": "= \\tan\\theta \\;\\blacksquare",
          "explanation": "Sine over cosine is tangent, matching the right-hand side and completing the proof.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{\\sin 2\\theta}{1 + \\cos 2\\theta} \\equiv \\tan\\theta$"
    }
  },
  {
    "id": "al.y2.pure.compound-double-angles.q024",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Compound and double angles",
    "subtopicId": "al.y2.pure.compound-double-angles",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "proof",
    "tags": ["double angle", "identities", "proof", "tangent"],
    "questionText": "Prove that $\\dfrac{1 - \\cos 2\\theta}{\\sin 2\\theta} \\equiv \\tan\\theta$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the useful form of the numerator",
          "workingLatex": "1 - \\cos 2\\theta = 1 - (1 - 2\\sin^2\\theta)",
          "explanation": "Using $\\cos 2\\theta = 1 - 2\\sin^2\\theta$ is deliberate so the constants cancel and a sine squared remains.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Simplify the numerator",
          "workingLatex": "1 - \\cos 2\\theta = 2\\sin^2\\theta",
          "explanation": "The $1$ and $-1$ cancel, leaving $2\\sin^2\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand the denominator",
          "workingLatex": "\\sin 2\\theta = 2\\sin\\theta\\cos\\theta",
          "explanation": "The denominator becomes the standard double angle expansion.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Form the fraction",
          "workingLatex": "\\frac{1 - \\cos 2\\theta}{\\sin 2\\theta} = \\frac{2\\sin^2\\theta}{2\\sin\\theta\\cos\\theta}",
          "explanation": "Substituting both parts gives a fraction ready to cancel.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Cancel common factors",
          "workingLatex": "= \\frac{\\sin\\theta}{\\cos\\theta}",
          "explanation": "Cancelling the $2$ and one sine leaves sine over cosine.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Recognise the result",
          "workingLatex": "= \\tan\\theta \\;\\blacksquare",
          "explanation": "This is tangent, matching the right-hand side. This identity is the half-angle tangent result.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{1 - \\cos 2\\theta}{\\sin 2\\theta} \\equiv \\tan\\theta$"
    }
  },
  {
    "id": "al.y2.pure.compound-double-angles.q025",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Compound and double angles",
    "subtopicId": "al.y2.pure.compound-double-angles",
    "difficulty": "Intermediate",
    "marks": 7,
    "answerType": "value",
    "tags": ["double angle", "equations", "quadratic", "sine"],
    "questionText": "Solve $\\cos 2\\theta = \\sin\\theta$ for $0^\\circ \\le \\theta < 360^\\circ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the sine form of the double angle",
          "workingLatex": "\\cos 2\\theta = 1 - 2\\sin^2\\theta",
          "explanation": "Since the right-hand side is sine, using the sine form makes a quadratic in $\\sin\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "1 - 2\\sin^2\\theta = \\sin\\theta",
          "explanation": "The equation is now entirely in sine.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange to standard form",
          "workingLatex": "2\\sin^2\\theta + \\sin\\theta - 1 = 0",
          "explanation": "Collecting terms gives a quadratic in $\\sin\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Factorise",
          "workingLatex": "(2\\sin\\theta - 1)(\\sin\\theta + 1) = 0",
          "explanation": "The factorisation checks out via the cross terms.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve the first factor",
          "workingLatex": "\\sin\\theta = \\tfrac{1}{2} \\;\\Rightarrow\\; \\theta = 30^\\circ, 150^\\circ",
          "explanation": "Sine one half gives solutions in quadrants I and II.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve the second factor",
          "workingLatex": "\\sin\\theta = -1 \\;\\Rightarrow\\; \\theta = 270^\\circ",
          "explanation": "Sine equals $-1$ only at $270^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Collect all solutions",
          "workingLatex": "\\theta = 30^\\circ, 150^\\circ, 270^\\circ",
          "explanation": "Combining both cases gives three solutions in the interval.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta = 30^\\circ, 150^\\circ, 270^\\circ$"
    }
  },
  {
    "id": "al.y2.pure.compound-double-angles.q026",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Compound and double angles",
    "subtopicId": "al.y2.pure.compound-double-angles",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "proof",
    "tags": ["double angle", "identities", "proof", "cotangent"],
    "questionText": "Prove that $\\dfrac{\\sin 2\\theta}{1 - \\cos 2\\theta} \\equiv \\cot\\theta$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Expand the numerator",
          "workingLatex": "\\sin 2\\theta = 2\\sin\\theta\\cos\\theta",
          "explanation": "We rewrite both double angles in terms of $\\theta$, choosing forms that cancel.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose the useful form of the denominator",
          "workingLatex": "1 - \\cos 2\\theta = 1 - (1 - 2\\sin^2\\theta) = 2\\sin^2\\theta",
          "explanation": "Using the sine form makes the denominator collapse to $2\\sin^2\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form the fraction",
          "workingLatex": "\\frac{\\sin 2\\theta}{1 - \\cos 2\\theta} = \\frac{2\\sin\\theta\\cos\\theta}{2\\sin^2\\theta}",
          "explanation": "Substituting both parts gives a fraction ready to cancel.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Cancel common factors",
          "workingLatex": "= \\frac{\\cos\\theta}{\\sin\\theta}",
          "explanation": "Cancelling the $2$ and one sine leaves cosine over sine.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Recognise the result",
          "workingLatex": "= \\cot\\theta \\;\\blacksquare",
          "explanation": "Cosine over sine is cotangent, matching the right-hand side.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Note the contrast",
          "workingLatex": "\\frac{\\sin 2\\theta}{1 + \\cos 2\\theta} = \\tan\\theta, \\quad \\frac{\\sin 2\\theta}{1 - \\cos 2\\theta} = \\cot\\theta",
          "explanation": "Swapping the sign in the denominator swaps tangent for cotangent, a neat pairing worth remembering.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{\\sin 2\\theta}{1 - \\cos 2\\theta} \\equiv \\cot\\theta$"
    }
  },
  {
    "id": "al.y2.pure.compound-double-angles.q027",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Compound and double angles",
    "subtopicId": "al.y2.pure.compound-double-angles",
    "difficulty": "Intermediate",
    "marks": 7,
    "answerType": "value",
    "tags": ["double angle", "equations", "factorising"],
    "questionText": "Solve $3\\sin 2\\theta = 2\\cos\\theta$ for $0^\\circ \\le \\theta < 360^\\circ$, giving answers to the nearest degree where necessary.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Expand the double angle",
          "workingLatex": "3(2\\sin\\theta\\cos\\theta) = 2\\cos\\theta",
          "explanation": "Writing $\\sin 2\\theta$ in terms of $\\theta$ lets us factorise instead of dividing by cosine.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Simplify and move to one side",
          "workingLatex": "6\\sin\\theta\\cos\\theta - 2\\cos\\theta = 0",
          "explanation": "Rearranging prepares for factorising; dividing by $\\cos\\theta$ would discard solutions.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Factor out cosine",
          "workingLatex": "2\\cos\\theta(3\\sin\\theta - 1) = 0",
          "explanation": "Taking out the common factor $2\\cos\\theta$ splits the problem into two cases.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve the first factor",
          "workingLatex": "\\cos\\theta = 0 \\;\\Rightarrow\\; \\theta = 90^\\circ, 270^\\circ",
          "explanation": "Cosine is zero at $90^\\circ$ and $270^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve the second factor",
          "workingLatex": "\\sin\\theta = \\tfrac{1}{3}",
          "explanation": "Setting the bracket to zero gives sine equal to one third.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find those angles",
          "workingLatex": "\\theta \\approx 19.5^\\circ, 160.5^\\circ",
          "explanation": "The reference angle is about $19.5^\\circ$; positive sine gives quadrant I and II solutions.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Collect all solutions",
          "workingLatex": "\\theta \\approx 20^\\circ, 90^\\circ, 161^\\circ, 270^\\circ",
          "explanation": "Combining both cases and rounding gives four solutions in the interval.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta \\approx 20^\\circ, 90^\\circ, 161^\\circ, 270^\\circ$"
    }
  },
  {
    "id": "al.y2.pure.compound-double-angles.q028",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Compound and double angles",
    "subtopicId": "al.y2.pure.compound-double-angles",
    "difficulty": "Intermediate",
    "marks": 7,
    "answerType": "value",
    "tags": ["double angle", "equations", "quadratic", "sine"],
    "questionText": "Solve $\\cos 2\\theta + 3\\sin\\theta = 2$ for $0^\\circ \\le \\theta < 360^\\circ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the sine form of the double angle",
          "workingLatex": "\\cos 2\\theta = 1 - 2\\sin^2\\theta",
          "explanation": "The rest of the equation is in sine, so this form gives a quadratic in $\\sin\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "1 - 2\\sin^2\\theta + 3\\sin\\theta = 2",
          "explanation": "The equation is now entirely in sine.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange to standard form",
          "workingLatex": "2\\sin^2\\theta - 3\\sin\\theta + 1 = 0",
          "explanation": "Collecting terms and tidying signs gives a quadratic in $\\sin\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Factorise",
          "workingLatex": "(2\\sin\\theta - 1)(\\sin\\theta - 1) = 0",
          "explanation": "The factors of $1$ that give the middle term $-3\\sin\\theta$ are these.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve the first factor",
          "workingLatex": "\\sin\\theta = \\tfrac{1}{2} \\;\\Rightarrow\\; \\theta = 30^\\circ, 150^\\circ",
          "explanation": "Sine one half gives quadrant I and II solutions.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve the second factor",
          "workingLatex": "\\sin\\theta = 1 \\;\\Rightarrow\\; \\theta = 90^\\circ",
          "explanation": "Sine equals $1$ only at $90^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Collect all solutions",
          "workingLatex": "\\theta = 30^\\circ, 90^\\circ, 150^\\circ",
          "explanation": "Combining both cases gives three solutions in the interval.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta = 30^\\circ, 90^\\circ, 150^\\circ$"
    }
  },
  {
    "id": "al.y2.pure.compound-double-angles.q029",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Compound and double angles",
    "subtopicId": "al.y2.pure.compound-double-angles",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": ["double angle", "equations", "sine", "cosine"],
    "questionText": "Solve $\\sin 2\\theta = \\cos\\theta$ for $0^\\circ \\le \\theta < 360^\\circ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Expand the double angle",
          "workingLatex": "2\\sin\\theta\\cos\\theta = \\cos\\theta",
          "explanation": "Writing $\\sin 2\\theta$ in terms of $\\theta$ lets us factorise.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Move to one side",
          "workingLatex": "2\\sin\\theta\\cos\\theta - \\cos\\theta = 0",
          "explanation": "Rearranging keeps all solutions; dividing by cosine would lose some.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Factor out cosine",
          "workingLatex": "\\cos\\theta(2\\sin\\theta - 1) = 0",
          "explanation": "The common factor $\\cos\\theta$ splits the equation into two cases.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve the first factor",
          "workingLatex": "\\cos\\theta = 0 \\;\\Rightarrow\\; \\theta = 90^\\circ, 270^\\circ",
          "explanation": "Cosine is zero at $90^\\circ$ and $270^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve the second factor",
          "workingLatex": "\\sin\\theta = \\tfrac{1}{2} \\;\\Rightarrow\\; \\theta = 30^\\circ, 150^\\circ",
          "explanation": "Sine one half gives quadrant I and II solutions.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Collect all solutions",
          "workingLatex": "\\theta = 30^\\circ, 90^\\circ, 150^\\circ, 270^\\circ",
          "explanation": "Combining both cases gives four solutions in the interval.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta = 30^\\circ, 90^\\circ, 150^\\circ, 270^\\circ$"
    }
  },
  {
    "id": "al.y2.pure.compound-double-angles.q030",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Compound and double angles",
    "subtopicId": "al.y2.pure.compound-double-angles",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": ["double angle", "simplify"],
    "questionText": "Show that $4\\sin\\theta\\cos\\theta\\cos 2\\theta$ simplifies to $\\sin 4\\theta$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Group the first two factors",
          "workingLatex": "4\\sin\\theta\\cos\\theta\\cos 2\\theta = 2(2\\sin\\theta\\cos\\theta)\\cos 2\\theta",
          "explanation": "Splitting the $4$ as $2\\times 2$ lets us recognise a double angle inside.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply the sine double angle formula",
          "workingLatex": "2\\sin\\theta\\cos\\theta = \\sin 2\\theta",
          "explanation": "The bracket is exactly $\\sin 2\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute",
          "workingLatex": "= 2\\sin 2\\theta\\cos 2\\theta",
          "explanation": "The expression is now $2\\sin 2\\theta\\cos 2\\theta$, again a double angle pattern.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the double angle formula again",
          "workingLatex": "2\\sin 2\\theta\\cos 2\\theta = \\sin(2\\cdot 2\\theta)",
          "explanation": "With inner angle $2\\theta$, the pattern folds into a single sine of the doubled angle.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the angle",
          "workingLatex": "= \\sin 4\\theta",
          "explanation": "Doubling $2\\theta$ gives $4\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the result",
          "workingLatex": "4\\sin\\theta\\cos\\theta\\cos 2\\theta = \\sin 4\\theta",
          "explanation": "Two applications of the double angle formula reduce the product to a single sine term.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sin 4\\theta$"
    }
  },
  {
    "id": "al.y2.pure.compound-double-angles.q031",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Compound and double angles",
    "subtopicId": "al.y2.pure.compound-double-angles",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": ["double angle", "tangent", "given ratio"],
    "questionText": "Given that $\\tan\\theta = \\dfrac{3}{4}$, find the exact value of $\\tan 2\\theta$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the double angle formula for tangent",
          "workingLatex": "\\tan 2\\theta = \\frac{2\\tan\\theta}{1 - \\tan^2\\theta}",
          "explanation": "Only tangent is needed, and it is given, so we substitute directly.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute the given tangent",
          "workingLatex": "= \\frac{2\\cdot\\frac{3}{4}}{1 - \\left(\\frac{3}{4}\\right)^2}",
          "explanation": "Inserting $\\tan\\theta = \\frac{3}{4}$ sets up the fraction.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify the numerator",
          "workingLatex": "2\\cdot\\frac{3}{4} = \\frac{3}{2}",
          "explanation": "Doubling $\\frac{3}{4}$ gives $\\frac{3}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the denominator",
          "workingLatex": "1 - \\frac{9}{16} = \\frac{7}{16}",
          "explanation": "Squaring $\\frac{3}{4}$ gives $\\frac{9}{16}$; subtracting from $1$ leaves $\\frac{7}{16}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Divide the fractions",
          "workingLatex": "\\tan 2\\theta = \\frac{3/2}{7/16} = \\frac{3}{2}\\times\\frac{16}{7}",
          "explanation": "Dividing by $\\frac{7}{16}$ means multiplying by its reciprocal.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate",
          "workingLatex": "= \\frac{48}{14} = \\frac{24}{7}",
          "explanation": "Multiplying and simplifying gives $\\frac{24}{7}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\tan 2\\theta = \\dfrac{24}{7}$"
    }
  },
  {
    "id": "al.y2.pure.compound-double-angles.q032",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Compound and double angles",
    "subtopicId": "al.y2.pure.compound-double-angles",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "proof",
    "tags": ["double angle", "identities", "proof", "factorising"],
    "questionText": "Prove that $\\dfrac{\\cos 2\\theta}{\\cos\\theta + \\sin\\theta} \\equiv \\cos\\theta - \\sin\\theta$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the difference-of-squares form of cos 2θ",
          "workingLatex": "\\cos 2\\theta = \\cos^2\\theta - \\sin^2\\theta",
          "explanation": "This form is a difference of two squares, which factorises to reveal the denominator.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Factorise the numerator",
          "workingLatex": "\\cos^2\\theta - \\sin^2\\theta = (\\cos\\theta - \\sin\\theta)(\\cos\\theta + \\sin\\theta)",
          "explanation": "The difference of squares factorises into these two brackets, one matching the denominator.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the fraction with the factorised numerator",
          "workingLatex": "\\frac{\\cos 2\\theta}{\\cos\\theta + \\sin\\theta} = \\frac{(\\cos\\theta - \\sin\\theta)(\\cos\\theta + \\sin\\theta)}{\\cos\\theta + \\sin\\theta}",
          "explanation": "Now the denominator appears as a factor of the numerator.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Cancel the common factor",
          "workingLatex": "= \\cos\\theta - \\sin\\theta",
          "explanation": "Cancelling the shared $(\\cos\\theta + \\sin\\theta)$ leaves the required expression.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Conclude",
          "workingLatex": "\\frac{\\cos 2\\theta}{\\cos\\theta + \\sin\\theta} \\equiv \\cos\\theta - \\sin\\theta \\;\\blacksquare",
          "explanation": "The left-hand side equals the right-hand side, completing the proof.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Note the restriction",
          "workingLatex": "\\cos\\theta + \\sin\\theta \\ne 0",
          "explanation": "The cancellation requires the denominator to be nonzero, excluding angles where $\\tan\\theta = -1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{\\cos 2\\theta}{\\cos\\theta + \\sin\\theta} \\equiv \\cos\\theta - \\sin\\theta$"
    }
  },
  {
    "id": "al.y2.pure.compound-double-angles.q033",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Compound and double angles",
    "subtopicId": "al.y2.pure.compound-double-angles",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "proof",
    "tags": ["double angle", "identities", "proof"],
    "questionText": "Prove that $(\\sin\\theta + \\cos\\theta)^2 \\equiv 1 + \\sin 2\\theta$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Expand the square",
          "workingLatex": "(\\sin\\theta + \\cos\\theta)^2 = \\sin^2\\theta + 2\\sin\\theta\\cos\\theta + \\cos^2\\theta",
          "explanation": "Using $(a+b)^2$ gives three terms; two of them combine via the Pythagorean identity.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Group the squared terms",
          "workingLatex": "= (\\sin^2\\theta + \\cos^2\\theta) + 2\\sin\\theta\\cos\\theta",
          "explanation": "Grouping the two squares prepares to use the Pythagorean identity.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the Pythagorean identity",
          "workingLatex": "\\sin^2\\theta + \\cos^2\\theta = 1",
          "explanation": "The grouped squares equal $1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Recognise the double angle",
          "workingLatex": "2\\sin\\theta\\cos\\theta = \\sin 2\\theta",
          "explanation": "The remaining term is exactly $\\sin 2\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Combine",
          "workingLatex": "= 1 + \\sin 2\\theta \\;\\blacksquare",
          "explanation": "Substituting both results gives the right-hand side, completing the proof.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(\\sin\\theta + \\cos\\theta)^2 \\equiv 1 + \\sin 2\\theta$"
    }
  },
  {
    "id": "al.y2.pure.compound-double-angles.q034",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Compound and double angles",
    "subtopicId": "al.y2.pure.compound-double-angles",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": ["double angle", "given expression"],
    "questionText": "Given that $\\sin\\theta + \\cos\\theta = \\dfrac{1}{2}$, find the exact value of $\\sin 2\\theta$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Square both sides",
          "workingLatex": "(\\sin\\theta + \\cos\\theta)^2 = \\left(\\frac{1}{2}\\right)^2",
          "explanation": "Squaring links the given sum to $\\sin 2\\theta$, because the cross term produces $2\\sin\\theta\\cos\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expand the left side",
          "workingLatex": "\\sin^2\\theta + 2\\sin\\theta\\cos\\theta + \\cos^2\\theta = \\frac{1}{4}",
          "explanation": "The square expands into three terms.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the Pythagorean identity",
          "workingLatex": "1 + 2\\sin\\theta\\cos\\theta = \\frac{1}{4}",
          "explanation": "The two squared terms sum to $1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Recognise the double angle",
          "workingLatex": "1 + \\sin 2\\theta = \\frac{1}{4}",
          "explanation": "The cross term $2\\sin\\theta\\cos\\theta$ is $\\sin 2\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for sin 2θ",
          "workingLatex": "\\sin 2\\theta = \\frac{1}{4} - 1 = -\\frac{3}{4}",
          "explanation": "Subtracting $1$ gives $-\\frac{3}{4}$, a valid sine value.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check plausibility",
          "workingLatex": "\\left|-\\tfrac{3}{4}\\right| \\le 1 \\;\\checkmark",
          "explanation": "The result lies within the valid sine range, so it is reasonable.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sin 2\\theta = -\\dfrac{3}{4}$"
    }
  },
  {
    "id": "al.y2.pure.compound-double-angles.q035",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Compound and double angles",
    "subtopicId": "al.y2.pure.compound-double-angles",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": ["double angle", "equations", "solving"],
    "questionText": "Solve $\\sin 2\\theta = \\dfrac{\\sqrt3}{2}$ for $0^\\circ \\le \\theta < 360^\\circ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Substitute for the double angle variable",
          "workingLatex": "\\text{let } \\phi = 2\\theta, \\quad 0^\\circ \\le \\phi < 720^\\circ",
          "explanation": "Because $\\theta$ ranges over $[0,360^\\circ)$, the doubled angle $\\phi$ ranges over $[0,720^\\circ)$; we must find all solutions there.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the base solutions",
          "workingLatex": "\\sin\\phi = \\tfrac{\\sqrt3}{2} \\;\\Rightarrow\\; \\phi = 60^\\circ, 120^\\circ",
          "explanation": "In the first revolution, sine equals $\\frac{\\sqrt3}{2}$ at $60^\\circ$ and $120^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Add a full revolution for more solutions",
          "workingLatex": "\\phi = 60^\\circ + 360^\\circ = 420^\\circ, \\quad 120^\\circ + 360^\\circ = 480^\\circ",
          "explanation": "Since $\\phi$ extends to $720^\\circ$, we add $360^\\circ$ to each base solution.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "List all values of phi",
          "workingLatex": "\\phi = 60^\\circ, 120^\\circ, 420^\\circ, 480^\\circ",
          "explanation": "These are all the solutions of the doubled-angle equation in range.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Halve to find theta",
          "workingLatex": "\\theta = 30^\\circ, 60^\\circ, 210^\\circ, 240^\\circ",
          "explanation": "Dividing each $\\phi$ by $2$ gives the solutions for $\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Confirm the interval",
          "workingLatex": "\\text{all} \\in [0^\\circ, 360^\\circ) \\;\\checkmark",
          "explanation": "Every value lies within the required range, so all are kept.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta = 30^\\circ, 60^\\circ, 210^\\circ, 240^\\circ$"
    }
  },
  {
    "id": "al.y2.pure.compound-double-angles.q036",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Compound and double angles",
    "subtopicId": "al.y2.pure.compound-double-angles",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": ["double angle", "equations", "cosine", "solving"],
    "questionText": "Solve $\\cos 2\\theta = \\dfrac{1}{2}$ for $0^\\circ \\le \\theta < 360^\\circ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Substitute for the double angle variable",
          "workingLatex": "\\text{let } \\phi = 2\\theta, \\quad 0^\\circ \\le \\phi < 720^\\circ",
          "explanation": "Doubling widens the interval to $[0,720^\\circ)$, so we search there.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the base solutions",
          "workingLatex": "\\cos\\phi = \\tfrac{1}{2} \\;\\Rightarrow\\; \\phi = 60^\\circ, 300^\\circ",
          "explanation": "Cosine one half occurs at $60^\\circ$ and $300^\\circ$ in the first revolution.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Add a full revolution",
          "workingLatex": "\\phi = 420^\\circ, 660^\\circ",
          "explanation": "Adding $360^\\circ$ to each gives the remaining solutions within $720^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "List all values of phi",
          "workingLatex": "\\phi = 60^\\circ, 300^\\circ, 420^\\circ, 660^\\circ",
          "explanation": "These are all the doubled-angle solutions in range.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Halve to find theta",
          "workingLatex": "\\theta = 30^\\circ, 150^\\circ, 210^\\circ, 330^\\circ",
          "explanation": "Dividing each by $2$ gives the solutions for $\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Confirm the interval",
          "workingLatex": "\\text{all} \\in [0^\\circ, 360^\\circ) \\;\\checkmark",
          "explanation": "All four solutions lie within the required range.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta = 30^\\circ, 150^\\circ, 210^\\circ, 330^\\circ$"
    }
  },
  {
    "id": "al.y2.pure.compound-double-angles.q037",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Compound and double angles",
    "subtopicId": "al.y2.pure.compound-double-angles",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "proof",
    "tags": ["double angle", "identities", "proof", "secant"],
    "questionText": "Prove that $\\dfrac{\\sin 2\\theta}{\\sin\\theta} - \\dfrac{\\cos 2\\theta}{\\cos\\theta} \\equiv \\sec\\theta$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Simplify the first fraction",
          "workingLatex": "\\frac{\\sin 2\\theta}{\\sin\\theta} = \\frac{2\\sin\\theta\\cos\\theta}{\\sin\\theta} = 2\\cos\\theta",
          "explanation": "Expanding $\\sin 2\\theta$ and cancelling the sine gives a clean $2\\cos\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose a helpful form for the second fraction",
          "workingLatex": "\\cos 2\\theta = 2\\cos^2\\theta - 1",
          "explanation": "This form divides neatly by cosine, producing a secant term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify the second fraction",
          "workingLatex": "\\frac{\\cos 2\\theta}{\\cos\\theta} = \\frac{2\\cos^2\\theta - 1}{\\cos\\theta} = 2\\cos\\theta - \\frac{1}{\\cos\\theta}",
          "explanation": "Splitting the fraction gives $2\\cos\\theta$ minus one over cosine.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Subtract the two results",
          "workingLatex": "2\\cos\\theta - \\left(2\\cos\\theta - \\frac{1}{\\cos\\theta}\\right)",
          "explanation": "Substituting both simplified fractions into the original expression.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Cancel the common term",
          "workingLatex": "= \\frac{1}{\\cos\\theta}",
          "explanation": "The $2\\cos\\theta$ terms cancel, leaving one over cosine.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Recognise the result",
          "workingLatex": "= \\sec\\theta \\;\\blacksquare",
          "explanation": "One over cosine is secant, matching the right-hand side and completing the proof.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{\\sin 2\\theta}{\\sin\\theta} - \\dfrac{\\cos 2\\theta}{\\cos\\theta} \\equiv \\sec\\theta$"
    }
  },
  {
    "id": "al.y2.pure.compound-double-angles.q038",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Compound and double angles",
    "subtopicId": "al.y2.pure.compound-double-angles",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "proof",
    "tags": ["triple angle", "identities", "proof", "sine"],
    "questionText": "Prove that $\\sin 3\\theta \\equiv 3\\sin\\theta - 4\\sin^3\\theta$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Split the triple angle",
          "workingLatex": "\\sin 3\\theta = \\sin(2\\theta + \\theta)",
          "explanation": "Writing $3\\theta$ as $2\\theta + \\theta$ lets us use the addition formula combined with double angle formulae.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply the sine addition formula",
          "workingLatex": "= \\sin 2\\theta\\cos\\theta + \\cos 2\\theta\\sin\\theta",
          "explanation": "Expanding with $A = 2\\theta$ and $B = \\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the double angle for sine",
          "workingLatex": "\\sin 2\\theta = 2\\sin\\theta\\cos\\theta",
          "explanation": "Replacing $\\sin 2\\theta$ moves everything towards single angles.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Choose the sine form for cos 2θ",
          "workingLatex": "\\cos 2\\theta = 1 - 2\\sin^2\\theta",
          "explanation": "Since the target is in sine only, this form of the cosine double angle is the right choice.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute both double angles",
          "workingLatex": "= (2\\sin\\theta\\cos\\theta)\\cos\\theta + (1 - 2\\sin^2\\theta)\\sin\\theta",
          "explanation": "Inserting both expansions gives an expression in sine and cosine of $\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify the first term",
          "workingLatex": "2\\sin\\theta\\cos^2\\theta + \\sin\\theta - 2\\sin^3\\theta",
          "explanation": "Multiplying out gives a $\\cos^2\\theta$ term plus the two sine terms.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Replace cosine squared",
          "workingLatex": "\\cos^2\\theta = 1 - \\sin^2\\theta",
          "explanation": "Using the Pythagorean identity converts the last cosine term into sine.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute",
          "workingLatex": "= 2\\sin\\theta(1 - \\sin^2\\theta) + \\sin\\theta - 2\\sin^3\\theta",
          "explanation": "Now every term is in sine.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Expand the bracket",
          "workingLatex": "= 2\\sin\\theta - 2\\sin^3\\theta + \\sin\\theta - 2\\sin^3\\theta",
          "explanation": "Distributing $2\\sin\\theta$ over the bracket.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Collect like terms",
          "workingLatex": "= 3\\sin\\theta - 4\\sin^3\\theta \\;\\blacksquare",
          "explanation": "Combining the sine terms and the cubic terms gives exactly the right-hand side, completing the proof.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sin 3\\theta \\equiv 3\\sin\\theta - 4\\sin^3\\theta$"
    }
  },
  {
    "id": "al.y2.pure.compound-double-angles.q039",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Compound and double angles",
    "subtopicId": "al.y2.pure.compound-double-angles",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "proof",
    "tags": ["triple angle", "identities", "proof", "cosine"],
    "questionText": "Prove that $\\cos 3\\theta \\equiv 4\\cos^3\\theta - 3\\cos\\theta$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Split the triple angle",
          "workingLatex": "\\cos 3\\theta = \\cos(2\\theta + \\theta)",
          "explanation": "Writing $3\\theta$ as $2\\theta + \\theta$ enables the addition and double angle formulae.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply the cosine addition formula",
          "workingLatex": "= \\cos 2\\theta\\cos\\theta - \\sin 2\\theta\\sin\\theta",
          "explanation": "Expanding with $A = 2\\theta$ and $B = \\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Choose the cosine form for cos 2θ",
          "workingLatex": "\\cos 2\\theta = 2\\cos^2\\theta - 1",
          "explanation": "Since the target is in cosine only, this form is the right choice.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the sine double angle",
          "workingLatex": "\\sin 2\\theta = 2\\sin\\theta\\cos\\theta",
          "explanation": "Replacing $\\sin 2\\theta$ prepares the second term.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute both",
          "workingLatex": "= (2\\cos^2\\theta - 1)\\cos\\theta - (2\\sin\\theta\\cos\\theta)\\sin\\theta",
          "explanation": "Inserting both expansions gives an expression in sine and cosine.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Multiply out",
          "workingLatex": "= 2\\cos^3\\theta - \\cos\\theta - 2\\sin^2\\theta\\cos\\theta",
          "explanation": "Expanding each product gives a cubic cosine term and a sine-squared term.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Replace sine squared",
          "workingLatex": "\\sin^2\\theta = 1 - \\cos^2\\theta",
          "explanation": "Using the Pythagorean identity converts the sine-squared term into cosine.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute",
          "workingLatex": "= 2\\cos^3\\theta - \\cos\\theta - 2(1 - \\cos^2\\theta)\\cos\\theta",
          "explanation": "Now every term is in cosine.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Expand the bracket",
          "workingLatex": "= 2\\cos^3\\theta - \\cos\\theta - 2\\cos\\theta + 2\\cos^3\\theta",
          "explanation": "Distributing $-2\\cos\\theta$ over the bracket.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Collect like terms",
          "workingLatex": "= 4\\cos^3\\theta - 3\\cos\\theta \\;\\blacksquare",
          "explanation": "Combining the cubic and linear cosine terms gives the right-hand side, completing the proof.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\cos 3\\theta \\equiv 4\\cos^3\\theta - 3\\cos\\theta$"
    }
  },
  {
    "id": "al.y2.pure.compound-double-angles.q040",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Compound and double angles",
    "subtopicId": "al.y2.pure.compound-double-angles",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": ["double angle", "equations", "quadratic", "cosine"],
    "questionText": "Solve $\\cos 2\\theta = 3\\cos\\theta - 2$ for $0^\\circ \\le \\theta < 360^\\circ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the cosine form",
          "workingLatex": "\\cos 2\\theta = 2\\cos^2\\theta - 1",
          "explanation": "The right side is in cosine, so this form makes a quadratic in $\\cos\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "2\\cos^2\\theta - 1 = 3\\cos\\theta - 2",
          "explanation": "The equation is now in cosine only.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange to standard form",
          "workingLatex": "2\\cos^2\\theta - 3\\cos\\theta + 1 = 0",
          "explanation": "Collecting all terms on one side gives a quadratic.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Factorise",
          "workingLatex": "(2\\cos\\theta - 1)(\\cos\\theta - 1) = 0",
          "explanation": "The factors of $1$ giving $-3\\cos\\theta$ are these.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve the first factor",
          "workingLatex": "\\cos\\theta = \\tfrac{1}{2} \\;\\Rightarrow\\; \\theta = 60^\\circ, 300^\\circ",
          "explanation": "Cosine one half gives quadrant I and IV solutions.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve the second factor",
          "workingLatex": "\\cos\\theta = 1 \\;\\Rightarrow\\; \\theta = 0^\\circ",
          "explanation": "Cosine equals $1$ only at $0^\\circ$ in the interval.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Collect all solutions",
          "workingLatex": "\\theta = 0^\\circ, 60^\\circ, 300^\\circ",
          "explanation": "Combining both cases gives three solutions in the interval.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta = 0^\\circ, 60^\\circ, 300^\\circ$"
    }
  },
  {
    "id": "al.y2.pure.compound-double-angles.q041",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Compound and double angles",
    "subtopicId": "al.y2.pure.compound-double-angles",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "value",
    "tags": ["double angle", "equations", "quadratic", "rejecting roots"],
    "questionText": "Solve $5\\sin\\theta = 2 + \\cos 2\\theta$ for $0^\\circ \\le \\theta < 360^\\circ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the sine form of the double angle",
          "workingLatex": "\\cos 2\\theta = 1 - 2\\sin^2\\theta",
          "explanation": "The other terms involve sine, so this form yields a quadratic in $\\sin\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "5\\sin\\theta = 2 + 1 - 2\\sin^2\\theta",
          "explanation": "Replacing $\\cos 2\\theta$ puts everything in sine.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange to standard form",
          "workingLatex": "2\\sin^2\\theta + 5\\sin\\theta - 3 = 0",
          "explanation": "Collecting terms gives a quadratic in $\\sin\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Factorise",
          "workingLatex": "(2\\sin\\theta - 1)(\\sin\\theta + 3) = 0",
          "explanation": "The factorisation checks out via the cross terms.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Reject the impossible root",
          "workingLatex": "\\sin\\theta = -3 \\text{ rejected since } |\\sin\\theta| \\le 1",
          "explanation": "Sine can never be $-3$, so that factor gives no solutions.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve the valid factor",
          "workingLatex": "\\sin\\theta = \\tfrac{1}{2}",
          "explanation": "The remaining factor gives sine equal to one half.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the angles",
          "workingLatex": "\\theta = 30^\\circ, 150^\\circ",
          "explanation": "Sine one half gives solutions in quadrants I and II.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the solutions",
          "workingLatex": "\\theta = 30^\\circ, 150^\\circ",
          "explanation": "These are the only solutions, since the other factor was impossible.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta = 30^\\circ, 150^\\circ$"
    }
  },
  {
    "id": "al.y2.pure.compound-double-angles.q042",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Compound and double angles",
    "subtopicId": "al.y2.pure.compound-double-angles",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "proof",
    "tags": ["double angle", "identities", "proof", "tangent"],
    "questionText": "Prove that $\\cos 2\\theta \\equiv \\dfrac{1 - \\tan^2\\theta}{1 + \\tan^2\\theta}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Start with the right-hand side",
          "workingLatex": "\\text{RHS} = \\frac{1 - \\tan^2\\theta}{1 + \\tan^2\\theta}",
          "explanation": "The denominator matches a Pythagorean identity, so we work from the right.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Simplify the denominator",
          "workingLatex": "1 + \\tan^2\\theta = \\sec^2\\theta",
          "explanation": "This standard identity turns the denominator into $\\sec^2\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite the fraction",
          "workingLatex": "= \\frac{1 - \\tan^2\\theta}{\\sec^2\\theta}",
          "explanation": "Substituting simplifies the denominator to a single reciprocal square.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Multiply through by cosine squared",
          "workingLatex": "= (1 - \\tan^2\\theta)\\cos^2\\theta",
          "explanation": "Dividing by $\\sec^2\\theta$ is multiplying by $\\cos^2\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Expand using the definition of tangent",
          "workingLatex": "= \\cos^2\\theta - \\frac{\\sin^2\\theta}{\\cos^2\\theta}\\cos^2\\theta",
          "explanation": "Writing $\\tan^2\\theta$ as $\\frac{\\sin^2\\theta}{\\cos^2\\theta}$ prepares the second term to cancel.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Cancel",
          "workingLatex": "= \\cos^2\\theta - \\sin^2\\theta",
          "explanation": "The cosine squared cancels in the second term, leaving the difference of squares.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Recognise the double angle",
          "workingLatex": "= \\cos 2\\theta \\;\\blacksquare",
          "explanation": "This is the first form of $\\cos 2\\theta$, matching the left-hand side and completing the proof.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\cos 2\\theta \\equiv \\dfrac{1 - \\tan^2\\theta}{1 + \\tan^2\\theta}$"
    }
  },
  {
    "id": "al.y2.pure.compound-double-angles.q043",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Compound and double angles",
    "subtopicId": "al.y2.pure.compound-double-angles",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "proof",
    "tags": ["double angle", "identities", "proof", "tangent"],
    "questionText": "Prove that $\\sin 2\\theta \\equiv \\dfrac{2\\tan\\theta}{1 + \\tan^2\\theta}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Start with the right-hand side",
          "workingLatex": "\\text{RHS} = \\frac{2\\tan\\theta}{1 + \\tan^2\\theta}",
          "explanation": "The denominator is a Pythagorean identity, so we work from the right.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Simplify the denominator",
          "workingLatex": "1 + \\tan^2\\theta = \\sec^2\\theta",
          "explanation": "The denominator becomes $\\sec^2\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write tangent in sine and cosine",
          "workingLatex": "= \\frac{2\\cdot\\frac{\\sin\\theta}{\\cos\\theta}}{\\sec^2\\theta}",
          "explanation": "Expressing tangent in basic functions prepares the cancellation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Replace secant squared and divide",
          "workingLatex": "= 2\\cdot\\frac{\\sin\\theta}{\\cos\\theta}\\cdot\\cos^2\\theta",
          "explanation": "Dividing by $\\sec^2\\theta$ is multiplying by $\\cos^2\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Cancel one cosine",
          "workingLatex": "= 2\\sin\\theta\\cos\\theta",
          "explanation": "One cosine cancels, leaving the standard double angle expression.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Recognise the double angle",
          "workingLatex": "= \\sin 2\\theta \\;\\blacksquare",
          "explanation": "This equals $\\sin 2\\theta$, matching the left-hand side and completing the proof.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sin 2\\theta \\equiv \\dfrac{2\\tan\\theta}{1 + \\tan^2\\theta}$"
    }
  },
  {
    "id": "al.y2.pure.compound-double-angles.q044",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Compound and double angles",
    "subtopicId": "al.y2.pure.compound-double-angles",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "proof",
    "tags": ["double angle", "identities", "proof", "cotangent"],
    "questionText": "Prove that $\\cot\\theta - \\tan\\theta \\equiv 2\\cot 2\\theta$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rewrite both terms in sine and cosine",
          "workingLatex": "\\cot\\theta - \\tan\\theta = \\frac{\\cos\\theta}{\\sin\\theta} - \\frac{\\sin\\theta}{\\cos\\theta}",
          "explanation": "Converting to basic functions lets us combine over a common denominator.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Combine over a common denominator",
          "workingLatex": "= \\frac{\\cos^2\\theta - \\sin^2\\theta}{\\sin\\theta\\cos\\theta}",
          "explanation": "The numerator becomes a difference of squares and the denominator is $\\sin\\theta\\cos\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recognise the numerator as a double angle",
          "workingLatex": "\\cos^2\\theta - \\sin^2\\theta = \\cos 2\\theta",
          "explanation": "The numerator is the first form of $\\cos 2\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rewrite the denominator using a double angle",
          "workingLatex": "\\sin\\theta\\cos\\theta = \\tfrac{1}{2}\\sin 2\\theta",
          "explanation": "Since $\\sin 2\\theta = 2\\sin\\theta\\cos\\theta$, the denominator is half of $\\sin 2\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute both",
          "workingLatex": "= \\frac{\\cos 2\\theta}{\\tfrac{1}{2}\\sin 2\\theta}",
          "explanation": "Now numerator and denominator are in terms of $2\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify the compound fraction",
          "workingLatex": "= \\frac{2\\cos 2\\theta}{\\sin 2\\theta}",
          "explanation": "Dividing by $\\frac{1}{2}$ multiplies the top by $2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Recognise cotangent and conclude",
          "workingLatex": "= 2\\cot 2\\theta \\;\\blacksquare",
          "explanation": "Cosine over sine of $2\\theta$ is $\\cot 2\\theta$, giving $2\\cot 2\\theta$ and completing the proof.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\cot\\theta - \\tan\\theta \\equiv 2\\cot 2\\theta$"
    }
  },
  {
    "id": "al.y2.pure.compound-double-angles.q045",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Compound and double angles",
    "subtopicId": "al.y2.pure.compound-double-angles",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "proof",
    "tags": ["double angle", "identities", "proof", "cosecant"],
    "questionText": "Prove that $\\cot\\theta + \\tan\\theta \\equiv 2\\csc 2\\theta$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rewrite both terms in sine and cosine",
          "workingLatex": "\\cot\\theta + \\tan\\theta = \\frac{\\cos\\theta}{\\sin\\theta} + \\frac{\\sin\\theta}{\\cos\\theta}",
          "explanation": "Converting to basic functions lets us combine the two fractions.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Combine over a common denominator",
          "workingLatex": "= \\frac{\\cos^2\\theta + \\sin^2\\theta}{\\sin\\theta\\cos\\theta}",
          "explanation": "The numerator becomes the Pythagorean sum.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the Pythagorean identity",
          "workingLatex": "= \\frac{1}{\\sin\\theta\\cos\\theta}",
          "explanation": "The numerator equals $1$, greatly simplifying the fraction.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rewrite the denominator as a double angle",
          "workingLatex": "\\sin\\theta\\cos\\theta = \\tfrac{1}{2}\\sin 2\\theta",
          "explanation": "Half of $\\sin 2\\theta$ equals $\\sin\\theta\\cos\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute",
          "workingLatex": "= \\frac{1}{\\tfrac{1}{2}\\sin 2\\theta}",
          "explanation": "The denominator is now in terms of $2\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify",
          "workingLatex": "= \\frac{2}{\\sin 2\\theta}",
          "explanation": "Dividing by $\\frac{1}{2}$ doubles the value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Recognise cosecant and conclude",
          "workingLatex": "= 2\\csc 2\\theta \\;\\blacksquare",
          "explanation": "One over $\\sin 2\\theta$ is $\\csc 2\\theta$, giving $2\\csc 2\\theta$ and completing the proof.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\cot\\theta + \\tan\\theta \\equiv 2\\csc 2\\theta$"
    }
  },
  {
    "id": "al.y2.pure.compound-double-angles.q046",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Compound and double angles",
    "subtopicId": "al.y2.pure.compound-double-angles",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": ["double angle", "equations", "quadratic", "sine"],
    "questionText": "Solve $\\cos 2\\theta + \\sin\\theta = 0$ for $0^\\circ \\le \\theta < 360^\\circ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the sine form of cos 2θ",
          "workingLatex": "\\cos 2\\theta = 1 - 2\\sin^2\\theta",
          "explanation": "The rest of the equation is in sine, so this form gives a quadratic in $\\sin\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "1 - 2\\sin^2\\theta + \\sin\\theta = 0",
          "explanation": "The equation is now entirely in sine.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange to standard form",
          "workingLatex": "2\\sin^2\\theta - \\sin\\theta - 1 = 0",
          "explanation": "Multiplying through by $-1$ and reordering gives a tidy quadratic.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Factorise",
          "workingLatex": "(2\\sin\\theta + 1)(\\sin\\theta - 1) = 0",
          "explanation": "The factorisation checks out via the cross terms.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve the first factor",
          "workingLatex": "\\sin\\theta = -\\tfrac{1}{2} \\;\\Rightarrow\\; \\theta = 210^\\circ, 330^\\circ",
          "explanation": "Negative sine one half gives quadrant III and IV solutions.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve the second factor",
          "workingLatex": "\\sin\\theta = 1 \\;\\Rightarrow\\; \\theta = 90^\\circ",
          "explanation": "Sine equals $1$ only at $90^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Collect all solutions",
          "workingLatex": "\\theta = 90^\\circ, 210^\\circ, 330^\\circ",
          "explanation": "Combining both cases gives three solutions in the interval.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta = 90^\\circ, 210^\\circ, 330^\\circ$"
    }
  },
  {
    "id": "al.y2.pure.compound-double-angles.q047",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Compound and double angles",
    "subtopicId": "al.y2.pure.compound-double-angles",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": ["double angle", "equations", "solving"],
    "questionText": "Solve $4\\sin\\theta\\cos\\theta = 1$ for $0^\\circ \\le \\theta < 360^\\circ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise the double angle",
          "workingLatex": "4\\sin\\theta\\cos\\theta = 2(2\\sin\\theta\\cos\\theta) = 2\\sin 2\\theta",
          "explanation": "Rewriting using $\\sin 2\\theta = 2\\sin\\theta\\cos\\theta$ turns the product into a single sine.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rewrite the equation",
          "workingLatex": "2\\sin 2\\theta = 1 \\;\\Rightarrow\\; \\sin 2\\theta = \\tfrac{1}{2}",
          "explanation": "Dividing by $2$ gives a standard sine equation in the doubled angle.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set up the extended interval",
          "workingLatex": "\\phi = 2\\theta, \\quad 0^\\circ \\le \\phi < 720^\\circ",
          "explanation": "The doubled angle ranges up to $720^\\circ$, so we find all solutions there.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the base solutions",
          "workingLatex": "\\sin\\phi = \\tfrac{1}{2} \\;\\Rightarrow\\; \\phi = 30^\\circ, 150^\\circ",
          "explanation": "Sine one half occurs at $30^\\circ$ and $150^\\circ$ in the first revolution.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Add a full revolution",
          "workingLatex": "\\phi = 390^\\circ, 510^\\circ",
          "explanation": "Adding $360^\\circ$ gives the remaining solutions within $720^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Halve to find theta",
          "workingLatex": "\\theta = 15^\\circ, 75^\\circ, 195^\\circ, 255^\\circ",
          "explanation": "Dividing each $\\phi$ by $2$ gives the solutions for $\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Confirm the interval",
          "workingLatex": "\\text{all} \\in [0^\\circ, 360^\\circ) \\;\\checkmark",
          "explanation": "All four solutions lie within the required range.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta = 15^\\circ, 75^\\circ, 195^\\circ, 255^\\circ$"
    }
  },
  {
    "id": "al.y2.pure.compound-double-angles.q048",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Compound and double angles",
    "subtopicId": "al.y2.pure.compound-double-angles",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "value",
    "tags": ["compound angles", "given ratios", "quadrants", "cosine"],
    "questionText": "Given that $\\sin A = \\dfrac{4}{5}$ with $A$ obtuse, and $\\sin B = \\dfrac{5}{13}$ with $B$ acute, find the exact value of $\\cos(A + B)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the compound angle formula",
          "workingLatex": "\\cos(A + B) = \\cos A\\cos B - \\sin A\\sin B",
          "explanation": "We need $\\cos A$ and $\\cos B$; the quadrant information will fix their signs.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find cos A with the correct sign",
          "workingLatex": "\\cos A = -\\sqrt{1 - \\tfrac{16}{25}} = -\\frac{3}{5}",
          "explanation": "Since $A$ is obtuse (quadrant II), cosine is negative, giving $-\\frac{3}{5}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find cos B with the correct sign",
          "workingLatex": "\\cos B = +\\sqrt{1 - \\tfrac{25}{169}} = \\frac{12}{13}",
          "explanation": "Since $B$ is acute, cosine is positive, giving $\\frac{12}{13}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute all values",
          "workingLatex": "\\cos(A + B) = \\left(-\\frac{3}{5}\\right)\\frac{12}{13} - \\frac{4}{5}\\cdot\\frac{5}{13}",
          "explanation": "Inserting the four values, taking care with the negative cosine.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Multiply out",
          "workingLatex": "= -\\frac{36}{65} - \\frac{20}{65}",
          "explanation": "Both products share the denominator $65$; the first is negative.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine",
          "workingLatex": "= -\\frac{56}{65}",
          "explanation": "Adding the two negative terms gives $-\\frac{56}{65}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Interpret the sign",
          "workingLatex": "\\cos(A + B) < 0",
          "explanation": "A negative cosine indicates $A + B$ is obtuse, which is consistent with $A$ being obtuse already.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\cos(A + B) = -\\dfrac{56}{65}$"
    }
  },
  {
    "id": "al.y2.pure.compound-double-angles.q049",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Compound and double angles",
    "subtopicId": "al.y2.pure.compound-double-angles",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "proof",
    "tags": ["compound angles", "identities", "proof"],
    "questionText": "Prove that $\\sin(A + B)\\sin(A - B) \\equiv \\sin^2 A - \\sin^2 B$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Expand both compound angles",
          "workingLatex": "\\sin(A + B) = \\sin A\\cos B + \\cos A\\sin B",
          "explanation": "We write out each bracket, noting the two differ only in a sign, which sets up a difference of squares.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the second bracket",
          "workingLatex": "\\sin(A - B) = \\sin A\\cos B - \\cos A\\sin B",
          "explanation": "The difference version flips the middle sign.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Multiply as a difference of squares",
          "workingLatex": "\\sin(A+B)\\sin(A-B) = (\\sin A\\cos B)^2 - (\\cos A\\sin B)^2",
          "explanation": "The product of $(x+y)(x-y)$ is $x^2 - y^2$, with $x = \\sin A\\cos B$ and $y = \\cos A\\sin B$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write out the squares",
          "workingLatex": "= \\sin^2 A\\cos^2 B - \\cos^2 A\\sin^2 B",
          "explanation": "Squaring each product gives these two terms.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Replace the cosine squares",
          "workingLatex": "\\cos^2 B = 1 - \\sin^2 B, \\quad \\cos^2 A = 1 - \\sin^2 A",
          "explanation": "Using the Pythagorean identity converts everything into sines.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute",
          "workingLatex": "= \\sin^2 A(1 - \\sin^2 B) - (1 - \\sin^2 A)\\sin^2 B",
          "explanation": "Inserting both replacements.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Expand",
          "workingLatex": "= \\sin^2 A - \\sin^2 A\\sin^2 B - \\sin^2 B + \\sin^2 A\\sin^2 B",
          "explanation": "Multiplying out both products.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Cancel and conclude",
          "workingLatex": "= \\sin^2 A - \\sin^2 B \\;\\blacksquare",
          "explanation": "The mixed $\\sin^2 A\\sin^2 B$ terms cancel, leaving the required result.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sin(A + B)\\sin(A - B) \\equiv \\sin^2 A - \\sin^2 B$"
    }
  },
  {
    "id": "al.y2.pure.compound-double-angles.q050",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Compound and double angles",
    "subtopicId": "al.y2.pure.compound-double-angles",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "value",
    "tags": ["double angle", "equations", "quadratic", "rejecting roots"],
    "questionText": "Solve $\\cos 2\\theta - 5\\cos\\theta + 3 = 0$ for $0^\\circ \\le \\theta < 360^\\circ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the cosine form",
          "workingLatex": "\\cos 2\\theta = 2\\cos^2\\theta - 1",
          "explanation": "The rest of the equation is in cosine, so this form gives a quadratic in $\\cos\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "2\\cos^2\\theta - 1 - 5\\cos\\theta + 3 = 0",
          "explanation": "The equation is now in cosine only.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify to standard form",
          "workingLatex": "2\\cos^2\\theta - 5\\cos\\theta + 2 = 0",
          "explanation": "Combining the constants $-1 + 3 = 2$ gives a tidy quadratic.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Factorise",
          "workingLatex": "(2\\cos\\theta - 1)(\\cos\\theta - 2) = 0",
          "explanation": "The factorisation checks out via the cross terms.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Reject the impossible root",
          "workingLatex": "\\cos\\theta = 2 \\text{ rejected since } |\\cos\\theta| \\le 1",
          "explanation": "Cosine cannot exceed $1$, so that factor gives no solutions.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve the valid factor",
          "workingLatex": "\\cos\\theta = \\tfrac{1}{2} \\;\\Rightarrow\\; \\theta = 60^\\circ, 300^\\circ",
          "explanation": "Cosine one half gives quadrant I and IV solutions.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the solutions",
          "workingLatex": "\\theta = 60^\\circ, 300^\\circ",
          "explanation": "These are the only solutions, since the other factor was impossible.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta = 60^\\circ, 300^\\circ$"
    }
  },
  {
    "id": "al.y2.pure.compound-double-angles.q051",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Compound and double angles",
    "subtopicId": "al.y2.pure.compound-double-angles",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": ["compound angles", "equations", "solving"],
    "questionText": "Solve $\\sin(\\theta + 30^\\circ) = \\cos\\theta$ for $0^\\circ \\le \\theta < 360^\\circ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Expand the compound angle",
          "workingLatex": "\\sin\\theta\\cos 30^\\circ + \\cos\\theta\\sin 30^\\circ = \\cos\\theta",
          "explanation": "Expanding the left side lets us collect sine and cosine terms.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute the exact values",
          "workingLatex": "\\frac{\\sqrt3}{2}\\sin\\theta + \\frac{1}{2}\\cos\\theta = \\cos\\theta",
          "explanation": "Using $\\cos 30^\\circ = \\frac{\\sqrt3}{2}$ and $\\sin 30^\\circ = \\frac{1}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Collect the cosine terms",
          "workingLatex": "\\frac{\\sqrt3}{2}\\sin\\theta = \\cos\\theta - \\frac{1}{2}\\cos\\theta = \\frac{1}{2}\\cos\\theta",
          "explanation": "Moving the cosine terms together leaves a half cosine on the right.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Divide to form a tangent",
          "workingLatex": "\\frac{\\sin\\theta}{\\cos\\theta} = \\frac{1/2}{\\sqrt3/2} = \\frac{1}{\\sqrt3}",
          "explanation": "Dividing both sides by $\\frac{\\sqrt3}{2}\\cos\\theta$ gives a tangent equation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the tangent equation",
          "workingLatex": "\\tan\\theta = \\frac{1}{\\sqrt3}",
          "explanation": "The ratio simplifies to $\\frac{1}{\\sqrt3}$, a standard value.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for theta",
          "workingLatex": "\\theta = 30^\\circ, 210^\\circ",
          "explanation": "Tangent $\\frac{1}{\\sqrt3}$ occurs at $30^\\circ$ and one period later at $210^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the solutions",
          "workingLatex": "\\theta = 30^\\circ, 210^\\circ",
          "explanation": "These are the two solutions in the interval.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta = 30^\\circ, 210^\\circ$"
    }
  },
  {
    "id": "al.y2.pure.compound-double-angles.q052",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Compound and double angles",
    "subtopicId": "al.y2.pure.compound-double-angles",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "proof",
    "tags": ["compound angles", "identities", "proof"],
    "questionText": "Prove that $\\cos(A + B)\\cos(A - B) \\equiv \\cos^2 A - \\sin^2 B$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Expand both compound angles",
          "workingLatex": "\\cos(A + B) = \\cos A\\cos B - \\sin A\\sin B",
          "explanation": "The two brackets differ only in a sign, setting up a difference of squares.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the second bracket",
          "workingLatex": "\\cos(A - B) = \\cos A\\cos B + \\sin A\\sin B",
          "explanation": "The difference version flips the middle sign to a plus.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Multiply as a difference of squares",
          "workingLatex": "\\cos(A+B)\\cos(A-B) = (\\cos A\\cos B)^2 - (\\sin A\\sin B)^2",
          "explanation": "Using $(x-y)(x+y) = x^2 - y^2$ with $x = \\cos A\\cos B$ and $y = \\sin A\\sin B$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write out the squares",
          "workingLatex": "= \\cos^2 A\\cos^2 B - \\sin^2 A\\sin^2 B",
          "explanation": "Squaring each product gives these two terms.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Replace using the Pythagorean identity",
          "workingLatex": "\\cos^2 B = 1 - \\sin^2 B, \\quad \\sin^2 A = 1 - \\cos^2 A",
          "explanation": "We convert two of the factors to express everything via $\\cos^2 A$ and $\\sin^2 B$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute",
          "workingLatex": "= \\cos^2 A(1 - \\sin^2 B) - (1 - \\cos^2 A)\\sin^2 B",
          "explanation": "Inserting both replacements.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Expand",
          "workingLatex": "= \\cos^2 A - \\cos^2 A\\sin^2 B - \\sin^2 B + \\cos^2 A\\sin^2 B",
          "explanation": "Multiplying out both products.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Cancel and conclude",
          "workingLatex": "= \\cos^2 A - \\sin^2 B \\;\\blacksquare",
          "explanation": "The mixed terms cancel, leaving the required result.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\cos(A + B)\\cos(A - B) \\equiv \\cos^2 A - \\sin^2 B$"
    }
  },
  {
    "id": "al.y2.pure.compound-double-angles.q053",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Compound and double angles",
    "subtopicId": "al.y2.pure.compound-double-angles",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "value",
    "tags": ["double angle", "equations", "quadratic", "cosine"],
    "questionText": "Solve $3\\cos 2\\theta - \\cos\\theta + 2 = 0$ for $0^\\circ \\le \\theta < 360^\\circ$, giving answers to the nearest degree where necessary.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the cosine form",
          "workingLatex": "\\cos 2\\theta = 2\\cos^2\\theta - 1",
          "explanation": "The equation is otherwise in cosine, so this form gives a quadratic in $\\cos\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "3(2\\cos^2\\theta - 1) - \\cos\\theta + 2 = 0",
          "explanation": "Replacing $\\cos 2\\theta$ puts everything in cosine.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand and simplify",
          "workingLatex": "6\\cos^2\\theta - \\cos\\theta - 1 = 0",
          "explanation": "Multiplying out and combining $-3 + 2 = -1$ gives a quadratic.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Factorise",
          "workingLatex": "(3\\cos\\theta + 1)(2\\cos\\theta - 1) = 0",
          "explanation": "The factorisation checks out via the cross terms $-3\\cos\\theta + 2\\cos\\theta = -\\cos\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve the first factor",
          "workingLatex": "\\cos\\theta = -\\tfrac{1}{3} \\;\\Rightarrow\\; \\theta \\approx 109.5^\\circ, 250.5^\\circ",
          "explanation": "The reference angle is about $70.5^\\circ$; negative cosine gives quadrant II and III solutions.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve the second factor",
          "workingLatex": "\\cos\\theta = \\tfrac{1}{2} \\;\\Rightarrow\\; \\theta = 60^\\circ, 300^\\circ",
          "explanation": "Cosine one half gives quadrant I and IV solutions.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Collect all solutions",
          "workingLatex": "\\theta \\approx 60^\\circ, 110^\\circ, 250^\\circ, 300^\\circ",
          "explanation": "Combining both cases and rounding gives four solutions in the interval.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta \\approx 60^\\circ, 110^\\circ, 250^\\circ, 300^\\circ$"
    }
  },
  {
    "id": "al.y2.pure.compound-double-angles.q054",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Compound and double angles",
    "subtopicId": "al.y2.pure.compound-double-angles",
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "value",
    "tags": ["double angle", "tangent", "equations", "factorising"],
    "questionText": "Solve $\\tan 2\\theta = 3\\tan\\theta$ for $0^\\circ \\le \\theta < 360^\\circ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Expand the double angle",
          "workingLatex": "\\frac{2\\tan\\theta}{1 - \\tan^2\\theta} = 3\\tan\\theta",
          "explanation": "Using the tangent double angle formula gives an equation in $\\tan\\theta$ alone.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Let t stand for tangent",
          "workingLatex": "\\frac{2t}{1 - t^2} = 3t, \\quad t = \\tan\\theta",
          "explanation": "A substitution keeps the algebra clean.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Multiply through by the denominator",
          "workingLatex": "2t = 3t(1 - t^2)",
          "explanation": "Clearing the denominator (valid where $t^2 \\ne 1$) gives a polynomial equation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Expand and rearrange",
          "workingLatex": "2t = 3t - 3t^3 \\;\\Rightarrow\\; 3t^3 - t = 0",
          "explanation": "Bringing all terms to one side gives a cubic in $t$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Factorise",
          "workingLatex": "t(3t^2 - 1) = 0",
          "explanation": "Taking out the common factor $t$ splits the cubic.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve t = 0",
          "workingLatex": "\\tan\\theta = 0 \\;\\Rightarrow\\; \\theta = 0^\\circ, 180^\\circ",
          "explanation": "Tangent is zero at $0^\\circ$ and $180^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve the quadratic factor",
          "workingLatex": "t^2 = \\tfrac{1}{3} \\;\\Rightarrow\\; \\tan\\theta = \\pm\\frac{1}{\\sqrt3}",
          "explanation": "These values satisfy $t^2 \\ne 1$, so the earlier division was valid.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find those angles",
          "workingLatex": "\\theta = 30^\\circ, 150^\\circ, 210^\\circ, 330^\\circ",
          "explanation": "Tangent $\\pm\\frac{1}{\\sqrt3}$ gives one solution in each quadrant.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Collect all solutions",
          "workingLatex": "\\theta = 0^\\circ, 30^\\circ, 150^\\circ, 180^\\circ, 210^\\circ, 330^\\circ",
          "explanation": "Combining both factors gives six solutions in the interval.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta = 0^\\circ, 30^\\circ, 150^\\circ, 180^\\circ, 210^\\circ, 330^\\circ$"
    }
  },
  {
    "id": "al.y2.pure.compound-double-angles.q055",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Compound and double angles",
    "subtopicId": "al.y2.pure.compound-double-angles",
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "value",
    "tags": ["double angle", "equations", "factorising"],
    "questionText": "Solve $\\sin 4\\theta = \\cos 2\\theta$ for $0^\\circ \\le \\theta < 360^\\circ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write sin 4θ as a double angle of 2θ",
          "workingLatex": "\\sin 4\\theta = 2\\sin 2\\theta\\cos 2\\theta",
          "explanation": "Treating $4\\theta$ as twice $2\\theta$ introduces a shared $\\cos 2\\theta$ factor with the right-hand side.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rewrite the equation",
          "workingLatex": "2\\sin 2\\theta\\cos 2\\theta = \\cos 2\\theta",
          "explanation": "Both sides now contain $\\cos 2\\theta$, so we can factorise.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Move to one side and factor",
          "workingLatex": "\\cos 2\\theta(2\\sin 2\\theta - 1) = 0",
          "explanation": "Factoring rather than dividing keeps the $\\cos 2\\theta = 0$ solutions.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set the interval for the doubled angle",
          "workingLatex": "0^\\circ \\le 2\\theta < 720^\\circ",
          "explanation": "Both factors involve $2\\theta$, which ranges up to $720^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve the first factor",
          "workingLatex": "\\cos 2\\theta = 0 \\;\\Rightarrow\\; 2\\theta = 90^\\circ, 270^\\circ, 450^\\circ, 630^\\circ",
          "explanation": "Cosine is zero at these four values within $720^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Halve those",
          "workingLatex": "\\theta = 45^\\circ, 135^\\circ, 225^\\circ, 315^\\circ",
          "explanation": "Dividing each by $2$ gives four solutions.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve the second factor",
          "workingLatex": "\\sin 2\\theta = \\tfrac{1}{2} \\;\\Rightarrow\\; 2\\theta = 30^\\circ, 150^\\circ, 390^\\circ, 510^\\circ",
          "explanation": "Sine one half at these four values within $720^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Halve those",
          "workingLatex": "\\theta = 15^\\circ, 75^\\circ, 195^\\circ, 255^\\circ",
          "explanation": "Dividing each by $2$ gives four more solutions.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Collect all solutions",
          "workingLatex": "\\theta = 15^\\circ, 45^\\circ, 75^\\circ, 135^\\circ, 195^\\circ, 225^\\circ, 255^\\circ, 315^\\circ",
          "explanation": "Combining both factors gives eight solutions in the interval.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta = 15^\\circ, 45^\\circ, 75^\\circ, 135^\\circ, 195^\\circ, 225^\\circ, 255^\\circ, 315^\\circ$"
    }
  },
  {
    "id": "al.y2.pure.compound-double-angles.q056",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Compound and double angles",
    "subtopicId": "al.y2.pure.compound-double-angles",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": ["compound angles", "tangent", "given ratios"],
    "questionText": "Given that $\\tan A = 2$ and $\\tan B = 3$, find $\\tan(A - B)$ and hence the acute angle $B - A$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the tangent subtraction formula",
          "workingLatex": "\\tan(A - B) = \\frac{\\tan A - \\tan B}{1 + \\tan A\\tan B}",
          "explanation": "For a difference, the numerator subtracts and the denominator adds.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute the values",
          "workingLatex": "= \\frac{2 - 3}{1 + 2\\cdot 3}",
          "explanation": "Inserting $\\tan A = 2$ and $\\tan B = 3$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify",
          "workingLatex": "= \\frac{-1}{7}",
          "explanation": "The numerator is $-1$ and the denominator is $7$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Interpret the negative sign",
          "workingLatex": "\\tan(A - B) = -\\tfrac{1}{7} \\;\\Rightarrow\\; A - B < 0",
          "explanation": "A negative tangent here reflects that $A < B$, so $A - B$ is negative.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Consider the positive difference",
          "workingLatex": "\\tan(B - A) = \\frac{1}{7}",
          "explanation": "Reversing the order flips the sign, giving a positive tangent for the acute angle $B - A$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the acute angle",
          "workingLatex": "B - A = \\tan^{-1}\\tfrac{1}{7} \\approx 8.1^\\circ",
          "explanation": "The inverse tangent gives the small acute angle between the two directions.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\tan(A - B) = -\\dfrac{1}{7}$, and $B - A \\approx 8.1^\\circ$."
    }
  },
  {
    "id": "al.y2.pure.compound-double-angles.q057",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Compound and double angles",
    "subtopicId": "al.y2.pure.compound-double-angles",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "proof",
    "tags": ["double angle", "identities", "proof", "cotangent"],
    "questionText": "Prove that $\\dfrac{1 + \\cos 2\\theta}{\\sin 2\\theta} \\equiv \\cot\\theta$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the cosine form for the numerator",
          "workingLatex": "1 + \\cos 2\\theta = 1 + (2\\cos^2\\theta - 1)",
          "explanation": "Using $\\cos 2\\theta = 2\\cos^2\\theta - 1$ makes the constants cancel and leaves a cosine squared.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Simplify the numerator",
          "workingLatex": "1 + \\cos 2\\theta = 2\\cos^2\\theta",
          "explanation": "The $+1$ and $-1$ cancel, giving $2\\cos^2\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand the denominator",
          "workingLatex": "\\sin 2\\theta = 2\\sin\\theta\\cos\\theta",
          "explanation": "The denominator is the standard double angle for sine.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Form the fraction",
          "workingLatex": "\\frac{1 + \\cos 2\\theta}{\\sin 2\\theta} = \\frac{2\\cos^2\\theta}{2\\sin\\theta\\cos\\theta}",
          "explanation": "Substituting both parts gives a fraction ready to cancel.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Cancel common factors",
          "workingLatex": "= \\frac{\\cos\\theta}{\\sin\\theta}",
          "explanation": "Cancelling the $2$ and one cosine leaves cosine over sine.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Recognise the result",
          "workingLatex": "= \\cot\\theta \\;\\blacksquare",
          "explanation": "Cosine over sine is cotangent, completing the proof.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{1 + \\cos 2\\theta}{\\sin 2\\theta} \\equiv \\cot\\theta$"
    }
  },
  {
    "id": "al.y2.pure.compound-double-angles.q058",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Compound and double angles",
    "subtopicId": "al.y2.pure.compound-double-angles",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": ["double angle", "equations", "quadratic"],
    "questionText": "Solve $\\cos 2\\theta + \\cos\\theta + 1 = 0$ for $0^\\circ \\le \\theta < 360^\\circ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the cosine form",
          "workingLatex": "\\cos 2\\theta = 2\\cos^2\\theta - 1",
          "explanation": "The equation is in cosine, so this form gives a quadratic in $\\cos\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "2\\cos^2\\theta - 1 + \\cos\\theta + 1 = 0",
          "explanation": "Replacing $\\cos 2\\theta$ puts everything in cosine.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify",
          "workingLatex": "2\\cos^2\\theta + \\cos\\theta = 0",
          "explanation": "The $-1$ and $+1$ cancel, leaving a factorable expression.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Factor out cosine",
          "workingLatex": "\\cos\\theta(2\\cos\\theta + 1) = 0",
          "explanation": "The common factor $\\cos\\theta$ splits the equation into two cases.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve the first factor",
          "workingLatex": "\\cos\\theta = 0 \\;\\Rightarrow\\; \\theta = 90^\\circ, 270^\\circ",
          "explanation": "Cosine is zero at $90^\\circ$ and $270^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve the second factor",
          "workingLatex": "\\cos\\theta = -\\tfrac{1}{2} \\;\\Rightarrow\\; \\theta = 120^\\circ, 240^\\circ",
          "explanation": "Negative cosine one half gives quadrant II and III solutions.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Collect all solutions",
          "workingLatex": "\\theta = 90^\\circ, 120^\\circ, 240^\\circ, 270^\\circ",
          "explanation": "Combining both cases gives four solutions in the interval.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta = 90^\\circ, 120^\\circ, 240^\\circ, 270^\\circ$"
    }
  },
  {
    "id": "al.y2.pure.compound-double-angles.q059",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Compound and double angles",
    "subtopicId": "al.y2.pure.compound-double-angles",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "proof",
    "tags": ["triple angle", "identities", "proof"],
    "questionText": "Prove that $\\dfrac{\\sin 3\\theta}{\\sin\\theta} - \\dfrac{\\cos 3\\theta}{\\cos\\theta} \\equiv 2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Use the triple angle formula for sine",
          "workingLatex": "\\sin 3\\theta = 3\\sin\\theta - 4\\sin^3\\theta",
          "explanation": "The triple angle results let each fraction simplify to a polynomial in a single function.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Simplify the first fraction",
          "workingLatex": "\\frac{\\sin 3\\theta}{\\sin\\theta} = 3 - 4\\sin^2\\theta",
          "explanation": "Dividing each term by $\\sin\\theta$ removes the denominator.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use the triple angle formula for cosine",
          "workingLatex": "\\cos 3\\theta = 4\\cos^3\\theta - 3\\cos\\theta",
          "explanation": "The matching cosine formula handles the second fraction.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the second fraction",
          "workingLatex": "\\frac{\\cos 3\\theta}{\\cos\\theta} = 4\\cos^2\\theta - 3",
          "explanation": "Dividing each term by $\\cos\\theta$ removes the denominator.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Subtract the two results",
          "workingLatex": "(3 - 4\\sin^2\\theta) - (4\\cos^2\\theta - 3)",
          "explanation": "Substituting both simplified fractions into the expression.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Expand and group",
          "workingLatex": "= 6 - 4\\sin^2\\theta - 4\\cos^2\\theta",
          "explanation": "Combining the constants gives $6$, with the two squared terms sharing a factor of $-4$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Apply the Pythagorean identity",
          "workingLatex": "= 6 - 4(\\sin^2\\theta + \\cos^2\\theta) = 6 - 4",
          "explanation": "The bracket equals $1$, so the subtraction becomes $6 - 4$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Conclude",
          "workingLatex": "= 2 \\;\\blacksquare",
          "explanation": "The expression simplifies to the constant $2$, as required.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{\\sin 3\\theta}{\\sin\\theta} - \\dfrac{\\cos 3\\theta}{\\cos\\theta} \\equiv 2$"
    }
  },
  {
    "id": "al.y2.pure.compound-double-angles.q060",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Compound and double angles",
    "subtopicId": "al.y2.pure.compound-double-angles",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "value",
    "tags": ["double angle", "given ratio", "repeated"],
    "questionText": "Given that $\\cos\\theta = \\dfrac{2}{3}$, find the exact values of $\\cos 2\\theta$ and $\\cos 4\\theta$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Use the cosine-only double angle form",
          "workingLatex": "\\cos 2\\theta = 2\\cos^2\\theta - 1",
          "explanation": "This form uses the given cosine directly with no need for sine.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "\\cos 2\\theta = 2\\left(\\frac{2}{3}\\right)^2 - 1 = 2\\cdot\\frac{4}{9} - 1",
          "explanation": "Squaring $\\frac{2}{3}$ gives $\\frac{4}{9}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate cos 2θ",
          "workingLatex": "\\cos 2\\theta = \\frac{8}{9} - 1 = -\\frac{1}{9}",
          "explanation": "Subtracting gives $-\\frac{1}{9}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Treat cos 4θ as a double angle of 2θ",
          "workingLatex": "\\cos 4\\theta = 2\\cos^2 2\\theta - 1",
          "explanation": "Since $4\\theta = 2(2\\theta)$, we reapply the double angle formula using the value just found.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute cos 2θ",
          "workingLatex": "\\cos 4\\theta = 2\\left(-\\frac{1}{9}\\right)^2 - 1 = 2\\cdot\\frac{1}{81} - 1",
          "explanation": "Squaring $-\\frac{1}{9}$ gives $\\frac{1}{81}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate cos 4θ",
          "workingLatex": "\\cos 4\\theta = \\frac{2}{81} - 1 = -\\frac{79}{81}",
          "explanation": "Subtracting from $1$ (as $\\frac{81}{81}$) gives $-\\frac{79}{81}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the results",
          "workingLatex": "\\cos 2\\theta = -\\frac{1}{9}, \\quad \\cos 4\\theta = -\\frac{79}{81}",
          "explanation": "Both are exact, obtained by applying the double angle formula twice.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\cos 2\\theta = -\\dfrac{1}{9}, \\quad \\cos 4\\theta = -\\dfrac{79}{81}$"
    }
  },
  {
    "id": "al.y2.pure.compound-double-angles.q061",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Compound and double angles",
    "subtopicId": "al.y2.pure.compound-double-angles",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "proof",
    "tags": ["double angle", "identities", "proof", "difference of squares"],
    "questionText": "Prove that $\\cos^4\\theta - \\sin^4\\theta \\equiv \\cos 2\\theta$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise a difference of squares",
          "workingLatex": "\\cos^4\\theta - \\sin^4\\theta = (\\cos^2\\theta)^2 - (\\sin^2\\theta)^2",
          "explanation": "The fourth powers are squares of squares, so a difference-of-squares factorisation applies.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Factorise",
          "workingLatex": "= (\\cos^2\\theta - \\sin^2\\theta)(\\cos^2\\theta + \\sin^2\\theta)",
          "explanation": "Applying $a^2 - b^2 = (a-b)(a+b)$ gives two brackets.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify the second bracket",
          "workingLatex": "\\cos^2\\theta + \\sin^2\\theta = 1",
          "explanation": "The second bracket is the Pythagorean identity, equal to $1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute",
          "workingLatex": "= \\cos^2\\theta - \\sin^2\\theta",
          "explanation": "Multiplying by $1$ leaves only the first bracket.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Recognise the double angle",
          "workingLatex": "= \\cos 2\\theta \\;\\blacksquare",
          "explanation": "This is the first form of $\\cos 2\\theta$, completing the proof.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\cos^4\\theta - \\sin^4\\theta \\equiv \\cos 2\\theta$"
    }
  },
  {
    "id": "al.y2.pure.compound-double-angles.q062",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Compound and double angles",
    "subtopicId": "al.y2.pure.compound-double-angles",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "value",
    "tags": ["triple angle", "equations", "factorising"],
    "questionText": "Solve $\\sin 3\\theta = \\sin\\theta$ for $0^\\circ \\le \\theta < 360^\\circ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Use the triple angle formula",
          "workingLatex": "3\\sin\\theta - 4\\sin^3\\theta = \\sin\\theta",
          "explanation": "Expanding $\\sin 3\\theta$ writes the equation in $\\sin\\theta$ alone.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Move everything to one side",
          "workingLatex": "2\\sin\\theta - 4\\sin^3\\theta = 0",
          "explanation": "Subtracting $\\sin\\theta$ leaves a factorable expression.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Factor out common terms",
          "workingLatex": "2\\sin\\theta(1 - 2\\sin^2\\theta) = 0",
          "explanation": "Taking out $2\\sin\\theta$ splits the equation into two cases.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve the first factor",
          "workingLatex": "\\sin\\theta = 0 \\;\\Rightarrow\\; \\theta = 0^\\circ, 180^\\circ",
          "explanation": "Sine is zero at $0^\\circ$ and $180^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve the second factor",
          "workingLatex": "\\sin^2\\theta = \\tfrac{1}{2} \\;\\Rightarrow\\; \\sin\\theta = \\pm\\frac{1}{\\sqrt2}",
          "explanation": "Setting the bracket to zero gives sine squared equal to one half.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find those angles",
          "workingLatex": "\\theta = 45^\\circ, 135^\\circ, 225^\\circ, 315^\\circ",
          "explanation": "Sine $\\pm\\frac{1}{\\sqrt2}$ gives one solution in each quadrant.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Collect all solutions",
          "workingLatex": "\\theta = 0^\\circ, 45^\\circ, 135^\\circ, 180^\\circ, 225^\\circ, 315^\\circ",
          "explanation": "Combining both cases gives six solutions in the interval.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta = 0^\\circ, 45^\\circ, 135^\\circ, 180^\\circ, 225^\\circ, 315^\\circ$"
    }
  },
  {
    "id": "al.y2.pure.compound-double-angles.q063",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Compound and double angles",
    "subtopicId": "al.y2.pure.compound-double-angles",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": ["double angle", "tangent", "given ratio"],
    "questionText": "Given that $\\tan\\theta = \\dfrac{3}{4}$ and $\\theta$ is acute, use the $t$-formulae to find the exact values of $\\sin 2\\theta$ and $\\cos 2\\theta$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the t-formulae",
          "workingLatex": "\\sin 2\\theta = \\frac{2t}{1 + t^2}, \\quad \\cos 2\\theta = \\frac{1 - t^2}{1 + t^2}, \\quad t = \\tan\\theta",
          "explanation": "These express the double angles directly in terms of $\\tan\\theta$, avoiding the need to find sine and cosine separately.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Compute the common denominator",
          "workingLatex": "1 + t^2 = 1 + \\frac{9}{16} = \\frac{25}{16}",
          "explanation": "Both formulae share the denominator $1 + t^2$, so we evaluate it once.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find sin 2θ numerator",
          "workingLatex": "2t = 2\\cdot\\frac{3}{4} = \\frac{3}{2}",
          "explanation": "The numerator of the sine formula is $2t$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate sin 2θ",
          "workingLatex": "\\sin 2\\theta = \\frac{3/2}{25/16} = \\frac{3}{2}\\cdot\\frac{16}{25} = \\frac{24}{25}",
          "explanation": "Dividing by $\\frac{25}{16}$ gives $\\frac{24}{25}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find cos 2θ numerator",
          "workingLatex": "1 - t^2 = 1 - \\frac{9}{16} = \\frac{7}{16}",
          "explanation": "The numerator of the cosine formula is $1 - t^2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate cos 2θ",
          "workingLatex": "\\cos 2\\theta = \\frac{7/16}{25/16} = \\frac{7}{25}",
          "explanation": "The common denominator cancels, leaving $\\frac{7}{25}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check consistency",
          "workingLatex": "\\left(\\tfrac{24}{25}\\right)^2 + \\left(\\tfrac{7}{25}\\right)^2 = 1 \\;\\checkmark",
          "explanation": "The two answers satisfy the Pythagorean identity, confirming they are correct.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sin 2\\theta = \\dfrac{24}{25}, \\quad \\cos 2\\theta = \\dfrac{7}{25}$"
    }
  },
  {
    "id": "al.y2.pure.compound-double-angles.q064",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Compound and double angles",
    "subtopicId": "al.y2.pure.compound-double-angles",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "value",
    "tags": ["double angle", "equations", "repeated root"],
    "questionText": "Solve $2\\cos 2\\theta + 4\\sin\\theta = 3$ for $0^\\circ \\le \\theta < 360^\\circ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the sine form of cos 2θ",
          "workingLatex": "\\cos 2\\theta = 1 - 2\\sin^2\\theta",
          "explanation": "The remaining term is in sine, so this form gives a quadratic in $\\sin\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "2(1 - 2\\sin^2\\theta) + 4\\sin\\theta = 3",
          "explanation": "Replacing $\\cos 2\\theta$ puts everything in sine.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand",
          "workingLatex": "2 - 4\\sin^2\\theta + 4\\sin\\theta = 3",
          "explanation": "Multiplying out the bracket.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rearrange to standard form",
          "workingLatex": "4\\sin^2\\theta - 4\\sin\\theta + 1 = 0",
          "explanation": "Collecting terms gives a quadratic that turns out to be a perfect square.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Factorise as a perfect square",
          "workingLatex": "(2\\sin\\theta - 1)^2 = 0",
          "explanation": "The quadratic is a perfect square, giving a repeated factor.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve",
          "workingLatex": "\\sin\\theta = \\tfrac{1}{2}",
          "explanation": "The repeated root gives a single value of sine.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the angles",
          "workingLatex": "\\theta = 30^\\circ, 150^\\circ",
          "explanation": "Sine one half gives solutions in quadrants I and II.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the solutions",
          "workingLatex": "\\theta = 30^\\circ, 150^\\circ",
          "explanation": "These are the only solutions; the repeated factor does not add extra ones.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta = 30^\\circ, 150^\\circ$"
    }
  },
  {
    "id": "al.y2.pure.compound-double-angles.q065",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Compound and double angles",
    "subtopicId": "al.y2.pure.compound-double-angles",
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "proof",
    "tags": ["double angle", "identities", "proof", "tangent"],
    "questionText": "Prove that $\\dfrac{1 - \\cos 2\\theta + \\sin 2\\theta}{1 + \\cos 2\\theta + \\sin 2\\theta} \\equiv \\tan\\theta$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Replace the double angles in the numerator",
          "workingLatex": "1 - \\cos 2\\theta = 2\\sin^2\\theta, \\quad \\sin 2\\theta = 2\\sin\\theta\\cos\\theta",
          "explanation": "Using $\\cos 2\\theta = 1 - 2\\sin^2\\theta$ for the numerator makes a sine-squared term, which pairs well with the sine double angle.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the numerator",
          "workingLatex": "1 - \\cos 2\\theta + \\sin 2\\theta = 2\\sin^2\\theta + 2\\sin\\theta\\cos\\theta",
          "explanation": "Substituting both pieces gives the full numerator.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Factor the numerator",
          "workingLatex": "= 2\\sin\\theta(\\sin\\theta + \\cos\\theta)",
          "explanation": "Taking out $2\\sin\\theta$ exposes the common bracket.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Replace the double angles in the denominator",
          "workingLatex": "1 + \\cos 2\\theta = 2\\cos^2\\theta, \\quad \\sin 2\\theta = 2\\sin\\theta\\cos\\theta",
          "explanation": "Using $\\cos 2\\theta = 2\\cos^2\\theta - 1$ for the denominator makes a cosine-squared term.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the denominator",
          "workingLatex": "1 + \\cos 2\\theta + \\sin 2\\theta = 2\\cos^2\\theta + 2\\sin\\theta\\cos\\theta",
          "explanation": "Substituting both pieces gives the full denominator.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Factor the denominator",
          "workingLatex": "= 2\\cos\\theta(\\cos\\theta + \\sin\\theta)",
          "explanation": "Taking out $2\\cos\\theta$ exposes the same bracket as the numerator.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Form the ratio",
          "workingLatex": "\\frac{2\\sin\\theta(\\sin\\theta + \\cos\\theta)}{2\\cos\\theta(\\cos\\theta + \\sin\\theta)}",
          "explanation": "Placing the factored numerator over the factored denominator reveals the common factors.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Cancel common factors",
          "workingLatex": "= \\frac{\\sin\\theta}{\\cos\\theta}",
          "explanation": "The $2$ and the bracket $(\\sin\\theta + \\cos\\theta)$ cancel, leaving sine over cosine.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conclude",
          "workingLatex": "= \\tan\\theta \\;\\blacksquare",
          "explanation": "This is tangent, matching the right-hand side and completing the proof.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{1 - \\cos 2\\theta + \\sin 2\\theta}{1 + \\cos 2\\theta + \\sin 2\\theta} \\equiv \\tan\\theta$"
    }
  },
  {
    "id": "al.y2.pure.compound-double-angles.q066",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Compound and double angles",
    "subtopicId": "al.y2.pure.compound-double-angles",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "value",
    "tags": ["compound angles", "given ratios", "quadrants", "sine"],
    "questionText": "Given that $\\cos A = -\\dfrac{4}{5}$ with $A$ in the second quadrant, and $\\tan B = \\dfrac{5}{12}$ with $B$ in the third quadrant, find the exact value of $\\sin(A - B)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the compound angle formula",
          "workingLatex": "\\sin(A - B) = \\sin A\\cos B - \\cos A\\sin B",
          "explanation": "We need $\\sin A$, $\\cos B$ and $\\sin B$; the quadrant data fixes every sign.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find sin A",
          "workingLatex": "\\sin A = +\\sqrt{1 - \\tfrac{16}{25}} = \\frac{3}{5}",
          "explanation": "In the second quadrant sine is positive, so $\\sin A = \\frac{3}{5}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set up B from its tangent",
          "workingLatex": "\\tan B = \\frac{5}{12} \\;\\Rightarrow\\; \\text{ref triangle } 5,12,13",
          "explanation": "A tangent of $\\frac{5}{12}$ corresponds to a $5$-$12$-$13$ triangle; the quadrant sets the signs.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Assign signs for the third quadrant",
          "workingLatex": "\\sin B = -\\frac{5}{13}, \\quad \\cos B = -\\frac{12}{13}",
          "explanation": "In the third quadrant both sine and cosine are negative, giving these values.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute all values",
          "workingLatex": "\\sin(A - B) = \\frac{3}{5}\\left(-\\frac{12}{13}\\right) - \\left(-\\frac{4}{5}\\right)\\left(-\\frac{5}{13}\\right)",
          "explanation": "Inserting the four values, carefully tracking signs.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Multiply out",
          "workingLatex": "= -\\frac{36}{65} - \\frac{20}{65}",
          "explanation": "The first product is negative; the second is a negative times a negative times the leading minus, giving another negative.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Combine",
          "workingLatex": "= -\\frac{56}{65}",
          "explanation": "Adding the two terms gives $-\\frac{56}{65}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sin(A - B) = -\\dfrac{56}{65}$"
    }
  },
  {
    "id": "al.y2.pure.compound-double-angles.q067",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Compound and double angles",
    "subtopicId": "al.y2.pure.compound-double-angles",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": ["double angle", "equations", "quadratic", "rejecting roots"],
    "questionText": "Solve $\\cos 2\\theta + 3 = 5\\cos\\theta$ for $0^\\circ \\le \\theta < 360^\\circ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the cosine form",
          "workingLatex": "\\cos 2\\theta = 2\\cos^2\\theta - 1",
          "explanation": "The rest of the equation is in cosine, so this form gives a quadratic in $\\cos\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "2\\cos^2\\theta - 1 + 3 = 5\\cos\\theta",
          "explanation": "Replacing $\\cos 2\\theta$ puts everything in cosine.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange to standard form",
          "workingLatex": "2\\cos^2\\theta - 5\\cos\\theta + 2 = 0",
          "explanation": "Collecting terms gives a quadratic in $\\cos\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Factorise",
          "workingLatex": "(2\\cos\\theta - 1)(\\cos\\theta - 2) = 0",
          "explanation": "The factorisation checks out via the cross terms.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Reject the impossible root",
          "workingLatex": "\\cos\\theta = 2 \\text{ rejected since } |\\cos\\theta| \\le 1",
          "explanation": "Cosine cannot exceed $1$, so that factor gives no solutions.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve the valid factor",
          "workingLatex": "\\cos\\theta = \\tfrac{1}{2} \\;\\Rightarrow\\; \\theta = 60^\\circ, 300^\\circ",
          "explanation": "Cosine one half gives quadrant I and IV solutions.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the solutions",
          "workingLatex": "\\theta = 60^\\circ, 300^\\circ",
          "explanation": "These are the only solutions in the interval.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta = 60^\\circ, 300^\\circ$"
    }
  },
  {
    "id": "al.y2.pure.compound-double-angles.q068",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Compound and double angles",
    "subtopicId": "al.y2.pure.compound-double-angles",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": ["double angle", "equations", "factorising"],
    "questionText": "Solve $3 - 3\\cos 2\\theta = 2\\sin\\theta$ for $0^\\circ \\le \\theta < 360^\\circ$, giving answers to the nearest degree where necessary.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the sine form of cos 2θ",
          "workingLatex": "\\cos 2\\theta = 1 - 2\\sin^2\\theta",
          "explanation": "The right side is in sine, so this form gives an equation in sine.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "3 - 3(1 - 2\\sin^2\\theta) = 2\\sin\\theta",
          "explanation": "Replacing $\\cos 2\\theta$ puts everything in sine.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand and simplify",
          "workingLatex": "3 - 3 + 6\\sin^2\\theta = 2\\sin\\theta \\;\\Rightarrow\\; 6\\sin^2\\theta = 2\\sin\\theta",
          "explanation": "The constants cancel, leaving a simple relation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Move to one side and factor",
          "workingLatex": "6\\sin^2\\theta - 2\\sin\\theta = 0 \\;\\Rightarrow\\; 2\\sin\\theta(3\\sin\\theta - 1) = 0",
          "explanation": "Factoring keeps the $\\sin\\theta = 0$ solutions that dividing would discard.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve the first factor",
          "workingLatex": "\\sin\\theta = 0 \\;\\Rightarrow\\; \\theta = 0^\\circ, 180^\\circ",
          "explanation": "Sine is zero at $0^\\circ$ and $180^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve the second factor",
          "workingLatex": "\\sin\\theta = \\tfrac{1}{3} \\;\\Rightarrow\\; \\theta \\approx 19.5^\\circ, 160.5^\\circ",
          "explanation": "The reference angle is about $19.5^\\circ$; positive sine gives quadrant I and II solutions.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Collect all solutions",
          "workingLatex": "\\theta \\approx 0^\\circ, 20^\\circ, 160^\\circ, 180^\\circ",
          "explanation": "Combining both cases and rounding gives four solutions in the interval.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta \\approx 0^\\circ, 20^\\circ, 160^\\circ, 180^\\circ$"
    }
  },
  {
    "id": "al.y2.pure.compound-double-angles.q069",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Compound and double angles",
    "subtopicId": "al.y2.pure.compound-double-angles",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": ["compound angles", "exact values", "tangent", "surds"],
    "questionText": "Find the exact value of $\\tan 105^\\circ$, writing $105^\\circ = 60^\\circ + 45^\\circ$. Give your answer in the form $-(a + b\\sqrt{3})$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Apply the tangent addition formula",
          "workingLatex": "\\tan 105^\\circ = \\frac{\\tan 60^\\circ + \\tan 45^\\circ}{1 - \\tan 60^\\circ\\tan 45^\\circ}",
          "explanation": "Using $A = 60^\\circ$ and $B = 45^\\circ$ sets up the calculation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute the exact values",
          "workingLatex": "= \\frac{\\sqrt3 + 1}{1 - \\sqrt3\\cdot 1}",
          "explanation": "We use $\\tan 60^\\circ = \\sqrt3$ and $\\tan 45^\\circ = 1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify the denominator",
          "workingLatex": "= \\frac{\\sqrt3 + 1}{1 - \\sqrt3}",
          "explanation": "The denominator is $1 - \\sqrt3$, which is negative.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rationalise using the conjugate",
          "workingLatex": "= \\frac{(\\sqrt3 + 1)(1 + \\sqrt3)}{(1 - \\sqrt3)(1 + \\sqrt3)}",
          "explanation": "Multiplying by $\\frac{1 + \\sqrt3}{1 + \\sqrt3}$ clears the surd from the denominator.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Expand the numerator",
          "workingLatex": "(\\sqrt3 + 1)(1 + \\sqrt3) = \\sqrt3 + 3 + 1 + \\sqrt3 = 4 + 2\\sqrt3",
          "explanation": "Expanding the product gives $4 + 2\\sqrt3$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Expand the denominator",
          "workingLatex": "(1 - \\sqrt3)(1 + \\sqrt3) = 1 - 3 = -2",
          "explanation": "The conjugate product is $-2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify",
          "workingLatex": "= \\frac{4 + 2\\sqrt3}{-2} = -(2 + \\sqrt3)",
          "explanation": "Dividing by $-2$ gives the exact value in the required form.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\tan 105^\\circ = -(2 + \\sqrt3)$"
    }
  },
  {
    "id": "al.y2.pure.compound-double-angles.q070",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Compound and double angles",
    "subtopicId": "al.y2.pure.compound-double-angles",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "proof",
    "tags": ["compound angles", "identities", "proof", "tangent"],
    "questionText": "Prove that $\\dfrac{\\sin(A + B)}{\\sin(A - B)} \\equiv \\dfrac{\\tan A + \\tan B}{\\tan A - \\tan B}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Expand the numerator",
          "workingLatex": "\\sin(A + B) = \\sin A\\cos B + \\cos A\\sin B",
          "explanation": "We write out both compound angles, aiming to divide through by $\\cos A\\cos B$ to create tangents.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expand the denominator",
          "workingLatex": "\\sin(A - B) = \\sin A\\cos B - \\cos A\\sin B",
          "explanation": "The difference version flips the middle sign.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the ratio",
          "workingLatex": "\\frac{\\sin(A+B)}{\\sin(A-B)} = \\frac{\\sin A\\cos B + \\cos A\\sin B}{\\sin A\\cos B - \\cos A\\sin B}",
          "explanation": "Placing the expansions over each other prepares for a common division.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Divide every term by cos A cos B",
          "workingLatex": "= \\frac{\\frac{\\sin A\\cos B}{\\cos A\\cos B} + \\frac{\\cos A\\sin B}{\\cos A\\cos B}}{\\frac{\\sin A\\cos B}{\\cos A\\cos B} - \\frac{\\cos A\\sin B}{\\cos A\\cos B}}",
          "explanation": "Dividing numerator and denominator by the same quantity $\\cos A\\cos B$ leaves the ratio unchanged but exposes tangents.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify each fraction",
          "workingLatex": "= \\frac{\\tan A + \\tan B}{\\tan A - \\tan B}",
          "explanation": "Each term reduces: for example $\\frac{\\sin A\\cos B}{\\cos A\\cos B} = \\tan A$ and $\\frac{\\cos A\\sin B}{\\cos A\\cos B} = \\tan B$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclude",
          "workingLatex": "\\frac{\\sin(A + B)}{\\sin(A - B)} \\equiv \\frac{\\tan A + \\tan B}{\\tan A - \\tan B} \\;\\blacksquare",
          "explanation": "The left-hand side equals the right-hand side, completing the proof.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{\\sin(A + B)}{\\sin(A - B)} \\equiv \\dfrac{\\tan A + \\tan B}{\\tan A - \\tan B}$"
    }
  }
];
