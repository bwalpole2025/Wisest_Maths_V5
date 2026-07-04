import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "id": "al.y1.pure.trig-identities.q001",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Identities and equations",
    "subtopicId": "al.y1.pure.trig-identities",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "proof",
    "tags": [
      "trig-identities",
      "pythagorean-identity",
      "exact-values"
    ],
    "questionText": "Verify that $\\sin^2\\theta+\\cos^2\\theta=1$ when $\\theta=30^\\circ$, using exact values.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the identity to check",
          "workingLatex": "\\sin^2 30^\\circ+\\cos^2 30^\\circ=1",
          "explanation": "The Pythagorean identity says $\\sin^2\\theta+\\cos^2\\theta=1$ for every angle. Here we test it at $\\theta=30^\\circ$ by working out each side with exact values.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the exact value of $\\sin 30^\\circ$",
          "workingLatex": "\\sin 30^\\circ=\\frac{1}{2}",
          "explanation": "This is one of the standard exact values you are expected to know. It comes from the special $30$-$60$-$90$ triangle.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall the exact value of $\\cos 30^\\circ$",
          "workingLatex": "\\cos 30^\\circ=\\frac{\\sqrt{3}}{2}",
          "explanation": "This is the matching exact value from the same special triangle, so both parts stay exact rather than rounded decimals.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Square the sine value",
          "workingLatex": "\\sin^2 30^\\circ=\\left(\\frac{1}{2}\\right)^2=\\frac{1}{4}",
          "explanation": "Remember that $\\sin^2\\theta$ means $(\\sin\\theta)^2$, so we square the whole fraction, squaring both the top and the bottom.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Square the cosine value",
          "workingLatex": "\\cos^2 30^\\circ=\\left(\\frac{\\sqrt{3}}{2}\\right)^2=\\frac{3}{4}",
          "explanation": "Squaring $\\sqrt{3}$ removes the root and gives $3$, and squaring the $2$ gives $4$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Add the two squares",
          "workingLatex": "\\frac{1}{4}+\\frac{3}{4}=\\frac{4}{4}=1",
          "explanation": "The denominators already match, so we simply add the numerators, and $1+3=4$ over $4$ simplifies to $1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the conclusion",
          "workingLatex": "\\sin^2 30^\\circ+\\cos^2 30^\\circ=1",
          "explanation": "Both sides agree, which confirms the identity holds at $\\theta=30^\\circ$ exactly as the Pythagorean identity promises.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sin^2 30^\\circ+\\cos^2 30^\\circ=\\frac{1}{4}+\\frac{3}{4}=1$, so the identity is verified."
    }
  },
  {
    "id": "al.y1.pure.trig-identities.q002",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Identities and equations",
    "subtopicId": "al.y1.pure.trig-identities",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "trig-identities",
      "tan-ratio"
    ],
    "questionText": "Given that $\\sin\\theta=\\frac{3}{5}$ and $\\cos\\theta=\\frac{4}{5}$, where $\\theta$ is acute, find the exact value of $\\tan\\theta$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the quotient identity",
          "workingLatex": "\\tan\\theta=\\frac{\\sin\\theta}{\\cos\\theta}",
          "explanation": "The tangent of an angle is defined as its sine divided by its cosine, so this identity turns the two values we know into $\\tan\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Note the given values",
          "workingLatex": "\\sin\\theta=\\frac{3}{5},\\quad \\cos\\theta=\\frac{4}{5}",
          "explanation": "We are handed both the sine and cosine directly, so no other identity is needed here.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute into the identity",
          "workingLatex": "\\tan\\theta=\\frac{\\;\\frac{3}{5}\\;}{\\;\\frac{4}{5}\\;}",
          "explanation": "We place the sine on top and the cosine on the bottom, giving a fraction divided by a fraction.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Divide by multiplying by the reciprocal",
          "workingLatex": "\\tan\\theta=\\frac{3}{5}\\times\\frac{5}{4}",
          "explanation": "Dividing by $\\frac{4}{5}$ is the same as multiplying by its flip $\\frac{5}{4}$, which makes the arithmetic simpler.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Cancel and simplify",
          "workingLatex": "\\tan\\theta=\\frac{3\\times 5}{5\\times 4}=\\frac{15}{20}=\\frac{3}{4}",
          "explanation": "The fives cancel, leaving $\\frac{3}{4}$; the shared factor of $5$ was always going to disappear.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check the result is reasonable",
          "workingLatex": "0<\\tan\\theta<1",
          "explanation": "Since $\\theta$ is acute and the sine is smaller than the cosine, $\\tan\\theta$ should be a positive value below $1$, and $\\frac{3}{4}$ fits.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\tan\\theta=\\frac{3}{4}$"
    }
  },
  {
    "id": "al.y1.pure.trig-identities.q003",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Identities and equations",
    "subtopicId": "al.y1.pure.trig-identities",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "trig-identities",
      "pythagorean-identity"
    ],
    "questionText": "Given that $\\cos\\theta=\\frac{3}{5}$ and $\\theta$ is acute, find the exact value of $\\sin\\theta$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the Pythagorean identity",
          "workingLatex": "\\sin^2\\theta+\\cos^2\\theta\\equiv 1",
          "explanation": "This identity links sine and cosine, so knowing one lets us find the other.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rearrange to make $\\sin^2\\theta$ the subject",
          "workingLatex": "\\sin^2\\theta=1-\\cos^2\\theta",
          "explanation": "Subtracting $\\cos^2\\theta$ from both sides isolates the quantity we want, since we are given the cosine.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Square the given cosine",
          "workingLatex": "\\cos^2\\theta=\\left(\\frac{3}{5}\\right)^2=\\frac{9}{25}",
          "explanation": "We square the whole fraction, top and bottom, because $\\cos^2\\theta$ means $(\\cos\\theta)^2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the rearranged identity",
          "workingLatex": "\\sin^2\\theta=1-\\frac{9}{25}=\\frac{25}{25}-\\frac{9}{25}=\\frac{16}{25}",
          "explanation": "Writing $1$ as $\\frac{25}{25}$ gives a common denominator so the subtraction is straightforward.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Take the square root",
          "workingLatex": "\\sin\\theta=\\sqrt{\\frac{16}{25}}=\\frac{4}{5}",
          "explanation": "The square root of a fraction is the root of the top over the root of the bottom, giving $\\frac{4}{5}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Choose the correct sign",
          "workingLatex": "\\sin\\theta=+\\frac{4}{5}",
          "explanation": "Because $\\theta$ is acute it lies in the first quadrant, where sine is positive, so we keep the positive root.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check with the identity",
          "workingLatex": "\\left(\\frac{4}{5}\\right)^2+\\left(\\frac{3}{5}\\right)^2=\\frac{16}{25}+\\frac{9}{25}=1",
          "explanation": "Substituting both values back reproduces $1$, confirming the answer is consistent.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sin\\theta=\\frac{4}{5}$"
    }
  },
  {
    "id": "al.y1.pure.trig-identities.q004",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Identities and equations",
    "subtopicId": "al.y1.pure.trig-identities",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "trig-identities",
      "pythagorean-identity"
    ],
    "questionText": "Given that $\\sin\\theta=\\frac{5}{13}$ and $\\theta$ is acute, find the exact value of $\\cos\\theta$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the Pythagorean identity",
          "workingLatex": "\\sin^2\\theta+\\cos^2\\theta\\equiv 1",
          "explanation": "This identity connects sine and cosine, so knowing the sine gives us a route to the cosine.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rearrange to make $\\cos^2\\theta$ the subject",
          "workingLatex": "\\cos^2\\theta=1-\\sin^2\\theta",
          "explanation": "Subtracting $\\sin^2\\theta$ from both sides isolates $\\cos^2\\theta$, which is what we need since the sine is given.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Square the given sine",
          "workingLatex": "\\sin^2\\theta=\\left(\\frac{5}{13}\\right)^2=\\frac{25}{169}",
          "explanation": "We square the numerator and denominator separately because $\\sin^2\\theta$ means $(\\sin\\theta)^2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the rearranged identity",
          "workingLatex": "\\cos^2\\theta=1-\\frac{25}{169}=\\frac{169}{169}-\\frac{25}{169}=\\frac{144}{169}",
          "explanation": "Writing $1$ as $\\frac{169}{169}$ gives a common denominator, so the subtraction is clean.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Take the square root",
          "workingLatex": "\\cos\\theta=\\sqrt{\\frac{144}{169}}=\\frac{12}{13}",
          "explanation": "The roots of $144$ and $169$ are $12$ and $13$, giving the fraction $\\frac{12}{13}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Choose the correct sign",
          "workingLatex": "\\cos\\theta=+\\frac{12}{13}",
          "explanation": "As $\\theta$ is acute it sits in the first quadrant, where cosine is positive, so the positive root is correct.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check with the identity",
          "workingLatex": "\\left(\\frac{5}{13}\\right)^2+\\left(\\frac{12}{13}\\right)^2=\\frac{25}{169}+\\frac{144}{169}=1",
          "explanation": "The two squares add back to $1$, confirming the value of the cosine is consistent.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\cos\\theta=\\frac{12}{13}$"
    }
  },
  {
    "id": "al.y1.pure.trig-identities.q005",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Identities and equations",
    "subtopicId": "al.y1.pure.trig-identities",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "trig-identities",
      "tan-ratio"
    ],
    "questionText": "Given that $\\sin\\theta=\\frac{8}{17}$ and $\\cos\\theta=\\frac{15}{17}$, where $\\theta$ is acute, find the exact value of $\\tan\\theta$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the quotient identity",
          "workingLatex": "\\tan\\theta=\\frac{\\sin\\theta}{\\cos\\theta}",
          "explanation": "Tangent is defined as sine over cosine, so we can build $\\tan\\theta$ straight from the two values given.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Note the given values",
          "workingLatex": "\\sin\\theta=\\frac{8}{17},\\quad \\cos\\theta=\\frac{15}{17}",
          "explanation": "Both the sine and cosine are provided, so we can substitute directly without any extra working.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute into the identity",
          "workingLatex": "\\tan\\theta=\\frac{\\;\\frac{8}{17}\\;}{\\;\\frac{15}{17}\\;}",
          "explanation": "The sine goes on top and the cosine on the bottom, producing a fraction over a fraction.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Divide by multiplying by the reciprocal",
          "workingLatex": "\\tan\\theta=\\frac{8}{17}\\times\\frac{17}{15}",
          "explanation": "Dividing by $\\frac{15}{17}$ is the same as multiplying by its reciprocal $\\frac{17}{15}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Cancel and simplify",
          "workingLatex": "\\tan\\theta=\\frac{8\\times 17}{17\\times 15}=\\frac{8}{15}",
          "explanation": "The shared factor of $17$ cancels top and bottom, leaving the simple fraction $\\frac{8}{15}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check the result is reasonable",
          "workingLatex": "0<\\tan\\theta<1",
          "explanation": "Since $\\theta$ is acute with sine smaller than cosine, the tangent should be positive and less than $1$, and $\\frac{8}{15}$ agrees.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\tan\\theta=\\frac{8}{15}$"
    }
  },
  {
    "id": "al.y1.pure.trig-identities.q006",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Identities and equations",
    "subtopicId": "al.y1.pure.trig-identities",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "trig-identities",
      "pythagorean-identity",
      "simplify"
    ],
    "questionText": "Simplify $1-\\cos^2\\theta$, writing your answer as a single trigonometric term.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the expression",
          "workingLatex": "1-\\cos^2\\theta",
          "explanation": "We start from the expression we are asked to simplify and look for an identity that involves $\\cos^2\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the Pythagorean identity",
          "workingLatex": "\\sin^2\\theta+\\cos^2\\theta\\equiv 1",
          "explanation": "This is the key identity connecting the squares of sine and cosine, and it contains exactly the pieces we see.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange the identity",
          "workingLatex": "\\sin^2\\theta\\equiv 1-\\cos^2\\theta",
          "explanation": "Subtracting $\\cos^2\\theta$ from both sides isolates $\\sin^2\\theta$ and produces the exact expression in the question.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Match the expression to the identity",
          "workingLatex": "1-\\cos^2\\theta\\equiv \\sin^2\\theta",
          "explanation": "The right-hand side of the rearranged identity is identical to our expression, so we can replace it directly.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the simplified form",
          "workingLatex": "1-\\cos^2\\theta=\\sin^2\\theta",
          "explanation": "The expression collapses to a single term, $\\sin^2\\theta$, which is the simplest form.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check with a value of $\\theta$",
          "workingLatex": "\\theta=30^\\circ:\\; 1-\\left(\\tfrac{\\sqrt{3}}{2}\\right)^2=1-\\tfrac{3}{4}=\\tfrac{1}{4}=\\left(\\tfrac{1}{2}\\right)^2",
          "explanation": "Testing $\\theta=30^\\circ$ gives $\\tfrac{1}{4}$, which equals $\\sin^2 30^\\circ$, confirming the simplification.",
          "diagram": null
        }
      ],
      "finalAnswer": "$1-\\cos^2\\theta=\\sin^2\\theta$"
    }
  },
  {
    "id": "al.y1.pure.trig-identities.q007",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Identities and equations",
    "subtopicId": "al.y1.pure.trig-identities",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "trig-identities",
      "pythagorean-identity",
      "simplify"
    ],
    "questionText": "Simplify $1-\\sin^2\\theta$, writing your answer as a single trigonometric term.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the expression",
          "workingLatex": "1-\\sin^2\\theta",
          "explanation": "We begin with the expression to be simplified and look for an identity that features $\\sin^2\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the Pythagorean identity",
          "workingLatex": "\\sin^2\\theta+\\cos^2\\theta\\equiv 1",
          "explanation": "This identity ties together $\\sin^2\\theta$ and $\\cos^2\\theta$, and it holds for every angle.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange the identity",
          "workingLatex": "\\cos^2\\theta\\equiv 1-\\sin^2\\theta",
          "explanation": "Subtracting $\\sin^2\\theta$ from both sides isolates $\\cos^2\\theta$ and gives the exact expression we started with.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Match the expression to the identity",
          "workingLatex": "1-\\sin^2\\theta\\equiv \\cos^2\\theta",
          "explanation": "Our expression matches the right-hand side of the rearranged identity, so we can swap it for a single term.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the simplified form",
          "workingLatex": "1-\\sin^2\\theta=\\cos^2\\theta",
          "explanation": "The expression reduces to the single term $\\cos^2\\theta$, which is fully simplified.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check with a value of $\\theta$",
          "workingLatex": "\\theta=30^\\circ:\\; 1-\\left(\\tfrac{1}{2}\\right)^2=1-\\tfrac{1}{4}=\\tfrac{3}{4}=\\left(\\tfrac{\\sqrt{3}}{2}\\right)^2",
          "explanation": "Testing $\\theta=30^\\circ$ gives $\\tfrac{3}{4}$, which equals $\\cos^2 30^\\circ$, confirming the result.",
          "diagram": null
        }
      ],
      "finalAnswer": "$1-\\sin^2\\theta=\\cos^2\\theta$"
    }
  },
  {
    "id": "al.y1.pure.trig-identities.q008",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Identities and equations",
    "subtopicId": "al.y1.pure.trig-identities",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "trig-identities",
      "tan-ratio",
      "simplify"
    ],
    "questionText": "Simplify $\\frac{\\sin\\theta}{\\cos\\theta}$, writing your answer as a single trigonometric function.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the expression",
          "workingLatex": "\\frac{\\sin\\theta}{\\cos\\theta}",
          "explanation": "We start with the ratio of sine to cosine and look for the identity that describes it.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the quotient identity",
          "workingLatex": "\\tan\\theta\\equiv\\frac{\\sin\\theta}{\\cos\\theta}",
          "explanation": "By definition the tangent of an angle equals its sine divided by its cosine, so this identity applies directly.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Match the expression to the identity",
          "workingLatex": "\\frac{\\sin\\theta}{\\cos\\theta}\\equiv\\tan\\theta",
          "explanation": "The expression is exactly the right-hand side of the identity, so it can be rewritten as a single function.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the simplified form",
          "workingLatex": "\\frac{\\sin\\theta}{\\cos\\theta}=\\tan\\theta",
          "explanation": "The whole ratio collapses to $\\tan\\theta$, which is the simplest single-function form.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Note where this is valid",
          "workingLatex": "\\cos\\theta\\neq 0",
          "explanation": "The step relies on dividing by $\\cos\\theta$, so it holds only where the cosine is not zero, which is where $\\tan\\theta$ is defined anyway.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check with a value of $\\theta$",
          "workingLatex": "\\theta=45^\\circ:\\; \\frac{\\sin 45^\\circ}{\\cos 45^\\circ}=\\frac{\\tfrac{\\sqrt{2}}{2}}{\\tfrac{\\sqrt{2}}{2}}=1=\\tan 45^\\circ",
          "explanation": "At $\\theta=45^\\circ$ the ratio equals $1$, which matches $\\tan 45^\\circ$, confirming the simplification.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{\\sin\\theta}{\\cos\\theta}=\\tan\\theta$"
    }
  },
  {
    "id": "al.y1.pure.trig-identities.q009",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Identities and equations",
    "subtopicId": "al.y1.pure.trig-identities",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "trig-identities",
      "tan-ratio",
      "simplify"
    ],
    "questionText": "Simplify $\\tan\\theta\\cos\\theta$, writing your answer as a single trigonometric function.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the expression",
          "workingLatex": "\\tan\\theta\\cos\\theta",
          "explanation": "We start with the product and look for a way to rewrite $\\tan\\theta$ so the terms interact.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Replace $\\tan\\theta$ using the quotient identity",
          "workingLatex": "\\tan\\theta=\\frac{\\sin\\theta}{\\cos\\theta}",
          "explanation": "Rewriting $\\tan\\theta$ as sine over cosine exposes a $\\cos\\theta$ that can cancel with the cosine already in the product.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute into the expression",
          "workingLatex": "\\tan\\theta\\cos\\theta=\\frac{\\sin\\theta}{\\cos\\theta}\\times\\cos\\theta",
          "explanation": "We put the rewritten tangent into the product, keeping the multiplying $\\cos\\theta$ on the right.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Cancel the cosine",
          "workingLatex": "\\frac{\\sin\\theta}{\\cos\\theta}\\times\\cos\\theta=\\sin\\theta",
          "explanation": "The $\\cos\\theta$ in the denominator cancels with the multiplying $\\cos\\theta$, leaving just $\\sin\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the simplified form",
          "workingLatex": "\\tan\\theta\\cos\\theta=\\sin\\theta",
          "explanation": "The product reduces to the single term $\\sin\\theta$, valid wherever $\\cos\\theta\\neq 0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check with a value of $\\theta$",
          "workingLatex": "\\theta=30^\\circ:\\; \\tan 30^\\circ\\cos 30^\\circ=\\frac{1}{\\sqrt{3}}\\times\\frac{\\sqrt{3}}{2}=\\frac{1}{2}=\\sin 30^\\circ",
          "explanation": "Testing $\\theta=30^\\circ$ gives $\\tfrac{1}{2}$, which is exactly $\\sin 30^\\circ$, confirming the simplification.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\tan\\theta\\cos\\theta=\\sin\\theta$"
    }
  },
  {
    "id": "al.y1.pure.trig-identities.q010",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Identities and equations",
    "subtopicId": "al.y1.pure.trig-identities",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "trig-identities",
      "pythagorean-identity",
      "tan-ratio"
    ],
    "questionText": "Given that $\\cos\\theta=\\frac{4}{5}$ and $\\theta$ is acute, find the exact value of $\\tan\\theta$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Plan the approach",
          "workingLatex": "\\tan\\theta=\\frac{\\sin\\theta}{\\cos\\theta}",
          "explanation": "To use the tangent identity we need both sine and cosine, so we must find $\\sin\\theta$ first before dividing.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rearrange the Pythagorean identity",
          "workingLatex": "\\sin^2\\theta=1-\\cos^2\\theta",
          "explanation": "The identity $\\sin^2\\theta+\\cos^2\\theta\\equiv 1$ lets us find the sine from the cosine we already know.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Square the given cosine",
          "workingLatex": "\\cos^2\\theta=\\left(\\frac{4}{5}\\right)^2=\\frac{16}{25}",
          "explanation": "We square the fraction top and bottom, since $\\cos^2\\theta$ means $(\\cos\\theta)^2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find $\\sin^2\\theta$",
          "workingLatex": "\\sin^2\\theta=1-\\frac{16}{25}=\\frac{25}{25}-\\frac{16}{25}=\\frac{9}{25}",
          "explanation": "Writing $1$ as $\\frac{25}{25}$ gives a common denominator, so the subtraction leaves $\\frac{9}{25}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Take the square root for $\\sin\\theta$",
          "workingLatex": "\\sin\\theta=\\sqrt{\\frac{9}{25}}=\\frac{3}{5}",
          "explanation": "Since $\\theta$ is acute, sine is positive, so we take the positive root $\\frac{3}{5}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute into the tangent identity",
          "workingLatex": "\\tan\\theta=\\frac{\\;\\frac{3}{5}\\;}{\\;\\frac{4}{5}\\;}=\\frac{3}{5}\\times\\frac{5}{4}",
          "explanation": "Dividing the sine by the cosine, we multiply by the reciprocal of $\\frac{4}{5}$ to make the arithmetic easy.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify to the final value",
          "workingLatex": "\\tan\\theta=\\frac{15}{20}=\\frac{3}{4}",
          "explanation": "The fives cancel, leaving $\\frac{3}{4}$ as the exact value of the tangent.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check the values fit the identity",
          "workingLatex": "\\left(\\frac{3}{5}\\right)^2+\\left(\\frac{4}{5}\\right)^2=\\frac{9}{25}+\\frac{16}{25}=1",
          "explanation": "The sine and cosine satisfy the Pythagorean identity, confirming the sine we found was correct.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\tan\\theta=\\frac{3}{4}$"
    }
  },
  {
    "id": "al.y1.pure.trig-identities.q011",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Identities and equations",
    "subtopicId": "al.y1.pure.trig-identities",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "trig-identities",
      "pythagorean-identity",
      "rearrange"
    ],
    "questionText": "Show that $\\sin^2\\theta+\\cos^2\\theta=1$ rearranges to $\\cos^2\\theta=1-\\sin^2\\theta$, and use this to find the exact value of $\\cos\\theta$ given that $\\sin\\theta=\\frac{7}{25}$ and $\\theta$ is acute.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Start from the Pythagorean identity",
          "workingLatex": "\\sin^2\\theta+\\cos^2\\theta=1",
          "explanation": "This identity holds for every angle and is our starting point for rearranging.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Subtract $\\sin^2\\theta$ from both sides",
          "workingLatex": "\\cos^2\\theta=1-\\sin^2\\theta",
          "explanation": "Removing $\\sin^2\\theta$ from the left leaves $\\cos^2\\theta$ alone, giving the rearranged form we were asked to show.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Note the given sine",
          "workingLatex": "\\sin\\theta=\\frac{7}{25}",
          "explanation": "We now use the rearranged identity with the value provided to find the cosine.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Square the sine",
          "workingLatex": "\\sin^2\\theta=\\left(\\frac{7}{25}\\right)^2=\\frac{49}{625}",
          "explanation": "We square the fraction top and bottom because $\\sin^2\\theta$ means $(\\sin\\theta)^2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute into the rearranged identity",
          "workingLatex": "\\cos^2\\theta=1-\\frac{49}{625}=\\frac{625}{625}-\\frac{49}{625}=\\frac{576}{625}",
          "explanation": "Writing $1$ as $\\frac{625}{625}$ gives a common denominator, so the subtraction yields $\\frac{576}{625}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Take the square root",
          "workingLatex": "\\cos\\theta=\\sqrt{\\frac{576}{625}}=\\frac{24}{25}",
          "explanation": "The roots of $576$ and $625$ are $24$ and $25$, giving the fraction $\\frac{24}{25}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Choose the correct sign",
          "workingLatex": "\\cos\\theta=+\\frac{24}{25}",
          "explanation": "Because $\\theta$ is acute it lies in the first quadrant, where cosine is positive, so we keep the positive root.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check with the identity",
          "workingLatex": "\\left(\\frac{7}{25}\\right)^2+\\left(\\frac{24}{25}\\right)^2=\\frac{49}{625}+\\frac{576}{625}=1",
          "explanation": "The two squares add back to $1$, confirming the cosine value is consistent with the identity.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\cos^2\\theta=1-\\sin^2\\theta$, giving $\\cos\\theta=\\frac{24}{25}$."
    }
  },
  {
    "id": "al.y1.pure.trig-identities.q012",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Identities and equations",
    "subtopicId": "al.y1.pure.trig-identities",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "solutions",
    "tags": [
      "trig-identities",
      "solving-equations",
      "sine"
    ],
    "questionText": "Solve $\\sin\\theta=\\tfrac{\\sqrt3}{2}$ for $0^\\circ\\leq\\theta\\leq360^\\circ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise the exact value",
          "workingLatex": "\\sin\\theta=\\tfrac{\\sqrt3}{2}",
          "explanation": "The right-hand side is one of the standard exact values, so we can find the angle without a calculator.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the principal angle",
          "workingLatex": "\\alpha=\\sin^{-1}\\!\\left(\\tfrac{\\sqrt3}{2}\\right)=60^\\circ",
          "explanation": "Taking the inverse sine gives the first angle, which lies in the first quadrant between $0^\\circ$ and $90^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write down the sine pattern",
          "workingLatex": "\\theta=\\alpha \\quad\\text{or}\\quad \\theta=180^\\circ-\\alpha",
          "explanation": "For a sine equation the second solution in the interval is found by subtracting the principal angle from $180^\\circ$, because sine is symmetric about $90^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the first solution",
          "workingLatex": "\\theta=60^\\circ",
          "explanation": "This is simply the principal angle, which sits inside the required interval.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the second solution",
          "workingLatex": "\\theta=180^\\circ-60^\\circ=120^\\circ",
          "explanation": "Subtracting from $180^\\circ$ gives the matching angle in the second quadrant, where sine is also positive.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check a solution",
          "workingLatex": "\\sin120^\\circ=\\tfrac{\\sqrt3}{2}\\ \\checkmark",
          "explanation": "Substituting $120^\\circ$ back reproduces the original right-hand side, confirming the answer is correct.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta=60^\\circ$ or $\\theta=120^\\circ$"
    }
  },
  {
    "id": "al.y1.pure.trig-identities.q013",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Identities and equations",
    "subtopicId": "al.y1.pure.trig-identities",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "solutions",
    "tags": [
      "trig-identities",
      "solving-equations",
      "cosine"
    ],
    "questionText": "Solve $\\cos\\theta=\\tfrac12$ for $0^\\circ\\leq\\theta\\leq360^\\circ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise the exact value",
          "workingLatex": "\\cos\\theta=\\tfrac12",
          "explanation": "The value $\\tfrac12$ is a standard exact cosine value, so the principal angle is one we already know.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the principal angle",
          "workingLatex": "\\alpha=\\cos^{-1}\\!\\left(\\tfrac12\\right)=60^\\circ",
          "explanation": "The inverse cosine gives the first-quadrant angle whose cosine is $\\tfrac12$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write down the cosine pattern",
          "workingLatex": "\\theta=\\alpha \\quad\\text{or}\\quad \\theta=360^\\circ-\\alpha",
          "explanation": "For a cosine equation the second solution comes from $360^\\circ$ minus the principal angle, since cosine is symmetric about $360^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the first solution",
          "workingLatex": "\\theta=60^\\circ",
          "explanation": "The principal angle itself is the first valid answer in the interval.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the second solution",
          "workingLatex": "\\theta=360^\\circ-60^\\circ=300^\\circ",
          "explanation": "Subtracting from $360^\\circ$ gives the fourth-quadrant angle, where cosine is also positive.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check a solution",
          "workingLatex": "\\cos300^\\circ=\\tfrac12\\ \\checkmark",
          "explanation": "Putting $300^\\circ$ back into the cosine confirms it matches the original equation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta=60^\\circ$ or $\\theta=300^\\circ$"
    }
  },
  {
    "id": "al.y1.pure.trig-identities.q014",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Identities and equations",
    "subtopicId": "al.y1.pure.trig-identities",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "solutions",
    "tags": [
      "trig-identities",
      "solving-equations",
      "tangent"
    ],
    "questionText": "Solve $\\tan\\theta=\\sqrt3$ for $0^\\circ\\leq\\theta\\leq360^\\circ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise the exact value",
          "workingLatex": "\\tan\\theta=\\sqrt3",
          "explanation": "The value $\\sqrt3$ is a standard exact tangent value, so we can identify the principal angle directly.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the principal angle",
          "workingLatex": "\\alpha=\\tan^{-1}\\!\\left(\\sqrt3\\right)=60^\\circ",
          "explanation": "The inverse tangent gives the first-quadrant angle whose tangent is $\\sqrt3$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write down the tangent pattern",
          "workingLatex": "\\theta=\\alpha \\quad\\text{or}\\quad \\theta=\\alpha+180^\\circ",
          "explanation": "Tangent repeats every $180^\\circ$, so the next solution is simply the principal angle plus $180^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the first solution",
          "workingLatex": "\\theta=60^\\circ",
          "explanation": "The principal angle lies inside the interval, so it is our first answer.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the second solution",
          "workingLatex": "\\theta=60^\\circ+180^\\circ=240^\\circ",
          "explanation": "Adding $180^\\circ$ gives the third-quadrant angle, where tangent is again positive.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check a solution",
          "workingLatex": "\\tan240^\\circ=\\sqrt3\\ \\checkmark",
          "explanation": "Substituting $240^\\circ$ back returns $\\sqrt3$, confirming the answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta=60^\\circ$ or $\\theta=240^\\circ$"
    }
  },
  {
    "id": "al.y1.pure.trig-identities.q015",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Identities and equations",
    "subtopicId": "al.y1.pure.trig-identities",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "solutions",
    "tags": [
      "trig-identities",
      "solving-equations",
      "sine"
    ],
    "questionText": "Solve $\\sin\\theta=-\\tfrac12$ for $0^\\circ\\leq\\theta\\leq360^\\circ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Note the sign",
          "workingLatex": "\\sin\\theta=-\\tfrac12",
          "explanation": "The right-hand side is negative, so the solutions lie where sine is below zero, in the third and fourth quadrants.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the reference angle",
          "workingLatex": "\\alpha=\\sin^{-1}\\!\\left(\\tfrac12\\right)=30^\\circ",
          "explanation": "We ignore the sign for a moment and use the size of the value to find the acute reference angle.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "First solution in the third quadrant",
          "workingLatex": "\\theta=180^\\circ+30^\\circ=210^\\circ",
          "explanation": "In the third quadrant we add the reference angle to $180^\\circ$; sine is negative here as required.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Second solution in the fourth quadrant",
          "workingLatex": "\\theta=360^\\circ-30^\\circ=330^\\circ",
          "explanation": "In the fourth quadrant we subtract the reference angle from $360^\\circ$, where sine is also negative.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Collect the solutions",
          "workingLatex": "\\theta=210^\\circ,\\ 330^\\circ",
          "explanation": "Both angles fall inside the required interval and both give a negative sine.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check a solution",
          "workingLatex": "\\sin210^\\circ=-\\tfrac12\\ \\checkmark",
          "explanation": "Substituting $210^\\circ$ back gives $-\\tfrac12$, confirming the working is correct.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta=210^\\circ$ or $\\theta=330^\\circ$"
    }
  },
  {
    "id": "al.y1.pure.trig-identities.q016",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Identities and equations",
    "subtopicId": "al.y1.pure.trig-identities",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "solutions",
    "tags": [
      "trig-identities",
      "solving-equations",
      "cosine"
    ],
    "questionText": "Solve $\\cos\\theta=-\\tfrac{\\sqrt2}{2}$ for $0^\\circ\\leq\\theta\\leq360^\\circ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Note the sign",
          "workingLatex": "\\cos\\theta=-\\tfrac{\\sqrt2}{2}",
          "explanation": "The value is negative, so the solutions lie where cosine is below zero, in the second and third quadrants.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the reference angle",
          "workingLatex": "\\alpha=\\cos^{-1}\\!\\left(\\tfrac{\\sqrt2}{2}\\right)=45^\\circ",
          "explanation": "Using the size of the value gives the acute reference angle of $45^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "First solution in the second quadrant",
          "workingLatex": "\\theta=180^\\circ-45^\\circ=135^\\circ",
          "explanation": "In the second quadrant we subtract the reference angle from $180^\\circ$; cosine is negative here.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Second solution in the third quadrant",
          "workingLatex": "\\theta=180^\\circ+45^\\circ=225^\\circ",
          "explanation": "In the third quadrant we add the reference angle to $180^\\circ$, where cosine is also negative.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Collect the solutions",
          "workingLatex": "\\theta=135^\\circ,\\ 225^\\circ",
          "explanation": "Both angles lie in the interval and both give a negative cosine as required.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check a solution",
          "workingLatex": "\\cos135^\\circ=-\\tfrac{\\sqrt2}{2}\\ \\checkmark",
          "explanation": "Substituting $135^\\circ$ back reproduces the original value, confirming the answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta=135^\\circ$ or $\\theta=225^\\circ$"
    }
  },
  {
    "id": "al.y1.pure.trig-identities.q017",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Identities and equations",
    "subtopicId": "al.y1.pure.trig-identities",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "solutions",
    "tags": [
      "trig-identities",
      "solving-equations",
      "tangent"
    ],
    "questionText": "Solve $\\tan\\theta=-1$ for $0^\\circ\\leq\\theta\\leq360^\\circ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Note the sign",
          "workingLatex": "\\tan\\theta=-1",
          "explanation": "The tangent is negative, so the solutions lie where tangent is below zero, in the second and fourth quadrants.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the reference angle",
          "workingLatex": "\\alpha=\\tan^{-1}(1)=45^\\circ",
          "explanation": "Ignoring the sign, the size $1$ gives the acute reference angle of $45^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "First solution in the second quadrant",
          "workingLatex": "\\theta=180^\\circ-45^\\circ=135^\\circ",
          "explanation": "In the second quadrant we subtract the reference angle from $180^\\circ$; tangent is negative here.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Second solution in the fourth quadrant",
          "workingLatex": "\\theta=360^\\circ-45^\\circ=315^\\circ",
          "explanation": "In the fourth quadrant we subtract the reference angle from $360^\\circ$, where tangent is also negative.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Collect the solutions",
          "workingLatex": "\\theta=135^\\circ,\\ 315^\\circ",
          "explanation": "Both angles lie in the interval and both give a tangent of $-1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check a solution",
          "workingLatex": "\\tan135^\\circ=-1\\ \\checkmark",
          "explanation": "Substituting $135^\\circ$ back gives $-1$, confirming the working.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta=135^\\circ$ or $\\theta=315^\\circ$"
    }
  },
  {
    "id": "al.y1.pure.trig-identities.q018",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Identities and equations",
    "subtopicId": "al.y1.pure.trig-identities",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "solutions",
    "tags": [
      "trig-identities",
      "solving-equations",
      "sine"
    ],
    "questionText": "Solve $2\\sin\\theta=1$ for $0^\\circ\\leq\\theta\\leq360^\\circ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Isolate the sine term",
          "workingLatex": "2\\sin\\theta=1",
          "explanation": "Before solving we need $\\sin\\theta$ on its own, so we deal with the factor of $2$ first.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Divide both sides by 2",
          "workingLatex": "\\sin\\theta=\\tfrac12",
          "explanation": "Dividing by $2$ leaves a simple sine equation with a familiar exact value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the principal angle",
          "workingLatex": "\\alpha=\\sin^{-1}\\!\\left(\\tfrac12\\right)=30^\\circ",
          "explanation": "The inverse sine of $\\tfrac12$ gives the first-quadrant angle $30^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the first solution",
          "workingLatex": "\\theta=30^\\circ",
          "explanation": "The principal angle lies inside the interval, so it is our first answer.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the second solution",
          "workingLatex": "\\theta=180^\\circ-30^\\circ=150^\\circ",
          "explanation": "For sine the second solution is $180^\\circ$ minus the principal angle, giving the second-quadrant answer.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check a solution",
          "workingLatex": "2\\sin150^\\circ=2\\times\\tfrac12=1\\ \\checkmark",
          "explanation": "Substituting $150^\\circ$ into the original equation returns $1$, confirming the answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta=30^\\circ$ or $\\theta=150^\\circ$"
    }
  },
  {
    "id": "al.y1.pure.trig-identities.q019",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Identities and equations",
    "subtopicId": "al.y1.pure.trig-identities",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "solutions",
    "tags": [
      "trig-identities",
      "solving-equations",
      "tangent"
    ],
    "questionText": "Solve $3\\tan\\theta=3$ for $0^\\circ\\leq\\theta\\leq360^\\circ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Isolate the tangent term",
          "workingLatex": "3\\tan\\theta=3",
          "explanation": "We first rearrange so that $\\tan\\theta$ stands alone before finding any angles.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Divide both sides by 3",
          "workingLatex": "\\tan\\theta=1",
          "explanation": "Dividing by $3$ leaves a simple tangent equation with an exact value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the principal angle",
          "workingLatex": "\\alpha=\\tan^{-1}(1)=45^\\circ",
          "explanation": "The inverse tangent of $1$ gives the first-quadrant angle $45^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the first solution",
          "workingLatex": "\\theta=45^\\circ",
          "explanation": "The principal angle sits inside the interval, so it is our first answer.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the second solution",
          "workingLatex": "\\theta=45^\\circ+180^\\circ=225^\\circ",
          "explanation": "Tangent repeats every $180^\\circ$, so adding $180^\\circ$ gives the second solution in the interval.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check a solution",
          "workingLatex": "3\\tan225^\\circ=3\\times1=3\\ \\checkmark",
          "explanation": "Substituting $225^\\circ$ into the original equation returns $3$, confirming the answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta=45^\\circ$ or $\\theta=225^\\circ$"
    }
  },
  {
    "id": "al.y1.pure.trig-identities.q020",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Identities and equations",
    "subtopicId": "al.y1.pure.trig-identities",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "solutions",
    "tags": [
      "trig-identities",
      "solving-equations",
      "cosine"
    ],
    "questionText": "Solve $\\cos\\theta=1$ and $\\cos\\theta=0$ for $0^\\circ\\leq\\theta\\leq360^\\circ$, stating all solutions in the interval.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Start with the first equation",
          "workingLatex": "\\cos\\theta=1",
          "explanation": "These are boundary values, so it helps to picture the cosine graph rather than use a quadrant rule.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Solution at the start of the interval",
          "workingLatex": "\\cos0^\\circ=1 \\ \\Rightarrow\\ \\theta=0^\\circ",
          "explanation": "The cosine curve reaches its maximum value of $1$ at $0^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solution at the end of the interval",
          "workingLatex": "\\cos360^\\circ=1 \\ \\Rightarrow\\ \\theta=360^\\circ",
          "explanation": "After one full turn the cosine returns to $1$ at $360^\\circ$, which is included in the interval.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Now the second equation",
          "workingLatex": "\\cos\\theta=0",
          "explanation": "The cosine graph crosses zero as it changes sign, which happens at the quarter and three-quarter turns.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "First zero",
          "workingLatex": "\\cos90^\\circ=0 \\ \\Rightarrow\\ \\theta=90^\\circ",
          "explanation": "At $90^\\circ$ the cosine curve first touches zero on its way down.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Second zero",
          "workingLatex": "\\cos270^\\circ=0 \\ \\Rightarrow\\ \\theta=270^\\circ",
          "explanation": "At $270^\\circ$ the curve crosses zero again as it rises back up.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Collect all solutions",
          "workingLatex": "\\cos\\theta=1:\\ \\theta=0^\\circ,360^\\circ;\\quad \\cos\\theta=0:\\ \\theta=90^\\circ,270^\\circ",
          "explanation": "Listing the results together gives every solution for both equations within the interval.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\cos\\theta=1$ gives $\\theta=0^\\circ,\\ 360^\\circ$; $\\cos\\theta=0$ gives $\\theta=90^\\circ,\\ 270^\\circ$"
    }
  },
  {
    "id": "al.y1.pure.trig-identities.q021",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Identities and equations",
    "subtopicId": "al.y1.pure.trig-identities",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "solutions",
    "tags": [
      "trig-identities",
      "solving-equations",
      "sine"
    ],
    "questionText": "Solve $\\sin\\theta=0.4$ for $0^\\circ\\leq\\theta\\leq360^\\circ$, giving your answers to $1$ decimal place.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Note this is not a special value",
          "workingLatex": "\\sin\\theta=0.4",
          "explanation": "The value $0.4$ is not one of the exact angles, so we use a calculator and round at the end.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the principal angle",
          "workingLatex": "\\alpha=\\sin^{-1}(0.4)=23.578\\ldots^\\circ",
          "explanation": "The inverse sine gives the first-quadrant angle; we keep extra decimals for now to avoid rounding errors.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Round the first solution",
          "workingLatex": "\\theta=23.6^\\circ",
          "explanation": "Rounding the principal angle to one decimal place gives the first answer.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the second solution",
          "workingLatex": "\\theta=180^\\circ-23.578\\ldots^\\circ=156.421\\ldots^\\circ",
          "explanation": "For sine the second solution is $180^\\circ$ minus the principal angle, using the unrounded value for accuracy.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Round the second solution",
          "workingLatex": "\\theta=156.4^\\circ",
          "explanation": "Rounding this angle to one decimal place gives the second answer.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check a solution",
          "workingLatex": "\\sin156.4^\\circ\\approx0.400\\ \\checkmark",
          "explanation": "Substituting $156.4^\\circ$ back gives approximately $0.4$, confirming the pair of answers.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta=23.6^\\circ$ or $\\theta=156.4^\\circ$ (to $1$ d.p.)"
    }
  },
  {
    "id": "al.y1.pure.trig-identities.q022",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Identities and equations",
    "subtopicId": "al.y1.pure.trig-identities",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "solutions",
    "tags": [
      "trig-identities",
      "solving-equations",
      "cosine"
    ],
    "questionText": "Solve $4\\cos\\theta+1=3$ for $0^\\circ\\leq\\theta\\leq360^\\circ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the equation",
          "workingLatex": "4\\cos\\theta+1=3",
          "explanation": "We first rearrange this into the form $\\cos\\theta=k$ before finding any angles.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Subtract 1 from both sides",
          "workingLatex": "4\\cos\\theta=2",
          "explanation": "Removing the $+1$ moves us a step closer to isolating the cosine term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Divide both sides by 4",
          "workingLatex": "\\cos\\theta=\\tfrac12",
          "explanation": "Dividing by $4$ leaves a simple cosine equation with a familiar exact value.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the principal angle",
          "workingLatex": "\\alpha=\\cos^{-1}\\!\\left(\\tfrac12\\right)=60^\\circ",
          "explanation": "The inverse cosine of $\\tfrac12$ gives the first-quadrant angle $60^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the first solution",
          "workingLatex": "\\theta=60^\\circ",
          "explanation": "The principal angle lies inside the interval, so it is our first answer.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the second solution",
          "workingLatex": "\\theta=360^\\circ-60^\\circ=300^\\circ",
          "explanation": "For cosine the second solution is $360^\\circ$ minus the principal angle, giving the fourth-quadrant answer.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check a solution",
          "workingLatex": "4\\cos300^\\circ+1=4\\times\\tfrac12+1=3\\ \\checkmark",
          "explanation": "Substituting $300^\\circ$ into the original equation returns $3$, confirming the answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta=60^\\circ$ or $\\theta=300^\\circ$"
    }
  },
  {
    "id": "al.y1.pure.trig-identities.q023",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Identities and equations",
    "subtopicId": "al.y1.pure.trig-identities",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "proof",
    "tags": [
      "trig-identities",
      "proof",
      "tan-identity"
    ],
    "questionText": "Prove that $\\tan\\theta\\cos\\theta\\equiv\\sin\\theta$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the identity and choose a side",
          "workingLatex": "\\tan\\theta\\cos\\theta\\equiv\\sin\\theta",
          "explanation": "The left-hand side is the busier one because it contains a tangent, so it is the natural place to begin. The plan is to rewrite it until it matches the simpler right-hand side, $\\sin\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down the LHS",
          "workingLatex": "\\text{LHS}=\\tan\\theta\\cos\\theta",
          "explanation": "Isolating the left-hand side keeps the working tidy, so every change we make is clearly applied to just this expression.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall the tangent identity",
          "workingLatex": "\\tan\\theta\\equiv\\frac{\\sin\\theta}{\\cos\\theta}",
          "explanation": "The only way to connect a tangent to sines and cosines at this level is this definition. Bringing everything into sines and cosines is almost always the key first move in a trig proof.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute for the tangent",
          "workingLatex": "\\text{LHS}=\\frac{\\sin\\theta}{\\cos\\theta}\\times\\cos\\theta",
          "explanation": "Replacing $\\tan\\theta$ with $\\frac{\\sin\\theta}{\\cos\\theta}$ turns the expression into something purely in terms of $\\sin\\theta$ and $\\cos\\theta$, which is easier to handle.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write as a single fraction",
          "workingLatex": "=\\frac{\\sin\\theta\\cos\\theta}{\\cos\\theta}",
          "explanation": "Multiplying the fraction by $\\cos\\theta$ places that factor on top, which makes the shared $\\cos\\theta$ in the numerator and denominator easy to spot.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Note the restriction",
          "workingLatex": "\\cos\\theta\\neq0",
          "explanation": "Cancelling a $\\cos\\theta$ is only valid when it is non-zero, so we record that condition. This keeps the argument honest without changing the result.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Cancel the common factor",
          "workingLatex": "=\\sin\\theta",
          "explanation": "The $\\cos\\theta$ on the top and bottom divide to give $1$, leaving just $\\sin\\theta$. This is exactly the expression we were aiming for.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare with the RHS",
          "workingLatex": "\\sin\\theta=\\text{RHS}",
          "explanation": "The simplified left-hand side is identical to the right-hand side, so the two sides agree for every valid value of $\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Sanity check at a known angle",
          "workingLatex": "\\tan30^\\circ\\cos30^\\circ=\\frac{1}{\\sqrt{3}}\\times\\frac{\\sqrt{3}}{2}=\\frac{1}{2}=\\sin30^\\circ",
          "explanation": "Testing $\\theta=30^\\circ$ gives $\\tfrac{1}{2}$ on both sides, which is a quick confirmation that the manipulation is correct.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Conclude the proof",
          "workingLatex": "\\tan\\theta\\cos\\theta\\equiv\\sin\\theta",
          "explanation": "Starting from the LHS and using only valid steps we reached the RHS, so the identity is established for all $\\theta$ with $\\cos\\theta\\neq0$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Proven: $\\tan\\theta\\cos\\theta\\equiv\\sin\\theta$."
    }
  },
  {
    "id": "al.y1.pure.trig-identities.q024",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Identities and equations",
    "subtopicId": "al.y1.pure.trig-identities",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "proof",
    "tags": [
      "trig-identities",
      "proof",
      "pythagorean-identity"
    ],
    "questionText": "Prove the identity $\\frac{1-\\cos^2\\theta}{\\cos\\theta}\\equiv\\sin\\theta\\tan\\theta$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the identity and choose a side",
          "workingLatex": "\\frac{1-\\cos^2\\theta}{\\cos\\theta}\\equiv\\sin\\theta\\tan\\theta",
          "explanation": "The left-hand side contains the compact combination $1-\\cos^2\\theta$, which the Pythagorean identity can simplify, so starting on the left is the most promising route.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down the LHS",
          "workingLatex": "\\text{LHS}=\\frac{1-\\cos^2\\theta}{\\cos\\theta}",
          "explanation": "We focus on the left-hand side alone and aim to transform it step by step into $\\sin\\theta\\tan\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall the Pythagorean identity",
          "workingLatex": "\\sin^2\\theta+\\cos^2\\theta\\equiv1",
          "explanation": "This is the central identity of the topic. It lets us swap between $1$, $\\sin^2\\theta$ and $\\cos^2\\theta$ whenever it is useful.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rearrange the identity",
          "workingLatex": "1-\\cos^2\\theta=\\sin^2\\theta",
          "explanation": "Subtracting $\\cos^2\\theta$ from both sides shows that the numerator $1-\\cos^2\\theta$ is really just $\\sin^2\\theta$ in disguise.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute into the numerator",
          "workingLatex": "\\text{LHS}=\\frac{\\sin^2\\theta}{\\cos\\theta}",
          "explanation": "Replacing the numerator with $\\sin^2\\theta$ makes the expression look much more like a product of sines and cosines, which is closer to the target.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Split the squared sine",
          "workingLatex": "=\\frac{\\sin\\theta\\cdot\\sin\\theta}{\\cos\\theta}",
          "explanation": "Writing $\\sin^2\\theta$ as $\\sin\\theta\\times\\sin\\theta$ lets us peel off one factor of $\\sin\\theta$, leaving a familiar $\\frac{\\sin\\theta}{\\cos\\theta}$ behind.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Regroup the factors",
          "workingLatex": "=\\sin\\theta\\times\\frac{\\sin\\theta}{\\cos\\theta}",
          "explanation": "Grouping one $\\sin\\theta$ outside the fraction exposes the ratio $\\frac{\\sin\\theta}{\\cos\\theta}$, which we recognise from the tangent definition.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Recall the tangent identity",
          "workingLatex": "\\frac{\\sin\\theta}{\\cos\\theta}\\equiv\\tan\\theta",
          "explanation": "The ratio of sine to cosine is precisely the definition of the tangent, so this bracket collapses neatly into a single term.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Substitute the tangent",
          "workingLatex": "=\\sin\\theta\\tan\\theta",
          "explanation": "Swapping the fraction for $\\tan\\theta$ turns the whole expression into the product $\\sin\\theta\\tan\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Compare with the RHS",
          "workingLatex": "\\sin\\theta\\tan\\theta=\\text{RHS}",
          "explanation": "The transformed left-hand side matches the right-hand side exactly, so the two expressions are equal wherever both are defined.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Conclude the proof",
          "workingLatex": "\\frac{1-\\cos^2\\theta}{\\cos\\theta}\\equiv\\sin\\theta\\tan\\theta",
          "explanation": "Every step used a valid identity or algebraic rewrite, so the identity holds for all $\\theta$ with $\\cos\\theta\\neq0$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Proven: LHS $\\equiv$ RHS."
    }
  },
  {
    "id": "al.y1.pure.trig-identities.q025",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Identities and equations",
    "subtopicId": "al.y1.pure.trig-identities",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "trig-identities",
      "simplify",
      "pythagorean-identity"
    ],
    "questionText": "Show that $(\\sin\\theta+\\cos\\theta)^2$ simplifies to $1+2\\sin\\theta\\cos\\theta$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the expression to simplify",
          "workingLatex": "(\\sin\\theta+\\cos\\theta)^2",
          "explanation": "We begin with the bracket exactly as given. The goal is to expand it and then tidy the result using a trig identity.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the squared-bracket pattern",
          "workingLatex": "(a+b)^2=a^2+2ab+b^2",
          "explanation": "A squared bracket always expands into the first term squared, plus twice the product, plus the second term squared. Naming the pattern first keeps the expansion error-free.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply with a=sin and b=cos",
          "workingLatex": "=\\sin^2\\theta+2\\sin\\theta\\cos\\theta+\\cos^2\\theta",
          "explanation": "Taking $a=\\sin\\theta$ and $b=\\cos\\theta$, the pattern gives the three terms directly. The middle term is twice the product of the two functions.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Group the two square terms",
          "workingLatex": "=(\\sin^2\\theta+\\cos^2\\theta)+2\\sin\\theta\\cos\\theta",
          "explanation": "Placing $\\sin^2\\theta$ and $\\cos^2\\theta$ side by side reveals the Pythagorean combination, which we know simplifies to a single number.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Recall the Pythagorean identity",
          "workingLatex": "\\sin^2\\theta+\\cos^2\\theta\\equiv1",
          "explanation": "This identity is the reason the expression collapses so neatly: the paired squares are always worth exactly $1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute the value 1",
          "workingLatex": "=1+2\\sin\\theta\\cos\\theta",
          "explanation": "Replacing the bracket with $1$ leaves the simplified form. Nothing else can be combined, so this is as tidy as the expression gets.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the simplified result",
          "workingLatex": "(\\sin\\theta+\\cos\\theta)^2=1+2\\sin\\theta\\cos\\theta",
          "explanation": "The original square is equal to $1$ plus twice the product of sine and cosine, which is exactly what we were asked to show.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Sanity check at a known angle",
          "workingLatex": "(\\sin0^\\circ+\\cos0^\\circ)^2=(0+1)^2=1,\\quad 1+2(0)(1)=1",
          "explanation": "Testing $\\theta=0^\\circ$ gives $1$ on both sides, a fast confirmation that the expansion and simplification are correct.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conclude",
          "workingLatex": "(\\sin\\theta+\\cos\\theta)^2\\equiv1+2\\sin\\theta\\cos\\theta",
          "explanation": "Because every step is a valid rewrite, the equality holds for every value of $\\theta$, so the simplification is complete.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(\\sin\\theta+\\cos\\theta)^2\\equiv1+2\\sin\\theta\\cos\\theta$."
    }
  },
  {
    "id": "al.y1.pure.trig-identities.q026",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Identities and equations",
    "subtopicId": "al.y1.pure.trig-identities",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "trig-identities",
      "simplify",
      "pythagorean-identity"
    ],
    "questionText": "Show that $(\\sin\\theta+\\cos\\theta)^2+(\\sin\\theta-\\cos\\theta)^2$ simplifies to $2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the expression to simplify",
          "workingLatex": "(\\sin\\theta+\\cos\\theta)^2+(\\sin\\theta-\\cos\\theta)^2",
          "explanation": "We start with the full sum of two squared brackets. Expanding each bracket separately and then adding is the clearest way forward.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expand the first bracket",
          "workingLatex": "(\\sin\\theta+\\cos\\theta)^2=\\sin^2\\theta+2\\sin\\theta\\cos\\theta+\\cos^2\\theta",
          "explanation": "Using the $(a+b)^2$ pattern, the plus sign gives a positive middle term, twice the product of sine and cosine.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand the second bracket",
          "workingLatex": "(\\sin\\theta-\\cos\\theta)^2=\\sin^2\\theta-2\\sin\\theta\\cos\\theta+\\cos^2\\theta",
          "explanation": "The $(a-b)^2$ pattern is identical except that the middle term now carries a minus sign. This sign difference is what makes the two brackets combine so nicely.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add the two expansions",
          "workingLatex": "=2\\sin^2\\theta+2\\cos^2\\theta+2\\sin\\theta\\cos\\theta-2\\sin\\theta\\cos\\theta",
          "explanation": "Lining the terms up, the squared terms double while the two middle terms are equal and opposite, ready to cancel.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Cancel the cross terms",
          "workingLatex": "=2\\sin^2\\theta+2\\cos^2\\theta",
          "explanation": "The $+2\\sin\\theta\\cos\\theta$ and $-2\\sin\\theta\\cos\\theta$ add to zero, removing the awkward product and leaving only squared terms.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Factor out the common 2",
          "workingLatex": "=2(\\sin^2\\theta+\\cos^2\\theta)",
          "explanation": "Both remaining terms share a factor of $2$. Taking it outside reveals the Pythagorean combination inside the bracket.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Recall the Pythagorean identity",
          "workingLatex": "\\sin^2\\theta+\\cos^2\\theta\\equiv1",
          "explanation": "The bracket is always worth exactly $1$, no matter the angle, which is the key to reaching a constant answer.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute the value 1",
          "workingLatex": "=2\\times1=2",
          "explanation": "Replacing the bracket with $1$ leaves simply $2$. The whole expression is a constant, independent of $\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Sanity check at a known angle",
          "workingLatex": "(\\sin45^\\circ+\\cos45^\\circ)^2+(\\sin45^\\circ-\\cos45^\\circ)^2=(\\sqrt{2})^2+0=2",
          "explanation": "At $\\theta=45^\\circ$ the first bracket squares to $2$ and the second is $0$, giving $2$ overall and confirming the result.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Conclude",
          "workingLatex": "(\\sin\\theta+\\cos\\theta)^2+(\\sin\\theta-\\cos\\theta)^2\\equiv2",
          "explanation": "Every step is a valid rewrite, so the sum equals $2$ for all $\\theta$, which is exactly what we set out to show.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(\\sin\\theta+\\cos\\theta)^2+(\\sin\\theta-\\cos\\theta)^2\\equiv2$."
    }
  },
  {
    "id": "al.y1.pure.trig-identities.q027",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Identities and equations",
    "subtopicId": "al.y1.pure.trig-identities",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "proof",
    "tags": [
      "trig-identities",
      "proof",
      "pythagorean-identity"
    ],
    "questionText": "Prove that $\\sin^2\\theta-\\cos^2\\theta\\equiv1-2\\cos^2\\theta$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the identity and choose a side",
          "workingLatex": "\\sin^2\\theta-\\cos^2\\theta\\equiv1-2\\cos^2\\theta",
          "explanation": "The right-hand side is written entirely in terms of cosine, which hints that we should remove the $\\sin^2\\theta$ from the left. Starting on the left lets us do exactly that.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down the LHS",
          "workingLatex": "\\text{LHS}=\\sin^2\\theta-\\cos^2\\theta",
          "explanation": "We focus on the left-hand side and aim to convert it into an expression involving only cosine.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall the Pythagorean identity",
          "workingLatex": "\\sin^2\\theta+\\cos^2\\theta\\equiv1",
          "explanation": "This identity connects $\\sin^2\\theta$ and $\\cos^2\\theta$, giving us a way to trade one for the other.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rearrange for sin squared",
          "workingLatex": "\\sin^2\\theta=1-\\cos^2\\theta",
          "explanation": "Making $\\sin^2\\theta$ the subject prepares a direct replacement that will clear the sine from the left-hand side.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute for sin squared",
          "workingLatex": "\\text{LHS}=(1-\\cos^2\\theta)-\\cos^2\\theta",
          "explanation": "Swapping $\\sin^2\\theta$ for $1-\\cos^2\\theta$ leaves an expression built only from constants and cosine, which is what the target requires.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Remove the bracket",
          "workingLatex": "=1-\\cos^2\\theta-\\cos^2\\theta",
          "explanation": "Dropping the bracket is safe because it is preceded by a plus, so no signs change. Now the two cosine-squared terms sit together.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Collect like terms",
          "workingLatex": "=1-2\\cos^2\\theta",
          "explanation": "Combining $-\\cos^2\\theta-\\cos^2\\theta$ gives $-2\\cos^2\\theta$, producing the compact form we were aiming for.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare with the RHS",
          "workingLatex": "1-2\\cos^2\\theta=\\text{RHS}",
          "explanation": "The simplified left-hand side is identical to the right-hand side, so the two expressions match.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Sanity check at a known angle",
          "workingLatex": "\\sin^2 60^\\circ-\\cos^2 60^\\circ=\\frac{3}{4}-\\frac{1}{4}=\\frac{1}{2};\\ 1-2\\times\\frac{1}{4}=\\frac{1}{2}",
          "explanation": "Both sides give $\\tfrac{1}{2}$ at $\\theta=60^\\circ$, a reassuring check that the substitution was handled correctly.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Conclude the proof",
          "workingLatex": "\\sin^2\\theta-\\cos^2\\theta\\equiv1-2\\cos^2\\theta",
          "explanation": "Using only the Pythagorean identity and valid algebra we transformed the LHS into the RHS, so the identity holds for all $\\theta$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Proven: LHS $\\equiv$ RHS."
    }
  },
  {
    "id": "al.y1.pure.trig-identities.q028",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Identities and equations",
    "subtopicId": "al.y1.pure.trig-identities",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "proof",
    "tags": [
      "trig-identities",
      "proof",
      "tan-identity"
    ],
    "questionText": "Prove that $\\frac{\\sin\\theta}{\\tan\\theta}\\equiv\\cos\\theta$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the identity and choose a side",
          "workingLatex": "\\frac{\\sin\\theta}{\\tan\\theta}\\equiv\\cos\\theta",
          "explanation": "The left-hand side has a tangent buried in a denominator, so it is the richer side. We start there and simplify towards the plain $\\cos\\theta$ on the right.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down the LHS",
          "workingLatex": "\\text{LHS}=\\frac{\\sin\\theta}{\\tan\\theta}",
          "explanation": "Isolating the left-hand side lets us apply the tangent definition cleanly to just this fraction.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall the tangent identity",
          "workingLatex": "\\tan\\theta\\equiv\\frac{\\sin\\theta}{\\cos\\theta}",
          "explanation": "Rewriting the tangent in terms of sine and cosine is the key, since it turns the problem into a division of two fractions.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute for the tangent",
          "workingLatex": "\\text{LHS}=\\frac{\\sin\\theta}{\\frac{\\sin\\theta}{\\cos\\theta}}",
          "explanation": "Replacing $\\tan\\theta$ with $\\frac{\\sin\\theta}{\\cos\\theta}$ creates a fraction divided by a fraction, which we simplify next.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Divide by multiplying by the reciprocal",
          "workingLatex": "=\\sin\\theta\\times\\frac{\\cos\\theta}{\\sin\\theta}",
          "explanation": "Dividing by a fraction is the same as multiplying by its reciprocal, so we flip $\\frac{\\sin\\theta}{\\cos\\theta}$ to $\\frac{\\cos\\theta}{\\sin\\theta}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write as a single fraction",
          "workingLatex": "=\\frac{\\sin\\theta\\cos\\theta}{\\sin\\theta}",
          "explanation": "Combining into one fraction places the two $\\sin\\theta$ factors clearly on top and bottom, ready to cancel.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Note the restriction",
          "workingLatex": "\\sin\\theta\\neq0",
          "explanation": "Cancelling a $\\sin\\theta$ is only valid when it is non-zero, so we state that condition to keep the argument rigorous.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Cancel the common factor",
          "workingLatex": "=\\cos\\theta",
          "explanation": "The $\\sin\\theta$ on top and bottom divide to $1$, leaving exactly $\\cos\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compare with the RHS",
          "workingLatex": "\\cos\\theta=\\text{RHS}",
          "explanation": "The simplified left-hand side matches the right-hand side, so the two are equal wherever both are defined.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Sanity check at a known angle",
          "workingLatex": "\\frac{\\sin60^\\circ}{\\tan60^\\circ}=\\frac{\\frac{\\sqrt{3}}{2}}{\\sqrt{3}}=\\frac{1}{2}=\\cos60^\\circ",
          "explanation": "At $\\theta=60^\\circ$ both sides give $\\tfrac{1}{2}$, confirming the working is sound.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Conclude the proof",
          "workingLatex": "\\frac{\\sin\\theta}{\\tan\\theta}\\equiv\\cos\\theta",
          "explanation": "Each step used a valid identity or algebraic rule, so the identity holds for all $\\theta$ where $\\sin\\theta\\neq0$ and $\\cos\\theta\\neq0$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Proven: $\\frac{\\sin\\theta}{\\tan\\theta}\\equiv\\cos\\theta$."
    }
  },
  {
    "id": "al.y1.pure.trig-identities.q029",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Identities and equations",
    "subtopicId": "al.y1.pure.trig-identities",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "proof",
    "tags": [
      "trig-identities",
      "proof",
      "difference-of-squares"
    ],
    "questionText": "Prove that $\\sin^4\\theta-\\cos^4\\theta\\equiv\\sin^2\\theta-\\cos^2\\theta$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the identity and choose a side",
          "workingLatex": "\\sin^4\\theta-\\cos^4\\theta\\equiv\\sin^2\\theta-\\cos^2\\theta",
          "explanation": "The left-hand side has fourth powers, which look like a difference of two squares. Starting there gives us a clear factorising route down to the second powers on the right.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down the LHS",
          "workingLatex": "\\text{LHS}=\\sin^4\\theta-\\cos^4\\theta",
          "explanation": "We isolate the left-hand side so the factorising work is applied to just this expression.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "See the fourth powers as squares",
          "workingLatex": "\\sin^4\\theta=(\\sin^2\\theta)^2,\\quad\\cos^4\\theta=(\\cos^2\\theta)^2",
          "explanation": "Recognising each fourth power as the square of a squared term reveals the difference-of-two-squares structure hiding in the expression.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply difference of two squares",
          "workingLatex": "=(\\sin^2\\theta-\\cos^2\\theta)(\\sin^2\\theta+\\cos^2\\theta)",
          "explanation": "Using $a^2-b^2=(a-b)(a+b)$ with $a=\\sin^2\\theta$ and $b=\\cos^2\\theta$ factors the expression into two brackets, one of which we can simplify.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Recall the Pythagorean identity",
          "workingLatex": "\\sin^2\\theta+\\cos^2\\theta\\equiv1",
          "explanation": "The second bracket is exactly the Pythagorean sum, which is always equal to $1$. This is what makes the factorisation collapse.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute the value 1",
          "workingLatex": "=(\\sin^2\\theta-\\cos^2\\theta)\\times1",
          "explanation": "Replacing the second bracket with $1$ removes it as a real factor, since multiplying by $1$ changes nothing.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify",
          "workingLatex": "=\\sin^2\\theta-\\cos^2\\theta",
          "explanation": "Only the first bracket remains, giving the tidy second-power expression we were aiming for.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare with the RHS",
          "workingLatex": "\\sin^2\\theta-\\cos^2\\theta=\\text{RHS}",
          "explanation": "The simplified left-hand side is identical to the right-hand side, so the two agree.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Sanity check at a known angle",
          "workingLatex": "\\sin^4 30^\\circ-\\cos^4 30^\\circ=\\frac{1}{16}-\\frac{9}{16}=-\\frac{1}{2};\\ \\sin^2 30^\\circ-\\cos^2 30^\\circ=\\frac{1}{4}-\\frac{3}{4}=-\\frac{1}{2}",
          "explanation": "Both sides give $-\\tfrac{1}{2}$ at $\\theta=30^\\circ$, confirming the factorisation and cancellation are correct.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Conclude the proof",
          "workingLatex": "\\sin^4\\theta-\\cos^4\\theta\\equiv\\sin^2\\theta-\\cos^2\\theta",
          "explanation": "Factorising and using the Pythagorean identity took the LHS to the RHS with only valid steps, so the identity holds for all $\\theta$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Proven: LHS $\\equiv$ RHS."
    }
  },
  {
    "id": "al.y1.pure.trig-identities.q030",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Identities and equations",
    "subtopicId": "al.y1.pure.trig-identities",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "proof",
    "tags": [
      "trig-identities",
      "proof",
      "pythagorean-identity"
    ],
    "questionText": "Prove that $\\cos^2\\theta-\\sin^2\\theta+1\\equiv2\\cos^2\\theta$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the identity and choose a side",
          "workingLatex": "\\cos^2\\theta-\\sin^2\\theta+1\\equiv2\\cos^2\\theta",
          "explanation": "The right-hand side is purely in cosine, so the plan is to remove the $\\sin^2\\theta$ from the left. Beginning on the left makes that straightforward.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down the LHS",
          "workingLatex": "\\text{LHS}=\\cos^2\\theta-\\sin^2\\theta+1",
          "explanation": "We focus on the left-hand side and aim to turn it into a single cosine term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall the Pythagorean identity",
          "workingLatex": "\\sin^2\\theta+\\cos^2\\theta\\equiv1",
          "explanation": "This identity lets us express $\\sin^2\\theta$ in terms of $\\cos^2\\theta$, which is exactly what we need to clear the sine.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rearrange for sin squared",
          "workingLatex": "\\sin^2\\theta=1-\\cos^2\\theta",
          "explanation": "Making $\\sin^2\\theta$ the subject gives a ready replacement for the sine term on the left-hand side.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute for sin squared",
          "workingLatex": "\\text{LHS}=\\cos^2\\theta-(1-\\cos^2\\theta)+1",
          "explanation": "Swapping $\\sin^2\\theta$ for $1-\\cos^2\\theta$ leaves an expression in cosine only. The bracket must be kept carefully because of the minus sign in front.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Expand the bracket",
          "workingLatex": "=\\cos^2\\theta-1+\\cos^2\\theta+1",
          "explanation": "The minus sign flips both terms inside the bracket, turning $-(1-\\cos^2\\theta)$ into $-1+\\cos^2\\theta$. Careful sign handling here is essential.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Collect like terms",
          "workingLatex": "=2\\cos^2\\theta",
          "explanation": "The $-1$ and $+1$ cancel, while the two $\\cos^2\\theta$ terms add to $2\\cos^2\\theta$, giving the target expression.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare with the RHS",
          "workingLatex": "2\\cos^2\\theta=\\text{RHS}",
          "explanation": "The simplified left-hand side equals the right-hand side, so the two expressions match.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Sanity check at a known angle",
          "workingLatex": "\\cos^2 60^\\circ-\\sin^2 60^\\circ+1=\\frac{1}{4}-\\frac{3}{4}+1=\\frac{1}{2};\\ 2\\cos^2 60^\\circ=2\\times\\frac{1}{4}=\\frac{1}{2}",
          "explanation": "Both sides give $\\tfrac{1}{2}$ at $\\theta=60^\\circ$, confirming the substitution and sign work are correct.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Conclude the proof",
          "workingLatex": "\\cos^2\\theta-\\sin^2\\theta+1\\equiv2\\cos^2\\theta",
          "explanation": "Using the Pythagorean identity and careful algebra we transformed the LHS into the RHS, so the identity holds for all $\\theta$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Proven: LHS $\\equiv$ RHS."
    }
  },
  {
    "id": "al.y1.pure.trig-identities.q031",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Identities and equations",
    "subtopicId": "al.y1.pure.trig-identities",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "proof",
    "tags": [
      "trig-identities",
      "proof",
      "tan-identity"
    ],
    "questionText": "Prove that $\\tan^2\\theta\\cos^2\\theta+\\cos^2\\theta\\equiv1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the identity and choose a side",
          "workingLatex": "\\tan^2\\theta\\cos^2\\theta+\\cos^2\\theta\\equiv1",
          "explanation": "The left-hand side mixes a squared tangent with cosines, so it is the side to simplify. The target is the single number $1$ on the right.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down the LHS",
          "workingLatex": "\\text{LHS}=\\tan^2\\theta\\cos^2\\theta+\\cos^2\\theta",
          "explanation": "We isolate the left-hand side and plan to rewrite the tangent in terms of sine and cosine.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall the tangent identity",
          "workingLatex": "\\tan\\theta\\equiv\\frac{\\sin\\theta}{\\cos\\theta}",
          "explanation": "Converting the tangent into sine over cosine is the standard first move, because it lets the cosine factors interact and cancel.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Square the tangent identity",
          "workingLatex": "\\tan^2\\theta=\\frac{\\sin^2\\theta}{\\cos^2\\theta}",
          "explanation": "Squaring both sides gives $\\tan^2\\theta$ as $\\sin^2\\theta$ over $\\cos^2\\theta$, which is precisely the form the first term needs.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute into the first term",
          "workingLatex": "\\tan^2\\theta\\cos^2\\theta=\\frac{\\sin^2\\theta}{\\cos^2\\theta}\\times\\cos^2\\theta",
          "explanation": "Replacing $\\tan^2\\theta$ in the first term creates a $\\cos^2\\theta$ on top and bottom, which are ready to cancel.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Cancel the cosine squared",
          "workingLatex": "=\\sin^2\\theta",
          "explanation": "The $\\cos^2\\theta$ factors divide to $1$, so the first term simplifies neatly to $\\sin^2\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Rewrite the whole LHS",
          "workingLatex": "\\text{LHS}=\\sin^2\\theta+\\cos^2\\theta",
          "explanation": "Putting the simplified first term back with the untouched $\\cos^2\\theta$ produces the Pythagorean combination.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Recall the Pythagorean identity",
          "workingLatex": "\\sin^2\\theta+\\cos^2\\theta\\equiv1",
          "explanation": "This sum is always exactly $1$, which is precisely the right-hand side we are trying to reach.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Reach the RHS",
          "workingLatex": "\\text{LHS}=1=\\text{RHS}",
          "explanation": "Applying the identity collapses the left-hand side to $1$, matching the right-hand side.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Sanity check at a known angle",
          "workingLatex": "\\tan^2 45^\\circ\\cos^2 45^\\circ+\\cos^2 45^\\circ=1\\times\\frac{1}{2}+\\frac{1}{2}=1",
          "explanation": "At $\\theta=45^\\circ$ the left-hand side evaluates to $1$, confirming the simplification is sound.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Conclude the proof",
          "workingLatex": "\\tan^2\\theta\\cos^2\\theta+\\cos^2\\theta\\equiv1",
          "explanation": "Every step used a valid identity or cancellation, so the identity holds for all $\\theta$ where $\\cos\\theta\\neq0$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Proven: LHS $\\equiv$ RHS."
    }
  },
  {
    "id": "al.y1.pure.trig-identities.q032",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Identities and equations",
    "subtopicId": "al.y1.pure.trig-identities",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "proof",
    "tags": [
      "trig-identities",
      "proof",
      "pythagorean-identity"
    ],
    "questionText": "Prove that $\\frac{1}{1+\\sin\\theta}+\\frac{1}{1-\\sin\\theta}\\equiv\\frac{2}{\\cos^2\\theta}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the identity and choose a side",
          "workingLatex": "\\frac{1}{1+\\sin\\theta}+\\frac{1}{1-\\sin\\theta}\\equiv\\frac{2}{\\cos^2\\theta}",
          "explanation": "The left-hand side is a sum of two fractions, which we can combine over a common denominator. Starting there lets algebra do most of the work.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down the LHS",
          "workingLatex": "\\text{LHS}=\\frac{1}{1+\\sin\\theta}+\\frac{1}{1-\\sin\\theta}",
          "explanation": "We isolate the left-hand side and prepare to add the two fractions together.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Combine over a common denominator",
          "workingLatex": "=\\frac{(1-\\sin\\theta)+(1+\\sin\\theta)}{(1+\\sin\\theta)(1-\\sin\\theta)}",
          "explanation": "The shared denominator is the product of the two brackets. Each numerator is multiplied by the other fraction's denominator, following the standard rule for adding fractions.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the numerator",
          "workingLatex": "(1-\\sin\\theta)+(1+\\sin\\theta)=2",
          "explanation": "The $-\\sin\\theta$ and $+\\sin\\theta$ cancel, leaving simply $2$. The sine disappears from the top entirely.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Expand the denominator",
          "workingLatex": "(1+\\sin\\theta)(1-\\sin\\theta)=1-\\sin^2\\theta",
          "explanation": "This is a difference of two squares, so the product is $1^2-\\sin^2\\theta$. Recognising the pattern avoids a longer expansion.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Rewrite the combined fraction",
          "workingLatex": "\\text{LHS}=\\frac{2}{1-\\sin^2\\theta}",
          "explanation": "Putting the simplified numerator over the simplified denominator gives a single clean fraction, ready for the Pythagorean step.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Recall the Pythagorean identity",
          "workingLatex": "\\sin^2\\theta+\\cos^2\\theta\\equiv1",
          "explanation": "This identity lets us rewrite $1-\\sin^2\\theta$, which is exactly the denominator we now have.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Rearrange the identity",
          "workingLatex": "1-\\sin^2\\theta=\\cos^2\\theta",
          "explanation": "Subtracting $\\sin^2\\theta$ from both sides shows the denominator is really $\\cos^2\\theta$, matching the target's denominator.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Substitute the denominator",
          "workingLatex": "\\text{LHS}=\\frac{2}{\\cos^2\\theta}",
          "explanation": "Replacing $1-\\sin^2\\theta$ with $\\cos^2\\theta$ turns the fraction into the exact form required on the right.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Compare with the RHS",
          "workingLatex": "\\frac{2}{\\cos^2\\theta}=\\text{RHS}",
          "explanation": "The simplified left-hand side now matches the right-hand side, so the two expressions are equal wherever both are defined.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Conclude the proof",
          "workingLatex": "\\frac{1}{1+\\sin\\theta}+\\frac{1}{1-\\sin\\theta}\\equiv\\frac{2}{\\cos^2\\theta}",
          "explanation": "Combining fractions and applying the Pythagorean identity took the LHS to the RHS with only valid steps, so the identity holds for all $\\theta$ with $\\cos\\theta\\neq0$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Proven: LHS $\\equiv$ RHS."
    }
  },
  {
    "id": "al.y1.pure.trig-identities.q033",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Identities and equations",
    "subtopicId": "al.y1.pure.trig-identities",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "solutions",
    "tags": [
      "trig-identities",
      "quadratic",
      "solving-equations"
    ],
    "questionText": "Solve $2\\sin^2\\theta-\\sin\\theta-1=0$ for $0^\\circ\\leq\\theta\\leq360^\\circ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Substitute to reveal a quadratic",
          "workingLatex": "s=\\sin\\theta\\quad\\Rightarrow\\quad 2s^2-s-1=0",
          "explanation": "The whole equation is built from $\\sin\\theta$, so replacing $\\sin\\theta$ with a single letter $s$ shows the hidden structure: it is just an ordinary quadratic in $s$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Factorise the quadratic",
          "workingLatex": "2s^2-s-1=(2s+1)(s-1)=0",
          "explanation": "We look for two brackets that multiply back to $2s^2-s-1$. Expanding $(2s+1)(s-1)$ confirms the split, and a product equals zero only when one of the factors is zero.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Read off the two roots for $s$",
          "workingLatex": "2s+1=0\\Rightarrow s=-\\tfrac{1}{2},\\qquad s-1=0\\Rightarrow s=1",
          "explanation": "Setting each bracket to zero gives the possible values of $s=\\sin\\theta$. These are the candidate values we now test and solve.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check each root is achievable",
          "workingLatex": "\\left|-\\tfrac{1}{2}\\right|\\leq 1,\\qquad |1|\\leq 1",
          "explanation": "Sine can only take values between $-1$ and $1$, so any root with size greater than $1$ would be rejected. Both roots pass this test, so we keep both.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve $\\sin\\theta=1$",
          "workingLatex": "\\sin\\theta=1\\ \\Rightarrow\\ \\theta=90^\\circ",
          "explanation": "Sine reaches its maximum value of $1$ exactly once in the interval, at the top of the unit circle, so this root contributes a single angle.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the reference angle for $\\sin\\theta=-\\tfrac{1}{2}$",
          "workingLatex": "\\sin^{-1}\\tfrac{1}{2}=30^\\circ",
          "explanation": "We first ignore the minus sign and find the acute angle whose sine is $\\tfrac{1}{2}$. This reference angle of $30^\\circ$ then locates the true solutions in the correct quadrants.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Place $\\sin\\theta=-\\tfrac{1}{2}$ in the correct quadrants",
          "workingLatex": "\\theta=180^\\circ+30^\\circ=210^\\circ,\\qquad \\theta=360^\\circ-30^\\circ=330^\\circ",
          "explanation": "Sine is negative in the third and fourth quadrants. Using the reference angle $30^\\circ$ with the symmetry $180+\\alpha$ and $360-\\alpha$ gives both angles.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Collect all solutions",
          "workingLatex": "\\theta=90^\\circ,\\ 210^\\circ,\\ 330^\\circ",
          "explanation": "Gathering the angle from each valid root gives the complete solution set within the interval.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify by substitution",
          "workingLatex": "2(1)^2-1-1=0,\\qquad 2\\left(-\\tfrac{1}{2}\\right)^2-\\left(-\\tfrac{1}{2}\\right)-1=\\tfrac{1}{2}+\\tfrac{1}{2}-1=0",
          "explanation": "Putting $\\sin\\theta=1$ and $\\sin\\theta=-\\tfrac{1}{2}$ back into the original equation gives zero in both cases, confirming every solution is correct.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta = 90^\\circ,\\ 210^\\circ,\\ 330^\\circ$"
    }
  },
  {
    "id": "al.y1.pure.trig-identities.q034",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Identities and equations",
    "subtopicId": "al.y1.pure.trig-identities",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "solutions",
    "tags": [
      "trig-identities",
      "quadratic",
      "solving-equations"
    ],
    "questionText": "Solve $2\\cos^2\\theta+\\cos\\theta=0$ for $0^\\circ\\leq\\theta\\leq360^\\circ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Substitute for clarity",
          "workingLatex": "c=\\cos\\theta\\quad\\Rightarrow\\quad 2c^2+c=0",
          "explanation": "Writing $c=\\cos\\theta$ shows that this is a quadratic in $c$ with no constant term, which points towards taking out a common factor.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Take out the common factor",
          "workingLatex": "c(2c+1)=0",
          "explanation": "Both terms share a factor of $c$, so we factor it out. It is important not to divide by $c$, since doing so would throw away the solutions where $\\cos\\theta=0$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Read off the two roots for $c$",
          "workingLatex": "c=0\\qquad\\text{or}\\qquad 2c+1=0\\Rightarrow c=-\\tfrac{1}{2}",
          "explanation": "A product is zero when either factor is zero, giving two candidate values for $\\cos\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check each root is achievable",
          "workingLatex": "|0|\\leq 1,\\qquad \\left|-\\tfrac{1}{2}\\right|\\leq 1",
          "explanation": "Cosine only takes values between $-1$ and $1$. Both roots lie within this range, so neither is rejected.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve $\\cos\\theta=0$",
          "workingLatex": "\\cos\\theta=0\\ \\Rightarrow\\ \\theta=90^\\circ,\\ 270^\\circ",
          "explanation": "Cosine is zero at the two points where the unit circle crosses the vertical axis, giving these two angles in the interval.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the reference angle for $\\cos\\theta=-\\tfrac{1}{2}$",
          "workingLatex": "\\cos^{-1}\\tfrac{1}{2}=60^\\circ",
          "explanation": "Ignoring the sign, the acute angle whose cosine is $\\tfrac{1}{2}$ is $60^\\circ$. This reference angle guides us to the solutions in the correct quadrants.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Place $\\cos\\theta=-\\tfrac{1}{2}$ in the correct quadrants",
          "workingLatex": "\\theta=180^\\circ-60^\\circ=120^\\circ,\\qquad \\theta=180^\\circ+60^\\circ=240^\\circ",
          "explanation": "Cosine is negative in the second and third quadrants, so we use the symmetry $180-\\alpha$ and $180+\\alpha$ with the reference angle $60^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Collect all solutions",
          "workingLatex": "\\theta=90^\\circ,\\ 120^\\circ,\\ 240^\\circ,\\ 270^\\circ",
          "explanation": "Combining the angles from both valid roots gives the full solution set in the interval.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify by substitution",
          "workingLatex": "2(0)^2+0=0,\\qquad 2\\left(-\\tfrac{1}{2}\\right)^2+\\left(-\\tfrac{1}{2}\\right)=\\tfrac{1}{2}-\\tfrac{1}{2}=0",
          "explanation": "Substituting $\\cos\\theta=0$ and $\\cos\\theta=-\\tfrac{1}{2}$ back into the original equation gives zero each time, confirming all four angles are correct.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta = 90^\\circ,\\ 120^\\circ,\\ 240^\\circ,\\ 270^\\circ$"
    }
  },
  {
    "id": "al.y1.pure.trig-identities.q035",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Identities and equations",
    "subtopicId": "al.y1.pure.trig-identities",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "solutions",
    "tags": [
      "trig-identities",
      "quadratic",
      "solving-equations"
    ],
    "questionText": "Solve $2\\cos^2\\theta-\\cos\\theta-1=0$ for $0^\\circ\\leq\\theta\\leq360^\\circ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Substitute to reveal a quadratic",
          "workingLatex": "c=\\cos\\theta\\quad\\Rightarrow\\quad 2c^2-c-1=0",
          "explanation": "The equation only involves $\\cos\\theta$, so letting $c=\\cos\\theta$ turns it into a standard quadratic in $c$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Factorise the quadratic",
          "workingLatex": "2c^2-c-1=(2c+1)(c-1)=0",
          "explanation": "We split the quadratic into two brackets whose product recreates it. Checking the expansion confirms the factorisation is exact.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Read off the two roots for $c$",
          "workingLatex": "2c+1=0\\Rightarrow c=-\\tfrac{1}{2},\\qquad c-1=0\\Rightarrow c=1",
          "explanation": "Setting each factor to zero gives the two candidate values of $\\cos\\theta$ to solve.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check each root is achievable",
          "workingLatex": "\\left|-\\tfrac{1}{2}\\right|\\leq 1,\\qquad |1|\\leq 1",
          "explanation": "Cosine must lie between $-1$ and $1$. Both roots satisfy this, so neither is rejected.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve $\\cos\\theta=1$",
          "workingLatex": "\\cos\\theta=1\\ \\Rightarrow\\ \\theta=0^\\circ,\\ 360^\\circ",
          "explanation": "Cosine equals $1$ at the start of the circle. Since the interval is closed, both endpoints $0^\\circ$ and $360^\\circ$ count as solutions.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the reference angle for $\\cos\\theta=-\\tfrac{1}{2}$",
          "workingLatex": "\\cos^{-1}\\tfrac{1}{2}=60^\\circ",
          "explanation": "Setting the sign aside, the acute angle with cosine $\\tfrac{1}{2}$ is $60^\\circ$, which we use to locate the true angles.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Place $\\cos\\theta=-\\tfrac{1}{2}$ in the correct quadrants",
          "workingLatex": "\\theta=180^\\circ-60^\\circ=120^\\circ,\\qquad \\theta=180^\\circ+60^\\circ=240^\\circ",
          "explanation": "Cosine is negative in the second and third quadrants, so the symmetry $180-\\alpha$ and $180+\\alpha$ gives both solutions.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Collect all solutions",
          "workingLatex": "\\theta=0^\\circ,\\ 120^\\circ,\\ 240^\\circ,\\ 360^\\circ",
          "explanation": "Gathering the angles from both roots gives the complete solution set in the interval.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify by substitution",
          "workingLatex": "2(1)^2-1-1=0,\\qquad 2\\left(-\\tfrac{1}{2}\\right)^2-\\left(-\\tfrac{1}{2}\\right)-1=\\tfrac{1}{2}+\\tfrac{1}{2}-1=0",
          "explanation": "Both $\\cos\\theta=1$ and $\\cos\\theta=-\\tfrac{1}{2}$ satisfy the original equation, confirming every angle found is correct.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta = 0^\\circ,\\ 120^\\circ,\\ 240^\\circ,\\ 360^\\circ$"
    }
  },
  {
    "id": "al.y1.pure.trig-identities.q036",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Identities and equations",
    "subtopicId": "al.y1.pure.trig-identities",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "solutions",
    "tags": [
      "trig-identities",
      "quadratic",
      "solving-equations"
    ],
    "questionText": "Solve $\\tan^2\\theta=3$ for $0^\\circ\\leq\\theta\\leq360^\\circ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise a squared term",
          "workingLatex": "\\tan^2\\theta=3",
          "explanation": "Because $\\tan\\theta$ appears only as a square, we can undo the squaring directly by taking the square root of both sides.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Take the square root of both sides",
          "workingLatex": "\\tan\\theta=\\pm\\sqrt{3}",
          "explanation": "Taking a square root always produces a positive and a negative option, so both $\\tan\\theta=\\sqrt{3}$ and $\\tan\\theta=-\\sqrt{3}$ must be considered.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Note that no root is rejected",
          "workingLatex": "-\\infty<\\tan\\theta<\\infty",
          "explanation": "Unlike sine and cosine, the tangent function is unbounded and can equal any real number, so neither $\\sqrt{3}$ nor $-\\sqrt{3}$ is out of range.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the reference angle",
          "workingLatex": "\\tan^{-1}\\sqrt{3}=60^\\circ",
          "explanation": "The acute angle whose tangent is $\\sqrt{3}$ is $60^\\circ$. This single reference angle serves both the positive and negative cases.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve $\\tan\\theta=\\sqrt{3}$",
          "workingLatex": "\\theta=60^\\circ,\\qquad \\theta=60^\\circ+180^\\circ=240^\\circ",
          "explanation": "Tangent is positive in the first and third quadrants, and its solutions repeat every $180^\\circ$, so we add $180^\\circ$ to the reference angle.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve $\\tan\\theta=-\\sqrt{3}$",
          "workingLatex": "\\theta=180^\\circ-60^\\circ=120^\\circ,\\qquad \\theta=360^\\circ-60^\\circ=300^\\circ",
          "explanation": "Tangent is negative in the second and fourth quadrants, so we measure the reference angle back from $180^\\circ$ and $360^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Collect all four solutions",
          "workingLatex": "\\theta=60^\\circ,\\ 120^\\circ,\\ 240^\\circ,\\ 300^\\circ",
          "explanation": "Both cases together give four angles evenly spaced around the circle, as expected from a squared tangent equation.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify one angle from each case",
          "workingLatex": "\\tan^2 60^\\circ=(\\sqrt{3})^2=3,\\qquad \\tan^2 120^\\circ=(-\\sqrt{3})^2=3",
          "explanation": "Squaring the tangent of a representative angle from each case returns $3$, confirming the solutions satisfy the original equation.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the final solution set",
          "workingLatex": "\\theta\\in\\{60^\\circ,\\,120^\\circ,\\,240^\\circ,\\,300^\\circ\\}",
          "explanation": "All four angles lie within the interval and satisfy the equation, so this is the complete answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta = 60^\\circ,\\ 120^\\circ,\\ 240^\\circ,\\ 300^\\circ$"
    }
  },
  {
    "id": "al.y1.pure.trig-identities.q037",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Identities and equations",
    "subtopicId": "al.y1.pure.trig-identities",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "solutions",
    "tags": [
      "trig-identities",
      "quadratic",
      "solving-equations"
    ],
    "questionText": "Solve $2\\sin^2\\theta=\\sin\\theta$ for $0^\\circ\\leq\\theta\\leq360^\\circ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Move everything to one side",
          "workingLatex": "2\\sin^2\\theta-\\sin\\theta=0",
          "explanation": "Bringing all terms to one side sets the equation equal to zero, which is exactly the form needed for factorising.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute and factor out the common term",
          "workingLatex": "s=\\sin\\theta\\ \\Rightarrow\\ 2s^2-s=0\\ \\Rightarrow\\ s(2s-1)=0",
          "explanation": "Both terms contain a factor of $s$. We must factor rather than divide by $\\sin\\theta$, because dividing would silently discard the solutions where $\\sin\\theta=0$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Read off the two roots for $s$",
          "workingLatex": "s=0\\qquad\\text{or}\\qquad 2s-1=0\\Rightarrow s=\\tfrac{1}{2}",
          "explanation": "Setting each factor to zero gives the two candidate values of $\\sin\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check each root is achievable",
          "workingLatex": "|0|\\leq 1,\\qquad \\left|\\tfrac{1}{2}\\right|\\leq 1",
          "explanation": "Both roots lie between $-1$ and $1$, so both are valid values of sine and neither is rejected.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve $\\sin\\theta=0$",
          "workingLatex": "\\sin\\theta=0\\ \\Rightarrow\\ \\theta=0^\\circ,\\ 180^\\circ,\\ 360^\\circ",
          "explanation": "Sine is zero where the unit circle meets the horizontal axis, giving these three angles across the closed interval.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the reference angle for $\\sin\\theta=\\tfrac{1}{2}$",
          "workingLatex": "\\sin^{-1}\\tfrac{1}{2}=30^\\circ",
          "explanation": "The acute angle whose sine is $\\tfrac{1}{2}$ is $30^\\circ$, which we use to find all solutions of this root.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Place $\\sin\\theta=\\tfrac{1}{2}$ in the correct quadrants",
          "workingLatex": "\\theta=30^\\circ,\\qquad \\theta=180^\\circ-30^\\circ=150^\\circ",
          "explanation": "Sine is positive in the first and second quadrants, so the solutions are the reference angle and its mirror $180-\\alpha$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Collect all solutions",
          "workingLatex": "\\theta=0^\\circ,\\ 30^\\circ,\\ 150^\\circ,\\ 180^\\circ,\\ 360^\\circ",
          "explanation": "Combining both roots gives five angles in total. Keeping the $\\sin\\theta=0$ solutions is exactly why we avoided dividing earlier.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify by substitution",
          "workingLatex": "2(0)^2=0,\\qquad 2\\left(\\tfrac{1}{2}\\right)^2=\\tfrac{1}{2}=\\sin 30^\\circ",
          "explanation": "For $\\sin\\theta=0$ both sides are zero, and for $\\sin\\theta=\\tfrac{1}{2}$ the left side equals $\\tfrac{1}{2}$, matching the right side, so all solutions check out.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta = 0^\\circ,\\ 30^\\circ,\\ 150^\\circ,\\ 180^\\circ,\\ 360^\\circ$"
    }
  },
  {
    "id": "al.y1.pure.trig-identities.q038",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Identities and equations",
    "subtopicId": "al.y1.pure.trig-identities",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "solutions",
    "tags": [
      "trig-identities",
      "quadratic",
      "solving-equations"
    ],
    "questionText": "Solve $\\sin^2\\theta=\\tfrac{1}{4}$ for $0^\\circ\\leq\\theta\\leq360^\\circ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise a squared term",
          "workingLatex": "\\sin^2\\theta=\\tfrac{1}{4}",
          "explanation": "Since $\\sin\\theta$ appears only as a square, we can take the square root of both sides to undo it directly.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Take the square root of both sides",
          "workingLatex": "\\sin\\theta=\\pm\\sqrt{\\tfrac{1}{4}}=\\pm\\tfrac{1}{2}",
          "explanation": "A square root gives both a positive and a negative value, so we must handle $\\sin\\theta=\\tfrac{1}{2}$ and $\\sin\\theta=-\\tfrac{1}{2}$ separately.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Check both roots are achievable",
          "workingLatex": "\\left|\\tfrac{1}{2}\\right|\\leq 1,\\qquad \\left|-\\tfrac{1}{2}\\right|\\leq 1",
          "explanation": "Sine must stay between $-1$ and $1$; both values pass this test, so neither is rejected.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the reference angle",
          "workingLatex": "\\sin^{-1}\\tfrac{1}{2}=30^\\circ",
          "explanation": "The acute angle with sine $\\tfrac{1}{2}$ is $30^\\circ$. This one reference angle serves both the positive and negative cases.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve $\\sin\\theta=\\tfrac{1}{2}$",
          "workingLatex": "\\theta=30^\\circ,\\qquad \\theta=180^\\circ-30^\\circ=150^\\circ",
          "explanation": "Sine is positive in the first and second quadrants, giving the reference angle and its mirror image $180-\\alpha$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve $\\sin\\theta=-\\tfrac{1}{2}$",
          "workingLatex": "\\theta=180^\\circ+30^\\circ=210^\\circ,\\qquad \\theta=360^\\circ-30^\\circ=330^\\circ",
          "explanation": "Sine is negative in the third and fourth quadrants, so we use the symmetry $180+\\alpha$ and $360-\\alpha$ with the same reference angle.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Collect all four solutions",
          "workingLatex": "\\theta=30^\\circ,\\ 150^\\circ,\\ 210^\\circ,\\ 330^\\circ",
          "explanation": "The two cases together produce four solutions, symmetric about the horizontal axis as expected from a squared sine equation.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify one angle from each case",
          "workingLatex": "\\sin^2 30^\\circ=\\left(\\tfrac{1}{2}\\right)^2=\\tfrac{1}{4},\\qquad \\sin^2 210^\\circ=\\left(-\\tfrac{1}{2}\\right)^2=\\tfrac{1}{4}",
          "explanation": "Squaring the sine of a representative angle from each case returns $\\tfrac{1}{4}$, confirming the solutions are correct.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the final solution set",
          "workingLatex": "\\theta\\in\\{30^\\circ,\\,150^\\circ,\\,210^\\circ,\\,330^\\circ\\}",
          "explanation": "All four angles lie in the interval and satisfy the equation, so this is the complete answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta = 30^\\circ,\\ 150^\\circ,\\ 210^\\circ,\\ 330^\\circ$"
    }
  },
  {
    "id": "al.y1.pure.trig-identities.q039",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Identities and equations",
    "subtopicId": "al.y1.pure.trig-identities",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "solutions",
    "tags": [
      "trig-identities",
      "quadratic",
      "solving-equations"
    ],
    "questionText": "Solve $4\\cos^2\\theta=3$ for $0^\\circ\\leq\\theta\\leq360^\\circ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Isolate the squared cosine",
          "workingLatex": "4\\cos^2\\theta=3\\ \\Rightarrow\\ \\cos^2\\theta=\\tfrac{3}{4}",
          "explanation": "Dividing both sides by $4$ leaves $\\cos^2\\theta$ alone, ready for us to undo the square.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Take the square root of both sides",
          "workingLatex": "\\cos\\theta=\\pm\\sqrt{\\tfrac{3}{4}}=\\pm\\tfrac{\\sqrt{3}}{2}",
          "explanation": "Taking the square root produces both a positive and a negative value, so we deal with $\\cos\\theta=\\tfrac{\\sqrt{3}}{2}$ and $\\cos\\theta=-\\tfrac{\\sqrt{3}}{2}$ in turn.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Check both roots are achievable",
          "workingLatex": "\\tfrac{\\sqrt{3}}{2}\\approx 0.866\\leq 1,\\qquad \\left|-\\tfrac{\\sqrt{3}}{2}\\right|\\leq 1",
          "explanation": "Cosine only takes values between $-1$ and $1$. Both roots are within this range, so neither is rejected.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the reference angle",
          "workingLatex": "\\cos^{-1}\\tfrac{\\sqrt{3}}{2}=30^\\circ",
          "explanation": "The acute angle whose cosine is $\\tfrac{\\sqrt{3}}{2}$ is $30^\\circ$, which locates the solutions for both cases.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve $\\cos\\theta=\\tfrac{\\sqrt{3}}{2}$",
          "workingLatex": "\\theta=30^\\circ,\\qquad \\theta=360^\\circ-30^\\circ=330^\\circ",
          "explanation": "Cosine is positive in the first and fourth quadrants, so the solutions are the reference angle and its reflection $360-\\alpha$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve $\\cos\\theta=-\\tfrac{\\sqrt{3}}{2}$",
          "workingLatex": "\\theta=180^\\circ-30^\\circ=150^\\circ,\\qquad \\theta=180^\\circ+30^\\circ=210^\\circ",
          "explanation": "Cosine is negative in the second and third quadrants, so we use the symmetry $180-\\alpha$ and $180+\\alpha$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Collect all four solutions",
          "workingLatex": "\\theta=30^\\circ,\\ 150^\\circ,\\ 210^\\circ,\\ 330^\\circ",
          "explanation": "The two cases together give four angles, symmetric about the vertical axis as expected from a squared cosine equation.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify one angle from each case",
          "workingLatex": "4\\cos^2 30^\\circ=4\\left(\\tfrac{\\sqrt{3}}{2}\\right)^2=4\\cdot\\tfrac{3}{4}=3,\\qquad 4\\cos^2 150^\\circ=4\\left(-\\tfrac{\\sqrt{3}}{2}\\right)^2=3",
          "explanation": "Substituting a representative angle from each case reproduces $3$, confirming the solutions satisfy the original equation.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the final solution set",
          "workingLatex": "\\theta\\in\\{30^\\circ,\\,150^\\circ,\\,210^\\circ,\\,330^\\circ\\}",
          "explanation": "All four angles lie in the interval and check out, so this is the complete answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta = 30^\\circ,\\ 150^\\circ,\\ 210^\\circ,\\ 330^\\circ$"
    }
  },
  {
    "id": "al.y1.pure.trig-identities.q040",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Identities and equations",
    "subtopicId": "al.y1.pure.trig-identities",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "solutions",
    "tags": [
      "trig-identities",
      "quadratic",
      "solving-equations"
    ],
    "questionText": "Solve $2\\sin^2\\theta-3\\sin\\theta+1=0$ for $0^\\circ\\leq\\theta\\leq360^\\circ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Substitute to reveal a quadratic",
          "workingLatex": "s=\\sin\\theta\\quad\\Rightarrow\\quad 2s^2-3s+1=0",
          "explanation": "The equation is built entirely from $\\sin\\theta$, so letting $s=\\sin\\theta$ shows it is a standard quadratic in $s$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Factorise the quadratic",
          "workingLatex": "2s^2-3s+1=(2s-1)(s-1)=0",
          "explanation": "We choose two brackets that multiply back to $2s^2-3s+1$. Expanding to check confirms the split is exact.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Read off the two roots for $s$",
          "workingLatex": "2s-1=0\\Rightarrow s=\\tfrac{1}{2},\\qquad s-1=0\\Rightarrow s=1",
          "explanation": "Setting each factor to zero gives the two candidate values of $\\sin\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check each root is achievable",
          "workingLatex": "\\left|\\tfrac{1}{2}\\right|\\leq 1,\\qquad |1|\\leq 1",
          "explanation": "Sine only takes values between $-1$ and $1$; both roots pass, so neither is rejected.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the reference angle for $\\sin\\theta=\\tfrac{1}{2}$",
          "workingLatex": "\\sin^{-1}\\tfrac{1}{2}=30^\\circ",
          "explanation": "The acute angle with sine $\\tfrac{1}{2}$ is $30^\\circ$, which we use to locate all solutions of this root.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Place $\\sin\\theta=\\tfrac{1}{2}$ in the correct quadrants",
          "workingLatex": "\\theta=30^\\circ,\\qquad \\theta=180^\\circ-30^\\circ=150^\\circ",
          "explanation": "Sine is positive in the first and second quadrants, giving the reference angle and its mirror $180-\\alpha$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve $\\sin\\theta=1$",
          "workingLatex": "\\sin\\theta=1\\ \\Rightarrow\\ \\theta=90^\\circ",
          "explanation": "Sine reaches its maximum of $1$ just once in the interval, so this root gives a single angle.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Collect all solutions",
          "workingLatex": "\\theta=30^\\circ,\\ 90^\\circ,\\ 150^\\circ",
          "explanation": "Combining the angles from both valid roots gives the complete solution set in the interval.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify by substitution",
          "workingLatex": "2\\left(\\tfrac{1}{2}\\right)^2-3\\left(\\tfrac{1}{2}\\right)+1=\\tfrac{1}{2}-\\tfrac{3}{2}+1=0,\\qquad 2(1)^2-3(1)+1=0",
          "explanation": "Both $\\sin\\theta=\\tfrac{1}{2}$ and $\\sin\\theta=1$ make the original equation zero, confirming all three angles are correct.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta = 30^\\circ,\\ 90^\\circ,\\ 150^\\circ$"
    }
  },
  {
    "id": "al.y1.pure.trig-identities.q041",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Identities and equations",
    "subtopicId": "al.y1.pure.trig-identities",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "solutions",
    "tags": [
      "trig-identities",
      "quadratic",
      "solving-equations"
    ],
    "questionText": "Solve $\\tan^2\\theta-\\tan\\theta=0$ for $0^\\circ\\leq\\theta\\leq360^\\circ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Substitute for clarity",
          "workingLatex": "t=\\tan\\theta\\quad\\Rightarrow\\quad t^2-t=0",
          "explanation": "Writing $t=\\tan\\theta$ shows this is a quadratic in $t$ with no constant term, which suggests taking out a common factor.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Factor out the common term",
          "workingLatex": "t(t-1)=0",
          "explanation": "Both terms share a factor of $t$. We factor rather than divide by $\\tan\\theta$, since dividing would lose the solutions where $\\tan\\theta=0$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Read off the two roots for $t$",
          "workingLatex": "t=0\\qquad\\text{or}\\qquad t-1=0\\Rightarrow t=1",
          "explanation": "A product is zero when either factor is zero, giving two candidate values for $\\tan\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Note that no root is rejected",
          "workingLatex": "-\\infty<\\tan\\theta<\\infty",
          "explanation": "Tangent can equal any real number, so both $0$ and $1$ are perfectly valid values and neither is discarded.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve $\\tan\\theta=0$",
          "workingLatex": "\\tan\\theta=0\\ \\Rightarrow\\ \\theta=0^\\circ,\\ 180^\\circ,\\ 360^\\circ",
          "explanation": "Tangent is zero wherever sine is zero, which happens along the horizontal axis, giving these three angles across the closed interval.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the reference angle for $\\tan\\theta=1$",
          "workingLatex": "\\tan^{-1}1=45^\\circ",
          "explanation": "The acute angle whose tangent is $1$ is $45^\\circ$, which we use to find all solutions of this root.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Place $\\tan\\theta=1$ using the tangent period",
          "workingLatex": "\\theta=45^\\circ,\\qquad \\theta=45^\\circ+180^\\circ=225^\\circ",
          "explanation": "Tangent is positive in the first and third quadrants and repeats every $180^\\circ$, so we add $180^\\circ$ to the reference angle.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Collect all solutions",
          "workingLatex": "\\theta=0^\\circ,\\ 45^\\circ,\\ 180^\\circ,\\ 225^\\circ,\\ 360^\\circ",
          "explanation": "Combining both roots gives five angles. Keeping the $\\tan\\theta=0$ solutions is precisely why we factored instead of dividing.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify by substitution",
          "workingLatex": "\\tan^2 0^\\circ-\\tan 0^\\circ=0-0=0,\\qquad \\tan^2 45^\\circ-\\tan 45^\\circ=1-1=0",
          "explanation": "Both $\\tan\\theta=0$ and $\\tan\\theta=1$ make the original expression zero, confirming every angle found is correct.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta = 0^\\circ,\\ 45^\\circ,\\ 180^\\circ,\\ 225^\\circ,\\ 360^\\circ$"
    }
  },
  {
    "id": "al.y1.pure.trig-identities.q042",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Identities and equations",
    "subtopicId": "al.y1.pure.trig-identities",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "solutions",
    "tags": [
      "trig-identities",
      "solving-equations",
      "identity"
    ],
    "questionText": "Solve $2\\cos^2\\theta+\\sin\\theta-1=0$ for $0^\\circ\\leq\\theta\\leq360^\\circ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Notice the mixed ratios",
          "workingLatex": "2\\cos^2\\theta+\\sin\\theta-1=0",
          "explanation": "The equation contains both $\\cos^2\\theta$ and $\\sin\\theta$, so it cannot be solved directly. We first rewrite everything in terms of a single ratio.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose the Pythagorean identity",
          "workingLatex": "\\cos^2\\theta=1-\\sin^2\\theta",
          "explanation": "Since $\\sin^2\\theta+\\cos^2\\theta=1$, we can swap $\\cos^2\\theta$ for $1-\\sin^2\\theta$ so that only $\\sin\\theta$ remains.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the identity",
          "workingLatex": "2(1-\\sin^2\\theta)+\\sin\\theta-1=0",
          "explanation": "Replacing $\\cos^2\\theta$ converts the equation into one written entirely in $\\sin\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Expand the bracket",
          "workingLatex": "2-2\\sin^2\\theta+\\sin\\theta-1=0",
          "explanation": "Multiplying out prepares the terms to be collected into standard quadratic form.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Collect the constants",
          "workingLatex": "-2\\sin^2\\theta+\\sin\\theta+1=0",
          "explanation": "Combining $2-1$ leaves a tidy quadratic expression in $\\sin\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Make the leading term positive",
          "workingLatex": "2\\sin^2\\theta-\\sin\\theta-1=0",
          "explanation": "Multiplying through by $-1$ gives a positive $\\sin^2\\theta$ term, which is easier to factorise.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Factorise the quadratic",
          "workingLatex": "(2\\sin\\theta+1)(\\sin\\theta-1)=0",
          "explanation": "Treating $\\sin\\theta$ as the unknown, this factorises exactly like $2x^2-x-1=(2x+1)(x-1)$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Split into two cases",
          "workingLatex": "\\sin\\theta=-\\tfrac12 \\quad\\text{or}\\quad \\sin\\theta=1",
          "explanation": "A product is zero only when one of its factors is zero, giving two simple equations.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solve $\\sin\\theta=-\\tfrac12$",
          "workingLatex": "\\theta=210^\\circ,\\ 330^\\circ",
          "explanation": "Sine is negative in the third and fourth quadrants; with reference angle $30^\\circ$ this gives $180^\\circ+30^\\circ$ and $360^\\circ-30^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Solve $\\sin\\theta=1$",
          "workingLatex": "\\theta=90^\\circ",
          "explanation": "Sine reaches its maximum of $1$ only at $90^\\circ$ within the interval.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Verify a solution",
          "workingLatex": "2\\cos^2 90^\\circ+\\sin 90^\\circ-1=0+1-1=0",
          "explanation": "Substituting a value back gives zero, confirming the solutions satisfy the original equation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta=90^\\circ,\\ 210^\\circ,\\ 330^\\circ$"
    }
  },
  {
    "id": "al.y1.pure.trig-identities.q043",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Identities and equations",
    "subtopicId": "al.y1.pure.trig-identities",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "solutions",
    "tags": [
      "trig-identities",
      "solving-equations",
      "identity"
    ],
    "questionText": "Solve $2\\sin^2\\theta+3\\cos\\theta=0$ for $0^\\circ\\leq\\theta\\leq360^\\circ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Notice the mixed ratios",
          "workingLatex": "2\\sin^2\\theta+3\\cos\\theta=0",
          "explanation": "The equation mixes $\\sin^2\\theta$ with $\\cos\\theta$, so we convert it to a single ratio before solving.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose the Pythagorean identity",
          "workingLatex": "\\sin^2\\theta=1-\\cos^2\\theta",
          "explanation": "Because a lone $\\cos\\theta$ already appears, we replace $\\sin^2\\theta$ so that the whole equation is in $\\cos\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the identity",
          "workingLatex": "2(1-\\cos^2\\theta)+3\\cos\\theta=0",
          "explanation": "Swapping $\\sin^2\\theta$ leaves an equation written only in $\\cos\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Expand the bracket",
          "workingLatex": "2-2\\cos^2\\theta+3\\cos\\theta=0",
          "explanation": "Multiplying out clears the bracket ready for rearranging into quadratic form.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Make the leading term positive",
          "workingLatex": "2\\cos^2\\theta-3\\cos\\theta-2=0",
          "explanation": "Multiplying through by $-1$ and ordering by power gives a standard quadratic in $\\cos\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Factorise the quadratic",
          "workingLatex": "(2\\cos\\theta+1)(\\cos\\theta-2)=0",
          "explanation": "Treating $\\cos\\theta$ as the unknown, this factorises like $2x^2-3x-2=(2x+1)(x-2)$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Split into two cases",
          "workingLatex": "\\cos\\theta=-\\tfrac12 \\quad\\text{or}\\quad \\cos\\theta=2",
          "explanation": "Setting each factor to zero produces two possible values for $\\cos\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Reject the impossible root",
          "workingLatex": "-1\\leq\\cos\\theta\\leq1 \\Rightarrow \\cos\\theta=2 \\text{ rejected}",
          "explanation": "Cosine can never exceed $1$, so $\\cos\\theta=2$ has no solutions and is discarded.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solve $\\cos\\theta=-\\tfrac12$",
          "workingLatex": "\\theta=120^\\circ,\\ 240^\\circ",
          "explanation": "Cosine is negative in the second and third quadrants; with reference angle $60^\\circ$ this gives $180^\\circ-60^\\circ$ and $180^\\circ+60^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Verify a solution",
          "workingLatex": "2\\sin^2 120^\\circ+3\\cos 120^\\circ=2\\cdot\\tfrac34+3\\cdot(-\\tfrac12)=\\tfrac32-\\tfrac32=0",
          "explanation": "Substituting back returns zero, confirming the remaining solutions are correct.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta=120^\\circ,\\ 240^\\circ$"
    }
  },
  {
    "id": "al.y1.pure.trig-identities.q044",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Identities and equations",
    "subtopicId": "al.y1.pure.trig-identities",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "solutions",
    "tags": [
      "trig-identities",
      "solving-equations",
      "identity"
    ],
    "questionText": "Solve $\\sin\\theta=\\cos\\theta$ for $0^\\circ\\leq\\theta\\leq360^\\circ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the equation",
          "workingLatex": "\\sin\\theta=\\cos\\theta",
          "explanation": "We want the angles where the sine and cosine of $\\theta$ are equal, which suggests converting to a tangent equation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Check dividing is safe",
          "workingLatex": "\\text{If } \\cos\\theta=0 \\text{ then } \\sin\\theta=\\pm1\\neq0",
          "explanation": "Where $\\cos\\theta=0$ the equation would require $\\sin\\theta=0$ too, which never happens, so no solutions are lost by dividing by $\\cos\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Divide by $\\cos\\theta$",
          "workingLatex": "\\dfrac{\\sin\\theta}{\\cos\\theta}=1",
          "explanation": "Dividing both sides by $\\cos\\theta$ gathers the two ratios into a single quotient.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Use the tangent identity",
          "workingLatex": "\\tan\\theta=1",
          "explanation": "Since $\\tan\\theta=\\frac{\\sin\\theta}{\\cos\\theta}$, the equation reduces to the simple form $\\tan\\theta=1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the reference angle",
          "workingLatex": "\\tan^{-1}(1)=45^\\circ",
          "explanation": "The acute angle whose tangent is $1$ is $45^\\circ$, giving our base value.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Identify the correct quadrants",
          "workingLatex": "\\tan\\theta>0 \\text{ in quadrants } 1 \\text{ and } 3",
          "explanation": "Tangent is positive in the first and third quadrants, so solutions appear once in each.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "First solution",
          "workingLatex": "\\theta=45^\\circ",
          "explanation": "The reference angle itself lies in the first quadrant and is a valid solution.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Second solution",
          "workingLatex": "\\theta=45^\\circ+180^\\circ=225^\\circ",
          "explanation": "Tangent repeats every $180^\\circ$, so adding $180^\\circ$ gives the third-quadrant solution.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify a solution",
          "workingLatex": "\\sin 225^\\circ=\\cos 225^\\circ=-\\tfrac{\\sqrt2}{2}",
          "explanation": "Both sides equal the same value at $225^\\circ$, confirming the answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta=45^\\circ,\\ 225^\\circ$"
    }
  },
  {
    "id": "al.y1.pure.trig-identities.q045",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Identities and equations",
    "subtopicId": "al.y1.pure.trig-identities",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "solutions",
    "tags": [
      "trig-identities",
      "solving-equations",
      "identity"
    ],
    "questionText": "Solve $3\\sin\\theta=2\\cos\\theta$ for $0^\\circ\\leq\\theta\\leq360^\\circ$, giving your answers to $1$ decimal place.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the equation",
          "workingLatex": "3\\sin\\theta=2\\cos\\theta",
          "explanation": "An equation of the form $a\\sin\\theta=b\\cos\\theta$ is solved by turning it into a tangent equation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Check dividing is safe",
          "workingLatex": "\\text{If } \\cos\\theta=0 \\text{ then } 3\\sin\\theta=0 \\text{ but } \\sin\\theta=\\pm1",
          "explanation": "Where $\\cos\\theta=0$ the equation cannot hold, so dividing by $\\cos\\theta$ loses no solutions.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Divide by $\\cos\\theta$",
          "workingLatex": "3\\dfrac{\\sin\\theta}{\\cos\\theta}=2",
          "explanation": "Dividing both sides by $\\cos\\theta$ introduces the ratio $\\frac{\\sin\\theta}{\\cos\\theta}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Use the tangent identity",
          "workingLatex": "3\\tan\\theta=2",
          "explanation": "Replacing $\\frac{\\sin\\theta}{\\cos\\theta}$ with $\\tan\\theta$ leaves a linear equation in $\\tan\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Isolate $\\tan\\theta$",
          "workingLatex": "\\tan\\theta=\\tfrac23",
          "explanation": "Dividing by $3$ gives a single value of the tangent to work from.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the principal value",
          "workingLatex": "\\theta=\\tan^{-1}\\left(\\tfrac23\\right)=33.7^\\circ",
          "explanation": "The calculator gives the first-quadrant angle whose tangent is $\\tfrac23$, rounded to $1$ decimal place.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Identify the correct quadrants",
          "workingLatex": "\\tan\\theta>0 \\text{ in quadrants } 1 \\text{ and } 3",
          "explanation": "Since the tangent is positive, solutions lie in the first and third quadrants.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Second solution",
          "workingLatex": "\\theta=33.7^\\circ+180^\\circ=213.7^\\circ",
          "explanation": "Tangent has period $180^\\circ$, so adding $180^\\circ$ produces the third-quadrant solution.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify a solution",
          "workingLatex": "\\tan 33.7^\\circ\\approx0.667=\\tfrac23",
          "explanation": "The tangent of the found angle matches $\\tfrac23$, confirming the values are correct.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta=33.7^\\circ,\\ 213.7^\\circ$"
    }
  },
  {
    "id": "al.y1.pure.trig-identities.q046",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Identities and equations",
    "subtopicId": "al.y1.pure.trig-identities",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "solutions",
    "tags": [
      "trig-identities",
      "solving-equations",
      "identity"
    ],
    "questionText": "Solve $2\\sin\\theta\\cos\\theta=\\cos\\theta$ for $0^\\circ\\leq\\theta\\leq360^\\circ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the equation",
          "workingLatex": "2\\sin\\theta\\cos\\theta=\\cos\\theta",
          "explanation": "The same factor $\\cos\\theta$ appears on both sides, which points to factorising rather than dividing.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Move everything to one side",
          "workingLatex": "2\\sin\\theta\\cos\\theta-\\cos\\theta=0",
          "explanation": "We never divide by $\\cos\\theta$, because that could be zero and would throw away valid solutions. Instead we collect the terms on one side.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Factor out $\\cos\\theta$",
          "workingLatex": "\\cos\\theta(2\\sin\\theta-1)=0",
          "explanation": "Both terms share a factor of $\\cos\\theta$, so taking it out gives a product equal to zero.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Split into two branches",
          "workingLatex": "\\cos\\theta=0 \\quad\\text{or}\\quad 2\\sin\\theta-1=0",
          "explanation": "A product is zero when either factor is zero, so we keep both branches to find every solution.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve $\\cos\\theta=0$",
          "workingLatex": "\\theta=90^\\circ,\\ 270^\\circ",
          "explanation": "Cosine is zero at the top and bottom of the unit circle, giving $90^\\circ$ and $270^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Rearrange the second branch",
          "workingLatex": "\\sin\\theta=\\tfrac12",
          "explanation": "Solving $2\\sin\\theta-1=0$ isolates the sine as $\\tfrac12$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve $\\sin\\theta=\\tfrac12$",
          "workingLatex": "\\theta=30^\\circ,\\ 150^\\circ",
          "explanation": "Sine is positive in the first and second quadrants; with reference angle $30^\\circ$ this gives $30^\\circ$ and $180^\\circ-30^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Collect all solutions",
          "workingLatex": "\\theta=30^\\circ,\\ 90^\\circ,\\ 150^\\circ,\\ 270^\\circ",
          "explanation": "Combining both branches gives the full set of angles in the interval.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify a solution",
          "workingLatex": "2\\sin 90^\\circ\\cos 90^\\circ=2(1)(0)=0=\\cos 90^\\circ",
          "explanation": "Substituting $90^\\circ$ makes both sides zero, confirming a solution that dividing would have lost.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta=30^\\circ,\\ 90^\\circ,\\ 150^\\circ,\\ 270^\\circ$"
    }
  },
  {
    "id": "al.y1.pure.trig-identities.q047",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Identities and equations",
    "subtopicId": "al.y1.pure.trig-identities",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "solutions",
    "tags": [
      "trig-identities",
      "solving-equations",
      "identity"
    ],
    "questionText": "Solve $\\tan\\theta=2\\sin\\theta$ for $0^\\circ\\leq\\theta\\leq360^\\circ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the equation",
          "workingLatex": "\\tan\\theta=2\\sin\\theta",
          "explanation": "Mixing $\\tan\\theta$ with $\\sin\\theta$ is easiest to handle by first writing the tangent in terms of sine and cosine.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rewrite the tangent",
          "workingLatex": "\\dfrac{\\sin\\theta}{\\cos\\theta}=2\\sin\\theta",
          "explanation": "Using $\\tan\\theta=\\frac{\\sin\\theta}{\\cos\\theta}$ expresses both sides through sine and cosine only.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Clear the fraction",
          "workingLatex": "\\sin\\theta=2\\sin\\theta\\cos\\theta",
          "explanation": "For $\\tan\\theta$ to be defined we need $\\cos\\theta\\neq0$, so multiplying both sides by $\\cos\\theta$ is valid.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Move everything to one side",
          "workingLatex": "\\sin\\theta-2\\sin\\theta\\cos\\theta=0",
          "explanation": "Bringing all terms to one side prepares the equation for factorising, rather than dividing by $\\sin\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Factor out $\\sin\\theta$",
          "workingLatex": "\\sin\\theta(1-2\\cos\\theta)=0",
          "explanation": "Both terms share $\\sin\\theta$, so factoring it out gives a product equal to zero.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Split into two branches",
          "workingLatex": "\\sin\\theta=0 \\quad\\text{or}\\quad \\cos\\theta=\\tfrac12",
          "explanation": "Each factor set to zero gives a branch; the second rearranges to $\\cos\\theta=\\tfrac12$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve $\\sin\\theta=0$",
          "workingLatex": "\\theta=0^\\circ,\\ 180^\\circ,\\ 360^\\circ",
          "explanation": "Sine is zero on the horizontal axis, giving the endpoints and $180^\\circ$ within the interval.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve $\\cos\\theta=\\tfrac12$",
          "workingLatex": "\\theta=60^\\circ,\\ 300^\\circ",
          "explanation": "Cosine is positive in the first and fourth quadrants; with reference angle $60^\\circ$ this gives $60^\\circ$ and $360^\\circ-60^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Collect all solutions",
          "workingLatex": "\\theta=0^\\circ,\\ 60^\\circ,\\ 180^\\circ,\\ 300^\\circ,\\ 360^\\circ",
          "explanation": "Both branches together give the complete list of valid angles.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Verify a solution",
          "workingLatex": "\\tan 60^\\circ=\\sqrt3,\\quad 2\\sin 60^\\circ=2\\cdot\\tfrac{\\sqrt3}{2}=\\sqrt3",
          "explanation": "Both sides equal $\\sqrt3$ at $60^\\circ$, confirming the branch from $\\cos\\theta=\\tfrac12$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta=0^\\circ,\\ 60^\\circ,\\ 180^\\circ,\\ 300^\\circ,\\ 360^\\circ$"
    }
  },
  {
    "id": "al.y1.pure.trig-identities.q048",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Identities and equations",
    "subtopicId": "al.y1.pure.trig-identities",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "solutions",
    "tags": [
      "trig-identities",
      "solving-equations",
      "identity"
    ],
    "questionText": "Solve $2\\cos^2\\theta=1+\\sin\\theta$ for $0^\\circ\\leq\\theta\\leq360^\\circ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Notice the mixed ratios",
          "workingLatex": "2\\cos^2\\theta=1+\\sin\\theta",
          "explanation": "The equation contains $\\cos^2\\theta$ and $\\sin\\theta$, so we first rewrite it in terms of a single ratio.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose the Pythagorean identity",
          "workingLatex": "\\cos^2\\theta=1-\\sin^2\\theta",
          "explanation": "Since the right-hand side already has $\\sin\\theta$, we replace $\\cos^2\\theta$ so the whole equation is in $\\sin\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the identity",
          "workingLatex": "2(1-\\sin^2\\theta)=1+\\sin\\theta",
          "explanation": "Swapping $\\cos^2\\theta$ produces an equation involving only $\\sin\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Expand the bracket",
          "workingLatex": "2-2\\sin^2\\theta=1+\\sin\\theta",
          "explanation": "Multiplying out clears the bracket so both sides can be combined.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Collect into a quadratic",
          "workingLatex": "2\\sin^2\\theta+\\sin\\theta-1=0",
          "explanation": "Moving every term to one side gives a standard quadratic in $\\sin\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Factorise the quadratic",
          "workingLatex": "(2\\sin\\theta-1)(\\sin\\theta+1)=0",
          "explanation": "Treating $\\sin\\theta$ as the unknown, this factorises like $2x^2+x-1=(2x-1)(x+1)$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Split into two cases",
          "workingLatex": "\\sin\\theta=\\tfrac12 \\quad\\text{or}\\quad \\sin\\theta=-1",
          "explanation": "Setting each factor to zero gives the two values of the sine to solve.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve $\\sin\\theta=\\tfrac12$",
          "workingLatex": "\\theta=30^\\circ,\\ 150^\\circ",
          "explanation": "Sine is positive in the first and second quadrants; with reference angle $30^\\circ$ this gives $30^\\circ$ and $180^\\circ-30^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solve $\\sin\\theta=-1$",
          "workingLatex": "\\theta=270^\\circ",
          "explanation": "Sine reaches its minimum of $-1$ only at $270^\\circ$ in the interval.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Verify a solution",
          "workingLatex": "2\\cos^2 270^\\circ=0,\\quad 1+\\sin 270^\\circ=1-1=0",
          "explanation": "Both sides equal zero at $270^\\circ$, confirming the solution.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta=30^\\circ,\\ 150^\\circ,\\ 270^\\circ$"
    }
  },
  {
    "id": "al.y1.pure.trig-identities.q049",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Identities and equations",
    "subtopicId": "al.y1.pure.trig-identities",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "solutions",
    "tags": [
      "trig-identities",
      "solving-equations",
      "identity"
    ],
    "questionText": "Solve $\\cos^2\\theta-\\sin^2\\theta=\\cos\\theta$ for $0^\\circ\\leq\\theta\\leq360^\\circ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Notice the mixed ratios",
          "workingLatex": "\\cos^2\\theta-\\sin^2\\theta=\\cos\\theta",
          "explanation": "The left side has both $\\cos^2\\theta$ and $\\sin^2\\theta$, so we convert it to a single ratio to match the $\\cos\\theta$ on the right.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose the Pythagorean identity",
          "workingLatex": "\\sin^2\\theta=1-\\cos^2\\theta",
          "explanation": "Replacing $\\sin^2\\theta$ with $1-\\cos^2\\theta$ makes the whole equation depend only on $\\cos\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the identity",
          "workingLatex": "\\cos^2\\theta-(1-\\cos^2\\theta)=\\cos\\theta",
          "explanation": "Swapping $\\sin^2\\theta$ leaves an expression written entirely in $\\cos\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the left side",
          "workingLatex": "2\\cos^2\\theta-1=\\cos\\theta",
          "explanation": "Removing the bracket and combining the $\\cos^2\\theta$ terms tidies the equation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Collect into a quadratic",
          "workingLatex": "2\\cos^2\\theta-\\cos\\theta-1=0",
          "explanation": "Bringing the $\\cos\\theta$ across gives a standard quadratic in $\\cos\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Factorise the quadratic",
          "workingLatex": "(2\\cos\\theta+1)(\\cos\\theta-1)=0",
          "explanation": "Treating $\\cos\\theta$ as the unknown, this factorises like $2x^2-x-1=(2x+1)(x-1)$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Split into two cases",
          "workingLatex": "\\cos\\theta=-\\tfrac12 \\quad\\text{or}\\quad \\cos\\theta=1",
          "explanation": "Setting each factor to zero gives the two values of the cosine to solve.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve $\\cos\\theta=-\\tfrac12$",
          "workingLatex": "\\theta=120^\\circ,\\ 240^\\circ",
          "explanation": "Cosine is negative in the second and third quadrants; with reference angle $60^\\circ$ this gives $180^\\circ-60^\\circ$ and $180^\\circ+60^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solve $\\cos\\theta=1$",
          "workingLatex": "\\theta=0^\\circ,\\ 360^\\circ",
          "explanation": "Cosine equals $1$ at the start and end of the interval, so both endpoints are solutions.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Verify a solution",
          "workingLatex": "\\cos^2 120^\\circ-\\sin^2 120^\\circ=\\tfrac14-\\tfrac34=-\\tfrac12=\\cos 120^\\circ",
          "explanation": "The left and right sides agree at $120^\\circ$, confirming the solution.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta=0^\\circ,\\ 120^\\circ,\\ 240^\\circ,\\ 360^\\circ$"
    }
  },
  {
    "id": "al.y1.pure.trig-identities.q050",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Identities and equations",
    "subtopicId": "al.y1.pure.trig-identities",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "solutions",
    "tags": [
      "trig-identities",
      "solving-equations",
      "identity"
    ],
    "questionText": "Solve $5\\sin^2\\theta+3\\cos\\theta-3=0$ for $0^\\circ\\leq\\theta\\leq360^\\circ$, giving answers to $1$ decimal place where appropriate.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Notice the mixed ratios",
          "workingLatex": "5\\sin^2\\theta+3\\cos\\theta-3=0",
          "explanation": "The equation mixes $\\sin^2\\theta$ with $\\cos\\theta$, so we rewrite it in a single ratio before solving.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose the Pythagorean identity",
          "workingLatex": "\\sin^2\\theta=1-\\cos^2\\theta",
          "explanation": "Because a lone $\\cos\\theta$ appears, replacing $\\sin^2\\theta$ leaves the equation entirely in $\\cos\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the identity",
          "workingLatex": "5(1-\\cos^2\\theta)+3\\cos\\theta-3=0",
          "explanation": "Swapping $\\sin^2\\theta$ produces an equation in $\\cos\\theta$ alone.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Expand the bracket",
          "workingLatex": "5-5\\cos^2\\theta+3\\cos\\theta-3=0",
          "explanation": "Multiplying out clears the bracket ready for collecting terms.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the constants",
          "workingLatex": "-5\\cos^2\\theta+3\\cos\\theta+2=0",
          "explanation": "Combining $5-3$ leaves a compact quadratic expression in $\\cos\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Make the leading term positive",
          "workingLatex": "5\\cos^2\\theta-3\\cos\\theta-2=0",
          "explanation": "Multiplying through by $-1$ gives a positive $\\cos^2\\theta$ term, which is easier to factorise.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Factorise the quadratic",
          "workingLatex": "(5\\cos\\theta+2)(\\cos\\theta-1)=0",
          "explanation": "Treating $\\cos\\theta$ as the unknown, this factorises like $5x^2-3x-2=(5x+2)(x-1)$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Split into two cases",
          "workingLatex": "\\cos\\theta=-\\tfrac25 \\quad\\text{or}\\quad \\cos\\theta=1",
          "explanation": "Setting each factor to zero gives the two values of the cosine to solve.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solve $\\cos\\theta=-\\tfrac25$",
          "workingLatex": "\\theta=113.6^\\circ,\\ 246.4^\\circ",
          "explanation": "The reference angle is $\\cos^{-1}(0.4)=66.4^\\circ$; cosine is negative in quadrants two and three, giving $180^\\circ-66.4^\\circ$ and $180^\\circ+66.4^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Solve $\\cos\\theta=1$",
          "workingLatex": "\\theta=0^\\circ,\\ 360^\\circ",
          "explanation": "Cosine equals $1$ at both ends of the interval, so both endpoints are solutions.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Verify a solution",
          "workingLatex": "5\\sin^2 113.6^\\circ+3\\cos 113.6^\\circ-3\\approx5(0.84)+3(-0.4)-3=0",
          "explanation": "Substituting $113.6^\\circ$ returns approximately zero, confirming the non-trivial solution.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta=0^\\circ,\\ 113.6^\\circ,\\ 246.4^\\circ,\\ 360^\\circ$"
    }
  },
  {
    "id": "al.y1.pure.trig-identities.q051",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Identities and equations",
    "subtopicId": "al.y1.pure.trig-identities",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "solutions",
    "tags": [
      "trig-identities",
      "quadratic-in-cos",
      "pythagorean-identity"
    ],
    "questionText": "Solve $2\\sin^2\\theta - 3\\cos\\theta - 3 = 0$ for $0^\\circ \\leq \\theta \\leq 360^\\circ$. Give all solutions in degrees.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise the structure",
          "workingLatex": "2\\sin^2\\theta - 3\\cos\\theta - 3 = 0",
          "explanation": "The equation mixes $\\sin^2\\theta$ and $\\cos\\theta$. To make progress we want a single trig function, so we will convert the squared sine into cosine and form a quadratic.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the Pythagorean identity",
          "workingLatex": "\\sin^2\\theta = 1 - \\cos^2\\theta",
          "explanation": "Since $\\sin^2\\theta + \\cos^2\\theta = 1$, replacing $\\sin^2\\theta$ removes the sine entirely and leaves everything in terms of cosine.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the identity",
          "workingLatex": "2(1 - \\cos^2\\theta) - 3\\cos\\theta - 3 = 0",
          "explanation": "Swapping in the identity gives an equation involving only $\\cos\\theta$, which we can treat as a quadratic.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Expand the bracket",
          "workingLatex": "2 - 2\\cos^2\\theta - 3\\cos\\theta - 3 = 0",
          "explanation": "Multiplying out prepares the equation for collecting like terms.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Collect constant terms",
          "workingLatex": "-2\\cos^2\\theta - 3\\cos\\theta - 1 = 0",
          "explanation": "Combining $2 - 3$ tidies the equation into standard quadratic shape.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Make the leading coefficient positive",
          "workingLatex": "2\\cos^2\\theta + 3\\cos\\theta + 1 = 0",
          "explanation": "Multiplying every term by $-1$ gives a positive $\\cos^2\\theta$ coefficient, which makes factorising more natural.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Introduce a substitution",
          "workingLatex": "\\text{Let } c = \\cos\\theta: \\quad 2c^2 + 3c + 1 = 0",
          "explanation": "Writing $c = \\cos\\theta$ lets us see clearly that this is an ordinary quadratic in $c$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Factorise the quadratic",
          "workingLatex": "(2c + 1)(c + 1) = 0",
          "explanation": "We seek two numbers multiplying to $2$ and giving the middle term $3$; the split $2c$ and $c$ achieves this.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solve each factor",
          "workingLatex": "c = -\\frac{1}{2} \\quad \\text{or} \\quad c = -1",
          "explanation": "Setting each bracket to zero gives the two possible values of $\\cos\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check the roots lie in range",
          "workingLatex": "-1 \\leq -\\frac{1}{2} \\leq 1, \\qquad -1 \\leq -1 \\leq 1",
          "explanation": "Cosine only ever takes values between $-1$ and $1$. Both roots satisfy this, so neither is rejected here.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Solve cos θ = -1/2",
          "workingLatex": "\\cos\\theta = -\\frac{1}{2}, \\quad \\text{reference angle} = 60^\\circ",
          "explanation": "The related acute angle is $\\cos^{-1}\\tfrac{1}{2} = 60^\\circ$; since the value is negative, $\\theta$ lies in the second and third quadrants.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Write the quadrant solutions",
          "workingLatex": "\\theta = 180^\\circ - 60^\\circ = 120^\\circ, \\quad \\theta = 180^\\circ + 60^\\circ = 240^\\circ",
          "explanation": "Using the reference angle in the second and third quadrants gives both solutions in the interval.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Solve cos θ = -1",
          "workingLatex": "\\cos\\theta = -1 \\; \\Rightarrow \\; \\theta = 180^\\circ",
          "explanation": "Cosine equals $-1$ only at $180^\\circ$ within the given range, giving a single extra solution.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Verify θ = 120°",
          "workingLatex": "2\\left(\\tfrac{3}{4}\\right) - 3\\left(-\\tfrac{1}{2}\\right) - 3 = \\tfrac{3}{2} + \\tfrac{3}{2} - 3 = 0",
          "explanation": "Substituting back confirms the equation holds exactly, so $120^\\circ$ is genuine.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Verify θ = 180°",
          "workingLatex": "2(0) - 3(-1) - 3 = 3 - 3 = 0",
          "explanation": "Since $\\sin 180^\\circ = 0$ and $\\cos 180^\\circ = -1$, the equation is satisfied, confirming $180^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "Collect all solutions",
          "workingLatex": "\\theta = 120^\\circ, \\; 180^\\circ, \\; 240^\\circ",
          "explanation": "Gathering the valid quadrant solutions gives the complete solution set.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta = 120^\\circ,\\ 180^\\circ,\\ 240^\\circ$"
    }
  },
  {
    "id": "al.y1.pure.trig-identities.q052",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Identities and equations",
    "subtopicId": "al.y1.pure.trig-identities",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "solutions",
    "tags": [
      "trig-identities",
      "quadratic-in-cos",
      "pythagorean-identity"
    ],
    "questionText": "Solve $6\\sin^2\\theta + \\cos\\theta - 4 = 0$ for $0^\\circ \\leq \\theta \\leq 360^\\circ$. Give solutions to $1$ decimal place where necessary.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise the structure",
          "workingLatex": "6\\sin^2\\theta + \\cos\\theta - 4 = 0",
          "explanation": "With a squared sine and a plain cosine present, converting to a single function will produce a quadratic we can factorise.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the Pythagorean identity",
          "workingLatex": "\\sin^2\\theta = 1 - \\cos^2\\theta",
          "explanation": "Rearranging $\\sin^2\\theta + \\cos^2\\theta = 1$ lets us eliminate the sine term completely.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the identity",
          "workingLatex": "6(1 - \\cos^2\\theta) + \\cos\\theta - 4 = 0",
          "explanation": "Now every term involves cosine, so the equation becomes a quadratic in $\\cos\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Expand the bracket",
          "workingLatex": "6 - 6\\cos^2\\theta + \\cos\\theta - 4 = 0",
          "explanation": "Distributing the $6$ opens up the equation ready for simplification.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Collect constants",
          "workingLatex": "-6\\cos^2\\theta + \\cos\\theta + 2 = 0",
          "explanation": "Combining $6 - 4 = 2$ leaves a tidy quadratic form.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Make the leading coefficient positive",
          "workingLatex": "6\\cos^2\\theta - \\cos\\theta - 2 = 0",
          "explanation": "Multiplying through by $-1$ gives a positive leading term, which is easier to factorise.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Introduce a substitution",
          "workingLatex": "\\text{Let } c = \\cos\\theta: \\quad 6c^2 - c - 2 = 0",
          "explanation": "Treating $c = \\cos\\theta$ shows the familiar quadratic structure.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Factorise the quadratic",
          "workingLatex": "(3c - 2)(2c + 1) = 0",
          "explanation": "The factors expand to $6c^2 - c - 2$, matching the split of the middle term $-4c + 3c$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solve each factor",
          "workingLatex": "c = \\frac{2}{3} \\quad \\text{or} \\quad c = -\\frac{1}{2}",
          "explanation": "Setting each bracket to zero gives the two candidate values of $\\cos\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check both roots are valid",
          "workingLatex": "-1 \\leq \\tfrac{2}{3} \\leq 1, \\qquad -1 \\leq -\\tfrac{1}{2} \\leq 1",
          "explanation": "Both values lie within the range of cosine, so both give genuine solutions to solve on.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Solve cos θ = 2/3",
          "workingLatex": "\\theta = \\cos^{-1}\\left(\\tfrac{2}{3}\\right) = 48.19^\\circ \\;(\\text{reference angle})",
          "explanation": "The principal value gives the acute reference angle; since $\\tfrac{2}{3}$ is positive, $\\theta$ lies in the first and fourth quadrants.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Write both cos = 2/3 solutions",
          "workingLatex": "\\theta = 48.19^\\circ, \\quad \\theta = 360^\\circ - 48.19^\\circ = 311.81^\\circ",
          "explanation": "The first-quadrant angle and its reflection in the fourth quadrant both satisfy the positive cosine.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Solve cos θ = -1/2",
          "workingLatex": "\\cos\\theta = -\\tfrac{1}{2} \\; \\Rightarrow \\; \\theta = 180^\\circ - 60^\\circ = 120^\\circ, \\; 180^\\circ + 60^\\circ = 240^\\circ",
          "explanation": "With reference angle $60^\\circ$ and a negative cosine, the solutions sit in the second and third quadrants.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Verify θ = 120°",
          "workingLatex": "6\\left(\\tfrac{3}{4}\\right) + \\left(-\\tfrac{1}{2}\\right) - 4 = 4.5 - 0.5 - 4 = 0",
          "explanation": "Substituting back confirms the equation holds, so $120^\\circ$ is correct.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Verify θ = 48.19°",
          "workingLatex": "6(0.5556) + 0.6667 - 4 \\approx 3.333 + 0.667 - 4 = 0",
          "explanation": "Using $\\sin^2\\theta = 1 - (2/3)^2 = 5/9$ shows the left side is zero, confirming the decimal solution.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "Collect all solutions",
          "workingLatex": "\\theta = 48.2^\\circ, \\; 120^\\circ, \\; 240^\\circ, \\; 311.8^\\circ",
          "explanation": "Combining both branches gives all four solutions in the interval, rounded to $1$ decimal place.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta = 48.2^\\circ,\\ 120^\\circ,\\ 240^\\circ,\\ 311.8^\\circ$ (to $1$ d.p.)"
    }
  },
  {
    "id": "al.y1.pure.trig-identities.q053",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Identities and equations",
    "subtopicId": "al.y1.pure.trig-identities",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "solutions",
    "tags": [
      "trig-identities",
      "quadratic-in-sin",
      "pythagorean-identity"
    ],
    "questionText": "Solve $2\\cos^2\\theta + 3\\sin\\theta - 3 = 0$ for $0^\\circ \\leq \\theta \\leq 360^\\circ$. Give all solutions in degrees.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise the structure",
          "workingLatex": "2\\cos^2\\theta + 3\\sin\\theta - 3 = 0",
          "explanation": "The equation contains $\\cos^2\\theta$ and $\\sin\\theta$. Converting the squared cosine into sine produces a quadratic in $\\sin\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the Pythagorean identity",
          "workingLatex": "\\cos^2\\theta = 1 - \\sin^2\\theta",
          "explanation": "Rearranging $\\sin^2\\theta + \\cos^2\\theta = 1$ lets us replace the cosine term with sine.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the identity",
          "workingLatex": "2(1 - \\sin^2\\theta) + 3\\sin\\theta - 3 = 0",
          "explanation": "Every term now involves $\\sin\\theta$, giving a quadratic we can factorise.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Expand the bracket",
          "workingLatex": "2 - 2\\sin^2\\theta + 3\\sin\\theta - 3 = 0",
          "explanation": "Multiplying out prepares the terms for collecting.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Collect constants",
          "workingLatex": "-2\\sin^2\\theta + 3\\sin\\theta - 1 = 0",
          "explanation": "Combining $2 - 3 = -1$ tidies the equation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Make the leading coefficient positive",
          "workingLatex": "2\\sin^2\\theta - 3\\sin\\theta + 1 = 0",
          "explanation": "Multiplying through by $-1$ gives a positive $\\sin^2\\theta$ term for easier factorising.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Introduce a substitution",
          "workingLatex": "\\text{Let } s = \\sin\\theta: \\quad 2s^2 - 3s + 1 = 0",
          "explanation": "Writing $s = \\sin\\theta$ reveals the standard quadratic.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Factorise the quadratic",
          "workingLatex": "(2s - 1)(s - 1) = 0",
          "explanation": "The split $-2s - s$ recreates the middle term $-3s$, so this factorisation is correct.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solve each factor",
          "workingLatex": "s = \\frac{1}{2} \\quad \\text{or} \\quad s = 1",
          "explanation": "Setting each bracket to zero gives the two possible values of $\\sin\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check both roots are valid",
          "workingLatex": "-1 \\leq \\tfrac{1}{2} \\leq 1, \\qquad -1 \\leq 1 \\leq 1",
          "explanation": "Both lie within the range of sine, so both give genuine solutions.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Solve sin θ = 1/2",
          "workingLatex": "\\sin\\theta = \\tfrac{1}{2}, \\; \\text{reference angle} = 30^\\circ \\Rightarrow \\theta = 30^\\circ, \\; 150^\\circ",
          "explanation": "Sine is positive in the first and second quadrants, giving these two angles from the reference angle $30^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Solve sin θ = 1",
          "workingLatex": "\\sin\\theta = 1 \\; \\Rightarrow \\; \\theta = 90^\\circ",
          "explanation": "Sine reaches its maximum of $1$ only at $90^\\circ$ in the interval.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Verify θ = 30°",
          "workingLatex": "2\\left(\\tfrac{3}{4}\\right) + 3\\left(\\tfrac{1}{2}\\right) - 3 = 1.5 + 1.5 - 3 = 0",
          "explanation": "Substituting back confirms the equation holds for $30^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Verify θ = 90°",
          "workingLatex": "2(0) + 3(1) - 3 = 0",
          "explanation": "With $\\cos 90^\\circ = 0$ and $\\sin 90^\\circ = 1$, the equation is satisfied, confirming $90^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Collect all solutions",
          "workingLatex": "\\theta = 30^\\circ, \\; 90^\\circ, \\; 150^\\circ",
          "explanation": "Gathering all valid angles gives the full solution set.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta = 30^\\circ,\\ 90^\\circ,\\ 150^\\circ$"
    }
  },
  {
    "id": "al.y1.pure.trig-identities.q054",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Identities and equations",
    "subtopicId": "al.y1.pure.trig-identities",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "solutions",
    "tags": [
      "trig-identities",
      "double-angle",
      "substitution"
    ],
    "questionText": "Solve $\\sin 2\\theta = \\dfrac{\\sqrt{3}}{2}$ for $0^\\circ \\leq \\theta \\leq 360^\\circ$. Give all solutions in degrees.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise the multiple angle",
          "workingLatex": "\\sin 2\\theta = \\frac{\\sqrt{3}}{2}",
          "explanation": "The angle inside the sine is $2\\theta$, not $\\theta$. The safest method is to substitute for the whole argument and solve over a widened interval.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute for the argument",
          "workingLatex": "\\text{Let } u = 2\\theta",
          "explanation": "Replacing $2\\theta$ with $u$ turns the problem into a standard sine equation in $u$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Widen the interval",
          "workingLatex": "0^\\circ \\leq \\theta \\leq 360^\\circ \\; \\Rightarrow \\; 0^\\circ \\leq u \\leq 720^\\circ",
          "explanation": "Because $u = 2\\theta$, doubling the endpoints stretches the interval to $720^\\circ$. Working in this wider range is what captures every solution.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rewrite the equation",
          "workingLatex": "\\sin u = \\frac{\\sqrt{3}}{2}",
          "explanation": "The equation is now a familiar sine value to solve across two full revolutions.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the reference angle",
          "workingLatex": "\\sin^{-1}\\left(\\frac{\\sqrt{3}}{2}\\right) = 60^\\circ",
          "explanation": "The acute angle whose sine is $\\tfrac{\\sqrt{3}}{2}$ is $60^\\circ$, which anchors all the solutions.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "First-revolution solutions",
          "workingLatex": "u = 60^\\circ, \\quad u = 180^\\circ - 60^\\circ = 120^\\circ",
          "explanation": "Sine is positive in the first and second quadrants, giving these two solutions in the first $360^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Second-revolution solutions",
          "workingLatex": "u = 60^\\circ + 360^\\circ = 420^\\circ, \\quad u = 120^\\circ + 360^\\circ = 480^\\circ",
          "explanation": "Adding a full turn gives the matching solutions in the second revolution, still inside $u \\leq 720^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "List all valid u",
          "workingLatex": "u = 60^\\circ, \\; 120^\\circ, \\; 420^\\circ, \\; 480^\\circ",
          "explanation": "All four values fall within $0^\\circ \\leq u \\leq 720^\\circ$, so none is discarded and no further ones fit.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Convert back to θ",
          "workingLatex": "\\theta = \\frac{u}{2}",
          "explanation": "Since $u = 2\\theta$, halving each $u$ recovers the corresponding $\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Compute each θ",
          "workingLatex": "\\theta = 30^\\circ, \\; 60^\\circ, \\; 210^\\circ, \\; 240^\\circ",
          "explanation": "Halving each of the four $u$ values produces four distinct angles inside the original interval.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Verify θ = 30°",
          "workingLatex": "\\sin(2 \\times 30^\\circ) = \\sin 60^\\circ = \\frac{\\sqrt{3}}{2}",
          "explanation": "Substituting confirms the equation holds, so $30^\\circ$ is a genuine solution.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Verify θ = 210°",
          "workingLatex": "\\sin(2 \\times 210^\\circ) = \\sin 420^\\circ = \\sin 60^\\circ = \\frac{\\sqrt{3}}{2}",
          "explanation": "Reducing $420^\\circ$ by a full turn shows the value is correct, confirming $210^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Collect all solutions",
          "workingLatex": "\\theta = 30^\\circ, \\; 60^\\circ, \\; 210^\\circ, \\; 240^\\circ",
          "explanation": "The widened interval has delivered all four solutions, which is exactly what a double-angle equation over $360^\\circ$ should yield.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta = 30^\\circ,\\ 60^\\circ,\\ 210^\\circ,\\ 240^\\circ$"
    }
  },
  {
    "id": "al.y1.pure.trig-identities.q055",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Identities and equations",
    "subtopicId": "al.y1.pure.trig-identities",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "solutions",
    "tags": [
      "trig-identities",
      "double-angle",
      "substitution"
    ],
    "questionText": "Solve $2\\cos(2\\theta) + 1 = 0$ for $0^\\circ \\leq \\theta \\leq 360^\\circ$. Give all solutions in degrees.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Isolate the cosine term",
          "workingLatex": "2\\cos(2\\theta) + 1 = 0",
          "explanation": "The equation involves $\\cos 2\\theta$. We first make the cosine the subject before dealing with the double angle.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rearrange",
          "workingLatex": "\\cos(2\\theta) = -\\frac{1}{2}",
          "explanation": "Subtracting $1$ and dividing by $2$ leaves a clean value for the cosine of the double angle.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute for the argument",
          "workingLatex": "\\text{Let } u = 2\\theta",
          "explanation": "Replacing $2\\theta$ with $u$ turns this into a standard cosine equation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Widen the interval",
          "workingLatex": "0^\\circ \\leq \\theta \\leq 360^\\circ \\; \\Rightarrow \\; 0^\\circ \\leq u \\leq 720^\\circ",
          "explanation": "Doubling the endpoints because $u = 2\\theta$ gives the wider interval where all solutions live.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rewrite the equation",
          "workingLatex": "\\cos u = -\\frac{1}{2}",
          "explanation": "We now solve this cosine equation across two revolutions.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the reference angle",
          "workingLatex": "\\cos^{-1}\\left(\\frac{1}{2}\\right) = 60^\\circ",
          "explanation": "The acute angle for magnitude $\\tfrac{1}{2}$ is $60^\\circ$; the negative sign then tells us which quadrants to use.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Determine the quadrants",
          "workingLatex": "\\cos u < 0 \\; \\Rightarrow \\; u \\text{ in quadrants II and III}",
          "explanation": "Cosine is negative in the second and third quadrants, so we build solutions from $180^\\circ \\pm 60^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "First-revolution solutions",
          "workingLatex": "u = 180^\\circ - 60^\\circ = 120^\\circ, \\quad u = 180^\\circ + 60^\\circ = 240^\\circ",
          "explanation": "These are the two solutions in the first $360^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Second-revolution solutions",
          "workingLatex": "u = 120^\\circ + 360^\\circ = 480^\\circ, \\quad u = 240^\\circ + 360^\\circ = 600^\\circ",
          "explanation": "Adding a full turn gives the matching solutions in the second revolution, both under $720^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "List all valid u",
          "workingLatex": "u = 120^\\circ, \\; 240^\\circ, \\; 480^\\circ, \\; 600^\\circ",
          "explanation": "All four values fall within $0^\\circ \\leq u \\leq 720^\\circ$, and no others fit.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Convert back to θ",
          "workingLatex": "\\theta = \\frac{u}{2} = 60^\\circ, \\; 120^\\circ, \\; 240^\\circ, \\; 300^\\circ",
          "explanation": "Halving each $u$ value recovers the corresponding $\\theta$ within the original interval.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Verify θ = 60°",
          "workingLatex": "2\\cos(120^\\circ) + 1 = 2\\left(-\\tfrac{1}{2}\\right) + 1 = 0",
          "explanation": "Substituting back confirms $60^\\circ$ satisfies the original equation.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Verify θ = 300°",
          "workingLatex": "2\\cos(600^\\circ) + 1 = 2\\cos(240^\\circ) + 1 = 2\\left(-\\tfrac{1}{2}\\right) + 1 = 0",
          "explanation": "Reducing $600^\\circ$ by a full turn shows the value is $-\\tfrac{1}{2}$, confirming $300^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Collect all solutions",
          "workingLatex": "\\theta = 60^\\circ, \\; 120^\\circ, \\; 240^\\circ, \\; 300^\\circ",
          "explanation": "The four solutions are exactly what a double-angle equation over $360^\\circ$ should produce.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta = 60^\\circ,\\ 120^\\circ,\\ 240^\\circ,\\ 300^\\circ$"
    }
  },
  {
    "id": "al.y1.pure.trig-identities.q056",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Identities and equations",
    "subtopicId": "al.y1.pure.trig-identities",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "solutions",
    "tags": [
      "trig-identities",
      "shifted-argument",
      "tangent"
    ],
    "questionText": "Solve $\\tan(\\theta - 30^\\circ) = 1$ for $0^\\circ \\leq \\theta \\leq 360^\\circ$. Give all solutions in degrees.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise the shifted argument",
          "workingLatex": "\\tan(\\theta - 30^\\circ) = 1",
          "explanation": "The angle inside the tangent is shifted by $30^\\circ$. Substituting for the whole argument keeps the working clean and avoids missed solutions.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute for the argument",
          "workingLatex": "\\text{Let } u = \\theta - 30^\\circ",
          "explanation": "Replacing $\\theta - 30^\\circ$ with $u$ gives a standard tangent equation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Shift the interval",
          "workingLatex": "0^\\circ \\leq \\theta \\leq 360^\\circ \\; \\Rightarrow \\; -30^\\circ \\leq u \\leq 330^\\circ",
          "explanation": "Subtracting $30^\\circ$ from each endpoint shifts the whole interval, and we must find every $u$ inside it.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rewrite the equation",
          "workingLatex": "\\tan u = 1",
          "explanation": "We now solve this tangent equation over the shifted interval.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the reference angle",
          "workingLatex": "\\tan^{-1}(1) = 45^\\circ",
          "explanation": "The principal angle whose tangent is $1$ is $45^\\circ$, our starting solution.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Use the period of tangent",
          "workingLatex": "\\tan u = \\tan(u + 180^\\circ)",
          "explanation": "Tangent repeats every $180^\\circ$, so further solutions are found by adding or subtracting $180^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Principal solution",
          "workingLatex": "u = 45^\\circ",
          "explanation": "This is the first solution, and it lies within $-30^\\circ \\leq u \\leq 330^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Add one period",
          "workingLatex": "u = 45^\\circ + 180^\\circ = 225^\\circ",
          "explanation": "Adding $180^\\circ$ gives a second solution that is still inside the interval.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check for any others",
          "workingLatex": "45^\\circ - 180^\\circ = -135^\\circ \\;(\\text{too small}), \\quad 225^\\circ + 180^\\circ = 405^\\circ \\;(\\text{too large})",
          "explanation": "Stepping outside in either direction leaves the interval, so exactly two solutions exist.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "List valid u",
          "workingLatex": "u = 45^\\circ, \\; 225^\\circ",
          "explanation": "These are the only $u$ values in the shifted interval.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Convert back to θ",
          "workingLatex": "\\theta = u + 30^\\circ",
          "explanation": "Reversing the substitution recovers $\\theta$ from each $u$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Compute each θ",
          "workingLatex": "\\theta = 45^\\circ + 30^\\circ = 75^\\circ, \\quad \\theta = 225^\\circ + 30^\\circ = 255^\\circ",
          "explanation": "Adding $30^\\circ$ back gives the two solutions in the original interval.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Verify θ = 75°",
          "workingLatex": "\\tan(75^\\circ - 30^\\circ) = \\tan 45^\\circ = 1",
          "explanation": "Substituting confirms $75^\\circ$ satisfies the equation.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Verify θ = 255°",
          "workingLatex": "\\tan(255^\\circ - 30^\\circ) = \\tan 225^\\circ = 1",
          "explanation": "Since $\\tan 225^\\circ = \\tan 45^\\circ = 1$, the second solution is confirmed.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Collect all solutions",
          "workingLatex": "\\theta = 75^\\circ, \\; 255^\\circ",
          "explanation": "Both solutions lie in the required range, completing the answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta = 75^\\circ,\\ 255^\\circ$"
    }
  },
  {
    "id": "al.y1.pure.trig-identities.q057",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Identities and equations",
    "subtopicId": "al.y1.pure.trig-identities",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "solutions",
    "tags": [
      "trig-identities",
      "quadratic-in-tan",
      "factorising"
    ],
    "questionText": "Solve $3\\tan^2\\theta - \\tan\\theta - 2 = 0$ for $0^\\circ \\leq \\theta \\leq 360^\\circ$. Give solutions to $1$ decimal place where necessary.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise the quadratic form",
          "workingLatex": "3\\tan^2\\theta - \\tan\\theta - 2 = 0",
          "explanation": "This is a quadratic in $\\tan\\theta$, so we can factorise it to find the possible values of the tangent.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Introduce a substitution",
          "workingLatex": "\\text{Let } t = \\tan\\theta: \\quad 3t^2 - t - 2 = 0",
          "explanation": "Writing $t = \\tan\\theta$ makes the quadratic structure explicit.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Factorise the quadratic",
          "workingLatex": "(3t + 2)(t - 1) = 0",
          "explanation": "The split $-3t + 2t$ recreates the middle term $-t$, so this factorisation is correct.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve each factor",
          "workingLatex": "t = -\\frac{2}{3} \\quad \\text{or} \\quad t = 1",
          "explanation": "Setting each bracket to zero gives the two values of $\\tan\\theta$. Unlike sine and cosine, tangent can take any real value, so neither root is rejected.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve tan θ = 1: reference angle",
          "workingLatex": "\\tan^{-1}(1) = 45^\\circ",
          "explanation": "The principal angle for a tangent of $1$ is $45^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply the tangent period",
          "workingLatex": "\\theta = 45^\\circ, \\quad 45^\\circ + 180^\\circ = 225^\\circ",
          "explanation": "Tangent repeats every $180^\\circ$, so adding one period gives the second solution in range.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve tan θ = -2/3: reference angle",
          "workingLatex": "\\tan^{-1}\\left(\\frac{2}{3}\\right) = 33.69^\\circ",
          "explanation": "The acute reference angle uses the magnitude $\\tfrac{2}{3}$; the negative sign then tells us the quadrants.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Determine the quadrants",
          "workingLatex": "\\tan\\theta < 0 \\; \\Rightarrow \\; \\text{quadrants II and IV}",
          "explanation": "Tangent is negative in the second and fourth quadrants, so we measure the reference angle from $180^\\circ$ and $360^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compute those solutions",
          "workingLatex": "\\theta = 180^\\circ - 33.69^\\circ = 146.31^\\circ, \\quad 360^\\circ - 33.69^\\circ = 326.31^\\circ",
          "explanation": "These are the two angles where the tangent equals $-\\tfrac{2}{3}$ in the interval.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Verify θ = 225°",
          "workingLatex": "3\\tan^2 225^\\circ - \\tan 225^\\circ - 2 = 3(1) - 1 - 2 = 0",
          "explanation": "With $\\tan 225^\\circ = 1$, the equation holds, confirming this solution.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Verify θ = 146.31°",
          "workingLatex": "\\tan 146.31^\\circ \\approx -0.667, \\quad 3(0.667)^2 - (-0.667) - 2 \\approx 1.333 + 0.667 - 2 = 0",
          "explanation": "The tangent is $-\\tfrac{2}{3}$, so substituting gives zero, confirming the decimal solution.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Gather solutions from both branches",
          "workingLatex": "\\theta = 45^\\circ, \\; 146.31^\\circ, \\; 225^\\circ, \\; 326.31^\\circ",
          "explanation": "Combining the two values of $\\tan\\theta$ gives four solutions across the interval.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State rounded solutions",
          "workingLatex": "\\theta = 45^\\circ, \\; 146.3^\\circ, \\; 225^\\circ, \\; 326.3^\\circ",
          "explanation": "Rounding to $1$ decimal place gives the final tidy answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta = 45^\\circ,\\ 146.3^\\circ,\\ 225^\\circ,\\ 326.3^\\circ$ (to $1$ d.p.)"
    }
  },
  {
    "id": "al.y1.pure.trig-identities.q058",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Identities and equations",
    "subtopicId": "al.y1.pure.trig-identities",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "solutions",
    "tags": [
      "trig-identities",
      "double-angle",
      "shifted-argument"
    ],
    "questionText": "Solve $\\sin(2\\theta + 30^\\circ) = \\dfrac{1}{2}$ for $0^\\circ \\leq \\theta \\leq 360^\\circ$. Give all solutions in degrees.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise the combined argument",
          "workingLatex": "\\sin(2\\theta + 30^\\circ) = \\frac{1}{2}",
          "explanation": "The argument both doubles and shifts $\\theta$. Substituting for the whole argument and widening the interval carefully is the reliable way to catch every solution.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute for the argument",
          "workingLatex": "\\text{Let } u = 2\\theta + 30^\\circ",
          "explanation": "Replacing the full argument with $u$ gives a standard sine equation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the u-interval endpoints",
          "workingLatex": "\\theta = 0^\\circ \\Rightarrow u = 30^\\circ, \\qquad \\theta = 360^\\circ \\Rightarrow u = 750^\\circ",
          "explanation": "Substituting the endpoints of the $\\theta$ range into $u = 2\\theta + 30^\\circ$ gives the matching endpoints for $u$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the widened interval",
          "workingLatex": "30^\\circ \\leq u \\leq 750^\\circ",
          "explanation": "This wide interval (just over two full turns) is where we must find every solution before converting back.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rewrite the equation",
          "workingLatex": "\\sin u = \\frac{1}{2}",
          "explanation": "We now solve a familiar sine value across the widened range.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the reference angle",
          "workingLatex": "\\sin^{-1}\\left(\\frac{1}{2}\\right) = 30^\\circ",
          "explanation": "The acute angle whose sine is $\\tfrac{1}{2}$ is $30^\\circ$, anchoring all solutions.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Base solutions in first revolution",
          "workingLatex": "u = 30^\\circ, \\quad u = 180^\\circ - 30^\\circ = 150^\\circ",
          "explanation": "Sine is positive in the first and second quadrants, giving these two base angles.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Add one full turn",
          "workingLatex": "u = 30^\\circ + 360^\\circ = 390^\\circ, \\quad u = 150^\\circ + 360^\\circ = 510^\\circ",
          "explanation": "Adding $360^\\circ$ generates the solutions in the second revolution.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Add a second full turn",
          "workingLatex": "u = 30^\\circ + 720^\\circ = 750^\\circ, \\quad u = 150^\\circ + 720^\\circ = 870^\\circ \\;(\\text{too large})",
          "explanation": "$750^\\circ$ sits exactly on the interval boundary and is kept, while $870^\\circ$ falls outside and is discarded.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "List all valid u",
          "workingLatex": "u = 30^\\circ, \\; 150^\\circ, \\; 390^\\circ, \\; 510^\\circ, \\; 750^\\circ",
          "explanation": "These five values all lie within $30^\\circ \\leq u \\leq 750^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Convert back to θ",
          "workingLatex": "\\theta = \\frac{u - 30^\\circ}{2}",
          "explanation": "Rearranging $u = 2\\theta + 30^\\circ$ makes $\\theta$ the subject.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Compute each θ",
          "workingLatex": "\\theta = 0^\\circ, \\; 60^\\circ, \\; 180^\\circ, \\; 240^\\circ, \\; 360^\\circ",
          "explanation": "Applying the conversion to each $u$ produces five solutions in the original interval.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Verify θ = 0°",
          "workingLatex": "\\sin(2 \\times 0^\\circ + 30^\\circ) = \\sin 30^\\circ = \\frac{1}{2}",
          "explanation": "Substituting the boundary value confirms it is a genuine solution.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Verify θ = 240°",
          "workingLatex": "\\sin(2 \\times 240^\\circ + 30^\\circ) = \\sin 510^\\circ = \\sin 150^\\circ = \\frac{1}{2}",
          "explanation": "Reducing $510^\\circ$ by a full turn shows the value is $\\tfrac{1}{2}$, confirming $240^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Collect all solutions",
          "workingLatex": "\\theta = 0^\\circ, \\; 60^\\circ, \\; 180^\\circ, \\; 240^\\circ, \\; 360^\\circ",
          "explanation": "Careful widening of the interval has captured all five solutions, including both endpoints.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta = 0^\\circ,\\ 60^\\circ,\\ 180^\\circ,\\ 240^\\circ,\\ 360^\\circ$"
    }
  },
  {
    "id": "al.y1.pure.trig-identities.q059",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Identities and equations",
    "subtopicId": "al.y1.pure.trig-identities",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "solutions",
    "tags": [
      "trig-identities",
      "factorising",
      "tangent"
    ],
    "questionText": "Solve $\\tan\\theta = \\sin\\theta$ for $0^\\circ \\leq \\theta \\leq 360^\\circ$. Give all solutions in degrees.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rewrite tangent in terms of sine and cosine",
          "workingLatex": "\\frac{\\sin\\theta}{\\cos\\theta} = \\sin\\theta",
          "explanation": "Expressing $\\tan\\theta$ as $\\tfrac{\\sin\\theta}{\\cos\\theta}$ lets us combine the two sides and factorise, rather than dividing (which risks losing solutions).",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Note the restriction",
          "workingLatex": "\\cos\\theta \\neq 0 \\; \\Rightarrow \\; \\theta \\neq 90^\\circ, \\; 270^\\circ",
          "explanation": "Tangent is undefined where cosine is zero, so any solution at $90^\\circ$ or $270^\\circ$ would have to be excluded.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Multiply through by cos θ",
          "workingLatex": "\\sin\\theta = \\sin\\theta \\cos\\theta",
          "explanation": "Since $\\cos\\theta \\neq 0$ we may multiply both sides by it, clearing the fraction safely.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Move everything to one side",
          "workingLatex": "\\sin\\theta - \\sin\\theta \\cos\\theta = 0",
          "explanation": "Collecting on one side sets up the equation for factorising, which keeps all solutions in view.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Factor out sin θ",
          "workingLatex": "\\sin\\theta\\,(1 - \\cos\\theta) = 0",
          "explanation": "Both terms share a factor of $\\sin\\theta$; taking it out reveals a product equal to zero.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply the zero-product rule",
          "workingLatex": "\\sin\\theta = 0 \\quad \\text{or} \\quad \\cos\\theta = 1",
          "explanation": "A product is zero when either factor is zero, giving two simpler branches to solve.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve branch A: sin θ = 0",
          "workingLatex": "\\theta = 0^\\circ, \\; 180^\\circ, \\; 360^\\circ",
          "explanation": "Sine is zero at these angles across the interval, including both endpoints.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve branch B: cos θ = 1",
          "workingLatex": "\\theta = 0^\\circ, \\; 360^\\circ",
          "explanation": "Cosine reaches its maximum of $1$ only at $0^\\circ$ and $360^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Combine and remove duplicates",
          "workingLatex": "\\theta = 0^\\circ, \\; 180^\\circ, \\; 360^\\circ",
          "explanation": "Branch B repeats the endpoints already found in branch A, so the distinct solutions are these three.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check against the restriction",
          "workingLatex": "0^\\circ, \\; 180^\\circ, \\; 360^\\circ \\neq 90^\\circ, \\; 270^\\circ",
          "explanation": "None of the solutions falls where tangent is undefined, so all remain valid.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Verify θ = 180°",
          "workingLatex": "\\tan 180^\\circ = 0, \\quad \\sin 180^\\circ = 0",
          "explanation": "Both sides equal zero, confirming $180^\\circ$ is a genuine solution.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Verify θ = 0°",
          "workingLatex": "\\tan 0^\\circ = 0 = \\sin 0^\\circ",
          "explanation": "The endpoint satisfies the equation, confirming it is valid.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Collect all solutions",
          "workingLatex": "\\theta = 0^\\circ, \\; 180^\\circ, \\; 360^\\circ",
          "explanation": "Factorising rather than dividing has preserved every solution across the interval.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta = 0^\\circ,\\ 180^\\circ,\\ 360^\\circ$"
    }
  },
  {
    "id": "al.y1.pure.trig-identities.q060",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Identities and equations",
    "subtopicId": "al.y1.pure.trig-identities",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "solutions",
    "tags": [
      "trig-identities",
      "quadratic-in-cos",
      "reject-root"
    ],
    "questionText": "Solve $2\\sin^2\\theta + 5\\cos\\theta + 1 = 0$ for $0^\\circ \\leq \\theta \\leq 360^\\circ$. Give all solutions in degrees.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise the structure",
          "workingLatex": "2\\sin^2\\theta + 5\\cos\\theta + 1 = 0",
          "explanation": "The equation mixes $\\sin^2\\theta$ and $\\cos\\theta$. Converting to cosine gives a quadratic that we can factorise and test for valid roots.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the Pythagorean identity",
          "workingLatex": "\\sin^2\\theta = 1 - \\cos^2\\theta",
          "explanation": "Replacing $\\sin^2\\theta$ removes the sine, leaving everything in terms of cosine.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the identity",
          "workingLatex": "2(1 - \\cos^2\\theta) + 5\\cos\\theta + 1 = 0",
          "explanation": "Now the equation depends only on $\\cos\\theta$, forming a quadratic.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Expand the bracket",
          "workingLatex": "2 - 2\\cos^2\\theta + 5\\cos\\theta + 1 = 0",
          "explanation": "Multiplying out prepares the terms for collecting.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Collect constants",
          "workingLatex": "-2\\cos^2\\theta + 5\\cos\\theta + 3 = 0",
          "explanation": "Combining $2 + 1 = 3$ tidies the quadratic.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Make the leading coefficient positive",
          "workingLatex": "2\\cos^2\\theta - 5\\cos\\theta - 3 = 0",
          "explanation": "Multiplying through by $-1$ gives a positive $\\cos^2\\theta$ term for easier factorising.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Introduce a substitution",
          "workingLatex": "\\text{Let } c = \\cos\\theta: \\quad 2c^2 - 5c - 3 = 0",
          "explanation": "Writing $c = \\cos\\theta$ shows the standard quadratic to factorise.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Factorise the quadratic",
          "workingLatex": "(2c + 1)(c - 3) = 0",
          "explanation": "The split $c - 6c$ recreates the middle term $-5c$, confirming the factorisation.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solve each factor",
          "workingLatex": "c = -\\frac{1}{2} \\quad \\text{or} \\quad c = 3",
          "explanation": "Setting each bracket to zero gives the two candidate values of $\\cos\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Reject the impossible root",
          "workingLatex": "\\cos\\theta = 3 \\; \\text{is impossible since} \\; -1 \\leq \\cos\\theta \\leq 1",
          "explanation": "Cosine can never exceed $1$, so $c = 3$ has no solutions and is discarded.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Keep the valid root",
          "workingLatex": "\\cos\\theta = -\\frac{1}{2}",
          "explanation": "This value lies within the range of cosine, so it gives genuine solutions.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Find the reference angle",
          "workingLatex": "\\cos^{-1}\\left(\\frac{1}{2}\\right) = 60^\\circ",
          "explanation": "The acute angle for magnitude $\\tfrac{1}{2}$ is $60^\\circ$; the negative sign then determines the quadrants.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Write the quadrant solutions",
          "workingLatex": "\\theta = 180^\\circ - 60^\\circ = 120^\\circ, \\quad \\theta = 180^\\circ + 60^\\circ = 240^\\circ",
          "explanation": "Cosine is negative in the second and third quadrants, giving these two solutions.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Verify θ = 120°",
          "workingLatex": "2\\left(\\tfrac{3}{4}\\right) + 5\\left(-\\tfrac{1}{2}\\right) + 1 = 1.5 - 2.5 + 1 = 0",
          "explanation": "Substituting back confirms the equation holds, so $120^\\circ$ is correct.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Verify θ = 240°",
          "workingLatex": "2\\left(\\tfrac{3}{4}\\right) + 5\\left(-\\tfrac{1}{2}\\right) + 1 = 1.5 - 2.5 + 1 = 0",
          "explanation": "Since $\\cos 240^\\circ = -\\tfrac{1}{2}$ and $\\sin^2 240^\\circ = \\tfrac{3}{4}$, the equation is satisfied, confirming $240^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "Collect all solutions",
          "workingLatex": "\\theta = 120^\\circ, \\; 240^\\circ",
          "explanation": "Rejecting the impossible root leaves exactly two valid solutions in the interval.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta = 120^\\circ,\\ 240^\\circ$"
    }
  },
  {
    "id": "al.y1.pure.trig-identities.q061",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Identities and equations",
    "subtopicId": "al.y1.pure.trig-identities",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "trig-identities",
      "exact-values",
      "quadrants"
    ],
    "questionText": "Given that $\\sin\\theta = \\tfrac{3}{5}$ and that $\\theta$ is obtuse, so $90^\\circ < \\theta < 180^\\circ$, find the exact values of $\\cos\\theta$ and $\\tan\\theta$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the given information",
          "workingLatex": "\\sin\\theta = \\frac{3}{5}, \\quad 90^\\circ < \\theta < 180^\\circ",
          "explanation": "We record exactly what the question gives us: the sine value together with the interval that fixes the quadrant. Both are needed, because the sine alone leaves the sign of the cosine undecided.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose the Pythagorean identity",
          "workingLatex": "\\sin^2\\theta + \\cos^2\\theta \\equiv 1",
          "explanation": "This identity links sine and cosine directly, so it is the natural bridge from a known sine to an unknown cosine.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange for cosine squared",
          "workingLatex": "\\cos^2\\theta = 1 - \\sin^2\\theta",
          "explanation": "Rearranging isolates the quantity we want, $\\cos^2\\theta$, before any numbers go in.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the sine value",
          "workingLatex": "\\cos^2\\theta = 1 - \\left(\\frac{3}{5}\\right)^2",
          "explanation": "Replacing $\\sin\\theta$ with its value turns the identity into pure arithmetic.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Square the fraction",
          "workingLatex": "\\left(\\frac{3}{5}\\right)^2 = \\frac{9}{25}",
          "explanation": "Doing the square on its own line keeps the arithmetic clean and error-free.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify",
          "workingLatex": "\\cos^2\\theta = 1 - \\frac{9}{25} = \\frac{16}{25}",
          "explanation": "Writing $1$ as $\\tfrac{25}{25}$ and subtracting gives a single tidy fraction for $\\cos^2\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Take the square root",
          "workingLatex": "\\cos\\theta = \\pm\\sqrt{\\frac{16}{25}} = \\pm\\frac{4}{5}",
          "explanation": "Square-rooting undoes the square but produces two possible signs; the quadrant will decide which is correct.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Identify the quadrant",
          "workingLatex": "90^\\circ < \\theta < 180^\\circ \\Rightarrow \\text{second quadrant}",
          "explanation": "An angle between $90^\\circ$ and $180^\\circ$ lies in the second quadrant, where cosine is negative.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Select the correct sign",
          "workingLatex": "\\cos\\theta = -\\frac{4}{5}",
          "explanation": "Because the second quadrant forces a negative cosine, we keep the minus sign.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Recall the tangent identity",
          "workingLatex": "\\tan\\theta \\equiv \\frac{\\sin\\theta}{\\cos\\theta}",
          "explanation": "Tangent is defined as the ratio of sine to cosine, so once both are known the tangent follows at once.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Substitute both values",
          "workingLatex": "\\tan\\theta = \\frac{\\frac{3}{5}}{-\\frac{4}{5}}",
          "explanation": "We substitute the exact values, keeping the signs explicit.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Simplify the compound fraction",
          "workingLatex": "\\tan\\theta = \\frac{3}{5} \\times \\left(-\\frac{5}{4}\\right) = -\\frac{3}{4}",
          "explanation": "Dividing by a fraction is multiplying by its reciprocal; the fifths cancel to leave a clean value.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Check the sign against the quadrant",
          "workingLatex": "\\text{Q2}: \\ \\tan\\theta < 0 \\ \\checkmark",
          "explanation": "In the second quadrant tangent is negative, which matches our result and acts as a quick sanity check.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Verify with the identity",
          "workingLatex": "\\left(\\frac{3}{5}\\right)^2 + \\left(-\\frac{4}{5}\\right)^2 = \\frac{9}{25} + \\frac{16}{25} = 1 \\ \\checkmark",
          "explanation": "Substituting back into $\\sin^2\\theta + \\cos^2\\theta$ returns exactly $1$, confirming the cosine value is consistent.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\cos\\theta = -\\tfrac{4}{5}$ and $\\tan\\theta = -\\tfrac{3}{4}$."
    }
  },
  {
    "id": "al.y1.pure.trig-identities.q062",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Identities and equations",
    "subtopicId": "al.y1.pure.trig-identities",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "trig-identities",
      "exact-values",
      "quadrants"
    ],
    "questionText": "Given that $\\cos\\theta = -\\tfrac{5}{13}$ and that $180^\\circ < \\theta < 270^\\circ$, find the exact values of $\\sin\\theta$ and $\\tan\\theta$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the given information",
          "workingLatex": "\\cos\\theta = -\\frac{5}{13}, \\quad 180^\\circ < \\theta < 270^\\circ",
          "explanation": "We note the cosine value together with the interval; the interval is what will tell us the sign of the sine we are about to find.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose the Pythagorean identity",
          "workingLatex": "\\sin^2\\theta + \\cos^2\\theta \\equiv 1",
          "explanation": "This identity connects the known cosine to the unknown sine.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange for sine squared",
          "workingLatex": "\\sin^2\\theta = 1 - \\cos^2\\theta",
          "explanation": "We isolate $\\sin^2\\theta$ so the substitution is a single clean step.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the cosine value",
          "workingLatex": "\\sin^2\\theta = 1 - \\left(-\\frac{5}{13}\\right)^2",
          "explanation": "Putting in the cosine value converts the identity into arithmetic.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Square the fraction",
          "workingLatex": "\\left(-\\frac{5}{13}\\right)^2 = \\frac{25}{169}",
          "explanation": "Squaring a negative gives a positive, so the minus sign does not affect this term.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify",
          "workingLatex": "\\sin^2\\theta = 1 - \\frac{25}{169} = \\frac{144}{169}",
          "explanation": "Subtracting from one leaves a tidy fraction over $169$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Take the square root",
          "workingLatex": "\\sin\\theta = \\pm\\sqrt{\\frac{144}{169}} = \\pm\\frac{12}{13}",
          "explanation": "Taking the root gives two candidate signs; the quadrant resolves which one applies.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Identify the quadrant",
          "workingLatex": "180^\\circ < \\theta < 270^\\circ \\Rightarrow \\text{third quadrant}",
          "explanation": "An angle between $180^\\circ$ and $270^\\circ$ is in the third quadrant, where sine is negative.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Select the correct sign",
          "workingLatex": "\\sin\\theta = -\\frac{12}{13}",
          "explanation": "The third quadrant forces the negative sine.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Recall the tangent identity",
          "workingLatex": "\\tan\\theta \\equiv \\frac{\\sin\\theta}{\\cos\\theta}",
          "explanation": "Tangent is sine over cosine, so we can now assemble it from the two known values.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Substitute both values",
          "workingLatex": "\\tan\\theta = \\frac{-\\frac{12}{13}}{-\\frac{5}{13}}",
          "explanation": "We substitute both exact values, carrying their signs.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Simplify the compound fraction",
          "workingLatex": "\\tan\\theta = \\frac{12}{13} \\times \\frac{13}{5} = \\frac{12}{5}",
          "explanation": "The thirteenths cancel and two negatives make a positive result.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Check the sign against the quadrant",
          "workingLatex": "\\text{Q3}: \\ \\tan\\theta > 0 \\ \\checkmark",
          "explanation": "Tangent is positive in the third quadrant, matching our answer.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Verify with the identity",
          "workingLatex": "\\left(-\\frac{12}{13}\\right)^2 + \\left(-\\frac{5}{13}\\right)^2 = \\frac{144 + 25}{169} = 1 \\ \\checkmark",
          "explanation": "The identity check returns $1$, confirming the values fit together.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sin\\theta = -\\tfrac{12}{13}$ and $\\tan\\theta = \\tfrac{12}{5}$."
    }
  },
  {
    "id": "al.y1.pure.trig-identities.q063",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Identities and equations",
    "subtopicId": "al.y1.pure.trig-identities",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "trig-identities",
      "exact-values",
      "quadrants"
    ],
    "questionText": "Given that $\\tan\\theta = \\tfrac{4}{3}$ and that $\\theta$ lies in the third quadrant, so $180^\\circ < \\theta < 270^\\circ$, find the exact values of $\\sin\\theta$ and $\\cos\\theta$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the given information",
          "workingLatex": "\\tan\\theta = \\frac{4}{3}, \\quad 180^\\circ < \\theta < 270^\\circ",
          "explanation": "We list the tangent and the interval; the interval pins down the signs of the sine and cosine we will find.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write sine in terms of cosine",
          "workingLatex": "\\tan\\theta \\equiv \\frac{\\sin\\theta}{\\cos\\theta} \\Rightarrow \\sin\\theta = \\frac{4}{3}\\cos\\theta",
          "explanation": "Using the tangent identity lets us express $\\sin\\theta$ as a multiple of $\\cos\\theta$, reducing two unknowns to one.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Bring in the Pythagorean identity",
          "workingLatex": "\\sin^2\\theta + \\cos^2\\theta \\equiv 1",
          "explanation": "This gives a second equation linking sine and cosine, enough to solve for the cosine.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute for sine",
          "workingLatex": "\\left(\\frac{4}{3}\\cos\\theta\\right)^2 + \\cos^2\\theta = 1",
          "explanation": "Replacing $\\sin\\theta$ leaves an equation in $\\cos\\theta$ alone.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Expand the square",
          "workingLatex": "\\frac{16}{9}\\cos^2\\theta + \\cos^2\\theta = 1",
          "explanation": "Squaring the coefficient $\\tfrac{4}{3}$ gives $\\tfrac{16}{9}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine like terms",
          "workingLatex": "\\frac{25}{9}\\cos^2\\theta = 1",
          "explanation": "Adding the two cosine-squared terms, using $1 = \\tfrac{9}{9}$, collects them into one.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for cosine squared",
          "workingLatex": "\\cos^2\\theta = \\frac{9}{25}",
          "explanation": "Dividing both sides by $\\tfrac{25}{9}$ isolates $\\cos^2\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Take the square root",
          "workingLatex": "\\cos\\theta = \\pm\\frac{3}{5}",
          "explanation": "The square root gives two signs, to be settled by the quadrant.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Use the quadrant for cosine",
          "workingLatex": "180^\\circ < \\theta < 270^\\circ \\Rightarrow \\cos\\theta < 0",
          "explanation": "Cosine is negative in the third quadrant.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Select the cosine value",
          "workingLatex": "\\cos\\theta = -\\frac{3}{5}",
          "explanation": "We choose the negative root accordingly.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Find the sine",
          "workingLatex": "\\sin\\theta = \\frac{4}{3} \\times \\left(-\\frac{3}{5}\\right) = -\\frac{4}{5}",
          "explanation": "Multiplying back through $\\sin\\theta = \\tfrac{4}{3}\\cos\\theta$ gives the sine.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Check the sine sign",
          "workingLatex": "\\text{Q3}: \\ \\sin\\theta < 0 \\ \\checkmark",
          "explanation": "Sine is also negative in the third quadrant, consistent with our value.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Verify the Pythagorean identity",
          "workingLatex": "\\left(-\\frac{4}{5}\\right)^2 + \\left(-\\frac{3}{5}\\right)^2 = \\frac{16 + 9}{25} = 1 \\ \\checkmark",
          "explanation": "The values satisfy $\\sin^2\\theta + \\cos^2\\theta = 1$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Verify the tangent",
          "workingLatex": "\\frac{-\\frac{4}{5}}{-\\frac{3}{5}} = \\frac{4}{3} \\ \\checkmark",
          "explanation": "The ratio of our sine to cosine returns the original tangent, closing the loop.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sin\\theta = -\\tfrac{4}{5}$ and $\\cos\\theta = -\\tfrac{3}{5}$."
    }
  },
  {
    "id": "al.y1.pure.trig-identities.q064",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Identities and equations",
    "subtopicId": "al.y1.pure.trig-identities",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "proof",
    "tags": [
      "trig-identities",
      "proof",
      "algebraic-fractions"
    ],
    "questionText": "Prove the identity $\\dfrac{\\cos\\theta}{1-\\sin\\theta} + \\dfrac{\\cos\\theta}{1+\\sin\\theta} \\equiv \\dfrac{2}{\\cos\\theta}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Start from the left-hand side",
          "workingLatex": "\\text{LHS} = \\frac{\\cos\\theta}{1-\\sin\\theta} + \\frac{\\cos\\theta}{1+\\sin\\theta}",
          "explanation": "We begin with the more complicated side and aim to transform it into the right-hand side; simplifying the busier side is usually the easier route.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Plan to combine the fractions",
          "workingLatex": "\\text{add over a common denominator}",
          "explanation": "Two separate fractions add most cleanly once they share a single denominator.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Choose the common denominator",
          "workingLatex": "(1-\\sin\\theta)(1+\\sin\\theta)",
          "explanation": "This product is the natural common denominator and, being a difference of two squares, will simplify nicely later on.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rewrite the first fraction",
          "workingLatex": "\\frac{\\cos\\theta}{1-\\sin\\theta} = \\frac{\\cos\\theta(1+\\sin\\theta)}{(1-\\sin\\theta)(1+\\sin\\theta)}",
          "explanation": "The first fraction is scaled so its denominator becomes the common one.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rewrite the second fraction",
          "workingLatex": "\\frac{\\cos\\theta}{1+\\sin\\theta} = \\frac{\\cos\\theta(1-\\sin\\theta)}{(1-\\sin\\theta)(1+\\sin\\theta)}",
          "explanation": "The second fraction is scaled in the same way.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Add the numerators",
          "workingLatex": "\\text{LHS} = \\frac{\\cos\\theta(1+\\sin\\theta) + \\cos\\theta(1-\\sin\\theta)}{(1-\\sin\\theta)(1+\\sin\\theta)}",
          "explanation": "With equal denominators the numerators simply add.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Expand the numerator",
          "workingLatex": "\\cos\\theta + \\cos\\theta\\sin\\theta + \\cos\\theta - \\cos\\theta\\sin\\theta",
          "explanation": "Expanding each product prepares the numerator for cancellation.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Simplify the numerator",
          "workingLatex": "= 2\\cos\\theta",
          "explanation": "The two $\\cos\\theta\\sin\\theta$ terms are equal and opposite, so they cancel, leaving $2\\cos\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Expand the denominator",
          "workingLatex": "(1-\\sin\\theta)(1+\\sin\\theta) = 1 - \\sin^2\\theta",
          "explanation": "The denominator is a difference of two squares, giving $1-\\sin^2\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the Pythagorean identity",
          "workingLatex": "\\sin^2\\theta + \\cos^2\\theta \\equiv 1",
          "explanation": "This identity is the key that rewrites $1-\\sin^2\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Rearrange the identity",
          "workingLatex": "1 - \\sin^2\\theta = \\cos^2\\theta",
          "explanation": "Rearranged, it tells us that $1-\\sin^2\\theta$ is exactly $\\cos^2\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Substitute into the denominator",
          "workingLatex": "\\text{LHS} = \\frac{2\\cos\\theta}{\\cos^2\\theta}",
          "explanation": "Replacing the denominator gives a single simple fraction.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Cancel a factor of cosine",
          "workingLatex": "= \\frac{2}{\\cos\\theta}",
          "explanation": "One factor of $\\cos\\theta$ cancels between top and bottom.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Conclude the proof",
          "workingLatex": "\\text{LHS} = \\frac{2}{\\cos\\theta} = \\text{RHS} \\quad \\blacksquare",
          "explanation": "The simplified left-hand side matches the right-hand side, so the identity holds.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Numerical sanity check",
          "workingLatex": "\\theta = 60^\\circ: \\ \\frac{0.5}{1-0.866} + \\frac{0.5}{1+0.866} \\approx 4 = \\frac{2}{0.5}",
          "explanation": "Testing a specific angle is a reassuring numerical confirmation that the algebra is correct.",
          "diagram": null
        }
      ],
      "finalAnswer": "The identity is proven: $\\dfrac{\\cos\\theta}{1-\\sin\\theta} + \\dfrac{\\cos\\theta}{1+\\sin\\theta} \\equiv \\dfrac{2}{\\cos\\theta}$."
    }
  },
  {
    "id": "al.y1.pure.trig-identities.q065",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Identities and equations",
    "subtopicId": "al.y1.pure.trig-identities",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "solutions",
    "tags": [
      "trig-identities",
      "quadratic-in-cos",
      "solving-equations"
    ],
    "questionText": "Show that the equation $2\\sin^2\\theta + 3\\cos\\theta - 3 = 0$ can be written as a quadratic in $\\cos\\theta$, and hence solve it fully for $0^\\circ \\le \\theta \\le 360^\\circ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the equation and interval",
          "workingLatex": "2\\sin^2\\theta + 3\\cos\\theta - 3 = 0, \\quad 0^\\circ \\le \\theta \\le 360^\\circ",
          "explanation": "The equation mixes $\\sin^2\\theta$ and $\\cos\\theta$; to solve it we first make every term use the same function.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose the identity",
          "workingLatex": "\\sin^2\\theta \\equiv 1 - \\cos^2\\theta",
          "explanation": "The Pythagorean identity lets us replace $\\sin^2\\theta$ with an expression in $\\cos\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute",
          "workingLatex": "2(1 - \\cos^2\\theta) + 3\\cos\\theta - 3 = 0",
          "explanation": "After substitution every term involves cosine only.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Expand the bracket",
          "workingLatex": "2 - 2\\cos^2\\theta + 3\\cos\\theta - 3 = 0",
          "explanation": "Expanding clears the way to collect like terms.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "-2\\cos^2\\theta + 3\\cos\\theta - 1 = 0",
          "explanation": "Collecting the constants tidies the equation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Make the leading coefficient positive",
          "workingLatex": "2\\cos^2\\theta - 3\\cos\\theta + 1 = 0",
          "explanation": "Multiplying through by $-1$ gives the more familiar positive leading coefficient.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Recognise a quadratic in cosine",
          "workingLatex": "\\text{let } c = \\cos\\theta: \\ 2c^2 - 3c + 1 = 0",
          "explanation": "Viewing $\\cos\\theta$ as a single variable reveals an ordinary quadratic.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Factorise",
          "workingLatex": "(2c - 1)(c - 1) = 0",
          "explanation": "The quadratic factorises neatly, which is quicker than the formula here.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solve for cosine",
          "workingLatex": "c = \\frac{1}{2} \\ \\text{or}\\ c = 1",
          "explanation": "Setting each factor to zero gives the possible cosine values.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "First case",
          "workingLatex": "\\cos\\theta = \\frac{1}{2}",
          "explanation": "We take the first value and find its angles.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Solve the first case",
          "workingLatex": "\\theta = 60^\\circ, \\ 300^\\circ",
          "explanation": "Cosine equals $\\tfrac{1}{2}$ at $60^\\circ$ and at its reflection $300^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Second case",
          "workingLatex": "\\cos\\theta = 1",
          "explanation": "We take the second value.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Solve the second case",
          "workingLatex": "\\theta = 0^\\circ, \\ 360^\\circ",
          "explanation": "Cosine equals $1$ at the two ends of the interval, $0^\\circ$ and $360^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Collect all solutions",
          "workingLatex": "\\theta = 0^\\circ, \\ 60^\\circ, \\ 300^\\circ, \\ 360^\\circ",
          "explanation": "Gathering every angle in the interval gives the full solution set.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Verify a solution",
          "workingLatex": "2\\sin^2 60^\\circ + 3\\cos 60^\\circ - 3 = 2\\cdot\\tfrac{3}{4} + 3\\cdot\\tfrac{1}{2} - 3 = 0 \\ \\checkmark",
          "explanation": "Substituting $\\theta = 60^\\circ$ back confirms the equation balances.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta = 0^\\circ, \\ 60^\\circ, \\ 300^\\circ, \\ 360^\\circ$."
    }
  },
  {
    "id": "al.y1.pure.trig-identities.q066",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Identities and equations",
    "subtopicId": "al.y1.pure.trig-identities",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "solutions",
    "tags": [
      "trig-identities",
      "solving-equations",
      "extraneous-roots"
    ],
    "questionText": "Solve $\\sin\\theta + \\cos\\theta = 1$ for $0^\\circ \\le \\theta \\le 360^\\circ$ by squaring both sides, being careful to discard any extraneous roots.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the equation and interval",
          "workingLatex": "\\sin\\theta + \\cos\\theta = 1, \\quad 0^\\circ \\le \\theta \\le 360^\\circ",
          "explanation": "We have a sum of sine and cosine equal to one; squaring is a standard way to bring in the Pythagorean identity, though it can create false roots we must later remove.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Square both sides",
          "workingLatex": "(\\sin\\theta + \\cos\\theta)^2 = 1^2",
          "explanation": "Squaring keeps the equation true for every genuine solution.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand the left side",
          "workingLatex": "\\sin^2\\theta + 2\\sin\\theta\\cos\\theta + \\cos^2\\theta = 1",
          "explanation": "Expanding the square produces the three familiar terms.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Group the squared terms",
          "workingLatex": "(\\sin^2\\theta + \\cos^2\\theta) + 2\\sin\\theta\\cos\\theta = 1",
          "explanation": "Grouping the squared terms sets up the Pythagorean identity.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply the identity",
          "workingLatex": "1 + 2\\sin\\theta\\cos\\theta = 1",
          "explanation": "The bracket is exactly one, which simplifies the equation dramatically.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify",
          "workingLatex": "2\\sin\\theta\\cos\\theta = 0",
          "explanation": "Cancelling the ones leaves a simple product equal to zero.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Use the zero-product rule",
          "workingLatex": "\\sin\\theta\\cos\\theta = 0 \\Rightarrow \\sin\\theta = 0 \\ \\text{or}\\ \\cos\\theta = 0",
          "explanation": "A product is zero only if one of its factors is zero, splitting the problem into two easy cases.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve sine equals zero",
          "workingLatex": "\\sin\\theta = 0 \\Rightarrow \\theta = 0^\\circ, \\ 180^\\circ, \\ 360^\\circ",
          "explanation": "Sine is zero at the multiples of $180^\\circ$ inside the interval.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solve cosine equals zero",
          "workingLatex": "\\cos\\theta = 0 \\Rightarrow \\theta = 90^\\circ, \\ 270^\\circ",
          "explanation": "Cosine is zero at $90^\\circ$ and $270^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "List the candidates",
          "workingLatex": "\\theta = 0^\\circ, \\ 90^\\circ, \\ 180^\\circ, \\ 270^\\circ, \\ 360^\\circ",
          "explanation": "These five angles are only candidates; squaring may have introduced roots that fail the original equation.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Note the need to test",
          "workingLatex": "\\text{check each candidate in } \\sin\\theta + \\cos\\theta = 1",
          "explanation": "Because squaring can invent solutions, each candidate must be tested in the untouched original equation.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Test 0 degrees",
          "workingLatex": "\\sin 0^\\circ + \\cos 0^\\circ = 0 + 1 = 1 \\ \\checkmark",
          "explanation": "At $0^\\circ$ the original equation holds, so this root is genuine.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Test 90 degrees",
          "workingLatex": "\\sin 90^\\circ + \\cos 90^\\circ = 1 + 0 = 1 \\ \\checkmark",
          "explanation": "At $90^\\circ$ the equation also holds.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Test 180 degrees",
          "workingLatex": "\\sin 180^\\circ + \\cos 180^\\circ = 0 - 1 = -1 \\ne 1 \\ \\text{(reject)}",
          "explanation": "At $180^\\circ$ the left side is $-1$, so this root is extraneous and is rejected.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Test 270 degrees",
          "workingLatex": "\\sin 270^\\circ + \\cos 270^\\circ = -1 + 0 = -1 \\ne 1 \\ \\text{(reject)}",
          "explanation": "At $270^\\circ$ the left side is again $-1$, so it too is rejected.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "Test 360 degrees",
          "workingLatex": "\\sin 360^\\circ + \\cos 360^\\circ = 0 + 1 = 1 \\ \\checkmark",
          "explanation": "At $360^\\circ$ the equation holds, so this root is genuine.",
          "diagram": null
        },
        {
          "stepNumber": 17,
          "description": "State the valid solutions",
          "workingLatex": "\\theta = 0^\\circ, \\ 90^\\circ, \\ 360^\\circ",
          "explanation": "Only the angles that pass the check survive as true solutions.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta = 0^\\circ, \\ 90^\\circ, \\ 360^\\circ$ (the roots $180^\\circ$ and $270^\\circ$ are extraneous)."
    }
  },
  {
    "id": "al.y1.pure.trig-identities.q067",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Identities and equations",
    "subtopicId": "al.y1.pure.trig-identities",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "trig-identities",
      "exact-values",
      "tan-ratio"
    ],
    "questionText": "Given that $5\\sin\\theta = 3\\cos\\theta$, find the exact value of $\\sin\\theta\\cos\\theta$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the given relation",
          "workingLatex": "5\\sin\\theta = 3\\cos\\theta",
          "explanation": "We start from the given linear relation between sine and cosine.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Divide by cosine",
          "workingLatex": "\\frac{5\\sin\\theta}{\\cos\\theta} = 3 \\Rightarrow 5\\tan\\theta = 3",
          "explanation": "Dividing by $\\cos\\theta$ converts the relation into one involving only the tangent.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the tangent",
          "workingLatex": "\\tan\\theta = \\frac{3}{5}",
          "explanation": "This gives a single, clean value for $\\tan\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Interpret as a right triangle",
          "workingLatex": "\\text{opposite} = 3, \\quad \\text{adjacent} = 5",
          "explanation": "A tangent of $\\tfrac{3}{5}$ can be pictured as a right triangle with opposite $3$ and adjacent $5$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the hypotenuse",
          "workingLatex": "h = \\sqrt{3^2 + 5^2} = \\sqrt{34}",
          "explanation": "Pythagoras gives the hypotenuse of that triangle.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the sine",
          "workingLatex": "\\sin\\theta = \\frac{3}{\\sqrt{34}}",
          "explanation": "In the first-quadrant picture, sine is opposite over hypotenuse.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the cosine",
          "workingLatex": "\\cos\\theta = \\frac{5}{\\sqrt{34}}",
          "explanation": "Cosine is adjacent over hypotenuse.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Form the product",
          "workingLatex": "\\sin\\theta\\cos\\theta = \\frac{3}{\\sqrt{34}} \\times \\frac{5}{\\sqrt{34}}",
          "explanation": "The required product is formed by multiplying these two.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Simplify",
          "workingLatex": "= \\frac{15}{34}",
          "explanation": "The roots multiply to $34$, giving a tidy fraction.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Consider the other quadrant",
          "workingLatex": "\\tan\\theta = \\frac{3}{5} \\Rightarrow \\theta \\text{ in Q1 or Q3}",
          "explanation": "A tangent value corresponds to two angles a half-turn apart, so we should check the other one.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Values in the third quadrant",
          "workingLatex": "\\sin\\theta = -\\frac{3}{\\sqrt{34}}, \\quad \\cos\\theta = -\\frac{5}{\\sqrt{34}}",
          "explanation": "In the third quadrant both sine and cosine are negative.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Product in the third quadrant",
          "workingLatex": "\\left(-\\frac{3}{\\sqrt{34}}\\right)\\left(-\\frac{5}{\\sqrt{34}}\\right) = \\frac{15}{34}",
          "explanation": "Multiplying two negatives gives the same positive product as before.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Conclude",
          "workingLatex": "\\sin\\theta\\cos\\theta = \\frac{15}{34}",
          "explanation": "Either way the product is identical, so the answer is unambiguous.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Verify the original relation",
          "workingLatex": "5\\cdot\\frac{3}{\\sqrt{34}} = \\frac{15}{\\sqrt{34}} = 3\\cdot\\frac{5}{\\sqrt{34}} \\ \\checkmark",
          "explanation": "Substituting the values back reproduces the original relation, confirming consistency.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sin\\theta\\cos\\theta = \\tfrac{15}{34}$."
    }
  },
  {
    "id": "al.y1.pure.trig-identities.q068",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Identities and equations",
    "subtopicId": "al.y1.pure.trig-identities",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "solutions",
    "tags": [
      "trig-identities",
      "quadratic-in-sin",
      "solving-equations"
    ],
    "questionText": "Solve $6\\cos^2\\theta + 7\\sin\\theta - 8 = 0$ for $0^\\circ \\le \\theta \\le 360^\\circ$, giving non-exact answers to one decimal place.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the equation and interval",
          "workingLatex": "6\\cos^2\\theta + 7\\sin\\theta - 8 = 0, \\quad 0^\\circ \\le \\theta \\le 360^\\circ",
          "explanation": "The equation mixes $\\cos^2\\theta$ with $\\sin\\theta$, so we first rewrite it in a single function.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose the identity",
          "workingLatex": "\\cos^2\\theta \\equiv 1 - \\sin^2\\theta",
          "explanation": "The Pythagorean identity converts the cosine-squared term into sine.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute",
          "workingLatex": "6(1 - \\sin^2\\theta) + 7\\sin\\theta - 8 = 0",
          "explanation": "After substitution the equation is expressed through sine alone.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Expand the bracket",
          "workingLatex": "6 - 6\\sin^2\\theta + 7\\sin\\theta - 8 = 0",
          "explanation": "Expanding frees the terms to be collected.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "-6\\sin^2\\theta + 7\\sin\\theta - 2 = 0",
          "explanation": "Collecting the constants tidies the expression.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Make the leading coefficient positive",
          "workingLatex": "6\\sin^2\\theta - 7\\sin\\theta + 2 = 0",
          "explanation": "Multiplying by $-1$ gives the usual positive leading coefficient.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Factorise",
          "workingLatex": "(3\\sin\\theta - 2)(2\\sin\\theta - 1) = 0",
          "explanation": "The quadratic in $\\sin\\theta$ factorises directly.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for sine",
          "workingLatex": "\\sin\\theta = \\frac{2}{3} \\ \\text{or}\\ \\sin\\theta = \\frac{1}{2}",
          "explanation": "Each factor set to zero gives a possible sine value.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Exact case",
          "workingLatex": "\\sin\\theta = \\frac{1}{2}",
          "explanation": "We take the exact standard value first.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Solve the exact case",
          "workingLatex": "\\theta = 30^\\circ, \\ 150^\\circ",
          "explanation": "Sine equals $\\tfrac{1}{2}$ at $30^\\circ$ and at its supplement $150^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Non-standard case",
          "workingLatex": "\\sin\\theta = \\frac{2}{3}",
          "explanation": "The other value is not a standard angle, so we use the inverse sine.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Principal value",
          "workingLatex": "\\theta = \\sin^{-1}\\left(\\tfrac{2}{3}\\right) = 41.8^\\circ \\ (1\\text{ d.p.})",
          "explanation": "The calculator gives the principal first-quadrant angle.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Second angle",
          "workingLatex": "\\theta = 180^\\circ - 41.8^\\circ = 138.2^\\circ",
          "explanation": "Sine is also positive in the second quadrant, giving a second angle from $180^\\circ$ minus the first.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Collect all solutions",
          "workingLatex": "\\theta = 30^\\circ, \\ 41.8^\\circ, \\ 138.2^\\circ, \\ 150^\\circ",
          "explanation": "Collecting all four angles gives the complete solution.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Verify a solution",
          "workingLatex": "6\\cos^2 30^\\circ + 7\\sin 30^\\circ - 8 = 6\\cdot\\tfrac{3}{4} + 7\\cdot\\tfrac{1}{2} - 8 = 0 \\ \\checkmark",
          "explanation": "Substituting $\\theta = 30^\\circ$ back confirms the working.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta = 30^\\circ, \\ 41.8^\\circ, \\ 138.2^\\circ, \\ 150^\\circ$ (angles to 1 d.p.)."
    }
  },
  {
    "id": "al.y1.pure.trig-identities.q069",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Identities and equations",
    "subtopicId": "al.y1.pure.trig-identities",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "solutions",
    "tags": [
      "trig-identities",
      "modelling",
      "solving-equations"
    ],
    "questionText": "A designer is planning a decorative arch. A straight support beam is fixed at an angle $\\theta$ to the horizontal, where $0^\\circ < \\theta < 90^\\circ$. A structural condition requires the beam angle to satisfy $2\\cos^2\\theta + \\sin\\theta = 2$. By first solving this equation for all $\\theta$ in $0^\\circ \\le \\theta \\le 360^\\circ$, determine the angle at which the beam must be fixed.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the equation and full interval",
          "workingLatex": "2\\cos^2\\theta + \\sin\\theta = 2, \\quad 0^\\circ \\le \\theta \\le 360^\\circ",
          "explanation": "We translate the design condition into an equation, solving across a full revolution first and applying the physical range afterwards.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose the identity",
          "workingLatex": "\\cos^2\\theta \\equiv 1 - \\sin^2\\theta",
          "explanation": "The equation mixes $\\cos^2\\theta$ with $\\sin\\theta$, so the identity is used to write it in one function.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute",
          "workingLatex": "2(1 - \\sin^2\\theta) + \\sin\\theta = 2",
          "explanation": "Substituting removes the cosine-squared term.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Expand the bracket",
          "workingLatex": "2 - 2\\sin^2\\theta + \\sin\\theta = 2",
          "explanation": "Expanding prepares the equation for simplification.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "-2\\sin^2\\theta + \\sin\\theta = 0",
          "explanation": "The constant terms cancel, leaving only sine terms.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Make the leading coefficient positive",
          "workingLatex": "2\\sin^2\\theta - \\sin\\theta = 0",
          "explanation": "Multiplying by $-1$ tidies the signs.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Factor out sine",
          "workingLatex": "\\sin\\theta(2\\sin\\theta - 1) = 0",
          "explanation": "A common factor of $\\sin\\theta$ lets us factorise instead of using the formula.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Use the zero-product rule",
          "workingLatex": "\\sin\\theta = 0 \\ \\text{or}\\ \\sin\\theta = \\frac{1}{2}",
          "explanation": "The product is zero when either factor is zero.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solve sine equals zero",
          "workingLatex": "\\sin\\theta = 0 \\Rightarrow \\theta = 0^\\circ, \\ 180^\\circ, \\ 360^\\circ",
          "explanation": "Sine is zero at the multiples of $180^\\circ$ in the interval.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Solve sine equals a half",
          "workingLatex": "\\sin\\theta = \\frac{1}{2} \\Rightarrow \\theta = 30^\\circ, \\ 150^\\circ",
          "explanation": "Sine equals $\\tfrac{1}{2}$ at $30^\\circ$ and $150^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "List all mathematical solutions",
          "workingLatex": "\\theta = 0^\\circ, \\ 30^\\circ, \\ 150^\\circ, \\ 180^\\circ, \\ 360^\\circ",
          "explanation": "These are all the mathematically valid angles over a full turn.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Apply the physical constraint",
          "workingLatex": "0^\\circ < \\theta < 90^\\circ",
          "explanation": "The context restricts the beam to a rising angle strictly between horizontal and vertical.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Discard invalid angles",
          "workingLatex": "\\text{reject } 0^\\circ, \\ 150^\\circ, \\ 180^\\circ, \\ 360^\\circ",
          "explanation": "Angles at or beyond $90^\\circ$, and the flat $0^\\circ$, cannot describe a rising support, so they are discarded.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Identify the remaining angle",
          "workingLatex": "\\theta = 30^\\circ",
          "explanation": "Only one angle remains inside the allowed range.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Interpret in context",
          "workingLatex": "\\text{beam fixed at } 30^\\circ \\text{ to the horizontal}",
          "explanation": "We read the surviving solution back in the language of the problem.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "Verify",
          "workingLatex": "2\\cos^2 30^\\circ + \\sin 30^\\circ = 2\\cdot\\tfrac{3}{4} + \\tfrac{1}{2} = 2 \\ \\checkmark",
          "explanation": "Substituting into the original condition confirms the angle is correct.",
          "diagram": null
        }
      ],
      "finalAnswer": "The beam must be fixed at $\\theta = 30^\\circ$ to the horizontal."
    }
  },
  {
    "id": "al.y1.pure.trig-identities.q070",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Identities and equations",
    "subtopicId": "al.y1.pure.trig-identities",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "solutions",
    "tags": [
      "trig-identities",
      "proof",
      "solving-equations"
    ],
    "questionText": "(a) Prove that $\\sin^2\\theta - \\cos^2\\theta \\equiv 2\\sin^2\\theta - 1$. (b) Hence solve $\\sin^2\\theta - \\cos^2\\theta = \\tfrac{1}{2}$ for $0^\\circ \\le \\theta \\le 360^\\circ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Begin the proof from the left side",
          "workingLatex": "\\text{LHS} = \\sin^2\\theta - \\cos^2\\theta",
          "explanation": "For part (a) we begin with the left-hand side and aim to reach the right-hand side.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Bring in the Pythagorean identity",
          "workingLatex": "\\sin^2\\theta + \\cos^2\\theta \\equiv 1 \\Rightarrow \\cos^2\\theta = 1 - \\sin^2\\theta",
          "explanation": "The Pythagorean identity supplies a replacement for $\\cos^2\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute for cosine squared",
          "workingLatex": "\\text{LHS} = \\sin^2\\theta - (1 - \\sin^2\\theta)",
          "explanation": "Substituting removes the cosine term entirely.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Expand the bracket",
          "workingLatex": "= \\sin^2\\theta - 1 + \\sin^2\\theta",
          "explanation": "Removing the bracket changes the sign of each term inside.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify to the right side",
          "workingLatex": "= 2\\sin^2\\theta - 1 = \\text{RHS} \\quad \\blacksquare",
          "explanation": "Combining the two sine-squared terms gives exactly the right-hand side, completing the proof.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the equation to solve",
          "workingLatex": "\\sin^2\\theta - \\cos^2\\theta = \\frac{1}{2}",
          "explanation": "For part (b) we write the equation we must solve.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Use the proven identity",
          "workingLatex": "2\\sin^2\\theta - 1 = \\frac{1}{2}",
          "explanation": "The identity just proved lets us replace the whole left side with a single sine expression.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Add one to both sides",
          "workingLatex": "2\\sin^2\\theta = \\frac{3}{2}",
          "explanation": "Adding one isolates the sine-squared term.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Divide by two",
          "workingLatex": "\\sin^2\\theta = \\frac{3}{4}",
          "explanation": "Dividing by two gives $\\sin^2\\theta$ on its own.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Take the square root",
          "workingLatex": "\\sin\\theta = \\pm\\frac{\\sqrt{3}}{2}",
          "explanation": "Square-rooting introduces both a positive and a negative value.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Positive case",
          "workingLatex": "\\sin\\theta = \\frac{\\sqrt{3}}{2} \\Rightarrow \\theta = 60^\\circ, \\ 120^\\circ",
          "explanation": "The positive value gives the two first- and second-quadrant angles.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Negative case",
          "workingLatex": "\\sin\\theta = -\\frac{\\sqrt{3}}{2} \\Rightarrow \\theta = 240^\\circ, \\ 300^\\circ",
          "explanation": "The negative value gives the two third- and fourth-quadrant angles.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Collect the solutions",
          "workingLatex": "\\theta = 60^\\circ, \\ 120^\\circ, \\ 240^\\circ, \\ 300^\\circ",
          "explanation": "Collecting them lists every solution in the interval.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Verify a solution",
          "workingLatex": "\\sin^2 60^\\circ - \\cos^2 60^\\circ = \\tfrac{3}{4} - \\tfrac{1}{4} = \\tfrac{1}{2} \\ \\checkmark",
          "explanation": "Substituting $\\theta = 60^\\circ$ back confirms the equation is satisfied.",
          "diagram": null
        }
      ],
      "finalAnswer": "Identity proven; $\\theta = 60^\\circ, \\ 120^\\circ, \\ 240^\\circ, \\ 300^\\circ$."
    }
  }
];
