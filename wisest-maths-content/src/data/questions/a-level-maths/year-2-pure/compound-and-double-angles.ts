import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "id": "al.y2.pure.compound-double-angles.q001",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Compound and double angles",
    "subtopicId": "al.y2.pure.compound-double-angles",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "tags": [
      "compound angle",
      "addition formulae",
      "recall"
    ],
    "questionText": "Write down the six compound-angle (addition) formulae for $\\sin(A+B)$, $\\sin(A-B)$, $\\cos(A+B)$, $\\cos(A-B)$, $\\tan(A+B)$ and $\\tan(A-B)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the sine addition formula",
          "workingLatex": "\\sin(A+B) = \\sin A\\cos B + \\cos A\\sin B",
          "explanation": "The sine of a sum mixes the two angles so that each term pairs a sine with a cosine. A helpful way to remember it is 'sine-cosine plus cosine-sine', and the sign in the middle matches the sign inside $(A+B)$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the sine subtraction formula",
          "workingLatex": "\\sin(A-B) = \\sin A\\cos B - \\cos A\\sin B",
          "explanation": "Replacing $B$ with $-B$ flips the sign of the second term because sine is an odd function, so the middle plus becomes a minus for the difference.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the cosine addition formula",
          "workingLatex": "\\cos(A+B) = \\cos A\\cos B - \\sin A\\sin B",
          "explanation": "For cosine the two terms are 'cosine-cosine' and 'sine-sine', and crucially the middle sign is the opposite of the one inside the bracket, so $A+B$ gives a minus.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the cosine subtraction formula",
          "workingLatex": "\\cos(A-B) = \\cos A\\cos B + \\sin A\\sin B",
          "explanation": "For the difference the cosine formula takes a plus, again the opposite sign to the $-$ inside $(A-B)$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the tangent addition formula",
          "workingLatex": "\\tan(A+B) = \\dfrac{\\tan A + \\tan B}{1 - \\tan A\\tan B}",
          "explanation": "The tangent formula comes from dividing the sine formula by the cosine formula; the numerator carries the sign of the bracket and the denominator carries the opposite sign.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the tangent subtraction formula",
          "workingLatex": "\\tan(A-B) = \\dfrac{\\tan A - \\tan B}{1 + \\tan A\\tan B}",
          "explanation": "For the difference the numerator takes a minus and the denominator a plus, mirroring the sign rule seen in the other formulae.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Summarise the sign pattern compactly",
          "workingLatex": "\\sin(A\\pm B) = \\sin A\\cos B \\pm \\cos A\\sin B, \\qquad \\cos(A\\pm B) = \\cos A\\cos B \\mp \\sin A\\sin B",
          "explanation": "Written compactly with $\\pm$ and $\\mp$, the pattern is easy to recall: sine keeps the same sign as the bracket, while cosine takes the opposite sign.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Sanity-check with a known value",
          "workingLatex": "\\cos(A-A) = \\cos A\\cos A + \\sin A\\sin A = \\cos^2 A + \\sin^2 A = 1",
          "explanation": "Setting $B=A$ in the cosine-difference formula should give $\\cos 0^\\circ = 1$, and it does, confirming the signs have been recalled correctly.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sin(A\\pm B)=\\sin A\\cos B\\pm\\cos A\\sin B$, $\\cos(A\\pm B)=\\cos A\\cos B\\mp\\sin A\\sin B$, and $\\tan(A\\pm B)=\\dfrac{\\tan A\\pm\\tan B}{1\\mp\\tan A\\tan B}$."
    }
  },
  {
    "id": "al.y2.pure.compound-double-angles.q002",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Compound and double angles",
    "subtopicId": "al.y2.pure.compound-double-angles",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "proof",
    "tags": [
      "double angle",
      "derivation",
      "proof"
    ],
    "questionText": "Starting from the addition formulae $\\sin(A+B)=\\sin A\\cos B+\\cos A\\sin B$ and $\\cos(A+B)=\\cos A\\cos B-\\sin A\\sin B$, show by setting $B=A$ that $\\sin 2A = 2\\sin A\\cos A$ and $\\cos 2A = \\cos^2 A - \\sin^2 A$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the sine addition formula",
          "workingLatex": "\\sin(A+B) = \\sin A\\cos B + \\cos A\\sin B",
          "explanation": "We begin with the addition formula for sine, which is our known starting result.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set B equal to A",
          "workingLatex": "\\sin(A+A) = \\sin A\\cos A + \\cos A\\sin A",
          "explanation": "Because $2A = A+A$, a double angle is just a sum of two equal angles, so we replace every $B$ with $A$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify to the sine double angle",
          "workingLatex": "\\sin 2A = 2\\sin A\\cos A",
          "explanation": "The two terms on the right are identical, so they add to give twice $\\sin A\\cos A$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the cosine addition formula",
          "workingLatex": "\\cos(A+B) = \\cos A\\cos B - \\sin A\\sin B",
          "explanation": "Now take the addition formula for cosine as the starting point for the second identity.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set B equal to A",
          "workingLatex": "\\cos(A+A) = \\cos A\\cos A - \\sin A\\sin A",
          "explanation": "Again set $B=A$ so that the sum $A+A$ becomes the double angle $2A$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify to the cosine double angle",
          "workingLatex": "\\cos 2A = \\cos^2 A - \\sin^2 A",
          "explanation": "Writing $\\cos A\\cos A=\\cos^2 A$ and $\\sin A\\sin A=\\sin^2 A$ gives the standard form of $\\cos 2A$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Note the equivalent cosine forms",
          "workingLatex": "\\cos 2A = 2\\cos^2 A - 1 = 1 - 2\\sin^2 A",
          "explanation": "Using $\\sin^2 A+\\cos^2 A=1$ to replace one of the squares gives two further useful versions of the same identity.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the results",
          "workingLatex": "\\sin 2A = 2\\sin A\\cos A, \\qquad \\cos 2A = \\cos^2 A - \\sin^2 A",
          "explanation": "These are exactly the double-angle formulae, now shown to be the special case $B=A$ of the addition formulae, as required.",
          "diagram": null
        }
      ],
      "finalAnswer": "By setting $B=A$ we obtain $\\sin 2A = 2\\sin A\\cos A$ and $\\cos 2A = \\cos^2 A - \\sin^2 A$ (equivalently $2\\cos^2 A-1$ or $1-2\\sin^2 A$)."
    }
  },
  {
    "id": "al.y2.pure.compound-double-angles.q003",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Compound and double angles",
    "subtopicId": "al.y2.pure.compound-double-angles",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "exact",
    "tags": [
      "compound angle",
      "addition formulae",
      "substitution"
    ],
    "questionText": "Given that $\\sin A = \\tfrac{3}{5}$, $\\cos A = \\tfrac{4}{5}$, $\\sin B = \\tfrac{5}{13}$ and $\\cos B = \\tfrac{12}{13}$, find the exact value of $\\sin(A+B)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the correct formula",
          "workingLatex": "\\sin(A+B) = \\sin A\\cos B + \\cos A\\sin B",
          "explanation": "This is the addition formula for sine; it needs a sine and a cosine from each angle, all four of which are supplied here.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "List the given ratios",
          "workingLatex": "\\sin A = \\tfrac{3}{5}, \\quad \\cos A = \\tfrac{4}{5}, \\quad \\sin B = \\tfrac{5}{13}, \\quad \\cos B = \\tfrac{12}{13}",
          "explanation": "Because every value is given, no quadrant reasoning is needed: each ratio can be dropped straight into the formula.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute into the formula",
          "workingLatex": "\\sin(A+B) = \\tfrac{3}{5}\\cdot\\tfrac{12}{13} + \\tfrac{4}{5}\\cdot\\tfrac{5}{13}",
          "explanation": "Replace $\\sin A\\cos B$ and $\\cos A\\sin B$ with the corresponding products of the supplied values.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Multiply the fractions",
          "workingLatex": "= \\tfrac{36}{65} + \\tfrac{20}{65}",
          "explanation": "Multiplying numerators and denominators gives two fractions that already share the denominator $65$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Add over the common denominator",
          "workingLatex": "= \\tfrac{56}{65}",
          "explanation": "With a common denominator the numerators simply add: $36+20=56$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check the value is sensible",
          "workingLatex": "0 < \\tfrac{56}{65} < 1",
          "explanation": "A sine must lie between $-1$ and $1$; our answer does, which is a reassuring check.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\sin(A+B) = \\tfrac{56}{65}",
          "explanation": "This is the exact value requested.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sin(A+B) = \\tfrac{56}{65}$."
    }
  },
  {
    "id": "al.y2.pure.compound-double-angles.q004",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Compound and double angles",
    "subtopicId": "al.y2.pure.compound-double-angles",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "exact",
    "tags": [
      "compound angle",
      "subtraction formula",
      "substitution"
    ],
    "questionText": "Given that $\\sin A = \\tfrac{3}{5}$, $\\cos A = \\tfrac{4}{5}$, $\\sin B = \\tfrac{5}{13}$ and $\\cos B = \\tfrac{12}{13}$, find the exact value of $\\cos(A-B)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the correct formula",
          "workingLatex": "\\cos(A-B) = \\cos A\\cos B + \\sin A\\sin B",
          "explanation": "For a difference of angles the cosine formula takes a plus sign between the two products, the opposite of the minus inside $(A-B)$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "List the given ratios",
          "workingLatex": "\\cos A = \\tfrac{4}{5}, \\quad \\cos B = \\tfrac{12}{13}, \\quad \\sin A = \\tfrac{3}{5}, \\quad \\sin B = \\tfrac{5}{13}",
          "explanation": "All four ratios are provided, so we can substitute directly without any quadrant work.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute into the formula",
          "workingLatex": "\\cos(A-B) = \\tfrac{4}{5}\\cdot\\tfrac{12}{13} + \\tfrac{3}{5}\\cdot\\tfrac{5}{13}",
          "explanation": "Replace $\\cos A\\cos B$ and $\\sin A\\sin B$ with the products of the supplied values.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Multiply the fractions",
          "workingLatex": "= \\tfrac{48}{65} + \\tfrac{15}{65}",
          "explanation": "Both products share the denominator $65$ once the numerators and denominators are multiplied.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Add over the common denominator",
          "workingLatex": "= \\tfrac{63}{65}",
          "explanation": "Adding the numerators gives $48+15=63$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check the value is sensible",
          "workingLatex": "0 < \\tfrac{63}{65} < 1",
          "explanation": "The value is close to $1$, which makes sense because $A$ and $B$ are similar in size, so their difference $A-B$ is a small angle with cosine near $1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\cos(A-B) = \\tfrac{63}{65}",
          "explanation": "This is the exact value requested.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\cos(A-B) = \\tfrac{63}{65}$."
    }
  },
  {
    "id": "al.y2.pure.compound-double-angles.q005",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Compound and double angles",
    "subtopicId": "al.y2.pure.compound-double-angles",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "exact",
    "tags": [
      "compound angle",
      "addition formulae",
      "substitution"
    ],
    "questionText": "Given that $\\sin A = \\tfrac{8}{17}$, $\\cos A = \\tfrac{15}{17}$, $\\sin B = \\tfrac{4}{5}$ and $\\cos B = \\tfrac{3}{5}$, find the exact value of $\\cos(A+B)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the correct formula",
          "workingLatex": "\\cos(A+B) = \\cos A\\cos B - \\sin A\\sin B",
          "explanation": "For a sum of angles the cosine formula uses a minus sign between the products, the opposite of the plus inside $(A+B)$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "List the given ratios",
          "workingLatex": "\\cos A = \\tfrac{15}{17}, \\quad \\cos B = \\tfrac{3}{5}, \\quad \\sin A = \\tfrac{8}{17}, \\quad \\sin B = \\tfrac{4}{5}",
          "explanation": "Every ratio the formula needs is supplied, so the answer follows by direct substitution.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute into the formula",
          "workingLatex": "\\cos(A+B) = \\tfrac{15}{17}\\cdot\\tfrac{3}{5} - \\tfrac{8}{17}\\cdot\\tfrac{4}{5}",
          "explanation": "Replace $\\cos A\\cos B$ and $\\sin A\\sin B$ with the products of the given values.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Multiply the fractions",
          "workingLatex": "= \\tfrac{45}{85} - \\tfrac{32}{85}",
          "explanation": "Both products share the denominator $17\\times5=85$ after multiplying out.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Subtract over the common denominator",
          "workingLatex": "= \\tfrac{13}{85}",
          "explanation": "Subtracting the numerators gives $45-32=13$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check the value is sensible",
          "workingLatex": "0 < \\tfrac{13}{85} < 1",
          "explanation": "The result lies in the valid range for cosine; a small positive value is expected since $A+B$ is close to a right angle.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\cos(A+B) = \\tfrac{13}{85}",
          "explanation": "This is the exact value requested.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\cos(A+B) = \\tfrac{13}{85}$."
    }
  },
  {
    "id": "al.y2.pure.compound-double-angles.q006",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Compound and double angles",
    "subtopicId": "al.y2.pure.compound-double-angles",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "exact",
    "tags": [
      "double angle",
      "exact values",
      "acute angle"
    ],
    "questionText": "Given that $\\sin\\theta = \\tfrac{3}{5}$ and that $\\theta$ is acute, find the exact value of $\\sin 2\\theta$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the sine double-angle formula",
          "workingLatex": "\\sin 2\\theta = 2\\sin\\theta\\cos\\theta",
          "explanation": "The formula needs both $\\sin\\theta$ and $\\cos\\theta$, so before substituting we must first find $\\cos\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find cos theta from the Pythagorean identity",
          "workingLatex": "\\cos\\theta = \\sqrt{1 - \\sin^2\\theta} = \\sqrt{1 - \\tfrac{9}{25}}",
          "explanation": "Rearranging $\\sin^2\\theta+\\cos^2\\theta=1$ gives the cosine; because $\\theta$ is acute the cosine is positive, so we take the positive root.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify cos theta",
          "workingLatex": "= \\sqrt{\\tfrac{16}{25}} = \\tfrac{4}{5}",
          "explanation": "Since $1-\\tfrac{9}{25}=\\tfrac{16}{25}$ and its square root is exact, $\\cos\\theta=\\tfrac{4}{5}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the formula",
          "workingLatex": "\\sin 2\\theta = 2\\cdot\\tfrac{3}{5}\\cdot\\tfrac{4}{5}",
          "explanation": "Insert the given sine and the cosine just found into $2\\sin\\theta\\cos\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Multiply out",
          "workingLatex": "= \\tfrac{24}{25}",
          "explanation": "Multiplying the three factors gives $\\tfrac{2\\times3\\times4}{25}=\\tfrac{24}{25}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check the value is sensible",
          "workingLatex": "0 < \\tfrac{24}{25} < 1",
          "explanation": "The answer is positive and within the sine range; this fits because $\\theta\\approx36.9^\\circ$ makes $2\\theta\\approx73.7^\\circ$, where sine is positive.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\sin 2\\theta = \\tfrac{24}{25}",
          "explanation": "This is the exact value requested.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sin 2\\theta = \\tfrac{24}{25}$."
    }
  },
  {
    "id": "al.y2.pure.compound-double-angles.q007",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Compound and double angles",
    "subtopicId": "al.y2.pure.compound-double-angles",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "exact",
    "tags": [
      "double angle",
      "exact values",
      "acute angle"
    ],
    "questionText": "Given that $\\cos\\theta = \\tfrac{4}{5}$ and that $\\theta$ is acute, find the exact value of $\\cos 2\\theta$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the most efficient cosine form",
          "workingLatex": "\\cos 2\\theta = 2\\cos^2\\theta - 1",
          "explanation": "Of the three forms of the cosine double-angle formula, this one uses only $\\cos\\theta$, which is exactly what we are given, so no extra work is needed.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute the value of cos theta",
          "workingLatex": "= 2\\left(\\tfrac{4}{5}\\right)^2 - 1",
          "explanation": "Insert $\\cos\\theta=\\tfrac{4}{5}$ into the chosen form.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Square the fraction",
          "workingLatex": "= 2\\cdot\\tfrac{16}{25} - 1",
          "explanation": "Squaring $\\tfrac{4}{5}$ gives $\\tfrac{16}{25}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Carry out the multiplication",
          "workingLatex": "= \\tfrac{32}{25} - 1",
          "explanation": "Doubling $\\tfrac{16}{25}$ gives $\\tfrac{32}{25}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Combine over a common denominator",
          "workingLatex": "= \\tfrac{32}{25} - \\tfrac{25}{25} = \\tfrac{7}{25}",
          "explanation": "Writing $1$ as $\\tfrac{25}{25}$ lets us subtract to get $\\tfrac{7}{25}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check the value is sensible",
          "workingLatex": "-1 < \\tfrac{7}{25} < 1",
          "explanation": "The value sits within the cosine range and is positive, consistent with $2\\theta\\approx73.7^\\circ$ still being acute.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\cos 2\\theta = \\tfrac{7}{25}",
          "explanation": "This is the exact value requested.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\cos 2\\theta = \\tfrac{7}{25}$."
    }
  },
  {
    "id": "al.y2.pure.compound-double-angles.q008",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Compound and double angles",
    "subtopicId": "al.y2.pure.compound-double-angles",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "exact",
    "tags": [
      "double angle",
      "tangent",
      "exact values"
    ],
    "questionText": "Given that $\\tan\\theta = \\tfrac{3}{4}$ and that $\\theta$ is acute, find the exact value of $\\tan 2\\theta$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the tangent double-angle formula",
          "workingLatex": "\\tan 2\\theta = \\dfrac{2\\tan\\theta}{1 - \\tan^2\\theta}",
          "explanation": "This formula takes us straight from $\\tan\\theta$ to $\\tan 2\\theta$ without needing to find sine or cosine separately.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute the value of tan theta",
          "workingLatex": "= \\dfrac{2\\cdot\\tfrac{3}{4}}{1 - \\left(\\tfrac{3}{4}\\right)^2}",
          "explanation": "Insert $\\tan\\theta=\\tfrac{3}{4}$ into both the numerator and the denominator.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify the numerator",
          "workingLatex": "2\\cdot\\tfrac{3}{4} = \\tfrac{3}{2}",
          "explanation": "Doubling $\\tfrac{3}{4}$ gives $\\tfrac{6}{4}=\\tfrac{3}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the denominator",
          "workingLatex": "1 - \\left(\\tfrac{3}{4}\\right)^2 = 1 - \\tfrac{9}{16} = \\tfrac{7}{16}",
          "explanation": "Squaring $\\tfrac{3}{4}$ gives $\\tfrac{9}{16}$, and subtracting from $1=\\tfrac{16}{16}$ leaves $\\tfrac{7}{16}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Divide the two fractions",
          "workingLatex": "\\tan 2\\theta = \\dfrac{\\tfrac{3}{2}}{\\tfrac{7}{16}} = \\tfrac{3}{2}\\cdot\\tfrac{16}{7}",
          "explanation": "Dividing by a fraction is the same as multiplying by its reciprocal, so we flip $\\tfrac{7}{16}$ to $\\tfrac{16}{7}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify the product",
          "workingLatex": "= \\tfrac{48}{14} = \\tfrac{24}{7}",
          "explanation": "Multiplying gives $\\tfrac{48}{14}$, which cancels by $2$ to $\\tfrac{24}{7}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\tan 2\\theta = \\tfrac{24}{7}",
          "explanation": "This is the exact value requested.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\tan 2\\theta = \\tfrac{24}{7}$."
    }
  },
  {
    "id": "al.y2.pure.compound-double-angles.q009",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Compound and double angles",
    "subtopicId": "al.y2.pure.compound-double-angles",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "exact values",
      "compound angle",
      "surds"
    ],
    "questionText": "Show that $\\sin 75^\\circ = \\dfrac{\\sqrt{6}+\\sqrt{2}}{4}$ by writing $75^\\circ = 45^\\circ + 30^\\circ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Split the angle into known parts",
          "workingLatex": "75^\\circ = 45^\\circ + 30^\\circ",
          "explanation": "We rewrite $75^\\circ$ as a sum of two 'special' angles whose sine and cosine we know exactly from the standard triangles.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply the sine addition formula",
          "workingLatex": "\\sin 75^\\circ = \\sin 45^\\circ\\cos 30^\\circ + \\cos 45^\\circ\\sin 30^\\circ",
          "explanation": "Using $\\sin(A+B)=\\sin A\\cos B+\\cos A\\sin B$ with $A=45^\\circ$ and $B=30^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Insert the exact surd values",
          "workingLatex": "= \\tfrac{\\sqrt{2}}{2}\\cdot\\tfrac{\\sqrt{3}}{2} + \\tfrac{\\sqrt{2}}{2}\\cdot\\tfrac{1}{2}",
          "explanation": "Here $\\sin45^\\circ=\\cos45^\\circ=\\tfrac{\\sqrt2}{2}$, $\\cos30^\\circ=\\tfrac{\\sqrt3}{2}$ and $\\sin30^\\circ=\\tfrac12$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Multiply the surds",
          "workingLatex": "= \\tfrac{\\sqrt{6}}{4} + \\tfrac{\\sqrt{2}}{4}",
          "explanation": "Since $\\sqrt2\\cdot\\sqrt3=\\sqrt6$ and $\\sqrt2\\cdot1=\\sqrt2$, and each denominator is $2\\times2=4$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Combine over one denominator",
          "workingLatex": "= \\tfrac{\\sqrt{6}+\\sqrt{2}}{4}",
          "explanation": "The two terms share the denominator $4$, so they combine into a single fraction.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify numerically",
          "workingLatex": "\\tfrac{\\sqrt{6}+\\sqrt{2}}{4} \\approx \\tfrac{2.449+1.414}{4} \\approx 0.966",
          "explanation": "A decimal check gives about $0.966$, which matches $\\sin75^\\circ\\approx0.9659$ on a calculator, confirming the exact form.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the result",
          "workingLatex": "\\sin 75^\\circ = \\tfrac{\\sqrt{6}+\\sqrt{2}}{4}",
          "explanation": "This proves the required exact value.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sin 75^\\circ = \\dfrac{\\sqrt{6}+\\sqrt{2}}{4}$."
    }
  },
  {
    "id": "al.y2.pure.compound-double-angles.q010",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Compound and double angles",
    "subtopicId": "al.y2.pure.compound-double-angles",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "exact",
    "tags": [
      "exact values",
      "compound angle",
      "surds"
    ],
    "questionText": "Show that $\\cos 15^\\circ = \\dfrac{\\sqrt{6}+\\sqrt{2}}{4}$ by writing $15^\\circ = 45^\\circ - 30^\\circ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Split the angle into known parts",
          "workingLatex": "15^\\circ = 45^\\circ - 30^\\circ",
          "explanation": "We rewrite $15^\\circ$ as a difference of two special angles whose exact ratios we know.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply the cosine subtraction formula",
          "workingLatex": "\\cos 15^\\circ = \\cos 45^\\circ\\cos 30^\\circ + \\sin 45^\\circ\\sin 30^\\circ",
          "explanation": "Using $\\cos(A-B)=\\cos A\\cos B+\\sin A\\sin B$; for a difference the sign between the products is a plus.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Insert the exact surd values",
          "workingLatex": "= \\tfrac{\\sqrt{2}}{2}\\cdot\\tfrac{\\sqrt{3}}{2} + \\tfrac{\\sqrt{2}}{2}\\cdot\\tfrac{1}{2}",
          "explanation": "Here $\\cos45^\\circ=\\sin45^\\circ=\\tfrac{\\sqrt2}{2}$, $\\cos30^\\circ=\\tfrac{\\sqrt3}{2}$ and $\\sin30^\\circ=\\tfrac12$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Multiply the surds",
          "workingLatex": "= \\tfrac{\\sqrt{6}}{4} + \\tfrac{\\sqrt{2}}{4}",
          "explanation": "As before $\\sqrt2\\cdot\\sqrt3=\\sqrt6$, each term having denominator $4$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Combine over one denominator",
          "workingLatex": "= \\tfrac{\\sqrt{6}+\\sqrt{2}}{4}",
          "explanation": "The two terms share the denominator $4$, so they combine into one fraction.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify numerically",
          "workingLatex": "\\tfrac{\\sqrt{6}+\\sqrt{2}}{4} \\approx 0.966",
          "explanation": "This matches $\\cos15^\\circ\\approx0.9659$ on a calculator. Note also that $\\cos15^\\circ=\\sin75^\\circ$, since $15^\\circ$ and $75^\\circ$ are complementary.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the result",
          "workingLatex": "\\cos 15^\\circ = \\tfrac{\\sqrt{6}+\\sqrt{2}}{4}",
          "explanation": "This proves the required exact value.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\cos 15^\\circ = \\dfrac{\\sqrt{6}+\\sqrt{2}}{4}$."
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
    "answerType": "exact",
    "tags": [
      "exact values",
      "tangent",
      "surds"
    ],
    "questionText": "Show that $\\tan 75^\\circ = 2 + \\sqrt{3}$ by writing $75^\\circ = 45^\\circ + 30^\\circ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Split the angle into known parts",
          "workingLatex": "75^\\circ = 45^\\circ + 30^\\circ",
          "explanation": "We express $75^\\circ$ as a sum of two special angles whose tangents we know exactly.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply the tangent addition formula",
          "workingLatex": "\\tan 75^\\circ = \\dfrac{\\tan 45^\\circ + \\tan 30^\\circ}{1 - \\tan 45^\\circ\\tan 30^\\circ}",
          "explanation": "Using $\\tan(A+B)=\\dfrac{\\tan A+\\tan B}{1-\\tan A\\tan B}$ with $A=45^\\circ$ and $B=30^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Insert the exact tangent values",
          "workingLatex": "= \\dfrac{1 + \\tfrac{1}{\\sqrt{3}}}{1 - 1\\cdot\\tfrac{1}{\\sqrt{3}}}",
          "explanation": "Here $\\tan45^\\circ=1$ and $\\tan30^\\circ=\\tfrac{1}{\\sqrt3}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Clear the inner fractions",
          "workingLatex": "= \\dfrac{\\sqrt{3} + 1}{\\sqrt{3} - 1}",
          "explanation": "Multiplying the top and bottom by $\\sqrt3$ removes the fractions inside, since $\\sqrt3\\cdot\\tfrac{1}{\\sqrt3}=1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rationalise the denominator",
          "workingLatex": "= \\dfrac{(\\sqrt{3}+1)(\\sqrt{3}+1)}{(\\sqrt{3}-1)(\\sqrt{3}+1)}",
          "explanation": "Multiplying top and bottom by $\\sqrt3+1$ turns the denominator into a difference of squares, removing the surd there.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Expand top and bottom",
          "workingLatex": "= \\dfrac{3 + 2\\sqrt{3} + 1}{3 - 1} = \\dfrac{4 + 2\\sqrt{3}}{2}",
          "explanation": "The numerator expands to $3+2\\sqrt3+1=4+2\\sqrt3$, and the denominator is $(\\sqrt3)^2-1^2=2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify the fraction",
          "workingLatex": "= 2 + \\sqrt{3}",
          "explanation": "Dividing each term of the numerator by $2$ gives the simplified exact value.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify numerically",
          "workingLatex": "2 + \\sqrt{3} \\approx 3.732",
          "explanation": "This matches $\\tan75^\\circ\\approx3.732$ on a calculator, confirming the result.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\tan 75^\\circ = 2 + \\sqrt{3}$."
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
    "answerType": "exact",
    "tags": [
      "compound angle",
      "exact values",
      "radians"
    ],
    "questionText": "Show that $\\sin\\dfrac{7\\pi}{12} = \\dfrac{\\sqrt{6}+\\sqrt{2}}{4}$ by writing $\\dfrac{7\\pi}{12}$ as a sum of two standard angles.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Split the angle into standard parts",
          "workingLatex": "\\frac{7\\pi}{12} = \\frac{3\\pi}{12} + \\frac{4\\pi}{12} = \\frac{\\pi}{4} + \\frac{\\pi}{3}",
          "explanation": "The compound-angle formula only helps if we split $\\frac{7\\pi}{12}$ into angles whose sine and cosine we already know. Writing everything over a denominator of $12$ shows that $\\frac{\\pi}{4}=\\frac{3\\pi}{12}$ and $\\frac{\\pi}{3}=\\frac{4\\pi}{12}$ add to give $\\frac{7\\pi}{12}$, so this is the natural split.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply the sine addition formula",
          "workingLatex": "\\sin\\left(\\frac{\\pi}{4} + \\frac{\\pi}{3}\\right) = \\sin\\frac{\\pi}{4}\\cos\\frac{\\pi}{3} + \\cos\\frac{\\pi}{4}\\sin\\frac{\\pi}{3}",
          "explanation": "Because the angle is a sum, we use $\\sin(A+B)=\\sin A\\cos B+\\cos A\\sin B$ with $A=\\frac{\\pi}{4}$ and $B=\\frac{\\pi}{3}$. This trades one unknown sine for a combination of standard values.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Quote the standard exact values",
          "workingLatex": "\\sin\\frac{\\pi}{4} = \\cos\\frac{\\pi}{4} = \\frac{\\sqrt{2}}{2}, \\quad \\cos\\frac{\\pi}{3} = \\frac{1}{2}, \\quad \\sin\\frac{\\pi}{3} = \\frac{\\sqrt{3}}{2}",
          "explanation": "These are the standard exact values from the $45^\\circ$ and $60^\\circ$ triangles, written in radians. Having them listed makes the substitution tidy.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the exact values",
          "workingLatex": "= \\frac{\\sqrt{2}}{2}\\cdot\\frac{1}{2} + \\frac{\\sqrt{2}}{2}\\cdot\\frac{\\sqrt{3}}{2}",
          "explanation": "Substituting each exact value into the formula turns the expression into ordinary surd arithmetic.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Multiply out each product",
          "workingLatex": "= \\frac{\\sqrt{2}}{4} + \\frac{\\sqrt{6}}{4}",
          "explanation": "Multiplying the numerators, $\\sqrt{2}\\times 1=\\sqrt{2}$ and $\\sqrt{2}\\times\\sqrt{3}=\\sqrt{6}$, while the denominators multiply to $4$ each.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine over the common denominator",
          "workingLatex": "= \\frac{\\sqrt{2} + \\sqrt{6}}{4} = \\frac{\\sqrt{6} + \\sqrt{2}}{4}",
          "explanation": "The two terms already share the denominator $4$, so we simply add the numerators; the order is written with $\\sqrt{6}$ first to match the required form.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check the size of the answer",
          "workingLatex": "\\frac{\\sqrt{6}+\\sqrt{2}}{4} \\approx \\frac{2.449 + 1.414}{4} \\approx 0.966",
          "explanation": "A quick decimal check gives about $0.966$, a sensible value for the sine of an angle just less than $\\frac{\\pi}{2}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sin\\dfrac{7\\pi}{12} = \\dfrac{\\sqrt{6}+\\sqrt{2}}{4}$."
    }
  },
  {
    "id": "al.y2.pure.compound-double-angles.q013",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Compound and double angles",
    "subtopicId": "al.y2.pure.compound-double-angles",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "exact",
    "tags": [
      "compound angle",
      "exact values",
      "radians"
    ],
    "questionText": "Find the exact value of $\\cos\\dfrac{\\pi}{12}$ by writing $\\dfrac{\\pi}{12}$ as a difference of two standard angles.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Split the angle into standard parts",
          "workingLatex": "\\frac{\\pi}{12} = \\frac{3\\pi}{12} - \\frac{2\\pi}{12} = \\frac{\\pi}{4} - \\frac{\\pi}{6}",
          "explanation": "We choose two angles with known ratios whose difference is $\\frac{\\pi}{12}$. Over a denominator of $12$, $\\frac{\\pi}{4}=\\frac{3\\pi}{12}$ and $\\frac{\\pi}{6}=\\frac{2\\pi}{12}$, and their difference is exactly $\\frac{\\pi}{12}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply the cosine subtraction formula",
          "workingLatex": "\\cos\\left(\\frac{\\pi}{4} - \\frac{\\pi}{6}\\right) = \\cos\\frac{\\pi}{4}\\cos\\frac{\\pi}{6} + \\sin\\frac{\\pi}{4}\\sin\\frac{\\pi}{6}",
          "explanation": "Because the angle is a difference, we use $\\cos(A-B)=\\cos A\\cos B+\\sin A\\sin B$ with $A=\\frac{\\pi}{4}$ and $B=\\frac{\\pi}{6}$. Note the sign on the right is plus, the opposite of the minus inside the bracket.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Quote the standard exact values",
          "workingLatex": "\\cos\\frac{\\pi}{4} = \\sin\\frac{\\pi}{4} = \\frac{\\sqrt{2}}{2}, \\quad \\cos\\frac{\\pi}{6} = \\frac{\\sqrt{3}}{2}, \\quad \\sin\\frac{\\pi}{6} = \\frac{1}{2}",
          "explanation": "These come straight from the $45^\\circ$ and $30^\\circ$ triangles, written in radians so they slot into the formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the exact values",
          "workingLatex": "= \\frac{\\sqrt{2}}{2}\\cdot\\frac{\\sqrt{3}}{2} + \\frac{\\sqrt{2}}{2}\\cdot\\frac{1}{2}",
          "explanation": "Substituting each ratio turns the trigonometric expression into surd multiplication.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Multiply out each product",
          "workingLatex": "= \\frac{\\sqrt{6}}{4} + \\frac{\\sqrt{2}}{4}",
          "explanation": "The first product gives $\\sqrt{2}\\times\\sqrt{3}=\\sqrt{6}$ over $4$, and the second gives $\\sqrt{2}$ over $4$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine over the common denominator",
          "workingLatex": "= \\frac{\\sqrt{6} + \\sqrt{2}}{4}",
          "explanation": "With a shared denominator of $4$ the numerators add directly, giving the exact value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check the size of the answer",
          "workingLatex": "\\frac{\\sqrt{6}+\\sqrt{2}}{4} \\approx 0.966",
          "explanation": "A decimal check gives about $0.966$, which is reasonable for the cosine of a small angle close to $0$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\cos\\dfrac{\\pi}{12} = \\dfrac{\\sqrt{6}+\\sqrt{2}}{4}$."
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
    "answerType": "exact",
    "tags": [
      "compound angle",
      "tangent",
      "exact values"
    ],
    "questionText": "Show that $\\tan\\dfrac{5\\pi}{12} = 2 + \\sqrt{3}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Split the angle into standard parts",
          "workingLatex": "\\frac{5\\pi}{12} = \\frac{3\\pi}{12} + \\frac{2\\pi}{12} = \\frac{\\pi}{4} + \\frac{\\pi}{6}",
          "explanation": "We split $\\frac{5\\pi}{12}$ into two angles with known tangents. Over a denominator of $12$, $\\frac{\\pi}{4}=\\frac{3\\pi}{12}$ and $\\frac{\\pi}{6}=\\frac{2\\pi}{12}$ sum to $\\frac{5\\pi}{12}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply the tangent addition formula",
          "workingLatex": "\\tan\\left(\\frac{\\pi}{4} + \\frac{\\pi}{6}\\right) = \\frac{\\tan\\frac{\\pi}{4} + \\tan\\frac{\\pi}{6}}{1 - \\tan\\frac{\\pi}{4}\\tan\\frac{\\pi}{6}}",
          "explanation": "Since the angle is a sum, we use $\\tan(A+B)=\\frac{\\tan A+\\tan B}{1-\\tan A\\tan B}$ with $A=\\frac{\\pi}{4}$ and $B=\\frac{\\pi}{6}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Quote the standard tangents",
          "workingLatex": "\\tan\\frac{\\pi}{4} = 1, \\quad \\tan\\frac{\\pi}{6} = \\frac{1}{\\sqrt{3}}",
          "explanation": "These are the standard exact tangents of $45^\\circ$ and $30^\\circ$, ready to substitute.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the tangents",
          "workingLatex": "= \\frac{1 + \\frac{1}{\\sqrt{3}}}{1 - 1\\cdot\\frac{1}{\\sqrt{3}}} = \\frac{1 + \\frac{1}{\\sqrt{3}}}{1 - \\frac{1}{\\sqrt{3}}}",
          "explanation": "Putting the values in gives a fraction that still contains the small fractions $\\frac{1}{\\sqrt{3}}$, which we will clear next.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Clear the inner fractions",
          "workingLatex": "= \\frac{\\sqrt{3} + 1}{\\sqrt{3} - 1}",
          "explanation": "Multiplying the numerator and denominator of the whole fraction by $\\sqrt{3}$ removes the $\\frac{1}{\\sqrt{3}}$ terms, leaving a neat surd fraction.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Rationalise the denominator",
          "workingLatex": "= \\frac{(\\sqrt{3} + 1)(\\sqrt{3} + 1)}{(\\sqrt{3} - 1)(\\sqrt{3} + 1)} = \\frac{(\\sqrt{3}+1)^2}{3 - 1}",
          "explanation": "To remove the surd from the denominator we multiply top and bottom by the conjugate $\\sqrt{3}+1$; the denominator becomes the difference of two squares $3-1=2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Expand and simplify",
          "workingLatex": "= \\frac{3 + 2\\sqrt{3} + 1}{2} = \\frac{4 + 2\\sqrt{3}}{2} = 2 + \\sqrt{3}",
          "explanation": "Expanding $(\\sqrt{3}+1)^2=3+2\\sqrt{3}+1=4+2\\sqrt{3}$ and dividing by $2$ gives the simplified exact value.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check the size of the answer",
          "workingLatex": "2 + \\sqrt{3} \\approx 2 + 1.732 = 3.732",
          "explanation": "A decimal check gives about $3.732$, which is a plausible tangent for an angle close to $\\frac{\\pi}{2}$ where the tangent grows large.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\tan\\dfrac{5\\pi}{12} = 2 + \\sqrt{3}$."
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
    "answerType": "exact",
    "tags": [
      "double angle",
      "exact values"
    ],
    "questionText": "Given that $\\cos\\theta = \\tfrac{4}{5}$ and $\\theta$ is acute, find the exact values of $\\cos 2\\theta$ and $\\sin 2\\theta$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find sin theta from the quadrant",
          "workingLatex": "\\sin\\theta = \\sqrt{1 - \\cos^2\\theta} = \\sqrt{1 - \\tfrac{16}{25}} = \\sqrt{\\tfrac{9}{25}} = \\tfrac{3}{5}",
          "explanation": "The sine double-angle formula needs $\\sin\\theta$ as well. Rearranging $\\sin^2\\theta+\\cos^2\\theta\\equiv1$ gives the sine, and because $\\theta$ is acute (first quadrant) the sine is positive, so we take the positive root.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply a cosine double-angle formula",
          "workingLatex": "\\cos 2\\theta = 2\\cos^2\\theta - 1 = 2\\cdot\\tfrac{16}{25} - 1",
          "explanation": "The version $\\cos 2\\theta=2\\cos^2\\theta-1$ is chosen because we were given $\\cos\\theta$ directly, so no extra values are needed.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify cos 2theta",
          "workingLatex": "\\cos 2\\theta = \\tfrac{32}{25} - \\tfrac{25}{25} = \\tfrac{7}{25}",
          "explanation": "Writing $1$ as $\\frac{25}{25}$ makes the subtraction straightforward and gives the exact cosine of the double angle.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the sine double-angle formula",
          "workingLatex": "\\sin 2\\theta = 2\\sin\\theta\\cos\\theta = 2\\cdot\\tfrac{3}{5}\\cdot\\tfrac{4}{5}",
          "explanation": "$\\sin 2\\theta=2\\sin\\theta\\cos\\theta$ turns the double angle into a product of the single-angle ratios we now have.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify sin 2theta",
          "workingLatex": "\\sin 2\\theta = \\tfrac{24}{25}",
          "explanation": "Multiplying the fractions gives a positive value, consistent with $\\theta$ being acute.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check with the Pythagorean identity",
          "workingLatex": "\\sin^2 2\\theta + \\cos^2 2\\theta = \\tfrac{576}{625} + \\tfrac{49}{625} = \\tfrac{625}{625} = 1",
          "explanation": "As a safeguard, $\\sin^2 2\\theta+\\cos^2 2\\theta$ should equal $1$; it does, confirming the pair is consistent.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the results",
          "workingLatex": "\\cos 2\\theta = \\tfrac{7}{25}, \\quad \\sin 2\\theta = \\tfrac{24}{25}",
          "explanation": "Collecting the two exact values gives the final answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\cos 2\\theta = \\tfrac{7}{25}$ and $\\sin 2\\theta = \\tfrac{24}{25}$."
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
    "answerType": "exact",
    "tags": [
      "double angle",
      "tangent"
    ],
    "questionText": "Given that $\\tan\\theta = \\tfrac{1}{2}$ and $\\theta$ is acute, find the exact value of $\\tan 2\\theta$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the tangent double-angle formula",
          "workingLatex": "\\tan 2\\theta = \\frac{2\\tan\\theta}{1 - \\tan^2\\theta}",
          "explanation": "For a double angle in tangent the formula is built only from $\\tan\\theta$, which is exactly the value we are given, so no other ratios are needed.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute tan theta",
          "workingLatex": "\\tan 2\\theta = \\frac{2\\cdot\\tfrac{1}{2}}{1 - \\left(\\tfrac{1}{2}\\right)^2}",
          "explanation": "Putting $\\tan\\theta=\\frac{1}{2}$ into both the numerator and the denominator sets up the arithmetic.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify numerator and squared term",
          "workingLatex": "= \\frac{1}{1 - \\tfrac{1}{4}}",
          "explanation": "The numerator $2\\times\\frac{1}{2}$ is $1$, and $\\left(\\frac{1}{2}\\right)^2=\\frac{1}{4}$ appears in the denominator.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the denominator",
          "workingLatex": "= \\frac{1}{\\tfrac{3}{4}}",
          "explanation": "Combining $1-\\frac{1}{4}$ gives the single fraction $\\frac{3}{4}$ underneath.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Divide by the fraction",
          "workingLatex": "= 1 \\times \\frac{4}{3} = \\frac{4}{3}",
          "explanation": "Dividing by $\\frac{3}{4}$ is the same as multiplying by its reciprocal $\\frac{4}{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check the size of the answer",
          "workingLatex": "\\frac{4}{3} \\approx 1.333",
          "explanation": "A decimal check gives about $1.333$; since $\\theta$ is acute and small, $2\\theta$ is still acute, so a positive tangent is expected.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the result",
          "workingLatex": "\\tan 2\\theta = \\tfrac{4}{3}",
          "explanation": "This is the exact value of the required double-angle tangent.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\tan 2\\theta = \\tfrac{4}{3}$."
    }
  },
  {
    "id": "al.y2.pure.compound-double-angles.q017",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Compound and double angles",
    "subtopicId": "al.y2.pure.compound-double-angles",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": [
      "double angle",
      "simplify"
    ],
    "questionText": "Write $2\\sin 20^\\circ\\cos 20^\\circ$ as a single trigonometric ratio of the form $\\sin k^\\circ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the expression",
          "workingLatex": "E = 2\\sin 20^\\circ\\cos 20^\\circ",
          "explanation": "First look at the shape: a $2$ multiplying a sine and a cosine of the same angle. That is exactly the right-hand side of a double-angle formula.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the sine double-angle formula",
          "workingLatex": "\\sin 2A = 2\\sin A\\cos A",
          "explanation": "Reading $\\sin 2A=2\\sin A\\cos A$ from right to left lets us collapse a product into a single sine.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Match the angle",
          "workingLatex": "A = 20^\\circ",
          "explanation": "Here the repeated angle is $20^\\circ$, so we identify $A=20^\\circ$ in the formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the formula",
          "workingLatex": "2\\sin 20^\\circ\\cos 20^\\circ = \\sin(2\\times 20^\\circ)",
          "explanation": "Substituting $A=20^\\circ$ replaces the whole product with the sine of the doubled angle.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Double the angle",
          "workingLatex": "= \\sin 40^\\circ",
          "explanation": "Doubling $20^\\circ$ gives $40^\\circ$, the single ratio we were asked for.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check numerically",
          "workingLatex": "2\\sin 20^\\circ\\cos 20^\\circ \\approx 0.643, \\quad \\sin 40^\\circ \\approx 0.643",
          "explanation": "Both sides evaluate to about $0.643$, confirming the simplification.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the result",
          "workingLatex": "2\\sin 20^\\circ\\cos 20^\\circ = \\sin 40^\\circ",
          "explanation": "The product has collapsed to a single sine, as required.",
          "diagram": null
        }
      ],
      "finalAnswer": "$2\\sin 20^\\circ\\cos 20^\\circ = \\sin 40^\\circ$."
    }
  },
  {
    "id": "al.y2.pure.compound-double-angles.q018",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Compound and double angles",
    "subtopicId": "al.y2.pure.compound-double-angles",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "double angle",
      "simplify"
    ],
    "questionText": "Express $\\cos^2 35^\\circ - \\sin^2 35^\\circ$ as a single trigonometric ratio.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the expression",
          "workingLatex": "E = \\cos^2 35^\\circ - \\sin^2 35^\\circ",
          "explanation": "The expression is a squared cosine minus a squared sine of the same angle, which is one of the standard forms of the cosine double-angle formula.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the cosine double-angle formula",
          "workingLatex": "\\cos 2A = \\cos^2 A - \\sin^2 A",
          "explanation": "Used from right to left, $\\cos 2A=\\cos^2 A-\\sin^2 A$ turns this difference into a single cosine.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Match the angle",
          "workingLatex": "A = 35^\\circ",
          "explanation": "The common angle in both squared terms is $35^\\circ$, so $A=35^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the formula",
          "workingLatex": "\\cos^2 35^\\circ - \\sin^2 35^\\circ = \\cos(2\\times 35^\\circ)",
          "explanation": "Substituting $A=35^\\circ$ collapses the difference of squares into the cosine of the doubled angle.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Double the angle",
          "workingLatex": "= \\cos 70^\\circ",
          "explanation": "Doubling $35^\\circ$ gives $70^\\circ$, the single ratio required.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check numerically",
          "workingLatex": "\\cos^2 35^\\circ - \\sin^2 35^\\circ \\approx 0.342, \\quad \\cos 70^\\circ \\approx 0.342",
          "explanation": "Both sides come out to about $0.342$, confirming the result.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the result",
          "workingLatex": "\\cos^2 35^\\circ - \\sin^2 35^\\circ = \\cos 70^\\circ",
          "explanation": "The difference of squares simplifies to a single cosine, as required.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\cos^2 35^\\circ - \\sin^2 35^\\circ = \\cos 70^\\circ$."
    }
  },
  {
    "id": "al.y2.pure.compound-double-angles.q019",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Compound and double angles",
    "subtopicId": "al.y2.pure.compound-double-angles",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "exact",
    "tags": [
      "double angle",
      "exact values"
    ],
    "questionText": "Show that $2\\cos^2 15^\\circ - 1 = \\dfrac{\\sqrt{3}}{2}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the expression",
          "workingLatex": "E = 2\\cos^2 15^\\circ - 1",
          "explanation": "The form $2\\cos^2 A-1$ is one of the three equivalent versions of $\\cos 2A$, so recognising it is the key first move.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the cosine double-angle formula",
          "workingLatex": "\\cos 2A = 2\\cos^2 A - 1",
          "explanation": "Reading this identity from right to left converts $2\\cos^2 A-1$ into a single cosine of the doubled angle.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Match the angle",
          "workingLatex": "A = 15^\\circ",
          "explanation": "The angle inside the cosine is $15^\\circ$, so $A=15^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the formula",
          "workingLatex": "2\\cos^2 15^\\circ - 1 = \\cos(2\\times 15^\\circ) = \\cos 30^\\circ",
          "explanation": "Substituting $A=15^\\circ$ and doubling gives $\\cos 30^\\circ$, a familiar exact-value angle.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the exact value of cos 30",
          "workingLatex": "\\cos 30^\\circ = \\frac{\\sqrt{3}}{2}",
          "explanation": "$\\cos 30^\\circ$ is a standard exact value from the $30^\\circ$-$60^\\circ$ triangle.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclude",
          "workingLatex": "2\\cos^2 15^\\circ - 1 = \\frac{\\sqrt{3}}{2}",
          "explanation": "Chaining the two results proves the required identity.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check numerically",
          "workingLatex": "2\\cos^2 15^\\circ - 1 \\approx 0.866, \\quad \\frac{\\sqrt{3}}{2} \\approx 0.866",
          "explanation": "Both sides evaluate to about $0.866$, confirming the exact result.",
          "diagram": null
        }
      ],
      "finalAnswer": "$2\\cos^2 15^\\circ - 1 = \\dfrac{\\sqrt{3}}{2}$."
    }
  },
  {
    "id": "al.y2.pure.compound-double-angles.q020",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Compound and double angles",
    "subtopicId": "al.y2.pure.compound-double-angles",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "double angle",
      "tangent",
      "simplify"
    ],
    "questionText": "Write $\\dfrac{2\\tan 25^\\circ}{1 - \\tan^2 25^\\circ}$ as a single trigonometric ratio.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the expression",
          "workingLatex": "E = \\frac{2\\tan 25^\\circ}{1 - \\tan^2 25^\\circ}",
          "explanation": "Notice the fraction has $2\\tan$ of an angle on top and $1-\\tan^2$ of the same angle underneath, the signature of the tangent double-angle formula.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the tangent double-angle formula",
          "workingLatex": "\\tan 2A = \\frac{2\\tan A}{1 - \\tan^2 A}",
          "explanation": "Used from right to left, this identity turns the whole fraction into a single tangent.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Match the angle",
          "workingLatex": "A = 25^\\circ",
          "explanation": "Every tangent in the expression is of $25^\\circ$, so $A=25^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the formula",
          "workingLatex": "\\frac{2\\tan 25^\\circ}{1 - \\tan^2 25^\\circ} = \\tan(2\\times 25^\\circ)",
          "explanation": "Substituting $A=25^\\circ$ replaces the fraction with the tangent of the doubled angle.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Double the angle",
          "workingLatex": "= \\tan 50^\\circ",
          "explanation": "Doubling $25^\\circ$ gives $50^\\circ$, the single ratio required.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check numerically",
          "workingLatex": "\\frac{2\\tan 25^\\circ}{1 - \\tan^2 25^\\circ} \\approx 1.192, \\quad \\tan 50^\\circ \\approx 1.192",
          "explanation": "Both sides evaluate to about $1.192$, confirming the simplification.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the result",
          "workingLatex": "\\frac{2\\tan 25^\\circ}{1 - \\tan^2 25^\\circ} = \\tan 50^\\circ",
          "explanation": "The fraction has collapsed to a single tangent, as required.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{2\\tan 25^\\circ}{1 - \\tan^2 25^\\circ} = \\tan 50^\\circ$."
    }
  },
  {
    "id": "al.y2.pure.compound-double-angles.q021",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Compound and double angles",
    "subtopicId": "al.y2.pure.compound-double-angles",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": [
      "compound angle",
      "expand"
    ],
    "questionText": "Write $\\cos(A - B)$ in terms of $\\sin A$, $\\cos A$, $\\sin B$ and $\\cos B$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the expression to expand",
          "workingLatex": "\\cos(A - B)",
          "explanation": "We are expanding a cosine of a difference, so the cosine compound-angle formula is the tool to reach for.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State both signed versions",
          "workingLatex": "\\cos(A \\pm B) = \\cos A\\cos B \\mp \\sin A\\sin B",
          "explanation": "The combined formula shows the sign on the right is the opposite of the sign inside the bracket, which is what the $\\mp$ symbol records.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Select the minus-angle version",
          "workingLatex": "\\cos(A - B) = \\cos A\\cos B + \\sin A\\sin B",
          "explanation": "For $A-B$ the inside sign is minus, so the right-hand sign becomes plus.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Note the structure",
          "workingLatex": "\\cos(A - B) = \\underbrace{\\cos A\\cos B}_{\\text{cos-cos}} + \\underbrace{\\sin A\\sin B}_{\\text{sin-sin}}",
          "explanation": "The pattern is easy to remember: cosine of a combined angle is 'cos times cos' plus-or-minus 'sin times sin'.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify with a known value",
          "workingLatex": "\\cos(90^\\circ - B) = \\cos 90^\\circ\\cos B + \\sin 90^\\circ\\sin B = 0 + \\sin B = \\sin B",
          "explanation": "As a check, set $A=90^\\circ$. Using $\\cos 90^\\circ=0$ and $\\sin 90^\\circ=1$ the formula gives $\\sin B$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Confirm against the co-function identity",
          "workingLatex": "\\cos(90^\\circ - B) = \\sin B",
          "explanation": "This matches the familiar co-function relationship $\\cos(90^\\circ-B)=\\sin B$, confirming the plus sign is correct.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the expansion",
          "workingLatex": "\\cos(A - B) = \\cos A\\cos B + \\sin A\\sin B",
          "explanation": "This is the required expansion written entirely in terms of $\\sin A$, $\\cos A$, $\\sin B$ and $\\cos B$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\cos(A - B) = \\cos A\\cos B + \\sin A\\sin B$."
    }
  },
  {
    "id": "al.y2.pure.compound-double-angles.q022",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Compound and double angles",
    "subtopicId": "al.y2.pure.compound-double-angles",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": [
      "compound angle",
      "expand"
    ],
    "questionText": "Write $\\sin(A + B)$ in terms of $\\sin A$, $\\cos A$, $\\sin B$ and $\\cos B$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the expression to expand",
          "workingLatex": "\\sin(A + B)",
          "explanation": "We are expanding a sine of a sum, so the sine compound-angle formula applies.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State both signed versions",
          "workingLatex": "\\sin(A \\pm B) = \\sin A\\cos B \\pm \\cos A\\sin B",
          "explanation": "In the sine formula the sign on the right matches the sign inside the bracket, which is what the $\\pm$ symbol records.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Select the plus-angle version",
          "workingLatex": "\\sin(A + B) = \\sin A\\cos B + \\cos A\\sin B",
          "explanation": "For $A+B$ the inside sign is plus, so we take the plus sign on the right.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Note the structure",
          "workingLatex": "\\sin(A + B) = \\underbrace{\\sin A\\cos B}_{\\text{sin-cos}} + \\underbrace{\\cos A\\sin B}_{\\text{cos-sin}}",
          "explanation": "The pattern is always mixed products, 'sin times cos' plus 'cos times sin', never $\\sin\\sin$ or $\\cos\\cos$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify with a known case",
          "workingLatex": "\\sin(A + A) = \\sin A\\cos A + \\cos A\\sin A = 2\\sin A\\cos A",
          "explanation": "As a check, set $B=A$; the two identical mixed products add together.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Confirm against the double-angle formula",
          "workingLatex": "2\\sin A\\cos A = \\sin 2A",
          "explanation": "This reproduces the sine double-angle formula $\\sin 2A=2\\sin A\\cos A$, confirming the expansion is correct.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the expansion",
          "workingLatex": "\\sin(A + B) = \\sin A\\cos B + \\cos A\\sin B",
          "explanation": "This is the required expansion written entirely in terms of $\\sin A$, $\\cos A$, $\\sin B$ and $\\cos B$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sin(A + B) = \\sin A\\cos B + \\cos A\\sin B$."
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
    "answerType": "exact",
    "tags": [
      "double angle",
      "quadrant",
      "exact values"
    ],
    "questionText": "Given that $\\sin\\theta = -\\tfrac{8}{17}$ and that $\\theta$ lies in the third quadrant ($180^\\circ < \\theta < 270^\\circ$), find the exact values of $\\sin 2\\theta$, $\\cos 2\\theta$ and $\\tan 2\\theta$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the signs from the quadrant",
          "workingLatex": "180^\\circ < \\theta < 270^\\circ \\;\\Rightarrow\\; \\sin\\theta<0,\\ \\cos\\theta<0",
          "explanation": "In the third quadrant both sine and cosine are negative. The given $\\sin\\theta=-\\tfrac{8}{17}$ is indeed negative, and this tells us $\\cos\\theta$ must come out negative too.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find cos theta from the Pythagorean identity",
          "workingLatex": "\\cos\\theta = -\\sqrt{1-\\sin^2\\theta} = -\\sqrt{1-\\tfrac{64}{289}} = -\\sqrt{\\tfrac{225}{289}} = -\\tfrac{15}{17}",
          "explanation": "Rearranging $\\sin^2\\theta+\\cos^2\\theta\\equiv1$ gives $\\cos\\theta=\\pm\\sqrt{1-\\sin^2\\theta}$; the third-quadrant rule forces us to take the negative root.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the sine double-angle formula",
          "workingLatex": "\\sin 2\\theta = 2\\sin\\theta\\cos\\theta",
          "explanation": "This formula rewrites the double angle using only the single-angle ratios we now know.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute to find sin 2theta",
          "workingLatex": "\\sin 2\\theta = 2\\left(-\\tfrac{8}{17}\\right)\\left(-\\tfrac{15}{17}\\right) = \\tfrac{240}{289}",
          "explanation": "The product of two negative ratios is positive, so $\\sin 2\\theta$ comes out positive.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Choose a cosine double-angle formula",
          "workingLatex": "\\cos 2\\theta = 1 - 2\\sin^2\\theta",
          "explanation": "The $1-2\\sin^2\\theta$ version is efficient here because $\\sin\\theta$ is already known, so no extra work is needed.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute to find cos 2theta",
          "workingLatex": "\\cos 2\\theta = 1 - 2\\cdot\\tfrac{64}{289} = 1 - \\tfrac{128}{289} = \\tfrac{161}{289}",
          "explanation": "A single subtraction gives the exact cosine of the double angle.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Form tan 2theta by division",
          "workingLatex": "\\tan 2\\theta = \\dfrac{\\sin 2\\theta}{\\cos 2\\theta} = \\dfrac{240/289}{161/289} = \\tfrac{240}{161}",
          "explanation": "Dividing the exact values already found reuses our work; the $289$s cancel cleanly.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check with the Pythagorean identity",
          "workingLatex": "\\sin^2 2\\theta + \\cos^2 2\\theta = \\tfrac{57600}{83521} + \\tfrac{25921}{83521} = \\tfrac{83521}{83521} = 1",
          "explanation": "As a safeguard the two squared values should add to $1$; they do, confirming the answers are consistent.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Interpret the quadrant of 2theta",
          "workingLatex": "\\sin 2\\theta>0,\\ \\cos 2\\theta>0 \\;\\Rightarrow\\; 2\\theta \\text{ is a first-quadrant angle}",
          "explanation": "Both double-angle ratios are positive, which places $2\\theta$ (measured in standard position) in the first quadrant and gives a quick sign check.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the results",
          "workingLatex": "\\sin 2\\theta = \\tfrac{240}{289}, \\quad \\cos 2\\theta = \\tfrac{161}{289}, \\quad \\tan 2\\theta = \\tfrac{240}{161}",
          "explanation": "Collecting the three exact values completes the solution.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sin 2\\theta = \\tfrac{240}{289}$, $\\cos 2\\theta = \\tfrac{161}{289}$, $\\tan 2\\theta = \\tfrac{240}{161}$."
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
    "answerType": "exact",
    "tags": [
      "double angle",
      "quadrant",
      "exact values"
    ],
    "questionText": "Given that $\\cos\\theta = \\tfrac{5}{13}$ and that $270^\\circ < \\theta < 360^\\circ$, find the exact values of $\\sin 2\\theta$, $\\cos 2\\theta$ and $\\tan 2\\theta$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the signs from the quadrant",
          "workingLatex": "270^\\circ < \\theta < 360^\\circ \\;\\Rightarrow\\; \\cos\\theta>0,\\ \\sin\\theta<0",
          "explanation": "This is the fourth quadrant, where cosine is positive and sine is negative. The given $\\cos\\theta=\\tfrac{5}{13}$ fits, and it warns that $\\sin\\theta$ must be taken negative.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find sin theta from the Pythagorean identity",
          "workingLatex": "\\sin\\theta = -\\sqrt{1-\\cos^2\\theta} = -\\sqrt{1-\\tfrac{25}{169}} = -\\sqrt{\\tfrac{144}{169}} = -\\tfrac{12}{13}",
          "explanation": "From $\\sin^2\\theta+\\cos^2\\theta\\equiv1$ we get $\\sin\\theta=\\pm\\sqrt{1-\\cos^2\\theta}$; the fourth-quadrant rule selects the negative root.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the sine double-angle formula",
          "workingLatex": "\\sin 2\\theta = 2\\sin\\theta\\cos\\theta",
          "explanation": "The double angle is expressed through the single-angle ratios we have found.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute to find sin 2theta",
          "workingLatex": "\\sin 2\\theta = 2\\left(-\\tfrac{12}{13}\\right)\\left(\\tfrac{5}{13}\\right) = -\\tfrac{120}{169}",
          "explanation": "One negative and one positive factor multiply to a negative result.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Choose a cosine double-angle formula",
          "workingLatex": "\\cos 2\\theta = 2\\cos^2\\theta - 1",
          "explanation": "Here the $2\\cos^2\\theta-1$ form is convenient because $\\cos\\theta$ is exactly the ratio we were given.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute to find cos 2theta",
          "workingLatex": "\\cos 2\\theta = 2\\cdot\\tfrac{25}{169} - 1 = \\tfrac{50}{169} - \\tfrac{169}{169} = -\\tfrac{119}{169}",
          "explanation": "Writing $1$ as $\\tfrac{169}{169}$ makes the subtraction of fractions straightforward and gives a negative cosine.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Form tan 2theta by division",
          "workingLatex": "\\tan 2\\theta = \\dfrac{\\sin 2\\theta}{\\cos 2\\theta} = \\dfrac{-120/169}{-119/169} = \\tfrac{120}{119}",
          "explanation": "Dividing the two exact values, the $169$s cancel and the two negatives give a positive tangent.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check with the Pythagorean identity",
          "workingLatex": "\\sin^2 2\\theta + \\cos^2 2\\theta = \\tfrac{14400}{28561} + \\tfrac{14161}{28561} = \\tfrac{28561}{28561} = 1",
          "explanation": "The squared double-angle ratios sum to $1$, confirming the two values are consistent.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Interpret the quadrant of 2theta",
          "workingLatex": "\\sin 2\\theta<0,\\ \\cos 2\\theta<0 \\;\\Rightarrow\\; 2\\theta \\text{ is a third-quadrant angle}",
          "explanation": "Both ratios are negative, so $2\\theta$ (in standard position) lies in the third quadrant, a helpful check on the signs.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the results",
          "workingLatex": "\\sin 2\\theta = -\\tfrac{120}{169}, \\quad \\cos 2\\theta = -\\tfrac{119}{169}, \\quad \\tan 2\\theta = \\tfrac{120}{119}",
          "explanation": "Collecting the exact values gives the final answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sin 2\\theta = -\\tfrac{120}{169}$, $\\cos 2\\theta = -\\tfrac{119}{169}$, $\\tan 2\\theta = \\tfrac{120}{119}$."
    }
  },
  {
    "id": "al.y2.pure.compound-double-angles.q025",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Compound and double angles",
    "subtopicId": "al.y2.pure.compound-double-angles",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "double angle",
      "tangent",
      "quadrant"
    ],
    "questionText": "Given that $\\tan\\theta = \\tfrac{7}{24}$ and that $\\theta$ lies in the third quadrant, find the exact values of $\\tan 2\\theta$, $\\sin 2\\theta$ and $\\cos 2\\theta$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the signs from the quadrant",
          "workingLatex": "180^\\circ < \\theta < 270^\\circ \\;\\Rightarrow\\; \\tan\\theta>0,\\ \\sin\\theta<0,\\ \\cos\\theta<0",
          "explanation": "In the third quadrant tangent is positive, which is consistent with $\\tan\\theta=\\tfrac{7}{24}$, while both sine and cosine are negative there.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find sin and cos from a right triangle",
          "workingLatex": "\\tan\\theta=\\tfrac{7}{24}\\;\\Rightarrow\\;\\text{hyp}=\\sqrt{7^2+24^2}=25,\\quad \\sin\\theta=-\\tfrac{7}{25},\\ \\cos\\theta=-\\tfrac{24}{25}",
          "explanation": "A right triangle with opposite $7$ and adjacent $24$ has hypotenuse $25$. Both $\\sin\\theta$ and $\\cos\\theta$ are made negative to match the third quadrant.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the tangent double-angle formula",
          "workingLatex": "\\tan 2\\theta = \\dfrac{2\\tan\\theta}{1-\\tan^2\\theta}",
          "explanation": "This expresses $\\tan 2\\theta$ directly from $\\tan\\theta$, which is the ratio we were handed.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute to find tan 2theta",
          "workingLatex": "\\tan 2\\theta = \\dfrac{2\\cdot\\tfrac{7}{24}}{1-\\tfrac{49}{576}} = \\dfrac{\\tfrac{7}{12}}{\\tfrac{527}{576}} = \\tfrac{7}{12}\\cdot\\tfrac{576}{527} = \\tfrac{336}{527}",
          "explanation": "The denominator $1-\\tfrac{49}{576}=\\tfrac{527}{576}$; multiplying by its reciprocal clears the fractions.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the sine double-angle formula",
          "workingLatex": "\\sin 2\\theta = 2\\sin\\theta\\cos\\theta",
          "explanation": "The single-angle sine and cosine now give the remaining double-angle values.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute to find sin 2theta",
          "workingLatex": "\\sin 2\\theta = 2\\left(-\\tfrac{7}{25}\\right)\\left(-\\tfrac{24}{25}\\right) = \\tfrac{336}{625}",
          "explanation": "Two negative factors multiply to a positive sine.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find cos 2theta",
          "workingLatex": "\\cos 2\\theta = \\cos^2\\theta - \\sin^2\\theta = \\tfrac{576}{625} - \\tfrac{49}{625} = \\tfrac{527}{625}",
          "explanation": "The $\\cos^2\\theta-\\sin^2\\theta$ form uses the two ratios directly and keeps a common denominator.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check tan 2theta is consistent",
          "workingLatex": "\\dfrac{\\sin 2\\theta}{\\cos 2\\theta} = \\dfrac{336/625}{527/625} = \\tfrac{336}{527} = \\tan 2\\theta",
          "explanation": "Dividing $\\sin 2\\theta$ by $\\cos 2\\theta$ reproduces the earlier $\\tan 2\\theta$, so all three values agree.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Confirm with the Pythagorean identity",
          "workingLatex": "\\sin^2 2\\theta + \\cos^2 2\\theta = \\tfrac{112896}{390625} + \\tfrac{277729}{390625} = \\tfrac{390625}{390625} = 1",
          "explanation": "The squared double-angle ratios sum to $1$, a final safeguard on the arithmetic.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the results",
          "workingLatex": "\\tan 2\\theta = \\tfrac{336}{527}, \\quad \\sin 2\\theta = \\tfrac{336}{625}, \\quad \\cos 2\\theta = \\tfrac{527}{625}",
          "explanation": "Collecting the exact values completes the solution.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\tan 2\\theta = \\tfrac{336}{527}$, $\\sin 2\\theta = \\tfrac{336}{625}$, $\\cos 2\\theta = \\tfrac{527}{625}$."
    }
  },
  {
    "id": "al.y2.pure.compound-double-angles.q026",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Compound and double angles",
    "subtopicId": "al.y2.pure.compound-double-angles",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "compound angle",
      "addition formulae",
      "quadrant"
    ],
    "questionText": "Given that $\\sin A = \\tfrac{3}{5}$ where $A$ is acute, and $\\cos B = -\\tfrac{5}{13}$ where $B$ is obtuse, find the exact values of $\\sin(A+B)$, $\\cos(A-B)$ and $\\tan(A+B)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find cos A using the quadrant",
          "workingLatex": "A \\text{ acute} \\;\\Rightarrow\\; \\cos A = +\\sqrt{1-\\sin^2 A} = \\sqrt{1-\\tfrac{9}{25}} = \\tfrac{4}{5}",
          "explanation": "An acute angle sits in the first quadrant, where cosine is positive, so we take the positive root.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find sin B using the quadrant",
          "workingLatex": "B \\text{ obtuse} \\;\\Rightarrow\\; \\sin B = +\\sqrt{1-\\cos^2 B} = \\sqrt{1-\\tfrac{25}{169}} = \\tfrac{12}{13}",
          "explanation": "An obtuse angle lies in the second quadrant, where sine is positive, so $\\sin B$ takes the positive root even though $\\cos B$ is negative.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the formula for sin(A+B)",
          "workingLatex": "\\sin(A+B) = \\sin A\\cos B + \\cos A\\sin B",
          "explanation": "The addition formula combines the four single-angle ratios we now have.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute to find sin(A+B)",
          "workingLatex": "\\sin(A+B) = \\tfrac{3}{5}\\left(-\\tfrac{5}{13}\\right) + \\tfrac{4}{5}\\cdot\\tfrac{12}{13} = -\\tfrac{15}{65} + \\tfrac{48}{65} = \\tfrac{33}{65}",
          "explanation": "Keeping the common denominator $65$ makes the addition of the two terms clean.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the formula for cos(A-B)",
          "workingLatex": "\\cos(A-B) = \\cos A\\cos B + \\sin A\\sin B",
          "explanation": "For a difference of angles the cosine formula carries a plus sign between the two products.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute to find cos(A-B)",
          "workingLatex": "\\cos(A-B) = \\tfrac{4}{5}\\left(-\\tfrac{5}{13}\\right) + \\tfrac{3}{5}\\cdot\\tfrac{12}{13} = -\\tfrac{20}{65} + \\tfrac{36}{65} = \\tfrac{16}{65}",
          "explanation": "Again the sixty-fifths combine directly to the exact value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find cos(A+B) ready for the tangent",
          "workingLatex": "\\cos(A+B) = \\cos A\\cos B - \\sin A\\sin B = -\\tfrac{20}{65} - \\tfrac{36}{65} = -\\tfrac{56}{65}",
          "explanation": "To build $\\tan(A+B)$ by division we first need $\\cos(A+B)$, whose formula uses a minus sign for the sum.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Form tan(A+B)",
          "workingLatex": "\\tan(A+B) = \\dfrac{\\sin(A+B)}{\\cos(A+B)} = \\dfrac{33/65}{-56/65} = -\\tfrac{33}{56}",
          "explanation": "Dividing the sine and cosine of $A+B$, the $65$s cancel and the sign is negative.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Sanity check with the tan addition formula",
          "workingLatex": "\\dfrac{\\tan A+\\tan B}{1-\\tan A\\tan B} = \\dfrac{\\tfrac{3}{4}-\\tfrac{12}{5}}{1-\\tfrac{3}{4}\\left(-\\tfrac{12}{5}\\right)} = \\dfrac{-\\tfrac{33}{20}}{\\tfrac{56}{20}} = -\\tfrac{33}{56}",
          "explanation": "Using $\\tan A=\\tfrac{3}{4}$ and $\\tan B=-\\tfrac{12}{5}$ in the compound tangent formula reproduces the same value, confirming the result.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the results",
          "workingLatex": "\\sin(A+B) = \\tfrac{33}{65}, \\quad \\cos(A-B) = \\tfrac{16}{65}, \\quad \\tan(A+B) = -\\tfrac{33}{56}",
          "explanation": "Collecting the three exact values completes the answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sin(A+B) = \\tfrac{33}{65}$, $\\cos(A-B) = \\tfrac{16}{65}$, $\\tan(A+B) = -\\tfrac{33}{56}$."
    }
  },
  {
    "id": "al.y2.pure.compound-double-angles.q027",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Compound and double angles",
    "subtopicId": "al.y2.pure.compound-double-angles",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "compound angle",
      "addition formulae",
      "exact values"
    ],
    "questionText": "Given that $\\sin A = \\tfrac{8}{17}$ where $A$ is acute, and $\\cos B = -\\tfrac{3}{5}$ where $B$ is obtuse, find the exact values of $\\sin(A-B)$, $\\cos(A+B)$ and $\\tan(A-B)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find cos A using the quadrant",
          "workingLatex": "A \\text{ acute} \\;\\Rightarrow\\; \\cos A = +\\sqrt{1-\\tfrac{64}{289}} = \\sqrt{\\tfrac{225}{289}} = \\tfrac{15}{17}",
          "explanation": "An acute $A$ is a first-quadrant angle, so its cosine is the positive root.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find sin B using the quadrant",
          "workingLatex": "B \\text{ obtuse} \\;\\Rightarrow\\; \\sin B = +\\sqrt{1-\\tfrac{9}{25}} = \\sqrt{\\tfrac{16}{25}} = \\tfrac{4}{5}",
          "explanation": "For an obtuse $B$ (second quadrant) sine is positive while the given cosine is negative.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the formula for sin(A-B)",
          "workingLatex": "\\sin(A-B) = \\sin A\\cos B - \\cos A\\sin B",
          "explanation": "The difference formula subtracts the second product.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute to find sin(A-B)",
          "workingLatex": "\\sin(A-B) = \\tfrac{8}{17}\\left(-\\tfrac{3}{5}\\right) - \\tfrac{15}{17}\\cdot\\tfrac{4}{5} = -\\tfrac{24}{85} - \\tfrac{60}{85} = -\\tfrac{84}{85}",
          "explanation": "Both terms are negative, so they add to a single negative fraction over $85$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the formula for cos(A+B)",
          "workingLatex": "\\cos(A+B) = \\cos A\\cos B - \\sin A\\sin B",
          "explanation": "For a sum the cosine formula subtracts the sine-sine product.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute to find cos(A+B)",
          "workingLatex": "\\cos(A+B) = \\tfrac{15}{17}\\left(-\\tfrac{3}{5}\\right) - \\tfrac{8}{17}\\cdot\\tfrac{4}{5} = -\\tfrac{45}{85} - \\tfrac{32}{85} = -\\tfrac{77}{85}",
          "explanation": "Again both products are negative and combine over $85$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find cos(A-B) ready for the tangent",
          "workingLatex": "\\cos(A-B) = \\cos A\\cos B + \\sin A\\sin B = -\\tfrac{45}{85} + \\tfrac{32}{85} = -\\tfrac{13}{85}",
          "explanation": "The tangent of $A-B$ needs $\\cos(A-B)$, whose difference formula carries a plus sign.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Form tan(A-B)",
          "workingLatex": "\\tan(A-B) = \\dfrac{\\sin(A-B)}{\\cos(A-B)} = \\dfrac{-84/85}{-13/85} = \\tfrac{84}{13}",
          "explanation": "Dividing, the $85$s cancel and two negatives give a positive tangent.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Sanity check with the tan difference formula",
          "workingLatex": "\\dfrac{\\tan A-\\tan B}{1+\\tan A\\tan B} = \\dfrac{\\tfrac{8}{15}-\\left(-\\tfrac{4}{3}\\right)}{1+\\tfrac{8}{15}\\left(-\\tfrac{4}{3}\\right)} = \\dfrac{\\tfrac{28}{15}}{\\tfrac{13}{45}} = \\tfrac{84}{13}",
          "explanation": "With $\\tan A=\\tfrac{8}{15}$ and $\\tan B=-\\tfrac{4}{3}$ the compound formula gives the same $\\tfrac{84}{13}$, confirming the result.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the results",
          "workingLatex": "\\sin(A-B) = -\\tfrac{84}{85}, \\quad \\cos(A+B) = -\\tfrac{77}{85}, \\quad \\tan(A-B) = \\tfrac{84}{13}",
          "explanation": "Collecting the three exact values finishes the problem.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sin(A-B) = -\\tfrac{84}{85}$, $\\cos(A+B) = -\\tfrac{77}{85}$, $\\tan(A-B) = \\tfrac{84}{13}$."
    }
  },
  {
    "id": "al.y2.pure.compound-double-angles.q028",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Compound and double angles",
    "subtopicId": "al.y2.pure.compound-double-angles",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "compound angle",
      "quadrant",
      "sign reasoning"
    ],
    "questionText": "Given that $\\cos A = \\tfrac{4}{5}$ where $A$ is acute, and $\\sin B = \\tfrac{5}{13}$ where $B$ is obtuse, find the exact values of $\\sin(A+B)$ and $\\cos(A+B)$, and hence state the quadrant in which $A+B$ lies.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find sin A using the quadrant",
          "workingLatex": "A \\text{ acute} \\;\\Rightarrow\\; \\sin A = +\\sqrt{1-\\tfrac{16}{25}} = \\sqrt{\\tfrac{9}{25}} = \\tfrac{3}{5}",
          "explanation": "Acute $A$ lies in the first quadrant, so its sine is the positive root.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find cos B using the quadrant",
          "workingLatex": "B \\text{ obtuse} \\;\\Rightarrow\\; \\cos B = -\\sqrt{1-\\tfrac{25}{169}} = -\\sqrt{\\tfrac{144}{169}} = -\\tfrac{12}{13}",
          "explanation": "An obtuse $B$ is in the second quadrant, where cosine is negative, so we take the negative root.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the formula for sin(A+B)",
          "workingLatex": "\\sin(A+B) = \\sin A\\cos B + \\cos A\\sin B",
          "explanation": "The addition formula assembles the four ratios now known.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute to find sin(A+B)",
          "workingLatex": "\\sin(A+B) = \\tfrac{3}{5}\\left(-\\tfrac{12}{13}\\right) + \\tfrac{4}{5}\\cdot\\tfrac{5}{13} = -\\tfrac{36}{65} + \\tfrac{20}{65} = -\\tfrac{16}{65}",
          "explanation": "The negative first term outweighs the positive second, leaving a negative sine.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the formula for cos(A+B)",
          "workingLatex": "\\cos(A+B) = \\cos A\\cos B - \\sin A\\sin B",
          "explanation": "The cosine addition formula subtracts the product of the sines.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute to find cos(A+B)",
          "workingLatex": "\\cos(A+B) = \\tfrac{4}{5}\\left(-\\tfrac{12}{13}\\right) - \\tfrac{3}{5}\\cdot\\tfrac{5}{13} = -\\tfrac{48}{65} - \\tfrac{15}{65} = -\\tfrac{63}{65}",
          "explanation": "Both products are negative, so $\\cos(A+B)$ is negative.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Confirm with the Pythagorean identity",
          "workingLatex": "\\sin^2(A+B)+\\cos^2(A+B) = \\tfrac{256}{4225}+\\tfrac{3969}{4225} = \\tfrac{4225}{4225} = 1",
          "explanation": "The two squared values sum to $1$, checking that the sine and cosine are consistent.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find tan(A+B) as extra evidence",
          "workingLatex": "\\tan(A+B) = \\dfrac{\\sin(A+B)}{\\cos(A+B)} = \\dfrac{-16/65}{-63/65} = \\tfrac{16}{63}",
          "explanation": "Both parts are negative, so the tangent is positive, which will help pin down the quadrant.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Determine the quadrant of A+B",
          "workingLatex": "\\sin(A+B)<0,\\ \\cos(A+B)<0 \\;\\Rightarrow\\; A+B \\text{ lies in the third quadrant}",
          "explanation": "A negative sine together with a negative cosine (and a positive tangent) uniquely identifies the third quadrant.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the results",
          "workingLatex": "\\sin(A+B) = -\\tfrac{16}{65}, \\quad \\cos(A+B) = -\\tfrac{63}{65}, \\quad A+B \\text{ in the third quadrant}",
          "explanation": "Collecting the exact values and the quadrant completes the answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sin(A+B) = -\\tfrac{16}{65}$, $\\cos(A+B) = -\\tfrac{63}{65}$; since both are negative, $A+B$ lies in the third quadrant."
    }
  },
  {
    "id": "al.y2.pure.compound-double-angles.q029",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Compound and double angles",
    "subtopicId": "al.y2.pure.compound-double-angles",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "double angle",
      "reciprocal ratios",
      "quadrant"
    ],
    "questionText": "Given that $\\operatorname{cosec}\\theta = -\\tfrac{41}{40}$ and that $\\theta$ lies in the third quadrant, find the exact values of $\\sin 2\\theta$, $\\cos 2\\theta$ and $\\tan 2\\theta$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Convert cosec to sin",
          "workingLatex": "\\sin\\theta = \\dfrac{1}{\\operatorname{cosec}\\theta} = \\dfrac{1}{-\\tfrac{41}{40}} = -\\tfrac{40}{41}",
          "explanation": "Sine is the reciprocal of cosecant, so inverting the given value gives $\\sin\\theta=-\\tfrac{40}{41}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find cos theta using the quadrant",
          "workingLatex": "180^\\circ<\\theta<270^\\circ:\\quad \\cos\\theta = -\\sqrt{1-\\tfrac{1600}{1681}} = -\\sqrt{\\tfrac{81}{1681}} = -\\tfrac{9}{41}",
          "explanation": "In the third quadrant cosine is negative, so we take the negative square root in $\\cos\\theta=\\pm\\sqrt{1-\\sin^2\\theta}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the sine double-angle formula",
          "workingLatex": "\\sin 2\\theta = 2\\sin\\theta\\cos\\theta",
          "explanation": "The single-angle ratios feed straight into the double-angle formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute to find sin 2theta",
          "workingLatex": "\\sin 2\\theta = 2\\left(-\\tfrac{40}{41}\\right)\\left(-\\tfrac{9}{41}\\right) = \\tfrac{720}{1681}",
          "explanation": "Two negative factors give a positive $\\sin 2\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Choose a cosine double-angle formula",
          "workingLatex": "\\cos 2\\theta = 1 - 2\\sin^2\\theta",
          "explanation": "Because $\\sin\\theta$ is known exactly, the $1-2\\sin^2\\theta$ form is the quickest to use.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute to find cos 2theta",
          "workingLatex": "\\cos 2\\theta = 1 - 2\\cdot\\tfrac{1600}{1681} = \\tfrac{1681-3200}{1681} = -\\tfrac{1519}{1681}",
          "explanation": "Writing $1=\\tfrac{1681}{1681}$ makes the subtraction exact; the result is negative.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Form tan 2theta by division",
          "workingLatex": "\\tan 2\\theta = \\dfrac{\\sin 2\\theta}{\\cos 2\\theta} = \\dfrac{720/1681}{-1519/1681} = -\\tfrac{720}{1519}",
          "explanation": "The $1681$s cancel, and dividing a positive by a negative gives a negative tangent.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check with the Pythagorean identity",
          "workingLatex": "\\sin^2 2\\theta + \\cos^2 2\\theta = \\tfrac{518400}{2825761} + \\tfrac{2307361}{2825761} = \\tfrac{2825761}{2825761} = 1",
          "explanation": "The squared values sum to $1$, confirming the pair is consistent.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Interpret the quadrant of 2theta",
          "workingLatex": "\\sin 2\\theta>0,\\ \\cos 2\\theta<0 \\;\\Rightarrow\\; 2\\theta \\text{ is a second-quadrant angle}",
          "explanation": "A positive sine with a negative cosine places $2\\theta$ in the second quadrant, matching the negative tangent.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the results",
          "workingLatex": "\\sin 2\\theta = \\tfrac{720}{1681}, \\quad \\cos 2\\theta = -\\tfrac{1519}{1681}, \\quad \\tan 2\\theta = -\\tfrac{720}{1519}",
          "explanation": "Collecting the exact values gives the answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sin 2\\theta = \\tfrac{720}{1681}$, $\\cos 2\\theta = -\\tfrac{1519}{1681}$, $\\tan 2\\theta = -\\tfrac{720}{1519}$."
    }
  },
  {
    "id": "al.y2.pure.compound-double-angles.q030",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Compound and double angles",
    "subtopicId": "al.y2.pure.compound-double-angles",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "compound angle",
      "addition formulae",
      "quadrant"
    ],
    "questionText": "Given that $\\sin A = \\tfrac{4}{5}$ where $A$ is acute, and $\\cos B = -\\tfrac{8}{17}$ where $B$ is obtuse, find the exact values of $\\sin(A+B)$, $\\cos(A+B)$ and $\\tan(A+B)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find cos A using the quadrant",
          "workingLatex": "A \\text{ acute} \\;\\Rightarrow\\; \\cos A = +\\sqrt{1-\\tfrac{16}{25}} = \\sqrt{\\tfrac{9}{25}} = \\tfrac{3}{5}",
          "explanation": "Acute $A$ has a positive cosine, so we take the positive root.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find sin B using the quadrant",
          "workingLatex": "B \\text{ obtuse} \\;\\Rightarrow\\; \\sin B = +\\sqrt{1-\\tfrac{64}{289}} = \\sqrt{\\tfrac{225}{289}} = \\tfrac{15}{17}",
          "explanation": "For an obtuse $B$ (second quadrant) sine is positive while the given cosine is negative.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the formula for sin(A+B)",
          "workingLatex": "\\sin(A+B) = \\sin A\\cos B + \\cos A\\sin B",
          "explanation": "The addition formula brings together the four single-angle ratios.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute to find sin(A+B)",
          "workingLatex": "\\sin(A+B) = \\tfrac{4}{5}\\left(-\\tfrac{8}{17}\\right) + \\tfrac{3}{5}\\cdot\\tfrac{15}{17} = -\\tfrac{32}{85} + \\tfrac{45}{85} = \\tfrac{13}{85}",
          "explanation": "The positive term is larger, giving a small positive sine over $85$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the formula for cos(A+B)",
          "workingLatex": "\\cos(A+B) = \\cos A\\cos B - \\sin A\\sin B",
          "explanation": "The cosine addition formula subtracts the sine-sine product.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute to find cos(A+B)",
          "workingLatex": "\\cos(A+B) = \\tfrac{3}{5}\\left(-\\tfrac{8}{17}\\right) - \\tfrac{4}{5}\\cdot\\tfrac{15}{17} = -\\tfrac{24}{85} - \\tfrac{60}{85} = -\\tfrac{84}{85}",
          "explanation": "Both products are negative, so $\\cos(A+B)$ is negative.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Form tan(A+B)",
          "workingLatex": "\\tan(A+B) = \\dfrac{\\sin(A+B)}{\\cos(A+B)} = \\dfrac{13/85}{-84/85} = -\\tfrac{13}{84}",
          "explanation": "Dividing, the $85$s cancel; a positive over a negative gives a negative tangent.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Confirm with the Pythagorean identity",
          "workingLatex": "\\sin^2(A+B)+\\cos^2(A+B) = \\tfrac{169}{7225}+\\tfrac{7056}{7225} = \\tfrac{7225}{7225} = 1",
          "explanation": "The squared values sum to $1$, confirming the sine and cosine are consistent.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Interpret the quadrant of A+B",
          "workingLatex": "\\sin(A+B)>0,\\ \\cos(A+B)<0 \\;\\Rightarrow\\; A+B \\text{ lies in the second quadrant}",
          "explanation": "A positive sine with a negative cosine places $A+B$ in the second quadrant, matching the negative tangent.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the results",
          "workingLatex": "\\sin(A+B) = \\tfrac{13}{85}, \\quad \\cos(A+B) = -\\tfrac{84}{85}, \\quad \\tan(A+B) = -\\tfrac{13}{84}",
          "explanation": "Collecting the three exact values completes the solution.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sin(A+B) = \\tfrac{13}{85}$, $\\cos(A+B) = -\\tfrac{84}{85}$, $\\tan(A+B) = -\\tfrac{13}{84}$."
    }
  },
  {
    "id": "al.y2.pure.compound-double-angles.q031",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Compound and double angles",
    "subtopicId": "al.y2.pure.compound-double-angles",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "compound angle",
      "quadrant",
      "sign reasoning"
    ],
    "questionText": "Given that $\\cos A = -\\tfrac{4}{5}$ where $A$ is obtuse, and $\\sin B = -\\tfrac{5}{13}$ where $B$ lies in the third quadrant, find the exact values of $\\sin(A-B)$, $\\cos(A-B)$ and $\\tan(A-B)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find sin A using the quadrant",
          "workingLatex": "A \\text{ obtuse} \\;\\Rightarrow\\; \\sin A = +\\sqrt{1-\\tfrac{16}{25}} = \\sqrt{\\tfrac{9}{25}} = \\tfrac{3}{5}",
          "explanation": "An obtuse $A$ is in the second quadrant, where sine is positive, even though the given cosine is negative.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find cos B using the quadrant",
          "workingLatex": "B \\text{ in Q3} \\;\\Rightarrow\\; \\cos B = -\\sqrt{1-\\tfrac{25}{169}} = -\\sqrt{\\tfrac{144}{169}} = -\\tfrac{12}{13}",
          "explanation": "In the third quadrant both sine and cosine are negative, so $\\cos B$ takes the negative root to match the given $\\sin B=-\\tfrac{5}{13}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the formula for sin(A-B)",
          "workingLatex": "\\sin(A-B) = \\sin A\\cos B - \\cos A\\sin B",
          "explanation": "The difference formula subtracts the second product; careful sign handling is essential here because three of the four ratios are negative.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute to find sin(A-B)",
          "workingLatex": "\\sin(A-B) = \\tfrac{3}{5}\\left(-\\tfrac{12}{13}\\right) - \\left(-\\tfrac{4}{5}\\right)\\left(-\\tfrac{5}{13}\\right) = -\\tfrac{36}{65} - \\tfrac{20}{65} = -\\tfrac{56}{65}",
          "explanation": "The double negative $-\\left(-\\tfrac{4}{5}\\right)\\left(-\\tfrac{5}{13}\\right)$ evaluates to $-\\tfrac{20}{65}$, so both terms are negative.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the formula for cos(A-B)",
          "workingLatex": "\\cos(A-B) = \\cos A\\cos B + \\sin A\\sin B",
          "explanation": "The cosine difference formula adds the two products.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute to find cos(A-B)",
          "workingLatex": "\\cos(A-B) = \\left(-\\tfrac{4}{5}\\right)\\left(-\\tfrac{12}{13}\\right) + \\tfrac{3}{5}\\left(-\\tfrac{5}{13}\\right) = \\tfrac{48}{65} - \\tfrac{15}{65} = \\tfrac{33}{65}",
          "explanation": "The first product is positive and larger, so $\\cos(A-B)$ is positive.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Form tan(A-B)",
          "workingLatex": "\\tan(A-B) = \\dfrac{\\sin(A-B)}{\\cos(A-B)} = \\dfrac{-56/65}{33/65} = -\\tfrac{56}{33}",
          "explanation": "Dividing, the $65$s cancel; a negative over a positive gives a negative tangent.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Confirm with the Pythagorean identity",
          "workingLatex": "\\sin^2(A-B)+\\cos^2(A-B) = \\tfrac{3136}{4225}+\\tfrac{1089}{4225} = \\tfrac{4225}{4225} = 1",
          "explanation": "The squared values sum to $1$, checking that the sine and cosine are consistent.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Interpret the quadrant of A-B",
          "workingLatex": "\\sin(A-B)<0,\\ \\cos(A-B)>0 \\;\\Rightarrow\\; A-B \\text{ lies in the fourth quadrant}",
          "explanation": "A negative sine with a positive cosine places $A-B$ in the fourth quadrant, consistent with the negative tangent.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the results",
          "workingLatex": "\\sin(A-B) = -\\tfrac{56}{65}, \\quad \\cos(A-B) = \\tfrac{33}{65}, \\quad \\tan(A-B) = -\\tfrac{56}{33}",
          "explanation": "Collecting the three exact values completes the answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sin(A-B) = -\\tfrac{56}{65}$, $\\cos(A-B) = \\tfrac{33}{65}$, $\\tan(A-B) = -\\tfrac{56}{33}$."
    }
  },
  {
    "id": "al.y2.pure.compound-double-angles.q032",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Compound and double angles",
    "subtopicId": "al.y2.pure.compound-double-angles",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "proof",
    "tags": [
      "double angle",
      "proof",
      "identity"
    ],
    "questionText": "Prove the identity $\\dfrac{\\sin 2\\theta}{1 + \\cos 2\\theta} \\equiv \\tan\\theta$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the LHS and the plan",
          "workingLatex": "\\text{LHS} = \\dfrac{\\sin 2\\theta}{1 + \\cos 2\\theta}",
          "explanation": "We work from the left-hand side and aim to reach $\\tan\\theta$. The plan is to rewrite every double angle in terms of single-angle ratios so that a common factor cancels.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expand the numerator",
          "workingLatex": "\\sin 2\\theta = 2\\sin\\theta\\cos\\theta",
          "explanation": "The numerator is a double angle, so $\\sin 2\\theta = 2\\sin\\theta\\cos\\theta$ turns it into the single-angle ratios we want to end up with.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Choose a form of cos 2theta for the denominator",
          "workingLatex": "\\cos 2\\theta = 2\\cos^2\\theta - 1",
          "explanation": "There are three versions of $\\cos 2\\theta$. We pick $2\\cos^2\\theta - 1$ because adding $1$ to it removes the constant and leaves a single clean term.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the denominator",
          "workingLatex": "1 + \\cos 2\\theta = 1 + (2\\cos^2\\theta - 1) = 2\\cos^2\\theta",
          "explanation": "The $+1$ and $-1$ cancel, so the denominator collapses to $2\\cos^2\\theta$, which shares factors with the numerator.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rewrite the whole fraction",
          "workingLatex": "\\dfrac{\\sin 2\\theta}{1 + \\cos 2\\theta} = \\dfrac{2\\sin\\theta\\cos\\theta}{2\\cos^2\\theta}",
          "explanation": "Placing the rewritten numerator over the rewritten denominator sets up the cancellation, since both contain the factor $2\\cos\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Cancel the common factor",
          "workingLatex": "\\dfrac{2\\sin\\theta\\cos\\theta}{2\\cos^2\\theta} = \\dfrac{\\sin\\theta}{\\cos\\theta}",
          "explanation": "Dividing top and bottom by $2\\cos\\theta$ removes the shared factor, leaving the simple ratio $\\dfrac{\\sin\\theta}{\\cos\\theta}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Recognise the tangent ratio",
          "workingLatex": "\\dfrac{\\sin\\theta}{\\cos\\theta} = \\tan\\theta",
          "explanation": "By definition $\\tan\\theta = \\dfrac{\\sin\\theta}{\\cos\\theta}$, so the simplified fraction is exactly the right-hand side.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Confirm the RHS is reached",
          "workingLatex": "\\dfrac{\\sin 2\\theta}{1 + \\cos 2\\theta} = \\tan\\theta",
          "explanation": "The LHS has been transformed step by step into $\\tan\\theta$, which is the RHS we were aiming for.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Numerical check at theta = 30 degrees",
          "workingLatex": "\\dfrac{\\sin 60^\\circ}{1 + \\cos 60^\\circ} = \\dfrac{\\sqrt3/2}{3/2} = \\dfrac{\\sqrt3}{3} = \\dfrac{1}{\\sqrt3} = \\tan 30^\\circ",
          "explanation": "Testing a specific value guards against algebra slips: at $\\theta = 30^\\circ$ both sides equal $\\dfrac{1}{\\sqrt3}$, confirming the identity.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Conclude the proof",
          "workingLatex": "\\dfrac{\\sin 2\\theta}{1 + \\cos 2\\theta} \\equiv \\tan\\theta \\quad \\blacksquare",
          "explanation": "Since the LHS reduces to the RHS for all valid $\\theta$, the identity is proved.",
          "diagram": null
        }
      ],
      "finalAnswer": "Using $\\sin 2\\theta = 2\\sin\\theta\\cos\\theta$ and $1 + \\cos 2\\theta = 2\\cos^2\\theta$, the fraction simplifies to $\\dfrac{\\sin\\theta}{\\cos\\theta} = \\tan\\theta$, so $\\dfrac{\\sin 2\\theta}{1 + \\cos 2\\theta} \\equiv \\tan\\theta$ as required."
    }
  },
  {
    "id": "al.y2.pure.compound-double-angles.q033",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Compound and double angles",
    "subtopicId": "al.y2.pure.compound-double-angles",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "proof",
    "tags": [
      "double angle",
      "proof",
      "identity"
    ],
    "questionText": "Prove the identity $\\dfrac{1 - \\cos 2\\theta}{\\sin 2\\theta} \\equiv \\tan\\theta$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the LHS and the plan",
          "workingLatex": "\\text{LHS} = \\dfrac{1 - \\cos 2\\theta}{\\sin 2\\theta}",
          "explanation": "We start from the left-hand side and head towards $\\tan\\theta$, converting each double angle into single-angle ratios so a factor cancels.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose a form of cos 2theta for the numerator",
          "workingLatex": "\\cos 2\\theta = 1 - 2\\sin^2\\theta",
          "explanation": "We pick the $1 - 2\\sin^2\\theta$ version because subtracting it from $1$ will cancel the constant and leave a pure sine term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify the numerator",
          "workingLatex": "1 - \\cos 2\\theta = 1 - (1 - 2\\sin^2\\theta) = 2\\sin^2\\theta",
          "explanation": "The two $1$'s cancel, so the numerator becomes $2\\sin^2\\theta$, a single term that shares a factor with the denominator.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Expand the denominator",
          "workingLatex": "\\sin 2\\theta = 2\\sin\\theta\\cos\\theta",
          "explanation": "The sine double-angle formula rewrites the denominator using single-angle ratios; it contains the factor $2\\sin\\theta$ that the numerator also has.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rewrite the whole fraction",
          "workingLatex": "\\dfrac{1 - \\cos 2\\theta}{\\sin 2\\theta} = \\dfrac{2\\sin^2\\theta}{2\\sin\\theta\\cos\\theta}",
          "explanation": "With both parts rewritten, the shared factor $2\\sin\\theta$ is now visible in numerator and denominator.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Cancel the common factor",
          "workingLatex": "\\dfrac{2\\sin^2\\theta}{2\\sin\\theta\\cos\\theta} = \\dfrac{\\sin\\theta}{\\cos\\theta}",
          "explanation": "Dividing top and bottom by $2\\sin\\theta$ leaves the ratio $\\dfrac{\\sin\\theta}{\\cos\\theta}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Recognise the tangent ratio",
          "workingLatex": "\\dfrac{\\sin\\theta}{\\cos\\theta} = \\tan\\theta",
          "explanation": "By definition this ratio is $\\tan\\theta$, which is exactly the target expression.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Confirm the RHS is reached",
          "workingLatex": "\\dfrac{1 - \\cos 2\\theta}{\\sin 2\\theta} = \\tan\\theta",
          "explanation": "The LHS has been reduced to $\\tan\\theta$, matching the right-hand side.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Numerical check at theta = 30 degrees",
          "workingLatex": "\\dfrac{1 - \\cos 60^\\circ}{\\sin 60^\\circ} = \\dfrac{1/2}{\\sqrt3/2} = \\dfrac{1}{\\sqrt3} = \\tan 30^\\circ",
          "explanation": "At $\\theta = 30^\\circ$ both sides equal $\\dfrac{1}{\\sqrt3}$, which supports the identity.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Conclude the proof",
          "workingLatex": "\\dfrac{1 - \\cos 2\\theta}{\\sin 2\\theta} \\equiv \\tan\\theta \\quad \\blacksquare",
          "explanation": "The LHS equals the RHS for all valid $\\theta$, so the identity is proved.",
          "diagram": null
        }
      ],
      "finalAnswer": "Using $1 - \\cos 2\\theta = 2\\sin^2\\theta$ and $\\sin 2\\theta = 2\\sin\\theta\\cos\\theta$, the fraction reduces to $\\dfrac{\\sin\\theta}{\\cos\\theta} = \\tan\\theta$, hence $\\dfrac{1 - \\cos 2\\theta}{\\sin 2\\theta} \\equiv \\tan\\theta$."
    }
  },
  {
    "id": "al.y2.pure.compound-double-angles.q034",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Compound and double angles",
    "subtopicId": "al.y2.pure.compound-double-angles",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "proof",
    "tags": [
      "double angle",
      "proof",
      "cotangent"
    ],
    "questionText": "Prove the identity $\\dfrac{1 + \\cos 2\\theta}{\\sin 2\\theta} \\equiv \\cot\\theta$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the LHS and the plan",
          "workingLatex": "\\text{LHS} = \\dfrac{1 + \\cos 2\\theta}{\\sin 2\\theta}",
          "explanation": "We start from the left-hand side and aim for $\\cot\\theta$, rewriting the double angles as single-angle ratios so a factor cancels.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose a form of cos 2theta for the numerator",
          "workingLatex": "\\cos 2\\theta = 2\\cos^2\\theta - 1",
          "explanation": "We pick the $2\\cos^2\\theta - 1$ version so that adding $1$ removes the constant and leaves a pure cosine term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify the numerator",
          "workingLatex": "1 + \\cos 2\\theta = 1 + (2\\cos^2\\theta - 1) = 2\\cos^2\\theta",
          "explanation": "The $+1$ and $-1$ cancel, so the numerator becomes $2\\cos^2\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Expand the denominator",
          "workingLatex": "\\sin 2\\theta = 2\\sin\\theta\\cos\\theta",
          "explanation": "The sine double-angle formula puts the denominator into single-angle ratios and provides the factor $2\\cos\\theta$ shared with the numerator.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rewrite the whole fraction",
          "workingLatex": "\\dfrac{1 + \\cos 2\\theta}{\\sin 2\\theta} = \\dfrac{2\\cos^2\\theta}{2\\sin\\theta\\cos\\theta}",
          "explanation": "The common factor $2\\cos\\theta$ is now visible in both numerator and denominator.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Cancel the common factor",
          "workingLatex": "\\dfrac{2\\cos^2\\theta}{2\\sin\\theta\\cos\\theta} = \\dfrac{\\cos\\theta}{\\sin\\theta}",
          "explanation": "Dividing top and bottom by $2\\cos\\theta$ leaves the ratio $\\dfrac{\\cos\\theta}{\\sin\\theta}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Recognise the cotangent ratio",
          "workingLatex": "\\dfrac{\\cos\\theta}{\\sin\\theta} = \\cot\\theta",
          "explanation": "By definition $\\cot\\theta = \\dfrac{\\cos\\theta}{\\sin\\theta}$, which is exactly the right-hand side.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Confirm the RHS is reached",
          "workingLatex": "\\dfrac{1 + \\cos 2\\theta}{\\sin 2\\theta} = \\cot\\theta",
          "explanation": "The LHS has been reduced to $\\cot\\theta$, matching the right-hand side.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Numerical check at theta = 30 degrees",
          "workingLatex": "\\dfrac{1 + \\cos 60^\\circ}{\\sin 60^\\circ} = \\dfrac{3/2}{\\sqrt3/2} = \\dfrac{3}{\\sqrt3} = \\sqrt3 = \\cot 30^\\circ",
          "explanation": "At $\\theta = 30^\\circ$ both sides equal $\\sqrt3$, consistent with the identity.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Conclude the proof",
          "workingLatex": "\\dfrac{1 + \\cos 2\\theta}{\\sin 2\\theta} \\equiv \\cot\\theta \\quad \\blacksquare",
          "explanation": "The LHS equals the RHS for all valid $\\theta$, so the identity is proved.",
          "diagram": null
        }
      ],
      "finalAnswer": "Using $1 + \\cos 2\\theta = 2\\cos^2\\theta$ and $\\sin 2\\theta = 2\\sin\\theta\\cos\\theta$, the fraction reduces to $\\dfrac{\\cos\\theta}{\\sin\\theta} = \\cot\\theta$, hence $\\dfrac{1 + \\cos 2\\theta}{\\sin 2\\theta} \\equiv \\cot\\theta$."
    }
  },
  {
    "id": "al.y2.pure.compound-double-angles.q035",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Compound and double angles",
    "subtopicId": "al.y2.pure.compound-double-angles",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "proof",
    "tags": [
      "double angle",
      "proof",
      "factorising"
    ],
    "questionText": "Prove the identity $\\dfrac{\\cos 2\\theta}{\\cos\\theta + \\sin\\theta} \\equiv \\cos\\theta - \\sin\\theta$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the LHS and the plan",
          "workingLatex": "\\text{LHS} = \\dfrac{\\cos 2\\theta}{\\cos\\theta + \\sin\\theta}",
          "explanation": "We start from the left-hand side. The denominator is $\\cos\\theta + \\sin\\theta$, so the plan is to factorise $\\cos 2\\theta$ to produce that same factor and then cancel it.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose a form of cos 2theta",
          "workingLatex": "\\cos 2\\theta = \\cos^2\\theta - \\sin^2\\theta",
          "explanation": "We use the $\\cos^2\\theta - \\sin^2\\theta$ version because it is a difference of two squares, which factorises neatly.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall the difference of two squares",
          "workingLatex": "a^2 - b^2 = (a - b)(a + b)",
          "explanation": "Any difference of two squares splits into these two brackets; here $a = \\cos\\theta$ and $b = \\sin\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Factor the numerator",
          "workingLatex": "\\cos^2\\theta - \\sin^2\\theta = (\\cos\\theta - \\sin\\theta)(\\cos\\theta + \\sin\\theta)",
          "explanation": "Applying the rule produces the factor $(\\cos\\theta + \\sin\\theta)$, which is precisely the denominator we want to cancel.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rewrite the fraction with the factored numerator",
          "workingLatex": "\\dfrac{\\cos 2\\theta}{\\cos\\theta + \\sin\\theta} = \\dfrac{(\\cos\\theta - \\sin\\theta)(\\cos\\theta + \\sin\\theta)}{\\cos\\theta + \\sin\\theta}",
          "explanation": "Substituting the factored numerator makes the shared factor $(\\cos\\theta + \\sin\\theta)$ visible top and bottom.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Cancel the common factor",
          "workingLatex": "\\dfrac{(\\cos\\theta - \\sin\\theta)(\\cos\\theta + \\sin\\theta)}{\\cos\\theta + \\sin\\theta} = \\cos\\theta - \\sin\\theta",
          "explanation": "Dividing top and bottom by $(\\cos\\theta + \\sin\\theta)$, which is non-zero wherever the expression is defined, leaves just $\\cos\\theta - \\sin\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the simplified expression",
          "workingLatex": "\\dfrac{\\cos 2\\theta}{\\cos\\theta + \\sin\\theta} = \\cos\\theta - \\sin\\theta",
          "explanation": "The double angle has been eliminated and the LHS now equals $\\cos\\theta - \\sin\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Confirm the RHS is reached",
          "workingLatex": "\\cos\\theta - \\sin\\theta = \\text{RHS}",
          "explanation": "The simplified LHS is identical to the right-hand side we were asked to reach.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Numerical check at theta = 30 degrees",
          "workingLatex": "\\dfrac{\\cos 60^\\circ}{\\cos 30^\\circ + \\sin 30^\\circ} = \\dfrac{1/2}{(\\sqrt3+1)/2} = \\dfrac{1}{\\sqrt3+1} = \\dfrac{\\sqrt3-1}{2} = \\cos 30^\\circ - \\sin 30^\\circ",
          "explanation": "At $\\theta = 30^\\circ$ both sides equal $\\dfrac{\\sqrt3-1}{2}$, supporting the identity.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Conclude the proof",
          "workingLatex": "\\dfrac{\\cos 2\\theta}{\\cos\\theta + \\sin\\theta} \\equiv \\cos\\theta - \\sin\\theta \\quad \\blacksquare",
          "explanation": "The LHS reduces to the RHS for all valid $\\theta$, so the identity is proved.",
          "diagram": null
        }
      ],
      "finalAnswer": "Writing $\\cos 2\\theta = \\cos^2\\theta - \\sin^2\\theta = (\\cos\\theta - \\sin\\theta)(\\cos\\theta + \\sin\\theta)$ and cancelling the common factor $(\\cos\\theta + \\sin\\theta)$ gives $\\cos\\theta - \\sin\\theta$, so $\\dfrac{\\cos 2\\theta}{\\cos\\theta + \\sin\\theta} \\equiv \\cos\\theta - \\sin\\theta$."
    }
  },
  {
    "id": "al.y2.pure.compound-double-angles.q036",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Compound and double angles",
    "subtopicId": "al.y2.pure.compound-double-angles",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "proof",
    "tags": [
      "double angle",
      "proof",
      "expanding"
    ],
    "questionText": "Prove the identity $(\\cos A + \\sin A)^2 \\equiv 1 + \\sin 2A$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the LHS and the plan",
          "workingLatex": "\\text{LHS} = (\\cos A + \\sin A)^2",
          "explanation": "We work from the left-hand side. The plan is to expand the square, then apply the Pythagorean identity and the sine double-angle formula.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expand the square",
          "workingLatex": "(\\cos A + \\sin A)^2 = \\cos^2 A + 2\\sin A\\cos A + \\sin^2 A",
          "explanation": "Using $(x + y)^2 = x^2 + 2xy + y^2$ with $x = \\cos A$ and $y = \\sin A$ produces three terms.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Group the squared terms",
          "workingLatex": "= (\\cos^2 A + \\sin^2 A) + 2\\sin A\\cos A",
          "explanation": "Reordering so the squared terms sit together prepares the expression for the Pythagorean identity.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the Pythagorean identity",
          "workingLatex": "\\cos^2 A + \\sin^2 A = 1",
          "explanation": "For every angle $A$ the squared sine and cosine sum to $1$, so the bracket is simply $1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the value of the bracket",
          "workingLatex": "= 1 + 2\\sin A\\cos A",
          "explanation": "Replacing the bracket with $1$ leaves the constant plus the product term.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Recognise the sine double angle",
          "workingLatex": "2\\sin A\\cos A = \\sin 2A",
          "explanation": "The double-angle formula read from right to left turns $2\\sin A\\cos A$ into $\\sin 2A$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute the double angle",
          "workingLatex": "= 1 + \\sin 2A",
          "explanation": "Replacing the product term gives $1 + \\sin 2A$, exactly the target expression.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Confirm the RHS is reached",
          "workingLatex": "(\\cos A + \\sin A)^2 = 1 + \\sin 2A",
          "explanation": "The expanded LHS has become the right-hand side.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Numerical check at A = 30 degrees",
          "workingLatex": "(\\cos 30^\\circ + \\sin 30^\\circ)^2 = \\left(\\dfrac{\\sqrt3+1}{2}\\right)^2 = \\dfrac{2+\\sqrt3}{2}, \\quad 1 + \\sin 60^\\circ = \\dfrac{2+\\sqrt3}{2}",
          "explanation": "At $A = 30^\\circ$ both sides equal $\\dfrac{2+\\sqrt3}{2}$, supporting the identity.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Conclude the proof",
          "workingLatex": "(\\cos A + \\sin A)^2 \\equiv 1 + \\sin 2A \\quad \\blacksquare",
          "explanation": "The LHS equals the RHS for all angles $A$, so the identity is proved.",
          "diagram": null
        }
      ],
      "finalAnswer": "Expanding gives $\\cos^2 A + 2\\sin A\\cos A + \\sin^2 A$; the Pythagorean identity turns $\\cos^2 A + \\sin^2 A$ into $1$ and the double-angle formula turns $2\\sin A\\cos A$ into $\\sin 2A$, so $(\\cos A + \\sin A)^2 \\equiv 1 + \\sin 2A$."
    }
  },
  {
    "id": "al.y2.pure.compound-double-angles.q037",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Compound and double angles",
    "subtopicId": "al.y2.pure.compound-double-angles",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "proof",
    "tags": [
      "double angle",
      "proof",
      "reciprocal trig"
    ],
    "questionText": "Prove the identity $\\cot\\theta - \\tan\\theta \\equiv 2\\cot 2\\theta$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the LHS and the plan",
          "workingLatex": "\\text{LHS} = \\cot\\theta - \\tan\\theta",
          "explanation": "We work from the left-hand side. The plan is to write both terms in sine and cosine, combine them over one denominator, then recognise the double-angle expressions that appear.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write in terms of sine and cosine",
          "workingLatex": "\\cot\\theta - \\tan\\theta = \\dfrac{\\cos\\theta}{\\sin\\theta} - \\dfrac{\\sin\\theta}{\\cos\\theta}",
          "explanation": "Since $\\cot\\theta = \\dfrac{\\cos\\theta}{\\sin\\theta}$ and $\\tan\\theta = \\dfrac{\\sin\\theta}{\\cos\\theta}$, converting lets us combine the two fractions.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Combine over a common denominator",
          "workingLatex": "= \\dfrac{\\cos\\theta\\cos\\theta - \\sin\\theta\\sin\\theta}{\\sin\\theta\\cos\\theta}",
          "explanation": "The common denominator is $\\sin\\theta\\cos\\theta$; each numerator is scaled accordingly and the fractions subtract into one.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the numerator",
          "workingLatex": "= \\dfrac{\\cos^2\\theta - \\sin^2\\theta}{\\sin\\theta\\cos\\theta}",
          "explanation": "Writing the products as squares tidies the numerator and reveals a familiar double-angle pattern.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Identify the numerator as cos 2theta",
          "workingLatex": "\\cos^2\\theta - \\sin^2\\theta = \\cos 2\\theta",
          "explanation": "This is exactly the cosine double-angle formula, so the numerator is $\\cos 2\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Rewrite the denominator with a double angle",
          "workingLatex": "\\sin\\theta\\cos\\theta = \\tfrac{1}{2}\\sin 2\\theta",
          "explanation": "Because $\\sin 2\\theta = 2\\sin\\theta\\cos\\theta$, halving both sides shows $\\sin\\theta\\cos\\theta = \\tfrac{1}{2}\\sin 2\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute both double-angle forms",
          "workingLatex": "\\dfrac{\\cos^2\\theta - \\sin^2\\theta}{\\sin\\theta\\cos\\theta} = \\dfrac{\\cos 2\\theta}{\\tfrac{1}{2}\\sin 2\\theta}",
          "explanation": "Replacing the numerator and denominator turns the whole expression into a ratio of double-angle functions.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Simplify the compound fraction",
          "workingLatex": "\\dfrac{\\cos 2\\theta}{\\tfrac{1}{2}\\sin 2\\theta} = \\dfrac{2\\cos 2\\theta}{\\sin 2\\theta}",
          "explanation": "Dividing by $\\tfrac{1}{2}$ is the same as multiplying by $2$, which clears the fraction in the denominator.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Recognise the cotangent",
          "workingLatex": "\\dfrac{2\\cos 2\\theta}{\\sin 2\\theta} = 2\\cot 2\\theta",
          "explanation": "Since $\\dfrac{\\cos 2\\theta}{\\sin 2\\theta} = \\cot 2\\theta$, the expression is $2\\cot 2\\theta$, the right-hand side.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Numerical check at theta = 30 degrees",
          "workingLatex": "\\cot 30^\\circ - \\tan 30^\\circ = \\sqrt3 - \\dfrac{1}{\\sqrt3} = \\dfrac{2}{\\sqrt3} = 2\\cot 60^\\circ",
          "explanation": "At $\\theta = 30^\\circ$ both sides equal $\\dfrac{2}{\\sqrt3}$, consistent with the identity.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Conclude the proof",
          "workingLatex": "\\cot\\theta - \\tan\\theta \\equiv 2\\cot 2\\theta \\quad \\blacksquare",
          "explanation": "The LHS reduces to the RHS for all valid $\\theta$, so the identity is proved.",
          "diagram": null
        }
      ],
      "finalAnswer": "Combining $\\dfrac{\\cos\\theta}{\\sin\\theta} - \\dfrac{\\sin\\theta}{\\cos\\theta}$ gives $\\dfrac{\\cos 2\\theta}{\\tfrac{1}{2}\\sin 2\\theta} = \\dfrac{2\\cos 2\\theta}{\\sin 2\\theta} = 2\\cot 2\\theta$, so $\\cot\\theta - \\tan\\theta \\equiv 2\\cot 2\\theta$."
    }
  },
  {
    "id": "al.y2.pure.compound-double-angles.q038",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Compound and double angles",
    "subtopicId": "al.y2.pure.compound-double-angles",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "proof",
    "tags": [
      "double angle",
      "proof",
      "reciprocal trig"
    ],
    "questionText": "Prove the identity $\\tan\\theta + \\cot\\theta \\equiv 2\\operatorname{cosec} 2\\theta$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the LHS and the plan",
          "workingLatex": "\\text{LHS} = \\tan\\theta + \\cot\\theta",
          "explanation": "We work from the left-hand side. The plan is to write both terms in sine and cosine, combine them, use the Pythagorean identity, then bring in a double angle.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write in terms of sine and cosine",
          "workingLatex": "\\tan\\theta + \\cot\\theta = \\dfrac{\\sin\\theta}{\\cos\\theta} + \\dfrac{\\cos\\theta}{\\sin\\theta}",
          "explanation": "Using $\\tan\\theta = \\dfrac{\\sin\\theta}{\\cos\\theta}$ and $\\cot\\theta = \\dfrac{\\cos\\theta}{\\sin\\theta}$ prepares the two fractions to be combined.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Combine over a common denominator",
          "workingLatex": "= \\dfrac{\\sin\\theta\\sin\\theta + \\cos\\theta\\cos\\theta}{\\sin\\theta\\cos\\theta}",
          "explanation": "The common denominator is $\\sin\\theta\\cos\\theta$; adding the scaled numerators gives a single fraction.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the numerator",
          "workingLatex": "= \\dfrac{\\sin^2\\theta + \\cos^2\\theta}{\\sin\\theta\\cos\\theta}",
          "explanation": "Writing the products as squares shows the numerator is the Pythagorean sum.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply the Pythagorean identity",
          "workingLatex": "\\sin^2\\theta + \\cos^2\\theta = 1",
          "explanation": "For every angle the squared sine and cosine add to $1$, so the numerator collapses to a constant.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Replace the numerator with 1",
          "workingLatex": "\\dfrac{\\sin^2\\theta + \\cos^2\\theta}{\\sin\\theta\\cos\\theta} = \\dfrac{1}{\\sin\\theta\\cos\\theta}",
          "explanation": "The whole expression is now a single reciprocal of $\\sin\\theta\\cos\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Rewrite the denominator with a double angle",
          "workingLatex": "\\sin\\theta\\cos\\theta = \\tfrac{1}{2}\\sin 2\\theta",
          "explanation": "Halving $\\sin 2\\theta = 2\\sin\\theta\\cos\\theta$ gives $\\sin\\theta\\cos\\theta = \\tfrac{1}{2}\\sin 2\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute and simplify",
          "workingLatex": "\\dfrac{1}{\\sin\\theta\\cos\\theta} = \\dfrac{1}{\\tfrac{1}{2}\\sin 2\\theta} = \\dfrac{2}{\\sin 2\\theta}",
          "explanation": "Dividing $1$ by $\\tfrac{1}{2}\\sin 2\\theta$ is the same as multiplying by $2$, giving $\\dfrac{2}{\\sin 2\\theta}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Recognise the cosecant",
          "workingLatex": "\\dfrac{2}{\\sin 2\\theta} = 2\\operatorname{cosec} 2\\theta",
          "explanation": "Since $\\operatorname{cosec} 2\\theta = \\dfrac{1}{\\sin 2\\theta}$, the expression is $2\\operatorname{cosec} 2\\theta$, the right-hand side.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Numerical check at theta = 30 degrees",
          "workingLatex": "\\tan 30^\\circ + \\cot 30^\\circ = \\dfrac{1}{\\sqrt3} + \\sqrt3 = \\dfrac{4}{\\sqrt3} = 2\\operatorname{cosec} 60^\\circ",
          "explanation": "At $\\theta = 30^\\circ$ both sides equal $\\dfrac{4}{\\sqrt3}$, consistent with the identity.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Conclude the proof",
          "workingLatex": "\\tan\\theta + \\cot\\theta \\equiv 2\\operatorname{cosec} 2\\theta \\quad \\blacksquare",
          "explanation": "The LHS reduces to the RHS for all valid $\\theta$, so the identity is proved.",
          "diagram": null
        }
      ],
      "finalAnswer": "Combining $\\dfrac{\\sin\\theta}{\\cos\\theta} + \\dfrac{\\cos\\theta}{\\sin\\theta}$ gives $\\dfrac{1}{\\sin\\theta\\cos\\theta} = \\dfrac{2}{\\sin 2\\theta} = 2\\operatorname{cosec} 2\\theta$, so $\\tan\\theta + \\cot\\theta \\equiv 2\\operatorname{cosec} 2\\theta$."
    }
  },
  {
    "id": "al.y2.pure.compound-double-angles.q039",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Compound and double angles",
    "subtopicId": "al.y2.pure.compound-double-angles",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "proof",
    "tags": [
      "compound angle",
      "triple angle",
      "proof"
    ],
    "questionText": "Prove that $\\sin 3\\theta \\equiv 3\\sin\\theta - 4\\sin^3\\theta$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Split the triple angle",
          "workingLatex": "\\sin 3\\theta = \\sin(2\\theta + \\theta)",
          "explanation": "We only have addition and double-angle formulae, so we write $3\\theta$ as the compound angle $2\\theta + \\theta$ to make them apply.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply the sine addition formula",
          "workingLatex": "\\sin(2\\theta + \\theta) = \\sin 2\\theta\\cos\\theta + \\cos 2\\theta\\sin\\theta",
          "explanation": "Using $\\sin(A + B) = \\sin A\\cos B + \\cos A\\sin B$ with $A = 2\\theta$ and $B = \\theta$ expands the compound angle.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the sine double angle",
          "workingLatex": "\\sin 2\\theta = 2\\sin\\theta\\cos\\theta",
          "explanation": "Replacing $\\sin 2\\theta$ moves everything towards single-angle ratios.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Choose a sine-only cos 2theta",
          "workingLatex": "\\cos 2\\theta = 1 - 2\\sin^2\\theta",
          "explanation": "Because the target answer is written purely in $\\sin\\theta$, we pick the version of $\\cos 2\\theta$ that contains only sine.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute both double angles",
          "workingLatex": "\\sin 3\\theta = (2\\sin\\theta\\cos\\theta)\\cos\\theta + (1 - 2\\sin^2\\theta)\\sin\\theta",
          "explanation": "Putting both expansions in place gives an expression in $\\sin\\theta$ and $\\cos\\theta$ only.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Expand the brackets",
          "workingLatex": "= 2\\sin\\theta\\cos^2\\theta + \\sin\\theta - 2\\sin^3\\theta",
          "explanation": "Multiplying out each product separates the terms so we can deal with the remaining $\\cos^2\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Replace cos squared with sine",
          "workingLatex": "\\cos^2\\theta = 1 - \\sin^2\\theta",
          "explanation": "The Pythagorean identity converts the last cosine term into sine so the whole answer is in $\\sin\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute for cos squared",
          "workingLatex": "= 2\\sin\\theta(1 - \\sin^2\\theta) + \\sin\\theta - 2\\sin^3\\theta",
          "explanation": "Only sines remain now; expanding the bracket will let us collect like terms.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Expand the remaining bracket",
          "workingLatex": "= 2\\sin\\theta - 2\\sin^3\\theta + \\sin\\theta - 2\\sin^3\\theta",
          "explanation": "Distributing $2\\sin\\theta$ across $(1 - \\sin^2\\theta)$ gives $2\\sin\\theta - 2\\sin^3\\theta$, leaving four terms to gather.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Collect like terms",
          "workingLatex": "= 3\\sin\\theta - 4\\sin^3\\theta",
          "explanation": "The sine terms give $2\\sin\\theta + \\sin\\theta = 3\\sin\\theta$ and the cubic terms give $-2\\sin^3\\theta - 2\\sin^3\\theta = -4\\sin^3\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Numerical check at theta = 30 degrees",
          "workingLatex": "\\sin 90^\\circ = 1, \\quad 3\\sin 30^\\circ - 4\\sin^3 30^\\circ = \\tfrac{3}{2} - 4\\cdot\\tfrac{1}{8} = 1",
          "explanation": "At $\\theta = 30^\\circ$ the left side is $\\sin 90^\\circ = 1$ and the right side also equals $1$, supporting the identity.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Conclude the proof",
          "workingLatex": "\\sin 3\\theta \\equiv 3\\sin\\theta - 4\\sin^3\\theta \\quad \\blacksquare",
          "explanation": "The LHS reduces to the RHS for all $\\theta$, so the identity is proved.",
          "diagram": null
        }
      ],
      "finalAnswer": "Writing $\\sin 3\\theta = \\sin(2\\theta + \\theta)$ and expanding with the addition and double-angle formulae, then using $\\cos^2\\theta = 1 - \\sin^2\\theta$, gives $3\\sin\\theta - 4\\sin^3\\theta$, so $\\sin 3\\theta \\equiv 3\\sin\\theta - 4\\sin^3\\theta$."
    }
  },
  {
    "id": "al.y2.pure.compound-double-angles.q040",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Compound and double angles",
    "subtopicId": "al.y2.pure.compound-double-angles",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "proof",
    "tags": [
      "compound angle",
      "triple angle",
      "proof"
    ],
    "questionText": "Prove that $\\cos 3\\theta \\equiv 4\\cos^3\\theta - 3\\cos\\theta$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Split the triple angle",
          "workingLatex": "\\cos 3\\theta = \\cos(2\\theta + \\theta)",
          "explanation": "We write $3\\theta$ as the compound angle $2\\theta + \\theta$ so the addition and double-angle formulae can be used.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply the cosine addition formula",
          "workingLatex": "\\cos(2\\theta + \\theta) = \\cos 2\\theta\\cos\\theta - \\sin 2\\theta\\sin\\theta",
          "explanation": "Using $\\cos(A + B) = \\cos A\\cos B - \\sin A\\sin B$ with $A = 2\\theta$ and $B = \\theta$ expands the compound angle.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Choose a cosine-only cos 2theta",
          "workingLatex": "\\cos 2\\theta = 2\\cos^2\\theta - 1",
          "explanation": "Because the target answer is written purely in $\\cos\\theta$, we pick the version of $\\cos 2\\theta$ that contains only cosine.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the sine double angle",
          "workingLatex": "\\sin 2\\theta = 2\\sin\\theta\\cos\\theta",
          "explanation": "Replacing $\\sin 2\\theta$ prepares the second term for simplification.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute both double angles",
          "workingLatex": "\\cos 3\\theta = (2\\cos^2\\theta - 1)\\cos\\theta - (2\\sin\\theta\\cos\\theta)\\sin\\theta",
          "explanation": "Putting both expansions in place gives an expression in $\\sin\\theta$ and $\\cos\\theta$ only.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Expand the brackets",
          "workingLatex": "= 2\\cos^3\\theta - \\cos\\theta - 2\\sin^2\\theta\\cos\\theta",
          "explanation": "Multiplying out each product isolates the $\\sin^2\\theta$ term that still needs converting.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Replace sine squared with cosine",
          "workingLatex": "\\sin^2\\theta = 1 - \\cos^2\\theta",
          "explanation": "The Pythagorean identity converts the sine term into cosine so the whole answer is in $\\cos\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute for sine squared",
          "workingLatex": "= 2\\cos^3\\theta - \\cos\\theta - 2(1 - \\cos^2\\theta)\\cos\\theta",
          "explanation": "Only cosines remain now; expanding the bracket will let us collect like terms.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Expand the remaining bracket",
          "workingLatex": "= 2\\cos^3\\theta - \\cos\\theta - 2\\cos\\theta + 2\\cos^3\\theta",
          "explanation": "Distributing $-2\\cos\\theta$ across $(1 - \\cos^2\\theta)$ gives $-2\\cos\\theta + 2\\cos^3\\theta$, leaving four terms to gather.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Collect like terms",
          "workingLatex": "= 4\\cos^3\\theta - 3\\cos\\theta",
          "explanation": "The cubic terms give $2\\cos^3\\theta + 2\\cos^3\\theta = 4\\cos^3\\theta$ and the linear terms give $-\\cos\\theta - 2\\cos\\theta = -3\\cos\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Numerical check at theta = 30 degrees",
          "workingLatex": "\\cos 90^\\circ = 0, \\quad 4\\cos^3 30^\\circ - 3\\cos 30^\\circ = 4\\cdot\\tfrac{3\\sqrt3}{8} - 3\\cdot\\tfrac{\\sqrt3}{2} = 0",
          "explanation": "At $\\theta = 30^\\circ$ the left side is $\\cos 90^\\circ = 0$ and the right side also equals $0$, supporting the identity.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Conclude the proof",
          "workingLatex": "\\cos 3\\theta \\equiv 4\\cos^3\\theta - 3\\cos\\theta \\quad \\blacksquare",
          "explanation": "The LHS reduces to the RHS for all $\\theta$, so the identity is proved.",
          "diagram": null
        }
      ],
      "finalAnswer": "Writing $\\cos 3\\theta = \\cos(2\\theta + \\theta)$ and expanding with the addition and double-angle formulae, then using $\\sin^2\\theta = 1 - \\cos^2\\theta$, gives $4\\cos^3\\theta - 3\\cos\\theta$, so $\\cos 3\\theta \\equiv 4\\cos^3\\theta - 3\\cos\\theta$."
    }
  },
  {
    "id": "al.y2.pure.compound-double-angles.q041",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Compound and double angles",
    "subtopicId": "al.y2.pure.compound-double-angles",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "double angle",
      "trig equation",
      "factorising"
    ],
    "questionText": "Solve the equation $\\sin 2x = \\sin x$ for $0^\\circ \\le x < 360^\\circ$, giving all solutions in degrees.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Replace sin 2x with the double-angle form",
          "workingLatex": "2\\sin x\\cos x = \\sin x",
          "explanation": "The equation mixes the double angle $2x$ with the single angle $x$, which we cannot compare directly. Writing $\\sin 2x = 2\\sin x\\cos x$ puts everything in terms of the single angle $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Move everything to one side",
          "workingLatex": "2\\sin x\\cos x - \\sin x = 0",
          "explanation": "Collecting all terms on one side prepares the equation for factorising. It is important not to divide both sides by $\\sin x$, because that would throw away every solution where $\\sin x = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Factor out the common factor",
          "workingLatex": "\\sin x\\,(2\\cos x - 1) = 0",
          "explanation": "Both terms contain a factor of $\\sin x$. Taking it out turns the left-hand side into a product, which is zero only when one of its factors is zero.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Split into two simpler equations",
          "workingLatex": "\\sin x = 0 \\quad\\text{or}\\quad 2\\cos x - 1 = 0",
          "explanation": "A product equals zero exactly when at least one factor equals zero, so the single equation breaks into two familiar ones.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve the first factor",
          "workingLatex": "\\sin x = 0 \\;\\Rightarrow\\; x = 0^\\circ,\\ 180^\\circ",
          "explanation": "Within $0^\\circ \\le x < 360^\\circ$, the sine graph crosses zero at $0^\\circ$ and $180^\\circ$. It is also zero at $360^\\circ$, but that endpoint lies outside the interval.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Rearrange the second factor",
          "workingLatex": "2\\cos x - 1 = 0 \\;\\Rightarrow\\; \\cos x = \\tfrac{1}{2}",
          "explanation": "Isolating $\\cos x$ leaves a standard exact value whose solutions we know.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve the second factor",
          "workingLatex": "\\cos x = \\tfrac{1}{2} \\;\\Rightarrow\\; x = 60^\\circ,\\ 300^\\circ",
          "explanation": "Cosine is positive in the first and fourth quadrants. The acute angle is $60^\\circ$, and its fourth-quadrant partner is $360^\\circ - 60^\\circ = 300^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify x = 60 degrees",
          "workingLatex": "\\sin(2\\cdot 60^\\circ) = \\sin 120^\\circ = \\tfrac{\\sqrt{3}}{2}, \\qquad \\sin 60^\\circ = \\tfrac{\\sqrt{3}}{2}",
          "explanation": "Substituting back into the original equation, both sides equal $\\tfrac{\\sqrt{3}}{2}$, so $60^\\circ$ is genuine.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify x = 300 degrees",
          "workingLatex": "\\sin 600^\\circ = \\sin 240^\\circ = -\\tfrac{\\sqrt{3}}{2}, \\qquad \\sin 300^\\circ = -\\tfrac{\\sqrt{3}}{2}",
          "explanation": "Here $2x = 600^\\circ$, which is the same as $240^\\circ$; both sides equal $-\\tfrac{\\sqrt{3}}{2}$, confirming $300^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Collect the full solution set",
          "workingLatex": "x = 0^\\circ,\\ 60^\\circ,\\ 180^\\circ,\\ 300^\\circ",
          "explanation": "Gathering the roots of both factors in increasing order gives every solution in the interval.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = 0^\\circ,\\ 60^\\circ,\\ 180^\\circ,\\ 300^\\circ$."
    }
  },
  {
    "id": "al.y2.pure.compound-double-angles.q042",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Compound and double angles",
    "subtopicId": "al.y2.pure.compound-double-angles",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "double angle",
      "trig equation",
      "factorising"
    ],
    "questionText": "Solve $\\sin 2x = \\cos x$ for $0^\\circ \\le x < 360^\\circ$, giving all solutions in degrees.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Replace sin 2x with the double-angle form",
          "workingLatex": "2\\sin x\\cos x = \\cos x",
          "explanation": "Expanding $\\sin 2x = 2\\sin x\\cos x$ rewrites the equation entirely in terms of the single angle $x$, which is what lets us solve it.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Move everything to one side",
          "workingLatex": "2\\sin x\\cos x - \\cos x = 0",
          "explanation": "Bringing all terms to one side sets up a factorisation. We must resist dividing by $\\cos x$, or the solutions where $\\cos x = 0$ would be lost.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Factor out the common factor",
          "workingLatex": "\\cos x\\,(2\\sin x - 1) = 0",
          "explanation": "Both terms share a factor of $\\cos x$. Factoring gives a product equal to zero, which we can split apart.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Split into two simpler equations",
          "workingLatex": "\\cos x = 0 \\quad\\text{or}\\quad 2\\sin x - 1 = 0",
          "explanation": "A product is zero precisely when one of the factors is zero, giving two standard equations.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve the first factor",
          "workingLatex": "\\cos x = 0 \\;\\Rightarrow\\; x = 90^\\circ,\\ 270^\\circ",
          "explanation": "Cosine is zero where the terminal side points straight up or straight down, i.e. at $90^\\circ$ and $270^\\circ$ within the interval.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Rearrange the second factor",
          "workingLatex": "2\\sin x - 1 = 0 \\;\\Rightarrow\\; \\sin x = \\tfrac{1}{2}",
          "explanation": "Isolating $\\sin x$ produces a standard exact value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve the second factor",
          "workingLatex": "\\sin x = \\tfrac{1}{2} \\;\\Rightarrow\\; x = 30^\\circ,\\ 150^\\circ",
          "explanation": "Sine is positive in the first and second quadrants. The acute angle is $30^\\circ$, and its second-quadrant partner is $180^\\circ - 30^\\circ = 150^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify x = 30 degrees",
          "workingLatex": "\\sin 60^\\circ = \\tfrac{\\sqrt{3}}{2}, \\qquad \\cos 30^\\circ = \\tfrac{\\sqrt{3}}{2}",
          "explanation": "With $2x = 60^\\circ$, both sides equal $\\tfrac{\\sqrt{3}}{2}$, so $30^\\circ$ checks out.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify x = 270 degrees",
          "workingLatex": "\\sin 540^\\circ = \\sin 180^\\circ = 0, \\qquad \\cos 270^\\circ = 0",
          "explanation": "Here $2x = 540^\\circ$, equivalent to $180^\\circ$; both sides equal $0$, confirming $270^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Collect the full solution set",
          "workingLatex": "x = 30^\\circ,\\ 90^\\circ,\\ 150^\\circ,\\ 270^\\circ",
          "explanation": "Listing the roots of both factors in order gives the complete solution set.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = 30^\\circ,\\ 90^\\circ,\\ 150^\\circ,\\ 270^\\circ$."
    }
  },
  {
    "id": "al.y2.pure.compound-double-angles.q043",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Compound and double angles",
    "subtopicId": "al.y2.pure.compound-double-angles",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "double angle",
      "trig equation",
      "quadratic in cosine"
    ],
    "questionText": "Solve $\\cos 2x = \\cos x$ for $0 \\le x \\le 2\\pi$, giving all solutions in radians in terms of $\\pi$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the cosine-only double-angle form",
          "workingLatex": "2\\cos^2 x - 1 = \\cos x",
          "explanation": "The right-hand side is $\\cos x$, so we pick the version of $\\cos 2x$ written purely in cosines, $\\cos 2x = 2\\cos^2 x - 1$. Then the whole equation involves only $\\cos x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rearrange into a quadratic",
          "workingLatex": "2\\cos^2 x - \\cos x - 1 = 0",
          "explanation": "Moving every term to one side reveals a quadratic in the single quantity $\\cos x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Factorise the quadratic",
          "workingLatex": "(2\\cos x + 1)(\\cos x - 1) = 0",
          "explanation": "Writing $c = \\cos x$, we factor $2c^2 - c - 1$ just like an ordinary quadratic.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check the factorisation",
          "workingLatex": "(2\\cos x + 1)(\\cos x - 1) = 2\\cos^2 x - 2\\cos x + \\cos x - 1 = 2\\cos^2 x - \\cos x - 1",
          "explanation": "Expanding the brackets returns the original quadratic, confirming the factors are correct.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Split into two simpler equations",
          "workingLatex": "\\cos x = -\\tfrac{1}{2} \\quad\\text{or}\\quad \\cos x = 1",
          "explanation": "Setting each factor to zero gives two standard cosine equations to solve.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve cos x = 1 on the closed interval",
          "workingLatex": "\\cos x = 1 \\;\\Rightarrow\\; x = 0,\\ 2\\pi",
          "explanation": "Because the interval $0 \\le x \\le 2\\pi$ is closed, cosine equals $1$ at both endpoints $x = 0$ and $x = 2\\pi$, so both are included.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve cos x = -1/2",
          "workingLatex": "\\cos x = -\\tfrac{1}{2} \\;\\Rightarrow\\; x = \\tfrac{2\\pi}{3},\\ \\tfrac{4\\pi}{3}",
          "explanation": "Cosine is negative in the second and third quadrants; the related acute angle is $\\tfrac{\\pi}{3}$, giving $\\pi - \\tfrac{\\pi}{3} = \\tfrac{2\\pi}{3}$ and $\\pi + \\tfrac{\\pi}{3} = \\tfrac{4\\pi}{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify x = 2pi/3",
          "workingLatex": "\\cos\\tfrac{4\\pi}{3} = -\\tfrac{1}{2}, \\qquad \\cos\\tfrac{2\\pi}{3} = -\\tfrac{1}{2}",
          "explanation": "With $2x = \\tfrac{4\\pi}{3}$, both sides equal $-\\tfrac{1}{2}$, so this solution is genuine.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify x = 2pi",
          "workingLatex": "\\cos 4\\pi = 1, \\qquad \\cos 2\\pi = 1",
          "explanation": "At the right endpoint $2x = 4\\pi$, both sides equal $1$, confirming $2\\pi$ belongs in the set.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Collect the full solution set",
          "workingLatex": "x = 0,\\ \\tfrac{2\\pi}{3},\\ \\tfrac{4\\pi}{3},\\ 2\\pi",
          "explanation": "Gathering all roots in increasing order gives every solution in the closed interval.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = 0,\\ \\tfrac{2\\pi}{3},\\ \\tfrac{4\\pi}{3},\\ 2\\pi$."
    }
  },
  {
    "id": "al.y2.pure.compound-double-angles.q044",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Compound and double angles",
    "subtopicId": "al.y2.pure.compound-double-angles",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "double angle",
      "trig equation",
      "quadratic in sine"
    ],
    "questionText": "Solve $\\cos 2x = \\sin x$ for $0^\\circ \\le x < 360^\\circ$, giving all solutions in degrees.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the sine-only double-angle form",
          "workingLatex": "1 - 2\\sin^2 x = \\sin x",
          "explanation": "The right-hand side is $\\sin x$, so we pick the version $\\cos 2x = 1 - 2\\sin^2 x$. This makes the whole equation depend on $\\sin x$ alone.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rearrange into a quadratic",
          "workingLatex": "2\\sin^2 x + \\sin x - 1 = 0",
          "explanation": "Moving all terms to one side and tidying the signs produces a quadratic in $\\sin x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Factorise the quadratic",
          "workingLatex": "(2\\sin x - 1)(\\sin x + 1) = 0",
          "explanation": "Treating $s = \\sin x$, the quadratic $2s^2 + s - 1$ factors into these two brackets.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check the factorisation",
          "workingLatex": "(2\\sin x - 1)(\\sin x + 1) = 2\\sin^2 x + 2\\sin x - \\sin x - 1 = 2\\sin^2 x + \\sin x - 1",
          "explanation": "Expanding confirms the brackets reproduce the quadratic, so the factorisation is correct.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Split into two simpler equations",
          "workingLatex": "\\sin x = \\tfrac{1}{2} \\quad\\text{or}\\quad \\sin x = -1",
          "explanation": "Setting each factor to zero gives two standard sine equations.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve sin x = 1/2",
          "workingLatex": "\\sin x = \\tfrac{1}{2} \\;\\Rightarrow\\; x = 30^\\circ,\\ 150^\\circ",
          "explanation": "Sine is positive in the first and second quadrants, giving $30^\\circ$ and $180^\\circ - 30^\\circ = 150^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve sin x = -1",
          "workingLatex": "\\sin x = -1 \\;\\Rightarrow\\; x = 270^\\circ",
          "explanation": "Sine reaches its minimum of $-1$ only once in the interval, at $270^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify x = 150 degrees",
          "workingLatex": "\\cos 300^\\circ = \\tfrac{1}{2}, \\qquad \\sin 150^\\circ = \\tfrac{1}{2}",
          "explanation": "With $2x = 300^\\circ$, both sides equal $\\tfrac{1}{2}$, so $150^\\circ$ is valid.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify x = 270 degrees",
          "workingLatex": "\\cos 540^\\circ = \\cos 180^\\circ = -1, \\qquad \\sin 270^\\circ = -1",
          "explanation": "Here $2x = 540^\\circ$, the same as $180^\\circ$; both sides equal $-1$, confirming $270^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Collect the full solution set",
          "workingLatex": "x = 30^\\circ,\\ 150^\\circ,\\ 270^\\circ",
          "explanation": "Listing the roots of both factors in order gives every solution in the interval.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = 30^\\circ,\\ 150^\\circ,\\ 270^\\circ$."
    }
  },
  {
    "id": "al.y2.pure.compound-double-angles.q045",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Compound and double angles",
    "subtopicId": "al.y2.pure.compound-double-angles",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "double angle",
      "trig equation",
      "radians"
    ],
    "questionText": "Solve $\\sin 2x + \\cos x = 0$ for $0 \\le x \\le 2\\pi$, giving all solutions in radians in terms of $\\pi$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Replace sin 2x with the double-angle form",
          "workingLatex": "2\\sin x\\cos x + \\cos x = 0",
          "explanation": "Expanding $\\sin 2x = 2\\sin x\\cos x$ writes the equation in terms of the single angle $x$ only.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Factor out the common factor",
          "workingLatex": "\\cos x\\,(2\\sin x + 1) = 0",
          "explanation": "Both terms share a factor of $\\cos x$. Taking it out gives a product equal to zero. We must not divide by $\\cos x$, or the solutions with $\\cos x = 0$ would be lost.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Split into two simpler equations",
          "workingLatex": "\\cos x = 0 \\quad\\text{or}\\quad 2\\sin x + 1 = 0",
          "explanation": "A product is zero exactly when one factor is zero, giving two equations to solve.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve cos x = 0",
          "workingLatex": "\\cos x = 0 \\;\\Rightarrow\\; x = \\tfrac{\\pi}{2},\\ \\tfrac{3\\pi}{2}",
          "explanation": "Cosine is zero where the terminal side points vertically, i.e. at $\\tfrac{\\pi}{2}$ and $\\tfrac{3\\pi}{2}$ within the interval.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rearrange the second factor",
          "workingLatex": "2\\sin x + 1 = 0 \\;\\Rightarrow\\; \\sin x = -\\tfrac{1}{2}",
          "explanation": "Isolating $\\sin x$ leaves a standard exact value.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve sin x = -1/2",
          "workingLatex": "\\sin x = -\\tfrac{1}{2} \\;\\Rightarrow\\; x = \\tfrac{7\\pi}{6},\\ \\tfrac{11\\pi}{6}",
          "explanation": "Sine is negative in the third and fourth quadrants; with related acute angle $\\tfrac{\\pi}{6}$, the solutions are $\\pi + \\tfrac{\\pi}{6} = \\tfrac{7\\pi}{6}$ and $2\\pi - \\tfrac{\\pi}{6} = \\tfrac{11\\pi}{6}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "List all four candidate solutions",
          "workingLatex": "x = \\tfrac{\\pi}{2},\\ \\tfrac{7\\pi}{6},\\ \\tfrac{3\\pi}{2},\\ \\tfrac{11\\pi}{6}",
          "explanation": "Combining the roots of both factors gives four candidate solutions to check.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify x = 7pi/6",
          "workingLatex": "\\sin\\tfrac{7\\pi}{3} + \\cos\\tfrac{7\\pi}{6} = \\tfrac{\\sqrt{3}}{2} + \\left(-\\tfrac{\\sqrt{3}}{2}\\right) = 0",
          "explanation": "Here $2x = \\tfrac{7\\pi}{3}$, equivalent to $\\tfrac{\\pi}{3}$, so $\\sin 2x = \\tfrac{\\sqrt{3}}{2}$; it cancels with $\\cos\\tfrac{7\\pi}{6} = -\\tfrac{\\sqrt{3}}{2}$, giving $0$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify x = pi/2",
          "workingLatex": "\\sin\\pi + \\cos\\tfrac{\\pi}{2} = 0 + 0 = 0",
          "explanation": "With $2x = \\pi$, both parts vanish, confirming $\\tfrac{\\pi}{2}$ is a solution.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Collect the full solution set",
          "workingLatex": "x = \\tfrac{\\pi}{2},\\ \\tfrac{7\\pi}{6},\\ \\tfrac{3\\pi}{2},\\ \\tfrac{11\\pi}{6}",
          "explanation": "All four candidates satisfy the equation, so the solution set is complete.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = \\tfrac{\\pi}{2},\\ \\tfrac{7\\pi}{6},\\ \\tfrac{3\\pi}{2},\\ \\tfrac{11\\pi}{6}$."
    }
  },
  {
    "id": "al.y2.pure.compound-double-angles.q046",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Compound and double angles",
    "subtopicId": "al.y2.pure.compound-double-angles",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "double angle",
      "trig equation",
      "quadratic in cosine"
    ],
    "questionText": "Solve $3\\cos 2x - \\cos x + 2 = 0$ for $0^\\circ \\le x < 360^\\circ$, giving your answers to $1$ decimal place where appropriate.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Substitute the cosine-only double-angle form",
          "workingLatex": "3(2\\cos^2 x - 1) - \\cos x + 2 = 0",
          "explanation": "The equation already contains $\\cos x$, so we use $\\cos 2x = 2\\cos^2 x - 1$ to make everything depend on $\\cos x$ alone.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expand the bracket",
          "workingLatex": "6\\cos^2 x - 3 - \\cos x + 2 = 0",
          "explanation": "Multiplying out the $3(\\,\\cdots)$ term prepares the equation to be collected into a tidy quadratic.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify to a quadratic",
          "workingLatex": "6\\cos^2 x - \\cos x - 1 = 0",
          "explanation": "Combining the constants $-3 + 2 = -1$ leaves a standard quadratic in $\\cos x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Factorise the quadratic",
          "workingLatex": "(3\\cos x + 1)(2\\cos x - 1) = 0",
          "explanation": "With $c = \\cos x$, the quadratic $6c^2 - c - 1$ factors into these brackets; expanding gives $6c^2 - 3c + 2c - 1 = 6c^2 - c - 1$, which checks out.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Split into two simpler equations",
          "workingLatex": "\\cos x = -\\tfrac{1}{3} \\quad\\text{or}\\quad \\cos x = \\tfrac{1}{2}",
          "explanation": "Setting each factor to zero gives the two values of $\\cos x$ to solve.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve cos x = 1/2",
          "workingLatex": "\\cos x = \\tfrac{1}{2} \\;\\Rightarrow\\; x = 60^\\circ,\\ 300^\\circ",
          "explanation": "This is an exact value: cosine is positive in the first and fourth quadrants, giving $60^\\circ$ and $360^\\circ - 60^\\circ = 300^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve cos x = -1/3",
          "workingLatex": "\\cos x = -\\tfrac{1}{3} \\;\\Rightarrow\\; x \\approx 109.5^\\circ,\\ 250.5^\\circ",
          "explanation": "There is no exact form, so use a calculator: $\\cos^{-1}(-\\tfrac{1}{3}) \\approx 109.5^\\circ$ (second quadrant), and the fourth-quadrant partner is $360^\\circ - 109.5^\\circ = 250.5^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify x = 60 degrees",
          "workingLatex": "3\\cos 120^\\circ - \\cos 60^\\circ + 2 = 3\\left(-\\tfrac{1}{2}\\right) - \\tfrac{1}{2} + 2 = 0",
          "explanation": "Substituting the exact solution back into the original equation gives $0$, so $60^\\circ$ is correct.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify x = 109.5 degrees",
          "workingLatex": "\\cos 2x = 2\\left(-\\tfrac{1}{3}\\right)^2 - 1 = -\\tfrac{7}{9}, \\qquad 3\\left(-\\tfrac{7}{9}\\right) - \\left(-\\tfrac{1}{3}\\right) + 2 = 0",
          "explanation": "Using $\\cos x = -\\tfrac{1}{3}$ gives $\\cos 2x = -\\tfrac{7}{9}$; substituting confirms the left-hand side is exactly $0$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Collect the full solution set",
          "workingLatex": "x = 60^\\circ,\\ 109.5^\\circ,\\ 250.5^\\circ,\\ 300^\\circ",
          "explanation": "Listing all four roots in increasing order gives every solution in the interval.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = 60^\\circ,\\ 109.5^\\circ,\\ 250.5^\\circ,\\ 300^\\circ$ (to $1$ decimal place where appropriate)."
    }
  },
  {
    "id": "al.y2.pure.compound-double-angles.q047",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Compound and double angles",
    "subtopicId": "al.y2.pure.compound-double-angles",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "double angle",
      "trig equation",
      "radians"
    ],
    "questionText": "Solve $\\cos 2x + 3\\sin x = 2$ for $0 \\le x \\le 2\\pi$, giving all solutions in radians in terms of $\\pi$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Substitute the sine-only double-angle form",
          "workingLatex": "(1 - 2\\sin^2 x) + 3\\sin x = 2",
          "explanation": "Because the other trig term is $\\sin x$, we use $\\cos 2x = 1 - 2\\sin^2 x$ so that the whole equation depends on $\\sin x$ alone.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Move everything to one side",
          "workingLatex": "-2\\sin^2 x + 3\\sin x - 1 = 0",
          "explanation": "Subtracting $2$ from both sides collects the equation into a quadratic in $\\sin x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Multiply through by -1",
          "workingLatex": "2\\sin^2 x - 3\\sin x + 1 = 0",
          "explanation": "Multiplying by $-1$ makes the leading coefficient positive, which is tidier to factorise.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Factorise the quadratic",
          "workingLatex": "(2\\sin x - 1)(\\sin x - 1) = 0",
          "explanation": "With $s = \\sin x$, the quadratic $2s^2 - 3s + 1$ factors into these brackets; expanding gives $2s^2 - 2s - s + 1 = 2s^2 - 3s + 1$, confirming it.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Split into two simpler equations",
          "workingLatex": "\\sin x = \\tfrac{1}{2} \\quad\\text{or}\\quad \\sin x = 1",
          "explanation": "Setting each factor to zero gives two standard sine equations.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve sin x = 1/2",
          "workingLatex": "\\sin x = \\tfrac{1}{2} \\;\\Rightarrow\\; x = \\tfrac{\\pi}{6},\\ \\tfrac{5\\pi}{6}",
          "explanation": "Sine is positive in the first and second quadrants; with acute angle $\\tfrac{\\pi}{6}$, the solutions are $\\tfrac{\\pi}{6}$ and $\\pi - \\tfrac{\\pi}{6} = \\tfrac{5\\pi}{6}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve sin x = 1",
          "workingLatex": "\\sin x = 1 \\;\\Rightarrow\\; x = \\tfrac{\\pi}{2}",
          "explanation": "Sine reaches its maximum of $1$ only once in the interval, at $\\tfrac{\\pi}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify x = 5pi/6",
          "workingLatex": "\\cos\\tfrac{5\\pi}{3} + 3\\sin\\tfrac{5\\pi}{6} = \\tfrac{1}{2} + 3\\cdot\\tfrac{1}{2} = 2",
          "explanation": "Here $2x = \\tfrac{5\\pi}{3}$, so $\\cos 2x = \\tfrac{1}{2}$; adding $3\\sin\\tfrac{5\\pi}{6} = \\tfrac{3}{2}$ gives exactly $2$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify x = pi/2",
          "workingLatex": "\\cos\\pi + 3\\sin\\tfrac{\\pi}{2} = -1 + 3 = 2",
          "explanation": "With $2x = \\pi$, the left-hand side is $-1 + 3 = 2$, confirming $\\tfrac{\\pi}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Collect the full solution set",
          "workingLatex": "x = \\tfrac{\\pi}{6},\\ \\tfrac{\\pi}{2},\\ \\tfrac{5\\pi}{6}",
          "explanation": "Listing the roots of both factors in order gives every solution in the interval.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = \\tfrac{\\pi}{6},\\ \\tfrac{\\pi}{2},\\ \\tfrac{5\\pi}{6}$."
    }
  },
  {
    "id": "al.y2.pure.compound-double-angles.q048",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Compound and double angles",
    "subtopicId": "al.y2.pure.compound-double-angles",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "double angle",
      "trig equation",
      "tan"
    ],
    "questionText": "Solve $\\sin 2x = \\tan x$ for $0^\\circ \\le x < 360^\\circ$, giving all solutions in degrees.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Expand sin 2x and write tan as a ratio",
          "workingLatex": "2\\sin x\\cos x = \\frac{\\sin x}{\\cos x}",
          "explanation": "Using $\\sin 2x = 2\\sin x\\cos x$ and $\\tan x = \\dfrac{\\sin x}{\\cos x}$ writes everything in terms of $\\sin x$ and $\\cos x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Clear the fraction, noting cos x is nonzero",
          "workingLatex": "2\\sin x\\cos^2 x = \\sin x",
          "explanation": "$\\tan x$ is undefined where $\\cos x = 0$ (at $90^\\circ$ and $270^\\circ$), so those are excluded from the outset. Multiplying both sides by $\\cos x$ is then valid and clears the denominator.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Move everything to one side",
          "workingLatex": "2\\sin x\\cos^2 x - \\sin x = 0",
          "explanation": "Collecting on one side sets up a factorisation. As always, we avoid dividing by $\\sin x$ so no solutions are lost.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Factor out sin x",
          "workingLatex": "\\sin x\\,(2\\cos^2 x - 1) = 0",
          "explanation": "Both terms share $\\sin x$; factoring gives a product equal to zero.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Split into two simpler equations",
          "workingLatex": "\\sin x = 0 \\quad\\text{or}\\quad 2\\cos^2 x - 1 = 0",
          "explanation": "The product is zero when either factor is zero. Note that $2\\cos^2 x - 1$ is just $\\cos 2x$, but solving $\\cos^2 x = \\tfrac{1}{2}$ directly is equally quick.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve sin x = 0",
          "workingLatex": "\\sin x = 0 \\;\\Rightarrow\\; x = 0^\\circ,\\ 180^\\circ",
          "explanation": "Within the interval, sine is zero at $0^\\circ$ and $180^\\circ$; both have $\\cos x \\ne 0$, so neither is excluded.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve 2cos^2 x - 1 = 0",
          "workingLatex": "\\cos^2 x = \\tfrac{1}{2} \\;\\Rightarrow\\; \\cos x = \\pm\\tfrac{1}{\\sqrt{2}} \\;\\Rightarrow\\; x = 45^\\circ,\\ 135^\\circ,\\ 225^\\circ,\\ 315^\\circ",
          "explanation": "$\\cos x = \\pm\\tfrac{1}{\\sqrt{2}}$ gives the four diagonal angles $45^\\circ, 135^\\circ, 225^\\circ, 315^\\circ$; every one has $\\cos x \\ne 0$, so all are valid.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify x = 135 degrees",
          "workingLatex": "\\sin 270^\\circ = -1, \\qquad \\tan 135^\\circ = -1",
          "explanation": "With $2x = 270^\\circ$, both sides equal $-1$, so $135^\\circ$ is a genuine solution.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify x = 45 degrees",
          "workingLatex": "\\sin 90^\\circ = 1, \\qquad \\tan 45^\\circ = 1",
          "explanation": "With $2x = 90^\\circ$, both sides equal $1$, confirming $45^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Collect the full solution set",
          "workingLatex": "x = 0^\\circ,\\ 45^\\circ,\\ 135^\\circ,\\ 180^\\circ,\\ 225^\\circ,\\ 315^\\circ",
          "explanation": "Gathering the roots of both factors in increasing order gives all six solutions in the interval.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = 0^\\circ,\\ 45^\\circ,\\ 135^\\circ,\\ 180^\\circ,\\ 225^\\circ,\\ 315^\\circ$."
    }
  },
  {
    "id": "al.y2.pure.compound-double-angles.q049",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Compound and double angles",
    "subtopicId": "al.y2.pure.compound-double-angles",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "double angle",
      "trig equation",
      "tangent"
    ],
    "questionText": "Solve $\\tan 2x = 1$ for $0^\\circ \\le x < 360^\\circ$, giving all solutions in degrees.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Work with the angle 2x and find its range",
          "workingLatex": "0^\\circ \\le x < 360^\\circ \\;\\Rightarrow\\; 0^\\circ \\le 2x < 720^\\circ",
          "explanation": "Because the equation involves $2x$, it is cleanest to solve for the angle $2x$ first. As $x$ runs over $0^\\circ \\le x < 360^\\circ$, the doubled angle $2x$ runs over $0^\\circ \\le 2x < 720^\\circ$ — twice as wide, so we should expect twice as many solutions.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the principal value",
          "workingLatex": "\\tan 2x = 1 \\;\\Rightarrow\\; 2x = 45^\\circ",
          "explanation": "The basic angle whose tangent is $1$ is $45^\\circ$, giving the first value of $2x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the general solution",
          "workingLatex": "2x = 45^\\circ + 180^\\circ n, \\quad n \\in \\mathbb{Z}",
          "explanation": "Tangent has period $180^\\circ$, so every solution is $45^\\circ$ plus a whole number of half-turns.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Choose n so that 2x lies in its range",
          "workingLatex": "n = 0,\\,1,\\,2,\\,3 \\;\\Rightarrow\\; 2x = 45^\\circ,\\ 225^\\circ,\\ 405^\\circ,\\ 585^\\circ",
          "explanation": "We need $2x$ in $[0^\\circ, 720^\\circ)$. Taking $n = 0,1,2,3$ keeps $2x$ inside; the next value, $765^\\circ$, is outside, so we stop.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Confirm four values of 2x",
          "workingLatex": "2x \\in \\{45^\\circ,\\ 225^\\circ,\\ 405^\\circ,\\ 585^\\circ\\}",
          "explanation": "The doubled interval contains exactly four solutions for $2x$, matching the expectation from step 1.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Halve each value to get x",
          "workingLatex": "x = \\tfrac{45^\\circ}{2},\\ \\tfrac{225^\\circ}{2},\\ \\tfrac{405^\\circ}{2},\\ \\tfrac{585^\\circ}{2}",
          "explanation": "Since we solved for $2x$, dividing each value by $2$ recovers the corresponding $x$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the four solutions for x",
          "workingLatex": "x = 22.5^\\circ,\\ 112.5^\\circ,\\ 202.5^\\circ,\\ 292.5^\\circ",
          "explanation": "Each of these lies in $0^\\circ \\le x < 360^\\circ$, as required.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify x = 22.5 degrees",
          "workingLatex": "\\tan(2\\cdot 22.5^\\circ) = \\tan 45^\\circ = 1",
          "explanation": "Doubling gives $45^\\circ$, whose tangent is $1$, so this solution is correct.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify x = 292.5 degrees",
          "workingLatex": "\\tan 585^\\circ = \\tan(585^\\circ - 360^\\circ) = \\tan 225^\\circ = 1",
          "explanation": "Doubling gives $585^\\circ$; subtracting a full turn leaves $225^\\circ$, whose tangent is also $1$, confirming the last value.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Collect the full solution set",
          "workingLatex": "x = 22.5^\\circ,\\ 112.5^\\circ,\\ 202.5^\\circ,\\ 292.5^\\circ",
          "explanation": "These four values are every solution of $\\tan 2x = 1$ in the interval.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = 22.5^\\circ,\\ 112.5^\\circ,\\ 202.5^\\circ,\\ 292.5^\\circ$."
    }
  },
  {
    "id": "al.y2.pure.compound-double-angles.q050",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Compound and double angles",
    "subtopicId": "al.y2.pure.compound-double-angles",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "double angle",
      "trig equation",
      "radians"
    ],
    "questionText": "Solve $\\cos 2x + \\sin x = 0$ for $0 \\le x \\le 2\\pi$, giving all solutions in radians in terms of $\\pi$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Substitute the sine-only double-angle form",
          "workingLatex": "(1 - 2\\sin^2 x) + \\sin x = 0",
          "explanation": "Because the other term is $\\sin x$, we use $\\cos 2x = 1 - 2\\sin^2 x$ so the whole equation depends on $\\sin x$ alone.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rearrange the terms",
          "workingLatex": "-2\\sin^2 x + \\sin x + 1 = 0",
          "explanation": "Writing the terms in descending powers of $\\sin x$ makes the quadratic structure clear.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Multiply through by -1",
          "workingLatex": "2\\sin^2 x - \\sin x - 1 = 0",
          "explanation": "Multiplying by $-1$ gives a positive leading coefficient, which is easier to factorise.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Factorise the quadratic",
          "workingLatex": "(2\\sin x + 1)(\\sin x - 1) = 0",
          "explanation": "With $s = \\sin x$, the quadratic $2s^2 - s - 1$ factors into these brackets; expanding gives $2s^2 - 2s + s - 1 = 2s^2 - s - 1$, which checks out.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Split into two simpler equations",
          "workingLatex": "\\sin x = -\\tfrac{1}{2} \\quad\\text{or}\\quad \\sin x = 1",
          "explanation": "Setting each factor to zero gives two standard sine equations.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve sin x = -1/2",
          "workingLatex": "\\sin x = -\\tfrac{1}{2} \\;\\Rightarrow\\; x = \\tfrac{7\\pi}{6},\\ \\tfrac{11\\pi}{6}",
          "explanation": "Sine is negative in the third and fourth quadrants; with related acute angle $\\tfrac{\\pi}{6}$, the solutions are $\\pi + \\tfrac{\\pi}{6} = \\tfrac{7\\pi}{6}$ and $2\\pi - \\tfrac{\\pi}{6} = \\tfrac{11\\pi}{6}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve sin x = 1",
          "workingLatex": "\\sin x = 1 \\;\\Rightarrow\\; x = \\tfrac{\\pi}{2}",
          "explanation": "Sine reaches its maximum of $1$ once in the interval, at $\\tfrac{\\pi}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify x = 7pi/6",
          "workingLatex": "\\cos\\tfrac{7\\pi}{3} + \\sin\\tfrac{7\\pi}{6} = \\tfrac{1}{2} + \\left(-\\tfrac{1}{2}\\right) = 0",
          "explanation": "Here $2x = \\tfrac{7\\pi}{3}$, equivalent to $\\tfrac{\\pi}{3}$, so $\\cos 2x = \\tfrac{1}{2}$; it cancels with $\\sin\\tfrac{7\\pi}{6} = -\\tfrac{1}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify x = pi/2",
          "workingLatex": "\\cos\\pi + \\sin\\tfrac{\\pi}{2} = -1 + 1 = 0",
          "explanation": "With $2x = \\pi$, the left-hand side is $-1 + 1 = 0$, confirming $\\tfrac{\\pi}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Collect the full solution set",
          "workingLatex": "x = \\tfrac{\\pi}{2},\\ \\tfrac{7\\pi}{6},\\ \\tfrac{11\\pi}{6}",
          "explanation": "Listing the roots of both factors in increasing order gives every solution in the interval.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = \\tfrac{\\pi}{2},\\ \\tfrac{7\\pi}{6},\\ \\tfrac{11\\pi}{6}$."
    }
  },
  {
    "id": "al.y2.pure.compound-double-angles.q051",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Compound and double angles",
    "subtopicId": "al.y2.pure.compound-double-angles",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "exact",
    "tags": [
      "double angle",
      "quadratic",
      "solve equation"
    ],
    "questionText": "Solve $2\\cos 2x + 4\\sin x = 3$ for $0 \\le x < 360^\\circ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the right form of cos 2x",
          "workingLatex": "\\cos 2x = 1 - 2\\sin^2 x",
          "explanation": "The equation already contains a $\\sin x$ term, so the aim is to write everything in terms of $\\sin x$ alone. Of the three versions of the cosine double-angle formula, $\\cos 2x = 1 - 2\\sin^2 x$ is the one built from sines, so it will produce a single-variable equation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute into the equation",
          "workingLatex": "2\\left(1 - 2\\sin^2 x\\right) + 4\\sin x = 3",
          "explanation": "Replacing $\\cos 2x$ by $1 - 2\\sin^2 x$ turns the mixed equation into one that only involves $\\sin x$, which is exactly what we need to make progress.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand the bracket",
          "workingLatex": "2 - 4\\sin^2 x + 4\\sin x = 3",
          "explanation": "Multiplying out the bracket removes the grouping so that we can gather all the terms together in the next step.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rearrange to equal zero",
          "workingLatex": "-4\\sin^2 x + 4\\sin x - 1 = 0",
          "explanation": "Bringing the $3$ across to the left makes the equation equal to zero, the standard set-up for a quadratic before we solve it.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Make the leading coefficient positive",
          "workingLatex": "4\\sin^2 x - 4\\sin x + 1 = 0",
          "explanation": "Multiplying every term by $-1$ gives a positive $\\sin^2 x$ coefficient, which makes the quadratic easier to recognise and factor.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Factor the quadratic",
          "workingLatex": "(2\\sin x - 1)^2 = 0",
          "explanation": "The expression is a perfect square because $4\\sin^2 x - 4\\sin x + 1$ matches $(2\\sin x - 1)^2$. A repeated factor tells us there is really only one value of $\\sin x$ to find.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for sin x",
          "workingLatex": "2\\sin x - 1 = 0 \\ \\Rightarrow \\ \\sin x = \\tfrac{1}{2}",
          "explanation": "Setting the repeated bracket to zero gives the single value $\\sin x = \\tfrac{1}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check the value is attainable",
          "workingLatex": "-1 \\le \\tfrac{1}{2} \\le 1",
          "explanation": "Since $\\sin x$ can only take values between $-1$ and $1$, we confirm $\\tfrac{1}{2}$ is possible before finding the angles.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the principal angle",
          "workingLatex": "x = \\sin^{-1}\\tfrac{1}{2} = 30^\\circ",
          "explanation": "The inverse sine gives the first-quadrant angle whose sine is $\\tfrac{1}{2}$, which is $30^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Find the second-quadrant solution",
          "workingLatex": "x = 180^\\circ - 30^\\circ = 150^\\circ",
          "explanation": "Sine is also positive in the second quadrant, and the symmetry rule $\\sin(180^\\circ - x) = \\sin x$ gives the partner angle $150^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Confirm no further solutions",
          "workingLatex": "0 \\le x < 360^\\circ:\\quad x = 30^\\circ,\\ 150^\\circ",
          "explanation": "In the third and fourth quadrants sine is negative, so $\\sin x = \\tfrac12$ has no solutions there. These are the only two angles in the interval.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Verify x = 30 degrees",
          "workingLatex": "2\\cos 60^\\circ + 4\\sin 30^\\circ = 2\\left(\\tfrac12\\right) + 4\\left(\\tfrac12\\right) = 1 + 2 = 3",
          "explanation": "Substituting $x = 30^\\circ$ back into the original equation gives $3$, so this solution is genuine.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Verify x = 150 degrees",
          "workingLatex": "2\\cos 300^\\circ + 4\\sin 150^\\circ = 2\\left(\\tfrac12\\right) + 4\\left(\\tfrac12\\right) = 1 + 2 = 3",
          "explanation": "Here $2x = 300^\\circ$ and $\\cos 300^\\circ = \\tfrac12$, while $\\sin 150^\\circ = \\tfrac12$, so the left side is again $3$. Both solutions check out.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the solution set",
          "workingLatex": "x = 30^\\circ,\\ 150^\\circ",
          "explanation": "These are the only values of $x$ in $0 \\le x < 360^\\circ$ that satisfy the equation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = 30^\\circ$ and $x = 150^\\circ$."
    }
  },
  {
    "id": "al.y2.pure.compound-double-angles.q052",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Compound and double angles",
    "subtopicId": "al.y2.pure.compound-double-angles",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "double angle",
      "quadratic",
      "solve equation"
    ],
    "questionText": "Solve $4\\cos 2x = 3 - 7\\sin x$ for $0 \\le x < 360^\\circ$, giving your answers to one decimal place where appropriate.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the sine form of cos 2x",
          "workingLatex": "\\cos 2x = 1 - 2\\sin^2 x",
          "explanation": "Because the right-hand side involves $\\sin x$, we convert $\\cos 2x$ into sines using $\\cos 2x = 1 - 2\\sin^2 x$ so the whole equation is in one ratio.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute into the equation",
          "workingLatex": "4\\left(1 - 2\\sin^2 x\\right) = 3 - 7\\sin x",
          "explanation": "Replacing $\\cos 2x$ leaves an equation entirely in $\\sin x$, ready to be turned into a quadratic.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand the left-hand side",
          "workingLatex": "4 - 8\\sin^2 x = 3 - 7\\sin x",
          "explanation": "Multiplying out the bracket clears the grouping so we can gather every term on one side.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Collect all terms on one side",
          "workingLatex": "-8\\sin^2 x + 7\\sin x + 1 = 0",
          "explanation": "Moving the right-hand terms across gives a quadratic in $\\sin x$ set equal to zero.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Make the leading coefficient positive",
          "workingLatex": "8\\sin^2 x - 7\\sin x - 1 = 0",
          "explanation": "Multiplying through by $-1$ gives a tidy quadratic with a positive $\\sin^2 x$ term, which is easier to factor.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Factor the quadratic",
          "workingLatex": "(8\\sin x + 1)(\\sin x - 1) = 0",
          "explanation": "The factors multiply out to $8\\sin^2 x - 7\\sin x - 1$, so the equation splits into two simple linear pieces.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Read off the two possible values",
          "workingLatex": "\\sin x = -\\tfrac{1}{8} \\quad \\text{or} \\quad \\sin x = 1",
          "explanation": "Setting each factor to zero gives the two candidate values for $\\sin x$. Both lie within $[-1,1]$, so neither is rejected.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve sin x = 1",
          "workingLatex": "\\sin x = 1 \\ \\Rightarrow \\ x = 90^\\circ",
          "explanation": "Sine reaches its maximum of $1$ only once in the interval, at $x = 90^\\circ$, so this branch gives a single solution.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the reference angle for sin x = -1/8",
          "workingLatex": "\\sin^{-1}\\!\\left(\\tfrac{1}{8}\\right) = 7.18^\\circ",
          "explanation": "For the negative value we first find the acute reference angle from $\\tfrac18$; this tells us how far each solution sits from the horizontal axis.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Third-quadrant solution",
          "workingLatex": "x = 180^\\circ + 7.18^\\circ = 187.18^\\circ",
          "explanation": "Since $\\sin x$ is negative, the solutions are in the third and fourth quadrants. Adding the reference angle to $180^\\circ$ gives the third-quadrant angle.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Fourth-quadrant solution",
          "workingLatex": "x = 360^\\circ - 7.18^\\circ = 352.82^\\circ",
          "explanation": "Subtracting the reference angle from $360^\\circ$ gives the fourth-quadrant angle, completing the negative-sine branch.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Verify x = 90 degrees",
          "workingLatex": "4\\cos 180^\\circ = -4, \\qquad 3 - 7\\sin 90^\\circ = 3 - 7 = -4",
          "explanation": "Both sides equal $-4$, so $x = 90^\\circ$ genuinely satisfies the equation.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Verify a negative-sine solution",
          "workingLatex": "\\sin x = -\\tfrac18 \\ \\Rightarrow\\ 4\\cos 2x = 4\\left(1 - \\tfrac{2}{64}\\right) = \\tfrac{31}{8}, \\quad 3 - 7\\left(-\\tfrac18\\right) = \\tfrac{31}{8}",
          "explanation": "Using $\\sin x = -\\tfrac18$ gives $\\cos 2x = \\tfrac{31}{32}$, so both sides equal $\\tfrac{31}{8} = 3.875$. This confirms both $187.2^\\circ$ and $352.8^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the solution set",
          "workingLatex": "x = 90^\\circ,\\ 187.2^\\circ,\\ 352.8^\\circ",
          "explanation": "Rounding the decimal answers to one decimal place gives the three solutions in the interval.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = 90^\\circ$, $x = 187.2^\\circ$ and $x = 352.8^\\circ$ (to 1 d.p.)."
    }
  },
  {
    "id": "al.y2.pure.compound-double-angles.q053",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Compound and double angles",
    "subtopicId": "al.y2.pure.compound-double-angles",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "exact",
    "tags": [
      "double angle",
      "quadratic",
      "reject root"
    ],
    "questionText": "Solve $\\cos 2x + 5\\cos x + 3 = 0$ for $0 \\le x < 360^\\circ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the cosine form of cos 2x",
          "workingLatex": "\\cos 2x = 2\\cos^2 x - 1",
          "explanation": "The equation contains $\\cos x$, so we want everything in terms of cosine. The version $\\cos 2x = 2\\cos^2 x - 1$ is written purely in cosines, which is ideal here.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute into the equation",
          "workingLatex": "\\left(2\\cos^2 x - 1\\right) + 5\\cos x + 3 = 0",
          "explanation": "Replacing $\\cos 2x$ leaves an equation in $\\cos x$ only, which we can treat as a quadratic.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify to a quadratic",
          "workingLatex": "2\\cos^2 x + 5\\cos x + 2 = 0",
          "explanation": "Combining the constants $-1 + 3 = 2$ gives a clean quadratic in $\\cos x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Introduce a temporary variable",
          "workingLatex": "2c^2 + 5c + 2 = 0, \\qquad c = \\cos x",
          "explanation": "Letting $c = \\cos x$ makes the quadratic structure obvious and keeps the algebra uncluttered.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Factor the quadratic",
          "workingLatex": "(2c + 1)(c + 2) = 0",
          "explanation": "These factors expand back to $2c^2 + 5c + 2$, so the equation breaks into two simple cases.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Read off the two roots",
          "workingLatex": "c = -\\tfrac{1}{2} \\quad \\text{or} \\quad c = -2",
          "explanation": "Setting each factor to zero gives the two possible values for $\\cos x$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Reject the impossible root",
          "workingLatex": "-1 \\le \\cos x \\le 1 \\ \\Rightarrow \\ c = -2 \\ \\text{is impossible}",
          "explanation": "A cosine can never be less than $-1$, so $\\cos x = -2$ has no solutions and is discarded. Only $\\cos x = -\\tfrac12$ can give angles.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Keep the valid root",
          "workingLatex": "\\cos x = -\\tfrac{1}{2}",
          "explanation": "We continue with the one attainable value of the cosine.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the reference angle",
          "workingLatex": "\\cos^{-1}\\tfrac{1}{2} = 60^\\circ",
          "explanation": "The acute angle whose cosine has size $\\tfrac12$ is $60^\\circ$; this reference angle locates the solutions.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Second-quadrant solution",
          "workingLatex": "x = 180^\\circ - 60^\\circ = 120^\\circ",
          "explanation": "Cosine is negative in the second and third quadrants. The second-quadrant angle is $180^\\circ - 60^\\circ = 120^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Third-quadrant solution",
          "workingLatex": "x = 180^\\circ + 60^\\circ = 240^\\circ",
          "explanation": "The third-quadrant angle is $180^\\circ + 60^\\circ = 240^\\circ$, giving the second solution.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Verify x = 120 degrees",
          "workingLatex": "\\cos 240^\\circ + 5\\cos 120^\\circ + 3 = -\\tfrac12 + 5\\left(-\\tfrac12\\right) + 3 = 0",
          "explanation": "With $2x = 240^\\circ$, we get $\\cos 240^\\circ = -\\tfrac12$ and $\\cos 120^\\circ = -\\tfrac12$; the terms cancel to zero, confirming the solution.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Verify x = 240 degrees",
          "workingLatex": "\\cos 480^\\circ + 5\\cos 240^\\circ + 3 = -\\tfrac12 + 5\\left(-\\tfrac12\\right) + 3 = 0",
          "explanation": "Here $2x = 480^\\circ$ and $\\cos 480^\\circ = \\cos 120^\\circ = -\\tfrac12$, so the left side is again zero. Both solutions are valid.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the solution set",
          "workingLatex": "x = 120^\\circ,\\ 240^\\circ",
          "explanation": "These are the only values of $x$ in $0 \\le x < 360^\\circ$ satisfying the equation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = 120^\\circ$ and $x = 240^\\circ$ (the root $\\cos x = -2$ is rejected)."
    }
  },
  {
    "id": "al.y2.pure.compound-double-angles.q054",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Compound and double angles",
    "subtopicId": "al.y2.pure.compound-double-angles",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "double angle",
      "factorise",
      "solve equation"
    ],
    "questionText": "Solve $5\\sin 2x = 4\\cos x$ for $0 \\le x < 360^\\circ$, giving your answers to one decimal place where appropriate.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Apply the sine double-angle formula",
          "workingLatex": "\\sin 2x = 2\\sin x\\cos x",
          "explanation": "The term $\\sin 2x$ hides a factor of $\\cos x$ that also appears on the right. Expanding it with $\\sin 2x = 2\\sin x\\cos x$ exposes that common factor.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute into the equation",
          "workingLatex": "5\\left(2\\sin x\\cos x\\right) = 4\\cos x",
          "explanation": "Rewriting $\\sin 2x$ turns the equation into one where $\\cos x$ appears on both sides.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Move everything to one side",
          "workingLatex": "10\\sin x\\cos x - 4\\cos x = 0",
          "explanation": "It is tempting to divide both sides by $\\cos x$, but that would throw away the solutions where $\\cos x = 0$. Instead we bring all terms to one side so we can factor safely.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Factor out the common term",
          "workingLatex": "2\\cos x\\left(5\\sin x - 2\\right) = 0",
          "explanation": "Both terms share a factor of $2\\cos x$. Taking it out keeps every solution, because a product is zero exactly when one of its factors is zero.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Split into two cases",
          "workingLatex": "\\cos x = 0 \\quad \\text{or} \\quad 5\\sin x - 2 = 0",
          "explanation": "The zero-product principle gives two separate equations, and we must solve both to capture the full solution set.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve cos x = 0",
          "workingLatex": "\\cos x = 0 \\ \\Rightarrow \\ x = 90^\\circ,\\ 270^\\circ",
          "explanation": "Cosine is zero at the top and bottom of the unit circle, giving $x = 90^\\circ$ and $x = 270^\\circ$ in the interval.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for sin x in the second case",
          "workingLatex": "\\sin x = \\tfrac{2}{5} = 0.4",
          "explanation": "Rearranging the second factor gives $\\sin x = 0.4$, which lies within $[-1,1]$ and so is attainable.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find the reference angle",
          "workingLatex": "\\sin^{-1}(0.4) = 23.58^\\circ",
          "explanation": "The inverse sine gives the first-quadrant angle whose sine is $0.4$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "First-quadrant solution",
          "workingLatex": "x = 23.58^\\circ",
          "explanation": "Since $\\sin x$ is positive, the first solution is the reference angle itself.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Second-quadrant solution",
          "workingLatex": "x = 180^\\circ - 23.58^\\circ = 156.42^\\circ",
          "explanation": "Sine is also positive in the second quadrant, so $180^\\circ - 23.58^\\circ = 156.42^\\circ$ is the partner solution.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Verify a cos x = 0 solution",
          "workingLatex": "5\\sin 180^\\circ = 0, \\qquad 4\\cos 90^\\circ = 0",
          "explanation": "At $x = 90^\\circ$ both sides are zero, confirming that the $\\cos x = 0$ solutions are real and would have been lost by cancelling.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Verify a sin x = 0.4 solution",
          "workingLatex": "\\cos x = \\sqrt{0.84}: \\ 5\\sin 2x = 10(0.4)(0.9165) = 3.666, \\ 4\\cos x = 4(0.9165) = 3.666",
          "explanation": "At $x = 23.58^\\circ$, $\\cos x = \\sqrt{1 - 0.16} = 0.9165$, and both sides evaluate to $3.666$, confirming the solution.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Collect all solutions",
          "workingLatex": "x = 23.58^\\circ,\\ 90^\\circ,\\ 156.42^\\circ,\\ 270^\\circ",
          "explanation": "Combining both cases gives four solutions in the interval.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the solution set",
          "workingLatex": "x = 23.6^\\circ,\\ 90^\\circ,\\ 156.4^\\circ,\\ 270^\\circ",
          "explanation": "Rounding the non-exact values to one decimal place gives the final answers.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = 23.6^\\circ,\\ 90^\\circ,\\ 156.4^\\circ,\\ 270^\\circ$ (decimals to 1 d.p.)."
    }
  },
  {
    "id": "al.y2.pure.compound-double-angles.q055",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Compound and double angles",
    "subtopicId": "al.y2.pure.compound-double-angles",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "exact",
    "tags": [
      "double angle",
      "tan",
      "factorise"
    ],
    "questionText": "Solve $2\\sin 2x = 3\\tan x$ for $0 \\le x < 360^\\circ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rewrite tan and expand sin 2x",
          "workingLatex": "2\\left(2\\sin x\\cos x\\right) = 3\\cdot\\dfrac{\\sin x}{\\cos x}",
          "explanation": "Writing $\\tan x = \\dfrac{\\sin x}{\\cos x}$ and expanding $\\sin 2x = 2\\sin x\\cos x$ expresses both sides in $\\sin x$ and $\\cos x$, which lets us combine them.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Note the domain restriction",
          "workingLatex": "\\cos x \\ne 0",
          "explanation": "Because $\\tan x$ appears, $\\cos x$ cannot be zero (otherwise $\\tan x$ is undefined). We keep this in mind so we do not accept a spurious answer at $90^\\circ$ or $270^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Multiply through by cos x",
          "workingLatex": "4\\sin x\\cos^2 x = 3\\sin x",
          "explanation": "Multiplying both sides by $\\cos x$ (allowed since $\\cos x \\ne 0$) clears the fraction and gives a polynomial-style equation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Move everything to one side",
          "workingLatex": "4\\sin x\\cos^2 x - 3\\sin x = 0",
          "explanation": "Collecting the terms on one side prepares the equation for factoring rather than cancelling, so no solutions are lost.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Factor out sin x",
          "workingLatex": "\\sin x\\left(4\\cos^2 x - 3\\right) = 0",
          "explanation": "Both terms share a factor of $\\sin x$. Factoring it out gives a product equal to zero, so we solve each factor separately.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve sin x = 0",
          "workingLatex": "\\sin x = 0 \\ \\Rightarrow \\ x = 0^\\circ,\\ 180^\\circ",
          "explanation": "Sine is zero at $0^\\circ$ and $180^\\circ$ within the interval (note $360^\\circ$ is excluded). Both keep $\\cos x \\ne 0$, so both are allowed.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve the second factor",
          "workingLatex": "4\\cos^2 x - 3 = 0 \\ \\Rightarrow \\ \\cos^2 x = \\tfrac{3}{4}",
          "explanation": "Setting the bracket to zero and rearranging gives $\\cos^2 x = \\tfrac34$, a value between $0$ and $1$, so real angles exist.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Take square roots",
          "workingLatex": "\\cos x = \\pm\\dfrac{\\sqrt{3}}{2}",
          "explanation": "Taking the square root gives two possibilities. The $\\pm$ matters because both positive and negative cosines produce valid angles.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solve cos x = +root 3 over 2",
          "workingLatex": "\\cos x = \\dfrac{\\sqrt{3}}{2} \\ \\Rightarrow \\ x = 30^\\circ,\\ 330^\\circ",
          "explanation": "The reference angle is $30^\\circ$; cosine is positive in the first and fourth quadrants, giving $30^\\circ$ and $330^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Solve cos x = -root 3 over 2",
          "workingLatex": "\\cos x = -\\dfrac{\\sqrt{3}}{2} \\ \\Rightarrow \\ x = 150^\\circ,\\ 210^\\circ",
          "explanation": "With the same reference angle $30^\\circ$, cosine is negative in the second and third quadrants, giving $150^\\circ$ and $210^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Collect the candidate solutions",
          "workingLatex": "x = 0^\\circ,\\ 30^\\circ,\\ 150^\\circ,\\ 180^\\circ,\\ 210^\\circ,\\ 330^\\circ",
          "explanation": "None of these makes $\\cos x = 0$, so all six survive the domain restriction.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Verify x = 30 degrees",
          "workingLatex": "2\\sin 60^\\circ = 2\\cdot\\tfrac{\\sqrt3}{2} = \\sqrt3, \\qquad 3\\tan 30^\\circ = 3\\cdot\\tfrac{1}{\\sqrt3} = \\sqrt3",
          "explanation": "Both sides equal $\\sqrt3$, confirming $x = 30^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Verify x = 180 degrees",
          "workingLatex": "2\\sin 360^\\circ = 0, \\qquad 3\\tan 180^\\circ = 0",
          "explanation": "Both sides are zero, confirming the $\\sin x = 0$ solution at $x = 180^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Verify x = 210 degrees",
          "workingLatex": "2\\sin 420^\\circ = 2\\sin 60^\\circ = \\sqrt3, \\qquad 3\\tan 210^\\circ = 3\\cdot\\tfrac{1}{\\sqrt3} = \\sqrt3",
          "explanation": "Here $2x = 420^\\circ$ reduces to $60^\\circ$, and $\\tan 210^\\circ = \\tfrac{1}{\\sqrt3}$, so both sides equal $\\sqrt3$. The solutions check out.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "State the solution set",
          "workingLatex": "x = 0^\\circ,\\ 30^\\circ,\\ 150^\\circ,\\ 180^\\circ,\\ 210^\\circ,\\ 330^\\circ",
          "explanation": "These six angles are all the solutions in $0 \\le x < 360^\\circ$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = 0^\\circ,\\ 30^\\circ,\\ 150^\\circ,\\ 180^\\circ,\\ 210^\\circ,\\ 330^\\circ$."
    }
  },
  {
    "id": "al.y2.pure.compound-double-angles.q056",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Compound and double angles",
    "subtopicId": "al.y2.pure.compound-double-angles",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "exact",
    "tags": [
      "compound angle",
      "expand",
      "tan"
    ],
    "questionText": "Solve $\\sin(x + 30^\\circ) = 2\\sin(x - 30^\\circ)$ for $0 \\le x < 360^\\circ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Expand the left-hand side",
          "workingLatex": "\\sin(x + 30^\\circ) = \\sin x\\cos 30^\\circ + \\cos x\\sin 30^\\circ",
          "explanation": "The compound-angle formula $\\sin(A+B) = \\sin A\\cos B + \\cos A\\sin B$ turns the combined angle into single-angle ratios that we can work with.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Insert exact values on the left",
          "workingLatex": "\\sin(x + 30^\\circ) = \\tfrac{\\sqrt3}{2}\\sin x + \\tfrac{1}{2}\\cos x",
          "explanation": "Substituting $\\cos 30^\\circ = \\tfrac{\\sqrt3}{2}$ and $\\sin 30^\\circ = \\tfrac12$ replaces the trig of $30^\\circ$ with exact numbers.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand the right-hand side",
          "workingLatex": "\\sin(x - 30^\\circ) = \\sin x\\cos 30^\\circ - \\cos x\\sin 30^\\circ = \\tfrac{\\sqrt3}{2}\\sin x - \\tfrac{1}{2}\\cos x",
          "explanation": "The subtraction formula $\\sin(A-B) = \\sin A\\cos B - \\cos A\\sin B$ expands the second term the same way, with a minus sign in the middle.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write out the full equation",
          "workingLatex": "\\tfrac{\\sqrt3}{2}\\sin x + \\tfrac{1}{2}\\cos x = 2\\left(\\tfrac{\\sqrt3}{2}\\sin x - \\tfrac{1}{2}\\cos x\\right)",
          "explanation": "Putting the two expansions back into the original equation gives one equation in $\\sin x$ and $\\cos x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Expand the right side",
          "workingLatex": "\\tfrac{\\sqrt3}{2}\\sin x + \\tfrac{1}{2}\\cos x = \\sqrt3\\sin x - \\cos x",
          "explanation": "Multiplying the bracket by $2$ clears it, leaving a linear equation in the two ratios.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Gather sine and cosine terms",
          "workingLatex": "\\tfrac{1}{2}\\cos x + \\cos x = \\sqrt3\\sin x - \\tfrac{\\sqrt3}{2}\\sin x",
          "explanation": "Collecting all the $\\cos x$ terms on the left and all the $\\sin x$ terms on the right sets up a single ratio between them.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify each side",
          "workingLatex": "\\tfrac{3}{2}\\cos x = \\tfrac{\\sqrt3}{2}\\sin x",
          "explanation": "Adding the like terms gives $\\tfrac32\\cos x$ on the left and $\\tfrac{\\sqrt3}{2}\\sin x$ on the right.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Divide to form tan x",
          "workingLatex": "\\tan x = \\dfrac{3/2}{\\sqrt3/2} = \\dfrac{3}{\\sqrt3} = \\sqrt3",
          "explanation": "Dividing both sides by $\\cos x$ and by $\\tfrac{\\sqrt3}{2}$ turns the equation into $\\tan x = \\sqrt3$. (If $\\cos x$ were zero the left side would force $\\sin x = 0$ too, which is impossible, so dividing is safe.)",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the reference angle",
          "workingLatex": "\\tan^{-1}\\sqrt3 = 60^\\circ",
          "explanation": "The acute angle with tangent $\\sqrt3$ is $60^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Use the period of tan",
          "workingLatex": "x = 60^\\circ \\quad \\text{and} \\quad x = 60^\\circ + 180^\\circ = 240^\\circ",
          "explanation": "Tangent repeats every $180^\\circ$, so adding $180^\\circ$ to the first solution gives the second one inside the interval.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Verify x = 60 degrees",
          "workingLatex": "\\sin 90^\\circ = 1, \\qquad 2\\sin 30^\\circ = 2\\left(\\tfrac12\\right) = 1",
          "explanation": "Substituting $x = 60^\\circ$ gives $\\sin 90^\\circ = 1$ on the left and $1$ on the right, so it is a genuine solution.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Verify x = 240 degrees",
          "workingLatex": "\\sin 270^\\circ = -1, \\qquad 2\\sin 210^\\circ = 2\\left(-\\tfrac12\\right) = -1",
          "explanation": "At $x = 240^\\circ$, both sides equal $-1$, confirming the second solution.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Confirm the interval",
          "workingLatex": "0 \\le x < 360^\\circ: \\quad x = 60^\\circ,\\ 240^\\circ",
          "explanation": "Both angles lie in the required interval and there are no others, because the next tangent solution would be $420^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the solution set",
          "workingLatex": "x = 60^\\circ,\\ 240^\\circ",
          "explanation": "These are the two solutions of the equation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = 60^\\circ$ and $x = 240^\\circ$."
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
    "answerType": "exact",
    "tags": [
      "compound angle",
      "radians",
      "tan"
    ],
    "questionText": "Solve $\\sin\\!\\left(x + \\tfrac{\\pi}{6}\\right) = \\cos\\!\\left(x - \\tfrac{\\pi}{6}\\right)$ for $0 \\le x \\le 2\\pi$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Expand the left-hand side",
          "workingLatex": "\\sin\\!\\left(x + \\tfrac{\\pi}{6}\\right) = \\sin x\\cos\\tfrac{\\pi}{6} + \\cos x\\sin\\tfrac{\\pi}{6} = \\tfrac{\\sqrt3}{2}\\sin x + \\tfrac{1}{2}\\cos x",
          "explanation": "Using $\\sin(A+B) = \\sin A\\cos B + \\cos A\\sin B$ with $\\cos\\tfrac{\\pi}{6} = \\tfrac{\\sqrt3}{2}$ and $\\sin\\tfrac{\\pi}{6} = \\tfrac12$ writes the left side in single-angle ratios.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expand the right-hand side",
          "workingLatex": "\\cos\\!\\left(x - \\tfrac{\\pi}{6}\\right) = \\cos x\\cos\\tfrac{\\pi}{6} + \\sin x\\sin\\tfrac{\\pi}{6} = \\tfrac{\\sqrt3}{2}\\cos x + \\tfrac{1}{2}\\sin x",
          "explanation": "Using $\\cos(A-B) = \\cos A\\cos B + \\sin A\\sin B$ expands the right side into the same two ratios, so we can compare directly.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Equate the two expansions",
          "workingLatex": "\\tfrac{\\sqrt3}{2}\\sin x + \\tfrac{1}{2}\\cos x = \\tfrac{\\sqrt3}{2}\\cos x + \\tfrac{1}{2}\\sin x",
          "explanation": "Setting the expanded forms equal gives one equation involving only $\\sin x$ and $\\cos x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Gather sine terms and cosine terms",
          "workingLatex": "\\tfrac{\\sqrt3}{2}\\sin x - \\tfrac{1}{2}\\sin x = \\tfrac{\\sqrt3}{2}\\cos x - \\tfrac{1}{2}\\cos x",
          "explanation": "Moving the $\\sin x$ terms to the left and the $\\cos x$ terms to the right groups the equation ready to factor.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Factor each side",
          "workingLatex": "\\left(\\tfrac{\\sqrt3}{2} - \\tfrac{1}{2}\\right)\\sin x = \\left(\\tfrac{\\sqrt3}{2} - \\tfrac{1}{2}\\right)\\cos x",
          "explanation": "Both sides share the same non-zero factor $\\tfrac{\\sqrt3}{2} - \\tfrac12$, which we can now cancel.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Cancel the common factor",
          "workingLatex": "\\sin x = \\cos x",
          "explanation": "Because $\\tfrac{\\sqrt3}{2} - \\tfrac12 \\approx 0.366$ is not zero, dividing both sides by it is valid and leaves the simple relation $\\sin x = \\cos x$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Form tan x",
          "workingLatex": "\\tan x = 1",
          "explanation": "Dividing $\\sin x = \\cos x$ by $\\cos x$ gives $\\tan x = 1$. (If $\\cos x = 0$ then $\\sin x = 0$ too, which cannot both hold, so no solutions are lost.)",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find the reference angle",
          "workingLatex": "\\tan^{-1}1 = \\tfrac{\\pi}{4}",
          "explanation": "The acute angle whose tangent is $1$ is $\\tfrac{\\pi}{4}$ radians.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Use the period of tan",
          "workingLatex": "x = \\tfrac{\\pi}{4} \\quad \\text{and} \\quad x = \\tfrac{\\pi}{4} + \\pi = \\tfrac{5\\pi}{4}",
          "explanation": "Tangent repeats every $\\pi$, so the second solution in $[0, 2\\pi]$ is $\\tfrac{\\pi}{4} + \\pi = \\tfrac{5\\pi}{4}$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check no others in the interval",
          "workingLatex": "\\tfrac{\\pi}{4} + 2\\pi = \\tfrac{9\\pi}{4} > 2\\pi",
          "explanation": "The next tangent solution would exceed $2\\pi$, and the endpoints $x = 0, 2\\pi$ give $\\tan x = 0$, so there are exactly two solutions.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Verify x = pi/4",
          "workingLatex": "\\sin\\tfrac{5\\pi}{12} \\approx 0.9659, \\qquad \\cos\\tfrac{\\pi}{12} \\approx 0.9659",
          "explanation": "At $x = \\tfrac{\\pi}{4}$ the arguments are $\\tfrac{5\\pi}{12}$ and $\\tfrac{\\pi}{12}$ (that is $75^\\circ$ and $15^\\circ$), whose sine and cosine agree, confirming the solution.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Verify x = 5pi/4",
          "workingLatex": "\\sin\\tfrac{17\\pi}{12} \\approx -0.9659, \\qquad \\cos\\tfrac{13\\pi}{12} \\approx -0.9659",
          "explanation": "At $x = \\tfrac{5\\pi}{4}$ both sides equal about $-0.9659$, so this solution is also genuine.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the solution set",
          "workingLatex": "x = \\tfrac{\\pi}{4},\\ \\tfrac{5\\pi}{4}",
          "explanation": "These are the only two values of $x$ in $0 \\le x \\le 2\\pi$ satisfying the equation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = \\dfrac{\\pi}{4}$ and $x = \\dfrac{5\\pi}{4}$."
    }
  },
  {
    "id": "al.y2.pure.compound-double-angles.q058",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Compound and double angles",
    "subtopicId": "al.y2.pure.compound-double-angles",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "exact",
    "tags": [
      "double angle",
      "quadratic",
      "radians"
    ],
    "questionText": "Solve $\\cos 2x + 3\\sin x = 2$ for $0 \\le x \\le 2\\pi$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the sine form of cos 2x",
          "workingLatex": "\\cos 2x = 1 - 2\\sin^2 x",
          "explanation": "The equation contains a $\\sin x$ term, so we convert $\\cos 2x$ into sines with $\\cos 2x = 1 - 2\\sin^2 x$ to get a single-ratio equation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute into the equation",
          "workingLatex": "\\left(1 - 2\\sin^2 x\\right) + 3\\sin x = 2",
          "explanation": "Replacing $\\cos 2x$ leaves an equation entirely in $\\sin x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange to equal zero",
          "workingLatex": "-2\\sin^2 x + 3\\sin x - 1 = 0",
          "explanation": "Subtracting $2$ from both sides places the quadratic in $\\sin x$ into standard form.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Make the leading coefficient positive",
          "workingLatex": "2\\sin^2 x - 3\\sin x + 1 = 0",
          "explanation": "Multiplying through by $-1$ gives a positive $\\sin^2 x$ term, which is easier to factor.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Factor the quadratic",
          "workingLatex": "(2\\sin x - 1)(\\sin x - 1) = 0",
          "explanation": "The factors expand back to $2\\sin^2 x - 3\\sin x + 1$, splitting the problem into two simple cases.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Read off the two values",
          "workingLatex": "\\sin x = \\tfrac{1}{2} \\quad \\text{or} \\quad \\sin x = 1",
          "explanation": "Both values lie within $[-1,1]$, so neither is rejected; each will contribute solutions.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve sin x = 1/2 in radians",
          "workingLatex": "\\sin x = \\tfrac{1}{2} \\ \\Rightarrow \\ x = \\tfrac{\\pi}{6},\\ \\pi - \\tfrac{\\pi}{6} = \\tfrac{5\\pi}{6}",
          "explanation": "The reference angle is $\\tfrac{\\pi}{6}$, and since sine is positive in the first and second quadrants we also get $\\pi - \\tfrac{\\pi}{6} = \\tfrac{5\\pi}{6}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve sin x = 1",
          "workingLatex": "\\sin x = 1 \\ \\Rightarrow \\ x = \\tfrac{\\pi}{2}",
          "explanation": "Sine equals $1$ only at the top of the unit circle, giving the single solution $x = \\tfrac{\\pi}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Collect the solutions",
          "workingLatex": "x = \\tfrac{\\pi}{6},\\ \\tfrac{\\pi}{2},\\ \\tfrac{5\\pi}{6}",
          "explanation": "Combining both cases gives three candidate solutions in $[0, 2\\pi]$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Verify x = pi/6",
          "workingLatex": "\\cos\\tfrac{\\pi}{3} + 3\\sin\\tfrac{\\pi}{6} = \\tfrac{1}{2} + 3\\left(\\tfrac{1}{2}\\right) = 2",
          "explanation": "With $2x = \\tfrac{\\pi}{3}$, $\\cos\\tfrac{\\pi}{3} = \\tfrac12$ and $\\sin\\tfrac{\\pi}{6} = \\tfrac12$, giving $2$ as required.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Verify x = pi/2",
          "workingLatex": "\\cos\\pi + 3\\sin\\tfrac{\\pi}{2} = -1 + 3 = 2",
          "explanation": "Here $2x = \\pi$, so $\\cos\\pi = -1$ and $\\sin\\tfrac{\\pi}{2} = 1$; the left side is $2$, confirming the solution.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Verify x = 5pi/6",
          "workingLatex": "\\cos\\tfrac{5\\pi}{3} + 3\\sin\\tfrac{5\\pi}{6} = \\tfrac{1}{2} + 3\\left(\\tfrac{1}{2}\\right) = 2",
          "explanation": "With $2x = \\tfrac{5\\pi}{3}$, $\\cos\\tfrac{5\\pi}{3} = \\tfrac12$ and $\\sin\\tfrac{5\\pi}{6} = \\tfrac12$; the left side is $2$. All three solutions check out.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the solution set",
          "workingLatex": "x = \\tfrac{\\pi}{6},\\ \\tfrac{\\pi}{2},\\ \\tfrac{5\\pi}{6}",
          "explanation": "These are all the solutions in $0 \\le x \\le 2\\pi$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = \\dfrac{\\pi}{6},\\ \\dfrac{\\pi}{2},\\ \\dfrac{5\\pi}{6}$."
    }
  },
  {
    "id": "al.y2.pure.compound-double-angles.q059",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Compound and double angles",
    "subtopicId": "al.y2.pure.compound-double-angles",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "exact",
    "tags": [
      "double angle",
      "quadratic",
      "reject root"
    ],
    "questionText": "Solve $2\\cos 2x - 4\\sin x + 1 = 0$ for $0 \\le x \\le 2\\pi$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the sine form of cos 2x",
          "workingLatex": "\\cos 2x = 1 - 2\\sin^2 x",
          "explanation": "Since the equation contains $\\sin x$, we replace $\\cos 2x$ with its sine version so everything is in terms of $\\sin x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute into the equation",
          "workingLatex": "2\\left(1 - 2\\sin^2 x\\right) - 4\\sin x + 1 = 0",
          "explanation": "Substituting removes the double angle and leaves a single-ratio equation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand the bracket",
          "workingLatex": "2 - 4\\sin^2 x - 4\\sin x + 1 = 0",
          "explanation": "Multiplying out the bracket lets us combine the constant terms next.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Combine constants",
          "workingLatex": "-4\\sin^2 x - 4\\sin x + 3 = 0",
          "explanation": "Adding $2 + 1 = 3$ tidies the equation into a quadratic in $\\sin x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Make the leading coefficient positive",
          "workingLatex": "4\\sin^2 x + 4\\sin x - 3 = 0",
          "explanation": "Multiplying through by $-1$ gives a positive $\\sin^2 x$ coefficient, ready for factoring.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Introduce a temporary variable",
          "workingLatex": "4s^2 + 4s - 3 = 0, \\qquad s = \\sin x",
          "explanation": "Writing $s = \\sin x$ highlights the quadratic and keeps the working clear.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Factor the quadratic",
          "workingLatex": "(2s - 1)(2s + 3) = 0",
          "explanation": "These factors expand to $4s^2 + 4s - 3$, so the equation splits into two cases.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Read off the two roots",
          "workingLatex": "s = \\tfrac{1}{2} \\quad \\text{or} \\quad s = -\\tfrac{3}{2}",
          "explanation": "Setting each factor to zero gives the two possible values of $\\sin x$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Reject the impossible root",
          "workingLatex": "-1 \\le \\sin x \\le 1 \\ \\Rightarrow \\ s = -\\tfrac{3}{2} \\ \\text{is impossible}",
          "explanation": "A sine can never be less than $-1$, so $\\sin x = -\\tfrac32$ has no solutions and is discarded. Only $\\sin x = \\tfrac12$ remains.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Solve sin x = 1/2 in radians",
          "workingLatex": "\\sin x = \\tfrac{1}{2} \\ \\Rightarrow \\ x = \\tfrac{\\pi}{6},\\ \\tfrac{5\\pi}{6}",
          "explanation": "The reference angle is $\\tfrac{\\pi}{6}$; sine is positive in the first and second quadrants, giving $\\tfrac{\\pi}{6}$ and $\\pi - \\tfrac{\\pi}{6} = \\tfrac{5\\pi}{6}$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Confirm the interval",
          "workingLatex": "0 \\le x \\le 2\\pi: \\quad x = \\tfrac{\\pi}{6},\\ \\tfrac{5\\pi}{6}",
          "explanation": "Both values lie in the interval, and sine is negative elsewhere in $[0, 2\\pi]$, so there are no more solutions.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Verify x = pi/6",
          "workingLatex": "2\\cos\\tfrac{\\pi}{3} - 4\\sin\\tfrac{\\pi}{6} + 1 = 2\\left(\\tfrac12\\right) - 4\\left(\\tfrac12\\right) + 1 = 0",
          "explanation": "With $2x = \\tfrac{\\pi}{3}$, $\\cos\\tfrac{\\pi}{3} = \\tfrac12$, so the left side is $1 - 2 + 1 = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Verify x = 5pi/6",
          "workingLatex": "2\\cos\\tfrac{5\\pi}{3} - 4\\sin\\tfrac{5\\pi}{6} + 1 = 2\\left(\\tfrac12\\right) - 4\\left(\\tfrac12\\right) + 1 = 0",
          "explanation": "With $2x = \\tfrac{5\\pi}{3}$, $\\cos\\tfrac{5\\pi}{3} = \\tfrac12$ and $\\sin\\tfrac{5\\pi}{6} = \\tfrac12$; the left side is again $0$. Both solutions are valid.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the solution set",
          "workingLatex": "x = \\tfrac{\\pi}{6},\\ \\tfrac{5\\pi}{6}",
          "explanation": "These are the only solutions in $0 \\le x \\le 2\\pi$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = \\dfrac{\\pi}{6}$ and $x = \\dfrac{5\\pi}{6}$ (the root $\\sin x = -\\tfrac32$ is rejected)."
    }
  },
  {
    "id": "al.y2.pure.compound-double-angles.q060",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Compound and double angles",
    "subtopicId": "al.y2.pure.compound-double-angles",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "exact",
    "tags": [
      "double angle",
      "reciprocal",
      "radians"
    ],
    "questionText": "Solve $\\tan x + \\cot x = 4$ for $0 < x < 2\\pi$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write both terms as sine over cosine",
          "workingLatex": "\\tan x + \\cot x = \\dfrac{\\sin x}{\\cos x} + \\dfrac{\\cos x}{\\sin x}",
          "explanation": "Rewriting $\\tan x$ and $\\cot x$ as ratios of sine and cosine lets us combine them over a common denominator and reveal a double-angle structure.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Combine over a common denominator",
          "workingLatex": "= \\dfrac{\\sin^2 x + \\cos^2 x}{\\sin x\\cos x}",
          "explanation": "Adding the two fractions gives a single fraction whose numerator is $\\sin^2 x + \\cos^2 x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the Pythagorean identity",
          "workingLatex": "= \\dfrac{1}{\\sin x\\cos x}",
          "explanation": "Since $\\sin^2 x + \\cos^2 x \\equiv 1$, the numerator simplifies to $1$, leaving a compact expression.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Recognise the double-angle denominator",
          "workingLatex": "\\sin x\\cos x = \\tfrac{1}{2}\\sin 2x",
          "explanation": "The double-angle formula $\\sin 2x = 2\\sin x\\cos x$ rearranges to $\\sin x\\cos x = \\tfrac12\\sin 2x$, which turns the denominator into a single trig ratio.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rewrite the left-hand side",
          "workingLatex": "\\tan x + \\cot x = \\dfrac{1}{\\tfrac12\\sin 2x} = \\dfrac{2}{\\sin 2x}",
          "explanation": "Substituting the double-angle form gives the neat identity $\\tan x + \\cot x = \\dfrac{2}{\\sin 2x}$, which is far easier to solve.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Set up the simplified equation",
          "workingLatex": "\\dfrac{2}{\\sin 2x} = 4",
          "explanation": "Replacing the left side of the original equation with the identity gives a simple equation in $\\sin 2x$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for sin 2x",
          "workingLatex": "\\sin 2x = \\tfrac{2}{4} = \\tfrac{1}{2}",
          "explanation": "Cross-multiplying and rearranging gives $\\sin 2x = \\tfrac12$, a standard value to solve.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Widen the interval for the double angle",
          "workingLatex": "0 < x < 2\\pi \\ \\Rightarrow \\ 0 < 2x < 4\\pi",
          "explanation": "Because the unknown is $2x$, its range is doubled to $(0, 4\\pi)$. We must find every value of $2x$ across two full revolutions.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "First revolution solutions",
          "workingLatex": "2x = \\tfrac{\\pi}{6}, \\ \\tfrac{5\\pi}{6}",
          "explanation": "In $(0, 2\\pi)$, $\\sin\\theta = \\tfrac12$ at $\\theta = \\tfrac{\\pi}{6}$ (first quadrant) and $\\theta = \\tfrac{5\\pi}{6}$ (second quadrant).",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Second revolution solutions",
          "workingLatex": "2x = \\tfrac{\\pi}{6} + 2\\pi = \\tfrac{13\\pi}{6}, \\ \\tfrac{5\\pi}{6} + 2\\pi = \\tfrac{17\\pi}{6}",
          "explanation": "Adding $2\\pi$ to each base solution gives the values that fall in the second revolution, still inside $(0, 4\\pi)$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Divide by 2 to recover x",
          "workingLatex": "x = \\tfrac{\\pi}{12}, \\ \\tfrac{5\\pi}{12}, \\ \\tfrac{13\\pi}{12}, \\ \\tfrac{17\\pi}{12}",
          "explanation": "Halving each value of $2x$ returns the four solutions for $x$ in the original interval.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Check the functions are defined",
          "workingLatex": "x \\ne \\tfrac{\\pi}{2}, \\pi, \\tfrac{3\\pi}{2}",
          "explanation": "For $\\tan x$ and $\\cot x$ to exist, $x$ must avoid multiples of $\\tfrac{\\pi}{2}$. None of our four solutions is such a multiple, so all are allowed.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Verify x = pi/12",
          "workingLatex": "\\tan 15^\\circ + \\cot 15^\\circ \\approx 0.2679 + 3.7321 = 4",
          "explanation": "Evaluating at $x = \\tfrac{\\pi}{12}$ (that is $15^\\circ$) gives $4$, confirming the solution.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Verify x = 13pi/12",
          "workingLatex": "\\sin 2x = \\sin\\tfrac{13\\pi}{6} = \\tfrac{1}{2}, \\qquad \\dfrac{2}{\\tfrac12} = 4",
          "explanation": "At $x = \\tfrac{13\\pi}{12}$, $2x = \\tfrac{13\\pi}{6}$ has sine $\\tfrac12$, so $\\dfrac{2}{\\sin 2x} = 4$. The solutions check out.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "State the solution set",
          "workingLatex": "x = \\tfrac{\\pi}{12}, \\ \\tfrac{5\\pi}{12}, \\ \\tfrac{13\\pi}{12}, \\ \\tfrac{17\\pi}{12}",
          "explanation": "These four angles are all the solutions in $0 < x < 2\\pi$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = \\dfrac{\\pi}{12},\\ \\dfrac{5\\pi}{12},\\ \\dfrac{13\\pi}{12},\\ \\dfrac{17\\pi}{12}$."
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
    "tags": [
      "triple angle",
      "proof",
      "double angle"
    ],
    "questionText": "Prove the triple-angle identity $\\sin 3\\theta \\equiv 3\\sin\\theta - 4\\sin^3\\theta$ by writing $3\\theta$ as $2\\theta+\\theta$ and using the compound- and double-angle formulae.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Split the triple angle",
          "workingLatex": "\\sin 3\\theta = \\sin(2\\theta + \\theta)",
          "explanation": "There is no direct formula for a triple angle, but $3\\theta$ can be written as the sum $2\\theta+\\theta$. This turns the problem into a compound angle, which we do have a formula for.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply the sine addition formula",
          "workingLatex": "\\sin(2\\theta + \\theta) = \\sin 2\\theta\\cos\\theta + \\cos 2\\theta\\sin\\theta",
          "explanation": "Using $\\sin(A+B) = \\sin A\\cos B + \\cos A\\sin B$ with $A=2\\theta$ and $B=\\theta$ breaks the double angle apart, leaving expressions we can replace with double-angle formulae.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Choose the double-angle forms",
          "workingLatex": "\\sin 2\\theta = 2\\sin\\theta\\cos\\theta, \\qquad \\cos 2\\theta = 1 - 2\\sin^2\\theta",
          "explanation": "We want the final answer purely in terms of $\\sin\\theta$, so for the cosine we deliberately pick the version $1-2\\sin^2\\theta$ rather than one containing $\\cos^2\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the double-angle expressions",
          "workingLatex": "\\sin 3\\theta = (2\\sin\\theta\\cos\\theta)\\cos\\theta + (1 - 2\\sin^2\\theta)\\sin\\theta",
          "explanation": "Replacing $\\sin 2\\theta$ and $\\cos 2\\theta$ gives a single expression in $\\sin\\theta$ and $\\cos\\theta$; only the first term still carries a $\\cos^2\\theta$ to deal with.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify each product",
          "workingLatex": "\\sin 3\\theta = 2\\sin\\theta\\cos^2\\theta + \\sin\\theta - 2\\sin^3\\theta",
          "explanation": "Multiplying out both brackets tidies the expression. The middle term $\\sin\\theta$ and the $-2\\sin^3\\theta$ are already in terms of sine; only $2\\sin\\theta\\cos^2\\theta$ still contains a cosine.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Eliminate the cosine with Pythagoras",
          "workingLatex": "\\cos^2\\theta = 1 - \\sin^2\\theta",
          "explanation": "To reach an identity purely in $\\sin\\theta$ we replace $\\cos^2\\theta$ using $\\sin^2\\theta+\\cos^2\\theta\\equiv1$. This is the key move that removes the last cosine.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute for cos squared",
          "workingLatex": "\\sin 3\\theta = 2\\sin\\theta(1 - \\sin^2\\theta) + \\sin\\theta - 2\\sin^3\\theta",
          "explanation": "Swapping $\\cos^2\\theta$ for $1-\\sin^2\\theta$ leaves every term written in $\\sin\\theta$, so the rest is pure algebra.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Expand the bracket",
          "workingLatex": "\\sin 3\\theta = 2\\sin\\theta - 2\\sin^3\\theta + \\sin\\theta - 2\\sin^3\\theta",
          "explanation": "Distributing the $2\\sin\\theta$ over the bracket produces two sine terms and two cube terms, ready to be collected.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Collect the sine terms",
          "workingLatex": "2\\sin\\theta + \\sin\\theta = 3\\sin\\theta",
          "explanation": "Adding the two first-power terms gives the $3\\sin\\theta$ that appears in the target identity.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Collect the cubed terms",
          "workingLatex": "-2\\sin^3\\theta - 2\\sin^3\\theta = -4\\sin^3\\theta",
          "explanation": "Adding the two cube terms gives $-4\\sin^3\\theta$, the second part of the required right-hand side.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Assemble the result",
          "workingLatex": "\\sin 3\\theta = 3\\sin\\theta - 4\\sin^3\\theta",
          "explanation": "Putting the collected terms together reproduces exactly the right-hand side of the identity.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Numerical check at theta = 30 degrees",
          "workingLatex": "\\text{LHS} = \\sin 90^\\circ = 1, \\quad \\text{RHS} = 3\\cdot\\tfrac{1}{2} - 4\\cdot\\left(\\tfrac{1}{2}\\right)^3 = \\tfrac{3}{2} - \\tfrac{1}{2} = 1",
          "explanation": "Testing a convenient value guards against slips. With $\\theta = 30^\\circ$ both sides equal $1$, which supports the identity.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Numerical check at theta = 45 degrees",
          "workingLatex": "\\text{LHS} = \\sin 135^\\circ = \\tfrac{\\sqrt{2}}{2}, \\quad \\text{RHS} = 3\\cdot\\tfrac{\\sqrt{2}}{2} - 4\\cdot\\left(\\tfrac{\\sqrt{2}}{2}\\right)^3 = \\tfrac{3\\sqrt{2}}{2} - \\sqrt{2} = \\tfrac{\\sqrt{2}}{2}",
          "explanation": "A second test at $\\theta = 45^\\circ$ also balances, since $\\left(\\tfrac{\\sqrt{2}}{2}\\right)^3 = \\tfrac{\\sqrt{2}}{4}$ and $4\\cdot\\tfrac{\\sqrt{2}}{4}=\\sqrt{2}$. Two agreeing checks give strong confidence.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Conclude",
          "workingLatex": "\\sin 3\\theta \\equiv 3\\sin\\theta - 4\\sin^3\\theta",
          "explanation": "Every step was an exact algebraic equality holding for all $\\theta$, so the identity is proved.",
          "diagram": null
        }
      ],
      "finalAnswer": "The chain $\\sin 3\\theta = \\sin(2\\theta+\\theta) = \\sin 2\\theta\\cos\\theta + \\cos 2\\theta\\sin\\theta$, followed by the double-angle substitutions and $\\cos^2\\theta = 1-\\sin^2\\theta$, gives $\\sin 3\\theta \\equiv 3\\sin\\theta - 4\\sin^3\\theta$."
    }
  },
  {
    "id": "al.y2.pure.compound-double-angles.q062",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Compound and double angles",
    "subtopicId": "al.y2.pure.compound-double-angles",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "proof",
    "tags": [
      "triple angle",
      "proof",
      "double angle"
    ],
    "questionText": "Prove that $\\cos 3\\theta \\equiv 4\\cos^3\\theta - 3\\cos\\theta$, starting from $\\cos(2\\theta+\\theta)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Split the triple angle",
          "workingLatex": "\\cos 3\\theta = \\cos(2\\theta + \\theta)",
          "explanation": "As with the sine version, writing $3\\theta = 2\\theta+\\theta$ converts the triple angle into a compound angle we can expand.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply the cosine addition formula",
          "workingLatex": "\\cos(2\\theta + \\theta) = \\cos 2\\theta\\cos\\theta - \\sin 2\\theta\\sin\\theta",
          "explanation": "Using $\\cos(A+B) = \\cos A\\cos B - \\sin A\\sin B$ with $A=2\\theta$, $B=\\theta$ introduces the double angles $\\cos 2\\theta$ and $\\sin 2\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Choose the double-angle forms",
          "workingLatex": "\\cos 2\\theta = 2\\cos^2\\theta - 1, \\qquad \\sin 2\\theta = 2\\sin\\theta\\cos\\theta",
          "explanation": "We aim for an answer purely in $\\cos\\theta$, so for the cosine we pick the version $2\\cos^2\\theta-1$, which is already free of sine.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the double-angle expressions",
          "workingLatex": "\\cos 3\\theta = (2\\cos^2\\theta - 1)\\cos\\theta - (2\\sin\\theta\\cos\\theta)\\sin\\theta",
          "explanation": "Replacing both double angles gives an expression whose only remaining sine appears as $\\sin^2\\theta$ in the second term.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Expand the first product",
          "workingLatex": "(2\\cos^2\\theta - 1)\\cos\\theta = 2\\cos^3\\theta - \\cos\\theta",
          "explanation": "Multiplying through by $\\cos\\theta$ produces a cube term and a linear term, both already in $\\cos\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify the second product",
          "workingLatex": "(2\\sin\\theta\\cos\\theta)\\sin\\theta = 2\\sin^2\\theta\\cos\\theta",
          "explanation": "Combining the two sines gives $\\sin^2\\theta$, which we can convert to cosines using Pythagoras.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Combine the two pieces",
          "workingLatex": "\\cos 3\\theta = 2\\cos^3\\theta - \\cos\\theta - 2\\sin^2\\theta\\cos\\theta",
          "explanation": "Subtracting the second product from the first collects everything into one expression, with a single sine-squared term left to remove.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Eliminate the sine with Pythagoras",
          "workingLatex": "\\sin^2\\theta = 1 - \\cos^2\\theta",
          "explanation": "Replacing $\\sin^2\\theta$ using $\\sin^2\\theta+\\cos^2\\theta\\equiv1$ is the decisive step that leaves the expression entirely in $\\cos\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Substitute for sine squared",
          "workingLatex": "\\cos 3\\theta = 2\\cos^3\\theta - \\cos\\theta - 2(1 - \\cos^2\\theta)\\cos\\theta",
          "explanation": "After the substitution the whole expression is in $\\cos\\theta$; the remaining work is expanding and collecting.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Expand the final bracket",
          "workingLatex": "-2(1 - \\cos^2\\theta)\\cos\\theta = -2\\cos\\theta + 2\\cos^3\\theta",
          "explanation": "Distributing $-2\\cos\\theta$ across the bracket produces another cube term and a linear term.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Write out all terms",
          "workingLatex": "\\cos 3\\theta = 2\\cos^3\\theta - \\cos\\theta - 2\\cos\\theta + 2\\cos^3\\theta",
          "explanation": "Listing every term makes the like terms easy to group: two cube terms and two linear terms.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Collect like terms",
          "workingLatex": "\\cos 3\\theta = 4\\cos^3\\theta - 3\\cos\\theta",
          "explanation": "Adding $2\\cos^3\\theta + 2\\cos^3\\theta = 4\\cos^3\\theta$ and $-\\cos\\theta - 2\\cos\\theta = -3\\cos\\theta$ produces exactly the required right-hand side.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Numerical check at theta = 60 degrees",
          "workingLatex": "\\text{LHS} = \\cos 180^\\circ = -1, \\quad \\text{RHS} = 4\\cdot\\left(\\tfrac{1}{2}\\right)^3 - 3\\cdot\\tfrac{1}{2} = \\tfrac{1}{2} - \\tfrac{3}{2} = -1",
          "explanation": "With $\\theta = 60^\\circ$ both sides give $-1$, a reassuring check on the algebra.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Conclude",
          "workingLatex": "\\cos 3\\theta \\equiv 4\\cos^3\\theta - 3\\cos\\theta",
          "explanation": "Each step held for every $\\theta$, so the identity is established.",
          "diagram": null
        }
      ],
      "finalAnswer": "Expanding $\\cos(2\\theta+\\theta) = \\cos 2\\theta\\cos\\theta - \\sin 2\\theta\\sin\\theta$ with $\\cos 2\\theta = 2\\cos^2\\theta-1$ and $\\sin^2\\theta = 1-\\cos^2\\theta$ gives $\\cos 3\\theta \\equiv 4\\cos^3\\theta - 3\\cos\\theta$."
    }
  },
  {
    "id": "al.y2.pure.compound-double-angles.q063",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Compound and double angles",
    "subtopicId": "al.y2.pure.compound-double-angles",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "proof",
    "tags": [
      "triple angle",
      "tan",
      "proof"
    ],
    "questionText": "Prove that $\\tan 3\\theta \\equiv \\dfrac{3\\tan\\theta - \\tan^3\\theta}{1 - 3\\tan^2\\theta}$ by writing $3\\theta = 2\\theta+\\theta$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the strategy",
          "workingLatex": "\\tan 3\\theta = \\tan(2\\theta + \\theta), \\qquad \\text{let } t = \\tan\\theta",
          "explanation": "Writing $3\\theta = 2\\theta+\\theta$ lets us use the tangent addition formula. Setting $t=\\tan\\theta$ keeps the algebra compact.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply the tangent addition formula",
          "workingLatex": "\\tan(2\\theta + \\theta) = \\frac{\\tan 2\\theta + \\tan\\theta}{1 - \\tan 2\\theta\\tan\\theta}",
          "explanation": "Using $\\tan(A+B) = \\dfrac{\\tan A + \\tan B}{1 - \\tan A\\tan B}$ with $A=2\\theta$, $B=\\theta$ turns the triple angle into an expression in $\\tan 2\\theta$ and $\\tan\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write tan 2theta in terms of t",
          "workingLatex": "\\tan 2\\theta = \\frac{2\\tan\\theta}{1 - \\tan^2\\theta} = \\frac{2t}{1 - t^2}",
          "explanation": "The double-angle formula for tangent lets us express everything through the single variable $t = \\tan\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Build the numerator",
          "workingLatex": "\\tan 2\\theta + \\tan\\theta = \\frac{2t}{1 - t^2} + t",
          "explanation": "The top of the fraction is the sum of $\\tan 2\\theta$ and $\\tan\\theta$; we combine these over a common denominator.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Combine the numerator",
          "workingLatex": "\\frac{2t}{1 - t^2} + t = \\frac{2t + t(1 - t^2)}{1 - t^2} = \\frac{3t - t^3}{1 - t^2}",
          "explanation": "Placing $t$ over the common denominator $1-t^2$ and expanding $2t + t - t^3$ gives $3t - t^3$ on top.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Build the denominator",
          "workingLatex": "1 - \\tan 2\\theta\\tan\\theta = 1 - \\frac{2t}{1 - t^2}\\cdot t = 1 - \\frac{2t^2}{1 - t^2}",
          "explanation": "The bottom of the fraction is $1$ minus the product $\\tan 2\\theta\\tan\\theta$; multiplying the two tangents gives $\\dfrac{2t^2}{1-t^2}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Combine the denominator",
          "workingLatex": "1 - \\frac{2t^2}{1 - t^2} = \\frac{(1 - t^2) - 2t^2}{1 - t^2} = \\frac{1 - 3t^2}{1 - t^2}",
          "explanation": "Writing $1$ as $\\dfrac{1-t^2}{1-t^2}$ and subtracting collects the denominator into a single fraction with top $1-3t^2$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Form the full quotient",
          "workingLatex": "\\tan 3\\theta = \\frac{\\ \\dfrac{3t - t^3}{1 - t^2}\\ }{\\ \\dfrac{1 - 3t^2}{1 - t^2}\\ }",
          "explanation": "The tangent of the triple angle is the combined numerator divided by the combined denominator.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Cancel the common factor",
          "workingLatex": "\\tan 3\\theta = \\frac{3t - t^3}{1 - t^2}\\times\\frac{1 - t^2}{1 - 3t^2} = \\frac{3t - t^3}{1 - 3t^2}",
          "explanation": "Dividing by a fraction means multiplying by its reciprocal; the common factor $1-t^2$ then cancels neatly, top and bottom.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Restore tan theta",
          "workingLatex": "\\tan 3\\theta = \\frac{3\\tan\\theta - \\tan^3\\theta}{1 - 3\\tan^2\\theta}",
          "explanation": "Replacing $t$ by $\\tan\\theta$ returns the identity in its required form.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Numerical check at theta = 45 degrees",
          "workingLatex": "t = \\tan 45^\\circ = 1: \\quad \\frac{3(1) - 1^3}{1 - 3(1)^2} = \\frac{2}{-2} = -1 = \\tan 135^\\circ",
          "explanation": "At $\\theta = 45^\\circ$ the formula gives $-1$, which equals $\\tan 135^\\circ$, confirming the result.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Numerical check at theta = 30 degrees",
          "workingLatex": "t = \\tfrac{1}{\\sqrt{3}}, \\ t^2 = \\tfrac{1}{3}: \\quad 1 - 3t^2 = 0 \\ \\Rightarrow\\ \\tan 90^\\circ \\text{ undefined}",
          "explanation": "At $\\theta = 30^\\circ$ the denominator vanishes, matching the fact that $\\tan 90^\\circ$ is undefined; the formula behaves correctly at this singular value too.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Conclude",
          "workingLatex": "\\tan 3\\theta \\equiv \\frac{3\\tan\\theta - \\tan^3\\theta}{1 - 3\\tan^2\\theta}",
          "explanation": "Every manipulation was a valid equality wherever the tangents are defined, so the identity holds.",
          "diagram": null
        }
      ],
      "finalAnswer": "Expanding $\\tan(2\\theta+\\theta)$ and substituting $\\tan 2\\theta = \\dfrac{2\\tan\\theta}{1-\\tan^2\\theta}$ gives, after the factor $1-\\tan^2\\theta$ cancels, $\\tan 3\\theta \\equiv \\dfrac{3\\tan\\theta - \\tan^3\\theta}{1 - 3\\tan^2\\theta}$."
    }
  },
  {
    "id": "al.y2.pure.compound-double-angles.q064",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Compound and double angles",
    "subtopicId": "al.y2.pure.compound-double-angles",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "proof",
    "tags": [
      "compound angle",
      "proof",
      "derivation"
    ],
    "questionText": "By expanding each term with the addition formulae, prove that $\\sin(A+B) + \\sin(A-B) \\equiv 2\\sin A\\cos B$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the plan",
          "workingLatex": "\\text{Expand } \\sin(A+B) \\text{ and } \\sin(A-B) \\text{ using the addition formulae, then add.}",
          "explanation": "We are asked to derive this result from first principles, so we expand each compound sine rather than quoting any factor formula. Adding the two expansions should collapse into the required product.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the sine addition formula",
          "workingLatex": "\\sin(X + Y) = \\sin X\\cos Y + \\cos X\\sin Y",
          "explanation": "This is the standard compound-angle formula that both terms are built from; the sign of the second part depends on whether we add or subtract the angles.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand the first term",
          "workingLatex": "\\sin(A + B) = \\sin A\\cos B + \\cos A\\sin B",
          "explanation": "Applying the formula with $X=A$, $Y=B$ expands the first compound sine.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Expand the second term",
          "workingLatex": "\\sin(A - B) = \\sin A\\cos B - \\cos A\\sin B",
          "explanation": "For the difference, the $\\pm$ becomes a minus, so the second piece flips sign to $-\\cos A\\sin B$. This sign change is what makes the addition simplify.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Add the two expansions",
          "workingLatex": "\\sin(A+B) + \\sin(A-B) = (\\sin A\\cos B + \\cos A\\sin B) + (\\sin A\\cos B - \\cos A\\sin B)",
          "explanation": "Writing the left-hand side as the sum of the two expanded brackets sets up the cancellation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Group the matching terms",
          "workingLatex": "= (\\sin A\\cos B + \\sin A\\cos B) + (\\cos A\\sin B - \\cos A\\sin B)",
          "explanation": "Rearranging places the two identical $\\sin A\\cos B$ terms together and the two $\\cos A\\sin B$ terms together, which have opposite signs.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Cancel the opposite terms",
          "workingLatex": "\\cos A\\sin B - \\cos A\\sin B = 0",
          "explanation": "The $\\cos A\\sin B$ terms are equal and opposite, so they cancel completely. This is the reason the result is a clean product.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Add the repeated terms",
          "workingLatex": "\\sin A\\cos B + \\sin A\\cos B = 2\\sin A\\cos B",
          "explanation": "The two surviving terms are identical, so together they give twice $\\sin A\\cos B$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the combined result",
          "workingLatex": "\\sin(A+B) + \\sin(A-B) = 2\\sin A\\cos B",
          "explanation": "Combining the surviving terms with the cancellation gives exactly the right-hand side we were asked to reach.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Numerical check with A = 50, B = 20",
          "workingLatex": "\\sin 70^\\circ + \\sin 30^\\circ \\approx 0.9397 + 0.5 = 1.4397",
          "explanation": "Choosing sample angles lets us test the identity numerically; here the left-hand side comes out as about $1.4397$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Compare with the right-hand side",
          "workingLatex": "2\\sin 50^\\circ\\cos 20^\\circ \\approx 2(0.7660)(0.9397) = 1.4397",
          "explanation": "The right-hand side gives the same value, confirming the identity for these angles.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Second numerical check with A = 80, B = 25",
          "workingLatex": "\\sin 105^\\circ + \\sin 55^\\circ \\approx 0.9659 + 0.8192 = 1.7851, \\quad 2\\sin 80^\\circ\\cos 25^\\circ \\approx 2(0.9848)(0.9063) = 1.7851",
          "explanation": "A second, independent pair of angles also balances both sides, giving strong evidence that the derivation is correct.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Conclude",
          "workingLatex": "\\sin(A+B) + \\sin(A-B) \\equiv 2\\sin A\\cos B",
          "explanation": "Because the derivation used only the addition formulae and an exact cancellation, it holds for all $A$ and $B$, so the identity is proved.",
          "diagram": null
        }
      ],
      "finalAnswer": "Expanding gives $\\sin(A+B)+\\sin(A-B) = (\\sin A\\cos B + \\cos A\\sin B) + (\\sin A\\cos B - \\cos A\\sin B)$; the $\\cos A\\sin B$ terms cancel, leaving $2\\sin A\\cos B$. Hence $\\sin(A+B)+\\sin(A-B) \\equiv 2\\sin A\\cos B$."
    }
  },
  {
    "id": "al.y2.pure.compound-double-angles.q065",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Compound and double angles",
    "subtopicId": "al.y2.pure.compound-double-angles",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "proof",
    "tags": [
      "compound angle",
      "proof",
      "identity"
    ],
    "questionText": "Prove that $\\cos(A+B)\\cos(A-B) \\equiv \\cos^2 A - \\sin^2 B$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the plan",
          "workingLatex": "\\text{Expand both cosine factors, spot a difference of two squares, then use Pythagoras.}",
          "explanation": "The left-hand side is a product of two compound cosines. Expanding both reveals a $(X-Y)(X+Y)$ pattern, and Pythagoras finishes the job.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expand cos(A+B)",
          "workingLatex": "\\cos(A + B) = \\cos A\\cos B - \\sin A\\sin B",
          "explanation": "Using $\\cos(A+B) = \\cos A\\cos B - \\sin A\\sin B$ expands the first factor.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand cos(A-B)",
          "workingLatex": "\\cos(A - B) = \\cos A\\cos B + \\sin A\\sin B",
          "explanation": "For the difference the middle sign flips, giving a $+\\sin A\\sin B$. The two factors now differ only in that one sign.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Recognise a difference of squares",
          "workingLatex": "\\cos(A+B)\\cos(A-B) = (\\cos A\\cos B - \\sin A\\sin B)(\\cos A\\cos B + \\sin A\\sin B)",
          "explanation": "The two brackets have the form $(X - Y)(X + Y)$ with $X = \\cos A\\cos B$ and $Y = \\sin A\\sin B$, so their product is $X^2 - Y^2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply the difference of squares",
          "workingLatex": "= \\cos^2 A\\cos^2 B - \\sin^2 A\\sin^2 B",
          "explanation": "Squaring each part removes the cross terms, leaving just the two squared products.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Replace cos squared B",
          "workingLatex": "\\cos^2 B = 1 - \\sin^2 B",
          "explanation": "To move towards the target $\\cos^2 A - \\sin^2 B$ we rewrite $\\cos^2 B$ with Pythagoras so the expression is built from $\\cos^2 A$ and $\\sin^2 B$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Replace sin squared A",
          "workingLatex": "\\sin^2 A = 1 - \\cos^2 A",
          "explanation": "Similarly, rewriting $\\sin^2 A$ in terms of $\\cos^2 A$ prepares the second term for cancellation.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute both replacements",
          "workingLatex": "= \\cos^2 A(1 - \\sin^2 B) - (1 - \\cos^2 A)\\sin^2 B",
          "explanation": "Putting in both Pythagorean substitutions expresses everything through $\\cos^2 A$ and $\\sin^2 B$ only.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Expand the first product",
          "workingLatex": "\\cos^2 A(1 - \\sin^2 B) = \\cos^2 A - \\cos^2 A\\sin^2 B",
          "explanation": "Distributing $\\cos^2 A$ gives the wanted $\\cos^2 A$ plus a mixed term that should later cancel.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Expand the second product",
          "workingLatex": "-(1 - \\cos^2 A)\\sin^2 B = -\\sin^2 B + \\cos^2 A\\sin^2 B",
          "explanation": "Distributing the minus sign produces the wanted $-\\sin^2 B$ together with an equal and opposite mixed term.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Write out all four terms",
          "workingLatex": "= \\cos^2 A - \\cos^2 A\\sin^2 B - \\sin^2 B + \\cos^2 A\\sin^2 B",
          "explanation": "Collecting everything shows the two mixed $\\cos^2 A\\sin^2 B$ terms carry opposite signs.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Cancel the mixed terms",
          "workingLatex": "-\\cos^2 A\\sin^2 B + \\cos^2 A\\sin^2 B = 0",
          "explanation": "These two terms are equal and opposite, so they cancel exactly, which is what makes the identity tidy.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the simplified result",
          "workingLatex": "\\cos(A+B)\\cos(A-B) = \\cos^2 A - \\sin^2 B",
          "explanation": "What remains is precisely the right-hand side of the identity.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Numerical check with A = 50, B = 20",
          "workingLatex": "\\cos 70^\\circ\\cos 30^\\circ \\approx (0.3420)(0.8660) = 0.2962, \\quad \\cos^2 50^\\circ - \\sin^2 20^\\circ \\approx 0.4132 - 0.1170 = 0.2962",
          "explanation": "Both sides agree to four decimal places for these test angles, supporting the algebra.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Conclude",
          "workingLatex": "\\cos(A+B)\\cos(A-B) \\equiv \\cos^2 A - \\sin^2 B",
          "explanation": "Every step was an exact identity valid for all $A$ and $B$, so the proof is complete.",
          "diagram": null
        }
      ],
      "finalAnswer": "Expanding the product gives $\\cos^2 A\\cos^2 B - \\sin^2 A\\sin^2 B$; substituting $\\cos^2 B = 1-\\sin^2 B$ and $\\sin^2 A = 1-\\cos^2 A$ and cancelling the mixed terms yields $\\cos(A+B)\\cos(A-B) \\equiv \\cos^2 A - \\sin^2 B$."
    }
  },
  {
    "id": "al.y2.pure.compound-double-angles.q066",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Compound and double angles",
    "subtopicId": "al.y2.pure.compound-double-angles",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "proof",
    "tags": [
      "double angle",
      "proof",
      "identity"
    ],
    "questionText": "Prove the identity $\\dfrac{\\cos 2\\theta}{1 + \\sin 2\\theta} \\equiv \\dfrac{\\cos\\theta - \\sin\\theta}{\\cos\\theta + \\sin\\theta}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the plan",
          "workingLatex": "\\text{Rewrite the numerator and denominator of the LHS separately, then factor and cancel.}",
          "explanation": "The neatest route is to factorise the top and bottom of the left-hand side so a common factor cancels, leaving the right-hand side.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rewrite the numerator with a double-angle form",
          "workingLatex": "\\cos 2\\theta = \\cos^2\\theta - \\sin^2\\theta",
          "explanation": "Of the three versions of $\\cos 2\\theta$, the $\\cos^2\\theta - \\sin^2\\theta$ form is ideal because it factorises as a difference of two squares.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Factorise the numerator",
          "workingLatex": "\\cos^2\\theta - \\sin^2\\theta = (\\cos\\theta - \\sin\\theta)(\\cos\\theta + \\sin\\theta)",
          "explanation": "Treating it as $X^2 - Y^2 = (X-Y)(X+Y)$ produces the factor $(\\cos\\theta+\\sin\\theta)$ that we expect to cancel later.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rewrite the denominator with the sine double-angle form",
          "workingLatex": "1 + \\sin 2\\theta = 1 + 2\\sin\\theta\\cos\\theta",
          "explanation": "Replacing $\\sin 2\\theta$ with $2\\sin\\theta\\cos\\theta$ exposes a cross term that hints at a perfect square.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Replace 1 using Pythagoras",
          "workingLatex": "1 = \\sin^2\\theta + \\cos^2\\theta",
          "explanation": "Writing the constant $1$ as $\\sin^2\\theta+\\cos^2\\theta$ is the key trick: it supplies the square terms needed to complete a perfect square.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Assemble the denominator",
          "workingLatex": "1 + \\sin 2\\theta = \\sin^2\\theta + 2\\sin\\theta\\cos\\theta + \\cos^2\\theta",
          "explanation": "Combining the pieces gives three terms in the pattern $y^2 + 2xy + x^2$, a perfect square waiting to be recognised.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Factorise the denominator",
          "workingLatex": "\\sin^2\\theta + 2\\sin\\theta\\cos\\theta + \\cos^2\\theta = (\\cos\\theta + \\sin\\theta)^2",
          "explanation": "The three terms factor as $(\\cos\\theta+\\sin\\theta)^2$, which shares the factor $(\\cos\\theta+\\sin\\theta)$ with the numerator.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Rewrite the whole fraction",
          "workingLatex": "\\frac{\\cos 2\\theta}{1 + \\sin 2\\theta} = \\frac{(\\cos\\theta - \\sin\\theta)(\\cos\\theta + \\sin\\theta)}{(\\cos\\theta + \\sin\\theta)^2}",
          "explanation": "With both parts factorised, the common factor $(\\cos\\theta+\\sin\\theta)$ is now clearly visible top and bottom.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Cancel the common factor",
          "workingLatex": "= \\frac{\\cos\\theta - \\sin\\theta}{\\cos\\theta + \\sin\\theta}",
          "explanation": "Dividing top and bottom by $(\\cos\\theta+\\sin\\theta)$ leaves exactly the right-hand side. This is valid wherever $\\cos\\theta+\\sin\\theta\\neq0$, which is required for the fraction to exist anyway.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Note the domain",
          "workingLatex": "\\cos\\theta + \\sin\\theta \\neq 0 \\ \\Rightarrow\\ 1 + \\sin 2\\theta \\neq 0",
          "explanation": "The cancellation and the original left-hand side both require $\\cos\\theta+\\sin\\theta\\neq0$, so the identity is stated on exactly the values where both sides are defined.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Numerical check at theta = 20 degrees",
          "workingLatex": "\\frac{\\cos 40^\\circ}{1 + \\sin 40^\\circ} \\approx \\frac{0.7660}{1.6428} = 0.4663",
          "explanation": "Testing $\\theta = 20^\\circ$ gives the left-hand side as about $0.4663$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Compare with the right-hand side",
          "workingLatex": "\\frac{\\cos 20^\\circ - \\sin 20^\\circ}{\\cos 20^\\circ + \\sin 20^\\circ} \\approx \\frac{0.5977}{1.2817} = 0.4663",
          "explanation": "The right-hand side gives the same value, confirming the identity for this angle.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Conclude",
          "workingLatex": "\\frac{\\cos 2\\theta}{1 + \\sin 2\\theta} \\equiv \\frac{\\cos\\theta - \\sin\\theta}{\\cos\\theta + \\sin\\theta}",
          "explanation": "Since each step was an exact equality on the common domain, the identity is proved.",
          "diagram": null
        }
      ],
      "finalAnswer": "Factorising gives $\\dfrac{(\\cos\\theta-\\sin\\theta)(\\cos\\theta+\\sin\\theta)}{(\\cos\\theta+\\sin\\theta)^2}$; cancelling the common factor $(\\cos\\theta+\\sin\\theta)$ leaves $\\dfrac{\\cos\\theta - \\sin\\theta}{\\cos\\theta + \\sin\\theta}$, proving the identity (for $\\cos\\theta+\\sin\\theta\\neq0$)."
    }
  },
  {
    "id": "al.y2.pure.compound-double-angles.q067",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Compound and double angles",
    "subtopicId": "al.y2.pure.compound-double-angles",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "exact",
    "tags": [
      "exact values",
      "double angle",
      "tan"
    ],
    "questionText": "Using the double-angle formula for $\\tan$ with the fact that $45^\\circ = 2\\times 22.5^\\circ$, show that $\\tan 22.5^\\circ = \\sqrt{2} - 1$, justifying your choice of sign.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the double-angle relationship",
          "workingLatex": "45^\\circ = 2\\times 22.5^\\circ, \\qquad \\text{let } t = \\tan 22.5^\\circ",
          "explanation": "Since $45^\\circ$ is twice $22.5^\\circ$, the double-angle formula links the known $\\tan 45^\\circ$ to the unknown $t = \\tan 22.5^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the tan double-angle formula",
          "workingLatex": "\\tan 45^\\circ = \\frac{2\\tan 22.5^\\circ}{1 - \\tan^2 22.5^\\circ} = \\frac{2t}{1 - t^2}",
          "explanation": "Applying $\\tan 2A = \\dfrac{2\\tan A}{1 - \\tan^2 A}$ with $A = 22.5^\\circ$ expresses $\\tan 45^\\circ$ entirely in terms of $t$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Insert the known value",
          "workingLatex": "1 = \\frac{2t}{1 - t^2}",
          "explanation": "Because $\\tan 45^\\circ = 1$, the left-hand side is known, giving an equation with $t$ as the only unknown.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Clear the fraction",
          "workingLatex": "1 - t^2 = 2t",
          "explanation": "Multiplying both sides by $1 - t^2$ removes the denominator and produces a polynomial equation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rearrange into a quadratic",
          "workingLatex": "t^2 + 2t - 1 = 0",
          "explanation": "Collecting all terms on one side gives a standard quadratic in $t$, which we can solve exactly.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply the quadratic formula",
          "workingLatex": "t = \\frac{-2 \\pm \\sqrt{2^2 - 4(1)(-1)}}{2(1)} = \\frac{-2 \\pm \\sqrt{8}}{2}",
          "explanation": "The quadratic does not factorise over the rationals, so the formula gives the two exact roots.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify the surd",
          "workingLatex": "\\sqrt{8} = 2\\sqrt{2}",
          "explanation": "Writing $8 = 4\\times 2$ lets us pull out the perfect square, simplifying the discriminant.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Simplify the roots",
          "workingLatex": "t = \\frac{-2 \\pm 2\\sqrt{2}}{2} = -1 \\pm \\sqrt{2}",
          "explanation": "Dividing numerator and denominator by $2$ gives the two candidate values $-1+\\sqrt{2}$ and $-1-\\sqrt{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "List the two candidates",
          "workingLatex": "t = -1 + \\sqrt{2} \\approx 0.414 \\qquad \\text{or} \\qquad t = -1 - \\sqrt{2} \\approx -2.414",
          "explanation": "Only one of these can be $\\tan 22.5^\\circ$; the quadrant of the angle decides which.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Decide the sign from the quadrant",
          "workingLatex": "0^\\circ < 22.5^\\circ < 90^\\circ \\ \\Rightarrow\\ \\tan 22.5^\\circ > 0",
          "explanation": "The angle $22.5^\\circ$ lies in the first quadrant, where tangent is positive, so the answer must be positive.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Reject the negative root",
          "workingLatex": "-1 - \\sqrt{2} < 0 \\quad \\text{(rejected)}",
          "explanation": "The root $-1-\\sqrt{2}$ is negative, so it cannot equal $\\tan 22.5^\\circ$ and is discarded.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Select the valid root",
          "workingLatex": "\\tan 22.5^\\circ = -1 + \\sqrt{2} = \\sqrt{2} - 1",
          "explanation": "The remaining positive root is the required exact value.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Numerical check",
          "workingLatex": "\\sqrt{2} - 1 \\approx 1.4142 - 1 = 0.4142, \\qquad \\tan 22.5^\\circ \\approx 0.4142",
          "explanation": "The exact value agrees with a calculator value of $\\tan 22.5^\\circ$, confirming the result.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the answer",
          "workingLatex": "\\tan 22.5^\\circ = \\sqrt{2} - 1",
          "explanation": "The exact value of $\\tan 22.5^\\circ$ is $\\sqrt{2}-1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\tan 22.5^\\circ = \\sqrt{2} - 1 \\approx 0.4142$ (the positive root of $t^2 + 2t - 1 = 0$, chosen because $22.5^\\circ$ is in the first quadrant)."
    }
  },
  {
    "id": "al.y2.pure.compound-double-angles.q068",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Compound and double angles",
    "subtopicId": "al.y2.pure.compound-double-angles",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "exact",
    "tags": [
      "exact values",
      "double angle",
      "surds"
    ],
    "questionText": "(a) Show that $(\\cos 15^\\circ - \\sin 15^\\circ)^2 = \\tfrac{1}{2}$. (b) Hence write down the exact value of $\\cos 15^\\circ - \\sin 15^\\circ$, justifying the sign. (c) Find the exact value of $\\sin 15^\\circ\\cos 15^\\circ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Expand the square",
          "workingLatex": "(\\cos 15^\\circ - \\sin 15^\\circ)^2 = \\cos^2 15^\\circ - 2\\sin 15^\\circ\\cos 15^\\circ + \\sin^2 15^\\circ",
          "explanation": "Expanding the bracket produces the two squared terms plus a cross term. Both pieces are things we can simplify with standard identities.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Group the squared terms",
          "workingLatex": "\\cos^2 15^\\circ + \\sin^2 15^\\circ = 1",
          "explanation": "By the Pythagorean identity the two squares add to $1$ for any angle, which removes them cleanly.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recognise the cross term as a double angle",
          "workingLatex": "2\\sin 15^\\circ\\cos 15^\\circ = \\sin(2\\times 15^\\circ) = \\sin 30^\\circ",
          "explanation": "The cross term matches $\\sin 2A = 2\\sin A\\cos A$ with $A = 15^\\circ$, turning it into the exactly known $\\sin 30^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rewrite the expanded square",
          "workingLatex": "(\\cos 15^\\circ - \\sin 15^\\circ)^2 = 1 - \\sin 30^\\circ",
          "explanation": "Substituting the two simplifications collapses the whole expression into $1$ minus a known sine.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Insert the exact value of sin 30",
          "workingLatex": "\\sin 30^\\circ = \\tfrac{1}{2}",
          "explanation": "This is a standard exact value, so no further work is needed to evaluate it.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Complete part (a)",
          "workingLatex": "(\\cos 15^\\circ - \\sin 15^\\circ)^2 = 1 - \\tfrac{1}{2} = \\tfrac{1}{2}",
          "explanation": "The square of the difference equals $\\tfrac{1}{2}$, which proves the result asked for in part (a).",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Take the square root",
          "workingLatex": "\\cos 15^\\circ - \\sin 15^\\circ = \\pm\\sqrt{\\tfrac{1}{2}}",
          "explanation": "Taking square roots gives two possibilities; we must decide which sign is correct using the sizes of the two ratios.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Simplify the surd",
          "workingLatex": "\\sqrt{\\tfrac{1}{2}} = \\frac{1}{\\sqrt{2}} = \\frac{\\sqrt{2}}{2}",
          "explanation": "Rationalising the denominator writes the root in the tidy exact form $\\dfrac{\\sqrt{2}}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Decide the sign",
          "workingLatex": "15^\\circ < 45^\\circ \\ \\Rightarrow\\ \\cos 15^\\circ > \\sin 15^\\circ \\ \\Rightarrow\\ \\cos 15^\\circ - \\sin 15^\\circ > 0",
          "explanation": "For acute angles below $45^\\circ$ the cosine exceeds the sine, so the difference is positive and we take the positive root.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State part (b)",
          "workingLatex": "\\cos 15^\\circ - \\sin 15^\\circ = \\frac{\\sqrt{2}}{2}",
          "explanation": "The exact value of the difference is $\\dfrac{\\sqrt{2}}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Set up part (c)",
          "workingLatex": "\\sin 15^\\circ\\cos 15^\\circ = \\tfrac{1}{2}\\left(2\\sin 15^\\circ\\cos 15^\\circ\\right) = \\tfrac{1}{2}\\sin 30^\\circ",
          "explanation": "Halving the double-angle expression $2\\sin 15^\\circ\\cos 15^\\circ = \\sin 30^\\circ$ isolates the product asked for.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Evaluate part (c)",
          "workingLatex": "\\sin 15^\\circ\\cos 15^\\circ = \\tfrac{1}{2}\\cdot\\tfrac{1}{2} = \\tfrac{1}{4}",
          "explanation": "Substituting $\\sin 30^\\circ = \\tfrac{1}{2}$ gives the exact product $\\tfrac{1}{4}$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Numerical check",
          "workingLatex": "\\cos 15^\\circ - \\sin 15^\\circ \\approx 0.9659 - 0.2588 = 0.7071 = \\frac{\\sqrt{2}}{2}",
          "explanation": "A calculator confirms the difference is about $0.7071$, matching $\\dfrac{\\sqrt{2}}{2}$, and $0.9659\\times0.2588\\approx0.25$ confirms part (c).",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State all results",
          "workingLatex": "(\\cos 15^\\circ - \\sin 15^\\circ)^2 = \\tfrac{1}{2}, \\quad \\cos 15^\\circ - \\sin 15^\\circ = \\frac{\\sqrt{2}}{2}, \\quad \\sin 15^\\circ\\cos 15^\\circ = \\tfrac{1}{4}",
          "explanation": "Collecting the three answers completes all parts of the question.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $(\\cos 15^\\circ - \\sin 15^\\circ)^2 = 1 - \\sin 30^\\circ = \\tfrac{1}{2}$. (b) Since $15^\\circ<45^\\circ$, the difference is positive, so $\\cos 15^\\circ - \\sin 15^\\circ = \\dfrac{\\sqrt{2}}{2}$. (c) $\\sin 15^\\circ\\cos 15^\\circ = \\tfrac{1}{2}\\sin 30^\\circ = \\tfrac{1}{4}$."
    }
  },
  {
    "id": "al.y2.pure.compound-double-angles.q069",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Compound and double angles",
    "subtopicId": "al.y2.pure.compound-double-angles",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "exact",
    "tags": [
      "double angle",
      "quadrant",
      "exact values"
    ],
    "questionText": "Given that $\\cos 2\\theta = -\\tfrac{7}{25}$ and that $\\tfrac{\\pi}{2} < \\theta < \\pi$, find the exact values of $\\sin\\theta$, $\\cos\\theta$ and $\\tan\\theta$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Plan the reverse approach",
          "workingLatex": "\\cos 2\\theta = -\\tfrac{7}{25}, \\qquad \\tfrac{\\pi}{2} < \\theta < \\pi",
          "explanation": "We are given the double angle and must recover the single-angle ratios. The two forms of $\\cos 2\\theta$ in terms of $\\sin\\theta$ and of $\\cos\\theta$ let us solve for each ratio, and the quadrant fixes the signs.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Use the sine form of cos 2theta",
          "workingLatex": "\\cos 2\\theta = 1 - 2\\sin^2\\theta \\ \\Rightarrow\\ \\sin^2\\theta = \\frac{1 - \\cos 2\\theta}{2}",
          "explanation": "Rearranging the version $\\cos 2\\theta = 1 - 2\\sin^2\\theta$ makes $\\sin^2\\theta$ the subject, ready for the given value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the given value",
          "workingLatex": "\\sin^2\\theta = \\frac{1 - \\left(-\\tfrac{7}{25}\\right)}{2} = \\frac{\\tfrac{32}{25}}{2} = \\frac{16}{25}",
          "explanation": "Putting in $\\cos 2\\theta = -\\tfrac{7}{25}$ and simplifying gives $\\sin^2\\theta$ as an exact fraction.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Take the square root",
          "workingLatex": "\\sin\\theta = \\pm\\tfrac{4}{5}",
          "explanation": "Square rooting gives two possibilities; the quadrant will tell us which sign to keep.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Fix the sign of sine",
          "workingLatex": "\\tfrac{\\pi}{2} < \\theta < \\pi \\ \\Rightarrow\\ \\sin\\theta > 0 \\ \\Rightarrow\\ \\sin\\theta = \\tfrac{4}{5}",
          "explanation": "In the second quadrant sine is positive, so we take the positive root $\\tfrac{4}{5}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Use the cosine form of cos 2theta",
          "workingLatex": "\\cos 2\\theta = 2\\cos^2\\theta - 1 \\ \\Rightarrow\\ \\cos^2\\theta = \\frac{1 + \\cos 2\\theta}{2}",
          "explanation": "The version $\\cos 2\\theta = 2\\cos^2\\theta - 1$ rearranges to give $\\cos^2\\theta$, letting us find the cosine directly.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute the given value",
          "workingLatex": "\\cos^2\\theta = \\frac{1 + \\left(-\\tfrac{7}{25}\\right)}{2} = \\frac{\\tfrac{18}{25}}{2} = \\frac{9}{25}",
          "explanation": "Substituting the same $\\cos 2\\theta = -\\tfrac{7}{25}$ gives $\\cos^2\\theta$ exactly.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Take the square root",
          "workingLatex": "\\cos\\theta = \\pm\\tfrac{3}{5}",
          "explanation": "Again there are two candidate signs, to be resolved by the quadrant.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Fix the sign of cosine",
          "workingLatex": "\\tfrac{\\pi}{2} < \\theta < \\pi \\ \\Rightarrow\\ \\cos\\theta < 0 \\ \\Rightarrow\\ \\cos\\theta = -\\tfrac{3}{5}",
          "explanation": "In the second quadrant cosine is negative, so the correct value is $-\\tfrac{3}{5}$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Form the tangent",
          "workingLatex": "\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta} = \\frac{\\tfrac{4}{5}}{-\\tfrac{3}{5}} = -\\tfrac{4}{3}",
          "explanation": "Dividing the sine by the cosine gives the tangent; the fifths cancel, leaving a negative value as expected in the second quadrant.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check with Pythagoras",
          "workingLatex": "\\sin^2\\theta + \\cos^2\\theta = \\tfrac{16}{25} + \\tfrac{9}{25} = \\tfrac{25}{25} = 1",
          "explanation": "The two ratios satisfy the Pythagorean identity, a good consistency check.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Check against the given double angle",
          "workingLatex": "\\cos 2\\theta = \\cos^2\\theta - \\sin^2\\theta = \\tfrac{9}{25} - \\tfrac{16}{25} = -\\tfrac{7}{25}",
          "explanation": "Recomputing $\\cos 2\\theta$ from our values returns the given $-\\tfrac{7}{25}$, confirming everything is consistent.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Confirm theta lies in the stated range",
          "workingLatex": "\\sin\\theta = \\tfrac{4}{5},\\ \\cos\\theta = -\\tfrac{3}{5} \\ \\Rightarrow\\ \\theta \\approx 126.9^\\circ",
          "explanation": "These signs place $\\theta$ at roughly $126.9^\\circ$, which indeed lies between $90^\\circ$ and $180^\\circ$, matching the given interval.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the results",
          "workingLatex": "\\sin\\theta = \\tfrac{4}{5}, \\quad \\cos\\theta = -\\tfrac{3}{5}, \\quad \\tan\\theta = -\\tfrac{4}{3}",
          "explanation": "Collecting the three exact values gives the final answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sin\\theta = \\tfrac{4}{5}$, $\\cos\\theta = -\\tfrac{3}{5}$, $\\tan\\theta = -\\tfrac{4}{3}$ (taking $\\sin\\theta>0$, $\\cos\\theta<0$ because $\\theta$ is in the second quadrant)."
    }
  },
  {
    "id": "al.y2.pure.compound-double-angles.q070",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Compound and double angles",
    "subtopicId": "al.y2.pure.compound-double-angles",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "exact",
    "tags": [
      "exact values",
      "triple angle",
      "double angle"
    ],
    "questionText": "Let $\\theta = 36^\\circ$. By using the fact that $3\\theta + 2\\theta = 180^\\circ$, together with the triple- and double-angle formulae for cosine, show that $\\cos 36^\\circ = \\dfrac{1+\\sqrt{5}}{4}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the angle relationship",
          "workingLatex": "\\theta = 36^\\circ, \\qquad 3\\theta + 2\\theta = 108^\\circ + 72^\\circ = 180^\\circ",
          "explanation": "Because five copies of $36^\\circ$ make $180^\\circ$, we can relate the triple angle $3\\theta$ to the double angle $2\\theta$, which is the engine of the whole derivation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rewrite the triple angle",
          "workingLatex": "3\\theta = 180^\\circ - 2\\theta",
          "explanation": "Rearranging $3\\theta + 2\\theta = 180^\\circ$ expresses $3\\theta$ as a supplement of $2\\theta$, which we can feed into the cosine of a supplement.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use the supplementary-angle property",
          "workingLatex": "\\cos 3\\theta = \\cos(180^\\circ - 2\\theta) = -\\cos 2\\theta",
          "explanation": "Cosine of a supplement flips sign, so $\\cos 3\\theta = -\\cos 2\\theta$. This single equation links the triple and double angles of $\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the triple-angle formula",
          "workingLatex": "\\cos 3\\theta = 4\\cos^3\\theta - 3\\cos\\theta",
          "explanation": "This identity follows from the compound-angle formulae (expanding $\\cos(2\\theta+\\theta)$) and lets us write $\\cos 3\\theta$ in terms of $\\cos\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the double-angle formula",
          "workingLatex": "\\cos 2\\theta = 2\\cos^2\\theta - 1",
          "explanation": "Choosing the all-cosine form of $\\cos 2\\theta$ keeps the whole equation in a single variable, $\\cos\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Introduce a shorthand",
          "workingLatex": "\\text{Let } c = \\cos 36^\\circ",
          "explanation": "Naming $\\cos 36^\\circ$ as $c$ turns the trigonometric equation into an ordinary polynomial equation in $c$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute into the relationship",
          "workingLatex": "4c^3 - 3c = -(2c^2 - 1)",
          "explanation": "Replacing $\\cos 3\\theta$ and $\\cos 2\\theta$ with their formulae in $\\cos 3\\theta = -\\cos 2\\theta$ produces a cubic equation for $c$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Expand the right-hand side",
          "workingLatex": "4c^3 - 3c = -2c^2 + 1",
          "explanation": "Distributing the minus sign prepares the equation for collecting all terms on one side.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Form the cubic",
          "workingLatex": "4c^3 + 2c^2 - 3c - 1 = 0",
          "explanation": "Bringing every term to the left gives a cubic whose roots include $\\cos 36^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Find an obvious root",
          "workingLatex": "c = -1: \\quad 4(-1)^3 + 2(-1)^2 - 3(-1) - 1 = -4 + 2 + 3 - 1 = 0",
          "explanation": "Testing $c=-1$ gives zero, so $(c+1)$ is a factor. This root corresponds to $\\cos 180^\\circ$, an unwanted solution we will discard.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Factorise the cubic",
          "workingLatex": "4c^3 + 2c^2 - 3c - 1 = (c + 1)(4c^2 - 2c - 1) = 0",
          "explanation": "Dividing out the known factor $(c+1)$ leaves a quadratic that contains the value we actually want.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Discard the unwanted root",
          "workingLatex": "\\cos 36^\\circ \\neq -1 \\ \\Rightarrow\\ 4c^2 - 2c - 1 = 0",
          "explanation": "Since $\\cos 36^\\circ$ is clearly not $-1$, the relevant solutions come from the quadratic factor.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Solve the quadratic",
          "workingLatex": "c = \\frac{2 \\pm \\sqrt{(-2)^2 - 4(4)(-1)}}{2(4)} = \\frac{2 \\pm \\sqrt{20}}{8}",
          "explanation": "The quadratic formula gives the two exact roots; the discriminant is $4 + 16 = 20$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Simplify the surd",
          "workingLatex": "\\sqrt{20} = 2\\sqrt{5} \\ \\Rightarrow\\ c = \\frac{2 \\pm 2\\sqrt{5}}{8} = \\frac{1 \\pm \\sqrt{5}}{4}",
          "explanation": "Simplifying $\\sqrt{20}=2\\sqrt{5}$ and cancelling a factor of $2$ gives the two candidate exact values.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Choose the correct sign",
          "workingLatex": "\\frac{1 - \\sqrt{5}}{4} < 0, \\quad \\cos 36^\\circ > 0 \\ \\Rightarrow\\ \\cos 36^\\circ = \\frac{1 + \\sqrt{5}}{4}",
          "explanation": "Since $36^\\circ$ is acute, its cosine is positive, so we reject the negative root and keep $\\dfrac{1+\\sqrt{5}}{4}$.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "Numerical check",
          "workingLatex": "\\frac{1 + \\sqrt{5}}{4} \\approx \\frac{1 + 2.2361}{4} = 0.8090, \\qquad \\cos 36^\\circ \\approx 0.8090",
          "explanation": "The exact value evaluates to about $0.8090$, exactly matching a calculator value of $\\cos 36^\\circ$, so the result is confirmed.",
          "diagram": null
        }
      ],
      "finalAnswer": "Using $\\cos 3\\theta = -\\cos 2\\theta$ with $\\theta=36^\\circ$ leads to $4c^2 - 2c - 1 = 0$ where $c=\\cos 36^\\circ$; taking the positive root gives $\\cos 36^\\circ = \\dfrac{1+\\sqrt{5}}{4} \\approx 0.809$."
    }
  }
];
